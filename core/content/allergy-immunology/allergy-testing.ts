import { EducationalContent } from '../types';

export const allergyTestingContent: EducationalContent = {
  id: 'allergy-testing',
  type: 'topic',
  name: 'Allergy Testing',
  alternateNames: ['Allergy Diagnostic Testing', 'Allergen Testing', 'Hypersensitivity Testing'],
  levels: {
    1: {
      level: 1,
      summary: 'Allergy tests help doctors find out what you are allergic to by checking how your body reacts to tiny amounts of allergens.',
      explanation: 'When you have allergies, it helps to know exactly what triggers your symptoms. Allergy tests are like detective work for your immune system. The most common test is the skin prick test, where a tiny drop of allergen is placed on your skin and the skin is slightly pricked. If you are allergic, you get a small bump like a mosquito bite. Blood tests can also measure allergy antibodies in your blood. These tests help your doctor create the right treatment plan.',
      keyTerms: [
        { term: 'skin prick test', definition: 'Allergy test that puts tiny amounts of allergens on skin' },
        { term: 'blood test', definition: 'Lab test that measures allergy antibodies in blood' },
        { term: 'wheal', definition: 'Small raised bump that shows a positive allergy test', pronunciation: 'weel' }
      ],
      analogies: [
        'A skin prick test is like giving your skin a tiny taste of an allergen to see its reaction.',
        'Allergy testing is like checking which keys fit into the locks on your immune cells.'
      ],
      examples: [
        'Skin testing can check for allergies to pollen, dust mites, pets, and foods',
        'Blood tests are used if skin tests cannot be done',
        'Food challenges involve eating small amounts of a food under medical supervision'
      ],
      patientCounselingPoints: [
        'Stop antihistamines for several days before skin testing',
        'Wear loose clothing to your allergy testing appointment',
        'Bring a list of suspected allergens and your medical history'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergy testing includes skin tests, blood tests, and challenge procedures to identify specific allergens triggering allergic symptoms.',
      explanation: 'Skin prick testing is the most common allergy test. A small amount of allergen extract is placed on the skin and the surface is pricked. Positive results appear as a wheal (raised bump) and flare (redness) within 15-20 minutes. Intradermal testing injects allergen deeper into the skin and is more sensitive. Blood tests (specific IgE or ImmunoCAP) measure the amount of IgE antibodies against specific allergens. Challenge tests involve gradual exposure to an allergen under medical supervision to confirm or rule out allergy.',
      keyTerms: [
        { term: 'specific IgE', definition: 'Blood test measuring antibodies against specific allergens' },
        { term: 'intradermal test', definition: 'Allergen injected into deeper skin layers' },
        { term: 'positive control', definition: 'Histamine test that should always react to confirm test works' },
        { term: 'negative control', definition: 'Saltwater test that should not react to identify sensitive skin' },
        { term: 'oral food challenge', definition: 'Gradual eating of food under supervision to test for allergy' }
      ],
      analogies: [
        'Positive and negative controls are like checking a calculator works with 2+2=2 before doing math.',
        'Oral food challenge is like a taste test where you slowly try increasing amounts.'
      ],
      examples: [
        'A panel of 50 allergens can be tested at once using skin prick testing',
        'Blood tests are useful when skin tests cannot be performed (severe eczema)',
        'Drug challenges are done to confirm penicillin allergy when needed'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergy testing employs in vivo (skin testing, challenge) and in vitro (serum specific IgE, cellular assays) methods to diagnose IgE-mediated and non-IgE-mediated hypersensitivity.',
      explanation: 'Skin prick testing has high sensitivity (>90%) and moderate specificity, making it excellent for ruling out allergy but occasionally yielding false positives (irritant reactions). Intradermal testing is 100-1000 times more sensitive, used when prick tests are negative but clinical suspicion remains. Serum specific IgE (ImmunoCAP, Immulite) quantifies allergen-specific antibodies with levels predicting clinical likelihood. Component-resolved diagnostics (CRD) identifies sensitization to specific allergen proteins (e.g., Ara h 2 for peanut) distinguishing primary sensitization from cross-reactivity. Challenge tests (oral, nasal, bronchial) remain the gold standard for diagnosis.',
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'Testing for specific allergen proteins rather than whole extracts' },
        { term: 'cross-reactive carbohydrate determinant', definition: 'Sugar moiety causing false positives (CCD)' },
        { term: 'gold standard', definition: 'Best available diagnostic test (often challenge)' },
        { term: 'sensitivity', definition: 'Ability of a test to correctly identify those with disease' },
        { term: 'specificity', definition: 'Ability of a test to correctly identify those without disease' }
      ],
      examples: [
        'Birch pollen allergy can cause positive tests to apple due to cross-reactivity (Bet v 1 vs Mal d 1)',
        'Ara h 2 component testing predicts clinical peanut allergy better than whole peanut IgE',
        'Eosinophilic esophalitis cannot be diagnosed by standard IgE testing'
      ]
    },
    4: {
      level: 4,
      summary: 'Allergy testing interpretation requires understanding of test performance characteristics, pre-test probability, and the distinction between sensitization and clinical allergy.',
      explanation: 'Positive allergy tests indicate sensitization (presence of IgE), not necessarily clinical allergy (symptoms upon exposure). Up to 50% of the population may be sensitized to common aeroallergens but asymptomatic. The likelihood ratio depends on the magnitude of reaction: larger wheals (skin) or higher IgE levels (blood) correlate with increased probability. Predictive values vary by population prevalence. Testing should be guided by history - indiscriminate panels generate false positives. Basophil activation test (BAT) measures CD63/CD203c upregulation, useful when skin/IgE testing is discordant with history.',
      keyTerms: [
        { term: 'sensitization', definition: 'IgE production against allergen, with or without symptoms' },
        { term: 'clinical allergy', definition: 'Symptomatic reaction upon allergen exposure' },
        { term: 'positive predictive value', definition: 'Probability that positive test equals true allergy' },
        { term: 'negative predictive value', definition: 'Probability that negative test equals no allergy' },
        { term: 'basophil activation test', definition: 'Functional assay measuring basophil response to allergen' }
      ],
      clinicalNotes: 'Aeroallergen IgE levels (kU/L): >0.35 positive, >17 highly likely clinical. Food-specific IgE decision points vary by food and age: e.g., peanut IgE >14 kU/L has 95% PPV in children.'
    },
    5: {
      level: 5,
      summary: 'Allergy testing selection and interpretation follow evidence-based algorithms considering clinical context, test characteristics, and guidelines from AAAAI, ACAAI, and international organizations.',
      explanation: 'Testing approach: Start with detailed history to generate differential diagnosis. For IgE-mediated disease: skin testing first-line for most patients (immediate results, higher sensitivity, lower cost). Blood tests (specific IgE, CRD) when: antihistamines cannot be stopped, extensive dermatitis, high anaphylaxis risk, or patient preference. Patch testing for allergic contact dermatitis (Type IV) using T.R.U.E. test or series based on occupation. Component testing for: pollen-food syndromes, peanut/seed allergy, and when clarifying cross-reactivity. Challenges performed under supervision when: excluding allergy after negative testing, establishing tolerance development, or when history and testing are discordant.',
      keyTerms: [
        { term: 'T.R.U.E. test', definition: 'Thin-layer Rapid Use Epicutaneous test - standard patch panel' },
        { term: 'elimination diet', definition: 'Removal of suspected foods followed by supervised challenge' },
        { term: 'double-blind placebo-controlled food challenge', definition: 'Gold standard food challenge, neither patient nor provider knows allergen timing' },
        { term: 'open food challenge', definition: 'Patient and provider both know allergen; less definitive but practical' },
        { term: 'nasal provocation', definition: 'Direct allergen application to nasal mucosa to confirm rhinitis trigger' }
      ],
      clinicalNotes: 'Pre-testing: stop antihistamines 3-7 days (shorter for loratadine/fexofenadine, longer for hydroxyzine). Tricyclic antidepressants may interfere. Beta-blockers do NOT contraindicate skin testing but may increase severity if reaction occurs. Resuscitation equipment must be immediately available.'
    }
  },
  media: [],
  citations: [
    {
      id: 'aaaai-testing',
      type: 'website',
      title: 'Allergy Testing',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/allergies/allergy-testing'
    },
    {
      id: 'acaai-testing',
      type: 'website',
      title: 'Allergy Tests: When You Need Them and What They Mean',
      source: 'American College of Allergy, Asthma & Immunology',
      url: 'https://acaai.org/allergies/types/allergy-testing/'
    },
    {
      id: 'crd-review-2020',
      type: 'article',
      title: 'Component-Resolved Diagnostics in Allergy',
      source: 'Journal of Allergy and Clinical Immunology',
      authors: ['Valenta R', 'Niederberger V'],
      url: 'https://www.jacionline.org/article/S0091-6749(20)30001-0/fulltext'
    }
  ],
  crossReferences: [
    { targetId: 'allergy-basics', targetType: 'topic', relationship: 'related' },
    { targetId: 'allergic-rhinitis', targetType: 'condition', relationship: 'related' },
    { targetId: 'food-allergies', targetType: 'condition', relationship: 'related' },
    { targetId: 'immunotherapy', targetType: 'topic', relationship: 'related' }
  ],
  tags: {
    systems: ['immune'],
    topics: ['diagnosis', 'laboratory', 'clinical'],
    keywords: ['skin testing', 'IgE', 'ImmunoCAP', 'oral food challenge', 'patch testing', 'component testing'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
