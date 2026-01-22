/**
 * SymptomFollowUpChat Component
 *
 * AI-powered follow-up question component for symptom differential narrowing.
 * Generates clinically relevant follow-up questions based on selected symptom,
 * adapts questions based on user responses, and narrows the differential.
 */

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { invoke } from './tauri-invoke';
import type {
  SymptomAnatomyMapping,
  LikelihoodLevel,
} from '../core/exploration/symptom-anatomy/types';
import './SymptomFollowUpChat.css';

// ============================================
// Types
// ============================================

interface FollowUpQuestion {
  id: string;
  question: string;
  category: 'location' | 'quality' | 'timing' | 'severity' | 'associated' | 'modifying' | 'context';
  clinicalRationale: string;
  options?: string[];
  relevantSources: string[]; // structureIds this question helps differentiate
}

interface UserResponse {
  questionId: string;
  question: string;
  answer: string;
  timestamp: number;
}

interface DifferentialUpdate {
  structureId: string;
  structureName: string;
  previousLikelihood: LikelihoodLevel;
  updatedLikelihood: LikelihoodLevel;
  rationale: string;
}

interface ChatMessage {
  id: string;
  role: 'system' | 'assistant' | 'user';
  content: string;
  type?: 'question' | 'answer' | 'summary' | 'differential-update';
  question?: FollowUpQuestion;
  differentialUpdates?: DifferentialUpdate[];
  timestamp: number;
}

interface AIChatRAGResponse {
  content: string;
  model: string;
  done: boolean;
  citations: Array<{
    index: number;
    source: string;
    section?: string;
    url?: string;
  }>;
}

interface SymptomFollowUpChatProps {
  symptom: SymptomAnatomyMapping;
  onSourceLikelihoodUpdate?: (updates: DifferentialUpdate[]) => void;
  onHighlightSource?: (structureId: string) => void;
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
}

// ============================================
// Follow-up Question Templates by Symptom Category
// ============================================

