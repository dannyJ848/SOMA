import { EducationalContent } from '../../../types';

export const carpalTunnelContent: EducationalContent = {
  id: 'ortho-carpal-tunnel',
  type: 'condition',
  name: 'Carpal Tunnel Syndrome',
  alternateNames: ['CTS', 'Median nerve compression', 'Median neuropathy at the wrist'],
  hpoId: 'HP:0012185',

  levels: {
    1: {
      level: 1,
      summary: 'Carpal tunnel syndrome is a common condition where a nerve in your wrist gets squeezed, causing numbness, tingling, and weakness in your hand.',
      explanation: `Your carpal tunnel is a narrow passageway in your wrist. Through this tunnel run tendons and the median nerve, which controls feeling in your thumb and first three fingers.

**What Causes It:**
- Repetitive hand movements (typing, assembly work)
- Wrist position (bending wrist up or down a lot)
- Swelling from conditions like arthritis or pregnancy
- Sometimes no clear cause

**Common Symptoms:**
- Numbness or tingling in thumb, index, middle, and ring fingers
- Symptoms often worse at night
- Waking up needing to "shake out" your hand
- Weakness - dropping things
- Pain that may travel up the arm

**Who Gets It:**
- More common in women
- Often appears during pregnancy
- Associated with diabetes, thyroid problems
- Repetitive jobs increase risk

**Treatment Options:**

*Non-surgical:*
- Wrist splint (especially at night)
- Rest from aggravating activities
- Anti-inflammatory medications
- Steroid injections

*Surgical:*
- Carpal tunnel release - cuts the band over the tunnel
- Outpatient procedure
- Usually provides lasting relief

**When to See a Doctor:**
- Constant numbness
- Weakness in your hand
- Dropping things frequently
- Symptoms interfering with work or sleep

**Prevention:**
- Take breaks from repetitive tasks
- Keep wrists in neutral position
- Ergonomic keyboard and mouse
- Stretch your hands and wrists regularly`,
      keyTerms: [
        { term: 'carpal tunnel', definition: 'A narrow passage in your wrist where nerves and tendons pass through' },
        { term: 'median nerve', definition: 'The nerve that runs through the carpal tunnel and controls feeling in most of your hand' },
        { term: 'tingling', definition: 'A prickly or "pins and needles" sensation' },
        { term: 'wrist splint', definition: 'A brace that keeps your wrist straight, often worn at night' },
      ],
      analogies: [
        'The carpal tunnel is like a crowded subway tunnel - when it gets too tight, the nerve gets squished.',
        'The median nerve is like an electrical wire - when it\'s pinched, the signals don\'t get through properly.',
        'Carpal tunnel release surgery is like widening a doorway to give more room.',
      ],
      examples: [
        'An office worker who wakes up at night with numb fingers and has to shake their hand.',
        'A pregnant woman who develops hand tingling that goes away after delivery.',
        'A factory worker whose thumb and fingers feel weak and numb after years of assembly work.',
      ],
    },
    2: {
      level: 2,
      summary: 'Carpal tunnel syndrome is median nerve compression at the wrist, presenting with sensory symptoms in the median nerve distribution, diagnosed clinically and with electrodiagnostic studies, and treated with splinting, injections, or surgical release.',
      explanation: `Carpal tunnel syndrome (CTS) is the most common peripheral nerve compression syndrome, affecting 3-6% of the population.

**Anatomy:**
- Carpal tunnel bounded by carpal bones and transverse carpal ligament (flexor retinaculum)
- Contents: Median nerve, 9 flexor tendons
- Median nerve most superficial structure

**Pathophysiology:**
- Increased pressure in carpal tunnel
- Venous congestion, edema
- Demyelination, then axonal damage
- Ischemia contributes to symptoms

**Risk Factors:**
- Female sex (3:1)
- Pregnancy
- Diabetes mellitus
- Hypothyroidism
- Rheumatoid arthritis
- Obesity
- Repetitive hand use (controversial as sole cause)
- Wrist fracture history

**Clinical Presentation:**

*Sensory:*
- Numbness/tingling in median nerve distribution
- Thumb, index, middle, radial half of ring finger
- Often worse at night
- "Flick sign" - shaking hand for relief

*Motor (Later):*
- Thenar weakness (APB, opponens pollicis)
- Thenar atrophy (severe cases)
- Grip weakness

**Examination:**
- Phalen's test: Wrist flexion reproduces symptoms
- Tinel's sign: Tapping over carpal tunnel
- Thenar atrophy inspection
- Two-point discrimination
- APB strength testing

**Diagnosis:**

*Clinical Diagnosis Often Sufficient*

*Electrodiagnostic Studies (NCS/EMG):*
- Gold standard for confirmation
- Slowed distal sensory latency (most sensitive)
- Slowed motor latency
- Denervation potentials (severe)

*Ultrasound:*
- Cross-sectional area >10mm2
- Increasingly used
- Dynamic assessment

**Treatment:**

*Conservative:*
- Night splinting in neutral position
- Activity modification
- NSAIDs (limited benefit)
- Corticosteroid injection (temporary relief)

*Surgical:*
- Carpal tunnel release (CTR)
- Open vs. endoscopic
- Indications: Failed conservative, constant symptoms, weakness, atrophy
- Success rate >90%

**Prognosis:**
- Conservative: May resolve, especially pregnancy-related
- Post-surgical: Excellent for sensory symptoms
- Thenar atrophy may not fully recover`,
      keyTerms: [
        { term: 'flexor retinaculum', definition: 'The ligament forming the roof of the carpal tunnel; also called transverse carpal ligament' },
        { term: 'thenar muscles', definition: 'Muscles at the base of the thumb; APB and opponens pollicis are median-innervated' },
        { term: 'Phalen\'s test', definition: 'Wrist flexion test for carpal tunnel; positive if reproduces symptoms in 60 seconds' },
        { term: 'Tinel\'s sign', definition: 'Tapping over the nerve produces tingling in its distribution' },
        { term: 'nerve conduction study', definition: 'Electrodiagnostic test measuring nerve signal speed and amplitude' },
        { term: 'carpal tunnel release', definition: 'Surgical cutting of the transverse carpal ligament to decompress the median nerve' },
      ],
      analogies: [
        'Electrodiagnostic testing is like checking how fast electricity travels through a wire - slow signals mean a problem.',
        'The flick sign is like trying to get blood flowing back to a limb that "fell asleep."',
        'Carpal tunnel release gives the nerve more room, like letting out a notch on a belt.',
      ],
    },
    3: {
      level: 3,
      summary: 'Carpal tunnel syndrome diagnosis integrates clinical evaluation with electrodiagnostic severity staging, while treatment selection depends on severity, functional impact, and patient factors.',
      explanation: `Understanding CTS requires knowledge of pathophysiology, electrodiagnostic interpretation, and surgical outcomes.

**Pathophysiology:**

*Mechanical Compression:*
- Normal carpal tunnel pressure: 2-10 mmHg
- CTS pressure: 30+ mmHg
- Wrist flexion/extension increases pressure

*Nerve Injury Sequence:*
1. Intermittent paresthesias (reversible ischemia)
2. Persistent numbness (demyelination)
3. Weakness (axonal loss)
4. Atrophy (denervation)

*Inflammatory Contribution:*
- Synovial thickening
- Tenosynovitis
- Fibrosis of subsynovial tissue

**Electrodiagnostic Staging:**

*Severity Classification:*
- Mild: Sensory latency prolonged, motor normal
- Moderate: Sensory and motor latency prolonged
- Severe: Absent sensory, prolonged motor, denervation

*Key Values:*
- Median sensory latency >3.5ms (14cm)
- Median motor latency >4.2ms
- Comparison studies (median-ulnar, median-radial)

*Predictive Value:*
- EDX severity correlates with surgical outcome
- Severe cases may have incomplete recovery
- Normal EDX doesn't exclude clinical CTS

**Differential Diagnosis:**

*Proximal Median Neuropathy:*
- Pronator syndrome
- AIN syndrome (motor only)

*Cervical Radiculopathy:*
- C6-C7 distribution overlap
- Neck pain, dermatomal pattern
- EMG shows paraspinal denervation

*Polyneuropathy:*
- Bilateral, symmetric
- Stocking-glove distribution
- Consider diabetes

*Double Crush:*
- Cervical + carpal tunnel
- May explain poor surgical outcomes

**Treatment Algorithm:**

*Mild-Moderate CTS:*
1. Splinting 6-12 weeks
2. Consider injection
3. Surgery if persistent

*Severe CTS:*
- Earlier surgical intervention
- Atrophy unlikely to fully reverse
- Document baseline for comparison

**Injection Technique:**
- Ulnar to palmaris longus
- Proximal to wrist crease
- 40mg methylprednisolone typical
- Avoid intraneural injection

**Surgical Considerations:**

*Open vs. Endoscopic:*
- Similar long-term outcomes
- Endoscopic: Faster return to work, smaller scar
- Open: Lower learning curve, lower complication rate

*Complications:*
- Pillar pain (common, transient)
- Incomplete release
- Nerve injury (rare)
- CRPS (rare)

*Post-operative:*
- Immediate finger motion
- Grip strength returns over months
- Full recovery 3-6 months typical`,
      keyTerms: [
        { term: 'demyelination', definition: 'Loss of nerve insulation causing slowed conduction; reversible early' },
        { term: 'axonal loss', definition: 'Nerve fiber death; causes weakness and may be irreversible' },
        { term: 'pronator syndrome', definition: 'Median nerve compression at forearm; distinguished by proximal symptoms' },
        { term: 'double crush syndrome', definition: 'Nerve compression at two sites making each more symptomatic' },
        { term: 'pillar pain', definition: 'Post-operative pain at thenar/hypothenar attachments of transverse carpal ligament' },
        { term: 'AIN syndrome', definition: 'Anterior Interosseous Nerve syndrome; pure motor median nerve branch compression' },
      ],
      clinicalNotes: 'Negative electrodiagnostic studies don\'t exclude CTS - clinical diagnosis may suffice for treatment decisions. Severe CTS with atrophy benefits from earlier surgery as motor recovery is time-sensitive. Steroid injection is diagnostic and therapeutic - good response predicts surgical success.',
    },
    4: {
      level: 4,
      summary: 'Advanced carpal tunnel management requires understanding surgical anatomy, variant presentations, revision surgery considerations, and work-related disability evaluation.',
      explanation: `Comprehensive CTS care requires detailed knowledge of surgical technique, complex presentations, and outcomes assessment.

**Surgical Anatomy:**

*Key Structures:*
- Transverse carpal ligament: 2-3cm length
- Kaplan's cardinal line: Thenar motor branch location
- Palmar cutaneous branch: Proximal to wrist crease
- Recurrent motor branch variants

*Motor Branch Anatomy:*
- Extraligamentous (most common): 46%
- Subligamentous: 31%
- Transligamentous: 23%
- Must identify and protect

*Release Extent:*
- Complete ligament division essential
- Antebrachial fascia distally
- Avoid palmar arch distally

**Complex Presentations:**

*Acute CTS:*
- Trauma: Distal radius fracture
- Hemorrhage (anticoagulation)
- Acute carpal tunnel syndrome is surgical emergency

*CTS with Other Pathology:*
- Trigger finger (often releases spontaneously)
- De Quervain's
- Basal joint arthritis

*Bilateral CTS:*
- Consider systemic etiology
- Staged vs. simultaneous release
- Patient preference

*Failed Carpal Tunnel Release:*
- Causes:
  - Incomplete release (most common)
  - Wrong diagnosis
  - Scarring/fibrosis
  - Double crush
- Workup: Repeat NCS, imaging
- Revision: Open exploration

**Occupational Considerations:**

*Work-Related CTS:*
- Controversial causation
- Repetitive forceful gripping
- Vibration exposure
- Legal/workers' comp implications

*Return to Work:*
- Light duty: 2-4 weeks
- Heavy labor: 6-12 weeks
- Individual variation

*Disability Evaluation:*
- AMA Guides criteria
- Functional capacity evaluation
- Pre-existing condition consideration

**Special Populations:**

*Pregnancy:*
- Common in third trimester
- Often resolves post-partum
- Conservative management preferred
- Surgery if severe/persistent

*Diabetes:*
- Higher CTS prevalence
- Poorer surgical outcomes
- Consider polyneuropathy
- Glycemic control important

*Dialysis:*
- Amyloid deposition
- Bilateral involvement
- May need repeat release

**Advanced Techniques:**

*Extended Release:*
- Hypothenar fat pad flap
- Synovectomy
- Revision surgery

*Adjuncts:*
- Neurolysis (controversial)
- Internal splinting
- Hypothenar fat pad transposition

**Outcomes Research:**

*Patient-Reported Outcomes:*
- Boston Carpal Tunnel Questionnaire
- DASH score
- Quick-DASH

*Success Predictors:*
- Shorter symptom duration
- Better pre-op EDX
- Positive injection response
- Younger age
- No workers' compensation

**Complications Management:**

*Incomplete Release:*
- Re-explore and complete
- Good outcomes with revision

*Nerve Injury:*
- Motor branch: Weakness
- Palmar cutaneous: Painful scar
- May need neuroma excision

*Complex Regional Pain Syndrome:*
- Rare but devastating
- Early recognition
- Multidisciplinary treatment`,
      keyTerms: [
        { term: 'Kaplan\'s cardinal line', definition: 'Surface landmark for thenar motor branch; from thumb-index web parallel to proximal palmar crease' },
        { term: 'recurrent motor branch', definition: 'Median nerve branch to thenar muscles; anatomic variants affect surgical approach' },
        { term: 'Boston Carpal Tunnel Questionnaire', definition: 'Validated symptom severity and functional status instrument for CTS' },
        { term: 'neurolysis', definition: 'Surgical freeing of nerve from surrounding scar tissue' },
        { term: 'DASH score', definition: 'Disabilities of the Arm, Shoulder and Hand; upper extremity function questionnaire' },
        { term: 'palmar cutaneous branch', definition: 'Sensory branch of median nerve to palm; injury causes painful scar' },
      ],
      clinicalNotes: 'Recurrent motor branch anatomy varies - visualize before completing release. Failed CTR usually from incomplete release - explore with low threshold. Workers compensation cases have poorer outcomes regardless of treatment - multifactorial reasons. Acute CTS after wrist fracture requires urgent release.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CTS research encompasses advanced diagnostics, biological treatments, outcomes prediction, and understanding of the complex relationship between work, compression neuropathy, and disability.',
      explanation: `State-of-the-art CTS management integrates emerging diagnostics, biological approaches, and system-level outcomes optimization.

**Advanced Diagnostics:**

*High-Resolution Ultrasound:*
- Cross-sectional area >10-12mm2
- Fascicle distortion
- Subsynovial flow (power Doppler)
- Dynamic assessment

*MRI Neurography:*
- T2 signal increase
- Nerve enlargement
- Identify space-occupying lesions
- Research applications

*Quantitative Sensory Testing:*
- Vibration threshold
- Thermal testing
- Central sensitization assessment

*Point-of-Care EDX:*
- NC-stat device
- Screening tool
- Lower sensitivity than formal NCS

**Biological Approaches:**

*PRP Injection:*
- Emerging evidence
- May outperform steroid
- Longer-lasting effect
- Mechanism unclear

*Hydrodissection:*
- Ultrasound-guided
- Saline/D5W injection
- Separates nerve from adjacent structures
- Adjunct to steroid

*Stem Cell Therapy:*
- Preclinical research
- Nerve regeneration potential
- Not yet clinical

**Outcome Prediction:**

*Machine Learning:*
- Surgical outcome prediction
- Risk stratification
- Personalized recommendations

*Biomarkers:*
- Nerve injury markers
- Predictors of recovery
- Research stage

*Preoperative Factors:*
- Duration of symptoms
- Severity of EDX
- Workers' comp status
- Diabetes control
- Psychological factors

**Minimally Invasive Advances:**

*Thread Carpal Tunnel Release:*
- Loop/thread cuts ligament
- Ultrasound-guided
- Even smaller incision
- Learning curve

*Ultrasound-Guided Release:*
- Real-time visualization
- Variable techniques
- Emerging evidence

*Balloon Expansion:*
- Research technique
- Temporary dilation
- Not widely adopted

**Work and Disability:**

*Epidemiology:*
- Prevalence 3-6% general
- Higher in certain occupations
- Female predominance

*Causation Debate:*
- Occupation as risk factor vs. cause
- Biomechanical studies
- Legal implications

*Prevention:*
- Ergonomic interventions
- Limited evidence
- Job rotation
- Tool modification

**Healthcare Utilization:**

*Cost Analysis:*
- Direct medical costs
- Lost productivity
- Disability payments
- Cost-effectiveness of surgery

*Treatment Pathways:*
- Primary care vs. specialist
- Time to surgery
- Regional variation

**Quality Measures:**

*Process Measures:*
- Time to diagnosis
- Appropriate testing
- Conservative treatment trial
- Surgical timing

*Outcome Measures:*
- Patient-reported outcomes
- Return to work
- Complication rates
- Reoperation rates

**Future Directions:**

*Nerve Regeneration:*
- Growth factor delivery
- Scaffold technology
- Gene therapy

*Personalized Medicine:*
- Genetic predictors
- Tailored treatment
- Risk stratification

*Telemedicine:*
- Remote diagnosis
- Post-operative monitoring
- Access improvement`,
      keyTerms: [
        { term: 'MRI neurography', definition: 'High-resolution MRI technique optimized for peripheral nerve imaging' },
        { term: 'hydrodissection', definition: 'Ultrasound-guided fluid injection to separate nerve from surrounding tissue' },
        { term: 'thread carpal tunnel release', definition: 'Minimally invasive technique using thread/loop to cut transverse carpal ligament' },
        { term: 'central sensitization', definition: 'Amplified central nervous system response to peripheral input; may persist after decompression' },
        { term: 'power Doppler', definition: 'Ultrasound technique showing blood flow; increased in inflamed synovium' },
        { term: 'NC-stat', definition: 'Point-of-care nerve conduction testing device for screening' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- EDX findings correlate with surgical outcomes
- Steroid injection response predicts surgical success
- Workers' comp associated with worse outcomes
- Acute CTS is surgical emergency

**Emerging Evidence:**
- PRP may provide longer relief than steroid
- Ultrasound-guided techniques expanding
- Thread release showing promise
- Machine learning for outcome prediction

**Practice Considerations:**
- Clinical diagnosis sufficient for many cases
- Surgery highly effective (>90% success)
- Severe cases benefit from earlier intervention
- Bilateral cases consider systemic etiology
- Post-surgical grip strength takes months to recover`,
    },
  },

  media: [
    {
      id: 'carpal-tunnel-anatomy',
      type: 'diagram',
      filename: 'carpal-tunnel-anatomy.svg',
      title: 'Carpal Tunnel Anatomy',
      description: 'Cross-section showing contents and boundaries of carpal tunnel',
    },
    {
      id: 'median-nerve-distribution',
      type: 'diagram',
      filename: 'median-nerve-hand.svg',
      title: 'Median Nerve Distribution',
      description: 'Sensory and motor territories of median nerve in the hand',
    },
  ],
  citations: [
    {
      id: 'aaos-cts-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline on the Treatment of Carpal Tunnel Syndrome',
      source: 'American Academy of Orthopaedic Surgeons',
      url: 'https://www.aaos.org/quality/quality-programs/upper-extremity-programs/carpal-tunnel-syndrome/',
      license: 'Copyright AAOS',
    },
    {
      id: 'aanem-cts',
      type: 'article',
      title: 'Practice Parameter: Electrodiagnostic Studies in Carpal Tunnel Syndrome',
      source: 'American Association of Neuromuscular & Electrodiagnostic Medicine',
      license: 'Copyright AANEM',
    },
  ],
  crossReferences: [
    { targetId: 'neuro-peripheral-neuropathy', targetType: 'condition', relationship: 'related', label: 'Peripheral Neuropathy' },
    { targetId: 'ortho-joint-anatomy', targetType: 'structure', relationship: 'related', label: 'Hand Anatomy' },
    { targetId: 'ortho-physical-therapy', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['orthopedics', 'hand surgery', 'neurology', 'occupational medicine'],
    keywords: ['carpal tunnel', 'median nerve', 'nerve compression', 'hand numbness', 'wrist pain'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'neurology', 'medicine'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default carpalTunnelContent;
