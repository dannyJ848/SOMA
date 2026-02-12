/**
 * Atrial Fibrillation - Comprehensive Educational Content
 *
 * Comprehensive content covering AF classification, pathophysiology,
 * clinical presentation, and management strategies.
 */

import { EducationalContent } from '../../../types';

export const atrialFibrillation: EducationalContent = {
  id: 'condition-atrial-fibrillation',
  type: 'condition',
  name: 'Atrial Fibrillation',
  alternateNames: ['AFib', 'AF', 'Atrial Fib'],
  hpoId: 'HP:0000512',

  levels: {
    1: {
      level: 1,
      summary: 'Atrial fibrillation is an irregular heartbeat that can increase your risk of stroke and cause fatigue or shortness of breath.',
      explanation: `Atrial fibrillation (AFib) is the most common type of irregular heartbeat. Instead of beating in a regular rhythm, the upper chambers of the heart quiver or "fibrillate."

**What Happens:**
- The heart's electrical signals become disorganized
- The upper chambers (atria) quiver instead of pumping strongly
- Blood can pool and form clots
- These clots can travel to the brain and cause a stroke

**Common Symptoms:**
- Feeling like your heart is racing or fluttering
- Tiredness and weakness
- Shortness of breath
- Dizziness
- Chest discomfort
- Some people have no symptoms at all

**Risk Factors:**
- High blood pressure
- Heart disease
- Age (more common as you get older)
- Sleep apnea
- Alcohol use
- Thyroid problems

**Treatment:**
- Medicines to control heart rate or rhythm
- Blood thinners to prevent stroke
- Procedures to restore normal rhythm
- Treating underlying causes`,
      keyTerms: [
        { term: 'atria', definition: 'The two upper chambers of the heart' },
        { term: 'fibrillate', definition: 'To quiver rapidly instead of beating normally' },
        { term: 'blood thinner', definition: 'Medicine that helps prevent blood clots' },
      ],
      analogies: [
        'Normal heart rhythm is like a drum beating steadily. AFib is like the drummer playing random, chaotic beats.',
      ],
      examples: [
        'An older adult with high blood pressure notices their heart sometimes races irregularly',
        'Someone feels unusually tired and short of breath, and their doctor finds an irregular heartbeat',
      ],
    },
    2: {
      level: 2,
      summary: 'Atrial fibrillation is a supraventricular tachyarrhythmia characterized by uncoordinated atrial activation leading to an irregularly irregular ventricular response.',
      explanation: `Atrial fibrillation is the most common sustained cardiac arrhythmia, affecting 1-2% of the population.

**Classification:**
- Paroxysmal: Self-terminating, usually within 48 hours
- Persistent: Lasts >7 days or requires intervention
- Long-standing persistent: >12 months
- Permanent: Accepted as ongoing

**Pathophysiology:**
- Multiple re-entrant circuits in the atria
- Electrical remodeling from rapid atrial rates
- Often triggered by pulmonary vein foci
- Structural changes from underlying heart disease

**Clinical Features:**
- Irregularly irregular pulse
- May be asymptomatic (silent AF)
- Palpitations, fatigue, dyspnea
- Can cause or worsen heart failure

**Stroke Risk (CHA₂DS₂-VASc Score):**
- C: CHF (1 point)
- H: Hypertension (1 point)
- A₂: Age ≥75 (2 points)
- D: Diabetes (1 point)
- S₂: Stroke/TIA (2 points)
- V: Vascular disease (1 point)
- A: Age 65-74 (1 point)
- Sc: Sex (female) (1 point)

**Management:**
- Rate control (beta-blockers, calcium channel blockers, digoxin)
- Rhythm control (antiarrhythmics, cardioversion, ablation)
- Anticoagulation based on stroke risk`,
      keyTerms: [
        { term: 're-entrant circuit', definition: 'Electrical pathway that allows signals to loop continuously' },
        { term: 'CHA₂DS₂-VASc', definition: 'Scoring system to estimate stroke risk in AF' },
      ],
    },
    3: {
      level: 3,
      summary: 'AF results from multiple wavelet re-entry or focal triggers (typically pulmonary veins); management involves rate/rhythm control and anticoagulation based on CHA₂DS₂-VASc score.',
      explanation: `Atrial fibrillation is a complex arrhythmia with significant implications for stroke risk and heart failure.

**Electrophysiological Mechanisms:**
- Multiple wavelet hypothesis: Fragmented wavefronts propagate through atrial tissue
- Focal trigger theory: Rapid firing from pulmonary vein ostia (most common)
- Autonomic influences: Vagal and adrenergic triggers
- Substrate: Atrial fibrosis, dilation, and electrical remodeling

**ECG Characteristics:**
- No distinct P waves (replaced by fibrillatory waves)
- Irregularly irregular R-R intervals
- Atrial rate: 300-600 bpm
- Ventricular rate: Variable (typically 100-180 bpm untreated)

**Stroke Prevention:**
- CHA₂DS₂-VASc score guides anticoagulation:
  - 0: No anticoagulation
  - 1: Consider anticoagulation
  - ≥2: Anticoagulation recommended
- Options: Warfarin (INR 2-3), DOACs (apixaban, rivaroxaban, dabigatran, edoxaban)
- Left atrial appendage closure for patients who cannot tolerate anticoagulation

**Rhythm vs. Rate Control:**
- Rate control acceptable in: elderly, asymptomatic, long-standing AF, no tachycardia-mediated cardiomyopathy
- Rhythm control preferred in: young, symptomatic, new-onset, tachycardia-mediated CMP, difficult rate control

**Catheter Ablation:**
- Pulmonary vein isolation (PVI) is cornerstone
- More effective than antiarrhythmics for maintaining sinus rhythm
- Success rates: 60-80% for paroxysmal, 40-60% for persistent`,
      keyTerms: [
        { term: 'electrical remodeling', definition: 'Changes in ion channel expression and conduction from sustained AF' },
        { term: 'PVI', definition: 'Pulmonary vein isolation; cornerstone ablation strategy' },
      ],
    },
    4: {
      level: 4,
      summary: 'AF management requires integrated care addressing rhythm/rate control, stroke prevention (DOACs preferred), and risk factor modification; ablation outcomes depend on AF type and substrate.',
      explanation: `Atrial fibrillation represents a spectrum of disease from paroxysmal to permanent, with management tailored to individual patient factors.

**Substrate and Trigger Interplay:**
- Triggers: Pulmonary veins (90%), SVC, ligament of Marshall, CS, LOM
- Substrate: Fibrosis (DE-MRI), dilation, inflammation, autonomic remodeling
- "AF begets AF": Electrical and structural remodeling perpetuate arrhythmia

**Anticoagulation Strategy:**
- DOACs preferred over warfarin (non-valvular AF)
- Specific considerations:
  - Apixaban: Lower bleeding risk, safe in moderate CKD
  - Rivaroxaban: Once daily, caution in renal impairment
  - Dabigatran: Reversible with idarucizumab
  - Edoxaban: CrCl >95 contraindicated
- Valvular AF (moderate-severe MS or mechanical valve): Warfarin required
- HAS-BLED for bleeding risk assessment (high score = closer monitoring, not withholding)

**Ablation Considerations:**
- Stage I: Paroxysmal AF, minimal fibrosis → PVI alone
- Stage II: Persistent AF, moderate fibrosis → PVI + substrate modification
- Stage III: Long-standing persistent, extensive fibrosis → Consider rate control
- CONTINUOUS vs POINT-BY-POINT ablation techniques
- Post-ablation: 8-week blanking period, continued anticoagulation based on CHA₂DS₂-VASc

**Upstream Therapy:**
- ACE-I/ARBs: May delay AF in HF, hypertension
- Statins: Potential benefit in post-operative AF
- Lifestyle: Weight loss, treatment of OSA, alcohol reduction significantly impact outcomes`,
      keyTerms: [
        { term: 'DE-MRI', definition: 'Delayed enhancement MRI; quantifies atrial fibrosis (Utah staging)' },
        { term: 'blanking period', definition: 'Initial 8-12 weeks post-ablation when recurrent AF may resolve spontaneously' },
      ],
    },
    5: {
      level: 5,
      summary: 'AF management integrates rhythm control strategies (ablation increasingly first-line for paroxysmal), anticoagulation based on CHA₂DS₂-VASc, and aggressive risk factor modification; fibrosis burden predicts outcomes.',
      explanation: `Atrial fibrillation requires a comprehensive, patient-centered approach balancing symptom control, stroke prevention, and cardiovascular outcomes.

**Advanced Pathophysiology:**
- Ionic remodeling: ↓I_CaL, ↓I_Na, ↑I_K (constitutive I_K-ACh), connexin redistribution
- Structural: Fibroblast proliferation, collagen deposition, gap junction remodeling
- Autonomic: Ganglionated plexi ablation may augment PVI success
- Genetic: SCN5A, KCNQ1, GJA5 variants associated with familial AF

**Anticoagulation Nuances:**
- DOACs: Apixaban superior for safety, similar efficacy; rivaroxaban once-daily may affect adherence
- LAA occlusion (Watchman, Lariat) for patients with absolute contraindication to anticoagulation
- Periprocedural: Heparin bridge for mechanical valves; DOAC interruption based on renal function
- Combination antiplatelet + anticoagulant: Minimize duration post-PCI (triple therapy ≤1 week, then OAC + single AP)

**Ablation Outcomes and Complications:**
- Success: 70-80% paroxysmal, 50-60% persistent, 30-40% long-standing (single procedure)
- Repeat procedures common
- Complications: Cardiac tamponade (1-2%), PV stenosis (rare with modern techniques), esophageal injury (0.1-0.3%), phrenic nerve injury
- Cryoballoon vs RF: Comparable efficacy, cryoballoon faster learning curve

**Special Situations:**
- Atrial flutter: Same anticoagulation as AF; cavotricuspid isthmus ablation highly effective
- AF with rapid ventricular response: IV diltiazem, metoprolol, or amiodarone; consider DC cardioversion if unstable
- AF with pre-excitation (WPW): Avoid AV nodal blockers; use procainamide or amiodarone
- Post-operative AF: Often self-limited; amiodarone or beta-blocker prophylaxis in high-risk`,
      keyTerms: [
        { term: 'cavotricuspid isthmus', definition: 'Anatomic target for typical atrial flutter ablation' },
        { term: 'tachycardia-mediated cardiomyopathy', definition: 'Reversible ventricular dysfunction from prolonged uncontrolled tachycardia' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular'],
    topics: ['arrhythmia', 'atrial fibrillation', 'anticoagulation'],
    keywords: ['atrial fibrillation', 'AFib', 'anticoagulation', 'ablation'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default atrialFibrillation;
