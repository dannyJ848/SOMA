/**
 * Anatomy Context Builder Tests
 *
 * Tests for the anatomy context builder utility functions.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  buildStructureContext,
  buildAnatomySystemPrompt,
  generateSuggestedQuestions,
} from '../../../src/utils/anatomyContextBuilder';

describe('anatomyContextBuilder', () => {
  describe('buildStructureContext', () => {
    it('returns structure data for valid structure IDs', () => {
      const headContext = buildStructureContext('head');

      expect(headContext).not.toBeNull();
      expect(headContext?.name).toBe('Head');
      expect(headContext?.latinName).toBe('Caput');
      expect(headContext?.system).toBe('Central Nervous System');
    });

    it('returns chest context with cardiovascular/respiratory system', () => {
      const chestContext = buildStructureContext('chest');

      expect(chestContext).not.toBeNull();
      expect(chestContext?.name).toBe('Chest (Thorax)');
      expect(chestContext?.system).toBe('Cardiovascular / Respiratory');
      expect(chestContext?.commonConditions).toContain('Heart disease');
    });

    it('returns null for unknown structure IDs', () => {
      const unknownContext = buildStructureContext('unknown-structure');

      expect(unknownContext).toBeNull();
    });

    it('returns abdomen context with digestive organs', () => {
      const abdomenContext = buildStructureContext('abdomen');

      expect(abdomenContext).not.toBeNull();
      expect(abdomenContext?.name).toBe('Abdomen');
      expect(abdomenContext?.relatedStructures).toContain('Stomach');
      expect(abdomenContext?.relatedStructures).toContain('Liver');
      expect(abdomenContext?.relatedStructures).toContain('Kidneys');
    });

    it('returns arm contexts with musculoskeletal system', () => {
      const leftArm = buildStructureContext('leftArm');
      const rightArm = buildStructureContext('rightArm');

      expect(leftArm?.system).toBe('Musculoskeletal');
      expect(rightArm?.system).toBe('Musculoskeletal');
      expect(leftArm?.commonConditions).toContain('Carpal tunnel syndrome');
    });

    it('returns leg contexts with proper anatomy', () => {
      const leftLeg = buildStructureContext('leftLeg');
      const rightLeg = buildStructureContext('rightLeg');

      expect(leftLeg?.relatedStructures).toContain('Femur');
      expect(rightLeg?.relatedStructures).toContain('Hip joint');
    });
  });

  describe('buildAnatomySystemPrompt', () => {
    const baseDashboardData = {
      activeConditions: [{ name: 'Hypertension', status: 'controlled' }],
      currentMedications: [{ name: 'Lisinopril', dosage: '10mg' }],
      recentSymptoms: [{ description: 'Headache', severity: 5, location: 'head' }],
      recentLabs: [{ testName: 'CBC', value: 'Normal', status: 'normal' }],
    };

    it('builds a prompt for known structures with educational content', () => {
      const prompt = buildAnatomySystemPrompt('head', 'Head', null);

      expect(prompt).toContain('Head');
      expect(prompt).toContain('Caput');
      expect(prompt).toContain('Central Nervous System');
      expect(prompt).toContain('EDUCATIONAL FRAMEWORK');
    });

    it('includes health context when dashboard data is provided', () => {
      const prompt = buildAnatomySystemPrompt('head', 'Head', baseDashboardData);

      expect(prompt).toContain('USER HEALTH CONTEXT');
      expect(prompt).toContain('Hypertension');
      expect(prompt).toContain('Lisinopril');
    });

    it('includes relevant symptoms for the structure', () => {
      const prompt = buildAnatomySystemPrompt('head', 'Head', baseDashboardData);

      expect(prompt).toContain('Symptoms in this area');
      expect(prompt).toContain('Headache');
    });

    it('handles unknown structures gracefully', () => {
      const prompt = buildAnatomySystemPrompt('custom-structure', 'Custom Structure', null);

      expect(prompt).toContain('Custom Structure');
      expect(prompt).toContain('No detailed educational content available');
    });

    it('includes medical disclaimer', () => {
      const prompt = buildAnatomySystemPrompt('head', 'Head', null);

      expect(prompt).toContain('educational information only');
      expect(prompt).toContain('NOT medical advice');
      expect(prompt).toContain('healthcare professionals');
    });

    it('includes anatomical teaching framework sections', () => {
      const prompt = buildAnatomySystemPrompt('chest', 'Chest', null);

      expect(prompt).toContain('GROSS ANATOMY');
      expect(prompt).toContain('STRUCTURAL ANATOMY');
      expect(prompt).toContain('FUNCTIONAL ANATOMY');
      expect(prompt).toContain('CLINICAL ANATOMY');
    });

    it('excludes symptoms from other body regions', () => {
      const dashboardWithLegSymptom = {
        ...baseDashboardData,
        recentSymptoms: [{ description: 'Knee pain', severity: 7, location: 'rightLeg' }],
      };

      const prompt = buildAnatomySystemPrompt('head', 'Head', dashboardWithLegSymptom);

      expect(prompt).not.toContain('Knee pain');
    });
  });

  describe('generateSuggestedQuestions', () => {
    const dashboardWithConditions = {
      activeConditions: [
        { name: 'Migraine', status: 'active' },
        { name: 'Hypertension', status: 'controlled' },
      ],
      currentMedications: [],
      recentSymptoms: [],
      recentLabs: [],
    };

    it('generates basic questions for any structure', () => {
      const questions = generateSuggestedQuestions('heart', 'Heart', null);

      expect(questions.length).toBeGreaterThan(0);
      expect(questions.some(q => q.includes('function'))).toBe(true);
    });

    it('generates structure-specific questions', () => {
      const questions = generateSuggestedQuestions('head', 'Head', null);

      expect(questions.some(q => q.toLowerCase().includes('head'))).toBe(true);
    });

    it('includes condition-related questions when user has relevant conditions', () => {
      const questions = generateSuggestedQuestions('head', 'Head', dashboardWithConditions);

      // Should include migraine-related question since it's related to head
      expect(questions.some(q => q.includes('Migraine') || q.includes('migraine'))).toBe(true);
    });

    it('includes symptom-related questions for the body region', () => {
      const dashboardWithSymptoms = {
        activeConditions: [],
        currentMedications: [],
        recentSymptoms: [{ description: 'Chest pain', severity: 6, location: 'chest' }],
        recentLabs: [],
      };

      const questions = generateSuggestedQuestions('chest', 'Chest', dashboardWithSymptoms);

      expect(questions.some(q => q.toLowerCase().includes('chest pain'))).toBe(true);
    });

    it('limits questions to maximum of 5', () => {
      const questions = generateSuggestedQuestions('head', 'Head', dashboardWithConditions);

      expect(questions.length).toBeLessThanOrEqual(5);
    });

    it('generates questions about common conditions', () => {
      const questions = generateSuggestedQuestions('head', 'Head', null);

      // Should reference one of the common conditions like Headaches
      expect(
        questions.some(q =>
          q.includes('Headaches') || q.includes('headaches') || q.includes('injuries')
        )
      ).toBe(true);
    });
  });
});
