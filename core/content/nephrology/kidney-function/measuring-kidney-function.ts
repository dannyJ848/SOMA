import { EducationalContent } from '../../types';

export const measuringKidneyFunction: EducationalContent = {
  id: 'measuring-kidney-function',
  type: 'concept',
  name: 'Measuring Kidney Function',
  levels: {
    1: {
      level: 1,
      summary: 'Doctors use blood and urine tests to check how well your kidneys are working.',
      explanation: 'A simple blood test can measure a substance called creatinine. When your kidneys are not working well, creatinine builds up in your blood. Urine tests can also show if your kidneys are healthy.',
      keyTerms: [{ term: 'blood test', definition: 'Test analyzing blood sample' }, { term: 'creatinine', definition: 'Waste product filtered by kidneys' }, { term: 'urine test', definition: 'Test analyzing urine sample' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'GFR estimated from serum creatinine is the primary measure of kidney function.',
      explanation: 'Glomerular filtration rate (GFR) represents the volume of plasma filtered by the kidneys per unit time. Because direct measurement is impractical, GFR is estimated from serum creatinine using equations that account for age, sex, and race. Normal GFR is >90 mL/min/1.73m².',
      keyTerms: [{ term: 'GFR', definition: 'Glomerular filtration rate - kidney filtering capacity' }, { term: 'eGFR', definition: 'Estimated GFR from blood creatinine' }, { term: 'serum creatinine', definition: 'Creatinine level in blood' }, { term: 'CKD-EPI equation', definition: 'Formula to estimate GFR' }, { term: 'MDRD equation', definition: 'Older formula to estimate GFR' }],
      clinicalNotes: 'CKD-EPI equation is preferred over MDRD. eGFR <60 for >3 months defines chronic kidney disease. Creatinine production depends on muscle mass.'
    },
    3: {
      level: 3,
      summary: 'Comprehensive assessment of kidney function includes GFR estimation, markers of tubular function, and urinalysis.',
      explanation: 'eGFR assesses glomerular filtration but may be inaccurate in extremes of muscle mass, during acute kidney injury, or at higher GFR levels. Cystatin C-based equations may be more accurate in these situations. Urinalysis provides information about glomerular (proteinuria, hematuria) and tubular (glycosuria, specific gravity) function. Urine albumin-to-creatinine ratio quantifies proteinuria and is prognostic in CKD.',
      keyTerms: [{ term: 'cystatin C', definition: 'Alternative marker for GFR estimation' }, { term: 'proteinuria', definition: 'Excess protein in urine' }, { term: 'albuminuria', definition: 'Albumin protein in urine' }, { term: 'UACR', definition: 'Urine albumin-to-creatinine ratio' }, { term: 'urinalysis', definition: 'Microscopic and chemical urine analysis' }, { term: 'specific gravity', definition: 'Urine concentration measure' }],
      clinicalNotes: 'UACR >30 mg/g indicates albuminuria and increased cardiovascular risk. Dipstick detects albumin >300 mg/day. Collect UACR on first morning void for accuracy.'
    },
    4: {
      level: 4,
      summary: 'Advanced kidney function assessment incorporates measured GFR, tubular function tests, and novel biomarkers.',
      explanation: 'Measured GFR using inulin or radiolabeled tracers provides gold standard assessment but is rarely performed clinically. 24-hour creatinine clearance overestimates GFR due to tubular creatinine secretion. Fractional excretion of sodium (FENa) and urea (FEUrea) help differentiate prerenal from intrinsic AKI. Novel biomarkers including NGAL, KIM-1, and IL-18 may detect AKI earlier than creatinine.',
      keyTerms: [{ term: 'measured GFR', definition: 'Directly measured filtration rate' }, { term: 'inulin clearance', definition: 'Gold standard GFR measurement' }, { term: 'FENa', definition: 'Fractional excretion of sodium' }, { term: 'FEUrea', definition: 'Fractional excretion of urea' }, { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin - AKI biomarker' }, { term: 'KIM-1', definition: 'Kidney injury molecule-1 - tubular injury marker' }, { term: 'tubular biomarkers', definition: 'Markers of kidney tubule injury' }],
      clinicalNotes: 'FENa <1% suggests prerenal AKI (unless on diuretics). FEUrea <35% may be more accurate in diuretic use. Novel biomarkers differentiate AKI subtypes and predict outcomes but are not yet standard of care.'
    },
    5: {
      level: 5,
      summary: 'Expert assessment integrates multiple modalities including functional testing, imaging, and molecular diagnostics for precision nephrology.',
      explanation: 'GFR estimation has inherent limitations - eGFR equations perform poorly at extremes of age, body composition, and GFR levels. Measured GFR may be required for critical decisions like living kidney donation or chemotherapy dosing. Renal functional imaging using 99mTc-DTPA or MAG3 provides differential kidney function. Genetic testing identifies inherited kidney diseases. Kidney biopsy with molecular diagnostics enables precision diagnosis and prognostication. Multi-biomarker panels combining functional, injury, and fibrosis markers may improve risk stratification.',
      keyTerms: [{ term: 'GFR measurement', definition: 'Direct measurement of kidney filtration' }, { term: 'renal scintigraphy', definition: 'Nuclear medicine kidney imaging' }, { term: 'DTPA scan', definition: 'Radiotracer scan for GFR measurement' }, { term: 'genetic testing', definition: 'DNA analysis for inherited kidney diseases' }, { term: 'kidney biopsy', definition: 'Tissue sample for diagnosis' }, { term: 'transcriptomics', definition: 'RNA expression analysis' }, { term: 'precision nephrology', definition: 'Individualized kidney disease care' }],
      clinicalNotes: 'Consider measured GFR for living kidney donation evaluation, morbid obesity, extremes of muscle mass, or critical chemotherapy dosing decisions. Genetic testing indicated for FSGS, Alport syndrome, polycystic kidney disease. Transcriptomic analysis of biopsy specimens can predict treatment response and prognosis.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'how-kidneys-work', targetType: 'concept', relationship: 'related' }, { targetId: 'kidney-disease-stages', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
