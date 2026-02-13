/**
 * Growth and Development Data Store
 *
 * Contains developmental milestones, growth chart interpretation,
 * puberty stages, and screening tools with 5 complexity levels.
 */

import type {
  DevelopmentalMilestone,
  DevelopmentalDomain,
  GrowthChartInfo,
  TannerStage,
  ScreeningTool,
  PediatricContent,
  AgeRange,
} from '../types';
import type { DevelopmentalRedFlag, GrowthVelocity, PubertyProgression } from './types';

// ============================================
// DEVELOPMENTAL MILESTONES
// ============================================

const milestones = new Map<string, DevelopmentalMilestone>();

function initializeMilestones(): void {
  // ---- GROSS MOTOR MILESTONES ----

  const headControl: DevelopmentalMilestone = {
    id: 'gross-motor-head-control',
    domain: 'gross-motor',
    ageMonths: 2,
    ageTolerance: 1,
    skill: 'Head control when held upright',
    description: 'Baby can hold head steady when held in upright position',
    redFlags: ['No head control by 4 months', 'Persistent head lag when pulled to sit'],
    explanations: {
      level1: 'Your baby is learning to hold their head up! When you hold them on your shoulder or upright, they can keep their head steady instead of it flopping around. This is one of the first big muscle skills babies develop.',
      level2: 'Head control develops as neck muscles strengthen. By 2 months, infants should be able to hold their head steady when supported upright. This milestone is essential for later skills like sitting and visual tracking.',
      level3: 'Head control requires development of cervical extensor and flexor muscle strength and coordination. The vestibular system and proprioceptive feedback play crucial roles. Absence by 4 months warrants neurological evaluation.',
      level4: 'Head control assessment includes observation in supported sitting and prone, plus pull-to-sit maneuver to assess head lag. Persistent head lag may indicate hypotonia, cerebral palsy, or neuromuscular disorder. Consider GMs assessment in high-risk infants.',
      level5: 'General movements (GMs) assessment in the fidgety period (9-20 weeks) has high predictive validity for CP. Absent or abnormal fidgety movements combined with poor head control significantly increases CP risk. MRI and genetic testing indicated with motor delay.',
    },
    assessmentTips: [
      'Hold baby upright on shoulder - head should stay steady',
      'In supported sitting, head should be upright with minimal bobbing',
      'During pull-to-sit, minimal head lag by 4 months',
    ],
    supportStrategies: [
      'Provide supervised tummy time daily',
      'Hold baby upright frequently',
      'Use high-contrast toys to encourage visual tracking',
    ],
  };

  const rollsOver: DevelopmentalMilestone = {
    id: 'gross-motor-rolls',
    domain: 'gross-motor',
    ageMonths: 4,
    ageTolerance: 2,
    skill: 'Rolls from tummy to back',
    description: 'Baby can roll from prone (tummy) to supine (back) position',
    redFlags: ['Not rolling by 6 months', 'Rolls only to one side consistently'],
    explanations: {
      level1: 'Your baby is learning to flip over! Usually they learn to roll from tummy to back first, then from back to tummy. This is exciting but also means you need to watch them more carefully on changing tables and beds.',
      level2: 'Rolling requires trunk rotation and weight shifting. Babies typically roll tummy-to-back first (around 4 months) because gravity assists. Back-to-tummy rolling (around 5-6 months) requires more core strength.',
      level3: 'Rolling integrates vestibular input, trunk rotation, and weight shift. Tummy-to-back rolling uses extension patterns; back-to-tummy requires segmental rotation and flexor activation. Asymmetric rolling may indicate hemiplegia or torticollis.',
      level4: 'Evaluate for asymmetric rolling patterns, obligate ATNR beyond 4-5 months, or lack of protective extension. Consider musculoskeletal causes (hip dysplasia, torticollis) and neurological causes (hemiplegic CP, brachial plexus injury).',
      level5: 'Kinematic analysis shows typical rolling involves weight shift, pelvis rotation, then shoulder follow. Aberrant patterns may predict movement disorders. Early intervention referral improves outcomes - neuroplasticity is maximal in first year.',
    },
    assessmentTips: [
      'Place on tummy on firm surface and observe',
      'Note if rolling is symmetric both directions',
      'Check for obligate ATNR',
    ],
    supportStrategies: [
      'Continue daily tummy time',
      'Use toys to encourage reaching across midline',
      'Never leave unattended on elevated surfaces',
    ],
  };

  const sitIndependently: DevelopmentalMilestone = {
    id: 'gross-motor-sits',
    domain: 'gross-motor',
    ageMonths: 6,
    ageTolerance: 2,
    skill: 'Sits without support',
    description: 'Baby can maintain sitting position independently with good balance',
    redFlags: ['Not sitting by 9 months', 'W-sitting exclusively', 'Requires arm propping consistently'],
    explanations: {
      level1: 'Your baby can sit up all by themselves! They might be a little wobbly at first, but they\'re building the balance and strength they need. This opens up a whole new world - they can use both hands to play while sitting.',
      level2: 'Independent sitting requires core strength, trunk control, and balance reactions. Babies typically progress from tripod sitting (using hands for support) to sitting with hands free. This milestone enables two-handed play and object exploration.',
      level3: 'Sitting requires integration of vestibular, visual, and proprioceptive input for postural control. Protective extension responses (parachute reactions) develop to prevent falls. W-sitting may indicate low tone or hip instability.',
      level4: 'Assess sitting equilibrium reactions and protective extension. Delayed sitting may indicate hypotonia, cerebral palsy, or global developmental delay. W-sitting increases risk of hip dysplasia and limits trunk rotation. Evaluate hip ROM.',
      level5: 'Postural control studies show typical sitting involves continuous micro-adjustments. Children with CP show reduced postural complexity and anticipatory postural adjustments. Seating systems and positioning devices may facilitate functional sitting.',
    },
    assessmentTips: [
      'Place in sitting position and observe balance',
      'Note if protective extension is present',
      'Observe preferred sitting posture',
    ],
    supportStrategies: [
      'Practice supported sitting with pillows',
      'Encourage reaching for toys while sitting',
      'Discourage W-sitting - teach alternate positions',
    ],
  };

  const cruising: DevelopmentalMilestone = {
    id: 'gross-motor-cruise',
    domain: 'gross-motor',
    ageMonths: 9,
    ageTolerance: 2,
    skill: 'Cruises along furniture',
    description: 'Baby walks sideways while holding onto furniture for support',
    redFlags: ['Not pulling to stand by 12 months', 'Strong leg preference', 'Toe-walking'],
    explanations: {
      level1: 'Your baby is on the move! They\'re holding onto furniture and taking steps sideways. This is practice for walking. Make sure furniture is sturdy and remove anything they might pull down on themselves.',
      level2: 'Cruising develops balance and weight-shifting needed for independent walking. Babies practice single-leg stance and weight transfer. This typically occurs 1-3 months before independent walking.',
      level3: 'Cruising requires dynamic balance, lateral weight shift, and reciprocal leg movements. It develops after pull-to-stand (8-9 months). Persistent toe-walking may indicate tight heel cords, sensory processing issues, or CP.',
      level4: 'Assess quality of movement - look for reciprocal pattern, heel strike, and balanced weight distribution. Asymmetric patterns may indicate hemiplegia. Obligate toe-walking beyond 2-3 months of walking onset warrants evaluation.',
      level5: 'Gait analysis shows cruising develops the lateral stability needed for mature gait. Early intervention for gait abnormalities may prevent secondary musculoskeletal complications. Consider ankle-foot orthoses if needed.',
    },
    assessmentTips: [
      'Observe along furniture - smooth reciprocal movement?',
      'Note foot position - heel-down or toe-walking?',
      'Check for leg preference',
    ],
    supportStrategies: [
      'Ensure stable furniture for practice',
      'Push toys encourage forward walking',
      'Go barefoot for sensory feedback',
    ],
  };

  const walksIndependently: DevelopmentalMilestone = {
    id: 'gross-motor-walks',
    domain: 'gross-motor',
    ageMonths: 12,
    ageTolerance: 3,
    skill: 'Walks independently',
    description: 'Child walks without support, taking at least 5-10 steps',
    redFlags: ['Not walking by 18 months', 'Persistent toe-walking', 'Asymmetric gait'],
    explanations: {
      level1: 'Your toddler is walking! Those first wobbly steps are a huge achievement. They\'ll fall a lot at first - that\'s normal! Most kids start walking between 9-15 months, so there\'s a wide range of normal.',
      level2: 'Independent walking typically begins between 9-15 months. Early walkers often have more mature motor patterns, while later walkers within normal range may have more advanced cognitive development. Both are normal variations.',
      level3: 'Independent ambulation requires integration of postural control, balance reactions, and reciprocal leg movements. Initial gait is wide-based with arms in high guard. Mature gait pattern develops over 3-5 years.',
      level4: 'Not walking by 18 months requires evaluation. Consider hypotonia, CP, muscular dystrophy, or global delay. Assess for signs of regression (loss of skills). Hip dysplasia may present as limping. Refer for formal developmental evaluation.',
      level5: 'Walking delay may be the first sign of Duchenne muscular dystrophy (check CK), spinal muscular atrophy, or metabolic disorders. Genetic testing and MRI may be indicated. Early intervention optimizes outcomes regardless of diagnosis.',
    },
    assessmentTips: [
      'Observe unassisted walking',
      'Note base of support, arm position, heel strike',
      'Check for asymmetry or limp',
    ],
    supportStrategies: [
      'Safe space to practice walking',
      'Bare feet or flexible-soled shoes',
      'Celebrate efforts, minimize falls',
    ],
  };

  const runsWell: DevelopmentalMilestone = {
    id: 'gross-motor-runs',
    domain: 'gross-motor',
    ageMonths: 24,
    ageTolerance: 3,
    skill: 'Runs with coordination',
    description: 'Child runs with good coordination, able to start and stop',
    redFlags: ['Cannot run by 30 months', 'Frequent falls', 'Regression of motor skills'],
    explanations: {
      level1: 'Your toddler is running! Running is different from fast walking - there\'s a moment when both feet are off the ground. They\'re getting faster and more coordinated, though they still might take a tumble.',
      level2: 'Running develops after walking is well-established. True running has a flight phase (both feet off ground). By 2 years, most children can run with reasonable coordination and start/stop with control.',
      level3: 'Running requires greater speed, balance, and coordination than walking. The flight phase distinguishes running from walking. Development progresses from hurried walk to true running with reciprocal arm swing.',
      level4: 'Assess running quality - look for reciprocal arm swing, appropriate speed, and ability to stop on command. Frequent falls may indicate ataxia, visual problems, or neuromuscular weakness. Motor regression is always concerning.',
      level5: 'Motor regression after normal development suggests progressive disorder - consider metabolic disease, leukodystrophy, or neurodegenerative conditions. Urgent neurological evaluation and MRI indicated for regression.',
    },
    assessmentTips: [
      'Have child run across room',
      'Observe start/stop ability',
      'Note arm swing and coordination',
    ],
    supportStrategies: [
      'Safe outdoor play spaces',
      'Games involving running',
      'Appropriate footwear',
    ],
  };

  // ---- FINE MOTOR MILESTONES ----

  const reachesGrasps: DevelopmentalMilestone = {
    id: 'fine-motor-reaches',
    domain: 'fine-motor',
    ageMonths: 4,
    ageTolerance: 1,
    skill: 'Reaches for and grasps objects',
    description: 'Baby intentionally reaches for and grasps objects using palmar grasp',
    redFlags: ['Not reaching by 5-6 months', 'Persistent fisting', 'Hand preference before 18 months'],
    explanations: {
      level1: 'Your baby is starting to grab things! At first they use their whole hand like a rake. Reaching and grabbing is how babies learn about their world - everything goes straight to their mouth!',
      level2: 'Voluntary reaching develops around 3-4 months when visual and motor systems integrate. Initial grasping uses the palmar (whole hand) pattern. Objects are brought to mouth for oral exploration.',
      level3: 'Reaching requires eye-hand coordination, depth perception, and motor planning. The palmar grasp reflex fades as voluntary grasp develops. Early hand preference may indicate hemiplegia or brachial plexus injury.',
      level4: 'Assess reaching accuracy, quality of grasp, and ability to transfer between hands. Persistent fisting may indicate spasticity. Hand preference before 18-24 months is atypical and warrants hemiplegic CP evaluation.',
      level5: 'Kinematic studies show reaching trajectories become smoother and more direct with development. Movement units decrease and velocity profiles normalize. Constraint-induced movement therapy effective for hemiplegic CP.',
    },
    assessmentTips: [
      'Offer colorful toy within reach',
      'Observe hand openness and grasp',
      'Note hand preference',
    ],
    supportStrategies: [
      'Offer variety of textures and sizes',
      'Practice in supported sitting',
      'Encourage bilateral play',
    ],
  };

  const pincerGrasp: DevelopmentalMilestone = {
    id: 'fine-motor-pincer',
    domain: 'fine-motor',
    ageMonths: 9,
    ageTolerance: 2,
    skill: 'Uses pincer grasp',
    description: 'Baby picks up small objects using thumb and index finger',
    redFlags: ['No pincer by 12 months', 'Using only one hand consistently'],
    explanations: {
      level1: 'Your baby can now pick up tiny things with thumb and finger like tweezers! This is called the pincer grasp. Watch out - they\'ll try to pick up everything, including things they shouldn\'t eat!',
      level2: 'The pincer grasp develops from the earlier raking grasp. By 9 months, most babies can isolate thumb and index finger to pick up small objects like Cheerios. This enables self-feeding and precise manipulation.',
      level3: 'Pincer grasp requires thumb opposition and individual finger movement. It develops from inferior pincer (thumb to side of finger) to superior pincer (fingertip to fingertip). Essential for self-feeding and tool use.',
      level4: 'Absent pincer grasp by 12 months warrants evaluation. Consider fine motor delay, low muscle tone, or sensory processing issues. Occupational therapy referral appropriate if concerns persist.',
      level5: 'Fine motor development correlates with cognitive development but follows independent trajectory. Hand function assessment tools include MACS (Manual Ability Classification System) for children with CP.',
    },
    assessmentTips: [
      'Offer small safe objects (puffs, cheerios)',
      'Observe thumb position and finger isolation',
      'Watch for choking hazards',
    ],
    supportStrategies: [
      'Finger foods for practice',
      'Small safe objects to manipulate',
      'Supervised play with small toys',
    ],
  };

  const scribbles: DevelopmentalMilestone = {
    id: 'fine-motor-scribbles',
    domain: 'fine-motor',
    ageMonths: 15,
    ageTolerance: 3,
    skill: 'Scribbles spontaneously',
    description: 'Child makes marks on paper with crayon or marker',
    redFlags: ['No interest in scribbling by 18 months', 'Difficulty holding crayon'],
    explanations: {
      level1: 'Your toddler is making their first artwork! These scribbles might look random, but they\'re actually important for developing hand control. Let them scribble on paper (and try to save the walls!).',
      level2: 'Scribbling is an early form of mark-making that develops around 12-15 months. It progresses from random marks to more controlled scribbles. This is a precursor to drawing and eventually writing.',
      level3: 'Scribbling requires grasp on writing tool, visual-motor integration, and motor control. Initial grasp is palmar (fist grip). Scribbling progresses from uncontrolled to circular to eventually vertical and horizontal strokes.',
      level4: 'Assess grasp pattern, pressure on paper, and arm stability. Weak grasp or excessive pressure may indicate fine motor or sensory issues. Adapted writing tools available for children with motor difficulties.',
      level5: 'Drawing development follows predictable stages: scribbling (1-2), shapes (2-3), tadpole figures (3-4), and representational drawing (4-5). Delays may indicate visual-motor integration problems or fine motor deficit.',
    },
    assessmentTips: [
      'Provide paper and thick crayon',
      'Observe grasp pattern',
      'Note controlled vs random marks',
    ],
    supportStrategies: [
      'Provide various drawing tools',
      'Large paper and fat crayons',
      'Model drawing for imitation',
    ],
  };

  const buildsBlockTower: DevelopmentalMilestone = {
    id: 'fine-motor-blocks',
    domain: 'fine-motor',
    ageMonths: 18,
    ageTolerance: 2,
    skill: 'Builds tower of 2-4 blocks',
    description: 'Child stacks blocks on top of each other',
    redFlags: ['Cannot stack 2 blocks by 24 months', 'Avoids fine motor tasks'],
    explanations: {
      level1: 'Your toddler can stack blocks! First just two, then more as they practice. Building and knocking down towers is great for hand-eye coordination and problem-solving. They love the crash!',
      level2: 'Block stacking develops hand-eye coordination and spatial skills. Children typically build 2-3 blocks at 18 months, 6 blocks by 2 years, and 8-10 blocks by 3 years. Both building and knocking down are learning.',
      level3: 'Block stacking requires visual-motor integration, graded release, and spatial planning. Tower height progresses predictably with age. Bridge and stairs demonstrate higher-level spatial understanding.',
      level4: 'Block building norms: 2-3 blocks at 18mo, 6 blocks at 2yr, 8+ blocks at 3yr. Bridges and stairs by 3-4 years. Difficulty may indicate visual-motor issues, attention problems, or fine motor delay.',
      level5: 'Block building correlates with later math and spatial reasoning abilities. Constructive play assessment provides insight into planning and problem-solving. Standardized assessment tools include PDMS-2.',
    },
    assessmentTips: [
      'Provide standard 1-inch blocks',
      'Demonstrate stacking first',
      'Count how many before tower falls',
    ],
    supportStrategies: [
      'Various sizes of blocks',
      'Demonstrate building',
      'Celebrate attempts, not just success',
    ],
  };

  // ---- LANGUAGE MILESTONES ----

  const coos: DevelopmentalMilestone = {
    id: 'language-coos',
    domain: 'language',
    ageMonths: 2,
    ageTolerance: 1,
    skill: 'Coos and makes pleasure sounds',
    description: 'Baby makes vowel sounds (ooh, aah) in response to caregiver',
    redFlags: ['No cooing by 3 months', 'No response to sounds or voices'],
    explanations: {
      level1: 'Your baby is "talking" to you with coos and ahhs! When you talk to them, they coo back. These back-and-forth "conversations" are building blocks for language. Keep talking to your baby!',
      level2: 'Cooing represents the beginning of expressive language. These vowel-like sounds emerge around 2 months during social interaction. Babies learn the back-and-forth pattern of conversation through these exchanges.',
      level3: 'Cooing is primarily vowel production using the soft palate and back of tongue. It develops during the "expansion stage" of phonological development. Lack of cooing may indicate hearing loss or social communication concerns.',
      level4: 'Assess cooing in context of social engagement. No cooing by 3-4 months warrants hearing evaluation. Consider ASD if social reciprocity is absent. Hearing screen should be universal newborn screen.',
      level5: 'Research shows cooing occurs in deaf infants but decreases without auditory feedback. Cooing requires intact laryngeal function and social engagement circuits. Reduced cooing is an early marker for ASD in some studies.',
    },
    assessmentTips: [
      'Engage baby face-to-face',
      'Talk and pause for response',
      'Listen for vowel sounds',
    ],
    supportStrategies: [
      'Talk to baby frequently',
      'Respond to their sounds',
      'Face-to-face interaction',
    ],
  };

  const babbles: DevelopmentalMilestone = {
    id: 'language-babbles',
    domain: 'language',
    ageMonths: 6,
    ageTolerance: 2,
    skill: 'Babbles consonant sounds',
    description: 'Baby makes consonant-vowel combinations like "ba-ba" or "da-da"',
    redFlags: ['No babbling by 9 months', 'Loss of babbling'],
    explanations: {
      level1: 'Your baby is babbling! Sounds like "baba" and "dada" are practice for real words. They might say "dada" or "mama" but don\'t mean it yet. Keep responding - it encourages more babbling!',
      level2: 'Babbling adds consonants to vowels (canonical babbling). Reduplicated babbling (ba-ba-ba) appears first, followed by variegated babbling (ba-da-ga). This is critical preparation for first words.',
      level3: 'Canonical babbling (CV combinations) emerges around 6-7 months in typically developing infants regardless of language exposure. Babbling is reduced or absent in deaf infants and may be reduced in ASD.',
      level4: 'Absent babbling by 9-10 months is concerning. Evaluate hearing, consider ASD screening. Loss of babbling (regression) is red flag for ASD or neurodegenerative disorder. Refer for early intervention.',
      level5: 'Research shows babbling structure predicts later phonological development. Hearing aids/cochlear implants improve babbling in deaf infants when fitted early. Critical period for phonological development.',
    },
    assessmentTips: [
      'Listen for consonant-vowel combinations',
      'Note variety of sounds',
      'Ask parents about babbling at home',
    ],
    supportStrategies: [
      'Respond to babbling as conversation',
      'Model words during babbling',
      'Singing and rhymes',
    ],
  };

  const firstWords: DevelopmentalMilestone = {
    id: 'language-first-words',
    domain: 'language',
    ageMonths: 12,
    ageTolerance: 3,
    skill: 'Says 1-3 words with meaning',
    description: 'Child uses specific words meaningfully (mama, dada, ball)',
    redFlags: ['No words by 15 months', 'Loss of words', 'No gesture use'],
    explanations: {
      level1: 'First words are so exciting! "Mama," "dada," "ball" - your baby is using words to communicate. They might only have 1-3 words now, but they understand many more. Point at things and name them!',
      level2: 'First true words emerge around 12 months and are used consistently with meaning. Children understand far more words (50+) than they can say. Pointing and gestures support early word learning.',
      level3: 'First words are typically high-frequency nouns and social words. Vocabulary at 12 months predicts later language. Gesture use (pointing, waving) is a critical precursor and should be present by 12 months.',
      level4: 'No words by 15-16 months requires speech-language evaluation. Absence of gestures is more concerning than absence of words. Consider hearing loss, ASD, language disorder. Early intervention improves outcomes.',
      level5: 'Late talkers (< 50 words at 24 months) have 50-70% chance of catching up by school age. Predictors of persistent delay: receptive language delay, limited gesture use, family history, male sex.',
    },
    assessmentTips: [
      'Ask parents what words child uses',
      'Listen during visit',
      'Check for gestures (pointing, waving)',
    ],
    supportStrategies: [
      'Label objects during daily routines',
      'Read books daily',
      'Expand on child\'s words',
    ],
  };

  const wordExplosion: DevelopmentalMilestone = {
    id: 'language-50-words',
    domain: 'language',
    ageMonths: 18,
    ageTolerance: 3,
    skill: 'Has 10-50 word vocabulary',
    description: 'Child knows and uses many words including nouns and verbs',
    redFlags: ['<10 words at 18 months', 'Not combining words by 24 months'],
    explanations: {
      level1: 'Your toddler is learning new words every week! They might have 10-50 words now and are learning what everything is called. Soon they\'ll start putting words together like "more milk" or "daddy go."',
      level2: 'Around 18 months, many children experience a "vocabulary explosion" where word learning accelerates dramatically. By 2 years, most have 200-300 words and are combining words into two-word phrases.',
      level3: 'Vocabulary at 18-24 months follows exponential growth (vocabulary spurt). Children with < 50 words at 24 months are considered "late talkers." Word combinations typically emerge with 50+ word vocabulary.',
      level4: 'Assess receptive vocabulary (points to named objects) and expressive vocabulary. <50 words at 24 months warrants SLP evaluation. Isolated expressive delay has better prognosis than combined receptive-expressive delay.',
      level5: 'MacArthur-Bates CDI provides normative vocabulary data. Early language intervention (before age 3) is most effective due to neuroplasticity. Parent-implemented intervention effective for late talkers.',
    },
    assessmentTips: [
      'Ask parents to estimate word count',
      'Use age-appropriate vocabulary checklist',
      'Listen for word combinations',
    ],
    supportStrategies: [
      'Name everything throughout day',
      'Read interactively',
      'Expand child\'s utterances',
    ],
  };

  const twoWordPhrases: DevelopmentalMilestone = {
    id: 'language-two-words',
    domain: 'language',
    ageMonths: 24,
    ageTolerance: 2,
    skill: 'Combines two words',
    description: 'Child puts words together (more milk, daddy go, big dog)',
    redFlags: ['No word combinations by 24 months', 'Speech mostly unintelligible to parents'],
    explanations: {
      level1: 'Your toddler is putting words together! "More juice," "Daddy work," "Big truck" - these two-word sentences show they\'re learning how language works. Soon sentences will get longer and longer.',
      level2: 'Two-word combinations typically emerge around 18-24 months and follow predictable semantic patterns (agent-action, action-object). This marks the beginning of grammar development.',
      level3: 'Word combinations reflect underlying semantic relationships and emerging syntax. Mean length of utterance (MLU) is primary measure of grammatical development. MLU of 2.0 expected around 24 months.',
      level4: 'Assess word combinations, MLU, and intelligibility (50% by 2 years, 75% by 3 years). No combinations by 24 months warrants referral. Rule out hearing loss, consider autism, language disorder.',
      level5: 'Grammatical morpheme acquisition follows predictable order. Early intervention targeting caregiver responsiveness and language modeling shows strong evidence. Specific language impairment affects 7% of children.',
    },
    assessmentTips: [
      'Listen for word combinations',
      'Ask parents for examples',
      'Assess intelligibility',
    ],
    supportStrategies: [
      'Model two-word phrases',
      'Expand child\'s words into phrases',
      'Interactive book reading',
    ],
  };

  // ---- COGNITIVE MILESTONES ----

  const objectPermanence: DevelopmentalMilestone = {
    id: 'cognitive-object-permanence',
    domain: 'cognitive',
    ageMonths: 8,
    ageTolerance: 2,
    skill: 'Understands object permanence',
    description: 'Baby looks for objects that are hidden or dropped',
    redFlags: ['No interest in finding hidden objects by 12 months'],
    explanations: {
      level1: 'Your baby now knows that things still exist even when they can\'t see them! That\'s why peek-a-boo is so exciting - they\'re learning you come back. They\'ll look for a toy you hide under a blanket.',
      level2: 'Object permanence is understanding that objects continue to exist when out of sight. This Piagetian concept develops around 8 months. It\'s why separation anxiety also emerges - they know you still exist when you leave!',
      level3: 'Object permanence represents a major cognitive milestone in Piaget\'s sensorimotor stage. It develops through stages: looking at point of disappearance (4-8mo), uncovering hidden objects (8-12mo), sequential displacement (12-18mo).',
      level4: 'Assess by hiding toy under cloth - child should uncover it. A-not-B error (searching where previously found) is typical until 12 months. Persistent failure to search may indicate cognitive delay or visual impairment.',
      level5: 'Research questions Piaget\'s timeline - violation of expectation studies suggest earlier understanding. Object permanence relates to working memory development and prefrontal cortex maturation.',
    },
    assessmentTips: [
      'Hide toy under cloth while watching',
      'See if child searches for it',
      'Check for A-not-B error',
    ],
    supportStrategies: [
      'Play peek-a-boo games',
      'Hide-and-find games with toys',
      'Narrate when leaving and returning',
    ],
  };

  const causality: DevelopmentalMilestone = {
    id: 'cognitive-cause-effect',
    domain: 'cognitive',
    ageMonths: 9,
    ageTolerance: 2,
    skill: 'Understands cause and effect',
    description: 'Baby repeats actions to make interesting things happen',
    redFlags: ['No cause-effect play by 12 months', 'No imitation'],
    explanations: {
      level1: 'Your baby is learning that their actions make things happen! Press the button, hear the sound. Drop the spoon, watch it fall. They\'ll do the same thing over and over - that\'s how they learn!',
      level2: 'Cause-and-effect understanding develops as babies learn their actions have predictable results. They\'ll repeat actions intentionally and begin using objects as tools. Pop-up toys and musical toys support this learning.',
      level3: 'Cause-effect understanding reflects development of intentionality and means-end reasoning. It progresses from accidental discovery to intentional repetition to novel experimentation.',
      level4: 'Assess through observation of purposeful play with cause-effect toys. Lack of cause-effect understanding may indicate cognitive delay. Also assess imitation, as it is related and important.',
      level5: 'Cause-effect understanding is foundational for later scientific reasoning and problem-solving. Deficits may be seen in intellectual disability and autism. Joint attention supports cause-effect learning.',
    },
    assessmentTips: [
      'Observe play with cause-effect toys',
      'Watch for intentional repetition',
      'Assess imitation of actions',
    ],
    supportStrategies: [
      'Cause-effect toys (pop-ups, musical)',
      'Imitate baby\'s actions',
      'Simple games (bang drums, push buttons)',
    ],
  };

  const pretendPlay: DevelopmentalMilestone = {
    id: 'cognitive-pretend',
    domain: 'cognitive',
    ageMonths: 18,
    ageTolerance: 3,
    skill: 'Engages in pretend play',
    description: 'Child uses objects symbolically (pretends banana is phone)',
    redFlags: ['No pretend play by 24 months', 'Only lines up or spins objects'],
    explanations: {
      level1: 'Your toddler is using their imagination! They might pretend a block is a car, feed a stuffed animal, or copy what you do around the house. Pretend play is super important for brain development.',
      level2: 'Symbolic/pretend play emerges around 18 months when children can use one thing to represent another. It progresses from self-directed (pretending to sleep) to directing play toward others (feeding doll).',
      level3: 'Pretend play requires symbolic representation and deferred imitation. It develops in stages: presymbolic (using objects conventionally), self-pretend, extending to others, and sequential pretend schemes.',
      level4: 'Absent or limited pretend play by 24 months is a red flag for ASD. Children with autism often prefer repetitive manipulation (lining up, spinning) over imaginative play. Formal autism screening indicated.',
      level5: 'Pretend play correlates with theory of mind development. The ADOS-2 (autism diagnostic tool) heavily assesses symbolic play. Interventions targeting play skills in autism show moderate effectiveness.',
    },
    assessmentTips: [
      'Offer props (cup, phone, doll)',
      'Observe how child uses objects',
      'Look for symbolic/pretend actions',
    ],
    supportStrategies: [
      'Model pretend play',
      'Provide props for play',
      'Encourage imaginative scenarios',
    ],
  };

  // ---- SOCIAL-EMOTIONAL MILESTONES ----

  const socialSmile: DevelopmentalMilestone = {
    id: 'social-smile',
    domain: 'social-emotional',
    ageMonths: 2,
    ageTolerance: 1,
    skill: 'Smiles in response to caregiver',
    description: 'Baby smiles responsively when seeing caregiver\'s face',
    redFlags: ['No social smile by 3 months', 'Avoids eye contact'],
    explanations: {
      level1: 'That smile meant for you! Your baby smiles when they see your face because they know you and love you. Social smiles are different from the sleepy smiles newborns make - these are just for you!',
      level2: 'The social smile is one of the earliest social-emotional milestones. It emerges around 6-8 weeks and demonstrates the baby\'s developing ability to engage with and respond to caregivers.',
      level3: 'Social smiling requires visual recognition of faces and intact reward/social circuitry. It is the first clear indicator of reciprocal social engagement. Absence may indicate visual impairment or social communication disorder.',
      level4: 'Assess social smile with face-to-face engagement. No social smile by 3 months warrants evaluation - consider visual impairment, developmental delay, or early ASD indicator. Also assess eye contact quality.',
      level5: 'Research shows social smile timing correlates with later social development. Face processing networks develop rapidly in first months. Very early social smile deficits are one of the earliest potential ASD markers.',
    },
    assessmentTips: [
      'Engage face-to-face and smile',
      'Wait for contingent response',
      'Observe eye contact quality',
    ],
    supportStrategies: [
      'Frequent face-to-face interaction',
      'Respond to baby\'s smiles',
      'Talk and coo with baby',
    ],
  };

  const separationAnxiety: DevelopmentalMilestone = {
    id: 'social-separation-anxiety',
    domain: 'social-emotional',
    ageMonths: 9,
    ageTolerance: 3,
    skill: 'Shows separation anxiety',
    description: 'Baby becomes distressed when caregiver leaves',
    redFlags: ['No attachment behavior by 12 months', 'No distress with any separation'],
    explanations: {
      level1: 'Your baby might cry when you leave now - that\'s actually a good sign! It means they\'re attached to you and know you\'re special. This is normal and usually peaks around 12-18 months.',
      level2: 'Separation anxiety emerges around 8-10 months when attachment is established and object permanence develops. It typically peaks between 10-18 months and gradually decreases. It\'s a sign of healthy attachment.',
      level3: 'Separation anxiety reflects development of selective attachment and object permanence. According to Bowlby\'s attachment theory, this is a normal developmental phase. Absence may indicate insecure attachment or ASD.',
      level4: 'Assess quality of attachment behaviors: distress on separation, greeting on reunion, checking back with caregiver. Complete absence of separation distress may be concerning for ASD or reactive attachment issues.',
      level5: 'Attachment classification (secure, anxious, avoidant, disorganized) predicts later social-emotional outcomes. Strange Situation Procedure is gold standard assessment. Disorganized attachment is strongest predictor of later pathology.',
    },
    assessmentTips: [
      'Ask about response to caregiver leaving',
      'Observe during visit if opportunity',
      'Assess reunion behavior',
    ],
    supportStrategies: [
      'Consistent goodbyes (not sneaking away)',
      'Transitional objects',
      'Practice short separations',
    ],
  };

  const jointAttention: DevelopmentalMilestone = {
    id: 'social-joint-attention',
    domain: 'social-emotional',
    ageMonths: 12,
    ageTolerance: 2,
    skill: 'Shows objects to share interest',
    description: 'Child points to show things and looks to share enjoyment',
    redFlags: ['No pointing by 14 months', 'Does not follow point', 'Does not share interest'],
    explanations: {
      level1: 'Your baby points at things and looks at you to share their excitement! "Look at that dog!" This sharing attention with you is how they learn language and connect with people.',
      level2: 'Joint attention is the shared focus on an object between child and caregiver. It includes following point/gaze (responding) and pointing to share interest (initiating). It\'s essential for language learning.',
      level3: 'Joint attention is a pivotal social communication skill. Initiating joint attention (pointing to share interest) develops later than responding (following point). Deficits are core feature of ASD.',
      level4: 'Assess both responding to joint attention (follows point across room) and initiating (points to share, not just request). Absence by 14-16 months is major red flag for ASD. MCHAT-R screening at 18, 24 months.',
      level5: 'Joint attention deficits are one of the earliest and most specific markers of autism. Intervention targeting joint attention improves outcomes in ASD. Joint attention supports word learning (follows caregiver gaze to referent).',
    },
    assessmentTips: [
      'Point to something across room',
      'See if child follows your point',
      'Watch if child points to share interest',
    ],
    supportStrategies: [
      'Point and label objects',
      'Respond when child points',
      'Share attention with books/toys',
    ],
  };

  const parallelPlay: DevelopmentalMilestone = {
    id: 'social-parallel-play',
    domain: 'social-emotional',
    ageMonths: 24,
    ageTolerance: 6,
    skill: 'Plays alongside other children',
    description: 'Child plays near other children with similar toys but not directly together',
    redFlags: ['No interest in other children by 24 months', 'Always plays alone'],
    explanations: {
      level1: 'Your toddler plays next to other kids, doing similar things, but not really together yet. That\'s called parallel play and it\'s totally normal! Playing truly together comes later around age 3-4.',
      level2: 'Parallel play is a normal stage where children play alongside each other with similar materials but without direct interaction. It\'s a bridge between solitary play (younger) and cooperative play (older).',
      level3: 'Parten\'s stages of play: solitary, onlooker, parallel, associative, cooperative. Parallel play is normative at 2-3 years. Limited interest in peers or exclusive solitary play may indicate ASD or social-communication concerns.',
      level4: 'Assess child\'s awareness of and interest in peers. Some parallel play is normative, but complete lack of interest in other children is concerning. Consider ASD screening if child prefers objects over people.',
      level5: 'Play development in ASD shows deficits in social engagement and symbolic play, with relative strength in sensorimotor play. Play-based interventions (DIR/Floortime, JASPER) target social engagement.',
    },
    assessmentTips: [
      'Observe in group setting if possible',
      'Ask parents about peer interest',
      'Note social awareness',
    ],
    supportStrategies: [
      'Playdates with one child',
      'Model social interaction',
      'Narrate what other children are doing',
    ],
  };

  // Store all milestones
  milestones.set('gross-motor-head-control', headControl);
  milestones.set('gross-motor-rolls', rollsOver);
  milestones.set('gross-motor-sits', sitIndependently);
  milestones.set('gross-motor-cruise', cruising);
  milestones.set('gross-motor-walks', walksIndependently);
  milestones.set('gross-motor-runs', runsWell);
  milestones.set('fine-motor-reaches', reachesGrasps);
  milestones.set('fine-motor-pincer', pincerGrasp);
  milestones.set('fine-motor-scribbles', scribbles);
  milestones.set('fine-motor-blocks', buildsBlockTower);
  milestones.set('language-coos', coos);
  milestones.set('language-babbles', babbles);
  milestones.set('language-first-words', firstWords);
  milestones.set('language-50-words', wordExplosion);
  milestones.set('language-two-words', twoWordPhrases);
  milestones.set('cognitive-object-permanence', objectPermanence);
  milestones.set('cognitive-cause-effect', causality);
  milestones.set('cognitive-pretend', pretendPlay);
  milestones.set('social-smile', socialSmile);
  milestones.set('social-separation-anxiety', separationAnxiety);
  milestones.set('social-joint-attention', jointAttention);
  milestones.set('social-parallel-play', parallelPlay);
}

