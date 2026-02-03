/**
 * Allergic Skin Conditions - Comprehensive Educational Content
 *
 * Covers contact dermatitis, urticaria, and other allergic skin conditions.
 */

import { EducationalContent } from '../../types';

export const allergicSkinConditionsContent: EducationalContent = {
  id: 'dermatology-allergic-conditions',
  type: 'condition',
  name: 'Allergic Skin Conditions',
  alternateNames: ['Allergic Dermatoses', 'Skin Allergies', 'Hypersensitivity Skin Reactions'],

  levels: {
    1: {
      level: 1,
      summary: 'Allergic skin conditions happen when your immune system overreacts to things that touch your skin or enter your body.',
      explanation: `Allergic skin reactions are very common. They happen when your immune system thinks something harmless is actually dangerous and tries to fight it off.

**Contact Dermatitis**
When something touches your skin and causes a reaction:
- **Irritant**: From harsh chemicals or soaps (most common)
- **Allergic**: From things like poison ivy, nickel, or fragrances

Symptoms: Red, itchy, sometimes blistering rash where the substance touched

**Hives (Urticaria)**
- Raised, itchy welts that can appear anywhere
- Can be triggered by foods, medications, infections
- Usually go away within 24 hours (but may recur)
- Chronic hives last 6 weeks or more

**Angioedema**
- Deeper swelling, often on face, lips, eyes
- Can be dangerous if it affects the throat
- Often occurs with hives

**Common Skin Allergy Triggers:**
- Nickel (jewelry, belt buckles)
- Fragrances in soaps and lotions
- Poison ivy, oak, and sumac
- Latex (gloves, balloons)
- Hair dyes
- Certain medications

**What to Do:**
- Avoid the trigger once you know it
- Use gentle, fragrance-free products
- Take antihistamines for hives
- See a doctor for severe or persistent reactions`,
      keyTerms: [
        { term: 'allergy', definition: 'When your immune system overreacts to something harmless' },
        { term: 'hives', definition: 'Itchy, raised welts on the skin' },
        { term: 'contact dermatitis', definition: 'A rash caused by something touching your skin' },
        { term: 'antihistamine', definition: 'Medicine that helps with itching and hives' },
      ],
      analogies: [
        'An allergic reaction is like a false alarm - your body thinks there is danger when there is not.',
        'Hives pop up and disappear like bubbles - one goes away and another appears somewhere else.',
      ],
      examples: [
        'A woman develops an itchy rash on her earlobes from her nickel earrings.',
        'A child breaks out in hives 20 minutes after eating peanuts.',
      ],
    },
    2: {
      level: 2,
      summary: 'Allergic skin conditions include Type I (IgE-mediated) reactions like urticaria and Type IV (delayed hypersensitivity) reactions like allergic contact dermatitis.',
      explanation: `Allergic skin conditions result from immune-mediated responses and are classified by their underlying immunologic mechanism.

## Contact Dermatitis

### Irritant Contact Dermatitis (ICD)
- 80% of contact dermatitis cases
- Direct damage to skin barrier
- No prior sensitization needed
- Common irritants: Soaps, detergents, solvents, acids

### Allergic Contact Dermatitis (ACD)
- Type IV delayed hypersensitivity
- Requires prior sensitization
- 48-72 hour delay after exposure
- Common allergens: Nickel, fragrances, preservatives, rubber

**Common Allergens by Location**:
| Location | Common Allergen |
|----------|-----------------|
| Ears | Nickel (earrings) |
| Wrist | Nickel (watch), rubber |
| Face | Cosmetics, fragrances |
| Hands | Rubber, preservatives |
| Scalp | Hair dye (PPD) |

### Patch Testing
- Gold standard for ACD diagnosis
- Standardized allergen panels applied
- Read at 48 hours and 96 hours
- Identifies specific allergens to avoid

## Urticaria (Hives)

### Acute Urticaria (<6 weeks)
- Self-limited, often triggered
- Triggers: Infections, medications, foods
- Treatment: Antihistamines

### Chronic Urticaria (>6 weeks)
- Often idiopathic (no trigger found)
- Chronic spontaneous urticaria most common
- Autoimmune component in many cases
- May persist for years

**Types**:
- Chronic spontaneous urticaria (CSU)
- Chronic inducible urticaria (physical triggers)
  - Dermographism (pressure/scratching)
  - Cold urticaria
  - Solar urticaria
  - Cholinergic urticaria (heat/exercise)

### Treatment Ladder
1. H1 antihistamines (cetirizine, loratadine)
2. Increase H1 dose (up to 4x standard)
3. Add H2 blocker or leukotriene antagonist
4. Omalizumab (anti-IgE) for refractory CSU

## Angioedema
- Deeper swelling of dermis/subcutaneous tissue
- Often affects face, lips, tongue, extremities
- May occur with urticaria or alone
- ACE inhibitor-induced: Common cause, bradykinin-mediated

## Drug Reactions
**Morbilliform (Maculopapular)**:
- Most common drug eruption
- T-cell mediated
- Usually 7-14 days after starting drug

**Fixed Drug Eruption**:
- Recurs in same location with re-exposure
- Round, dusky patches

**Drug Reaction with Eosinophilia (DRESS)**:
- Severe systemic reaction
- Fever, rash, eosinophilia, organ involvement
- 2-6 weeks after starting drug`,
      keyTerms: [
        { term: 'Type IV hypersensitivity', definition: 'Delayed allergic reaction mediated by T cells, like contact dermatitis' },
        { term: 'patch testing', definition: 'Diagnostic test where allergens are applied to skin to identify contact allergies' },
        { term: 'chronic spontaneous urticaria', definition: 'Hives lasting more than 6 weeks without an identifiable trigger' },
        { term: 'angioedema', definition: 'Deep tissue swelling, often affecting face and extremities', pronunciation: 'an-jee-oh-eh-DEE-muh' },
        { term: 'omalizumab', definition: 'Anti-IgE antibody used for chronic urticaria refractory to antihistamines' },
      ],
      analogies: [
        'Patch testing is like a lineup for your immune system - it identifies which substances are the criminals.',
        'Type IV hypersensitivity is like a delayed explosion - the trigger happens hours or days before the reaction.',
      ],
    },
    3: {
      level: 3,
      summary: 'Allergic skin conditions involve complex immunologic mechanisms including T-cell mediated delayed hypersensitivity, IgE-mediated immediate reactions, and autoimmune processes in chronic urticaria.',
      explanation: `## Immunology of Contact Dermatitis

### Sensitization Phase (ACD)
1. Hapten (allergen) penetrates skin
2. Langerhans cells capture and process hapten
3. Migration to regional lymph nodes
4. Presentation to naive T cells (CD4+ and CD8+)
5. Clonal expansion of allergen-specific T cells
6. T cell memory establishment

### Elicitation Phase
1. Re-exposure to allergen
2. Hapten processing by antigen-presenting cells
3. Memory T cell activation
4. Release of inflammatory cytokines (IFN-gamma, IL-17)
5. Recruitment of inflammatory cells
6. Clinical dermatitis (48-72 hours)

### Key Cytokines
- IFN-gamma: Th1 response, macrophage activation
- IL-17: Th17 response, neutrophil recruitment
- IL-4, IL-13: Th2 response (in some ACD)
- TNF-alpha: Inflammation amplification

### Molecular Allergology
**Hapten-Carrier Concept**:
- Haptens are too small for immune recognition
- Bind to carrier proteins (form complete antigen)
- Nickel forms complexes with self-proteins
- Drug metabolites may be reactive haptens

## Urticaria Pathophysiology

### Mast Cell Central Role
- Skin mast cell degranulation
- Release of histamine, tryptase, prostaglandins
- Vasodilation, increased permeability
- Wheal formation

### Autoimmune Urticaria
- 30-50% of CSU have autoantibodies
- Anti-IgE antibodies (activate mast cells)
- Anti-FcεRIα antibodies (IgE receptor)
- Autologous serum skin test positive

### Basophil Involvement
- Reduced basophil numbers in blood
- Increased skin homing
- Contributes to chronic inflammation

### Treatment Mechanisms
**H1 Antihistamines**:
- Block H1 receptors on endothelium
- Reduce itch, wheal formation
- Inverse agonists (stabilize inactive receptor)

**Omalizumab**:
- Binds free IgE
- Reduces IgE-FcεRI complexes on mast cells
- Downregulates FcεRI expression
- Reduces mast cell releasability

**Cyclosporine** (refractory cases):
- Inhibits T cell activation
- Direct mast cell effects
- Reserved for severe refractory CSU

## Drug Hypersensitivity

### Classification (Gell and Coombs Modified)
| Type | Mechanism | Timing | Examples |
|------|-----------|--------|----------|
| I | IgE-mediated | Minutes | Penicillin anaphylaxis |
| II | Cytotoxic antibody | Hours-days | Drug-induced hemolysis |
| III | Immune complex | Days | Serum sickness-like |
| IVa | Th1 | Days | ACD, drug eczema |
| IVb | Th2 | Days | Maculopapular drug eruption |
| IVc | Cytotoxic T cell | Days | Maculopapular, SJS/TEN |
| IVd | T cell (IL-8) | Days | AGEP |

### DRESS Syndrome
**Diagnostic Criteria (RegiSCAR)**:
- Hospitalization
- Reaction suspected to be drug-related
- Acute rash
- Fever >38°C
- Enlarged lymph nodes (≥2 sites)
- Involvement of ≥1 internal organ
- Blood count abnormalities

**Pathogenesis**:
- Drug-specific T cell activation
- HHV-6 reactivation (common)
- Eosinophilia, atypical lymphocytes
- Hepatitis most common organ involvement

### Stevens-Johnson Syndrome/TEN
- Severe cutaneous adverse reaction
- <10% BSA (SJS), >30% BSA (TEN), 10-30% (overlap)
- Epidermal necrosis, mucosal involvement
- Drug-induced in 80%+ cases
- Mortality: SJS 1-5%, TEN 25-30%

## Diagnostic Approach

### Contact Dermatitis
1. Detailed exposure history
2. Pattern of dermatitis (distribution clues)
3. Patch testing with standard and extended series
4. Relevance assessment (current vs past exposure)

### Urticaria
1. Duration: Acute vs chronic
2. Trigger identification (if any)
3. Physical triggers testing
4. Laboratory: CBC, ESR/CRP, TSH
5. Autoimmune workup if suspected

### Drug Reaction
1. Timeline correlation
2. Morphology assessment
3. Systemic involvement evaluation
4. Consider drug provocation if needed (controlled setting)`,
      keyTerms: [
        { term: 'hapten', definition: 'Small molecule that becomes immunogenic when bound to a carrier protein' },
        { term: 'Langerhans cell', definition: 'Epidermal dendritic cell that captures antigens and initiates immune responses' },
        { term: 'DRESS syndrome', definition: 'Drug Reaction with Eosinophilia and Systemic Symptoms - severe drug hypersensitivity' },
        { term: 'FcεRI', definition: 'High-affinity IgE receptor on mast cells and basophils' },
        { term: 'autologous serum skin test', definition: 'Test for autoimmune urticaria using patient\'s own serum' },
      ],
      clinicalNotes: 'Patch test relevance must be established - a positive test may not explain current dermatitis. Omalizumab requires 12-24 weeks to assess response. DRESS can have delayed organ involvement - monitor for weeks after resolution.',
    },
    4: {
      level: 4,
      summary: 'Advanced allergic dermatology requires understanding of molecular allergen recognition, immune checkpoint mechanisms, biomarker-driven diagnosis, and targeted therapeutic approaches.',
      explanation: `## Molecular Mechanisms of Sensitization

### Danger Signals in ACD
**Innate Immune Activation**:
- Allergens (nickel, fragrance) activate innate receptors
- Nickel: TLR4 direct agonist
- Fragrance chemicals: Oxidative stress, NLRP3 activation
- Keratinocyte alarmin release (IL-1α, IL-33, TSLP)

### Dendritic Cell Maturation
- Hapten encounter triggers maturation
- Upregulation of CCR7 (lymph node homing)
- Increased MHC class II expression
- Co-stimulatory molecule upregulation (CD80, CD86)

### T Cell Polarization in ACD
- Historically considered Th1-dominant
- Now recognized Th1, Th17, Th22 involvement
- Tc1 (cytotoxic CD8+) also important
- Tissue-resident memory T cells (TRM) maintain reactivity

### Regulatory Mechanisms
- Tregs can suppress ACD
- Tolerance mechanisms in non-sensitized individuals
- Allergen dose affects tolerance vs sensitization
- Genetic susceptibility (HLA associations)

## Chronic Urticaria Advanced Concepts

### Mast Cell Abnormalities
- Increased skin mast cell numbers
- Enhanced releasability
- Altered expression of activation receptors
- MRGPRX2: IgE-independent activation pathway

### Autoimmune Mechanisms
**Type I Autoimmunity** (IgE-mediated):
- IgE against self-antigens (IL-24, TPO)
- Chronic mast cell activation
- Emerging recognition

**Type IIb Autoimmunity** (IgG-mediated):
- IgG autoantibodies to FcεRI or IgE
- Activate mast cells directly
- Basophil histamine release test positive

### Coagulation-Inflammation Axis
- Elevated D-dimer in active CSU
- Tissue factor expression by eosinophils
- Thrombin can activate mast cells
- Potential therapeutic target

### Biomarkers
| Biomarker | Association |
|-----------|-------------|
| Total IgE (low) | Better omalizumab response |
| Basopenia | Disease activity |
| D-dimer | Severity, resistance |
| IL-6 | Inflammation marker |
| CRP | Systemic inflammation |

## Advanced Therapeutics

### Omalizumab Resistance
- ~20% non-responders
- Consider: Higher doses, longer duration, alternative biologics
- Basophil testing may predict response

### Emerging CSU Therapies
**Ligelizumab** (anti-IgE):
- Higher affinity than omalizumab
- Phase III trials completed
- Not yet approved

**Bruton's Tyrosine Kinase Inhibitors**:
- Block mast cell and basophil activation
- Remibrutinib in clinical trials
- Oral administration

**Anti-IL-4Rα (Dupilumab)**:
- Off-label use in CSU
- May benefit subset (type 2 inflammation)

**Anti-Siglec-8**:
- Eosinophil and mast cell depletion
- Lirentelimab in trials

### ACD Management
**Allergen Avoidance**:
- Complete avoidance essential
- Cross-reactors must be identified
- Product databases (CAMP)
- Occupational modification

**Refractory ACD**:
- Systemic immunosuppression
- Phototherapy (PUVA, narrow-band UVB)
- Dupilumab (emerging evidence)
- JAK inhibitors (investigational)

## Severe Drug Reactions

### SJS/TEN Pathogenesis
- Drug-specific CD8+ cytotoxic T cells
- Granulysin: Key mediator of keratinocyte death
- Fas-FasL pathway
- Perforin/granzyme pathway

### HLA Associations
| Drug | HLA | Population |
|------|-----|------------|
| Carbamazepine | HLA-B*15:02 | Han Chinese, Thai |
| Allopurinol | HLA-B*58:01 | Han Chinese, Thai, European |
| Abacavir | HLA-B*57:01 | All |

**Pre-prescription Testing**:
- HLA-B*57:01 before abacavir
- HLA-B*15:02 before carbamazepine (Asian ancestry)
- HLA-B*58:01 before allopurinol (high-risk)

### SJS/TEN Management
- Immediate drug withdrawal
- Supportive care (burn unit/ICU)
- Wound care, fluid management
- Ophthalmology consultation
- Controversial: Cyclosporine, etanercept, IVIG

### DRESS Long-term Sequelae
- Autoimmune diseases (thyroiditis, diabetes)
- Occur months to years post-DRESS
- Mechanism: Dysregulated immunity
- Long-term monitoring required`,
      keyTerms: [
        { term: 'MRGPRX2', definition: 'Mast cell receptor mediating IgE-independent activation by certain drugs and allergens' },
        { term: 'granulysin', definition: 'Cytolytic protein released by T cells, key mediator of keratinocyte death in SJS/TEN' },
        { term: 'tissue-resident memory T cells', definition: 'Non-circulating T cells in skin that maintain long-term allergic reactivity' },
        { term: 'bruton tyrosine kinase', definition: 'Signaling molecule in mast cells/basophils, emerging therapeutic target (BTK)' },
        { term: 'basophil histamine release', definition: 'Functional test to detect autoimmune urticaria' },
      ],
      clinicalNotes: 'HLA testing before high-risk drugs can prevent SJS/TEN. Low total IgE predicts good omalizumab response. DRESS patients need long-term monitoring for autoimmune sequelae. BTK inhibitors represent promising new CSU treatment paradigm.',
    },
    5: {
      level: 5,
      summary: 'Expert-level allergic dermatology integrates precision diagnostics, pharmacogenomics, novel biologics, and personalized management strategies for complex allergic skin diseases.',
      explanation: `## Precision Medicine in Allergic Skin Disease

### Endotyping Chronic Urticaria
**Type IIb Autoimmune CSU**:
- Anti-FcεRI/IgE autoantibodies
- Basophil CD203c expression increased
- May respond to B-cell depletion

**Type I Autoimmune CSU**:
- IgE against self-antigens
- Normal basophil phenotype
- May respond to anti-IgE

**Mast Cell-Intrinsic CSU**:
- No autoantibodies detected
- Possible MRGPRX2 involvement
- May need different approach

### Biomarker-Guided Therapy
**Omalizumab Response Prediction**:
- Low baseline IgE: Better response
- High basophil FcεRI: Better response
- D-dimer elevation: Possible resistance
- Early response (4 weeks) predicts long-term

**ACD Severity Markers**:
- Patch test reaction intensity
- Number of positive reactions
- Cross-reactivity patterns
- Impact scoring (DLQI, CDLQI)

## Advanced Diagnostic Approaches

### Molecular Allergen Diagnostics
**Component-Resolved Diagnosis**:
- Specific allergen components identified
- Nickel: Ni2+-protein complexes
- Fragrance: Specific metabolites
- Improved relevance assessment

### Cellular Assays
**Lymphocyte Transformation Test (LTT)**:
- In vitro T cell proliferation to drug
- Useful for drug allergy diagnosis
- Technical challenges (sensitivity variable)

**Basophil Activation Test (BAT)**:
- Flow cytometry-based
- Drug-induced basophil activation
- CD63 or CD203c upregulation
- Complement to skin testing

### Skin Microbiome
- Altered microbiome in ACD patients
- S. aureus colonization affects reactivity
- Potential therapeutic target
- Research stage

## Novel Therapeutic Strategies

### CSU Pipeline
| Agent | Target | Phase | Status |
|-------|--------|-------|--------|
| Ligelizumab | IgE (high affinity) | III | Completed |
| Remibrutinib | BTK | III | Ongoing |
| Fenebrutinib | BTK | II | Completed |
| Barzolvolimab | KIT | II | Promising |
| UB-221 | FcεRI | II | Ongoing |

### Anti-KIT Approaches
- KIT receptor on mast cells
- Barzolvolimab depletes mast cells
- Profound, sustained responses
- Game-changing potential

### Personalized Allergen Avoidance
**Digital Health Tools**:
- Product scanning apps
- Allergen databases
- Personalized avoidance lists
- Real-time alerts

**Occupational Medicine**:
- Workplace allergen assessment
- Engineering controls
- PPE optimization
- Career counseling

## Complex Clinical Scenarios

### Severe Refractory CSU
**Treatment Algorithm**:
1. High-dose antihistamines (4x standard)
2. Omalizumab (300mg q4weeks)
3. If inadequate: Increase omalizumab (600mg q2weeks off-label)
4. Add cyclosporine (3-5mg/kg/day)
5. Consider: Clinical trials, other immunosuppressants

**Monitoring on Cyclosporine**:
- Blood pressure
- Renal function
- Drug levels (trough)
- Lipid profile
- Cancer surveillance

### Contact Dermatitis in Occupational Setting
**Medical-Legal Considerations**:
- Causation determination
- Impairment rating
- Work restrictions
- Disability assessment

**Return-to-Work Planning**:
- Allergen elimination
- Protective measures
- Job modification
- Surveillance plan

### Drug Allergy Evaluation
**Drug Challenge/Provocation**:
- Indicated when: Testing negative, drug needed
- Graded challenge protocol
- Risk stratification essential
- Emergency preparedness

**Desensitization**:
- Temporary tolerance induction
- For essential drugs (e.g., chemotherapy, antibiotics)
- Requires controlled setting
- Repeated dosing maintains tolerance

## Pediatric Considerations

### Atopic March Prevention
- Early emollient therapy
- Possible preventive effect on ACD
- Filaggrin mutation impact
- Microbiome modulation research

### Contact Dermatitis in Children
- Different allergen profiles
- More fragrances, preservatives
- Less occupational exposure
- Patch testing validated in children

## Future Directions

### Tolerance Induction
- Allergen-specific tolerance
- Regulatory T cell therapy
- Nanoparticle delivery
- Preventing sensitization

### Biomarkers for SCAR
- Predicting SJS/TEN severity
- Early diagnosis markers
- Granulysin levels
- Genetic risk scores

### Digital Phenotyping
- Wearable itch monitors
- AI-powered diagnosis
- Telemedicine integration
- Real-world evidence

### Prevention Strategies
- Barrier repair
- Microbiome modulation
- Early intervention in high-risk
- Public health approaches`,
      keyTerms: [
        { term: 'component-resolved diagnosis', definition: 'Allergy testing identifying specific molecular allergen components' },
        { term: 'basophil activation test', definition: 'Flow cytometry test measuring basophil response to suspected allergens' },
        { term: 'KIT receptor', definition: 'Tyrosine kinase receptor critical for mast cell survival and function' },
        { term: 'desensitization', definition: 'Protocol inducing temporary tolerance to allow essential drug administration' },
        { term: 'lymphocyte transformation test', definition: 'In vitro test measuring T cell proliferation in response to drug (LTT)' },
      ],
      clinicalNotes: `Expert management pearls:
1. Endotyping CSU may guide biologic selection in the future
2. Anti-KIT therapy represents paradigm shift in CSU management
3. Basophil activation testing can help diagnose drug allergy when skin testing unclear
4. Desensitization protocols should only be performed in experienced centers
5. HLA pharmacogenomic testing prevents severe drug reactions
6. Long-term DRESS follow-up is essential for autoimmune sequelae
7. Occupational dermatitis requires comprehensive medical-legal documentation`,
    },
  },

  media: [
    {
      id: 'contact-dermatitis-patterns',
      type: 'diagram',
      filename: 'contact-dermatitis-distribution.svg',
      title: 'Contact Dermatitis Distribution Patterns',
      description: 'Common patterns of contact dermatitis by allergen',
    },
    {
      id: 'urticaria-clinical',
      type: 'image',
      filename: 'urticaria-types.jpg',
      title: 'Urticaria Clinical Presentations',
      description: 'Various presentations of acute and chronic urticaria',
    },
  ],

  citations: [
    {
      id: 'eaaci-urticaria',
      type: 'article',
      title: 'EAACI/GA2LEN/EuroGuiDerm/APAAACI Guideline on Urticaria',
      source: 'Allergy',
    },
    {
      id: 'acds-patch-testing',
      type: 'website',
      title: 'Patch Testing Guidelines',
      source: 'American Contact Dermatitis Society',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-eczema', targetType: 'condition', relationship: 'related', label: 'Eczema' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'allergy', 'immunology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default allergicSkinConditionsContent;
