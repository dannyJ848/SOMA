import { EducationalContent } from '../../types';

export const yogaTherapy: EducationalContent = {
  id: 'yoga-therapy',
  type: 'topic',
  name: 'Yoga Therapy',
  alternateNames: ['Yoga Therapy', 'Therapeutic Yoga', 'Clinical Yoga'],
  levels: {
    1: {
      level: 1,
      summary: 'Yoga therapy is the application of yoga practices and principles for healing specific health conditions. Over 500 peer-reviewed studies show yoga\'s effectiveness for numerous conditions, affecting gene expression related to inflammation and stress.',
      explanation: `What is Yoga Therapy:
Yoga therapy is the application of yoga practices and principles for healing specific health conditions, distinct from general yoga classes.
Yoga therapy adapts yoga practices to individual needs and conditions
Addresses physical, mental, and emotional aspects of health simultaneously
Practiced one-on-one or in small groups with specific conditions
Complements conventional medical treatment and other therapies

The Science of Yoga Therapy:
Research demonstrates yoga's effectiveness for numerous health conditions.
Over 500 peer-reviewed studies on yoga therapy published in medical journals
NIH actively funds yoga research through NCCIH
Shown to affect gene expression related to inflammation and stress
Changes brain structure and function in measurable ways

Yoga Therapy vs. Regular Yoga:
Understanding the key differences.
Yoga classes: general practice for all participants
Yoga therapy: individualized for specific health conditions
Yoga therapy requires specialized training beyond standard yoga teacher certification
Therapeutic approach works within constraints of medical conditions

Historical Context:
Ancient wisdom meeting modern therapeutic applications.
Yoga therapy rooted in traditional Ayurvedic medicine
Modern yoga therapy emerged in the 1980s-90s
Integrates classical yoga with modern medical understanding
Recognized by some healthcare systems and insurance providers`,
      keyTerms: [
        { term: 'yoga therapy', definition: 'The application of yoga practices for healing specific health conditions' },
        { term: 'Ayurveda', definition: 'Traditional Indian system of medicine that forms the basis for yoga therapy' },
        { term: 'NCCIH', definition: 'National Center for Complementary and Integrative Health - funds yoga research' },
      ],
      analogies: [
        'Yoga therapy is like physical therapy informed by yoga wisdom.',
      ],
      examples: [
        'A person with scoliosis receives customized poses to address their curvature pattern.',
        'Someone with anxiety learns specific breathing practices to regulate their nervous system.',
      ],
      patientCounselingPoints: [
        'Consult a certified yoga therapist for personalized guidance',
        'Inform your yoga teacher about any health conditions or injuries',
        'For injury rehabilitation, seek a yoga therapist rather than dropping into classes',
      ],
    },
    2: {
      level: 2,
      summary: 'Therapeutic tools include Asana (postures adapted for healing), Pranayama (breath practices for nervous system regulation), Meditation & Mindfulness, and Relaxation Techniques like Yoga Nidra.',
      explanation: `Asana (Postures) for Therapy:
Physical postures adapted for healing and rehabilitation.
Postures modified to accommodate limitations and injuries
Emphasis on alignment over achieving "perfect" pose
Props used extensively to make poses accessible
Sequencing designed for specific therapeutic outcomes

Pranayama (Breath Practices):
Conscious breathing for nervous system regulation.
Breath is the bridge between mind and body
Different breathing patterns produce different effects
Can quickly shift from stress response to relaxation
Accessible to those with limited mobility

Meditation & Mindfulness:
Mental training as core therapeutic component.
Reduces stress reactivity and improves emotional regulation
Pain management through changing perception and relationship
Improves focus, concentration, and mental clarity
Essential for addressing mental health components of physical conditions

Relaxation Techniques:
Deep rest for restoration and healing.
Yoga Nidra (yogic sleep) produces profound relaxation
Activates parasympathetic nervous system
Reduces sleep disturbances and insomnia
Accessible to anyone regardless of physical ability`,
      keyTerms: [
        { term: 'asana', definition: 'Yoga postures or poses' },
        { term: 'pranayama', definition: 'Yogic breathing practices to control and expand vital energy' },
        { term: 'Yoga Nidra', definition: 'Yogic sleep - a state of conscious deep relaxation' },
        { term: 'parasympathetic', definition: 'Rest-and-digest branch of the nervous system that yoga activates' },
      ],
      analogies: [
        'The breath is like a remote control for your nervous system.',
      ],
      examples: [
        'Practice with awareness of breath and sensation',
        'Never force into pain; work at your edge',
        'Use props liberally to support proper alignment',
        'Practice Nadi Sodhana (alternate nostril breathing) for nervous system balance',
      ],
      patientCounselingPoints: [
        'Practice with awareness of breath and sensation',
        'Never force into pain; work at your edge',
        'Use props liberally to support proper alignment',
        'Practice Nadi Sodhana (alternate nostril breathing) for nervous system balance',
        'Use Sama Vritti (equal breathing) for anxiety',
        'Start with 5-10 minutes of breath awareness',
        'Practice body scan meditation for pain or relaxation',
        'Practice Yoga Nidra 2-3 times per week',
      ],
    },
    3: {
      level: 3,
      summary: 'Condition-specific applications include back pain and spinal health, anxiety and depression, cardiovascular health, respiratory conditions like asthma and COPD, and autoimmune conditions.',
      explanation: `Back Pain & Spinal Health:
One of the most common applications of yoga therapy.
Studies show yoga reduces pain and improves function as well as physical therapy
Emphasis on core strengthening and spinal mobility
Addresses both structural and muscular components
Teaches proper body mechanics for daily life

Anxiety & Depression:
Mental health benefits through mind-body integration.
Lowers cortisol and other stress hormones
Increases GABA (calming neurotransmitter) levels
Breaks rumination cycles through present-moment focus
Provides coping skills for managing symptoms

Cardiovascular Health:
Heart and circulatory system support.
Lowers blood pressure in both healthy and hypertensive individuals
Improves heart rate variability (marker of heart health)
Reduces inflammation markers linked to heart disease
Supports stress management, a key cardiac risk factor

Respiratory Conditions:
Asthma, COPD, and breathing disorders.
Improves lung capacity and breathing efficiency
Reduces respiratory rate for improved oxygenation
Breath awareness helps manage breathing difficulties
Reduces anxiety associated with respiratory conditions

Autoimmune Conditions:
Managing conditions like arthritis, lupus, and MS.
Reduces inflammation markers in research studies
Improves energy levels and reduces fatigue
Adaptable to fluctuating symptoms and energy levels
Stress reduction benefits immune system function`,
      keyTerms: [
        { term: 'GABA', definition: 'Gamma-aminobutyric acid - calming neurotransmitter that increases with yoga practice' },
        { term: 'heart rate variability', definition: 'Variation in time between heartbeats - higher HRV indicates better heart health' },
        { term: 'cortisol', definition: 'Stress hormone that yoga practice can reduce' },
      ],
      analogies: [
        'Yoga for back pain is like physical therapy that also calms your mind.',
      ],
      examples: [
        'Cat-cow movements for spinal flexibility',
        'Gentle twists for mobility',
        'Supported bridge pose for back strength',
        'Forward folds and restorative poses for calming',
      ],
      patientCounselingPoints: [
        'Cat-cow movements for spinal flexibility',
        'Gentle twists for mobility',
        'Supported bridge pose for back strength',
        'Always work within pain-free range',
        'Forward folds and restorative poses for calming',
        'Chest-opening poses for energy and mood elevation',
        'Gentle asana practice focusing on relaxation',
        'Restorative poses with props',
        'Gentle chest-opening poses',
        'Avoid strenuous practices if uncontrolled heart conditions',
      ],
    },
    4: {
      level: 4,
      summary: 'Special populations include prenatal and postpartum yoga, yoga for seniors (fall prevention), pediatric yoga therapy (ADHD, autism), yoga for cancer patients, and adaptive yoga for physical disabilities.',
      explanation: `Prenatal & Postpartum Yoga:
Yoga throughout pregnancy and recovery.
Reduces common pregnancy discomforts (back pain, swelling, anxiety)
Prepares body and mind for labor and delivery
Postpartum yoga aids recovery and addresses new parent challenges
Modifications essential for each trimester

Yoga for Seniors:
Maintaining health and mobility in aging.
Maintains balance, reducing fall risk
Preserves mobility and independence
Supports cognitive function and memory
Can be adapted for chair or bed-bound individuals

Pediatric Yoga Therapy:
Therapeutic yoga for children and adolescents.
Helps with ADHD, autism, and sensory processing disorders
Reduces anxiety and behavioral issues
Improves body awareness and coordination
Taught through play, stories, and age-appropriate methods

Yoga for Cancer Patients:
Support through diagnosis, treatment, and recovery.
Reduces treatment side effects (fatigue, pain, insomnia)
Improves quality of life measures significantly
Helps process emotional impact of cancer diagnosis
Gentle, restorative approach essential during treatment

Adaptive Yoga:
Yoga for physical disabilities and limitations.
Wheelchair yoga maintains mobility and connection to body
Multiple sclerosis adaptations for varying abilities
Emphasis on what's possible rather than limitations
Props and modifications make yoga accessible to all`,
      keyTerms: [
        { term: 'adaptive yoga', definition: 'Yoga practices modified for individuals with disabilities or limitations' },
        { term: 'chair yoga', definition: 'Yoga practiced seated in a chair or using chair for support' },
      ],
      analogies: [
        'Adaptive yoga proves that yoga is for every body, not just able bodies.',
      ],
      examples: [
        'Seek certified prenatal yoga instruction',
        'Avoid lying on back after first trimester',
        'Emphasize balance and strength for seniors',
      ],
      patientCounselingPoints: [
        'Seek certified prenatal yoga instruction',
        'Avoid lying on back after first trimester',
        'Focus on pelvic floor and hip opening',
        'Postpartum: wait for doctor\'s clearance before resuming',
        'Emphasize balance and strength',
        'Include fall prevention strategies',
        'Chair yoga options for limited mobility',
        'Seek yoga therapists specializing in pediatrics',
        'Short, engaging sessions matching child\'s attention span',
        'Look for oncology-certified yoga therapists',
        'Restorative poses with extensive props',
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced applications include Ayurvedic Yoga Therapy (constitutional types based on doshas), Subtle Body Anatomy (chakras and nadis), Trauma-Informed Yoga, Yoga Therapy Integration with healthcare, and lifelong practice.',
      explanation: `Ayurvedic Yoga Therapy:
Personalizing practice based on constitutional type (dosha).
Vata types benefit from grounding, warming practices
Pitta types need cooling, calming practices
Kapha types require energizing, stimulating practices
Seasonal and life stage considerations refine approach

Subtle Body Anatomy:
Working with chakras, nadis, and energy flow.
Chakras as energy centers along the spine
Nadis as channels of prana (life force)
Blocks in subtle body correlate with physical/mental conditions
Specific practices address energetic imbalances

Trauma-Informed Yoga:
Sensitively working with trauma survivors.
Trauma stored in the body as well as the mind
Yoga can help release held trauma or can be re-traumatizing
Empowerment and choice essential in teaching approach
Specific language and cues for trauma-sensitive classes

Yoga Therapy Integration:
Combining yoga with other modalities.
Works synergistically with physical therapy
Complements psychotherapy and counseling
Enhances effects of other mind-body practices
Part of integrative medicine team approach

Lifelong Practice:
Adapting yoga practice through all life stages.
Practice evolves through aging, injuries, and life changes
Yoga philosophy offers guidance for living well
Beyond physical practice: ethical living and self-study
Yoga as a complete system for human flourishing`,
      keyTerms: [
        { term: 'dosha', definition: 'Ayurvedic constitutional type: vata, pitta, or kapha' },
        { term: 'nadi', definition: 'Channels of prana or life force in the subtle body' },
        { term: 'trauma-informed', definition: 'Approach that recognizes trauma and prioritizes safety, empowerment, and choice' },
      ],
      analogies: [
        'Ayurvedic yoga therapy is like having a personalized prescription for your practice.',
      ],
      examples: [
        'Vata types benefit from grounding, warming practices',
        'Pitta types need cooling, calming practices',
        'Kapha types require energizing, stimulating practices',
      ],
      patientCounselingPoints: [
        'Determine your dosha through assessment',
        'Adjust practice based on current state, not just constitution',
        'Consider seasonal routines for optimal balance',
        'Work with Ayurvedic practitioners for comprehensive approach',
        'Include chakra-balancing sequences as appropriate',
        'Use bandhas (energy locks) with proper instruction',
        'Extensive training required for trauma-informed teaching',
        'Emphasize student choice in all poses',
        'Maintain communication with all healthcare providers',
        'View yoga as lifelong journey rather than goal achievement',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'integrative-health-overview', targetType: 'topic', relationship: 'parent', label: 'Integrative Health' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous', 'respiratory'],
    topics: ['yoga-therapy', 'yoga', 'mind-body', 'therapeutic-yoga'],
    keywords: ['yoga', 'yoga-therapy', 'asana', 'pranayama', 'mindfulness'],
    clinicalRelevance: 'medium',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default yogaTherapy;
