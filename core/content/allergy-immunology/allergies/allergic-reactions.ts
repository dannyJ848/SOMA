import { EducationalContent } from '../../types';

/**
 * Comprehensive content on allergic reactions including Type I-IV hypersensitivity,
 * anaphylaxis, allergic rhinitis, food allergies, and drug allergies
 */
export const allergicReactionsContent: EducationalContent = {
  id: 'allergic-reactions',
  type: 'concept',
  name: 'Allergic Reactions and Hypersensitivity',
  nameEs: 'Reacciones Alérgicas e Hipersensibilidad',
  alternateNames: [
    'Hypersensitivity Reactions',
    'Immune Hypersensitivity',
    'Type I-IV Reactions',
    'Reacciones Alérgicas (Spanish)'
  ],
  hpoId: 'HP:0012393',
  levels: {
    1: {
      level: 1,
      summary: 'Una reacción alérgica ocurre cuando tu sistema inmune reacciona demasiado a algo que normalmente es inofensivo. An allergic reaction happens when your immune system overreacts to something that is usually harmless.',
      explanation: `Your body has a defense system called the immune system that protects you from germs. But sometimes, this system makes a mistake and treats harmless things like enemies. When this happens, you have an allergic reaction.

**What Happens During an Allergic Reaction:**
Your body releases chemicals called histamines. These chemicals cause symptoms like:
- Sneezing and runny nose
- Itchy, watery eyes
- Skin rashes or hives (raised, red bumps)
- Swelling of lips, face, or tongue
- Stomach upset or cramping
- In severe cases, trouble breathing

**Common Triggers:**
- **Foods**: Peanuts, tree nuts, milk, eggs, fish, shellfish, wheat, soy
- **Pollen**: From trees, grass, and weeds (causes hay fever)
- **Insect Stings**: Bees, wasps, hornets
- **Medicines**: Antibiotics like penicillin, pain medicines
- **Other**: Pet dander, dust mites, mold, latex

**Severity Levels:**
- **Mild**: Sneezing, itching, watery eyes
- **Moderate**: Hives, swelling, stomach upset
- **Severe (Anaphylaxis)**: Trouble breathing, dizziness, loss of consciousness - THIS IS AN EMERGENCY!

**Spanish Terms / Términos en Español:**
- Alergia = Allergy
- Reacción alérgica = Allergic reaction
- Urticaria = Hives
- Hinchazón = Swelling
- Dificultad para respirar = Trouble breathing`,
      keyTerms: [
        {
          term: 'histamine',
          definition: 'A chemical your body releases during allergic reactions that causes symptoms',
          pronunciation: 'HIS-tuh-meen',
          relatedTerms: ['antihistamine', 'mast cell']
        },
        {
          term: 'allergen',
          definition: 'Something that triggers an allergic reaction (like pollen or peanuts)',
          pronunciation: 'AL-er-jen',
          relatedTerms: ['antigen', 'trigger']
        },
        {
          term: 'hives',
          definition: 'Raised, red, itchy bumps on your skin (urticaria)',
          pronunciation: 'hyvz',
          relatedTerms: ['urticaria', 'rash']
        },
        {
          term: 'anaphylaxis',
          definition: 'A severe, life-threatening allergic reaction (anafilaxia in Spanish)',
          pronunciation: 'an-uh-fih-LAK-sis',
          relatedTerms: ['anaphylactic shock', 'epinephrine']
        }
      ],
      analogies: [
        'Your immune system is like a security guard. During an allergic reaction, the guard thinks a friendly visitor (like pollen) is a dangerous intruder and sounds the alarm.',
        'Histamine is like a fire alarm that goes off in your body, causing all the uncomfortable symptoms.',
        'An EpiPen for severe allergies is like a fire extinguisher - you hope you never need it, but it can save your life.'
      ],
      examples: [
        'Eating a peanut butter sandwich causes hives and swelling in someone with a peanut allergy',
        'Walking through grass in spring causes sneezing and itchy eyes in people with grass pollen allergies',
        'A bee sting causes severe swelling, trouble breathing, and dizziness (anaphylaxis) in some people',
        'Taking penicillin causes a rash and itching in someone allergic to this antibiotic'
      ],
      patientCounselingPoints: [
        'Always read food labels carefully if you have food allergies',
        'Carry your allergy medicine with you at all times',
        'If you have severe allergies, always carry two EpiPens and know how to use them',
        'Tell all your doctors, dentists, and pharmacists about your allergies',
        'Wear a medical alert bracelet if you have severe allergies',
        'Call 911 immediately if you have trouble breathing, severe swelling, or dizziness after exposure to an allergen',
        'Avise a todos sus médicos sobre sus alergias (Tell all your doctors about your allergies in Spanish)'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergic reactions are classified into four types (I-IV) based on their immune mechanism. Type I (immediate) reactions are most common and include anaphylaxis, hay fever, and food allergies.',
      explanation: `The immune system uses different pathways to respond to allergens. These are classified as Type I through Type IV hypersensitivity reactions based on their mechanisms and timing.

**Type I Hypersensitivity (Immediate/IgE-Mediated):**
This is the most common type of allergic reaction. It happens quickly (within minutes to hours) and involves antibodies called IgE.
- **Examples**: Hay fever, food allergies, bee sting allergies, anaphylaxis, allergic asthma
- **Mechanism**: Allergen binds to IgE antibodies on mast cells, causing release of histamine and other chemicals
- **Symptoms**: Hives, swelling, sneezing, wheezing, in severe cases - anaphylaxis
- **Timeline**: Minutes to 2 hours after exposure

**Type II Hypersensitivity (Cytotoxic):**
The immune system attacks your own cells that have been "marked" by antibodies.
- **Examples**: Some drug reactions (like penicillin causing destruction of red blood cells), blood transfusion reactions
- **Timeline**: Hours to days

**Type III Hypersensitivity (Immune Complex):**
Antibody-antigen complexes deposit in tissues and cause inflammation.
- **Examples**: Serum sickness (reaction to animal proteins in antivenom or some medicines), some drug reactions
- **Symptoms**: Fever, rash, joint pain, swollen lymph nodes
- **Timeline**: 3-10 days after exposure

**Type IV Hypersensitivity (Delayed/Cell-Mediated):**
T-cells (not antibodies) cause the reaction. Takes longer to develop.
- **Examples**: Poison ivy rash, contact dermatitis (nickel allergy), some drug reactions
- **Timeline**: 48-72 hours after exposure

**The Allergic March:**
Many children follow a pattern called the "allergic march":
1. Eczema (atopic dermatitis) in infancy
2. Food allergies in early childhood
3. Allergic rhinitis (hay fever) in later childhood
4. Asthma developing throughout childhood

**Risk Factors for Allergies:**
- Family history (genetics)
- Having other allergic conditions
- Exposure to tobacco smoke
- Hygiene hypothesis: Less exposure to germs in childhood may increase allergy risk

**Spanish Terms / Términos en Español:**
- Hipersensibilidad = Hypersensitivity
- Reacción inmediata = Immediate reaction
- Reacción retardada = Delayed reaction
- Anticuerpos = Antibodies`,
      keyTerms: [
        {
          term: 'IgE antibody',
          definition: 'An antibody protein that triggers immediate allergic reactions',
          pronunciation: 'eye-jee-EE',
          relatedTerms: ['immunoglobulin E', 'antibody']
        },
        {
          term: 'mast cell',
          definition: 'Immune cells that store histamine and release it during allergic reactions',
          pronunciation: 'MAST sell',
          relatedTerms: ['basophil', 'degranulation']
        },
        {
          term: 'sensitization',
          definition: 'The first time your body is exposed to an allergen and develops antibodies to it',
          pronunciation: 'sen-sih-tih-ZAY-shun',
          relatedTerms: ['first exposure', 'immune memory']
        },
        {
          term: 'atopy',
          definition: 'Genetic tendency to develop allergic conditions like eczema, asthma, and hay fever',
          pronunciation: 'AT-oh-pee',
          relatedTerms: ['atopic dermatitis', 'allergic march']
        },
        {
          term: 'serum sickness',
          definition: 'Type III reaction causing fever, rash, and joint pain days after exposure to certain proteins or drugs',
          pronunciation: 'SEER-um SIK-ness',
          relatedTerms: ['immune complex', 'drug reaction']
        }
      ],
      analogies: [
        'IgE antibodies are like sticky notes that tag allergens as "dangerous" so mast cells know to attack them.',
        'Mast cells are like grenades filled with histamine - when triggered by IgE, they explode and release their contents.',
        'Sensitization is like your immune system creating a "wanted poster" for an allergen after the first meeting.',
        'Type IV reactions are like a slow-motion allergic response - your T-cells take 2-3 days to mobilize their attack.'
      ],
      examples: [
        'Type I: A child eats peanut butter for the second time and develops hives within 15 minutes',
        'Type II: A patient receives a blood transfusion with the wrong blood type and has a severe reaction',
        'Type III: A person develops fever, rash, and joint pain 7 days after receiving antivenom for a snake bite',
        'Type IV: A nurse develops an itchy rash on her hands 2 days after wearing latex gloves',
        'Allergic march: A baby with eczema later develops peanut allergy at age 2, then hay fever at age 5'
      ]
    },
    3: {
      level: 3,
      summary: 'Hypersensitivity reactions are classified by the Gell and Coombs system into four types based on immunologic mechanisms, involving different immune cells, antibodies, and mediators with distinct clinical presentations and timelines.',
      explanation: `The Gell and Coombs classification system divides hypersensitivity into four types based on the immune components involved and the mechanisms of tissue injury.

**Type I Hypersensitivity (IgE-Mediated):**
**Mechanism:**
1. **Sensitization Phase**: First allergen exposure → antigen-presenting cells (APCs) present allergen to Th2 cells → Th2 cells stimulate B cells → B cells produce IgE antibodies → IgE binds to FcεRI receptors on mast cells and basophils
2. **Effector Phase**: Re-exposure to allergen → allergen crosslinks IgE on mast cell surface → mast cell degranulation → release of preformed mediators (histamine, tryptase, heparin) and newly synthesized mediators (leukotrienes, prostaglandins, cytokines)

**Mediators and Effects:**
- **Histamine**: Vasodilation, increased vascular permeability, bronchoconstriction, mucus secretion (binds H1 and H2 receptors)
- **Tryptase**: Mast cell protease, biomarker for anaphylaxis
- **Leukotrienes (LTC4, LTD4, LTE4)**: Bronchoconstrictors, increase vascular permeability (1000x more potent than histamine)
- **Prostaglandin D2**: Bronchoconstriction, vasodilation
- **Platelet-Activating Factor (PAF)**: Causes platelet aggregation, bronchoconstriction, hypotension

**Clinical Manifestations:**
- Immediate: Anaphylaxis, urticaria, angioedema, allergic rhinitis, bronchospasm
- Late-phase reaction: 4-12 hours later due to eosinophil and neutrophil recruitment

**Type II Hypersensitivity (Antibody-Mediated Cytotoxicity):**
**Mechanism:**
IgG or IgM antibodies bind to antigens on cell surfaces → complement activation OR antibody-dependent cell-mediated cytotoxicity (ADCC) OR antibody-mediated cellular dysfunction

**Three Subtypes:**
1. **Complement-mediated**: Hemolytic transfusion reactions, hemolytic disease of newborn
2. **ADCC**: NK cells and macrophages destroy antibody-coated cells
3. **Receptor dysfunction**: Graves' disease (TSH receptor stimulating antibodies), Myasthenia gravis (ACh receptor blocking antibodies)

**Type III Hypersensitivity (Immune Complex-Mediated):**
**Mechanism:**
Antigen-antibody complexes (usually IgG) deposit in tissues → complement activation → neutrophil recruitment → release of proteolytic enzymes and reactive oxygen species → tissue damage

**Factors Affecting Deposition:**
- Size of immune complexes (medium-sized complexes deposit most readily)
- Blood flow characteristics
- Local vascular permeability

**Clinical Manifestations:**
- Localized: Arthus reaction (local immune complex deposition)
- Systemic: Serum sickness, post-streptococcal glomerulonephritis, systemic lupus erythematosus (SLE)

**Type IV Hypersensitivity (T-Cell Mediated, Delayed-Type):**
**Mechanism:**
Sensitized T cells (no antibodies involved) recognize antigen → T cell activation → release of cytokines → recruitment and activation of macrophages and other effector cells

**Two Subtypes:**
1. **CD4+ T cell-mediated**: Tuberculin skin test, contact dermatitis
2. **CD8+ T cell-mediated**: Cytotoxic killing of cells (graft rejection, some drug reactions)

**Mediators:**
- IFN-γ (activates macrophages)
- TNF-α and TNF-β (inflammation, tissue damage)
- IL-2 (T cell proliferation)
- Chemokines (recruit more immune cells)

**Spanish Medical Terms / Términos Médicos en Español:**
- Degranulación de mastocitos = Mast cell degranulation
- Mediadores químicos = Chemical mediators
- Complejo inmune = Immune complex
- Reacción de tipo retardado = Delayed-type reaction
- Citotoxicidad = Cytotoxicity`,
      keyTerms: [
        {
          term: 'degranulation',
          definition: 'Release of preformed mediators (histamine, tryptase) from mast cells and basophils',
          pronunciation: 'dee-gran-yoo-LAY-shun',
          relatedTerms: ['mast cell activation', 'mediator release']
        },
        {
          term: 'FcεRI receptor',
          definition: 'High-affinity IgE receptor on mast cells and basophils that binds IgE antibodies',
          pronunciation: 'F-c-epsilon-R-I',
          relatedTerms: ['IgE', 'receptor crosslinking']
        },
        {
          term: 'leukotriene',
          definition: 'Lipid mediator derived from arachidonic acid; causes bronchoconstriction and inflammation',
          pronunciation: 'loo-koh-TRY-een',
          relatedTerms: ['LTC4', 'LTD4', '5-lipoxygenase']
        },
        {
          term: 'Arthus reaction',
          definition: 'Local Type III hypersensitivity reaction with immune complex deposition and acute inflammation',
          pronunciation: 'ar-THOOS',
          relatedTerms: ['immune complex', 'local reaction']
        },
        {
          term: 'delayed-type hypersensitivity',
          definition: 'Type IV reaction mediated by T cells, peaks at 48-72 hours',
          pronunciation: 'dih-LAYD-type hy-per-sen-sih-TIV-ih-tee',
          etymology: 'Named for delayed onset compared to immediate hypersensitivity',
          relatedTerms: ['DTH', 'T-cell mediated']
        },
        {
          term: 'tryptase',
          definition: 'Mast cell-specific neutral protease used as biomarker for anaphylaxis',
          pronunciation: 'TRIP-tase',
          relatedTerms: ['mast cell', 'serum marker']
        }
      ],
      examples: [
        'Type I: Peanut allergen crosslinks IgE on mast cells → massive histamine release → urticaria and angioedema within 20 minutes',
        'Type I late-phase: Eosinophils recruited 6 hours after initial allergen exposure cause persistent inflammation',
        'Type II: Penicillin binds to red blood cell membranes → anti-penicillin IgG binds → complement-mediated hemolysis',
        'Type III: Horse serum antivenin forms immune complexes → deposit in kidneys and joints → serum sickness 7-10 days later',
        'Type IV: Poison ivy urushiol activates CD4+ T cells → IFN-γ release → macrophage activation → dermatitis 48-72 hours later',
        'Tryptase levels peak 1-2 hours after anaphylaxis onset, confirming mast cell degranulation'
      ],
      clinicalNotes: 'Biphasic anaphylaxis occurs in 5-20% of Type I reactions due to late-phase mediator release. Leukotriene inhibitors (montelukast) and anti-IgE therapy (omalizumab) target Type I pathways. Distinguishing Type II from Type III requires identifying cell-bound vs. circulating immune complexes.'
    },
    4: {
      level: 4,
      summary: 'Hypersensitivity reactions involve complex immunopathologic mechanisms with specific diagnostic criteria, biomarkers, and clinical patterns. Understanding these mechanisms is essential for diagnosis, risk stratification, and targeted therapy.',
      explanation: `Advanced understanding of hypersensitivity requires integration of immunology, clinical presentation, diagnostic testing, and therapeutic strategies.

**Type I Hypersensitivity - Advanced Concepts:**

**Affinity Maturation and Cross-Reactivity:**
- IgE affinity increases with repeated allergen exposure
- Cross-reactivity occurs when structurally similar proteins trigger same IgE (e.g., oral allergy syndrome: birch pollen IgE cross-reacts with apple proteins)
- Panallergens: Proteins shared across species (e.g., lipid transfer proteins, profilins)

**Mast Cell Heterogeneity:**
- MCT (mucosal): Tryptase-positive, found in lungs and GI tract
- MCTC (connective tissue): Tryptase and chymase-positive, found in skin
- Different activation thresholds and mediator profiles

**Clinical Phenotypes:**
- **Anaphylaxis**: Systemic, potentially fatal; requires recognition of Brighton Collaboration criteria
- **Allergic rhinitis**: Seasonal vs. perennial; intermittent vs. persistent
- **Food-induced allergic reactions**: IgE-mediated (immediate) vs. non-IgE-mediated (eosinophilic esophagitis, FPIES)
- **Drug hypersensitivity**: Immediate (Type I) vs. delayed (often Type IV)

**Diagnostic Approaches:**
- Skin prick testing (SPT): Measures allergen-specific IgE in vivo; high sensitivity but false positives common
- Specific IgE (sIgE): Serum testing; useful when SPT contraindicated
- Component-resolved diagnostics (CRD): Tests IgE to individual allergen proteins to assess risk
- Basophil activation test (BAT): Flow cytometry measuring CD63/CD203c expression after allergen challenge
- Serum tryptase: Peak 1-2 hours post-anaphylaxis; baseline elevated in mastocytosis

**Type II Hypersensitivity - Advanced Concepts:**

**Drug-Induced Immune Hemolytic Anemia:**
Three mechanisms:
1. **Hapten mechanism**: Drug (e.g., penicillin) binds RBC → anti-drug antibodies cause hemolysis
2. **Immune complex**: Drug-antibody complexes bind RBC → complement activation
3. **Autoantibody**: Drug induces true autoantibodies (e.g., methyldopa)

**Diagnostic Testing:**
- Direct Coombs test (DAT): Detects antibodies bound to patient's RBCs
- Indirect Coombs test (IAT): Detects circulating antibodies

**Type III Hypersensitivity - Advanced Concepts:**

**Immune Complex Disease Spectrum:**
- Size matters: Small complexes (Ab excess) cleared by kidneys; large complexes (Ag excess) cleared by macrophages; intermediate complexes deposit in tissues
- Complement levels: C3 and C4 typically decreased due to consumption
- Sites of deposition: Kidneys (glomeruli), joints (synovium), blood vessels, skin

**Serum Sickness-Like Reactions (SSLR):**
- Caused by drugs (cefaclor, bupropion) without true immune complexes
- Mechanism unclear but similar presentation to serum sickness

**Type IV Hypersensitivity - Advanced Concepts:**

**Contact Dermatitis:**
- Hapten-carrier complex: Small molecules (haptens) bind proteins → become immunogenic
- Sensitization phase: Langerhans cells present antigen to T cells in lymph nodes (10-14 days)
- Elicitation phase: Re-exposure → memory T cells activated → cytokine cascade (48-72 hours)

**Drug Reactions:**
- **Maculopapular rash**: Most common delayed drug reaction (T-cell mediated)
- **DRESS syndrome**: Drug reaction with eosinophilia and systemic symptoms; can involve viral reactivation (HHV-6)
- **Stevens-Johnson syndrome/TEN**: Severe, life-threatening mucocutaneous reactions; CD8+ T cell-mediated keratinocyte apoptosis
- **AGEP**: Acute generalized exanthematous pustulosis; neutrophilic

**Genetic Associations:**
- HLA-B*5701: Abacavir hypersensitivity
- HLA-B*1502: Carbamazepine SJS/TEN (Han Chinese)
- HLA-B*5801: Allopurinol hypersensitivity

**Cross-Reactivity Patterns:**
- Beta-lactam antibiotics: True cross-reactivity between penicillins and cephalosporins is low (1-3%)
- NSAIDs: COX-1 inhibitor cross-reactivity common in aspirin-exacerbated respiratory disease (AERD)

**Spanish Medical Terminology / Terminología Médica en Español:**
- Prueba cutánea = Skin test
- IgE específica = Specific IgE
- Hemólisis = Hemolysis
- Reactividad cruzada = Cross-reactivity
- Hipersensibilidad retardada = Delayed hypersensitivity`,
      keyTerms: [
        {
          term: 'component-resolved diagnostics',
          definition: 'Testing for IgE to specific allergen proteins to distinguish true allergy from cross-reactivity',
          relatedTerms: ['CRD', 'molecular diagnostics', 'allergen components']
        },
        {
          term: 'basophil activation test',
          definition: 'Flow cytometry assay measuring basophil activation markers after allergen exposure',
          pronunciation: 'BAY-soh-fil ak-tih-VAY-shun',
          relatedTerms: ['BAT', 'CD63', 'CD203c']
        },
        {
          term: 'oral allergy syndrome',
          definition: 'IgE-mediated reaction to fresh fruits/vegetables due to cross-reactivity with pollen allergens',
          pronunciation: 'OR-al AL-er-jee SIN-drohm',
          relatedTerms: ['OAS', 'pollen-food syndrome', 'cross-reactivity']
        },
        {
          term: 'DRESS syndrome',
          definition: 'Drug reaction with eosinophilia and systemic symptoms; severe Type IV reaction with multiorgan involvement',
          pronunciation: 'DRESS SIN-drohm',
          relatedTerms: ['drug hypersensitivity', 'eosinophilia', 'HHV-6 reactivation']
        },
        {
          term: 'Stevens-Johnson syndrome',
          definition: 'Severe mucocutaneous reaction with epidermal necrosis affecting <10% BSA',
          pronunciation: 'STEE-venz JON-son',
          relatedTerms: ['SJS', 'TEN', 'toxic epidermal necrolysis']
        },
        {
          term: 'mastocytosis',
          definition: 'Disorder of mast cell proliferation causing elevated baseline tryptase and recurrent anaphylaxis',
          pronunciation: 'mas-toh-sy-TOH-sis',
          relatedTerms: ['systemic mastocytosis', 'mast cell activation syndrome']
        }
      ],
      clinicalNotes: `**Anaphylaxis Risk Stratification:**
High-risk features: Age >50, cardiovascular disease, poorly controlled asthma, elevated baseline tryptase, mastocytosis, delayed epinephrine administration.

**Drug Allergy Delabeling:**
Many reported "penicillin allergies" are not true IgE-mediated. 90% of patients with reported penicillin allergy can be delabeled through testing.

**Biphasic Reactions:**
Occur in 5-20% of anaphylaxis cases. Risk factors: severe initial reaction, delayed epinephrine, previous biphasic reaction. Observation period: 4-8 hours depending on severity.

**FPIES (Food Protein-Induced Enterocolitis Syndrome):**
Non-IgE-mediated food allergy presenting with profuse vomiting and diarrhea 2-4 hours after ingestion. Common triggers: milk, soy, rice, oats.

**Monoclonal Antibodies for Type I:**
- Omalizumab (anti-IgE): Chronic urticaria, moderate-severe asthma
- Dupilumab (anti-IL-4Rα): Atopic dermatitis, asthma, chronic rhinosinusitis with nasal polyps
- Mepolizumab, benralizumab (anti-IL-5): Severe eosinophilic asthma`
    },
    5: {
      level: 5,
      summary: 'Evidence-based management of hypersensitivity reactions requires precise diagnosis using validated criteria, risk stratification, allergen identification, targeted pharmacotherapy, and when appropriate, immunotherapy or desensitization protocols.',
      explanation: `Comprehensive management of hypersensitivity reactions integrates current guidelines, emerging therapies, and precision medicine approaches.

**Type I Hypersensitivity - Clinical Management:**

**Anaphylaxis Emergency Management (Per NIAID/FAAN and WAO Guidelines):**
1. **First-line: Epinephrine IM**
   - Dose: 0.01 mg/kg (max 0.5 mg adults, 0.3 mg children)
   - Site: Mid-anterolateral thigh (vastus lateralis)
   - Auto-injectors: 0.1 mg, 0.15 mg, 0.3 mg, 0.5 mg doses available
   - Repeat every 5-15 minutes PRN (30% require second dose)
   - IV epinephrine infusion for refractory shock: 0.1-1 mcg/kg/min

2. **Adjunctive Therapies (NOT substitutes for epinephrine):**
   - H1-antihistamine: Diphenhydramine 25-50 mg IM/IV or cetirizine 10 mg PO
   - H2-antihistamine: Famotidine 20 mg IV or ranitidine 50 mg IV
   - Corticosteroid: Methylprednisolone 1-2 mg/kg IV (may reduce biphasic reactions)
   - Beta-agonist: Albuterol MDI/nebulizer for bronchospasm
   - IV fluids: 1-2L NS for hypotension; may need 4-8L in severe cases

3. **Positioning:**
   - Supine with legs elevated (unless respiratory distress/vomiting)
   - Left lateral decubitus if pregnant
   - Semi-recumbent if respiratory distress

4. **Monitoring:**
   - Continuous vital signs
   - Observation period: 4-8 hours (longer for severe reactions, delayed epinephrine, beta-blocker use)
   - Admit for: Severe anaphylaxis, biphasic reaction, comorbid asthma/CVD, poor social support

**Special Populations:**
- **Beta-blocker patients**: May have refractory hypotension/bradycardia; glucagon 1-2 mg IV bolus then infusion
- **ACE inhibitor patients**: May have more severe angioedema; consider fresh frozen plasma or C1-INH concentrate
- **Pregnant patients**: Epinephrine is safe (Category C); prioritize maternal resuscitation

**Diagnostic Testing for Type I:**
1. **Skin Testing:**
   - Prick/puncture test: More sensitive, less specific
   - Intradermal test: More sensitive but higher false-positive rate, more systemic reaction risk
   - Contraindications: Uncontrolled asthma, recent anaphylaxis, pregnancy, beta-blockers
   - Antihistamines must be discontinued (1st generation: 3 days; 2nd generation: 7-10 days)

2. **Serum Specific IgE:**
   - Quantitative (kUA/L): Higher levels correlate with increased reaction probability
   - Component-resolved diagnostics (CRD):
     * Ara h 2 (peanut): Best predictor of clinical peanut allergy
     * Cor a 14 (hazelnut): Predicts severe reactions
     * ω-5 gliadin (wheat): Wheat-dependent exercise-induced anaphylaxis
   - Advantages: No systemic reaction risk, unaffected by antihistamines

3. **Basophil Activation Test:**
   - Research tool becoming clinically available
   - Useful for drug allergies when SPT/sIgE unavailable
   - Measures CD63/CD203c upregulation by flow cytometry

4. **Oral Food Challenge (OFC):**
   - Gold standard for food allergy diagnosis
   - Double-blind placebo-controlled (DBPCFC) eliminates bias
   - Must be performed in supervised setting with epinephrine available
   - Indications: Unclear history, equivocal testing, assessing tolerance

**Allergen Immunotherapy (AIT):**

**Subcutaneous Immunotherapy (SCIT):**
- Escalation phase: Weekly increasing doses for 3-6 months
- Maintenance phase: Monthly injections for 3-5 years
- Efficacy: 80-90% symptom reduction for allergic rhinitis; 60-70% for venom allergy
- Requires 30-minute observation post-injection for anaphylaxis risk

**Sublingual Immunotherapy (SLIT):**
- Daily administration at home
- Lower systemic reaction risk than SCIT
- FDA-approved tablets: Grass pollen, ragweed, dust mite
- Efficacy: Comparable to SCIT but requires daily adherence

**Oral Immunotherapy (OIT) for Food Allergy:**
- Investigational for most foods; peanut OIT FDA-approved (Palforzia)
- Daily escalating doses to achieve desensitization
- ~60-80% achieve desensitization but requires ongoing maintenance
- Risk: ~5% experience anaphylaxis during OIT; eosinophilic esophagitis in ~2-5%

**Drug Desensitization:**
- Indicated when no alternative drug exists (e.g., aspirin for AERD, chemotherapy)
- Rapid induction of temporary tolerance over 4-12 hours
- Mechanism: Incremental dosing depletes mast cell mediators without triggering full degranulation
- Temporary: Tolerance lost if drug discontinued >24-48 hours

**Type II Hypersensitivity - Management:**

**Drug-Induced Immune Hemolytic Anemia:**
- Discontinue offending drug (primary treatment)
- Supportive care: Transfusion for severe anemia
- Corticosteroids: Prednisone 1 mg/kg/day for warm AIHA
- IVIG: 1-2 g/kg for refractory cases

**Type III Hypersensitivity - Management:**

**Serum Sickness:**
- Discontinue antigen/drug
- Antihistamines for pruritus
- NSAIDs for arthralgias
- Corticosteroids for severe cases: Prednisone 0.5-1 mg/kg/day, taper over 2-3 weeks

**Type IV Hypersensitivity - Management:**

**Contact Dermatitis:**
- Allergen avoidance (primary)
- Topical corticosteroids: Potent (betamethasone) for trunk/extremities; low potency (hydrocortisone) for face
- Systemic corticosteroids for severe/extensive reactions: Prednisone 40-60 mg daily with taper

**DRESS Syndrome:**
- Discontinue offending drug immediately
- Systemic corticosteroids: Prednisone 1 mg/kg/day for 6-12 weeks (slow taper to prevent rebound)
- IVIG for refractory cases
- Monitor for HHV-6 reactivation with PCR
- Check liver enzymes, renal function, CBC regularly

**Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis:**
- Medical emergency; transfer to burn unit
- Discontinue all non-essential medications
- Supportive care: Fluid/electrolyte management, wound care, pain control
- Controversial therapies: IVIG (1-3 g/kg), cyclosporine, systemic corticosteroids
- SCORTEN score predicts mortality

**Pharmacologic Prevention:**

**Premedication Protocols:**
For radiocontrast media, chemotherapy, or other triggers:
- Prednisone 50 mg PO at 13h, 7h, and 1h before procedure
- Diphenhydramine 50 mg PO/IM/IV 1h before
- H2-blocker: Famotidine 20 mg PO/IV 1h before
- Consider montelukast 10 mg PO 1h before

**Aspirin Desensitization for AERD:**
- Starting dose: 20-40 mg
- Escalate every 3 hours if tolerated: 40, 81, 162, 325 mg
- Maintenance: 325 mg BID or 650 mg daily
- Improves nasal polyps and reduces need for surgery

**Emerging Therapies:**

**Biologics:**
- **Omalizumab (anti-IgE)**: Chronic spontaneous urticaria, moderate-severe allergic asthma; 150-300 mg SC every 2-4 weeks
- **Dupilumab (anti-IL-4Rα)**: Atopic dermatitis, asthma, CRSwNP; 300 mg SC every 2 weeks
- **Mepolizumab, benralizumab (anti-IL-5)**: Severe eosinophilic asthma, EGPA
- **Ligelizumab (next-gen anti-IgE)**: Phase 3 trials for chronic urticaria

**Investigational:**
- **Allergen-specific immunotherapy**: Modified allergens (allergoids), recombinant hypoallergenic variants
- **Epicutaneous immunotherapy (EPIT)**: Viaskin Peanut patch (in development)
- **Anti-IgE autoantibodies**: Lirentelimab for chronic urticaria
- **Early introduction**: LEAP, EAT studies showed early peanut/egg introduction prevents allergy

**Spanish Clinical Terms / Términos Clínicos en Español:**
- Tratamiento de emergencia = Emergency treatment
- Epinefrina intramuscular = Intramuscular epinephrine
- Inmunoterapia = Immunotherapy
- Desensibilización = Desensitization
- Prueba de provocación oral = Oral food challenge
- Medicación preventiva = Premedication`,
      keyTerms: [
        {
          term: 'SCORTEN',
          definition: 'Severity-of-illness score for TEN predicting mortality based on 7 clinical factors',
          pronunciation: 'SKOR-ten',
          relatedTerms: ['toxic epidermal necrolysis', 'prognostic score']
        },
        {
          term: 'AERD',
          definition: 'Aspirin-exacerbated respiratory disease; triad of asthma, nasal polyps, and aspirin sensitivity',
          pronunciation: 'A-E-R-D',
          relatedTerms: ['Samter\'s triad', 'NSAID sensitivity']
        },
        {
          term: 'desensitization',
          definition: 'Temporary induction of tolerance through incremental drug dosing; tolerance lost if discontinued',
          relatedTerms: ['rapid drug desensitization', 'tolerance induction']
        },
        {
          term: 'component-resolved diagnostics',
          definition: 'Molecular allergy testing for specific allergenic proteins to improve risk prediction',
          relatedTerms: ['CRD', 'Ara h 2', 'allergen components']
        },
        {
          term: 'biphasic anaphylaxis',
          definition: 'Recurrence of anaphylaxis symptoms 4-72 hours after resolution of initial reaction',
          pronunciation: 'by-FAY-zik an-uh-fih-LAK-sis',
          relatedTerms: ['protracted anaphylaxis', 'late-phase reaction']
        },
        {
          term: 'graded challenge',
          definition: 'Administration of medication in incremental doses to assess tolerance (different from desensitization)',
          relatedTerms: ['test dose', 'drug provocation test']
        }
      ],
      clinicalNotes: `**Critical Evidence:**
- **EAACI Guidelines 2021**: Epinephrine is the ONLY first-line treatment for anaphylaxis. Antihistamines and corticosteroids are adjunctive only.
- **PRACTICE Trial (2018)**: Delayed epinephrine administration (>30 min) associated with increased biphasic reactions and hospitalizations.
- **LEAP Study (2015)**: Early peanut introduction (4-11 months) reduced peanut allergy by 81% in high-risk infants.
- **Drug Allergy Delabeling**: >90% of reported penicillin allergies are not true IgE-mediated; systematic testing/delabeling improves antibiotic stewardship.

**Pearls for Practice:**
1. **Never use antihistamines or corticosteroids as first-line for anaphylaxis** - they do NOT reverse airway obstruction or shock.
2. **IM epinephrine in thigh is superior to IV/SC routes** - faster absorption, safer in non-monitored settings.
3. **Beta-blockers increase anaphylaxis severity** - consider glucagon; avoid epinephrine boluses (can cause paradoxical hypertension/bradycardia).
4. **Tryptase timing matters** - draw 30 min-2 hours after symptom onset; levels peak at 1-2 hours. Baseline tryptase >11.4 ng/mL suggests mastocytosis.
5. **Penicillin allergy testing** - negative predictive value >95%; safe delabeling prevents carbapenem overuse and C. diff risk.
6. **Serum sickness is rare** - most "serum sickness" is actually serum sickness-like reaction (no immune complexes).
7. **Contact allergens require 48-72h for reaction** - if rash appears sooner, not contact dermatitis.

**Contraindications to Note:**
- Skin testing: Avoid in patients with recent anaphylaxis (<4 weeks), severe uncontrolled asthma, or extensive dermographism
- Beta-blockers: Relative contraindication to allergy testing and immunotherapy due to increased anaphylaxis risk
- Immunotherapy: Absolute contraindications include uncontrolled asthma, pregnancy (initiation), beta-blockers, ACE inhibitors (relative)

**Reimbursement/Coding:**
- Anaphylaxis: ICD-10 T78.2XXA (first encounter), T78.2XXD (subsequent)
- Epinephrine auto-injector: J0171 (administration), or prescription for self-administered
- Allergen immunotherapy: CPT 95165-95170 (SCIT), 95115-95117 (testing)`
    }
  },
  media: [],
  citations: [
    {
      id: 'gell-coombs-1963',
      type: 'article',
      title: 'Classification of Allergic Reactions Responsible for Clinical Hypersensitivity',
      authors: ['Gell PGH', 'Coombs RRA'],
      source: 'Clinical Aspects of Immunology',
      page: '575-596',
      accessedDate: '2026-01-30'
    },
    {
      id: 'niaid-anaphylaxis-2010',
      type: 'article',
      title: 'The Diagnosis and Management of Anaphylaxis Practice Parameter: 2010 Update',
      authors: ['Sampson HA', 'Muñoz-Furlong A', 'Campbell RL', 'et al'],
      source: 'Journal of Allergy and Clinical Immunology',
      url: 'https://www.jacionline.org/article/S0091-6749(10)00166-8/fulltext'
    },
    {
      id: 'wao-anaphylaxis-2020',
      type: 'article',
      title: 'World Allergy Organization Anaphylaxis Guidance 2020',
      authors: ['Cardona V', 'Ansotegui IJ', 'Ebisawa M', 'et al'],
      source: 'World Allergy Organization Journal',
      url: 'https://www.worldallergyorganizationjournal.org/article/S1939-4551(20)30009-1/fulltext'
    },
    {
      id: 'eaaci-anaphylaxis-2021',
      type: 'article',
      title: 'EAACI Guidelines: Anaphylaxis',
      authors: ['Muraro A', 'Roberts G', 'Worm M', 'et al'],
      source: 'Allergy',
      url: 'https://onlinelibrary.wiley.com/doi/10.1111/all.14656'
    },
    {
      id: 'leap-study-2015',
      type: 'article',
      title: 'Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy',
      authors: ['Du Toit G', 'Roberts G', 'Sayre PH', 'et al'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1414850'
    },
    {
      id: 'aaaai-hypersensitivity',
      type: 'website',
      title: 'Hypersensitivity Reactions',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-treatments/hypersensitivity'
    },
    {
      id: 'acaai-drug-allergy',
      type: 'website',
      title: 'Drug Allergies',
      source: 'American College of Allergy, Asthma & Immunology',
      url: 'https://acaai.org/allergies/allergic-conditions/drug-allergies/'
    },
    {
      id: 'uptodate-anaphylaxis',
      type: 'article',
      title: 'Anaphylaxis: Emergency Treatment',
      source: 'UpToDate',
      authors: ['Simons FE', 'Camargo CA'],
      accessedDate: '2026-01-30'
    }
  ],
  crossReferences: [
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'related', label: 'Severe Type I Reaction' },
    { targetId: 'allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Type I - Rhinitis' },
    { targetId: 'food-allergies', targetType: 'condition', relationship: 'related', label: 'Type I - Food' },
    { targetId: 'drug-allergies', targetType: 'condition', relationship: 'related', label: 'Type I-IV - Drug Reactions' },
    { targetId: 'asthma-allergy', targetType: 'condition', relationship: 'related', label: 'Type I - Asthma' },
    { targetId: 'skin-allergies', targetType: 'condition', relationship: 'related', label: 'Type I & IV - Dermatologic' },
    { targetId: 'allergy-testing', targetType: 'concept', relationship: 'related', label: 'Diagnostic Testing' },
    { targetId: 'immunotherapy', targetType: 'concept', relationship: 'related', label: 'Treatment Options' },
    { targetId: 'immune-system', targetType: 'system', relationship: 'parent', label: 'Immune System' }
  ],
  tags: {
    systems: ['immune', 'integumentary', 'respiratory', 'cardiovascular', 'gastrointestinal'],
    topics: ['immunology', 'pathology', 'clinical', 'emergency', 'diagnostics', 'therapeutics'],
    keywords: [
      'hypersensitivity',
      'allergy',
      'allergic reaction',
      'Type I',
      'Type II',
      'Type III',
      'Type IV',
      'IgE',
      'mast cell',
      'histamine',
      'anaphylaxis',
      'contact dermatitis',
      'drug allergy',
      'food allergy',
      'reacción alérgica',
      'hipersensibilidad',
      'anafilaxia'
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'emergency', 'dermatology']
    }
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published'
};
