/**
 * usePathologyContent Hook
 *
 * Fetches and manages pathology content for a specific anatomical region
 * at the requested complexity level.
 */

import { useState, useEffect, useMemo } from 'react';

// ============================================================================
// Types
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export type ConditionCategory =
  | 'inflammatory'
  | 'neoplastic'
  | 'degenerative'
  | 'infectious'
  | 'autoimmune'
  | 'vascular'
  | 'metabolic'
  | 'congenital'
  | 'traumatic'
  | 'functional'
  | 'idiopathic';

export type Severity = 'mild' | 'moderate' | 'severe' | 'critical';

export type Prevalence = 'very-common' | 'common' | 'uncommon' | 'rare' | 'very-rare';

export interface ConditionContent {
  definition: string;
  keyFacts?: string[];
  causes?: string[];
  riskFactors?: string[];
  pathophysiology: string;
  molecularMechanisms?: string;
  clinicalPresentation: string;
  symptoms?: string[];
  signs?: string[];
  diagnosis: string;
  diagnosticTests?: string[];
  differentialDiagnosis?: string[];
  treatment: string;
  medications?: string[];
  prognosis?: string;
}

export interface PathologyCondition {
  id: string;
  name: string;
  category: ConditionCategory;
  severity: Severity;
  prevalence: Prevalence;
  isEmergency: boolean;
  icdCodes?: string[];
  affectedRegions: string[];
  content: Record<ComplexityLevel, ConditionContent>;
}

export interface RelatedCondition {
  id: string;
  name: string;
  relationship: string;
}

export interface UsePathologyContentResult {
  conditions: PathologyCondition[] | null;
  loading: boolean;
  error: string | null;
  relatedConditions: RelatedCondition[] | null;
  groupedByCategory: Record<ConditionCategory, PathologyCondition[]>;
}

// ============================================================================
// Sample Data Generator
// ============================================================================

