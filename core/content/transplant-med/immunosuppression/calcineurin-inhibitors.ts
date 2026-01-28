/**
 * Calcineurin Inhibitors
 *
 * Detailed coverage of calcineurin inhibitor medications used in transplant immunosuppression,
 * including tacrolimus and cyclosporine mechanisms, monitoring, and clinical considerations.
 */

import { EducationalContent } from '../../types';

export const calcineurinInhibitors: EducationalContent = {
  id: 'transplant-calcineurin-inhibitors',
  type: 'concept',
  name: 'Calcineurin Inhibitors',
  alternateNames: ['CNIs', 'Tacrolimus', 'Prograf', 'Cyclosporine', 'Neoral', 'Gengraf'],

  levels: {
    1: {
      level: 1,
      summary: 'Calcineurin inhibitors are the most important anti-rejection medications that prevent the immune system from attacking transplanted organs.',
      explanation: `**What Are Calcineurin Inhibitors?**

Calcineurin inhibitors (often called CNIs) are powerful medications that stop your immune system from rejecting a transplanted organ. They are the backbone of transplant care.

**The Two Main Drugs:**

1. **Tacrolimus (Prograf)**
   - Most commonly used today
   - Taken twice daily
   - Requires blood level checks

2. **Cyclosporine (Neoral, Gengraf)**
   - Used for many years
   - Still used in some patients
   - Also needs blood monitoring

**How They Work (Simple):**

These medications work by blocking a message that tells immune cells to attack. Think of it like unplugging a phone so the "attack" signal cannot get through to the immune cells.

**Taking These Medications:**

- Take at the exact same times every day (usually 12 hours apart)
- Take on an empty stomach (1 hour before or 2 hours after eating)
- Never skip doses
- Regular blood tests to check levels

**Common Side Effects:**

- Shakiness or trembling hands
- High blood pressure
- Kidney problems
- Diabetes risk increases
- Headache

**Important Tips:**

- Grapefruit and grapefruit juice must be avoided - they affect drug levels
- Many other medications can interact - always tell doctors about all medicines
- Store at room temperature, protect from light`,
      keyTerms: [
        { term: 'tacrolimus', definition: 'The most common calcineurin inhibitor medication used after transplants' },
        { term: 'cyclosporine', definition: 'An older calcineurin inhibitor still used in some transplant patients' },
        { term: 'trough level', definition: 'The lowest amount of medication in your blood, measured just before your next dose' },
        { term: 'drug interaction', definition: 'When one medication affects how another medication works' },
      ],
      analogies: [
        'Calcineurin inhibitors are like unplugging the phone line so the immune system cannot receive the "attack" order.',
        'Taking these medications is like adjusting the volume on a speaker - too low and rejection happens, too high and side effects occur.',
      ],
      examples: [
        'A kidney transplant patient takes tacrolimus at 8 AM and 8 PM every day, getting blood tests monthly to check levels.',
        'A patient forgot to take their morning tacrolimus and called the transplant team for guidance on what to do.',
      ],
    },
    2: {
      level: 2,
      summary: 'Calcineurin inhibitors block T-cell activation by inhibiting calcineurin phosphatase, preventing IL-2 production and subsequent clonal expansion of cytotoxic T cells.',
      explanation: `**Mechanism of Action:**

Calcineurin inhibitors work at the molecular level to prevent T-cell activation:

1. **Normal Immune Response:**
   - T-cell receptor binds antigen
   - Calcium influx triggers signaling
   - Calcineurin phosphatase activates
   - NFAT transcription factor activated
   - IL-2 gene transcription occurs
   - T-cell proliferation and attack

2. **With CNI Blockade:**
   - T-cell receptor binding occurs
   - Calcium signaling interrupted
   - Calcineurin cannot activate NFAT
   - IL-2 production blocked
   - T-cell activation prevented

**Pharmacokinetics:**

*Absorption:*
- Tacrolimus: Variable (17-95%), food decreases absorption
- Cyclosporine: Variable, improved with microemulsion formulations

*Distribution:*
- Highly lipophilic
- Extensive tissue distribution
- High binding to plasma proteins

*Metabolism:*
- Hepatic CYP3A4/5 metabolism
- Multiple active metabolites
- Significant first-pass effect

*Elimination:*
- Primarily biliary excretion
- Minimal renal elimination
- Half-life: tacrolimus 8-12 hours, cyclosporine 8-27 hours

**Therapeutic Drug Monitoring:**

| Parameter | Tacrolimus | Cyclosporine |
|-----------|------------|--------------|
| Target trough (early post-transplant) | 8-12 ng/mL | 200-300 ng/mL |
| Target trough (maintenance) | 4-8 ng/mL | 100-150 ng/mL |
| Sampling | Pre-dose (trough) | Pre-dose (C0) or C2 |
| Frequency | Daily initially, then monthly | Similar schedule |

**Major Drug Interactions:**

*CYP3A4 Inhibitors (increase levels):*
- Azole antifungals (fluconazole, voriconazole)
- Macrolide antibiotics (erythromycin, clarithromycin)
- Calcium channel blockers (diltiazem, verapamil)
- Grapefruit juice

*CYP3A4 Inducers (decrease levels):*
- Rifampin, phenytoin
- Carbamazepine, phenobarbital
- St. John\'s Wort

**Comparison of Agents:**

| Feature | Tacrolimus | Cyclosporine |
|---------|------------|--------------|
| Rejection rates | Lower | Higher |
| Diabetes risk | Higher | Lower |
| Cosmetic side effects | Less | More (hirsutism, gingival hyperplasia) |
| Neurotoxicity | More common | Less common |
| Hypertension | Less | More |
| Dyslipidemia | Less | More |`,
      keyTerms: [
        { term: 'calcineurin', definition: 'A calcium-dependent phosphatase enzyme critical for T-cell activation' },
        { term: 'NFAT', definition: 'Nuclear Factor of Activated T-cells, a transcription factor blocked by CNIs' },
        { term: 'CYP3A4', definition: 'Cytochrome P450 enzyme responsible for metabolizing CNIs' },
        { term: 'therapeutic drug monitoring', definition: 'Regular blood testing to maintain drug levels in target range' },
        { term: 'trough concentration', definition: 'Lowest drug concentration, measured immediately before next dose' },
      ],
      analogies: [
        'Calcineurin acts like a key that unlocks the T-cell activation door; CNIs are like gum stuck in the lock preventing the key from turning.',
        'CYP3A4 metabolism is like a factory assembly line - some drugs speed up the line (inducers), others slow it down (inhibitors).',
      ],
      examples: [
        'A patient on tacrolimus develops oral candidiasis and is prescribed fluconazole, requiring tacrolimus dose reduction to prevent toxicity.',
        'Post-liver transplant patient maintained on cyclosporine requires C2 monitoring (level 2 hours post-dose) rather than trough monitoring.',
      ],
    },
    3: {
      level: 3,
      summary: 'Calcineurin inhibitors form complexes with immunophilins (FKBP12 for tacrolimus, cyclophilin for cyclosporine) to inhibit calcineurin phosphatase activity, preventing NFAT dephosphorylation and nuclear translocation.',
      explanation: `**Molecular Mechanism:**

*Immunophilin Binding:*
- Tacrolimus binds FK-binding protein 12 (FKBP12)
- Cyclosporine binds cyclophilin A
- These complexes inhibit calcineurin phosphatase

*Signal Transduction Blockade:*
Calcineurin normally dephosphorylates NFAT (Nuclear Factor of Activated T-cells), allowing it to enter the nucleus. CNIs prevent this dephosphorylation, blocking:
- IL-2 gene transcription
- IL-4, IL-5, IFN-gamma production
- CD40 ligand expression
- T-cell proliferation

*Downstream Effects:*
- Inhibition of T-helper cell activation
- Reduced cytotoxic T-cell generation
- Decreated B-cell help and antibody production
- Modest effects on innate immunity

**Pharmacogenomics:**

*CYP3A5 Polymorphisms:*
- CYP3A5*1/*1 (expressers): Lower tacrolimus levels, require higher doses
- CYP3A5*3/*3 (non-expressers): Higher tacrolimus levels, require lower doses
- Testing increasingly used for initial dosing

*ABCB1 (MDR1) Variants:*
- Affect drug absorption and distribution
- Variable impact on clinical outcomes

**Formulation Considerations:**

*Tacrolimus Formulations:*
- Immediate-release (Prograf, generic): Twice daily
- Extended-release (Astagraf XL, Envarsus XR): Once daily
- Not interchangeable without monitoring

*Cyclosporine Formulations:*
- Sandimmune (original): Poor, variable absorption
- Neoral/Gengraf (microemulsion): Improved, consistent absorption
- Generics require careful monitoring when switching

**Adverse Effects Profile:**

*Nephrotoxicity:*
- Afferent and efferent arteriolar vasoconstriction
- Reduced renal blood flow and GFR
- Chronic: interstitial fibrosis, striped fibrosis
- Reversible early, may become chronic

*Neurotoxicity:*
- Tremor (most common)
- Headache, seizures
- Posterior reversible encephalopathy syndrome (PRES)
- Dose-dependent, reversible

*Metabolic Effects:*
- Diabetes mellitus (tacrolimus > cyclosporine)
- Hypertension (cyclosporine > tacrolimus)
- Dyslipidemia (cyclosporine predominant)
- Hypomagnesemia, hyperkalemia

*Other Toxicities:*
- Hirsutism, gingival hyperplasia (cyclosporine)
- Alopecia (tacrolimus)
- Thrombotic microangiopathy (rare)`,
      keyTerms: [
        { term: 'FKBP12', definition: 'FK-binding protein 12, the immunophilin target of tacrolimus' },
        { term: 'cyclophilin', definition: 'Immunophilin family protein bound by cyclosporine' },
        { term: 'NFAT', definition: 'Nuclear Factor of Activated T-cells, blocked from nuclear entry by CNIs' },
        { term: 'PRES', definition: 'Posterior Reversible Encephalopathy Syndrome, a neurotoxic complication' },
        { term: 'nephrotoxicity', definition: 'Kidney damage caused by medications' },
        { term: 'CYP3A5 expresser', definition: 'Genetic variant requiring higher CNI doses due to increased metabolism' },
        { term: 'immunophilin', definition: 'Class of proteins that bind immunosuppressive drugs' },
        { term: 'thrombotic microangiopathy', definition: 'Microvascular thrombosis causing hemolysis and organ injury' },
      ],
    },
    4: {
      level: 4,
      summary: 'Calcineurin inhibitors remain the cornerstone of maintenance immunosuppression despite nephrotoxicity concerns. Modern protocols emphasize CYP3A5 genotyping, sparse sampling strategies, and combination therapy to minimize exposure while maintaining efficacy.',
      explanation: `**Clinical Pharmacology Advances:**

*Limited Sampling Strategies:*
- C2 monitoring for cyclosporine correlates with AUC better than C0
- Multiple point estimations for tacrolimus AUC prediction
- Bayesian estimation using population pharmacokinetics
- Limited sampling may improve outcome prediction

*Pharmacogenomic-Guided Dosing:*
- CYP3A5*1 carriers need 1.5-2x higher initial tacrolimus doses
- ABCB1 variants may influence absorption variability
- CYP3A4*22 (poor metabolizer) requires dose reduction
- Implementation varies by transplant center

*Drug-Drug Interactions (Advanced):*

| Interaction Type | Mechanism | Clinical Management |
|------------------|-----------|---------------------|
| Azole antifungals | CYP3A4 inhibition | Reduce CNI by 50-80%, monitor closely |
| Rifampin | CYP3A4 induction | Double or triple CNI dose, check levels frequently |
| Amiodarone | CYP3A4 inhibition | Significant CNI reduction needed |
| PPIs | Variable | May increase tacrolimus absorption |
| Metoclopramide | Increased absorption | Monitor for toxicity |

**Nephrotoxicity Mechanisms:**

*Acute Vasoconstriction:*
- Endothelin upregulation
- Nitric oxide reduction
- Increased thromboxane A2
- Calcium signaling disruption in vascular smooth muscle

*Chronic Structural Changes:*
- Tubular atrophy and interstitial fibrosis
- Arteriolar hyalinosis
- Striped fibrosis pattern
- Irreversible with prolonged exposure

**Neurotoxicity Spectrum:**

*Common (10-30%):*
- Fine tremor (often hands)
- Headache
- Insomnia

*Severe (1-5%):*
- Seizures
- PRES: headache, seizures, visual changes, hypertension
- MRI: posterior white matter hyperintensities (T2/FLAIR)
- Reversible with dose reduction/withdrawal

**Comparative Efficacy Data:**

Meta-analyses demonstrate:
- Tacrolimus reduces acute rejection vs cyclosporine (RR ~0.7)
- Similar graft survival at 1-3 years
- Tacrolimus associated with more post-transplant diabetes
- Cyclosporine associated with more hypertension, dyslipidemia
- Either acceptable as first-line with proper monitoring

**Conversion Between Agents:**

- Usually 1:100 tacrolimus:cyclosporine dose ratio
- Require overlap and careful monitoring
- Common when toxicity occurs with one agent
- Switch to tacrolimus for refractory rejection
- Switch to cyclosporine for significant diabetes or neurotoxicity`,
      keyTerms: [
        { term: 'AUC', definition: 'Area Under the Curve, measure of total drug exposure over time' },
        { term: 'Bayesian estimation', definition: 'Statistical method using population data and individual measurements to predict pharmacokinetics' },
        { term: 'arteriolar hyalinosis', definition: 'Pathologic thickening of small arteries seen with chronic CNI toxicity' },
        { term: 'sparse sampling', definition: 'Using few blood samples to estimate pharmacokinetic parameters' },
        { term: 'population pharmacokinetics', definition: 'Analysis of drug behavior across populations to guide dosing' },
        { term: 'CYP3A4*22', definition: 'Reduced function variant associated with higher CNI levels' },
        { term: 'endothelin', definition: 'Potent vasoconstrictor upregulated by CNIs' },
      ],
      clinicalNotes: `Tacrolimus is now first-line for most solid organ transplants due to superior rejection prophylaxis. Cyclosporine remains useful in patients with significant diabetes risk or neurotoxicity concerns. Therapeutic drug monitoring is essential - trough levels correlate imperfectly with exposure, and AUC-guided monitoring may improve outcomes. Always check for drug interactions when prescribing any new medication to a transplant patient on CNIs.`,
    },
    5: {
      level: 5,
      summary: 'Calcineurin inhibitor minimization protocols, steroid-free regimens, and CNI-free immunosuppression are active research areas. Novel formulations, combination therapies, and personalized dosing algorithms aim to optimize risk-benefit ratios while addressing long-term nephrotoxicity and metabolic complications.',
      explanation: `**CNI Minimization Strategies:**

*Rationale:*
- Chronic nephrotoxicity contributes to late graft failure
- Cardiovascular disease from metabolic effects
- Some rejection risk acceptable for reduced toxicity
- Goal: Maintain efficacy while reducing CNI exposure

*Approaches:*

1. **CNI Reduction Protocols:**
   - Reduce target levels by 30-50%
   - Maintain mycophenolate or mTOR inhibitor
   - Variable impact on rejection rates
   - ELITE-Symphony: low-dose tacrolimus superior

2. **CNI Withdrawal:**
   - Conversion to mTOR inhibitors (sirolimus, everolimus)
   - Benefits: improved renal function, reduced malignancy
   - Risks: increased rejection, wound healing issues
   - Timing critical (not early post-transplant)

3. **CNI Avoidance:**
   - Belatacept-based regimens (kidney transplant)
   - mTOR inhibitor + mycophenolate
   - Higher early rejection rates
   - Better renal function, cardiovascular profile

**Belatacept vs CNI:**

BENEFIT and BENEFIT-EXT trials demonstrated:
- Similar patient/graft survival
- Better measured GFR with belatacept
- Higher acute rejection rates
- Improved cardiovascular/metabolic profile
- EBV seropositivity required (PML risk)

**Emerging Therapies:**

*Tofacitinib (JAK inhibitor):*
- Phase II trials in kidney transplantation
- Alternative mechanism
- Not yet standard of care

*Voclosporin:*
- Next-generation CNI with potentially less toxicity
- Lupus nephritis approval
- Transplant trials ongoing

*Costimulation Blockade:*
- Belatacept: FDA approved for kidney
- Tocilizumab (anti-IL6R): investigational
- Potential for CNI-free regimens

**Long-Term Outcomes Data:**

*Chronic Allograft Nephropathy:*
- CNI toxicity contributes to interstitial fibrosis/tubular atrophy (IF/TA)
- Historically major cause of late graft loss
- Modern CNI minimization may be reducing this

*De Novo Malignancy:*
- CNIs impair tumor surveillance
- Skin cancer most common
- mTOR inhibitors may have anti-cancer benefits
- Conversion to mTOR for malignancy increasingly common

*Cardiovascular Disease:*
- Leading cause of death with functioning graft
- CNI metabolic effects contribute
- Diabetes, hypertension, dyslipidemia all increased
- CNI minimization may reduce risk

**Research Frontiers:**

*Personalized Immunosuppression:*
- Pharmacogenomic dosing at transplant
- Biomarker-guided adjustments
- Immune monitoring (Immuknow, donor-specific antibodies)
- Machine learning prediction models

*Treg Therapy:*
- Regulatory T-cell infusion
- Tolerance induction strategies
- Phase I/II trials ongoing
- Potential for drug minimization

*Organ-Specific Protocols:*
- Liver: CNI avoidance increasingly feasible
- Heart: CNI remains standard
- Lung: high rejection risk, CNI essential
- Kidney: most flexibility for minimization`,
      keyTerms: [
        { term: 'belatacept', definition: 'CTLA4-Ig fusion protein blocking CD28-B7 costimulation' },
        { term: 'CNI minimization', definition: 'Strategies to reduce calcineurin inhibitor exposure while maintaining efficacy' },
        { term: 'IF/TA', definition: 'Interstitial fibrosis and tubular atrophy, hallmark of chronic allograft injury' },
        { term: 'mTOR inhibitor', definition: 'Sirolimus, everolimus - alternative immunosuppressants with different toxicity profile' },
        { term: 'immune monitoring', definition: 'Assays measuring immune function to guide immunosuppression' },
        { term: 'tolerance induction', definition: 'Achieving graft acceptance without ongoing immunosuppression' },
        { term: 'voclosporin', definition: 'Novel calcineurin inhibitor with potentially improved safety profile' },
        { term: 'de novo malignancy', definition: 'New cancer developing after transplant due to immunosuppression' },
      ],
      clinicalNotes: `Modern transplant immunosuppression focuses on personalized risk stratification. High immunologic risk patients need robust CNI-based therapy, while standard risk patients may benefit from minimization protocols. The Symphony study established low-dose tacrolimus as the standard, but CNI-free regimens (particularly belatacept) are viable alternatives in appropriate kidney transplant candidates. Long-term CNI toxicity remains a concern, driving interest in minimization, conversion to mTOR inhibitors, and tolerance induction strategies. Monitoring should extend beyond trough levels to include renal function trends, metabolic parameters, and drug interactions.`,
    },
  },

  media: [
    {
      id: 'cni-mechanism-diagram',
      type: 'diagram',
      filename: 'cni-mechanism.png',
      title: 'Calcineurin Inhibitor Mechanism of Action',
      description: 'Molecular pathway showing CNI blockade of T-cell activation',
    },
    {
      id: 'tacrolimus-molecule',
      type: 'image',
      filename: 'tacrolimus-structure.png',
      title: 'Tacrolimus Chemical Structure',
      description: 'Molecular structure of tacrolimus (FK506)',
    },
  ],

  citations: [
    {
      id: 'cni-overview-2023',
      type: 'article',
      title: 'Calcineurin Inhibitors in Solid Organ Transplantation',
      authors: ['Johnson AC', 'Hariharan S'],
      source: 'Transplantation Reviews',
      url: 'https://www.transplantation-reviews.com',
      accessedDate: '2026-01-28',
    },
    {
      id: 'symphony-study',
      type: 'article',
      title: 'The Symphony Study: Five-Year Follow-Up of Immunosuppressive Therapy',
      authors: ['Ekberg H', 'Tedesco-Silva H', 'Demirbas A'],
      source: 'American Journal of Transplantation',
      url: 'https://doi.org/10.1111/j.1600-6143.2007.01902.x',
      accessedDate: '2026-01-28',
    },
    {
      id: 'tacrolimus-prescribing',
      type: 'textbook',
      title: 'Tacrolimus in Transplantation: Current Practice and Future Directions',
      authors: ['Kahan BD'],
      source: 'Transplantation Proceedings',
      accessedDate: '2026-01-28',
    },
  ],

  crossReferences: [
    {
      targetId: 'transplant-immunosuppression-basics',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Immunosuppression Basics',
    },
    {
      targetId: 'transplant-mycophenolate',
      targetType: 'concept',
      relationship: 'related',
      label: 'Antiproliferative Agents',
    },
    {
      targetId: 'transplant-rejection',
      targetType: 'condition',
      relationship: 'related',
      label: 'Transplant Rejection',
    },
  ],

  tags: {
    systems: ['immune', 'renal'],
    topics: ['transplant', 'pharmacology', 'immunosuppression'],
    keywords: ['tacrolimus', 'cyclosporine', 'CNI', 'FK506', 'Prograf', 'Neoral', 'immunosuppression', 'drug monitoring'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
