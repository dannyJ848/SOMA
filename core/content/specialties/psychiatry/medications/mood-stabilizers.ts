/**
 * Mood Stabilizers
 *
 * Comprehensive educational content on mood stabilizers,
 * their mechanisms, uses, and clinical considerations.
 */

import { EducationalContent } from '../../../types';

export const moodStabilizersContent: EducationalContent = {
  id: 'psychiatry-mood-stabilizers',
  type: 'topic',
  name: 'Mood Stabilizers',
  alternateNames: ['Antimanic Agents', 'Mood Stabilizing Medications'],

  levels: {
    1: {
      level: 1,
      summary: 'Mood stabilizers are medications that help even out extreme mood swings in conditions like bipolar disorder, preventing both manic highs and depressive lows.',
      explanation: `Mood stabilizers help people with bipolar disorder and related conditions by preventing extreme mood episodes.

**What They Treat:**
- Bipolar disorder (main use)
- Mood swings
- Sometimes used for aggression or other conditions

**Main Types:**

*Lithium:*
- The original mood stabilizer
- Very effective for mania and depression prevention
- Requires blood level monitoring

*Anticonvulsants (seizure medications that stabilize mood):*
- Valproate (Depakote)
- Lamotrigine (Lamictal)
- Carbamazepine (Tegretol)

**How They Work:**
- Affect brain chemicals and signaling in complex ways
- Reduce excessive brain activity during mania
- Prevent mood episodes long-term

**What to Know:**

*Lithium:*
- Need regular blood tests
- Can affect thyroid and kidneys
- Stay hydrated, watch salt intake
- Very effective if levels are right

*Valproate:*
- Good for mania
- Monitor liver function
- Causes weight gain
- Not safe in pregnancy

*Lamotrigine:*
- Good for preventing depression
- Watch for rash (can be serious)
- Start very slowly

**Important:**
- Take consistently, don't skip doses
- Regular check-ups and blood tests needed
- Tell doctor about all medications
- Don't stop suddenly`,
      keyTerms: [
        { term: 'mania', definition: 'A period of extremely high energy, little need for sleep, and sometimes poor judgment' },
        { term: 'bipolar disorder', definition: 'A condition with extreme mood swings between mania and depression' },
        { term: 'blood level', definition: 'The amount of medication in your blood, important for lithium' },
      ],
      analogies: [
        'Mood stabilizers are like a thermostat for your emotions - they keep things from getting too hot (mania) or too cold (depression).',
        'Lithium is like a shock absorber for mood swings, smoothing out the bumps in the road.',
      ],
      examples: [
        'Someone with bipolar disorder might take lithium daily to prevent manic episodes that caused problems at work.',
        'A person might take lamotrigine to prevent the depressive episodes that used to leave them unable to function for weeks.',
      ],
    },
    2: {
      level: 2,
      summary: 'Mood stabilizers include lithium and anticonvulsants (valproate, lamotrigine, carbamazepine) used to treat and prevent mood episodes in bipolar disorder, each with distinct efficacy profiles and monitoring requirements.',
      explanation: `**Classification:**

*Lithium:*
- Only true "mood stabilizer"
- Effective for mania, depression, maintenance
- Reduces suicide risk

*Anticonvulsants:*
- Valproate: Mania, maintenance
- Lamotrigine: Depression prevention
- Carbamazepine: Mania, maintenance

*Atypical Antipsychotics:* (covered separately)
- Also mood stabilizing properties

**Lithium:**

*Dosing:*
- Start 300mg 2-3x daily
- Target level: 0.6-1.0 mEq/L (maintenance)
- Higher for acute mania (up to 1.2 mEq/L)

*Monitoring:*
- Lithium level (trough)
- Creatinine, TSH, calcium
- ECG (in older patients)

*Side Effects:*
- Thirst, polyuria
- Tremor
- Weight gain
- GI upset
- Hypothyroidism (20%)
- Renal effects (long-term)

*Toxicity (>1.5 mEq/L):*
- Coarse tremor
- Confusion, ataxia
- Vomiting, diarrhea
- Seizures, arrhythmias
- Can be life-threatening

**Valproate (Divalproex/Depakote):**

*Dosing:*
- Start 250-500mg 2x daily
- Target level: 50-125 mcg/mL

*Monitoring:*
- Valproate level
- CBC, LFTs

*Side Effects:*
- Weight gain
- Tremor
- Hair loss
- Hepatotoxicity (rare)
- Thrombocytopenia
- Pancreatitis (rare)

*Contraindicated in Pregnancy:*
- Neural tube defects
- Cognitive effects in offspring
- Avoid in women of childbearing potential

**Lamotrigine:**

*Dosing:*
- Start 25mg daily x2 weeks
- Increase slowly to 200-400mg
- Even slower if on valproate (interaction)

*Key Concern - Rash:*
- SJS/TEN (Stevens-Johnson) risk
- Slow titration reduces risk
- Stop immediately if rash develops

*Advantages:*
- Weight neutral
- Good for depression prevention
- Less sedating

**Carbamazepine:**

*Dosing:*
- Start 200mg 2x daily
- Target level: 4-12 mcg/mL

*Monitoring:*
- Drug level
- CBC, LFTs, sodium

*Side Effects:*
- Sedation, ataxia
- Hyponatremia
- Rash (HLA-B*1502 screening in Asian patients)
- Aplastic anemia (rare)

*Drug Interactions:*
- Strong CYP3A4 inducer
- Many interactions`,
      keyTerms: [
        { term: 'therapeutic level', definition: 'Blood concentration range where medication is effective and safe' },
        { term: 'SJS', definition: 'Stevens-Johnson Syndrome, a severe skin reaction requiring immediate discontinuation' },
        { term: 'trough level', definition: 'Drug level measured just before the next dose (lowest point)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Mood stabilizers have diverse mechanisms including lithium\'s effects on intracellular signaling, valproate\'s GABAergic and histone deacetylase actions, and lamotrigine\'s glutamate modulation. Selection is based on episode type, tolerability, and patient-specific factors.',
      explanation: `**Lithium Pharmacology:**

*Mechanisms (multiple):*
- GSK-3 beta inhibition
- Inositol depletion
- Neuroprotection (increases BDNF)
- Circadian rhythm effects
- Gene expression changes

*Pharmacokinetics:*
- 100% oral bioavailability
- No protein binding
- Renal excretion (unchanged)
- Half-life: 18-24 hours
- Steady state: 5-7 days

*Drug Interactions:*
- NSAIDs, ACE inhibitors, diuretics → Increase lithium
- Theophylline, caffeine → Decrease lithium
- Narrow therapeutic index

*Nephrotoxicity:*
- Long-term: Reduced GFR, nephrogenic DI
- Monitor creatinine annually
- Benefits often outweigh risks

*Thyroid:*
- 20% develop hypothyroidism
- Monitor TSH
- Treat with levothyroxine (don't stop lithium)

**Valproate Pharmacology:**

*Mechanisms:*
- Enhances GABA (multiple mechanisms)
- Blocks voltage-gated sodium channels
- Histone deacetylase (HDAC) inhibition
- May affect PKC signaling

*Pharmacokinetics:*
- Highly protein-bound (90%)
- Hepatic metabolism
- Half-life: 9-16 hours
- Inhibits multiple CYP enzymes

*Teratogenicity:*
- Neural tube defects (1-2%)
- Reduced IQ in offspring
- FDA boxed warning
- Contraindicated in pregnancy unless no alternative

*Monitoring:*
- LFTs at baseline, periodically
- CBC (thrombocytopenia)
- Ammonia if confusion develops

**Lamotrigine Pharmacology:**

*Mechanism:*
- Blocks voltage-gated sodium channels
- Reduces glutamate release
- Unique antidepressant-like profile

*Pharmacokinetics:*
- Well absorbed
- Glucuronidation (not CYP450)
- Half-life: 25 hours (doubled with valproate)

*Titration:*
- Weeks 1-2: 25mg daily
- Weeks 3-4: 50mg daily
- Week 5: 100mg daily
- Week 6: 200mg daily (target)
- With valproate: HALF these doses

*Rash Risk:*
- SJS/TEN: 0.1% (higher with fast titration)
- Any rash: 10%
- Stop if systemic symptoms or blisters

**Clinical Selection:**

*Acute Mania:*
- Lithium or valproate first-line
- Antipsychotics often added

*Bipolar Depression:*
- Lamotrigine, quetiapine, lurasidone
- Lithium has modest antidepressant effect
- Valproate minimal antidepressant effect

*Maintenance:*
- Lithium: Gold standard, reduces suicide
- Lamotrigine: Prevents depression
- Valproate: Prevents mania primarily

*Rapid Cycling:*
- Lamotrigine or valproate
- Lithium less effective

*Mixed Features:*
- Valproate, atypical antipsychotics
- Avoid antidepressants`,
      keyTerms: [
        { term: 'GSK-3 beta', definition: 'Glycogen synthase kinase-3 beta; enzyme inhibited by lithium, involved in neuroprotection' },
        { term: 'HDAC', definition: 'Histone deacetylase; epigenetic modifier inhibited by valproate' },
        { term: 'glucuronidation', definition: 'Metabolic pathway for lamotrigine; valproate inhibits this, increasing lamotrigine levels' },
      ],
    },
    4: {
      level: 4,
      summary: 'Mood stabilizer mechanisms involve modulation of intracellular signaling cascades (lithium), epigenetic regulation (valproate), and glutamatergic neurotransmission (lamotrigine). Clinical use integrates phase-specific efficacy, pharmacogenomic considerations, and monitoring protocols to optimize outcomes.',
      explanation: `**Lithium Molecular Mechanisms:**

*GSK-3 Inhibition:*
- Inhibits GSK-3 alpha and beta
- Affects glycogen synthesis
- Regulates Wnt signaling
- Neuroprotective effects
- Circadian rhythm modulation

*Inositol Pathway:*
- Inhibits inositol monophosphatase
- Reduces inositol recycling
- Dampens phosphoinositide signaling
- May explain antimanic effects

*Gene Expression:*
- Upregulates BDNF
- Modulates bcl-2 (anti-apoptotic)
- Affects neurogenesis
- Epigenetic modifications

*Circadian Effects:*
- Lengthens circadian period
- Affects clock genes
- May explain prophylactic effect

**Valproate Mechanisms:**

*GABA Enhancement:*
- Inhibits GABA transaminase
- Increases GABA synthesis
- Potentiates GABA-A receptor
- Multiple GABA effects

*Sodium Channel:*
- Voltage-gated Na+ channel blockade
- Reduces neuronal excitability
- Anticonvulsant action

*HDAC Inhibition:*
- Epigenetic modulator
- Increases gene transcription
- May affect neuroplasticity
- Teratogenicity mechanism

*Other:*
- PKC modulation
- ERK pathway effects

**Pharmacogenomics:**

*Lithium:*
- Response not well predicted by genetics
- Pharmacokinetics affected by renal function
- Research ongoing

*Valproate:*
- Metabolism by UGT, CYP2C9
- Limited clinical utility currently

*Carbamazepine:*
- HLA-B*1502: SJS risk in Asian populations
- FDA recommends testing before starting

*Lamotrigine:*
- HLA-B*1502 may predict SJS (less clear than CBZ)
- Glucuronidation variability

**Clinical Optimization:**

*Lithium Response Prediction:*
- Classic (euphoric) mania: Better response
- Family history of lithium response
- Fewer prior episodes
- Episode pattern: Mania-depression-euthymia

*Combination Therapy:*
- Lithium + valproate: More effective than either alone
- Lithium + lamotrigine: Complementary (mania + depression prevention)
- Mood stabilizer + antipsychotic: Acute mania

*Treatment Resistance:*
- Optimize first-line agents
- Combine mood stabilizers
- Add atypical antipsychotic
- Consider ECT

**Monitoring Protocols:**

*Lithium:*
- Baseline: Creatinine, BUN, TSH, calcium, CBC, ECG (>40)
- Level at steady state
- Every 6 months: Creatinine, TSH
- Level after dose changes

*Valproate:*
- Baseline: CBC, LFTs, lipase
- Level at steady state
- Every 6-12 months: CBC, LFTs

*Carbamazepine:*
- Baseline: CBC, LFTs, sodium, HLA-B*1502 (if indicated)
- Level at steady state
- Monitor sodium, CBC periodically

**Special Situations:**

*Pregnancy:*
- Lithium: Ebstein's anomaly risk (lower than previously thought ~0.1%)
- Valproate: CONTRAINDICATED (neural tube defects, cognitive effects)
- Lamotrigine: Relatively safer (reduce dose in pregnancy, increase postpartum)
- Carbamazepine: Neural tube defects

*Elderly:*
- Lower lithium doses (reduced renal clearance)
- More sensitive to side effects
- Drug interactions common

*Renal Impairment:*
- Lithium: Reduce dose, monitor closely
- Valproate: No adjustment
- Consider alternatives if severe`,
      keyTerms: [
        { term: 'Wnt signaling', definition: 'Cell signaling pathway affected by GSK-3 inhibition, involved in development and neuroplasticity' },
        { term: 'Ebstein\'s anomaly', definition: 'Congenital heart defect; lithium slightly increases risk in first trimester' },
        { term: 'UGT', definition: 'UDP-glucuronosyltransferase; metabolizes valproate and lamotrigine' },
      ],
      clinicalNotes: 'Lithium remains gold standard for classic bipolar, reduces suicide. Valproate contraindicated in pregnancy. Lamotrigine slow titration prevents SJS. Monitor lithium levels, renal function, thyroid. Combinations often more effective than monotherapy. HLA-B*1502 testing for carbamazepine in Asian patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary mood stabilizer research explores biomarkers for response prediction, novel mechanisms targeting intracellular signaling and neuroplasticity, and personalized approaches integrating pharmacogenomics. Lithium\'s neuroprotective effects drive investigation in neurodegenerative conditions.',
      explanation: `**Precision Medicine:**

*Lithium Response Prediction:*
- Clinical predictors: Euphoric mania, family response, fewer episodes
- Neuroimaging: Gray matter volume preservation
- Genetics: Polygenic scores under development
- Biomarkers: Inflammatory markers, BDNF

*Pharmacogenomics:*
- Limited clinical utility currently
- Research on transporter genes
- Renal handling genetics
- Response genes under investigation

*Treatment Algorithms:*
- Measurement-based care
- Systematic approach to non-response
- Personalized based on episode type

**Novel Mechanisms:**

*Targeting Intracellular Signaling:*
- GSK-3 inhibitors (more selective than lithium)
- PKC modulators
- Inositol pathway targets
- mTOR involvement

*Neuroplasticity:*
- Enhancing BDNF
- Synaptic plasticity modulators
- Neurogenesis promotion

*Epigenetic Approaches:*
- HDAC inhibitors (like valproate)
- DNA methylation modulators
- Gene expression modification

**Lithium Beyond Bipolar:**

*Neuroprotection:*
- Increases gray matter volume
- Anti-apoptotic effects
- May slow neurodegeneration

*Research Applications:*
- Alzheimer's disease (trials)
- ALS (some interest)
- Huntington's disease
- Aging and cognition

*Suicide Prevention:*
- Unique anti-suicidal effect
- May be independent of mood stabilization
- Even in low doses/drinking water studies

**Combination Strategies:**

*Optimizing Response:*
- Lithium + valproate
- Lithium + lamotrigine
- Mood stabilizer + atypical antipsychotic

*Augmentation:*
- Thyroid hormone (T3)
- Omega-3 fatty acids
- N-acetylcysteine

**Long-Acting Options:**

*Lithium:*
- Extended-release formulations available
- Reduce peak-related side effects
- Once-daily dosing possible

*Future:*
- Long-acting formulations in development
- Improved adherence strategies

**Implementation Challenges:**

*Lithium Underutilization:*
- Fear of monitoring
- Tolerability concerns
- Lack of familiarity
- Preference for newer agents

*Pregnancy Counseling:*
- Valproate avoidance in women of childbearing age
- Lithium risk counseling
- Lamotrigine often preferred

**Future Directions:**

1. Biomarkers for treatment selection
2. Novel GSK-3 inhibitors
3. Lithium in neurodegeneration
4. Precision dosing
5. Reduced monitoring burden
6. Combination optimization
7. Prevention strategies
8. Understanding mechanisms for drug development

**Research Priorities:**

- Predictors of lithium response
- Safety of mood stabilizers in pregnancy
- Novel mechanisms for bipolar depression
- Neuroprotection applications
- Suicide prevention mechanisms
- Long-term outcomes`,
      keyTerms: [
        { term: 'mTOR', definition: 'Mammalian target of rapamycin; intracellular signaling involved in mood disorders' },
        { term: 'polygenic score', definition: 'Aggregate genetic risk from many variants; under development for lithium response' },
        { term: 'measurement-based care', definition: 'Using standardized tools to guide treatment decisions systematically' },
      ],
      clinicalNotes: `Current practice:
- Lithium gold standard for classic bipolar
- Valproate avoid in pregnancy and childbearing women
- Lamotrigine for depression prevention
- Combine agents for better outcomes
- Regular monitoring essential

Emerging:
- Biomarkers for response prediction
- Lithium neuroprotection research
- Precision approaches
- Novel mechanisms in development

Key points:
- Lithium uniquely reduces suicide
- Monitoring is manageable, benefits outweigh burdens
- Valproate teratogenicity serious consideration
- Long-term treatment is the rule
- Combinations often necessary`,
    },
  },

  media: [
    {
      id: 'mood-stabilizer-comparison',
      type: 'diagram',
      filename: 'mood_stabilizer_comparison.svg',
      title: 'Mood Stabilizer Efficacy by Episode Type',
      description: 'Comparative efficacy for mania, depression, and maintenance',
    },
  ],

  citations: [
    {
      id: 'stahl-mood-stabilizers',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
      chapter: 'Mood Stabilizers',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'see-also', label: 'Bipolar Disorder' },
    { targetId: 'psychiatry-antipsychotics', targetType: 'topic', relationship: 'related', label: 'Antipsychotics' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'pharmacology', 'medications'],
    keywords: ['mood stabilizer', 'lithium', 'valproate', 'lamotrigine', 'bipolar'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default moodStabilizersContent;
