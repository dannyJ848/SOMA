/**
 * Depression and Anxiety Treatment Algorithm
 *
 * Based on APA Practice Guidelines, CANMAT Guidelines, and STAR*D findings
 * Covers major depressive disorder and generalized anxiety disorder
 */

import { TreatmentAlgorithm } from './types';

export const depressionAnxietyAlgorithm: TreatmentAlgorithm = {
  id: 'treatment-depression-anxiety-apa',
  condition: 'Depression and Anxiety Disorders',
  alternateNames: ['Major Depressive Disorder', 'MDD', 'Generalized Anxiety Disorder', 'GAD', 'Clinical Depression'],
  icdCodes: ['F32.1', 'F32.2', 'F33.1', 'F41.1', 'F41.0'],
  guidelineSource: 'APA Practice Guidelines / CANMAT Guidelines',
  guidelineYear: 2023,
  lastReviewed: '2026-01-24',

  levels: {
    1: {
      level: 1,
      overview: 'Depression and anxiety are common conditions that affect how you feel, think, and handle daily activities. Treatment with medicine and/or therapy can help you feel better.',
      whyThisApproach: 'These conditions are caused by changes in brain chemistry. Medicine helps restore balance, while therapy teaches you new ways to cope. Many people need both.',
      whatToExpect: 'Antidepressants take 2-4 weeks to start working. You may try different medicines to find what works best. Therapy usually involves weekly sessions for several months.',
      keyPoints: [
        'It is not your fault - depression and anxiety are medical conditions',
        'Treatment works for most people',
        'Medicine takes time to work - do not give up too soon',
        'Therapy gives you tools to manage symptoms',
        'Tell your doctor if you have thoughts of hurting yourself'
      ],
      patientQuestions: [
        'Will I have to take medicine forever?',
        'Are antidepressants addictive?',
        'Why am I not feeling better yet?'
      ]
    },
    2: {
      level: 2,
      overview: 'First-line treatment for moderate-severe depression includes SSRIs or SNRIs combined with psychotherapy (especially CBT). Mild depression may improve with psychotherapy alone. Anxiety disorders respond well to SSRIs and CBT.',
      whyThisApproach: 'SSRIs and SNRIs are effective, well-tolerated, and have a large evidence base. Cognitive behavioral therapy (CBT) teaches skills that provide lasting benefits even after treatment ends.',
      whatToExpect: 'An antidepressant is typically tried for 6-8 weeks at adequate dose. If partial response, options include dose increase, augmentation, or switch. Remission (feeling back to normal) is the goal.',
      keyPoints: [
        'SSRIs (like sertraline, escitalopram) are usually tried first',
        'Full effect takes 4-8 weeks; some improvement may be seen at 2 weeks',
        'Side effects often improve after the first 1-2 weeks',
        'CBT is as effective as medication for mild-moderate depression',
        'Combination (medicine + therapy) often works best for moderate-severe illness'
      ],
      patientQuestions: [
        'What side effects should I expect?',
        'Can I stop medicine once I feel better?',
        'How long will I need therapy?'
      ]
    },
    3: {
      level: 3,
      overview: 'Depression treatment follows a stepped approach: first-line monotherapy, augmentation, switching, then consideration of MAOIs or ECT for refractory cases. The STAR*D trial informs sequencing. GAD treatment emphasizes SSRIs/SNRIs with CBT.',
      whyThisApproach: 'STAR*D showed cumulative remission rates of ~70% with sequential trials but declining response with each step. Augmentation strategies (lithium, atypical antipsychotics, thyroid) can convert partial responders to remission.',
      whatToExpect: 'Each medication trial should be 6-8 weeks at adequate dose. Measurement-based care using PHQ-9 or GAD-7 tracks progress. Treatment-resistant depression (failure of 2+ adequate trials) warrants specialist referral.',
      keyPoints: [
        'STAR*D Level 1: Citalopram remission 28%, response 47%',
        'Level 2 options: Switch (bupropion, sertraline, venlafaxine) or augment (bupropion, buspirone)',
        'Augmentation: Aripiprazole, lithium, thyroid hormone for partial responders',
        'CBT equivalent to medications for mild-moderate depression; additive effect with medications',
        'Maintenance treatment: 6-12 months after remission for first episode; indefinite if recurrent'
      ],
      detailedSteps: [
        {
          id: 'dep-step-1',
          order: 1,
          name: 'Initial Assessment and First-Line Treatment',
          description: 'Diagnosis, severity assessment, and first medication trial',
          medications: [
            {
              name: 'Sertraline',
              genericName: 'Sertraline',
              class: 'SSRI',
              dosing: '50mg daily, may increase by 50mg weekly to max 200mg',
              commonSideEffects: ['Nausea', 'Diarrhea', 'Sexual dysfunction', 'Insomnia', 'Headache'],
              seriousWarnings: ['Suicidality in young adults (monitor)', 'Serotonin syndrome', 'Bleeding risk'],
              considerations: 'Favorable for comorbid anxiety, cardiac safety, few drug interactions',
              costCategory: 'low'
            },
            {
              name: 'Escitalopram',
              genericName: 'Escitalopram',
              class: 'SSRI',
              dosing: '10mg daily, may increase to 20mg after 1 week',
              commonSideEffects: ['Nausea', 'Sexual dysfunction', 'Insomnia', 'Fatigue'],
              seriousWarnings: ['QTc prolongation at higher doses'],
              considerations: 'Most selective SSRI; may have fastest onset of antidepressant effect',
              costCategory: 'low'
            },
            {
              name: 'Fluoxetine',
              genericName: 'Fluoxetine',
              class: 'SSRI',
              dosing: '20mg daily, may increase to 60-80mg',
              commonSideEffects: ['Insomnia', 'Activation', 'Weight loss initially', 'Sexual dysfunction'],
              considerations: 'Long half-life (easier taper); activating (may help fatigue, worsen anxiety)',
              costCategory: 'low'
            }
          ],
          nonPharmacologic: [
            'Psychoeducation: Explain depression as medical illness',
            'CBT or IPT: Structured psychotherapy proven effective',
            'Behavioral activation: Increase pleasurable activities',
            'Sleep hygiene: Regular sleep-wake schedule',
            'Exercise: 150 min/week moderate activity shown effective'
          ],
          monitoringRequired: [
            { test: 'PHQ-9', frequency: 'Baseline and every 2-4 weeks', purpose: 'Track depression severity and response' },
            { test: 'GAD-7', frequency: 'Baseline and every 2-4 weeks', purpose: 'Track anxiety if comorbid' },
            { test: 'Suicide risk assessment', frequency: 'Each visit', purpose: 'Safety monitoring' }
          ],
          targets: [
            { parameter: 'PHQ-9 score', goal: '<5 (remission)', rationale: 'Full remission reduces relapse risk' },
            { parameter: 'Time to response', goal: '4-8 weeks at adequate dose', rationale: 'Allow adequate trial before switching' }
          ],
          timeframe: '6-8 weeks per medication trial'
        },
        {
          id: 'dep-step-2',
          order: 2,
          name: 'Optimization and Switching',
          description: 'Dose optimization, switch within or between classes',
          medications: [
            {
              name: 'Venlafaxine XR',
              genericName: 'Venlafaxine',
              class: 'SNRI',
              dosing: '75mg daily, increase by 75mg weekly to 150-225mg',
              commonSideEffects: ['Nausea', 'Hypertension', 'Sweating', 'Sexual dysfunction'],
              seriousWarnings: ['Discontinuation syndrome (taper slowly)', 'Hypertension at high doses'],
              considerations: 'SNRI mechanism; may help pain comorbidity; difficult discontinuation',
              costCategory: 'low'
            },
            {
              name: 'Duloxetine',
              genericName: 'Duloxetine',
              class: 'SNRI',
              dosing: '60mg daily (may start 30mg x1 week for tolerability)',
              commonSideEffects: ['Nausea', 'Dry mouth', 'Constipation', 'Dizziness'],
              considerations: 'Also approved for anxiety, chronic pain, fibromyalgia',
              costCategory: 'moderate'
            },
            {
              name: 'Bupropion XL',
              genericName: 'Bupropion',
              class: 'NDRI',
              dosing: '150mg daily x1 week, then 300mg daily',
              commonSideEffects: ['Insomnia', 'Agitation', 'Headache', 'Dry mouth'],
              seriousWarnings: ['Seizure risk (dose-dependent)', 'Contraindicated in eating disorders'],
              considerations: 'No sexual dysfunction or weight gain; activating; do not use in anxiety without depression',
              costCategory: 'low'
            },
            {
              name: 'Mirtazapine',
              genericName: 'Mirtazapine',
              class: 'Atypical Antidepressant',
              dosing: '15mg at bedtime, may increase to 30-45mg',
              commonSideEffects: ['Sedation', 'Weight gain', 'Increased appetite'],
              considerations: 'Sedating (helps insomnia); appetite stimulant; useful in underweight/anorexic',
              costCategory: 'low'
            }
          ],
          targets: [
            { parameter: 'Switch strategy', goal: 'Try different mechanism if initial SSRI fails', rationale: 'STAR*D Level 2 data' }
          ],
          patientEducation: 'If the first medicine does not work, others often will. Most people find relief with continued treatment.'
        },
        {
          id: 'dep-step-3',
          order: 3,
          name: 'Augmentation Strategies',
          description: 'Add second agent for partial response',
          medications: [
            {
              name: 'Aripiprazole',
              genericName: 'Aripiprazole',
              class: 'Atypical Antipsychotic (Augmentation)',
              dosing: '2-5mg daily, may increase to 10-15mg',
              commonSideEffects: ['Akathisia', 'Weight gain', 'Insomnia', 'Restlessness'],
              seriousWarnings: ['Tardive dyskinesia (rare)', 'Metabolic effects'],
              considerations: 'FDA-approved for MDD augmentation; activating profile',
              costCategory: 'moderate'
            },
            {
              name: 'Lithium',
              genericName: 'Lithium Carbonate',
              class: 'Mood Stabilizer (Augmentation)',
              dosing: '300mg BID, target level 0.6-0.8',
              commonSideEffects: ['Tremor', 'Thirst', 'Polyuria', 'Hypothyroidism', 'Weight gain'],
              seriousWarnings: ['Narrow therapeutic index', 'Nephrotoxicity (long-term)', 'Teratogenic'],
              considerations: 'Strong evidence for augmentation; anti-suicide effect; requires monitoring',
              costCategory: 'low'
            },
            {
              name: 'Liothyronine (T3)',
              genericName: 'Liothyronine',
              class: 'Thyroid Hormone (Augmentation)',
              dosing: '25-50mcg daily',
              commonSideEffects: ['Tachycardia', 'Tremor', 'Insomnia'],
              considerations: 'STAR*D Level 3 data; may work better in women; low side effect burden',
              costCategory: 'low'
            },
            {
              name: 'Quetiapine XR',
              genericName: 'Quetiapine',
              class: 'Atypical Antipsychotic',
              dosing: '50-150mg daily (lower than antipsychotic doses)',
              commonSideEffects: ['Sedation', 'Weight gain', 'Metabolic effects'],
              considerations: 'FDA-approved for MDD augmentation and as monotherapy; very sedating',
              costCategory: 'low'
            }
          ],
          monitoringRequired: [
            { test: 'Lithium level', frequency: 'Weekly until stable, then every 3 months', purpose: 'Therapeutic monitoring' },
            { test: 'Renal and thyroid function', frequency: 'Every 6 months on lithium', purpose: 'Safety monitoring' },
            { test: 'Metabolic panel, weight', frequency: 'Baseline and every 3-6 months on antipsychotics', purpose: 'Metabolic monitoring' }
          ]
        },
        {
          id: 'dep-step-4',
          order: 4,
          name: 'Treatment-Resistant Depression',
          description: 'MAOIs, ketamine/esketamine, ECT, TMS',
          medications: [
            {
              name: 'Esketamine',
              genericName: 'Esketamine',
              class: 'NMDA Receptor Antagonist',
              dosing: '56-84mg intranasal twice weekly x4 weeks, then weekly to monthly',
              commonSideEffects: ['Dissociation', 'Sedation', 'Dizziness', 'Nausea', 'Increased BP'],
              seriousWarnings: ['REMS program required', 'Abuse potential', 'Cognitive effects'],
              contraindications: ['Aneurysmal vascular disease', 'Uncontrolled hypertension'],
              considerations: 'FDA-approved for treatment-resistant depression; rapid onset; requires in-office administration',
              costCategory: 'very-high'
            },
            {
              name: 'Tranylcypromine',
              genericName: 'Tranylcypromine',
              class: 'MAOI',
              dosing: '10mg BID, increase every 1-3 weeks to 30-60mg/day',
              commonSideEffects: ['Orthostatic hypotension', 'Insomnia', 'Weight gain'],
              seriousWarnings: ['Hypertensive crisis (tyramine interaction)', 'Serotonin syndrome'],
              contraindications: ['Concurrent SSRIs/SNRIs', 'Sympathomimetics', 'High-tyramine foods'],
              considerations: 'Highly effective in refractory depression but requires dietary restrictions; 2-week washout from SSRIs',
              costCategory: 'moderate'
            }
          ],
          nonPharmacologic: [
            'Electroconvulsive therapy (ECT): Most effective treatment; 50-70% response in refractory cases',
            'Repetitive transcranial magnetic stimulation (TMS): FDA-approved; non-invasive; daily for 4-6 weeks',
            'Vagus nerve stimulation (VNS): For chronic refractory depression; implanted device',
            'Intensive outpatient psychotherapy: When medication alone is insufficient'
          ],
          patientEducation: 'For depression that has not responded to multiple medications, there are still options. ECT is often very effective and safer than commonly believed.'
        }
      ]
    },
    4: {
      level: 4,
      overview: 'Measurement-based care using validated scales (PHQ-9, GAD-7, QIDS) guides treatment decisions. Pharmacogenomics can inform drug selection (CYP2D6, CYP2C19 for SSRIs). Novel mechanisms (glutamate, GABA) expand options for treatment-resistant depression.',
      whyThisApproach: 'The STAR*D sequenced treatment paradigm showed ~70% cumulative remission but highlighted the challenge of treatment resistance. Precision psychiatry using genetic testing may reduce trial-and-error. Rapid-acting antidepressants (ketamine) address acute suicidality.',
      whatToExpect: 'Complex depression requires systematic evaluation for comorbidities (substance use, personality disorders, medical illness), trauma, and treatment adherence. Specialist referral is appropriate for refractory cases.',
      keyPoints: [
        'CYP2D6 poor metabolizers: Higher SSRI levels, more side effects',
        'CYP2C19 poor metabolizers: Higher citalopram/escitalopram levels; FDA dosing guidance',
        'Inflammatory biomarkers (CRP, IL-6): May predict response to anti-inflammatory strategies',
        'Melancholic features: May predict better response to TCAs, ECT',
        'Atypical features: May predict better response to MAOIs'
      ],
      detailedSteps: [
        {
          id: 'dep-advanced-1',
          order: 1,
          name: 'Precision Psychiatry',
          description: 'Pharmacogenomic and biomarker-guided treatment',
          nonPharmacologic: [
            'Pharmacogenomic testing: CYP2D6, CYP2C19, CYP3A4, SLC6A4 (serotonin transporter)',
            'Inflammatory markers: CRP elevation may predict poor response to SSRIs',
            'HPA axis: Dexamethasone suppression test (research tool)',
            'Sleep studies: Polysomnography if primary sleep disorder suspected'
          ],
          targets: [
            { parameter: 'CYP2D6 poor metabolizer', goal: 'Reduce SSRI dose or choose non-2D6 substrate', rationale: 'Avoid toxicity' },
            { parameter: 'CYP2C19 poor metabolizer', goal: 'Escitalopram max 10mg, citalopram max 20mg', rationale: 'FDA guidance' }
          ]
        },
        {
          id: 'dep-advanced-2',
          order: 2,
          name: 'Complex Comorbidity Management',
          description: 'Dual diagnosis, personality disorders, chronic pain',
          medications: [
            {
              name: 'Duloxetine',
              class: 'SNRI',
              considerations: 'Depression with chronic pain (neuropathic, fibromyalgia, osteoarthritis)'
            },
            {
              name: 'Vortioxetine',
              genericName: 'Vortioxetine',
              class: 'Multimodal Antidepressant',
              dosing: '10mg daily, may increase to 20mg',
              commonSideEffects: ['Nausea', 'Sexual dysfunction (less than other SSRIs)'],
              considerations: 'May improve cognitive symptoms of depression; 5-HT7 antagonism',
              costCategory: 'high'
            }
          ],
          nonPharmacologic: [
            'DBT: For comorbid borderline personality disorder',
            'Motivational interviewing: For comorbid substance use',
            'EMDR or PE: For comorbid PTSD',
            'ACT: For chronic pain with depression'
          ]
        },
        {
          id: 'dep-advanced-3',
          order: 3,
          name: 'Acute Suicidality Management',
          description: 'Rapid-acting interventions for crisis',
          medications: [
            {
              name: 'IV Ketamine',
              class: 'NMDA Antagonist',
              dosing: '0.5 mg/kg IV over 40 minutes',
              considerations: 'Rapid antisuicidal effect (within hours); off-label; requires monitoring'
            },
            {
              name: 'Lithium',
              class: 'Mood Stabilizer',
              considerations: 'Specific anti-suicide effect independent of mood stabilization'
            },
            {
              name: 'Clozapine',
              class: 'Atypical Antipsychotic',
              considerations: 'Anti-suicide effect in schizophrenia; REMS program required'
            }
          ],
          nonPharmacologic: [
            'Safety planning: Collaborative structured intervention',
            'Means restriction counseling: Firearms, medications',
            'Crisis resources: 988 Suicide Prevention Lifeline',
            'Hospitalization: When outpatient safety cannot be ensured'
          ],
          patientEducation: 'Suicidal thoughts are symptoms that can be treated. Let someone know you are struggling. Crisis resources are available 24/7.'
        }
      ]
    },
    5: {
      level: 5,
      overview: 'Emerging treatments for depression include psilocybin-assisted psychotherapy, neuromodulation (deep TMS, MST), and novel pharmacology (GABA modulators, psychedelics). Network neuroscience informs targeting of neuromodulation. Computational psychiatry develops predictive models.',
      whyThisApproach: 'Approximately 30% of depression is treatment-resistant. Psychedelic-assisted therapy shows remarkable efficacy in Phase 2 trials. Individualized brain stimulation using connectivity mapping may enhance TMS and DBS outcomes.',
      whatToExpect: 'Clinical trials offer access to investigational therapies. Specialized academic centers provide comprehensive evaluation and advanced treatments. Integrated care models address the high medical comorbidity in depression.',
      keyPoints: [
        'Psilocybin: COMPASS and Johns Hopkins trials show 50-70% response in treatment-resistant depression',
        'MDMA-assisted therapy: FDA breakthrough designation for PTSD',
        'Deep TMS (H-coil): Deeper penetration than standard TMS; FDA-approved',
        'Magnetic seizure therapy (MST): Investigational; may have cognitive advantages over ECT',
        'Closed-loop DBS: Personalized stimulation based on real-time biomarkers'
      ],
      detailedSteps: [
        {
          id: 'dep-specialist-1',
          order: 1,
          name: 'Psychedelic-Assisted Therapy',
          description: 'Emerging paradigm for treatment-resistant depression',
          medications: [
            {
              name: 'Psilocybin',
              genericName: 'Psilocybin',
              class: '5-HT2A Agonist (Psychedelic)',
              dosing: '25mg single dose with preparatory and integration therapy',
              commonSideEffects: ['Perceptual changes', 'Anxiety during session', 'Headache', 'Nausea'],
              considerations: 'COMPASS Pathways and Johns Hopkins Phase 2b positive; FDA breakthrough therapy designation; requires specialized setting'
            },
            {
              name: 'MDMA',
              genericName: 'MDMA',
              class: 'Entactogen',
              dosing: 'Protocol-specified doses with psychotherapy sessions',
              considerations: 'FDA breakthrough for PTSD; not depression-specific; Phase 3 trials ongoing'
            }
          ],
          patientEducation: 'Psychedelic-assisted therapy is investigational but shows promise. These are not recreational use - they require intensive psychotherapy before, during, and after administration.'
        },
        {
          id: 'dep-specialist-2',
          order: 2,
          name: 'Advanced Neuromodulation',
          description: 'Brain stimulation beyond standard TMS',
          nonPharmacologic: [
            'Stanford Neuromodulation Therapy (SNT/SAINT): Accelerated TMS (10 sessions/day x5 days); 90% remission in open-label',
            'Deep brain stimulation (DBS): Investigational for depression; targets include subcallosal cingulate (Brodmann area 25)',
            'Focused ultrasound: Non-invasive modulation of deep structures; early stage research',
            'Transcranial direct current stimulation (tDCS): Weaker evidence; home-based options emerging'
          ],
          targets: [
            { parameter: 'SNT protocol', goal: '1800 pulses x10 sessions/day x5 days', rationale: 'Accelerated neuroplasticity' },
            { parameter: 'DBS targets', goal: 'Individualized based on tractography', rationale: 'Personalized targeting' }
          ]
        },
        {
          id: 'dep-specialist-3',
          order: 3,
          name: 'Novel Pharmacology',
          description: 'Emerging drug mechanisms',
          medications: [
            {
              name: 'Brexanolone',
              genericName: 'Brexanolone',
              class: 'GABA-A Receptor Positive Allosteric Modulator',
              dosing: '60-hour IV infusion',
              considerations: 'FDA-approved for postpartum depression; REMS program; inpatient only',
              costCategory: 'very-high'
            },
            {
              name: 'Zuranolone',
              genericName: 'Zuranolone',
              class: 'Oral Neuroactive Steroid',
              dosing: '50mg once daily for 14 days',
              considerations: 'FDA-approved for postpartum depression; oral formulation; Phase 3 for MDD',
              costCategory: 'very-high'
            }
          ],
          patientEducation: 'Research continues to discover new ways to treat depression. If current treatments are not working, consider asking about clinical trials or specialized treatment centers.'
        }
      ]
    }
  },

  steps: [
    {
      id: 'dep-initial',
      order: 1,
      name: 'Initial Treatment',
      description: 'SSRI or SNRI + psychotherapy',
      medications: [
        { name: 'SSRI', class: 'Antidepressant', considerations: 'First-line' },
        { name: 'SNRI', class: 'Antidepressant', considerations: 'Alternative first-line' }
      ],
      nonPharmacologic: ['CBT', 'IPT', 'Behavioral activation'],
      timeframe: '6-8 weeks at adequate dose'
    },
    {
      id: 'dep-switch',
      order: 2,
      name: 'Switch or Optimize',
      description: 'Different antidepressant class',
      medications: [
        { name: 'Bupropion', class: 'NDRI', considerations: 'If sexual dysfunction or fatigue' },
        { name: 'Mirtazapine', class: 'Atypical', considerations: 'If insomnia or weight loss' }
      ],
      timeframe: '6-8 weeks'
    },
    {
      id: 'dep-augment',
      order: 3,
      name: 'Augmentation',
      description: 'Add second agent',
      medications: [
        { name: 'Aripiprazole', class: 'Atypical antipsychotic', considerations: 'FDA-approved augmentation' },
        { name: 'Lithium', class: 'Mood stabilizer', considerations: 'Strong evidence, requires monitoring' }
      ],
      timeframe: '4-6 weeks'
    },
    {
      id: 'dep-refractory',
      order: 4,
      name: 'Treatment-Resistant Options',
      description: 'Esketamine, MAOIs, ECT, TMS',
      medications: [
        { name: 'Esketamine', class: 'NMDA antagonist', considerations: 'Rapid onset, REMS program' },
        { name: 'MAOI', class: 'Antidepressant', considerations: 'Highly effective, dietary restrictions' }
      ],
      nonPharmacologic: ['ECT', 'TMS'],
      timeframe: 'Specialist referral'
    }
  ],

  stepCriteria: {
    stepUp: {
      triggers: [
        'No response (PHQ-9 reduction <25%) after 6-8 weeks at adequate dose',
        'Partial response (25-50% reduction) - consider augmentation',
        'Worsening symptoms or suicidality',
        'Significant functional impairment persisting'
      ],
      timeline: '6-8 weeks per trial; augmentation at 4 weeks if partial response',
      considerations: [
        'Ensure medication adherence before escalating',
        'Assess for comorbidities (substance use, medical illness)',
        'Add or intensify psychotherapy',
        'Consider pharmacogenomic testing if multiple failures'
      ]
    },
    stepDown: {
      triggers: [
        'Sustained remission (PHQ-9 <5) for 6-12 months (first episode)',
        'Sustained remission for 2+ years (recurrent depression)',
        'Significant side effects impacting quality of life'
      ],
      timeline: 'Taper over 2-4 weeks; slower for long-term use',
      considerations: [
        'First episode: Maintain 6-12 months after remission before taper',
        'Recurrent episodes: Consider indefinite maintenance',
        'Taper slowly to reduce discontinuation symptoms',
        'Monitor for relapse during and after taper'
      ]
    }
  },

  specialPopulations: [
    {
      population: 'Pregnancy',
      modifications: [
        'Sertraline and escitalopram preferred (most safety data)',
        'Avoid paroxetine (cardiac defects)',
        'Untreated depression also poses risks to mother and baby',
        'Consider psychotherapy as first-line for mild-moderate'
      ],
      contraindications: ['Paroxetine (first trimester)']
    },
    {
      population: 'Elderly',
      modifications: [
        'Start at lower doses (half usual starting dose)',
        'SSRIs preferred; avoid TCAs (anticholinergic)',
        'Monitor for hyponatremia (SIADH)',
        'Screen for medical comorbidities contributing to depression'
      ]
    },
    {
      population: 'Adolescents',
      modifications: [
        'Fluoxetine FDA-approved for adolescent depression',
        'Escitalopram approved for ages 12+',
        'Black box warning: Monitor for suicidality (especially first 4 weeks)',
        'Combine with psychotherapy when possible'
      ],
      monitoring: ['Weekly contact for first 4 weeks']
    },
    {
      population: 'Bipolar Depression',
      modifications: [
        'Antidepressant monotherapy not recommended (mania switch risk)',
        'Quetiapine, lurasidone, or lamotrigine are options',
        'If antidepressant used, combine with mood stabilizer',
        'Short-term use preferred'
      ],
      contraindications: ['Antidepressant monotherapy']
    }
  ],

  emergencyIndications: [
    'Active suicidal ideation with plan or intent',
    'Suicide attempt',
    'Psychotic features (delusions, hallucinations)',
    'Severe functional impairment (not eating, drinking, caring for self)',
    'Catatonia'
  ],

  referralCriteria: [
    'Treatment-resistant depression (failed 2+ adequate trials)',
    'Suicidal ideation requiring higher level of care',
    'Psychotic features',
    'Bipolar disorder suspected',
    'Consideration for ECT, TMS, or esketamine',
    'Complex comorbidity (personality disorders, substance use)'
  ],

  citations: [
    {
      id: 'star-d',
      type: 'article',
      title: 'Evaluation of Outcomes With Citalopram for Depression Using Measurement-Based Care in STAR*D',
      authors: ['Trivedi MH', 'Rush AJ', 'et al.'],
      source: 'American Journal of Psychiatry',
      url: 'https://doi.org/10.1176/ajp.2006.163.1.28'
    },
    {
      id: 'apa-guidelines-2010',
      type: 'article',
      title: 'Practice Guideline for the Treatment of Patients with Major Depressive Disorder, Third Edition',
      authors: ['American Psychiatric Association'],
      source: 'APA',
      url: 'https://psychiatryonline.org/guidelines'
    },
    {
      id: 'canmat-2023',
      type: 'article',
      title: 'CANMAT Depression Treatment Guidelines',
      authors: ['Canadian Network for Mood and Anxiety Treatments'],
      source: 'Canadian Journal of Psychiatry',
      url: 'https://canmat.org'
    }
  ],

  tags: {
    systems: ['nervous'],
    topics: ['treatment', 'pharmacology', 'guidelines', 'psychiatry'],
    clinicalRelevance: 'critical',
    keywords: ['depression', 'anxiety', 'MDD', 'GAD', 'SSRI', 'SNRI', 'CBT', 'ECT', 'TMS']
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published'
};

export default depressionAnxietyAlgorithm;