// ============================================
// DEVELOPMENTAL RED FLAGS
// ============================================

export const DEVELOPMENTAL_RED_FLAGS: DevelopmentalRedFlag[] = [
  // Motor red flags
  { ageMonths: 4, domain: 'gross-motor', description: 'No head control', significance: 'May indicate hypotonia, CP, neuromuscular disorder', nextSteps: ['Neurological evaluation', 'Physical therapy referral'] },
  { ageMonths: 6, domain: 'gross-motor', description: 'Not rolling', significance: 'May indicate motor delay or asymmetry', nextSteps: ['Assess muscle tone', 'PT evaluation'] },
  { ageMonths: 9, domain: 'gross-motor', description: 'Not sitting independently', significance: 'Motor delay, consider CP', nextSteps: ['PT/OT evaluation', 'Consider imaging'] },
  { ageMonths: 12, domain: 'gross-motor', description: 'Not pulling to stand', significance: 'Gross motor delay', nextSteps: ['Developmental evaluation', 'PT referral'] },
  { ageMonths: 18, domain: 'gross-motor', description: 'Not walking', significance: 'Significant motor delay', nextSteps: ['Comprehensive evaluation', 'Rule out neuromuscular disease'] },

  // Fine motor red flags
  { ageMonths: 6, domain: 'fine-motor', description: 'Persistent fisting, not reaching', significance: 'May indicate spasticity or delay', nextSteps: ['Neurological exam', 'OT evaluation'] },
  { ageMonths: 12, domain: 'fine-motor', description: 'No pincer grasp', significance: 'Fine motor delay', nextSteps: ['OT evaluation', 'Consider feeding therapy'] },
  { ageMonths: 12, domain: 'fine-motor', description: 'Hand preference before 18 months', significance: 'May indicate hemiplegic CP', nextSteps: ['Neurological evaluation', 'Brain imaging'] },

  // Language red flags
  { ageMonths: 4, domain: 'language', description: 'No cooing', significance: 'Hearing loss, social communication concern', nextSteps: ['Hearing evaluation', 'Monitor social engagement'] },
  { ageMonths: 9, domain: 'language', description: 'No babbling', significance: 'Hearing loss, ASD risk', nextSteps: ['Hearing test', 'ASD screening'] },
  { ageMonths: 12, domain: 'language', description: 'No gestures (pointing, waving)', significance: 'High risk for ASD', nextSteps: ['ASD screening', 'Early intervention referral'] },
  { ageMonths: 15, domain: 'language', description: 'No words', significance: 'Language delay', nextSteps: ['Hearing test', 'Speech therapy evaluation'] },
  { ageMonths: 24, domain: 'language', description: 'No word combinations', significance: 'Language delay', nextSteps: ['Speech-language evaluation', 'Consider ASD'] },

  // Social-emotional red flags
  { ageMonths: 3, domain: 'social-emotional', description: 'No social smile', significance: 'Visual impairment, social communication concern', nextSteps: ['Vision and hearing screen', 'Monitor development'] },
  { ageMonths: 12, domain: 'social-emotional', description: 'No response to name', significance: 'Hearing loss, ASD indicator', nextSteps: ['Hearing test', 'ASD screening'] },
  { ageMonths: 14, domain: 'social-emotional', description: 'No joint attention', significance: 'Significant ASD risk', nextSteps: ['Formal ASD evaluation', 'Early intervention'] },
  { ageMonths: 24, domain: 'social-emotional', description: 'No interest in other children', significance: 'Social communication concern', nextSteps: ['ASD screening', 'Developmental evaluation'] },

  // Regression red flags (any age)
  { ageMonths: 0, domain: 'cognitive', description: 'Loss of previously acquired skills (any age)', significance: 'Neurodegenerative disorder, ASD regression', nextSteps: ['Urgent neurological evaluation', 'Metabolic workup', 'Brain MRI'] },
];

