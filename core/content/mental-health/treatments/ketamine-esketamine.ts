/**
 * Ketamine and Esketamine - Patient Education Content
 *
 * Education about ketamine and esketamine for treatment-resistant depression.
 */

import { EducationalContent } from '../../types';

export const ketamineEsketamineContent: EducationalContent = {
  id: 'mental-health-ketamine-esketamine',
  type: 'topic',
  name: 'Ketamine and Esketamine',
  alternateNames: ['Spravato', 'Ketamine Treatment', 'Ketamine Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Ketamine and esketamine are fast-acting treatments for severe depression that have not responded to other medications. They work within hours rather than weeks.',
      explanation: `**What Are Ketamine and Esketamine?**

Ketamine is a medication that has been used safely as an anesthetic for decades. Recently, doctors discovered it can rapidly help people with severe depression, even when other treatments have not worked.

Esketamine (Spravato) is a nasal spray version that is FDA-approved for treatment-resistant depression.

**Who Are They For?**

- People with depression that has not improved with other medications
- People who need fast relief (like those with suicidal thoughts)
- Adults only (esketamine approved 18+)

**How Are They Different from Other Antidepressants?**

- Work within hours to days, not weeks
- Work through different brain pathways
- Given in a healthcare setting, not at home

**What to Expect:**

*Esketamine (Spravato):*
- Nasal spray given in a certified healthcare setting
- You are monitored for at least 2 hours after
- Usually twice a week initially, then weekly or less
- Cannot drive the day of treatment

*IV Ketamine:*
- Given through an IV in a clinic
- Session lasts about 40 minutes
- Monitored for about an hour after
- Series of treatments typically

**Side Effects:**

During or shortly after treatment:
- Feeling disconnected or dreamy (dissociation)
- Dizziness
- Nausea
- Drowsiness
- Increased blood pressure (monitored)

These effects go away within a couple hours.

**Important Points:**

- Given in healthcare settings for safety
- Not a "take-home" medication
- Works best with ongoing depression treatment
- May need maintenance treatments
- Shows promise when other treatments have failed`,
      keyTerms: [
        { term: 'ketamine', definition: 'A medication that can rapidly help severe depression' },
        { term: 'esketamine', definition: 'Nasal spray form of ketamine (Spravato) for depression' },
        { term: 'dissociation', definition: 'Feeling disconnected from yourself or surroundings' },
        { term: 'treatment-resistant depression', definition: 'Depression that has not improved with standard treatments' },
      ],
      analogies: [
        'Traditional antidepressants are like turning up the volume slowly; ketamine is like a sudden boost in clarity.',
        'Ketamine works on a different radio station in the brain than regular antidepressants.',
        'The fast effect of ketamine is like a bridge that helps you feel better while waiting for other treatments to work.',
      ],
      examples: [
        'Someone who has tried 3-4 antidepressants without improvement might receive esketamine and notice their mood lift within hours.',
        'A person with severe depression and suicidal thoughts might receive ketamine for rapid stabilization.',
        'After several ketamine sessions, a patient might find their depression lifted enough to engage better in therapy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ketamine is an NMDA receptor antagonist with rapid antidepressant effects. Esketamine (Spravato) is FDA-approved for TRD and depression with suicidality. Administered in certified settings with monitoring. Works through glutamate and neuroplasticity pathways.',
      explanation: `**Understanding Ketamine Treatment:**

Ketamine represents a paradigm shift in depression treatment - the first fundamentally new mechanism in decades and the first rapid-acting antidepressant.

**Ketamine vs Esketamine:**

*Ketamine (Racemic):*
- Contains S- and R-ketamine
- Given IV typically (off-label for depression)
- Various clinic settings
- Not FDA-approved for depression (but widely used)

*Esketamine (Spravato):*
- S-enantiomer only
- Nasal spray
- FDA-approved for TRD and MDD with suicidality
- REMS program (Risk Evaluation and Mitigation Strategy)

**FDA Indications (Esketamine):**

1. Treatment-resistant depression (with oral antidepressant)
   - After failure of 2+ antidepressants
2. Major depression with suicidal ideation/behavior (with oral antidepressant)
   - Acute treatment of suicidality

**How Treatment Works:**

*Esketamine Protocol:*
- Induction: Twice weekly for 4 weeks
- Maintenance: Weekly for 4 weeks, then weekly or every 2 weeks
- Always with an oral antidepressant
- Given in certified healthcare settings

*IV Ketamine:*
- Typically 0.5 mg/kg over 40 minutes
- Series of 6 infusions over 2-3 weeks
- Various maintenance schedules
- Off-label; protocols vary

**Administration Setting:**

*Requirements:*
- Certified REMS site (esketamine)
- Healthcare professional supervises
- 2-hour observation minimum
- Blood pressure monitoring
- Cannot drive day of treatment

*Why These Requirements:*
- Dissociative effects
- Sedation
- Blood pressure increase
- Abuse potential

**Side Effects:**

*Common (during/shortly after):*
- Dissociation (feeling detached)
- Dizziness, vertigo
- Nausea
- Sedation
- Increased blood pressure
- Anxiety
- Headache

*These typically resolve within 2 hours*

**Efficacy:**

- Response often within hours to days
- About 70% respond in clinical trials
- Effect may not last without continuation
- Best used with ongoing antidepressant and therapy`,
      keyTerms: [
        { term: 'NMDA receptor', definition: 'Glutamate receptor that ketamine blocks' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy - FDA safety program' },
        { term: 'S-enantiomer', definition: 'One form of ketamine molecule (used in esketamine)' },
        { term: 'racemic', definition: 'Mix of both S and R forms of ketamine' },
        { term: 'induction phase', definition: 'Initial intensive treatment period' },
      ],
      analogies: [
        'REMS is like having a special license to dispense the medication safely.',
        'Ketamine opens a window for healing; therapy and other treatments help you climb through.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ketamine\'s antidepressant mechanism involves NMDA antagonism leading to glutamate surge, AMPA receptor activation, BDNF release, and rapid synaptogenesis. Esketamine (Spravato) REMS requires certified settings and monitoring. Duration of effect limited; integration with maintenance treatment essential.',
      explanation: `**Mechanism of Action:**

*NMDA Receptor Antagonism:*
- Blocks NMDA receptors on GABAergic interneurons
- Disinhibits glutamatergic neurons
- Glutamate surge in prefrontal cortex

*Downstream Effects:*
- AMPA receptor activation
- BDNF release
- mTOR pathway activation
- Rapid synaptogenesis

*Time Course:*
- Acute effects: Hours (NMDA blockade)
- Sustained effects: Days (synaptic changes)
- Durability limited without continuation

*This differs fundamentally from traditional antidepressants which work through monoamine systems*

**Clinical Evidence:**

*Esketamine Trials:*
- TRANSFORM trials: TRD response vs placebo + new oral antidepressant
- ASPIRE trials: Suicidal ideation reduction within 24 hours
- SUSTAIN trials: Maintenance efficacy

*IV Ketamine:*
- Multiple RCTs supporting rapid antidepressant effect
- Meta-analyses confirm efficacy
- Effect size large but duration limited

**Esketamine Protocol Details:**

*Dosing:*
- 56 mg or 84 mg nasal spray
- Induction: Day 1, 4, 8, 11, 15, 18, 22, 25 (weeks 1-4)
- Maintenance: Weekly weeks 5-8, then weekly or every 2 weeks

*Monitoring Requirements:*
- Blood pressure before and after (at 40 min, post-dose)
- Clinical assessment for dissociation, sedation
- 2-hour observation minimum
- Release when stable

*REMS Components:*
- Healthcare setting enrollment and certification
- Patient enrollment
- Supervised administration
- Documentation

**IV Ketamine Practice:**

*Typical Protocol:*
- 0.5 mg/kg over 40 minutes
- 6 infusions over 2-3 weeks
- Maintenance as needed (weekly to monthly)
- Monitoring during infusion

*Variations:*
- IM, sublingual, oral ketamine (less common)
- Dosing adjustments
- Integration with psychotherapy

**Contraindications and Precautions:**

*Contraindications:*
- Aneurysmal vascular disease
- Intracerebral hemorrhage history
- Known hypersensitivity

*Precautions:*
- Uncontrolled hypertension
- Substance use disorder
- Psychosis history
- Pregnancy

**Integration with Treatment:**

*Required Concurrent Treatment:*
- Oral antidepressant (esketamine label)
- Psychotherapy recommended

*Ongoing Care:*
- Monitor for relapse
- Address underlying factors
- Long-term planning`,
      keyTerms: [
        { term: 'glutamate surge', definition: 'Rapid increase in glutamate signaling triggered by ketamine' },
        { term: 'mTOR pathway', definition: 'Cellular signaling pathway involved in synaptic plasticity' },
        { term: 'synaptogenesis', definition: 'Formation of new synaptic connections' },
        { term: 'AMPA receptor', definition: 'Glutamate receptor activated downstream of ketamine effects' },
        { term: 'TRANSFORM trials', definition: 'Phase 3 esketamine trials for treatment-resistant depression' },
      ],
      clinicalNotes: 'Ketamine/esketamine effect is rapid but not durable without maintenance. Always use with oral antidepressant per indication. Monitor blood pressure carefully. Dissociation typically resolves within 2 hours. History of psychosis is relative contraindication.',
    },
    4: {
      level: 4,
      summary: 'Ketamine\'s mechanism involves NMDA antagonism on interneurons, glutamate disinhibition, AMPA-mediated BDNF release, and mTOR-dependent synaptogenesis. Biomarker research explores predictors of response. Integration with psychotherapy (KAP) shows promise. R-ketamine may have advantages.',
      explanation: `**Detailed Mechanism:**

*NMDA Receptor Blockade:*
- Preferentially blocks tonically active NMDA receptors
- GABAergic interneurons highly affected
- Releases brake on glutamatergic pyramidal neurons

*Glutamate-AMPA-BDNF Cascade:*
- Glutamate release → AMPA receptor activation
- AMPA activation → BDNF release
- BDNF → TrkB receptor activation
- Downstream: mTOR, eEF2 pathways

*Synaptic Effects:*
- Spine density increase within hours
- Synaptic protein synthesis
- Reversal of stress-induced synaptic loss
- Prefrontal cortex focus

*Other Potential Mechanisms:*
- Opioid system involvement (debated)
- Anti-inflammatory effects
- HPA axis effects
- Direct effects on depression-related circuits

**Biomarker Research:**

*Potential Predictors:*
- Baseline inflammatory markers
- Glutamate levels (MRS)
- Functional connectivity patterns
- Genetic factors (BDNF polymorphisms)
- None validated for clinical use

*Objective Measures:*
- EEG changes with ketamine
- fMRI connectivity changes
- Research applications

**Ketamine-Assisted Psychotherapy (KAP):**

*Rationale:*
- Ketamine induces neuroplasticity window
- Enhanced learning during/after
- Psychological insights during experience
- Integration work essential

*Models:*
- Preparation → medicine session → integration
- Therapy before, during, or after
- Various frameworks

*Research:*
- Combining ketamine with therapy
- Enhanced outcomes possible
- Optimal protocols unclear

**R-Ketamine Research:**

*Advantages of R-enantiomer:*
- Less dissociative effects (preclinical)
- Potentially longer-lasting effects
- Different receptor profile
- Phase 2 trials ongoing

*Current Esketamine (S):*
- FDA-approved
- More potent at NMDA
- More dissociative

**Special Populations:**

*Bipolar Depression:*
- Emerging data supportive
- Mood stabilizer coverage
- Monitoring for mania switch

*PTSD:*
- Some evidence for benefit
- Integration with trauma therapy

*Suicidal Ideation:*
- FDA indication for esketamine
- Rapid reduction in suicidal thoughts
- Bridge to other treatments

**Durability and Maintenance:**

*Challenge:*
- Effect often wanes within days-weeks
- Maintenance treatment needed

*Strategies:*
- Continuing oral antidepressant
- Maintenance ketamine/esketamine sessions
- Psychotherapy integration
- Combination approaches

**Comparison with ECT:**

*Ketamine:*
- Less invasive
- No anesthesia/seizure
- Faster administration
- More accessible potentially

*ECT:*
- Greater efficacy data
- Better durability
- More robust for severe depression
- More cognitive effects

*Not Either/Or:*
- Different places in algorithm
- ECT for most severe/refractory`,
      keyTerms: [
        { term: 'TrkB receptor', definition: 'BDNF receptor mediating neuroplastic effects' },
        { term: 'KAP', definition: 'Ketamine-Assisted Psychotherapy' },
        { term: 'R-ketamine', definition: 'The R-enantiomer, potentially less dissociative' },
        { term: 'MRS', definition: 'Magnetic resonance spectroscopy for measuring brain chemicals' },
        { term: 'neuroplasticity window', definition: 'Period of enhanced brain flexibility after ketamine' },
      ],
      clinicalNotes: 'Ketamine is a valuable tool for TRD but not a cure - integration with ongoing treatment essential. Monitor for substance misuse risk. Dissociation not required for efficacy. Consider ECT for most severe/refractory cases. KAP models promising but protocols still developing.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ketamine research explores novel formulations, optimized protocols, biomarker-guided treatment, and integration with psychotherapy. Comparison with other rapid-acting treatments informs positioning. Arketamine development offers potentially different profile. Implementation challenges include access, cost, and appropriate utilization.',
      explanation: `**Novel Formulations and Agents:**

*Arketamine (R-ketamine):*
- Phase 2/3 development
- Less dissociative (preclinical)
- Potentially longer effects
- Different mechanism profile
- May not require REMS-style monitoring

*Other Formulations:*
- Sublingual ketamine
- Extended-release oral
- Intranasal (various)
- Aiming for home administration safety

*Related Compounds:*
- Hydroxynorketamine (metabolite with activity)
- Other NMDA modulators
- AMPA potentiators

**Optimized Protocols:**

*Dosing Research:*
- Optimal dose finding
- Frequency optimization
- Maintenance schedules
- Individual titration

*Combination Approaches:*
- Ketamine + specific therapies
- Ketamine + lithium (augmentation)
- Ketamine + ECT (augmentation or sequence)
- Multi-modal strategies

*Prediction and Personalization:*
- Early response prediction
- Biomarker-guided dosing
- Pharmacogenomic considerations

**Integration with Psychotherapy:**

*Ketamine-Assisted Psychotherapy Models:*
- Preparation-experience-integration
- Various therapeutic frameworks
- Trauma processing
- Meaning-making
- Limited controlled data but promising

*Neuroplasticity Enhancement:*
- Therapy during plasticity window
- Enhanced learning
- Memory reconsolidation opportunities
- Optimal timing unclear

**Comparison with Other Rapid Treatments:**

*Ketamine vs Esketamine:*
- IV ketamine: More flexible, off-label
- Esketamine: FDA-approved, REMS infrastructure
- Direct comparison limited

*Ketamine vs ECT:*
- ECT more robust evidence for severe depression
- Ketamine more accessible
- Different mechanisms
- Different patient populations

*Ketamine vs Psilocybin:*
- Both rapid-acting, different mechanisms
- Psilocybin: 5-HT2A, longer sessions, not FDA approved
- May target different patient subgroups

**Implementation Challenges:**

*Access:*
- REMS requirements (esketamine)
- Geographic disparities
- Infrastructure needs
- Workforce training

*Cost:*
- Esketamine expensive
- Insurance coverage variable
- IV ketamine out-of-pocket often
- Cost-effectiveness analysis ongoing

*Appropriate Use:*
- Defining treatment-resistant
- Ensuring adequate prior trials
- Avoiding premature use
- Long-term utilization patterns

*Safety Monitoring:*
- Substance abuse potential
- Long-term effects
- Bladder/urinary effects at high chronic doses
- Cardiovascular monitoring

**Research Directions:**

*Mechanism Understanding:*
- Specific synapse effects
- Cell-type specific actions
- Temporal dynamics
- Individual variability

*Biomarker Development:*
- Response prediction
- Optimal dosing
- Durability prediction
- Safety monitoring

*Outcome Optimization:*
- Which patients?
- What dose/schedule?
- What combination treatments?
- How long to continue?

**Clinical Integration:**

*Algorithm Positioning:*
- After traditional antidepressant failures
- Before or after ECT (varies)
- Acute crisis use
- Maintenance role

*Care Models:*
- Specialized ketamine clinics
- Integrated with psychiatry practice
- Telehealth components
- Primary care role (limited)

*Quality Metrics:*
- Response tracking
- Adverse event monitoring
- Appropriate utilization
- Long-term outcomes`,
      keyTerms: [
        { term: 'arketamine', definition: 'R-enantiomer of ketamine in clinical development' },
        { term: 'hydroxynorketamine', definition: 'Ketamine metabolite with potential antidepressant effects' },
        { term: 'memory reconsolidation', definition: 'Process where recalled memories become modifiable' },
        { term: 'AMPA potentiator', definition: 'Compound that enhances AMPA receptor function' },
        { term: 'plasticity window', definition: 'Period of enhanced synaptic flexibility after treatment' },
      ],
      clinicalNotes: `Current best practices:
- Esketamine FDA-approved for TRD, MDD+SI
- Must be used with oral antidepressant
- REMS requirements (certified sites, monitoring)
- Integration with ongoing care essential

Emerging developments:
- Arketamine (R-ketamine) trials
- Ketamine-assisted psychotherapy
- Biomarker-guided approaches
- Novel formulations

Key challenges:
- Durability of response
- Access and cost
- Appropriate utilization
- Long-term safety data`,
    },
  },

  media: [
    {
      id: 'ketamine-mechanism',
      type: 'diagram',
      filename: 'ketamine_mechanism.svg',
      title: 'Ketamine Mechanism of Action',
      description: 'How ketamine affects brain signaling to reduce depression',
    },
  ],

  citations: [
    {
      id: 'spravato-prescribing',
      type: 'article',
      title: 'SPRAVATO Prescribing Information',
      authors: ['Janssen Pharmaceuticals'],
      source: 'FDA',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'see-also', label: 'Depression' },
    { targetId: 'mental-health-ect', targetType: 'topic', relationship: 'related', label: 'ECT' },
    { targetId: 'mental-health-psychiatric-medications', targetType: 'topic', relationship: 'related', label: 'Psychiatric Medications' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'treatment'],
    keywords: ['ketamine', 'esketamine', 'Spravato', 'treatment-resistant depression', 'rapid-acting'],
    clinicalRelevance: 'high',
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

export default ketamineEsketamineContent;
