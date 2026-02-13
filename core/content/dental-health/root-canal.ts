/**
 * Root Canal - Comprehensive Educational Content
 *
 * Covers endodontic treatment including diagnosis, procedures,
   indications, and outcomes for root canal therapy.
 */

import { EducationalContent } from '../types';

export const rootCanal: EducationalContent = {
  id: 'procedure-root-canal',
  type: 'topic',
  name: 'Root Canal',
  nameEs: 'Tratamiento de Conducto',
  alternateNames: [
    'Root Canal Therapy',
    'Endodontic Treatment',
    'RCT',
    'Root Canal Treatment',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'A root canal is a treatment to save a tooth that is badly decayed or infected. The dentist removes the damaged pulp, cleans and shapes the inside of the tooth, and fills and seals the space.',
      explanation: `**What is a Root Canal?**

A root canal is a treatment that saves a tooth that would otherwise need to be removed. It treats problems with the soft tissue inside the tooth (the pulp).

**Why Might You Need a Root Canal?**

**Reasons:**
- Deep decay that reaches the nerve
- Repeated dental procedures on a tooth
- Cracked or damaged tooth
- Trauma to the tooth
- Severe infection or abscess

**Signs You Might Need a Root Canal:**
- Severe toothache, especially when biting
- Prolonged sensitivity to hot or cold
- Darkening or discoloration of the tooth
- Swelling and tenderness in nearby gums
- A recurring pimple on the gums
- Sometimes NO symptoms at all

**The Root Canal Process:**

**Step 1: Examination and X-rays**
- Dentist examines the tooth
- Takes X-rays to see the roots
- Diagnoses the problem

**Step 2: Numbing**
- Local anesthesia numbs the area
- You should not feel pain during treatment

**Step 3: Access**
- Small opening made in the tooth
- Allows access to the pulp chamber

**Step 4: Removal of Pulp**
- Damaged pulp is removed
- Nerves and blood vessels removed
- Canals cleaned and shaped

**Step 5: Filling**
- Canals filled with special material
- Seals the tooth
- Prevents re-infection

**Step 6: Restoration**
- Temporary filling placed
- Later: Crown or permanent filling
- Protects the tooth

**Does it Hurt?**

- Modern root canals are usually NO MORE painful than getting a filling
- Most discomfort is FROM the infection, not the treatment
- The treatment actually RELIEVES the pain
- Recovery is usually quick

**After the Procedure:**
- Some soreness for a few days
- Over-the-counter pain medicine helps
- Avoid chewing on the tooth until permanent restoration
- Follow up with your dentist as scheduled

**Success Rate:**
- Root canals have a very high success rate
- Over 95% success for most teeth
- With proper care, can last a lifetime`,
      keyTerms: [
        { term: 'root canal', definition: 'Treatment to remove infected pulp and save a tooth' },
        { term: 'pulp', definition: 'Soft tissue inside the tooth containing nerves and blood vessels' },
        { term: 'abscess', definition: 'Pocket of pus caused by infection' },
        { term: 'root canal therapy', definition: 'Another name for root canal treatment' },
      ],
      analogies: [
        'A root canal is like taking out the hollow center of a pencil and filling it with rubber.',
        'The pulp is like the "living" part of the tooth - when it dies, the tooth can still work without it.',
      ],
      examples: [
        'A deep cavity that reaches the nerve usually requires a root canal.',
        'A tooth that has been knocked out and put back in may need a root canal later.',
      ],
      patientCounselingPoints: [
        'Root canals have a bad reputation but modern techniques make them much more comfortable',
        'Saving your natural tooth is almost always better than extracting it',
        'A crown after root canal protects the tooth from breaking',
        'Root canal treatment usually takes 1-3 visits',
      ],
    },
    2: {
      level: 2,
      summary: 'Root canal therapy treats infected or necrotic dental pulp. The procedure involves removing pulp tissue, cleaning and shaping the root canals, and obturating the system to prevent reinfection.',
      explanation: `## Indications for Root Canal Therapy

**Pulpal Pathology:**

*Irreversible Pulpitis:*
- Severe, spontaneous pain
- Lingering thermal pain (>30 seconds)
- Pain referral
- Reversible only with RCT

*Pulp Necrosis:*
- Pulp tissue dies
- No response to thermal testing
- May be asymptomatic
- Can lead to infection

*Pulp Calcification:*
- Pulp chamber calcifies
- Limits access
- May require RCT for access

**Periapical Pathology:**

*Apical Periodontitis:*
- Inflammation around root tip
- Periapical radiolucency
- May be symptomatic or asymptomatic

*Apical Abscess:*
- Acute infection
- Pain, swelling
- Purulent exudate
- Requires drainage

*Apical Cyst:*
- Chronic inflammation
- Cyst formation
- Radiolucent lesion
- Usually asymptomatic

**Other Indications:**
- Trauma with pulp necrosis
- Iatrogenic pulp exposure
- Periodontal-endodontic lesions
- Retreatment failed RCT
- Planned prosthodontic treatment

**Contraindications:**

*Absolute:*
- Non-restorable tooth
- Vertical root fracture
- Insufficient bone support
- Patient factors (medical, financial)

*Relative:*
- Severe curvature of canals
- Calcified canals
- Limited access
- Poor prognosis

## Procedure Steps

**Diagnosis:**
- Clinical examination
- Thermal testing (cold, heat)
- Electric pulp testing
- Percussion, palpation
- Radiographic examination (PA, CBCT)
- Periodontal probing

**Treatment Planning:**
- Restorability assessment
- Prognosis determination
- Number of visits (1-2 typical)
- Anesthesia considerations

**Procedure:**

1. **Anesthesia:**
   - Local anesthesia (lidocaine, articaine)
   - May need additional techniques (intraligamentary, intraosseous)

2. **Isolation:**
   - Rubber dam placement
   - Essential for isolation
   - Prevents contamination

3. **Access Preparation:**
   - Opening to pulp chamber
   - Straight-line access to canals
   - Removes all pulp tissue

4. **Working Length Determination:**
   - Apex locator
   - Radiographs
   - 0.5-1.5mm short of radiographic apex

5. **Cleaning and Shaping:**
   - Remove debris, bacteria
   - Shape canals for filling
   - Irrigation (NaOCl, EDTA)
   - Hand files + rotary instruments

6. **Obturation:**
   - Fill canals with gutta-percha
   - Sealer (bioceramic, resin, ZOE)
   - Cold or warm compaction
   - Seal canal completely

7. **Coronal Seal:**
   - Temporary or permanent filling
   - Prevents microleakage
   - Usually crown for posterior teeth

## Success and Failure

**Success Criteria:**
- Asymptomatic
- No sensitivity to percussion
- Normal function
- Radiographic: Healing or no change
- No sinus tract

**Success Rates:**
- Primary RCT: 85-95% depending on case
- Retreatment: 70-80%
- Lower for complex cases

**Failure Causes:**
- Missed canals
- Incomplete obturation
- Coronal leakage
- Vertical root fracture
- Persistent infection
- Poor case selection

**Management of Failure:**
- Retreatment
- Apical surgery
- Extraction`,
      keyTerms: [
        { term: 'pulpitis', definition: 'Inflammation of the dental pulp' },
        { term: 'necrosis', definition: 'Tissue death' },
        { term: 'gutta-percha', definition: 'Rubber-like material used to fill root canals' },
        { term: 'apicoectomy', definition: 'Surgical removal of root tip and infected tissue' },
        { term: 'obturation', definition: 'Filling and sealing of root canals' },
      ],
      analogies: [
        'Root canal treatment is like cleaning out the hollow inside of a pencil and sealing it.',
        'The rubber dam is like a raincoat for the tooth - keeps it dry during treatment.',
      ],
      clinicalNotes: 'Rubber dam isolation is standard of care. Sodium hypochlorite (1-6%) primary irrigant. EDTA removes smear layer. Working length 0.5-1.5mm short of apex. Gutta-percha with sealer standard obturation. CBCT useful for diagnosis in complex cases.',
      patientCounselingPoints: [
        'Root canal treatment has a high success rate - over 90% for most cases',
        'A crown after root canal is important to prevent tooth fracture',
        'Some soreness after treatment is normal and usually resolves in a few days',
        'Root canal treatment is usually less painful than the infection it treats',
      ],
    },
    3: {
      level: 3,
      summary: 'Contemporary endodontics utilizes nickel-titanium rotary instrumentation, bioceramic sealers, cone beam imaging, and magnification. Treatment planning integrates diagnosis, prognosis assessment, and restorative considerations.',
      explanation: `## Diagnostic Advances

**Cone Beam Computed Tomography (CBCT):**
- 3D visualization of root canal anatomy
- Detects missed canals
- Identifies fractures
- Assesses periapical pathology
- Superiors 2D imaging for complex cases
- Limited: Resolution, cost, radiation

**Diagnostic Testing:**

*Pulp Testing:*
- Cold: CO2, refrigerant sprays
- Heat: Gutta-percha, hot water
- EPT: Electric pulp tester
- Cavity test: Drilling test cavity

*Percussion and Palpation:*
- Periapical inflammation detection
- Location of inflammation
- Severity assessment

**Imaging:**
- Periapical radiographs: Standard
- Bitewings: Adjacent pathology
- CBCT: Complex cases, fractures
- Digital: Enhanced capabilities

## Instrumentation

**File Systems:**

*Nickel-Titanium (NiTi) Rotary Files:*
- Super flexibility
- Efficient cleaning
- Reduced fatigue vs stainless steel
- Various tapers and designs
- Engine-driven

*Reciprocating Motion:*
- Reduces file stress
- Single-file systems
- Efficient instrumentation
- WaveOne, Reciproc systems

*Heat Treatment:*
- CM wire (controlled memory)
- Blue, Gold, FireWire
- Increased flexibility
- Better canal shaping

**Irrigation:**

*Sodium Hypochlorite (NaOCl):*
- Primary irrigant
- Concentrations: 1-6%
- Dissolves organic tissue
- Antimicrobial
- Unpleasant smell/taste

*EDTA:*
- Chelating agent
- Removes smear layer
- Demineralizes dentin
- Used as final rinse
- 17% solution

*Chlorhexidine:*
- Antimicrobial substantivity
- No tissue dissolution
- Used when NaOCl contraindicated
- Does not remove smear layer

**Activation Techniques:**
- Ultrasonic activation
- Sonic activation
- Apical negative pressure
- Laser activation
- Improves cleaning efficacy

## Obturation Techniques

**Cold Compaction:**
- Lateral condensation
- Warm vertical compaction (Schilder)
- Gutta-percha + sealer

**Warm Techniques:**
- System B, Continuous wave
- Obtura, Thermafil
- Better adaptation
- 3D fill of canal system

**Sealers:**

*Bioceramic:*
- Excellent seal
- Biocompatible
- Hydrophilic
- Long setting time

*Epoxy Resin:*
- Excellent seal
- Good adhesion
- Technique sensitive

*Zinc Oxide Eugenol:*
- Traditional
- Adequate seal
- Irritating to periradicular tissues

## Complex Cases

**Canal Morphology:**
- MB2 common in maxillary first molars (70-90%)
- C-shaped canals in mandibular second molars
- Accessory canals, isthmuses
- Curved canals
- Calcified canals

**Retreatment:**
- Remove existing obturation
- Solvent for gutta-percha
- Ultrasonic removal of carriers
- Challenges: Broken instruments, ledges
- Success: 70-80%

**Surgery:**
- Apicoectomy with root-end filling
- Root-end filling materials: MTA, bioceramic
- Indications: Persistent cysts, failed RCT
- Success: 70-90%

**Trauma:**
- Avulsed teeth: RCT after reimplantation
- Intrusion: Pulp necrosis common
- Luxation: Monitor pulp status
- Apexification for immature teeth

## Regenerative Endodontics

**Revascularization:**
- Indication: Immature permanent teeth with necrosis
- Procedure: Disinfection → blood clot scaffold → MTA barrier
- Goal: Root maturation
- Evidence: Continued root development possible
- Controversy: True regeneration vs. repair

**Apexification:**
- Indication: Immature necrotic teeth
- Traditional: Ca(OH)₂ long-term
- Contemporary: MTA one-visit
- Creates apical barrier
- No continued root development

## Periradicular Surgery

**Apicoectomy:**
- Surgical root resection
- Root-end preparation
- Root-end filling
- Indications: Failed RCT, calcified canals, cysts
- Success: 80-90%

**Hemisection/Root Amputation:**
- Multi-rooted teeth
- Remove one root
- Preserve remaining tooth
- Restored with crown

## Prognostic Factors

**Favorable:**
- Vital pulp pre-op
- No periapical radiolucency
- Adequate coronal seal
- Good restorable tooth
- Straight canals

**Unfavorable:**
- Necrotic pulp
- Large periapical lesion
- Poor restorable
- Curved canals
- Calcified canals
- Periodontal involvement

**Periodontal-Endodontic Lesions:**
- Combined lesions
- Treatment challenges
- Prognosis: Guarded
- Both conditions must be addressed

## Clinical Pearls

**Diagnosis:**
- Multiple tests for accuracy
- Correlate findings
- CBCT for complex cases

**Treatment:**
- Rubber dam essential
- Patience with calcified canals
- Irrigation volume important
- Obturation to working length

**Prognosis:**
- Explain realistic expectations
- Follow-up essential
- Radiographic healing takes time
- Patient factors important`,
      keyTerms: [
        { term: 'NiTi', definition: 'Nickel-titanium alloy used for endodontic files' },
        { term: 'apicoectomy', definition: 'Surgical removal of root tip and apical pathology' },
        { term: 'revascularization', definition: 'Regenerative procedure for immature necrotic teeth' },
        { term: 'MTA', definition: 'Mineral trioxide aggregate; bioceramic material' },
        { term: 'CBCT', definition: 'Cone beam computed tomography; 3D imaging' },
      ],
      clinicalNotes: 'Rubber dam mandatory. NiTi rotary files efficient but can separate. Sodium hypochlorite irrigation essential (caution with apex less than 1mm). Working length determination critical. CBCT valuable for complex cases. MTA gold standard for apexification, root-end fillings.',
      patientCounselingPoints: [
        'Root canal treatment usually takes 1-2 visits, occasionally more',
        'Success rate exceeds 90% for most teeth',
        'Some discomfort after treatment is normal - call if severe or persistent',
        'Final restoration (crown) important for long-term success',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern endodontics incorporates advanced imaging, minimally invasive techniques, bioceramic materials, and regenerative approaches. Outcomes continue to improve with technological and material advances.',
      explanation: `## Advanced Technologies

**Imaging Advances:**
- CBCT becoming standard for complex cases
- 3D printing for surgical guides
- Micro-CT for research
- Digital workflow integration

**Instrumentation Advances:**
- Heat-treated NiTi alloys
- Reciprocating motion reduces separation
- Adaptive motion technology
- Glide path files
- Adjustable torque motors

**Irrigation Advances:**
- Multisonic activation
- Negative pressure irrigation
- Ozone therapy (investigational)
- Photodynamic therapy

**Obturation Advances:**
- Carrier-based systems
- 3D obturation techniques
- Bioceramic sealers
- Single-cone techniques
- Mobile obturation systems

## Surgical Endodontics

**Modern Approaches:**
- Minimal osteotomy
- Piezoelectric surgery
- Ultrasonic root-end preparation
- Biocompatible root-end materials
- Microsurgical techniques
- Enhanced healing

**Root-End Filling Materials:**
- MTA and derivatives
- Bioceramics
- Composite resins
- Amalgam (historical)

**Indications:**
- Failed conventional RCT
- Surgical accessibility
- Calcified canals
- Periapical cysts
- Iatrogenic problems

## Trauma Management

**Dental Trauma Guidelines:**
- IADT guidelines
- Time-critical interventions
- Splinting protocols
- Follow-up protocols

**Specific Injuries:**
- Avulsion: Reimplant immediately, RCT 7-10 days later
- Intrusion: Monitor, RCT common
- Luxation: Monitor, RCT if pulp necrosis
- Fracture: Treatment depends on extent

## Regenerative Endodontics

**Current State:**
- Proven for immature permanent teeth
- Revascularization protocols
- Apexogenesis with vital pulp therapy
- Stem cell applications (research)

**Procedure:**
- Minimal instrumentation
- Antibiotic paste (TAP/ DAP)
- Blood clot scaffold
- MTA coronal barrier
- Coronal seal

**Outcomes:**
- Continued root development
- Thickening of canal walls
- Apical closure
- Some vital tissue return

## Evidence-Based Practice

**Treatment Planning:**
- CBCT when indicated
- Magnification (microscope)
- Ultrasonic activation
- Bioceramic sealers
- Rubber dam always

**Success Rates:**
- Primary RCT: >90% (favorable cases)
- Surgical: 85-90%
- Retreatment: 75-80%
- Regenerative: Variable, promising

**Referral Considerations:**
- Complex anatomy
- Retreatment cases
- Surgery
- Curved canals
- Calcified canals`,
      keyTerms: [
        { term: 'TAP', definition: 'Triple antibiotic paste; metronidazole, ciprofloxacin, minocycline' },
        { term: 'DAP', definition: 'Double antibiotic paste; without minocycline for discoloration' },
      ],
      clinicalNotes: 'Microscopes now standard for many endodontists. Bioceramic sealers popular: biocompatible, hydrophilic. Revascularization promising for immature teeth. Ultrasonic irrigation improves cleaning. CBCT valuable for diagnosis and treatment planning.',
    },
    5: {
      level: 5,
      summary: 'The future of endodontics includes regenerative approaches, stem cell therapies, bioactive materials, and AI-driven diagnosis. Integration with digital workflows and advanced imaging will continue to transform clinical practice.',
      explanation: `## Frontiers

**Regenerative Endodontics:**
- Stem cell-based approaches
- Scaffold materials
- Growth factor delivery
- Vascularization strategies
- Clinical translation challenges

**Bioactive Materials:**
- Pulp capping agents
- Regenerative materials
- Antibacterial properties
- Mineralization promotion

**Digital Technologies:**
- AI-assisted diagnosis
- Dynamic navigation
- 3D-printed guides
- Virtual planning

**Clinical Translation:**
- Evidence-based protocols
- Cost-effectiveness
- Accessibility
- Training requirements`,
      keyTerms: [],
      clinicalNotes: `Future practice:
1. Regenerative approaches will expand beyond immature teeth
2. AI will assist with diagnosis and treatment planning
3. Stem cell therapies may enable true pulp regeneration
4. Bioactive materials will enhance healing`,
    },
  },

  media: [
    {
      id: 'root-canal-procedure',
      type: 'diagram',
      filename: 'root-canal-procedure.svg',
      title: 'Root Canal Procedure Steps',
      description: 'Steps of root canal therapy',
    },
  ],

  citations: [
    {
      id: 'hargreaves-cohen',
      type: 'textbook',
      title: 'Cohen\'s Pathways of the Pulp',
      authors: ['Hargreaves, K.M.', 'Berman, L.H.'],
      source: 'Elsevier',
      chapter: 'Chapters 6-20',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-structure', targetType: 'structure', relationship: 'related', label: 'Tooth Structure' },
    { targetId: 'condition-tooth-decay', targetType: 'condition', relationship: 'related', label: 'Tooth Decay' },
    { targetId: 'procedure-tooth-extraction', targetType: 'topic', relationship: 'related', label: 'Tooth Extraction' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['pulp', 'root-canal'],
    topics: ['endodontics', 'treatment', 'microsurgery'],
    keywords: ['root canal', 'endodontics', 'pulp', 'gutta-percha', 'apicoectomy', 'revascularization'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rootCanal;
