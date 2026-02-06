/**
 * ClinicalSimulator Component
 * 
 * Main component for the clinical scenario simulator.
 * Manages case state and renders appropriate sub-components.
 */

import React, { useState, useCallback, useEffect } from 'react';
import { 
  startCase, 
  makeDecision, 
  advanceToNextNode, 
  getCurrentNode,
  getRevealedLabs,
  getRevealedImaging,
  getCaseScore,
  identifyMissedOpportunities,
  getAllCases,
} from '../../../core/education/simulator';
import type { 
  ClinicalCase, 
  CaseSession, 
  ScenarioNode,
  DecisionNode,
  InformationNode,
  OutcomeNode,
} from '../../../core/education/simulator/types';
import { CasePresentation } from './CasePresentation';
import { DecisionPoint } from './DecisionPoint';
import { OutcomeDisplay } from './OutcomeDisplay';
import { CaseSummary } from './CaseSummary';

type SimulatorView = 'menu' | 'case' | 'outcome';

export const ClinicalSimulator: React.FC = () => {
  const [view, setView] = useState<SimulatorView>('menu');
  const [cases, setCases] = useState<ClinicalCase[]>([]);
  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null);
  const [session, setSession] = useState<CaseSession | null>(null);
  const [currentNode, setCurrentNode] = useState<ScenarioNode | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load cases on mount
  useEffect(() => {
    const loadedCases = getAllCases();
    setCases(loadedCases);
  }, []);

  // Start a new case
  const handleStartCase = useCallback((caseData: ClinicalCase) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const newSession = startCase({
        userId: 'user-1', // In real app, get from auth
        caseId: caseData.id,
      });
      
      const node = getCurrentNode(newSession.id);
      
      setSelectedCase(caseData);
      setSession(newSession);
      setCurrentNode(node);
      setView('case');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start case');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle decision
  const handleDecision = useCallback((optionId: string, timeSpentSeconds: number) => {
    if (!session) return;
    
    try {
      setIsLoading(true);
      
      const result = makeDecision(session.id, optionId, timeSpentSeconds);
      
      setSession(result.session);
      setCurrentNode(result.nextNode);
      
      // If outcome node, switch to outcome view
      if (result.isComplete && result.nextNode?.type === 'outcome') {
        setTimeout(() => {
          setView('outcome');
        }, 2000); // Delay to let user read feedback
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process decision');
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  // Advance to next node (for presentation/information nodes)
  const handleAdvance = useCallback(() => {
    if (!session) return;
    
    try {
      setIsLoading(true);
      
      const result = advanceToNextNode(session.id);
      
      setSession(result.session);
      setCurrentNode(result.node);
      
      if (result.isComplete && result.node?.type === 'outcome') {
        setView('outcome');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to advance');
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  // Restart current case
  const handleRestart = useCallback(() => {
    if (selectedCase) {
      handleStartCase(selectedCase);
    }
  }, [selectedCase, handleStartCase]);

  // Go back to menu
  const handleBackToMenu = useCallback(() => {
    setView('menu');
    setSelectedCase(null);
    setSession(null);
    setCurrentNode(null);
    setError(null);
  }, []);

  // Render menu view
  const renderMenu = () => (
    <div className="simulator-menu">
      <div className="menu-header">
        <h1>Clinical Scenario Simulator</h1>
        <p>
          Practice real-world decision-making in safe, interactive patient cases.
          Each case takes 5-10 minutes and includes evidence-based feedback.
        </p>
      </div>

      <div className="cases-grid">
        {cases.map((caseData) => (
          <CaseSummary
            key={caseData.id}
            caseData={caseData}
            onSelect={() => handleStartCase(caseData)}
            isCompleted={false} // TODO: Track completed cases
          />
        ))}
      </div>

      {cases.length === 0 && (
        <div className="no-cases">
          <p>No cases available. Please check back later.</p>
        </div>
      )}
    </div>
  );

  // Render case view
  const renderCase = () => {
    if (!selectedCase || !session || !currentNode) return null;

    const revealedLabs = getRevealedLabs(session.id);
    const revealedImaging = getRevealedImaging(session.id);

    return (
      <div className="simulator-case">
        <div className="case-nav">
          <button className="btn-back" onClick={handleBackToMenu}>
            ← Back to Cases
          </button>
          <div className="case-progress">
            Case: {selectedCase.title}
          </div>
        </div>

        <div className="case-content">
          {currentNode.type === 'presentation' && (
            <>
              <CasePresentation
                presentation={selectedCase.presentation}
                revealedLabs={revealedLabs}
                revealedImaging={revealedImaging}
              />
              <div className="action-bar">
                <button 
                  className="btn-primary"
                  onClick={handleAdvance}
                  disabled={isLoading}
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {currentNode.type === 'decision' && (
            <DecisionPoint
              node={currentNode as DecisionNode}
              onDecision={handleDecision}
              isLoading={isLoading}
            />
          )}

          {currentNode.type === 'information' && (
            <div className="information-node">
              <div className="info-header">
                <h2>{(currentNode as InformationNode).title}</h2>
              </div>
              <div className="info-narrative">
                {(currentNode as InformationNode).narrative}
              </div>
              
              {(currentNode as InformationNode).newLabs && (
                <div className="new-labs">
                  <h4>New Lab Results</h4>
                  <div className="lab-notifications">
                    {(currentNode as InformationNode).newLabs?.map((lab) => (
                      <div key={lab.id} className={`lab-notification ${lab.flag || 'normal'}`}>
                        <span className="lab-name">{lab.name}</span>
                        <span className="lab-value-result">{lab.value} {lab.unit}</span>
                        <span className="lab-ref">(Ref: {lab.referenceRange})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {(currentNode as InformationNode).newImaging && (
                <div className="new-imaging">
                  <h4>New Imaging Results</h4>
                  <div className="imaging-notifications">
                    {(currentNode as InformationNode).newImaging?.map((img) => (
                      <div key={img.id} className="imaging-notification">
                        <div className="imaging-title">{img.type.toUpperCase()} - {img.region}</div>
                        <p>{img.description}</p>
                        <div className="impression">
                          <strong>Impression:</strong> {img.impression}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="action-bar">
                <button 
                  className="btn-primary"
                  onClick={handleAdvance}
                  disabled={isLoading}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render outcome view
  const renderOutcome = () => {
    if (!session || !currentNode || currentNode.type !== 'outcome') return null;

    const score = getCaseScore(session.id);
    const missedOpportunities = identifyMissedOpportunities(session, selectedCase!);
    const outcome = currentNode as OutcomeNode;

    return (
      <div className="simulator-outcome">
        <OutcomeDisplay
          outcome={outcome}
          score={score}
          missedOpportunities={missedOpportunities}
          onRestart={handleRestart}
          onNextCase={handleBackToMenu}
        />
      </div>
    );
  };

  // Main render
  return (
    <div className="clinical-simulator">
      {error && (
        <div className="error-banner">
          {error}
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}
      
      {view === 'menu' && renderMenu()}
      {view === 'case' && renderCase()}
      {view === 'outcome' && renderOutcome()}
    </div>
  );
};