// ============================================
// TANNER STAGES
// ============================================

const tannerStages = new Map<string, TannerStage>();

function initializeTannerStages(): void {
  // Female breast development
  const femaleBreast: TannerStage[] = [
    {
      stage: 1,
      sex: 'female',
      category: 'breast',
      description: 'Prepubertal: elevation of papilla only',
      typicalAge: { min: 0, max: 10 },
      explanations: {
        level1: 'Before puberty, the breast is flat with just the nipple raised. This is normal for all young girls.',
        level2: 'Prepubertal breast - only the nipple is elevated from the chest wall. No breast tissue development yet.',
        level3: 'Tanner B1: Prepubertal state with elevation of papilla only. No palpable breast tissue.',
        level4: 'B1 represents absence of breast development. Thelarche (breast budding) marks the beginning of puberty.',
        level5: 'B1 assessment requires palpation to distinguish from adipose tissue. Premature thelarche before age 8 requires workup.',
      },
    },
    {
      stage: 2,
      sex: 'female',
      category: 'breast',
      description: 'Breast budding: elevation of breast and papilla as small mound',
      typicalAge: { min: 8, max: 13 },
      explanations: {
        level1: 'The first sign of puberty in girls - a small "breast bud" develops under the nipple. One side often develops before the other. This is totally normal!',
        level2: 'Breast budding (thelarche) is usually the first sign of puberty. A small mound forms under the nipple. Average age is 10-11 years.',
        level3: 'Tanner B2: Breast budding with elevation of breast and papilla as small mound, areolar diameter slightly enlarged.',
        level4: 'B2 marks puberty onset. Thelarche before age 8 is precocious. Mean onset 10.5 years; African American girls develop earlier.',
        level5: 'Breast development triggered by ovarian estrogen production after HPG axis activation. CPP workup if before age 8.',
      },
    },
    {
      stage: 3,
      sex: 'female',
      category: 'breast',
      description: 'Further enlargement without separation of contours',
      typicalAge: { min: 10, max: 14 },
      explanations: {
        level1: 'The breast continues to grow and becomes more rounded. The areola (dark area) gets bigger too.',
        level2: 'Continued breast growth with enlargement of areola. The breast and areola are still one continuous mound.',
        level3: 'Tanner B3: Further enlargement of breast and areola without separation of their contours.',
        level4: 'B3 typically occurs 6-12 months after B2. Growth spurt usually begins during B3.',
        level5: 'Peak height velocity typically occurs between B2-B3. Bone age correlates with pubertal stage.',
      },
    },
    {
      stage: 4,
      sex: 'female',
      category: 'breast',
      description: 'Areola and papilla project above breast level',
      typicalAge: { min: 11, max: 15 },
      explanations: {
        level1: 'The areola and nipple form a separate small mound that sticks out from the breast. Most girls get their period during this stage.',
        level2: 'The areola forms a secondary mound projecting above the breast contour. Menarche (first period) typically occurs during B3-B4.',
        level3: 'Tanner B4: Areola and papilla form secondary mound projecting above level of breast.',
        level4: 'Menarche occurs on average 2-2.5 years after thelarche, typically B3-B4. Average age 12.5 years in US.',
        level5: 'Menarche marks end of peak height velocity; only 1-3 inches of growth remain. Anovulatory cycles normal initially.',
      },
    },
    {
      stage: 5,
      sex: 'female',
      category: 'breast',
      description: 'Adult breast contour',
      typicalAge: { min: 12, max: 18 },
      explanations: {
        level1: 'The breast has reached its adult shape and size. Development is complete.',
        level2: 'Adult breast contour with areola recessed to the general breast contour. Breast development is complete.',
        level3: 'Tanner B5: Adult breast with areola receded to breast contour, nipple projects.',
        level4: 'B5 represents completion of breast development. Average age 15 years. Breast size varies widely.',
        level5: 'Breast development complete but cyclic changes occur with menstrual cycle. Some women never progress past B4.',
      },
    },
  ];

  // Female pubic hair
  const femalePubicHair: TannerStage[] = [
    {
      stage: 1,
      sex: 'female',
      category: 'pubic-hair',
      description: 'No pubic hair',
      typicalAge: { min: 0, max: 11 },
      explanations: {
        level1: 'Before puberty, there\'s no pubic hair at all, just the same fine hair as on the rest of the body.',
        level2: 'Prepubertal - no pubic hair visible. Only vellus (fine body) hair present.',
        level3: 'Tanner P1: Prepubertal with no pubic hair (vellus only).',
        level4: 'P1 is prepubertal state. Pubarche (pubic hair appearance) typically follows thelarche.',
        level5: 'Adrenarche (adrenal androgen production) drives pubarche. Isolated premature pubarche before age 8 warrants workup.',
      },
    },
    {
      stage: 2,
      sex: 'female',
      category: 'pubic-hair',
      description: 'Sparse, long, straight hair along labia',
      typicalAge: { min: 9, max: 14 },
      explanations: {
        level1: 'A little bit of soft hair starts to grow. It\'s usually straight and light-colored at first.',
        level2: 'First pubic hair appears - sparse, long, slightly pigmented, usually straight, along the labia majora.',
        level3: 'Tanner P2: Sparse, long, slightly pigmented, straight or slightly curved hair chiefly along labia.',
        level4: 'P2 follows thelarche by about 6 months on average. Results from adrenal androgens.',
        level5: 'DHEAS levels rise during adrenarche (age 6-8) preceding visible pubarche. Consider CAH if pubarche before 8.',
      },
    },
    {
      stage: 3,
      sex: 'female',
      category: 'pubic-hair',
      description: 'Hair darker, coarser, curlier',
      typicalAge: { min: 10, max: 15 },
      explanations: {
        level1: 'The pubic hair is getting darker, thicker, and curlier. It\'s spreading a bit more too.',
        level2: 'Hair becomes darker, coarser, more curly and spreads over the pubic area.',
        level3: 'Tanner P3: Considerably darker, coarser, curlier hair spreading sparsely over pubic junction.',
        level4: 'P3 often coincides with B3. Growth spurt typically underway.',
        level5: 'Terminal hair development results from increasing androgen levels. Pattern determined by genetics.',
      },
    },
    {
      stage: 4,
      sex: 'female',
      category: 'pubic-hair',
      description: 'Adult quality hair but smaller area',
      typicalAge: { min: 11, max: 16 },
      explanations: {
        level1: 'The hair now looks more like adult hair - thick and curly - but doesn\'t cover as much area yet.',
        level2: 'Hair is now adult in texture and amount but covers a smaller area, not yet spreading to thighs.',
        level3: 'Tanner P4: Adult-type hair, no spread to medial thighs.',
        level4: 'P4 typically present at menarche. Adult distribution not yet achieved.',
        level5: 'Androgen receptor sensitivity determines extent of hair distribution. Hirsutism workup if excessive.',
      },
    },
    {
      stage: 5,
      sex: 'female',
      category: 'pubic-hair',
      description: 'Adult distribution with spread to thighs',
      typicalAge: { min: 12, max: 18 },
      explanations: {
        level1: 'Adult pattern of pubic hair that may spread somewhat to the inner thighs. Development is complete.',
        level2: 'Adult distribution - hair spreads to medial thighs in an inverse triangle pattern.',
        level3: 'Tanner P5: Adult distribution with horizontal upper border and spread to medial thighs.',
        level4: 'P5 represents complete pubic hair development. Varies considerably in extent among individuals.',
        level5: 'Final distribution is genetically determined. Some individuals never reach P5 or have extension beyond typical pattern.',
      },
    },
  ];

  // Store female stages
  femaleBreast.forEach(s => tannerStages.set(`female-breast-${s.stage}`, s));
  femalePubicHair.forEach(s => tannerStages.set(`female-pubic-hair-${s.stage}`, s));

  // Male genital development
  const maleGenital: TannerStage[] = [
    {
      stage: 1,
      sex: 'male',
      category: 'genital',
      description: 'Prepubertal: testes < 4mL, penis childlike',
      typicalAge: { min: 0, max: 11 },
      explanations: {
        level1: 'Before puberty, the penis and testes look the same as in early childhood - they haven\'t started growing yet.',
        level2: 'Prepubertal genitalia - testes and penis are childlike with no enlargement.',
        level3: 'Tanner G1: Prepubertal - testes volume <4mL, penis and scrotum childlike.',
        level4: 'G1 is prepubertal. Testicular enlargement ≥4mL marks the onset of puberty in boys.',
        level5: 'Testicular volume measured by Prader orchidometer. Gonadarche starts with LH pulsatility driving Leydig cell testosterone production.',
      },
    },
    {
      stage: 2,
      sex: 'male',
      category: 'genital',
      description: 'Testes enlarge (4-6mL), scrotum reddens',
      typicalAge: { min: 9, max: 14 },
      explanations: {
        level1: 'The first sign of puberty in boys - the testicles get bigger. The skin of the scrotum might look different too.',
        level2: 'Testicular enlargement is usually the first sign of puberty. The scrotum becomes thinner and redder.',
        level3: 'Tanner G2: Testes enlarge to 4-6mL, scrotal skin reddens and becomes thinner, penis unchanged.',
        level4: 'G2 marks puberty onset. Testicular enlargement before age 9 is precocious. Mean onset 11.5 years.',
        level5: 'Gonadarche driven by HPG axis activation. GnRH analog stimulation test confirms CPP. First testicular cell growth is Sertoli cells.',
      },
    },
    {
      stage: 3,
      sex: 'male',
      category: 'genital',
      description: 'Penis begins to lengthen, testes continue growing',
      typicalAge: { min: 10, max: 15 },
      explanations: {
        level1: 'The testicles keep growing and now the penis starts to get longer (but not wider yet).',
        level2: 'The penis begins to lengthen. The testes continue to grow (8-12mL). The scrotum continues developing.',
        level3: 'Tanner G3: Penis lengthens, testes 8-12mL, scrotum further enlarged.',
        level4: 'G3 typically 6-12 months after G2. Penis growth begins but mainly in length.',
        level5: 'Rising testosterone drives phallus growth. Spermarche (first ejaculation) typically occurs at G3-G4.',
      },
    },
    {
      stage: 4,
      sex: 'male',
      category: 'genital',
      description: 'Penis grows in length and width, glans develops',
      typicalAge: { min: 11, max: 16 },
      explanations: {
        level1: 'The penis is now growing longer and thicker. The testicles are almost adult size.',
        level2: 'Penis increases in both length and width. The glans (head) develops. Testes continue enlarging (15-20mL).',
        level3: 'Tanner G4: Penis grows in length and breadth, glans develops, testes 15-20mL.',
        level4: 'G4 is mid-puberty. Peak height velocity typically occurs between G3-G4 in boys.',
        level5: 'Growth spurt in boys averages 10cm/year at peak (vs 8cm/year in girls). Adult height reached 2-3 years after PHV.',
      },
    },
    {
      stage: 5,
      sex: 'male',
      category: 'genital',
      description: 'Adult genitalia',
      typicalAge: { min: 12, max: 18 },
      explanations: {
        level1: 'The genitals have reached their adult size and shape. Development is complete.',
        level2: 'Adult-sized genitalia - testes 20-25mL, penis adult size. Growth is complete.',
        level3: 'Tanner G5: Adult genitalia - testes 20-25mL, adult-sized penis.',
        level4: 'G5 represents complete genital development. Average age 14.5 years. Some growth continues.',
        level5: 'Full spermatogenesis established. Pubertal completion correlates with bone age of 15-16 years.',
      },
    },
  ];

  // Male pubic hair (similar to female)
  const malePubicHair: TannerStage[] = [
    {
      stage: 1,
      sex: 'male',
      category: 'pubic-hair',
      description: 'No pubic hair',
      typicalAge: { min: 0, max: 12 },
      explanations: {
        level1: 'Before puberty, there\'s no pubic hair, just fine body hair.',
        level2: 'Prepubertal - no pubic hair visible, only vellus hair.',
        level3: 'Tanner P1: Prepubertal with no pubic hair (vellus only).',
        level4: 'P1 is prepubertal. Pubarche in boys typically follows gonadarche by 6+ months.',
        level5: 'Pubarche results from adrenarche and gonadal androgens. Usually follows G2.',
      },
    },
    {
      stage: 2,
      sex: 'male',
      category: 'pubic-hair',
      description: 'Sparse, straight hair at base of penis',
      typicalAge: { min: 10, max: 15 },
      explanations: {
        level1: 'A little bit of hair starts growing at the base of the penis. It\'s usually straight and light at first.',
        level2: 'First pubic hair appears - sparse, straight, slightly pigmented at base of penis.',
        level3: 'Tanner P2: Sparse, long, slightly pigmented, straight hair at base of penis.',
        level4: 'P2 typically follows G2. May be slight temporal gap or concurrent.',
        level5: 'Testosterone and adrenal androgens both contribute to pubarche in males.',
      },
    },
    {
      stage: 3,
      sex: 'male',
      category: 'pubic-hair',
      description: 'Hair darker, coarser, spreading',
      typicalAge: { min: 11, max: 16 },
      explanations: {
        level1: 'The pubic hair gets darker, thicker, and curlier. It\'s spreading out more.',
        level2: 'Hair becomes darker, coarser, curlier and spreads over the pubic region.',
        level3: 'Tanner P3: Darker, coarser, curlier hair spreading sparsely over pubic junction.',
        level4: 'P3 typically coincides with G3. Continued hair maturation.',
        level5: 'Terminal hair characteristics emerge with rising androgen levels.',
      },
    },
    {
      stage: 4,
      sex: 'male',
      category: 'pubic-hair',
      description: 'Adult quality, smaller area',
      typicalAge: { min: 12, max: 17 },
      explanations: {
        level1: 'The hair looks like adult hair but doesn\'t cover as much area yet.',
        level2: 'Adult-type hair but covering smaller area, not yet extending to thighs.',
        level3: 'Tanner P4: Adult-type hair, no spread to medial thighs.',
        level4: 'P4 typically present at G4-G5. Near adult distribution.',
        level5: 'Continued androgen-driven development. Extent genetically determined.',
      },
    },
    {
      stage: 5,
      sex: 'male',
      category: 'pubic-hair',
      description: 'Adult distribution with spread to thighs',
      typicalAge: { min: 13, max: 18 },
      explanations: {
        level1: 'Adult pattern of pubic hair that may extend to the thighs and toward the belly button.',
        level2: 'Adult distribution - hair extends to medial thighs and may extend toward umbilicus.',
        level3: 'Tanner P5: Adult distribution with spread to medial thighs. May extend to linea alba.',
        level4: 'P5 represents complete development. Extension to linea alba is P6 (not all reach).',
        level5: 'Final distribution genetically and hormonally determined. Wide individual variation.',
      },
    },
  ];

  // Store male stages
  maleGenital.forEach(s => tannerStages.set(`male-genital-${s.stage}`, s));
  malePubicHair.forEach(s => tannerStages.set(`male-pubic-hair-${s.stage}`, s));
}

