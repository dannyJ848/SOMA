/**
 * Metabolic Screening - Screening & Prevention
 *
 * Comprehensive content on metabolic screening including diabetes screening
 * (A1C, fasting glucose, OGTT), lipid panels, thyroid screening, and
 * newborn metabolic screening.
 */

import { EducationalContent } from '../types';

export const metabolicScreening: EducationalContent = {
  id: 'screening-metabolic-screening',
  type: 'topic',
  name: 'Metabolic Screening',
  alternateNames: ['Metabolic Panel Screening', 'Endocrine Screening', 'Metabolic Health Screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Metabolic screening uses simple blood tests to check how well your body processes sugar, fats, and other important substances.',
      explanation: `Metabolic screening checks how your body handles the food you eat and makes sure important chemicals in your blood are at healthy levels.

**Diabetes Screening (Blood Sugar Tests):**
- **Why:** Diabetes means your body has trouble controlling blood sugar
- **How:** A simple blood test, sometimes after not eating overnight
- **Who:** Adults over 35, or younger if you are overweight or have risk factors
- **A1C test:** Shows your average blood sugar over the past 2-3 months - no fasting needed

**What the Blood Sugar Numbers Mean:**
- Normal fasting blood sugar: below 100
- Prediabetes: 100-125 (a warning sign)
- Diabetes: 126 or higher

**Cholesterol Screening (Lipid Panel):**
- **Why:** High cholesterol can clog your arteries and cause heart attacks or strokes
- **How:** A blood test, usually after fasting
- **What it checks:**
  - Total cholesterol (overall amount)
  - LDL ("bad" cholesterol) - builds up in arteries
  - HDL ("good" cholesterol) - helps clean arteries
  - Triglycerides - another type of fat in your blood
- **Who:** Adults starting at age 20, then regularly

**Thyroid Screening:**
- **Why:** Your thyroid controls your metabolism (how fast your body uses energy)
- **How:** A blood test called TSH
- **Signs of thyroid problems:** Feeling very tired, gaining or losing weight for no reason, feeling too hot or too cold

**Newborn Screening:**
- Every baby born in the U.S. gets a special blood test from a heel prick
- Checks for rare but serious conditions that can be treated early
- Usually done 24-48 hours after birth

**What You Should Do:**
- Get your blood sugar and cholesterol checked regularly
- Tell your doctor if diabetes or thyroid problems run in your family
- Follow up on any abnormal results`,
      keyTerms: [
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood, which your body uses for energy' },
        { term: 'cholesterol', definition: 'A waxy substance in your blood - too much of the bad kind can clog your arteries' },
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that controls how fast your body uses energy' },
        { term: 'A1C test', definition: 'A blood test that shows your average blood sugar level over the past 2-3 months' },
      ],
      analogies: [
        'Blood sugar is like fuel in a car - your body needs the right amount. Too much or too little causes problems.',
        'Cholesterol in your arteries is like grease buildup in a pipe - too much can block the flow.',
        'Your thyroid is like a thermostat for your body - it controls how fast everything runs.',
        'Newborn screening is like a safety check before a baby leaves the hospital.',
      ],
      examples: [
        'A 40-year-old gets a fasting blood sugar test during a yearly checkup and learns her number is 110, meaning prediabetes.',
        'A man finds out his LDL cholesterol is too high and works with his doctor on diet changes.',
        'A newborn heel prick test catches a thyroid problem early, so the baby can start medicine right away.',
      ],
      patientCounselingPoints: [
        'Fasting blood tests require not eating for 8-12 hours beforehand - water is usually okay.',
        'Prediabetes is a warning sign, not a diagnosis of diabetes - lifestyle changes can reverse it.',
        'High cholesterol usually has no symptoms, so regular testing is important.',
        'If your baby has an abnormal newborn screen, follow up quickly - most results turn out fine but need to be confirmed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Metabolic screening encompasses diabetes detection via A1C, fasting glucose, and OGTT; cardiovascular risk assessment through lipid panels; thyroid function evaluation; and universal newborn metabolic screening.',
      explanation: `## Metabolic Screening Overview

Metabolic screening identifies disorders of glucose regulation, lipid metabolism, thyroid function, and inborn errors of metabolism before complications develop.

## Diabetes Screening

### Testing Methods
| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting Glucose (mg/dL) | <100 | 100-125 | >=126 |
| A1C (%) | <5.7 | 5.7-6.4 | >=6.5 |
| 2-hour OGTT (mg/dL) | <140 | 140-199 | >=200 |
| Random Glucose (mg/dL) | - | - | >=200 (with symptoms) |

### Who Should Be Screened
- All adults aged 35-70 who are overweight or obese (USPSTF Grade B)
- Earlier screening with risk factors: family history, gestational diabetes, PCOS, high-risk ethnicity
- Repeat every 3 years if normal

### A1C (Glycated Hemoglobin)
- Reflects average blood glucose over 2-3 months
- Does not require fasting
- Can be inaccurate with hemoglobin variants, anemia, or recent transfusions

## Lipid Panel Screening

### Components
- **Total cholesterol:** Sum of all cholesterol types
- **LDL cholesterol:** Primary target for cardiovascular risk reduction
- **HDL cholesterol:** Protective factor (higher is better)
- **Triglycerides:** Independent risk factor when elevated
- **Non-HDL cholesterol:** Total minus HDL - secondary treatment target

### Guidelines
- Universal screening at ages 9-11 and 17-21 (pediatric)
- Adults 20+: every 4-6 years if low risk
- More frequent with cardiovascular risk factors
- Fasting vs. non-fasting: non-fasting acceptable for initial screening

### Target Values (General Adult Population)
| Component | Desirable | Borderline | High |
|-----------|-----------|------------|------|
| Total Cholesterol | <200 | 200-239 | >=240 |
| LDL | <100 | 130-159 | >=160 |
| HDL | >60 (protective) | 40-60 | <40 (risk factor) |
| Triglycerides | <150 | 150-199 | >=200 |

## Thyroid Screening

### TSH (Thyroid-Stimulating Hormone)
- **Primary screening test** for thyroid dysfunction
- Normal range: approximately 0.4-4.0 mIU/L
- **High TSH:** Suggests hypothyroidism (underactive thyroid)
- **Low TSH:** Suggests hyperthyroidism (overactive thyroid)
- Routine screening not universally recommended; test when symptomatic or at risk

### Risk Factors for Thyroid Disease
- Female sex, age over 60, family history, autoimmune conditions
- History of neck radiation, previous thyroid surgery
- Postpartum period

## Newborn Metabolic Screening

### Overview
- **Mandatory** in all U.S. states (specific conditions vary by state)
- Blood collected via heel prick at 24-48 hours of life
- Screens for 30-50+ conditions depending on the state

### Core Conditions Screened
- **PKU (phenylketonuria):** Cannot process phenylalanine
- **Congenital hypothyroidism:** Thyroid hormone deficiency
- **Galactosemia:** Cannot process galactose (milk sugar)
- **Sickle cell disease:** Abnormal hemoglobin
- **Cystic fibrosis:** Thick mucus affecting lungs and digestion
- **CAH (congenital adrenal hyperplasia):** Adrenal hormone deficiency
- **MCAD deficiency:** Cannot properly break down certain fats`,
      keyTerms: [
        { term: 'A1C (glycated hemoglobin)', definition: 'A blood test measuring the percentage of hemoglobin with attached glucose, reflecting average blood sugar over 2-3 months' },
        { term: 'OGTT', definition: 'Oral glucose tolerance test - measures blood sugar response after drinking a standard glucose solution' },
        { term: 'LDL cholesterol', definition: 'Low-density lipoprotein - the "bad" cholesterol that deposits in artery walls' },
        { term: 'TSH', definition: 'Thyroid-stimulating hormone - the primary screening marker for thyroid function' },
        { term: 'PKU', definition: 'Phenylketonuria - an inherited condition where the body cannot break down the amino acid phenylalanine' },
        { term: 'prediabetes', definition: 'A condition where blood sugar is higher than normal but not yet in the diabetic range, indicating increased risk' },
      ],
      examples: [
        'A 38-year-old woman with gestational diabetes in her last pregnancy is advised to screen for type 2 diabetes with a fasting glucose every year.',
        'A teenager with a family history of heart disease gets a lipid panel showing elevated LDL at 165 mg/dL.',
        'A newborn screening result shows elevated TSH, prompting confirmatory testing and early thyroxine replacement.',
      ],
    },
    3: {
      level: 3,
      summary: 'Metabolic screening integrates glycemic markers, atherogenic lipid profiling, thyroid function assessment, and tandem mass spectrometry-based newborn screening to identify metabolic disorders in defined populations.',
      explanation: `## Metabolic Screening: Clinical Science

### Diabetes Screening - Detailed Methodology

#### Hemoglobin A1C
- **Mechanism:** Non-enzymatic glycation of hemoglobin beta chain N-terminal valine
- **Reflects:** Weighted average glucose over 8-12 weeks (recent weeks weighted more heavily)
- **NGSP-standardized assays:** Aligned to DCCT reference method
- **Limitations:**
  - Hemoglobinopathies (HbS, HbC, HbE) may interfere depending on assay method
  - Shortened RBC lifespan (hemolysis, blood loss) falsely lowers A1C
  - Iron deficiency anemia falsely elevates A1C
  - Pregnancy: not reliable for gestational diabetes diagnosis

#### Fasting Plasma Glucose (FPG)
- Requires 8-hour caloric fast
- Measures hepatic glucose output (gluconeogenesis and glycogenolysis)
- Coefficient of variation: ~5-6% (biological variability)
- Two abnormal results required for diagnosis in asymptomatic individuals

#### Oral Glucose Tolerance Test (OGTT)
- 75g anhydrous glucose load after overnight fast
- 2-hour plasma glucose measurement
- More sensitive than FPG for detecting impaired glucose tolerance
- Gold standard for gestational diabetes screening (one-step: 75g; two-step: 50g then 100g)

#### Emerging Markers
- **Fructosamine:** Glycated albumin, reflects 2-3 week glucose average
- **1,5-AG:** Marker of glycemic excursions; **CGM:** Time-in-range metrics gaining acceptance

### Lipid Screening - Advanced Interpretation
- **Friedewald equation:** LDL = Total cholesterol - HDL - (TG/5); invalid when TG >400 mg/dL
- **Martin-Hopkins equation:** Improved accuracy with variable TG:VLDL-C factor
- **ApoB:** One molecule per atherogenic particle; better risk predictor than LDL-C
- **Lp(a):** Genetically determined; independent CVD risk factor; measure at least once
- **ASCVD risk calculator:** 10-year risk guides statin therapy decisions
- **Pediatric screening:** AAP universal screening ages 9-11, 17-21; LDL >190 suggests FH

### Thyroid Screening - Diagnostic Cascade
- **TSH:** Inversely log-linear to free T4; primary screen with reflex free T4/T3
- **Subclinical hypothyroidism:** TSH 4.5-10 mIU/L with normal free T4
- **Thyroid antibodies:** Anti-TPO (Hashimoto's), TSI (Graves'), thyroglobulin antibodies

### Newborn Screening - Technical Platform
- **Tandem MS/MS:** Single dried blood spot analyzes amino acids and acylcarnitines simultaneously
- **RUSP:** 37 core conditions, 26 secondary targets; recent additions include SMA, X-ALD, MPS II
- **Point-of-care:** Pulse oximetry (CCHD), hearing screening (OAE/ABR), bilirubin screening`,
      keyTerms: [
        { term: 'glycation', definition: 'Non-enzymatic attachment of glucose to proteins (e.g., hemoglobin), forming the basis of the A1C assay' },
        { term: 'apolipoprotein B', definition: 'Primary structural protein of atherogenic lipoproteins (LDL, VLDL, IDL); one ApoB molecule per particle; superior CVD risk marker' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a) - a genetically determined LDL-like particle with pro-thrombotic and pro-atherogenic properties' },
        { term: 'tandem mass spectrometry', definition: 'Analytical technique using two mass spectrometers in series to identify and quantify metabolites from dried blood spots' },
        { term: 'RUSP', definition: 'Recommended Uniform Screening Panel - the federally recommended set of conditions for newborn screening in the United States' },
        { term: 'subclinical hypothyroidism', definition: 'Elevated TSH with normal free T4 levels, representing early or mild thyroid failure' },
      ],
      examples: [
        'A patient with sickle cell trait (HbAS) has discrepant A1C results on HPLC-based assay; a boronate affinity method provides accurate measurement.',
        'An adult with LDL-C of 110 mg/dL but ApoB of 130 mg/dL is identified as having discordantly elevated particle number and higher residual risk.',
        'Newborn screening MS/MS detects elevated C8 acylcarnitine, prompting confirmatory testing for MCAD deficiency.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced metabolic screening encompasses glycemic marker pharmacogenomics, lipoprotein subfraction analysis, thyroid autoimmunity progression models, and expanded newborn screening with genomic integration.',
      explanation: `## Advanced Metabolic Screening

### Diabetes - Precision Medicine
- **A1C assay methods:** HPLC (affected by HbS/HbC), boronate affinity (variant-independent), immunoassay
- **IFCC standardization:** mmol/mol units; NGSP conversion: A1C(%) = [0.09148 x IFCC] + 2.152
- **CGM-derived metrics:** TIR, GMI, CV; TIR >70% approximates A1C <7%
- **Genetic risk:** T2D PRS (400+ loci incl. TCF7L2); MODY (HNF1A, GCK mutations); HLA typing in T1D prediction

### Lipid Screening - Advanced Lipidology
- **Subfractionation:** NMR LipoProfile (LDL-P, small dense LDL), ion mobility, ultracentrifugation
- **FH diagnosis:** Dutch Lipid Clinic Network criteria; LDLR, APOB, PCSK9 genetic testing
- **Cascade screening:** ~50% of first-degree FH relatives carry the variant
- **PCSK9 inhibitors:** Evolocumab, alirocumab reduce LDL 50-60% beyond statins

### Thyroid - Complex Scenarios
- **Pregnancy:** Trimester-specific TSH ranges (1st trimester upper ~2.5-4.0); TPO status guides treatment
- **Postpartum thyroiditis:** 20-40% progress to permanent hypothyroidism
- **Sick euthyroid:** Low T3, variable T4/TSH in acute illness; avoid screening acutely ill patients

### Newborn Screening - Genomic Era
- **BabySeq/Guardian studies:** WES/targeted panels finding actionable variants in 3.5-9.4% of newborns
- **Second-tier testing:** Succinylacetone (tyrosinemia), allo-isoleucine (MSUD), steroid profiling (CAH)
- **CLIR:** Post-analytical multivariate pattern analysis reducing false positives
- **LSD screening:** Pompe (GAA), MPS I (IDUA), Krabbe (GALC + psychosine); high false-positive rates`,
      keyTerms: [
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young - a group of monogenic diabetes forms caused by single-gene mutations affecting beta-cell function' },
        { term: 'familial hypercholesterolemia', definition: 'Autosomal dominant disorder of LDL receptor pathway causing severely elevated LDL from birth and premature CVD' },
        { term: 'PCSK9', definition: 'Proprotein convertase subtilisin/kexin type 9 - a protein that promotes LDL receptor degradation; therapeutic target for LDL lowering' },
        { term: 'CLIR', definition: 'Collaborative Laboratory Integrated Reports - a post-analytical tool that uses multivariate pattern analysis to improve newborn screening interpretation' },
        { term: 'time in range', definition: 'Percentage of time glucose is between 70-180 mg/dL on CGM; emerging glycemic control metric complementing A1C' },
      ],
      clinicalNotes: `**Key Clinical Considerations:**
- Always consider assay interference when A1C does not match clinical picture (check hemoglobin variants, anemia)
- ApoB and Lp(a) should be measured at least once in all adults for cardiovascular risk refinement
- Thyroid function testing in hospitalized patients often yields misleading results due to non-thyroidal illness
- Genomic newborn screening raises complex ethical and counseling challenges requiring multidisciplinary teams
- Familial hypercholesterolemia is severely underdiagnosed; cascade screening from index cases is the most efficient strategy`,
      examples: [
        'A 30-year-old lean patient with fasting glucose of 115 mg/dL and strong family history of mild diabetes is tested for GCK-MODY, confirming a glucokinase mutation that requires monitoring but not pharmacotherapy.',
        'Newborn screening MS/MS shows elevated C5-OH acylcarnitine; second-tier urine organic acids confirm 3-methylcrotonyl-CoA carboxylase deficiency, a typically benign condition.',
      ],
    },
    5: {
      level: 5,
      summary: 'Professional-level metabolic screening encompasses integrated multi-omics risk prediction, evolving CGM-based prediabetes paradigms, advanced lipoprotein particle biology, and the ethical-practical frontier of genomic newborn screening.',
      explanation: `## Frontier Topics in Metabolic Screening

### Diabetes Screening - Evolving Paradigms

#### CGM and Metabolomics in Diabetes Prediction
- **CGM as screening tool:** Identifies dysglycemia patterns before FPG/A1C criteria are met; no formal screening indication yet
- **BCAAs:** Elevated leucine, isoleucine, valine precede T2D by years
- **Multi-omics models:** Combining genomics, metabolomics, proteomics for T2D risk prediction

#### T1D Autoantibody Screening
- **TrialNet:** Screening relatives with GAD65, IA-2, ZnT8, IAA autoantibodies
- **Staging:** Stage 1 (2+ autoantibodies, normoglycemia) -> Stage 2 (dysglycemia) -> Stage 3 (clinical)
- **Teplizumab (Tzield):** FDA-approved to delay Stage 3 in Stage 2 patients

### Advanced Lipidology
- **Lp(a):** LPA gene KIV-2 CNV determines levels; emerging siRNA therapies (olpasiran, lepodisiran) reduce 80-98%
- **Remnant cholesterol:** Mendelian randomization supports causal ASCVD role; explains residual statin-treated risk
- **Residual inflammatory risk:** hsCRP >2 mg/L on statin; IL-6 pathway targeting (ziltivekimab/ZEUS trial)

### Thyroid Controversies
- **TRUST trial:** No levothyroxine benefit in elderly with mild TSH elevation; age-adjusted ranges evolving
- **Molecular FNA testing:** Afirma GSC, ThyroSeq v3 for indeterminate thyroid nodules
- **Papillary microcarcinoma:** Active surveillance increasingly accepted over surgery

### Newborn Screening - Genomic Frontier
- **WGS in newborns:** GUARDIAN study found actionable variants in ~3.5%; VUS burden and ethical challenges remain
- **RUSP expansion:** Pipeline includes DMD, Canavan; challenges in treatment availability and health equity
- **Global variation:** 3 to 50+ conditions screened; point-of-care microfluidic devices in development`,
      keyTerms: [
        { term: 'metabolomics', definition: 'Comprehensive analysis of small-molecule metabolites in biological specimens to characterize metabolic states and predict disease risk' },
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody FDA-approved to delay progression from Stage 2 to Stage 3 type 1 diabetes in at-risk individuals' },
        { term: 'remnant cholesterol', definition: 'Cholesterol content of triglyceride-rich lipoprotein remnants (VLDL, IDL, chylomicron remnants); causal ASCVD risk factor' },
        { term: 'genomic newborn screening', definition: 'Use of whole exome or genome sequencing as a newborn screening modality, complementing traditional biochemical assays' },
        { term: 'Afirma GSC', definition: 'Genomic sequencing classifier - a molecular test applied to thyroid FNA samples to reduce unnecessary surgeries for indeterminate cytology' },
      ],
      clinicalNotes: `**Professional Practice Points:**
- CGM-derived metrics are increasingly used in research but have no formal screening indication; A1C remains the standard
- Lp(a) should be measured once in all adults; novel therapies in late-phase trials may transform management
- Subclinical hypothyroidism treatment thresholds are shifting; avoid overtreatment in elderly patients
- Genomic newborn screening offers expanded detection but introduces VUS management and ethical complexity
- Multi-omics risk models for diabetes are promising but not yet validated for clinical screening deployment
- Health equity must be centered in newborn screening expansion - not all states have equivalent follow-up infrastructure`,
      examples: [
        'A health system implements universal Lp(a) screening and identifies 20% of patients with levels >50 mg/dL, referring them for intensified cardiovascular risk management while awaiting Lp(a)-lowering drug availability.',
        'A pediatric endocrinology center screens first-degree relatives of T1D patients through TrialNet; a 7-year-old with 3 positive autoantibodies and dysglycemia (Stage 2) is enrolled in teplizumab therapy to delay clinical onset.',
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-standards-of-care',
      type: 'article',
      title: 'Standards of Medical Care in Diabetes',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
      license: 'Copyright ADA',
    },
    {
      id: 'uspstf-prediabetes-screening',
      type: 'website',
      title: 'Screening for Prediabetes and Type 2 Diabetes',
      source: 'United States Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-prediabetes-and-type-2-diabetes',
      license: 'Public Domain',
    },
    {
      id: 'acc-aha-cholesterol-guideline',
      type: 'article',
      title: 'ACC/AHA Guideline on the Management of Blood Cholesterol',
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2018.11.003',
    },
    {
      id: 'acmg-newborn-screening',
      type: 'website',
      title: 'Newborn Screening ACT Sheets and Algorithms',
      source: 'American College of Medical Genetics and Genomics',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/ACT_Sheets_and_Algorithms.aspx',
    },
  ],
  crossReferences: [
    {
      targetId: 'screening-cancer-screening',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Cancer Screening',
    },
  ],
  tags: {
    systems: ['endocrine', 'cardiovascular', 'metabolic'],
    topics: ['screening', 'prevention', 'diabetes', 'lipids', 'thyroid', 'newborn-screening'],
    keywords: [
      'metabolic screening', 'A1C', 'fasting glucose', 'OGTT', 'lipid panel',
      'cholesterol', 'LDL', 'HDL', 'triglycerides', 'TSH', 'thyroid',
      'newborn screening', 'PKU', 'tandem mass spectrometry', 'Lp(a)',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'endocrinology'],
    },
  },

  createdAt: '2026-01-30T00:00:00Z',
  updatedAt: '2026-01-30T00:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['biological-self-team'],
};
