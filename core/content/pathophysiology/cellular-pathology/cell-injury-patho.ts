import { EducationalContent, ComplexityLevel } from '../../types';

export const cellInjuryPatho: EducationalContent = {
  id: 'cell-injury-patho',
  type: 'topic',
  name: 'Cellular Injury',
  levels: {
    1: {
      level: 1 as ComplexityLevel,
      summary: 'Cellular injury occurs when cells are exposed to stressors that exceed their adaptive capacity, leading to structural and functional changes.',
      explanation: `Cellular injury happens when cells are exposed to stressors that exceed their adaptive capacity, leading to structural and functional changes. Understanding cellular injury is fundamental to comprehending disease processes at the molecular and tissue levels.

## What is Cellular Injury?

Think of your cells like tiny factories that work to keep your body running. When these factories face too much stress, they can get damaged. This is called cellular injury.

## Types of Cellular Injury

Cellular injury can be **reversible** or **irreversible**:

- **Reversible injury**: The cell can recover if the stressor is removed. Like a plant that wilts but perks up when you water it again.
- **Irreversible injury**: The damage is permanent and leads to cell death. Like a plant that has completely dried out and cannot recover.

## Why Does This Matter?

Understanding cellular injury is important because:
- It helps us understand how diseases develop
- It guides doctors in treating conditions early, before damage becomes permanent
- It explains why different organs respond differently to stress

## Common Causes

Cells can be injured by many things:
- Lack of oxygen (like during a heart attack)
- Toxins and chemicals
- Extreme temperatures
- Infections
- Physical trauma`,
      keyTerms: [
        { term: 'Homeostasis', definition: 'The state of steady internal physical and chemical conditions maintained by living systems' },
        { term: 'Cellular Stress', definition: 'Conditions that threaten normal cell function and survival' },
        { term: 'Reversible Injury', definition: 'Cellular damage that can be restored if the stressor is removed' },
        { term: 'Irreversible Injury', definition: 'Permanent cellular damage leading to cell death' },
        { term: 'Etiology', definition: 'The cause or set of causes of a disease or condition' }
      ],
      analogies: [
        'Cellular injury is like a car engine overheating - if you catch it early and turn off the AC, the engine can recover. But if you keep driving, the engine is permanently damaged.',
        'Think of cells like balloons - reversible injury is like a balloon that stretches, irreversible injury is like a balloon that pops.'
      ],
      examples: [
        'When you sleep on your arm, it tingles because of mild reversible injury from reduced blood flow. Shaking your arm restores blood flow and the feeling returns.',
        'A sunburn causes reversible skin cell injury. The skin peels and heals, but severe sunburns over time can cause permanent damage.'
      ],
      patientCounselingPoints: [
        'Early detection of cellular injury allows for better treatment outcomes',
        'Lifestyle changes can prevent many forms of chronic cellular injury',
        'Some organs (like the liver) can heal from injury better than others (like the heart)'
      ]
    },
    2: {
      level: 2 as ComplexityLevel,
      summary: 'Cellular injury results from diverse etiologic agents that disrupt cellular homeostasis through specific biochemical and molecular pathways.',
      explanation: `Cellular injury results from diverse etiologic agents that disrupt cellular homeostasis through specific biochemical and molecular pathways. The nature and severity of injury depend on the type of agent, duration of exposure, and intrinsic cellular defenses.

## Mechanisms of Cellular Injury

### Hypoxic Injury

Hypoxia (lack of oxygen) is one of the most common causes of cellular injury. Without oxygen, cells cannot produce ATP through aerobic respiration.

**Consequences of ATP depletion:**
- Failure of Na+/K+ ATPase → cellular swelling
- Failure of calcium pumps → calcium influx
- Switch to anaerobic metabolism → lactic acid buildup

### Free Radical Damage

Free radicals are unstable molecules that react with and damage cellular components:

- **Lipid peroxidation**: Damages cell membranes
- **Protein damage**: Alters enzyme function
- **DNA injury**: Causes mutations and cell death

**Antioxidant defenses** include:
- Enzymes: superoxide dismutase, catalase, glutathione peroxidase
- Molecules: glutathione, vitamin C, vitamin E

### Chemical Injury

Chemicals can directly damage cells or be metabolically activated to toxic intermediates. For example, acetaminophen is converted to a toxic metabolite that causes liver damage when taken in excess.

### Physical Agents

- **Trauma**: Direct mechanical damage
- **Temperature extremes**: Burns or hypothermia
- **Radiation**: DNA damage and free radical production

## Factors Determining Injury Severity

1. **Duration** of exposure: Longer exposure → worse injury
2. **Severity** of insult: Greater intensity → more damage
3. **Cell type**: Some cells are more vulnerable
4. **Cellular defenses**: Antioxidants, repair mechanisms
5. **Blood supply**: Well-perfused tissues resist injury better`,
      keyTerms: [
        { term: 'Ischemia', definition: 'Inadequate blood supply to an organ or part of the body, especially the heart muscles' },
        { term: 'Reactive Oxygen Species (ROS)', definition: 'Unstable molecules containing oxygen that react with other molecules in cells' },
        { term: 'Lipid Peroxidation', definition: 'The oxidative degradation of lipids in cell membranes' },
        { term: 'Antioxidants', definition: 'Molecules that neutralize free radicals and prevent oxidative damage' },
        { term: 'Anaerobic Metabolism', definition: 'Metabolic processes that do not require oxygen, less efficient than aerobic metabolism' }
      ],
      analogies: [
        'Free radicals are like "rogue chemicals" that vandalize your cells - antioxidants are like security guards that stop them.',
        'ATP is like cellular currency. When oxygen runs out, the cell goes "bankrupt" and cannot pay for essential functions.'
      ],
      examples: [
        'Myocardial infarction: Blocked coronary artery causes ischemia → myocardial cell death',
        'Pulmonary fibrosis: Asbestos fibers cause chronic free radical production → scarring',
        'Acetaminophen toxicity: Overdose produces toxic metabolite → liver cell damage'
      ],
      patientCounselingPoints: [
        'Antioxidant-rich foods may help protect cells from free radical damage',
        'Avoiding known toxins (like excessive alcohol) prevents cellular injury',
        'Early treatment of conditions like high blood pressure prevents end-organ damage'
      ]
    },
    3: {
      level: 3 as ComplexityLevel,
      summary: 'Cellular injury initiates through specific molecular pathways that disrupt critical cellular processes, including energy failure, ionic imbalance, oxidative damage, and stress response activation.',
      explanation: `Cellular injury initiates through specific molecular pathways that disrupt critical cellular processes. These pathways involve energy failure, ionic imbalance, oxidative damage, and activation of stress responses that determine cell fate.

## Molecular Pathogenesis

### ATP Depletion Consequences

ATP is the primary energy currency of the cell. Depletion has cascading effects:

1. **Na+/K+ ATPase failure** → sodium accumulation → water influx → cellular swelling (hydropic degeneration)
2. **Calcium pump failure** → cytosolic calcium increase
3. **Reduced protein synthesis** → impaired repair
4. **Failure of detoxification systems** → accumulation of waste products

### Mitochondrial Dysfunction

Mitochondria are both targets and mediators of injury:

- **Permeability transition pore (MPTP)**: Pathological opening releases pro-apoptotic factors
- **Cytochrome c release**: Triggers apoptosis
- **Uncoupling of oxidative phosphorylation**: Worsens ATP depletion

### Calcium Homeostasis Disruption

Increased cytosolic calcium activates destructive enzymes:

- **Phospholipases**: Degrade membrane phospholipids
- **Proteases**: Degrade cytoskeletal and membrane proteins
- **Endonucleases**: Fragment DNA
- **ATPases**: Consume remaining ATP

### Oxidative Stress Mechanisms

ROS are generated through:
- Mitochondrial electron transport chain leakage
- Enzymatic production (xanthine oxidase, cytochrome P450)
- Inflammatory cell activation

ROS cause damage through:
- **Lipid peroxidation**: Membrane damage
- **Protein oxidation**: Enzyme inactivation
- **DNA damage**: Mutations and strand breaks

### Membrane Damage Pathways

1. **Direct injury**: Physical or chemical damage
2. **Phospholipase activation**: Calcium-dependent degradation
3. **ROS-mediated peroxidation**: Lipid damage
4. **Lysosomal enzyme leakage**: Autodigestion

### Endoplasmic Reticulum Stress

ER stress triggers the **unfolded protein response (UPR)**:
- Reduces protein synthesis
- Increases chaperone production
- Activates degradation pathways
- If prolonged → apoptosis

### DNA Damage Responses

DNA damage activates:
- **p53**: Cell cycle arrest and repair or apoptosis
- **PARP activation**: Consumes NAD+ and ATP
- **DNA repair enzymes**: Attempt restoration`,
      keyTerms: [
        { term: 'Oxidative Phosphorylation', definition: 'Metabolic pathway in which cells use enzymes to oxidize nutrients, releasing energy to produce ATP' },
        { term: 'Calcium Influx', definition: 'Movement of calcium ions into the cytoplasm, activating various enzymes' },
        { term: 'Phospholipase A2', definition: 'Enzyme that hydrolyzes phospholipids, releasing fatty acids' },
        { term: 'Unfolded Protein Response', definition: 'Cellular stress response related to ER stress that attempts to restore homeostasis' },
        { term: 'Inflammasome', definition: 'Multiprotein oligomer that activates inflammatory responses' },
        { term: 'p53', definition: 'Tumor suppressor protein that activates DNA repair or apoptosis in response to cellular stress' }
      ],
      analogies: [
        'Calcium influx is like opening floodgates - once calcium rushes in, it activates destructive enzymes like water flooding and destroying everything in its path.',
        'The unfolded protein response is like a factory quality control system - when too many defective products pile up, the system either slows production or shuts down the factory.'
      ],
      examples: [
        'Lactic acidosis: Anaerobic metabolism during hypoxia produces lactate',
        'Elevated troponin: Myocardial cell membrane damage releases cardiac enzymes',
        'Neurodegenerative diseases: Protein misfolding overwhelms the UPR',
        'Chemotherapy: Induces DNA damage in rapidly dividing cancer cells',
        'Ischemia-reperfusion injury: Sudden oxygen return causes massive ROS production'
      ],
      clinicalNotes: 'Understanding these pathways has therapeutic implications. Targeting specific steps (like calcium channel blockers, antioxidants, or caspase inhibitors) may modify injury progression.'
    },
    4: {
      level: 4 as ComplexityLevel,
      summary: 'Cellular injury produces characteristic morphological changes visible at light and electron microscopy levels, reflecting underlying biochemical alterations and helping determine the type, severity, and timing of injury.',
      explanation: `Cellular injury produces characteristic morphological changes visible at light and electron microscopy levels. These changes reflect underlying biochemical alterations and help determine the type, severity, and timing of injury.

## Reversible Injury Morphology

### Light Microscopy Findings

1. **Cellular Swelling**
   - Hydropic degeneration
   - Pale, swollen cytoplasm
   - Distended organelles

2. **Fatty Change (Steatosis)**
   - Lipid vacuoles in cytoplasm
   - Common in liver, heart, kidney
   - Results from impaired lipid metabolism

3. **Plasma Membrane Alterations**
   - Blebbing
   - Loss of microvilli
   - Increased permeability

### Electron Microscopy Findings

- Mitochondrial swelling
- Dilated ER
- Plasma membrane blebs
- Nuclear chromatin clumping

## Irreversible Injury Morphology

### Nuclear Changes

1. **Pyknosis**: Irreversible chromatin condensation
2. **Karyorrhexis**: Nuclear fragmentation
3. **Karyolysis**: Nuclear dissolution

### Necrosis Types and Patterns

1. **Coagulative Necrosis**
   - Architecture preserved
   - Hypereosinophilic cytoplasm
   - Nuclei lost
   - Typical of ischemia in most organs

2. **Liquefactive Necrosis**
   - Complete digestion
   - Liquid consistency
   - Typical of brain infarcts, bacterial infections

3. **Caseous Necrosis**
   - Cheese-like appearance
   - Amorphous debris
   - Typical of tuberculosis

4. **Fat Necrosis**
   - Saponification of fat
   - Chalky white areas
   - Typical of acute pancreatitis

5. **Fibrinoid Necrosis**
   - Fibrin deposition
   - Bright pink staining
   - Typical of immune-mediated vascular injury

### Apoptosis Morphology

- Cellular shrinkage
- Chromatin condensation (margination)
- Nuclear fragmentation
- Formation of apoptotic bodies
- Phagocytosis without inflammation

## Subcellular Alterations

### Mitochondrial Changes

- Amorphous densities (irreversible)
- Megamitochondria
- Crystalline inclusions

### Lysosomal Changes

- Increased number and size
- Enzyme leakage causes autodigestion

### Cytoskeletal Changes

- Intermediate filament accumulation (Mallory bodies)
- Neurofibrillary tangles`,
      keyTerms: [
        { term: 'Hydropic Degeneration', definition: 'Cellular swelling due to water accumulation from ion pump failure' },
        { term: 'Steatosis', definition: 'Abnormal retention of lipids within cells' },
        { term: 'Pyknosis', definition: 'Irreversible condensation of chromatin in the nucleus' },
        { term: 'Karyorrhexis', definition: 'Fragmentation of the nucleus' },
        { term: 'Karyolysis', definition: 'Dissolution of the nucleus' },
        { term: 'Coagulative Necrosis', definition: 'Form of necrosis where tissue architecture is preserved despite cell death' },
        { term: 'Liquefactive Necrosis', definition: 'Form of necrosis where tissue is completely digested into liquid debris' },
        { term: 'Caseous Necrosis', definition: 'Cheese-like necrosis characteristic of tuberculosis' },
        { term: 'Fibrinoid Necrosis', definition: 'Necrosis with fibrin deposition, typical of immune vascular injury' }
      ],
      analogies: [
        'Coagulative necrosis is like cooking an egg white - the proteins solidify but the basic shape remains.',
        'Liquefactive necrosis is like ice melting - the structure completely dissolves into liquid.'
      ],
      examples: [
        'Fatty liver disease: Hepatic steatosis visible on imaging',
        'Myocardial infarction: Coagulative necrosis of cardiac muscle',
        'Tuberculosis: Caseous necrosis in granulomas',
        'Stroke: Liquefactive necrosis in brain tissue',
        'Viral hepatitis: Apoptotic bodies in liver tissue'
      ],
      clinicalNotes: 'Pathologists use these morphological patterns to determine the cause and timing of injury, which guides clinical decisions and treatment strategies.'
    },
    5: {
      level: 5 as ComplexityLevel,
      summary: 'Understanding cellular injury has direct clinical applications in diagnosis, monitoring, and treatment through biomarkers, imaging modalities, and targeted therapies that detect injury early, prevent progression, and promote recovery.',
      explanation: `Understanding cellular injury has direct clinical applications in diagnosis, monitoring, and treatment. Biomarkers, imaging modalities, and targeted therapies allow clinicians to detect injury early, prevent progression, and promote recovery.

## Biomarkers of Cellular Injury

### Tissue-Specific Enzymes

| Organ | Biomarker | Clinical Utility |
|-------|-----------|------------------|
| Heart | Troponin I/T, CK-MB | Myocardial infarction diagnosis |
| Liver | ALT, AST, ALP | Hepatocellular injury patterns |
| Skeletal Muscle | CK-MM | Muscle injury, rhabdomyolysis |
| Pancreas | Amylase, Lipase | Pancreatitis |
| Brain | S100, NSE | Traumatic brain injury |
| Kidney | Creatinine, BUN, NGAL | Renal tubular injury |

### Novel Biomarkers

- **High-sensitivity troponin**: Earlier MI detection
- **NGAL**: Early acute kidney injury
- **GFAP**: Traumatic brain injury
- **MicroRNAs**: Organ-specific injury signatures

## Imaging Cellular Damage

### Modalities

1. **CT Perfusion**: Tissue viability assessment
2. **MRI Diffusion-weighted**: Early ischemia detection
3. **PET Metabolic imaging**: Cellular metabolism
4. **Elastography**: Tissue stiffness (fibrosis)
5. **Contrast-enhanced studies**: Perfusion defects

### Applications

- Stroke penumbra identification
- Myocardial viability assessment
- Tumor treatment response
- Organ rejection monitoring

## Therapeutic Interventions

### Preventive Strategies

1. **Ischemic Preconditioning**
   - Brief ischemia induces protective mechanisms
   - Involves ROS signaling, KATP channels
   - Clinical application in cardiac surgery

2. **Remote Preconditioning**
   - Limb ischemia protects distant organs
   - Neural and humoral mediators

3. **Pharmacologic Preconditioning**
   - Opioids, volatile anesthetics
   - Adenosine receptor agonists

### Targeted Therapies

1. **Antioxidant Therapies**
   - N-acetylcysteine (acetaminophen toxicity)
   - Edaravone (stroke, ALS)
   - Mitochondria-targeted antioxidants

2. **Anti-apoptotic Agents**
   - Caspase inhibitors (liver disease, neuroprotection)
   - Bcl-2 mimetics

3. **Calcium Modulators**
   - Calcium channel blockers
   - Calcineurin inhibitors

4. **Anti-inflammatory Agents**
   - Corticosteroids
   - IL-1 inhibitors
   - Colchicine

5. **Membrane Stabilizers**
   - Corticosteroids (traumatic spinal injury)

### Organ-Specific Approaches

**Cardiovascular**
- Reperfusion strategies
- Mechanical circulatory support
- Metabolic modulators (ranolazine)

**Neurologic**
- Therapeutic hypothermia
- NMDA antagonists
- Free radical scavengers

**Hepatic**
- N-acetylcysteine
- Liver support systems
- Early transplantation referral

**Renal**
- Volume optimization
- Nephrotoxin avoidance
- Renal replacement therapy timing

## Prognostic Indicators

### Serum Markers
- Peak troponin predicts infarct size
- Transaminase trends in liver injury
- Creatinine kinetics in AKI

### Clinical Scoring Systems
- APACHE, SOFA for multiorgan injury
- MELD for liver disease
- Killip class for MI

### Histologic Features
- Necrosis extent vs. fibrosis
- Regenerative nodules in liver
- Myocardial viability on biopsy

## Emerging Therapies

1. **Stem Cell Therapy**
   - Regenerative potential
   - Paracrine effects
   - Ongoing clinical trials

2. **Gene Therapy**
   - Anti-apoptotic gene delivery
   - Antioxidant enzyme enhancement
   - CRISPR applications

3. **Exosome Therapy**
   - Cell-free regenerative approach
   - Organ-protective signaling

4. **Mitochondrial Transplantation**
   - Transfer of healthy mitochondria
   - Early experimental stage

5. **Precision Medicine**
   - Genetic risk stratification
   - Biomarker-guided therapy
   - Pharmacogenomics`,
      keyTerms: [
        { term: 'Troponin', definition: 'Regulatory protein complex for muscle contraction; elevated levels indicate cardiac injury' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin, early biomarker for acute kidney injury' },
        { term: 'Ischemic Preconditioning', definition: 'Exposure to brief ischemia that protects against subsequent injury' },
        { term: 'Therapeutic Hypothermia', definition: 'Controlled lowering of body temperature to reduce cellular injury' },
        { term: 'Reperfusion Injury', definition: 'Tissue damage caused when blood supply returns after ischemia' },
        { term: 'Penumbra', definition: 'Area of hypoperfused but viable tissue surrounding ischemic core' },
        { term: 'MELD Score', definition: 'Model for End-Stage Liver Disease, prognostic score for liver disease severity' }
      ],
      analogies: [
        'Ischemic preconditioning is like a fire drill - practicing a small stress prepares the cell to handle a bigger emergency.',
        'The penumbra is like the "damage control zone" around a fire - if you act fast, you can save this area.'
      ],
      examples: [
        'High-sensitivity troponin in emergency department chest pain evaluation',
        'CT perfusion to identify stroke penumbra for thrombolysis decisions',
        'N-acetylcysteine for acetaminophen toxicity (8-hour treatment window)',
        'Therapeutic hypothermia after cardiac arrest (32-36°C for 24 hours)',
        'Stem cell trials for ischemic heart disease and stroke recovery'
      ],
      clinicalNotes: 'Early detection and intervention remain the cornerstones of managing cellular injury. The therapeutic window is often narrow, emphasizing the importance of rapid diagnosis and treatment initiation.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['general'],
    topics: ['pathology', 'cell-biology', 'cellular-injury'],
    keywords: ['ischemia', 'hypoxia', 'free-radicals', 'necrosis', 'apoptosis', 'cell-stress'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology']
    }
  },
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
  version: 1,
  status: 'draft'
};
