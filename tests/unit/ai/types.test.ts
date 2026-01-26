/**
 * AI Types Tests
 *
 * Tests for AI type definitions and data structures.
 */

import { describe, it, expect } from 'vitest';
import {
  createAIMessage,
  createAIResponse,
  createCitation,
  createStructureContext,
  createHistologyContext,
  createConditionContext,
  createDashboardData,
  createQuizQuestion,
  createQuiz,
} from '../../factories';

describe('AI Types - Factory Validation', () => {
  describe('AIMessage', () => {
    it('creates valid user message', () => {
      const message = createAIMessage({ role: 'user', content: 'What is the heart?' });

      expect(message.role).toBe('user');
      expect(message.content).toBe('What is the heart?');
      expect(message.timestamp).toBeDefined();
    });

    it('creates valid assistant message', () => {
      const message = createAIMessage({
        role: 'assistant',
        content: 'The heart is a muscular organ.',
        citations: [createCitation()],
      });

      expect(message.role).toBe('assistant');
      expect(message.citations).toBeDefined();
      expect(message.citations!.length).toBe(1);
    });

    it('creates valid system message', () => {
      const message = createAIMessage({
        role: 'system',
        content: 'You are a helpful assistant.',
      });

      expect(message.role).toBe('system');
    });
  });

  describe('AIResponse', () => {
    it('creates valid response', () => {
      const response = createAIResponse({
        content: 'Test response',
        model: 'llama3',
        done: true,
      });

      expect(response.content).toBe('Test response');
      expect(response.model).toBe('llama3');
      expect(response.done).toBe(true);
      expect(response.citations).toBeDefined();
    });

    it('includes empty citations by default', () => {
      const response = createAIResponse();

      expect(response.citations).toEqual([]);
    });

    it('handles error responses', () => {
      const response = createAIResponse({
        content: '',
        done: true,
        error: 'Model not available',
      });

      expect(response.error).toBe('Model not available');
    });
  });

  describe('Citation', () => {
    it('creates valid citation', () => {
      const citation = createCitation({
        index: 1,
        source: 'Gray\'s Anatomy',
        section: 'Chapter 5',
        type: 'textbook',
      });

      expect(citation.index).toBe(1);
      expect(citation.source).toBe('Gray\'s Anatomy');
      expect(citation.section).toBe('Chapter 5');
      expect(citation.type).toBe('textbook');
    });

    it('supports different citation types', () => {
      const pubmedCitation = createCitation({ type: 'pubmed' });
      const guidelineCitation = createCitation({ type: 'guideline' });
      const referenceCitation = createCitation({ type: 'reference' });

      expect(pubmedCitation.type).toBe('pubmed');
      expect(guidelineCitation.type).toBe('guideline');
      expect(referenceCitation.type).toBe('reference');
    });

    it('can include URL', () => {
      const citation = createCitation({
        url: 'https://pubmed.ncbi.nlm.nih.gov/12345',
        type: 'pubmed',
      });

      expect(citation.url).toBe('https://pubmed.ncbi.nlm.nih.gov/12345');
    });
  });

  describe('StructureContext', () => {
    it('creates valid structure context', () => {
      const context = createStructureContext({
        structureId: 'heart',
        structureName: 'Heart',
        system: 'Cardiovascular',
      });

      expect(context.structureId).toBe('heart');
      expect(context.structureName).toBe('Heart');
      expect(context.system).toBe('Cardiovascular');
    });

    it('includes optional fields', () => {
      const context = createStructureContext({
        latinName: 'Cor',
        location: 'Thoracic cavity',
        relatedStructures: ['Aorta', 'Pulmonary Artery'],
      });

      expect(context.latinName).toBe('Cor');
      expect(context.location).toBe('Thoracic cavity');
      expect(context.relatedStructures).toContain('Aorta');
    });

    it('generates unique IDs when not specified', () => {
      const context1 = createStructureContext();
      const context2 = createStructureContext();

      expect(context1.structureId).not.toBe(context2.structureId);
    });
  });

  describe('HistologyContext', () => {
    it('creates valid histology context', () => {
      const context = createHistologyContext({
        slideId: 'slide-1',
        tissueName: 'Cardiac Muscle',
        stain: 'H&E',
        magnification: '400x',
      });

      expect(context.slideId).toBe('slide-1');
      expect(context.tissueName).toBe('Cardiac Muscle');
      expect(context.stain).toBe('H&E');
      expect(context.magnification).toBe('400x');
    });

    it('includes key features', () => {
      const context = createHistologyContext({
        keyFeatures: ['Intercalated discs', 'Central nuclei'],
      });

      expect(context.keyFeatures).toContain('Intercalated discs');
    });

    it('includes organ source', () => {
      const context = createHistologyContext({
        organSource: 'Heart',
      });

      expect(context.organSource).toBe('Heart');
    });
  });

  describe('ConditionContext', () => {
    it('creates valid condition context', () => {
      const context = createConditionContext({
        conditionId: 'hypertension',
        conditionName: 'Hypertension',
        category: 'Cardiovascular',
      });

      expect(context.conditionId).toBe('hypertension');
      expect(context.conditionName).toBe('Hypertension');
      expect(context.category).toBe('Cardiovascular');
    });

    it('tracks if user has the condition', () => {
      const userCondition = createConditionContext({ userHasCondition: true });
      const otherCondition = createConditionContext({ userHasCondition: false });

      expect(userCondition.userHasCondition).toBe(true);
      expect(otherCondition.userHasCondition).toBe(false);
    });

    it('includes severity', () => {
      const context = createConditionContext({ severity: 'severe' });

      expect(context.severity).toBe('severe');
    });
  });

  describe('DashboardData', () => {
    it('creates valid dashboard data', () => {
      const data = createDashboardData();

      expect(data.summary).toBeDefined();
      expect(data.activeConditions).toBeDefined();
      expect(data.currentMedications).toBeDefined();
      expect(data.recentLabs).toBeDefined();
      expect(data.recentSymptoms).toBeDefined();
    });

    it('includes summary counts', () => {
      const data = createDashboardData({
        summary: {
          totalConditions: 5,
          totalMedications: 10,
          totalLabResults: 25,
        },
      });

      expect(data.summary.totalConditions).toBe(5);
      expect(data.summary.totalMedications).toBe(10);
      expect(data.summary.totalLabResults).toBe(25);
    });

    it('includes active conditions with status', () => {
      const data = createDashboardData({
        activeConditions: [
          { name: 'Diabetes', status: 'active', severity: 'moderate' },
        ],
      });

      expect(data.activeConditions[0].name).toBe('Diabetes');
      expect(data.activeConditions[0].status).toBe('active');
    });

    it('includes medications with dosage', () => {
      const data = createDashboardData({
        currentMedications: [
          { name: 'Metformin', dosage: '500mg', frequency: 'twice daily' },
        ],
      });

      expect(data.currentMedications[0].name).toBe('Metformin');
      expect(data.currentMedications[0].dosage).toBe('500mg');
    });

    it('includes labs with trends', () => {
      const data = createDashboardData({
        recentLabs: [
          { testName: 'HbA1c', value: 6.5, unit: '%', status: 'normal', trend: 'down' },
        ],
      });

      expect(data.recentLabs[0].testName).toBe('HbA1c');
      expect(data.recentLabs[0].trend).toBe('down');
    });

    it('includes vitals summary', () => {
      const data = createDashboardData({
        vitalsSummary: {
          restingHeartRate: 72,
          hrv: 45,
          sleepHours: 7.5,
        },
      });

      expect(data.vitalsSummary).toBeDefined();
      expect(data.vitalsSummary!.restingHeartRate).toBe(72);
    });
  });

  describe('Quiz Types', () => {
    describe('QuizQuestion', () => {
      it('creates multiple choice question', () => {
        const question = createQuizQuestion({
          type: 'multiple_choice',
          question: 'What pumps blood?',
          options: ['Heart', 'Liver', 'Brain', 'Lungs'],
          correctAnswer: 0,
        });

        expect(question.type).toBe('multiple_choice');
        expect(question.options).toHaveLength(4);
        expect(question.correctAnswer).toBe(0);
      });

      it('creates true/false question', () => {
        const question = createQuizQuestion({
          type: 'true_false',
          question: 'The heart has four chambers.',
          correctAnswer: 'true',
        });

        expect(question.type).toBe('true_false');
      });

      it('creates fill in the blank question', () => {
        const question = createQuizQuestion({
          type: 'fill_blank',
          question: 'The heart is located in the _____ cavity.',
          correctAnswer: 'thoracic',
        });

        expect(question.type).toBe('fill_blank');
      });

      it('includes explanation', () => {
        const question = createQuizQuestion({
          explanation: 'The heart pumps blood through the circulatory system.',
        });

        expect(question.explanation).toBeDefined();
      });

      it('has difficulty level', () => {
        const easyQuestion = createQuizQuestion({ difficulty: 'easy' });
        const mediumQuestion = createQuizQuestion({ difficulty: 'medium' });
        const hardQuestion = createQuizQuestion({ difficulty: 'hard' });

        expect(easyQuestion.difficulty).toBe('easy');
        expect(mediumQuestion.difficulty).toBe('medium');
        expect(hardQuestion.difficulty).toBe('hard');
      });
    });

    describe('AIQuiz', () => {
      it('creates valid quiz', () => {
        const quiz = createQuiz({
          topic: 'Cardiovascular System',
          difficulty: 'medium',
        });

        expect(quiz.topic).toBe('Cardiovascular System');
        expect(quiz.difficulty).toBe('medium');
        expect(quiz.questions).toBeDefined();
        expect(quiz.generatedAt).toBeDefined();
      });

      it('calculates estimated time', () => {
        const quiz = createQuiz({
          estimatedTime: 300, // 5 minutes
        });

        expect(quiz.estimatedTime).toBe(300);
      });

      it('has unique ID', () => {
        const quiz1 = createQuiz();
        const quiz2 = createQuiz();

        expect(quiz1.id).not.toBe(quiz2.id);
      });
    });
  });
});

