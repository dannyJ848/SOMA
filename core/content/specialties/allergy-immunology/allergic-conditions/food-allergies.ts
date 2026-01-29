import type { EducationalContent } from '../../../types';

export const foodAllergies: EducationalContent = {
  id: 'food-allergies-education',
  type: 'condition',
  name: 'Food Allergies',
  alternateNames: ['Food Hypersensitivity', 'IgE-Mediated Food Allergy', 'Anaphylaxis Food Triggers'],
  levels: {
    1: {
      level: 1,
      summary: 'Food allergies occur when the immune system mistakenly reacts to certain foods as if they are harmful, causing symptoms that can range from mild hives to life-threatening reactions.',
      explanation: `A food allergy happens when your body\'s immune system thinks a certain food is dangerous and attacks it. This is different from food intolerance, which does not involve the immune system.

When someone with a food allergy eats the problem food, their body releases chemicals like histamine. This can cause symptoms like itching, hives, swelling, stomach pain, vomiting, or trouble breathing. In severe cases, it can cause anaphylaxis, a life-threatening reaction that needs immediate medical attention.

The most common food allergens are milk, eggs, peanuts, tree nuts, fish, shellfish, soy, and wheat. These eight foods cause about 90% of all food allergies.

Food allergies are most common in children. Some children outgrow allergies to milk, eggs, and soy, but peanut, tree nut, and shellfish allergies usually last for life. The only way to prevent reactions is to avoid the allergenic food completely and always be prepared with emergency medication.`,
      keyTerms: [
        { term: 'food allergen', definition: 'A food protein that triggers an allergic reaction' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction affecting multiple body systems' },
        { term: 'histamine', definition: 'A chemical released during allergic reactions that causes symptoms' },
        { term: 'epinephrine', definition: 'Emergency medicine used to treat severe allergic reactions' }
      ],
      analogies: [
        'A food allergy is like a false alarm - the immune system thinks a harmless food is a dangerous invader',
        'Epinephrine is like a fire extinguisher for severe allergic reactions - it stops the emergency quickly'
      ],
      examples: [
        'A child who develops hives and vomiting immediately after eating peanuts',
        'An adult who has trouble breathing and feels dizzy after eating shrimp'
      ]
    },
    2: {
      level: 2,
      summary: 'Food allergies are IgE-mediated immune reactions to food proteins, with symptoms ranging from mild cutaneous to severe anaphylaxis, affecting approximately 8% of children and 5% of adults.',
      explanation: `Food allergies affect approximately 8% of children and 5% of adults in developed countries, with prevalence increasing over recent decades. They are distinct from food intolerances (non-immune) and celiac disease (immune-mediated but not IgE-mediated).

Classification of adverse food reactions:

Immune-mediated:
1. IgE-mediated (immediate): Most common food allergy type
2. Non-IgE-mediated (delayed): Eosinophilic esophagitis, food protein-induced enterocolitis, proctocolitis
3. Mixed IgE/non-IgE: Atopic dermatitis, some forms of eosinophilic gastroenteritis

Non-immune-mediated:
- Metabolic (lactose intolerance)
- Pharmacologic (caffeine effects)
- Toxic (scombroid poisoning)
- Other (irritable bowel syndrome)

Common food allergens (Big 8):
1. Milk (cow\'s milk protein)
2. Egg (primarily white/ovalbumin)
3. Peanut (legume, not true nut)
4. Tree nuts (walnut, almond, cashew, pecan, pistachio, hazelnut, Brazil nut, macadamia)
5. Wheat
6. Soy
7. Fish (finfish)
8. Shellfish (crustaceans and mollusks)

Note: Sesame now 9th major allergen (FASTER Act 2021)

Natural history:
- Milk, egg, soy, wheat: Often outgrown (80% by age 16 for milk/egg)
- Peanut, tree nuts, shellfish, fish: Usually persistent
- Early introduction (4-6 months) now recommended to prevent peanut allergy

Pathophysiology (IgE-mediated):
- Food protein recognized as allergen
- Th2 response promotes IgE production
- IgE binds to mast cells and basophils
- Re-exposure cross-links IgE, triggering degranulation
- Release of histamine, leukotrienes, prostaglandins
- Symptoms within minutes to 2 hours

Clinical manifestations:

Cutaneous (most common):
- Urticaria (hives), angioedema, pruritus, flushing

Gastrointestinal:
- Nausea, vomiting, abdominal pain, diarrhea

Respiratory:
- Rhinorrhea, nasal congestion, sneezing, cough, wheezing, throat tightness

Cardiovascular (anaphylaxis):
- Hypotension, syncope, tachycardia, cardiac arrest

Anaphylaxis criteria:
- Acute onset with skin/mucosal symptoms plus respiratory compromise or hypotension
- OR two or more systems after likely allergen exposure
- OR hypotension after known allergen exposure

Risk factors for severe reactions:
- Asthma (especially uncontrolled)
- Previous anaphylaxis
- Delayed epinephrine use
- Teenagers/young adults (risk-taking behavior)
- Certain medications (beta-blockers, ACE inhibitors)
- Exercise after food ingestion`,
      keyTerms: [
        { term: 'IgE-mediated', definition: 'Allergic reaction involving immunoglobulin E antibodies; occurs within minutes' },
        { term: 'angioedema', definition: 'Swelling beneath the skin, often affecting face, lips, tongue, or throat' },
        { term: 'urticaria', definition: 'Hives; raised, itchy welts on the skin caused by histamine release' },
        { term: 'atopic dermatitis', definition: 'Eczema; chronic inflammatory skin condition associated with allergy' },
        { term: 'FASTER Act', definition: 'US law adding sesame as 9th major food allergen in 2023' }
      ],
      analogies: [
        'The immune system in food allergy is like a security system with a hair trigger - it overreacts to safe foods',
        'Cross-reactivity is like mistaking one person for their twin because they look similar'
      ],
      examples: [
        'A 2-year-old with immediate hives and coughing after their first taste of peanut butter',
        'An adult with shellfish allergy who develops throat tightness and dizziness after eating at a seafood restaurant'
      ]
    },
    3: {
      level: 3,
      summary: 'Food allergy diagnosis requires careful history, specific IgE testing, and supervised oral food challenges when indicated, with management centered on avoidance, emergency action plans, and emerging oral immunotherapy options.',
      explanation: `Accurate diagnosis of food allergy is critical to avoid unnecessary dietary restrictions while ensuring safety for those with true allergies. The diagnostic approach integrates clinical history with objective testing.

Diagnostic approach:

History (key elements):
- Specific food suspected and quantity consumed
- Time from ingestion to symptom onset (IgE-mediated typically <2 hours)
- Description of symptoms and affected organ systems
- Consistency of reaction with repeated exposures
- Associated factors: Exercise, alcohol, NSAIDs (may lower threshold)
- Current diet and nutritional impact of avoidance

Physical examination:
- Atopic stigmata (eczema, allergic shiners)
- Growth parameters in children
- Signs of nutritional deficiency if multiple food avoidance

Diagnostic testing:

Skin prick testing:
- Commercial food allergen extracts or fresh food (prick-to-prick)
- Wheal diameter >=3mm considered positive
- Sensitivity high (>90%) but specificity lower (50-60%)
- Many false positives; positive test does not confirm clinical allergy
- Negative test has excellent negative predictive value

Serum specific IgE:
- Quantitative measurement of food-specific IgE
- Higher levels correlate with higher likelihood of clinical reactivity
- Predictive values vary by food and age
- Component-resolved diagnostics (CRD) available

Component-resolved diagnostics:
- Tests for specific allergen proteins within foods
- Heat-labile vs heat-stable proteins
- Cross-reactive vs species-specific proteins
- Example: Ara h 2 (peanut) more predictive of severe allergy than Ara h 8 (cross-reactive)

Oral food challenge (OFC):
- Gold standard for diagnosis
- Double-blind, placebo-controlled (research) or open (clinical)
- Supervised administration of increasing food doses
- Performed in medical setting with emergency medications available
- Indicated when history and testing equivocal
- Negative challenge confirms tolerance

Elimination diet:
- Remove suspected food for 2-4 weeks
- Monitor for symptom resolution
- Followed by reintroduction or challenge
- Diagnostic and therapeutic

Diagnostic pitfalls:
- IgG testing: NOT validated for food allergy diagnosis
- Applied kinesiology, electrodermal testing: No scientific validity
- Panel testing without clinical history: Leads to unnecessary avoidance
- Self-diagnosis often inaccurate

Management:

Avoidance:
- Complete elimination of allergenic food
- Read all food labels (FALCPA requires clear allergen labeling)
- Understand cross-contact risks
- Restaurant precautions
- School/workplace education

Emergency action plan:
- Written plan with symptoms and treatment steps
- Epinephrine auto-injector prescription for all IgE-mediated food allergies
- Two doses available (biphasic reactions possible)
- Training of patient, family, caregivers
- Medical alert identification

Epinephrine use:
- First-line for anaphylaxis
- Intramuscular injection in anterolateral thigh
- Dose: 0.01 mg/kg (max 0.3-0.5 mg)
- Auto-injectors: EpiPen, Auvi-Q, generic options
- Carry two doses; seek emergency care after use

Adjunctive medications (do NOT delay epinephrine):
- H1 antihistamines: For cutaneous symptoms only
- Beta-agonists: For bronchospasm
- Corticosteroids: May prevent prolonged/biphasic reactions (weak evidence)

Nutritional counseling:
- Ensure adequate nutrition with elimination diets
- Calcium and vitamin D for milk avoidance
- Protein alternatives
- Growth monitoring in children

Education:
- Label reading
- Cross-contact prevention
- Recognition of early symptoms
- When and how to use epinephrine
- Anxiety management

Emerging therapies:

Oral immunotherapy (OIT):
- Daily ingestion of increasing amounts of allergen
- Goal: Desensitization (increased threshold), not tolerance
- FDA-approved peanut OIT (Palforzia)
- Must be maintained with regular ingestion
- Side effects common (GI, skin, respiratory)

Other approaches:
- Epicutaneous immunotherapy (EPIT): Peanut patch
- Sublingual immunotherapy (SLIT)
- Multi-allergen OIT
- Biologics (omalizumab) as adjunct to OIT`,
      keyTerms: [
        { term: 'oral food challenge', definition: 'Supervised feeding test to confirm or rule out food allergy; diagnostic gold standard' },
        { term: 'component-resolved diagnostics', definition: 'Testing for specific allergen components to assess risk of severe reaction' },
        { term: 'oral immunotherapy', definition: 'Controlled ingestion of allergen to increase tolerance threshold' },
        { term: 'cross-contact', definition: 'Unintentional introduction of allergen through shared equipment or surfaces' },
        { term: 'biphasic reaction', definition: 'Recurrence of anaphylaxis hours after initial resolution' }
      ]
    },
    4: {
      level: 4,
      summary: 'Food allergy management requires comprehensive education, emergency preparedness, consideration of comorbid asthma, and shared decision-making regarding emerging treatments like OIT.',
      explanation: `Effective food allergy management extends beyond avoidance to address psychosocial impact, comorbid conditions, quality of life, and emerging treatment options.

Risk assessment and stratification:

History of anaphylaxis:
- Indicates higher risk for future severe reactions
- Requires absolute avoidance and always-available epinephrine
- Review circumstances to prevent recurrence
- Consider comorbid asthma control

Asthma considerations:
- Food allergy and asthma commonly coexist
- Uncontrolled asthma increases anaphylaxis risk
- Asthma must be well-controlled before food challenges
- Any respiratory symptoms during reaction warrant epinephrine

Cofactors lowering reaction threshold:
- Exercise (food-dependent exercise-induced anaphylaxis)
- Alcohol
- NSAIDs (aspirin, ibuprofen)
- Menstrual cycle (progesterone effects)
- Acute illness
- Emotional stress
- Certain medications

Cross-reactivity patterns:

Pollen-food syndrome (oral allergy syndrome):
- Cross-reactivity between pollen and certain fruits/vegetables
- Heat-labile proteins cause oral symptoms only
- Examples: Birch pollen with apple, carrot, hazelnut; ragweed with melon, banana
- Usually mild; cooking often prevents symptoms

Latex-fruit syndrome:
- Latex allergy cross-reacts with banana, avocado, kiwi, chestnut

Cross-reactive foods:
- Peas and peanuts (legumes)
- Different tree nuts (but many tolerate some tree nuts)
- Fish species often cross-react
- Shellfish groups (crustaceans more likely to cross-react than mollusks)

Management in specific settings:

Schools:
- 504 plan or IEP for accommodations
- Epinephrine availability and training
- Hand washing (not just sanitizer) before eating
- No food sharing policies
- Bullying prevention

Restaurants:
- Clear communication with kitchen staff
- Avoid high-risk establishments (buffets, bakeries for peanut allergy)
- Simple dishes with fewer ingredients
- Be prepared with emergency medications
- When in doubt, do not eat

Travel:
- Translate food allergies in destination language
- Pack safe foods
- Airline policies (pre-boarding cleaning, buffer zones)
- Carry epinephrine in carry-on luggage

Psychosocial impact:
- Anxiety and depression common
- Reduced quality of life
- Social isolation
- Family stress
- Support groups and counseling beneficial
- Age-appropriate responsibility transition

Quality of life considerations:
- Burden of constant vigilance
- Cost of specialty foods and medications
- Impact on social activities
- Career considerations (food service, aviation)
- Transition to adulthood planning

Oral immunotherapy practical aspects:

Patient selection:
- Confirmed IgE-mediated allergy
- Unable to achieve sufficient avoidance
- High quality of life impact
- Realistic expectations
- Ability to comply with protocol
- Not candidates: Poorly controlled asthma, eosinophilic esophagitis, inability to communicate symptoms

Protocol:
- Initial dose escalation day (supervised)
- Daily home dosing with specific dose
- Regular up-dosing visits
- Build to maintenance dose
- Continue daily maintenance indefinitely

Risks and limitations:
- Side effects common (80-90%)
- Not curative - must continue daily dosing
- Protection lost if dosing stopped
- Not all patients reach maintenance
- Cost and time commitment
- Cannot eat allergen freely - just increased threshold

Shared decision-making:
- Discuss risks/benefits of OIT vs standard care
- Patient/family values and preferences
- Quality of life considerations
- Realistic goal-setting

Natural history and monitoring:

Outgrowing food allergies:
- Regular reassessment of persistent allergies
- Specific IgE levels may predict tolerance
- Declining IgE over time favorable sign
- Oral food challenge when appropriate to confirm tolerance
- May need reintroduction challenge after long avoidance

Monitoring tests:
- Annual specific IgE or skin testing for persistent allergies
- Less frequent if stable and strictly avoiding
- Rechallenge when testing suggests possible tolerance

Food allergy prevention:

Early introduction:
- LEAP study: Early peanut introduction (4-11 months) reduced peanut allergy by 80%
- Guidelines now recommend early introduction for high-risk infants
- Applies to egg as well
- Not delayed beyond 12 months

High-risk infant definition:
- Severe eczema
- Egg allergy
- Both parents with food allergies

Prevention protocol:
- Assess infant risk
- Introduce peanut/egg around 6 months
- Start with small amounts
- Continue regular exposure (several times weekly)
- For high-risk: Consider supervised first introduction`,
      keyTerms: [
        { term: 'pollen-food syndrome', definition: 'Oral allergy syndrome; cross-reactivity between pollens and certain raw foods' },
        { term: 'food-dependent exercise-induced anaphylaxis', definition: 'Anaphylaxis triggered by combination of specific food plus exercise' },
        { term: '504 plan', definition: 'US legal accommodation plan for students with medical conditions' },
        { term: 'LEAP study', definition: 'Learning Early About Peanut Allergy; landmark study on peanut prevention' },
        { term: 'desensitization', definition: 'Increased tolerance threshold requiring continued exposure to maintain' }
      ],
      clinicalNotes: `Clinical pearls for food allergy management:

1. NEVER delay epinephrine for anaphylaxis - antihistamines do NOT treat anaphylaxis
2. Biphasic reactions occur in up to 20%; observe at least 4-6 hours after initial reaction
3. Most deaths occur in patients with known allergy who did not receive epinephrine promptly
4. Panel testing without history leads to misdiagnosis - test only based on clinical history

Diagnostic approach:
- Take detailed history first
- Use skin test or specific IgE to confirm suspicion
- Consider component testing for risk stratification
- Oral food challenge when equivocal
- Do not use unvalidated tests (IgG, ALCAT, etc.)

Emergency management:
- Epinephrine is life-saving; antihistamines are NOT
- Position: Supine with legs elevated (unless breathing difficult)
- Call emergency services after epinephrine
- Second dose at 5-15 minutes if no improvement
- Observation for biphasic reaction

Special populations:
- Infants: Can use epinephrine; doses weight-based
- Elderly: Higher cardiovascular risk with epinephrine but still indicated
- Pregnancy: Food allergy does not change; maintain avoidance

Emerging therapies in practice:
- Peanut OIT FDA approved but consider carefully
- Not all patients are candidates
- Side effects common
- Must maintain daily dosing indefinitely
- Shared decision-making essential

Prevention counseling:
- Counsel all parents on early introduction (4-6 months)
- High-risk infants need earlier evaluation
- No need to delay any allergenic foods
- Regular ingestion once introduced

When to refer:
- Diagnostic uncertainty
- Multiple food allergies
- Poor growth/nutritional concerns
- Consideration of OIT
- Significant anxiety/quality of life impact
- Need for school/workplace accommodation planning`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include mechanistic understanding of tolerance development, biologic therapies, epicutaneous immunotherapy, eosinophilic esophagitis overlap, and health equity in food allergy care.',
      explanation: `Contemporary food allergy research focuses on mechanisms of immune tolerance, novel therapeutics, health disparities, and the complex interplay between genetics, environment, and the microbiome.

Mechanisms of tolerance:

Natural tolerance development:
- Most children outgrow milk and egg allergies
- Associated with decreasing food-specific IgE levels
- Emergence of food-specific IgG4 (blocking antibodies)
- Expansion of regulatory T-cells (Tregs)
- Changes in allergen-specific T-cell responses (Th2 to Th1/Treg)

Factors affecting tolerance:
- Age of first reaction (younger = more likely persistent)
- Specific IgE level (higher = more persistent)
- Severity of reactions (counterintuitively, severe reactions may predict persistence)
- Comorbid allergic disease
- Genetic factors

Biomarkers of tolerance:
- Decreasing specific IgE/IgE ratio
- Increasing specific IgG4
- Basophil activation test changes
- T-cell proliferation patterns
- Epitope diversity (fewer epitopes recognized = more likely tolerance)

Biologic therapies:

Omalizumab (anti-IgE):
- Binds circulating IgE, prevents mast cell sensitization
- FDA approved for food allergy (December 2023)
- Reduces reactions to multiple foods
- Allows faster OIT up-dosing
- Reduces OIT side effects
- Monthly injections

Other biologics under investigation:
- Dupilumab (anti-IL-4Ralpha): Blocks IL-4 and IL-13
- Ligelizumab (next-generation anti-IgE): Higher affinity than omalizumab
- Tezepelumab (anti-TSLP): Epithelial cytokine blockade

Mechanism in food allergy:
- Reduces allergic inflammation
- May facilitate tolerance induction
- Protection lost when discontinued

Epicutaneous immunotherapy (EPIT):

Mechanism:
- Allergen delivered via skin patch
- Low doses continuously presented to immune system
- Induces immune changes without systemic exposure

Peanut EPIT:
- Viaskin Peanut patch
- Daily application
- Favorable safety profile (minimal systemic reactions)
- Modest efficacy (67% achieved pre-specified threshold vs 25% placebo)
- FDA review ongoing

Advantages:
- Excellent safety
- No daily oral dosing required
- May be suitable for patients who fail OIT

Eosinophilic esophagitis (EoE) and food allergy:

Overlap syndrome:
- Some patients have both IgE-mediated food allergy and EoE
- Different mechanisms but shared triggers
- OIT contraindicated in active EoE (may worsen)

Management considerations:
- EGD with biopsy if dysphagia or abdominal pain
- Six-food elimination diet or elemental diet for EoE
- Treat EoE before considering OIT

Microbiome and food allergy:

Observations:
- Reduced microbial diversity in allergic individuals
- Specific bacteria associated with protection (Clostridia, Bacteroides)
- Dysbiosis precedes allergy development

Mechanisms:
- Microbial metabolites (SCFAs) promote Treg development
- TLR stimulation affects immune maturation
- Gut barrier function modulation

Therapeutic approaches:
- Probiotics: Mixed results in prevention/treatment
- Prebiotics: Oligosaccharides may be beneficial
- Synbiotics: Combination approaches
- Fecal microbiota transplantation: Experimental

Genetics and genomics:

Heritability:
- Food allergy has genetic component
- Twin studies show higher concordance in identical twins
- Multiple genes involved (polygenic)

Associated genetic variants:
- FLG (filaggrin): Barrier dysfunction, eczema, food allergy
- HLA associations (peanut, hazelnut)
- C11orf30/LRRC32: Treg function
- IL4, IL13, STAT6: Th2 pathway

Epigenetics:
- DNA methylation patterns associated with food allergy
- May mediate environmental effects
- Potential therapeutic targets

Health disparities in food allergy:

Prevalence differences:
- Higher rates in urban vs rural areas
- Possible higher rates in some minority populations (data mixed)

Access to care:
- Specialty allergy care less accessible in underserved areas
- Cost of epinephrine auto-injectors prohibitive for some
- Limited access to OIT and clinical trials

Food insecurity:
- Difficult to avoid allergenic foods with limited food options
- Higher risk of accidental exposure
- Food pantries may lack allergen labeling

Research and policy needs:
- Diverse representation in clinical trials
- Cost reduction strategies for medications
- Community-based interventions
- Cultural sensitivity in education

Environmental factors:

Vitamin D:
- Deficiency associated with increased allergy risk
- Mechanism: Immune regulation, barrier function
- Supplementation in deficient individuals

Dietary factors:
- Omega-3 fatty acids may be protective
- Antioxidants and polyphenols
- Processed foods and emulsifiers (disrupt microbiome)

Hygiene hypothesis:
- Early microbial exposure protective
- Farm environment protective
- Pets may be protective
- Sibling effect (more siblings = lower allergy risk)

Future directions:

Tolerance induction:
- Combination therapies (OIT + biologic)
- Sequential epitope-specific immunotherapy
- Engineered proteins with reduced allergenicity
- Nanoparticle-based approaches

Prevention:
- Prenatal interventions
- Infant microbiome optimization
- Early multi-allergen introduction

Diagnostics:
- Basophil activation testing standardization
- Mast cell activation tests
- Exosome-based diagnostics
- Artificial intelligence for risk prediction

Policy and public health:
- Food labeling improvements
- Restaurant accommodation laws
- School guidelines standardization
- Epinephrine stock laws in public places`,
      keyTerms: [
        { term: 'epicutaneous immunotherapy', definition: 'Allergen delivery through skin patch to induce tolerance' },
        { term: 'eosinophilic esophagitis', definition: 'Chronic immune-mediated esophageal disease characterized by eosinophils' },
        { term: 'short chain fatty acids', definition: 'Microbial metabolites promoting regulatory T-cell development' },
        { term: 'filaggrin', definition: 'Protein important for skin barrier; FLG mutations associated with atopic disease' },
        { term: 'blocking antibodies', definition: 'IgG4 antibodies that block allergen binding to mast cell IgE' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Multiple food allergy management:
- Common in highly atopic individuals
- Nutritional consultation essential
- Consider biologics (omalizumab) for multi-food allergy
- Multi-allergen OIT under investigation
- Prioritize based on reaction history and nutritional importance

Idiopathic anaphylaxis:
- Anaphylaxis without identified trigger
- Consider hidden food allergens
- Alpha-gal syndrome (delayed mammalian meat allergy from tick bite)
- Exercise-induced anaphylaxis
- Mast cell activation syndrome

Alpha-gal syndrome:
- Delayed anaphylaxis 3-6 hours after mammalian meat
- IgE to galactose-alpha-1,3-galactose
- Tick bite (Lone Star tick) induces sensitization
- Avoid mammalian meat and products
- Cetuximab reaction if given

Food protein-induced enterocolitis (FPIES):
- Non-IgE-mediated; delayed vomiting, lethargy, diarrhea
- Triggered by milk, soy, grains, others
- Acute: Severe vomiting, lethargy, pallor 1-4 hours post-ingestion
- Chronic: Failure to thrive, chronic diarrhea
- Diagnosis: History; negative IgE testing
- Treatment: Acute - IV fluids; Chronic - avoidance
- Most outgrow by age 3-5

Occupational food allergies:
- Bakers (wheat, enzymes)
- Seafood processors
- Chefs and food handlers
- Consider in adult-onset food allergy
- May require career modification

Research frontiers:
- CRISPR gene editing for food allergy
- Tolerance-promoting nanoparticles
- Microbiome engineering
- Predictive modeling for natural tolerance development
- Personalized immunotherapy protocols`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Middleton\'s Allergy: Principles and Practice', authors: ['Burks AW', 'Holgate ST', 'O\'Hehir RE'], source: 'Elsevier', chapter: 'Chapter 81: Food Allergy' },
    { id: '2', type: 'article', title: 'Addendum Guidelines for the Prevention of Peanut Allergy in the United States', authors: ['Togias A', 'Cooper SF', 'Acebal ML'], source: 'Pediatrics', chapter: '2017' }
  ],
  crossReferences: [
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'parent' },
    { targetId: 'atopic-dermatitis', targetType: 'condition', relationship: 'related' },
    { targetId: 'food-allergy', targetType: 'condition', relationship: 'sibling' }
  ],
  tags: {
    systems: ['allergy-immunology', 'gastrointestinal'],
    topics: ['food allergy', 'anaphylaxis', 'IgE-mediated disease', 'immunotherapy'],
    keywords: ['food allergy', 'anaphylaxis', 'epinephrine', 'oral immunotherapy', 'peanut allergy'],
    clinicalRelevance: 'critical'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
