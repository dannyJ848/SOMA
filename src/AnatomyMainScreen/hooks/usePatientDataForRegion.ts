/**
 * usePatientDataForRegion Hook
 *
 * Maps patient health data to a specific anatomical region.
 * Filters and organizes conditions, symptoms, medications, labs, and imaging
 * based on relevance to the selected body region.
 */

import { useMemo } from 'react';
import type {
  BiologicalSelf,
  Condition,
  Symptom,
  Medication,
  LabResult,
  ImagingReport,
} from '../../../core/biological-self/types';

/**
 * Mapping of regions to body location patterns
 * Used to match symptoms by bodyLocation field
 */
const REGION_BODY_LOCATION_PATTERNS: Record<string, string[]> = {
  head: ['head', 'brain', 'face', 'skull', 'cranial', 'temple', 'forehead'],
  neck: ['neck', 'cervical', 'throat', 'thyroid', 'trachea', 'larynx'],
  chest: ['chest', 'thorax', 'thoracic', 'heart', 'cardiac', 'lung', 'pulmonary', 'breast', 'sternum', 'rib'],
  abdomen: ['abdomen', 'abdominal', 'stomach', 'gastric', 'liver', 'hepatic', 'intestine', 'bowel', 'colon', 'pancreas', 'spleen', 'kidney', 'renal', 'gallbladder', 'epigastric', 'umbilical'],
  pelvis: ['pelvis', 'pelvic', 'hip', 'groin', 'bladder', 'urinary', 'reproductive', 'genital'],
  leftArm: ['left arm', 'left upper limb', 'left shoulder', 'left elbow', 'left wrist', 'left hand', 'left finger'],
  rightArm: ['right arm', 'right upper limb', 'right shoulder', 'right elbow', 'right wrist', 'right hand', 'right finger'],
  leftLeg: ['left leg', 'left lower limb', 'left thigh', 'left knee', 'left ankle', 'left foot', 'left toe'],
  rightLeg: ['right leg', 'right lower limb', 'right thigh', 'right knee', 'right ankle', 'right foot', 'right toe'],
  heart: ['heart', 'cardiac', 'coronary', 'myocardial', 'pericardial', 'atrial', 'ventricular'],
  lungs: ['lung', 'pulmonary', 'bronchial', 'alveolar', 'respiratory', 'pleural'],
  brain: ['brain', 'cerebral', 'neurological', 'cranial', 'frontal', 'temporal', 'parietal', 'occipital'],
  spine: ['spine', 'spinal', 'vertebral', 'back', 'lumbar', 'thoracic', 'cervical', 'sacral', 'coccyx'],
};

/**
 * Mapping of regions to relevant condition keywords
 */
const REGION_CONDITION_KEYWORDS: Record<string, string[]> = {
  head: ['headache', 'migraine', 'concussion', 'meningitis', 'stroke', 'brain', 'neurological', 'seizure', 'epilepsy', 'sinusitis'],
  neck: ['thyroid', 'hypothyroid', 'hyperthyroid', 'goiter', 'cervical', 'neck pain', 'lymphadenopathy', 'carotid'],
  chest: ['heart', 'cardiac', 'coronary', 'angina', 'arrhythmia', 'heart failure', 'lung', 'pneumonia', 'asthma', 'copd', 'bronchitis', 'pulmonary'],
  abdomen: ['gastric', 'ulcer', 'liver', 'hepatitis', 'cirrhosis', 'pancreatitis', 'cholecystitis', 'appendicitis', 'colitis', 'crohn', 'ibd', 'kidney', 'renal'],
  pelvis: ['bladder', 'urinary', 'kidney', 'prostate', 'ovarian', 'uterine', 'pelvic', 'hip'],
  leftArm: ['shoulder', 'elbow', 'wrist', 'carpal tunnel', 'tennis elbow', 'rotator cuff', 'arthritis'],
  rightArm: ['shoulder', 'elbow', 'wrist', 'carpal tunnel', 'tennis elbow', 'rotator cuff', 'arthritis'],
  leftLeg: ['knee', 'hip', 'ankle', 'dvt', 'peripheral artery', 'arthritis', 'gout', 'neuropathy'],
  rightLeg: ['knee', 'hip', 'ankle', 'dvt', 'peripheral artery', 'arthritis', 'gout', 'neuropathy'],
  heart: ['heart', 'cardiac', 'coronary', 'myocardial', 'angina', 'arrhythmia', 'heart failure', 'valve', 'cardiomyopathy'],
  lungs: ['lung', 'pulmonary', 'pneumonia', 'asthma', 'copd', 'bronchitis', 'fibrosis', 'embolism'],
  brain: ['brain', 'stroke', 'aneurysm', 'tumor', 'dementia', 'alzheimer', 'parkinson', 'ms', 'epilepsy'],
  spine: ['back pain', 'sciatica', 'herniated', 'stenosis', 'scoliosis', 'degenerative', 'vertebral'],
};

/**
 * Mapping of regions to relevant lab test names
 */
