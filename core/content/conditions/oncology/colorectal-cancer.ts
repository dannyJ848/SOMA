/**
 * Colorectal Cancer - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const colorectalCancer: EducationalContent = {
  id: 'condition-colorectal-cancer',
  type: 'condition',
  name: 'Colorectal Cancer',
  alternateNames: ['Colon Cancer', 'Rectal Cancer', 'CRC', 'Bowel Cancer'],
  hpoId: 'HP:0003003',

  levels: {
    1: {
      level: 1,
      summary: 'Colorectal cancer starts in the colon or rectum and often grows from polyps. Screening can find it early or prevent it by removing polyps.',
      explanation: `Colorectal cancer is cancer that starts in the colon (large intestine) or rectum. It usually begins as small growths called polyps that can turn into cancer over many years.

**Warning signs:**
- Change in bowel habits
- Blood in stool
- Abdominal pain
- Unexplained weight loss
- Fatigue

**Screening saves lives:**
- Colonoscopy finds and removes polyps
- Stool tests check for hidden blood
- Start screening at age 45 (or earlier with family history)

**Treatment depends on stage:**
- Surgery to remove cancer
- Chemotherapy
- Radiation (mainly rectal cancer)
- Targeted therapies`,
      keyTerms: [
        { term: 'polyp', definition: 'A small growth in the colon that can become cancer' },
        { term: 'colonoscopy', definition: 'A test using a camera to look inside the colon' },
        { term: 'stool', definition: 'Waste matter that passes through the rectum' },
      ],
      analogies: ['Polyps are like small mushrooms growing on the inside of the colon. Removing them before they get bigger prevents cancer.'],
      examples: ['A 50-year-old has a colonoscopy, the doctor finds and removes 3 polyps, preventing cancer from developing.'],
    },
    2: {
      level: 2,
      summary: 'Colorectal cancer staging (I-IV) guides treatment, with surgery for localized disease, chemotherapy for high-risk and metastatic disease, and molecular testing directing targeted therapy.',
      explanation: `## Risk Factors
**Modifiable:**
- Red/processed meat consumption
- Alcohol use
- Smoking
- Obesity, sedentary lifestyle

**Non-modifiable:**
- Age >45
- Family history of CRC or polyps
- Lynch syndrome, FAP
- Inflammatory bowel disease

## Staging (TNM)
- Stage I: Tumor invades submucosa or muscularis
- Stage II: Tumor through muscularis, no nodes
- Stage III: Positive lymph nodes
- Stage IV: Distant metastases (usually liver, lung)

## Screening Options
| Test | Interval | Advantage |
|------|----------|-----------|
| Colonoscopy | 10 years | Diagnostic and therapeutic |
| FIT stool test | Yearly | Non-invasive |
| Cologuard | Every 3 years | DNA-based |
| CT colonography | Every 5 years | No sedation |

## Treatment
- Surgery: Colectomy with lymphadenectomy
- Stage II high-risk: Consider adjuvant chemo
- Stage III: Adjuvant chemo (FOLFOX)
- Stage IV: Systemic therapy +/- metastasectomy`,
      keyTerms: [
        { term: 'FIT', definition: 'Fecal immunochemical test; checks for hidden blood in stool' },
        { term: 'FOLFOX', definition: 'Chemotherapy regimen with oxaliplatin, 5-FU, and leucovorin' },
        { term: 'adenocarcinoma', definition: 'The most common type of colorectal cancer' },
      ],
    },
    3: {
      level: 3,
      summary: 'Molecular profiling of colorectal cancer identifies microsatellite status, RAS mutations, and BRAF V600E, guiding adjuvant therapy duration and metastatic treatment selection.',
      explanation: `## Molecular Testing (Metastatic Disease)
Test all Stage IV CRC for:
- RAS mutations (KRAS, NRAS exon 2-4)
- BRAF V600E mutation
- Microsatellite instability (MSI-H/MMRd)
- HER2 amplification
- NTRK fusions (rare)

## Adjuvant Therapy
**Stage II (High Risk):**
- T4, <12 lymph nodes, perineural invasion
- Consider FOLFOX or CAPOX

**Stage III:**
- Standard: FOLFOX or CAPOX for 3 months
- T4/N1-2: 6 months

**Stage II MSI-H:**
- No benefit from 5-FU monotherapy
- Avoid 5-FU alone

## Metastatic Treatment
**RAS wild-type, BRAF wild-type:**
- Doublet chemo + anti-EGFR (cetuximab, panitumumab) for left-sided tumors
- Doublet + bevacizumab for right-sided tumors

**RAS mutant:**
- Chemo + bevacizumab (no EGFR inhibitors)

**BRAF V600E:**
- Encorafenib + cetuximab ± chemotherapy

**MSI-H/MMRd:**
- Pembrolizumab or nivolumab + ipilimumab`,
      keyTerms: [
        { term: 'MSI-H', definition: 'Microsatellite instability-high; indicates MMR deficiency' },
        { term: 'MMRd', definition: 'Mismatch repair deficient; predicts immunotherapy response' },
        { term: 'anti-EGFR', definition: 'Targeted therapy against epidermal growth factor receptor' },
      ],
      clinicalNotes: 'Primary tumor sidedness predicts EGFR inhibitor response—left-sided tumors respond better. MSI-H/MMRd tumors respond exceptionally well to immunotherapy.',
    },
    4: {
      level: 4,
      summary: 'Colorectal cancer management addresses oligometastatic disease, liver-directed therapies, treatment of chemorefractory disease, and hereditary cancer syndromes requiring genetic counseling and surveillance.',
      explanation: `## Oligometastatic Disease
**Liver-Limited Metastases:**
- Resection if possible
- Neoadjuvant chemo to assess biology
- Perioperative FOLFOX (6 months total)
- Local ablative techniques (RFA, SBRT)

## Chemorefractory Disease
**Options After Progression:**
- Regorafenib (multikinase inhibitor)
- TAS-102 (trifluridine/tipiracil)
- Lonsurf (if regorafenib tolerated)
- Clinical trial

## Hereditary Syndromes
**Lynch Syndrome (HNPCC):**
- MMR gene mutation (MLH1, MSH2, MSH6, PMS2)
- Lifetime CRC risk: 50-80%
- Start colonoscopy at 20-25, every 1-2 years
- Extra-colonic cancers: endometrial, ovarian, urothelial

**FAP:**
- APC gene mutation
- Hundreds to thousands of polyps
- Colectomy recommended by age 25-30

## Rectal Cancer Specifics
- Total neoadjuvant therapy (TNT) for locally advanced
- Watch and wait approach for complete clinical response
- Organ preservation strategies
- Sphincter preservation when possible`,
      keyTerms: [
        { term: 'oligometastatic', definition: 'Limited number of metastases potentially curable with local therapy' },
        { term: 'TNT', definition: 'Total neoadjuvant therapy; all chemo and radiation before surgery' },
        { term: 'watch and wait', definition: 'Non-surgical management after complete clinical response to chemoradiation' },
      ],
      clinicalNotes: 'Lynch syndrome screening is recommended for all CRC diagnoses (universal screening). FAP requires prophylactic colectomy—cancer is inevitable without surgery.',
    },
    5: {
      level: 5,
      summary: 'Precision oncology in CRC incorporates circulating tumor DNA, ctDNA-guided adjuvant therapy, novel targets (KRAS G12C, HER2, NTRK), and understanding of tumor evolution and resistance mechanisms.',
      explanation: `## ctDNA-Guided Management
- Minimal residual disease detection post-surgery
- Adjuvant therapy decisions based on ctDNA
- Earlier detection of recurrence than imaging
- GALAXY, CIRCULATE, BESPOKE trials ongoing

## Emerging Targets
- KRAS G12C: Sotorasib, adagrasib
- HER2 amplification: Trastuzumab + pertuzumab, T-DXd
- NTRK fusions: Larotrectinib, entrectinib
- RET fusions: Selpercatinib

## Immunotherapy Expansion
- Neoadjuvant immunotherapy for MSI-H/dMMR
- NICHE trial: pathologic complete responses
- Potential for organ preservation

## Molecular Evolution
- Parallel evolution of primary and metastases
- Intratumoral heterogeneity
- Mechanisms of anti-EGFR resistance (RAS mutations, HER2 amplification)
- Liquid biopsy for resistance detection

## Prevention and Early Detection
- Aspirin chemoprevention (Lynch syndrome)
- Improved risk stratification
- Blood-based screening tests (multi-target stool DNA, plasma tests)`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; blood-based biomarker for residual disease' },
        { term: 'intratumoral heterogeneity', definition: 'Genetic diversity within a single tumor' },
        { term: 'organ preservation', definition: 'Avoiding radical surgery through neoadjuvant and local therapies' },
      ],
      clinicalNotes: 'ctDNA after curative surgery may identify patients who benefit from adjuvant therapy and those who can avoid it. Aspirin reduces CRC risk in Lynch syndrome but requires consideration of bleeding risk.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-crc-2024', type: 'website', title: 'NCCN Guidelines for Colon Cancer', source: 'National Comprehensive Cancer Network' },
    { id: 'asco-crc-2024', type: 'website', title: 'ASCO Guidelines for Metastatic Colorectal Cancer', source: 'American Society of Clinical Oncology' },
  ],
  crossReferences: [
    { targetId: 'condition-ibd', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['oncology', 'gastroenterology'], keywords: ['colorectal cancer', 'colon cancer', 'CRC', 'polyps', 'colonoscopy', 'FOLFOX'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default colorectalCancer;
