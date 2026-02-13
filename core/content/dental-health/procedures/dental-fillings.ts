/**
 * Dental Fillings - Comprehensive Educational Content
 *
 * Covers restorative materials, cavity preparation, and
 * filling procedures for treating dental caries.
 */

import { EducationalContent } from '../../types';

export const dentalFillings: EducationalContent = {
  id: 'procedure-dental-fillings',
  type: 'topic',
  name: 'Dental Fillings',
  nameEs: 'Empastes Dentales',
  alternateNames: ['Dental Restorations', 'Tooth Fillings', 'Cavity Fillings'],

  levels: {
    1: {
      level: 1,
      summary: 'Dental fillings repair teeth damaged by cavities. The dentist removes the decayed part and fills the hole with special material to restore the tooth.',
      explanation: `**What Is a Dental Filling?**

A filling is a way to fix a tooth that has been damaged by a cavity. The dentist removes the decayed part and fills the hole with a special material.

**Why Are Fillings Needed?**
- To stop cavity from getting bigger
- To prevent pain and infection
- To restore the tooth's shape and function
- To make chewing easier

**Types of Filling Materials:**

**1. Silver Fillings (Amalgam)**
- Silver-gray color
- Very strong and long-lasting
- Used for back teeth
- Less expensive

**2. Tooth-Colored Fillings (Composite)**
- Matches your tooth color
- Bonds directly to tooth
- Good for visible areas
- Looks natural

**3. Other Types:**
- Gold fillings (very durable)
- Ceramic/porcelain (tooth-colored, strong)
- Glass ionomer (releases fluoride)

**What Happens During a Filling:**

1. **Numbing**: The dentist numbs the area so you do not feel pain
2. **Removing decay**: Using a drill, the decay is removed
3. **Preparing the tooth**: The hole is shaped and cleaned
4. **Placing the filling**: Material is put in the hole
5. **Shaping and polishing**: The filling is shaped to fit your bite

**After Getting a Filling:**
- Numbness wears off in a few hours
- Some sensitivity is normal for a few days
- Avoid very hot or cold foods at first
- Brush and floss normally

**How Long Do Fillings Last?**
- Amalgam: 10-15 years or more
- Composite: 5-10 years
- Depends on size, location, and care`,
      keyTerms: [
        { term: 'filling', definition: 'Material used to repair a tooth after decay is removed' },
        { term: 'amalgam', definition: 'Silver-colored filling made of metal alloys' },
        { term: 'composite', definition: 'Tooth-colored filling material made of resin and glass particles' },
        { term: 'cavity preparation', definition: 'The process of removing decay and shaping the hole for a filling' },
        { term: 'local anesthesia', definition: 'Medicine that numbs a small area so you do not feel pain' },
      ],
      analogies: [
        'Getting a filling is like patching a hole in a wall - you remove the damaged part and fill it with new material.',
        'Composite fillings work like glue - they bond directly to your tooth for a tight seal.',
        'A filling protects your tooth like a patch on a tire - it seals the hole to prevent further damage.',
      ],
      examples: [
        'A small cavity on a back molar is filled with amalgam because it is strong for chewing.',
        'A cavity on a front tooth is filled with composite so it blends in and is not visible when you smile.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental restorations replace tooth structure lost to caries using various materials including amalgam, composite resin, glass ionomer, and ceramics. Material selection depends on cavity location, size, esthetics, and patient factors.',
      explanation: `## Restorative Materials

**Dental Amalgam:**
- Composition: Mercury, silver, tin, copper
- Properties: High strength, longevity, self-sealing
- Indications: Posterior stress-bearing restorations
- Advantages: Durable, less technique-sensitive, economical
- Disadvantages: Non-esthetic, mercury concerns (though safe per evidence)

**Composite Resin:**
- Composition: Bis-GMA or UDMA resin, filler particles (silica, glass)
- Properties: Esthetic, bonds to tooth, moderate strength
- Indications: Anterior and posterior restorations
- Advantages: Tooth-colored, conservative preparation, bonded
- Disadvantages: Technique-sensitive, polymerization shrinkage, wear

**Glass Ionomer:**
- Composition: Fluoroaluminosilicate glass, polyacrylic acid
- Properties: Chemical bond to tooth, fluoride release
- Indications: Non-stress areas, cervical lesions, pediatric
- Advantages: Fluoride release, less moisture-sensitive
- Disadvantages: Lower strength, wear susceptibility

**Resin-Modified Glass Ionomer (RMGI):**
- Hybrid of glass ionomer and composite
- Better strength than conventional GI
- Fluoride release maintained
- Good for Class V, liners

## Cavity Classification (G.V. Black)

| Class | Location | Common Material |
|-------|----------|-----------------|
| I | Occlusal pits and fissures | Amalgam or composite |
| II | Proximal of posterior teeth | Amalgam or composite |
| III | Proximal of anterior (not incisal) | Composite |
| IV | Proximal of anterior (incisal involved) | Composite |
| V | Cervical third of any tooth | GI, RMGI, or composite |
| VI | Cusp tips or incisal edges | Composite |

## Procedure Steps

**1. Anesthesia:**
- Local anesthesia for pain control
- Topical anesthetic first
- Infiltration or block technique

**2. Isolation:**
- Rubber dam (ideal)
- Cotton rolls and suction
- Keeps field dry and protected

**3. Cavity Preparation:**
- Remove carious dentin
- Shape for retention (amalgam) or bonding (composite)
- Preserve healthy tooth structure

**4. Restoration Placement:**

*For Amalgam:*
- Cavity varnish or liner if needed
- Condense amalgam into cavity
- Carve to restore anatomy
- Polish after setting (24 hours)

*For Composite:*
- Etch with phosphoric acid (15-20 sec)
- Apply bonding agent
- Place composite in increments
- Light cure each layer
- Shape and polish

**5. Occlusal Adjustment:**
- Check bite with articulating paper
- Adjust high spots
- Ensure comfortable occlusion

## Complications

| Complication | Cause | Management |
|--------------|-------|------------|
| Sensitivity | Pulp irritation, high restoration | Monitor, adjust occlusion |
| Secondary caries | Marginal breakdown | Replace restoration |
| Fracture | Occlusal forces, large restoration | Repair or replace |
| Pulpitis | Deep cavity, thermal injury | Monitor or RCT |

## Material Selection Factors

- Cavity size and location
- Esthetic requirements
- Patient factors (bruxism, hygiene)
- Cost considerations
- Moisture control ability
- Longevity expectations`,
      keyTerms: [
        { term: 'Bis-GMA', definition: 'Bisphenol A-glycidyl methacrylate; common composite resin monomer' },
        { term: 'polymerization shrinkage', definition: 'Contraction of composite during curing; can cause gaps' },
        { term: 'bonding agent', definition: 'Adhesive that creates bond between tooth and composite' },
        { term: 'etching', definition: 'Acid treatment to create microscopic roughness for bonding' },
        { term: 'rubber dam', definition: 'Latex sheet isolating teeth for dry field and protection' },
        { term: 'condensation', definition: 'Compacting amalgam into the cavity preparation' },
      ],
      analogies: [
        'Etching creates a surface like Velcro - the tiny holes let the bonding agent grip the tooth.',
        'Polymerization shrinkage is like a sweater shrinking in the dryer - the material contracts as it hardens.',
        'Using a rubber dam is like putting a raincoat on the tooth - it keeps everything dry and clean.',
      ],
    },
    3: {
      level: 3,
      summary: 'Modern restorative dentistry balances material science, adhesive technology, and minimally invasive principles. Understanding polymerization dynamics, bonding mechanisms, and longevity factors guides evidence-based material selection and technique optimization.',
      explanation: `## Material Science

**Composite Resin Chemistry:**

*Monomer Systems:*
| Monomer | Properties | Use |
|---------|------------|-----|
| Bis-GMA | High viscosity, low shrinkage | Universal composites |
| UDMA | Lower viscosity, more flexible | Flowable, bulk-fill |
| TEGDMA | Diluent, increases shrinkage | Viscosity modifier |
| Bis-EMA | Lower shrinkage | Low-shrink composites |

*Filler Technology:*
- Macrofill (10-100 μm): Strong but rough
- Microfill (0.04-0.4 μm): Polishable, weaker
- Hybrid (mixed sizes): Balance of properties
- Nanofill (5-100 nm): Best polish, good strength

*Polymerization:*
- Light-initiated (camphorquinone + amine)
- Blue light (470 nm peak)
- Volumetric shrinkage: 2-6%
- Shrinkage stress: Gap formation risk

**Amalgam Metallurgy:**

*Composition:*
- Silver (40-70%): Strength, expansion
- Tin (12-30%): Workability
- Copper (12-30%): Corrosion resistance
- Mercury (43-54%): Matrix formation
- Zinc (0-2%): Casting aid

*Setting Reactions:*
- Mercury reacts with Ag-Sn particles
- Forms Ag2Hg3 (gamma-1) and Sn7-8Hg (gamma-2)
- High-copper amalgams eliminate weak gamma-2 phase

## Adhesive Dentistry

**Enamel Bonding:**

*Mechanism:*
1. Acid etching (37% phosphoric acid, 15-30 sec)
2. Creates enamel prism pattern
3. Resin infiltrates microscopic spaces
4. Micromechanical retention
5. Bond strength: 20-50 MPa

**Dentin Bonding:**

*Challenges:*
- Moist substrate
- Tubular structure
- Smear layer
- Collagen matrix

*Bonding Strategies:*
| System | Mechanism | Steps |
|--------|-----------|-------|
| Etch-and-rinse (3-step) | Remove smear layer, prime, bond | Etch, prime, adhesive |
| Etch-and-rinse (2-step) | Remove smear layer, combined prime/bond | Etch, adhesive |
| Self-etch (2-step) | Modify smear layer, prime, bond | Self-etching primer, adhesive |
| Self-etch (1-step) | All-in-one | Single application |
| Universal | Can be used either way | Flexible application |

*Dentin Bond Strength:* 15-35 MPa

**Hybrid Layer:**
- Resin-infiltrated demineralized dentin
- Critical for dentin bonding
- 3-5 μm thick
- Vulnerable to degradation over time

## Minimally Invasive Principles

**Conservative Preparation:**

*Traditional vs. Minimally Invasive:*
| Traditional | Minimally Invasive |
|-------------|-------------------|
| Extension for prevention | Preserve sound structure |
| Resistance/retention form | Adhesive retention |
| Remove all affected dentin | Selective removal |
| Amalgam design | Composite-friendly |

**Selective Caries Removal:**
- Peripheral: Complete removal
- Pulpal: Leave affected (remineralizable) dentin
- Reduces pulp exposure risk
- Evidence-based approach

**Air Abrasion:**
- Aluminum oxide particles
- No vibration, minimal anesthesia
- Precise, conservative preparation
- Limited to small lesions

## Clinical Technique Optimization

**Reducing Shrinkage Stress:**

*Strategies:*
1. Incremental layering (2mm increments)
2. Soft-start polymerization
3. Low-shrinkage composites
4. Bulk-fill materials (carefully selected)
5. Proper C-factor management

*C-Factor:*
- Ratio of bonded to unbonded surfaces
- Higher C-factor = more stress
- Box (Class I): High C-factor
- Increment to reduce

**Curing Considerations:**

| Factor | Effect | Optimization |
|--------|--------|--------------|
| Intensity | Higher = faster cure | Match to material |
| Time | Longer = better conversion | Follow manufacturer |
| Distance | Closer = more effective | Within 1mm |
| Angle | Direct = maximum effect | Perpendicular |

## Longevity Factors

**Survival Rates (Meta-analyses):**

| Material | Annual Failure Rate | 10-Year Survival |
|----------|--------------------| ----------------|
| Amalgam | 1-3% | 70-90% |
| Composite (posterior) | 1.5-4% | 60-80% |
| GI | 3-5% | 50-70% |

**Failure Modes:**

| Failure | Contributing Factors |
|---------|---------------------|
| Secondary caries | Marginal gaps, patient factors |
| Fracture | Occlusal forces, restoration size |
| Wear | Bruxism, opposing material |
| Marginal degradation | Technique, material |
| Bulk fracture | Thermal cycling, fatigue |

**Predictors of Success:**
- Operator skill
- Isolation quality
- Patient factors (hygiene, diet)
- Restoration size
- Material selection appropriateness`,
      keyTerms: [
        { term: 'hybrid layer', definition: 'Resin-infiltrated demineralized dentin; interface for dentin bonding' },
        { term: 'C-factor', definition: 'Configuration factor; ratio of bonded to unbonded surfaces affecting shrinkage stress' },
        { term: 'nanofill', definition: 'Composite containing nanoscale filler particles for optimal polishability and strength' },
        { term: 'self-etch', definition: 'Adhesive system that modifies rather than removes smear layer; simplified technique' },
        { term: 'gamma-2 phase', definition: 'Weak, corrosion-prone phase in low-copper amalgams; eliminated in high-copper formulations' },
        { term: 'selective caries removal', definition: 'Evidence-based approach leaving remineralizable dentin over pulp' },
      ],
      clinicalNotes: 'Selective caries removal near the pulp reduces exposure risk without compromising outcomes. Universal adhesives offer flexibility but technique still matters. Bulk-fill composites simplify placement but are not appropriate for all situations. C-factor management through incremental placement remains important for stress reduction. Annual failure rates for posterior composites approach amalgam with proper technique.',
    },
    4: {
      level: 4,
      summary: 'Advanced restorative dentistry integrates biomimetic principles, novel material formulations, precision bonding protocols, and understanding of restoration-tooth complex biomechanics to optimize clinical outcomes and longevity.',
      explanation: `## Biomimetic Approach

**Principles:**
- Restore natural tooth structure and function
- Stress distribution mimicking intact tooth
- Bioactive materials promoting healing
- Preservation of pulp vitality

**Biomechanical Considerations:**

*Stress Distribution:*
| Component | Elastic Modulus (GPa) | Implication |
|-----------|---------------------|-------------|
| Enamel | 80-90 | High stiffness |
| Dentin | 15-25 | Flexible support |
| Composite | 5-20 | Variable, may differ |
| Amalgam | 30-60 | Stiffer than dentin |
| GI | 10-15 | Close to dentin |

*Cuspal Deflection:*
- Polymerization shrinkage stresses cusps
- Large MOD restorations at risk
- Overlay/onlay may be preferable
- Fiber reinforcement options

**Dentin Replacement Strategy:**
- Base layer mimicking dentin properties
- Surface layer mimicking enamel
- Flowable composite as "dentin"
- Hybrid composite as "enamel"

## Advanced Materials

**Bulk-Fill Composites:**

*Innovations:*
- Increased translucency for light penetration
- Stress-relieving monomers
- Polymerization modulators
- 4-5 mm depth of cure claimed

*Types:*
| Type | Viscosity | Use | Capping Required |
|------|-----------|-----|------------------|
| Flowable bulk-fill | Low | Base layer | Yes |
| Sculptable bulk-fill | Packable | Full restoration | Depends on product |
| Sonic-activated | Flowable when vibrated | Adaptation | Yes |

*Evidence:*
- Short-term: Comparable to conventional
- Long-term data still accumulating
- Technique advantages acknowledged

**Bioactive Materials:**

*Bioactive Glass:*
- Releases calcium, phosphate, silica
- Promotes remineralization
- Used in composites and cements
- Activa, Beautifil II

*Self-Healing Composites:*
- Microcapsules with healing agents
- Crack triggers release
- Seal microfractures
- Research phase

**CAD/CAM Materials:**

*Ceramic Blocks:*
| Type | Composition | Properties |
|------|-------------|------------|
| Feldspathic | Silica-based glass | Esthetic, bondable |
| Leucite-reinforced | Glass-ceramic | Moderate strength |
| Lithium disilicate | Glass-ceramic | High strength |
| Zirconia | Polycrystalline | Highest strength |

*Hybrid Blocks:*
- Polymer-infiltrated ceramic network (PICN)
- Composite properties in millable form
- Examples: Enamic, Cerasmart

## Adhesive Optimization

**Universal Adhesives:**

*Versatility:*
- Self-etch or etch-and-rinse mode
- Direct and indirect bonding
- Various substrates (enamel, dentin, ceramic, metal)

*Components:*
- 10-MDP (functional monomer)
- Silane (for ceramics)
- Acidic monomers
- Solvents (ethanol, water, acetone)

**10-MDP Bonding:**
- Chemical bond to calcium in tooth/cements
- Stable ester linkage
- Water-resistant
- Gold standard functional monomer

**Immediate Dentin Sealing:**
- Apply adhesive to freshly cut dentin
- Before impression for indirect restorations
- Protects exposed tubules
- Improves bond strength

## Clinical Precision

**Rubber Dam Excellence:**

*Benefits:*
- Moisture control (critical for bonding)
- Retraction and visibility
- Airway protection
- Improved success rates

*Evidence:*
- Studies show improved restoration longevity
- Reduces contamination risk
- Standard of care for adhesive dentistry

**Matrix Selection:**

| Situation | Matrix Type | Purpose |
|-----------|-------------|---------|
| Class II | Sectional (Palodent, etc.) | Tight contact, contour |
| Class II (large) | Tofflemire | Stability |
| Class III | Mylar strip | Esthetics |
| Deep margin | Serrated deep margin | Adaptation |

**Finishing and Polishing:**

*Sequence:*
1. Gross shaping (diamond, carbide)
2. Contouring (fine diamonds, discs)
3. Smoothing (rubbers, discs)
4. High polish (paste, wheels)

*Importance:*
- Reduces plaque retention
- Improves esthetics
- Prevents marginal staining

## Repair vs. Replacement

**Repair Advantages:**
- Preserves tooth structure
- Lower pulp risk
- Faster, less expensive
- Suitable for many failures

**Repair Protocol:**
1. Clean and roughen surface
2. Apply adhesive (self-etch or universal)
3. Repair with composite
4. Light cure and finish

**Evidence:**
- Good short-term success (80-90%)
- Consider substrate and failure mode
- Not appropriate for all situations

## Quality Metrics

**Process Indicators:**
- Rubber dam use rate
- Bonding protocol adherence
- Curing time and technique

**Outcome Indicators:**
- Restoration survival
- Secondary caries rate
- Patient satisfaction
- Sensitivity complaints

**Continuous Improvement:**
- Track failures
- Analyze patterns
- Update protocols
- Evidence-based refinement`,
      keyTerms: [
        { term: '10-MDP', definition: '10-Methacryloyloxydecyl dihydrogen phosphate; functional monomer for chemical bonding to calcium' },
        { term: 'PICN', definition: 'Polymer-Infiltrated Ceramic Network; hybrid CAD/CAM material with ceramic and composite properties' },
        { term: 'immediate dentin sealing', definition: 'Applying adhesive to freshly prepared dentin before impression for indirect restorations' },
        { term: 'bioactive glass', definition: 'Material releasing ions for tissue interaction and remineralization' },
        { term: 'cuspal deflection', definition: 'Inward movement of cusps due to polymerization shrinkage stress' },
        { term: 'sectional matrix', definition: 'Curved metal strip with ring for Class II restorations; creates tight contact' },
      ],
      clinicalNotes: 'Universal adhesives with 10-MDP provide excellent versatility and bond stability. Immediate dentin sealing improves outcomes for indirect restorations. Repair of existing composites is evidence-based when appropriate. Bulk-fill composites offer placement advantages but long-term data is still accumulating. Rubber dam use correlates with improved adhesive restoration longevity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary restorative research encompasses regenerative approaches, smart materials, digital workflow integration, and precision techniques informed by biofilm science, adhesive degradation mechanisms, and patient-specific factors for personalized treatment optimization.',
      explanation: `## Regenerative Approaches

**Remineralization-First Strategy:**

*Non-Invasive Management:*
| Lesion Type | Approach | Products |
|-------------|----------|----------|
| White spot | Remineralization | CPP-ACP, fluoride varnish |
| Non-cavitated | Infiltration | Icon, MI Varnish |
| Early cavitated | SDF + fluoride | SDF, high-F toothpaste |
| Moderate caries | Selective removal + bioactive | Biodentine, TheraCal |

**Bioactive Pulp Protection:**

*MTA and Calcium Silicates:*
| Material | Application | Mechanism |
|----------|-------------|-----------|
| MTA | Direct pulp cap | Calcium hydroxide release |
| Biodentine | Dentin substitute | Bioactivity, sealing |
| TheraCal | Liner | Calcium release |

*Pulp Capping Success:*
- Calcium silicates: 85-95% success
- Proper case selection critical
- Hemostasis achievement necessary

**Tissue Engineering Potential:**

*Future Directions:*
- Dental pulp stem cells for dentin regeneration
- Scaffold-based approaches
- Growth factor delivery
- Whole tooth regeneration (distant future)

## Smart Materials

**Antibacterial Composites:**

*Mechanisms:*
| Strategy | Agent | Status |
|----------|-------|--------|
| Contact killing | QAMs, DMAHDM | Research, some products |
| Ion release | Silver, zinc | Limited products |
| Protein repelling | Zwitterionic | Research |
| pH responsive | Smart release | Research |

**Stress-Reducing Technology:**

*Low-Shrinkage Systems:*
- Ring-opening monomers
- Pre-polymerized clusters
- Stress-relieving networks
- Reduced C-factor materials

*Volumetric Shrinkage Reduction:*
- Standard composites: 2-4%
- Low-shrink composites: 1-2%
- Bulk-fill: 1.5-2.5% (larger volume)

**Self-Healing Composites:**

*Approaches:*
1. Microcapsule systems (DCPD + Grubbs catalyst)
2. Intrinsic healing networks
3. Shape-memory polymers
4. Autonomic repair

*Status:* Research phase; clinical translation challenges

## Adhesive Degradation

**Hybrid Layer Breakdown:**

*Mechanisms:*
| Mechanism | Cause | Consequence |
|-----------|-------|-------------|
| MMPs activation | Acid etching exposes | Collagen degradation |
| Hydrolysis | Water sorption | Bond weakening |
| Esterase activity | Salivary enzymes | Polymer breakdown |
| Mechanical fatigue | Cyclic loading | Interface failure |

*Prevention Strategies:*
- MMP inhibitors (chlorhexidine, EDTA)
- Ethanol wet bonding
- Cross-linker application
- Hydrophobic adhesives

**Long-Term Bond Stability:**

*Evidence:*
- 25-50% bond strength loss over years
- Nanoleakage correlates with degradation
- Etch-and-rinse 3-step most stable
- Simplified adhesives more vulnerable

## Digital Integration

**CAD/CAM Workflow:**

*Chairside Advantages:*
| Aspect | Benefit |
|--------|---------|
| Single visit | No temporary, fewer appointments |
| Digital impression | No conventional materials |
| Precision fit | Consistent margins |
| Material options | Ceramic, hybrid blocks |

*Laboratory Workflow:*
- Complex cases
- Multiple units
- Specialized materials
- Technician artistry

**AI Applications:**

*Emerging Uses:*
- Caries detection
- Preparation assessment
- Shade matching
- Treatment planning
- Quality control

## Precision Clinical Approach

**Patient-Specific Factors:**

| Factor | Assessment | Impact |
|--------|------------|--------|
| Caries risk | CAMBRA, bacterial counts | Material selection, frequency |
| Bruxism | Wear patterns, interview | Material, design |
| Esthetics | Smile analysis | Material, technique |
| Age | Pulp size, vitality | Conservative approach |
| Compliance | History, interview | Prognosis |

**Evidence-Based Protocol Selection:**

\`\`\`
Assessment (caries risk, biomechanics, esthetics)
        ↓
Material Selection (evidence-based)
        ↓
Technique Optimization (standardized protocols)
        ↓
Quality Verification (margins, occlusion)
        ↓
Maintenance Planning (risk-based recall)
\`\`\`

## Research Frontiers

**Material Development:**

| Direction | Goal | Status |
|-----------|------|--------|
| Bioactive regeneration | Dentin formation | Research |
| Antimicrobial | Secondary caries prevention | Emerging |
| Self-healing | Longevity extension | Research |
| Zero-shrinkage | Eliminate shrinkage stress | Research |
| Biomimetic | Match tooth properties | Ongoing |

**Clinical Research:**

*Pragmatic Trials:*
- Real-world effectiveness
- Long-term follow-up
- Practice-based research networks
- Patient-centered outcomes

**Implementation Science:**

*Translation Challenges:*
- Evidence-to-practice gap
- Protocol adherence
- Training standardization
- Quality improvement

## Clinical Translation Priorities

1. **Selective caries removal**: Evidence-based, underutilized
2. **Universal adhesives**: Simplify while maintaining quality
3. **Bioactive materials**: Growing role in pulp protection
4. **Repair over replacement**: Conservative, evidence-supported
5. **Digital workflows**: Increasing precision and efficiency
6. **Prevention integration**: Treating risk, not just lesions
7. **Quality metrics**: Track outcomes, improve protocols
8. **Patient communication**: Shared decision-making`,
      keyTerms: [
        { term: 'QAMs', definition: 'Quaternary Ammonium Methacrylates; contact-killing antibacterial monomers for composites' },
        { term: 'MMP inhibitors', definition: 'Agents like chlorhexidine that prevent collagen degradation in the hybrid layer' },
        { term: 'Icon infiltration', definition: 'Resin infiltration technique for non-cavitated lesions to arrest progression' },
        { term: 'DCPD', definition: 'Dicyclopentadiene; healing agent in self-healing composite microcapsules' },
        { term: 'nanoleakage', definition: 'Nanometer-scale voids in adhesive interface; predictor of bond degradation' },
        { term: 'practice-based research', definition: 'Clinical trials conducted in routine practice settings for real-world evidence' },
      ],
      clinicalNotes: `Research translation priorities:
1. Selective caries removal is proven - adopt over complete caries removal
2. MMP inhibitors (CHX in adhesive protocols) may improve long-term bond durability
3. Bioactive liners and cements gaining evidence for pulp protection
4. Repair is appropriate for many restoration failures - conservative approach
5. Antibacterial composites emerging but not yet mainstream
6. CAD/CAM expands options but requires case-appropriate selection
7. AI-assisted diagnosis approaching clinical integration
8. Patient-specific risk assessment should guide material and technique choices`,
    },
  },

  media: [
    {
      id: 'filling-procedure',
      type: 'diagram',
      filename: 'filling-procedure-steps.svg',
      title: 'Dental Filling Procedure',
      description: 'Step-by-step illustration of cavity preparation and restoration',
    },
    {
      id: 'material-comparison',
      type: 'diagram',
      filename: 'restorative-materials-comparison.svg',
      title: 'Restorative Materials Comparison',
      description: 'Comparison of amalgam, composite, and glass ionomer properties',
    },
  ],

  citations: [
    {
      id: 'summitt-operative',
      type: 'textbook',
      title: 'Fundamentals of Operative Dentistry',
      authors: ['Summitt, J.B.', 'Robbins, J.W.'],
      source: 'Quintessence',
    },
    {
      id: 'cochrane-composites',
      type: 'article',
      title: 'Direct composite resin fillings versus amalgam fillings for permanent posterior teeth',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'condition-cavities-decay', targetType: 'condition', relationship: 'related', label: 'Cavities and Decay' },
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['teeth', 'enamel', 'dentin'],
    topics: ['treatment', 'restorative', 'materials'],
    keywords: ['fillings', 'composite', 'amalgam', 'restoration', 'cavity'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dentalFillings;
