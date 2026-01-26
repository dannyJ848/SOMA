import { EducationalContent } from '../../types';

export const immunotherapyContent: EducationalContent = {
  id: 'allergy-immunology-immunotherapy',
  type: 'concept',
  name: 'Immunotherapy',
  alternateNames: ['Allergen Immunotherapy', 'Allergy Shots', 'Desensitization', 'AIT'],

  levels: {
    1: {
      level: 1,
      summary: 'Immunotherapy is a treatment that helps your immune system become less sensitive to allergens by giving small, increasing amounts of what you\'re allergic to over time.',
      explanation: `Immunotherapy, often called allergy shots, is a way to train your immune system to stop overreacting to things that trigger your allergies.

**How It Works:**
1. You receive small amounts of your allergen (what you're allergic to)
2. The amount gradually increases over time
3. Your immune system learns to tolerate the allergen
4. Eventually, you have fewer or no allergy symptoms

**Types of Immunotherapy:**

**1. Allergy Shots (Subcutaneous - SCIT):**
- Injections given in a doctor's office
- Build-up phase: Weekly shots for 3-6 months
- Maintenance phase: Monthly shots for 3-5 years
- Most effective form

**2. Under-the-Tongue Tablets/Drops (Sublingual - SLIT):**
- Dissolve tablet or drops under tongue at home
- Daily treatment
- Convenient but only available for certain allergens
- FDA-approved for grass, ragweed, and dust mites

**Who Might Benefit:**
- People with allergic rhinitis (hay fever)
- Allergic asthma
- Stinging insect allergies
- Some food allergies (investigational)

**Benefits:**
- Long-lasting relief (even after stopping treatment)
- May prevent new allergies from developing
- May prevent allergic rhinitis from becoming asthma
- Reduces need for daily allergy medications

**Things to Know:**
- Takes time to work (months to years)
- Must be consistent with treatment
- Small risk of allergic reaction to shots
- Not for everyone - discuss with your allergist`,
      keyTerms: [
        { term: 'immunotherapy', definition: 'Treatment to make the immune system less sensitive to allergens' },
        { term: 'allergy shots', definition: 'Injections of allergens given to build tolerance' },
        { term: 'desensitization', definition: 'The process of becoming less reactive to an allergen' },
        { term: 'sublingual', definition: 'Under the tongue; a way to take allergy medicine as tablets or drops' },
      ],
      analogies: [
        'Immunotherapy is like gradually introducing yourself to a guard dog so it learns you\'re not a threat - your immune system learns the allergen is harmless.',
        'It\'s like building up resistance to spicy food - starting with mild salsa and working up to hot peppers over time.',
      ],
      examples: [
        'A person with severe grass pollen allergies gets weekly allergy shots and after 2 years has much milder spring symptoms.',
        'A child with dust mite allergies takes a daily dissolving tablet and no longer needs daily antihistamines.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergen immunotherapy modifies the allergic response through repeated allergen exposure, available as subcutaneous (SCIT) or sublingual (SLIT) administration, providing disease-modifying effects including sustained tolerance and prevention of disease progression.',
      explanation: `Allergen immunotherapy (AIT) is the only treatment that addresses the underlying cause of allergic disease, providing long-term benefits that persist after treatment completion.

**Mechanism Overview:**

*Immune Modulation:*
- Shift from Th2 to Th1/Treg responses
- Increased IgG4 "blocking" antibodies
- Decreased specific IgE over time
- Reduced mast cell/basophil reactivity

**Administration Routes:**

**Subcutaneous Immunotherapy (SCIT):**

*Build-Up Phase:*
- Weekly (sometimes twice weekly) injections
- Gradually increasing doses
- Duration: 3-6 months

*Maintenance Phase:*
- Monthly injections
- Full maintenance dose
- Duration: 3-5 years

*Administration:*
- Must be given in medical setting
- 30-minute observation after each injection
- Epinephrine available

**Sublingual Immunotherapy (SLIT):**

*FDA-Approved Tablets:*
- Grastek (timothy grass)
- Ragwitek (ragweed)
- Odactra (house dust mite)

*Administration:*
- Daily tablet under tongue
- First dose in office, then home use
- Start 12 weeks before season (for pollen)

**Indications:**

| Indication | SCIT | SLIT |
|------------|------|------|
| Allergic rhinitis | Yes | Yes |
| Allergic asthma (mild-moderate) | Yes | Yes (HDM) |
| Venom allergy | Yes | Limited |
| Food allergy | Investigational (OIT) | Investigational |

**Contraindications:**
- Uncontrolled asthma
- Severe immunodeficiency
- Beta-blocker use (relative)
- Pregnancy (starting, not continuing)
- History of severe reactions to immunotherapy

**Efficacy:**

*Allergic Rhinitis:*
- Symptom reduction: 30-40%
- Medication reduction: 30-40%
- Effect persists after stopping

*Allergic Asthma:*
- Reduces symptoms and medication use
- May improve lung function
- HDM SLIT reduces asthma exacerbations

*Disease Modification:*
- Prevents new sensitizations
- May prevent asthma development in children with rhinitis
- Effects last 7-12 years after 3-year course

**Safety:**

*SCIT Reactions:*
- Local: Common (redness, swelling at injection site)
- Systemic: ~0.1-0.2% of injections
- Anaphylaxis: Rare but serious

*SLIT Reactions:*
- Local: Common (oral itching, swelling)
- Systemic: Much less common than SCIT
- Anaphylaxis: Very rare`,
      keyTerms: [
        { term: 'SCIT', definition: 'Subcutaneous immunotherapy; traditional allergy shots' },
        { term: 'SLIT', definition: 'Sublingual immunotherapy; tablets or drops under the tongue' },
        { term: 'IgG4', definition: 'Blocking antibody that competes with IgE for allergen binding' },
        { term: 'build-up phase', definition: 'Initial phase of SCIT with increasing doses' },
        { term: 'maintenance phase', definition: 'Phase of SCIT with stable monthly dosing' },
        { term: 'disease modification', definition: 'Changing the natural course of allergic disease' },
      ],
      analogies: [
        'IgG4 blocking antibodies are like decoys that grab the allergen before IgE can, preventing the alarm (allergic reaction).',
        'The build-up phase is like slowly turning up the volume on music so your ears adjust, rather than blasting it suddenly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergen immunotherapy induces tolerance through regulatory T cell induction, IgG4 production, and effector cell desensitization, with SCIT and SLIT providing disease-modifying effects including sustained clinical benefit and prevention of allergic march progression.',
      explanation: `Allergen immunotherapy represents the only disease-modifying treatment for IgE-mediated allergic diseases, with well-characterized immunologic mechanisms and established clinical efficacy.

**Immunologic Mechanisms:**

**Early Phase (Days-Weeks):**
- Mast cell and basophil desensitization
- Reduced early-phase mediator release
- Occurs before antibody changes

**Intermediate Phase (Weeks-Months):**
- IgG4 production (blocking antibodies)
- Initial IgE increase, then decrease
- IgG4:IgE ratio increases
- Reduced IgE facilitated allergen binding

**Late Phase (Months-Years):**
- Regulatory T cell induction
- IL-10, TGF-β production
- Shift from Th2 to Th1
- Long-term tolerance

**Cellular Changes:**

*T Cells:*
- Reduced Th2 cytokines (IL-4, IL-5, IL-13)
- Increased regulatory cytokines (IL-10, TGF-β)
- Foxp3+ Treg induction
- Th1 deviation (IFN-γ)

*B Cells:*
- Class switch to IgG4 instead of IgE
- IL-10-producing regulatory B cells
- Long-lived plasma cells with IgG4

*Effector Cells:*
- Reduced mast cell mediator release
- Decreased eosinophil accumulation
- Lower basophil activation

**SCIT Protocols:**

**Conventional:**
- Weekly build-up (12-20 weeks)
- Monthly maintenance (3-5 years)
- Safe, well-established

**Cluster:**
- Multiple injections per visit
- Build-up in 4-8 weeks
- Moderate increased reaction risk

**Rush:**
- Multiple injections daily
- Build-up in 1-3 days
- Highest reaction risk
- Often with premedication

*Venom Immunotherapy (VIT):*
- Rush protocols common
- Ultra-rush (hours) possible
- High efficacy (95-98% protection)

**SLIT Protocols:**

**Tablets (FDA-Approved):**

| Product | Allergen | Dose | Indication |
|---------|----------|------|------------|
| Grastek | Timothy grass | 2800 BAU | AR ± asthma |
| Ragwitek | Ragweed | 12 Amb a 1-U | AR |
| Odactra | House dust mite | 12 SQ-HDM | AR ± asthma |

*Initiation:*
- First dose under medical supervision
- Epinephrine available
- If tolerated, continue at home

**SLIT Drops:**
- Widely used in Europe
- Custom formulations
- Variable potency
- Less standardized than tablets

**Clinical Evidence:**

**Allergic Rhinitis:**
- Meta-analyses: Significant symptom reduction
- Effect size: Moderate to large
- Persists 2-3 years after stopping

**Allergic Asthma:**
- HDM SLIT (Odactra): Reduces exacerbations
- SCIT: Meta-analysis supports efficacy
- Patient selection important (mild-moderate)

**Disease Modification:**

*Prevention of Sensitization:*
- Monosensitized patients: Reduced new sensitizations
- Studies show 50% reduction in developing new allergies

*Prevention of Asthma:*
- Children with rhinitis: 40-50% reduction in asthma development
- PAT study, other trials support this

**Sustained Effects:**
- Benefits persist 7-12 years after 3-year course
- Longer treatment = longer benefit
- Some patients may need retreatment

**Safety Management:**

**SCIT Reactions:**

*Risk Factors:*
- Uncontrolled asthma
- High allergen sensitivity
- Rush protocols
- Dosing errors

*Prevention:*
- Assess asthma control before injection
- Dose adjustment after reactions, missed doses
- Epinephrine readily available

*Treatment:*
- Local: Ice, topical steroids if needed
- Systemic: Epinephrine, per anaphylaxis protocol

**SLIT Safety:**
- Local reactions: ~75% (oral itching, throat irritation)
- Usually mild, decrease over time
- Systemic: <0.1% of doses
- Eosinophilic esophagitis: Rare complication`,
      keyTerms: [
        { term: 'regulatory T cell', definition: 'T cell subset (Foxp3+) that suppresses immune responses and maintains tolerance' },
        { term: 'blocking antibody', definition: 'IgG4 that competes with IgE for allergen binding, preventing activation' },
        { term: 'cluster immunotherapy', definition: 'Accelerated build-up with multiple injections per visit' },
        { term: 'rush immunotherapy', definition: 'Rapid build-up protocol reaching maintenance in days' },
        { term: 'venom immunotherapy', definition: 'Immunotherapy for stinging insect (bee, wasp) allergy' },
        { term: 'allergic march', definition: 'Progression from atopic dermatitis to allergic rhinitis to asthma' },
      ],
      clinicalNotes: 'Venom immunotherapy is life-saving: 95-98% protection. HDM SLIT (Odactra) reduces asthma exacerbations. AIT may prevent asthma development in children with rhinitis. 3-5 year treatment for sustained benefit. Assess asthma control before each SCIT injection. First SLIT dose must be supervised.',
    },
    4: {
      level: 4,
      summary: 'Allergen immunotherapy modulates immune responses through induction of regulatory T and B cells, IgG4 production, and effector cell desensitization, with efficacy demonstrated across allergic rhinitis, asthma, and venom allergy, and disease-modifying effects including prevention of allergic march progression and sustained unresponsiveness.',
      explanation: `Comprehensive understanding of allergen immunotherapy requires integration of molecular mechanisms, clinical evidence, and practical implementation for optimal patient outcomes.

**Molecular Mechanisms:**

**T Cell Tolerance:**

*Regulatory T Cells:*
- Natural Tregs (thymic): CD4+CD25+Foxp3+
- Induced Tregs (peripheral): Allergen-specific
- Tr1 cells: IL-10 producing
- Th3 cells: TGF-β producing

*Treg-Mediated Suppression:*
- IL-10: Suppresses Th2, induces IgG4
- TGF-β: Suppresses inflammation, induces Tregs
- CTLA-4: Competes with CD28, dampens activation
- Cell contact-dependent mechanisms

*Effector T Cell Modulation:*
- Anergy: Allergen-specific T cell unresponsiveness
- Deletion: Apoptosis of allergen-reactive T cells
- Immune deviation: Th2 → Th1 shift

**B Cell Changes:**

*Antibody Profile:*

| Timepoint | IgE | IgG4 | IgG1 |
|-----------|-----|------|------|
| Early (months) | ↑ then → | ↑↑ | ↑ |
| Late (years) | ↓ | ↑↑↑ | ↑ |
| Post-AIT | ↓↓ | ↓ (from peak) | → |

*IgG4 Mechanisms:*
- Blocks IgE-allergen interaction
- Blocks IgE-facilitated antigen presentation
- Anti-inflammatory (doesn't fix complement)
- High-affinity allergen binding

*Regulatory B Cells:*
- IL-10-producing B cells (Bregs)
- BR1 cells: IgG4+ IL-10+
- Support tolerogenic response

**Mast Cell/Basophil Modulation:**

*Effector Cell Desensitization:*
- Reduced FcεRI expression
- Increased activation threshold
- Decreased mediator release
- Occurs before antibody changes

*Mechanisms:*
- Possible antigen-induced desensitization
- Regulatory cell-derived factors
- Not fully understood

**Clinical Practice:**

**Patient Selection:**

*Ideal Candidates:*
- IgE-mediated disease confirmed
- Clear allergen trigger
- Symptoms despite pharmacotherapy
- Willing to commit to treatment duration
- Controlled asthma (if present)

*Less Ideal:*
- Polysensitized with no dominant allergen
- Uncontrolled asthma
- Poor adherence likely
- Severe systemic reactions to prior AIT

**Allergen Selection:**

*Component Testing Role:*
- Identifies primary sensitizers
- Guides extract selection
- Example: Genuine grass (Phl p 1, 5) vs profilin only

*Principles:*
- Target clinically relevant allergens
- Consider cross-reactivity
- Mono-allergen SLIT vs multi-allergen SCIT

**SCIT Dosing:**

*Maintenance Dose:*
- Target: Optimal immunologic response
- Usually 6-20 mcg major allergen
- Example: 5-10 mcg Amb a 1 for ragweed

*Dose Adjustments:*
- Reduce after missed doses
- Reduce after local reactions
- Reduce after systemic reactions
- Never increase after reaction

**SLIT Administration:**

*Patient Instructions:*
- Hold under tongue 1-2 minutes
- Don't eat or drink for 5 minutes
- Take daily, same time preferred
- Report oral symptoms

*Managing Local Reactions:*
- Usually diminish over weeks
- Antihistamine if bothersome
- Rarely require dose adjustment

**Efficacy by Indication:**

**Allergic Rhinitis:**
- SCIT: 30-40% symptom reduction
- SLIT tablets: Similar efficacy
- Effect sizes: SMD ~0.4-0.6 (moderate)

**Allergic Asthma:**
- SCIT: Reduces symptoms, medications
- HDM SLIT: Reduces exacerbations (50%)
- Steroid-sparing effect demonstrated

**Venom Allergy:**
- VIT: 95-98% protection
- Life-saving intervention
- Consider for systemic reactions to stings

**Prevention (Disease Modification):**

*New Sensitization Prevention:*
- GAP study: Fewer new sensitizations with SCIT
- Primarily in monosensitized children

*Asthma Prevention:*
- PAT study: 40% reduction at 7-year follow-up
- Confirmed in SIT/SLIT studies
- Strongest evidence in children with rhinitis

**Advanced Applications:**

**Food Allergy Immunotherapy:**

*Oral Immunotherapy (OIT):*
- Palforzia (peanut): FDA-approved
- Escalating oral doses
- Achieves desensitization (threshold increase)
- Sustained unresponsiveness less common

*SLIT for Food:*
- Lower doses than OIT
- Fewer systemic reactions
- Lower efficacy
- Peanut, milk in trials

*Epicutaneous (EPIT):*
- Viaskin peanut patch
- Skin-based delivery
- In development

**Biologics as Adjuncts:**

*Omalizumab + AIT:*
- Reduces AIT reactions
- May enhance efficacy
- Allows faster up-dosing
- Used in high-risk patients

*Mechanism:*
- Reduces free IgE
- Downregulates FcεRI
- Decreased mast cell/basophil reactivity

**Novel Approaches:**

*Modified Allergens:*
- Allergoids: Reduced IgE binding
- Recombinant hypoallergens
- Peptides: T cell epitopes only

*Adjuvants:*
- MPL (monophosphoryl lipid A)
- CpG oligonucleotides
- Enhances Th1 response

*Alternative Routes:*
- Intralymphatic (ILIT): 3 injections
- Epicutaneous
- Modified delivery systems`,
      keyTerms: [
        { term: 'Tr1 cells', definition: 'Type 1 regulatory T cells producing IL-10; key mediators of AIT tolerance' },
        { term: 'BR1 cells', definition: 'Regulatory B cells producing IL-10 and IgG4' },
        { term: 'allergoid', definition: 'Chemically modified allergen with reduced IgE binding but preserved T cell epitopes' },
        { term: 'sustained unresponsiveness', definition: 'Maintained tolerance after immunotherapy discontinuation' },
        { term: 'ILIT', definition: 'Intralymphatic immunotherapy; direct injection into lymph nodes' },
        { term: 'Palforzia', definition: 'FDA-approved peanut oral immunotherapy product' },
      ],
      clinicalNotes: 'Component testing guides AIT allergen selection. VIT is 95-98% protective and can be life-saving. HDM SLIT (Odactra) reduces asthma exacerbations by 50%. Omalizumab can facilitate AIT in high-risk patients. Peanut OIT (Palforzia) approved for ages 4-17. AIT duration: 3-5 years for sustained disease modification.',
    },
    5: {
      level: 5,
      summary: 'Allergen immunotherapy achieves tolerance through orchestrated induction of regulatory T and B cells, allergen-specific IgG4, and effector cell hyporesponsiveness, with SCIT, SLIT, and emerging OIT/EPIT platforms providing disease-modifying effects across allergic rhinitis, asthma, venom, and food allergy, guided by precision diagnostics and potentially enhanced by biologic adjuncts.',
      explanation: `Comprehensive mastery of allergen immunotherapy integrates molecular immunology, evidence-based practice, and emerging therapeutic strategies to optimize outcomes.

**Integrated Tolerance Mechanisms:**

**The Tolerance Cascade:**

*Phase 1: Effector Cell Desensitization (Days-Weeks)*
- Mast cell/basophil hyporesponsiveness
- Reduced mediator release
- Occurs before antibody changes
- Mechanism: Possible antigen-induced tolerance

*Phase 2: Regulatory Cell Induction (Weeks-Months)*
- Allergen-specific Treg induction
- IL-10, TGF-β production
- Breg development
- Suppression of Th2 responses

*Phase 3: Antibody Modulation (Months)*
- IgG4 production (blocking)
- Eventual IgE decrease
- IgG4:IgE ratio increases
- Long-lived plasma cell formation

*Phase 4: Sustained Tolerance (Years)*
- Memory Treg maintenance
- Anergy/deletion of effector cells
- Durable tolerance post-discontinuation

**Molecular Details:**

**IgG4 - Multifaceted Role:**

*Fab-arm Exchange:*
- Unique to IgG4
- Creates bispecific antibodies
- Monovalent for each allergen
- Cannot form immune complexes

*Blocking Functions:*
1. Blocks IgE-allergen binding
2. Blocks IgE-facilitated antigen presentation
3. Inhibits IgE-CD23 interaction
4. Prevents mast cell activation

*Not Just IgG4:*
- IgG1 also increases
- May contribute to blocking
- Affinity maturation important

**Regulatory Cell Networks:**

| Cell Type | Cytokines | Function |
|-----------|-----------|----------|
| nTreg | IL-10, TGF-β | Suppress via contact |
| iTreg (Foxp3+) | IL-10, TGF-β | Allergen-specific |
| Tr1 | IL-10 | Key in SLIT |
| Th3 | TGF-β | Mucosal tolerance |
| Breg | IL-10 | Support IgG4, suppress Th2 |

**SLIT Mechanistic Differences:**

*Oral Mucosa:*
- Langerhans cells take up allergen
- Tolerogenic DC phenotype
- Less systemic exposure

*Tr1 Predominance:*
- IL-10-producing T cells
- Important in oral tolerance
- May differ from SCIT Tregs

**Evidence Synthesis:**

**Meta-Analyses Summary:**

| Indication | SCIT SMD | SLIT SMD | Duration |
|------------|----------|----------|----------|
| AR symptoms | -0.65 | -0.49 | 3+ years |
| AR medication | -0.55 | -0.32 | 3+ years |
| Asthma symptoms | Variable | -0.36 (HDM) | 3+ years |

**Disease Modification Evidence:**

*Prevention of Sensitization:*
- GAP study (SCIT): Fewer new sensitizations
- SLIT studies: Similar trends
- Primarily in monosensitized

*Prevention of Asthma:*
- PAT study (SCIT): 40% reduction at 7 years
- Preventive allergy treatment study (SLIT): Supportive
- SQ-HDM tablets: Prevents asthma progression

*Sustained Effects:*
- Effects persist 7-12+ years post-AIT
- Longer treatment = longer effect
- 3 years minimum recommended

**Precision Medicine Approach:**

**Biomarker-Guided Selection:**

*Component Diagnostics:*
- Genuine vs cross-reactive
- Predicts AIT response
- Guides extract selection

*Example Algorithm (Pollen):*
1. SPT/sIgE positive to multiple pollens
2. Component testing: Genuine markers
3. If Bet v 1+ and grass profilin only → Treat birch
4. If Phl p 1/5+ → Treat grass
5. Avoid treating cross-reactivity alone

**Response Prediction:**

*Baseline Predictors:*
- Mono- vs polysensitization
- Component pattern
- Baseline symptoms severity
- Age (children may respond better)

*On-Treatment Markers:*
- IgG4 rise
- Skin test/sIgE decline
- Basophil activation decrease
- Symptom improvement

**Special Populations:**

**Venom Allergy:**

*Indications:*
- Systemic reaction to sting
- Positive venom testing
- Adults: More at risk for severe reactions
- Lifetime risk consideration

*Protocols:*
- Rush/ultra-rush common
- Monthly maintenance
- Duration: 3-5 years (can stop)
- Consider longer if severe reaction, mast cell disorder

*Efficacy:*
- 98% protective (fire ant slightly lower)
- Continue epinephrine availability

**Food Allergy (OIT):**

*Palforzia Protocol:*
- Ages 4-17
- Initial dose escalation (1 day)
- Up-dosing (6 months)
- Maintenance (300 mg daily)

*Outcomes:*
- 67% tolerated 600mg at challenge
- Desensitization, not cure
- Ongoing dosing required
- Reaction risk during treatment

*Considerations:*
- EoE risk (~5%)
- Cofactors (exercise, illness) increase risk
- Discuss expectations carefully

**Biologics as Platform:**

*Omalizumab Facilitation:*
- Pre-treat before starting AIT
- Reduces systemic reactions
- May enable faster escalation
- Consider in high-risk patients

*Dupilumab + AIT:*
- Theoretical rationale
- Under investigation
- May enhance tolerance

**Emerging Frontiers:**

**Novel Delivery:**

*ILIT (Intralymphatic):*
- 3 injections into lymph node
- Rapid tolerance induction
- Direct DC access
- Promising early data

*EPIT (Epicutaneous):*
- Viaskin patches
- Langerhans cell targeting
- Peanut: Phase 3 completed
- May be safer than OIT

**Modified Allergens:**

*Allergoids:*
- Glutaraldehyde/formaldehyde treated
- Reduced IgE binding
- Preserved T cell epitopes
- Faster buildup possible

*Recombinant Allergens:*
- Defined composition
- Hypoallergenic variants
- Combination vaccines possible
- Standardization advantage

*Peptide Immunotherapy:*
- Short peptides (T cell epitopes)
- No IgE crosslinking
- Cat allergen: Phase 3 data
- Intradermal delivery

**Adjuvant Systems:**

| Adjuvant | Mechanism | Status |
|----------|-----------|--------|
| MPL | TLR4 agonist, Th1 | Approved (Pollinex) |
| CpG | TLR9 agonist, Th1 | Clinical trials |
| VLP | Virus-like particles | Phase 2 |
| Liposomes | Enhanced uptake | Investigational |

**Implementation Excellence:**

**Quality and Safety:**

*SCIT Safety Protocol:*
1. Verify patient identity
2. Check asthma control
3. Confirm dose
4. Administer correctly
5. Monitor 30 minutes
6. Document

*Emergency Preparedness:*
- Epinephrine immediately available
- Staff trained in anaphylaxis
- Resuscitation equipment
- Clear protocols

**Treatment Optimization:**

*Duration:*
- Minimum 3 years for disease modification
- 5 years for maximal sustained benefit
- Some patients may need retreatment

*Discontinuation Criteria:*
- Completed 3-5 years
- Symptom control achieved
- Consider ongoing monitoring`,
      keyTerms: [
        { term: 'Fab-arm exchange', definition: 'IgG4-specific process creating monovalent bispecific antibodies, preventing immune complex formation' },
        { term: 'Viaskin', definition: 'Epicutaneous immunotherapy patch technology for food allergy' },
        { term: 'MPL adjuvant', definition: 'Monophosphoryl lipid A; TLR4 agonist enhancing Th1 responses in AIT' },
        { term: 'peptide immunotherapy', definition: 'Treatment using T cell epitope peptides without IgE crosslinking risk' },
        { term: 'ultra-rush VIT', definition: 'Venom immunotherapy reaching maintenance dose within hours' },
        { term: 'SMD', definition: 'Standardized mean difference; effect size measure in meta-analyses' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- AIT is the ONLY disease-modifying treatment for IgE-mediated allergic disease
- Mechanisms: Treg induction, IgG4 blocking antibodies, effector cell desensitization
- SCIT: Weekly build-up → monthly maintenance for 3-5 years
- SLIT tablets: Grastek (grass), Ragwitek (ragweed), Odactra (HDM)
- VIT: 98% protective, can be life-saving
- Prevention: AIT reduces new sensitizations and asthma development in rhinitis
- Duration: 3-5 years for sustained disease modification (effects last 7-12 years)
- Food OIT: Palforzia (peanut) FDA-approved; desensitization not cure
- Component testing guides allergen selection for AIT
- Omalizumab can facilitate AIT in high-risk patients
- HDM SLIT reduces asthma exacerbations by 50%
- ILIT and EPIT represent emerging delivery platforms`,
    },
  },

  media: [
    {
      id: 'ait-mechanisms',
      type: 'diagram',
      filename: 'immunotherapy-mechanisms.svg',
      title: 'Allergen Immunotherapy Mechanisms',
      description: 'Immune changes during allergen immunotherapy',
    },
    {
      id: 'ait-protocols',
      type: 'diagram',
      filename: 'immunotherapy-protocols.svg',
      title: 'SCIT and SLIT Protocols',
      description: 'Overview of immunotherapy administration protocols',
    },
  ],
  citations: [
    {
      id: 'ait-practice-parameter',
      type: 'article',
      title: 'Allergen immunotherapy: a practice parameter third update',
      authors: ['Cox L', 'Nelson H', 'Lockey R'],
      source: 'Journal of Allergy and Clinical Immunology',
    },
    {
      id: 'ait-mechanisms-review',
      type: 'article',
      title: 'Mechanisms of allergen-specific immunotherapy',
      authors: ['Akdis CA', 'Akdis M'],
      source: 'Journal of Allergy and Clinical Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-type-i-hypersensitivity', targetType: 'concept', relationship: 'parent', label: 'Type I Hypersensitivity' },
    { targetId: 'allergy-immunology-environmental-allergies', targetType: 'condition', relationship: 'see-also', label: 'Environmental Allergies' },
    { targetId: 'allergy-immunology-food-allergies', targetType: 'condition', relationship: 'see-also', label: 'Food Allergies' },
    { targetId: 'allergy-immunology-allergy-testing', targetType: 'concept', relationship: 'related', label: 'Allergy Testing' },
    { targetId: 'allergy-immunology-anaphylaxis', targetType: 'condition', relationship: 'see-also', label: 'Anaphylaxis' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['immunology', 'allergy', 'therapeutics'],
    keywords: ['immunotherapy', 'SCIT', 'SLIT', 'allergy shots', 'desensitization', 'tolerance'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immunotherapyContent;
