/**
 * Cervical Cancer
 *
 * Comprehensive coverage of cervical cancer including prevention,
 * screening, staging, and treatment.
 */

import { EducationalContent } from '../../../types';

export const cervicalCancerContent: EducationalContent = {
  id: 'obgyn-oncology-cervical-cancer',
  type: 'condition',
  name: 'Cervical Cancer',
  alternateNames: ['Cervical Carcinoma', 'Cancer of the Cervix'],

  levels: {
    1: {
      level: 1,
      summary: 'Cervical cancer is caused by HPV infection and can be prevented through vaccination and regular Pap smears.',
      explanation: `Cervical cancer starts in the cervix - the lower part of the uterus that opens into the vagina.

**The good news:**
- This cancer is preventable!
- HPV vaccine can prevent it
- Regular screening finds precancer before it becomes cancer
- When found early, it is very treatable

**What causes it:**
- Almost all cases caused by HPV (human papillomavirus)
- HPV is a common sexually transmitted infection
- Most HPV infections go away on their own
- Persistent HPV can lead to cancer over many years

**Prevention:**
- HPV vaccine (ideally before age 26, can be given to age 45)
- Regular Pap smears starting at age 21
- HPV testing (age 25+)
- Safe sex practices

**Warning signs:**
- Bleeding after sex
- Bleeding between periods or after menopause
- Unusual vaginal discharge
- Pelvic pain (later stage)`,
      keyTerms: [
        { term: 'HPV', definition: 'Human papillomavirus; a virus that causes cervical cancer' },
        { term: 'Pap smear', definition: 'A test that looks for abnormal cells on the cervix' },
        { term: 'HPV vaccine', definition: 'A shot that prevents infection with the HPV types that cause most cervical cancers' },
      ],
      analogies: [
        'HPV vaccine is like a shield that protects the cervix from the virus that causes cancer.',
      ],
      examples: [
        'An 11-year-old girl getting the HPV vaccine is being protected from cervical cancer that could develop decades later.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cervical cancer develops from persistent HPV infection through precancerous lesions (CIN), is prevented by vaccination, and detected early through cytology and HPV testing.',
      explanation: `**Etiology:**
- HPV types 16 and 18 cause ~70% of cervical cancers
- Other high-risk types: 31, 33, 45, 52, 58
- Cofactors: Smoking, immunosuppression, parity

**Natural History:**
- HPV infection → most clear spontaneously
- Persistent infection → precancer (CIN)
- CIN → can progress to cancer over 10-20 years

**Precancer Terminology:**

*CIN (Cervical Intraepithelial Neoplasia):*
- CIN 1: Low-grade (usually regresses)
- CIN 2/3: High-grade (precancer, needs treatment)

*Cytology:*
- ASCUS: Atypical cells of undetermined significance
- LSIL: Low-grade squamous intraepithelial lesion
- HSIL: High-grade squamous intraepithelial lesion

**Prevention:**

*HPV Vaccination:*
- 9-valent (Gardasil 9): Types 6, 11, 16, 18, 31, 33, 45, 52, 58
- Routine: Age 11-12 (can start at 9)
- Catch-up: Through age 26
- Shared decision: Age 27-45
- 2 doses if <15, 3 doses if ≥15

*Screening:*
- Age 21-29: Cytology every 3 years
- Age 30-65: Cytology + HPV every 5 years (preferred) OR cytology every 3 years
- Age >65: Can stop if adequate prior screening

**Types:**
- Squamous cell carcinoma (70%)
- Adenocarcinoma (25%)
- Other (5%)

**Staging:**
- FIGO clinical staging
- Stage I: Confined to cervix
- Stage II: Beyond cervix, not to pelvic wall
- Stage III: Pelvic wall or lower vagina
- Stage IV: Bladder, rectum, or distant`,
      keyTerms: [
        { term: 'CIN 3', definition: 'High-grade precancer; needs treatment to prevent progression to cancer' },
        { term: 'HSIL', definition: 'High-grade squamous intraepithelial lesion; cytology term for precancer' },
        { term: 'colposcopy', definition: 'Magnified examination of cervix to identify abnormal areas for biopsy' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cervical cancer management requires understanding of HPV oncogenesis, risk-based screening algorithms, and stage-appropriate treatment ranging from fertility-sparing surgery to chemoradiation.',
      explanation: `**HPV Oncogenesis:**

*Viral Integration:*
- E6 protein degrades p53
- E7 protein inactivates Rb
- Loss of cell cycle control
- Genomic instability

*Progression:*
- HPV infection → CIN 1 (viral infection)
- CIN 2/3 → premalignant
- CIN 3 → ~30% progress to cancer over 20 years if untreated

**Risk-Based Screening (ASCCP 2019):**

*Principle:*
- Immediate risk determines action
- Based on current + history
- Not tied to single result

*High Risk (colposcopy):*
- Immediate risk ≥4%
- HSIL cytology
- HPV 16/18 positive

*Moderate Risk (options):*
- 1-year follow-up
- Colposcopy acceptable

*Low Risk (surveillance):*
- Routine screening interval

**CIN Management:**

*CIN 1:*
- Usually observation (regresses 60-90%)
- Treatment if persistent >2 years
- or if CIN 2/3 cannot be excluded

*CIN 2:*
- Young women may observe (if seen on colposcopy)
- Treatment for older women or persistent

*CIN 3:*
- Treatment indicated
- Excision (LEEP, cone) vs. ablation
- Excision preferred (provides specimen)

**Cancer Staging Workup:**

*FIGO 2018 Updates:*
- Allows imaging and pathology
- Lymph node status now incorporated
- MRI for parametrial assessment
- PET-CT for nodes

**Treatment by Stage:**

*IA1:*
- Cone biopsy (if fertility desired, negative margins)
- Simple hysterectomy

*IA2-IB1:*
- Radical hysterectomy + nodes
- Or fertility-sparing: Radical trachelectomy

*IB2-IIA:*
- Either: Radical surgery
- Or: Chemoradiation (equally effective)

*IIB-IVA:*
- Chemoradiation (cisplatin weekly)
- No surgery (combining modalities increases morbidity)

*IVB:*
- Systemic therapy
- Palliative care`,
      keyTerms: [
        { term: 'E6/E7 oncoproteins', definition: 'HPV proteins that inactivate tumor suppressors (p53, Rb)' },
        { term: 'LEEP', definition: 'Loop electrosurgical excision procedure; outpatient treatment for CIN' },
        { term: 'radical trachelectomy', definition: 'Fertility-sparing surgery removing cervix but preserving uterus' },
      ],
      clinicalNotes: 'FIGO 2018 staging incorporates imaging and nodes, better reflecting prognosis. Stage IIB+ is treated with chemoradiation, not surgery. Combining surgery and radiation increases morbidity without improving outcomes.',
    },
    4: {
      level: 4,
      summary: 'Contemporary cervical cancer care integrates precision staging, immunotherapy advances for recurrent disease, and global elimination initiatives through vaccination and screening scale-up.',
      explanation: `**Advanced Staging:**

*MRI:*
- Tumor size measurement
- Parametrial invasion assessment
- Vaginal extension

*PET-CT:*
- Nodal assessment
- Distant metastases
- May change treatment plan in 20%

*Surgical Staging:*
- Para-aortic node assessment
- May guide extended-field radiation
- Minimally invasive approach

**Immunotherapy:**

*Pembrolizumab:*
- Added to chemo-radiation (KEYNOTE-A18)
- Continued as maintenance
- Improves PFS for locally advanced

*Recurrent/Metastatic:*
- First-line: Pembrolizumab + chemo ± bevacizumab
- PDL1+: Pembrolizumab single agent option
- Second-line: Tisotuzumab vedotin (Tivdak)

**Fertility Preservation:**

*Radical Trachelectomy:*
- Candidates: Stage IA2-IB1, <2cm
- Removes cervix, preserves uterus
- 50-70% pregnancy rate
- Higher preterm delivery

*Considerations:*
- Tumor size critical
- Lymph node status
- Histology
- Patient counseling essential

**Treatment Toxicity:**

*Surgery:*
- Bladder dysfunction
- Lymphedema
- Sexual dysfunction

*Radiation:*
- Vaginal stenosis
- Bladder/bowel effects
- Ovarian failure (unless transposed)
- Fractures

**Cervical Cancer Elimination:**

*WHO Strategy:*
- 90% girls vaccinated by age 15
- 70% women screened by age 35 and 45
- 90% of identified disease treated
- Goal: <4 per 100,000 (elimination threshold)

*Progress:*
- Australia nearing elimination
- HPV vaccination highly effective
- Screening scale-up in LMICs
- Self-collection expanding access`,
      keyTerms: [
        { term: 'tisotuzumab vedotin', definition: 'Antibody-drug conjugate targeting tissue factor; approved for recurrent cervical cancer' },
        { term: 'ovarian transposition', definition: 'Surgically moving ovaries out of radiation field to preserve function' },
        { term: 'cervical cancer elimination', definition: 'WHO initiative to achieve incidence <4/100,000 through vaccination and screening' },
      ],
      clinicalNotes: 'Immunotherapy has transformed cervical cancer treatment. Pembrolizumab added to chemoradiation for locally advanced disease and to chemotherapy for recurrent disease are new standards. Tisotuzumab vedotin offers a new option after progression.',
    },
    5: {
      level: 5,
      summary: 'Cervical cancer control requires multi-level intervention spanning HPV vaccination, organized screening, treatment access, and ongoing research into therapeutic vaccines and novel combinations.',
      explanation: `**HPV Vaccination Impact:**

*Real-World Effectiveness:*
- 90%+ reduction in high-risk HPV
- 70%+ reduction in CIN 2+
- Emerging cervical cancer reduction data
- Herd immunity effects

*Challenges:*
- Coverage gaps (US ~60%)
- Parental hesitancy
- Access in LMICs
- Boys/young men vaccination

**Screening Innovation:**

*HPV Self-Collection:*
- Patient collects own sample
- Similar sensitivity to provider-collected
- Increases screening access
- WHO recommended

*AI-Assisted Screening:*
- Image analysis of cervical photos
- Cytology automation
- Risk prediction algorithms
- Expanding access in low-resource settings

**Therapeutic Vaccines:**

*Concept:*
- Stimulate immune response against HPV-infected cells
- Target E6/E7 proteins
- Treat, not prevent, HPV infection/disease

*Status:*
- Multiple in clinical trials
- VGX-3100 showed CIN 2/3 regression
- Combination approaches
- Not yet approved

**Disparities:**

*In High-Income Countries:*
- Screening compliance varies
- Vaccination hesitancy
- Follow-up barriers
- Insurance issues

*Global:*
- 90% of deaths in LMICs
- Limited screening/treatment
- Vaccination scale-up needed
- WHO elimination target

*Addressing Disparities:*
- Community outreach
- Navigation programs
- Self-collection options
- Single-visit approaches (screen and treat)

**Research Priorities:**

*Treatment:*
- Immunotherapy combinations
- Neoadjuvant strategies
- Reducing treatment toxicity
- Therapeutic vaccines

*Prevention:*
- Single-dose vaccination
- Longer dosing intervals
- Next-generation vaccines
- Screening algorithms

**Quality Metrics:**

*Screening:*
- Coverage rates
- Adequate follow-up of abnormals
- Time to colposcopy
- Treatment completion

*Treatment:*
- Guideline concordance
- Margin status
- Treatment-related morbidity
- Survival outcomes`,
      keyTerms: [
        { term: 'therapeutic HPV vaccine', definition: 'Vaccines in development to treat existing HPV infection by stimulating immune response' },
        { term: 'screen and treat', definition: 'Single-visit approach offering immediate treatment of screen-positive women' },
        { term: 'VGX-3100', definition: 'Investigational therapeutic DNA vaccine for HPV showing CIN regression' },
      ],
      clinicalNotes: 'Cervical cancer is one of the few cancers that can be virtually eliminated through vaccination and screening. Global efforts are underway to achieve this goal. In the meantime, advances in immunotherapy are improving outcomes for advanced disease.',
    },
  },

  media: [
    {
      id: 'cervical-cancer-staging',
      type: 'diagram',
      filename: 'cervical-cancer-figo-staging.svg',
      title: 'Cervical Cancer FIGO Staging',
      description: 'Visual representation of cervical cancer stages',
    },
  ],

  citations: [
    {
      id: 'nccn-cervical',
      type: 'article',
      title: 'NCCN Guidelines: Cervical Cancer',
      source: 'National Comprehensive Cancer Network',
      authors: ['NCCN'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-cervix', targetType: 'structure', relationship: 'related', label: 'Cervix Anatomy' },
    { targetId: 'obgyn-screening-cervical', targetType: 'topic', relationship: 'related', label: 'Cervical Cancer Screening' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['oncology', 'cervical cancer', 'HPV', 'prevention'],
    keywords: ['cervical cancer', 'HPV', 'Pap smear', 'vaccination'],
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
