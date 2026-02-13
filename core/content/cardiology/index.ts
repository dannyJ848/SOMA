/**
 * Cardiology Content Module
 *
 * Comprehensive educational content covering all aspects of cardiovascular medicine
 * including vascular disease, valvular disorders, myocardial conditions,
 * congenital heart disease, cardiac testing, and interventions.
 */

// Vascular Disease
export { pad } from './vascular-disease/pad';
export { aorticAneurysm } from './vascular-disease/aortic-aneurysm';
export { aorticDissection } from './vascular-disease/aortic-dissection';
export { vascularDisease } from './vascular-disease/vascular-disease';

// Valvular Disease
export { valvularOverview } from './valvular-disease/valvular-overview';
export { mitralValve } from './valvular-disease/mitral-valve';
export { aorticValve } from './valvular-disease/aortic-valve';

// Myocardial Disease
export { cardiomyopathy } from './myocardial-disease/cardiomyopathy';
export { myocarditis } from './myocardial-disease/myocarditis';
export { pericardialDisease } from './myocardial-disease/pericardial-disease';

// Congenital Heart Disease
export { asd } from './congenital-heart/asd';
export { vsd } from './congenital-heart/vsd';

// Cardiac Testing
export { echo } from './cardiac-testing/echo';
export { stressTest } from './cardiac-testing/stress-test';
export { cardiacCath } from './cardiac-testing/cardiac-cath';
export { cardiacMRI } from './cardiac-testing/cardiac-mri';

// Interventions
export { pci } from './interventions/pci';
export { cabg } from './interventions/cabg';
export { pacemakerImplant } from './interventions/pacemaker-implant';

// Electrophysiology
export { ecgInterpretation } from './electrophysiology/ecg-interpretation';
export { arrhythmias } from './electrophysiology/arrhythmias';

// Heart Failure
export { heartFailureClassification } from './heart-failure/classification';
export { heartFailureManagement } from './heart-failure/management';

// Valvular (In-Depth)
export { aorticStenosis } from './valvular/aortic-stenosis';
export { mitralRegurgitation } from './valvular/mitral-regurgitation';

// Imaging
export { echocardiography } from './imaging/echocardiography';

// Interventional
export { coronaryStenting } from './interventional/coronary-stenting';

// Content metadata for discovery
export const cardiologyContent = {
  id: 'cardiology',
  name: 'Cardiology',
  description: 'Comprehensive cardiovascular medicine education covering vascular disease, valvular disorders, myocardial conditions, congenital heart disease, cardiac testing, and interventions.',
  topics: [
    // Vascular Disease
    { id: 'pad', name: 'Peripheral Artery Disease', category: 'vascular-disease' },
    { id: 'aortic-aneurysm', name: 'Aortic Aneurysm', category: 'vascular-disease' },
    { id: 'aortic-dissection', name: 'Aortic Dissection', category: 'vascular-disease' },
    { id: 'vascular-disease', name: 'Vascular Disease Overview', category: 'vascular-disease' },
    // Valvular Disease
    { id: 'valvular-overview', name: 'Valvular Heart Disease Overview', category: 'valvular-disease' },
    { id: 'mitral-valve', name: 'Mitral Valve Disease', category: 'valvular-disease' },
    { id: 'aortic-valve', name: 'Aortic Valve Disease', category: 'valvular-disease' },
    // Myocardial Disease
    { id: 'cardiomyopathy', name: 'Cardiomyopathy', category: 'myocardial-disease' },
    { id: 'myocarditis', name: 'Myocarditis', category: 'myocardial-disease' },
    { id: 'pericardial-disease', name: 'Pericardial Disease', category: 'myocardial-disease' },
    // Congenital Heart Disease
    { id: 'asd', name: 'Atrial Septal Defect', category: 'congenital-heart' },
    { id: 'vsd', name: 'Ventricular Septal Defect', category: 'congenital-heart' },
    // Cardiac Testing
    { id: 'echo', name: 'Echocardiography', category: 'cardiac-testing' },
    { id: 'stress-test', name: 'Cardiac Stress Testing', category: 'cardiac-testing' },
    { id: 'cardiac-cath', name: 'Cardiac Catheterization', category: 'cardiac-testing' },
    { id: 'cardiac-mri', name: 'Cardiac MRI', category: 'cardiac-testing' },
    // Interventions
    { id: 'pci', name: 'Percutaneous Coronary Intervention', category: 'interventions' },
    { id: 'cabg', name: 'Coronary Artery Bypass Grafting', category: 'interventions' },
    { id: 'pacemaker-implant', name: 'Pacemaker Implantation', category: 'interventions' },
    // Electrophysiology
    { id: 'ecg-interpretation', name: 'ECG Interpretation', category: 'electrophysiology' },
    { id: 'cardiac-arrhythmias', name: 'Cardiac Arrhythmias', category: 'electrophysiology' },
    // Heart Failure
    { id: 'heart-failure-classification', name: 'Heart Failure Classification', category: 'heart-failure' },
    { id: 'heart-failure-management', name: 'Heart Failure Management', category: 'heart-failure' },
    // Valvular (In-Depth)
    { id: 'aortic-stenosis', name: 'Aortic Stenosis', category: 'valvular' },
    { id: 'mitral-regurgitation', name: 'Mitral Regurgitation', category: 'valvular' },
    // Imaging
    { id: 'echocardiography', name: 'Echocardiography', category: 'imaging' },
    // Interventional
    { id: 'coronary-stenting', name: 'Coronary Stenting', category: 'interventional' },
  ],
  categories: [
    { id: 'vascular-disease', name: 'Vascular Disease', description: 'Disorders of blood vessels outside the heart' },
    { id: 'valvular-disease', name: 'Valvular Heart Disease', description: 'Disorders of heart valves' },
    { id: 'myocardial-disease', name: 'Myocardial Disease', description: 'Disorders of heart muscle' },
    { id: 'congenital-heart', name: 'Congenital Heart Disease', description: 'Structural heart defects present at birth' },
    { id: 'cardiac-testing', name: 'Cardiac Testing', description: 'Diagnostic and prognostic cardiac tests' },
    { id: 'interventions', name: 'Cardiac Interventions', description: 'Procedural treatments for heart disease' },
    { id: 'electrophysiology', name: 'Electrophysiology', description: 'Cardiac electrical conduction, ECG interpretation, and arrhythmia management' },
    { id: 'heart-failure', name: 'Heart Failure', description: 'Classification, diagnosis, and management of heart failure syndromes' },
    { id: 'valvular', name: 'Valvular Disease (In-Depth)', description: 'Detailed coverage of specific valvular pathologies and interventions' },
    { id: 'imaging', name: 'Cardiac Imaging', description: 'Advanced cardiac imaging modalities and interpretation' },
    { id: 'interventional', name: 'Interventional Cardiology', description: 'Coronary and structural heart interventions' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
  createdAt: '2025-01-25',
  updatedAt: '2025-01-30',
  version: '2.0.0',
};

// Type exports for TypeScript
export type { EducationalContent } from '../types';
