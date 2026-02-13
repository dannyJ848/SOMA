import { EducationalContent } from '../types';

export const drugAllergiesContent: EducationalContent = {
  id: 'drug-allergies',
  type: 'condition',
  name: 'Drug Hypersensitivity',
  alternateNames: ['Drug Allergy', 'Medication Allergy', 'Adverse Drug Reaction', 'Drug Allergy'],
  hpoId: 'HP:0010974',
  levels: {
    1: {
      level: 1,
      summary: 'A drug allergy happens when your immune system overreacts to a medicine, causing symptoms like rash, hives, or breathing problems.',
      explanation: 'Most medicines help people feel better, but sometimes the body treats a medicine like it is a harmful invader. This can cause an allergic reaction. The most common drug allergies are to antibiotics like penicillin, pain medicines like aspirin, and seizure medicines. Reactions can be mild, like a rash or itching, or very serious, like trouble breathing or passing out. It is important to tell all your doctors about any drug allergies so they can give you safe medicines instead.',
      keyTerms: [
        { term: 'penicillin', definition: 'Common antibiotic that some people are allergic to' },
        { term: 'antibiotic', definition: 'Medicine that kills bacteria' },
        { term: 'side effect', definition: 'Unintended effect of a medicine (not the same as allergy)' }
      ],
      analogies: [
        'A drug allergy is like your body attacking the medicine that is supposed to help you.',
        'Taking a medicine you are allergic to is like accidentally eating a food you are allergic to.'
      ],
      examples: [
        'Penicillin allergy is the most common drug allergy',
        'Some people get hives from aspirin or ibuprofen',
        'Anticonvulsants can cause severe skin reactions'
      ],
      patientCounselingPoints: [
        'Always tell doctors and pharmacists about drug allergies',
        'Wear a medical alert bracelet if you have severe drug allergies',
        'Side effects are not the same as allergies'
      ]
    },
    2: {
      level: 2,
      summary: 'Drug allergy is an adverse drug reaction mediated by the immune system, ranging from mild skin rashes to life-threatening anaphylaxis.',
      explanation: 'Adverse drug reactions are classified as type A (predictable, dose-dependent) or type B (unpredictable, immune-mediated or idiosyncratic). True drug allergies are type B, IgE-mediated or T-cell mediated reactions. The most common drug allergens are beta-lactam antibiotics (penicillins, cephalosporins), NSAIDs, sulfonamides, anticonvulsants, and biologics. Reactions include urticaria, angioedema, anaphylaxis, serum sickness, and various exanthems. Cross-reactivity occurs when antibodies recognize similar structures in related drugs.',
      keyTerms: [
        { term: 'adverse drug reaction', definition: 'Any harmful response to a medication' },
        { term: 'cross-reactivity', definition: 'Allergy to multiple related drugs due to similar structures' },
        { term: 'beta-lactam', definition: 'Antibiotic class including penicillins and cephalosporins' },
        { term: 'serum sickness', definition: 'Delayed immune complex reaction to medications' },
        { term: 'exanthem', definition: 'Widespread rash', pronunciation: 'eg-ZAN-them' }
      ],
      analogies: [
        'Cross-reactivity is like your immune system confusing cousins because they look alike',
        'Serum sickness is like your body cleaning up medicine with too much enthusiasm'
      ],
      examples: [
        '10% of people report penicillin allergy, but >90% can actually tolerate it',
        'Aspirin can cause asthma attacks in sensitive patients',
        'Sulfa drugs can cause severe skin reactions in allergic patients'
      ]
    },
    3: {
      level: 3,
      summary: 'Drug hypersensitivity encompasses IgE-mediated immediate reactions, T-cell-mediated delayed reactions, and immune complex-mediated responses with diverse clinical presentations.',
      explanation: 'Drug allergies are classified by Gell and Coombs: Type I (IgE-mediated, immediate): anaphylaxis, urticaria, angioedema. Type II (cytotoxic): hemolytic anemia, thrombocytopenia. Type III (immune complex): serum sickness-like reaction, drug-induced vasculitis. Type IV (T-cell mediated, delayed): maculopapular eruption, SJS/TEN, DRESS. Drugs are typically haptens that must bind to carrier proteins to become immunogenic. The hapten-carrier complex is processed and presented, activating T and B cells. Risk factors include atopy, previous reactions, high dose, parenteral administration, and certain viral infections (HIV, EBV).',
      keyTerms: [
        { term: 'hapten', definition: 'Small molecule that becomes antigenic when bound to protein' },
        { term: 'SJS/TEN', definition: 'Stevens-Johnson syndrome/toxic epidermal necrolysis - severe skin reaction' },
        { term: 'DRESS', definition: 'Drug Reaction with Eosinophilia and Systemic Symptoms' },
        { term: 'maculopapular eruption', definition: 'Flat red patches with small bumps, common drug rash' },
        { term: 'desensitization', definition: 'Gradual dose escalation to induce temporary tolerance' }
      ],
      examples: [
        'Penicillin binds to serum proteins forming the hapten-carrier complex',
        'SJS/TEN is most commonly caused by sulfonamides, anticonvulsants, and allopurinol',
        'DRESS has a mortality rate of up to 10%'
      ]
    },
    4: {
      level: 4,
      summary: 'Drug hypersensitivity involves complex immunologic mechanisms influenced by genetic susceptibility, drug properties, metabolic pathways, and environmental factors.',
      explanation: 'The p-i concept (pharmacologic interaction with immune receptors) explains how some drugs directly stimulate T cells without metabolism. Reactive metabolites from cytochrome P450 metabolism can bind proteins and create neoantigens. HLA alleles determine susceptibility: HLA-B*57:01 for abacavir hypersensitivity, HLA-B*15:02 for carbamazepine-induced SJS/TEN in Han Chinese. Drug-specific T cells recognize drug-HLA complexes via TCR. Activation thresholds vary by drug and HLA type. The duration of sensitization varies; IgE-mediated allergies often persist while T-cell mediated reactions may wane. Graded challenge and drug desensitization are distinct procedures.',
      keyTerms: [
        { term: 'p-i concept', definition: 'Direct pharmacologic T cell stimulation by drug' },
        { term: 'HLA-B*57:01', definition: 'Genetic marker for abacavir hypersensitivity' },
        { term: 'neoantigen', definition: 'New antigen formed by drug-protein binding' },
        { term: 'graded challenge', definition: 'Test dose to confirm loss of allergy when likelihood is low' },
        { term: 'drug desensitization', definition: 'Protocol to induce temporary tolerance for necessary drug' }
      ],
      clinicalNotes: 'Penicillin skin testing uses penicilloyl-poly-lysine (major determinant) and penicillin G (minor determinant). Negative predictive value >95%. Graded challenge: 1/100, 1/10, full dose at 30-60 minute intervals. Desensitization: 12-16 step protocol for IgE-mediated reactions.'
    },
    5: {
      level: 5,
      summary: 'Management of drug hypersensitivity requires accurate diagnosis, appropriate use of testing, selection of alternative agents, and consideration of desensitization based on clinical urgency and evidence-based protocols.',
      explanation: 'Evaluation begins with detailed history: reaction characteristics, timing, drug details, and prior exposures. Skin testing is available for penicillin, local anesthetics, and some biologics. In vitro testing (specific IgE) has limited sensitivity. Drug provocation testing (graded challenge) confirms tolerance when allergy is unlikely or resolved. For beta-lactam allergy: cross-reactivity between penicillins and cephalosporins is 1-2% (side chain specific, not beta-lactam ring). Desensitization induces temporary tolerance (mast cell mediator depletion) and is indicated for first-line agents when no alternatives exist (e.g., penicillin for syphilis in pregnancy, chemotherapeutics). Pre-medication with antihistamines and corticosteroids does NOT prevent IgE-mediated anaphylaxis.',
      keyTerms: [
        { term: 'major determinant', definition: 'Penicilloyl - primary penicillin antigen (PPL)' },
        { term: 'minor determinant', definition: 'Other penicillin metabolites (penicilloate, penilloate)' },
        { term: 'side chain', definition: 'Chemical group determining cross-reactivity between beta-lactams' },
        { term: 'drug provocation test', definition: 'Supervised administration to confirm tolerance or allergy' },
        { term: 'PRE-PEN', definition: 'Commercial penicilloyl-poly-lysine skin test reagent' }
      ],
      clinicalNotes: 'Abacavir HLA-B*57:01 screening is mandatory (reduces reactions from 8% to <1%). Carbamazepine HLA-B*15:02 screening required in Asian populations. Desensitization protocol: starting dose typically 1/10,000 to 1/100 of therapeutic dose, doubling every 15-30 minutes.'
    }
  },
  media: [],
  citations: [
    {
      id: 'drug-allergy-aaaai',
      type: 'website',
      title: 'Drug Allergy',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/allergies/drug-allergy'
    },
    {
      id: 'penicillin-allergy-acaai',
      type: 'website',
      title: 'Penicillin Allergy',
      source: 'American College of Allergy, Asthma & Immunology',
      url: 'https://acaai.org/allergies/drug-allergies/penicillin-allergy'
    },
    {
      id: 'sjs-ten-review',
      type: 'article',
      title: 'Stevens-Johnson Syndrome and Toxic Epidermal Necrolysis',
      source: 'Lancet',
      authors: ['Harr T', 'French LE'],
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3071566/'
    }
  ],
  crossReferences: [
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'related' },
    { targetId: 'skin-allergies', targetType: 'condition', relationship: 'related' },
    { targetId: 'allergy-testing', targetType: 'topic', relationship: 'related' },
    { targetId: 'pharmacology', targetType: 'topic', relationship: 'related' }
  ],
  tags: {
    systems: ['immune'],
    topics: ['pathology', 'clinical', 'pharmacology'],
    keywords: ['drug allergy', 'penicillin allergy', 'SJS', 'TEN', 'DRESS', 'cross-reactivity', 'desensitization'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'pharmacology'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
