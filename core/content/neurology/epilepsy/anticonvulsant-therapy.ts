/**
 * Anticonvulsant Therapy - In-Depth Neurology Content
 *
 * Comprehensive coverage of antiseizure medications, mechanisms of action,
 * selection by seizure type, pharmacokinetics, and special populations.
 */

import { EducationalContent } from '../../types';

export const anticonvulsantTherapyContent: EducationalContent = {
  id: 'neuro-anticonvulsant-therapy',
  type: 'topic',
  name: 'Anticonvulsant Therapy',
  nameEs: 'Terapia Anticonvulsiva',
  alternateNames: ['Antiseizure Medications', 'ASMs', 'AEDs', 'Antiepileptic Drugs'],

  levels: {
    1: {
      level: 1,
      summary:
        'Anticonvulsant medications help prevent seizures by calming overactive electrical signals in the brain, and most people with epilepsy need to take them daily.',
      explanation: `## What Are Anticonvulsant Medications?

Anticonvulsant medications (also called antiseizure medications) are drugs that help prevent seizures. They work by calming down the abnormal electrical activity in the brain that causes seizures.

## How They Work

- These medicines do not cure epilepsy
- They help prevent seizures from happening
- Most people need to take them every day, often for many years or a lifetime
- They work best when taken at the same time each day

## Common Medications

**Levetiracetam (Keppra):**
- One of the most commonly prescribed
- Few drug interactions
- Can cause irritability and mood changes

**Lamotrigine (Lamictal):**
- Good for many seizure types
- Must be started slowly to avoid a dangerous skin rash
- Often preferred in women of childbearing age

**Valproate (Depakote):**
- Works for many seizure types
- Can cause weight gain and hair thinning
- NOT safe during pregnancy (causes birth defects)

**Carbamazepine (Tegretol) / Oxcarbazepine (Trileptal):**
- Good for focal seizures
- Can cause dizziness and double vision

## Important Things to Know

- **Never stop suddenly**: Stopping seizure medication suddenly can cause dangerous seizures
- **Take regularly**: Missing doses increases seizure risk
- **Tell your doctor about side effects**: Many options exist if one medicine causes problems
- **Pregnancy planning**: Some seizure medicines can harm an unborn baby - talk to your doctor before getting pregnant
- **Drug interactions**: These medicines can interact with other medications, including birth control pills

## When Medication May Not Be Needed

- A single seizure with a clear, fixable cause (low blood sugar, medication reaction)
- Some childhood seizure types that children outgrow
- Doctor will weigh the risk of more seizures against medication side effects`,

      keyTerms: [
        { term: 'anticonvulsant', definition: 'A medication that helps prevent seizures' },
        { term: 'epilepsy', definition: 'A condition where a person has repeated seizures' },
        { term: 'side effects', definition: 'Unwanted effects of a medication besides its main purpose' },
        { term: 'drug interaction', definition: 'When one medication affects how another medication works' },
      ],
      analogies: [
        'Anticonvulsant medications are like a dimmer switch for overactive brain circuits - they help keep electrical activity at a normal level.',
        'Stopping seizure medicine suddenly is like removing a dam from a river all at once - everything that was held back comes rushing through.',
        'Taking seizure medicine at the same time each day is like keeping a steady flow of water through a fire hose - consistency is key to protection.',
      ],
      examples: [
        'A teenager with epilepsy takes levetiracetam every morning and night and has not had a seizure in 2 years.',
        'A woman planning to become pregnant works with her neurologist to switch from valproate to lamotrigine to protect her future baby.',
        'A man with epilepsy forgets his medication for 2 days and has a breakthrough seizure.',
      ],
      patientCounselingPoints: [
        'Never stop your seizure medication suddenly without talking to your doctor first.',
        'If you miss a dose, take it as soon as you remember - then take the next dose at the regular time.',
        'Keep a list of all your medications and share it with every doctor you see.',
        'If you are a woman who could become pregnant, discuss this with your neurologist before pregnancy.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Antiseizure medications are selected based on seizure type, epilepsy syndrome, patient characteristics, and side effect profile, with the goal of seizure freedom on monotherapy.',
      explanation: `## Principles of AED Selection

**By Seizure Type:**

*Focal Seizures (First-Line):*
- Lamotrigine, levetiracetam, oxcarbazepine, carbamazepine
- Lacosamide, zonisamide as alternatives

*Generalized Tonic-Clonic (First-Line):*
- Valproate (most broad-spectrum), lamotrigine, levetiracetam
- Avoid sodium channel blockers in genetic generalized epilepsy (may worsen absence/myoclonic)

*Absence Seizures:*
- Ethosuximide (first-line per SANAD II), valproate, lamotrigine
- Carbamazepine, oxcarbazepine, phenytoin: CONTRAINDICATED (worsen absence)

*Myoclonic Seizures:*
- Valproate, levetiracetam, clonazepam
- Avoid: Carbamazepine, oxcarbazepine, phenytoin, gabapentin (worsen myoclonus)

## Commonly Used Medications

| Medication | Mechanism | Key Side Effects | Notes |
|-----------|-----------|-----------------|-------|
| Levetiracetam | SV2A binding | Irritability, mood changes | Few interactions, renal dosing |
| Lamotrigine | Na+ channel | SJS rash (slow titration required) | Good in pregnancy, mood stabilizer |
| Valproate | Multiple (Na+, Ca2+, GABA) | Teratogenicity, weight gain, tremor, hepatotoxicity | Broad-spectrum, avoid in pregnancy |
| Carbamazepine | Na+ channel | Hyponatremia, diplopia, rash, aplastic anemia | Enzyme inducer, focal seizures |
| Oxcarbazepine | Na+ channel | Hyponatremia (more than CBZ) | Fewer interactions than CBZ |
| Phenytoin | Na+ channel | Gingival hyperplasia, hirsutism, cerebellar toxicity | Zero-order kinetics, monitoring needed |
| Lacosamide | Na+ channel (slow inactivation) | Dizziness, PR prolongation | Well tolerated, IV available |
| Topiramate | Na+ channel, GABA, glutamate | Cognitive dulling, weight loss, kidney stones, metabolic acidosis | Teratogenic, reduces OCP efficacy |
| Zonisamide | Na+/Ca2+ channels, carbonic anhydrase | Kidney stones, oligohydrosis | Sulfonamide allergy caution |
| Gabapentin | Ca2+ channel (alpha2delta) | Sedation, weight gain, edema | Minimal interactions, used for pain |
| Pregabalin | Ca2+ channel (alpha2delta) | Sedation, weight gain | Controlled substance (Schedule V) |
| Clobazam | GABA-A (benzodiazepine) | Sedation, tolerance | Adjunctive for Lennox-Gastaut, Dravet |
| Brivaracetam | SV2A binding | Similar to LEV, possibly less irritability | Higher affinity for SV2A than LEV |
| Cenobamate | Na+ channel + GABA | Drowsiness, dizziness, DRESS | Most effective new AED, slow titration |

## Treatment Strategy

1. Start monotherapy at low dose, titrate slowly
2. If first drug fails: Try second monotherapy
3. If second monotherapy fails: Consider combination therapy or refer to epilepsy specialist
4. After failure of 2 adequately tried medications: Drug-resistant epilepsy - refer for surgery evaluation

## Monitoring

- Drug levels: Mainly useful for phenytoin, carbamazepine, valproate, phenobarbital
- Levetiracetam, lamotrigine: Levels available but not routinely monitored
- Baseline and periodic: CBC, hepatic function, renal function
- Valproate: LFTs, ammonia if confusion develops
- Carbamazepine: CBC (aplastic anemia risk), sodium
- Phenytoin: Free level in hypoalbuminemia, zero-order kinetics (small dose changes = large level changes)`,

      keyTerms: [
        { term: 'monotherapy', definition: 'Treatment with a single medication, the goal of epilepsy treatment' },
        { term: 'broad-spectrum', definition: 'Effective against multiple seizure types (focal and generalized)' },
        { term: 'sodium channel blocker', definition: 'AED mechanism that reduces neuronal firing by blocking sodium channels' },
        { term: 'SJS', definition: 'Stevens-Johnson Syndrome - a severe, potentially fatal skin reaction; risk with lamotrigine, carbamazepine, phenytoin' },
        { term: 'enzyme inducer', definition: 'Drug that speeds up metabolism of other drugs, potentially reducing their effectiveness' },
      ],
      analogies: [
        'Choosing an AED is like choosing the right tool for a job - a hammer (sodium channel blocker) works for some tasks but not all.',
        'Drug levels with phenytoin are like balancing on a tightrope - small changes in dose can cause big swings in blood levels.',
        'An enzyme-inducing AED is like speeding up a conveyor belt - other drugs get processed and removed faster.',
      ],
      examples: [
        'A woman with juvenile myoclonic epilepsy is started on levetiracetam after valproate is avoided due to pregnancy risk.',
        'A child with absence seizures is treated with ethosuximide - carbamazepine would make absences worse.',
        'A patient on carbamazepine has a sodium level of 128 mEq/L - a known side effect requiring monitoring.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Antiseizure medication mechanisms span sodium channel modulation, GABAergic enhancement, calcium channel blockade, and SV2A binding, with selection guided by seizure type, pharmacokinetics, and patient-specific factors.',
      explanation: `## Mechanisms of Action in Detail

**Sodium Channel Blockers (Voltage-Gated):**
- Fast inactivation: Phenytoin, carbamazepine, oxcarbazepine, lamotrigine, eslicarbazepine
- Slow inactivation: Lacosamide (unique mechanism)
- Use-dependent block: More effective at high firing rates (seizure activity)
- Limitation: May worsen generalized epilepsy with absence/myoclonus

**GABAergic Medications:**
- *Benzodiazepines* (diazepam, lorazepam, clobazam, clonazepam): Allosteric GABA-A modulators
  - Increase frequency of chloride channel opening
  - Tolerance develops with chronic use
- *Barbiturates* (phenobarbital, primidone): Increase duration of chloride channel opening
  - Sedation, cognitive effects limit use
- *Vigabatrin*: Irreversible GABA transaminase inhibitor (increases GABA)
  - Retinal toxicity (visual field constriction) limits use
  - Indicated for infantile spasms and TSC-related seizures
- *Tiagabine*: GABA reuptake inhibitor
  - Limited use due to non-convulsive status epilepticus risk

**Calcium Channel Modulators:**
- *Ethosuximide*: T-type calcium channel blocker in thalamic neurons
  - Specific for absence seizures
- *Gabapentin, Pregabalin*: Alpha-2-delta subunit of voltage-gated Ca2+ channels
  - Reduce presynaptic neurotransmitter release
  - Also used for neuropathic pain

**SV2A-Binding:**
- Levetiracetam, brivaracetam: Bind synaptic vesicle protein 2A
- Modulate neurotransmitter release
- Broad-spectrum efficacy, fewer interactions

**Multi-Mechanism:**
- *Valproate*: Na+ channels, T-type Ca2+ channels, GABAergic, histone deacetylase inhibition
- *Topiramate*: Na+ channels, GABA-A enhancement, glutamate (AMPA/kainate) antagonism, carbonic anhydrase inhibition
- *Cenobamate*: Na+ channel (persistent current) + positive allosteric GABA-A modulation

## Pharmacokinetics

**Enzyme Inducers (CYP3A4, CYP2C9, UGT):**
- Carbamazepine, phenytoin, phenobarbital, primidone
- Reduce levels of: Oral contraceptives, warfarin, other AEDs, chemotherapy
- OCP failure: Need high-dose estrogen (50 mcg) or non-oral contraception

**Enzyme Inhibitor:**
- Valproate: Inhibits CYP2C9, UGT; increases lamotrigine levels (2x)
- Valproate + lamotrigine: Reduce lamotrigine dose by 50%, increased SJS risk

**Minimal Interactions:**
- Levetiracetam, brivaracetam, gabapentin, pregabalin, lacosamide
- Preferred in patients on complex medication regimens

**Phenytoin Pharmacokinetics (Zero-Order):**
- Michaelis-Menten kinetics at therapeutic doses
- Small dose increases can cause disproportionately large level increases
- Free phenytoin level needed in hypoalbuminemia: Corrected level = measured / (0.2 x albumin + 0.1)
- IV: Fosphenytoin preferred (less infusion-site reactions, cardiac monitoring still required)

## Special Populations

**Pregnancy:**
- Valproate: HIGHEST teratogenic risk (NTDs 5-10%, IQ reduction, autism risk)
  - Avoid in women of childbearing potential
- Topiramate: Oral clefts, SGA infants, metabolic acidosis in neonate
- Lamotrigine: LOWEST teratogenic risk among major AEDs
  - Levels drop 50-70% during pregnancy due to increased clearance
  - Must increase dose; monitor levels monthly
- Levetiracetam: Low risk based on available data; levels also decrease in pregnancy
- Folic acid 4-5 mg/day recommended for all women on AEDs

**Elderly:**
- Start low, go slow
- Lamotrigine, levetiracetam, lacosamide preferred
- Avoid enzyme inducers (drug interactions, bone health)
- Phenytoin: Altered protein binding, cognitive effects, falls

**Renal Impairment:**
- Adjust: Levetiracetam, gabapentin, pregabalin, lacosamide, topiramate
- No adjustment: Valproate, carbamazepine, phenytoin (hepatic metabolism)

**Hepatic Impairment:**
- Avoid: Valproate (hepatotoxicity), carbamazepine
- Prefer: Levetiracetam, gabapentin, pregabalin (renal clearance)`,

      keyTerms: [
        { term: 'use-dependent block', definition: 'Sodium channel blockers that are more effective when neurons fire rapidly, selectively targeting seizure activity' },
        { term: 'zero-order kinetics', definition: 'Drug metabolism where a constant amount (not percentage) is eliminated per time, leading to non-linear level changes (phenytoin)' },
        { term: 'enzyme inducer', definition: 'Drug that increases CYP450 enzyme activity, accelerating metabolism of other drugs' },
        { term: 'SV2A', definition: 'Synaptic Vesicle Protein 2A - target of levetiracetam and brivaracetam that modulates neurotransmitter release' },
        { term: 'teratogenic', definition: 'Capable of causing birth defects; valproate has the highest risk among AEDs' },
      ],
      clinicalNotes:
        'Valproate + lamotrigine interaction is critical: valproate doubles lamotrigine levels, increasing SJS risk; always reduce lamotrigine dose. Phenytoin zero-order kinetics makes dose adjustments hazardous - small changes cause large level swings. Valproate must be avoided in pregnancy; lamotrigine and levetiracetam are preferred. All women of childbearing potential on AEDs need high-dose folic acid (4-5 mg/day).',
    },

    4: {
      level: 4,
      summary:
        'Advanced anticonvulsant pharmacotherapy addresses drug-resistant epilepsy through rational polytherapy, precision approaches based on genetic testing, and management of complex medication interactions in multimorbid patients.',
      explanation: `## Rational Polytherapy

**Principles:**
- Combine medications with different mechanisms of action
- Avoid combining two sodium channel blockers (additive CNS toxicity)
- Consider synergistic combinations

**Evidence-Based Combinations:**
- Valproate + lamotrigine: Synergistic (but reduce LTG dose; monitor for SJS)
- Sodium channel blocker + levetiracetam: Complementary mechanisms
- Sodium channel blocker + clobazam: Different targets
- Avoid: Two enzyme inducers, two highly sedating agents

**Cenobamate in Drug-Resistant Focal Epilepsy:**
- Dual mechanism: Persistent Na+ current inhibition + positive GABA-A allosteric modulation
- Phase 3: 21% seizure-free (highest rate for any adjunctive AED trial)
- Titration: Start 12.5 mg/day, increase every 2 weeks (DRESS risk with fast titration)
- Reduces levels of CYP3A4 substrates; increases CYP2C19 substrates
- Monitor clobazam (increased levels) and carbamazepine (decreased levels)

## AED-Related Emergencies

**Status Epilepticus Protocol (ESETT):**
- Benzodiazepine first-line, then equal efficacy of:
  - Fosphenytoin 20 mg PE/kg
  - Levetiracetam 60 mg/kg
  - Valproate 40 mg/kg
- Refractory: Midazolam, propofol, or pentobarbital infusion

**Severe Cutaneous Adverse Reactions:**
- SJS/TEN: Carbamazepine, oxcarbazepine, phenytoin, lamotrigine, phenobarbital
  - HLA-B*15:02: Screen before carbamazepine/oxcarbazepine in Southeast Asian, Chinese, Indian populations
  - HLA-A*31:01: Risk with carbamazepine in Northern European populations
  - Stop offending agent immediately; dermatology/burn unit consultation
- DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms):
  - Phenytoin, carbamazepine, lamotrigine, cenobamate
  - Onset 2-8 weeks after starting; fever, rash, eosinophilia, organ involvement

**Valproate Toxicity:**
- Hepatotoxicity: Highest risk in children <2 years on polytherapy
- Hyperammonemic encephalopathy: Can occur with normal LFTs
  - Check ammonia level in any confused patient on valproate
  - Treatment: L-carnitine, reduce/stop valproate
- Pancreatitis: Rare but serious
- Teratogenicity: 5-10% major congenital malformations (NTDs, cardiac, clefts)

## Medication Withdrawal

**When to Consider Discontinuation:**
- 2+ years seizure-free (individualized risk assessment)
- Favorable factors: Normal EEG, normal MRI, single seizure type, childhood epilepsy syndrome that remits
- Unfavorable factors: Abnormal EEG, structural lesion, JME (usually lifelong), adult-onset epilepsy

**Withdrawal Process:**
- Taper slowly over 2-6 months per drug
- One drug at a time if on polytherapy
- Avoid driving during taper and for several months after
- Recurrence risk: ~30-40% overall; highest in first 6 months

## Drug-Resistant Epilepsy: Non-Pharmacological Options

**Ketogenic Diet:**
- High-fat, low-carbohydrate diet (4:1 or 3:1 ratio)
- Mechanism: Shifts brain metabolism to ketone bodies
- Efficacy: >50% seizure reduction in ~50% of children
- Modified Atkins diet: Less restrictive alternative for adults
- Specific indication: GLUT1 deficiency (treatment of choice)

**Dietary Therapies:**
- Low glycemic index treatment (LGIT)
- Medium-chain triglyceride (MCT) diet
- All require dietitian guidance and monitoring

**Immunotherapy (Autoimmune Epilepsy):**
- First-line: IV methylprednisolone, IVIG, plasma exchange
- Second-line: Rituximab, cyclophosphamide
- Maintenance: Mycophenolate, azathioprine
- Key: Suspect if new-onset refractory status or rapidly progressive epilepsy with antibody positivity`,

      keyTerms: [
        { term: 'rational polytherapy', definition: 'Combining AEDs with complementary mechanisms of action to improve efficacy while minimizing additive side effects' },
        { term: 'DRESS', definition: 'Drug Reaction with Eosinophilia and Systemic Symptoms - potentially fatal hypersensitivity reaction to AEDs' },
        { term: 'HLA-B*15:02', definition: 'Genetic marker predicting SJS/TEN risk with carbamazepine; must be tested in at-risk populations' },
        { term: 'ketogenic diet', definition: 'High-fat, low-carbohydrate diet that shifts brain metabolism to ketones, reducing seizures' },
        { term: 'hyperammonemic encephalopathy', definition: 'Confusion from elevated ammonia levels, a serious complication of valproate' },
      ],
      clinicalNotes:
        'Cenobamate has the highest seizure-free rate of any adjunctive AED in trials (21%) but requires very slow titration due to DRESS risk. Always check HLA-B*15:02 before carbamazepine in at-risk populations. Valproate hyperammonemia can occur with normal LFTs - always check ammonia in a confused patient on valproate. Ketogenic diet is the treatment of choice for GLUT1 deficiency syndrome.',
    },

    5: {
      level: 5,
      summary:
        'The frontier of anticonvulsant therapy includes genetic-guided precision treatment, antisense oligonucleotides for monogenic epilepsies, novel neuromodulation approaches, and adaptive clinical trial designs for rare epilepsy syndromes.',
      explanation: `## Precision Pharmacotherapy

**Pharmacogenomic-Guided Treatment:**
- SCN1A (Dravet): Avoid Na+ channel blockers (CBZ, PHT, LTG, OXC)
  - Use: Valproate, clobazam, stiripentol, fenfluramine, cannabidiol
- KCNQ2/3: Na+ channel blockers are effective (carbamazepine, phenytoin)
- PRRT2: Exquisitely responsive to carbamazepine (even low doses)
- SLC2A1 (GLUT1 deficiency): Ketogenic diet is treatment of choice
- TSC1/TSC2: Everolimus (mTOR inhibitor) + vigabatrin
- CDKL5 deficiency: Ganaxolone (FDA-approved neurosteroid)

**Gene-Targeted Therapies:**
- STK-001 (ASO for SCN1A): Upregulates functional Na+ channel expression in Dravet
  - MONARCH study: Phase 2 dose-ranging
- ETX101: AAV-based gene therapy expressing SCN1A in inhibitory neurons
- Vorinostat: Histone deacetylase inhibitor for UBA5-related progressive myoclonus epilepsy
- Patient-specific ASOs: N-of-1 paradigm (Milasen precedent for CLN7 disease)

## Emerging Drug Classes

**Neurosteroids:**
- Ganaxolone: Synthetic neurosteroid modulating GABA-A (extrasynaptic delta subunit)
  - FDA-approved for CDKL5 deficiency disorder
  - Trials in TSC, PCDH19 epilepsy, status epilepticus
- Brexanolone (allopregnanolone IV): Approved for postpartum depression; seizure trials
- Zuranolone: Oral neurosteroid under investigation

**Serotonin-Based:**
- Fenfluramine (Fintepla): Serotonin releasing agent + 5-HT receptor agonist
  - FDA-approved: Dravet syndrome, Lennox-Gastaut syndrome
  - Cardiac monitoring: Echocardiogram every 6 months (valvulopathy risk low at current doses)
- Lorcaserin: Was investigated but withdrawn from market

**Cannabinoid-Based:**
- Cannabidiol (Epidiolex): FDA-approved for Dravet, LGS, TSC-associated seizures
  - Mechanism: Not fully understood; GPR55 antagonism, TRPV1 modulation, adenosine reuptake inhibition
  - Drug interaction: Increases clobazam active metabolite (N-desmethylclobazam)
  - Hepatotoxicity risk with concurrent valproate
- THC-containing products: Limited evidence, psychoactive effects, not recommended

**Cholesterol Pathway:**
- Soticlestat (TAK-935): Cholesterol 24-hydroxylase inhibitor
  - Reduces brain cholesterol turnover
  - Under investigation for Dravet and LGS

## Novel Drug Development Strategies

**Adaptive Platform Trials:**
- ETERNITY: Basket trial testing multiple drugs across rare epilepsies simultaneously
- Reduce time and cost of rare disease drug development
- Bayesian adaptive designs for small populations

**Biomarker-Driven Development:**
- EEG biomarkers: Seizure burden reduction, interictal spike frequency
- Blood-based: Drug-specific pharmacodynamic markers
- Wearable seizure detection for outcome measurement in trials

**Repurposing:**
- Quinidine: Repurposed for KCNT1-related epilepsy (limited efficacy)
- Memantine: GRIN-related epilepsy (NMDA receptor mutations)
- mTOR inhibitors: Expanding beyond TSC to other mTOR-pathway epilepsies

## Women and Epilepsy

**Contraception:**
- Enzyme inducers (CBZ, PHT, PB): Reduce OCP, implant, and patch efficacy
  - Use IUD (copper or hormonal) or depot medroxyprogesterone
  - If OCP used: >=50 mcg ethinyl estradiol
- Non-inducers (LEV, LTG, VPA, gabapentin, pregabalin, lacosamide): OCP safe
- Lamotrigine: Estrogen increases LTG clearance; levels drop on OCP; adjust dose

**Pregnancy Management:**
- Pre-conception: Optimize to safest AED at lowest effective dose
- Folic acid 4-5 mg/day starting before conception
- Teratogenicity ranking (highest to lowest risk): Valproate > topiramate > phenobarbital > phenytoin > carbamazepine > lamotrigine > levetiracetam
- Monitor AED levels monthly (especially LTG - drops 50-70%)
- EURAP registry: Ongoing international registry of AED teratogenicity

**Breastfeeding:**
- Generally encouraged for most AEDs
- Low infant exposure: Valproate, carbamazepine, phenytoin
- Moderate exposure: Lamotrigine, levetiracetam
- Monitor infant for sedation with benzodiazepines, phenobarbital

## Stopping AEDs

**Evidence-Based Approach:**
- SANAD trial withdrawal data: 2-year seizure-free period standard
- MRI-guided: Normal MRI with resolved EEG abnormality = lower recurrence
- EEG-guided: Persistent epileptiform discharges = higher recurrence risk (2x)
- Syndrome-specific:
  - Childhood absence: Good remission rate; attempt withdrawal
  - JME: High relapse rate (~90%) - usually lifelong therapy
  - Temporal lobe epilepsy: Consider surgical cure rather than AED withdrawal attempts`,

      keyTerms: [
        { term: 'antisense oligonucleotide', definition: 'Synthetic nucleic acid targeting mRNA to modify gene expression; emerging therapy for genetic epilepsies like Dravet' },
        { term: 'ganaxolone', definition: 'Synthetic neurosteroid GABA-A modulator FDA-approved for CDKL5 deficiency disorder seizures' },
        { term: 'fenfluramine', definition: 'Serotonin-based drug FDA-approved for Dravet and Lennox-Gastaut syndrome seizures' },
        { term: 'cannabidiol', definition: 'Non-psychoactive cannabinoid (Epidiolex) FDA-approved for Dravet, LGS, and TSC-associated seizures' },
        { term: 'adaptive platform trial', definition: 'Clinical trial design testing multiple treatments across related conditions simultaneously, increasing efficiency for rare diseases' },
        { term: 'EURAP', definition: 'European Registry of Antiepileptic Drugs and Pregnancy - international teratogenicity monitoring' },
      ],
      clinicalNotes: `Anticonvulsant therapy practice pearls:
1. Genetic testing changes AED choice in ~30% of early-onset epilepsy cases
2. SCN1A (Dravet): NEVER use sodium channel blockers (CBZ, PHT, LTG)
3. Cenobamate has highest adjunctive seizure-free rate (21%) but requires 12-week titration
4. Valproate is the most teratogenic common AED - avoid in women of childbearing potential
5. Lamotrigine levels drop 50-70% in pregnancy; monitor monthly and increase dose
6. HLA-B*15:02 testing mandatory before carbamazepine in at-risk populations
7. Check ammonia in any confused patient on valproate (can be elevated with normal LFTs)
8. Enzyme-inducing AEDs reduce OCP efficacy - use IUD or high-dose estrogen
9. JME usually requires lifelong therapy (~90% relapse on withdrawal)`,
    },
  },

  media: [
    {
      id: 'aed-mechanism-diagram',
      type: 'diagram',
      filename: 'aed_mechanisms_of_action.svg',
      title: 'Antiseizure Medication Mechanisms of Action',
      description: 'Diagram showing sodium channel, GABA, calcium channel, and SV2A targets of major AEDs',
    },
    {
      id: 'aed-selection-flowchart',
      type: 'diagram',
      filename: 'aed_selection_by_seizure_type.svg',
      title: 'AED Selection by Seizure Type',
      description: 'Flowchart guiding first-line AED selection for focal, generalized, and absence seizures',
    },
  ],

  citations: [
    {
      id: 'marson-sanad-ii-2021',
      type: 'article',
      title: 'The SANAD II study of the effectiveness and cost-effectiveness of valproate versus levetiracetam for newly diagnosed generalised and unclassifiable epilepsy',
      authors: ['Marson AG', 'Burnside G', 'Appleton R'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(21)00246-4',
    },
    {
      id: 'krauss-cenobamate-2020',
      type: 'article',
      title: 'Cenobamate for the Treatment of Focal Seizures in Adults',
      authors: ['Krauss GL', 'Klein P', 'Brandt C'],
      source: 'Lancet Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-seizure-types', targetType: 'condition', relationship: 'related', label: 'Seizure Types' },
    { targetId: 'neuro-ischemic-stroke-depth', targetType: 'condition', relationship: 'see-also', label: 'Ischemic Stroke (post-stroke seizure management)' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'epilepsy', 'pharmacology', 'antiseizure medications', 'pregnancy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'pharmacology', 'pediatrics'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anticonvulsantTherapyContent;
