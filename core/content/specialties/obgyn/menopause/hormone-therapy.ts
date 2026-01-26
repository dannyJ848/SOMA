/**
 * Hormone Replacement Therapy
 *
 * Comprehensive coverage of menopausal hormone therapy including
 * indications, formulations, risks, and benefits.
 */

import { EducationalContent } from '../../../types';

export const hormoneReplacementTherapy: EducationalContent = {
  id: 'obgyn-menopause-hormone-therapy',
  type: 'topic',
  name: 'Hormone Replacement Therapy',
  alternateNames: ['HRT', 'MHT', 'Menopausal Hormone Therapy', 'Hormone Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Hormone therapy replaces the hormones that drop at menopause to help relieve symptoms like hot flashes.',
      explanation: `When menopause happens, the ovaries stop making estrogen. This causes many of the symptoms of menopause.

**What is hormone therapy?**
- Medicine that replaces the missing estrogen
- Can be pills, patches, creams, or gels
- Very effective for hot flashes and night sweats
- Also helps vaginal dryness

**Who might benefit:**
- Women with bothersome hot flashes
- Women with vaginal dryness causing problems
- Women who went through early menopause
- Generally best for women under 60

**Important facts:**
- Most effective treatment for hot flashes
- Has both benefits and risks
- Usually used at the lowest dose for the shortest time needed
- Not for everyone - discuss with your doctor

**Who should avoid it:**
- History of breast cancer
- History of blood clots
- Heart disease or stroke
- Unexplained vaginal bleeding`,
      keyTerms: [
        { term: 'hormone therapy', definition: 'Medicine that replaces estrogen and sometimes progesterone to treat menopause symptoms' },
        { term: 'estrogen', definition: 'The main female hormone that drops at menopause' },
        { term: 'patch', definition: 'A medicine applied to the skin that releases hormones slowly' },
      ],
      analogies: [
        'Hormone therapy is like refilling a tank that is running low - replacing what the body used to make on its own.',
      ],
      examples: [
        'A 52-year-old woman with severe hot flashes that disrupt her sleep might use a low-dose estrogen patch to feel better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Menopausal hormone therapy (MHT) treats vasomotor symptoms and GSM with estrogen, adding progestogen for women with a uterus to prevent endometrial hyperplasia.',
      explanation: `**Indications:**
- Moderate to severe vasomotor symptoms
- Genitourinary syndrome of menopause
- Prevention of osteoporosis (if other options not suitable)
- Premature ovarian insufficiency

**Types of Therapy:**

*Estrogen Therapy (ET):*
- For women without a uterus
- Oral, transdermal, or vaginal

*Estrogen + Progestogen (EPT):*
- For women WITH a uterus
- Progestogen protects endometrium
- Continuous (no bleeding) or cyclic (monthly bleeding)

**Formulations:**

*Estrogen:*
| Route | Examples | Notes |
|-------|----------|-------|
| Oral | CEE, estradiol | First-pass liver effect |
| Transdermal | Patch, gel, spray | Avoids liver, lower VTE |
| Vaginal | Cream, ring, tablet | Local effect for GSM |

*Progestogen:*
- Oral: MPA, micronized progesterone, norethindrone
- Transdermal: Combined patches
- Intrauterine: LNG-IUD

**Benefits:**
- Most effective VMS treatment
- Treats GSM
- Prevents bone loss
- May improve quality of life and sleep

**Risks:**
- VTE (higher with oral)
- Stroke (small increased risk)
- Breast cancer (mainly with EPT, long duration)
- Gallbladder disease

**Contraindications:**
- Undiagnosed vaginal bleeding
- Known or suspected breast cancer
- Active VTE or PE
- Active liver disease
- Known thrombophilia`,
      keyTerms: [
        { term: 'EPT', definition: 'Estrogen plus progestogen therapy; required for women with a uterus' },
        { term: 'transdermal', definition: 'Hormone delivery through the skin (patch, gel, spray)' },
        { term: 'endometrial hyperplasia', definition: 'Overgrowth of uterine lining; can occur with estrogen alone' },
      ],
    },
    3: {
      level: 3,
      summary: 'MHT selection requires individualized assessment of benefits and risks, with formulation, dose, and route chosen based on symptom profile, contraindications, and patient preferences.',
      explanation: `**Risk-Benefit Assessment:**

*Timing Matters:*
- Favorable benefit-risk <60 years old
- Favorable benefit-risk <10 years since menopause
- "Timing hypothesis": Early initiation may be cardioprotective
- Late initiation (>60 or >10 years post-menopause) has higher risk

*Individual Risk Factors:*
- VTE risk: Obesity, immobility, surgery, thrombophilia
- Breast cancer: Family history, BRCA, breast density
- CVD: Existing disease, risk factors
- Bone: Fracture risk, osteoporosis

**Route Selection:**

*Transdermal Preferred When:*
- VTE risk elevated
- Triglycerides elevated
- Obesity
- Migraine with aura
- Hypertension
- Gallbladder disease

*Oral Acceptable When:*
- No VTE risk factors
- Patient preference
- Cost considerations

**Progestogen Selection:**

*Micronized Progesterone:*
- More favorable lipid profile
- May have less breast cancer risk
- Better sleep (sedative)
- First-line for many

*Synthetic Progestins (MPA):*
- More data (WHI used MPA)
- Less favorable lipid effects
- May have higher breast cancer risk
- Less expensive

*LNG-IUD:*
- Excellent endometrial protection
- Avoids systemic progestogen
- Good for perimenopausal women

**Dosing:**

*General Principles:*
- Start low, titrate to effect
- Lowest effective dose
- Reassess periodically

*Standard Doses:*
- CEE: 0.3-0.625 mg (low-standard)
- Oral estradiol: 0.5-1 mg
- Transdermal estradiol: 0.025-0.05 mg/day

**Duration:**

*No Arbitrary Limit:*
- Continue as long as benefits outweigh risks
- Reassess annually
- Consider dose reduction over time
- Individual decision

**Monitoring:**
- Annual visit
- Breast exam and mammography
- Blood pressure
- Evaluate ongoing need`,
      keyTerms: [
        { term: 'timing hypothesis', definition: 'Theory that HT is safer and potentially cardioprotective when started close to menopause' },
        { term: 'micronized progesterone', definition: 'Bioidentical progesterone processed for better absorption; may have better safety profile' },
        { term: 'MPA', definition: 'Medroxyprogesterone acetate; synthetic progestin used in WHI' },
      ],
      clinicalNotes: 'The key messages from WHI have evolved: For symptomatic women under 60 or within 10 years of menopause, benefits typically outweigh risks. Transdermal estrogen has a better VTE profile. Micronized progesterone may be safer than synthetic progestins.',
    },
    4: {
      level: 4,
      summary: 'Contemporary MHT practice integrates post-WHI evidence, emphasizes transdermal routes and bioidentical formulations, and uses shared decision-making for individualized therapy.',
      explanation: `**WHI Reinterpretation:**

*Original Findings (2002):*
- EPT arm stopped early: ↑ breast cancer, CVD events
- Headlines led to dramatic HT decline
- Context: Average age 63, many years post-menopause

*Current Understanding:*
- Age at initiation matters critically
- Absolute risks small in younger women
- ET-only arm showed decreased breast cancer
- Transdermal likely safer than oral

*WHI Numbers in Perspective (per 10,000 woman-years):*
- Breast cancer: +8 (EPT) vs. -7 (ET only)
- Stroke: +8
- VTE: +18
- Hip fracture: -5
- Colorectal cancer: -6 (EPT)

**Formulation Nuances:**

*Bioidentical vs. Synthetic:*
- "Bioidentical" = chemically identical to human hormones
- FDA-approved bioidentical options exist
- Estradiol (E2) is bioidentical
- Progesterone is bioidentical
- CEE contains multiple estrogens (not bioidentical)

*Compounded Hormones:*
- Not FDA regulated
- Variable quality
- Saliva testing unreliable
- Not recommended over FDA-approved

**Special Situations:**

*Premature Ovarian Insufficiency:*
- HT recommended until natural menopause age
- Higher doses often needed
- Important for bone and CV health
- Continue until at least age 50-51

*Surgical Menopause:*
- Abrupt hormone withdrawal
- More severe symptoms
- ET alone if no uterus
- May need higher doses initially

*History of VTE:*
- Relative contraindication to oral
- Transdermal may be acceptable with counseling
- Vaginal estrogen usually safe
- Shared decision-making

**Stopping HT:**

*Strategies:*
- Gradual taper vs. abrupt stop
- No evidence one is better
- Symptoms may recur (50%)
- Some need to restart
- Individual decision

*Can Continue If:*
- Benefits > risks for that individual
- Annual reassessment
- Informed consent
- Lowest effective dose`,
      keyTerms: [
        { term: 'WHI', definition: 'Women\'s Health Initiative; landmark trial that changed HT practice' },
        { term: 'bioidentical', definition: 'Hormones chemically identical to those made by the human body' },
        { term: 'CEE', definition: 'Conjugated equine estrogens; derived from horse urine, used in WHI' },
      ],
      clinicalNotes: 'The pendulum has swung back toward appropriate HT use. Many women were unnecessarily denied symptom relief due to misinterpretation of WHI. The key is individualized risk-benefit assessment, not blanket avoidance.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based MHT practice requires ongoing attention to evolving literature, addresses health equity in menopause care, and integrates shared decision-making with accurate risk communication.',
      explanation: `**Current Guidelines Synthesis:**

*NAMS 2022:*
- MHT most effective for VMS
- Benefits outweigh risks for most symptomatic women <60 or <10 years post-menopause
- Transdermal preferred for many
- No arbitrary duration limit
- Individualize therapy

*Endocrine Society:*
- Supports MHT for symptomatic women
- Emphasizes timing
- Recommends transdermal for elevated VTE risk
- Annual reassessment

**Ongoing Research:**

*KEEPS Trial:*
- Younger women (age 42-58)
- Low-dose HT
- No increase in atherosclerosis
- Supports timing hypothesis

*ELITE Trial:*
- Early vs. late initiation
- Early initiation slowed atherosclerosis
- Late initiation did not
- Supports critical window

*REPLENISH Trial:*
- TX-001HR (E2/progesterone combo)
- FDA-approved combination
- Effective with good safety

**Emerging Options:**

*Tissue-Selective Estrogen Complex (TSEC):*
- Bazedoxifene + CEE (Duavee)
- No progestogen needed
- SERM protects endometrium
- Option for uterus-intact women

*Estetrol (E4):*
- Fetal estrogen
- Selective tissue activity
- Oral contraceptive approved
- MHT studies ongoing

*Neurokinin Antagonists:*
- Non-hormonal VMS treatment
- Fezolinetant FDA approved
- For women who cannot/prefer not to use HT

**Quality and Access:**

*Disparities:*
- Race: Black women more symptomatic, less treated
- SES: Access barriers
- Rural: Specialist access limited
- Knowledge: Misinformation about HT

*Improving Care:*
- Provider education
- NAMS certification
- Menopause societies
- Patient resources

**Shared Decision-Making:**

*Risk Communication:*
- Absolute vs. relative risk
- Visual aids
- Individual risk factors
- Acknowledge uncertainty

*Values Clarification:*
- Symptom impact on life
- Risk tolerance
- Preferences about medications
- Concerns about "hormones"

*Decision Aids:*
- NAMS app
- Online calculators
- Printed materials
- Follow-up discussion

**Research Priorities:**

*Identified Needs:*
- Longer-term safety data
- Transdermal-specific outcomes
- Progesterone vs. progestin
- Cognitive outcomes
- Diverse populations
- Optimal stopping strategies`,
      keyTerms: [
        { term: 'KEEPS trial', definition: 'Kronos Early Estrogen Prevention Study; showed safety of early HT initiation' },
        { term: 'TSEC', definition: 'Tissue-selective estrogen complex; combines estrogen with SERM for endometrial protection' },
        { term: 'absolute risk', definition: 'Actual probability of an event; more meaningful than relative risk for patient decisions' },
      ],
      clinicalNotes: 'Accurate risk communication is essential - many patients (and providers) overestimate HT risks due to WHI headlines. Using absolute risks and individualized calculators helps facilitate informed decisions. Many symptomatic women are good candidates for HT.',
    },
  },

  media: [
    {
      id: 'ht-formulations',
      type: 'diagram',
      filename: 'hormone-therapy-options.svg',
      title: 'Hormone Therapy Formulations',
      description: 'Overview of estrogen and progestogen delivery options',
    },
  ],

  citations: [
    {
      id: 'nams-2022',
      type: 'article',
      title: 'The 2022 Hormone Therapy Position Statement of NAMS',
      source: 'Menopause',
      authors: ['North American Menopause Society'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-menopause-overview', targetType: 'process', relationship: 'parent', label: 'Menopause Overview' },
    { targetId: 'obgyn-menopause-symptoms', targetType: 'topic', relationship: 'related', label: 'Menopause Symptoms' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['menopause', 'hormone therapy', 'pharmacology'],
    keywords: ['HRT', 'hormone therapy', 'estrogen', 'menopause treatment'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