function generateSampleConditions(regionId: string, regionName: string): PathologyCondition[] {
  const conditions: PathologyCondition[] = [];

  // Determine conditions based on region
  const lowerRegion = regionId.toLowerCase();

  if (lowerRegion.includes('heart') || lowerRegion.includes('cardiac')) {
    conditions.push(
      createCondition('coronary-artery-disease', 'Coronary Artery Disease', 'vascular', 'severe', 'common', false, regionId),
      createCondition('myocardial-infarction', 'Myocardial Infarction', 'vascular', 'critical', 'common', true, regionId),
      createCondition('heart-failure', 'Heart Failure', 'functional', 'severe', 'common', false, regionId),
      createCondition('atrial-fibrillation', 'Atrial Fibrillation', 'functional', 'moderate', 'common', false, regionId),
      createCondition('pericarditis', 'Pericarditis', 'inflammatory', 'moderate', 'uncommon', false, regionId),
      createCondition('endocarditis', 'Infective Endocarditis', 'infectious', 'severe', 'rare', true, regionId),
      createCondition('cardiomyopathy', 'Cardiomyopathy', 'degenerative', 'severe', 'uncommon', false, regionId),
    );
  } else if (lowerRegion.includes('lung') || lowerRegion.includes('pulmonary') || lowerRegion.includes('respiratory')) {
    conditions.push(
      createCondition('pneumonia', 'Pneumonia', 'infectious', 'moderate', 'common', false, regionId),
      createCondition('copd', 'Chronic Obstructive Pulmonary Disease', 'degenerative', 'moderate', 'common', false, regionId),
      createCondition('asthma', 'Asthma', 'inflammatory', 'moderate', 'very-common', false, regionId),
      createCondition('lung-cancer', 'Lung Cancer', 'neoplastic', 'critical', 'common', false, regionId),
      createCondition('pulmonary-embolism', 'Pulmonary Embolism', 'vascular', 'critical', 'uncommon', true, regionId),
      createCondition('pulmonary-fibrosis', 'Pulmonary Fibrosis', 'degenerative', 'severe', 'rare', false, regionId),
      createCondition('tuberculosis', 'Tuberculosis', 'infectious', 'severe', 'uncommon', false, regionId),
    );
  } else if (lowerRegion.includes('brain') || lowerRegion.includes('cerebral') || lowerRegion.includes('neuro')) {
    conditions.push(
      createCondition('stroke', 'Stroke', 'vascular', 'critical', 'common', true, regionId),
      createCondition('alzheimers', "Alzheimer's Disease", 'degenerative', 'severe', 'common', false, regionId),
      createCondition('parkinsons', "Parkinson's Disease", 'degenerative', 'moderate', 'uncommon', false, regionId),
      createCondition('meningitis', 'Meningitis', 'infectious', 'critical', 'rare', true, regionId),
      createCondition('brain-tumor', 'Brain Tumor', 'neoplastic', 'severe', 'rare', false, regionId),
      createCondition('multiple-sclerosis', 'Multiple Sclerosis', 'autoimmune', 'moderate', 'uncommon', false, regionId),
      createCondition('epilepsy', 'Epilepsy', 'functional', 'moderate', 'common', false, regionId),
    );
  } else if (lowerRegion.includes('liver') || lowerRegion.includes('hepatic')) {
    conditions.push(
      createCondition('hepatitis', 'Hepatitis', 'infectious', 'moderate', 'common', false, regionId),
      createCondition('cirrhosis', 'Cirrhosis', 'degenerative', 'severe', 'uncommon', false, regionId),
      createCondition('liver-cancer', 'Hepatocellular Carcinoma', 'neoplastic', 'critical', 'uncommon', false, regionId),
      createCondition('fatty-liver', 'Non-Alcoholic Fatty Liver Disease', 'metabolic', 'mild', 'very-common', false, regionId),
      createCondition('liver-failure', 'Acute Liver Failure', 'functional', 'critical', 'rare', true, regionId),
    );
  } else if (lowerRegion.includes('kidney') || lowerRegion.includes('renal')) {
    conditions.push(
      createCondition('chronic-kidney-disease', 'Chronic Kidney Disease', 'degenerative', 'severe', 'common', false, regionId),
      createCondition('acute-kidney-injury', 'Acute Kidney Injury', 'functional', 'severe', 'common', true, regionId),
      createCondition('kidney-stones', 'Nephrolithiasis', 'metabolic', 'moderate', 'common', false, regionId),
      createCondition('glomerulonephritis', 'Glomerulonephritis', 'inflammatory', 'moderate', 'uncommon', false, regionId),
      createCondition('polycystic-kidney', 'Polycystic Kidney Disease', 'congenital', 'moderate', 'rare', false, regionId),
      createCondition('renal-cell-carcinoma', 'Renal Cell Carcinoma', 'neoplastic', 'severe', 'uncommon', false, regionId),
    );
  } else {
    // Generic conditions for any region
    conditions.push(
      createCondition('inflammation-generic', 'Inflammatory Condition', 'inflammatory', 'moderate', 'common', false, regionId),
      createCondition('infection-generic', 'Infection', 'infectious', 'moderate', 'common', false, regionId),
      createCondition('tumor-generic', 'Neoplasm', 'neoplastic', 'severe', 'uncommon', false, regionId),
      createCondition('trauma-generic', 'Traumatic Injury', 'traumatic', 'moderate', 'common', false, regionId),
    );
  }

  return conditions;
}

function createCondition(
  id: string,
  name: string,
  category: ConditionCategory,
  severity: Severity,
  prevalence: Prevalence,
  isEmergency: boolean,
  regionId: string
): PathologyCondition {
  return {
    id,
    name,
    category,
    severity,
    prevalence,
    isEmergency,
    affectedRegions: [regionId],
    content: {
      1: generateLevel1Content(name, category),
      2: generateLevel2Content(name, category),
      3: generateLevel3Content(name, category),
      4: generateLevel4Content(name, category),
      5: generateLevel5Content(name, category),
    },
  };
}

function generateLevel1Content(name: string, category: ConditionCategory): ConditionContent {
  return {
    definition: `${name} is a health problem that affects your body. Think of it like when something goes wrong with a machine - parts don't work the way they should.`,
    keyFacts: [
      'This is a condition doctors see regularly',
      'It can usually be treated with medicine or other care',
      'Early detection helps with better outcomes',
    ],
    causes: ['Sometimes we know what causes it', 'Other times our body just develops it'],
    riskFactors: ['Age', 'Family history', 'Lifestyle choices'],
    pathophysiology: `When you have ${name}, something in your body stops working correctly. Imagine a car that needs a tune-up - the parts are still there but they're not running smoothly.`,
    clinicalPresentation: 'You might feel unwell, tired, or have specific symptoms depending on the condition.',
    symptoms: ['Feeling unwell', 'Tiredness', 'Discomfort'],
    diagnosis: 'Doctors use tests and examinations to figure out if you have this condition.',
    treatment: 'Treatment depends on how serious it is. You might need medicine, lifestyle changes, or other care.',
  };
}

