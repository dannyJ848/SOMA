/**
 * Heart Rate - Vital Signs
 *
 * Comprehensive content on heart rate measurement, normal ranges,
 * abnormalities, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const heartRate: EducationalContent = {
  id: 'physical-exam-vital-signs-heart-rate',
  type: 'concept',
  name: 'Heart Rate',
  alternateNames: ['Pulse', 'HR', 'Pulse Rate'],

  levels: {
    1: {
      level: 1,
      summary: 'Your heart rate tells you how many times your heart beats in one minute.',
      explanation: `Your heart is a muscle that pumps blood through your body. Each time it squeezes, that's called a heartbeat or "pulse." You can feel your pulse in certain spots on your body.

**Normal Heart Rate:**
- For most adults: 60-100 beats per minute
- Kids have faster heart rates than adults
- Athletes often have slower resting heart rates (50-60)

**Where to Feel Your Pulse:**
- **Wrist (radial pulse):** Inside of your wrist, below your thumb
- **Neck (carotid pulse):** Side of your neck, under your jaw
- **Inside of elbow**

**What Changes Your Heart Rate:**
- **Faster:** Exercise, feeling scared or excited, drinking caffeine, being sick
- **Slower:** Sleeping, relaxing, being very fit

**When to Worry:**
- Heart racing when you're not exercising
- Heart beating very slowly
- Heart feeling like it's "skipping" beats
- Feeling dizzy or short of breath with a fast heartbeat`,
      keyTerms: [
        { term: 'heart rate', definition: 'How many times your heart beats in one minute' },
        { term: 'pulse', definition: 'The throbbing you feel when blood is pumped through your blood vessels' },
        { term: 'tachycardia', definition: 'When your heart beats too fast (over 100 beats per minute)' },
        { term: 'bradycardia', definition: 'When your heart beats too slowly (under 60 beats per minute)' },
      ],
      analogies: [
        'Your heart is like a pump that squeezes about once every second to push blood around your body.',
        'Feeling your pulse is like listening to your heart\'s drumbeat through your blood vessels.',
      ],
      examples: [
        'When you run, your heart beats faster to deliver more oxygen to your muscles.',
        'When you sleep, your heart slows down because your body needs less energy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart rate reflects cardiac automaticity and is influenced by autonomic tone, with tachycardia and bradycardia having various physiological and pathological causes.',
      explanation: `## Heart Rate Fundamentals

Heart rate (HR) is the number of cardiac contractions per minute, normally 60-100 bpm in adults.

**Normal Ranges by Age:**
| Age | Normal Range (bpm) |
|-----|-------------------|
| Newborn | 100-160 |
| Infant (1-12 mo) | 100-150 |
| Toddler (1-2 yr) | 80-130 |
| Child (3-5 yr) | 80-120 |
| Child (6-12 yr) | 70-110 |
| Adolescent | 60-100 |
| Adult | 60-100 |
| Athlete | 40-60 |

## Pulse Assessment

**Pulse Locations:**
| Site | Artery | Clinical Use |
|------|--------|--------------|
| Radial | Radial artery | Routine assessment |
| Carotid | Carotid artery | CPR, peripheral perfusion concern |
| Brachial | Brachial artery | BP measurement, infants |
| Femoral | Femoral artery | Lower extremity assessment, shock |
| Dorsalis pedis | Dorsalis pedis | Peripheral vascular disease |
| Posterior tibial | Posterior tibial | PVD, pedal pulses |

**Pulse Characteristics:**
- **Rate:** Beats per minute
- **Rhythm:** Regular vs. irregular
- **Amplitude:** Strength (0-4+ scale)
- **Contour:** Shape of the pulse wave

## Tachycardia (HR >100 bpm)

**Physiologic Causes:**
- Exercise
- Anxiety, pain, stress
- Fever
- Dehydration
- Caffeine, stimulants

**Pathologic Causes:**
- Hyperthyroidism
- Anemia
- Hypoxia
- Heart failure
- Pulmonary embolism
- Sepsis
- Arrhythmias (SVT, atrial fibrillation)

## Bradycardia (HR <60 bpm)

**Physiologic:**
- Athletic conditioning
- Sleep
- Vagal tone (vomiting, defecation)

**Pathologic:**
- Hypothyroidism
- Hypothermia
- Increased intracranial pressure (Cushing reflex)
- Heart block
- Sick sinus syndrome
- Medication effects (beta-blockers, calcium channel blockers)`,
      keyTerms: [
        { term: 'tachycardia', definition: 'Heart rate greater than 100 beats per minute', pronunciation: 'tak-ee-KAR-dee-ah' },
        { term: 'bradycardia', definition: 'Heart rate less than 60 beats per minute', pronunciation: 'brad-ee-KAR-dee-ah' },
        { term: 'arrhythmia', definition: 'Abnormal heart rhythm', pronunciation: 'ah-RITH-mee-ah' },
        { term: 'pulse amplitude', definition: 'Strength of the pulse on palpation, rated 0-4+' },
        { term: 'SVT', definition: 'Supraventricular tachycardia; rapid rhythm originating above the ventricles' },
      ],
      analogies: [
        'The heart\'s electrical system is like a natural pacemaker, setting the rhythm for each beat.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart rate is determined by the SA node discharge rate modified by autonomic input, with pathological rhythms arising from abnormal automaticity, triggered activity, or reentry circuits.',
      explanation: `## Cardiac Electrophysiology

**Normal Cardiac Conduction:**
\`\`\`
SA Node (60-100 bpm) → Atria → AV Node (40-60 bpm)
                              ↓
                     Bundle of His (40-60 bpm)
                              ↓
                     Bundle Branches (20-40 bpm)
                              ↓
                     Purkinje Fibers (20-40 bpm) → Ventricles
\`\`\`

**SA Node Automaticity:**
- Pacemaker cells: Spontaneous diastolic depolarization
- Phase 4 depolarization via funny current (If)
- Hyperpolarization-activated cyclic nucleotide-gated (HCN) channels
- Parasympathetic: Acetylcholine → ↑K+ conductance → hyperpolarization → ↓HR
- Sympathetic: Norepinephrine → ↑If → ↑HR

## Autonomic Regulation

**Parasympathetic (Vagal):**
- Right vagus → SA node (predominant effect on rate)
- Left vagus → AV node
- Acetylcholine → M2 receptors → ↑IKACh → hyperpolarization

**Sympathetic:**
- Increases rate (chronotropy)
- Increases conduction (dromotropy)
- Increases contractility (inotropy)
- Beta-1 receptors → ↑cAMP → ↑If, ↑ICa

**Heart Rate Variability (HRV):**
- Beat-to-beat variation in R-R intervals
- Reflects autonomic balance
- High HRV = good vagal tone (healthy)
- Low HRV = reduced vagal tone (↑cardiovascular risk)

## Tachyarrhythmia Mechanisms

| Mechanism | Examples | Characteristics |
|-----------|----------|-----------------|
| Enhanced automaticity | Sinus tachycardia, accelerated junctional | Gradual onset/offset |
| Triggered activity | Digitalis toxicity, long QT | After depolarizations |
| Reentry | AVNRT, AVRT, atrial flutter, VT | Sudden onset/offset |

## Common Arrhythmias

**Supraventricular:**
| Rhythm | Rate | ECG Features |
|--------|------|--------------|
| Sinus tachycardia | 100-180 | Normal P waves, 1:1 AV |
| Atrial fibrillation | 80-180 (irregular) | No P waves, irregularly irregular |
| Atrial flutter | 250-350 (atrial) | Sawtooth flutter waves |
| AVNRT | 140-250 | Narrow complex, pseudo-R' |
| AVRT | 140-250 | Narrow (orthodromic) or wide (antidromic) |

**Ventricular:**
| Rhythm | Rate | ECG Features |
|--------|------|--------------|
| Ventricular tachycardia | 120-250 | Wide QRS, AV dissociation |
| Ventricular fibrillation | N/A | Chaotic, no organized rhythm |

## Bradyarrhythmias

**Sinus Node Dysfunction:**
- Sinus bradycardia
- Sinus arrest
- Sinoatrial exit block
- Tachy-brady syndrome

**AV Block:**
| Degree | ECG Finding | Significance |
|--------|-------------|--------------|
| First-degree | Prolonged PR (>200 ms) | Usually benign |
| Second-degree, Mobitz I | Progressive PR prolongation then drop | Usually benign |
| Second-degree, Mobitz II | Sudden dropped beats, fixed PR | May progress to complete block |
| Third-degree | Complete AV dissociation | Requires pacing |

## Pulse Abnormalities

**Abnormal Pulse Contours:**
| Finding | Description | Associated Conditions |
|---------|-------------|----------------------|
| Pulsus parvus et tardus | Weak, slow-rising | Aortic stenosis |
| Water-hammer pulse | Bounding, rapid fall | Aortic regurgitation |
| Pulsus bisferiens | Double peak | AS + AR, HOCM |
| Pulsus alternans | Alternating strong/weak | Severe LV dysfunction |
| Pulsus paradoxus | >10 mmHg inspiratory drop | Cardiac tamponade, severe asthma |`,
      keyTerms: [
        { term: 'funny current', definition: 'If current in pacemaker cells; HCN channels mediating spontaneous diastolic depolarization' },
        { term: 'reentry', definition: 'Arrhythmia mechanism involving circular electrical conduction around anatomic or functional obstacles' },
        { term: 'heart rate variability', definition: 'Beat-to-beat variation in cardiac cycle length; marker of autonomic function' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated decrease (>10 mmHg) in systolic BP during inspiration; seen in tamponade' },
        { term: 'AV dissociation', definition: 'Independent atrial and ventricular rhythms; diagnostic of complete heart block or VT' },
      ],
      clinicalNotes: 'In narrow complex tachycardia, an irregularly irregular rhythm is atrial fibrillation until proven otherwise. In regular narrow complex tachycardia, vagal maneuvers can help diagnose and treat AVNRT.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding encompasses cellular electrophysiology of automaticity and conduction, detailed arrhythmia mechanisms, and risk stratification for sudden cardiac death.',
      explanation: `## Cellular Electrophysiology

### Pacemaker Cell Action Potential
**Phase 4 (Diastolic Depolarization):**
- If (funny current): Na+/K+ inward, activated by hyperpolarization
- ICa-T: T-type calcium current, late phase 4
- INaCa: Sodium-calcium exchanger, calcium extrusion

**Phase 0 (Upstroke):**
- ICa-L: L-type calcium current (slow compared to fast Na+ in myocytes)
- Slower upstroke velocity (~10 V/s vs. 200-300 V/s in myocytes)

**Phase 3 (Repolarization):**
- IKr, IKs: Delayed rectifier potassium currents

### Autonomic Modulation at Cellular Level

**Sympathetic Stimulation:**
- Beta-1 → Gs → adenylyl cyclase → ↑cAMP → PKA
- PKA phosphorylates:
  - HCN channels → ↑If → ↑rate
  - L-type Ca2+ channels → ↑ICa → ↑contractility
  - Ryanodine receptors → ↑Ca2+ release
  - Phospholamban → ↑SERCA2a → faster relaxation

**Parasympathetic Stimulation:**
- M2 → Gi → ↓cAMP + direct activation of IKACh
- Opens GIRK channels → K+ efflux → hyperpolarization
- ↓SA node firing rate, ↓AV nodal conduction

## Arrhythmia Mechanisms - Detailed

### Triggered Activity
**Early Afterdepolarizations (EADs):**
- Occur during phase 2 or 3
- Mechanism: Reactivation of L-type Ca2+ or late Na+ current
- Conditions: Long QT syndrome, hypokalemia, drugs
- Can trigger Torsades de Pointes

**Delayed Afterdepolarizations (DADs):**
- Occur after full repolarization (phase 4)
- Mechanism: Ca2+ overload → spontaneous SR Ca2+ release → ITI
- Conditions: Digitalis toxicity, catecholamine excess, heart failure
- Can trigger focal VT

### Reentry Requirements
1. Two pathways with different conduction/refractory properties
2. Unidirectional block in one pathway
3. Slow conduction allowing recovery of excitability

**Types:**
- Anatomic: AVRT (accessory pathway), atrial flutter (cavotricuspid isthmus)
- Functional: AF (multiple wavelets), VF

## Advanced ECG Interpretation

### Risk Stratification for SCD

**Brugada Syndrome:**
- Coved ST elevation ≥2mm in V1-V3
- Risk: Spontaneous VF
- Management: ICD for high-risk patients

**Long QT Syndrome:**
| Type | Gene | Channel | Triggers |
|------|------|---------|----------|
| LQT1 | KCNQ1 | IKs | Exercise, swimming |
| LQT2 | KCNH2 | IKr | Auditory stimuli, emotion |
| LQT3 | SCN5A | INa | Rest, sleep |

**Hypertrophic Cardiomyopathy:**
- SCD risk factors: Prior arrest, family history of SCD, syncope, NSVT, LV thickness ≥30mm, abnormal BP response to exercise

### Signal-Averaged ECG
- Detects late potentials (fragmented QRS)
- Marker of arrhythmogenic substrate
- Low sensitivity for predicting VT/VF

### Electrophysiology Study Indications
- Syncope with suspected arrhythmia
- Palpitations with documented tachycardia
- Risk stratification post-MI
- Ablation planning

## Pharmacologic Antiarrhythmic Therapy

### Vaughan-Williams Classification

| Class | Mechanism | Examples | Primary Use |
|-------|-----------|----------|-------------|
| Ia | Na+ block, intermediate kinetics | Procainamide, quinidine | AF, VT |
| Ib | Na+ block, fast kinetics | Lidocaine, mexiletine | VT |
| Ic | Na+ block, slow kinetics | Flecainide, propafenone | SVT, AF (no structural HD) |
| II | Beta-blockers | Metoprolol, atenolol | Rate control, VT prevention |
| III | K+ channel block | Amiodarone, sotalol, dofetilide | AF, VT |
| IV | Ca2+ channel block | Verapamil, diltiazem | SVT, rate control |

**Amiodarone:**
- Multiple mechanisms (all four classes)
- Long half-life (40-55 days)
- Toxicities: Thyroid, pulmonary fibrosis, hepatic, corneal deposits, photosensitivity
- Drug interactions: Warfarin, digoxin, statins

## Device Therapy

### Pacemaker Indications
- Symptomatic bradycardia
- High-grade AV block
- Sinus node dysfunction
- Cardiac resynchronization therapy (CRT) for HFrEF with LBBB

### ICD Indications (Primary Prevention)
- LVEF ≤35% + NYHA II-III despite optimal medical therapy
- LVEF ≤30% + NYHA I
- Specific channelopathies/cardiomyopathies with high-risk features

### ICD Indications (Secondary Prevention)
- Survived cardiac arrest (VT/VF)
- Sustained VT with structural heart disease
- Syncope with inducible VT on EPS`,
      keyTerms: [
        { term: 'early afterdepolarization', definition: 'Abnormal depolarization during phase 2/3 of action potential; substrate for Torsades de Pointes' },
        { term: 'delayed afterdepolarization', definition: 'Abnormal depolarization after full repolarization from intracellular calcium overload' },
        { term: 'long QT syndrome', definition: 'Inherited or acquired prolongation of QT interval predisposing to Torsades de Pointes and SCD' },
        { term: 'Brugada syndrome', definition: 'Genetic channelopathy with characteristic ECG pattern and risk of sudden cardiac death' },
        { term: 'signal-averaged ECG', definition: 'High-resolution ECG technique detecting late potentials indicative of arrhythmogenic substrate' },
      ],
      clinicalNotes: 'Class Ic antiarrhythmics (flecainide, propafenone) are contraindicated in structural heart disease due to proarrhythmic risk demonstrated in CAST trial.',
    },
    5: {
      level: 5,
      summary: 'Expert-level management integrates advanced electrophysiology, ablation strategies, device programming, and emerging therapies with evidence-based risk stratification.',
      explanation: `## Advanced Concepts in Cardiac Rhythm Management

### Molecular Pharmacology of Antiarrhythmics

**Sodium Channel States and Drug Binding:**
- Resting → Open → Inactivated → Resting
- Class I drugs preferentially bind inactivated state (use-dependence)
- Class Ia: Intermediate dissociation → moderate use-dependence
- Class Ib: Fast dissociation → selective for diseased tissue
- Class Ic: Slow dissociation → marked use-dependence, proarrhythmic

**Potassium Channel Targets:**
| Channel | Current | Blockers | Clinical Effect |
|---------|---------|----------|-----------------|
| KCNQ1/KCNE1 | IKs | None clinically | Inhibition → ↑QT |
| KCNH2 | IKr | Dofetilide, sotalol | ↑APD, ↑ERP, ↑QT |
| KCNJ2 | IK1 | Limited | Maintains resting potential |
| KCNA5 | IKur | Vernakalant | Atrial-selective |

### Catheter Ablation - Advanced Techniques

**Atrial Fibrillation Ablation:**
- Pulmonary vein isolation (PVI): Cornerstone strategy
- Additional substrate modification:
  - CFAE (complex fractionated atrial electrograms)
  - Linear lesions (roof line, mitral isthmus)
  - Posterior wall isolation
- Technologies: Radiofrequency, cryoballoon, pulsed field ablation

**Ventricular Tachycardia Ablation:**
- Substrate mapping in sinus rhythm
- Activation/entrainment mapping during VT
- Endocardial + epicardial approach for non-ischemic CM
- Late potential abolition strategy
- Success rates: 70-80% ischemic VT, 50-70% non-ischemic

### Device Programming and Optimization

**ICD Programming Evolution:**
- Historical: Aggressive detection → frequent inappropriate shocks
- Modern: Conservative programming (MADIT-RIT, ADVANCE III)
  - Longer detection windows
  - Higher rate cutoffs
  - ATP before shocks

**CRT Optimization:**
- AV delay optimization: Echocardiographic or device-based algorithms
- VV delay: LV-only or sequential pacing
- MultiPoint pacing: Multiple LV stimulation sites
- Response predictors: LBBB morphology, QRS duration, etiology

### Emerging Technologies and Therapies

**Pulsed Field Ablation (PFA):**
- Non-thermal, tissue-selective
- Cardiomyocyte selectivity spares esophagus, phrenic nerve
- ADVENT trial: Non-inferior to thermal ablation for AF

**Leadless Pacing:**
- Micra (Medtronic): RV pacing only
- Aveir (Abbott): Atrial/ventricular options
- Future: Leadless CRT systems in development

**Conduction System Pacing:**
- His bundle pacing: Physiologic activation
- Left bundle branch area pacing (LBBAP): More reliable capture, better thresholds
- Alternative to traditional RV pacing and CRT

**Subcutaneous ICD (S-ICD):**
- No transvenous leads
- Indications: Young patients, limited vascular access, infection risk
- Limitations: No bradycardia pacing, no ATP

### Risk Stratification - Contemporary Approach

**Post-MI Sudden Death Prevention:**
- LVEF ≤35% at 40 days post-MI: ICD evaluation
- Programmed ventricular stimulation: Limited utility
- CMR: Late gadolinium enhancement predicts arrhythmia

**Non-Ischemic Cardiomyopathy:**
- ICD if LVEF ≤35% despite ≥3 months optimal medical therapy
- CMR scar assessment may refine selection
- DANISH trial: ICD benefit attenuated in contemporary era with better HF therapy

**Channelopathy Management:**

| Syndrome | High-Risk Features | Management |
|----------|-------------------|------------|
| LQT1 | QTc >500 ms, prior events | Beta-blocker (nadolol), ICD if refractory |
| LQT2 | QTc >500 ms, T wave morphology | Beta-blocker, avoid QT-prolonging drugs |
| LQT3 | QTc >500 ms, events at rest | Mexiletine, ICD, consider LCSD |
| Brugada | Spontaneous type 1, syncope, prior VF | ICD, quinidine in selected cases |
| CPVT | Prior arrest, beta-blocker breakthrough | Nadolol + flecainide, ICD for arrest survivors |

### Special Scenarios

**Heart Rate and Heart Failure:**
- SHIFT trial: Ivabradine reduces HF hospitalization if HR ≥70
- TARGET HR: Resting HR <70 bpm improves outcomes
- Beta-blocker titration to maximum tolerated dose

**Atrial Fibrillation Rate vs. Rhythm Control:**
- EAST-AFNET 4: Early rhythm control reduces CV outcomes
- CABANA: Ablation similar to drug therapy for composite outcome
- Patient selection: Symptom burden, HFrEF, young patients favor rhythm control

**Ventricular Arrhythmia Storm:**
- Definition: ≥3 episodes of sustained VT/VF in 24 hours
- Acute management: Sedation, amiodarone, beta-blockade (esmolol), catheter ablation
- Stellate ganglion block: Temporizing measure
- Underlying cause treatment essential

### Quality Metrics and Registries

**Device Implant Outcomes:**
- Complication rates: Pneumothorax 1-2%, lead dislodgement 1-3%
- NCDR ICD registry: Benchmarking, quality improvement
- Appropriate shock rates: Declining with improved programming

**AF Ablation Outcomes:**
- Freedom from AF at 1 year: 70-80% paroxysmal, 50-60% persistent
- Repeat procedures common
- CABANA/CASTLE-AF: Long-term outcomes data`,
      keyTerms: [
        { term: 'pulsed field ablation', definition: 'Non-thermal ablation using irreversible electroporation with tissue selectivity for cardiomyocytes' },
        { term: 'conduction system pacing', definition: 'His bundle or left bundle branch pacing providing physiologic ventricular activation' },
        { term: 'ventricular arrhythmia storm', definition: 'Three or more episodes of sustained VT/VF within 24 hours; emergency requiring aggressive intervention' },
        { term: 'LCSD', definition: 'Left cardiac sympathetic denervation; surgical antiadrenergic therapy for refractory ventricular arrhythmias' },
        { term: 'ivabradine', definition: 'Selective If channel inhibitor reducing heart rate without affecting contractility; used in HFrEF' },
      ],
      clinicalNotes: `Clinical Pearls:
1. ICD programming: Use long detection times and high rate cutoffs to reduce inappropriate shocks
2. Left bundle branch area pacing is emerging as preferred physiologic pacing strategy
3. S-ICD: Excellent option for young patients but no bradycardia support or ATP
4. VT storm: Esmolol + deep sedation + amiodarone; consider emergent ablation
5. AF ablation: Early rhythm control (within 1 year of diagnosis) shows better outcomes per EAST-AFNET 4
6. Brugada: Quinidine may be considered as adjunct to ICD; avoid fever, certain drugs`,
    },
  },

  media: [
    {
      id: 'pulse-locations',
      type: 'diagram',
      filename: 'pulse-locations.svg',
      title: 'Arterial Pulse Locations',
      description: 'Anatomical locations for pulse palpation',
    },
    {
      id: 'cardiac-conduction',
      type: 'animation',
      filename: 'cardiac-conduction.mp4',
      title: 'Cardiac Conduction System',
      description: 'Animation of electrical impulse propagation through the heart',
    },
  ],

  citations: [
    {
      id: 'acc-aha-arrhythmia-2017',
      type: 'article',
      title: '2017 ACC/AHA/HRS Guideline for Management of Patients With Ventricular Arrhythmias',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'bates-vital-signs-hr',
      type: 'textbook',
      title: 'Vital Signs',
      source: 'Bates\' Guide to Physical Examination and History Taking',
      chapter: '4',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'parent', label: 'Vital Signs' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination', 'vital-signs', 'clinical-skills', 'arrhythmias'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'critical-care'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartRate;
