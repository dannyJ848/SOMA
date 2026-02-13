/**
 * Tobacco - Health Effects, Nicotine Addiction, and Cessation
 *
 * Comprehensive education about tobacco including health effects,
 * nicotine addiction, cessation methods, medications for quitting,
 * and vaping/e-cigarettes.
 */

import { EducationalContent } from '../types';

export const tobaccoContent: EducationalContent = {
  id: 'substance-use-tobacco',
  type: 'concept',
  name: 'Tobacco and Nicotine',
  alternateNames: ['Smoking', 'Nicotine Dependence', 'Tobacco Use Disorder', 'Cigarettes'],

  levels: {
    1: {
      level: 1,
      summary: 'Smoking is the leading cause of preventable death. Nicotine is highly addictive, but quitting is possible with help. There are safe, effective treatments that can double or triple your chances of success.',
      explanation: `**Why Smoking Is Harmful:**

Cigarette smoke contains over 7,000 chemicals, with at least 70 that can cause cancer. Smoking harms nearly every organ in your body.

**Health Problems from Smoking:**

*Cancer:*
- Lung cancer (smoking causes about 80-90% of cases)
- Mouth, throat, esophagus
- Bladder, kidney, pancreas
- Many other cancers

*Heart and Blood Vessels:*
- Heart attacks
- Strokes
- Poor circulation (can lead to amputations)

*Lung Problems:*
- Chronic bronchitis
- Emphysema (COPD)
- Frequent respiratory infections

*Other Effects:*
- Premature aging and wrinkles
- Gum disease and tooth loss
- Fertility problems
- Weaker bones

**Why Is Quitting So Hard?**

Nicotine is one of the most addictive substances known. It changes your brain so that:
- You feel a need to smoke
- You feel uncomfortable when you don't smoke
- You automatically reach for cigarettes in certain situations

This is NOT weakness - it's how addiction works.

**The Good News - Quitting Works!**

Your body starts healing right away:
- 20 minutes: Heart rate drops
- 12 hours: Carbon monoxide levels return to normal
- 2 weeks to 3 months: Circulation and lung function improve
- 1 year: Heart disease risk drops by half
- 10 years: Lung cancer risk drops by half

**Ways to Quit:**

*Medications (double or triple success rates):*
- Nicotine patches, gum, or lozenges (available without prescription)
- Prescription medications that reduce cravings

*Counseling and Support:*
- Quitlines (call 1-800-QUIT-NOW)
- Apps and online programs
- In-person counseling
- Support groups

**What About E-Cigarettes (Vaping)?**

- Not as safe as using nothing
- May contain harmful substances
- May help some adults quit smoking, but not FDA-approved for this
- Not safe for youth, young adults, or pregnant women
- Can lead to nicotine addiction`,
      keyTerms: [
        { term: 'nicotine', definition: 'The addictive chemical in tobacco that makes quitting so hard' },
        { term: 'COPD', definition: 'Chronic obstructive pulmonary disease - a lung disease that makes it hard to breathe, often caused by smoking' },
        { term: 'secondhand smoke', definition: 'Smoke from someone else\'s cigarette that you breathe in; also harmful' },
        { term: 'withdrawal', definition: 'Uncomfortable feelings when you stop smoking, like irritability, anxiety, and strong cravings' },
      ],
      analogies: [
        'Nicotine addiction is like having a demanding boss in your brain that keeps telling you to smoke. Medications and therapy help you "fire" that boss.',
        'Quitting smoking is like learning to ride a bike - you might fall a few times, but you can do it with practice and support.',
      ],
      examples: [
        'Someone who has smoked for 30 years can still greatly reduce their health risks by quitting.',
        'Using nicotine patches and counseling together gives you a better chance of quitting than trying to quit on your own.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tobacco use causes the most preventable death worldwide through cardiovascular disease, cancer, and respiratory illness. Nicotine dependence involves brain changes that make quitting difficult, but FDA-approved treatments significantly improve success rates.',
      explanation: `**The Burden of Tobacco:**

- Leading preventable cause of death globally (8 million deaths/year)
- In the US: 480,000 deaths/year, including 41,000 from secondhand smoke
- Smokers die on average 10 years earlier than non-smokers
- Half of all long-term smokers die from smoking-related disease

**How Smoking Causes Disease:**

*Cardiovascular Disease:*
- Damages blood vessel lining (endothelium)
- Promotes atherosclerosis (plaque buildup)
- Increases blood clotting
- Raises blood pressure and heart rate

*Cancer:*
- Carcinogens in smoke damage DNA
- Impairs DNA repair mechanisms
- Causes mutations in tumor suppressor genes
- Linked to at least 15 types of cancer

*Respiratory Disease:*
- Chronic inflammation of airways
- Destruction of alveoli (air sacs)
- Impaired immune function in lungs
- Increased mucus production

**Nicotine Addiction:**

*How Nicotine Works:*
- Binds to nicotinic acetylcholine receptors (nAChRs)
- Triggers dopamine release in reward center
- Effects felt within 10-20 seconds of inhalation
- Creates strong positive reinforcement

*Neuroadaptation:*
- Increased receptor density with chronic use
- Altered dopamine baseline
- Withdrawal symptoms when nicotine levels drop
- Tolerance develops requiring more cigarettes

*Withdrawal Symptoms:*
- Irritability, anxiety, restlessness
- Difficulty concentrating
- Increased appetite, weight gain
- Depressed mood
- Insomnia
- Strong cravings

**Cessation Treatments:**

*FDA-Approved Medications:*

| Type | Options | Key Points |
|------|---------|------------|
| Nicotine Replacement | Patch, gum, lozenge, inhaler, nasal spray | OTC (except inhaler/spray), safe with most conditions |
| Varenicline (Chantix) | Oral medication | Most effective single agent, blocks nicotine receptors |
| Bupropion (Zyban) | Oral medication | Antidepressant, helps with weight gain |

*Combination Approaches:*
- Patch (steady level) + short-acting form (gum/lozenge for cravings)
- Medication + behavioral counseling is most effective
- Multiple quit attempts often needed

*Behavioral Interventions:*
- Quitlines: Free telephone counseling (1-800-QUIT-NOW)
- Individual or group counseling
- Digital interventions (apps, websites)
- Brief physician advice doubles quit rates

**E-Cigarettes and Vaping:**

*What's in E-Cigarettes:*
- Nicotine (often high concentrations)
- Propylene glycol, vegetable glycerin
- Flavorings
- Heavy metals, volatile organic compounds

*Health Concerns:*
- EVALI (E-cigarette or Vaping Product Use-Associated Lung Injury)
- Unknown long-term effects
- Nicotine addiction in youth
- Gateway to conventional cigarettes for teens

*For Adults Who Smoke:*
- Not FDA-approved for cessation
- Some evidence they may help quit smoking
- Less harmful than continued smoking (not harmless)
- Should not be used alongside cigarettes long-term

**Special Populations:**

*Pregnancy:*
- Major cause of low birth weight, preterm birth
- Behavioral interventions first-line
- NRT can be considered if needed (risks vs continued smoking)

*Mental Health Conditions:*
- Smoking rates 2-3x higher in psychiatric disorders
- Can still quit successfully
- Monitor for mood changes, adjust psychiatric medications
- Varenicline safe in most psychiatric conditions`,
      keyTerms: [
        { term: 'nicotinic acetylcholine receptors', definition: 'Brain receptors that nicotine binds to, triggering reward signals' },
        { term: 'varenicline', definition: 'Prescription medication that partially activates nicotine receptors to reduce cravings and block effects of smoking' },
        { term: 'EVALI', definition: 'E-cigarette or Vaping Product Use-Associated Lung Injury; serious lung condition linked to vaping' },
        { term: 'NRT', definition: 'Nicotine Replacement Therapy; medications like patches, gum, and lozenges that provide nicotine without harmful smoke' },
      ],
    },
    3: {
      level: 3,
      summary: 'Tobacco use disorder involves complex neurobiological changes in nicotinic receptor systems and reward pathways. Evidence-based treatment combines pharmacotherapy with behavioral support, with varenicline demonstrating highest efficacy among single agents.',
      explanation: `**Neurobiological Mechanisms:**

*Nicotinic Receptor Pharmacology:*
- Nicotinic acetylcholine receptors (nAChRs): Ligand-gated ion channels
- Primary addiction-relevant subtypes: alpha4beta2 and alpha7
- Nicotine acts as agonist with rapid onset/offset
- Desensitization contributes to tolerance

*Reward Pathway Activation:*
- nAChR activation on VTA dopamine neurons
- Dopamine release in nucleus accumbens
- Glutamate and GABA modulation
- Secondary endogenous opioid release

*Neuroadaptations with Chronic Use:*
- Upregulation of alpha4beta2 receptors
- Altered dopamine transporter expression
- Changes in glutamate signaling
- Prefrontal cortex connectivity changes

*Genetics of Nicotine Dependence:*
- CHRNA5-A3-B4 gene cluster: Risk variants
- CYP2A6: Affects nicotine metabolism rate
- DRD2, COMT: Dopamine pathway genes
- Heritability approximately 50%

**Clinical Assessment:**

*Fagerstrom Test for Nicotine Dependence (FTND):*
- Validated 6-item questionnaire
- Score 0-10, higher = more dependent
- Key questions: Time to first cigarette, difficulty refraining

*DSM-5 Tobacco Use Disorder Criteria:*
- Same 11 criteria as other substance use disorders
- Tolerance and withdrawal included
- Severity: Mild (2-3), Moderate (4-5), Severe (6+)

**Pharmacotherapy Details:**

*Nicotine Replacement Therapy:*
- Mechanism: Provides nicotine without harmful combustion products
- Patch: Steady-state delivery, various doses (21, 14, 7 mg)
- Gum: 2 or 4 mg, rescue for cravings
- Lozenge: 2 or 4 mg, dissolves slowly
- Inhaler: Mimics hand-to-mouth ritual
- Nasal spray: Fastest onset (for highly dependent)

*Varenicline (Chantix):*
- Mechanism: Partial agonist at alpha4beta2 nAChRs
- Provides partial dopamine release (reduces craving)
- Blocks nicotine from fully activating receptors (blocks reward)
- Dosing: Start 0.5 mg daily, titrate to 1 mg BID by day 8
- Duration: 12 weeks standard, may continue 24 weeks
- Efficacy: OR 2-3x vs placebo for abstinence
- Side effects: Nausea (titrate slowly), vivid dreams, insomnia
- Black box warning removed in 2016 (no increase in neuropsychiatric events)

*Bupropion (Zyban):*
- Mechanism: NDRI (norepinephrine/dopamine reuptake inhibitor)
- Also weak antagonist at nAChRs
- Dosing: Start 150 mg daily x 3 days, then 150 mg BID
- Duration: 7-12 weeks
- Side effects: Insomnia, dry mouth
- Contraindications: Seizure history, eating disorders, MAOIs

*Combination Therapy:*
- Patch + short-acting NRT: Superior to single NRT
- Varenicline + NRT: May increase efficacy (some data)
- Varenicline + bupropion: Under investigation

**Behavioral Interventions:**

*The 5 A's Model:*
1. Ask about tobacco use (every visit)
2. Advise to quit (clear, strong, personalized)
3. Assess willingness to quit
4. Assist with quitting (medications, referrals)
5. Arrange follow-up

*Counseling Elements:*
- Problem-solving/skills training
- Social support
- Relapse prevention
- Cognitive behavioral approaches

*Motivational Interviewing:*
- For ambivalent patients
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy

**E-Cigarettes (ENDS):**

*Pharmacokinetics:*
- Modern devices deliver nicotine almost as efficiently as cigarettes
- Salt-based nicotine allows higher concentrations (e.g., JUUL)
- Rapid absorption from alveoli

*Potential Harms:*
- Carbonyl compounds (formaldehyde, acrolein)
- Heavy metals (lead, nickel, chromium)
- Ultrafine particles
- EVALI linked to vitamin E acetate in THC products

*Regulatory Status:*
- Premarket authorization required (2020)
- Some products authorized as tobacco products (not cessation aids)
- Flavored products restricted in some jurisdictions`,
      keyTerms: [
        { term: 'alpha4beta2 receptor', definition: 'Primary nicotinic receptor subtype mediating nicotine addiction in the reward pathway' },
        { term: 'partial agonist', definition: 'Drug that binds to a receptor and partially activates it; reduces both craving and reward' },
        { term: 'FTND', definition: 'Fagerstrom Test for Nicotine Dependence; validated assessment of nicotine dependence severity' },
        { term: 'CYP2A6', definition: 'Liver enzyme that metabolizes nicotine; genetic variants affect smoking behavior' },
        { term: 'ENDS', definition: 'Electronic Nicotine Delivery Systems; includes e-cigarettes, vape pens, and mods' },
      ],
      clinicalNotes: 'Ask about tobacco use at every visit (vital sign). All smokers should be offered medication unless contraindicated. Varenicline is most effective single agent but patient preference matters for adherence. Combination short + long-acting NRT is more effective than single NRT. Black box warning removed from varenicline - safe in psychiatric conditions.',
    },
    4: {
      level: 4,
      summary: 'Tobacco cessation treatment requires personalized approaches considering nicotine metabolism, psychiatric comorbidity, and specific populations. Emerging therapies include cytisine and novel nicotine vaccines, while harm reduction strategies remain controversial.',
      explanation: `**Pharmacogenomic Considerations:**

*CYP2A6 Polymorphisms:*
- Primary nicotine metabolizing enzyme
- Normal metabolizers: Standard dosing
- Slow metabolizers: Smoke fewer cigarettes, may need lower NRT doses
- Ultra-rapid metabolizers: May need higher NRT doses, varenicline preferred

*CHRNA5-A3-B4 Cluster:*
- rs16969968 (Asp398Asn in CHRNA5)
- Risk allele associated with:
  - Increased cigarettes per day
  - Earlier age of dependence
  - Greater difficulty quitting
  - Increased lung cancer risk per cigarette

*Clinical Application:*
- Pharmacogenomic testing not yet standard of care
- May guide intensity of treatment
- Research ongoing for personalized approaches

**Treating Complex Populations:**

*Psychiatric Comorbidity:*
- Prevalence: Depression 30-50%, schizophrenia 60-80% smoke
- Mechanisms: Shared genetics, self-medication hypothesis
- Important: Smoking induces CYP1A2 - affects psychiatric drug levels
- Monitor: Clozapine, olanzapine, haloperidol levels may increase with quitting
- Evidence: Varenicline safe and effective in psychiatric populations (EAGLES trial)

*Substance Use Disorders:*
- High comorbidity (80%+ of people with OUD smoke)
- Concurrent treatment improves outcomes for both
- May require higher intensity interventions
- Special consideration for stimulant recovery

*Pregnancy:*
- First-line: Behavioral counseling (most evidence)
- NRT: Can be used after informed consent (short-acting preferred)
- Varenicline/bupropion: Limited safety data, generally avoided
- Benefits of quitting at any stage of pregnancy

*Hospitalized Patients:*
- Opportunity: Enforced abstinence, heightened health concern
- Start medication in hospital
- Continue for minimum 12 weeks post-discharge
- Brief counseling + medication + follow-up effective

**Advanced Treatment Strategies:**

*Extended Pharmacotherapy:*
- Standard 12 weeks may be insufficient for some
- Extended treatment (6-12 months) reduces relapse
- Consider for high-risk patients

*Pre-Quit Pharmacotherapy:*
- Starting varenicline 4 weeks before quit date
- May increase success in some patients
- "Reduce to quit" approach with varenicline

*Combination Strategies:*
- Varenicline + NRT: May increase efficacy, more nausea
- Varenicline + bupropion: Enhanced prefrontal function, under study
- Stepped care: Increase intensity with each attempt

**Novel and Emerging Therapies:**

*Cytisine:*
- Partial agonist at alpha4beta2 (similar to varenicline)
- Used in Eastern Europe for decades
- Lower cost, good efficacy
- Under FDA review (Tabex/Desmoxan)

*Nicotine Vaccines:*
- Conjugate vaccines to generate anti-nicotine antibodies
- Prevent nicotine from reaching brain
- Multiple candidates in trials
- Challenge: Adequate antibody titers

*Pharmacological Adjuncts:*
- Lobeline: nAChR antagonist
- Naltrexone: Limited evidence for combination
- N-acetylcysteine: Glutamate modulation

**Harm Reduction Debate:**

*Arguments For:*
- Abstinence goal unrealistic for some
- E-cigarettes likely less harmful than combustibles
- Snus (Swedish) associated with reduced mortality
- Meeting patients where they are

*Arguments Against:*
- Long-term effects unknown
- Dual use common (no benefit)
- Gateway to initiation in youth
- Renormalization of nicotine use

*Current Recommendations:*
- For adults unable to quit: Consider complete switch to ENDS
- Do not recommend for never-users
- Not recommended for youth
- Combustible cigarettes always discouraged

**Population-Level Interventions:**

*Evidence-Based Policies:*
- Price increases (taxation): Most effective
- Smoke-free laws: Reduce consumption and exposure
- Marketing restrictions: Protect youth
- Plain packaging: Reduces appeal
- Mass media campaigns: Effective if sustained

*Health System Integration:*
- Tobacco treatment as default care
- Electronic health record prompts
- Performance metrics
- Specialist tobacco treatment services`,
      keyTerms: [
        { term: 'cytisine', definition: 'Plant-derived partial nicotinic agonist used for cessation in Europe; similar mechanism to varenicline' },
        { term: 'CYP1A2 induction', definition: 'Smoking increases this enzyme activity; relevant for psychiatric medication dosing' },
        { term: 'EAGLES trial', definition: 'Large safety trial demonstrating varenicline and bupropion safety in psychiatric populations' },
        { term: 'nicotine vaccine', definition: 'Immunotherapy approach to generate antibodies that prevent nicotine from entering the brain' },
        { term: 'harm reduction', definition: 'Approach to reduce health consequences without requiring abstinence' },
      ],
      clinicalNotes: 'When psychiatric patients quit smoking, monitor for changes in psychiatric medication levels (especially clozapine, olanzapine). EAGLES trial demonstrated varenicline is safe in psychiatric populations. Cytisine may soon be an affordable alternative to varenicline. For hospitalized patients, start cessation medication in-hospital and arrange follow-up.',
    },
    5: {
      level: 5,
      summary: 'Contemporary tobacco control integrates precision medicine approaches, regulatory science, and implementation strategies to address the leading cause of preventable death, while navigating the evolving landscape of novel nicotine products and harm reduction frameworks.',
      explanation: `**Precision Medicine in Tobacco Cessation:**

*Multi-Omic Approaches:*
- Genomic: CHRNA5-A3-B4, CYP2A6, DRD2
- Transcriptomic: Gene expression signatures predicting relapse
- Epigenetic: Methylation changes (reversible with cessation)
- Metabolomic: Nicotine metabolite ratio (NMR) as biomarker

*Nicotine Metabolite Ratio (NMR):*
- 3'-hydroxycotinine/cotinine ratio
- Reflects CYP2A6 activity
- Clinical trial evidence:
  - Slow metabolizers: Similar outcomes with patch vs varenicline
  - Normal metabolizers: Varenicline superior to patch
- Potential for treatment matching

*Biomarker-Guided Treatment:*
- NMR testing available commercially
- Not yet standard of care
- Precision Medicine Initiative trials ongoing
- Cost-effectiveness analyses needed

**Neurocircuitry and Imaging:**

*Brain Changes with Smoking:*
- Reduced gray matter in prefrontal, insula
- Altered resting-state connectivity
- Enhanced cue reactivity in reward circuits
- Reduced D2/D3 receptor availability

*Treatment Response Prediction:*
- Baseline cue reactivity predicts relapse
- Insula activity correlates with craving
- Executive function predicts abstinence
- Potential for fMRI-guided treatment

*Neuromodulation Approaches:*
- TMS to DLPFC: Reduces craving (not yet FDA-approved)
- tDCS: Conflicting results
- Real-time fMRI neurofeedback: Experimental

**Regulatory Science:**

*FDA Tobacco Regulation:*
- Center for Tobacco Products (CTP)
- Premarket tobacco product applications
- Modified Risk Tobacco Product (MRTP) pathway
- Nicotine product standard proposed (reduce to non-addictive levels)

*Product Standards in Development:*
- Menthol ban (proposed, challenged)
- Nicotine reduction standard
- Flavor restrictions
- Child-resistant packaging

*International Frameworks:*
- WHO FCTC (Framework Convention on Tobacco Control)
- MPOWER strategies
- Plain packaging (Australia model)
- Endgame strategies (New Zealand, UK)

**Novel Nicotine Products:**

*Heated Tobacco Products (HTPs):*
- Heat rather than burn tobacco
- Example: IQOS (FDA authorized as MRTP)
- Reduced but not eliminated toxicants
- Questions about population impact

*Modern Oral Nicotine:*
- Nicotine pouches (Zyn, On!)
- No tobacco, synthetic nicotine
- Unclear regulatory status
- Harm reduction potential vs youth appeal

*Very Low Nicotine Content Cigarettes (VLNCs):*
- Reduce nicotine to non-addictive levels
- FDA considering as product standard
- Studies show reduced smoking intensity
- Questions about compensation, illicit market

**Implementation Science:**

*Closing the Treatment Gap:*
- Only 30% of smokers who want to quit use evidence-based treatment
- Implementation strategies needed:
  - Electronic health record integration
  - Academic detailing
  - Quality metrics and feedback
  - Pharmacist prescribing protocols

*Learning Health System Approach:*
- Continuous improvement cycles
- Real-world data collection
- Rapid adaptation of protocols
- Equity-focused implementation

*Telehealth Integration:*
- Tobacco quitlines as original telehealth
- Video counseling equivalence established
- Medication prescribing via telehealth
- Digital therapeutics (Pivot, QuitGenius)

**Equity Considerations:**

*Disparities in Tobacco Use:*
- LGBTQ+: Higher rates, targeted marketing
- Low SES: Higher rates, less access to treatment
- American Indian/Alaska Native: Highest rates
- Mental health conditions: 2-3x higher rates

*Targeted Interventions:*
- Culturally tailored programs
- Menthol ban (health equity argument)
- Community-based participatory research
- Integration with social services

**Future Directions:**

*Endgame Strategies:*
- "Tobacco-free generation" laws (smoke-free birth cohort)
- Sinking lid on retail outlets
- Commercial sales phase-out
- Prescription-only nicotine

*Research Priorities:*
- Optimal e-cigarette regulation
- Long-term cardiovascular effects of novel products
- Youth prevention in era of vaping
- Implementation of precision medicine

*Emerging Therapies:*
- Novel nicotinic partial agonists
- Cytisine (potential FDA approval)
- Vaccines (NicVAX, TA-NIC derivatives)
- Epigenetic modulators
- Anti-addiction microbiome interventions`,
      keyTerms: [
        { term: 'nicotine metabolite ratio', definition: 'Biomarker reflecting nicotine metabolism rate; potential guide for treatment selection' },
        { term: 'MRTP', definition: 'Modified Risk Tobacco Product; FDA pathway for products demonstrated to reduce harm' },
        { term: 'VLNC cigarettes', definition: 'Very Low Nicotine Content cigarettes; potential product standard to reduce addictiveness' },
        { term: 'tobacco endgame', definition: 'Strategies aimed at ending commercial tobacco use rather than gradual decline' },
        { term: 'heated tobacco products', definition: 'Devices that heat tobacco without combustion; reduced but not eliminated harm' },
      ],
      clinicalNotes: `Clinical implementation priorities:
- Treat tobacco as a chronic disease requiring ongoing management
- Nicotine metabolite ratio testing may guide treatment (varenicline for normal metabolizers)
- Telehealth effective for cessation counseling
- Equity lens essential - target high-prevalence populations
- Stay informed on regulatory changes affecting product landscape
- E-cigarettes: For adults who cannot quit, complete switch better than dual use
- All smokers deserve treatment; every quit attempt matters

The population-level impact of tobacco regulation (taxation, smoke-free laws, nicotine standards) likely exceeds clinical treatment effects.`,
    },
  },

  media: [
    {
      id: 'smoking-health-effects-diagram',
      type: 'diagram',
      filename: 'smoking_health_effects.svg',
      title: 'Health Effects of Smoking',
      description: 'Body diagram showing organ systems affected by tobacco use',
    },
    {
      id: 'cessation-medication-comparison',
      type: 'diagram',
      filename: 'cessation_medications.svg',
      title: 'Smoking Cessation Medications',
      description: 'Comparison chart of FDA-approved cessation medications',
    },
  ],

  citations: [
    {
      id: 'usdhhs-surgeon-general-2020',
      type: 'article',
      title: 'Smoking Cessation: A Report of the Surgeon General',
      authors: ['US Department of Health and Human Services'],
      source: 'US Public Health Service',
      accessedDate: '2025-01-24',
    },
    {
      id: 'eagles-trial',
      type: 'article',
      title: 'Neuropsychiatric safety and efficacy of varenicline, bupropion, and nicotine patch in smokers with and without psychiatric disorders (EAGLES)',
      authors: ['Anthenelli RM', 'Benowitz NL', 'West R', 'et al.'],
      source: 'Lancet',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cochrane-nrt',
      type: 'article',
      title: 'Nicotine replacement therapy versus control for smoking cessation',
      source: 'Cochrane Database of Systematic Reviews',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'substance-use-understanding-addiction', targetType: 'concept', relationship: 'parent', label: 'Understanding Addiction' },
    { targetId: 'respiratory-copd', targetType: 'condition', relationship: 'see-also', label: 'COPD' },
    { targetId: 'oncology-lung-cancer', targetType: 'condition', relationship: 'see-also', label: 'Lung Cancer' },
    { targetId: 'cardiology-cad', targetType: 'condition', relationship: 'see-also', label: 'Coronary Artery Disease' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['substance use', 'addiction medicine', 'preventive medicine', 'oncology'],
    keywords: ['smoking', 'tobacco', 'nicotine', 'cessation', 'varenicline', 'e-cigarettes', 'vaping'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'preventive medicine', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default tobaccoContent;
