/**
 * Non-Opioid Analgesics - Comprehensive Guide
 *
 * Acetaminophen, NSAIDs, and other non-opioid pain medications.
 * First-line therapy for mild-moderate pain.
 */

import { EducationalContent } from '../types';
import { PainMedication } from './types';

export const nonOpioidMedications: PainMedication[] = [
  {
    genericName: 'Acetaminophen',
    brandNames: ['Tylenol', 'Panadol', 'Ofirmev (IV)'],
    class: 'Non-opioid analgesic',
    subclass: 'Para-aminophenol derivative',
    mechanismOfAction: 'Central COX inhibition, serotonergic pathway activation, endocannabinoid system modulation. Exact mechanism incompletely understood.',
    indications: ['Mild-moderate pain', 'Fever', 'Osteoarthritis', 'Headache', 'Post-operative pain (adjunct)'],
    contraindications: ['Severe hepatic impairment', 'Active liver disease'],
    commonDosing: '325-1000mg every 4-6 hours PRN',
    maxDailyDose: '4000mg/day (3000mg in elderly, chronic alcohol use, liver disease)',
    sideEffects: {
      common: ['Rare at therapeutic doses'],
      serious: ['Hepatotoxicity (dose-related)', 'Acute liver failure', 'Severe skin reactions (rare)'],
    },
    drugInteractions: ['Warfarin (increases INR)', 'Alcohol (hepatotoxicity)', 'Isoniazid', 'Rifampin'],
    specialPopulations: [
      { population: 'Hepatic impairment', consideration: 'Reduce dose 50-75%, max 2g/day' },
      { population: 'Chronic alcohol use (>3 drinks/day)', consideration: 'Max 2g/day' },
      { population: 'Malnutrition/fasting', consideration: 'Increased hepatotoxicity risk' },
      { population: 'Pregnancy', consideration: 'Preferred analgesic - no known teratogenic effects' },
    ],
    monitoringRequired: ['LFTs if prolonged use or risk factors'],
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Ibuprofen',
    brandNames: ['Advil', 'Motrin', 'Caldolor (IV)'],
    class: 'NSAID',
    subclass: 'Propionic acid derivative',
    mechanismOfAction: 'Non-selective COX-1 and COX-2 inhibition, reducing prostaglandin synthesis',
    indications: ['Mild-moderate pain', 'Inflammation', 'Fever', 'Dysmenorrhea', 'Osteoarthritis', 'Rheumatoid arthritis'],
    contraindications: ['Active GI bleeding/ulcer', 'Severe renal impairment (CrCl <30)', 'CABG perioperative period', 'Third trimester pregnancy', 'Aspirin-exacerbated respiratory disease'],
    commonDosing: '200-400mg every 4-6 hours; max 1200mg/day OTC, 3200mg/day Rx',
    maxDailyDose: '3200mg',
    sideEffects: {
      common: ['Dyspepsia', 'Nausea', 'Abdominal pain', 'Headache', 'Dizziness'],
      serious: ['GI bleeding/perforation', 'Cardiovascular events (MI, stroke)', 'Acute kidney injury', 'Hypertension', 'Bronchospasm (aspirin-sensitive asthma)'],
    },
    drugInteractions: ['Aspirin (interferes with cardioprotection)', 'Anticoagulants', 'ACE inhibitors/ARBs', 'Diuretics', 'Lithium', 'Methotrexate', 'SSRIs'],
    specialPopulations: [
      { population: 'Elderly (>65)', consideration: 'Increased GI, renal, CV risk - use lowest dose, shortest duration' },
      { population: 'CKD', consideration: 'Avoid if CrCl <30, use with caution if <60' },
      { population: 'Heart failure', consideration: 'May worsen fluid retention' },
      { population: 'Pregnancy', consideration: 'Avoid in third trimester - premature DA closure' },
    ],
    monitoringRequired: ['Blood pressure', 'Renal function', 'GI symptoms', 'Signs of bleeding'],
    blackBoxWarning: 'Increased risk of serious cardiovascular thrombotic events, MI, and stroke. Increased risk of serious GI adverse events including bleeding, ulceration, and perforation.',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Naproxen',
    brandNames: ['Aleve', 'Naprosyn', 'Anaprox'],
    class: 'NSAID',
    subclass: 'Propionic acid derivative',
    mechanismOfAction: 'Non-selective COX-1 and COX-2 inhibition',
    indications: ['Pain', 'Inflammation', 'Arthritis', 'Gout', 'Dysmenorrhea', 'Tendonitis'],
    contraindications: ['Same as ibuprofen'],
    commonDosing: '220-500mg every 8-12 hours',
    maxDailyDose: '1250mg/day (1000mg/day for >65 years)',
    sideEffects: {
      common: ['Dyspepsia', 'Nausea', 'Headache', 'Dizziness', 'Drowsiness'],
      serious: ['GI bleeding', 'Cardiovascular events', 'Renal impairment', 'Hepatotoxicity'],
    },
    drugInteractions: ['Same as ibuprofen'],
    specialPopulations: [
      { population: 'Elderly', consideration: 'Longer half-life increases accumulation risk' },
      { population: 'Cardiovascular disease', consideration: 'May have lower CV risk than other NSAIDs (PRECISION trial)' },
    ],
    monitoringRequired: ['Same as ibuprofen'],
    blackBoxWarning: 'Same as ibuprofen (CV and GI risks)',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Celecoxib',
    brandNames: ['Celebrex'],
    class: 'NSAID',
    subclass: 'COX-2 selective inhibitor',
    mechanismOfAction: 'Selective COX-2 inhibition with minimal COX-1 effects at therapeutic doses',
    indications: ['Osteoarthritis', 'Rheumatoid arthritis', 'Acute pain', 'Dysmenorrhea', 'Ankylosing spondylitis', 'JIA'],
    contraindications: ['Sulfonamide allergy (caution)', 'CABG perioperative', 'Severe renal/hepatic impairment', 'Known CV disease (relative)'],
    commonDosing: '100-200mg once or twice daily',
    maxDailyDose: '400mg',
    sideEffects: {
      common: ['Dyspepsia', 'Diarrhea', 'Abdominal pain', 'Headache', 'Peripheral edema'],
      serious: ['Cardiovascular events', 'GI bleeding (lower than non-selective NSAIDs)', 'Renal impairment', 'Serious skin reactions'],
    },
    drugInteractions: ['CYP2C9 inhibitors (fluconazole)', 'Warfarin', 'Lithium', 'ACE inhibitors'],
    specialPopulations: [
      { population: 'CYP2C9 poor metabolizers', consideration: 'Reduce dose by 50%' },
      { population: 'GI risk patients', consideration: 'Lower GI risk than non-selective NSAIDs' },
    ],
    monitoringRequired: ['Blood pressure', 'Renal function', 'CV status'],
    blackBoxWarning: 'Cardiovascular and GI risks (same class warning as all NSAIDs)',
    deaSchedule: 'unscheduled',
    costCategory: 'moderate',
  },
  {
    genericName: 'Meloxicam',
    brandNames: ['Mobic', 'Vivlodex'],
    class: 'NSAID',
    subclass: 'Preferential COX-2 inhibitor',
    mechanismOfAction: 'Preferential COX-2 inhibition (less selective than celecoxib)',
    indications: ['Osteoarthritis', 'Rheumatoid arthritis', 'JIA'],
    contraindications: ['Same as other NSAIDs'],
    commonDosing: '7.5-15mg once daily',
    maxDailyDose: '15mg',
    sideEffects: {
      common: ['Dyspepsia', 'Diarrhea', 'Nausea', 'Headache'],
      serious: ['GI bleeding', 'CV events', 'Renal impairment'],
    },
    drugInteractions: ['Same as other NSAIDs', 'CYP2C9 substrates'],
    specialPopulations: [
      { population: 'Elderly', consideration: 'Once-daily dosing convenient, still use with caution' },
    ],
    monitoringRequired: ['Same as other NSAIDs'],
    blackBoxWarning: 'Same as other NSAIDs',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Ketorolac',
    brandNames: ['Toradol', 'Sprix (intranasal)'],
    class: 'NSAID',
    subclass: 'Pyrrolizine carboxylic acid derivative',
    mechanismOfAction: 'Potent COX-1/COX-2 inhibition with strong analgesic properties',
    indications: ['Short-term moderate-severe pain', 'Post-operative pain'],
    contraindications: ['Duration >5 days', 'Active GI bleeding', 'Renal impairment', 'High bleeding risk', 'Concomitant NSAIDs/aspirin', 'Labor/delivery'],
    commonDosing: 'IM/IV: 30mg; then 15-30mg every 6 hours. PO: 10mg every 4-6 hours',
    maxDailyDose: '120mg (day 1), 60mg (subsequent days), 40mg (elderly, renal impairment, <50kg)',
    sideEffects: {
      common: ['Nausea', 'Dyspepsia', 'Headache', 'Dizziness', 'Drowsiness'],
      serious: ['GI bleeding (higher risk than other NSAIDs)', 'Acute kidney injury', 'Bleeding', 'Bronchospasm'],
    },
    drugInteractions: ['Other NSAIDs (contraindicated)', 'Anticoagulants', 'Probenecid', 'Pentoxifylline'],
    specialPopulations: [
      { population: 'Elderly (>65)', consideration: 'Max 60mg/day total, max 15mg per dose' },
      { population: 'Renal impairment', consideration: 'Contraindicated if significant; otherwise max 60mg/day' },
      { population: '<50 kg', consideration: 'Max 60mg/day' },
    ],
    monitoringRequired: ['Renal function', 'GI symptoms', 'Duration of use (<5 days)'],
    blackBoxWarning: 'Contraindicated in labor/delivery, nursing, CVD, peptic ulcer. Max 5 days. Increased GI/bleeding risk.',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
  {
    genericName: 'Aspirin',
    brandNames: ['Bayer', 'Ecotrin', 'Bufferin'],
    class: 'NSAID',
    subclass: 'Salicylate',
    mechanismOfAction: 'Irreversible COX-1/COX-2 inhibition via acetylation; permanent platelet inhibition',
    indications: ['Mild pain', 'Fever', 'Inflammation', 'Cardiovascular prophylaxis (low dose)', 'Acute coronary syndrome'],
    contraindications: ['Children with viral illness (Reye syndrome)', 'Active bleeding', 'Aspirin-exacerbated respiratory disease', 'Third trimester pregnancy'],
    commonDosing: 'Analgesic: 325-650mg every 4-6 hours; Cardioprotection: 81-325mg daily',
    maxDailyDose: '4000mg (analgesic doses)',
    sideEffects: {
      common: ['GI upset', 'Dyspepsia', 'Tinnitus (toxicity sign)'],
      serious: ['GI bleeding', 'Hemorrhagic stroke', 'Reye syndrome (children)', 'Salicylate toxicity'],
    },
    drugInteractions: ['Anticoagulants', 'Methotrexate', 'Valproic acid', 'Ibuprofen (may block cardioprotection)', 'Uricosurics'],
    specialPopulations: [
      { population: 'Children <19', consideration: 'Avoid in viral illness due to Reye syndrome risk' },
      { population: 'G6PD deficiency', consideration: 'High doses may cause hemolysis' },
    ],
    monitoringRequired: ['Bleeding signs', 'Tinnitus', 'GI symptoms'],
    blackBoxWarning: 'Reye syndrome warning for pediatric use',
    deaSchedule: 'unscheduled',
    costCategory: 'low',
  },
];

export const nonOpioidAnalgesics: EducationalContent = {
  id: 'pain-non-opioid-analgesics',
  type: 'concept',
  name: 'Non-Opioid Analgesics',
  alternateNames: ['Non-narcotic pain relievers', 'Non-opioid pain medications', 'NSAIDs and Acetaminophen'],

  levels: {
    1: {
      level: 1,
      summary: 'Non-opioid pain relievers like Tylenol, Advil, and Aleve are medicines you can buy at the store to help with everyday pain and fever.',
      explanation: `There are pain medicines that work well and are not addictive. You can buy most of them at any store.

**Acetaminophen (Tylenol):**
- Good for headaches, fever, minor aches
- Gentle on the stomach
- IMPORTANT: Too much can hurt your liver
- Don't take more than directed on the bottle
- Be careful if you drink alcohol

**NSAIDs (Advil, Aleve, Aspirin):**
- Good for pain AND swelling
- Help with arthritis, sprains, menstrual cramps
- Can upset your stomach
- Take with food if possible

**When to Choose Which:**
| Problem | Best Choice |
|---------|-------------|
| Headache | Either works |
| Fever | Either works |
| Swelling/inflammation | NSAIDs |
| Stomach problems | Acetaminophen |
| Arthritis | NSAIDs (or ask doctor) |

**Safety Tips:**
- Read labels carefully - many cold medicines contain these already
- Don't take more than one type at a time without asking
- Drink water to protect your kidneys
- Tell your doctor all the medicines you take`,
      keyTerms: [
        { term: 'over-the-counter', definition: 'Medicine you can buy without a prescription' },
        { term: 'inflammation', definition: 'Swelling, redness, and heat in part of your body' },
        { term: 'fever', definition: 'When your body temperature is higher than normal' },
      ],
      analogies: [
        'Think of pain medicines like tools - acetaminophen is like a screwdriver (good for many jobs), NSAIDs are like a wrench (better when there\'s swelling to reduce).',
        'NSAIDs work like turning down both the pain volume AND the inflammation alarm. Acetaminophen mainly turns down just the pain volume.',
      ],
      examples: [
        'Taking ibuprofen for a twisted ankle helps with both the pain and the swelling.',
        'If you have heartburn often, acetaminophen might be safer for headaches than ibuprofen.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acetaminophen and NSAIDs are first-line treatments for mild-moderate pain, working through different mechanisms with distinct safety profiles for GI, cardiovascular, renal, and hepatic systems.',
      explanation: `**Acetaminophen (Tylenol):**

*How it works:*
- Acts mainly in the brain and spinal cord
- Reduces pain perception and fever
- Does NOT reduce inflammation

*Dosing:*
- 325-1000mg every 4-6 hours
- Maximum: 3000-4000mg/day
- Lower max if: elderly, liver problems, alcohol use

*Key safety points:*
- Main risk: Liver damage (dose-related)
- Hidden in many combination products (check labels!)
- Safest choice for: Pregnancy, kidney problems, stomach issues

**NSAIDs (Ibuprofen, Naproxen, Aspirin):**

*How they work:*
- Block COX enzymes that make prostaglandins
- Prostaglandins cause pain, inflammation, and fever
- Effect is throughout the body

*Dosing examples:*
| Drug | Single Dose | Max Daily |
|------|-------------|-----------|
| Ibuprofen | 200-400mg | 1200mg OTC, 3200mg Rx |
| Naproxen | 220-500mg | 660mg OTC, 1250mg Rx |
| Aspirin | 325-650mg | 4000mg |

*Safety concerns:*
- Stomach: Ulcers, bleeding (take with food)
- Heart: Increased risk of heart attack/stroke (except possibly naproxen)
- Kidneys: Can cause damage, especially if dehydrated
- Blood pressure: May increase

*Who should avoid NSAIDs:*
- Active stomach ulcer or GI bleeding
- Kidney disease
- Heart failure
- Third trimester pregnancy
- After heart bypass surgery

**Choosing Between Them:**

| Situation | Better Choice |
|-----------|---------------|
| Inflammation present | NSAID |
| Liver concerns | NSAID (but watch kidneys) |
| Kidney concerns | Acetaminophen |
| Stomach problems | Acetaminophen |
| Heart disease | Acetaminophen (or naproxen) |
| Pregnancy | Acetaminophen |`,
      keyTerms: [
        { term: 'NSAID', definition: 'Non-Steroidal Anti-Inflammatory Drug - reduces pain, fever, and inflammation' },
        { term: 'COX enzymes', definition: 'Cyclooxygenase - enzymes that make prostaglandins (pain/inflammation chemicals)' },
        { term: 'prostaglandins', definition: 'Chemical messengers that cause inflammation, pain, and fever' },
        { term: 'hepatotoxicity', definition: 'Liver damage or toxicity from medications or substances' },
      ],
      analogies: [
        'COX enzymes are like factories making prostaglandins. NSAIDs shut down these factories. Acetaminophen works upstream, turning down the pain signal at the brain level.',
      ],
      patientCounselingPoints: [
        'Check all medicine labels - many contain acetaminophen or NSAIDs hidden in them',
        'Take NSAIDs with food to protect your stomach',
        'Don\'t exceed maximum doses, even if pain continues',
        'Stay hydrated, especially when taking NSAIDs',
        'Tell your doctor about all OTC medicines you take',
      ],
    },
    3: {
      level: 3,
      summary: 'Non-opioid analgesics include centrally-acting acetaminophen and peripherally/centrally-acting NSAIDs with varying COX selectivity, each with distinct pharmacokinetics, efficacy profiles, and organ-specific toxicities requiring risk stratification.',
      explanation: `**Acetaminophen Pharmacology:**

*Mechanism of Action:*
- Central COX inhibition (weak peripheral effect)
- Activation of descending serotonergic pathways
- Endocannabinoid system modulation (FAAH inhibition)
- TRPV1 activation via AM404 metabolite
- No significant anti-inflammatory effect

*Pharmacokinetics:*
- Bioavailability: 85-98% (oral)
- Tmax: 30-60 minutes
- Half-life: 2-3 hours
- Metabolism: Hepatic (glucuronidation 55%, sulfation 30%, CYP2E1 5-10%)
- CYP2E1 pathway produces toxic NAPQI (normally detoxified by glutathione)

*Hepatotoxicity:*
- Threshold: ~150mg/kg single dose, >4g/day chronic
- Risk factors: Alcoholism, malnutrition (low glutathione), CYP2E1 inducers
- Treatment: N-acetylcysteine (NAC) within 8-10 hours of overdose

**NSAID Pharmacology:**

*COX Isoenzyme Selectivity:*
| Drug | COX-1 | COX-2 | Clinical Implication |
|------|-------|-------|----------------------|
| Aspirin | +++ | ++ | Irreversible, antiplatelet |
| Ibuprofen | ++ | ++ | Non-selective, short-acting |
| Naproxen | ++ | ++ | Non-selective, long-acting |
| Meloxicam | + | ++ | Preferential COX-2 |
| Celecoxib | - | +++ | Selective COX-2 |
| Ketorolac | +++ | ++ | Potent, short-term use only |

*COX-1 Functions (constitutive):*
- Gastric mucosal protection
- Platelet aggregation (TXA2)
- Renal blood flow maintenance

*COX-2 Functions (inducible/constitutive):*
- Inflammation response
- Pain sensitization
- Renal sodium/water regulation
- Vascular prostacyclin (PGI2)

**Organ-Specific Toxicities:**

*Gastrointestinal:*
- Mechanism: COX-1 inhibition → decreased PGE2 → reduced mucus/bicarbonate
- Risk factors: Age >65, H. pylori, anticoagulants, glucocorticoids, prior ulcer
- Prevention: PPI co-therapy, COX-2 selective agents
- GI risk ranking: Ketorolac > Piroxicam > Indomethacin > Naproxen > Ibuprofen > Celecoxib

*Cardiovascular:*
- Mechanism: COX-2 inhibition → decreased PGI2 → prothrombotic state
- All NSAIDs carry CV risk (FDA black box)
- Relative risk: Diclofenac highest, naproxen possibly lowest (PRECISION trial)
- Aspirin exception: Antiplatelet effect via COX-1

*Renal:*
- Mechanism: Prostaglandin-mediated afferent arteriolar dilation blocked
- Manifestations: AKI, sodium retention, hyperkalemia, hypertension
- High-risk: Volume depletion, CHF, ACE-I/ARB use, elderly

**Special Populations:**

*Perioperative:*
- NSAIDs: Bleeding risk, bone healing concerns
- Ketorolac: Effective but 5-day limit
- Acetaminophen IV: Opioid-sparing, safe in most

*Chronic Kidney Disease:*
- Acetaminophen: Preferred, but accumulation of metabolites
- NSAIDs: Avoid in CKD stage 4-5

*Pregnancy:*
- Acetaminophen: Safe throughout
- NSAIDs: Avoid third trimester (premature DA closure, oligohydramnios)`,
      keyTerms: [
        { term: 'NAPQI', definition: 'N-acetyl-p-benzoquinone imine - toxic acetaminophen metabolite detoxified by glutathione' },
        { term: 'TXA2', definition: 'Thromboxane A2 - COX-1 product promoting platelet aggregation' },
        { term: 'PGI2', definition: 'Prostacyclin - COX-2 product with vasodilatory and antiplatelet effects' },
        { term: 'FAAH', definition: 'Fatty acid amide hydrolase - enzyme that degrades endocannabinoids' },
      ],
      clinicalNotes: 'The CV safety of celecoxib vs. nonselective NSAIDs was addressed in the PRECISION trial (2016), showing non-inferiority. However, GI safety is better with COX-2 selective agents. For patients requiring chronic NSAID therapy with GI risk factors, consider celecoxib or nonselective NSAID + PPI.',
    },
    4: {
      level: 4,
      summary: 'Advanced NSAID pharmacology encompasses COX isoenzyme kinetics, prostaglandin-mediated organ physiology, population pharmacokinetics, drug interactions through CYP450 and protein binding, and evidence-based risk stratification algorithms.',
      explanation: `**Advanced Acetaminophen Pharmacology:**

*Mechanism Controversies:*
- COX-3 hypothesis: Splice variant mainly in CNS (disputed)
- AM404: Acetaminophen metabolite activating TRPV1, inhibiting anandamide reuptake
- Serotonergic: Activates descending bulbospinal pathways
- Likely multiple mechanisms contributing

*Pharmacokinetic Considerations:*
- CYP2E1 inducers (alcohol, isoniazid) → increased NAPQI
- Glutathione depletion (malnutrition, HIV) → toxicity at lower doses
- Rectal bioavailability: ~60-80% (variable)
- IV acetaminophen: Faster onset, higher Cmax, opioid-sparing proven

*Toxicity Management:*
- Rumack-Matthew nomogram: Single acute ingestion
- NAC dosing: 21-hour IV protocol or 72-hour oral
- Late presenters: Extended NAC may help up to 72 hours post-ingestion

**NSAID Comparative Pharmacology:**

*Pharmacokinetic Parameters:*
| Drug | T1/2 (hr) | COX Selectivity | Protein Binding |
|------|-----------|-----------------|-----------------|
| Ibuprofen | 2-4 | Non-selective | 99% |
| Naproxen | 12-17 | Non-selective | 99% |
| Meloxicam | 15-20 | Preferential COX-2 | 99% |
| Celecoxib | 11 | Selective COX-2 | 97% |
| Ketorolac | 5-6 | Non-selective | 99% |

*Drug Interactions:*

CYP2C9 Substrates (celecoxib, meloxicam):
- Inhibitors (fluconazole, amiodarone): Increased NSAID levels
- Inducers (rifampin): Decreased efficacy

Protein Binding Displacement:
- Warfarin: Free fraction increased → bleeding risk
- Phenytoin: Monitor levels
- Methotrexate: Reduced clearance → toxicity

Pharmacodynamic Interactions:
- ACE-I/ARB + diuretic + NSAID: "Triple whammy" for AKI
- Aspirin + ibuprofen: Competitive COX-1 binding → reduced cardioprotection
- Anticoagulants: Synergistic bleeding risk

**Evidence-Based Risk Stratification:**

*GI Risk Algorithm:*
Low risk: No risk factors → Non-selective NSAID alone
Moderate risk: 1-2 risk factors → COX-2 or NSAID + PPI
High risk: >2 factors or prior bleed → COX-2 + PPI (or avoid NSAIDs)

*CV Risk Considerations (ACC/AHA):*
- Known ASCVD: Avoid NSAIDs if possible; naproxen if necessary
- High CV risk: Lowest dose, shortest duration
- All patients: Monitor BP, edema

*Renal Protection:*
- eGFR <30: Avoid NSAIDs
- eGFR 30-60: Cautious use, monitor
- Volume depletion: Hold NSAIDs

**Topical NSAIDs:**

*Diclofenac Preparations:*
- Gel (Voltaren): OTC, 1% applied QID
- Patch (Flector): 1.3% BID
- Solution (Pennsaid): 1.5-2% for knee OA

*Evidence:*
- Effective for superficial joint pain (knee, hand OA)
- NNT ~8-10 for 50% pain reduction
- Systemic absorption: ~6-10% of oral dose
- Lower GI/CV risk than oral (Cochrane review)

**Specialized Agents:**

*Indomethacin:*
- Potent, high toxicity profile
- Niche uses: Gout, pericarditis, patent DA closure

*Ketorolac:*
- Potency approaches opioids for acute pain
- Maximum 5 days (any route combined)
- Valuable perioperative opioid-sparing role`,
      keyTerms: [
        { term: 'Rumack-Matthew nomogram', definition: 'Graph predicting hepatotoxicity risk from single acetaminophen ingestion based on level and time' },
        { term: 'Triple whammy', definition: 'ACE-I/ARB + diuretic + NSAID combination causing acute kidney injury' },
        { term: 'ASCVD', definition: 'Atherosclerotic Cardiovascular Disease - includes coronary artery disease, stroke, peripheral artery disease' },
        { term: 'NNT', definition: 'Number Needed to Treat - patients needed to treat for one to benefit' },
      ],
      clinicalNotes: 'When ibuprofen and aspirin are used concomitantly, administer aspirin at least 30 minutes before or 8 hours after ibuprofen to preserve cardioprotection. This is due to competitive binding at the COX-1 active site.',
    },
    5: {
      level: 5,
      summary: 'Contemporary non-opioid analgesic therapeutics integrates precision pharmacology, pharmacogenomics, advanced formulation science, comparative effectiveness data, and evolving regulatory frameworks within multimodal analgesia paradigms.',
      explanation: `**Pharmacogenomics of NSAIDs:**

*CYP2C9 Polymorphisms:*
- *2, *3 alleles: Reduced metabolism
- Celecoxib: FDA label recommends dose reduction in poor metabolizers
- Clinical impact: Higher plasma levels, increased toxicity risk
- Prevalence: ~35% carry at least one variant allele

*Aspirin Resistance:*
- Phenotype: Failure to inhibit platelet function despite therapy
- Mechanisms: Genetic (COX-1/COX-2 variants, GPIIIa PlA), acquired (NSAIDs, PPI)
- Testing: Light transmission aggregometry, VerifyNow, PFA-100
- Prevalence: 5-45% depending on definition and method

**Novel NSAID Formulations:**

*GI-Sparing Approaches:*
- Naproxcinod (NO-releasing NSAID): Improved GI safety in trials, not approved
- PA32540 (aspirin + omeprazole): Reduces GI events
- Hydrogen sulfide (H2S)-releasing NSAIDs: Preclinical

*Enhanced Delivery:*
- SoluMatrix technology (Tivorbex): Smaller particle ibuprofen, faster onset
- Submicron formulations: Improved bioavailability at lower doses

**Comparative Effectiveness Evidence:**

*PRECISION Trial (2016):*
- Celecoxib vs. Ibuprofen vs. Naproxen in high CV risk
- Primary outcome: Non-inferiority of celecoxib
- GI outcomes: Celecoxib superior
- Limitations: 27% completion rate, moderate doses

*SCOT Trial (2017):*
- Celecoxib vs. nonselective NSAIDs, CV-safe population
- No difference in CV outcomes
- Lower GI events with celecoxib

*Meta-analyses (CNT Collaboration, Lancet 2013):*
- Diclofenac: Highest CV risk (similar to coxibs)
- Naproxen: Lowest CV risk
- All NSAIDs: Dose-dependent GI and CV risks

**Regulatory Landscape:**

*FDA Actions:*
- 2015: Strengthened CV warning for all NSAIDs
- 2020: Ibuprofen interaction warning with aspirin
- OTC dose limits maintained despite prescription availability

*International Variations:*
- Some coxibs available abroad (etoricoxib, parecoxib)
- Topical NSAID availability differs
- Prescription status varies by country

**Integration in Multimodal Analgesia:**

*Perioperative Protocols:*
- Preoperative: Acetaminophen + celecoxib loading
- Intraoperative: IV acetaminophen, ketorolac
- Postoperative: Scheduled acetaminophen + NSAID, opioid PRN
- Evidence: 25-40% opioid reduction (multiple RCTs)

*Chronic Pain (CDC Guidelines):*
- Non-pharmacologic therapy first
- NSAIDs: Time-limited course if needed
- Topical preferred for localized OA
- Opioids: Last resort, with clear benefits

**Emerging Targets:**

*EP Receptor Subtypes:*
- EP1 antagonists: GI protection
- EP4 antagonists: Bone pain, inflammation

*Microsomal PGE Synthase-1 (mPGES-1):*
- Downstream of COX-2
- May avoid CV risks of COX-2 inhibition
- Multiple compounds in development

*FAAH/MAGL Inhibitors:*
- Endocannabinoid system modulators
- Clinical trials ongoing

**Clinical Decision Algorithm:**

*Step 1 - Assess Risks:*
- GI: Age, H. pylori, prior ulcer, anticoagulants, steroids
- CV: Known ASCVD, CAD risk factors
- Renal: eGFR, volume status, concurrent nephrotoxins

*Step 2 - Select Agent:*
- Low GI + Low CV: Any NSAID
- High GI + Low CV: Celecoxib or nonselective + PPI
- Low GI + High CV: Naproxen (short course) or avoid
- High GI + High CV: Avoid NSAIDs, consider alternatives

*Step 3 - Optimize:*
- Lowest effective dose
- Shortest possible duration
- Monitor BP, edema, creatinine
- Reassess periodically

*Alternatives When NSAIDs Contraindicated:*
- Acetaminophen (ceiling effect, limited for inflammation)
- Topical NSAIDs (localized joint pain)
- Duloxetine (OA, chronic pain)
- Tramadol (with caution)
- Physical therapy, injections`,
      keyTerms: [
        { term: 'mPGES-1', definition: 'Microsomal prostaglandin E synthase-1 - enzyme downstream of COX-2, potential drug target' },
        { term: 'PRECISION trial', definition: 'Large RCT comparing celecoxib to ibuprofen and naproxen in high CV risk patients' },
        { term: 'naproxcinod', definition: 'Nitric oxide-releasing naproxen derivative with improved GI safety profile' },
        { term: 'CNT Collaboration', definition: 'Coxib and traditional NSAID Trialists\' Collaboration - meta-analysis group' },
      ],
      clinicalNotes: 'For patients requiring long-term NSAID therapy, consider annual assessment of renal function, BP monitoring, and periodic GI risk reassessment. The combination of topical plus low-dose oral NSAID may provide better efficacy than high-dose oral alone with improved safety.',
    },
  },

  media: [
    {
      id: 'cox-pathway-diagram',
      type: 'diagram',
      filename: 'cox-pathway.svg',
      title: 'COX Enzyme Pathway and NSAID Mechanism',
      description: 'Arachidonic acid cascade showing COX-1/COX-2 inhibition by NSAIDs',
    },
    {
      id: 'acetaminophen-metabolism',
      type: 'diagram',
      filename: 'acetaminophen-metabolism.svg',
      title: 'Acetaminophen Metabolism and NAPQI Formation',
      description: 'Hepatic metabolism pathways and toxicity mechanism',
    },
    {
      id: 'nsaid-comparison-table',
      type: 'diagram',
      filename: 'nsaid-comparison.svg',
      title: 'NSAID Comparative Properties',
      description: 'Side-by-side comparison of NSAIDs for clinical selection',
    },
  ],

  citations: [
    {
      id: 'precision-2016',
      type: 'article',
      title: 'Cardiovascular Safety of Celecoxib, Naproxen, or Ibuprofen for Arthritis',
      authors: ['Nissen SE', 'Yeomans ND', 'Solomon DH', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '375(26):2519-2529',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cntc-2013',
      type: 'article',
      title: 'Vascular and upper gastrointestinal effects of NSAIDs: meta-analyses of individual participant data',
      authors: ['Coxib and traditional NSAID Trialists Collaboration'],
      source: 'Lancet',
      chapter: '382(9894):769-779',
      accessedDate: '2025-01-24',
    },
    {
      id: 'uptodate-nsaids',
      type: 'website',
      title: 'Nonselective NSAIDs: Overview of adverse effects',
      source: 'UpToDate',
      url: 'https://www.uptodate.com',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'pain-who-ladder', targetType: 'topic', relationship: 'parent', label: 'WHO Pain Ladder' },
    { targetId: 'pain-opioid-medications', targetType: 'topic', relationship: 'sibling', label: 'Opioid Medications' },
    { targetId: 'pain-assessment-scales', targetType: 'topic', relationship: 'related', label: 'Pain Assessment' },
  ],

  tags: {
    systems: ['nervous', 'gastrointestinal', 'cardiovascular', 'renal'],
    topics: ['pain management', 'pharmacology', 'anti-inflammatory'],
    keywords: ['NSAID', 'acetaminophen', 'ibuprofen', 'naproxen', 'celecoxib', 'COX inhibitor', 'non-opioid'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'rheumatology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
