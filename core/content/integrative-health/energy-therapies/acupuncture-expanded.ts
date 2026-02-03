import { EducationalContent } from '../../types';

export const acupunctureExpanded: EducationalContent = {
  id: 'acupuncture-expanded',
  type: 'topic',
  name: 'Acupuncture & Traditional Chinese Medicine',
  alternateNames: ['Acupuncture', 'TCM', 'Traditional Chinese Medicine'],
  levels: {
    1: {
      level: 1,
      summary: 'Acupuncture is a component of Traditional Chinese Medicine (TCM) involving insertion of thin needles into specific points on the body to balance the flow of qi (vital energy). Practiced for over 2,500 years, it is one of the oldest continuously practiced medical systems.',
      explanation: `What is Acupuncture:
Acupuncture is a component of Traditional Chinese Medicine (TCM) involving insertion of thin needles into specific points on the body to balance the flow of qi (vital energy).
Practiced in China for over 2,500 years
One of the oldest continuously practiced medical systems
WHO recognizes efficacy for over 30 conditions
Licensed practitioners complete 3-4 years of graduate study
Increasingly integrated into Western healthcare

Qi and Meridians:
The theoretical foundation of acupuncture.
Qi (pronounced "chee") translates as vital energy or life force
Flows through pathways called meridians or channels
12 main meridians correspond to organ systems
Health requires balanced, smooth qi flow
Illness results from blockages or imbalances

Yin and Yang:
Fundamental duality in Chinese medicine.
Yin: cool, dark, quiet, feminine, substance
Yang: warm, bright, active, masculine, function
Health requires balance between yin and yang
Imbalance creates disease patterns
Treatment aims to restore equilibrium

What to Expect:
Your first acupuncture session.
Initial visit includes detailed health history (1-2 hours)
Tongue and pulse diagnosis important TCM tools
Needles are hair-thin, typically not painful
Sensation varies from nothing to dull ache or tingle
Needles usually retained 20-40 minutes

Safety and Side Effects:
Acupuncture is very safe when performed by trained practitioners.
Sterile, single-use disposable needles standard
Serious adverse events extremely rare
Minor bruising or soreness occasionally occurs
Most people feel deeply relaxed during and after
Inform practitioner if pregnant or have bleeding disorders`,
      keyTerms: [
        { term: 'qi', definition: 'Vital energy or life force that flows through meridians in the body' },
        { term: 'meridian', definition: 'Pathway through which qi flows, connecting to organ systems' },
        { term: 'yin and yang', definition: 'Fundamental dualistic forces in Chinese medicine that must be balanced for health' },
      ],
      analogies: [
        'Think of qi like electricity flowing through wires - when the flow is blocked, systems malfunction.',
        'Acupuncture points are like switches that can turn on or off the flow of energy.',
      ],
      examples: [
        'A person with chronic back pain may find relief through acupuncture treatments targeting the bladder meridian.',
        'Someone with migraines might receive needles at points on the hands and feet that correspond to the head.',
      ],
      patientCounselingPoints: [
        'Seek licensed or certified acupuncturists (LAc, DAOM)',
        'Check state licensing boards for practitioner verification',
        'Most effective as a course of treatment, not one-time session',
        'Eat light meal before session (don\'t come hungry)',
        'Wear loose, comfortable clothing',
      ],
    },
    2: {
      level: 2,
      summary: 'Acupuncture has evidence-based applications for pain management, headaches, digestive disorders, anxiety, depression, women\'s health, and sleep disorders. It works by releasing endorphins, reducing inflammation, and regulating the nervous system.',
      explanation: `Pain Management:
One of the most common and researched applications.
Endorphin release contributes to pain relief
Reduces inflammation and improves circulation
Effective for back pain, headaches, arthritis, and more
Non-pharmacological option without side effects
Often reduces need for pain medications

Headaches and Migraines:
Both tension headaches and migraines respond well.
Reduces frequency and intensity
May abort acute headaches
Addresses underlying patterns, not just symptoms
Particularly effective for migraines
Often combined with herbal medicine

Digestive Disorders:
Treating the Spleen and Stomach systems.
IBS, nausea, reflux, and other GI conditions
Stress strongly affects digestion (gut-brain axis)
Acupuncture regulates motility and reduces inflammation
Addresses both physical and emotional aspects
Often combined with dietary recommendations

Anxiety and Depression:
Mental-emotional balance through acupuncture.
Calms nervous system and reduces stress hormones
Affects neurotransmitters (serotonin, dopamine)
Shen (spirit) housed in Heart, affected by all systems
No side effects unlike many psychiatric medications
Addresses physical manifestations of emotional issues

Women's Health:
Menstrual, fertility, and menopausal support.
Regulates menstrual cycle and reduces symptoms
Supports fertility, often used with ART
Effectively treats menopausal symptoms
Addresses both hormonal and emotional aspects
TCM has sophisticated understanding of gynecology

Sleep Disorders:
Insomnia and sleep quality.
Calms Shen (spirit) to allow restful sleep
Regulates nervous system (sympathetic/parasympathetic)
Addresses patterns: difficulty falling vs. staying asleep
Reduces stress and anxiety affecting sleep
Works synergistically with sleep hygiene`,
      keyTerms: [
        { term: 'endorphin', definition: 'Natural pain-relieving chemicals produced by the body' },
        { term: 'gut-brain axis', definition: 'Bidirectional communication between the digestive system and the brain' },
        { term: 'shen', definition: 'Spirit or consciousness, housed in the Heart according to TCM' },
      ],
      analogies: [
        'Acupuncture for pain is like resetting a tripped circuit breaker - it restores proper flow.',
      ],
      examples: [
        'Consistent treatment schedule important for chronic pain',
        'Combines well with physical therapy',
        'Preventive treatments may prevent flare-ups',
        'Acute pain often responds quickly',
      ],
      patientCounselingPoints: [
        'Keep headache diary to track patterns and response',
        'Keep food diary to identify triggers',
        'Stress management complements treatment',
        'Consistency particularly important for menstrual issues',
        'Evening treatments may promote sleep that night',
      ],
    },
    3: {
      level: 3,
      summary: 'Traditional Chinese Medicine diagnosis uses the Four Examinations (looking, listening/smelling, asking, touching), tongue diagnosis, and pulse diagnosis to identify pattern disharmonies like Liver Qi Stagnation, Spleen Qi Deficiency, Kidney Yin Deficiency, Blood Stasis, and Dampness.',
      explanation: `Four Examinations:
TCM diagnostic methods.
Looking: observation of tongue, face, body
Listening/Smelling: voice quality, breath odors
Asking: detailed symptoms, health history, lifestyle
Touching: pulse diagnosis, palpation of channels and abdomen
Information synthesized into pattern diagnosis

Tongue Diagnosis:
The tongue reflects internal condition.
Color indicates circulation and heat/cold
Coating shows digestive health and pathogens
Shape reveals fluid status and constitution
Cracks, coatings, and locations have meaning
Changes with treatment and health status

Pulse Diagnosis:
Feeling qi and blood flow at radial arteries.
Three positions on each wrist, three depths
Different positions correspond to different organs
Qualities: fast/slow, deep/superficial, wiry/weak
Requires significant experience and sensitivity
Provides information about internal state

Common Pattern Examples:
How symptoms organize into patterns.
Liver Qi Stagnation: stress, tightness, irritability
Spleen Qi Deficiency: fatigue, digestion issues, worry
Kidney Yin Deficiency: heat signs, night sweats, anxiety
Blood Stasis: fixed pain, purple coloration
Dampness: heaviness, sluggishness, excess weight`,
      keyTerms: [
        { term: 'Four Examinations', definition: 'TCM diagnostic methods: looking, listening/smelling, asking, and touching' },
        { term: 'tongue diagnosis', definition: 'Examining the tongue\'s color, coating, and shape to assess internal conditions' },
        { term: 'pulse diagnosis', definition: 'Feeling the pulse at specific points to evaluate organ systems and qi flow' },
      ],
      analogies: [
        'The tongue is like a mirror reflecting the body\'s internal state.',
        'Pulse diagnosis is like reading the waves to understand the ocean.',
      ],
      examples: [
        'A red tongue with yellow coating indicates heat and inflammation',
        'A wiry pulse suggests liver qi stagnation from stress',
      ],
      patientCounselingPoints: [
        'Tongue brushing affects diagnosis; avoid before appointment',
        'Avoid strong flavors or coffee before pulse diagnosis',
        'Be thorough in describing all symptoms',
        'Seemingly unrelated symptoms may connect in pattern',
      ],
    },
    4: {
      level: 4,
      summary: 'TCM modalities include Chinese Herbal Medicine (formulas combining 4-20 herbs), Moxibustion (heat therapy with mugwort), Cupping (suction therapy), Gua Sha (folk technique for muscle tension), Tui Na (Chinese therapeutic massage), and Auriculotherapy (ear acupuncture).',
      explanation: `Chinese Herbal Medicine:
Sophisticated herbal system.
Formulas typically combine 4-20 herbs
Herbs combined for synergistic effects
Classics formulas (2,000 years old) still used
Individualized to patient pattern
Available as teas, pills, tinctures, powders

Moxibustion:
Heat therapy with dried mugwort.
Warms points and channels
Strengthens qi and blood
Particularly useful for cold/deficiency patterns
Can move directly over skin or on needle
Comforting, warming treatment

Cupping:
Suction therapy for circulation and muscle tension.
Creates suction on skin using glass or plastic cups
Improves circulation and releases muscle tension
Leaves circular marks (not bruises) lasting days to weeks
Popularized by Olympic athletes
Used for pain, respiratory conditions, and more

Gua Sha:
Folk technique for muscle tension and fever.
Rubbing tool over lubricated skin
Releases muscle tension and promotes circulation
Creates red "petechiae" marks
Traditionally used for fever and muscle pain
Often used for neck and upper back

Tui Na:
Chinese therapeutic massage.
Uses TCM theory and meridian systems
Combines massage, acupressure, and manipulation
Often more vigorous than Western massage
Used for musculoskeletal and internal conditions
Can be alternative to acupuncture for needle-averse

Auriculotherapy:
Ear acupuncture for whole body.
Ear microsystem reflects entire body
Used for addiction, pain, anxiety, weight
Can use needles, seeds, or electrical stimulation
Developed in France but based on Chinese medicine
Often used between body acupuncture sessions`,
      keyTerms: [
        { term: 'moxibustion', definition: 'Heat therapy using dried mugwort to warm acupuncture points' },
        { term: 'cupping', definition: 'Therapy using suction cups to increase circulation and release muscle tension' },
        { term: 'gua sha', definition: 'Technique using a tool to scrape the skin, promoting circulation and releasing muscle tension' },
      ],
      analogies: [
        'Cupping marks are like hickeys - they show blood has been drawn to the area.',
      ],
      examples: [
        'Moxibustion is particularly good for arthritis and pain',
        'Cupping is often used for back pain and respiratory conditions',
      ],
      patientCounselingPoints: [
        'Take herbs as directed',
        'Inform practitioner of any side effects',
        'Quality from reputable sources important',
        'May interact with medications',
        'Avoid self-diagnosis for herbal formulas',
        'Marks from cupping and Gua Sha are normal and expected',
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced applications include Five Element Theory (constitutional types based on Wood, Fire, Earth, Metal, Water), acupuncture for mental-emotional health, preventive treatments, lifestyle and dietary therapy, Qi Gong and Tai Chi, self-acupressure, and integrative practice within modern healthcare.',
      explanation: `Five Element Theory:
Constitutional and emotional aspects.
Wood, Fire, Earth, Metal, Water elements
Each corresponds to season, emotion, organ, color, etc.
Constitutional type affects disease tendency
Constitutional treatment addresses root patterns
Emotional and spiritual dimensions included

Acupuncture for Mental-Emotional Health:
Addressing emotional and spiritual aspects.
Shen (spirit) health central to wellness
Emotions affect organs, organs affect emotions
Trauma stored in channels and tissues
Treatment can release stored emotions
Spirit-level treatments for deeper healing

Acupuncture for Prevention:
Maintaining health rather than treating disease.
Seasonal treatments tune body to environment
Strengthening constitution prevents illness
Subtle imbalances treated before symptoms
Similar to getting "tuned up" regularly
Tradition: treatments at seasonal transitions

Lifestyle and Dietary Therapy:
Living in harmony with natural rhythms.
TCM dietary recommendations based on constitution
Eating with seasons and local foods
Cooking methods affect food properties
Mindful eating aids digestion
Sleep, exercise, and stress management addressed

Qi Gong and Tai Chi:
Movement and breath for self-cultivation.
Cultivate and balance qi through practice
Tai Chi: moving meditation based on TCM
Qi Gong: exercises for health and cultivation
Complement acupuncture treatment
Daily self-practice extends treatment benefits

Self-Acupressure:
Stimulating points for self-care.
Many points can be stimulated by pressure
Extends benefits between professional sessions
Useful for acute symptoms
Simple to learn and apply
Empowers patients in self-care

Integrative Practice:
Acupuncture within modern healthcare.
Increasingly accepted in mainstream medicine
Many hospitals offer acupuncture
Research supporting mechanisms and efficacy
Works alongside conventional treatment
Patient choice in integrative care`,
      keyTerms: [
        { term: 'Five Element Theory', definition: 'TCM system describing constitutional types based on Wood, Fire, Earth, Metal, Water' },
        { term: 'Qi Gong', definition: 'Chinese practice of cultivating qi through movement, breath, and meditation' },
        { term: 'Tai Chi', definition: 'Moving meditation practice based on TCM principles' },
      ],
      analogies: [
        'Seasonal acupuncture treatments are like tuning up your car before a long trip.',
      ],
      examples: [
        'Understanding your element type gives life insight',
        'Some practitioners specialize in Five Element acupuncture',
        'Addresses emotional patterns in treatment',
        'Adds depth to physical symptom treatment',
      ],
      patientCounselingPoints: [
        'Consider seasonal tune-ups',
        'Treatment at first signs of imbalance more effective',
        'Preventive approach consistent with TCM philosophy',
        'Listen to body and treat early',
        'Learn points relevant to your common concerns',
        'Pressure should be firm but not painful',
        'Hold for 1-3 minutes or until sensation shifts',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'integrative-health-overview', targetType: 'topic', relationship: 'parent', label: 'Integrative Health' },
  ],
  tags: {
    systems: ['nervous', 'musculoskeletal'],
    topics: ['acupuncture', 'tcm', 'traditional-chinese-medicine', 'integrative-medicine', 'pain-management'],
    keywords: ['acupuncture', 'qi', 'meridians', 'yin-yang', 'herbal-medicine', 'moxibustion'],
    clinicalRelevance: 'medium',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acupunctureExpanded;
