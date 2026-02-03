/**
 * Central Sleep Apnea - Comprehensive Educational Content
 *
 * Covers central sleep apnea pathophysiology, classification (including
 * Cheyne-Stokes respiration), diagnosis, and treatment approaches.
 */

import { EducationalContent } from '../types';

export const centralSleepApnea: EducationalContent = {
  id: 'condition-central-sleep-apnea',
  type: 'condition',
  name: 'Central Sleep Apnea',
  alternateNames: ['CSA', 'Central Apnea', 'Cheyne-Stokes Respiration', 'Treatment-Emergent Central Sleep Apnea'],

  levels: {
    1: {
      level: 1,
      summary: 'Central sleep apnea is when your brain temporarily forgets to tell your body to breathe during sleep, causing pauses in breathing.',
      explanation: `Unlike the more common type of sleep apnea where something blocks your throat, central sleep apnea happens because your brain doesn't send the signal to breathe.

**What Happens:**
- During sleep, your brain normally tells your body to breathe automatically
- In central sleep apnea, the brain stops sending this signal for short periods
- You stop breathing, but there's nothing blocking your airway
- Your body isn't even trying to breathe during these pauses
- When oxygen gets too low or CO2 too high, your brain wakes you slightly and you start breathing again

**Who Gets Central Sleep Apnea:**
- People with heart problems (especially heart failure)
- People who've had a stroke
- People taking certain pain medications (opioids)
- People at very high altitudes
- Sometimes it's not clear why (called "primary" central sleep apnea)

**Symptoms:**
- Waking up short of breath
- Trouble staying asleep
- Feeling tired during the day
- Morning headaches
- Difficulty concentrating
- Snoring (though less common than in obstructive sleep apnea)

**How It's Different from Obstructive Sleep Apnea:**

| Obstructive Sleep Apnea | Central Sleep Apnea |
|------------------------|---------------------|
| Throat closes, blocking air | Brain stops telling body to breathe |
| Body tries to breathe but can't | Body stops trying to breathe |
| Loud snoring very common | Snoring less common |
| More common overall | Less common |

**Treatment:**
- Treating the underlying cause (like heart failure)
- Special breathing machines that help when needed
- Sometimes oxygen therapy
- Avoiding certain medications that can make it worse`,
      keyTerms: [
        { term: 'central sleep apnea', definition: 'When the brain stops telling the body to breathe during sleep' },
        { term: 'brain signal', definition: 'Messages from your brain that tell your body what to do, like breathing' },
        { term: 'heart failure', definition: 'When the heart doesn\'t pump blood as well as it should' },
      ],
      analogies: [
        'Central sleep apnea is like if your smoke alarm temporarily forgot to monitor for smoke - the house (your body) is fine, but the alarm system (brain) stops watching.',
        'In obstructive apnea, the road is blocked; in central apnea, the traffic signal stops working.',
      ],
      examples: [
        'A person with heart failure might wake up gasping for breath at night because their brain temporarily stopped telling them to breathe.',
        'Someone taking strong pain medication after surgery might have central sleep apnea as a side effect.',
      ],
    },
    2: {
      level: 2,
      summary: 'Central sleep apnea occurs when the brainstem fails to send appropriate signals to respiratory muscles, causing breathing to stop without upper airway obstruction. It\'s commonly associated with heart failure, opioids, and high altitude.',
      explanation: `Central sleep apnea (CSA) differs fundamentally from obstructive sleep apnea: in CSA, there's no respiratory effort during apneas because the brain's respiratory center isn't sending signals to breathe.

**Types of Central Sleep Apnea:**

**1. CSA with Cheyne-Stokes Breathing (CSA-CSB)**
- Most common form
- Associated with heart failure, stroke, kidney failure
- Characteristic pattern: Breathing gradually increases, then decreases, then stops (apnea), then cycle repeats
- The crescendo-decrescendo pattern is called "Cheyne-Stokes respiration"
- Cycle length typically 45-90 seconds

**2. Treatment-Emergent CSA (Complex Sleep Apnea)**
- Develops when treating OSA with CPAP
- Central apneas appear as obstructive events resolve
- Usually resolves within weeks to months
- May require different treatment approach

**3. CSA Due to Medication/Substance**
- Opioids are the main culprit
- Also: benzodiazepines, other sedatives
- Dose-dependent effect with opioids

**4. CSA Due to High Altitude**
- Occurs above ~7,500 feet (2,500 meters)
- Periodic breathing pattern
- Related to low oxygen at altitude

**5. Primary (Idiopathic) CSA**
- No identifiable cause
- Less common
- May relate to sensitive respiratory control

**Pathophysiology (How It Happens):**

Normal breathing is controlled by CO2 levels:
- CO2 rises → Brain signals to breathe
- Breathing lowers CO2 → Signal weakens

In CSA:
- System becomes unstable
- Small change in CO2 → Exaggerated breathing response
- Overbreathing lowers CO2 too much
- CO2 drops below "apneic threshold" → Breathing stops
- CO2 builds up → Breathing restarts
- Cycle repeats

**Diagnosis:**
- Sleep study (polysomnography) shows:
  - Apneas with no respiratory effort
  - Often periodic breathing pattern
  - May see characteristic Cheyne-Stokes pattern
- Apnea-Hypopnea Index (AHI) ≥5 with >50% central events

**Treatment:**
| Type | Primary Treatment |
|------|------------------|
| CSA with heart failure | Optimize cardiac treatment first |
| Opioid-induced | Reduce/stop opioids if possible |
| High altitude | Descend or acclimatize |
| Treatment-emergent | Often resolves; may need ASV |
| Primary CSA | CPAP, ASV, or oxygen |`,
      keyTerms: [
        { term: 'Cheyne-Stokes respiration', definition: 'A breathing pattern with cycles of gradual increase and decrease in breath depth, followed by a pause', pronunciation: 'chayn-stohks' },
        { term: 'apneic threshold', definition: 'The CO2 level below which breathing stops' },
        { term: 'treatment-emergent CSA', definition: 'Central apneas that appear when treating obstructive sleep apnea with CPAP' },
        { term: 'periodic breathing', definition: 'A regular pattern of breathing followed by not breathing, then breathing again' },
        { term: 'ASV', definition: 'Adaptive Servo-Ventilation; a breathing machine that adjusts to your breathing pattern' },
      ],
      analogies: [
        'Cheyne-Stokes breathing is like a thermostat that overshoots - it makes the room too hot, then turns off and lets it get too cold, then overcorrects again.',
        'The breathing control system in CSA is like an overly sensitive cruise control that keeps speeding up and slowing down instead of maintaining a steady speed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Central sleep apnea syndromes result from instability in ventilatory control, characterized by high loop gain and breathing below the apneic threshold. The clinical spectrum includes CSA with Cheyne-Stokes respiration (heart failure), opioid-induced CSA, high-altitude periodic breathing, and treatment-emergent CSA.',
      explanation: `## Classification (ICSD-3)

**Primary Central Sleep Apnea Syndromes:**
1. Primary (idiopathic) CSA
2. CSA with Cheyne-Stokes breathing (CSA-CSB)
3. CSA due to high-altitude periodic breathing
4. CSA due to medication or substance
5. Treatment-emergent CSA

**Diagnostic Criteria:**
- AHI ≥5 events/hour
- >50% of events are central apneas/hypopneas
- Evidence of complaint or consequence (sleepiness, insomnia, etc.)

## Pathophysiology

### Loop Gain Model

\`\`\`
Loop Gain = Controller Gain × Plant Gain

Controller Gain: Sensitivity of respiratory centers to CO2/O2
Plant Gain: Effectiveness of ventilation at changing blood gases

High loop gain → Ventilatory instability → CSA

Contributing factors:
- Hypersensitive chemoreflexes (↑ controller gain)
- Low functional residual capacity (↑ plant gain)
- Prolonged circulation time (delays feedback)
- Low baseline PaCO2 near apneic threshold
\`\`\`

### Apneic Threshold Concept

\`\`\`
PaCO2 during wake: ~40 mmHg
Apneic threshold (sleep): ~35-38 mmHg (2-6 mmHg below eupneic level)

Normal: Large buffer between CO2 levels
CSA: Narrow difference → breathing easily crosses threshold

Hypocapnia → CO2 < apneic threshold → Apnea
Apnea → CO2 rises → Exceeds threshold → Breathing resumes
Ventilatory overshoot → Hypocapnia → Cycle repeats
\`\`\`

## Clinical Syndromes

### CSA with Cheyne-Stokes Breathing

**Associated Conditions:**
- Heart failure (30-40% of HFrEF patients)
- Stroke (especially brainstem)
- Chronic kidney disease
- Atrial fibrillation

**Pathophysiology in Heart Failure:**
| Factor | Mechanism |
|--------|-----------|
| Prolonged circulation time | Delays chemoreceptor feedback → oscillations |
| Pulmonary congestion | ↓ FRC, ↑ plant gain |
| Heightened chemoreflex | ↑ controller gain |
| Low PaCO2 | Near apneic threshold |

**CSB Pattern:**
- Cycle length 45-90 seconds (longer with more severe HF)
- Crescendo-decrescendo hyperpnea phases
- Central apnea/hypopnea at nadir
- Often worsens in supine position and during NREM

### Opioid-Induced CSA

**Mechanism:**
- Opioids depress medullary respiratory centers
- Blunt hypercapnic and hypoxic ventilatory responses
- Produce irregular, ataxic breathing
- Can cause both central apneas and Biot's breathing

**Risk Factors:**
- Dose-dependent (higher doses → more CSA)
- Morphine equivalent dose >200 mg/day: High risk
- Concurrent sedatives
- Pre-existing SDB

**PSG Features:**
- Central apneas, often prolonged
- Ataxic (irregular) breathing
- May have cluster breathing
- Less typical crescendo-decrescendo pattern

### Treatment-Emergent CSA

**Definition:** Development or persistence of central apneas when OSA is treated with PAP

**Criteria:**
- Predominantly obstructive events on diagnostic study
- Significant central events emerge on PAP titration
- Central AHI ≥5 after obstructive events controlled

**Natural History:**
- 50-60% resolve spontaneously within 3 months
- Persistent in ~40%

## Treatment

### Addressing Underlying Cause

| Cause | Intervention |
|-------|-------------|
| Heart failure | GDMT (ACEi/ARB/ARNI, beta-blocker, diuretics, CRT) |
| Opioids | Taper/discontinue if possible |
| High altitude | Descent, acclimatization, acetazolamide |
| Stroke | Time, rehabilitation |

### PAP Therapies

**CPAP:**
- May help some CSA (maintains upper airway, increases FRC)
- Reduces AHI by ~50% in some CSA-CSB patients
- First-line for treatment-emergent CSA (often resolves)

**ASV (Adaptive Servo-Ventilation):**
\`\`\`
Mechanism:
- Learns patient's baseline breathing pattern
- Provides pressure support that varies:
  - Minimal support during normal breathing
  - Increased support during hypopneas
  - Full ventilatory support during apneas
- "Smooths out" periodic breathing

Efficacy:
- Effectively reduces AHI in most CSA
- Improves oxygenation and sleep quality
\`\`\`

**CAUTION: ASV in Heart Failure**
- SERVE-HF trial: ASV increased cardiovascular mortality in HFrEF (EF≤45%) with predominant CSA
- Contraindicated in HFrEF with EF≤45%
- Uncertain in HFpEF (ongoing studies)

### Other Therapies

**Supplemental Oxygen:**
- Reduces hypoxic ventilatory drive
- May decrease loop gain
- Modest efficacy (AHI reduction ~50%)
- Safe in heart failure

**Acetazolamide:**
- Carbonic anhydrase inhibitor
- Induces metabolic acidosis → Lowers apneic threshold
- Useful for high-altitude CSA
- May help some idiopathic CSA

**Phrenic Nerve Stimulation (remedē System):**
- Implantable device
- Stimulates diaphragm during detected apneas
- FDA-approved for moderate-severe CSA
- Alternative for ASV-ineligible patients`,
      keyTerms: [
        { term: 'loop gain', definition: 'Measure of ventilatory control system sensitivity; product of controller and plant gains' },
        { term: 'apneic threshold', definition: 'PaCO2 level below which breathing ceases during sleep; typically 2-6 mmHg below eupneic level' },
        { term: 'plant gain', definition: 'Effectiveness of ventilation at changing blood gas levels' },
        { term: 'controller gain', definition: 'Sensitivity of central and peripheral chemoreceptors to CO2/O2 changes' },
        { term: 'ASV', definition: 'Adaptive Servo-Ventilation; provides variable pressure support that adapts to breathing pattern to prevent apneas' },
        { term: 'Biots breathing', definition: 'Irregular breathing with periods of apnea, seen with medullary lesions or opioid toxicity' },
      ],
      clinicalNotes: 'Key clinical points: 1) Always screen HF patients for CSA-CSB - prevalence is 30-40%. 2) ASV is contraindicated in HFrEF with EF≤45% (SERVE-HF mortality signal). 3) Treatment-emergent CSA usually resolves - continue CPAP and reassess in 3 months. 4) Opioid-induced CSA often requires opioid reduction; PAP therapy is adjunctive. 5) Optimize underlying cardiac disease before attributing symptoms solely to CSA.',
    },
    4: {
      level: 4,
      summary: 'Central sleep apnea reflects ventilatory control instability with high loop gain, narrow CO2 reserve, and prolonged circulation time as key contributors. The association with heart failure involves bidirectional relationships affecting morbidity. Treatment is guided by underlying etiology, with ASV contraindicated in HFrEF due to SERVE-HF findings.',
      explanation: `## Advanced Pathophysiology

### Loop Gain Components

**Mathematical Framework:**
\`\`\`
Loop Gain (LG) = Controller Gain (Gc) × Plant Gain (Gp)

Controller Gain (Gc):
- Central chemoreceptor sensitivity to CO2
- Peripheral chemoreceptor sensitivity to O2/CO2
- Increased in heart failure (↑ carotid body sensitivity)

Plant Gain (Gp) = ΔPaCO2 / ΔVE
- Inversely related to FRC and lung CO2 stores
- Increased with:
  - Low FRC (pulmonary congestion)
  - Low metabolic rate
  - High baseline ventilation

LG > 1: Unstable, oscillating ventilation
LG < 1: Stable, damped response
\`\`\`

**Circulation Time:**
\`\`\`
Prolonged circulation time (heart failure):
- Delays detection of blood gas changes
- Chemical stimulus arrives "late" at chemoreceptors
- Promotes oscillatory behavior

Cycle length (CSB) correlates with circulation time:
Longer cycle = More severe heart failure
Typical: 45-90 seconds (lung-to-ear circulation ~20-40 sec)
\`\`\`

### CO2 Reserve and Apneic Threshold

\`\`\`
CO2 reserve = Eupneic PaCO2 - Apneic threshold PaCO2

Normal: ~4-6 mmHg buffer
CSA: ≤2 mmHg buffer (easily crossed)

Factors reducing CO2 reserve:
- Chronic hyperventilation (heart failure, altitude)
- Sensitive chemoreflex response
- Sleep state instability
\`\`\`

### State-Dependent Differences

| State | Apneic Threshold | Chemoreflex | CSA Risk |
|-------|------------------|-------------|----------|
| Wake | No apneic threshold | Intact | Low |
| NREM | Present, close to eupneic level | Attenuated | High |
| REM | Apneic threshold present but higher | Variable, attenuated | Lower |

CSA predominantly occurs during NREM sleep and sleep-wake transitions.

## CSA in Heart Failure: Detailed Mechanisms

### Bidirectional Relationship

\`\`\`
Heart Failure → CSA:
- ↑ PCWP → Pulmonary congestion → ↓ FRC → ↑ Plant gain
- ↓ CO → ↑ Circulation time → Feedback delay
- Neurohormonal activation → ↑ Chemoreflex sensitivity
- Rostral fluid shift → Upper airway edema (may add OSA component)

CSA → Heart Failure Progression:
- Intermittent hypoxia → Sympathetic activation → Catecholamines
- Intrathoracic pressure swings → ↑ LV afterload
- Arousals → Sleep fragmentation → Inflammation
- Atrial stretch → AF risk
- May worsen remodeling and outcomes
\`\`\`

### Prognostic Significance

**CSB in HF indicates:**
- More severe heart failure
- Higher mortality (independent predictor)
- Lower exercise capacity
- Higher BNP levels
- Greater sympathetic activation

**Debate:** Is CSA marker of severity or mediator of harm?
- SERVE-HF suggests treatment harms (or at least doesn't help) in HFrEF
- Observational data showing independent mortality risk
- May be adaptive in some contexts (intermittent hypoxia preconditioning?)

## Treatment Details

### SERVE-HF Trial Analysis

\`\`\`
Design:
- HFrEF (EF ≤45%) with predominant CSA (AHI ≥15, >50% central)
- ASV vs. medical therapy
- N = 1,325, median follow-up 31 months

Primary endpoint (time to first event):
- No difference: HR 1.13 (95% CI 0.97-1.31)

All-cause mortality:
- Increased with ASV: HR 1.28 (95% CI 1.06-1.55)

Cardiovascular mortality:
- Increased with ASV: HR 1.34 (95% CI 1.09-1.65)

Interpretation:
- ASV effectively reduced AHI but worsened outcomes
- Possible mechanisms:
  - Loss of CSB-mediated preconditioning
  - Positive pressure effects on failing heart
  - Suppression of sympathetic activation that may be compensatory
- Resulted in contraindication: ASV in HFrEF EF≤45% with CSA
\`\`\`

### Treatment Algorithm

\`\`\`
Central Sleep Apnea Diagnosed
|
├── Heart Failure?
│   ├── HFrEF (EF ≤45%)
│   │   ├── Optimize GDMT first
│   │   ├── Consider CPAP (may help some)
│   │   ├── Supplemental O2 (safe alternative)
│   │   ├── Phrenic nerve stimulation (remedē)
│   │   └── ASV CONTRAINDICATED
│   │
│   └── HFpEF or EF >45%
│       ├── Optimize GDMT
│       ├── CPAP or ASV (ASV not contraindicated but uncertain)
│       └── Consider phrenic nerve stimulation
│
├── Opioid-Induced?
│   ├── Taper/discontinue opioids (if possible)
│   ├── Transition to non-opioid pain management
│   └── If opioids required:
│       ├── CPAP (may help some)
│       ├── ASV (if not HFrEF)
│       ├── BiPAP-ST
│       └── Close monitoring for worsening
│
├── Treatment-Emergent?
│   ├── Continue CPAP (often resolves in 3 months)
│   ├── Reassess at 3 months
│   └── If persistent: ASV (if not HFrEF)
│
└── Primary/Idiopathic?
    ├── CPAP (trial)
    ├── ASV
    ├── Supplemental O2
    └── Acetazolamide (select cases)
\`\`\`

### Phrenic Nerve Stimulation (remedē System)

**Mechanism:**
- Implanted pulse generator (subcutaneous, like pacemaker)
- Stimulation lead placed on phrenic nerve (via transvenous approach)
- Sensing lead detects respiratory effort
- Stimulates diaphragm during detected central apneas

**Evidence:**
- Pivotal trial: 51% vs. 11% AHI reduction (treatment vs. control)
- Improved quality of life, daytime sleepiness
- No mortality signal (shorter follow-up than SERVE-HF)

**Indications:**
- Moderate-severe CSA
- Adequate phrenic nerve function
- Alternative when ASV contraindicated (HFrEF)

### Emerging Therapies

**Pharmacological:**
| Agent | Mechanism | Evidence |
|-------|-----------|----------|
| Acetazolamide | Lowers apneic threshold | Modest efficacy, useful high altitude |
| Theophylline | Respiratory stimulant | Limited evidence, side effects |
| Buspirone | May reduce loop gain | Early investigation |
| CO2 supplementation | Maintains PaCO2 above threshold | Research tool, impractical |`,
      keyTerms: [
        { term: 'CO2 reserve', definition: 'Difference between eupneic PaCO2 and apneic threshold; narrow reserve predisposes to CSA' },
        { term: 'SERVE-HF', definition: 'Trial demonstrating increased mortality with ASV in HFrEF patients with predominant CSA' },
        { term: 'remedē system', definition: 'FDA-approved implantable phrenic nerve stimulator for central sleep apnea' },
        { term: 'cycle length', definition: 'Duration of one Cheyne-Stokes cycle; correlates with circulation time and HF severity' },
        { term: 'preconditioning', definition: 'Hypothesis that intermittent hypoxia from CSB may confer some adaptive protection' },
      ],
      clinicalNotes: 'Critical clinical points: 1) Always check EF before prescribing ASV - it is CONTRAINDICATED in EF≤45% with CSA. 2) Treatment-emergent CSA often resolves; don\'t immediately switch to ASV. 3) In opioid-induced CSA, reducing opioid dose is the most important intervention. 4) Phrenic nerve stimulation is an option for HFrEF patients who cannot use ASV. 5) Optimal HF treatment (GDMT, CRT) often reduces CSA severity.',
    },
    5: {
      level: 5,
      summary: 'Central sleep apnea encompasses heterogeneous disorders unified by ventilatory control instability. Contemporary research focuses on phenotyping approaches, understanding the paradoxical mortality findings from SERVE-HF, developing individualized treatment strategies, and exploring the complex bidirectional relationships with cardiovascular disease.',
      explanation: `## Phenotyping and Precision Medicine

### CSA Endotypes

**High Loop Gain Phenotype:**
\`\`\`
Characteristics:
- Sensitive chemoreflexes
- Periodic breathing pattern (regular oscillations)
- Often hypocapnic baseline
- May overlap with OSA (some "OSA" driven by ventilatory instability)

Assessment methods:
- Research: CPAP dial-down technique, PAV loop gain
- Clinical surrogates:
  - Presence of periodic breathing
  - AHI reduction with O2 supplementation
  - Response to acetazolamide
\`\`\`

**Reduced Chemoreflex Sensitivity:**
\`\`\`
Seen in opioid-induced CSA
- Blunted CO2 response
- Erratic rather than periodic breathing
- May have ataxic/Biot's pattern
- Different mechanism than high loop gain CSA
\`\`\`

### SERVE-HF: Deep Dive

**Primary Hypotheses for Harm:**

1. **Loss of Adaptive Preconditioning:**
\`\`\`
Intermittent hypoxia → HIF-1α activation → Cardioprotection?
- Parallels with ischemic preconditioning
- Abolishing CSB may remove protective stimulus
- Controversial hypothesis
\`\`\`

2. **Hemodynamic Effects of ASV:**
\`\`\`
Positive pressure effects in failing heart:
- ↓ Preload (may be harmful if preload-dependent)
- ↓ Afterload (generally beneficial)
- Net effect may depend on hemodynamic phenotype
- May have been harmful in the low-EF population studied
\`\`\`

3. **Suppression of Compensatory Mechanisms:**
\`\`\`
Sympathetic activation in HF:
- Harmful long-term (remodeling, arrhythmia)
- But acutely maintains cardiac output
- Abruptly suppressing may cause decompensation
- Needs gradual titration?
\`\`\`

4. **Patient Selection Issues:**
\`\`\`
CSA as marker of severe disease:
- Patients with CSA have worse HF
- Treating the marker doesn't change underlying disease
- Mortality may have been similar regardless
- But the harm signal suggests active worsening
\`\`\`

**Post-SERVE-HF Landscape:**
- ASV contraindicated in HFrEF EF≤45% + predominant CSA
- HFpEF with CSA: Uncertain (excluded from SERVE-HF, ongoing studies)
- OSA with HFrEF: CPAP/APAP acceptable
- Mixed OSA/CSA in HF: Nuanced decision-making

### Advanced Diagnostic Approaches

**Loop Gain Measurement:**
\`\`\`
Research techniques:
1. CPAP dial-down: Withdraw CPAP during sleep, observe response
2. Proportional assist ventilation (PAV): Derive from respiratory mechanics
3. Inspired CO2 manipulation: Measure ventilatory response

Clinical application:
- Not routine in clinical practice
- May inform treatment selection in research settings
- Could guide phenotype-specific therapy
\`\`\`

**Distinguishing CSA Subtypes on PSG:**

| Feature | CSA-CSB | Opioid CSA | TECSA | Primary CSA |
|---------|---------|------------|-------|-------------|
| Pattern | Crescendo-decrescendo | Irregular/ataxic | Variable | Periodic |
| Cycle length | Long (45-90s) | Variable/irregular | Variable | Shorter |
| Associated conditions | HF, stroke | Opioid use | OSA on PAP | None |
| Hypercapnia | Absent (hypocapnic) | Present (often) | Absent | Absent |

### Treatment Frontiers

**Targeted Pharmacotherapy:**
\`\`\`
Acetazolamide:
- Mechanism: Carbonic anhydrase inhibition → Metabolic acidosis
- Effect: Lowers apneic threshold, widens CO2 reserve
- Dose: 250-500 mg at bedtime
- Evidence: Modest AHI reduction, helpful in altitude CSA
- Limitations: Paresthesias, metabolic effects

Buspirone:
- 5-HT1A agonist
- May reduce loop gain
- Phase 2 investigation for CSA
- Results pending

Oxygen:
- Reduces hypoxic ventilatory drive
- Lowers loop gain
- 2-4 L/min via nasal cannula
- 30-50% AHI reduction
- Safe in heart failure (unlike ASV)
\`\`\`

**Phrenic Nerve Stimulation:**
\`\`\`
remedē System details:
- Battery life: 5+ years
- Implant procedure: 2-3 hours, transvenous
- Activation: 1-2 months post-implant
- Programming: Adjustable stimulation parameters

Outcomes:
- AHI reduction: ~50%
- Improvement in sleepiness, QoL
- No mortality signal (but smaller/shorter than SERVE-HF)
- Fills gap for HFrEF patients who cannot use ASV
\`\`\`

### Special Considerations

**Complex Sleep Apnea (Treatment-Emergent CSA):**
\`\`\`
Management approach:
1. Continue CPAP initially (persists in only ~40%)
2. Optimize CPAP pressure (avoid over-titration)
3. Consider APAP (auto-adjusts, may help)
4. Repeat PSG at 3 months if persistent
5. ASV if truly persistent (after HF exclusion)

Predictors of persistence:
- Higher baseline AHI
- Pre-existing central events
- Male sex
- Coronary artery disease
\`\`\`

**Opioid Management:**
\`\`\`
Opioid dose reduction:
- Safest and most effective intervention
- 25-50% reduction often significantly reduces CSA
- Requires multidisciplinary pain management
- May need opioid rotation or non-opioid alternatives

If opioids cannot be reduced:
- PAP therapy (CPAP, BiPAP-ST, or ASV if not HFrEF)
- Close monitoring
- Avoid concomitant sedatives
- Educate on overdose risk
\`\`\`

**Heart Failure Management Integration:**
\`\`\`
GDMT effects on CSA:
- ACEi/ARB/ARNI: May reduce CSA severity
- Beta-blockers: Variable effects
- Diuretics: ↓ Congestion → ↓ Plant gain → ↓ CSA
- CRT: Often significantly improves CSA

Integrated approach:
1. Optimize HF therapy first
2. Reassess CSA severity after optimization
3. Many patients improve sufficiently with GDMT alone
4. Consider CSA-specific therapy for persistent symptoms
\`\`\`

### Research Directions

**Biomarker Development:**
- BNP/NT-proBNP: Correlate with CSA severity in HF
- Novel markers of central respiratory control
- Predictors of ASV benefit vs. harm

**Phenotype-Specific Therapy:**
\`\`\`
Conceptual framework:
- High loop gain: Oxygen, acetazolamide, potentially buspirone
- Narrow CO2 reserve: Stabilize with PAP or CO2
- Prolonged circulation time: Optimize cardiac output (GDMT, CRT)
- Impaired arousal: May benefit from stabilizing sleep state

Future: Match treatment to predominant mechanism
\`\`\`

**Unanswered Questions:**
1. Who benefits from CSA treatment in HF? (phenotype-specific)
2. What is the mechanism of SERVE-HF mortality?
3. Is CSA protective or harmful in HF (or both)?
4. Can we predict response to different therapies?
5. What is the role of ASV in HFpEF?`,
      keyTerms: [
        { term: 'complex sleep apnea', definition: 'Alternative term for treatment-emergent CSA; central apneas appearing when OSA is treated' },
        { term: 'ataxic breathing', definition: 'Irregular breathing pattern without clear periodicity, seen in opioid-induced CSA and medullary lesions' },
        { term: 'HIF-1alpha', definition: 'Hypoxia-inducible factor 1-alpha; transcription factor activated by intermittent hypoxia' },
        { term: 'PAV loop gain', definition: 'Research technique using proportional assist ventilation to measure loop gain' },
        { term: 'preconditioning hypothesis', definition: 'Theory that intermittent hypoxia from CSB may provide adaptive cardioprotection' },
      ],
      clinicalNotes: 'Advanced clinical pearls: 1) Not all central apneas are pathological - some occur normally at sleep-wake transition. 2) Treatment-emergent CSA may reflect unmasking of high loop gain; consider phenotyping. 3) In opioid-induced CSA, even 25-50% dose reduction can markedly improve AHI. 4) The SERVE-HF mortality signal was not seen with CPAP in CANPAP trial - modality matters. 5) Phrenic nerve stimulation offers a non-PAP option for CSA in HFrEF. 6) Always re-evaluate CSA severity after optimizing HF treatment - many patients improve substantially.',
    },
  },

  media: [
    {
      id: 'csa-csb-pattern',
      type: 'diagram',
      filename: 'csa-csb-pattern.svg',
      title: 'Cheyne-Stokes Breathing Pattern',
      description: 'PSG tracing showing crescendo-decrescendo breathing with central apneas',
    },
    {
      id: 'loop-gain-diagram',
      type: 'diagram',
      filename: 'loop-gain-diagram.svg',
      title: 'Loop Gain in Ventilatory Control',
      description: 'Diagram illustrating controller and plant gains in respiratory control',
    },
    {
      id: 'csa-treatment-algorithm',
      type: 'diagram',
      filename: 'csa-treatment-algorithm.svg',
      title: 'CSA Treatment Algorithm',
      description: 'Flowchart for treatment selection based on CSA etiology',
    },
  ],

  citations: [
    {
      id: 'serve-hf',
      type: 'article',
      title: 'Adaptive servo-ventilation for central sleep apnea in systolic heart failure',
      authors: ['Cowie, M.R.', 'Woehrle, H.', 'Wegscheider, K.'],
      source: 'New England Journal of Medicine',
      chapter: '373:1095-1105',
    },
    {
      id: 'javaheri-csa-hf',
      type: 'article',
      title: 'Central sleep apnea',
      authors: ['Javaheri, S.', 'Dempsey, J.A.'],
      source: 'Comprehensive Physiology',
      chapter: '3:141-163',
    },
    {
      id: 'aasm-csa-treatment',
      type: 'article',
      title: 'Treatment of Central Sleep Apnea Syndromes in Adults',
      authors: ['Aurora, R.N.', 'Chowdhuri, S.', 'Ramar, K.'],
      source: 'Journal of Clinical Sleep Medicine',
      chapter: '8(6):625-636',
    },
  ],

  crossReferences: [
    { targetId: 'condition-obstructive-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Obstructive Sleep Apnea' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'see-also', label: 'Heart Failure' },
    { targetId: 'diagnostic-sleep-studies', targetType: 'topic', relationship: 'related', label: 'Sleep Studies' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'nervous'],
    topics: ['sleep medicine', 'pulmonology', 'cardiology', 'neurology'],
    keywords: ['central sleep apnea', 'CSA', 'Cheyne-Stokes', 'heart failure', 'loop gain', 'ASV'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology', 'cardiology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default centralSleepApnea;