// ============================================
// PUBERTY PROGRESSION
// ============================================

export const PUBERTY_PROGRESSION: PubertyProgression[] = [
  {
    sex: 'female',
    typicalSequence: [
      'Breast budding (B2) - usually first sign',
      'Pubic hair appears (6-12 months after B2)',
      'Growth spurt (typically during B2-B3)',
      'Peak height velocity',
      'Menarche (first period) - average 2.5 years after B2',
      'Adult breast (B5) and pubic hair (P5)',
    ],
    averageOnsetAge: 10.5,
    averageDuration: 4,
    precocious: {
      age: 8,
      workup: ['Bone age', 'GnRH stimulation test', 'Pelvic ultrasound', 'Brain MRI if central'],
    },
    delayed: {
      age: 13,
      workup: ['FSH/LH levels', 'Estradiol', 'Bone age', 'Karyotype if indicated', 'Prolactin'],
    },
  },
  {
    sex: 'male',
    typicalSequence: [
      'Testicular enlargement (≥4mL) - first sign',
      'Pubic hair appears',
      'Penis begins to enlarge',
      'Growth spurt (typically at G3-G4)',
      'Peak height velocity',
      'Voice change',
      'Facial hair',
      'Adult genitalia (G5) and pubic hair (P5)',
    ],
    averageOnsetAge: 11.5,
    averageDuration: 3.5,
    precocious: {
      age: 9,
      workup: ['Bone age', 'Testosterone level', 'GnRH stimulation test', 'LH/FSH', 'Brain MRI if central'],
    },
    delayed: {
      age: 14,
      workup: ['FSH/LH levels', 'Testosterone', 'Bone age', 'Karyotype if indicated', 'Prolactin'],
    },
  },
];

