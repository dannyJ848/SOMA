import { EducationalContent } from '../../types';

export const gradingExplained: EducationalContent = {
  id: 'grading-explained',
  type: 'concept',
  name: 'Grading Explained',
  levels: {
    1: {
      level: 1,
      summary: 'Cancer grade describes how different the cancer cells look from normal cells.',
      explanation: 'When doctors look at cancer cells under a microscope, they can tell how abnormal they look. Low-grade cancers look more like normal cells and grow slowly. High-grade cancers look very abnormal and grow quickly.',
      keyTerms: [{ term: 'grade', definition: 'How abnormal cancer cells look' }, { term: 'microscope', definition: 'Instrument to see very small things' }, { term: 'abnormal cells', definition: 'Cells that look different from normal' }, { term: 'growth rate', definition: 'How fast cancer is growing' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'Histologic grade assesses degree of differentiation, with well-differentiated (low-grade) tumors having better prognosis.',
      explanation: 'Grading evaluates cellular differentiation, nuclear atypia, and mitotic activity. Grade 1 (well-differentiated) tumors resemble normal tissue. Grade 2 (moderately differentiated) shows intermediate features. Grade 3 (poorly differentiated) or grade 4 (undifferentiated) tumors have marked atypia and high mitotic rates. Higher grade correlates with aggressive behavior and worse prognosis.',
      keyTerms: [{ term: 'differentiation', definition: 'How much cancer resembles normal tissue' }, { term: 'nuclear atypia', definition: 'Abnormal appearance of cell nuclei' }, { term: 'mitotic rate', definition: 'How often cells are dividing' }, { term: 'well-differentiated', definition: 'Low grade - looks similar to normal' }, { term: 'poorly differentiated', definition: 'High grade - looks very abnormal' }],
      clinicalNotes: 'Grade is independent of stage but both predict prognosis. A small high-grade tumor may behave more aggressively than a larger low-grade tumor.'
    },
    3: {
      level: 3,
      summary: 'Cancer-specific grading systems incorporate architectural and cytologic features most predictive of biological behavior.',
      explanation: 'Grading systems vary by cancer type. Breast cancer uses Nottingham (Elston-Ellis) grade assessing tubule formation, nuclear pleomorphism, and mitotic count. Gleason score for prostate cancer grades glandular architecture patterns. Renal cell carcinoma uses Fuhrman nuclear grade. Soft tissue sarcomas use FNCLCC system combining differentiation, mitotic count, and necrosis. Some systems use two-tier (low vs high grade) rather than three-tier grading.',
      keyTerms: [{ term: 'Nottingham grade', definition: 'Breast cancer grading system' }, { term: 'Gleason score', definition: 'Prostate cancer grading system' }, { term: 'Fuhrman grade', definition: 'Kidney cancer nuclear grading' }, { term: 'FNCLCC', definition: 'French sarcoma grading system' }, { term: 'architectural grading', definition: 'Grading based on tissue structure' }, { term: 'cytologic grading', definition: 'Grading based on cell appearance' }],
      clinicalNotes: 'Gleason score combines two most prevalent patterns (e.g., 3+4=7). Gleason 6 rarely metastasizes. Gleason ≥8 is high risk. Ki-67 proliferation index supplements grading in some tumors.'
    },
    4: {
      level: 4,
      summary: 'Advanced grading incorporates molecular features and proliferation markers that refine traditional histologic assessment.',
      explanation: 'Molecular grade may differ from histologic grade. Oncotype DX recurrence score in breast cancer provides functional measure of tumor biology. PAM50 assay molecularly classifies breast cancers into intrinsic subtypes that predict behavior beyond histologic grade. Ki-67 index quantifies proliferation rate. Mitotic count assessment can be automated using digital pathology and AI. Tumor-infiltrating lymphocytes and immune microenvironment also influence prognosis.',
      keyTerms: [{ term: 'molecular grading', definition: 'Grading using genetic features' }, { term: 'PAM50', definition: 'Breast cancer gene expression assay' }, { term: 'Ki-67 index', definition: 'Marker of cell proliferation rate' }, { term: 'intrinsic subtypes', definition: 'Molecular classification of breast cancer' }, { term: 'tumor-infiltrating lymphocytes', definition: 'Immune cells within tumor' }, { term: 'digital pathology', definition: 'Computer analysis of microscopy images' }],
      clinicalNotes: 'Low Oncotype score can downgrade treatment recommendations even in high histologic grade ER+ breast cancer. PAM50 luminal A tumors have excellent prognosis regardless of histologic grade. High TILs in triple-negative breast cancer indicates better prognosis.'
    },
    5: {
      level: 5,
      summary: 'Expert assessment integrates histologic, molecular, and spatial features using systems pathology approaches and AI-augmented analysis.',
      explanation: 'Histologic grade has moderate inter-observer variability, particularly for intermediate grades. AI algorithms can standardize grading and identify novel prognostic features in histology images not visible to human observers. Spatial transcriptomics maps gene expression patterns within tumors, revealing that grade can vary by tumor region. Single-cell analyses show high-grade clones can coexist with low-grade clones. Circulating tumor cell characterization provides dynamic assessment of tumor grade evolution. The future involves integrating these multi-scale assessments for precision prognostication.',
      keyTerms: [{ term: 'spatial transcriptomics', definition: 'Mapping gene expression in tissue location' }, { term: 'AI pathology', definition: 'Artificial intelligence analyzing pathology images' }, { term: 'intratumor heterogeneity', definition: 'Different grades in different tumor regions' }, { term: 'circulating tumor cells', definition: 'Cancer cells in bloodstream' }, { term: 'multi-scale assessment', definition: 'Integrating multiple levels of analysis' }, { term: 'precision grading', definition: 'Individualized grading using advanced methods' }],
      clinicalNotes: 'Consider sampling multiple tumor regions for accurate grading in large tumors. Dedifferentiation (grade evolution from low to high) can occur during progression. ctDNA mutational signatures correlate with histologic grade. AI-based grade prediction from H&E images achieves expert-level accuracy and may reduce variability. Consider multi-region or liquid biopsy assessment in discordant clinical behavior.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'what-is-cancer', targetType: 'concept', relationship: 'related' }, { targetId: 'how-cancer-develops', targetType: 'concept', relationship: 'related' }, { targetId: 'staging-explained', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
