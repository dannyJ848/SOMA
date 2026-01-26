import { EducationalContent } from '../../types';

export const foodAllergiesContent: EducationalContent = {
  id: 'allergy-immunology-food-allergies',
  type: 'condition',
  name: 'Food Allergies',
  alternateNames: ['Food Hypersensitivity', 'IgE-Mediated Food Allergy', 'Food Allergy'],

  levels: {
    1: {
      level: 1,
      summary: 'Food allergies occur when your immune system mistakenly attacks proteins in certain foods, causing symptoms ranging from hives to life-threatening anaphylaxis.',
      explanation: `A food allergy is when your immune system treats a harmless food protein as if it were dangerous. This is different from food intolerance (like lactose intolerance), which doesn't involve the immune system.

**Common Food Allergens (Top 9):**
1. **Peanuts** - Most common cause of fatal food reactions
2. **Tree nuts** - Almonds, cashews, walnuts, etc.
3. **Milk** - Common in young children, often outgrown
4. **Eggs** - Common in children, often outgrown
5. **Wheat** - Different from celiac disease
6. **Soy** - Usually mild, often outgrown
7. **Fish** - Usually lifelong
8. **Shellfish** - Shrimp, crab, lobster; usually lifelong
9. **Sesame** - Recently added to major allergen list

**What Happens During a Reaction:**

1. **First Exposure**: Your body makes IgE antibodies to the food protein
2. **Later Exposures**: IgE triggers mast cells to release histamine
3. **Symptoms appear** within minutes to 2 hours

**Symptoms Can Include:**
- **Mild**: Itchy mouth, hives, stomach upset
- **Moderate**: Widespread hives, swelling, vomiting, wheezing
- **Severe (Anaphylaxis)**: Trouble breathing, throat swelling, drop in blood pressure, dizziness

**Food Allergy vs Food Intolerance:**

| Food Allergy | Food Intolerance |
|--------------|------------------|
| Immune system involved | No immune reaction |
| Can be life-threatening | Uncomfortable but not dangerous |
| Small amounts trigger reaction | Symptoms depend on amount eaten |
| Example: Peanut allergy | Example: Lactose intolerance |

**Prevention and Treatment:**
- Strict avoidance of allergen
- Read all food labels carefully
- Always carry epinephrine (EpiPen) if prescribed
- Wear medical alert bracelet
- Ask about ingredients when eating out`,
      keyTerms: [
        { term: 'food allergy', definition: 'An immune system reaction to a food protein' },
        { term: 'allergen', definition: 'A substance that triggers an allergic reaction' },
        { term: 'cross-contamination', definition: 'When a safe food touches an allergen and becomes unsafe' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction' },
      ],
      analogies: [
        'Your immune system is like an overprotective security guard that mistakes a harmless visitor (peanut protein) for a dangerous intruder.',
        'Cross-contamination is like getting glitter on everything - even a tiny bit of the allergen can spread to "safe" foods.',
      ],
      examples: [
        'A child with a milk allergy has hives and vomiting after eating birthday cake made with milk.',
        'Someone with a peanut allergy has throat swelling after eating a cookie that was made on shared equipment with peanut cookies.',
      ],
    },
    2: {
      level: 2,
      summary: 'Food allergies are IgE-mediated hypersensitivity reactions to food proteins, affecting 4-8% of children and 2-4% of adults, presenting with symptoms ranging from oral allergy syndrome to anaphylaxis, diagnosed through history, skin testing, and specific IgE measurement.',
      explanation: `Food allergies represent IgE-mediated immune responses to dietary proteins, distinct from non-immune-mediated food intolerances and mixed IgE/non-IgE disorders.

**Classification of Adverse Food Reactions:**

**IgE-Mediated (True Food Allergy):**
- Classic immediate hypersensitivity
- Onset: Minutes to 2 hours
- Examples: Peanut, tree nut, milk, egg, shellfish reactions

**Mixed IgE and Cell-Mediated:**
- Eosinophilic gastrointestinal disorders
- Atopic dermatitis (food-triggered)
- Delayed + immediate symptoms

**Non-IgE Immune-Mediated:**
- Food protein-induced enterocolitis (FPIES)
- Food protein-induced proctocolitis
- Celiac disease

**Non-Immune (Intolerance):**
- Lactose intolerance (enzyme deficiency)
- Histamine intolerance
- Pharmacologic reactions (caffeine)
- Toxic reactions (scombroid)

**Epidemiology:**

| Allergen | Children | Adults | Natural History |
|----------|----------|--------|-----------------|
| Milk | 2.5% | 0.3% | 80% outgrow by age 16 |
| Egg | 1.5% | 0.2% | 68% outgrow by age 16 |
| Peanut | 2% | 1.8% | ~20% outgrow |
| Tree nuts | 1% | 0.5% | ~10% outgrow |
| Wheat | 0.5% | 0.1% | Most outgrow |
| Soy | 0.4% | 0.1% | Most outgrow |
| Fish | 0.1% | 0.4% | Usually lifelong |
| Shellfish | 0.1% | 2% | Usually lifelong |

**Clinical Presentations:**

**Oral Allergy Syndrome (OAS):**
- Cross-reactivity between pollen and raw fruits/vegetables
- Symptoms: Oral/pharyngeal itching, mild swelling
- Usually mild, rarely progresses to systemic reaction
- Example: Birch pollen allergy → apple, cherry, peach

**Cutaneous Symptoms:**
- Urticaria (hives): Most common symptom
- Angioedema: Deep tissue swelling
- Atopic dermatitis flare

**Gastrointestinal Symptoms:**
- Nausea, vomiting, cramping, diarrhea
- Oral pruritus

**Respiratory Symptoms:**
- Rhinitis, sneezing
- Bronchospasm, wheezing
- Laryngeal edema (serious)

**Cardiovascular:**
- Hypotension, tachycardia
- Part of anaphylaxis

**Diagnosis:**

**History:**
- Timing: Symptoms within 2 hours of ingestion
- Reproducibility with specific food
- Severity and progression of symptoms

**Skin Prick Testing:**
- Introduces allergen into epidermis
- Positive: Wheal ≥3mm larger than negative control
- High negative predictive value
- Positive test doesn't always mean clinical allergy

**Serum Specific IgE (sIgE):**
- Quantitative measurement
- Useful when skin testing not possible
- Predictive values for clinical reactivity established for some foods

**Oral Food Challenge (OFC):**
- Gold standard for diagnosis
- Graduated doses under medical supervision
- Open, single-blind, or double-blind placebo-controlled
- Confirms or rules out clinical allergy

**Component-Resolved Diagnostics:**
- Tests for IgE to specific allergen proteins
- Helps distinguish true allergy from cross-reactivity
- Example: Ara h 2 (peanut) - high clinical significance`,
      keyTerms: [
        { term: 'oral allergy syndrome', definition: 'Mild allergic symptoms limited to mouth and throat caused by cross-reactive proteins in raw fruits/vegetables' },
        { term: 'oral food challenge', definition: 'Gold standard diagnostic test involving supervised ingestion of gradually increasing amounts of suspect food' },
        { term: 'specific IgE', definition: 'Blood test measuring allergen-specific IgE antibodies', pronunciation: 'sIgE' },
        { term: 'FPIES', definition: 'Food protein-induced enterocolitis syndrome; non-IgE-mediated food allergy causing delayed vomiting', pronunciation: 'F-pies' },
        { term: 'component-resolved diagnostics', definition: 'Testing for IgE to individual allergen protein components rather than whole extracts' },
      ],
      analogies: [
        'Skin prick testing is like checking if the fire alarm responds to smoke - a positive reaction shows the body can respond, but doesn\'t prove there will be a fire (clinical reaction).',
        'Oral food challenge is like a controlled test drive - the only way to know for sure if the car (immune system) will crash with that specific fuel (food).',
      ],
    },
    3: {
      level: 3,
      summary: 'Food allergies result from failure of oral tolerance with IgE sensitization to food proteins, diagnosed through clinical history, sensitization testing (SPT, sIgE), and oral food challenge, with management including allergen avoidance, emergency preparedness, and emerging therapies such as oral immunotherapy.',
      explanation: `Food allergy pathogenesis involves complex interactions between genetic predisposition, immune dysregulation, and environmental factors that disrupt normal oral tolerance mechanisms.

**Pathogenesis:**

**Normal Oral Tolerance:**
- Gut-associated lymphoid tissue (GALT) promotes tolerance
- Regulatory T cells induced by food antigens
- TGF-β-rich environment
- Tolerogenic dendritic cells

**Oral Tolerance Failure:**
- Genetic factors: Filaggrin mutations, IL-4, IL-13 polymorphisms
- Barrier dysfunction: Epithelial permeability
- Microbiome alterations: Reduced diversity, loss of protective bacteria
- Vitamin D deficiency: Impaired Treg function
- Epicutaneous sensitization: Sensitization through damaged skin

**Dual Allergen Exposure Hypothesis:**
- Oral exposure promotes tolerance
- Cutaneous exposure through eczematous skin promotes sensitization
- Explains atopic dermatitis as risk factor for food allergy
- Basis for early introduction recommendations

**Key Allergen Proteins:**

**Peanut (Arachis hypogaea):**
- Ara h 1: Vicilin, heat-stable
- Ara h 2: 2S albumin, heat-stable, highest clinical significance
- Ara h 3: Legumin, heat-stable
- Ara h 8: PR-10 protein, cross-reactive with birch, heat-labile
- Ara h 9: LTP, heat-stable, associated with severe reactions

**Milk:**
- Casein (Bos d 8): Heat-stable, persistent allergy
- β-lactoglobulin (Bos d 5): Heat-labile
- α-lactalbumin (Bos d 4): Heat-labile
- Sensitization to casein: Less likely to outgrow

**Egg:**
- Ovomucoid (Gal d 1): Heat-stable, persistent allergy
- Ovalbumin (Gal d 2): Heat-labile
- Patients reactive to ovomucoid less likely to tolerate baked egg

**Cross-Reactivity Patterns:**

| Primary Allergen | Cross-Reactive Foods |
|-----------------|---------------------|
| Birch pollen | Apple, cherry, peach, carrot, hazelnut |
| Latex | Banana, avocado, kiwi, chestnut |
| Shrimp | Crab, lobster, crayfish |
| Peanut (Ara h 8) | Other legumes (clinically often tolerate) |
| Fish | Other fish species (50-70% cross-react) |

**Diagnosis - Advanced:**

**Component-Resolved Diagnostics (CRD):**

*Clinical Utility:*
- Distinguish primary allergy from cross-reactivity
- Predict clinical reactivity and severity
- Guide oral food challenge decisions

*Peanut Example:*
- Ara h 2 positive: High risk of clinical reaction
- Ara h 8 only: Likely only oral symptoms (birch cross-reactivity)
- Helps decide if OFC needed

**Basophil Activation Test (BAT):**
- Measures CD63/CD203c expression on basophils after allergen stimulation
- May improve specificity
- Research tool becoming more available

**Oral Food Challenge Protocols:**

*Types:*
- Open: Patient and physician know food given
- Single-blind: Patient blinded
- Double-blind placebo-controlled (DBPCFC): Gold standard for research

*Dosing:*
- Graduated doses (e.g., 1mg, 3mg, 10mg, 30mg, 100mg, 300mg, 1000mg protein)
- 15-30 minutes between doses
- Stop if objective symptoms occur

**Management:**

**Allergen Avoidance:**
- Read all food labels (FALCPA in US requires top 9 allergen labeling)
- Advisory labeling ("may contain") - voluntary
- Restaurant precautions
- Cross-contact prevention

**Emergency Preparedness:**
- Epinephrine auto-injectors (2 devices)
- Anaphylaxis action plan
- Medical alert identification
- Training for patient, family, school

**Emerging Therapies:**

**Oral Immunotherapy (OIT):**
- Daily ingestion of gradually increasing allergen doses
- Raises threshold for reaction (desensitization)
- Requires ongoing dosing to maintain
- Palforzia (peanut) FDA-approved
- Risk: Reactions during treatment, eosinophilic esophagitis

**Sublingual Immunotherapy (SLIT):**
- Allergen held under tongue
- Lower doses than OIT
- Fewer systemic reactions but less efficacy
- Peanut and milk in trials

**Epicutaneous Immunotherapy (EPIT):**
- Allergen delivered via skin patch
- Viaskin peanut in development
- May be safer than OIT`,
      keyTerms: [
        { term: 'Ara h 2', definition: 'Peanut 2S albumin protein; IgE to this component indicates high risk of clinical peanut allergy' },
        { term: 'ovomucoid', definition: 'Heat-stable egg white protein (Gal d 1); IgE positivity predicts persistent egg allergy' },
        { term: 'dual allergen exposure', definition: 'Hypothesis that oral exposure promotes tolerance while cutaneous exposure promotes sensitization' },
        { term: 'basophil activation test', definition: 'Functional assay measuring basophil degranulation markers in response to allergen' },
        { term: 'FALCPA', definition: 'Food Allergen Labeling and Consumer Protection Act; requires labeling of major food allergens in US' },
        { term: 'desensitization', definition: 'Raising the threshold of allergen needed to trigger a reaction through immunotherapy' },
      ],
      clinicalNotes: 'Component testing improves peanut allergy diagnosis: Ara h 2 >0.35 kU/L has high PPV for clinical allergy. Baked egg/milk challenges may be tolerated by patients with heat-labile protein sensitization. OIT increases threshold but requires ongoing dosing; ~5-10% develop eosinophilic esophagitis. Early peanut introduction (4-11 months) prevents peanut allergy in high-risk infants.',
    },
    4: {
      level: 4,
      summary: 'Food allergy develops through genetic predisposition interacting with barrier dysfunction, microbiome alterations, and epicutaneous sensitization, leading to Th2-skewed responses and IgE production against food proteins, with diagnosis refined by component-resolved testing and management evolving to include oral immunotherapy targeting allergen-specific tolerance induction.',
      explanation: `Food allergy represents a failure of oral tolerance mechanisms with complex immunopathogenesis that informs both diagnostic approaches and therapeutic interventions.

**Molecular Immunopathogenesis:**

**Epithelial Barrier and Innate Sensing:**

*Barrier Dysfunction:*
- Tight junction disruption (claudins, occludins)
- Increased paracellular permeability
- Enhanced allergen penetration
- Associated with filaggrin mutations, vitamin D deficiency

*Epithelial Alarmin Release:*
- TSLP: Drives DC activation, Th2 priming
- IL-25: Activates ILC2s
- IL-33: Promotes Th2 and ILC2 responses

*Proteolytic Activity:*
- Food allergens with protease activity bypass barrier
- Activate PAR-2 on epithelial cells
- Enhance allergen uptake

**Antigen Processing and Presentation:**

*Tolerogenic vs Immunogenic DCs:*
- Tolerogenic: CD103+ DCs, RA-producing, induce Tregs
- Immunogenic: OX40L-expressing DCs, promote Th2

*Factors Favoring Immunogenic Response:*
- Alarmin cytokines
- Absence of microbial signals
- Inflammation
- Adjuvant effects

**T Cell Responses:**

*Th2 Polarization:*
- IL-4, IL-5, IL-13 production
- GATA3 transcription factor
- Drives IgE class switching

*Failure of Treg Responses:*
- Reduced Treg induction
- FOXP3+ Treg dysfunction
- IL-10, TGF-β deficiency in gut

**Microbiome Influences:**

*Protective Bacteria:*
- Clostridia species: Induce Tregs
- Bacteroides: Short-chain fatty acid production
- Early-life diversity: Lower allergy risk

*Dysbiosis in Food Allergy:*
- Reduced bacterial diversity
- Decreased Clostridia
- Increased pathobionts
- Altered SCFA production

**Risk Factors and Prevention:**

**Established Risk Factors:**
- Atopic dermatitis (especially moderate-severe)
- Family history of atopy
- Filaggrin loss-of-function mutations
- Male sex (childhood)
- African American/Asian ethnicity (for peanut)

**LEAP Study Implications:**
- High-risk infants (eczema and/or egg allergy)
- Early peanut introduction (4-11 months) reduced allergy by 86%
- Led to updated guidelines (2017 NIAID recommendations)

**Current Recommendations:**
- Introduce peanut at 4-6 months in high-risk infants
- Test for peanut sensitization if severe eczema
- Don't delay introduction of allergenic foods

**Advanced Diagnostics:**

**Predictive Values of Component Testing:**

| Allergen Component | Threshold | Clinical Significance |
|-------------------|-----------|----------------------|
| Ara h 2 (peanut) | >0.35-1.0 kU/L | 95% PPV for reaction |
| Ara h 8 (peanut) | Positive alone | OAS only, birch cross-reactive |
| Gal d 1 (egg ovomucoid) | >10.8 kU/L | Persistent allergy, less likely to tolerate baked |
| Bos d 8 (milk casein) | High levels | Persistent allergy |

**Epitope-Resolved Diagnostics:**
- Sequential vs conformational epitopes
- Sequential epitope IgE: More persistent allergy
- Conformational only: May outgrow, tolerate heated forms

**Machine Learning Algorithms:**
- Combine multiple components
- Improved diagnostic accuracy
- Reduce unnecessary OFCs

**Therapeutic Advances:**

**Oral Immunotherapy - Mechanistic Insights:**

*Desensitization:*
- Mast cell/basophil hyporesponsiveness
- Decreased sIgE (initially may increase then decrease)
- Increased IgG4 (blocking antibodies)
- Treg induction

*Sustained Unresponsiveness:*
- Tolerance after discontinuing therapy
- Achieved in minority of patients
- Requires longer treatment, higher doses

**OIT Protocols:**

*Build-up Phase:*
- Starting dose: 0.5-6 mg protein
- Escalation over months
- Office up-dosing, home maintenance between

*Maintenance Phase:*
- Typically 300-4000 mg daily
- Continue indefinitely for desensitization
- May attempt discontinuation to assess SU

*Safety Concerns:*
- Reactions during treatment (~10-20% have significant reactions)
- Eosinophilic esophagitis (~5-10%)
- Cofactors increase reaction risk (exercise, illness)

**Biologics as Adjuncts:**

*Omalizumab (Anti-IgE):*
- Reduces reactions during OIT
- Allows faster dose escalation
- May improve efficacy
- FDA-approved for food allergy

*Anti-IL-4Rα (Dupilumab):*
- Reduces Th2 inflammation
- In trials with OIT

**Emerging Approaches:**

*Modified Allergens:*
- Hypoallergenic mutant proteins
- Reduced IgE binding, preserved T cell epitopes
- Lower risk of reactions during treatment

*DNA Vaccines:*
- Encode allergen proteins
- Induce Th1 responses
- Preclinical/early clinical development`,
      keyTerms: [
        { term: 'sustained unresponsiveness', definition: 'Maintained tolerance to food allergen after discontinuing immunotherapy, goal of treatment' },
        { term: 'IgG4 blocking antibody', definition: 'Antibody induced by immunotherapy that competes with IgE for allergen binding, reducing reactions' },
        { term: 'epitope-resolved diagnostics', definition: 'Testing that distinguishes IgE binding to sequential (linear) vs conformational epitopes on allergen proteins' },
        { term: 'LEAP study', definition: 'Learning Early About Peanut; trial demonstrating early peanut introduction prevents peanut allergy' },
        { term: 'NIAID guidelines', definition: 'National Institute of Allergy and Infectious Diseases recommendations for early peanut introduction based on risk level' },
        { term: 'cofactor', definition: 'Factor that enhances allergic reaction risk when combined with allergen exposure (exercise, alcohol, NSAIDs, infection)' },
      ],
      clinicalNotes: 'LEAP-based guidelines: Screen high-risk infants (severe eczema) for peanut sensitization before introduction; introduce early if testing allows. Component testing: Ara h 2 predicts true peanut allergy; Ara h 8 only = likely OAS. OIT: Discuss desensitization vs sustained unresponsiveness, EoE risk. Omalizumab approved as monotherapy and adjunct for food allergy.',
    },
    5: {
      level: 5,
      summary: 'Food allergy pathogenesis involves disruption of oral tolerance through genetic barrier defects, microbiome dysbiosis, and epicutaneous sensitization driving Th2 polarization and IgE production, with diagnosis refined by component-resolved and epitope-specific testing predicting clinical reactivity and persistence, and therapeutic landscape evolving through allergen-specific immunotherapy enhanced by biologics targeting key immunologic pathways.',
      explanation: `Comprehensive understanding of food allergy integrates molecular immunology, precision diagnostics, and evidence-based therapeutics to optimize patient outcomes.

**Systems-Level Pathogenesis:**

**The "Allergic Gut" Concept:**

*Normal Gut Immune Homeostasis:*
- Constant antigen sampling from diet and microbiome
- Tolerogenic environment maintained by:
  - RA-producing CD103+ DCs
  - TGF-β from epithelium and Tregs
  - IL-10 from Tr1 cells
  - Microbiome-derived signals (SCFA, AhR ligands)

*Dysregulated Gut Immunity in Food Allergy:*
- Impaired Treg induction/function
- Enhanced Th2 responses
- ILC2 expansion
- Altered APC function
- Epithelial barrier defects

**Microbiome-Immune Crosstalk:**

*Metabolites:*
- Short-chain fatty acids (butyrate, propionate, acetate)
- Bind GPCRs on immune cells (GPR43, GPR109A)
- Promote Treg differentiation
- Enhance barrier function
- Reduced in allergic children

*Microbial Patterns:*
- Clostridiales: Protective, induce Tregs
- Bacteroides fragilis: PSA promotes IL-10
- Dysbiosis: Clostridium difficile, Staphylococcus aureus overrepresentation

*Therapeutic Implications:*
- Probiotics: Variable evidence, strain-specific effects
- Prebiotics: Support beneficial bacteria
- Fecal microbiota transplant: Investigational

**Mast Cell Biology in Food Allergy:**

*Tissue-Specific Mast Cells:*
- Gut mast cells (MCT): Tryptase+, chymase-
- Increased in food-allergic gut mucosa
- Proximity to nerves and epithelium

*Mast Cell Activation Mechanisms:*
- IgE/FcεRI cross-linking (classical)
- IgG/FcγR (may be relevant in some reactions)
- Complement (anaphylatoxins)
- Mas-related G protein-coupled receptors (MRGPR)

*IgE-Independent Mast Cell Activation:*
- May explain reactions to novel foods
- Food-induced mast cell activation syndrome
- Distinct from classical IgE-mediated allergy

**Precision Medicine Approach:**

**Diagnostic Algorithms:**

*Risk Stratification:*
1. Clinical history (symptoms, timing, reproducibility)
2. Sensitization testing (SPT, sIgE)
3. Component-resolved diagnostics
4. Basophil activation test (select cases)
5. Oral food challenge (when needed)

*Peanut Allergy Algorithm Example:*
- Ara h 2 ≥0.35 kU/L: Very likely allergic, may defer OFC
- Ara h 2 <0.35, Ara h 8 positive: Likely pollen cross-reaction, OFC to confirm
- All components negative: Tolerance very likely, consider OFC

**Phenotyping Food Allergy:**

*Early-Onset, Transient:*
- Milk, egg, wheat, soy
- Associated with atopic dermatitis
- Heat-labile protein sensitization
- High likelihood of tolerance development

*Early-Onset, Persistent:*
- Peanut, tree nuts, fish, shellfish
- Heat-stable protein sensitization
- Continued sensitization despite avoidance

*Late-Onset:*
- Shellfish most common adult-onset
- Alpha-gal syndrome (red meat)
- May indicate new sensitization pathway

**Therapeutic Pipeline:**

**Immunotherapy Modalities:**

| Modality | Mechanism | Advantages | Disadvantages |
|----------|-----------|------------|---------------|
| OIT | High-dose oral | Most effective | Reaction risk, EoE |
| SLIT | Low-dose sublingual | Safer | Less efficacy |
| EPIT | Epicutaneous patch | Convenient, safer | Modest efficacy |

**OIT - State of the Art:**

*Palforzia (AR101):*
- FDA-approved peanut OIT
- Indicated for ages 4-17
- Maintenance: 300 mg daily
- 67% tolerated 600 mg challenge protein (vs 4% placebo)
- Requires careful patient selection

*Multi-allergen OIT:*
- Treating multiple allergies simultaneously
- May reduce overall burden
- Safety data emerging

**Omalizumab in Food Allergy:**

*Monotherapy:*
- FDA-approved for IgE-mediated food allergy (≥1 year)
- Monthly/every 2 weeks injections
- Increases threshold for reactions
- Does not provide "cure"

*OIT Facilitation:*
- Pre-treatment before OIT initiation
- Reduces reactions during buildup
- May allow faster escalation
- Improves efficacy in some studies

**Future Directions:**

*Tolerance Induction Strategies:*
- Combine immunotherapy with Treg-inducing agents
- Microbiome modulation
- Engineered allergens (hypoallergens)

*Prevention Strategies:*
- Optimize early allergen introduction
- Maintain skin barrier (emollients in eczema)
- Target microbiome development

**Case-Based Integration:**

**Case: 6-month-old with eczema, mother worried about peanut allergy**

*Risk Assessment:*
- Moderate-severe eczema = high risk
- NIAID guidelines: Test before introduction

*Workup:*
- Peanut SPT or sIgE
- Component testing if available (Ara h 2)

*Management Based on Results:*
- Negative testing: Introduce peanut 2g protein 3x/week
- Positive SPT 1-7mm: Supervised peanut introduction in office
- Positive SPT ≥8mm or high Ara h 2: Allergy referral, consider supervised introduction

*Counseling:*
- Early introduction prevents allergy
- Continue regular consumption once introduced
- Discuss signs of reaction and when to seek care`,
      keyTerms: [
        { term: 'Palforzia', definition: 'FDA-approved peanut oral immunotherapy product (AR101) for patients 4-17 years' },
        { term: 'MRGPR', definition: 'Mas-related G protein-coupled receptor; can activate mast cells independent of IgE' },
        { term: 'AhR ligands', definition: 'Aryl hydrocarbon receptor ligands from microbiome metabolism; promote intestinal immune homeostasis' },
        { term: 'multi-allergen OIT', definition: 'Oral immunotherapy protocol treating multiple food allergies simultaneously' },
        { term: 'AR101', definition: 'Peanut allergen powder approved as Palforzia for oral immunotherapy' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Top 9 allergens: Peanut, tree nuts, milk, egg, wheat, soy, fish, shellfish, sesame
- IgE-mediated = symptoms <2 hours; FPIES = delayed vomiting 2-4 hours
- Outgrowing: Milk/egg/wheat/soy often outgrown; peanut/tree nuts/fish/shellfish usually not
- Component testing: Ara h 2 for peanut, Gal d 1 for egg, Bos d 8 for milk
- LEAP study: Early peanut introduction (4-11 months) prevents allergy in high-risk infants
- OIT: Achieves desensitization, not "cure"; EoE risk ~5-10%
- Omalizumab: Approved for food allergy as monotherapy and OIT adjunct
- Oral food challenge: Gold standard for diagnosis
- Always prescribe 2 epinephrine auto-injectors for food-allergic patients`,
    },
  },

  media: [
    {
      id: 'food-allergy-diagnosis-algorithm',
      type: 'diagram',
      filename: 'food-allergy-diagnosis.svg',
      title: 'Food Allergy Diagnosis Algorithm',
      description: 'Flowchart for diagnosing and confirming food allergies',
    },
    {
      id: 'component-testing-guide',
      type: 'diagram',
      filename: 'component-resolved-diagnostics.svg',
      title: 'Component-Resolved Diagnostics in Food Allergy',
      description: 'Guide to interpreting allergen component test results',
    },
  ],
  citations: [
    {
      id: 'sampson-food-allergy',
      type: 'article',
      title: 'Food allergy: A practice parameter update',
      authors: ['Sampson HA', 'Aceves S', 'Bock SA'],
      source: 'Journal of Allergy and Clinical Immunology',
    },
    {
      id: 'leap-study',
      type: 'article',
      title: 'Randomized trial of peanut consumption in infants at risk for peanut allergy',
      authors: ['Du Toit G', 'Roberts G', 'Sayre PH'],
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-anaphylaxis', targetType: 'condition', relationship: 'see-also', label: 'Anaphylaxis' },
    { targetId: 'allergy-immunology-allergy-testing', targetType: 'concept', relationship: 'see-also', label: 'Allergy Testing' },
    { targetId: 'allergy-immunology-immunotherapy', targetType: 'concept', relationship: 'see-also', label: 'Immunotherapy' },
  ],
  tags: {
    systems: ['immune', 'gastrointestinal'],
    topics: ['immunology', 'allergy', 'pediatrics', 'gastroenterology'],
    keywords: ['food allergy', 'peanut allergy', 'IgE', 'oral immunotherapy', 'anaphylaxis', 'component testing'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default foodAllergiesContent;
