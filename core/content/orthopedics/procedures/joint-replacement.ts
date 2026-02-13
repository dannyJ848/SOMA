import { EducationalContent } from '../../types';

export const jointReplacementProcedureContent: EducationalContent = {
  id: 'ortho-patient-joint-replacement-procedure',
  type: 'concept',
  name: 'Joint Replacement Surgery',
  alternateNames: ['Arthroplasty', 'Joint replacement', 'Hip replacement', 'Knee replacement'],

  levels: {
    1: {
      level: 1,
      summary: 'Joint replacement surgery removes damaged joint surfaces and replaces them with artificial parts, relieving pain and restoring function when arthritis or injury has severely damaged a joint.',
      explanation: `When arthritis or injury damages a joint beyond repair, joint replacement surgery can give you back your life. Millions of people have this surgery and most are very satisfied with the results.

**What Is Joint Replacement?**
- The damaged bone and cartilage are removed
- Metal, plastic, or ceramic artificial parts are put in their place
- The new joint mimics normal joint movement
- Most people have much less pain after recovery

**Most Common Joint Replacements:**
- **Knee replacement**: Most common joint replacement
- **Hip replacement**: Very successful surgery
- **Shoulder replacement**: Growing in popularity
- **Ankle, elbow, wrist**: Less common but available

**Why People Need Joint Replacement:**
- Severe arthritis (osteoarthritis, rheumatoid)
- Bone damage from injury
- Pain that limits daily activities
- Stiffness that affects quality of life
- Other treatments no longer helping

**Before Surgery:**
- Medical evaluation to ensure you're healthy for surgery
- May need to optimize weight, blood pressure, diabetes
- Stop certain medications
- Prepare your home for recovery
- Arrange help for first few weeks

**What to Expect After:**

*First few weeks:*
- Hospital stay: 1-3 days (often same day or next)
- Physical therapy starts immediately
- Walker or crutches for support
- Pain medication as needed
- Home exercises are important

*Recovery timeline:*
- Walking with support: Days
- Driving: 4-6 weeks
- Return to work (desk job): 4-6 weeks
- Full recovery: 3-6 months

**Results:**
- 90-95% of joint replacements are successful
- Most last 15-25+ years
- Most people have significant pain relief
- Can return to many activities`,
      keyTerms: [
        { term: 'arthroplasty', definition: 'Medical term for joint replacement surgery' },
        { term: 'prosthesis', definition: 'Artificial body part, like the metal and plastic joint components' },
        { term: 'implant', definition: 'The artificial parts that replace your joint' },
      ],
      analogies: [
        'Joint replacement is like replacing worn-out brake pads and rotors on a car.',
        'The prosthesis works like a hinge on a door, allowing smooth movement.',
      ],
      examples: [
        'Someone who can barely walk due to knee arthritis may walk pain-free after replacement.',
        'A hip replacement can allow someone to return to golf, hiking, or swimming.',
      ],
    },
    2: {
      level: 2,
      summary: 'Total joint arthroplasty involves resecting damaged articular surfaces and implanting prosthetic components to restore joint mechanics, with high success rates for appropriately selected patients.',
      explanation: `Joint replacement is one of the most successful surgical procedures, offering reliable pain relief and functional improvement.

**Types of Joint Replacement:**

*By extent:*
- **Total**: Entire joint surface replaced
- **Partial (unicompartmental)**: Only damaged portion replaced
- **Revision**: Replacement of failed prior arthroplasty

*By joint:*
| Joint | Annual Volume (US) | Success Rate |
|-------|-------------------|--------------|
| Knee | ~700,000 | 90-95% |
| Hip | ~400,000 | 95-98% |
| Shoulder | ~100,000 | 90-95% |

**Implant Components:**

*Hip:*
- Femoral component: Metal stem + head (metal/ceramic)
- Acetabular component: Metal shell + liner (plastic/ceramic)
- Bearing surfaces: Metal-on-plastic, ceramic-on-plastic, ceramic-on-ceramic

*Knee:*
- Femoral component: Metal covering end of femur
- Tibial component: Metal tray + plastic spacer
- Patellar component: Often plastic button on kneecap
- Posterior cruciate: Retaining or substituting designs

**Patient Selection:**

*Ideal candidates:*
- Significant pain affecting quality of life
- Failed conservative treatment
- X-ray changes consistent with symptoms
- Medically optimized for surgery
- Realistic expectations

*Considerations:*
- Age: Younger patients may outlive implants
- Weight: Higher BMI increases complications
- Activity level: Guide implant and bearing choice
- Medical conditions: Must be optimized

**Surgical Approach:**

*Hip:*
- Posterior: Most common
- Anterior: Muscle sparing, popular
- Lateral: Good visualization

*Knee:*
- Standard parapatellar: Most common
- Subvastus/midvastus: Less muscle disruption
- Robotic-assisted: Growing use

**Recovery:**

*Timeline:*
| Milestone | Hip | Knee |
|-----------|-----|------|
| Walking with support | 1-2 days | 1-2 days |
| Discontinue walker | 2-4 weeks | 2-6 weeks |
| Driving | 4-6 weeks | 4-6 weeks |
| Return to activities | 3-6 months | 3-6 months |

**Complications:**
- Infection: 1-2%
- Blood clots (DVT/PE): 1-2% with prophylaxis
- Dislocation (hip): 2-3%
- Stiffness (knee): 5-10% may need manipulation
- Implant loosening: <5% at 10 years`,
      keyTerms: [
        { term: 'unicompartmental', definition: 'Partial replacement of one part of a joint' },
        { term: 'bearing surface', definition: 'Materials where joint components meet and move against each other' },
        { term: 'manipulation under anesthesia', definition: 'Procedure to improve range of motion of stiff joint' },
        { term: 'DVT', definition: 'Deep vein thrombosis; blood clot in leg vein' },
      ],
      analogies: [
        'Bearing surfaces are like the brake pad material - different options for different needs.',
        'The femoral stem is like a post anchored in your bone for stability.',
      ],
    },
    3: {
      level: 3,
      summary: 'Total joint arthroplasty success depends on appropriate patient selection, surgical technique, implant choice, and rehabilitation, with outcomes tracked through registries and long-term survivorship data.',
      explanation: `Joint replacement outcomes are influenced by patient factors, implant selection, surgical technique, and postoperative management.

**Preoperative Optimization:**

*Medical factors:*
- Diabetes: HbA1c <8% reduces infection
- Nutrition: Albumin >3.5 g/dL
- Anemia: Correct preoperatively
- BMI: <40 preferred; optimize weight
- Smoking: Cessation 4+ weeks before surgery

*Surgical risk assessment:*
- Cardiac clearance if indicated
- Venous thromboembolism risk
- Infection risk stratification
- Frailty assessment

**Implant Considerations:**

*Fixation:*
- Cemented: Polymethylmethacrylate (PMMA)
- Cementless: Porous coating for bone ingrowth
- Hybrid: Combination

*Bearing surfaces (hip):*
| Type | Wear Rate | Considerations |
|------|-----------|----------------|
| Metal-polyethylene | Moderate | Standard, reliable |
| Ceramic-polyethylene | Lower | Reduced wear particles |
| Ceramic-ceramic | Lowest | Squeaking rare, fracture rare |
| Metal-metal | Variable | Largely abandoned |

*Knee design:*
- Cruciate-retaining (CR): Preserves PCL
- Posterior-stabilizing (PS): Substitutes for PCL
- Medial congruent/pivot: Enhanced stability
- Hinged: For significant instability

**Surgical Technique:**

*Hip:*
- Component positioning: Cup inclination/anteversion critical
- Leg length and offset balancing
- Soft tissue tension

*Knee:*
- Alignment: Mechanical vs. kinematic
- Component rotation
- Ligament balancing
- Patella tracking

*Technology:*
- Computer navigation: Improved alignment accuracy
- Robotics: Precision bone cuts
- Patient-specific instrumentation

**Outcomes Data:**

*Survivorship:*
- Hip: 95% at 10 years, 80-90% at 20 years
- Knee: 90% at 10 years, 80% at 20 years
- Improvement in implant longevity over time

*Patient-reported outcomes:*
- 85-95% satisfied with hip replacement
- 80-90% satisfied with knee replacement
- Predictors: Preoperative function, expectations, pain level

**Complications:**

*Early:*
- Infection: 1-2%
- VTE: <2% with prophylaxis
- Dislocation (hip): 2-3%
- Stiffness requiring MUA (knee): 5%

*Late:*
- Aseptic loosening
- Wear and osteolysis
- Periprosthetic fracture
- Instability
- Infection (delayed/late)`,
      keyTerms: [
        { term: 'aseptic loosening', definition: 'Implant loosening without infection; most common cause of revision' },
        { term: 'osteolysis', definition: 'Bone loss around implants from wear particle reaction' },
        { term: 'periprosthetic', definition: 'Occurring around the prosthetic implant' },
        { term: 'kinematic alignment', definition: 'Alignment philosophy restoring patient\'s native anatomy' },
      ],
      clinicalNotes: 'Joint registries provide valuable data on implant survivorship and complication rates. The Australian, Swedish, and UK registries have helped identify problematic implants and guide implant selection.',
    },
    4: {
      level: 4,
      summary: 'Total joint arthroplasty optimization requires integration of patient-specific factors, evidence-based implant selection, technical precision, and protocols addressing enhanced recovery and complication prevention.',
      explanation: `Advanced joint replacement practice requires synthesis of patient factors, technology, and evidence to optimize outcomes.

**Patient Optimization:**

*Preoperative protocols:*
- CPAP optimization for OSA
- Colonization screening (MRSA, S. aureus)
- Dental clearance
- UTI screening and treatment
- Nutrition optimization (prealbumin, transferrin)

*Risk prediction:*
- Revision risk calculator
- Infection risk stratification
- Outcome prediction models

**Evidence-Based Implant Selection:**

*Hip:*
- Stem: Taper design affects corrosion
- Head size: Larger reduces dislocation, increases taper issues
- Cup: Position critical for stability, wear
- Bearing: Ceramic-poly preferred for active patients

*Knee:*
- Design: High-flex, gender-specific (controversial)
- Alignment: Mechanical vs. kinematic ongoing debate
- Constraint: Match to ligamentous status
- Patellar resurfacing: Selective vs. routine (varies)

**Surgical Technology:**

*Robotics:*
- Improved bone cut accuracy
- Soft tissue protection
- Learning curve considerations
- Cost-benefit analysis ongoing

*Navigation:*
- Component positioning accuracy
- May reduce outliers
- Long-term outcomes similar

**Enhanced Recovery (ERAS):**

*Components:*
- Multimodal analgesia (minimize opioids)
- Regional anesthesia
- Early mobilization
- Nutrition optimization
- Patient engagement

*Outcomes:*
- Reduced length of stay
- Lower complication rates
- Improved patient satisfaction
- Cost reduction

**VTE Prophylaxis:**

*Options:*
- Aspirin: Low-risk patients
- LMWH: Moderate-risk
- DOACs: Growing use
- Mechanical prophylaxis: All patients

*Guidelines:*
- AAOS, ACCP recommendations
- Risk stratification
- Balance bleeding vs. clot risk

**Infection Prevention:**

*Bundles:*
- Nasal decolonization (mupirocin)
- CHG bathing
- Prophylactic antibiotics (timing critical)
- Laminar airflow (controversial)
- Glucose control

**Outcomes Tracking:**

*Metrics:*
- PROMs: HOOS/KOOS, Oxford scores
- Reoperation rates
- Complication rates
- Patient satisfaction

*Registries:*
- Track implant performance
- Identify problematic designs early
- Guide implant selection`,
      keyTerms: [
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; protocol to optimize perioperative care' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; blood thinner for VTE prevention' },
        { term: 'taper corrosion', definition: 'Corrosion at junction between femoral head and stem' },
        { term: 'HOOS/KOOS', definition: 'Hip/Knee Outcome Scores; patient-reported outcome measures' },
      ],
      clinicalNotes: 'Enhanced recovery protocols have reduced length of stay from 3-5 days to same-day or next-day discharge for many patients. Multimodal analgesia minimizing opioids improves early function and reduces opioid-related complications.',
    },
    5: {
      level: 5,
      summary: 'Contemporary joint replacement integrates precision medicine, advanced technology, personalized implant selection, and outcome-driven care to optimize patient-specific results while navigating evolving evidence and value-based imperatives.',
      explanation: `Expert-level joint replacement requires synthesis of evidence, technology, and patient-centered care in a changing healthcare environment.

**Precision Medicine:**

*Patient-specific approaches:*
- Custom implants from CT/MRI
- Personalized alignment targets
- Biologically appropriate sizing
- Activity-matched bearing selection

*Phenotyping:*
- Patient expectations analysis
- Pain phenotyping
- Functional baseline assessment
- Psychological evaluation

**Technology Integration:**

*Current:*
- Robotic-assisted surgery
- Navigation systems
- Sensor-based balancing
- 3D-printed implants

*Emerging:*
- AI-assisted planning
- Augmented reality
- Machine learning for prediction
- Wearable outcome monitoring

**Evidence Synthesis:**

*Alignment debate:*
- Mechanical: Traditional neutral alignment
- Kinematic: Restore native anatomy
- Restricted kinematic: Modified kinematic
- Insufficient long-term evidence for superiority

*Outpatient arthroplasty:*
- Same-day discharge increasingly common
- Patient selection critical
- Outcomes similar in selected patients
- System requirements for safety

*Unicompartmental knee:*
- Revival with robotic assistance
- Appropriate patient selection
- Registry data shows higher revision rates
- May preserve bone for future TKA

**Challenging Scenarios:**

*Young patients:*
- Implant may not last lifetime
- Activity considerations
- Bearing surface selection
- Bone conservation

*Complex revision:*
- Bone loss management
- Infection treatment
- Soft tissue deficiency
- Specialized implants

*Extreme BMI:*
- Higher complication rates
- Risk-benefit discussion
- Optimization strategies
- Bariatric surgery consideration

**Value-Based Care:**

*Quality metrics:*
- CMS THJR/TKJR bundles
- Readmission rates
- Complication rates
- Patient satisfaction

*Cost considerations:*
- Implant pricing
- Length of stay
- Rehabilitation costs
- Revision burden

*Appropriate use:*
- AAOS criteria
- Avoid surgery for wrong indications
- Shared decision-making

**Research Priorities:**

*Current focus:*
- Optimal alignment philosophy
- Technology value proposition
- Bearing surface longevity
- Infection prevention
- Managing young patient demand

*Emerging:*
- Biologic augmentation
- Smart implants
- Personalized rehabilitation
- Long-term surveillance

**Professional Considerations:**

*Training evolution:*
- Technology competency
- Data analytics skills
- Outcomes tracking

*Practice patterns:*
- Specialization trends
- Volume-outcome relationship
- Team-based care`,
      keyTerms: [
        { term: 'restricted kinematic alignment', definition: 'Modified kinematic approach with limits on component position' },
        { term: 'smart implants', definition: 'Implants with embedded sensors for activity and load monitoring' },
        { term: 'bundle payment', definition: 'Single payment covering all care for an episode (surgery to recovery)' },
        { term: 'phenotyping', definition: 'Characterizing patients to predict outcomes and guide treatment' },
      ],
      clinicalNotes: `**Key Practice Principles:**

1. **Patient selection:**
   - Appropriate indications
   - Optimization of modifiable factors
   - Realistic expectations
   - Shared decision-making

2. **Technical excellence:**
   - Component positioning
   - Soft tissue balancing
   - Technology as tool, not replacement for skill
   - Continuous learning

3. **Perioperative optimization:**
   - ERAS protocols
   - Multimodal analgesia
   - Early mobilization
   - VTE and infection prevention

4. **Outcomes focus:**
   - Track PROMs
   - Monitor complications
   - Registry participation
   - Continuous improvement

5. **Value-based care:**
   - Appropriate use criteria
   - Cost-effective implant selection
   - Efficient care delivery
   - Quality metrics tracking

**Decision Framework:**
- Surgery for failed conservative care
- Optimize patient before surgery
- Select implants based on evidence and patient factors
- Execute with technical precision
- Implement ERAS protocols
- Track outcomes and learn`,
    },
  },

  media: [
    {
      id: 'joint-replacement-components',
      type: 'diagram',
      filename: 'joint-replacement-components.svg',
      title: 'Joint Replacement Components',
      description: 'Illustration of hip and knee replacement components',
    },
  ],
  citations: [
    {
      id: 'aoanjrr-report',
      type: 'article',
      title: 'Australian Orthopaedic Association National Joint Replacement Registry',
      source: 'AOANJRR Annual Report',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
    { targetId: 'ortho-patient-hip-joint', targetType: 'structure', relationship: 'related', label: 'Hip Joint Anatomy' },
    { targetId: 'ortho-patient-knee-joint', targetType: 'structure', relationship: 'related', label: 'Knee Joint Anatomy' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['surgery', 'arthroplasty', 'arthritis'],
    keywords: ['joint replacement', 'arthroplasty', 'hip replacement', 'knee replacement'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointReplacementProcedureContent;
