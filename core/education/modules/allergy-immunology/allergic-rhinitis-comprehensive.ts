/**
 * Allergy & Immunology: Allergic Rhinitis Comprehensive Educational Module
 *
 * Covers IgE-mediated response, histamine, nasal anatomy, antihistamines,
 * nasal steroids, and immunotherapy across 6 complexity levels.
 */

// ============================================================================
// TYPES
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type QuestionType = 'single-choice' | 'multiple-choice' | 'true-false' | 'matching';

export type ContentBlockType =
  | 'text'
  | 'list'
  | 'comparison'
  | 'diagram'
  | 'table'
  | 'mnemonic'
  | 'case-study'
  | 'key-point';

export interface ComparisonItem {
  label: string;
  description: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface ContentBlock {
  type: ContentBlockType;
  title?: string;
  content: string | string[] | ComparisonItem[] | TableRow[];
  metadata?: Record<string, unknown>;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options: Array<{
    id: string;
    text: string;
  }>;
  correctAnswers: string[];
  explanation: string;
  difficulty: ComplexityLevel;
  topic: string;
}

export interface TopicSection {
  id: string;
  title: string;
  contentBlocks: ContentBlock[];
}

export interface ComplexityLevelContent {
  level: ComplexityLevel;
  title: string;
  summary: string;
  estimatedTimeMinutes: number;
  prerequisites: string[];
  learningObjectives: string[];
  sections: TopicSection[];
  keyTerms: Array<{
    term: string;
    definition: string;
  }>;
}

export interface EducationalModule {
  id: string;
  category: string;
  subject: string;
  version: string;
  lastUpdated: string;
  complexityLevels: Record<ComplexityLevel, ComplexityLevelContent>;
  quizQuestions: QuizQuestion[];
  references: Array<{
    citation: string;
    url?: string;
    type: 'guideline' | 'study' | 'review' | 'textbook';
  }>;
}

// ============================================================================
// MODULE DEFINITION
// ============================================================================

export const allergicRhinitisModule: EducationalModule = {
  id: 'allergy-immunology-allergic-rhinitis-comprehensive',
  category: 'allergy-immunology',
  subject: 'Allergic Rhinitis',
  version: '1.0.0',
  lastUpdated: '2026-02-06',

  complexityLevels: {
    // ========================================================================
    // LEVEL 1: Foundation (8th Grade)
    // ========================================================================
    1: {
      level: 1,
      title: 'Allergic Rhinitis Basics',
      summary:
        'A gentle introduction to what happens during allergies, why your nose runs and itches, and simple ways to feel better.',
      estimatedTimeMinutes: 10,
      prerequisites: [],
      learningObjectives: [
        'Understand what allergic rhinitis means in simple terms',
        'Learn what triggers allergy symptoms',
        'Know the basic symptoms of allergies',
        'Recognize simple treatments that can help',
      ],
      sections: [
        {
          id: 'what-is-allergic-rhinitis',
          title: 'What is Allergic Rhinitis?',
          contentBlocks: [
            {
              type: 'text',
              content:
                "Allergic rhinitis is what most people call 'hay fever.' It happens when your body's defense system overreacts to things like pollen, dust, or pet dander. Think of it like a false alarm—your body thinks these harmless things are dangerous invaders.",
            },
            {
              type: 'analogy',
              title: 'Simple Analogy',
              content:
                'Imagine your immune system is like a security guard. Usually, it keeps you safe from real threats like viruses. But with allergies, the guard gets confused and sounds the alarm for harmless things like pollen—causing sneezing, runny nose, and itchy eyes.',
            },
            {
              type: 'key-point',
              title: 'Remember This',
              content:
                'Allergic rhinitis is very common—about 1 in 5 people have it. It is not contagious, and while it can be annoying, it is not dangerous.',
            },
          ],
        },
        {
          id: 'common-triggers',
          title: 'What Causes Allergies?',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Different things trigger allergies depending on the season and where you live. Some people react to one thing, while others react to many.',
            },
            {
              type: 'table',
              title: 'Common Allergy Triggers',
              content: [
                {
                  trigger: 'Tree Pollen',
                  when: 'Spring',
                  description: 'Oak, birch, cedar trees release tiny particles',
                },
                {
                  trigger: 'Grass Pollen',
                  when: 'Late Spring/Summer',
                  description: 'Lawn grass and field grasses',
                },
                {
                  trigger: 'Weed Pollen',
                  when: 'Fall',
                  description: 'Ragweed is the most common culprit',
                },
                {
                  trigger: 'Dust Mites',
                  when: 'Year-round',
                  description: 'Tiny bugs in bedding, carpets, and furniture',
                },
                {
                  trigger: 'Pet Dander',
                  when: 'Year-round',
                  description: 'Tiny skin flakes from cats, dogs, and other animals',
                },
                {
                  trigger: 'Mold',
                  when: 'Year-round (worse in damp weather)',
                  description: 'Grows in bathrooms, basements, and outdoors',
                },
              ],
            },
          ],
        },
        {
          id: 'symptoms',
          title: 'How Allergies Make You Feel',
          contentBlocks: [
            {
              type: 'text',
              content:
                'When allergies strike, your nose and eyes are usually the first to react. These symptoms happen because your body is trying to flush out what it thinks is harmful.',
            },
            {
              type: 'list',
              title: 'Common Symptoms',
              content: [
                'Sneezing fits—often many sneezes in a row',
                'Runny nose with clear, watery mucus',
                'Stuffy or blocked nose',
                'Itchy nose, throat, or roof of mouth',
                'Watery, itchy, red eyes',
                'Dark circles under eyes (called "allergic shiners")',
                'Feeling tired from poor sleep',
              ],
            },
            {
              type: 'key-point',
              title: 'How to Tell Allergies from a Cold',
              content:
                'Allergies usually last for weeks, cause itchy eyes, and do not cause fever. Colds usually last 7-10 days and may cause fever and body aches.',
            },
          ],
        },
        {
          id: 'simple-treatments',
          title: 'Feeling Better: Simple Solutions',
          contentBlocks: [
            {
              type: 'text',
              content:
                'There are several ways to manage allergies, from avoiding triggers to taking medicine.',
            },
            {
              type: 'comparison',
              title: 'Ways to Feel Better',
              content: [
                {
                  label: 'Avoid Triggers',
                  description:
                    'Stay inside on high pollen days, use air filters, keep windows closed, wash bedding in hot water.',
                },
                {
                  label: 'Saline Nasal Spray',
                  description:
                    'Salt water rinse that flushes pollen and mucus from your nose. Safe and can be used often.',
                },
                {
                  label: 'Antihistamine Pills',
                  description:
                    'Medicines that stop the itching and sneezing. Many are available without a prescription.',
                },
                {
                  label: 'Nasal Spray Medicine',
                  description:
                    'Special sprays that reduce swelling in your nose. Takes a few days to work fully.',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'When to See a Doctor',
              content:
                'See a doctor if your symptoms are severe, last more than a few weeks, or do not improve with over-the-counter medicines.',
            },
          ],
        },
      ],
      keyTerms: [
        {
          term: 'Allergic Rhinitis',
          definition: "Inflammation of the nose caused by an allergic reaction—often called 'hay fever.'",
        },
        {
          term: 'Pollen',
          definition: 'Tiny particles released by plants that can trigger allergy symptoms.',
        },
        {
          term: 'Histamine',
          definition: 'A chemical your body releases during allergies that causes itching, sneezing, and runny nose.',
        },
        {
          term: 'Antihistamine',
          definition: 'Medicine that blocks histamine to reduce allergy symptoms.',
        },
        {
          term: 'Dander',
          definition: 'Tiny skin flakes from animals that can trigger allergies.',
        },
      ],
    },

    // ========================================================================
    // LEVEL 2: Developing (10th Grade)
    // ========================================================================
    2: {
      level: 2,
      title: 'Understanding Allergic Rhinitis',
      summary:
        'Learn how the immune system reacts to allergens, the role of histamine, and how different medications work to control symptoms.',
      estimatedTimeMinutes: 15,
      prerequisites: ['Level 1: Allergic Rhinitis Basics'],
      learningObjectives: [
        'Explain how the immune system responds to allergens',
        'Describe what histamine does in the body',
        'Understand basic nasal anatomy involved in allergies',
        'Identify different types of allergy medications and how they work',
      ],
      sections: [
        {
          id: 'immune-system-response',
          title: 'Your Immune System and Allergies',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Your immune system normally protects you from germs like bacteria and viruses. In allergic rhinitis, it mistakes harmless substances (allergens) for threats and mounts an attack.',
            },
            {
              type: 'diagram',
              title: 'The Allergic Response',
              content: `First Exposure:
  Allergen enters nose → Immune system recognizes it as foreign
  → Creates special antibodies (IgE) → IgE attaches to mast cells

Later Exposures:
  Allergen enters again → Binds to IgE on mast cells
  → Mast cells release chemicals (histamine, etc.)
  → Symptoms appear (sneezing, itching, runny nose)`,
            },
            {
              type: 'text',
              content:
                'The first time you encounter an allergen, your body prepares for future encounters by making IgE antibodies. This is called sensitization.',
            },
          ],
        },
        {
          id: 'histamine-role',
          title: 'Histamine: The Main Culprit',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Histamine is the chemical most responsible for allergy symptoms. It is stored in special cells called mast cells, which are found throughout your body, especially in the nose, eyes, and lungs.',
            },
            {
              type: 'table',
              title: 'What Histamine Does',
              content: [
                {
                  effect: 'Blood vessels widen',
                  result: 'Redness, warmth, swelling in nasal tissues',
                },
                {
                  effect: 'Blood vessels become leaky',
                  result: 'Fluid leaks into tissues → runny nose, watery eyes',
                },
                {
                  effect: 'Nerve endings become sensitive',
                  result: 'Itching and sneezing reflex',
                },
                {
                  effect: 'Mucus glands activate',
                  result: 'Increased mucus production → congestion',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Key Concept',
              content:
                'Antihistamine medications work by blocking histamine from attaching to its receptors, stopping the allergic symptoms.',
            },
          ],
        },
        {
          id: 'nasal-anatomy-basics',
          title: 'The Nose: More Than You Think',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Your nose is the first line of defense for your breathing system. It warms, humidifies, and filters the air you breathe.',
            },
            {
              type: 'list',
              title: 'Key Parts of the Nasal Passage',
              content: [
                'Nasal Cavity: The hollow space inside your nose',
                'Nasal Septum: The wall dividing left and right sides',
                'Turbinates: Curved structures that warm and humidify air',
                'Nasal Mucosa: The lining that produces mucus and contains mast cells',
                'Cilia: Tiny hair-like structures that move mucus out',
              ],
            },
            {
              type: 'text',
              content:
                'The nasal mucosa contains many blood vessels and mast cells. When histamine is released, these blood vessels swell, causing the stuffy feeling of nasal congestion.',
            },
          ],
        },
        {
          id: 'medication-types',
          title: 'Medicines That Help',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Different allergy medications work at different points in the allergic response. Some stop the reaction, while others treat the symptoms.',
            },
            {
              type: 'comparison',
              title: 'Types of Allergy Medications',
              content: [
                {
                  label: 'Antihistamines (Pills)',
                  description:
                    'Block histamine receptors. Good for: sneezing, itching, runny nose. Examples: cetirizine (Zyrtec), loratadine (Claritin), fexofenadine (Allegra).',
                },
                {
                  label: 'Antihistamines (Nasal Sprays)',
                  description:
                    'Work directly in the nose. Fast relief for nasal symptoms. Example: azelastine (Astepro).',
                },
                {
                  label: 'Decongestants',
                  description:
                    'Shrink swollen blood vessels. Good for stuffiness. Examples: pseudoephedrine (Sudafed), phenylephrine.',
                },
                {
                  label: 'Nasal Steroid Sprays',
                  description:
                    'Reduce inflammation. Most effective for all nasal symptoms. Examples: fluticasone (Flonase), triamcinolone (Nasacort).',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Important Note',
              content:
                'Nasal steroid sprays work best when used daily, not just when symptoms occur. They can take several days to reach full effect.',
            },
          ],
        },
      ],
      keyTerms: [
        {
          term: 'IgE Antibody',
          definition:
            'A type of antibody that triggers allergic reactions by binding to allergens and activating mast cells.',
        },
        {
          term: 'Mast Cell',
          definition:
            'An immune cell found in tissues that releases histamine and other chemicals during allergic reactions.',
        },
        {
          term: 'Sensitization',
          definition: 'The first exposure to an allergen where the immune system creates IgE antibodies.',
        },
        {
          term: 'Nasal Mucosa',
          definition: 'The moist tissue lining the nasal cavity that contains blood vessels and immune cells.',
        },
        {
          term: 'Turbinates',
          definition: 'Bony structures in the nose covered with mucosa that help warm and humidify air.',
        },
        {
          term: 'Decongestant',
          definition: 'Medication that shrinks swollen blood vessels to relieve nasal congestion.',
        },
      ],
    },

    // ========================================================================
    // LEVEL 3: Standard (12th Grade)
    // ========================================================================
    3: {
      level: 3,
      title: 'Allergic Rhinitis Pathophysiology',
      summary:
        'Explore the IgE-mediated immune response, the late-phase allergic reaction, detailed nasal anatomy, and evidence-based pharmacological treatments.',
      estimatedTimeMinutes: 25,
      prerequisites: ['Level 2: Understanding Allergic Rhinitis', 'Basic biology knowledge'],
      learningObjectives: [
        'Describe the complete IgE-mediated allergic response',
        'Differentiate early and late-phase allergic reactions',
        'Explain nasal anatomy and its role in allergic inflammation',
        'Compare mechanisms of antihistamines, nasal steroids, and leukotriene modifiers',
        'Apply treatment strategies based on symptom patterns',
      ],
      sections: [
        {
          id: 'ige-mediated-response',
          title: 'The IgE-Mediated Allergic Response',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Allergic rhinitis is a Type I hypersensitivity reaction mediated by immunoglobulin E (IgE). This process involves antigen presentation, T-cell activation, B-cell class switching, and mast cell degranulation.',
            },
            {
              type: 'diagram',
              title: 'Sensitization Phase (First Exposure)',
              content: `Allergen enters nasal mucosa
    ↓
Antigen-presenting cell (dendritic cell) captures allergen
    ↓
Presents allergen to T-helper 2 (Th2) cells
    ↓
Th2 cells release cytokines (IL-4, IL-13)
    ↓
B cells switch to produce IgE antibodies
    ↓
IgE binds to high-affinity receptors (FcεRI) on mast cells
    ↓
Mast cells are now "sensitized" and ready`,
            },
            {
              type: 'diagram',
              title: 'Effector Phase (Re-exposure)',
              content: `Allergen re-enters nasal mucosa
    ↓
Binds to IgE on sensitized mast cells (cross-linking)
    ↓
Mast cell activation and degranulation
    ↓
Release of pre-formed mediators:
  • Histamine (seconds)
  • Tryptase
  • Chymase
    ↓
Synthesis of new mediators:
  • Leukotrienes (LTC4, LTD4, LTE4)
  • Prostaglandins (PGD2)
  • Cytokines (TNF-α, IL-4, IL-5, IL-13)
    ↓
Clinical symptoms develop`,
            },
            {
              type: 'key-point',
              title: 'Clinical Relevance',
              content:
                'Understanding this cascade explains why treatments work at different stages: avoidance prevents allergen entry, steroids reduce Th2 activation, antihistamines block histamine receptors.',
            },
          ],
        },
        {
          id: 'early-late-phase',
          title: 'Early and Late-Phase Reactions',
          contentBlocks: [
            {
              type: 'text',
              content:
                'The allergic response occurs in two distinct phases with different timing, mediators, and clinical features.',
            },
            {
              type: 'comparison',
              title: 'Early vs. Late Phase Reaction',
              content: [
                {
                  label: 'Early Phase (Minutes)',
                  description:
                    'Mediated by pre-formed histamine. Symptoms: sneezing, itching, watery rhinorrhea, clear mucus. Peak at 15-30 minutes.',
                },
                {
                  label: 'Late Phase (Hours)',
                  description:
                    'Mediated by leukotrienes, prostaglandins, and inflammatory cells. Symptoms: nasal congestion, thick mucus, sustained inflammation. Peak at 6-12 hours.',
                },
              ],
            },
            {
              type: 'text',
              content:
                'The late-phase reaction involves recruitment of inflammatory cells including eosinophils, neutrophils, and additional mast cells to the nasal mucosa. This explains why some people have persistent symptoms even after the allergen is gone.',
            },
            {
              type: 'table',
              title: 'Mediators and Their Effects',
              content: [
                {
                  mediator: 'Histamine',
                  source: 'Mast cells',
                  effects: 'Vasodilation, vascular permeability, itching, sneezing',
                },
                {
                  mediator: 'Leukotrienes (C4, D4, E4)',
                  source: 'Mast cells',
                  effects: 'Bronchoconstriction, mucus secretion, prolonged congestion',
                },
                {
                  mediator: 'Prostaglandin D2',
                  source: 'Mast cells',
                  effects: 'Vasodilation, mucus secretion, recruits eosinophils',
                },
                {
                  mediator: 'Cytokines (IL-4, IL-5, IL-13)',
                  source: 'Mast cells, Th2 cells',
                  effects: 'Promotes IgE production, eosinophil recruitment and survival',
                },
              ],
            },
          ],
        },
        {
          id: 'nasal-anatomy-detailed',
          title: 'Nasal Anatomy and Physiology',
          contentBlocks: [
            {
              type: 'text',
              content:
                'The nasal cavity is a complex structure with specialized functions in filtration, humidification, temperature regulation, and olfaction. Understanding its anatomy explains the symptoms and treatment approaches in allergic rhinitis.',
            },
            {
              type: 'diagram',
              title: 'Nasal Cavity Structures',
              content: `External Nose → Nasal Vestibule → Nasal Cavity

Nasal Cavity Features:
• Vestibule: Anterior entrance with vibrissae (hairs)
• Septum: Medial wall dividing left and right
• Floor: Hard palate
• Roof: Cribriform plate (olfactory nerves pass through)
• Lateral Wall: Contains turbinates (conchae)

Turbinates (Superior, Middle, Inferior):
• Covered in respiratory mucosa
• Rich blood supply for warming air
• Increase surface area for conditioning air
• Inferior turbinate is largest; swells with allergies

Meatuses (passages beneath turbinates):
• Superior meatus: Posterior ethmoid drainage
• Middle meatus: Frontal, maxillary, anterior ethmoid drainage
• Inferior meatus: Nasolacrimal duct drainage`,
            },
            {
              type: 'text',
              content:
                'The nasal mucosa contains pseudostratified ciliated columnar epithelium with goblet cells. Cilia beat toward the nasopharynx (mucociliary clearance), moving mucus and trapped particles to be swallowed.',
            },
            {
              type: 'key-point',
              title: 'Clinical Correlation',
              content:
                'Allergic inflammation causes turbinate swelling (especially inferior turbinates), increased mucus production from goblet cells, and impaired ciliary function—explaining congestion and post-nasal drip.',
            },
          ],
        },
        {
          id: 'pharmacology-overview',
          title: 'Pharmacological Treatments: Mechanisms',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Allergic rhinitis medications target different points in the inflammatory cascade. Selection depends on symptom type, severity, and patient preferences.',
            },
            {
              type: 'table',
              title: 'Antihistamines: First and Second Generation',
              content: [
                {
                  feature: 'Mechanism',
                  firstGen: 'Non-selective H1 antagonists',
                  secondGen: 'Selective peripheral H1 antagonists',
                },
                {
                  feature: 'Examples',
                  firstGen: 'Diphenhydramine, chlorpheniramine',
                  secondGen: 'Cetirizine, loratadine, fexofenadine',
                },
                {
                  feature: 'Sedation',
                  firstGen: 'High (cross blood-brain barrier)',
                  secondGen: 'Low to minimal',
                },
                {
                  feature: 'Duration',
                  firstGen: '4-6 hours',
                  secondGen: '12-24 hours',
                },
                {
                  feature: 'Best for',
                  firstGen: 'Acute symptoms, sleep aid',
                  secondGen: 'Daily control, daytime use',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Intranasal corticosteroids are the most effective monotherapy for allergic rhinitis. They reduce inflammation by inhibiting multiple inflammatory pathways and preventing both early and late-phase reactions.',
            },
            {
              type: 'table',
              title: 'Nasal Corticosteroids',
              content: [
                {
                  drug: 'Fluticasone propionate (Flonase)',
                  potency: 'High',
                  dosing: 'Once daily',
                  notes: 'First-line choice, well-tolerated',
                },
                {
                  drug: 'Triamcinolone (Nasacort)',
                  potency: 'Medium-high',
                  dosing: 'Once daily',
                  notes: 'Available over-the-counter',
                },
                {
                  drug: 'Budesonide (Rhinocort)',
                  potency: 'Medium',
                  dosing: 'Once daily',
                  notes: 'Lower systemic absorption',
                },
                {
                  drug: 'Mometasone (Nasonex)',
                  potency: 'High',
                  dosing: 'Once daily',
                  notes: 'Good for nasal polyps too',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Mechanism of Nasal Steroids',
              content:
                'Corticosteroids bind to glucocorticoid receptors, forming complexes that enter the nucleus and suppress transcription of inflammatory genes (IL-4, IL-5, IL-13). They also reduce eosinophil survival and recruitment.',
            },
          ],
        },
        {
          id: 'treatment-strategies',
          title: 'Treatment Selection Based on Symptoms',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Matching the right treatment to the dominant symptoms improves outcomes and patient satisfaction.',
            },
            {
              type: 'table',
              title: 'Symptom-Guided Treatment',
              content: [
                {
                  symptoms: 'Sneezing, itching, rhinorrhea',
                  treatment: 'Second-generation antihistamine or intranasal antihistamine',
                },
                {
                  symptoms: 'Nasal congestion dominant',
                  treatment: 'Intranasal corticosteroid (most effective)',
                },
                {
                  symptoms: 'All symptoms moderate-severe',
                  treatment: 'Intranasal corticosteroid ± antihistamine',
                },
                {
                  symptoms: 'Eye symptoms prominent',
                  treatment: 'Add intranasal antihistamine or ocular antihistamine drops',
                },
                {
                  symptoms: 'Persistent despite medications',
                  treatment: 'Combination therapy, consider immunotherapy',
                },
              ],
            },
            {
              type: 'mnemonic',
              title: 'Treatment Ladder: "ANTS"',
              content:
                'A - Antihistamines (for mild, intermittent symptoms) | N - Nasal steroids (for persistent symptoms) | T - Combination Therapy (steroid + antihistamine) | S - Step up to Immunotherapy (for refractory cases)',
            },
          ],
        },
      ],
      keyTerms: [
        {
          term: 'Type I Hypersensitivity',
          definition:
            'Immediate allergic reaction mediated by IgE and mast cell degranulation.',
        },
        {
          term: 'FcεRI Receptor',
          definition:
            'High-affinity receptor for IgE on mast cells and basophils; cross-linking triggers degranulation.',
        },
        {
          term: 'Degranulation',
          definition: 'Release of inflammatory mediators from mast cell granules.',
        },
        {
          term: 'Leukotrienes',
          definition:
            'Lipid mediators derived from arachidonic acid; cause bronchoconstriction and vascular permeability.',
        },
        {
          term: 'Eosinophil',
          definition:
            'White blood cell recruited during late-phase reactions; releases cytotoxic proteins and promotes inflammation.',
        },
        {
          term: 'Th2 Cells',
          definition:
            'T-helper cells that promote allergic responses by releasing IL-4, IL-5, and IL-13.',
        },
        {
          term: 'Mucociliary Clearance',
          definition:
            'Mechanism by which ciliated cells move mucus and trapped particles toward the throat.',
        },
      ],
    },

    // ========================================================================
    // LEVEL 4: Advanced (College/Biochemistry)
    // ========================================================================
    4: {
      level: 4,
      title: 'Allergic Rhinitis: Molecular Mechanisms and Clinical Management',
      summary:
        'Comprehensive exploration of molecular pathways, intracellular signaling, detailed pharmacology, and evidence-based clinical management strategies.',
      estimatedTimeMinutes: 35,
      prerequisites: [
        'Level 3: Allergic Rhinitis Pathophysiology',
        'Biochemistry and cell biology knowledge',
      ],
      learningObjectives: [
        'Explain intracellular signaling pathways in mast cell activation',
        'Describe the arachidonic acid cascade and its products',
        'Analyze pharmacokinetics and pharmacodynamics of allergy medications',
        'Implement stepwise treatment algorithms',
        'Evaluate evidence for allergen immunotherapy',
      ],
      sections: [
        {
          id: 'intracellular-signaling',
          title: 'Intracellular Signaling in Mast Cell Activation',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Mast cell activation involves a complex cascade of intracellular signaling events following IgE receptor cross-linking. Understanding these pathways reveals therapeutic targets and explains drug mechanisms.',
            },
            {
              type: 'diagram',
              title: 'Signal Transduction Pathway',
              content: `IgE cross-linking on FcεRI
    ↓
Lyn kinase phosphorylates ITAMs on FcεRI β and γ chains
    ↓
Syk kinase recruitment and activation
    ↓
LAT (Linker for Activation of T cells) phosphorylation
    ↓
Multiple downstream pathways activated:

Pathway 1 - Calcium Mobilization:
  PLCγ → PIP2 → IP3 + DAG
  IP3 → ER calcium release
  Store-operated calcium entry (CRAC channels)
  → Degranulation (requires calcium)

Pathway 2 - MAP Kinase Cascade:
  Ras → Raf → MEK → ERK
  → Cytokine gene transcription
  → Cell survival and activation

Pathway 3 - PI3K/Akt Pathway:
  PI3K → PIP3 → Akt activation
  → Cell survival, metabolism, migration

Pathway 4 - NF-κB Activation:
  IKK phosphorylates IκB
  IκB degradation releases NF-κB
  → Nuclear translocation
  → Pro-inflammatory gene transcription`,
            },
            {
              type: 'key-point',
              title: 'Therapeutic Implications',
              content:
                'Corticosteroids inhibit NF-κB and AP-1 transcription factors. Calcineurin inhibitors (tacrolimus, used topically) block T-cell activation. Omalizumab (anti-IgE) prevents FcεRI cross-linking.',
            },
          ],
        },
        {
          id: 'arachidonic-acid-cascade',
          title: 'The Arachidonic Acid Cascade',
          contentBlocks: [
            {
              type: 'text',
              content:
                'The arachidonic acid cascade generates potent lipid mediators from membrane phospholipids. These mediators are critical in allergic inflammation and represent important therapeutic targets.',
            },
            {
              type: 'diagram',
              title: 'Arachidonic Acid Pathways',
              content: `Membrane Phospholipids
    ↓
Phospholipase A2 (cPLA2) activated by calcium
    ↓
Arachidonic Acid Released
    ↓ (two major pathways)

Cyclooxygenase (COX) Pathway:
  COX-1 / COX-2
    ↓
  Prostaglandin G2 → H2 (by hydroperoxidase)
    ↓
  Specific synthases:
    • PGD2 synthase (mast cells) → PGD2
    • PGE2 synthase → PGE2
    • PGF2α synthase → PGF2α
    • TXA2 synthase (platelets) → Thromboxane A2

Lipoxygenase (LOX) Pathway:
  5-LOX + 5-LOX-activating protein (FLAP)
    ↓
  5-HPETE
    ↓
  LTA4
    ↓ (two branches)
    • LTA4 hydrolase → LTB4 (neutrophil chemoattractant)
    • LTC4 synthase → LTC4 → LTD4 → LTE4 (cysteinyl leukotrienes)`,
            },
            {
              type: 'table',
              title: 'Eicosanoid Functions in Allergic Rhinitis',
              content: [
                {
                  mediator: 'PGD2',
                  effects: 'Vasodilation, bronchoconstriction, eosinophil chemotaxis, TH2 recruitment',
                },
                {
                  mediator: 'Cysteinyl leukotrienes (LTC4, LTD4, LTE4)',
                  effects: '100x more potent than histamine; vascular permeability, mucus secretion, prolonged congestion',
                },
                {
                  mediator: 'PGE2',
                  effects: 'Mixed effects; can promote or suppress inflammation depending on context',
                },
                {
                  mediator: 'LTB4',
                  effects: 'Neutrophil chemotaxis and activation',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Clinical Relevance',
              content:
                'Leukotriene receptor antagonists (montelukast) block cysteinyl leukotriene receptors. 5-LOX inhibitors (zileuton) block leukotriene synthesis but carry hepatotoxicity risk.',
            },
          ],
        },
        {
          id: 'pharmacokinetics',
          title: 'Pharmacokinetics and Pharmacodynamics',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Understanding the pharmacokinetic profiles of allergy medications informs dosing, timing, and selection for individual patients.',
            },
            {
              type: 'table',
              title: 'Oral Second-Generation Antihistamines',
              content: [
                {
                  drug: 'Cetirizine',
                  onset: '1 hour',
                  duration: '24 hours',
                  metabolism: 'Minimal (primarily renal elimination)',
                  sedation: 'Low-moderate (most sedating of 2nd gen)',
                },
                {
                  drug: 'Levocetirizine',
                  onset: '1 hour',
                  duration: '24 hours',
                  metabolism: 'Renal (active enantiomer of cetirizine)',
                  sedation: 'Low',
                },
                {
                  drug: 'Loratadine',
                  onset: '1-3 hours',
                  duration: '24 hours',
                  metabolism: 'Hepatic (CYP3A4) to active desloratadine',
                  sedation: 'Minimal',
                },
                {
                  drug: 'Desloratadine',
                  onset: '1 hour',
                  duration: '24 hours',
                  metabolism: 'Hepatic (active metabolite)',
                  sedation: 'Minimal',
                },
                {
                  drug: 'Fexofenadine',
                  onset: '1 hour',
                  duration: '12-24 hours',
                  metabolism: 'Minimal (5% metabolized)',
                  sedation: 'None',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Intranasal corticosteroids have low systemic bioavailability due to first-pass hepatic metabolism, but systemic absorption can still occur. Lipophilicity and receptor binding affinity vary between agents.',
            },
            {
              type: 'table',
              title: 'Intranasal Corticosteroid Pharmacology',
              content: [
                {
                  drug: 'Fluticasone propionate',
                  bioavailability: '<1%',
                  receptorAffinity: 'Very high',
                  lipophilicity: 'High',
                },
                {
                  drug: 'Mometasone furoate',
                  bioavailability: '<1%',
                  receptorAffinity: 'Very high',
                  lipophilicity: 'High',
                },
                {
                  drug: 'Budesonide',
                  bioavailability: '11%',
                  receptorAffinity: 'High',
                  lipophilicity: 'Moderate',
                },
                {
                  drug: 'Triamcinolone acetonide',
                  bioavailability: '<1%',
                  receptorAffinity: 'High',
                  lipophilicity: 'Moderate',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Clinical Pearl',
              content:
                'Fexofenadine absorption is reduced by grapefruit, apple, and orange juice (via OATP transporter inhibition). Take with water only.',
            },
          ],
        },
        {
          id: 'clinical-algorithm',
          title: 'Stepwise Treatment Algorithm',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Evidence-based treatment follows a stepwise approach based on symptom severity, duration, and response to therapy.',
            },
            {
              type: 'diagram',
              title: 'Stepwise Management',
              content: `STEP 1: All patients
• Allergen avoidance strategies
• Saline nasal irrigation

STEP 2: Mild/Intermittent symptoms
• Second-generation oral antihistamine OR
• Intranasal antihistamine

STEP 3: Moderate/Severe or Persistent
• Intranasal corticosteroid (first-line)
• Add antihistamine if needed

STEP 4: Inadequate control on Step 3
• Combination intranasal corticosteroid + antihistamine spray
• Consider leukotriene receptor antagonist
• Evaluate for adherence and technique

STEP 5: Refractory symptoms
• Consider allergen immunotherapy (SCIT or SLIT)
• Refer to allergist
• Evaluate for comorbidities (sinusitis, asthma)`,
            },
            {
              type: 'text',
              content:
                'The ARIA (Allergic Rhinitis and its Impact on Asthma) guidelines classify rhinitis by duration (intermittent vs persistent) and severity (mild vs moderate-severe) to guide treatment.',
            },
          ],
        },
        {
          id: 'immunotherapy-evidence',
          title: 'Allergen Immunotherapy: Evidence and Mechanisms',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Allergen immunotherapy (AIT) is the only disease-modifying treatment for allergic rhinitis. It can induce long-term remission and prevent progression to asthma.',
            },
            {
              type: 'comparison',
              title: 'SCIT vs SLIT',
              content: [
                {
                  label: 'Subcutaneous Immunotherapy (SCIT)',
                  description:
                    'Injections in clinic. Weekly build-up phase (3-6 months), then monthly maintenance (3-5 years). Efficacy 70-85%. Risk of systemic reactions.',
                },
                {
                  label: 'Sublingual Immunotherapy (SLIT)',
                  description:
                    'Daily tablets or drops at home. Pre-seasonal or continuous. Efficacy 60-75%. Better safety profile; rare systemic reactions. FDA-approved tablets for grass, ragweed, dust mite.',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Immunotherapy mechanisms involve immune deviation from Th2 to Th1 responses, induction of regulatory T cells (Tregs), production of blocking IgG4 antibodies, and reduced IgE-mediated responses.',
            },
            {
              type: 'table',
              title: 'Immunotherapy Mechanisms',
              content: [
                {
                  mechanism: 'Treg induction',
                  change: 'Increased IL-10 and TGF-β production',
                  effect: 'Immune suppression and tolerance',
                },
                {
                  mechanism: 'IgG4 production',
                  change: 'Rising IgG4:IgE ratio',
                  effect: 'Blocking antibodies compete with IgE for allergen binding',
                },
                {
                  mechanism: 'Th1/Th2 shift',
                  change: 'Reduced IL-4, IL-5, IL-13; increased IFN-γ',
                  effect: 'Decreased IgE production and eosinophil recruitment',
                },
                {
                  mechanism: 'Mast cell modification',
                  change: 'Reduced FcεRI expression',
                  effect: 'Decreased sensitivity to allergen triggering',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Candidate Selection',
              content:
                'Ideal candidates: Confirmed IgE-mediated allergy, symptoms despite medications, desire to reduce medication burden, or contraindications to medications. Not suitable for uncontrolled asthma.',
            },
          ],
        },
      ],
      keyTerms: [
        {
          term: 'ITAM',
          definition:
            'Immunoreceptor Tyrosine-based Activation Motif; signaling domain on FcεRI that initiates activation cascade.',
        },
        {
          term: 'Syk Kinase',
          definition:
            'Spleen tyrosine kinase; critical signaling molecule downstream of FcεRI activation.',
        },
        {
          term: 'NF-κB',
          definition:
            'Nuclear Factor kappa B; transcription factor controlling expression of inflammatory genes.',
        },
        {
          term: 'cPLA2',
          definition:
            'Cytosolic phospholipase A2; enzyme that releases arachidonic acid from membrane phospholipids.',
        },
        {
          term: '5-LOX',
          definition: '5-lipoxygenase; enzyme that initiates leukotriene synthesis from arachidonic acid.',
        },
        {
          term: 'FLAP',
          definition:
            '5-lipoxygenase-activating protein; required for leukotriene synthesis; target of some investigational drugs.',
        },
        {
          term: 'OATP',
          definition:
            'Organic Anion Transporting Polypeptide; transporter involved in fexofenadine absorption.',
        },
        {
          term: 'Treg Cell',
          definition:
            'Regulatory T cell; immunosuppressive cell type induced by immunotherapy that promotes tolerance.',
        },
      ],
    },

    // ========================================================================
    // LEVEL 5: Expert (Graduate/Research)
    // ========================================================================
    5: {
      level: 5,
      title: 'Advanced Allergic Rhinitis: Research Frontiers and Complex Cases',
      summary:
        'Explore cutting-edge research, biologic therapies, refractory rhinitis, comorbidity management, and emerging therapeutic targets.',
      estimatedTimeMinutes: 45,
      prerequisites: [
        'Level 4: Molecular Mechanisms and Clinical Management',
        'Advanced immunology knowledge',
        'Clinical experience with allergy patients',
      ],
      learningObjectives: [
        'Evaluate evidence for biologic therapies in allergic rhinitis',
        'Analyze refractory rhinitis and differential diagnoses',
        'Manage allergic rhinitis with complex comorbidities',
        'Interpret emerging therapeutic targets and clinical trials',
        'Apply precision medicine approaches to allergy care',
      ],
      sections: [
        {
          id: 'biologic-therapies',
          title: 'Biologic Therapies: Current Evidence',
          contentBlocks: [
            {
              type: 'text',
              content:
                'While biologics have revolutionized asthma and atopic dermatitis treatment, their role in isolated allergic rhinitis remains limited. However, they are important in severe cases with comorbid conditions.',
            },
            {
              type: 'table',
              title: 'Biologics in Allergic Disease',
              content: [
                {
                  biologic: 'Omalizumab (anti-IgE)',
                  target: 'Free IgE',
                  efficacy: 'Effective for allergic asthma and chronic urticaria',
                  rhinitisRole: 'May help in severe cases with asthma; not approved as monotherapy for AR',
                },
                {
                  biologic: 'Dupilumab (anti-IL-4Rα)',
                  target: 'IL-4 and IL-13',
                  efficacy: 'Highly effective for asthma, atopic dermatitis, CRSwNP',
                  rhinitisRole: 'Improves nasal polyposis; off-label for severe AR',
                },
                {
                  biologic: 'Mepolizumab (anti-IL-5)',
                  target: 'IL-5',
                  efficacy: 'Effective for eosinophilic asthma, CRSwNP',
                  rhinitisRole: 'Limited direct AR data; may help polyp-related rhinitis',
                },
                {
                  biologic: 'Tezepelumab (anti-TSLP)',
                  target: 'TSLP',
                  efficacy: 'Broad efficacy in severe asthma',
                  rhinitisRole: 'Investigational for AR; targets epithelial alarmins',
                },
              ],
            },
            {
              type: 'text',
              content:
                'The cost-effectiveness of biologics for isolated allergic rhinitis is poor compared to standard therapies. Their use is reserved for patients with severe asthma, nasal polyps, or atopic dermatitis where multiple indications exist.',
            },
            {
              type: 'case-study',
              title: 'Case: Severe Allergic Rhinitis with Asthma',
              content:
                '32F with severe seasonal allergic rhinitis (unresponsive to maximal medical therapy including combination nasal spray), concurrent moderate persistent allergic asthma. Started on omalizumab for asthma indication. After 4 months, reported 80% improvement in nasal symptoms and significant reduction in rescue inhaler use. This demonstrates the "bonus" effect when treating comorbid conditions.',
            },
          ],
        },
        {
          id: 'refractory-rhinitis',
          title: 'Refractory Rhinitis: Differential and Approach',
          contentBlocks: [
            {
              type: 'text',
              content:
                'When patients fail appropriate maximal medical therapy, reconsider the diagnosis. Many conditions mimic or complicate allergic rhinitis.',
            },
            {
              type: 'table',
              title: 'Differential Diagnosis for Refractory Rhinitis',
              content: [
                {
                  condition: 'Chronic rhinosinusitis (with/without polyps)',
                  clues: 'Facial pressure, decreased smell, nasal endoscopy findings',
                  workup: 'CT scan, endoscopy',
                },
                {
                  condition: 'Non-allergic rhinitis (NARES, vasomotor)',
                  clues: 'Negative skin tests, triggers include irritants, weather changes',
                  workup: 'Nasal cytology (eosinophils in NARES)',
                },
                {
                  condition: 'Drug-induced rhinitis',
                  clues: 'Rhinitis medicamentosa (rebound from decongestants), ACE inhibitors',
                  workup: 'Medication history',
                },
                {
                  condition: 'Anatomic abnormalities',
                  clues: 'Septal deviation, concha bullosa, adenoid hypertrophy',
                  workup: 'CT scan, nasal endoscopy',
                },
                {
                  condition: 'Systemic diseases',
                  clues: 'Granulomatosis with polyangiitis, sarcoidosis, Churg-Strauss',
                  workup: 'ANCA, ACE, biopsy',
                },
                {
                  condition: 'CSF rhinorrhea',
                  clues: 'Unilateral clear drainage, positional, salty taste',
                  workup: 'β-2 transferrin test',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Local allergic rhinitis (entopy) is an emerging concept where patients have localized nasal IgE production despite negative skin tests and serum IgE. Diagnosis requires nasal allergen provocation testing with positive local IgE detection.',
            },
            {
              type: 'key-point',
              title: 'Evaluation Protocol',
              content:
                'For refractory cases: 1) Confirm medication adherence and technique, 2) Review for concurrent medications, 3) Nasal endoscopy, 4) CT if structural cause suspected, 5) Consider challenge testing for local allergy.',
            },
          ],
        },
        {
          id: 'comorbidity-management',
          title: 'Managing Complex Comorbidities',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Allergic rhinitis rarely exists in isolation. The "united airway" concept recognizes the interconnectedness of upper and lower airway disease.',
            },
            {
              type: 'table',
              title: 'AR Comorbidities and Management',
              content: [
                {
                  comorbidity: 'Allergic asthma',
                  prevalence: '20-40% of AR patients',
                  approach: 'Unified treatment; nasal steroids may improve asthma control',
                },
                {
                  comorbidity: 'Atopic dermatitis',
                  prevalence: '15-30%',
                  approach: 'Consider dupilumab if both severe; moisturizers critical',
                },
                {
                  comorbidity: 'Allergic conjunctivitis',
                  prevalence: '50-70%',
                  approach: 'Intranasal antihistamines help both; add ocular agents if needed',
                },
                {
                  comorbidity: 'Eustachian tube dysfunction',
                  prevalence: '30%',
                  approach: 'Nasal steroids, autoinflation, treat rhinitis',
                },
                {
                  comorbidity: 'Sleep disturbance',
                  prevalence: '40-60%',
                  approach: 'Nasal decongestants at bedtime; evaluate for sleep apnea',
                },
                {
                  comorbidity: 'Dental malocclusion (children)',
                  prevalence: '10-20% with chronic rhinitis',
                  approach: 'Early ENT evaluation; treat nasal obstruction',
                },
              ],
            },
            {
              type: 'text',
              content:
                'The "atopic march" describes the progression from atopic dermatitis in infancy to allergic rhinitis and asthma in childhood. Early intervention may modify this trajectory.',
            },
          ],
        },
        {
          id: 'emerging-targets',
          title: 'Emerging Therapeutic Targets',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Research is exploring novel targets upstream and downstream of current therapies, with potential for more specific and effective treatments.',
            },
            {
              type: 'table',
              title: 'Investigational Targets',
              content: [
                {
                  target: 'TSLP (Thymic Stromal Lymphopoietin)',
                  role: 'Epithelial alarmin; initiates Th2 response',
                  status: 'Tezepelumab approved for asthma; AR trials ongoing',
                },
                {
                  target: 'IL-33',
                  role: 'Alarmin released by damaged epithelium',
                  status: 'Multiple antibodies in Phase 2 for asthma/AR',
                },
                {
                  target: 'IL-25',
                  role: 'Promotes Th2 differentiation',
                  status: 'Early clinical development',
                },
                {
                  target: 'Siglec-8',
                  role: 'Inhibitory receptor on eosinophils and mast cells',
                  status: 'Lirentelimab (AK002) in development for mast cell diseases',
                },
                {
                  target: 'Histamine H4 receptor',
                  role: 'Mediates chemotaxis and pruritus',
                  status: 'Antagonists in clinical trials',
                },
                {
                  target: 'CRTH2 (DP2 receptor)',
                  role: 'Receptor for PGD2; recruits Th2 cells',
                  status: 'Mixed trial results; fevipiprant discontinued',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Gene therapy approaches, including regulatory T-cell engineering and allergen-encoding mRNA vaccines, represent long-term possibilities for disease modification.',
            },
          ],
        },
        {
          id: 'precision-medicine',
          title: 'Precision Medicine in Allergic Rhinitis',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Moving beyond one-size-fits-all approaches, precision medicine aims to match treatments to patient endotypes based on biomarkers and molecular signatures.',
            },
            {
              type: 'table',
              title: 'Endotypes of Rhinitis',
              content: [
                {
                  endotype: 'Th2-high eosinophilic',
                  biomarkers: 'High FeNO, blood/sputum eosinophils, periostatin',
                  treatment: 'Steroids, anti-IL-5, anti-IL-4/13 likely effective',
                },
                {
                  endotype: 'Th2-low non-eosinophilic',
                  biomarkers: 'Low FeNO, neutrophil-predominant',
                  treatment: 'Antihistamines, decongestants; biologics less likely to help',
                },
                {
                  endotype: 'Epithelial dysfunction',
                  biomarkers: 'Low junction proteins, high TSLP/IL-33',
                  treatment: 'Antibiotics if bacterial, barrier restoration',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Pharmacogenomic considerations include CYP2D6 variants affecting antihistamine metabolism and HLA associations with drug hypersensitivity. Personalized immunotherapy based on component-resolved diagnostics (CRD) is already in practice.',
            },
            {
              type: 'key-point',
              title: 'Future Directions',
              content:
                'Multi-omics integration (genomics, transcriptomics, metabolomics) with machine learning may enable prediction of treatment response and disease trajectory.',
            },
          ],
        },
      ],
      keyTerms: [
        {
          term: 'Endotype',
          definition:
            'A disease subtype defined by distinct pathophysiological mechanisms rather than clinical presentation.',
        },
        {
          term: 'United Airway',
          definition:
            'Concept recognizing the interconnectedness of upper and lower airway inflammation in allergic disease.',
        },
        {
          term: 'Entopy',
          definition:
            'Local production of IgE in nasal tissue despite negative systemic allergy tests.',
        },
        {
          term: 'Alarmin',
          definition:
            'Epithelial-derived cytokines (TSLP, IL-33, IL-25) released in response to damage that initiate immune responses.',
        },
        {
          term: 'CRSwNP',
          definition: 'Chronic rhinosinusitis with nasal polyps; often Type 2 inflammation-driven.',
        },
        {
          term: 'Component-Resolved Diagnostics',
          definition:
            'Allergy testing using purified allergen components rather than whole extracts for precise sensitization profiling.',
        },
        {
          term: 'FeNO',
          definition:
            'Fractional exhaled nitric oxide; biomarker of Type 2 inflammation in the airway.',
        },
        {
          term: 'Siglec-8',
          definition:
            'Sialic acid-binding immunoglobulin-like lectin-8; inhibitory receptor on eosinophils and mast cells.',
        },
      ],
    },

    // ========================================================================
    // LEVEL 6: Clinical (Physician)
    // ========================================================================
    6: {
      level: 6,
      title: 'Clinical Allergic Rhinitis: Advanced Practice',
      summary:
        'Comprehensive clinical approach to diagnosis, management of complex cases, surgical considerations, and integration into clinical practice guidelines.',
      estimatedTimeMinutes: 50,
      prerequisites: [
        'Level 5: Advanced Allergic Rhinitis',
        'Clinical experience in allergy/immunology or ENT',
      ],
      learningObjectives: [
        'Implement evidence-based diagnostic algorithms',
        'Manage complex medication interactions and contraindications',
        'Select appropriate candidates for immunotherapy and interpret protocols',
        'Coordinate multidisciplinary care for refractory cases',
        'Apply current guidelines in clinical practice',
      ],
      sections: [
        {
          id: 'clinical-diagnosis',
          title: 'Diagnostic Workup in Clinical Practice',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Accurate diagnosis of allergic rhinitis requires a combination of clinical history, physical examination, and appropriate testing. Over-testing and under-testing are both common pitfalls.',
            },
            {
              type: 'table',
              title: 'History Elements',
              content: [
                {
                  element: 'Symptom pattern',
                  assessment: 'Seasonal vs perennial; continuous vs intermittent',
                },
                {
                  element: 'Trigger identification',
                  assessment: 'Outdoor exposure, pets, dust, occupational',
                },
                {
                  element: 'Family history',
                  assessment: 'Atopy in first-degree relatives',
                },
                {
                  element: 'Treatment response',
                  assessment: 'What has worked or failed previously',
                },
                {
                  element: 'Comorbidities',
                  assessment: 'Asthma, eczema, conjunctivitis, sinusitis',
                },
                {
                  element: 'Quality of life',
                  assessment: 'Sleep, work/school performance, activities',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Physical examination should include anterior rhinoscopy (assessing nasal mucosa, secretions, and anatomy) and evaluation for signs of allergic disease (allergic shiners, Dennie-Morgan lines, nasal crease).',
            },
            {
              type: 'table',
              title: 'Diagnostic Testing',
              content: [
                {
                  test: 'Skin prick testing',
                  indication: 'Confirm IgE sensitization; identify specific allergens',
                  interpretation: 'Wheal ≥3mm larger than negative control is positive',
                },
                {
                  test: 'Serum specific IgE',
                  indication: 'Cannot discontinue antihistamines, skin disease, high anaphylaxis risk',
                  interpretation: 'Level correlates with likelihood of clinical reaction',
                },
                {
                  test: 'Nasal cytology',
                  indication: 'Distinguish allergic vs non-allergic (NARES)',
                  interpretation: '>1% eosinophils suggests allergic or NARES',
                },
                {
                  test: 'Nasal endoscopy',
                  indication: 'Refractory cases, suspected polyps, anatomic abnormalities',
                  interpretation: 'Assess turbinates, septum, meatus drainage, polyps',
                },
                {
                  test: 'CT scan',
                  indication: 'Chronic rhinosinusitis, preoperative evaluation',
                  interpretation: 'Osteomeatal complex, sinus opacification, anatomic variants',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Clinical Pearl',
              content:
                'Sensitization on testing does not equal clinical allergy. Correlation with history is essential. Component-resolved diagnostics can distinguish true sensitization from cross-reactivity.',
            },
          ],
        },
        {
          id: 'complex-pharmacology',
          title: 'Complex Pharmacological Management',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Managing allergic rhinitis in patients with multiple comorbidities requires careful medication selection and awareness of interactions.',
            },
            {
              type: 'table',
              title: 'Special Populations',
              content: [
                {
                  population: 'Pregnancy',
                  considerations: 'Budesonide ( safest steroid), loratadine, cetirizine preferred. Avoid decongestants (especially 1st trimester).',
                },
                {
                  population: 'Hypertension',
                  considerations: 'Avoid oral decongestants. Intranasal decongestants limited to 3 days.',
                },
                {
                  population: 'Glaucoma',
                  considerations: 'Anticholinergics may worsen angle-closure. Monitor IOP.',
                },
                {
                  population: 'BPH/urinary retention',
                  considerations: 'First-gen antihistamines may worsen symptoms.',
                },
                {
                  population: 'Cognitive impairment/elderly',
                  considerations: 'Avoid first-gen antihistamines (anticholinergic burden).',
                },
                {
                  population: 'Pediatrics',
                  considerations: 'Dose by age/weight. Avoid intranasal antihistamines <5 years.',
                },
              ],
            },
            {
              type: 'case-study',
              title: 'Case: Polypharmacy in Elderly Patient',
              content:
                '78M with AR, hypertension, BPH, mild cognitive impairment. Taking diphenhydramine nightly for sleep and allergies. Developed urinary retention and confusion. Switched to intranasal fluticasone + fexofenadine (no anticholinergic effects). Symptoms controlled, cognitive status improved, no urinary issues. Lesson: Beers criteria—avoid first-gen antihistamines in elderly.',
            },
            {
              type: 'text',
              content:
                'Combination therapy approaches: Intranasal steroid plus intranasal antihistamine (Azelastine/fluticasone combination spray - Dymista) has superior efficacy to either alone, with NNT of 4 for symptom improvement.',
            },
          ],
        },
        {
          id: 'immunotherapy-protocols',
          title: 'Immunotherapy: Protocols and Safety',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Implementing immunotherapy requires knowledge of build-up protocols, maintenance dosing, and emergency preparedness.',
            },
            {
              type: 'table',
              title: 'SCIT Protocols',
              content: [
                {
                  protocol: 'Traditional',
                  schedule: 'Weekly injections, increasing dose, 3-6 months to maintenance',
                  pros: 'Well-established, lower reaction rate',
                  cons: 'Long build-up period',
                },
                {
                  protocol: 'Cluster',
                  schedule: 'Multiple injections per visit, 4-8 weeks to maintenance',
                  pros: 'Rapid build-up',
                  cons: 'Higher reaction risk, requires longer visits',
                },
                {
                  protocol: 'Rush',
                  schedule: 'Multiple injections over 1-3 days',
                  pros: 'Very rapid',
                  cons: 'Highest reaction risk, requires premedication',
                },
              ],
            },
            {
              type: 'text',
              content:
                'SLIT protocols are simpler: Daily administration of pre-measured tablets (grass, ragweed, dust mite) starting 8-12 weeks before season or year-round for dust mite.',
            },
            {
              type: 'table',
              title: 'Systemic Reaction Management',
              content: [
                {
                  severity: 'Mild (pruritus, flushing)',
                  management: 'Observe, oral antihistamine, consider reducing next dose',
                },
                {
                  severity: 'Moderate (urticaria, mild bronchospasm)',
                  management: 'IM epinephrine 0.3mg (1:1000), H1/H2 blockers, observe 2-4 hours',
                },
                {
                  severity: 'Severe (hypotension, severe bronchospasm, anaphylaxis)',
                  management: 'IM epinephrine, IV fluids, O2, bronchodilators, ICU if needed',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Safety Requirements',
              content:
                'SCIT requires: 30-minute observation post-injection, epinephrine immediately available, ACLS-trained staff, informed consent discussing risks. Risk factors for systemic reactions: high allergen sensitivity, asthma, beta-blocker use, prior systemic reaction.',
            },
          ],
        },
        {
          id: 'surgical-considerations',
          title: 'Surgical Considerations in Rhinitis',
          contentBlocks: [
            {
              type: 'text',
              content:
                'While allergic rhinitis is primarily managed medically, surgical intervention may be necessary for anatomical contributions or complications.',
            },
            {
              type: 'table',
              title: 'Surgical Indications',
              content: [
                {
                  procedure: 'Septoplasty',
                  indication: 'Significant septal deviation causing obstruction',
                  notes: 'Improves nasal airflow; does not treat allergy itself',
                },
                {
                  procedure: 'Turbinate reduction',
                  indication: 'Hypertrophied turbinates refractory to medical therapy',
                  notes: 'Various techniques (cautery, RF, submucosal resection)',
                },
                {
                  procedure: 'Functional endoscopic sinus surgery (FESS)',
                  indication: 'Chronic rhinosinusitis with/without polyps',
                  notes: 'Restores drainage; polyps often recur without medical control',
                },
                {
                  procedure: 'Balloon sinuplasty',
                  indication: 'Isolated ostiomeatal obstruction',
                  notes: 'Less invasive; preserves mucosa',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Postoperative management in allergic patients requires optimization of allergic control to prevent recurrence of polyps and promote healing.',
            },
          ],
        },
        {
          id: 'guidelines-integration',
          title: 'Integrating Guidelines into Practice',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Multiple guidelines inform allergic rhinitis management. Understanding their nuances helps tailor care.',
            },
            {
              type: 'table',
              title: 'Key Guidelines',
              content: [
                {
                  guideline: 'ARIA (2023 revision)',
                  focus: 'International consensus; emphasizes treatable traits',
                  keyPoint: 'Control-based management rather than symptom severity alone',
                },
                {
                  guideline: 'AAAAI/ACAAI Practice Parameters',
                  focus: 'US-focused evidence-based recommendations',
                  keyPoint: 'Intranasal steroids first-line for persistent symptoms',
                },
                {
                  guideline: 'EPOS (European Position Paper)',
                  focus: 'Rhinosinusitis and nasal polyps with AR overlap',
                  keyPoint: 'Unified airway approach; emphasizes biologics for severe CRSwNP',
                },
              ],
            },
            {
              type: 'text',
              content:
                'Shared decision-making is essential. Factors influencing treatment choice include: symptom severity, patient preferences (avoidance of sprays, concern about steroids), adherence considerations, cost, and comorbidities.',
            },
            {
              type: 'case-study',
              title: 'Case: Guideline-Based Management',
              content:
                '28F with persistent moderate-severe allergic rhinitis to dust mite and cat. Lives with cat. Failed cetirizine monotherapy. Per ARIA guidelines: Step up to intranasal fluticasone. Partial response after 2 weeks. Per guidelines: Add intranasal antihistamine (combination spray). Good control achieved. Discussed cat allergen immunotherapy (SLIT not available for cat; SCIT considered but patient has needle phobia). Shared decision: Continue combination therapy, implement environmental controls, consider SCIT when ready.',
            },
          ],
        },
        {
          id: 'quality-metrics',
          title: 'Quality Metrics and Outcomes',
          contentBlocks: [
            {
              type: 'text',
              content:
                'Measuring outcomes in allergic rhinitis care ensures quality and demonstrates value.',
            },
            {
              type: 'table',
              title: 'Outcome Measures',
              content: [
                {
                  measure: 'Rhinoconjunctivitis Quality of Life Questionnaire (RQLQ)',
                  use: 'Disease-specific QOL; 28 items across 7 domains',
                },
                {
                  measure: 'Total Nasal Symptom Score (TNSS)',
                  use: 'Daily symptom diary; rhinorrhea, congestion, sneezing, itching',
                },
                {
                  measure: 'Total Ocular Symptom Score (TOSS)',
                  use: 'Eye symptom assessment',
                },
                {
                  measure: 'Control',
                  use: 'ARIA control classification (well-controlled, partly controlled, uncontrolled)',
                },
                {
                  measure: 'Medication utilization',
                  use: 'Rescue medication use, adherence to controller therapy',
                },
                {
                  measure: 'Productivity',
                  use: 'Work/school absenteeism and presenteeism',
                },
              ],
            },
            {
              type: 'key-point',
              title: 'Value-Based Care',
              content:
                'Demonstrating reduced emergency visits, improved productivity, and patient-reported outcomes supports the value of allergy specialty care and immunotherapy.',
            },
          ],
        },
      ],
      keyTerms: [
        {
          term: 'ARIA',
          definition:
            'Allergic Rhinitis and its Impact on Asthma; international guidelines updated regularly.',
        },
        {
          term: 'NARES',
          definition:
            'Non-allergic rhinitis with eosinophilia syndrome; eosinophilic inflammation without IgE sensitization.',
        },
        {
          term: 'Component-Resolved Diagnostics (CRD)',
          definition:
            'Testing with purified allergen components to distinguish genuine sensitization from cross-reactivity.',
        },
        {
          term: 'Dennie-Morgan Lines',
          definition:
            'Infraorbital skin folds associated with atopic dermatitis and allergic rhinitis.',
        },
        {
          term: 'Osteomeatal Complex',
          definition:
            'Key anatomical area where frontal, maxillary, and anterior ethmoid sinuses drain.',
        },
        {
          term: 'RQLQ',
          definition: 'Rhinoconjunctivitis Quality of Life Questionnaire; validated outcome measure.',
        },
        {
          term: 'SCIT',
          definition: 'Subcutaneous allergen immunotherapy; "allergy shots."',
        },
        {
          term: 'SLIT',
          definition: 'Sublingual allergen immunotherapy; tablets or drops under the tongue.',
        },
      ],
    },
  },

  // ============================================================================
  // QUIZ QUESTIONS (5 total)
  // ============================================================================
  quizQuestions: [
    {
      id: 'quiz-1',
      type: 'single-choice',
      question:
        'Which of the following is the primary mechanism by which intranasal corticosteroids achieve their therapeutic effect in allergic rhinitis?',
      options: [
        { id: 'a', text: 'Direct histamine receptor blockade' },
        { id: 'b', text: 'Inhibition of Th2 cytokine gene transcription and reduction of eosinophil recruitment' },
        { id: 'c', text: 'Competitive inhibition of IgE binding to mast cells' },
        { id: 'd', text: 'Direct mast cell stabilization preventing degranulation' },
      ],
      correctAnswers: ['b'],
      explanation:
        'Intranasal corticosteroids work primarily by binding to glucocorticoid receptors, forming complexes that translocate to the nucleus and suppress transcription of inflammatory genes including Th2 cytokines (IL-4, IL-5, IL-13). They also reduce eosinophil survival and recruitment. While they have multiple effects, histamine blockade (A) is the mechanism of antihistamines; IgE binding inhibition (C) is the mechanism of omalizumab; and direct mast cell stabilization (D) describes cromolyn.',
      difficulty: 4,
      topic: 'Pharmacology',
    },
    {
      id: 'quiz-2',
      type: 'multiple-choice',
      question:
        'Which of the following mediators are released during the early phase of an allergic reaction? (Select all that apply)',
      options: [
        { id: 'a', text: 'Histamine' },
        { id: 'b', text: 'Leukotriene C4' },
        { id: 'c', text: 'Tryptase' },
        { id: 'd', text: 'Interleukin-5' },
        { id: 'e', text: 'Prostaglandin D2' },
      ],
      correctAnswers: ['a', 'c'],
      explanation:
        'The early phase reaction (occurring within minutes) is mediated by pre-formed granule contents released immediately upon mast cell degranulation, primarily histamine and tryptase. Leukotrienes (B), prostaglandin D2 (E), and cytokines like IL-5 (D) are synthesized de novo and are characteristic of the late-phase reaction (peaking 6-12 hours), not the immediate early phase.',
      difficulty: 3,
      topic: 'Pathophysiology',
    },
    {
      id: 'quiz-3',
      type: 'single-choice',
      question:
        'A 35-year-old patient with allergic rhinitis reports symptoms despite daily use of oral cetirizine. Nasal congestion is the predominant complaint. What is the most appropriate next step in management?',
      options: [
        { id: 'a', text: 'Switch to a different oral antihistamine' },
        { id: 'b', text: 'Add an oral decongestant for daily use' },
        { id: 'c', text: 'Initiate an intranasal corticosteroid' },
        { id: 'd', text: 'Refer immediately for allergen immunotherapy' },
      ],
      correctAnswers: ['c'],
      explanation:
        'Intranasal corticosteroids are the most effective monotherapy for allergic rhinitis, particularly for nasal congestion which responds poorly to antihistamines. Per guidelines (ARIA, AAAAI), intranasal steroids are first-line for persistent symptoms. Switching antihistamines (A) is unlikely to help since congestion is not well-controlled by this class. Daily oral decongestants (B) are not recommended due to cardiovascular side effects and tachyphylaxis. Immunotherapy (D) is appropriate for refractory cases but should follow optimization with intranasal steroids.',
      difficulty: 4,
      topic: 'Clinical Management',
    },
    {
      id: 'quiz-4',
      type: 'single-choice',
      question:
        'In the IgE-mediated allergic response, which signaling molecule is responsible for initiating the downstream cascade following FcεRI cross-linking on mast cells?',
      options: [
        { id: 'a', text: 'Protein Kinase A (PKA)' },
        { id: 'b', text: 'Syk (Spleen tyrosine kinase)' },
        { id: 'c', text: 'Protein Kinase C (PKC)' },
        { id: 'd', text: 'cAMP response element-binding protein (CREB)' },
      ],
      correctAnswers: ['b'],
      explanation:
        'Following IgE cross-linking, Lyn kinase phosphorylates ITAMs on the FcεRI receptor. This allows recruitment and activation of Syk (spleen tyrosine kinase), which is the critical signaling molecule that initiates downstream pathways including LAT phosphorylation, calcium mobilization via PLCγ, and activation of MAP kinase cascades. While PKC (C) is involved later in the pathway via DAG, and PKA/CREB are part of other signaling systems, Syk is the specific kinase responsible for propagating the signal from the receptor.',
      difficulty: 5,
      topic: 'Molecular Mechanisms',
    },
    {
      id: 'quiz-5',
      type: 'true-false',
      question:
        'Sublingual immunotherapy (SLIT) for allergic rhinitis requires patients to be observed in the clinic for 30 minutes after each dose due to the risk of systemic allergic reactions.',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
      ],
      correctAnswers: ['b'],
      explanation:
        'False. Unlike subcutaneous immunotherapy (SCIT) which requires 30-minute observation after injections due to risk of anaphylaxis, SLIT has a much better safety profile with rare systemic reactions. The first dose is typically observed, but subsequent daily doses are self-administered at home without observation. This improved safety profile is one of the advantages of SLIT over SCIT, though SLIT currently has FDA approval only for specific allergens (grass, ragweed, dust mite) whereas SCIT can be customized to any allergen.',
      difficulty: 3,
      topic: 'Immunotherapy',
    },
  ],

  // ============================================================================
  // REFERENCES
  // ============================================================================
  references: [
    {
      citation:
        'Bousquet J, et al. Allergic Rhinitis and its Impact on Asthma (ARIA) guidelines—2016 revision. J Allergy Clin Immunol. 2017;140(4):950-958.',
      type: 'guideline',
    },
    {
      citation:
        'Wallace DV, et al. The diagnosis and management of rhinitis: An updated practice parameter. J Allergy Clin Immunol. 2008;122(2 Suppl):S1-S84.',
      type: 'guideline',
    },
    {
      citation:
        'Scadding GK, et al. BSACI guideline for the diagnosis and management of allergic and non-allergic rhinitis. Clin Exp Allergy. 2017;47(7):856-889.',
      type: 'guideline',
    },
    {
      citation:
        'Galli SJ, Tsai M. IgE and mast cells in allergic disease. Nat Med. 2012;18(5):693-704.',
      type: 'review',
    },
    {
      citation:
        'Greiner AN, et al. Allergic rhinitis. Lancet. 2011;378(9809):2112-2122.',
      type: 'review',
    },
    {
      citation:
        'Weiner JM, et al. Intranasal corticosteroids versus oral H1 receptor antagonists in allergic rhinitis: systematic review of randomised controlled trials. BMJ. 1998;317(7173):1624-1629.',
      type: 'study',
    },
    {
      citation:
        'Meltzer EO, et al. MP29-02 (a novel intranasal formulation of azelastine hydrochloride and fluticasone propionate) in the treatment of seasonal allergic rhinitis: a randomized, double-blind, placebo-controlled trial. J Allergy Clin Immunol. 2012;129(6):1394-1401.',
      type: 'study',
    },
    {
      citation:
        'Cox LS, et al. Sublingual immunotherapy: a comprehensive review. J Allergy Clin Immunol. 2006;117(5):1021-1035.',
      type: 'review',
    },
    {
      citation:
        'Durham SR, et al. SQ-standardized sublingual grass immunotherapy: confirmation of disease modification 2 years after 3 years of treatment. J Allergy Clin Immunol. 2012;129(3):717-725.',
      type: 'study',
    },
    {
      citation:
        'Dykewicz MS, Hamilos DL. Rhinitis and sinusitis. J Allergy Clin Immunol. 2010;125(2 Suppl 2):S103-S115.',
      type: 'review',
    },
    {
      citation:
        'Brożek JL, et al. Allergic Rhinitis and its Impact on Asthma (ARIA) guidelines—2019 revision. J Allergy Clin Immunol. 2020;145(1):70-80.',
      type: 'guideline',
    },
    {
      citation:
        'Fokkens WJ, et al. European Position Paper on Rhinosinusitis and Nasal Polyps 2020. Rhinology. 2020;58(Suppl S29):1-464.',
      type: 'guideline',
    },
  ],
};

// Export the module as default
export default allergicRhinitisModule;

// Type re-exports for consumers
export type {
  ComplexityLevel,
  QuestionType,
  ContentBlockType,
  ComparisonItem,
  TableRow,
  ContentBlock,
  QuizQuestion,
  TopicSection,
  ComplexityLevelContent,
  EducationalModule,
};
