/**
 * Alcohol Toxicity - Comprehensive Educational Content
 *
 * Ethanol intoxication, withdrawal, and toxic alcohol ingestions
 * (methanol, ethylene glycol, isopropanol).
 *
 * IMPORTANT: In any poisoning emergency, call 911 immediately.
 * Poison Control: 1-800-222-1222
 */

import { EducationalContent } from '../types';
import { POISON_CONTROL_NUMBER } from './types';

export const alcoholToxicity: EducationalContent = {
  id: 'toxicology-alcohol-toxicity',
  type: 'condition',
  name: 'Alcohol Toxicity',
  alternateNames: ['Ethanol Intoxication', 'Toxic Alcohols', 'Alcohol Poisoning', 'Methanol Poisoning'],

  levels: {
    1: {
      level: 1,
      summary: 'Alcohol poisoning happens when someone drinks too much alcohol too fast. Some other types of alcohol (like antifreeze or windshield wiper fluid) are extremely dangerous even in small amounts.',
      explanation: `## What Is Alcohol Poisoning?

Drinking too much alcohol too quickly can overwhelm your body. Your liver can only process about one drink per hour. Drinking faster than this causes alcohol to build up in your blood.

**One standard drink equals:**
- 12 oz beer
- 5 oz wine
- 1.5 oz hard liquor (like vodka or whiskey)

## Warning Signs of Alcohol Poisoning

**Call 911 if someone:**
- Won't wake up or can't stay awake
- Is breathing very slowly (less than 8 breaths per minute)
- Has long pauses between breaths
- Has blue or pale skin
- Is throwing up while unconscious
- Is having seizures
- Has very cold skin

## What To Do

1. **Call 911 immediately** - don't wait for all symptoms
2. **Stay with them** - don't leave them alone
3. **Keep them awake** if possible
4. **Keep them sitting up** - if they must lie down, put them on their side
5. **Keep them warm** with a blanket
6. **Don't give them coffee** - it doesn't help and can dehydrate them
7. **Don't make them throw up** - they could choke

## Dangerous "Other" Alcohols

Some products contain alcohols that are extremely dangerous:

**Antifreeze (ethylene glycol):**
- Sweet taste but deadly
- Just a few ounces can kill
- Found in car antifreeze, windshield wiper fluid

**Methanol (wood alcohol):**
- Found in windshield fluid, fuel, paint strippers
- Can cause blindness
- Very small amounts are lethal

**Rubbing alcohol (isopropanol):**
- More toxic than beer/wine alcohol
- Found in hand sanitizer, rubbing alcohol

**If someone drinks any of these: CALL 911 IMMEDIATELY**

## Why Alcohol Is Dangerous

- Your brain controls breathing - alcohol slows this down
- You can choke on your own vomit while unconscious
- Body temperature drops dangerously
- Blood sugar can get very low
- Heart rhythm can become irregular

## Keeping Safe

- Eat food before and while drinking
- Pace yourself - no more than one drink per hour
- Alternate with water
- Never leave a drunk person alone
- Know the signs of alcohol poisoning
- Keep dangerous products locked away from children`,
      keyTerms: [
        { term: 'alcohol poisoning', definition: 'When you drink so much alcohol that your body can\'t handle it safely' },
        { term: 'intoxication', definition: 'Being affected by alcohol - from mild tipsiness to dangerous poisoning' },
        { term: 'antifreeze', definition: 'A liquid used in cars that contains a type of alcohol (ethylene glycol) that is deadly to drink' },
        { term: 'metabolism', definition: 'How your body breaks down and gets rid of things like alcohol' },
      ],
      analogies: [
        'Your liver processing alcohol is like a checkout line at a store - if too many items (drinks) come through too fast, there\'s a backup.',
        'Alcohol poisoning is like flooding an engine - your body gets overwhelmed and can\'t function properly.',
      ],
      examples: [
        'A college student passes out at a party and their friends can\'t wake them up - call 911 immediately.',
        'A toddler drinks colorful antifreeze from an open container - call 911 immediately, even if they seem fine.',
        'Someone at a party has had many drinks and is now breathing slowly with pale skin - don\'t assume they\'re just "sleeping it off."',
      ],
    },
    2: {
      level: 2,
      summary: 'Alcohol-related toxicity includes acute ethanol intoxication, alcohol withdrawal syndrome, and toxic alcohol ingestions (methanol, ethylene glycol). Understanding the differences between these conditions is critical for appropriate management.',
      explanation: `## Types of Alcohol-Related Toxicity

### Acute Ethanol Intoxication

**Blood Alcohol Levels and Effects:**
| BAC (mg/dL) | Effects |
|-------------|---------|
| 20-50 | Relaxation, mild impairment |
| 50-100 | Reduced inhibition, impaired judgment |
| 100-200 | Obvious intoxication, ataxia, slurred speech |
| 200-300 | Marked intoxication, vomiting, stupor |
| 300-400 | Coma, respiratory depression |
| >400 | Potentially fatal |

*Note: Chronic drinkers may tolerate higher levels*

**Complications:**
- Aspiration pneumonia
- Hypothermia
- Hypoglycemia (especially in children)
- Trauma from falls
- Rhabdomyolysis

### Alcohol Withdrawal Syndrome

**Timeline:**
| Phase | Time After Last Drink | Symptoms |
|-------|----------------------|----------|
| Minor | 6-24 hours | Anxiety, tremor, insomnia, GI upset |
| Seizures | 12-48 hours | Generalized tonic-clonic |
| Hallucinations | 12-48 hours | Visual, tactile, or auditory |
| Delirium Tremens | 48-96 hours | Confusion, autonomic instability, hallucinations |

**Risk Factors for Severe Withdrawal:**
- Prior withdrawal seizures or DTs
- Older age
- Heavy, prolonged drinking
- Concurrent medical illness
- High BAC at presentation

### Toxic Alcohols

**Types and Sources:**
| Alcohol | Common Sources | Toxic Metabolite |
|---------|---------------|------------------|
| Methanol | Windshield fluid, fuel, moonshine | Formic acid |
| Ethylene glycol | Antifreeze, coolants | Glycolic/oxalic acid |
| Isopropanol | Rubbing alcohol, hand sanitizer | Acetone |

**Key Differences from Ethanol:**
- Can cause severe toxicity with small amounts
- Delayed symptoms (hours after ingestion)
- Specific organ damage patterns
- Require antidote treatment

## Toxic Alcohol Details

### Methanol

**Mechanism:**
- Metabolized by alcohol dehydrogenase to formaldehyde
- Formaldehyde → formic acid (via aldehyde dehydrogenase)
- Formic acid causes:
  - Metabolic acidosis
  - Retinal toxicity (blindness)
  - Basal ganglia damage

**Clinical Presentation:**
- Initial: Intoxication (like ethanol)
- 12-24 hours later:
  - Headache, nausea, vomiting
  - Visual disturbances ("snowfield" vision)
  - Abdominal pain
  - Metabolic acidosis

**Dangerous Amount:**
- 15-30 mL can be fatal in adults
- Children: Much smaller amounts dangerous

### Ethylene Glycol

**Mechanism:**
- Metabolized to glycolic acid → glyoxylic acid → oxalic acid
- Calcium oxalate crystal formation
- Causes:
  - Severe metabolic acidosis
  - Acute kidney injury
  - Cardiopulmonary effects

**Clinical Stages:**
| Stage | Time | Effects |
|-------|------|---------|
| 1 | 0-12h | CNS depression, apparent intoxication |
| 2 | 12-24h | Cardiopulmonary: Tachycardia, hypertension, pulmonary edema |
| 3 | 24-72h | Renal failure, flank pain, oliguria |

**Dangerous Amount:**
- 1-2 mL/kg can be fatal
- Sweet taste makes accidental ingestion more likely

### Isopropanol

**Mechanism:**
- Metabolized to acetone (not acidic metabolite)
- No anion gap metabolic acidosis
- Causes:
  - Profound CNS depression
  - GI irritation/hemorrhage
  - Hypotension

**Presentation:**
- Similar to severe ethanol intoxication
- Acetone odor on breath
- Fruity/sweet smell
- Hemorrhagic gastritis

## Emergency Recognition

**When to Suspect Toxic Alcohol:**
- Unexplained metabolic acidosis
- High osmol gap
- Visual changes (methanol)
- Renal failure (ethylene glycol)
- History of antifreeze/industrial product ingestion
- Intoxication without ethanol on labs

**When to Call 911:**
- Unresponsive or very difficult to arouse
- Slow or irregular breathing
- Seizures
- Suspected toxic alcohol ingestion
- Severe withdrawal symptoms

## Prevention

**Alcohol Poisoning:**
- Pace drinking, track number of drinks
- Eat food while drinking
- Avoid drinking games
- Know personal limits
- Watch out for friends

**Toxic Alcohol Exposure:**
- Store antifreeze in locked/high cabinet
- Use bitter additives (now legally required in many areas)
- Properly label all containers
- Dispose of automotive fluids properly`,
      keyTerms: [
        { term: 'blood alcohol concentration (BAC)', definition: 'Measure of alcohol in the blood, usually expressed as mg/dL or percentage' },
        { term: 'delirium tremens', definition: 'Severe alcohol withdrawal with confusion, fever, hallucinations, and autonomic instability; can be fatal', pronunciation: 'deh-LEER-ee-um TREE-menz' },
        { term: 'osmol gap', definition: 'Difference between measured and calculated blood osmolality; elevated with toxic alcohols' },
        { term: 'anion gap', definition: 'Measure of unmeasured anions in blood; elevated in metabolic acidosis from toxic alcohols' },
        { term: 'formic acid', definition: 'Toxic metabolite of methanol that causes blindness and metabolic acidosis' },
        { term: 'calcium oxalate', definition: 'Crystals formed from ethylene glycol metabolism that damage kidneys' },
      ],
      clinicalNotes: 'Key clinical point: An intoxicated patient with metabolic acidosis and visual complaints suggests methanol; with renal failure suggests ethylene glycol. Both require urgent treatment with fomepizole or ethanol and possible dialysis.',
    },
    3: {
      level: 3,
      summary: 'Alcohol toxicity management requires understanding ethanol pharmacokinetics, withdrawal pathophysiology, and toxic alcohol metabolism. Laboratory assessment, antidote selection, and enhanced elimination guide treatment decisions.',
      explanation: `## Ethanol Pharmacology

### Pharmacokinetics
- Absorption: Rapid from GI tract (faster on empty stomach)
- Distribution: Total body water (~0.6 L/kg)
- Metabolism: Primarily hepatic via alcohol dehydrogenase
- Elimination: Zero-order kinetics (~15-20 mg/dL/hour)

### Zero-Order Kinetics
\`\`\`
Unlike most drugs:
- Constant amount eliminated per time (not constant percentage)
- Rate of elimination independent of concentration
- ~15-20 mg/dL per hour (range 10-30)
- Chronic drinkers may clear faster (enzyme induction)

Clinical implication: Can predict time to sobriety
BAC 200 mg/dL → ~10-13 hours to reach legal limit
\`\`\`

### Effects by BAC
| BAC (mg/dL) | CNS Effects | Clinical Significance |
|-------------|-------------|----------------------|
| <50 | Mild euphoria | Below legal limit |
| 80 | Legal intoxication limit | Impaired driving |
| 100-200 | Ataxia, slurred speech | Obvious intoxication |
| 200-300 | Stupor, vomiting | Risk of aspiration |
| 300-400 | Coma | Respiratory depression |
| >400 | Potentially lethal | Rarely survived without tolerance |

### Complications of Acute Intoxication

**Aspiration Pneumonia:**
- Depressed protective reflexes
- Vomiting while obtunded
- Right lower lobe predilection

**Hypoglycemia:**
- NAD+ depletion impairs gluconeogenesis
- Children particularly vulnerable
- Check glucose in all intoxicated patients

**Rhabdomyolysis:**
- Prolonged immobilization
- Direct muscle toxicity
- Check CK in obtunded patients

## Alcohol Withdrawal Syndrome

### Pathophysiology
- Chronic alcohol: GABA receptor downregulation, NMDA upregulation
- Abrupt cessation: Removal of GABA inhibition + glutamate excess
- Result: CNS hyperexcitability

### Clinical Assessment: CIWA-Ar Scale

**Clinical Institute Withdrawal Assessment for Alcohol:**
| Category | Score Range |
|----------|-------------|
| Nausea/vomiting | 0-7 |
| Tremor | 0-7 |
| Paroxysmal sweats | 0-7 |
| Anxiety | 0-7 |
| Agitation | 0-7 |
| Tactile disturbances | 0-7 |
| Auditory disturbances | 0-7 |
| Visual disturbances | 0-7 |
| Headache | 0-7 |
| Orientation/clouding | 0-4 |

**Interpretation:**
- <10: Mild withdrawal
- 10-19: Moderate withdrawal
- ≥20: Severe withdrawal, high DT risk

### Benzodiazepine Treatment

**Symptom-Triggered Protocol (CIWA-based):**
\`\`\`
CIWA ≥10: Give benzodiazepine
Options:
- Lorazepam 2-4 mg IV/PO
- Diazepam 10-20 mg IV/PO
- Chlordiazepoxide 50-100 mg PO

Reassess every hour
Goal: CIWA <10
\`\`\`

**Fixed-Dose Protocol (High-risk patients):**
- Scheduled dosing with supplemental PRN
- Used when CIWA unreliable (intubated, severe illness)

**Refractory Withdrawal:**
- Phenobarbital loading (10-20 mg/kg)
- Propofol infusion
- Dexmedetomidine (adjunct)
- ICU admission

## Toxic Alcohols

### Laboratory Assessment

**Osmol Gap Calculation:**
\`\`\`
Calculated Osm = 2(Na) + Glucose/18 + BUN/2.8
Osmol Gap = Measured Osm - Calculated Osm

Normal: <10-15 mOsm/kg

Each substance contribution per 100 mg/dL:
- Ethanol: 22 mOsm
- Methanol: 34 mOsm
- Ethylene glycol: 16 mOsm
- Isopropanol: 17 mOsm
\`\`\`

**Anion Gap:**
\`\`\`
AG = Na - (Cl + HCO3)
Normal: 8-12 mEq/L

Elevated in:
- Methanol (formic acid)
- Ethylene glycol (glycolic acid)
- NOT isopropanol (acetone not acidic)
\`\`\`

**Evolution Over Time:**
- Early: High osmol gap, normal anion gap (parent alcohol)
- Late: Low osmol gap, high anion gap (toxic metabolites)
- The "gap-gap": Sum of osmol gap and anion gap elevation remains constant

### Toxic Alcohol Management

**Antidote Selection:**
| Factor | Fomepizole | Ethanol |
|--------|------------|---------|
| Mechanism | ADH inhibitor | Competitive ADH substrate |
| Dosing | Protocol-based | Continuous infusion |
| Side effects | Minimal | Intoxication, hypoglycemia |
| ICU required | Usually not | Usually yes |
| Cost | ~$1,000/vial | Inexpensive |
| Dialysis interaction | Dose q4h during | Increase infusion rate |

**Fomepizole Protocol:**
\`\`\`
Loading: 15 mg/kg IV
Maintenance: 10 mg/kg IV q12h x 4 doses
Then: 15 mg/kg IV q12h until level undetectable

During dialysis: Give q4h (drug is dialyzed)
\`\`\`

**Ethanol Protocol:**
\`\`\`
Target level: 100-150 mg/dL
Loading: 0.6-0.8 g/kg
Maintenance: 66-154 mg/kg/hr (chronic drinkers need higher)
Monitor: Ethanol levels q1-2h
\`\`\`

### Hemodialysis Indications

**Toxic Alcohols:**
- Serum level >50 mg/dL (some say >25)
- Metabolic acidosis (pH <7.25-7.30)
- End-organ damage:
  - Visual symptoms (methanol)
  - Renal failure (ethylene glycol)
- Electrolyte abnormalities despite treatment

**Endpoints:**
- Acidosis resolved
- Toxic alcohol level undetectable
- Symptoms improving

### Specific Management Points

**Methanol:**
- Folic/folinic acid: Enhances formate metabolism (1 mg/kg IV, max 50 mg, q4-6h)
- Ophthalmology consultation if visual symptoms

**Ethylene Glycol:**
- Pyridoxine: 100 mg IV daily (cofactor for glyoxylate metabolism)
- Thiamine: 100 mg IV daily (same)
- May need dialysis even without acidosis if crystalluria/AKI

**Isopropanol:**
- Supportive care primarily
- Hemodialysis for refractory hypotension
- No antidote needed (acetone not toxic)

## Disposition Considerations

**Ethanol Intoxication:**
- Observe until BAC <100-150 mg/dL and clinically sober
- Evaluate for withdrawal risk before discharge
- Consider social work/addiction medicine referral

**Alcohol Withdrawal:**
- CIWA-based treatment can often be done on general floor
- ICU for: DTs, refractory withdrawal, significant comorbidities

**Toxic Alcohols:**
- All require admission
- ICU if: Significant acidosis, need for dialysis, altered mental status`,
      keyTerms: [
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol, revised; 10-item scale to assess withdrawal severity and guide treatment' },
        { term: 'fomepizole', definition: 'Alcohol dehydrogenase inhibitor; first-line antidote for methanol and ethylene glycol poisoning', pronunciation: 'foe-MEP-ih-zole' },
        { term: 'zero-order kinetics', definition: 'Drug elimination at constant rate regardless of concentration; applies to ethanol' },
        { term: 'osmol gap', definition: 'Difference between measured and calculated serum osmolality; elevated with unmeasured osmoles like toxic alcohols' },
        { term: 'gap-gap phenomenon', definition: 'The sum of osmol gap and anion gap elevation remains constant as toxic alcohol is metabolized to acid' },
        { term: 'ADH', definition: 'Alcohol dehydrogenase; enzyme that metabolizes ethanol and toxic alcohols' },
      ],
      clinicalNotes: 'Clinical pearls: (1) A normal osmol gap does NOT rule out toxic alcohol ingestion if presentation is late (metabolites formed). (2) Check both osmol AND anion gap. (3) Fomepizole is preferred over ethanol when available. (4) Folinic acid for methanol, pyridoxine/thiamine for ethylene glycol.',
    },
    4: {
      level: 4,
      summary: 'Advanced alcohol toxicity management requires integration of pharmacokinetic calculations, nuanced antidote selection, dialysis decision-making, and understanding of complex withdrawal presentations including benzodiazepine-refractory cases.',
      explanation: `## Advanced Ethanol Kinetics

### Widmark Equation Applications
\`\`\`
Retrograde extrapolation:
BAC(t) = BAC(0) + (elimination rate × time)

Forward calculation:
BAC(t) = BAC(0) - (elimination rate × time)

Variables:
- Elimination rate: 15-20 mg/dL/hour (average)
- Time since last drink
- Absorption complete by ~1-2 hours

Limitations:
- Assumes absorption complete
- Individual variation significant
- Legal implications for DUI cases
\`\`\`

### Metabolic Pathways
**Primary (ADH):**
\`\`\`
Ethanol → Acetaldehyde → Acetate
         ADH          ALDH
         (NAD+→NADH)  (NAD+→NADH)

NADH accumulation causes:
- Lactate accumulation
- Hypoglycemia (blocked gluconeogenesis)
- Hypertriglyceridemia
\`\`\`

**MEOS (CYP2E1):**
- Microsomal ethanol oxidizing system
- Induced by chronic alcohol use
- Produces reactive oxygen species
- Contributes to liver damage

### Clinical Correlations
**Tolerance Mechanisms:**
- Metabolic: Increased ADH/MEOS activity
- Cellular: Altered GABA receptor function
- Behavioral: Learned compensation

## Complex Withdrawal Management

### Phenobarbital in Refractory Withdrawal

**When to Use:**
- Escalating benzodiazepine requirements
- >40-50 mg lorazepam equivalents in <4 hours
- Persistent agitation despite benzodiazepines

**Loading Protocol:**
\`\`\`
Phenobarbital 10-15 mg/kg IV
Divide into 3-4 doses
Each dose over 10-20 minutes
Monitor for respiratory depression
Half-life: 80-120 hours (slow titration down)
\`\`\`

**Advantages:**
- Long half-life (auto-taper)
- Different GABA binding site
- Glutamate receptor effects

### Dexmedetomidine Considerations

**Role:** Adjunct to benzodiazepines, not monotherapy

**Mechanism:**
- Alpha-2 agonist
- Reduces sympathetic hyperactivity
- Does NOT prevent seizures

**Protocol:**
\`\`\`
0.2-0.7 mcg/kg/hr (no bolus typically)
Titrate to effect
Monitor for bradycardia, hypotension
Continue benzodiazepines
\`\`\`

### Ketamine in Withdrawal

**Rationale:**
- NMDA antagonist
- Addresses glutamate excess
- May be neuroprotective

**Evidence:**
- Case series showing benzodiazepine-sparing
- May reduce ICU length of stay
- No RCTs in withdrawal specifically

**Protocol:**
- 0.15-0.5 mg/kg/hr continuous infusion
- Combine with benzodiazepines

## Advanced Toxic Alcohol Assessment

### Osmol Gap Interpretation

**Calculating Expected Alcohol Contribution:**
\`\`\`
For each toxic alcohol:
Expected level = Osmol gap × (MW/10)

Example (Osmol gap 30):
- Methanol: 30 × 3.2 = 96 mg/dL
- Ethylene glycol: 30 × 6.2 = 186 mg/dL
- Isopropanol: 30 × 6.0 = 180 mg/dL
\`\`\`

**Osmol Gap Pitfalls:**
- Normal range varies (-10 to +14)
- Baseline may be elevated in some conditions
- Lab-to-lab variation
- Co-ingestion of ethanol affects calculation
- Timing matters (early vs late presentation)

### Anion Gap Interpretation

**Expected HCO3 Decrease:**
\`\`\`
For methanol/ethylene glycol:
1 mmol toxic alcohol → 1 mmol acid

Methanol (MW 32):
- 100 mg/dL = 31.25 mmol/L
- Should decrease HCO3 by ~31 mEq/L if all converted

Ethylene glycol (MW 62):
- 100 mg/dL = 16.1 mmol/L
- Should decrease HCO3 by ~16 mEq/L if all converted
\`\`\`

### Delta Ratio in Toxic Alcohols
\`\`\`
Delta ratio = Delta AG / Delta HCO3
             = (AG - 12) / (24 - HCO3)

In toxic alcohols:
- Should be ~1 (pure metabolic acidosis)
- Higher if concurrent metabolic alkalosis
- Lower if concurrent non-AG acidosis
\`\`\`

### Lactate in Toxic Alcohols

**Methanol:**
- True lactate elevation (formic acid blocks oxidative phosphorylation)
- L-lactate on routine assays

**Ethylene Glycol:**
- False lactate elevation common
- Glycolate cross-reacts with some lactate assays
- Use enzymatic (not colorimetric) lactate measurement
- True hyperlactatemia can also occur

## Dialysis Optimization

### Intermittent HD vs CRRT

| Factor | Intermittent HD | CRRT |
|--------|-----------------|------|
| Clearance | Higher | Lower |
| Duration | 4-6 hours typically | Continuous |
| Stability | May cause hypotension | Better tolerated |
| Antidote dosing | Give fomepizole q4h | Continuous ethanol; q4h fomepizole |
| Availability | Standard | May require ICU |

**EXTRIP Recommendations:**
- Prefer intermittent HD if tolerated
- CRRT acceptable if HD not tolerated
- Continue until:
  - Toxic alcohol undetectable
  - Acidosis resolved
  - No end-organ toxicity

### Post-Dialysis Rebound

**Mechanism:**
- Toxic alcohol redistributes from tissues
- Levels may rise after dialysis completion
- More significant with large volumes of distribution

**Management:**
- Continue fomepizole after dialysis
- Recheck levels 2-4 hours post-dialysis
- May need repeat dialysis

## Special Populations

### Pediatric Considerations

**Ethanol:**
- Lower glycogen stores → Hypoglycemia more common
- Lower tolerance
- Consider abuse/access issues

**Toxic Alcohols:**
- Often unintentional ingestion
- May not report ingestion
- Lower toxic thresholds
- Aggressive treatment indicated

### Pregnancy

**Toxic Alcohols:**
- Both fomepizole and ethanol cross placenta
- Fomepizole preferred (less fetal effects than ethanol)
- Dialysis if indicated (does not preclude)
- Obstetric consultation

**Ethanol:**
- Known teratogen
- Single exposure unlikely to cause FAS
- Document for medical-legal purposes

### Alcoholic Ketoacidosis

**Pathophysiology:**
- Decreased oral intake + vomiting → Volume depletion
- NADH accumulation → Ketogenesis
- Lactic acid accumulation

**Presentation:**
- Recent heavy drinking followed by decreased intake
- Nausea, vomiting, abdominal pain
- Anion gap acidosis
- Low-normal glucose

**Treatment:**
- IV fluids (NS then D5NS)
- Thiamine before glucose
- Correct electrolytes
- Acidosis resolves with treatment

## Wernicke-Korsakoff Syndrome

### Wernicke Encephalopathy

**Classic Triad (only 16% have all three):**
1. Encephalopathy
2. Oculomotor dysfunction (nystagmus, ophthalmoplegia)
3. Gait ataxia

**Treatment:**
\`\`\`
High-dose thiamine:
- 500 mg IV TID × 2-3 days
- Then 250 mg IV daily × 3-5 days
- Then 100 mg PO daily

Give BEFORE glucose (can precipitate/worsen)
\`\`\`

### Korsakoff Syndrome
- Anterograde and retrograde amnesia
- Confabulation
- Usually irreversible
- Develops if Wernicke's untreated`,
      keyTerms: [
        { term: 'Widmark equation', definition: 'Formula for calculating blood alcohol concentration based on amount consumed, body water, and time' },
        { term: 'MEOS', definition: 'Microsomal ethanol oxidizing system; CYP2E1-mediated alternative ethanol metabolism pathway induced by chronic drinking' },
        { term: 'phenobarbital', definition: 'Long-acting barbiturate used for benzodiazepine-refractory alcohol withdrawal' },
        { term: 'delta ratio', definition: 'Ratio of change in anion gap to change in bicarbonate; used to identify mixed acid-base disorders' },
        { term: 'EXTRIP', definition: 'Extracorporeal Treatments in Poisoning workgroup; provides evidence-based dialysis guidelines' },
        { term: 'alcoholic ketoacidosis', definition: 'Metabolic acidosis from ketone accumulation in malnourished chronic alcoholics' },
      ],
      clinicalNotes: 'Expert points: (1) Osmol gap can be falsely normal late in toxic alcohol ingestion - use both gaps. (2) Lactate may be falsely elevated in ethylene glycol due to glycolate cross-reactivity - use enzymatic assay. (3) Fomepizole q4h during dialysis. (4) Always give thiamine before glucose in alcoholics.',
    },
    5: {
      level: 5,
      summary: 'Expert-level alcohol toxicology integrates molecular mechanisms, current evidence from clinical trials, emerging therapies, and systems-level approaches. Complex decision-making includes pharmacogenomics, novel antidotes, and optimal resource utilization.',
      explanation: `## Molecular Toxicology

### ADH and ALDH Polymorphisms

**ADH1B*2:**
- Increased ADH activity
- Faster ethanol → acetaldehyde conversion
- More acetaldehyde accumulation
- Protective against alcoholism (flushing)
- Common in East Asian populations

**ALDH2*2:**
- Decreased ALDH activity
- Acetaldehyde accumulation
- Flushing, tachycardia, nausea
- Also protective against alcoholism
- ~40% East Asian prevalence

**Clinical Implications:**
- These variants may affect toxic alcohol metabolism
- Research ongoing on genotype-guided treatment
- May influence antidote selection/dosing

### Formic Acid Toxicity (Methanol)

**Cellular Mechanism:**
\`\`\`
Formic acid inhibits cytochrome c oxidase
→ Blocks mitochondrial electron transport
→ ATP depletion
→ Lactate accumulation (type B)
→ Cell death

Retinal specificity:
- High metabolic demand
- Limited anaerobic capacity
- Formate accumulates in vitreous
\`\`\`

**Formate Kinetics:**
- Folate-dependent metabolism
- Saturates at high concentrations
- Half-life ~1 hour at low levels
- Much longer at toxic levels

### Oxalate Toxicity (Ethylene Glycol)

**Calcium Oxalate Crystal Formation:**
\`\`\`
Oxalic acid + Ca2+ → CaOx crystals

Locations:
- Renal tubules (obstruction, injury)
- Myocardium (arrhythmias)
- Brain (rarely)
- Vasculature

Crystal types:
- Monohydrate (needle-shaped)
- Dihydrate (envelope-shaped)
\`\`\`

**Hypocalcemia:**
- Calcium bound by oxalate
- QT prolongation
- Tetany
- May need calcium replacement

## Emerging and Investigational Therapies

### Novel Approaches to Toxic Alcohols

**4-Methylpyrazole Analogues:**
- Research into more potent ADH inhibitors
- Longer half-life compounds
- Oral formulations with better bioavailability

**Direct Toxin Scavengers:**
- Formate-binding molecules (investigational)
- Oxalate degrading enzymes
- Currently in preclinical research

### Alcohol Use Disorder Pharmacotherapy

**FDA-Approved:**
- Naltrexone (opioid antagonist)
- Acamprosate (glutamate modulator)
- Disulfiram (ALDH inhibitor)

**Emerging:**
- Gabapentin (off-label, some evidence)
- Topiramate (off-label, some evidence)
- Baclofen (GABA-B agonist, mixed evidence)
- GLP-1 agonists (semaglutide - emerging evidence)

### Novel Withdrawal Agents

**Carbamazepine/Oxcarbazepine:**
- Voltage-gated sodium channel blockers
- Used in some European protocols
- May reduce benzodiazepine use

**Valproic Acid:**
- Multiple mechanisms
- May be adjunctive
- Hepatotoxicity limits use in liver disease

## Evidence-Based Practice Updates

### Fomepizole vs Ethanol: Current Evidence

**Systematic Review Findings:**
- No RCTs comparing directly
- Observational data favors fomepizole:
  - Fewer adverse effects
  - Simpler dosing
  - Less ICU monitoring needed
- Cost-effectiveness analyses mixed

**EXTRIP Recommendations:**
- Fomepizole first-line if available
- Ethanol acceptable alternative
- Do not delay treatment for fomepizole

### CIWA-Ar Validation

**Evidence Base:**
- Validated in inpatient medical/surgical patients
- Less validated in:
  - ICU patients
  - Intubated patients
  - Traumatic brain injury
  - Concurrent drug intoxication

**Alternatives:**
- PAWSS (Prediction of Alcohol Withdrawal Severity Scale)
- SHOT (Short Alcohol Withdrawal Scale)
- Research ongoing for biomarkers

### Phenobarbital Strategies

**Upfront Loading Approach:**
- Single-agent or primary-agent protocol
- Loading dose 10-15 mg/kg upfront
- May reduce benzodiazepine requirements
- Evidence from retrospective studies

**SICU-BARP Protocol:**
- Used in some surgical ICUs
- Phenobarbital primary agent
- Benzodiazepines for breakthrough

## Quality and Systems Issues

### Dialysis Resource Allocation

**When Toxic Alcohol Cases Surge:**
- Mass poisoning events (contaminated alcohol)
- Multiple simultaneous patients
- Prioritization based on:
  - Acidosis severity
  - Level elevation
  - End-organ damage

**Telenephrology:**
- Remote specialist consultation
- Guidance on dialysis initiation
- Protocol standardization

### Poison Center Integration

**Data for Quality Improvement:**
- Real-time surveillance of toxic alcohol cases
- Identification of contamination sources
- Outcome tracking

**Case Consultation:**
- Complex calculations assistance
- Antidote dosing guidance
- Dialysis decision support

## Medicolegal Considerations

### Blood Alcohol Evidence

**Chain of Custody:**
- Legal cases require documented chain
- Hospital samples may be challenged
- Retrograde extrapolation controversies

**Expert Testimony:**
- Widmark calculations limitations
- Individual variation
- Timing uncertainties

### Toxic Alcohol Documentation

**Medical-Legal Records:**
- Time of presentation
- Time of antidote administration
- Dialysis timing and duration
- Clinical reasoning documented
- Poison center consultation

### Impaired Healthcare Workers

**Recognition:**
- Performance issues
- Unusual behaviors
- Prescription patterns

**Reporting Requirements:**
- State-specific regulations
- Professional licensing boards
- Physician health programs

## Research Frontiers

### Biomarkers

**Alcohol Use Disorder:**
- Carbohydrate-deficient transferrin (CDT)
- Phosphatidylethanol (PEth)
- Ethyl glucuronide (EtG)/Ethyl sulfate (EtS)

**Withdrawal Prediction:**
- S-100B (glial marker)
- BDNF
- Cortisol patterns
- Research stage

### Point-of-Care Testing

**Toxic Alcohol Screens:**
- Currently limited availability
- Research into rapid assays
- Would enable faster treatment decisions

**Osmolality:**
- Freezing-point depression standard
- Vapor pressure methods less accurate
- POC osmometry development

### Precision Medicine

**Pharmacogenomic Applications:**
- ADH/ALDH genotyping feasibility
- Tailored antidote selection
- Withdrawal medication selection
- Currently research-level

### Novel Endpoints

**Clinical Trials:**
- Patient-centered outcomes
- Long-term sobriety rates
- Quality of life measures
- Healthcare utilization

**Registry Development:**
- Toxic alcohol case registries
- Withdrawal outcome databases
- Multi-center collaborations`,
      keyTerms: [
        { term: 'ADH1B/ALDH2 polymorphisms', definition: 'Genetic variants affecting alcohol metabolism; influence flushing response and alcoholism risk' },
        { term: 'cytochrome c oxidase', definition: 'Complex IV of electron transport chain; inhibited by formic acid in methanol poisoning' },
        { term: 'phosphatidylethanol', definition: 'Biomarker of chronic alcohol use formed in cell membranes; detectable for ~4 weeks after heavy drinking' },
        { term: 'PAWSS', definition: 'Prediction of Alcohol Withdrawal Severity Scale; risk stratification tool for withdrawal' },
        { term: 'GLP-1 agonists', definition: 'Glucagon-like peptide-1 receptor agonists; emerging evidence for alcohol use disorder treatment' },
        { term: 'vapor pressure osmometry', definition: 'Method for measuring osmolality; less accurate than freezing point depression for toxic alcohol detection' },
      ],
      clinicalNotes: `Expert clinical pearls:

1. **Pharmacogenomics:** ADH/ALDH polymorphisms may affect toxic alcohol metabolism kinetics - consider in refractory cases.

2. **Lactate interference:** Ethylene glycol metabolites cross-react with some lactate assays. If lactate seems discordant with clinical picture, request enzymatic lactate.

3. **Post-dialysis rebound:** Continue fomepizole after dialysis completion. Recheck levels at 2-4 hours - redistribution can cause level rise.

4. **Phenobarbital loading:** Consider upfront loading (10-15 mg/kg) in severe withdrawal rather than escalating benzodiazepines indefinitely. Long half-life provides auto-taper.

5. **Systems integration:** Poison center consultation provides real-time expert guidance, outcome tracking, and public health surveillance.

6. **Documentation:** For toxic alcohol cases, meticulous documentation of timing, calculations, and clinical reasoning is essential for medicolegal and quality purposes.`,
    },
  },

  media: [
    {
      id: 'toxic-alcohol-algorithm',
      type: 'diagram',
      filename: 'toxic-alcohol-algorithm.svg',
      title: 'Toxic Alcohol Assessment and Treatment Algorithm',
      description: 'Flowchart for evaluation and management of toxic alcohol ingestion',
    },
    {
      id: 'withdrawal-severity-scale',
      type: 'diagram',
      filename: 'ciwa-ar-scale.svg',
      title: 'CIWA-Ar Withdrawal Assessment',
      description: 'Clinical Institute Withdrawal Assessment scale visualization',
    },
  ],

  citations: [
    {
      id: 'goldfrank-alcohols',
      type: 'textbook',
      title: 'Goldfrank\'s Toxicologic Emergencies',
      source: 'McGraw-Hill',
      chapter: 'Ethanol and Toxic Alcohols',
    },
    {
      id: 'extrip-methanol',
      type: 'article',
      title: 'Extracorporeal Treatment for Methanol Poisoning',
      authors: ['EXTRIP Workgroup'],
      source: 'Critical Care Medicine',
      url: 'https://www.extrip-workgroup.org',
    },
    {
      id: 'asam-withdrawal-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline on Alcohol Withdrawal Management',
      authors: ['ASAM'],
      source: 'Journal of Addiction Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'toxicology-poison-control-guide', targetType: 'topic', relationship: 'related', label: 'Poison Control Guide' },
    { targetId: 'toxicology-antidotes', targetType: 'topic', relationship: 'related', label: 'Antidotes' },
    { targetId: 'mental-health-substance-use', targetType: 'topic', relationship: 'see-also', label: 'Substance Use Disorders' },
    { targetId: 'hepatic-disease', targetType: 'condition', relationship: 'related', label: 'Liver Disease' },
  ],

  tags: {
    systems: ['neurological', 'hepatic', 'metabolic', 'emergency-medicine'],
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

export default alcoholToxicity;
