/**
 * Sports-Related Fractures - Educational Content
 *
 * Covers bone injuries in athletic populations including acute
 * fractures, stress fractures, and comprehensive rehabilitation.
 */

import { EducationalContent } from '../../types';

export const fracturesSportsContent: EducationalContent = {
  id: 'sports-med-fractures',
  type: 'condition',
  name: 'Sports-Related Fractures',
  alternateNames: ['Bone Fracture', 'Broken Bone', 'Stress Fracture'],

  levels: {
    1: {
      level: 1,
      summary: 'A fracture is a broken bone, which can happen suddenly from an injury or gradually from overuse.',
      explanation: `## What is a Fracture?

A fracture happens when a force is applied to a bone that's stronger than the bone can withstand.

**Types of Sports Fractures:**

*Acute Fractures:*
- Happen suddenly from one specific event
- Broken arm from a fall
- Broken leg from a collision

*Stress Fractures:*
- Develop gradually from repeated impact
- Common in runners, dancers, gymnasts
- Small crack in the bone from overuse

**Signs of a Fracture:**
- Severe pain at injury site
- Swelling and bruising
- Difficulty or inability to move injured part
- Visible deformity (bone looks out of place)
- Pain that gets worse with activity

**Immediate Action:**
1. Stop activity immediately
2. Don't try to move or straighten the injury
3. Apply ice wrapped in cloth
4. Seek medical attention
5. Immobilize the area if possible`,
      keyTerms: [
        { term: 'fracture', definition: 'A break or crack in a bone' },
        { term: 'acute fracture', definition: 'Sudden onset from a specific incident' },
        { term: 'stress fracture', definition: 'Small crack from repeated impact or overuse' },
      ],
      analogies: [
        'A stress fracture is like a paperclip bent back and forth until it breaks.',
        'Bones are like tree branches - they can snap under too much pressure.',
      ],
      examples: [
        'A runner develops foot pain that gets worse with running.',
        'A basketball player lands awkwardly and breaks their ankle.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fractures are classified by pattern, displacement, and whether the skin is intact, with stress fractures representing overuse injuries requiring specific diagnostic approaches.',
      explanation: `## Classification

**By Nature of Injury:**
- Closed (simple): Bone breaks but skin remains intact
- Open (compound): Broken bone pierces through skin (higher infection risk)

**By Pattern:**
- Transverse: Break across the bone horizontally
- Oblique: Break at an angle
- Spiral: Twisting injury causes corkscrew pattern
- Comminuted: Bone breaks into three or more pieces
- Avulsion: Muscle pulls fragment of bone away

## Stress Fractures in Detail

These are overuse injuries common in:
- Distance runners (foot/shin bones)
- Basketball players (foot, ankle)
- Gymnasts (spine, lower leg)

**Risk factors:**
- Sudden increase in training
- Hard surfaces
- Poor footwear
- Nutritional deficiencies
- Low bone density

## Diagnostic Process

**Physical Examination:**
- Assessing tenderness at specific points
- Checking range of motion
- Evaluating weight-bearing ability
- Checking for nerve/blood vessel damage

**Imaging:**
- X-rays: First-line imaging (may not show stress fractures initially)
- Bone scan: Can detect early stress fractures
- MRI: Most sensitive for stress fractures and soft tissue`,
      keyTerms: [
        { term: 'comminuted fracture', definition: 'Bone broken into multiple pieces' },
        { term: 'avulsion fracture', definition: 'Fragment of bone pulled away by tendon or ligament' },
        { term: 'bone scan', definition: 'Nuclear imaging test showing bone metabolism and stress fractures' },
      ],
      analogies: [
        'An avulsion fracture is like pulling a plug out of a socket.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fracture management progresses through phases of immobilization, protected motion, strengthening, and return to sport, with healing time influenced by age, nutrition, and smoking status.',
      explanation: `## Treatment Options

**Conservative (Non-surgical):**
- Immobilization with cast, splint, or boot
- Regular X-rays to monitor healing
- Typical healing time: 6-8 weeks for adults
- Longer for smokers, older adults

**Surgical Indications:**
- Displaced fractures (bone ends separated)
- Compound (open) fractures
- Multiple fragments
- Joint involvement
- Failure of conservative treatment

**Surgical Options:**
- Internal fixation: Plates, screws, rods
- External fixation: Pins through skin connected to frame
- Intramedullary nailing: Rod inside hollow bone

## Rehabilitation Phases

**Phase 1: Immobilization (Weeks 0-6)**
- Bone healing and callus formation
- Maintain joint mobility where possible
- Muscle setting exercises

**Phase 2: Protected Motion (Weeks 6-8+)**
- Gradual removal of immobilization
- Gentle range of motion exercises
- Progressive strengthening

**Phase 3: Strengthening (Weeks 8-12+)**
- Full range of motion goals
- Progressive resistance training
- Proprioception and balance

**Phase 4: Return to Sport (3-6+ months)**
- Power and agility training
- Sport-specific drills
- Gradual return to competition

## Healing Timeline Factors

**Slower healing with:**
- Older age
- Smoking
- Diabetes
- Poor nutrition
- Certain medications (steroids)

**Optimizing healing:**
- Adequate protein intake
- Calcium and vitamin D
- Avoid smoking
- Follow rehabilitation protocol`,
      keyTerms: [
        { term: 'callus', definition: 'New bone tissue formed during fracture healing' },
        { term: 'internal fixation', definition: 'Surgical placement of hardware to hold bone fragments together' },
        { term: 'intramedullary nailing', definition: 'Rod placed inside hollow bone to stabilize fracture' },
      ],
      clinicalNotes: 'Return to play requires X-ray confirmation of complete healing, full pain-free range of motion, strength equal to uninjured side, and completion of sport-specific progression.',
    },
    4: {
      level: 4,
      summary: 'Bone healing progresses through defined inflammatory, reparative, and remodeling phases, with complications including nonunion, malunion, and avascular necrosis requiring specialized management.',
      explanation: `## Bone Healing Biology

**Healing Stages:**

1. **Inflammatory Phase (Days 1-7)**
   - Hematoma formation
   - Inflammatory cell infiltration
   - Release of growth factors

2. **Soft Callus Phase (Weeks 1-6)**
   - Mesenchymal stem cell differentiation
   - Chondrogenesis: cartilage formation
   - Calcium and phosphorus deposition begins

3. **Hard Callus Phase (Weeks 6-12)**
   - Endochondral ossification
   - Woven bone replaces cartilage
   - Clinical union achieved

4. **Remodeling Phase (Months-1+ years)**
   - Lamellar bone replaces woven bone
   - Trabecular architecture optimization
   - Restoration of normal bone strength

## Complications

**Early Complications:**
- Compartment syndrome (medical emergency)
- Neurovascular injury
- Infection (open fractures)
- Fat embolism (long bone fractures)

**Late Complications:**
- Nonunion: Failure to heal (no progression after 6 months)
- Delayed union: Slower than expected healing
- Malunion: Healed in poor alignment
- Avascular necrosis: Bone death from blood supply loss
- Post-traumatic arthritis

## Special Considerations

**Growth Plate Injuries (Physis):**
- Salter-Harris classification (I-V)
- Potential growth disturbance
- More common in children/adolescents

**Bone Health Considerations:**
- Relative Energy Deficiency in Sport (RED-S)
- Low energy availability affects bone health
- Menstrual dysfunction in female athletes
- Increased stress fracture risk`,
      keyTerms: [
        { term: 'nonunion', definition: 'Failed fracture healing with no progression after 6 months' },
        { term: 'compartment syndrome', definition: 'Increased pressure in fascial compartment, compromising blood flow' },
        { term: 'avascular necrosis', definition: 'Bone death from blood supply loss' },
        { term: 'Salter-Harris classification', definition: 'System for classifying growth plate fractures in children' },
      ],
      clinicalNotes: 'MRI provides most detailed soft tissue and bone assessment. RED-S is important consideration for recurrent stress fractures. Smoking is major modifiable risk factor for delayed union/nonunion.',
    },
    5: {
      level: 5,
      summary: 'Contemporary fracture management integrates evolving surgical indications, advanced imaging modalities, biological augmentation techniques, and evidence-based return-to-sport protocols.',
      explanation: `## Surgical vs. Conservative Management

**Clavicle Fractures:**
- Recent RCTs show improved outcomes with operative treatment for:
  - Completely displaced fractures
  - Shortened >2cm
  - Comminuted patterns
- Earlier return to sport with surgical fixation

## Stress Fracture Management Evolution

**Low-Risk Stress Fractures:**
- Posterior tibial, fibular, ribs
- Conservative management typically successful
- Gradual return to activity

**High-Risk Stress Fractures:**
- Anterior tibial cortex (dreaded black line)
- Femoral neck (tension side)
- Patella, sesamoids, tarsal navicular
- May require surgical intervention

**MRI Grading Systems:**
- Fredericson classification for tibial stress fractures
- Guides return-to-play decisions
- Affects prognosis and management

## Biological Augmentation

**Bone Stimulators:**
- Pulsed electromagnetic field (PEMF) therapy
- Low-intensity pulsed ultrasound (LIPUS)
- Evidence mixed, generally adjunctive use

**Biological Adjuncts:**
- BMP (bone morphogenetic protein) use
- Platelet-rich plasma applications
- Evidence still evolving

## Prevention Strategies

**Workload Management:**
- Acute:chronic workload ratio monitoring
- Periodization principles
- Recovery optimization

**Nutritional Optimization:**
- Adequate energy availability
- Calcium (1000-1300 mg/day)
- Vitamin D (sufficient levels >30 ng/mL)
- Protein intake (1.2-2.0 g/kg/day)`,
      keyTerms: [
        { term: 'PEMF', definition: 'Pulsed electromagnetic field therapy for bone healing' },
        { term: 'BMP', definition: 'Bone morphogenetic protein; growth factors stimulating bone formation' },
        { term: 'acute:chronic workload ratio', definition: 'Recent training load compared to long-term average' },
      ],
      clinicalNotes: 'Surgical indications have expanded based on improved outcomes data. Low-risk stress fractures usually heal with conservative management. Imaging often lags clinical improvement.',
    },
  },

  media: [
    {
      id: 'fracture-types',
      type: 'diagram',
      filename: 'fracture-types.svg',
      title: 'Fracture Classification Types',
      description: 'Illustration of different fracture patterns',
    },
  ],

  citations: [
    {
      id: 'stress-fracture-guidelines',
      type: 'article',
      title: 'Stress Fractures in Athletes',
      source: 'American Journal of Sports Medicine',
    },
    {
      id: 'clavicle-fracture-study',
      type: 'article',
      title: 'Surgical vs Non-operative Treatment of Clavicle Fractures',
      source: 'Journal of Bone and Joint Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-overuse-injuries', targetType: 'topic', relationship: 'related', label: 'Overuse Injuries' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['fracture', 'bone-injury', 'stress-fracture', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'orthopedics', 'sports-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fracturesSportsContent;
