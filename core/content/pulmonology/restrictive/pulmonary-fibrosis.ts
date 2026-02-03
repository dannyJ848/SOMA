import { EducationalContent } from '../../types';

export const pulmonaryFibrosis: EducationalContent = {
  id: 'pulm-restrictive-pulmonary-fibrosis',
  type: 'condition',
  name: 'Pulmonary Fibrosis',
  nameEs: 'Fibrosis Pulmonar',
  alternateNames: ['Idiopathic Pulmonary Fibrosis', 'IPF', 'Interstitial Lung Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary fibrosis is a condition where the lungs become scarred and stiff, making it harder and harder to take a deep breath.',
      explanation: 'The lungs develop scar tissue that replaces normal stretchy lung tissue. This makes the lungs stiff so they cannot expand fully. People feel progressively more short of breath, especially with activity. The cause is often unknown (idiopathic). There is no cure, but medications can slow the scarring.',
      keyTerms: [{ term: 'Fibrosis', definition: 'Scarring that replaces normal tissue' }, { term: 'Idiopathic', definition: 'When the cause is unknown' }],
      analogies: ['Imagine a sponge that slowly turns into a brick -- it can no longer absorb or expand'],
      patientCounselingPoints: ['Stay active with pulmonary rehabilitation', 'Supplemental oxygen helps when blood oxygen drops']
    },
    2: {
      level: 2,
      summary: 'Pulmonary fibrosis involves progressive scarring of lung interstitium causing restrictive physiology with reduced lung volumes and impaired gas exchange.',
      explanation: 'IPF is the most common idiopathic interstitial pneumonia, affecting older adults (>60). Spirometry shows restrictive pattern: reduced FVC with normal or elevated FEV1/FVC ratio. DLCO is reduced early. HRCT shows usual interstitial pneumonia (UIP) pattern with basilar honeycombing and traction bronchiectasis. Antifibrotic drugs (pirfenidone, nintedanib) slow FVC decline.',
      keyTerms: [{ term: 'DLCO', definition: 'Diffusing capacity for carbon monoxide, measures gas transfer efficiency' }, { term: 'Honeycombing', definition: 'Clustered thick-walled cysts on CT representing end-stage fibrosis' }],
      examples: ['A 65-year-old with progressive exertional dyspnea and bibasilar Velcro crackles on exam']
    },
    3: {
      level: 3,
      summary: 'IPF results from aberrant wound healing with fibroblast-to-myofibroblast differentiation and excessive extracellular matrix deposition in the lung interstitium.',
      explanation: 'Pathogenesis: repetitive alveolar epithelial microinjury triggers TGF-beta signaling, fibroblast proliferation, and myofibroblast differentiation. Fibroblastic foci are the histologic hallmark. UIP pattern requires basilar/subpleural predominance with honeycombing. Diagnosis via multidisciplinary discussion (MDD) integrating clinical, radiological, and pathological data. GAP index (Gender, Age, Physiology) predicts mortality. Acute exacerbations carry >50% mortality.',
      keyTerms: [{ term: 'UIP', definition: 'Usual interstitial pneumonia pattern: spatial and temporal heterogeneity with subpleural fibrosis' }, { term: 'Fibroblastic Foci', definition: 'Clusters of actively proliferating fibroblasts representing sites of ongoing fibrogenesis' }],
      clinicalNotes: 'Surgical lung biopsy is rarely needed when HRCT shows definite UIP pattern; MDD improves diagnostic accuracy to >90%.'
    },
    4: {
      level: 4,
      summary: 'IPF pathobiology involves telomere shortening, senescent epithelial cells, dysregulated surfactant processing, and epigenetic reprogramming driving progressive fibrogenesis.',
      explanation: 'Genetic risk: MUC5B promoter variant (rs35705950) confers 5-20x risk; telomere-related gene mutations (TERT, TERC, RTEL1) in familial cases. Senescent type II alveolar epithelial cells secrete SASP factors perpetuating fibrosis. TOLLIP variants predict pirfenidone response. Progressive fibrosing ILD phenotype extends antifibrotic use beyond IPF to systemic sclerosis-ILD, hypersensitivity pneumonitis, and unclassifiable ILD (INBUILD trial).',
      keyTerms: [{ term: 'Telomere Shortening', definition: 'Premature telomere attrition in alveolar epithelial cells predisposing to IPF and accelerated lung aging' }, { term: 'Progressive Fibrosing ILD', definition: 'Phenotype of self-sustaining fibrosis across multiple ILD subtypes responding to antifibrotics' }],
      clinicalNotes: 'Screen IPF patients for telomere length before lung transplant -- short telomeres predict post-transplant cytopenias with standard immunosuppression.'
    },
    5: {
      level: 5,
      summary: 'Emerging IPF therapies target senolytic pathways, Hedgehog/Wnt signaling, mechanotransduction, and regenerative approaches including lung organoids and ex vivo lung perfusion.',
      explanation: 'Single-cell RNA-seq identifies aberrant basaloid cells (KRT17+/KRT5-) at the fibrotic front as key disease drivers. Senolytic combination (dasatinib + quercetin) showed improved physical function in phase 1 (JUSTICE trial). Pamrevlumab (anti-CTGF) and BI 1015550 (PDE4B inhibitor) in phase 3 trials. Lung-on-chip and organoid models enable patient-specific drug testing. Machine learning on HRCT quantitative features predicts progression better than PFTs alone.',
      keyTerms: [{ term: 'Aberrant Basaloid Cells', definition: 'Novel pathologic cell population at fibrotic interface expressing both basal and mesenchymal markers' }, { term: 'Senolytics', definition: 'Drugs that selectively eliminate senescent cells to reduce SASP-driven fibrosis' }],
      clinicalNotes: 'BI 1015550 (nerandomilast) phase 3 FIBRONEER-IPF showed significant reduction in FVC decline; may become third approved antifibrotic.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'pulm-restrictive-sarcoidosis', targetType: 'condition', relationship: 'sibling', label: 'Sarcoidosis' },
    { targetId: 'pulm-critical-care-mechanical-ventilation', targetType: 'topic', relationship: 'related', label: 'Mechanical Ventilation' }
  ],
  tags: { systems: ['respiratory'], topics: ['pulmonology', 'restrictive', 'interstitial'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
