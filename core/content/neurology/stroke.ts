/**
 * Stroke (Cerebrovascular Accident)
 *
 * Acute neurological injury from disrupted blood supply to the brain.
 */

import { EducationalContent } from '../types';

export const strokeContent: EducationalContent = {
  id: 'neurology-stroke',
  type: 'topic',
  name: 'Stroke',
  alternateNames: ['Cerebrovascular Accident', 'CVA', 'Brain Attack', 'Ischemic Stroke'],

  levels: {
    1: {
      level: 1,
      summary: "A stroke happens when blood flow to part of the brain is cut off. Without oxygen, brain cells start to die within minutes. This can cause permanent disability or death.",
      explanation: `## What Is a Stroke?

A stroke occurs when blood flow to part of the brain is blocked or when a blood vessel in the brain bursts. Without blood and oxygen, brain cells begin to die within minutes.

## Types of Stroke

**Ischemic Stroke (Most Common - 87%):**
- Blood clot blocks a blood vessel
- Like a clogged pipe in your house

**Hemorrhagic Stroke (13%):**
- Blood vessel bursts and bleeds into brain
- Like a pipe bursting

**TIA (Transient Ischemic Attack):**
- "Mini-stroke" - temporary blockage
- Symptoms go away within 24 hours
- Warning sign of future stroke

## Warning Signs (FAST)

**F - Face Drooping:**
One side of face droops or feels numb

**A - Arm Weakness:**
One arm weak or numb

**S - Speech Difficulty:**
Slurred speech or trouble speaking

**T - Time to Call 911:**
Every minute counts - call immediately

## Risk Factors

- High blood pressure (most important)
- Smoking
- Diabetes
- High cholesterol
- Heart disease (especially AFib)
- Obesity
- Family history`,

      keyTerms: [
        { term: 'Ischemic', definition: 'When blood flow is blocked to part of the body' },
        { term: 'Hemorrhagic', definition: 'When a blood vessel bursts and causes bleeding' },
        { term: 'TIA', definition: 'Transient Ischemic Attack - temporary stroke symptoms that resolve' },
        { term: 'AFib', definition: 'Atrial fibrillation - irregular heartbeat that can cause stroke' },
      ],
      analogies: [
        'A stroke is like a dam blocking water to crops - everything downstream dies.',
        'A TIA is like a tornado warning - take it seriously before the real thing hits.',
      ],
      examples: [
        "Person suddenly can't speak or move right side",
        'Elderly person with AFib develops stroke',
        'Someone with sudden severe headache and collapsed',
      ],
    },

    2: {
      level: 2,
      summary: 'Stroke is a medical emergency requiring immediate evaluation. Time is brain - approximately 2 million neurons die per minute during acute ischemic stroke.',
      explanation: `## Classification

**Ischemic Stroke Mechanisms:**
- Large vessel atherosclerosis (thrombotic)
- Cardioembolic (from heart)
- Small vessel (lacunar)
- Other (dissection, vasculitis)
- Cryptogenic (unknown cause)

**Hemorrhagic Stroke Types:**
- Intracerebral hemorrhage (bleed in brain tissue)
- Subarachnoid hemorrhage (bleed around brain)

## Clinical Presentation

**Anterior Circulation (MCA):**
- Face, arm, leg weakness
- Aphasia (dominant hemisphere)
- Neglect (nondominant hemisphere)
- Gaze preference toward lesion

**Posterior Circulation (PCA/Vertebrobasilar):**
- Visual field defects
- Brainstem signs
- Vertigo, ataxia
- Diplopia

**Lacunar Syndromes:**
- Pure motor stroke
- Pure sensory stroke
- Ataxic hemiparesis
- Dysarthria-clumsy hand

## Initial Workup

**Imaging (Within 25 Minutes):**
- Non-contrast CT head (rule out bleed)
- CTA (large vessel occlusion)
- MRI with diffusion (if available)

**Labs:**
- CBC, BMP, glucose
- Coagulation studies
- Troponin
- Toxicology if indicated

**Cardiac Workup:**
- ECG (AFib, MI)
- Echocardiogram
- Telemetry`,

      keyTerms: [
        { term: 'Aphasia', definition: 'Difficulty speaking or understanding language' },
        { term: 'Neglect', definition: 'Ignoring one side of the body or space' },
        { term: 'Lacunar', definition: 'Small stroke from occlusion of small penetrating artery' },
        { term: 'Cryptogenic', definition: 'Stroke of unknown cause after evaluation' },
      ],
      analogies: [
        'Lacunar stroke is like a tiny pipe getting clogged instead of a main line.',
        'Neglect is like wearing blinders that block half your world.',
      ],
      examples: [
        'Right MCA stroke causes left weakness and aphasia',
        'Lacunar stroke causes pure motor hemiparesis',
        'Brainstem stroke causes double vision and vertigo',
      ],
      clinicalNotes: 'CT angiogram helps identify large vessel occlusion eligible for thrombectomy. "Time is brain" - 1.9 million neurons/min lost in acute stroke. Door-to-needle goal: <60 minutes for tPA. Door-to-puncture goal: <90 minutes for thrombectomy.',
    },

    3: {
      level: 3,
      summary: 'Acute ischemic stroke treatment includes tPA within 4.5 hours and mechanical thrombectomy for large vessel occlusion up to 24 hours in selected patients.',
      explanation: `## Acute Ischemic Stroke Treatment

**Intravenous tPA (Alteplase/Tenecteplase):**
- Window: 4.5 hours from last known normal
- Dose: 0.9 mg/kg (max 90mg)
- Contraindications:
  - Intracranial hemorrhage on CT
  - Symptoms >4.5 hours
  - BP >185/110
  - Recent surgery/trauma
  - Anticoagulation (INR >1.7)
  - Platelets <100,000
  - Glucose <50 or >400

**Mechanical Thrombectomy:**
- Large vessel occlusion (ICA, MCA M1)
- Window: Up to 24 hours (DAWN/DEFUSE-3 trials)
- Requires CTA evidence of occlusion
- CT perfusion: penumbra > core
- Better outcomes than tPA alone

**Supportive Care:**
- Permissive hypertension (SBP <220 if not thrombolysed)
- Oxygen if sat <94%
- Dysphagia screen before PO intake
- DVT prophylaxis
- Glucose management (140-180)

## Hemorrhagic Stroke

**Intracerebral Hemorrhage:**
- Reverse anticoagulation urgently
- BP control: SBP <140
- Monitor for expansion
- Surgical evacuation:
  - Cerebellar: consider early
  - Lobar: if deteriorating
  - Deep: generally medical

**Subarachnoid Hemorrhage:**
- "Worst headache of my life"
- Usually ruptured aneurysm
- Secure aneurysm: coiling or clipping
- Nimodipine for vasospasm prophylaxis`,

      keyTerms: [
        { term: 'tPA', definition: 'Tissue plasminogen activator - clot-busting drug' },
        { term: 'Penumbra', definition: 'Brain tissue at risk but salvageable if blood flow restored' },
        { term: 'Dysphagia', definition: 'Difficulty swallowing - stroke patients may aspirate' },
        { term: 'Vasospasm', definition: 'Blood vessel constriction after SAH that can cause more ischemia' },
      ],
      analogies: [
        'The penumbra is like a drought area - if water returns, crops survive.',
        'tPA is like drain opener for blood clots in the brain.',
      ],
      examples: [
        'Patient with MCA occlusion gets tPA at 2 hours',
        'Large vessel occlusion thrombectomy at 18 hours with favorable imaging',
        'Anticoagulated ICH patient needs reversal with PCC',
      ],
      clinicalNotes: 'Modified Rankin Scale (mRS) measures functional outcome. Goal: mRS 0-2 (independent). NIH Stroke Scale (NIHSS) measures stroke severity: 0-42, higher is worse. NIHSS predicts outcome and hemorrhage risk with tPA.',
    },

    4: {
      level: 4,
      summary: 'Stroke etiology workup guides secondary prevention. Cardiac monitoring detects paroxysmal AF. Antiplatelet therapy for non-cardioembolic, anticoagulation for cardioembolic.',
      explanation: `## Secondary Prevention

**Antiplatelet Therapy (Non-Cardioembolic):**
- Aspirin 81-325mg daily
- Clopidogrel 75mg daily
- Aspirin + dipyridamole
- Short-term dual antiplatelet:
  - TIA/minor stroke: 21-90 days
  - Intracranial atherosclerosis: 90 days

**Anticoagulation (Cardioembolic):**
- AFib: DOAC preferred over warfarin
- DOACs: Apixaban, Rivaroxaban, Dabigatran, Edoxaban
- Mechanical valve: Warfarin required

**Risk Factor Modification:**
- BP target: <130/80
- LDL target: <70 (high intensity statin)
- HbA1c target: <7%
- Smoking cessation
- Weight loss
- Exercise

## Stroke Workup

**Vascular Imaging:**
- CTA head/neck
- MRA
- Carotid ultrasound

**Cardiac Monitoring:**
- Telemetry (24 hours minimum)
- Echocardiogram (TTE)
- Transesophageal echo (if TTE negative)
- Prolonged monitor (30 days) if cryptogenic

**Lab Evaluation:**
- Lipid panel
- HbA1c
- Hemoglobin A1c
- Hypercoagulable workup if young

## Complications

**Early:**
- Cerebral edema (2-5 days)
- Hemorrhagic transformation
- Seizures
- Aspiration pneumonia

**Late:**
- Post-stroke depression
- Spasticity
- Shoulder-hand syndrome
- Cognitive decline
- Recurrent stroke`,

      keyTerms: [
        { term: 'DOAC', definition: 'Direct Oral Anticoagulant - newer blood thinners safer than warfarin' },
        { term: 'Cryptogenic', definition: 'Stroke without identified cause after full workup' },
        { term: 'Hemorrhagic transformation', definition: 'Bleeding into ischemic stroke area' },
        { term: 'Spasticity', definition: 'Stiff, tight muscles after stroke' },
      ],
      analogies: [
        'Hemorrhagic transformation is like watering a dead plant until it rots.',
        'Spasticity is like muscles that are permanently clenched.',
      ],
      examples: [
        'Patient with AFib and stroke started on apixaban',
        'Cryptogenic stroke found to have PFO on TEE',
        'Post-stroke patient develops spasticity in affected arm',
      ],
      clinicalNotes: 'For intracranial atherosclerosis, WASID trial showed warfarin not superior to aspirin with more bleeding. SAMMPRIS showed stenting worse than medical management. Dual antiplatelet (aspirin + clopidogrel) for 90 days then single antiplatelet.',
    },

    5: {
      level: 5,
      summary: 'Stroke systems of care improve outcomes. Comprehensive stroke centers, stroke networks, and telestroke have expanded access to acute stroke therapy.',
      explanation: `## Stroke Systems of Care

**Stroke Centers:**
- Primary Stroke Center (PSC): tPA capability
- Comprehensive Stroke Center (CSC): thrombectomy, ICU
- Acute Stroke-Ready Hospital (ASRH): stabilization, transfer

**Telestroke:**
- Remote stroke expertise via video
- Expands tPA access to rural areas
- Comparable outcomes to in-person

**Prehospital:**
- EMS stroke notification
- Direct to stroke center
- Field triage with stroke scales

## Emerging Therapies

**Extended Window Thrombectomy:**
- DAWN trial: 6-24 hours, clinical-mismatch
- DEFUSE-3 trial: 6-16 hours, perfusion mismatch
- Revolutionized stroke care

**Neuroprotection:**
- Multiple agents failed in trials
- Still investigational

**Stem Cell Therapy:**
- Preclinical promising
- Clinical trials ongoing

## Controversies

**Blood Pressure Management:**
- Acute: How high is too high?
- Permissive HTN improves collateral flow
- If tPA: keep <185/110
- If thrombectomy: no clear target

**Anticoagulation for Mild Stroke + AFib:**
- Some benefit observed
- Timing of initiation
- AHA/ASA guidance evolving

**PFO Closure:**
- RESPECT, CLOSE trials support closure
- For patients <60 with cryptogenic stroke
- Not all patients benefit`,

      keyTerms: [
        { term: 'Clinical-mismatch', definition: 'Small infarct core but severe neurological deficit' },
        { term: 'Perfusion mismatch', definition: 'Penumbra much larger than infarct core' },
        { term: 'PFO', definition: 'Patent Foramen Ovale - hole between heart chambers that can cause stroke' },
      ],
      analogies: [
        'Clinical-mismatch is like having a small fire but huge smoke damage.',
        'Telestroke is like having a stroke expert in your pocket.',
      ],
      examples: [
        'Patient transferred to comprehensive center for thrombectomy',
        'Telestroke enables rural hospital to give tPA',
        'PFO closure prevents recurrent cryptogenic stroke',
      ],
      clinicalNotes: 'Stroke quality metrics: door-to-needle <60min, door-to-puncture <90min, dysphagia screen before PO, DVT prophylaxis, discharged on antithrombotic, anticoagulation for AFib, statin for ischemic stroke, stroke education, assessment for rehab.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['neurology', 'stroke', 'cerebrovascular', 'emergency', 'tPA'],
    systems: ['nervous', 'cardiovascular'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['neurology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
