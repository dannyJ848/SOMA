import { EducationalContent } from '../types';

export const immunotherapyContent: EducationalContent = {
  id: 'immunotherapy',
  type: 'topic',
  name: 'Allergen Immunotherapy',
  alternateNames: ['Allergy Shots', 'Allergy Injections', 'Desensitization', 'SLIT', 'SCIT'],
  levels: {
    1: {
      level: 1,
      summary: 'Allergen immunotherapy is a treatment that helps your body get used to allergens so you do not react as strongly to them.',
      explanation: 'Think of immunotherapy like allergy training camp for your immune system. Instead of just treating symptoms with medicines, immunotherapy teaches your body to stop overreacting to things like pollen, pet dander, or dust mites. The treatment involves getting tiny amounts of what you are allergic to, either through shots (called SCIT) or tablets under your tongue (called SLIT). Over time, the amount is increased. This helps your immune system build tolerance, so when you encounter the allergen in real life, you have fewer or no symptoms.',
      keyTerms: [
        { term: 'allergy shots', definition: 'Injections containing small amounts of allergen' },
        { term: 'tolerance', definition: 'When your body stops reacting to an allergen' },
        { term: 'under-the-tongue tablets', definition: 'Allergy medicine dissolved under the tongue daily' }
      ],
      analogies: [
        'Immunotherapy is like learning to swim - you start in shallow water and gradually go deeper.',
        'Building tolerance is like getting used to spicy food - a little at a time.'
      ],
      examples: [
        'Grass pollen tablets are placed under the tongue daily',
        'Allergy shots contain extracts of pollens, dust mites, or pet dander',
        'Treatment usually lasts 3-5 years for lasting benefit'
      ],
      patientCounselingPoints: [
        'Immunotherapy is a long-term commitment, usually 3-5 years',
        'You must wait at the doctor office for 30 minutes after each shot',
        'Tablets are taken daily at home but still require a prescription'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergen immunotherapy is a disease-modifying treatment that involves administering gradually increasing doses of allergen to induce immune tolerance.',
      explanation: 'Two main types of immunotherapy exist: subcutaneous immunotherapy (SCIT), commonly called allergy shots, and sublingual immunotherapy (SLIT), using tablets or drops under the tongue. SCIT is given in a medical office with a 30-minute observation period after each injection due to risk of anaphylaxis. SLIT is taken daily at home after the first dose is given under medical supervision. Both treatments start with a build-up phase (increasing doses) followed by a maintenance phase (consistent therapeutic dose). Benefits can persist for years after stopping treatment.',
      keyTerms: [
        { term: 'SCIT', definition: 'Subcutaneous immunotherapy - allergy shots' },
        { term: 'SLIT', definition: 'Sublingual immunotherapy - tablets or drops under tongue' },
        { term: 'build-up phase', definition: 'Initial period of increasing doses' },
        { term: 'maintenance phase', definition: 'Stable therapeutic dosing period' },
        { term: 'disease-modifying', definition: 'Changes the underlying disease, not just symptoms' }
      ],
      analogies: [
        'The build-up phase is like climbing a mountain - you go a little higher each time.',
        'Maintenance dosing is like taking a daily vitamin to stay healthy.'
      ],
      examples: [
        'SCIT for ragweed allergy takes 3-6 months to reach maintenance',
        'Grass and ragweed SLIT tablets are FDA-approved for allergic rhinitis',
        'Dust mite SLIT tablets are approved for dust mite allergic rhinitis'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergen immunotherapy induces immune tolerance through modulation of T and B cell responses, shifting from TH2 to regulatory T cell dominance and production of blocking antibodies.',
      explanation: 'Successful immunotherapy induces multiple immunologic changes: decreased TH2 cytokines (IL-4, IL-5, IL-13), increased regulatory T cells (Tregs) producing IL-10 and TGF-beta, decreased mast cell and eosinophil recruitment, and increased allergen-specific IgG4 blocking antibodies. IgG4 competes with IgE for allergen binding, preventing mast cell activation. The immune deviation from TH2 to TH1/Treg pattern reduces allergic inflammation. Clinical improvement usually begins within months of reaching maintenance dose, but long-term benefit requires 3-5 years of treatment.',
      keyTerms: [
        { term: 'regulatory T cell', definition: 'T cell subset that suppresses immune responses, promotes tolerance' },
        { term: 'IL-10', definition: 'Anti-inflammatory cytokine produced during immunotherapy' },
        { term: 'TGF-beta', definition: 'Transforming growth factor beta - promotes tolerance' },
        { term: 'blocking antibody', definition: 'IgG4 that prevents IgE-allergen binding' },
        { term: 'immune deviation', definition: 'Shift from TH2 to TH1/Treg response pattern' }
      ],
      examples: [
        'IgG4 levels increase 10-100 fold during successful immunotherapy',
        'Tregs increase and suppress effector T cell responses to allergen',
        'Late skin test reactions decrease as immunotherapy progresses'
      ]
    },
    4: {
      level: 4,
      summary: 'Allergen immunotherapy selection considers allergen sensitization pattern, symptom burden, medication response, and evidence-based guidelines for efficacy and safety.',
      explanation: 'Indications: allergic rhinitis not controlled by avoidance and pharmacotherapy, allergic asthma (well-controlled), stinging insect hypersensitivity, and environmental allergy exacerbating atopic dermatitis. Contraindications: uncontrolled asthma, beta-blocker use (relative), significant cardiovascular disease, pregnancy (do not start but may continue), autoimmune disease. SCIT treats multiple allergens simultaneously; SLIT is single-allergen (tablets) or custom-mixed (drops). Local reactions (swelling at injection site) are common. Systemic reactions occur in 0.1-0.3% of injections; anaphylaxis risk necessitates observation period.',
      keyTerms: [
        { term: 'local reaction', definition: 'Swelling/redness at injection site, common and not dangerous' },
        { term: 'systemic reaction', definition: 'Widespread reaction including possible anaphylaxis, rare but serious' },
        { term: 'rush immunotherapy', definition: 'Accelerated schedule reaching maintenance in days' },
        { term: 'cluster immunotherapy', definition: 'Multiple injections per visit during build-up' },
        { term: 'pre-treatment', definition: 'Antihistamine given before injections to reduce reactions' }
      ],
      clinicalNotes: 'SLIT tablets available in US: grass (5 grasses Timothy, Orchard, Perennial Rye, Sweet Vernal, Kentucky Blue, Johnson), ragweed (short ragweed), dust mite (Dermatophagoides pteronyssinus, D. farinae), and tree (subpollen, not yet FDA approved).'
    },
    5: {
      level: 5,
      summary: 'Allergen immunotherapy protocols follow evidence-based guidelines with standardized extracts, dosing schedules, and monitoring parameters optimized for efficacy and safety.',
      explanation: 'Extract standardization (BAU/mL or AU/mL) ensures consistent potency. SCIT conventional build-up: weekly injections over 3-6 months. Cluster: 2-3 injections per visit, reaching maintenance in 4-8 weeks. Rush: daily or multiple daily injections over days. Maintenance: monthly for 3-5 years. SLIT tablets: initiated in office with first dose, 30-minute observation; then daily at home. Efficacy measures: symptom scores, medication use, quality of life. SCIT provides ~40-60% reduction in symptoms and medication use. SLIT shows ~20-40% reduction. Relapse after stopping: 30-50% if <3 years, <10% if 3-5 years. Guidelines: ARIA, EAACI, AAAAI, ACAAI provide evidence-based recommendations.',
      keyTerms: [
        { term: 'BAU', definition: 'Bioequivalent allergy units - extract potency measure' },
        { term: 'AU', definition: 'Allergy units - alternative extract standardization' },
        { term: 'dose escalation', definition: 'Gradual increase from initial to therapeutic dose' },
        { term: 'maintenance dose', definition: 'Target therapeutic dose (typically 1000 BAU for pollens)' },
        { term: 'quality of life', definition: 'Patient-reported outcome measure in immunotherapy studies' }
      ],
      clinicalNotes: 'Epinephrine must be immediately available during SCIT administration. Reduced dose may be needed if local reaction >5cm or if systemic reaction occurred. Consider pretreatment with antihistamine if large local reactions recur. For SLIT, oral itching is common initially and usually resolves.'
    }
  },
  media: [],
  citations: [
    {
      id: 'aaaaai-immunotherapy',
      type: 'website',
      title: 'Allergy Shots (Immunotherapy)',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/treatments/allergy-shots'
    },
    {
      id: 'acaai-slit',
      type: 'website',
      title: 'Sublingual Immunotherapy',
      source: 'American College of Allergy, Asthma & Immunology',
      url: 'https://acaai.org/allergies/treatment/allergy-immunotherapy/slita'
    },
    {
      id: 'eaaci-guidelines',
      type: 'article',
      title: 'EAACI Guidelines on Allergen Immunotherapy',
      source: 'Allergy',
      authors: ['Pfaar O', 'Bachert C', 'Biederman T'],
      url: 'https://www.eaaci.org/guidelines/'
    }
  ],
  crossReferences: [
    { targetId: 'allergy-basics', targetType: 'topic', relationship: 'related' },
    { targetId: 'allergic-rhinitis', targetType: 'condition', relationship: 'related' },
    { targetId: 'allergy-testing', targetType: 'topic', relationship: 'related' },
    { targetId: 'asthma-allergy', targetType: 'condition', relationship: 'related' }
  ],
  tags: {
    systems: ['immune'],
    topics: ['treatment', 'immunology', 'clinical'],
    keywords: ['immunotherapy', 'SCIT', 'SLIT', 'allergy shots', 'desensitization', 'tolerance'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
