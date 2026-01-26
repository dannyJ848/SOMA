/**
 * Pap Smear Screening
 *
 * Comprehensive education on cervical cancer screening
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const PAP_SMEAR_SCREENING: EducationalContent = {
  id: 'concept-pap-smear-screening',
  type: 'concept',
  name: 'Pap Smear Screening',
  alternateNames: ['Cervical cancer screening', 'Pap test', 'Cervical cytology'],

  levels: {
    1: {
      level: 1,
      summary: 'A Pap smear is a simple test that checks for early signs of cervical cancer in women.',
      explanation: `A Pap smear (also called a Pap test) is a quick test that looks for changes in the cells of your cervix. The cervix is the opening to your uterus (womb).

**Why Get a Pap Smear?**
- Find cell changes before they become cancer
- Cervical cancer is very treatable when found early
- The test can save your life

**Who Should Get Tested?**
- Women ages 21-65
- Every 3 years (ages 21-29)
- Every 5 years with HPV test (ages 30-65)

**What Happens During the Test?**
1. You lie on an exam table
2. The doctor uses a small tool to open the vagina
3. A soft brush collects cells from your cervix
4. The test takes just a few minutes
5. You might feel slight pressure but not pain

**Understanding Your Results:**
- **Normal**: No changes found, test again in 3-5 years
- **Abnormal**: Some cell changes found, may need more tests
- Most abnormal results are NOT cancer

**Important:**
- HPV (a common virus) causes most cervical cancer
- The HPV vaccine can prevent cervical cancer
- Keep getting Pap smears even if vaccinated`,
      keyTerms: [
        { term: 'Pap smear', definition: 'A test that collects cells from your cervix to check for cancer' },
        { term: 'cervix', definition: 'The lower part of the uterus that opens into the vagina' },
        { term: 'HPV', definition: 'Human papillomavirus - a common virus that can cause cervical cancer' },
      ],
      analogies: [
        'A Pap smear is like checking your skin for suspicious moles - finding problems early when they are easy to treat.',
      ],
      examples: [
        'Sarah gets a Pap smear every 3 years. One test found early cell changes, which her doctor treated easily before they could become cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cervical cancer screening uses Pap smears and HPV testing to detect precancerous changes, allowing treatment before cancer develops.',
      explanation: `Cervical cancer screening has dramatically reduced cervical cancer deaths by detecting precancerous changes early. Most cervical cancers are caused by persistent HPV infection.

**Screening Methods:**

**Pap Smear (Cytology)**
- Examines cells from the cervix under a microscope
- Looks for abnormal cells (dysplasia)
- Can detect cancer and precancer

**HPV Testing**
- Detects high-risk HPV types
- HPV causes 99% of cervical cancers
- Can be done with Pap smear or alone

**Screening Recommendations (USPSTF):**

| Age | Test | Frequency |
|-----|------|-----------|
| 21-29 | Pap smear alone | Every 3 years |
| 30-65 | Pap + HPV (co-testing) | Every 5 years |
| 30-65 | Pap alone | Every 3 years |
| 30-65 | HPV alone | Every 5 years |
| >65 | Stop if adequate prior screening | - |

**Who Doesn't Need Screening:**
- Women under 21
- Women over 65 with adequate prior screening
- Women who had hysterectomy with cervix removed (for non-cancer reasons)

**Understanding Results:**

*Normal Results:*
- Negative for abnormality
- Resume routine screening

*Abnormal Results:*
- **ASC-US**: Atypical cells of undetermined significance
- **LSIL**: Low-grade changes (usually clear on their own)
- **HSIL**: High-grade changes (need treatment)
- **ASC-H**: Atypical cells, cannot rule out high-grade

**Follow-up After Abnormal Results:**
- HPV testing (if not already done)
- Repeat Pap smear
- Colposcopy (looking at cervix with magnification)
- Biopsy if needed`,
      keyTerms: [
        { term: 'dysplasia', definition: 'Abnormal cell growth that may become cancer if not treated', pronunciation: 'dis-PLAY-zhuh' },
        { term: 'colposcopy', definition: 'A procedure using a magnifying device to closely examine the cervix', pronunciation: 'kol-POSS-kuh-pee' },
        { term: 'HSIL', definition: 'High-grade squamous intraepithelial lesion - significant precancerous changes' },
        { term: 'co-testing', definition: 'Performing both Pap smear and HPV test together' },
      ],
      analogies: [
        'HPV testing is like checking if a fire hazard exists, while Pap smear checks if any damage has already started.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cervical cancer screening utilizes cytology (Pap smear) and molecular HPV testing to identify cervical intraepithelial neoplasia (CIN), with management algorithms stratified by cytology results, HPV status, and patient age.',
      explanation: `**Pathophysiology:**

HPV-mediated carcinogenesis:
1. HPV infection (usually types 16, 18)
2. Viral integration into host genome
3. E6/E7 oncogene expression
4. Inactivation of p53 and Rb tumor suppressors
5. Progressive dysplasia (CIN 1 → CIN 2 → CIN 3)
6. Invasive carcinoma (over 10-20 years)

**CIN Classification:**
- **CIN 1**: Mild dysplasia (lower 1/3 of epithelium)
- **CIN 2**: Moderate dysplasia (lower 2/3)
- **CIN 3**: Severe dysplasia/carcinoma in situ (full thickness)

**Bethesda System (Cytology Reporting):**

*Squamous Cell Abnormalities:*
- ASC-US: Atypical squamous cells of undetermined significance
- ASC-H: Atypical squamous cells, cannot exclude HSIL
- LSIL: Low-grade squamous intraepithelial lesion (HPV effect, CIN 1)
- HSIL: High-grade squamous intraepithelial lesion (CIN 2/3)
- Squamous cell carcinoma

*Glandular Abnormalities:*
- AGC: Atypical glandular cells
- AIS: Adenocarcinoma in situ
- Adenocarcinoma

**High-Risk HPV Types:**
- HPV 16 and 18: Cause ~70% of cervical cancers
- Other high-risk: 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 68

**Screening Test Performance:**

| Test | Sensitivity for CIN2+ | Specificity |
|------|----------------------|-------------|
| Pap alone | 55-80% | 95-98% |
| HPV alone | 90-95% | 85-90% |
| Co-testing | 95-100% | 85-90% |

**ASCCP Risk-Based Management Guidelines:**

Management based on immediate CIN 3+ risk:
- <4% risk: Surveillance (1-3 year follow-up)
- 4-24% risk: Colposcopy
- 25-59% risk: Colposcopy or treatment
- ≥60% risk: Expedited treatment

**Colposcopy Findings:**
- Acetowhite epithelium
- Punctation
- Mosaicism
- Atypical vessels

**Treatment Options for CIN 2/3:**
- LEEP (Loop Electrosurgical Excision Procedure)
- Cold knife conization
- Cryotherapy
- Laser ablation`,
      keyTerms: [
        { term: 'CIN', definition: 'Cervical intraepithelial neoplasia; graded 1-3 based on extent of dysplastic changes' },
        { term: 'LEEP', definition: 'Loop Electrosurgical Excision Procedure; uses electrical wire loop to remove abnormal tissue' },
        { term: 'Bethesda System', definition: 'Standardized terminology for reporting cervical cytology results' },
        { term: 'ASCCP', definition: 'American Society for Colposcopy and Cervical Pathology' },
      ],
      clinicalNotes: 'Use ASCCP mobile app for risk-based management. Document HPV vaccination status. Consider patient age in management (observation more appropriate for young women with LSIL).',
    },
    4: {
      level: 4,
      summary: 'Cervical cancer prevention integrates HPV molecular biology, risk-stratified screening algorithms, and evidence-based colposcopy management, with evolving paradigms toward primary HPV screening and consideration of vaccination impact on future screening strategies.',
      explanation: `**HPV Biology and Carcinogenesis:**

*Viral Structure:*
- Double-stranded circular DNA virus
- L1/L2 capsid proteins (vaccine targets)
- E1-E7 early genes (E6/E7 oncogenic)

*E6/E7 Oncogenic Mechanisms:*
- E6: Binds p53 → ubiquitin-mediated degradation
- E7: Binds Rb → releases E2F transcription factors
- Result: Loss of cell cycle control, genomic instability

*Viral Integration:*
- Episomal → integrated (worse prognosis)
- Integration disrupts E2 (E6/E7 repressor)
- Constitutive E6/E7 expression

**Primary HPV Screening:**

USPSTF 2018 added primary HPV testing as option for ages 30-65.

*FDA-Approved Primary HPV Tests:*
- cobas HPV (with 16/18 genotyping)
- Onclarity HPV
- BD Onclarity

*Algorithm:*
- HPV negative: Rescreen in 5 years
- HPV 16/18 positive: Colposcopy
- HPV positive (other types): Reflex cytology

*Advantages:*
- Higher sensitivity than cytology
- Longer screening interval
- Better negative predictive value

**ASCCP 2019 Risk-Based Guidelines:**

*Immediate CIN 3+ Risk Thresholds:*
- <0.15%: 5-year return
- 0.15-0.54%: 3-year return
- 0.55-3.9%: 1-year return
- 4-24%: Colposcopy
- 25-59%: Colposcopy or treatment
- ≥60%: Expedited treatment (LEEP preferred)

*Risk Tables Consider:*
- Current test result
- Prior test history
- HPV genotype (16 vs other)

**Special Populations:**

*Immunocompromised (HIV+):*
- Annual cytology starting at diagnosis
- More frequent follow-up of abnormalities
- Lower threshold for colposcopy

*Pregnancy:*
- Screening per usual guidelines
- Colposcopy safe, biopsy if needed
- Defer treatment until postpartum (unless invasive cancer suspected)

*Post-Treatment Surveillance:*
- HPV testing at 6 months post-treatment preferred
- If HPV positive or cytology abnormal: Colposcopy
- If both negative: Continue surveillance for 25 years

**Cervical Cancer Epidemiology:**

*US Statistics:*
- ~14,000 new cases/year
- ~4,300 deaths/year
- Peak incidence: 35-44 years
- Mortality higher in Black women

*Global Burden:*
- 4th most common cancer in women worldwide
- 90% of deaths in low/middle-income countries
- WHO goal: Eliminate as public health problem

**HPV Vaccination Impact:**

*Vaccine Efficacy:*
- 9-valent (Gardasil 9): Types 6, 11, 16, 18, 31, 33, 45, 52, 58
- ~90% efficacy against targeted types
- Significant reduction in CIN 2+ in vaccinated populations

*Screening in Vaccinated Populations:*
- Current guidelines unchanged
- Future: May extend intervals or change start age
- Vaccine doesn't cover all high-risk types

**Quality Metrics:**
- Adequate specimen rate
- Satisfactory cytology rate
- HSIL detection rate
- Colposcopy correlation with cytology`,
      keyTerms: [
        { term: 'E6/E7 oncoproteins', definition: 'HPV viral proteins that inactivate tumor suppressors p53 and Rb, driving carcinogenesis' },
        { term: 'episomal', definition: 'Viral DNA existing as circular molecule separate from host chromosomes; integration indicates progression' },
        { term: 'reflex testing', definition: 'Automatic additional testing triggered by initial result (e.g., cytology after positive HPV)' },
        { term: 'expedited treatment', definition: 'Proceeding directly to excisional treatment without colposcopy when risk is very high' },
      ],
      clinicalNotes: 'Document vaccination history. For ages 25-65, primary HPV screening every 5 years is now preferred by ACS. Use ASCCP app for risk calculation. Consider expedited treatment for high-risk patients with access barriers.',
    },
    5: {
      level: 5,
      summary: 'Precision cervical cancer prevention leverages molecular HPV genotyping, methylation biomarkers, AI-assisted cytology interpretation, and evolving vaccination strategies, while addressing global elimination goals, health equity challenges, and the transition to HPV-based screening paradigms in vaccinated populations.',
      explanation: `**Molecular Biomarkers:**

*HPV Genotype-Specific Risk:*
- HPV 16: Highest risk (~60% of cervical cancers)
- HPV 18: Second highest (~15%), more associated with adenocarcinoma
- HPV 31, 33, 45, 52, 58: Intermediate risk
- Genotyping enables risk stratification

*p16/Ki-67 Dual Staining:*
- Surrogate for transforming HPV infection
- Improves triage of HPV-positive women
- May reduce unnecessary colposcopies
- FDA approved for triage

*Methylation Markers:*
- Host gene methylation (CADM1, MAL, miR-124)
- Viral methylation patterns
- Potential for self-collection screening
- Clinical validation ongoing

*E6/E7 mRNA Testing:*
- Detects transcriptionally active HPV
- May be more specific than DNA testing
- Available tests: Aptima HPV

**Artificial Intelligence in Cytology:**

*Digital Pathology:*
- Whole slide imaging
- AI-assisted screening
- Potential to address pathologist shortage

*Automated Cytology Systems:*
- ThinPrep Imaging System
- BD FocalPoint
- Reduce human reading burden

*Deep Learning Applications:*
- Automated abnormal cell detection
- Quality assurance
- Global health applications

**Self-Collection Strategies:**

*Evidence:*
- HPV self-collection similar sensitivity to clinician collection
- Lower specificity (more false positives)
- Increases screening participation

*Implementation:*
- Validated devices available
- Mailed kits programs
- Critical for underserved populations
- May become primary modality in future

**WHO Cervical Cancer Elimination Strategy:**

*90-70-90 Targets by 2030:*
- 90% of girls vaccinated by age 15
- 70% of women screened with high-performance test by 35 and 45
- 90% of women with cervical disease treated

*Screening Recommendations for LMICs:*
- HPV testing preferred
- Screen twice lifetime (35 and 45)
- Screen-and-treat approaches
- VIA (visual inspection with acetic acid) where HPV not available

**US Health Equity Considerations:**

*Disparities:*
- Cervical cancer incidence 30% higher in Black vs White women
- Mortality nearly 2x higher in Black women
- Rural areas: Lower screening rates
- Uninsured: 50% lower screening rates

*Interventions:*
- Community health workers
- Patient navigation
- Culturally tailored education
- Mobile health units
- Self-collection programs

**Post-HPV Vaccination Screening:**

*Current Evidence:*
- Declining HPV prevalence in vaccinated cohorts
- Declining CIN 2+ incidence
- Modeling suggests longer intervals safe

*Future Considerations:*
- Extended screening intervals
- Later start age
- HPV-only screening
- Potential cessation of cytology

*Challenges:*
- Mixed vaccinated/unvaccinated populations
- Catch-up vaccination
- Vaccine coverage disparities

**Cervical Adenocarcinoma:**

*Unique Features:*
- Less decline with screening than squamous
- HPV 18 and 45 predominant
- Glandular abnormalities harder to detect
- May arise above squamocolumnar junction

*Screening Considerations:*
- HPV testing more sensitive than cytology
- AGC requires more aggressive evaluation
- ECC (endocervical curettage) important

**Research Frontiers:**

1. Therapeutic HPV vaccines
2. Methylation-based triage
3. AI-enhanced screening
4. Single-visit screen-and-treat
5. mRNA-based detection
6. Point-of-care HPV testing`,
      keyTerms: [
        { term: 'p16/Ki-67 dual stain', definition: 'Immunohistochemical marker indicating transforming HPV infection; co-expression indicates deregulated cell cycle' },
        { term: 'screen-and-treat', definition: 'Strategy providing immediate treatment after positive screening without histologic confirmation; used in resource-limited settings' },
        { term: 'VIA', definition: 'Visual inspection with acetic acid; low-cost cervical screening method using 3-5% acetic acid' },
        { term: 'WHO 90-70-90', definition: 'Global targets for cervical cancer elimination: 90% vaccination, 70% screening, 90% treatment' },
      ],
      clinicalNotes: `**Clinical Implementation:**
- Use risk-based management (ASCCP app)
- Consider self-collection for hard-to-reach patients
- Document vaccination status and include in risk assessment
- For AIS/adenocarcinoma suspicion, ensure adequate endocervical sampling
- Track HPV genotype for surveillance decisions
- Address barriers: language, transportation, insurance
- Consider same-day treatment when possible
- Stay current: Guidelines evolving with vaccination uptake`,
    },
  },

  media: [
    {
      id: 'cervical-anatomy',
      type: 'diagram',
      filename: 'cervical-anatomy-transformation-zone.svg',
      title: 'Cervical Anatomy and Transformation Zone',
      description: 'Diagram showing the cervix and transformation zone where most cancers arise',
    },
  ],

  citations: [
    {
      id: 'uspstf-cervical-2018',
      type: 'article',
      title: 'Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening',
      accessedDate: '2025-01-24',
    },
    {
      id: 'asccp-2019',
      type: 'article',
      title: '2019 ASCCP Risk-Based Management Consensus Guidelines',
      authors: ['American Society for Colposcopy and Cervical Pathology'],
      source: 'Journal of Lower Genital Tract Disease',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Screening Overview' },
    { targetId: 'concept-hpv-vaccine', targetType: 'concept', relationship: 'related', label: 'HPV Vaccination' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['preventive medicine', 'oncology', 'screening', 'gynecology'],
    keywords: ['Pap smear', 'cervical cancer', 'HPV', 'screening', 'colposcopy', 'CIN'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics and gynecology', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
