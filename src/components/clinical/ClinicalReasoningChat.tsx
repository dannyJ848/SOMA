/**
 * ClinicalReasoningChat Component
 *
 * Enhanced AI chat with structured clinical reasoning capabilities.
 * Provides transparent reasoning, citations, and appropriate disclaimers.
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { generateDifferentialDiagnosis } from '../../../core/clinical-reasoning/differential-diagnosis';
import { analyzeForRedFlags, type RedFlagEducationResult } from '../../../core/clinical-reasoning/red-flag-education';
import { chat } from '../../../core/ai/ollama';
import type {
  SymptomInput,
  PatientDemographics,
  DifferentialDiagnosisResult,
  ClarifyingQuestion,
  ReviewOfSystems,
} from '../../../core/clinical-reasoning/types';
import type { ChatMessage as OllamaChatMessage } from '../../../core/ai/ollama';
import './ClinicalReasoningChat.css';

// ============================================
// Types
// ============================================

export interface ClinicalReasoningChatProps {
  /** Initial symptoms to analyze */
  initialSymptoms?: SymptomInput[];
  /** Patient demographics for context */
  demographics?: PatientDemographics;
  /** Callback when a diagnosis is selected */
  onDiagnosisSelect?: (diagnosis: string) => void;
  /** Callback to view anatomy */
  onViewAnatomy?: (structureId: string) => void;
  /** Enable detailed reasoning display */
  showReasoningDetails?: boolean;
  /** Initial review of systems data */
  initialROS?: Partial<ReviewOfSystems>;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  reasoning?: string;
  citations?: string[];
  clarifyingQuestions?: ClarifyingQuestion[];
  differentials?: DifferentialDiagnosisResult;
  redFlags?: RedFlagEducationResult;
}

// ============================================
// Medical Disclaimer
// ============================================

const MEDICAL_DISCLAIMER = `
**IMPORTANT DISCLAIMER**: This tool is for educational purposes only and does not provide medical advice, diagnosis, or treatment. The information provided should not be used as a substitute for professional medical judgment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you think you may have a medical emergency, call your doctor or emergency services immediately.
`;

const SYSTEM_PROMPT = `You are a clinical reasoning assistant for educational purposes. Your role is to:

1. Help users understand symptoms and their potential causes from an educational perspective
2. Explain clinical reasoning in a transparent, step-by-step manner
3. Ask clarifying questions to better understand the clinical picture
4. Provide educational content about anatomy, physiology, and pathophysiology
5. Always emphasize when to seek professional medical care

IMPORTANT RULES:
- Never provide definitive diagnoses
- Always include appropriate disclaimers
- Cite medical knowledge sources when possible
- Explain uncertainty and limitations
- Recommend professional evaluation when appropriate
- Highlight red flags and urgency clearly

When analyzing symptoms:
1. Consider anatomical locations and what structures are involved
2. Think about physiological processes that could be affected
3. Consider differential diagnoses in order of likelihood and urgency
4. Identify any red flag symptoms that require immediate attention
5. Suggest clarifying questions to narrow the differential

Format your responses with clear sections and use medical terminology with plain language explanations.`;

// ============================================
// Main Component
// ============================================

