/**
 * Scar Management - Comprehensive Educational Content
 *
 * Covers scar formation, prevention, and treatment options.
 */

import { EducationalContent } from '../../types';

export const scarManagementContent: EducationalContent = {
  id: 'dermatology-scar-management',
  type: 'topic',
  name: 'Scar Management',
  alternateNames: ['Scar Treatment', 'Cicatrix Management', 'Scar Revision'],

  levels: {
    1: {
      level: 1,
      summary: 'Scars are a natural part of healing, and there are many ways to help them look better.',
      explanation: `When your skin heals after an injury, it often leaves a scar. Scars are your body's way of repairing itself, but sometimes they can be bumpy, discolored, or uncomfortable.

**Types of Scars:**

**Flat Scars**
- Most common type
- May be lighter or darker than surrounding skin
- Usually fade over time

**Raised Scars (Hypertrophic)**
- Stay within the original wound area
- Red and raised at first
- Often improve over 1-2 years

**Keloid Scars**
- Grow beyond the original wound
- Can keep growing over time
- More common in darker skin tones

**Sunken Scars (Atrophic)**
- Pitted or depressed
- Common after acne or chickenpox

**Scar Contracture**
- Tight scars that can limit movement
- Often from burns

**How to Help Scars:**

**Prevention:**
- Keep wounds clean and moist
- Protect from sun (scars sunburn easily)
- Do not pick at scabs

**Treatment Options:**
- Silicone sheets or gels
- Massage (helps flatten scars)
- Steroid injections (for raised scars)
- Laser treatments
- Surgery (for severe scars)

**Time Helps:**
Most scars improve over 1-2 years. Be patient and consistent with treatment.`,
      keyTerms: [
        { term: 'scar', definition: 'A mark left on the skin after a wound heals' },
        { term: 'keloid', definition: 'A type of scar that grows beyond the original wound' },
        { term: 'silicone gel', definition: 'A treatment that helps flatten and soften scars' },
      ],
      analogies: [
        'A scar is like a patch on clothing - it repairs the damage but looks different from the original fabric.',
        'Scar massage is like kneading dough - it helps make the tissue softer and more flexible.',
      ],
      examples: [
        'A child has a surgical scar that is red and raised - using silicone sheets daily helps it flatten.',
        'A teenager has acne scars that look like small pits - laser treatment can help smooth them.',
      ],
    },
    2: {
      level: 2,
      summary: 'Scar formation involves abnormal wound healing responses, with management strategies ranging from topical treatments to surgical revision based on scar type.',
      explanation: `Scars represent the endpoint of wound repair, with clinical appearance varying based on wound characteristics, healing conditions, and patient factors.

## Scar Classification

### Normal (Mature) Scars
- Flat, pale, soft
- Approximate skin texture
- May have minor textural difference

### Hypertrophic Scars
- Raised, red, firm
- Confined to wound borders
- Develop within weeks of injury
- Often improve spontaneously over 1-2 years
- Associated with wounds crossing tension lines

### Keloid Scars
- Extend beyond wound borders
- Continue to grow over time
- Genetic predisposition (African, Asian, Hispanic ancestry)
- Common sites: Ears, chest, shoulders
- High recurrence after excision alone

### Atrophic Scars
- Depressed below skin surface
- Acne scars (ice pick, boxcar, rolling)
- Stretch marks (striae)

### Contracture Scars
- Shortened, tight scar tissue
- Crosses joints → limited motion
- Common after burns

## Pathophysiology

### Normal vs Abnormal Scarring
**Normal**: Balanced collagen synthesis/degradation
**Hypertrophic/Keloid**: Excessive collagen deposition
- Increased TGF-β
- Decreased apoptosis of myofibroblasts
- Prolonged inflammation

## Risk Factors for Abnormal Scarring
- Genetic predisposition
- Darker skin phototypes
- Young age
- Wound location (chest, shoulders, ears)
- Wound tension
- Infection or prolonged healing
- Hormonal factors

## Prevention Strategies

### Surgical Technique
- Tension-free closure
- Align with relaxed skin tension lines (RSTL)
- Atraumatic tissue handling
- Layered closure
- Evert wound edges

### Post-Procedure Care
- Sun protection (SPF 30+)
- Silicone products (sheets or gel)
- Avoid excessive tension/movement
- Early intervention if signs of hypertrophy

## Treatment Options

### Topical Treatments
| Treatment | Mechanism | Evidence |
|-----------|-----------|----------|
| Silicone | Hydration, occlusion | Strong |
| Pressure | Collagen remodeling | Moderate |
| Onion extract | Anti-inflammatory | Weak |
| Vitamin E | Antioxidant | Weak/Negative |

### Intralesional Injection
- Corticosteroids (triamcinolone)
- 5-Fluorouracil
- Bleomycin
- Combination approaches

### Procedural
- Laser therapy
- Surgical excision/revision
- Cryotherapy
- Radiation (for keloids)

### Acne Scar Treatment
- Chemical peels
- Microneedling
- Subcision
- Fillers
- Laser resurfacing`,
      keyTerms: [
        { term: 'hypertrophic scar', definition: 'Raised scar that stays within wound boundaries and may improve over time' },
        { term: 'keloid', definition: 'Scar extending beyond original wound borders that tends to recur', pronunciation: 'KEE-loyd' },
        { term: 'relaxed skin tension lines', definition: 'Natural lines in skin along which scars heal best (RSTL)' },
        { term: 'triamcinolone', definition: 'Corticosteroid injected into scars to reduce inflammation and bulk' },
        { term: 'subcision', definition: 'Breaking of fibrous bands under scars to lift depressed scars' },
      ],
      analogies: [
        'Keloids are like weeds that grow beyond their boundaries and keep spreading.',
        'Subcision is like cutting the strings holding down a tent - it lets the surface rise up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Scar formation reflects dysregulated wound healing with altered fibroblast behavior, collagen metabolism, and growth factor signaling, guiding targeted therapeutic interventions.',
      explanation: `## Molecular Pathophysiology

### Normal Scar Maturation
**Collagen Dynamics**:
- Initial: Type III collagen predominant
- Maturation: Type I collagen replacement
- Fiber organization: Random → parallel arrangement
- Tensile strength: Max 80% of normal skin

**Matrix Metalloproteinases (MMPs)**:
- MMP-1, MMP-2, MMP-9 involved
- Balanced by tissue inhibitors (TIMPs)
- Remodeling phase equilibrium

### Hypertrophic Scar Pathology
**Fibroblast Abnormalities**:
- Increased proliferation
- Elevated collagen synthesis
- Reduced MMP activity
- Delayed apoptosis

**Growth Factor Dysregulation**:
- Increased TGF-β1, TGF-β2
- Decreased TGF-β3 (anti-scarring)
- Elevated CTGF (connective tissue growth factor)
- PDGF overexpression

### Keloid Pathology
**Genetic Factors**:
- Familial clustering
- Candidate genes: NEDD4, HLA-DR, HLA-DQ
- Variable penetrance

**Cellular Characteristics**:
- Keloid fibroblasts: Distinct phenotype
- Resistance to apoptosis
- Hypoxia signaling (HIF-1α)
- Stem cell-like properties

**Extracellular Matrix**:
- Excessive collagen (Type I and III)
- Abnormal collagen cross-linking
- Decreased elastin
- Altered proteoglycan content

## Scar Assessment Tools

### Vancouver Scar Scale (VSS)
Domains:
- Vascularity (0-3)
- Pigmentation (0-3)
- Pliability (0-5)
- Height (0-3)
Total: 0-14, higher = worse

### Patient and Observer Scar Assessment Scale (POSAS)
- Patient component: Itching, pain, appearance
- Observer component: Vascularity, pigmentation, thickness, relief, pliability
- More comprehensive than VSS

## Evidence-Based Treatment

### Silicone Therapy
**Mechanism**:
- Hydration of stratum corneum
- Occlusion reduces TEWL
- Static electric effects
- Keratinocyte signaling to fibroblasts

**Evidence**: Cochrane review supports use for prevention and treatment

### Corticosteroid Injection
**Triamcinolone Acetonide**:
- 10-40 mg/mL concentration
- Reduce inflammation
- Inhibit fibroblast proliferation
- Reduce collagen synthesis
- Risk: Atrophy, telangiectasia, pigment changes

### 5-Fluorouracil (5-FU)
**Mechanism**:
- Inhibits fibroblast proliferation
- Reduces collagen production
- Often combined with steroids (synergistic)

**Protocol**: 50 mg/mL, injected with or without steroid

### Laser Therapy

**Pulsed Dye Laser (PDL)**:
- Targets hemoglobin → vascular reduction
- Flattens, softens hypertrophic scars
- Reduces erythema
- Multiple sessions needed

**Fractional Ablative Lasers**:
- CO2, Erbium:YAG
- Microscopic ablation zones
- Collagen remodeling
- Acne scars, textural improvement

**Fractional Non-Ablative**:
- Less downtime
- Multiple sessions
- Gradual improvement

### Acne Scar Grading (Goodman)
| Grade | Description |
|-------|-------------|
| 1 | Macular (flat, discolored) |
| 2 | Mild, <1/3 of face |
| 3 | Moderate, 1/2 of face |
| 4 | Severe, entire face |

### Acne Scar Subtypes
**Ice Pick**: Narrow, deep (<2mm), sharply demarcated
**Boxcar**: Wider (1-4mm), vertical edges
**Rolling**: Broad, undulating, tethered

### Acne Scar Treatment Approach
| Type | Treatment |
|------|-----------|
| Ice pick | TCA CROSS, punch excision |
| Boxcar | Fractional laser, subcision, punch elevation |
| Rolling | Subcision, fractional laser, fillers |

## Surgical Revision

### Indications
- Non-response to conservative treatment
- Functional impairment
- Significant aesthetic concern
- After scar maturation (1-2 years)

### Techniques
- Excision and layered closure
- W-plasty, Z-plasty (reorient scar)
- Geometric broken line closure
- Tissue expansion for large scars`,
      keyTerms: [
        { term: 'TGF-β', definition: 'Transforming growth factor beta - key regulator of scarring, elevated in keloids' },
        { term: 'connective tissue growth factor', definition: 'Downstream mediator of TGF-β promoting fibrosis (CTGF)' },
        { term: 'pulsed dye laser', definition: 'Laser targeting blood vessels to treat red, raised scars (PDL)' },
        { term: 'TCA CROSS', definition: 'Trichloroacetic acid chemical reconstruction of skin scars - for ice pick scars' },
        { term: 'Z-plasty', definition: 'Surgical technique using Z-shaped incision to reorient scar and relieve tension' },
      ],
      clinicalNotes: 'Combination therapy (steroid + 5-FU) is superior to steroid alone for keloids. Wait 12-18 months for scar maturation before surgical revision. Ice pick scars respond poorly to laser - consider TCA CROSS or punch excision.',
    },
    4: {
      level: 4,
      summary: 'Advanced scar management requires understanding of cellular mechanobiology, targeted molecular therapies, and multimodal treatment strategies for complex scarring.',
      explanation: `## Mechanobiology of Scarring

### Mechanical Forces
**Tension and Scarring**:
- Mechanical stress promotes fibroblast activation
- Focal adhesion kinase (FAK) signaling
- ERK pathway activation
- Increased collagen synthesis

**Mechanotransduction**:
- Integrins sense ECM stiffness
- Cytoskeletal changes
- YAP/TAZ nuclear translocation
- Gene expression changes

### Fetal vs Adult Healing
**Fetal Scarless Healing**:
- Reduced inflammation
- High TGF-β3, low TGF-β1
- Different fibroblast phenotype
- Distinct ECM composition

**Research Implications**:
- Targets for adult scarless healing
- Anti-inflammatory strategies
- TGF-β modulation
- Recapitulating fetal environment

## Advanced Therapeutics

### TGF-β Modulation
**Approaches**:
- TGF-β1/2 neutralizing antibodies
- TGF-β3 augmentation (avotermin - trials halted)
- Receptor antagonists
- Decorin (natural TGF-β inhibitor)

### Cell-Based Therapies
**Adipose-Derived Stem Cells**:
- Anti-fibrotic paracrine effects
- Improved scar quality in studies
- Injection or co-delivery with matrices

**Fibroblast Therapy**:
- Fetal fibroblast injections
- Allogeneic fibroblasts
- Limited clinical data

### Gene Therapy Approaches
- VEGF for vascularization
- TGF-β3 gene delivery
- miRNA modulation
- siRNA targeting profibrotic genes

### Emerging Small Molecules
| Agent | Target | Status |
|-------|--------|--------|
| Pirfenidone | TGF-β, collagen | IPF approved, scar research |
| Botulinum toxin | Muscle tension | Growing evidence |
| Imiquimod | Immune modulation | Limited evidence |

## Complex Scar Types

### Burn Scars
**Characteristics**:
- Often hypertrophic
- Contractures common
- Pigment changes
- Functional and aesthetic concerns

**Management**:
- Early pressure therapy
- Silicone
- Physical therapy for mobility
- Surgery for contractures
- Laser for texture and color

### Post-Surgical Scars
**Optimization**:
- Pre-operative planning (incision placement)
- Optimal closure technique
- Early silicone therapy
- Sun protection

### Traumatic Scars
**Challenges**:
- Irregular edges
- Foreign body contamination
- Delayed presentation
- May need staged approach

### Keloid-Prone Patients
**Prevention Strategies**:
- Avoid elective procedures if possible
- Immediate post-procedure prophylaxis
- Combination protocols from start
- Long-term monitoring

**Treatment Protocol**:
1. Intralesional steroid (triamcinolone 10-40 mg/mL)
2. Add 5-FU if incomplete response
3. Consider adjuvant radiation post-excision
4. Silicone and pressure maintenance
5. Repeat injections as needed

### Radiation Therapy for Keloids
**Rationale**:
- Inhibits fibroblast proliferation
- Reduces recurrence after excision
- Typically 12-20 Gy in fractions
- Start within 24-72 hours of excision

**Concerns**:
- Theoretical malignancy risk
- Generally considered low risk
- Avoid in breast and thyroid areas

## Acne Scar Advanced Treatment

### Energy-Based Devices
**Radiofrequency Microneedling**:
- Combined mechanical and thermal effect
- Collagen remodeling
- Reduced downtime vs ablative laser
- Multiple sessions needed

**Picosecond Lasers**:
- Ultra-short pulses
- LIOB (laser-induced optical breakdown)
- Collagen stimulation
- Less thermal damage

### Regenerative Approaches
**PRP + Microneedling**:
- Combination enhances results
- Growth factor delivery
- Multiple treatments

**Fat Grafting**:
- Volume replacement
- Stem cell delivery
- Improvement in rolling scars

### Surgical Options
**Punch Techniques**:
- Punch excision (remove entire scar)
- Punch elevation (raise depressed scar)
- Punch grafting (fill with donor skin)

**Subcision Variants**:
- Nokor needle
- Cannula subcision
- Combined with fillers
- Stimulates collagen`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Process by which cells sense and respond to mechanical forces' },
        { term: 'FAK', definition: 'Focal adhesion kinase - key mediator of mechanical signaling in fibroblasts' },
        { term: 'YAP/TAZ', definition: 'Transcriptional regulators activated by mechanical stiffness, promote fibrosis' },
        { term: 'pirfenidone', definition: 'Anti-fibrotic drug approved for IPF with potential scar applications' },
        { term: 'radiofrequency microneedling', definition: 'Device combining microneedles with radiofrequency energy for collagen remodeling' },
      ],
      clinicalNotes: 'Botulinum toxin at wound closure may reduce scar width by decreasing tension. Post-excision radiation within 24-72 hours optimizes keloid prevention. Combination approaches (laser + subcision + filler) superior for complex acne scars.',
    },
    5: {
      level: 5,
      summary: 'Expert-level scar management integrates precision diagnostics, novel biologics, regenerative medicine, and personalized multimodal treatment protocols.',
      explanation: `## Precision Scar Assessment

### Biomarker-Guided Therapy
**Potential Markers**:
- TGF-β1/β3 ratio in wound fluid
- Procollagen type I/III
- MMP/TIMP balance
- HIF-1α expression (keloid)

**Genetic Profiling**:
- Keloid susceptibility genes
- Treatment response prediction
- Personalized risk assessment

### Advanced Imaging
**High-Frequency Ultrasound**:
- Scar thickness measurement
- Depth assessment
- Treatment monitoring

**Optical Coherence Tomography**:
- Cross-sectional imaging
- Collagen organization
- Research tool becoming clinical

**Multiphoton Microscopy**:
- Collagen second harmonic generation
- Elastin autofluorescence
- Research applications

## Novel Therapeutics

### Biologic Agents
**Anti-CTGF Antibodies**:
- Pamrevlumab (FG-3019)
- Phase II trials in keloid
- Downstream TGF-β blockade

**Anti-IL-13/IL-4**:
- Type 2 inflammation role in fibrosis
- Dupilumab potential (off-label)

**JAK Inhibitors**:
- IL-6/JAK/STAT pathway in keloid
- Topical formulations in development

### Regenerative Medicine
**Exosome Therapy**:
- MSC-derived exosomes
- Anti-fibrotic cargo
- Growth factors, miRNAs
- Clinical trials ongoing

**Decellularized ECM**:
- Scaffold for regeneration
- Normal tissue remodeling signals
- Dermal substitutes

**Bioengineered Skin**:
- Cellular constructs
- Gene-modified cells
- Scarless healing potential

### Drug Delivery Advances
**Microneedle Patches**:
- Painless drug delivery
- Sustained release
- Home use potential

**Nanoparticle Delivery**:
- Targeted to fibroblasts
- Enhanced penetration
- Combination payloads

## Complex Clinical Scenarios

### Keloid Management Algorithm
**Initial Assessment**:
1. Document location, size, symptoms
2. Photo documentation
3. Patient expectations
4. Previous treatment history

**First-Line**:
- Intralesional triamcinolone 10-40 mg/mL
- Silicone sheeting/gel
- Pressure (if applicable)

**Second-Line**:
- Combination TAC + 5-FU (3:1 ratio)
- Add bleomycin if resistant
- Pulsed dye laser for erythema

**Third-Line**:
- Surgical excision + adjuvant radiation
- Core excision (debulking) + steroid
- Cryotherapy

**Maintenance**:
- Monthly monitoring initially
- Silicone long-term
- Re-treatment at first sign of recurrence

### Burn Scar Reconstruction
**Acute Phase**:
- Optimize healing
- Early pressure therapy
- ROM exercises
- Silicone when epithelialized

**Reconstructive Phase**:
- Scar release for contractures
- Skin grafting
- Tissue expansion for large areas
- Free flaps for complex defects

**Laser Integration**:
- PDL for erythema
- Fractional ablative for texture
- Multiple sessions over years
- May improve function

### Acne Scar Comprehensive Protocol
**Assessment**:
- Scar subtype mapping
- Skin type evaluation
- Active acne control first
- Photography baseline

**Protocol by Type**:

*Ice Pick Dominant*:
1. TCA CROSS (50-100%)
2. Repeat monthly x 3-4
3. Consider punch excision for deep
4. Fractional laser after

*Boxcar Dominant*:
1. Subcision + filler
2. Fractional ablative laser
3. RF microneedling
4. TCA peel for superficial

*Rolling Dominant*:
1. Subcision (multiple sessions)
2. PRP or filler
3. Fractional laser
4. RF microneedling

**Combination Approach**:
- Address different scar types sequentially
- Energy device + subcision same day
- PRP enhances healing
- Maintenance treatments annually

## Quality Outcomes

### Patient-Centered Outcomes
- Symptom relief (itch, pain)
- Appearance satisfaction
- Functional improvement
- Quality of life (DLQI, Skindex)

### Treatment Planning
- Realistic expectations
- Timeline communication
- Cost considerations
- Maintenance requirements

## Future Directions

### Scarless Healing Research
**Approaches**:
- Fetal wound healing mimicry
- Mechanical environment modulation
- TGF-β isoform manipulation
- Stem cell-mediated regeneration

### Personalized Medicine
- Genetic risk stratification
- Biomarker-guided therapy
- AI treatment optimization
- Real-time monitoring

### Prevention Focus
- Surgical technique optimization
- Prophylactic protocols
- High-risk patient identification
- Early intervention algorithms`,
      keyTerms: [
        { term: 'pamrevlumab', definition: 'Anti-CTGF antibody in development for fibrotic diseases including keloid' },
        { term: 'core excision', definition: 'Debulking technique removing central keloid tissue while preserving edges' },
        { term: 'TCA CROSS', definition: 'High-concentration TCA applied precisely to ice pick scar base' },
        { term: 'decellularized ECM', definition: 'Matrix scaffold with cells removed, providing regenerative signals' },
        { term: 'exosome therapy', definition: 'Treatment using cell-derived vesicles containing anti-fibrotic factors' },
      ],
      clinicalNotes: `Expert scar management principles:
1. Multimodal approaches superior to single treatments
2. Early intervention prevents severe scarring
3. Keloid treatment is suppression, not cure - maintenance required
4. Combination energy devices (laser + RF) emerging standard for acne scars
5. Biologics targeting CTGF represent promising future therapy
6. Patient expectations management critical for satisfaction
7. Precision approaches using biomarkers may optimize treatment selection`,
    },
  },

  media: [
    {
      id: 'scar-types',
      type: 'image',
      filename: 'scar-classification.jpg',
      title: 'Scar Types',
      description: 'Clinical appearance of hypertrophic, keloid, and atrophic scars',
    },
    {
      id: 'acne-scar-types',
      type: 'diagram',
      filename: 'acne-scar-subtypes.svg',
      title: 'Acne Scar Subtypes',
      description: 'Cross-section diagrams of ice pick, boxcar, and rolling scars',
    },
  ],

  citations: [
    {
      id: 'scar-guidelines',
      type: 'article',
      title: 'International Clinical Guidelines for Scar Management',
      source: 'Plastic and Reconstructive Surgery',
    },
    {
      id: 'keloid-review',
      type: 'article',
      title: 'Keloid Pathophysiology and Treatment',
      source: 'Journal of the American Academy of Dermatology',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-wound-management', targetType: 'topic', relationship: 'related', label: 'Wound Management' },
    { targetId: 'dermatology-acne', targetType: 'condition', relationship: 'related', label: 'Acne' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'plastic-surgery', 'wound-care'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default scarManagementContent;
