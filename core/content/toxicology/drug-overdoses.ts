/**
 * Drug Overdoses - Comprehensive Educational Content
 *
 * Medication overdoses including opioids, sedatives, stimulants,
 * and common prescription/OTC medications.
 *
 * IMPORTANT: In any overdose emergency, call 911 immediately.
 * Poison Control: 1-800-222-1222
 */

import { EducationalContent } from '../types';
import { POISON_CONTROL_NUMBER, TOXICOLOGY_CONTACTS } from './types';

export const drugOverdoses: EducationalContent = {
  id: 'toxicology-drug-overdoses',
  type: 'condition',
  name: 'Drug Overdoses',
  alternateNames: ['Medication Overdose', 'Drug Poisoning', 'Pharmaceutical Toxicity', 'OD'],

  levels: {
    1: {
      level: 1,
      summary: 'A drug overdose happens when someone takes too much of a medicine or drug. It can be accidental or intentional. Knowing the signs and acting fast can save lives.',
      explanation: `## What Is a Drug Overdose?

An overdose happens when someone takes more of a drug than their body can handle. This can happen with:
- Prescription medicines
- Over-the-counter medicines (like pain relievers)
- Illegal drugs
- A mix of different drugs

## Warning Signs of Overdose

**The person may:**
- Be very sleepy and hard to wake up
- Have slow or strange breathing
- Have blue or gray lips or fingernails
- Be confused or not make sense
- Have a very slow or very fast heartbeat
- Throw up
- Have seizures (shaking all over)
- Be unconscious (not responding at all)

## Different Types of Overdoses

**Opioid Overdose (pain pills, heroin, fentanyl):**
- Very small pupils (like pinpoints)
- Extremely sleepy
- Slow or stopped breathing
- Blue lips
- Can't be woken up

**Stimulant Overdose (cocaine, meth, some ADHD meds):**
- Very agitated or paranoid
- Fast heartbeat
- High body temperature
- Chest pain
- Seizures

**Sedative Overdose (sleeping pills, anxiety meds):**
- Very sleepy
- Slurred speech
- Confusion
- Trouble walking

## What To Do

1. **Call 911 immediately** - Don't wait
2. **Try to wake them** - Shout their name, rub their chest hard
3. **If you have Narcan (naloxone)** - Use it for suspected opioid overdose
4. **Put them on their side** - So they don't choke if they vomit
5. **Start CPR if not breathing** - Push hard and fast on their chest
6. **Stay with them** until help arrives

## Narcan (Naloxone) - The Opioid Antidote

Narcan can reverse an opioid overdose. It:
- Comes as a nasal spray or injection
- Works in 2-3 minutes
- Is safe even if you're not sure it's an opioid overdose
- Can be given more than once if needed
- Is available at pharmacies without a prescription in many states

## Important Things to Know

- **You won't get in trouble** for calling 911 during an overdose (Good Samaritan laws)
- An overdose is a medical emergency - time matters
- Mixing drugs (especially with alcohol) increases overdose risk
- Keep the pill bottle or drug sample to show emergency responders
- Don't try to make them throw up`,
      keyTerms: [
        { term: 'overdose', definition: 'Taking more of a drug than your body can safely handle, causing dangerous symptoms' },
        { term: 'Narcan/naloxone', definition: 'A medicine that can quickly reverse an opioid overdose and help someone breathe again' },
        { term: 'opioid', definition: 'A type of strong pain medicine that includes prescription pills and illegal drugs like heroin' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation - pushing on the chest to keep blood flowing when the heart stops' },
        { term: 'Good Samaritan law', definition: 'A law that protects people from getting in trouble when they call for help during an overdose' },
      ],
      analogies: [
        'Narcan works like an eraser for opioids in the brain - it quickly removes the opioid from the receptors so the person can breathe again.',
        'An overdose is like a circuit breaker tripping - the body shuts down because it\'s overloaded.',
      ],
      examples: [
        'A teenager finds their friend unresponsive with slow breathing after a party - they should call 911 and give Narcan if available.',
        'Someone accidentally takes their pain medicine twice and feels very drowsy - call Poison Control for guidance.',
        'A person who stopped using drugs for a while starts again at the same dose and overdoses - tolerance decreased during abstinence.',
      ],
    },
    2: {
      level: 2,
      summary: 'Drug overdoses are medical emergencies requiring rapid recognition and intervention. Understanding different drug classes, their effects, and specific treatments including naloxone for opioids is essential for bystanders and first responders.',
      explanation: `## Epidemiology of Drug Overdoses

**United States Statistics:**
- >100,000 overdose deaths annually (increasing)
- Opioids involved in ~75% of overdose deaths
- Fentanyl now primary driver of opioid deaths
- Polysubstance use increasingly common

**Risk Factors:**
- Prior overdose history (strongest predictor)
- High-dose opioid prescriptions
- Concurrent benzodiazepine use
- Recent abstinence/reduced tolerance
- Using alone
- Substance use disorder without treatment
- Mental health conditions

## Major Drug Classes and Overdose Presentations

### Opioids

**Common Opioids:**
- Prescription: Oxycodone, hydrocodone, morphine, fentanyl
- Illicit: Heroin, illicit fentanyl and analogues

**Classic Triad:**
1. Respiratory depression (slow, shallow, or absent breathing)
2. Decreased level of consciousness (sedation to coma)
3. Miosis (pinpoint pupils)

**Additional Signs:**
- Cyanosis (blue/gray skin, especially lips and fingernails)
- Bradycardia
- Hypotension
- Hypothermia
- Pulmonary edema ("death rattle" breathing sounds)

**Fentanyl Considerations:**
- 50-100x more potent than morphine
- Rapid onset
- May require multiple naloxone doses
- Often mixed with other drugs unknowingly

### Sedative-Hypnotics

**Common Agents:**
- Benzodiazepines: Alprazolam (Xanax), diazepam (Valium), clonazepam
- Z-drugs: Zolpidem (Ambien), zaleplon
- Barbiturates: Phenobarbital

**Presentation:**
- CNS depression
- Respiratory depression (especially with alcohol)
- Hypotension
- Ataxia
- Slurred speech
- Hypothermia

**Key Point:** Benzodiazepine overdose alone rarely fatal; combination with opioids or alcohol dramatically increases risk.

### Stimulants

**Common Agents:**
- Cocaine
- Methamphetamine
- Prescription amphetamines (Adderall, Vyvanse)
- MDMA (Ecstasy/Molly)

**Presentation:**
- Sympathetic overstimulation
- Tachycardia, hypertension
- Hyperthermia
- Agitation, psychosis
- Seizures
- Chest pain (cocaine: coronary vasospasm)
- Dilated pupils

**Complications:**
- Myocardial infarction
- Stroke (hemorrhagic or ischemic)
- Rhabdomyolysis
- Disseminated intravascular coagulation

### Acetaminophen

**Why It Matters:**
- Most common single-agent overdose
- Available in many combination products
- Delayed toxicity (may appear fine initially)
- Hepatotoxicity develops over 24-72 hours

**Presentation Timeline:**
| Phase | Time | Symptoms |
|-------|------|----------|
| 1 | 0-24h | Nausea, vomiting, or asymptomatic |
| 2 | 24-72h | RUQ pain, improving nausea |
| 3 | 72-96h | Hepatic failure, coagulopathy |
| 4 | >96h | Recovery or death |

### Antidepressants

**Tricyclic Antidepressants (TCAs):**
- Lethal in overdose
- Sodium channel blockade (wide QRS)
- Anticholinergic effects
- Seizures
- Hypotension
- Treatment: Sodium bicarbonate

**SSRIs:**
- Generally safer in overdose
- Serotonin syndrome risk (especially with other serotonergic drugs)
- QT prolongation (some agents)

## Naloxone (Narcan) Use

**Mechanism:**
- Competitive opioid receptor antagonist
- Reverses respiratory depression
- Onset: 1-2 minutes (IV), 3-5 minutes (IM/IN)
- Duration: 30-90 minutes (may need repeat dosing)

**Administration:**
| Route | Dose | Notes |
|-------|------|-------|
| Intranasal | 4 mg spray | Lay rescue preferred |
| Intramuscular | 0.4-2 mg | Can use through clothing |
| Intravenous | 0.04-0.4 mg | Titrate to respiratory effort |

**Important Considerations:**
- May precipitate withdrawal (uncomfortable but not dangerous)
- Short duration - person may re-sedate if long-acting opioid
- Stay with person until EMS arrives
- Titrate to adequate breathing, not full arousal (reduces withdrawal)

## Immediate Response Steps

1. **Assess safety** (scene, number of patients)
2. **Check responsiveness** (tap, shout)
3. **Call 911** immediately
4. **Open airway** (head tilt-chin lift)
5. **Assess breathing** (look, listen, feel)
6. **Give naloxone** if available and opioid suspected
7. **Begin rescue breathing or CPR** if not breathing
8. **Recovery position** if breathing but unconscious
9. **Repeat naloxone** every 2-3 minutes if no response (up to 3-4 doses)
10. **Provide information to EMS** (what taken, when, how much)

## Prevention and Harm Reduction

**Overdose Prevention:**
- Naloxone access and training
- Safe prescribing practices
- Never use alone programs
- Drug checking services
- Medication-assisted treatment for opioid use disorder

**Risk Reduction Strategies:**
- Start low, go slow after any period of abstinence
- Never mix opioids with benzodiazepines, alcohol, or other sedatives
- Test substances if available
- Have naloxone available
- Let someone know when using`,
      keyTerms: [
        { term: 'miosis', definition: 'Constricted (pinpoint) pupils; classic sign of opioid overdose', pronunciation: 'my-OH-sis' },
        { term: 'respiratory depression', definition: 'Slow, shallow breathing that can lead to respiratory arrest and death' },
        { term: 'naloxone', definition: 'Opioid antagonist medication that reverses opioid overdose effects', pronunciation: 'nal-OX-own' },
        { term: 'polysubstance', definition: 'Use of multiple drugs simultaneously, increasing overdose risk' },
        { term: 'tolerance', definition: 'Decreased effect of a drug with repeated use, requiring higher doses' },
        { term: 'hyperthermia', definition: 'Dangerously elevated body temperature; seen in stimulant overdose', pronunciation: 'hy-per-THERM-ee-ah' },
      ],
      clinicalNotes: 'Key bystander intervention: In suspected opioid overdose, naloxone is safe to give even if unsure. The priority is maintaining breathing. In stimulant overdose, cooling and controlling agitation are priorities - no specific antidote exists.',
    },
    3: {
      level: 3,
      summary: 'Drug overdose management requires understanding pharmacokinetics, toxidromes, and evidence-based interventions. Key concepts include risk stratification, specific antidotes, supportive care strategies, and enhanced elimination techniques.',
      explanation: `## Toxicological Assessment Framework

### Toxidrome Recognition

**Opioid Toxidrome:**
- CNS: Sedation to coma
- Pupils: Miotic (pinpoint)
- Vitals: Bradypnea, bradycardia, hypotension, hypothermia
- Skin: Normal to cool
- Other: Decreased bowel sounds

**Sympathomimetic Toxidrome:**
- CNS: Agitation, psychosis
- Pupils: Mydriatic (dilated)
- Vitals: Tachycardia, hypertension, hyperthermia, tachypnea
- Skin: Diaphoretic
- Other: Seizures, chest pain

**Sedative-Hypnotic Toxidrome:**
- CNS: Sedation to coma
- Pupils: Variable (mid-position or normal)
- Vitals: Bradypnea, hypotension
- Skin: Normal
- Other: Ataxia, slurred speech

**Anticholinergic Toxidrome:**
- "Red as a beet, dry as a bone, blind as a bat, mad as a hatter, hot as a hare"
- Pupils: Mydriatic
- Vitals: Tachycardia, hyperthermia
- Skin: Flushed, dry
- Other: Urinary retention, decreased bowel sounds, delirium

**Serotonin Syndrome:**
- CNS: Agitation, confusion
- Pupils: Mydriatic
- Vitals: Tachycardia, hypertension, hyperthermia
- Neuromuscular: Clonus, hyperreflexia, tremor, rigidity
- Skin: Diaphoretic

### Pharmacokinetic Principles

**ADME in Overdose:**

*Absorption:*
- Extended-release formulations: Delayed, prolonged absorption
- Concretions/bezoars: May form with massive ingestions
- Coingestants: May affect GI motility

*Distribution:*
- Large volume of distribution: Less amenable to dialysis
- Protein binding: Only unbound drug is active
- Lipophilic drugs: Prolonged effects, redistribution

*Metabolism:*
- Saturation: First-order → zero-order kinetics
- Active metabolites: May prolong toxicity
- CYP interactions: Inhibition or induction

*Elimination:*
- Renal: Enhanced by urinary pH manipulation (some drugs)
- Hepatic: Not easily enhanced
- Dialysis: For appropriate drugs

### Specific Overdose Management

#### Opioid Overdose

**Naloxone Dosing Strategy:**
\`\`\`
Goal: Restore adequate ventilation, not full consciousness

Initial dose depends on clinical scenario:
- Respiratory arrest: 2 mg IV/IM/IN, repeat every 2-3 min
- Ventilatory support available: Start 0.04-0.1 mg IV, titrate
- Known opioid-dependent: Start low to minimize withdrawal

Total dose may exceed 10 mg in fentanyl cases
\`\`\`

**Naloxone Failure Considerations:**
1. Not an opioid (or mixed ingestion)
2. Inadequate dose (especially fentanyl)
3. Hypoxic brain injury already occurred
4. Other causes of coma

**Post-Naloxone Monitoring:**
- Duration of naloxone: 30-90 minutes
- Duration of most opioids: 2-6+ hours
- Extended monitoring for long-acting opioids (methadone, fentanyl patch)
- Minimum 4 hours; 24 hours for methadone

#### Benzodiazepine Overdose

**Flumazenil:**
- Competitive benzodiazepine antagonist
- Generally NOT recommended in acute overdose
- Risks:
  - Seizures (especially if chronic benzodiazepine use or coingestant)
  - Withdrawal
  - Masks mixed overdose

**When Flumazenil May Be Considered:**
- Iatrogenic oversedation in known non-dependent patient
- Pediatric benzodiazepine ingestion without seizure history
- Diagnostic (procedural setting)

**Management:**
- Supportive care primary approach
- Airway protection if needed
- Respiratory support
- Rarely requires antidote

#### Stimulant Overdose

**No Specific Antidote - Supportive Care:**

*Agitation Management:*
- First-line: Benzodiazepines (lorazepam 2-4 mg IV, repeat as needed)
- Avoid physical restraint alone (worsens hyperthermia, acidosis)
- Avoid antipsychotics in cocaine (lower seizure threshold, worsen hyperthermia)

*Hyperthermia:*
- Active cooling (ice packs, cooling blankets, mist and fan)
- Goal: Temperature <39degC (102.2degF)
- Consider intubation and paralysis if refractory

*Cardiovascular:*
- Cocaine chest pain: Benzodiazepines first, then nitrates
- Avoid beta-blockers in cocaine (unopposed alpha stimulation)
- Phentolamine for refractory hypertension

*Seizures:*
- Benzodiazepines
- Avoid phenytoin

#### Acetaminophen Overdose

**Risk Assessment:**
- Single acute ingestion: 150 mg/kg toxic threshold
- Plot level on Rumack-Matthew nomogram at 4+ hours post-ingestion
- Chronic ingestion: Different criteria

**N-Acetylcysteine Protocol:**
\`\`\`
21-hour IV protocol:
- Loading: 150 mg/kg in 200 mL D5W over 1 hour
- Second: 50 mg/kg in 500 mL D5W over 4 hours
- Third: 100 mg/kg in 1000 mL D5W over 16 hours

Continue if: ALT rising, acetaminophen detectable, INR >2
\`\`\`

**King's College Criteria (Transplant Consideration):**
- Acetaminophen-induced: pH <7.3 after resuscitation, OR
- All three: PT >100 sec (INR >6.5), Cr >3.4, Grade III-IV encephalopathy

#### Tricyclic Antidepressant Overdose

**Toxicity Mechanism:**
- Sodium channel blockade (cardiac)
- Potassium channel blockade (QT prolongation)
- Anticholinergic effects
- Alpha-adrenergic blockade

**ECG Markers of Severity:**
- QRS >100 ms: Seizure risk
- QRS >160 ms: Arrhythmia risk
- R wave in aVR >3 mm: Associated with toxicity
- Terminal 40 ms rightward axis

**Sodium Bicarbonate Treatment:**
\`\`\`
Indications:
- QRS >100 ms
- Ventricular arrhythmia
- Hypotension refractory to fluids

Dose: 1-2 mEq/kg IV bolus
Goal: pH 7.45-7.55, QRS narrowing
\`\`\`

### Enhanced Elimination

**Hemodialysis Indications:**
| Drug | Criteria |
|------|----------|
| Lithium | Level >4 mEq/L with symptoms, renal failure |
| Salicylates | Level >100 mg/dL, AMS, pulmonary edema |
| Methanol/EG | Acidosis, visual changes, renal failure |
| Metformin | Lactic acidosis, level >5 mg/L |
| Valproic acid | Level >1000 mg/L, AMS, unstable |

**Urinary Alkalinization:**
- Target urine pH 7.5-8.0
- Sodium bicarbonate infusion
- Effective for: Salicylates, methotrexate, phenobarbital
- Monitor potassium (shifts intracellularly)

### Disposition Considerations

**ICU Admission Criteria:**
- Hemodynamic instability
- Respiratory failure
- Altered mental status
- Anticipated deterioration (rising drug levels)
- Need for antidote infusion (NAC, fomepizole)
- Cardiac monitoring for arrhythmia risk

**Psychiatric Evaluation:**
- Required for all intentional overdoses
- Cannot discharge until cleared by psychiatry
- Safety assessment and disposition planning`,
      keyTerms: [
        { term: 'toxidrome', definition: 'Constellation of symptoms and signs characteristic of a specific class of toxin' },
        { term: 'flumazenil', definition: 'Benzodiazepine antagonist; rarely used due to seizure risk in overdose setting', pronunciation: 'flew-MAZ-eh-nil' },
        { term: 'sodium bicarbonate', definition: 'Alkalinizing agent used to treat sodium channel blockade in TCA overdose' },
        { term: 'Rumack-Matthew nomogram', definition: 'Graph plotting acetaminophen level vs time to guide NAC treatment decisions' },
        { term: 'QRS prolongation', definition: 'Widening of QRS complex on ECG indicating sodium channel blockade; risk marker in TCA overdose' },
        { term: 'King\'s College Criteria', definition: 'Prognostic criteria for liver transplant evaluation in acute liver failure' },
      ],
      clinicalNotes: 'Key management points: (1) In opioid overdose with fentanyl, anticipate need for higher and repeated naloxone doses. (2) Avoid flumazenil in undifferentiated overdose. (3) ECG is critical in TCA overdose - wide QRS mandates sodium bicarbonate. (4) All intentional overdoses require psychiatric clearance before discharge.',
    },
    4: {
      level: 4,
      summary: 'Advanced drug overdose management integrates detailed pharmacology, risk stratification scoring, complex antidote protocols, and multi-organ support. Understanding drug-specific kinetics and anticipating complications guides ICU-level care.',
      explanation: `## Advanced Pharmacology in Overdose

### Opioid Pharmacology

**Receptor Subtypes and Effects:**
| Receptor | Location | Effects | Overdose Relevance |
|----------|----------|---------|-------------------|
| Mu (MOR) | Brain, spinal | Analgesia, euphoria, respiratory depression | Primary mediator |
| Kappa (KOR) | Spinal, limbic | Dysphoria, sedation | Secondary effects |
| Delta (DOR) | Brain | Mood, analgesia | Minor role |

**Potency Comparisons (Morphine Equivalents):**
| Opioid | Relative Potency | Half-life | Notes |
|--------|-----------------|-----------|-------|
| Morphine | 1x | 2-4h | Reference standard |
| Hydrocodone | 1x | 4h | Common prescription |
| Oxycodone | 1.5x | 3-4h | High abuse potential |
| Fentanyl | 50-100x | 3-4h | Rapid onset, short duration |
| Carfentanil | 10,000x | Unknown | Veterinary, extremely dangerous |
| Methadone | Variable | 24-36h | Long half-life, QT prolongation |
| Buprenorphine | 25-50x | 37h | Partial agonist, ceiling effect |

**Fentanyl Analogues:**
- Acetylfentanyl, furanylfentanyl, carfentanil
- Variable potency (some more potent than fentanyl)
- Standard immunoassay may not detect
- May require massive naloxone doses

### Advanced Naloxone Strategies

**Continuous Infusion Protocol:**
\`\`\`
When: Repeat dosing required, long-acting opioid
Preparation: Initial effective dose x 0.66/hour
Monitoring: Respiratory rate, sedation score
Adjustment: Titrate to adequate ventilation
Duration: 2/3 of opioid half-life after discontinuation
\`\`\`

**High-Dose Naloxone Considerations:**
- Total doses >10 mg reported with potent synthetic opioids
- No ceiling effect on naloxone
- Theoretical concern: Pulmonary edema (rarely seen in practice)
- Goal: Restoration of ventilation, not consciousness

**Nalmefene:**
- Longer-acting opioid antagonist (half-life 8-9 hours)
- May reduce re-narcotization
- Less commonly available than naloxone

### Cardiac Toxicity in Overdose

**Drug-Induced QT Prolongation:**

*High-Risk Agents:*
- Methadone
- Tricyclic antidepressants
- Some antipsychotics (haloperidol, droperidol)
- Some SSRIs (citalopram, escitalopram)
- Macrolide antibiotics
- Fluoroquinolones
- Antiarrhythmics (sotalol, amiodarone)

*Risk Factors for Torsades de Pointes:*
- QTc >500 ms
- Increase in QTc >60 ms from baseline
- Electrolyte abnormalities (hypokalemia, hypomagnesemia)
- Bradycardia
- Female sex
- Structural heart disease

*Management:*
- Correct electrolytes (K+ 4-4.5, Mg++ 2+)
- Magnesium sulfate 2g IV (even if level normal)
- Temporary pacing for bradycardia-dependent
- Isoproterenol for recurrent episodes
- Avoid QT-prolonging drugs

**Sodium Channel Blockade:**

*Mechanism:*
- Slowed phase 0 depolarization
- Widened QRS complex
- Right axis deviation of terminal 40 ms
- Brugada-like pattern

*Agents:*
- Tricyclic antidepressants
- Class IA antiarrhythmics
- Cocaine
- Diphenhydramine (massive overdose)
- Local anesthetics
- Some antipsychotics

*ECG Features:*
- QRS >100 ms (seizure risk)
- QRS >160 ms (ventricular arrhythmia risk)
- Terminal R wave in aVR >3 mm
- R/S ratio in aVR >0.7

*Sodium Bicarbonate Protocol:*
\`\`\`
Initial: 1-2 mEq/kg IV push
Repeat: Every 3-5 minutes until QRS narrows
Goal: Serum pH 7.45-7.55
Maintenance: Bicarbonate drip to maintain pH
Monitor: QRS width, arterial pH, potassium

Mechanism: Increases serum Na+ and pH, both decrease drug binding to Na+ channels
\`\`\`

### Lipid Emulsion Therapy

**Mechanism:**
- "Lipid sink" - sequesters lipophilic drugs in plasma lipid phase
- May also provide metabolic support to myocardium

**Protocol:**
\`\`\`
20% Intralipid:
- Bolus: 1.5 mL/kg IV over 2-3 minutes
- Infusion: 0.25 mL/kg/min
- Repeat bolus x2 if unstable
- Maximum: 10 mL/kg over first 30 minutes
\`\`\`

**Indications:**
- Local anesthetic systemic toxicity (LAST) - strongest evidence
- Consider in severe poisoning with lipophilic drugs when standard therapies failing:
  - Tricyclic antidepressants
  - Calcium channel blockers
  - Beta-blockers
  - Other lipophilic drugs

**Complications:**
- Lipemia interfering with labs
- Pancreatitis (theoretical)
- ARDS (rare)

### Serotonin Syndrome vs Anticholinergic Toxicity

| Feature | Serotonin Syndrome | Anticholinergic |
|---------|-------------------|-----------------|
| Pupils | Dilated | Dilated |
| Skin | Diaphoretic | Dry, flushed |
| Bowel sounds | Hyperactive | Decreased |
| Reflexes | Hyperreflexia, clonus | Normal or decreased |
| Muscle tone | Rigidity (lower > upper) | Normal |
| Fever mechanism | Increased muscle activity | Decreased sweating |

**Serotonin Syndrome Management:**
- Stop serotonergic agents
- Supportive care, cooling
- Benzodiazepines for agitation
- Cyproheptadine 12 mg PO initial, then 2 mg q2h (5-HT2A antagonist)
- Intubation and paralysis if severe

**Anticholinergic Management:**
- Supportive care
- Benzodiazepines for agitation
- Physostigmine (if no contraindications):
  - 0.5-2 mg slow IV push
  - Contraindications: Wide QRS, seizure history, bowel/bladder obstruction

### Extracorporeal Life Support

**VA-ECMO in Overdose:**

*Potential Indications:*
- Refractory cardiogenic shock
- Cardiac arrest from drug toxicity
- Bridge to drug clearance
- Bridge to transplant (rarely)

*Best Evidence:*
- Beta-blocker overdose
- Calcium channel blocker overdose
- Sodium channel blocking agents

*Considerations:*
- Rapid cannulation critical
- May need prolonged support (days) for drug clearance
- Requires specialized center
- Complications: Bleeding, infection, limb ischemia

### Risk Stratification Scores

**RASS (Richmond Agitation-Sedation Scale):**
| Score | Description |
|-------|-------------|
| +4 | Combative, immediate danger |
| +3 | Very agitated |
| +2 | Agitated |
| +1 | Restless |
| 0 | Alert and calm |
| -1 | Drowsy |
| -2 | Light sedation |
| -3 | Moderate sedation |
| -4 | Deep sedation |
| -5 | Unarousable |

**Drug Overdose Severity Score:**
- Predicts ICU admission and outcomes
- Variables: Vital signs, GCS, laboratory values
- Validated for mixed overdose populations

### Complications Requiring ICU Management

**Aspiration Pneumonitis/Pneumonia:**
- Common in drug overdose with altered mental status
- Supportive care, antibiotics if secondary infection
- May progress to ARDS

**Rhabdomyolysis:**
- Prolonged immobilization, seizures, stimulants
- CK >5000 U/L warrants aggressive hydration
- Target urine output 200-300 mL/h
- Monitor for compartment syndrome, AKI

**Non-Cardiogenic Pulmonary Edema:**
- Associated with opioid overdose (especially heroin)
- Usually resolves within 24-48 hours
- Supportive care, may need positive pressure ventilation

**Hypoxic Brain Injury:**
- Anoxic interval determines prognosis
- Targeted temperature management considerations
- Neuroprognostication delayed until drug clearance`,
      keyTerms: [
        { term: 'lipid emulsion therapy', definition: 'IV fat emulsion used to sequester lipophilic drugs from tissue, enhancing elimination' },
        { term: 'serotonin syndrome', definition: 'Potentially life-threatening condition from excess serotonin; triad of altered mental status, autonomic instability, neuromuscular hyperactivity' },
        { term: 'cyproheptadine', definition: 'Antihistamine with serotonin antagonist properties; used in serotonin syndrome', pronunciation: 'sy-pro-HEP-ta-deen' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation; mechanical circulatory and respiratory support' },
        { term: 'physostigmine', definition: 'Acetylcholinesterase inhibitor; reverses anticholinergic toxicity', pronunciation: 'fy-zo-STIG-meen' },
        { term: 'nalmefene', definition: 'Long-acting opioid antagonist with 8-9 hour half-life', pronunciation: 'NAL-meh-feen' },
      ],
      clinicalNotes: 'Advanced considerations: (1) QRS >100 ms in any overdose suggests sodium channel blockade requiring bicarbonate. (2) Lipid emulsion is rescue therapy, not first-line. (3) Serotonin syndrome requires neuromuscular findings (clonus, hyperreflexia) to differentiate from anticholinergic toxicity. (4) ECMO can bridge patients through otherwise lethal cardiotoxicity.',
    },
    5: {
      level: 5,
      summary: 'Expert-level drug overdose management encompasses emerging trends in synthetic opioids, novel psychoactive substances, evidence from recent trials, and integration with public health surveillance. Advanced resuscitation and toxicology subspecialty consultation optimize outcomes.',
      explanation: `## Evolving Drug Overdose Landscape

### Synthetic Opioid Crisis

**Fentanyl Evolution:**
- 2013: First appearance in illicit drug supply
- 2015-present: Exponential increase, now dominant
- "Fourth wave" of opioid crisis
- Contamination of stimulant supply (fentanyl in cocaine, methamphetamine)

**Fentanyl Analogues (Designer Fentanyls):**
\`\`\`
Increasing potency trend:
- Acetylfentanyl: Similar to fentanyl
- Furanylfentanyl: Similar potency
- 3-Methylfentanyl: 6,000x morphine
- Carfentanil: 10,000x morphine
\`\`\`

**Xylazine ("Tranq"):**
- Alpha-2 adrenergic agonist (veterinary sedative)
- Increasingly added to fentanyl supply
- NOT reversed by naloxone
- Associated with severe necrotic skin ulcers
- Management: Supportive care, wound care, consider alpha-2 antagonists (experimental)

**Nitazenes:**
- Novel synthetic opioids unrelated to fentanyl
- Some 10x more potent than fentanyl
- Emerging in drug supply
- Standard immunoassay negative
- May require even higher naloxone doses

### Novel Psychoactive Substances (NPS)

**Synthetic Cathinones ("Bath Salts"):**
- MDPV, mephedrone, alpha-PVP
- Potent sympathomimetic toxidrome
- Prolonged agitation (hours to days)
- Severe hyperthermia
- Rhabdomyolysis, multi-organ failure
- Management: Heavy benzodiazepine dosing, aggressive cooling

**Synthetic Cannabinoids:**
- K2, Spice, and countless analogues
- Paradoxical effects unlike natural cannabis
- Seizures, psychosis, agitation
- Coagulopathy (brodifacoum contamination in some batches)
- No specific antidote

**Novel Benzodiazepines:**
- Clonazolam, flualprazolam, etizolam
- Much more potent than traditional benzodiazepines
- Variable flumazenil response
- Some not detected on standard screens

### Current Research and Emerging Therapies

**Long-Acting Naloxone Formulations:**
- Nalmefene (IM, IN) - longer duration
- Extended-release naltrexone considerations
- Goals: Reduce re-narcotization, improve outcomes

**Opioid Use Disorder Treatment Integration:**
- ED-initiated buprenorphine
- BRIDGE trial: ED suboxone initiation doubled treatment engagement
- California Bridge Program: Statewide implementation
- Low-threshold prescribing protocols

**Naloxone Distribution:**
- Standing orders in most states
- Community distribution programs
- Co-prescribing with opioids recommended
- Evidence base for effectiveness growing

**Drug Checking Services:**
- Fentanyl test strips
- Point-of-care drug identification
- Harm reduction approach
- Legal barriers in some jurisdictions

### Advanced Resuscitation Considerations

**Opioid-Associated Out-of-Hospital Cardiac Arrest (OA-OHCA):**
\`\`\`
Characteristics:
- Often younger patients
- Commonly asystole/PEA (hypoxia-driven)
- May have longer downtime before discovery
- Potential for better neurological outcomes with early intervention

Management approach:
1. Early naloxone (even in cardiac arrest)
2. Standard ACLS resuscitation
3. Consider prolonged resuscitation given reversibility
4. Post-ROSC: Evaluate for aspiration, hypoxic injury
\`\`\`

**ECMO-Facilitated Resuscitation:**
- ECPR for refractory arrest from drug toxicity
- Best outcomes: Young, witnessed, short no-flow time
- Allows drug clearance while supporting circulation
- Limited by availability and expertise

**Targeted Temperature Management:**
- Standard indications for cardiac arrest survivors
- Considerations in drug overdose:
  - Drug clearance may be prolonged by hypothermia
  - Prognostication challenging with concurrent drug effect
  - Generally recommend standard protocols

### Mass Casualty Toxicological Events

**Fentanyl Mass Overdose Scenarios:**
- Contaminated drug batch
- Aerosol exposure (law enforcement, first responder risk)
- Club/rave settings

**Surge Response:**
- Naloxone availability (bulk supplies)
- Airway management resources
- Toxicology consultation
- Public health notification

**First Responder Safety:**
- Dermal absorption minimal risk
- Inhalation of powder: Very low risk with standard precautions
- Avoiding panic while maintaining safety
- Nitrile gloves, avoid face touching, wash hands

### Quality Metrics and Systems Issues

**Overdose Quality Indicators:**
- Time to naloxone in opioid overdose
- Aspiration rate during resuscitation
- ED-initiated MAT for OUD
- Naloxone prescription at discharge
- Psychiatric evaluation for intentional overdose
- 30-day overdose recurrence

**Systems Integration:**
- EMS standing orders for naloxone
- Bystander naloxone programs
- ED take-home naloxone
- Warm handoff to treatment
- Peer support programs

### Medicolegal and Ethical Considerations

**Good Samaritan Laws:**
- 48 states have some form of protection
- Vary in scope of protection
- May protect caller and/or victim
- Important for public education

**Capacity and Consent:**
- Altered mental status from intoxication affects capacity
- Implied consent for life-threatening emergencies
- Psychiatric hold considerations for intentional overdose
- Patient refusal after naloxone reversal

**Toxicology Consultation:**
- Poison center consultation for all significant ingestions
- Medical toxicologist availability (phone, telemedicine)
- Complex cases: Polypharmacy, unusual agents, refractory toxicity
- Documentation of consultation important

**Death Investigation:**
- Toxicology specimens
- Scene investigation
- Drug paraphernalia preservation
- Chain of custody

### Future Directions

**Emerging Technologies:**
- Wearable overdose detection devices
- Naloxone auto-injectors
- AI-powered drug identification
- Real-time overdose surveillance

**Research Priorities:**
- Optimal naloxone dosing for synthetic opioids
- ED-based interventions for OUD
- Xylazine treatment protocols
- Long-term outcomes after overdose

**Public Health Integration:**
- Overdose fatality review teams
- Drug early warning systems
- Decriminalization impacts on overdose rates
- Housing and overdose outcomes

### Subspecialty Toxicology Expertise

**When to Consult Medical Toxicology:**
- Unusual or unknown agents
- Refractory toxicity despite standard treatment
- Need for enhanced elimination guidance
- Complex drug-drug interactions
- Antidote dosing guidance
- Prognostication assistance

**Toxicology Fellowship Training:**
- 2-year subspecialty after EM, IM, or Pediatrics
- Board certification by ABMS
- ~60 fellows/year nationally
- Increasing demand exceeds supply

**Poison Center Resources:**
- 24/7 phone consultation: ${POISON_CONTROL_NUMBER}
- Specialist expertise immediately available
- Database access for unusual agents
- Surveillance and public health linkage`,
      keyTerms: [
        { term: 'xylazine', definition: 'Alpha-2 adrenergic agonist veterinary sedative increasingly found in illicit opioid supply; not reversed by naloxone', pronunciation: 'ZY-lah-zeen' },
        { term: 'nitazenes', definition: 'Novel synthetic opioid class unrelated to fentanyl; some compounds more potent than carfentanil' },
        { term: 'novel psychoactive substances', definition: 'Designer drugs created to mimic controlled substances; often evade drug testing' },
        { term: 'OA-OHCA', definition: 'Opioid-associated out-of-hospital cardiac arrest; unique characteristics and management considerations' },
        { term: 'ECPR', definition: 'ECMO-facilitated cardiopulmonary resuscitation; may bridge refractory arrest from drug toxicity' },
        { term: 'MAT', definition: 'Medication-assisted treatment for opioid use disorder; includes buprenorphine, methadone, naltrexone' },
      ],
      clinicalNotes: `Expert clinical pearls:

1. **Xylazine:** Increasingly common in fentanyl supply. Not reversed by naloxone. Causes severe tissue necrosis. Alpha-2 antagonists (atipamezole) under investigation.

2. **Synthetic opioid failure to respond:** Consider nitazenes, xylazine contamination, or hypoxic brain injury. May require naloxone doses >10 mg.

3. **ED-initiated buprenorphine:** Strong evidence supports starting OUD treatment from the ED. Reduces treatment gap and subsequent overdose.

4. **Mass casualty planning:** Fentanyl contamination events require surge naloxone supplies and airway resources.

5. **Prognostication challenges:** Drug effects confound neurological assessment. Delay prognostication until drug clearance confirmed.

6. **Systems approach:** Quality improvement focus on naloxone access, time to treatment, and linkage to care.`,
    },
  },

  media: [
    {
      id: 'opioid-overdose-recognition',
      type: 'diagram',
      filename: 'opioid-overdose-recognition.svg',
      title: 'Opioid Overdose Recognition and Response',
      description: 'Visual guide to recognizing and responding to opioid overdose',
    },
    {
      id: 'toxidrome-comparison',
      type: 'diagram',
      filename: 'toxidrome-comparison-chart.svg',
      title: 'Major Toxidrome Comparison',
      description: 'Side-by-side comparison of opioid, sedative, sympathomimetic, and anticholinergic toxidromes',
    },
  ],

  citations: [
    {
      id: 'cdc-drug-overdose-surveillance',
      type: 'article',
      title: 'Drug Overdose Deaths in the United States',
      authors: ['CDC National Center for Health Statistics'],
      source: 'CDC WONDER',
      url: 'https://www.cdc.gov/drugoverdose/',
      license: 'Public Domain',
    },
    {
      id: 'goldfrank-opioids',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies',
      source: 'McGraw-Hill',
      chapter: 'Opioids',
    },
    {
      id: 'aha-opioid-cardiac-arrest',
      type: 'article',
      title: 'Opioid-Associated Out-of-Hospital Cardiac Arrest',
      authors: ['American Heart Association'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'toxicology-poison-control-guide', targetType: 'topic', relationship: 'related', label: 'Poison Control Guide' },
    { targetId: 'toxicology-antidotes', targetType: 'topic', relationship: 'related', label: 'Antidotes' },
    { targetId: 'toxicology-toxidromes', targetType: 'topic', relationship: 'related', label: 'Toxidromes' },
    { targetId: 'mental-health-substance-use', targetType: 'topic', relationship: 'see-also', label: 'Substance Use Disorders' },
  ],

  tags: {
    systems: ['neurological', 'respiratory', 'cardiovascular', 'emergency-medicine'],
    topics: ['toxicology', 'emergency-medicine', 'addiction-medicine', 'critical-care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'medicine', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default drugOverdoses;
