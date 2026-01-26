/**
 * Ovarian Cancer
 *
 * Comprehensive coverage of ovarian cancer including types,
 * presentation, staging, and treatment.
 */

import { EducationalContent } from '../../../types';

export const ovariancancerContent: EducationalContent = {
  id: 'obgyn-oncology-ovarian-cancer',
  type: 'condition',
  name: 'Ovarian Cancer',
  alternateNames: ['Ovarian Carcinoma', 'Epithelial Ovarian Cancer'],

  levels: {
    1: {
      level: 1,
      summary: 'Ovarian cancer is cancer that starts in the ovaries and is often found at a late stage because early symptoms are vague.',
      explanation: `Ovarian cancer begins in the ovaries - the organs that make eggs and female hormones.

**Why it matters:**
- It is the most deadly gynecologic cancer
- Often found late because early symptoms are unclear
- Better outcomes when caught early

**Symptoms to watch for:**
- Bloating that doesn't go away
- Feeling full quickly when eating
- Pelvic or belly pain
- Needing to urinate often
- Changes in bowel habits

**Risk factors:**
- Family history of ovarian or breast cancer
- BRCA gene mutations
- Never having been pregnant
- Older age
- Obesity

**Protection:**
- Birth control pills reduce risk
- Pregnancy and breastfeeding reduce risk
- Surgery to remove ovaries (for very high-risk women)

**Treatment:**
- Surgery (most cases)
- Chemotherapy
- Sometimes targeted therapies`,
      keyTerms: [
        { term: 'ovarian cancer', definition: 'Cancer that starts in the ovaries' },
        { term: 'BRCA mutation', definition: 'An inherited gene change that greatly increases risk of ovarian and breast cancer' },
        { term: 'chemotherapy', definition: 'Cancer-killing medicines given by IV or pills' },
      ],
      analogies: [
        'Ovarian cancer is sometimes called the "silent killer" because its early symptoms are like whispers - easy to miss until it speaks loudly.',
      ],
      examples: [
        'A woman with bloating, feeling full, and pelvic discomfort for more than a few weeks should see her doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ovarian cancer encompasses epithelial, germ cell, and sex cord-stromal tumors, with epithelial carcinoma (particularly high-grade serous) being most common and presenting at advanced stage.',
      explanation: `**Types of Ovarian Cancer:**

*Epithelial (90%):*
- High-grade serous (most common, most aggressive)
- Low-grade serous
- Endometrioid
- Clear cell
- Mucinous

*Non-Epithelial (10%):*
- Germ cell (younger women)
- Sex cord-stromal (granulosa cell)

**Presentation:**
- Often vague, non-specific symptoms
- Bloating, early satiety
- Pelvic/abdominal pain
- Urinary urgency/frequency
- Advanced disease: Ascites, pleural effusion

**Risk Factors:**
- BRCA1/2 mutations (10-40% lifetime risk)
- Lynch syndrome
- Family history
- Nulliparity
- Early menarche/late menopause
- Obesity

**Diagnosis:**
- Pelvic exam (often mass)
- Transvaginal ultrasound
- CA-125 (elevated in many but not all)
- CT scan for staging
- Surgical staging/diagnosis

**Staging (FIGO):**
- Stage I: Limited to ovaries
- Stage II: Pelvic extension
- Stage III: Peritoneal spread or nodes
- Stage IV: Distant metastases

**Treatment Overview:**
- Surgery: Cytoreduction (debulking)
- Chemotherapy: Carboplatin + paclitaxel
- Targeted therapy: PARP inhibitors
- Maintenance therapy`,
      keyTerms: [
        { term: 'high-grade serous', definition: 'Most common and aggressive type of epithelial ovarian cancer' },
        { term: 'CA-125', definition: 'Tumor marker often elevated in ovarian cancer; not a screening test' },
        { term: 'cytoreduction', definition: 'Surgery to remove as much cancer as possible (debulking)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Ovarian cancer pathogenesis varies by histotype, with high-grade serous carcinoma originating from fallopian tube epithelium and characterized by p53 mutations and genomic instability.',
      explanation: `**Pathogenesis by Type:**

*High-Grade Serous Carcinoma (HGSC):*
- Originates from fallopian tube fimbrial epithelium
- Serous tubal intraepithelial carcinoma (STIC) precursor
- p53 mutation ubiquitous
- BRCA1/2 mutations in ~20%
- Homologous recombination deficiency (HRD) in ~50%

*Low-Grade Serous:*
- Different biology from HGSC
- KRAS/BRAF mutations
- Indolent course
- Less chemo-responsive

*Endometrioid and Clear Cell:*
- Association with endometriosis
- ARID1A, PIK3CA mutations
- Clear cell: poor prognosis, chemo-resistant

**Screening:**
- No effective screening for general population
- TVUS + CA-125 did not reduce mortality (UKCTOCS, PLCO)
- High-risk women: TVUS + CA-125 or risk-reducing surgery

**Genetic Testing:**
- All epithelial ovarian cancer patients should be offered
- BRCA1/2: Treatment implications (PARP inhibitors)
- Other genes: RAD51, BRIP1, PALB2
- Cascade testing for families

**Surgical Staging:**
- Total hysterectomy + BSO
- Omentectomy
- Peritoneal biopsies
- Lymph node assessment
- Cytology
- Goal: R0 (no visible residual)

**Chemotherapy:**

*First-line:*
- Carboplatin AUC 5-6 + paclitaxel 175 mg/m2
- Every 3 weeks x 6 cycles
- Neoadjuvant vs. primary surgery debated

*Maintenance:*
- PARP inhibitors (olaparib, niraparib, rucaparib)
- Bevacizumab
- Based on stage, response, HRD status

**Prognosis:**
- Stage I: 90% 5-year survival
- Stage III: 40% 5-year survival
- Stage IV: 20% 5-year survival`,
      keyTerms: [
        { term: 'STIC', definition: 'Serous tubal intraepithelial carcinoma; precursor lesion in fallopian tube' },
        { term: 'homologous recombination deficiency', definition: 'DNA repair defect making tumors sensitive to PARP inhibitors' },
        { term: 'PARP inhibitor', definition: 'Targeted therapy blocking DNA repair; effective in BRCA/HRD tumors' },
      ],
      clinicalNotes: 'The discovery that most HGSC originates from the fallopian tube has changed prevention strategies - risk-reducing salpingo-oophorectomy (RRSO) is recommended for BRCA carriers rather than hysterectomy.',
    },
    4: {
      level: 4,
      summary: 'Ovarian cancer management requires integration of surgical cytoreduction, platinum-based chemotherapy, and biomarker-guided maintenance therapy, with ongoing advances in targeted therapeutics and immunotherapy.',
      explanation: `**Surgical Principles:**

*Optimal Cytoreduction:*
- Goal: No visible residual disease (R0)
- Associated with improved survival
- May require extensive procedures (bowel resection, diaphragm stripping)
- Gynecologic oncologist essential

*Neoadjuvant vs. Primary Surgery:*
- Neoadjuvant for extensive disease, poor surgical candidates
- Interval surgery after 3 cycles
- Equivalent survival in selected patients
- Ongoing trials comparing approaches

**Maintenance Therapy:**

*PARP Inhibitors:*
| Drug | Indication | Key Trial |
|------|------------|-----------|
| Olaparib | BRCA-mutated | SOLO-1 |
| Niraparib | All comers | PRIMA |
| Rucaparib | BRCA-mutated | ARIEL3 |

*Bevacizumab:*
- Anti-VEGF
- Front-line and recurrence
- Longer PFS, no OS benefit in most

**Recurrent Disease:**

*Platinum-Sensitive (≥6 months):*
- Re-challenge with platinum-based regimen
- Consider secondary cytoreduction
- Maintenance therapy again

*Platinum-Resistant (<6 months):*
- Single-agent chemotherapy
- Bevacizumab addition
- Clinical trials
- Goals shift to palliation

**Genetic Testing Implications:**

*Germline BRCA1/2:*
- PARP inhibitor benefit
- Platinum sensitivity
- Family screening
- Risk-reducing surgery discussion for family

*Somatic Testing:*
- HRD assessment
- May expand PARP eligibility
- Tumor sequencing becoming standard

**Special Situations:**

*Low-Grade Serous:*
- Hormone receptor positive often
- Hormonal therapy may help
- Less chemo-responsive
- Consider surgery for recurrence

*Clear Cell:*
- Poorer prognosis
- Less chemo-sensitive
- Research into targeted therapy

*Germ Cell Tumors:*
- Young patients
- Often curable with BEP chemotherapy
- Fertility preservation possible`,
      keyTerms: [
        { term: 'R0 resection', definition: 'Complete cytoreduction with no visible residual tumor' },
        { term: 'platinum-sensitive', definition: 'Recurrence ≥6 months after platinum; better prognosis, retreatable' },
        { term: 'BEP', definition: 'Bleomycin, etoposide, cisplatin; curative regimen for germ cell tumors' },
      ],
      clinicalNotes: 'PARP inhibitors have transformed ovarian cancer maintenance therapy. Testing for BRCA and HRD status is essential to guide treatment. Up to 50% of HGSC may benefit from PARP inhibitors based on HRD status.',
    },
    5: {
      level: 5,
      summary: 'Advances in ovarian cancer care include biomarker-driven therapy, novel combinations, and prevention strategies, while challenges remain in early detection and platinum-resistant disease.',
      explanation: `**Evolving Treatment Landscape:**

*Immunotherapy:*
- Single-agent checkpoint inhibitors: Limited activity
- Combinations under investigation
- MSI-high tumors: Pembrolizumab option
- Vaccine strategies in trials

*Novel Combinations:*
- PARP + anti-angiogenic
- PARP + immunotherapy
- ATR inhibitors
- WEE1 inhibitors for TP53 mutant

*Antibody-Drug Conjugates:*
- Mirvetuximab soravtansine (FRα-targeted)
- Approved for platinum-resistant, FRα-high
- Expanding options

**Prevention:**

*BRCA Carriers:*
- Risk-reducing salpingo-oophorectomy (RRSO)
- Recommend by age 35-40 (BRCA1) or 40-45 (BRCA2)
- Reduces risk 80%
- Discuss menopausal consequences

*General Population:*
- OCP use reduces risk 30-50%
- Longer use = greater protection
- Tubal ligation protective
- Opportunistic salpingectomy at benign surgery

**Screening Challenges:**

*Why No Effective Screening:*
- Rapid progression of HGSC
- Low prevalence in general population
- False positives lead to unnecessary surgery
- UKCTOCS, PLCO trials showed no mortality benefit

*High-Risk Monitoring:*
- TVUS + CA-125 every 6 months
- Not proven to improve outcomes
- Most choose RRSO when family complete

**Quality of Care:**

*Centralization:*
- GYN oncologist involvement improves survival
- High-volume centers better outcomes
- Multidisciplinary teams essential

*Supportive Care:*
- Symptom management
- Nutritional support
- Psychosocial care
- Palliative care integration early

**Research Priorities:**

*Early Detection:*
- Liquid biopsy approaches
- Multimodal algorithms
- Biomarker combinations

*Treatment:*
- Overcoming platinum resistance
- New targets
- Immunotherapy combinations
- Minimizing toxicity

**Patient Advocacy:**

*Organizations:*
- Ovarian Cancer Research Alliance
- Foundation for Women's Cancer
- Patient support groups

*Clinical Trials:*
- Encourage participation
- Access to novel therapies
- Advancing the field`,
      keyTerms: [
        { term: 'mirvetuximab soravtansine', definition: 'Antibody-drug conjugate targeting folate receptor alpha; approved for platinum-resistant disease' },
        { term: 'opportunistic salpingectomy', definition: 'Removal of fallopian tubes at time of benign gynecologic surgery for cancer prevention' },
        { term: 'liquid biopsy', definition: 'Blood-based tests detecting circulating tumor DNA; being studied for early detection' },
      ],
      clinicalNotes: 'Ovarian cancer prevention through opportunistic salpingectomy is increasingly recommended. Given the fallopian tube origin of HGSC, removing tubes at benign surgeries (hysterectomy, sterilization) may reduce cancer risk with minimal added morbidity.',
    },
  },

  media: [
    {
      id: 'ovarian-cancer-staging',
      type: 'diagram',
      filename: 'ovarian-cancer-figo-staging.svg',
      title: 'Ovarian Cancer FIGO Staging',
      description: 'Visual representation of ovarian cancer stages',
    },
  ],

  citations: [
    {
      id: 'nccn-ovarian',
      type: 'article',
      title: 'NCCN Guidelines: Ovarian Cancer',
      source: 'National Comprehensive Cancer Network',
      authors: ['NCCN'],
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1453',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-ovaries', targetType: 'structure', relationship: 'related', label: 'Ovary Anatomy' },
    { targetId: 'obgyn-oncology-genetic-testing', targetType: 'topic', relationship: 'related', label: 'Genetic Testing' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['oncology', 'ovarian cancer', 'gynecology'],
    keywords: ['ovarian cancer', 'BRCA', 'PARP inhibitor', 'chemotherapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
