/**
 * Dental Implants - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const dentalImplants: EducationalContent = {
  id: 'procedure-dental-implants',
  type: 'topic',
  name: 'Dental Implants',
  nameEs: 'Implantes Dentales',
  alternateNames: ['Tooth Implants', 'Implant Dentistry', 'Osseointegrated Implants'],

  levels: {
    1: {
      level: 1,
      summary: 'Dental implants are artificial tooth roots made of titanium that are placed in the jawbone. A crown is attached to replace missing teeth. They look and function like natural teeth.',
      explanation: `**What Are Dental Implants?**

A dental implant is a small titanium post that replaces the root of a missing tooth. A crown (artificial tooth) is attached on top.

**Parts of an Implant:**
1. **Implant**: Titanium screw placed in jawbone
2. **Abutment**: Connector piece
3. **Crown**: The visible tooth part

**Why Choose Implants?**
- Look and feel like natural teeth
- Do not damage neighboring teeth
- Preserve jawbone
- Long-lasting (can last a lifetime)
- Comfortable eating and speaking

**The Process:**
1. **Consultation**: X-rays and planning
2. **Surgery**: Implant placed in bone
3. **Healing**: 3-6 months for bone to fuse
4. **Abutment**: Connector placed
5. **Crown**: Final tooth attached

**Who Can Get Implants?**
- Healthy gums
- Enough bone in jaw
- Good overall health
- Non-smokers have best outcomes
- Controlled diabetes acceptable

**Care for Implants:**
- Brush twice daily
- Floss around implant
- Regular dental checkups
- Avoid chewing very hard objects`,
      keyTerms: [
        { term: 'implant', definition: 'A titanium post surgically placed in the jawbone to replace a tooth root' },
        { term: 'osseointegration', definition: 'The process of bone growing around and fusing with the implant' },
        { term: 'abutment', definition: 'The piece that connects the implant to the crown' },
        { term: 'crown', definition: 'The artificial tooth that attaches to the implant' },
      ],
      analogies: [
        'An implant is like an anchor in a wall - it provides a stable foundation for hanging something (the crown).',
        'Osseointegration is like a plant root growing into soil - the bone grows into the implant surface.',
      ],
      examples: [
        'After losing a front tooth, a patient gets an implant that looks completely natural.',
        'Someone missing all their teeth can get several implants to support a full set of fixed teeth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental implants are titanium fixtures that osseointegrate with alveolar bone to support prosthetic restorations. Success depends on patient selection, surgical technique, prosthetic design, and maintenance.',
      explanation: `## Implant Components

**The Fixture:**
- Titanium or titanium alloy
- Threaded or press-fit design
- Surface treatments enhance integration
- Various lengths and diameters

**Connection Types:**
| Connection | Description |
|------------|-------------|
| External hex | Original Branemark design |
| Internal hex | Better load distribution |
| Conical (Morse taper) | Excellent seal, stability |
| Platform switching | Reduced bone loss |

## Osseointegration

**Definition:** Direct structural and functional connection between bone and implant surface without intervening fibrous tissue.

**Timeline:**
- Initial stability: Mechanical (threads in bone)
- Healing: 6-12 weeks (biological integration)
- Maturation: 3-6 months (full loading capacity)

## Patient Selection

**Indications:**
- Single tooth replacement
- Multiple teeth replacement
- Full arch rehabilitation
- Removable denture support

**Contraindications:**
| Absolute | Relative |
|----------|----------|
| Active cancer treatment | Uncontrolled diabetes |
| Severe osteoporosis on IV bisphosphonates | Heavy smoking |
| Uncontrolled bleeding disorders | Limited bone volume |
| Severe immunosuppression | Poor oral hygiene |

## Surgical Protocol

**Pre-Operative:**
- Medical evaluation
- Radiographic assessment (panoramic, CBCT)
- Surgical guide fabrication
- Informed consent

**Procedure:**
1. Flap elevation or flapless approach
2. Osteotomy preparation (sequential drills)
3. Implant placement
4. Primary closure or healing abutment

**Healing Options:**
| Protocol | Timeline | Indication |
|----------|----------|------------|
| Submerged | 3-6 months covered | Standard |
| Non-submerged | Healing abutment exposed | Many cases |
| Immediate loading | Restoration same day | Select cases |

## Prosthetic Phase

**Impression Options:**
- Conventional (implant-level or abutment-level)
- Digital (intraoral scanning)

**Restoration Types:**
| Type | Use |
|------|-----|
| Single crown | Individual tooth |
| Fixed partial denture | Multiple adjacent teeth |
| Fixed full arch | Complete arch |
| Overdenture | Removable, implant-retained |

## Complications

| Complication | Cause | Management |
|--------------|-------|------------|
| Failure to integrate | Infection, overheating, loading | Removal, regraft |
| Peri-implantitis | Bacterial biofilm | Debridement, surgery |
| Screw loosening | Occlusal forces | Retorque, evaluate |
| Prosthetic fracture | Material fatigue | Repair, replace |

## Success Criteria

- Absence of mobility
- No pain or paresthesia
- No peri-implant radiolucency
- Bone loss <1mm first year, <0.2mm/year after
- Functional and aesthetic satisfaction`,
      keyTerms: [
        { term: 'osseointegration', definition: 'Direct bone-to-implant contact without fibrous tissue; coined by Branemark' },
        { term: 'primary stability', definition: 'Initial mechanical stability from implant threads engaging bone' },
        { term: 'peri-implantitis', definition: 'Inflammatory disease causing bone loss around implant' },
        { term: 'platform switching', definition: 'Smaller abutment on larger implant platform; reduces crestal bone loss' },
        { term: 'overdenture', definition: 'Removable prosthesis retained by implants' },
        { term: 'immediate loading', definition: 'Placing restoration within 48 hours of implant placement' },
      ],
      analogies: [
        'Osseointegration is like bone welding itself to the titanium surface.',
        'Primary stability is like a screw gripping wood - mechanical hold until biological bonding occurs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Implant success requires understanding of bone biology, biomechanics, surface science, and peri-implant tissue health. Treatment planning integrates prosthetic goals, anatomical considerations, and risk factor management.',
      explanation: `## Bone Biology

**Bone Response to Implant:**
| Phase | Timeline | Events |
|-------|----------|--------|
| Hemostasis | Minutes | Clot formation on surface |
| Inflammation | Days | Macrophage infiltration |
| Osteogenesis | Weeks | Osteoblast activity, woven bone |
| Remodeling | Months | Lamellar bone formation |

**Crestal Bone Changes:**
- Initial remodeling: 0.5-1.5mm loss first year
- Biological width establishment
- Platform switching reduces loss
- Implant-abutment microgap influence

## Surface Technology

**Surface Modifications:**
| Treatment | Effect |
|-----------|--------|
| Machined | Smooth, original Branemark |
| SLA (sandblasted, acid-etched) | Micro-roughness, enhanced integration |
| Anodized (TiUnite) | Porous oxide layer |
| Hydrophilic | Improved initial cell response |
| Nanotopography | Nanoscale features |

**Evidence:**
- Moderately rough surfaces outperform smooth
- Hydrophilic surfaces may accelerate healing
- No proven superiority among current systems

## Treatment Planning

**Prosthetically-Driven Planning:**
- Final restoration determines implant position
- 3D imaging mandatory for most cases
- Virtual planning software
- Surgical guides for precision

**Anatomical Considerations:**
| Region | Considerations |
|--------|----------------|
| Maxilla anterior | Esthetics, bone quality |
| Maxilla posterior | Sinus proximity, soft bone |
| Mandible anterior | Symphysis, dense bone |
| Mandible posterior | IAN canal, limited access |

**Bone Augmentation:**
| Procedure | Indication |
|-----------|------------|
| GBR | Horizontal deficiency |
| Sinus lift | Posterior maxilla |
| Block graft | Significant deficiency |
| Ridge split | Narrow ridge |

## Immediate vs. Delayed Placement

**Immediate (at extraction):**
- Reduced treatment time
- Tissue preservation
- Select case criteria needed

**Delayed (healed ridge):**
- More predictable
- Standard approach
- Bone grafting if needed

**Success Rates:**
- Both approaches: >95% in proper cases
- Immediate: Slightly higher esthetic risk

## Peri-Implant Disease

**Mucositis:**
- Inflammation without bone loss
- Reversible with treatment
- Prevalence: 50%+ of patients

**Peri-Implantitis:**
- Inflammation with bone loss
- Progressive if untreated
- Prevalence: 10-20%

**Risk Factors:**
| Factor | Impact |
|--------|--------|
| Smoking | Strong |
| Poor oral hygiene | Strong |
| History of periodontitis | Strong |
| Diabetes | Moderate |
| Excess cement | Local factor |

**Treatment:**
| Stage | Approach |
|-------|----------|
| Mucositis | Non-surgical debridement |
| Early peri-implantitis | Debridement + antimicrobials |
| Advanced | Surgical access, regeneration |
| Severe | Explantation |

## Biomechanics

**Load Distribution:**
- Occlusal forces transmitted to bone
- Stress concentration at crestal bone
- Implant number, position, angulation matter

**Prosthetic Considerations:**
| Factor | Principle |
|--------|-----------|
| Crown-implant ratio | Keep reasonable |
| Occlusion | Balanced contacts |
| Cantilevers | Minimize length |
| Splinting | May reduce stress |`,
      keyTerms: [
        { term: 'SLA surface', definition: 'Sandblasted, Large-grit, Acid-etched; common moderately rough surface' },
        { term: 'GBR', definition: 'Guided Bone Regeneration; membrane-protected bone grafting' },
        { term: 'prosthetically-driven planning', definition: 'Treatment planning where final restoration dictates implant positioning' },
        { term: 'biological width', definition: 'Tissue dimension establishing epithelial and connective tissue attachment around implant' },
        { term: 'mucositis', definition: 'Reversible inflammatory condition of peri-implant soft tissue without bone loss' },
        { term: 'crown-implant ratio', definition: 'Length of crown relative to implant length; affects biomechanics' },
      ],
      clinicalNotes: 'Prosthetically-driven planning with CBCT and surgical guides is standard of care. Moderately rough surfaces are well-supported by evidence. History of periodontitis is significant risk factor for peri-implantitis - emphasize maintenance. Platform switching may reduce crestal bone loss.',
    },
    4: {
      level: 4,
      summary: 'Advanced implantology integrates precision surgical techniques, complex bone regeneration, esthetic soft tissue management, and comprehensive peri-implant disease treatment based on molecular understanding of osseointegration and inflammation.',
      explanation: `## Osseointegration Biology

**Molecular Events:**
| Phase | Key Molecules |
|-------|---------------|
| Protein adsorption | Fibronectin, vitronectin |
| Cell attachment | Integrins |
| Osteoblast differentiation | BMPs, Runx2 |
| Mineralization | Osteocalcin, alkaline phosphatase |
| Remodeling | RANKL/OPG balance |

**Surface-Cell Interactions:**
- Topography affects cell morphology
- Surface chemistry influences protein adsorption
- Roughness promotes osteoblast differentiation
- Hydrophilicity enhances initial blood contact

## Advanced Surgical Techniques

**Guided Surgery:**
| Level | Features |
|-------|----------|
| Fully guided | Drilling + implant placement |
| Partially guided | Drilling only |
| Pilot drill only | Initial osteotomy |

**Benefits:**
- Improved accuracy (deviation <1mm typically)
- Flapless possible
- Reduced surgical time
- Immediate temporization facilitated

**Zygomatic Implants:**
- Severe maxillary atrophy
- Zygomatic bone anchorage
- Avoids extensive grafting
- Specialized training required

**All-on-4 Concept:**
- Full arch on 4 implants
- Tilted posterior implants
- Immediate loading
- Reduced treatment time and cost

## Complex Bone Regeneration

**Sinus Augmentation:**
| Approach | Indication |
|----------|------------|
| Lateral window | <5mm residual bone |
| Crestal (osteotome) | 5-8mm residual bone |
| Balloon technique | Transcrestal, atraumatic |

**Vertical Augmentation:**
| Technique | Complexity |
|-----------|------------|
| GBR | Moderate |
| Block grafts | High |
| Distraction osteogenesis | Highest |
| Short implants | Alternative approach |

**Short Implants (<8mm):**
- Avoid extensive grafting
- Good success rates in evidence
- Careful occlusal management needed

## Soft Tissue Management

**Esthetic Zone Principles:**
| Element | Goal |
|---------|------|
| Papilla | Fill embrasures |
| Buccal contour | Natural emergence |
| Pink esthetics | Match adjacent tissue |
| Gingival level | Harmonious with neighbors |

**Soft Tissue Augmentation:**
| Procedure | Indication |
|-----------|------------|
| Connective tissue graft | Contour, thickness |
| Free gingival graft | Keratinized tissue |
| Vestibuloplasty | Vestibule depth |
| Papilla reconstruction | Papilla fill |

## Peri-Implantitis Treatment

**Non-Surgical:**
- Mechanical debridement (titanium curettes, air polishing)
- Local antimicrobials (chlorhexidine, local antibiotics)
- Systemic antibiotics (adjunctive)
- Laser/PDT (variable evidence)

**Surgical:**
| Approach | Indication |
|----------|------------|
| Access flap | Debridement, decontamination |
| Resective | Pocket elimination |
| Regenerative | Bone fill potential |
| Combined | Tailored to defect |

**Surface Decontamination:**
- Mechanical (air polishing, curettes)
- Chemical (citric acid, hydrogen peroxide)
- Laser (Er:YAG shows promise)
- No consensus on optimal method

## Digital Workflow

**Components:**
| Element | Technology |
|---------|------------|
| Diagnosis | CBCT |
| Planning | Software (Blue Sky, coDiagnostiX) |
| Guide fabrication | 3D printing, milling |
| Impression | Intraoral scanning |
| Restoration | CAD/CAM |

**Accuracy:**
- Mean deviation: 1-2mm at apex
- Angular deviation: 2-4 degrees
- Guided surgery improves vs. freehand
- Full guidance most accurate`,
      keyTerms: [
        { term: 'guided surgery', definition: 'Computer-planned implant placement using surgical templates' },
        { term: 'All-on-4', definition: 'Protocol using 4 implants with tilted posteriors to support full arch' },
        { term: 'zygomatic implant', definition: 'Long implant anchored in zygomatic bone for atrophic maxilla' },
        { term: 'short implant', definition: 'Implant <8mm length; alternative to bone grafting' },
        { term: 'pink esthetics', definition: 'Soft tissue appearance including papilla, contour, and color' },
        { term: 'implant surface decontamination', definition: 'Removal of biofilm and preparation of surface for healing' },
      ],
      clinicalNotes: 'Guided surgery improves accuracy and predictability. Short implants are evidence-based alternative to extensive grafting. Peri-implantitis treatment is challenging - prevention through proper case selection and maintenance is key. All-on-4 is viable for edentulous patients but requires careful planning.',
    },
    5: {
      level: 5,
      summary: 'Contemporary implant research encompasses materials science, regenerative medicine, precision diagnostics, and personalized treatment protocols informed by genetic susceptibility, biomarker assessment, and advanced surface technologies.',
      explanation: `## Advanced Materials

**Novel Implant Materials:**
| Material | Properties | Status |
|----------|------------|--------|
| PEEK | Bone-similar modulus | Limited clinical use |
| Zirconia | Metal-free, esthetic | Growing evidence |
| Carbon fiber reinforced | Shock absorption | Research |
| Bioactive coatings | Osteoinductive | Emerging |

**Surface Innovations:**
| Technology | Mechanism |
|------------|-----------|
| Nanostructured | Enhanced cell response |
| Antibacterial (Ag, Zn) | Infection prevention |
| Drug-eluting | Local delivery |
| Biomimetic coatings | Growth factor presentation |

**Zirconia Implants:**
- Metal-free option
- Good osseointegration
- One-piece mostly (evolving)
- Evidence: Comparable short-term, limited long-term

## Regenerative Approaches

**Growth Factor Application:**
| Factor | Use |
|--------|-----|
| rhBMP-2 | Bone regeneration (sinus, GBR) |
| PDGF | Bone grafts (GEM 21S) |
| PRP/PRF | Adjunct healing |
| P-15 | Peptide-enhanced grafts |

**Stem Cell Therapies:**
- DPSCs for bone regeneration
- Adipose-derived stem cells
- Bone marrow aspirate concentrate
- Research/early clinical phase

**Tissue Engineering:**
\`\`\`
Cells (stem cells, osteoblasts)
    +
Scaffold (natural, synthetic, hybrid)
    +
Signals (growth factors, mechanical)
    =
Regenerated Tissue
\`\`\`

## Precision Diagnostics

**Risk Biomarkers:**
| Biomarker | Application |
|-----------|-------------|
| IL-1β | Peri-implant inflammation |
| MMP-8 | Active tissue destruction |
| Genetic testing | Susceptibility (IL-1 polymorphisms) |
| Microbiome analysis | Pathogen identification |

**Imaging Advances:**
- High-resolution CBCT
- Metal artifact reduction algorithms
- Volumetric change analysis
- AI-assisted interpretation

## Personalized Treatment

**Patient Factors:**
| Factor | Impact | Modification |
|--------|--------|--------------|
| Smoking | Failure risk 2x | Cessation, protocol adjustment |
| Diabetes | Healing delay | Glycemic control |
| Genetics | Susceptibility | Enhanced maintenance |
| Medications | Healing/bone | Coordination with physician |

**Precision Planning:**
\`\`\`
Assessment (systemic, local, prosthetic)
        ↓
Risk Stratification
        ↓
Personalized Protocol Selection
        ↓
Enhanced Monitoring (if high risk)
        ↓
Maintenance Program (individualized)
\`\`\`

## AI and Automation

**Applications:**
| Application | Status |
|-------------|--------|
| Treatment planning | Emerging |
| Bone assessment | Commercial products |
| Implant position suggestion | Emerging |
| Outcome prediction | Research |
| Quality control | Developing |

**Robotic Surgery:**
- Early development
- Force feedback
- Consistent technique
- High precision potential

## Future Directions

**Research Priorities:**
1. Antibacterial surfaces
2. Osseointegration enhancement
3. Peri-implantitis prevention and treatment
4. Personalized risk assessment
5. Long-term zirconia outcomes
6. AI treatment planning

**Clinical Translation:**
1. Evidence-based surface selection
2. Individualized maintenance protocols
3. Early peri-implant disease detection
4. Minimally invasive regeneration
5. Digital workflow integration`,
      keyTerms: [
        { term: 'zirconia implant', definition: 'Metal-free ceramic implant option with growing evidence base' },
        { term: 'biomimetic coating', definition: 'Surface treatment mimicking natural bone interface molecules' },
        { term: 'BAMC', definition: 'Bone Marrow Aspirate Concentrate; regenerative source of stem cells' },
        { term: 'metal artifact reduction', definition: 'CBCT algorithms reducing titanium implant scatter' },
        { term: 'IL-1 polymorphisms', definition: 'Genetic variants associated with inflammatory response and implant risk' },
        { term: 'AI treatment planning', definition: 'Machine learning-assisted implant planning and outcome prediction' },
      ],
      clinicalNotes: `Research translation priorities:
1. Zirconia implants are viable alternative with growing evidence
2. Antibacterial surfaces may reduce peri-implantitis
3. Short implants are well-supported - avoid unnecessary grafting
4. Genetic/biomarker testing may guide prevention intensity
5. AI-assisted planning approaching clinical utility
6. PRP/PRF have biological plausibility, moderate evidence
7. Prevention of peri-implantitis remains easier than treatment
8. Personalized maintenance based on risk factors is key`,
    },
  },

  media: [{ id: 'implant-components', type: 'diagram', filename: 'dental-implant-components.svg', title: 'Implant Components', description: 'Illustration of implant, abutment, and crown' }],
  citations: [{ id: 'misch-implants', type: 'textbook', title: 'Contemporary Implant Dentistry', authors: ['Misch, C.E.'], source: 'Elsevier' }],
  crossReferences: [{ targetId: 'procedure-tooth-extraction', targetType: 'topic', relationship: 'related', label: 'Tooth Extraction' }],
  tags: { systems: ['dental'], structures: ['teeth', 'alveolar bone'], topics: ['treatment', 'implants', 'surgery'], keywords: ['implant', 'osseointegration', 'restoration'], clinicalRelevance: 'high', examRelevance: { usmle: false, nbme: false, shelf: [] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dentalImplants;
