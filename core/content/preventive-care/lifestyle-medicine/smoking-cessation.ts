/**
 * Smoking Cessation
 *
 * Comprehensive education on tobacco treatment and quitting smoking.
 */

import { EducationalContent } from '../../types';

export const SMOKING_CESSATION: EducationalContent = {
  id: 'concept-smoking-cessation',
  type: 'concept',
  name: 'Smoking Cessation',
  alternateNames: ['Quitting smoking', 'Tobacco treatment', 'Stop smoking'],

  levels: {
    1: {
      level: 1,
      summary: 'Quitting smoking is the single best thing you can do for your health, and help is available to make it easier.',
      explanation: `Smoking is the leading cause of preventable death, but quitting at any age provides health benefits.

**Benefits of Quitting:**
- Within 20 minutes: Heart rate drops
- Within 12 hours: Carbon monoxide normalizes
- Within 2 weeks: Circulation improves
- Within 1-9 months: Coughing decreases
- Within 1 year: Heart disease risk cut in half
- Within 5-15 years: Stroke risk equals non-smoker

**Ways to Quit:**
- Nicotine replacement (patches, gum, lozenges)
- Prescription medications
- Counseling and support groups
- Quitlines (1-800-QUIT-NOW)
- Apps and text programs

**Tips for Success:**
- Set a quit date
- Tell friends and family
- Get rid of cigarettes and ashtrays
- Identify triggers
- Have a plan for cravings`,
      keyTerms: [
        { term: 'nicotine replacement', definition: 'Products that give you nicotine without smoking to reduce cravings' },
        { term: 'withdrawal', definition: 'Symptoms that occur when you stop using nicotine' },
      ],
      analogies: ['Quitting smoking is like breaking free from a trap - difficult at first but liberating once done.'],
      examples: ['Using nicotine patches and a support group, Maria quit smoking after 20 years and now breathes easier.'],
    },
    2: {
      level: 2,
      summary: 'Tobacco dependence treatment combines behavioral counseling with pharmacotherapy, with combination approaches doubling quit rates compared to either alone.',
      explanation: `**USPSTF Recommendation:**
- Grade A: Ask all adults about tobacco use
- Provide behavioral interventions and FDA-approved medications

**Pharmacotherapy Options:**

*Nicotine Replacement Therapy (NRT):*
- Patch, gum, lozenge, inhaler, nasal spray
- OTC (patch, gum, lozenge)
- Combination more effective (patch + short-acting)

*Varenicline (Chantix):*
- Most effective single agent
- Partial nicotine receptor agonist
- 12-week course typical

*Bupropion (Zyban/Wellbutrin):*
- Norepinephrine-dopamine reuptake inhibitor
- Also treats depression
- Start 1 week before quit date

**5 A's Framework:**
- Ask about tobacco use
- Advise to quit
- Assess readiness
- Assist with treatment
- Arrange follow-up

**Counseling:**
- Behavioral therapy increases quit rates
- Quitlines effective and accessible
- Combined with medication optimal`,
      keyTerms: [
        { term: 'varenicline', definition: 'Prescription medication that blocks nicotine effects and reduces cravings' },
        { term: 'NRT', definition: 'Nicotine replacement therapy; provides nicotine without smoking' },
        { term: '5 A\'s', definition: 'Brief intervention framework for tobacco cessation counseling' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Tobacco treatment integrates understanding of nicotine addiction neurobiology, evidence-based pharmacotherapy, and behavioral interventions, with combination treatment providing optimal outcomes.',
      explanation: `**Neurobiology of Addiction:**
- Nicotine binds nAChR (alpha-4 beta-2)
- Dopamine release in nucleus accumbens
- Neuroadaptation → tolerance, dependence
- Withdrawal symptoms drive continued use

**Medication Evidence:**

| Treatment | Quit Rate vs Placebo |
|-----------|---------------------|
| Counseling alone | 1.3x |
| NRT (single) | 1.5-2x |
| NRT (combination) | 2x |
| Bupropion | 1.5-2x |
| Varenicline | 2-3x |
| Varenicline + NRT | 2.5-3.5x |

**Special Populations:**

*Pregnancy:*
- Behavioral counseling first-line
- NRT if counseling insufficient
- Avoid varenicline and bupropion

*Psychiatric Comorbidity:*
- Higher smoking rates
- Treatment safe and effective
- Monitor mental health
- FDA boxed warning removed

*E-Cigarettes:*
- Not FDA-approved for cessation
- May help some quit
- Not harm-free
- Youth epidemic concern`,
      keyTerms: [
        { term: 'nicotinic acetylcholine receptor', definition: 'Brain receptor activated by nicotine, mediating reward and dependence' },
        { term: 'tobacco use disorder', definition: 'DSM-5 diagnosis for nicotine dependence' },
      ],
      analogies: [],
      clinicalNotes: 'Combination NRT + varenicline most effective. Address psychiatric comorbidity. E-cigarettes not recommended as cessation aid. Behavioral support enhances medication efficacy.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive tobacco treatment addresses dual use with e-cigarettes, integrates with chronic disease management, and utilizes population-level tobacco control policies for maximum impact.',
      explanation: `**E-Cigarettes:**
- Not FDA-approved for cessation
- Some switch from combustibles
- Dual use problematic
- Youth initiation concern
- Unknown long-term effects
- EVALI outbreak highlighted risks

**Health Systems Approaches:**
- EHR prompts for screening
- Tobacco treatment referral systems
- Integration with chronic disease care
- Quality metrics

**Policy Interventions:**
- Taxation: Most effective deterrent
- Smoke-free laws: Reduce exposure and encourage quitting
- Marketing restrictions
- Plain packaging
- Minimum age laws

**Harm Reduction Debate:**
- Tobacco harm reduction concept
- Snus, heated tobacco products
- Controversial among experts
- Complete abstinence preferred

**Relapse Prevention:**
- Common (50-70% relapse within year)
- Extended pharmacotherapy
- Address triggers
- Continued support`,
      keyTerms: [
        { term: 'EVALI', definition: 'E-cigarette or vaping product use-associated lung injury' },
        { term: 'harm reduction', definition: 'Strategies to reduce health damage from continued tobacco use' },
        { term: 'dual use', definition: 'Simultaneous use of cigarettes and e-cigarettes' },
      ],
      analogies: [],
      clinicalNotes: 'E-cigarettes not recommended for cessation. Implement systematic screening. Support policy interventions. Relapse is common - treat as chronic condition.',
    },
    5: {
      level: 5,
      summary: 'Precision tobacco treatment integrates genetic and biomarker approaches, addresses persistent disparities, and navigates the evolving nicotine product landscape while advancing tobacco endgame strategies.',
      explanation: `**Precision Approaches:**
- Pharmacogenomics (CYP2A6)
- Nicotine metabolism biomarkers
- Personalized treatment selection
- Genotype-guided dosing

**Disparities:**
- Higher rates in low-income, less educated
- LGBTQ+ community higher rates
- Mental health populations
- Menthol marketing to Black communities

**Tobacco Endgame:**
- Nicotine reduction policy
- Tobacco-free generation
- Very low nicotine content cigarettes
- Menthol ban proposals

**Research Frontiers:**
- Nicotine vaccines
- Novel receptor targets
- Digital therapeutics
- Implementation science

**Global Tobacco Control:**
- WHO FCTC implementation
- MPOWER strategies
- Global progress uneven
- Industry interference`,
      keyTerms: [
        { term: 'CYP2A6', definition: 'Enzyme metabolizing nicotine; genetic variants affect smoking behavior and treatment response' },
        { term: 'tobacco endgame', definition: 'Strategies to end tobacco use as a public health problem' },
        { term: 'WHO FCTC', definition: 'Framework Convention on Tobacco Control; international treaty' },
      ],
      analogies: [],
      clinicalNotes: 'Precision approaches emerging. Address disparities including menthol. Support tobacco endgame policies. Nicotine metabolism affects treatment. Stay current on product landscape.',
    },
  },

  media: [],
  citations: [
    {
      id: 'uspstf-tobacco',
      type: 'website',
      title: 'Tobacco Smoking Cessation in Adults',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/tobacco-use-in-adults-and-pregnant-women-counseling-and-interventions',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [
    { targetId: 'concept-lung-cancer-screening', targetType: 'concept', relationship: 'related', label: 'Lung Cancer Screening' },
  ],
  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['preventive medicine', 'addiction medicine', 'lifestyle medicine'],
    keywords: ['smoking', 'tobacco', 'cessation', 'nicotine', 'quit smoking'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine', 'psychiatry'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
