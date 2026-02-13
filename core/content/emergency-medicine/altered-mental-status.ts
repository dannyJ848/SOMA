/**
 * Altered Mental Status - Evaluation, Differential Diagnosis, and Management
 *
 * Comprehensive content on altered mental status including causes (metabolic,
 * structural, infectious, toxic), evaluation approach, and emergency management.
 */

import { EducationalContent } from '../types';

export const alteredMentalStatus: EducationalContent = {
  id: 'emergency-altered-mental-status',
  type: 'condition',
  name: 'Altered Mental Status',
  alternateNames: ['AMS', 'Encephalopathy', 'Altered Level of Consciousness', 'Confusion', 'Delirium'],

  levels: {
    1: {
      level: 1,
      summary: 'Altered mental status means someone is confused, not thinking clearly, or hard to wake up. It has many causes and needs medical evaluation right away.',
      explanation: `## What Is Altered Mental Status?

Altered mental status (AMS) means a person isn't thinking, acting, or responding normally. Their brain isn't working the way it should.

This can range from mild confusion to being completely unresponsive.

**Remember:** Altered mental status is a symptom, not a disease itself. It means something is affecting how the brain works.

## How Altered Mental Status Looks

**Mild changes:**
- Confusion about time or place
- Not knowing what's happening
- Saying things that don't make sense
- Acting differently than usual
- Being very sleepy or hard to wake up

**Moderate changes:**
- Not knowing family members
- Seeing or hearing things that aren't there
- Being very agitated or restless
- Saying inappropriate words

**Severe changes:**
- Not responding at all
- Only responding to pain
- Not waking up
- Coma

## Common Causes

### 1. Low Blood Sugar (Hypoglycemia)

**What happens:** The brain needs sugar for energy. Without enough, it stops working properly.

**Who's at risk:** People with diabetes, especially those taking insulin

**Signs:** Confusion, sweating, shakiness, hunger

**Treatment:** Give sugar! Juice, glucose tablets, or glucagon injection

### 2. Dehydration

**What happens:** Not enough fluid in the body affects brain function

**Common in:** Elderly people, people with diarrhea/vomiting

**Signs:** Confusion, dry mouth, dark urine

**Treatment:** Fluids by IV or drinking

### 3. Infections

**What happens:** Infection spreads to the body and brain

**Types:**
- Urinary tract infection (very common in elderly)
- Pneumonia
- Meningitis (infection of brain covering)
- Sepsis (infection in blood)

**Signs:** Fever, confusion, fast heartbeat

**Treatment:** Antibiotics, fluids

### 4. Medications and Drugs

**What happens:** Too much medicine, wrong medicine, or reactions

**Common causes:**
- Too much pain medicine
- Sleeping pills
- Alcohol
- Illegal drugs
- Medicine interactions

**Treatment:** Stop the medicine, sometimes give antidote

### 5. Stroke

**What happens:** Blood flow to part of the brain stops

**Signs:** Sudden confusion, weakness on one side, trouble speaking

**Treatment:** Emergency! Call 911 immediately

### 6. Head Injury

**What happens:** Blow to the head causes brain swelling or bleeding

**Signs:** Confusion after head injury, vomiting, headache

**Treatment:** Scan of the head, sometimes surgery

### 7. Lack of Oxygen

**What happens:** Not enough oxygen gets to the brain

**Causes:** Breathing problems, heart problems, carbon monoxide

**Treatment:** Oxygen, treating the cause

### 8. Seizures

**What happens:** Abnormal electrical activity in the brain

**Signs:** Confusion after seizure (post-ictal state), jerking movements

**Treatment:** Medicines to prevent seizures

## What To Do

**If someone has sudden altered mental status:**

1. **Call 911 if:**
   - Sudden confusion or weakness
   - Head injury involved
   - Person can't be woken
   - Stroke signs present

2. **Check for danger:**
   - Is the person in a safe place?
   - Are they breathing?

3. **Give first aid if you know how:**
   - Check blood sugar if diabetic
   - Keep them safe if confused
   - Don't restrain if agitated (unless in danger)

4. **Gather information for doctors:**
   - When did it start?
   - Any new medicines?
   - Any injuries?
   - Medical history?
   - What were they doing when it started?

## Prevention

**Some ways to prevent AMS:**
- Take medicines exactly as prescribed
- Have regular check-ups
- Treat infections early
- Wear seatbelt and helmet
- Don't mix alcohol with medicines
- Stay hydrated, especially when sick

## Remember

**Altered mental status is never normal!**

Even in older adults, sudden confusion needs medical attention. It used to be called "getting old" but we now know it's usually a sign of a medical problem that needs treatment.

**When in doubt, call for medical help!**`,
      keyTerms: [
        { term: 'altered mental status', definition: 'Any change in how a person thinks, acts, or responds; ranges from mild confusion to being unresponsive' },
        { term: 'hypoglycemia', definition: 'Low blood sugar; causes confusion because the brain doesn\'t get the energy it needs' },
        { term: 'delirium', definition: 'Sudden confusion that comes and goes; often caused by illness or medications, especially in older adults' },
        { term: 'encephalopathy', definition: 'A general term meaning brain isn\'t working properly; can be caused by many different things' },
        { term: 'coma', definition: 'A state of deep unconsciousness where a person cannot be awakened and does not respond to stimulation' },
      ],
      analogies: [
        'The brain is like a computer - when something is wrong with the hardware or software, it doesn\'t work properly. Altered mental status is the brain "glitching."',
        'Low blood sugar for the brain is like a car running out of gas - it can\'t keep going without fuel.',
        'Infection in the body is like having a virus in a computer - it makes everything run slowly and incorrectly.',
      ],
      examples: [
        'An elderly woman suddenly becomes confused in the hospital. She\'s diagnosed with a urinary tract infection, which is the most common cause of sudden confusion in older adults.',
        'A man with diabetes is found confused at home. His blood sugar is very low. He\'s given glucose and recovers completely.',
        'A teenager drinks alcohol at a party and becomes very confused and can\'t walk straight. His friends keep him safe and call for help.',
      ],
      patientCounselingPoints: [
        'Sudden confusion is never normal - it needs medical evaluation right away',
        'If you have diabetes, check your blood sugar if you feel confused',
        'Keep a list of all medications you take and share it with doctors',
        'Older adults with infections can suddenly become confused even without fever',
      ],
    },

    2: {
      level: 2,
      summary: 'Altered mental status is a change in consciousness or cognition. The differential diagnosis includes metabolic, structural, infectious, and toxic causes. Systematic evaluation and targeted treatment are essential.',
      explanation: `## What Is Altered Mental Status?

Altered mental status (AMS) refers to any change in a person's level of consciousness or cognitive function. This ranges from mild confusion to coma.

**Key features:**
- Change from the person's baseline
- Affects thinking, attention, awareness, or responsiveness
- **Is a symptom, not a diagnosis** - always look for the cause

## Assessing Level of Consciousness

**AVPU Scale:**
- **A** - Alert: Awake and responding normally
- **V** - Responds to Verbal stimuli
- **P** - Responds to Painful stimuli
- **U** - Unresponsive

**Glasgow Coma Scale (GCS):**

| Score | Eye Opening | Verbal | Motor | Total |
|-------|-------------|--------|-------|-------|
| 4 | Spontaneous | Oriented | Obeys | 15 (normal) |
| 3 | To speech | Confused | Localizes | 14 |
| 2 | To pain | Inappropriate | Withdraws | 10 |
| 1 | None | Incomprehensible | Flexion | 7 |
| | | | Extension | 5 |
| | | | None | 3 |

## Categories of Causes

The **VITAMINS** mnemonic helps remember causes:

**V - Vascular**
- Stroke (ischemic or hemorrhagic)
- Transient ischemic attack (TIA)
- Hypertensive encephalopathy
- Subarachnoid hemorrhage

**I - Infection**
- Meningitis
- Encephalitis
- Sepsis
- Urinary tract infection (especially in elderly)
- Pneumonia

**T - Trauma**
- Concussion
- Intracranial hemorrhage
- Cervical spine injury

**A - Autoimmune**
- Sepsis (immune overreaction)
- Autoimmune encephalitis
- Vasculitis

**M - Metabolic**
- Hypoglycemia (low blood sugar)
- Hyperglycemia (high blood sugar - DKA, HHS)
- Electrolyte abnormalities
- Liver failure (hepatic encephalopathy)
- Kidney failure (uremic encephalopathy)
- Thyroid problems

**I - Intoxication**
- Alcohol
- Prescription medications
- Illegal drugs
- Carbon monoxide
- Lead poisoning

**N - Neoplasm (Tumor)**
- Primary brain tumor
- Metastases
- Paraneoplastic syndromes

**S - Shock**
- Any cause of poor perfusion to the brain

**S - Psychiatric**
- Depression, psychosis
- Conversion disorder

## Specific Causes in Detail

### Metabolic Causes

**Hypoglycemia:**
- Blood glucose <60 mg/dL
- Adrenergic symptoms: Sweating, tremor, tachycardia
- Neuroglycopenic symptoms: Confusion, seizure, coma
- **Always check first!** Treatable and reversible

**Hyperglycemia:**
- **DKA (Diabetic Ketoacidosis):** High glucose, ketones, acidosis
- **HHS (Hyperosmolar Hyperglycemic State):** Very high glucose, severe dehydration
- Both cause AMS

**Electrolyte abnormalities:**
- **Sodium:**
  - Hyponatremia (low Na+) - confusion, seizures, coma
  - Hypernatremia (high Na+) - confusion, seizures
- **Calcium:** Both low and high cause AMS
- **Liver failure:** Hepatic encephalopathy (ammonia)
- **Kidney failure:** Uremic encephalopathy

### Infectious Causes

**Meningitis:**
- Infection of meninges (brain coverings)
- Signs: Fever, headache, stiff neck, photophobia
- Kernig sign, Brudzinski sign
- Lumbar puncture for diagnosis

**Encephalitis:**
- Infection of brain tissue
- Often viral (HSV, West Nile)
- Altered mental status plus fever

**Sepsis:**
- Systemic response to infection
- Especially causes AMS in elderly
- UTI and pneumonia are common sources

### Structural Causes

**Stroke:**
- Sudden focal neurologic deficit
- Use FAST: Face, Arms, Speech, Time
- Ischemic vs hemorrhagic

**Intracranial hemorrhage:**
- Subdural hematoma (venous bleeding)
- Epidural hematoma (arterial bleeding - lucid interval!)
- Subarachnoid hemorrhage ("worst headache")
- Intracerebral hemorrhage

**Brain tumor:**
- Progressive symptoms over weeks-months
- Morning headache, vomiting
- Focal neurologic deficits

### Toxic Causes

**Alcohol:**
- Intoxication: Slurred speech, ataxia, confusion
- Withdrawal: Tremors, hallucinations, delirium tremens

**Opioids:**
- Pinpoint pupils, respiratory depression, coma
- Reversed with naloxone

**Sedatives:**
- Benzodiazepines, barbiturates
- Reversed with flumazenil (benzodiazepines)

**Carbon monoxide:**
- Silent killer - odorless, colorless
- Cherry-red skin (late sign)
- Multiple people affected

## Diagnostic Approach

**Immediate tests:**
- **Blood glucose** - always check first!
- Pulse oximetry
- Fingerstick glucose

**Laboratory tests:**
- CBC (infection, anemia)
- BMP (electrolytes, kidney function)
- Glucose
- Liver enzymes
- Toxicology screen
- Blood alcohol
- Ammonia (liver failure)
- TSH (thyroid)

**Imaging:**
- **CT head:** Bleeding, tumor, stroke
- **MRI:** More detail, not always available
- **CXR:** Pneumonia

**Other tests:**
- **Lumbar puncture:** Meningitis, encephalitis
- **EEG:** Seizures, encephalitis
- **ECG:** Arrhythmias causing poor brain perfusion

## Initial Management

**ABCs first:**
- **A**irway - Is it protected?
- **B**reathing - Is oxygen adequate?
- **C**irculation - Is BP adequate?

**Immediate interventions:**
- **Hypoglycemia:** Give glucose! D50W or glucagon
- **Opioid overdose:** Naloxone
- **Thiamine deficiency:** Give thiamine before glucose!
- **Oxygen:** For hypoxia
- **Fluids:** For dehydration

**Safety measures:**
- Protect airway (intubate if GCS ≤8)
- Prevent falls
- Restrain if dangerous (only if necessary)

## Special Considerations

**Elderly patients:**
- "Silent" presentations common
- UTI, pneumonia common causes
- Medication side effects common
- Baseline cognition important to know

**Pediatric patients:**
- Different causes (inborn errors, trauma, abuse)
- Dehydration rapidly causes AMS
- Meningitis more common

**Pregnant patients:**
- Consider pregnancy-specific causes
- Eclampsia (seizures in pregnancy)
- HELLP syndrome
- Medication safety for fetus

**Alcohol/drug users:**
- Withdrawal syndromes
- Higher risk of head trauma
- Malnutrition possible`,
      keyTerms: [
        { term: 'GCS', definition: 'Glasgow Coma Scale; score from 3-15 based on eye, verbal, and motor responses. Lower scores indicate worse condition' },
        { term: 'delirium', definition: 'Acute confusional state with fluctuating level of consciousness; often caused by illness, especially in elderly' },
        { term: 'meningitis', definition: 'Infection of the meninges (coverings of the brain and spinal cord); causes fever, headache, stiff neck' },
        { term: 'encephalitis', definition: 'Inflammation of the brain tissue, usually from infection; causes fever, confusion, seizures' },
        { term: 'subdural hematoma', definition: 'Bleeding between brain and dura mater; common in elderly with minor trauma, alcoholics' },
        { term: 'lumbar puncture', definition: 'Procedure to collect cerebrospinal fluid from spinal canal; diagnoses meningitis, encephalitis' },
      ],
      analogies: [
        'The brain needs glucose like a car needs gas - without fuel, it stops working.',
        'Meningitis is like having the brain\'s protective cover become inflamed - it hurts and affects function.',
        'A subdural hematoma is like a slow leak in a pipe - bleeding continues gradually, causing pressure to build up over time.',
      ],
      examples: [
        'Elderly woman with confusion: UTI diagnosed. Treated with antibiotics. Mental status returns to normal in 48 hours.',
        'Diabetic found unresponsive: Blood glucose 32 mg/dL. Given D50W. Wakes up within minutes.',
        'Young man with headache and confusion: CT shows subarachnoid hemorrhage. Neurosurgery consult called.',
      ],
      patientCounselingPoints: [
        'Know the baseline mental status of elderly family members so you can recognize changes',
        'Always check blood sugar first in confused diabetics',
        'Sudden confusion is a medical emergency - call for help',
        'Keep a current medication list to help doctors identify drug interactions',
      ],
    },

    3: {
      level: 3,
      summary: 'Altered mental status requires systematic evaluation using ABCDE approach, broad differential diagnosis, and targeted treatment. Early identification of reversible causes is critical.',
      explanation: `## Altered Mental Status Framework

**Definition:** Any change in level of consciousness or cognitive function from baseline.

**Time is brain:** Like stroke and cardiac arrest, delayed diagnosis and treatment of AMS leads to worse outcomes.

## Systematic Assessment Approach

**Primary Survey (ABCDE):**
- **A**irway: Is airway protected? GCS ≤8 = intubate
- **B**reathing: SpO2, respiratory rate, work of breathing
- **C**irculation: BP, HR, signs of shock
- **D**isability: GCS, pupils, glucose
- **E**xposure: Look for rash, signs of trauma, track marks

**Secondary Survey:**

**Focused history (witnesses, family, EMS):**
- Onset: Sudden vs gradual?
- Course: Progressive, fluctuating, episodic?
- Associated symptoms: Fever, headache, vomiting?
- Medications: Recent changes, new prescriptions?
- Medical history: Diabetes, seizures, kidney/liver disease?
- Social history: Alcohol, drugs, living situation?

**Physical examination:**
- **Vital signs:** Hypotension, fever, bradycardia/tachycardia
- **General:** Appearance, nutrition, hygiene
- **HEENT:** Fundoscopic (papilledema), pupils (size, reactivity), nuchal rigidity
- **Cardiovascular:** Arrhythmias, murmurs
- **Respiratory:** Lung sounds, respiratory pattern
- **Abdomen:** Distension, tenderness, organomegaly
- **Neurologic:** Focal deficits, meningismus, reflexes, gait
- **Skin:** Rash, petechiae, track marks, bruises, cellulitis

## Differential Diagnosis by Category

### Metabolic Causes

**Hypoglycemia:**
- **Normal threshold:** <70 mg/dL (concern), <54 mg/dL (serious)
- **Whipple triad:** Symptoms + low glucose + relief with glucose
- **Neuroglycopenic symptoms:** Confusion, seizure, coma
- **Adrenergic symptoms:** Diaphoresis, tremor, palpitations
- **Treatment:** D50W 25-50g IV or glucagon 1 mg IM/IV

**Hyperglycemia emergencies:**
- **DKA:** Hyperglycemia + anion gap acidosis + ketosis
- **HHS:** Hyperglycemia (>600) + hyperosmolality + no/low ketones
- Both cause AMS through osmotic effects and dehydration
- **Treatment:** Fluids, insulin, potassium

**Electrolyte disorders:**

| Electrolyte | Low | High |
|-------------|-----|------|
| Sodium | Confusion → seizures → coma | Confusion → seizures → coma |
| Calcium | Paresthesias, tetany, seizures | Confusion, coma |
| Magnesium | Weakness, arrhythmias | Hyporeflexia, coma |
| Potassium | Weakness, arrhythmias | Weakness, arrhythmias |

**Thyroid disorders:**
- **Myxedema coma:** Severe hypothyroidism with AMS
- **Thyroid storm:** Severe hyperthyroidism with agitation/delirium

**Liver failure (Hepatic encephalopathy):**
- **Pathogenesis:** Ammonia accumulation, inflammation, GABA-ergic tone
- **Stages:** Mild confusion → drowsiness → asterixis → coma
- **Precipitants:** GI bleed, infection, constipation, medications
- **Treatment:** Lactulose, rifaximin

**Kidney failure (Uremic encephalopathy):**
- **Pathogenesis:** Accumulation of uremic toxins
- **Symptoms:** Asterixis, myoclonus, seizures, confusion
- **Treatment:** Dialysis

### Infectious Causes

**Meningitis:**
- **Bacterial:** Life-threatening, presents over hours-days
  - N. meningitidis, S. pneumoniae most common
  - Triad: Fever, headache, nuchal rigidity (only 44% have all three)
  - **Kernig sign:** Pain on knee extension with hip flexed
  - **Brudzinski sign:** Hip flexion with neck flexion
  - Petechiae in meningococcemia
- **Viral:** Less severe, presents over days-weeks
- **Diagnosis:** Lumbar puncture (CSF analysis)
- **Treatment:** Empiric antibiotics BEFORE imaging/LP if suspected

**Encephalitis:**
- **HSV encephalitis:** Most common viral cause
  - Fever, AMS, seizures, focal neurologic signs
  - Temporal lobe involvement on MRI/CT
  - **Treat early!** Acyclovir prevents death/damage
- **Other causes:** West Nile, Japanese encephalitis, autoimmune encephalitis

**Sepsis-associated encephalopathy:**
- AMS without direct CNS infection
- Diffuse brain dysfunction from systemic inflammation
- Most common cause of AMS in ICU
- Reversible with infection treatment

### Structural Causes

**Ischemic stroke:**
- Sudden focal deficit
- Large vessel occlusion can cause AMS directly
- **Treatment:** Time-sensitive (tPA <4.5h, thrombectomy up to 24h)

**Intracranial hemorrhage:**
- **Epidural hematoma:**
  - Arterial bleed (middle meningeal artery)
  - Lucid interval before deterioration
  - Lens-shaped on CT
  - Surgical emergency!
- **Subdural hematoma:**
  - Venous bleed (bridging veins)
  - Can be acute, subacute, or chronic
  - Crescent-shaped on CT
  - Surgical if significant mass effect
- **Subarachnoid hemorrhage:**
  - "Worst headache of my life"
  - Meningeal signs
  - Blood in subarachnoid space on CT
  - Re-bleed risk high

**Brain tumor:**
- Progressive symptoms over weeks-months
- Morning headache, worse with Valsalva
- Focal neurologic deficits
- Vasogenic edema contributes to AMS

### Toxidromes

**Opioid intoxication:**
- Triad: Coma, respiratory depression, miosis
- Pinpoint pupils (pathognomonic)
- **Treatment:** Naloxone 0.04-0.4 mg IV (titrate)

**Anticholinergic toxicity:**
- "Mad as a hatter, hot as a hare, dry as a bone, red as a beet, blind as a bat"
- Agitation, mydriasis, dry flushed skin, urinary retention, absent bowel sounds
- Causes: Antihistamines, TCAs, antipsychotics, plants
- **Treatment:** Benadryl is NOT indicated! Physostigmine if severe

**Cholinergic toxicity:**
- SLUDGE: Salivation, Lacrimation, Urination, Defecation, Gastrointestinal distress, Emesis
- Muscle weakness, miosis, bradycardia, seizures
- Causes: Organophosphates, nerve agents
- **Treatment:** Atropine, pralidoxime

**Sympathomimetic toxicity:**
- Agitation, tachycardia, hypertension, mydriasis, diaphoresis
- Causes: Cocaine, amphetamines, bath salts
- **Treatment:** Benzodiazepines first-line

**Serotonin syndrome:**
- Triad: Mental status changes, autonomic hyperactivity, neuromuscular abnormalities
- Clonus (inducible, spontaneous, ocular), hyperreflexia, tremor, agitation
- Causes: SSRIs, MAOIs, tramadol, meperidine
- **Treatment:** Cyproheptadine, benzodiazepines, stop serotonergic drugs

**Neuroleptic malignant syndrome:**
- Similar to serotonin syndrome but from antipsychotics
- "Lead pipe" rigidity (vs clonus in serotonin syndrome)
- Fever, AMS, autonomic instability
- **Treatment:** Dantrolene, bromocriptine, benzos

### Withdrawal Syndromes

**Alcohol withdrawal:**
- Minor: Tremor, anxiety, insomnia (6-24h after last drink)
- Alcoholic hallucinosis: Hallucinations without autonomic instability (12-48h)
- **Delirium tremens:** Hallucinations + autonomic hyperactivity + confusion (48-96h)
  - Mortality up to 15% without treatment
  - **Treatment:** Benzodiazepines (symptom-triggered or fixed dose)

**Benzodiazepine withdrawal:**
- Similar to alcohol withdrawal but more prolonged
- Can cause seizures
- **Treatment:** Taper benzodiazepine

**Opioid withdrawal:**
- Dysphoria, lacrimation, rhinorrhea, piloerection, mydriasis
- Not life-threatening but extremely uncomfortable
- **Treatment:** Symptom control, methadone, buprenorphine

## Diagnostic Approach

**Tier 1: Immediate (bedside)**
- Point-of-care glucose
- Fingerstick glucose
- Pulse oximetry

**Tier 2: Basic laboratory**
- CBC, BMP (including Ca, Mg, Phos)
- Glucose
- Liver enzymes
- TSH
- Urinalysis
- Urine toxicology screen
- Blood alcohol
- Serum pregnancy test (if applicable)
- VBG/ABG

**Tier 3: Advanced (based on suspicion)**
- Lumbar puncture (meningitis, encephalitis, SAH if CT negative)
- CT head (bleed, mass, stroke)
- MRI brain (if CT negative but high suspicion)
- EEG (seizures, CJD, NCSE)
- Chest X-ray (pneumonia)

**Red flags for imaging:**
- Focal neurologic deficit
- Head trauma
- Anticoagulation
- Immunocompromised
- Cancer history
- Fever + headache

## Treatment Principles

**Airway protection:**
- GCS ≤8: Intubate for airway protection
- Aspiration risk: Intubate
- Respiratory failure: Intubate

**Specific treatments:**
- **Hypoglycemia:** D50W 25g IV (repeat if needed)
- **Opioid overdose:** Naloxone 0.04-0.4 mg IV titrated
- **Thiamine deficiency:** 100 mg IV before glucose!
- **Meningitis:** Vancomycin + ceftriaxone + acyclovir + dexamethasone
- **Status epilepticus:** Benzodiazepines → fosphenytoin/levetiracetam
- **Wernicke encephalopathy:** Thiamine 100 mg IV TID, then daily
- **Hepatic encephalopathy:** Lactulose, rifaximin

**Supportive care:**
- Oxygenation
- Hemodynamic support
- Temperature control
- Electrolyte correction
- Seizure prophylaxis if needed

**Dispo sition:**
- Admit for AMS until:
  - Returned to baseline
  - Diagnosis made and treated
  - Reversible causes excluded
- **Never discharge** someone with AMS without explanation`,
      keyTerms: [
        { term: 'Whipple triad', definition: 'Three criteria for hypoglycemia: symptoms of hypoglycemia, low plasma glucose, and relief of symptoms with glucose' },
        { term: 'myxedema coma', definition: 'Severe hypothyroidism presenting as AMS, hypothermia, bradycardia, hyponatremia. Medical emergency.' },
        { term: 'Wernicke encephalopathy', definition: 'Acute thiamine deficiency causing AMS, ataxia, ophthalmoplegia. seen in alcoholics. Treat with thiamine.' },
        { term: 'toxidrome', definition: 'Group of signs and symptoms characteristic of a class of drugs (opioid, anticholinergic, sympathomimetic, cholinergic)' },
        { term: 'serotonin syndrome', definition: 'Potentially life-threatening condition from excess serotonin. Triad: AMS, autonomic instability, neuromuscular abnormalities' },
        { term: 'delirium tremens', definition: 'Severe alcohol withdrawal with hallucinations, autonomic hyperactivity, confusion. Occurs 48-96h after last drink.' },
      ],
      analogies: [
        'Toxidromes are like recognizable patterns - once you learn the "fingerprint" of each drug class, you can identify them even without knowing what the patient took.',
        'Myxedema coma is like a car engine trying to run without oil - everything slows down until it stops working.',
        'Thiamine is like a safety switch - giving glucose without thiamine in deficient patients is like starting an engine without oil.',
      ],
      examples: [
        'Alcoholic with confusion: Exam reveals ataxia, nystagmus, confusion. Diagnosed with Wernicke encephalopathy. Thiamine 100 mg IV given. Improves over 24-48 hours.',
        'Elderly with AMS, fever, stiff neck: CT normal. LP performed. CSF shows high WBC, high protein, low glucose. Treated for bacterial meningitis. Recovers fully.',
        'Patient on SSRIs presents with agitation, diaphoresis, myoclonus. Diagnosed with serotonin syndrome. SSRI stopped, cyproheptadine given. Recovers.',
      ],
      patientCounselingPoints: [
        'If you have diabetes, wear a medical alert bracelet and carry glucose',
        'Never abruptly stop alcohol or benzodiazepines - withdrawal can be fatal',
        'Take medications exactly as prescribed to avoid toxicity',
        'If someone has AMS, gather their medication bottles for the doctors',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced AMS management requires understanding of neurophysiology, comprehensive differential diagnosis, targeted testing, and specific antidotes and treatments for various etiologies.',
      explanation: `## Advanced Pathophysiology

**Consciousness components:**
- **Arousal (RAS):** Reticular activating system in brainstem
- **Awareness (Cerebral cortex):** Cognitive content

**AMS occurs with dysfunction of:**
- RAS (diffuse dysfunction → decreased arousal)
- Cerebral cortex (focal or diffuse dysfunction → impaired awareness)
- Both (most common)

**Neuronal metabolism:**
- Brain uses 20% of body's oxygen despite being 2% of body weight
- Glucose is primary fuel (except during prolonged fasting)
- No significant energy stores → rapid dysfunction with hypoglycemia/hypoxia
- **Irreversible neuronal injury:** 4-6 minutes of complete ischemia

**Blood-brain barrier (BBB):**
- Protects brain from toxins and pathogens
- Can be disrupted by:
  - Inflammation (meningitis, encephalitis)
  - Hypertension (PRES)
  - Radiation
  - Tumor invasion
- Disruption increases AMS from substances that normally wouldn't affect brain

## Advanced Differential Diagnosis

### Metabolic Encephalopathies

**Hyperosmolar Hyperglycemic State (HHS):**
- **Pathophysiology:** Severe hyperglycemia → osmotic diuresis → severe dehydration → AMS
- **Typical patient:** Elderly, type 2 diabetes, often undiagnosed
- **Presentation:** AMS, severe dehydration, hyperglycemia (>600)
- **Key labs:** Osmolality >320, mild ketosis if any
- **Treatment:** Aggressive fluid resuscitation, insulin

**DKA vs HHS:**

| Feature | DKA | HHS |
|---------|-----|-----|
| Age | Younger | Older |
| Onset | Hours-days | Days-weeks |
| Glucose | 350-800 | >600 |
| Ketosis | Present | Minimal/absent |
| Acidosis | Present | Mild/absent |
| Osmolality | Slightly elevated | Significantly elevated (>320) |
| Precipitant | Infection, missed insulin | Infection, medication change |

**Hyponatremia encephalopathy:**
- **Acute:** <48 hours - more symptomatic at higher Na+
- **Chronic:** >48 hours - adaptive, but rapid correction dangerous
- **Symptoms:** Nausea, headache → confusion → seizures → coma
- **Treatment:** 3% hypertonic saline for severe symptoms
- **Danger:** Osmotic demyelination syndrome if corrected too fast

**Hypernatremia:**
- **Causes:** Insensible water loss (fever, burns), diabetes insipidus, sodium gain
- **Symptoms:** Restlessness → irritability → seizures → coma
- **Treatment:** Free water replacement (D5W or enteral water)
- **Rate:** Don't correct too fast!

**Hepatic encephalopathy stages:**
1. **Minimal:** Normal exam, psychometric abnormalities
2. **Grade 1:** Mild confusion, sleep inversion
3. **Grade 2:** Drowsiness, disorientation, asterixis
4. **Grade 3:** Marked confusion, incoherent speech, asleep but arousable
5. **Grade 4:** Coma

**Uremic encephalopathy:**
- **Pathogenesis:** Accumulation of nitrogenous wastes, electrolyte disturbances, acidosis
- **Symptoms:** Asterixis, myoclonus, seizures, sleep-wake reversal
- **Indications for dialysis:** Refractory AMS despite medical management

### Infectious Encephalopathies

**Meningitis CSF patterns:**

| Type | WBC | Predominant | Glucose | Protein | Opening Pressure |
|------|-----|-------------|---------|---------|------------------|
| Bacterial | High | Neutrophils | Low | High | Elevated |
| Viral | Mod | Lymphocytes | Normal | Mod | Normal/mod |
| TB | Mod | Lymphocytes | Low | High | Elevated |
| Fungal | Mod | Lymphocytes | Low | High | Elevated |

**HSV encephalitis:**
- **Most common sporadic fatal encephalitis**
- **Temporal lobe predilection:** Hemianopsia, visual field cuts, aphasia
- **CSF:** RBCs (not enough for xanthochromia), lymphocytic pleocytosis
- **MRI:** T2 hyperintensity in temporal lobes
- **PCR:** Diagnostic (sensitive and specific)
- **Treatment:** Acyclovir 10 mg/kg q8h (don't wait for confirmation!)

**Autoimmune encephalitis:**
- **Anti-NMDA receptor:** Psychiatric symptoms → seizures → dyskinesias → autonomic instability
- **Anti-LGI1:** Faciobrachial dystonic seizures, memory loss
- **Anti-Hu:** Paraneoplastic (SCLC), rapidly progressive
- **Diagnosis:** Antibodies in serum/CSF
- **Treatment:** Immunotherapy (steroids, IVIG, PLEX, rituximab)

### Structural Causes

**Posterior Reversible Encephalopathy Syndrome (PRES):**
- **Causes:** Hypertensive encephalopathy, immunosuppressants, preeclampsia/eclampsia
- **Symptoms:** AMS, visual changes, seizures, headache
- **MRI:** Posterior circulation white matter changes (reversible!)
- **Treatment:** BP control, remove offending agent

**Cerebral venous sinus thrombosis (CVST):**
- **Risk factors:** Hypercoagulable, OCPs, pregnancy, infection
- **Symptoms:** Headache, AMS, seizures, focal deficits
- **Diagnosis:** MRV or CTV (CT venogram)
- **Treatment:** Anticoagulation (even with hemorrhage)

**Normal pressure hydrocephalus (NPH):**
- **Triad:** AMS, gait instability, urinary incontinence
- **Imaging:** Ventriculomegaly out of proportion to atrophy
- **Treatment:** Ventriculoperitoneal shunt
- **Diagnostic:** Large volume lumbar puncture (temporary improvement)

### Toxin-Induced AMS

**Carbon monoxide poisoning:**
- **Pathophysiology:** Binds hemoglobin with 240x affinity of O2
- **Symptoms:** Headache, dizziness → AMS, seizures, death
- **"Cherry-red" skin:** Late finding, not reliable
- **Chronic:** Cognitive changes, parkinsonism
- **Treatment:** Hyperbaric oxygen (controversial for non-pregnant adults)

**Meningeal irritation signs comparison:**

| Sign | Description | Sensitivity | Specificity |
|------|-------------|-------------|-------------|
| Nuchal rigidity | Resistance to neck flexion | High | Low |
| Kernig | Pain on knee extension | Low | High |
| Brudzinski | Hip flexion with neck flexion | Low | High |
| Jolt accentuation | Headache worsens with horizontal head turns | High | Moderate |

## Advanced Diagnostic Approach

**EEG in AMS:**
- **Indications:** Suspected seizures, NCSE, CJD, viral encephalitis
- **Patterns:**
  - GPDs (Generalized periodic discharges): CJD, anoxic brain injury
  - PLEDs (Periodic lateralized epileptiform discharges): Herpes encephalitis, stroke
  - Triphasic waves: Metabolic encephalopathy, liver failure
  - Burst suppression: Severe brain injury, deep coma

**Neuroimaging advances:**
- **CT angiography:** Vascular causes (CVST, vasculitis)
- **Perfusion studies:** Stroke vs mimic
- **MRI sequences:** DWI (cytotoxic edema), FLAIR (vasogenic edema), SWI (microhemorrhages)
- **DTI (Diffusion tensor imaging):** White matter tracts

**Lumbar puncture nuances:**
- **Opening pressure:** Normal <20 cmH2O
- **Xanthochromia:** RBC breakdown products (requires >12 hours)
- **CSF lactate:** Distinguishes bacterial from viral meningitis
- **CSF/blood glucose ratio:** <0.4 suggests bacterial meningitis

## Withdrawal Management

**Alcohol withdrawal CIWA-AR protocol:**
- Scored assessment of withdrawal severity
- Treat with benzodiazepines based on score
- Symptom-triggered vs fixed-dose protocols
- **Front-loaded dosing:** Higher initial doses for heavy drinkers

**Benzodiazepine withdrawal:**
- Taper with long-acting agent (diazepam, clonazepam)
- Switch to long-acting if short-acting abused
- Protracted withdrawal possible (months)

**Gabapentinoid withdrawal:**
- Similar to alcohol/benzodiazepines
- Insomnia, anxiety, diaphoresis
- Resumption or taper needed

**Critical illness encephalopathy:**
- AMS in ICU without clear metabolic/infectious cause
- Multifactorial: Medications, sleep deprivation, immobility, sensory overload
- **ABCDEF bundle:** Awakening, Breathing, Coordination, Delirium monitoring, Early mobility, Family engagement
- **Prevention:** Dexmedetomidine (lighter sedation), minimization of benzodiazepines`,
      keyTerms: [
        { term: 'PRES', definition: 'Posterior Reversible Encephalopathy Syndrome; reversible condition with headache, visual changes, seizures, AMS from hypertension or immunosuppressants' },
        { term: 'CVST', definition: 'Cerebral Venous Sinus Thrombosis; clot in dural venous sinuses causing headache, AMS, seizures. Diagnosed with MRV/CTV' },
        { term: 'NCSE', definition: 'Non-Convulsive Status Epilepticus; seizure activity without obvious motor activity. Diagnosed with EEG.' },
        { term: 'NPH', definition: 'Normal Pressure Hydrocephalus; triad of AMS, gait instability, urinary incontinence with enlarged ventricles' },
        { term: 'CIWA-AR', definition: 'Clinical Institute Withdrawal Assessment for Alcohol; scored scale to assess alcohol withdrawal severity and guide benzodiazepine dosing' },
        { term: 'PLEDs', definition: 'Periodic Lateralized Epileptiform Discharges; EEG pattern seen with focal brain lesions like HSV encephalitis or stroke' },
      ],
      analogies: [
        'NCSE is like an engine running with the transmission in neutral - the seizure activity is there but not visible as shaking.',
        'PRES is like a pressure cooker that\'s about to explode - too much pressure causes symptoms but can be reversed if you release the pressure.',
        'The blood-brain barrier is like a bouncer at a club - usually keeps out trouble, but can be overwhelmed by a "riot" (inflammation).',
      ],
      examples: [
        'Woman with new severe headache, seizures, visual changes. BP 220/130. MRI shows posterior white matter changes. Diagnosed with PRES. BP lowered. Symptoms resolve over 1 week.',
        'Man with alcohol dependence found AMS, tremors. CIWA-AR score 18. Given lorazepam 2 mg IV. Reassessed q1h. Tapered over 5 days.',
        'Elderly woman with gait instability, confusion, incontinence. MRI shows enlarged ventricles. Large volume LP temporarily improves symptoms. Diagnosed with NPH. Shunted.',
      ],
      patientCounselingPoints: [
        'Delirium in hospitalized elderly is common but not normal - it\'s a sign of illness or medication effect',
        'Family members are often first to notice subtle changes in cognition - report these to medical team',
        'Recovery from AMS can take weeks to months depending on the cause',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level AMS management integrates advanced neurodiagnostics, comprehensive differential diagnosis, nuanced treatment decisions, and understanding of emerging causes and syndromes.',
      explanation: `## Advanced Neurodiagnostics

**Advanced EEG applications:**
- **Continuous EEG (cEEG):** Standard of care for unexplained AMS in ICU
- **Quantitative EEG (qEEG):** Computerized analysis, trend monitoring
- **Amplitude-integrated EEG (aEEG):** Simplified monitoring for rapid assessment
- **Prognostication:** EEG background predicts outcome after cardiac arrest

**Advanced MRI techniques:**
- **Diffusion tensor imaging (DTI):** White matter integrity, prognostic after hypoxic injury
- **Magnetic resonance spectroscopy (MRS):** Metabolic profile of brain tissue
- **Susceptibility-weighted imaging (SWI):** Microhemorrhages, venous thrombosis
- **Perfusion imaging:** ASL or DSC for stroke vs mimic

**Biomarkers in AMS:**
- **Neuron-specific enolase (NSE):** Neuronal injury, prognostic after cardiac arrest
- **GFAP (Glial fibrillary acidic protein):** Astroglial injury
- **UCH-L1:** Neuronal injury biomarker
- **Tau protein:** Neurodegeneration, TBI
- **Neurofilament light chain:** Axonal injury

## Autoimmune Encephalitis Advances

**Expanding spectrum:**
- **Anti-NMDAR:** Most common, especially in young women
- **Anti-LGI1:** Faciobrachial dystonic seizures, sleep dysfunction
- **Anti-CASPR2:** Morvan syndrome (neuromyotonia, autonomic dysfunction, insomnia)
- **Anti-GABA A/B:** Refractory seizures, AMS
- **Anti-Ma2:** Testicular cancer (paraneoplastic)
- **Anti-Hu:** SCLC (paraneoplastic)
- **Anti-Yo:** Ovarian/breast cancer (paraneoplastic)

**Diagnostic criteria:**
1. Subacute onset (rapid progression <3 months)
2. Working memory deficits, AMS, psychiatric symptoms
3. Exclusion of other causes
4. CSF pleocytosis, MRI findings, or EEG abnormalities
5. Detection of neural autoantibodies

**Treatment:**
- **First-line:** Steroids + IVIG or PLEX
- **Second-line:** Rituximab, cyclophosphamide
- **Tumor:** Remove if present (often curative)
- **Relapse:** 12-35% depending on antibody

## Prion Diseases

**Creutzfeldt-Jakob Disease (CJD):**
- **Rapidly progressive dementia** (weeks-months)
- **Myoclonus:** Startle-sensitive
- **Visual disturbances:** Cortical blindness, visual field cuts
- **Cerebellar signs:** Ataxia, nystagmus
- **EEG:** GPDs (periodic sharp wave complexes)
- **MRI:** Cortical ribboning, basal ganglia changes on DWI
- **CSF:** 14-3-3 protein (nonspecific), RT-QuIC (highly specific)
- **Prognosis:** Fatal within 1 year

**Variant CJD:**
- "Mad cow disease" in humans
- Younger patients
- Psychiatric symptoms early
- Lymphoid tissue involvement
**Diagnostic:** Tonsil biopsy

## New-Onset Refractory Status Epilepticus (NORSE)

**Definition:**
- Refractory status epilepticus without clear cause
- Previously healthy
- No acute structural, metabolic, toxic, infectious cause

**Super-refractory status epilepticus:**
- Seizures continuing >24 hours despite anesthesia

**FIRES (Febrile Infection-Related Epilepsy Syndrome):**
- NORSE with preceding febrile illness
- Children and young adults
- Poor prognosis

**Management:**
- Aggressive seizure control
- Immunotherapy (trial of steroids, IVIG)
- Ketogenic diet (some evidence)
- Multiple antiseizure medications

## Posterior Reversible Encephalopathy Syndrome (PRES)

**Expanded understanding:**
- Not always posterior (can be holohemispheric)
- Not always reversible (20-30% have permanent injury)
- **Mechanisms:**
  - Hyperperfusion → BBB disruption
  - Hypoperfusion → ischemia
  - Endothelial dysfunction

**Causes beyond hypertension:**
- Immunosuppressants (calcineurin inhibitors)
- Cytokine release syndrome
- Preeclampsia/eclampsia
- Sepsis
- Autoimmune encephalitis

**MRI patterns:**
- **Parieto-occipital:** Classic
- **Frontal:** Calcineurin inhibitors
- **Holohemispheric:** Severe cases
- **Atypical:** Hemorrhage, restricted diffusion

**Poor prognostic factors:**
- Hemorrhage on imaging
- Restricted diffusion
- Higher peak blood pressures
- Delayed treatment

## Advanced Withdrawal Management

**Alcohol withdrawal biomarkers:**
- No validated biomarker for withdrawal severity
- Clinical assessment remains standard

**Benzodiazepine withdrawal:**
- **Protracted withdrawal:** Months of anxiety, insomnia
- **Kindling:** Each withdrawal episode becomes more severe
- **Treatment:** Long taper (weeks-months) sometimes needed

**Gabapentinoid (pregabalin, gabapentin) withdrawal:**
- Similar to alcohol/benzodiazepines
- Insomnia, diaphoresis, anxiety
- May be underrecognized

**Cannabis withdrawal:**
- Irritability, anxiety, insomnia, anorexia
- Not life-threatening but distressing
- Recognition increasing with legalization

## ICU Delirium Prevention and Management

**PADIS Guidelines (2018):**

**Non-pharmacologic:**
- Multicomponent interventions (most effective)
- Sleep optimization (quiet time, clustering care)
- Early mobilization
- Orientation strategies (clocks, windows, familiar objects)
- Vision/hearing aids
- Family presence

**Pharmacologic:**
- **Avoid** routine haloperidol prophylaxis
- **Avoid** routine atypical antipsychotic prophylaxis
- **Treat** delirium only if agitated/distressed
- **Preferred:** Dexmedetomidine over benzodiazepines for sedation
- **Options:** Haloperidol, atypical antipsychotics (short-term, lowest effective dose)

**Sedation strategies:**
- **Light sedation:** Target RASS -1 to +2
- **Daily interruption:** Reduce to light sedation or stop daily
- **Spontaneous awakening trials:** Wake up daily to assess neurologic status
- **Analgesia-first:** Pain control before sedation

## Special Populations

**Pregnant patients:**
- **Preeclampsia/eclampsia:**
  - AMS from hypertensive encephalopathy (PRES)
  - Magnesium sulfate for seizure prophylaxis
  - Delivery is definitive treatment
- **HELLP syndrome:** AMS plus liver dysfunction, thrombocytopenia
- **Stroke:** Increased risk, especially postpartum
- **Normal pregnancy:** Sleep deprivation, anemia can cause AMS

**Elderly:**
- **Baseline cognitive impairment common** (dementia, MCI)
- **Delirium superimposed on dementia** (DSD)
- **Atypical presentations:** No fever with infection
- **Multiple medications:** Polypharmacy increases risk
- **Social factors:** Isolation, neglect, abuse

**Pediatric:**
- **Age-specific causes:** Inborn errors, trauma, abuse
- **Febrile seizures:** Common, usually benign
- **Meningitis:** Higher risk than adults
- **Intussusception:** Lethargy in infants
- **Metabolic disorders:** Presents in infancy/childhood

**Immunocompromised:**
- **Broad differential:** Infection (including opportunistic), drug toxicity, stroke, tumor
- **Atypical presentations:** Minimal inflammatory response
- **Lower threshold for imaging and LP**
- **Consider:** Toxoplasmosis, CMV, cryptococcus, PML, lymphoma`,
      keyTerms: [
        { term: 'NORSE', definition: 'New-Onset Refractory Status Epilepticus; refractory seizures without clear cause in previously healthy person' },
        { term: 'FIRES', definition: 'Febrile Infection-Related Epilepsy Syndrome; NORSE preceded by febrile illness, seen in children and young adults' },
        { term: 'RT-QuIC', definition: 'Real-Time Quaking-Induced Conversion; highly sensitive and specific test for prion disease (CJD)' },
        { term: 'DSD', definition: 'Delirium Superimposed on Dementia; common in hospitalized elderly, associated with worse outcomes' },
        { term: 'PADIS', definition: 'Pain, Agitation/Sedation, Delirium, Immobility, Sleep disruption; ICU guideline for managing these issues' },
        { term: 'cEEG', definition: 'Continuous EEG monitoring; standard of care for unexplained AMS in ICU, detects seizures and NCSE' },
      ],
      analogies: [
        'NORSE is like a car engine that keeps overheating for no apparent reason - the seizures start and continue without a clear trigger.',
        'Delirium superimposed on dementia is like a building with a damaged foundation (dementia) that\'s now being shaken by an earthquake (delirium).',
        'The RT-QuIC test for prion disease is like amplifying a whisper into a shout - it detects and amplifies misfolded prion proteins.',
      ],
      clinicalNotes: `Expert clinical pearls for AMS management:

1. **Glucose first, always!** Hypoglycemia is the most rapidly reversible cause. Don't be distracted until you've checked glucose.

2. **Thiamine before glucose** in alcoholics, malnourished, or unknown status. Preventing Wernicke is easier than treating it.

3. **Empiric antibiotics and acyclovir** for suspected meningitis/encephalitis. Don't delay for LP if the patient is unstable.

4. **Non-convulsive status epilepticus** is underdiagnosed. Get an EEG on AMS patients without clear cause, especially those with a history of seizures or subtle twitching.

5. **Alcohol withdrawal kills.** Use symptom-triggered benzodiazepines (CIWA-AR) and treat aggressively. Underdosing is a common mistake.

6. **Hyponatremia correction:** Go slow in chronic hyponatremia (>48h). Overly rapid correction causes osmotic demyelination.

7. **Normal pressure hydrocephalus** is a reversible cause of dementia. Consider in elderly with the triad of gait instability, urinary incontinence, and cognitive decline.

8. **Autoimmune encephalitis** is increasingly recognized. Think of it in young patients with psychiatric symptoms, seizures, or movement disorders without clear cause.

9. **Prescribe medications** with AMS patients in mind. Avoid or minimize anticholinergics, benzodiazepines, and opioids in elderly.

10. **Family as historians.** They know the patient's baseline and may have noticed subtle changes. Document their observations.`,
    },
  },

  media: [
    {
      id: 'ams-differential-diagnosis',
      type: 'diagram',
      filename: 'ams-differential-diagnosis.svg',
      title: 'AMS Differential Diagnosis',
      description: 'VITAMINS framework for altered mental status differential diagnosis',
    },
    {
      id: 'glasgow-coma-scale',
      type: 'diagram',
      filename: 'glasgow-coma-scale.svg',
      title: 'Glasgow Coma Scale Assessment',
      description: 'Scoring system for level of consciousness with eye, verbal, motor components',
    },
    {
      id: 'toxidrome-recognition',
      type: 'diagram',
      filename: 'toxidrome-recognition.svg',
      title: 'Toxidrome Recognition',
      description: 'Comparison of common toxidromes with key findings and treatments',
    },
  ],

  citations: [
    {
      id: 'acep-ams-clinical-policy',
      type: 'article',
      title: 'Clinical Policy: Critical Issues in the Evaluation and Management of Adult Patients Presenting to the Emergency Department With Altered Mental Status',
      authors: ['ACEP', 'Clinical Policies Committee'],
      source: 'Annals of Emergency Medicine',
      url: 'https://www.annemergmed.com/article/S0196-0644(22)00786-0/fulltext',
      accessedDate: '2026-01-26',
    },
    {
      id: 'infectious-diseases-society-meningitis',
      type: 'article',
      title: 'Clinical Practice Guidelines for the Management of Bacterial Meningitis',
      authors: ['Tunkel, A.R.', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://academic.oup.com/cid/article/50/3/361/340634',
      accessedDate: '2026-01-26',
    },
    {
      id: 'autoimmune-encephalitis-consensus',
      type: 'article',
      title: 'Consensus Statement: Management of Autoimmune Encephalitis',
      authors: ['Graus, F.', 'et al.'],
      source: 'Neurology',
      url: 'https://journals.lww.com/neurology/fulltext/2016/10170/Consensus_statement_Management_of_autoimmune.25',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-severe-pain', targetType: 'condition', relationship: 'related', label: 'Pain Assessment' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock Types' },
    { targetId: 'specialties-neurology-stroke', targetType: 'condition', relationship: 'related', label: 'Stroke' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['emergency medicine', 'neurology', 'critical care', 'toxicology'],
    keywords: ['altered mental status', 'AMS', 'delirium', 'coma', 'encephalopathy', 'confusion', 'unresponsive'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'neurology', 'internal medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default alteredMentalStatus;
