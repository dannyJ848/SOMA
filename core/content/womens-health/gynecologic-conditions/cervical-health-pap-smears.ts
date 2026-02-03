import { LegacyWomensHealthContent } from '../types';

export const cervicalHealthPapSmears: LegacyWomensHealthContent = {
  id: 'concept-cervical-health-pap-smears',
  type: 'concept',
  name: 'Cervical Health and Pap Smears',
  alternateNames: ['Cervical cancer screening', 'Pap test', 'HPV testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Pap smears and HPV tests are simple screenings that can find cervical problems early, before they become cancer. The HPV vaccine also helps prevent cervical cancer.',
      explanation: `**What is a Pap Smear?**
A Pap smear is a simple test where cells are gently collected from your cervix (the opening of your uterus). These cells are checked for changes that could lead to cancer.

**Why It's Important:**
- Finds changes BEFORE cancer develops
- Cervical cancer is highly preventable with screening
- Most abnormal Paps are NOT cancer

**When to Get Screened:**
- Start at age 21
- Ages 21-29: Pap smear every 3 years
- Ages 30-65: Pap + HPV test every 5 years (or Pap alone every 3 years)
- After 65: May be able to stop if history of normal results

**What is HPV?**
- Human papillomavirus (HPV) is a very common infection
- Most people get it at some point
- Usually goes away on its own
- Some types can cause cervical cancer if they persist

**HPV Vaccine:**
- Prevents the HPV types that cause most cervical cancers
- Recommended ages 9-26 (can be given up to 45)
- Works best when given before HPV exposure
- Very safe and effective`,
      keyTerms: [
        { term: 'Pap smear', definition: 'A test that collects cells from the cervix to check for changes' },
        { term: 'HPV', definition: 'Human papillomavirus, a common virus that can cause cervical cancer' },
        { term: 'cervix', definition: 'The lower part of the uterus that opens into the vagina' },
      ],
      analogies: ['Think of Pap smears like checking your car\'s engine before a long trip - finding small problems early prevents big breakdowns later.'],
      examples: ['Getting your first Pap smear at age 21', 'Your daughter getting the HPV vaccine at age 11'],
    },
    2: {
      level: 2,
      summary: 'Cervical cancer screening uses Pap cytology and HPV testing to detect precancerous changes, with management guided by risk-based algorithms and HPV vaccination providing primary prevention.',
      explanation: `**Screening Guidelines (2020 ACS/ASCCP):**

*Ages 21-24:*
- Pap cytology alone every 3 years
- HPV testing not recommended (high transient infection rate)

*Ages 25-65:*
- Preferred: HPV primary testing every 5 years
- Acceptable: Co-testing (Pap + HPV) every 5 years
- Acceptable: Pap alone every 3 years

*Over 65:*
- Stop screening if adequate prior screening and no history of CIN2+

*After Hysterectomy:*
- No screening if no cervix and no history of CIN2+

**Understanding Results:**

*Normal Pap Cytology:*
- NILM (Negative for Intraepithelial Lesion or Malignancy)
- Return for routine screening

*Abnormal Cytology:*
- ASC-US: Atypical cells of uncertain significance
- LSIL: Low-grade squamous intraepithelial lesion
- HSIL: High-grade squamous intraepithelial lesion
- ASC-H: Atypical cells, cannot exclude high-grade
- AGC: Atypical glandular cells

*HPV Testing:*
- Negative: Low risk
- Positive for HPV 16 and/or 18: Highest risk
- Positive for other high-risk types

**HPV Vaccination:**

*Schedule:*
- Ages 9-14: 2 doses, 6-12 months apart
- Ages 15-26: 3 doses (0, 1-2, 6 months)
- Ages 27-45: Shared decision-making

*Protection:*
- Types 16, 18: Cause ~70% of cervical cancers
- 9-valent (Gardasil 9) covers additional types
- Also protects against genital warts, other cancers`,
      keyTerms: [
        { term: 'NILM', definition: 'Negative for Intraepithelial Lesion or Malignancy - normal Pap result' },
        { term: 'LSIL', definition: 'Low-grade squamous intraepithelial lesion - mild abnormal changes' },
        { term: 'HSIL', definition: 'High-grade squamous intraepithelial lesion - more significant changes needing treatment' },
        { term: 'co-testing', definition: 'Pap smear and HPV test performed together' },
      ],
    },
    3: {
      level: 3,
      summary: 'Risk-based cervical cancer screening management uses ASCCP guidelines integrating current and historical results to determine colposcopy need, surveillance intervals, and treatment indications.',
      explanation: `**Risk-Based Management (ASCCP 2019):**

*Principle:*
- Clinical action based on CIN3+ risk
- Incorporates current and past results
- Same management for equal risks

*Risk Thresholds:*
- ≥4%: Colposcopy recommended
- 0.55% - <4%: 1-year surveillance
- 0.15% - <0.55%: 3-year surveillance
- <0.15%: 5-year surveillance

**Colposcopy:**
- Magnified examination of cervix
- Application of acetic acid
- Biopsy of abnormal areas
- ECC (endocervical curettage) if indicated

**Histologic Diagnoses:**
- CIN 1: Low-grade, often regresses, usually observe
- CIN 2: Moderate dysplasia, treatment varies by age
- CIN 3: High-grade, treatment recommended
- AIS: Adenocarcinoma in situ, excision needed

**Treatment Options:**

*Ablative:*
- Cryotherapy
- Laser ablation
- Not for suspected invasion or unsatisfactory colposcopy

*Excisional:*
- LEEP/LLETZ (loop electrosurgical excision)
- Cold knife conization
- Provides tissue for pathology
- Preferred if concern for invasion

**Special Populations:**

*Ages 21-24:*
- More conservative management
- Higher regression rates
- Observe CIN 2

*Pregnancy:*
- Defer treatment unless cancer suspected
- Colposcopy without ECC
- Reevaluate postpartum

*Immunocompromised:*
- Annual screening
- Lower threshold for colposcopy
- Slower clearance of HPV`,
      keyTerms: [
        { term: 'colposcopy', definition: 'Examination of cervix with magnification after applying acetic acid' },
        { term: 'CIN', definition: 'Cervical intraepithelial neoplasia; graded 1-3 by severity' },
        { term: 'LEEP', definition: 'Loop electrosurgical excision procedure for treating cervical dysplasia' },
        { term: 'ECC', definition: 'Endocervical curettage; sampling of cells from endocervical canal' },
      ],
      clinicalNotes: 'Use ASCCP risk-based management app for decision-making. In ages 21-24, CIN 2 can be observed if colposcopy adequate. AIS requires excision with negative margins; hysterectomy preferred if fertility complete.',
    },
    4: {
      level: 4,
      summary: 'Advanced cervical cancer prevention involves understanding HPV biology, managing treatment failures and recurrence, addressing immunosuppressed populations, and implementing self-sampling strategies for underscreened populations.',
      explanation: `**HPV Biology:**

*Oncogenic Types:*
- HPV 16: Most carcinogenic, ~50% of cervical cancers
- HPV 18: ~20% of cervical cancers, often adenocarcinoma
- Other high-risk: 31, 33, 45, 52, 58

*Carcinogenesis:*
- E6 inactivates p53
- E7 inactivates Rb
- Integration into host genome
- Progression over years to decades

*Natural History:*
- Most infections clear within 2 years
- Persistent infection required for cancer
- Immunocompetence important for clearance

**Post-Treatment Surveillance:**

*After CIN 2/3 Treatment:*
- HPV testing at 6 and 18 months
- If negative: Annual for 5 years, then routine
- If positive: Colposcopy

*Persistent/Recurrent CIN:*
- Repeat excision if feasible
- Consider hysterectomy if recurrent high-grade
- Close surveillance for future screening

**Adenocarcinoma in Situ (AIS):**
- Cold knife cone preferred (evaluate margins)
- Negative margins: May consider fertility-sparing
- Hysterectomy recommended after childbearing
- Skip lesions can occur

**Self-Sampling for HPV:**
- Comparable sensitivity to clinician-collected
- May improve screening in underserved populations
- Approved in some countries, emerging in US
- Combined with telehealth

**Immunocompromised Considerations:**

*HIV:*
- Annual cytology, or co-testing every 3 years if prior normal
- Faster progression to high-grade lesions
- Less regression after treatment
- Begin screening at HIV diagnosis

*Solid Organ Transplant:*
- Annual screening
- Higher prevalence of HPV-related disease
- Consider colposcopy at lower thresholds

**Vaccination in Special Populations:**
- HIV: 3-dose series regardless of age
- Immunocompromised: May have reduced efficacy
- Post-treatment for CIN: May reduce recurrence`,
      keyTerms: [
        { term: 'E6 and E7', definition: 'HPV oncoproteins that inactivate tumor suppressors p53 and Rb' },
        { term: 'self-sampling', definition: 'Patient-collected vaginal swab for HPV testing' },
        { term: 'skip lesions', definition: 'Discontinuous areas of disease in the cervical canal' },
        { term: 'persistent infection', definition: 'HPV infection that does not clear; risk factor for cancer' },
      ],
      clinicalNotes: 'Cold knife cone preferred for AIS to avoid thermal artifact at margins. HPV vaccination post-treatment may reduce recurrence - can offer up to age 45. Self-sampling for HPV may transform screening for underserved populations.',
    },
    5: {
      level: 5,
      summary: 'Expert cervical cancer prevention involves addressing screening disparities, implementing programmatic quality improvement, understanding evolving screening technologies, and global cervical cancer elimination strategies.',
      explanation: `**Disparities in Cervical Cancer:**

*Documented Inequities:*
- Higher incidence and mortality in Black, Hispanic women
- Geographic variation (rural, Southeast US)
- Screening rate differences
- Treatment delays

*Root Causes:*
- Healthcare access
- Insurance coverage
- Provider availability
- Distrust of healthcare system
- Competing priorities

*Solutions:*
- Patient navigation
- Reminder systems
- Accessible clinic hours
- Community outreach
- Self-sampling programs

**Quality Improvement:**

*Metrics:*
- Screening rates by population
- Time to colposcopy
- Treatment completion rates
- Follow-up adherence

*Implementation:*
- EHR reminder systems
- Population health management
- Tracking overdue patients
- Performance feedback

**Evolving Technologies:**

*HPV Genotyping:*
- Extended genotyping beyond 16/18
- Risk stratification
- May guide management

*Methylation Markers:*
- Host and viral methylation
- Triage for HPV-positive
- May reduce colposcopy need

*AI/Digital Colposcopy:*
- Automated image analysis
- May improve biopsy targeting
- Useful in low-resource settings

**WHO Elimination Strategy:**

*90-70-90 Targets by 2030:*
- 90% vaccinated by age 15
- 70% screened with high-performance test by 35 and 45
- 90% with precancer/cancer treated

*Low-Resource Settings:*
- Visual inspection with acetic acid (VIA)
- See-and-treat approaches
- Single-visit screening and treatment
- Thermal ablation

*Global Vaccination:*
- Single-dose schedules studied
- GAVI support for low-income countries
- Supply and delivery challenges

**HPV Vaccination Hesitancy:**

*Addressing Concerns:*
- Extensive safety data
- Not promoting sexual activity
- Cancer prevention framing
- Provider recommendation is key

*Implementation:*
- Bundle with other vaccines
- School-based programs
- Gender-neutral messaging
- Remind/recall systems`,
      keyTerms: [
        { term: 'VIA', definition: 'Visual inspection with acetic acid; low-cost screening method' },
        { term: 'see-and-treat', definition: 'Same-day screening and treatment approach for low-resource settings' },
        { term: 'methylation markers', definition: 'Epigenetic changes that may triage HPV-positive results' },
        { term: 'WHO elimination', definition: 'Global strategy to eliminate cervical cancer as a public health problem' },
      ],
      clinicalNotes: 'Provider recommendation is the strongest predictor of HPV vaccination. Extended genotyping beyond 16/18 is emerging for risk stratification. Single-dose HPV vaccination schedules may transform global prevention.',
    },
  },
  media: [],
  citations: [
    {
      id: 'asccp-guidelines-2019',
      type: 'article',
      title: 'ASCCP Risk-Based Management Consensus Guidelines',
      source: 'American Society for Colposcopy and Cervical Pathology',
      url: 'https://www.asccp.org/guidelines',
      license: 'Copyright ASCCP',
    },
    {
      id: 'acs-cervical-screening-2020',
      type: 'article',
      title: 'ACS Cervical Cancer Screening Guidelines',
      source: 'American Cancer Society',
      license: 'Copyright ACS',
    },
  ],
  crossReferences: [
    { targetId: 'condition-vaginitis', targetType: 'condition', relationship: 'related', label: 'Vaginitis' },
    { targetId: 'concept-contraception-options', targetType: 'concept', relationship: 'related', label: 'Contraception' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'patient-education', 'womens-health', 'cancer-screening', 'prevention'],
    keywords: ['Pap smear', 'HPV', 'cervical cancer', 'colposcopy', 'HPV vaccine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
