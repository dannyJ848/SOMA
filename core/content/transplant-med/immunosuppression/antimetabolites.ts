/**
 * Antimetabolites - Comprehensive Educational Content
 *
 * Covers mycophenolate mofetil (MMF) and azathioprine: mechanisms, dosing,
 * monitoring, drug interactions, and adverse effects in transplant medicine.
 * Focused specifically on purine synthesis inhibitors, distinct from mTOR inhibitors.
 */

import { EducationalContent } from '../../types';

export const antimetabolites: EducationalContent = {
  id: 'topic-antimetabolites',
  type: 'topic',
  name: 'Antimetabolites',
  alternateNames: ['MMF', 'Mycophenolate Mofetil', 'CellCept', 'Myfortic', 'Azathioprine', 'Imuran', 'AZA', 'MPA'],

  levels: {
    1: {
      level: 1,
      summary: 'Antimetabolites are medicines that stop immune cells from making copies of themselves by blocking the building blocks they need to grow.',
      explanation: `After a transplant, your immune system wants to attack the new organ. Antimetabolites help by stopping immune cells from multiplying.

**The Two Main Medicines:**

1. **Mycophenolate (CellCept, Myfortic)**
The most commonly used antimetabolite today. It targets immune cells specifically.

2. **Azathioprine (Imuran)**
An older medicine still used in some patients, especially those planning pregnancy.

**How They Work (Simple Version):**

Immune cells need to make copies of themselves to attack your new organ. These medicines block the "copy machine" so immune cells cannot multiply.

**Taking Mycophenolate:**

- Usually taken twice daily (morning and evening)
- Take at the same times every day
- Can take with food if stomach upset occurs
- Swallow whole - do not crush or chew

**Taking Azathioprine:**

- Usually taken once daily
- Take at the same time each day
- Can be taken with food
- Tablet can be split if needed

**Common Side Effects:**

*Mycophenolate:*
- Upset stomach, nausea
- Diarrhea (most common)
- Low blood cell counts
- More infections

*Azathioprine:*
- Nausea
- Low blood cell counts
- Liver problems
- Increased skin cancer risk

**Important Things to Know:**

- Regular blood tests monitor how the medicine affects blood cells
- Women should NOT become pregnant on mycophenolate (birth defects)
- Azathioprine is safer in pregnancy
- Tell your doctor about all other medicines`,
      keyTerms: [
        { term: 'antimetabolite', definition: 'A medicine that stops cells from making the building blocks they need to grow and multiply' },
        { term: 'mycophenolate', definition: 'The most common antimetabolite used after transplants' },
        { term: 'azathioprine', definition: 'An older antimetabolite still used in certain situations' },
        { term: 'blood counts', definition: 'Tests that measure how many blood cells you have' },
      ],
      analogies: [
        'Antimetabolites are like removing the paper from the copy machine - immune cells cannot make copies of themselves.',
        'Taking these medicines is like cutting off supplies to an army - without building materials, they cannot grow their numbers.',
        'Your immune cells need special ingredients to multiply - antimetabolites hide those ingredients.',
      ],
      examples: [
        'A kidney transplant patient takes mycophenolate 1000 mg in the morning and 1000 mg in the evening.',
        'A woman planning pregnancy is switched from mycophenolate to azathioprine because it is safer for the baby.',
      ],
      patientCounselingPoints: [
        'Take mycophenolate at the same times every day, usually 12 hours apart',
        'Do not crush, chew, or break mycophenolate capsules',
        'Women must use reliable birth control while on mycophenolate',
        'Report diarrhea lasting more than 2-3 days to your transplant team',
        'Get blood tests as scheduled to monitor blood cell counts',
      ],
    },
    2: {
      level: 2,
      summary: 'Antimetabolites (mycophenolate and azathioprine) prevent lymphocyte proliferation by inhibiting purine synthesis pathways essential for DNA replication, making them key components of transplant immunosuppression regimens.',
      explanation: `## Overview

Antimetabolites interfere with the synthesis of purines, which are essential building blocks for DNA. Since activated lymphocytes must rapidly divide to mount an immune response, blocking purine synthesis selectively impairs the immune attack on transplanted organs.

## Mycophenolate

### Two Formulations
- **Mycophenolate mofetil (MMF, CellCept)**: Prodrug converted to mycophenolic acid
- **Mycophenolate sodium (MPS, Myfortic)**: Enteric-coated mycophenolic acid

### Mechanism
- Inhibits inosine monophosphate dehydrogenase (IMPDH)
- Blocks de novo guanine nucleotide synthesis
- Lymphocytes rely heavily on de novo pathway
- More selective for lymphocytes than other cells

### Dosing
- MMF: Typically 1000 mg twice daily
- MPS: 720 mg twice daily (equivalent to MMF 1000 mg)
- May reduce dose for side effects

### Drug Interactions
- Antacids decrease absorption (separate by 2 hours)
- Cholestyramine reduces enterohepatic recirculation
- Rifampin decreases levels
- Acyclovir/ganciclovir: compete for tubular secretion

## Azathioprine

### Mechanism
- Prodrug converted to 6-mercaptopurine (6-MP)
- Incorporated into DNA as fake building block
- Causes DNA damage and cell death
- Less selective than mycophenolate

### Dosing
- Typically 1-2 mg/kg/day
- Single daily dose
- Adjust for renal impairment

### Key Drug Interaction: Allopurinol
- Allopurinol inhibits xanthine oxidase
- Prevents azathioprine breakdown
- Can cause severe bone marrow toxicity
- MUST reduce azathioprine dose 75% if allopurinol needed

## Comparison

| Feature | Mycophenolate | Azathioprine |
|---------|--------------|--------------|
| Rejection prevention | Superior | Adequate |
| GI side effects | More common | Less common |
| Pregnancy safety | Category D (avoid) | Category D (relatively safer) |
| Cost | Higher | Lower |
| Monitoring | MPA levels optional | TPMT testing recommended |

## Monitoring

### Complete Blood Count (CBC)
- Check weekly initially, then monthly
- Watch for leukopenia, anemia, thrombocytopenia
- Hold if WBC <3,000 or ANC <1,500

### Liver Function Tests
- Especially important for azathioprine
- Check monthly initially

### Drug Levels (Mycophenolate)
- MPA trough <1.5 mg/L may indicate underexposure
- AUC monitoring in some centers (target 30-60 mg*h/L)`,
      keyTerms: [
        { term: 'IMPDH', definition: 'Inosine monophosphate dehydrogenase; the enzyme blocked by mycophenolate' },
        { term: 'purine', definition: 'A building block of DNA; adenine and guanine are purines' },
        { term: 'de novo synthesis', definition: 'Making new molecules from scratch, not recycling existing ones' },
        { term: '6-mercaptopurine', definition: 'The active form of azathioprine' },
        { term: 'xanthine oxidase', definition: 'Enzyme that breaks down azathioprine; blocked by allopurinol' },
        { term: 'AUC', definition: 'Area under the curve; measure of total drug exposure over time' },
      ],
      analogies: [
        'Antimetabolites are like replacing real LEGO bricks with fake ones - the immune cells try to build but the structure falls apart.',
        'The IMPDH enzyme is like a factory making building materials; mycophenolate shuts down the factory.',
        'Allopurinol plus azathioprine is like blocking the drain while the faucet runs - drug levels build up dangerously.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antimetabolites target specific enzymes in purine metabolism: mycophenolate inhibits IMPDH type II preferentially expressed in activated lymphocytes, while azathioprine metabolites incorporate into DNA causing chain termination. Pharmacogenomics (TPMT) and therapeutic drug monitoring optimize therapy.',
      explanation: `## Mycophenolate: IMPDH Inhibition

### Molecular Mechanism

The de novo purine synthesis pathway:
1. Ribose-5-phosphate → PRPP → IMP (inosine monophosphate)
2. **IMPDH converts IMP → XMP (xanthosine monophosphate)** ← Mycophenolate blocks this step
3. XMP → GMP → GDP → GTP (for RNA) and dGTP (for DNA)

### Selective Lymphocyte Inhibition

Why mycophenolate preferentially affects lymphocytes:
- Two IMPDH isoforms exist
- **IMPDH type I**: Constitutively expressed in most cells
- **IMPDH type II**: Upregulated in activated lymphocytes
- Mycophenolate inhibits both, but type II more potently
- Other cells can use salvage pathway via HGPRT
- Lymphocytes lack efficient salvage pathway

### Pharmacokinetics

**Absorption:**
- MMF: Rapidly hydrolyzed to MPA in stomach/intestine
- Bioavailability: ~94% (MMF), ~72% (MPS)
- Food delays absorption but does not significantly affect AUC

**Distribution:**
- Highly protein-bound (97-99%) to albumin
- Free MPA is the active fraction
- Low albumin → higher free MPA → more toxicity

**Metabolism:**
- Glucuronidated to MPA-glucuronide (MPAG) - inactive
- UGT1A9 is primary enzyme
- MPAG excreted in bile
- Intestinal bacteria deconjugate to MPA
- Enterohepatic recirculation: 10-60% of dose

**Elimination:**
- Primarily renal excretion of MPAG
- Half-life: 8-18 hours

### Therapeutic Drug Monitoring

| Parameter | Target | Notes |
|-----------|--------|-------|
| MPA Trough (C0) | >1.5 mg/L | Below this associated with rejection |
| MPA AUC0-12 | 30-60 mg*h/L | Better predictor than trough |
| Free MPA | Consider in hypoalbuminemia | May explain toxicity at "normal" levels |

## Azathioprine: Purine Analog

### Metabolic Pathways

Azathioprine is a prodrug:
1. Azathioprine → 6-mercaptopurine (6-MP) via glutathione
2. 6-MP has three metabolic fates:
   - **HGPRT pathway**: 6-MP → 6-thioIMP → 6-thioGTP (active)
   - **TPMT pathway**: 6-MP → 6-methylMP (inactive)
   - **XO pathway**: 6-MP → 6-thiouric acid (inactive, eliminated)

### TPMT Pharmacogenomics

**Thiopurine methyltransferase (TPMT) variants:**
- TPMT*1: Wild-type, normal activity
- TPMT*2, *3A, *3C: Reduced activity alleles

| Phenotype | Frequency | TPMT Activity | Azathioprine Dosing |
|-----------|-----------|---------------|---------------------|
| Normal | 89% | Normal | Standard dose |
| Intermediate | 10% | Reduced | Reduce dose 30-50% |
| Deficient | 0.3% | Absent | Avoid or use 10% dose |

**CPIC Guidelines:**
- Recommend TPMT genotyping before azathioprine
- Deficient patients at high risk for severe myelosuppression

### Allopurinol Interaction

Detailed mechanism:
- Xanthine oxidase (XO) normally metabolizes 6-MP to inactive 6-thiouric acid
- Allopurinol inhibits XO
- 6-MP shunted through HGPRT pathway
- More active 6-thioGTP formed
- Result: 3-4 fold increase in toxicity

**If allopurinol required:**
- Reduce azathioprine to 25% of original dose
- Monitor CBC very closely
- Consider alternative (mycophenolate, febuxostat with caution)

## Adverse Effects

### Mycophenolate

**GI Toxicity (30-50%):**
- Direct mucosal toxicity
- Dose-dependent
- Management: divide doses, switch to MPS, reduce dose

**Bone Marrow Suppression:**
- Leukopenia, neutropenia, anemia
- Monitor CBC regularly
- Hold if ANC <1,500/μL

**Infections:**
- Especially CMV, BK virus
- Herpesvirus reactivation

**Teratogenicity:**
- Category D: Documented fetal harm
- Ear, facial, cardiac, limb malformations
- Discontinue 6 weeks before conception

### Azathioprine

**Myelosuppression:**
- Dose-dependent (or TPMT-related)
- Macrocytic anemia characteristic
- Monitor CBC closely

**Hepatotoxicity:**
- Cholestatic jaundice
- Veno-occlusive disease (rare)

**Malignancy:**
- Increased skin cancer risk
- Lymphoma risk debated`,
      keyTerms: [
        { term: 'IMPDH type II', definition: 'Isoform preferentially expressed in activated lymphocytes and inhibited by mycophenolate' },
        { term: 'HGPRT', definition: 'Hypoxanthine-guanine phosphoribosyltransferase; salvage pathway enzyme lymphocytes lack' },
        { term: 'TPMT', definition: 'Thiopurine methyltransferase; enzyme that inactivates azathioprine metabolites' },
        { term: 'enterohepatic recirculation', definition: 'Drug cycling between liver, bile, intestine, and reabsorption' },
        { term: 'UGT1A9', definition: 'Glucuronosyltransferase enzyme that metabolizes MPA to inactive MPAG' },
        { term: '6-thioGTP', definition: 'Active metabolite of azathioprine incorporated into DNA' },
      ],
      clinicalNotes: 'Always check TPMT status before starting azathioprine. The allopurinol-azathioprine interaction is potentially fatal if not managed with dose reduction. For mycophenolate, consider free MPA levels in hypoalbuminemic patients who experience toxicity at "therapeutic" total MPA levels.',
    },
    4: {
      level: 4,
      summary: 'Antimetabolite optimization requires understanding of pharmacogenomic variability, therapeutic drug monitoring strategies, and management of specific toxicities. Clinical trial evidence supports mycophenolate superiority over azathioprine for rejection prevention, though azathioprine remains relevant for pregnancy planning and cost considerations.',
      explanation: `## Clinical Evidence

### Mycophenolate vs Azathioprine Trials

**Tricontinental MMF Study (1995):**
- 503 kidney transplant recipients
- MMF 2g or 3g vs azathioprine
- Biopsy-proven acute rejection at 6 months:
  - MMF 2g: 19.8%
  - MMF 3g: 17.5%
  - Azathioprine: 38%
- Established MMF as superior for rejection prevention

**Mycophenolate Pooled Analysis:**
- Combined data from US, European, and Tricontinental studies
- MMF associated with:
  - Lower acute rejection rates
  - Better graft survival at 3 years
  - Similar patient survival

**Current Guidelines:**
- Mycophenolate recommended as first-line antimetabolite
- Azathioprine acceptable alternative when MMF not tolerated

### Mycophenolate Formulation Comparison

**MYSS Study:**
- MPS vs MMF in kidney transplant
- Similar efficacy outcomes
- MPS: possibly less GI toxicity (controversial)
- No significant difference in acute rejection

## Therapeutic Drug Monitoring

### MPA AUC-Guided Dosing

**Limited Sampling Strategies:**
- Full 12-hour AUC impractical
- 3-point limited sampling: C0, C1, C2 (or similar)
- Validated equations estimate AUC
- Target AUC0-12: 30-60 mg*h/L

**Clinical Application:**
- Fixed dose concentration controlled trial showed no benefit
- May be useful in high-risk patients
- Consider when rejection or toxicity occurs

### IMPDH Activity Monitoring

**Emerging Approach:**
- Measure lymphocyte IMPDH activity directly
- Target: 40-60% enzyme inhibition
- Research tool, not standard practice

## Managing Specific Toxicities

### Mycophenolate GI Toxicity

**Assessment:**
- Distinguish drug toxicity from infection (CMV, C. diff)
- Check stool studies
- Consider endoscopy if severe

**Management Strategies:**

| Strategy | Details | Considerations |
|----------|---------|----------------|
| Dose splitting | TID or QID dosing | Better tolerated by some |
| Formulation change | MMF → MPS (enteric-coated) | Variable benefit |
| Dose reduction | 500-750 mg BID | Increases rejection risk |
| Drug holiday | Brief interruption | Risk of DSA development |

### Mycophenolate and Infections

**BK Virus:**
- Dose-dependent association
- First step: reduce immunosuppression
- Consider mycophenolate reduction before CNI

**CMV:**
- Higher risk with intense mycophenolate
- Prophylaxis or preemptive therapy standard
- May need dose adjustment during treatment

### Azathioprine Myelosuppression

**Risk Stratification:**
- TPMT genotype/phenotype
- Drug interactions (allopurinol, ACE inhibitors)
- Renal function

**Management:**
- Hold if ANC <1,000 or platelets <50,000
- Reduce dose for moderate cytopenias
- G-CSF rarely needed

## Special Populations

### Pregnancy

**Mycophenolate:**
- FDA Pregnancy Category D (evidence of fetal harm)
- REMS program requires pregnancy testing and contraception
- Discontinue 6 weeks before conception
- Switch to azathioprine

**Azathioprine:**
- Also Category D but more safety data
- Large registries show acceptable outcomes
- Risks: prematurity, low birth weight
- Benefits may outweigh risks in transplant

### Renal Impairment

**Mycophenolate:**
- MPAG accumulates in renal failure
- Competes with MPA for albumin binding
- Increases free MPA
- May need dose reduction

**Azathioprine:**
- Dose reduce for GFR <50
- Typical: 50% reduction for GFR <30

### Hepatic Impairment

**Azathioprine:**
- More hepatotoxic
- Avoid if possible in liver disease
- Monitor LFTs closely if used

## Combination Therapy Considerations

### Triple Therapy Regimens

Most common: CNI + Mycophenolate + Steroids
- CNI provides potent T-cell inhibition
- Mycophenolate adds antiproliferative effect
- Steroids: anti-inflammatory, prevent cytokine release

### Steroid-Sparing Regimens

- Mycophenolate often continued when steroids withdrawn
- May need higher mycophenolate dose
- Balance rejection risk vs steroid toxicity

### CNI Minimization

- Maintain adequate mycophenolate when reducing CNI
- MPA AUC monitoring may help optimize
- Higher mycophenolate doses may compensate for lower CNI`,
      keyTerms: [
        { term: 'Tricontinental Study', definition: 'Landmark trial demonstrating mycophenolate superiority over azathioprine for rejection prevention' },
        { term: 'limited sampling strategy', definition: 'Using few blood draws to estimate total drug exposure (AUC)' },
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy; FDA-required pregnancy prevention program for mycophenolate' },
        { term: 'dnDSA', definition: 'De novo donor-specific antibodies; can develop with inadequate immunosuppression' },
        { term: 'MPAG', definition: 'Mycophenolic acid glucuronide; inactive metabolite that accumulates in renal failure' },
        { term: 'fixed dose concentration controlled', definition: 'Trial design comparing fixed dosing vs TDM-guided dosing' },
      ],
      clinicalNotes: 'Mycophenolate GI toxicity often improves with dose adjustment or formulation change before requiring discontinuation. The allopurinol-azathioprine interaction requires immediate dose reduction and close monitoring. For women of childbearing potential on mycophenolate, reliable contraception is mandatory and pregnancy testing should be regular. When switching from mycophenolate to azathioprine for pregnancy, allow adequate overlap and monitoring.',
    },
    5: {
      level: 5,
      summary: 'Contemporary antimetabolite therapy integrates pharmacogenomic testing, precision dosing approaches, and emerging biomarkers. Research focuses on optimizing MPA exposure, understanding long-term outcomes, and developing novel agents. Mycophenolate remains the standard, but personalized approaches are improving outcomes.',
      explanation: `## Current Guidelines and Evidence Updates

### KDIGO and Society Guidelines

**Mycophenolate Recommendations:**
- Preferred antimetabolite for kidney transplant
- Standard dose: MMF 2g/day or MPS 1440mg/day
- Consider TDM in selected populations
- Dose adjustment for toxicity acceptable

**Azathioprine Position:**
- Alternative when mycophenolate contraindicated
- Preferred for pregnancy planning
- TPMT testing recommended before initiation

### Recent Trial Data

**TRANSFORM Study (Everolimus vs MPA):**
- Everolimus + reduced tacrolimus vs MMF + standard tacrolimus
- Similar efficacy at 12 months
- Better kidney function with everolimus arm
- More discontinuations with everolimus (stomatitis)

**Implications for MPA:**
- Remains standard of care
- Alternatives emerging for specific indications

## Pharmacogenomics Updates

### IMPDH Pharmacogenomics

**IMPDH1 and IMPDH2 Variants:**
- Multiple SNPs identified
- Variable associations with outcomes
- Not yet clinically implemented

**UGT1A9 Polymorphisms:**
- Affect MPA glucuronidation
- *-275T>A and *-2152C>T increase MPA exposure
- May explain interpatient variability

### NUDT15 and Azathioprine

**Newly Recognized Gene:**
- NUDT15 variants affect thiopurine metabolism
- Independent of TPMT
- Particularly relevant in Asian populations
- CPIC now recommends testing NUDT15 alongside TPMT

| NUDT15 Variant | Frequency (Asian) | Dose Recommendation |
|----------------|-------------------|---------------------|
| *1/*1 | ~85% | Standard dose |
| *1/*2, *1/*3 | ~13% | Reduce dose 50% |
| *2/*2, *2/*3, *3/*3 | ~2% | Avoid or use 10% dose |

## Precision Dosing Approaches

### Bayesian Estimation for MPA

**Population Pharmacokinetic Models:**
- Incorporate patient characteristics
- Account for drug interactions
- Predict optimal dosing

**Software Tools:**
- NONMEM-based models
- MwPharm, InsightRX
- Real-time dose optimization

### Model-Informed Precision Dosing (MIPD)

**Implementation:**
1. Collect limited samples
2. Input into validated model
3. Generate dose recommendation
4. Monitor and adjust

**Evidence:**
- Retrospective studies show improved target attainment
- Prospective trials ongoing
- Not yet standard of care

## Emerging Biomarkers

### IMPDH Activity Assays

**Direct Enzyme Measurement:**
- Lymphocyte IMPDH activity correlates with MPA effect
- Target: 40-60% inhibition from baseline
- More physiologically relevant than drug levels

**Limitations:**
- Technically demanding
- Not widely available
- Standardization needed

### Gene Expression Profiling

**Rejection Prediction:**
- Molecular microscope approach
- Gene signatures may predict rejection risk
- Could guide immunosuppression intensity

**Tolerance Signatures:**
- Identify patients who may tolerate reduced immunosuppression
- Research stage

## Long-Term Outcome Data

### Malignancy Risk

**Mycophenolate:**
- Lower skin cancer risk than azathioprine
- Possible antiviral effects (EBV, HPV)
- No clear increase in lymphoma

**Azathioprine:**
- Well-established skin cancer risk
- Photosensitivity contribution
- Long-term registry data

### Cardiovascular Outcomes

**Metabolic Effects:**
- Antimetabolites relatively neutral
- Less concern than CNIs or steroids
- No specific CV benefit demonstrated

### Chronic Allograft Injury

**Interstitial Fibrosis/Tubular Atrophy (IF/TA):**
- Multifactorial
- Mycophenolate: no direct fibrosis effect
- Adequate immunosuppression prevents rejection-related fibrosis

## Novel Agents and Approaches

### IMPDH Inhibitors

**VX-148:**
- Second-generation IMPDH inhibitor
- Potentially more selective
- Early development halted

**Current Status:**
- No new IMPDH inhibitors near approval
- Focus on optimizing mycophenolate

### JAK Inhibitors

**Tofacitinib in Transplant:**
- OSAKA and PILOT studies
- Alternative to antimetabolites
- Different safety profile
- Not yet approved for transplant

### Alternative Purine Pathway Targets

**Adenosine Deaminase (ADA) Inhibitors:**
- Pentostatin (deoxycoformycin)
- Different mechanism
- Used in hematologic malignancies
- Not standard in transplant

## Future Directions

### Personalized Immunosuppression

**Integration of:**
- Pharmacogenomics (TPMT, NUDT15, UGT variants)
- Therapeutic drug monitoring
- Biomarkers (IMPDH activity, gene expression)
- Clinical risk factors

**Goal:**
- Right drug, right dose, right patient
- Minimize rejection and toxicity
- Optimize long-term outcomes

### Tolerance Protocols

**Minimization Studies:**
- Some patients may tolerate reduced immunosuppression
- Biomarker-guided withdrawal protocols
- Regulatory T-cell markers
- Operational tolerance (off all immunosuppression)

**Current Reality:**
- Most patients require lifelong therapy
- Tolerance rare and unpredictable
- Research continues`,
      keyTerms: [
        { term: 'NUDT15', definition: 'Nucleoside diphosphate-linked moiety X-type motif 15; gene affecting thiopurine toxicity, especially in Asian populations' },
        { term: 'MIPD', definition: 'Model-informed precision dosing; using pharmacokinetic models to optimize individual drug dosing' },
        { term: 'operational tolerance', definition: 'Acceptance of a graft without immunosuppression; rare but documented phenomenon' },
        { term: 'molecular microscope', definition: 'Gene expression-based analysis of graft biopsies for precision diagnosis' },
        { term: 'VX-148', definition: 'Experimental second-generation IMPDH inhibitor (development discontinued)' },
        { term: 'Bayesian estimation', definition: 'Statistical method using prior population data and individual measurements to predict pharmacokinetics' },
      ],
      clinicalNotes: `Key clinical pearls for antimetabolite management:

1. **Pharmacogenomics**: Test TPMT (and consider NUDT15 in Asian patients) before starting azathioprine. Results guide initial dosing and prevent severe myelosuppression.

2. **MPA Exposure**: Trough levels <1.5 mg/L or AUC <30 mg*h/L associated with rejection. Consider TDM in patients with rejection or unusual response.

3. **GI Toxicity**: Progressive approach: split dosing → formulation change (MMF to MPS) → dose reduction. Rule out CMV colitis or C. diff before attributing symptoms to drug.

4. **Pregnancy**: Mycophenolate is strictly contraindicated. Plan transition to azathioprine at least 6 weeks before conception. Azathioprine has more safety data and is acceptable in pregnancy.

5. **Allopurinol Interaction**: Mandatory 75% dose reduction of azathioprine. This interaction can be fatal if not managed properly.

6. **Long-term Monitoring**: Regular CBC monitoring continues lifelong. Skin cancer surveillance especially with azathioprine.`,
    },
  },

  media: [
    {
      id: 'antimetabolite-mechanism-diagram',
      type: 'diagram',
      filename: 'antimetabolite-purine-pathway.svg',
      title: 'Antimetabolite Mechanism of Action',
      description: 'IMPDH inhibition by mycophenolate and DNA incorporation by azathioprine metabolites',
    },
    {
      id: 'mpa-pharmacokinetics',
      type: 'diagram',
      filename: 'mpa-enterohepatic.svg',
      title: 'MPA Pharmacokinetics',
      description: 'Mycophenolic acid absorption, metabolism, and enterohepatic recirculation',
    },
  ],

  citations: [
    {
      id: 'tricontinental-mmf',
      type: 'article',
      title: 'A Blinded, Randomized Clinical Trial of Mycophenolate Mofetil for the Prevention of Acute Rejection in Cadaveric Renal Transplantation',
      authors: ['The Tricontinental Mycophenolate Mofetil Renal Transplant Study Group'],
      source: 'Transplantation',
      url: 'https://doi.org/10.1097/00007890-199511000-00001',
    },
    {
      id: 'cpic-thiopurines',
      type: 'article',
      title: 'Clinical Pharmacogenetics Implementation Consortium Guideline for Thiopurine Dosing Based on TPMT and NUDT15 Genotypes',
      authors: ['Relling MV', 'et al.'],
      source: 'Clinical Pharmacology & Therapeutics',
    },
    {
      id: 'mpa-tdm-review',
      type: 'article',
      title: 'Therapeutic Drug Monitoring of Mycophenolate Mofetil in Transplantation',
      authors: ['van Gelder T', 'et al.'],
      source: 'Therapeutic Drug Monitoring',
    },
  ],

  crossReferences: [
    { targetId: 'topic-calcineurin-inhibitors', targetType: 'topic', relationship: 'sibling', label: 'Calcineurin Inhibitors' },
    { targetId: 'topic-rejection-monitoring', targetType: 'topic', relationship: 'related', label: 'Rejection Monitoring' },
    { targetId: 'topic-infection-prevention', targetType: 'topic', relationship: 'related', label: 'Infection Prevention' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['pharmacology', 'transplant', 'immunosuppression'],
    keywords: ['mycophenolate', 'MMF', 'azathioprine', 'IMPDH', 'TPMT', 'antimetabolite', 'purine synthesis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default antimetabolites;
