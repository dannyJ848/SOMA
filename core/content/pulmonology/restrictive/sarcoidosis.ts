import { EducationalContent } from '../../types';

export const sarcoidosis: EducationalContent = {
  id: 'pulm-restrictive-sarcoidosis',
  type: 'condition',
  name: 'Sarcoidosis',
  nameEs: 'Sarcoidosis',
  alternateNames: ['Pulmonary Sarcoidosis', 'Besnier-Boeck-Schaumann Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Sarcoidosis is a disease where tiny clumps of inflammatory cells (granulomas) form in the lungs and other organs, causing swelling and scarring.',
      explanation: 'The immune system overreacts and forms small lumps called granulomas, most often in the lungs and lymph nodes. This can cause cough, shortness of breath, and fatigue. It can also affect the skin, eyes, and heart. Many people recover on their own, but some need medication to control inflammation.',
      keyTerms: [{ term: 'Granuloma', definition: 'A small clump of immune cells that forms when the body tries to wall off something it sees as foreign' }, { term: 'Lymph Node', definition: 'Small bean-shaped organs that filter germs and are part of the immune system' }],
      analogies: ['Granulomas are like the body building tiny walls around an imaginary invader'],
      patientCounselingPoints: ['Many cases resolve without treatment within 2 years', 'Regular eye exams are important even without eye symptoms']
    },
    2: {
      level: 2,
      summary: 'Sarcoidosis is a systemic granulomatous disease of unknown etiology, most commonly affecting the lungs, lymph nodes, skin, and eyes with non-caseating granulomas.',
      explanation: 'Most common in African Americans and Northern Europeans aged 25-40. Chest X-ray staging: Stage 0 (normal), I (bilateral hilar lymphadenopathy), II (BHL + infiltrates), III (infiltrates alone), IV (fibrosis). Serum ACE and calcium may be elevated. Diagnosis requires biopsy showing non-caseating granulomas with exclusion of infection and malignancy. Corticosteroids are first-line when treatment is needed.',
      keyTerms: [{ term: 'Non-caseating Granuloma', definition: 'Granuloma without central necrosis (cheese-like death), distinguishing sarcoidosis from tuberculosis' }, { term: 'ACE Level', definition: 'Angiotensin-converting enzyme, produced by granulomas and sometimes elevated in active sarcoidosis' }],
      examples: ['A 30-year-old African American woman with bilateral hilar lymphadenopathy, erythema nodosum, and uveitis']
    },
    3: {
      level: 3,
      summary: 'Sarcoidosis involves Th1/Th17-driven granulomatous inflammation with CD4+ T-cell oligoclonal expansion around an unidentified antigen, producing non-caseating granulomas in multiple organ systems.',
      explanation: 'Immunopathology: antigen presentation by HLA class II (HLA-DRB1*1101 risk allele) activates Th1 cells producing IFN-gamma and TNF-alpha. Granuloma formation: macrophages differentiate into epithelioid and multinucleated giant cells. Hypercalcemia from 1-alpha-hydroxylase activity in macrophages converting 25-OH to 1,25-dihydroxy vitamin D. PFTs show restrictive pattern or mixed obstructive-restrictive. FDG-PET detects occult cardiac and extrapulmonary involvement.',
      keyTerms: [{ term: 'Lofgren Syndrome', definition: 'Acute sarcoidosis triad: bilateral hilar lymphadenopathy, erythema nodosum, and polyarthralgia with excellent prognosis' }, { term: 'Kveim-Siltzbach Test', definition: 'Historical test injecting sarcoid tissue extract; no longer used but demonstrates disease-specific immune response' }],
      clinicalNotes: 'Always screen for cardiac sarcoidosis (ECG, consider cardiac MRI) -- occult cardiac involvement occurs in up to 25% and can cause sudden death.'
    },
    4: {
      level: 4,
      summary: 'Advanced sarcoidosis management addresses refractory disease with steroid-sparing immunosuppressants, anti-TNF biologics, and organ-specific complications including cardiac conduction disease and neurosarcoidosis.',
      explanation: 'Steroid-sparing agents: methotrexate (first-line), azathioprine, mycophenolate, leflunomide. Refractory disease: infliximab (anti-TNF) particularly for lupus pernio, neurosarcoidosis, and cardiac sarcoidosis. Cardiac sarcoidosis: AV block and ventricular arrhythmias may require ICD; cardiac MRI shows late gadolinium enhancement. Neurosarcoidosis: cranial neuropathy (facial nerve most common), hypothalamic-pituitary axis involvement. Pulmonary hypertension complicates advanced fibrotic sarcoidosis.',
      keyTerms: [{ term: 'Cardiac Sarcoidosis', definition: 'Granulomatous infiltration of myocardium causing conduction disease, arrhythmias, and cardiomyopathy' }, { term: 'Lupus Pernio', definition: 'Violaceous indurated plaques on nose, cheeks, and ears indicating chronic sarcoidosis with poor prognosis' }],
      clinicalNotes: 'Infliximab is preferred over adalimumab for sarcoidosis based on randomized data; monitor for infection and check tuberculin skin test before initiation.'
    },
    5: {
      level: 5,
      summary: 'Sarcoidosis research focuses on identifying causative antigens, genomic risk profiling, JAK inhibitor therapy, and biomarkers to distinguish self-resolving from progressive phenotypes.',
      explanation: 'Multi-omic studies implicate mycobacterial catalase-peroxidase (mKatG) and vimentin as candidate antigens. GWAS meta-analyses confirm BTNL2, ANXA11, and HLA region variants. JAK1/2 inhibitors (tofacitinib, ruxolitinib) show promise in refractory cases targeting downstream IFN-gamma signaling. Serum chitotriosidase and soluble IL-2 receptor outperform ACE for disease monitoring. Machine learning clustering of clinical, proteomic, and BAL cellular data identifies distinct endotypes predicting treatment response.',
      keyTerms: [{ term: 'mKatG', definition: 'Mycobacterial catalase-peroxidase identified as a candidate sarcoidosis antigen in granuloma tissue' }, { term: 'BTNL2', definition: 'Butyrophilin-like 2 gene variant strongly associated with sarcoidosis susceptibility' }],
      clinicalNotes: 'GRANULOMA trial (repository corticotropin) and PREDOS (PRedicting outcome in Sarcoidosis) consortium are advancing precision approaches to treatment selection.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-restrictive-pulmonary-fibrosis', targetType: 'condition', relationship: 'sibling', label: 'Pulmonary Fibrosis' },
    { targetId: 'pulm-vascular-pulmonary-hypertension', targetType: 'condition', relationship: 'related', label: 'Pulmonary Hypertension' }
  ],
  tags: { systems: ['respiratory', 'immune'], topics: ['pulmonology', 'restrictive', 'granulomatous'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
