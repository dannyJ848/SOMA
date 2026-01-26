/**
 * ECT - Patient Education Content
 *
 * Comprehensive education about Electroconvulsive Therapy.
 */

import { EducationalContent } from '../../types';

export const ectContent: EducationalContent = {
  id: 'mental-health-ect',
  type: 'topic',
  name: 'Electroconvulsive Therapy',
  alternateNames: ['ECT', 'Electroshock Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'ECT is a safe, effective medical treatment for severe depression and other conditions. It uses a brief electrical current to cause a controlled seizure, which helps reset brain chemistry.',
      explanation: `**What Is ECT?**

ECT (Electroconvulsive Therapy) is a medical treatment that uses a small electrical current to trigger a brief seizure in the brain. This might sound scary, but modern ECT is very different from how it is often shown in movies.

**Who Is It For?**

ECT is used when other treatments have not worked, or when fast improvement is needed:
- Severe depression
- Depression with suicidal thoughts
- Bipolar disorder
- Some cases of schizophrenia
- Catatonia (being unable to move or respond)

**What Happens During ECT?**

1. You receive anesthesia so you are asleep
2. You receive medication to relax your muscles
3. A brief electrical pulse is given through electrodes on your head
4. This causes a controlled seizure lasting about 30-60 seconds
5. You wake up within minutes
6. The whole procedure takes about 5-10 minutes

**Is It Safe?**

Modern ECT is very safe. It is done:
- Under anesthesia (you feel nothing)
- With muscle relaxants (your body does not convulse)
- In a controlled medical setting
- With careful monitoring

**Side Effects:**

- Confusion right after treatment (clears quickly)
- Headache or muscle aches
- Memory effects (some memory problems, usually temporary)
- Nausea

**How Well Does It Work?**

ECT is the most effective treatment for severe depression:
- 70-90% of people improve
- Works faster than medications
- Can be life-saving when someone is very ill

**Treatment Schedule:**

- Usually 2-3 times per week
- Typically 6-12 treatments total
- Maintenance ECT may be given to prevent relapse`,
      keyTerms: [
        { term: 'ECT', definition: 'A medical treatment using brief electrical currents to treat severe depression' },
        { term: 'anesthesia', definition: 'Medication that makes you sleep during a procedure' },
        { term: 'seizure', definition: 'Brief electrical activity in the brain caused intentionally in ECT' },
      ],
      analogies: [
        'ECT is like rebooting a computer when it is stuck - it helps the brain reset.',
        'The seizure in ECT is like a controlled electrical storm that clears away the fog of depression.',
        'Modern ECT is as different from old ECT as modern surgery is from surgery 100 years ago.',
      ],
      examples: [
        'Someone with severe depression who has not responded to multiple medications might receive ECT and feel significantly better.',
        'A person who is so depressed they have stopped eating might receive ECT because it works faster than medication.',
        'An elderly patient with psychotic depression might receive ECT because it is safer than multiple medications.',
      ],
    },
    2: {
      level: 2,
      summary: 'ECT is the most effective treatment for severe depression, with 70-90% response rates. Modern ECT uses brief-pulse stimulation under anesthesia with muscle relaxation. Main side effects are cognitive, particularly memory effects, which are usually temporary.',
      explanation: `**Understanding ECT:**

ECT remains the most effective treatment available for severe, treatment-resistant depression. Modern techniques have significantly improved safety and tolerability.

**Indications:**

*First-Line:*
- Severe depression with psychotic features
- Catatonia
- Need for rapid response (suicidality, refusal to eat/drink)
- Pregnancy (when medications risky)

*Treatment-Resistant:*
- Depression not responding to adequate medication trials
- Bipolar depression
- Schizophrenia (especially catatonia, positive symptoms)

**The Procedure:**

*Preparation:*
- NPO (nothing by mouth) before procedure
- Anesthesia evaluation
- Informed consent

*During Treatment:*
- IV anesthesia (methohexital or propofol)
- Muscle relaxant (succinylcholine)
- Bite block placed
- Electrodes positioned
- Brief electrical stimulus delivered
- Seizure monitored (EEG, motor)
- Recovery monitored

*Electrode Placement:*
- Right unilateral (RUL): Fewer cognitive effects
- Bilateral (BL): May be more effective for some
- Bifrontal: Alternative option

**Treatment Course:**

- Acute series: 2-3 times weekly
- Typically 6-12 treatments
- Response often seen by 3-6 treatments
- Maintenance ECT: Weekly to monthly to prevent relapse

**Efficacy:**

- Response rates: 70-90% for major depression
- Superior to medication for severe depression
- Faster than medication (days to weeks)
- Effective when medications fail

**Side Effects:**

*Cognitive:*
- Postictal confusion (clears within hours)
- Retrograde amnesia (memory of events before ECT)
- Anterograde amnesia (difficulty forming new memories during treatment course)
- Usually temporary; most memory returns
- Bilateral placement has more effects

*Medical:*
- Headache, muscle aches
- Nausea
- Cardiovascular effects (monitored)

*Rare:*
- Serious complications rare with modern technique

**After ECT:**

- Continuation treatment needed (medication and/or maintenance ECT)
- Relapse rates high without continuation
- Follow-up care essential`,
      keyTerms: [
        { term: 'brief-pulse', definition: 'Modern ECT technique using short electrical pulses' },
        { term: 'right unilateral', definition: 'Electrode placement on right side, fewer cognitive effects' },
        { term: 'maintenance ECT', definition: 'Ongoing ECT treatments to prevent relapse' },
        { term: 'retrograde amnesia', definition: 'Difficulty remembering events before treatment' },
        { term: 'postictal', definition: 'The period immediately after a seizure' },
      ],
      analogies: [
        'Right unilateral placement is like using a more targeted approach with fewer spillover effects.',
        'Maintenance ECT is like continuing physical therapy after healing - it keeps you well.',
      ],
    },
    3: {
      level: 3,
      summary: 'ECT mechanism likely involves neuroplasticity, neurotransmitter changes, and normalization of HPA axis. Brief-pulse or ultrabrief pulse at 6x seizure threshold for RUL. Cognitive effects dose-related; bilateral has more amnesia. Continuation/maintenance treatment essential for relapse prevention.',
      explanation: `**Technical Parameters:**

**Stimulus Dosing:**

*Seizure Threshold:*
- Minimum charge to induce seizure
- Varies by individual, electrode placement
- Determined by titration or age-based formula

*Dosing Strategy:*
- RUL: 6x seizure threshold (moderately suprathreshold)
- BL: 1.5-2.5x seizure threshold
- Higher doses more effective but more cognitive effects

**Pulse Width:**

- Brief pulse: 0.5-1.5 ms
- Ultrabrief pulse: 0.25-0.3 ms
- Ultrabrief: Fewer cognitive effects, may need higher charge
- RUL ultrabrief: Best cognitive profile

**Electrode Placement:**

*Right Unilateral (RUL):*
- Standard first-choice
- Electrodes on right side only
- Less cognitive impairment
- Needs higher relative dose

*Bilateral (BL):*
- Both hemispheres
- May be more effective in some cases
- More cognitive effects
- Consider if RUL inadequate response

*Bifrontal:*
- Alternative bilateral placement
- May have intermediate cognitive profile

**Mechanism of Action:**

*Neurotransmitter Effects:*
- Enhanced serotonergic transmission
- Dopamine receptor upregulation
- GABA effects

*Neuroendocrine:*
- HPA axis normalization
- Cortisol response changes

*Neuroplasticity:*
- Increased BDNF
- Hippocampal neurogenesis
- Synaptogenesis

*Network Effects:*
- Normalization of hyperconnectivity
- Default mode network changes

**Seizure Quality:**

*Adequate Seizure:*
- Motor: 15-20 seconds minimum
- EEG: 25-30 seconds minimum
- Good postictal suppression

*If Inadequate:*
- Restimulate at higher charge
- Consider bilateral placement
- Address anesthetic factors

**Cognitive Assessment:**

*Pre-ECT:*
- Baseline cognitive testing
- Discuss expected effects

*During Course:*
- Monitor orientation
- Memory complaints

*Post-Course:*
- Formal cognitive testing if concerns
- Most deficits temporary

**Continuation Treatment:**

*High Relapse Risk Without:*
- 50%+ relapse within 6 months

*Options:*
- Medication optimization
- Maintenance ECT (M-ECT)
- Combination

*M-ECT Schedule:*
- Typically starts weekly
- Extends to every 2-4 weeks
- Duration: 6-12 months or longer`,
      keyTerms: [
        { term: 'seizure threshold', definition: 'Minimum stimulus needed to induce a seizure' },
        { term: 'ultrabrief pulse', definition: 'Very short pulse width associated with fewer cognitive effects' },
        { term: 'suprathreshold', definition: 'Stimulus dose above the minimum needed for seizure' },
        { term: 'postictal suppression', definition: 'EEG flattening after seizure, marker of adequate seizure' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor, increased by ECT' },
      ],
      clinicalNotes: 'Start with RUL ultrabrief pulse for best cognitive profile. If inadequate response after 6-9 treatments, consider switching to bilateral. Adequate seizure duration matters. High relapse rate without continuation treatment - plan this before starting ECT.',
    },
    4: {
      level: 4,
      summary: 'ECT efficacy related to seizure adequacy, electrode placement, and stimulus parameters. Mechanisms involve neuroplasticity, neurogenesis, HPA normalization, and network reconfiguration. Cognitive effects are dose-dependent and predominantly affect autobiographical memory. Optimization balances efficacy and cognitive side effects.',
      explanation: `**Optimization Strategies:**

*Maximizing Efficacy:*
- Adequate relative dose (6x threshold for RUL)
- Sufficient seizure quality
- Appropriate treatment frequency
- Consider bilateral if RUL inadequate

*Minimizing Cognitive Effects:*
- RUL preferred to bilateral
- Ultrabrief pulse when possible
- Lowest effective dose
- Optimize anesthesia (brief-acting)
- Schedule (2x vs 3x weekly)

**Neurobiological Mechanisms:**

*Neuroplasticity Effects:*
- BDNF increase in serum, hippocampus
- Hippocampal volume increase (MRI studies)
- Synaptic plasticity enhancement
- Mossy fiber sprouting

*Neurotransmitter Changes:*
- Enhanced 5-HT transmission
- D1 and D2 receptor upregulation
- GABA system effects
- Glutamate normalization

*Neuroendocrine:*
- Normalizes HPA axis hyperactivity
- Reduces elevated cortisol
- Thyroid hormone effects

*Network Reconfiguration:*
- Reduces hyperconnectivity in depression
- Normalizes default mode network
- Resets aberrant patterns

**Cognitive Effects - Detailed:**

*Types of Memory Affected:*
- Autobiographical memory: Most affected
- Personal events from weeks-months before ECT
- Impersonal semantic memory: Less affected
- Working memory: Transient effects only

*Time Course:*
- Acute effects clear within hours
- Anterograde effects resolve after course ends
- Retrograde effects: Partial recovery, some permanent gaps

*Factors Increasing Cognitive Effects:*
- Bilateral > unilateral
- Brief pulse > ultrabrief
- Higher charge
- More frequent treatments
- Greater total number of treatments
- Older age
- Pre-existing cognitive impairment

**Special Populations:**

*Elderly:*
- Often excellent candidates (high efficacy, medication problems)
- May need lower seizure threshold
- Monitor cardiac status
- Higher cognitive sensitivity

*Pregnancy:*
- Can be safer than medications
- Fetal monitoring
- Positioning considerations
- Effective for peripartum conditions

*Medical Comorbidity:*
- No absolute contraindications
- Cardiac optimization important
- Anesthesia consultation
- Risk-benefit analysis

*Adolescents:*
- Limited data, but used for severe cases
- Similar protocols
- Special consent considerations

**ECT vs Other Treatments:**

*Ketamine/Esketamine:*
- Both rapid-acting
- ECT more robust efficacy data for severe depression
- Different mechanisms
- ECT: More sustained effect per treatment
- May be combined

*TMS:*
- TMS: Non-invasive, no anesthesia
- ECT: More effective for severe depression
- Different indications

**Research Directions:**

*Biomarkers:*
- Predicting response
- Monitoring seizure adequacy
- Cognitive risk factors

*Novel Techniques:*
- Magnetic seizure therapy (MST)
- Focal electrically administered seizure therapy (FEAST)
- Ultrabrief pulse refinements`,
      keyTerms: [
        { term: 'autobiographical memory', definition: 'Memory of personal life events, most affected by ECT' },
        { term: 'hyperconnectivity', definition: 'Excessive neural connectivity seen in depression, reduced by ECT' },
        { term: 'magnetic seizure therapy', definition: 'Experimental technique using magnetic stimulation to induce seizure' },
        { term: 'relative dose', definition: 'Stimulus as multiple of seizure threshold' },
        { term: 'mossy fiber sprouting', definition: 'Neuroplastic change in hippocampus induced by ECT' },
      ],
      clinicalNotes: 'Optimize parameters for individual: Start RUL ultrabrief, increase dose or switch placement as needed. Track seizure quality. Cognitive monitoring throughout. Plan continuation treatment. ECT more effective than ketamine for severe depression but both have roles.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ECT research focuses on biomarker-guided optimization, focal stimulation techniques, and understanding mechanisms through advanced neuroimaging. Magnetic seizure therapy offers potential cognitive advantages. Integration with other rapid-acting treatments being explored.',
      explanation: `**Advanced Mechanism Research:**

*Neuroimaging Studies:*
- Default mode network hyperconnectivity normalized
- Subgenual cingulate changes correlate with response
- Hippocampal volume increase
- White matter changes
- Individual connectivity patterns predict response

*Biomarker Development:*
- EEG markers of seizure adequacy
- Blood biomarkers (BDNF, inflammatory markers)
- Cortisol suppression test response
- Predicting responders vs non-responders

*Computational Models:*
- Electric field modeling
- Optimizing electrode placement
- Individual anatomy consideration
- Dose optimization

**Novel Stimulation Approaches:**

*Magnetic Seizure Therapy (MST):*
- Uses magnetic stimulation (like TMS) to induce seizure
- More focal than ECT
- Potentially fewer cognitive effects
- Phase 2/3 trials ongoing
- Promising for cognitive profile

*Focal Electrically Administered Seizure Therapy (FEAST):*
- Ultrabrief, unidirectional pulse
- Very focal stimulation
- Research stage

*Optimized ECT Parameters:*
- Amplitude titration
- Novel electrode configurations
- Individualized dosing algorithms
- Anesthesia optimization

**Integration with Other Treatments:**

*ECT + Ketamine:*
- Ketamine for anesthesia (prolong ECT effect?)
- Sequential or combined protocols
- Research ongoing

*ECT in Context of Treatment Algorithm:*
- After medication failures
- Or first-line for specific indications
- Maintenance strategies
- Relapse prevention optimization

*ECT and Psychotherapy:*
- Combining with CBT for maintenance
- Addressing post-ECT adjustment

**Cognitive Protection Strategies:**

*Pharmacological:*
- Various agents studied (mostly negative)
- Thyroid hormone adjunct
- RUL ultrabrief remains best strategy

*Procedural:*
- Seizure threshold titration
- Optimal pulse width
- Treatment spacing
- Total number minimization

*Rehabilitation:*
- Cognitive remediation after ECT
- Compensatory strategies
- Memory aids during treatment

**Population-Specific Research:**

*Treatment-Resistant Depression:*
- Response rates in multi-failed patients
- Predictors of response
- Optimizing in refractory cases

*Bipolar Disorder:*
- Mixed states
- Rapid cycling
- Comparison to pharmacotherapy

*Psychotic Depression:*
- ECT particularly effective
- Comparison to medication combinations

*Late-Life Depression:*
- High efficacy in elderly
- Cognitive concerns and realities
- Vascular depression

**Implementation Science:**

*Access Issues:*
- Geographic variability
- Stigma barriers
- Insurance coverage
- Workforce training

*Quality Improvement:*
- Standardized protocols
- Outcome tracking
- Cognitive monitoring standards

*Patient Education:*
- Addressing misconceptions
- Informed consent process
- Decision aids

**Future Directions:**

*Personalized ECT:*
- Individual electric field modeling
- Biomarker-guided parameters
- Precision targeting

*Novel Mechanisms:*
- Immune/inflammatory pathways
- Gut-brain axis
- Epigenetic effects

*Integration:*
- Multi-modal rapid-acting treatments
- Optimal sequencing
- Maintenance optimization`,
      keyTerms: [
        { term: 'MST', definition: 'Magnetic Seizure Therapy - uses magnetic pulses to induce therapeutic seizure' },
        { term: 'electric field modeling', definition: 'Computational approach to optimize ECT delivery' },
        { term: 'FEAST', definition: 'Focal Electrically Administered Seizure Therapy - experimental focal approach' },
        { term: 'decision aid', definition: 'Tool to help patients make informed treatment choices' },
        { term: 'precision targeting', definition: 'Individualizing ECT parameters based on patient factors' },
      ],
      clinicalNotes: `Current best practices:
- RUL ultrabrief pulse standard starting point
- Adequate relative dosing (6x threshold)
- Monitor seizure quality
- Plan continuation/maintenance
- Cognitive monitoring throughout

Emerging developments:
- MST may offer cognitive advantages
- Biomarker-guided optimization
- Individual electric field modeling
- Integration with ketamine

Key challenges:
- Access and stigma
- Cognitive effects in some patients
- Relapse prevention
- Optimal maintenance strategies`,
    },
  },

  media: [
    {
      id: 'ect-procedure-overview',
      type: 'diagram',
      filename: 'ect_procedure.svg',
      title: 'ECT Procedure Overview',
      description: 'Steps of modern ECT treatment',
    },
  ],

  citations: [
    {
      id: 'apa-ect-guidelines',
      type: 'article',
      title: 'The Practice of Electroconvulsive Therapy: Recommendations',
      authors: ['American Psychiatric Association'],
      source: 'APA',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'see-also', label: 'Depression' },
    { targetId: 'mental-health-bipolar-disorder', targetType: 'condition', relationship: 'see-also', label: 'Bipolar Disorder' },
    { targetId: 'mental-health-ketamine', targetType: 'topic', relationship: 'related', label: 'Ketamine Treatment' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'treatment'],
    keywords: ['ECT', 'electroconvulsive therapy', 'treatment-resistant depression'],
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

export default ectContent;