function generateLevel2Content(name: string, category: ConditionCategory): ConditionContent {
  return {
    definition: `${name} is a ${category} condition that affects normal body function. It occurs when specific tissues or organs are affected by disease processes.`,
    keyFacts: [
      'Classified as a ${category} condition',
      'Diagnosis requires clinical evaluation and testing',
      'Treatment options vary based on severity',
    ],
    causes: [
      'Genetic factors may play a role',
      'Environmental exposures can contribute',
      'Lifestyle factors are often involved',
    ],
    riskFactors: ['Age over 50', 'Family history', 'Smoking', 'Poor diet', 'Sedentary lifestyle'],
    pathophysiology: `${name} develops when normal cellular and tissue function is disrupted. This can be due to damage, inflammation, abnormal growth, or loss of function in affected areas.`,
    clinicalPresentation: 'Patients typically present with characteristic symptoms that vary in severity.',
    symptoms: ['Primary symptoms related to affected organ', 'Secondary symptoms from body response', 'Systemic symptoms if widespread'],
    diagnosis: 'Diagnosis involves physical examination, laboratory tests, and imaging studies as needed.',
    diagnosticTests: ['Blood tests', 'Imaging (X-ray, CT, MRI)', 'Biopsy if needed'],
    treatment: 'Treatment may include medications, procedures, lifestyle modifications, or surgery depending on the condition.',
    prognosis: 'Prognosis depends on early detection, treatment adherence, and individual factors.',
  };
}

function generateLevel3Content(name: string, category: ConditionCategory): ConditionContent {
  return {
    definition: `${name} is a ${category} disorder characterized by specific pathological changes in affected tissues. It represents a significant clinical entity requiring systematic diagnostic evaluation and management.`,
    keyFacts: [
      'Pathogenesis involves specific cellular mechanisms',
      'Classification based on etiology, severity, and clinical features',
      'Evidence-based treatment protocols available',
      'Complications can occur without proper management',
    ],
    causes: [
      'Primary etiological factors identified through research',
      'Secondary causes may contribute',
      'Multifactorial in many cases',
    ],
    riskFactors: [
      'Modifiable: smoking, diet, physical activity, alcohol',
      'Non-modifiable: age, genetics, sex',
      'Comorbid conditions increase risk',
    ],
    pathophysiology: `The pathophysiology of ${name} involves specific cellular and molecular mechanisms. Initial insult leads to cascade of events including cellular stress, inflammatory response, and tissue remodeling. Chronic cases show progressive changes with potential for irreversible damage.`,
    molecularMechanisms: 'At the molecular level, signaling pathways are disrupted, leading to altered gene expression and protein function.',
    clinicalPresentation: 'Clinical presentation varies from asymptomatic early stages to symptomatic disease with characteristic findings on examination.',
    symptoms: ['Cardinal symptoms specific to condition', 'Associated symptoms', 'Complications-related symptoms'],
    signs: ['Physical examination findings', 'Laboratory abnormalities', 'Imaging findings'],
    diagnosis: 'Diagnosis requires integration of clinical presentation, laboratory findings, and imaging studies. Differential diagnosis should be considered.',
    diagnosticTests: ['Complete blood count', 'Metabolic panel', 'Specific biomarkers', 'Imaging modalities', 'Tissue biopsy when indicated'],
    differentialDiagnosis: ['Related conditions', 'Mimics', 'Overlapping syndromes'],
    treatment: 'Management includes addressing underlying cause, symptomatic treatment, and prevention of complications. Guidelines recommend stepped approach based on severity.',
    medications: ['First-line agents', 'Second-line options', 'Adjunctive therapy'],
    prognosis: 'Prognosis varies based on stage at diagnosis, treatment response, and presence of complications.',
  };
}

