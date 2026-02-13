import { EducationalContent } from '../../types';

export const dmardsContent: EducationalContent = {
  id: 'topic-dmards',
  type: 'topic',
  name: 'Disease-Modifying Antirheumatic Drugs',
  alternateNames: ['DMARDs', 'Conventional DMARDs', 'csDMARDs', 'Antirheumatic drugs'],

  levels: {
    1: {
      level: 1,
      summary: 'DMARDs are medications that slow down or stop the progression of inflammatory arthritis conditions like rheumatoid arthritis, protecting your joints from permanent damage.',
      explanation: `DMARDs are a special group of medications used to treat conditions where the immune system attacks the joints. Unlike pain relievers that just treat symptoms, DMARDs actually slow down the disease process.

**Why DMARDs are important:**
- Pain relievers only mask symptoms
- DMARDs actually slow joint damage
- Early treatment prevents permanent disability
- They change the course of the disease

**Common DMARDs:**

1. **Methotrexate (MTX):**
   - Most commonly used
   - Taken once weekly
   - Works for most people
   - Requires folic acid supplement
   - Regular blood monitoring needed

2. **Hydroxychloroquine (Plaquenil):**
   - Often used with other DMARDs
   - Also used for lupus
   - Generally well tolerated
   - Requires eye exams

3. **Sulfasalazine:**
   - Used alone or in combination
   - Works well for some patients
   - Sulfa allergy is a concern

4. **Leflunomide:**
   - Alternative to methotrexate
   - Once daily pill
   - Similar monitoring needed

**Important things to know:**
- They take weeks to months to start working
- Often need to be combined for best results
- Regular blood tests are required
- Not safe during pregnancy (most)
- Reduce risk of heart disease from RA

**Side effects vary by drug but may include:**
- Stomach upset
- Liver effects (need monitoring)
- Increased infection risk
- Skin rashes

**The goal of treatment:**
To achieve "remission" or very low disease activity, preventing joint damage and maintaining your quality of life.`,
      keyTerms: [
        { term: 'DMARD', definition: 'Disease-modifying antirheumatic drug; medications that slow down joint disease', pronunciation: 'DEE-mard' },
        { term: 'methotrexate', definition: 'The most commonly used DMARD for rheumatoid arthritis' },
        { term: 'remission', definition: 'When disease is inactive with no signs of inflammation' },
        { term: 'disease-modifying', definition: 'Able to slow or stop the underlying disease, not just symptoms' },
      ],
      analogies: [
        'DMARDs are like putting out a fire, while pain relievers just cool down the burned area.',
        'Think of DMARDs as changing the course of a river, redirecting the disease away from your joints.',
      ],
      examples: [
        'A person with rheumatoid arthritis starts methotrexate and over several months notices less swelling and stiffness',
        'A patient takes hydroxychloroquine for lupus and has fewer flares',
        'Someone combines two DMARDs to get better control of their arthritis',
      ],
    },
    2: {
      level: 2,
      summary: 'Conventional synthetic DMARDs (csDMARDs) form the backbone of treatment for inflammatory arthritis, with methotrexate as the anchor drug, working through immunomodulatory mechanisms to reduce inflammation and prevent structural joint damage.',
      explanation: `Conventional DMARDs (csDMARDs) are the foundation of treatment for rheumatoid arthritis and other inflammatory conditions. They are called "conventional" or "synthetic" to distinguish them from biologic DMARDs.

**Classification:**
- Conventional synthetic DMARDs (csDMARDs)
- Biologic DMARDs (bDMARDs)
- Targeted synthetic DMARDs (tsDMARDs) - JAK inhibitors

**Methotrexate (MTX):**

*Mechanism:*
- Inhibits dihydrofolate reductase
- Decreases purine synthesis
- Anti-inflammatory effects
- Adenosine release

*Dosing:*
- Start 7.5-15 mg weekly
- Increase to 20-25 mg weekly
- Oral or subcutaneous
- Folic acid 1 mg daily (reduces side effects)

*Monitoring:*
- CBC, liver function, creatinine at baseline
- Every 4-8 weeks initially, then every 3 months
- Watch for hepatotoxicity, myelosuppression

*Contraindications:*
- Pregnancy (teratogenic - Cat X)
- Significant liver disease
- Significant renal impairment
- Active infection

**Hydroxychloroquine (HCQ):**

*Uses:*
- Mild RA (part of triple therapy)
- SLE (foundational drug)
- Sjogren's syndrome

*Mechanism:*
- Accumulates in lysosomes
- Interferes with antigen presentation
- Reduces cytokine production

*Dosing:*
- 200-400 mg daily
- Weight-based: <=5 mg/kg/day

*Toxicity:*
- Retinal toxicity (irreversible)
- Baseline eye exam, then annually after 5 years
- Risk increases with dose and duration

**Sulfasalazine:**

*Mechanism:*
- Anti-inflammatory (5-ASA component)
- Immunomodulatory

*Dosing:*
- Start 500 mg twice daily
- Increase to 1000 mg twice daily

*Monitoring:*
- CBC (neutropenia, hemolysis in G6PD deficiency)

**Leflunomide:**

*Mechanism:*
- Inhibits dihydroorotate dehydrogenase
- Blocks pyrimidine synthesis
- T and B cell suppression

*Dosing:*
- 10-20 mg daily
- Loading dose optional (100 mg x3 days)

*Concerns:*
- Hepatotoxicity
- Teratogenic (Cat X)
- Long half-life (cholestyramine washout for pregnancy)

**Triple Therapy:**
- Methotrexate + sulfasalazine + hydroxychloroquine
- Effective, less expensive than biologics
- Consider before biologics per guidelines

**Treatment Goals:**
- Treat-to-target strategy
- Goal: Remission or low disease activity
- Measure with DAS28, CDAI, SDAI
- Adjust therapy if not at target by 3-6 months`,
      keyTerms: [
        { term: 'conventional synthetic DMARD', definition: 'Traditional DMARDs like methotrexate, as opposed to biologics' },
        { term: 'treat-to-target', definition: 'Strategy of adjusting treatment to achieve specific disease activity goals' },
        { term: 'DAS28', definition: 'Disease Activity Score using 28 joint counts; measures RA activity' },
        { term: 'triple therapy', definition: 'Combination of methotrexate, sulfasalazine, and hydroxychloroquine' },
        { term: 'cholestyramine washout', definition: 'Protocol to rapidly eliminate leflunomide from body when needed (pregnancy, toxicity)' },
      ],
      analogies: [
        'Methotrexate is like the anchor of a boat - it\'s the foundation that other treatments are added to.',
        'Triple therapy is like a three-legged stool - each drug supports the others.',
      ],
    },
    3: {
      level: 3,
      summary: 'Conventional DMARDs act through diverse immunomodulatory mechanisms including folate antagonism, purine and pyrimidine synthesis inhibition, and lysosomal pH alteration, with methotrexate as the anchor drug in RA treatment algorithms, employed in treat-to-target strategies with defined monitoring protocols.',
      explanation: `**Detailed Pharmacology:**

1. **Methotrexate:**

   *Mechanisms of Action:*
   - Folate antagonism (high-dose effect)
   - Adenosine release (anti-inflammatory)
   - Inhibition of T cell activation
   - Reduced cytokine production (IL-1, TNF)
   - At RA doses, primarily anti-inflammatory

   *Pharmacokinetics:*
   - Oral bioavailability 70% (decreases at higher doses)
   - Subcutaneous: More reliable absorption >15 mg
   - Hepatic metabolism to 7-OH-MTX
   - Renal excretion (dose adjust if eGFR <30)
   - Weekly dosing due to intracellular accumulation

   *Toxicity Profiles:*

   | System | Effects | Management |
   |--------|---------|------------|
   | GI | Nausea, stomatitis | Folic acid, SC dosing |
   | Hepatic | Transaminitis, fibrosis | Monitor LFTs, limit alcohol |
   | Pulmonary | Pneumonitis (rare) | Stop MTX, steroids |
   | Hematologic | Pancytopenia | Monitor CBC, folic acid |
   | Infection | Increased risk | Monitoring, hold for infection |

   *Drug Interactions:*
   - NSAIDs: Reduced MTX clearance
   - TMP-SMX: Additive antifolate effects
   - PPIs: Possible reduced efficacy (debated)

2. **Hydroxychloroquine:**

   *Mechanisms:*
   - Lysosomal pH elevation
   - TLR7/9 inhibition
   - Reduced antigen presentation
   - Decreased cytokine production
   - Antithrombotic effects

   *Ocular Toxicity:*
   - Bull's eye maculopathy
   - Risk factors: Duration >5 years, dose >5 mg/kg, renal disease, tamoxifen
   - Screening: Baseline, then annually after 5 years or earlier if high risk
   - Tests: SD-OCT, visual fields (10-2)

   *Cardiovascular Benefits:*
   - Lipid lowering
   - Improved glucose metabolism
   - Antithrombotic
   - Mortality benefit in SLE

3. **Leflunomide:**

   *Mechanism:*
   - Inhibits DHODH (dihydroorotate dehydrogenase)
   - Blocks de novo pyrimidine synthesis
   - Affects activated lymphocytes preferentially

   *Unique Characteristics:*
   - Active metabolite: Teriflunomide
   - Extremely long half-life (2 weeks)
   - Enterohepatic circulation
   - Requires cholestyramine washout:
     - 8g TID for 11 days
     - Confirm levels <0.02 mcg/mL x2

4. **Sulfasalazine:**

   *Structure:*
   - 5-aminosalicylic acid + sulfapyridine
   - Cleaved by colonic bacteria
   - Both components may be active in RA

   *Special Populations:*
   - Can use in pregnancy (Category B)
   - Reversible male infertility (oligospermia)
   - G6PD deficiency: Risk of hemolysis

**Treatment Algorithms (ACR 2021):**

*Early RA (DMARD-naive):*
1. Start methotrexate monotherapy
2. If inadequate response at 3 months:
   - Add conventional DMARD (triple therapy) OR
   - Add biologic/tsDMARD
3. If still inadequate: Switch mechanism

*Established RA:*
- Similar algorithm with biologics often preferred
- Consider disease severity, comorbidities, preferences

*Treat-to-Target:*
- Goal: Remission (CDAI <=2.8) or low disease activity (CDAI <=10)
- Assess every 3-6 months
- Adjust if not at target
- Consider tapering in sustained remission

**Monitoring Recommendations:**

| Drug | Baseline | Monitoring |
|------|----------|------------|
| MTX | CBC, CMP, Hep B/C | CBC, CMP q4-8wk then q3mo |
| HCQ | Eye exam | Eye exam per guidelines |
| LEF | CBC, CMP | CBC, CMP q4-8wk then q3mo |
| SSZ | CBC, G6PD | CBC q2-4wk then q3mo |`,
      keyTerms: [
        { term: 'DHODH', definition: 'Dihydroorotate dehydrogenase; enzyme inhibited by leflunomide, required for pyrimidine synthesis' },
        { term: 'bull\'s eye maculopathy', definition: 'Retinal toxicity pattern from hydroxychloroquine with central pigmentary changes surrounded by depigmented ring' },
        { term: 'adenosine hypothesis', definition: 'Proposed mechanism of methotrexate anti-inflammatory effect via increased adenosine release' },
        { term: 'CDAI', definition: 'Clinical Disease Activity Index; simple measure of RA activity (28 joint counts + patient/physician global assessment)' },
        { term: 'enterohepatic circulation', definition: 'Drug cycling between liver and GI tract; contributes to leflunomide\'s long half-life' },
      ],
      clinicalNotes: 'Methotrexate subcutaneous may be more effective than oral at doses >15 mg due to improved absorption. Folic acid 1 mg daily reduces GI and mucosal side effects without reducing efficacy. HCQ dose should not exceed 5 mg/kg/day to minimize retinal toxicity risk. Leflunomide requires cholestyramine washout before pregnancy due to 2-week half-life.',
    },
    4: {
      level: 4,
      summary: 'Conventional DMARDs modulate immune responses through distinct molecular mechanisms including folate-dependent adenosine pathway activation (methotrexate), pyrimidine synthesis inhibition (leflunomide), and endosomal TLR signaling disruption (hydroxychloroquine), with pharmacogenomic factors influencing efficacy and toxicity.',
      explanation: `**Advanced Mechanisms:**

1. **Methotrexate Immunopharmacology:**

   *Adenosine-Mediated Effects:*
   - MTX polyglutamates accumulate intracellularly
   - Inhibit AICAR transformylase
   - Increased extracellular adenosine
   - Adenosine A2A receptor activation
   - Anti-inflammatory effects:
     - Reduced neutrophil adhesion
     - Decreased TNF, IL-6 production
     - Macrophage phenotype shift

   *NF-kappaB Inhibition:*
   - Indirect suppression via adenosine
   - Reduced inflammatory gene transcription
   - Decreased cytokine production

   *Effects on T Cells:*
   - Reduced proliferation
   - Increased apoptosis
   - Shift from Th17 to Treg

2. **Hydroxychloroquine Molecular Effects:**

   *Lysosomal Accumulation:*
   - Weak base, trapped in acidic lysosomes
   - pH elevation impairs:
     - Antigen processing
     - Autophagy
     - TLR signaling

   *TLR Inhibition:*
   - Blocks TLR7, TLR9 signaling
   - Reduced interferon-alpha production
   - Important in SLE pathogenesis

   *Anti-thrombotic Mechanisms:*
   - Reduced phospholipid binding
   - Platelet inhibition
   - May counteract aPL effects

3. **Leflunomide Biochemistry:**

   *DHODH Inhibition:*
   - Fourth step of de novo pyrimidine synthesis
   - Activated lymphocytes depend on de novo pathway
   - Resting cells use salvage pathway
   - Selective effect on proliferating cells

   *Additional Effects:*
   - Tyrosine kinase inhibition
   - NF-kappaB modulation
   - Not dependent on DHODH

**Pharmacogenomics:**

1. **Methotrexate:**

   *Transporters:*
   - RFC1 (reduced folate carrier): Cellular uptake
   - ABCB1/ABCC variants: Efflux
   - Polymorphisms affect response

   *Metabolism:*
   - MTHFR polymorphisms (C677T)
   - Associated with toxicity (debated)
   - May affect efficacy

   *Clinical Application:*
   - Not yet standard of care
   - Research ongoing
   - May guide dosing in future

2. **Sulfasalazine:**
   - NAT2 (N-acetyltransferase 2) polymorphisms
   - Slow acetylators: More side effects
   - Fast acetylators: Possibly reduced efficacy

3. **Azathioprine (Related):**
   - TPMT testing recommended
   - Prevents life-threatening toxicity
   - Established pharmacogenomic test

**Combination Strategies:**

*Triple Therapy vs. Biologic:*
- RACAT trial: Triple therapy non-inferior to ETN+MTX
- Cost-effective first step
- May delay biologic need

*Methotrexate Combinations:*
- MTX + SSZ + HCQ (triple therapy)
- MTX + LEF (potent but more hepatotoxicity)
- MTX + biologic (most common)

**Special Populations:**

1. **Pregnancy:**

   | Drug | Category | Management |
   |------|----------|------------|
   | MTX | X | Stop 3 months before, high-dose folate |
   | LEF | X | Cholestyramine washout, confirm levels |
   | HCQ | Safe | Continue, protects against flare |
   | SSZ | B | Safe, 2 mg folic acid |

2. **Renal Impairment:**
   - MTX: Reduce dose or avoid if eGFR <30
   - LEF: Caution, monitor closely
   - HCQ: Reduce dose, increases retinal risk
   - SSZ: Generally safe

3. **Hepatic Impairment:**
   - MTX: Avoid in significant liver disease
   - LEF: Caution, hepatotoxic potential
   - HCQ: Safe
   - SSZ: Monitor for hepatotoxicity

**Tapering and Discontinuation:**

*In Sustained Remission:*
- Consider tapering after 6-12 months of remission
- Taper biologics first (if on combination)
- May taper MTX by 2.5 mg every 1-2 months
- Many patients flare when medications stopped
- Some achieve drug-free remission

*Predictors of Successful Tapering:*
- ACPA negative
- Lower disease activity at diagnosis
- Shorter disease duration
- Seronegative RA
- Smoking cessation`,
      keyTerms: [
        { term: 'AICAR transformylase', definition: 'Enzyme inhibited by MTX polyglutamates; leads to adenosine accumulation' },
        { term: 'RFC1', definition: 'Reduced folate carrier 1; main transporter for methotrexate into cells' },
        { term: 'MTHFR', definition: 'Methylenetetrahydrofolate reductase; genetic polymorphisms may affect MTX response' },
        { term: 'NAT2', definition: 'N-acetyltransferase 2; metabolizes sulfasalazine; polymorphisms affect drug levels' },
        { term: 'RACAT', definition: 'Trial comparing triple therapy to etanercept+MTX; showed non-inferiority' },
      ],
      clinicalNotes: 'Methotrexate\'s anti-inflammatory effects are primarily via adenosine pathway, not antifolate effects at RA doses. Leflunomide selectively affects proliferating lymphocytes due to de novo pyrimidine dependence. HCQ has mortality benefit in SLE independent of disease activity. Consider triple therapy before biologics - it may be equally effective and more cost-effective.',
    },
    5: {
      level: 5,
      summary: 'Contemporary DMARD therapy integrates molecular mechanism understanding with pharmacogenomic stratification and treat-to-target algorithms, while emerging concepts of therapeutic drug monitoring, precision dosing, and optimal combination sequencing inform personalized treatment strategies aimed at achieving sustained drug-free remission.',
      explanation: `**Precision Medicine Applications:**

1. **Therapeutic Drug Monitoring (TDM):**

   *Methotrexate TDM:*
   - RBC MTX polyglutamate levels
   - Correlate with efficacy
   - May predict non-response
   - Research tool currently
   - Potential to guide dosing

   *Clinical Utility:*
   - Identify non-adherence
   - Predict response vs. switch
   - Optimize dose before adding biologic
   - Not yet standard practice

2. **Biomarker-Guided Therapy:**

   *Predictors of MTX Response:*
   - Genetic: ATIC, ITPA, MTHFR polymorphisms
   - Serologic: RF/ACPA status
   - Clinical: Disease duration, activity
   - Composite scores being developed

   *Multi-biomarker Disease Activity (MBDA):*
   - Vectra score
   - 12 serum biomarkers
   - Objective disease activity measure
   - May predict radiographic progression

3. **Optimal Sequencing:**

   *First-Line Strategy Debate:*
   - MTX monotherapy vs. combination
   - Triple therapy vs. biologic add-on
   - Guidelines favor MTX first

   *When to Escalate:*
   - ACR: If not at target by 3 months
   - EULAR: Consider earlier if poor prognostic factors
   - Shared decision-making important

   *Biologic vs. tsDMARD Selection:*
   - JAK inhibitors oral, convenient
   - Biosimilars reducing biologic costs
   - Comorbidities guide choice

4. **Emerging csDMARD Strategies:**

   *Subcutaneous Methotrexate:*
   - Better bioavailability >15 mg
   - MENTOR trial: SC superior to oral
   - Consider switching before failing MTX

   *Optimized Dosing:*
   - Higher doses (20-25 mg) more effective
   - Split dosing for GI tolerance
   - Parenteral route if oral ineffective

   *Combination Optimization:*
   - Sequence matters
   - MTX backbone essential
   - Add vs. switch strategies

5. **Drug-Free Remission:**

   *Definition:*
   - Sustained remission off all DMARDs
   - Achievable in ~10-15% of patients
   - More common in early, seronegative disease

   *Predictors:*
   - Seronegative (RF-/ACPA-)
   - Early aggressive treatment
   - Male sex
   - Non-smoker
   - Lower baseline activity

   *Tapering Strategies:*
   - BiORAJet trial: Biologic tapering feasible
   - ARCTIC trial: Early aggressive treatment increases remission
   - Gradual dose reduction preferred
   - Monitor closely for flare

6. **Special Considerations:**

   *Cardiovascular Risk:*
   - RA increases CV risk
   - MTX associated with lower CV events
   - Adenosine-mediated cardioprotection
   - HCQ: Lipid and glucose benefits

   *Malignancy Risk:*
   - MTX does not increase solid tumor risk
   - Possible lymphoma increase (confounded by disease)
   - HCQ possibly protective

   *Infection Risk:*
   - All DMARDs increase infection
   - MTX relatively modest increase
   - Vaccination important (live vaccines contraindicated)
   - Hold for serious infection

7. **Future Directions:**

   *Novel csDMARDs:*
   - Iguratimod (approved in Japan, China)
   - Apremilast (PDE4 inhibitor) for PsA
   - Combination tablet formulations

   *Pharmacogenomics Integration:*
   - Move toward preemptive testing
   - Panels for multiple variants
   - Decision support tools
   - Cost-effectiveness analysis needed

   *Digital Health:*
   - Remote disease monitoring
   - Patient-reported outcomes
   - Medication adherence tracking
   - AI-assisted treatment decisions

**Treatment Algorithms 2024:**

*DMARD-Naive RA:*
1. MTX (target 20-25 mg/wk SC if tolerated)
2. If not at target by 3 months: Add conventional or biologic/JAK
3. If triple therapy: MTX + SSZ + HCQ
4. If biologic: Usually TNFi, IL-6i, or JAKi with MTX
5. Adjust every 3 months until target achieved

*Established RA Failing csDMARDs:*
1. Optimize MTX dose and route
2. Add or switch to biologic/JAKi
3. If fails first biologic: Try different mechanism
4. Consider clinical trial

*De-escalation in Remission:*
1. Sustained remission >6 months
2. Taper biologic first (spacing, dose reduction)
3. If still remission: Consider csDMARD taper
4. Monitor closely, resume if flare`,
      keyTerms: [
        { term: 'MBDA', definition: 'Multi-biomarker disease activity; composite score (Vectra) using 12 serum proteins to measure RA activity' },
        { term: 'RBC MTX polyglutamates', definition: 'Intracellular methotrexate metabolites that can be measured to assess drug exposure and predict response' },
        { term: 'iguratimod', definition: 'Novel csDMARD approved in Asia; inhibits NF-kappaB activation and reduces antibody production' },
        { term: 'drug-free remission', definition: 'Sustained disease remission after discontinuation of all DMARDs; achievable goal in subset of patients' },
        { term: 'MENTOR trial', definition: 'Study demonstrating superiority of subcutaneous vs oral methotrexate for initial RA treatment' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- MTX is anchor drug - optimize before adding biologics
- Subcutaneous MTX more effective than oral at doses >15 mg
- Folic acid 1 mg daily reduces MTX toxicity without affecting efficacy
- HCQ max 5 mg/kg/day, eye exams per guidelines (baseline + annually after 5 years)
- Leflunomide needs cholestyramine washout before pregnancy (long half-life)
- Triple therapy (MTX+SSZ+HCQ) non-inferior to biologic add-on
- Treat-to-target: Aim for remission or low disease activity within 3-6 months
- Consider tapering after 6-12 months sustained remission
- MTX has CV protective effects in RA
- Hold MTX for serious infection, resume when resolved`,
    },
  },

  media: [
    {
      id: 'dmard-mechanism',
      type: 'diagram',
      filename: 'dmard-mechanisms.svg',
      title: 'DMARD Mechanisms of Action',
      description: 'Diagram showing molecular targets of conventional DMARDs',
    },
    {
      id: 'ra-treatment-algorithm',
      type: 'diagram',
      filename: 'ra-treatment-algorithm.svg',
      title: 'RA Treatment Algorithm',
      description: 'Flowchart for treat-to-target approach in rheumatoid arthritis',
    },
  ],
  citations: [
    {
      id: 'fraenkel-2021',
      type: 'article',
      title: '2021 ACR Guideline for the Treatment of Rheumatoid Arthritis',
      authors: ['Fraenkel L', 'Bathon JM', 'England BR', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.41752',
    },
    {
      id: 'cronstein-2020',
      type: 'article',
      title: 'Methotrexate and its mechanisms of action in inflammatory arthritis',
      authors: ['Cronstein BN', 'Aune TM'],
      source: 'Nature Reviews Rheumatology',
      url: 'https://doi.org/10.1038/s41584-020-0373-9',
    },
  ],
  crossReferences: [
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'topic-biologics', targetType: 'topic', relationship: 'sibling', label: 'Biologic Therapies' },
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
  ],
  tags: {
    systems: ['immune', 'musculoskeletal'],
    topics: ['rheumatology', 'pharmacology', 'therapeutics'],
    keywords: ['DMARD', 'methotrexate', 'hydroxychloroquine', 'leflunomide', 'sulfasalazine', 'rheumatoid arthritis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dmardsContent;
