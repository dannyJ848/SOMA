/**
 * Specific Phobias
 *
 * Comprehensive educational content on specific phobias,
 * their types, neurobiology, and treatment.
 */

import { EducationalContent } from '../../../types';

export const specificPhobiasContent: EducationalContent = {
  id: 'psychiatry-specific-phobias',
  type: 'condition',
  name: 'Specific Phobias',
  alternateNames: ['Simple Phobias', 'Isolated Phobias'],

  levels: {
    1: {
      level: 1,
      summary: 'A specific phobia is an intense, irrational fear of a specific thing or situation that leads to avoidance, even though the person knows the fear is excessive.',
      explanation: `A phobia is more than just being scared of something. It's an intense fear that seems way too big for the actual danger involved.

**Common Types of Phobias:**

- **Animal phobias**: Spiders, snakes, dogs, insects
- **Natural environment phobias**: Heights, water, storms, darkness
- **Blood-injection-injury phobias**: Blood, needles, medical procedures
- **Situational phobias**: Flying, elevators, enclosed spaces, driving
- **Other phobias**: Choking, vomiting, loud sounds, clowns

**What Happens with a Phobia:**

- Immediate, intense fear when facing the feared thing
- Physical reactions: heart racing, sweating, trembling
- Overwhelming need to escape or avoid
- The fear is out of proportion to the actual danger
- The person often knows the fear is excessive, but can't control it

**How Phobias Affect Life:**

- Avoiding situations (not going to parks because of dogs)
- Limiting activities (not traveling because of flying fears)
- Distress when avoidance isn't possible
- Embarrassment about the fear

**The Good News:**

- Phobias are the most treatable of all anxiety disorders
- Exposure therapy works very well - facing the fear gradually
- Most people improve significantly with treatment
- You don't have to live with limiting fears

**How Treatment Works:**

The main treatment is called exposure therapy. You face your fear in small, manageable steps:
1. Learn about your phobia
2. Create a fear ladder from least to most scary
3. Practice each step until it gets easier
4. Work your way up to facing the actual fear

This works because your brain learns that the feared thing is actually safe.`,
      keyTerms: [
        { term: 'phobia', definition: 'An intense, irrational fear of something specific that leads to avoidance' },
        { term: 'exposure therapy', definition: 'A treatment where you gradually face your fears in a safe way until they decrease' },
        { term: 'avoidance', definition: 'Staying away from things that make you anxious, which can make phobias worse' },
      ],
      analogies: [
        'A phobia is like a smoke alarm that goes off when you\'re just making toast - it\'s a false alarm that feels very real.',
        'Exposure therapy is like learning to swim by starting in the shallow end - you build up gradually.',
      ],
      examples: [
        'Someone with a spider phobia might refuse to go in the basement or garage.',
        'A person with a needle phobia might avoid needed medical care.',
        'Someone afraid of heights might take stairs instead of elevators in tall buildings.',
      ],
    },
    2: {
      level: 2,
      summary: 'Specific phobias are marked by excessive fear and avoidance of particular objects or situations, causing significant distress or impairment, and are highly treatable with exposure-based therapies.',
      explanation: `**DSM-5 Criteria for Specific Phobia:**

- Marked fear or anxiety about a specific object or situation
- The phobic object almost always provokes immediate fear
- The object/situation is actively avoided or endured with intense distress
- The fear is out of proportion to actual danger
- Persistent (typically 6+ months)
- Causes significant distress or impairment
- Not better explained by another mental disorder

**Types of Specific Phobias:**

*Animal Type:*
- Spiders (arachnophobia)
- Snakes (ophidiophobia)
- Dogs, insects, mice, birds
- Usually begins in childhood
- Disgust component common

*Natural Environment Type:*
- Heights (acrophobia)
- Water, storms, darkness
- Usually begins in childhood

*Blood-Injection-Injury (BII) Type:*
- Blood, needles, injuries, medical procedures
- Unique physiology: Initial spike then vagal response (fainting)
- Strong genetic component
- May require modified treatment

*Situational Type:*
- Flying (aviophobia)
- Elevators, enclosed spaces
- Driving, tunnels, bridges
- Later onset (typically 20s)
- More similar to panic disorder

*Other Type:*
- Choking, vomiting (emetophobia)
- Loud sounds
- Costumed characters, clowns
- Illness (nosophobia)

**Epidemiology:**
- Most common anxiety disorder (~7-9% prevalence)
- Women more affected (2:1)
- Usually begins in childhood (except situational)
- Often persist without treatment
- Highly comorbid with other anxiety disorders

**Causes:**

*Classical Conditioning:*
- Direct traumatic experience
- Not always present (many have no memory of learning)

*Observational Learning:*
- Watching others react fearfully
- Parental modeling

*Information Transmission:*
- Hearing about dangers
- Media coverage

*Preparedness Theory:*
- Evolutionary predisposition to fear certain stimuli
- Explains why phobias of snakes/spiders are more common than cars

**Treatment:**

*Exposure Therapy:*
- Gold standard
- Systematic desensitization or flooding
- In vivo (real-life) exposure most effective
- Virtual reality increasingly used
- Single-session treatments effective for many

*Cognitive Restructuring:*
- Challenge catastrophic thoughts
- Often combined with exposure

*Medications:*
- Generally not first-line
- Benzodiazepines for acute situations (flying)
- D-cycloserine may enhance exposure

*Blood-Injection-Injury Phobia:*
- Applied tension technique (to prevent fainting)
- Exposure while maintaining blood pressure`,
      keyTerms: [
        { term: 'preparedness theory', definition: 'Evolutionary theory that humans are predisposed to fear certain ancestral dangers' },
        { term: 'systematic desensitization', definition: 'Gradual exposure to feared stimuli while practicing relaxation' },
        { term: 'applied tension', definition: 'Technique for BII phobia where muscle tension prevents fainting during exposure' },
        { term: 'vasovagal response', definition: 'Drop in heart rate and blood pressure causing fainting, common in BII phobia' },
      ],
    },
    3: {
      level: 3,
      summary: 'Specific phobias involve fear circuit dysregulation with amygdala hyperreactivity and deficient prefrontal inhibition, highly responsive to exposure-based extinction learning which produces lasting neurobiological changes.',
      explanation: `**Neurobiological Basis:**

*Fear Circuit:*
- Amygdala: Threat detection, fear response initiation
- Prefrontal cortex: Fear regulation, extinction
- Hippocampus: Context and memory
- Insula: Interoception, disgust (animal phobias)
- Periaqueductal gray: Defensive behaviors

*Phobia Neurobiology:*
- Amygdala hyperreactivity to phobic stimuli
- Reduced prefrontal inhibitory control
- Altered connectivity in fear network
- Automatic, unconscious processing

**Neuroimaging Findings:**

*Functional:*
- Increased amygdala activation to phobic stimuli
- Increased insula activation (especially animal phobias)
- Decreased ventromedial PFC activation
- Changes visible even with masked stimuli

*After Treatment:*
- Reduced amygdala reactivity
- Increased prefrontal activity
- Normalized connectivity
- Demonstrates neuroplasticity

**Conditioning and Learning:**

*Fear Acquisition:*
- Classical conditioning (US → UR becomes CS → CR)
- Single-trial learning possible
- Not all phobias have clear conditioning history

*Preparedness:*
- Phylogenetically prepared fears
- Easier to condition, harder to extinguish
- Snakes, spiders, heights evolutionarily relevant
- Non-associative pathway (innate fears)

*Extinction:*
- Does not erase fear memory
- Creates new inhibitory memory
- Context-dependent
- Involves prefrontal-amygdala circuit

**Blood-Injection-Injury Phobia:**

Unique biphasic response:
1. Initial sympathetic activation (fear)
2. Followed by parasympathetic surge (vasovagal)
3. Hypotension, bradycardia, syncope

- Highly heritable (60%)
- May be evolutionary adaptation (blood loss)
- Requires modified treatment approach

**Treatment Details:**

*Exposure Therapy:*
- Graduated (fear hierarchy) or intensive
- In vivo superior to imaginal
- Therapist-assisted better than self-directed
- Virtual reality effective alternative

*Single-Session Treatment:*
- 2-3 hour intensive session
- High efficacy for specific phobias
- Cost-effective
- Maintained at follow-up

*Exposure Mechanisms:*
- Habituation (within and between sessions)
- Inhibitory learning (violation of expectancy)
- Self-efficacy enhancement
- Extinction recall

*Optimizing Exposure:*
- Variability in stimuli and contexts
- Occasional reinforced extinction
- Retrieval cues
- Sleep consolidation

*D-Cycloserine Augmentation:*
- Partial NMDA agonist
- Enhances extinction consolidation
- Dose before exposure session
- Meta-analyses show modest effects

*Applied Tension (BII Phobia):*
- Tense large muscle groups
- Raises blood pressure
- Practice before exposure
- Prevents vasovagal syncope
- Highly effective

**Pharmacotherapy:**
- Not first-line (exposure superior)
- Benzodiazepines: Acute use (flight, procedure)
- May interfere with extinction learning
- Beta-blockers: Limited evidence (performance anxiety)`,
      keyTerms: [
        { term: 'extinction', definition: 'Learned reduction of conditioned fear through repeated exposure without negative outcome' },
        { term: 'inhibitory learning', definition: 'Formation of new safety memory that inhibits original fear memory' },
        { term: 'single-session treatment', definition: 'Intensive one-session exposure treatment effective for specific phobias' },
        { term: 'expectancy violation', definition: 'When feared outcome does not occur, key mechanism in exposure therapy' },
      ],
    },
    4: {
      level: 4,
      summary: 'Specific phobia pathophysiology involves amygdala-centered fear circuitry with genetic contributions to preparedness, treatment through exposure induces extinction learning with demonstrable neural changes, and augmentation strategies enhance consolidation.',
      explanation: `**Genetic and Developmental Factors:**

*Heritability:*
- Overall: 30-40%
- BII type: ~60% (highest)
- Subtypes may have different genetic architecture

*Gene-Environment:*
- Genetic vulnerability + environmental trigger
- 5-HTTLPR associations (inconsistent)
- COMT (extinction learning)

*Developmental Pathway:*
- Many emerge in childhood (4-10 years)
- Situational phobias: later onset (20s)
- Non-associative pathway: Some fears appear without learning
- Critical periods for fear learning

**Neural Mechanisms:**

*Fear Acquisition:*
- Amygdala central nucleus: Fear output
- Lateral amygdala: Sensory input, association
- Long-term potentiation (LTP)
- Protein synthesis dependent

*Fear Expression:*
- Central amygdala → PAG: Freezing
- Central amygdala → Hypothalamus: Autonomic
- Central amygdala → PBN: Respiration

*Extinction:*
- Infralimbic cortex → Amygdala inhibition
- Intercalated cells mediate inhibition
- New memory formation (not erasure)
- NMDA-dependent in amygdala

*Extinction Failure in Phobias:*
- Weak prefrontal inhibition
- Robust fear memory
- Context specificity (renewal)
- Stress impairs extinction

**Preparedness and Evolution:**

*Evidence:*
- Fear more easily conditioned to evolutionary threats
- Faster acquisition, slower extinction
- Cross-cultural consistency
- Present in other primates

*Neural Basis:*
- Amygdala responds to evolutionary threats even without awareness
- Superior colliculus → Pulvinar → Amygdala (fast pathway)
- Snakes, spiders processed preferentially

*Modern Implications:*
- Explains distribution of phobias
- Cars/guns less common despite actual danger
- Treatment may need to overcome evolutionary bias

**BII Phobia Mechanisms:**

*Diphasic Response:*
1. Sympathetic: Heart rate increase, BP increase
2. Parasympathetic: Vagal surge, bradycardia, hypotension
3. Cerebral hypoperfusion → Syncope

*Possible Functions:*
- Blood loss minimization (evolutionary)
- Death feigning
- Highly heritable pattern

*Applied Tension:*
- Isometric muscle contraction (arms, legs, torso)
- Increases venous return and BP
- Counters vagal effect
- Teach before exposure

**Treatment Optimization:**

*Enhancing Extinction:*
- Expectancy violation (most feared outcome doesn't happen)
- Deepened extinction (compound stimuli)
- Variability (multiple contexts, stimuli)
- Retrieval cues (bridging therapy to real world)
- Sleep after exposure (consolidation)

*D-Cycloserine:*
- NMDA partial agonist at glycine site
- Enhances LTP in amygdala
- Given 1 hour before exposure
- 50mg typical dose
- Meta-analysis: Small-moderate effect
- May be more effective for severe cases

*Other Augmentation:*
- Propranolol after reactivation (reconsolidation interference)
- Cortisol (may enhance extinction)
- Yohimbine (arousal, enhances extinction)
- Exercise before exposure

**Specific Phobia Subtypes - Treatment Considerations:**

*Animal:*
- Standard exposure effective
- Single-session often sufficient
- In vivo preferred

*Heights:*
- VR exposure well-validated
- In vivo with safety (not dangerous)
- Address vestibular symptoms

*Flying:*
- VR effective
- Cognitive component important
- May need real flight exposure

*BII:*
- Applied tension essential
- Modified exposure protocol
- Start with looking at images, progress to videos, then real`,
      keyTerms: [
        { term: 'intercalated cells', definition: 'GABAergic neurons in amygdala that mediate extinction by inhibiting fear output' },
        { term: 'infralimbic cortex', definition: 'Rodent homolog of vmPFC, critical for extinction expression' },
        { term: 'deepened extinction', definition: 'Extinction to compound stimuli to enhance generalization' },
        { term: 'reconsolidation', definition: 'Process where reactivated memories become labile and can be modified' },
      ],
      clinicalNotes: 'Exposure is clearly first-line with excellent efficacy. Single-session treatment is cost-effective option. BII phobia requires applied tension. Consider VR for heights, flying. Medication rarely needed. D-cycloserine may help severe cases. Address comorbid disorders.',
    },
    5: {
      level: 5,
      summary: 'Contemporary specific phobia research focuses on optimizing extinction through translational neuroscience, leveraging reconsolidation mechanisms, developing biomarkers for treatment response, and integrating technology-based exposure platforms.',
      explanation: `**Translational Extinction Research:**

*From Rodent to Human:*
- Fear conditioning paradigms validated across species
- Neural circuits homologous
- Pharmacological enhancement translatable
- Challenges: Complexity of human phobias

*Optimizing Extinction:*

Inhibitory Learning Approach:
- Focus on expectancy violation
- Maximize mismatch between expected and actual outcome
- Variability more important than repetition
- Occasional reinforced extinction

Enhancing Consolidation:
- Post-session sleep (REM important)
- Avoid alcohol, benzodiazepines
- Exercise may enhance
- D-cycloserine at optimal timing

Preventing Return of Fear:
- Multiple contexts
- Retrieval cues
- Occasional post-treatment boosters
- Reconsolidation-based approaches

**Reconsolidation:**

*Concept:*
- Retrieved memories become labile
- Window for modification (6 hours)
- Potential to update original fear memory

*Clinical Applications:*
- Brief reactivation + intervention
- Propranolol blocks reconsolidation
- Behavioral interference (extinction during window)
- Could produce more durable effects

*Current Status:*
- Promising but inconsistent results
- Boundary conditions being defined
- Not yet standard clinical practice

**Biomarker Development:**

*Predicting Treatment Response:*
- Pre-treatment amygdala reactivity
- Prefrontal function
- Extinction learning ability
- HRV as autonomic marker

*Neuroimaging:*
- fMRI during symptom provocation
- Connectivity patterns
- Changes with treatment as outcomes

*Genetic:*
- BDNF Val66Met (extinction learning)
- COMT (prefrontal function)
- 5-HTTLPR (response to exposure)
- Not yet clinically useful

**Technology Integration:**

*Virtual Reality:*
- Well-validated for specific phobias
- Heights, flying, spiders, public speaking
- Increasingly affordable (consumer VR)
- Can create impossible scenarios

*Augmented Reality:*
- Real environment + virtual phobic stimuli
- Emerging applications
- Smartphone-based delivery possible

*Computerized/App-Based:*
- Self-guided exposure programs
- Lower intensity interventions
- Stepped care models

*Biofeedback:*
- Real-time physiology display
- HRV, skin conductance
- May enhance interoceptive exposure

**Novel Therapeutic Approaches:**

*Pharmacological Augmentation:*
- D-cycloserine (established, modest effect)
- MDMA (increases fear extinction in animals, human studies emerging)
- Ketamine (may enhance extinction, early research)
- Cannabinoids (endocannabinoid system modulates extinction)

*Brain Stimulation:*
- tDCS to vmPFC (enhances extinction)
- TMS studies ongoing
- Potential for treatment augmentation

*Attention Modification:*
- Attention bias modification training
- Mixed results for phobias specifically
- May be useful adjunct

**Specific Subtypes - Advanced:**

*Emetophobia (Vomiting Phobia):*
- Understudied
- Complex avoidance patterns
- Interoceptive component important
- CBT effective but challenging

*Dental/Medical Phobia:*
- Healthcare avoidance consequences
- Collaborative care model
- Sedation vs. exposure debate

*Natural Disaster Phobias:*
- May increase with climate change
- Realistic component complicates treatment
- Balance acceptance and avoidance reduction

**Future Directions:**

1. Precision exposure therapy (biomarker-guided intensity)
2. Reconsolidation-based treatments
3. Combination of VR and pharmacological augmentation
4. Digital delivery for increased access
5. Prevention programs for children
6. Understanding treatment resistance
7. Long-term follow-up studies
8. Mechanisms of sudden gains`,
      keyTerms: [
        { term: 'inhibitory learning model', definition: 'Theory that extinction creates new memory that inhibits, rather than erases, fear memory' },
        { term: 'BDNF Val66Met', definition: 'Genetic polymorphism affecting brain plasticity and extinction learning' },
        { term: 'sudden gains', definition: 'Large, rapid improvements during treatment that predict good outcome' },
        { term: 'boundary conditions', definition: 'Parameters that determine when a phenomenon occurs or doesn\'t occur' },
      ],
      clinicalNotes: `Current clinical practice:
- Exposure therapy is gold standard (80%+ response)
- Single-session intensive treatment cost-effective
- VR validated alternative to in vivo
- Applied tension required for BII type
- Medications rarely needed, may interfere with extinction

Emerging practices:
- Inhibitory learning-based exposure protocols
- VR increasingly accessible
- D-cycloserine for severe/resistant cases
- App-based programs for mild cases

Research priorities:
- Optimizing extinction durability
- Reconsolidation-based approaches
- Predictors of treatment response
- Technology integration
- Prevention in high-risk children`,
    },
  },

  media: [
    {
      id: 'phobia-types-diagram',
      type: 'diagram',
      filename: 'phobia_types.svg',
      title: 'Types of Specific Phobias',
      description: 'Classification of specific phobias by subtype',
    },
    {
      id: 'fear-hierarchy-diagram',
      type: 'diagram',
      filename: 'fear_hierarchy.svg',
      title: 'Fear Hierarchy for Exposure Therapy',
      description: 'Example of graduated exposure steps',
    },
  ],

  citations: [
    {
      id: 'dsm-5-phobias',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Anxiety Disorders',
    },
    {
      id: 'craske-exposure',
      type: 'textbook',
      title: 'Exposure Therapy for Anxiety: Principles and Practice',
      authors: ['Abramowitz JS', 'Deacon BJ', 'Whiteside SP'],
      source: 'Guilford Press',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-panic-disorder', targetType: 'condition', relationship: 'related', label: 'Panic Disorder' },
    { targetId: 'psychiatry-social-anxiety-disorder', targetType: 'condition', relationship: 'related', label: 'Social Anxiety Disorder' },
    { targetId: 'psychiatry-anxiolytics', targetType: 'topic', relationship: 'see-also', label: 'Anxiolytics' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'anxiety disorders'],
    keywords: ['phobia', 'fear', 'exposure therapy', 'avoidance', 'anxiety'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default specificPhobiasContent;
