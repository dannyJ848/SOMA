/**
 * Gastric Acid Secretion - Comprehensive Educational Content
 *
 * Covers parietal cell physiology, HCl production, regulation by
 * gastrin/histamine/ACh, phases of secretion, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const gastricAcidSecretion: EducationalContent = {
  id: 'physiology-gastric-acid-secretion',
  type: 'process',
  name: 'Gastric Acid Secretion',
  nameEs: 'Secrecion de Acido Gastrico',
  alternateNames: ['HCl Secretion', 'Parietal Cell Function', 'Gastric Acid Production'],

  levels: {
    1: {
      level: 1,
      summary: 'Your stomach makes a strong acid called hydrochloric acid that helps break down food and kill germs you swallow.',
      explanation: `## How Your Stomach Makes Acid

Your stomach produces powerful acid every time you eat:
1. **Break down food**: Acid dissolves tough proteins like meat
2. **Kill germs**: Bacteria and viruses are destroyed by strong acid
3. **Activate helpers**: Acid turns on enzymes that digest food

Stomach acid has a pH of about **1-2**. A thick **mucus** layer protects the stomach walls.

### When Does Your Stomach Make Acid?

1. **Before you eat**: Thinking about or smelling food starts production
2. **While you eat**: Food triggers the most acid
3. **After food moves on**: Signals tell your stomach to slow down

### What Happens When Things Go Wrong?

- **Too much acid** can cause a **stomach ulcer**
- **Heartburn** happens when acid splashes into your esophagus
- **Antacids** neutralize extra acid`,
      keyTerms: [
        { term: 'hydrochloric acid', definition: 'The strong acid your stomach makes to digest food and kill germs', pronunciation: 'HY-droh-KLOR-ik' },
        { term: 'mucus', definition: 'A thick coating protecting your stomach lining from acid' },
        { term: 'ulcer', definition: 'A painful sore caused by acid eating through the protective lining' },
        { term: 'pH', definition: 'A scale measuring acidity; lower numbers mean more acidic' },
      ],
      analogies: [
        'Stomach acid dissolves food like dish soap dissolves grease.',
        'The mucus lining is like a non-stick coating keeping acid from damaging the wall.',
        'Acid production is like a factory ramping up when orders arrive.',
      ],
      examples: [
        'When you smell pizza, your stomach starts making acid before you take a bite.',
        'The burning feeling when you vomit is from stomach acid coming up.',
        'People with heartburn take antacids like Tums to neutralize extra acid.',
      ],
      patientCounselingPoints: [
        'Smaller meals reduce acid production.',
        'Most ulcers are caused by H. pylori or NSAIDs, not stress.',
        'Spicy foods do not cause ulcers but can worsen heartburn.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gastric acid is produced by parietal cells, regulated by gastrin, histamine, and acetylcholine, with secretion in cephalic, gastric, and intestinal phases.',
      explanation: `## Gastric Acid Secretion

### The Parietal Cell

**Parietal cells** in the stomach body/fundus produce:
- **HCl**: pH ~1, about 2 liters/day
- **Intrinsic factor**: Required for vitamin B12 absorption

### How HCl Is Made

The **H+/K+ ATPase** (proton pump):
1. CO2 + H2O -> H2CO3 via carbonic anhydrase
2. H2CO3 -> H+ + HCO3-
3. H+ pumped into lumen (exchanged for K+)
4. Cl- follows through separate channel
5. HCO3- exits into blood ("alkaline tide")

### Three Stimulators

| Stimulator | Source | Receptor | Mechanism |
|-----------|--------|----------|-----------|
| Acetylcholine | Vagus nerve | M3 | Calcium |
| Gastrin | G cells | CCK-B | Calcium |
| Histamine | ECL cells | H2 | cAMP |

### Phases

- **Cephalic (30%)**: Sight/smell/taste; vagus mediated
- **Gastric (60%)**: Distension, peptides; gastrin mediated
- **Intestinal (10%)**: Mostly inhibitory

### Inhibition and Protection

- **Somatostatin** (D cells), **secretin**, low pH feedback
- **Mucus-bicarbonate barrier**, **prostaglandins** (PGE2), epithelial renewal`,
      keyTerms: [
        { term: 'parietal cell', definition: 'Stomach cell making HCl and intrinsic factor', pronunciation: 'pah-RYE-eh-tal' },
        { term: 'proton pump', definition: 'H+/K+ ATPase pumping H+ into the stomach lumen' },
        { term: 'gastrin', definition: 'G cell hormone stimulating acid secretion' },
        { term: 'intrinsic factor', definition: 'Parietal cell protein essential for B12 absorption' },
        { term: 'ECL cell', definition: 'Enterochromaffin-like cell releasing histamine' },
        { term: 'somatostatin', definition: 'D cell hormone inhibiting acid secretion' },
      ],
      analogies: [
        'The proton pump is a revolving door pushing H+ out while pulling K+ in.',
        'Three stimulators are like three gas pedals -- all together is fastest.',
        'Somatostatin is the brakes on acid production.',
      ],
      examples: [
        'H2 blockers (famotidine) reduce acid ~70%.',
        'PPIs (omeprazole) block the proton pump, reducing acid >90%.',
        'Pernicious anemia results from autoimmune parietal cell destruction.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gastric HCl secretion involves H+/K+ ATPase activation via convergent ACh/M3/Ca2+, gastrin/CCK-B/Ca2+, and histamine/H2/cAMP signaling with prostaglandin-dependent mucosal defense.',
      explanation: `## Gastric Acid Secretion Physiology

### Parietal Cell Activation

**Resting:** H+/K+ ATPase on intracellular tubulovesicles; canalicular membrane collapsed.
**Stimulated:** Tubulovesicles fuse with apical membrane (6-10x surface area increase). Generates >10^6-fold H+ gradient.

### Signaling Convergence

**Ca2+ pathway (ACh, gastrin):** M3/CCK-B -> PLC -> IP3 + DAG -> Ca2+ release -> vesicle fusion
**cAMP pathway (histamine):** H2 -> Gs -> AC -> cAMP -> PKA -> vesicle fusion
**Potentiation:** Sub-threshold combined stimuli produce maximal secretion; cAMP potentiates Ca2+.

### ECL Cell Axis and Gastrin Regulation

Gastrin (CCK-B) stimulates ECL histamine release. HDC converts histidine to histamine.
**Stimuli:** GRP (vagal), luminal amino acids, distension. **Inhibitors:** pH <2 -> D cell somatostatin (SST2).
H. pylori CagA disrupts D cell somatostatin -> hypergastrinemia.

### Mucosal Defense

- MUC5AC/MUC6 mucus with HCO3- (pH gradient 1 to 7)
- COX-1/PGE2: mucus, HCO3-, blood flow; NSAIDs -> injury
- TFF1-3/EGF mediate epithelial restitution

### Pathophysiology

**H. pylori:** Antral -> increased acid/DU; corpus -> decreased acid/GU/atrophy
**Correa cascade:** Gastritis -> atrophy -> metaplasia -> dysplasia -> adenocarcinoma`,
      keyTerms: [
        { term: 'tubulovesicles', definition: 'Intracellular vesicles with H+/K+ ATPase that fuse with apical membrane on stimulation' },
        { term: 'potentiation', definition: 'Synergistic amplification where sub-threshold stimuli together produce maximal output' },
        { term: 'gastrin-releasing peptide', definition: 'Vagal neuropeptide stimulating G cell gastrin release' },
        { term: 'trefoil peptides', definition: 'TFF1-3 promoting rapid epithelial restitution' },
        { term: 'ECL hyperplasia', definition: 'ECL proliferation from chronic hypergastrinemia' },
        { term: 'Correa cascade', definition: 'Gastric cancer progression: gastritis -> atrophy -> metaplasia -> dysplasia -> cancer' },
      ],
      clinicalNotes: 'PPIs block the final common pathway (proton pump), superior to H2 blockers. H. pylori eradication restores somatostatin-gastrin feedback. ZES: fasting gastrin >1000 with pH <2; secretin test shows paradoxical gastrin rise.',
    },
    4: {
      level: 4,
      summary: 'Advanced gastric acid physiology integrates SNARE-mediated parietal cell trafficking, convergent Ca2+/cAMP signaling, the ECL-G-D neuroendocrine network, H. pylori CagA/VacA pathogenesis, and PPI vs. P-CAB pharmacology.',
      explanation: `## Advanced Gastric Acid Physiology

### Parietal Cell Molecular Biology

**Trafficking:** Rab11a+ vesicles; SNARE fusion (VAMP2, syntaxin 3, SNAP-25); ezrin/PKA actin reorganization.
**H+/K+ ATPase:** Alpha (ATP4A, 114 kDa, 10 TM); beta (ATP4B, glycosylated). PPIs bind Cys813 (universal) + variable Cys321/892.
**Ion transport:** Basolateral AE2 (HCO3- export), NKCC1 (Cl- entry); Apical KCNQ1/KCNE2 (K+ recycling), ClC-2 (Cl-).

### Neuroendocrine Network

**G cells:** CaSR/GPR92 sense luminal peptides. Gastrin acts on ECL >> parietal directly.
**D cell axis:** Tonic somatostatin via SST2. H. pylori CagA disrupts D cell somatostatin.
**ECL cells:** Gastrin upregulates HDC. CgA in granules (serum biomarker for NETs).

### H. pylori Pathogenesis

**CagA:** T4SS injection; Src/Abl phosphorylation -> SHP-2/Ras/ERK; non-phospho disrupts Par1b/MARK2.
**VacA:** Mitochondrial toxicity; parietal cell disruption. **Urease:** NH3 for acid neutralization.
**Patterns:** Antral -> increased acid/DU; corpus -> decreased acid/GU/atrophy; pan -> cancer.

### Pharmacology

**PPIs:** Acid-activated sulfenamide -> covalent Cys binding; irreversible; pump t1/2 ~54h; steady-state 3-5d; ECL hyperplasia/rebound.
**P-CABs (vonoprazan):** Reversible K+-competitive; CYP2C19-independent; PHALCON-HP: 84.7% vs PPI 78.8%.
**H2 blockers:** Competitive; tachyphylaxis 1-2 weeks; 60-70% reduction.`,
      keyTerms: [
        { term: 'KCNQ1/KCNE2', definition: 'Apical K+ channel recycling K+ for proton pump; mutations cause long QT' },
        { term: 'CagA', definition: 'H. pylori effector via T4SS activating SHP-2/Ras/ERK and disrupting polarity' },
        { term: 'vonoprazan', definition: 'P-CAB reversibly inhibiting H+/K+ ATPase without acid activation' },
        { term: 'chromogranin A', definition: 'ECL granule protein; serum biomarker for NETs' },
        { term: 'alkaline tide', definition: 'Post-prandial HCO3- rise from basolateral AE2 export' },
        { term: 'SST2 receptor', definition: 'Somatostatin receptor mediating G cell inhibition' },
      ],
      clinicalNotes: 'PPI rebound lasts 2-4 weeks; taper recommended. CgA from PPIs confounds NET workup -- stop 2 weeks prior. Vonoprazan benefits CYP2C19 extensive metabolizers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary gastric acid physiology integrates cryo-EM H+/K+ ATPase structure, CYP2C19 pharmacogenomics, CagA EPIYA oncogenesis, ECL surveillance, P-CAB therapeutics, and CLDN18.2-targeted gastric cancer therapy.',
      explanation: `## Precision Gastric Acid Physiology

### H+/K+ ATPase Structure

**Cryo-EM (2020):** E2P state; cation binding TM4-6. PPI: Cys813 (all) + Cys892 (omeprazole) or Cys321 (lansoprazole).
**CYP2C19:** PM (*2/*2) 2-4x PPI exposure; 15-20% Asian, 2-5% Caucasian. Vonoprazan is CYP2C19-independent.

### ECL Surveillance

**Solcia:** Linear -> micronodular -> adenomatoid -> dysplasia/NET.
**NET types:** Type 1 (autoimmune gastritis, 70-80%); Type 2 (ZES/MEN1); Type 3 (sporadic, highest risk).

### H. pylori Oncogenesis

**EPIYA:** Western ABCC vs East Asian ABD; ABD has higher SHP-2 affinity/cancer risk.
**Microbiome:** PPIs alter flora; SIBO; C. difficile OR 1.7-2.0.

### PPI Safety and Emerging Therapy

**Established risks:** C. difficile, hypomagnesemia, B12 malabsorption. **Uncertain:** Fracture, CKD, dementia.
**P-CABs:** Vonoprazan (FDA 2022), tegoprazan, keverprazan.
**CLDN18.2:** Zolbetuximab for HER2-neg gastric cancer (SPOTLIGHT/GLOW 2023).`,
      keyTerms: [
        { term: 'CYP2C19 polymorphism', definition: 'Genetic PPI metabolism variation affecting acid suppression efficacy' },
        { term: 'EPIYA motif', definition: 'CagA motifs; East Asian ABD has higher cancer risk' },
        { term: 'CLDN18.2', definition: 'Gastric Claudin 18.2; target of zolbetuximab for gastric cancer' },
        { term: 'P-CAB', definition: 'Potassium-competitive acid blocker; CYP2C19-independent' },
        { term: 'Solcia classification', definition: 'ECL hyperplasia grading system' },
        { term: 'zolbetuximab', definition: 'Anti-CLDN18.2 mAb for gastric cancer' },
      ],
      clinicalNotes: `1) CYP2C19 genotyping optimizes eradication. 2) Vonoprazan bypasses CYP2C19. 3) PPI concerns are observational; de-prescribing matters. 4) CLDN18.2 enables precision gastric oncology. 5) ECL monitoring in autoimmune gastritis/ZES.`,
    },
  },

  media: [
    { id: 'parietal-cell-mechanism', type: 'diagram', filename: 'parietal-cell-acid-secretion.svg',
      title: 'Parietal Cell Acid Secretion', description: 'H+/K+ ATPase, ion channels, and signaling pathways' },
    { id: 'acid-regulation-network', type: 'diagram', filename: 'gastric-acid-regulation.svg',
      title: 'Neuroendocrine Regulation', description: 'Vagus, G, D, ECL, parietal cell network' },
  ],

  citations: [
    { id: 'boron-gi', type: 'textbook', title: 'Medical Physiology', authors: ['Boron WF', 'Boulpaep EL'], source: 'Elsevier', chapter: '42-43' },
    { id: 'guyton-gi', type: 'textbook', title: 'Guyton and Hall Textbook of Medical Physiology', authors: ['Hall JE', 'Hall ME'], source: 'Elsevier', chapter: '64-65' },
  ],

  crossReferences: [
    { targetId: 'physiology-gi-secretion', targetType: 'topic', relationship: 'sibling', label: 'GI Secretion' },
    { targetId: 'physiology-nutrient-absorption', targetType: 'topic', relationship: 'related', label: 'Nutrient Absorption' },
    { targetId: 'condition-peptic-ulcer', targetType: 'condition', relationship: 'see-also', label: 'Peptic Ulcer Disease' },
    { targetId: 'condition-gerd', targetType: 'condition', relationship: 'see-also', label: 'GERD' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['physiology', 'gastroenterology', 'pharmacology'],
    keywords: ['gastric acid', 'HCl', 'parietal cell', 'proton pump', 'PPI', 'H. pylori', 'gastrin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gastricAcidSecretion;
