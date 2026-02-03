import { EducationalContent } from '../types';

export const allergicRhinitisContent: EducationalContent = {
  id: 'allergic-rhinitis',
  type: 'condition',
  name: 'Allergic Rhinitis',
  alternateNames: ['Hay Fever', 'Seasonal Allergies', 'Perennial Rhinitis', 'Nasal Allergies'],
  hpoId: 'HP:0003193',
  levels: {
    1: {
      level: 1,
      summary: 'Allergic rhinitis, commonly called hay fever, causes sneezing, runny nose, and itching when you breathe in things you are allergic to.',
      explanation: 'Imagine your nose is like a bouncer at a club. When pollen, dust, or pet dander try to enter, your nose overreacts and starts making extra mucus and causing you to sneeze to try to push the allergens out. This happens because your immune system thinks these harmless things are dangerous invaders. You might also have itchy eyes, a stuffy nose, or feel tired. It is annoying but not usually serious.',
      keyTerms: [
        { term: 'rhinitis', definition: 'Inflammation of the lining of the nose', pronunciation: 'rye-NYE-tis' },
        { term: 'pollen', definition: 'Tiny powder from plants that can cause allergies' },
        { term: 'mucus', definition: 'Slimy substance made by your nose to trap germs and dust' }
      ],
      analogies: [
        'Your nose during allergies is like a sprinkler system that turns on when it should not - spraying mucus everywhere.',
        'Sneezing is like your nose trying to blow away the allergens, like blowing out birthday candles.'
      ],
      examples: [
        'Spring allergies from tree pollen',
        'Summer allergies from grass pollen',
        'Fall allergies from ragweed pollen',
        'Year-round allergies from dust mites or pets'
      ],
      patientCounselingPoints: [
        'Keep windows closed during high pollen seasons',
        'Shower after being outdoors to remove pollen',
        'Use air conditioning to filter indoor air'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergic rhinitis is an inflammation of the nasal passages caused by allergic reactions to airborne allergens, affecting up to 30% of the population.',
      explanation: 'When an allergic person inhales an allergen, IgE antibodies on mast cells in the nasal lining trigger the release of histamine and other inflammatory mediators. This causes vasodilation of nasal blood vessels (congestion), increased glandular secretion (rhinorrhea), and stimulation of sensory nerves (sneezing and itching). The condition can be seasonal (pollen) or perennial (dust mites, pets, mold). Diagnosis is based on history and confirmed by skin testing or specific IgE measurement.',
      keyTerms: [
        { term: 'seasonal allergic rhinitis', definition: 'Allergies that occur during specific times of year when plants pollinate' },
        { term: 'perennial allergic rhinitis', definition: 'Year-round allergies caused by indoor allergens' },
        { term: 'rhinorrhea', definition: 'Runny nose', pronunciation: 'rye-no-REE-uh' },
        { term: 'vasodilation', definition: 'Widening of blood vessels causing congestion' },
        { term: 'allergic salute', definition: 'Habitual nose rubbing motion seen in children with allergies' }
      ],
      analogies: [
        'The nasal lining is like a sponge that swells with fluid when allergies hit',
        'Histamine is like a chemical alarm that triggers all the allergy symptoms at once'
      ],
      examples: [
        'Oak, birch, and cedar pollen cause spring allergies',
        'Timothy and Bermuda grass trigger summer symptoms',
        'Ragweed is the most common fall allergen',
        'Dust mite allergens accumulate in pillows, mattresses, and carpets'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergic rhinitis is an IgE-mediated inflammatory disorder of the nasal mucosa characterized by nasal congestion, rhinorrhea, sneezing, and itching following allergen exposure.',
      explanation: 'The allergic cascade begins with sensitization, where allergen presentation by dendritic cells to T cells promotes TH2 differentiation and B cell production of specific IgE. IgE binds to FcRI receptors on mast cells and basophils. Upon re-exposure, allergen crosslinks IgE, triggering degranulation and release of preformed mediators (histamine, tryptase, chymase) and newly synthesized mediators (prostaglandin D2, leukotriene C4, cytokines). The early phase occurs within minutes, while the late phase (4-12 hours) involves recruitment of eosinophils, basophils, and TH2 cells causing sustained inflammation.',
      keyTerms: [
        { term: 'early phase reaction', definition: 'Immediate IgE-mediated mast cell degranulation (minutes)' },
        { term: 'late phase reaction', definition: 'Inflammatory cell infiltration causing prolonged symptoms (4-12 hours)' },
        { term: 'TH2 cytokines', definition: 'IL-4, IL-5, IL-13 promoting allergic inflammation' },
        { term: 'eosinophilic inflammation', definition: 'Eosinophil infiltration characteristic of allergic airway disease' },
        { term: 'nasal provocation test', definition: 'Controlled allergen exposure to confirm diagnosis' }
      ],
      examples: [
        'Grass pollen affects 20-30% of the population',
        'Dust mite sensitization is linked to asthma development',
        'Occupational rhinitis from laboratory animal or latex exposure'
      ]
    },
    4: {
      level: 4,
      summary: 'Allergic rhinitis involves complex neuroimmune interactions with significant impact on quality of life, sleep, and comorbid conditions including asthma, sinusitis, and otitis media.',
      explanation: 'Nasal epithelial cells produce alarmins (TSLP, IL-33, IL-25) in response to allergen proteases and danger signals. These cytokines activate ILC2 cells and dendritic cells, amplifying TH2 responses. The nasal microbiome influences immune responses, with dysbiosis associated with increased severity. Neurogenic mechanisms involve substance P and calcitonin gene-related peptide from sensory nerves. The unified airway concept links allergic rhinitis with asthma - shared inflammatory pathways mean controlling rhinitis improves asthma outcomes. Sleep-disordered breathing is common due to nasal obstruction.',
      keyTerms: [
        { term: 'alarmins', definition: 'Epithelial-derived cytokines (TSLP, IL-33, IL-25) initiating allergic responses' },
        { term: 'ILC2', definition: 'Type 2 innate lymphoid cells producing TH2 cytokines without antigen exposure' },
        { term: 'unified airway', definition: 'Concept that upper and lower airways share inflammatory disease' },
        { term: 'neurogenic inflammation', definition: 'Nerve-mediated inflammation contributing to symptoms' },
        { term: 'nasal cycle', definition: 'Physiological alternating congestion/decongestion disrupted in rhinitis' }
      ],
      clinicalNotes: 'ARIA (Allergic Rhinitis and its Impact on Asthma) guidelines classify as intermittent/persistent and mild/moderate-severe. About 80% of asthmatics have rhinitis; 20-40% of rhinitis patients have asthma.'
    },
    5: {
      level: 5,
      summary: 'Management of allergic rhinitis requires stepwise approach combining avoidance, pharmacotherapy, immunotherapy, and surgery guided by severity, comorbidities, and patient preference.',
      explanation: 'Pharmacotherapy includes intranasal corticosteroids (first-line for moderate-severe disease - fluticasone, mometasone, budesonide), oral and intranasal antihistamines (second-generation: cetirizine, loratadine, fexofenadine), leukotriene receptor antagonists (montelukast), and intranasal anticholinergics (ipratropium). Combination INCS + INAH is superior to either alone. Allergen immunotherapy (SCIT or SLIT) is disease-modifying, indicated for inadequate symptom control with pharmacotherapy. Surgical options include turbinate reduction, septoplasty, and functional endoscopic sinus surgery for structural issues. ARIA and AAOA guidelines provide evidence-based treatment algorithms.',
      keyTerms: [
        { term: 'intranasal corticosteroids', definition: 'First-line anti-inflammatory treatment for moderate-severe AR' },
        { term: 'montelukast', definition: 'Leukotriene receptor antagonist; alternative first-line therapy' },
        { term: 'SCIT', definition: 'Subcutaneous immunotherapy (allergy shots)' },
        { term: 'SLIT', definition: 'Sublingual immunotherapy (tablets/drops under tongue)' },
        { term: 'turbinate reduction', definition: 'Surgical reduction of enlarged nasal turbinates improving airflow' }
      ],
      clinicalNotes: 'INCS require proper technique: shake, prime, head tilted forward, opposite hand to nostril, sniff gently. Black box warning for montelukast: neuropsychiatric reactions. Consider allergy testing when symptoms persist despite appropriate pharmacotherapy.'
    }
  },
  media: [],
  citations: [
    {
      id: 'aria-guidelines',
      type: 'article',
      title: 'ARIA 2019 Update',
      source: 'Allergic Rhinitis and its Impact on Asthma',
      authors: ['Brozek JL', 'Bousquet J', 'Agache I'],
      url: 'https://www.arialergicrhinitis.org/'
    },
    {
      id: 'aaoa-guidelines',
      type: 'website',
      title: 'Clinical Practice Guideline: Allergic Rhinitis',
      source: 'American Academy of Otolaryngic Allergy',
      url: 'https://www.aaoaafp.org/guidelines'
    },
    {
      id: 'aaaai-rhinitis',
      type: 'website',
      title: 'Allergic Rhinitis',
      source: 'American Academy of Allergy, Asthma & Immunology',
      url: 'https://www.aaaai.org/conditions-and-treatments/allergies/allergic-rhinitis'
    }
  ],
  crossReferences: [
    { targetId: 'asthma-allergy', targetType: 'condition', relationship: 'related', label: 'Allergic Asthma' },
    { targetId: 'sinusitis', targetType: 'condition', relationship: 'related' },
    { targetId: 'allergy-testing', targetType: 'topic', relationship: 'related' },
    { targetId: 'immunotherapy', targetType: 'topic', relationship: 'related' }
  ],
  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pathology', 'clinical'],
    keywords: ['hay fever', 'rhinitis', 'nasal congestion', 'sneezing', 'pollen', 'dust mites'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine', 'pediatrics', 'ent'] }
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published'
};
