/**
 * Sun Protection - Comprehensive Educational Content
 *
 * Covers UV radiation, sun damage prevention, and sunscreen science.
 */

import { EducationalContent } from '../../types';

export const sunProtectionContent: EducationalContent = {
  id: 'dermatology-sun-protection',
  type: 'topic',
  name: 'Sun Protection',
  alternateNames: ['Photoprotection', 'UV Protection', 'Sunscreen Science'],

  levels: {
    1: {
      level: 1,
      summary: 'Protecting your skin from the sun helps prevent sunburn, skin aging, and skin cancer.',
      explanation: `The sun gives us light, warmth, and helps our bodies make vitamin D. But too much sun can hurt our skin. Learning how to protect yourself is important!

**How the Sun Damages Skin:**
- **Sunburn**: Red, painful skin from too much sun
- **Tanning**: Your skin trying to protect itself (still damage!)
- **Wrinkles**: Sun breaks down what keeps skin smooth
- **Skin cancer**: The most serious effect of sun damage

**Types of Sun Rays:**
- **UVA**: Ages your skin (wrinkles, spots)
- **UVB**: Burns your skin
- Both can cause skin cancer

**How to Protect Yourself:**

**Sunscreen**
- Use SPF 30 or higher
- Apply generously (about a shot glass full for your body)
- Reapply every 2 hours and after swimming/sweating
- Use it even on cloudy days (UV goes through clouds!)

**Other Protection**
- Seek shade, especially between 10am and 4pm
- Wear protective clothing, hats, and sunglasses
- Be extra careful near water, sand, and snow (they reflect sun)

**Special Notes:**
- Everyone needs sun protection, regardless of skin color
- Babies under 6 months should be kept out of direct sun
- Some medications make you more sensitive to sun
- Tanning beds are NOT safe - they cause cancer too!`,
      keyTerms: [
        { term: 'SPF', definition: 'Sun Protection Factor - how well sunscreen protects against sunburn' },
        { term: 'UV rays', definition: 'Invisible rays from the sun that can damage your skin' },
        { term: 'sunburn', definition: 'Red, painful skin from too much sun exposure' },
        { term: 'broad spectrum', definition: 'Sunscreen that protects against both UVA and UVB rays' },
      ],
      analogies: [
        'Sunscreen is like an invisible shield that blocks harmful sun rays.',
        'UVA rays are like aging rays (A for Aging), UVB rays are like burning rays (B for Burning).',
      ],
      examples: [
        'A family going to the beach applies sunscreen before leaving home and brings it to reapply every 2 hours.',
        'A construction worker wears long sleeves, a wide-brimmed hat, and applies sunscreen to exposed skin.',
      ],
    },
    2: {
      level: 2,
      summary: 'Photoprotection involves understanding UV radiation types, sunscreen mechanisms, and comprehensive sun-safe behaviors to prevent acute and chronic photodamage.',
      explanation: `Ultraviolet radiation causes both acute (sunburn) and chronic (photoaging, skin cancer) damage to the skin. Comprehensive photoprotection is essential for skin health.

## UV Radiation

### Types
| Type | Wavelength | % Reaching Earth | Effects |
|------|------------|------------------|---------|
| UVC | 100-290nm | 0% (blocked by ozone) | Most carcinogenic but blocked |
| UVB | 290-320nm | 5% | Sunburn, direct DNA damage, vitamin D |
| UVA | 320-400nm | 95% | Photoaging, indirect DNA damage |

### UVB Effects
- Direct DNA absorption → pyrimidine dimers
- Erythema (sunburn)
- Vitamin D synthesis
- Melanin production (delayed tanning)
- Peak intensity: 10am - 4pm

### UVA Effects
- Deeper penetration (dermis)
- Reactive oxygen species generation
- Indirect DNA damage
- Photoaging (wrinkles, pigmentation)
- Consistent intensity throughout day
- Penetrates glass

## Skin Phototypes (Fitzpatrick Scale)
| Type | Description | Sunburn Risk | Tan |
|------|-------------|--------------|-----|
| I | Pale white, red hair | Always burns | Never tans |
| II | White, fair | Burns easily | Tans minimally |
| III | Cream white | Sometimes burns | Tans uniformly |
| IV | Brown | Rarely burns | Tans easily |
| V | Dark brown | Very rarely burns | Tans very easily |
| VI | Black | Never burns | Deeply pigmented |

## Sunscreens

### SPF (Sun Protection Factor)
- Measures UVB protection
- SPF 30 blocks 97% of UVB
- SPF 50 blocks 98% of UVB
- Higher SPF marginal benefit after 30

### Broad Spectrum
- Must also protect against UVA
- FDA requires critical wavelength ≥370nm
- Look for "Broad Spectrum" on label

### Sunscreen Types

**Chemical (Organic) Filters**:
- Absorb UV and convert to heat
- Examples: Oxybenzone, avobenzone, octinoxate
- Cosmetically elegant
- May cause irritation in some

**Physical (Inorganic) Filters**:
- Reflect and scatter UV
- Zinc oxide, titanium dioxide
- Broad spectrum naturally
- May leave white cast (improved with micronized forms)

### Application Guidelines
- Apply 15-30 minutes before sun exposure
- Amount: 2mg/cm² (about 1oz for full body)
- Reapply every 2 hours
- Reapply after swimming, sweating, toweling
- Don't forget ears, lips, feet, scalp

## Sun-Safe Behaviors

### Shade Seeking
- UV highest 10am - 4pm
- Shadow rule: If shadow is shorter than you, seek shade
- Shade structures reduce UV 50-95%

### Protective Clothing
- Tightly woven fabrics
- UPF (Ultraviolet Protection Factor) rated clothing
- Wide-brimmed hats (3+ inches)
- UV-blocking sunglasses

### Environmental Factors
- Altitude: UV increases 4% per 1000 feet
- Reflection: Snow 80%, sand 15%, water 10%
- Latitude: Higher UV near equator
- Season: Summer > Winter

## Special Populations
- Children: Especially sun-sensitive, establish habits early
- Immunocompromised: Higher skin cancer risk
- Photosensitizing medications: Increased sun sensitivity
- Outdoor workers: Occupational exposure guidelines`,
      keyTerms: [
        { term: 'Fitzpatrick phototype', definition: 'Classification of skin type based on sun sensitivity and tanning ability' },
        { term: 'broad spectrum', definition: 'Sunscreen providing protection against both UVA and UVB radiation' },
        { term: 'UPF', definition: 'Ultraviolet Protection Factor - rating for sun-protective clothing' },
        { term: 'chemical sunscreen', definition: 'Sunscreen using organic compounds that absorb UV radiation' },
        { term: 'physical sunscreen', definition: 'Sunscreen using mineral particles that reflect UV radiation' },
      ],
      analogies: [
        'SPF is like a multiplication factor for how long you can stay in the sun before burning.',
        'Physical sunscreens work like tiny mirrors bouncing UV rays away from skin.',
      ],
    },
    3: {
      level: 3,
      summary: 'Photoprotection science encompasses UV-induced molecular damage, sunscreen photochemistry, and evidence-based prevention strategies for photodamage and skin cancer.',
      explanation: `## Photobiology of UV Damage

### Direct DNA Damage (UVB)
**Cyclobutane Pyrimidine Dimers (CPDs)**:
- Adjacent pyrimidines covalently linked
- Most common UV lesion
- Thymine dimers predominant
- Repaired by nucleotide excision repair (NER)

**6-4 Photoproducts**:
- Less common than CPDs
- More mutagenic
- Also NER substrates

### Indirect DNA Damage (UVA)
**Reactive Oxygen Species**:
- Singlet oxygen
- Hydroxyl radical
- Superoxide anion

**Oxidative Lesions**:
- 8-oxo-guanine (mutagenic)
- Lipid peroxidation
- Protein oxidation

### UV Signature Mutations
- C→T transitions at dipyrimidine sites
- CC→TT tandem mutations
- Characteristic of UV mutagenesis
- Found in skin cancer driver genes (p53, BRAF)

## Cellular Responses to UV

### Immediate Effects
- Erythema (vasodilation)
- Langerhans cell depletion
- Immunosuppression
- DNA damage

### Delayed Effects
- Melanogenesis (pigmentation)
- Epidermal hyperplasia
- DNA repair
- p53 activation

### Chronic Effects
- Elastosis (solar elastosis)
- Collagen degradation (MMP induction)
- Pigmentary changes
- Carcinogenesis

## Sunscreen Photochemistry

### Chemical Filter Mechanisms
**Absorption Process**:
1. UV photon absorbed
2. Molecule reaches excited state
3. Energy dissipated as heat (internal conversion)
4. Return to ground state
5. Cycle repeats

**Key Filters**:
| Filter | UVB | UVA | Notes |
|--------|-----|-----|-------|
| Avobenzone | - | +++ | Photolabile, needs stabilizers |
| Oxybenzone | ++ | + | Broad, but safety concerns |
| Octinoxate | +++ | - | UVB only |
| Octocrylene | ++ | - | Stabilizes avobenzone |
| Ecamsule (Mexoryl) | - | ++ | Photostable UVA |

### Physical Filter Mechanisms
**Zinc Oxide**:
- Broad spectrum (UVB + UVA)
- Particle size affects cosmesis
- Photostable
- Reflects and absorbs UV

**Titanium Dioxide**:
- Primarily UVB, some UVA
- Micronized for better cosmesis
- Photocatalytic activity (coated particles reduce)

### Photostability
- Challenge: Filters degrade under UV
- Avobenzone particularly unstable
- Stabilization: Octocrylene, bemotrizinol
- Encapsulation technologies

## Efficacy Testing

### SPF Testing (ISO 24444)
- 20 subjects, skin types I-III
- Minimal Erythema Dose (MED)
- SPF = MEDprotected / MEDunprotected
- In vivo testing required

### UVA Protection
- Critical wavelength (≥370nm for broad spectrum)
- UVA-PF (UVA protection factor)
- PPD (Persistent Pigment Darkening)
- PA system (Japan): PA+ to PA++++

### Water Resistance
- 40 or 80 minutes water resistance
- Tested with water immersion protocol
- Reapplication still recommended

## Evidence for Photoprotection

### Skin Cancer Prevention
- Regular sunscreen use reduces SCC by 40%
- Reduces melanoma risk (Australian study)
- Greater benefit with early-life use

### Photoaging Prevention
- Reduces fine wrinkles
- Reduces pigmentation
- Prevents solar elastosis

### Vitamin D Considerations
- Sunscreen reduces vitamin D synthesis
- Real-world use shows minimal impact
- Supplementation if needed
- Benefits of sun protection outweigh risks

## Emerging Sunscreen Technologies

### New UV Filters
- Bemotrizinol (Tinosorb S): Photostable UVA/UVB
- Bisoctrizole (Tinosorb M): Organic/inorganic hybrid
- Iscotrizinol (Uvinul A+): UVA, photostable

### Antioxidant Supplementation
- Vitamins C, E
- Polyphenols
- Complement UV filters
- Neutralize ROS generated despite filters

### DNA Repair Enzymes
- Photolyase (encapsulated)
- T4 endonuclease V
- Theoretical benefit, limited evidence`,
      keyTerms: [
        { term: 'cyclobutane pyrimidine dimer', definition: 'UV-induced DNA lesion linking adjacent pyrimidine bases (CPD)' },
        { term: 'avobenzone', definition: 'Common UVA-absorbing chemical sunscreen filter' },
        { term: 'minimal erythema dose', definition: 'Lowest UV dose causing visible redness, used in SPF testing (MED)' },
        { term: 'photostability', definition: 'Ability of sunscreen filter to maintain protection under UV exposure' },
        { term: 'critical wavelength', definition: 'Measure of UVA protection breadth in sunscreens' },
      ],
      clinicalNotes: 'Real-world sunscreen efficacy is lower than SPF suggests due to inadequate application. Combination of sunscreen + protective clothing provides best protection. Daily sunscreen use reduces photoaging even in adults.',
    },
    4: {
      level: 4,
      summary: 'Advanced photoprotection science integrates molecular mechanisms of UV damage, sunscreen formulation science, and emerging strategies for comprehensive prevention.',
      explanation: `## Molecular Mechanisms of Photocarcinogenesis

### p53 and UV
**Normal Function**:
- Guardian of the genome
- Cell cycle arrest for DNA repair
- Apoptosis if damage irreparable

**UV-Induced Dysfunction**:
- C→T mutations at dipyrimidine sites
- Loss of function
- Clonal expansion of mutant cells
- Early event in skin carcinogenesis

### UV Immunosuppression
**Mechanisms**:
- Langerhans cell depletion
- Cis-urocanic acid formation
- Regulatory T cell induction
- Cytokine shift (IL-10, TNF-α)

**Consequences**:
- Impaired tumor surveillance
- Enhanced tumor development
- Systemic immunosuppression

### Melanogenesis Signaling
**UV-Induced Pathway**:
1. UV damages DNA → p53 activation
2. POMC gene transcription
3. α-MSH release from keratinocytes
4. MC1R activation on melanocytes
5. cAMP → MITF → melanin synthesis

**MC1R Variants**:
- Red hair color (RHC) variants
- Reduced melanin production
- Increased melanoma risk
- May have non-pigmentation effects

## Advanced Sunscreen Formulation

### Particle Engineering
**Nano vs Micronized**:
- Nano (<100nm): Better cosmesis, deeper penetration concerns
- Micronized (100-200nm): Balanced cosmesis/safety
- Coated particles: Reduce photocatalytic activity

**Studies on Penetration**:
- Intact skin: Minimal penetration
- Compromised barrier: Some penetration
- Current evidence: Safe for topical use

### Formulation Considerations
**Vehicle Effects**:
- Emulsion type (o/w vs w/o)
- Substantivity (skin adherence)
- Spreadability
- Sensory properties

**Stability Challenges**:
- Avobenzone + zinc oxide interaction
- Photodegradation
- Chemical incompatibilities
- Solved by encapsulation, stabilizers

### Film-Forming Technology
- Continuous film for protection
- Polymer-based approaches
- Improved water resistance
- Reduced reapplication frequency claims

## Regulatory Landscape

### US FDA
- OTC Drug (monograph system)
- Limited approved filters
- SPF cap at 60+ proposed
- Ongoing safety review (PABA, oxybenzone)

### EU
- Cosmetic regulation
- More approved filters
- Broader UVA protection requirements
- No SPF cap

### Recent Safety Concerns
**Oxybenzone**:
- Systemic absorption demonstrated
- Endocrine disruption concerns
- Coral reef toxicity
- Hawaiian/Key West bans

**PABA**:
- Photosensitizer
- Allergic reactions
- Rarely used now

**FDA GRASE Status**:
- Generally Recognized as Safe and Effective
- Zinc oxide, titanium dioxide: GRASE
- Many chemical filters: Insufficient data

## Comprehensive Photoprotection Strategy

### Primary Prevention Levels
1. **Behavioral**: Shade, timing, clothing
2. **Barrier**: Sunscreen, hats, glasses
3. **Systemic**: Oral photoprotection (emerging)

### Oral Photoprotection
**Polypodium leucotomos Extract**:
- Fern extract
- Antioxidant, anti-inflammatory
- Reduces UV erythema
- Adjunct, not replacement

**Nicotinamide**:
- Reduces AKs and skin cancers
- Enhances DNA repair (NAD+ precursor)
- 500mg BID

**Dietary Antioxidants**:
- Green tea polyphenols
- Lycopene (tomatoes)
- Beta-carotene (at doses, pro-oxidant risk)

### Photosensitizing Medications
| Drug Class | Examples |
|------------|----------|
| Antibiotics | Tetracyclines, fluoroquinolones |
| Diuretics | Thiazides, furosemide |
| NSAIDs | Piroxicam, naproxen |
| Antifungals | Voriconazole |
| Chemotherapy | 5-FU, vemurafenib |

**Management**:
- Enhanced sun protection
- Avoid peak sun hours
- Consider alternative medications

## High-Risk Populations

### Organ Transplant Recipients
- 65-250x increased skin cancer risk
- Aggressive photoprotection essential
- mTOR inhibitor switch (sirolimus) reduces risk
- Regular dermatologic surveillance

### Xeroderma Pigmentosum
- Defective NER
- Extreme UV sensitivity
- 1000x melanoma risk
- Strict photoprotection required
- UV-protective visors, films

### Photosensitivity Disorders
- Solar urticaria
- Chronic actinic dermatitis
- Polymorphic light eruption
- Photoaggravated diseases (lupus, dermatomyositis)`,
      keyTerms: [
        { term: 'GRASE', definition: 'Generally Recognized as Safe and Effective - FDA designation for OTC drugs' },
        { term: 'Polypodium leucotomos', definition: 'Fern extract used as oral photoprotectant' },
        { term: 'MC1R variants', definition: 'Melanocortin-1 receptor gene variants affecting melanin type and cancer risk' },
        { term: 'substantivity', definition: 'Ability of sunscreen to adhere to skin despite water or sweat' },
        { term: 'nucleotide excision repair', definition: 'DNA repair pathway that removes UV-induced lesions (NER)' },
      ],
      clinicalNotes: 'Nicotinamide 500mg BID reduces non-melanoma skin cancer in high-risk patients. Voriconazole causes severe photosensitivity - enhanced protection and monitoring required. Oral photoprotection supplements physical protection but does not replace it.',
    },
    5: {
      level: 5,
      summary: 'Expert-level photoprotection encompasses molecular damage mechanisms, precision sunscreen science, public health strategies, and emerging technologies for optimal UV protection.',
      explanation: `## Precision Photoprotection

### Individualized Risk Assessment
**Factors to Consider**:
- Fitzpatrick phototype
- Family history (melanoma, NMSC)
- Personal history of skin cancer
- MC1R variants (genetic testing emerging)
- Immunosuppression status
- Occupational/recreational exposure
- Geographic location

**Risk-Stratified Recommendations**:
| Risk Level | Sun Protection Strategy |
|------------|-------------------------|
| Standard | SPF 30, reapply, seek shade |
| Elevated | SPF 50, daily use, protective clothing |
| High | Comprehensive, regular surveillance |
| Very High | Maximum protection, surveillance, chemoprevention |

### Emerging Biomarkers
- UV-induced DNA damage markers
- Vitamin D optimization balance
- Immunological markers
- Field cancerization assessment

## Advanced Sunscreen Science

### Next-Generation Filters
**Biosensitive Filters**:
- Respond to UV intensity
- Enhanced protection when needed
- Reduced unnecessary exposure

**Encapsulation Technologies**:
- Improved photostability
- Reduced systemic absorption
- Controlled release
- Enhanced substantivity

### Beyond UV
**Visible Light Protection**:
- Blue light (HEV) concerns
- Melasma exacerbation
- Iron oxide pigments provide visible light protection
- Tinted sunscreens

**Infrared Protection**:
- IR-A penetrates deeply
- Potential photoaging effects
- Antioxidants may help
- Limited filter development

### Smart Sunscreens
**UV Sensors**:
- Wearable UV monitors
- App-connected devices
- Real-time exposure tracking
- Reapplication reminders

**Color-Changing Indicators**:
- Visual cue for reapplication
- Degradation indicators
- Consumer compliance tool

## Public Health Approaches

### Prevention Programs
**Australia (SunSmart)**:
- Population-level education
- Slip, Slop, Slap, Seek, Slide
- School programs
- UV index adoption

**US Surgeon General's Call to Action (2014)**:
- Comprehensive strategy
- Reducing tanning bed use
- Increasing shade availability
- Sunscreen accessibility

### Policy Interventions
- Tanning bed regulations (age restrictions)
- Shade requirements in public spaces
- Outdoor worker protections
- School sun safety policies

### Addressing Disparities
- Skin cancer education for all skin types
- Access to affordable sunscreen
- Cultural messaging adaptation
- Healthcare provider training

## Environmental Considerations

### Coral Reef Safety
**Concerning Ingredients**:
- Oxybenzone
- Octinoxate
- Some nanoparticles

**Reef-Safe Formulations**:
- Mineral-based sunscreens
- Non-nano zinc oxide
- Biodegradable formulations

**Regulatory Actions**:
- Hawaii: Oxybenzone/octinoxate ban
- Key West: Similar ban
- Palau: Comprehensive ban

### Sustainability
- Biodegradable formulations
- Minimal packaging
- Reef-conscious ingredients
- Life cycle assessment

## Clinical Decision-Making

### Photosensitivity Disorders
**Diagnosis**:
- Detailed sun exposure history
- Phototesting (MED, photoprovocation)
- Action spectrum identification
- Systemic disease evaluation

**Management**:
- Trigger avoidance
- Broad-spectrum sunscreen
- Photoprotective clothing
- Phototherapy (hardening)
- Immunosuppression (severe cases)

### Post-Procedure Care
**After Lasers/Peels**:
- Enhanced sun protection crucial
- Mineral sunscreen preferred
- PIH prevention
- Duration: 3-6 months minimum

**After Photodynamic Therapy**:
- Strict sun avoidance 48 hours
- Then enhanced protection
- Continued surveillance

### Vitamin D Optimization
**Balance Approach**:
- Sun protection benefits outweigh vitamin D concerns
- Real-world sunscreen use allows vitamin D synthesis
- Dietary sources and supplements
- Check 25(OH)D levels if concerned

## Future Directions

### Molecular Prevention
**DNA Repair Enhancement**:
- Photolyase delivery
- NER pathway modulation
- Base excision repair augmentation

**Antioxidant Optimization**:
- Targeted delivery to skin
- Combination approaches
- Timing optimization

### Technology Integration
**AI and UV Protection**:
- Personalized recommendations
- Image-based risk assessment
- Adherence monitoring
- Outcome prediction

**Wearable Technology**:
- Continuous UV monitoring
- Integration with weather data
- Personalized alerts
- Long-term exposure tracking

### Regenerative Approaches
- Reversing photodamage
- Stem cell therapies
- Gene therapies
- Senolytic approaches for photoaging`,
      keyTerms: [
        { term: 'high-energy visible light', definition: 'Blue light that may contribute to photodamage, especially in melasma (HEV)' },
        { term: 'reef-safe sunscreen', definition: 'Sunscreen formulated without ingredients harmful to coral reefs' },
        { term: 'photohardening', definition: 'Gradual UV exposure therapy to increase tolerance in photosensitivity disorders' },
        { term: 'UV index', definition: 'Scale of UV radiation intensity, guides protection needs' },
        { term: 'photolyase', definition: 'Enzyme that directly repairs UV-induced DNA damage' },
      ],
      clinicalNotes: `Expert photoprotection principles:
1. Risk-stratified approach optimizes protection while maintaining vitamin D
2. Visible light protection important for melasma patients
3. Mineral sunscreens preferred for reef safety and post-procedure
4. Population-level interventions (SunSmart) have demonstrated efficacy
5. Emerging technologies (wearables, AI) will personalize protection
6. Nicotinamide provides adjunctive cancer prevention in high-risk
7. Comprehensive protection combines behavioral, barrier, and systemic approaches`,
    },
  },

  media: [
    {
      id: 'uv-spectrum',
      type: 'diagram',
      filename: 'uv-spectrum-effects.svg',
      title: 'UV Radiation Spectrum',
      description: 'UVA, UVB, UVC wavelengths and their effects on skin',
    },
    {
      id: 'sunscreen-application',
      type: 'diagram',
      filename: 'sunscreen-application-guide.svg',
      title: 'Proper Sunscreen Application',
      description: 'Guide to adequate sunscreen amount and coverage',
    },
  ],

  citations: [
    {
      id: 'aad-sun-protection',
      type: 'website',
      title: 'AAD Sun Protection Guidelines',
      source: 'American Academy of Dermatology',
    },
    {
      id: 'who-uv-guidelines',
      type: 'website',
      title: 'WHO Ultraviolet Radiation Guidelines',
      source: 'World Health Organization',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-aging', targetType: 'topic', relationship: 'related', label: 'Skin Aging' },
    { targetId: 'dermatology-melanoma', targetType: 'condition', relationship: 'related', label: 'Melanoma' },
    { targetId: 'dermatology-skin-cancer-warning-signs', targetType: 'topic', relationship: 'related', label: 'Skin Cancer Warning Signs' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'prevention', 'public-health'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default sunProtectionContent;
