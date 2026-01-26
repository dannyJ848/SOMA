import { EducationalContent } from '../../types';

export const screeningGuidelinesContent: EducationalContent = {
  id: 'topic-screening-guidelines',
  type: 'topic',
  name: 'Health Screening Guidelines for Transgender Individuals',
  alternateNames: ['Trans Health Screening', 'Preventive Care Guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Transgender people need regular health checkups and screenings based on their body parts, not just their gender identity.',
      explanation: `Everyone needs regular health checkups. For transgender people, which tests you need depends on what body parts you have.

**Important Things:**
- Get regular checkups with a doctor
- Tell your doctor about all your body parts
- Some screenings are based on your anatomy
- Stay up to date on recommended tests

Your doctor can help figure out which screenings are right for you based on your specific health needs.`,
      keyTerms: [
        { term: 'screening', definition: 'Tests that look for health problems before you have symptoms' },
        { term: 'checkup', definition: 'A regular visit to the doctor to make sure you\'re healthy' },
        { term: 'anatomy', definition: 'The body parts you have' },
      ],
      analogies: [
        'Health screenings are like checking the oil in a car - regular checks help catch problems early.',
      ],
      examples: [
        'A transgender man with a cervix still needs Pap smears for cervical cancer screening.',
      ],
    },
    2: {
      level: 2,
      summary: 'Health screening for transgender individuals should be based on current anatomy and organ inventory, not solely on gender identity, with attention to hormone-related considerations.',
      explanation: `Preventive care for transgender individuals requires understanding which organs are present and any effects of hormone therapy.

**Screening Principles:**

*Based on Anatomy:*
- Cervical cancer screening: Anyone with a cervix
- Breast/chest tissue screening: Based on tissue present
- Prostate screening: Anyone with a prostate
- Other organ-specific screenings

**Specific Considerations:**

*Transfeminine Individuals:*
- Breast cancer: Consider after hormone therapy duration
- Prostate: Remains present, requires screening
- Bone density: Monitor if hormone levels inadequate

*Transmasculine Individuals:*
- Cervical screening: Continue if cervix present
- Breast/chest: Depends on surgery status
- Ovarian/uterine: Until organs removed

**General Preventive Care:**
- Cardiovascular screening
- Diabetes screening
- STI screening (based on behavior)
- Mental health screening
- Immunizations per guidelines

**Hormone-Related Monitoring:**
- Separate from general screening
- Specific to hormone therapy regimen`,
      keyTerms: [
        { term: 'organ inventory', definition: 'List of which organs a person has for appropriate screening' },
        { term: 'Pap smear', definition: 'Test to screen for cervical cancer', pronunciation: 'PAP smear' },
        { term: 'preventive care', definition: 'Healthcare focused on preventing disease' },
        { term: 'STI', definition: 'Sexually transmitted infection' },
      ],
    },
    3: {
      level: 3,
      summary: 'Transgender preventive care follows organ-inventory-based screening with modifications for hormone therapy effects and post-surgical anatomy, integrated with standard preventive care guidelines.',
      explanation: `Preventive care for transgender patients requires integration of anatomy-based screening with hormone therapy considerations.

**Breast/Chest Tissue Screening:**

*Transfeminine:*
- USPSTF guidelines unclear; emerging recommendations
- Consider after 5+ years hormone therapy
- Age 50+: Mammography reasonable
- Higher risk factors: Earlier/more frequent

*Transmasculine:*
- Post-top surgery: Chest wall exam
- Residual tissue possible: Clinical breast exam
- No chest surgery: Standard mammography guidelines

**Cervical Cancer Screening:**

*Transmasculine with Cervix:*
- Continue Pap smear per guidelines (21-65)
- Every 3 years (Pap) or 5 years (Pap + HPV)
- Testosterone may cause atrophy: May affect adequacy
- Provider sensitivity important
- HPV vaccination if age-eligible

**Prostate Screening:**

*Transfeminine:*
- Prostate remains after vaginoplasty
- PSA may be lower on estrogen
- Screening discussion per general guidelines (age 50+)
- Digital exam: Approach differs post-surgery

**Cardiovascular/Metabolic:**

*Both:*
- Standard screening (lipids, glucose, BP)
- Hormone effects on CV risk factors
- May need more frequent monitoring

**Other Organ-Specific:**
- Ovarian/uterine: Monitor until hysterectomy
- Testicular: Until orchiectomy
- Osteoporosis: Based on hormone adequacy, risk factors`,
      keyTerms: [
        { term: 'USPSTF', definition: 'US Preventive Services Task Force; makes screening recommendations' },
        { term: 'HPV', definition: 'Human papillomavirus; causes cervical cancer' },
        { term: 'PSA', definition: 'Prostate-specific antigen; prostate screening test' },
        { term: 'mammography', definition: 'X-ray screening for breast cancer' },
      ],
      clinicalNotes: 'Screen based on organs present. Document organ inventory in EHR. PSA may be lower on estrogen. Cervical screening may require smaller speculum due to atrophy.',
    },
    4: {
      level: 4,
      summary: 'Transgender preventive care integrates organ-inventory-based screening with hormone therapy effects, requiring EHR optimization, sensitive clinical approaches, and evidence-based modifications to standard guidelines.',
      explanation: `Comprehensive preventive care for transgender patients requires systematic approaches to screening based on anatomy and hormone status.

**EHR and Documentation:**

*Organ Inventory:*
- Document present organs
- Update post-surgically
- Trigger appropriate reminders
- Avoid inappropriate screening alerts

*Best Practice:*
- Sexual orientation and gender identity (SOGI) fields
- Organ inventory separate from gender
- Screening due lists based on anatomy

**Breast/Chest Cancer Screening:**

*Transfeminine:*
- Limited data on breast cancer incidence
- Some studies suggest incidence between cisgender male and female
- Current recommendation: Discuss mammography starting age 50 after 5+ years HRT
- High-risk factors: Earlier screening

*Transmasculine:*
- No chest surgery: Follow cisgender female guidelines
- Post-top surgery: Reduced tissue, lower risk
- Residual tissue may remain
- Clinical exam appropriate; mammography feasibility limited

**Cervical Cancer:**

*Transmasculine:*
- Continue screening if cervix present
- Testosterone effects: Vaginal atrophy, cellular changes
- May affect Pap adequacy
- Consider: Topical estrogen prior, smaller speculum
- HPV self-collection emerging option

**Prostate:**

*Transfeminine:*
- Prostate not removed in standard vaginoplasty
- PSA: Typically lower on estrogen (may be 50% lower)
- Adjust reference range interpretation
- DRE: Access via anterior vaginal wall

**Cardiovascular:**

*Risk Modifications:*
- Estrogen: May increase VTE risk
- Testosterone: May affect lipids
- Standard cardiovascular screening
- May warrant more frequent lipid monitoring

**Bone Health:**

*DEXA Considerations:*
- Reference ranges: Use assigned sex at birth OR treated gender (debated)
- Risk: Inadequate hormone levels, smoking, low BMI
- Screen: Standard age thresholds OR earlier if risk factors`,
      keyTerms: [
        { term: 'organ inventory', definition: 'Documentation of anatomical organs present for appropriate screening' },
        { term: 'DRE', definition: 'Digital rectal exam for prostate' },
        { term: 'DEXA', definition: 'Bone density scan; reference ranges may need interpretation' },
        { term: 'HPV self-collection', definition: 'Patient-collected vaginal sample for HPV testing' },
      ],
      clinicalNotes: 'Optimize EHR for organ-based reminders. PSA reference ranges need adjustment for transfeminine patients. Offer HPV self-collection option for transmasculine patients when available.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based transgender preventive care requires organ-inventory-based screening, hormone-adjusted interpretation of tests, EHR optimization, sensitive clinical approaches, and integration with emerging research on transgender-specific cancer risk.',
      explanation: `Expert preventive care for transgender patients integrates current evidence with practical clinical implementation.

**Cancer Risk - Current Evidence:**

*Breast Cancer (Transfeminine):*
- Studies suggest increased risk vs. cisgender males
- Risk lower than cisgender females
- Duration of hormone exposure matters
- Age at initiation may matter
- Recommendation: Screen similarly to high-risk individuals after 5+ years HRT

*Breast Cancer (Transmasculine):*
- Post-top surgery: Reduced but not zero
- Studies show residual tissue in many cases
- Risk likely lower than cisgender females
- Chest wall exam appropriate

*Cervical Cancer:*
- Testosterone does not increase risk
- HPV exposure is risk factor
- Adequate Pap collection may be challenging
- Self-collected HPV testing promising

*Prostate Cancer:*
- Very limited data in transfeminine individuals
- Appears to be lower than cisgender males
- Case reports exist
- Standard screening discussions appropriate

**Laboratory Interpretation:**

*Reference Ranges:*
- Some labs report by gender identity
- Others by assigned sex
- Clinical interpretation requires context

*Hormone Effects:*
- PSA: Lower on estrogen (adjust expectations)
- Hemoglobin: Higher on testosterone
- Lipids: Variable effects
- Liver enzymes: May be affected

**Practical Implementation:**

*EHR Best Practices:*
- SOGI data collection
- Organ inventory fields
- Screening reminder logic based on anatomy
- Preferred name display

*Clinical Approach:*
- Explain rationale for screenings
- Trauma-informed approach for invasive exams
- Self-collection options when available
- Chaperone policies

*Pelvic Exams:*
- Testosterone causes atrophy
- Topical estrogen 2 weeks prior may help
- Smaller speculum
- Patient comfort prioritized
- Offer alternatives (self-collection) when validated

**Emerging Research:**

*Areas of Investigation:*
- Long-term cancer outcomes
- Optimal screening protocols
- Hormone effects on risk
- Transgender-specific risk calculators

*Guideline Development:*
- Limited transgender-specific guidelines
- Extrapolation from general guidelines
- Shared decision-making essential`,
      keyTerms: [
        { term: 'self-collected HPV testing', definition: 'Patient collects own sample; avoids speculum exam' },
        { term: 'trauma-informed care', definition: 'Approach recognizing potential trauma history affecting care' },
        { term: 'risk calculator', definition: 'Tool estimating individual risk; most not validated in transgender population' },
        { term: 'shared decision-making', definition: 'Patient and provider discuss options together' },
      ],
      clinicalNotes: `**Screening Pearls:**
- Base screening on organs present, not gender
- Document organ inventory in EHR
- PSA typically 50% lower on estrogen
- Cervical screening continues if cervix present
- Offer comfort measures for pelvic exams
- Consider HPV self-collection when available
- Breast screening for transfeminine after 5+ years HRT
- Post-top surgery: Chest exam appropriate
- Prostate accessed via anterior vaginal wall post-vaginoplasty
- Interpret lab values in context of hormone therapy`,
    },
  },

  media: [],
  citations: [
    {
      id: 'screening-guidelines',
      type: 'article',
      title: 'Primary Care of Transgender Adults',
      source: 'UCSF Transgender Care',
      url: 'https://transcare.ucsf.edu/guidelines',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-organ-specific-care', targetType: 'topic', relationship: 'related', label: 'Organ-Specific Care' },
  ],
  tags: {
    topics: ['preventive care', 'screening', 'transgender health'],
    keywords: ['cancer screening', 'preventive care', 'Pap smear', 'mammography', 'prostate'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default screeningGuidelinesContent;
