/**
 * Newborn Screening
 *
 * Educational content on newborn screening programs covering the heel prick test,
 * core conditions, tandem mass spectrometry, critical congenital heart disease
 * screening, hearing screening, and genomic newborn screening.
 */

import { EducationalContent } from '../../types';

export const NEWBORN_SCREENING: EducationalContent = {
  id: 'pediatrics-newborn-screening',
  type: 'topic',
  name: 'Newborn Screening',
  nameEs: 'Tamizaje Neonatal',
  alternateNames: ['NBS', 'Heel prick test', 'Newborn metabolic screening', 'Guthrie test'],

  levels: {
    1: {
      level: 1,
      summary:
        'Every baby gets a simple blood test shortly after birth to check for rare but serious conditions that can be treated early to prevent disability or death.',
      explanation: `Within the first day or two of life, a few drops of blood are taken from your baby's heel. This is called newborn screening. It checks for more than 30 rare conditions that may not show any signs right away but can cause serious problems if not treated early.

**What Is Tested**
- **Metabolic conditions:** Problems with how the body breaks down food (like PKU)
- **Hormone problems:** Low thyroid levels (congenital hypothyroidism) that can slow brain development
- **Blood disorders:** Sickle cell disease and other hemoglobin problems
- **Cystic fibrosis:** A condition affecting the lungs and digestion
- **Hearing:** A quick sound test checks if your baby can hear (done before leaving the hospital)
- **Heart defects:** A painless oxygen sensor on the hand and foot checks for serious heart problems

**Why It Matters**
- These conditions are rare but treatable if caught early
- Without screening, babies may appear healthy for weeks or months before getting very sick
- Early treatment can prevent intellectual disability, organ damage, or death
- Newborn screening has saved or improved millions of lives since it started in the 1960s

**What Happens If the Test Is Abnormal**
- An abnormal screen does NOT mean your baby definitely has a condition
- Your baby will need follow-up tests to confirm or rule out the condition
- If confirmed, treatment starts right away (special diet, medicine, or other therapy)
- Many conditions can be managed very well when caught early

**Important**
- The test is required in all 50 US states
- It is one of the most important things that happens in the first days of life
- Make sure your baby's screen is completed before leaving the hospital`,
      keyTerms: [
        { term: 'newborn screening', definition: 'A set of tests done on all babies shortly after birth to find rare but serious conditions that can be treated early' },
        { term: 'heel prick', definition: 'A small blood sample taken from the baby\'s heel used for newborn screening tests' },
        { term: 'PKU', definition: 'Phenylketonuria; a condition where the body cannot break down a protein building block called phenylalanine; treated with a special diet' },
      ],
      analogies: [
        'Newborn screening is like a safety inspection for your baby. It catches hidden problems before they cause damage.',
        'Finding a condition through newborn screening is like discovering a small leak in a dam. Fix it early, and everything is fine; miss it, and serious damage can occur.',
      ],
      patientCounselingPoints: [
        'An abnormal screening result does not mean your baby has a condition. It means more testing is needed.',
        'If a condition is confirmed, early treatment almost always leads to much better outcomes.',
        'The heel prick causes brief discomfort but can save your baby\'s life.',
        'Make sure your baby\'s screening is done before leaving the hospital.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Newborn screening programs use dried blood spots, pulse oximetry, and hearing tests to identify over 35 conditions on the RUSP within the first 24-48 hours of life.',
      explanation: `**Components of Newborn Screening**

| Component | Method | Timing | Conditions |
|-----------|--------|--------|-----------|
| Dried blood spot (DBS) | Heel prick blood on filter paper | 24-48 hours of life | >35 metabolic, endocrine, hemoglobin disorders |
| Pulse oximetry | SpO2 measurement hand + foot | >24 hours of life or before discharge | Critical congenital heart disease (CCHD) |
| Hearing screening | OAE or ABR | Before discharge | Congenital hearing loss |

**Recommended Uniform Screening Panel (RUSP) - Key Conditions**

*Amino Acid Disorders:*
| Condition | Incidence | Without Treatment | With Early Treatment |
|-----------|-----------|------------------|---------------------|
| PKU | 1:10,000-15,000 | Severe intellectual disability | Normal development with diet |
| Maple syrup urine disease | 1:185,000 | Encephalopathy, death | Manageable with diet |
| Homocystinuria | 1:200,000 | Thrombosis, lens dislocation | Improved with B6, diet |

*Endocrine Disorders:*
| Condition | Incidence | Screen | Treatment |
|-----------|-----------|--------|-----------|
| Congenital hypothyroidism | 1:2,000-4,000 | TSH (primary) or T4 | Levothyroxine |
| Congenital adrenal hyperplasia | 1:15,000 | 17-OHP | Hydrocortisone, fludrocortisone |

*Hemoglobin Disorders:*
| Condition | Incidence | Screen | Importance |
|-----------|-----------|--------|-----------|
| Sickle cell disease | 1:365 (AA) | Hemoglobin electrophoresis/HPLC | Penicillin prophylaxis by 2 months |
| Sickle cell trait | 1:12 (AA) | - | Genetic counseling |

*Other Key Conditions:*
| Condition | Incidence | Screen | Treatment |
|-----------|-----------|--------|-----------|
| Cystic fibrosis | 1:3,500 (Caucasian) | IRT + CFTR mutation analysis | Early pulmonary care |
| Galactosemia | 1:60,000 | GALT enzyme activity | Galactose-free diet |
| Biotinidase deficiency | 1:60,000 | Biotinidase enzyme activity | Biotin supplementation |
| SCID | 1:58,000 | TREC assay | HSCT before 3.5 months |
| SMA | 1:10,000 | SMN1 gene (DNA-based) | Gene therapy before symptom onset |

**CCHD Screening (Pulse Oximetry)**
| Result | SpO2 | Action |
|--------|------|--------|
| Pass | >=95% in either extremity AND <=3% difference | Normal |
| Fail | <90% in any extremity | Immediate echocardiogram |
| Repeat | 90-94% OR >3% difference hand vs foot | Repeat in 1 hour (up to 3 times) |

7 target conditions: Hypoplastic left heart, pulmonary atresia, tetralogy of Fallot, total anomalous pulmonary venous return, transposition of great arteries, tricuspid atresia, truncus arteriosus

**Timing Considerations**
- Sample too early (<24 hours): May miss PKU (insufficient phenylalanine accumulation)
- Sample after transfusion: May miss hemoglobinopathies and galactosemia
- Premature infants: May need repeat screening; thyroid function affected by prematurity`,
      keyTerms: [
        { term: 'RUSP', definition: 'Recommended Uniform Screening Panel; federal advisory list of conditions that all state newborn screening programs should include' },
        { term: 'dried blood spot', definition: 'Blood collected from a heel prick onto filter paper; stable for transport; analyzed by tandem mass spectrometry and other methods' },
        { term: 'CCHD screening', definition: 'Critical Congenital Heart Disease screening using pulse oximetry to detect 7 heart defects that may not be apparent on exam' },
        { term: 'TREC assay', definition: 'T-cell Receptor Excision Circle assay; screens for Severe Combined Immunodeficiency (SCID) by detecting absence of T-cell development' },
        { term: 'IRT', definition: 'Immunoreactive Trypsinogen; elevated in cystic fibrosis; followed by CFTR mutation analysis for confirmation' },
      ],
      analogies: [
        'The RUSP is like a minimum safety checklist that every hospital must follow for every baby.',
        'CCHD screening is like checking a car\'s engine before driving home. Some serious heart problems look fine on the outside but can be caught with a simple oxygen check.',
      ],
    },
    3: {
      level: 3,
      summary:
        'NBS utilizes tandem mass spectrometry for metabolic profiling, molecular techniques for genetic conditions, and systematic follow-up algorithms to minimize false positives while maximizing detection.',
      explanation: `**Analytical Methods**

| Method | Conditions Detected | Principle |
|--------|-------------------|-----------|
| Tandem mass spectrometry (MS/MS) | Amino acid, fatty acid oxidation, organic acid disorders | Measures acylcarnitine and amino acid profiles simultaneously |
| Immunoassay | Congenital hypothyroidism (TSH/T4), CAH (17-OHP), CF (IRT) | Antibody-based quantification |
| Hemoglobin electrophoresis/HPLC | Sickle cell disease, thalassemias | Hemoglobin variant separation |
| Enzyme assay | Galactosemia (GALT), biotinidase deficiency | Measures specific enzyme activity |
| DNA-based | SMA (SMN1), SCID (TREC), CF (CFTR mutations) | PCR/molecular testing |

**Tandem Mass Spectrometry (MS/MS) in Detail**
- Revolutionized NBS in the 2000s
- Single DBS punch screens for ~50 analytes simultaneously
- Measures amino acids (phenylalanine, leucine, methionine, tyrosine, etc.)
- Measures acylcarnitine profiles (C0-C18; each pattern specific to a disorder)
- Example: Elevated C8-acylcarnitine = MCAD deficiency
- Example: Elevated phenylalanine with low tyrosine = PKU
- False positive rate: ~0.3-0.5% per analyte; second-tier testing reduces this

**Second-Tier and Confirmatory Testing**
| Condition | Screen | Second-Tier | Confirmatory |
|-----------|--------|------------|-------------|
| PKU | Phe:Tyr ratio on MS/MS | - | Plasma amino acids, PAH gene sequencing |
| MCAD | C8-acylcarnitine elevation | C8/C10 ratio | Urine organic acids, ACADM gene |
| CAH | 17-OHP elevation | Steroid profiling by LC-MS/MS | ACTH stim test, CYP21A2 gene |
| CF | IRT elevation | CFTR mutation panel | Sweat chloride test (gold standard) |
| SCD | Hemoglobin variant | - | Hemoglobin electrophoresis confirmation |
| SCID | Low TREC count | Flow cytometry (lymphocyte subsets) | Genetic testing |
| SMA | SMN1 deletion | - | SMN2 copy number (predicts severity) |

**Follow-Up Algorithms (ACT Sheets)**
- ACMG/NICHD developed condition-specific algorithms
- "ACT sheets" guide primary care providers through follow-up steps
- Time-sensitive for some conditions:
  - Galactosemia: Stop galactose-containing feeds immediately
  - CAH (salt-wasting): Electrolyte emergency if missed
  - SCID: Avoid live vaccines; refer for HSCT evaluation
  - SMA: Gene therapy (onasemnogene) most effective pre-symptomatically

**False Positive Management**
| Factor | Impact | Mitigation |
|--------|--------|-----------|
| Prematurity | Elevated 17-OHP (false CAH), low thyroid | Repeat screen at 2 weeks; use gestational age-adjusted cutoffs |
| Early sampling (<24 hours) | Missed PKU | Repeat if <24 hours |
| Transfusion | Masks hemoglobinopathies, galactosemia | Repeat 120 days post-transfusion |
| TPN | May alter amino acid/acylcarnitine profiles | Note on screening card |
| Maternal treatment | Steroids may suppress neonatal 17-OHP; antithyroids affect TSH | Document maternal medications |

**NBS Quality Metrics**
| Metric | Target |
|--------|--------|
| Specimen collection rate | >99% of all births |
| Unsatisfactory specimen rate | <1% |
| Time from birth to collection | 24-48 hours |
| Time from collection to lab receipt | <24 hours |
| Time from receipt to reporting | <7 days for most results |
| Critical result notification | Same day for life-threatening conditions |`,
      keyTerms: [
        { term: 'tandem mass spectrometry', definition: 'MS/MS technology measuring amino acid and acylcarnitine profiles from a single DBS; screens for ~50 metabolites simultaneously; revolutionized NBS' },
        { term: 'acylcarnitine profile', definition: 'Pattern of acylcarnitine species (C0-C18) measured by MS/MS; each fatty acid oxidation and organic acid disorder produces a characteristic pattern' },
        { term: 'ACT sheets', definition: 'ACMG-developed condition-specific follow-up algorithms guiding primary care providers through confirmatory testing and initial management after abnormal NBS' },
        { term: 'second-tier testing', definition: 'More specific laboratory analysis performed on the original DBS to reduce false positives before contacting families; examples include LC-MS/MS steroid profiling for CAH' },
        { term: 'MCAD deficiency', definition: 'Medium-Chain Acyl-CoA Dehydrogenase deficiency; most common fatty acid oxidation disorder; presents with hypoketotic hypoglycemia during fasting; NBS screen: elevated C8-acylcarnitine' },
        { term: 'sweat chloride', definition: 'Gold standard confirmatory test for cystic fibrosis; elevated chloride (>=60 mmol/L) is diagnostic; intermediate 30-59 requires further genetic workup' },
      ],
      clinicalNotes:
        'Time-critical conditions: galactosemia (stop galactose immediately), salt-wasting CAH (electrolyte emergency), SCID (avoid live vaccines, refer for HSCT), and SMA (gene therapy most effective pre-symptomatically). Premature infants have high false-positive rates for 17-OHP; use gestational age-adjusted cutoffs and repeat screening. Always document transfusions, TPN, and maternal medications on the NBS card.',
    },
    4: {
      level: 4,
      summary:
        'Advanced NBS encompasses expanding screening panels, genomic NBS pilots, cost-effectiveness modeling, ethical considerations, and next-generation analytical platforms.',
      explanation: `**Expanding the RUSP**

*Recent Additions:*
| Condition | Year Added | Screen | Treatment Impact |
|-----------|-----------|--------|-----------------|
| SCID | 2010 | TREC assay | HSCT before 3.5 months: >90% survival |
| Pompe disease | 2015 | GAA enzyme activity | ERT (alglucosidase alfa) |
| MPS I (Hurler) | 2016 | IDUA enzyme activity | HSCT or ERT (laronidase) |
| SMA | 2018 | SMN1 gene deletion | Gene therapy (onasemnogene) pre-symptomatic |
| X-ALD | 2016 | C26:0 lysophosphatidylcholine | HSCT before cerebral disease |
| MPS II (Hunter) | 2022 | IDS enzyme activity | ERT or HSCT |
| Guanidinoacetate methyltransferase deficiency | 2023 | GAMT | Creatine supplementation |
| Duchenne muscular dystrophy | Under review | CK-MM | Emerging therapies |

*Nomination Process:*
- Advisory Committee on Heritable Disorders in Newborns and Children (ACHDNC)
- Criteria: Identifiable condition, validated screening test, demonstrated benefit of early detection, state readiness
- Average time from nomination to RUSP addition: 2-5 years

**Genomic Newborn Screening**

*Pilot Programs:*
| Program | Country | Approach | N |
|---------|---------|---------|---|
| BabySeq | US (NIH) | WGS for NICU + healthy infants | 159 |
| NC NEXUS | US (NICHD) | WES for ~200 conditions | Ongoing |
| Genomics England Newborn Genomes | UK | WGS for ~200 conditions | 100,000 planned |
| BabyScreen+ | Australia | WGS for ~600 genes | 10,000 planned |
| BeginNGS | US (Rady) | Rapid WGS for NICU | Ongoing |

*BabySeq Findings:*
- 9.4% of healthy newborns had actionable findings
- 88% of carrier results would not be detected by standard NBS
- Parental anxiety: Not significantly increased in sequenced group
- Cost: Currently ~$500-2,000 per genome; decreasing

*Arguments For Genomic NBS:*
- Detects far more conditions than current biochemical screening
- Identifies carriers for genetic counseling
- Can detect conditions before biochemical markers appear
- Falling sequencing costs approaching feasibility

*Arguments Against:*
- Variants of uncertain significance (VUS) create anxiety without clarity
- Secondary findings raise difficult ethical questions
- Conditions without treatment: Is presymptomatic diagnosis beneficial?
- Health equity: Access and interpretation disparities
- Data storage, privacy, and insurance discrimination concerns

**Cost-Effectiveness**
| Condition | Cost per QALY Saved | Context |
|-----------|-------------------|---------|
| PKU screening | Highly cost-effective | One of the most cost-effective interventions in all of medicine |
| SCID screening | $44,000/QALY | Below standard willingness-to-pay threshold |
| SMA screening | $31,000-60,000/QALY | Cost-effective given gene therapy effectiveness |
| Pompe screening | $200,000-400,000/QALY | Borderline; depends on treatment cost |
| Genomic NBS (projected) | Under study | Depends on conditions included and actionability |

**Lysosomal Storage Disease (LSD) Screening**
| Disease | Enzyme | Screen | Treatment |
|---------|--------|--------|-----------|
| Pompe | GAA | Fluorometric/MS/MS | ERT (alglucosidase alfa) |
| MPS I | IDUA | Fluorometric/MS/MS | HSCT (severe), ERT (attenuated) |
| MPS II | IDS | Fluorometric/MS/MS | ERT (idursulfase), HSCT |
| Fabry | GLA | Fluorometric/MS/MS | ERT (agalsidase), chaperone (migalastat) |
| Gaucher | GBA | Fluorometric | ERT (imiglucerase), SRT (eliglustat) |
| Krabbe | GALC | Fluorometric | HSCT before symptom onset |

*Multiplexed LSD screening:* A single DBS punch can measure multiple lysosomal enzyme activities simultaneously using digital microfluidics or MS/MS platforms.`,
      keyTerms: [
        { term: 'RUSP nomination', definition: 'Process by which ACHDNC evaluates conditions for addition to the Recommended Uniform Screening Panel based on available screening test, treatment benefit, and state readiness' },
        { term: 'BabySeq', definition: 'NIH-funded pilot study of whole genome sequencing in newborns; found 9.4% of healthy infants had actionable findings not detected by standard NBS' },
        { term: 'variants of uncertain significance', definition: 'Genetic variants whose pathogenicity cannot be determined with current knowledge; major challenge in genomic NBS causing diagnostic uncertainty and parental anxiety' },
        { term: 'digital microfluidics', definition: 'Automated platform enabling multiplexed enzyme assays from a single DBS punch; used for simultaneous screening of multiple lysosomal storage diseases' },
        { term: 'X-ALD', definition: 'X-linked Adrenoleukodystrophy; peroxisomal disorder screened via C26:0 lysophosphatidylcholine; early HSCT prevents fatal cerebral demyelination' },
      ],
      clinicalNotes:
        'SMA newborn screening has been transformative: pre-symptomatic gene therapy (onasemnogene) produces dramatically better outcomes than treatment after symptom onset. The BabySeq study found actionable results in 9.4% of healthy newborns, raising questions about whether genomic NBS should supplement or replace biochemical screening. Multiplexed LSD screening from a single DBS punch is becoming technically feasible, but the clinical utility for late-onset forms remains debated.',
    },
    5: {
      level: 5,
      summary:
        'Expert NBS practice encompasses genomic screening implementation science, rapid NICU WGS, international harmonization, and ethical frameworks for population-level genetic screening.',
      explanation: `**Rapid Whole Genome Sequencing in NICU**
| Program | Turnaround | Cost | Diagnostic Yield |
|---------|-----------|------|-----------------|
| Rady Children's (Project Baby Bear) | 24-48 hours | ~$2,000-5,000 | 43% diagnostic |
| Project Baby Manatee (Florida) | <5 days | Similar | 30-40% |
| NHS Rapid Sequencing Service (UK) | 7-14 days | ~£2,000 | 25-40% |

*Clinical Impact:*
- Changes management in 72% of diagnosed cases
- Reduces time to diagnosis from months/years to days
- Cost-effective when considering avoided diagnostic odyssey
- NICU stay reduction: average 4-7 fewer ICU days per diagnosed infant
- Medicaid coverage expanding (California AB 1418 mandated coverage)

**International NBS Harmonization**
| Region | Conditions Screened | Method | Challenges |
|--------|-------------------|--------|-----------|
| US | 37+ (RUSP) | MS/MS, molecular, enzyme | State variation in implementation |
| EU | Variable (3-40+) | Heterogeneous | No unified panel; EURONEOSCREEN working toward harmonization |
| Japan | 26+ | MS/MS | Strong centralized program |
| Brazil | 6 (expanding) | Phased implementation | Resource and access limitations |
| Sub-Saharan Africa | Sickle cell only (limited) | Point-of-care hemoglobin testing | Infrastructure, cost, follow-up barriers |

*Barriers in LMICs:*
- Laboratory infrastructure and cold chain
- Trained personnel for specimen collection and analysis
- Follow-up systems for abnormal results
- Treatment access and affordability
- Point-of-care NBS technologies (smartphone-based MS, paper-based assays) under development

**Ethical Frameworks for Population Genomic Screening**
| Issue | Considerations |
|-------|---------------|
| Right not to know | Should parents be able to decline genomic NBS? |
| Incidental findings | Adult-onset conditions (BRCA, Lynch); return or not? |
| Carrier status | Inform parents of carrier results? Whose information is it? |
| Data ownership | Who owns the genomic data? How long is it stored? |
| Recontact obligation | As knowledge evolves, should families be recontacted about VUS reclassification? |
| Equity | Will genomic NBS widen health disparities? |
| Insurance discrimination | GINA protects against health insurance discrimination but not life/disability insurance |

**Next-Generation NBS Technologies**
| Technology | Application | Status |
|-----------|------------|--------|
| Newborn WGS as primary screen | Replace or supplement biochemical NBS | Pilot programs (BabySeq, Genomics England) |
| CRISPR-based diagnostics | Point-of-care molecular testing for NBS | Early research |
| Post-translational modification proteomics | Detect protein dysfunction beyond enzyme activity | Research |
| Dried blood spot metabolomics (untargeted) | Broader metabolic profiling | Research |
| AI/ML interpretation of NBS data | Improve sensitivity/specificity, reduce false positives | Under development |
| Microfluidic platforms | Miniaturized, portable NBS | Prototype testing |

**Long-Term Outcomes Research**
| Condition | Pre-NBS Outcome | Post-NBS Outcome | Evidence Level |
|-----------|----------------|-----------------|---------------|
| PKU | Severe ID | Normal IQ with diet | Decades of evidence |
| CH | Cretinism | Normal development with early levothyroxine | Decades |
| SCD | Early mortality | Penicillin prophylaxis, early comprehensive care | RCT evidence (PROPS trial) |
| SCID | Fatal within 1-2 years | >90% survival with early HSCT | Observational |
| SMA | SMA1: death by age 2 | Sitting/walking with pre-symptomatic gene therapy | Phase 3 trials |
| MCAD | Sudden death during fasting | Normal life with fasting avoidance | Observational |`,
      keyTerms: [
        { term: 'diagnostic odyssey', definition: 'Prolonged diagnostic journey experienced by families of children with rare diseases; average 5-7 years; rapid WGS can shorten to days' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act (2008); prohibits discrimination by health insurers and employers based on genetic information; does NOT cover life, disability, or long-term care insurance' },
        { term: 'recontact obligation', definition: 'Ethical question of whether genomic screening programs have a duty to recontact families when VUS are reclassified as pathogenic based on new evidence' },
        { term: 'PROPS trial', definition: 'Landmark RCT demonstrating penicillin prophylaxis reduces invasive pneumococcal infections by 84% in children with sickle cell disease; led to universal NBS for SCD' },
        { term: 'Project Baby Bear', definition: 'California Medicaid pilot of rapid WGS in NICUs demonstrating 43% diagnostic yield, management changes in 72%, and cost savings from reduced diagnostic workup' },
      ],
      clinicalNotes: `**Expert Integration:**
- Rapid NICU WGS is cost-effective when accounting for avoided diagnostic odyssey and reduced ICU stay. Advocate for insurance coverage in your state.
- SMA NBS + pre-symptomatic gene therapy is the most compelling recent example of NBS impact. Motor outcomes are dramatically better when treated before symptom onset.
- Genomic NBS raises unprecedented ethical questions about incidental findings, carrier status disclosure, and the right not to know. Genetic counseling infrastructure must scale with screening.
- GINA does not cover life or disability insurance; families should be counseled about this gap.
- Point-of-care NBS technologies could transform screening access in LMICs; support development and field testing.
- AI interpretation of MS/MS data shows promise for reducing false positives while maintaining sensitivity; expect integration into clinical workflows within 5-10 years.`,
    },
  },

  media: [
    { id: 'nbs-heel-prick', type: 'image', filename: 'newborn-screening-heel-prick.jpg', title: 'Newborn Screening Heel Prick', description: 'Blood collection from newborn heel onto filter paper card' },
    { id: 'nbs-conditions-diagram', type: 'diagram', filename: 'rusp-conditions-overview.svg', title: 'RUSP Conditions Overview', description: 'Categories and conditions on the Recommended Uniform Screening Panel' },
  ],

  citations: [
    { id: 'acmg-nbs-act-sheets', type: 'website', title: 'ACT Sheets and Algorithms', source: 'American College of Medical Genetics and Genomics', url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx' },
    { id: 'babyseq', type: 'article', title: 'Genomic Sequencing in Newborn Screening', authors: ['Ceyhan-Birsoy, O.', 'Murry, J.B.', 'et al.'], source: 'AJHG', url: 'https://doi.org/10.1016/j.ajhg.2019.04.011' },
    { id: 'nelson-nbs', type: 'textbook', title: 'Nelson Textbook of Pediatrics', authors: ['Kliegman, R.M.'], source: 'Elsevier', chapter: 'Newborn Screening', license: 'Proprietary' },
  ],

  crossReferences: [
    { targetId: 'pediatrics-dev-milestones', targetType: 'topic', relationship: 'related', label: 'Developmental Milestones' },
    { targetId: 'pediatrics-growth-charts', targetType: 'concept', relationship: 'related', label: 'Growth Charts' },
  ],

  tags: {
    systems: ['endocrine', 'immune', 'nervous', 'cardiovascular'],
    topics: ['pediatrics', 'genetics', 'neonatology', 'public health', 'metabolic disease'],
    keywords: ['newborn screening', 'NBS', 'RUSP', 'PKU', 'sickle cell', 'SCID', 'SMA', 'tandem mass spectrometry', 'genomic screening', 'CCHD screening', 'heel prick'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'genetics'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
