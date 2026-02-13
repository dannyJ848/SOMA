import { EducationalContent } from '../types';

export const skinAllergiesContent: EducationalContent = {
  id: 'skin-allergies',
  type: 'condition',
  name: 'Allergic Skin Conditions',
  alternateNames: ['Allergic Dermatitis', 'Eczema', 'Hives', 'Urticaria', 'Atopic Dermatitis'],
  hpoId: 'HP:0011124',
  levels: {
    1: {
      level: 1,
      summary: 'Skin allergies happen when your skin reacts to things you touch, eat, or breathe in, causing itchy rashes, redness, or swelling.',
      explanation: 'Your skin is like a shield that protects your body. But sometimes it gets confused and overreacts to harmless things like soap, jewelry, or plants. This can make your skin red, itchy, and bumpy. Common skin allergies include eczema (dry, itchy patches), hives (raised itchy welts), and contact dermatitis (rash from touching something). These reactions can be uncomfortable but are usually not dangerous unless they affect your breathing.',
      keyTerms: [
        { term: 'eczema', definition: 'Dry, itchy, inflamed skin patches', pronunciation: 'EG-zuh-muh' },
        { term: 'hives', definition: 'Itchy raised welts on the skin' },
        { term: 'rash', definition: 'Red, irritated area of skin' }
      ],
      analogies: [
        'Your skin during an allergic reaction is like a burglar alarm that goes off when a leaf blows by.',
        'Hives are like little hills that pop up on your skin when you touch something you are allergic to.'
      ],
      examples: [
        'Poison ivy causes an itchy blistering rash',
        'Nickel in jewelry can cause red, itchy skin',
        'Eczema often appears in the creases of elbows and knees'
      ],
      patientCounselingPoints: [
        'Moisturize regularly to prevent eczema flares',
        'Avoid scratching which can make rashes worse',
        'Identify and avoid triggers when possible'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergic skin conditions include atopic dermatitis, urticaria, and allergic contact dermatitis, each with distinct triggers and presentations.',
      explanation: 'Atopic dermatitis (eczema) is a chronic inflammatory skin condition associated with allergic rhinitis and asthma ("the atopic triad"). It involves impaired skin barrier function and immune dysregulation. Urticaria (hives) are transient, pruritic, erythematous wheals caused by mast cell degranulation. Angioedema involves deeper swelling of the dermis and subcutaneous tissue. Allergic contact dermatitis is a delayed (Type IV) hypersensitivity reaction to substances contacting the skin, such as poison ivy (urushiol), nickel, or fragrances.',
      keyTerms: [
        { term: 'atopic dermatitis', definition: 'Chronic itchy skin inflammation associated with allergies' },
        { term: 'urticaria', definition: 'Medical term for hives - itchy raised skin welts', pronunciation: 'ur-tih-KAR-ee-uh' },
        { term: 'angioedema', definition: 'Deep tissue swelling, often of face/lips', pronunciation: 'an-jee-oh-eh-DEE-muh' },
        { term: 'contact dermatitis', definition: 'Skin inflammation from direct contact with allergen' },
        { term: 'wheal', definition: 'Raised, itchy hive lesion', pronunciation: 'weel' }
      ],
      analogies: [
        'Contact dermatitis is like your skin remembering a bad encounter days later',
        'Angioedema is like a water balloon deep under your skin'
      ],
      examples: [
        'Poison ivy rash appears 24-72 hours after exposure',
        'Latex allergy can cause contact urticaria immediately',
        'Fragrance in lotions is a common contact allergen'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergic skin disorders encompass IgE-mediated (urticaria, angioedema, atopic dermatitis) and T-cell-mediated (allergic contact dermatitis) conditions with distinct pathophysiologic mechanisms.',
      explanation: 'Urticaria results from cutaneous mast cell degranulation with release of histamine, leukotrienes, and prostaglandins. Acute urticaria lasts <6 weeks and often has identifiable triggers (foods, medications, infections). Chronic urticaria persists >6 weeks; most are idiopathic or autoimmune (anti-IgE or anti-FcRI antibodies). Atopic dermatitis involves TH2-dominant inflammation, filaggrin mutations impairing barrier function, and colonization with S. aureus. Allergic contact dermatitis is a Type IV delayed hypersensitivity: allergens penetrate epidermis, are picked up by Langerhans cells, presented to T cells in lymph nodes, and effector T cells cause inflammation 48-72 hours later.',
      keyTerms: [
        { term: 'acute urticaria', definition: 'Hives lasting less than 6 weeks' },
        { term: 'chronic spontaneous urticaria', definition: 'Hives lasting more than 6 weeks, often autoimmune' },
        { term: 'Langerhans cell', definition: 'Dendritic cell in epidermis that captures antigens' },
        { term: 'Type IV hypersensitivity', definition: 'T-cell mediated delayed reaction (contact dermatitis)' },
        { term: 'filaggrin', definition: 'Skin barrier protein; mutations increase atopic dermatitis risk' }
      ],
      examples: [
        'Acute urticaria from penicillin allergy appears within hours',
        'Chronic urticaria may persist for years with daily flares',
        'Poison ivy urushiol binds skin proteins, creating a hapten complex'
      ]
    },
    4: {
      level: 4,
      summary: 'Allergic skin diseases involve complex interactions between epithelial barrier dysfunction, immune dysregulation, microbial dysbiosis, and neural pathways contributing to chronic inflammation.',
      explanation: 'The atopic march describes the progression from atopic dermatitis to allergic rhinitis and asthma, linked to epithelial barrier defects and TH2 polarization. In atopic dermatitis, the "outside-inside" hypothesis proposes that barrier defects allow allergen penetration, driving IgE sensitization. IL-4, IL-13, IL-31, and TSLP drive inflammation and itch. JAK-STAT signaling mediates cytokine effects. Chronic urticaria involves autoantibodies against IgE or FcRI, complement activation, and basophil histamine-releasing activity. The neuroimmune axis in chronic itch involves TRPV1, PAR2, and neuropeptides like substance P.',
      keyTerms: [
        { term: 'atopic march', definition: 'Progression from atopic dermatitis to allergic rhinitis and asthma' },
        { term: 'JAK-STAT', definition: 'Signaling pathway for cytokines; target for atopic dermatitis treatment' },
        { term: 'outside-inside hypothesis', definition: 'Barrier defects allow allergen entry driving systemic allergy' },
        { term: 'TRPV1', definition: 'Receptor mediating itch and neurogenic inflammation' },
        { term: 'hapten', definition: 'Small molecule that becomes antigenic when bound to protein' }
      ],
      clinicalNotes: 'Approximately 50% of children with severe atopic dermatitis develop asthma. Dupilumab (IL-4R antagonist) has revolutionized treatment of moderate-severe atopic dermatitis.'
    },
    5: {
      level: 5,
      summary: 'Management of allergic skin conditions requires accurate diagnosis, trigger identification, appropriate pharmacotherapy, and advanced therapies for refractory disease based on guideline recommendations.',
      explanation: 'Urticaria treatment: Second-generation antihistamines (cetirizine, fexofenadine, loratadine, levocetirizine) first-line; increase up to 4x standard dose if needed. Add H2 antagonists (famotidine), leukotriene receptor antagonists (montelukast), or omalizumab for refractory cases. Atopic dermatitis treatment: Topical corticosteroids (appropriate potency for body site), topical calcineurin inhibitors (tacrolimus, pimecrolimus) for sensitive areas, and systemic agents for severe disease. Dupilumab, tralokinumab (IL-13), nemolizumab (IL-31), and JAK inhibitors (abrocitinib, upadacitinib, ruxolitinib) are biologic/small molecule options. Contact dermatitis: patch testing identifies allergens; avoidance is primary treatment.',
      keyTerms: [
        { term: 'patch testing', definition: 'Application of allergens to skin to identify contact allergens' },
        { term: 'topical calcineurin inhibitor', definition: 'Tacrolimus/pimecrolimus - steroid-sparing for sensitive areas' },
        { term: 'dupilumab', definition: 'IL-4 receptor alpha antagonist for AD, asthma, CRSwNP' },
        { term: 'wet wrap therapy', definition: 'Dressings over topical medication for severe AD flares' },
        { term: 'Transepidermal water loss', definition: 'Measure of skin barrier function; elevated in AD' }
      ],
      clinicalNotes: 'EAACI/GA2LEN/EDF/WAO guidelines: urticaria activity score (UAS7) to monitor. Urticaria not responding to 4x antihistamine dose warrants omalizumab. For AD, treat to EASI-75 or IGA 0/1. Bleach baths (0.005% sodium hypochlorite) reduce S. aureus colonization.'
    }
  },
  media: [],
  citations: [
    {
      id: 'eaaci-guidelines-urticaria',
      type: 'article',
      title: 'The EAACI/GA2LEN/EDF/WAO Guideline for the Definition, Classification, Diagnosis and Management of Urticaria',
      source: 'Allergy',
      authors: ['Zuberbier T', 'Aberer W', 'Asero R'],
      url: 'https://www.ga2len.net/urticaria-guideline/'
    },
    {
      id: 'aad-ad-guidelines',
      type: 'article',
      title: 'Guidelines of Care for the Management of Atopic Dermatitis',
      source: 'Journal of the American Academy of Dermatology',
      authors: ['Eichenfield LF', 'Tom WL', 'Berger TG'],
      url: 'https://www.aad.org/guidelines'
    },
    {
      id: 'aaaai-eczema',
      type: 'website',
      title: 'Atopic Dermatitis (Eczema)',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/allergies/atopic-dermatitis'
    }
  ],
  crossReferences: [
    { targetId: 'allergy-basics', targetType: 'topic', relationship: 'parent' },
    { targetId: 'dermatology', targetType: 'topic', relationship: 'related' },
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'related' },
    { targetId: 'allergy-testing', targetType: 'topic', relationship: 'related' }
  ],
  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['pathology', 'clinical', 'dermatology'],
    keywords: ['eczema', 'urticaria', 'hives', 'contact dermatitis', 'atopic dermatitis', 'angioedema'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics', 'dermatology'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
