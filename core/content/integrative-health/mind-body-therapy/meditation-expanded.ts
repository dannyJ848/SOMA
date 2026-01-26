import { EducationalContent } from '../../types';

export const meditationExpanded: EducationalContent = {
  id: 'meditation-expanded',
  type: 'topic',
  name: 'Meditation & Mindfulness Practices',
  alternateNames: ['Meditation', 'Mindfulness', 'Contemplation'],
  levels: {
    1: {
      level: 1,
      summary: 'Meditation is a mental exercise that involves focusing attention and eliminating the stream of jumbled thoughts that may be crowding your mind and causing stress. MRI studies show it increases gray matter density in the hippocampus and reduces gray matter in the amygdala.',
      explanation: `What is Meditation:
Meditation is a mental exercise that involves focusing attention and eliminating the stream of jumbled thoughts that may be crowding your mind and causing stress.
Meditation has been practiced for thousands of years across various cultures
Modern neuroscience shows meditation can actually change brain structure
There are many types of meditation, but all involve training attention and awareness
Regular practice can reduce stress, anxiety, and improve overall well-being

The Science of Meditation:
Research demonstrates meditation's profound effects on brain function and physical health.
MRI studies show increased gray matter density in the hippocampus (learning and memory)
Reduced gray matter in the amygdala (fight-or-flight response) with regular practice
Meditation can decrease production of inflammatory cytokines
Studies show telomere length preservation, suggesting anti-aging effects

Common Misconceptions:
Addressing myths that prevent people from starting or maintaining practice.
Myth: You must clear your mind completely. Reality: Thoughts are natural; the practice is returning attention to focus
Myth: It requires hours daily. Reality: Even 10-15 minutes produces measurable benefits
Myth: It's religious. Reality: While rooted in spiritual traditions, secular mindfulness is clinically validated
Myth: You must sit in lotus position. Reality: Any comfortable position works`,
      keyTerms: [
        { term: 'mindfulness', definition: 'Quality of being fully present and aware of where we are and what we\'re doing' },
        { term: 'amygdala', definition: 'Brain region responsible for the fight-or-flight response; shrinks with regular meditation' },
        { term: 'hippocampus', definition: 'Brain region associated with learning and memory; grows with meditation practice' },
      ],
      analogies: [
        'Meditation is like training a puppy - gently bring attention back when it wanders.',
        'Your mind is like a muddy pond; meditation allows the mud to settle, clarifying the water.',
      ],
      examples: [
        'A stressed executive finds 10 minutes of morning meditation helps manage work anxiety.',
        'Someone with insomnia practices a brief body scan before falling asleep.',
      ],
      patientCounselingPoints: [
        'Start with 5 minutes of simple breath awareness daily',
        'Find a quiet space where you won\'t be disturbed',
        'Sit comfortably with your back straight but not rigid',
        'Note any changes in stress levels after two weeks of consistent practice',
        'Consider using a meditation app for guided sessions',
      ],
    },
    2: {
      level: 2,
      summary: 'Foundational techniques include Mindfulness of Breathing (using breath as anchor), Body Scan Meditation (systematic awareness), Loving-Kindness Meditation (cultivating compassion), and Walking Meditation (mindfulness in movement).',
      explanation: `Mindfulness of Breathing:
The most fundamental meditation technique, using breath as an anchor for attention.
Focus on natural breath without trying to control it
Notice sensations at the nostrils, chest, or abdomen
When mind wanders, gently return to breath without judgment
This practice strengthens the brain's attention networks

Body Scan Meditation:
Systematic awareness of physical sensations throughout the body.
Start at the top of head and move gradually to toes
Notice sensations without trying to change them
Releases physical tension and improves body awareness
Particularly helpful for sleep difficulties and chronic pain

Loving-Kindness Meditation:
Cultivating compassion and positive emotions toward self and others.
Direct well-wishes first to yourself, then to others progressively
Traditional phrases: "May I be happy, may I be healthy, may I be safe"
Increases activity in brain regions associated with empathy
Reduces social isolation and increases connection

Walking Meditation:
Bringing mindfulness to movement and everyday activities.
Focus on the physical sensations of walking
Notice lifting, moving, and placing of each foot
Can be practiced indoors or in nature
Helps integrate mindfulness into daily life`,
      keyTerms: [
        { term: 'anchor', definition: 'Object of attention in meditation (commonly the breath) used to stabilize the mind' },
        { term: 'loving-kindness', definition: 'Metta practice of cultivating unconditional goodwill toward all beings' },
        { term: 'body scan', definition: 'Meditation technique of systematically focusing attention on different body parts' },
      ],
      analogies: [
        'The breath is like a home base you can always return to when your mind wanders.',
      ],
      examples: [
        'Practicing 10-15 minutes daily at the same time each day',
        'Counting breaths from 1-10, then starting over if helpful',
        'Practicing lying down before sleep for 15-20 minutes',
      ],
      patientCounselingPoints: [
        'Practice 10-15 minutes daily, preferably at the same time each day',
        'Count breaths from 1-10, then start over if helpful',
        'Label thoughts "thinking" and return to breath',
        'Practice lying down before sleep for 15-20 minutes',
        'Notice areas of tension and consciously release them',
        'Start with 5 minutes of directing kindness to yourself',
      ],
    },
    3: {
      level: 3,
      summary: 'Deepening practice includes working with difficult emotions using RAIN (Recognize, Allow, Investigate, Nurture), silent retreat practice, overcoming obstacles (desire, aversion, sloth, restlessness, doubt), and establishing consistency through habit stacking.',
      explanation: `Working with Difficult Emotions:
Using meditation to process and transform challenging emotional states.
Approach emotions with curiosity rather than avoidance
Notice where emotions manifest in the body
The acronym RAIN: Recognize, Allow, Investigate, Nurture
Difficult emotions often become less intense with mindful attention

Silent Retreat Practice:
Extended periods of meditation for accelerated growth.
Retreats range from weekend intensives to 10-day courses
Silence removes social distractions and deepens internal focus
Daily practice extends to 8-10 hours on longer retreats
Common protocols include Vipassana, Zen, and mindfulness-based retreats

Overcoming Obstacles:
Addressing the "five hindrances" and other common challenges.
Desire: craving for something different than present experience
Aversion: resistance to unpleasant experiences
Sloth/torpor: dullness, sleepiness, lack of energy
Restlessness: inability to settle, mental agitation
Doubt: questioning the practice or your ability

Establishing Consistency:
Building a sustainable lifelong practice.
Morning practice sets the tone for the day
Habit stacking: add meditation to existing routines
Accountability partners or groups increase adherence
Progress tracking helps maintain motivation`,
      keyTerms: [
        { term: 'RAIN', definition: 'Acronym for working with difficult emotions: Recognize, Allow, Investigate, Nurture' },
        { term: 'five hindrances', definition: 'Classical Buddhist teaching on obstacles to meditation: desire, aversion, sloth, restlessness, doubt' },
        { term: 'habit stacking', definition: 'Adding new habits to existing routines to increase adherence' },
      ],
      analogies: [
        'Meditation obstacles are like waves - you learn to surf them rather than be overwhelmed.',
      ],
      examples: [
        'When strong emotions arise, pause and feel them in the body',
        'Name the emotion gently',
        'Place a hand on your heart and offer yourself kindness',
      ],
      patientCounselingPoints: [
        'When strong emotions arise, pause and feel them in the body',
        'Name the emotion gently',
        'Place a hand on your heart and offer yourself kindness',
        'Start with a half-day self-guided silent retreat at home',
        'Gradually work up to weekend residential retreats',
        'Prepare by maintaining daily practice for at least 3 months',
        'Identify which hindrance arises most frequently for you',
        'Apply specific antidotes: energy for dullness, kindness for aversion',
      ],
    },
    4: {
      level: 4,
      summary: 'Specialized applications include Mindfulness-Based Stress Reduction (MBSR), Mindfulness-Based Cognitive Therapy (MBCT) for depression, meditation for chronic pain, meditation for sleep, and meditation for cardiovascular health.',
      explanation: `Mindfulness-Based Stress Reduction (MBSR):
Clinically developed program for stress-related conditions.
Developed by Jon Kabat-Zinn at UMass Medical Center
8-week program combining meditation and gentle yoga
Proven effective for anxiety, depression, and chronic pain
Often covered by insurance when prescribed by healthcare providers

Meditation for Anxiety & Depression:
Targeted practices for mental health conditions.
Mindfulness-Based Cognitive Therapy (MBCT) prevents depression relapse
Anxiety responds well to breathing-focused meditation
Depression benefits from loving-kindness and gratitude practices
Meditation can reduce reliance on medication for some patients

Meditation for Chronic Pain:
Pain management through changing relationship to sensation.
Meditation reduces pain perception by 20-40% in studies
Separation of physical sensation from suffering
Changes pain processing in the brain over time
Particularly effective for back pain, migraines, and fibromyalgia

Meditation for Sleep:
Practices specifically designed for insomnia and sleep quality.
Body scan meditation particularly effective for sleep onset
Evening practice should be more relaxing than energizing
Mindfulness reduces rumination that interferes with sleep
Can reduce or eliminate need for sleep medications

Meditation for Cardiovascular Health:
Heart health benefits through regular practice.
Reduces blood pressure comparable to medication
Lowers heart rate and improves heart rate variability
Reduces inflammation markers linked to heart disease
Helps manage stress-related cardiac risk factors`,
      keyTerms: [
        { term: 'MBSR', definition: 'Mindfulness-Based Stress Reduction - 8-week clinical program developed by Jon Kabat-Zinn' },
        { term: 'MBCT', definition: 'Mindfulness-Based Cognitive Therapy - combines mindfulness with cognitive therapy' },
        { term: 'heart rate variability', definition: 'Variation in time between heartbeats - higher HRV indicates better stress resilience' },
      ],
      analogies: [
        'MBSR is like learning to play an instrument - the 8-week program teaches fundamentals.',
      ],
      examples: [
        'Look for certified MBSR courses in your area or online',
        'Practice formal meditation 45 minutes daily during the 8-week program',
      ],
      patientCounselingPoints: [
        'Look for certified MBSR courses in your area or online',
        'Practice formal meditation 45 minutes daily during the 8-week program',
        'Combine meditation with psychotherapy for optimal results',
        'Work with mental health professionals to adjust medication',
        'Practice "softening" into pain rather than tensing against it',
        'Practice 20-minute body scan lying in bed',
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced practice includes Concentration Meditation (Samadhi), Insight Meditation (Vipassana), Non-Dual Awareness, Mindfulness in Daily Life, Teaching and Sharing meditation, and integrating meditation into a lifelong journey.',
      explanation: `Concentration Meditation (Samadhi):
Developing laser-like focus through single-pointed attention.
Trains the mind to remain steadily focused on one object
Progresses through access concentration to full absorption
Traditional objects include breath, mantras, or visual objects
Develops incredible mental stability and clarity

Insight Meditation (Vipassana):
Deep investigation into the nature of reality and mind.
Develops wisdom into impermanence, unsatisfactoriness, and non-self
Observes the arising and passing of all phenomena
Can lead to profound transformative insights
Traditionally taught in 10-day silent retreat format

Non-Dual Awareness:
Resting in recognition of fundamental unity and awareness itself.
Points to the awareness behind all experiences
Recognizes that awareness is always already present
Emphasizes being rather than doing
Found in various traditions: Advaita, Dzogchen, Zen

Mindfulness in Daily Life:
Bringing meditative awareness to every activity.
Every activity becomes meditation: eating, walking, working
Maintains present-moment awareness throughout the day
Formal practice supports informal mindfulness
Ultimately dissolves separation between practice and life

Teaching and Sharing:
Guiding others in meditation practice.
Your own practice is the foundation for teaching
Proper training through teacher certification programs
Ethical guidelines and boundaries are essential
Teaching deepens your understanding through helping others`,
      keyTerms: [
        { term: 'samadhi', definition: 'State of deep concentration or meditative absorption' },
        { term: 'vipassana', definition: 'Insight meditation that develops wisdom into the nature of reality' },
        { term: 'non-dual', definition: 'Recognition that subject and object are not separate; awareness is one' },
      ],
      analogies: [
        'Samadhi is like a laser beam of focused attention.',
        'Non-dual awareness is like the screen on which all movies appear.',
      ],
      examples: [
        'Choose one meditation object and stay with it exclusively',
        'Practice for extended periods (45-90 minutes)',
        'Attend a 10-day Vipassana retreat for proper instruction',
      ],
      patientCounselingPoints: [
        'Choose one meditation object and stay with it exclusively',
        'Practice for extended periods (45-90 minutes)',
        'Inquire "Who is aware?" or "Am I aware?"',
        'Rest in the sense of being aware before any object appears',
        'Choose one daily activity to do with full mindful attention',
        'Complete a recognized teacher training program',
        'Start teaching beginners before advanced students',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'integrative-health-overview', targetType: 'topic', relationship: 'parent', label: 'Integrative Health' },
  ],
  tags: {
    systems: ['nervous'],
    topics: ['meditation', 'mindfulness', 'stress-reduction', 'mental-health'],
    keywords: ['meditation', 'mindfulness', 'breath-awareness', 'body-scan', 'loving-kindness'],
    clinicalRelevance: 'medium',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default meditationExpanded;
