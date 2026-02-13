/**
 * USMLE Step 1 Biochemistry - Molecular Basis of Medicine
 *
 * Educational content covering high-yield biochemistry for USMLE Step 1.
 */

import { EducationalContent } from '../../types';

export const step1Biochem: EducationalContent = {
  id: 'education-usmle-step1-biochem',
  type: 'concept',
  name: 'USMLE Step 1 Biochemistry',
  alternateNames: ['Step 1 Biochem', 'Medical Biochemistry', 'Molecular Medicine', 'Board Biochemistry'],

  levels: {
    1: {
      level: 1,
      summary: 'Biochemistry for USMLE Step 1 studies the molecules and chemical processes in the body. It helps explain how the body uses food for energy and builds important molecules.',
      explanation: `## What Is Biochemistry for Step 1?

Biochemistry is the study of chemistry in living things. For Step 1, you learn about:
- How the body makes energy from food
- How DNA stores genetic information
- How proteins do work in cells
- How the body processes nutrients

## Why Is Biochemistry Important?

Understanding biochemistry helps doctors:
- Understand genetic diseases
- Know how medicines work
- Understand metabolism
- Interpret lab tests

## Main Topics

**Energy Metabolism:**
- How sugar is broken down for energy
- How fat is used for fuel
- How the body makes energy without oxygen

**Genetics and DNA:**
- How DNA stores information
- How DNA makes copies of itself
- How DNA makes proteins
- What happens when DNA has errors

**Proteins:**
- How proteins are built
- How enzymes speed up reactions
- How proteins send signals

**Nutrition:**
- Vitamins and what they do
- Essential nutrients the body needs
- What happens with vitamin deficiencies

## How Biochemistry Connects to Medicine

Many diseases happen when biochemistry goes wrong:
- Diabetes: Problems with sugar metabolism
- High cholesterol: Problems with fat processing
- Genetic diseases: Errors in DNA
- Vitamin deficiencies: Missing nutrients

## Study Tips

1. Focus on clinical connections
2. Learn the major pathways
3. Understand enzyme deficiencies
4. Know vitamin functions
5. Practice with biochemistry questions`,
      keyTerms: [
        { term: 'biochemistry', definition: 'The study of chemical processes within living organisms' },
        { term: 'metabolism', definition: 'All the chemical reactions that occur in the body to maintain life' },
        { term: 'enzyme', definition: 'A protein that speeds up chemical reactions' },
        { term: 'DNA', definition: 'The molecule that carries genetic instructions' },
      ],
      analogies: [
        'Metabolism is like a factory assembly line - raw materials come in, get processed through many steps, and useful products come out.',
        'Enzymes are like tools that make work easier and faster - they help chemical reactions happen more quickly.',
      ],
      examples: [
        'Diabetes happens when the body cannot properly use sugar for energy, causing high blood sugar levels.',
        'Lactose intolerance occurs when someone lacks the enzyme needed to digest milk sugar.',
      ],
      patientCounselingPoints: [
        'Understanding biochemistry helps doctors understand the molecular causes of diseases',
        'Many genetic tests look for specific changes in DNA that affect biochemical pathways',
      ],
    },

    2: {
      level: 2,
      summary: 'Step 1 biochemistry covers molecular foundations of medicine including metabolism, genetics, enzymes, and nutrition. Approximately 10-15% of Step 1 content, with emphasis on metabolic pathways, enzyme deficiencies, and genetic mechanisms.',
      explanation: `## Step 1 Biochemistry Overview

Biochemistry on Step 1 focuses on clinically relevant molecular mechanisms, metabolic pathways, and genetic principles underlying disease.

## Content Distribution

| Topic | Weight | Key Areas |
|-------|--------|-----------|
| Metabolism | High | Glycolysis, TCA, fatty acids |
| Genetics | High | DNA replication, repair, expression |
| Enzymes | Medium | Kinetics, regulation |
| Nutrition | Medium | Vitamins, minerals |
| Cell biology | Medium | Signal transduction |

## Carbohydrate Metabolism

**Glycolysis:**
- Location: Cytoplasm
- Net yield: 2 ATP, 2 NADH
- Key enzymes: Hexokinase, PFK-1, Pyruvate kinase
- Regulation: Insulin, energy charge

**Gluconeogenesis:**
- Location: Liver (main), kidney
- Bypasses irreversible steps
- Key enzymes: Pyruvate carboxylase, PEPCK, F-1,6-BPase, G-6-Pase
- Stimulated by glucagon, cortisol

**Glycogen Metabolism:**
| Process | Key Enzyme | Regulation |
|---------|------------|------------|
| Synthesis | Glycogen synthase | Insulin activates |
| Breakdown | Glycogen phosphorylase | Glucagon, epinephrine |

**Glycogen Storage Diseases:**
| Disease | Deficiency | Manifestations |
|---------|------------|----------------|
| von Gierke | G-6-Pase | Hypoglycemia, hepatomegaly |
| Pompe | Acid alpha-glucosidase | Cardiomyopathy |
| Cori | Debranching enzyme | Milder hypoglycemia |
| McArdle | Myophosphorylase | Exercise intolerance |

## Lipid Metabolism

**Fatty Acid Synthesis:**
- Location: Cytoplasm
- Carrier: Acetyl-CoA carboxylase
- NADPH source: Pentose phosphate pathway

**Fatty Acid Oxidation:**
- Location: Mitochondria
- Transport: Carnitine shuttle
- Key enzyme: Carnitine palmitoyltransferase I

**Ketone Bodies:**
- Synthesis: Liver during fasting
- Utilization: Brain, heart, muscle
- Ketogenesis regulated by insulin/glucagon ratio

**Lipid Disorders:**
| Defect | Manifestation | Clinical |
|--------|---------------|----------|
| LDL receptor | Familial hypercholesterolemia | Atherosclerosis |
| LCAT | Fish eye disease | Corneal opacity |
| Lipoprotein lipase | Hyperchylomicronemia | Pancreatitis |

## Amino Acid Metabolism

**Essential Amino Acids:**
- PVT TIM HALL mnemonic
- Cannot be synthesized, must be obtained from diet

**Disorders of Amino Acid Metabolism:**
| Disorder | Defect | Manifestations |
|----------|--------|----------------|
| PKU | Phenylalanine hydroxylase | Mental retardation |
| Maple syrup urine | Branched-chain alpha-ketoacid dehydrogenase | Severe neonatal disease |
| Homocystinuria | Cystathionine beta-synthase | Marfanoid, thrombosis |
| Alkaptonuria | Homogentisate oxidase | Dark urine, ochronosis |

## DNA and Genetics

**Replication:**
- Semiconservative
- Leading and lagging strands
- Okazaki fragments
- Proofreading by DNA polymerase

**Repair Mechanisms:**
| Mechanism | Defect | Syndrome |
|-----------|--------|----------|
| Nucleotide excision | UV damage | Xeroderma pigmentosum |
| Mismatch repair | Replication errors | Lynch syndrome |
| Homologous recombination | Double-strand breaks | Breast/ovarian cancer |

**Transcription and Translation:**
- mRNA processing: 5\' cap, poly-A tail, splicing
- Genetic code: Degenerate, unambiguous
- Ribosomes: rRNA and protein
- Post-translational modifications

## Vitamins

**Water-Soluble:**
| Vitamin | Function | Deficiency |
|---------|----------|------------|
| B1 (Thiamine) | Decarboxylation | Beriberi, Wernicke |
| B2 (Riboflavin) | FAD cofactor | Cheilitis, glossitis |
| B3 (Niacin) | NAD cofactor | Pellagra |
| B6 (Pyridoxine) | Transamination | Neuropathy |
| B9 (Folate) | One-carbon transfer | Neural tube defects |
| B12 (Cobalamin) | Methylmalonyl-CoA | Megaloblastic anemia |
| C | Hydroxylation | Scurvy |

**Fat-Soluble:**
| Vitamin | Function | Deficiency | Excess |
|---------|----------|------------|--------|
| A | Vision, epithelium | Night blindness | Teratogenic |
| D | Calcium homeostasis | Rickets | Hypercalcemia |
| E | Antioxidant | Hemolysis | - |
| K | Clotting factors | Bleeding | - |`,
      keyTerms: [
        { term: 'glycolysis', definition: 'The metabolic pathway that converts glucose into pyruvate for energy production' },
        { term: 'carnitine shuttle', definition: 'The transport system that moves fatty acids into mitochondria for oxidation' },
        { term: 'enzyme kinetics', definition: 'The study of rates of enzyme-catalyzed reactions' },
        { term: 'Km', definition: 'The substrate concentration at which enzyme velocity is half maximal' },
      ],
      analogies: [
        'Metabolic pathways are like intersecting highways - traffic (substrates) flows through different routes depending on needs.',
        'Enzyme inhibition is like a traffic jam - competitive inhibitors are like cars blocking the road, non-competitive are like road damage.',
      ],
      examples: [
        'In von Gierke disease, glucose-6-phosphatase deficiency prevents glucose release from liver, causing severe fasting hypoglycemia.',
        'Lactose intolerance results from lactase deficiency, causing GI symptoms when dairy is consumed.',
      ],
      patientCounselingPoints: [
        'Many genetic metabolic disorders can be managed with special diets',
        'Newborn screening tests look for many metabolic diseases that can be treated if caught early',
      ],
    },

    3: {
      level: 3,
      summary: 'Step 1 biochemistry requires understanding metabolic pathways, enzyme regulation, genetic mechanisms, and their clinical manifestations. High-yield topics include inborn errors of metabolism, enzyme kinetics, and vitamin deficiencies.',
      explanation: `## Comprehensive Step 1 Biochemistry Framework

Mastery of biochemistry for Step 1 requires understanding pathways, recognizing deficiency patterns, and connecting molecular mechanisms to clinical disease.

## Detailed Metabolic Pathways

**Glycolysis Regulation:**

**Key Regulatory Enzymes:**
| Enzyme | Activators | Inhibitors | Purpose |
|--------|------------|------------|---------|
| Hexokinase | - | G-6-P | Trapping glucose |
| PFK-1 | AMP, F-2,6-BP | ATP, citrate | Commitment step |
| Pyruvate kinase | F-1,6-BP | ATP, alanine | Final step |

**Fates of Pyruvate:**
| Condition | Product | Pathway |
|-----------|---------|---------|
| Aerobic | Acetyl-CoA | PDH complex |
| Anaerobic | Lactate | Lactate dehydrogenase |
| Fasting | Oxaloacetate | Pyruvate carboxylase |

**TCA Cycle Integration:**
- Acetyl-CoA entry point
- NADH and FADH2 production
- GTP (ATP) generation
- Anaplerotic reactions
- Cataplerotic uses

**Electron Transport Chain:**
| Complex | Input | Output | Inhibitor |
|---------|-------|--------|-----------|
| I | NADH | Ubiquinone | Rotenone |
| II | FADH2 | Ubiquinone | Malonate |
| III | Ubiquinol | Cytochrome c | Antimycin A |
| IV | Cytochrome c | O2 | Cyanide, CO |
| V | Proton gradient | ATP | Oligomycin |

## Enzyme Kinetics and Regulation

**Michaelis-Menten Kinetics:**
- Vmax: Maximum velocity
- Km: Substrate at 1/2 Vmax
- Catalytic efficiency: kcat/Km

**Types of Inhibition:**
| Type | Binding Site | Effect on Vmax | Effect on Km |
|------|--------------|----------------|--------------|
| Competitive | Active site | Unchanged | Increased |
| Non-competitive | Allosteric | Decreased | Unchanged |
| Uncompetitive | ES complex | Decreased | Decreased |

**Allosteric Regulation:**
- Positive effectors: Stabilize R state
- Negative effectors: Stabilize T state
- Examples: Aspartate transcarbamoylase, phosphofructokinase

## Inborn Errors of Metabolism

**Carbohydrate Disorders:**

**Galactosemia:**
- Deficiency: Galactose-1-phosphate uridyltransferase
- Accumulation: Galactose-1-phosphate
- Manifestations: Cataracts, liver failure, intellectual disability
- Treatment: Galactose-free diet

**Fructose Intolerance:**
- Deficiency: Aldolase B
- Accumulation: Fructose-1-phosphate
- Manifestations: Hypoglycemia, vomiting, hepatomegaly
- Trigger: Fructose ingestion

**Lysosomal Storage Diseases:**
| Disease | Accumulated | Enzyme | Clinical |
|---------|-------------|--------|----------|
| Tay-Sachs | GM2 ganglioside | Hexosaminidase A | Cherry-red spot, neurodegeneration |
| Gaucher | Glucocerebroside | Beta-glucocerebrosidase | Hepatosplenomegaly, bone lesions |
| Niemann-Pick | Sphingomyelin | Sphingomyelinase | Cherry-red spot, neurodegeneration |
| Hurler | GAGs | Alpha-L-iduronidase | Coarse facies, organomegaly |

**Sphingolipidoses Pattern:**
- Cherry-red spot: Tay-Sachs, Niemann-Pick
- No cherry-red: Gaucher
- Neuropathic vs non-neuropathic forms

## Nucleotide Metabolism

**Purine Synthesis:**
- Committed step: PRPP amidotransferase
- Inhibited by: AMP, GMP
- End product: IMP -> AMP, GMP

**Pyrimidine Synthesis:**
- Committed step: Aspartate transcarbamoylase
- End product: UMP -> CTP, TTP

**Degradation Disorders:**
| Deficiency | Accumulation | Manifestation |
|------------|--------------|---------------|
| HGPRT | Uric acid | Lesch-Nyhan syndrome |
| ADA | dATP | Severe combined immunodeficiency |

## Signal Transduction

**G-Protein Pathways:**
| G-Protein | Effect | Examples |
|-----------|--------|----------|
| Gs | Adenylyl cyclase activation | Beta-adrenergic |
| Gi | Adenylyl cyclase inhibition | Alpha-2 adrenergic |
| Gq | Phospholipase C activation | Alpha-1 adrenergic |

**Second Messengers:**
| Messenger | Generation | Effects |
|-----------|------------|---------|
| cAMP | Adenylyl cyclase | PKA activation |
| IP3 | Phospholipase C | Calcium release |
| DAG | Phospholipase C | PKC activation |
| cGMP | Guanylyl cyclase | PKG activation |

**Kinase Cascades:**
- Receptor tyrosine kinases
- MAPK pathway
- PI3K/Akt pathway
- JAK-STAT pathway

## Laboratory Techniques

**Common Methods:**
| Technique | Application | Principle |
|-----------|-------------|-----------|
| ELISA | Protein detection | Antibody binding |
| PCR | DNA amplification | Thermal cycling |
| Western blot | Protein identification | Antibody detection |
| Southern blot | DNA detection | Probe hybridization |
| Northern blot | RNA detection | Probe hybridization |

**Genetic Testing:**
- Karyotyping: Chromosomal abnormalities
- FISH: Specific sequences
- Microarray: Copy number variations
- Sequencing: Point mutations`,
      keyTerms: [
        { term: 'glycogenolysis', definition: 'The breakdown of glycogen to glucose-1-phosphate and glucose' },
        { term: 'gluconeogenesis', definition: 'Synthesis of glucose from non-carbohydrate precursors' },
        { term: 'ornithine transcarbamoylase deficiency', definition: 'The most common urea cycle disorder, causing hyperammonemia' },
        { term: 'porphyria', definition: 'Group of disorders affecting heme synthesis, causing neurologic or cutaneous symptoms' },
      ],
      analogies: [
        'The urea cycle is like a wastewater treatment plant - it converts toxic ammonia into safer urea for excretion.',
        'Enzyme cofactors are like keys that unlock enzyme activity - without them, the enzyme cannot work.',
      ],
      examples: [
        'In McArdle disease (myophosphorylase deficiency), patients cannot break down muscle glycogen, causing exercise intolerance and second wind phenomenon.',
        'Lesch-Nyhan syndrome (HGPRT deficiency) causes hyperuricemia and self-mutilating behavior due to purine accumulation.',
      ],
      patientCounselingPoints: [
        'Many metabolic disorders are treatable with diet modifications or enzyme replacement',
        'Genetic counseling is important for families with metabolic disorders',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Step 1 biochemistry requires integration of metabolic pathways, understanding of complex regulatory networks, and clinical correlation of molecular defects. Expert preparation emphasizes disease mechanisms, laboratory interpretation, and therapeutic targets.',
      explanation: `## Advanced Step 1 Biochemistry Concepts

Professional-level biochemistry mastery requires understanding complex pathway integration, regulatory mechanisms, and clinical applications of molecular medicine.

## Integrated Metabolism

**Fed vs. Fasting States:**

**Fed State (Insulin Dominant):**
| Process | Status | Key Enzymes |
|---------|--------|-------------|
| Glycolysis | Active | PFK-1, pyruvate kinase |
| Glycogen synthesis | Active | Glycogen synthase |
| Fatty acid synthesis | Active | Acetyl-CoA carboxylase |
| Fatty acid oxidation | Inhibited | Carnitine shuttle |
| Gluconeogenesis | Inhibited | F-1,6-BPase, G-6-Pase |

**Fasting State (Glucagon Dominant):**
| Process | Status | Key Enzymes |
|---------|--------|-------------|
| Glycogenolysis | Active | Glycogen phosphorylase |
| Gluconeogenesis | Active | PEPCK, pyruvate carboxylase |
| Fatty acid oxidation | Active | CPT I |
| Ketogenesis | Active | HMG-CoA synthase |
| Glycolysis | Inhibited | PFK-1, pyruvate kinase |

**Hormonal Regulation Summary:**
| Hormone | Trigger | Key Actions |
|---------|---------|-------------|
| Insulin | High glucose | Storage, anabolic |
| Glucagon | Low glucose | Glucose release, catabolic |
| Cortisol | Stress | Gluconeogenesis, protein catabolism |
| Epinephrine | Emergency | Glycogenolysis, lipolysis |
| Growth hormone | Growth | Anti-insulin effects |

## Complex Pathway Integration

**Cori Cycle:**
- Muscle: Glucose -> lactate
- Liver: Lactate -> glucose
- Energy cost: 4 ATP per glucose
- Benefit: Maintains glucose during exercise

**Glucose-Alanine Cycle:**
- Muscle: Glucose -> pyruvate -> alanine
- Liver: Alanine -> glucose
- Nitrogen transport mechanism

**Pentose Phosphate Pathway:**
| Phase | Products | Purpose |
|-------|----------|---------|
| Oxidative | NADPH, ribose | Reductive biosynthesis |
| Non-oxidative | Interconversion | Nucleotide synthesis |

**Clinical Importance of PPP:**
- NADPH for fatty acid synthesis
- NADPH for respiratory burst
- Ribose for nucleotide synthesis
- G6PD deficiency: Hemolytic anemia

## Advanced Enzyme Concepts

**Cofactor Requirements:**
| Cofactor | Carries | Enzyme Example |
|----------|---------|----------------|
| Thiamine pyrophosphate | Aldehydes | Pyruvate dehydrogenase |
| Lipoic acid | Acyl groups | Pyruvate dehydrogenase |
| FAD | Hydrogen | Succinate dehydrogenase |
| NAD+ | Hydrogen | Many dehydrogenases |
| CoA | Acyl groups | Acetyl-CoA formation |
| Biotin | CO2 | Pyruvate carboxylase |

**PDH Complex Regulation:**
| Regulator | Effect | Mechanism |
|-----------|--------|-----------|
| Acetyl-CoA | Inhibits | Product inhibition |
| NADH | Inhibits | Product inhibition |
| ATP | Inhibits | Energy charge |
| Pyruvate | Activates | Substrate |
| Insulin | Activates | Dephosphorylation |
| Ca2+ | Activates | Phosphatase stimulation |

## Complex Genetic Mechanisms

**DNA Repair Detailed:**

**Nucleotide Excision Repair:**
1. Damage recognition
2. Excision of oligonucleotide
3. DNA synthesis
4. Ligation

**Mismatch Repair:**
1. Mismatch recognition
2. Strand identification (methylation)
3. Excision
4. Resynthesis

**Homologous Recombination:**
| Step | Process | Purpose |
|------|---------|---------|
| Recognition | MRN complex | Identify DSB |
| Resection | Exonucleases | Create 3\' overhang |
| Strand invasion | RAD51 | Homology search |
| Resolution | Resolvases | Complete repair |

**Trinucleotide Repeat Disorders:**
| Disorder | Gene | Repeat | Inheritance |
|----------|------|--------|-------------|
| Huntington | HTT | CAG | AD |
| Fragile X | FMR1 | CGG | XD |
| Myotonic dystrophy | DMPK | CTG | AD |
| Friedreich ataxia | FXN | GAA | AR |

**Anticipation:**
- Earlier onset in successive generations
- Expansion of repeats
- Paternal vs maternal effects

## Laboratory Medicine Integration

**Enzyme Markers:**
| Marker | Source | Clinical Use |
|--------|--------|--------------|
| CK-MB | Heart | MI diagnosis |
| Troponin | Heart | MI diagnosis |
| ALT | Liver | Hepatocellular injury |
| AST | Liver, heart | Less specific |
| ALP | Liver, bone | Cholestasis |
| GGT | Liver | Alcohol use, cholestasis |
| Amylase | Pancreas | Pancreatitis |
| Lipase | Pancreas | Pancreatitis |

**Metabolic Panels:**
| Panel | Components | Interpretation |
|-------|------------|----------------|
| BMP | Na, K, Cl, CO2, BUN, Cr, Glucose | Basic screening |
| CMP | BMP + LFTs | Comprehensive |
| LFTs | ALT, AST, ALP, bilirubin, albumin | Hepatic function |

**Newborn Screening:**
| Condition | Test | Timing |
|-----------|------|--------|
| PKU | Phenylalanine | 24-48 hours |
| Hypothyroidism | TSH | 24-48 hours |
| Galactosemia | Galactose-1-phosphate | 24-48 hours |
| Sickle cell | Hemoglobin electrophoresis | Variable |
| CF | Immunoreactive trypsin | Variable |
| MCAD | Acylcarnitine profile | Variable |`,
      keyTerms: [
        { term: 'G6PD deficiency', definition: 'Deficiency of glucose-6-phosphate dehydrogenase causing hemolytic anemia with oxidative stress' },
        { term: 'substrate channeling', definition: 'Direct transfer of metabolic intermediates between enzyme active sites' },
        { term: 'post-translational modification', definition: 'Chemical modifications to proteins after translation that regulate function' },
        { term: 'epigenetics', definition: 'Heritable changes in gene expression that do not involve DNA sequence changes' },
      ],
      analogies: [
        'Metabolic pathway compartmentalization is like having different factory floors - related processes happen in specific locations for efficiency.',
        'Epigenetics is like having a dimmer switch for genes - you can turn them up or down without changing the wiring.',
      ],
      examples: [
        'In pyruvate dehydrogenase deficiency, lactate and pyruvate accumulate, causing neurological dysfunction and lactic acidosis.',
        'Propionic acidemia presents with ketoacidosis, hyperammonemia, and elevated propionic acid from defective propionyl-CoA carboxylase.',
      ],
      patientCounselingPoints: [
        'Newborn screening can detect many treatable metabolic disorders before symptoms develop',
        'Some metabolic disorders have carrier screening available for family planning',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert Step 1 biochemistry mastery integrates molecular mechanisms, complex pathway regulation, genetic principles, and clinical therapeutics. Professional understanding requires appreciation of biochemical research, pharmacological targets, and personalized medicine applications.',
      explanation: `## Expert Step 1 Biochemistry Framework

Professional-level biochemistry mastery synthesizes molecular mechanisms, systems biology, clinical therapeutics, and research literacy.

## Systems Biology Perspective

**Metabolome Integration:**
| Level | Focus | Techniques |
|-------|-------|------------|
| Genomics | DNA sequence | Sequencing |
| Transcriptomics | RNA expression | Microarray, RNA-seq |
| Proteomics | Protein expression | Mass spec |
| Metabolomics | Small molecules | NMR, mass spec |

**Network Analysis:**
- Metabolic pathway maps
- Flux analysis
- Regulatory networks
- Disease perturbations

**Flux Control Analysis:**
| Concept | Description |
|---------|-------------|
| Flux control coefficient | Influence on pathway flux |
| Elasticity coefficient | Response to metabolite changes |
| Control strength | Relative importance |

**Clinical Application:**
- Identifying rate-limiting steps
- Therapeutic target selection
- Understanding resistance mechanisms
- Personalized medicine

## Advanced Therapeutic Biochemistry

**Enzyme Replacement Therapy:**
| Disease | Enzyme | Status |
|---------|--------|--------|
| Gaucher | Imiglucerase | Established |
| Fabry | Agalsidase | Established |
| Pompe | Alglucosidase alfa | Established |
| MPS I | Laronidase | Established |

**Small Molecule Chaperones:**
- Mechanism: Stabilize mutant enzymes
- Examples: Migalastat (Fabry)
- Requirements: Residual enzyme activity

**Substrate Reduction:**
- Mechanism: Decrease substrate accumulation
- Example: Miglustat (Gaucher type 1)
- Used when ERT not feasible

**Gene Therapy:**
| Approach | Application | Status |
|----------|-------------|--------|
| In vivo | Lipid nanoparticles | Emerging |
| Ex vivo | CAR-T, stem cells | Established |
| Gene editing | CRISPR | Clinical trials |

## Pharmacogenomics

**Phase I Enzymes:**
| Enzyme | Substrates | Polymorphisms |
|--------|------------|---------------|
| CYP2D6 | Beta-blockers, opioids | Poor, extensive, ultra-rapid |
| CYP2C19 | Clopidogrel, PPIs | Poor metabolizers |
| CYP2C9 | Warfarin, NSAIDs | Altered dosing |
| CYP3A4 | Many drugs | Inducible |

**Phase II Enzymes:**
| Enzyme | Reaction | Clinical Importance |
|--------|----------|---------------------|
| TPMT | Thiopurine metabolism | Dose adjustment |
| NAT2 | Acetylation | Drug toxicity |
| G6PD | Redox metabolism | Hemolysis risk |
| UGT1A1 | Glucuronidation | Irinotecan toxicity |

**Clinical Implementation:**
| Drug | Gene | Action |
|------|------|--------|
| Warfarin | CYP2C9, VKORC1 | Dosing algorithm |
| Clopidogrel | CYP2C19 | Alternative if poor metabolizer |
| Azathioprine | TPMT | Dose reduction |
| Codeine | CYP2D6 | Avoid in ultra-rapid |

## Research Methodology

**Crispr Technology:**
| Application | Mechanism |
|-------------|-----------|
| Gene knockout | NHEJ repair |
| Gene correction | HDR with template |
| Gene regulation | dCas9 fusions |
| Base editing | Deaminase fusion |

**Protein Structure:**
| Technique | Resolution | Application |
|-----------|------------|-------------|
| X-ray crystallography | High | Static structure |
| Cryo-EM | High | Large complexes |
| NMR | Moderate | Dynamics |
| AlphaFold | Predicted | Structure prediction |

**Metabolomics:**
- Targeted vs untargeted
- Stable isotope tracing
- Fluxomics
- Biomarker discovery

## Complex Disease Mechanisms

**Mitochondrial Disorders:**
| Type | Genetics | Features |
|------|----------|----------|
| MELAS | mtDNA | Stroke-like episodes |
| MERRF | mtDNA | Myoclonic epilepsy |
| LHON | mtDNA | Optic neuropathy |
| Leigh | Nuclear/mtDNA | Subacute necrotizing |

**Heteroplasmy Effects:**
- Threshold effect
- Tissue specificity
- Age-related decline
- Variable expression

**Prion Diseases:**
| Disease | Mechanism | Features |
|---------|-----------|----------|
| CJD | PrPSc accumulation | Rapid dementia |
| vCJD | Bovine transmission | Younger onset |
| FFI | Thalamus predilection | Fatal insomnia |
| GSS | Cerebellar predilection | Ataxia |

**Protein Misfolding:**
| Disease | Protein | Deposition |
|---------|---------|------------|
| Alzheimer | Abeta, tau | Brain amyloid |
| Parkinson | Alpha-synuclein | Lewy bodies |
| ALS | SOD1, TDP-43 | Inclusions |
| Huntington | Huntingtin | Nuclear inclusions |

## Personalized Medicine

**Metabolic Phenotyping:**
| Approach | Application |
|----------|-------------|
| Metabolomics | Dietary responses |
| Microbiome | Drug metabolism |
| Genetics | Risk stratification |
| Exposome | Environmental effects |

**Precision Nutrition:**
- Nutrient-gene interactions
- Metabolic phenotypes
- Individual requirements
- Disease prevention

**Future Directions:**
| Area | Development |
|------|-------------|
| AI/ML | Pattern recognition |
| Wearables | Continuous monitoring |
| Digital twins | Personalized simulation |
| Organoids | Patient-specific models |`,
      keyTerms: [
        { term: 'heteroplasmy', definition: 'The presence of more than one type of mitochondrial DNA within a cell or individual' },
        { term: 'metabolomics', definition: 'The large-scale study of small molecules, commonly known as metabolites' },
        { term: 'pharmacogenomics', definition: 'The study of how genes affect a person\'s response to drugs' },
        { term: 'epigenetics', definition: 'Changes in gene expression that do not involve changes to the underlying DNA sequence' },
      ],
      clinicalNotes: `Expert perspective on Step 1 biochemistry:

1. **Integration Over Isolation:** Biochemistry does not exist in isolation. Always connect pathways to clinical scenarios and disease states.

2. **Enzyme Deficiency Patterns:** Know the accumulation, deficiency, and alternative pathways for each enzyme defect. This predicts clinical manifestations.

3. **Fed vs. Fasting:** Understand metabolic switches and their regulation. This explains many clinical presentations and guides therapy.

4. **Genetic Heterogeneity:** Same phenotype can result from different genetic defects (genetic heterogeneity). Same defect can cause different phenotypes (variable expressivity).

5. **Laboratory Interpretation:** Biochemistry underlies all laboratory medicine. Understand what tests measure and their limitations.

6. **Therapeutic Targets:** Many drugs target enzymes or receptors. Understanding biochemistry explains drug mechanisms and side effects.

7. **Nutrition Integration:** Biochemistry explains nutritional requirements and deficiency manifestations. Know vitamin cofactors cold.

8. **Pediatric Emphasis:** Many metabolic disorders present in newborns or children. Know newborn screening and emergency presentations.

9. **Signal Transduction:** G-proteins, kinases, and second messengers are frequently tested. Know the major pathways and their clinical correlates.

10. **Emerging Science:** CRISPR, gene therapy, and personalized medicine are transforming clinical practice. Stay current with developments.`,
    },
  },

  media: [
    {
      id: 'glycolysis-pathway',
      type: 'diagram',
      filename: 'glycolysis-pathway.svg',
      title: 'Glycolysis Pathway',
      description: 'Diagram showing glycolysis steps and enzymes',
    },
    {
      id: 'metabolic-integration',
      type: 'diagram',
      filename: 'metabolic-integration.svg',
      title: 'Metabolic Pathway Integration',
      description: 'Overview of interconnected metabolic pathways',
    },
  ],

  citations: [
    {
      id: 'lippincott-biochem',
      type: 'textbook',
      title: 'Lippincott Illustrated Reviews: Biochemistry',
      authors: ['Ferrier, D.R.'],
      source: 'Lippincott Williams & Wilkins',
      accessedDate: '2025-01-28',
    },
    {
      id: 'first-aid-biochem',
      type: 'textbook',
      title: 'First Aid for the USMLE Step 1',
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'parent', label: 'Step 1 Overview' },
    { targetId: 'education-usmle-step1-pharmacology', targetType: 'concept', relationship: 'related', label: 'Step 1 Pharmacology' },
    { targetId: 'genetics-basics', targetType: 'concept', relationship: 'related', label: 'Genetics Basics' },
  ],

  tags: {
    systems: ['medical-education', 'biochemistry'],
    topics: ['USMLE Step 1', 'biochemistry', 'metabolism', 'genetics'],
    keywords: ['USMLE', 'Step 1', 'biochemistry', 'metabolism', 'enzymes', 'genetics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default step1Biochem;
