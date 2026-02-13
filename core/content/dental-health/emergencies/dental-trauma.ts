/**
 * Dental Trauma - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const dentalTrauma: EducationalContent = {
  id: 'topic-dental-trauma',
  type: 'topic',
  name: 'Dental Trauma',
  nameEs: 'Trauma Dental',
  alternateNames: ['Tooth Injuries', 'Dental Injuries', 'Traumatic Dental Injuries'],

  levels: {
    1: {
      level: 1,
      summary: 'Dental trauma happens when teeth are hurt by an accident, fall, or blow to the mouth. Quick action can save a damaged tooth, especially if it gets knocked out.',
      explanation: `**What Is Dental Trauma?**
Injury to your teeth, gums, or mouth from an accident or impact.

**Common Causes:**
- Falls (especially in young children)
- Sports injuries
- Car accidents
- Fighting or assault
- Biting on hard objects

**Types of Tooth Injuries:**
1. **Chipped tooth**: Part of tooth breaks off
2. **Cracked tooth**: Line in the tooth
3. **Loose tooth**: Wobbly but still in place
4. **Knocked out tooth**: Completely out of mouth

**What To Do:**
- Stay calm
- Find any tooth pieces
- Rinse mouth gently with water
- Apply cold pack to reduce swelling
- Get to dentist quickly

**Knocked Out Tooth Emergency:**
1. Find the tooth
2. Hold it by the white part (crown)
3. Rinse gently - do NOT scrub
4. Try to put it back in the socket
5. If you cannot, put it in milk
6. Get to dentist within 30 minutes

**Prevention:**
- Wear mouthguard during sports
- Use seatbelts in cars
- Child-proof your home
- Avoid biting hard objects`,
      keyTerms: [
        { term: 'dental trauma', definition: 'Injury to teeth or mouth from impact or accident' },
        { term: 'knocked out tooth', definition: 'A tooth that has come completely out of the mouth' },
        { term: 'chipped tooth', definition: 'A tooth with a piece broken off' },
        { term: 'mouthguard', definition: 'Protective device worn over teeth during sports' },
      ],
      analogies: [
        'A knocked out tooth is like a plant pulled from the ground - the faster you replant it, the better chance it has to survive.',
        'A mouthguard is like a helmet for your teeth - it absorbs impact to protect them.',
      ],
      examples: [
        'A child falls off a bike and chips a front tooth - parents save the chip and see the dentist.',
        'A basketball player gets hit in the mouth and a tooth gets knocked out - the coach puts it in milk.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental trauma includes fractures, luxation injuries, and avulsions. Classification guides treatment, and time-sensitive management of avulsed teeth significantly impacts prognosis.',
      explanation: `## Types of Dental Trauma

**Tooth Fractures:**
| Type | Description | Treatment |
|------|-------------|-----------|
| Enamel infraction | Crack without loss | Monitor |
| Enamel fracture | Chip in enamel only | Smooth or bond |
| Crown fracture | Into dentin | Restore, protect pulp |
| Crown-root fracture | Extends below gumline | Complex restoration |
| Root fracture | Root broken | Splint or extract |

**Luxation Injuries:**
| Type | Description | Treatment |
|------|-------------|-----------|
| Concussion | Tender, no movement | Monitor |
| Subluxation | Loose but not displaced | Monitor |
| Extrusive luxation | Partially out | Reposition, splint |
| Lateral luxation | Pushed to side | Reposition, splint |
| Intrusive luxation | Pushed into bone | Allow eruption or reposition |

**Avulsion:**
- Tooth completely out of socket
- Emergency - time critical
- Best outcomes: replant within 5 minutes

## Avulsion Management

**Step-by-Step:**
1. Handle tooth by crown only
2. Rinse briefly with water or saline
3. Attempt replantation
4. If unable, store in milk or saliva
5. Seek immediate dental care

**Storage Media (best to worst):**
1. Hanks Balanced Salt Solution
2. Milk
3. Saliva (under tongue)
4. Saline
5. Water (worst)

**Critical Time Factors:**
| Dry Time | Prognosis |
|----------|-----------|
| <5 min | Excellent |
| 5-20 min | Good |
| 20-60 min | Fair |
| >60 min | Poor |

## Soft Tissue Injuries

**Types:**
- Lacerations (cuts)
- Contusions (bruises)
- Abrasions (scrapes)
- Avulsions (tissue torn away)

**Management:**
- Control bleeding with pressure
- Clean wound gently
- May need sutures
- Tetanus consideration`,
      keyTerms: [
        { term: 'luxation', definition: 'Displacement of tooth within its socket' },
        { term: 'avulsion', definition: 'Complete displacement of tooth from socket' },
        { term: 'intrusion', definition: 'Tooth pushed into the alveolar bone' },
        { term: 'splint', definition: 'Wire and composite to stabilize injured teeth' },
        { term: 'periodontal ligament', definition: 'Tissue connecting tooth to bone; critical for healing' },
      ],
      analogies: [
        'An extruded tooth is like a loose nail - it needs to be pushed back in and stabilized.',
        'Periodontal ligament cells are like the roots of a transplanted flower - keeping them moist is essential.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental trauma management requires systematic assessment, understanding of PDL biology, appropriate splinting techniques, and long-term monitoring for complications including pulp necrosis and root resorption.',
      explanation: `## Systematic Assessment

**Initial Evaluation:**
| Component | Assessment |
|-----------|------------|
| History | Mechanism, timing, prior treatment |
| Extraoral | Swelling, asymmetry, TMJ function |
| Intraoral | Soft tissue, occlusion, mobility |
| Radiographs | Periapical, occlusal views |

**Documentation:**
- Photograph injuries
- Record mobility grades
- Note pulp testing results
- Document occlusal relationships

## Fracture Management

**Ellis Classification:**
| Class | Involvement | Management |
|-------|-------------|------------|
| I | Enamel | Smooth or restore |
| II | Dentin | Calcium hydroxide, restore |
| III | Pulp exposed | Pulp cap or pulpotomy |

**Root Fractures:**
- Location determines prognosis
- Apical third: Best prognosis
- Middle third: Moderate
- Cervical third: Poor

**Splinting:**
- Flexible splint preferred
- Duration: 2-4 weeks typical
- Allow physiologic movement

## Luxation Management

**Concussion/Subluxation:**
- No repositioning needed
- Soft diet
- Monitor pulp vitality

**Extrusive Luxation:**
- Reposition with gentle pressure
- Splint 2 weeks
- Monitor for necrosis

**Lateral Luxation:**
- Disengage from bone
- Reposition
- Splint 4 weeks

**Intrusion:**
| Tooth | Management |
|-------|------------|
| Immature apex | Allow spontaneous re-eruption |
| Mature apex | Surgical or orthodontic repositioning |
| Severe intrusion | Orthodontic extrusion |

## Avulsion Protocol

**IADT Guidelines:**

*Mature Apex:*
| Condition | Treatment |
|-----------|-----------|
| <60 min dry time | Replant, splint 2 weeks |
| >60 min dry time | Soak NaF, replant, splint 4 weeks |
| Contaminated | Rinse, replant |

*Immature Apex:*
- Higher revascularization potential
- Same protocols but monitor for vitality
- Regenerative endodontics if necrosis

**Post-Replantation:**
- Flexible splint 2 weeks (normal PDL)
- Systemic antibiotics (doxycycline)
- Root canal timing critical
- Chlorhexidine rinses

## Complications

| Complication | Timing | Management |
|--------------|--------|------------|
| Pulp necrosis | Weeks-months | Root canal therapy |
| Inflammatory resorption | Weeks | Urgent root canal |
| Replacement resorption | Months-years | Monitor, eventual loss |
| Ankylosis | Months-years | Decoronation in growing patients |`,
      keyTerms: [
        { term: 'Ellis classification', definition: 'System for tooth fractures: I (enamel), II (dentin), III (pulp)' },
        { term: 'inflammatory resorption', definition: 'Root destruction from pulp infection; treatable with RCT' },
        { term: 'replacement resorption', definition: 'Progressive replacement of root by bone; irreversible' },
        { term: 'ankylosis', definition: 'Fusion of tooth to bone; prevents normal movement' },
        { term: 'decoronation', definition: 'Removing crown of ankylosed tooth to preserve ridge' },
      ],
      clinicalNotes: 'Flexible splinting (0.4mm wire, allow finger-pressure movement) is standard of care. Rigid splinting increases ankylosis risk. Root canal should begin within 2 weeks of replantation for closed apex teeth. Intrusion injuries have worst prognosis in permanent teeth.',
    },
    4: {
      level: 4,
      summary: 'Advanced trauma management integrates IADT evidence-based protocols, regenerative endodontic approaches for immature teeth, sophisticated prognostication, and long-term management of sequelae.',
      explanation: `## Evidence-Based Protocols

**IADT 2020 Guidelines:**

*Avulsion - Closed Apex:*
| Scenario | Protocol |
|----------|----------|
| Replanted at scene | Keep in place, flexible splint |
| Extra-oral <60 min moist | Replant, flexible splint 2 weeks |
| Extra-oral >60 min or dry | NaF soak 20 min, splint 4 weeks |

*Root Canal Timing:*
- Start within 7-10 days
- Calcium hydroxide for 1 month
- Then obturate
- Delays → inflammatory resorption

**Antibiotic Protocol:**
- Doxycycline 100mg BID x 7 days (or penicillin)
- Topical doxycycline soak for avulsed tooth (experimental)
- Tetanus status check

## Regenerative Approaches

**Pulp Revascularization:**

*Indications:*
- Immature apex (open >1mm)
- Pulp necrosis post-trauma
- No signs of pulp healing

*Protocol:*
1. Access, minimal instrumentation
2. Disinfect (TAP or calcium hydroxide)
3. Bleeding induced into canal
4. MTA or Biodentine barrier
5. Composite seal
6. Monitor for continued development

*Outcomes:*
- Root lengthening: 70-80%
- Apical closure: 80-90%
- True pulp regeneration: Rare

## Prognostic Factors

**Avulsion Prognosis:**
| Factor | Impact |
|--------|--------|
| Extra-oral dry time | Most critical |
| Storage medium | Important |
| Root development | Open apex better |
| Contamination | Increases infection |
| Alveolar damage | Complicates healing |

**Root Resorption Risk:**
| Type | Prevention |
|------|------------|
| Surface | Self-limiting |
| Inflammatory | Timely root canal |
| Replacement | Cannot prevent; manage |

## Long-Term Management

**Monitoring Protocol:**
| Time | Assessment |
|------|------------|
| 2 weeks | Splint removal, clinical |
| 4 weeks | Pulp testing, radiograph |
| 3 months | Pulp testing, radiograph |
| 6 months | Pulp testing, radiograph |
| 1 year | Clinical, radiograph |
| 5 years | Annual follow-up |

**Ankylosis in Growing Patients:**

*Problems:*
- Infraocclusion (tooth appears to sink)
- Alveolar ridge deficiency
- Adjacent tooth tilting

*Management:*
- Decoronation before growth complete
- Preserves bone for future implant
- Timing critical (before infraocclusion severe)

## Sports Dentistry

**Mouthguard Types:**
| Type | Protection | Comfort |
|------|------------|---------|
| Stock | Poor | Poor |
| Boil-and-bite | Fair | Fair |
| Custom | Excellent | Excellent |
| Pressure-laminated | Best | Good |

**High-Risk Sports:**
- Contact: Football, hockey, boxing
- Collision: Basketball, soccer
- Individual: Cycling, skateboarding`,
      keyTerms: [
        { term: 'TAP', definition: 'Triple Antibiotic Paste; metronidazole, ciprofloxacin, minocycline for disinfection' },
        { term: 'MTA', definition: 'Mineral Trioxide Aggregate; bioactive material for pulp procedures' },
        { term: 'infraocclusion', definition: 'Tooth appearing submerged as jaw grows around ankylosed tooth' },
        { term: 'decoronation', definition: 'Removing crown and root canal contents of ankylosed tooth' },
        { term: 'revascularization', definition: 'Blood supply restoration to pulp space in immature teeth' },
      ],
      clinicalNotes: 'IADT guidelines recommend doxycycline over penicillin based on evidence for reducing inflammatory resorption. Regenerative endodontics is standard of care for necrotic immature teeth. Decoronation preserves bone better than extraction for ankylosed teeth in growing patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary dental trauma research encompasses cellular mechanisms of PDL healing, tissue engineering approaches, precision diagnostics, and personalized treatment algorithms based on biological factors.',
      explanation: `## Cellular Biology of Healing

**PDL Cell Biology:**
| Phase | Events |
|-------|--------|
| Immediate | Cell death begins in dry conditions |
| Hours | Inflammatory response |
| Days | Granulation tissue formation |
| Weeks | PDL reattachment or resorption |

**Cell Viability Research:**
- Critical 60-minute window for PDL cells
- pH and osmolarity critical
- Cold temperature preserves cells
- New storage media under investigation

**Resorption Mechanisms:**
| Type | Trigger | Cells |
|------|---------|-------|
| Surface | Minor PDL damage | Osteoclasts, self-limited |
| Inflammatory | Pulp necrosis products | RANKL-mediated |
| Replacement | Extensive PDL loss | Osteoblasts replace root |

## Regenerative Research

**Tissue Engineering Approaches:**
| Strategy | Status |
|----------|--------|
| Cell transplantation | Experimental |
| Growth factor delivery | Promising |
| Scaffold materials | Under development |
| Gene therapy | Early research |

**Stem Cell Sources:**
- Dental pulp stem cells (DPSCs)
- PDL stem cells
- Stem cells from apical papilla (SCAPs)
- Bone marrow mesenchymal cells

**Growth Factors:**
| Factor | Role |
|--------|------|
| PDGF | Soft tissue healing |
| BMP | Bone/cementum formation |
| TGF-β | Matrix production |
| VEGF | Angiogenesis |

## Precision Diagnostics

**Pulp Vitality Assessment:**
| Method | Measures |
|--------|----------|
| Cold test | Sensory nerve function |
| EPT | Nerve response threshold |
| Laser Doppler | Blood flow (research) |
| Pulse oximetry | Oxygen saturation (research) |

**Imaging Advances:**
| Technology | Application |
|------------|-------------|
| CBCT | Root fractures, resorption |
| 3D imaging | Treatment planning |
| Ultrasound | Periodontal assessment |
| OCT | Early detection (research) |

## Personalized Treatment

**Risk Stratification:**
| Factor | Assessment |
|--------|------------|
| Age | Growth potential |
| Root development | Regenerative capacity |
| Systemic health | Healing potential |
| Compliance | Follow-up reliability |

**Treatment Algorithms:**
\`\`\`
Avulsion Assessment
        ↓
Dry Time + PDL Status
        ↓
Root Development Stage
        ↓
Storage/Handling History
        ↓
Personalized Protocol
        ↓
Monitoring Schedule
\`\`\`

## Future Directions

**Research Priorities:**
1. Improved storage media
2. PDL regeneration strategies
3. Biomarkers for prognosis
4. Anti-resorption therapies
5. Whole tooth regeneration

**Emerging Technologies:**
| Innovation | Potential |
|------------|-----------|
| Bioactive storage media | Improved PDL survival |
| Anti-RANKL therapy | Prevent resorption |
| 3D-printed scaffolds | Tissue regeneration |
| Smart mouthguards | Impact monitoring |

**Prevention Research:**
- Mouthguard design optimization
- Risk assessment tools
- Education programs
- Policy development`,
      keyTerms: [
        { term: 'RANKL', definition: 'Receptor Activator of NF-kB Ligand; key mediator of osteoclast activity in resorption' },
        { term: 'DPSCs', definition: 'Dental Pulp Stem Cells; multipotent cells for regenerative approaches' },
        { term: 'OCT', definition: 'Optical Coherence Tomography; imaging technique for early detection' },
        { term: 'CBCT', definition: 'Cone Beam CT; 3D imaging for root fracture and resorption detection' },
      ],
      clinicalNotes: `Research priorities:
1. PDL cell preservation in storage media is primary determinant of avulsion outcomes
2. Anti-resorption therapies (bisphosphonates topically) show promise in animal models
3. Regenerative endodontics outcomes improving with refined protocols
4. Smart mouthguards may enable real-time concussion/dental trauma assessment
5. Whole tooth regeneration remains distant goal - focus on preservation
6. AI-assisted prognosis tools under development`,
    },
  },

  media: [{ id: 'trauma-classification', type: 'diagram', filename: 'dental-trauma-types.svg', title: 'Dental Trauma Classification', description: 'Types of dental fractures and luxation injuries' }],
  citations: [{ id: 'iadt-trauma-guidelines', type: 'article', title: 'IADT Guidelines for Traumatic Dental Injuries', authors: ['IADT'], source: 'Dental Traumatology' }],
  crossReferences: [{ targetId: 'topic-dental-emergencies', targetType: 'topic', relationship: 'parent', label: 'Dental Emergencies' }],
  tags: { systems: ['dental'], structures: ['teeth', 'periodontal ligament'], topics: ['emergency', 'trauma'], keywords: ['avulsion', 'fracture', 'luxation', 'mouthguard'], clinicalRelevance: 'critical', examRelevance: { usmle: false, nbme: false, shelf: ['emergency medicine'] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dentalTrauma;