// ============================================
// GROWTH VELOCITY REFERENCE
// ============================================

export const GROWTH_VELOCITY: GrowthVelocity[] = [
  { parameter: 'length-height', ageRangeMonths: { start: 0, end: 12 }, expectedGain: { min: 23, max: 27 }, unit: 'cm/year' },
  { parameter: 'length-height', ageRangeMonths: { start: 12, end: 24 }, expectedGain: { min: 10, max: 14 }, unit: 'cm/year' },
  { parameter: 'length-height', ageRangeMonths: { start: 24, end: 48 }, expectedGain: { min: 6, max: 9 }, unit: 'cm/year' },
  { parameter: 'length-height', ageRangeMonths: { start: 48, end: 120 }, expectedGain: { min: 5, max: 7 }, unit: 'cm/year' },
  { parameter: 'weight', ageRangeMonths: { start: 0, end: 4 }, expectedGain: { min: 150, max: 200 }, unit: 'g/week' },
  { parameter: 'weight', ageRangeMonths: { start: 4, end: 12 }, expectedGain: { min: 80, max: 150 }, unit: 'g/week' },
  { parameter: 'head-circumference', ageRangeMonths: { start: 0, end: 3 }, expectedGain: { min: 1.5, max: 2 }, unit: 'cm/month' },
  { parameter: 'head-circumference', ageRangeMonths: { start: 3, end: 12 }, expectedGain: { min: 0.5, max: 1 }, unit: 'cm/month' },
];

