/**
 * Structure Info Panel
 *
 * Shows comprehensive information about a selected anatomical structure,
 * with content at the user's complexity level.
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * Structure information with multi-level content
 */
export interface StructureInfo {
  fmaId: string;
  name: string;
  latinName?: string;
  system: string;
  location: string;

  // Multi-level explanations
  explanations: {
    level1?: string;  // 8th grade
    level2?: string;  // High school
    level3?: string;  // College
    level4?: string;  // Graduate
    level5?: string;  // MD
  };

  // Key facts
  keyFacts: string[];

  // Related structures
  partOf?: { id: string; name: string }[];
  hasParts?: { id: string; name: string }[];
  relatedStructures?: { id: string; name: string; relationship: string }[];

  // Clinical correlations (level 4-5 only)
  clinicalCorrelations?: string[];

  // Links
  histologyId?: string;
  labTests?: string[];
}

interface StructureInfoPanelProps {
  structureId: string;
  structureName: string;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  onClose?: () => void;
  onSelectStructure?: (id: string) => void;
  onViewInIsolation?: () => void;
  onViewHistology?: (histologyId: string) => void;
  onViewPathology?: (structureId: string, structureName: string) => void;
  onViewEducation?: () => void;
  onAskAI?: (query: string) => void;
}

// Complexity level labels
const LEVEL_LABELS: Record<number, string> = {
  1: '8th Grade',
  2: 'High School',
  3: 'College',
  4: 'Graduate',
  5: 'MD Level',
};

