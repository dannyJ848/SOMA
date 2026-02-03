import { EducationalContent } from '../../types';

export const kidneyDiseaseStages: EducationalContent = {
  id: 'kidney-disease-stages',
  type: 'concept',
  name: 'Kidney Disease Stages',
  levels: {
    1: {
      level: 1,
      summary: 'Kidney disease is divided into five stages based on how well the kidneys work.',
      explanation: 'Stage 1 means your kidneys are working normally or almost normally. Stage 5 means your kidneys have stopped working and you need dialysis or a kidney transplant. The stages in between show different levels of kidney function.',
      keyTerms: [{ term: 'kidney disease', definition: 'When kidneys are not working properly' }, { term: 'stages', definition: 'Different levels of kidney function' }, { term: 'dialysis', definition: 'Machine that cleans blood when kidneys fail' }, { term: 'transplant', definition: 'Surgery to receive new kidney' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'CKD is staged by GFR from stage 1 (>90) to stage 5 (<15 mL/min/1.73m²).',
      explanation: 'Chronic kidney disease staging guides prognosis and management. Stage 1-2 require evidence of kidney damage (proteinuria, hematuria, imaging abnormalities). Stage 3 is divided into 3a (GFR 45-59) and 3b (GFR 30-44). Stage 4 (GFR 15-29) requires nephrology referral and transplant evaluation. Stage 5 (<15) typically requires renal replacement therapy.',
      keyTerms: [{ term: 'CKD staging', definition: 'Classification system for chronic kidney disease' }, { term: 'GFR categories', definition: 'Groups based on filtration rate' }, { term: 'G1-G5', definition: 'GFR stage labels from best to worst' }, { term: 'kidney failure', definition: 'Stage 5 CKD requiring dialysis or transplant' }, { term: 'ESRD', definition: 'End-stage renal disease' }],
      clinicalNotes: 'Refer to nephrology at stage 4 or earlier if rapid progression, resistant hypertension, or unclear etiology. Prepare for dialysis or transplant when eGFR <20.'
    },
    3: {
      level: 3,
      summary: 'CKD prognosis incorporates both GFR and albuminuria using the KDIGO risk classification.',
      explanation: 'The KDIGO CKD classification uses a heat map combining GFR stage (G1-G5) and albuminuria stage (A1-A3) to stratify risk. Higher albuminuria at any GFR level increases risk of progression, cardiovascular disease, and mortality. This classification guides treatment intensity and monitoring frequency.',
      keyTerms: [{ term: 'KDIGO classification', definition: 'International CKD staging system' }, { term: 'albuminuria staging', definition: 'Classification by urine albumin level' }, { term: 'A1-A3', definition: 'Albuminuria categories from normal to severe' }, { term: 'CKD prognosis', definition: 'Expected disease course and outcome' }, { term: 'progression risk', definition: 'Likelihood of worsening kidney function' }],
      clinicalNotes: 'Green (low risk): G1-G2 with A1. Yellow (moderately increased risk): G3a with A1, or G1-G2 with A2. Orange/Red (high/very high risk): G3b-G5 or higher albuminuria stages. Intensify RAAS blockade and SGLT2 inhibition in higher risk categories.'
    },
    4: {
      level: 4,
      summary: 'Advanced CKD management requires addressing complications including anemia, mineral bone disease, and metabolic acidosis.',
      explanation: 'CKD progression leads to specific complications requiring management: anemia from erythropoietin deficiency (typically stage 3-4), secondary hyperparathyroidism from vitamin D deficiency and hyperphosphatemia (stage 3-4), metabolic acidosis (stage 4-5), and volume overload (stage 4-5). Kidney function decline is typically not linear - consider using kidney failure risk equations to predict progression.',
      keyTerms: [{ term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral and bone disorder' }, { term: 'secondary hyperparathyroidism', definition: 'Elevated PTH from kidney disease' }, { term: 'ESA', definition: 'Erythropoiesis-stimulating agents for anemia' }, { term: 'phosphate binders', definition: 'Medications reducing phosphate absorption' }, { term: 'kidney failure risk equations', definition: 'Tools predicting progression to ESRD' }, { term: 'KFRE', definition: 'Kidney Failure Risk Equation' }],
      clinicalNotes: 'Target hemoglobin 10-11.5 g/dL with ESAs. Monitor PTH, calcium, phosphate, vitamin D starting stage 3. Treat acidosis when bicarbonate <22. Use 4-variable KFRE (age, sex, eGFR, UACR) to predict 2- and 5-year kidney failure risk.'
    },
    5: {
      level: 5,
      summary: 'Expert CKD care requires precision prognostication, timely preparation for kidney replacement therapy, and management of complex comorbidities.',
      explanation: 'CKD progression is heterogeneous - some patients remain stable for years while others progress rapidly. Kidney failure risk calculators incorporating clinical, laboratory, and genetic data improve prognostication beyond GFR alone. Shared decision-making regarding dialysis modality (hemodialysis vs peritoneal dialysis), transplant evaluation, and conservative management is essential. Incremental dialysis initiation may benefit some patients. Addressing cardiovascular disease, the leading cause of death in CKD, requires intensive risk factor modification.',
      keyTerms: [{ term: 'kidney failure prediction', definition: 'Estimating time to dialysis need' }, { term: 'dialysis modality', definition: 'Type of dialysis - hemodialysis vs peritoneal' }, { term: 'incremental dialysis', definition: 'Starting dialysis gradually' }, { term: 'conservative kidney management', definition: 'Managing CKD without dialysis' }, { term: 'cardiovascular risk in CKD', definition: 'Increased heart disease risk with kidney disease' }],
      clinicalNotes: 'Consider incremental dialysis (once or twice weekly) in residual kidney function >5 mL/min. Evaluate for transplant when eGFR <20 to allow for preemptive transplantation. Conservative management may be appropriate for elderly patients with significant comorbidities. Intensive BP control (<120 systolic), SGLT2 inhibition, and non-steroidal MRA reduce progression and cardiovascular events.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'how-kidneys-work', targetType: 'concept', relationship: 'related' }, { targetId: 'measuring-kidney-function', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
