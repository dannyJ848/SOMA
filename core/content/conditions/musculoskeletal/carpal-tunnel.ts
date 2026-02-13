/**
 * Carpal Tunnel Syndrome - Musculoskeletal Conditions
 *
 * Comprehensive content on median nerve compression at the wrist,
 * including diagnosis, treatment, and surgical considerations.
 */

import { EducationalContent } from '../../types';

export const carpalTunnel: EducationalContent = {
  id: 'conditions-carpal-tunnel',
  type: 'condition',
  name: 'Carpal Tunnel Syndrome',
  nameEs: 'Síndrome del Túnel Carpiano',
  alternateNames: ['CTS', 'Median Neuropathy at the Wrist', 'Wrist Compression Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'Carpal tunnel syndrome is a condition that causes numbness, tingling, and pain in your hand and arm due to pressure on a nerve in your wrist.',
      explanation: `## What Is Carpal Tunnel Syndrome?

Carpal tunnel syndrome (CTS) happens when a nerve in your wrist gets squeezed. This nerve is called the median nerve, and it passes through a narrow tunnel in your wrist called the carpal tunnel.

**What happens in CTS:**
- The median nerve gets compressed (squeezed)
- This causes tingling, numbness, and pain
- Symptoms usually affect the thumb, index, and middle fingers
- Symptoms often worse at night

## Symptoms

**Common symptoms of CTS:**
- Numbness and tingling in the thumb, index, and middle fingers
- Shock-like sensations that travel into the fingers
- Pain that may travel up the arm
- Weakness when gripping things
- Dropping objects
- Symptoms worse at night or when waking up
- Shaking the hand helps relieve symptoms

**What the carpal tunnel is:**
- A small passageway in your wrist
- Contains the median nerve and tendons
- About the size of your thumb
- Roof is formed by a strong ligament

## What Causes CTS?

**Common causes:**
- Repetitive hand movements (typing, assembly work)
- Wrist position (flexing or extending for long periods)
- Pregnancy (fluid retention)
- Health conditions like diabetes, rheumatoid arthritis, thyroid problems
- Wrist injuries or fractures
- Family history (smaller carpal tunnels can run in families)
- Being overweight

## Diagnosis

**How doctors diagnose CTS:**
- Ask about your symptoms
- Examine your hand and wrist
- Test the feeling in your fingers
- Check your hand strength
- Tap on your wrist (Tinel sign - may cause tingling)
- Bend your wrist (Phalen test - may bring on symptoms)
- Nerve conduction studies (measures nerve signals)

## Treatment

**Conservative treatments (tried first):**
- Wearing a wrist splint, especially at night
- Resting the hand and avoiding aggravating activities
- Stretching exercises
- Nonsteroidal anti-inflammatory medications (ibuprofen, naproxen)
- Treating underlying medical conditions
- Corticosteroid injections

**Surgery:**
- Recommended if conservative treatments don't help
- Called "carpal tunnel release"
- Cuts the ligament pressing on the nerve
- Relieves pressure on the median nerve
- Usually done as outpatient surgery
- Recovery takes several weeks to months

## Recovery and Outlook

**With treatment:**
- Most people get significant relief
- Night symptoms often improve first
- Hand strength may take months to return
- Some numbness may persist if nerve was compressed for a long time

## Prevention

**Tips to reduce risk:**
- Take breaks from repetitive activities
- Keep your wrists in a neutral position
- Use proper ergonomics at work
- Stretch your hands and wrists regularly
- Maintain a healthy weight
- Manage underlying health conditions

**Workplace modifications:**
- Adjust keyboard and mouse position
- Use wrist rests carefully (don't press on them)
- Consider voice recognition software
- Take frequent micro-breaks`,
      keyTerms: [
        { term: 'carpal tunnel', definition: 'Small passageway in the wrist containing the median nerve and tendons' },
        { term: 'median nerve', definition: 'The nerve that provides feeling to the thumb, index, middle fingers and controls thumb muscles' },
        { term: 'numbness', definition: 'Loss of feeling or sensation in a part of the body' },
        { term: 'tingling', definition: 'Pins and needles sensation in the hands or fingers' },
        { term: 'splint', definition: 'A support worn on the wrist to keep it in a neutral position' },
      ],
      analogies: [
        'The carpal tunnel is like a crowded hallway - when there\'s too much pressure, people (nerves) get squeezed and can\'t function properly.',
        'Think of the median nerve like a garden hose - when it\'s compressed, water (signals) can\'t flow through properly.',
        'Carpal tunnel is like a subway tunnel during rush hour - too much crowding causes problems.',
      ],
      examples: [
        'An office worker who wakes up at night with tingling in their thumb and fingers may have carpal tunnel syndrome.',
        'A pregnant woman who develops hand numbness in the third trimester likely has pregnancy-related CTS.',
        'A factory worker who performs repetitive motions all day and develops hand weakness and dropping objects may have CTS.',
      ],
      patientCounselingPoints: [
        'Wearing a wrist splint at night is one of the most effective simple treatments - try it for 2-4 weeks before considering other options.',
        'Avoid resting your wrists on hard surfaces while typing - this increases pressure in the carpal tunnel.',
        'Take frequent short breaks from repetitive activities - even 30 seconds of stretching every 30 minutes helps.',
        'If you have diabetes, keeping your blood sugar well controlled can help prevent CTS from getting worse.',
        'Don\'t ignore symptoms - early treatment leads to better outcomes and prevents permanent nerve damage.',
      ],
    },
    2: {
      level: 2,
      summary: 'Carpal tunnel syndrome is a median neuropathy at the wrist causing pain, paresthesias, and weakness, diagnosed clinically and confirmed with electrodiagnostic studies, treated with splinting, injections, or surgery.',
      explanation: `## Anatomy

**The Carpal Tunnel:**
- Bounded by carpal bones (floor and walls)
- Roof: Transverse carpal ligament (flexor retinaculum)
- Contents: 9 flexor tendons + median nerve
- Narrowest cross-sectional area at distal wrist crease

**Median Nerve:**
- Provides motor: Thenar muscles (APB, OP, FPB)
- Provides sensory: Palmar aspect of thumb, index, middle, radial half of ring finger
- Does NOT provide sensation to the palm (palmar cutaneous branch exits proximal to tunnel)

## Pathophysiology

**Mechanisms of Compression:**
\`\`\`
Increased pressure within carpal tunnel (>30 mmHg):
- Decreased nerve blood flow (ischemia)
- Nerve conduction slowing
- Demyelination
- Axonal loss (if chronic)

Causes of increased pressure:
- Tenosynovitis of flexor tendons
- Space-occupying lesions (ganglion, lipoma)
- Fluid retention (pregnancy, hypothyroidism)
- Anatomic variant (small tunnel)
- Wrist positioning (flexion/extension increases pressure)
\`\`\`

## Clinical Presentation

**Symptoms:**
\`\`\`
Sensory (most common initial symptom):
- Paresthesias: Tingling, pins-and-needles
- Numbness in median distribution
- Nocturnal symptoms (nighttime awakening)
- Worse with gripping, driving, reading
- Hand shaking relieves symptoms ("flick sign")

Motor (later finding):
- Weakness of grip
- Clumsiness, dropping objects
- Difficulty with buttons, zippers
- Thenar atrophy (advanced, chronic)

Pain:
- Wrist pain, may radiate to forearm
- Rarely radiates above elbow
- May be described as "aching"
\`\`\`

**Risk Factors:**
\`\`\`
Non-modifiable:
- Female sex (3:1 female:male ratio)
- Age (peak incidence 40-60)
- Genetics (anatomic variants)
- Anatomic conditions (short stature, square wrist)

Modifiable:
- Repetitive hand use
- Vibrating tool use
- Poor wrist ergonomics
- Obesity
- Smoking (reduces blood flow)

Medical conditions:
- Diabetes mellitus
- Pregnancy (usually resolves postpartum)
- Hypothyroidism
- Rheumatoid arthritis
- Amyloidosis
- Acromegaly
- Renal failure (dialysis-associated)
\`\`\`

## Physical Examination

**Key Manuevers:**

\`\`\`
Tinel sign:
- Tap over carpal tunnel at wrist
- Positive: Tingling in median distribution
- Sensitivity: ~50%, Specificity: ~70%

Phalen maneuver:
- Hold wrists in flexion 60 seconds
- Positive: Reproduction of symptoms
- Sensitivity: ~75%, Specificity: ~50%

Carpal compression test:
- Direct pressure on carpal tunnel
- Positive: Symptoms within 30 seconds
- Better sensitivity/specificity than Tinel/Phalen

Thenar atrophy:
- Indicates chronic, severe CTS
- Flatten of thenar eminence
- Thumb opposition weakness
- Poor prognostic sign

Sensory examination:
- Two-point discrimination (>6 mm abnormal)
- Monofilament testing
- Compare median vs ulnar distribution
\`\`\`

## Diagnostic Testing

**Electrodiagnostic Studies (EMG/NCS):**

\`\`\`
Nerve Conduction Studies:
- Prolonged median distal sensory latency
- Prolonged median distal motor latency
- Sensitivity: 85-90%
- Specificity: 90-95%
- Compare median to ulnar (comparative studies)

EMG:
- Assess for thenar muscle denervation
- Fibrillations, positive sharp waves
- Indicates axonal loss
- Severe disease
\`\`\`

**Ultrasound:**
- Measure median nerve cross-sectional area
- Flattening ratio
- Dynamic assessment
- Increasingly used alternative to EMG

**MRI:**
- Not first-line
- Consider if space-occupying lesion suspected
- Pre-operative planning for revision surgery

## Differential Diagnosis

**Conditions mimicking CTS:**
- Cervical radiculopathy (C6-C7)
- Pronator syndrome (proximal median nerve compression)
- Ulnar neuropathy
- Thoracic outlet syndrome
- Peripheral neuropathy
- De Quervain tenosynovitis

**Distinguishing features:**
- C6 radiculopathy: Neck pain, symptoms above wrist
- Pronator syndrome: Forearm pain, no nocturnal symptoms
- Ulnar neuropathy: Little and ring finger symptoms

## Treatment

**Conservative Management (Mild-Moderate CTS):**

\`\`\`
Wrist splinting:
- Neutral position (0 degrees)
- Wear at night (minimum)
- Can also wear during aggravating activities
- Trial: 4-6 weeks
- Success: 30-50% for mild CTS

Activity modification:
- Reduce repetitive wrist motions
- Wrist neutral position during activities
- Microbreaks every 30-60 minutes
- Ergonomic assessment

Medications:
- NSAIDs: Limited evidence
- Oral steroids: Short-term benefit
- Vitamin B6: No proven benefit
- Diuretics: Limited benefit

Corticosteroid injection:
- 60-80% initial success
- Symptoms often recur after 1 year
- Maximum 2-3 injections
- Alternative to surgery in selected patients
\`\`\`

**Surgical Indications:**
\`\`\`
Absolute indications:
- Clinical evidence of thenar motor loss
- EMG evidence of axonal loss
- Failure of conservative management (3-6 months)
- Severe symptoms with significant functional limitation

Relative indications:
- Recurrent symptoms after successful injection
- Patient preference
- Bilateral severe CTS
\`\`\``,
      keyTerms: [
        { term: 'paresthesia', definition: 'Abnormal sensation (tingling, prickling) without apparent cause' },
        { term: 'thenar eminence', definition: 'Fleshy part of the palm at the base of the thumb; contains muscles controlled by median nerve' },
        { term: 'Tinel sign', definition: 'Tingling sensation in response to tapping over a nerve; positive in CTS' },
        { term: 'Phalen maneuver', definition: 'Test for CTS involving wrist flexion for 60 seconds' },
        { term: 'EMG', definition: 'Electromyography; test of muscle electrical activity to detect nerve damage' },
        { term: 'NCS', definition: 'Nerve conduction study; measures how fast electrical signals move through nerves' },
      ],
      analogies: [
        'The carpal tunnel is like an hourglass - the narrow middle portion is where problems arise.',
      ],
      patientCounselingPoints: [
        'Splinting works best if worn consistently at night - it keeps your wrist from bending while you sleep.',
        'CTS from pregnancy often resolves after delivery - consider splinting rather than surgery during pregnancy.',
        'Don\'t wait too long for treatment if you have weakness or muscle wasting - these are signs of nerve damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'CTS diagnosis integrates clinical findings with electrodiagnostic studies, and treatment progresses from conservative measures to surgical release, with outcomes dependent on severity and duration of symptoms.',
      explanation: `## Comprehensive Diagnosis

**Diagnostic Criteria:**

\`\`\`
Clinical diagnosis (typical case):
- Nocturnal paresthesias in median distribution
- Thenar weakness/atrophy (in severe cases)
- Positive provocative maneuvers
- Exclusion of alternative diagnoses

Electrodiagnostic confirmation:
- Mild: Prolonged sensory latency only
- Moderate: Sensory and motor latency prolongation
- Severe: Sensory response absent, motor prolongation, EMG denervation
- Very severe: Absent sensory and motor responses

Clinical-electrodiagnostic correlation:
- 10-25% clinical CTS with normal EMG (mild)
- 15-30% EMG CTS without clinical symptoms (subclinical)
- Treatment decisions based on BOTH clinical and EDx findings
\`\`\`

**Grading Severity:**

| Grade | Clinical | EDx Findings | Treatment Implication |
|-------|----------|--------------|---------------------|
| Mild | Intermittent symptoms | Prolonged sensory latency | Conservative |
| Moderate | Daily symptoms, some weakness | Sensory + motor slowing | Conservative or surgery |
| Severe | Constant symptoms, atrophy | Denervation on EMG | Surgery recommended |
| Very severe | Atrophy, profound weakness | Absent responses | Urgent surgery (months) |

**Electrodiagnostic Interpretation:**
\`\`\`
Sensory NCS:
- Normal distal latency: ≤3.5 ms
- Mild CTS: 3.6-4.4 ms
- Moderate CTS: >4.4 ms
- Severe CTS: Absent response

Motor NCS:
- Normal distal latency: ≤4.2 ms
- Prolongation indicates moderate or worse

Median vs Ulnar comparison:
- Palmar mixed studies
- Sensitive for mild CTS
- Difference >0.4 ms abnormal

Needle EMG:
- Abnormal spontaneous activity in APB
- Fibrillations, positive sharp waves
- Indicates axonal loss
- Prognostic significance
\`\`\`

## Conservative Treatment Details

**Splinting:**
- Position: Neutral (0°) or slight extension (<10°)
- Duration: Minimum 4-6 weeks trial
- Night use: Essential for nocturnal symptoms
- Day use: During aggravating activities
- Custom vs prefabricated: Custom more effective, prefabricated more practical

**Corticosteroid Injection:**

\`\`\`
Technique:
- Palmaris longus or ulnar approach
- 1 cm proximal to wrist crease
- Into carpal tunnel, NOT nerve
- 40 mg methylprednisolone (or equivalent)

Success rates:
- 70-80% initial improvement
- 50% still improved at 1 year
- 30% still improved at 2 years
- Better for mild-moderate CTS

Complications:
- Nerve injury (rare if proper technique)
- Flare reaction (transient)
- Skin depigmentation, atrophy (rare)
- Infection (very rare)

Repeat injections:
- Maximum 2-3 injections
- Consider surgery after failed injection
\`\`\`

**Therapeutic Considerations:**
\`\`\`
Ultrasound therapy: Limited evidence
- May provide short-term symptom relief
- Not definitive treatment

Yoga, carpal bone mobilization: Moderate evidence
- Symptom improvement
- May be alternative to surgery for some

Steroid-sparing approaches:
- Activity modification
- Ergonomic assessment
- Weight loss
- Treat contributing conditions
\`\`\`

## Surgical Treatment

**Open Carpal Tunnel Release:**

\`\`\`
Technique:
- 2-3 cm incision over carpal tunnel
- Identify and protect palmar cutaneous branch
- Divide transverse carpal ligament
- Inspect for space-occupying lesion
- Skin closure

Advantages:
- Direct visualization
- Lower cost
- Can be done with local anesthesia
- Faster setup

Disadvantages:
- Larger incision
- Potentially longer recovery
- Pillar pain (incision site tenderness)
\`\`\`

**Endoscopic Carpal Tunnel Release:**

\`\`\`
Single-portal technique:
- Small incision at wrist
- Endoscopic visualization
- Blade or scissors divides ligament

Two-portal technique:
- Incisions at wrist and palm
- Endoscope with blade device

Advantages:
- Smaller incisions
- Faster return to work (some studies)
- Less pillar pain

Disadvantages:
- Higher cost
- Steep learning curve
- Risk of incomplete release
- Risk of nerve injury (blind technique)
\`\`\`

**Outcomes:**

\`\`\`
Success rates:
- 90-95% good-excellent results
- Better outcomes with:
  * Shorter symptom duration
  * Younger age
  * Clear clinical diagnosis
  * Normal EMG (paradoxically)
  * No workers' compensation claim

Symptom resolution:
- Immediate: Night symptoms
- 2-4 weeks: Pain relief
- 2-3 months: Numbness improves
- 6-12 months: Strength recovers
  * May be incomplete if axonal loss
  * Thenar atrophy may be permanent

Return to work:
- Light duty: 1-2 weeks
- Heavy duty: 4-6 weeks
- Modified: 2-4 weeks
\`\`\`

**Complications:**

\`\`\`
Surgical complications (2-5% overall):
- Incomplete release (1-2%)
- Nerve injury (1%)
  * Median nerve: Transection, neurapraxia
  * Palmar cutaneous branch: Numbness at incision
  * Ulnar nerve: Rare
- Tendon injury (rare)
- Infection (<1%)
- Hematoma
- Wound dehiscence
- Complex regional pain syndrome (<1%)

Pillar pain:
- Incision site tenderness
- Lasts 2-6 months
- Resolves in most
- Therapy: Desensitization

Scar tenderness:
- Most improve with time
- Scar massage
- Desensitization exercises

Recurrence:
- 5-10% develop recurrent symptoms
- Causes: Incomplete release, scar tissue, tenosynovitis
- Treatment: Revision surgery (lower success rates)
\`\`\`

## Special Populations

**Pregnancy-Related CTS:**
- Incidence: 30-60% of pregnant women
- Mechanism: Fluid retention
- Most resolve postpartum
- Treatment: Splinting first-line
- Surgery: Rarely needed, postpartum if persistent

**Diabetes-Related CTS:**
- Higher prevalence than general population
- May be bilateral
- Peripheral neuropathy complicates diagnosis
- Surgical outcomes: Good but may be less predictable
- Increased risk of postoperative infection

**Workers' Compensation:**
- More severe symptoms at presentation
- Worse outcomes after surgery
- Delayed return to work
- Higher dissatisfaction rate
- Non-medical factors influence outcomes`,
      keyTerms: [
        { term: 'pillar pain', definition: 'Tenderness at the base of the palm after carpal tunnel surgery' },
        { term: 'palmar cutaneous branch', definition: 'Sensory branch of median nerve exiting before carpal tunnel; not affected in CTS' },
        { term: 'transverse carpal ligament', definition: 'Strong ligament forming roof of carpal tunnel; divided in surgery' },
        { term: 'complex regional pain syndrome', definition: 'Rare pain syndrome after surgery with disproportionate pain, swelling, skin changes' },
      ],
      clinicalNotes: 'Proper splint position is neutral (0°), NOT extended. Excessive extension can increase carpal tunnel pressure. Endoscopic release has faster recovery but higher cost and steeper learning curve.',
    },
    4: {
      level: 4,
      summary: 'Complex CTS management includes distinguishing overlapping neuropathies, surgical decision-making in atypical presentations, managing recurrences, and addressing work-related and psychological factors affecting outcomes.',
      explanation: `## Atypical and Challenging Presentations

**Double Crush Syndrome:**

\`\`\`
Concept:
- Median nerve compressed at multiple sites
- Cervical spine + carpal tunnel
- Cervical + pronator + carpal tunnel
- Proximal compression distalizes susceptibility

Clinical implications:
- Worse outcomes with carpal tunnel release alone
- Must address all compression sites
- Higher recurrence risk
- Consider cervical evaluation with CTS

Diagnostic approach:
- EMG with cervical paraspinals
- MRI cervical spine if indicated
- Clinical correlation of proximal symptoms
\`\`\`

**Failed Primary Carpal Tunnel Release:**

\`\`\`
Causes of persistent symptoms:
- Incomplete release (50-60% of revisions)
- Incorrect diagnosis (20-30%)
- Recurrent compression (10-20%)
- Postoperative scar tethering (10-15%)
- Complex regional pain syndrome (<5%)

Evaluation:
- Repeat EMG/NCS
- Ultrasound for median nerve cross-sectional area
- MRI to assess for space-occupying lesion
- Evaluate cervical spine
- Rule out pronator syndrome

Revision surgery:
- Indications: Clear incomplete release, recurrent symptoms
- Success: 60-80% (lower than primary)
- Approach: Open revision, neurolysis
- Consider: Fat graft, fascial patch for nerve protection
\`\`\`

**Proximal Median Neuropathy (Pronator Syndrome):**

\`\`\`
Compression sites:
- Ligament of Struthers
- Lacertus fibrosus (bicipital aponeurosis)
- Pronator teres
- Sublimis bridge

Clinical distinction from CTS:
- Forearm pain (vs hand symptoms)
- No nocturnal symptoms
- Negative Tinel/Phalen
- Pain with resisted forearm pronation
- Positive pronator compression test

Treatment:
- Stretching, activity modification (first-line)
- Surgical decompression if refractory
- May coexist with CTS (double crush)
\`\`\`

## Bilateral and Sequential Carpal Tunnel Release

**Staged vs Simultaneous:**

\`\`\`
Staged (preferred):
- One hand at a time
- Allows functional hand during recovery
- Second surgery after 4-6 weeks
- Preferred for most patients

Simultaneous:
- Both hands same surgery
- No recovery period for second hand
- Major limitation: 4-6 weeks
- Consider for:
  * Severe bilateral symptoms
  * Patient preference
  * Logistics (single anesthesia, single recovery)
\`\`\`

## Work-Related CTS

**Occupational Risk Assessment:**

\`\`\`
Strong evidence for:
- Repetitive hand use
- High force gripping
- Vibration exposure
- Extreme wrist postures

Job categories:
- Data entry/typing
- Assembly line work
- Construction (vibrating tools)
- Meat/poultry processing
- Dental hygiene
- Musicians

Workers' compensation considerations:
- Longer duration before presentation
- Worse symptoms at diagnosis
- Higher prevalence of depression
- Worse outcomes with all treatments
- Lower return-to-work rates
- Non-financial factors important
\`\`\`

**Prevention and Accommodation:**

\`\`\`
Primary prevention:
- Engineering controls (ergonomic tools)
- Administrative controls (job rotation)
- Personal protective equipment (gloves with vibration damping)
- Education on early symptoms

Job modification:
- Reduce repetition
- Reduce force requirements
- Improve wrist ergonomics
- Microbreaks every 30-60 minutes
- Task rotation

Return to work:
- Graduated return
- Modified duties initially
- Works restrictions for 4-6 weeks
- Job accommodation if needed
\`\`\`

## Surgical Decision-Making in Complex Cases

**Severe CTS with Axonal Loss:**

\`\`\`
Clinical presentation:
- Thenar atrophy
- Weak thumb opposition
- Two-point discrimination >6 mm
- Absent thenar EMG potentials

Timing concerns:
- Chronic denervation: Less likely to recover
- BUT: Surgery still indicated
- Earlier surgery = better outcomes
- Don't wait for "perfect" EMG recovery

Expectations:
- Motor recovery: 6-18 months
- Incomplete recovery common
- Opponensplasty possible if needed
- Sensory recovery better than motor
\`\`\`

**Mild CTS with Prolonged Symptoms:**

\`\`\`
Dilemma:
- Severe symptoms but mild EMG
- EMG may not capture intermittent compression
- Clinical presentation drives treatment

Approach:
- If symptoms disabling: Surgery reasonable
- If symptoms tolerable: Continue conservative
- Shared decision-making essential
- EMG doesn't replace clinical judgment
\`\`\`

## Emerging Techniques and Controversies

**Ultrasound-Guided Techniques:**
- Hydrodissection with fluid
- Ultrasound-guided steroid injection
- Percutaneous balloon catheter release (emerging)
- Early data promising but limited

**Alternative Decompression Methods:**
- Mini-open release (smaller incision)
- Knife-needle technique (controversial)
- Limited long-term data

**Platelet-Rich Plasma:**
- Limited evidence
- Experimental
- Not standard of care`,
      keyTerms: [
        { term: 'double crush', definition: 'Nerve compression at multiple sites; proximal compression increases distal susceptibility' },
        { term: 'pronator syndrome', definition: 'Proximal median nerve compression at elbow; distinguished from CTS by forearm pain' },
        { term: 'neurolysis', definition: 'Surgical freeing of nerve from surrounding scar tissue' },
        { term: 'opponensplasty', definition: 'Tendon transfer to restore thumb opposition after severe median nerve injury' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Clinical diagnosis trumps EMG - treat the patient, not the test

2. Bilateral CTS is common - evaluate both hands, even if only one symptomatic

3. Workers' compensation patients have worse outcomes - address psychosocial factors

4. Revision surgery has lower success rates - ensure correct diagnosis before reoperating

5. Pronator syndrome coexists with CTS - consider proximal evaluation if atypical presentation

6. Diabetics may have worse outcomes - set appropriate expectations

7. Time to recovery varies widely - most patients return to light duties in 1-2 weeks

8. Night symptoms resolve first - motor recovery takes much longer

9. Complete release is essential - incomplete release is the most common reason for revision

10. Psychological factors affect outcomes - screen for depression, catastrophizing`,
    },
    5: {
      level: 5,
      summary: 'Advanced CTS care implements electrodiagnostic stratification, ultrasound-guided diagnosis and treatment, personalized surgical approaches, and multidisciplinary management while understanding limitations of current evidence and emerging techniques.',
      explanation: `## Advanced Diagnostic Techniques

**High-Resolution Ultrasound:**

\`\`\`
Diagnostic accuracy:
- CSA cutoff: 10-12 mm² at pisiform
- Sensitivity: 80-90%
- Specificity: 85-95%
- Comparable to electrodiagnostics
- Advantages: Dynamic, painless, no radiation

Measurements:
- Cross-sectional area at multiple levels
- Flattening ratio
- Vascularity (Doppler)
- Median nerve mobility

Role in practice:
- Alternative when EMG contraindicated
- Guide steroid injections
- Preoperative planning
- Postoperative assessment
- Complement (not replace) EMG
\`\`\`

**Electrodiagnostic Controversies:**

\`\`\`
Limitations:
- False negatives in mild CTS (10-25%)
- False positives in asymptomatic people (15-30%)
- Operator dependence
- Patient discomfort
- Cost and access issues

Clinical correlation needed:
- Sensory latency prolongation without symptoms: Observe
- Symptoms with normal EMG: May still be CTS
- EMG severity doesn't perfectly predict outcomes
- Serial EMG rarely helpful

Other conditions confounding EMG:
- Polyneuropathy (diabetic, CIDP)
- Cervical radiculopathy
- Martin-Gruber anastomosis (normal variant)
- Riche-Cannieu anastomosis (rare)
\`\`\`

## Evidence-Based Surgical Approaches

**Open vs Endoscopic: The Evidence**

\`\`\`
Meta-analyses findings:
- Similar clinical outcomes at 1 year
- Similar symptom resolution rates
- Similar complication rates (early controversy resolved)
- Endoscopic: Faster return to work (1-3 weeks)
- Endoscopic: Higher cost, steeper learning curve

Current positioning:
- Both techniques valid
- Surgeon experience more important than technique
- Patient preference reasonable factor
- Endoscopic: Consider for laborers needing faster return
- Open: Standard approach, lower cost

Learning curve:
- Endoscopic: 50-100 cases for proficiency
- Open: 20-30 cases for proficiency
- Surgical outcomes correlate with surgical volume
\`\`\`

**Pain Management and Rehabilitation:**

\`\`\`
Postoperative pain management:
- Opioids generally NOT needed
- NSAIDs first-line
- Ice/elevation
- Early gentle motion
- Formal therapy not routinely needed

Therapy indications:
- Stiffness beyond 4 weeks
- Scar tenderness (pillar pain)
- Weakness or delayed recovery
- Complex regional pain syndrome prophylaxis

Desensitization:
- Massage (scar desensitization)
- Texture rubbing
- Tendon gliding exercises
- Progressive loading
\`\`\`

## Special Situations

**Revision Carpal Tunnel Surgery:**

\`\`\`
Surgical approach:
- Open approach mandatory
- Extensive neurolysis of median nerve
- Identify recurrent motor branch
- Release all potential compression sites
- Consider: Fat graft, vein wrap, fascial patch
- Possible internal neurolysis (controversial)

Outcomes:
- 60-80% good-excellent (vs 90-95% primary)
- Better with clear incomplete release
- Worse with multiple prior surgeries
- Manage expectations

Reasons for failure:
- Incomplete release (most common)
- Incorrect original diagnosis
- Scar tethering
- Recurrent tenosynovitis
- Peripheral neuropathy progression
- Complex regional pain syndrome
\`\`\`

**Simultaneous Bilateral Release:**

\`\`\`
Indications:
- Severe bilateral symptoms
- Bilateral EMG evidence of axonal loss
- Patient preference after counseling
- Logistical considerations

Contraindications:
- Heavy manual labor (need one functional hand)
- Significant comorbidities
- Patient inability to cope with bilateral limitation

Approach:
- Preoperative planning essential
- Same setting (one anesthesia)
- Both hands prepped and draped
- Bilateral release performed
- Aggressive postoperative rehabilitation
\`\`\`

**CTS with Peripheral Neuropathy:**

\`\`\`
Diabetic polyneuropathy:
- CTS diagnosis more difficult
- EMG interpretation complicated
- Surgical outcomes: Still favorable
- May have residual symptoms
- Counsel about expectations

Cervical radiculopathy + CTS:
- Double crush phenomenon
- Treat both sites for optimal outcomes
- Consider cervical spine evaluation
- May need both surgeries

Idiopathic neuropathy:
- Rule out underlying cause
- CTS surgery still beneficial
- May not achieve complete symptom resolution
\`\`\`

## Emerging and Future Directions

**Ultrasound-Guided Percutaneous Release:**

\`\`\`
Balloon catheter technique:
- Ultrasound-guided balloon placement
- Balloon inflation divides ligament
- Small incision
- Early results promising
- Long-term data pending
- Not yet FDA-approved in US

Knife-needle technique:
- Percutaneous division using special needle
- Small incision
- Limited long-term data
- Controversial due to visualization

Hydrodissection:
- Ultrasound-guided fluid injection
- Separates nerve from surrounding tissue
- Diagnostic and therapeutic
- May delay surgery
- Limited durability
\`\`\`

**Regenerative Medicine:**

\`\`\`
Platelet-rich plasma:
- Limited evidence for CTS
- Small studies show symptom improvement
- Not standard of care
- May have future role

Stem cell therapy:
- Theoretical applications
- No clinical evidence yet
- Experimental
\`\`\`

## Quality and Value Considerations

**Appropriate Use Criteria:**

\`\`\`
When to image (EMG/Ultrasound):
- Atypical presentation
- Unclear diagnosis
- Surgical planning
- Worker's compensation cases
- Preoperative medicolegal documentation

When to proceed directly to surgery:
- Typical presentation
- Positive clinical findings
- Diagnostic injection positive
- Patient preference after counseling

Value-based considerations:
- EMG adds cost, not always necessary
- Ultrasound cheaper than EMG in some settings
- Shared decision-making reduces unnecessary testing
\`\`\`

**Outcome Measurement:**

\`\`\`
Validated instruments:
- Boston Carpal Tunnel Questionnaire (BCTQ)
- QuickDASH
- Patient-Rated Wrist Evaluation (PROMs)
- CTS-6

Routine use recommended:
- Preoperative and postoperative
- Track outcomes for quality
- Identify patients not improving
- Facilitate shared decision-making

Quality metrics:
- Symptom resolution
- Functional improvement
- Patient satisfaction
- Return to work
- Complication rates
\`\`\``,
      keyTerms: [
        { term: 'cross-sectional area', definition: 'CSA; ultrasound measurement of median nerve size; diagnostic for CTS' },
        { term: 'Martin-Gruber anastomosis', definition: 'Normal anatomical variant where motor fibers cross between median and ulnar nerves in forearm' },
        { term: 'Boston Carpal Tunnel Questionnaire', definition: 'BCTQ; validated disease-specific outcome measure for CTS' },
        { term: 'internal neurolysis', definition: 'Separation of nerve fascicles; controversial procedure for severe nerve compression' },
      ],
      clinicalNotes: `Expert Practice Perspectives:

1. EMG is not mandatory for typical CTS - clinical diagnosis sufficient in most cases

2. Endoscopic and open techniques have equivalent outcomes - use what you're proficient with

3. Revision surgery outcomes are inversely related to number of prior surgeries - first revision reasonable, second less so

4. Ultrasound is emerging as a valid alternative to EMG - consider when EMG unavailable or contraindicated

5. Double crush is real - evaluate cervical spine in atypical or refractory cases

6. Workers' compensation patients need multidisciplinary approach - address psychosocial factors, not just surgery

7. Don't let EMG severity dictate treatment - mild EMG with severe symptoms may still need surgery

8. CTS in pregnancy usually resolves postpartum - delay surgery until after delivery if possible

9. Diabetic CTS still benefits from surgery - just don't expect complete symptom resolution

10. Postoperative therapy is rarely needed - early motion is more important than formal therapy`,
    },
  },

  media: [
    {
      id: 'carpal-tunnel-anatomy',
      type: 'diagram',
      filename: 'carpal-tunnel-anatomy.svg',
      title: 'Carpal Tunnel Anatomy',
      description: 'Cross-section of wrist showing carpal tunnel contents',
    },
    {
      id: 'carpal-tunnel-symptoms',
      type: 'diagram',
      filename: 'carpal-tunnel-symptoms.svg',
      title: 'Median Nerve Sensory Distribution',
      description: 'Area of numbness and tingling in CTS',
    },
    {
      id: 'carpal-tunnel-phalen',
      type: 'diagram',
      filename: 'carpal-tunnel-phalen.svg',
      title: 'Phalen Maneuver Technique',
      description: 'Proper performance of Phalen test for CTS',
    },
  ],

  citations: [
    {
      id: 'aans-cts',
      type: 'article',
      title: 'Carpal Tunnel Syndrome: Treatment and Outcomes',
      authors: ['American Association of Neurological Surgeons'],
      source: 'AANS Neurosurgeon',
    },
    {
      id: 'aaos-cts-2016',
      type: 'article',
      title: 'Management of Carpal Tunnel Syndrome Evidence-Based Clinical Practice Guideline',
      authors: ['American Academy of Orthopaedic Surgeons'],
      source: 'AAOS',
    },
  ],

  crossReferences: [
    { targetId: 'conditions-tendinopathy', targetType: 'condition', relationship: 'related', label: 'Tendinopathy' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['neurology', 'orthopedics', 'occupational-health', 'hand-surgery'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family-medicine', 'neurology', 'physical-medicine-rehabilitation'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default carpalTunnel;