function generateLevel4Content(name: string, category: ConditionCategory): ConditionContent {
  return {
    definition: `${name} represents a ${category} pathological process characterized by specific histopathological changes, molecular alterations, and clinical manifestations. Understanding its pathogenesis is essential for targeted therapeutic intervention.`,
    keyFacts: [
      'Defined by specific pathological criteria',
      'Molecular subtypes may have prognostic significance',
      'Treatment algorithms based on staging and risk stratification',
      'Ongoing research investigating novel therapeutic targets',
    ],
    causes: [
      'Primary etiology established through epidemiological and mechanistic studies',
      'Genetic susceptibility loci identified',
      'Gene-environment interactions documented',
    ],
    riskFactors: [
      'Quantified risk ratios for major risk factors',
      'Risk prediction models available',
      'Screening recommendations based on risk stratification',
    ],
    pathophysiology: `The pathogenesis of ${name} involves complex interplay of cellular and molecular mechanisms. Initial trigger activates inflammatory cascades, oxidative stress pathways, and cellular signaling networks. Progressive disease involves tissue remodeling, fibrosis, and functional deterioration. Understanding these mechanisms guides therapeutic targeting.`,
    molecularMechanisms: 'Key molecular pathways include cytokine signaling (TNF-alpha, IL-6), transcription factor activation (NF-kB), and metabolic alterations. Epigenetic modifications contribute to disease progression.',
    clinicalPresentation: 'Presentation ranges from subclinical disease detected on screening to fulminant presentations requiring urgent intervention. Staging systems incorporate clinical, laboratory, and imaging parameters.',
    symptoms: ['Early symptoms often nonspecific', 'Progressive symptoms correlate with disease burden', 'Complications manifest with advanced disease'],
    signs: ['Specific examination findings', 'Staging-relevant physical findings', 'Signs of complications'],
    diagnosis: 'Diagnostic workup follows systematic approach: clinical assessment, laboratory evaluation, imaging, and tissue diagnosis when indicated. Molecular testing increasingly important for prognosis and treatment selection.',
    diagnosticTests: ['Standard laboratory panels', 'Disease-specific biomarkers', 'Advanced imaging (PET, MRI protocols)', 'Histopathological examination', 'Molecular and genetic testing'],
    differentialDiagnosis: ['Primary differential diagnoses', 'Rare mimics', 'Overlapping conditions'],
    treatment: 'Evidence-based treatment follows guidelines from professional societies. Approach includes disease-modifying therapy, symptomatic management, and complication prevention. Multidisciplinary care improves outcomes.',
    medications: ['Mechanism-based first-line therapy', 'Alternative agents', 'Biologics and targeted therapy where applicable', 'Supportive care medications'],
    prognosis: 'Prognostic factors include disease stage, molecular features, treatment response, and comorbidities. Risk stratification guides intensity of management and follow-up.',
  };
}