export function StructureInfoPanel({
  structureId,
  structureName,
  complexityLevel,
  onClose,
  onSelectStructure,
  onViewInIsolation,
  onViewHistology,
  onViewPathology,
  onViewEducation,
  onAskAI,
}: StructureInfoPanelProps) {
  const [info, setInfo] = useState<StructureInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['explanation', 'keyFacts']));

  // Load structure information
  useEffect(() => {
    loadStructureInfo();
  }, [structureId, structureName]);

  const loadStructureInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      // In a full implementation, this would:
      // 1. Fetch FMA entity from ontology
      // 2. Retrieve content from RAG
      // 3. Compile multi-level explanations

      // For now, create sample data
      const sampleInfo = createSampleInfo(structureId, structureName);
      setInfo(sampleInfo);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load structure info');
    } finally {
      setLoading(false);
    }
  };

  // Get explanation for current level (with fallback to lower levels)
  const getExplanation = useCallback((): string => {
    if (!info) return '';

    for (let level = complexityLevel; level >= 1; level--) {
      const key = `level${level}` as keyof typeof info.explanations;
      if (info.explanations[key]) {
        return info.explanations[key]!;
      }
    }
    return 'No explanation available.';
  }, [info, complexityLevel]);

  // Toggle section expansion
  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  // Handle AI question
  const handleAskQuestion = (question: string) => {
    onAskAI?.(`Tell me about ${info?.name || structureName}: ${question}`);
  };

  if (loading) {
    return (
      <div className="structure-info-panel">
        <div className="panel-header">
          <h2>Loading...</h2>
          {onClose && <button className="close-btn" onClick={onClose}>×</button>}
        </div>
        <div className="panel-content">
          <div className="loading-skeleton">
            <div className="skeleton-line" style={{ width: '80%' }} />
            <div className="skeleton-line" style={{ width: '60%' }} />
            <div className="skeleton-line" style={{ width: '90%' }} />
            <div className="skeleton-line" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="structure-info-panel">
        <div className="panel-header">
          <h2>{structureName}</h2>
          {onClose && <button className="close-btn" onClick={onClose}>×</button>}
        </div>
        <div className="panel-content">
          <div className="error-message">
            {error}
            <button onClick={loadStructureInfo}>Retry</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="structure-info-panel">
      {/* Header */}
      <div className="panel-header">
        <div className="header-info">
          <h2>{info?.name || structureName}</h2>
          {info?.latinName && <span className="latin-name">{info.latinName}</span>}
          <div className="header-tags">
            <span className="system-tag">{info?.system || 'Unknown System'}</span>
            <span className="level-tag">{LEVEL_LABELS[complexityLevel]}</span>
          </div>
        </div>
        {onClose && <button className="close-btn" onClick={onClose}>×</button>}
      </div>

      <div className="panel-content">
        {/* Quick actions */}
        <div className="quick-actions">
          {onViewInIsolation && (
            <button onClick={onViewInIsolation}>View in Isolation</button>
          )}
          {info?.histologyId && onViewHistology && (
            <button onClick={() => onViewHistology(info.histologyId!)}>View Histology</button>
          )}
          {onViewPathology && (
            <button
              onClick={() => onViewPathology(structureId, structureName)}
              className="pathology-btn"
              style={{ backgroundColor: '#5c3d2e', color: '#ffccbc' }}
            >
              View Pathology
            </button>
          )}
          {onViewEducation && (
            <button onClick={onViewEducation} className="education-btn">
              Education
            </button>
          )}
        </div>

        {/* Location */}
        {info?.location && (
          <div className="info-section">
            <h3>Location</h3>
            <p>{info.location}</p>
          </div>
        )}

        {/* Explanation (collapsible) */}
        <div className="info-section collapsible">
          <h3 onClick={() => toggleSection('explanation')}>
            <span className={`chevron ${expandedSections.has('explanation') ? 'expanded' : ''}`}>▸</span>
            Explanation
          </h3>
          {expandedSections.has('explanation') && (
            <div className="section-content">
              <p>{getExplanation()}</p>
            </div>
          )}
        </div>

        {/* Key Facts */}
        {info?.keyFacts && info.keyFacts.length > 0 && (
          <div className="info-section collapsible">
            <h3 onClick={() => toggleSection('keyFacts')}>
              <span className={`chevron ${expandedSections.has('keyFacts') ? 'expanded' : ''}`}>▸</span>
              Key Facts
            </h3>
            {expandedSections.has('keyFacts') && (
              <ul className="key-facts-list">
                {info.keyFacts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Related Structures */}
        {(info?.partOf?.length || info?.hasParts?.length || info?.relatedStructures?.length) && (
          <div className="info-section collapsible">
            <h3 onClick={() => toggleSection('related')}>
              <span className={`chevron ${expandedSections.has('related') ? 'expanded' : ''}`}>▸</span>
              Related Structures
            </h3>
            {expandedSections.has('related') && (
              <div className="related-structures">
                {info?.partOf && info.partOf.length > 0 && (
                  <div className="relation-group">
                    <h4>Part of:</h4>
                    <ul>
                      {info.partOf.map(s => (
                        <li key={s.id}>
                          <button onClick={() => onSelectStructure?.(s.id)}>{s.name}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {info?.hasParts && info.hasParts.length > 0 && (
                  <div className="relation-group">
                    <h4>Parts:</h4>
                    <ul>
                      {info.hasParts.map(s => (
                        <li key={s.id}>
                          <button onClick={() => onSelectStructure?.(s.id)}>{s.name}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {info?.relatedStructures && info.relatedStructures.length > 0 && (
                  <div className="relation-group">
                    <h4>Related:</h4>
                    <ul>
                      {info.relatedStructures.map(s => (
                        <li key={s.id}>
                          <button onClick={() => onSelectStructure?.(s.id)}>
                            {s.name} <span className="relationship">({s.relationship})</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Clinical Correlations (level 4-5 only) */}
        {complexityLevel >= 4 && info?.clinicalCorrelations && info.clinicalCorrelations.length > 0 && (
          <div className="info-section collapsible clinical">
            <h3 onClick={() => toggleSection('clinical')}>
              <span className={`chevron ${expandedSections.has('clinical') ? 'expanded' : ''}`}>▸</span>
              Clinical Correlations
            </h3>
            {expandedSections.has('clinical') && (
              <ul className="clinical-list">
                {info.clinicalCorrelations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Lab Tests */}
        {info?.labTests && info.labTests.length > 0 && (
          <div className="info-section">
            <h3>Related Lab Tests</h3>
            <div className="lab-tests">
              {info.labTests.map((test, i) => (
                <span key={i} className="lab-tag">{test}</span>
              ))}
            </div>
          </div>
        )}

        {/* Ask AI */}
        <div className="ask-ai-section">
          <h3>Ask AI about this structure</h3>
          <div className="ai-suggestions">
            <button onClick={() => handleAskQuestion('What is its function?')}>
              What is its function?
            </button>
            <button onClick={() => handleAskQuestion('What are common conditions?')}>
              Common conditions?
            </button>
            <button onClick={() => handleAskQuestion('How is it examined?')}>
              How is it examined?
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .structure-info-panel {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1e1e1e;
          color: #e0e0e0;
          border-left: 1px solid #333;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px;
          background: #252525;
          border-bottom: 1px solid #333;
        }

        .header-info h2 {
          margin: 0 0 4px 0;
          font-size: 18px;
          font-weight: 600;
        }

        .latin-name {
          display: block;
          font-style: italic;
          color: #888;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .header-tags {
          display: flex;
          gap: 8px;
        }

        .system-tag {
          background: #333;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          color: #4a9eff;
        }

        .level-tag {
          background: #2d4a1c;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          color: #8bc34a;
        }

        .close-btn {
          background: none;
          border: none;
          color: #888;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }

        .close-btn:hover {
          color: #fff;
        }

        .panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .quick-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .quick-actions button {
          flex: 1;
          padding: 8px 12px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          font-size: 13px;
        }

        .quick-actions button:hover {
          background: #444;
        }

        .quick-actions .education-btn {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          color: white;
          font-weight: 500;
        }

        .quick-actions .education-btn:hover {
          background: linear-gradient(135deg, #5aa8ff 0%, #8b4afd 100%);
        }

        .info-section {
          margin-bottom: 20px;
        }

        .info-section h3 {
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 8px 0;
        }

        .info-section.collapsible h3 {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .info-section.collapsible h3:hover {
          color: #aaa;
        }

        .chevron {
          transition: transform 0.2s;
          font-size: 10px;
        }

        .chevron.expanded {
          transform: rotate(90deg);
        }

        .info-section p {
          margin: 0;
          line-height: 1.6;
          color: #ccc;
        }

        .key-facts-list {
          margin: 0;
          padding-left: 20px;
        }

        .key-facts-list li {
          margin-bottom: 8px;
          color: #ccc;
        }

        .related-structures {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .relation-group h4 {
          margin: 0 0 4px 0;
          font-size: 12px;
          color: #888;
        }

        .relation-group ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .relation-group li {
          margin-bottom: 4px;
        }

        .relation-group button {
          background: none;
          border: none;
          color: #4a9eff;
          cursor: pointer;
          padding: 0;
          font-size: 14px;
          text-align: left;
        }

        .relation-group button:hover {
          text-decoration: underline;
        }

        .relationship {
          color: #666;
          font-size: 12px;
        }

        .info-section.clinical {
          background: rgba(255, 193, 7, 0.1);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255, 193, 7, 0.2);
        }

        .info-section.clinical h3 {
          color: #ffc107;
        }

        .clinical-list {
          margin: 0;
          padding-left: 20px;
        }

        .clinical-list li {
          margin-bottom: 8px;
          color: #ccc;
        }

        .lab-tests {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .lab-tag {
          background: #2d2d4a;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          color: #9c88ff;
        }

        .ask-ai-section {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #333;
        }

        .ask-ai-section h3 {
          font-size: 13px;
          color: #888;
          margin: 0 0 12px 0;
        }

        .ai-suggestions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ai-suggestions button {
          padding: 10px 12px;
          background: #252525;
          border: 1px solid #333;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          font-size: 13px;
        }

        .ai-suggestions button:hover {
          background: #2a2a2a;
          border-color: #444;
        }

        .loading-skeleton {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skeleton-line {
          height: 16px;
          background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .error-message {
          text-align: center;
          padding: 24px;
          color: #ff6b6b;
        }

        .error-message button {
          margin-top: 12px;
          padding: 8px 16px;
          background: #333;
          border: none;
          border-radius: 4px;
          color: #ccc;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

/**
 * Create sample structure info for testing
 */
function createSampleInfo(id: string, name: string): StructureInfo {
  // Sample data based on structure name
  const lowerName = name.toLowerCase();

  if (lowerName.includes('heart')) {
    return {
      fmaId: 'FMA:7088',
      name: 'Heart',
      latinName: 'Cor',
      system: 'Cardiovascular',
      location: 'Middle mediastinum, between the lungs, posterior to the sternum',
      explanations: {
        level1: 'The heart is like a pump that pushes blood through your body. It has four rooms (chambers) and beats about 100,000 times a day!',
        level2: 'The heart is a muscular organ that pumps blood through the circulatory system. It has four chambers: two atria that receive blood, and two ventricles that pump blood out.',
        level3: 'The heart is a hollow muscular organ with four chambers. The right side receives deoxygenated blood and pumps it to the lungs. The left side receives oxygenated blood and pumps it to the systemic circulation. Valves prevent backflow.',
        level4: 'The heart consists of specialized cardiac muscle (myocardium) with intrinsic automaticity. The sinoatrial node initiates depolarization, which spreads through the atria, reaches the AV node, and propagates through the His-Purkinje system to the ventricles.',
        level5: 'The myocardium exhibits force-frequency relationship and responds to preload (Frank-Starling mechanism) and afterload. Coronary perfusion occurs primarily during diastole. EF, cardiac output, and hemodynamic parameters are essential for clinical assessment.',
      },
      keyFacts: [
        'Weighs approximately 250-350 grams',
        'Pumps about 5 liters of blood per minute at rest',
        'Has four chambers: right and left atria, right and left ventricles',
        'Contains four valves: tricuspid, pulmonary, mitral, and aortic',
      ],
      partOf: [
        { id: 'FMA:7161', name: 'Cardiovascular system' },
      ],
      hasParts: [
        { id: 'FMA:7097', name: 'Right atrium' },
        { id: 'FMA:7098', name: 'Left atrium' },
        { id: 'FMA:7099', name: 'Right ventricle' },
        { id: 'FMA:7100', name: 'Left ventricle' },
      ],
      relatedStructures: [
        { id: 'FMA:50040', name: 'Aorta', relationship: 'receives blood from' },
        { id: 'FMA:7088', name: 'Pulmonary trunk', relationship: 'receives blood from' },
      ],
      clinicalCorrelations: [
        'Myocardial infarction results from coronary artery occlusion',
        'Heart failure may be systolic (reduced EF) or diastolic (preserved EF)',
        'Valvular disease can cause murmurs detectable on auscultation',
        'Arrhythmias originate from abnormal automaticity or re-entry circuits',
      ],
      histologyId: 'hist-002',
      labTests: ['Troponin', 'BNP', 'CK-MB', 'ECG'],
    };
  }

  // Default generic info
  return {
    fmaId: id,
    name: name,
    system: 'General',
    location: 'Location information not available',
    explanations: {
      level3: `The ${name} is an anatomical structure. More detailed information can be retrieved from the knowledge base.`,
    },
    keyFacts: [
      'Structure identification in progress',
      'Content being retrieved from knowledge base',
    ],
    partOf: [],
    hasParts: [],
    relatedStructures: [],
    clinicalCorrelations: [],
    labTests: [],
  };
}

export default StructureInfoPanel;
