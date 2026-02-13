/**
 * Syncope Diagnostic Algorithm
 *
 * A comprehensive approach to evaluating syncope (fainting), distinguishing
 * benign vasovagal syncope from serious cardiac causes requiring urgent evaluation.
 */

import { DiagnosticAlgorithm } from '../types';

export const SYNCOPE_ALGORITHM: DiagnosticAlgorithm = {
  id: 'algorithm-syncope',
  name: 'Syncope Diagnostic Algorithm',
  alternateNames: ['Fainting Evaluation', 'Loss of Consciousness Workup', 'Transient Loss of Consciousness'],
  presentation: 'Syncope',
  icdCodes: ['R55', 'R40.4', 'T67.1'],

  levels: {
    1: {
      level: 1,
      summary: 'Fainting means briefly losing consciousness. Most fainting is harmless, but sometimes it can be a sign of a heart problem.',
      explanation: `When you faint, you briefly pass out because not enough blood gets to your brain. You wake up quickly, usually within a minute.

**Why People Faint:**
1. **Common causes (usually harmless):**
   - Standing up too fast
   - Being too hot or dehydrated
   - Strong emotions (fear, pain, seeing blood)
   - Standing for a long time

2. **Serious causes (need medical attention):**
   - Heart rhythm problems
   - Heart valve problems
   - Heart attack

**What Doctors Look For:**
1. **What happened before?** Warning signs? What were you doing?
2. **How did you fall?** Did you hurt yourself?
3. **What happened during?** Did anyone see it? Jerking movements?
4. **How did you feel after?** Confused? Normal right away?
5. **Do you have heart problems?** Family history of heart disease?

**When to Get Help Right Away:**
- Fainting during exercise
- Fainting while lying down
- Heart racing or fluttering before fainting
- Family members who died suddenly when young
- Chest pain or shortness of breath with fainting
- Fainting without any warning
- Fainting more than once`,
      keyTerms: [
        { term: 'syncope', definition: 'The medical word for fainting or passing out briefly', pronunciation: 'SIN-koh-pee' },
        { term: 'vasovagal', definition: 'A common type of fainting caused by a sudden drop in heart rate and blood pressure', pronunciation: 'vay-zoh-VAY-gal' },
        { term: 'arrhythmia', definition: 'An abnormal heart rhythm that can be too fast, too slow, or irregular', pronunciation: 'uh-RITH-mee-uh' },
      ],
      analogies: [
        'Fainting is like a computer restarting when it overheats - your brain briefly shuts down to protect itself when it does not get enough blood.',
        'Vasovagal syncope happens when your body overreacts to something - like a fire alarm going off for a small amount of smoke.',
      ],
      examples: [
        'A teenager who fainted while watching a surgery video likely had vasovagal syncope from an emotional trigger.',
        'An older person who fainted during exercise needs to be checked for heart problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Syncope evaluation focuses on distinguishing low-risk reflex syncope from high-risk cardiac syncope using history, physical examination, and ECG.',
      explanation: `Syncope is defined as a transient loss of consciousness due to temporary inadequate blood flow to the brain, with rapid spontaneous recovery.

**Classification:**

**1. Reflex (Neurally Mediated) Syncope - Most Common:**
- Vasovagal: Triggered by fear, pain, prolonged standing, heat
- Situational: Coughing, urination, defecation, swallowing
- Carotid sinus hypersensitivity: Triggered by neck pressure (shaving, tight collar)

**2. Orthostatic Hypotension:**
- Blood pressure drops when standing
- Causes: Dehydration, medications, autonomic dysfunction

**3. Cardiac Syncope - Most Dangerous:**
- Arrhythmias: Too fast (VT, SVT) or too slow (bradycardia, heart block)
- Structural: Aortic stenosis, hypertrophic cardiomyopathy, pulmonary embolism

**History - Key Elements:**

*Before the episode:*
- Position (standing, sitting, lying)
- Activity (exercise, urination, emotional stress)
- Prodrome: Nausea, warmth, lightheadedness, tunnel vision (suggests vasovagal)
- Palpitations (suggests arrhythmia)
- Chest pain (MI, PE, aortic dissection)

*During the episode:*
- Duration of unconsciousness (usually <1 minute in syncope)
- Witnessed movements (brief jerking can occur in syncope - "convulsive syncope")
- Skin color (pale suggests vasovagal; blue suggests cardiac)

*After the episode:*
- Immediate orientation (syncope) vs. prolonged confusion (seizure)
- Injury from fall
- Incontinence (can occur in both syncope and seizure)

**Physical Examination:**
- Vital signs: Orthostatic blood pressure (drop >20 systolic or >10 diastolic)
- Cardiac exam: Murmurs (aortic stenosis, HOCM), irregular rhythm
- Carotid massage: Only if safe (no carotid bruits, monitoring available)
- Neurologic exam: Usually normal in true syncope

**ECG - Essential for All Patients:**
Look for: Prolonged QT, Brugada pattern, delta waves (WPW), heart block, ischemia, signs of HOCM`,
      keyTerms: [
        { term: 'orthostatic hypotension', definition: 'A drop in blood pressure when standing up, causing dizziness or fainting', pronunciation: 'or-thoh-STAT-ik hy-poh-TEN-shun' },
        { term: 'prodrome', definition: 'Warning symptoms that occur before fainting, like nausea or tunnel vision', pronunciation: 'PROH-drohm' },
        { term: 'hypertrophic cardiomyopathy', definition: 'A heart condition where the heart muscle is abnormally thick, which can cause dangerous arrhythmias', pronunciation: 'hy-per-TROH-fik kar-dee-oh-my-OP-uh-thee' },
      ],
      analogies: [
        'Orthostatic hypotension is like water in a garden hose - when you stand up, gravity pulls blood to your legs like water settling to the bottom of a hose.',
      ],
    },
    3: {
      level: 3,
      summary: 'Syncope evaluation requires systematic risk stratification using validated clinical decision rules, distinguishing low-risk patients who can be safely discharged from high-risk patients requiring admission and further cardiac evaluation.',
      explanation: `## Systematic Approach to Syncope

### Initial Assessment
- Verify true syncope (vs. seizure, hypoglycemia, intoxication, psychiatric)
- Assess for injuries from fall
- Vital signs including orthostatics
- 12-lead ECG

### Distinguishing Syncope from Seizure

| Feature | Syncope | Seizure |
|---------|---------|---------|
| Triggers | Typical (standing, stress) | Unusual or none |
| Prodrome | Lightheadedness, warmth, nausea | Aura (smell, taste, fear) |
| Duration LOC | <1 minute | Usually 1-2 minutes |
| Movements | Brief, arrhythmic jerks | Sustained, rhythmic |
| Tongue biting | Rare, tip | Common, lateral |
| Incontinence | Possible | Common |
| Post-ictal | Alert immediately | Confused 15-30+ minutes |

### History - Detailed Elements

**High-Risk Features (cardiac syncope):**
- During exertion or supine position
- Sudden onset without prodrome
- Palpitations preceding syncope
- Family history of SCD <50 years
- Known structural heart disease or heart failure
- Prior MI, cardiomyopathy, or CHF
- Abnormal ECG

**Low-Risk Features (reflex syncope):**
- Typical triggers (pain, fear, prolonged standing)
- Clear prodrome (nausea, warmth, diaphoresis)
- Postural component (prolonged standing)
- No known cardiac disease
- Normal ECG

### ECG Interpretation Focus

**High-risk ECG findings:**
- Sustained or non-sustained VT
- Mobitz II or third-degree AV block
- Sinus pause >3 seconds
- Brugada pattern (coved ST elevation V1-V3)
- Long QT (QTc >500ms)
- Short QT (QTc <340ms)
- Pre-excitation (delta wave, short PR)
- ARVD pattern (epsilon waves, T inversion V1-V3)
- Left ventricular hypertrophy pattern (HOCM consideration)
- Q waves suggesting prior MI
- Bifascicular block (RBBB + LAFB or LPFB)

### Risk Stratification Tools

**San Francisco Syncope Rule:**
(If any present, admit for evaluation)
- Congestive heart failure history
- Hematocrit <30%
- Abnormal ECG (new or non-sinus rhythm)
- Shortness of breath
- Systolic BP <90 at triage

**Canadian Syncope Risk Score (more validated):**
Predicts 30-day serious adverse events

*Positive points:*
- Predisposition to vasovagal: -1
- Heart disease history: +1
- Any ED SBP <90 or >180: +1
- Elevated troponin: +2
- Abnormal QRS axis: +1
- QRS duration >130ms: +1
- QTc >480ms: +2
- ED diagnosis: Cardiac syncope +2, Vasovagal -2

**OESIL Score:**
- Abnormal ECG: +1
- History of CVD: +1
- Absence of prodrome: +1
- Age >65: +1

### Diagnostic Testing

**Initial (all patients):**
- ECG
- Orthostatic vital signs
- CBC (anemia)
- BMP (electrolytes)

**Based on clinical suspicion:**
- Troponin: If cardiac cause suspected
- BNP: Heart failure concern
- D-dimer: PE consideration
- Drug levels: If relevant
- Echocardiogram: Known or suspected structural heart disease
- Continuous cardiac monitoring: High-risk features
- Tilt table test: Recurrent suspected vasovagal

### Disposition Decision

**Discharge candidates:**
- Single episode with clear vasovagal trigger
- No high-risk features
- Normal ECG
- Normal vital signs
- Low risk score

**Admit for monitoring:**
- Any high-risk features
- Abnormal ECG
- Known cardiac disease
- Recurrent unexplained syncope
- Syncope with injury
- Elderly without clear cause`,
      keyTerms: [
        { term: 'Canadian Syncope Risk Score', definition: 'Validated clinical decision tool predicting 30-day serious adverse events after syncope' },
        { term: 'Brugada pattern', definition: 'Distinctive ECG finding (coved ST elevation in V1-V3) associated with risk of sudden cardiac death' },
        { term: 'convulsive syncope', definition: 'Brief myoclonic jerks during syncope due to cerebral hypoperfusion, not indicative of seizure' },
        { term: 'presyncope', definition: 'Sensation of nearly fainting without actual loss of consciousness' },
      ],
      clinicalNotes: 'A normal ECG in a young patient with typical vasovagal features and no cardiac history is very reassuring. These patients can generally be discharged with outpatient follow-up.',
    },
    4: {
      level: 4,
      summary: 'Syncope evaluation integrates risk stratification algorithms, understanding of arrhythmogenic substrates, and evidence-based diagnostic pathways to guide appropriate use of prolonged monitoring and electrophysiologic testing.',
      explanation: `## Advanced Diagnostic Framework

### Pathophysiology of Syncope

**Final Common Pathway:**
All syncope results from transient global cerebral hypoperfusion. Requires ~50% reduction in cerebral blood flow or 6-8 second complete cessation.

**Reflex Syncope Mechanisms:**
- Cardioinhibitory: Excessive parasympathetic tone → bradycardia
- Vasodepressor: Withdrawal of sympathetic tone → vasodilation
- Mixed: Combination of both (most common in vasovagal)

**Cardiac Syncope Mechanisms:**
- Arrhythmic: Reduced cardiac output from abnormal rate/rhythm
  - Bradyarrhythmias: Sinus node dysfunction, AV block
  - Tachyarrhythmias: VT, SVT with rapid ventricular response
- Structural: Fixed obstruction (AS, HOCM, PE) or pump failure

### Advanced ECG Interpretation

**Channelopathies:**

*Long QT Syndrome:*
- QTc >500ms high risk
- QTc 460-500ms: May be significant
- Consider acquired causes (drugs, electrolytes)
- Types: LQT1 (exercise trigger), LQT2 (startle), LQT3 (rest/sleep)
- Risk of torsades de pointes

*Brugada Syndrome:*
- Coved ST elevation >2mm in V1-V3 with T wave inversion
- Type 1 pattern diagnostic
- Risk of VF, especially during fever, rest
- Consider drug challenge (ajmaline) if suspicious but not diagnostic

*Short QT Syndrome:*
- QTc <340ms
- Tall, peaked T waves
- Risk of AF and VF

**Structural Heart Disease Markers:**

*ARVC (Arrhythmogenic Right Ventricular Cardiomyopathy):*
- Epsilon waves in V1-V3 (late potentials)
- T wave inversion V1-V3
- Prolonged S wave upstroke (≥55ms)
- Definitive diagnosis requires MRI

*HOCM:*
- Left ventricular hypertrophy pattern
- Deep narrow Q waves (septal)
- May have pre-excitation (associated)

### Advanced Diagnostic Testing

**Echocardiography:**
- Indicated if: Structural disease suspected, abnormal ECG, exertional syncope
- Findings: LVEF, valvular disease (AS), HOCM, RV dilation (ARVC), effusion

**Prolonged Monitoring:**

*Holter (24-48 hours):*
- Frequent symptoms (daily)
- Low yield (<20%) for syncope

*Event Recorder (2-4 weeks):*
- Requires patient activation
- Better for presyncope with prodrome

*Implantable Loop Recorder (ILR):*
- Up to 3 years monitoring
- Indicated for recurrent unexplained syncope
- Auto-triggered by bradycardia/tachycardia

**Electrophysiology Study:**
- Not routine screening
- Consider if: Structural heart disease, concerning but non-diagnostic ECG, high suspicion for arrhythmia
- Can induce VT in patients with substrate

**Tilt Table Testing:**
- Suspected reflex syncope but unclear
- Orthostatic intolerance evaluation
- Typical protocol: 20-45 min passive tilt at 60-70°
- Isoproterenol or nitroglycerin provocation
- Positive: Reproduces symptoms with hypotension/bradycardia

### Special Populations

**Athletes:**
- Consider HOCM, ARVC, channelopathies
- Exertional syncope always concerning
- Screening ECG may show physiologic changes
- Echocardiogram and often MRI indicated

**Elderly:**
- Multifactorial causes common
- Polypharmacy contributing
- Orthostatic hypotension prevalent
- Carotid sinus hypersensitivity (consider massage if no bruits)
- Falls with syncope high morbidity

**Driving:**
- Varies by jurisdiction
- Cardiac syncope typically requires treatment before resuming
- Vasovagal may allow driving after short restriction

### Risk Scores Deep Dive

**EGSYS Score (for cardiac vs. neurally mediated):**
- Palpitations preceding: +4
- Heart disease or abnormal ECG: +3
- Syncope during effort: +3
- Syncope while supine: +2
- Autonomic prodrome: -1
- Predisposing factors: -1
- Score ≥3 suggests cardiac cause

**Boston Syncope Criteria:**
Higher risk if any of 25 criteria present
Categories: Signs/symptoms, history, ECG findings`,
      keyTerms: [
        { term: 'implantable loop recorder', definition: 'Small device implanted under skin that continuously monitors heart rhythm for up to 3 years' },
        { term: 'channelopathy', definition: 'Genetic disorder of cardiac ion channels causing arrhythmia risk (Long QT, Brugada, etc.)' },
        { term: 'ARVC', definition: 'Arrhythmogenic Right Ventricular Cardiomyopathy - fibrofatty replacement of RV causing VT' },
        { term: 'electrophysiology study', definition: 'Invasive procedure using catheters to map and potentially induce cardiac arrhythmias' },
      ],
      clinicalNotes: 'Exertional syncope in a young athlete is cardiac until proven otherwise. This population requires comprehensive evaluation including echo, consideration of MRI, and possible genetics referral even if initial ECG is reassuring.',
    },
    5: {
      level: 5,
      summary: 'Expert syncope management requires integration of current guideline recommendations, genetic and molecular underpinnings of arrhythmias, risk stratification nuances, and appropriate application of device therapy and interventional treatments.',
      explanation: `## Expert-Level Diagnostic Considerations

### Diagnostic Yield and Testing Strategy

**Systematic Evaluation Approach (ESC 2018 Guidelines):**

*Initial evaluation (diagnosis in 23-50%):*
- History, physical, ECG
- May diagnose: Reflex syncope, orthostatic, situational, cardiac (if ECG diagnostic)

*Second-level tests:*
- Echo if cardiac suspected
- CSM if age >40 and no contraindication
- Orthostatic challenge for suspected orthostatic
- Consider ILR early for recurrent unexplained

**When to Proceed Directly to ILR:**
- Recurrent syncope (≥2 episodes)
- No high-risk features requiring immediate intervention
- Clinical features suggest arrhythmic cause but not proven
- Yield >30% at 2 years

### Genetic Considerations

**Inherited Arrhythmia Syndromes:**

*LQTS Genetics:*
- LQT1 (KCNQ1): Exercise trigger, swimming deaths
- LQT2 (KCNH2): Startle trigger, postpartum risk
- LQT3 (SCN5A): Rest/sleep trigger, overlap with Brugada
- Genetic testing indicated if phenotype positive

*Brugada:*
- SCN5A mutation in ~25%
- Genetic testing helps family screening
- Fever, drugs can unmask pattern

*CPVT (Catecholaminergic Polymorphic VT):*
- RyR2 or CASQ2 mutations
- Exercise-induced bidirectional/polymorphic VT
- May present as syncope during exertion
- Resting ECG often normal

**Family Screening Protocol:**
- First-degree relatives of SCD victim
- Cascade screening when index case identified
- Genetic counseling essential
- Consider ILR in high-risk family members

### Treatment Strategies

**Reflex Syncope:**
- Education and reassurance (first-line)
- Physical counterpressure maneuvers (leg crossing, hand grip)
- Adequate hydration and salt
- Tilt training (controversial efficacy)
- Pharmacologic (limited evidence):
  - Fludrocortisone
  - Midodrine
  - SSRIs (for vasovagal only)
- Pacing: Only if documented asystole >3 seconds

**Orthostatic Hypotension:**
- Medication review and adjustment
- Compression stockings
- Abdominal binder
- Increased salt/fluid intake
- Fludrocortisone, midodrine, droxidopa

**Cardiac Syncope:**

*Bradyarrhythmia:*
- Pacemaker for documented symptomatic bradycardia
- Indications: Sinus node dysfunction, high-grade AV block, alternating BBB

*Tachyarrhythmia:*
- Catheter ablation for SVT causing syncope
- VT ablation in structural heart disease
- ICD: Primary prevention for high-risk substrates (LVEF ≤35%, ARVC, channelopathies)
- ICD: Secondary prevention if documented VT/VF

*Structural Heart Disease:*
- TAVR or SAVR for severe AS
- Septal reduction for obstructive HOCM
- PE treatment if pulmonary embolism

### Unexplained Syncope After Complete Evaluation

**Approach:**
- ILR placement (Class I recommendation for recurrent)
- Yield increases with longer monitoring
- "Syncope Unit" multidisciplinary approach

**Prognosis:**
- Cardiac syncope: Increased mortality
- Reflex syncope: Normal life expectancy
- Unexplained: Intermediate prognosis
- Injury prevention strategies regardless of cause

### Driving and Occupation

**Cardiac Syncope:**
- Private driving: Typically restricted until treated
- Commercial driving: Generally prohibited or highly restricted
- Varies significantly by jurisdiction

**ICD Patients:**
- Restrictions vary (typically 6 months post-implant or shock)
- Commercial driving often permanently restricted

### Emerging Concepts

**Wearable Technology:**
- Smartwatches with ECG capability
- May capture rhythm during syncope
- Validation studies ongoing
- Correlation with clinical events needed

**Machine Learning:**
- Risk prediction models
- ECG pattern recognition
- Integration with clinical decision rules

**Genetic Risk Scores:**
- Polygenic scores for arrhythmia risk
- Modifier genes affecting channelopathy penetrance
- Personalized risk stratification

### Clinical Pearls

1. **"Red flag" syncope without clear cause in young athlete:** Comprehensive workup including genetics
2. **Exertional syncope with normal echo:** Consider ARVC (MRI), channelopathy (drug challenge), CPVT (exercise test)
3. **Syncope + family history SCD:** Investigate inherited arrhythmia syndrome
4. **Elderly with falls and syncope:** Multifactorial - address all contributors
5. **Recurrent syncope with negative workup:** ILR > repeated non-invasive testing

### Guideline Updates (ESC 2018, ACC/AHA/HRS 2017)

**Key Recommendations:**
- Initial evaluation can be diagnostic in ~50% of cases
- Risk stratification should guide admission decisions
- ILR indicated for recurrent unexplained syncope
- EP study has limited role as screening test
- Treat underlying cause when identified`,
      keyTerms: [
        { term: 'CPVT', definition: 'Catecholaminergic Polymorphic Ventricular Tachycardia - inherited arrhythmia triggered by exercise/stress' },
        { term: 'cascade screening', definition: 'Systematic genetic/clinical screening of family members after index case identified' },
        { term: 'syncope unit', definition: 'Multidisciplinary approach to syncope evaluation, shown to improve diagnostic yield and reduce admissions' },
        { term: 'physical counterpressure maneuvers', definition: 'Techniques like leg crossing and hand gripping that can abort impending vasovagal syncope' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Normal ECG in a patient without heart disease after typical vasovagal episode requires no further workup
2. Family history of sudden death <50 should trigger comprehensive evaluation including genetics
3. Brief convulsive movements do not exclude syncope - look at post-event recovery
4. ILR is underutilized for recurrent unexplained syncope
5. Driving restrictions should be discussed and documented with all cardiac syncope patients`,
    },
  },

  steps: [
    {
      id: 'initial-assessment',
      type: 'action',
      content: {
        1: 'First, make sure the person is okay now. Check if they are awake, breathing normally, and not injured.',
        2: 'Initial assessment: Confirm the patient is recovered, check vital signs including orthostatic BP, and assess for injuries from the fall.',
        3: 'Assess current stability, vital signs with orthostatics, injuries sustained. Verify this was true syncope (vs. seizure, hypoglycemia, other LOC causes). Obtain ECG.',
        4: 'Systematic initial assessment: ABC stability, vital signs including orthostatics, focused exam for injuries. ECG is mandatory. Blood glucose. Distinguish syncope from mimics.',
        5: 'Expert initial assessment: Detailed characterization of event with witness history. ECG interpretation for arrhythmogenic substrates. Identify features guiding disposition and further evaluation.',
      },
      nextSteps: [
        { condition: 'Currently unstable', targetStepId: 'resuscitation' },
        { condition: 'Stable for evaluation', targetStepId: 'history-assessment' },
      ],
    },
    {
      id: 'resuscitation',
      type: 'warning',
      content: {
        1: 'EMERGENCY: The person is not stable right now. They need immediate help!',
        2: 'CRITICAL: Patient unstable - may have ongoing arrhythmia or other serious condition. Continuous monitoring, IV access, prepare for intervention.',
        3: 'Unstable syncope: Continuous cardiac monitoring, IV access, assess for ongoing arrhythmia or hemodynamic compromise. Consider transcutaneous pacing availability.',
        4: 'Critical presentation: External defibrillator at bedside. Identify and treat cause: Persistent arrhythmia (cardioversion/pacing), massive PE (thrombolysis consideration), cardiac tamponade.',
        5: 'Expert management of unstable syncope: Identify reversible causes. Temporary pacing for high-grade AV block. Consider PE and tamponade in appropriate context. EP consultation for refractory arrhythmias.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'Stabilized', targetStepId: 'history-assessment' },
        { condition: 'Arrhythmia identified', targetStepId: 'arrhythmia-management' },
      ],
    },
    {
      id: 'history-assessment',
      type: 'question',
      content: {
        1: 'Tell me exactly what happened. What were you doing before you fainted? Did you feel anything before it happened?',
        2: 'Detailed history: What were you doing? Any warning signs (prodrome)? What did witnesses see? How did you feel after waking up? Heart problems in you or your family?',
        3: 'Comprehensive history using three-phase approach: Before (position, activity, triggers, prodrome, palpitations), During (duration, movements, color per witnesses), After (immediate orientation vs. confusion, injuries). Cardiac history and family history of SCD.',
        4: 'Detailed characterization: Presence/absence of prodrome, triggers, activity/position. Witness account essential. Prior episodes and their evaluation. Medications including QT-prolonging drugs. Family history of SCD <50, channelopathies, cardiomyopathy.',
        5: 'Expert history: Distinguish high-risk features (no prodrome, exertional, supine, preceded by palpitations, family history SCD) from low-risk features (classic vasovagal prodrome, typical trigger, standing position). Calculate risk scores.',
      },
      nextSteps: [
        { condition: 'Typical vasovagal features, no red flags', targetStepId: 'vasovagal-evaluation' },
        { condition: 'Cardiac red flags present', targetStepId: 'cardiac-evaluation' },
        { condition: 'Orthostatic features', targetStepId: 'orthostatic-evaluation' },
        { condition: 'Unclear etiology', targetStepId: 'further-evaluation' },
      ],
    },
    {
      id: 'vasovagal-evaluation',
      type: 'decision',
      content: {
        1: 'This sounds like common fainting from a sudden drop in blood pressure. Usually not dangerous.',
        2: 'Features suggest vasovagal syncope - the most common cause. If ECG is normal and there are no red flags, this is generally benign.',
        3: 'Likely vasovagal syncope: Typical trigger, prodrome, normal ECG, no cardiac history. Consider Canadian Syncope Risk Score. If low risk, can discharge with education.',
        4: 'Vasovagal diagnosis: Supported by -2 points on Canadian score. Normal ECG required. No structural heart disease. Single episode with clear trigger rarely needs further workup. Recurrent episodes may benefit from tilt table testing.',
        5: 'Expert evaluation of vasovagal: Consider severity and frequency. Recurrent episodes causing injury warrant prevention strategies. Tilt table testing helps confirm diagnosis and guide treatment. Physical counterpressure maneuvers education.',
      },
      nextSteps: [
        { condition: 'Low risk, single episode', targetStepId: 'discharge-education' },
        { condition: 'Recurrent episodes', targetStepId: 'recurrent-syncope' },
      ],
    },
    {
      id: 'cardiac-evaluation',
      type: 'decision',
      content: {
        1: 'Your fainting might be related to your heart. We need more tests to check your heart.',
        2: 'Features suggest possible cardiac cause. ECG abnormalities or high-risk history require admission for monitoring and echocardiogram.',
        3: 'Cardiac syncope suspected: Admit for telemetry monitoring. Echocardiogram to assess structure. Troponin if concern for ischemia. Consider EP consultation.',
        4: 'High-risk cardiac features present: Continuous monitoring mandatory. Echo for structural assessment. If ECG shows channelopathy pattern or pre-excitation, EP consultation urgent. Consider ILR vs. EP study based on findings.',
        5: 'Expert cardiac evaluation: Recognize subtle ECG abnormalities (Brugada, ARVC patterns). MRI if ARVC suspected. Consider genetics if inherited arrhythmia syndrome. EP study for risk stratification in structural heart disease.',
      },
      nextSteps: [
        { condition: 'Arrhythmia documented', targetStepId: 'arrhythmia-management' },
        { condition: 'Structural disease found', targetStepId: 'structural-management' },
        { condition: 'Monitoring negative', targetStepId: 'further-evaluation' },
      ],
    },
    {
      id: 'orthostatic-evaluation',
      type: 'decision',
      content: {
        1: 'Your blood pressure drops when you stand up, making you faint. This can often be managed with simple measures.',
        2: 'Orthostatic hypotension confirmed (BP drop >20 systolic or >10 diastolic on standing). Review medications, assess for dehydration, consider autonomic dysfunction.',
        3: 'Orthostatic hypotension evaluation: Review medication list (antihypertensives, alpha-blockers, diuretics). Assess volume status. Consider autonomic testing if neurologic dysfunction suspected.',
        4: 'Characterize orthostatic etiology: Drug-induced vs. hypovolemia vs. autonomic failure. Prolonged standing test for delayed orthostatic hypotension. Consider Parkinsons, diabetes, MSA if autonomic failure pattern.',
        5: 'Expert orthostatic evaluation: Distinguish initial vs. classic vs. delayed orthostatic hypotension. Autonomic reflex testing if neurogenic cause suspected. Supine hypertension complicates management. Droxidopa for neurogenic orthostatic hypotension.',
      },
      nextSteps: [
        { condition: 'Drug-induced or hypovolemia', targetStepId: 'orthostatic-reversible' },
        { condition: 'Autonomic dysfunction', targetStepId: 'autonomic-management' },
      ],
    },
    {
      id: 'further-evaluation',
      type: 'action',
      content: {
        1: 'We are not sure yet why you fainted. More tests may be needed.',
        2: 'Cause unclear after initial evaluation. Consider echocardiogram, prolonged monitoring, or other tests based on clinical suspicion.',
        3: 'Unexplained syncope: Risk stratify using Canadian Syncope Risk Score. Low risk: Outpatient evaluation reasonable. Higher risk: Admit for monitoring. Consider echo, Holter, event recorder, or ILR.',
        4: 'Systematic approach to unexplained syncope: If structural disease suspected, echo first. If arrhythmia suspected, monitoring strategy based on frequency (Holter → event recorder → ILR). Tilt table for suspected reflex if diagnosis would change management.',
        5: 'Expert approach: ILR should be considered early for recurrent unexplained syncope (Class I recommendation). Yield exceeds serial non-invasive testing. EP study reserved for high-risk substrates where result would change management.',
      },
      nextSteps: [
        { condition: 'Diagnosis established', targetStepId: 'specific-management' },
        { condition: 'Remains unexplained', targetStepId: 'unexplained-syncope' },
      ],
    },
    {
      id: 'arrhythmia-management',
      type: 'endpoint',
      content: {
        1: 'Your fainting was caused by an abnormal heart rhythm. Treatment depends on the type of rhythm problem.',
        2: 'Arrhythmia identified as cause of syncope. Treatment may include medications, procedures to fix the rhythm, or a device to monitor or treat abnormal rhythms.',
        3: 'Arrhythmic syncope management: Bradycardia with documented pause >3 sec or high-grade AV block: Pacemaker. Tachyarrhythmia: Consider ablation vs. ICD based on substrate. Refer to electrophysiology.',
        4: 'Specific arrhythmia management: SVT with syncope: Ablation. VT with structural disease: ICD + consider ablation. Channelopathy with syncope: High-risk for SCD, ICD often indicated. Pacing for documented bradyarrhythmia.',
        5: 'Expert arrhythmia management: Risk stratification for SCD drives ICD decisions. Ablation as primary therapy for SVT, adjunctive for VT. Programmed pacing parameters to minimize pacing-induced cardiomyopathy. Genetic testing and family screening for inherited arrhythmias.',
      },
    },
    {
      id: 'discharge-education',
      type: 'endpoint',
      content: {
        1: 'Your fainting episode was likely harmless. Here is how to prevent it from happening again and what to watch for.',
        2: 'Low-risk syncope, likely vasovagal. Can be discharged with education on prevention (hydration, avoiding triggers, recognizing prodrome) and return precautions.',
        3: 'Discharge for low-risk vasovagal: Educate on prodrome recognition and physical counterpressure maneuvers. Adequate hydration, avoid triggers. Return if recurrent, exertional, or new concerning features.',
        4: 'Comprehensive discharge planning: Document risk stratification. Written instructions on prodrome recognition and counterpressures. Clear return precautions. Follow-up with PCP. Address driving if relevant.',
        5: 'Expert discharge: Shared decision-making documented. Written action plan for recurrence. Consider referral to syncope unit if recurrent. Address lifestyle modifications, driving restrictions per local guidelines.',
      },
    },
    {
      id: 'unexplained-syncope',
      type: 'endpoint',
      content: {
        1: 'We could not find the cause of your fainting. You may need a small device implanted to monitor your heart over time.',
        2: 'Syncope remains unexplained after evaluation. For recurrent episodes, an implantable loop recorder (small device under the skin) can monitor your heart for up to 3 years.',
        3: 'Unexplained syncope management: For recurrent episodes, ILR placement recommended (Class I). Single unexplained episode: Outpatient monitoring, close follow-up. Consider syncope unit referral.',
        4: 'ILR indications: ≥2 episodes without explanation, single episode with injury or high-risk occupation, suspected but unproven arrhythmic cause. Yield >30% at 2 years for appropriate patients.',
        5: 'Expert management of unexplained syncope: ILR is underutilized. Modern devices have excellent auto-detection algorithms. Remote monitoring improves detection. Consider multidisciplinary syncope unit approach for complex cases.',
      },
    },
  ],

  startStepId: 'initial-assessment',

  differentials: [
    {
      diagnosis: 'Vasovagal Syncope',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Typical trigger (pain, fear, prolonged standing)', 'Prodrome (nausea, warmth, tunnel vision)', 'Pallor during event', 'Rapid recovery', 'Normal ECG'],
    },
    {
      diagnosis: 'Orthostatic Hypotension',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Syncope on standing', 'Documented BP drop', 'Medications (antihypertensives)', 'Dehydration', 'Autonomic dysfunction'],
    },
    {
      diagnosis: 'Cardiac Arrhythmia',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['No prodrome', 'Palpitations preceding', 'Exertional or supine syncope', 'Abnormal ECG', 'Known heart disease'],
    },
    {
      diagnosis: 'Aortic Stenosis',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Exertional syncope', 'Crescendo-decrescendo murmur', 'Elderly', 'Narrow pulse pressure', 'Dyspnea, angina'],
    },
    {
      diagnosis: 'Hypertrophic Cardiomyopathy',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Exertional syncope', 'Young athlete', 'Family history SCD', 'Systolic murmur increasing with Valsalva', 'LVH on ECG'],
    },
    {
      diagnosis: 'Pulmonary Embolism',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Sudden syncope', 'Dyspnea', 'Chest pain', 'DVT risk factors', 'Tachycardia', 'Hypoxia'],
    },
    {
      diagnosis: 'Seizure',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Sustained rhythmic movements', 'Lateral tongue bite', 'Prolonged post-event confusion', 'Incontinence', 'Aura'],
    },
    {
      diagnosis: 'Carotid Sinus Hypersensitivity',
      prevalence: 'uncommon',
      urgency: 'routine',
      keyFeatures: ['Elderly', 'Triggered by neck pressure/movement', 'Head turning', 'Tight collar', 'Shaving'],
    },
  ],

  redFlags: [
    {
      finding: 'Syncope during exertion',
      implication: 'Cardiac cause likely - HOCM, AS, arrhythmia, CPVT',
      action: 'Do not discharge without comprehensive cardiac evaluation',
    },
    {
      finding: 'Syncope while supine or seated',
      implication: 'Arrhythmia likely cause (not orthostatic or vasovagal)',
      action: 'Cardiac monitoring mandatory, consider EP consultation',
    },
    {
      finding: 'Family history of sudden cardiac death <50',
      implication: 'Inherited arrhythmia syndrome or cardiomyopathy',
      action: 'Comprehensive cardiac evaluation, consider genetic testing',
    },
    {
      finding: 'Abnormal ECG',
      implication: 'Structural or electrical heart disease',
      action: 'Admit for monitoring, echocardiogram, cardiology consultation',
    },
    {
      finding: 'Syncope without any prodrome',
      implication: 'More likely cardiac than vasovagal',
      action: 'Higher threshold for discharge, consider cardiac evaluation',
    },
    {
      finding: 'Palpitations before syncope',
      implication: 'Tachyarrhythmia as cause',
      action: 'Cardiac monitoring, consider EP evaluation',
    },
    {
      finding: 'Known structural heart disease',
      implication: 'At risk for arrhythmic syncope and SCD',
      action: 'Admit for evaluation, consider ICD evaluation',
    },
    {
      finding: 'Significant injury from syncope',
      implication: 'Indicates lack of prodrome (concerning) and practical safety issue',
      action: 'Warrants more extensive evaluation even if otherwise low-risk',
    },
  ],

  media: [
    {
      id: 'syncope-algorithm-flowchart',
      type: 'diagram',
      filename: 'syncope-algorithm.svg',
      title: 'Syncope Evaluation Algorithm',
      description: 'Flowchart for systematic syncope evaluation',
    },
    {
      id: 'ecg-channelopathies',
      type: 'diagram',
      filename: 'channelopathy-ecg-patterns.svg',
      title: 'ECG Patterns in Channelopathies',
      description: 'Brugada, Long QT, and other patterns associated with sudden death',
    },
  ],

  citations: [
    {
      id: 'esc-syncope-2018',
      type: 'article',
      title: '2018 ESC Guidelines for the diagnosis and management of syncope',
      authors: ['Brignole M', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://academic.oup.com/eurheartj/article/39/21/1883/4939241',
    },
    {
      id: 'acc-aha-hrs-syncope-2017',
      type: 'article',
      title: '2017 ACC/AHA/HRS Guideline for the Evaluation and Management of Patients With Syncope',
      source: 'Circulation',
    },
    {
      id: 'canadian-syncope-risk-score',
      type: 'article',
      title: 'The Canadian Syncope Risk Score to predict serious adverse events',
      authors: ['Thiruganasambandamoorthy V', 'et al.'],
      source: 'CMAJ',
    },
  ],

  crossReferences: [
    { targetId: 'algorithm-chest-pain', targetType: 'pathway', relationship: 'related', label: 'Chest Pain Algorithm' },
    { targetId: 'red-flags-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Red Flags' },
    { targetId: 'exam-cardiovascular', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Examination' },
  ],

  tags: {
    systems: ['cardiovascular', 'neurologic'],
    topics: ['diagnostic-algorithm', 'emergency-medicine', 'cardiology', 'electrophysiology'],
    keywords: ['syncope', 'fainting', 'loss of consciousness', 'arrhythmia', 'vasovagal', 'sudden death'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const syncopeDiagnosticAlgorithm = SYNCOPE_ALGORITHM;
export default SYNCOPE_ALGORITHM;
