/**
 * Root Canal Therapy - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const rootCanalTherapy: EducationalContent = {
  id: 'procedure-root-canal-therapy',
  type: 'topic',
  name: 'Root Canal Therapy',
  alternateNames: ['Endodontic Treatment', 'Root Canal Treatment', 'RCT'],

  levels: {
    1: {
      level: 1,
      summary: 'Root canal therapy saves a tooth when the inside (pulp) becomes infected or damaged. The dentist removes the infected pulp, cleans the inside, and seals it to prevent future problems.',
      explanation: `**What Is a Root Canal?**

A root canal is a treatment to save a tooth when the inside part (called the pulp) is infected or damaged. The pulp contains nerves and blood vessels.

**Why Might You Need One?**
- Deep cavity that reached the pulp
- Cracked or chipped tooth
- Injury to the tooth
- Repeated dental work on the same tooth

**Warning Signs:**
- Severe toothache
- Sensitivity to hot or cold that lingers
- Swelling near the tooth
- Darkening of the tooth
- Pimple on the gum

**What Happens During Treatment:**

1. **Numbing**: Area is numbed so you feel no pain
2. **Access**: Small opening made in the tooth
3. **Cleaning**: Infected pulp is removed
4. **Shaping**: Canals are cleaned and shaped
5. **Filling**: Canals are sealed with rubber material
6. **Crown**: Usually a crown is placed to protect the tooth

**After the Procedure:**
- Some soreness is normal for a few days
- Take pain medication as directed
- Avoid chewing on that tooth until crown is placed
- The tooth can last a lifetime with proper care

**Common Myths:**
- Myth: Root canals are extremely painful
- Truth: With modern anesthesia, most feel little to no pain
- Myth: It is better to extract the tooth
- Truth: Saving your natural tooth is almost always better`,
      keyTerms: [
        { term: 'pulp', definition: 'The soft tissue inside the tooth containing nerves and blood vessels' },
        { term: 'root canal', definition: 'The channel inside the root of a tooth containing the pulp' },
        { term: 'endodontist', definition: 'A dentist who specializes in treating problems inside the tooth' },
        { term: 'abscess', definition: 'A pocket of pus caused by infection at the root tip' },
      ],
      analogies: [
        'A root canal is like removing the wiring from a wall to fix an electrical problem - the wall (tooth) stays, but the problematic part inside is fixed.',
        'The pulp is like the pith of an orange - removing it does not destroy the orange (tooth).',
      ],
      examples: [
        'A person with a deep cavity has an abscess develop. Root canal treatment removes the infection and saves the tooth.',
        'After a root canal and crown, the treated tooth can last for decades with proper care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endodontic therapy involves removing infected or necrotic pulp tissue, shaping and disinfecting the canal system, and obturation with biocompatible materials. Success depends on complete debridement, disinfection, and seal.',
      explanation: `## Indications

**Pulpal Diagnoses:**
| Diagnosis | Signs | Treatment |
|-----------|-------|-----------|
| Irreversible pulpitis | Spontaneous pain, prolonged response to stimuli | RCT or extraction |
| Pulp necrosis | No response to pulp tests, periapical pathology | RCT or extraction |
| Previously treated | Persistent/recurrent symptoms | Retreatment |

**Periapical Diagnoses:**
- Symptomatic apical periodontitis
- Asymptomatic apical periodontitis
- Acute apical abscess
- Chronic apical abscess

## Treatment Steps

**1. Access Preparation:**
- Remove caries and defective restorations
- Create straight-line access to canals
- Locate all canal orifices

**2. Working Length Determination:**
- Electronic apex locator (primary method)
- Radiographic confirmation
- Terminate 0.5-1 mm from radiographic apex

**3. Canal Preparation:**
- Remove pulp tissue
- Shape canal for obturation
- Hand files and/or rotary instruments
- Crown-down or step-back techniques

**4. Irrigation:**
| Irrigant | Action | Concentration |
|----------|--------|---------------|
| NaOCl | Antimicrobial, tissue dissolvent | 1-6% |
| EDTA | Smear layer removal | 17% |
| CHX | Antimicrobial | 2% |
| Saline | Final rinse | 0.9% |

**5. Obturation:**
- Gutta-percha (primary material)
- Sealer (fills gaps)
- Cold lateral condensation or warm vertical techniques
- Apical seal is critical

**6. Coronal Restoration:**
- Immediate core buildup
- Crown usually required (posterior teeth)
- Prevents coronal leakage and fracture

## Prognosis

**Success Rates:**
- Initial treatment: 85-95%
- Retreatment: 60-80%
- Factors: Periapical status, canal anatomy, restoration

**Failure Signs:**
- Persistent symptoms
- Periapical radiolucency persisting or enlarging
- Root resorption
- Perforation

## Complications

| Complication | Cause | Management |
|--------------|-------|------------|
| Separated instrument | Stress, cyclic fatigue | Bypass, retrieve, or leave |
| Perforation | Procedural error | MTA repair |
| Sodium hypochlorite accident | Extrusion | Immediate management |
| Post-op pain | Extrusion, missed canal | Medication, reassurance |`,
      keyTerms: [
        { term: 'irreversible pulpitis', definition: 'Pulp inflammation that will not resolve; requires root canal or extraction' },
        { term: 'apex locator', definition: 'Electronic device to determine working length by measuring impedance' },
        { term: 'gutta-percha', definition: 'Rubber-like material used to fill root canals' },
        { term: 'obturation', definition: 'Filling and sealing of the cleaned root canal system' },
        { term: 'NaOCl', definition: 'Sodium hypochlorite; primary endodontic irrigant with antimicrobial and tissue-dissolving properties' },
      ],
      analogies: [
        'Shaping the canal is like preparing a tunnel - it must be wide enough and the right shape for the filling to fit properly.',
        'Obturation is like filling a pipe with caulk - no gaps can remain for bacteria to survive.',
      ],
    },
    3: {
      level: 3,
      summary: 'Endodontic success requires understanding pulp pathobiology, root canal anatomy, chemo-mechanical debridement principles, and biofilm elimination strategies. Contemporary techniques employ advanced instrumentation, imaging, and bioceramic materials.',
      explanation: `## Pulp Pathobiology

**Inflammatory Response:**
- Bacterial invasion triggers immune response
- Limited blood supply and rigid walls
- Pressure increase causes ischemia
- Progression to necrosis

**Microbiological Factors:**
| Phase | Dominant Flora |
|-------|----------------|
| Initial infection | Facultative gram-positive |
| Established | Mixed, anaerobic predominance |
| Chronic | Anaerobes: Fusobacterium, Porphyromonas |
| Failed RCT | Enterococcus faecalis common |

## Root Canal Anatomy

**Anatomical Considerations:**
- Canal configuration variations (Vertucci classification)
- Lateral canals and isthmuses
- Apical ramifications
- C-shaped canals

**Challenging Anatomy:**
| Tooth | Common Complexity |
|-------|------------------|
| Maxillary molar | MB2 canal (60-90%) |
| Mandibular molar | Middle mesial canal |
| Lower premolars | Two canals (25%) |
| Lower incisors | Two canals (40%) |

## Chemo-Mechanical Debridement

**Instrumentation Principles:**
- Crown-down: Coronal enlargement first
- Maintain apical patency
- Adequate taper for irrigation
- Preserve dentin thickness

**Rotary/Reciprocating Systems:**
| System Type | Examples | Advantage |
|-------------|----------|-----------|
| Rotary NiTi | ProTaper, Profile | Speed, shaping |
| Reciprocating | WaveOne, Reciproc | Single file efficiency |
| Heat-treated | Vortex Blue, ProTaper Gold | Increased flexibility |

**Irrigation Protocol:**
1. 1-6% NaOCl (copious, heated preferred)
2. Agitation (sonic, ultrasonic, PUI)
3. 17% EDTA (1-2 min final rinse)
4. Final NaOCl flush
5. Dry with paper points

**Biofilm Elimination:**
- Biofilm resistant to irrigants
- Agitation enhances penetration
- Interappointment Ca(OH)2 for persistent infection
- Complete debridement rarely achievable

## Obturation Science

**Materials:**
| Material | Properties | Use |
|----------|------------|-----|
| Gutta-percha | Biocompatible, compactable | Core filling |
| Zinc oxide-eugenol | Antimicrobial | Traditional sealer |
| Resin sealers | Adhesion, radiopacity | Popular choice |
| Bioceramic | Bioactive, hydrophilic | Modern sealers |

**Bioceramic Sealers:**
- Calcium silicate based
- Biocompatible, bioactive
- Hydrophilic (sets in moisture)
- Antimicrobial
- Bond to dentin

## Advanced Diagnostics

**CBCT Applications:**
- Complex anatomy visualization
- Periapical lesion detection
- Treatment planning
- Outcome assessment

**Diagnostic Tests:**
| Test | Assesses | Interpretation |
|------|----------|----------------|
| Cold test | Pulp vitality | No response = necrosis |
| EPT | Nerve function | Threshold values |
| Percussion | Periapical inflammation | Pain = periodontitis |
| Palpation | Periapical spread | Swelling/tenderness |

## Outcomes

**Healing Assessment:**
- Clinical: Absence of signs/symptoms
- Radiographic: Resolution of periapical radiolucency
- Timeline: 6-12 months for assessment

**Toronto Study Findings:**
| Factor | Impact on Success |
|--------|-------------------|
| Preoperative periapical lesion | Decreases success |
| Working length accuracy | Critical |
| Density of obturation | Important |
| Coronal restoration | Significant |

**Surgical Endodontics:**
- Indicated for failed retreatment
- Apicoectomy and retrofill
- Microsurgical technique: 90%+ success
- MTA or bioceramic retrofill`,
      keyTerms: [
        { term: 'MB2 canal', definition: 'Second mesiobuccal canal in maxillary molars; frequently missed' },
        { term: 'PUI', definition: 'Passive Ultrasonic Irrigation; activates irrigant for better biofilm disruption' },
        { term: 'bioceramic', definition: 'Calcium silicate-based bioactive material for sealers and repair' },
        { term: 'Vertucci classification', definition: 'Classification of root canal configurations (Types I-VIII)' },
        { term: 'NiTi', definition: 'Nickel-titanium alloy with superelasticity for curved canal instrumentation' },
        { term: 'apical patency', definition: 'Maintaining a clear channel to the apical foramen during preparation' },
      ],
      clinicalNotes: 'MB2 canal in maxillary molars is present in 60-90% of cases - always look for it. CBCT is indicated for complex anatomy or diagnostic uncertainty. Bioceramic sealers show promising outcomes and simplify technique. Coronal restoration quality is as important as endodontic treatment quality for long-term success.',
    },
    4: {
      level: 4,
      summary: 'Advanced endodontics integrates molecular understanding of periapical disease, precision instrumentation, enhanced imaging, and regenerative approaches for comprehensive management of complex endodontic cases and vital pulp preservation.',
      explanation: `## Periapical Disease Pathobiology

**Immune Mechanisms:**
| Pathway | Mediators | Effect |
|---------|-----------|--------|
| Innate | TLRs, cytokines | Initial response |
| Adaptive | T/B cells | Chronic lesion |
| RANKL/OPG | Osteoclast activation | Bone resorption |
| MMPs | Matrix degradation | Tissue destruction |

**Persistent Infection:**
- E. faecalis biofilm resistance
- Anatomical complexity
- Dentinal tubule penetration
- Nutrient sources from serum

## Precision Instrumentation

**Heat-Treated NiTi:**
- Modified crystalline structure
- Increased flexibility
- Improved fatigue resistance
- Pre-bent curve retention

**Single-File Systems:**
| System | Motion | Advantages |
|--------|--------|------------|
| WaveOne Gold | Reciprocating | Simple, reduced cross-contamination |
| Reciproc Blue | Reciprocating | Heat-treated flexibility |
| One Shape | Rotation | Variable cross-section |

**Adaptive Motion:**
- System senses stress
- Adjusts rotation/reciprocation
- Reduces file separation risk

## Enhanced Imaging

**CBCT Optimization:**
| Indication | Field Size | Benefit |
|------------|------------|---------|
| Periapical diagnosis | Limited | High resolution |
| Complex anatomy | Small | Canal detection |
| Surgical planning | Medium | 3D relationships |
| Trauma | Variable | Fracture detection |

**Intraoperative Imaging:**
- Limited-volume CBCT during treatment
- Real-time guidance
- Reducing missed anatomy

## Vital Pulp Therapy

**Paradigm Shift:**
- Preserve vital tissue when possible
- Regenerative potential of pulp
- Avoid complete pulp removal

**Procedures:**
| Procedure | Indication | Material |
|-----------|------------|----------|
| Indirect pulp cap | Deep caries, no exposure | Bioactive liner |
| Direct pulp cap | Small, clean exposure | MTA, Biodentine |
| Pulpotomy | Larger exposure, healthy pulp | Calcium silicate |

**Evidence:**
- Mature teeth: 80-95% success with proper case selection
- Immature teeth: Regeneration possible
- Biological approach emphasized

## Regenerative Endodontics

**Revascularization/Revitalization:**
- Necrotic immature permanent teeth
- Disinfection + blood clot scaffold
- Continued root development
- AAE/ESE protocols

**Protocol:**
1. Access and disinfection
2. Triple antibiotic paste (or Ca(OH)2)
3. Blood clot induction
4. MTA barrier
5. Coronal restoration

**Outcomes:**
- Root maturation: 85%+
- Apical closure: High
- True pulp regeneration: Debated (histologically cementum-like)

**Future Directions:**
- Stem cell therapies
- Growth factor delivery
- Scaffold-based regeneration

## Retreatment Considerations

**Indications:**
- Persistent symptoms
- Radiographic failure
- Missed canals
- Coronal leakage

**Challenges:**
| Challenge | Strategy |
|-----------|----------|
| Gutta-percha removal | Heat, solvents, rotary |
| Post removal | Ultrasonic, post pullers |
| Separated instruments | Bypass, GG files, ultrasonic |
| Ledges | Pre-curved files, EDTA |

**Surgical Endodontics:**
- When retreatment not feasible or failed
- Microsurgical techniques
- Ultrasonic retroprep
- Bioceramic retrofill
- Success: 90%+

## Microsurgery Excellence

**Principles:**
- Magnification (microscope)
- Microsurgical instruments
- Ultrasonic retropreps
- Bioactive materials

**Root-End Resection:**
- 3mm minimum
- Perpendicular to long axis
- Methylene blue for crack detection

**Outcomes Improvement:**
- Traditional surgery: 60%
- Microsurgery: 90%+
- Key advances: magnification, ultrasonics, materials`,
      keyTerms: [
        { term: 'adaptive motion', definition: 'Instrumentation system adjusting between rotation and reciprocation based on stress' },
        { term: 'revascularization', definition: 'Regenerative procedure for necrotic immature teeth using blood clot scaffold' },
        { term: 'triple antibiotic paste', definition: 'Ciprofloxacin, metronidazole, minocycline mixture for disinfection in regenerative procedures' },
        { term: 'Biodentine', definition: 'Calcium silicate cement for pulp capping and perforation repair' },
        { term: 'retroprep', definition: 'Root-end preparation during apicoectomy using ultrasonic tips' },
        { term: 'vital pulp therapy', definition: 'Procedures preserving pulp vitality when possible' },
      ],
      clinicalNotes: 'Vital pulp therapy is increasingly evidence-based for mature teeth with proper case selection. Regenerative endodontics is standard of care for necrotic immature permanent teeth. Microsurgical technique dramatically improves apicoectomy outcomes. Heat-treated NiTi reduces file separation in complex anatomy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endodontic research encompasses pulp biology, regenerative medicine, precision diagnostics, and targeted antimicrobial strategies to develop personalized approaches for pulp preservation, tissue regeneration, and optimal treatment outcomes.',
      explanation: `## Molecular Pulp Biology

**Stem Cell Populations:**
| Cell Type | Location | Potential |
|-----------|----------|-----------|
| DPSCs | Pulp | Odontoblast differentiation |
| SCAPs | Apical papilla | Root development |
| PDLSCs | Periodontal ligament | Periodontium regeneration |

**Signaling Pathways:**
- TGF-β/BMP signaling in dentin formation
- Wnt pathway in pulp regeneration
- NF-κB in inflammatory response
- VEGF in angiogenesis

**Dentin-Pulp Complex:**
- Odontoblast response to injury
- Tertiary dentin formation
- Innate immune function
- Regenerative capacity

## Precision Diagnostics

**Biomarker Development:**
| Biomarker | Source | Application |
|-----------|--------|-------------|
| MMP-9 | GCF | Active inflammation |
| IL-1β | Pulp | Pulpitis severity |
| Dental pulp markers | Blood/saliva | Future diagnosis |

**Advanced Imaging:**
- Optical coherence tomography (OCT)
- Photoacoustic imaging
- Molecular imaging (research)

**Pulp Testing Evolution:**
- Laser Doppler flowmetry
- Pulse oximetry
- Temperature-modulated thermal analysis

## Targeted Antimicrobials

**Biofilm-Focused Strategies:**
| Approach | Target | Status |
|----------|--------|--------|
| Nanoparticles | Enhanced penetration | Research/emerging |
| Photodynamic therapy | Light-activated killing | Clinical use |
| Bacteriophages | Specific pathogens | Research |
| Antimicrobial peptides | Broad-spectrum | Research |

**Photodynamic Therapy (PDT):**
- Photosensitizer + light
- ROS generation
- Biofilm disruption
- Adjunct to conventional treatment

**Laser Applications:**
| Laser Type | Application | Evidence |
|------------|-------------|----------|
| Er:YAG | Smear layer removal | Moderate |
| Nd:YAG | Antimicrobial | Limited |
| Diode | Activation, antimicrobial | Growing |

## Regenerative Frontiers

**Tissue Engineering Triad:**
1. Stem cells (DPSCs, SCAPs)
2. Scaffolds (natural, synthetic)
3. Growth factors (TGF-β, BMPs, VEGF)

**Clinical Translation Challenges:**
- Cell sourcing and banking
- Scaffold design optimization
- Regulatory pathway
- Cost-effectiveness

**Whole Pulp Regeneration:**
- Current "revascularization" produces cementum-like tissue
- True pulp regeneration goal
- Cell homing vs. transplantation approaches
- Bioactive scaffold research

## AI and Automation

**Applications:**
| Application | Status | Potential |
|-------------|--------|-----------|
| Caries detection | Emerging | Early intervention |
| Periapical diagnosis | Research | Consistency |
| Treatment planning | Developing | Optimization |
| Prognosis prediction | Research | Personalization |

**Robotic Endodontics:**
- Automated canal preparation
- Consistent instrumentation
- Reduced operator variability
- Early development

## Personalized Treatment

**Patient Factors:**
| Factor | Impact | Consideration |
|--------|--------|---------------|
| Systemic health | Healing, infection | Modified protocols |
| Genetics | Pulp response | Future: genetic testing |
| Age | Regenerative capacity | Treatment selection |
| Tooth factors | Anatomy, prognosis | Approach choice |

**Decision Framework:**
\`\`\`
Assessment (pulpal status, anatomy, patient factors)
        ↓
Preservation Possible? → YES → Vital pulp therapy
        ↓ NO
Complete RCT
        ↓
Long-term Monitoring
\`\`\`

## Clinical Translation

**Current Evidence Application:**
1. Vital pulp therapy for appropriate cases
2. Regenerative procedures for immature necrotic teeth
3. CBCT for complex anatomy
4. Bioceramic materials for sealing/repair
5. Microsurgical technique for surgery

**Future Directions:**
1. True pulp regeneration
2. Precision diagnostics
3. Targeted antimicrobials
4. AI-assisted treatment
5. Personalized approaches`,
      keyTerms: [
        { term: 'DPSCs', definition: 'Dental Pulp Stem Cells; multipotent cells with regenerative potential' },
        { term: 'SCAPs', definition: 'Stem Cells from Apical Papilla; involved in root development and regeneration' },
        { term: 'photodynamic therapy', definition: 'Light-activated antimicrobial treatment using photosensitizers' },
        { term: 'cell homing', definition: 'Regenerative approach using endogenous cells recruited to the site' },
        { term: 'OCT', definition: 'Optical Coherence Tomography; high-resolution cross-sectional imaging' },
        { term: 'tissue engineering triad', definition: 'Cells, scaffolds, and growth factors for regeneration' },
      ],
      clinicalNotes: `Research translation priorities:
1. Vital pulp therapy with calcium silicates should be first consideration when appropriate
2. Regenerative endodontics is standard for necrotic immature teeth
3. PDT may enhance disinfection but is adjunctive, not replacement for standard protocols
4. True pulp regeneration remains elusive - current procedures produce cementum-like tissue
5. AI diagnostics approaching clinical integration for imaging interpretation
6. Personalized treatment based on host factors is future direction
7. Prevention and early intervention preferred over extensive treatment`,
    },
  },

  media: [
    {
      id: 'rct-steps',
      type: 'diagram',
      filename: 'root-canal-procedure-steps.svg',
      title: 'Root Canal Treatment Steps',
      description: 'Illustration of access, cleaning, shaping, and obturation',
    },
  ],

  citations: [
    {
      id: 'cohen-pathways',
      type: 'textbook',
      title: 'Cohen\'s Pathways of the Pulp',
      authors: ['Hargreaves, K.M.', 'Berman, L.H.'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
    { targetId: 'topic-dental-emergencies', targetType: 'topic', relationship: 'see-also', label: 'Dental Emergencies' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['teeth', 'pulp', 'root canal'],
    topics: ['treatment', 'endodontics'],
    keywords: ['root canal', 'endodontic', 'pulpitis', 'abscess'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rootCanalTherapy;
