import { EducationalContent } from '../../types';

export const whatIsCancer: EducationalContent = {
  id: 'what-is-cancer',
  type: 'concept',
  name: 'What is Cancer',
  levels: {
    1: {
      level: 1,
      summary: 'Cancer happens when cells in your body grow out of control.',
      explanation: 'Your body is made of tiny building blocks called cells. Normally, old cells die and new cells take their place in an orderly way. Cancer occurs when some cells start growing and dividing too much, creating lumps called tumors.',
      keyTerms: [{ term: 'cancer', definition: 'Disease where cells grow out of control' }, { term: 'cells', definition: 'Tiny building blocks of the body' }, { term: 'tumor', definition: 'Lump formed by abnormal cell growth' }, { term: 'growth', definition: 'Cells multiplying and getting bigger' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'Cancer is uncontrolled cell growth resulting from mutations in genes that regulate cell division.',
      explanation: 'Normal cells have checkpoints that control when they divide. Cancer develops when mutations in oncogenes and tumor suppressor genes bypass these checkpoints, leading to uncontrolled proliferation. Cancer cells can invade nearby tissues and metastasize to distant sites through blood and lymphatic circulation.',
      keyTerms: [{ term: 'oncogenes', definition: 'Genes that can cause cancer when mutated' }, { term: 'tumor suppressor genes', definition: 'Genes that normally prevent cancer' }, { term: 'mutation', definition: 'Change in genetic material' }, { term: 'metastasis', definition: 'Cancer spread to distant sites' }, { term: 'proliferation', definition: 'Rapid cell division' }, { term: 'invasion', definition: 'Cancer growing into nearby tissues' }],
      clinicalNotes: 'Benign tumors do not invade or metastasize. Malignant tumors (cancer) can do both. Cancer is fundamentally a genetic disease at the cellular level.'
    },
    3: {
      level: 3,
      summary: 'Cancer arises through accumulation of mutations in genes controlling proliferation, apoptosis, DNA repair, and cellular differentiation.',
      explanation: 'The hallmarks of cancer include sustained proliferative signaling, evasion of growth suppressors, resistance to cell death, replicative immortality, angiogenesis, and invasion/metastasis. Driver mutations in oncogenes (RAS, MYC, BCR-ABL) cause gain of function, while mutations in tumor suppressors (p53, RB, PTEN) cause loss of function. Most cancers require 4-7 driver mutations to develop.',
      keyTerms: [{ term: 'hallmarks of cancer', definition: 'Key capabilities cancer cells acquire' }, { term: 'driver mutations', definition: 'Mutations directly causing cancer' }, { term: 'passenger mutations', definition: 'Mutations not driving cancer' }, { term: 'p53', definition: 'Tumor suppressor gene - guardian of genome' }, { term: 'RAS', definition: 'Commonly mutated oncogene family' }, { term: 'apoptosis', definition: 'Programmed cell death' }, { term: 'angiogenesis', definition: 'Formation of new blood vessels' }],
      clinicalNotes: 'p53 is mutated in >50% of cancers. KRAS mutations predict resistance to EGFR inhibitors in colorectal cancer. Microsatellite instability indicates defective DNA mismatch repair and predicts response to immunotherapy.'
    },
    4: {
      level: 4,
      summary: 'Advanced understanding recognizes cancer as an evolutionary process driven by clonal selection in the context of the tumor microenvironment.',
      explanation: 'Cancer evolution follows Darwinian principles - genetic and epigenetic heterogeneity generates diverse clones, and selective pressures favor survival of the fittest. The tumor microenvironment including immune cells, fibroblasts, and vasculature shapes this evolution. Cancer stem cells may drive tumor initiation and therapeutic resistance. Immune evasion through PD-L1 expression, HLA loss, and immunosuppressive cytokines enables tumor escape.',
      keyTerms: [{ term: 'clonal evolution', definition: 'Darwinian selection of cancer cell populations' }, { term: 'intratumor heterogeneity', definition: 'Genetic diversity within single tumor' }, { term: 'tumor microenvironment', definition: 'Non-cancer cells and structures around tumor' }, { term: 'cancer stem cells', definition: 'Self-renewing cells driving tumor growth' }, { term: 'immune evasion', definition: 'Cancer escaping immune system detection' }, { term: 'PD-L1', definition: 'Protein helping cancer evade immune system' }],
      clinicalNotes: 'Intratumor heterogeneity explains why single-agent therapy rarely cures cancer. Liquid biopsies detect circulating tumor DNA enabling real-time monitoring of clonal evolution. High tumor mutational burden correlates with immunotherapy response.'
    },
    5: {
      level: 5,
      summary: 'Expert knowledge encompasses molecular subtypes, systems biology approaches, and emerging paradigms including metabolic reprogramming and epithelial-mesenchymal transition.',
      explanation: 'Modern cancer classification integrates histology, immunophenotype, and molecular features. Single-cell sequencing reveals cellular states and developmental hierarchies. Cancer cells reprogram metabolism (Warburg effect) to support rapid proliferation. Epithelial-mesenchymal transition enables invasion and metastasis while conferring stem-like properties. Epigenetic alterations through DNA methylation and histone modifications contribute to transformation. The Cancer Genome Atlas has identified molecular subtypes with distinct biology and prognosis across cancer types.',
      keyTerms: [{ term: 'molecular subtypes', definition: 'Cancer classifications by genetic features' }, { term: 'Warburg effect', definition: 'Altered metabolism in cancer cells' }, { term: 'EMT', definition: 'Epithelial-mesenchymal transition enabling invasion' }, { term: 'epigenetics', definition: 'Gene regulation without DNA sequence changes' }, { term: 'TCGA', definition: 'The Cancer Genome Atlas - genomic database' }, { term: 'single-cell sequencing', definition: 'Analyzing individual cancer cells' }, { term: 'precision oncology', definition: 'Personalized cancer treatment' }],
      clinicalNotes: 'Molecular profiling guides precision therapy - HER2 amplification indicates trastuzumab benefit, BRAF V600E predicts response to BRAF inhibitors. Circulating tumor cells and circulating tumor DNA enable minimal residual disease detection. Understanding cancer cell states and plasticity is critical for preventing resistance.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'how-cancer-develops', targetType: 'concept', relationship: 'related' }, { targetId: 'staging-explained', targetType: 'concept', relationship: 'related' }, { targetId: 'grading-explained', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
