/**
 * Household Poisonings - Comprehensive Educational Content
 *
 * Common household toxic exposures including cleaning products,
 * medications, batteries, and other hazards found in homes.
 *
 * IMPORTANT: In any poisoning emergency, call Poison Control at 1-800-222-1222
 * or 911 for life-threatening situations.
 */

import { EducationalContent } from '../types';
import { POISON_CONTROL_NUMBER } from './types';

export const householdPoisonings: EducationalContent = {
  id: 'toxicology-household-poisonings',
  type: 'condition',
  name: 'Household Poisonings',
  alternateNames: ['Home Toxic Exposures', 'Accidental Poisonings', 'Household Chemical Injuries'],

  levels: {
    1: {
      level: 1,
      summary: `Many things in your home can be dangerous if swallowed, breathed in, or touched. If someone gets into something harmful, call Poison Control at ${POISON_CONTROL_NUMBER} right away.`,
      explanation: `## What Household Items Can Be Dangerous?

Many everyday items in your home can hurt you if used the wrong way:

**Cleaning Products:**
- Bleach and toilet bowl cleaners
- Dish soap and laundry detergent pods
- Oven cleaners
- Drain cleaners

**Medicines:**
- Pills and vitamins (especially iron vitamins)
- Cough syrup
- Pain relievers
- Prescription medications

**Other Dangerous Items:**
- Batteries (especially button batteries)
- Hand sanitizer
- Essential oils
- Antifreeze
- Pesticides and bug sprays

## Who Gets Poisoned Most Often?

**Young children** get into things the most because:
- They put everything in their mouths
- They're curious about colorful products
- They can't read warning labels
- Medicine can look like candy

## Warning Signs of Poisoning

Someone might be poisoned if they:
- Are throwing up or have diarrhea
- Are very sleepy or hard to wake up
- Are drooling a lot
- Have burns or redness around their mouth
- Are breathing strangely
- Are confused or acting weird
- Complain that something burns or hurts

## What To Do If Someone Is Poisoned

1. **Stay calm** - panicking won't help
2. **Call Poison Control** at ${POISON_CONTROL_NUMBER}
3. **Don't make them throw up** unless Poison Control tells you to
4. **Find the container** of what they got into
5. **Follow the expert's instructions**

**Call 911 instead if the person:**
- Won't wake up
- Is having trouble breathing
- Is having a seizure
- Swallowed something caustic (like drain cleaner)

## How to Keep Your Home Safe

- Keep all medicines and chemicals locked up high
- Store products in their original containers
- Put child safety locks on cabinets
- Keep purses and bags up high (they often have medicine)
- Throw away old medicines properly`,
      keyTerms: [
        { term: 'poison', definition: 'Something that can make you very sick or hurt you if you swallow, breathe, or touch it' },
        { term: 'toxic', definition: 'Another word for poisonous - something that can harm your body' },
        { term: 'childproof', definition: 'Made so children cannot easily open or get into it' },
        { term: 'container', definition: 'The bottle, box, or package that something comes in' },
      ],
      analogies: [
        'Poison Control is like having a poison expert in your phone - they can help you figure out what to do right away.',
        'Keeping medicines locked up is like keeping a guard dog - it protects children from danger.',
      ],
      examples: [
        'A 2-year-old eats some of grandma\'s heart pills that were left on the table - call Poison Control immediately.',
        'A child bites open a laundry detergent pod - call Poison Control even if they seem fine.',
        'Someone mixes bleach and ammonia while cleaning and starts coughing - get fresh air and call Poison Control.',
      ],
    },
    2: {
      level: 2,
      summary: 'Household poisonings account for over 2 million Poison Control calls annually in the US. Common exposures include medications, cleaning products, cosmetics, and batteries. Prevention through safe storage and rapid response are key.',
      explanation: `## Epidemiology of Household Poisonings

**Annual Statistics (US):**
- ~2.2 million poison center calls
- 90% occur in the home
- Children under 6: 50% of all exposures
- Most common: cosmetics/personal care, cleaning products, analgesics

**Peak times:**
- Late afternoon and evening (medication administration times)
- Holidays (visitors' medications)
- Home renovations (exposed chemicals)

## Categories of Household Toxins

### Cleaning Products

**Caustic/Corrosive Substances:**
| Product | Active Agent | pH | Injury Type |
|---------|-------------|----|----|
| Drain cleaners | Sodium hydroxide | 13-14 | Liquefactive necrosis |
| Oven cleaners | Sodium hydroxide | 12-14 | Liquefactive necrosis |
| Toilet bowl cleaners | Hydrochloric acid | <2 | Coagulative necrosis |
| Bleach | Sodium hypochlorite | 12 | Irritant |

**Detergent Pods:**
- Concentrated surfactants
- Colorful, candy-like appearance
- Causes: vomiting, respiratory distress, eye injuries
- Bimodal: toddlers and elderly with dementia

### Medications

**Most Dangerous in Children (1-2 pill kill list):**
- Calcium channel blockers
- Beta-blockers
- Tricyclic antidepressants
- Opioids
- Sulfonylureas
- Clonidine
- Camphor
- Methyl salicylate

**Common Accidental Exposures:**
- Acetaminophen
- NSAIDs
- Antihistamines
- Vitamins (especially iron)
- Cough/cold medications

### Button Batteries

**Why So Dangerous:**
- Generate electric current in moist tissue
- Creates sodium hydroxide → tissue necrosis
- Esophageal perforation within 2 hours
- Most dangerous: 20mm lithium batteries

**Clinical Presentation:**
- Dysphagia
- Drooling
- Chest pain
- Coughing with feeds
- May be initially asymptomatic

### Essential Oils

**Commonly Toxic Oils:**
- Wintergreen (methyl salicylate)
- Camphor
- Eucalyptus
- Tea tree oil
- Pennyroyal

**Effects:** CNS depression, seizures, hepatotoxicity

## Initial Assessment and Response

**Critical Information to Gather:**
1. What was the substance? (Get the container)
2. How much was taken? (Count pills, measure liquid)
3. When did it happen?
4. What symptoms are present?
5. Patient age and weight
6. Any interventions already done

**Do NOT Induce Vomiting:**
- Caustic substances (re-injury)
- Hydrocarbons (aspiration risk)
- Sharp objects (perforation)
- Most poisonings (not beneficial)

**When to Call 911 vs Poison Control:**
| Call 911 | Call Poison Control |
|----------|---------------------|
| Unresponsive | Alert and no symptoms |
| Seizures | Minor symptoms |
| Difficulty breathing | Questions about toxicity |
| Caustic ingestion with symptoms | Unknown substance identification |
| Intentional overdose | Prevention questions |

## Prevention Strategies

**Safe Storage:**
- Original containers with child-resistant caps
- Locked cabinet or high shelf (>4 feet)
- Separate medications from other products
- Never call medicine "candy"

**Visitor Safety:**
- "Grandparent precautions"
- Purse/bag storage
- Medication reminder when guests leave

**Emergency Preparedness:**
- Post Poison Control number: ${POISON_CONTROL_NUMBER}
- Program into all phones
- Know location of product containers`,
      keyTerms: [
        { term: 'caustic', definition: 'A chemical that can burn or corrode living tissue; strong acids or bases', pronunciation: 'KAW-stik' },
        { term: 'liquefactive necrosis', definition: 'Tissue death caused by bases that dissolve tissue into liquid; more severe injury', pronunciation: 'li-KWEH-fak-tiv neh-KROH-sis' },
        { term: 'coagulative necrosis', definition: 'Tissue death caused by acids that form a protective layer; limits penetration', pronunciation: 'ko-AG-yoo-la-tiv' },
        { term: 'surfactant', definition: 'Substance that breaks surface tension; active cleaning ingredient in detergents', pronunciation: 'sur-FAK-tant' },
        { term: 'button battery', definition: 'Small disc-shaped batteries used in electronics; extremely dangerous if swallowed' },
      ],
      analogies: [
        'Button batteries in the esophagus are like leaving a battery on wet metal - it creates a circuit that causes burns.',
        'Caustic substances work like chemical fire - they keep burning until washed away or neutralized.',
      ],
      clinicalNotes: 'The "one pill can kill" concept is critical for pediatric exposures. Button battery ingestion is a true emergency requiring immediate X-ray and likely endoscopic removal if lodged in esophagus.',
    },
    3: {
      level: 3,
      summary: 'Household poisoning management requires understanding toxin-specific mechanisms, pharmacokinetics, and evidence-based decontamination strategies. Key concepts include toxic thresholds, absorption prevention, and risk stratification for disposition.',
      explanation: `## Toxicological Principles in Household Exposures

### Dose-Response Relationships

**Toxic Thresholds for Common Agents:**
| Agent | Toxic Dose | Lethal Dose | Notes |
|-------|------------|-------------|-------|
| Acetaminophen | >150 mg/kg | >500 mg/kg | Plot on Rumack-Matthew nomogram |
| Aspirin | >150 mg/kg | >500 mg/kg | Check serial levels |
| Iron (elemental) | >20 mg/kg | >60 mg/kg | GI symptoms at lower doses |
| Ethylene glycol | >0.1 mL/kg | >1.5 mL/kg | Early intervention critical |
| Methanol | >0.1 mL/kg | >1-2 mL/kg | Similar to ethylene glycol |

### Gastrointestinal Decontamination

**Activated Charcoal:**
- Mechanism: Adsorbs toxins in GI tract
- Dose: 1 g/kg (max 50g adult)
- Timing: Most effective <1 hour, consider up to 2 hours
- Contraindications:
  - Caustic ingestion
  - Altered mental status (aspiration risk)
  - Anticipated endoscopy
  - Substances not adsorbed (iron, lithium, alcohols)

**Whole Bowel Irrigation:**
- Polyethylene glycol electrolyte solution (PEG-ELS)
- Rate: 500 mL/h (child) to 2 L/h (adult)
- Indications:
  - Sustained-release medications
  - Drug packets ("body stuffing/packing")
  - Heavy metals (iron, lead)
  - Enteric-coated formulations
- Endpoint: Clear rectal effluent

**Gastric Lavage:**
- Rarely indicated in modern practice
- Consider only if:
  - Life-threatening ingestion
  - Within 1 hour of ingestion
  - No contraindications
- Complications: Aspiration, esophageal injury

### Specific Household Toxin Management

#### Caustic Ingestions

**Pathophysiology:**
- Acids (pH <2): Coagulative necrosis, self-limiting
- Bases (pH >12): Liquefactive necrosis, progressive
- Tissue injury within seconds

**Grading of Caustic Injury:**
| Grade | Endoscopic Findings | Management |
|-------|---------------------|------------|
| 1 | Mucosal edema, erythema | Observation, advance diet |
| 2a | Friability, hemorrhage, erosions | NPO, close monitoring |
| 2b | Circumferential injury | High stricture risk |
| 3 | Deep ulceration, necrosis | Surgery consideration |

**Management:**
- Dilution: Only if immediate (<30 min), small volume water
- No neutralization (exothermic reaction)
- NPO, IV access, pain control
- EGD within 12-24 hours (avoid 5-15 days: perforation risk)
- CT chest/abdomen if perforation suspected

#### Button Battery Esophageal Impaction

**Mechanism of Injury:**
- External current generates hydroxide ions at negative pole
- Alkaline injury with liquefactive necrosis
- Injury in <15 minutes, perforation in <2 hours

**Management Algorithm:**
1. Immediate X-ray (PA and lateral)
2. If esophageal: EMERGENCY endoscopy (<2 hours)
3. Honey or sucralfate while awaiting procedure (viscous protective barrier)
4. If gastric: Usually can observe, remove if symptomatic or present >48h
5. Post-removal: Evaluate for fistula (aortoesophageal, tracheoesophageal)

#### Detergent Pod Ingestion

**Clinical Features:**
- Ocular: Chemical conjunctivitis, corneal injury
- Respiratory: Stridor, wheezing (surfactant aspiration)
- GI: Vomiting, drooling
- CNS: Lethargy (concentrated exposure)

**Management:**
- Decontamination: Remove residue, copious water irrigation
- Supportive care
- Monitor for respiratory compromise
- Ophthalmology if eye exposure

### Medication Overdose Management

#### Acetaminophen

**Toxicokinetics:**
- Absorption: 0.5-1 hour (immediate release)
- Metabolism: Glucuronidation, sulfation (90%), CYP2E1 (10%)
- Toxic metabolite: NAPQI (N-acetyl-p-benzoquinone imine)
- Normally detoxified by glutathione

**Risk Assessment:**
- Single acute ingestion: >150 mg/kg potentially toxic
- Plot 4-hour level on Rumack-Matthew nomogram
- Chronic ingestion: Modified criteria (200 mg/kg/day or symptoms)

**N-Acetylcysteine (NAC):**
- Mechanism: Glutathione precursor and substitute
- Most effective within 8 hours
- Still beneficial up to 24+ hours
- 21-hour IV protocol or 72-hour oral protocol

#### Iron

**Stages of Iron Toxicity:**
| Stage | Time | Features |
|-------|------|----------|
| 1 | 0-6h | GI: Vomiting, diarrhea, hematemesis |
| 2 | 6-24h | Quiescent phase (apparent improvement) |
| 3 | 12-48h | Systemic: Shock, metabolic acidosis, hepatic failure |
| 4 | 2-5d | Hepatotoxicity peak |
| 5 | 2-8w | GI strictures |

**Treatment:**
- Activated charcoal: NOT effective (iron not adsorbed)
- Whole bowel irrigation: If tablets visible on X-ray
- Deferoxamine: Chelation for significant ingestions
- Serum iron >500 mcg/dL or symptomatic: Treat

### Risk Stratification and Disposition

**Home Observation Criteria:**
- Non-toxic ingestion confirmed
- Asymptomatic or minimal symptoms
- Reliable caregiver
- Access to transportation
- Time since ingestion exceeds expected toxicity onset

**Admission Criteria:**
- Symptomatic patient
- Delayed-toxicity agent (acetaminophen, sustained-release)
- Need for specific antidote or monitoring
- Intentional ingestion (psychiatric hold)
- Unreliable follow-up`,
      keyTerms: [
        { term: 'toxic threshold', definition: 'The dose above which poisoning symptoms or organ damage are expected to occur' },
        { term: 'activated charcoal', definition: 'Highly porous carbon that adsorbs many toxins in the GI tract, preventing systemic absorption' },
        { term: 'whole bowel irrigation', definition: 'Using polyethylene glycol solution to flush the entire GI tract; used for sustained-release meds and metals' },
        { term: 'NAC', definition: 'N-acetylcysteine; glutathione precursor used as antidote for acetaminophen toxicity' },
        { term: 'deferoxamine', definition: 'Chelating agent that binds iron, forming ferrioxamine complex excreted in urine', pronunciation: 'de-FER-ox-a-meen' },
        { term: 'Rumack-Matthew nomogram', definition: 'Graph used to determine acetaminophen toxicity risk based on serum level and time since ingestion' },
      ],
      clinicalNotes: 'Key principle: The time window for effective GI decontamination is narrow. For most ingestions, activated charcoal is only beneficial within 1-2 hours. Focus should shift to supportive care and specific antidotes based on the toxin involved.',
    },
    4: {
      level: 4,
      summary: 'Advanced household toxicology requires integration of pharmacokinetic modeling, quantitative risk assessment, and evidence-based protocols for decontamination, enhanced elimination, and antidote therapy. Understanding cellular mechanisms of toxicity guides optimal management.',
      explanation: `## Advanced Pharmacokinetic Considerations

### First-Order vs Zero-Order Kinetics

**First-Order Kinetics (Most drugs):**
- Rate of elimination proportional to concentration
- Constant half-life
- Level decreases by constant percentage per unit time
- Predictable clearance

**Zero-Order (Saturation) Kinetics:**
- Elimination pathways saturated
- Constant amount eliminated per unit time
- Half-life increases with concentration
- Agents: Ethanol, salicylates (high doses), phenytoin

**Clinical Implications:**
- Zero-order agents require serial levels
- Underestimation of toxicity if assuming first-order
- Enhanced elimination more beneficial in zero-order

### Acetaminophen: Advanced Management

**Modified Rumack-Matthew Nomogram:**
- Standard line: 150 mcg/mL at 4 hours
- Treatment line lowered in some protocols (100 or 200 line)
- Not valid for:
  - Time of ingestion unknown
  - Chronic/repeated supratherapeutic ingestion
  - Extended-release formulations
  - Massive ingestion (>32g)

**High-Risk Acetaminophen Scenarios:**

*Massive Ingestion (>32g or >500 mg/kg):*
- May exceed NAC's ability to regenerate glutathione
- Consider high-dose NAC protocol
- Serial levels may remain elevated longer
- Prolonged NAC therapy

*Chronic Ingestion:*
- Rumack-Matthew nomogram NOT applicable
- Risk factors: Alcoholism, enzyme-inducing drugs, malnutrition
- Consider treatment if:
  - >150-200 mg/kg/day over 24h
  - Any detectable acetaminophen with elevated ALT
  - Symptomatic

**NAC Protocol Optimization:**
- IV preferred if:
  - Vomiting
  - Altered mental status
  - Hepatic failure
  - Pregnancy
- Continue NAC until:
  - ALT normalizing or peaked
  - INR <2
  - Acetaminophen undetectable
  - Clinically improving

### Caustic Injury: Detailed Pathophysiology

**Alkali Injury Mechanism:**
1. Saponification of fats
2. Protein denaturation
3. Thrombosis of blood vessels
4. Progressive tissue destruction
5. No protective eschar formation

**Acid Injury Mechanism:**
1. Coagulation of protein
2. Eschar formation (limits penetration)
3. Pylorospasm concentrates injury distally
4. Generally less severe than alkali

**Prognostic Factors:**
- Concentration (>10% worse)
- Volume ingested
- Contact time
- Physical form (granular worse than liquid)
- Intentional ingestion (larger volumes)

**Long-term Complications:**
- Stricture formation (weeks to months)
- Increased esophageal cancer risk
- Need for repeated dilations
- Possible esophagectomy

### Button Battery: Detailed Injury Timeline

**Minute-by-Minute Progression:**
- 15 min: pH reaches 12 at negative pole
- 30 min: Burns through mucosa
- 2 h: Full-thickness burn possible
- 4-8 h: Perforation risk increases significantly
- Days: Fistula formation (aortic, tracheal)

**Aortoesophageal Fistula:**
- Most feared complication
- Mortality >50%
- Presents with sentinel bleed followed by massive hemorrhage
- High-risk location: Battery impaction at aortic arch level

**Honey Protocol (Emerging evidence):**
- 10 mL honey every 10 minutes while awaiting endoscopy
- Mechanism: Viscous barrier, weak acidity
- Alternative: Sucralfate
- NOT for infants <12 months (botulism risk)

### Toxic Alcohols: Detailed Assessment

**Osmol Gap Calculation:**
\`\`\`
Calculated Osm = 2(Na) + Glucose/18 + BUN/2.8
Osmol Gap = Measured Osm - Calculated Osm
Normal: <10-15 mOsm/kg
\`\`\`

**Contribution to Osmol Gap:**
- Ethanol: 1.0 mOsm per 4.6 mg/dL
- Methanol: 1.0 mOsm per 3.2 mg/dL
- Ethylene glycol: 1.0 mOsm per 6.2 mg/dL
- Isopropanol: 1.0 mOsm per 6.0 mg/dL

**Anion Gap Evolution:**
| Alcohol | Initial | Over Time |
|---------|---------|-----------|
| Methanol | High OG, normal AG | High AG (formic acid) |
| Ethylene glycol | High OG, normal AG | High AG (glycolic acid) |
| Isopropanol | High OG | No AG (no acidic metabolites) |

**Fomepizole vs Ethanol:**
| Factor | Fomepizole | Ethanol |
|--------|------------|---------|
| ADH affinity | 8,000x > EG | Competitive |
| Dosing | Fixed protocol | Continuous infusion |
| CNS effects | Minimal | Intoxication |
| ICU monitoring | May avoid | Usually required |
| Cost | ~$1,000/vial | Inexpensive |
| Dialysis interaction | Dose during dialysis | Dose increases needed |

### Enhanced Elimination Strategies

**Hemodialysis Indications in Household Poisoning:**

*Methanol/Ethylene Glycol:*
- Level >50 mg/dL (some say >25 with acidosis)
- Metabolic acidosis (pH <7.25-7.30)
- Visual disturbance (methanol)
- Renal failure (ethylene glycol)
- End-organ damage

*Salicylates:*
- Level >100 mg/dL (acute)
- Clinical toxicity regardless of level
- Altered mental status
- Pulmonary edema
- Renal failure
- Fluid overload limiting bicarb

*Lithium:*
- Level >4 mEq/L with symptoms
- Renal impairment
- Unable to tolerate fluids

**Urinary Alkalinization:**
- Mechanism: Ion trapping of weak acids in alkaline urine
- Target urine pH: 7.5-8.0
- Indications: Salicylates, methotrexate, phenobarbital
- Monitor: Potassium (depleted rapidly)

### Pediatric Considerations

**One Pill Can Kill (Expanded List):**
| Drug Class | Example | Mechanism | Toxic Dose |
|------------|---------|-----------|------------|
| CCB | Verapamil | Bradycardia, shock | 1 tablet |
| Beta-blocker | Propranolol | Bradycardia, hypoglycemia | 1-2 tablets |
| TCA | Amitriptyline | Arrhythmia, seizures | 1 tablet |
| Opioid | Methadone | Respiratory depression | 1 tablet |
| Sulfonylurea | Glipizide | Hypoglycemia | 1 tablet |
| Clonidine | Catapres | Bradycardia, AMS | 1 patch |
| Camphor | Camphorated oil | Seizures | 1 teaspoon |
| Methyl salicylate | Oil of wintergreen | Salicylate toxicity | 1 teaspoon |

**Body Weight Calculations:**
- Always calculate mg/kg dose
- Use actual body weight
- Consider "worst-case" scenario (all missing pills ingested)
- Lean body weight for lipophilic drugs in obesity`,
      keyTerms: [
        { term: 'zero-order kinetics', definition: 'Drug elimination at constant rate regardless of concentration; occurs when metabolic pathways are saturated' },
        { term: 'osmol gap', definition: 'Difference between measured and calculated serum osmolality; elevated with toxic alcohols before metabolism' },
        { term: 'anion gap', definition: 'Difference between measured cations and anions; elevated with accumulation of acidic metabolites' },
        { term: 'fomepizole', definition: 'Alcohol dehydrogenase inhibitor used to prevent metabolism of toxic alcohols to dangerous metabolites', pronunciation: 'foe-MEP-ih-zole' },
        { term: 'urinary alkalinization', definition: 'Increasing urine pH to trap ionized weak acids in renal tubules, enhancing elimination' },
        { term: 'ion trapping', definition: 'Principle where ionized molecules cannot cross lipid membranes; basis for urinary alkalinization' },
      ],
      clinicalNotes: 'Key clinical decisions: (1) Always calculate osmol gap early in suspected toxic alcohol ingestion - a normal gap does not rule out late presentation. (2) In massive acetaminophen ingestion, standard NAC protocols may be insufficient. (3) Button battery in esophagus is a surgical emergency - do not delay for subspecialty consultation.',
    },
    5: {
      level: 5,
      summary: 'Expert-level household toxicology integrates molecular mechanisms, current research, and systems-based approaches to optimize patient outcomes. Understanding rare complications, medicolegal considerations, and public health implications guides comprehensive care.',
      explanation: `## Molecular Mechanisms of Household Toxins

### Acetaminophen Hepatotoxicity: Cellular Level

**NAPQI Formation and Injury:**
1. CYP2E1 (and CYP1A2, CYP3A4) oxidizes acetaminophen to NAPQI
2. NAPQI normally conjugated by glutathione
3. Glutathione depletion (~70% threshold) allows:
   - NAPQI binding to cellular proteins
   - Mitochondrial dysfunction
   - Oxidative stress and lipid peroxidation
   - ATP depletion
   - Hepatocyte necrosis

**Zone 3 Predominance:**
- Centrilobular necrosis pattern
- Higher CYP2E1 concentration in zone 3
- Lower oxygen tension exacerbates injury
- Lower glutathione reserves

**Risk Modifiers:**
- CYP2E1 induction: Chronic alcohol, isoniazid
- Glutathione depletion: Malnutrition, HIV, chronic alcohol
- Age: Infants may have some protection (immature CYP)
- Genetics: CYP2E1 polymorphisms

### Caustic Injury: Tissue-Level Events

**Alkali Saponification:**
1. OH- ions extract protons from tissue water
2. Disruption of collagen crosslinks
3. Emulsification of membrane lipids
4. Denaturation of structural proteins
5. Thrombosis of submucosal vessels
6. No limiting eschar - continued penetration

**Timeline of Healing:**
- Days 1-2: Acute inflammation, necrosis
- Days 3-14: Granulation tissue formation
- Days 5-15: DANGER ZONE - weakest, highest perforation risk
- Weeks 3-4: Fibroblast proliferation begins
- Weeks to months: Collagen deposition, stricture formation

**Stricture Predictors:**
- Grade 3 injury: >75% stricture rate
- Circumferential grade 2b: ~50% stricture rate
- Length of injury correlates with stricture risk
- Multiple sites increase complications

### Button Battery: Electrochemical Mechanism

**Electrochemical Circuit:**
- Anode (negative pole): Electron release
- Cathode (positive pole): Electron acceptance
- Tissue acts as electrolyte (salt bridge)
- Current flows through moist tissue

**Reactions at Negative Pole:**
\`\`\`
H2O + e- → 1/2 H2 + OH-
\`\`\`
- Hydroxide ion generation
- Rapid pH increase (>12 within 15 minutes)
- Alkaline tissue necrosis

**Battery Position Matters:**
- Negative pole orientation determines injury location
- Double-disc appearance on AP X-ray
- Step-off on lateral view
- Newer, larger (20mm) lithium batteries most dangerous

### Advanced Management Controversies

**Activated Charcoal: Evolving Evidence**

*When It Works:*
- High adsorption capacity toxin
- Within 1-2 hours of ingestion
- Alert patient or protected airway
- Toxin still in stomach

*Questionable Benefit:*
- Late presentation (>2 hours)
- Already symptomatic (redistribution)
- Single-dose vs multiple-dose protocols

*MDAC (Multiple-Dose Activated Charcoal):*
- Creates concentration gradient ("gastrointestinal dialysis")
- Proven benefit: Carbamazepine, dapsone, phenobarbital, quinine, theophylline
- Dose: 0.5 g/kg every 4 hours
- Complications: Aspiration, charcoal bezoar with WBI

**Ipecac: Historical Perspective**
- 2003 AAP recommendation against home use
- 2004 AAPCC removed from recommendations
- Concerns: Delayed hospital care, aspiration, ineffectiveness
- No longer manufactured or recommended

### Rare but Critical Household Exposures

**Hydrogen Fluoride (Rust Removers, Wheel Cleaners):**
- Penetrates deeply before pain develops
- Systemic fluoride toxicity
- Hypocalcemia, hypomagnesemia, hyperkalemia
- Treatment: Calcium gluconate gel, systemic calcium, dialysis

**Chromic Acid (Some Metal Cleaners):**
- Hexavalent chromium is carcinogenic
- Oxidative tissue damage
- Acute renal failure
- Treat with ascorbic acid (reduces Cr6+ to less toxic Cr3+)

**Boric Acid (Roach Killer):**
- "Boiled lobster" skin appearance
- GI, CNS, and renal toxicity
- Hemodialysis if symptomatic

**Zinc Phosphide (Rodenticides):**
- Releases phosphine gas with gastric acid
- Garlic/fish odor
- Multi-organ failure
- No specific antidote

### Medicolegal Considerations

**Documentation Requirements:**
- Exact product identification
- Estimated amount ingested
- Time of ingestion
- Circumstances (accidental vs intentional)
- Witnesses and their reliability
- Chain of custody for toxicology specimens

**Intentional Ingestion:**
- Psychiatric evaluation required
- Safety assessment before discharge
- Social work involvement
- Reporting requirements (child/elder abuse)

**Child Protective Services Considerations:**
- Repeated "accidental" exposures
- Neglectful supervision
- Munchausen by proxy (deliberate poisoning)
- Home safety assessment

### Public Health Implications

**Post-Market Surveillance:**
- Poison center data identifies product hazards
- Packaging regulation (CPSC)
- Detergent pod packaging changes post-2013 alerts
- Button battery warning campaigns

**Prevention Initiatives:**
- Safe Kids Worldwide programs
- Medication safety packaging
- Safe storage messaging
- Up and Away campaign

**Regulatory Impact:**
- Consumer Product Safety Commission enforcement
- FDA adverse event reporting
- Product recalls based on poison center signals

### Future Directions and Research

**Novel Antidotes:**
- 4-methylpyrazole (fomepizole) analogues
- Lipid emulsion therapy expansion
- Targeted molecular antidotes

**Point-of-Care Testing:**
- Rapid acetaminophen assays
- Toxic alcohol screening
- Home testing devices

**Telemedicine in Toxicology:**
- Video assessment capabilities
- Remote guidance for decontamination
- Follow-up monitoring

**Artificial Intelligence:**
- Product identification from images
- Risk stratification algorithms
- Predictive toxicity modeling

### Systems-Based Quality Improvement

**Poison Center Utilization Metrics:**
- Time to first call
- Compliance with recommendations
- Outcome tracking
- Cost-effectiveness analysis

**Hospital Integration:**
- Poison center notification protocols
- Antidote availability
- Toxicology consultation access
- Transfer agreements for complex cases

**Community Outreach:**
- Poison prevention education
- Medication take-back programs
- Safe storage campaigns
- Language-appropriate materials`,
      keyTerms: [
        { term: 'NAPQI', definition: 'N-acetyl-p-benzoquinone imine; toxic acetaminophen metabolite that causes hepatocellular injury when glutathione depleted', pronunciation: 'NAP-kwee' },
        { term: 'centrilobular necrosis', definition: 'Zone 3 hepatocyte death pattern characteristic of acetaminophen toxicity due to higher CYP concentration' },
        { term: 'saponification', definition: 'Conversion of tissue fats to soap by alkali; mechanism of alkaline caustic injury' },
        { term: 'MDAC', definition: 'Multiple-dose activated charcoal; repeated charcoal dosing to enhance elimination of certain drugs' },
        { term: 'electrochemical injury', definition: 'Tissue damage from electrical current; mechanism of button battery injury' },
        { term: 'gastrointestinal dialysis', definition: 'Concept that repeated charcoal creates concentration gradient, drawing drug from blood into GI tract' },
      ],
      clinicalNotes: `Expert clinical pearls:

1. **Acetaminophen massive ingestion:** Standard NAC protocols may be insufficient. Consider extended duration, higher doses, and early liver transplant evaluation if encephalopathy develops.

2. **Button battery management evolution:** The honey/sucralfate protocol represents a paradigm shift - active intervention while awaiting definitive removal.

3. **Caustic ingestion timing:** EGD between 12-24 hours; too early risks incomplete injury assessment, too late (5-15 days) risks perforation during healing phase.

4. **Toxic alcohol osmol/anion gap:** A normal osmol gap does not exclude toxicity - if metabolism has occurred, osmol gap falls as anion gap rises.

5. **Pediatric one-pill-can-kill:** Maintain high vigilance; assume maximum ingestion when pill count uncertain; extended observation for sustained-release.`,
    },
  },

  media: [
    {
      id: 'household-poisoning-prevention',
      type: 'diagram',
      filename: 'household-poisoning-prevention.svg',
      title: 'Household Poisoning Prevention Checklist',
      description: 'Room-by-room guide to poison-proofing a home',
    },
    {
      id: 'button-battery-algorithm',
      type: 'diagram',
      filename: 'button-battery-management.svg',
      title: 'Button Battery Ingestion Management Algorithm',
      description: 'Decision tree for button battery exposure management',
    },
  ],

  citations: [
    {
      id: 'aapcc-annual-report',
      type: 'article',
      title: 'Annual Report of the American Association of Poison Control Centers',
      authors: ['Gummin, D.D.', 'et al.'],
      source: 'Clinical Toxicology',
      url: 'https://www.aapcc.org/annual-reports',
      license: 'Open Access',
    },
    {
      id: 'goldfrank-household',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies',
      source: 'McGraw-Hill',
      chapter: 'Principles of Managing the Poisoned Patient',
    },
    {
      id: 'button-battery-guidelines',
      type: 'article',
      title: 'Button Battery Ingestion: Triage and Treatment Guideline',
      authors: ['National Capital Poison Center'],
      source: 'National Capital Poison Center',
      url: 'https://www.poison.org/battery',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'toxicology-poison-control-guide', targetType: 'topic', relationship: 'related', label: 'Poison Control Guide' },
    { targetId: 'toxicology-drug-overdoses', targetType: 'topic', relationship: 'related', label: 'Drug Overdoses' },
    { targetId: 'toxicology-antidotes', targetType: 'topic', relationship: 'related', label: 'Antidotes' },
    { targetId: 'pediatric-safety', targetType: 'topic', relationship: 'see-also', label: 'Pediatric Safety' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hepatic', 'emergency-medicine'],
    topics: ['toxicology', 'pediatrics', 'prevention', 'patient-education'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'pediatrics', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default householdPoisonings;