const QUESTION_TEMPLATES: Record<string, FollowUpQuestion[]> = {
  pain: [
    {
      id: 'location-precise',
      question: 'Can you point to exactly where you feel the pain? Does it stay in one spot or move around?',
      category: 'location',
      clinicalRationale: 'Localized pain often suggests somatic origin; radiating or diffuse pain may indicate visceral or referred pain.',
      options: ['Stays in one spot', 'Moves around', 'Radiates to other areas'],
      relevantSources: [],
    },
    {
      id: 'quality',
      question: 'How would you describe the pain quality?',
      category: 'quality',
      clinicalRationale: 'Sharp pain suggests somatic/nociceptive cause; dull/aching suggests visceral; burning may indicate neuropathic.',
      options: ['Sharp/Stabbing', 'Dull/Aching', 'Burning', 'Pressure/Squeezing', 'Cramping', 'Throbbing'],
      relevantSources: [],
    },
    {
      id: 'onset',
      question: 'How did this pain start? Was it sudden or gradual?',
      category: 'timing',
      clinicalRationale: 'Sudden onset suggests acute events (perforation, dissection, MI); gradual onset more consistent with inflammatory or degenerative processes.',
      options: ['Sudden (seconds)', 'Rapid (minutes)', 'Gradual (hours/days)', 'Progressive over weeks'],
      relevantSources: [],
    },
    {
      id: 'duration',
      question: 'How long does the pain last when it occurs?',
      category: 'timing',
      clinicalRationale: 'Brief episodes suggest spasm or ischemia; constant pain suggests structural or inflammatory cause.',
      options: ['Seconds', 'Minutes', 'Hours', 'Constant'],
      relevantSources: [],
    },
    {
      id: 'severity',
      question: 'On a scale of 0-10, how severe is the pain at its worst?',
      category: 'severity',
      clinicalRationale: 'Severity helps gauge urgency and impact on function; very severe pain (9-10) warrants urgent evaluation.',
      options: ['Mild (1-3)', 'Moderate (4-6)', 'Severe (7-8)', 'Excruciating (9-10)'],
      relevantSources: [],
    },
    {
      id: 'aggravating',
      question: 'What makes the pain worse?',
      category: 'modifying',
      clinicalRationale: 'Movement-related worsening suggests musculoskeletal; eating suggests GI; breathing suggests pleural/pericardial.',
      options: ['Movement', 'Deep breathing', 'Eating', 'Stress/Exertion', 'Lying down', 'Nothing specific'],
      relevantSources: [],
    },
    {
      id: 'relieving',
      question: 'What makes the pain better?',
      category: 'modifying',
      clinicalRationale: 'Rest relief suggests musculoskeletal; antacids suggest GI; position changes may indicate specific organ involvement.',
      options: ['Rest', 'Movement', 'Eating', 'Antacids', 'Position change', 'Pain medication', 'Nothing helps'],
      relevantSources: [],
    },
    {
      id: 'associated',
      question: 'Do you have any other symptoms along with this pain?',
      category: 'associated',
      clinicalRationale: 'Associated symptoms help identify the organ system: nausea/vomiting (GI, cardiac), dyspnea (cardiac, pulmonary), fever (infection).',
      options: ['Nausea/Vomiting', 'Shortness of breath', 'Fever/Chills', 'Sweating', 'Numbness/Tingling', 'None'],
      relevantSources: [],
    },
  ],
  neurologic: [
    {
      id: 'pattern',
      question: 'Is this symptom constant or does it come and go?',
      category: 'timing',
      clinicalRationale: 'Episodic symptoms suggest paroxysmal conditions; constant symptoms may indicate structural lesion or progressive disease.',
      options: ['Constant', 'Comes and goes', 'Progressive (getting worse)', 'Fluctuating throughout day'],
      relevantSources: [],
    },
    {
      id: 'distribution',
      question: 'Where exactly do you feel this? One side or both? Upper or lower body?',
      category: 'location',
      clinicalRationale: 'Distribution helps localize lesion: unilateral suggests brain/spinal cord; dermatomal suggests nerve root; distal symmetric suggests peripheral neuropathy.',
      options: ['One side of body', 'Both sides equally', 'Mostly upper body', 'Mostly lower body', 'Hands and feet'],
      relevantSources: [],
    },
    {
      id: 'triggers',
      question: 'Does anything trigger or bring on this symptom?',
      category: 'modifying',
      clinicalRationale: 'Triggers help identify cause: position changes (vestibular, orthostatic), stress (migraine), activity (exertional).',
      options: ['Position changes', 'Head movement', 'Stress', 'Physical activity', 'Nothing specific'],
      relevantSources: [],
    },
    {
      id: 'neuro-associated',
      question: 'Do you have any weakness, vision changes, speech difficulties, or coordination problems?',
      category: 'associated',
      clinicalRationale: 'Associated neurologic deficits suggest central nervous system involvement and help localize lesion.',
      options: ['Weakness', 'Vision changes', 'Speech difficulty', 'Coordination problems', 'Confusion', 'None of these'],
      relevantSources: [],
    },
  ],
  cardiovascular: [
    {
      id: 'exertion',
      question: 'Does this symptom occur with physical activity or exertion?',
      category: 'modifying',
      clinicalRationale: 'Exertional symptoms suggest cardiac ischemia, heart failure, or deconditioning.',
      options: ['Only with exertion', 'With minimal activity', 'At rest', 'Both activity and rest'],
      relevantSources: [],
    },
    {
      id: 'position',
      question: 'Does lying flat make it worse? Do you need to sleep with extra pillows?',
      category: 'modifying',
      clinicalRationale: 'Orthopnea and paroxysmal nocturnal dyspnea are classic signs of left heart failure.',
      options: ['Worse lying flat', 'Need to sit up', 'No positional component', 'Wake up short of breath'],
      relevantSources: [],
    },
    {
      id: 'cardiac-associated',
      question: 'Do you have any chest discomfort, palpitations, or leg swelling?',
      category: 'associated',
      clinicalRationale: 'Associated cardiac symptoms help differentiate between cardiac vs non-cardiac causes.',
      options: ['Chest discomfort', 'Palpitations', 'Leg swelling', 'Lightheadedness', 'None of these'],
      relevantSources: [],
    },
  ],
  gastrointestinal: [
    {
      id: 'meals',
      question: 'Is this symptom related to eating? Does it occur before, during, or after meals?',
      category: 'timing',
      clinicalRationale: 'Timing with meals helps localize: before (duodenal ulcer), during/after (gastric, biliary, pancreatic).',
      options: ['Before meals', 'During meals', 'Shortly after meals', '1-2 hours after meals', 'No relation to food'],
      relevantSources: [],
    },
    {
      id: 'food-type',
      question: 'Are there specific foods that make it worse?',
      category: 'modifying',
      clinicalRationale: 'Food triggers help identify cause: fatty foods (biliary), dairy (lactose intolerance), gluten (celiac).',
      options: ['Fatty/greasy foods', 'Spicy foods', 'Dairy products', 'All foods equally', 'No specific foods'],
      relevantSources: [],
    },
    {
      id: 'gi-associated',
      question: 'Do you have any changes in bowel habits, blood in stool, or unintentional weight loss?',
      category: 'associated',
      clinicalRationale: 'These are alarm features that warrant prompt investigation for serious GI pathology.',
      options: ['Diarrhea', 'Constipation', 'Blood in stool', 'Weight loss', 'None of these'],
      relevantSources: [],
    },
  ],
  respiratory: [
    {
      id: 'cough',
      question: 'Do you have a cough? If so, is it dry or productive?',
      category: 'associated',
      clinicalRationale: 'Productive cough suggests infection or bronchiectasis; dry cough suggests interstitial disease, GERD, or ACE inhibitor.',
      options: ['No cough', 'Dry cough', 'Productive - clear/white', 'Productive - yellow/green', 'Productive - blood-tinged'],
      relevantSources: [],
    },
    {
      id: 'breathing',
      question: 'Is your breathing worse with inspiration, expiration, or both?',
      category: 'quality',
      clinicalRationale: 'Inspiratory difficulty suggests upper airway; expiratory suggests asthma/COPD; pleuritic pain worsens with breathing.',
      options: ['Worse breathing in', 'Worse breathing out', 'Equally difficult', 'Not related to breathing'],
      relevantSources: [],
    },
    {
      id: 'resp-triggers',
      question: 'What triggers your breathing symptoms?',
      category: 'modifying',
      clinicalRationale: 'Allergen exposure (asthma), cold air (reactive airways), recumbency (heart failure), exertion (multiple causes).',
      options: ['Exercise', 'Allergens/irritants', 'Cold air', 'Lying flat', 'Stress/anxiety', 'No specific trigger'],
      relevantSources: [],
    },
  ],
  constitutional: [
    {
      id: 'duration-const',
      question: 'How long have you been experiencing this symptom?',
      category: 'timing',
      clinicalRationale: 'Duration helps differentiate acute illness from chronic conditions or systemic disease.',
      options: ['Days', 'Weeks', 'Months', 'Years'],
      relevantSources: [],
    },
    {
      id: 'pattern-const',
      question: 'Is it worse at any particular time of day?',
      category: 'timing',
      clinicalRationale: 'Morning fatigue suggests sleep disorder; afternoon crash may indicate blood sugar issues; evening fatigue is common in depression.',
      options: ['Worse in morning', 'Worse in afternoon', 'Worse in evening', 'Constant throughout day'],
      relevantSources: [],
    },
    {
      id: 'const-associated',
      question: 'Have you noticed any fever, night sweats, or unintentional weight changes?',
      category: 'associated',
      clinicalRationale: 'These are "B symptoms" that suggest infection, malignancy, or systemic inflammatory disease.',
      options: ['Fever', 'Night sweats', 'Weight loss', 'Weight gain', 'None of these'],
      relevantSources: [],
    },
  ],
  default: [
    {
      id: 'onset-general',
      question: 'When did this symptom first start?',
      category: 'timing',
      clinicalRationale: 'Establishing timeline is fundamental for differential diagnosis.',
      options: ['Today', 'This week', 'This month', 'Longer than a month'],
      relevantSources: [],
    },
    {
      id: 'pattern-general',
      question: 'Has this symptom been constant, or does it come and go?',
      category: 'timing',
      clinicalRationale: 'Pattern helps differentiate episodic from continuous conditions.',
      options: ['Constant', 'Intermittent', 'Getting progressively worse', 'Getting better'],
      relevantSources: [],
    },
    {
      id: 'severity-general',
      question: 'How much does this symptom affect your daily activities?',
      category: 'severity',
      clinicalRationale: 'Functional impact helps gauge severity and urgency.',
      options: ['Not at all', 'Mild impact', 'Moderate impact', 'Severe - limits activities'],
      relevantSources: [],
    },
  ],
};

