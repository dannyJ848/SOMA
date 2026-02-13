/**
 * Overdose Management - Emergency Toxicology
 *
 * Comprehensive content on recognition and management of drug overdoses
 * including toxidromes, stabilization, decontamination, and specific treatments.
 */

import { EducationalContent } from '../../types';

export const overdoseManagement: EducationalContent = {
  id: 'emergency-toxicology-overdose-management',
  type: 'topic',
  name: 'Overdose Management',
  nameEs: 'Manejo de Sobredosis',
  alternateNames: ['Drug Overdose', 'Poisoning Management', 'Acute Intoxication', 'Toxicologic Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'When someone takes too much of a drug or poison, doctors follow specific steps to stabilize them, identify what they took, and give the right treatment or antidote.',
      explanation: `## What Is an Overdose?

An overdose happens when someone takes too much of a substance - this could be medication, illegal drugs, alcohol, or even common household products. The body cannot handle the excess amount, and it can become dangerous or life-threatening.

### Signs Someone May Have Overdosed

**Very sleepy or unconscious:**
- Cannot be woken up
- Breathing is very slow or stops
- Lips or fingertips turn blue
- This is common with opioids (painkillers like fentanyl) or sedatives

**Very agitated or confused:**
- Fast heartbeat, sweating, shaking
- Seeing or hearing things that are not there
- High body temperature
- This is common with stimulants (cocaine, methamphetamine) or certain medications

### What To Do If You Suspect an Overdose

1. **Call 911 immediately**
2. **If the person is not breathing:** Start CPR
3. **If you have naloxone (Narcan):** Give it if you suspect opioid overdose
4. **Stay with the person** until help arrives
5. **If they are vomiting:** Turn them on their side so they don't choke

### What Happens at the Hospital

1. **Stabilize:** Make sure they can breathe and their heart is working
2. **Identify:** Figure out what substance was taken (blood tests, urine tests)
3. **Treat:** Give an antidote if one exists, or provide supportive care
4. **Monitor:** Watch closely for complications

### Common Antidotes
- **Naloxone (Narcan):** Reverses opioid overdose (heroin, fentanyl, prescription painkillers)
- **Activated charcoal:** Absorbs certain poisons in the stomach if given early
- **N-acetylcysteine:** Treats acetaminophen (Tylenol) overdose

### Prevention
- Keep medications locked away from children
- Never take someone else's prescription medication
- Naloxone kits are available and can save lives`,
      keyTerms: [
        { term: 'overdose', definition: 'Taking too much of a substance, causing dangerous effects on the body' },
        { term: 'antidote', definition: 'A special medicine that counteracts the effects of a specific poison or drug' },
        { term: 'naloxone', definition: 'A medicine that quickly reverses the effects of opioid overdose; available as a nasal spray (Narcan)', pronunciation: 'nal-OX-own' },
        { term: 'activated charcoal', definition: 'A special powder that absorbs poisons in the stomach before they enter the bloodstream' },
      ],
      analogies: [
        'An antidote is like an eraser for poison - it undoes the harmful effects of the substance.',
        'Activated charcoal works like a sponge in the stomach, soaking up poison before it can be absorbed.',
        'Naloxone is like a master key that unlocks the receptors that opioids have blocked, allowing the person to breathe again.',
      ],
      examples: [
        'A young man is found unconscious with slow breathing. His friend gives him naloxone nasal spray. Within minutes, he starts breathing normally and wakes up.',
        'A toddler accidentally drinks liquid medication. The parents call Poison Control and rush to the ER where activated charcoal is given to absorb the medicine.',
      ],
      patientCounselingPoints: [
        'Call 911 for any suspected overdose - do not wait to see if it gets better',
        'Naloxone (Narcan) is available without a prescription at most pharmacies',
        'If you or someone you know uses opioids, keep naloxone on hand',
        'Poison Control (1-800-222-1222) can help with any poisoning question',
      ],
    },

    2: {
      level: 2,
      summary: 'Overdose management follows a systematic approach: stabilize ABCs, identify the toxidrome, perform decontamination when appropriate, administer antidotes, and provide supportive care.',
      explanation: `## Systematic Approach to Overdose

### Step 1: Stabilize (ABCs)
- **Airway:** Protect airway, intubate if GCS <=8
- **Breathing:** Supplemental O2, ventilate if needed
- **Circulation:** IV access, fluids, vasopressors if hypotensive
- **Dextrose:** Check glucose immediately (hypoglycemia mimics many toxidromes)
- **Naloxone:** If opioid overdose suspected (pinpoint pupils, respiratory depression)

### Step 2: Identify the Toxidrome

A **toxidrome** is a pattern of signs that suggests a specific type of poisoning:

| Toxidrome | Pupils | HR | Temp | Skin | Mental Status | Cause |
|-----------|--------|------|------|------|---------------|-------|
| Sympathomimetic | Dilated | Fast | High | Sweaty | Agitated | Cocaine, meth, amphetamines |
| Anticholinergic | Dilated | Fast | High | Dry, red | Delirious | Antihistamines, TCAs, jimsonweed |
| Cholinergic | Small | Slow | Normal | Wet | Confused | Organophosphates, nerve agents |
| Opioid | Pinpoint | Slow | Low | Normal | Sedated/coma | Heroin, fentanyl, oxycodone |
| Sedative-hypnotic | Normal/small | Slow | Low | Normal | Sedated | Benzodiazepines, alcohol, barbiturates |
| Serotonin syndrome | Dilated | Fast | High | Sweaty | Agitated, clonus | SSRIs, MAOIs, combinations |

**Memory aids:**
- Anticholinergic: "Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter"
- Cholinergic (DUMBELS): Diarrhea, Urination, Miosis, Bronchospasm, Emesis, Lacrimation, Salivation

### Step 3: Decontamination

**Activated charcoal (AC):**
- Most effective within 1 hour of ingestion
- Dose: 1 g/kg (50-100g adult)
- Contraindications: Altered mental status (aspiration risk), caustic ingestion, hydrocarbons
- Does NOT bind: Iron, lithium, potassium, alcohols, heavy metals

**Whole bowel irrigation:**
- Polyethylene glycol solution (GoLYTELY) 2L/hr via NG tube
- Used for: Iron, lithium, sustained-release preparations, body packers
- Continue until rectal effluent is clear

**Gastric lavage:** Rarely used, only within 1 hour of life-threatening ingestion

**Do NOT induce vomiting** (ipecac is no longer recommended)

### Step 4: Specific Treatments

**Common overdoses and treatments:**

| Substance | Key Finding | Treatment |
|-----------|------------|-----------|
| Acetaminophen | Liver failure (delayed) | N-acetylcysteine (NAC) |
| Opioids | Respiratory depression | Naloxone 0.4-2mg IV/IN |
| Benzodiazepines | Sedation | Supportive (flumazenil only if iatrogenic) |
| TCAs | Wide QRS, seizures | Sodium bicarbonate |
| Beta-blockers | Bradycardia, hypotension | Glucagon, high-dose insulin |
| Calcium channel blockers | Bradycardia, hypotension | Calcium, high-dose insulin |
| Aspirin | Tachypnea, acidosis | Sodium bicarbonate, dialysis |
| Digoxin | Bradycardia, hyperkalemia | Digoxin-specific Fab antibodies |

### Step 5: Enhanced Elimination

- **Urinary alkalinization:** Sodium bicarbonate drip for aspirin, methotrexate
- **Hemodialysis:** For methanol, ethylene glycol, lithium, aspirin, theophylline
- **Multiple-dose activated charcoal:** For theophylline, carbamazepine, dapsone`,
      keyTerms: [
        { term: 'toxidrome', definition: 'A pattern of signs and symptoms that suggests a specific type of poisoning' },
        { term: 'decontamination', definition: 'Removing or reducing the amount of poison in the body, such as with activated charcoal' },
        { term: 'N-acetylcysteine', definition: 'The antidote for acetaminophen overdose; replenishes glutathione to protect the liver', pronunciation: 'N-ah-SEE-til-SIS-teen' },
        { term: 'enhanced elimination', definition: 'Methods to speed up removal of poison from the body, such as dialysis or urinary alkalinization' },
        { term: 'flumazenil', definition: 'Benzodiazepine reversal agent; use limited due to seizure risk in chronic users or mixed overdose', pronunciation: 'flu-MAZ-en-il' },
      ],
      analogies: [
        'Toxidromes are like fingerprints for poisons - each type of substance leaves a recognizable pattern.',
        'Activated charcoal is like a filter in the stomach that catches poison before it enters the bloodstream.',
        'Hemodialysis for poisoning is like running the blood through a washing machine to clean out the toxin.',
      ],
      examples: [
        'A 19-year-old found with empty acetaminophen bottles. She looks fine initially but blood level is 250 mcg/mL at 4 hours. NAC started immediately. Liver function monitored closely over 72 hours.',
        'A 30-year-old brought in agitated with dilated pupils, fast heart rate, dry skin. Toxidrome: anticholinergic. History reveals he took many diphenhydramine tablets. Supportive care with benzodiazepines for agitation.',
      ],
      patientCounselingPoints: [
        'Always bring medication bottles to the ER if possible - helps identify what was taken',
        'Acetaminophen overdose may seem fine initially but can cause fatal liver damage days later',
        'Flumazenil is NOT routinely given for benzodiazepine overdose due to seizure risk',
        'After intentional overdose, psychiatric evaluation is an important part of care',
      ],
    },

    3: {
      level: 3,
      summary: 'Advanced overdose management requires toxidrome-based pattern recognition, time-sensitive decontamination strategies, targeted antidote administration, and enhanced elimination techniques guided by toxin pharmacokinetics.',
      explanation: `## Advanced Toxidrome Recognition

### Sympathomimetic vs Anticholinergic Distinction
- Both: Tachycardia, hyperthermia, mydriasis, agitation
- Sympathomimetic: DIAPHORESIS (sweating), active bowel sounds
- Anticholinergic: DRY skin, absent bowel sounds, urinary retention

### Serotonin Syndrome vs NMS vs Anticholinergic
| Feature | Serotonin Syndrome | NMS | Anticholinergic |
|---------|-------------------|-----|-----------------|
| Onset | Hours | Days | Hours |
| Clonus | Yes (hallmark) | No | No |
| Rigidity | Legs > arms | Lead-pipe | No |
| Reflexes | Hyperreflexia | Bradyreflexia | Variable |
| Skin | Diaphoretic | Diaphoretic | Dry |
| CK | Mildly elevated | Very elevated | Normal |

## Acetaminophen Overdose - Detailed

**Phases of toxicity:**
1. **0-24h:** Nausea, vomiting, malaise (or asymptomatic)
2. **24-72h:** RUQ pain, rising AST/ALT, declining symptoms
3. **72-96h:** Peak hepatotoxicity, possible hepatic failure, coagulopathy, renal failure
4. **4-14 days:** Recovery or death

**Rumack-Matthew nomogram:**
- Plot serum acetaminophen level against time since ingestion (4-24h)
- Treatment line at 150 mcg/mL at 4 hours
- If level above treatment line: Start NAC

**NAC protocol (IV):**
- Loading: 150 mg/kg in 200 mL D5W over 60 min
- Second infusion: 50 mg/kg in 500 mL D5W over 4 hours
- Third infusion: 100 mg/kg in 1000 mL D5W over 16 hours
- 21-hour protocol (may be extended if AST/ALT still rising)
- Anaphylactoid reactions: Slow infusion, antihistamines

**When to treat without nomogram:**
- Unknown time of ingestion
- Staggered ingestion
- Presenting >24h with elevated AST/ALT
- Massive ingestion (>150 mg/kg)

## Tricyclic Antidepressant (TCA) Toxicity

**Mechanism:** Sodium channel blockade, anticholinergic, alpha blockade, catecholamine reuptake inhibition

**ECG findings:**
- Sinus tachycardia (anticholinergic)
- QRS widening (>100ms concerning, >160ms associated with seizures/arrhythmias)
- Right axis deviation of terminal 40ms (R wave in aVR >3mm)
- QTc prolongation

**Management:**
- Sodium bicarbonate: 1-2 mEq/kg IV bolus if QRS >100ms
- Target serum pH 7.50-7.55
- Continue bicarb infusion to maintain narrow QRS
- Seizures: Benzodiazepines (avoid phenytoin)
- Hypotension: IVF, norepinephrine (avoid pure alpha agonists initially)
- Intubation: May be needed for seizures or declining mental status

## Salicylate (Aspirin) Toxicity

**Pathophysiology:** Uncouples oxidative phosphorylation, stimulates respiratory center, causes metabolic acidosis

**Classic presentation:** Tinnitus, tachypnea, mixed respiratory alkalosis + metabolic acidosis

**Done nomogram:** Less reliable than acetaminophen nomogram; clinical status more important

**Management:**
- Activated charcoal (aspirin forms concretions, may be useful even late)
- IV sodium bicarbonate: Target urine pH 7.5-8.0 (urinary alkalinization)
- Replace potassium aggressively (needed for alkalinization)
- Hemodialysis indications: Level >100 mg/dL, renal failure, pulmonary edema, altered mental status, clinical deterioration despite treatment

**Critical pearl:** Do NOT intubate early. Patients compensate metabolic acidosis with tachypnea (respiratory alkalosis). Intubation and normal ventilation causes rapid acidemia and cardiovascular collapse.

## Toxic Alcohol Ingestion

**Methanol and ethylene glycol:**
- Both metabolized by alcohol dehydrogenase to toxic metabolites
- Methanol -> Formic acid (blindness, basal ganglia necrosis)
- Ethylene glycol -> Oxalic acid (renal failure, calcium oxalate crystals)

**Osmol gap:** Elevated early (parent compound present)
**Anion gap metabolic acidosis:** Elevated later (toxic metabolites formed)

**Treatment:**
- Fomepizole (4-MP): Alcohol dehydrogenase inhibitor (preferred)
- Ethanol drip: Alternative if fomepizole unavailable
- Hemodialysis: For severe acidosis, renal failure, visual changes, level >50 mg/dL
- Folate (methanol) or thiamine/pyridoxine (ethylene glycol): Cofactors for detoxification`,
      keyTerms: [
        { term: 'Rumack-Matthew nomogram', definition: 'Graph plotting acetaminophen level vs time to determine need for NAC treatment; reliable for single acute ingestion at known time' },
        { term: 'osmol gap', definition: 'Difference between measured and calculated serum osmolality; elevated with toxic alcohols, ethanol, and other unmeasured osmoles' },
        { term: 'anion gap', definition: 'Na - (Cl + HCO3); elevated in metabolic acidosis from toxic alcohol metabolites, aspirin, and other acids' },
        { term: 'fomepizole', definition: 'Alcohol dehydrogenase inhibitor; antidote for methanol and ethylene glycol poisoning', pronunciation: 'foh-MEP-ih-zole' },
        { term: 'sodium channel blockade', definition: 'Mechanism of TCA cardiotoxicity causing QRS widening; treated with sodium bicarbonate' },
      ],
      analogies: [
        'Fomepizole blocks the enzyme that converts toxic alcohols to poison, like putting a lock on a factory that makes dangerous products.',
        'The osmol gap and anion gap timeline: early = parent alcohol raises osmol gap; late = metabolites raise anion gap. Like tracking a fire: first smoke, then damage.',
        'Intubating a salicylate-toxic patient is like removing the only pump from a sinking boat - the compensatory hyperventilation is keeping them alive.',
      ],
      examples: [
        'Acetaminophen OD, 4-hour level 280 mcg/mL (above treatment line). IV NAC started. AST rises to 5000 at 48h. NAC continued until AST trending down and INR normalizing.',
        'Unknown ingestion: AG metabolic acidosis, elevated osmol gap, calcium oxalate crystals in urine. Ethylene glycol poisoning diagnosed. Fomepizole started, emergent hemodialysis for pH 7.1.',
      ],
      clinicalNotes: 'Sympathomimetic vs anticholinergic: sweat differentiates (sympathomimetic = sweaty, anticholinergic = dry). Acetaminophen: treat empirically if time unknown or staggered. TCA: sodium bicarb is life-saving for wide QRS. Aspirin: do NOT intubate unless absolutely necessary - loss of respiratory compensation is often fatal. Toxic alcohols: osmol gap drops as anion gap rises (parent compound metabolized to toxic acids).',
    },

    4: {
      level: 4,
      summary: 'Advanced overdose management integrates toxicokinetics, extracorporeal elimination criteria, lipid emulsion therapy, and management of complex multi-substance ingestions with evolving antidote pharmacology.',
      explanation: `## Advanced Toxicological Concepts

### Toxicokinetics in Overdose

**Altered pharmacokinetics:**
- Overdose may overwhelm normal metabolic pathways (zero-order kinetics)
- Acetaminophen: Saturation of sulfation/glucuronidation shunts to CYP2E1 (NAPQI formation)
- Aspirin: First-order to zero-order at toxic levels (prolonged absorption)
- Sustained-release preparations: Delayed and prolonged toxicity

**Bezoar formation:**
- Iron, aspirin, potassium, sustained-release medications
- Whole bowel irrigation indicated
- Serial levels needed even if initial level reassuring

### Lipid Emulsion Therapy (ILE)

**Mechanism:** "Lipid sink" theory - creates lipid phase in plasma sequestering lipophilic toxins

**Indications:**
- Local anesthetic systemic toxicity (LAST) - strongest evidence
- Other lipophilic drug toxicity with cardiovascular collapse
- Calcium channel blockers, beta-blockers, TCAs (rescue therapy)

**Protocol (20% intralipid):**
- Bolus: 1.5 mL/kg IV over 1 minute
- Infusion: 0.25 mL/kg/min for 30-60 minutes
- May repeat bolus x2 if cardiovascular collapse persists
- Max dose: 12 mL/kg over first hour

### High-Dose Insulin Euglycemic Therapy (HIET)

**For calcium channel blocker and beta-blocker toxicity:**
- Mechanism: Enhances inotropy, promotes glucose utilization by myocardium
- Dose: Regular insulin 1 unit/kg bolus, then 1-10 units/kg/hr infusion
- Dextrose: D50 bolus, then D10 drip to maintain glucose 100-200
- Monitor: Glucose q15-30min, potassium q1h
- Takes 15-60 minutes for hemodynamic effect
- Superior to glucagon in severe CCB toxicity

### Extracorporeal Treatments in Poisoning (EXTRIP Recommendations)

**Indications for hemodialysis:**
| Toxin | Level | Clinical Criteria |
|-------|-------|-------------------|
| Methanol | >50 mg/dL | Visual changes, renal failure, pH <7.15 |
| Ethylene glycol | >50 mg/dL | Renal failure, pH <7.15 |
| Lithium | >4 mEq/L | AKI, altered mental status, seizures |
| Salicylate | >100 mg/dL | Altered MS, pulmonary edema, pH <7.2 |
| Theophylline | >100 mg/dL | Seizures, arrhythmia |
| Metformin | Any | Lactate >20, pH <7.0 |
| Valproic acid | >1300 mg/L | Cerebral edema, pH <7.1 |

### Complex Multi-Substance Ingestions

**Approach:**
1. Treat the most life-threatening toxicity first
2. Consider drug-drug interactions
3. Acetaminophen level on ALL intentional ingestions (often co-ingestant)
4. Salicylate level on all altered patients
5. ECG for QRS/QTc (TCA, antipsychotics, sodium channel blockers)

**Specific combinations:**
- Opioid + benzodiazepine: Synergistic respiratory depression
- Stimulant + alcohol: Cocaethylene formation (cardiotoxic)
- SSRI + MAOI: Serotonin syndrome (potentially lethal)
- Tylenol + alcohol: Enhanced CYP2E1 (more NAPQI at lower acetaminophen doses)

### Emerging Toxicologic Challenges

**Novel synthetic opioids:**
- Fentanyl analogs: 100-10,000x morphine potency
- May require massive naloxone doses (10-20mg+)
- Consider naloxone infusion after initial reversal
- Xylazine-adulterated supply: Not naloxone-responsive component

**Novel psychoactive substances:**
- Synthetic cannabinoids (K2/Spice): Seizures, psychosis, coagulopathy
- Synthetic cathinones (bath salts): Sympathomimetic toxidrome, rhabdomyolysis
- NBOMe compounds: Sympathomimetic + hallucinations, seizures
- Drug checking services and rapid toxicology screens evolving

### Methemoglobinemia

**Causes:** Dapsone, nitrites, benzocaine, aniline dyes
**Presentation:** Cyanosis unresponsive to O2, chocolate-brown blood, SpO2 ~85% (falsely low/fixed)
**Treatment:** Methylene blue 1-2 mg/kg IV over 5 min (may repeat)
**Contraindication:** G6PD deficiency (methylene blue causes hemolysis)`,
      keyTerms: [
        { term: 'lipid emulsion therapy', definition: 'Intravenous fat emulsion that sequesters lipophilic toxins; strongest evidence for local anesthetic toxicity' },
        { term: 'HIET', definition: 'High-dose insulin euglycemic therapy; enhances cardiac inotropy in CCB/BB overdose using insulin as an inotrope' },
        { term: 'EXTRIP', definition: 'Extracorporeal Treatments in Poisoning; international workgroup providing evidence-based dialysis recommendations for specific toxins' },
        { term: 'NAPQI', definition: 'N-acetyl-p-benzoquinone imine; toxic metabolite of acetaminophen formed via CYP2E1, normally detoxified by glutathione' },
        { term: 'methemoglobinemia', definition: 'Oxidized hemoglobin unable to carry oxygen; presents with cyanosis refractory to O2 supplementation' },
      ],
      analogies: [
        'Lipid emulsion is like an oil slick absorbing a fat-soluble spill in water - the toxin dissolves into the lipid and is pulled out of tissues.',
        'HIET: insulin acts as a direct inotrope, like giving the heart extra fuel to pump harder despite the toxin trying to shut it down.',
        'Methemoglobin: hemoglobin is like a delivery truck. Normally it picks up oxygen. With methemoglobinemia, the trucks are locked and can\'t load cargo.',
      ],
      examples: [
        'Massive verapamil overdose: HR 35, BP 60/30. Calcium, atropine, glucagon fail. HIET started (insulin 1 u/kg bolus, 2 u/kg/hr). Over 30 minutes: HR 65, BP 100/60. Dextrose infusion maintains euglycemia.',
        'Bupivacaine toxicity during nerve block: Seizure, then PEA arrest. 20% intralipid 1.5 mL/kg bolus + infusion. ROSC after 3 minutes. No neurological deficit.',
      ],
      clinicalNotes: 'ILE is first-line for LAST and rescue therapy for refractory lipophilic drug toxicity. HIET takes 15-60 min for effect - start early, do not wait for other therapies to fail. Always check acetaminophen and salicylate levels on intentional OD. Fentanyl analogs may require 10-20mg naloxone - do not cap dose. Methylene blue in G6PD causes hemolytic crisis. Aspirin with altered mental status = emergent dialysis indication.',
    },

    5: {
      level: 5,
      summary: 'Expert toxicology practice integrates precision antidote dosing, molecular toxicology, novel reversal strategies, evolving substance epidemiology, and systems-level poison center operations.',
      explanation: `## Expert Toxicology

### Precision Antidote Pharmacology

**NAC pharmacogenomics:**
- CYP2E1 polymorphisms affect NAPQI production
- Some patients at risk at lower acetaminophen doses (chronic alcohol, isoniazid)
- Modified Prescott criteria: Treat at lower threshold in high-risk patients
- Two-bag NAC protocol (vs three-bag): Reduced anaphylactoid reactions, similar efficacy

**Digoxin-specific Fab antibodies:**
- Dosing: Known level: Vials = (serum dig ng/mL x weight kg) / 100
- Unknown level: 10-20 vials empirically for life-threatening toxicity
- Redistributes digoxin from tissues to plasma (bound to Fab)
- Post-Fab: Total digoxin level elevated but free (active) level undetectable
- Indication: Any arrhythmia, hyperkalemia >5.5, hemodynamic instability

### Molecular Toxicology

**Receptor-level antidote mechanisms:**
- Naloxone: Competitive mu-opioid antagonist (short half-life requires redosing or infusion)
- Flumazenil: Competitive GABA-A antagonist (risk: seizure in chronic benzo users, lower seizure threshold)
- Physostigmine: Reversible acetylcholinesterase inhibitor for anticholinergic delirium (risk: bradycardia, cholinergic crisis)

**Pharmacokinetic antidotes:**
- Fomepizole: ADH inhibitor (Ki for ADH 8000x ethanol)
- NAC: Glutathione precursor + direct NAPQI scavenger
- Prussian blue: Ion exchange for thallium and cesium

### Novel Synthetic Drug Challenges

**Fourth-wave opioid crisis:**
- Fentanyl-dominant supply with novel analogs (carfentanil, nitazenes)
- Xylazine (tranq): Alpha-2 agonist, not reversed by naloxone, causes tissue necrosis
- Isotonitazene: Benzimidazole opioid, extremely potent
- Management: High-dose naloxone (up to 10-20mg), prolonged observation, wound care for xylazine

**Mass casualty toxicologic events:**
- Nerve agents: Atropine + pralidoxime (2-PAM) + benzodiazepines
- Cyanide: Hydroxocobalamin (preferred) or sodium thiosulfate
- Radiation emergencies: DTPA, Prussian blue, KI
- Botulism: Antitoxin from CDC Strategic National Stockpile

### Controversies in Toxicology

**Flumazenil:**
- Traditional teaching: Never use in unknown overdose
- Evolving: May be safe in isolated iatrogenic benzodiazepine sedation
- Risk: Seizures in chronic BZD use, co-ingested proconvulsants
- Consensus: Reserved for specific clinical scenarios

**Naloxone dosing strategy:**
- Low-dose titration (0.04mg increments): Avoids precipitated withdrawal
- High-dose bolus (2mg+): For apneic patients
- Duration: Naloxone half-life (30-90min) < most opioids; redosing or infusion needed
- Take-home naloxone: 4mg intranasal standard for laypersons

**Physostigmine renaissance:**
- Safer than previously thought when used appropriately
- Indication: Pure anticholinergic delirium without QRS widening
- Dose: 0.5-2mg IV slow push
- Contraindication: Conduction abnormality, reactive airway, bowel/bladder obstruction

### Systems and Quality

**Poison center operations:**
- 24/7 specialist consultation
- 2 million calls/year in US
- Cost-effective: $1 spent saves $7 in healthcare costs
- Surveillance: Real-time poisoning epidemiology
- Toxicosurveillance: Detect novel substances and outbreaks

**Quality metrics:**
- Time to antidote administration
- Appropriate decontamination rates
- Unnecessary ICU admission rates
- Follow-up rates for psychiatric evaluation in intentional OD

**Emerging tools:**
- Point-of-care mass spectrometry (research)
- Rapid fentanyl analog detection
- AI-assisted toxidrome recognition
- Telehealth toxicology consultation`,
      keyTerms: [
        { term: 'nitazenes', definition: 'Novel benzimidazole synthetic opioids with extremely high potency; emerging in illicit drug supply' },
        { term: 'xylazine', definition: 'Veterinary alpha-2 agonist increasingly found in illicit opioid supply; not reversed by naloxone, causes tissue necrosis' },
        { term: 'pharmacogenomics in toxicology', definition: 'Genetic variations affecting drug metabolism that alter susceptibility to poisoning and response to antidotes' },
        { term: 'Prussian blue', definition: 'Ion exchange resin for internal decontamination of thallium and radioactive cesium' },
        { term: 'toxicosurveillance', definition: 'Real-time monitoring of poisoning patterns through poison center data to detect novel substances and outbreaks' },
      ],
      clinicalNotes: 'Two-bag NAC protocol is increasingly adopted over three-bag for fewer reactions. Fentanyl analogs: do not cap naloxone - give as much as needed. Xylazine component of "tranq" not reversed by naloxone; treat supportive. Physostigmine is making a comeback for anticholinergic delirium without cardiac conduction abnormalities. Poison centers save money and lives - consult early. Mass casualty chemical events: atropine auto-injectors for nerve agents, hydroxocobalamin for cyanide. Point-of-care mass spec may revolutionize unknown overdose management.',
    },
  },

  media: [
    {
      id: 'toxidrome-comparison',
      type: 'diagram',
      filename: 'toxidrome-comparison-chart.svg',
      title: 'Toxidrome Comparison Chart',
      description: 'Side-by-side comparison of major toxidromes with key distinguishing features',
    },
    {
      id: 'rumack-matthew-nomogram',
      type: 'diagram',
      filename: 'rumack-matthew-nomogram.svg',
      title: 'Rumack-Matthew Nomogram',
      description: 'Acetaminophen treatment decision nomogram',
    },
  ],

  citations: [
    {
      id: 'goldfrank-toxicology',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies, 11th Edition',
      authors: ['Nelson LS', 'et al.'],
      source: 'McGraw-Hill',
      accessedDate: '2026-01-30',
    },
    {
      id: 'extrip-recommendations',
      type: 'article',
      title: 'EXTRIP Workgroup Recommendations for Extracorporeal Treatment in Poisoning',
      authors: ['Lavergne V', 'et al.'],
      source: 'Clinical Toxicology',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-toxicology-antidote-protocols', targetType: 'topic', relationship: 'sibling', label: 'Antidote Protocols' },
    { targetId: 'emergency-cardiac-acls-algorithms', targetType: 'topic', relationship: 'related', label: 'ACLS Algorithms' },
    { targetId: 'emergency-airway-intubation', targetType: 'topic', relationship: 'related', label: 'Intubation' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular', 'gastrointestinal', 'hepatic'],
    topics: ['emergency medicine', 'toxicology', 'pharmacology', 'critical care'],
    keywords: ['overdose', 'poisoning', 'toxidrome', 'antidote', 'naloxone', 'NAC', 'decontamination'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'internal medicine'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default overdoseManagement;
