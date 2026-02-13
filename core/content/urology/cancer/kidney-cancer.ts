/**
 * Kidney Cancer - Educational Content
 */

import { EducationalContent } from '../../types';

export const kidneyCancer: EducationalContent = {
  id: 'cancer-kidney-cancer',
  type: 'condition',
  name: 'Kidney Cancer',
  alternateNames: ['Renal Cell Carcinoma', 'RCC', 'Kidney Tumor'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney cancer is a growth in the kidney that is often found by accident during scans done for other reasons.',
      explanation: `Kidney cancer is one of the more common cancers, and many are found early when treatment is very effective.

**How It's Usually Found:**
- Often no symptoms at first
- Found on CT or ultrasound done for other reasons
- Called "incidental" finding

**Possible Symptoms (if present):**
- Blood in urine
- Pain in your side that doesn't go away
- A lump in your side or belly
- Weight loss
- Fatigue

**Risk Factors:**
- Smoking
- Obesity
- High blood pressure
- Family history

**Treatment:**
- Small tumors may be watched or ablated
- Larger tumors usually need surgery
- Surgery often removes only part of the kidney
- Outcomes are generally good when caught early`,
      keyTerms: [
        { term: 'kidney cancer', definition: 'Cancer that starts in the kidney' },
        { term: 'incidental', definition: 'Found unexpectedly during tests for something else' },
        { term: 'ablation', definition: 'Destroying tumor with heat or cold without surgery' },
      ],
      analogies: [
        'Finding kidney cancer incidentally is like discovering a problem during a routine home inspection.',
      ],
      examples: [
        'About 60% of kidney cancers are now found incidentally on imaging done for other reasons.',
      ],
    },
    2: {
      level: 2,
      summary: 'Renal cell carcinoma (RCC) is the most common kidney cancer, managed based on size, stage, and pathologic subtype, with nephron-sparing surgery preferred when feasible.',
      explanation: `## Types

**Clear Cell RCC (70-80%):**
- Most common subtype
- VHL gene inactivation
- Responds to targeted therapy

**Papillary RCC (10-15%):**
- Type 1 and Type 2
- Type 2 more aggressive

**Chromophobe RCC (5%):**
- Better prognosis
- Related to oncocytoma

**Oncocytoma:**
- Benign tumor
- May be hard to distinguish from RCC

## Staging

**T1a:** ≤4 cm, limited to kidney
**T1b:** >4-7 cm, limited to kidney
**T2a:** >7-10 cm, limited to kidney
**T2b:** >10 cm, limited to kidney
**T3:** Into major veins or perinephric fat
**T4:** Beyond Gerota's fascia

## Workup

**Imaging:**
- CT or MRI with contrast
- Chest CT for staging
- Consider bone scan if symptoms

**Biopsy:**
- May be indicated for small masses
- Before ablation
- Systemic treatment decisions

## Treatment by Stage

**Small Renal Mass (≤4 cm):**
- Active surveillance (older patients)
- Ablation (cryotherapy, RFA)
- Partial nephrectomy (gold standard)

**Larger Tumors:**
- Partial nephrectomy if feasible
- Radical nephrectomy
- Robotic/laparoscopic preferred

**Metastatic:**
- Cytoreductive nephrectomy (select cases)
- Systemic therapy`,
      keyTerms: [
        { term: 'RCC', definition: 'Renal cell carcinoma - most common kidney cancer' },
        { term: 'partial nephrectomy', definition: 'Removing tumor while preserving normal kidney' },
        { term: 'cytoreductive nephrectomy', definition: 'Removing primary tumor even with metastatic disease' },
      ],
      analogies: [
        'Partial nephrectomy is like removing a bad spot from an apple while saving the rest.',
      ],
    },
    3: {
      level: 3,
      summary: 'RCC management requires understanding molecular pathways, surgical planning for complex cases, and integration of systemic therapies.',
      explanation: `## Molecular Pathways

**Clear Cell RCC:**
- VHL gene inactivation
- HIF accumulation
- VEGF and mTOR pathway activation
- Basis for targeted therapy

**Hereditary Syndromes:**
- VHL syndrome: Clear cell RCC
- Hereditary papillary: Type 1 papillary
- BHD: Chromophobe, oncocytoma
- HLRCC: Type 2 papillary (aggressive)

## Surgical Considerations

**Partial Nephrectomy:**
- Preferred when feasible
- Same oncologic outcomes as radical
- Preserves renal function
- Reduces CKD and CV mortality

**Complex Cases:**
- Hilar tumors
- Endophytic tumors
- Multiple tumors
- Solitary kidney

**IVC Thrombus:**
- Level 0-IV classification
- Surgical extraction
- May need cardiac bypass

## Ablative Therapies

**Cryotherapy:**
- Ice ball formation
- -40°C tissue destruction
- Percutaneous or laparoscopic

**Radiofrequency Ablation:**
- Thermal destruction
- Better for smaller tumors
- Percutaneous

**Microwave Ablation:**
- Faster, larger ablation zones
- Emerging technique

## Systemic Therapy

**First-Line Metastatic:**
- IO/IO: Nivolumab + Ipilimumab
- IO/TKI: Pembrolizumab + Axitinib
- TKI alone: Sunitinib, Pazopanib

**Risk Stratification (IMDC):**
- Favorable, intermediate, poor risk
- Guides treatment selection

**Response Assessment:**
- RECIST criteria
- Pseudoprogression with IO`,
      keyTerms: [
        { term: 'VHL', definition: 'Von Hippel-Lindau gene - key driver of clear cell RCC' },
        { term: 'IMDC', definition: 'International Metastatic RCC Database Consortium - risk model' },
        { term: 'TKI', definition: 'Tyrosine kinase inhibitor - targeted therapy for RCC' },
      ],
      clinicalNotes: 'Partial nephrectomy is associated with better long-term renal function and reduced cardiovascular mortality. Prioritize nephron-sparing when oncologically safe.',
    },
    4: {
      level: 4,
      summary: 'Advanced RCC management includes complex surgery, perioperative therapy, and optimizing systemic treatment sequencing.',
      explanation: `## Complex Surgical Scenarios

**IVC Tumor Thrombus:**
- Level I: Below hepatic veins, infrahepatic control
- Level II: At/below hepatic veins
- Level III: Above hepatic veins, intrahepatic
- Level IV: Into right atrium, requires bypass

**Surgical Planning:**
- MRI for thrombus extent
- Multidisciplinary with cardiac surgery
- Preoperative embolization controversial
- Neoadjuvant therapy investigational

## Perioperative Therapy

**Adjuvant:**
- Pembrolizumab approved for high-risk RCC
- Based on KEYNOTE-564
- DFS improvement

**Neoadjuvant:**
- Under investigation
- May downstage tumors
- Response assessment challenges

## Active Surveillance

**Appropriate For:**
- Small renal masses (<4 cm)
- Older patients
- Significant comorbidities
- Competing mortality risks

**Protocol:**
- Imaging every 3-6 months initially
- Delayed intervention if progression
- Most grow slowly (<0.5 cm/year)

## Ablation vs Surgery

**Ablation Advantages:**
- Minimally invasive
- Shorter recovery
- Repeat treatment possible

**Limitations:**
- Higher local recurrence
- No pathology (unless biopsy)
- Size limitations

## Metastatic Disease Management

**Cytoreductive Nephrectomy:**
- Historically standard
- Now more selective
- CARMENA and SURTIME trials
- Consider for good-risk patients

**Treatment Sequencing:**
- IO-based first-line preferred
- TKI second-line
- mTOR inhibitors third-line
- Clinical trials throughout`,
      keyTerms: [
        { term: 'caval thrombus', definition: 'Tumor extension into inferior vena cava' },
        { term: 'adjuvant therapy', definition: 'Treatment given after surgery to reduce recurrence' },
        { term: 'CARMENA', definition: 'Trial evaluating cytoreductive nephrectomy in metastatic RCC' },
      ],
      clinicalNotes: 'Cytoreductive nephrectomy is no longer standard for all metastatic RCC. Reserve for good-risk patients or those with excellent response to initial systemic therapy.',
    },
    5: {
      level: 5,
      summary: 'Expert RCC care encompasses hereditary syndromes, biomarker development, and personalized treatment strategies.',
      explanation: `## Hereditary RCC Syndromes

**Screening Indications:**
- Age <46 at diagnosis
- Bilateral/multifocal tumors
- Family history
- Specific histologic features

**Management Implications:**
- Enhanced surveillance
- Nephron-sparing imperative
- Family screening
- Syndrome-specific treatment

## Biomarker Development

**Predictive Markers:**
- Tumor PD-L1 expression (imperfect)
- Gene expression signatures
- TMB (tumor mutation burden)

**Minimal Residual Disease:**
- ctDNA detection
- Post-surgical monitoring
- Guide adjuvant decisions

## Emerging Therapies

**HIF-2α Inhibitors:**
- Belzutifan (MK-6482)
- Approved for VHL-associated tumors
- Under study for sporadic RCC

**Novel Combinations:**
- IO triplets
- IO + HIF inhibitors
- Bispecific antibodies

## Rare Subtypes

**Collecting Duct:**
- Aggressive behavior
- Platinum-based chemotherapy
- Poor prognosis

**Medullary:**
- Sickle trait association
- Young patients
- Very aggressive

**Translocation RCC:**
- TFE3 or TFEB fusions
- Children and young adults
- Variable behavior

## Quality of Life

**Renal Function Preservation:**
- Long-term CKD prevention
- Cardiovascular protection
- Quality over quantity of kidney removed

**Survivorship:**
- Surveillance protocols
- Late recurrence possible
- Chronic disease model for metastatic

## Multidisciplinary Care

**Tumor Board:**
- Complex cases
- Hereditary syndromes
- Metastatic management

**Integration:**
- Medical oncology
- Interventional radiology
- Genetics counseling
- Nephrology`,
      keyTerms: [
        { term: 'belzutifan', definition: 'HIF-2 alpha inhibitor for VHL-associated tumors' },
        { term: 'collecting duct carcinoma', definition: 'Rare aggressive RCC subtype arising from collecting ducts' },
        { term: 'translocation RCC', definition: 'RCC with TFE3 or TFEB gene fusions' },
      ],
      clinicalNotes: 'Belzutifan represents a new treatment paradigm for VHL disease. FDA approved for VHL-associated RCC and CNS hemangioblastomas not requiring immediate surgery.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-rcc',
      type: 'article',
      title: 'Renal Mass and Localized Renal Cancer',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'structure-urinary-system-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary System' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['cancer', 'oncology'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyCancer;
