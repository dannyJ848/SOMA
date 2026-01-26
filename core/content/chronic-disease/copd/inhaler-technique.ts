/**
 * Inhaler Technique - COPD Management
 *
 * Teaching patients proper inhaler use for COPD management.
 */

import { EducationalContent } from '../../types';

export const INHALER_TECHNIQUE: EducationalContent = {
  id: 'copd-inhaler-technique',
  type: 'concept',
  name: 'Inhaler Technique',
  alternateNames: ['Inhaler use', 'Proper inhaler technique', 'Inhaler instructions'],

  levels: {
    1: {
      level: 1,
      summary: 'Using your inhaler correctly is very important because it helps the medicine get deep into your lungs where it is needed.',
      explanation: `**Why Technique Matters**
Even the best medicine won't help if it doesn't reach your lungs. Poor technique means most medicine stays in your mouth or throat instead of your lungs.

**Types of Inhalers:**

*Metered-Dose Inhaler (MDI) - "Puffer":*
- Pressurized canister
- Requires good coordination
- Often used with a spacer

*Dry Powder Inhaler (DPI):*
- Breath-activated
- No spacer needed
- Must inhale quickly and deeply

**How to Use a Metered-Dose Inhaler (MDI):**
1. Remove the cap and shake well
2. Breathe out completely
3. Put mouthpiece in your mouth, seal lips around it
4. Press down on the canister AS you start to breathe in slowly
5. Breathe in slowly and deeply (3-5 seconds)
6. Hold your breath for 10 seconds (or as long as comfortable)
7. Breathe out slowly
8. Wait 1 minute before the next puff if needed

**Using a Spacer (Recommended!):**
A spacer is a tube that holds the medicine so you don't have to coordinate pressing and breathing perfectly.
1. Attach inhaler to spacer
2. Press the inhaler once
3. Take 4-6 slow breaths from the spacer
4. Much easier!

**How to Use a Dry Powder Inhaler:**
1. Open or load the inhaler as directed
2. Breathe out completely (away from inhaler!)
3. Seal lips around mouthpiece
4. Breathe in FAST and DEEP
5. Hold breath for 10 seconds
6. Breathe out slowly

**Common Mistakes:**
- Not shaking MDI
- Breathing in too fast (MDI) or too slow (DPI)
- Not holding breath after
- Breathing out into DPI (blows medicine away)
- Inhaler empty without knowing

**Care for Your Inhaler:**
- Check the dose counter
- Keep cap on when not using
- Clean mouthpiece weekly
- Replace when empty

**Tip:** Ask your doctor or pharmacist to watch you use your inhaler to make sure your technique is correct!`,
      keyTerms: [
        { term: 'inhaler', definition: 'A device that delivers medicine directly to your lungs' },
        { term: 'spacer', definition: 'A tube that attaches to an inhaler to make it easier to use' },
        { term: 'metered-dose inhaler (MDI)', definition: 'An inhaler that sprays medicine when you press it' },
        { term: 'dry powder inhaler (DPI)', definition: 'An inhaler that releases powder when you breathe in' },
      ],
      analogies: [
        'Using an inhaler correctly is like aiming a basketball - if your form is wrong, the ball (medicine) won\'t go where it needs to.',
        'A spacer is like a net that catches the medicine and holds it for you to breathe in.',
      ],
      examples: [
        'Tom was using his inhaler wrong - breathing in too fast. After his pharmacist showed him the right way, his COPD symptoms got much better.',
        'Maria uses a spacer with her inhaler and finds it much easier to get the medicine into her lungs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Correct inhaler technique is essential for medication delivery in COPD. Different devices require specific techniques, and regular assessment prevents common errors that reduce effectiveness.',
      explanation: `**Importance of Inhaler Technique:**

Studies show 70-90% of patients make at least one error in inhaler use. Incorrect technique leads to:
- Reduced medication reaching lungs
- Poor symptom control
- Increased exacerbations
- Unnecessary medication escalation

**Device-Specific Techniques:**

*Pressurized Metered-Dose Inhaler (pMDI):*
| Step | Technique | Common Error |
|------|-----------|--------------|
| Preparation | Shake 4-5 times | Not shaking |
| Position | Upright position | Tilted |
| Breathing out | Exhale to FRC | Incomplete exhalation |
| Coordination | Actuate at start of slow inhalation | Press before/after breathing |
| Inhalation | Slow, deep (30 L/min) | Too fast |
| Breath hold | 10 seconds | Too short or none |

*Dry Powder Inhalers (DPI):*
| Device Type | Loading | Inhalation |
|-------------|---------|------------|
| Diskus | Slide lever | Fast and deep |
| HandiHaler | Insert capsule, pierce | Fast and deep |
| Ellipta | Open cover | Fast and deep |
| Respimat | Turn, open | Slow and steady |

*Soft Mist Inhaler (Respimat):*
- Unique technique - slow inspiration like pMDI
- Does NOT require fast inhalation
- Often confused with DPIs

**Spacers and Valved Holding Chambers:**

*Benefits:*
- Reduce oropharyngeal deposition
- Eliminate need for coordination
- Reduce side effects (thrush with ICS)
- Improve lung deposition

*Technique with Spacer:*
1. Assemble and attach inhaler
2. Actuate once into spacer
3. Breathe in slowly (or multiple tidal breaths)
4. Hold breath
5. Only one actuation at a time

**Assessing Technique:**

*Key Assessment Points:*
- Preparation of device
- Exhalation before inhalation
- Proper inhalation speed
- Breath hold
- Dose counting awareness

*When to Assess:*
- Initial prescription
- Each healthcare visit
- After exacerbations
- When switching devices
- If poor disease control

**Teaching Approach:**

*Teach-Back Method:*
1. Demonstrate correct technique
2. Have patient demonstrate
3. Identify errors
4. Correct and reinforce
5. Patient demonstrates again
6. Confirm understanding

**Maintenance:**

| Device | Cleaning | Frequency |
|--------|----------|-----------|
| pMDI | Remove canister, rinse plastic | Weekly |
| DPI | Wipe mouthpiece (dry) | As needed |
| Spacer | Wash, air dry | Weekly |

**Dose Counter Awareness:**
- Check remaining doses
- Know when to replace
- Don't rely on "floating" test
- Order refills before empty`,
      keyTerms: [
        { term: 'lung deposition', definition: 'Amount of inhaled medication that actually reaches the lungs' },
        { term: 'oropharyngeal deposition', definition: 'Medication that deposits in mouth and throat rather than reaching lungs' },
        { term: 'peak inspiratory flow', definition: 'Maximum speed of air during inhalation' },
        { term: 'valved holding chamber', definition: 'Spacer with one-way valve that holds medication until patient inhales' },
      ],
      analogies: [
        'Inhaler technique is like the difference between throwing a ball over a fence versus placing it through a door - getting it where it needs to go requires the right approach.',
      ],
    },
    3: {
      level: 3,
      summary: 'Inhaler technique optimization requires understanding device-specific aerosol physics, patient factors affecting delivery, and systematic approaches to assessment and training.',
      explanation: `**Aerosol Physics:**

*Particle Deposition Mechanisms:*
Inertial Impaction:
- Large particles (>5 μm)
- Deposits in upper airways
- Higher velocity increases impaction

Sedimentation:
- Medium particles (1-5 μm)
- Deposits in lower airways
- Slow breathing, breath hold

Diffusion:
- Small particles (<0.5 μm)
- Deposits in alveoli
- May be exhaled

*Optimal Particle Size:*
- Target: 1-5 μm (fine particle fraction)
- Measured as MMAD (mass median aerodynamic diameter)
- Device-specific particle generation

**Device Comparison:**

| Device | Particle Size | Coordination | Inspiratory Flow |
|--------|---------------|--------------|------------------|
| pMDI | Variable | Required | 30 L/min (slow) |
| pMDI + spacer | Reduced | Less critical | 30 L/min |
| DPI | Variable | Automatic | >30-60 L/min (fast) |
| SMI | Fine | Required | 30 L/min |
| Nebulizer | Variable | None | Tidal breathing |

**Patient Factors Affecting Delivery:**

*Physical Limitations:*
| Factor | Impact | Solution |
|--------|--------|----------|
| Hand strength | pMDI actuation | Breath-actuated, DPI |
| Dexterity | Device manipulation | Simpler devices |
| Inspiratory capacity | Flow generation | Appropriate device selection |
| Cognitive function | Complex instructions | Training, simpler devices |

*Disease Severity:*
- Severe COPD → reduced inspiratory flow
- May not achieve required DPI flow
- Consider pMDI + spacer or nebulizer

**Critical Errors by Device:**

*pMDI:*
| Error | Frequency | Impact |
|-------|-----------|--------|
| Coordination failure | 30-40% | Major |
| Too fast inhalation | 20-30% | Moderate |
| No breath hold | 40-50% | Moderate |
| No shaking | 20-30% | Variable |

*DPI:*
| Error | Frequency | Impact |
|-------|-----------|--------|
| Insufficient inspiratory flow | 20-40% | Major |
| Exhaling into device | 10-20% | Major |
| No breath hold | 40-50% | Moderate |
| Incorrect loading | 10-20% | Major |

**Training Effectiveness:**

*Evidence-Based Approaches:*
- Physical demonstration superior to verbal
- Repeat training at each visit
- Placebo devices for practice
- Video instruction as supplement
- Inhaler technique reminders in clinic

*Assessment Tools:*
- Inhaler technique checklists
- Video recording and review
- Objective flow measurement (DPIs)
- Electronic monitoring devices

**Switching Devices:**

*Considerations:*
- Retraining essential
- Different technique requirements
- Patient preference matters
- Adherence implications

*Best Practices:*
- Minimize number of different device types
- Consider single inhaler therapy where possible
- Account for patient abilities
- Provide written instructions

**Quality Metrics:**

*Healthcare Provider Assessment:*
- Document technique assessment
- Track errors over time
- Measure improvement with training
- Link to outcomes (exacerbations)`,
      keyTerms: [
        { term: 'MMAD', definition: 'Mass median aerodynamic diameter; measure of particle size distribution in aerosol' },
        { term: 'fine particle fraction', definition: 'Percentage of emitted dose with particles in respirable range (typically <5 μm)' },
        { term: 'critical error', definition: 'Inhaler error that significantly reduces or eliminates drug delivery' },
        { term: 'inspiratory flow rate', definition: 'Speed of air inhalation; different devices require different optimal rates' },
      ],
      clinicalNotes: 'Critical errors eliminate therapeutic effect. Assess technique at every visit - do not assume prior training persists. Consider inspiratory flow limitations in severe COPD when selecting devices. Single inhaler therapy simplifies technique requirements.',
    },
    4: {
      level: 4,
      summary: 'Advanced inhaler technique optimization integrates aerosol science, device engineering, patient assessment algorithms, and digital health tools to maximize pulmonary drug delivery and clinical outcomes.',
      explanation: `**Aerosol Science Principles:**

*Drug Delivery Cascade:*
Emitted Dose (labeled dose that leaves device)
         ↓
Inhaled Dose (enters respiratory tract)
         ↓
Lung Dose (reaches lower respiratory tract)
         ↓
Site of Action (target receptors)

Losses at each stage:
- Device retention
- Oropharyngeal deposition
- Exhaled fraction
- Regional distribution

*Factors Affecting Deposition:*
| Factor | Effect |
|--------|--------|
| Particle size | Determines deposition region |
| Particle velocity | Affects impaction |
| Inspiratory flow | Influences particle movement |
| Breath hold | Allows sedimentation |
| Airway geometry | Disease-specific patterns |
| Humidity | Particle growth |

**Device Engineering:**

*pMDI Technology:*
- HFA propellants (replaced CFCs)
- Formulation affects particle size
- Metering valve precision
- Priming requirements

*DPI Technology:*
| Type | Drug Form | Powder Dispersion |
|------|-----------|-------------------|
| Capsule-based | Drug in capsule | Pierced, patient-driven |
| Reservoir | Drug in hopper | Metered with each dose |
| Multi-dose | Pre-metered blisters | Individual dose chambers |

*Soft Mist Technology:*
- Mechanical energy (spring)
- No propellants
- Slow-moving cloud
- High fine particle fraction

**Advanced Patient Assessment:**

*Inspiratory Flow Measurement:*
In-Check DIAL:
- Simulates device resistance
- Measures peak inspiratory flow
- Identifies patients unable to achieve required flow
- Guides device selection

Flow Requirements:
- pMDI: 20-30 L/min (slow, steady)
- Diskus: >30 L/min
- HandiHaler: >20 L/min
- Turbuhaler: >60 L/min

*Cognitive Assessment:*
- Montreal Cognitive Assessment (MoCA)
- Correlation with technique retention
- Simplified device recommendations
- Caregiver involvement

**Electronic Monitoring:**

*Smart Inhalers:*
| Feature | Clinical Value |
|---------|----------------|
| Dose recording | Adherence monitoring |
| Technique assessment | Flow, timing analysis |
| Reminders | Improve adherence |
| Data transmission | Remote monitoring |
| Feedback | Patient engagement |

*Outcomes Data:*
- Improved adherence with monitoring
- Technique feedback improves skills
- Cost-effectiveness demonstrated
- Implementation challenges

**Training Innovation:**

*Virtual Reality/Simulation:*
- Immersive training environments
- Repeated practice without waste
- Technique feedback
- Patient engagement

*Video-Based Assessment:*
- Remote technique evaluation
- Telemedicine applications
- Training reinforcement
- Quality improvement

**Device Selection Algorithm:**

Patient Assessment:
         ↓
Cognitive/Physical Abilities
         ↓
Measure Inspiratory Flow
         ↓
Patient Preference
         ↓
Device Selection:
- Flow adequate + good coordination → Any device
- Flow adequate + poor coordination → DPI, spacer
- Flow inadequate → pMDI + spacer, nebulizer
- Cognitive limitation → Simplest device, caregiver

**Quality Improvement:**

*Healthcare System Approaches:*
- Standardized assessment protocols
- Documentation requirements
- Training competencies for staff
- Outcome tracking

*Metrics:*
| Metric | Target |
|--------|--------|
| Technique assessment documented | 100% visits |
| Critical errors identified | <20% patients |
| Error correction demonstrated | 100% identified |
| Technique retention at follow-up | >80% |`,
      keyTerms: [
        { term: 'emitted dose', definition: 'Amount of drug that leaves the inhaler device' },
        { term: 'lung deposition fraction', definition: 'Percentage of emitted dose reaching the lower respiratory tract' },
        { term: 'smart inhaler', definition: 'Electronic device monitoring adherence and technique' },
        { term: 'In-Check DIAL', definition: 'Device measuring inspiratory flow at various resistances simulating different inhalers' },
        { term: 'HFA', definition: 'Hydrofluoroalkane; propellant in modern metered-dose inhalers' },
      ],
      clinicalNotes: 'Peak inspiratory flow measurement guides device selection in severe COPD. Smart inhalers provide objective adherence data. Training effectiveness decreases over time - reinforcement at every visit. Consider single inhaler triple therapy to simplify device burden.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art inhaler technique optimization leverages computational aerosol modeling, precision phenotyping, connected health platforms, and artificial intelligence to enable personalized pulmonary drug delivery.',
      explanation: `**Computational Aerosol Science:**

*In Silico Modeling:*
Computational Fluid Dynamics (CFD):
- 3D airway reconstruction (CT/MRI)
- Particle tracking simulations
- Deposition pattern prediction
- Device optimization

Variables Modeled:
- Inspiratory flow profile
- Particle size distribution
- Airway geometry
- Disease-specific changes

*Applications:*
| Application | Clinical Value |
|-------------|----------------|
| Device design | Optimize particle generation |
| Formulation development | Target particle size |
| Patient-specific dosing | Personalized therapy |
| Training tools | Visualization of deposition |

**Precision Phenotyping:**

*Airway Imaging:*
- CT-based airway analysis
- Functional respiratory imaging
- Regional ventilation assessment
- Deposition pattern prediction

*Physiological Assessment:*
Comprehensive Evaluation:
- Spirometry
- Lung volumes
- Inspiratory flow measurement
- Airway resistance
- Ventilation heterogeneity

Integration:
- Individual deposition prediction
- Device matching
- Dose optimization

**Connected Health Platforms:**

*Ecosystem Integration:*
Smart Inhaler
     ↓
Data Transmission
     ↓
Cloud Platform:
- Adherence analytics
- Technique patterns
- Symptom correlation
- Predictive models
     ↓
Clinical Dashboard + Patient App
     ↓
Actionable Insights

*AI Applications:*
| Function | Approach |
|----------|----------|
| Technique scoring | Audio/accelerometer analysis |
| Adherence prediction | Pattern recognition |
| Intervention timing | Optimal reminder delivery |
| Outcome prediction | Exacerbation risk |

**Novel Drug Delivery:**

*Emerging Technologies:*
| Technology | Advantage | Status |
|------------|-----------|--------|
| Adaptive aerosol delivery | Synchronizes with breathing | Available |
| Vibrating mesh nebulizers | Efficient delivery | Available |
| Intracorporeal aerosol | Direct lung delivery | Research |
| Nanoparticle formulations | Targeted delivery | Research |

*Controlled Release:*
- Extended duration of action
- Reduced dosing frequency
- Improved adherence
- Formulation challenges

**Implementation Science:**

*Barriers to Optimal Technique:*
Patient Level:
- Health literacy
- Cognitive function
- Physical abilities
- Beliefs/preferences

Provider Level:
- Time constraints
- Training competency
- Assessment documentation
- Follow-up systems

System Level:
- Device availability
- Cost/coverage
- Care coordination
- Quality metrics

*Strategies:*
| Barrier | Intervention |
|---------|--------------|
| Patient knowledge | Multimodal education |
| Provider skill | Training programs |
| System support | EHR integration, protocols |
| Adherence | Connected devices |

**Future Directions:**

*Research Priorities:*
- Patient-specific dosing algorithms
- AI-optimized training
- Outcome-linked device selection
- Long-term connected health studies

*Emerging Paradigms:*
Current: Device → Patient → Assessment → Correction

Future:
Personalized Device Selection (phenotype-matched)
     ↓
Smart Device (real-time feedback)
     ↓
Continuous Monitoring (adherence + technique)
     ↓
Adaptive Intervention (AI-guided)
     ↓
Outcome Optimization (precision medicine)
`,
      keyTerms: [
        { term: 'computational fluid dynamics', definition: 'Computer simulation of fluid flow used to model aerosol behavior in airways' },
        { term: 'functional respiratory imaging', definition: 'Advanced imaging technique visualizing regional lung function' },
        { term: 'adaptive aerosol delivery', definition: 'Smart nebulizer technology synchronizing drug delivery with patient breathing pattern' },
        { term: 'vibrating mesh nebulizer', definition: 'Efficient nebulizer technology using vibrating membrane to generate aerosol' },
        { term: 'in silico', definition: 'Computer-based modeling and simulation' },
        { term: 'nanoparticle', definition: 'Engineered particles at nanometer scale for targeted drug delivery' },
      ],
      clinicalNotes: 'CFD modeling enables patient-specific deposition prediction but not yet standard clinical practice. Smart inhalers provide actionable adherence data. Vibrating mesh nebulizers offer efficient delivery for severe patients. Future direction is toward closed-loop feedback systems for continuous technique optimization.',
    },
  },

  media: [
    {
      id: 'inhaler-technique-guide',
      type: 'diagram',
      filename: 'inhaler-technique-steps.svg',
      title: 'Inhaler Technique Guide',
      description: 'Step-by-step visual guide for different inhaler types',
    },
  ],

  citations: [
    {
      id: 'gold-report',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD',
      source: 'Global Initiative for Chronic Obstructive Lung Disease',
    },
  ],

  crossReferences: [
    { targetId: 'copd-breathing-exercises', targetType: 'topic', relationship: 'related', label: 'Breathing Exercises' },
    { targetId: 'copd-action-plans', targetType: 'topic', relationship: 'related', label: 'COPD Action Plans' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['COPD', 'medication delivery', 'self-management'],
    keywords: ['inhaler technique', 'MDI', 'DPI', 'spacer', 'COPD treatment'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