// ============================================
// GROWTH CHART INTERPRETATION
// ============================================

const growthCharts = new Map<string, GrowthChartInfo>();

function initializeGrowthCharts(): void {
  const weightForAge: GrowthChartInfo = {
    id: 'weight-for-age',
    parameter: 'weight',
    sex: 'both',
    ageRange: { minMonths: 0, maxMonths: 240, label: '0-20 years' },
    source: 'CDC/WHO',
    interpretationGuidelines: [
      'Plot weight against age',
      'Compare to sex-specific chart',
      'Assess percentile and trend over time',
      'Single measurement less useful than growth trend',
    ],
    explanations: {
      level1: 'Weight charts show how your child\'s weight compares to other children the same age. Most healthy children fall between the 5th and 95th percentile. What matters most is that your child follows their own curve over time.',
      level2: 'Weight-for-age charts help track growth patterns. Children typically follow a percentile line. Crossing percentile lines (up or down) deserves attention but isn\'t always abnormal. A child consistently at the 10th percentile who is growing along that line is usually fine.',
      level3: 'Weight-for-age reflects nutritional status and overall health. Use WHO charts for 0-24 months (breastfed infants as reference) and CDC charts for 2-20 years. Significant deviation is crossing 2+ major percentile lines.',
      level4: 'Interpret weight-for-age with height-for-age and weight-for-height/BMI. Low weight-for-age alone may be short stature with appropriate weight. Calculate z-scores for research; <-2 z-score is clinically significant.',
      level5: 'WHO standards describe optimal growth in breastfed infants. CDC charts are reference (how children grow) vs WHO standard (how they should grow). Thrive lines available to detect early faltering before crossing percentiles.',
    },
    concernThresholds: [
      { condition: 'Underweight', criteria: '<5th percentile', action: 'Evaluate nutrition, rule out organic causes' },
      { condition: 'Failure to thrive', criteria: 'Crossing 2+ major percentiles downward', action: 'Comprehensive evaluation' },
      { condition: 'Overweight', criteria: '85th-95th percentile BMI', action: 'Lifestyle counseling, monitor' },
      { condition: 'Obesity', criteria: '>95th percentile BMI', action: 'Comprehensive evaluation, intervention' },
    ],
  };

  const lengthHeightForAge: GrowthChartInfo = {
    id: 'height-for-age',
    parameter: 'length-height',
    sex: 'both',
    ageRange: { minMonths: 0, maxMonths: 240, label: '0-20 years' },
    source: 'CDC/WHO',
    interpretationGuidelines: [
      'Measure length (lying) for children <2 years',
      'Measure height (standing) for children 2+ years',
      'Length is about 1 cm more than height',
      'Assess trend over time',
    ],
    explanations: {
      level1: 'Height charts show how tall your child is compared to others their age. Kids grow at different rates, and most fall between the 5th and 95th percentile. Your child\'s own growth pattern over time matters most.',
      level2: 'Height-for-age tracks linear growth. Genetics play a major role - calculate mid-parental height for expected range. Crossing percentiles may indicate a growth problem, but many children naturally shift in first 2 years.',
      level3: 'Linear growth reflects nutrition, hormones, and genetics. Short stature (<3rd percentile) may be familial, constitutional, or pathologic. Calculate growth velocity and bone age for evaluation.',
      level4: 'Evaluate short stature with: height velocity, bone age, IGF-1/IGFBP-3, thyroid function, celiac screening. Constitutional delay shows delayed bone age with normal velocity. Growth hormone deficiency shows poor velocity.',
      level5: 'Genetic short stature has normal bone age; constitutional delay has delayed bone age. SHOX gene mutations cause variable short stature. GH treatment criteria include GHD, Turner syndrome, SGA, idiopathic short stature.',
    },
    concernThresholds: [
      { condition: 'Short stature', criteria: '<3rd percentile or <-2 SD', action: 'Evaluate if pathologic vs familial/constitutional' },
      { condition: 'Growth failure', criteria: 'Height velocity <25th percentile for bone age', action: 'Comprehensive evaluation' },
      { condition: 'Tall stature', criteria: '>97th percentile', action: 'Usually constitutional; evaluate if other features' },
    ],
  };

  const headCircumference: GrowthChartInfo = {
    id: 'head-circumference',
    parameter: 'head-circumference',
    sex: 'both',
    ageRange: { minMonths: 0, maxMonths: 36, label: '0-3 years' },
    source: 'CDC/WHO',
    interpretationGuidelines: [
      'Measure around largest occipitofrontal diameter',
      'Most important in first 2 years',
      'Compare to weight/height percentiles',
      'Family history of head size relevant',
    ],
    explanations: {
      level1: 'Head circumference measures your baby\'s head size, which tells us about brain growth. We measure it at every checkup in the first 2 years. Some families just have big or small heads - that\'s usually fine!',
      level2: 'Head circumference tracks brain growth and is especially important in infancy. Small head (microcephaly) or large head (macrocephaly) may indicate problems, but familial variations are common.',
      level3: 'Head circumference reflects brain volume. Microcephaly (<-2 SD) may be primary (genetic) or secondary (acquired). Macrocephaly may be familial, hydrocephalus, or megalencephaly. Crossing percentiles is concerning.',
      level4: 'Assess head growth in context of weight/height. Proportionally small head with small size may be growth restriction. Disproportionately large head may indicate hydrocephalus. Ultrasound or MRI if indicated.',
      level5: 'Congenital Zika syndrome includes microcephaly. Macrocephaly syndromes include PTEN hamartoma, Sotos, Cowden. Rapid head growth after suture closure may indicate increased ICP.',
    },
    concernThresholds: [
      { condition: 'Microcephaly', criteria: '<-2 SD or <3rd percentile', action: 'Evaluate for etiology, developmental assessment' },
      { condition: 'Macrocephaly', criteria: '>+2 SD or >97th percentile', action: 'Evaluate for hydrocephalus, consider imaging' },
      { condition: 'Rapidly crossing percentiles', criteria: 'Crossing 2+ percentiles upward', action: 'Urgent evaluation for hydrocephalus' },
    ],
  };

  growthCharts.set('weight-for-age', weightForAge);
  growthCharts.set('height-for-age', lengthHeightForAge);
  growthCharts.set('head-circumference', headCircumference);
}

