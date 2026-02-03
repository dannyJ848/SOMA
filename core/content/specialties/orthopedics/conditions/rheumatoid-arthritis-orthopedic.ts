import { EducationalContent } from '../../../types';

export const rheumatoidArthritisOrthopedicContent: EducationalContent = {
  id: 'ortho-rheumatoid-arthritis',
  type: 'condition',
  name: 'Rheumatoid Arthritis - Orthopedic Considerations',
  alternateNames: ['RA joint manifestations', 'Rheumatoid joint disease'],
  hpoId: 'HP:0001370',

  levels: {
    1: {
      level: 1,
      summary: 'Rheumatoid arthritis is when your immune system mistakenly attacks your joints, causing pain, swelling, and damage that can change how your joints look and work.',
      explanation: `Rheumatoid arthritis (RA) is different from regular arthritis. Instead of joints wearing out, your body's defense system (immune system) attacks your own joints by mistake.

**What Happens:**
- The lining of your joints gets inflamed and swollen
- This inflammation damages the cartilage and bone
- Joints can become deformed over time
- Without treatment, joints can be permanently damaged

**Common Joints Affected:**
- Hands and fingers (often both sides equally)
- Wrists
- Feet and toes
- Knees
- Other joints can be affected too

**Symptoms:**
- Joint pain, swelling, and warmth
- Morning stiffness lasting more than an hour
- Fatigue and feeling unwell
- Same joints affected on both sides of the body
- Small bumps (nodules) under the skin

**How It's Different from Osteoarthritis:**
| Rheumatoid Arthritis | Osteoarthritis |
|---------------------|----------------|
| Immune system attacks joints | Wear and tear |
| Morning stiffness > 1 hour | Brief morning stiffness |
| Both sides affected equally | May affect just one side |
| Can affect any age | Usually older adults |

**Treatment Goals:**
- Stop the inflammation
- Prevent joint damage
- Reduce pain
- Keep joints working
- Sometimes surgery is needed for damaged joints`,
      keyTerms: [
        { term: 'rheumatoid arthritis', definition: 'A disease where your immune system attacks your joints' },
        { term: 'immune system', definition: 'Your body\'s defense system that normally fights germs' },
        { term: 'inflammation', definition: 'Redness, warmth, and swelling when the body reacts to injury or attack' },
        { term: 'autoimmune', definition: 'When the immune system attacks your own body by mistake' },
      ],
      analogies: [
        'In RA, your immune system is like a security guard that mistakes a friend for an intruder and attacks.',
        'The joint inflammation is like a fire that keeps burning if not put out, causing more and more damage.',
        'Joint deformity in RA is like a hinge that\'s been bent - it can\'t work properly anymore.',
      ],
      examples: [
        'A person wakes up with stiff, swollen hands that take over an hour to loosen up.',
        'Someone notices the same fingers on both hands are becoming crooked.',
        'A patient with bumps on their elbows that the doctor says are rheumatoid nodules.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rheumatoid arthritis is a systemic autoimmune disease with symmetric inflammatory polyarthritis that can cause joint erosions, deformities, and extra-articular manifestations requiring multidisciplinary management.',
      explanation: `Rheumatoid arthritis primarily targets the synovium but causes systemic effects. Understanding the orthopedic manifestations is crucial for comprehensive management.

**Pathophysiology Overview:**
- Autoimmune attack on synovium
- Pannus formation (inflammatory tissue)
- Erosion of cartilage and bone
- Ligament and tendon damage
- Joint destruction and deformity

**Classic Joint Involvement:**

*Hand and Wrist:*
- MCP joints (metacarpophalangeal)
- PIP joints (proximal interphalangeal)
- Wrists
- Classic deformities:
  - Ulnar deviation at MCPs
  - Swan neck: DIP flexion, PIP hyperextension
  - Boutonniere: PIP flexion, DIP hyperextension
  - Z-thumb deformity
  - Wrist subluxation

*Foot:*
- MTP joints (metatarsophalangeal)
- Hallux valgus
- Hammer toes
- Cock-up deformity
- Plantar callosities

*Cervical Spine:*
- Atlantoaxial instability (C1-C2)
- Subaxial subluxation
- Risk of cord compression
- Important pre-surgical consideration

*Large Joints:*
- Knee: Synovitis, effusion, Baker's cyst
- Hip: Pain, reduced ROM, may need replacement
- Shoulder: Rotator cuff involvement, erosions
- Elbow: Synovitis, reduced ROM, nodules

**Clinical Features:**

*Articular:*
- Symmetric polyarthritis
- Morning stiffness >1 hour
- Swelling (boggy synovitis)
- Warmth without erythema
- Progressive deformity if untreated

*Extra-articular (occur in ~40%):*
- Rheumatoid nodules
- Pulmonary: ILD, pleural disease
- Cardiac: Pericarditis
- Ocular: Scleritis, keratoconjunctivitis sicca
- Hematologic: Anemia of chronic disease

**Radiographic Features:**
- Soft tissue swelling (early)
- Periarticular osteopenia
- Joint space narrowing
- Marginal erosions (hallmark)
- Subluxation and dislocation (late)

**Laboratory Findings:**
- RF (Rheumatoid Factor): 70-80% positive
- Anti-CCP antibodies: More specific
- Elevated ESR, CRP
- Anemia of chronic disease

**Treatment Principles:**
- Early aggressive treatment ("window of opportunity")
- DMARDs: Methotrexate as anchor drug
- Biologics: Anti-TNF, IL-6 inhibitors, B-cell depletion
- Surgical intervention for failed medical therapy`,
      keyTerms: [
        { term: 'pannus', definition: 'Invasive inflammatory tissue that erodes cartilage and bone in RA', pronunciation: 'PAN-us' },
        { term: 'ulnar deviation', definition: 'Fingers drifting toward the pinky side at the knuckles, common in RA' },
        { term: 'swan neck deformity', definition: 'Finger deformity with DIP flexion and PIP hyperextension' },
        { term: 'boutonniere deformity', definition: 'Finger deformity with PIP flexion and DIP hyperextension', pronunciation: 'boo-tun-YAIR' },
        { term: 'atlantoaxial instability', definition: 'C1-C2 subluxation due to ligamentous destruction in RA' },
        { term: 'anti-CCP', definition: 'Anti-cyclic citrullinated peptide antibody, specific for RA' },
      ],
      analogies: [
        'Pannus is like an invasive weed that grows into and destroys the garden (joint).',
        'The erosions in RA are like rust eating through metal - they progress if not stopped.',
        'Atlantoaxial instability is like a loose hinge at the top of a door - dangerous if it slips.',
      ],
    },
    3: {
      level: 3,
      summary: 'Orthopedic management of RA involves understanding progressive joint destruction, perioperative considerations including cervical spine evaluation, and surgical options ranging from synovectomy to arthroplasty for end-stage disease.',
      explanation: `RA patients present unique orthopedic challenges due to systemic disease, medication effects, and complex joint pathology.

**Pathologic Progression:**

*Synovial Changes:*
- Type A synoviocyte proliferation
- Neoangiogenesis
- Inflammatory cell infiltration
- Pannus formation and invasion

*Joint Destruction Mechanisms:*
- Osteoclast activation (RANKL upregulation)
- MMP production
- Cartilage proteoglycan loss
- Subchondral erosions
- Ligament and tendon attenuation

*Biomechanical Consequences:*
- Joint instability
- Altered load distribution
- Compensatory deformities
- Muscle weakness and atrophy

**Cervical Spine in RA:**

*Atlantoaxial Instability (AAI):*
- Transverse ligament destruction
- ADI (atlantodental interval) >3mm abnormal
- Superior migration of odontoid (cranial settling)
- Risk of cord compression

*Subaxial Subluxation:*
- Multiple level instability
- Staircase appearance
- Canal compromise

*Pre-surgical Evaluation:*
- Flexion-extension lateral cervical films
- CT for bony detail
- MRI for cord compression
- ADI measurements

*Symptoms of Myelopathy:*
- Weakness
- Hyperreflexia
- Sensory changes
- Gait disturbance
- Bowel/bladder dysfunction

**Surgical Options:**

*Synovectomy:*
- Remove inflamed synovium
- Open or arthroscopic
- Best when medical therapy failing but joint preserved
- Recurrence possible

*Tendon Reconstruction:*
- Extensor tendon rupture (common wrist/hand)
- Flexor tenosynovitis
- Tendon transfers
- Timing before joint destruction

*Arthroplasty:*
- Indicated for end-stage disease
- Consider:
  - Bone quality (osteoporosis)
  - Soft tissue integrity
  - Adjacent joint involvement
  - Cervical spine status
  - Medication effects on healing

*Specific Procedures:*
- Hand: MCP arthroplasty (silicone implants)
- Wrist: Fusion or arthroplasty
- Elbow: Total elbow arthroplasty
- Shoulder: Reverse TSA often needed
- Hip/Knee: Total joint arthroplasty
- Foot: Forefoot reconstruction

**Perioperative Considerations:**

*Medication Management:*
- Methotrexate: Usually continue
- Biologics: Hold 1-2 half-lives pre-op
- Steroids: Stress-dose coverage may be needed
- Resume when wound healing satisfactory

*Surgical Risks:*
- Infection (immunosuppression)
- Wound healing (steroids, malnutrition)
- Cervical spine (intubation positioning)
- Osteoporotic bone (fixation challenges)
- Adjacent joint issues

*Anesthetic Considerations:*
- Cervical spine films
- Fiberoptic intubation if instability
- TMJ involvement affecting mouth opening
- Cricoarytenoid involvement (airway)

**Rehabilitation:**
- Modified for joint protection
- Emphasis on ROM
- Strengthening when inflammation controlled
- Adaptive equipment as needed
- OT for hand function`,
      keyTerms: [
        { term: 'atlantodental interval', definition: 'ADI; distance between atlas and dens on lateral X-ray; >3mm suggests instability in RA' },
        { term: 'cranial settling', definition: 'Superior migration of odontoid process into foramen magnum in severe RA' },
        { term: 'synovectomy', definition: 'Surgical removal of inflamed synovial membrane' },
        { term: 'reverse total shoulder arthroplasty', definition: 'Shoulder replacement with reversed ball-socket design; useful when rotator cuff deficient' },
        { term: 'extensor tendon rupture', definition: 'Common in RA at wrist level due to synovitis and bony prominences' },
      ],
      clinicalNotes: 'Always evaluate cervical spine before intubation in RA patients. Neck extension during laryngoscopy can cause cord compression. Biologic medications increase infection risk; timing of cessation varies by half-life (e.g., infliximab 4-5 weeks, adalimumab 2-3 weeks, etanercept 1-2 weeks). Wound healing complications more common with prednisone >10mg daily.',
    },
    4: {
      level: 4,
      summary: 'Advanced RA orthopedic management integrates understanding of disease activity, biologics impact, bone quality assessment, and complex reconstructive strategies while balancing infection risk with disease control.',
      explanation: `Optimal surgical outcomes in RA require integration of rheumatologic disease control with orthopedic intervention timing and technique modification.

**Disease Activity and Surgery:**

*Timing Considerations:*
- Active synovitis: Higher complication risk
- Aim for controlled disease pre-operatively
- DAS28-CRP, CDAI targets
- Balance urgency vs. optimization

*Flare Prevention:*
- Stress of surgery can trigger flare
- Perioperative steroid management
- Early mobilization
- Pain control

**Biologic Era Implications:**

*Changes in Surgical Epidemiology:*
- Decreased need for synovectomy
- Delayed/reduced joint destruction
- Continued need for arthroplasty
- Different patient population (older, more comorbidities)

*Perioperative Biologic Management:*
| Drug | Half-life | Hold Before Surgery |
|------|-----------|---------------------|
| Etanercept | 3-4 days | 1-2 weeks |
| Adalimumab | 2 weeks | 4 weeks |
| Infliximab | 9 days | 4-5 weeks |
| Tocilizumab | 11-13 days | 4 weeks |
| Abatacept | 13 days | 4 weeks |
| Rituximab | 18 days | 4 weeks (variable) |
| Tofacitinib | 3 hours | 1 week |

*Resume post-op:* When wound healing satisfactory (typically 2-4 weeks)

**Bone Quality:**

*Osteoporosis in RA:*
- Inflammatory cytokines promote resorption
- Glucocorticoid-induced
- Immobility contribution
- Vitamin D deficiency common

*Implications for Surgery:*
- Fixation challenges
- Consider cement augmentation
- Avoid long stems in arthroplasty (stress shielding)
- Perioperative fracture risk

*Assessment:*
- DXA pre-operatively
- Trabecular bone score
- Consider treatment optimization

**Joint-Specific Considerations:**

*Hand and Wrist:*
- MCP arthroplasty: Silicone vs. pyrocarbon
- Crossed intrinsic transfer for ulnar drift
- Darrach procedure for distal ulna
- Wrist fusion maintains grip strength
- Prioritize function over cosmesis

*Elbow:*
- High complication rate with TEA
- Linked vs. unlinked designs
- Triceps-sparing approaches
- Permanent lifting restriction (typically <5kg)
- Infection risk 3-5%

*Shoulder:*
- Rotator cuff often deficient
- Reverse TSA preferred
- Bone quality issues
- Glenoid erosion patterns (central vs. peripheral)

*Hip:*
- Protrusio acetabuli (medial migration)
- Structural bone graft may be needed
- Cemented fixation often preferred
- Good outcomes overall

*Knee:*
- Posterior cruciate retaining vs. substituting
- Consider constraint level
- Bone loss management
- Ligament insufficiency common

*Foot and Ankle:*
- Forefoot reconstruction often needed
- Rheumatoid hindfoot: Fusion preferred
- Triple arthrodesis for complex deformity
- Ankle replacement: Limited role, high failure

**Infection Considerations:**

*Risk Factors:*
- Immunosuppression
- Poor nutrition
- Chronic steroid use
- Revision surgery
- Disease activity

*Prevention Strategies:*
- Optimize albumin, lymphocytes
- Diabetes control
- MRSA screening/decolonization
- Antibiotic prophylaxis (extended coverage often used)

*Treatment:*
- Early recognition
- Aggressive debridement
- Organism-specific antibiotics
- May need staged revision

**Outcomes Research:**

*Registry Data:*
- RA patients have higher revision rates
- But good pain relief and function
- Infection rates 2-3x higher
- Improving in biologic era

*Quality of Life:*
- Substantial improvements post-arthroplasty
- Earlier intervention when indicated
- Address multiple joints sequentially`,
      keyTerms: [
        { term: 'DAS28', definition: 'Disease Activity Score using 28 joints; composite measure of RA disease activity' },
        { term: 'protrusio acetabuli', definition: 'Medial migration of femoral head into pelvis; seen in inflammatory arthritis' },
        { term: 'total elbow arthroplasty', definition: 'TEA; elbow joint replacement; higher complication rates than hip/knee' },
        { term: 'pyrocarbon', definition: 'Material used for MCP implants; may have advantages over silicone' },
        { term: 'trabecular bone score', definition: 'DXA-derived measure of bone microarchitecture beyond density' },
      ],
      clinicalNotes: 'ACR/AAHKS guidelines recommend withholding biologics before surgery for 1 dosing interval (based on dosing schedule). JAK inhibitors held 7 days pre-op. Consider increased stress-dose steroids if on chronic corticosteroids. Wound complications are most common in first 2 weeks; delay biologic restart if healing concerns. Nutritional optimization (albumin >3.5) improves outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary RA orthopedic care reflects paradigm shifts from disease-modifying therapy, with evolving surgical indications, improved implant technology, and precision approaches to infection prevention and perioperative management.',
      explanation: `The landscape of RA orthopedic surgery continues to evolve with advances in both rheumatologic and surgical care.

**Evolving Epidemiology:**

*Biologic Era Changes:*
- Delayed and reduced joint destruction
- Different patient phenotype at surgery
- Older patients with more comorbidities
- Less severe deformity at presentation

*Shifting Surgical Needs:*
- Decreased synovectomy
- Continued arthroplasty demand
- Cervical spine surgery stable/increasing
- Complex revision scenarios

*Registry Data:*
- Swedish Knee Arthroplasty Register
- National Joint Registry (UK)
- AJRR (American Joint Replacement Registry)
- RA-specific outcomes tracking

**Precision Perioperative Management:**

*Risk Stratification:*
- Multivariable risk models
- Disease activity incorporation
- Medication-specific risks
- Patient optimization pathways

*Shared Decision-Making:*
- Risk communication tools
- Patient-reported outcomes data
- Expectations management
- Timing considerations

**Advanced Surgical Techniques:**

*Robotic and Navigation:*
- Patient-specific instrumentation
- Improved alignment in difficult deformity
- Soft tissue balancing
- Bone-conserving techniques

*3D Planning:*
- Complex deformity analysis
- Custom implants
- Pre-operative simulation
- Surgical guides

*Biologics and Biomaterials:*
- Enhanced fixation surfaces
- Coating technologies
- Infection-resistant materials
- 3D-printed components

**Infection Prevention Science:**

*Risk Modification:*
- Preoperative optimization protocols
- Nutritional supplementation
- Glycemic control
- Anemia correction

*Decolonization:*
- MRSA screening
- Nasal mupirocin
- Chlorhexidine bathing
- Evidence supporting routine use

*Antibiotic Strategies:*
- Extended prophylaxis protocols
- Local antibiotic delivery
- Dual antibiotic cement
- Host-directed adjuncts

*Novel Approaches:*
- Antimicrobial surfaces
- Silver-coated implants
- Iodine-based coatings
- Biofilm disruption

**Outcome Optimization:**

*Prehabilitation:*
- Physical therapy optimization
- Nutritional assessment
- Psychological preparation
- Disease activity control

*Enhanced Recovery:*
- RA-modified ERAS protocols
- Multimodal pain management
- Early mobilization
- Reduced opioid use

*Post-operative Care:*
- Coordinated rheumatology follow-up
- Biologic restart timing
- Flare management
- Function optimization

**Research Frontiers:**

*Biomarkers:*
- Infection prediction
- Healing assessment
- Flare prediction
- Personalized timing

*Regenerative Approaches:*
- Cartilage preservation strategies
- Biologic augmentation
- Cell-based therapies
- Future joint preservation

*Digital Health:*
- Remote monitoring
- Wearable activity tracking
- Early complication detection
- Patient engagement platforms

**Special Populations:**

*Elderly RA:*
- Comorbidity burden
- Frailty assessment
- Cognitive considerations
- Polypharmacy

*Juvenile Idiopathic Arthritis:*
- Growth considerations
- Custom implants often needed
- Long-term revision planning
- Transition of care

*Seronegative Disease:*
- Similar orthopedic manifestations
- Treatment principles apply
- May have different outcomes

**Guidelines and Protocols:**

*ACR/AAHKS 2022 Guidelines:*
- Evidence-based DMARD management
- Perioperative steroid guidance
- Infection prevention bundles
- Multidisciplinary approach

*Quality Metrics:*
- SSI rates
- 90-day readmission
- Patient-reported outcomes
- Functional recovery

*Value-Based Care:*
- Bundle payment implications
- Risk adjustment for RA
- Outcome transparency
- Optimal care pathways`,
      keyTerms: [
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; multimodal protocol to accelerate post-operative recovery' },
        { term: 'AJRR', definition: 'American Joint Replacement Registry; national database tracking arthroplasty outcomes' },
        { term: 'patient-specific instrumentation', definition: 'PSI; custom cutting guides created from pre-operative imaging' },
        { term: 'biofilm', definition: 'Bacterial colonies in protective matrix on implant surfaces; resistant to antibiotics' },
        { term: 'prehabilitation', definition: 'Pre-operative optimization program including exercise, nutrition, and disease control' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Cervical spine evaluation is mandatory before any intubation in RA
- Hold biologics per half-life, restart when wound healing
- TEA has highest complication rate of major joint arthroplasty
- Protrusio acetabuli requires specialized implants/bone graft
- Silicone MCP arthroplasty: Expect motion, not full correction

**Surgical Pearls:**
- Address multiple joints in logical sequence (lower extremity often first)
- Consider bilateral procedures carefully (rehabilitation implications)
- Soft tissue handling is critical (poor healing capacity)
- Cement fixation often preferred (bone quality issues)
- Plan for potential revisions with implant choice

**Future Directions:**
- Personalized biologic interruption based on drug levels
- Machine learning for surgical timing optimization
- Biomarker-guided infection prevention
- Joint preservation strategies in early disease`,
    },
  },

  media: [
    {
      id: 'ra-hand-deformities',
      type: 'diagram',
      filename: 'rheumatoid-hand-deformities.svg',
      title: 'RA Hand Deformities',
      description: 'Swan neck, boutonniere, ulnar deviation, Z-thumb',
    },
    {
      id: 'cervical-spine-ra',
      type: 'diagram',
      filename: 'ra-cervical-instability.svg',
      title: 'RA Cervical Spine Instability',
      description: 'Atlantoaxial subluxation and measurement of ADI',
    },
  ],
  citations: [
    {
      id: 'smolen-2016',
      type: 'article',
      title: 'Rheumatoid arthritis',
      authors: ['Smolen JS', 'Aletaha D', 'McInnes IB'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(16)30173-8',
      license: 'Copyright Elsevier',
    },
    {
      id: 'acr-aahks-2022',
      type: 'article',
      title: 'ACR/AAHKS Guideline for Perioperative Management of DMARDs',
      authors: ['Goodman SM', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.41540',
      license: 'Copyright Wiley',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-joint-replacement', targetType: 'topic', relationship: 'related', label: 'Joint Replacement' },
    { targetId: 'ortho-joint-anatomy', targetType: 'structure', relationship: 'related', label: 'Joint Anatomy' },
    { targetId: 'rheum-ra-medical', targetType: 'condition', relationship: 'parent', label: 'RA Medical Management' },
  ],
  tags: {
    systems: ['musculoskeletal', 'immune'],
    topics: ['orthopedics', 'rheumatology', 'autoimmune', 'arthritis'],
    keywords: ['rheumatoid arthritis', 'RA', 'pannus', 'synovitis', 'arthroplasty', 'cervical instability'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rheumatoidArthritisOrthopedicContent;
