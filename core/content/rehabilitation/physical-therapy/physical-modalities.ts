/**
 * Physical Modalities - Comprehensive Educational Content
 *
 * Covers therapeutic agents including thermal, electrical, mechanical,
 * and electromagnetic modalities used in rehabilitation.
 */

import { EducationalContent } from '../../types';

export const physicalModalities: EducationalContent = {
  id: 'rehab-physical-modalities',
  type: 'concept',
  name: 'Physical Modalities',
  alternateNames: ['Physical Agents', 'Therapeutic Modalities', 'Electrophysical Agents'],

  levels: {
    1: {
      level: 1,
      summary: 'Physical modalities use things like heat, cold, and electricity to help reduce pain and heal injuries.',
      explanation: `Physical modalities are special tools and treatments that therapists use to help you feel better. They use different types of energy to reduce pain and help your body heal.

**Common types of modalities:**

**Heat Therapy**
Heat makes your muscles relax and brings more blood to an area. You might feel:
- A warm heating pad on your back
- A hot pack wrapped in towels
- Warm water in a whirlpool bath

**Cold Therapy (Ice)**
Cold reduces swelling and numbs pain. You might use:
- Ice packs wrapped in cloth
- Cold gel packs
- Ice massage

**Electrical Stimulation**
Small amounts of electricity can help reduce pain and make muscles work. You might feel:
- Tingling or buzzing
- Muscle twitching
- It shouldn't hurt!

**Ultrasound**
Sound waves that go deep into your tissues to help healing. You won't feel much - maybe slight warmth.

**When are modalities used?**
- When you first get hurt (cold helps swelling)
- Before exercise (heat loosens muscles)
- To reduce pain during recovery
- To help tissues heal

**Important to know:**
- Modalities help, but exercise is usually more important
- They work best when combined with other treatments
- Always tell your therapist if something feels wrong`,
      keyTerms: [
        { term: 'modality', definition: 'A type of treatment or tool used in therapy' },
        { term: 'heat therapy', definition: 'Using warmth to relax muscles and reduce pain' },
        { term: 'cold therapy', definition: 'Using cold to reduce swelling and numb pain' },
        { term: 'electrical stimulation', definition: 'Using small amounts of electricity to reduce pain or help muscles' },
        { term: 'ultrasound', definition: 'Treatment using sound waves to help tissues heal' },
      ],
      analogies: [
        'Heat therapy is like loosening a tight rubber band by warming it up - your muscles relax the same way.',
        'Cold therapy is like putting vegetables in the freezer to keep them from spoiling - it slows down swelling and damage.',
      ],
      examples: [
        'After twisting your ankle, ice packs help reduce swelling in the first few days.',
        'Before stretching a stiff shoulder, a hot pack helps the muscles become more flexible.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical modalities encompass thermal, electrical, mechanical, and electromagnetic agents used to reduce pain, decrease inflammation, promote tissue healing, and facilitate movement in rehabilitation.',
      explanation: `Physical modalities (also called physical agents) are treatments that use various forms of energy to produce therapeutic effects. They are often used alongside exercise and manual therapy.

**Categories of Physical Modalities:**

**1. Thermal Agents**

*Superficial Heat:*
- Hot packs: moist heat penetrating 1-2 cm
- Paraffin baths: wax coating for hands/feet
- Fluidotherapy: dry heat using cellulose particles
- Whirlpool: heat combined with water agitation

*Deep Heat:*
- Therapeutic ultrasound: penetrates 2-5 cm
- Diathermy: electromagnetic heating (shortwave, microwave)

*Effects of heat:*
- Increased blood flow
- Muscle relaxation
- Decreased pain
- Increased tissue extensibility
- Best used before stretching

*Cold/Cryotherapy:*
- Ice packs and cold packs
- Ice massage
- Cold compression units
- Vapocoolant sprays

*Effects of cold:*
- Decreased blood flow (initially)
- Reduced swelling
- Pain relief (numbing)
- Decreased muscle spasm
- Best for acute injuries

**2. Electrical Stimulation**

*TENS (Transcutaneous Electrical Nerve Stimulation):*
- Pain relief through nerve stimulation
- Portable units for home use
- Sensory-level stimulation

*NMES (Neuromuscular Electrical Stimulation):*
- Muscle strengthening and re-education
- Motor-level stimulation
- Used when muscles aren't activating properly

*Interferential Current (IFC):*
- Deeper tissue penetration
- Pain and edema management
- Two crossing currents

**3. Mechanical Modalities**

*Traction:*
- Cervical: neck stretching
- Lumbar: low back stretching
- Can be manual or mechanical

*Compression:*
- Intermittent pneumatic compression
- Reduces swelling
- Improves circulation

**4. Ultrasound**
- Sound waves at 1-3 MHz
- Thermal effects: tissue heating
- Non-thermal effects: cavitation, microstreaming
- Promotes tissue healing

**Evidence and Proper Use:**
- Modalities are adjuncts, not primary treatment
- Exercise typically produces better long-term outcomes
- Should be used with clear rationale
- Some modalities have limited evidence`,
      keyTerms: [
        { term: 'TENS', definition: 'Transcutaneous Electrical Nerve Stimulation - electrical device for pain relief', pronunciation: 'tenz' },
        { term: 'NMES', definition: 'Neuromuscular Electrical Stimulation - electricity to make muscles contract' },
        { term: 'superficial heat', definition: 'Heat that warms tissues close to the skin surface (1-2 cm)' },
        { term: 'deep heat', definition: 'Heat that penetrates to deeper tissues (2-5 cm or more)' },
        { term: 'cryotherapy', definition: 'Treatment using cold temperatures', pronunciation: 'cry-oh-THAIR-ah-pee' },
        { term: 'therapeutic ultrasound', definition: 'Use of high-frequency sound waves for tissue healing and pain relief' },
      ],
      analogies: [
        'TENS for pain is like static on a radio - the electrical signals interfere with pain signals reaching your brain.',
        'Ultrasound is like using a magnifying glass to focus the sun - it concentrates energy in one area.',
      ],
    },
    3: {
      level: 3,
      summary: 'Physical modalities utilize thermal, electrical, mechanical, acoustic, and electromagnetic energy transfer to produce physiological effects based on specific tissue responses and evidence-based application parameters.',
      explanation: `## Thermal Modalities

**Superficial Heating Agents:**

| Modality | Temperature | Duration | Depth |
|----------|-------------|----------|-------|
| Hot pack | 71-79°C pack | 15-20 min | 1-2 cm |
| Paraffin | 52-54°C | 15-20 min | <1 cm |
| Fluidotherapy | 46-49°C | 15-20 min | <1 cm |
| Infrared | Variable | 15-30 min | <1 cm |

**Physiological Effects of Heat:**
- Vasodilation and increased blood flow
- Increased metabolic rate
- Decreased muscle spindle sensitivity
- Increased collagen extensibility
- Decreased pain via gate mechanism

**Deep Heating Agents:**

*Therapeutic Ultrasound:*
- Frequency: 1 MHz (deeper, 2-5 cm) vs 3 MHz (superficial, 1-2 cm)
- Intensity: 0.5-2.0 W/cm²
- Duty cycle: continuous (thermal) vs pulsed (non-thermal)
- ERA (Effective Radiating Area): beam non-uniformity ratio

*Mechanisms:*
- Thermal: tissue temperature elevation
- Non-thermal: cavitation, acoustic microstreaming
- Promotes collagen synthesis and tissue repair

**Cryotherapy:**

*Physiological Responses:*
1. Immediate vasoconstriction
2. Hunting response (cycles of vasodilation/constriction)
3. Decreased nerve conduction velocity
4. Reduced enzymatic activity
5. Decreased secondary hypoxic injury

*Parameters:*
- Duration: 10-20 minutes
- Precautions: sensory testing, circulation assessment
- PRICE/POLICE protocols in acute injury

## Electrotherapy

**TENS (Transcutaneous Electrical Nerve Stimulation):**

| Type | Frequency | Intensity | Mechanism |
|------|-----------|-----------|-----------|
| Conventional | 50-100 Hz | Sensory | Gate control |
| Acupuncture-like | 2-4 Hz | Motor | Endorphin release |
| Burst | Bursts at 2-4 Hz | Sensory-motor | Combined |
| Brief-intense | 100-150 Hz | Noxious | Counter-irritation |

**NMES (Neuromuscular Electrical Stimulation):**
- Waveform: biphasic symmetrical or asymmetrical
- Frequency: 35-50 Hz for strength, 20-35 Hz for endurance
- Duty cycle: on/off ratio based on fatigue
- Applications: muscle re-education, strengthening, atrophy prevention

**Interferential Current (IFC):**
- Two medium-frequency currents (4000 Hz) crossing
- Beat frequency: 1-250 Hz at intersection
- Proposed advantage: deeper penetration
- Limited evidence for superiority over TENS

## Mechanical Modalities

**Traction:**

*Cervical Traction:*
- Force: 7-15% body weight (10-20 lbs typical)
- Position: flexion opens foramen, extension for disc
- Duration: intermittent 15-30 min vs sustained

*Lumbar Traction:*
- Force: 25-50% body weight
- Position: prone vs supine
- Evidence limited for disc herniation

**Compression:**
- Intermittent pneumatic compression
- Inflation: 80-100 mmHg
- On/off ratio: 3:1 typical
- Applications: edema, DVT prevention

## Evidence Considerations

**Strong Evidence:**
- TENS for various pain conditions
- Cryotherapy for acute injury
- NMES for quadriceps strengthening post-ACL

**Limited/Mixed Evidence:**
- Ultrasound for most conditions
- Traction for radiculopathy
- Laser therapy (emerging)

**Clinical Decision Making:**
- Consider patient goals and preferences
- Use as adjunct to active interventions
- Monitor outcomes and adjust`,
      keyTerms: [
        { term: 'duty cycle', definition: 'Ratio of on-time to total cycle time in pulsed modalities' },
        { term: 'ERA', definition: 'Effective Radiating Area - actual area of ultrasound transducer producing energy' },
        { term: 'cavitation', definition: 'Formation and collapse of gas bubbles in tissue from ultrasound energy' },
        { term: 'gate control theory', definition: 'Mechanism where non-painful input closes the gate to painful input' },
        { term: 'interferential current', definition: 'Two medium-frequency currents producing a lower beat frequency at their intersection' },
        { term: 'hunting response', definition: 'Cycles of vasoconstriction and vasodilation during prolonged cold application' },
      ],
      clinicalNotes: 'Therapeutic ultrasound has fallen out of favor for many conditions due to limited evidence. TENS remains well-supported for pain management. NMES is particularly effective for quadriceps activation post-ACL surgery when combined with exercise. Always consider modalities as adjuncts to, not replacements for, active treatment.',
    },
    4: {
      level: 4,
      summary: 'Physical modalities application integrates biophysical mechanisms, tissue-specific dosing parameters, and outcome-based protocols within evidence-based frameworks addressing both peripheral and central pain mechanisms.',
      explanation: `## Biophysical Principles

**Thermal Energy Transfer:**
- Conduction: direct contact (hot packs)
- Convection: fluid medium (whirlpool)
- Conversion: energy transformation (ultrasound, diathermy)
- Radiation: electromagnetic waves (infrared)

**Tissue Temperature Elevation:**
- Vigorous heating: 40-45°C (increased collagen extensibility)
- Mild heating: 37-40°C (metabolic effects, pain relief)
- Tissue damage threshold: >45°C
- Time-temperature relationship: Q10 effect

**Electrical Parameters:**
- Current types: direct (DC), alternating (AC), pulsed
- Waveforms: monophasic, biphasic, polyphasic
- Characteristics: amplitude, frequency, phase duration, duty cycle
- Impedance considerations: electrode size, tissue resistance

## Advanced Electrotherapy

**Iontophoresis:**
- Drug delivery via direct current
- Electrode polarity matches drug charge
- Common medications: dexamethasone, lidocaine
- Parameters: 40-80 mA-minutes dose

**High-Voltage Pulsed Current (HVPC):**
- Monophasic twin peak waveform
- Voltage: 100-500V, low average current
- Applications: wound healing, edema reduction
- Polarity effects on tissue healing

**Microcurrent Electrical Neuromuscular Stimulation (MENS):**
- Subsensory current levels (1-1000 μA)
- Proposed mechanism: cellular bioelectric effects
- Limited evidence base
- Applications: tissue healing, pain

**Russian Current:**
- Medium-frequency sinusoidal current (2500 Hz)
- Burst at 50 Hz
- Originally developed for strength training
- May reduce discomfort vs traditional NMES

## Ultrasound Advanced Concepts

**Acoustic Behaviors:**
- Reflection: at tissue interfaces
- Refraction: direction change at interfaces
- Absorption: energy conversion to heat
- Attenuation: energy loss with depth

**Biophysical Effects:**

| Effect | Mechanism | Clinical Application |
|--------|-----------|---------------------|
| Thermal | Tissue heating | Pre-stretch, pain |
| Cavitation | Bubble formation | Tissue healing |
| Microstreaming | Fluid movement | Cell membrane effects |
| Acoustic streaming | Large-scale flow | Nutrient transport |

**Phonophoresis:**
- Ultrasound-enhanced drug penetration
- Coupling medium contains medication
- Parameters similar to therapeutic US
- Variable evidence for enhanced delivery

## Photobiomodulation (Low-Level Laser Therapy)

**Parameters:**
- Wavelength: 600-1000 nm
- Power: 5-500 mW
- Dose: 1-4 J/cm² (superficial), 4-10 J/cm² (deep)
- Class: 3a, 3b laser classifications

**Proposed Mechanisms:**
- Cytochrome c oxidase absorption
- ATP synthesis enhancement
- Reactive oxygen species modulation
- Gene expression alteration

**Evidence:**
- Tendinopathies: moderate positive evidence
- Neck pain: moderate evidence
- Low back pain: mixed evidence
- Wound healing: promising

## Pain Mechanism Considerations

**Peripheral Pain Mechanisms:**
- Nociceptor sensitization
- Inflammatory mediators
- Modalities: cryotherapy, TENS, ultrasound

**Central Sensitization:**
- Wind-up and temporal summation
- Reduced descending inhibition
- Modalities: may be less effective
- Consider multimodal approach

**Integration with Manual Therapy:**
- Pre-treatment with modalities
- Combined effects
- Tissue preparation for manipulation
- Pain reduction enabling exercise

## Clinical Protocols

**Acute Injury Protocol:**
- POLICE: Protection, Optimal Loading, Ice, Compression, Elevation
- Cryotherapy: 15-20 min every 2-4 hours
- TENS for pain if needed
- Early motion as tolerated

**Chronic Pain Protocol:**
- Heat before stretching/exercise
- TENS as needed for pain management
- US for specific tissue pathology
- Focus on active interventions

**Post-Surgical Protocol:**
- NMES for muscle activation
- Cryotherapy for pain/swelling
- Graduated progression of modalities
- Transition to exercise-based program`,
      keyTerms: [
        { term: 'iontophoresis', definition: 'Use of direct current to drive ionized medications through skin', pronunciation: 'eye-on-toh-for-EE-sis' },
        { term: 'phonophoresis', definition: 'Use of ultrasound to enhance medication penetration', pronunciation: 'foh-noh-for-EE-sis' },
        { term: 'photobiomodulation', definition: 'Use of light (laser or LED) to produce therapeutic tissue effects' },
        { term: 'Q10 effect', definition: 'Principle that metabolic rate doubles with each 10°C temperature increase' },
        { term: 'attenuation', definition: 'Progressive reduction in energy as ultrasound travels through tissue' },
        { term: 'central sensitization', definition: 'Amplification of pain signaling within the central nervous system' },
      ],
      clinicalNotes: 'Patient selection is critical for modality effectiveness. Central sensitization presentations may respond less to peripheral modalities. Evidence continues to evolve, with photobiomodulation showing increasing support. Always use modalities as part of comprehensive care, not standalone treatment. Document rationale and outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary physical modalities practice integrates emerging technologies, precision dosing approaches, and healthcare system considerations within evidence-based frameworks addressing mechanism-specific applications and value-based outcomes.',
      explanation: `## Emerging Technologies

**Focused Shockwave Therapy:**
- Extracorporeal Shockwave (ESWT)
- Radial vs focused application
- Mechanisms: cavitation, mechanotransduction, neovascularization
- Strong evidence for calcific tendinopathy, plantar fasciitis
- Dose: energy flux density, total impulses

**Blood Flow Restriction with Modalities:**
- Combined BFR + NMES
- Low-load muscle activation with metabolic stress
- Potential for enhanced adaptation
- Emerging protocols and evidence

**Pulsed Electromagnetic Field (PEMF):**
- Non-invasive magnetic stimulation
- Bone healing: FDA approved
- Soft tissue applications: emerging
- Parameters: frequency, intensity, duration highly variable

**Transcranial Direct Current Stimulation (tDCS):**
- Non-invasive brain stimulation
- Pain modulation through cortical effects
- Research tool transitioning to clinical
- Combined with physical therapy interventions

**Cryoneurolysis:**
- Targeted nerve freezing
- Reversible conduction block
- Longer duration than injection blocks
- Image-guided precision

## Precision Modality Application

**Biomarker-Guided Dosing:**
- Inflammatory marker monitoring
- Tissue temperature measurement
- Real-time biofeedback integration
- Personalized protocols

**Imaging Integration:**
- Ultrasound-guided application
- MRI tissue characterization
- Objective tissue assessment
- Treatment response monitoring

**Responder Identification:**
- Phenotyping for modality selection
- Pain mechanism classification
- Prediction models for response
- Personalized treatment pathways

## Healthcare System Considerations

**Evidence Translation:**
- Systematic reviews and meta-analyses
- Clinical practice guideline incorporation
- De-implementation of ineffective modalities
- Evidence-practice gap management

**Value-Based Care:**
- Cost-effectiveness considerations
- Modality vs. exercise time tradeoffs
- Episode-of-care integration
- Quality metrics development

**Reimbursement Considerations:**
- Payer policies on modality coverage
- Documentation requirements
- Medical necessity justification
- Outcome tracking requirements

## Research Frontiers

**Mechanism Elucidation:**
- Cellular and molecular pathways
- Neurophysiological effects
- Tissue-specific responses
- Dose-response optimization

**Technology Development:**
- Wearable modality devices
- AI-controlled parameters
- Home-based delivery systems
- Remote monitoring integration

**Clinical Trials:**
- Comparative effectiveness research
- Combination therapy protocols
- Long-term outcome studies
- Implementation science

## Professional Practice

**Competency Development:**
- Didactic and clinical training
- Equipment-specific certification
- Ongoing education requirements
- Skill maintenance

**Safety Considerations:**
- Contraindications and precautions
- Equipment maintenance
- Adverse event monitoring
- Risk management

**Ethical Practice:**
- Evidence-based selection
- Informed consent
- Avoiding overutilization
- Patient-centered decision making

## Clinical Integration Framework

**Decision Algorithm:**
1. Identify treatment goals (pain, healing, function)
2. Classify pain mechanism (nociceptive, neuropathic, central)
3. Select modality based on evidence and mechanism
4. Determine dosing parameters
5. Integrate with active interventions
6. Monitor outcomes and adjust

**Modality Selection by Mechanism:**

| Pain Mechanism | Recommended Modalities | Rationale |
|----------------|----------------------|-----------|
| Acute nociceptive | Cryotherapy, TENS | Peripheral inflammation, gate control |
| Chronic nociceptive | Heat, TENS, US | Tissue healing, pain modulation |
| Neuropathic | TENS, scrambler | Nerve pathway modulation |
| Central sensitization | Limited role | Target CNS mechanisms instead |

**Quality Indicators:**
- Appropriate modality selection
- Evidence-based parameters
- Combined with active treatment
- Documented outcomes
- Patient satisfaction

## Future Directions

**Technology Integration:**
- Smart modality devices
- Closed-loop systems
- Virtual reality combination
- Telehealth delivery

**Precision Approaches:**
- Genetic/phenotypic matching
- Real-time parameter adjustment
- Outcome prediction models
- Personalized protocols

**Healthcare System:**
- Value demonstration
- Evidence-based guideline adherence
- Quality improvement initiatives
- Outcomes-based reimbursement`,
      keyTerms: [
        { term: 'extracorporeal shockwave therapy', definition: 'High-energy acoustic waves applied externally for tissue healing', pronunciation: 'ex-tra-cor-POR-ee-al' },
        { term: 'transcranial direct current stimulation', definition: 'Non-invasive brain stimulation using weak electrical current' },
        { term: 'cryoneurolysis', definition: 'Targeted freezing of nerves to produce temporary conduction block' },
        { term: 'pulsed electromagnetic field therapy', definition: 'Non-thermal electromagnetic energy application for tissue healing' },
        { term: 'de-implementation', definition: 'Systematic removal of low-value or ineffective interventions from practice' },
        { term: 'scrambler therapy', definition: 'Electrical stimulation aimed at replacing pain signals with non-pain information' },
      ],
      clinicalNotes: `Key practice considerations:
1. Modalities remain adjuncts to active treatment in most cases
2. Select based on pain mechanism and treatment goal
3. Use evidence-based parameters; avoid tradition-based application
4. Monitor outcomes and discontinue if not contributing to goals
5. Consider cost-effectiveness and value in modality selection
6. Stay current with emerging technologies and evidence updates
7. Document rationale for modality selection and outcomes achieved`,
    },
  },

  media: [
    {
      id: 'modalities-classification-diagram',
      type: 'diagram',
      filename: 'modalities-classification-diagram.svg',
      title: 'Physical Modalities Classification',
      description: 'Organization of physical modalities by energy type and mechanism',
    },
    {
      id: 'thermal-depth-comparison',
      type: 'diagram',
      filename: 'thermal-depth-comparison.svg',
      title: 'Tissue Penetration Depth by Modality',
      description: 'Comparison of superficial vs deep heating modality penetration',
    },
  ],

  citations: [
    {
      id: 'cameron-physical-agents',
      type: 'textbook',
      title: 'Physical Agents in Rehabilitation',
      authors: ['Cameron, M.H.'],
      source: 'Elsevier',
    },
    {
      id: 'michlovitz-thermal-agents',
      type: 'textbook',
      title: 'Modalities for Therapeutic Intervention',
      authors: ['Michlovitz, S.L.', 'Bellew, J.W.', 'Nolan, T.P.'],
      source: 'F.A. Davis',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-physical-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'Physical Therapy Principles' },
    { targetId: 'rehab-therapeutic-exercise', targetType: 'topic', relationship: 'sibling', label: 'Therapeutic Exercise' },
    { targetId: 'rehab-manual-therapy', targetType: 'topic', relationship: 'sibling', label: 'Manual Therapy' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'modalities', 'electrotherapy', 'thermal therapy'],
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

export default physicalModalities;
