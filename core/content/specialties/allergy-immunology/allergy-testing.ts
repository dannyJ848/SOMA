import { EducationalContent } from '../../types';

export const allergyTestingContent: EducationalContent = {
  id: 'allergy-immunology-allergy-testing',
  type: 'concept',
  name: 'Allergy Testing',
  alternateNames: ['Skin Testing', 'Specific IgE Testing', 'Allergy Diagnosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Allergy testing helps identify what substances trigger your allergic reactions, using either skin tests or blood tests to check for sensitivity to common allergens.',
      explanation: `Allergy testing helps your doctor figure out exactly what you're allergic to so you can avoid those triggers or get proper treatment.

**Types of Allergy Tests:**

**1. Skin Prick Test (Most Common):**
- Small drops of allergen solutions placed on your skin
- Skin gently pricked through the drops
- Wait 15-20 minutes for reactions
- Positive: Red, itchy bump appears
- Tests many allergens at once

**2. Blood Test (Specific IgE):**
- Blood sample taken from arm
- Tested in laboratory
- Measures antibodies to specific allergens
- Used when skin testing isn't possible
- Takes longer to get results

**3. Patch Test (For Contact Allergies):**
- Allergens applied on patches
- Worn on back for 48 hours
- Used for skin allergies (like nickel or latex)

**What Tests Can Detect:**
- Pollen (trees, grass, weeds)
- Dust mites
- Pet dander (cats, dogs)
- Mold
- Foods (peanuts, milk, eggs, etc.)
- Insect stings
- Medications

**Preparing for Testing:**
- Stop antihistamines for 3-7 days before skin tests
- Tell your doctor about all medications
- Blood tests don't require stopping medications

**Understanding Results:**
- Positive test = you're sensitized (have antibodies)
- Sensitization doesn't always mean clinical allergy
- Your doctor combines test results with your history
- Sometimes a challenge test is needed to confirm`,
      keyTerms: [
        { term: 'skin prick test', definition: 'Allergy test where small amounts of allergens are pricked into the skin' },
        { term: 'specific IgE', definition: 'Blood test measuring antibodies to specific allergens' },
        { term: 'sensitization', definition: 'Having antibodies to an allergen, even if you don\'t have symptoms' },
        { term: 'patch test', definition: 'Allergy test where allergens are applied on patches worn for 48 hours' },
      ],
      analogies: [
        'A positive skin test is like a fire alarm that can detect smoke - it shows your body can react, but doesn\'t mean there will be a fire (clinical symptoms).',
        'Testing for allergies is like a police lineup - you\'re checking if your immune system "recognizes" specific suspects.',
      ],
      examples: [
        'A child with spring sneezing gets skin prick testing that shows reactions to tree and grass pollen.',
        'Someone who can\'t stop antihistamines gets a blood test instead of skin testing to check for allergies.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergy diagnosis integrates clinical history with sensitization testing (skin prick tests, serum-specific IgE) and, when needed, provocation tests to establish clinical relevance of detected sensitivities.',
      explanation: `Allergy testing identifies IgE sensitization to allergens, which must be interpreted in clinical context to determine true allergic disease.

**Diagnostic Approach:**

**Step 1: Clinical History**
- Symptoms and timing
- Suspected triggers
- Prior reactions
- Family history

**Step 2: Sensitization Testing**
- Detects allergen-specific IgE
- Does not prove clinical allergy
- Requires correlation with history

**Step 3: Provocation Testing (if needed)**
- Controlled exposure to allergen
- Confirms or rules out clinical reactivity
- Gold standard for diagnosis

**Skin Testing:**

**Skin Prick Test (SPT):**
- Preferred initial method
- Introduces allergen into epidermis
- Mast cell degranulation if sensitized
- Result in 15-20 minutes
- Positive: Wheal ≥3mm larger than negative control

*Advantages:*
- Rapid results
- Tests multiple allergens
- High sensitivity
- Cost-effective

*Limitations:*
- Affected by antihistamines
- Dermographism can cause false positives
- Requires trained personnel
- Risk of systemic reaction (rare)

**Intradermal Testing:**
- Allergen injected into dermis
- More sensitive than SPT
- Used when SPT negative but suspicion high
- Higher false positive rate
- Used for drug, venom testing

**Serum-Specific IgE:**

**ImmunoCAP (Common Platform):**
- Measures sIgE to specific allergens
- Results in kU/L (semi-quantitative)
- Classes 0-6 (higher = more sensitized)

*Advantages:*
- Unaffected by medications
- Quantitative results
- Useful when skin testing not possible
- Component testing available

*Limitations:*
- Less sensitive than skin tests
- More expensive
- Delayed results (days)
- Can't test as many allergens

**Total IgE:**
- Measures all IgE in blood
- Elevated in atopy, parasites, other conditions
- Low specificity for allergy diagnosis
- Not recommended as screening test

**Component-Resolved Diagnostics (CRD):**
- Tests for IgE to individual allergen proteins
- Distinguishes true allergy from cross-reactivity
- Helps predict clinical reactivity
- Guides immunotherapy decisions

**Provocation Testing:**

**Oral Food Challenge:**
- Graded doses of food under supervision
- Gold standard for food allergy diagnosis
- Double-blind, placebo-controlled is research standard
- Required when test results and history discordant

**Nasal Provocation:**
- Allergen applied to nasal mucosa
- Measures symptoms and nasal patency
- Confirms clinical relevance of sensitization

**Bronchial Provocation:**
- Inhaled allergen
- Measures airway response (FEV1)
- Used for occupational asthma diagnosis

| Test | Sensitivity | Specificity | Use |
|------|-------------|-------------|-----|
| SPT | High | Moderate | Screening |
| sIgE | Moderate | Moderate | Alternative to SPT |
| Provocation | Gold standard | Gold standard | Confirmation |`,
      keyTerms: [
        { term: 'wheal', definition: 'Raised bump at skin test site indicating positive reaction' },
        { term: 'intradermal test', definition: 'Allergen injected into dermis; more sensitive than skin prick' },
        { term: 'ImmunoCAP', definition: 'Common platform for measuring serum-specific IgE levels' },
        { term: 'provocation test', definition: 'Controlled exposure to allergen to confirm clinical reactivity' },
        { term: 'component-resolved diagnostics', definition: 'Testing for IgE to individual allergen proteins rather than whole extracts' },
      ],
      analogies: [
        'Sensitization testing is like checking if your house has smoke detectors (IgE antibodies), while provocation testing is actually checking if they go off when there\'s smoke.',
        'CRD is like a detailed fingerprint analysis instead of just checking if any fingerprints are present.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergy diagnostics encompass skin prick testing, intradermal testing, serum-specific IgE measurement, component-resolved diagnostics, and provocation tests, with interpretation requiring understanding of test performance characteristics, cross-reactivity patterns, and clinical context.',
      explanation: `Accurate allergy diagnosis requires integration of multiple testing modalities with careful interpretation of positive and negative predictive values.

**In Vivo Testing:**

**Skin Prick Testing - Detailed:**

*Methodology:*
- Standardized allergen extracts
- Positive control: Histamine (10 mg/mL)
- Negative control: Saline/glycerin
- Lancet or multi-test device
- Read at 15-20 minutes

*Measurement:*
- Mean wheal diameter
- Positive: ≥3mm larger than negative control
- Also record flare

*Standardization Issues:*
- Extract potency varies
- No universal standard
- Some allergens unstable (fresh foods)

*Medications Affecting Results:*

| Medication | Withhold |
|------------|----------|
| First-gen antihistamines | 3-4 days |
| Second-gen antihistamines | 3-7 days |
| H2 blockers | 24-48 hours |
| TCAs | 7 days |
| Topical steroids (test site) | 7 days |
| Systemic steroids | Do not affect |
| Omalizumab | May suppress for months |

**Intradermal Testing:**

*When to Use:*
- SPT negative but clinical suspicion high
- Drug allergy evaluation
- Venom allergy evaluation
- More sensitive, less specific

*Technique:*
- 0.02-0.05 mL injected intradermally
- Creates 3mm initial wheal
- Read at 15-20 minutes
- Positive: ≥3mm increase from initial wheal

**In Vitro Testing:**

**Specific IgE (sIgE):**

*Platforms:*
- ImmunoCAP (Thermo Fisher)
- Immulite (Siemens)
- Others: Similar performance

*Reporting:*
- kU/L (quantitative)
- Class 0-6 (semi-quantitative)
- Detection limit: 0.1-0.35 kU/L

*Predictive Values:*
- Higher sIgE → higher probability of clinical allergy
- Cut-offs vary by allergen
- Example: Peanut >14 kU/L → 95% PPV for clinical allergy

**Component-Resolved Diagnostics:**

*Major Allergen Components:*

| Allergen | Major Component | Clinical Significance |
|----------|-----------------|----------------------|
| Peanut | Ara h 2 | Predicts clinical allergy |
| Peanut | Ara h 8 | Birch cross-reactivity only |
| Milk | Bos d 8 (casein) | Persistent allergy |
| Egg | Gal d 1 (ovomucoid) | Heat-stable, persistent |
| Birch | Bet v 1 | Primary sensitizer |
| Grass | Phl p 1, 5 | Genuine grass allergy |

*Cross-Reactive Proteins:*

| Protein Family | Found In | Clinical Pattern |
|----------------|----------|-----------------|
| PR-10 (Bet v 1-like) | Pollens, fruits | OAS, usually mild |
| Profilins | Widespread | Pan-allergen, mild |
| LTPs | Fruits, nuts | Can be severe |
| Storage proteins | Seeds, nuts | Usually severe |
| Tropomyosins | Shellfish, mites | Cross-reactive |

**Basophil Activation Test (BAT):**

*Principle:*
- Basophils incubated with allergen ex vivo
- Measure activation markers (CD63, CD203c) by flow cytometry
- Positive if significant upregulation

*Clinical Utility:*
- Drug allergy (when skin test limited)
- Food allergy (adjunct to SPT/sIgE)
- Research tool becoming clinical

**Provocation Testing - Detailed:**

**Oral Food Challenge (OFC):**

*Types:*
- Open: Both know food given
- Single-blind: Patient blinded
- DBPCFC: Gold standard (research)

*Protocol:*
- Graduated doses (e.g., 3mg, 10mg, 30mg, 100mg, 300mg, 1000mg protein)
- 15-30 minute intervals
- Stop at objective symptoms
- Observe 1-2 hours after final dose

*Safety:*
- Medical supervision required
- Epinephrine available
- Contraindicated if recent anaphylaxis

**Drug Provocation Test:**

*Indications:*
- Low pre-test probability of allergy
- Negative skin/in vitro tests
- Confirm tolerance to alternative drug

*Protocol:*
- Graded doses (typically 1/100, 1/10, full dose)
- Appropriate intervals
- Monitor for reaction

**Interpreting Discordant Results:**

*Positive test, no clinical symptoms:*
- Asymptomatic sensitization
- Cross-reactivity without clinical relevance
- Consider provocation test

*Negative test, clinical symptoms:*
- Non-IgE mechanism
- Insufficient sensitivity
- Wrong allergen tested
- Recent reaction depleted IgE`,
      keyTerms: [
        { term: 'positive predictive value', definition: 'Probability that a positive test correctly identifies true allergy' },
        { term: 'basophil activation test', definition: 'Ex vivo test measuring basophil CD63/CD203c after allergen exposure' },
        { term: 'DBPCFC', definition: 'Double-blind, placebo-controlled food challenge; gold standard for food allergy diagnosis' },
        { term: 'LTP', definition: 'Lipid transfer protein; heat-stable plant allergen associated with severe reactions' },
        { term: 'oral allergy syndrome', definition: 'Mild oral symptoms from raw fruits/vegetables due to pollen cross-reactivity' },
        { term: 'PR-10 proteins', definition: 'Pathogenesis-related proteins like Bet v 1; cross-reactive with many fruits' },
      ],
      clinicalNotes: 'Skin tests more sensitive than sIgE for most allergens. Total IgE has low specificity; don\'t use as screening. Component testing: Ara h 2 for peanut, Gal d 1 for egg, Phl p 1/5 for grass to identify true sensitization. BAT useful for drug allergy when skin testing limited. Withhold antihistamines before skin testing (varies by agent).',
    },
    4: {
      level: 4,
      summary: 'Allergy diagnostics integrate in vivo (skin prick, intradermal, provocation) and in vitro (specific IgE, component testing, basophil activation) modalities, with test selection guided by clinical scenario, and interpretation requiring understanding of assay performance, cross-reactivity patterns, and probability-based diagnostic reasoning.',
      explanation: `Comprehensive allergy evaluation requires strategic test selection and sophisticated interpretation integrating multiple data points.

**Test Performance Optimization:**

**Skin Prick Testing - Advanced:**

*Factors Affecting Performance:*

| Factor | Impact | Management |
|--------|--------|------------|
| Extract potency | Critical | Use standardized when available |
| Technique | Variable | Trained personnel |
| Device | Matters | Multi-test vs single lancet |
| Site | Minor | Avoid dermatographism areas |
| Age | Reduced in extremes | Consider sIgE in infants, elderly |
| Medications | Suppress | Withhold appropriately |

*Non-Standardized Allergens:*
- Fresh food extracts (prick-to-prick)
- Commercial extracts may lack labile proteins
- Used for fruits/vegetables, shellfish

*Quantitative Assessment:*
- Wheal size correlates with likelihood of clinical allergy
- Allergen-specific cut-offs exist
- Example: Peanut SPT ≥8mm → high PPV

**Component-Resolved Diagnostics - Integration:**

**Diagnostic Algorithms:**

*Peanut Allergy:*
1. SPT and/or sIgE to peanut
2. If positive → Component testing
3. Ara h 2 ≥0.35-1.0 kU/L → High probability clinical allergy
4. Ara h 8 only → Likely birch cross-reactivity, OAS
5. Consider OFC if low probability after components

*Egg Allergy:*
1. Gal d 1 (ovomucoid) positive → Likely persistent, can't tolerate baked
2. Gal d 2 (ovalbumin) only → May tolerate baked egg
3. Guides baked egg challenge decisions

*Grass Allergy:*
1. Phl p 1 and/or Phl p 5 positive → Genuine grass allergy
2. Phl p 12 only (profilin) → Cross-reactivity, unlikely to benefit from AIT

**Cross-Reactivity Patterns:**

*Clinical Syndromes:*

| Syndrome | Primary Sensitizer | Cross-Reactive |
|----------|-------------------|----------------|
| Birch-fruit | Bet v 1 (birch) | Apple, cherry, peach, carrot |
| Celery-mugwort-spice | Art v 1 (mugwort) | Celery, carrot, spices |
| Latex-fruit | Latex (Hev b) | Banana, avocado, kiwi |
| Shellfish-mite | Tropomyosin | Shrimp, dust mite |

**Basophil Activation Test:**

*Methodology:*
- Heparinized whole blood
- Allergen stimulation
- Flow cytometry: CD63, CD203c
- Stimulation index or % activated

*Performance:*
- Sensitivity: 50-90% (varies by allergen)
- Specificity: 80-100%
- Advantage: Functional test, not affected by antihistamines
- Limitation: Technical complexity, not widely available

*Best Applications:*
- Drug allergy (especially beta-lactams, NMBAs)
- Food allergy (adjunct, not first-line)
- Hymenoptera venom allergy
- Monitoring immunotherapy

**Provocation Testing - Practical:**

**Oral Food Challenge Protocols:**

*Low-Risk OFC:*
- Negative SPT/sIgE
- Remote history
- Tolerated food recently
- Can be open challenge

*Moderate-Risk OFC:*
- Positive sensitization but low clinical probability
- Atypical symptoms
- Testing tolerance after immunotherapy
- Single-blind or open

*High-Risk (Research):*
- Confirming allergy
- Evaluating threshold
- DBPCFC with validated recipes

**Drug Provocation:**

*Contraindications:*
- Recent severe reaction
- SCARs history (SJS/TEN, DRESS)
- Type II/III reactions
- Unstable patient

*Protocols by Drug Class:*

| Drug | Starting Dose | Increments | Interval |
|------|---------------|------------|----------|
| Beta-lactam | 1/100 dose | 1/10, full | 30 min |
| Fluoroquinolone | 1/10 dose | Full | 30-60 min |
| NSAID | 1/10 dose | 1/4, 1/2, full | 60 min |

**Diagnostic Reasoning:**

**Bayesian Approach:**
- Pre-test probability (history)
- Likelihood ratio (test result)
- Post-test probability

*Example:*
- Low pre-test probability (vague history, distant reaction)
- Negative skin test (high NPV)
- Very low post-test probability → Likely tolerant

**Decision Thresholds:**

| Post-Test Probability | Action |
|----------------------|--------|
| >95% | Diagnose allergy, no challenge needed |
| 50-95% | Consider challenge to confirm |
| 5-50% | Challenge recommended |
| <5% | Exclude allergy, reintroduce |

**Specialized Testing:**

**Tryptase:**
- Released by mast cells during anaphylaxis
- Peak: 1-2 hours post-reaction
- Elevated: >11.4 ng/mL or >20% rise + 2 over baseline
- Baseline level: Important for mast cell disorders

**Drug-Specific Approaches:**

*Penicillin:*
- Major determinant (PPL)
- Minor determinant mix
- Penicillin G
- Amoxicillin (if history)
- Skin testing + oral challenge protocol

*NSAID:*
- Skin testing not useful (not IgE-mediated usually)
- Oral provocation for cross-reactive vs single-NSAID
- COX-2 inhibitor challenge for cross-reactive type`,
      keyTerms: [
        { term: 'prick-to-prick testing', definition: 'Skin testing with fresh food by pricking food then skin; preserves labile allergens' },
        { term: 'stimulation index', definition: 'Ratio of CD63 expression with allergen vs without; used in BAT' },
        { term: 'likelihood ratio', definition: 'How much a test result changes the probability of disease' },
        { term: 'tryptase', definition: 'Mast cell protease; elevated during anaphylaxis, marker for mast cell disorders' },
        { term: 'major determinant', definition: 'Penicilloyl group; main epitope for penicillin allergy skin testing' },
        { term: 'minor determinant mix', definition: 'Penicillin breakdown products for skin testing; important for detecting some allergies' },
      ],
      clinicalNotes: 'Component testing refines diagnosis: Ara h 2 for peanut, Gal d 1 for egg persistence, genuine markers for AIT selection. Tryptase: Draw within 4 hours of reaction, compare to baseline. Penicillin testing: 95% NPV when complete reagents used. BAT emerging for difficult drug allergy cases. Negative tests don\'t exclude allergy if high clinical suspicion - consider provocation.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive allergy diagnostics integrate skin testing, serum-specific IgE, component-resolved diagnostics, functional assays (BAT), and provocation testing within a Bayesian framework, with test selection tailored to clinical scenario, and interpretation incorporating assay performance characteristics, molecular allergenology, and clinical probability to guide management decisions.',
      explanation: `Optimal allergy diagnosis requires strategic integration of multiple testing modalities with sophisticated interpretation using probability-based reasoning.

**Precision Diagnostics Framework:**

**Molecular Allergenology:**

*From Extracts to Components:*
- Traditional: Whole allergen extracts (mixture)
- Modern: Individual allergenic proteins
- Advantage: Distinguish primary vs cross-reactivity
- Enables personalized treatment decisions

*Component Categories:*

| Category | Example | Characteristics |
|----------|---------|-----------------|
| Species-specific | Ara h 2, Gal d 1 | Genuine sensitization |
| Cross-reactive (mild) | PR-10, profilins | OAS, usually safe |
| Cross-reactive (severe) | LTPs, storage proteins | Systemic reactions |
| Pan-allergens | Profilin, CCD | Polysensitization |

*Clinical Applications:*

| Scenario | CRD Approach |
|----------|--------------|
| Polysensitized patient | Identify primary sensitizers |
| Risk assessment | LTP+, storage protein+ = higher risk |
| AIT selection | Target genuine markers |
| Food challenge decision | Component pattern guides risk |

**Multiplex Platforms:**

*ISAC (Immuno Solid-phase Allergen Chip):*
- Tests 112 components simultaneously
- Microarray platform
- Semi-quantitative (ISU)
- Comprehensive sensitization profile

*Alex (Allergy Explorer):*
- 295+ allergens and components
- Extract + molecular
- Quantitative (kU/L)

*Advantages:*
- Comprehensive screening
- Detect unexpected sensitizations
- Identify cross-reactivity patterns

*Limitations:*
- May detect clinically irrelevant sensitization
- Cost
- Requires expert interpretation

**Functional Testing:**

**Basophil Activation Test - Deep Dive:**

*Clinical Validation:*

| Allergen | Sensitivity | Specificity | Best Use |
|----------|-------------|-------------|----------|
| Peanut | 77-98% | 96-100% | Adjunct to SPT/sIgE |
| Beta-lactam | 50% | >90% | When skin test negative |
| NMBA | 64% | 93% | Drug allergy evaluation |
| Venom | 85-100% | 83-100% | When skin test negative |

*Advanced Metrics:*
- CD-sens (allergen sensitivity): Correlates with clinical severity
- CD-max: Maximum activation
- May predict immunotherapy response

**Cellular Tests:**

*Lymphocyte Transformation Test (LTT):*
- For delayed drug reactions
- Measures T cell proliferation
- Best 4-8 weeks after reaction
- Variable sensitivity/specificity

*ELISpot:*
- Detects allergen-specific cytokine-producing T cells
- IFN-γ for Th1, IL-4/5 for Th2
- Research application

**Provocation Testing Excellence:**

**Challenge Design:**

*Dosing:*
- Start low enough to detect sensitives
- Cumulative dosing (not reset between doses)
- Allergen-specific protocols

*Example (Peanut DBPCFC):*
1. 3mg peanut protein (or placebo)
2. 10mg
3. 30mg
4. 100mg
5. 300mg
6. 1000mg
7. Total: ~1.5g protein (~10 peanuts)

*Objective vs Subjective Symptoms:*
- Objective: Urticaria, vomiting, stridor, hypotension
- Subjective: Oral itching, nausea, abdominal pain
- Challenge positive if objective or consistent subjective

**Threshold Determination:**

*Eliciting Dose (ED):*
- Population statistics
- ED05: 5% of allergic patients react
- Used for precautionary labeling decisions
- Individual thresholds vary widely

**Specialized Testing Algorithms:**

**Drug Allergy Workup:**

*Immediate Reactions:*
1. History → pre-test probability
2. Skin testing (SPT, IDT)
3. sIgE if available
4. BAT if skin tests negative/equivocal
5. Drug provocation if low probability

*Delayed Reactions (non-SCAR):*
1. Patch testing
2. Delayed IDT reading
3. LTT (selected centers)
4. Drug provocation if appropriate

*SCARs:*
- Skin testing contraindicated acutely
- Patch testing may be considered later
- LTT research use
- No provocation (contraindicated)

**Venom Allergy:**

*Testing:*
1. Skin prick testing (venom extracts)
2. Intradermal if SPT negative
3. sIgE to venoms
4. Component testing (rApi m 1, rVes v 5) if negative

*Selection for Immunotherapy:*
- Positive skin test or sIgE
- Systemic reaction history
- All positive venoms treated

**Emerging Technologies:**

*Novel Biomarkers:*
- Epitope-specific IgE (linear vs conformational)
- IgE:IgG4 ratio
- Mast cell activation markers (PGD2, cysteinyl leukotrienes)

*Point-of-Care Testing:*
- Lateral flow IgE devices
- Smartphone-linked diagnostics
- Home monitoring potential

*Artificial Intelligence:*
- Algorithm-based interpretation
- Integrating clinical and lab data
- Predicting challenge outcomes

**Quality and Safety:**

*Testing Quality:*
- Standardized extracts when available
- Calibrated equipment
- Trained personnel
- Regular competency assessment

*Challenge Safety:*
- Risk stratification
- Emergency preparedness
- Appropriate observation periods
- Patient education

*Documentation:*
- Standardized recording
- Negative control result
- Precise measurements
- Photograph when possible

**Case Integration:**

*Case: Suspected peanut allergy, multiple positive SPT*

*Evaluation:*
- SPT: Peanut, tree nuts, grass, birch all positive
- sIgE peanut: 5.5 kU/L
- Component testing:
  - Ara h 2: <0.1 kU/L
  - Ara h 8: 12 kU/L

*Interpretation:*
- Sensitization via birch (Bet v 1) cross-reactivity
- Ara h 8+ (PR-10) only
- Low risk for systemic peanut allergy
- May have OAS with raw peanut
- Consider oral challenge

*Management:*
- OFC to peanut (low risk based on components)
- If passed: Continue peanut in diet
- Tree nuts: Test components if clinically relevant`,
      keyTerms: [
        { term: 'ISAC', definition: 'Immuno Solid-phase Allergen Chip; multiplex component testing platform' },
        { term: 'CD-sens', definition: 'Measure of allergen sensitivity in BAT; correlates with clinical severity' },
        { term: 'eliciting dose', definition: 'Amount of allergen that triggers reaction in a defined percentage of allergic patients' },
        { term: 'epitope-specific IgE', definition: 'IgE binding to linear vs conformational epitopes; may predict tolerance development' },
        { term: 'CCD', definition: 'Cross-reactive carbohydrate determinant; causes false positive IgE tests' },
        { term: 'ISU', definition: 'ISAC Standardized Units; semi-quantitative units on ISAC platform' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- SPT more sensitive than sIgE for most allergens
- Withhold antihistamines: H1 3-7 days, H2 1-2 days, TCAs 7 days
- Tryptase: Draw within 4 hours; baseline important for mastocytosis
- Component testing: Ara h 2 (peanut), Gal d 1 (egg), genuine markers for AIT
- BAT: Useful for drug allergy when skin tests negative
- Food challenge: Gold standard, graded doses under supervision
- Penicillin testing: PPL + minor determinants + penicillin G + amoxicillin
- NSAID allergy: Usually non-IgE; use provocation not skin tests
- Total IgE: Not recommended for allergy screening (low specificity)
- Multiplex panels: Comprehensive but require expert interpretation
- Post-test probability guides need for provocation testing`,
    },
  },

  media: [
    {
      id: 'skin-testing-technique',
      type: 'diagram',
      filename: 'skin-prick-testing.svg',
      title: 'Skin Prick Testing Technique',
      description: 'Procedure and interpretation of skin prick tests',
    },
    {
      id: 'component-testing-flowchart',
      type: 'diagram',
      filename: 'component-diagnostics.svg',
      title: 'Component-Resolved Diagnostics Interpretation',
      description: 'Algorithm for interpreting component testing results',
    },
  ],
  citations: [
    {
      id: 'allergy-diagnostic-guidelines',
      type: 'article',
      title: 'Allergy diagnostic testing: an updated practice parameter',
      authors: ['Bernstein IL', 'Li JT', 'Bernstein DI'],
      source: 'Annals of Allergy, Asthma & Immunology',
    },
    {
      id: 'component-resolved-diagnostics',
      type: 'article',
      title: 'Molecular allergology and its impact on allergen-specific immunotherapy',
      authors: ['Matricardi PM', 'Kleine-Tebbe J', 'Hoffmann HJ'],
      source: 'Allergy',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-food-allergies', targetType: 'condition', relationship: 'see-also', label: 'Food Allergies' },
    { targetId: 'allergy-immunology-drug-allergies', targetType: 'condition', relationship: 'see-also', label: 'Drug Allergies' },
    { targetId: 'allergy-immunology-immunotherapy', targetType: 'concept', relationship: 'related', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['immunology', 'allergy', 'diagnostics'],
    keywords: ['skin testing', 'specific IgE', 'component testing', 'food challenge', 'allergy diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default allergyTestingContent;
