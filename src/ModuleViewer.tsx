/**
 * Educational Module Viewer Component
 * 
 * Displays educational content at selected complexity level.
 * Integrates with user's biological self for personalized examples.
 */

import React, { useState, useMemo } from 'react';
import type { EducationalModule, ComplexityLevel, QuizResult } from '../core/education/types';
import { COMPLEXITY_LEVELS } from '../core/education/types';
import { ImageGallery, CompactImageGallery } from './components/ImageGallery.js';
import { filterImages, getImagesByCondition, ImageMetadata } from './content/imageRegistry.js';

interface ModuleViewerProps {
  module: EducationalModule;
  onBack?: () => void;
  onComplete?: () => void;
  userData?: unknown; // BiologicalSelf for personalization
}

export const ModuleViewer: React.FC<ModuleViewerProps> = ({
  module,
  onBack,
  onComplete,
  userData,
}) => {
  const [complexity, setComplexity] = useState<ComplexityLevel>(3);
  const [activeTab, setActiveTab] = useState<'content' | 'images' | 'quiz' | 'resources'>('content');
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [showQuizResults, setShowQuizResults] = useState(false);

  const complexityInfo = COMPLEXITY_LEVELS[complexity];
  const content = module.content[complexity];

  // Get related images based on module specialty and content
  const relatedImages = useMemo(() => {
    const specialty = module.specialty;
    const systemMap: Record<string, string> = {
      cardiology: 'cardiovascular',
      pulmonology: 'respiratory',
      gastroenterology: 'digestive',
      nephrology: 'urinary',
      endocrinology: 'endocrine',
      neurology: 'nervous',
      orthopedics: 'musculoskeletal',
      dermatology: 'integumentary',
      hematology: 'hematologic',
    };

    let images: ImageMetadata[] = [];

    // Filter by body system if specialty maps to a system
    if (specialty && systemMap[specialty]) {
      images = filterImages({ bodySystem: systemMap[specialty] as any });
    }

    // Also try to find images by conditions mentioned in the module
    if (module.learningObjectives) {
      const objectives = module.learningObjectives.join(' ').toLowerCase();
      const conditionImages = getImagesByCondition(objectives);
      images = [...images, ...conditionImages];
    }

    // Remove duplicates and limit
    return [...new Map(images.map(img => [img.id, img])).values()].slice(0, 20);
  }, [module]);

  const handleComplexityChange = (level: ComplexityLevel) => {
    setComplexity(level);
    setShowQuizResults(false);
  };

  const renderComplexitySelector = () => (
    <div className="complexity-selector-panel">
      <label>Complexity Level:</label>
      <div className="complexity-buttons">
        {([1, 2, 3, 4, 5, 6] as ComplexityLevel[]).map((level) => (
          <button
            key={level}
            className={`complexity-btn ${complexity === level ? 'active' : ''}`}
            onClick={() => handleComplexityChange(level)}
            title={COMPLEXITY_LEVELS[level].description}
          >
            {level}
          </button>
        ))}
      </div>
      <div className="complexity-info">
        <strong>{complexityInfo.name}</strong>
        <span>{complexityInfo.readingLevel}</span>
        <span className="estimated-time">{module.estimatedTime[complexity]}</span>
      </div>
    </div>
  );

  const renderContent = () => {
    if ('summary' in content) {
      return (
        <div className="module-content">
          <section className="content-summary">
            <h3>Overview</h3>
            <p>{content.summary}</p>
          </section>

          {'analogy' in content && content.analogy && (
            <section className="content-analogy">
              <h3>💡 Analogy</h3>
              <div className="analogy-box">
                <pre>{content.analogy}</pre>
              </div>
            </section>
          )}

          {'keyPoints' in content && (
            <section className="content-keypoints">
              <h3>📝 Key Points</h3>
              <ul>
                {content.keyPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>
          )}

          {'keyConcepts' in content && (
            <section className="content-concepts">
              <h3>📚 Key Concepts</h3>
              <div className="concepts-grid">
                {content.keyConcepts.map((concept, i) => (
                  <div key={i} className="concept-card">
                    <strong>{concept.term}</strong>
                    <p>{concept.explanation}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {'mechanisms' in content && (
            <section className="content-mechanisms">
              <h3>⚙️ Mechanisms</h3>
              <div className="mechanisms-list">
                {content.mechanisms.map((mech, i) => (
                  <div key={i} className="mechanism-item">
                    <h4>{mech.name}</h4>
                    <p>{mech.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {'molecularMechanisms' in content && (
            <section className="content-molecular">
              <h3>🔬 Molecular Mechanisms</h3>
              <div className="molecular-table">
                {content.molecularMechanisms.map((mm, i) => (
                  <div key={i} className="molecular-row">
                    <div className="molecular-pathway">
                      <strong>{mm.pathway}</strong>
                    </div>
                    <div className="molecular-details">
                      <p><span>Defect:</span> {mm.defect}</p>
                      <p><span>Consequence:</span> {mm.consequence}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {'clinicalApproach' in content && (
            <section className="content-clinical">
              <h3>🏥 Clinical Approach</h3>
              <ul className="clinical-list">
                {content.clinicalApproach.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {'caseExamples' in content && (
            <section className="content-cases">
              <h3>📋 Case Examples</h3>
              {content.caseExamples.map((caseEx, i) => (
                <div key={i} className="case-card">
                  <h4>Case {i + 1}</h4>
                  <div className="case-presentation">
                    <strong>Presentation:</strong>
                    <p>{caseEx.presentation}</p>
                  </div>
                  <div className="case-findings">
                    <strong>Key Findings:</strong>
                    <ul>
                      {caseEx.keyFindings.map((kf, j) => (
                        <li key={j}>{kf}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="case-teaching">
                    <strong>Teaching Points:</strong>
                    <ul>
                      {caseEx.teachingPoints.map((tp, j) => (
                        <li key={j}>{tp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      );
    }
    return null;
  };

  const renderImages = () => (
    <div className="module-images">
      <div className="images-intro">
        <h3>🖼️ Visual References</h3>
        <p>
          Explore pathology, anatomy, and histology images related to {module.title.toLowerCase()}.
          These educational images help illustrate key concepts and conditions.
        </p>
      </div>

      {relatedImages.length > 0 ? (
        <ImageGallery
          images={relatedImages}
          title=""
          showFilters={true}
          columns={3}
          showRelated={true}
          emptyMessage="No images found for this module."
        />
      ) : (
        <div className="no-images-notice">
          <p>📚 Visual references are not yet available for this module.</p>
          <p className="subtle">
            Check back later as we continue to expand our image library from sources
            like WebPath, Gray's Anatomy, and Wikimedia Commons.
          </p>
        </div>
      )}
    </div>
  );

  const renderQuiz = () => {
    if (!module.quiz) return <p>No quiz available for this module.</p>;

    if (showQuizResults) {
      const correct = quizResults.filter(r => r.correct).length;
      const total = quizResults.length;
      const passed = module.quiz.passingScore 
        ? (correct / total) * 100 >= module.quiz.passingScore 
        : correct / total >= 0.7;

      return (
        <div className="quiz-results">
          <div className={`results-summary ${passed ? 'passed' : 'failed'}`}>
            <h3>{passed ? '🎉 Great job!' : '📚 Keep learning'}</h3>
            <p>You got {correct} out of {total} correct ({Math.round((correct / total) * 100)}%)</p>
            {module.quiz.passingScore && <p>Passing score: {module.quiz.passingScore}%</p>}
          </div>
          <div className="results-details">
            {quizResults.map((result, i) => {
              const question = module.quiz!.questions[i];
              return (
                <div key={i} className={`result-item ${result.correct ? 'correct' : 'incorrect'}`}>
                  <p className="result-question">{question.question}</p>
                  <p className="result-answer">
                    Your answer: {question.options?.[result.userAnswer as number] || result.userAnswer}
                  </p>
                  {!result.correct && question.options && (
                    <p className="result-correct">
                      Correct: {question.options[question.correctAnswer as number]}
                    </p>
                  )}
                  
                  <p className="result-explanation">{question.explanation}</p>
                </div>
              );
            })}
          </div>
          
          <button className="btn-primary" onClick={() => setShowQuizResults(false)}>
            Retake Quiz
          </button>
        </div>
      );
    }

    return (
      <div className="quiz-container">
        <h3>{module.quiz.title || 'Knowledge Check'}</h3>
        <p className="quiz-intro">Test your understanding of this topic.</p>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Calculate results
            const formData = new FormData(e.currentTarget);
            const results: QuizResult[] = module.quiz!.questions.map((q, i) => {
              const userAnswer = formData.get(`question-${q.id}`);
              return {
                questionId: q.id,
                correct: userAnswer === String(q.correctAnswer),
                userAnswer: userAnswer || '',
                timeSpent: 0,
              };
            });
            setQuizResults(results);
            setShowQuizResults(true);
          }}
        >
          {module.quiz.questions
            .filter((q) => q.complexity <= complexity)
            .map((question, i) => (
              <div key={question.id} className="quiz-question">
                <p className="question-text">
                  {i + 1}. {question.question}
                </p>
                
                {question.options && (
                  <div className="question-options">
                    {question.options.map((option, j) => (
                      <label key={j} className="option-label">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={j}
                          required
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          
          <button type="submit" className="btn-primary">
            Check Answers
          </button>
        </form>
      </div>
    );
  };

  const renderResources = () => (
    <div className="module-resources">
      {module.references && (
        <section>
          <h3>📚 References</h3>
          <ul className="references-list">
            {module.references.map((ref, i) => (
              <li key={i}>
                {ref.citation}
                {ref.doi && <span className="doi">DOI: {ref.doi}</span>}
                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {module.resources && (
        <section>
          <h3>🔗 Additional Resources</h3>
          <div className="resources-grid">
            {module.resources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <span className="resource-type">{res.type}</span>
                <strong>{res.title}</strong>
                <p>{res.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );

  return (
    <div className="module-viewer">
      <header className="module-header">
        {onBack && (
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
        )}
        <div className="module-title">
          <h2>{module.title}</h2>
          <p>{module.description}</p>
        </div>      </header>

      {renderComplexitySelector()}

      <div className="module-tabs">
        <button
          className={activeTab === 'content' ? 'active' : ''}
          onClick={() => setActiveTab('content')}
        >
          📖 Learn
        </button>
        <button
          className={activeTab === 'images' ? 'active' : ''}
          onClick={() => setActiveTab('images')}
        >
          🖼️ Images ({relatedImages.length})
        </button>
        <button
          className={activeTab === 'quiz' ? 'active' : ''}
          onClick={() => setActiveTab('quiz')}
        >
          📝 Quiz
        </button>
        <button
          className={activeTab === 'resources' ? 'active' : ''}
          onClick={() => setActiveTab('resources')}
        >
          🔗 Resources
        </button>
      </div>

      <div className="module-content-area">
        {activeTab === 'content' && renderContent()}
        {activeTab === 'images' && renderImages()}
        {activeTab === 'quiz' && renderQuiz()}
        {activeTab === 'resources' && renderResources()}
      </div>
    </div>
  );
};

export default ModuleViewer;