describe('Data Validation Patterns', () => {
  describe('Lab Value Validation', () => {
    it('handles numeric lab values', () => {
      const lab = { testName: 'Glucose', value: 95, unit: 'mg/dL' };

      expect(typeof lab.value).toBe('number');
      expect(lab.value).toBeGreaterThan(0);
    });

    it('handles string lab values', () => {
      const lab = { testName: 'Urinalysis', value: 'Negative', unit: '' };

      expect(typeof lab.value).toBe('string');
    });
  });

  describe('Severity Validation', () => {
    const validSeverities = ['mild', 'moderate', 'severe'];

    it.each(validSeverities)('accepts %s severity', (severity) => {
      const condition = createConditionContext({ severity });
      expect(validSeverities).toContain(condition.severity);
    });
  });

  describe('Status Validation', () => {
    const validStatuses = ['active', 'controlled', 'resolved', 'monitoring'];

    it.each(validStatuses)('accepts %s status', (status) => {
      const data = createDashboardData({
        activeConditions: [{ name: 'Test', status }],
      });

      expect(data.activeConditions[0].status).toBe(status);
    });
  });

  describe('Trend Validation', () => {
    const validTrends = ['up', 'down', 'stable'];

    it.each(validTrends)('accepts %s trend', (trend) => {
      const data = createDashboardData({
        recentLabs: [{ testName: 'Test', value: 100, trend: trend as 'up' | 'down' | 'stable' }],
      });

      expect(data.recentLabs[0].trend).toBe(trend);
    });
  });
});
