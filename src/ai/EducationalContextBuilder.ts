/**
 * Educational Context Builder
 *
 * Builds personalized educational context from patient data for the AI Medical Encyclopedia.
 * This module creates rich, contextual prompts that help patients understand their health
 * through an educational lens - NOT diagnostic.
 *
 * IMPORTANT: This system EDUCATES, it does NOT diagnose. All content is framed as
 * "understanding your health" rather than "diagnosing your condition".
 *
 * Integrates with ContentService to enrich context with:
 *   - Knowledge graph relationships (conditions <-> anatomy <-> symptoms)
 *   - Region-specific educational content from the anatomy encyclopedia
 *   - Glossary definitions for medical terms
 *   - Complexity-level-appropriate explanations (1-5 tier system)
 */

import type {
  ExplanationLevel,
  ComplexityLevel,
  DashboardData,
  Citation,
  AnatomyChatContext,
} from './types';

import type {
  UserHealthProfile,
  UserCondition,
  UserMedication,
  UserLabResult,
  RelevanceLevel,
} from '../../core/personalization/types';

import type {
  ContentService,
  KnowledgeNode,
  AnatomyRegion,
  GlossaryEntry,
  ConditionInfo,
  ExplanationLevelNumber,
} from '../services/ContentService';

import { getContentService } from '../services/ContentService';

// ============================================================================
// Types
// ============================================================================

/**
 * Patient health data input for context building
 */
export interface PatientHealthData {
  /** Active conditions from health profile */
  conditions: Array<{
    id: string;
    name: string;
    status: 'active' | 'resolved' | 'chronic';
    severity?: 'mild' | 'moderate' | 'severe';
    relatedSystems?: string[];
  }>;
  /** Current medications */
  medications: Array<{
    id: string;
    name: string;
    genericName?: string;
    dosage?: string;
    frequency?: string;
    indication?: string;
    drugClass?: string;
  }>;
  /** Recent lab results */
  labs: Array<{
    id: string;
    testName: string;
    value: number | string;
    unit?: string;
    status: 'low' | 'normal' | 'high' | 'critical';
    trend?: 'increasing' | 'stable' | 'decreasing';
    relatedOrgans?: string[];
  }>;
  /** Recent symptoms */
  symptoms: Array<{
    description: string;
    severity: number;
    location?: string;
    duration?: string;
  }>;
  /** Optional vitals summary */
  vitals?: {
    restingHeartRate?: number;
    bloodPressure?: { systolic: number; diastolic: number };
    hrv?: number;
    sleepHours?: number;
  };
  /** Demographics for context */
  demographics?: {
    age?: number;
    sex?: 'male' | 'female';
  };
}

/**
 * Educational context output for AI prompts
 */
export interface EducationalContext {
  /** The full prompt for the AI */
  prompt: string;
  /** Why this topic is relevant to the patient */
  relevanceExplanation: string;
  /** Educational framing of patient data */
  patientDataContext: string;
  /** Related topics to explore */
  suggestedTopics: RelatedTopic[];
  /** "What this means for you" points */
  personalInsights: string[];
  /** Learning objectives for this session */
  learningObjectives: string[];
  /** References to physician-level education modules */
  educationModuleReferences: EducationModuleReference[];
  /** Citations for educational content */
  citations: Citation[];
  /** Medical disclaimer */
  disclaimer: string;
}

/**
 * Related topic suggestion
 */
export interface RelatedTopic {
  topicId: string;
  topicName: string;
  category: 'anatomy' | 'physiology' | 'condition' | 'medication' | 'lab' | 'lifestyle';
  relevanceReason: string;
  relevanceLevel: RelevanceLevel;
  suggestedComplexity: ComplexityLevel;
}

/**
 * Reference to physician-level education module
 */
export interface EducationModuleReference {
  moduleId: string;
  moduleName: string;
  domain: 'anatomy' | 'physiology' | 'pathology' | 'pharmacology' | 'lab-interpretation' | 'clinical-reasoning';
  relevance: string;
  complexity: ComplexityLevel;
}

/**
 * Learning path for a patient
 */
export interface LearningPath {
  pathId: string;
  title: string;
  description: string;
  steps: LearningStep[];
  estimatedDuration: string;
  targetOutcomes: string[];
  prerequisites: string[];
}

/**
 * Step in a learning path
 */
export interface LearningStep {
  stepId: string;
  title: string;
  description: string;
  topicType: 'region' | 'condition' | 'medication' | 'lab' | 'concept';
  topicId: string;
  suggestedComplexity: ComplexityLevel;
  learningObjectives: string[];
  estimatedMinutes: number;
}

/**
 * Options for context building
 */
export interface ContextBuildOptions {
  /** Include medication interactions context */
  includeMedicationContext?: boolean;
  /** Include lab result interpretations */
  includeLabContext?: boolean;
  /** Include condition-specific insights */
  includeConditionContext?: boolean;
  /** Include lifestyle recommendations */
  includeLifestyleContext?: boolean;
  /** Language preference */
  language?: 'en' | 'es';
  /** Maximum context length (tokens) */
  maxContextLength?: number;
}

/**
 * Enriched knowledge context fetched from ContentService.
 * Used internally to inject knowledge graph data into prompts.
 */
interface KnowledgeEnrichment {
  /** Knowledge graph relationships formatted as text */
  graphRelationships: string;
  /** Glossary definitions for relevant medical terms */
  glossaryDefinitions: string;
  /** Region-specific educational content (anatomy details) */
  anatomyContent: string;
  /** Pre-built explanation at the requested complexity level */
  levelExplanation: string;
  /** Explanation level metadata (audience, constraints) */
  levelGuidance: string;
}

// ============================================================================
// Constants
// ============================================================================

const EDUCATIONAL_DISCLAIMER = `IMPORTANT: This information is for educational purposes only and should not be used for self-diagnosis or to replace professional medical advice. Always consult with your healthcare provider for personalized medical guidance.`;

const EDUCATIONAL_FRAMING = {
  region: 'Understanding the anatomy helps you visualize what your healthcare provider discusses with you.',
  condition: 'Learning about this condition helps you become an informed partner in your healthcare journey.',
  medication: 'Understanding how your medications work helps you take them effectively and communicate with your healthcare team.',
  lab: 'Learning what lab tests measure helps you understand the conversations you have with your healthcare provider.',
};

/**
 * Complexity level descriptions for educational content
 */
const COMPLEXITY_DESCRIPTIONS: Record<ComplexityLevel, string> = {
  1: 'Basic concepts using everyday language and simple analogies',
  2: 'Foundational understanding with some medical terminology explained',
  3: 'Intermediate depth with medical concepts and mechanisms',
  4: 'Advanced understanding with detailed pathophysiology',
  5: 'Comprehensive coverage at healthcare professional level',
};

/** Maximum number of knowledge graph neighbours to include per category */
const MAX_GRAPH_NEIGHBOURS = 6;

/** Maximum glossary definitions to include in context */
const MAX_GLOSSARY_TERMS = 5;

// ============================================================================
// Educational Context Builder Class
// ============================================================================

/**
 * Educational Context Builder
 *
 * Builds personalized educational context for the AI Medical Encyclopedia.
 * Focuses on education and understanding, never diagnosis.
 *
 * Uses ContentService to enrich prompts with knowledge graph relationships,
 * anatomy encyclopedia data, glossary definitions, and level-appropriate
 * explanation guidance.
 */
export class EducationalContextBuilder {
  private contentService: ContentService;

  private defaultOptions: ContextBuildOptions = {
    includeMedicationContext: true,
    includeLabContext: true,
    includeConditionContext: true,
    includeLifestyleContext: true,
    language: 'en',
    maxContextLength: 4000,
  };

  /**
   * @param contentService - Optional ContentService instance. Falls back to
   *   the global singleton via getContentService() if not provided.
   */
  constructor(contentService?: ContentService) {
    this.contentService = contentService ?? getContentService();
  }

  /**
   * Build educational context for an anatomical region
   *
   * @param regionId - The anatomical region identifier
   * @param patientData - Patient's health data
   * @param complexity - Desired complexity level (1-5)
   * @param options - Additional context building options
   * @returns Educational context for the AI
   */
  async buildRegionContext(
    regionId: string,
    patientData: PatientHealthData,
    complexity: ComplexityLevel = 3,
    options: ContextBuildOptions = {}
  ): Promise<EducationalContext> {
    const opts = { ...this.defaultOptions, ...options };
    const regionName = this.formatRegionName(regionId);

    // Find relevant patient data for this region
    const relevantConditions = this.findConditionsRelatedToRegion(regionId, patientData.conditions);
    const relevantMedications = this.findMedicationsRelatedToRegion(regionId, patientData.medications);
    const relevantLabs = this.findLabsRelatedToRegion(regionId, patientData.labs);
    const relevantSymptoms = this.findSymptomsRelatedToRegion(regionId, patientData.symptoms);

    // Enrich with ContentService knowledge graph data
    const enrichment = await this.enrichForRegion(regionId, regionName, complexity, opts);

    // Build the educational context
    const relevanceExplanation = this.buildRegionRelevanceExplanation(
      regionName,
      relevantConditions,
      relevantMedications,
      relevantLabs,
      relevantSymptoms
    );

    const patientDataContext = this.buildPatientDataSection(
      patientData,
      relevantConditions,
      relevantMedications,
      relevantLabs,
      'region'
    );

    const suggestedTopics = this.generateRelatedTopicsForRegion(
      regionId,
      patientData,
      relevantConditions,
      relevantMedications
    );

    const personalInsights = this.generatePersonalInsightsForRegion(
      regionName,
      relevantConditions,
      relevantMedications,
      relevantLabs,
      relevantSymptoms
    );

    const learningObjectives = this.generateLearningObjectivesForRegion(
      regionName,
      complexity,
      relevantConditions.length > 0
    );

    const educationModuleReferences = this.findRelevantEducationModules(
      'anatomy',
      regionId,
      complexity
    );

    const prompt = this.assembleRegionPrompt(
      regionName,
      complexity,
      patientDataContext,
      relevanceExplanation,
      learningObjectives,
      opts,
      enrichment
    );

    return {
      prompt,
      relevanceExplanation,
      patientDataContext,
      suggestedTopics,
      personalInsights,
      learningObjectives,
      educationModuleReferences,
      citations: [],
      disclaimer: EDUCATIONAL_DISCLAIMER,
    };
  }

