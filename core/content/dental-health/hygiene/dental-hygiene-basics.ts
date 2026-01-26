/**
 * Dental Hygiene Basics - Comprehensive Educational Content
 *
 * Covers fundamental oral hygiene practices, daily care routines,
 * and the science behind maintaining good oral health.
 */

import { EducationalContent } from '../../types';

export const dentalHygieneBasics: EducationalContent = {
  id: 'topic-dental-hygiene-basics',
  type: 'topic',
  name: 'Dental Hygiene Basics',
  alternateNames: [
    'Oral Hygiene Fundamentals',
    'Basic Dental Care',
    'Daily Oral Care',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Keeping your teeth and mouth clean every day helps prevent cavities, gum problems, and bad breath. Brushing twice a day and flossing are the most important things you can do.',
      explanation: `**Why Is Dental Hygiene Important?**

Your mouth is home to millions of tiny germs called bacteria. Some bacteria are helpful, but others can cause problems like cavities and gum disease. Good dental hygiene keeps the bad bacteria under control.

**The Basic Routine:**

1. **Brush Your Teeth Twice a Day**
   - Once in the morning after breakfast
   - Once at night before bed
   - Brush for about 2 minutes each time
   - Use a soft toothbrush and fluoride toothpaste

2. **Floss Once a Day**
   - Gets food and plaque from between teeth
   - Your toothbrush cannot reach these spots
   - Usually best to floss at night

3. **Rinse with Mouthwash (Optional)**
   - Helps kill extra germs
   - Makes breath fresh
   - Not a replacement for brushing or flossing

**What Happens If You Do Not Take Care of Your Teeth?**

- **Plaque builds up**: A sticky film of bacteria forms on teeth
- **Tartar forms**: Hardened plaque that only a dentist can remove
- **Cavities develop**: Holes in your teeth caused by acid from bacteria
- **Gums get red and puffy**: Early gum disease called gingivitis
- **Bad breath**: Bacteria cause odors

**Tips for Good Dental Hygiene:**

- Replace your toothbrush every 3-4 months
- Do not share toothbrushes with others
- Drink plenty of water
- Limit sugary snacks and drinks
- Visit the dentist twice a year`,
      keyTerms: [
        { term: 'plaque', definition: 'A sticky, colorless film of bacteria that constantly forms on your teeth' },
        { term: 'fluoride', definition: 'A mineral that makes teeth stronger and helps prevent cavities' },
        { term: 'cavity', definition: 'A hole in a tooth caused by decay from bacteria' },
        { term: 'bacteria', definition: 'Tiny living things too small to see; some cause tooth decay' },
        { term: 'tartar', definition: 'Hardened plaque that can only be removed by a dental professional' },
      ],
      analogies: [
        'Brushing your teeth is like washing dishes - you need to scrub off the food and germs before they stick.',
        'Plaque is like moss on a rock - if you leave it, it keeps growing and is harder to remove.',
        'Fluoride is like armor for your teeth, making them stronger against attacks from cavity-causing bacteria.',
      ],
      examples: [
        'If you brush twice a day, you clean off the plaque before it can harden into tartar.',
        'A cavity starts small but gets bigger over time if you do not take care of your teeth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dental hygiene involves the removal of dental plaque and prevention of plaque accumulation through mechanical and chemical means. Proper techniques and consistency are essential for preventing caries and periodontal disease.',
      explanation: `## The Science of Oral Hygiene

**Plaque Formation:**

- Begins within minutes of cleaning teeth
- Pellicle (protein layer) forms first on tooth surface
- Bacteria colonize this layer
- Mature plaque develops within 24-72 hours
- Contains hundreds of bacterial species

**Why Plaque Is Harmful:**

1. **Acid Production**
   - Bacteria metabolize sugars from food
   - Produce acids as byproduct
   - Acids dissolve tooth enamel (demineralization)
   - Leads to cavity formation

2. **Inflammation Trigger**
   - Bacterial toxins irritate gum tissue
   - Immune response causes inflammation (gingivitis)
   - Untreated gingivitis can progress to periodontitis

**The Four Pillars of Oral Hygiene:**

| Pillar | Method | Frequency |
|--------|--------|-----------|
| Toothbrushing | Manual or electric brush with fluoride paste | 2x daily, 2 minutes |
| Interdental cleaning | Floss, interdental brushes, or water flossers | 1x daily |
| Antimicrobial rinses | Chlorhexidine or essential oil mouthwash | As directed |
| Professional care | Dental cleanings and exams | Every 6 months |

**Fluoride's Role:**

- Strengthens enamel crystal structure
- Promotes remineralization of early decay
- Inhibits bacterial metabolism
- Sources: Toothpaste, water, professional applications

**Diet and Oral Health:**

- Frequency of sugar exposure matters more than total amount
- Acidic foods/drinks (soda, citrus) erode enamel
- Cheese and dairy may be protective (calcium, casein)
- Water rinses away food particles and dilutes acids

**Common Mistakes:**

- Brushing too hard (causes gum recession, enamel wear)
- Not brushing long enough
- Forgetting to brush tongue (harbors bacteria)
- Rinsing immediately after brushing (reduces fluoride contact)
- Inconsistent flossing`,
      keyTerms: [
        { term: 'plaque', definition: 'Biofilm of bacteria, salivary proteins, and food debris adhering to tooth surfaces', pronunciation: 'PLAK' },
        { term: 'pellicle', definition: 'Thin protein layer from saliva that coats teeth within seconds of cleaning; initial surface for bacterial attachment', pronunciation: 'PEL-ih-kul' },
        { term: 'demineralization', definition: 'Loss of mineral content (calcium, phosphate) from enamel due to acid exposure' },
        { term: 'remineralization', definition: 'Redeposition of minerals into enamel, aided by fluoride and saliva' },
        { term: 'biofilm', definition: 'Organized community of microorganisms attached to a surface; dental plaque is an oral biofilm' },
        { term: 'gingivitis', definition: 'Inflammation of the gums caused by plaque accumulation; reversible with proper hygiene' },
      ],
      analogies: [
        'Plaque is like a bacterial city - different species work together and protect each other within the biofilm.',
        'Fluoride works like calcium glue, helping to patch up microscopic holes in enamel before they become cavities.',
      ],
    },
    3: {
      level: 3,
      summary: 'Oral hygiene science encompasses biofilm ecology, the caries-demineralization balance, host immune responses to plaque, and evidence-based intervention strategies. Understanding these mechanisms informs clinical recommendations and patient education.',
      explanation: `## Dental Biofilm Microbiology

**Biofilm Formation Stages:**

1. **Conditioning** (seconds)
   - Salivary glycoproteins form acquired pellicle
   - Selective adhesion sites for pioneer bacteria

2. **Initial Adhesion** (0-4 hours)
   - Pioneer species: Streptococcus sanguinis, S. oralis, Actinomyces spp.
   - Reversible then irreversible attachment

3. **Coaggregation** (4-24 hours)
   - Secondary colonizers attach to pioneers
   - Fusobacterium nucleatum as "bridge" organism

4. **Maturation** (1-14 days)
   - Complex polymicrobial community develops
   - Anaerobic niches form in deeper layers
   - Extracellular polysaccharide matrix production

5. **Climax Community**
   - Stable ecosystem unless disturbed
   - Health-associated vs. disease-associated profiles

**Cariogenic Shift:**

*Ecological Plaque Hypothesis:*
- Frequent sugar exposure → Low pH environment
- Aciduric/acidogenic species proliferate (S. mutans, Lactobacillus)
- Ecological shift from health to disease
- Not simply presence of pathogens but environmental conditions

**The Demineralization-Remineralization Balance:**

\`\`\`
Demineralization: Ca₁₀(PO₄)₆(OH)₂ + H⁺ → Ca²⁺ + HPO₄²⁻ + H₂O
Remineralization: Ca²⁺ + HPO₄²⁻ + F⁻ → Ca₁₀(PO₄)₆F₂ (fluorapatite)
\`\`\`

**Factors Affecting Balance:**

| Demineralization | Remineralization |
|------------------|------------------|
| Frequent sugar intake | Fluoride exposure |
| Low salivary flow | Adequate saliva |
| Acidogenic bacteria | Calcium/phosphate availability |
| Low pH (<5.5) | Neutral pH |
| Reduced buffering | Salivary buffers |

**Mechanical Plaque Control:**

*Toothbrushing Evidence:*
- Removes ~50% of plaque (varies with technique)
- Modified Bass technique most commonly recommended
- Electric (oscillating-rotating) may be superior to manual
- Powered brushes: Significant reduction in plaque/gingivitis (Cochrane reviews)

*Interdental Cleaning:*
- Floss: Reduces interproximal gingivitis when used correctly
- Interdental brushes: Superior to floss for plaque removal when space permits
- Water flossers: Alternative for patients with dexterity issues

**Chemical Plaque Control:**

| Agent | Mechanism | Uses |
|-------|-----------|------|
| Chlorhexidine | Cationic binding to bacteria; bactericidal | Gold standard antimicrobial; staining limits long-term use |
| Essential oils (Listerine) | Membrane disruption | Daily maintenance |
| Cetylpyridinium chloride | Cationic antimicrobial | OTC rinses |
| Stannous fluoride | Antimicrobial + remineralization | Toothpaste, rinses |
| Triclosan | Inhibits bacterial enzyme | Discontinued in many products |

**Fluoride Mechanisms:**

1. Systemic (during development): Incorporation into enamel structure
2. Topical (posteruptive):
   - Inhibits demineralization
   - Enhances remineralization
   - Inhibits bacterial glycolysis (enolase enzyme)
   - Forms calcium fluoride reservoirs on enamel`,
      keyTerms: [
        { term: 'acquired pellicle', definition: 'Acellular protein film derived from saliva that forms on tooth surfaces; substrate for bacterial adhesion' },
        { term: 'ecological plaque hypothesis', definition: 'Theory that environmental changes (low pH) shift microbial community from health to disease rather than specific pathogens' },
        { term: 'coaggregation', definition: 'Cell-to-cell recognition between genetically distinct bacteria enabling biofilm complexity' },
        { term: 'Streptococcus mutans', definition: 'Acidogenic/aciduric bacterium strongly associated with dental caries initiation' },
        { term: 'chlorhexidine', definition: 'Bis-biguanide antiseptic with broad-spectrum activity; gold standard chemical plaque control agent' },
        { term: 'critical pH', definition: 'pH below which enamel dissolution occurs (~5.5 for enamel, ~6.2 for root surface)' },
      ],
      clinicalNotes: 'The critical pH concept explains why frequency of sugar exposure matters more than total amount - each exposure triggers an acid attack. Recommend limiting snacking rather than total sugar elimination. Chlorhexidine use should be limited to 2-4 weeks due to staining and taste alteration; it is best for acute situations (post-surgery, severe gingivitis).',
    },
    4: {
      level: 4,
      summary: 'Advanced oral hygiene science integrates molecular mechanisms of biofilm resistance, host-microbiome interactions, precision approaches to caries risk assessment, and evidence synthesis for clinical guideline development.',
      explanation: `## Biofilm Resistance Mechanisms

**Why Biofilm Bacteria Are 1000x More Resistant:**

1. **Diffusion Barrier**
   - Extracellular polymeric substance (EPS) matrix
   - Slows antibiotic penetration
   - Neutralizes charged antimicrobials

2. **Metabolic Heterogeneity**
   - Nutrient/oxygen gradients create distinct zones
   - Persister cells in stationary phase (antibiotic tolerant)
   - Different susceptibility throughout biofilm depth

3. **Gene Expression Changes**
   - Quorum sensing alters gene expression
   - Upregulation of stress response genes
   - Horizontal gene transfer between species

4. **Adaptive Stress Responses**
   - Acid tolerance response in cariogenic bacteria
   - Oxidative stress responses to antimicrobials

**Quorum Sensing in Oral Biofilms:**

*Competence Stimulating Peptide (CSP) in S. mutans:*
- Regulates genetic competence
- Bacteriocin production
- Biofilm formation
- Acid tolerance

*Autoinducer-2 (AI-2):*
- Interspecies communication
- Coordinates multispecies biofilm behavior

**Host-Microbiome Interactions:**

*Innate Immune Responses to Plaque:*
- Gingival epithelium: Toll-like receptors (TLR2, TLR4) detect MAMPs
- Cytokine production: IL-1β, IL-6, IL-8, TNF-α
- Neutrophil recruitment to gingival crevice
- Antimicrobial peptides: β-defensins, LL-37 in saliva/GCF

*Healthy Homeostasis:*
- Commensal bacteria induce tolerogenic responses
- Low-level inflammation maintains surveillance
- Dysbiosis triggers destructive inflammation

**Precision Caries Prevention:**

*CAMBRA (Caries Management by Risk Assessment):*

| Risk Factor | Protective Factor |
|-------------|-------------------|
| Visible cavities/restorations | Fluoride exposure (optimal) |
| Visible plaque | Adequate saliva flow |
| Frequent snacking | Xylitol use |
| Deep pits/fissures | Antibacterial therapy |
| Orthodontic appliances | Professional cleanings |
| Low SES | Sealants |
| Dry mouth (medications, Sjogren's) | |

*Biological Risk Indicators:*
- Salivary S. mutans levels
- Lactobacillus counts
- Salivary flow rate and buffering capacity
- Plaque pH testing

**Evidence-Based Guidelines:**

*ADA Recommendations:*
- Fluoride toothpaste: Strong recommendation
- Prescription-strength fluoride (5000 ppm): High caries risk patients
- Sealants: Strong recommendation for children/high-risk
- Silver diamine fluoride: Caries arrest in primary teeth

*Cochrane Systematic Reviews Key Findings:*
- Powered toothbrushes: 21% plaque reduction, 11% gingivitis reduction vs. manual
- Flossing: Weak evidence for caries prevention, moderate for gingivitis
- Fluoride toothpaste: 24% caries reduction vs. placebo
- CHX rinse: 33% plaque reduction

**Advanced Therapeutics:**

*Probiotics:*
- Lactobacillus reuteri, L. rhamnosus GG, Streptococcus salivarius
- Proposed mechanisms: Competitive exclusion, bacteriocins
- Evidence: Emerging but not yet definitive

*Arginine Technology:*
- Metabolized by arginolytic bacteria → Ammonia raises pH
- Counters acid production
- Incorporated into some toothpastes

*Casein Phosphopeptide-ACP (CPP-ACP):*
- Stabilizes calcium and phosphate ions
- Delivers remineralizing ions to enamel
- Clinical evidence for remineralization`,
      keyTerms: [
        { term: 'persister cells', definition: 'Metabolically dormant bacteria within biofilm tolerant to antibiotics; not genetically resistant' },
        { term: 'quorum sensing', definition: 'Cell-to-cell communication via signaling molecules regulating group behaviors like biofilm formation' },
        { term: 'CAMBRA', definition: 'Caries Management by Risk Assessment; evidence-based protocol for individualized caries prevention' },
        { term: 'MAMPs', definition: 'Microbe-Associated Molecular Patterns; conserved microbial structures recognized by host pattern recognition receptors' },
        { term: 'GCF', definition: 'Gingival Crevicular Fluid; serum transudate in the gingival sulcus containing immune mediators' },
        { term: 'arginine metabolism', definition: 'Bacterial breakdown of arginine producing ammonia; raises plaque pH and may be caries-protective' },
      ],
      clinicalNotes: 'CAMBRA implementation requires assessing all risk and protective factors, then tailoring interventions. High-risk patients benefit from prescription fluoride (5000 ppm), chlorhexidine, xylitol, and more frequent professional care. The ecological approach suggests modifying the environment rather than targeting specific pathogens.',
    },
    5: {
      level: 5,
      summary: 'Contemporary oral hygiene research encompasses microbiome-based therapeutics, precision dentistry using biomarkers, novel antimicrobial strategies targeting biofilm-specific mechanisms, and integration of oral health into systemic disease prevention frameworks.',
      explanation: `## Microbiome-Based Approaches

**Oral Microbiome Profiling:**

*Characterization Technologies:*
- 16S rRNA gene sequencing: Bacterial identification
- Whole metagenome shotgun sequencing: Functional potential
- Metatranscriptomics: Active gene expression
- Metabolomics: Metabolic products

*Oral Microbiome in Health vs. Disease:*
| State | Microbial Signature |
|-------|---------------------|
| Health | Diverse, Streptococcus, Neisseria, Haemophilus dominant |
| Caries | Reduced diversity, S. mutans, Lactobacillus, Scardovia |
| Gingivitis | Actinomyces, Fusobacterium increase |
| Periodontitis | P. gingivalis, T. denticola, T. forsythia (Red Complex) |

**Microbiome Modulation Strategies:**

*Targeted Antimicrobials:*
- Specifically Targeted Antimicrobial Peptides (STAMPs)
- C16G2: Targets S. mutans via CSP-targeting domain + antimicrobial
- Selective elimination without dysbiosis

*Prebiotic/Probiotic Approaches:*
- Replacement therapy: Non-pathogenic S. mutans strains
- ProBiora3: S. oralis, S. uberis, S. rattus blend
- Evidence: Promising preclinical, limited clinical data

*Bacteriophage Therapy:*
- Phages specific to S. mutans, P. gingivalis
- Can penetrate biofilm matrix
- Concerns: Resistance development, regulatory pathway

**Biofilm-Specific Drug Targets:**

*Targeting EPS Matrix:*
- Glucosyltransferase (GTF) inhibitors: Block glucan synthesis
- Matrix-degrading enzymes: Dextranase, mutanase
- Dispersal agents: DNase (eDNA is structural component)

*Quorum Sensing Inhibition:*
- CSP analogs: Competitive inhibitors
- Enzyme degradation of signaling molecules
- May prevent cariogenic biofilm maturation

*Persister Cell Eradication:*
- Metabolic stimulation + antibiotics
- Targeting toxin-antitoxin systems

**Precision Caries Prevention:**

*Salivary Diagnostics:*
- Chair-side bacterial identification
- Caries risk biomarkers: Proteins, metabolites
- Host susceptibility markers

*Genetic Susceptibility:*
- Enamel formation genes (AMELX, TUFT1)
- Taste receptors affecting dietary choices
- Immune response polymorphisms

*Personalized Prevention Protocols:*
- Risk stratification using biological + behavioral data
- Targeted interventions based on individual profile
- Monitoring and adjustment

**Novel Therapeutic Agents:**

*Antimicrobial Peptides (AMPs):*
- Mimic natural host defense peptides
- Broad-spectrum, rapid action
- Difficult for bacteria to develop resistance
- Examples: Histatin analogs, defensin mimetics

*Nanotechnology Applications:*
- Silver nanoparticles: Antimicrobial activity
- Nanohydroxyapatite: Remineralization
- Drug delivery nanocarriers: Sustained release
- Concerns: Toxicity, environmental impact

*Light-Activated Therapies:*
- Photodynamic therapy: Photosensitizer + light = ROS generation
- Blue light antimicrobial effect (405-470 nm)
- Applications: Adjunct to mechanical debridement

**Oral-Systemic Health Integration:**

*Cardiovascular Disease:*
- Periodontal bacteria in atherosclerotic plaques
- Systemic inflammation from oral infection
- Oral hygiene as CVD prevention strategy

*Diabetes:*
- Bidirectional relationship with periodontal disease
- Glycemic control improves with periodontal therapy
- Diabetes management includes oral health optimization

*Pregnancy Outcomes:*
- Association with preterm birth, low birth weight
- Periodontal care during pregnancy is safe and recommended

*Respiratory Infections:*
- Aspiration of oral pathogens
- Oral care reduces hospital-acquired pneumonia
- Ventilator-associated pneumonia prevention protocols

**Healthcare Integration:**

*Interprofessional Collaboration:*
- Dental referral networks with primary care
- Medical screening in dental settings (diabetes, hypertension)
- Shared electronic health records

*Population Health Approaches:*
- Water fluoridation: Most cost-effective caries prevention
- School-based sealant programs
- Community health worker oral health education

*Quality Metrics:*
- Caries prevention measures
- Periodontal disease screening
- Tobacco cessation counseling
- Integration into value-based care models`,
      keyTerms: [
        { term: 'STAMPs', definition: 'Specifically Targeted Antimicrobial Peptides; designed to selectively kill pathogenic species while preserving commensals' },
        { term: 'metatranscriptomics', definition: 'Study of gene expression patterns across all organisms in a microbial community' },
        { term: 'GTF inhibitors', definition: 'Glucosyltransferase inhibitors; block synthesis of glucans in biofilm matrix' },
        { term: 'photodynamic therapy', definition: 'Antimicrobial treatment using photosensitizer and light to generate reactive oxygen species' },
        { term: 'Red Complex', definition: 'Periodontal pathogens P. gingivalis, T. denticola, T. forsythia strongly associated with periodontitis' },
        { term: 'replacement therapy', definition: 'Colonization with benign bacterial strains to prevent pathogen establishment' },
      ],
      clinicalNotes: `Research translation priorities:
1. STAMPs and targeted antimicrobials show promise but need clinical trials
2. Salivary diagnostics for caries risk are advancing toward clinical implementation
3. Oral health is increasingly recognized as integral to systemic health - advocate for interprofessional care models
4. Water fluoridation remains the most cost-effective population-level intervention
5. Photodynamic therapy may become standard adjunct for high-risk patients
6. Personalized prevention based on microbiome profiling is the future direction
7. Integration of oral health into chronic disease management (diabetes, CVD) improves outcomes`,
    },
  },

  media: [
    {
      id: 'plaque-formation',
      type: 'diagram',
      filename: 'plaque-formation-stages.svg',
      title: 'Biofilm Formation Stages',
      description: 'Illustration of dental plaque development from pellicle to mature biofilm',
    },
    {
      id: 'brushing-technique',
      type: 'diagram',
      filename: 'modified-bass-technique.svg',
      title: 'Modified Bass Brushing Technique',
      description: 'Step-by-step illustration of proper brushing technique',
    },
  ],

  citations: [
    {
      id: 'marsh-oral-microbiology',
      type: 'textbook',
      title: 'Marsh and Martin\'s Oral Microbiology',
      authors: ['Marsh, P.D.', 'Lewis, M.A.O.'],
      source: 'Elsevier',
    },
    {
      id: 'cochrane-powered-brushes',
      type: 'article',
      title: 'Powered versus manual toothbrushing for oral health',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'topic-brushing-techniques', targetType: 'topic', relationship: 'child', label: 'Brushing Techniques' },
    { targetId: 'topic-flossing-techniques', targetType: 'topic', relationship: 'child', label: 'Flossing Techniques' },
    { targetId: 'topic-professional-cleanings', targetType: 'topic', relationship: 'related', label: 'Professional Cleanings' },
    { targetId: 'condition-cavities-decay', targetType: 'condition', relationship: 'see-also', label: 'Cavities and Decay' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['teeth', 'gums', 'oral cavity'],
    topics: ['prevention', 'hygiene', 'microbiology'],
    keywords: ['oral hygiene', 'brushing', 'plaque', 'fluoride', 'biofilm', 'caries prevention'],
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

export default dentalHygieneBasics;
