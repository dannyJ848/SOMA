/**
 * Menopause Overview
 *
 * Comprehensive coverage of menopause including physiology,
 * symptoms, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const menopauseOverview: EducationalContent = {
  id: 'obgyn-menopause-overview',
  type: 'process',
  name: 'Menopause Overview',
  alternateNames: ['The Change', 'Climacteric', 'Change of Life'],

  levels: {
    1: {
      level: 1,
      summary: 'Menopause is when a woman\'s periods stop permanently, usually around age 50, marking the end of her reproductive years.',
      explanation: `Menopause is a natural part of aging for all women. It happens when the ovaries stop releasing eggs and making hormones.

**When does it happen?**
- Average age is 51 years
- Normal range is 45-55 years
- It's confirmed after 12 months with no period

**Common symptoms:**
- Hot flashes (sudden feeling of warmth)
- Night sweats
- Trouble sleeping
- Mood changes
- Vaginal dryness
- Less interest in sex

**What's happening in your body:**
- Ovaries make less estrogen and progesterone
- Periods become irregular, then stop
- Fertility ends

**The good news:**
- Many symptoms get better over time
- Treatments are available for bothersome symptoms
- It's a normal transition, not a disease`,
      keyTerms: [
        { term: 'menopause', definition: 'When periods stop permanently; confirmed after 12 months without a period' },
        { term: 'hot flash', definition: 'A sudden feeling of warmth, usually in the face and upper body' },
        { term: 'estrogen', definition: 'A hormone made by the ovaries; levels drop at menopause' },
      ],
      analogies: [
        'Menopause is like the ovaries retiring after decades of work - they gradually slow down and then stop their monthly routine.',
      ],
      examples: [
        'A woman might notice her periods getting lighter and less frequent starting in her late 40s, and then they stop completely around age 51.',
      ],
    },
    2: {
      level: 2,
      summary: 'Menopause is defined as 12 months of amenorrhea due to loss of ovarian follicular function, preceded by the menopausal transition (perimenopause) and followed by postmenopause.',
      explanation: `**Definitions:**

*Perimenopause (Menopausal Transition):*
- Begins with irregular cycles
- Average duration 4 years
- Vasomotor symptoms begin
- Ends 12 months after final period

*Menopause:*
- Final menstrual period
- Average age 51 years
- Diagnosed retrospectively after 12 months amenorrhea

*Postmenopause:*
- Years after menopause
- Symptoms may continue
- Long-term health considerations

**Hormone Changes:**
- FSH rises (no negative feedback)
- Estrogen declines (ovaries stop producing)
- Progesterone declines (no ovulation)
- Testosterone gradually declines

**Common Symptoms:**

*Vasomotor:*
- Hot flashes (75% of women)
- Night sweats
- Sleep disturbance

*Genitourinary:*
- Vaginal dryness and atrophy
- Painful intercourse
- Urinary symptoms

*Other:*
- Mood changes
- Brain fog/memory concerns
- Joint pain
- Weight changes

**Diagnosis:**
- Clinical diagnosis based on age and symptoms
- FSH testing rarely needed if age >45
- May need testing if <45 or uncertain

**Long-term Health:**
- Bone loss accelerates (osteoporosis risk)
- Cardiovascular risk increases
- Need for preventive care`,
      keyTerms: [
        { term: 'perimenopause', definition: 'The transition period before menopause when hormones fluctuate and periods become irregular' },
        { term: 'vasomotor symptoms', definition: 'Hot flashes and night sweats caused by changes in temperature regulation' },
        { term: 'FSH', definition: 'Follicle-stimulating hormone; rises when ovaries stop responding' },
      ],
    },
    3: {
      level: 3,
      summary: 'Menopause results from ovarian follicular depletion, causing estrogen deficiency with systemic effects on vasomotor regulation, genitourinary tissues, bone metabolism, and cardiovascular health.',
      explanation: `**Physiology:**

*Ovarian Aging:*
- Follicle pool depleted
- Remaining follicles less responsive
- FSH rises to stimulate ovaries
- Eventually no follicles remain

*Hormonal Changes:*
| Hormone | Change | Clinical Effect |
|---------|--------|-----------------|
| FSH | ↑ Elevated | Marker of menopause |
| LH | ↑ Elevated | Less dramatic than FSH |
| Estradiol | ↓ Decreased | Primary driver of symptoms |
| Progesterone | ↓ Absent | No ovulation |
| AMH | ↓ Undetectable | Reflects follicle depletion |

**STRAW+10 Staging:**

*Reproductive:*
- -5 to -3: Variable cycles
- -3 to -1: Regular but shorter cycles

*Menopausal Transition:*
- -2: Variable cycle length
- -1: ≥60 days between periods

*Postmenopause:*
- +1a: 1 year after FMP
- +1b: Years 1-2
- +1c: Years 3-6
- +2: >6 years after FMP

**Vasomotor Symptoms:**

*Mechanism:*
- Thermoregulatory dysfunction
- Narrowed thermoneutral zone
- Small temperature changes trigger sweating
- Norepinephrine, serotonin involved

*Characteristics:*
- Sudden onset
- Duration 1-5 minutes
- Variable frequency
- More common at night
- Last average 7 years

**Genitourinary Syndrome of Menopause (GSM):**

*Previously: Vulvovaginal atrophy*

*Features:*
- Vaginal dryness
- Burning, itching
- Dyspareunia
- Urinary urgency, frequency
- Recurrent UTIs

*Pathophysiology:*
- Loss of estrogen receptors
- Decreased blood flow
- Epithelial thinning
- pH increases (less protective)

**Bone Health:**
- Accelerated bone loss first 5-7 years
- 20% of bone loss occurs
- Trabecular bone affected more
- Fracture risk increases`,
      keyTerms: [
        { term: 'STRAW+10', definition: 'Stages of Reproductive Aging Workshop criteria; standardized staging system for menopause' },
        { term: 'genitourinary syndrome of menopause', definition: 'Constellation of vulvovaginal and urinary symptoms from estrogen deficiency' },
        { term: 'thermoneutral zone', definition: 'Temperature range in which the body doesn\'t need to cool or heat itself; narrowed in menopause' },
      ],
      clinicalNotes: 'The menopausal transition is a continuum, not a single event. STRAW+10 provides standardized staging. FSH testing is rarely needed for diagnosis in women >45 with typical symptoms.',
    },
    4: {
      level: 4,
      summary: 'Menopause management requires individualized risk-benefit assessment for hormone therapy, integration of non-hormonal options, and attention to long-term preventive care.',
      explanation: `**Hormone Therapy (HT) Decision-Making:**

*Benefits:*
- Most effective treatment for vasomotor symptoms
- Treats GSM
- Prevents bone loss
- May improve quality of life

*Risks:*
- VTE (primarily oral estrogen)
- Stroke (oral estrogen)
- Breast cancer (with progestogen, long duration)
- Gallbladder disease

*Risk-Benefit Balance:*
- Most favorable <60 years and <10 years since menopause
- Benefits likely outweigh risks for symptomatic women
- Individualize based on personal risk factors

**HT Formulations:**

*Estrogen:*
- Oral: Conjugated equine, estradiol
- Transdermal: Patch, gel, spray
- Vaginal: Cream, ring, tablet (local GSM)

*Progestogen (if uterus present):*
- Oral: MPA, micronized progesterone
- Transdermal: Combined patches
- Intrauterine: LNG-IUD

*Combined:*
- Continuous (no bleeding)
- Cyclic (monthly bleeding)

*Transdermal vs. Oral:*
- Transdermal: Lower VTE risk
- Transdermal: Preferred in obesity, migraine, hypertriglyceridemia

**Non-Hormonal Options:**

*For Vasomotor Symptoms:*
- Fezolinetant (neurokinin antagonist) - FDA approved
- SSRIs/SNRIs (paroxetine FDA approved)
- Gabapentin
- Clonidine
- Cognitive behavioral therapy
- Hypnosis
- Weight loss

*For GSM:*
- Vaginal moisturizers
- Lubricants
- Ospemifene (SERM)
- DHEA vaginal inserts

**Screening and Prevention:**

*Bone Health:*
- DEXA at 65 or earlier if risk factors
- FRAX assessment
- Lifestyle: Weight-bearing exercise, calcium, vitamin D

*Cardiovascular:*
- HT not for CVD prevention
- Address modifiable risk factors
- BP, lipids, glucose monitoring

*Breast Cancer:*
- Mammography per guidelines
- HT duration consideration

**Special Populations:**

*Premature Ovarian Insufficiency (POI):*
- Menopause <40 years
- Consider HT until natural menopause age
- Higher bone and CVD risk

*Surgical Menopause:*
- Abrupt hormone loss
- Often more severe symptoms
- May benefit from HT`,
      keyTerms: [
        { term: 'fezolinetant', definition: 'Non-hormonal neurokinin antagonist FDA-approved for vasomotor symptoms' },
        { term: 'premature ovarian insufficiency', definition: 'Loss of ovarian function before age 40' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; estimates 10-year fracture probability' },
      ],
      clinicalNotes: 'The "timing hypothesis" suggests HT is safer and potentially cardioprotective when started close to menopause (<60 years, <10 years since FMP). This informs current guidelines recommending HT primarily for symptomatic women in this window.',
    },
    5: {
      level: 5,
      summary: 'Contemporary menopause care emphasizes personalized therapy selection, addresses the full spectrum of menopausal health impacts, and integrates emerging treatments while acknowledging evolving evidence.',
      explanation: `**Current Guidelines Evolution:**

*NAMS 2022 Position Statement:*
- HT remains most effective for VMS
- Benefits outweigh risks for most symptomatic women <60 or <10 years post-menopause
- Transdermal preferred for many indications
- Low-dose vaginal estrogen safe for most

*Endocrine Society Guidelines:*
- Support MHT for symptomatic women
- Individualized approach
- Regular reassessment
- No arbitrary stopping time

**Emerging Treatments:**

*Neurokinin Antagonists:*
- Target NK3R in hypothalamus
- Fezolinetant FDA approved 2023
- Non-hormonal efficacy
- For women who cannot/choose not to use HT

*Tissue-Selective Estrogen Complexes:*
- Conjugated estrogens + bazedoxifene
- No progestogen needed
- Endometrial protection built in

*Research Pipeline:*
- GPER agonists
- Selective estrogen mimetics
- Additional NK antagonists

**Cardiovascular Considerations:**

*Timing Hypothesis Evidence:*
- ELITE trial: ET slowed atherosclerosis if started early
- Observational data support early initiation benefit
- Late initiation may increase risk
- Not for CVD prevention regardless of timing

*Metabolic Effects:*
- HT generally metabolically favorable
- May improve insulin sensitivity
- Effect on weight variable

**Brain and Cognition:**

*Concerns:*
- "Brain fog" common complaint
- WHIMS showed increased dementia risk (older women)
- Timing hypothesis may apply

*Current Understanding:*
- VMS may impair cognition
- Treating VMS may help
- Not recommended for dementia prevention
- Research ongoing

**Compounded Bioidentical Hormones:**

*Issues:*
- Not FDA regulated
- Variable potency
- Saliva testing unreliable
- Marketing claims exceed evidence

*Counseling:*
- FDA-approved bioidentical options exist
- Safety concerns with compounding
- Individualized preparation rarely needed

**Quality of Care:**

*Gaps Identified:*
- Undertreated symptoms
- Provider discomfort with HT
- Fear-based decisions
- Limited menopause education

*Improving Care:*
- NAMS certification
- Menopause society resources
- Shared decision-making tools
- Patient education

**Research Priorities:**

*Identified Needs:*
- Long-term HT safety data
- Optimal stopping strategies
- Non-hormonal treatment development
- Precision medicine approaches
- Diverse population research
- Sexual health interventions`,
      keyTerms: [
        { term: 'timing hypothesis', definition: 'Theory that HT is safer and potentially beneficial when started close to menopause' },
        { term: 'tissue-selective estrogen complex', definition: 'Estrogen paired with SERM for endometrial protection without progestogen' },
        { term: 'NAMS', definition: 'North American Menopause Society; leading professional organization for menopause care' },
      ],
      clinicalNotes: 'Many women are undertreated for menopause symptoms due to lingering fears from early WHI reports. Contemporary evidence supports HT for most symptomatic women under 60. Shared decision-making with accurate risk communication is essential.',
    },
  },

  media: [
    {
      id: 'menopause-stages',
      type: 'diagram',
      filename: 'straw-staging.svg',
      title: 'STRAW+10 Menopause Staging',
      description: 'Timeline of reproductive aging stages',
    },
  ],

  citations: [
    {
      id: 'nams-position',
      type: 'article',
      title: 'The 2022 Hormone Therapy Position Statement',
      source: 'North American Menopause Society',
      authors: ['North American Menopause Society'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-menopause-hormone-therapy', targetType: 'topic', relationship: 'child', label: 'Hormone Therapy' },
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['menopause', 'gynecology', 'hormone therapy'],
    keywords: ['menopause', 'hot flashes', 'hormone therapy', 'perimenopause'],
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