// ============================================
// SCREENING TOOLS
// ============================================

const screeningTools = new Map<string, ScreeningTool>();

function initializeScreeningTools(): void {
  const asq3: ScreeningTool = {
    id: 'asq-3',
    name: 'Ages and Stages Questionnaire, Third Edition',
    abbreviation: 'ASQ-3',
    targetAges: [
      { minMonths: 1, maxMonths: 66, label: '1-66 months' },
    ],
    domains: ['gross-motor', 'fine-motor', 'language', 'cognitive', 'social-emotional'],
    administrationTime: '10-15 minutes parent questionnaire',
    sensitivity: 0.86,
    specificity: 0.85,
    description: 'Parent-completed developmental screening covering 5 domains',
    explanations: {
      level1: 'The ASQ is a questionnaire about what your child can do. You answer questions about your child\'s skills, and we use it to check if development is on track.',
      level2: 'The ASQ-3 is a widely-used developmental screener completed by parents. It assesses 5 areas of development with age-specific questionnaires. It helps identify children who need further evaluation.',
      level3: 'ASQ-3 provides screening across developmental domains at specific ages. Cutoff scores identify children at risk. Below cutoff requires referral for diagnostic evaluation.',
      level4: 'ASQ-3 has good sensitivity/specificity and is validated in diverse populations. Available in multiple languages. Score interpretation: above cutoff, monitoring zone, or below cutoff. Pair with ASQ:SE for social-emotional.',
      level5: 'ASQ-3 normalized on diverse US sample. Validated for telehealth administration. Predictive validity for later developmental diagnoses. Cost-effective screening strategy recommended by AAP.',
    },
    whenToUse: [
      'Periodic developmental surveillance at well-child visits',
      'Developmental concerns reported by parents',
      'High-risk infants (preterm, NICU graduates)',
    ],
    limitations: [
      'Parent-report may have biases',
      'Requires appropriate reading level',
      'Screening, not diagnostic',
    ],
  };

  const mchatr: ScreeningTool = {
    id: 'mchat-r',
    name: 'Modified Checklist for Autism in Toddlers, Revised',
    abbreviation: 'M-CHAT-R/F',
    targetAges: [
      { minMonths: 16, maxMonths: 30, label: '16-30 months' },
    ],
    domains: ['social-emotional', 'language'],
    administrationTime: '5-10 minutes questionnaire + follow-up if positive',
    sensitivity: 0.85,
    specificity: 0.99,
    description: 'Two-stage autism screening tool for toddlers',
    explanations: {
      level1: 'The M-CHAT is a checklist that helps us see if your toddler might need more evaluation for autism. It\'s given to all children at 18 and 24 months. A positive screen doesn\'t mean autism - it means we should look closer.',
      level2: 'The M-CHAT-R/F is a two-stage autism screening tool. Parents answer 20 questions. If at-risk, a structured follow-up interview is done. It\'s recommended for all children at 18 and 24 months.',
      level3: 'M-CHAT-R/F is validated for universal screening at 18 and 24 months. Initial screen followed by follow-up interview if positive reduces false positives. Positive screen requires referral for diagnostic evaluation.',
      level4: 'AAP recommends universal M-CHAT-R screening at 18 and 24 months. Two-stage algorithm (screen then follow-up) has high specificity. Low-risk score: 0-2, medium: 3-7, high: 8-20 on initial screen.',
      level5: 'M-CHAT-R/F reduces false positive rate from 94% to 54% vs M-CHAT. Even with follow-up, 50% of positive screens are false positives. Earlier screening (<16mo) has poor predictive validity.',
    },
    whenToUse: [
      'Universal screening at 18 and 24 months',
      'When autism concern is raised at any age',
      'Siblings of children with ASD (high-risk)',
    ],
    limitations: [
      'Only validated for 16-30 months',
      'High false positive rate',
      'Screening, not diagnostic',
    ],
  };

  const edinburgh: ScreeningTool = {
    id: 'epds',
    name: 'Edinburgh Postnatal Depression Scale',
    abbreviation: 'EPDS',
    targetAges: [
      { minMonths: 0, maxMonths: 12, label: 'Perinatal period' },
    ],
    domains: ['social-emotional'],
    administrationTime: '5 minutes',
    sensitivity: 0.86,
    specificity: 0.78,
    description: 'Maternal depression screening to support infant development',
    explanations: {
      level1: 'This questionnaire asks about how you\'re feeling. We know that parent wellbeing affects baby wellbeing, so we want to make sure you\'re getting support if you need it.',
      level2: 'The Edinburgh scale screens for postpartum depression, which affects about 15% of mothers. Untreated maternal depression impacts infant development, so screening and treatment are important for the whole family.',
      level3: 'EPDS is a 10-item screening tool for perinatal depression. Score ≥10 indicates possible depression; ≥13 suggests high probability. Positive screens require clinical evaluation and support.',
      level4: 'AAP recommends maternal depression screening at 1, 2, 4, and 6 month well-child visits. Validated in multiple languages. Question 10 assesses self-harm thoughts - positive requires immediate assessment.',
      level5: 'Maternal depression affects 10-20% of postpartum women and is associated with adverse child cognitive and behavioral outcomes. EPDS is cost-effective screening. Treatment improves maternal and child outcomes.',
    },
    whenToUse: [
      'Postpartum well-child visits (1, 2, 4, 6 months)',
      'Risk factors for perinatal depression',
      'Concerns about parent-infant interaction',
    ],
    limitations: [
      'Screening for mothers only',
      'Self-report may underestimate',
      'Requires clinical follow-up',
    ],
  };

  screeningTools.set('asq-3', asq3);
  screeningTools.set('mchat-r', mchatr);
  screeningTools.set('epds', edinburgh);
}

