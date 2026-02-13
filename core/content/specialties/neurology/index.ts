/**
 * Neurology Specialty Content Index
 *
 * Comprehensive physician-level educational content covering:
 * - Cerebrovascular diseases (stroke, TIA, SAH, AVM, aneurysm)
 * - Seizure disorders (focal, generalized, status epilepticus, febrile)
 * - Neurodegenerative diseases (Alzheimer's, Parkinson's, ALS, Huntington's, FTD, DLB, MSA)
 * - Demyelinating diseases (MS, NMOSD, ADEM, GBS, CIDP)
 * - Neuromuscular disorders (myasthenia gravis, Lambert-Eaton, DMD, neuropathies)
 * - Headache disorders (migraine, cluster, tension, trigeminal neuralgia, IIH)
 * - Movement disorders (essential tremor, dystonia, tardive dyskinesia, RLS)
 * - Neuro-oncology (glioblastoma, meningioma, acoustic neuroma, metastases)
 * - Infectious (bacterial/viral meningitis, encephalitis, brain abscess)
 * - Trauma (concussion, TBI, spinal cord injury)
 *
 * Multi-level content for physician-level patient education
 * with emphasis on emergency recognition and bilingual access.
 */

// Existing topic modules
export * from './stroke';
export * from './epilepsy';
export * from './parkinsons-disease';
export * from './multiple-sclerosis';
export * from './headache-disorders';
export * from './dementia';
export * from './peripheral-neuropathies';

// Neurology Database (50 structured entries with query functions)
export {
  NEUROLOGY_ENTRIES,
  getNeurologyEntry,
  searchNeurology,
  getNeurologyByCategory,
  getNeurologyCount,
  searchNeurologyEmergencies,
  getNeurologyICD11Map,
} from './neurology-database';
export type { NeurologyEntry, NeurologyCategory } from './neurology-database';

// Content registry
export const NEUROLOGY_CONTENT_CATEGORIES = [
  'cerebrovascular',
  'seizure',
  'neurodegenerative',
  'demyelinating',
  'neuromuscular',
  'headache',
  'movement-disorder',
  'neuro-oncology',
  'infectious',
  'trauma',
] as const;

export type NeurologyContentCategory = (typeof NEUROLOGY_CONTENT_CATEGORIES)[number];

// Category display metadata
export const NEUROLOGY_CATEGORY_LABELS: Record<NeurologyContentCategory, { en: string; es: string }> = {
  cerebrovascular: { en: 'Cerebrovascular Diseases', es: 'Enfermedades cerebrovasculares' },
  seizure: { en: 'Seizure Disorders', es: 'Trastornos convulsivos' },
  neurodegenerative: { en: 'Neurodegenerative Diseases', es: 'Enfermedades neurodegenerativas' },
  demyelinating: { en: 'Demyelinating Diseases', es: 'Enfermedades desmielinizantes' },
  neuromuscular: { en: 'Neuromuscular Disorders', es: 'Trastornos neuromusculares' },
  headache: { en: 'Headache Disorders', es: 'Cefaleas' },
  'movement-disorder': { en: 'Movement Disorders', es: 'Trastornos del movimiento' },
  'neuro-oncology': { en: 'Neuro-oncology', es: 'Neuro-oncologia' },
  infectious: { en: 'Infectious Diseases', es: 'Enfermedades infecciosas' },
  trauma: { en: 'Trauma', es: 'Trauma' },
};

// Emergency triage helper
export const NEUROLOGY_EMERGENCY_CONDITIONS = [
  'ischemic-stroke',
  'hemorrhagic-stroke',
  'subarachnoid-hemorrhage',
  'status-epilepticus',
  'bacterial-meningitis',
  'viral-encephalitis',
  'traumatic-brain-injury',
  'spinal-cord-injury',
  'cavernous-sinus-thrombosis',
] as const;
