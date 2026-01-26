/**
 * Fluoride - Comprehensive Educational Content
 *
 * Covers fluoride's mechanism of action, sources, benefits,
 * recommendations, and safety considerations for dental health.
 */

import { EducationalContent } from '../types';

export const fluoride: EducationalContent = {
  id: 'topic-fluoride',
  type: 'topic',
  name: 'Fluoride',
  alternateNames: [
    'Fluoridation',
    'Fluoride Therapy',
    'Topical Fluoride',
    'Systemic Fluoride',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Fluoride is a natural mineral that makes teeth stronger and protects them from decay. It\'s found in toothpaste, most tap water, and treatments at the dentist\'s office. Fluoride is safe and greatly reduces cavities.',
      explanation: `**What is Fluoride?**

Fluoride is a mineral found naturally in water, soil, and some foods. It has been proven to prevent tooth decay and is one of the most important health discoveries of the 20th century.

**How Fluoride Helps Your Teeth:**

1. **Strengthens tooth enamel** - Makes the hard outer layer of your teeth stronger
2. **Repairs early damage** - Can actually reverse tiny cavities before they become big problems
3. **Protects against acid** - Helps teeth resist damage from acid produced by bacteria
4. **Safe and effective** - Used for over 75 years with excellent safety record

**Sources of Fluoride:**

**At Home:**
- **Fluoride toothpaste** - The most common source
- **Fluoride mouthwash** - Extra protection
- **Tap water** - Most communities add fluoride to water (check if yours does!)
- **Some bottled waters** - Check the label

**At the Dentist:**
- **Fluoride treatments** - Stronger gels or varnishes applied during checkups
- **Fluoride supplements** - Pills or drops for kids who need extra

**How Much Fluoride Do You Need?**

| Age | Fluoride Toothpaste |
|-----|---------------------|
| Babies under 2 | None (or smear) |
| Ages 2-6 | Pea-sized amount |
| Adults and kids 7+ | Full brushing |

**Fun Facts About Fluoride:**
- Community water fluoridation reduces cavities by about 25%
- Fluoride is called "nature\'s cavity fighter"
- The right amount is safe - too little doesn\'t protect, too much can cause white spots

**Remember:**
Use fluoride toothpaste twice every day, drink fluoridated water if available, and get regular fluoride treatments at the dentist!`,
      keyTerms: [
        { term: 'fluoride', definition: 'A mineral that strengthens teeth and prevents cavities' },
        { term: 'enamel', definition: 'The hard outer layer of your teeth' },
        { term: 'water fluoridation', definition: 'Adding fluoride to community water supplies to prevent tooth decay' },
        { term: 'fluorosis', definition: 'White spots on teeth from getting too much fluoride while teeth are forming' },
      ],
      analogies: [
        'Fluoride is like armor for your teeth - it makes them harder to penetrate.',
        'Fluoride in water is like vitamins in food - it\'s a small amount that does big things for your health.',
      ],
      examples: [
        'Most tap water in the US has fluoride - check with your water company.',
        'Children who drink bottled water may need fluoride supplements.',
      ],
      patientCounselingPoints: [
        'Use a pea-sized amount of toothpaste for children and a full ribbon for adults',
        'Don\'t rinse after brushing - spit but don\'t rinse to let fluoride work longer',
        'If your water isn\'t fluoridated, ask your dentist about fluoride supplements',
      ],
    },
    2: {
      level: 2,
      summary: 'Fluoride prevents dental caries through topical mechanisms including enamel remineralization, inhibition of demineralization, and interference with bacterial metabolism. Optimal delivery combines systemic (water, supplements) and topical (toothpaste, varnish) sources.',
      explanation: `## Mechanisms of Action

**Pre-eruptive (Systemic) Effects:**
- Incorporation into developing enamel during tooth formation
- Formation of fluorapatite instead of hydroxyapatite
- Fluorapatite more resistant to acid dissolution
- Critical during tooth development (birth to age 8)

**Post-eruptive (Topical) Effects:**
- Primary mechanism of caries prevention
- Enhances remineralization of early caries
- Inhibits demineralization of enamel
- Interferes with bacterial metabolism
- Forms calcium fluoride-like material on surface

**Chemical Actions:**

1. **Inhibition of Demineralization:**
   - Fluorapatite less soluble than hydroxyapatite
   - Critical pH lowered from 5.5 to ~4.5
   - Enamel more acid-resistant

2. **Enhancement of Remineralization:**
   - Accelerates deposition of calcium and phosphate
   - Attracts calcium ions to demineralized areas
   - Promotes crystal growth
   - Repairs sub-surface lesions

3. **Bacterial Inhibition:**
   - Inhibits enolase enzyme in glycolysis
   - Reduces acid production by S. mutans
   - Reduces bacterial adhesion
   - Inhibits plaque growth

## Sources and Concentrations

**Systemic Sources:**

| Source | Fluoride Concentration | Notes |
|--------|------------------------|-------|
| Optimally fluoridated water | 0.7-1.2 ppm | Community water |
| Bottled water | Variable | Check label |
| Dietary supplements | 0.25-1.0 mg | Prescription only |
| Food and beverages | Variable | Made with fluoridated water |

**Topical Sources:**

| Product | Fluoride Content | Indication |
|---------|-----------------|------------|
| Standard toothpaste | 1,000-1,500 ppm | Daily use |
| Prescription toothpaste | 5,000 ppm | High caries risk |
| Mouthrinse (OTC) | 230 ppm | Daily use |
| Mouthrinse (Rx) | 0.63% (900 ppm) | Weekly use |
| Varnish | 22,600 ppm | Professional |
| Gel/APF | 12,300 ppm | Professional |
| Foam | 1.23% APF | Professional |

**Community Water Fluoridation:**
- Optimal level: 0.7 ppm (as of 2015 USPHS recommendation)
- Lowered from previous 0.7-1.2 ppm range
- Accounts for multiple fluoride sources
- Reduces caries by ~25% across populations
- Cost-effective: Saves $38 in dental treatment per $1 invested

## Recommendations

**Toothpaste Amounts by Age:**

| Age | Amount | Reasoning |
|-----|--------|-----------|
| <3 years | Smear/rice grain | Prevent fluorosis if swallowed |
| 3-6 years | Pea-sized | Balance benefit/risk |
| >6 years | Full brush | Maximize benefit |
| Adults | Full brush | Maximize benefit |

**Professional Application:**

*Fluoride Varnish (5% NaF):*
- 22,600 ppm fluoride
- Painted on teeth
- Sets on contact with saliva
- No eating/drinking for 30 minutes
- Reapply every 3-6 months for high risk
- FDA-approved for caries prevention

*Gel/APF (1.23% Acidulated Phosphate Fluoride):*
- 12,300 ppm fluoride
- Tray application for 4 minutes
- Cannot be used with glass ionomer or composite restorations
- Professional use only

**Supplemental Fluoride:**

Only when:
- Drinking water has <0.6 ppm fluoride
- Patient is at high caries risk
- Age 6 months to 16 years (tooth formation years)

| Age | Water <0.3 ppm | Water 0.3-0.6 ppm |
|-----|----------------|-------------------|
| 6 mo - 3 yr | 0.25 mg/day | None |
| 3 - 6 yr | 0.50 mg/day | 0.25 mg/day |
| 6 - 16 yr | 1.00 mg/day | 0.50 mg/day |

## Safety

**Dental Fluorosis:**
- Caused by excessive fluoride during tooth development
- Mild: White spots or lines (cosmetic only)
- Moderate: Brown staining with pitting
- Occurs from birth to age 8
- Very mild/common: 22-40% of US population
- Concerning: Mostly cosmetic

**Acute Toxicity:**
- Lethal dose: ~5 mg fluoride/kg body weight
- 8 oz of 0.22% fluoride gel could be fatal to small child
- Professional application minimizes risk
- Poison control: 1-800-222-1222

**Other Considerations:**
- Skeletal fluorosis: Extremely rare in US (requires chronic high exposure)
- Allergy: True allergy to fluoride does not exist (reactions to other ingredients)
- Bone fractures: No evidence at recommended levels

## Effectiveness

**Caries Reduction:**
- Water fluoridation: 25% reduction
- Fluoride toothpaste: 25% reduction vs. non-fluoride
- Fluoride varnish: 33% reduction in high-risk children
- Daily mouthrinse: 30% reduction in high-risk patients

**Combination Effect:**
- Multiple sources have additive effect
- Water + toothpaste: >40% reduction
- Optimal: Use all available sources`,
      keyTerms: [
        { term: 'fluorapatite', definition: 'Fluoride-containing form of tooth mineral more resistant to acid' },
        { term: 'hydroxyapatite', definition: 'Main mineral component of enamel, less acid-resistant than fluorapatite' },
        { term: 'critical pH', definition: 'pH below which enamel dissolves; lowered by fluoride' },
        { term: 'ppm', definition: 'Parts per million; concentration measurement' },
        { term: 'APF', definition: 'Acidulated phosphate fluoride; professional fluoride gel' },
      ],
      analogies: [
        'Fluorapatite is like upgrading from regular glass to tempered glass - harder and more resistant.',
        'Multiple fluoride sources are like layers of protection - each adds to the overall defense.',
      ],
      clinicalNotes: 'Topical fluoride is more important than systemic for caries prevention. Varnish is the preferred professional application - highest concentration, least ingestion risk. Fluorosis is cosmetic and can only occur during tooth development (birth to age 8).',
      patientCounselingPoints: [
        'Children should use the right amount of toothpaste for their age to prevent fluorosis',
        'Spit but don\'t rinse after brushing to let fluoride stay on teeth longer',
        'If you drink mostly bottled water, ask your dentist if you need fluoride supplements',
      ],
    },
    3: {
      level: 3,
      summary: 'Fluoride exerts its cariostatic effects primarily through topical mechanisms: formation of a calcium-fluoride-like reservoir that enhances remineralization, incorporation into enamel crystal lattice to reduce solubility, and inhibition of bacterial glycolysis via enolase inhibition.',
      explanation: `## Molecular Mechanisms

**Fluoride Interactions with Enamel:**

*Calcium Fluoride Formation:*
- CaF₂-like globules form on enamel surface
- Serves as fluoride reservoir
- Dissolves at pH <5.5, releasing fluoride ions
- Bind to plaque and pellicle
- Reservoir depletes over days-weeks

*Fluorapatite Formation:*
- F⁻ substitutes for OH⁻ in hydroxyapatite
- Formula: Ca₁₀(PO₄)₆F₂ (vs. Ca₁₀(PO₄)₆(OH)₂)
- Crystal lattice becomes more stable
- Critical pH drops from 5.5 to ~4.5
- More acid-resistant structure

*Surface Enhancement:*
- Fluoride increases surface microhardness
- Reduces enamel solubility
- Creates more regular crystal structure
- Decreases enamel permeability

**Remineralization Enhancement:**

*Ion Transport:*
- Fluoride attracts Ca²⁺ to lesion site
- Promotes precipitation of calcium phosphate
- Accelerates crystal growth
- Improves crystal morphology

*Plaque Fluid Reservoir:*
- Fluoride concentration in plaque > saliva
- Gradual release during acid challenges
- Enhances remineralization during pH recovery

**Bacterial Inhibition:**

*Enolase Inhibition:*
- Enolase: Glycolytic enzyme
- Fluoride inhibits conversion of 2-PGA to PEP
- Reduces acid production
- Inhibits intracellular polysaccharide storage
- Magnesium-dependent (Mg²⁺ required)

*Other Effects:*
- Reduced acid production
- Reduced bacterial adhesion
- Inhibition of plaque growth
- Altered bacterial metabolism

## Clinical Formulations

**Toothpaste Vehicles:**

*Fluoride Compounds:*
- Sodium fluoride (NaF): Compatible with most abrasives
- Sodium monofluorophosphate (MFP): Requires enzyme activation
- Stannous fluoride (SnF₂): Antibacterial, staining issues
- Amine fluoride: Enhanced uptake

*Concentrations:*
- OTC: 1,000-1,500 ppm
- Rx: 5,000 ppm (Prevident, Duraphat)
- Pediatric training: 500 ppm (if available)

**Professional Gels:**

*Acidulated Phosphate Fluoride (APF):*
- 1.23% APF (12,300 ppm F)
- pH 3.0-4.0 (acidic enhances uptake)
- Tray application: 4 minutes
- Contraindicated with: Ceramic, composite, glass ionomer
- Enhances fluoride uptake 3-5x

*Neutral Sodium Fluoride:*
- 2.0% NaF (9,000 ppm F)
- pH ~7.0 (neutral)
- Compatible with all restorations
- Less uptake than APF

**Varnish:**

*Composition:*
- 5% NaF in colophony/resin base
- 22,600 ppm fluoride
- Sets on contact with saliva
- Slow release over hours-days

*Application:*
- Teeth cleaned, isolated
- Thin layer applied with brush
- No rinsing for 4-6 hours (ideal) or 30 min (minimum)
- Eating avoided for 2 hours
- Reduces caries in primary teeth: 33% (systematic review)

*Mouthrinses:*

| Type | Concentration | Usage |
|------|---------------|-------|
| Daily (OTC) | 0.05% NaF (230 ppm) | Daily, rinse 1 min |
| Weekly (Rx) | 0.63% SnF₂ (900 ppm) | Weekly, rinse 1 min |
| APF rinse | 0.2% NaF (900 ppm) | Weekly, rinse 1 min |

## Age-Specific Considerations

**Infants (0-12 months):**
- No fluoride toothpaste (<6 months) or smear (<12 months)
- Breast milk/formula fluoride-free
- Water used to mix formula should be tested for fluoride
- Supplements: 0.25 mg/day if water <0.3 ppm

**Children (1-6 years):**
- Pea-sized amount at age 3-6
- Smear/rice grain at age 1-3
- Supervise brushing to prevent swallowing
- Risk of fluorosis during this period

**School Age (6-12 years):**
- Full brush of fluoride toothpaste
- Mouthrinse if high risk
- Professional varnish every 6 months (high risk)

**Adolescents and Adults:**
- Full brush of fluoride toothpaste
- Prescription toothpaste (5000 ppm) for high risk
- Daily mouthrinse if moderate/high risk

**Elderly:**
- Root caries prevention priority
- Prescription fluoride toothpaste
- Frequent professional applications
- Daily fluoride mouthrinse

## Special Populations

**Orthodontic Patients:**
- Elevated caries risk around brackets
- Daily fluoride rinse recommended
- Prescription toothpaste (5000 ppm)
- Professional varnish every 3-6 months

**Head and Neck Radiation:**
- Severe xerostomia = high caries risk
- Daily fluoride rinse + 5000 ppm toothpaste
- Custom trays for daily home fluoride gel
- Professional fluoride every 3 months

**Eating Disorders:**
- Perimylolysis from vomiting
- High-frequency fluoride application
- Rinse with baking soda after vomiting
- Avoid brushing immediately after vomiting

**Special Health Care Needs:**
- Often high caries risk
- Preventive protocols essential
- Fluoride varnish every 3 months
- May need custom trays for home use`,
      keyTerms: [
        { term: 'CaF₂', definition: 'Calcium fluoride; surface reservoir formed after topical fluoride application' },
        { term: 'enolase', definition: 'Glycolytic enzyme inhibited by fluoride' },
        { term: 'perimylolysis', definition: 'Erosion of teeth due to frequent vomiting (eating disorders, GERD)' },
        { term: 'colophony', definition: 'Resin base for fluoride varnish; also called rosin' },
      ],
      clinicalNotes: 'Varnish is preferred for young children due to minimal ingestion risk. Professional APF gel is contraindicated with esthetic restorations (etches porcelain/composite). 5000 ppm toothpaste is first-line for high caries risk adults. Fluoride supplements only when water is deficient.',
      patientCounselingPoints: [
        'Fluoride varnish is safe even for infants - the amount used is tiny',
        'Swallowing toothpaste can cause fluorosis in young children - supervise brushing',
        'Prescription fluoride toothpaste (5000 ppm) is recommended if you have frequent cavities',
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary fluoride science explores optimal delivery methods, pharmacokinetics, and interactions with other preventive agents. Evidence supports targeted fluoride protocols based on individual caries risk, with topical exposure being more important than systemic ingestion.',
      explanation: `## Evidence-Based Fluoride Protocols

**Caries Risk-Based Protocols:**

*Low Risk:*
- 1000-1500 ppm toothpaste twice daily
- Community water fluoridation if available
- No professional fluoride generally needed
- Biannual dental visits

*Moderate Risk:*
- 1000-1500 ppm toothpaste twice daily
- Daily fluoride mouthrinse (0.05% NaF)
- Professional fluoride varnish annually
- Consider 5000 ppm toothpaste

*High Risk:*
- 5000 ppm toothpaste twice daily
- Daily fluoride mouthrinse
- Professional fluoride varnish every 3-6 months
- Home fluoride gel (custom trays) if indicated
- Consider silver diamine fluoride for active lesions

**Delivery System Comparisons:**

| Method | Reduction in DMFS | Cost | Convenience |
|--------|-------------------|------|-------------|
| Water fluoridation | 25-40% | Low | Passive |
| Fluoride toothpaste | 25% | Low | Active |
| Mouthrinse | 30% | Low | Active |
| Varnish | 33% (high risk) | Medium | Professional |
| Home gel | 40%+ | Medium | Active |

**Optimal Timing and Frequency:**

*Daily Toothpaste:*
- Twice daily brushing standard
- Morning and night (night more critical)
- Spitting, not rinsing, increases benefit

*Professional Varnish:*
- Every 6 months: Standard preventive
- Every 3 months: High caries risk
- Evidence supports both intervals

*Mouthrinse:*
- Daily use for high risk
- Weekly use for moderate risk
- Use at different time than brushing

**Pharmacokinetics:**

*Absorption:*
- Gastrointestinal: ~90% absorption
- Topical: Minimal systemic absorption
- Rapidly absorbed, peak plasma 30-60 minutes

*Distribution:*
- 99% bound to calcified tissues (bone, teeth)
- Crosses placenta
- Present in breast milk (concentration similar to plasma)

*Elimination:*
- Renal excretion: ~50% within 24 hours
- Half-life: Several hours in plasma, years in bone
- Minimal metabolism

## Fluoride Plus Other Agents

**Fluoride + Calcium Phosphate:**
- CPP-ACP: Casein phosphopeptide-amorphous calcium phosphate
- Delivers calcium, phosphate, and fluoride
- Evidence: Enhanced remineralization vs. fluoride alone
- Products: MI Paste, MI Paste Plus

**Fluoride + Antimicrobials:**
- Chlorhexidine + fluoride: Synergistic for high risk
- Sequential vs. simultaneous application matters
- Short-term CHX + long-term fluoride

**Fluoride + Silver Diamine Fluoride:**
- 38% SDF for caries arrest
- Silver (antimicrobial) + fluoride (remineralization)
- Draws from both compounds
- Indicated: Active caries, unable to restore

## Controversies and Debates

**Systemic vs. Topical:**
- Current consensus: Topical more important
- Pre-eruptive benefit minimal
- Water fluoridation works topically (present in saliva)

**Optimal Concentration:**
- Toothpaste: 1000-1500 ppm standard
- Higher concentrations not significantly more effective
- 5000 ppm for high risk: Evidence supports

**Fluorosis vs. Caries Prevention:**
- Prevalent mild fluorosis: Acceptable trade-off
- Fluorosis decreasing with current guidelines
- Caries prevention outweighs cosmetic concerns

**Water Fluoridation Opposition:**
- Scientific consensus: Safe and effective
- Opposing arguments: Informed consent, mass medication
- Evidence: One of 10 great public health achievements (CDC)

## Safety in Detail

**Fluorosis Epidemiology:**
- Prevalence: ~22% (very mild/mild)
- Aesthetically concerning: <2%
- Greatest risk: 15-24 months (incisors)
- Maximum risk: Birth to age 3

**Acute Toxicity Revisited:**
- Probable toxic dose: 5 mg F/kg
- Certainly lethal dose: 15-30 mg F/kg
- Treatment: Calcium (milk), vomiting induction, medical care
- Prevention: Child-resistant packaging, small quantities

**Other Health Concerns:**
- IQ studies: Mixed results, confounded by high fluoride areas
- Bone: No evidence at optimal levels
- Cancer: No credible evidence
- Thyroid: No evidence at 0.7 ppm
- Kidney: No evidence at optimal levels

## Professional Recommendations

**ADA Policy:**
- Supports community water fluoridation at 0.7 ppm
- Fluoride toothpaste for all ages
- Professional fluoride based on caries risk
- Supplements only when water deficient

**USPSTF (2016):**
- Recommends fluoride supplementation for children with inadequate water fluoride
- Grade B recommendation for children 6 months to 6 years

**AAP Recommendations:**
- Fluoride toothpaste smear from tooth eruption
- Pea-sized at age 3
- Varnish for all children every 3-6 months`,
      keyTerms: [
        { term: 'CPP-ACP', definition: 'Casein phosphopeptide-amorphous calcium phosphate; remineralization agent' },
        { term: 'DMFS', definition: 'Decayed, missing, filled surfaces; caries measurement' },
        { term: 'USPSTF', definition: 'US Preventive Services Task Force; evidence-based guideline organization' },
      ],
      clinicalNotes: 'Fluoride varnish is now recommended for all children by AAP and ADA. 5000 ppm toothpaste is cost-effective for high-risk adults. Water fluoridation remains the most cost-effective preventive measure.',
    },
    5: {
      level: 5,
      summary: 'Current fluoride research explores novel delivery systems, combination therapies with biomimetic agents, and personalized protocols based on genetic susceptibility and microbiome analysis. The future of caries prevention integrates fluoride with precision medicine approaches.',
      explanation: `## Emerging Fluoride Technologies

**Novel Delivery Systems:**

*Nanoparticle Fluoride:*
- Nanohydroxyapatite-fluoride combinations
- Enhanced enamel penetration
- Prolonged release
- Improved bioavailability

*Fluoride-Releasing Materials:*
- Glass ionomers: Continuous fluoride release
- Resin-modified glass ionomers
- Fluoride-releasing composites
- Amalgam: No fluoride (but reduces bacteria)

*Slow-Release Devices:*
- Intraoral fluoride-releasing devices
- Copolymer matrix-controlled release
- Experimental, not clinically available

**Combination Therapies:**

*Fluoride + CPP-ACP:*
- Recaldent: MI Paste/Plus
- Mechanism: Stabilizes calcium-phosphate, delivers fluoride
- Evidence: Superior to fluoride alone for white spot lesions
- Status: Available clinically

*Fluoride + Bioactive Glass:*
- Releases calcium, phosphate, fluoride, silica
- Forms hydroxycarbonate apatite
- Used in sensitivity treatment
- Synergistic remineralization

*Fluoride + Peptide Therapies:*
- Curodont (P11-4): Self-assembling peptide
- Biomimetic enamel regeneration
- Early lesion infiltration
- Experimental outside of Europe

*Fluoride + Silver Diamine Fluoride:*
- SDF: 38% silver + fluoride
- Arrests caries, prevents progression
- 70-90% arrest rates
- Side effect: Black staining
- Indication: Priority populations, unable to restore

## Precision Fluoride Therapy

**Genetic Considerations:**
- Amelogenin gene variants (AMELX): Altered enamel
- MMP20, KLK4 variants: Enamel maturation defects
- CA6 polymorphisms: Salivary proteins
- Future: Genetic-based fluoride dosing

**Microbiome-Based Protocols:**
- High S. mutans counts: Aggressive fluoride
- Aciduric species dominance: Enhanced frequency
- Microbiome testing guides recall intervals
- Fluoride + antimicrobial combinations

**Biomarker-Guided Therapy:**
- Salivary biomarkers: IL-1β, MMP-8
- Plaque pH monitoring
- Demineralization indicators
- Personalized frequency

## Future Directions

**Fluoride Alternatives and Adjuncts:**
- Nano-hydroxyapatite toothpaste
- Arginine bicarbonate (pH elevation)
- Theobromine (cocoa derivative)
- Peptide-guided mineralization
- Enzyme-modifying approaches

**Regenerative Approaches:**
- Biomimetic enamel repair
- Stem cell applications
- Gene therapy for enamel defects
- 3D bioprinting (concept stage)

**Optimization Research:**
- Optimal timing of multiple fluoride sources
- Synergy with other preventive agents
- Individualized risk-based protocols
- Cost-effectiveness modeling

**Implementation Science:**
- Dissemination of evidence-based protocols
- Provider adoption barriers
- Patient adherence strategies
- Public health messaging

## Global Perspectives

**Water Fluoridation:**
- US: ~73% of population on fluoridated water
- Canada: ~39%
- UK: ~10% (mainly England)
- Australia: ~90%
- Europe: Mostly discontinued (salt fluoridation common)
- Developing world: Expanding access

**Salt Fluoridation:**
- Alternative to water fluoridation
- Used in: Germany, Switzerland, France, Jamaica
- 200-250 mg F/kg salt
- Comparable efficacy to water

**Milk Fluoridation:**
- School-based programs
- 2.5-5.0 mg F/L milk
- Used in: UK, Thailand, Chile
- Targets children specifically

## Clinical Translation

**Current Best Practice:**

1. Risk-based fluoride protocols
2. Twice daily brushing with fluoride toothpaste
3. Professional fluoride based on risk
4. Consider combination therapies for high risk
5. Water fluoridation where available

**Research Priorities:**
- Optimal fluoride protocols for different risk profiles
- Long-term effectiveness of novel materials
- Combination therapy optimization
- Dissemination research

**Implementation:**
- CAMBRA integration
- Electronic health record decision support
- Patient education materials
- Provider continuing education`,
      keyTerms: [
        { term: 'nanohydroxyapatite', definition: 'Nanoscale hydroxyapatite crystals for remineralization' },
        { term: 'bioactive glass', definition: 'Glass that releases ions promoting mineralization' },
        { term: 'CAMBRA', definition: 'Caries Management by Risk Assessment; systematic approach' },
      ],
      clinicalNotes: `Future practice:
1. Genetic testing may identify optimal fluoride protocols
2. Salivary diagnostics will guide recall intervals and frequency
3. Combination therapies (fluoride + CPP-ACP) will become standard
4. SDF will expand access to caries arrest worldwide
5. Biomimetic approaches may reduce reliance on fluoride alone`,
    },
  },

  media: [
    {
      id: 'fluoride-mechanism',
      type: 'diagram',
      filename: 'fluoride-mechanism-of-action.svg',
      title: 'How Fluoride Works',
      description: 'Mechanisms of fluoride action on tooth enamel',
    },
  ],

  citations: [
    {
      id: 'cdc-fluoridation',
      type: 'website',
      title: 'Community Water Fluoridation - CDC',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/fluoridation/',
    },
    {
      id: 'ada-fluoride',
      type: 'article',
      title: 'Fluoride Topical and Systemic Supplements',
      authors: ['ADA Council on Scientific Affairs'],
      source: 'Journal of the American Dental Association',
      chapter: '2014',
    },
  ],

  crossReferences: [
    { targetId: 'condition-tooth-decay', targetType: 'condition', relationship: 'related', label: 'Tooth Decay' },
    { targetId: 'topic-oral-hygiene', targetType: 'topic', relationship: 'related', label: 'Oral Hygiene' },
    { targetId: 'topic-dental-diet', targetType: 'topic', relationship: 'related', label: 'Dental Diet' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['enamel', 'dentin'],
    topics: ['prevention', 'pharmacology', 'public-health'],
    keywords: ['fluoride', 'caries prevention', 'fluoridation', 'toothpaste', 'varnish', 'fluorosis'],
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

export default fluoride;
