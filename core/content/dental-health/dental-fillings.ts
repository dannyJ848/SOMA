/**
 * Dental Fillings - Comprehensive Educational Content
 *
 * Covers restorative options for cavities including amalgam,
   composite, glass ionomer, and other filling materials with
   their indications, advantages, and limitations.
 */

import { EducationalContent } from '../types';

export const dentalFillings: EducationalContent = {
  id: 'procedure-dental-fillings',
  type: 'topic',
  name: 'Dental Fillings',
  alternateNames: [
    'Dental Restorations',
    'Tooth Fillings',
    'Cavity Fillings',
    'Direct Restorations',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'A dental filling is a way to restore a tooth damaged by decay back to its normal function and shape. The dentist removes the decayed tooth material, cleans the affected area, and fills the cleaned-out cavity with a filling material.',
      explanation: `**What is a Filling?**

A filling repairs a tooth that has been damaged by decay (a cavity). The dentist removes the decay and fills the hole with a material that restores the tooth's shape and function.

**Types of Fillings:**

**1. Composite (Tooth-Colored)**
- Same color as your tooth
- BONDS to the tooth (strengthens it)
- Most common today
- Best for front teeth and small to medium cavities

**2. Amalgam (Silver)**
- Strong and durable
- Less expensive
- Noticeable silver color
- Best for back teeth

**3. Glass Ionomer**
- Tooth-colored
- Releases fluoride
- Not as strong as composite
- Used for small cavities, baby teeth

**Why Do You Need a Filling?**

**Cavities (Tooth Decay):**
- Bacteria in your mouth make acid
- Acid eats a hole in your tooth
- Filling repairs the damage
- Without treatment: Bigger cavity, pain, infection

**Steps for Getting a Filling:**

1. **Numb the area** - You won't feel pain
2. **Remove decay** - Dentist cleans out the cavity
3. **Prepare the tooth** - Shape the space for the filling
4. **Place the filling** - Put in the material
5. **Shape and polish** - Make it comfortable and smooth
6. **Bite check** - Make sure your bite feels right

**How Long Do Fillings Last?**
- Composite: 5-10 years
- Amalgam: 10-15 years or longer
- Depends on: Size, location, oral hygiene

**Taking Care of Your Fillings:**
- Brush twice a day with fluoride toothpaste
- Floss daily
- Avoid very hard foods
- See dentist regularly to check fillings

**Signs a Filling Might Need Replacement:**
- Sensitivity to hot or cold
- Pain when biting
- Rough or sharp edge
- Filling feels loose
- Visible cracks or gaps`,
      keyTerms: [
        { term: 'cavity', definition: 'A hole in a tooth caused by decay' },
        { term: 'filling', definition: 'Material used to fill a cavity and repair a tooth' },
        { term: 'composite', definition: 'Tooth-colored filling material' },
        { term: 'amalgam', definition: 'Silver-colored filling material' },
      ],
      analogies: [
        'A filling is like patching a pothole in a road - it fills the hole and smooths the surface.',
        'Amalgam is like concrete - very strong but not pretty to look at.',
        'Composite is like spackle - matches the color and blends in.',
      ],
      examples: [
        'A small cavity on a front tooth would be filled with tooth-colored composite.',
        'A large cavity on a back molar might be best filled with strong amalgam.',
      ],
      patientCounselingPoints: [
        'Small fillings are much easier and less expensive than large ones - catch cavities early!',
        'Tooth-colored fillings look natural but may not last as long as amalgam in back teeth',
        'Your bite may feel different at first - tell your dentist if it doesn\'t feel right after a few days',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental fillings are direct restorations placed to restore tooth structure lost to caries or fracture. Material selection depends on location, extent of restoration, esthetic requirements, and patient factors.',
      explanation: `## Filling Materials

**Composite Resin:**

*Composition:*
- Resin matrix (BIS-GMA or UDMA)
- Inorganic fillers (glass, silica)
- Coupling agent (silane)
- Photoinitiators (camphoroquinone)

*Advantages:*
- Tooth-colored (excellent esthetics)
- Bonds to tooth structure
- Conservative preparation
- Insulates against temperature changes
- Repairable

*Disadvantages:*
- Technique-sensitive
- Polymerization shrinkage
- Higher cost than amalgam
- Wear resistance lower than amalgam
- Stains over time
- 5-10 year lifespan

*Best Uses:*
- Anterior teeth (esthetics)
- Small to moderate restorations
- Patients wanting tooth-colored

**Amalgam:**

*Composition:*
- Silver, tin, copper, zinc
- Mercury (~50% by weight)
- Types: Low-copper (older), high-copper (modern)

*Advantages:*
- Very durable
- Longer lifespan (10-15+ years)
- Less technique-sensitive
- Self-sealing (corrosion products)
- Lower cost
- Good for large restorations

*Disadvantages:*
- Not tooth-colored (silver)
- Requires more tooth removal (retention form)
- Mercury concerns (unfounded)
- Thermal expansion/contraction
- May discord tooth over time

*Best Uses:*
- Posterior teeth (not visible)
- Large restorations
- Patients with high caries risk
- Moisture control difficult

**Glass Ionomer:**

*Composition:*
- Fluoroaluminosilicate glass
- Polyacrylic acid
- Chemical set

*Advantages:*
- Fluoride release
- Chemical bond to tooth
- Tooth-colored
- Good for patients with high caries risk
- Biocompatible

*Disadvantages:*
- Poor wear resistance
- Weak strength
- Short lifespan (3-7 years)
- Technique-sensitive
- Esthetics not as good as composite

*Best Uses:*
- Small restorations in low-stress areas
- Root caries
- Patients with high caries risk
- Primary teeth
- Temporary restorations

**Resin-Modified Glass Ionomer:**
- Combines GIC and resin components
- Light-cured
- Better strength than GIC
- Still releases fluoride
- Intermediate properties

## Indications for Fillings

**Primary Caries:**
- Initial caries not arrested
- Cavitated lesions
- Symptoms or not (most need treatment)
- Location and extent

**Replacement of Existing Restorations:**
- Recurrent decay
- Fractured restorations
- Marginal breakdown
- Esthetic concerns
- Endodontic access

**Fractured Teeth:**
- Minor chips
- Cuspal fractures (may need crown)
- Trauma

## Contraindications

**Fillings NOT Appropriate When:**
- Large portion of tooth missing
- Cusp involved (needs onlay/crown)
- Root canal treated (needs crown)
- Cracked tooth (needs crown or extraction)
- Insufficient tooth structure

## Procedure Steps

**Composite Procedure:**
1. Anesthesia (if needed)
2. Cavity preparation
3. Etch (phosphoric acid, 15-30 seconds)
4. Rinse, dry
5. Bonding agent application
6. Light-cure
7. Composite placement in increments
8. Light-cure each increment
9. Occlusal adjustment
10. Polishing

**Amalgam Procedure:**
1. Anesthesia (if needed)
2. Cavity preparation (retentive form)
3. Liner/base (if deep)
4. Amalgam condensation
5. Carving anatomy
6. Occlusal adjustment
7. Polishing (at later visit)

## Restoration Failure

**Causes:**
- Recurrent caries
- Fracture of restoration
- Fracture of tooth
- Marginal breakdown
- Loss of retention
- Sensenicity/pain

**Signs of Failure:**
- Roughness
- Food impaction
- Sensitivity
- Visible fracture
- Lost filling

## Longevity Factors

**Material Factors:**
- Type of material
- Quality of placement
- Size of restoration
- Location in mouth

**Patient Factors:**
- Oral hygiene
- Diet (sugar, acid)
- Parafunctional habits (grinding)
- Salivary flow
- Fluoride exposure

**Operator Factors:**
- Technique
- Isolation (moisture control)
- Material selection
- Anatomic form`,
      keyTerms: [
        { term: 'composite', definition: 'Tooth-colored resin filling material' },
        { term: 'amalgam', definition: 'Silver-colored metallic filling material' },
        { term: 'glass ionomer', definition: 'Fluoride-releasing filling material' },
        { term: 'recurrent caries', definition: 'New decay around an existing restoration' },
        { term: 'bonding', definition: 'Chemical adhesion of filling material to tooth structure' },
      ],
      analogies: [
        'The bonding layer is like glue - it holds the filling to the tooth.',
        'Amalgam\'s self-sealing is like rust forming on metal - it fills tiny gaps.',
      ],
      clinicalNotes: 'Composite: requires excellent moisture control. Amalgam: requires retentive preparation. GIC: fluoride release may benefit high caries risk. Large restorations with cusp involvement require crowns, not fillings. Defective margins allow recurrent decay.',
      patientCounselingPoints: [
        'Composite fillings look natural but may need replacement sooner than amalgam',
        'Good oral hygiene helps fillings last longer',
        'Grinding/clenching can shorten filling lifespan',
        'Replace fillings at first sign of failure to prevent more extensive treatment',
      ],
    },
    3: {
      level: 3,
      summary: 'Direct restorations are mainstays of minimally invasive dentistry. Material selection depends on clinical factors including cavity location, size, moisture control, patient caries risk, and esthetic demands.',
      explanation: `## Material Properties

**Composite Resin:**

*Classification by Filler:*
- Microfilled: Excellent polish, low strength
- Hybrid: Good polish, moderate strength
- Macrofilled: Strong, doesn't polish well
- Nanofilled: Excellent polish, good strength

*Properties:*
- Compressive strength: 300-400 MPa
- Tensile strength: 40-60 MPa
- Modulus of elasticity: 5-15 GPa
- Wear: 50-200 µm/year
- Polymerization shrinkage: 2-5%

**Amalgam:**

*Classification:*
- Low-copper: Traditional (η₂ phase)
- High-copper: Modern (γ phase, superior properties)

*Properties:*
- Compressive strength: 300-400 MPa
- Tensile strength: 50-70 MPa
- Modulus of elasticity: 20 GPa
- Creep: Low-copper > high-copper
- Corrosion: Seals margin but may discolor

**Glass Ionomer:**

*Types:*
- Conventional: Chemical set
- Resin-modified: Light + chemical set

*Properties:*
- Compressive strength: 100-200 MPa
- Tensile strength: 10-15 MPa
- Modulus of elasticity: 5-10 GPa
- Fluoride release: High initially, decreases over time

## Bonding Mechanisms

**Enamel Bonding:**
- Phosphoric acid etching (30-40%, 15-30 sec)
- Creates microtags for resin penetration
- Bond strength: 20-30 MPa
- Very reliable

**Dentin Bonding:**
- More complex than enamel
- Moisture-sensitive (not too wet, not too dry)
- Generations: 4th-7th (current)
- Bond strength: 15-40 MPa
- Smear layer management key

**Bonding Systems:**

*Etch-and-Rinse:*
- Separate etch, rinse, bonding steps
- Highest bond strengths
- Technique-sensitive

*Self-Etch:*
- Etch and primer combined
- Easier technique
- Lower bond strengths
- Less postoperative sensitivity

*Universal:*
- Can be used either way
- Versatile
- Moderate bond strengths

## Cavity Preparation

**Principles:**

*Black\'s Principles (modified for modern materials):*
- Extension for prevention (less for bonded restorations)
- Retention form (critical for amalgam, less for composite)
- Resistance form (prevent fracture)
- Convenience form (access)
- Removal of caries
- Finishing of enamel walls
- Cleansing of cavity

**Minimally Invasive:**
- Remove only diseased tissue
- Preserve healthy tooth structure
- Bonded materials allow less extension
- Sealing of fissures possible

## Clinical Decision Making

**Material Selection Algorithm:**

1. **Esthetic Priority?** → Composite, porcelain
2. **Moisture Control Difficult?** → Amalgam, GIC
3. **High Caries Risk?** → GIC (fluoride), amalgam (durability)
4. **Large Restoration?** → Amalgam, or indirect restoration
5. **Cervical/Root Caries?** → GIC, RMGIC

**Size Considerations:**
- Small (Class I, III, V): Any material
- Moderate (Class II, IV): Composite, amalgam
- Large: Amalgam, or consider crown

**Location Considerations:**
- Anterior: Composite (esthetic)
- Posterior: Amalgam, composite, or GIC
- Cervical: GIC, RMGIC, composite
**Patient Factors:**
- Caries risk: High → GIC, amalgam
- Bruxism: Amalgam, or consider crown
- Esthetic demands: Composite
- Budget: Amalgam less expensive

## Specific Clinical Situations

**Class I (Occlusal):**
- Posterior pits and fissures
- Small: Composite or sealant
- Moderate: Composite or amalgam
- Large: Amalgam or crown

**Class II (Proximal posterior):**
- Composite: Requires good isolation
- Amalgam: More forgiving
- Large: Consider indirect

**Class III (Proximal anterior):**
- Composite for esthetics
- Small prep, bond to enamel

**Class IV (Proximal anterior + incisal edge):**
- Composite (esthetic demands)
- Challenging isolation

**Class V (Cervical):**
- GIC or RMGIC: Fluoride, good bond
- Composite: If esthetic priority
- Amalgam: Rarely used now

**Root Caries:**
- GIC or RMGIC: Fluoride, chemical bond
- RMGIC stronger than conventional GIC
- Composite if high esthetic need

## Failure Analysis

**Secondary (Recurrent) Caries:**
- Most common reason for replacement
- Plaque accumulation at margin
- Poor oral hygiene
- Restoration breakdown at margin

**Fracture:**
- Material fracture
- Tooth fracture (cusps)
- Occlusal overload
- Weakened tooth structure

**Marginal Breakdown:**
- Opening at margin
- Food impaction
- Recurrent decay pathway
- Material wear

**Loss of Retention:**
- Debonding (composite)
- Cement failure (metal inlays)
- Tooth fracture around filling

**Sensitivity:**
- Postoperative sensitivity
- Usually transient
- Persistent: May need replacement
- Possible pulp involvement

## Clinical Pearls

**Composite Tips:**
- Excellent moisture control essential
- Use rubber dam when possible
- Incremental build-up (<2mm)
- Proper curing essential (light check)
- Finish and polish to reduce stain

**Amalgam Tips:**
- Proper retention form critical
- Wedging for contacts
- Carve anatomy properly
- Delay final polishing 24 hours

**GIC Tips:**
- Follow instructions exactly
- Protect from moisture during set
- Finishing after set complete
- Surface protection needed
- Use with varnish or bonding agent

**Long-Term Success:**
- Proper case selection
- Good technique
- Patient maintenance
- Regular monitoring`,
      keyTerms: [
        { term: 'et-and-rinse', definition: 'Bonding system with separate etching, rinsing, bonding steps' },
        { term: 'self-etch', definition: 'Bonding system that etches and primes simultaneously' },
        { term: 'microtags', definition: 'Resin tags formed in etched enamel for micromechanical retention' },
        { term: 'caries risk', definition: 'Likelihood of developing new caries' },
      ],
      clinicalNotes: 'Moisture control is critical for composite success. Amalgam requires retentive form but more forgiving of isolation. GIC beneficial for high caries risk. Large restorations exceeding 1/3 tooth width often need crowns. Secondary caries is #1 reason for replacement.',
      patientCounselingPoints: [
        'Composite fillings can stain over time - avoid coffee, tea, red wine immediately after placement',
        'Sensitivity after a filling is common but should resolve within a few weeks',
        'Large fillings have higher failure risk - crowns may be better for very large cavities',
        'Good oral hygiene is the best way to make fillings last longer',
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary restorative dentistry incorporates nanotechnology in composites, improved adhesive systems, and minimally invasive techniques. Evidence-based guidelines support material selection based on clinical parameters and patient factors.',
      explanation: `## Advanced Materials

**Nanocomposites:**
- Nanometer-sized filler particles
- Excellent polish retention
- Good strength
- Better esthetics
- Reduced wear

**Bulk-Fill Composites:**
- Can be placed up to 4-5mm
- Reduced polymerization shrinkage stress
- Shorter placement time
- Flowable and packable versions
- Slightly lower wear resistance

**Bioactive Composites:**
- Remineralizing agents
- Calcium-phosphate release
- Antibacterial properties
- Research ongoing

**Improved Adhesives:**
- Universal adhesives (use etch-and-rinse or self-etch)
- Reduced postoperative sensitivity
- Improved durability
- Simplified protocols

## Evidence-Based Selection

**Systematic Reviews:**

*Composite vs Amalgam:*
- Survival: Amalgam > Composite posteriorly
- Esthetics: Composite > Amalgam
- Cost: Amalgam < Composite
- Replacement rate: Similar for small restorations

*GIC vs Composite:*
- GIC: Higher failure rate in stress-bearing areas
- GIC: Better for root caries, high caries risk
- RMGIC: Improved strength vs conventional GIC

**Clinical Guidelines:**
- Small cavities: Any material (patient preference)
- Moderate posterior: Composite or amalgam
- Large posterior: Amalgam or indirect restoration
- Cervical: GIC or RMGIC
- High caries risk: GIC (fluoride release)

## Minimally Invasive Dentistry

**Principles:**
- Preserve healthy tooth structure
- Bonded restorations enable this
- Sealing rather than restoring when possible
- Repair rather than replace when feasible

**Selective Caries Removal:**
- Remove infected dentin (soft, irreparable)
- Leave affected dentin (remineralizable)
- Seal with GIC or RMGIC
- Evidence supports this approach

**Stepwise Caries Removal:**
- Partial caries removal
- Temporization with calcium hydroxide
- Re-entry after 6-12 months
- Complete removal if arrested
- Preserve tooth structure

**Seal and Monitor:**
- For questionable lesions
- Use sealant or preventive resin
- Monitor with radiographs
- Intervention if progresses

## Long-Term Considerations

**Secondary Caries Prevention:**
- Fluoride release (GIC)
- Marginal integrity
- Polishability (less plaque retention)
- Proper contour

**Material Degradation:**
- Composite: Staining, wear, marginal breakdown
- Amalgam: Corrosion, marginal fracture
- GIC: Surface degradation, wear

**Repair vs Replace:**
- Repair small defects in restorations
- Preserve tooth structure
- Reduce cost
- Evidence supports repair over replacement in many cases

## Special Considerations

**Cervical Lesions (NCCLs):**
- Non-carious cervical lesions
- Abrasion, erosion, abfraction
- GIC or RMGIC: Good bond, fluoride
- Composite: Higher strength
- Decision depends on size, stress

**Deep Caries:**
- Risk of pulp exposure
- Stepwise excavation
- Indirect pulp capping
- Calcium hydroxide or MTA
- Monitor vitality

**Patients with High Caries Risk:**
- GIC or RMGIC for fluoride
- Amalgam for durability
- Preventive resin sealants
- Aggressive preventive program

**Bruxism Patients:**
- Amalgam may be better
- Or consider full coverage
- Nightguard fabrication
- Monitoring for fractures`,
      keyTerms: [
        { term: 'nanocomposite', definition: 'Composite with nanometer-sized filler particles' },
        { term: 'bulk-fill', definition: 'Composite that can be placed in thick increments' },
        { term: 'bioactive', definition: 'Materials that interact biologically with tooth structure' },
        { term: 'NCCLs', definition: 'Non-carious cervical lesions; abrasion, erosion, abfraction' },
      ],
      clinicalNotes: 'Bulk-fill composites simplify placement but have slightly lower wear resistance. Universal adhesives offer flexibility. Selective caries removal preserves tooth structure. Repair vs. replace: appropriate for small defects. GIC beneficial for high caries risk due to fluoride release.',
    },
    5: {
      level: 5,
      summary: 'Future restorative materials may incorporate stem cell activation, antimicrobial properties, and self-healing capabilities. Bioactive materials that promote remineralization and resist secondary caries are under development.',
      explanation: `## Emerging Technologies

**Self-Healing Composites:**
- Microcapsules with monomers
- Damage-triggered repair
- Research stage
- May extend restoration life

**Antimicrobial Materials:**
- Quaternary ammonium compounds
- Silver nanoparticles
- pH-responsive release
- Reduce secondary caries

**Regenerative Materials:**
- Pulp capping agents
- Stem cell recruitment
- Dentin regeneration
- Biomimetic approaches

**Smart Materials:**
- Stress-absorbing
- Color-changing indicators
- pH-sensing capabilities
- Research stage

**Clinical Translation:**
- Evidence-based selection
- Cost-effectiveness
- Environmental impact
- Sustainability`,
      keyTerms: [
        { term: 'self-healing', definition: 'Material that can repair itself when damaged' },
      ],
      clinicalNotes: `Future practice:
1. Bulk-fill composites will become more popular
2. Bioactive materials will reduce secondary caries
3. Self-healing materials may extend restoration life
4. Antimicrobial composites may reduce failure
5. Digital workflows will improve efficiency`,
    },
  },

  media: [
    {
      id: 'filling-materials',
      type: 'diagram',
      filename: 'dental-filling-materials.svg',
      title: 'Dental Filling Materials Comparison',
      description: 'Comparison of amalgam, composite, and glass ionomer',
    },
  ],

  citations: [
    {
      id: 'summitt-restorative',
      type: 'textbook',
      title: 'Robbins and Cotran Pathologic Basis of Disease - Restorative Dentistry Chapter',
      authors: ['Summitt, J.B.', 'Robbins, J.W.', 'Schwartz, R.S.'],
      source: 'Elsevier',
      chapter: 'Chapters 5-9',
    },
  ],

  crossReferences: [
    { targetId: 'condition-tooth-decay', targetType: 'condition', relationship: 'related', label: 'Tooth Decay' },
    { targetId: 'structure-tooth-structure', targetType: 'structure', relationship: 'related', label: 'Tooth Structure' },
    { targetId: 'procedure-root-canal-therapy', targetType: 'topic', relationship: 'related', label: 'Root Canal' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['enamel', 'dentin'],
    topics: ['restorative', 'materials', 'treatment'],
    keywords: ['fillings', 'restorations', 'composite', 'amalgam', 'glass ionomer', 'cavities'],
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

export default dentalFillings;
