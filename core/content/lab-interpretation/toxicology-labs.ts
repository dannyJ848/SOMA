/**
 * Toxicology Labs Interpretation Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * toxicology laboratory studies including therapeutic drug monitoring,
 * drug levels, drug of abuse screening, and heavy metals.
 *
 * Spanish: Laboratorios de Toxicologia
 */

import { EducationalContent } from "../types";

export const toxicologyLabsContent: EducationalContent = {
  id: "toxicology-labs",
  type: "concept",
  name: "Toxicology Laboratory Interpretation",
  nameEs: 'Laboratorio de Toxicologia',
  alternateNames: [
    "Toxicology Labs",
    "Therapeutic Drug Monitoring",
    "Drug Levels",
    "Laboratorios de Toxicologia",
    "Monitoreo Terapeutico de Farmacos",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Toxicology labs measure drug and chemical levels in your blood to make sure medicines are safe and to check for poisoning.",
      explanation: `Toxicology labs are blood tests that check how much of a drug or chemical is in your body. They are important for two main reasons:

1. **Keeping medicines safe** - Some medicines only work well when there is just the right amount in your blood. Too little and the medicine does not work. Too much and it can be dangerous. Doctors check your blood to make sure the amount is just right. This is called "therapeutic drug monitoring."

2. **Checking for poisoning** - If someone accidentally or intentionally takes too much of a medicine or a harmful substance, doctors can measure the levels in the blood to find out how serious the problem is and decide the best treatment.

Common things that are tested include:
- **Heart medicines** like digoxin
- **Mood medicines** like lithium
- **Seizure medicines** like phenytoin and valproic acid
- **Pain medicines** like acetaminophen (Tylenol)
- **Alcohol** and other toxic alcohols
- **Heavy metals** like lead

Doctors also use urine drug screens to check whether someone has recently used certain drugs.

**Spanish / Espanol:** Los laboratorios de toxicologia miden los niveles de medicamentos y sustancias quimicas en su sangre para asegurar que los medicamentos sean seguros y para detectar envenenamientos.`,
      keyTerms: [
        {
          term: "toxicology",
          definition:
            "The study of poisons and harmful effects of drugs and chemicals on the body",
        },
        {
          term: "therapeutic drug monitoring",
          definition:
            "Blood tests to make sure a medicine is at a safe and effective level",
        },
        {
          term: "drug level",
          definition: "The amount of a medicine or chemical found in your blood",
        },
        {
          term: "urine drug screen",
          definition:
            "A test that checks your urine for signs of certain drugs",
        },
        {
          term: "poisoning",
          definition:
            "When a harmful substance causes damage to the body, also called toxicity or intoxication",
        },
      ],
      analogies: [
        "Therapeutic drug monitoring is like checking the temperature on an oven - too low and the food will not cook, too high and it will burn. You need it just right.",
        "A urine drug screen is like a security checkpoint that looks for specific items. It can tell you if something is there but not exactly how much.",
      ],
      patientCounselingPoints: [
        "Always take your medicine as prescribed and show up for blood tests on time.",
        "If you take too much of any medicine, call Poison Control (1-800-222-1222) or go to the emergency room right away.",
      ],
    },

    2: {
      level: 2,
      summary:
        "Toxicology labs include therapeutic drug monitoring for narrow therapeutic index drugs, quantitative drug levels for overdose assessment, urine drug screens, and heavy metal testing.",
      explanation: `Toxicology laboratory studies serve two main purposes: ensuring medications are at therapeutic concentrations and evaluating potential poisoning or overdose.

## Therapeutic Drug Monitoring (TDM)

Some medications have a **narrow therapeutic index**, meaning the effective dose is close to the toxic dose. These require regular blood level monitoring:

| Drug | Therapeutic Range | Toxic Level | What It Treats |
|------|-------------------|-------------|----------------|
| Digoxin | 0.8-2.0 ng/mL | >2.0 ng/mL | Heart failure, atrial fibrillation |
| Lithium | 0.6-1.2 mEq/L | >1.5 mEq/L | Bipolar disorder |
| Phenytoin | 10-20 mcg/mL | >20 mcg/mL | Seizures |
| Valproic acid | 50-100 mcg/mL | >100 mcg/mL | Seizures, bipolar disorder |
| Carbamazepine | 4-12 mcg/mL | >15 mcg/mL | Seizures, nerve pain |
| Theophylline | 10-20 mcg/mL | >20 mcg/mL | Asthma, COPD |

## Overdose Drug Levels

- **Acetaminophen (Tylenol)**: Toxic above 150 mcg/mL at 4 hours post-ingestion. The Rumack-Matthew nomogram helps predict liver damage risk.
- **Salicylate (Aspirin)**: Therapeutic 15-30 mg/dL; toxic >40 mg/dL.
- **Ethanol (alcohol)**: Legal limit 80 mg/dL (0.08%). Lethal range varies but typically >400 mg/dL.

## Urine Drug Screen (UDS)

A UDS is a qualitative test that detects drug classes:
- Amphetamines, barbiturates, benzodiazepines, cannabinoids, cocaine, opiates, PCP

## Heavy Metals

- **Lead**: Normal <5 mcg/dL in children; elevated levels cause developmental and neurological problems.
- **Mercury**: Normal <10 mcg/L in blood.
- **Arsenic**: Normal <50 mcg/L in urine.

**Spanish / Espanol:** Los estudios de toxicologia incluyen monitoreo terapeutico de farmacos, niveles cuantitativos de medicamentos para evaluar sobredosis, pruebas de deteccion de drogas en orina y pruebas de metales pesados.`,
      keyTerms: [
        {
          term: "narrow therapeutic index",
          definition:
            "A drug where the effective dose is close to the toxic dose, requiring careful monitoring",
          pronunciation: "THER-ah-PEW-tik",
        },
        {
          term: "Rumack-Matthew nomogram",
          definition:
            "A chart used to predict the risk of liver damage after acetaminophen overdose based on time and blood level",
        },
        {
          term: "qualitative test",
          definition:
            "A test that tells you whether something is present (positive or negative) but not how much",
        },
        {
          term: "quantitative test",
          definition:
            "A test that measures the exact amount of a substance in the blood or urine",
        },
      ],
      analogies: [
        "A narrow therapeutic index drug is like walking a tightrope - you need to stay right in the middle. Lean too far either way and you are in trouble.",
        "A urine drug screen is like a metal detector at an airport: it tells you something is there, but not exactly what type of metal or how much.",
      ],
    },

    3: {
      level: 3,
      summary:
        "Systematic toxicology interpretation requires understanding pharmacokinetics, time-dependent drug levels, nomogram utilization, toxidrome recognition, and osmolal/anion gap calculations for toxic alcohol identification.",
      explanation: `## Systematic Toxicology Lab Interpretation

### Therapeutic Drug Monitoring - Key Pharmacokinetic Principles

**Timing of Levels:**
- **Trough levels**: Drawn just before the next dose (most drugs)
- **Peak levels**: Drawn at expected Cmax (aminoglycosides)
- **Steady-state**: Requires 4-5 half-lives of dosing before levels are reliable

**Drug-Specific Considerations:**

| Drug | Half-Life | Key Interactions | Monitoring Notes |
|------|-----------|------------------|------------------|
| Digoxin | 36-48 hrs | Renal function, K+, amiodarone | Draw 6+ hrs post-dose; hypokalemia increases toxicity |
| Lithium | 18-24 hrs | NSAIDs, ACE-I, thiazides | 12-hr trough; check with Cr, TSH |
| Phenytoin | 22 hrs | Highly protein-bound (90%) | Correct for albumin: Adjusted = Measured / (0.2 x Alb + 0.1) |
| Valproic acid | 8-17 hrs | Protein binding saturates at high levels | Free level if albumin low or level >75 |
| Carbamazepine | 12-17 hrs | Auto-induces own metabolism | Levels drop over first weeks |
| Theophylline | 4-8 hrs | CYP1A2 substrate; smoking, ciprofloxacin | Seizures and arrhythmias at toxic levels |

### Acetaminophen Toxicity

**Rumack-Matthew Nomogram Application:**
1. Determine time of ingestion (must be acute, single time-point ingestion)
2. Draw level at least 4 hours post-ingestion
3. Plot on nomogram: Level vs. time since ingestion
4. Above treatment line (150 mcg/mL at 4 hrs) -> Start N-acetylcysteine (NAC)

**Mechanism:** NAPQI (toxic metabolite) causes hepatocellular necrosis when glutathione is depleted.

### Salicylate Toxicity

- **Mild**: 30-50 mg/dL - tinnitus, nausea
- **Moderate**: 50-70 mg/dL - hyperpnea, confusion
- **Severe**: >70 mg/dL - seizures, pulmonary edema, death
- Classic acid-base: Mixed respiratory alkalosis + high anion gap metabolic acidosis

### Toxic Alcohols

| Substance | Osmolal Gap | Anion Gap | Metabolite | Clinical |
|-----------|-------------|-----------|------------|----------|
| Ethanol | Elevated | Normal/mild | Acetaldehyde | CNS depression |
| Methanol | Elevated | Elevated | Formic acid | Blindness, basal ganglia necrosis |
| Ethylene glycol | Elevated | Elevated | Oxalic acid | Renal failure, calcium oxalate crystals |

**Osmolal Gap** = Measured osmolality - Calculated osmolality (normal <10 mOsm/kg)

### Urine Drug Screen Pitfalls

**False Positives:**
| Drug Detected | Actually Caused By |
|---------------|-------------------|
| Amphetamines | Pseudoephedrine, bupropion, labetalol |
| Benzodiazepines | Sertraline, efavirenz |
| Opiates | Poppy seeds, dextromethorphan |
| PCP | Dextromethorphan, diphenhydramine, ketamine |

**False Negatives:** Synthetic opioids (fentanyl) not detected on standard UDS.

### Heavy Metal Toxicity

| Metal | Source | Key Finding | Treatment |
|-------|--------|-------------|-----------|
| Lead | Paint, pipes, occupational | Basophilic stippling, microcytic anemia, lead lines | Chelation (succimer, CaEDTA) |
| Mercury | Fish, thermometers, occupational | Erethism, tremor, nephrotoxicity | Chelation (DMSA, BAL) |
| Arsenic | Groundwater, pesticides | Mees lines, garlic breath, GI symptoms | Chelation (BAL, DMSA) |

**Spanish / Espanol:** La interpretacion sistematica de toxicologia requiere comprension de farmacocinetica, niveles de medicamentos dependientes del tiempo, uso de nomogramas, reconocimiento de toxidromes y calculos de brecha osmolar y anionica.`,
      keyTerms: [
        {
          term: "osmolal gap",
          definition:
            "The difference between measured and calculated serum osmolality; elevated in toxic alcohol ingestions",
        },
        {
          term: "anion gap",
          definition:
            "Na - (Cl + HCO3); elevated in metabolic acidosis from toxic metabolites",
        },
        {
          term: "NAPQI",
          definition:
            "N-acetyl-p-benzoquinone imine - the toxic metabolite of acetaminophen that causes liver damage",
          pronunciation: "NAP-kwee",
        },
        {
          term: "chelation therapy",
          definition:
            "Treatment that uses special drugs to bind heavy metals in the blood so the body can remove them",
        },
      ],
      clinicalNotes:
        "Always draw acetaminophen and salicylate levels in any intentional overdose regardless of reported substance. Obtain ethanol level and calculate osmolal gap when toxic alcohol ingestion is suspected.",
    },

    4: {
      level: 4,
      summary:
        "Advanced toxicology interpretation integrates pharmacokinetic modeling, serial level interpretation, extracorporeal elimination criteria, and comprehensive toxidrome-to-laboratory correlation for complex poisoning management.",
      explanation: `## Advanced Toxicology Laboratory Interpretation

### Advanced Pharmacokinetic Considerations

**Digoxin:**
- Levels unreliable for 6 hours after IV and 8 hours after oral dosing due to distribution phase
- Digoxin-specific Fab fragments (DigiFab) interfere with immunoassay - levels rise paradoxically after treatment
- Chronic toxicity occurs at lower levels in elderly, renal impairment, hypokalemia, hypomagnesemia
- Indications for DigiFab: life-threatening arrhythmia, K+ >5.0, level >10 ng/mL (acute), level >6 ng/mL (chronic)

**Phenytoin - Advanced Protein Binding:**
- 90% protein-bound to albumin
- Sheiner-Tozer correction: Adjusted = Measured / (0.2 x Alb + 0.1)
- In renal failure: Adjusted = Measured / (0.1 x Alb + 0.1)
- Free phenytoin level (1-2 mcg/mL) preferred when albumin <3.0, uremia, or drug interactions
- Zero-order (saturation) kinetics: small dose changes cause disproportionate level changes

**Lithium:**
- Volume of distribution equals total body water; levels misleading in acute overdose
- Serial levels q2-4h to assess trajectory; rebound after redistribution post-dialysis
- Dialysis indications: level >4 mEq/L, >2.5 with AKI, or neurotoxicity at any level

### Serial Acetaminophen Level Interpretation

**Complex Scenarios:**
- **Unknown time of ingestion**: Treat if level detectable and AST/ALT rising
- **Extended-release formulation**: Repeat level at 4 and 8 hours
- **Massive ingestion (>300 mg/kg)**: First-order kinetics may be exceeded; serial levels needed
- **Late presentation**: AST/ALT more useful than level; King's College Criteria for transplant evaluation
- **NAC protocol monitoring**: AST, ALT, INR, creatinine, bilirubin q12-24h

**King's College Criteria (Acetaminophen):**
- Arterial pH <7.3 after resuscitation, OR all three: INR >6.5, Cr >3.4 mg/dL, Grade III-IV encephalopathy

### Salicylate - Advanced Kinetics

- First-order kinetics at low doses; zero-order at toxic doses (half-life extends to 18-36 hours)
- Salicylate level + clinical picture determines dialysis need
- **Hemodialysis indications**: Level >90 mg/dL, >80 with renal failure, altered mental status, pulmonary edema, acidemia (pH <7.2)
- Serial levels essential as levels may continue to rise for hours (enteric-coated, concretions)
- **Done nomogram** (historic) less reliable; clinical status guides treatment

### Toxic Alcohol Advanced Workup

**Step-by-step Approach:**
1. Calculate osmolal gap: Measured Osm - [2(Na) + BUN/2.8 + Glucose/18 + EtOH/4.6]
2. Calculate anion gap: Na - (Cl + HCO3)
3. Interpretation:
   - High osmolal gap + low anion gap = early ingestion (parent compound present)
   - Low osmolal gap + high anion gap = late presentation (metabolized to acid)
   - Both elevated = intermediate presentation

**Fomepizole vs Ethanol:**
- Fomepizole preferred: predictable kinetics, no CNS depression, no need for ICU for infusion
- Ethanol: alternative if fomepizole unavailable; target ethanol 100-150 mg/dL
- Both inhibit alcohol dehydrogenase to prevent toxic metabolite formation

### Advanced Urine Drug Screen Interpretation

**Immunoassay Limitations:**
- Cross-reactivity is antibody-specific - varies by manufacturer
- Confirmatory testing (GC-MS or LC-MS/MS) is definitive
- "Comprehensive" drug panels via LC-MS/MS detect >200 substances
- Point-of-care vs. laboratory UDS: different cutoffs, different antibodies

**Novel Psychoactive Substances:**
- Synthetic cannabinoids, bath salts (cathinones), designer benzodiazepines: NOT detected on standard UDS
- Require specialized mass spectrometry panels

### Heavy Metal Testing Nuances

**Lead:**
- Venous whole blood lead (not serum): most reliable
- Capillary lead levels have high false-positive rate (contamination)
- Free erythrocyte protoporphyrin (FEP) or zinc protoporphyrin (ZPP): screen for chronic exposure
- Chelation challenge test no longer recommended

**Arsenic:**
- 24-hour urine arsenic preferred over spot urine
- Speciated arsenic differentiates toxic inorganic forms from benign organic (dietary seafood) arsenic
- Hair and nail analysis: chronic exposure only; forensic applications

**Spanish / Espanol:** La interpretacion avanzada de toxicologia integra modelado farmacocinetico, interpretacion de niveles seriados, criterios de eliminacion extracorporea y correlacion integral toxidrome-laboratorio para el manejo de intoxicaciones complejas.`,
      keyTerms: [
        {
          term: "zero-order kinetics",
          definition:
            "Drug elimination at a constant rate regardless of concentration; seen with phenytoin and salicylate toxicity",
        },
        {
          term: "fomepizole",
          definition:
            "An alcohol dehydrogenase inhibitor used as antidote for methanol and ethylene glycol poisoning",
          pronunciation: "foh-MEP-ih-zole",
        },
        {
          term: "King's College Criteria",
          definition:
            "Prognostic criteria used to identify acetaminophen-induced liver failure patients needing transplant evaluation",
        },
        {
          term: "GC-MS",
          definition:
            "Gas Chromatography-Mass Spectrometry - confirmatory testing method that definitively identifies specific substances",
        },
      ],
      clinicalNotes:
        "In complex overdose cases, contact Poison Control (1-800-222-1222) or a medical toxicologist early. Serial drug levels, anion gap, and osmolal gap calculations should be repeated every 2-4 hours to track trajectory in serious ingestions.",
    },

    5: {
      level: 5,
      summary:
        "Expert toxicology interpretation encompasses population pharmacokinetic modeling, extracorporeal treatment recommendations from the EXTRIP workgroup, novel biomarker integration, and forensic toxicology principles for medicolegal cases.",
      explanation: `## Expert-Level Toxicology Laboratory Interpretation

### Population Pharmacokinetic Modeling

**Bayesian Dose Optimization:**
- Population PK models (e.g., NONMEM, MwPharm) integrate patient covariates (weight, renal function, age, genetics) with measured levels
- Particularly valuable for vancomycin AUC-guided dosing, aminoglycosides, and antiepileptics
- Single-point Bayesian estimation can replace traditional peak/trough paradigm for some drugs

**Pharmacogenomics in TDM:**
| Gene | Drug Affected | Clinical Impact |
|------|---------------|-----------------|
| CYP2C9 | Phenytoin | Poor metabolizers: reduce dose 25-50% |
| CYP2C19 | Phenobarbital, diazepam | Ultra-rapid: subtherapeutic levels |
| CYP2D6 | Codeine, tramadol | Ultra-rapid: toxicity; poor: inefficacy |
| HLA-B*1502 | Carbamazepine | Stevens-Johnson syndrome in Asian populations |
| UGT1A4 | Lamotrigine | Glucuronidation polymorphisms affect clearance |

### EXTRIP Workgroup Recommendations for Extracorporeal Treatment

**Evidence-based dialysis indications:**

| Poison | Dialysis Strongly Recommended | Method |
|--------|-------------------------------|--------|
| Lithium | >4 mEq/L, or neurotoxicity + >2.5, or impaired renal clearance | Intermittent HD preferred; CRRT if hemodynamically unstable |
| Methanol | Level >50 mg/dL, or visual symptoms, or pH <7.15 | Intermittent HD; continue fomepizole during HD |
| Ethylene glycol | Level >50 mg/dL, or renal failure, or pH <7.15 | Intermittent HD |
| Salicylate | Level >90 mg/dL, or altered mental status, or pH <7.2 despite resuscitation | Intermittent HD |
| Theophylline | Chronic >40 mcg/mL + seizures/arrhythmia; acute >100 mcg/mL | HD or hemoperfusion |
| Valproic acid | Level >1300 mcg/mL, cerebral edema, or shock | Intermittent HD; carnitine adjunct |
| Metformin | Lactate >20 mmol/L, pH <7.0, or refractory shock | Intermittent HD or CRRT |

**Post-Dialysis Rebound:**
- Lithium: check level 6 hours post-HD; retreatment if rebounds >1.0 mEq/L
- Methanol/ethylene glycol: continue fomepizole x 12 hrs, recheck levels

### Novel Biomarkers in Toxicology

**Acetaminophen Toxicity:**
- **Mitochondrial biomarkers**: Glutamate dehydrogenase (GDH), mitochondrial DNA (mtDNA) in plasma
- **microRNA-122**: Liver-specific; elevated before ALT rise; may guide earlier NAC initiation
- **HMGB1 (High Mobility Group Box 1)**: Differentiates necrosis from apoptosis; prognostic for acute liver failure
- **Acetaminophen-protein adducts**: Specific confirmation of APAP hepatotoxicity even when levels undetectable

**Cardiac Biomarkers in Poisoning:**
- High-sensitivity troponin for myocardial injury from cardiotoxic drugs (digoxin, carbon monoxide, sympathomimetics)
- BNP/NT-proBNP for volume assessment in lithium toxicity

### Forensic Toxicology Principles

**Chain of Custody:**
- Proper specimen collection, labeling, transport, and documentation
- Blood ethanol: use non-alcohol swab, fluoride-oxalate tube (prevents in vitro production)
- Postmortem redistribution: drug levels change after death due to autolysis (site-dependent sampling critical)

**Postmortem Toxicology Considerations:**
- Central-to-peripheral (C/P) ratio >1 suggests postmortem redistribution (cardiac blood unreliable for many drugs)
- Vitreous humor: useful for ethanol (less prone to decomposition artifacts), glucose, electrolytes
- Hair segmental analysis: timeline of drug exposure (1 cm/month growth rate)

### Point-of-Care vs Reference Lab Testing

| Parameter | POC Testing | Reference Lab |
|-----------|-------------|---------------|
| Turnaround | Minutes | Hours to days |
| Precision | Lower | Higher |
| Clinical use | Acute decisions | Confirmation, legal |
| Ethanol | Breath/serum | GC headspace (gold standard) |
| UDS | Immunoassay | LC-MS/MS (definitive) |
| Heavy metals | Limited | ICP-MS (inductively coupled plasma mass spectrometry) |

### Emerging Toxicology Challenges

**Xylazine ("tranq"):**
- Veterinary alpha-2 agonist; increasingly found with illicit fentanyl
- Not detected on any standard screen; requires specific LC-MS/MS
- Causes tissue necrosis, bradycardia; does not respond to naloxone

**Novel Synthetic Opioids:**
- Nitazenes: 10-40x potency of fentanyl; requires specialized assays
- Rapidly evolving; reference lab panels may lag behind street emergence

**Spanish / Espanol:** La interpretacion experta en toxicologia abarca modelado farmacocinetico poblacional, recomendaciones de tratamiento extracorporeo del grupo de trabajo EXTRIP, integracion de biomarcadores novedosos y principios de toxicologia forense para casos medicolegales.`,
      keyTerms: [
        {
          term: "EXTRIP",
          definition:
            "Extracorporeal Treatments in Poisoning - an international workgroup that provides evidence-based recommendations for dialysis in poisoning",
        },
        {
          term: "acetaminophen-protein adducts",
          definition:
            "Covalent modifications of hepatic proteins by the toxic APAP metabolite NAPQI; a specific biomarker for APAP hepatotoxicity",
        },
        {
          term: "postmortem redistribution",
          definition:
            "Movement of drugs between tissues and blood after death, making peripheral blood sampling essential for forensic interpretation",
        },
        {
          term: "Bayesian dose optimization",
          definition:
            "Mathematical method integrating population pharmacokinetics with individual patient data to predict optimal drug dosing",
        },
      ],
      clinicalNotes:
        "Expert-level toxicology interpretation requires integration of pharmacogenomic data, population PK models, and evolving EXTRIP recommendations. Collaboration with medical toxicology, clinical pharmacology, and forensic pathology services is essential for complex cases. Stay current with emerging substances through regional poison center data and DEA advisories.",
    },
  },

  media: [],
  citations: [
    {
      id: "goldfrank-toxicology",
      type: "textbook",
      title: "Goldfrank's Toxicologic Emergencies",
      authors: ["Nelson LS", "Howland MA", "Lewin NA", "Smith SW", "Goldfrank LR", "Hoffman RS"],
      source: "McGraw-Hill Education",
      chapter: "Principles of Managing the Poisoned Patient",
    },
    {
      id: "rumack-matthew-1975",
      type: "article",
      title: "Acetaminophen poisoning and toxicity",
      authors: ["Rumack BH", "Matthew H"],
      source: "Pediatrics",
    },
    {
      id: "extrip-workgroup",
      type: "article",
      title: "EXTRIP Workgroup Recommendations",
      authors: ["Lavergne V", "Nolin TD", "Hoffman RS"],
      source: "Clinical Toxicology",
    },
  ],
  crossReferences: [
    { targetId: "lab-hepatic-function", targetType: "concept", relationship: "related" },
    { targetId: "lab-electrolytes", targetType: "concept", relationship: "related" },
    { targetId: "lab-renal-function", targetType: "concept", relationship: "related" },
  ],
  tags: {
    systems: ["neurologic", "hepatic", "renal"],
    topics: ["laboratory", "toxicology", "pharmacology", "emergency-medicine", "diagnosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "emergency-medicine", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
