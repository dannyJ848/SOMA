/**
 * Gum Disease (Periodontal Disease) - Comprehensive Educational Content
 *
 * Covers gingivitis, periodontitis, pathogenesis, risk factors,
 * diagnosis, and treatment of periodontal diseases.
 */

import { EducationalContent } from '../types';

export const gumDisease: EducationalContent = {
  id: 'condition-gum-disease',
  type: 'condition',
  name: 'Gum Disease',
  alternateNames: [
    'Periodontal Disease',
    'Periodontitis',
    'Gingivitis',
    'Pyorrhea',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Gum disease is an infection of the tissues that hold your teeth in place. It starts with red, swollen gums (gingivitis) and can progress to serious damage of the bone and tissues supporting your teeth (periodontitis).',
      explanation: `**What is Gum Disease?**

Gum disease is a common infection that damages the soft tissues and bones that support your teeth. It\'s caused by bacteria in plaque - the sticky film that forms on your teeth.

**Two Main Types:**

**1. Gingivitis (Early Stage)**
- Gums become red, swollen, and may bleed
- Usually caused by poor brushing and flossing
- Can be reversed with good oral care
- Doesn\'t cause permanent damage yet

**2. Periodontitis (Advanced Stage)**
- Gums pull away from teeth
- Bone supporting teeth is damaged
- Spaces (pockets) form between gums and teeth
- Can cause teeth to loosen or fall out
- Damage cannot be reversed

**Warning Signs of Gum Disease:**
- Gums that bleed when you brush or floss
- Red, swollen, or tender gums
- Gums that have pulled away from teeth
- Bad breath that won\'t go away
- Loose teeth
- Pain when chewing

**Who Gets Gum Disease?**
- People who don\'t brush and floss regularly
- Smokers (much more common in smokers)
- People with diabetes
- People with a family history of gum disease
- Older adults

**Prevention:**
- Brush twice a day
- Floss daily
- Visit dentist regularly
- Don\'t smoke
- Eat healthy foods

**The Good News:**
Gingivitis can almost always be reversed! Catching it early is key. Once it progresses to periodontitis, treatment becomes more complex.`,
      keyTerms: [
        { term: 'plaque', definition: 'A sticky film of bacteria that forms on your teeth' },
        { term: 'tartar', definition: 'Hardened plaque that can only be removed by a dentist' },
        { term: 'gingivitis', definition: 'Early, reversible gum disease causing red, swollen gums' },
        { term: 'periodontitis', definition: 'Advanced gum disease that damages bone and tissues' },
        { term: 'periodontal pocket', definition: 'A deep space between gum and tooth where bacteria collect' },
      ],
      analogies: [
        'Plaque is like a sticky film on a dirty shower curtain - it needs to be cleaned off regularly.',
        'Gum disease is like termites eating the foundation of a house - you can\'t see the damage until it\'s serious.',
        'Tartar is like cement - once plaque hardens, it can\'t be brushed away.',
      ],
      examples: [
        'If your gums bleed every time you brush, you may have gingivitis.',
        'Smokers are 4 times more likely to get gum disease than non-smokers.',
        'People with diabetes have a higher risk of developing gum disease.',
      ],
      patientCounselingPoints: [
        'Bleeding gums are NOT normal - they\'re a sign of inflammation that needs attention',
        'Gum disease is usually painless until advanced stages - regular dental checkups are essential',
        'Treating gum disease may help control blood sugar in people with diabetes',
        'If you smoke, quitting is one of the best things you can do for your gums',
      ],
    },
    2: {
      level: 2,
      summary: 'Periodontal disease ranges from reversible gingivitis to irreversible periodontitis involving loss of connective tissue attachment and alveolar bone. Plaque-induced inflammation is the primary cause, modified by host risk factors.',
      explanation: `## Classification of Periodontal Diseases

**Gingival Diseases (Gingivitis):**
- Plaque-induced gingivitis
- Modified by systemic factors (pregnancy, puberty, diabetes)
- Modified by medications (calcium channel blockers, anticonvulsants)
- Reversible with plaque removal
- No attachment loss

**Periodontitis (Destructive):**
- Chronic periodontitis (most common)
- Aggressive periodontitis (rapid progression)
- Manifestation of systemic diseases
- Characterized by attachment loss, alveolar bone loss
- Requires periodontal therapy

**Periodontitis as Manifestation of Systemic Disease:**
- Diabetes-associated periodontitis
- Hematologic disorders (leukemia, neutropenias)
- Genetic disorders (Papillon-Lefèvre, Chediak-Higashi)

## Pathogenesis

**Dental Plaque Biofilm:**
- Gram-negative anaerobic bacteria in subgingival plaque
- Key pathogens: P. gingivalis, T. forsythia, T. denticola ("red complex")
- Bacteria release toxins and enzymes

**Host Inflammatory Response:**
- Bacteria trigger host immune response
- Inflammatory cells release enzymes (MMPs, elastase)
- Connective tissue destruction
- Bone resorption via RANK-RANKL-OPG pathway

**Progression:**
1. Plaque accumulation
2. Gingival inflammation
3. Junctional epithelium migration apically
4. Periodontal pocket formation
5. Connective tissue attachment loss
6. Alveolar bone loss

## Clinical Features

**Gingivitis:**
| Sign | Description |
|------|-------------|
| Color | Red/purple instead of pink |
| Contour | Rolled, swollen margins |
| Consistency | Edematous (boggy) |
| Bleeding | On probing, brushing |
| Pain | Usually absent |
| Attachment | No loss (reversible) |

**Periodontitis:**
All gingivitis signs plus:
- Periodontal pockets (>3mm)
- Clinical attachment loss (CAL)
- Alveolar bone loss (radiographic)
- Tooth mobility (advanced)
- Gingival recession

## Risk Factors

| Factor | Mechanism | Impact |
|--------|-----------|--------|
| Smoking | Immune suppression, vasoconstriction | 2-7x increased risk |
| Diabetes | Impaired neutrophil function, AGEs | 2-3x increased risk |
| Genetics | IL-1 polymorphisms, Fc receptors | Host susceptibility |
| Stress | Cortisol effects on immunity | Moderately increased |
| Age | Cumulative effects | Prevalence increases with age |
| Poor oral hygiene | Plaque accumulation | Primary cause |

## Diagnosis

**Clinical Assessment:**
- Probing depth (PD): Distance from CEJ to base of pocket
  - Normal: 1-3mm
  - Disease: >3mm, varies by site
- Clinical attachment level (CAL): Distance from CEJ to junctional epithelium
  - Irreversible measure of past disease
- Bleeding on probing (BOP): Indicator of active inflammation
- Suppuration: Exudate from pocket (pus)

**Radiographic Assessment:**
- Bitewing radiographs: Bone levels posteriorly
- Periapical radiographs: Full visualization
- Panoramic radiograph: Overview
- CBCT: For complex cases

**Classification of Severity:**

| Severity | CAL (mm) | Bone Loss (%) |
|----------|----------|---------------|
| Slight | 1-2 | <15% |
| Moderate | 3-4 | 15-33% |
| Severe | ≥5 | >33% |

## Treatment

**Gingivitis:**
- Professional cleaning (prophylaxis)
- Improved oral hygiene (brushing, flossing)
- Usually no additional treatment needed

**Periodontitis:**
- **Initial therapy:**
  - Scaling and root planing (deep cleaning)
  - Oral hygiene instruction
  - Smoking cessation if applicable
  - Re-evaluation in 4-6 weeks

- **Surgical therapy (if needed):**
  - Pocket reduction surgery
  - Regenerative procedures (bone grafts, membranes)
  - Resective surgery (gingivectomy, osseous surgery)

- **Maintenance:**
  - Periodontal maintenance (every 3-4 months)
  - Lifelong monitoring required

**Antibiotics (adjunctive):**
- Local delivery: Arestin, Atridox (placed in pockets)
- Systemic: For aggressive/acute cases (doxycycline, amoxicillin-metronidazole)`,
      keyTerms: [
        { term: 'biofilm', definition: 'Complex community of bacteria attached to surfaces; dental plaque is a biofilm' },
        { term: 'periodontal pocket', definition: 'Pathological deepening of gingival sulcus; measures >3mm' },
        { term: 'clinical attachment loss (CAL)', definition: 'Distance from CEJ to base of pocket; irreversible measure of periodontitis' },
        { term: 'scaling and root planing', definition: 'Deep cleaning removing plaque/tartar above and below gum line, smoothing root surfaces' },
        { term: 'RANK-RANKL-OPG', definition: 'Signaling pathway regulating bone resorption in periodontitis' },
      ],
      analogies: [
        'The periodontal pocket is like a deep wound that never heals - bacteria collect there and continue to damage tissue.',
        'Scaling and root planing is like deep cleaning a grout line - you remove all the built-up debris to let the tissue heal.',
      ],
      clinicalNotes: 'Bleeding on probing is the earliest sign of gingival inflammation. Periodontitis is site-specific - some teeth can be severely affected while others are healthy. Smokers have less BOP for same level of disease (nicotine causes vasoconstriction).',
      patientCounselingPoints: [
        'Periodontal maintenance every 3-4 months is crucial - the periodontal pockets will re-form with plaque accumulation',
        'Deep cleaning may cause temporary sensitivity but is necessary to remove bacterial reservoirs',
        'Periodontal disease cannot be cured, only controlled - like diabetes, it requires ongoing management',
      ],
    },
    3: {
      level: 3,
      summary: 'Periodontitis is a chronic inflammatory disease mediated by the host response to dysbiotic biofilm. Microbial shift from predominantly gram-positive to gram-negative anaerobes drives tissue destruction through host-derived inflammatory mediators and matrix metalloproteinases.',
      explanation: `## Pathogenesis in Detail

**Microbial Ecology:**

*Biofilm Development:*
1. **Pellicle formation** (minutes): Acquired pellicle on tooth surface
2. **Initial colonizers** (hours): Gram-positive streptococci (S. sanguinis, S. gordonii)
3. **Secondary colonizers** (days): Fusobacterium nucleatum (coaggregation bridge)
4. **Late colonizers**: Gram-negative anaerobes (P. gingivalis, T. forsythia, T. denticola)

*Red Complex (Socransky 1998):*
- **Porphyromonas gingivalis**: Keystone pathogen, manipulates host response
- **Tannerella forsythia**: Synergistic with P. gingivalis
- **Treponema denticola**: Spirochete, tissue invasion

*Orange Complex:*
- Prevotella intermedia
- Fusobacterium nucleatum
- Campylobacter rectus
- Precursor to red complex

*Blue Complex:*
- Streptococci (commensals)

**Host-Mediated Destruction:**

*Inflammatory Cascade:*
1. Bacterial PAMPs recognized by TLRs (TLR2, TLR4)
2. NF-κB activation → cytokine production
3. Neutrophil recruitment and activation
4. Release of:
   - Matrix metalloproteinases (MMP-8, MMP-9, MMP-13)
   - Elastase, cathepsins
   - RANKL (osteoclast activator)
   - Prostaglandins (PGE2)
   - IL-1β, IL-6, TNF-α

*Collagen Destruction:*
- MMP-8 (collagenase-2): Primary collagenase in GCF
- MMP-9 (gelatinase B): Degrades denatured collagen
- PMN elastase: Broad protease activity
- Cysteine cathepsins: Intracellular proteases

*Bone Resorption:*
- RANKL from fibroblasts, T-cells, B-cells
- Binds RANK on osteoclast precursors
- OPG (decoy receptor) decreases with inflammation
- Increased RANKL:OPG ratio → osteoclast activation

**Dysbiosis Model:**
- P. gingivalis as "keystone pathogen"
- Low abundance but high impact
- Disrupts homeostasis, enables pathogenic microbiota
- Complement C5 degradation → immune evasion

## Classification Systems

**2017 Classification (AAP/EFP):**

*I. Periodontal Health:*
- Clinical health on intact periodontium
- Stable periodontitis patient (treated, maintained)

*II. Gingivitis:*
- Dental plaque-induced
- Non-plaque induced (genetic, infectious, traumatic)

*III. Periodontitis:*
- Stage I (Initial): A, B, C grades
- Stage II (Moderate): A, B, C grades
- Stage III (Severe): A, B, C grades
- Stage IV (Very severe): A, B, C grades

*Staging (Severity/Complexity):*
- I: Interdental CAL 1-2mm, ≤15% bone loss
- II: Interdental CAL 3-4mm, 15-33% bone loss
- III: Interdental CAL ≥5mm, >33% bone loss, or ≤4 remaining teeth
- IV: Same as III plus complex rehabilitation needs

*Grading (Risk/Progression):*
- A: Slow rate of progression, direct evidence
- B: Moderate rate of progression
- C: Rapid rate of progression, direct evidence

*IV. Periodontitis as Manifestation of Systemic Disease:*
V. Necrotizing Periodontal Diseases:
- Necrotizing ulcerative gingivitis (NUG)
- Necrotizing ulcerative periodontitis (NUP)
- Painful, ulcerated, necrotic papillae
- Pseudomembrane, fetid odor
- Associated with stress, malnutrition, HIV

## Clinical Assessment Tools

**Periodontal Examination:**
- Full-mouth periodontal charting (6 sites per tooth)
- Measurements: PD, CAL, BOP, recession, mobility, furcation
- Radiographs: Vertical bitewings, PA for furcations

**Probing Considerations:**
- Probe tip penetrates junctional epithelium (~0.5mm in health)
- True pocket depth = PD - 0.5mm
- Pseudopockets: Gingival enlargement without CAL loss
- Reliability: ±1mm error between examiners

**Gingival Crevicular Fluid (GCF):**
- Serum transudate (health) → exudate (disease)
- Inflammatory mediators: IL-1β, PGE2, MMP-8
- Biomarker research: Chairside diagnostics

**Microbiological Testing:**
- DNA probe testing: Specific pathogens
- Culturing: Antibiotic sensitivity
- Indications: Aggressive/refractory periodontitis

**Genetic Testing:**
- IL-1 polymorphism ( PST test)
- Limited clinical utility for most patients
- May identify high-risk individuals

## Treatment Modalities

**Non-Surgical Therapy:**

*Scaling and Root Planing:*
- Removal of plaque, calculus, endotoxin
- Full-mouth vs. quadrant approach
- Local anesthesia for patient comfort
- Healing: 4-6 weeks for re-evaluation
- Expected PD reduction: 1-2mm on average

*Adjunctive Antimicrobials:*
- Chlorhexidine (0.12%): Mouthrinse, irrigation
- Local delivery: Minocycline microspheres, doxycycline gel, chlorhexidine chips
- Systemic antibiotics: Amoxicillin + metronidazole, doxycycline (subantimicrobial dose)

**Surgical Therapy:**

*Pocket Reduction Surgery:*
- Indication: PD >5mm after SRP
- Access flap: Remove granulation tissue, reduce pocket depth
- Modified Widman flap: Preserve gingiva
- Apically positioned flap: Reduce pocket

*Regenerative Procedures:*
- Bone grafts: Demineralized freeze-dried bone allograft (DFDBA), autograft
- Guided tissue regeneration (GTR): Membrane barriers
- Enamel matrix derivative (EMD): Emdogain (BMP-like)
- Combination approaches

*Resective Surgery:*
- Gingivectomy/gingivoplasty
- Osseous surgery: Reshaping bone
- Crown lengthening
- Hemisection/root amputation

**Occlusal Therapy:**
- Occlusal adjustment
- Night guard for bruxism
- Splinting of mobile teeth

**Maintenance:**
- Periodontal maintenance: Every 3 months (standard)
- More frequent for high-risk patients
- Re-assessment of PD, BOP, radiographs
- Re-treatment as needed`,
      keyTerms: [
        { term: 'dysbiosis', definition: 'Shift from symbiotic to pathogenic microbial community' },
        { term: 'keystone pathogen', definition: 'Low-abundance pathogen that disproportionately affects community structure' },
        { term: 'PAMP', definition: 'Pathogen-associated molecular pattern; bacterial molecules recognized by TLRs' },
        { term: 'GTR', definition: 'Guided tissue regeneration; using membranes to exclude epithelium and allow bone/PDL regeneration' },
        { term: 'EMD', definition: 'Enamel matrix derivative; regenerative material derived from porcine enamel proteins' },
        { term: 'CAL', definition: 'Clinical attachment level; distance from CEJ to base of pocket, irreversible' },
      ],
      clinicalNotes: 'NUP/NUG requires immediate treatment: debridement, chlorhexidine, antibiotics (penicillin + metronidazole), address underlying cause (stress, nutrition, HIV). Vertical bone defects are more amenable to regeneration than horizontal bone loss. Furcation involvement (Class I, II, III) affects prognosis - Class III often requires extraction.',
      patientCounselingPoints: [
        'Periodontitis is not curable but can be controlled - like diabetes, it requires lifelong management',
        'Missing maintenance appointments is the #1 cause of periodontal treatment failure',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced periodontal pathogenesis involves complex host-microbe interactions including epigenetic regulation, trained immunity, and neutrophil dysregulation. Novel biomarkers and molecular diagnostics are emerging for risk stratification and personalized treatment.',
      explanation: `## Advanced Host-Microbe Interactions

**Epigenetic Regulation of Inflammation:**

*MicroRNA Regulation:*
- miR-146a: Negative regulator of NF-κB (feedback inhibition)
- miR-155: Pro-inflammatory, enhances TNF-α production
- miR-21: Anti-inflammatory, limits inflammation
- Altered miRNA profiles in periodontitis vs. health

*DNA Methylation:*
- Hypomethylation of inflammatory gene promoters
- Increased expression of IL-1β, IL-6, TNF-α
- Heritable epigenetic changes (transgenerational?)

*Histone Modifications:*
- Acetylation: Opens chromatin, increases transcription
- Methylation: Context-dependent
- HDAC inhibitors as potential therapeutics

**Trained Immunity:**
- Innate immune cells (monocytes, NK) develop memory
- P. gingivalis exposure → hyperresponsive to subsequent stimuli
- Epigenetic reprogramming of myeloid progenitors
- May explain systemic inflammation connections

**Neutrophil Dysregulation:**

*Hyperactive Phenotype:*
- Increased ROS production
- Excessive protease release (MMP-8, neutrophil elastase)
- NETosis enhancement
- Tissue damage from "friendly fire"

*Hyporesponsive Phenotype:*
- Impaired chemotaxis (diabetes, smoking)
- Reduced phagocytosis
- Failed bacterial clearance
- Explains susceptibility in some patients

**Oxidative Stress:**
- ROS: Superoxide, hydrogen peroxide, hydroxyl radical
- Antioxidant depletion: Glutathione, SOD, catalase
- Lipid peroxidation, DNA damage, protein oxidation
- Oxidative stress biomarkers correlate with disease severity

## Molecular Diagnostics

**Salivary Biomarkers:**

| Biomarker | Category | Clinical Utility |
|-----------|----------|------------------|
| MMP-8 | Collagenase | Disease activity |
| IL-1β | Cytokine | Inflammation |
| TNF-α | Cytokine | Inflammation |
| PGE2 | Prostaglandin | Bone resorption |
| OCN | Bone protein | Bone turnover |
| Pyridinoline | Cross-link | Bone degradation |

**Chairside Diagnostics:**
- Periodontal Tissue Monitoring (PTM) chairside test
- Bacterial identification (DNA probe)
- Genetic susceptibility testing (IL-1 polymorphism)
- Point-of-care testing under development

**Salivary Transcriptomics:**
- mRNA signatures for disease vs. health
- Potential for early detection
- Challenges: Standardization, cost

**Microbiome Analysis:**
- 16S rRNA sequencing: Taxonomic identification
- Metagenomics: Functional potential
- Metatranscriptomics: Active genes
- Metaproteomics: Expressed proteins

**Clinical Applications:**
- Risk assessment before disease onset
- Monitoring treatment response
- Predicting disease progression
- Personalized treatment planning

## Novel Therapeutic Approaches

**Host Modulation Therapy:**

*Subantimicrobial Dose Doxycycline (SDD):*
- 20 mg twice daily
- Inhibits MMPs without antibiotic effect
- Reduces connective tissue breakdown
- FDA-approved for periodontitis
- Used as adjunct to SRP

*NSAIDs:*
- Inhibit COX → reduce PGE2
- Selective COX-2 inhibitors investigated
- Limited by systemic side effects

*Biologics:*
- Anti-TNF-α (etanercept): Investigational
- Anti-IL-1 (anakinra): Investigational
- Anti-IL-17 (secukinumab): Investigational
- RANKL inhibitors (denosumab): Reduces bone loss

**Probiotics:**
- L. reuteri, L. brevis: Show some benefit
- Mechanism: Competitive exclusion, immune modulation
- Evidence: Limited but growing
- Products: PerioBalance, GUM PerioBalance

**Vaccines:**
- P. gingivalis vaccine: Animal studies
- Challenges: Antigenic variation, safety
- Not yet clinically available

**Photodynamic Therapy:**
- Photosensitizer + light wavelength
- Produces reactive oxygen species
- Kills bacteria in pockets
- Adjunctive use, not replacement for SRP

**Lasers:**
- Er,Cr:YSGG, Er:YAG, Nd:YAG
- Bacterial reduction, calculus removal
- Debridement, disinfection
- Evidence: Not superior to conventional SRP alone

## Systemic Connections

**Mechanisms of Systemic Spread:**

1. **Metastatic infection**
   - Bacteremia from mastication, dental procedures
   - Infective endocarditis
   - Brain, liver, lung abscesses

2. **Metastatic injury**
   - Inflammatory mediators: IL-6, CRP, fibrinogen
   - Acute phase response
   - Endothelial dysfunction

3. **Metastatic inflammation**
   - Autoimmune cross-reaction
   - Molecular mimicry
   - RA association: P. gingivalis PPAD → citrullination

**Cardiovascular Disease:**
- OR 1.5-2.0 for CVD in periodontitis
- P. gingivalis in atherosclerotic plaques
- Systemic inflammation → endothelial dysfunction
- Periodontal treatment improves endothelial function

**Diabetes:**
- Bidirectional relationship
- Periodontal treatment: HbA1c reduction 0.27-0.48%
- Mechanism: Inflammation → insulin resistance
- Recommendation: Periodontal exam for all diabetics

**Adverse Pregnancy Outcomes:**
- Preterm birth, low birth weight association
- F. nucleatum translocation to placenta (animal models)
- Inflammatory mediators → uterine contractions
- Treatment during pregnancy is safe

**Respiratory Infections:**
- Aspiration of oral pathogens
- Pneumonia in nursing home residents
- Oral care reduces pneumonia risk

**Other Associations:**
- RA: P. gingivalis citrullination
- Alzheimer's: P. gingivalis gingipains in brain (emerging)
- CKD: Bidirectional inflammatory burden
- Cancer: Some association (pancreatic, hematologic)

**Clinical Implications:**
- Medical-dental collaboration essential
- Periodontal health part of systemic health
- Pre-treatment dental clearance for at-risk procedures
- Risk factor modification is crucial`,
      keyTerms: [
        { term: 'host modulation', definition: 'Therapeutic approach to modify destructive host response in periodontitis' },
        { term: 'SDD', definition: 'Subantimicrobial dose doxycycline; 20 mg BID inhibits MMPs without antibiotic effect' },
        { term: 'NETosis', definition: 'Neutrophil extracellular trap formation; chromatin nets to trap pathogens' },
        { term: 'trained immunity', definition: 'Innate immune cell memory; enhanced response to secondary stimuli' },
        { term: 'PPAD', definition: 'Peptidylarginine deiminase; P. gingivalis enzyme that citrullinates proteins' },
      ],
      clinicalNotes: 'SDD (Periostat) is FDA-approved as adjunct for periodontitis. HbA1c reduction from periodontal treatment is modest but clinically meaningful. AHA premedication guidelines changed in 2017 - only highest risk cardiac patients need antibiotics. Periodontal treatment before cardiac surgery reduces complications.',
    },
    5: {
      level: 5,
      summary: 'Contemporary periodontology integrates omics technologies, microbiome engineering, and personalized medicine approaches. Emerging research explores immune cell reprogramming, tissue engineering for regeneration, and artificial intelligence for risk prediction.',
      explanation: `## Cutting-Edge Research in Periodontology

### Multi-Omics Approaches

**Genomics:**
- GWAS studies: 65+ loci associated with periodontitis
- Heritability: ~50% for aggressive, ~30% for chronic
- Polygenic risk scores under development
- Gene-environment interactions
- Pharmacogenomics: Predicting antibiotic response

**Transcriptomics:**
- Bulk RNA-seq of periodontal tissues
- Single-cell RNA-seq: Cell-type specific responses
- Tissue vs. blood signatures
- Therapeutic target identification

**Proteomics:**
- Gingival crevicular fluid proteome
- Salivary protein biomarkers
- Post-translational modifications
- Protein-protein interaction networks

**Metabolomics:**
- Metabolite profiles in GCF, saliva
- Short-chain fatty acids (bacterial metabolites)
- Tissue degradation products
- Oxidative stress markers

**Microbiome Science:**
- Shotgun metagenomics: Strain-level identification
- Functional metagenomics: Pathogenic potential
- Metatranscriptomics: Active pathways
- Culturomics: Growing previously uncultivable species

### Personalized Periodontal Therapy

**Risk Stratification:**
- Genetic, microbiome, immune profiling
- Machine learning algorithms for progression prediction
- "Treatable vs. non-treatable" risk factors
- Personalized maintenance intervals

**Precision Antibiotics:**
- Culture and sensitivity
- Targeted antibiotic selection
- Adjunctive vs. definitive antibiotic use
- Microbiome restoration after treatment

**Probiotic and Prebiotic Therapy:**
- Next-generation probiotics (isolated from healthy oral microbiome)
- Prebiotics: Supporting beneficial species
- Synbiotics: Combinations
- Fecal microbiota transplant principles applied to oral cavity

**Emerging Therapeutics:**

*Peptide Therapeutics:*
- Anti-biofilm peptides
- Anti-virulence factors
- Host defense peptide mimics
- Targeted drug delivery

*CRISPR Applications:*
- Gene editing for genetic forms (Papillon-Lefèvre)
- CRISPR antimicrobials: Targeting specific pathogens
- Challenges: Delivery, off-target effects

*RNA Interference:*
- Silencing inflammatory genes
- miRNA mimics or inhibitors
- In vivo delivery challenges

*Cell-Based Therapies:*
- Periodontal ligament stem cells (PDLSCs)
- Allogeneic stem cell delivery
- Scaffold-based tissue engineering
- 3D bioprinting of periodontal tissues

### Immune Engineering

**Trained Immunity Modulation:**
- Epigenetic reprogramming approaches
- β-glucan: Inducing protective trained immunity
- Reversing harmful training

**Neutrophil Phenotype Modulation:**
- Resolving hyperactive neutrophils
- Boosting hyporesponsive neutrophils
- Targeting specific signaling pathways (PI3K, MAPK)

**T-cell Polarization:**
- Promoting Treg phenotype: Anti-inflammatory
- Modulating Th17 response
- Balancing Th1/Th2

**Checkpoint Inhibitors:**
- PD-1/PD-L1 modulation
- Experimental in periodontitis models
- Autoimmunity concerns

### Tissue Engineering and Regeneration

**Current Limitations:**
- PDL regeneration challenging
- Cementum-PDL-bone complex not fully regeneratable
- Predictability issues with existing treatments

**Novel Approaches:**

*Biomaterials:*
- 3D-printed scaffolds
- Smart materials: Release growth factors
- Decellularized matrices
- Self-assembling peptide hydrogels

*Growth Factor Combinations:*
- PDGF + IGF (GEM 21S)
- BMP-2, BMP-7
- FGF-2
- Combination approaches under investigation

*Gene-Activated Matrices:*
- Scaffold + gene therapy
- Cells transduced with growth factor genes
- In situ gene delivery

*Cell Sheets:*
- Temperature-responsive culture dishes
- Cell sheets without scaffolds
- PDL cell sheets for regeneration

### Artificial Intelligence and Digital Health

**Diagnosis:**
- Deep learning for radiographic bone loss assessment
- Automated pocket depth charting (imaging)
- Image analysis for inflammation detection
- Mobile phone-based screening

**Risk Prediction:**
- Machine learning models for progression
- Integration of genetic, microbiome, clinical data
- Individualized treatment planning
- Maintenance interval optimization

**Treatment Monitoring:**
- Smartphone apps for oral hygiene tracking
- Connected toothbrushes, water flossers
- Salivary biomarker home testing
- Tele-dentistry for monitoring

**Virtual and Augmented Reality:**
- Patient education tools
- Surgical planning
- Training simulators

### Future Directions

**Holistic Health Integration:**
- Periodontal health as vital sign
- Medical-dental EMR integration
- Collaborative care models
- Value-based care

**Preventive Focus Shift:**
- Microbiome engineering before disease
- Genetic risk assessment from birth
- Early intervention based on risk
- Personalized prevention protocols

**Regulatory and Implementation Challenges:**
- Evidence standards for new technologies
- Cost-effectiveness
- Reimbursement models
- Clinical workflow integration`,
      keyTerms: [
        { term: 'GWAS', definition: 'Genome-wide association study; identifies genetic variants associated with disease' },
        { term: 'culturomics', definition: 'High-throughput culture techniques to grow previously uncultivable bacteria' },
        { term: 'polygenic risk score', definition: 'Calculation of genetic risk based on multiple genetic variants' },
        { term: 'PDLSC', definition: 'Periodontal ligament stem cells; mesenchymal stem cells for regeneration' },
      ],
      clinicalNotes: `Future clinical practice:
1. Salivary diagnostics may replace periodontal probing for disease monitoring
2. Genetic testing may identify high-risk individuals for targeted prevention
3. Microbiome analysis will guide antibiotic and probiotic selection
4. AI-assisted radiographic interpretation will improve detection
5. Cell-based therapies may enable true regeneration of PDL-cementum-bone complex
6. Personalized maintenance intervals based on risk profiles
7. Medical-dental integration will be standard of care`,
    },
  },

  media: [
    {
      id: 'periodontitis-progression',
      type: 'diagram',
      filename: 'periodontitis-progression.svg',
      title: 'Periodontitis Progression',
      description: 'Stages from gingivitis to advanced periodontitis with bone loss',
    },
    {
      id: 'periodontal-pocket',
      type: 'diagram',
      filename: 'periodontal-pocket-formation.svg',
      title: 'Periodontal Pocket Formation',
      description: 'Formation of periodontal pocket and attachment loss',
    },
  ],

  citations: [
    {
      id: 'newman-periodontics',
      type: 'textbook',
      title: 'Carranza\'s Clinical Periodontology',
      authors: ['Newman, M.G.', 'Takei, H.', 'Klokkevold, P.R.', 'Ekholm, S.'],
      source: 'Elsevier',
      chapter: 'Chapters 10-20',
    },
    {
      id: 'AAP-classification-2017',
      type: 'article',
      title: 'Periodontal Disease Classification',
      authors: ['Papapanou, P.N.', 'Sanz, M.', 'Buduneli, N.', 'et al.'],
      source: 'Journal of Periodontology',
      chapter: '2018',
    },
    {
      id: 'kinane-host-response',
      type: 'article',
      title: 'Host Response in Periodontal Disease',
      authors: ['Kinane, D.F.', 'Clements, C.C.'],
      source: 'Periodontology 2000',
      chapter: '2019',
    },
  ],

  crossReferences: [
    { targetId: 'condition-oral-systemic-health', targetType: 'condition', relationship: 'related', label: 'Oral Systemic Health' },
    { targetId: 'procedure-professional-cleanings', targetType: 'topic', relationship: 'related', label: 'Professional Cleanings' },
    { targetId: 'condition-cavities-decay', targetType: 'condition', relationship: 'sibling', label: 'Cavities and Decay' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['gingiva', 'periodontium', 'alveolar-bone', 'cementum'],
    topics: ['pathology', 'immunology', 'microbiology', 'inflammation'],
    keywords: ['periodontitis', 'gingivitis', 'gum disease', 'periodontal', 'bone loss', 'pocket', 'biofilm'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gumDisease;
