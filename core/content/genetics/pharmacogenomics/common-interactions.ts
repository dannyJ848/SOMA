/**
 * Common Drug-Gene Interactions - Comprehensive Educational Content
 *
 * Covers the most clinically relevant drug-gene pairs with specific
 * dosing recommendations and clinical management strategies.
 */

import { EducationalContent } from "../../types";

export const commonDrugGeneInteractionsContent: EducationalContent = {
  id: "concept-common-drug-gene-interactions",
  type: "concept",
  name: "Common Drug-Gene Interactions",
  alternateNames: [
    "Drug-Gene Pairs",
    "Pharmacogenomic Interactions",
    "PGx Drug Interactions",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Some common medications work differently in people based on their genes. Knowing about these drug-gene interactions helps doctors choose the best medicine for you.",
      explanation: `Your genes can affect how well certain medicines work for you and whether you might have side effects. Here are some important examples of how genes and medicines interact.

**Pain Medicines:**

Codeine needs to be changed by your body into morphine to work. The CYP2D6 gene controls this. Some people:
- Cannot change codeine to morphine at all (it will not help their pain)
- Change it too quickly (might get too much morphine, which can be dangerous)

For these people, doctors can choose different pain medicines that work better.

**Blood Thinners:**

Warfarin (Coumadin) helps prevent blood clots. The right dose is very different for different people. Genes called CYP2C9 and VKORC1 help determine:
- How fast your body breaks down warfarin
- How sensitive you are to the drug

A genetic test can help find the right starting dose, reducing the risk of bleeding or clots.

**Heart Medicines:**

Clopidogrel (Plavix) helps prevent heart attacks and strokes by keeping blood from clotting. It is a "prodrug" that needs to be activated in your body. The CYP2C19 gene controls this.

Some people cannot activate clopidogrel well, so it does not protect them as well. These people might need a different medicine.

**Medicines That Can Cause Severe Allergic Reactions:**

Some medicines can cause severe skin reactions in people with certain genes:
- Abacavir (HIV medicine) - people with HLA-B*57:01 gene variant
- Carbamazepine (seizure medicine) - people with HLA-B*15:02 gene variant

Testing for these genes before starting the medicine can prevent these dangerous reactions.`,
      keyTerms: [
        {
          term: "drug-gene interaction",
          definition:
            "How a specific gene affects the way a medicine works in your body",
        },
        {
          term: "codeine",
          definition:
            "A pain medicine that some people cannot use effectively due to their genes",
        },
        {
          term: "warfarin",
          definition:
            "A blood thinner that requires different doses based on genetics",
        },
        {
          term: "severe reaction",
          definition:
            "A dangerous allergic response that can be prevented by genetic testing",
        },
      ],
      analogies: [
        "Codeine is like a locked treasure chest - you need the right key (enzyme) to open it and get the pain relief inside.",
        "Warfarin dosing is like adjusting a thermostat - genes help determine the right setting for each person.",
        "HLA testing is like checking if someone is allergic to peanuts before giving them a peanut butter sandwich.",
      ],
      examples: [
        "A child who took codeine after surgery had breathing problems because their body changed it to morphine too quickly.",
        "A patient starting warfarin had genetic testing that showed they needed a much lower dose than average.",
        "Before starting an HIV medication, a patient was tested and found to have the HLA-B*57:01 gene, so they were given a different medicine.",
      ],
    },
    2: {
      level: 2,
      summary:
        "High-evidence drug-gene interactions include opioid metabolism (CYP2D6), anticoagulation (CYP2C9/VKORC1), antiplatelet therapy (CYP2C19), and HLA-mediated hypersensitivity reactions, each with specific clinical recommendations.",
      explanation: `Several drug-gene pairs have strong evidence supporting clinical implementation. Understanding these interactions enables personalized prescribing.

**CYP2D6 and Opioids:**

| Drug | CYP2D6 Role | Poor Metabolizer | Ultrarapid Metabolizer |
|------|-------------|------------------|----------------------|
| Codeine | Activation to morphine | No effect | Toxicity risk |
| Tramadol | Activation | Reduced efficacy | Toxicity risk |
| Hydrocodone | Activation | Reduced efficacy | Possible toxicity |
| Oxycodone | Minor pathway | May have reduced efficacy | Consider lower dose |

*Recommendations:*
- Avoid codeine in PM and UM
- Consider alternatives for tramadol in PM/UM
- Morphine, hydromorphone not CYP2D6 dependent

**CYP2C9/VKORC1 and Warfarin:**

| Gene | Variant | Effect |
|------|---------|--------|
| CYP2C9 | *2 | ~30% dose reduction |
| CYP2C9 | *3 | ~50% dose reduction |
| VKORC1 | -1639 A allele | ~25% dose reduction per allele |

*Algorithm Dosing:*
- Incorporates genotype + clinical factors
- Reduces time to stable INR
- Decreases bleeding risk
- Most beneficial in initial dosing phase

**CYP2C19 and Clopidogrel:**

| Phenotype | Effect | Recommendation |
|-----------|--------|----------------|
| Poor metabolizer | Reduced active metabolite | Use alternative agent |
| Intermediate metabolizer | Reduced response | Consider alternative |
| Normal/Rapid | Expected response | Standard therapy |

*Alternative Agents:*
- Prasugrel (not CYP2C19 dependent)
- Ticagrelor (not CYP2C19 dependent)
- Consider for high-risk patients regardless of genotype

**HLA-Mediated Severe Reactions:**

| Drug | HLA Allele | Reaction | Prevention |
|------|------------|----------|------------|
| Abacavir | B*57:01 | Hypersensitivity syndrome | Test before prescribing |
| Carbamazepine | B*15:02 | SJS/TEN | Test Asians before prescribing |
| Allopurinol | B*58:01 | SJS/TEN | Test high-risk populations |

*Key Points:*
- HLA-B*57:01 testing before abacavir is standard of care
- Negative test essentially eliminates hypersensitivity risk
- HLA-B*15:02 prevalent in Asian populations

**TPMT/NUDT15 and Thiopurines:**

| Drug | Gene | Poor Metabolizer Risk |
|------|------|----------------------|
| Azathioprine | TPMT, NUDT15 | Severe myelosuppression |
| 6-mercaptopurine | TPMT, NUDT15 | Severe myelosuppression |

*Recommendations:*
- Reduce dose 50-90% for intermediate metabolizers
- Avoid or use very low doses for poor metabolizers
- NUDT15 important in Asian populations

**DPYD and Fluoropyrimidines:**

- DPD enzyme metabolizes 5-FU and capecitabine
- Deficiency causes severe toxicity (myelosuppression, mucositis, neurotoxicity)
- Test before initiating therapy
- Reduce dose or avoid based on variant`,
      keyTerms: [
        {
          term: "ultrarapid metabolizer",
          definition:
            "Person with increased enzyme activity who may convert prodrugs too quickly, risking toxicity",
        },
        {
          term: "INR",
          definition:
            "International Normalized Ratio; blood test measuring warfarin effect",
        },
        {
          term: "SJS/TEN",
          definition:
            "Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis; severe, potentially fatal skin reactions",
        },
        {
          term: "thiopurine",
          definition:
            "Class of drugs including azathioprine and 6-MP used for immunosuppression",
        },
        {
          term: "myelosuppression",
          definition:
            "Decreased bone marrow function leading to low blood cell counts",
        },
      ],
      analogies: [
        "Ultrarapid metabolizers with codeine are like a car with the accelerator stuck - too much morphine too fast.",
        "Warfarin dosing algorithms are like GPS - they use multiple data points to find the best route.",
        "TPMT testing before thiopurines is like checking the depth before diving - it prevents dangerous crashes.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Clinical implementation of high-evidence drug-gene pairs requires understanding molecular mechanisms, phenotype-guided dosing algorithms, and integration with therapeutic drug monitoring and clinical decision support systems.",
      explanation: `## CYP2D6-Opioid Interactions

### Molecular Mechanism

**Codeine Activation:**
\`\`\`
Codeine → CYP2D6 → Morphine → Analgesia
           |
           ↓
       CYP3A4 → Norcodeine (inactive)
\`\`\`

**Activity Score and Recommendations:**

| Activity Score | Phenotype | Codeine | Tramadol |
|----------------|-----------|---------|----------|
| 0 | PM | Avoid | Avoid |
| 0.25-1 | IM | Use alternatives | Use alternatives |
| 1.25-2.25 | NM | Standard | Standard |
| >2.25 | UM | Avoid | Avoid |

### Clinical Considerations

**Tramadol Complexity:**
- Both parent compound and metabolite (M1) have activity
- CYP2D6 affects M1 formation
- Serotonergic effects independent of CYP2D6

**Oxycodone:**
- CYP2D6 forms oxymorphone (active)
- CYP3A4 forms noroxycodone (weak activity)
- PM may have reduced efficacy; UM uncertain
- Some recommend avoiding in UM

## Warfarin Pharmacogenomics

### Gene Effects

**CYP2C9:**
| Diplotype | Metabolic Activity | Dose Adjustment |
|-----------|-------------------|-----------------|
| *1/*1 | Normal | Standard |
| *1/*2 | Intermediate | ~20% reduction |
| *1/*3 | Intermediate | ~30% reduction |
| *2/*2 | Poor | ~40% reduction |
| *2/*3 | Poor | ~50% reduction |
| *3/*3 | Poor | ~60% reduction |

**VKORC1 -1639G>A:**
| Genotype | Sensitivity | Dose Adjustment |
|----------|-------------|-----------------|
| GG | Normal | Standard |
| GA | Intermediate | ~25% reduction |
| AA | High | ~50% reduction |

### Dosing Algorithms

**IWPC Algorithm:**
- Incorporates CYP2C9, VKORC1, CYP4F2
- Clinical factors: age, weight, amiodarone, etc.
- Validated in multiple populations
- Most useful for initiation

**Clinical Application:**
| Phase | Approach |
|-------|----------|
| Initiation | Algorithm-based dosing |
| Titration | INR monitoring |
| Maintenance | Standard management |

## CYP2C19-Clopidogrel

### Mechanism

\`\`\`
Clopidogrel → CYP2C19 → Active metabolite → P2Y12 blockade → ↓ Platelet aggregation
             (+ CYP3A4, CYP2B6)
\`\`\`

### Phenotype Recommendations (CPIC)

| Phenotype | Activity Score | Recommendation |
|-----------|----------------|----------------|
| UM | >2.25 | Standard dose |
| RM | 1.75-2.25 | Standard dose |
| NM | 1.25-1.5 | Standard dose |
| IM | 0.25-1 | Alternative agent preferred |
| PM | 0 | Alternative agent |

### Alternative Agents

| Drug | Metabolism | Considerations |
|------|------------|----------------|
| Prasugrel | CYP3A4, CYP2B6 | More bleeding; avoid in stroke/TIA history |
| Ticagrelor | CYP3A4 | Twice daily; dyspnea; drug interactions |

### Clinical Context

**High-Risk Scenarios:**
- ACS with PCI
- Drug-eluting stent
- Complex PCI

In high-risk patients, consider alternative regardless of genotype (TAILOR-PCI, POPular Genetics support this approach)

## HLA Pharmacogenomics

### Abacavir-HLA-B*57:01

**Mechanism:**
- Drug-HLA complex triggers CD8+ T-cell response
- Specific to HLA-B*57:01
- Delayed-type hypersensitivity

**Implementation:**
- Test all patients before prescribing
- Negative predictive value ~100%
- Positive: Contraindicated, never rechallenge

### Carbamazepine-HLA-B*15:02

**At-Risk Populations:**
| Population | HLA-B*15:02 Frequency |
|------------|----------------------|
| Han Chinese | 10-15% |
| Thai | 8-12% |
| Vietnamese | 5-8% |
| Caucasian | <1% |
| African | <1% |

**FDA Recommendation:**
- Test Asian ancestry patients before carbamazepine
- Consider testing before phenytoin, oxcarbazepine
- If positive, avoid these drugs

## Thiopurine Pharmacogenomics

### TPMT/NUDT15 Pathways

\`\`\`
6-MP → TPMT → 6-MMP (hepatotoxic)
  ↓
HGPRT → 6-TGN (therapeutic/myelosuppressive)
  ↑
NUDT15 → Metabolizes 6-TGN precursors
\`\`\`

### Dosing Recommendations

| TPMT Activity | Starting Dose |
|---------------|---------------|
| Normal | 100% |
| Intermediate | 30-80% |
| Poor | 10% or avoid |

**NUDT15:**
- More important in Asian populations
- Intermediate: 50% dose
- Poor: Avoid or 10% dose

### Monitoring

- CBC at baseline and weekly initially
- Thiopurine metabolite levels (6-TGN, 6-MMP) guide ongoing therapy
- Combine genotype with metabolite monitoring`,
      keyTerms: [
        {
          term: "IWPC algorithm",
          definition:
            "International Warfarin Pharmacogenetics Consortium dosing algorithm incorporating multiple genetic and clinical factors",
        },
        {
          term: "negative predictive value",
          definition:
            "Probability that a negative test correctly identifies those who will not have the condition/reaction",
        },
        {
          term: "6-TGN",
          definition:
            "6-thioguanine nucleotides; active metabolites of thiopurines",
        },
        {
          term: "delayed-type hypersensitivity",
          definition:
            "T-cell mediated immune reaction occurring hours to days after exposure",
        },
        {
          term: "drug-eluting stent",
          definition:
            "Coronary stent coated with medication; requires prolonged antiplatelet therapy",
        },
        {
          term: "activity score",
          definition:
            "Quantitative system assigning numerical values to alleles to determine phenotype",
        },
      ],
      clinicalNotes:
        "TAILOR-PCI and POPular Genetics trials showed CYP2C19-guided therapy reduces bleeding without increasing ischemic events. Consider alternative antiplatelet in all high-risk ACS patients. For HLA testing, ensure laboratory reports specific alleles, not just general HLA type.",
    },
    4: {
      level: 4,
      summary:
        "Advanced drug-gene interaction management encompasses phenoconversion modeling, multi-drug interaction networks, therapeutic drug monitoring integration, and emerging gene-drug pairs with growing clinical evidence.",
      explanation: `## Phenoconversion Considerations

### CYP2D6 Drug Interactions

**Strong Inhibitors (Phenoconverters to PM):**
| Inhibitor | Effect |
|-----------|--------|
| Fluoxetine | Near-complete inhibition |
| Paroxetine | Near-complete inhibition |
| Bupropion | Moderate-strong inhibition |
| Quinidine | Strong inhibition |

**Clinical Scenario:**
- Genotypic NM on fluoxetine = phenotypic PM
- Tamoxifen activation impaired
- Codeine safety altered

### Drug Interaction Networks

**CYP2C19 Inhibitors:**
| Drug | Strength |
|------|----------|
| Omeprazole | Moderate |
| Esomeprazole | Moderate |
| Fluoxetine | Moderate |
| Fluconazole | Moderate |

**Impact on Clopidogrel:**
- PPI use controversial
- FDA warning (2009) for omeprazole
- Some data suggest pantoprazole preferred
- Genotype + PPI interaction modeling complex

### Composite Phenotype Assignment

**Integrated Approach:**
1. Determine genotype-based phenotype
2. Assess concurrent medications
3. Adjust for inhibitors/inducers
4. Assign phenoconverted phenotype
5. Apply appropriate dosing

## Emerging High-Evidence Pairs

### CYP2C19-Voriconazole

**Metabolism:**
- Primary CYP2C19 substrate
- Highly variable exposure

| Phenotype | Effect | Recommendation |
|-----------|--------|----------------|
| PM | ↑ Exposure 4-fold | Reduce dose 50% |
| UM | ↓ Exposure | Higher doses or alternative |

**TDM Integration:**
- Target trough: 1-5 μg/mL
- Genotype guides initial dosing
- TDM guides maintenance

### CYP3A5-Tacrolimus

**Expression:**
| Genotype | CYP3A5 Expression |
|----------|-------------------|
| *1/*1 | Expresser |
| *1/*3 | Intermediate |
| *3/*3 | Non-expresser |

**Dosing Implications:**
- Expressers need higher doses
- Starting dose adjustment: 1.5-2x for expressers
- TDM essential regardless of genotype

**CPIC Recommendation:**
- Consider genotype for initial dosing
- Target trough-guided adjustment

### SLCO1B1-Simvastatin

**Mechanism:**
- SLCO1B1 encodes OATP1B1 transporter
- Hepatic statin uptake
- *5 allele: Reduced function

| Genotype | Myopathy Risk | Recommendation |
|----------|---------------|----------------|
| *1a/*1a | Baseline | Standard doses |
| *1a/*5 | Elevated | Avoid >40 mg |
| *5/*5 | High | Avoid or use alternative |

**Alternative Statins:**
- Pravastatin, rosuvastatin: Less OATP1B1 dependent
- Consider for high-risk genotypes

### CYP2B6-Efavirenz

**Metabolism:**
- Primary metabolizing enzyme

| Phenotype | Effect | Recommendation |
|-----------|--------|----------------|
| PM | ↑ Exposure | CNS effects; 200 mg may suffice |
| UM | ↓ Exposure | Standard 600 mg or increase |

**Clinical Application:**
- Dose reduction in PM may maintain efficacy
- Reduces CNS side effects

## Oncology Pharmacogenomics

### DPYD-Fluoropyrimidines (Expanded)

**Variant Classification:**

| Activity | Variants | Dose |
|----------|----------|------|
| Normal | Wild-type | 100% |
| Intermediate | *2A het | 50% |
| Poor | *2A hom, multiple variants | Avoid |

**Pre-Treatment Testing:**
- CPIC recommends testing before 5-FU/capecitabine
- European guidelines support pre-treatment testing
- Growing implementation

### UGT1A1-Irinotecan

**Gilbert Syndrome Overlap:**
- *28/*28 (homozygous Gilbert)
- Reduced glucuronidation
- Increased risk of neutropenia/diarrhea

| Genotype | Recommendation |
|----------|----------------|
| *1/*1 | Standard dose |
| *1/*28 | Standard; monitor closely |
| *28/*28 | Reduce initial dose |

## Psychiatry Applications

### CYP2D6-Antidepressants

**Tricyclic Antidepressants:**
| Drug | CYP2D6 Role | Adjustment |
|------|-------------|------------|
| Amitriptyline | Metabolism | Dose by phenotype |
| Nortriptyline | Metabolism | Dose by phenotype |
| Imipramine | Metabolism | Dose by phenotype |

**CPIC Recommendations:**
- PM: 50% dose or alternative
- UM: Alternative agent
- TDM supportive

**SSRIs:**
| Drug | CYP2D6 | CYP2C19 | Primary Recommendation |
|------|--------|---------|----------------------|
| Paroxetine | Yes | Minor | Avoid in PM |
| Fluoxetine | Yes | No | Consider alternative in PM |
| Sertraline | Minor | Yes | Consider CYP2C19 |
| Citalopram | No | Yes | Dose by CYP2C19 |
| Escitalopram | No | Yes | Dose by CYP2C19 |

### CYP2C19-Escitalopram/Citalopram

| Phenotype | Recommendation |
|-----------|----------------|
| PM | 50% dose |
| UM | Alternative agent |

## Implementation Considerations

### Panel Design

**High-Priority Genes:**
1. CYP2D6 (complexity in CNV detection)
2. CYP2C19
3. CYP2C9
4. VKORC1
5. TPMT
6. DPYD
7. HLA-B (specific alleles)
8. SLCO1B1

### Result Delivery

**Timing Considerations:**
| Scenario | Approach |
|----------|----------|
| Pre-prescription | Optimal |
| At-prescription | Point-of-care options |
| Post-ADR | Still valuable for future |

**Clinical Decision Support:**
- EHR integration critical
- Interruptive alerts for high-risk combinations
- Passive display for routine prescribing`,
      keyTerms: [
        {
          term: "phenoconversion",
          definition:
            "Change in metabolic phenotype due to drug inhibition or induction of enzymes",
        },
        {
          term: "composite phenotype",
          definition:
            "Metabolic phenotype considering both genotype and concurrent medications",
        },
        {
          term: "OATP1B1",
          definition:
            "Organic Anion Transporting Polypeptide; hepatic uptake transporter for statins",
        },
        {
          term: "expresser",
          definition:
            "Individual with CYP3A5*1 allele producing functional enzyme",
        },
        {
          term: "CNV",
          definition:
            "Copy Number Variation; gene duplications or deletions affecting CYP2D6 and others",
        },
        {
          term: "interruptive alert",
          definition:
            "EHR alert requiring user action; used for high-risk pharmacogenomic interactions",
        },
      ],
      clinicalNotes:
        "Always consider concurrent medications when interpreting PGx results - an NM on strong inhibitor functions as PM. Voriconazole is one of few drugs where PGx testing clearly improves TDM efficiency. In psychiatry, start with CYP2D6 and CYP2C19 panel for antidepressant/antipsychotic management.",
    },
    5: {
      level: 5,
      summary:
        "State-of-the-art drug-gene interaction management integrates pharmacogenomic prescribing systems, real-world outcomes data, global guideline harmonization, and emerging digital health technologies for precision medication therapy management.",
      explanation: `## Clinical Implementation Systems

### Pre-Emptive Testing Programs

**Established Programs:**

| Institution | Program | Genes | Approach |
|-------------|---------|-------|----------|
| Vanderbilt | PREDICT | Multiple | Comprehensive |
| St. Jude | PG4KDS | Pediatric focus | ~12 genes |
| Mayo | RIGHT | Multiple | Clinical integration |
| UF | PRO-GENET | Multiple | Primary care focus |

**Key Success Factors:**
- EHR integration
- Clinical decision support
- Provider education
- Genetic counseling access

### Clinical Decision Support Architecture

**Alert Hierarchy:**

| Level | Trigger | Response |
|-------|---------|----------|
| Hard stop | High-risk combo (HLA+drug) | Cannot proceed without override |
| Interruptive | Moderate risk | Requires acknowledgment |
| Passive | Informational | Results displayed |

**Design Principles:**
- Actionable recommendations
- Context-specific guidance
- Minimize alert fatigue
- Clear escalation pathways

### Results Persistence

**Lifetime Results:**
- Genotype does not change
- Store in EHR permanently
- Transfer between systems
- Apply to future prescribing

**Challenges:**
- Interoperability standards
- Result format variation
- System migration

## Real-World Evidence

### Outcomes Studies

**PREPARE Study (Europe):**
- 6,944 patients
- 12-gene panel
- 30% reduction in ADRs
- Cost-effective

**INGENIOUS (Netherlands):**
- Primary care implementation
- Feasibility demonstrated
- Provider acceptance high

**GUIDED Trial:**
- Depression treatment
- PGx-guided vs. TAU
- Improved remission rates
- 50% response improvement

### Meta-Analyses

**Clopidogrel-CYP2C19:**
- Multiple meta-analyses
- PM/IM: Increased MACE
- Genotype-guided therapy effective
- NNT reasonable

**Warfarin Dosing:**
- Reduced time to INR stability
- Decreased out-of-range INRs
- Mixed mortality data
- Benefit in initiation phase

## Global Guideline Harmonization

### CPIC vs. DPWG

| Aspect | CPIC | DPWG |
|--------|------|------|
| Geography | USA/International | Netherlands/Europe |
| Format | Gene-drug pairs | Gene-drug pairs |
| Strength levels | 4 categories | 4 categories |
| Updates | Periodic | Continuous |

**Harmonization Efforts:**
- Cross-referencing of recommendations
- PharmGKB integration
- Alignment increasing

### International Implementation

**Barriers:**
- Healthcare system differences
- Reimbursement variation
- Provider education gaps
- Laboratory standardization

**Facilitators:**
- Professional society endorsement
- Regulatory support
- Cost-effectiveness data
- Digital health tools

## Emerging Technologies

### Point-of-Care Testing

**Current Status:**
- Rapid genotyping devices available
- Emergency department applications
- Turnaround minutes to hours

**Target Applications:**
- Acute pain management
- Perioperative settings
- Critical care

**Challenges:**
- Test menu limited
- Cost per test
- Quality assurance
- Result integration

### AI/ML Applications

**Phenotype Prediction:**
- Complex multi-gene models
- Drug interaction networks
- Outcome prediction

**Clinical Decision Support:**
- Natural language processing for EHR
- Alert optimization
- Personalized recommendations

### Pharmacogenomics-As-A-Service

**Direct-to-Consumer Considerations:**
- Variable quality
- Interpretation support limited
- Integration with healthcare
- Regulatory oversight

**Best Practices:**
- Physician involvement recommended
- Validation with clinical-grade testing
- Genetic counseling for complex results

## Special Considerations

### Multi-Drug Regimens

**Polypharmacy Complexity:**
- Multiple PGx genes relevant
- Drug-drug interactions compound genetic effects
- Systems approaches needed
- Medication therapy management integration

**Example: Oncology:**
- DPYD for fluoropyrimidines
- UGT1A1 for irinotecan
- CYP2D6 for tamoxifen
- Supportive medications also affected

### Diverse Populations

**Allele Frequency Variation:**
| Gene | Population Consideration |
|------|-------------------------|
| CYP2D6 | *17, *29 in Africans |
| CYP2C19 | *2, *3 in Asians |
| NUDT15 | Important in Asians |
| HLA-B*15:02 | Asians at risk |

**Health Equity:**
- Testing access disparities
- Panel design inclusivity
- VUS rates in underrepresented populations
- Community engagement

### Pediatric Applications

**Age-Related Considerations:**
- Enzyme ontogeny
- Weight-based adjustments
- Limited pediatric data
- Safety prioritization

**Key Applications:**
- Codeine avoidance
- ADHD medication selection
- Chemotherapy dosing

## Future Directions

### Expanded Gene-Drug Pairs

**Under Investigation:**
| Gene | Drug | Status |
|------|------|--------|
| OPRM1 | Opioids | Emerging evidence |
| COMT | Pain/Catecholamines | Research |
| CYP2C8 | Paclitaxel | Growing evidence |
| CYP1A2 | Caffeine, clozapine | Some guidelines |

### Integration with Other -Omics

**Comprehensive Approach:**
- Pharmacogenomics
- Pharmacometabolomics
- Pharmacomicrobiomics
- Systems pharmacology

### Regulatory Evolution

**FDA Biomarker Table:**
- Expanding regularly
- Boxed warning additions
- Companion diagnostic requirements

**Value-Based Frameworks:**
- Cost-effectiveness data growing
- Payer coverage expanding
- Quality metrics incorporating PGx`,
      keyTerms: [
        {
          term: "pre-emptive testing",
          definition:
            "Panel-based pharmacogenomic testing before any specific drug need arises",
        },
        {
          term: "PREPARE study",
          definition:
            "European multi-center trial demonstrating ADR reduction with PGx-guided prescribing",
        },
        {
          term: "enzyme ontogeny",
          definition:
            "Developmental changes in drug-metabolizing enzyme expression from birth through adulthood",
        },
        {
          term: "point-of-care testing",
          definition:
            "Rapid diagnostic testing performed at time and place of patient care",
        },
        {
          term: "pharmacometabolomics",
          definition:
            "Study of metabolite profiles to predict drug response",
        },
        {
          term: "boxed warning",
          definition:
            "Highest-level FDA drug label warning; some include pharmacogenomic information",
        },
      ],
      clinicalNotes: `Clinical implementation priorities:
1. Start with high-evidence pairs: HLA-B*57:01-abacavir, TPMT-thiopurines, DPYD-fluoropyrimidines
2. Implement CYP2D6/CYP2C19 for psychiatry and pain management
3. Build clinical decision support integrated with EHR
4. Develop provider education programs
5. Consider pre-emptive panel testing for high-utilization patients
6. Ensure testing panels represent diverse populations
7. Combine PGx with therapeutic drug monitoring when applicable
8. Stay current with CPIC guideline updates (quarterly review)
9. Track outcomes to demonstrate value`,
    },
  },

  media: [
    {
      id: "drug-gene-pairs-table",
      type: "diagram",
      filename: "drug-gene-pairs.svg",
      title: "High-Evidence Drug-Gene Pairs",
      description:
        "Summary of clinically actionable drug-gene interactions",
    },
    {
      id: "cyp-metabolism-diagram",
      type: "diagram",
      filename: "cyp-drug-metabolism.svg",
      title: "CYP450 Drug Metabolism Pathways",
      description:
        "Diagram showing major CYP enzymes and their drug substrates",
    },
  ],

  citations: [
    {
      id: "cpic-guidelines",
      type: "website",
      title: "CPIC Guidelines",
      source: "Clinical Pharmacogenetics Implementation Consortium",
      url: "https://cpicpgx.org/guidelines",
    },
    {
      id: "swen-2023",
      type: "article",
      title:
        "A 12-gene pharmacogenetic panel to prevent adverse drug reactions",
      authors: ["Swen, J.J.", "et al."],
      source: "Lancet",
      chapter: "401",
      page: "1061-1070",
    },
    {
      id: "bousman-2023",
      type: "article",
      title:
        "Pharmacogenetic tests and depressive symptom remission",
      authors: ["Bousman, C.A.", "et al."],
      source: "JAMA",
      chapter: "329",
      page: "562-569",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-pharmacogenomics-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Pharmacogenomics Overview",
    },
    {
      targetId: "concept-genetic-testing-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Testing",
    },
  ],

  tags: {
    systems: ["genetics", "pharmacology"],
    topics: [
      "pharmacogenomics",
      "drug metabolism",
      "drug interactions",
      "personalized medicine",
    ],
    keywords: [
      "CYP2D6",
      "CYP2C19",
      "warfarin",
      "clopidogrel",
      "HLA",
      "TPMT",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "psychiatry", "surgery"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default commonDrugGeneInteractionsContent;
