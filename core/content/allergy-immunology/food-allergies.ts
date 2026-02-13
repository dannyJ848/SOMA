import { EducationalContent } from '../types';

export const foodAllergiesContent: EducationalContent = {
  id: 'food-allergies',
  type: 'condition',
  name: 'Food Allergy',
  alternateNames: ['Food Hypersensitivity', 'IgE-Mediated Food Allergy', 'Food Allergen Sensitivity'],
  hpoId: 'HP:0003227',
  levels: {
    1: {
      level: 1,
      summary: 'A food allergy is when your immune system mistakes a harmless food as dangerous and reacts badly, sometimes causing severe reactions.',
      explanation: 'When someone has a food allergy, eating even a tiny amount of that food acts like pressing a panic button in their body. The immune system attacks the food as if it were a harmful germ. This can cause hives, swelling, stomach problems, trouble breathing, or even a dangerous reaction called anaphylaxis. Common foods that cause allergies include peanuts, tree nuts, milk, eggs, fish, shellfish, soy, and wheat. People with severe allergies must always carry emergency medicine and be very careful about what they eat.',
      keyTerms: [
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction', pronunciation: 'an-uh-fih-LAK-sis' },
        { term: 'allergen', definition: 'A food that causes an allergic reaction' },
        { term: 'epinephrine', definition: 'Emergency medicine for severe allergic reactions', pronunciation: 'ep-ih-NEF-rin' }
      ],
      analogies: [
        'A food allergy is like a security system that attacks when a friend comes to the door.',
        'Your immune system treats a peanut like it is a dangerous virus.'
      ],
      examples: [
        'Peanut allergy is one of the most common and severe food allergies',
        'Milk allergy is common in babies and young children',
        'Shellfish allergy often develops in adulthood'
      ],
      patientCounselingPoints: [
        'Always read food labels carefully for hidden allergens',
        'Carry epinephrine auto-injector if prescribed',
        'Have an action plan for accidental exposure'
      ]
    },
    2: {
      level: 2,
      summary: 'Food allergy is an abnormal immune response to food proteins, affecting approximately 8% of children and 4% of adults.',
      explanation: 'In IgE-mediated food allergy, the immune system produces specific IgE antibodies against food proteins. Upon re-exposure, the allergen crosslinks IgE on mast cells and basophils, causing release of histamine and other mediators. Symptoms can affect the skin (hives, swelling), gastrointestinal tract (nausea, vomiting, diarrhea), respiratory tract (wheezing, throat tightness), or cardiovascular system (hypotension). The "Big Eight" allergens account for 90% of reactions: milk, egg, peanut, tree nuts, fish, shellfish, soy, and wheat. Diagnosis involves history, skin testing, serum specific IgE, and oral food challenges.',
      keyTerms: [
        { term: 'IgE-mediated', definition: 'Type of food allergy caused by IgE antibodies' },
        { term: 'oral food challenge', definition: 'Gradual feeding of suspected allergen under medical supervision' },
        { term: 'urticaria', definition: 'Hives - itchy raised skin welts', pronunciation: 'ur-tih-KAR-ee-uh' },
        { term: 'angioedema', definition: 'Deep swelling in skin or mucous membranes', pronunciation: 'an-jee-oh-eh-DEE-muh' },
        { term: 'cross-reactivity', definition: 'Similar proteins in different foods causing reactions' }
      ],
      analogies: [
        'Oral food challenge is like a taste test with medical supervision',
        'Food proteins are like keys that fit into IgE locks on immune cells'
      ],
      examples: [
        'Peanut and tree nut allergies tend to be lifelong',
        'Milk and egg allergies are often outgrown in childhood',
        'Birch pollen allergy can cross-react with apples (oral allergy syndrome)'
      ]
    },
    3: {
      level: 3,
      summary: 'Food allergy encompasses IgE-mediated, non-IgE-mediated, and mixed immunologic responses to dietary antigens, with clinical manifestations ranging from localized oral symptoms to systemic anaphylaxis.',
      explanation: 'IgE-mediated food allergy follows the typical Type I hypersensitivity pathway. Key food allergens are typically water-soluble glycoproteins resistant to digestion and heat (e.g., Ara h 2 in peanut, ovomucoid in egg). Non-IgE-mediated disorders include food protein-induced enterocolitis syndrome (FPIES), food protein-induced allergic proctocolitis (FPIAP), and celiac disease. These involve T-cell mediated responses, often with delayed onset (hours to days). Mixed mechanisms include eosinophilic esophagitis. The differential diagnosis includes food intolerance (lactase deficiency), pharmacologic reactions (tyramine in aged cheese), and irritable bowel syndrome.',
      keyTerms: [
        { term: 'FPIES', definition: 'Food Protein-Induced Enterocolitis Syndrome - non-IgE mediated' },
        { term: 'eosinophilic esophagitis', definition: 'Eosinophil-predominant inflammation of esophagus from food triggers' },
        { term: 'component-resolved diagnostics', definition: 'Testing specific allergen proteins rather than whole foods' },
        { term: 'oral allergy syndrome', definition: 'Pollen-food cross-reactivity causing mouth itching' },
        { term: 'food protein-induced allergic proctocolitis', definition: 'Non-IgE mediated rectal bleeding in infants from milk/soy' }
      ],
      examples: [
        'Ara h 2 is the major peanut allergen predicting clinical reactivity',
        'Ovomucoid is heat-stable; most egg-allergic patients cannot tolerate cooked egg',
        'FPIES to rice/oat presents with delayed vomiting and dehydration in infants'
      ]
    },
    4: {
      level: 4,
      summary: 'Food allergy involves complex interactions between genetic predisposition, epithelial barrier function, gut microbiome, environmental factors, and immune regulatory mechanisms.',
      explanation: 'The dual allergen exposure hypothesis proposes sensitization occurs through disrupted skin (eczema) while oral exposure induces tolerance. Filaggrin mutations increase transdermal allergen absorption. Gut microbiome diversity in early life promotes regulatory T cell development and oral tolerance. Regulatory mechanisms include deletion of allergen-specific T cells, induction of anergy, and generation of allergen-specific IgG4 blocking antibodies. The hygiene hypothesis and reduced microbial exposure may contribute to rising food allergy prevalence. Early introduction of allergenic foods (LEAP study) prevents peanut allergy in high-risk infants.',
      keyTerms: [
        { term: 'dual allergen exposure hypothesis', definition: 'Skin sensitization vs. oral tolerance pathways' },
        { term: 'oral tolerance', definition: 'Immune non-responsiveness to antigens introduced orally' },
        { term: 'IgG4 blocking antibody', definition: 'Antibody that prevents IgE-allergen binding, induced by immunotherapy' },
        { term: 'regulatory T cell', definition: 'T cell subset that suppresses immune responses, promotes tolerance' },
        { term: 'LEAP study', definition: 'Learning Early About Peanut - demonstrated prevention with early introduction' }
      ],
      clinicalNotes: 'The natural history varies by allergen: 80% outgrow milk/egg allergy by adolescence, but only 20% outgrow peanut/tree nut allergy. Component testing distinguishes sensitization from clinical reactivity.'
    },
    5: {
      level: 5,
      summary: 'Food allergy management requires strict avoidance, emergency preparedness, nutritional optimization, and consideration of immunotherapy based on individual risk assessment and evidence-based guidelines.',
      explanation: 'Acute management of anaphylaxis: IM epinephrine (0.01 mg/kg, max 0.5mg) into mid-anterolateral thigh every 5-15 minutes as needed. Adjunctive measures include H1/H2 antihistamines, corticosteroids, and fluid resuscitation, but these do NOT replace epinephrine. Long-term management involves comprehensive food avoidance education, label reading (FALCPA), and cross-contamination prevention. Immunotherapy options include oral immunotherapy (OIT), sublingual immunotherapy (SLIT), and epicutaneous immunotherapy (EPIT). OIT achieves desensitization in 60-80% but requires ongoing maintenance dosing. Biologics (omalizumab) may facilitate OIT in highly allergic patients.',
      keyTerms: [
        { term: 'oral immunotherapy', definition: 'Gradual dose escalation to induce desensitization' },
        { term: 'desensitization', definition: 'Increased reaction threshold while on regular therapy; lost if stopped' },
        { term: 'FALCPA', definition: 'Food Allergen Labeling and Consumer Protection Act' },
        { term: ' sesame', definition: 'Ninth major allergen added in 2023 (Faster Access to Treatments Act)' },
        { term: 'graded oral challenge', definition: 'Supervised dose escalation to determine reaction threshold' }
      ],
      clinicalNotes: 'NIAID 2021 guidelines: introduce peanut-containing foods at 4-6 months for high-risk infants (severe eczema/egg allergy) after testing/specialist consultation. For moderate risk, introduce freely. Epinephrine auto-injectors come in 0.1mg, 0.15mg, 0.3mg doses based on weight.'
    }
  },
  media: [],
  citations: [
    {
      id: 'niaid-food-allergy-2021',
      type: 'article',
      title: 'Guidelines for the Diagnosis and Management of Food Allergy in the United States: Report from the NIAID Expert Panel',
      source: 'National Institute of Allergy and Infectious Diseases',
      authors: ['Boyce JA', 'Assa ad A', 'Burks AW'],
      url: 'https://www.niaid.nih.gov/research/food-allergy-guidelines'
    },
    {
      id: 'leap-trial-2015',
      type: 'article',
      title: 'Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy',
      source: 'New England Journal of Medicine',
      authors: ['Du Toit G', 'Roberts G', 'Sayre PH'],
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1414850'
    },
    {
      id: 'aaaai-food-allergy',
      type: 'website',
      title: 'Food Allergy',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/allergies/food-allergy'
    }
  ],
  crossReferences: [
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'related' },
    { targetId: 'skin-allergies', targetType: 'condition', relationship: 'related' },
    { targetId: 'allergy-testing', targetType: 'topic', relationship: 'related' },
    { targetId: 'immunotherapy', targetType: 'topic', relationship: 'related' }
  ],
  tags: {
    systems: ['immune', 'digestive'],
    topics: ['pathology', 'clinical', 'pediatrics'],
    keywords: ['food allergy', 'anaphylaxis', 'peanut allergy', 'milk allergy', 'OIT', 'epinephrine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
