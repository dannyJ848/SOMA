/**
 * Sensory Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const sensoryExam: EducationalContent = {
  id: 'neurological-sensory-exam',
  type: 'process',
  name: 'Sensory Examination',
  alternateNames: ['Sensory Testing', 'Neurological Sensory Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'Sensory examination tests how well you feel touch, temperature, pain, and vibration to check your nerves.',
      explanation: '## Checking Your Sensation\n\nA sensory exam tests how well your nerves carry feeling from your body to your brain.\n\n### Types of Sensation\n\n**Light touch:**\n- Feeling a soft touch on the skin\n- Uses cotton or soft brush\n\n**Pain:**\n- Feeling a sharp sensation\n- Uses safety pin\n\n**Temperature:**\n- Feeling hot and cold\n- Uses tuning fork or temperature tubes\n\n**Vibration:**\n- Feeling buzzing sensation\n- Uses vibrating tuning fork\n\n**Position sense:**\n- Knowing where your limbs are\n- Doctor moves your toe or finger\n\n### Why Test Sensation\n\nNerve problems can cause:\n- Numbness\n- Tingling\n- Burning pain\n- Loss of feeling\n\nFinding the pattern helps doctors locate nerve problems.',

      keyTerms: [
        { term: 'sensation', definition: 'The ability to feel stimuli' },
        { term: 'peripheral neuropathy', definition: 'Nerve damage in hands and feet' },
        { term: 'dermatome', definition: 'Area of skin supplied by one nerve root' },
      ],

      analogies: [
        'Sensory nerves are like telephone lines carrying messages to the brain.',
      ],

      examples: [
        'Stocking-glove numbness suggests peripheral neuropathy.',
      ],

      patientCounselingPoints: [
        'Close your eyes during testing.',
        'Say yes every time you feel something.',
      ],
    },

    2: {
      level: 2,
      summary: 'Sensory examination maps modalities and patterns to localize peripheral and central nervous system lesions.',
      explanation: '## Sensory Modalities\n\n**Primary Sensations:**\n- Light touch\n- Pain (pinprick)\n- Temperature\n- Vibration\n- Joint position sense\n\n**Cortical Sensations:**\n- Stereognosis (identify object by touch)\n- Graphesthesia (identify number drawn)\n- Two-point discrimination\n\n### Testing Technique\n- Patient eyes closed\n- Random stimuli\n- Compare sides\n- Map deficits\n\n### Patterns\n\n**Peripheral Neuropathy:**\n- Distal to proximal\n- Stocking-glove distribution\n- Symmetric\n\n**Radiculopathy:**\n- Follows dermatome\n- May include weakness\n\n**Spinal Cord:**\n- Sensory level\n- Dissociated (pain/temp vs touch)\n\n**Brain:**\n- Hemisensory loss\n- Neglect syndromes',

      keyTerms: [
        { term: 'stereognosis', definition: 'Recognize objects by touch' },
        { term: 'graphesthesia', definition: 'Recognize symbols drawn on skin' },
        { term: 'dissociated sensory loss', definition: 'Different modalities affected differently' },
      ],

      analogies: [
        'Sensory pathways are like different highways to the brain.',
      ],

      examples: [
        'Impaired pain with preserved touch suggests syringomyelia.',
      ],

      clinicalNotes: 'Always test vibration and position sense - early indicators of peripheral neuropathy.',
    },

    3: {
      level: 3,
      summary: 'Advanced sensory testing identifies specific neurological syndromes through pattern recognition and specialized testing.',
      explanation: '## Special Sensory Syndromes\n\n**Brown-Sequard:**\n- Ipsilateral motor loss\n- Ipsilateral proprioception loss\n- Contralateral pain/temp loss\n- Hemisection of cord\n\n**Syringomyelia:**\n- Dissociated sensory loss\n- Cape distribution\n- Loss pain/temp, preserved touch\n- Central cord lesion\n\n**Tabes Dorsalis:**\n- Impaired proprioception\n- Romberg sign\n- Lightning pains\n- Argyll Robertson pupils\n\n**Thalamic Syndrome:**\n- Hemisensory loss\n- Severe pain (thalamic pain)\n- Emotional lability\n\n### Central Pain Syndromes\n- Post-stroke pain\n- Spinal cord injury pain\n- Phantom limb pain\n- Complex regional pain syndrome',

      keyTerms: [
        { term: 'Brown-Sequard', definition: 'Hemisection of spinal cord' },
        { term: 'Romberg sign', definition: 'Swaying when eyes closed' },
        { term: 'thalamic pain', definition: 'Severe pain after thalamic stroke' },
      ],

      examples: [
        'Cape distribution sensory loss suggests central cord syndrome.',
      ],

      clinicalNotes: 'Romberg sign indicates dorsal column/proprioception loss, not cerebellar disease.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of sensory findings with localization and management of sensory disorders.',
      explanation: '## Diagnostic Approach\n\n**History:**\n- Distribution\n- Temporal course\n- Associated symptoms\n- Risk factors\n\n**Examination:**\n- Define pattern\n- Map extent\n- Associated findings\n\n**Testing:**\n- Nerve conduction studies\n- EMG\n- Imaging\n- Labs (glucose, B12, etc.)\n\n### Management\n**Neuropathic Pain:**\n- Gabapentin, pregabalin\n- TCAs, SNRIs\n- Topical agents\n- Opioids (refractory)\n\n**Functional Restoration:**\n- Physical therapy\n- Desensitization\n- Mirror therapy\n- Graded motor imagery',

      keyTerms: [
        { term: 'neuropathic pain', definition: 'Pain from nerve damage' },
        { term: 'desensitization', definition: 'Gradual exposure to reduce sensitivity' },
      ],

      clinicalNotes: 'Neuropathic pain responds poorly to NSAIDs and acetaminophen.',
    },

    5: {
      level: 5,
      summary: 'Expert sensory assessment for complex pain syndromes and advanced diagnostic applications.',
      explanation: '## Advanced Assessment\n\n**Quantitative Sensory Testing:**\n- Vibration detection\n- Thermal thresholds\n- Pressure pain\n- Research and clinical trials\n\n**Pain Scales:**\n- Visual analog\n- Numerical rating\n- McGill Pain Questionnaire\n- Neuropathic pain questionnaires\n\n**Functional Imaging:**\n- fMRI of pain processing\n- Reorganization after injury\n- Treatment response\n\n### Emerging Treatments\n- Spinal cord stimulation\n- Motor cortex stimulation\n- DRG stimulation\n- Ketamine infusions\n- Cannabis-based medicines',

      keyTerms: [
        { term: 'QST', definition: 'Quantitative sensory testing' },
        { term: 'DRG', definition: 'Dorsal root ganglion' },
      ],

      clinicalNotes: 'Multimodal analgesia more effective than single agents for neuropathic pain.',
    },
  },

  media: [],

  citations: [
    {
      id: 'braunwald',
      type: 'textbook',
      title: 'Harrisons Principles of Internal Medicine',
      source: 'McGraw-Hill',
    },
  ],

  crossReferences: [
    { targetId: 'neurological-cranial-nerves', targetType: 'process', relationship: 'sibling', label: 'Cranial Nerves' },
    { targetId: 'neurology-sensory', targetType: 'topic', relationship: 'related', label: 'Sensory Disorders' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physical-examination', 'neurology'],
    keywords: ['sensory', 'sensation', 'neuropathy', 'pain'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sensoryExam;
