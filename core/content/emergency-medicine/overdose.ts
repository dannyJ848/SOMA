/**
 * Drug Overdose - Assessment and Emergency Management
 *
 * Comprehensive content on drug overdose including naloxone for opioids,
 * activated charcoal, decontamination, and supportive care principles.
 */

import { EducationalContent } from '../types';

export const overdose: EducationalContent = {
  id: 'emergency-overdose',
  type: 'condition',
  name: 'Drug Overdose',
  alternateNames: ['Toxic Ingestion', 'Poisoning', 'OD', 'Drug Toxicity', 'Acute Poisoning'],

  levels: {
    1: {
      level: 1,
      summary: 'Drug overdose happens when someone takes too much medicine or drugs. It can be very dangerous and even deadly, but fast action with the right treatments can save lives.',
      explanation: `## What Is Drug Overdose?

Drug overdose occurs when someone takes more medicine or drugs than their body can handle. This can happen by accident or on purpose.

**Too much of anything can be dangerous - even medicines that are normally safe!**

## Common Causes of Overdose

### Accidental Overdose

**Medication mistakes:**
- Taking too much medicine by mistake
- Mixing medicines that shouldn't be combined
- Child getting into medicine cabinet
- Elderly person forgetting they already took their medicine
- Mistaking one medicine for another

### Intentional Overdose

**Taking too much on purpose:**
- Suicide attempt
- Trying to get "high"
- Not realizing how dangerous something is

## Common Overdoses

### 1. Painkillers (Opioids)

**Examples:** Oxycodone, hydrocodone, morphine, heroin, fentanyl

**Signs of overdose:**
- Very small pupils (pinpoint)
- Breathing very slowly or not at all
- Not waking up even when shaken
- Blue or gray skin, lips, fingernails
- Gurgling sounds (choking on own spit)

**Treatment:** Naloxone (Narcan) - a medicine that can reverse opioid overdose

### 2. Alcohol

**Signs of overdose:**
- Confusion or passing out
- Vomiting while asleep (choking risk!)
- Slow or irregular breathing
- Cold, clammy skin
- Seizures

### 3. Sleeping Pills and Anxiety Medicine

**Examples:** Ambien, Xanax, Valium

**Signs of overdose:**
- Extreme sleepiness
- Confusion
- Slurred speech
- Trouble walking
- Slow breathing

### 4. Acetaminophen (Tylenol)

**Signs of overdose:**
- Nausea, vomiting
- Stomach pain
- No symptoms at first, then liver damage

**This can cause liver failure and death!**

### 5. Antidepressants

**Examples:** Prozac, Zoloft, Elavil

**Signs of overdose:**
- Drowsiness
- Fast heartbeat
- Seizures
- Confusion

### 6. Street Drugs

**Cocaine, methamphetamine, heroin, bath salts:**
- Can cause heart attack, stroke, seizures
- Can be deadly
- Variable symptoms depending on drug

## What To Do in an Emergency

**If you suspect someone has overdosed:**

1. **Call 911 immediately!**
   - Tell the operator what drugs were taken (if known)
   - Stay on the phone until help arrives

2. **Check if they're breathing**
   - Look for chest movement
   - Listen for breathing sounds
   - Feel for breath from their mouth or nose

3. **Start CPR if not breathing**
   - Push hard and fast in the center of the chest
   - Continue until help arrives

4. **Gather information**
   - What did they take?
   - How much?
   - When?
   - Are there empty pill bottles nearby?
   - Any medical problems?
   - Take all medicine bottles with you to the hospital

5. **Help them stay safe**
   - If they're lying on their back, turn them on their side
   - This prevents choking if they vomit
   - Don't give them anything to eat or drink
   - Don't make them vomit (unless told by poison control)

## Treatments You Might Hear About

**Naloxone (Narcan):**
- Reverses opioid overdose
- Can be given as a shot or nasal spray
- Works very fast (within minutes)
- Sometimes more than one dose is needed

**Activated Charcoal:**
- Black liquid that binds drugs in the stomach
- Prevents drugs from being absorbed
- Only works if given soon after overdose (usually within 1 hour)

**Antidotes:**
- Specific medicines that counteract certain poisons
- Only work for specific drugs (not all)

**Supportive Care:**
- Oxygen for breathing problems
- IV fluids for dehydration
- Medicines to control blood pressure and heart rate
- Treating symptoms while the body clears the drug

## Poison Control

**Poison Control Hotline: 1-800-222-1222**

**Call if:**
- Someone took too much medicine
- You're not sure if something is poisonous
- Someone swallowed something they shouldn't have
- You have questions about medicines and safety

**What they need to know:**
- Age and weight of person
- What they took (bring bottle if possible)
- How much they took
- When they took it
- Any symptoms they're having
- Your phone number so they can call back

## Prevention

**Keep medicines safe:**
- Store medicines up high and locked away
- Use child-proof caps
- Keep medicines in original containers
- Never call medicine "candy"
- Throw away old medicines properly

**Take medicines safely:**
- Follow directions exactly
- Use the measuring device that comes with the medicine
- Never take someone else's prescription
- Tell your doctor about all medicines you take
- Don't mix alcohol with medicines unless your doctor says it's okay

**Help for addiction:**
- If you or someone you know struggles with drug use
- Addiction is a medical condition
- Treatment is available and works
- Call for help - many hotlines available

## Remember

**Quick action saves lives!**

If you think someone has overdosed:
- Call 911 immediately
- Check breathing
- Give naloxone if available for opioids
- Stay with them until help arrives
- Don't worry about getting in trouble - saving a life is more important!

**Many communities have Good Samaritan laws** that protect people who call for help during an overdose.`,
      keyTerms: [
        { term: 'overdose', definition: 'Taking too much of a drug or medicine; can be accidental or intentional' },
        { term: 'naloxone', definition: 'Medicine that reverses opioid overdose; restores breathing in people who have taken too many opioids' },
        { term: 'opioids', definition: 'Strong pain medicines like morphine, oxycodone, heroin, fentanyl that can slow or stop breathing' },
        { term: 'activated charcoal', definition: 'Black powder that binds to drugs and poison in the stomach to prevent absorption into the body' },
        { term: 'pinpoint pupils', definition: 'Very small pupils that look like a point; sign of opioid overdose' },
        { term: 'poison control', definition: 'Hotline (1-800-222-1222 in US) for help with poisoning and overdose questions' },
      ],
      analogies: [
        'Naloxone is like a spare key - it unlocks the receptors that opioids have taken over, letting the body work again.',
        'Activated charcoal is like a sponge in the stomach - it soaks up the poison before the body can absorb it.',
        'Opioid overdose is like putting the brain to sleep - naloxone wakes it back up.',
      ],
      examples: [
        'A teenager is found unconscious after taking opioid pills at a party. His friends have naloxone and give it to him. He wakes up and starts breathing normally. EMS arrives and takes him to the hospital.',
        'A toddler gets into grandmother\'s purse and takes some blood pressure medicine. Mom calls Poison Control right away. They tell her to go to the ER. The child is monitored and recovers fully.',
        'A man drinks too much alcohol and passes out. His friends lay him on his side and call 911. Paramedics monitor him until he wakes up.',
      ],
      patientCounselingPoints: [
        'Keep the Poison Control number saved in your phone: 1-800-222-1222',
        'If you or someone you know uses opioids, carry naloxone and learn how to use it',
        'Never share your prescription medicines with anyone',
        'Store medicines safely - up high, locked away, out of reach of children',
      ],
    },

    2: {
      level: 2,
      summary: 'Drug overdose requires rapid recognition, assessment of ABCs, decontamination, and specific antidotes. Naloxone for opioids and activated charcoal are key emergency interventions.',
      explanation: `## Drug Overdose Assessment

**Initial approach:**

**ABCDE assessment:**
- **A**irway: Is the airway open?
- **B**reathing: Is the patient breathing adequately?
- **C**irculation: Is the heart pumping? What's the blood pressure?
- **D**isability: What is the level of consciousness?
- **E**xposure: Remove contaminated clothing, identify ingested substances

**History taking:**
- What substance was taken?
- How much was taken?
- When was it taken?
- Was it taken with alcohol or other drugs?
- Was it intentional (suicide risk)?
- Any medical problems or medications?
- Any treatments already given?

## Opioid Overdose

**Signs and symptoms:**
- **Triad:** Coma, respiratory depression, miosis (pinpoint pupils)
- Decreased respiratory rate (<12/min)
- Shallow breathing
- Cyanosis (blue skin)
- Hypotension (in severe cases)
- Bradycardia (slow heart rate)
- Hypothermia (low body temperature)

**Risk factors:**
- Taking higher doses than prescribed
- Mixing opioids with alcohol or benzodiazepines
- Using opioids obtained from street sources
- Recent release from prison or rehab (lowered tolerance)
- History of previous overdose

**Naloxone (Narcan):**
- **Mechanism:** Opioid receptor antagonist
- **Administration:**
  - IM injection: 0.4 mg (may repeat every 2-3 minutes)
  - Intranasal: 2 mg (one spray in each nostril)
  - IV: 0.04-0.1 mg (smaller doses to avoid acute withdrawal)
- **Onset:** 1-2 minutes IV, 3-5 minutes IM/nasal
- **Duration:** 30-90 minutes (shorter than many opioids)
- May require repeated dosing

**Monitoring after naloxone:**
- Observe for 2-4 hours after last dose
- Resedation can occur when naloxone wears off
- Acute withdrawal syndrome if large dose given

## Alcohol Overdose

**Signs and symptoms:**
- Slurred speech
- Ataxia (uncoordinated movement)
- Confusion
- Stupor or coma
- Hypothermia
- Hypoglycemia (low blood sugar)
- Vomiting and aspiration risk
- Respiratory depression

**Complications:**
- Aspiration pneumonia
- Seizures
- Arrhythmias (holiday heart syndrome)
- Hypoglycemia (especially in children)
- Hypothermia

**Treatment:**
- **Airway protection:** Intubation if comatose
- **Thiamine:** 100 mg IV before glucose!
- **Glucose:** Check and treat hypoglycemia
- **IV fluids:** For dehydration
- **Warming:** For hypothermia
- **Observation:** Until alcohol level decreases

## Sedative-Hypnotic Overdose

**Benzodiazepines (Xanax, Valium, Ativan, Klonopin):**

**Signs and symptoms:**
- CNS depression: Confusion, ataxia, slurred speech
- Respiratory depression (especially when combined with alcohol or opioids)
- Hypotension
- Coma

**Treatment:**
- **Supportive care:** Airway, breathing, circulation
- **Flumazenil:** Benzodiazepine antagonist
  - Dose: 0.2 mg IV over 30 seconds
  - May repeat to 3 mg total
  - **Caution:** Can cause seizures in chronic users or those with seizure disorder
  - **Contraindicated:** Tricyclic antidepressant overdose, seizure disorder

**Barbiturates, z-drugs (Ambien, Lunesta):**
- Similar presentation to benzos
- No specific antidote
- Supportive care only

## Acetaminophen (Tylenol) Overdose

**Why it's dangerous:**
- Safe at normal doses
- Overwhelming doses overwhelm liver's ability to metabolize
- Metabolite (NAPQI) causes liver damage

**Four phases:**

| Phase | Time | Symptoms |
|-------|------|----------|
| I | 0-24 hours | Nausea, vomiting, abdominal pain |
| II | 24-72 hours | Usually feeling better (false!) |
| III | 72-96 hours | Liver failure, jaundice, bleeding |
| IV | 4 days - 2 weeks | Recovery or death |

**Treatment:**
- **Activated charcoal:** If within 1-2 hours of ingestion
- **N-acetylcysteine (NAC, Mucomyst):**
  - Antidote for acetaminophen poisoning
  - Helps liver regenerate glutathione
  - Most effective when given within 8-10 hours
  - Given as oral or IV regimen over 20-72 hours

**Rumack-Matthew nomogram:**
- Determines need for NAC based on acetaminophen level and time since ingestion

## Activated Charcoal

**How it works:**
- Adsorbs (binds to) many drugs and toxins in the stomach/intestines
- Prevents absorption into bloodstream
- Like a sponge for poison

**When it's used:**
- Within 1 hour of ingestion (most effective)
- Can be considered up to 2-4 hours for some drugs
- Single-dose vs multiple-dose regimens

**Administration:**
- Usually given as a slurry (mixed with water)
- Dose: 1-2 g/kg (typically 50-100 g)
- Can be given by NG tube

**Contraindications:**
- Unprotected airway (aspiration risk)
- Corrosive ingestion (charcoal obscures endoscopy)
- Hydrocarbons (aspiration risk, charcoal doesn't bind well)

**Side effects:**
- Black stools
- Constipation
- Vomiting
- Aspiration if airway not protected

## General Overdose Management

**Stabilization:**
1. **Airway:** Position, oral airway, intubation if needed
2. **Breathing:** Oxygen, ventilation support
3. **Circulation:** IV access, fluids, vasopressors if needed
4. **Disability:** Check blood glucose, thiamine if alcoholism suspected
5. **Exposure:** Remove contaminated clothing, wash skin

**Decontamination:**
- **Activated charcoal:** Within 1-2 hours for most ingestions
- **Gastric lavage:** Rarely used, only if:
  - Life-threatening ingestion
  - Within 1 hour of ingestion
  - Charcoal contraindicated
- **Whole bowel irrigation:** For substances not bound by charcoal (iron, lithium, sustained-release products)
- **Dilution:** Milk or water for corrosives (small amounts)

**Enhanced elimination:**
- **Urinary alkalinization:** For salicylates, tricyclics
- **Hemodialysis:** For lithium, salicylates, methanol, ethylene glycol
- **Multiple-dose activated charcoal:** For certain drugs that undergo enterohepatic recirculation

## Suicide Risk Assessment

**All intentional overdoses require:**
- Suicide risk assessment
- Psychiatric evaluation
- Safety planning before discharge
- Possible admission for mental health treatment

**Warning signs:**
- Previous suicide attempts
- Detailed, planned suicide
- Giving away possessions
- Saying goodbye
- Sudden calm after depression

## Prevention

**For patients:**
- Take medications exactly as prescribed
- Never share prescription medications
- Lock up medications if children are in the home
- Properly dispose of unused medications
- Don't mix medications without checking with doctor/pharmacist
- Keep Poison Control number available: 1-800-222-1222

**For communities:**
- Naloxone distribution programs
- Good Samaritan laws
- Drug take-back programs
- Education on risks of mixing substances`,
      keyTerms: [
        { term: 'naloxone', definition: 'Opioid antagonist that reverses opioid overdose by displacing opioids from receptors' },
        { term: 'flumazenil', definition: 'Benzodiazepine antagonist; can reverse benzo overdose but can cause seizures in some patients' },
        { term: 'N-acetylcysteine', definition: 'Antidote for acetaminophen poisoning; helps liver regenerate glutathione to prevent damage' },
        { term: 'activated charcoal', definition: 'Adsorbent material given orally to bind drugs/toxins in GI tract and prevent absorption' },
        { term: 'gastric lavage', definition: 'Stomach pumping to remove ingested substances; rarely used now, only for life-threatening ingestions' },
        { term: 'enterohepatic recirculation', definition: 'Drug cycles between liver and intestines, prolonging effect; multiple doses of charcoal can interrupt' },
      ],
      analogies: [
        'Naloxone is like kicking an opioid molecule off its seat and sitting there yourself so the opioid can\'t get back on.',
        'Activated charcoal is like a sponge in the digestive tract - it soaks up the poison so the body can\'t absorb it.',
        'Acetaminophen overdose is like a slow-acting poison - the damage happens hours later when the liver\'s defenses are overwhelmed.',
      ],
      examples: [
        'Heroin overdose: 28-year-old man found unconscious, not breathing, pinpoint pupils. Friend gives naloxone 4 mg intranasal. Man wakes up, breathing improves. EMS arrives and takes him to ED.',
        'Acetaminophen overdose: 16-year-old girl takes 30 extra strength Tylenol after breakup. Mom brings her to ER 2 hours later. Charcoal given. Acetaminophen level is elevated. NAC started.',
        'Benzodiazepine overdose: Patient found unconscious with shallow breathing after mixing Xanax with alcohol. Intubated for airway protection. Flumazenil not given due to alcohol use (seizure risk).',
      ],
      patientCounselingPoints: [
        'If you or someone you know uses opioids, carry naloxone and learn how to use it - it can save a life',
        'Mixing opioids with alcohol or benzodiazepines dramatically increases overdose risk',
        'Never take more acetaminophen than directed - liver damage can be permanent',
        'Store all medications safely and dispose of unused medicines properly',
      ],
    },

    3: {
      level: 3,
      summary: 'Drug overdose management requires rapid stabilization, specific antidotes, decontamination, and enhanced elimination. Understanding toxidromes and antidotes is essential.',
      explanation: `## Initial Assessment and Stabilization

**Primary survey (ABCDE):**
- **Airway:** Assess patency, protect if compromised
- **Breathing:** Oxygen saturation, respiratory rate, capnography
- **Circulation:** Blood pressure, heart rate, cardiac monitoring
- **Disability:** Glucose, GCS, pupils (size, equality, reactivity)
- **Exposure:** Temperature, evidence of injection, track marks, odors

**Universal antidote (DON'T exist):**
- No single antidote works for all poisonings
- Supportive care is mainstay
- Specific antidotes for specific substances

## Toxidromes

**Patterns of symptoms that help identify class of drug:**

**Opioid toxidrome:**
- CNS depression
- Respiratory depression
- Miosis (pinpoint pupils)
- Hypoactive bowel sounds

**Sympathomimetic toxidrome:**
- Cocaine, amphetamines, bath salts, Ecstasy
- CNS agitation, psychosis
- Tachycardia, hypertension
- Hyperthermia
- Mydriasis (dilated pupils)
- Diaphoresis

**Anticholinergic toxidrome:**
- Antihistamines, TCAs, antipsychotics, plants (Jimson weed)
- "Mad as a hatter, hot as a hare, dry as a bone, red as a beet, blind as a bat"
- Agitation, mydriasis, dry flushed skin, urinary retention, absent bowel sounds

**Cholinergic toxidrome:**
- Organophosphates, nerve agents, some mushrooms
- SLUDGE: Salivation, Lacrimation, Urination, Defecation, Gastrointestinal distress, Emesis
- Muscle weakness, miosis, bronchorrhea, bradycardia

**Sedative-hypnotic toxidrome:**
- Benzodiazepines, barbiturates, alcohol
- CNS depression
- Respiratory depression
- Ataxia, slurred speech
- Hypothermia

**Serotonin syndrome:**
- SSRIs, MAOIs, meperidine, tramadol, triptans
- Triad: Mental status changes, autonomic instability, neuromuscular abnormalities
- Clonus (inducible, spontaneous, ocular), hyperreflexia
- Tremor, hyperreflexia, agitation

**Neuroleptic malignant syndrome:**
- Antipsychotics, withdrawal of dopaminergic agents
- Similar to serotonin syndrome but:
  - "Lead pipe" rigidity (vs clonus)
  - Gradual onset (days vs hours)
  - Bromocriptine/dantrolene may help

## Specific Antidotes

| Poison | Antidote | Dose | Notes |
|--------|----------|------|-------|
| Opioids | Naloxone | 0.4-2 mg IM/IV/nasal | May repeat; shorter duration than many opioids |
| Benzodiazepines | Flumazenil | 0.2 mg IV | Can cause seizures in chronic users |
| Acetaminophen | NAC | 140 mg/kg loading, then 70 mg/kg q4h x 17 doses | Most effective early (within 8-10 hours) |
| Alcohol | None (supportive) | N/A | Thiamine 100 mg IV before glucose |
| CO/cyanide | Hyperbaric O2/CO | 100% O2 | Cyanide: Hydroxocobalamin, amyl nitrite |
| Methanol/ethylene glycol | Fomepizole | 15 mg/kg IV q12h | Blocks alcohol dehydrogenase |
| Iron | Deferoxamine | 15 mg/kg/hour IV | Chelates iron for elimination |
| Digoxin | Digoxin antibodies | 40-80 mg IV | Specific antibody fragments |
| Warfarin | Vitamin K1 | 5-10 mg IV/PO | Reverses anticoagulation |
| Beta-blockers | Glucagon | 5-10 mg IV | Beta agonist |
| Calcium channel blockers | Calcium chloride | 1 g IV | Increases calcium |
| MAOI inhibitors | Methylene blue | 1-2 mg/kg IV | For methemoglobinemia |
| Heavy metals | Chelators | Varies | BAL, DMPS, EDTA, DMSA |

## Activated Charcoal Decision-Making

**Indications:**
- Potentially toxic ingestion within 1 hour
- Life-threatening ingestion within 2-4 hours
- Drugs with significant enterohepatic recirculation

**Contraindications:**
- Unprotected airway
- Corrosives (acids, alkalis)
- Hydrocarbons (aspiration risk)
- Button batteries (if past esophagus)

**Administration:**
- Dose: 1-2 g/kg (typical adult: 50-100 g)
- Mix with water to slurry
- Give via NG tube if unable to swallow
- Consider cathartic (sorbitol) with first dose

**Multiple-dose activated charcoal:**
- Indications: Phenobarbital, salicylates, theophylline, carbamazepine, quinidine
- Regimen: 12.5-25 g every 2-4 hours
- Complications: Constipation, bowel obstruction, charcoal bezoar

## Decontamination Beyond Charcoal

**Gastric lavage:**
- **Indications:** Life-threatening ingestion within 1 hour
- **Procedure:** Place large-bore NG tube, irrigate until clear
- **Complications:** Aspiration, esophageal injury, perforation
- **Rarely performed now** - benefits rarely outweigh risks

**Whole bowel irrigation (WBI):**
- **Indications:**
  - Iron ingestion
  - Lithium ingestion
  - Sustained-release products
  - Body packers/stuffers
  - Lead fragments
- **Procedure:** Polyethylene glycol solution via NG at 1-2 L/hour
- **Endpoint:** Clear rectal effluent
- **Contraindications:** Bowel obstruction, perforation, hemodynamic instability, ileus

**Dermal decontamination:**
- Remove contaminated clothing
- Wash skin with soap and water
- For hydrofluoric acid: Calcium gluconate gel
- For chemical burns: Copious irrigation

**Ocular decontamination:**
- Irrigate with water or saline for 15-30 minutes
- Check pH after irrigation
- Don't neutralize acid with base (exothermic reaction)

## Enhanced Elimination

**Urinary alkalinization:**
- **Indications:** Salicylate overdose, phenobarbital overdose
- **Mechanism:** Ionizes drug, enhances renal excretion
- **Method:** NaHCO3 infusion to target urine pH 7.5-8.0
- **Target:** Urine pH >7.5 (check with urine pH dipstick)
- **Complications:** Hypokalemia, volume overload, alkalemia

**Hemodialysis:**
- **Indications:**
  - Lithium: Strong indication
  - Salicylates: With severe symptoms or renal failure
  - Methanol: When significant metabolic acidosis or visual symptoms
  - Ethylene glycol: When significant metabolic acidosis or renal failure
  - Valproic acid: With high levels or ammonia elevation
  - Theophylline: With life-threatening toxicity
- **Other indications:** Barbiturates, carbamazepine, phenobarbital

**Multiple-dose activated charcoal:**
- Drugs with enterohepatic recirculation
- Large volume of distribution but high protein binding in gut
- Phenobarbital, carbamazepine, theophylline, salicylates, quinine

## Specific Overdose Scenarios

**Opioid overdose:**
- **Supportive:** Airway, breathing
- **Naloxone:** 0.04-0.1 mg IV increments (start small)
- **Large doses:** May cause acute withdrawal syndrome
- **Observation:** 4-6 hours after last naloxone dose

**Acetaminophen overdose:**
- **Rumack-Matthew nomogram:** Determines need for NAC
- **NAC regimen:**
  - Loading: 150 mg/kg IV over 1 hour
  - Maintenance: 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours
- **Late presentation:** NAC still beneficial up to 24-48 hours

**Benzodiazepine overdose:**
- **Supportive care** is primary treatment
- **Flumazenil:** Use with caution
  - Dose: 0.2 mg IV over 30 seconds
  - May repeat to 3 mg total
  - Avoid if: TCA co-ingestion, seizure disorder, chronic benzo use

**Tricyclic antidepressant overdose:**
- **Sodium channel blockade:** QRS widening
- **Potassium channel blockade:** QT prolongation
- **Alpha blockade:** Hypotension
- **Anticholinergic:** Dry mucosa, urinary retention, ileus
- **Treatment:**
  - Sodium bicarbonate for QRS >100 ms
  - NAC for cardiotoxicity
  - Supportive care

**Salicylate (aspirin) overdose:**
- **Uncoupling of oxidative phosphorylation:** Hyperthermia
- **Direct stimulation:** Tachypnea, tachycardia
- **Metabolic acidosis:** Respiratory alkalosis → metabolic acidosis
- **Treatment:**
  - Alkalinization of urine
  - Hemodialysis for severe cases
  - Correct glucose, electrolytes
  - Control fever

**Methanol/ethylene glycol:**
- **Toxic metabolites:** Formic acid (methanol), glycolic/oxalic acid (EG)
- **Metabolic acidosis:** High anion gap
- **Ocular toxicity:** Methanol → blindness
- **Renal toxicity:** EG → oxalate crystals
- **Treatment:**
  - Fomepizole: Blocks alcohol dehydrogenase
  - Hemodialysis: Removes parent compound and metabolites
  - Supportive care

**Iron overdose:**
- **Local GI toxicity:** Corrosive injury, vomiting, diarrhea
- **Systemic toxicity:** Hypotension, coagulopathy, liver failure
- **Deferoxamine:** Chelates iron
- **Whole bowel irrigation:** If tablets still in GI tract

**Digoxin overdose:**
- **Arrhythmias:** PVCs, bradycardia, heart block
- **Hyperkalemia:** K+ shifts out of cells
- **GI symptoms:** Nausea, vomiting, abdominal pain
- **Visual symptoms:** Yellow halos (xanthopsia)
- **Treatment:**
  - Digoxin-specific antibody fragments
  - Correct electrolytes
  - Treat arrhythmias

## Monitoring and Disposition

**Observation period:**
- **Asymptomatic:** 4-6 hours (most drugs)
- **Extended-release:** 12-24 hours
- **Symptomatic:** Until symptoms resolve and lab values normalize

**Laboratory monitoring:**
- Acetaminophen level: 4 hours post-ingestion (and levels)
- Salicylate level: Peak at 6 hours
- Iron level: 4-6 hours (may be falsely normal early)
- Electrolytes, renal/liver function
- Coagulation studies
- Toxicology screen

**Disposition:**
- **Admit:** Significant toxicity, need for antidote, suicidal ideation
- **Discharge:** Asymptomatic >4-6 hours, nontoxic exposure, reliable social support

**Psychiatric evaluation:**
- All intentional overdoses
- Safety assessment before discharge
- Outpatient follow-up if not admitted`,
      keyTerms: [
        { term: 'toxidrome', definition: 'Group of signs and symptoms characteristic of a class of drugs (opioid, anticholinergic, sympathomimetic, etc.)' },
        { term: 'enterohepatic recirculation', definition: 'Drug cycles between liver and intestines; increases duration, can be interrupted with charcoal' },
        { term: 'Rumack-Matthew nomogram', definition: 'Predicts hepatotoxicity after acute acetaminophen overdose based on level and time post-ingestion' },
        { term: 'whole bowel irrigation', definition: 'Administration of polyethylene glycol to flush GI tract; used for toxins not bound by charcoal' },
        { term: 'urinary alkalinization', definition: 'Infusion of sodium bicarbonate to alkalinize urine, enhancing elimination of certain drugs' },
        { term: 'fomepizole', definition: 'Alcohol dehydrogenase inhibitor; antidote for methanol/ethylene glycol poisoning' },
      ],
      analogies: [
        'Toxidromes are like fingerprints - each drug class leaves a recognizable pattern of signs.',
        'Activated charcoal is like a magnet for poison in the gut - it attracts and holds the toxin so the body can\'t absorb it.',
        'Urinary alkalinization is like changing the water chemistry to make drugs more likely to leave the body.',
      ],
      examples: [
        'TCA overdose: 17-year-old girl takes 50 amitriptyline. Found 4 hours later. QRS 120 ms. Sodium bicarbonate given. QRS narrows to 80 ms. Admitted to ICU.',
        'Iron overdose: 3-year-old takes maternal iron tablets. Vomiting, diarrhea. X-ray shows pills. Whole bowel irrigation started. Deferoxamine given.',
        'Ethylene glycol: Man drinks antifreeze. Presents 4 hours later with metabolic acidosis, calcium oxalate crystals in urine. Fomepizole and hemodialysis started.',
      ],
      patientCounselingPoints: [
        'Store all medications and household products out of reach of children',
        'Always call Poison Control (1-800-222-1222) for immediate help with poisoning',
        'Naloxone is available without a prescription in many places - consider carrying if you or someone you know uses opioids',
        'Never induce vomiting unless instructed by Poison Control or medical personnel',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced overdose management includes understanding of toxicokinetics, advanced decontamination techniques, dialysis indications, and management of complex polypharmacy ingestions.',
      explanation: `## Advanced Toxicokinetics

**Absorption considerations:**
- **First-pass metabolism:** Some drugs destroyed on first pass through liver
- **Bioavailability:** Affected by first-pass, formulation, food
- **Delayed absorption:** Sustained-release formulations, enteric-coated drugs, drugs that slow gastric emptying (anticholinergics)

**Distribution:**
- **Volume of distribution (Vd):**
  - Small Vd (<0.6 L/kg): Bound to plasma proteins (warfarin, valproic acid)
  - Large Vd (>1 L/kg): Tissue distribution (TCAs, digoxin, amphetamines)
- **Protein binding:** Only free drug is active/toxic
  - High protein binding: Displaced by other drugs
  - Hypoalbuminemia increases free drug

**Metabolism:**
- **Phase I:** Oxidation, reduction, hydrolysis (CYP450)
- **Phase II:** Conjugation (glucuronidation, sulfation, acetylation)
- **Active metabolites:** Some metabolites are toxic (NAPQI, norpropoxyphene)
- **Genetic variations:** Poor vs rapid metabolizers

**Elimination:**
- **Half-life:** Time to eliminate 50% of drug
- **Clearance:** Volume cleared per unit time
- **Zero-order:** Constant amount eliminated per time (ethanol at high doses)
- **First-order:** Constant percentage eliminated per time (most drugs)

## Advanced Antidotes

**Fomepizole (Antizol):**
- **Mechanism:** Alcohol dehydrogenase inhibitor
- **Advantages over ethanol:**
  - No CNS depression
  - No hypoglycemia
  - Predictable kinetics
  - Easier to administer
- **Dosing:**
  - Loading: 15 mg/kg IV
  - Maintenance: 10 mg/kg q12h x4 doses
  - Dialysis: Give dose after dialysis
- **Indications:** Methanol, ethylene glycol, diethylene glycol poisoning

**Digoxin-immune Fab (Digibind):**
- **Mechanism:** Binds digoxin, promotes renal elimination
- **Dosing:** Based on amount ingested or serum level
  - Vials = (serum digoxin level x weight in kg) / 100
  - Each vial binds 0.5 mg digoxin
- **Indications:**
  - Ingestion >0.1 mg/kg or >10 mg in adult
  - Serum level >2 ng/mL with toxicity
  - Life-threatening arrhythmia
- **Rebound effect:** Can recur as Fab cleared, monitoring needed

**Cyanide antidotes:**
- **Hydroxocobalamin (Cyanokit):**
  - Binds cyanide to form cyanocobalamin (vitamin B12)
  - Dose: 5-10 g IV over 15 min
  - Turns skin, urine red (harmless)
  - Methemoglobinemia possible
- **Sodium thiosulfate:**
  - Donates sulfur for rhodanese to convert cyanide to thiocyanate
  - Dose: 12.5 g IV
- **Amyl nitrite pearls:** (rarely used) induce methemoglobinemia

**Methylene blue:**
- **Indication:** Methemoglobinemia
- **Mechanism:** Reduces methemoglobin to hemoglobin
- **Dose:** 1-2 mg/kg IV over 5 min
- **Note:** Ineffective in G6PD deficiency

**Dexrazoxane:**
- **Indication:** Extravasation of anthracyclines (doxorubicin)
- **Mechanism:** Chelates iron, reduces free radical formation
- **Dose:** 10x the dose of anthracycline extravasated

**Methylene blue for serotonin syndrome:**
- **Off-label use:** May help severe serotonin syndrome
- **Mechanism:** MAOI properties decrease serotonin
- **Dose:** 50-75 mg IV

## Complex Polypharmacy Overdoses

**"Serotonin syndrome" overlap:**
- SSRIs + MAOIs
- SSRIs + TCAs
- SSRIs + meperidine
- SSRIs + tramadol
- SSRIs + linezolid
- Multiple serotonergic drugs

**Neuroleptic malignant syndrome (NMS):**
- Antipsychotics (all types, but typical > atypical)
- Abrupt withdrawal of dopaminergic agents
- "Lead pipe" rigidity distinguishes from serotonin syndrome
- **Treatment:**
  - Discontinue offending drug
  - Supportive care
  - Bromocriptine (dopamine agonist)
  - Dantrolene (muscle relaxant)
  - Benzodiazepines

**Malignant hyperthermia (MH):**
- Triggered by volatile anesthetics, succinylcholine
- Genetic predisposition (RYR1 mutation)
- Hyperthermia, rigidity, hypercarbia, acidosis, rhabdomyolysis
- **Treatment:**
  - Dantrolene 2.5 mg/kg IV
  - Discontinue triggering agents
  - Cool measures
  - Supportive care

**Lithium toxicity:**
- **Acute:** Therapeutic error, suicide attempt
- **Chronic:** Renal insufficiency, drug interactions
- **Symptoms:**
  - Coarse tremor → ataxia → seizures → coma
  - Nausea, vomiting, diarrhea
  - Hypernatremia
- **Treatment:**
  - Hemodialysis (drug of choice)
  - IV fluids
  - Monitor levels, electrolytes
  - No specific antidote

**Valproic acid toxicity:**
- **Effects:**
  - CNS depression, coma
  - Metabolic acidosis
  - Hyperammonemia (inhibits CPS enzyme)
  - Hepatotoxicity
- **Treatment:**
  - Supportive care
  - L-carnitine (100 mg/kg IV loading)
  - Hemodialysis for severe cases
  - Monitor ammonia

## Enhanced Elimination: Indications and Methods

**Hemodialysis:**
- **Indications:**
  - Lithium: Level >4.0 mEq/L or severe symptoms
  - Salicylates: Level >100 mg/dL with severe symptoms
  - Methanol: When significant metabolic acidosis or visual symptoms
  - Ethylene glycol: When significant metabolic acidosis or renal failure
  - Valproic acid: When levels >850 mcg/mL or with severe symptoms
  - Theophylline: Life-threatening toxicity
  - Barbiturates: Coma, respiratory depression, hemodynamic instability
  - Carbamazepine: Coma, seizures, arrhythmias

- **Contraindications:**
  - Severe hypotension
  - Coagulopathy (relative)

**Continuous renal replacement therapy (CRRT):**
- Slower than hemodialysis
- Better hemodynamic tolerance
- Useful in hemodynamically unstable patients

**Molecular Adsorbent Recirculating System (MARS):**
- Albumin dialysis
- Removes protein-bound substances
- Used for liver failure poisoning (Amanita mushrooms)

## Special Decontamination Scenarios

**Body packers:**
- People who swallow drug packets to transport
- Risk: Packet rupture → fatal overdose
- **Management:**
  - CT abdomen to locate packets
  - Whole bowel irrigation
  - Surgical removal if ruptured or obstructing
  - Watch for signs of leakage

**Body stuffers:**
- Hide drugs in body orifices
- Rectum, vagina
- Risk: Local toxicity, packet rupture
- **Management:**
  - Remove packets if visible
  - Decontaminate area
  - Consider whole bowel irrigation

**Transdermal patches:**
- Fentanyl, nicotine, clonidine patches
- Continued absorption if not removed
- **Management:**
  - Remove patch immediately
  - Wash skin with soap and water
  - Consider transdermal absorption
  - Patch may contain residual drug even after removal

**Chemical/Corrosive exposures:**
- Acids and alkalis
- Cause coagulation necrosis
- **Management:**
  - **DO NOT neutralize!** Exothermic reaction makes injury worse
  - Copious irrigation
  - Endoscopy for evaluation
  - Charcoal contraindicated (obscures endoscopic view)
  - Do NOT induce vomiting

## Withdrawal Syndromes

**Alcohol withdrawal:**
- CIWA-Ar score: Symptom-triggered dosing
- Benzodiazepines: Front-loading regimen
- Complications: Withdrawal seizures, delirium tremens, Wernicke encephalopathy
- **Thiamine 100 mg IV before glucose!**

**Benzodiazepine withdrawal:**
- Similar to alcohol but more prolonged
- Seizures common
- Gradual taper with long-acting agent
- May require months for taper

**Opioid withdrawal:**
- Severe flu-like symptoms
- Not life-threatening but extremely uncomfortable
- Medication-assisted treatment: Methadone, buprenorphine
- Clonidine, NSAIDs, antidiarrheals for symptom control

## Special Populations

**Pediatric overdoses:**
- Different Vd: Higher water content, less fat
- Different metabolism: Immature enzymes
- Different toxic doses: Often lower per kg than adults
- Different clinical presentations:
  - Seizures more common
  - Hypoglycemia common
  - Metabolic acidosis different

**Geriatric overdoses:**
- Multiple medications: Polypharmacy increases risk
- Decreased clearance: Prolonged effects
- Comorbidities: Drugs affect underlying diseases
- Atypical presentations: Confusion, falls, weakness

**Pregnancy:**
- Fetal toxicity concerns
- Placental transfer varies by drug
- Some antidotes safe (NAC), others questionable
- Teratogenicity: Consider antidote vs drug effects

## Toxicology Testing

**Screening vs confirmatory testing:**
- **Immunoassay screens:** Rapid, but false positives/negatives
- **Confirmation:** GC/MS, LC-MS/MS (gold standard)
- **Comprehensive drug screen:** Often not helpful in acute management

**When testing is helpful:**
- Unknown ingestion in altered patient
- Unexplained mental status changes
- Medication adherence assessment
- Monitoring for treatment adherence
- Forensic/legal requirements`,
      keyTerms: [
        { term: 'Vd', definition: 'Volume of distribution; theoretical volume a drug would occupy at equal concentration to plasma' },
        { term: 'first-pass metabolism', definition: 'Drug metabolism in liver before reaching systemic circulation; reduces bioavailability' },
        { term: 'methemoglobinemia', definition: 'Hemoglobin with iron in oxidized (Fe3+) state; cannot carry oxygen. Treated with methylene blue.' },
        { term: 'CPS', definition: 'Carbamoyl phosphate synthetase; inhibited by valproic acid, causing hyperammonemia' },
        { term: 'whole bowel irrigation', definition: 'Administration of PEG solution to flush GI tract; used for toxins not bound by charcoal or that form concretions' },
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol; score used to guide benzodiazepine dosing in withdrawal' },
      ],
      analogies: [
        'Volume of distribution is like deciding where water goes in a house - some drugs go mainly to pipes (blood), others soak into the walls (tissues).',
        'Body packers are like drug mules, but with their body as the container - a packet rupture is deadly.',
        'Methemoglobinemia is like having a car full of cars that can\'t carry passengers - the hemoglobin is there but can\'t transport oxygen.',
      ],
      examples: [
        'Body packer: CT shows multiple foreign bodies in GI tract. Admitted for observation. Whole bowel irrigation started. All packets recovered in stool. No rupture.',
        'Valproic acid overdose: Patient found comatose with elevated ammonia. L-carnitine 100 mg/kg IV given. Hemodialysis for level >1000. Recovers.',
        'Lithium toxicity: Patient on lithium for bipolar disorder presents with tremor, confusion. Level 4.2. Hemodialysis started. Level decreases to 0.8. Discharged.',
      ],
      patientCounselingPoints: [
        'Never induce vomiting unless instructed by Poison Control - it can cause more harm for many substances',
        'Always bring medication bottles to the hospital when someone has taken an overdose - helps identify what was taken',
        'Intentional overdose needs mental health follow-up - many emergency departments can connect you with resources',
        'Store household chemicals separately from food areas to prevent accidental poisonings',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level overdose care integrates toxicokinetics, advanced decontamination techniques, evidence-based use of antidotes, and management of complex polypharmacy ingestions.',
      explanation: `## State of the Art in Medical Toxicology

**Evolution of toxicology:**
- **Era of gastric lavage:** Past
- **Era of ipecac:** Past (no longer recommended)
- **Era of activated charcoal:** Current (selective use)
- **Era of targeted antidotes:** Current with expansion
- **Era of enhanced elimination:** Current, based on specific drug properties

**Principles:**
- Supportive care saves more lives than antidotes
- "Treat the patient, not the poison"
- Antidotes when available, but not at expense of stabilization
- Decontamination when indicated, but not harmful

## Toxicokinetic Principles in Overdose

**Michaelis-Menten kinetics:**
- **First-order kinetics:** Elimination proportional to concentration
- **Michaelis-Menten (zero-order):** Elimination constant at high concentrations
  - Ethanol, phenytoin, salicylates at high doses
  - Enzyme saturation leads to prolonged half-life

**Volume of distribution (Vd) implications:**
- **Small Vd (high protein binding):**
  - Dialysis less effective (drug stays in vascular space)
  - Charcoal effective
  - Examples: Warfarin, valproate, diazepam
- **Large Vd (tissue distribution):**
  - Dialysis effective for clearing tissue stores
  - Charcoal may prevent ongoing absorption
  - Examples: TCAs, amphetamines, digoxin

**P-glycoprotein:**
- Efflux transporter in kidney, liver, blood-brain barrier
- Affected by drugs (verapamil, quinidine, cyclosporine)
- Genetic polymorphisms affect drug transport

**Pharmacogenomics:**
- **CYP450 polymorphisms:**
  - Poor metabolizers: Slower clearance
  - Ultra-rapid metabolizers: Faster activation of prodrugs
  - Examples: Codeine (CYP2D6), clopidogrel (CYP2C19)

## Advanced Antidotes

**Novel Antidotes:**

**Crotalidae polyvalent immune Fab (CroFab):**
- Antivenom for North American rattlesnakes
- Indicated for significant envenomation (coagulopathy, local toxicity)
- Dosing: 4-6 vials initial, then 2 vials every 6 hours for maintenance
- **Indications for antivenom:**
  - Progressive local toxicity
  - Coagulopathy
  - Systemic effects (shock, bleeding)
  - Neurotoxicity (rattlesnake)

**Antivenom for other envenomations:**
- **Black widow:** Antivenin (Latrodectus mactans)
- **Brown recluse:** No specific antivenom (supportive care)
- **Scorpions:** No specific antivenom in US (supportive care)
- **Spider (Australia): Funnel web antivenom

**Digoxin immune Fab use:**
- Indications:
  - Acute ingestion >0.1 mg/kg or >10 mg
  - Chronic toxicity with life-threatening arrhythmia
  - Level >4 ng/mL with manifestations
- **Dosing:**
  - 1 vial binds 0.5 mg digoxin
  - Vials = (serum level x kg)/100
  - Rebound possible with massive overdose
- **Caution:** Can precipitate withdrawal if patient digoxin-dependent

**Hydroxocobalamin advantages:**
- Fast antidote for cyanide
- No methemoglobinemia
- Can be used in smoke inhalation
- Safe in G6PD deficiency
- **Side effects:** Red discoloration of skin/urine (harmless), hypertension

**Fomepizole evolution:**
- Replaced ethanol as ADH inhibitor
- Safer, no CNS depression, no hypoglycemia
- Expensive but cost-effective when considering total care costs

## Polypharmacy Overdose Management

**Drug interactions:**
- **Serotonin syndrome:** Multiple serotonergic drugs
  - SSRIs + SNRIs + TCAs + MAOIs + tramadol + meperidine + linezolid + methylene blue
  - **Treatment:**
    - Discontinue all serotonergic drugs
    - Supportive care
    - Benzodiazepines (sedation, control agitation)
    - Cyproheptadine (5-HT2A antagonist)
    - Methylene blue (MAOI properties, off-label)

- **QT prolongation:** Multiple QT-prolonging drugs
  - TCAs, antipsychotics, methadone, macrolides, fluoroquinolones
  - **Risk:** Torsades de pointes
  - **Treatment:**
    - Discontinue offending drugs
    - Correct electrolytes (K+, Mg2+)
    - Magnesium sulfate 2-4 g IV
    - Temporary pacing if symptomatic

- **Additive CNS depression:**
  - Alcohol + benzos + opioids
  - Enhanced respiratory depression
  - **Treatment:** Supportive care, naloxone (for opioids), flumazenil (controversial)

## Complex Scenarios

**Multiple pills ingested:**
- **Acetaminophen co-ingestion:** ALWAYS check level
  - Many combination products contain acetaminophen
  - Many patients don't realize it
  - Check level at 4 hours post-ingestion
  - Treat with NAC if level above "treatment line"

- **Aspirin + acetaminophen:**
  - Charcoal if within 1 hour
  - Check both levels
  - Treat accordingly

- **Antidepressant polypharmacy:**
  - Serotonin syndrome risk
  - Seizure threshold lowered
  - Cardiac effects (TCAs)
  - Supportive care is mainstay

**Unknown ingestion:**
- **Universal precautions:** Treat as potentially toxic
- **Charcoal** within 1-2 hours if:
  - Patient is alert
  - Aspiration risk low
  - No contraindications
- **Observe:**
  - Monitor for toxidrome development
  - Check levels if indicated
  - Discharge if asymptomatic and period of observation complete

**Latex balloon syndrome:**
- Body packer with latex packets
- Rupture causes toxicity
- **Management:**
  - CT for localization
  - Whole bowel irrigation
  - Surgical removal if complications

## Toxicology in Critical Care

**ICU admission criteria:**
- Comatose or requiring intubation
- Hemodynamic instability
- Cardiac arrhythmias
- Severe metabolic derangement
- Need for enhanced elimination (dialysis)
- Need for prolonged antidote infusion

**ECMO considerations:**
- Severe cardiogenic shock from overdose
- Severe respiratory failure from aspiration pneumonitis
- Rewarming for severe hypothermia
- Bridge to recovery or transplantation

**Mortality prediction:**
- APACHE II score adapted for toxicology
- Specific predictors:
  - Acidosis severity
  - Organ failure
  - Delay in presentation
  - Preexisting conditions

## Emerging Therapies

**Intralipid (20% lipid emulsion):**
- Local anesthetic systemic toxicity (LAST)
- Cardiotoxicity from local anesthetics
- Proposed for other lipophilic drugs (bupropion, TCAs)
- **Mechanism:** Lipid sink theory
- **Dose:** 1.5 mL/kg bolus, then 0.25 mL/kg/min infusion
- **Evidence:** Strong for LAST, emerging for other toxicities

**Cyclosporine for Amanita mushroom poisoning:**
- Supportive care (MARS) preferred
- Silibinin (milk thistle extract) used in Europe

**Octreotide for sulfonylurea overdose:**
- Inhibits insulin secretion
- Prevents hypoglycemia
- Useful when glucose monitoring difficult

## Quality Improvement

**Poison center utilization:**
- Reduces hospital costs
- Reduces hospital admissions
- Improves outcomes
- **Poison Control: 1-800-222-1222**

**Clinical decision support:**
- Electronic health record alerts
- Drug interaction checkers
- Dose range checking
- Adverse event reporting

**Surveillance:**
- Prescription drug monitoring programs (PDMP)
- Syndromic surveillance for novel psychoactive substances
- Drug checking services (harm reduction)

## Ethical Considerations

**End-of-life care:**
- Withdrawal of life support in non-survivable ingestions
- Organ donation after brain death from overdose
- Ethical issues with resource allocation

**Good Samaritan laws:**
- Protect callers from prosecution
- Encourage calling for help
- Vary by jurisdiction

**Involuntary treatment:**
- When can we treat against patient's will?
- Life-threatening overdose with reversible cause
- Psychiatric hold for suicide risk

## Public Health Initiatives

**Harm reduction:**
- Syringe exchange programs
- Supervised injection facilities
- Fentanyl test strips
- Naloxone distribution
- Medication-assisted treatment

**Prevention:**
- Prescription drug monitoring programs
- Safe disposal programs
- Education programs
- Provider education on prescribing`,
      keyTerms: [
        { term: 'Vd', definition: 'Volume of distribution; determines how drug distributes between plasma and tissues. Affects dialysis and charcoal effectiveness' },
        { term: 'first-order kinetics', definition: 'Elimination rate proportional to concentration; half-life is constant. Most drugs follow this pattern' },
        { term: 'zero-order kinetics', definition: 'Elimination rate is constant regardless of concentration; half-life increases with dose. Seen with ethanol, phenytoin at high doses' },
        { term: 'Latrodectus mactans', definition: 'Black widow spider; antivenin available for significant envenomation' },
        { term: 'local anesthetic systemic toxicity', definition: 'Systemic toxicity from local anesthetics; treated with intralipid 20% emulsion' },
        { term: 'lipid sink theory', definition: 'Proposed mechanism for intralipid; lipids create compartment that sequesters lipophilic drugs' },
      ],
      analogies: [
        'Zero-order kinetics is like a toll booth - only so many cars (molecules) can get through per minute regardless of how many are waiting.',
        'P-glycoprotein is like a bouncer at an exclusive club - it decides which drugs get in (absorption) and which get kicked out (excretion).',
        'The lipid sink theory is like throwing a towel into a puddle - it soaks up (absorbs) the spill (drug).',
      ],
      clinicalNotes: `Expert clinical pearls for overdose management:

1. **Always check acetaminophen levels** in polypharmacy overdose. Many combination products contain acetaminophen, and patients don't realize it.

2. **Charcoal is NOT for every ingestion.** It's most effective within 1 hour. Contraindicated in corrosives, hydrocarbons, and unprotected airway.

3. **Naloxone is a temporary fix.** Patients with opioid overdose need prolonged observation (4-6 hours) because naloxone wears off faster than many opioids.

4. **"Treat the patient, not the poison."** Supportive care saves more lives than any antidote. Airway, breathing, circulation come first.

5. **Benzodiazepine overdose rarely requires flumazenil.** Supportive care is usually sufficient. Flumazenil can cause seizures and precipitate withdrawal.

6. **Methanol/ethylene glycol: treat early.** Fomepizole prevents formation of toxic metabolites. Don't wait for levels if exposure known.

7. **Serotonin syndrome can happen with many drug combinations.** Think of it when multiple serotonergic drugs are combined.

8. **Iron overdose: don't be reassured by normal early levels.** Levels peak at 4-6 hours. Whole bowel irrigation for pills still in GI tract.

9. **Digoxin antibodies are expensive but life-saving.** They completely bind digoxin and reverse toxicity rapidly.

10. **Poison Control is your friend.** Call 1-800-222-1222. They have real-time access to toxicology experts and can guide management.`,
    },
  },

  media: [
    {
      id: 'toxidrome-comparison',
      type: 'diagram',
      filename: 'toxidrome-comparison.svg',
      title: 'Toxidrome Comparison Chart',
      description: 'Visual comparison of opioid, sympathomimetic, anticholinergic, cholinergic, and sedative toxidromes',
    },
    {
      id: 'naloxone-administration',
      type: 'diagram',
      filename: 'naloxone-administration.svg',
      title: 'Naloxone Administration',
      description: 'Instructions for administering naloxone via nasal spray and auto-injector',
    },
    {
      id: 'antidote-reference',
      type: 'diagram',
      filename: 'antidote-reference.svg',
      title: 'Antidote Reference Chart',
      description: 'Quick reference for common antidotes and their indications',
    },
  ],

  citations: [
    {
      id: 'aact-guidelines',
      type: 'article',
      title: 'Position Statement: Single-Dose Activated Charcoal',
      authors: ['American Academy of Clinical Toxicology', 'European Association of Poisons Centres'],
      source: 'Journal of Toxicology',
      url: 'https://pubmed.ncbi.nlm.nih.gov/15706047/',
      accessedDate: '2026-01-26',
    },
    {
      id: 'aact-decision-rules',
      type: 'article',
      title: 'Guidelines for the Management of Poisoning',
      authors: ['American Association of Poison Control Centers', 'et al.'],
      source: 'Clinical Toxicology',
      url: 'https://journals.sagepub.com/doi/abs/10.3109/15563650.2010.48',
      accessedDate: '2026-01-26',
    },
    {
      id: 'goldfrank-toxicologic',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies',
      authors: ['Flomenbaum, N.E.', 'et al.'],
      source: 'McGraw Hill Education',
      url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=2678',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock Types' },
    { targetId: 'emergency-altered-mental-status', targetType: 'condition', relationship: 'related', label: 'Altered Mental Status' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'toxicology', 'critical care'],
    keywords: ['overdose', 'poisoning', 'naloxone', 'activated charcoal', 'toxidrome', 'antidote', 'opioid', 'toxicology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'toxicology'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default overdose;