export const ClinicalReasoningChat: React.FC<ClinicalReasoningChatProps> = ({
  initialSymptoms = [],
  demographics,
  onDiagnosisSelect,
  onViewAnatomy,
  showReasoningDetails = true,
  initialROS,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSymptoms, setCurrentSymptoms] = useState<SymptomInput[]>(initialSymptoms);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: 'welcome',
        role: 'assistant',
        content: `Hello! I'm a clinical reasoning assistant designed to help you understand symptoms from an educational perspective.

I can help you:
- Understand what symptoms might mean anatomically and physiologically
- Learn about differential diagnosis reasoning
- Identify warning signs that need immediate medical attention
- Understand what questions doctors might ask

Please describe your symptoms, and I'll help you understand them better. Remember, this is for educational purposes only - always consult a healthcare professional for medical advice.`,
        timestamp: new Date(),
      }]);
    }
  }, []);

  // Process symptoms and generate analysis
  const analyzeSymptoms = useCallback(async (symptoms: SymptomInput[]) => {
    setIsLoading(true);

    try {
      // Run differential diagnosis
      const ddxResult = await generateDifferentialDiagnosis(symptoms, demographics, true);

      // Check for red flags
      const redFlagResult = analyzeForRedFlags(symptoms, demographics);

      // Generate AI explanation
      const symptomSummary = symptoms.map(s =>
        `${s.name}${s.severity ? ` (severity: ${s.severity}/10)` : ''}${s.location ? ` in ${s.location.bodyRegion}` : ''}`
      ).join(', ');

      const aiPrompt = `A user reports the following symptoms: ${symptomSummary}

Analyze this from an educational clinical reasoning perspective:

1. What anatomical structures could be involved?
2. What physiological systems are affected?
3. What are the key considerations in differential diagnosis?
4. What clarifying questions would help narrow the possibilities?
5. Are there any red flags or urgency considerations?

Provide a clear, educational explanation that helps the user understand the clinical reasoning process.`;

      const aiResponse = await chat({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: aiPrompt },
        ] as OllamaChatMessage[],
      });

      const analysisMessage: ChatMessage = {
        id: `analysis-${Date.now()}`,
        role: 'assistant',
        content: aiResponse.message.content,
        timestamp: new Date(),
        differentials: ddxResult,
        redFlags: redFlagResult,
        clarifyingQuestions: ddxResult.questionsToAsk.slice(0, 3),
      };

      setMessages(prev => [...prev, analysisMessage]);

      // If red flags detected, add a prominent warning
      if (redFlagResult.hasRedFlags) {
        const warningMessage: ChatMessage = {
          id: `warning-${Date.now()}`,
          role: 'system',
          content: `**WARNING: RED FLAGS DETECTED**

${redFlagResult.alerts.map(a => `- **${a.pattern.name}**: ${a.education.recommendedAction}`).join('\n')}

**Please seek medical attention promptly.** ${redFlagResult.alerts[0]?.education.whatThisMeans || ''}`,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, warningMessage]);
      }

    } catch (error) {
      console.error('Analysis error:', error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'system',
        content: 'I encountered an error analyzing your symptoms. Please try again or describe your symptoms differently.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [demographics]);

  // Handle user message
  const handleSend = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Extract symptoms from the message
      const newSymptom: SymptomInput = {
        name: inputValue.trim(),
      };

      const updatedSymptoms = [...currentSymptoms, newSymptom];
      setCurrentSymptoms(updatedSymptoms);

      // Get AI response
      const conversationHistory = messages
        .filter(m => m.role !== 'system')
        .map(m => ({ role: m.role as 'user' | 'assistant', content: m.content }));

      const aiResponse = await chat({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...conversationHistory,
          { role: 'user', content: inputValue.trim() },
        ] as OllamaChatMessage[],
      });

      const responseMessage: ChatMessage = {
        id: `response-${Date.now()}`,
        role: 'assistant',
        content: aiResponse.message.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, responseMessage]);

      // If the message seems to be describing symptoms, trigger analysis
      if (inputValue.toLowerCase().includes('pain') ||
          inputValue.toLowerCase().includes('hurt') ||
          inputValue.toLowerCase().includes('ache') ||
          inputValue.toLowerCase().includes('symptom') ||
          inputValue.toLowerCase().includes('feel')) {
        await analyzeSymptoms(updatedSymptoms);
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'system',
        content: 'I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, messages, currentSymptoms, analyzeSymptoms]);

  // Handle clarifying question answer
  const handleQuestionAnswer = useCallback((question: string, answer: string) => {
    setInputValue(`Regarding "${question}": ${answer}`);
    inputRef.current?.focus();
  }, []);

  // Handle diagnosis selection
  const handleDiagnosisClick = useCallback((diagnosis: string) => {
    onDiagnosisSelect?.(diagnosis);
    setInputValue(`Tell me more about ${diagnosis}`);
  }, [onDiagnosisSelect]);

  // Handle key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  return (
    <div className="clinical-reasoning-chat">
      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="disclaimer-banner">
          <div className="disclaimer-content">
            <span className="disclaimer-icon">!</span>
            <p>{MEDICAL_DISCLAIMER.split('\n')[1]}</p>
          </div>
          <button className="disclaimer-close" onClick={() => setShowDisclaimer(false)}>
            Dismiss
          </button>
        </div>
      )}

      {/* Messages */}
      <div className="messages-container">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.role}`}>
            <div className="message-content">
              {message.content.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Red Flags Display */}
            {message.redFlags && message.redFlags.hasRedFlags && (
              <div className="red-flags-panel">
                <h4>Warning Signs Detected</h4>
                {message.redFlags.alerts.map((alert, idx) => (
                  <div key={idx} className="red-flag-item">
                    <span className="red-flag-name">{alert.pattern.name}</span>
                    <span className="red-flag-action">{alert.education.recommendedAction}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Differentials Display */}
            {message.differentials && showReasoningDetails && (
              <div className="differentials-panel">
                <h4>Possible Conditions (Educational)</h4>
                <div className="differentials-list">
                  {message.differentials.differentials.slice(0, 5).map((ddx, idx) => (
                    <div
                      key={idx}
                      className={`differential-item urgency-${ddx.urgency}`}
                      onClick={() => handleDiagnosisClick(ddx.conditionName)}
                    >
                      <span className="differential-rank">{idx + 1}</span>
                      <span className="differential-name">{ddx.conditionName}</span>
                      <span className="differential-probability">
                        {Math.round(ddx.probability * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clarifying Questions */}
            {message.clarifyingQuestions && message.clarifyingQuestions.length > 0 && (
              <div className="clarifying-questions">
                <h4>Questions to Consider</h4>
                {message.clarifyingQuestions.map((q, idx) => (
                  <div key={idx} className="question-item">
                    <p className="question-text">{q.question}</p>
                    <p className="question-purpose">{q.purpose}</p>
                    <div className="question-quick-actions">
                      <button onClick={() => handleQuestionAnswer(q.question, 'Yes')}>Yes</button>
                      <button onClick={() => handleQuestionAnswer(q.question, 'No')}>No</button>
                      <button onClick={() => handleQuestionAnswer(q.question, '')}>Describe...</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <span className="message-timestamp">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}

        {isLoading && (
          <div className="message assistant loading">
            <div className="loading-indicator">
              <span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="input-container">
        <textarea
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Describe your symptoms or ask a question..."
          rows={2}
          disabled={isLoading}
        />
        <button
          className="send-button"
          onClick={handleSend}
          disabled={isLoading || !inputValue.trim()}
        >
          Send
        </button>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button onClick={() => setInputValue('What are the red flags I should watch for?')}>
          Red Flags
        </button>
        <button onClick={() => setInputValue('What questions would a doctor ask?')}>
          Doctor Questions
        </button>
        <button onClick={() => setInputValue('When should I seek medical care?')}>
          When to Seek Care
        </button>
      </div>
    </div>
  );
};

export default ClinicalReasoningChat;
