/**
 * Acute Injury Assessment - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const acuteInjuryAssessment: EducationalContent = {
  id: 'sports-med-acute-injury-assessment',
  type: 'concept',
  name: 'Acute Injury Assessment',
  alternateNames: ['Sideline Assessment', 'Sports Injury Evaluation', 'Field Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'When someone gets hurt, it is important to check them safely to decide if they need emergency help or can be treated on the sideline.',
      explanation: `## Checking Someone Who Got Hurt

**First Steps**
- Make sure the area is safe
- Ask if they're okay
- Call for help if needed

**What to Look For**
- Can they move?
- Where does it hurt?
- Any visible injury?
- Are they awake and alert?

**Danger Signs - Call for Help**
- Not responding or confused
- Trouble breathing
- Can't move a body part
- Visible bone or bad deformity
- Severe bleeding

**If It's Not Serious**
- Help them off the field
- Check the injury more carefully
- Apply first aid
- Decide if they can continue`,
      keyTerms: [
        { term: 'assessment', definition: 'Checking someone to understand their injury' },
        { term: 'emergency', definition: 'A serious situation that needs immediate help' },
      ],
    },
    2: {
      level: 2,
      summary: 'Systematic acute injury assessment involves primary survey for emergencies, secondary survey for injury specifics, and determination of disposition including return to play decisions.',
      explanation: `## Acute Injury Assessment

### Primary Survey
**Scene Safety:**
- Safe to approach?
- Mechanism of injury

**ABCs:**
- Airway
- Breathing
- Circulation

**Disability:**
- Level of consciousness
- Gross neurologic function

**Exposure:**
- Inspect injury site
- Remove equipment if needed

### Red Flags Requiring Emergency Care
- Airway compromise
- Respiratory distress
- Shock signs
- Severe bleeding
- Spinal injury signs
- Loss of consciousness
- Obvious deformity/dislocation

### Secondary Survey
**History:**
- Mechanism of injury
- Location and nature of pain
- Previous injuries
- Symptoms

**Physical Examination:**
- Inspection (swelling, deformity)
- Palpation (tenderness, crepitus)
- Range of motion
- Special tests
- Neurovascular status

### On-Field Decision Making
| Findings | Action |
|----------|--------|
| Red flags | Activate EMS |
| Significant injury | Remove from play |
| Minor injury | Treat, monitor, may return |

### Sideline Evaluation
- More detailed history
- Comprehensive exam
- Functional testing
- Return to play decision

### Documentation
- Time and mechanism
- Findings
- Treatment provided
- Disposition`,
      keyTerms: [
        { term: 'primary survey', definition: 'Initial rapid assessment for life-threatening conditions' },
        { term: 'secondary survey', definition: 'Detailed examination after life threats excluded' },
        { term: 'disposition', definition: 'Decision about what happens next - return to play, remove, transfer' },
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive acute injury assessment integrates mechanism-based clinical reasoning, systematic physical examination, and evidence-based decision rules to guide management.',
      explanation: `## Clinical Assessment Framework

### Mechanism-Based Approach
**High-Energy Mechanisms:**
- High-velocity collision
- Fall from height
- Direct blow with force
- Hyperextension/rotation injury

**Consider:**
- Potential injury patterns
- Associated injuries
- Need for imaging

### Systematic Examination
**Look:**
- Deformity
- Swelling
- Ecchymosis
- Skin integrity

**Feel:**
- Point tenderness
- Crepitus
- Warmth
- Pulses

**Move:**
- Active range of motion first
- Passive if active limited
- Special tests
- Functional assessment

### Clinical Decision Rules
**Ottawa Ankle Rules:**
- Malleolar zone tenderness
- Navicular/5th MT tenderness
- Unable to weight-bear

**Ottawa Knee Rules:**
- Age >55
- Isolated patellar tenderness
- Fibular head tenderness
- Unable to flex to 90°
- Unable to weight-bear

### Neurovascular Assessment
**Check:**
- Distal pulses
- Sensation
- Motor function
- Capillary refill

**Red Flags:**
- Absent pulse
- Progressive neurologic deficit
- Compartment syndrome signs

### Return to Play Evaluation
**Requirements:**
- Pain-free function
- Full range of motion
- Normal strength
- Ability to perform sport-specific tasks

### Documentation Essentials
- Time of injury
- Mechanism
- Initial findings
- Treatment rendered
- Disposition and instructions`,
      keyTerms: [
        { term: 'Ottawa rules', definition: 'Evidence-based decision rules for when to image ankle and knee injuries' },
        { term: 'crepitus', definition: 'Crackling sensation indicating bone or cartilage injury' },
        { term: 'compartment syndrome', definition: 'Emergency condition of increased pressure within muscle compartment' },
      ],
      clinicalNotes: 'Clinical decision rules reduce unnecessary imaging. Always assess neurovascular status. Document thoroughly. When in doubt, hold from play and reassess.',
    },
    4: {
      level: 4,
      summary: 'Advanced assessment incorporates understanding of specific injury patterns, point-of-care diagnostics, and comprehensive disposition planning including specialist referral.',
      explanation: `## Advanced Assessment

### Injury Pattern Recognition
**Joint-Specific Patterns:**
- Ankle: Lateral ligament complex, syndesmosis
- Knee: ACL, MCL, meniscus combinations
- Shoulder: Dislocation, cuff injury, AC separation

**Mechanism Clues:**
- Valgus force → MCL
- Rotation + valgus → ACL
- Direct blow → Contusion, fracture

### Point-of-Care Diagnostics
**Ultrasound:**
- Effusion detection
- Fracture (long bone)
- Tendon/muscle injury
- Pneumothorax

### Compartment Syndrome
**Clinical Features:**
- Pain out of proportion
- Pain with passive stretch
- Pressure/firmness
- Paresthesias (late)
- Pulselessness (very late)

**Management:**
- High suspicion = urgent referral
- Pressure measurement
- Fasciotomy if confirmed

### Vascular Injury
**High-Risk:**
- Knee dislocation
- Elbow dislocation
- Displaced fractures

**Assessment:**
- Serial exams
- ABI (ankle-brachial index)
- Angiography if indicated

### Specialist Referral Criteria
**Urgent:**
- Open fracture
- Neurovascular compromise
- Joint dislocation (after reduction)
- Unstable fracture

**Soon:**
- Intra-articular fracture
- Ligament rupture
- Fracture requiring surgery`,
      keyTerms: [
        { term: 'ABI', definition: 'Ankle-brachial index, ratio of ankle to arm blood pressure to assess vascular injury' },
        { term: 'point-of-care ultrasound', definition: 'Bedside ultrasound for immediate diagnostic information' },
      ],
      clinicalNotes: 'Knee dislocation requires vascular assessment. Compartment syndrome is clinical diagnosis - don not wait for 5 Ps. Serial exams important. Document neurovascular status before and after any intervention.',
    },
    5: {
      level: 5,
      summary: 'Research advances in acute assessment include advanced imaging, biomarkers for injury severity, and decision support systems to improve diagnostic accuracy.',
      explanation: `## Research and Advances

### Advanced Imaging
**Point-of-Care:**
- POCUS training
- Protocol development
- Accuracy studies

**Emerging Technologies:**
- Portable MRI
- Infrared thermography
- AI-assisted imaging

### Biomarkers
**Potential Applications:**
- Injury severity stratification
- Concussion diagnosis
- Muscle injury assessment

**Current Research:**
- Troponin for muscle injury
- S100B for concussion
- Inflammatory markers

### Decision Support
**Clinical Decision Rules:**
- Validation studies
- Implementation research
- Machine learning algorithms

**Electronic Tools:**
- Apps for sideline use
- Automated documentation
- Decision support integration

### Telehealth
**Applications:**
- Remote specialist consultation
- Image sharing
- Decision support

### Outcome Prediction
**Factors:**
- Injury characteristics
- Patient factors
- Initial management

**Research:**
- Prognostic models
- Recovery prediction
- Return to play timing`,
      keyTerms: [
        { term: 'POCUS', definition: 'Point-of-care ultrasound, bedside imaging by non-radiologist clinicians' },
        { term: 'clinical decision support', definition: 'Systems that aid clinical decision-making using algorithms or AI' },
      ],
      clinicalNotes: 'Technology supplements but does not replace clinical assessment. Biomarkers not yet validated for field use. Decision rules help but clinical judgment remains essential. Documentation increasingly electronic.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-rice-protocol', targetType: 'concept', relationship: 'related', label: 'RICE Protocol' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['assessment', 'acute-injury', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acuteInjuryAssessment;