  /**
   * Build educational context for a medical condition
   *
   * @param conditionId - The condition identifier
   * @param patientData - Patient's health data
   * @param complexity - Desired complexity level (1-5)
   * @param options - Additional context building options
   * @returns Educational context for the AI
   */
  async buildConditionContext(
    conditionId: string,
    patientData: PatientHealthData,
    complexity: ComplexityLevel = 3,
    options: ContextBuildOptions = {}
  ): Promise<EducationalContext> {
    const opts = { ...this.defaultOptions, ...options };
    const conditionName = this.formatConditionName(conditionId);

    // Check if patient has this condition
    const patientHasCondition = patientData.conditions.some(
      c => c.id === conditionId || c.name.toLowerCase() === conditionName.toLowerCase()
    );

    // Find related patient data
    const relatedMedications = this.findMedicationsForCondition(conditionId, patientData.medications);
    const relatedLabs = this.findLabsForCondition(conditionId, patientData.labs);
    const relatedSymptoms = this.findSymptomsForCondition(conditionId, patientData.symptoms);

    // Enrich with ContentService knowledge graph data
    const enrichment = await this.enrichForCondition(conditionId, conditionName, complexity, opts);

    // Build context
    const relevanceExplanation = this.buildConditionRelevanceExplanation(
      conditionName,
      patientHasCondition,
      relatedMedications,
      relatedLabs
    );

    const patientDataContext = this.buildPatientDataSection(
      patientData,
      patientHasCondition ? [{ id: conditionId, name: conditionName }] : [],
      relatedMedications,
      relatedLabs,
      'condition'
    );

    const suggestedTopics = this.generateRelatedTopicsForCondition(
      conditionId,
      patientData,
      patientHasCondition
    );

    const personalInsights = this.generatePersonalInsightsForCondition(
      conditionName,
      patientHasCondition,
      relatedMedications,
      relatedLabs,
      relatedSymptoms
    );

    const learningObjectives = this.generateLearningObjectivesForCondition(
      conditionName,
      complexity,
      patientHasCondition
    );

    const educationModuleReferences = this.findRelevantEducationModules(
      'pathology',
      conditionId,
      complexity
    );

    const prompt = this.assembleConditionPrompt(
      conditionName,
      complexity,
      patientHasCondition,
      patientDataContext,
      relevanceExplanation,
      learningObjectives,
      opts,
      enrichment
    );

    return {
      prompt,
      relevanceExplanation,
      patientDataContext,
      suggestedTopics,
      personalInsights,
      learningObjectives,
      educationModuleReferences,
      citations: [],
      disclaimer: EDUCATIONAL_DISCLAIMER,
    };
  }

  /**
   * Build educational context for a medication
   *
   * @param medicationId - The medication identifier
   * @param patientData - Patient's health data
   * @param complexity - Desired complexity level (1-5)
   * @param options - Additional context building options
   * @returns Educational context for the AI
   */
  async buildMedicationContext(
    medicationId: string,
    patientData: PatientHealthData,
    complexity: ComplexityLevel = 3,
    options: ContextBuildOptions = {}
  ): Promise<EducationalContext> {
    const opts = { ...this.defaultOptions, ...options };
    const medicationName = this.formatMedicationName(medicationId);

    // Check if patient takes this medication
    const patientTakesMedication = patientData.medications.some(
      m => m.id === medicationId || m.name.toLowerCase() === medicationName.toLowerCase()
    );

    const patientMedication = patientData.medications.find(
      m => m.id === medicationId || m.name.toLowerCase() === medicationName.toLowerCase()
    );

    // Find related data
    const relatedConditions = patientMedication?.indication
      ? patientData.conditions.filter(c =>
          c.name.toLowerCase().includes(patientMedication.indication!.toLowerCase())
        )
      : [];

    const relatedLabs = this.findLabsAffectedByMedication(medicationId, patientData.labs);
    const otherMedications = patientData.medications.filter(
      m => m.id !== medicationId && m.name.toLowerCase() !== medicationName.toLowerCase()
    );

    // Enrich with ContentService knowledge graph data
    const enrichment = await this.enrichForMedication(medicationId, medicationName, complexity, opts);

    // Build context
    const relevanceExplanation = this.buildMedicationRelevanceExplanation(
      medicationName,
      patientTakesMedication,
      patientMedication,
      relatedConditions
    );

    const patientDataContext = this.buildMedicationPatientContext(
      patientData,
      patientMedication,
      otherMedications,
      relatedLabs
    );

    const suggestedTopics = this.generateRelatedTopicsForMedication(
      medicationId,
      patientData,
      patientTakesMedication
    );

    const personalInsights = this.generatePersonalInsightsForMedication(
      medicationName,
      patientTakesMedication,
      patientMedication,
      relatedLabs,
      otherMedications
    );

    const learningObjectives = this.generateLearningObjectivesForMedication(
      medicationName,
      complexity,
      patientTakesMedication
    );

    const educationModuleReferences = this.findRelevantEducationModules(
      'pharmacology',
      medicationId,
      complexity
    );

    const prompt = this.assembleMedicationPrompt(
      medicationName,
      complexity,
      patientTakesMedication,
      patientDataContext,
      relevanceExplanation,
      learningObjectives,
      otherMedications,
      opts,
      enrichment
    );

    return {
      prompt,
      relevanceExplanation,
      patientDataContext,
      suggestedTopics,
      personalInsights,
      learningObjectives,
      educationModuleReferences,
      citations: [],
      disclaimer: EDUCATIONAL_DISCLAIMER,
    };
  }

  /**
   * Build educational context for a lab test
   *
   * @param labId - The lab test identifier
   * @param patientData - Patient's health data
   * @param complexity - Desired complexity level (1-5)
   * @param options - Additional context building options
   * @returns Educational context for the AI
   */
  async buildLabContext(
    labId: string,
    patientData: PatientHealthData,
    complexity: ComplexityLevel = 3,
    options: ContextBuildOptions = {}
  ): Promise<EducationalContext> {
    const opts = { ...this.defaultOptions, ...options };
    const labName = this.formatLabName(labId);

    // Find patient's result for this lab
    const patientLabResult = patientData.labs.find(
      l => l.id === labId || l.testName.toLowerCase() === labName.toLowerCase()
    );

    const hasLabResult = !!patientLabResult;

    // Find related data
    const relatedConditions = this.findConditionsRelatedToLab(labId, patientData.conditions);
    const relatedMedications = this.findMedicationsAffectingLab(labId, patientData.medications);

    // Enrich with ContentService knowledge graph data
    const enrichment = await this.enrichForLab(labId, labName, complexity, opts);

    // Build context
    const relevanceExplanation = this.buildLabRelevanceExplanation(
      labName,
      hasLabResult,
      patientLabResult,
      relatedConditions
    );

    const patientDataContext = this.buildLabPatientContext(
      patientData,
      patientLabResult,
      relatedConditions,
      relatedMedications
    );

    const suggestedTopics = this.generateRelatedTopicsForLab(
      labId,
      patientData,
      hasLabResult
    );

    const personalInsights = this.generatePersonalInsightsForLab(
      labName,
      patientLabResult,
      relatedConditions,
      relatedMedications
    );

    const learningObjectives = this.generateLearningObjectivesForLab(
      labName,
      complexity,
      hasLabResult
    );

    const educationModuleReferences = this.findRelevantEducationModules(
      'lab-interpretation',
      labId,
      complexity
    );

    const prompt = this.assembleLabPrompt(
      labName,
      complexity,
      patientLabResult,
      patientDataContext,
      relevanceExplanation,
      learningObjectives,
      relatedConditions,
      relatedMedications,
      opts,
      enrichment
    );

    return {
      prompt,
      relevanceExplanation,
      patientDataContext,
      suggestedTopics,
      personalInsights,
      learningObjectives,
      educationModuleReferences,
      citations: [],
      disclaimer: EDUCATIONAL_DISCLAIMER,
    };
  }

