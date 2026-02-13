import { EducationalContent } from '../../types';

export const stagingExplained: EducationalContent = {
  id: 'staging-explained',
  type: 'concept',
  name: 'Staging Explained',
  levels: {
    1: {
      level: 1,
      summary: 'Cancer staging tells doctors how much cancer is in your body and if it has spread.',
      explanation: 'Doctors use staging to describe cancer from stage 1 (small and only in one place) to stage 4 (has spread to other parts of the body). Knowing the stage helps doctors decide the best treatment.',
      keyTerms: [{ term: 'stage', definition: 'Number describing cancer extent' }, { term: 'spread', definition: 'Cancer moving to other body parts' }, { term: 'treatment', definition: 'Medicine or procedures to fight cancer' }, { term: 'cancer size', definition: 'How big the tumor has grown' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'The TNM system describes tumor size (T), lymph node involvement (N), and distant metastasis (M).',
      explanation: 'TNM staging is used for most solid tumors. T describes primary tumor size and local invasion (T1-T4), N describes regional lymph node involvement (N0-N3), and M indicates presence (M1) or absence (M0) of distant metastases. These combine to determine overall stage (I-IV). Staging guides prognosis and treatment selection.',
      keyTerms: [{ term: 'TNM staging', definition: 'System using Tumor, Node, Metastasis classification' }, { term: 'lymph nodes', definition: 'Small organs filtering lymph fluid' }, { term: 'metastasis', definition: 'Cancer spread to distant organs' }, { term: 'stage I-IV', definition: 'Four stages from localized to widespread' }, { term: 'prognosis', definition: 'Expected disease outcome' }],
      clinicalNotes: 'Stage I-II is localized disease, stage III is regional spread, stage IV is distant metastasis. Stage at diagnosis is the strongest prognostic factor for most cancers.'
    },
    3: {
      level: 3,
      summary: 'Clinical staging uses imaging and physical exam, while pathologic staging incorporates surgical findings and is more accurate.',
      explanation: 'Clinical stage (cTNM) is determined before treatment using physical exam, imaging (CT, MRI, PET), and biopsy. Pathologic stage (pTNM) is determined after surgical resection and is more accurate. Restaging after neoadjuvant therapy uses "y" prefix (ypTNM). Complete pathologic response (pCR) after neoadjuvant therapy generally indicates excellent prognosis. Staging systems are cancer-specific and updated periodically by AJCC.',
      keyTerms: [{ term: 'clinical staging', definition: 'Staging before surgery using imaging and exams' }, { term: 'pathologic staging', definition: 'Staging after surgery examining actual tissue' }, { term: 'AJCC', definition: 'American Joint Committee on Cancer' }, { term: 'neoadjuvant therapy', definition: 'Treatment before surgery' }, { term: 'pathologic complete response', definition: 'No cancer found after neoadjuvant therapy' }, { term: 'imaging modalities', definition: 'Different types of scans (CT, MRI, PET)' }],
      clinicalNotes: 'PET-CT is standard for staging many cancers. MRI is preferred for brain, liver, bone, and soft tissue. Endoscopic ultrasound stages esophageal and pancreatic cancers. Always document clinical vs pathologic stage separately.'
    },
    4: {
      level: 4,
      summary: 'Advanced staging incorporates anatomic extent, tumor biology, and prognostic factors beyond TNM including grade, biomarkers, and genomics.',
      explanation: 'AJCC 8th edition introduced prognostic stage groups that integrate TNM with biological factors. Breast cancer staging incorporates ER, PR, HER2 status, and Oncotype DX score. Prostate cancer uses PSA and Gleason score. Melanoma includes ulceration and mitotic rate. Head and neck cancer staging now distinguishes HPV-positive from HPV-negative cancers due to prognostic differences. Molecular subtypes (e.g., breast cancer: luminal A/B, HER2-enriched, basal-like) have distinct natural histories.',
      keyTerms: [{ term: 'prognostic stage group', definition: 'Stage incorporating biological factors' }, { term: 'tumor biomarkers', definition: 'Molecular features predicting behavior' }, { term: 'molecular subtypes', definition: 'Cancer classifications by genetic profile' }, { term: 'Oncotype DX', definition: 'Genomic test predicting breast cancer recurrence' }, { term: 'HPV status', definition: 'Human papillomavirus presence in tumor' }, { term: 'risk stratification', definition: 'Categorizing patients by risk level' }],
      clinicalNotes: 'ER+ HER2- breast cancer with excellent Oncotype DX score may be stage IA even with N1 disease. HPV-positive oropharyngeal cancer has better prognosis than HPV-negative. Always report both anatomic and prognostic stage groups.'
    },
    5: {
      level: 5,
      summary: 'Expert staging integrates anatomic, molecular, and functional parameters using precision oncology approaches including liquid biopsies and AI-assisted imaging.',
      explanation: 'Traditional anatomic staging has limitations - patients with same stage can have vastly different outcomes. Nomograms incorporating multiple clinical and pathologic variables provide individualized risk assessment. Radiomics extracts quantitative imaging features that correlate with outcomes. Circulating tumor DNA detection indicates minimal residual disease and predicts relapse. Single-cell genomics reveals intratumor heterogeneity and rare resistant clones. Machine learning models integrating multi-omic data outperform traditional staging for prognosis prediction in some cancers.',
      keyTerms: [{ term: 'radiomics', definition: 'Extracting quantitative data from imaging' }, { term: 'circulating tumor DNA', definition: 'Cancer DNA fragments in blood' }, { term: 'minimal residual disease', definition: 'Small amount of cancer remaining after treatment' }, { term: 'nomograms', definition: 'Risk prediction tools using multiple variables' }, { term: 'multi-omic integration', definition: 'Combining genomic, proteomic, metabolomic data' }, { term: 'precision staging', definition: 'Individualized staging using molecular data' }],
      clinicalNotes: 'Memorial Sloan Kettering nomograms provide cancer-specific risk calculators. ctDNA detection post-surgery predicts recurrence months before imaging. Radiomics from routine CT/MRI can predict treatment response and prognosis. Consider enrolling patients in trials validating novel staging biomarkers. The future is continuous molecular monitoring rather than static staging.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'what-is-cancer', targetType: 'concept', relationship: 'related' }, { targetId: 'how-cancer-develops', targetType: 'concept', relationship: 'related' }, { targetId: 'grading-explained', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