function generateLevel5Content(name: string, category: ConditionCategory): ConditionContent {
  return {
    definition: `${name} is a ${category} disorder with well-characterized pathobiology. Contemporary understanding integrates molecular pathogenesis, clinical phenotyping, and precision medicine approaches to optimize patient outcomes.`,
    keyFacts: [
      'Pathogenesis involves specific molecular pathways amenable to targeted intervention',
      'Molecular classification refines prognostication beyond traditional staging',
      'Clinical trials investigating novel therapeutic approaches',
      'Biomarker-driven treatment selection improving outcomes',
    ],
    causes: [
      'Established etiopathogenesis with defined genetic and environmental contributors',
      'Genome-wide association studies identified susceptibility variants',
      'Functional genomics elucidating causal mechanisms',
    ],
    riskFactors: [
      'Polygenic risk scores under development',
      'Modifiable risk factors with quantified impact',
      'Risk-adapted screening protocols',
    ],
    pathophysiology: `Contemporary understanding of ${name} pathogenesis encompasses cellular, molecular, and systems-level mechanisms. Initiating events trigger signaling cascades involving multiple pathways. Disease progression involves epigenetic reprogramming, metabolic adaptation, and microenvironmental changes. Single-cell analyses reveal cellular heterogeneity and dynamic disease evolution.`,
    molecularMechanisms: 'Key pathways include specific receptor-ligand interactions, downstream signaling cascades (MAPK, PI3K/AKT, JAK/STAT), transcriptional programs, and metabolic reprogramming. Therapeutic targeting of these pathways forms basis for precision approaches. Resistance mechanisms involve pathway crosstalk and clonal evolution.',
    clinicalPresentation: 'Clinical phenotypes correlate with underlying molecular subtypes. Integration of -omics data with clinical parameters enables refined patient stratification. Real-world evidence informing clinical practice guidelines.',
    symptoms: ['Phenotype-specific symptom profiles', 'Quality-of-life impact quantified', 'Patient-reported outcomes integrated'],
    signs: ['Objective clinical findings', 'Composite clinical scores', 'Response assessment criteria'],
    diagnosis: 'Diagnostic approach integrates clinical evaluation, advanced imaging, tissue characterization including molecular profiling, and liquid biopsy where applicable. Machine learning models augmenting diagnostic accuracy.',
    diagnosticTests: [
      'Comprehensive molecular profiling',
      'Next-generation sequencing panels',
      'Circulating biomarkers and liquid biopsy',
      'Advanced imaging with quantitative analysis',
      'Functional assays',
    ],
    differentialDiagnosis: ['Molecular differential diagnosis', 'Phenocopies', 'Overlap syndromes'],
    treatment: 'Treatment paradigm incorporating biomarker-driven selection, adaptive trial designs informing practice, and integration of novel modalities. Combination strategies targeting multiple mechanisms. Immunotherapy and cellular therapy where applicable.',
    medications: [
      'Targeted therapies based on molecular features',
      'Immunomodulatory agents',
      'Combination regimens',
      'Novel agents in clinical development',
      'Supportive care optimization',
    ],
    prognosis: 'Prognostication incorporates molecular features, treatment response dynamics, and minimal residual disease assessment. Precision prognostic models under development.',
  };
}

function generateRelatedConditions(regionId: string): RelatedCondition[] {
  const lowerRegion = regionId.toLowerCase();

  if (lowerRegion.includes('heart')) {
    return [
      { id: 'hypertension', name: 'Hypertension', relationship: 'risk factor' },
      { id: 'diabetes', name: 'Diabetes Mellitus', relationship: 'comorbidity' },
      { id: 'hyperlipidemia', name: 'Hyperlipidemia', relationship: 'risk factor' },
    ];
  } else if (lowerRegion.includes('lung')) {
    return [
      { id: 'smoking-related', name: 'Smoking-Related Conditions', relationship: 'shared risk factor' },
      { id: 'allergies', name: 'Allergic Conditions', relationship: 'related' },
    ];
  }

  return [
    { id: 'systemic-condition', name: 'Systemic Conditions', relationship: 'may be associated' },
  ];
}

// ============================================================================
// Hook Implementation
// ============================================================================

export function usePathologyContent(
  regionId: string,
  complexityLevel: ComplexityLevel
): UsePathologyContentResult {
  const [conditions, setConditions] = useState<PathologyCondition[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedConditions, setRelatedConditions] = useState<RelatedCondition[] | null>(null);

  // Fetch conditions when regionId changes
  useEffect(() => {
    let isMounted = true;

    async function fetchPathologyContent() {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 300));

        if (!isMounted) return;

        // In production, this would fetch from API/database
        // For now, generate sample data
        const regionName = regionId.split('.').pop() || regionId;
        const fetchedConditions = generateSampleConditions(regionId, regionName);
        const related = generateRelatedConditions(regionId);

        setConditions(fetchedConditions);
        setRelatedConditions(related);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Failed to load pathology content');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPathologyContent();

    return () => {
      isMounted = false;
    };
  }, [regionId]);

  // Group conditions by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<ConditionCategory, PathologyCondition[]> = {
      inflammatory: [],
      neoplastic: [],
      degenerative: [],
      infectious: [],
      autoimmune: [],
      vascular: [],
      metabolic: [],
      congenital: [],
      traumatic: [],
      functional: [],
      idiopathic: [],
    };

    if (conditions) {
      conditions.forEach(condition => {
        if (groups[condition.category]) {
          groups[condition.category].push(condition);
        }
      });
    }

    return groups;
  }, [conditions]);

  return {
    conditions,
    loading,
    error,
    relatedConditions,
    groupedByCategory,
  };
}

export default usePathologyContent;
