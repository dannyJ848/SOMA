/**
 * Stroke Assessment - Clinical Educational Content
 *
 * Stroke recognition, NIHSS scoring, and acute stroke evaluation
 * for emergency and clinical settings.
 */

import { EducationalContent } from '../../types';

export const strokeAssessment: EducationalContent = {
  id: 'clinical-stroke-assessment',
  type: 'concept',
  name: 'Stroke Assessment',
  alternateNames: ['NIHSS', 'Stroke Recognition', 'CVA Assessment', 'Brain Attack Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'A stroke happens when blood stops flowing to part of the brain. Quick recognition using simple tests like FAST can save lives and prevent disability.',
      explanation: `A stroke is a "brain attack" - it happens when part of the brain stops getting blood. This is a medical emergency because brain cells start dying within minutes without oxygen.

**Two Types of Stroke:**

1. **Ischemic Stroke (Most Common - 87%)**
   - A blood clot blocks an artery to the brain
   - Like a clogged pipe cutting off water supply
   - Treatable if caught early

2. **Hemorrhagic Stroke**
   - A blood vessel in the brain bursts
   - Blood spills into brain tissue
   - Requires different treatment

**FAST: How to Recognize a Stroke**

**F - Face Drooping**
- Ask the person to smile
- Does one side of the face droop or feel numb?
- Is the smile uneven?

**A - Arm Weakness**
- Ask the person to raise both arms
- Does one arm drift downward?
- Is one arm weak or numb?

**S - Speech Difficulty**
- Ask the person to repeat a simple sentence
- Is speech slurred or strange?
- Can they understand you?

**T - Time to Call 911**
- If any of these signs appear, call 911 immediately
- Note the time symptoms started
- Every minute counts!

**Other Warning Signs:**
- Sudden confusion
- Trouble seeing in one or both eyes
- Trouble walking or dizziness
- Severe headache with no known cause
- Numbness on one side of the body

**Why Time Matters:**
- "Time is brain" - the sooner treatment starts, the better
- Clot-busting medicine works best within 3-4.5 hours
- 1.9 million brain cells die every minute during a stroke

**What NOT to Do:**
- Do not drive the person to the hospital yourself
- Do not give them food or water
- Do not give them aspirin (could be dangerous if bleeding)
- Do not wait to see if symptoms improve

If you think someone is having a stroke, call 911 immediately!`,
      keyTerms: [
        { term: 'stroke', definition: 'A brain attack that happens when blood flow to part of the brain is cut off' },
        { term: 'ischemic', definition: 'Caused by a blocked blood vessel' },
        { term: 'hemorrhagic', definition: 'Caused by a burst blood vessel and bleeding' },
        { term: 'FAST', definition: 'A memory tool: Face drooping, Arm weakness, Speech difficulty, Time to call 911' },
        { term: 'blood clot', definition: 'A clump of blood that can block arteries' },
      ],
      analogies: [
        'A stroke is like a traffic jam in the brain - blood cannot get through to deliver oxygen and nutrients.',
        'The brain during a stroke is like a plant without water - cells start wilting and dying quickly.',
        'FAST is like a fire drill - it teaches you what to do in an emergency so you can act quickly.',
      ],
      examples: [
        'A 65-year-old man suddenly cannot lift his right arm and his speech sounds slurred - this is FAST positive.',
        'A woman notices her face looks uneven in the mirror and cannot say her name clearly - she should call 911.',
        'Someone has the worst headache of their life and becomes confused - this could be a bleeding stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Stroke assessment involves rapid recognition using validated scales (FAST, BE-FAST), determination of stroke type, time of onset, and neurological deficit quantification using the NIH Stroke Scale (NIHSS).',
      explanation: `**Stroke Pathophysiology:**

**Ischemic Stroke (87%):**
- Thrombotic: Clot forms at site of atherosclerotic plaque
- Embolic: Clot travels from heart or proximal artery
- Lacunar: Small vessel occlusion in deep brain structures
- Penumbra: Tissue at risk around infarcted core

**Hemorrhagic Stroke (13%):**
- Intracerebral hemorrhage (ICH): Bleeding into brain tissue
- Subarachnoid hemorrhage (SAH): Bleeding around brain surface

**Recognition Scales:**

**FAST:**
| Letter | Sign | Assessment |
|--------|------|------------|
| F | Face | Ask to smile, look for asymmetry |
| A | Arm | Hold arms up, check for drift |
| S | Speech | Repeat phrase, check for slurring |
| T | Time | Call 911, note symptom onset |

**BE-FAST (Enhanced):**
| Letter | Sign | Assessment |
|--------|------|------------|
| B | Balance | Sudden loss of balance |
| E | Eyes | Vision changes, double vision |
| F | Face | Facial droop |
| A | Arm | Arm weakness |
| S | Speech | Speech changes |
| T | Time | Time to call 911 |

**NIH Stroke Scale (NIHSS) Overview:**

The NIHSS quantifies stroke severity (0-42 points):

| Score | Severity |
|-------|----------|
| 0 | No stroke symptoms |
| 1-4 | Minor stroke |
| 5-15 | Moderate stroke |
| 16-20 | Moderate to severe |
| 21-42 | Severe stroke |

**NIHSS Components:**
1. Level of consciousness (0-3)
2. LOC questions (0-2)
3. LOC commands (0-2)
4. Best gaze (0-2)
5. Visual fields (0-3)
6. Facial palsy (0-3)
7. Motor arm - left (0-4)
8. Motor arm - right (0-4)
9. Motor leg - left (0-4)
10. Motor leg - right (0-4)
11. Limb ataxia (0-2)
12. Sensory (0-2)
13. Best language (0-3)
14. Dysarthria (0-2)
15. Extinction/inattention (0-2)

**Time Windows:**

| Treatment | Time Window |
|-----------|-------------|
| IV tPA | Within 4.5 hours |
| Mechanical thrombectomy | Up to 24 hours (selected patients) |
| "Golden hour" | First 60 minutes |

**Key History Elements:**
- Last known well time (not symptom onset)
- Anticoagulant use
- Recent surgery or trauma
- History of bleeding
- Blood pressure
- Blood glucose

**Initial Assessment:**
1. ABCs (airway, breathing, circulation)
2. Stroke recognition (FAST/BE-FAST)
3. Blood glucose check
4. Brief neurological exam
5. Activate stroke team`,
      keyTerms: [
        { term: 'NIHSS', definition: 'National Institutes of Health Stroke Scale; standardized stroke severity measure' },
        { term: 'penumbra', definition: 'Brain tissue at risk around the infarcted core that can be saved' },
        { term: 'tPA', definition: 'Tissue plasminogen activator; clot-dissolving medication' },
        { term: 'last known well', definition: 'The most recent time the patient was definitely without symptoms' },
        { term: 'thrombectomy', definition: 'Surgical removal of a blood clot from a blood vessel' },
      ],
      analogies: [
        'The penumbra is like a house fire - the center is destroyed but firefighters can save the surrounding rooms.',
        'NIHSS is like a damage report - it tells you exactly which brain functions are affected and how badly.',
        'The time window for treatment is like a countdown timer - once it runs out, options become limited.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive stroke assessment integrates clinical scales, imaging findings, vascular territory localization, and eligibility criteria for reperfusion therapies within critical time windows.',
      explanation: `**Vascular Territory Syndromes:**

**Anterior Circulation:**

**Middle Cerebral Artery (MCA):**
- Dominant hemisphere: Aphasia (Broca/Wernicke/global)
- Non-dominant: Hemineglect, anosognosia
- Contralateral face/arm weakness > leg
- Contralateral sensory loss
- Gaze deviation toward lesion
- Homonymous hemianopia

**Anterior Cerebral Artery (ACA):**
- Contralateral leg weakness > arm
- Abulia, apathy
- Urinary incontinence
- Grasp reflex
- Alien hand syndrome (if corpus callosum involved)

**Posterior Circulation:**

**Posterior Cerebral Artery (PCA):**
- Homonymous hemianopia with macular sparing
- Visual agnosia
- Memory impairment
- Alexia without agraphia (dominant)

**Basilar Artery:**
- Quadriplegia
- Bilateral cranial nerve palsies
- Locked-in syndrome
- Coma
- Pupillary abnormalities

**Brainstem Syndromes:**
| Syndrome | Location | Features |
|----------|----------|----------|
| Weber | Midbrain | CN III + contralateral hemiparesis |
| Benedikt | Midbrain | CN III + contralateral tremor |
| Wallenberg | Lateral medulla | Ipsilateral Horner, ataxia, facial sensory; contralateral body sensory |
| Millard-Gubler | Pons | CN VI, VII + contralateral hemiparesis |

**NIHSS Detailed Scoring:**

**1a. Level of Consciousness:**
- 0: Alert
- 1: Not alert, arousable by minor stimulation
- 2: Not alert, requires repeated stimulation
- 3: Unresponsive or reflexive responses only

**1b. LOC Questions (month, age):**
- 0: Both correct
- 1: One correct
- 2: Neither correct

**1c. LOC Commands (close eyes, make fist):**
- 0: Both correct
- 1: One correct
- 2: Neither correct

**2. Best Gaze:**
- 0: Normal
- 1: Partial gaze palsy (abnormal in one or both eyes, not forced deviation)
- 2: Forced deviation or total gaze paresis

**Motor Scoring (Arms/Legs):**
- 0: No drift
- 1: Drift but does not hit bed
- 2: Some effort against gravity
- 3: No effort against gravity
- 4: No movement

**Imaging in Stroke:**

**Non-contrast CT (NCCT):**
- Rule out hemorrhage (first priority)
- Early ischemic changes: Hyperdense MCA sign, sulcal effacement
- ASPECTS score (0-10): Quantifies early ischemic changes

**CT Angiography (CTA):**
- Large vessel occlusion (LVO) detection
- Carotid stenosis assessment
- Circle of Willis anatomy

**CT Perfusion (CTP):**
- Core infarct vs penumbra
- Target mismatch for thrombectomy
- Automated software (RAPID)

**Reperfusion Eligibility:**

**IV Alteplase (tPA):**
| Inclusion | Exclusion |
|-----------|-----------|
| Ischemic stroke | ICH on CT |
| Within 4.5 hours | Recent major surgery |
| Measurable deficit | Bleeding disorder |
| Age >= 18 | INR > 1.7 on warfarin |
| | Platelets < 100,000 |
| | BP > 185/110 despite treatment |

**Mechanical Thrombectomy:**
- Large vessel occlusion (ICA, M1, M2)
- NIHSS >= 6 typically
- ASPECTS >= 6
- Within 24 hours if favorable imaging`,
      keyTerms: [
        { term: 'ASPECTS', definition: 'Alberta Stroke Program Early CT Score; quantifies early ischemic changes (0-10)' },
        { term: 'large vessel occlusion', definition: 'Blockage of major intracranial artery amenable to thrombectomy' },
        { term: 'mismatch', definition: 'Difference between core infarct and penumbra on perfusion imaging' },
        { term: 'Wallenberg syndrome', definition: 'Lateral medullary syndrome from PICA/vertebral occlusion' },
        { term: 'locked-in syndrome', definition: 'Quadriplegia and anarthria with preserved consciousness' },
      ],
      clinicalNotes: 'The hyperdense MCA sign on CT suggests acute thrombus but is only 30% sensitive. ASPECTS should be assessed systematically - one point subtracted for each affected region. CT perfusion mismatch > 1.8 and core < 70mL identifies patients who may benefit from late thrombectomy.',
    },
    4: {
      level: 4,
      summary: 'Advanced stroke assessment incorporates sophisticated imaging interpretation, trial-based eligibility determination, stroke mimics differentiation, and integration of emerging biomarkers and treatment paradigms.',
      explanation: `**Advanced Imaging Interpretation:**

**ASPECTS Regions:**
\`\`\`
Ganglionic Level (M1-3, Caudate, Lentiform, IC, Insular):
- M1: Anterior MCA cortex
- M2: MCA cortex lateral to insular ribbon
- M3: Posterior MCA cortex
- Caudate nucleus
- Lentiform nucleus (putamen + globus pallidus)
- Internal capsule
- Insular ribbon

Supraganglionic Level (M4-6):
- M4: Anterior cortex
- M5: Lateral cortex
- M6: Posterior cortex
\`\`\`

**CT Perfusion Parameters:**
| Parameter | Meaning | Clinical Use |
|-----------|---------|--------------|
| CBF | Cerebral blood flow | Low = ischemia |
| CBV | Cerebral blood volume | Low = core infarct |
| MTT | Mean transit time | Elevated in ischemia |
| Tmax | Time to maximum | >6s defines penumbra |

**RAPID Software Outputs:**
- Core volume (rCBF < 30% threshold)
- Penumbra volume (Tmax > 6 seconds)
- Mismatch ratio (penumbra/core)
- Target mismatch: Ratio > 1.8, core < 70mL, penumbra >= 15mL

**Trial-Based Eligibility:**

**DAWN Trial (6-24 hours):**
| Group | NIHSS | Infarct Core |
|-------|-------|--------------|
| A: Age >= 80 | >= 10 | < 21 mL |
| B: Age < 80 | >= 10 | < 31 mL |
| C: Age < 80 | >= 20 | 31-51 mL |

**DEFUSE 3 (6-16 hours):**
- Core < 70 mL
- Mismatch ratio >= 1.8
- Mismatch volume >= 15 mL
- NIHSS >= 6

**Extended tPA Window (EXTEND, WAKE-UP):**
- Perfusion mismatch allows treatment 4.5-9 hours
- DWI-FLAIR mismatch for wake-up strokes

**Stroke Mimics:**

**Common Mimics:**
| Condition | Distinguishing Features |
|-----------|------------------------|
| Seizure with Todd's paralysis | Witnessed seizure, resolves |
| Migraine with aura | Gradual onset, positive phenomena |
| Hypoglycemia | Low glucose, rapid improvement |
| Conversion disorder | Inconsistent exam, Hoover sign |
| Peripheral vertigo | Isolated vertigo, no central signs |
| Brain tumor | Gradual onset, seizures |
| Subdural hematoma | Trauma history, fluctuating |

**NIHSS Pitfalls:**
- Does not adequately assess posterior circulation
- Does not capture isolated cerebellar signs
- Neglect can mask motor deficits
- Does not include monocular vision loss

**Stroke Chameleons:**
\`\`\`
Presentations that hide stroke:
- Acute confusional state
- Isolated vertigo/dizziness
- Acute psychiatric symptoms
- Bilateral deficits (basilar)
- Pure sensory symptoms
- Movement disorders
\`\`\`

**Hemorrhagic Transformation:**

**Classification (ECASS):**
| Type | Description |
|------|-------------|
| HI-1 | Petechial hemorrhage at infarct margin |
| HI-2 | Confluent petechial hemorrhage within infarct |
| PH-1 | Hematoma <= 30% of infarct, mild mass effect |
| PH-2 | Hematoma > 30% of infarct, significant mass effect |

**Risk Factors:**
- Large infarct volume
- High NIHSS
- Reperfusion therapy
- Hyperglycemia
- Prior anticoagulation

**Emerging Biomarkers:**

**Blood Biomarkers:**
| Marker | Utility |
|--------|---------|
| GFAP | Hemorrhage detection |
| NfL | Neuronal injury |
| NSE | Outcome prediction |
| MMP-9 | Hemorrhagic transformation risk |

**Tenecteplase vs Alteplase:**
- Single bolus vs infusion
- Possibly higher recanalization
- Non-inferior safety
- Ongoing trial evaluation`,
      keyTerms: [
        { term: 'DAWN trial', definition: 'Trial establishing thrombectomy benefit 6-24 hours with clinical-imaging mismatch' },
        { term: 'DEFUSE 3', definition: 'Trial extending thrombectomy window to 16 hours using perfusion imaging' },
        { term: 'stroke chameleon', definition: 'Stroke presenting with atypical symptoms that may be missed' },
        { term: 'hemorrhagic transformation', definition: 'Bleeding into ischemic infarct, ranging from petechial to parenchymal' },
        { term: 'tenecteplase', definition: 'Newer thrombolytic with single bolus dosing, under investigation' },
      ],
      clinicalNotes: 'The DAWN and DEFUSE 3 trials revolutionized late-window thrombectomy. Key concept: "tissue clock" matters more than "time clock." Automated software (RAPID) enables rapid decision-making. Tenecteplase may become preferred thrombolytic due to single-bolus administration and possibly higher recanalization rates.',
    },
    5: {
      level: 5,
      summary: 'Expert stroke assessment encompasses systems-based optimization, advanced neuroimaging interpretation, individualized treatment algorithms, research frontiers, and quality improvement metrics in comprehensive stroke systems of care.',
      explanation: `**Stroke Systems of Care:**

**Certification Levels:**
| Level | Capabilities |
|-------|--------------|
| Acute Stroke Ready | tPA, transfer protocols |
| Primary Stroke Center | 24/7 CT, tPA, stroke unit |
| Thrombectomy-Capable | Endovascular capability |
| Comprehensive Stroke Center | Full neurocritical care, complex cases |

**Quality Metrics (Get With The Guidelines):**
\`\`\`
Door-to-CT: < 25 minutes
Door-to-needle (tPA): < 60 minutes
Door-to-puncture (EVT): < 90 minutes
Target: 85% eligible patients treated
\`\`\`

**Mobile Stroke Units:**
- CT, point-of-care labs on ambulance
- Telemedicine connectivity
- Earlier tPA administration
- Improved outcomes in trials

**Advanced Imaging Interpretation:**

**Perfusion Imaging Subtleties:**
\`\`\`
Core Definition Challenges:
- CBV vs rCBF for core
- Threshold variability
- White matter vs gray matter
- Delayed arrival artifacts

Collateral Assessment:
- Single-phase CTA
- Multiphase CTA
- Dynamic CTA (4D)
- CTP-derived collateral maps

Good Collaterals:
- Smaller core at presentation
- Better response to reperfusion
- Lower hemorrhagic transformation
\`\`\`

**MRI in Acute Stroke:**
| Sequence | Timing | Finding |
|----------|--------|---------|
| DWI | Minutes | Restricted diffusion (bright) |
| ADC | Minutes | Low signal (dark) |
| FLAIR | > 4-6 hours | Hyperintense |
| SWI/GRE | Minutes | Hemorrhage, thrombus |
| PWI | Minutes | Perfusion deficits |

**DWI-FLAIR Mismatch:**
- DWI positive, FLAIR negative
- Suggests stroke < 4.5 hours
- Basis for WAKE-UP trial

**Individualized Treatment Algorithms:**

**Large Core Stroke (ASPECTS 3-5):**
\`\`\`
RESCUE-Japan LIMIT:
- ASPECTS 3-5, EVT benefit demonstrated
- Selected patients only
- Higher disability but reduced mortality
- Shared decision-making

Considerations:
- Patient values and goals
- Pre-stroke functional status
- Comorbidities
- Family discussion
\`\`\`

**Elderly Patients:**
- No upper age limit for tPA
- EVT benefits extend to elderly
- Consider frailty, pre-stroke function
- Adjust expectations appropriately

**Minor Stroke (NIHSS 0-5):**
\`\`\`
Dual Antiplatelet Therapy (DAPT):
- CHANCE, POINT trials
- Aspirin + clopidogrel 21 days
- Then single agent
- Reduces recurrence by 25%

When to Consider tPA:
- Disabling deficit even if NIHSS low
- Fluctuating symptoms
- LVO with high-risk features
\`\`\`

**Research Frontiers:**

**Neuroprotection:**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| NA-1 (nerinetide) | PSD-95 inhibitor | Phase 3 negative (with alteplase) |
| ApTOLL | TLR4 antagonist | Phase 2 |
| 3K3A-APC | Cytoprotective | Phase 2 |
| Hypothermia | Multiple | Logistically challenging |

**Extended Time Windows:**
\`\`\`
TIMELESS Trial:
- Tenecteplase 4.5-24 hours
- With perfusion mismatch
- Ongoing

TESLA:
- Tenecteplase for LVO pre-EVT
- Bridging vs direct EVT
\`\`\`

**Advanced Thrombectomy:**
| Technique | Application |
|-----------|-------------|
| Combined aspiration + stent retriever | First-line |
| Distal access catheters | M2, M3 occlusions |
| Intracranial stenting | Underlying stenosis |
| Rescue strategies | Refractory occlusion |

**Post-Stroke Care Optimization:**

**Secondary Prevention:**
\`\`\`
ESUS (Embolic Stroke of Undetermined Source):
- Extended cardiac monitoring (ICM)
- PFO closure in selected patients
- Anticoagulation vs antiplatelet (trials ongoing)

High-Risk ASCVD:
- LDL < 70 mg/dL
- Consider < 55 mg/dL
- High-intensity statin
- PCSK9 inhibitors if needed
\`\`\`

**Blood Pressure Management:**
| Phase | Target |
|-------|--------|
| Acute (pre-reperfusion) | < 185/110 |
| Post-tPA (24 hours) | < 180/105 |
| Long-term | Generally < 130/80 |

**Emerging Technologies:**

**AI in Stroke:**
\`\`\`
Applications:
- Automated LVO detection (Viz.ai)
- ASPECTS scoring
- Perfusion analysis
- Hemorrhage detection
- Outcome prediction

Integration:
- Parallel notification systems
- Reduced door-to-treatment times
- Quality assurance
\`\`\`

**Future Directions:**
- Blood biomarkers for triage
- Wearable stroke detection
- Remote ischemic conditioning
- Stem cell therapies
- Precision medicine approaches`,
      keyTerms: [
        { term: 'ESUS', definition: 'Embolic stroke of undetermined source; embolic pattern without identified etiology' },
        { term: 'DWI-FLAIR mismatch', definition: 'Imaging pattern suggesting stroke occurred within 4.5 hours' },
        { term: 'mobile stroke unit', definition: 'Ambulance equipped with CT and telemedicine for prehospital stroke care' },
        { term: 'collateral circulation', definition: 'Alternative blood supply paths that sustain penumbra' },
        { term: 'RESCUE-Japan LIMIT', definition: 'Trial demonstrating thrombectomy benefit in large core strokes' },
      ],
      clinicalNotes: 'Expert stroke care requires systems thinking: prehospital triage, parallel workflows, multidisciplinary teams, and quality metrics. AI-assisted imaging accelerates LVO detection. Large core thrombectomy (RESCUE-Japan, SELECT2) has expanded eligibility but requires careful patient selection and goals-of-care discussions. ESUS management remains challenging; extended monitoring and PFO evaluation are standard. Future neuroprotective strategies may complement reperfusion.',
    },
  },

  media: [
    {
      id: 'nihss-video',
      type: 'video',
      filename: 'nihss-administration.mp4',
      title: 'NIHSS Administration',
      description: 'Step-by-step demonstration of NIH Stroke Scale assessment',
    },
    {
      id: 'stroke-territory-diagram',
      type: 'diagram',
      filename: 'vascular-territories.png',
      title: 'Cerebral Vascular Territories',
      description: 'Brain regions supplied by major cerebral arteries',
    },
  ],

  citations: [
    {
      id: 'powers-guidelines',
      type: 'article',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke',
      authors: ['Powers, W.J.'],
      source: 'Stroke',
    },
    {
      id: 'nihss-original',
      type: 'article',
      title: 'NIH Stroke Scale Training and Certification',
      source: 'NIH/NINDS',
      url: 'https://www.stroke.nih.gov/',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'related', label: 'Neurological Examination' },
    { targetId: 'pathology-neurodegeneration', targetType: 'condition', relationship: 'see-also', label: 'Neurodegeneration' },
    { targetId: 'clinical-headache-evaluation', targetType: 'concept', relationship: 'related', label: 'Headache Evaluation' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular'],
    topics: ['clinical', 'emergency', 'neurology'],
    keywords: ['stroke', 'NIHSS', 'tPA', 'thrombectomy', 'cerebrovascular', 'ischemia'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default strokeAssessment;
