/**
 * Manual Therapy Techniques - Comprehensive Educational Content
 *
 * Covers hands-on treatment techniques including joint mobilization,
 * manipulation, soft tissue techniques, and neural mobilization.
 */

import { EducationalContent } from '../../types';

export const manualTherapyTechniques: EducationalContent = {
  id: 'rehab-manual-therapy-techniques',
  type: 'concept',
  name: 'Manual Therapy Techniques',
  alternateNames: ['Hands-On Therapy', 'Manual Treatment', 'Mobilization Techniques'],

  levels: {
    1: {
      level: 1,
      summary: 'Manual therapy uses the therapist\'s hands to move your joints and muscles to help reduce pain and improve movement.',
      explanation: `Manual therapy is when your physical therapist uses their hands to help your body move better and hurt less. Think of it as a skilled way of pushing, pulling, and stretching different parts of your body.

**What does manual therapy do?**
- Helps stiff joints move more freely
- Relaxes tight, painful muscles
- Reduces pain quickly
- Prepares your body for exercise

**Types of manual therapy:**

**1. Joint movements (mobilization)**
The therapist gently moves your joint back and forth or in circles. This helps when a joint feels stuck or stiff.

**2. Muscle work (soft tissue techniques)**
The therapist uses their hands to press, rub, or stretch tight muscles. This helps muscles relax and feel less sore.

**3. Stretching help**
The therapist helps you stretch further than you could on your own, getting muscles and tissues to lengthen.

**What to expect:**
- The therapist will touch and move the area that hurts
- You might feel pressure, but it shouldn't be too painful
- You may feel better right away or gradually over time
- Manual therapy works best when combined with exercise

Manual therapy is safe when done by a trained therapist. Always tell your therapist if something hurts too much!`,
      keyTerms: [
        { term: 'manual therapy', definition: 'Treatment where the therapist uses their hands to help your body move better' },
        { term: 'mobilization', definition: 'Gentle movement of a joint to help it move more freely' },
        { term: 'soft tissue', definition: 'The muscles, tendons, and other flexible parts of your body (not bones)' },
        { term: 'stiffness', definition: 'When a joint or muscle doesn\'t move as easily as it should' },
      ],
      analogies: [
        'Manual therapy is like unlocking a door that\'s stuck - the therapist\'s hands are the key that helps your joint open up.',
        'Soft tissue work is like kneading bread dough - the therapist works the muscles until they become softer and more flexible.',
      ],
      examples: [
        'If your neck is stiff and you can\'t turn your head, the therapist might gently move your neck joints to help you turn better.',
        'If your shoulder muscles are tight from working at a computer, the therapist might press on the knots to help them relax.',
      ],
    },
    2: {
      level: 2,
      summary: 'Manual therapy encompasses skilled hands-on techniques including joint mobilization, manipulation, soft tissue mobilization, and stretching to reduce pain, improve mobility, and restore function.',
      explanation: `Manual therapy refers to skilled passive movement of joints and soft tissues performed by physical therapists. These techniques can produce immediate changes in pain and mobility and are often combined with exercise for optimal outcomes.

**Categories of Manual Therapy:**

**1. Joint Mobilization**
Rhythmic, oscillatory movements applied to a joint:
- Grade I-II: Small amplitude movements, used for pain relief
- Grade III-IV: Larger amplitude movements at end range, used for stiffness
- Performed within the patient's control and comfort

**2. Joint Manipulation (Thrust)**
- Quick, small-amplitude movement at end range
- Often produces an audible "pop" or cavitation
- Requires additional training/certification
- Used when mobilization isn't enough

**3. Soft Tissue Mobilization**
Hands-on work to muscles, fascia, and other soft tissues:
- Massage: general tissue relaxation
- Myofascial release: sustained pressure on fascia
- Trigger point therapy: pressure on painful muscle knots
- Instrument-assisted techniques: using tools for deeper work

**4. Neural Mobilization**
Techniques to improve nerve mobility:
- Slider techniques: nerve glides through surrounding tissue
- Tensioner techniques: nerve stretching
- Used when nerves are restricted or sensitive

**Effects of Manual Therapy:**

*Mechanical Effects:*
- Improved joint mobility
- Tissue extensibility changes
- Breaking up adhesions

*Neurophysiological Effects:*
- Pain gate mechanism activation
- Descending pain inhibition
- Muscle relaxation through reflex pathways

*Psychological Effects:*
- Therapeutic touch and reassurance
- Patient confidence in recovery
- Reduced fear of movement

**When is manual therapy used?**
- Joint stiffness limiting movement
- Muscle tightness and spasms
- Acute pain relief
- Post-surgical mobility restrictions
- Nerve entrapment symptoms

**Integration with Exercise:**
Manual therapy creates a "window of opportunity" - after treatment, pain is reduced and mobility is improved, making exercise more effective.`,
      keyTerms: [
        { term: 'joint mobilization', definition: 'Rhythmic, controlled movements of a joint to improve mobility', pronunciation: 'mo-bil-ih-ZAY-shun' },
        { term: 'manipulation', definition: 'Quick thrust movement to a joint, often producing a pop sound', pronunciation: 'man-ip-yoo-LAY-shun' },
        { term: 'myofascial release', definition: 'Sustained pressure technique to release tight fascia and muscles', pronunciation: 'my-oh-FASH-ee-al' },
        { term: 'trigger point', definition: 'A tight, painful spot in a muscle that can cause referred pain' },
        { term: 'neural mobilization', definition: 'Techniques to improve how nerves move through surrounding tissues' },
        { term: 'cavitation', definition: 'The pop sound produced during joint manipulation from gas bubble release' },
      ],
      analogies: [
        'Joint mobilization is like jiggling a stuck drawer to help it slide more smoothly.',
        'A trigger point is like a knot in a rope - targeted pressure can help it release.',
      ],
    },
    3: {
      level: 3,
      summary: 'Manual therapy utilizes graded joint mobilization, high-velocity manipulation, soft tissue techniques, and neural mobilization based on clinical examination findings and hypothesized mechanisms of tissue dysfunction.',
      explanation: `## Joint Mobilization Techniques

**Maitland Mobilization Grades:**

| Grade | Amplitude | Range Position | Primary Effect |
|-------|-----------|----------------|----------------|
| I | Small | Beginning of range | Pain modulation |
| II | Large | Within range, not reaching resistance | Pain modulation |
| III | Large | Into resistance | Mobility |
| IV | Small | At end range, into resistance | Mobility |
| V | Small thrust | Beyond physiological barrier | Manipulation |

**Accessory vs. Physiological Movements:**
- Physiological: movements patient can perform actively (flexion, rotation)
- Accessory: movements that occur within joints but can't be isolated voluntarily (glide, spin, roll)
- Accessory movements often restore physiological movement

**Convex-Concave Rule:**
- Convex surface moving: glide opposite to bone movement
- Concave surface moving: glide same direction as bone movement
- Guides mobilization direction for restoring motion

**Kaltenborn Grades:**
- Grade I: Loosening (distraction to relieve compression)
- Grade II: Tightening (take up slack)
- Grade III: Stretching (beyond slack into resistance)

## Manipulation (HVLA)

**Characteristics:**
- High-velocity, low-amplitude thrust
- Applied at end range
- Aimed at specific segmental level
- Produces joint cavitation

**Proposed Mechanisms:**
- Gapping of facet joints
- Release of entrapped meniscoid
- Neurophysiological effects (predominant theory)
- Descending pain modulation activation

**Cavitation:**
- Tribonucleation phenomenon
- Gas bubble formation in synovial fluid
- Not necessary for clinical effect
- Audible pop correlates poorly with outcome

## Soft Tissue Techniques

**Soft Tissue Mobilization:**
- Longitudinal: along muscle fiber direction
- Transverse: across muscle fibers
- Sustained pressure: trigger point compression
- Functional massage: movement combined with pressure

**Instrument-Assisted Soft Tissue Mobilization (IASTM):**
- Tools designed for controlled microtrauma
- Stimulates healing response
- Detects tissue texture changes
- Examples: Graston, ASTYM, HawkGrips

**Dry Needling:**
- Insertion of monofilament needle into trigger points
- Local twitch response elicited
- Proposed mechanisms: mechanical disruption, neurophysiological reset
- Distinct from acupuncture in theoretical basis

## Neural Mobilization

**Neurodynamic Testing:**
- Upper Limb Tension Tests (ULTT): median, radial, ulnar nerve bias
- Straight Leg Raise (SLR): sciatic nerve
- Slump Test: neuromeningeal system

**Treatment Techniques:**
- Sliders: nerve moves relative to surrounding tissue
- Tensioners: nerve stretched by adding components
- Opening techniques: reduce compression at entrapment sites

**Progression:**
- Begin with movement away from site of symptoms
- Progress to movement toward symptoms
- Introduce tensioning after sliding techniques

## Clinical Reasoning in Manual Therapy

**Examination Findings Guiding Selection:**
- Capsular pattern: suggests joint pathology
- Non-capsular pattern: suggests mechanical dysfunction
- End-feel assessment: guides technique intensity
- Irritability: guides technique vigor

**Dose Parameters:**
- Duration: 30-60 seconds per oscillation set
- Sets: 3-5 per session
- Frequency: typically 2-3x/week
- Response assessment: immediate retest of movement`,
      keyTerms: [
        { term: 'Maitland grades', definition: 'Classification system for mobilization amplitude and range position (I-V)' },
        { term: 'accessory motion', definition: 'Joint movements that cannot be voluntarily isolated but accompany physiological movement' },
        { term: 'convex-concave rule', definition: 'Principle guiding mobilization direction based on joint surface shapes' },
        { term: 'HVLA', definition: 'High-velocity, low-amplitude - the characteristics of thrust manipulation' },
        { term: 'tribonucleation', definition: 'Mechanism of joint cavitation through separation of joint surfaces creating gas bubbles' },
        { term: 'neurodynamics', definition: 'Movement and tension characteristics of the nervous system' },
      ],
      clinicalNotes: 'Immediate retesting after manual therapy determines technique effectiveness. If patient response is favorable, combine with active movement to "lock in" gains. Thrust manipulation has similar outcomes to mobilization for many conditions but may produce faster initial response.',
    },
    4: {
      level: 4,
      summary: 'Manual therapy integrates biomechanical and neurophysiological models, clinical prediction rules, and evidence-based protocols within a comprehensive treatment framework addressing both peripheral and central mechanisms.',
      explanation: `## Theoretical Frameworks

**Regional Interdependence Model:**
- Impairments in one region affect distant regions
- Thoracic manipulation for neck pain
- Hip mobilization for knee pain
- Theoretical basis for seemingly unrelated treatment

**Neurophysiological Model:**
- Primary mechanism: descending pain inhibition
- Peripheral effects: transient
- Central effects: more lasting
- Explains non-mechanical effects of manual therapy

**Biopsychosocial Context:**
- Therapeutic alliance effects
- Expectation and placebo components
- Touch as intervention itself
- Contexual factors influence outcomes

## Clinical Prediction Rules

**Cervical Manipulation CPR:**
Favorable prognostic factors:
- Symptom duration <38 days
- Positive expectation for improvement
- Side-to-side difference in rotation >10 degrees
- Pain with cervical extension
(+LR = 4.6 with 3/4)

**Lumbar Manipulation CPR:**
- Duration <16 days
- No symptoms distal to knee
- FABQ-W <19
- Hip IR >35 degrees bilaterally
- Hypomobility at one segment
(+LR = 13.2 with 4/5)

**Limitations of CPRs:**
- Validation studies show diminished predictive value
- May identify good prognosis patients, not manipulation responders
- Best used as decision aids, not algorithms

## Advanced Manipulation Concepts

**Specificity Debate:**
- Traditional: specific vertebral level targeting
- Evidence: effects likely regional, not segmental
- Clinical implication: precision may be less critical than believed
- Neurophysiological effects may be more important

**Dosage Considerations:**
- Number of thrusts per session
- Unilateral vs. bilateral
- Single session vs. serial treatment
- Evidence for optimal dosage lacking

**Adverse Events:**
- Minor: soreness, increased stiffness (common, transient)
- Moderate: radiculopathy aggravation (rare)
- Serious: vertebrobasilar stroke (cervical), cauda equina (rare)
- Risk assessment protocols

## Soft Tissue Mechanism Science

**Fascial Research:**
- Fascia contains mechanoreceptors
- Innervated by free nerve endings
- Responds to sustained pressure
- Thixotropic properties (gel-to-sol transition)

**Proposed MFR Mechanisms:**
- Mechanoreceptor stimulation
- Piezoelectric effects
- Fibroblast-mediated remodeling
- Inflammatory response modulation

**Trigger Point Science:**
- Motor endplate hypothesis
- Integrated hypothesis (energy crisis)
- Referred pain patterns: sensitization
- Treatment response mechanisms unclear

## Neural Mobilization Evidence

**Mechanisms:**
- Axoplasmic flow improvement
- Intraneural edema reduction
- Mechanosensitivity reduction
- Central nervous system effects

**Clinical Applications:**
- Carpal tunnel syndrome
- Cervical radiculopathy
- Lumbar radiculopathy
- Nerve entrapment syndromes

**Dosage:**
- 3-6 second holds for sliders
- 10-20 repetitions
- 2-3 sets
- Avoid symptom provocation initially

## Integration with Other Interventions

**Manual Therapy Before Exercise:**
- Creates "window" of reduced pain
- Allows exercise at greater intensity/range
- Short-term effects potentiated by active movement
- Priming effect for motor learning

**Dry Needling Integration:**
- Combined with manual therapy techniques
- Trigger point needling before soft tissue work
- Segmental needling before mobilization
- Emerging evidence for combinations

**Pain Science Education:**
- Contextualizes manual therapy effects
- Reduces over-reliance on passive treatment
- Empowers patient self-management
- Addresses fear-avoidance`,
      keyTerms: [
        { term: 'regional interdependence', definition: 'Concept that dysfunction in one body region can affect seemingly unrelated distant regions' },
        { term: 'descending pain inhibition', definition: 'Brain mechanisms that reduce pain signal transmission at spinal cord level' },
        { term: 'thixotropy', definition: 'Property of fascia becoming more fluid with sustained pressure or movement', pronunciation: 'thik-SAH-tro-pee' },
        { term: 'integrated trigger point hypothesis', definition: 'Theory that trigger points result from energy crisis at motor endplates' },
        { term: 'axoplasmic flow', definition: 'Transport of nutrients and proteins along nerve axons' },
        { term: 'motor endplate', definition: 'Neuromuscular junction where nerve communicates with muscle fiber' },
      ],
      clinicalNotes: 'The predominant mechanism of manual therapy appears to be neurophysiological rather than mechanical. Clinically, this means that precision in technique application may be less important than previously believed, and attention should be given to contextual factors that enhance neurophysiological effects.',
    },
    5: {
      level: 5,
      summary: 'Contemporary manual therapy practice synthesizes mechanistic research, precision medicine approaches, and healthcare system considerations to optimize patient-centered outcomes within evidence-based frameworks.',
      explanation: `## Mechanistic Research Updates

**Neuroimaging Studies:**
- fMRI showing CNS changes post-manipulation
- Altered connectivity in pain processing regions
- Decreased activation in pain matrix
- Changes in descending modulation circuits

**Biomechanical Research:**
- Ultrasound studies of fascial movement
- MRI of spinal kinematics during manipulation
- Force-displacement curves analysis
- In vivo tissue response characterization

**Molecular and Cellular:**
- Fibroblast response to mechanical loading
- Cytokine changes post-manual therapy
- Gene expression alterations
- Inflammatory mediator modulation

## Precision Manual Therapy

**Responder Identification:**
- Genetic factors affecting response
- Psychosocial predictors of outcome
- Movement pattern phenotypes
- Pain sensitivity profiles

**Biomarker-Guided Treatment:**
- Inflammatory markers pre/post treatment
- Neurophysiological measures (QST, CPM)
- Imaging-guided technique selection
- Real-time ultrasound feedback

**Subgrouping Approaches:**
- Treatment-based classification
- Movement system impairment diagnosis
- Pain mechanism classification
- Multidimensional frameworks

## Emerging Techniques

**Tissue-Specific Approaches:**
- Fascial manipulation (Stecco method)
- Functional mobilization
- Positional release techniques
- Counterstrain updates

**Technology Integration:**
- Ultrasound-guided techniques
- Force-sensing feedback devices
- Virtual reality enhanced treatment
- Robotics in manual therapy research

**Combined Modality Approaches:**
- Manual therapy + NMES
- Manual therapy + blood flow restriction
- Manual therapy + pain neuroscience education
- Multi-modal care pathways

## Healthcare System Context

**Value-Based Care Implications:**
- Manual therapy cost-effectiveness
- Episode-of-care integration
- Outcomes benchmarking
- Quality metrics development

**Practice Pattern Considerations:**
- Optimal visit frequency
- Manual therapy-exercise balance
- Transition to self-management
- Appropriate utilization

**Scope of Practice:**
- State practice act variations
- Manipulation credentialing
- Dry needling regulations
- Interprofessional collaboration

## Research Priorities

**Mechanistic Questions:**
- Local vs. systemic effects
- Duration of effects
- Dose-response relationships
- Individual response variability

**Clinical Effectiveness:**
- Comparative effectiveness studies
- Long-term outcomes
- Cost-effectiveness analyses
- Real-world effectiveness vs. efficacy

**Implementation:**
- Translation of evidence to practice
- Clinical decision support tools
- Training and competency standards
- Quality improvement initiatives

## Expert Clinical Integration

**Complex Patient Management:**
- Central sensitization presentations
- Multi-site pain
- Psychological comorbidities
- Failed prior treatment

**Shared Decision-Making:**
- Patient preferences for manual therapy
- Evidence communication
- Expectation management
- Treatment goal alignment

**Skill Maintenance:**
- Psychomotor skill development
- Reflective practice
- Outcome monitoring
- Continuous quality improvement

## Professional Considerations

**Therapeutic Alliance:**
- Touch as communication
- Non-specific effects optimization
- Patient-centeredness
- Cultural considerations

**Ethical Practice:**
- Appropriate patient selection
- Avoiding over-treatment
- Evidence-based practice
- Informed consent

**Future Directions:**
- Precision manual therapy frameworks
- AI-assisted clinical decision making
- Remote assessment and guidance
- Standardized outcome measurement`,
      keyTerms: [
        { term: 'quantitative sensory testing', definition: 'Standardized testing of sensory function to assess pain processing mechanisms', pronunciation: 'QST' },
        { term: 'conditioned pain modulation', definition: 'Testing descending pain inhibition capacity ("pain inhibits pain")', pronunciation: 'CPM' },
        { term: 'central sensitization', definition: 'Amplification of pain signals by the central nervous system' },
        { term: 'fascial manipulation', definition: 'Manual therapy approach targeting specific fascial densifications' },
        { term: 'precision rehabilitation', definition: 'Approach matching treatments to individual patient characteristics' },
        { term: 'pain matrix', definition: 'Network of brain regions involved in processing pain experience' },
      ],
      clinicalNotes: `Current evidence synthesis on manual therapy:
1. Neurophysiological mechanisms predominate over tissue-specific mechanical effects
2. Effects are largely regional rather than segment-specific
3. Combining with active movement strategies essential for lasting benefit
4. Individual response varies significantly - monitoring outcomes crucial
5. Contextual factors (therapeutic alliance, expectations) significantly influence outcomes
6. Integration within multimodal care produces better outcomes than manual therapy alone
7. Research continues on precision approaches to identify optimal responders`,
    },
  },

  media: [
    {
      id: 'mobilization-grades-diagram',
      type: 'diagram',
      filename: 'mobilization-grades-diagram.svg',
      title: 'Maitland Mobilization Grades',
      description: 'Visual representation of mobilization amplitude and range position for grades I-IV',
    },
    {
      id: 'soft-tissue-techniques-overview',
      type: 'diagram',
      filename: 'soft-tissue-techniques-overview.svg',
      title: 'Soft Tissue Manual Therapy Techniques',
      description: 'Overview of common soft tissue mobilization approaches',
    },
  ],

  citations: [
    {
      id: 'maitland-vertebral-manipulation',
      type: 'textbook',
      title: 'Maitland\'s Vertebral Manipulation',
      authors: ['Maitland, G.D.', 'Hengeveld, E.', 'Banks, K.'],
      source: 'Elsevier',
    },
    {
      id: 'bialosky-mechanisms',
      type: 'article',
      title: 'The mechanisms of manual therapy in the treatment of musculoskeletal pain',
      authors: ['Bialosky, J.E.', 'Bishop, M.D.', 'Price, D.D.', 'Robinson, M.E.', 'George, S.Z.'],
      source: 'Manual Therapy',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-physical-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'Physical Therapy Principles' },
    { targetId: 'rehab-therapeutic-exercise', targetType: 'topic', relationship: 'sibling', label: 'Therapeutic Exercise' },
    { targetId: 'rehab-physical-modalities', targetType: 'topic', relationship: 'sibling', label: 'Physical Modalities' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'manual therapy', 'joint mobilization', 'soft tissue'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default manualTherapyTechniques;