const REGION_LAB_KEYWORDS: Record<string, string[]> = {
  head: ['csf', 'neurological', 'ammonia', 'b12'],
  neck: ['tsh', 'thyroid', 't3', 't4', 'pth', 'calcium', 'calcitonin'],
  chest: ['troponin', 'bnp', 'ck-mb', 'lipid', 'cholesterol', 'ldl', 'hdl', 'triglyceride', 'd-dimer', 'pco2', 'po2', 'oxygen'],
  abdomen: ['liver', 'ast', 'alt', 'bilirubin', 'albumin', 'lipase', 'amylase', 'creatinine', 'bun', 'gfr', 'glucose', 'a1c'],
  pelvis: ['creatinine', 'bun', 'gfr', 'psa', 'hcg', 'urinalysis'],
  leftArm: ['rheumatoid', 'ana', 'esr', 'crp', 'uric acid'],
  rightArm: ['rheumatoid', 'ana', 'esr', 'crp', 'uric acid'],
  leftLeg: ['d-dimer', 'crp', 'uric acid', 'rheumatoid'],
  rightLeg: ['d-dimer', 'crp', 'uric acid', 'rheumatoid'],
  heart: ['troponin', 'bnp', 'nt-probnp', 'ck-mb', 'lipid', 'cholesterol', 'ldl', 'hdl'],
  lungs: ['abg', 'pco2', 'po2', 'd-dimer', 'bicarbonate'],
  brain: ['csf', 'ammonia', 'b12', 'glucose'],
  spine: ['esr', 'crp', 'rheumatoid', 'ana'],
};

/**
 * Patient data organized for a specific region
 */
export interface PatientRegionData {
  conditions: Condition[];
  symptoms: Symptom[];
  medications: Medication[];
  labs: LabResult[];
  imaging: ImagingReport[];
  totalItems: number;
}

/**
 * Check if a string contains any of the keywords (case-insensitive)
 */
function containsKeyword(text: string, keywords: string[]): boolean {
  const lowerText = text.toLowerCase();
  return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
}

/**
 * Filter conditions relevant to a region
 */
function filterConditions(
  conditions: Condition[],
  regionId: string
): Condition[] {
  const keywords = REGION_CONDITION_KEYWORDS[regionId] || [];
  if (keywords.length === 0) return [];

  return conditions.filter(condition =>
    containsKeyword(condition.name, keywords) ||
    (condition.notes && containsKeyword(condition.notes, keywords))
  );
}

/**
 * Filter symptoms by body location
 */
function filterSymptoms(symptoms: Symptom[], regionId: string): Symptom[] {
  const locationPatterns = REGION_BODY_LOCATION_PATTERNS[regionId] || [];
  if (locationPatterns.length === 0) return [];

  return symptoms.filter(symptom =>
    containsKeyword(symptom.bodyLocation, locationPatterns) ||
    containsKeyword(symptom.description, locationPatterns)
  );
}

/**
 * Filter medications by what they treat (based on region conditions)
 */
function filterMedications(
  medications: Medication[],
  conditions: Condition[]
): Medication[] {
  const conditionIds = new Set(conditions.map(c => c.id));
  const conditionNames = conditions.map(c => c.name.toLowerCase());

  return medications.filter(med => {
    // Check if prescribed for a relevant condition
    if (med.prescribedFor) {
      if (conditionIds.has(med.prescribedFor)) return true;
      if (conditionNames.some(name => med.prescribedFor?.toLowerCase().includes(name))) {
        return true;
      }
    }
    return false;
  });
}

/**
 * Filter lab results relevant to a region
 */
function filterLabs(labs: LabResult[], regionId: string): LabResult[] {
  const keywords = REGION_LAB_KEYWORDS[regionId] || [];
  if (keywords.length === 0) return [];

  return labs.filter(lab => containsKeyword(lab.testName, keywords));
}

/**
 * Filter imaging reports by body part
 */
function filterImaging(imaging: ImagingReport[], regionId: string): ImagingReport[] {
  const locationPatterns = REGION_BODY_LOCATION_PATTERNS[regionId] || [];
  if (locationPatterns.length === 0) return [];

  return imaging.filter(report =>
    containsKeyword(report.bodyPart, locationPatterns)
  );
}

/**
 * Hook to get patient data filtered for a specific region
 */
export function usePatientDataForRegion(
  regionId: string,
  patientData?: BiologicalSelf
): PatientRegionData | null {
  return useMemo(() => {
    if (!patientData) return null;

    // Filter conditions first since medications depend on them
    const conditions = filterConditions(patientData.conditions, regionId);
    const symptoms = filterSymptoms(patientData.symptoms, regionId);
    const medications = filterMedications(patientData.medications, conditions);
    const labs = filterLabs(patientData.labResults, regionId);
    const imaging = filterImaging(patientData.imaging, regionId);

    const totalItems =
      conditions.length +
      symptoms.length +
      medications.length +
      labs.length +
      imaging.length;

    // Return null if no data for this region
    if (totalItems === 0) return null;

    return {
      conditions,
      symptoms,
      medications,
      labs,
      imaging,
      totalItems,
    };
  }, [regionId, patientData]);
}

export default usePatientDataForRegion;
