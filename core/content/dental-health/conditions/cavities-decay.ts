/**
 * Cavities and Decay - Comprehensive Educational Content
 *
 * Covers dental caries etiology, progression, prevention,
 * and treatment approaches at all complexity levels.
 */

import { EducationalContent } from '../../types';

export const cavitiesAndDecay: EducationalContent = {
  id: 'condition-cavities-decay',
  type: 'condition',
  name: 'Cavities and Tooth Decay',
  nameEs: 'Caries y Deterioro Dental',
  alternateNames: [
    'Dental Caries',
    'Tooth Decay',
    'Dental Cavities',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Cavities are holes in your teeth caused by germs and sugar. They start small but get bigger and can hurt if not fixed by a dentist.',
      explanation: `**What Is a Cavity?**

A cavity is a hole in your tooth. It happens when germs (bacteria) in your mouth eat sugar and make acid that damages your tooth.

**How Cavities Form:**

1. **You eat or drink something sugary**
   - Candy, soda, juice, even crackers and chips

2. **Germs eat the sugar**
   - Bacteria in your mouth love sugar

3. **Germs make acid**
   - The bacteria produce acid as they eat

4. **Acid damages your tooth**
   - The acid eats away at your tooth enamel
   - Over time, a hole forms - that is a cavity!

**Signs You Might Have a Cavity:**
- A tooth that hurts when you eat hot, cold, or sweet things
- A visible hole or dark spot on a tooth
- Pain when you bite down
- A toothache that does not go away

**How to Prevent Cavities:**
- Brush your teeth twice a day with fluoride toothpaste
- Floss once a day
- Eat less candy and sugary drinks
- Drink water instead of soda
- Visit the dentist twice a year

**What Happens If You Get a Cavity?**

The dentist will fix it by:
1. Numbing your tooth so it does not hurt
2. Removing the decayed (rotten) part
3. Filling the hole with a special material
4. Your tooth is fixed!

**Why Fixing Cavities Is Important:**

If you do not fix a cavity:
- It gets bigger and deeper
- It can cause a really bad toothache
- The infection can spread
- You might lose the tooth`,
      keyTerms: [
        { term: 'cavity', definition: 'A hole in a tooth caused by decay' },
        { term: 'decay', definition: 'When a tooth breaks down and gets damaged from acid' },
        { term: 'bacteria', definition: 'Tiny germs that live in your mouth and can cause cavities' },
        { term: 'enamel', definition: 'The hard, white outer layer of your tooth that protects it' },
        { term: 'filling', definition: 'Material used to fix a cavity and fill the hole' },
      ],
      analogies: [
        'Bacteria eating sugar is like a tiny factory that produces acid as waste.',
        'A cavity forming is like a pothole developing in a road - it starts small but gets bigger if not fixed.',
        'Enamel is like the shell of an egg - it protects what is inside, but once it cracks, the inside is in danger.',
      ],
      examples: [
        'If you drink soda every day, the sugar feeds the bacteria that make acid and cause cavities.',
        'A small dark spot on your tooth might be the start of a cavity - tell your dentist!',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental caries is a bacterial disease causing demineralization of tooth enamel and dentin. It progresses through stages from initial enamel lesions to pulp involvement, and is preventable through fluoride, diet modification, and oral hygiene.',
      explanation: `## Understanding Dental Caries

**Definition:** Dental caries (cavities) is a multifactorial, transmissible, infectious disease caused by bacteria that produce acids from fermentable carbohydrates, leading to tooth demineralization.

## The Caries Process

**Key Factors (Keyes Triad + Time):**
1. **Susceptible tooth**: Enamel quality, fluoride exposure
2. **Bacteria**: Streptococcus mutans, Lactobacillus species
3. **Fermentable carbohydrates**: Sugars, starches
4. **Time**: Duration of acid exposure

**Step-by-Step Process:**

| Stage | What Happens |
|-------|--------------|
| 1. Sugar intake | Carbohydrates enter mouth |
| 2. Bacterial metabolism | Bacteria ferment sugars |
| 3. Acid production | Lactic acid lowers pH |
| 4. Demineralization | Minerals dissolve from enamel |
| 5. Cavity formation | Continued acid attack creates hole |

## Stages of Caries

**Stage 1: White Spot Lesion**
- Earliest visible sign
- Enamel demineralized but not cavitated
- Appears chalky white
- Reversible with fluoride!

**Stage 2: Enamel Caries**
- Cavitation begins
- Brown/black discoloration
- No pain (enamel has no nerves)
- Requires filling

**Stage 3: Dentin Caries**
- Decay reaches softer dentin layer
- May cause sensitivity to sweets, temperature
- Spreads faster in dentin
- Needs prompt treatment

**Stage 4: Pulp Involvement**
- Infection reaches tooth nerve
- Severe pain, possible abscess
- Requires root canal or extraction

## Risk Factors

**High Risk:**
- Frequent snacking on sugary foods
- Poor oral hygiene
- Dry mouth (reduced saliva)
- Deep grooves in teeth
- Previous cavities
- Exposed root surfaces
- Orthodontic appliances

**Protective Factors:**
- Adequate saliva flow
- Fluoride exposure
- Good oral hygiene
- Dental sealants
- Regular dental visits
- Healthy diet

## Prevention Strategies

**1. Fluoride Use**
- Fluoride toothpaste (twice daily)
- Professional fluoride treatments
- Fluoridated water

**2. Diet Modification**
- Limit frequency of sugar intake
- Choose water over sugary drinks
- Eat sugary foods with meals, not as snacks

**3. Oral Hygiene**
- Brush twice daily
- Floss daily
- Antimicrobial rinses if recommended

**4. Professional Care**
- Regular dental exams
- Professional cleanings
- Sealants on molars
- Early detection and treatment

## Diagnosis

**How Dentists Find Cavities:**
- Visual examination
- Dental explorer (feeling for soft spots)
- Dental X-rays (bitewings)
- Laser fluorescence detection
- Transillumination

## Treatment

| Stage | Treatment |
|-------|-----------|
| White spot lesion | Fluoride, remineralization |
| Enamel caries | Small filling |
| Dentin caries | Filling |
| Large cavity | Crown |
| Pulp involvement | Root canal or extraction |`,
      keyTerms: [
        { term: 'dental caries', definition: 'The disease process of tooth decay caused by bacteria and acid; results in cavities' },
        { term: 'demineralization', definition: 'Loss of minerals (calcium, phosphate) from tooth enamel caused by acid' },
        { term: 'remineralization', definition: 'Repair of early enamel damage by redepositing minerals, aided by fluoride' },
        { term: 'Streptococcus mutans', definition: 'The main bacterium responsible for initiating tooth decay' },
        { term: 'white spot lesion', definition: 'Early sign of decay appearing as a chalky white area; can be reversed' },
        { term: 'bitewing X-ray', definition: 'Dental X-ray that shows the crowns of upper and lower teeth; used to detect cavities between teeth' },
      ],
      analogies: [
        'Demineralization is like acid rain slowly dissolving a marble statue - the minerals leach out over time.',
        'A white spot lesion is like a warning light on your car - it is telling you there is a problem before serious damage occurs.',
        'Sealants are like putting a raincoat on your teeth - they protect the grooves from decay.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental caries pathophysiology involves the ecological shift of oral biofilm toward acidogenic/aciduric bacteria, chronic demineralization-remineralization imbalance, and progression through enamel into dentin with distinct patterns based on tooth surface and patient factors.',
      explanation: `## Caries Microbiology

**Ecological Plaque Hypothesis:**

*Traditional View:*
- Specific pathogen (S. mutans) causes caries
- Focus on eliminating pathogen

*Current Understanding:*
- Environmental change (low pH) drives disease
- Ecological shift toward aciduric species
- Community dysbiosis rather than single pathogen
- pH determines cariogenic potential

**Cariogenic Bacteria:**

| Organism | Role | Characteristics |
|----------|------|-----------------|
| S. mutans | Initiation | Highly acidogenic, produces glucans |
| S. sobrinus | Initiation | Similar to S. mutans |
| Lactobacillus | Progression | Thrives in low pH, indicates active caries |
| Actinomyces | Root caries | Colonizes exposed roots |
| Bifidobacterium | Progression | Deep dentin lesions |
| Scardovia wiggsiae | Severe caries | Associated with ECC |

**Virulence Factors of S. mutans:**

1. **Acid production (acidogenicity)**
   - Ferments sugars to lactic acid
   - Creates low pH environment

2. **Acid tolerance (aciduricity)**
   - Survives and functions at low pH
   - Outcompetes non-aciduric species

3. **Glucan synthesis**
   - Glucosyltransferases (GTFs) produce sticky glucans
   - Enhanced adhesion to tooth surface
   - Biofilm matrix formation

4. **Intracellular polysaccharide storage**
   - Stores glycogen-like compounds
   - Continues acid production when dietary sugar absent

## Demineralization-Remineralization

**Chemical Equation:**

\`\`\`
Demineralization: Ca₁₀(PO₄)₆(OH)₂ + H⁺ → Ca²⁺ + HPO₄²⁻ + H₂O
(hydroxyapatite)

Remineralization: Ca²⁺ + HPO₄²⁻ + F⁻ → Ca₁₀(PO₄)₆F₂
(fluorapatite - more resistant)
\`\`\`

**Critical pH:**
- Enamel: ~5.5
- Dentin/Cementum: ~6.2
- Below critical pH: Net demineralization
- Above critical pH: Net remineralization possible

**Stephan Curve:**
- pH drops rapidly after sugar exposure
- Returns to baseline in 20-40 minutes
- Frequent snacking = prolonged low pH = more demineralization

## Caries Progression Patterns

**Enamel Caries:**

*Histology:*
1. **Surface zone**: Relatively intact (ion exchange)
2. **Body of lesion**: Greatest demineralization
3. **Dark zone**: Partial remineralization attempts
4. **Translucent zone**: Advancing front

*Clinical Progression:*
- Initial lesion: White/brown spot
- Cavitation when surface collapses
- Typically slow (months to years)

**Dentin Caries:**

*Characteristics:*
- Spreads laterally along DEJ (undermining)
- Follows dentinal tubules toward pulp
- Three zones:
  1. Infected dentin (must be removed)
  2. Affected dentin (demineralized, may remineralize)
  3. Sound dentin

*Zones of Dentin Caries:*
| Zone | Description | Treatment |
|------|-------------|-----------|
| Necrotic | Dead, contaminated | Remove |
| Infected | Bacteria in tubules | Remove |
| Affected | Demineralized, no bacteria | Can be preserved |
| Sclerotic | Tubule mineralization | Sound |

**Root Caries:**
- On exposed root surfaces (recession)
- Lower critical pH (6.2)
- Actinomyces important pathogen
- Shallower, spreading lesions
- Common in elderly

## Classification Systems

**G.V. Black Classification (by Location):**

| Class | Location |
|-------|----------|
| I | Pits and fissures (occlusal) |
| II | Proximal of posterior teeth |
| III | Proximal of anterior (not incisal) |
| IV | Proximal of anterior (incisal angle) |
| V | Cervical third of any tooth |
| VI | Cusp tips or incisal edges |

**ICDAS (International Caries Detection and Assessment System):**

| Code | Description |
|------|-------------|
| 0 | Sound |
| 1 | First visual change in enamel (seen only when dry) |
| 2 | Distinct visual change in enamel |
| 3 | Localized enamel breakdown |
| 4 | Underlying dark shadow from dentin |
| 5 | Distinct cavity with visible dentin |
| 6 | Extensive cavity with visible dentin |

## Risk Assessment

**Caries Risk Factors:**

*Biological:*
- High S. mutans / Lactobacillus counts
- Low saliva flow
- Low salivary buffering
- Visible plaque

*Behavioral:*
- Frequent sugar intake
- Poor oral hygiene
- Infrequent dental visits

*Protective:*
- Optimal fluoride exposure
- Adequate saliva
- Sealants
- Antimicrobial therapy

**CAMBRA (Caries Management by Risk Assessment):**
- Assess risk and protective factors
- Categorize as low, moderate, high, extreme risk
- Tailor prevention and treatment intensity
- Re-evaluate over time`,
      keyTerms: [
        { term: 'ecological plaque hypothesis', definition: 'Theory that environmental changes (low pH) cause microbial community shift toward caries rather than specific pathogens alone' },
        { term: 'acidogenic', definition: 'Capable of producing acid from sugar metabolism' },
        { term: 'aciduric', definition: 'Capable of surviving and functioning in acidic environments' },
        { term: 'Stephan curve', definition: 'Graph showing rapid pH drop after sugar exposure followed by gradual return to baseline' },
        { term: 'ICDAS', definition: 'International Caries Detection and Assessment System; standardized caries scoring from 0-6' },
        { term: 'affected dentin', definition: 'Demineralized but uninfected dentin that can potentially remineralize and be preserved' },
      ],
      clinicalNotes: 'ICDAS provides more nuanced lesion assessment than "cavity yes/no." White spot lesions (ICDAS 1-2) may be managed with remineralization rather than restoration. Affected dentin can be preserved; only infected dentin requires removal. Risk assessment guides prevention intensity - high-risk patients need more aggressive fluoride protocols and shorter recall intervals.',
    },
    4: {
      level: 4,
      summary: 'Advanced caries science encompasses molecular mechanisms of bacterial virulence, host susceptibility genetics, precision diagnostics, and evidence-based treatment strategies including minimal intervention dentistry and remineralization therapies.',
      explanation: `## Molecular Caries Pathogenesis

**S. mutans Virulence Regulation:**

*Two-Component Signal Transduction:*
- VicRK: Biofilm formation, stress response
- ComCDE: Quorum sensing, genetic competence
- LytST: Autolysis regulation

*Competence Stimulating Peptide (CSP):*
- Quorum sensing signal
- Regulates bacteriocin production
- Genetic competence induction
- Biofilm formation
- Potential therapeutic target

**Glucosyltransferase (GTF) System:**

*Enzymes:*
| GTF | Product | Function |
|-----|---------|----------|
| GTF-B | Water-insoluble glucan | Adhesion, biofilm structure |
| GTF-C | Mixed glucan | Biofilm matrix |
| GTF-D | Water-soluble glucan | Primer for GTF-B |

*Biofilm Significance:*
- Glucan matrix protects bacteria
- Creates diffusion barrier
- Retains organic acids
- Prevents saliva access
- GTF inhibitors under development

**Acid Production and Tolerance:**

*Glycolytic Pathway:*
- Sugar → Pyruvate → Lactic acid
- PTS system for sugar uptake
- Lactate dehydrogenase terminal enzyme

*Acid Tolerance Mechanisms:*
- F-ATPase proton extrusion
- Membrane fatty acid composition changes
- Agmatine deiminase system
- DNA repair systems

## Host Susceptibility

**Genetic Factors:**

*Enamel Formation Genes:*
| Gene | Protein | Association |
|------|---------|-------------|
| AMELX | Amelogenin | Enamel structure quality |
| ENAM | Enamelin | Enamel mineralization |
| TUFT1 | Tuftelin | Enamel-dentin interface |
| AMBN | Ameloblastin | Enamel development |

*Immune Response Genes:*
- MHC/HLA variants
- Salivary protein genes
- Taste receptor genes (dietary choices)
- Lactoferrin gene polymorphisms

**Salivary Factors:**

*Protective Components:*
| Component | Function |
|-----------|----------|
| Mucins | Lubrication, bacterial aggregation |
| sIgA | Immune exclusion |
| Lysozyme | Bacterial cell wall lysis |
| Lactoferrin | Iron sequestration |
| Histatins | Antifungal, antimicrobial |
| Statherin | Calcium/phosphate supersaturation |
| PRPs | Calcium binding, enamel protection |

*Buffering Systems:*
- Bicarbonate system (primary)
- Phosphate system
- Protein buffers

## Precision Diagnostics

**Quantitative Light-Induced Fluorescence (QLF):**
- Detects mineral loss via fluorescence change
- Quantitative measurement
- Monitor remineralization
- Research and clinical applications

**DIAGNOdent (Laser Fluorescence):**
- Detects fluorescence from bacterial metabolites
- Useful for occlusal caries
- Adjunct to visual/tactile exam
- Concerns: False positives from staining

**ICDAS-Merged Systems:**

*ICDAS + NYVAD:*
- Combines detection with activity assessment
- Active vs. arrested lesion distinction
- Guides treatment decisions

**Biomarker Testing:**

*Chair-side Options:*
- Salivary S. mutans counts
- Lactobacillus counts
- Salivary buffering capacity
- Salivary flow rate

## Evidence-Based Treatment

**Remineralization Strategies:**

*Fluoride Products:*
| Product | Concentration | Use |
|---------|---------------|-----|
| OTC toothpaste | 1000-1500 ppm | Daily |
| Prescription toothpaste | 5000 ppm | High risk |
| Fluoride varnish | 22,600 ppm | Professional application |
| Fluoride gel | 1.23% APF | Professional application |

*Non-Fluoride Agents:*
- CPP-ACP (MI Paste): Calcium phosphate delivery
- Silver diamine fluoride: Arrests active caries
- Xylitol: Reduces S. mutans
- Arginine + calcium carbonate: pH raising

**Minimal Intervention Dentistry:**

*Principles:*
1. Early detection
2. Risk assessment
3. Remineralization of early lesions
4. Minimal operative intervention
5. Repair rather than replace restorations

*Atraumatic Restorative Treatment (ART):*
- Hand instruments only
- No local anesthesia
- Glass ionomer restoration
- Useful in resource-limited settings

**Silver Diamine Fluoride (SDF):**

*Mechanism:*
- Silver: Antimicrobial, protein precipitation
- Fluoride: Remineralization
- Creates stable arrested lesion

*Evidence:*
- Arrests 81% of active caries lesions
- Non-invasive, painless
- Stains lesions black (limitation)
- FDA-cleared for sensitivity; off-label for caries

*Indications:*
- Pediatric patients unable to tolerate restorations
- Elderly with root caries
- Pre-cooperative children
- Lesions requiring temporary arrest

## Restorative Treatment

**Material Selection:**

| Material | Advantages | Disadvantages | Best Use |
|----------|------------|---------------|----------|
| Amalgam | Durable, inexpensive | Esthetics, mercury concerns | Posterior stress-bearing |
| Composite resin | Esthetic, bonded | Technique-sensitive, shrinkage | Anterior and posterior |
| Glass ionomer | Fluoride release, bonds | Lower strength | Cervical, pediatric |
| RMGI | Stronger than GI, fluoride | Less strong than composite | Class V, sandwich technique |

**Deep Caries Management:**

*Stepwise Excavation:*
1. Remove peripheral caries completely
2. Leave affected dentin over pulp
3. Place temporary restoration
4. Re-enter in 6-12 months
5. Complete excavation if no symptoms

*Selective Caries Removal:*
- Peripheral: Hard dentin only
- Pulpal: Soft/leathery acceptable
- Reduces pulp exposure risk
- Evidence supports pulp vitality preservation

*Direct Pulp Capping:*
- When pulp exposed during excavation
- MTA or calcium hydroxide
- Success varies with conditions
- Monitor for vitality`,
      keyTerms: [
        { term: 'glucosyltransferase', definition: 'Bacterial enzymes synthesizing glucan polymers from sucrose; key virulence factors for biofilm formation' },
        { term: 'CSP', definition: 'Competence Stimulating Peptide; quorum sensing signal in S. mutans regulating virulence' },
        { term: 'QLF', definition: 'Quantitative Light-Induced Fluorescence; diagnostic method quantifying enamel demineralization' },
        { term: 'SDF', definition: 'Silver Diamine Fluoride; topical agent that arrests active caries through antimicrobial and remineralizing action' },
        { term: 'minimal intervention dentistry', definition: 'Approach emphasizing prevention, early detection, remineralization, and tissue-preserving operative techniques' },
        { term: 'selective caries removal', definition: 'Evidence-based excavation leaving affected dentin over pulp to preserve vitality' },
      ],
      clinicalNotes: 'Evidence supports selective caries removal over complete caries removal for deep lesions near pulp. SDF is a valuable tool for arresting caries in patients who cannot tolerate traditional restorations. GTF inhibitors and other virulence-targeted therapies are in development. Genetic susceptibility testing may eventually guide prevention intensity but is not yet clinical standard.',
    },
    5: {
      level: 5,
      summary: 'Contemporary caries science integrates microbiome-based risk assessment, targeted antimicrobial strategies, regenerative approaches to remineralization, and precision medicine frameworks for individualized prevention and minimally invasive treatment.',
      explanation: `## Microbiome-Based Approaches

**Caries Microbiome Profiling:**

*Metagenomic Studies:*
- Beyond S. mutans focus
- Complex polymicrobial etiology
- Functional gene profiles more predictive
- Acid production potential > specific species

*Disease Signatures:*
| State | Microbial Pattern |
|-------|-------------------|
| Health | Diverse, Streptococcus mitis group |
| Early caries | Reduced diversity, increased S. mutans |
| Active caries | Lactobacillus, Bifidobacterium, Scardovia |
| Arrested caries | Shift toward health-associated species |

**Functional Metagenomics:**

*Acid Production Genes:*
- Lactate dehydrogenase (ldh)
- PTS system components
- Glycolytic enzymes

*Acid Tolerance Genes:*
- F-ATPase subunits
- Agmatine deiminase (aguA)

*Clinical Application:*
- Risk stratification by functional potential
- Guide prevention intensity
- Monitor treatment response

## Targeted Antimicrobial Strategies

**Specifically Targeted Antimicrobial Peptides (STAMPs):**

*C16G2:*
- Competence-sensing peptide targeting domain
- Antimicrobial peptide killing domain
- Selective elimination of S. mutans
- Preserves commensal flora

*Development Status:*
- Phase 2 clinical trials completed
- Effective S. mutans reduction
- No significant adverse effects
- Regulatory pathway ongoing

**Quorum Sensing Inhibition:**

*Targets:*
- CSP signaling pathway
- Histidine kinase ComD
- Response regulator ComE

*Potential Benefits:*
- Reduce virulence without killing
- Prevent resistance development
- Ecological approach

**Bacteriophage Therapy:**

*Advantages:*
- Highly specific
- Self-amplifying
- Can penetrate biofilm
- No resistance to antibiotics

*Challenges:*
- Narrow host range
- Resistance development
- Regulatory pathway
- Delivery systems

**Probiotics/Prebiotics:**

*Probiotic Strains Studied:*
| Organism | Mechanism | Evidence |
|----------|-----------|----------|
| L. reuteri | Bacteriocin production | Moderate |
| L. rhamnosus GG | Competitive exclusion | Limited |
| S. salivarius | Colonization, pH modulation | Emerging |

*Prebiotic Approach:*
- Arginine supplementation
- Metabolized by commensals
- Ammonia production raises pH
- Counters acidogenic challenge

## Advanced Remineralization

**Biomimetic Mineralization:**

*Self-Assembling Peptide (P11-4):*
- Mimics amelogenin function
- Nucleates hydroxyapatite formation
- Infiltrates enamel lesion pores
- Promotes remineralization

*Clinical Products:*
- Curodont Repair
- Applied to white spot lesions
- Evidence for lesion reduction
- Non-invasive alternative to restoration

**Nanohydroxyapatite:**

*Mechanism:*
- Directly deposits calcium phosphate
- Occludes exposed tubules
- Repairs early lesions
- Toothpaste incorporation

*Evidence:*
- Comparable to fluoride for remineralization
- May be preferred in low-fluoride contexts
- Combined formulations available

**Calcium Phosphate Technologies:**

*CPP-ACP (Recaldent):*
- Casein phosphopeptide stabilizes ions
- Delivers to enamel surface
- Synergistic with fluoride (CPP-ACPF)
- Products: MI Paste, Tooth Mousse

*Unstabilized Calcium Phosphates:*
- ACP (amorphous calcium phosphate)
- TCP (tricalcium phosphate)
- Toothpaste formulations
- Remineralizing potential

## Precision Caries Medicine

**Risk Prediction Models:**

*Machine Learning Approaches:*
- Integrate clinical, behavioral, biological data
- Predict caries development
- Guide intervention intensity
- Personalized prevention

*Variables Included:*
- Salivary biomarkers
- Microbiome profile
- Dietary patterns
- Fluoride exposure
- Genetic susceptibility
- Social determinants

**Personalized Prevention Protocols:**

| Risk Level | Assessment Tools | Interventions |
|------------|------------------|---------------|
| Low | Clinical exam, history | Standard fluoride, hygiene |
| Moderate | + Salivary testing | Enhanced fluoride, sealants |
| High | + Microbial testing | Prescription fluoride, antimicrobials |
| Extreme | + Genetic testing | Intensive protocol, SDF, frequent recalls |

## Regenerative Approaches

**Whole Tooth Regeneration Research:**

*Approaches:*
- Dental stem cell therapies
- Tooth germ transplantation
- Bioengineered tooth constructs
- Far from clinical application

**Dentin-Pulp Regeneration:**

*After Caries Removal:*
- Biodentin, MTA as pulp-capping agents
- Stimulate reparative dentin formation
- Growth factor incorporation
- Stem cell recruitment

*Emerging Strategies:*
- Decellularized matrix scaffolds
- Growth factor delivery
- Pulp stem cell implantation
- Regenerative endodontics for necrotic teeth

## Population Health Strategies

**Water Fluoridation:**

*Evidence:*
- 25% caries reduction
- Most cost-effective intervention
- Reduces disparities
- Safe at recommended levels (0.7 ppm)

*Global Status:*
- 5.7% of world population
- Variation by country/region
- Policy debates continue
- Supported by WHO, ADA, CDC

**School-Based Programs:**

*Sealant Programs:*
- Target high-risk populations
- Second molar priority
- Cost-effective
- Reduces disparities

*Fluoride Varnish Programs:*
- Community application
- 2-4 applications/year
- Effective caries reduction
- Scalable intervention

**Health Policy Considerations:**

*Sugar Taxation:*
- Reduce sugar consumption
- Evidence from Mexico, UK, others
- Industry opposition
- Part of comprehensive strategy

*Oral Health Integration:*
- Medical-dental collaboration
- Caries as chronic disease
- Social determinants approach
- Health equity focus`,
      keyTerms: [
        { term: 'STAMPs', definition: 'Specifically Targeted Antimicrobial Peptides; designed to selectively eliminate cariogenic bacteria while preserving commensals' },
        { term: 'P11-4', definition: 'Self-assembling peptide that nucleates hydroxyapatite for biomimetic enamel remineralization' },
        { term: 'functional metagenomics', definition: 'Analysis of microbial community gene expression and metabolic potential rather than just species composition' },
        { term: 'nanohydroxyapatite', definition: 'Nanoscale calcium phosphate particles for direct enamel remineralization and tubule occlusion' },
        { term: 'precision caries medicine', definition: 'Framework integrating individual risk factors, biomarkers, and genetics for personalized prevention strategies' },
        { term: 'sugar taxation', definition: 'Policy measure to reduce sugar consumption through economic incentives; population-level caries prevention' },
      ],
      clinicalNotes: `Research translation priorities:
1. STAMPs and targeted antimicrobials advancing toward clinical use - watch for FDA approval
2. Self-assembling peptides (Curodont) available in some markets for white spot lesion treatment
3. Microbiome-based risk assessment more predictive than traditional culture-based methods
4. Selective caries removal is evidence-based standard - complete caries removal near pulp increases exposure risk
5. Water fluoridation remains most cost-effective population intervention - advocate for implementation
6. SDF is underutilized tool for caries arrest in appropriate populations
7. Personalized prevention protocols optimize resource allocation based on individual risk
8. Oral health disparities require population-level interventions beyond individual clinical care`,
    },
  },

  media: [
    {
      id: 'caries-progression',
      type: 'diagram',
      filename: 'caries-progression-stages.svg',
      title: 'Caries Progression Stages',
      description: 'Illustration showing progression from white spot lesion to pulp involvement',
    },
    {
      id: 'stephan-curve',
      type: 'diagram',
      filename: 'stephan-curve-ph.svg',
      title: 'Stephan Curve',
      description: 'Graph showing pH drop after sugar exposure and recovery to baseline',
    },
  ],

  citations: [
    {
      id: 'fejerskov-caries',
      type: 'textbook',
      title: 'Dental Caries: The Disease and Its Clinical Management',
      authors: ['Fejerskov, O.', 'Nyvad, B.', 'Kidd, E.'],
      source: 'Wiley-Blackwell',
    },
    {
      id: 'ccochrane-fluoride',
      type: 'article',
      title: 'Fluoride toothpastes for preventing dental caries',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'topic-dental-hygiene-basics', targetType: 'topic', relationship: 'related', label: 'Dental Hygiene' },
    { targetId: 'procedure-dental-fillings', targetType: 'topic', relationship: 'see-also', label: 'Dental Fillings' },
    { targetId: 'structure-tooth-anatomy', targetType: 'structure', relationship: 'related', label: 'Tooth Anatomy' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['teeth', 'enamel', 'dentin'],
    topics: ['pathology', 'prevention', 'treatment'],
    keywords: ['cavities', 'dental caries', 'tooth decay', 'demineralization', 'fluoride'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cavitiesAndDecay;
