import { EducationalContent } from '../../types';

export const osteomyelitis: EducationalContent = {
  id: 'infectious-disease-osteomyelitis',
  type: 'condition',
  name: 'Osteomyelitis',
  alternateNames: ['Bone Infection', 'Bone Inflammation'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteomyelitis is a serious infection of the bone that requires long-term antibiotic treatment and sometimes surgery to cure.',
      explanation: `Osteomyelitis is an infection that affects the bones. It can happen when bacteria enter the bone through a wound, from the bloodstream, or after surgery. It is a serious condition that requires medical treatment.

**How Bone Infections Happen:**

1. **Through a Wound**
   - Open fracture (bone breaks through skin)
   - Deep puncture wounds
   - Foot punctures through shoes
   - Pressure sores that go deep

2. **From the Bloodstream**
   - Infection somewhere else spreads to bone
   - More common in children
   - Often affects long bones

3. **After Surgery**
   - Joint replacement infections
   - Spine surgery complications
   - Hardware becoming infected

**Symptoms:**
- Pain in the affected bone
- Fever and chills
- Redness and swelling
- Warmth over the area
- Difficulty moving the limb
- Drainage from wound (if present)

**Treatment:**
- Long course of antibiotics (4-6 weeks or more)
- Surgery to remove dead bone
- Wound care
- Sometimes removal of infected hardware

**Who Is at Risk:**
- People with diabetes (especially foot infections)
- Those with poor circulation
- People with weakened immune systems
- IV drug users
- People with recent bone surgery`,
      keyTerms: [
        { term: 'osteomyelitis', definition: 'Infection of the bone' },
        { term: 'fracture', definition: 'A broken bone' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria' },
        { term: 'bloodstream', definition: 'Blood flowing through the body' },
      ],
      analogies: [
        'Osteomyelitis is like termites in wood - the bacteria get deep into the structure and are hard to eliminate without aggressive treatment.',
        'Think of bone like a sponge - once infection gets in, it is hard to reach with antibiotics alone.',
      ],
      examples: [
        'A diabetic patient develops a foot ulcer that spreads to the foot bones.',
        'A child with a bloodstream infection develops pain in the leg bone.',
        'A patient with a knee replacement develops pain and fever months after surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteomyelitis is bone infection caused by bacterial invasion through hematogenous spread, contiguous spread from adjacent tissue, or direct inoculation, requiring prolonged antimicrobial therapy and often surgical intervention.',
      explanation: `Osteomyelitis is a serious bone infection that can occur through three main mechanisms, each with distinct clinical presentations, microbial etiologies, and treatment considerations.

**Classification by Mechanism:**

*Hematogenous Osteomyelitis:*
- Bacteria reach bone through bloodstream
- Most common in children
- Affects metaphysis of long bones (femur, tibia, humerus)
- Single site usually
- Common organisms: S. aureus, Streptococcus, Kingella (children <3)

*Contiguous Focus Osteomyelitis:*
- Spread from adjacent soft tissue infection
- Diabetic foot infections most common
- Pressure ulcers
- Dental infections to jaw
- Often polymicrobial

*Direct Inoculation:*
- Open fractures
- Surgical contamination
- Penetrating trauma
- Podiatric procedures

**Microbiology:**

*Staphylococcus aureus:*
- Most common cause overall
- 50-60% of cases
- Both MSSA and MRSA
- Forms biofilms on hardware

*Coagulase-Negative Staphylococci:*
- Associated with prosthetic devices
- S. epidermidis most common
- Biofilm producers

*Streptococci:*
- Beta-hemolytic streptococci
- S. pneumoniae (children)
- Often polymicrobial in diabetic foot

*Gram-Negative Rods:*
- Pseudomonas: Puncture wounds through footwear
- Enterobacterales: Diabetic foot, elderly
- Salmonella: Sickle cell patients

*Anaerobes:*
- Bacteroides, Peptostreptococcus
- Diabetic foot, decubitus ulcers
- Often with aerobic organisms

**Clinical Presentation:**

*Acute Osteomyelitis:*
- <2 weeks duration
- Fever, chills
- Localized bone pain
- Erythema, warmth, swelling
- Limited range of motion

*Chronic Osteomyelitis:*
- >2 weeks duration
- Bone pain, draining sinus tracts
- Sequestrum (dead bone)
- Involucrum (new bone formation)
- Systemic symptoms may be absent

**Diagnostic Workup:**
- Blood cultures (hematogenous cases)
- ESR and CRP (elevated)
- Plain X-rays (changes take 2 weeks)
- MRI most sensitive
- Bone biopsy for culture
- Wound cultures less reliable`,
      keyTerms: [
        { term: 'hematogenous', definition: 'Spread through the bloodstream' },
        { term: 'metaphysis', definition: 'Growing end of long bones' },
        { term: 'sequestrum', definition: 'Piece of dead bone separated from healthy bone' },
        { term: 'involucrum', definition: 'New bone formed around infected bone' },
        { term: 'biofilm', definition: 'Protective layer bacteria form on surfaces' },
      ],
      analogies: [
        'Biofilm on infected hardware is like a protective shield that makes bacteria 1000 times harder to kill with antibiotics.',
      ],
      examples: [
        'A 5-year-old with fever and refusal to walk on one leg.',
        'A diabetic patient with a chronic foot wound draining pus.',
        'An IV drug user with back pain and fever (vertebral osteomyelitis).',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteomyelitis pathogenesis involves bacterial adherence, biofilm formation, bone necrosis, and impaired vascularity, with diagnosis requiring imaging and culture-directed therapy for 4-6 weeks or longer.',
      explanation: `Osteomyelitis involves complex interactions between bacteria, bone tissue, and host immune responses, with pathophysiology that creates barriers to treatment and explains why prolonged therapy is necessary.

**Pathophysiology:**

*Bacterial Adherence:*
- S. aureus binds bone matrix proteins
- Fibronectin-binding proteins
- Collagen adhesins
- Initial colonization of bone surface

*Biofilm Formation:*
- Irreversible attachment
- Extracellular polysaccharide matrix
- Altered bacterial metabolism
- Protected from antibiotics and immune system
- Especially important on prosthetic material

*Bone Destruction:*
- Bacterial toxins and enzymes
- Inflammatory cytokines
- Ischemia from thrombosis
- Bone necrosis (sequestrum formation)
- New bone formation (involucrum)

*Chronic Infection Features:*
- Hypoxic environment
- Acidic pH
- Nutrient limitations
- Dormant persister cells
- Difficult to eradicate

**Imaging:**

*Plain Radiographs:*
- Earliest findings at 10-14 days
- Periosteal reaction
- Lytic lesions
- Sequestrum identification
- Baseline for comparison

*MRI:*
- Most sensitive and specific
- T1 hypointensity, T2 hyperintensity
- Marrow edema
- Soft tissue involvement
- Detects early infection

*CT Scan:*
- Bony detail
- Sequestrum visualization
- Cortical destruction
- Preoperative planning

*Nuclear Medicine:*
- Bone scan: Sensitive but not specific
- WBC scan: More specific
- Gallium scan
- PET/CT: High sensitivity

**Diagnostic Criteria:**
- Clinical findings
- Imaging evidence
- Positive bone culture
- Histopathology (acute/chronic inflammation)

**Antibiotic Selection:**

*MSSA:*
- Nafcillin, oxacillin, cefazolin
- Beta-lactams superior to vancomycin

*MRSA:*
- Vancomycin (monitor levels)
- Daptomycin
- Linezolid (oral option)
- Ceftaroline

*Gram-Negative:*
- Pseudomonas: Cefepime, ceftazidime, ciprofloxacin
- Enterobacterales: Per sensitivities

*Oral Options:*
- Fluoroquinolones (Pseudomonas)
- Clindamycin
- TMP-SMX
- Linezolid
- Doxycycline

**Surgical Indications:**
- Abscess drainage
- Sequestrectomy
- Debridement of necrotic tissue
- Hardware removal if infected
- Local antibiotic delivery (beads, spacers)`,
      keyTerms: [
        { term: 'periosteal reaction', definition: 'New bone formation beneath the periosteum' },
        { term: 'lytic lesion', definition: 'Area of bone destruction' },
        { term: 'sequestrectomy', definition: 'Surgical removal of dead bone' },
        { term: 'WBC scan', definition: 'Radiolabeled white blood cell imaging' },
        { term: 'persister cells', definition: 'Dormant bacteria tolerant to antibiotics' },
      ],
    },
    4: {
      level: 4,
      summary: 'Management of osteomyelitis requires differentiation of acute versus chronic infection, diabetic foot protocols, prosthetic joint infection algorithms, and evaluation for oral antibiotic step-down after initial surgical debridement.',
      explanation: `Clinical management of osteomyelitis integrates surgical principles, antimicrobial pharmacology, and individualized approaches based on infection site, host factors, and presence of orthopedic hardware.

**Acute Hematogenous Osteomyelitis (Children):**

*Management:*
- Blood cultures first
- Empiric IV antibiotics
- No surgery if no abscess
- Duration: 3-4 weeks IV or oral step-down
- Monitoring for response

*Oral Step-Down Criteria:*
- Afebrile
- Decreased pain
- Decreasing inflammatory markers
- Reliable family
- Good oral option available

**Diabetic Foot Osteomyelitis:**

*Diagnostic Approach:*
- Probe-to-bone test
- MRI for extent
- Bone biopsy (gold standard)
- Wound cultures often polymicrobial

*Classification:*
- International Working Group on the Diabetic Foot (IWGDF)
- PEDIS classification
- Assess perfusion

*Treatment:*
- Surgical debridement usually needed
- Revascularization if poor blood flow
- Offloading essential
- Antibiotics 1-3 weeks (shorter than previously thought)
- Consider remission rather than cure

*Multidisciplinary Team:*
- Infectious diseases
- Podiatry/surgery
- Vascular surgery
- Endocrinology
- Wound care

**Prosthetic Joint Infection (PJI):**

*Diagnosis:*
- Musculoskeletal Infection Society (MSIS) criteria
- Joint aspiration
- Blood cultures
- Inflammatory markers (ESR, CRP)
- Synovial fluid leukocyte count and differential

*Classification:*
- Early (<3 months post-op): Acute hematogenous
- Delayed (3-24 months): Chronic
- Late (>24 months): Hematogenous seeding

*Treatment Approaches:*

*Debridement, Antibiotics, Implant Retention (DAIR):*
- For early infection or acute hematogenous
- Exchange modular parts if possible
- 4-6 weeks antibiotics
- Success 40-70%

*One-Stage Exchange:*
- Remove prosthesis, immediate new implant
- High success if appropriate patient selection
- Requires experienced surgeon

*Two-Stage Exchange:*
- Remove prosthesis
- Antibiotic spacer
- 4-6 weeks antibiotics
- Second surgery for new implant
- Gold standard for chronic PJI

*Chronic Suppression:*
- When surgery not possible
- Lifelong antibiotics
- Relapse common if stopped

**Vertebral Osteomyelitis:**

*Clinical Features:*
- Back pain, fever
- Risk factors: IV drug use, diabetes, elderly
- S. aureus most common
- Often involves adjacent disc (discitis)

*Complications:*
- Epidural abscess
- Neurologic compromise
- Sepsis

*Treatment:*
- Usually medical management
- Surgery for abscess, instability, neurologic deficits
- 6 weeks antibiotics minimum

**Antibiotic Spacers:**
- Antibiotic-loaded cement
- Local antibiotic delivery
- Maintain joint space
- Allow mobilization
- Common antibiotics: Vancomycin, aminoglycosides`,
      keyTerms: [
        { term: 'probe-to-bone', definition: 'Diagnostic test using sterile probe to detect bone in diabetic foot ulcer' },
        { term: 'offloading', definition: 'Reducing pressure on affected area' },
        { term: 'DAIR', definition: 'Debridement, Antibiotics, and Implant Retention' },
        { term: 'two-stage exchange', definition: 'Prosthesis removal, interval antibiotic therapy, then reimplantation' },
        { term: 'synovial fluid', definition: 'Fluid that lubricates joints' },
      ],
      clinicalNotes: 'Beta-lactams are superior to vancomycin for MSSA osteomyelitis. Duration of therapy can often be shortened in diabetic foot osteomyelitis if source control achieved. Always check for retained hardware in persistent osteomyelitis. PJI treatment requires close coordination between surgery and infectious diseases.',
    },
    5: {
      level: 5,
      summary: 'Expert management of osteomyelitis encompasses advanced diagnostics including molecular techniques, complex PJI algorithms, diabetic foot salvage, and novel approaches including biofilm-disrupting agents and phage therapy.',
      explanation: `Advanced osteomyelitis management requires sophisticated diagnostic approaches, complex decision-making for hardware retention, and emerging therapies for difficult-to-treat infections.

**Advanced Diagnostics:**

*Molecular Techniques:*
- 16S rRNA gene sequencing
- Metagenomic sequencing
- Identify slow-growing or fastidious organisms
- Detect polymicrobial infections
- Culture-negative cases

*Rapid Diagnostics:*
- Sonication of explanted hardware
- Disrupts biofilm, improves culture yield
- PCR from sonication fluid
- MALDI-TOF for rapid ID

*Imaging Advances:*
- PET/CT with FDG
- Differentiates infection from healing
- May predict treatment response
- Cost and availability considerations
- WBC-labeled SPECT/CT

**Difficult Clinical Scenarios:**

*Culture-Negative PJI:*
- Broader-spectrum empiric therapy
- Molecular diagnostics
- Consider fungal infection
- May need to stop antibiotics and re-biopsy

*Multidrug-Resistant Organisms:*
- Limited antibiotic options
- Combination therapy
- Consider salvage vs amputation
- Higher failure rates

*Fungal Osteomyelitis:*
- Candida: Often hematogenous
- Aspergillus: Extension from sinus
- Requires prolonged antifungal therapy
- Surgical debridement usually needed

**Surgical Advances:**

*Local Antibiotic Delivery:*
- Antibiotic-loaded cement beads
- Biodegradable carriers (calcium sulfate)
- High local concentrations
- Reduced systemic toxicity

*Masquelet Technique:*
- Induced membrane formation
- Bone defect management
- Two-stage with antibiotic cement

*Bone Transport:*
- Ilizarov technique
- Addresses segmental defects
- Gradual bone regeneration

**Emerging Therapies:**

*Biofilm-Disrupting Agents:*
- D-amino acids
- DNase
- Iron chelators
- EDTA
- Limited clinical data

*Phage Therapy:*
- Bacteriophages specific to organism
- Biofilm penetration
- Compassionate use cases
- Clinical trials ongoing
- Regulatory framework developing

*Immunotherapy:*
- Monoclonal antibodies against S. aureus
- Alpha-toxin neutralization
- Adjunctive therapy

**Antibiotic Stewardship:**
- Oral step-down when appropriate
- Biomarker-guided duration
- Short courses for diabetic foot (1-3 weeks)
- Avoid prolonged IV when oral options available

**Outcome Assessment:**
- Clinical cure vs clinical failure
- Infection-free survival
- Quality of life
- Functional outcomes
- Cost-effectiveness

**Special Populations:**

*Sickle Cell Disease:*
- Salmonella osteomyelitis
- Higher incidence
- Often multifocal

*Immunocompromised:*
- Atypical organisms
- Disseminated infection
- Prolonged therapy needed

*Spinal Cord Injury:*
- Pressure ulcer osteomyelitis
- Polymicrobial
- Difficult source control`,
      keyTerms: [
        { term: 'sonication', definition: 'Use of ultrasound to disrupt biofilm from explanted devices' },
        { term: '16S rRNA', definition: 'Ribosomal RNA used for bacterial identification' },
        { term: 'Masquelet technique', definition: 'Two-stage bone reconstruction method' },
        { term: 'bacteriophage', definition: 'Virus that infects bacteria' },
        { term: 'Ilizarov technique', definition: 'External fixation for bone lengthening/transport' },
      ],
      clinicalNotes: 'Sonication of explanted hardware significantly improves diagnostic yield in PJI. Short-course antibiotics (1-3 weeks) are increasingly accepted for diabetic foot osteomyelitis after adequate debridement. Phage therapy represents a promising frontier for chronic multidrug-resistant bone infections, particularly with retained hardware.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious', 'musculoskeletal'],
    topics: ['bone-infection', 'surgery'],
    keywords: ['osteomyelitis', 'bone infection', 'sequestrum', 'PJI', 'diabetic foot'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default osteomyelitis;
