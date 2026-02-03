import { EducationalContent } from '../../types';

export const howCancerDevelops: EducationalContent = {
  id: 'how-cancer-develops',
  type: 'concept',
  name: 'How Cancer Develops',
  levels: {
    1: {
      level: 1,
      summary: 'Cancer develops slowly over time when cells make mistakes as they divide.',
      explanation: 'When your cells divide to make new cells, they sometimes make copying mistakes. Usually your body fixes these mistakes, but if too many mistakes build up, a cell can turn into cancer. This process takes many years.',
      keyTerms: [{ term: 'cell division', definition: 'When cells split to make new cells' }, { term: 'mistakes', definition: 'Errors in copying DNA' }, { term: 'time', definition: 'Cancer usually takes years to develop' }, { term: 'changes', definition: 'Alterations in cell behavior' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'Cancer develops through a multi-step process of mutation accumulation and clonal expansion.',
      explanation: 'Carcinogenesis typically progresses from normal tissue through hyperplasia, dysplasia, carcinoma in situ, to invasive cancer. Each step requires additional mutations. Risk factors including tobacco, radiation, infectious agents, and inherited genetic variants increase mutation rate and cancer risk. The immune system can recognize and eliminate some early cancers (immunosurveillance).',
      keyTerms: [{ term: 'carcinogenesis', definition: 'Process of cancer development' }, { term: 'dysplasia', definition: 'Abnormal cell growth - precancerous' }, { term: 'carcinoma in situ', definition: 'Early cancer confined to original tissue layer' }, { term: 'risk factors', definition: 'Things that increase cancer probability' }, { term: 'immunosurveillance', definition: 'Immune system monitoring for cancer cells' }, { term: 'clonal expansion', definition: 'Growth of cancer cell population from single cell' }],
      clinicalNotes: 'Adenomatous polyps progress to colorectal cancer through the adenoma-carcinoma sequence over 10-15 years. This provides a window for screening and prevention.'
    },
    3: {
      level: 3,
      summary: 'Cancer development requires sequential acquisition of capabilities including growth signal autonomy, evasion of apoptosis, and angiogenesis.',
      explanation: 'The multistep model of carcinogenesis requires cells to acquire specific hallmarks. Initial mutations enable proliferation (activation of growth pathways like RAS-RAF-MAPK). Subsequent mutations inactivate checkpoints (p53, RB), enable replicative immortality (telomerase activation), induce angiogenesis (VEGF expression), and allow invasion/metastasis (loss of E-cadherin). Field cancerization describes how large tissue areas accumulate early mutations, increasing cancer risk.',
      keyTerms: [{ term: 'multistep carcinogenesis', definition: 'Cancer developing through multiple genetic events' }, { term: 'RAS-MAPK pathway', definition: 'Growth signaling pathway often activated in cancer' }, { term: 'telomerase', definition: 'Enzyme enabling unlimited cell division' }, { term: 'VEGF', definition: 'Vascular endothelial growth factor - drives angiogenesis' }, { term: 'field cancerization', definition: 'Large tissue area with cancer-predisposing mutations' }, { term: 'E-cadherin', definition: 'Cell adhesion molecule lost during invasion' }],
      clinicalNotes: 'In colorectal cancer, the typical sequence is APC mutation → KRAS mutation → p53 loss. Cervical cancer requires persistent HPV infection plus additional mutations. Understanding these sequences enables prevention and early detection strategies.'
    },
    4: {
      level: 4,
      summary: 'Advanced understanding incorporates concepts of epigenetic reprogramming, chronic inflammation, and tissue microenvironment in carcinogenesis.',
      explanation: 'Cancer development is not purely cell-autonomous - the tissue microenvironment shapes carcinogenesis. Chronic inflammation (H. pylori gastritis, inflammatory bowel disease) promotes cancer through reactive oxygen species, cytokine signaling, and DNA damage. Epigenetic alterations including CpG island methylation can silence tumor suppressors without mutation. The "seed and soil" hypothesis explains metastatic tropism - cancer cells (seed) preferentially metastasize to favorable microenvironments (soil).',
      keyTerms: [{ term: 'epigenetic silencing', definition: 'Turning off genes without DNA mutations' }, { term: 'CpG methylation', definition: 'DNA modification silencing tumor suppressors' }, { term: 'chronic inflammation', definition: 'Persistent inflammation promoting cancer' }, { term: 'metastatic niche', definition: 'Favorable site for cancer cell colonization' }, { term: 'seed and soil hypothesis', definition: 'Theory explaining metastatic site preferences' }, { term: 'pre-metastatic niche', definition: 'Site prepared for metastasis by primary tumor' }],
      clinicalNotes: 'Colitis-associated cancer has different molecular features than sporadic colorectal cancer. Aspirin and NSAIDs reduce colorectal cancer risk by suppressing inflammation. Primary tumors can prepare distant sites for metastasis by establishing pre-metastatic niches.'
    },
    5: {
      level: 5,
      summary: 'Expert knowledge encompasses systems-level understanding of carcinogenesis including tissue ecology, evolutionary dynamics, and cancer-host interactions.',
      explanation: 'Modern carcinogenesis models view cancer as an ecosystem where diverse cell populations interact. Mathematical models of evolutionary dynamics predict emergence of resistance. Cancer cells can induce senescence in neighboring cells, which paradoxically support tumor growth through the senescence-associated secretory phenotype. Circulating tumor cells must survive anoikis, evade immune surveillance, extravasate, and establish metastatic colonies - most circulating cells fail these steps, making metastasis inefficient but lethal. Single-cell lineage tracing reveals clonal dynamics during tumor evolution.',
      keyTerms: [{ term: 'tumor ecosystem', definition: 'Complex interactions between cancer and surrounding cells' }, { term: 'cellular senescence', definition: 'Permanent growth arrest of damaged cells' }, { term: 'SASP', definition: 'Senescence-associated secretory phenotype' }, { term: 'anoikis', definition: 'Cell death from loss of attachment' }, { term: 'metastatic cascade', definition: 'Multi-step process of cancer spread' }, { term: 'lineage tracing', definition: 'Tracking cell descendants over time' }, { term: 'neutral evolution', definition: 'Genetic drift without selection pressure' }],
      clinicalNotes: 'Senolytic drugs targeting senescent cells are being developed for cancer prevention. Understanding that most metastatic attempts fail suggests targeting the metastatic cascade could be highly effective. Neutral evolution (random genetic drift) vs. selection-driven evolution has implications for interpreting genetic heterogeneity. Multi-region sequencing distinguishes truncal (early) from branch (late) mutations.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'what-is-cancer', targetType: 'concept', relationship: 'related' }, { targetId: 'staging-explained', targetType: 'concept', relationship: 'related' }, { targetId: 'grading-explained', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
