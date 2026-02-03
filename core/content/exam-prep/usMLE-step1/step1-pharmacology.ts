/**
 * USMLE Step 1 Pharmacology - Drug Mechanisms and Clinical Use
 *
 * Educational content covering essential pharmacology for USMLE Step 1.
 */

import { EducationalContent } from '../../types';

export const step1Pharmacology: EducationalContent = {
  id: 'education-usmle-step1-pharmacology',
  type: 'concept',
  name: 'USMLE Step 1 Pharmacology',
  alternateNames: ['Step 1 Pharmacology', 'Medical Pharmacology', 'Drug Mechanisms', 'Board Pharmacology'],

  levels: {
    1: {
      level: 1,
      summary: 'Pharmacology for USMLE Step 1 is about understanding how medicines work, what they do in the body, and their side effects.',
      explanation: `## What Is Pharmacology for Step 1?

Pharmacology is the study of drugs and how they work in the body. For Step 1, you learn about common medicines, how they work, and when to use them.

## Why Is Pharmacology Important?

Doctors need to know pharmacology to:
- Choose the right medicine for patients
- Understand how drugs work
- Predict side effects
- Avoid dangerous drug combinations

## Main Areas to Study

**How Drugs Work:**
- Where drugs act in the body
- How they change body functions
- How the body processes drugs
- How drug doses are determined

**Types of Drugs:**
- Heart medicines
- Blood pressure drugs
- Antibiotics (fight infections)
- Pain medicines
- Drugs for the nervous system

**Important Concepts:**
- Drug names (generic and brand)
- Side effects to watch for
- When not to use certain drugs
- Drug interactions

## Common Drug Categories

**For the Heart:**
- Beta-blockers: Slow heart rate
- ACE inhibitors: Lower blood pressure
- Statins: Lower cholesterol
- Diuretics: Remove excess fluid

**For Infections:**
- Penicillin: Treats many bacterial infections
- Antivirals: Fight viruses
- Antifungals: Treat fungal infections

**For Pain:**
- NSAIDs: Reduce pain and inflammation
- Opioids: Strong pain relievers

## Study Tips

1. Learn drug classes and their endings (like -pril, -olol)
2. Focus on mechanisms of action
3. Know common side effects
4. Understand when to use each drug
5. Practice with pharmacology questions`,
      keyTerms: [
        { term: 'pharmacology', definition: 'The study of drugs and their effects on the body' },
        { term: 'mechanism of action', definition: 'How a drug produces its effect in the body' },
        { term: 'side effect', definition: 'An unintended effect of a drug, often unwanted' },
        { term: 'contraindication', definition: 'A situation where a drug should not be used' },
      ],
      analogies: [
        'Drugs are like keys that fit specific locks (receptors) in the body to cause specific effects.',
        'Pharmacokinetics is like a journey - absorption is getting in the car, distribution is traveling, metabolism is processing, and elimination is getting out.',
      ],
      examples: [
        'Beta-blockers like metoprolol block beta receptors in the heart to slow the heart rate and lower blood pressure.',
        'Penicillin antibiotics work by preventing bacteria from building cell walls, killing them.',
      ],
      patientCounselingPoints: [
        'Doctors study pharmacology extensively to prescribe the safest and most effective medicines',
        'Understanding drug mechanisms helps predict and manage side effects',
      ],
    },

    2: {
      level: 2,
      summary: 'Step 1 pharmacology covers approximately 15-20% of exam content, emphasizing drug mechanisms, pharmacokinetics, autonomic drugs, cardiovascular agents, and antibiotics. Understanding drug classes by mechanism enables prediction of effects and side effects.',
      explanation: `## Step 1 Pharmacology Overview

Pharmacology on Step 1 focuses on mechanisms of action, clinical uses, side effects, and toxicities of major drug classes.

## Content Distribution

| Category | Weight | Key Areas |
|----------|--------|-----------|
| Autonomic | High | Receptors, agonists, antagonists |
| Cardiovascular | High | HTN, heart failure, arrhythmias |
| Antibiotics | High | Mechanisms, coverage, resistance |
| CNS | Medium | Anesthesia, analgesia, psych |
| Endocrine | Medium | Diabetes, steroids, thyroid |
| GI | Lower | Acid suppression, motility |

## Pharmacokinetics

**ADME:**
| Process | Definition | Key Concepts |
|---------|------------|--------------|
| Absorption | Entry into circulation | Bioavailability, routes |
| Distribution | Spread to tissues | Vd, protein binding |
| Metabolism | Chemical alteration | Phase I, II, CYP450 |
| Elimination | Removal from body | Clearance, half-life |

**Key Parameters:**
- Bioavailability (F): Fraction reaching circulation
- Volume of distribution (Vd): Apparent space drug occupies
- Clearance (Cl): Volume cleared per unit time
- Half-life (t1/2): Time to eliminate 50%

**Loading Dose vs. Maintenance:**
| Dose | Formula | Purpose |
|------|---------|---------|
| Loading | (Vd x Ctarget) / F | Rapid therapeutic level |
| Maintenance | (Cl x Ctarget) / F | Steady-state maintenance |

## Pharmacodynamics

**Receptor Interactions:**
| Type | Effect | Example |
|------|--------|---------|
| Agonist | Activates receptor | Albuterol (beta-2) |
| Antagonist | Blocks receptor | Propranolol (beta) |
| Partial agonist | Partial activation | Pindolol |
| Inverse agonist | Opposite of agonist | Some antihistamines |

**Potency vs. Efficacy:**
- Potency: Amount needed for effect (EC50)
- Efficacy: Maximum effect achievable (Emax)

**Therapeutic Index:**
- TI = TD50 / ED50
- Narrow TI: Digoxin, lithium, warfarin, aminoglycosides
- Wide TI: Most antibiotics, NSAIDs

## Autonomic Pharmacology

**Receptor Types:**
| Receptor | Location | Effect | Agonist | Antagonist |
|----------|----------|--------|---------|------------|
| Alpha-1 | Vascular | Vasoconstriction | Phenylephrine | Prazosin |
| Alpha-2 | CNS | Decreased SNS | Clonidine | Yohimbine |
| Beta-1 | Heart | Increased HR, contractility | Dobutamine | Metoprolol |
| Beta-2 | Lungs | Bronchodilation | Albuterol | - |
| Muscarinic | PNS | Various | Bethanechol | Atropine |
| Nicotinic | NMJ, ganglia | Various | Nicotine | Tubocurarine |

**Clinical Applications:**
- Mydriasis: Alpha-1 agonist
- Asthma: Beta-2 agonist
- Hypertension: Beta-blockers
- Bradycardia: Atropine

## Cardiovascular Pharmacology

**Hypertension:**
| Class | Examples | Mechanism | Key Side Effects |
|-------|----------|-----------|------------------|
| Thiazides | HCTZ | Na+ excretion | Hypokalemia, hyperuricemia |
| ACE-I | Lisinopril | Decrease Ang II | Cough, hyperkalemia |
| ARBs | Losartan | Block AT1 | Hyperkalemia |
| CCB | Amlodipine | Block Ca2+ channels | Edema, constipation |
| Beta-blockers | Metoprolol | Block beta-1 | Bradycardia, fatigue |

**Heart Failure:**
| Drug | Class | Benefit |
|------|-------|---------|
| ACE-I | RAAS inhibition | Mortality benefit |
| Beta-blockers | Sympathetic block | Mortality benefit |
| Spironolactone | Aldosterone antagonist | Mortality benefit |
| Digoxin | Inotrope | Symptom relief |
| Loop diuretics | Volume reduction | Symptom relief |

**Arrhythmias:**
| Class | Mechanism | Examples |
|-------|-----------|----------|
| IA | Na+ channel block (intermediate) | Procainamide |
| IB | Na+ channel block (fast) | Lidocaine |
| IC | Na+ channel block (slow) | Flecainide |
| II | Beta-blockade | Metoprolol |
| III | K+ channel block | Amiodarone |
| IV | Ca2+ channel block | Verapamil |

## Antimicrobials

**Mechanism-Based Classification:**
| Mechanism | Classes |
|-----------|---------|
| Cell wall synthesis | Penicillins, cephalosporins, vancomycin |
| Protein synthesis (30S) | Aminoglycosides, tetracyclines |
| Protein synthesis (50S) | Macrolides, chloramphenicol, clindamycin |
| Folate synthesis | Sulfonamides, trimethoprim |
| DNA gyrase | Fluoroquinolones |
| RNA polymerase | Rifampin |
| Cell membrane | Polymyxins, amphotericin B |

**Resistance Mechanisms:**
| Mechanism | Examples |
|-----------|----------|
| Enzymatic inactivation | Beta-lactamases |
| Target modification | MRSA (PBP change) |
| Efflux pumps | Fluoroquinolone resistance |
| Permeability | Pseudomonas resistance |
| Bypass pathways | MRSA, VRE |`,
      keyTerms: [
        { term: 'pharmacokinetics', definition: 'What the body does to the drug - absorption, distribution, metabolism, excretion' },
        { term: 'pharmacodynamics', definition: 'What the drug does to the body - mechanism of action and effects' },
        { term: 'therapeutic index', definition: 'The ratio of toxic dose to effective dose - higher is safer' },
        { term: 'bioavailability', definition: 'The fraction of administered drug that reaches systemic circulation' },
      ],
      analogies: [
        'Receptor agonists and antagonists are like light switches - agonists turn the light on, antagonists block it from turning on.',
        'Therapeutic index is like the safety margin on a highway - a wider margin means you have more room for error.',
      ],
      examples: [
        'Warfarin has a narrow therapeutic index, requiring frequent monitoring to prevent bleeding or clotting.',
        'Beta-lactam antibiotics are ineffective against atypical bacteria like Mycoplasma because these bacteria lack cell walls.',
      ],
      patientCounselingPoints: [
        'Drugs are categorized by how they work, which helps doctors predict effects and side effects',
        'Understanding pharmacokinetics helps doctors determine the right dose and dosing schedule',
      ],
    },

    3: {
      level: 3,
      summary: 'Step 1 pharmacology requires understanding drug mechanisms, clinical applications, side effect profiles, and toxicities. High-yield topics include autonomic drugs, cardiovascular agents, antibiotics, CNS drugs, and clinical pharmacokinetics.',
      explanation: `## Comprehensive Step 1 Pharmacology Framework

Mastery of pharmacology for Step 1 requires understanding mechanisms, predicting clinical effects, and recognizing toxicities of major drug classes.

## Clinical Pharmacokinetics

**Factors Affecting Pharmacokinetics:**

**Absorption:**
| Factor | Effect |
|--------|--------|
| Route of administration | Determines bioavailability |
| First-pass metabolism | Reduces oral bioavailability |
| Food | May increase or decrease |
| GI motility | Affects rate, not extent |

**Distribution:**
| Factor | Effect |
|--------|--------|
| Lipophilicity | Affects tissue penetration |
| Protein binding | Affects free drug concentration |
| Blood flow | Affects delivery to tissues |
| Barriers | Blood-brain, placental |

**Metabolism:**
| Phase | Reaction | Enzymes |
|-------|----------|---------|
| I | Oxidation, reduction, hydrolysis | CYP450, others |
| II | Conjugation | Glucuronyl transferase, others |

**Elimination:**
| Route | Characteristics |
|-------|-----------------|
| Renal | Filtration, secretion, reabsorption |
| Hepatic | Biliary excretion |
| Other | Lungs (volatile), sweat, saliva |

**Drug Interactions:**
| Type | Mechanism | Example |
|------|-----------|---------|
| Pharmacokinetic | Altered ADME | CYP450 induction/inhibition |
| Pharmacodynamic | Altered effect | Additive, synergistic, antagonistic |

**CYP450 Interactions:**
| Enzyme | Inducers | Inhibitors | Substrates |
|--------|----------|------------|------------|
| 3A4 | Phenytoin, rifampin | Ketoconazole, grapefruit | Many drugs |
| 2D6 | Rifampin | Fluoxetine, quinidine | Beta-blockers, opioids |
| 2C9 | Phenytoin, rifampin | Fluconazole | Warfarin, phenytoin |
| 1A2 | Smoking | Ciprofloxacin | Theophylline |

## Autonomic Pharmacology Detailed

**Direct-Acting Cholinomimetics:**
| Drug | Selectivity | Clinical Use |
|------|-------------|--------------|
| Bethanechol | Muscarinic | Urinary retention |
| Carbachol | Muscarinic + nicotinic | Glaucoma |
| Pilocarpine | Muscarinic | Glaucoma, xerostomia |

**Indirect-Acting Cholinomimetics:**
| Drug | Class | Clinical Use | Notes |
|------|-------|--------------|-------|
| Neostigmine | Reversible | Myasthenia gravis | No CNS |
| Physostigmine | Reversible | Anticholinergic toxicity | CNS |
| Pyridostigmine | Reversible | Myasthenia gravis | Longer acting |
| Donepezil | Reversible | Alzheimer disease | CNS selective |
| Edrophonium | Reversible | Diagnosis of MG | Very short |

**Anticholinergics:**
| Drug | Selectivity | Use | Side Effects |
|------|-------------|-----|--------------|
| Atropine | Non-selective | Bradycardia, pre-op | Dry mouth, constipation |
| Scopolamine | CNS | Motion sickness | Sedation |
| Ipratropium | Inhaled | COPD | Minimal systemic |
| Tiotropium | Inhaled | COPD | Once daily |

**Adrenergic Agonists:**
| Drug | Receptor | Use | Caution |
|------|----------|-----|---------|
| Phenylephrine | Alpha-1 | Nasal decongestant, BP | Hypertension |
| Clonidine | Alpha-2 | Hypertension | Rebound hypertension |
| Albuterol | Beta-2 | Asthma | Tremor, tachycardia |
| Dobutamine | Beta-1 | Heart failure | Arrhythmias |

## Cardiovascular Pharmacology

**Antihypertensive Classes:**

**Diuretics:**
| Class | Site | Mechanism | Key Considerations |
|-------|------|-----------|-------------------|
| Thiazides | DCT | Na-Cl cotransport | First-line, metabolic effects |
| Loop | Thick ascending | Na-K-2Cl | Powerful, ototoxic |
| K-sparing | CD | ENaC or aldosterone | Hyperkalemia risk |

**RAAS Inhibitors:**
| Class | Site | Effect | Contraindications |
|-------|------|--------|-------------------|
| ACE-I | ACE | Decrease Ang II, aldosterone | Pregnancy, angioedema |
| ARBs | AT1 | Block Ang II | Pregnancy |
| Renin inhibitors | Renin | Block first step | Less common |

**Calcium Channel Blockers:**
| Type | Selectivity | Effect | Examples |
|------|-------------|--------|----------|
| Dihydropyridines | Vascular > heart | Vasodilation | Amlodipine, nifedipine |
| Non-DHP | Heart > vascular | Decrease HR, contractility | Verapamil, diltiazem |

**Beta-Blockers:**
| Property | Cardioselective | Non-selective |
|----------|-----------------|---------------|
| Examples | Metoprolol, atenolol | Propranolol, nadolol |
| Advantage | Less bronchospasm | Complete beta-blockade |
| Use | COPD patients | Thyrotoxicosis |

## Antibiotic Details

**Beta-Lactams:**
| Class | Spectrum | Key Features |
|-------|----------|--------------|
| Penicillin G | Gram-positive, some negatives | Narrow, syphilis |
| Penicillin V | Oral penicillin | Streptococcal |
| Ampicillin | Extended spectrum | Aminopenicillin |
| Piperacillin | Anti-pseudomonal | Beta-lactamase sensitive |
| 1st gen ceph | MSSA, some gram-negatives | Cefazolin |
| 3rd gen ceph | Gram-negatives, CNS | Ceftriaxone, cefotaxime |
| 4th gen ceph | Broad | Cefepime |
| 5th gen ceph | MRSA, pseudomonas | Ceftaroline |
| Carbapenems | Very broad | Meropenem, imipenem |
| Monobactams | Gram-negatives only | Aztreonam |

**Aminoglycosides:**
| Property | Consideration |
|----------|---------------|
| Mechanism | 30S inhibition, bactericidal |
| Coverage | Gram-negatives, synergy |
| Resistance | Efflux, modifying enzymes |
| Toxicity | Nephrotoxic, ototoxic |
| Dosing | Once daily preferred |
| Monitoring | Levels, renal function |

**Fluoroquinolones:**
| Generation | Examples | Coverage |
|------------|----------|----------|
| 2nd | Ciprofloxacin | Gram-negatives |
| 3rd | Levofloxacin | Gram +/- |
| 4th | Moxifloxacin | Broad, anaerobes |

**Toxicities:**
- Tendon rupture
- QT prolongation
- CNS effects
- Avoid in pregnancy, children

## CNS Pharmacology

**Anesthetics:**
| Route | Examples | Notes |
|-------|----------|-------|
| Inhaled | Sevoflurane, desflurane | MAC values |
| IV induction | Propofol, thiopental | Rapid onset |
| IV maintenance | Propofol infusion | Titrable |
| Local | Lidocaine, bupivacaine | Nerve block |

**Opioids:**
| Drug | Properties | Considerations |
|------|------------|----------------|
| Morphine | Standard | Histamine release |
| Fentanyl | Potent, lipophilic | Transdermal |
| Meperidine | Toxic metabolite | Avoid |
| Methadone | Long half-life | QT prolongation |
| Naloxone | Antagonist | Reversal agent |

**Side Effects:**
- Respiratory depression
- Constipation
- Nausea
- Urinary retention
- Addiction potential`,
      keyTerms: [
        { term: 'MAC', definition: 'Minimum alveolar concentration - the concentration of inhaled anesthetic that prevents movement in response to surgical stimulus' },
        { term: 'first-pass metabolism', definition: 'The metabolism of a drug before it reaches systemic circulation, primarily in the liver' },
        { term: 'competitive antagonist', definition: 'A drug that binds to a receptor and blocks the action of an agonist' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels to optimize dosing and avoid toxicity' },
      ],
      analogies: [
        'Drug metabolism is like a security checkpoint - drugs may be transformed before they can proceed through the body.',
        'Synergistic drug combinations are like two people lifting a heavy object together - the combined effect is greater than the sum of individual efforts.',
      ],
      examples: [
        'Rifampin induces CYP450 enzymes, causing many drug interactions including reducing effectiveness of oral contraceptives.',
        'Beta-blockers must be tapered rather than stopped abruptly to avoid rebound hypertension and tachycardia.',
      ],
      patientCounselingPoints: [
        'Many drug interactions occur through effects on liver enzymes that metabolize medications',
        'Understanding drug mechanisms allows doctors to predict and manage side effects proactively',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced Step 1 pharmacology requires understanding complex drug interactions, clinical decision-making, and toxicology. Expert preparation emphasizes mechanism-based learning, pharmacokinetic calculations, and integration of drug knowledge with clinical scenarios.',
      explanation: `## Advanced Step 1 Pharmacology Concepts

Professional-level pharmacology mastery requires understanding complex mechanisms, clinical pharmacology, drug interactions, and toxicology.

## Clinical Pharmacology Integration

**Dosing Individualization:**
| Factor | Assessment | Action |
|--------|------------|--------|
| Renal function | Creatinine clearance | Dose adjustment |
| Hepatic function | LFTs, Child-Pugh | Avoid or reduce |
| Age | Elderly, pediatric | Adjust for Vd, clearance |
| Weight | Obesity | Weight-based dosing |
| Genetics | Pharmacogenomics | Dose/selection |
| Pregnancy | FDA category | Risk-benefit |

**Drug Level Monitoring:**
| Drug | Therapeutic Range | Timing |
|------|-------------------|--------|
| Digoxin | 0.5-2 ng/mL | Trough |
| Lithium | 0.6-1.2 mEq/L | Trough |
| Gentamicin | Peak 5-10, trough <2 | Peak and trough |
| Vancomycin | Trough 10-20 | Trough |
| Phenytoin | 10-20 mcg/mL | Trough |
| Valproic acid | 50-100 mcg/mL | Trough |

## Complex Drug Interactions

**Mechanism-Based:**
| Mechanism | Example | Consequence |
|-----------|---------|-------------|
| CYP induction | Rifampin + warfarin | Decreased warfarin effect |
| CYP inhibition | Fluconazole + phenytoin | Phenytoin toxicity |
| Protein binding | Warfarin + sulfonamides | Increased free warfarin |
| Renal competition | Probenecid + penicillin | Increased penicillin |
| P-gp inhibition | Quinidine + digoxin | Digoxin toxicity |
| Additive QT | Multiple drugs | Torsades risk |

**Pharmacodynamic Interactions:**
| Type | Example | Outcome |
|------|---------|---------|
| Synergistic | TMP-SMX | Enhanced antibacterial |
| Antagonistic | Beta-blocker + beta-agonist | Reduced effect |
| Additive toxicity | Aminoglycoside + vancomycin | Nephrotoxicity |

## Antibiotic Pharmacology

**Spectrum of Activity:**
| Category | Gram-Positive | Gram-Negative | Anaerobes | Atypical |
|----------|---------------|---------------|-----------|----------|
| Penicillin G | +++ | + | - | - |
| Ampicillin | ++ | ++ | - | - |
| Piperacillin | ++ | +++ | - | - |
| Cefazolin | +++ | + | - | - |
| Ceftriaxone | ++ | +++ | - | - |
| Cefepime | ++ | +++ | - | - |
| Meropenem | +++ | +++ | +++ | - |
| Vancomycin | +++ (MRSA) | - | - | - |
| Daptomycin | +++ | - | - | - |
| Linezolid | +++ | - | - | - |
| Ciprofloxacin | + | +++ | - | - |
| Gentamicin | - | +++ | - | - |
| Azithromycin | ++ | + | - | +++ |

**Clinical Syndromes:**
| Syndrome | Empiric Coverage | Common Pathogens |
|----------|------------------|------------------|
| Community pneumonia | Beta-lactam + macrolide | S. pneumoniae, atypicals |
| UTI uncomplicated | Nitrofurantoin, TMP-SMX | E. coli |
| UTI complicated | Ciprofloxacin, ceftriaxone | Enterobacterales |
| Meningitis | Vancomycin + ceftriaxone + ampicillin | S. pneumoniae, N. meningitidis, Listeria |
| Intra-abdominal | Piperacillin-tazobactam | Bacteroides, E. coli |
| Cellulitis | Vancomycin, cephalexin | MSSA, MRSA, Strep |

**HIV Antiretrovirals:**
| Class | Mechanism | Examples |
|-------|-----------|----------|
| NRTIs | Chain terminators | Tenofovir, emtricitabine |
| NNRTIs | Reverse transcriptase inhibition | Efavirenz, rilpivirine |
| Protease inhibitors | Protease inhibition | Darunavir, atazanavir |
| Integrase inhibitors | Integrase inhibition | Dolutegravir, raltegravir |
| Entry inhibitors | CCR5 or fusion inhibition | Maraviroc, enfuvirtide |

## Cardiovascular Pharmacology

**Heart Failure Pharmacology:**
| Drug | Mechanism | Mortality Benefit | Notes |
|------|-----------|-------------------|-------|
| ACE-I | Reduce afterload, remodeling | Yes | All NYHA classes |
| ARNI | Replace ACE-I if persistent symptoms | Yes | Entresto |
| Beta-blockers | Reduce remodeling | Yes | Metoprolol, carvedilol, bisoprolol |
| MRA | Block aldosterone | Yes | Monitor K+ |
| SGLT2-I | Multiple mechanisms | Yes | Dapagliflozin |
| Hydralazine-nitrate | Vasodilation | Yes (Black patients) | Alternative |
| Diuretics | Volume control | No | Symptom relief |
| Digoxin | Inotrope | No | Symptom control |

**Anticoagulants:**
| Drug | Mechanism | Monitoring | Reversal |
|------|-----------|------------|----------|
| Heparin | Activate antithrombin | PTT | Protamine |
| LMWH | Activate antithrombin | Anti-Xa (sometimes) | Protamine (partial) |
| Warfarin | Vitamin K antagonist | INR | Vitamin K, FFP, PCC |
| Dabigatran | Direct thrombin inhibitor | None | Idarucizumab |
| Rivaroxaban | Factor Xa inhibitor | None | Andexanet alfa |
| Apixaban | Factor Xa inhibitor | None | Andexanet alfa |

## Toxicology

**Common Overdoses:**
| Toxin | Mechanism | Antidote/Tx |
|-------|-----------|-------------|
| Acetaminophen | NAPQI hepatotoxicity | N-acetylcysteine |
| Opioids | Mu receptor | Naloxone |
| Benzodiazepines | GABA-A | Flumazenil |
| Beta-blockers | Beta block | Glucagon, high-dose insulin |
| Calcium channel blockers | Ca channel block | Calcium, glucagon, high-dose insulin |
| Digoxin | Na-K-ATPase inhibition | Digoxin immune Fab |
| Heparin | Antithrombin | Protamine |
| Warfarin | Vitamin K antagonism | Vitamin K, FFP, PCC |
| Iron | Free radical damage | Deferoxamine |
| Lead | Multiple enzyme inhibition | EDTA, succimer |
| Organophosphates | AChE inhibition | Atropine, pralidoxime |
| Methanol | Formic acid | Fomepizole, ethanol |
| Ethylene glycol | Oxalate | Fomepizole, ethanol |

**Cholinergic Toxidrome:**
| Sign | Mnemonic |
|------|----------|
| Salivation | DUMBELS |
| Lacrimation | |
| Urination | |
| Defecation | |
| GI cramping | |
| Emesis | |
| Miosis | |
| Bradycardia, Bronchorrhea, Bronchospasm | |

**Anticholinergic Toxidrome:**
| Sign | Mnemonic |
|------|----------|
| Hot as a hare | Mad as a hatter |
| Dry as a bone | Red as a beet |
| Blind as a bat | Full as a flask |

## Special Populations

**Pregnancy:**
| Category | Risk | Examples to Avoid |
|----------|------|-------------------|
| A | Controlled studies, no risk | - |
| B | No risk in animals | Many antibiotics |
| C | Risk cannot be ruled out | Many drugs |
| D | Evidence of risk | ACE-I, ARBs, lithium |
| X | Contraindicated | Isotretinoin, thalidomide |

**Pediatrics:**
| Consideration | Example |
|---------------|---------|
| Immature metabolism | Chloramphenicol gray baby |
| Different body composition | Higher Vd for water-soluble |
| Growth effects | Tetracyclines and teeth |
| Developmental effects | Fluoroquinolones and cartilage |

**Elderly:**
| Issue | Management |
|-------|------------|
| Decreased clearance | Dose reduction |
| Polypharmacy | Deprescribing |
| Altered pharmacodynamics | Monitor closely |
| Beers criteria | Avoid risky drugs |`,
      keyTerms: [
        { term: 'pharmacovigilance', definition: 'The science and activities relating to the detection, assessment, understanding, and prevention of adverse drug effects' },
        { term: 'therapeutic window', definition: 'The range of drug dosage between the minimum effective dose and the minimum toxic dose' },
        { term: 'cholinergic crisis', definition: 'Excessive stimulation of cholinergic receptors causing SLUDGE symptoms' },
        { term: 'toxidrome', definition: 'A syndrome caused by a dangerous level of toxins in the body' },
      ],
      analogies: [
        'The therapeutic window is like a tightrope - too little and there is no effect, too much and there is toxicity.',
        'Drug resistance is like changing the lock - the drug (key) no longer fits or works on the target.',
      ],
      examples: [
        'Acetaminophen overdose is treated with N-acetylcysteine to replenish glutathione and prevent liver damage from toxic NAPQI.',
        'Warfarin dosing requires genetic testing for CYP2C9 and VKORC1 variants to determine optimal dosing.',
      ],
      patientCounselingPoints: [
        'Many antibiotics have specific spectra of activity against different types of bacteria',
        'Understanding drug toxicities allows for rapid recognition and treatment of overdoses',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert Step 1 pharmacology mastery integrates mechanism-based understanding, clinical decision-making, pharmacogenomics, and personalized medicine. Professional excellence requires staying current with therapeutics, contributing to drug safety, and teaching rational prescribing.',
      explanation: `## Expert Step 1 Pharmacology Framework

Professional-level pharmacology mastery synthesizes molecular mechanisms, clinical expertise, evidence-based prescribing, and pharmacogenomic applications.

## Rational Prescribing

**Choosing the Right Drug:**
| Factor | Consideration |
|--------|---------------|
| Efficacy | Evidence for indication |
| Safety | Side effect profile, contraindications |
| Convenience | Dosing frequency, route |
| Cost | Generic availability, insurance |
| Patient factors | Comorbidities, preferences |

**Evidence Hierarchy:**
| Level | Evidence Type |
|-------|---------------|
| 1 | Systematic reviews, RCTs |
| 2 | RCTs with limitations |
| 3 | Cohort studies |
| 4 | Case-control studies |
| 5 | Expert opinion |

**Guideline Integration:**
- Major guidelines (ACC/AHA, IDSA)
- Local resistance patterns
- Individual patient variation
- Shared decision-making

## Pharmacogenomics

**Clinical Applications:**
| Gene | Drug | Clinical Impact |
|------|------|-----------------|
| CYP2D6 | Codeine | Variable analgesia |
| CYP2C19 | Clopidogrel | Variable antiplatelet effect |
| CYP2C9/VKORC1 | Warfarin | Dosing algorithm |
| TPMT | Thiopurines | Dose adjustment |
| HLA-B*5701 | Abacavir | Hypersensitivity risk |
| HLA-B*1502 | Carbamazepine | SJS/TEN risk |

**Implementation:**
- Preemptive testing
- Reactive testing
- Clinical decision support
- Education and training

## Drug Development

**Phases of Development:**
| Phase | Population | Purpose |
|-------|------------|---------|
| I | Healthy volunteers | Safety, pharmacokinetics |
| II | Patients | Efficacy, dose-finding |
| III | Large patient groups | Confirmatory efficacy |
| IV | Post-marketing | Safety, new indications |

**Regulatory Considerations:**
- IND application
- NDA submission
- FDA review
- Post-marketing surveillance

## Antimicrobial Stewardship

**Core Principles:**
| Principle | Application |
|-----------|-------------|
| Right drug | Spectrum appropriate |
| Right dose | Pharmacokinetic optimization |
| Right duration | Shortest effective |
| De-escalation | Narrow spectrum when possible |
| IV to PO | Streamline when able |

**Resistance Prevention:**
- Narrow spectrum preference
- Combination therapy when needed
- Avoid unnecessary antibiotics
- Vaccination
- Infection control

**Rapid Diagnostics:**
| Test | Application |
|------|-------------|
| Procalcitonin | Bacterial vs viral |
| MRSA PCR | Rapid detection |
| Blood culture ID | Rapid pathogen ID |
| Susceptibility testing | Guide therapy |

## Clinical Toxicology

**Advanced Management:**
| Strategy | Application |
|----------|-------------|
| Enhanced elimination | Hemodialysis, hemoperfusion |
| Antibody therapy | Digoxin Fab, naloxone |
| Lipid emulsion | Lipophilic drug overdose |
| ECMO | Refractory cardiotoxicity |

**Novel Antidotes:**
| Antidote | Toxin |
|----------|-------|
| Idarucizumab | Dabigatran |
| Andexanet alfa | Factor Xa inhibitors |
| Ciraparantag | Heparins, direct oral ACs |

## Research and Innovation

**Personalized Medicine:**
| Approach | Application |
|----------|-------------|
| Pharmacogenomics | Drug selection, dosing |
| Therapeutic drug monitoring | Dose optimization |
| Biomarkers | Response prediction |
| Real-world evidence | Effectiveness data |

**Drug Delivery:**
| Technology | Application |
|------------|-------------|
| Nanoparticles | Targeted delivery |
| Antibody-drug conjugates | Cancer therapy |
| Gene therapy | Genetic diseases |
| Biosimilars | Cost reduction |

**Artificial Intelligence:**
| Application | Description |
|-------------|-------------|
| Drug discovery | Target identification |
| Adverse event detection | Signal detection |
| Dosing optimization | PK/PD modeling |
| Drug interactions | Prediction |

## Teaching and Practice

**Prescribing Education:**
| Level | Focus |
|-------|-------|
| Medical school | Fundamentals |
| Residency | Specialty-specific |
| Fellowship | Advanced therapeutics |
| Practice | CME, updates |

**Quality Improvement:**
- Antimicrobial stewardship
- Adverse event reporting
- Medication reconciliation
- Deprescribing initiatives

**Communication:**
| Stakeholder | Focus |
|-------------|-------|
| Patients | Adherence, side effects |
| Pharmacists | Verification, interactions |
| Other providers | Coordination |
| Payers | Prior authorization |

## Future Directions

**Emerging Therapeutics:**
| Area | Development |
|------|-------------|
| Gene editing | CRISPR therapies |
| RNA therapeutics | siRNA, mRNA vaccines |
| Microbiome | Fecal transplant, probiotics |
| Immunotherapy | CAR-T, checkpoint inhibitors |

**Challenges:**
- Antibiotic resistance
- Drug pricing
- Access to medications
- Regulatory burden
- Information overload`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'The study of how genes affect a person\'s response to drugs' },
        { term: 'antimicrobial stewardship', definition: 'Coordinated efforts to optimize antimicrobial use and reduce resistance' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug concentrations to optimize dosing' },
        { term: 'biosimilar', definition: 'A biological product highly similar to an approved reference product' },
      ],
      clinicalNotes: `Expert perspective on Step 1 pharmacology:

1. **Mechanism-Based Learning:** Always learn mechanisms first. If you know how a drug works, you can predict its effects, side effects, and interactions.

2. **Organize by Mechanism:** Study drugs by mechanism rather than alphabetically. This reveals relationships and patterns.

3. **Side Effect Patterns:** Many side effects are extensions of therapeutic effects. Beta-blockers cause bradycardia; ACE inhibitors cause hypotension.

4. **Antibiotics are High-Yield:** Antibiotics are heavily tested. Know mechanisms of action, spectra, resistance mechanisms, and toxicities cold.

5. **Pharmacokinetics Matter:** Understand ADME principles. Many drug interactions and dosing adjustments depend on pharmacokinetic principles.

6. **Autonomics Foundation:** The autonomic nervous system is foundational. Know your receptors, agonists, and antagonists perfectly.

7. **Cardiovascular Breadth:** Cardiovascular drugs are extensively tested. Know mechanisms, indications, and contraindications.

8. **Toxicology Essentials:** Know common overdoses and their antidotes. This is life-saving knowledge.

9. **Clinical Integration:** Connect every drug to clinical scenarios. When would you use it? What would you monitor?

10. **Stay Current:** Pharmacology evolves rapidly. Guidelines change, new drugs emerge, and old drugs find new uses. Commit to lifelong learning.`,
    },
  },

  media: [
    {
      id: 'autonomic-receptors',
      type: 'diagram',
      filename: 'autonomic-receptors.svg',
      title: 'Autonomic Nervous System Receptors',
      description: 'Diagram showing autonomic receptor types and their locations',
    },
    {
      id: 'antibiotic-spectrum',
      type: 'diagram',
      filename: 'antibiotic-spectrum.svg',
      title: 'Antibiotic Coverage Spectrum',
      description: 'Comparison of antibiotic classes and their coverage',
    },
  ],

  citations: [
    {
      id: 'katzung-pharmacology',
      type: 'textbook',
      title: 'Basic and Clinical Pharmacology',
      authors: ['Katzung, B.G.'],
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
    {
      id: 'first-aid-pharmacology',
      type: 'textbook',
      title: 'First Aid for the USMLE Step 1',
      source: 'McGraw-Hill',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'education-usmle-step1-overview', targetType: 'concept', relationship: 'parent', label: 'Step 1 Overview' },
    { targetId: 'education-usmle-step1-biochem', targetType: 'concept', relationship: 'related', label: 'Step 1 Biochemistry' },
    { targetId: 'education-cardiovascular-drugs', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Drugs' },
  ],

  tags: {
    systems: ['medical-education', 'pharmacology'],
    topics: ['USMLE Step 1', 'pharmacology', 'drugs', 'medications'],
    keywords: ['USMLE', 'Step 1', 'pharmacology', 'drugs', 'antibiotics', 'autonomic'],
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

export default step1Pharmacology;
