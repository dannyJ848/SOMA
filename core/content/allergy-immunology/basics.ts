import { EducationalContent } from '../types';

export const allergyBasicsContent: EducationalContent = {
  id: 'allergy-basics',
  type: 'topic',
  name: 'Allergy and Immune Hypersensitivity',
  alternateNames: ['Allergic Disease', 'Hypersensitivity', 'Atopy'],
  levels: {
    1: {
      level: 1,
      summary: 'Allergies happen when your immune system overreacts to harmless things like pollen, pet dander, or food.',
      explanation: 'Your immune system is like a security guard that protects your body from germs. But sometimes, the security guard makes a mistake and attacks harmless things like pollen or peanuts. This mistake causes an allergic reaction. Symptoms can include sneezing, itching, rashes, or trouble breathing. About 1 in 5 people have some kind of allergy.',
      keyTerms: [
        { term: 'allergen', definition: 'A normally harmless substance that causes an allergic reaction' },
        { term: 'immune system', definition: 'Your body defense system that fights infections' },
        { term: 'histamine', definition: 'A chemical released during allergies that causes symptoms' }
      ],
      analogies: [
        'Your immune system is like a security alarm that sometimes goes off when a leaf blows by instead of a real burglar.',
        'An allergen is like a guest that your body mistakenly thinks is an intruder.'
      ],
      examples: [
        'Pollen from trees, grasses, and weeds causes hay fever',
        'Peanuts and shellfish can cause severe food allergies',
        'Cat and dog dander can trigger pet allergies'
      ],
      patientCounselingPoints: [
        'Avoid known allergens when possible',
        'Over-the-counter antihistamines can help mild symptoms',
        'See a doctor if allergies interfere with daily life'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergies are inappropriate immune responses to typically harmless substances called allergens, affecting millions of people worldwide.',
      explanation: 'When a person with allergies encounters an allergen, their immune system produces IgE antibodies that recognize the substance as harmful. These antibodies attach to mast cells and basophils. On subsequent exposure, the allergen binds to these antibodies, triggering the release of inflammatory chemicals like histamine, leukotrienes, and cytokines. This release causes allergy symptoms such as sneezing, itching, swelling, and mucus production.',
      keyTerms: [
        { term: 'IgE', definition: 'Immunoglobulin E, the antibody type responsible for allergic reactions', pronunciation: 'I-G-E' },
        { term: 'mast cell', definition: 'A type of immune cell that contains histamine and other inflammatory chemicals' },
        { term: 'atopy', definition: 'The genetic tendency to develop allergic diseases', pronunciation: 'AY-toh-pee' },
        { term: 'sensitization', definition: 'The first exposure to an allergen that primes the immune system' }
      ],
      analogies: [
        'IgE antibodies are like wanted posters that tell immune cells what to attack',
        'Mast cells are like water balloons full of chemicals that burst when triggered'
      ],
      examples: [
        'Seasonal allergies (hay fever) affect millions each year',
        'Dust mites in bedding are a common year-round allergen',
        'Mold spores can trigger allergies in damp environments'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergic disorders represent a spectrum of IgE-mediated and non-IgE-mediated hypersensitivity reactions characterized by dysregulated immune responses to environmental antigens.',
      explanation: 'The Gell and Coombs classification defines four types of hypersensitivity reactions. Type I (immediate) hypersensitivity is IgE-mediated and responsible for most allergic diseases. Upon initial sensitization, allergen-specific IgE binds Fc receptors on mast cells and basophils. Re-exposure crosslinks IgE, causing degranulation and release of preformed mediators (histamine, tryptase) and synthesis of newly formed mediators (leukotrienes, prostaglandins, cytokines). These mediators increase vascular permeability, cause smooth muscle contraction, and attract inflammatory cells.',
      keyTerms: [
        { term: 'Type I hypersensitivity', definition: 'IgE-mediated immediate allergic reaction' },
        { term: 'degranulation', definition: 'Release of inflammatory mediators from mast cells' },
        { term: 'Fc receptor', definition: 'Binding site on immune cells for antibodies' },
        { term: 'TH2 response', definition: 'T helper 2 cell dominance that promotes IgE production' },
        { term: 'eosinophil', definition: 'White blood cell involved in allergic inflammation', pronunciation: 'ee-oh-SIN-oh-fil' }
      ],
      examples: [
        'Anaphylaxis represents systemic Type I hypersensitivity',
        'Allergic rhinitis demonstrates localized Type I reaction',
        'Atopic dermatitis involves both Type I and Type IV mechanisms'
      ]
    },
    4: {
      level: 4,
      summary: 'Allergic diseases arise from complex interactions between genetic predisposition, environmental exposures, and immune dysregulation involving multiple cell types and inflammatory pathways.',
      explanation: 'Atopic individuals exhibit genetic polymorphisms in epithelial barrier proteins (filaggrin, claudins), pattern recognition receptors, and cytokine signaling pathways (IL-4, IL-5, IL-13, IL-31, TSLP). Epithelial barrier dysfunction allows allergen penetration and dendritic cell activation. Dendritic cells present allergen to naive T cells, promoting TH2 differentiation through OX40L-OX40 interaction and cytokine secretion. TH2 cytokines drive B cell class switching to IgE via IL-4/IL-13 signaling through STAT6. Chronic allergic inflammation involves tissue remodeling, fibrosis, and structural changes mediated by growth factors and matrix metalloproteinases.',
      keyTerms: [
        { term: 'filaggrin', definition: 'Epithelial barrier protein; mutations increase atopy risk', pronunciation: 'fill-AG-grin' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin, epithelial cytokine initiating TH2 responses' },
        { term: 'class switching', definition: 'Genetic recombination changing antibody isotype to IgE' },
        { term: 'STAT6', definition: 'Signal transducer activating transcription of IgE genes' },
        { term: 'remodeling', definition: 'Permanent structural changes in tissues from chronic inflammation' }
      ],
      clinicalNotes: 'The "atopic march" describes progression from atopic dermatitis to allergic rhinitis and asthma. Early intervention may modify disease trajectory.'
    },
    5: {
      level: 5,
      summary: 'Allergic disorders require comprehensive management integrating diagnosis, avoidance strategies, pharmacotherapy, and immunotherapy based on evidence-based guidelines and individual patient factors.',
      explanation: 'Diagnosis involves detailed history, physical examination, and confirmatory testing including skin prick testing, serum specific IgE, and component-resolved diagnostics. The AAAAI/ACAAI joint task force provides guidance on interpretation. Pharmacologic management includes antihistamines (H1 blockers), intranasal corticosteroids, leukotriene receptor antagonists, and biologics (omalizumab, mepolizumab, dupilumab). Allergen immunotherapy modifies disease through induction of regulatory T cells, IgG blocking antibodies, and decreased TH2 responses. Emergency anaphylaxis management requires immediate epinephrine intramuscular injection.',
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'Testing for specific allergen proteins to assess cross-reactivity' },
        { term: 'omalizumab', definition: 'Anti-IgE monoclonal antibody for severe asthma and chronic urticaria' },
        { term: 'dupilumab', definition: 'IL-4 receptor alpha antagonist for atopic dermatitis, asthma, CRSwNP' },
        { term: 'regulatory T cells', definition: 'Tregs modulate immune tolerance; induced by immunotherapy' },
        { term: 'epinephrine', definition: 'First-line treatment for anaphylaxis; alpha and beta effects' }
      ],
      clinicalNotes: 'Guidelines: AAAAI, ACAAI, EAACI, and NIAID Expert Panel. Anaphylaxis: IM epinephrine 0.3-0.5mg (1:1000) in mid-anterolateral thigh every 5-15 minutes.'
    }
  },
  media: [],
  citations: [
    {
      id: 'aaaaai-allergy-basics',
      type: 'website',
      title: 'What is an Allergist?',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/library/atoz-allergy-guide'
    },
    {
      id: 'acaai-allergies',
      type: 'website',
      title: 'Allergies',
      source: 'American College of Allergy, Asthma & Immunology',
      url: 'https://acaai.org/allergies/'
    },
    {
      id: 'nIAID-guidelines-2021',
      type: 'article',
      title: 'Guidelines for the Diagnosis and Management of Food Allergy',
      source: 'NIAID Expert Panel',
      url: 'https://www.niaid.nih.gov/research/food-allergy-guidelines'
    }
  ],
  crossReferences: [
    { targetId: 'allergic-rhinitis', targetType: 'condition', relationship: 'related' },
    { targetId: 'food-allergies', targetType: 'condition', relationship: 'related' },
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'related' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent' }
  ],
  tags: {
    systems: ['immune'],
    topics: ['immunology', 'pathology'],
    keywords: ['allergy', 'hypersensitivity', 'atopy', 'IgE', 'mast cell', 'histamine'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