  /**
   * Generate a personalized learning path based on patient data and interests
   *
   * @param patientData - Patient's health data
   * @param interests - Topics the patient is interested in
   * @returns A structured learning path
   */
  generateLearningPath(
    patientData: PatientHealthData,
    interests: string[]
  ): LearningPath {
    const steps: LearningStep[] = [];
    let stepNumber = 1;

    // Start with foundational anatomy for their conditions
    const primaryCondition = patientData.conditions.find(c => c.status === 'active');
    if (primaryCondition && primaryCondition.relatedSystems) {
      primaryCondition.relatedSystems.forEach(system => {
        steps.push({
          stepId: `step-${stepNumber++}`,
          title: `Understanding Your ${this.formatSystemName(system)}`,
          description: `Learn the basics of the ${system} system and how it relates to your health.`,
          topicType: 'region',
          topicId: system,
          suggestedComplexity: 2,
          learningObjectives: [
            `Identify the main structures of the ${system} system`,
            'Understand the basic functions of these structures',
            `Recognize how ${primaryCondition.name} relates to this system`,
          ],
          estimatedMinutes: 15,
        });
      });
    }

    // Add condition understanding
    patientData.conditions
      .filter(c => c.status === 'active' || c.status === 'chronic')
      .slice(0, 3) // Limit to top 3 conditions
      .forEach(condition => {
        steps.push({
          stepId: `step-${stepNumber++}`,
          title: `Understanding ${condition.name}`,
          description: `Learn what ${condition.name} is, how it affects your body, and what you can do about it.`,
          topicType: 'condition',
          topicId: condition.id,
          suggestedComplexity: 3,
          learningObjectives: [
            `Explain what ${condition.name} is in your own words`,
            'Identify the body systems involved',
            'Understand the general treatment approach',
            'Know what questions to ask your healthcare provider',
          ],
          estimatedMinutes: 20,
        });
      });

    // Add medication understanding
    patientData.medications.slice(0, 3).forEach(medication => {
      steps.push({
        stepId: `step-${stepNumber++}`,
        title: `How ${medication.name} Works`,
        description: `Understand how ${medication.name} helps manage your health and what to expect.`,
        topicType: 'medication',
        topicId: medication.id,
        suggestedComplexity: 2,
        learningObjectives: [
          `Explain the basic mechanism of ${medication.name}`,
          'Understand why this medication was prescribed',
          'Recognize common effects and what to watch for',
          'Know how to take it effectively',
        ],
        estimatedMinutes: 10,
      });
    });

    // Add lab understanding if there are abnormal results
    const abnormalLabs = patientData.labs.filter(l => l.status !== 'normal');
    abnormalLabs.slice(0, 2).forEach(lab => {
      steps.push({
        stepId: `step-${stepNumber++}`,
        title: `Understanding Your ${lab.testName} Results`,
        description: `Learn what ${lab.testName} measures and what your results might indicate.`,
        topicType: 'lab',
        topicId: lab.id,
        suggestedComplexity: 2,
        learningObjectives: [
          `Explain what ${lab.testName} measures`,
          'Understand reference ranges and what they mean',
          'Recognize factors that can affect this test',
          'Know what questions to ask about your results',
        ],
        estimatedMinutes: 10,
      });
    });

    // Add interest-based topics
    interests.slice(0, 2).forEach(interest => {
      steps.push({
        stepId: `step-${stepNumber++}`,
        title: `Exploring: ${interest}`,
        description: `Dive deeper into ${interest} and how it connects to your overall health.`,
        topicType: 'concept',
        topicId: interest.toLowerCase().replace(/\s+/g, '-'),
        suggestedComplexity: 3,
        learningObjectives: [
          `Develop a foundational understanding of ${interest}`,
          'Connect this topic to your personal health journey',
          'Identify practical applications of this knowledge',
        ],
        estimatedMinutes: 15,
      });
    });

    // Calculate total duration
    const totalMinutes = steps.reduce((sum, step) => sum + step.estimatedMinutes, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const estimatedDuration = hours > 0 ? `${hours}h ${minutes}m` : `${minutes} minutes`;

    return {
      pathId: `path-${Date.now()}`,
      title: this.generateLearningPathTitle(patientData),
      description: this.generateLearningPathDescription(patientData),
      steps,
      estimatedDuration,
      targetOutcomes: [
        'Understand your body and how your conditions affect it',
        'Know how your medications work and why they are prescribed',
        'Be able to interpret your lab results in context',
        'Feel confident asking questions at medical appointments',
        'Make informed decisions as a partner in your healthcare',
      ],
      prerequisites: [],
    };
  }

  // ============================================================================
  // Private Methods - ContentService Enrichment
  // ============================================================================

  /**
   * Enrich context for an anatomical region using ContentService.
   * Fetches anatomy encyclopedia data, knowledge graph relationships,
   * glossary terms, and explanation-level guidance.
   */
  private async enrichForRegion(
    regionId: string,
    regionName: string,
    complexity: ComplexityLevel,
    opts: ContextBuildOptions,
  ): Promise<KnowledgeEnrichment> {
    const level = complexity as ExplanationLevelNumber;

    // Fetch data in parallel from ContentService
    const [
      anatomyRegion,
      graphNode,
      glossaryEntry,
      explanationLevel,
      explanationPrompt,
    ] = await Promise.all([
      this.contentService.getAnatomyRegion(regionId).catch(() => undefined),
      Promise.resolve(this.contentService.getGraphNode(`anatomy:${regionId}`)),
      this.contentService.getGlossaryEntry(regionName).catch(() => undefined),
      this.contentService.getExplanationLevel(level).catch(() => undefined),
      this.contentService.getExplanationPrompt(level, regionName).catch(() => undefined),
    ]);

    // Build anatomy content section
    let anatomyContent = '';
    if (anatomyRegion) {
      const parts: string[] = [];
      parts.push(`Anatomy Reference: ${anatomyRegion.name}`);
      if (anatomyRegion.spanish) parts.push(`  Spanish: ${anatomyRegion.spanish}`);
      if (anatomyRegion.function) parts.push(`  Function: ${anatomyRegion.function}`);
      if ((anatomyRegion as AnatomyRegion & { location?: string }).location) {
        parts.push(`  Location: ${(anatomyRegion as AnatomyRegion & { location?: string }).location}`);
      }
      anatomyContent = parts.join('\n');
    }

    // Build graph relationships section
    let graphRelationships = '';
    if (graphNode) {
      const related = this.contentService.getRelated(`anatomy:${regionId}`);
      const conditions = related.filter(n => n.type === 'condition').slice(0, MAX_GRAPH_NEIGHBOURS);
      const symptoms = related.filter(n => n.type === 'symptom').slice(0, MAX_GRAPH_NEIGHBOURS);
      const procedures = related.filter(n => n.type === 'procedure').slice(0, MAX_GRAPH_NEIGHBOURS);

      const parts: string[] = [];
      if (conditions.length > 0) {
        parts.push(`Conditions affecting this region: ${conditions.map(n => n.name).join(', ')}`);
      }
      if (symptoms.length > 0) {
        parts.push(`Symptoms associated with this region: ${symptoms.map(n => n.name).join(', ')}`);
      }
      if (procedures.length > 0) {
        parts.push(`Procedures involving this region: ${procedures.map(n => n.name).join(', ')}`);
      }
      if (graphNode.description) {
        parts.push(`Medical description: ${graphNode.description}`);
      }
      graphRelationships = parts.join('\n');
    }

    // Build glossary section
    const glossaryDefinitions = await this.buildGlossarySection(regionName, opts);

    // Build level guidance
    const levelGuidance = this.buildLevelGuidance(explanationLevel, level);
    const levelExplanation = explanationPrompt?.systemPrompt
      ? `Level-specific instruction: ${explanationPrompt.systemPrompt}`
      : '';

    return {
      graphRelationships,
      glossaryDefinitions,
      anatomyContent,
      levelExplanation,
      levelGuidance,
    };
  }

  /**
   * Enrich context for a medical condition using ContentService.
   * Fetches condition info from knowledge graph (symptoms, medications,
   * procedures, anatomy regions), glossary, and explanation levels.
   */
  private async enrichForCondition(
    conditionId: string,
    conditionName: string,
    complexity: ComplexityLevel,
    opts: ContextBuildOptions,
  ): Promise<KnowledgeEnrichment> {
    const level = complexity as ExplanationLevelNumber;

    // Fetch data in parallel from ContentService
    const [
      conditionInfo,
      explanationText,
      explanationLevel,
      explanationPrompt,
    ] = await Promise.all([
      this.contentService.getConditionInfo(conditionId).catch(() => undefined),
      this.contentService.getExplanation(conditionId, level).catch(() => undefined),
      this.contentService.getExplanationLevel(level).catch(() => undefined),
      this.contentService.getExplanationPrompt(level, conditionName).catch(() => undefined),
    ]);

    // Build graph relationships from condition info
    let graphRelationships = '';
    let anatomyContent = '';
    if (conditionInfo) {
      const parts: string[] = [];

      if (conditionInfo.node.description) {
        parts.push(`Medical description: ${conditionInfo.node.description}`);
      }

      if (conditionInfo.symptoms.length > 0) {
        const symptomNames = conditionInfo.symptoms.slice(0, MAX_GRAPH_NEIGHBOURS).map(n => n.name);
        parts.push(`Known symptoms: ${symptomNames.join(', ')}`);
      }

      if (conditionInfo.medications.length > 0) {
        const medNames = conditionInfo.medications.slice(0, MAX_GRAPH_NEIGHBOURS).map(n => n.name);
        parts.push(`Treatment medications: ${medNames.join(', ')}`);
      }

      if (conditionInfo.procedures.length > 0) {
        const procNames = conditionInfo.procedures.slice(0, MAX_GRAPH_NEIGHBOURS).map(n => n.name);
        parts.push(`Diagnostic/treatment procedures: ${procNames.join(', ')}`);
      }

      if (conditionInfo.specialists.length > 0) {
        const specNames = conditionInfo.specialists.slice(0, MAX_GRAPH_NEIGHBOURS).map(n => n.name);
        parts.push(`Relevant specialties: ${specNames.join(', ')}`);
      }

      graphRelationships = parts.join('\n');

      // Build anatomy content from condition info
      if (conditionInfo.anatomyRegions.length > 0) {
        const anatomyParts = conditionInfo.anatomyRegions.slice(0, MAX_GRAPH_NEIGHBOURS).map(region => {
          let line = `  - ${region.name}`;
          if (region.function) line += `: ${region.function}`;
          return line;
        });
        anatomyContent = `Affected anatomy:\n${anatomyParts.join('\n')}`;
      }
    }

    // Build glossary section (include condition name + related terms)
    const glossaryDefinitions = await this.buildGlossarySection(conditionName, opts);

    // Build level guidance and pre-built explanation
    const levelGuidance = this.buildLevelGuidance(explanationLevel, level);

    let levelExplanation = '';
    if (explanationText) {
      levelExplanation = `Pre-built level-${level} explanation:\n${explanationText}`;
    } else if (explanationPrompt?.systemPrompt) {
      levelExplanation = `Level-specific instruction: ${explanationPrompt.systemPrompt}`;
    }

    return {
      graphRelationships,
      glossaryDefinitions,
      anatomyContent,
      levelExplanation,
      levelGuidance,
    };
  }

  /**
   * Enrich context for a medication using ContentService.
   * Fetches medication node from knowledge graph, related conditions/anatomy,
   * glossary definitions, and explanation-level guidance.
   */
  private async enrichForMedication(
    medicationId: string,
    medicationName: string,
    complexity: ComplexityLevel,
    opts: ContextBuildOptions,
  ): Promise<KnowledgeEnrichment> {
    const level = complexity as ExplanationLevelNumber;

    const graphNode = this.contentService.getGraphNode(`medication:${medicationId}`);

    const [
      explanationLevel,
      explanationPrompt,
    ] = await Promise.all([
      this.contentService.getExplanationLevel(level).catch(() => undefined),
      this.contentService.getExplanationPrompt(level, medicationName).catch(() => undefined),
    ]);

    // Build graph relationships
    let graphRelationships = '';
    if (graphNode) {
      const related = this.contentService.getRelated(`medication:${medicationId}`);
      const conditions = related.filter(n => n.type === 'condition').slice(0, MAX_GRAPH_NEIGHBOURS);
      const anatomy = related.filter(n => n.type === 'anatomy').slice(0, MAX_GRAPH_NEIGHBOURS);
      const symptoms = related.filter(n => n.type === 'symptom').slice(0, MAX_GRAPH_NEIGHBOURS);

      const parts: string[] = [];
      if (graphNode.description) {
        parts.push(`Medical description: ${graphNode.description}`);
      }
      if (conditions.length > 0) {
        parts.push(`Conditions treated: ${conditions.map(n => n.name).join(', ')}`);
      }
      if (anatomy.length > 0) {
        parts.push(`Body systems affected: ${anatomy.map(n => n.name).join(', ')}`);
      }
      if (symptoms.length > 0) {
        parts.push(`Related symptoms: ${symptoms.map(n => n.name).join(', ')}`);
      }
      graphRelationships = parts.join('\n');
    }

    const glossaryDefinitions = await this.buildGlossarySection(medicationName, opts);
    const levelGuidance = this.buildLevelGuidance(explanationLevel, level);
    const levelExplanation = explanationPrompt?.systemPrompt
      ? `Level-specific instruction: ${explanationPrompt.systemPrompt}`
      : '';

    return {
      graphRelationships,
      glossaryDefinitions,
      anatomyContent: '',
      levelExplanation,
      levelGuidance,
    };
  }

  /**
   * Enrich context for a lab test using ContentService.
   * Fetches related conditions/anatomy from knowledge graph, glossary
   * definitions, and explanation-level guidance.
   */
  private async enrichForLab(
    labId: string,
    labName: string,
    complexity: ComplexityLevel,
    opts: ContextBuildOptions,
  ): Promise<KnowledgeEnrichment> {
    const level = complexity as ExplanationLevelNumber;

    // Search the knowledge graph for the lab topic
    const searchResults = await this.contentService.searchAll(labName, {
      limit: 5,
      language: opts.language,
    }).catch(() => []);

    const [
      explanationLevel,
      explanationPrompt,
    ] = await Promise.all([
      this.contentService.getExplanationLevel(level).catch(() => undefined),
      this.contentService.getExplanationPrompt(level, labName).catch(() => undefined),
    ]);

    // Build graph relationships from search results
    let graphRelationships = '';
    if (searchResults.length > 0) {
      const parts: string[] = [];
      const conditions = searchResults.filter(r => r.type === 'condition').slice(0, MAX_GRAPH_NEIGHBOURS);
      const anatomy = searchResults.filter(r => r.type === 'anatomy').slice(0, MAX_GRAPH_NEIGHBOURS);

      if (conditions.length > 0) {
        parts.push(`Related conditions: ${conditions.map(r => r.name).join(', ')}`);
      }
      if (anatomy.length > 0) {
        parts.push(`Related anatomy: ${anatomy.map(r => r.name).join(', ')}`);
      }
      // Include the best match description if available
      const bestMatch = searchResults[0];
      if (bestMatch.description) {
        parts.push(`Reference: ${bestMatch.description}`);
      }
      graphRelationships = parts.join('\n');
    }

    const glossaryDefinitions = await this.buildGlossarySection(labName, opts);
    const levelGuidance = this.buildLevelGuidance(explanationLevel, level);
    const levelExplanation = explanationPrompt?.systemPrompt
      ? `Level-specific instruction: ${explanationPrompt.systemPrompt}`
      : '';

    return {
      graphRelationships,
      glossaryDefinitions,
      anatomyContent: '',
      levelExplanation,
      levelGuidance,
    };
  }

  /**
   * Build a glossary definitions section by looking up the primary term
   * and any related medical terms in the ContentService glossary.
   */
  private async buildGlossarySection(
    primaryTerm: string,
    opts: ContextBuildOptions,
  ): Promise<string> {
    const entries: string[] = [];

    // Look up the primary term
    const primaryEntry = await this.contentService.getGlossaryEntry(primaryTerm).catch(() => undefined);
    if (primaryEntry) {
      const definition = opts.language === 'es' ? primaryEntry.plainES : primaryEntry.plainEN;
      entries.push(`${primaryEntry.term}: ${definition}`);
    }

    // Search for additional related glossary terms
    const searchResults = await this.contentService.searchAll(primaryTerm, {
      limit: MAX_GLOSSARY_TERMS + 1,
      includeGlossary: true,
      language: opts.language,
    }).catch(() => []);

    for (const result of searchResults) {
      if (result.type === 'glossary' && entries.length < MAX_GLOSSARY_TERMS) {
        const glossarySource = result.source as GlossaryEntry;
        if (glossarySource && glossarySource.term !== primaryEntry?.term) {
          const definition = opts.language === 'es' ? glossarySource.plainES : glossarySource.plainEN;
          entries.push(`${glossarySource.term}: ${definition}`);
        }
      }
    }

    if (entries.length === 0) return '';
    return `Glossary definitions:\n${entries.map(e => `  - ${e}`).join('\n')}`;
  }

  /**
   * Build explanation level guidance text from the explanation level metadata.
   * This tells the AI what audience it is targeting and what communication
   * constraints to follow.
   */
  private buildLevelGuidance(
    explanationLevel: { name: string; audience: string; constraints: string[] } | undefined,
    level: ExplanationLevelNumber,
  ): string {
    if (!explanationLevel) return '';

    const parts: string[] = [];
    parts.push(`Explanation Level ${level}: "${explanationLevel.name}" (Audience: ${explanationLevel.audience})`);

    if (explanationLevel.constraints && explanationLevel.constraints.length > 0) {
      parts.push(`Communication constraints:`);
      explanationLevel.constraints.slice(0, 4).forEach(constraint => {
        parts.push(`  - ${constraint}`);
      });
    }

    return parts.join('\n');
  }

  /**
   * Format the enrichment data into a prompt section string.
   * Only includes non-empty sections.
   */
  private formatEnrichmentSection(enrichment: KnowledgeEnrichment): string {
    const sections: string[] = [];

    if (enrichment.levelGuidance) {
      sections.push(enrichment.levelGuidance);
    }

    if (enrichment.graphRelationships) {
      sections.push(`\n=== MEDICAL KNOWLEDGE GRAPH ===\n${enrichment.graphRelationships}`);
    }

    if (enrichment.anatomyContent) {
      sections.push(`\n=== ANATOMY REFERENCE ===\n${enrichment.anatomyContent}`);
    }

    if (enrichment.glossaryDefinitions) {
      sections.push(`\n=== MEDICAL GLOSSARY ===\n${enrichment.glossaryDefinitions}`);
    }

    if (enrichment.levelExplanation) {
      sections.push(`\n=== LEVEL-APPROPRIATE REFERENCE ===\n${enrichment.levelExplanation}`);
    }

    if (sections.length === 0) return '';
    return '\n' + sections.join('\n') + '\n';
  }

  // ============================================================================
  // Private Helper Methods - Relevance Finding
  // ============================================================================

  private findConditionsRelatedToRegion(
    regionId: string,
    conditions: PatientHealthData['conditions']
  ): PatientHealthData['conditions'] {
    const regionLower = regionId.toLowerCase();
    return conditions.filter(c =>
      c.relatedSystems?.some(s => s.toLowerCase().includes(regionLower)) ||
      this.isConditionRelatedToRegion(c.name, regionId)
    );
  }

  private findMedicationsRelatedToRegion(
    regionId: string,
    medications: PatientHealthData['medications']
  ): PatientHealthData['medications'] {
    // Map regions to drug classes that affect them
    const regionDrugClassMap: Record<string, string[]> = {
      heart: ['cardiac', 'antihypertensive', 'beta-blocker', 'ace-inhibitor', 'statin'],
      brain: ['neurological', 'antidepressant', 'anxiolytic', 'anticonvulsant'],
      kidney: ['diuretic', 'ace-inhibitor', 'nephroprotective'],
      liver: ['hepatoprotective', 'statin'],
      lung: ['bronchodilator', 'corticosteroid', 'respiratory'],
      stomach: ['proton-pump-inhibitor', 'antacid', 'h2-blocker'],
      pancreas: ['antidiabetic', 'insulin'],
    };

    const relevantClasses = regionDrugClassMap[regionId.toLowerCase()] || [];
    return medications.filter(m =>
      relevantClasses.some(cls =>
        m.drugClass?.toLowerCase().includes(cls) ||
        m.indication?.toLowerCase().includes(regionId.toLowerCase())
      )
    );
  }

  private findLabsRelatedToRegion(
    regionId: string,
    labs: PatientHealthData['labs']
  ): PatientHealthData['labs'] {
    return labs.filter(l =>
      l.relatedOrgans?.some(o => o.toLowerCase().includes(regionId.toLowerCase()))
    );
  }

  private findSymptomsRelatedToRegion(
    regionId: string,
    symptoms: PatientHealthData['symptoms']
  ): PatientHealthData['symptoms'] {
    return symptoms.filter(s =>
      s.location?.toLowerCase().includes(regionId.toLowerCase())
    );
  }

  private findMedicationsForCondition(
    conditionId: string,
    medications: PatientHealthData['medications']
  ): PatientHealthData['medications'] {
    const conditionName = this.formatConditionName(conditionId).toLowerCase();
    return medications.filter(m =>
      m.indication?.toLowerCase().includes(conditionName)
    );
  }

  private findLabsForCondition(
    conditionId: string,
    labs: PatientHealthData['labs']
  ): PatientHealthData['labs'] {
    // Map conditions to relevant lab tests
    const conditionLabMap: Record<string, string[]> = {
      diabetes: ['glucose', 'hba1c', 'a1c', 'fasting glucose'],
      hypertension: ['creatinine', 'bun', 'potassium', 'sodium'],
      'heart-disease': ['cholesterol', 'ldl', 'hdl', 'triglycerides', 'bnp'],
      'kidney-disease': ['creatinine', 'bun', 'egfr', 'albumin'],
      'liver-disease': ['alt', 'ast', 'bilirubin', 'albumin', 'inr'],
      thyroid: ['tsh', 't3', 't4', 'free t4'],
      anemia: ['hemoglobin', 'hematocrit', 'iron', 'ferritin', 'b12'],
    };

    const relevantTests = conditionLabMap[conditionId.toLowerCase()] || [];
    return labs.filter(l =>
      relevantTests.some(test => l.testName.toLowerCase().includes(test))
    );
  }

  private findSymptomsForCondition(
    conditionId: string,
    symptoms: PatientHealthData['symptoms']
  ): PatientHealthData['symptoms'] {
    // This is a simplified mapping - in production, this would use a medical ontology
    const conditionSymptomKeywords: Record<string, string[]> = {
      diabetes: ['thirst', 'urination', 'fatigue', 'vision', 'numbness'],
      hypertension: ['headache', 'dizziness', 'chest'],
      asthma: ['breathing', 'wheez', 'cough', 'chest tight'],
      arthritis: ['joint', 'pain', 'stiff', 'swell'],
    };

    const keywords = conditionSymptomKeywords[conditionId.toLowerCase()] || [];
    return symptoms.filter(s =>
      keywords.some(kw => s.description.toLowerCase().includes(kw))
    );
  }

  private findLabsAffectedByMedication(
    medicationId: string,
    labs: PatientHealthData['labs']
  ): PatientHealthData['labs'] {
    // Map medications to labs they affect
    const medicationLabMap: Record<string, string[]> = {
      metformin: ['creatinine', 'b12', 'glucose'],
      lisinopril: ['potassium', 'creatinine', 'bun'],
      atorvastatin: ['alt', 'ast', 'cholesterol', 'ldl'],
      warfarin: ['inr', 'pt'],
      levothyroxine: ['tsh', 't4'],
    };

    const medName = this.formatMedicationName(medicationId).toLowerCase();
    const relevantTests = medicationLabMap[medName] || [];
    return labs.filter(l =>
      relevantTests.some(test => l.testName.toLowerCase().includes(test))
    );
  }

  private findConditionsRelatedToLab(
    labId: string,
    conditions: PatientHealthData['conditions']
  ): PatientHealthData['conditions'] {
    const labConditionMap: Record<string, string[]> = {
      glucose: ['diabetes', 'prediabetes', 'metabolic'],
      creatinine: ['kidney', 'renal'],
      hemoglobin: ['anemia', 'blood'],
      cholesterol: ['heart', 'cardiovascular', 'hyperlipidemia'],
      tsh: ['thyroid', 'hypothyroid', 'hyperthyroid'],
    };

    const labName = this.formatLabName(labId).toLowerCase();
    const relevantConditions = labConditionMap[labName] || [];
    return conditions.filter(c =>
      relevantConditions.some(cond => c.name.toLowerCase().includes(cond))
    );
  }

  private findMedicationsAffectingLab(
    labId: string,
    medications: PatientHealthData['medications']
  ): PatientHealthData['medications'] {
    const labMedicationMap: Record<string, string[]> = {
      glucose: ['metformin', 'insulin', 'glipizide', 'jardiance'],
      potassium: ['lisinopril', 'losartan', 'spironolactone'],
      cholesterol: ['atorvastatin', 'rosuvastatin', 'simvastatin'],
      inr: ['warfarin', 'coumadin'],
      tsh: ['levothyroxine', 'synthroid'],
    };

    const labName = this.formatLabName(labId).toLowerCase();
    const relevantMeds = labMedicationMap[labName] || [];
    return medications.filter(m =>
      relevantMeds.some(med =>
        m.name.toLowerCase().includes(med) ||
        m.genericName?.toLowerCase().includes(med)
      )
    );
  }

  private isConditionRelatedToRegion(conditionName: string, regionId: string): boolean {
    const conditionLower = conditionName.toLowerCase();
    const regionLower = regionId.toLowerCase();

    const regionConditionMap: Record<string, string[]> = {
      heart: ['cardiac', 'heart', 'cardiovascular', 'coronary', 'arrhythmia', 'hypertension'],
      brain: ['neurological', 'brain', 'cerebral', 'cognitive', 'dementia', 'stroke'],
      lung: ['pulmonary', 'respiratory', 'asthma', 'copd', 'bronch'],
      kidney: ['renal', 'kidney', 'nephro'],
      liver: ['hepatic', 'liver', 'cirrhosis'],
      stomach: ['gastric', 'stomach', 'gerd', 'ulcer'],
      pancreas: ['pancreatic', 'diabetes', 'pancrea'],
    };

    const relatedTerms = regionConditionMap[regionLower] || [];
    return relatedTerms.some(term => conditionLower.includes(term));
  }

  // ============================================================================
  // Private Helper Methods - Context Building
  // ============================================================================

  private buildRegionRelevanceExplanation(
    regionName: string,
    conditions: PatientHealthData['conditions'],
    medications: PatientHealthData['medications'],
    labs: PatientHealthData['labs'],
    symptoms: PatientHealthData['symptoms']
  ): string {
    const reasons: string[] = [];

    if (conditions.length > 0) {
      const conditionNames = conditions.map(c => c.name).join(', ');
      reasons.push(
        `You have ${conditions.length > 1 ? 'conditions' : 'a condition'} (${conditionNames}) that ${conditions.length > 1 ? 'involve' : 'involves'} this area of your body.`
      );
    }

    if (medications.length > 0) {
      reasons.push(
        `Some of your medications affect the ${regionName.toLowerCase()}.`
      );
    }

    if (labs.length > 0) {
      reasons.push(
        `Your lab results include tests that measure ${regionName.toLowerCase()} function.`
      );
    }

    if (symptoms.length > 0) {
      reasons.push(
        `You have reported symptoms in or related to this area.`
      );
    }

    if (reasons.length === 0) {
      return `Learning about the ${regionName.toLowerCase()} helps you understand your body and can help you recognize when something might need attention.`;
    }

    return `Understanding the ${regionName.toLowerCase()} is particularly relevant for you because: ${reasons.join(' ')} ${EDUCATIONAL_FRAMING.region}`;
  }

  private buildConditionRelevanceExplanation(
    conditionName: string,
    patientHasCondition: boolean,
    medications: PatientHealthData['medications'],
    labs: PatientHealthData['labs']
  ): string {
    if (patientHasCondition) {
      let explanation = `You have ${conditionName} in your health profile. ${EDUCATIONAL_FRAMING.condition}`;

      if (medications.length > 0) {
        explanation += ` You are taking medications to help manage this condition.`;
      }

      if (labs.length > 0) {
        explanation += ` Some of your lab tests help monitor how this condition is being managed.`;
      }

      return explanation;
    }

    return `Learning about ${conditionName} helps you understand this condition, whether for yourself or someone you care about. Understanding medical conditions empowers you to have informed conversations with healthcare providers.`;
  }

  private buildMedicationRelevanceExplanation(
    medicationName: string,
    patientTakesMedication: boolean,
    patientMedication: PatientHealthData['medications'][0] | undefined,
    relatedConditions: PatientHealthData['conditions']
  ): string {
    if (patientTakesMedication && patientMedication) {
      let explanation = `You are currently taking ${medicationName}`;

      if (patientMedication.dosage) {
        explanation += ` (${patientMedication.dosage}`;
        if (patientMedication.frequency) {
          explanation += `, ${patientMedication.frequency}`;
        }
        explanation += ')';
      }

      explanation += '. ' + EDUCATIONAL_FRAMING.medication;

      if (relatedConditions.length > 0) {
        const conditionNames = relatedConditions.map(c => c.name).join(', ');
        explanation += ` This medication helps manage your ${conditionNames}.`;
      }

      return explanation;
    }

    return `Learning about ${medicationName} helps you understand how this medication works. This knowledge can be helpful whether you're considering this medication or want to understand what a family member is taking.`;
  }

  private buildLabRelevanceExplanation(
    labName: string,
    hasLabResult: boolean,
    labResult: PatientHealthData['labs'][0] | undefined,
    relatedConditions: PatientHealthData['conditions']
  ): string {
    if (hasLabResult && labResult) {
      let explanation = `You have a ${labName} result in your records`;

      if (labResult.status !== 'normal') {
        explanation += ` that is ${labResult.status}`;
      }

      explanation += '. ' + EDUCATIONAL_FRAMING.lab;

      if (labResult.trend) {
        explanation += ` Your ${labName} has been ${labResult.trend} over time.`;
      }

      if (relatedConditions.length > 0) {
        const conditionNames = relatedConditions.map(c => c.name).join(', ');
        explanation += ` This test is often monitored for ${conditionNames}.`;
      }

      return explanation;
    }

    return `Understanding ${labName} helps you interpret this common lab test and have informed discussions about your health.`;
  }

  private buildPatientDataSection(
    patientData: PatientHealthData,
    relevantConditions: Array<{ id?: string; name: string }>,
    relevantMedications: PatientHealthData['medications'],
    relevantLabs: PatientHealthData['labs'],
    contextType: 'region' | 'condition' | 'medication' | 'lab'
  ): string {
    const sections: string[] = [];

    sections.push('=== YOUR HEALTH CONTEXT (For Educational Personalization) ===');
    sections.push('NOTE: This information is used only to personalize educational content, not for diagnosis.\n');

    if (relevantConditions.length > 0) {
      sections.push('Relevant Conditions:');
      relevantConditions.forEach(c => {
        sections.push(`  - ${c.name}`);
      });
      sections.push('');
    }

    if (relevantMedications.length > 0) {
      sections.push('Relevant Medications:');
      relevantMedications.forEach(m => {
        let medLine = `  - ${m.name}`;
        if (m.dosage) medLine += ` ${m.dosage}`;
        if (m.frequency) medLine += ` (${m.frequency})`;
        sections.push(medLine);
      });
      sections.push('');
    }

    if (relevantLabs.length > 0) {
      sections.push('Relevant Lab Results:');
      relevantLabs.forEach(l => {
        sections.push(`  - ${l.testName}: ${l.value}${l.unit ? ' ' + l.unit : ''} (${l.status})`);
      });
      sections.push('');
    }

    if (patientData.demographics) {
      const demo = patientData.demographics;
      if (demo.age || demo.sex) {
        sections.push('Demographics:');
        if (demo.age) sections.push(`  - Age: ${demo.age}`);
        if (demo.sex) sections.push(`  - Sex: ${demo.sex}`);
        sections.push('');
      }
    }

    return sections.join('\n');
  }

  private buildMedicationPatientContext(
    patientData: PatientHealthData,
    patientMedication: PatientHealthData['medications'][0] | undefined,
    otherMedications: PatientHealthData['medications'],
    relatedLabs: PatientHealthData['labs']
  ): string {
    const sections: string[] = [];

    sections.push('=== YOUR MEDICATION CONTEXT (For Educational Personalization) ===\n');

    if (patientMedication) {
      sections.push('Your Current Use:');
      let medLine = `  - ${patientMedication.name}`;
      if (patientMedication.dosage) medLine += ` ${patientMedication.dosage}`;
      if (patientMedication.frequency) medLine += ` (${patientMedication.frequency})`;
      if (patientMedication.indication) medLine += ` for ${patientMedication.indication}`;
      sections.push(medLine);
      sections.push('');
    }

    if (otherMedications.length > 0) {
      sections.push('Your Other Medications (for interaction education):');
      otherMedications.slice(0, 5).forEach(m => {
        sections.push(`  - ${m.name}${m.drugClass ? ` (${m.drugClass})` : ''}`);
      });
      sections.push('');
    }

    if (relatedLabs.length > 0) {
      sections.push('Labs That May Be Monitored:');
      relatedLabs.forEach(l => {
        sections.push(`  - ${l.testName}: ${l.value}${l.unit ? ' ' + l.unit : ''} (${l.status})`);
      });
      sections.push('');
    }

    return sections.join('\n');
  }

  private buildLabPatientContext(
    patientData: PatientHealthData,
    labResult: PatientHealthData['labs'][0] | undefined,
    relatedConditions: PatientHealthData['conditions'],
    relatedMedications: PatientHealthData['medications']
  ): string {
    const sections: string[] = [];

    sections.push('=== YOUR LAB CONTEXT (For Educational Personalization) ===\n');

    if (labResult) {
      sections.push('Your Result:');
      sections.push(`  - ${labResult.testName}: ${labResult.value}${labResult.unit ? ' ' + labResult.unit : ''}`);
      sections.push(`  - Status: ${labResult.status}`);
      if (labResult.trend) {
        sections.push(`  - Trend: ${labResult.trend}`);
      }
      sections.push('');
    }

    if (relatedConditions.length > 0) {
      sections.push('Related Conditions:');
      relatedConditions.forEach(c => {
        sections.push(`  - ${c.name}`);
      });
      sections.push('');
    }

    if (relatedMedications.length > 0) {
      sections.push('Medications That May Affect This Test:');
      relatedMedications.forEach(m => {
        sections.push(`  - ${m.name}`);
      });
      sections.push('');
    }

    return sections.join('\n');
  }

  // ============================================================================
  // Private Helper Methods - Topic Generation
  // ============================================================================

  private generateRelatedTopicsForRegion(
    regionId: string,
    patientData: PatientHealthData,
    relevantConditions: PatientHealthData['conditions'],
    relevantMedications: PatientHealthData['medications']
  ): RelatedTopic[] {
    const topics: RelatedTopic[] = [];

    // Add related conditions as topics
    relevantConditions.forEach(c => {
      topics.push({
        topicId: c.id,
        topicName: c.name,
        category: 'condition',
        relevanceReason: `This condition affects the ${this.formatRegionName(regionId).toLowerCase()}`,
        relevanceLevel: 'directly-relevant',
        suggestedComplexity: 3,
      });
    });

    // Add related medications
    relevantMedications.forEach(m => {
      topics.push({
        topicId: m.id,
        topicName: m.name,
        category: 'medication',
        relevanceReason: `This medication affects the ${this.formatRegionName(regionId).toLowerCase()}`,
        relevanceLevel: 'related',
        suggestedComplexity: 2,
      });
    });

    // Add physiology topic
    topics.push({
      topicId: `${regionId}-physiology`,
      topicName: `How the ${this.formatRegionName(regionId)} Works`,
      category: 'physiology',
      relevanceReason: 'Understanding function helps you understand dysfunction',
      relevanceLevel: 'general-interest',
      suggestedComplexity: 2,
    });

    return topics.slice(0, 6); // Limit to 6 suggestions
  }

  private generateRelatedTopicsForCondition(
    conditionId: string,
    patientData: PatientHealthData,
    patientHasCondition: boolean
  ): RelatedTopic[] {
    const topics: RelatedTopic[] = [];
    const conditionName = this.formatConditionName(conditionId);

    // Add anatomy topic
    topics.push({
      topicId: `${conditionId}-anatomy`,
      topicName: `Anatomy Affected by ${conditionName}`,
      category: 'anatomy',
      relevanceReason: 'Understanding the affected body parts helps you understand the condition',
      relevanceLevel: patientHasCondition ? 'directly-relevant' : 'related',
      suggestedComplexity: 2,
    });

    // Add relevant medications
    const relatedMeds = this.findMedicationsForCondition(conditionId, patientData.medications);
    relatedMeds.forEach(m => {
      topics.push({
        topicId: m.id,
        topicName: `Understanding ${m.name}`,
        category: 'medication',
        relevanceReason: `This medication is used to treat ${conditionName}`,
        relevanceLevel: 'directly-relevant',
        suggestedComplexity: 2,
      });
    });

    // Add lifestyle topic
    topics.push({
      topicId: `${conditionId}-lifestyle`,
      topicName: `Lifestyle Considerations for ${conditionName}`,
      category: 'lifestyle',
      relevanceReason: 'Lifestyle modifications can help manage many conditions',
      relevanceLevel: patientHasCondition ? 'directly-relevant' : 'general-interest',
      suggestedComplexity: 2,
    });

    return topics.slice(0, 6);
  }

  private generateRelatedTopicsForMedication(
    medicationId: string,
    patientData: PatientHealthData,
    patientTakesMedication: boolean
  ): RelatedTopic[] {
    const topics: RelatedTopic[] = [];
    const medicationName = this.formatMedicationName(medicationId);

    // Add mechanism topic
    topics.push({
      topicId: `${medicationId}-mechanism`,
      topicName: `How ${medicationName} Works in Your Body`,
      category: 'physiology',
      relevanceReason: 'Understanding the mechanism helps you understand the effects',
      relevanceLevel: patientTakesMedication ? 'directly-relevant' : 'related',
      suggestedComplexity: 3,
    });

    // Add related labs
    const relatedLabs = this.findLabsAffectedByMedication(medicationId, patientData.labs);
    relatedLabs.forEach(l => {
      topics.push({
        topicId: l.id,
        topicName: `Understanding Your ${l.testName}`,
        category: 'lab',
        relevanceReason: `${medicationName} can affect this lab value`,
        relevanceLevel: 'related',
        suggestedComplexity: 2,
      });
    });

    // Add drug class education
    const medication = patientData.medications.find(m => m.id === medicationId);
    if (medication?.drugClass) {
      topics.push({
        topicId: `class-${medication.drugClass}`,
        topicName: `Understanding ${medication.drugClass} Medications`,
        category: 'medication',
        relevanceReason: 'Learning about the drug class helps you understand similar medications',
        relevanceLevel: 'general-interest',
        suggestedComplexity: 3,
      });
    }

    return topics.slice(0, 6);
  }

  private generateRelatedTopicsForLab(
    labId: string,
    patientData: PatientHealthData,
    hasLabResult: boolean
  ): RelatedTopic[] {
    const topics: RelatedTopic[] = [];
    const labName = this.formatLabName(labId);

    // Add anatomy topic
    topics.push({
      topicId: `${labId}-anatomy`,
      topicName: `The Organs That Affect ${labName}`,
      category: 'anatomy',
      relevanceReason: 'Understanding which organs affect this lab helps interpret results',
      relevanceLevel: hasLabResult ? 'directly-relevant' : 'related',
      suggestedComplexity: 2,
    });

    // Add related conditions
    const relatedConditions = this.findConditionsRelatedToLab(labId, patientData.conditions);
    relatedConditions.forEach(c => {
      topics.push({
        topicId: c.id,
        topicName: c.name,
        category: 'condition',
        relevanceReason: `${labName} is often monitored for this condition`,
        relevanceLevel: 'directly-relevant',
        suggestedComplexity: 3,
      });
    });

    // Add related medications
    const relatedMeds = this.findMedicationsAffectingLab(labId, patientData.medications);
    relatedMeds.forEach(m => {
      topics.push({
        topicId: m.id,
        topicName: m.name,
        category: 'medication',
        relevanceReason: `This medication can affect ${labName} levels`,
        relevanceLevel: 'related',
        suggestedComplexity: 2,
      });
    });

    return topics.slice(0, 6);
  }

  // ============================================================================
  // Private Helper Methods - Insight Generation
  // ============================================================================

  private generatePersonalInsightsForRegion(
    regionName: string,
    conditions: PatientHealthData['conditions'],
    medications: PatientHealthData['medications'],
    labs: PatientHealthData['labs'],
    symptoms: PatientHealthData['symptoms']
  ): string[] {
    const insights: string[] = [];

    if (conditions.length > 0) {
      insights.push(
        `Your ${conditions.map(c => c.name).join(' and ')} ${conditions.length > 1 ? 'involve' : 'involves'} this area. Learning the anatomy helps you understand what your healthcare team discusses with you.`
      );
    }

    if (medications.length > 0) {
      insights.push(
        `Some of your medications work in or affect the ${regionName.toLowerCase()}. Understanding this anatomy helps you understand how they work.`
      );
    }

    if (labs.length > 0 && labs.some(l => l.status !== 'normal')) {
      insights.push(
        `Your lab results indicate this area may need attention. Ask your healthcare provider about what these results mean for you.`
      );
    }

    if (symptoms.length > 0) {
      insights.push(
        `You have reported symptoms in this area. Understanding the anatomy can help you describe symptoms more precisely to your healthcare provider.`
      );
    }

    if (insights.length === 0) {
      insights.push(
        `Understanding the ${regionName.toLowerCase()} gives you foundational knowledge about your body that can help in future health conversations.`
      );
    }

    return insights;
  }

  private generatePersonalInsightsForCondition(
    conditionName: string,
    patientHasCondition: boolean,
    medications: PatientHealthData['medications'],
    labs: PatientHealthData['labs'],
    symptoms: PatientHealthData['symptoms']
  ): string[] {
    const insights: string[] = [];

    if (patientHasCondition) {
      insights.push(
        `You have ${conditionName} in your health profile. Understanding this condition helps you be an active partner in your care.`
      );

      if (medications.length > 0) {
        insights.push(
          `You are taking ${medications.length} ${medications.length > 1 ? 'medications' : 'medication'} that ${medications.length > 1 ? 'help' : 'helps'} manage this condition. Learning how ${conditionName} works helps you understand why these medications are prescribed.`
        );
      }

      if (labs.length > 0) {
        const abnormalLabs = labs.filter(l => l.status !== 'normal');
        if (abnormalLabs.length > 0) {
          insights.push(
            `Some of your lab results are being monitored for ${conditionName}. Understanding these labs helps you track your progress.`
          );
        }
      }

      if (symptoms.length > 0) {
        insights.push(
          `Some of your symptoms may be related to ${conditionName}. Understanding the connection can help you communicate with your healthcare team.`
        );
      }
    } else {
      insights.push(
        `Learning about ${conditionName} builds your health literacy, whether for yourself or to support someone who has this condition.`
      );
    }

    return insights;
  }

  private generatePersonalInsightsForMedication(
    medicationName: string,
    patientTakesMedication: boolean,
    patientMedication: PatientHealthData['medications'][0] | undefined,
    relatedLabs: PatientHealthData['labs'],
    otherMedications: PatientHealthData['medications']
  ): string[] {
    const insights: string[] = [];

    if (patientTakesMedication && patientMedication) {
      insights.push(
        `You are currently taking ${medicationName}. Understanding how it works helps you take it effectively and know what to expect.`
      );

      if (patientMedication.indication) {
        insights.push(
          `This medication was prescribed for ${patientMedication.indication}. Learning its mechanism helps you understand why it was chosen for you.`
        );
      }

      if (relatedLabs.length > 0) {
        insights.push(
          `Some of your lab tests may be monitored while you take ${medicationName}. Understanding these labs helps you track your medication's effects.`
        );
      }

      if (otherMedications.length > 0) {
        insights.push(
          `You take ${otherMedications.length} other ${otherMedications.length > 1 ? 'medications' : 'medication'}. Learning about drug classes and interactions helps you understand your full medication picture.`
        );
      }
    } else {
      insights.push(
        `Understanding ${medicationName} helps you learn about this medication class, which may be relevant for future health decisions.`
      );
    }

    return insights;
  }

  private generatePersonalInsightsForLab(
    labName: string,
    labResult: PatientHealthData['labs'][0] | undefined,
    relatedConditions: PatientHealthData['conditions'],
    relatedMedications: PatientHealthData['medications']
  ): string[] {
    const insights: string[] = [];

    if (labResult) {
      insights.push(
        `Your ${labName} result is ${labResult.value}${labResult.unit ? ' ' + labResult.unit : ''}, which is ${labResult.status}. Understanding what this measures helps you interpret your results.`
      );

      if (labResult.trend) {
        insights.push(
          `Your ${labName} has been ${labResult.trend}. Understanding trends helps you see patterns in your health over time.`
        );
      }

      if (relatedConditions.length > 0) {
        insights.push(
          `This test is often monitored for ${relatedConditions.map(c => c.name).join(' and ')}. Knowing this connection helps you understand why it is checked.`
        );
      }

      if (relatedMedications.length > 0) {
        insights.push(
          `${relatedMedications.map(m => m.name).join(' and ')} can affect ${labName} levels. This is why this test may be monitored while you take these medications.`
        );
      }
    } else {
      insights.push(
        `Understanding ${labName} helps you interpret this common lab test when you encounter it in your health records.`
      );
    }

    return insights;
  }

  // ============================================================================
  // Private Helper Methods - Learning Objectives
  // ============================================================================

  private generateLearningObjectivesForRegion(
    regionName: string,
    complexity: ComplexityLevel,
    hasRelatedConditions: boolean
  ): string[] {
    const objectives: string[] = [
      `Identify the location of the ${regionName.toLowerCase()} in the body`,
      `Describe the basic structure of the ${regionName.toLowerCase()}`,
    ];

    if (complexity >= 2) {
      objectives.push(`Explain the main functions of the ${regionName.toLowerCase()}`);
    }

    if (complexity >= 3) {
      objectives.push(`Understand how the ${regionName.toLowerCase()} interacts with other body systems`);
    }

    if (complexity >= 4) {
      objectives.push(`Describe the cellular and tissue composition of the ${regionName.toLowerCase()}`);
    }

    if (hasRelatedConditions) {
      objectives.push(`Connect your understanding of the ${regionName.toLowerCase()} to your health conditions`);
    }

    objectives.push(`Formulate informed questions to ask your healthcare provider about the ${regionName.toLowerCase()}`);

    return objectives;
  }

  private generateLearningObjectivesForCondition(
    conditionName: string,
    complexity: ComplexityLevel,
    patientHasCondition: boolean
  ): string[] {
    const objectives: string[] = [
      `Explain what ${conditionName} is in simple terms`,
      `Identify the body systems affected by ${conditionName}`,
    ];

    if (complexity >= 2) {
      objectives.push(`Describe how ${conditionName} develops and progresses`);
    }

    if (complexity >= 3) {
      objectives.push(`Understand the underlying mechanisms (pathophysiology) of ${conditionName}`);
    }

    if (complexity >= 4) {
      objectives.push(`Explain the cellular and molecular changes in ${conditionName}`);
    }

    if (patientHasCondition) {
      objectives.push(`Connect your personal experience with ${conditionName} to what you have learned`);
      objectives.push(`Prepare informed questions for your next healthcare appointment`);
    }

    objectives.push(`Understand the general treatment approaches for ${conditionName}`);

    return objectives;
  }

  private generateLearningObjectivesForMedication(
    medicationName: string,
    complexity: ComplexityLevel,
    patientTakesMedication: boolean
  ): string[] {
    const objectives: string[] = [
      `Explain what ${medicationName} is used for`,
      `Describe how ${medicationName} works in simple terms`,
    ];

    if (complexity >= 2) {
      objectives.push(`Understand the mechanism of action of ${medicationName}`);
    }

    if (complexity >= 3) {
      objectives.push(`Explain how ${medicationName} interacts with body systems`);
      objectives.push(`Identify common side effects and why they occur`);
    }

    if (complexity >= 4) {
      objectives.push(`Describe the pharmacokinetics (absorption, distribution, metabolism) of ${medicationName}`);
    }

    if (patientTakesMedication) {
      objectives.push(`Understand why ${medicationName} was prescribed for you`);
      objectives.push(`Know what to monitor and when to contact your healthcare provider`);
    }

    return objectives;
  }

  private generateLearningObjectivesForLab(
    labName: string,
    complexity: ComplexityLevel,
    hasLabResult: boolean
  ): string[] {
    const objectives: string[] = [
      `Explain what ${labName} measures`,
      `Understand what normal reference ranges mean`,
    ];

    if (complexity >= 2) {
      objectives.push(`Identify factors that can affect ${labName} levels`);
    }

    if (complexity >= 3) {
      objectives.push(`Understand the biological significance of ${labName}`);
      objectives.push(`Connect ${labName} to related organ function`);
    }

    if (complexity >= 4) {
      objectives.push(`Explain the physiological processes that determine ${labName} levels`);
    }

    if (hasLabResult) {
      objectives.push(`Interpret your ${labName} result in educational context`);
      objectives.push(`Prepare questions to ask your healthcare provider about your results`);
    }

    return objectives;
  }

  // ============================================================================
  // Private Helper Methods - Prompt Assembly
  // ============================================================================

  private assembleRegionPrompt(
    regionName: string,
    complexity: ComplexityLevel,
    patientDataContext: string,
    relevanceExplanation: string,
    learningObjectives: string[],
    options: ContextBuildOptions,
    enrichment?: KnowledgeEnrichment
  ): string {
    const enrichmentSection = enrichment ? this.formatEnrichmentSection(enrichment) : '';

    return `You are an expert medical educator helping a patient understand the ${regionName}.

=== EDUCATIONAL CONTEXT ===

WHY THIS IS RELEVANT TO THIS PATIENT:
${relevanceExplanation}

${patientDataContext}
${enrichmentSection}
=== LEARNING OBJECTIVES ===
${learningObjectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

=== COMPLEXITY LEVEL: ${complexity}/5 ===
${COMPLEXITY_DESCRIPTIONS[complexity]}

=== EDUCATIONAL GUIDELINES ===

1. STRUCTURE YOUR EXPLANATION:
   - Start with location and basic structure
   - Explain the main functions
   - Connect to the patient's specific health context when relevant
   - Build understanding progressively
   - Use the medical knowledge graph facts above to ground your explanation in verified medical relationships

2. PERSONALIZATION (when relevant):
   - Reference the patient's conditions to explain why this anatomy matters to them
   - Explain how their medications might affect this region
   - Connect to their lab results if applicable

3. WHAT THIS MEANS FOR YOU SECTION:
   - Include practical takeaways the patient can use
   - Suggest questions they might ask their healthcare provider
   - Connect learning to their health journey

4. FRAMING:
   - Always maintain educational, not diagnostic, framing
   - Use "your healthcare provider can tell you..." instead of suggesting diagnoses
   - Empower with knowledge, not anxiety
   - Define medical terms using the glossary definitions provided above when available

${EDUCATIONAL_DISCLAIMER}

Now, please explain the ${regionName} at complexity level ${complexity}, personalized for this patient's context.`;
  }

  private assembleConditionPrompt(
    conditionName: string,
    complexity: ComplexityLevel,
    patientHasCondition: boolean,
    patientDataContext: string,
    relevanceExplanation: string,
    learningObjectives: string[],
    options: ContextBuildOptions,
    enrichment?: KnowledgeEnrichment
  ): string {
    const personalizedNote = patientHasCondition
      ? `The patient has ${conditionName} in their health profile. Frame this as helping them understand their own condition.`
      : `The patient is learning about ${conditionName} for general knowledge. Frame this as educational information.`;

    const enrichmentSection = enrichment ? this.formatEnrichmentSection(enrichment) : '';

    return `You are an expert medical educator helping a patient understand ${conditionName}.

=== EDUCATIONAL CONTEXT ===

${personalizedNote}

WHY THIS IS RELEVANT TO THIS PATIENT:
${relevanceExplanation}

${patientDataContext}
${enrichmentSection}
=== LEARNING OBJECTIVES ===
${learningObjectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

=== COMPLEXITY LEVEL: ${complexity}/5 ===
${COMPLEXITY_DESCRIPTIONS[complexity]}

=== EDUCATIONAL GUIDELINES ===

1. STRUCTURE YOUR EXPLANATION:
   - What is this condition? (definition and overview)
   - What happens in the body? (pathophysiology appropriate to complexity level)
   - How does it manifest? (signs and symptoms -- use the knowledge graph symptoms above as reference)
   - How is it managed? (general treatment approaches - educational only, reference medications from the knowledge graph)

2. PERSONALIZATION:
   - If patient has this condition: Connect to their specific medications and labs
   - Explain what they might expect and what to monitor
   - Prepare them for conversations with their healthcare team

3. WHAT THIS MEANS FOR YOU SECTION:
   - Practical takeaways for understanding their health
   - Questions to ask their healthcare provider
   - How to be an informed partner in their care

4. CRITICAL BOUNDARIES:
   - NEVER diagnose or suggest the patient has undiagnosed conditions
   - NEVER recommend specific treatments or medication changes
   - Always defer to their healthcare provider for personalized medical advice
   - Define medical terms using the glossary definitions provided above when available

${EDUCATIONAL_DISCLAIMER}

Now, please explain ${conditionName} at complexity level ${complexity}, personalized for this patient's context.`;
  }

  private assembleMedicationPrompt(
    medicationName: string,
    complexity: ComplexityLevel,
    patientTakesMedication: boolean,
    patientDataContext: string,
    relevanceExplanation: string,
    learningObjectives: string[],
    otherMedications: PatientHealthData['medications'],
    options: ContextBuildOptions,
    enrichment?: KnowledgeEnrichment
  ): string {
    const personalizedNote = patientTakesMedication
      ? `The patient currently takes ${medicationName}. Help them understand their medication.`
      : `The patient is learning about ${medicationName}. Provide educational information.`;

    const interactionNote = otherMedications.length > 0
      ? `\nThe patient also takes: ${otherMedications.map(m => m.name).join(', ')}. If there are common educational points about drug interactions with ${medicationName}, include them in an educational context.`
      : '';

    const enrichmentSection = enrichment ? this.formatEnrichmentSection(enrichment) : '';

    return `You are an expert pharmacology educator helping a patient understand ${medicationName}.

=== EDUCATIONAL CONTEXT ===

${personalizedNote}${interactionNote}

WHY THIS IS RELEVANT TO THIS PATIENT:
${relevanceExplanation}

${patientDataContext}
${enrichmentSection}
=== LEARNING OBJECTIVES ===
${learningObjectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

=== COMPLEXITY LEVEL: ${complexity}/5 ===
${COMPLEXITY_DESCRIPTIONS[complexity]}

=== EDUCATIONAL GUIDELINES ===

1. STRUCTURE YOUR EXPLANATION:
   - What is this medication and what is it used for? (reference conditions from the knowledge graph above)
   - How does it work? (mechanism of action appropriate to complexity)
   - What should you expect? (effects, timeline)
   - What should you be aware of? (common considerations - educational)

2. PERSONALIZATION:
   - If patient takes this: Relate to their specific use case
   - Connect to their conditions if applicable
   - Explain relevant lab monitoring in educational terms

3. WHAT THIS MEANS FOR YOU SECTION:
   - Practical understanding for taking medication effectively
   - What to observe and when to contact healthcare provider
   - Questions to ask about their medication

4. CRITICAL BOUNDARIES:
   - NEVER recommend starting, stopping, or changing medications
   - NEVER provide dosing advice
   - Frame all side effect information as educational, not predictive
   - Always defer to healthcare provider for medication decisions
   - Define medical terms using the glossary definitions provided above when available

${EDUCATIONAL_DISCLAIMER}

Now, please explain ${medicationName} at complexity level ${complexity}, personalized for this patient's context.`;
  }

  private assembleLabPrompt(
    labName: string,
    complexity: ComplexityLevel,
    labResult: PatientHealthData['labs'][0] | undefined,
    patientDataContext: string,
    relevanceExplanation: string,
    learningObjectives: string[],
    relatedConditions: PatientHealthData['conditions'],
    relatedMedications: PatientHealthData['medications'],
    options: ContextBuildOptions,
    enrichment?: KnowledgeEnrichment
  ): string {
    const resultNote = labResult
      ? `The patient has a ${labName} result: ${labResult.value}${labResult.unit ? ' ' + labResult.unit : ''} (${labResult.status}). Help them understand what this test measures - not diagnose based on the result.`
      : `The patient is learning about the ${labName} test. Provide educational information.`;

    const enrichmentSection = enrichment ? this.formatEnrichmentSection(enrichment) : '';

    return `You are an expert clinical laboratory educator helping a patient understand ${labName}.

=== EDUCATIONAL CONTEXT ===

${resultNote}

WHY THIS IS RELEVANT TO THIS PATIENT:
${relevanceExplanation}

${patientDataContext}
${enrichmentSection}
=== LEARNING OBJECTIVES ===
${learningObjectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

=== COMPLEXITY LEVEL: ${complexity}/5 ===
${COMPLEXITY_DESCRIPTIONS[complexity]}

=== EDUCATIONAL GUIDELINES ===

1. STRUCTURE YOUR EXPLANATION:
   - What does this test measure? (biological significance)
   - What do the numbers mean? (reference ranges, units)
   - What can affect this test? (factors, variations -- use knowledge graph relationships above)
   - Why is this test ordered? (clinical context - educational, reference related conditions from the knowledge graph)

2. PERSONALIZATION:
   - If patient has a result: Help them understand what the test measures, not diagnose
   - Connect to their conditions if this test is relevant to them
   - Explain if their medications might affect this test

3. WHAT THIS MEANS FOR YOU SECTION:
   - How to interpret lab results in context
   - What trends might indicate
   - Questions to ask healthcare provider about results

4. CRITICAL BOUNDARIES:
   - NEVER diagnose based on lab values
   - NEVER suggest the result means they have a specific condition
   - Always emphasize that interpretation requires clinical context
   - Defer to healthcare provider for result interpretation
   - Define medical terms using the glossary definitions provided above when available

${EDUCATIONAL_DISCLAIMER}

Now, please explain ${labName} at complexity level ${complexity}, personalized for this patient's context.`;
  }

  // ============================================================================
  // Private Helper Methods - Education Modules
  // ============================================================================

  private findRelevantEducationModules(
    primaryDomain: 'anatomy' | 'physiology' | 'pathology' | 'pharmacology' | 'lab-interpretation' | 'clinical-reasoning',
    topicId: string,
    complexity: ComplexityLevel
  ): EducationModuleReference[] {
    const modules: EducationModuleReference[] = [];

    // Primary domain module
    modules.push({
      moduleId: `${primaryDomain}-${topicId}`,
      moduleName: `${this.capitalize(primaryDomain)}: ${this.formatTopicName(topicId)}`,
      domain: primaryDomain,
      relevance: 'Core educational content for this topic',
      complexity,
    });

    // Add related domain modules based on primary domain
    const relatedDomains = this.getRelatedDomains(primaryDomain);
    relatedDomains.forEach(domain => {
      modules.push({
        moduleId: `${domain}-${topicId}`,
        moduleName: `${this.capitalize(domain)}: ${this.formatTopicName(topicId)}`,
        domain,
        relevance: `Related ${domain} content`,
        complexity: Math.max(1, complexity - 1) as ComplexityLevel,
      });
    });

    return modules;
  }

  private getRelatedDomains(
    primaryDomain: 'anatomy' | 'physiology' | 'pathology' | 'pharmacology' | 'lab-interpretation' | 'clinical-reasoning'
  ): Array<'anatomy' | 'physiology' | 'pathology' | 'pharmacology' | 'lab-interpretation' | 'clinical-reasoning'> {
    const domainRelations: Record<string, Array<'anatomy' | 'physiology' | 'pathology' | 'pharmacology' | 'lab-interpretation' | 'clinical-reasoning'>> = {
      'anatomy': ['physiology', 'pathology'],
      'physiology': ['anatomy', 'pathology'],
      'pathology': ['anatomy', 'physiology', 'pharmacology'],
      'pharmacology': ['physiology', 'pathology', 'lab-interpretation'],
      'lab-interpretation': ['physiology', 'pathology', 'clinical-reasoning'],
      'clinical-reasoning': ['pathology', 'lab-interpretation'],
    };

    return domainRelations[primaryDomain] || [];
  }

  // ============================================================================
  // Private Helper Methods - Formatting
  // ============================================================================

  private formatRegionName(regionId: string): string {
    return regionId
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private formatConditionName(conditionId: string): string {
    return this.formatRegionName(conditionId);
  }

  private formatMedicationName(medicationId: string): string {
    return this.formatRegionName(medicationId);
  }

  private formatLabName(labId: string): string {
    return this.formatRegionName(labId);
  }

  private formatSystemName(system: string): string {
    return this.formatRegionName(system);
  }

  private formatTopicName(topicId: string): string {
    return this.formatRegionName(topicId);
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private generateLearningPathTitle(patientData: PatientHealthData): string {
    if (patientData.conditions.length > 0) {
      const primaryCondition = patientData.conditions.find(c => c.status === 'active') || patientData.conditions[0];
      return `Your Health Journey: Understanding ${primaryCondition.name}`;
    }

    if (patientData.medications.length > 0) {
      return 'Your Health Journey: Understanding Your Medications';
    }

    return 'Your Health Journey: Building Health Literacy';
  }

  private generateLearningPathDescription(patientData: PatientHealthData): string {
    const elements: string[] = [];

    if (patientData.conditions.length > 0) {
      elements.push('your health conditions');
    }

    if (patientData.medications.length > 0) {
      elements.push('your medications');
    }

    if (patientData.labs.length > 0) {
      elements.push('your lab results');
    }

    if (elements.length === 0) {
      return 'A personalized learning path to help you understand your body and become an informed partner in your healthcare.';
    }

    return `A personalized learning path designed to help you understand ${elements.join(', ')}, and become an informed partner in your healthcare journey.`;
  }
}

// ============================================================================
// Exports
// ============================================================================

export default EducationalContextBuilder;

/**
 * Create a new EducationalContextBuilder instance.
 *
 * @param contentService - Optional ContentService instance. If omitted, uses
 *   the global singleton from getContentService().
 */
export function createEducationalContextBuilder(
  contentService?: ContentService,
): EducationalContextBuilder {
  return new EducationalContextBuilder(contentService);
}

/**
 * Convert DashboardData to PatientHealthData format
 */
export function dashboardToPatientData(dashboard: DashboardData): PatientHealthData {
  return {
    conditions: dashboard.activeConditions.map((c, i) => ({
      id: `condition-${i}`,
      name: c.name,
      status: c.status as 'active' | 'resolved' | 'chronic',
      severity: c.severity as 'mild' | 'moderate' | 'severe' | undefined,
    })),
    medications: dashboard.currentMedications.map((m, i) => ({
      id: `medication-${i}`,
      name: m.name,
      dosage: m.dosage,
      frequency: m.frequency,
    })),
    labs: dashboard.recentLabs.map((l, i) => ({
      id: `lab-${i}`,
      testName: l.testName,
      value: l.value,
      unit: l.unit,
      status: (l.status === 'elevated' ? 'high' : l.status === 'abnormal' ? 'high' : l.status || 'normal') as 'low' | 'normal' | 'high' | 'critical',
      trend: l.trend as 'increasing' | 'stable' | 'decreasing' | undefined,
    })),
    symptoms: dashboard.recentSymptoms.map(s => ({
      description: s.description,
      severity: s.severity,
      location: s.location,
    })),
    vitals: dashboard.vitalsSummary ? {
      restingHeartRate: dashboard.vitalsSummary.restingHeartRate,
      hrv: dashboard.vitalsSummary.hrv,
      sleepHours: dashboard.vitalsSummary.sleepHours,
    } : undefined,
  };
}

/**
 * Convert UserHealthProfile to PatientHealthData format
 */
export function profileToPatientData(profile: UserHealthProfile): PatientHealthData {
  return {
    conditions: profile.conditions.map(c => ({
      id: c.conditionId,
      name: c.name,
      status: c.status,
      severity: c.severity,
      relatedSystems: c.relatedSystems,
    })),
    medications: profile.medications.map(m => ({
      id: m.medicationId,
      name: m.name,
      genericName: m.genericName,
      dosage: m.dose,
      frequency: m.frequency,
      indication: m.indication,
      drugClass: m.drugClass,
    })),
    labs: profile.labResults.map(l => ({
      id: l.labId,
      testName: l.testName,
      value: l.value,
      unit: l.unit,
      status: l.status,
      trend: l.trend,
      relatedOrgans: l.relatedOrgans,
    })),
    symptoms: [], // UserHealthProfile doesn't include symptoms
    demographics: {
      age: profile.demographics.age,
      sex: profile.demographics.sex,
    },
  };
}

/**
 * Build a system prompt for the anatomy chat view, combining the structured
 * AnatomyChatContext (from the 3D body model) with optional patient health
 * data. This is a synchronous convenience wrapper -- it does not call
 * ContentService async methods (the caller in ChatView already has the
 * pre-resolved data from the anatomy screen).
 *
 * For richer context that includes knowledge graph traversal, glossary
 * definitions, and level-appropriate explanations, use the async
 * `buildRegionContext` method on `EducationalContextBuilder` instead.
 */
export function buildAnatomyChatSystemPrompt(
  ctx: AnatomyChatContext,
  patientData: PatientHealthData | null,
): string {
  const complexity = ctx.complexityLevel ?? 3;

  const sections: string[] = [];

  sections.push(
    `You are an expert medical educator helping a patient understand the ${ctx.regionName} region of the body.`,
  );

  // Complexity / explanation level
  sections.push(`\n=== COMPLEXITY LEVEL: ${complexity}/5 ===`);
  sections.push(COMPLEXITY_DESCRIPTIONS[complexity as ComplexityLevel]);

  // Anatomy structures
  if (ctx.anatomyStructures.length > 0) {
    sections.push(`\n=== ANATOMY STRUCTURES ===`);
    sections.push(ctx.anatomyStructures.join(', '));
  }

  // Body systems
  if (ctx.bodySystems.length > 0) {
    sections.push(`\n=== BODY SYSTEMS ===`);
    sections.push(ctx.bodySystems.join(', '));
  }

  // Related conditions
  if (ctx.conditions.length > 0) {
    sections.push(`\n=== RELATED CONDITIONS ===`);
    sections.push(ctx.conditions.join(', '));
  }

  // Related symptoms
  if (ctx.symptoms.length > 0) {
    sections.push(`\n=== RELATED SYMPTOMS ===`);
    sections.push(ctx.symptoms.join(', '));
  }

  // Relevant specialties
  if (ctx.specialties.length > 0) {
    sections.push(`\n=== RELEVANT SPECIALTIES ===`);
    sections.push(ctx.specialties.join(', '));
  }

  // Patient health context (if available)
  if (patientData) {
    const healthParts: string[] = [];
    healthParts.push('\n=== PATIENT HEALTH CONTEXT (For Educational Personalization) ===');
    healthParts.push('NOTE: Used only to personalize educational content, not for diagnosis.');

    if (patientData.conditions.length > 0) {
      healthParts.push(`\nActive Conditions: ${patientData.conditions.map(c => c.name).join(', ')}`);
    }
    if (patientData.medications.length > 0) {
      healthParts.push(`Current Medications: ${patientData.medications.map(m => m.name).join(', ')}`);
    }
    if (patientData.labs.length > 0) {
      const abnormal = patientData.labs.filter(l => l.status !== 'normal');
      if (abnormal.length > 0) {
        healthParts.push(`Abnormal Labs: ${abnormal.map(l => `${l.testName} (${l.status})`).join(', ')}`);
      }
    }

    sections.push(healthParts.join('\n'));
  }

  // Educational guidelines
  sections.push(`\n=== EDUCATIONAL GUIDELINES ===
1. Focus on the ${ctx.regionName} -- explain its anatomy, function, and clinical relevance.
2. Use the related conditions, symptoms, and specialties above to provide grounded medical facts.
3. Match complexity level ${complexity}/5: ${COMPLEXITY_DESCRIPTIONS[complexity as ComplexityLevel]}.
4. Frame everything as educational -- NEVER diagnose or recommend treatments.
5. Suggest questions the patient could ask their healthcare provider.
6. ${EDUCATIONAL_FRAMING.region}`);

  sections.push(`\n${EDUCATIONAL_DISCLAIMER}`);

  return sections.join('\n');
}
