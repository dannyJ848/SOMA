import { EducationalContent } from '../types';

export const allergicAsthmaContent: EducationalContent = {
  id: 'allergic-asthma',
  type: 'condition',
  name: 'Allergic Asthma',
  alternateNames: ['Atopic Asthma', 'Extrinsic Asthma', 'Allergy-Triggered Asthma'],
  hpoId: 'HP:0002089',
  levels: {
    1: {
      level: 1,
      summary: 'Allergic asthma is asthma that is triggered by things you breathe in, like pollen, dust mites, or pet dander.',
      explanation: 'Asthma makes it hard to breathe because the tubes that carry air to your lungs get narrow and swollen. In allergic asthma, breathing in allergens sets off this reaction. Your body makes extra mucus and the muscles around your airways squeeze tight. This can cause wheezing (a whistling sound when breathing), coughing, chest tightness, and trouble breathing. Knowing what triggers your asthma and avoiding those triggers can help prevent attacks.',
      keyTerms: [
        { term: 'wheezing', definition: 'A whistling sound when breathing, often with asthma' },
        { term: 'inhaler', definition: 'Device that delivers asthma medicine directly to lungs' },
        { term: 'trigger', definition: 'Something that sets off asthma symptoms' }
      ],
      analogies: [
        'Asthma is like breathing through a straw that keeps getting smaller.',
        'Your airways during an asthma attack are like a traffic jam - nothing can get through easily.'
      ],
      examples: [
        'Pollen from trees, grasses, and weeds can trigger allergic asthma',
        'Dust mites in bedding are common asthma triggers',
        'Cat and dog dander can cause asthma attacks in allergic people'
      ],
      patientCounselingPoints: [
        'Use allergy-proof covers on pillows and mattresses',
        'Remove carpets from bedrooms to reduce dust mites',
        'Keep pets out of the bedroom if you are allergic'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergic asthma is the most common type of asthma, caused by exposure to allergens that trigger airway inflammation and bronchoconstriction.',
      explanation: 'In allergic asthma, inhaled allergens trigger IgE-mediated reactions in the airways. Mast cells release histamine, leukotrienes, and other mediators causing bronchospasm, edema, and mucus production. Common triggers include pollen, dust mites, pet dander, mold, and cockroach allergens. The connection between allergies and asthma is strong - most children and about half of adults with asthma have allergies. This is part of the "atopic march" where eczema and allergies in childhood progress to asthma.',
      keyTerms: [
        { term: 'bronchoconstriction', definition: 'Tightening of muscles around airways', pronunciation: 'brong-koh-kun-STRIK-shun' },
        { term: 'atopic march', definition: 'Progression from eczema to allergies to asthma' },
        { term: 'persistent asthma', definition: 'Asthma with frequent symptoms requiring daily controller medicine' },
        { term: 'intermittent asthma', definition: 'Asthma with occasional symptoms, usually triggered' },
        { term: 'inhaled corticosteroid', definition: 'Daily medicine that reduces airway inflammation' }
      ],
      analogies: [
        'The atopic march is like an allergic road that starts with eczema and ends at asthma',
        'Inhaled corticosteroids are like daily exercise for your lungs - they keep them strong'
      ],
      examples: [
        'Children with eczema have a higher risk of developing allergic asthma',
        'Dust mite allergy is strongly linked to asthma severity',
        'Occupational asthma can develop from workplace allergen exposure'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergic asthma is a TH2-mediated inflammatory disease of the airways characterized by eosinophilic inflammation, bronchial hyperresponsiveness, and variable airflow obstruction.',
      explanation: 'Allergen exposure in sensitized individuals triggers a biphasic response: the early asthmatic response (minutes) involves IgE-mediated mast cell degranulation causing bronchospasm. The late asthmatic response (4-12 hours) involves TH2 cytokines (IL-4, IL-5, IL-13), eosinophil recruitment, and sustained inflammation. Airway remodeling from chronic inflammation includes subepithelial fibrosis, smooth muscle hypertrophy, and goblet cell hyperplasia. The unified airway concept explains the strong association between allergic rhinitis and asthma - shared inflammatory pathways mean treating rhinitis improves asthma control.',
      keyTerms: [
        { term: 'bronchial hyperresponsiveness', definition: 'Excessive airway narrowing to stimuli' },
        { term: 'airway remodeling', definition: 'Permanent structural changes from chronic inflammation' },
        { term: 'eosinophilic inflammation', definition: 'Eosinophil-predominant inflammation typical of allergic asthma' },
        { term: 'goblet cell hyperplasia', definition: 'Increased mucus-producing cells in airways' },
        { term: 'unified airway', definition: 'Concept that upper and lower airways share disease' }
      ],
      examples: [
        'Eosinophils release toxic proteins that damage airway epithelium',
        'IL-5 is the key cytokine for eosinophil maturation and survival',
        'Subepithelial fibrosis thickens the basement membrane, reducing airway flexibility'
      ]
    },
    4: {
      level: 4,
      summary: 'Allergic asthma involves epithelial-mesenchymal interactions, innate lymphoid cell activation, and complex cytokine networks that drive chronic airway inflammation.',
      explanation: 'Airway epithelial cells damaged by allergens release alarmins (TSLP, IL-33, IL-25) which activate ILC2 cells to produce TH2 cytokines independently of adaptive immunity. This "type 2 inflammation" involves IL-4 (IgE class switching), IL-5 (eosinophilopoiesis), IL-13 (airway hyperresponsiveness, mucus production), and IL-9 (mast cell growth). Environmental factors including viral infections (RSV, rhinovirus), pollution, and microbiome dysbiosis influence asthma development and severity. The hygiene hypothesis proposes reduced early microbial exposure impairs regulatory T cell development, favoring TH2 polarization.',
      keyTerms: [
        { term: 'type 2 inflammation', definition: 'IL-4/5/13 driven allergic inflammation' },
        { term: 'alarmins', definition: 'Epithelial cytokines (TSLP, IL-33, IL-25) initiating inflammation' },
        { term: 'ILC2', definition: 'Type 2 innate lymphoid cells producing TH2 cytokines' },
        { term: 'eosinophilopoiesis', definition: 'Production of eosinophils in bone marrow' },
        { term: 'class switching', definition: 'B cell change to produce specific antibody isotype (IgE)' }
      ],
      clinicalNotes: 'FeNO (fractional exhaled NO) is a biomarker of TH2 inflammation. Blood eosinophils (>300 cells/mcL) predict response to biologics targeting IL-5 or IL-4R.'
    },
    5: {
      level: 5,
      summary: 'Management of allergic asthma requires stepwise approach with controller medications, biologics for severe disease, allergen avoidance, and immunotherapy based on phenotype and biomarker assessment.',
      explanation: 'GINA 2023 guidelines: Step 1-2 PRN SABA alone no longer recommended. All asthma patients should receive ICS-containing therapy. Options include low-dose ICS-formoterol as needed (MART) or daily ICS with SABA PRN. For persistent asthma: medium-dose ICS, add LABD, then consider LAMA, biologic, or allergen immunotherapy. Biologics: omalizumab (anti-IgE) for allergic asthma with elevated IgE; mepolizumab, benralizumab, reslizumab (anti-IL-5) for eosinophilic asthma; dupilumab (IL-4R antagonist) for moderate-severe asthma with Type 2 inflammation. Allergen immunotherapy (SCIT or SLIT) can be disease-modifying when single allergen is clearly identified.',
      keyTerms: [
        { term: 'GINA', definition: 'Global Initiative for Asthma - evidence-based guidelines' },
        { term: 'SMART/MART', definition: 'Single maintenance and reliever therapy (ICS-formoterol as needed)' },
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide - TH2 inflammation marker' },
        { term: 'biologic', definition: 'Monoclonal antibody targeting specific inflammatory pathways' },
        { term: 'ICS', definition: 'Inhaled corticosteroid - cornerstone of asthma controller therapy' }
      ],
      clinicalNotes: 'Severe asthma: requires high-dose ICS-LABA plus second controller (LAMA, biologic) or oral corticosteroids to maintain control. Phenotype: allergic (IgE), eosinophilic (IL-5), paucigranulocytic, or neutrophilic. Biologic selection: IgE + perennial allergen = omalizumab; blood eosinophils >300 = anti-IL-5; FeNO/eosinophils = dupilumab.'
    }
  },
  media: [],
  citations: [
    {
      id: 'gina-2023',
      type: 'article',
      title: 'Global Strategy for Asthma Management and Prevention',
      source: 'Global Initiative for Asthma',
      authors: ['GINA Science Committee'],
      url: 'https://ginasthma.org/gina-reports/'
    },
    {
      id: 'aaaaai-asthma',
      type: 'website',
      title: 'Allergic Asthma',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/asthma'
    },
    {
      id: 'unified-airway-2019',
      type: 'article',
      title: 'United airway disease: Integrated approach to respiratory health',
      source: 'Current Opinion in Allergy and Clinical Immunology',
      authors: ['Passalacqua G', 'Canonica GW'],
      url: 'https://journals.lww.com/co-allergy/Abstract/2019/02000/United_airway_disease__integrated_approach_to.4.aspx'
    }
  ],
  crossReferences: [
    { targetId: 'allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
    { targetId: 'allergy-basics', targetType: 'topic', relationship: 'parent' },
    { targetId: 'allergy-testing', targetType: 'topic', relationship: 'related' },
    { targetId: 'immunotherapy', targetType: 'topic', relationship: 'related' }
  ],
  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pathology', 'clinical', 'pulmonology'],
    keywords: ['asthma', 'allergic asthma', 'atopic asthma', 'bronchoconstriction', 'GINA', 'biologics'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics', 'pulmonology'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