// ============================================
// Helper Functions
// ============================================

function generateQuestionId(): string {
  return `q-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getQuestionsForSymptom(symptom: SymptomAnatomyMapping): FollowUpQuestion[] {
  // Get category-specific questions
  const categoryQuestions = QUESTION_TEMPLATES[symptom.category] || QUESTION_TEMPLATES.default;

  // Always include some general questions
  const generalQuestions = QUESTION_TEMPLATES.default.filter(
    q => !categoryQuestions.find(cq => cq.category === q.category)
  );

  // Combine and customize relevantSources based on symptom's anatomical sources
  const allQuestions = [...categoryQuestions, ...generalQuestions].map(q => ({
    ...q,
    id: generateQuestionId(),
    relevantSources: symptom.anatomicalSources.map(s => s.structureId),
  }));

  return allQuestions;
}

function determineNextQuestion(
  allQuestions: FollowUpQuestion[],
  responses: UserResponse[],
  _symptom: SymptomAnatomyMapping
): FollowUpQuestion | null {
  const answeredCategories = new Set(responses.map(r => {
    const q = allQuestions.find(aq => aq.id === r.questionId);
    return q?.category;
  }));

  // Priority order for question categories
  const categoryOrder: FollowUpQuestion['category'][] = [
    'location',
    'quality',
    'timing',
    'severity',
    'modifying',
    'associated',
    'context',
  ];

  // Find next unanswered category
  for (const category of categoryOrder) {
    if (!answeredCategories.has(category)) {
      const question = allQuestions.find(q => q.category === category);
      if (question) return question;
    }
  }

  return null;
}

// ============================================
// Main Component
// ============================================

export function SymptomFollowUpChat({
  symptom,
  onSourceLikelihoodUpdate,
  onHighlightSource,
  complexityLevel = 3,
}: SymptomFollowUpChatProps) {
  // State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<FollowUpQuestion | null>(null);
  const [customInput, setCustomInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRationale, setShowRationale] = useState(false);
  const [differentialScores, setDifferentialScores] = useState<Map<string, number>>(new Map());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // All available questions for this symptom
  const allQuestions = useMemo(() => getQuestionsForSymptom(symptom), [symptom]);

  // Initialize with welcome message and first question
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: generateQuestionId(),
      role: 'system',
      content: `Let's explore your ${symptom.symptomName.toLowerCase()} to better understand what might be causing it. I'll ask you a few questions to help narrow down the possibilities.`,
      type: 'summary',
      timestamp: Date.now(),
    };

    setMessages([welcomeMessage]);

    // Initialize differential scores
    const initialScores = new Map<string, number>();
    symptom.anatomicalSources.forEach(source => {
      // Start with likelihood-based score
      const baseScore = {
        'common': 70,
        'less-common': 50,
        'rare': 30,
        'do-not-miss': 60, // Important to consider despite low prevalence
      }[source.likelihood] || 50;
      initialScores.set(source.structureId, baseScore);
    });
    setDifferentialScores(initialScores);

    // Ask first question after brief delay
    setTimeout(() => {
      const firstQuestion = determineNextQuestion(allQuestions, [], symptom);
      if (firstQuestion) {
        askQuestion(firstQuestion);
      }
    }, 500);
  }, [symptom, allQuestions]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Ask a question
  const askQuestion = useCallback((question: FollowUpQuestion) => {
    const questionMessage: ChatMessage = {
      id: generateQuestionId(),
      role: 'assistant',
      content: question.question,
      type: 'question',
      question,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, questionMessage]);
    setCurrentQuestion(question);
  }, []);

  // Handle user response
  const handleResponse = useCallback(async (answer: string) => {
    if (!currentQuestion || isLoading) return;

    // Add user's answer to messages
    const userMessage: ChatMessage = {
      id: generateQuestionId(),
      role: 'user',
      content: answer,
      type: 'answer',
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Record the response
    const response: UserResponse = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      answer,
      timestamp: Date.now(),
    };
    const updatedResponses = [...responses, response];
    setResponses(updatedResponses);
    setCurrentQuestion(null);
    setIsLoading(true);

    try {
      // Use AI to analyze the response and update differential
      const analysisResult = await analyzeResponseWithAI(
        symptom,
        currentQuestion,
        answer,
        updatedResponses,
        differentialScores,
        complexityLevel
      );

      if (analysisResult) {
        // Update differential scores
        const newScores = new Map(differentialScores);
        analysisResult.updates.forEach(update => {
          const currentScore = newScores.get(update.structureId) || 50;
          const adjustment = update.adjustment;
          newScores.set(update.structureId, Math.max(0, Math.min(100, currentScore + adjustment)));
        });
        setDifferentialScores(newScores);

        // Add AI analysis message
        if (analysisResult.explanation) {
          const analysisMessage: ChatMessage = {
            id: generateQuestionId(),
            role: 'assistant',
            content: analysisResult.explanation,
            type: 'differential-update',
            differentialUpdates: analysisResult.updates.map(u => ({
              structureId: u.structureId,
              structureName: symptom.anatomicalSources.find(s => s.structureId === u.structureId)?.structureName || u.structureId,
              previousLikelihood: getLikelihoodFromScore(differentialScores.get(u.structureId) || 50),
              updatedLikelihood: getLikelihoodFromScore(Math.max(0, Math.min(100, (differentialScores.get(u.structureId) || 50) + u.adjustment))),
              rationale: u.rationale,
            })),
            timestamp: Date.now(),
          };
          setMessages(prev => [...prev, analysisMessage]);

          // Notify parent of updates
          if (onSourceLikelihoodUpdate && analysisMessage.differentialUpdates) {
            onSourceLikelihoodUpdate(analysisMessage.differentialUpdates);
          }
        }
      }

      // Determine next question
      const nextQuestion = determineNextQuestion(allQuestions, updatedResponses, symptom);

      if (nextQuestion && updatedResponses.length < 6) {
        // Ask next question after brief delay
        setTimeout(() => askQuestion(nextQuestion), 800);
      } else {
        // Provide summary
        await provideSummary(updatedResponses, differentialScores);
      }
    } catch (error) {
      console.error('Error analyzing response:', error);
      // Continue with next question even on error
      const nextQuestion = determineNextQuestion(allQuestions, updatedResponses, symptom);
      if (nextQuestion) {
        setTimeout(() => askQuestion(nextQuestion), 500);
      }
    } finally {
      setIsLoading(false);
    }
  }, [currentQuestion, responses, symptom, differentialScores, allQuestions, isLoading, complexityLevel, onSourceLikelihoodUpdate, askQuestion]);

  // Analyze response with AI
  async function analyzeResponseWithAI(
    symptom: SymptomAnatomyMapping,
    question: FollowUpQuestion,
    answer: string,
    allResponses: UserResponse[],
    _currentScores: Map<string, number>,
    level: number
  ): Promise<{ explanation: string; updates: Array<{ structureId: string; adjustment: number; rationale: string }> } | null> {
    try {
      const sourcesInfo = symptom.anatomicalSources.map(s =>
        `- ${s.structureName} (${s.likelihood}): ${s.mechanism}`
      ).join('\n');

      const previousResponses = allResponses.slice(0, -1).map(r =>
        `Q: ${r.question}\nA: ${r.answer}`
      ).join('\n\n');

      const prompt = `You are a clinical reasoning assistant helping to narrow a differential diagnosis for ${symptom.symptomName}.

ANATOMICAL SOURCES TO CONSIDER:
${sourcesInfo}

${previousResponses ? `PREVIOUS Q&A:\n${previousResponses}\n\n` : ''}LATEST QUESTION: ${question.question}
CLINICAL RATIONALE FOR ASKING: ${question.clinicalRationale}

PATIENT'S ANSWER: ${answer}

Based on this answer, provide:
1. A brief (1-2 sentence) educational explanation of what this answer might indicate, written at complexity level ${level}/5 (1=patient-friendly, 5=medical professional)
2. For each anatomical source, indicate if this answer makes it MORE likely (+5 to +20), LESS likely (-5 to -20), or UNCHANGED (0)

Respond in this JSON format:
{
  "explanation": "Your educational explanation here",
  "updates": [
    {"structureId": "source-id", "adjustment": 10, "rationale": "Brief reason"},
    ...
  ]
}

Only include sources where the adjustment is non-zero.`;

      const response = await invoke<AIChatRAGResponse>('ai_chat_rag', {
        request: {
          messages: [{ role: 'user', content: prompt }],
          systemPrompt: 'You are a clinical reasoning assistant. Respond only with valid JSON.',
          temperature: 0.3,
          ragOptions: {
            complexityLevel: level,
            maxTokens: 1000,
          },
        },
      });

      // Parse JSON response
      const jsonMatch = response.content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (error) {
      console.error('AI analysis error:', error);
    }
    return null;
  }

  // Provide summary at end
  async function provideSummary(_allResponses: UserResponse[], finalScores: Map<string, number>) {
    // Sort sources by final score
    const rankedSources = symptom.anatomicalSources
      .map(s => ({
        ...s,
        score: finalScores.get(s.structureId) || 50,
      }))
      .sort((a, b) => b.score - a.score);

    const topSources = rankedSources.slice(0, 3);

    const summaryContent = `Based on your responses, the most likely sources for your ${symptom.symptomName.toLowerCase()} are:

${topSources.map((s, i) => `${i + 1}. **${s.structureName}** - ${s.mechanism}`).join('\n\n')}

${symptom.redFlags.length > 0 ? `\n**Important:** If you experience any of these warning signs, seek medical attention: ${symptom.redFlags.slice(0, 2).map(rf => rf.finding).join(', ')}.` : ''}

Remember, this is educational information only. Please consult a healthcare provider for proper evaluation and diagnosis.`;

    const summaryMessage: ChatMessage = {
      id: generateQuestionId(),
      role: 'assistant',
      content: summaryContent,
      type: 'summary',
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, summaryMessage]);
  }

  // Handle custom input submission
  const handleCustomSubmit = useCallback(() => {
    if (customInput.trim()) {
      handleResponse(customInput.trim());
      setCustomInput('');
    }
  }, [customInput, handleResponse]);

  // Get likelihood label from score
  function getLikelihoodFromScore(score: number): LikelihoodLevel {
    if (score >= 70) return 'common';
    if (score >= 50) return 'less-common';
    if (score >= 30) return 'rare';
    return 'rare';
  }

  // Render differential scores sidebar
  const renderDifferentialSidebar = () => (
    <div className="differential-sidebar">
      <h4>Current Differential</h4>
      <div className="differential-list">
        {symptom.anatomicalSources
          .map(s => ({
            ...s,
            score: differentialScores.get(s.structureId) || 50,
          }))
          .sort((a, b) => b.score - a.score)
          .map(source => (
            <div
              key={source.structureId}
              className="differential-item"
              onClick={() => onHighlightSource?.(source.structureId)}
            >
              <div className="diff-name">
                <span
                  className="diff-color"
                  style={{ backgroundColor: source.highlightColor }}
                />
                {source.structureName.split('(')[0].trim()}
              </div>
              <div className="diff-bar-container">
                <div
                  className="diff-bar"
                  style={{
                    width: `${source.score}%`,
                    backgroundColor: source.highlightColor,
                  }}
                />
              </div>
              <span className="diff-score">{Math.round(source.score)}%</span>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="symptom-followup-chat">
      {/* Header */}
      <div className="chat-header">
        <h3>Symptom Analysis: {symptom.symptomName}</h3>
        <button
          className="rationale-toggle"
          onClick={() => setShowRationale(!showRationale)}
          title={showRationale ? 'Hide clinical reasoning' : 'Show clinical reasoning'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4M12 8h.01"/>
          </svg>
          {showRationale ? 'Hide' : 'Show'} reasoning
        </button>
      </div>

      <div className="chat-content">
        {/* Messages */}
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`chat-message ${message.role} ${message.type || ''}`}>
              {message.role === 'assistant' && (
                <div className="message-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                    <path d="M12 8v14"/>
                    <path d="M5 12h14"/>
                  </svg>
                </div>
              )}
              {message.role === 'user' && (
                <div className="message-avatar user">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              )}
              <div className="message-body">
                <div className="message-content">{message.content}</div>

                {/* Show rationale for questions */}
                {showRationale && message.question && (
                  <div className="message-rationale">
                    <strong>Why this question matters:</strong> {message.question.clinicalRationale}
                  </div>
                )}

                {/* Show differential updates */}
                {message.differentialUpdates && message.differentialUpdates.length > 0 && (
                  <div className="differential-updates">
                    {message.differentialUpdates.map((update, i) => (
                      <div
                        key={i}
                        className={`update-item ${update.updatedLikelihood === update.previousLikelihood ? 'unchanged' : update.updatedLikelihood === 'common' ? 'increased' : 'decreased'}`}
                      >
                        <span className="update-source">{update.structureName.split('(')[0].trim()}</span>
                        <span className="update-arrow">
                          {update.updatedLikelihood === update.previousLikelihood ? '→' :
                           differentialScores.get(update.structureId)! > 50 ? '↑' : '↓'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="chat-message assistant loading">
              <div className="message-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                  <path d="M12 8v14"/>
                </svg>
              </div>
              <div className="message-body">
                <span className="typing-indicator">
                  <span></span><span></span><span></span>
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Differential Sidebar */}
        {renderDifferentialSidebar()}
      </div>

      {/* Response Options */}
      {currentQuestion && !isLoading && (
        <div className="response-section">
          {currentQuestion.options && (
            <div className="response-options">
              {currentQuestion.options.map((option, i) => (
                <button
                  key={i}
                  className="response-option"
                  onClick={() => handleResponse(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          <div className="custom-response">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
              placeholder="Or type your own response..."
            />
            <button
              onClick={handleCustomSubmit}
              disabled={!customInput.trim()}
              className="send-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
