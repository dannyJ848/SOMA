/**
 * AI Quiz Component
 *
 * Interactive quiz component with AI-generated questions
 * based on educational content.
 */

import { useState, useCallback, useMemo } from 'react';
import { useAI } from '../useAI';
import type { AIQuiz, QuizQuestion, StructureContext, HistologyContext } from '../types';

// ============================================================================
// Types
// ============================================================================

interface AIQuizProps {
  topic: string;
  context?: StructureContext | HistologyContext;
  difficulty?: 'easy' | 'medium' | 'hard';
  questionCount?: number;
  onComplete?: (score: number, total: number) => void;
  onClose?: () => void;
  className?: string;
}

interface QuestionResult {
  questionId: string;
  selectedAnswer: string | number;
  isCorrect: boolean;
  timeSpent: number;
}

// ============================================================================
// Difficulty Selector
// ============================================================================

function DifficultySelector({
  difficulty,
  onChange,
}: {
  difficulty: 'easy' | 'medium' | 'hard';
  onChange: (d: 'easy' | 'medium' | 'hard') => void;
}) {
  const options: Array<{ value: 'easy' | 'medium' | 'hard'; label: string; color: string }> = [
    { value: 'easy', label: 'Easy', color: '#22c55e' },
    { value: 'medium', label: 'Medium', color: '#eab308' },
    { value: 'hard', label: 'Hard', color: '#ef4444' },
  ];

  return (
    <div className="difficulty-selector">
      <span className="selector-label">Difficulty:</span>
      <div className="selector-buttons">
        {options.map(opt => (
          <button
            key={opt.value}
            className={`difficulty-btn ${difficulty === opt.value ? 'active' : ''}`}
            style={{
              borderColor: difficulty === opt.value ? opt.color : undefined,
              color: difficulty === opt.value ? opt.color : undefined,
            }}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Question Card
// ============================================================================

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  showResult,
  onAnswer,
}: {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | number | null;
  showResult: boolean;
  onAnswer: (answer: string | number) => void;
}) {
  const renderOptions = () => {
    if (question.type === 'true_false') {
      return (
        <div className="options-grid true-false">
          {['True', 'False'].map(opt => {
            const isSelected = selectedAnswer === opt;
            const isCorrect = showResult && String(question.correctAnswer).toLowerCase() === opt.toLowerCase();
            const isWrong = showResult && isSelected && !isCorrect;

            return (
              <button
                key={opt}
                className={`option-btn ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                onClick={() => !showResult && onAnswer(opt)}
                disabled={showResult}
              >
                {opt}
              </button>
            );
          })}
        </div>
      );
    }

    if (question.type === 'multiple_choice' && question.options) {
      return (
        <div className="options-grid multiple-choice">
          {question.options.map((opt, i) => {
            const isSelected = selectedAnswer === i || selectedAnswer === opt;
            const isCorrect = showResult && (question.correctAnswer === i || question.correctAnswer === opt);
            const isWrong = showResult && isSelected && !isCorrect;

            return (
              <button
                key={i}
                className={`option-btn ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                onClick={() => !showResult && onAnswer(i)}
                disabled={showResult}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt}</span>
              </button>
            );
          })}
        </div>
      );
    }

    if (question.type === 'fill_blank') {
      return (
        <div className="fill-blank">
          <input
            type="text"
            value={selectedAnswer as string || ''}
            onChange={e => onAnswer(e.target.value)}
            placeholder="Type your answer..."
            disabled={showResult}
            className={showResult ? (selectedAnswer === question.correctAnswer ? 'correct' : 'wrong') : ''}
          />
          {showResult && (
            <div className="correct-answer">
              Correct answer: <strong>{question.correctAnswer}</strong>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className={`difficulty-badge ${question.difficulty}`}>
          {question.difficulty}
        </span>
      </div>

      <div className="question-text">
        {question.question}
      </div>

      {renderOptions()}

      {showResult && (
        <div className="question-explanation">
          <div className="explanation-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Explanation
          </div>
          <p>{question.explanation}</p>
          {question.citation && (
            <span className="citation">
              Source: {question.citation.source}
              {question.citation.section && ` - ${question.citation.section}`}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Results Summary
// ============================================================================

function ResultsSummary({
  quiz,
  results,
  onRetry,
  onClose,
}: {
  quiz: AIQuiz;
  results: QuestionResult[];
  onRetry: () => void;
  onClose?: () => void;
}) {
  const score = results.filter(r => r.isCorrect).length;
  const total = results.length;
  const percentage = Math.round((score / total) * 100);
  const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);

  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A', color: '#22c55e', message: 'Excellent!' };
    if (percentage >= 80) return { grade: 'B', color: '#84cc16', message: 'Great job!' };
    if (percentage >= 70) return { grade: 'C', color: '#eab308', message: 'Good effort!' };
    if (percentage >= 60) return { grade: 'D', color: '#f97316', message: 'Keep practicing!' };
    return { grade: 'F', color: '#ef4444', message: 'Need more study!' };
  };

  const gradeInfo = getGrade();

  return (
    <div className="results-summary">
      <div className="results-header">
        <h2>Quiz Complete!</h2>
        <p>{quiz.topic}</p>
      </div>

      <div className="score-display">
        <div className="grade-circle" style={{ borderColor: gradeInfo.color }}>
          <span className="grade" style={{ color: gradeInfo.color }}>
            {gradeInfo.grade}
          </span>
          <span className="percentage">{percentage}%</span>
        </div>
        <p className="grade-message">{gradeInfo.message}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{score}</span>
          <span className="stat-label">Correct</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{total - score}</span>
          <span className="stat-label">Incorrect</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{Math.round(totalTime / 1000)}s</span>
          <span className="stat-label">Time</span>
        </div>
      </div>

      <div className="results-actions">
        <button className="retry-btn" onClick={onRetry}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 4v6h6M23 20v-6h-6" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>
          Try Again
        </button>
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function AIQuiz({
  topic,
  context,
  difficulty: initialDifficulty = 'medium',
  questionCount = 5,
  onComplete,
  onClose,
  className = '',
}: AIQuizProps) {
  // State
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>(initialDifficulty);
  const [quiz, setQuiz] = useState<AIQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

  // AI
  const ai = useAI();

  // Derived state
  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const isLastQuestion = quiz ? currentQuestionIndex === quiz.questions.length - 1 : false;
  const isComplete = quiz ? results.length === quiz.questions.length : false;

  // Generate quiz
  const generateQuiz = useCallback(async () => {
    setIsGenerating(true);
    setError(null);
    setQuiz(null);
    setResults([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);

    try {
      const generatedQuiz = await ai.generateQuiz(topic, context, difficulty, questionCount);
      setQuiz(generatedQuiz);
      setQuestionStartTime(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate quiz');
    } finally {
      setIsGenerating(false);
    }
  }, [ai, topic, context, difficulty, questionCount]);

  // Handle answer
  const handleAnswer = useCallback((answer: string | number) => {
    setSelectedAnswer(answer);
  }, []);

  // Submit answer
  const handleSubmit = useCallback(() => {
    if (!currentQuestion || selectedAnswer === null) return;

    const isCorrect = currentQuestion.type === 'fill_blank'
      ? String(selectedAnswer).toLowerCase().trim() === String(currentQuestion.correctAnswer).toLowerCase().trim()
      : currentQuestion.type === 'multiple_choice'
        ? selectedAnswer === currentQuestion.correctAnswer || currentQuestion.options?.[selectedAnswer as number] === currentQuestion.correctAnswer
        : String(selectedAnswer).toLowerCase() === String(currentQuestion.correctAnswer).toLowerCase();

    const result: QuestionResult = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent: Date.now() - questionStartTime,
    };

    setResults(prev => [...prev, result]);
    setShowResult(true);
  }, [currentQuestion, selectedAnswer, questionStartTime]);

  // Next question
  const handleNext = useCallback(() => {
    if (!quiz) return;

    if (isLastQuestion) {
      // Quiz complete
      const finalResults = results;
      const score = finalResults.filter(r => r.isCorrect).length;
      onComplete?.(score, finalResults.length);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setQuestionStartTime(Date.now());
    }
  }, [quiz, isLastQuestion, results, onComplete]);

  // Retry quiz
  const handleRetry = useCallback(() => {
    setResults([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuestionStartTime(Date.now());
  }, []);

  // Progress
  const progress = quiz ? ((currentQuestionIndex + (showResult ? 1 : 0)) / quiz.questions.length) * 100 : 0;

  return (
    <div className={`ai-quiz ${className}`}>
      {/* Header */}
      <div className="quiz-header">
        <h2>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          Quiz: {topic}
        </h2>
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Quiz not started */}
      {!quiz && !isGenerating && !error && (
        <div className="quiz-setup">
          <p className="setup-description">
            Test your knowledge with an AI-generated quiz about <strong>{topic}</strong>.
          </p>

          <DifficultySelector
            difficulty={difficulty}
            onChange={setDifficulty}
          />

          <div className="question-count">
            <span>Questions: {questionCount}</span>
            <span>Estimated time: ~{questionCount * 30}s</span>
          </div>

          <button className="start-btn" onClick={generateQuiz}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Start Quiz
          </button>
        </div>
      )}

      {/* Generating */}
      {isGenerating && (
        <div className="quiz-generating">
          <div className="generating-animation">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32">
                <animate attributeName="stroke-dashoffset" values="32;0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <p>Generating {questionCount} questions...</p>
          <span>This may take a moment</span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="quiz-error">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          <p>{error}</p>
          <button onClick={generateQuiz}>Try Again</button>
        </div>
      )}

      {/* Quiz in progress */}
      {quiz && !isComplete && currentQuestion && (
        <>
          {/* Progress bar */}
          <div className="quiz-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="progress-text">
              {currentQuestionIndex + 1} / {quiz.questions.length}
            </span>
          </div>

          {/* Question */}
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quiz.questions.length}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onAnswer={handleAnswer}
          />

          {/* Actions */}
          <div className="quiz-actions">
            {!showResult ? (
              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
              >
                Check Answer
              </button>
            ) : (
              <button className="next-btn" onClick={handleNext}>
                {isLastQuestion ? 'See Results' : 'Next Question'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </>
      )}

      {/* Quiz complete */}
      {quiz && isComplete && (
        <ResultsSummary
          quiz={quiz}
          results={results}
          onRetry={handleRetry}
          onClose={onClose}
        />
      )}

      <style>{`
        .ai-quiz {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          background: #1a1a2e;
          border-radius: 12px;
          border: 1px solid #333;
        }

        .quiz-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .quiz-header h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }

        .quiz-header .close-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
        }

        .quiz-header .close-btn:hover {
          color: #fff;
        }

        /* Setup */
        .quiz-setup {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: center;
          padding: 20px 0;
        }

        .setup-description {
          color: #aaa;
          font-size: 15px;
        }

        .difficulty-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .selector-label {
          font-size: 13px;
          color: #888;
        }

        .selector-buttons {
          display: flex;
          gap: 8px;
        }

        .difficulty-btn {
          padding: 8px 20px;
          background: #252538;
          border: 2px solid #333;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.15s;
        }

        .difficulty-btn:hover {
          background: #2a2a4a;
        }

        .difficulty-btn.active {
          background: #2a2a4a;
        }

        .question-count {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 13px;
          color: #666;
        }

        .start-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: #4a9eff;
          border: none;
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          transition: background 0.15s;
          align-self: center;
        }

        .start-btn:hover {
          background: #3a8eef;
        }

        /* Generating */
        .quiz-generating {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px 0;
          color: #888;
        }

        .generating-animation svg {
          color: #4a9eff;
        }

        .quiz-generating p {
          margin: 0;
          font-size: 16px;
          color: #ccc;
        }

        /* Error */
        .quiz-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 40px 0;
          color: #ff6b6b;
        }

        .quiz-error button {
          padding: 10px 20px;
          background: #333;
          border: none;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
        }

        /* Progress */
        .quiz-progress {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: #333;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #4a9eff;
          transition: width 0.3s;
        }

        .progress-text {
          font-size: 13px;
          color: #888;
        }

        /* Question Card */
        .question-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          background: #252538;
          border-radius: 10px;
        }

        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .question-number {
          font-size: 13px;
          color: #888;
        }

        .difficulty-badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          text-transform: capitalize;
        }

        .difficulty-badge.easy {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .difficulty-badge.medium {
          background: rgba(234, 179, 8, 0.2);
          color: #eab308;
        }

        .difficulty-badge.hard {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .question-text {
          font-size: 16px;
          line-height: 1.6;
          color: #fff;
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .options-grid.true-false {
          flex-direction: row;
        }

        .option-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #1a1a2e;
          border: 2px solid #333;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
        }

        .option-btn:hover:not(:disabled) {
          background: #2a2a4a;
          border-color: #4a9eff;
        }

        .option-btn.selected {
          border-color: #4a9eff;
          background: rgba(74, 158, 255, 0.1);
        }

        .option-btn.correct {
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
        }

        .option-btn.wrong {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .option-btn:disabled {
          cursor: default;
        }

        .option-letter {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #333;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
        }

        .option-text {
          flex: 1;
        }

        .true-false .option-btn {
          flex: 1;
          justify-content: center;
        }

        .fill-blank input {
          width: 100%;
          padding: 14px 16px;
          background: #1a1a2e;
          border: 2px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 15px;
          outline: none;
        }

        .fill-blank input:focus {
          border-color: #4a9eff;
        }

        .fill-blank input.correct {
          border-color: #22c55e;
        }

        .fill-blank input.wrong {
          border-color: #ef4444;
        }

        .correct-answer {
          margin-top: 10px;
          padding: 10px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 6px;
          color: #22c55e;
          font-size: 14px;
        }

        .question-explanation {
          padding: 14px;
          background: #1e1e30;
          border-radius: 8px;
          border-left: 3px solid #4a9eff;
        }

        .explanation-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4a9eff;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .question-explanation p {
          margin: 0;
          color: #aaa;
          font-size: 14px;
          line-height: 1.6;
        }

        .question-explanation .citation {
          display: block;
          margin-top: 10px;
          font-size: 12px;
          color: #666;
        }

        /* Actions */
        .quiz-actions {
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .submit-btn,
        .next-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #4a9eff;
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.15s;
        }

        .submit-btn:hover:not(:disabled),
        .next-btn:hover {
          background: #3a8eef;
        }

        .submit-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }

        /* Results */
        .results-summary {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 20px 0;
        }

        .results-header {
          text-align: center;
        }

        .results-header h2 {
          margin: 0 0 8px 0;
          font-size: 24px;
          color: #fff;
        }

        .results-header p {
          margin: 0;
          color: #888;
        }

        .score-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .grade-circle {
          width: 120px;
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 4px solid;
          border-radius: 50%;
        }

        .grade {
          font-size: 36px;
          font-weight: 700;
        }

        .percentage {
          font-size: 18px;
          color: #888;
        }

        .grade-message {
          margin: 0;
          font-size: 18px;
          color: #ccc;
        }

        .stats-grid {
          display: flex;
          gap: 32px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
        }

        .stat-label {
          font-size: 13px;
          color: #888;
        }

        .results-actions {
          display: flex;
          gap: 12px;
        }

        .retry-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #4a9eff;
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          font-size: 15px;
        }

        .results-actions .close-btn {
          padding: 12px 24px;
          background: #333;
          border: none;
          border-radius: 8px;
          color: #ccc;
          cursor: pointer;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}

export default AIQuiz;
