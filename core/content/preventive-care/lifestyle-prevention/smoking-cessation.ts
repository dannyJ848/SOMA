/**
 * Smoking Cessation for Disease Prevention
 *
 * Comprehensive education on tobacco cessation strategies, pharmacotherapy,
 * and prevention of smoking-related diseases.
 */

import { EducationalContent } from '../../types';

export const SMOKING_CESSATION_PREVENTION: EducationalContent = {
  id: 'preventive-smoking-cessation',
  type: 'concept',
  name: 'Smoking Cessation for Disease Prevention',
  alternateNames: ['Tobacco cessation', 'Quit smoking', 'Nicotine addiction treatment', 'Smoking cessation therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Quitting smoking is one of the best things you can do for your health, with benefits starting within minutes and continuing for years.',
      explanation: `Smoking harms nearly every organ in your body. The good news is that quitting at any age brings health benefits, and it is never too late to stop.

**Why Quit Smoking?**

*Immediate Benefits (within days):*
- Heart rate and blood pressure drop
- Carbon monoxide levels in blood normalize
- Circulation improves

*Long-term Benefits:*
- 1 year: Heart disease risk cut in half
- 5 years: Stroke risk same as non-smoker
- 10 years: Lung cancer risk drops 50%
- 15 years: Heart disease risk same as never-smoker

**What Makes Quitting Hard:**

*Nicotine Addiction:*
- Nicotine reaches brain in 10 seconds
- Creates temporary feeling of relaxation
- Brain craves more nicotine
- Withdrawal causes irritability, anxiety, difficulty concentrating

*Habits and Triggers:*
- Smoking with coffee or after meals
- Smoking when stressed or bored
- Social situations with other smokers
- Driving or talking on phone

**Ways to Quit:**

*Cold Turkey:*
- Stopping all at once
- Works for some people
- No cost

*Gradual Reduction:*
- Slowly cutting back
- May be easier for some
- Takes longer

*With Help:*
- Medicines reduce cravings
- Counseling improves success
- Support groups help
- Apps and quitlines available

**Medicines That Help:**

*Nicotine Replacement:*
- Patches (worn on skin)
- Gum or lozenges
- Inhalers or nasal spray
- Provide nicotine without harmful smoke

*Prescription Medicines:*
- Varenicline (Chantix)
- Bupropion (Zyban)
- Reduce cravings and withdrawal

**Tips for Success:**
- Pick a quit date
- Tell friends and family for support
- Remove cigarettes and ashtrays
- Identify your triggers
- Find healthy alternatives
- Be prepared for slip-ups
- Get back on track if you slip

**Getting Help:**
- Call 1-800-QUIT-NOW for free support
- Talk to your doctor
- Join a quit smoking program
- Use quit smoking apps
- Connect with others quitting`,
      keyTerms: [
        { term: 'nicotine', definition: 'The addictive chemical in tobacco that makes quitting difficult' },
        { term: 'withdrawal', definition: 'Uncomfortable symptoms that happen when you stop using an addictive substance' },
        { term: 'trigger', definition: 'Something that makes you want to smoke, like stress or certain activities' },
        { term: 'nicotine replacement', definition: 'Products that give you small amounts of nicotine to help quit smoking' },
      ],
      analogies: [
        'Quitting smoking is like breaking up with a bad partner - it is hard at first, but your life gets so much better afterward.',
        'Nicotine addiction is like having a mosquito bite - the more you scratch (smoke), the more it itches (you crave more).',
      ],
      examples: [
        'Sarah smoked a pack a day for 20 years. After quitting with nicotine patches and counseling, she saved over $3,000 in the first year and could walk upstairs without getting winded.',
        'Mike tried quitting 5 times before succeeding. Using varenicline and a support group, he has been smoke-free for 3 years.',
      ],
      patientCounselingPoints: [
        'Most people try several times before quitting for good - this is normal',
        'Medicines double or triple your chances of success',
        'Benefits start within hours of quitting',
        'It is never too late to quit - benefits happen at any age',
        'Free help is available - call 1-800-QUIT-NOW',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based smoking cessation combines behavioral counseling with pharmacotherapy, increasing quit rates from 5% to 25-35%, while preventing cardiovascular disease, cancer, and COPD.',
      explanation: `Tobacco use is the leading preventable cause of death worldwide. Understanding effective cessation strategies is essential for disease prevention.

**Health Consequences of Smoking:**

*Cancers:*
- Lung (85% of cases)
- Oral, throat, esophageal
- Bladder, kidney, pancreas
- Cervical, acute myeloid leukemia

*Cardiovascular Disease:*
- Coronary artery disease
- Stroke
- Peripheral artery disease
- Aortic aneurysm

*Respiratory Disease:*
- COPD (chronic bronchitis, emphysema)
- Asthma exacerbation
- Increased respiratory infections

**Epidemiology:**
- 480,000 deaths annually in US
- $300 billion in healthcare costs and lost productivity
- 34 million adults currently smoke in US
- Declining but still prevalent

**The 5A\'s Framework:**

*Ask:* Systematically identify all tobacco users
*Advise:* Strongly urge all smokers to quit
*Assess:* Determine willingness to quit
*Assist:* Provide counseling and medication
*Arrange:* Schedule follow-up contacts

**Behavioral Interventions:**

*Counseling Types:*
| Type | Effectiveness | Description |
|------|--------------|-------------|
| Brief advice | Increases quit rate | 3 minutes by provider |
| Individual counseling | Doubles quit rate | Scheduled sessions |
| Group counseling | Doubles quit rate | Peer support |
| Telephone quitlines | Effective | 1-800-QUIT-NOW |
| Web/app based | Moderate | Self-guided programs |

*Key Counseling Components:*
- Problem-solving/skills training
- Provide social support
- Enhance motivation
- Practical counseling (tips, techniques)

**Pharmacotherapy:**

*First-Line Medications:*

1. **Nicotine Replacement Therapy (NRT)**
   - Patch: Steady nicotine levels, once daily
   - Gum: 2mg or 4mg, for breakthrough cravings
   - Lozenge: 2mg or 4mg, discreet option
   - Inhaler: Behavioral substitute
   - Nasal spray: Fast relief, prescription only
   - Combination therapy (patch + gum) most effective

2. **Varenicline (Chantix)**
   - Partial nicotine agonist
   - Reduces cravings and withdrawal
   - Blocks nicotine receptors
   - Most effective single agent
   - 12-week course typical

3. **Bupropion SR (Zyban)**
   - Antidepressant mechanism
   - Reduces cravings
   - Also used for depression
   - Contraindicated in seizure disorders

*Efficacy Rates (6-month abstinence):*
| Intervention | Quit Rate |
|--------------|-----------|
| Placebo | 5-10% |
| NRT single | 15-20% |
| NRT combination | 25-30% |
| Bupropion | 20-25% |
| Varenicline | 25-35% |
| Counseling + medication | 30-35% |

**Special Populations:**

*Pregnant Women:*
- Quitting benefits outweigh risks
- Behavioral counseling first-line
- NRT if counseling fails (risk-benefit)
- Avoid varenicline, bupropion

*Adolescents:*
- Counseling essential
- NRT approved 18+
- Prevention more effective than cessation

*Mental Health Conditions:*
- Higher smoking rates
- May need more intensive treatment
- Monitor for mood changes
- Bupropion may help both conditions

**E-Cigarettes:**

*Current Evidence:*
- Less harmful than combustible cigarettes
- Not FDA-approved cessation device
- Some smokers successfully switch
- Youth initiation concern
- Dual use common and not beneficial

*Clinical Guidance:*
- Not recommended as first-line
- May help some patients quit
- Prefer complete cessation
- Monitor for continued use

**Relapse Prevention:**
- Most relapses occur within first 2 weeks
- First 3 months critical
- Continued counseling/medication helps
- Identify and manage triggers
- Develop coping strategies`,
      keyTerms: [
        { term: '5A\'s', definition: 'Clinical framework for tobacco cessation: Ask, Advise, Assess, Assist, Arrange' },
        { term: 'varenicline', definition: 'Prescription medication that reduces nicotine cravings by partially stimulating nicotine receptors' },
        { term: 'bupropion', definition: 'Antidepressant medication also used for smoking cessation' },
        { term: 'NRT', definition: 'Nicotine replacement therapy; provides nicotine without tobacco smoke' },
        { term: 'quitline', definition: 'Telephone-based counseling service for smoking cessation' },
      ],
      analogies: [
        'Quitting smoking without help is like climbing a mountain without equipment - possible but much harder than it needs to be.',
        'Nicotine addiction rewires your brain like malware on a computer - medication helps reset the system.',
      ],
      examples: [
        'The combination of nicotine patch plus gum increased 6-month quit rates to 28% compared to 12% with patch alone in clinical trials.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tobacco dependence is a chronic relapsing condition treated with combined behavioral and pharmacological interventions, with varenicline and combination NRT showing highest efficacy, while addressing neurobiological mechanisms of addiction and population-level prevention strategies.',
      explanation: `**Neurobiology of Nicotine Addiction:**

*Reward Pathway:*
- Nicotine binds to nicotinic acetylcholine receptors (nAChR)
- Dopamine release in nucleus accumbens
- Rapid reinforcement (10 seconds to brain)
- Creates conditioned associations

*Neuroadaptation:*
- Receptor upregulation with chronic use
- Withdrawal when levels drop
- Compensatory mechanisms
- Craving-driven behavior

*Genetic Factors:*
- Heritability of smoking initiation: ~50%
- Heritability of nicotine dependence: ~70%
- Variants in nAChR genes (CHRNA5, CHRNA3)
- CYP2A6 variation affects metabolism

**Evidence-Based Treatment:**

*Clinical Practice Guidelines (USPSTF, 2021):*
- Grade A: Behavioral interventions
- Grade A: FDA-approved medications
- Grade A: Combination of both
- Recommendation for all adults

*Medication Mechanisms:*

*Nicotine Replacement:*
- Replaces nicotine from cigarettes
- Reduces withdrawal symptoms
- Allows focus on behavioral change
- Gradual dose reduction

*Varenicline:*
- Partial agonist at alpha4beta2 nAChR
- Provides some dopamine stimulation
- Blocks nicotine from full stimulation
- Reduces reward from smoking

*Bupropion:*
- Norepinephrine-dopamine reuptake inhibitor
- May mimic nicotine effects
- Reduces cravings and withdrawal
- Antidepressant properties

*Combination Therapy:*
- Patch (steady state) + PRN (acute craving)
- More effective than monotherapy
- Standard of care
- All combinations safe

**Treatment Protocols:**

*Varenicline:*
- Start 1 week before quit date
- Dose escalation: 0.5mg daily x3 days, 0.5mg BID x4 days, then 1mg BID
- 12-week course
- Can extend to 24 weeks
- Take with food and water

*Combination NRT:*
- Patch: 21mg for 6 weeks, 14mg for 2 weeks, 7mg for 2 weeks (<10 cigs/day: start at 14mg)
- Gum/lozenge: 2-4mg PRN cravings (9-12 pieces/day typical)

*Monitoring:*
- Follow-up within first week
- Regular contacts first month
- Monthly thereafter
- Carbon monoxide verification

**Efficacy Data:**

*Network Meta-Analyses:*
- Varenicline vs placebo: RR 2.3
- Combination NRT vs placebo: RR 2.1
- Bupropion vs placebo: RR 1.6
- Single NRT vs placebo: RR 1.5

*Predictors of Success:*
| Factor | Impact on Success |
|--------|-------------------|
| Motivation | Essential |
| Previous quit attempts | Experience helps |
| Support system | Positive impact |
| Comorbid mental illness | May reduce success |
| Heavy smoking | More difficult |
| Combination therapy | Increases success |

**Population-Level Interventions:**

*Policy Approaches:*
- Tobacco taxes (most effective)
- Smoke-free laws
- Warning labels
- Marketing restrictions
- Access restrictions

*Healthcare System:*
- Cover cessation treatments
- Implement 5A\'s
- EHR prompts
- Performance measures

*Special Considerations:*

*COPD Patients:*
- Smoking cessation slows decline
- Single most important intervention
- May need more intensive support
- Consider pulmonary rehab

*Cardiovascular Disease:*
- Immediate benefits
- Part of secondary prevention
- No increased CV risk with NRT
- Varenicline safe post-MI

*Cancer Patients:*
- Improves treatment outcomes
- Reduces second primary risk
- Improves survival
- Essential part of care`,
      keyTerms: [
        { term: 'nAChR', definition: 'Nicotinic acetylcholine receptor; target of nicotine in the brain' },
        { term: 'partial agonist', definition: 'Drug that partially activates receptors, producing reduced effect compared to full agonist' },
        { term: 'CYP2A6', definition: 'Cytochrome P450 enzyme metabolizing nicotine; genetic variation affects metabolism rate' },
        { term: 'network meta-analysis', definition: 'Statistical method comparing multiple treatments using both direct and indirect comparisons' },
        { term: 'relapse', definition: 'Return to smoking after period of abstinence' },
      ],
      clinicalNotes: 'Use combination NRT or varenicline as first-line pharmacotherapy. Combine with behavioral counseling for optimal outcomes. Follow up within first week of quit date. Verify abstinence with carbon monoxide when possible. Address slips quickly to prevent full relapse. Consider extending treatment if cravings persist.',
    },
    4: {
      level: 4,
      summary: 'Advanced smoking cessation care addresses complex cases including severe mental illness, polysubstance use, and repeated relapses while implementing healthcare system strategies and understanding harm reduction approaches for patients unable to quit completely.',
      explanation: `**Complex Cases in Smoking Cessation:**

*Severe Mental Illness:*
- Smoking prevalence: 40-60% vs 14% general population
- Die 10-20 years earlier (smoking major contributor)
- Higher nicotine dependence
- Myth: Smoking helps mental health (actually worsens)
- Bupropion may benefit both conditions
- Varenicline safe with psychiatric conditions

*Polysubstance Use:*
- High comorbidity with alcohol use disorder
- Cannabis often mixed with tobacco
- Address all substances
- Integrated treatment preferred

*Homeless Populations:*
- Very high smoking rates
- Multiple barriers to cessation
- Harm reduction may be appropriate
- Need wraparound services

**Pharmacotherapy Deep Dive:**

*Varenicline Safety:*
- Early reports of neuropsychiatric events
- EAGLES trial: No increased risk vs placebo or bupropion
- Safe in stable psychiatric conditions
- Boxed warning removed
- Most effective single agent

*NRT Considerations:*
- Cardiovascular safety: Extensive data supports safety
- Pregnancy: Risk-benefit favors quitting
- Adolescents: Approved 18+, counseling essential <18
- Dose adjustments for heavy smokers

*Emerging Pharmacotherapies:*
- Cytisine: Plant alkaloid, Eastern Europe use
- Nicotine vaccines: Still investigational
- MAO inhibitors: Limited use
- Topiramate: Some evidence

**Harm Reduction Approach:**

*When Complete Cessation Not Achievable:*
- Reducing cigarettes beneficial
- Any reduction reduces exposure
- May be stepping stone to quitting
- Not endpoint but intermediate goal

*Reduced Exposure Products:*
- E-cigarettes: Less harmful, not harmless
- Heated tobacco: Reduced but not eliminated toxins
- Smokeless tobacco: Regional patterns
- Clinical approach: Prefer cessation, accept reduction if needed

**Healthcare System Implementation:**

*Chronic Care Model:*
- Identify all tobacco users
- Treat as chronic condition
- Multiple quit attempts expected
- Stepped care approach
- Long-term follow-up

*Electronic Health Records:*
- Tobacco use status
- Cessation medication prescribing
- Clinical decision support
- Registry functionality
- Quality reporting

*Quality Metrics:*
| Measure | Definition |
|---------|------------|
| Screening | % patients screened |
| Intervention | % smokers receiving treatment |
| Medication | % prescribed cessation meds |
| Follow-up | % with follow-up contact |
| Success | % 6-month abstinence |

**Counseling Techniques:**

*Motivational Interviewing:*
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy
- OARS: Open questions, Affirmations, Reflective listening, Summaries

*Cognitive Behavioral Therapy:*
- Identify triggers
- Develop coping strategies
- Challenge cognitive distortions
- Relapse prevention planning

*Mindfulness-Based Approaches:*
- Urge surfing
- Acceptance of cravings
- Present-moment awareness
- Growing evidence base

**Relapse Prevention:**

*Stages of Relapse:*
1. Emotional relapse (poor self-care)
2. Mental relapse (thinking about smoking)
3. Physical relapse (actual smoking)

*Prevention Strategies:*
- Identify early warning signs
- Develop coping plan
- Continue medications as needed
- Maintain support contacts
- Quick response to slips

*Managing Slips:*
- Normal part of process
- Not full relapse
- Analyze triggers
- Renew commitment
- Adjust treatment

**Special Clinical Scenarios:**

*Hospitalized Smokers:*
- Forced abstinence
- Teachable moment
- Start medication
- Post-discharge follow-up critical
- 30% quit rates possible

*Surgical Patients:*
- Quit 4-8 weeks before surgery
- Reduces complications
- Post-op: Higher relapse risk
- Extra support needed

*Cancer Diagnosis:*
- Quitting improves outcomes
- Radiation, chemotherapy more effective
- Surgery healing improved
- Second primary prevention`,
      keyTerms: [
        { term: 'EAGLES trial', definition: 'Large RCT establishing safety of varenicline and bupropion in psychiatric patients' },
        { term: 'harm reduction', definition: 'Public health strategy reducing negative consequences when abstinence not achievable' },
        { term: 'stepped care', definition: 'Treatment approach starting with least intensive, escalating if needed' },
        { term: 'urge surfing', definition: 'Mindfulness technique of observing cravings without acting on them' },
        { term: 'dual use', definition: 'Using both combustible cigarettes and e-cigarettes simultaneously' },
      ],
      clinicalNotes: 'Implement chronic care model for tobacco dependence. Use most intensive treatment for severe cases. Consider harm reduction for treatment-resistant patients. EHR integration essential for systematic care. Hospitalization provides opportunity for intervention. Address mental health comorbidity.',
    },
    5: {
      level: 5,
      summary: 'Expert tobacco dependence treatment requires integrating precision medicine approaches, addressing health disparities through equity-focused interventions, understanding emerging products, and leading population health initiatives to eliminate tobacco-related disease.',
      explanation: `**Precision Medicine in Smoking Cessation:**

*Pharmacogenomics:*
| Gene | Impact | Clinical Utility |
|------|--------|------------------|
| CYP2A6 | Nicotine metabolism rate | Dosing guidance |
| CHRNA5 | Dependence severity | Treatment selection |
| DRD2 | Reward sensitivity | Behavioral strategies |
| CYP2B6 | Bupropion metabolism | Dosing |

*Metabolizer Phenotypes:*
- Slow metabolizers: Less dependence, better cessation outcomes
- Fast metabolizers: Higher dependence, may need higher NRT doses
- Research ongoing for clinical application

**Health Disparities and Equity:**

*Disparities in Tobacco Use:*
- Higher rates: Low income, low education, LGBTQ+, some racial/ethnic groups
- Lower cessation success
- Less access to treatment
- Targeted marketing historically

*Structural Factors:*
- Tobacco retail density in disadvantaged areas
- Financial stress and coping smoking
- Lack of healthcare access
- Cultural factors

*Equity-Focused Interventions:*
- Community-based participatory approaches
- Culturally tailored programs
- Addressing social determinants
- Medicaid expansion for cessation coverage
- Community health worker models

**Emerging Products and Evidence:**

*E-Cigarettes Detailed:*
- Aerosol not harmless water vapor
- Contains nicotine, flavorings, ultrafine particles
- Less toxicant exposure than cigarettes
- Cessation efficacy: Mixed evidence
- Youth epidemic concern

*Heated Tobacco Products:*
- IQOS and similar
- Heat rather than burn tobacco
- Reduced but not eliminated emissions
- Marketing as "reduced risk"
- Long-term data limited

*Nicotine Pouches:*
- Tobacco-free oral nicotine
- ZYN, Velo brands
- Youth uptake concern
- Cessation role unclear

**Global Tobacco Control:**

*WHO Framework Convention:*
- MPOWER strategies:
  - Monitor tobacco use
  - Protect smoke-free policies
  - Offer quit help
  - Warn about dangers
  - Enforce advertising bans
  - Raise taxes

*Global Trends:*
- Declining in high-income countries
- Increasing in low-middle income
- 8 million deaths annually worldwide
- 80% in low-middle income countries by 2030

**Systems Change Leadership:**

*Healthcare System Transformation:*
- Make tobacco treatment standard of care
- Bundle payments for cessation
- Performance improvement initiatives
- Workforce training
- Community partnerships

*Policy Advocacy:*
- Comprehensive tobacco control policies
- Cessation coverage parity
- Tobacco 21 laws
- Flavor restrictions
- Retail licensing

**Research Frontiers:**

*Digital Interventions:*
- Smartphone apps
- Text messaging programs
- AI chatbots
- Virtual reality
- Social media interventions
- Wearable device integration

*Novel Pharmacotherapies:*
- Nicotine vaccines
- Gene therapy approaches
- Immunotherapy
- Novel receptor targets
- Personalized dosing algorithms

*Implementation Science:*
- Dissemination of effective interventions
- Addressing evidence-practice gap
- De-implementation of ineffective practices
- Scalable intervention models

**Clinical Excellence Framework:**

*Individual Level:*
- Comprehensive assessment
- Personalized treatment plan
- Intensive follow-up
- Long-term support
- Relapse management

*System Level:*
- Universal screening and treatment
- Quality improvement
- Health equity focus
- Workforce development
- Community engagement

*Population Level:*
- Advocacy for tobacco control policies
- Addressing social determinants
- Reducing disparities
- Global health engagement

**Future Directions:**

*Endgame Strategies:*
- Tobacco-free generation goals
- Reduced nicotine content cigarettes
- Denicotinization proposals
- Complete phase-out timelines

*Integration with Other Behaviors:*
- Physical activity
- Diet
- Alcohol
- Sleep
- Holistic lifestyle approach

*Key Priorities:*
1. Eliminate tobacco-related disparities
2. Prevent youth initiation
3. Help current smokers quit
4. Address emerging products
5. Global implementation
6. Endgame planning`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response' },
        { term: 'MPOWER', definition: 'WHO technical package for tobacco control with six evidence-based strategies' },
        { term: 'tobacco endgame', definition: 'Policy goal of eliminating tobacco use and related disease through phased reduction' },
        { term: 'denicotinization', definition: 'Reducing nicotine in cigarettes to non-addictive levels' },
        { term: 'community-based participatory research', definition: 'Research approach partnering with communities in all aspects of research' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Treat tobacco dependence as chronic disease
- Use most effective treatments (varenicline, combination NRT)
- Address health disparities explicitly
- Stay current on emerging products
- Lead system-level changes
- Advocate for tobacco control policies
- Engage in research and quality improvement
- Focus on health equity
- Mentor trainees in cessation counseling
- Plan for tobacco endgame`,
    },
  },

  media: [
    {
      id: 'smoking-cessation-timeline',
      type: 'diagram',
      filename: 'smoking-cessation-benefits-timeline.svg',
      title: 'Health Benefits of Smoking Cessation Timeline',
      description: 'Timeline showing health improvements from minutes to years after quitting smoking',
    },
  ],

  citations: [
    {
      id: 'srnt-guidelines-2019',
      type: 'article',
      title: 'Treating Tobacco Use and Dependence: 2008 Update Clinical Practice Guideline',
      authors: ['Fiore MC', 'Jaen CR', 'Baker TB', 'et al.'],
      source: 'US Public Health Service',
      accessedDate: '2025-01-28',
    },
    {
      id: 'eagles-trial',
      type: 'article',
      title: 'Neuropsychiatric Safety and Efficacy of Varenicline, Bupropion, and Nicotine Patch in Smokers with Psychiatric Disorders',
      authors: ['Anthenelli RM', 'Benowitz NL', 'West R', 'et al.'],
      source: 'Lancet',
      accessedDate: '2025-01-28',
    },
    {
      id: 'uspstf-tobacco-2021',
      type: 'article',
      title: 'Interventions for Tobacco Smoking Cessation in Adults, Including Pregnant Persons',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk' },
    { targetId: 'cancer-screening-guidelines', targetType: 'concept', relationship: 'related', label: 'Cancer Screening' },
  ],

  tags: {
    systems: ['preventive-care', 'respiratory', 'cardiovascular'],
    topics: ['preventive medicine', 'addiction medicine', 'tobacco cessation'],
    keywords: ['smoking cessation', 'tobacco', 'nicotine', 'varenicline', 'NRT', 'quit smoking'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'psychiatry'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
