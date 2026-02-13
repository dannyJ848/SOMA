/**
 * Toxicologic Emergencies
 *
 * Covers drug overdoses, poisonings, antidotes, withdrawal syndromes,
 * and general principles of toxicologic management.
 */

import { EducationalContent } from '../types';

export const toxicologicEmergenciesContent: EducationalContent = {
  id: 'emergency-toxicologic',
  type: 'topic',
  name: 'Toxicologic Emergencies',
  nameEs: 'Emergencias Toxicologicas',
  alternateNames: ['Poisoning', 'Overdose', 'Toxicology', 'Drug Overdose', 'Antidotes'],

  levels: {
    1: {
      level: 1,
      summary: 'Toxicologic emergencies happen when someone swallows, inhales, or touches too much of a harmful substance like medicines, drugs, or chemicals, and they need immediate medical help to prevent serious harm or death.',
      explanation: `Your body can handle small amounts of many substances, but too much of anything can be dangerous. Toxicologic emergencies happen when someone is exposed to more of a substance than their body can safely handle.

**What is a Poison or Overdose?**

A poison is any substance that causes harm when it enters the body. An overdose is taking too much of a medicine or drug. Both can be life-threatening and need emergency medical care.

**Common Types of Poisonings:**

**Medicine Overdoses:**
- Pain medicines (opioids like oxycodone, morphine)
- Sleeping pills and anxiety medicines (benzodiazepines)
- Antidepressants
- Blood pressure medicines
- Over-the-counter medicines (acetaminophen, ibuprofen)

**Illegal Drugs:**
- Heroin, fentanyl, and other opioids
- Cocaine and methamphetamine
- Club drugs (MDMA, ecstasy)
- Synthetic drugs

**Household Products:**
- Cleaning products (bleach, drain cleaners)
- Laundry detergents (especially pods)
- Paints and solvents
- Pesticides and bug sprays
- Automotive products (antifreeze, windshield washer)

**Alcohol Poisoning:**
- Drinking too much alcohol too fast
- Can cause someone to pass out and stop breathing
- Especially dangerous in teenagers and young adults

**Carbon Monoxide:**
- Invisible, odorless gas from heaters, cars, fires
- Causes headache, confusion, then unconsciousness
- Can be deadly without warning

**Food Poisoning:**
- From eating contaminated food
- Causes nausea, vomiting, diarrhea
- Usually not life-threatening but can be serious

**Warning Signs of Poisoning:**

**General Signs:**
- Nausea and vomiting
- Stomach pain
- Confusion or acting strange
- Trouble breathing
- Passing out
- Seizures
- Burns around the mouth (from swallowing chemicals)

**Specific Signs:**
- Very small pupils (opioids)
- Very large pupils (amphetamines)
- Slow or stopped breathing
- Fast or racing heart
- Blue lips or fingernails

**What to Do:**

**If you think someone has been poisoned:**
1. Call Poison Control (1-800-222-1222 in US)
2. Call 911 if they are not breathing or are unconscious
3. Stay calm and gather information about what they took

**Do NOT:**
- DO NOT make them vomit unless told to by a professional
- DO NOT give anything by mouth (water, milk, ipecac)
- DO NOT wait to see if symptoms get worse
- DO NOT try to catch the poison they vomited

**DO:**
- Call for help immediately
- Read the container label to Poison Control
- Follow their instructions exactly
- Stay with the person until help arrives
- Start CPR if they stop breathing and you know how

**How Doctors Help:**

**Finding Out What Happened:**
- Ask the person (if they can talk)
- Ask family members or friends
- Look for medicine bottles or containers
- Use laboratory tests to identify the poison

**Treatments:**
- Give antidotes (medicines that counteract the poison)
- Activated charcoal to bind poison in the stomach
- Breathing support with oxygen
- IV fluids to flush out the poison
- Medicines to support heart and blood pressure
- Dialysis (machine that filters blood) for certain poisons

**Common Antidotes:**
- Naloxone (Narcan): For opioid overdose
- Activated charcoal: Binds many poisons in stomach
- Atropine: For certain pesticides
- Flumazenil: For benzodiazepine overdose

**Prevention:**

**At Home:**
- Keep medicines in locked cabinets
- Keep chemicals in original containers
- Never store chemicals in food containers
- Use child-proof caps
- Keep Poision Control number by phone: 1-800-222-1222

**For Medicines:**
- Take only as prescribed
- Never share prescription medicines
- Keep track of how many pills you have
- Dispose of old medicines properly

**For Children:**
- Supervise them carefully
- Teach them about medicine safety
- "Medicine is not candy"
- Keep everything out of reach

**Carbon Monoxide Prevention:**
- Install CO detectors in your home
- Never run engines in closed spaces
- Have heaters checked yearly

**The Poison Control Center:**

Call 1-800-222-1222 (in the United States) for:
- Immediate, expert advice
- Available 24/7, free and confidential
- Can tell you if you need emergency care
- Can guide you through first aid steps

Remember: When it comes to poisoning, time matters. Calling for help right away can save lives. Never wait to see if symptoms go away on their own.`,
      keyTerms: [
        { term: 'poison', definition: 'Any substance that causes harm when it enters the body' },
        { term: 'overdose', definition: 'Taking more of a substance than the body can safely handle' },
        { term: 'antidote', definition: 'A medicine that counteracts a poison' },
        { term: 'opioids', definition: 'Strong pain medicines that can slow or stop breathing in overdose' },
        { term: 'activated charcoal', definition: 'A substance given to bind poisons in the stomach so they are not absorbed' },
        { term: 'naloxone', definition: 'Medicine that reverses opioid overdose; can save lives' },
      ],
      analogies: [
        'An antidote is like a key that unlocks the poison\'s effects on your body.',
        'Your liver is like a filter - too much poison at once can overwhelm it.',
        'Activated charcoal is like a sponge that soaks up poison in your stomach.',
      ],
      examples: [
        'A teenager takes too many prescription pain pills at a party.',
        'A toddler drinks a bottle of cleaner under the sink.',
        'Someone is found unconscious after using heroin.',
        'A family develops headaches and nausea from a faulty furnace.',
      ],
    },
    2: {
      level: 2,
      summary: 'Toxicologic emergencies encompass acute poisonings, drug overdoses, envenomations, and chemical exposures requiring rapid assessment, stabilization, decontamination, and administration of specific antidotes or supportive care to prevent morbidity and mortality.',
      explanation: `## General Approach to Toxicologic Emergencies

**Initial Assessment: ABCD**

**A - Airway:**
- Is the airway open?
- Are secretions or foreign bodies present?
- Need for intubation?

**B - Breathing:**
- Respiratory rate and effort
- Oxygen saturation
- Breath sounds
- Need for ventilation support

**C - Circulation:**
- Heart rate, blood pressure
- Cardiac rhythm
- Peripheral perfusion
- IV access

**D - Decontamination / Disability:**
- Remove contaminated clothing
- Skin decontamination
- Neurologic status (GCS, pupils)
- Blood glucose

**Key Historical Information:**
- What substance(s) were taken?
- How much was taken?
- When was it taken?
- Why was it taken (accidental, intentional)?
- Any other medical conditions or medications?
- Any treatments already given?

**Physical Examination Clues:**
- Odors: Alcohol, garlic (organophosphates), bitter almonds (cyanide - rare ability to smell)
- Skin: Dry (anticholinergics), wet (cholinergics), flushed, cyanotic
- Eyes: Pupil size, nystagmus, conjunctival injection
- Mouth: Burns, unusual odor, ulcerations
- Abdomen: Bowel sounds, tenderness, liver size
- Neurologic: Level of consciousness, reflexes, motor function

**Toxidrome Recognition:**

| Toxidrome | Key Findings | Causes |
|-----------|--------------|--------|
| Opioid | Small pupils, respiratory depression, coma | Heroin, oxycodone, fentanyl |
| Sympathomimetic | Large pupils, agitation, hypertension, tachycardia | Cocaine, methamphetamine, MDMA |
| Anticholinergic | Dry skin, large pupils, flushed, decreased bowel sounds | Diphenhydramine, antipsychotics, plants |
| Cholinergic | Wet skin, small pupils, salivation, diarrhea | Organophosphates, nerve agents |
| Sedative-hypnotic | Normal or slightly large pupils, slurred speech, ataxia | Benzodiazepines, barbiturates, alcohol |
| Serotonin | Hyperreflexia, clonus, agitation, fever | SSRIs, MAOIs, meperidine |

**Laboratory Evaluation:**
- Acetaminophen level (every overdose)
- Salicylate level
- Electrolytes, BUN, creatinine
- Glucose
- CBC
- LFTs (for acetaminophen toxicity)
- Coagulation studies
- Urine drug screen (limited utility)
- Serum drug levels when available

## Specific Toxicologic Emergencies

**Opioid Overdose:**

**Triad:**
- Coma
- Respiratory depression
- Pinpoint pupils

**Treatment:**
- Naloxone (Narcan): 0.04-0.4 mg IV/IM/IN
- Repeat as needed (may need very high doses for fentanyl)
- Supportive care
- Observation period (naloxone shorter acting than most opioids)

**Sedative-Hypnotic Overdose:**

**Benzodiazepines:**
- CNS depression, respiratory depression
- Flumazenil: Reverses benzodiazepines (use cautiously - risk of seizures)
- Supportive care

**Barbiturates:**
- Severe CNS and respiratory depression
- No specific antidote
- Supportive care, may need dialysis

**Alcohol:**
- CNS depression, respiratory depression
- Hypoglycemia (especially in children)
- Thiamine before glucose (prevent Wernicke's)
- Supportive care

**Sympathomimetic Toxicity:**

**Cocaine, Amphetamines, MDMA:**
- Agitation, tachycardia, hypertension
- Hyperthermia, seizures
- Myocardial ischemia (cocaine)
- Treatment: Benzodiazepines, cooling, supportive care

**Acetaminophen Toxicity:**

**Phases:**
- I (0-24h): GI symptoms, asymptomatic
- II (24-72h): LFT elevation
- III (72-96h): Hepatic failure, peak injury
- IV (4 days-3 weeks): Recovery or death

**Treatment:**
- N-acetylcysteine (NAC) if level above treatment line (Rumack-Matthew nomogram)
- NAC effective up to 24 hours after ingestion
- Monitor LFTs, coagulation

**Salicylate Toxicity:**

**Symptoms:**
- Tinnitus, hearing loss
- Hyperventilation, respiratory alkalosis
- Metabolic acidosis (later)
- Hyperthermia

**Treatment:**
- Activated charcoal
- Urinary alkalinization (sodium bicarbonate)
- Hemodialysis for severe toxicity

**Anticholinergic Toxicity:**

**"Mad as a hatter, red as a beet, dry as a bone, blind as a bat"**
- Agitation/confusion
- Flushed skin, anhidrosis
- Dry mucous membranes
- Mydriasis (large pupils)
- Urinary retention, decreased bowel sounds

**Causes:**
- Diphenhydramine (Benadryl)
- Antipsychotics
- Tricyclic antidepressants
- Atropine, scopolamine
- Plants (Datura, jimsonweed)

**Treatment:**
- Benzodiazepines for agitation
- Supportive care
- Physostigmine (only in severe cases, specialist consultation)

**Cholinergic Toxicity:**

**SLUDGE:**
- Salivation, Lacrimation, Urination, Defecation, Gastrointestinal distress, Emesis
- Plus: Bradycardia, bronchospasm, seizures, coma

**Causes:**
- Organophosphate insecticides
- Nerve agents
- Certain mushrooms

**Treatment:**
- Atropine: Until secretions dry
- Pralidoxime (2-PAM): Reactivates cholinesterase
- Benzodiazepines for seizures
- Supportive care

**Carbon Monoxide:**

**Symptoms:**
- Headache, nausea, dizziness
- Cherry-red skin (late finding)
- Confusion, syncope, death
- Cardiac ischemia

**Treatment:**
- 100% oxygen
- Hyperbaric oxygen for severe cases
- Consider cardiac monitoring

**Withdrawal Syndromes:**

**Alcohol Withdrawal:**
- Autonomic hyperactivity (tremor, tachycardia, hypertension)
- Hallucinations
- Seizures
- Delirium tremens (DTs)

**Benzodiazepine Withdrawal:**
- Similar to alcohol but more prolonged
- Seizure risk

**Opioid Withdrawal:**
- Not life-threatening but extremely uncomfortable
- Lacrimation, rhinorrhea, yawning
- GI symptoms, piloerection (gooseflesh)
- Anxiety, insomnia

**Antidotes - Quick Reference:**

| Poison | Antidote |
|--------|----------|
| Opioids | Naloxone |
| Acetaminophen | N-acetylcysteine |
| Benzodiazepines | Flumazenil |
| Organophosphates | Atropine, Pralidoxime |
| Cyanide | Hydroxocobalamin, amyl nitrite |
| Methemoglobinemia | Methylene blue |
| Heavy metals | Chelators (BAL, EDTA, DMSA) |
| Beta-blockers | Glucagon, calcium |
| Calcium channel blockers | Calcium, glucagon, insulin |

**When to Call Poison Control:**
- Any known or suspected poisoning
- Unknown substance ingested
- Need for antidote administration
- Uncertainty about management

US Poison Control: 1-800-222-1222
- Available 24/7
- Free and confidential
- Staffed by toxicology experts

**Red Flags - Immediate Emergency:**
- Altered mental status
- Respiratory depression or apnea
- Hemodynamic instability
- Seizures
- Hyperthermia or hypothermia
- Cardiac arrhythmias`,
      keyTerms: [
        { term: 'toxidrome', definition: 'Group of signs and symptoms characteristic of a class of poisons' },
        { term: 'naloxone', definition: 'Opioid antidote; reverses respiratory depression' },
        { term: 'Rumack-Matthew nomogram', definition: 'Chart for acetaminophen toxicity treatment decisions' },
        { term: 'N-acetylcysteine', definition: 'Antidote for acetaminophen toxicity; protects liver' },
        { term: 'activated charcoal', definition: 'Adsorbs many toxins in GI tract; prevents absorption' },
        { term: 'SLUDGE', definition: 'Mnemonic for cholinergic toxicity symptoms' },
        { term: 'flumazenil', definition: 'Benzodiazepine antidote; use with caution' },
        { term: 'chelation', definition: 'Treatment using agents that bind heavy metals for removal' },
      ],
      analogies: [
        'A toxidrome is like a fingerprint that helps identify the type of poisoning.',
        'Naloxone is like an eraser for opioids - it can reverse their effects quickly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Toxicologic emergencies require systematic assessment incorporating toxidrome recognition, targeted laboratory testing, appropriate decontamination, administration of specific antidotes, and comprehensive supportive care to address the diverse effects of toxic exposures.',
      explanation: `## Comprehensive Toxicology Approach

**Primary Survey Modifications for Toxicology:**

**Airway:**
- Rapid sequence intubation may be needed
- Cervical spine protection if trauma suspected
- Consider aspiration risk (decreased gag reflex)
- Burns to airway (thermal or chemical) indicate need for early airway

**Breathing:**
- Respiratory depression common (opioids, sedatives)
- Tachypnea: Compensation for metabolic acidosis or direct lung injury
- Hyperventilation: Salicylates, CO poisoning
- Bronchorrhea: Organophosphates

**Circulation:**
- Hypotension: Vasodilators, beta-blockers, calcium channel blockers
- Hypertension: Sympathomimetics, withdrawal
- Arrhythmias: Tricyclics, digoxin, electrolyte abnormalities
- Cardiac monitoring essential

**Disability:**
- Blood glucose (always check first!)
- GCS, pupillary size and reactivity
- Focal neurologic deficits
- Seizure activity

**Exposure/Decontamination:**
- Remove contaminated clothing
- Skin decontamination: Soap and water, not just irrigation
- Eye decontamination: Copious irrigation (saline or water)
- Consider GI decontamination based on agent and timing

## Decontamination Strategies

**Gastrointestinal Decontamination:**

**Activated Charcoal:**
- Dose: 1-2 g/kg (typically 50-100 g)
- Indicated: Most poisons within 1-2 hours of ingestion
- Contraindications: Acid/alkali, hydrocarbons (aspiration risk), unprotected airway
- Multiple doses: Certain substances (theophylline, phenobarbital, salicylates)

**Gastric Lavage:**
- Controversial, rarely used
- Consider if: Life-threatening ingestion within 1 hour
- Contraindications: Acid/alkali, unprotected airway
- Complications: Aspiration, esophageal injury

**Whole Bowel Irrigation:**
- Polyethylene glycol solution
- Indicated: Slow-release formulations, body packers, heavy metals
- Contraindications: Bowel obstruction, ileus, hemodynamic instability

**Enhanced Elimination:**

**Urinary Alkalinization:**
- Sodium bicarbonate infusion
- Indications: Salicylates, phenobarbital
- Target urine pH: >7.5
- Contraindicated: Renal failure

**Multiple-Dose Activated Charcoal:**
- Reduces elimination half-life
- Indicated: Theophylline, phenobarbital, carbamazepine
- Contraindicated: Ileus, bowel obstruction

**Hemodialysis:**
- Removes substances from blood directly
- Indicated: Toxic alcohols, salicylates, lithium, valproate
- Corrects acid-base and electrolyte abnormalities

## Detailed Toxidromes

**Opioid Toxidrome:**

**Classic Triad:**
- Coma
- Miosis (pinpoint pupils)
- Respiratory depression

**Other Findings:**
- Hypotension (histamine release)
- Bradycardia
- Hypothermia
- Decreased bowel sounds
- Needle marks (if IV use)

**Specific Agents:**
- Heroin: Short-acting, illicit
- Fentanyl: Extremely potent, very short acting, may need high-dose naloxone
- Methadone: Long-acting, QT prolongation
- Oxycodone, morphine, hydrocodone: Pharmaceutical opioids
- Tramadol: Seizures, serotonin syndrome risk

**Treatment:**
- Naloxone 0.04-2 mg IV (titrate)
- May need repeated dosing (especially fentanyl)
- Continuous infusion for long-acting opioids
- Supportive care
- Observation: 4-6 hours after last naloxone

**Sympathomimetic Toxidrome:**

**Neurologic:**
- Agitation, delirium
- Psychosis, paranoia
- Seizures, myoclonus
- Hyperreflexia

**Autonomic:**
- Tachycardia, hypertension
- Mydriasis (large pupils)
- Diaphoresis
- Hyperthermia

**Specific Agents:**
- Cocaine: Chest pain, MI, stroke, aortic dissection
- Amphetamines: Similar to cocaine
- Methamphetamine: Psychosis, severe dental decay
- MDMA (Ecstasy): Hyponatremia, hyperthermia, serotonin syndrome
- Bath salts: Synthetic cathinones, severe psychosis

**Treatment:**
- Benzodiazepines (first-line)
- Cooling for hyperthermia
- Nitroprusside or phentolamine for severe hypertension
- Avoid beta-blockers (unopposed alpha effect)
- Treat agitation aggressively (can precipitate hyperthermia)

**Anticholinergic Toxidrome:**

**"Hot as a hare, dry as a bone, red as a beet, mad as a hatter"**

**Peripheral:**
- Anhidrosis (dry skin)
- Hyperthermia
- Flushed skin
- Mydriasis, blurred vision
- Tachycardia
- Urinary retention
- Constipation, decreased bowel sounds

**Central:**
- Agitation, confusion
- Hallucinations
- Myoclonus
- Seizures
- Coma

**Specific Agents:**
- Diphenhydramine (Benadryl)
- Antihistamines
- Atropine, scopolamine
- Antipsychotics (also have anticholinergic effects)
- Tricyclic antidepressants (also have cardiac effects)
- Jimsonweed, Datura plants

**ECG Findings (if TCA):**
- QRS widening (>100 ms)
- Right axis deviation
- Terminal R wave in aVR
- Prolonged QT

**Treatment:**
- Benzodiazepines for agitation
- Sodium bicarbonate for QRS widening (TCA)
- Supportive care
- Physostigmine (rarely, specialist consultation)

**Cholinergic Toxidrome:**

**SLUDGE BB:**
- Salivation, Lacrimation, Urination, Defecation, Gastrointestinal cramping, Emesis
- Bradycardia, Bronchospasm, Bronchorrhea

**Neuromuscular:**
- Muscle weakness, fasciculations
- Paralysis
- Seizures
- Coma

**Specific Agents:**
- Organophosphate insecticides
- Nerve agents (sarin, VX)
- Carbamates
- Certain mushrooms

**Treatment:**
- Atropine: 1-5 mg IV, repeat until secretions dry
- Pralidoxime (2-PAM): 1-2 g IV over 30 min
- Benzodiazepines for seizures
- Supportive care

**Sedative-Hypnotic Toxidrome:**

**Findings:**
- CNS depression: Slurred speech, ataxia, coma
- Respiratory depression
- Normal or slightly large pupils
- Hypotension (overdose)
- Hypothermia

**Specific Agents:**
- Benzodiazepines: Safe in single-agent overdose, enhanced elimination with flumazenil
- Barbiturates: No antidote, severe respiratory depression
- Z-drugs: Ambien, Lunesta (similar to benzos)
- Ethanol: Hypoglycemia (kids), Wernicke's (thiamine deficiency)

**Treatment:**
- Supportive care
- Airway protection if needed
- Flumazenil (caution - seizures, arrhythmias)
- Hemodialysis (barbiturates)

## Specific Toxicities

**Acetaminophen (APAP) Toxicity:**

**Pathophysiology:**
- Therapeutic dose: 4 g/day (max), 3 g/day (elderly)
- Toxic dose: >7.5 g single ingestion or >150 mg/kg
- Metabolism: 90% conjugated (safe), 5% CYP2E1 → NAPQI
- NAPQI detoxified by glutathione
- Overdose: Glutathione depleted → NAPQI binds hepatocytes

**Phases:**
- Phase I (0-24h): GI symptoms, asymptomatic
- Phase II (24-72h): LFT elevation, RUQ pain
- Phase III (72-96h): Hepatic failure, coagulopathy, encephalopathy
- Phase IV (4 days-3 weeks): Recovery or death/transplant

**Rumack-Matthew Nomogram:**
- Treatment line: Starts at 150 mcg/mL at 4 hours
- Single acute ingestion, known time
- Not for chronic/supratherapeutic ingestions

**Treatment:**
- N-acetylcysteine (NAC): Loading dose 150 mg/kg over 1 hour
- Then 50 mg/kg over 4 hours
- Then 100 mg/kg over 16 hours
- Effective up to 24 hours post-ingestion

**Salicylate Toxicity:**

**Pathophysiology:**
- Uncouples oxidative phosphorylation
- Stimulates respiratory center
- Direct stimulates medullary center
- Interferes with platelet function

**Clinical Features:**
- Tinnitus, hearing loss (early sign)
- Hyperthermia
- Hyperventilation (respiratory alkalosis)
- Metabolic acidosis (later)
- Cerebral edema
- Pulmonary edema

**Diagnosis:**
- Serum salicylate level
- ABG: Respiratory alkalosis with metabolic acidosis
- Anion gap metabolic acidosis

**Treatment:**
- Activated charcoal
- Urinary alkalinization: Sodium bicarbonate
- Hemodialysis for severe toxicity:
  - Level >90 mg/mL (acute) or >40 mg/mL (chronic)
  - Refractory acidosis
  - Renal failure
  - CNS symptoms
  - Pulmonary edema

**Iron Toxicity:**

**Phases:**
- I (0-6h): GI symptoms, vomiting, diarrhea
- II (6-24h): Apparent recovery
- III (12-96h): Shock, metabolic acidosis, coagulopathy
- IV (2-8 weeks): GI scarring, obstruction

**Treatment:**
- Deferoxamine: Chelates iron
- Supportive care
- Hemodialysis (rarely needed)

**Digoxin Toxicity:**

**Symptoms:**
- Nausea, vomiting, abdominal pain
- Visual changes: Yellow halos (xanthopsia)
- Cardiac: Any arrhythmia
- Hyperkalemia

**Treatment:**
- Digoxin-specific antibody fragments (Digibind)
- Correct hypokalemia (cautiously)
- Avoid atropine (unless bradycardia)
- Cardioversion for unstable arrhythmias

**Tricyclic Antidepressant Toxicity:**

**"3 Cs":**
- Coma
- Convulsions
- Cardiac conduction abnormalities

**Cardiac Effects:**
- Sodium channel blockade
- QRS widening >100 ms
- Ventricular arrhythmias

**Treatment:**
- Sodium bicarbonate: 1-2 mEq/kg IV
- Benzodiazepines for seizures
- Supportive care
- Avoid QT-prolonging agents

**Withdrawal Syndromes:**

**Alcohol Withdrawal:**
- Minor: Tremor, anxiety, insomnia
- Major: Hallucinations, disorientation
- DTs: Delirium tremens, autonomic hyperactivity
- Treatment: Benzodiazepines (chlordiazepoxide, lorazepam)
- Thiamine before glucose
- Fluid and electrolyte correction

**Benzodiazepine Withdrawal:**
- Similar to alcohol
- Prolonged course (weeks to months)
- Treatment: Long-acting benzo taper

**Opioid Withdrawal:**
- Severe discomfort but not life-threatening
- Treatment: Symptomatic support
- Methadone or buprenorphine for maintenance

**Clonidine withdrawal:**
- Rebound hypertension
- Treatment: Reinitiate clonidine`,
      keyTerms: [
        { term: 'Rumack-Matthew nomogram', definition: 'Decision tool for acetaminophen poisoning treatment' },
        { term: 'NAPQI', definition: 'Toxic acetaminophen metabolite; binds hepatocytes when glutathione depleted' },
        { term: 'decontamination', definition: 'Removal of toxin from patient; skin, GI, eyes' },
        { term: 'whole bowel irrigation', definition: 'Complete bowel cleansing for slow-release or packed toxins' },
        { term: 'urinary alkalinization', definition: 'Raising urine pH to enhance elimination of certain toxins' },
        { term: 'flumazenil', definition: 'Benzodiazepine receptor antagonist; reverses sedation' },
        { term: 'physostigmine', definition: 'Acetylcholinesterase inhibitor; reverses anticholinergic toxicity' },
        { term: 'Digibind', definition: 'Digoxin-specific antibody fragments; reverses digoxin toxicity' },
      ],
      clinicalNotes: 'Always check blood glucose first in any altered mental status. Hypoglycemia mimics all toxidromes.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of toxicologic emergencies requires comprehensive understanding of pharmacokinetics, toxidrome recognition, evidence-based decontamination and elimination strategies, and specific antidote administration to optimize outcomes in poisoning and overdose.',
      explanation: `## Advanced Toxicology Principles

**Pharmacokinetic Considerations:**

**Absorption:**
- Oral: Bioavailability varies with first-pass metabolism
- Dermal: Variable based on vehicle, concentration
- Inhalational: Rapid absorption, large surface area
- Injection: Immediate bioavailability

**Distribution:**
- Volume of distribution (Vd): Determines hemodialysis effectiveness
- Lipid solubility: Crosses blood-brain barrier
- Protein binding: Only free drug is active/toxic
- Tissue binding: Prolongs elimination

**Metabolism:**
- Phase I: Oxidation, reduction, hydrolysis (CYP450)
- Phase II: Conjugation (glucuronidation, sulfation)
- Active metabolites: May be more toxic than parent
- Genetic polymorphisms: Affect metabolism (CYP2D6, CYP2C19)

**Elimination:**
- First-order: Constant fraction eliminated per time
- Zero-order: Constant amount eliminated (ethanol at high levels)
- Half-life: Time to eliminate 50% of drug
- Clearance: Volume cleared per unit time

**Enhanced Elimination Techniques:**

**Urinary Alkalinization:**
- Sodium bicarbonate infusion
- Goal: Urine pH 7.5-8.5
- Mechanism: Ion trapping of weak acids
- Indications: Salicylates, phenobarbital, chlorpropamide
- Contraindications: Renal failure

**Multiple-Dose Activated Charcoal (MDAC):**
- 12.5-25 g every 2-4 hours
- Mechanism: GI dialysis (enteroenteric circulation)
- Indications: Theophylline, phenobarbital, carbamazepine, digoxin
- Contraindications: Ileus, bowel obstruction

**Hemodialysis:**
- Removes substances from blood directly
- High clearance: Low protein binding, low Vd, water-soluble
- Indications:
  - Toxic alcohols (methanol, ethylene glycol)
  - Salicylates
  - Lithium
  - Valproic acid
  - Phenobarbital
- Corrects acid-base and electrolyte abnormalities

**Hemoperfusion:**
- Blood passed through charcoal/resin column
- Removes protein-bound substances
- Indications: Theophylline, phenobarbital
- Complications: Thrombocytopenia, hypocalcemia

## Advanced Toxidrome Analysis

**Serotonin Syndrome:**

**Pathophysiology:**
- Excess serotonin in CNS
- Usually multiple serotonergic drugs
- May occur with therapeutic doses or overdose

**Hunter Criteria (requires 4):**
- Neuromuscular: Tremor, clonus, hyperreflexia, rigidity
- Autonomic: Fever, tachycardia, hyperthermia
- Mental status: Agitation, confusion, coma
- Ocular: Clonus (inducible, spontaneous, ocular)

**Specific Agents:**
- SSRIs, SNRIs, MAOIs
- Tramadol, meperidine, dextromethorphan
- MDMA, cocaine
- Linezolid, methylene blue

**Treatment:**
- Discontinue serotonergic agents
- Benzodiazepines: Agitation, rigidity
- Cyproheptadine: Serotonin antagonist (5-HT2A)
- Cooling for hyperthermia
- Avoid MAOIs in recovery

**Neuroleptic Malignant Syndrome (NMS):**

**Pathophysiology:**
- Dopamine D2 receptor blockade
- Usually antipsychotics
- Similar to serotonin syndrome but different cause

**Diagnostic Criteria:**
- Severe rigidity
- Hyperthermia
- Autonomic instability
- Altered mental status
- Elevated CK

**Specific Agents:**
- All antipsychotics (typical and atypical)
- Antiemetics (metoclopramide, prochlorperazine)

**Treatment:**
- Discontinue antipsychotic
- Supportive care
- Bromocriptine or dantrolene (controversial)
- Benzodiazepines

**Malignant Hyperthermia:**

**Pathophysiology:**
- Uncontrolled skeletal muscle metabolism
- Ryanodine receptor mutation
- Triggered by volatile anesthetics, succinylcholine

**Clinical Features:**
- Rapidly rising temperature
- Muscle rigidity
- Metabolic and respiratory acidosis
- Hyperkalemia
- Rhabdomyolysis

**Treatment:**
- Discontinue triggering agents
- Dantrolene 2-5 mg/kg IV
- Hyperventilate with 100% O2
- Cool patient
- Correct hyperkalemia
- Monitor for recurrence

**Dystonic Reactions:**

**Acute dystonia:**
- Sustained muscle contractions
- Oculogyric crisis, torticollis, trismus
- Usually antipsychotics or antiemetics

**Treatment:**
- Benztropine 1-2 mg IV/IM
- Diphenhydramine 25-50 mg IV/IM
- Benzodiazepines

## Specific Poisoning Management

**Acetaminophen:**

**Metabolic Pathway:**
- 90-95%: Glucuronidation and sulfation (safe)
- 5-10%: CYP2E1 → NAPQI (toxic metabolite)
- NAPQI normally conjugated with glutathione
- Overwhelmed glutathione → NAPQI binds hepatocytes

**Risk Factors for Hepatotoxicity:**
- Chronic alcohol use
- Fasting or malnutrition
- Inducers of CYP2E1
- Pre-existing liver disease

**NAC Mechanism:**
- Precursor for glutathione synthesis
- Also: Sulfhydryl donor, improves microcirculation
- Effective even 24+ hours post-ingestion

**Chronic Supratherapeutic Ingestion:**
- Multiple doses exceeding therapeutic limits
- Nomogram does not apply
- Treat based on level >20 mcg/mL or LFT elevation

**Salicylates:**

**Pathophysiology:**
- Uncouples oxidative phosphorylation → heat production
- Direct stimulates respiratory center → hyperventilation
- Interferes with Krebs cycle
- Inhibits platelet function

**Acid-Base Status:**
- Early: Respiratory alkalosis (hyperventilation)
- Late: Metabolic acidosis (lactic acidosis)
- Mixed: Respiratory alkalosis + metabolic acidosis

**Management:**
- Serum level (serial)
- Urinary alkalinization: NaHCO3 infusion
- Monitor ABG
- Hemodialysis for severe toxicity

**Ethylene Glycol and Methanol:**

**Metabolism:**
- Alcohol dehydrogenase → toxic metabolites
- Ethylene glycol: Glycolic, oxalic acid (renal failure)
- Methanol: Formic acid (retinal toxicity, blindness)

**Clinical Features:**
- Early: CNS depression (like ethanol)
- Intermediate: Metabolic acidosis, tachypnea
- Late: Organ failure (renal - EG, visual - methanol)

**Diagnosis:**
- Osmolar gap: (Measured osmolality - calculated osmolality)
- Anion gap metabolic acidosis
- Urinalysis: Calcium oxalate crystals (ethylene glycol)
- Visual symptoms (methanol)

**Treatment:**
- Fomepizole: Alcohol dehydrogenase inhibitor
- Ethanol: Competes with toxic alcohols (historical)
- Hemodialysis: Removes both parent alcohol and metabolites
- Thiamine, pyridoxine (ethylene glycol)
- Folate (methanol)

**Carbon Monoxide:**

**Pathophysiology:**
- Binds hemoglobin with 240x affinity of O2
- Shifts O2 dissociation curve left
- Cellular hypoxia
- Reperfusion injury

**Half-life:**
- Room air: 4-6 hours
- 100% O2: 60-90 minutes
- Hyperbaric O2: 20-30 minutes

**Indications for HBO:**
- Pregnancy
- Cardiovascular ischemia
- Loss of consciousness
- CO level >25-40%
- Neurologic symptoms

**Long-Term Sequelae:**
- Cognitive deficits
- Parkinsonism
- Delayed neurologic syndrome

**Cyanide:**

**Sources:**
- Smoke inhalation
- Industrial chemicals
- Amygdalin (apricot pits)
- Nitroprusside (high doses)

**Pathophysiology:**
- Binds cytochrome oxidase
- Prevents cellular respiration
- Histotoxic hypoxia

**Clinical Features:**
- "Bitter almond" smell (not everyone smells it)
- Cherry-red skin (early)
- Rapid cardiovascular collapse
- Severe metabolic acidosis

**Treatment:**
- 100% oxygen
- Hydroxocobalamin: Cyanide antidote (causes red urine)
- Amyl nitrite, sodium nitrite (methemoglobinemia)
- Sodium thiosulfate

**Heavy Metal Poisoning:**

**Lead:**
- Encephalopathy in children
- Abdominal pain, anemia, neuropathy
- Chelation: EDTA, dimercaprol (BAL), DMSA

**Mercury:**
- Elemental: Neurologic, psychiatric
- Inorganic: GI, renal
- Organic (fish): Neurologic, teratogenic
- Chelation: BAL, DMSA, DMPS

**Arsenic:**
- Garlic odor
- GI symptoms, neuropathy, Mee's lines
- Chelation: BAL, DMSA

**Iron:**
- Deferoxamine: Chelates iron
- "Vin rose" urine

**Digoxin:**

**Mechanism of Toxicity:**
- Inhibits Na/K ATPase
- Increased vagal tone
- Positive inotropy at therapeutic, toxicity at high
- Hyperkalemia from Na/K pump inhibition

**Treatment:**
- Digoxin-specific antibody fragments (Digibind)
- Correct hyperkalemia (cautiously - calcium)
- Atropine for bradycardia
- Cardioversion for unstable arrhythmias
- Temporary pacing if needed

**Tricyclic Antidepressants:**

**Sodium Channel Blockade:**
- QRS widening
- Right axis deviation
- Terminal R wave in aVR

**Treatment:**
- Sodium bicarbonate: 1-2 mEq/kg IV bolus
- Repeat until QRS narrows
- Hyperventilation (respiratory alkalosis)
- Benzodiazepines for seizures
- Avoid Class IA, IC antiarrhythmics`,
      keyTerms: [
        { term: 'osmolar gap', definition: 'Difference between measured and calculated osmolality; indicates toxic alcohol' },
        { term: 'anion gap', definition: 'Difference between measured and calculated major cations/anions' },
        { term: 'enterohepatic circulation', definition: 'Biliary excretion then intestinal reabsorption; targeted by MDAC' },
        { term: 'Hunter criteria', definition: 'Diagnostic criteria for serotonin syndrome' },
        { term: 'fomepizole', definition: 'Alcohol dehydrogenase inhibitor; treats toxic alcohol poisoning' },
        { term: 'hydroxocobalamin', definition: 'Cyanide antidote; forms cyanocobalamin (vitamin B12)' },
        { term: 'vin rose urine', definition: 'Vin-rose colored urine from deferoxamine-iron complex' },
        { term: 'terminal R wave in aVR', definition: 'ECG sign of TCA cardiotoxicity' },
      ],
      clinicalNotes: 'The "absence of toxidrome" is a toxidrome. Consider toxic alcohols, iron, lithium when presentation is nonspecific.',
    },
    5: {
      level: 5,
      summary: 'Contemporary toxicology practice integrates advanced pharmacologic understanding, evidence-based decontamination protocols, novel antidote therapies, and enhanced elimination techniques to optimize outcomes across the spectrum of poisoning and withdrawal syndromes.',
      explanation: `## Evidence-Based Toxicology Updates

**Decontamination Controversies:**

**Gastric Lavage:**
- Evidence shows limited benefit
- Consider only for:
  - Life-threatening ingestion within 1 hour
  - Airway protected
- Not routine for most ingestions

**Activated Charcoal:**
- Effective within 1-2 hours for most ingestions
- Extended window for drugs with delayed absorption (enteric-coated, salicylates)
- MDAC evidence strong for: Theophylline, phenobarbital, carbamazepine, quinine
- Dose: 50-100 g initially, then 12.5-25 g q2-4h

**Ipecac:**
- No longer recommended for routine use
- Potential for aspiration, delayed care
- Consider only for remote ingestions of highly toxic substances

## Specific Antidote Updates

**Naloxone for Opioid Overdose:**
- Intranasal administration increasingly used
- Higher doses needed for fentanyl analogs (carfentanil)
- Take-home naloxone programs reduce overdose deaths
- Community layperson administration effective

**Flumazenil Use:**
- Risk of seizures (especially in mixed overdose)
- Contraindicated in TCA overdose
- Consider only in:
  - Isolated benzodiazepine overdose
  - Iatrogenic sedation reversal
  - With specialist consultation

**Acetaminophen Treatment Updates:**
- Oral vs IV NAC: Both effective
- Nomogram only for acute single ingestions
- Treat chronic supratherapeutic based on risk
- Transplant outcomes improving with NAC

**Methylene Blue for Methemoglobinemia:**
- Dose: 1-2 mg/kg over 5 minutes
- Converts methemoglobin to hemoglobin
- Contraindicated in G6PD deficiency (can cause hemolysis)
- May cause hemolysis in high doses

**Fomepizole vs Ethanol:**
- Fomepizole preferred (easier dosing, fewer side effects)
- Ethanol remains alternative if fomepizole unavailable
- Both effective for ethylene glycol and methanol

**Physostigmine:**
- Anticholinesterase
- Crosses blood-brain barrier
- Reverses both central and peripheral anticholinergic toxicity
- Risk of seizures, bradycardia, asystole
- Specialist consultation essential

## Withdrawal Management

**Alcohol Withdrawal:**
- CIWA-Ar score guides benzodiazepine dosing
- Symptom-triggered vs fixed-schedule dosing
- Phenobarbital as alternative to benzodiazepines
- Dexmedetomidine for refractory cases

**Benzodiazepine Withdrawal:**
- Long-acting substitution (chlordiazepoxide, diazepam)
- Taper over weeks to months
- Dose reduction: 10-25% per week
- Monitor for withdrawal symptoms

**Opioid Withdrawal:**
- Not life-threatening but severe discomfort
- Buprenorphine: Partial agonist, reduces withdrawal
- Methadone: Full agonist, maintenance treatment
- Clonidine, lofexidine: Alpha-2 agonists for autonomic symptoms
- Adjunctive: NSAIDs, antidiarrheals, antiemetics

**Opioid Use Disorder:**
- Medication-assisted treatment (MAT) standard of care
- Buprenorphine/naloxone (Suboxone)
- Methadone maintenance
- Naltrexone for relapse prevention

## Novel Psychoactive Substances

**Synthetic Cannabinoids:**
- "Spice," "K2"
- Full agonists at CB1 receptors
- More severe toxicity than cannabis
- Seizures, agitation, psychosis, hyperemesis syndrome
- Treatment: Supportive, benzodiazepines

**Synthetic Cathinones:**
- "Bath salts," "flakka"
- Sympathomimetic toxicity
- Severe agitation, paranoia, hallucinations
- Excited delirium, hyperthermia
- Treatment: Benzodiazepines, cooling

**Designer Opioids:**
- Fentanyl analogs: Carfentanil, alfentanil, sufentanil
- Isotonitazene, U-series
- Extremely potent, resistant to naloxone
- Multiple naloxone doses often needed

**Novel Benzodiazepines:**
- Etizolam, flualprazolam, deschloroetizolam
- Not detected by standard drug screens
- Similar toxicity to prescription benzodiazepines

## Toxicology in Special Populations

**Pediatric:**
- Accidental exploratory ingestions common
- Single-agent ingestions more common
- Different toxic doses (mg/kg based)
- Developmental considerations (hepatic enzymes)
- Social services referral for neglect

**Geriatric:**
- Therapeutic misadventures common
- Polypharmacy interactions
- Altered pharmacokinetics
- Atypical presentations
- Comorbidities complicate management

**Pregnancy:**
- Fetal toxicity considerations
- Hyperemesis gravidarum mimics toxicity
- Certain antidotes safe (NAC), others contraindicated
- Teratogenicity concerns
- Mother and fetus both considered

**Critical Illness:**
- ICU admission criteria
- Mechanical ventilation considerations
- Renal replacement therapy timing
- ECMO for refractory respiratory failure
- Multidisciplinary approach essential

## Emerging Therapies

**Intralipid Emulsion Therapy:**
- Lipid sink for lipophilic drugs
- Indications: Local anesthetic toxicity (LAST)
- Also used for: Bupivacaine overdose, certain pesticide poisonings
- Dose: 1.5 mL/kg bolus, then 0.25 mL/kg/min infusion

**Cyanide Antidotes:**
- Hydroxocobalamin: Preferred (fewer side effects)
- Sulfanegen: Oral investigational agent
- Cobinamide: Longer-acting than hydroxocobalamin

**Methamphetamine Toxicity:**
- No specific antidote
- Treatment: Benzodiazepines, cooling
- Investigational: SSRIs, glutamate antagonists

**Research Areas:**
- Monoclonal antibodies for drug toxicity
- Gene therapy for enzyme deficiencies
- Novel chelators for heavy metals
- Predictive toxicology (pharmacogenomics)

## Quality and Safety

**Poison Center Utilization:**
- Reduces ED visits
- Cost-effective
- Home treatment for appropriate cases
- 24/7 availability

**Overdose Prevention:**
- Prescription drug monitoring programs
- Safe prescribing practices
- Take-back programs
- Harm reduction services
- Needle exchange programs

**Education:**
- Public education campaigns
- Healthcare provider training
- School-based programs
- Workplace safety programs

## Systems of Care

**Toxicology Consultation:**
- Medical toxicologists available
- Regional poison centers
- Telemedicine support
- Bedside consultation

**Laboratory Support:**
- Rapid toxicology screening
- Quantitative drug levels
- Pharmacogenetic testing
- Point-of-care testing

**Enhanced Surveillance:**
- Syndromic surveillance for outbreaks
- Public health notifications
- Drug trend monitoring
- Early warning systems

## Future Directions

**Biomarkers:**
- Novel biomarkers for early detection
- Pharmacogenomic testing
- Metabolite identification
- Point-of-care diagnostics

**Personalized Medicine:**
- Genetic variations in metabolism
- Individualized antidote dosing
- Risk stratification tools
- Precision toxicology

**Antidote Development:**
- Novel antidotes for emerging drugs
- Universal antidotes
- Long-acting formulations
- Rapid-onset agents

**Technology:**
- Mobile apps for drug identification
- Tele-toxicology
- Wearable monitoring devices
- Artificial intelligence for diagnosis

**Global Health:**
- Pesticide regulations
- Industrial chemical safety
- Environmental toxicology
- International collaboration`,
      keyTerms: [
        { term: 'LAST', definition: 'Local Anesthetic Systemic Toxicity; treated with lipid emulsion' },
        { term: 'MAT', definition: 'Medication-Assisted Treatment; buprenorphine or methadone for OUD' },
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol; scoring system' },
        { term: 'carfentanil', definition: 'Ultra-potent synthetic opioid; used as elephant tranquilizer' },
        { term: 'excited delirium', definition: 'Agitated, violent state from stimulant toxicity; dangerous' },
        { term: 'tele-toxicology', definition: 'Remote toxicology consultation via telecommunications' },
      ],
      clinicalNotes: `Key Clinical Pearls for Toxicologic Emergencies:

1. **ABCs first:** Toxicology doesn't change need to stabilize patient
2. **Check glucose:** Hypoglycemia mimics all toxidromes
3. **Consider combined overdoses:** Patients often take multiple substances
4. **Don't rely on tox screens:** Clinical diagnosis more important
5. **Treat the patient, not the level:** Levels lag behind clinical picture
6. **Reversal agents have risks:** Flumazenil can cause seizures
7. **Withdrawal can be fatal:** Alcohol and benzo withdrawal more deadly than overdose
8. **Consult toxicology early:** Poison control (1-800-222-1222)
9. **Decontaminate if appropriate:** But don't delay treatment
10. **Think of antidotes:** But supportive care is usually sufficient`,
    },
  },

  media: [
    {
      id: 'toxidrome-comparison-table',
      type: 'diagram',
      filename: 'toxidrome-comparison-table.svg',
      title: 'Toxidrome Comparison Table',
      description: 'Comparison of major toxidromes with key findings',
    },
    {
      id: 'antidote-reference-table',
      type: 'diagram',
      filename: 'antidote-quick-reference.svg',
      title: 'Antidote Quick Reference',
      description: 'Common antidotes for specific poisons',
    },
    {
      id: 'rumack-matthew-nomogram',
      type: 'diagram',
      filename: 'rumack-matthew-nomogram.svg',
      title: 'Rumack-Matthew Nomogram',
      description: 'Acetaminophen toxicity treatment nomogram',
    },
  ],

  citations: [
    {
      id: 'position-statement-decon',
      type: 'article',
      title: 'Position Statement: Single-Dose Activated Charcoal',
      authors: ['American Academy of Clinical Toxicology', 'European Association of Poisons Centres'],
      source: 'Journal of Toxicology',
    },
    {
      id: 'aact-guidelines',
      type: 'article',
      title: 'AACT Guidelines for the Management of Poisoning',
      authors: ['American Academy of Clinical Toxicology'],
      source: 'Journal of Medical Toxicology',
    },
    {
      id: 'goldfrank-toxicologic',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies',
      source: 'McGraw Hill',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'emergency-cardiac', targetType: 'topic', relationship: 'related', label: 'Cardiac Emergencies (Opioids)' },
    { targetId: 'emergency-neurologic', targetType: 'topic', relationship: 'related', label: 'Neurologic Emergencies (Withdrawal, Seizures)' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'toxicology', 'addiction medicine'],
    keywords: ['overdose', 'poisoning', 'antidote', 'naloxone', 'toxidrome', 'withdrawal', 'activated charcoal'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'medicine', 'toxicology'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default toxicologicEmergenciesContent;
