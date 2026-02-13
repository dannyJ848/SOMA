import { EducationalContent } from '../../types';

export const acetaminophenGuideContent: EducationalContent = {
  id: 'topic-medication-acetaminophen',
  type: 'topic',
  name: 'Acetaminophen Guide',
  nameEs: 'Guia de Acetaminofen',
  levels: {
    level1: {
      title: 'Acetaminophen (Tylenol): Relieving Pain and Fever Safely',
      titleEs: 'Acetaminofen (Tylenol): Aliviando el Dolor y la Fiebre de Forma Segura',
      content: `
Acetaminophen is a medicine that helps with pain and fever. You may know it as Tylenol. It is one of
the most common medicines used by adults and children. Unlike ibuprofen, it does not reduce swelling.

**How to Take Acetaminophen**
- For adults, the usual dose is 500-1,000 mg every 4-6 hours as needed.
- Do NOT take more than 3,000 mg (some doctors say 4,000 mg) in 24 hours. Taking too much can
  seriously damage your liver.
- You can take it with or without food.
- Check ALL your medicines for acetaminophen — it is hidden in many cold medicines, sleep aids,
  and prescription pain pills.

**What Acetaminophen Treats**
- Headaches. - Muscle aches. - Toothaches. - Back pain. - Fever. - Menstrual cramps. - Arthritis pain.

**Common Side Effects**
- Acetaminophen has very few side effects when taken correctly.
- Some people may experience nausea or allergic reactions (rare).

**Critical Warning: Liver Damage**
- Taking too much acetaminophen is the NUMBER ONE cause of liver failure in the United States.
- NEVER take more than the recommended dose.
- Do NOT drink alcohol while taking acetaminophen — this greatly increases liver damage risk.
- Many other medicines contain acetaminophen. Always check labels to avoid doubling up.
- Signs of liver damage: yellowing of skin or eyes, dark urine, severe nausea, upper right stomach
  pain. Get emergency help immediately.

**Hidden Sources of Acetaminophen**
- NyQuil, DayQuil. - Excedrin. - Vicodin, Percocet (prescription). - Many cold and flu medicines.
- Always read labels. If the ingredients list "acetaminophen" or "APAP," the medicine contains it.

**Tips for Success**
- Keep track of how much acetaminophen you take in a day from ALL sources.
- Use a pill organizer or write down each dose.
- The safest maximum for most adults is 3,000 mg per day (unless your doctor says otherwise).
      `,
      patientCounselingPoints: [
        'NEVER exceed 3,000-4,000 mg of acetaminophen per day from ALL sources combined.',
        'Check all medicine labels for acetaminophen (also listed as APAP) — it is in many combination products.',
        'Do NOT drink alcohol while taking acetaminophen. Even moderate drinking increases liver damage risk.',
        'Seek emergency help if you notice yellowing of skin/eyes, dark urine, or severe stomach pain.',
        'Acetaminophen is safe for pain relief but does NOT reduce inflammation or swelling.',
        'Keep acetaminophen locked away from children — pediatric overdose is a medical emergency.'
      ],
      keyTerms: [
        { term: 'Liver', definition: 'The organ that processes medicines in your body. Acetaminophen can damage the liver if you take too much.' },
        { term: 'Maximum Daily Dose', definition: 'The most medicine you can safely take in one day. For acetaminophen, this is 3,000-4,000 mg from all sources.' },
        { term: 'APAP', definition: 'Another abbreviation for acetaminophen. Look for this on labels to avoid taking too much.' },
        { term: 'Overdose', definition: 'Taking too much of a medicine. Acetaminophen overdose can cause fatal liver failure.' },
        { term: 'Combination Medicine', definition: 'A product with multiple drugs in one pill. Many contain hidden acetaminophen.' }
      ]
    },
    level2: {
      title: 'Understanding Acetaminophen: Pain Relief and Liver Safety',
      titleEs: 'Entendiendo el Acetaminofen: Alivio del Dolor y Seguridad Hepatica',
      content: `
Acetaminophen (paracetamol outside the US) has been used for over 60 years and is the most commonly
used analgesic and antipyretic worldwide. Unlike NSAIDs, it has minimal anti-inflammatory activity
and does not affect platelet function.

**How Acetaminophen Works**
The exact mechanism is not fully understood, but key pathways include:
- Inhibits COX enzymes in the brain, reducing prostaglandin production centrally (but not peripherally).
- Activates serotonergic pathways that descend from the brain to modulate pain perception in the spinal cord.
- Interacts with the endocannabinoid system (its metabolite AM404 acts on cannabinoid receptors).
- Does NOT significantly inhibit peripheral COX — explaining why it reduces pain and fever but not inflammation.

**Dosing Details**
- Adults: 325-1,000 mg every 4-6 hours. Maximum 3,000 mg/day (conservative) to 4,000 mg/day.
- For patients with liver disease or alcohol use: Maximum 2,000 mg/day.
- Children: 10-15 mg/kg every 4-6 hours (max 5 doses/day).
- Extended-release: 1,300 mg every 8 hours (max 3,900 mg/day).

**Liver Toxicity — How It Happens**
At normal doses, the liver safely processes acetaminophen:
1. Most is converted to harmless compounds through glucuronidation and sulfation (90-95%).
2. A small amount (~5%) is converted by CYP2E1 to a toxic metabolite called NAPQI.
3. NAPQI is quickly neutralized by glutathione (an antioxidant in the liver).

At toxic doses:
1. Glucuronidation and sulfation pathways become saturated.
2. More drug is shunted through CYP2E1, producing excessive NAPQI.
3. Glutathione stores become depleted and cannot neutralize all the NAPQI.
4. Excess NAPQI binds to liver cell proteins, causing cell death and liver failure.

**Risk Factors for Liver Toxicity**
- Taking more than 4,000 mg/day (or less in vulnerable individuals).
- Chronic alcohol use: Alcohol induces CYP2E1 and depletes glutathione, increasing NAPQI production.
- Fasting or malnutrition: Depleted glutathione stores.
- Liver disease (hepatitis, cirrhosis): Reduced processing capacity.
- CYP2E1 inducers: Isoniazid, certain herbs.
- Unintentional overdose: The most common scenario — taking multiple products containing acetaminophen.

**Acetaminophen Overdose Treatment**
- N-acetylcysteine (NAC) is the antidote. It replenishes glutathione and directly detoxifies NAPQI.
- Most effective within 8 hours of ingestion but beneficial up to 72+ hours.
- The Rumack-Matthew nomogram guides treatment decisions based on plasma acetaminophen levels
  and time since ingestion.

**Advantages of Acetaminophen**
- Safe for the stomach (no GI bleeding risk).
- Safe for the kidneys (at recommended doses).
- Safe during pregnancy (all trimesters, at recommended doses).
- Does not interfere with aspirin antiplatelet effect.
- No cardiovascular risk increase.
- Can be alternated with ibuprofen for enhanced pain/fever control.
      `,
      patientCounselingPoints: [
        'Acetaminophen is processed by the liver. At normal doses, it is safe; at high doses, it produces a toxic metabolite (NAPQI) that causes liver damage.',
        'Alcohol increases the risk of liver damage by boosting the enzyme that creates the toxic metabolite.',
        'The most common type of acetaminophen overdose is unintentional — from taking multiple products containing it.',
        'N-acetylcysteine (NAC) is an effective antidote if acetaminophen overdose is caught early.',
        'Acetaminophen is the preferred pain reliever during pregnancy at recommended doses.',
        'Unlike ibuprofen, acetaminophen does not affect blood clotting, making it safe before surgery or dental procedures.'
      ],
      keyTerms: [
        { term: 'NAPQI', definition: 'N-acetyl-p-benzoquinone imine — the toxic liver metabolite of acetaminophen. At normal doses, glutathione neutralizes it. At high doses, it causes liver damage.' },
        { term: 'Glutathione', definition: 'A natural antioxidant in your liver that neutralizes NAPQI. It can become depleted with acetaminophen overdose, alcohol use, or fasting.' },
        { term: 'N-Acetylcysteine (NAC)', definition: 'The antidote for acetaminophen overdose. It replenishes glutathione and directly detoxifies NAPQI.' },
        { term: 'CYP2E1', definition: 'The liver enzyme that converts acetaminophen to toxic NAPQI. Alcohol and certain drugs increase this enzyme activity.' },
        { term: 'Glucuronidation', definition: 'The primary safe pathway for acetaminophen metabolism. Handles 90-95% of the drug at normal doses.' },
        { term: 'Rumack-Matthew Nomogram', definition: 'A clinical tool that plots acetaminophen blood levels against time to determine if NAC treatment is needed.' }
      ]
    },
    level3: {
      title: 'Acetaminophen Pharmacology and Hepatotoxicity',
      titleEs: 'Farmacologia del Acetaminofen y Hepatotoxicidad',
      content: `
Acetaminophen (N-acetyl-p-aminophenol, paracetamol) is the most widely used analgesic globally. Its
unique pharmacological profile — central analgesic/antipyretic activity without peripheral anti-inflammatory
effects — and its dose-dependent hepatotoxicity make it a fascinating pharmacological study.

**Mechanism of Action**
Despite >100 years of use, acetaminophen mechanism remains incompletely understood:
1. **Central COX inhibition**: Acetaminophen preferentially inhibits a COX variant (COX-3 or
   a splice variant of COX-1) in the brain. Peripheral COX inhibition is minimal due to
   inactivation by cellular peroxides at inflamed sites.
2. **Serotonergic descending pathway**: Activates bulbospinal serotonergic neurons that inhibit
   nociceptive transmission in the dorsal horn of the spinal cord.
3. **Endocannabinoid system**: Deacetylated to p-aminophenol in the brain, then conjugated with
   arachidonic acid by FAAH to form AM404. AM404 activates TRPV1 receptors and inhibits
   endocannabinoid reuptake, increasing anandamide levels.
4. **Nitric oxide pathway**: May modulate NO-dependent signaling pathways involved in pain processing.

**Pharmacokinetics**
- **Absorption**: Rapid; bioavailability 63-89%. Peak plasma: 30-60 min (standard), 1-2 hours (ER).
- **Distribution**: Vd 0.9 L/kg. Low protein binding (10-25%).
- **Metabolism**: Predominantly hepatic:
  - Glucuronidation (47-62%) via UGT1A1, UGT1A6, UGT1A9.
  - Sulfation (25-36%) via SULT1A1, SULT1A3.
  - CYP oxidation (5-8%) via CYP2E1 (primary), CYP1A2, CYP3A4 to NAPQI.
- **Elimination**: Renal (90-95% as conjugated metabolites). Half-life: 1.5-3 hours (prolonged to 4+
  hours in liver disease and neonates).

**Hepatotoxicity — Molecular Mechanisms**
1. NAPQI formation via CYP2E1 (and to lesser extent CYP1A2, CYP3A4).
2. NAPQI covalently binds to cysteine residues on mitochondrial proteins.
3. Mitochondrial dysfunction leads to oxidative stress and ATP depletion.
4. Opening of mitochondrial permeability transition pore (MPT).
5. Release of mitochondrial contents (endonuclease G, AIF) into cytoplasm.
6. Nuclear DNA fragmentation and hepatocyte necrosis (not apoptosis).
7. Release of DAMPs (damage-associated molecular patterns) triggers sterile inflammatory response.
8. Kupffer cell and neutrophil activation amplify liver injury.

**N-Acetylcysteine (NAC) — Mechanisms**
NAC works through multiple pathways:
- Replenishes hepatic glutathione by providing cysteine substrate.
- Directly scavenges NAPQI and reactive oxygen species.
- Improves mitochondrial energy metabolism.
- Enhances microcirculatory blood flow to the liver.
- Anti-inflammatory effects modulating Kupffer cell and neutrophil activation.

**Clinical Toxicology**
- **Therapeutic range**: 10-20 mcg/mL (but rarely monitored therapeutically).
- **Toxic threshold**: Generally >150 mcg/mL at 4 hours post-ingestion (Rumack-Matthew line).
- **Stages of toxicity**: I (0-24h): Nausea/vomiting. II (24-72h): Rising transaminases, RUQ pain.
  III (72-96h): Peak hepatotoxicity, potential coagulopathy, encephalopathy. IV (4d-2wk): Recovery
  or liver failure/transplant.
- **King College Criteria**: Guides liver transplant decision-making in acetaminophen-induced ALF.

**Current Controversies**
- **Maximum dose debate**: FDA advisory committee recommended lowering maximum to 3,000 mg/day and
  eliminating 1,000 mg single doses. Not formally adopted, but many practitioners follow conservative limits.
- **OTC combination product regulation**: FDA required max 325 mg per unit of prescription
  acetaminophen combinations (2014).
- **Chronic therapeutic use and subclinical injury**: ALT elevations occur in 31-44% of healthy
  adults taking 4g/day for 14 days, suggesting a narrow therapeutic-toxic window.
      `,
      keyTerms: [
        { term: 'AM404', definition: 'An active metabolite of acetaminophen formed in the brain that activates TRPV1 receptors and inhibits endocannabinoid reuptake, contributing to analgesic effects.' },
        { term: 'NAPQI', definition: 'N-acetyl-p-benzoquinone imine — the reactive toxic metabolite formed primarily by CYP2E1 oxidation. Covalently binds mitochondrial proteins triggering hepatocyte necrosis.' },
        { term: 'Mitochondrial Permeability Transition', definition: 'A critical event in acetaminophen hepatotoxicity where mitochondrial membrane integrity is lost, leading to cell death.' },
        { term: 'King College Criteria', definition: 'Clinical criteria guiding liver transplant listing in acetaminophen-induced acute liver failure (pH, INR, creatinine, encephalopathy grade).' },
        { term: 'DAMPs', definition: 'Damage-associated molecular patterns released from dying hepatocytes that trigger sterile inflammation, amplifying liver injury.' },
        { term: 'COX-3 Hypothesis', definition: 'The theory that acetaminophen preferentially inhibits a COX splice variant in the brain, explaining central analgesia without peripheral anti-inflammatory effects.' }
      ]
    },
    level4: {
      title: 'Advanced Acetaminophen Therapeutics and Toxicology Management',
      titleEs: 'Terapeutica Avanzada de Acetaminofen y Manejo de Toxicologia',
      content: `
This section addresses advanced toxicology management, pharmacogenomics, and clinical controversies
surrounding acetaminophen prescribing and safety.

**NAC Treatment Protocols**
Two standard NAC regimens:
1. **IV Protocol (Prescott, 21-hour)**: 150 mg/kg over 1 hour, then 50 mg/kg over 4 hours, then
   100 mg/kg over 16 hours. Modified two-bag protocol (200 mg/kg over 4h, then 100 mg/kg over 16h)
   reduces anaphylactoid reactions from rapid first infusion.
2. **Oral Protocol (72-hour)**: 140 mg/kg loading, then 70 mg/kg every 4 hours for 17 additional doses.
- IV preferred for: Vomiting patients, massive ingestion, late presentation with hepatotoxicity.
- Both protocols highly effective when started within 8 hours; efficacy decreases with delay.

**Beyond the Nomogram: Complex Toxicology Scenarios**
The Rumack-Matthew nomogram has limitations:
- **Unknown time of ingestion**: Cannot plot. Treat if acetaminophen detectable and transaminases rising.
- **Repeated supratherapeutic ingestion (RSTI)**: Nomogram not applicable. Use clinical judgment:
  treat if APAP >10 mcg/mL or transaminases elevated.
- **Extended-release formulations**: Delayed peak levels. Obtain second APAP level at 4 hours after
  the first; treat if either plots above treatment line.
- **Massive ingestion (>500 mg/kg)**: Standard NAC may be insufficient. Extended or double-dose
  NAC protocols have been proposed.

**Pharmacogenomics of Hepatotoxicity**
Genetic factors influence susceptibility:
- **CYP2E1**: Inducibility varies; chronic alcohol use upregulates CYP2E1, increasing NAPQI formation.
  Genetic polymorphisms (CYP2E1*5B, *6) alter enzyme activity but clinical significance is debated.
- **UGT1A (glucuronidation)**: Reduced-function variants decrease safe metabolism, shunting more
  drug to CYP2E1 pathway.
- **SULT1A1 (sulfation)**: Polymorphisms affect sulfation capacity, particularly relevant in children
  (who rely more on sulfation than adults).
- **GST (glutathione S-transferase)**: GSTM1 and GSTT1 null genotypes reduce NAPQI detoxification
  capacity. ~50% of Caucasians carry GSTM1 null genotype.

**Acetaminophen in Liver Disease**
A common clinical dilemma:
- Therapeutic doses (2,000 mg/day) appear safe in compensated chronic liver disease including
  chronic hepatitis C and well-compensated cirrhosis.
- NSAIDs are more dangerous than acetaminophen in liver disease (GI bleeding, renal effects).
- Avoid or use minimal doses in decompensated cirrhosis, acute liver injury, or active alcoholism.
- The "2 grams per day" rule is widely recommended for liver disease patients.

**Acetaminophen and Alcohol: Nuanced Assessment**
The interaction is more complex than commonly portrayed:
- **Acute alcohol intake**: Actually PROTECTIVE — ethanol competes with acetaminophen for CYP2E1,
  reducing NAPQI formation.
- **Chronic alcohol use**: HARMFUL — chronic ethanol upregulates CYP2E1 (increased NAPQI) AND
  depletes glutathione (reduced detoxification). Greatest risk when drinking stops and acetaminophen
  is taken during alcohol withdrawal.
- Clinical implication: The highest risk patient is a chronic heavy drinker who stops drinking and
  takes therapeutic doses of acetaminophen.

**Population Health Impact**
Acetaminophen-related liver injury is a major public health burden:
- Leading cause of acute liver failure in the US and UK.
- ~50% of cases are unintentional (therapeutic misadventure from multiple products).
- FDA regulatory actions: Single-entity OTC limit discussions, 325 mg per unit prescription
  combination limit, enhanced labeling requirements.
      `,
      clinicalNotes: [
        'The modified two-bag IV NAC protocol (200 mg/kg over 4h + 100 mg/kg over 16h) significantly reduces anaphylactoid reactions compared to the original Prescott protocol.',
        'The Rumack-Matthew nomogram is NOT applicable to repeated supratherapeutic ingestion or unknown ingestion times — clinical judgment and serial labs guide management.',
        'Acute alcohol co-ingestion is actually protective (CYP2E1 competition), while chronic alcohol use increases risk (CYP2E1 induction + glutathione depletion).',
        'Therapeutic acetaminophen (up to 2g/day) is generally safer than NSAIDs in patients with compensated chronic liver disease.',
        'GSTM1 null genotype (50% of Caucasians) reduces NAPQI detoxification capacity and may increase hepatotoxicity susceptibility.',
        'Approximately 50% of acetaminophen-related liver failures are unintentional, driven by use of multiple combination products.'
      ],
      keyTerms: [
        { term: 'Prescott Protocol', definition: 'The original 21-hour IV NAC regimen for acetaminophen overdose: 150 mg/kg loading, 50 mg/kg over 4h, 100 mg/kg over 16h.' },
        { term: 'Repeated Supratherapeutic Ingestion (RSTI)', definition: 'Acetaminophen toxicity from cumulative therapeutic or slightly supratherapeutic doses over days, for which the standard nomogram is not applicable.' },
        { term: 'GSTM1 Null Genotype', definition: 'Absence of the glutathione S-transferase M1 enzyme, reducing NAPQI detoxification. Present in ~50% of Caucasians.' },
        { term: 'Anaphylactoid Reaction', definition: 'Non-IgE-mediated hypersensitivity reaction to IV NAC, presenting as flushing, urticaria, and bronchospasm. Managed by slowing infusion rate.' },
        { term: 'Therapeutic Misadventure', definition: 'Unintentional overdose from taking multiple products containing acetaminophen, responsible for ~50% of acetaminophen-related liver failures.' },
        { term: 'CYP2E1 Induction', definition: 'Upregulation of the enzyme that produces NAPQI. Chronic alcohol use, fasting, and certain drugs induce CYP2E1.' }
      ]
    },
    level5: {
      title: 'Acetaminophen: Expert Pharmacotoxicological Review',
      titleEs: 'Acetaminofen: Revision Farmacotoxicologica Experta',
      content: `
This expert review addresses molecular toxicology, emerging biomarkers, novel therapeutic targets,
and the regulatory evolution surrounding acetaminophen safety.

**Molecular Toxicology: Mitochondrial-Centric Model**
Current understanding centers on mitochondrial dysfunction as the critical event:
1. NAPQI formation by CYP2E1 (and CYP1A2, CYP3A4 at high concentrations).
2. After glutathione depletion, NAPQI covalently adducts mitochondrial proteins, particularly
   those in the electron transport chain and the mitochondrial permeability transition (MPT) pore complex.
3. Oxidative stress (superoxide, peroxynitrite from mitochondrial dysfunction) amplifies damage.
4. JNK (c-Jun N-terminal kinase) activation: Critical amplification pathway. Oxidative stress
   activates ASK1, which activates MKK4/7, which activates JNK. Phospho-JNK translocates to
   mitochondria, amplifying mitochondrial oxidative stress in a feed-forward loop.
5. MPT pore opening: Loss of mitochondrial membrane potential, release of endonuclease G and AIF.
6. Nuclear DNA fragmentation: Caspase-independent cell death (necrosis, not apoptosis).
7. HMGB1 release: Key DAMP triggering TLR4-mediated sterile inflammatory response.
8. Innate immune amplification: Neutrophil and Kupffer cell activation worsen injury but also
   contribute to debris clearance and regeneration.

**Emerging Biomarkers**
Beyond ALT/AST and APAP levels, novel biomarkers provide mechanistic insight:
- **miR-122**: Liver-specific microRNA; earlier and more sensitive than ALT for hepatocyte injury.
- **HMGB1 (hyperacetylated)**: Indicates necrotic (vs. apoptotic) cell death; predicts severity.
- **Glutamate dehydrogenase (GLDH)**: Mitochondrial matrix enzyme; indicates mitochondrial damage.
- **APAP-protein adducts**: Detectable in serum; confirms APAP exposure even when drug has been
  metabolized. Particularly useful for RSTI cases with undetectable APAP levels.
- **Full-length cytokeratin-18 (M65)**: Indicates total cell death (necrosis + apoptosis).
- The MAST (Markers and Paracetamol Poisoning Study) project is validating a multi-biomarker
  panel to improve clinical decision-making.

**Novel Therapeutic Targets**
Beyond NAC, several therapeutic approaches are under investigation:
1. **JNK inhibitors**: SP600125 and other JNK inhibitors dramatically reduce injury in animal
   models even when given after the onset of toxicity. Human trials pending.
2. **4-methylpyrazole (fomepizole)**: CYP2E1 inhibitor that prevents NAPQI formation. Proposed
   as adjunctive therapy or alternative to NAC. Case series and a phase II trial show promise.
3. **Calmangafodipir**: A mitochondrial-targeted manganese superoxide dismutase mimetic that
   reduces oxidative stress. Phase II results showed biomarker improvement.
4. **Methylene blue**: Mitochondrial electron carrier that may bypass complex I/III dysfunction.
   Case reports describe benefit in refractory cases.

**Pharmacoepidemiologic Impact**
Acetaminophen toxicity represents a unique intersection of pharmacology and public health:
- Accounts for 46% of all acute liver failure cases in the US.
- ~30,000 hospitalizations annually in the US for intentional and unintentional overdose.
- The UK's 1998 legislation limiting pack sizes led to a 43% reduction in suicide deaths from
  acetaminophen and a 61% reduction in liver transplant registrations.
- The "therapeutic window" between effective analgesia and hepatotoxicity is narrower than
  commonly appreciated, particularly in at-risk populations.

**Global Regulatory Approaches**
- **US**: OTC limit 3,000-4,000 mg/day. Prescription combinations limited to 325 mg per dosage unit.
  No pack size restrictions.
- **UK**: Maximum 32 tablets per purchase (pharmacy), 16 per purchase (general sale). Significant
  mortality reduction documented.
- **France**: Front-of-pack liver warning required since 2020.
- **Australia**: Upscheduling of modified-release formulations due to overdose severity.
- Ongoing global debate: Whether OTC status should be maintained given the narrow therapeutic index.
      `,
      clinicalNotes: [
        'The JNK amplification loop is a critical therapeutic target: JNK inhibition dramatically reduces injury even when administered after NAPQI formation.',
        'APAP-protein adducts in serum can confirm acetaminophen exposure even when drug levels are undetectable, essential for RSTI diagnosis.',
        'Fomepizole (4-methylpyrazole) as a CYP2E1 inhibitor is an emerging adjunctive therapy that blocks NAPQI formation at its source.',
        'UK pack size legislation led to 43% reduction in acetaminophen suicide deaths — the most successful regulatory intervention in acetaminophen toxicity prevention.',
        'miR-122 and HMGB1 are earlier and more mechanistically informative biomarkers than ALT for acetaminophen hepatotoxicity.',
        'The narrow therapeutic-toxic window of acetaminophen (ALT elevations in 31-44% of adults at 4g/day for 14 days) challenges assumptions about its safety margin.'
      ],
      keyTerms: [
        { term: 'JNK Amplification Loop', definition: 'A feed-forward cycle where JNK translocates to mitochondria, amplifying oxidative stress and mitochondrial dysfunction in acetaminophen toxicity.' },
        { term: 'APAP-Protein Adducts', definition: 'Covalent bonds between NAPQI and cellular proteins, detectable in serum as a definitive biomarker of acetaminophen-mediated hepatotoxicity.' },
        { term: 'miR-122', definition: 'A liver-specific microRNA that serves as an earlier and more sensitive biomarker of hepatocyte injury compared to traditional ALT measurement.' },
        { term: 'Fomepizole', definition: '4-methylpyrazole — a CYP2E1 inhibitor used for ethylene glycol/methanol poisoning, now under investigation as an adjunctive therapy for APAP toxicity.' },
        { term: 'HMGB1', definition: 'High-mobility group box 1 protein — a nuclear DAMP released from necrotic hepatocytes that triggers TLR4-mediated sterile inflammation.' },
        { term: 'Calmangafodipir', definition: 'A mitochondrial-targeted superoxide dismutase mimetic under investigation as a novel hepatoprotective agent for acetaminophen toxicity.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Acetaminophen',
      url: 'https://medlineplus.gov/druginfo/meds/a681004.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Acetaminophen Information',
      url: 'https://www.fda.gov/drugs/information-drug-class/acetaminophen-information',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-ibuprofen', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-pain-management', type: 'topic', relationship: 'parent' }
  ],
  tags: ['acetaminophen', 'tylenol', 'paracetamol', 'pain-relief', 'fever-reducer', 'liver-safety', 'over-the-counter', 'analgesic'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
