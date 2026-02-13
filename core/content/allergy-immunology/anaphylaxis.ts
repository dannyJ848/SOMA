import { EducationalContent } from '../types';

export const anaphylaxisContent: EducationalContent = {
  id: 'anaphylaxis',
  type: 'condition',
  name: 'Anaphylaxis',
  alternateNames: ['Anaphylactic Shock', 'Severe Allergic Reaction', 'Anaphylactic Reaction'],
  hpoId: 'HP:0002090',
  levels: {
    1: {
      level: 1,
      summary: 'Anaphylaxis is a very serious allergic reaction that happens quickly and can be life-threatening if not treated right away.',
      explanation: 'Anaphylaxis is like an allergic reaction on overdrive. It can cause trouble breathing, swelling of the face or throat, hives, nausea, dizziness, or passing out. It usually starts within minutes of eating a food, getting an insect sting, or taking medicine. The most important treatment is a shot of epinephrine given right away. People who have had anaphylaxis should always carry an epinephrine auto-injector (like an EpiPen) and know how to use it.',
      keyTerms: [
        { term: 'epinephrine', definition: 'Emergency medicine that treats severe allergic reactions', pronunciation: 'ep-ih-NEF-rin' },
        { term: 'auto-injector', definition: 'Device that injects medicine with one push' },
        { term: 'airway', definition: 'The tubes that carry air into your lungs' }
      ],
      analogies: [
        'Anaphylaxis is like a fire alarm in your body that will not turn off without help.',
        'Epinephrine is like a firefighter putting out the allergic fire.'
      ],
      examples: [
        'Peanut allergies can cause anaphylaxis in sensitive people',
        'Bee stings cause anaphylaxis in some allergic individuals',
        'Penicillin can trigger anaphylaxis in allergic patients'
      ],
      patientCounselingPoints: [
        'Use your epinephrine auto-injector immediately if you think you are having anaphylaxis',
        'Call 911 after using epinephrine - you need emergency care',
        'Always carry two auto-injectors in case a second dose is needed'
      ]
    },
    2: {
      level: 2,
      summary: 'Anaphylaxis is a severe, potentially life-threatening systemic allergic reaction that requires immediate recognition and treatment with epinephrine.',
      explanation: 'Anaphylaxis typically involves two or more body systems (skin, respiratory, cardiovascular, gastrointestinal) or hypotension alone after exposure to a known allergen. Common triggers include foods (peanuts, tree nuts, shellfish), medications (antibiotics, NSAIDs), insect stings, and latex. Symptoms develop rapidly, usually within minutes to 2 hours. Cutaneous findings (hives, flushing, angioedema) occur in 80-90% of cases but are not required for diagnosis. Respiratory compromise and cardiovascular collapse cause mortality.',
      keyTerms: [
        { term: 'hypotension', definition: 'Low blood pressure', pronunciation: 'hy-poh-TEN-shun' },
        { term: 'stridor', definition: 'High-pitched breathing sound from upper airway swelling', pronunciation: 'STRY-dor' },
        { term: 'wheezing', definition: 'Whistling sound from narrowed lower airways' },
        { term: 'shock', definition: 'Dangerous condition where not enough blood flows to organs' }
      ],
      analogies: [
        'Your airway during anaphylaxis is like a drinking straw that someone is pinching closed.',
        'Blood pressure drops during anaphylaxis like water from a garden hose with a kink in it'
      ],
      examples: [
        ' peanut allergy is the most common cause of fatal food-related anaphylaxis',
        'Exercise can trigger anaphylaxis in some people (exercise-induced anaphylaxis)',
        'Some people have idiopathic anaphylaxis with no identifiable trigger'
      ]
    },
    3: {
      level: 3,
      summary: 'Anaphylaxis is an acute, potentially life-threatening systemic hypersensitivity reaction characterized by rapid onset and multiorgan involvement due to massive mast cell and basophil activation.',
      explanation: 'The pathophysiology involves IgE-mediated and non-IgE-mediated pathways. IgE-mediated (typical) anaphylaxis: allergen crosslinks IgE bound to FcRI receptors on mast cells and basophils, causing degranulation and release of histamine, tryptase, platelet-activating factor (PAF), leukotrienes, prostaglandins, and cytokines. These mediators cause increased vascular permeability (edema, hypotension), bronchoconstriction, and increased mucus production. Non-IgE-mediated pathways include direct mast cell activation (opioids, vancomycin) and complement activation. Biphasic reactions occur in 1-20% of cases, with recurrence 4-12 hours after initial resolution.',
      keyTerms: [
        { term: 'biphasic reaction', definition: 'Recurrence of anaphylaxis hours after initial symptoms resolve' },
        { term: 'tryptase', definition: 'Mast cell protease elevated during anaphylaxis; useful for diagnosis' },
        { term: 'platelet-activating factor', definition: 'Potent mediator of anaphylaxis causing shock' },
        { term: 'FcRI receptor', definition: 'High-affinity IgE receptor on mast cells and basophils' },
        { term: 'idiopathic anaphylaxis', definition: 'Anaphylaxis without identifiable trigger' }
      ],
      examples: [
        'Serum tryptase peaks 1-3 hours after anaphylaxis onset, remains elevated for 6-24 hours',
        'Biphasic reactions are more likely with severe initial reactions or delayed epinephrine administration',
        'Exercise-induced anaphylaxis may be food-dependent (wheat + exercise)'
      ]
    },
    4: {
      level: 4,
      summary: 'Anaphylaxis requires prompt diagnosis based on clinical criteria and immediate intramuscular epinephrine administration as first-line therapy.',
      explanation: 'Diagnostic criteria (NIAID/FAAN): acute onset involving skin/mucosa PLUS either respiratory compromise OR hypotension/end-organ dysfunction; OR exposure to likely allergen PLUS two or more: skin, respiratory, cardiovascular, GI; OR hypotension after known allergen exposure. Differential diagnosis includes asthma, syncope, panic attack, carcinoid syndrome, scombroid poisoning, and hereditary angioedema. Serum tryptase helps distinguish anaphylaxis (elevated) from other causes (normal). Mast cell activation disorders can cause recurrent idiopathic anaphylaxis.',
      keyTerms: [
        { term: 'hereditary angioedema', definition: 'C1 esterase inhibitor deficiency causing swelling' },
        { term: 'scombroid poisoning', definition: 'Histamine toxicity from spoiled fish mimicking anaphylaxis' },
        { term: 'mast cell activation syndrome', definition: 'Disorder causing mast cell hyperresponsiveness' },
        { term: 'observation period', definition: '4-8 hour monitoring after anaphylaxis for biphasic reaction' }
      ],
      clinicalNotes: 'Cardiac anaphylaxis (Kounis syndrome) involves coronary vasospasm or plaque rupture in allergic patients. Vasopressor-resistant shock suggests massive PAF release.'
    },
    5: {
      level: 5,
      summary: 'Emergency management of anaphylaxis follows evidence-based protocols with epinephrine as first-line therapy, followed by adjunctive measures and prevention strategies including allergen avoidance and anaphylaxis action plans.',
      explanation: 'First-line: IM epinephrine 0.3-0.5 mg (0.01 mg/kg, max 0.5 mg) in mid-anterolateral thigh every 5-15 minutes as needed. Auto-injectors deliver 0.1mg, 0.15mg, 0.3mg, or 0.5mg doses. Position patient supine with legs elevated (unless respiratory distress). Second-line (adjunctive, NOT替代 epinephrine): H1 antihistamine (diphenhydramine), H2 blocker (famotidine), corticosteroid (methylprednisolone), and inhaled beta-agonist for wheezing. IV fluids for hypotension. Refractory cases: epinephrine infusion, vasopressors, glucagon. Post-acute: prescribe 2 auto-injectors, provide written anaphylaxis action plan, refer to allergist for testing and trigger identification.',
      keyTerms: [
        { term: 'mid-anterolateral thigh', definition: 'Preferred injection site for IM epinephrine' },
        { term: 'anaphylaxis action plan', definition: 'Written emergency plan for patients and caregivers' },
        { term: 'glucagon', definition: 'Used for anaphylaxis on beta-blockers; causes inotropy and bronchodilation' },
        { term: 'desensitization', definition: 'Protocol for inducing temporary tolerance to necessary allergens' }
      ],
      clinicalNotes: 'Epinephrine adverse effects: tachycardia, tremor, anxiety, hypertension - these are preferable to anaphylaxis. Do NOT delay epinephrine for antihistamines or steroids. Antihistamines do NOT treat upper airway obstruction, shock, or prevent biphasic reactions. Observation period: 4-8 hours depending on severity.'
    }
  },
  media: [],
  citations: [
    {
      id: 'niaid-anaphylaxis-2010',
      type: 'article',
      title: 'Emergency Protocol for Anaphylaxis',
      source: 'NIAID/FAAN Expert Panel',
      authors: ['Sampson HA', 'Munoz-Furlong A', 'Campbell RL'],
      url: 'https://www.niaid.nih.gov/research/anaphylaxis'
    },
    {
      id: 'wao-anaphylaxis-guidelines',
      type: 'article',
      title: 'World Allergy Organization Anaphylaxis Guidelines',
      source: 'World Allergy Organization Journal',
      authors: ['Simons FE', 'Ardusso LR', 'Dimov V'],
      url: 'https://www.worldallergy.org/anaphylaxis-guidelines/'
    },
    {
      id: 'aaaai-anaphylaxis',
      type: 'website',
      title: 'Anaphylaxis',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/anaphylaxis'
    }
  ],
  crossReferences: [
    { targetId: 'food-allergies', targetType: 'condition', relationship: 'related' },
    { targetId: 'drug-allergies', targetType: 'condition', relationship: 'related' },
    { targetId: 'asthma-allergy', targetType: 'condition', relationship: 'related' },
    { targetId: 'shock', targetType: 'condition', relationship: 'related' }
  ],
  tags: {
    systems: ['immune', 'cardiovascular', 'respiratory'],
    topics: ['emergency', 'critical-care', 'immunology'],
    keywords: ['anaphylaxis', 'epinephrine', 'anaphylactic shock', 'emergency', 'biphasic reaction', 'tryptase'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics', 'emergency'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