// Initialize all data
initializeMilestones();
initializeTannerStages();
initializeGrowthCharts();
initializeScreeningTools();

// ============================================
// API FUNCTIONS
// ============================================

export function getMilestone(id: string): DevelopmentalMilestone | undefined {
  return milestones.get(id);
}

export function getAllMilestones(): DevelopmentalMilestone[] {
  return Array.from(milestones.values());
}

export function getMilestonesByDomain(domain: DevelopmentalDomain): DevelopmentalMilestone[] {
  return Array.from(milestones.values()).filter(m => m.domain === domain);
}

export function getMilestonesByAge(ageMonths: number): DevelopmentalMilestone[] {
  return Array.from(milestones.values()).filter(
    m => Math.abs(m.ageMonths - ageMonths) <= m.ageTolerance
  );
}

export function getTannerStage(sex: 'male' | 'female', category: string, stage: number): TannerStage | undefined {
  return tannerStages.get(`${sex}-${category}-${stage}`);
}

export function getAllTannerStages(sex: 'male' | 'female'): TannerStage[] {
  return Array.from(tannerStages.values()).filter(s => s.sex === sex);
}

export function getGrowthChart(id: string): GrowthChartInfo | undefined {
  return growthCharts.get(id);
}

export function getAllGrowthCharts(): GrowthChartInfo[] {
  return Array.from(growthCharts.values());
}

export function getScreeningTool(id: string): ScreeningTool | undefined {
  return screeningTools.get(id);
}

export function getAllScreeningTools(): ScreeningTool[] {
  return Array.from(screeningTools.values());
}

export function getRedFlagsForAge(ageMonths: number): DevelopmentalRedFlag[] {
  return DEVELOPMENTAL_RED_FLAGS.filter(r => r.ageMonths <= ageMonths);
}

export function getMilestoneExplanation(
  milestone: DevelopmentalMilestone,
  level: 1 | 2 | 3 | 4 | 5
): string {
  return milestone.explanations[`level${level}` as keyof PediatricContent] || milestone.explanations.level1;
}
