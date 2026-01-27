/**
 * Pancreatic Cancer - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const pancreaticCancer: EducationalContent = {
  id: 'condition-pancreatic-cancer',
  type: 'condition',
  name: 'Pancreatic Cancer',
  alternateNames: ['Pancreatic Adenocarcinoma', 'Pancreatic Carcinoma', 'PDAC'],
  hpoId: 'HP:0100598',

  levels: {
    1: {
      level: 1,
      summary: 'Pancreatic cancer is a serious cancer that starts in the pancreas, an organ behind the stomach. It is often found late because symptoms are vague.',
      explanation: `Pancreatic cancer begins in the pancreas, an organ behind the stomach that helps digest food and control blood sugar. It is often difficult to detect early because symptoms are vague.

**What is the pancreas?**
- An organ behind the stomach
- Makes enzymes for digestion
- Makes hormones like insulin
- About 6 inches long

**Warning signs:**
- Yellowing of skin and eyes (jaundice)
- Abdominal or back pain
- Unexplained weight loss
- Loss of appetite
- New-onset diabetes
- Digestive problems

**Risk factors:**
- Smoking
- Obesity
- Diabetes (especially new-onset)
- Chronic pancreatitis
- Family history
- Age over 65

**Treatment:**
- Surgery if detected early enough
- Chemotherapy
- Radiation therapy
- Targeted therapy for some cases`,
      keyTerms: [
        { term: 'pancreas', definition: 'An organ that makes enzymes for digestion and hormones like insulin' },
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from bile buildup' },
        { term: 'tumor', definition: 'An abnormal mass of tissue that can be cancerous' },
      ],
      analogies: ['The pancreas is hidden deep in the abdomen, so pancreatic cancer is like a silent intruder—hard to detect until it causes problems.'],
      examples: ['A 68-year-old smoker develops jaundice and back pain. Imaging reveals a mass in the pancreas.'],
    },
    2: {
      level: 2,
      summary: 'Pancreatic ductal adenocarcinoma (PDAC) accounts for 90% of cases, with smoking, diabetes, and hereditary syndromes as risk factors. Prognosis is poor due to late presentation.',
      explanation: `## Types
- Pancreatic ductal adenocarcinoma (PDAC): 90%
- Neuroendocrine tumors: 5%
- Other: Cystic neoplasms, acinar cell carcinoma

## Anatomy
- Head: 70-80% of tumors, causes jaundice early
- Body/Tail: 20-30%, presents later, worse prognosis
- Uncinate process: vascular involvement common

## Risk Factors
**Modifiable:**
- Smoking (doubles risk)
- Obesity
- Chronic pancreatitis
- Heavy alcohol use

**Non-modifiable:**
- Age >65
- Male gender
- African American ethnicity
- Family history
- Hereditary syndromes (BRCA, PALB2, Peutz-Jeghers, Lynch, FAMMM)

## Presentation
- Painless jaundice (head lesion)
- Epigastric pain radiating to back
- Weight loss, anorexia
- New-onset diabetes (in older adult)
- Migratory thrombophlebitis (Trousseau sign)

## Diagnosis
- CT abdomen with pancreatic protocol
- CA 19-9 tumor marker (non-diagnostic)
- EUS with FNA for tissue diagnosis
- MRI for equivocal cases or liver lesions`,
      keyTerms: [
        { term: 'PDAC', definition: 'Pancreatic ductal adenocarcinoma; most common pancreatic cancer' },
        { term: 'CA 19-9', definition: 'Carbohydrate antigen 19-9; tumor marker for pancreatic cancer' },
        { term: 'FNA', definition: 'Fine needle aspiration; biopsy using thin needle' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pancreatic cancer staging determines resectability (resectable, borderline resectable, locally advanced, metastatic), with surgery offering the only chance for cure.',
      explanation: `## Staging and Resectability

**Resectable:**
- No arterial contact (celiac, SMA, CHA)
- No metastases
- Up to 180° SMV/PV contact

**Borderline Resectable:**
- SMA contact ≤180°
- CHA contact or short encasement
- SMV/PV contact with reconstructable
- No metastases

**Locally Advanced:**
- SMA contact >180°
- Celiac abutment >180°
- Unreconstructable SMV/PV
- No metastases

**Metastatic:**
- Distant metastases (liver, peritoneum, lung)

## Treatment by Stage

**Resectable:**
- Surgery first (Whipple procedure)
- Adjuvant chemotherapy (FOLFIRINOX or gemcitabine + capecitabine)

**Borderline Resectable:**
- Neoadjuvant therapy (FOLFIRINOX)
- Reassess for surgery
- Adjuvant therapy

**Locally Advanced:**
- Chemotherapy (FOLFIRINOX or gem/nab-paclitaxel)
- Chemoradiation for select cases
- Palliative care

**Metastatic:**
- Systemic chemotherapy
- FOLFIRINOX (fit patients)
- Gemcitabine + nab-paclitaxel
- Palliative care integration

## Surgical Procedures
- Whipple (pancreaticoduodenectomy): Head/uncinate
- Distal pancreatectomy: Body/tail
- Total pancreatectomy: Rare
- Palliative bypass for unresectable`,
      keyTerms: [
        { term: 'Whipple procedure', definition: 'Pancreaticoduodenectomy; surgery removing pancreatic head and duodenum' },
        { term: 'FOLFIRINOX', definition: 'Combination chemotherapy: 5-FU, leucovorin, irinotecan, oxaliplatin' },
        { term: 'borderline resectable', definition: 'Tumor borderline between resectable and unresectable; neoadjuvant therapy preferred' },
      ],
      clinicalNotes: 'CA 19-9 is not useful for screening but can monitor treatment response and detect recurrence. About 5-10% of pancreatic cancers have hereditary predisposition.',
    },
    4: {
      level: 4,
      summary: 'Pancreatic cancer management includes molecular profiling for BRCA/PALB2 mutations, MSI status, and NTRK fusions, with PARP inhibitors, immunotherapy, and maintenance therapy options.',
      explanation: `## Molecular Testing
Test all pancreatic cancers for:
- BRCA1/2 and PALB2 mutations (germline and somatic)
- MSI-H/dMMR status
- NTRK fusions
- Consider KRAS G12C (emerging)

## Targeted Therapies
**BRCA/PALB2-Mutated:**
- Olaparib maintenance for metastatic disease
- Platinum-based chemotherapy preferred (FOLFIRINOX)
- PARP inhibitor after response to platinum

**MSI-H/dMMR:**
- Pembrolizumab (tumor-agnostic approval)
- Nivolumab + ipilimumab

**NTRK Fusion:**
- Larotrectinib or entrectinib

**Emerging:**
- KRAS G12C inhibitors (sotorasib, adagrasib)
- KRAS G12D inhibitors (in development)

## Maintenance Therapy
**After 4-6 months of FOLFIRINOX:**
- Continue 5-FU + leucovorin
- Olaparib if BRCA/PALB2 mutated
- Consider treatment break for quality of life

## Supportive Care
**Pancreatic Insufficiency:**
- Pancreatic enzyme replacement
- Fat malabsorption management

**Biliary Obstruction:**
- Metal vs plastic stents
- Surgical bypass for fit patients

**Pain Control:**
- Celiac plexus block
- Opioids, neuropathic agents

**Diabetes Management:**
- New-onset diabetes often improves with resection
- Insulin requirements increase with progression

## Germline Testing
- Offer to all pancreatic cancer patients
- Implications for family members
- BRCA, PALB2, CDKN2A, STK11, mismatch repair genes`,
      keyTerms: [
        { term: 'PARP inhibitor', definition: 'Targeted therapy blocking DNA repair in BRCA-mutated cancers' },
        { term: 'celiac plexus block', definition: 'Procedure to block pain nerves for pancreatic cancer pain' },
        { term: 'germline testing', definition: 'Genetic testing for inherited cancer predisposition' },
      ],
      clinicalNotes: 'Platinum-based chemotherapy followed by PARP inhibitor maintenance has changed outcomes for BRCA/PALB2-mutated pancreatic cancer. Germline testing is recommended for all patients.',
    },
    5: {
      level: 5,
      summary: 'Pancreatic cancer research focuses on early detection strategies, understanding tumor biology and stroma, novel immunotherapies, and targeted approaches against KRAS and other driver mutations.',
      explanation: `## Early Detection
**High-Risk Screening:**
- MRI/MRCP or EUS for high-risk individuals
- BRCA/PALB2, Peutz-Jeghers, hereditary pancreatitis, FAMMM
- Annual screening starting at age 40 (or 10 years before earliest case)
- Challenges: Low prevalence, false positives

**Biomarkers:**
- Circulating tumor DNA
- Exosomes
- Protein signatures
- Combining markers for sensitivity

## Tumor Biology
**KRAS:**
- Mutated in >90% of pancreatic cancers
- G12D, G12V, G12R most common
- "Undruggable" until recently
- Novel inhibitors in development

**Stroma:**
- Desmoplastic reaction
- Creates barrier to drug delivery
- Hedgehog pathway
- Targeting stroma (nab-paclitaxel)

## Emerging Therapies
**KRAS-Targeted:**
- G12C inhibitors (lung data, pancreatic trials)
- G12D inhibitors (MRTX1133)
- SOS inhibitors

**Immunotherapy:**
- Combination checkpoint inhibition
- Cancer vaccines (GVAX)
- Adoptive T-cell therapy
- Overcoming immunosuppressive microenvironment

**Antibody-Drug Conjugates:**
- Mesothelin targeting
- Tissue factor targeting
- Claudin 18.2 targeting

## Precision Medicine
- Molecular subtypes (classical, basal-like)
- Gene expression profiling
- Circulating tumor DNA monitoring
- Adaptive therapy approaches

## Prevention Strategies
- Smoking cessation
- Diabetes management and weight control
- Aspirin chemoprevention (ongoing trials)
- Surveillance of high-risk lesions (IPMN, PanIN)`,
      keyTerms: [
        { term: 'desmoplastic reaction', definition: 'Dense fibrotic stroma characteristic of pancreatic cancer' },
        { term: 'IPMN', definition: 'Intraductal papillary mucinous neoplasm; precursor lesion that can progress to cancer' },
        { term: 'PanIN', definition: 'Pancreatic intraepithelial neoplasia; microscopic precancerous lesion' },
      ],
      clinicalNotes: 'High-risk screening programs detect resectable pancreatic cancer in up to 60% of screened individuals, but population screening is not feasible due to low prevalence.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-pancreatic-2024', type: 'website', title: 'NCCN Guidelines for Pancreatic Adenocarcinoma', source: 'National Comprehensive Cancer Network' },
    { id: 'asco-pancreatic-2024', type: 'website', title: 'ASCO Guidelines for Pancreatic Cancer', source: 'American Society of Clinical Oncology' },
  ],
  crossReferences: [
    { targetId: 'condition-pancreatitis', targetType: 'condition', relationship: 'related', label: 'Pancreatitis' },
    { targetId: 'condition-diabetes', targetType: 'condition', relationship: 'related', label: 'Diabetes Mellitus' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['oncology', 'gastroenterology'], keywords: ['pancreatic cancer', 'PDAC', 'Whipple', 'FOLFIRINOX', 'CA 19-9'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pancreaticCancer;
