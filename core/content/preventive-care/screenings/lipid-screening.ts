/**
 * Lipid Screening
 *
 * Comprehensive education on cholesterol and lipid screening
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const LIPID_SCREENING: EducationalContent = {
  id: 'concept-lipid-screening',
  type: 'concept',
  name: 'Lipid Screening',
  alternateNames: ['Cholesterol screening', 'Lipid panel', 'Cholesterol test'],

  levels: {
    1: {
      level: 1,
      summary: 'A cholesterol test measures fats in your blood that can affect your heart health.',
      explanation: `Cholesterol is a waxy substance in your blood. Your body needs some cholesterol, but too much can build up in your arteries and cause heart problems.

**What the Test Measures:**
- **Total cholesterol**: All the cholesterol in your blood
- **LDL (bad cholesterol)**: Can build up in arteries
- **HDL (good cholesterol)**: Helps remove bad cholesterol
- **Triglycerides**: Another type of fat in blood

**Why Get Tested:**
- High cholesterol has no symptoms
- Find problems before a heart attack or stroke
- Know if you need to make changes

**When to Get Tested:**
- Adults should start at age 20
- Every 4-6 years if normal
- More often if you have risk factors

**What the Numbers Mean:**
| Type | Good | Borderline | High |
|------|------|------------|------|
| Total | <200 | 200-239 | 240+ |
| LDL | <100 | 100-159 | 160+ |
| HDL | 60+ | 40-59 | <40 |
| Triglycerides | <150 | 150-199 | 200+ |

**How to Improve Cholesterol:**
- Eat less saturated fat (fried foods, red meat)
- Eat more fiber (fruits, vegetables, whole grains)
- Exercise regularly
- Maintain healthy weight
- Take medication if prescribed`,
      keyTerms: [
        { term: 'cholesterol', definition: 'A waxy substance in your blood needed by your body but harmful in excess' },
        { term: 'LDL', definition: 'Low-density lipoprotein - the bad cholesterol that can clog arteries' },
        { term: 'HDL', definition: 'High-density lipoprotein - the good cholesterol that clears arteries' },
      ],
      analogies: [
        'LDL cholesterol is like trash that piles up in your pipes, while HDL is like a cleanup crew that takes the trash away.',
      ],
      examples: [
        'John found out his LDL was high at a routine checkup. By changing his diet and exercising, he lowered it without medication.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lipid screening measures cholesterol and triglyceride levels to assess cardiovascular disease risk and guide preventive interventions including lifestyle modification and statin therapy.',
      explanation: `A lipid panel measures blood fats that contribute to atherosclerosis (plaque buildup in arteries). Screening identifies individuals who may benefit from treatment to reduce heart attack and stroke risk.

**Standard Lipid Panel:**
- Total cholesterol
- LDL cholesterol (directly measured or calculated)
- HDL cholesterol
- Triglycerides
- Often includes: Non-HDL cholesterol, Total/HDL ratio

**Screening Recommendations (USPSTF):**

| Population | Start Age | Frequency |
|------------|-----------|-----------|
| Men (no risk factors) | 35 | Every 4-6 years |
| Women (no risk factors) | 45 | Every 4-6 years |
| Men with risk factors | 20 | Individualized |
| Women with risk factors | 20 | Individualized |

**Risk Factors for Early Screening:**
- Family history of early heart disease
- Smoking
- High blood pressure
- Diabetes
- Obesity

**Understanding Results:**

*LDL Cholesterol (mg/dL):*
- <70: Optimal for very high-risk
- <100: Optimal for most
- 100-129: Near optimal
- 130-159: Borderline high
- 160-189: High
- ≥190: Very high

*HDL Cholesterol (mg/dL):*
- ≥60: Protective
- 40-59: Normal
- <40: Low (risk factor)

*Triglycerides (mg/dL):*
- <150: Normal
- 150-199: Borderline
- 200-499: High
- ≥500: Very high (pancreatitis risk)

**Fasting vs Non-Fasting:**
- Non-fasting acceptable for screening
- Triglycerides higher after eating
- Fasting preferred if TG >400

**When Treatment is Recommended:**
1. Very high LDL (≥190 mg/dL): Statin indicated
2. Diabetes: Statin for most adults 40-75
3. High ASCVD risk (≥7.5%): Statin recommended
4. Intermediate risk: Discuss with doctor`,
      keyTerms: [
        { term: 'lipid panel', definition: 'Blood test measuring cholesterol and triglyceride levels' },
        { term: 'non-HDL cholesterol', definition: 'Total cholesterol minus HDL; represents all atherogenic particles' },
        { term: 'atherosclerosis', definition: 'Buildup of fatty deposits (plaques) inside artery walls' },
        { term: 'statin', definition: 'Medication that lowers LDL cholesterol by blocking its production in the liver' },
      ],
      analogies: [
        'Non-HDL cholesterol is like counting all the cars that could cause traffic jams, not just one type.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lipid screening interprets standard and advanced lipid markers within cardiovascular risk assessment frameworks, guiding intensity of lifestyle and pharmacologic interventions based on global risk rather than isolated lipid values.',
      explanation: `**Lipid Metabolism Overview:**

*Lipoproteins:*
- Chylomicrons: Transport dietary fat
- VLDL: Transports endogenous triglycerides
- IDL: Intermediate, metabolized to LDL
- LDL: Primary atherogenic particle
- HDL: Reverse cholesterol transport

*LDL-C Calculation (Friedewald):*
LDL = TC - HDL - (TG/5)
- Valid if TG <400 mg/dL
- Martin-Hopkins equation more accurate

**Advanced Lipid Testing:**

*ApoB:*
- Represents number of atherogenic particles
- 1 apoB per LDL, VLDL, IDL, Lp(a)
- Better predictor than LDL-C in some populations
- Goal: <90 mg/dL (high risk: <80)

*LDL Particle Number (LDL-P):*
- NMR-based measurement
- Concordant with LDL-C in most
- Useful when LDL-C and risk discordant

*Lipoprotein(a):*
- Genetically determined
- Independent risk factor
- Check once in lifetime
- ≥50 mg/dL = risk enhancer

**Dyslipidemia Patterns:**

*Familial Hypercholesterolemia (FH):*
- LDL-C ≥190 mg/dL
- Early CVD in individual or family
- Physical findings (tendon xanthomas, arcus)
- Autosomal dominant (LDLR, APOB, PCSK9 mutations)
- Cascade screening of relatives

*Hypertriglyceridemia:*
- Primary: Genetic causes
- Secondary: Obesity, diabetes, alcohol, medications
- TG >500: Risk of pancreatitis

*Low HDL:*
- Often with metabolic syndrome
- Lifestyle modification primary therapy
- No medications proven to reduce CVD

**Statin Guidelines (ACC/AHA 2018):**

*Four Statin Benefit Groups:*
1. Clinical ASCVD: High-intensity statin
2. LDL-C ≥190 mg/dL: High-intensity statin
3. Diabetes, 40-75: Moderate-intensity (high if risk factors)
4. 10-year risk ≥7.5%: Moderate-to-high intensity

*Statin Intensities:*
| Intensity | LDL Reduction | Examples |
|-----------|---------------|----------|
| High | ≥50% | Atorvastatin 40-80, Rosuvastatin 20-40 |
| Moderate | 30-49% | Atorvastatin 10-20, Simvastatin 20-40 |
| Low | <30% | Simvastatin 10, Pravastatin 10-20 |

**Non-Statin Therapies:**

*Ezetimibe:*
- Blocks intestinal cholesterol absorption
- ~20% additional LDL reduction
- IMPROVE-IT: Benefit in ACS patients

*PCSK9 Inhibitors:*
- Evolocumab, Alirocumab
- 50-60% LDL reduction
- For very high-risk not at goal

*Bempedoic Acid:*
- ACL inhibitor
- Alternative for statin intolerance
- CLEAR Outcomes: CV benefit

**Monitoring:**
- Fasting lipids 4-12 weeks after starting therapy
- LDL-C response guides adherence assessment
- Annual lipids once stable`,
      keyTerms: [
        { term: 'apolipoprotein B (ApoB)', definition: 'Protein present on each atherogenic lipoprotein particle; better measure of particle number than LDL-C' },
        { term: 'familial hypercholesterolemia', definition: 'Genetic disorder causing very high LDL-C and early cardiovascular disease' },
        { term: 'Friedewald equation', definition: 'Formula to calculate LDL-C: TC - HDL - TG/5 (valid when TG <400)' },
        { term: 'PCSK9', definition: 'Proprotein convertase subtilisin/kexin type 9; enzyme that degrades LDL receptors' },
      ],
      clinicalNotes: 'Calculate ASCVD risk before treatment decisions. Consider ApoB or LDL-P when LDL-C seems discordant with risk. Screen family members when FH suspected. Add ezetimibe if statin alone insufficient.',
    },
    4: {
      level: 4,
      summary: 'Advanced lipid management integrates atherogenic particle assessment (ApoB, LDL-P), genetic testing for familial dyslipidemias, and emerging therapies (inclisiran, bempedoic acid) within precision medicine frameworks targeting residual cardiovascular risk.',
      explanation: `**Atherogenic Lipoprotein Biology:**

*LDL Heterogeneity:*
- Small dense LDL: More atherogenic
- Phenotype B: Predominance of small LDL
- Associated with metabolic syndrome, diabetes
- ApoB captures particle number regardless of size

*LDL-C vs LDL-P Discordance:*
- LDL-C measures cholesterol content
- LDL-P measures particle number
- Discordant in 20-30% of patients
- When discordant, LDL-P better predicts risk

*ApoB Advantages:*
- Single measurement captures all atherogenic particles
- Direct measurement (no calculation)
- Less affected by triglycerides
- European guidelines emphasize ApoB

**Genetic Dyslipidemias:**

*Familial Hypercholesterolemia:*
- Prevalence: 1/250 (heterozygous)
- Genes: LDLR (most common), APOB, PCSK9, LDLRAP1
- Dutch Lipid Clinic Network Score for diagnosis
- Genetic testing confirms diagnosis

*FH Treatment:*
- Early, aggressive statin therapy
- Often require combination therapy
- PCSK9 inhibitors frequently needed
- Homozygous FH: Lomitapide, evinacumab

*Familial Combined Hyperlipidemia:*
- Elevated LDL + TG
- ApoB elevation
- Variable phenotype

*Familial Hypertriglyceridemia:*
- Severe: TG >500-1000 (chylomicronemia syndrome)
- Risk of pancreatitis
- Genes: LPL, APOC2, APOA5

**PCSK9 Inhibitors Deep Dive:**

*Mechanism:*
- PCSK9 promotes LDL receptor degradation
- Inhibition increases LDL receptors
- Dramatic LDL lowering (50-60%)

*Clinical Trials:*
- FOURIER (evolocumab): 15% CV event reduction
- ODYSSEY (alirocumab): 15% reduction, mortality benefit in post-hoc

*Indications:*
- ASCVD not at goal on maximally tolerated statin
- FH not at goal
- Statin intolerance with high risk

*Cost/Access:*
- High cost limits use
- Prior authorization barriers
- Biosimilars emerging

**Emerging Therapies:**

*Inclisiran:*
- siRNA targeting PCSK9
- Twice yearly dosing
- 50% LDL reduction
- ORION trials ongoing for outcomes

*Bempedoic Acid:*
- ACL inhibitor (upstream of statins)
- Does not cause myopathy (not active in muscle)
- CLEAR Outcomes: 13% CV event reduction

*Evinacumab:*
- Anti-ANGPTL3 antibody
- For homozygous FH
- LDL-independent mechanism

*Lp(a)-Lowering (Future):*
- Pelacarsen (antisense)
- Olpasiran (siRNA)
- 80-95% Lp(a) reduction
- Outcome trials ongoing

**Residual Risk Assessment:**

*After LDL Goal Achieved:*
- Check triglycerides
- Assess ApoB
- Check Lp(a) (once)
- Consider hsCRP

*Triglyceride Management:*
- Lifestyle first
- Fibrates for severe elevation
- Icosapent ethyl if TG elevated on statin (REDUCE-IT)

**Statin Intolerance:**

*True vs Perceived:*
- Nocebo effect common
- True myopathy: 0.1-0.2%
- Rechallenge often successful

*Management:*
- Confirm with rechallenge
- Try alternative statin
- Consider lower dose + ezetimibe
- Bempedoic acid
- PCSK9 inhibitor if high risk`,
      keyTerms: [
        { term: 'inclisiran', definition: 'siRNA therapeutic targeting PCSK9 mRNA, providing sustained LDL lowering with twice-yearly dosing' },
        { term: 'LDL-P', definition: 'LDL particle number measured by NMR spectroscopy; captures atherogenic particle burden' },
        { term: 'ANGPTL3', definition: 'Angiopoietin-like 3; inhibition lowers lipids through LDL receptor-independent mechanisms' },
        { term: 'Dutch Lipid Clinic Network Score', definition: 'Clinical scoring system for diagnosing familial hypercholesterolemia' },
      ],
      clinicalNotes: 'Consider ApoB in metabolic syndrome or diabetes when LDL-C may underestimate risk. Genetic testing confirms FH and enables cascade screening. Use inclisiran for adherence challenges. Address statin concerns with evidence-based counseling.',
    },
    5: {
      level: 5,
      summary: 'Precision lipidology integrates advanced particle analytics, genetic risk stratification, targeted RNA therapeutics, and gene editing approaches while addressing implementation science challenges in translating lipid-lowering evidence to population-level cardiovascular mortality reduction.',
      explanation: `**Precision Lipid Assessment:**

*Advanced NMR Lipoprotein Analysis:*
- LDL particle number and size
- HDL particle number and size
- VLDL particle analysis
- Insulin resistance score (LP-IR)
- GlycA (inflammatory glycoproteins)

*Ion Mobility Analysis:*
- Higher resolution particle sizing
- Research applications

*Clinical Utility:*
- Discordance situations
- Residual risk assessment
- Response to therapy
- Not routinely needed for most patients

**Genetic Architecture of Lipid Traits:**

*Mendelian Randomization Studies:*
- LDL-C causally related to CVD
- Lp(a) causally related to CVD
- HDL-C not causal (interventions failed)
- Triglycerides: Complex, likely causal

*Polygenic Risk Scores:*
- Lipid trait PRS available
- CAD PRS incorporates lipid genetics
- May identify early intervention candidates
- Implementation challenges

**Gene Therapy and Editing:**

*AAV-Based Gene Therapy:*
- LDLR gene replacement for homozygous FH
- Durability questions
- Immune responses

*Base Editing:*
- PCSK9 permanent inactivation
- VERVE-101 clinical trial
- Single infusion, lifetime LDL lowering
- Ethical considerations (germline vs somatic)

*CRISPR Applications:*
- ANGPTL3 knockout
- Research phase

**Triglyceride Biology:**

*Triglyceride-Rich Lipoproteins (TRL):*
- Remnant lipoproteins atherogenic
- VLDL cholesterol predicts risk
- Non-HDL captures TRL cholesterol

*Severe Hypertriglyceridemia:*
- Familial chylomicronemia syndrome (FCS)
- Multifactorial chylomicronemia
- Volanesorsen (APOC3 antisense) for FCS
- Plasmapheresis for acute pancreatitis

**Lp(a) Deep Dive:**

*Biology:*
- LDL particle + apo(a)
- Genetically determined (little lifestyle effect)
- Pro-thrombotic and pro-inflammatory

*Measurement:*
- Mass (mg/dL) or concentration (nmol/L)
- Isoform variability complicates assays
- Standardization ongoing

*Therapy Pipeline:*
| Agent | Mechanism | Reduction | Phase |
|-------|-----------|-----------|-------|
| Pelacarsen | ASO | ~80% | 3 |
| Olpasiran | siRNA | ~95% | 3 |
| SLN360 | siRNA | ~95% | 2 |

**Health Systems Approach:**

*Implementation Gaps:*
- Only 50% of ASCVD patients on high-intensity statin
- Significant disparities by race, SES
- Adherence drops over time

*Interventions:*
- Electronic prescribing of guidelines-based therapy
- Team-based care (pharmacists, nurses)
- Patient assistance programs
- Simplified regimens

**Cost-Effectiveness:**

*Generic Statins:* Highly cost-effective
*PCSK9 Inhibitors:* Improved with price reductions
*Inclisiran:* Dependent on adherence value
*Lp(a) Lowering:* To be determined

**Quality Metrics:**

*Process:*
- Lipid screening rate
- Statin prescribing for ASCVD
- High-intensity statin for ASCVD
- LDL-C <70 for ASCVD

*Outcomes:*
- Population LDL-C distribution
- ASCVD event rates
- Disparities monitoring

**Research Frontiers:**

1. Gene therapy for FH
2. Lp(a) outcomes trials
3. Remnant cholesterol targeting
4. HDL functional assays
5. Microbiome and lipids
6. Inflammation as co-target`,
      keyTerms: [
        { term: 'base editing', definition: 'CRISPR-derived technique for precise single nucleotide changes without double-strand breaks' },
        { term: 'VERVE-101', definition: 'Base editing therapy targeting PCSK9 for permanent LDL lowering' },
        { term: 'remnant cholesterol', definition: 'Cholesterol content of triglyceride-rich lipoprotein remnants; atherogenic' },
        { term: 'volanesorsen', definition: 'Antisense oligonucleotide targeting APOC3 for familial chylomicronemia syndrome' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Calculate ASCVD risk before lipid treatment decisions
- LDL-C remains primary target for most patients
- Consider ApoB in metabolic syndrome, diabetes
- Check Lp(a) once, especially with FH or family history
- FH: Genetic testing enables cascade screening
- Address adherence proactively
- Use team-based care for complex cases
- Track quality metrics: statin prescribing, LDL-C at goal
- Stay current: Inclisiran, Lp(a) therapies, gene editing`,
    },
  },

  media: [
    {
      id: 'lipid-metabolism',
      type: 'diagram',
      filename: 'lipid-metabolism-pathway.svg',
      title: 'Lipid Metabolism Pathway',
      description: 'Diagram showing lipoprotein metabolism and drug targets',
    },
  ],

  citations: [
    {
      id: 'acc-aha-lipids-2018',
      type: 'article',
      title: '2018 AHA/ACC Guideline on the Management of Blood Cholesterol',
      authors: ['Grundy SM', 'et al.'],
      source: 'Circulation',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'parent', label: 'Cardiovascular Screening' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['preventive medicine', 'cardiology', 'screening'],
    keywords: ['cholesterol', 'LDL', 'HDL', 'lipid panel', 'statin', 'triglycerides'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
