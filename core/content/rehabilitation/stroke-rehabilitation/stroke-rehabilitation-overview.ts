/**
 * Stroke Rehabilitation Overview - Comprehensive Educational Content
 *
 * Covers the fundamental principles of stroke rehabilitation including
 * phases of recovery, interdisciplinary team approach, and evidence-based interventions.
 */

import { EducationalContent } from '../../types';

export const strokeRehabilitationOverview: EducationalContent = {
  id: 'rehab-stroke-rehabilitation-overview',
  type: 'concept',
  name: 'Stroke Rehabilitation Overview',
  alternateNames: ['Post-Stroke Recovery', 'Stroke Recovery Program'],

  levels: {
    1: {
      level: 1,
      summary: 'After a stroke, rehabilitation helps your brain and body learn to work together again through special exercises and therapy.',
      explanation: `A stroke happens when part of your brain doesn't get enough blood. This can make it hard to move, talk, or think clearly. Rehabilitation (rehab) is like going to school for your brain and body to learn how to do things again.

**Why do you need rehab after a stroke?**
- Your brain needs to learn new ways to control your body
- Your muscles may be weak and need to get stronger
- You might need to learn how to do everyday tasks in a new way

**What happens in stroke rehab?**
1. **Physical therapy**: Helps you move and walk better
2. **Occupational therapy**: Helps you do daily activities like getting dressed
3. **Speech therapy**: Helps if you have trouble talking or swallowing

**Who helps you?**
A team of healthcare workers including doctors, nurses, and therapists all work together to help you get better.

**Remember**: The brain can heal and learn new things! With practice and patience, many stroke survivors improve a lot.`,
      keyTerms: [
        { term: 'stroke', definition: 'When part of the brain does not get enough blood and stops working properly' },
        { term: 'rehabilitation', definition: 'Special treatment to help you get better after an illness or injury' },
        { term: 'therapy', definition: 'Treatment that helps your body or mind heal' },
      ],
      analogies: [
        'Stroke rehab is like teaching your brain to take a different road when the usual path is blocked.',
        'Recovery after a stroke is like learning to ride a bike again - it takes practice and patience.',
      ],
      examples: [
        'A person who had a stroke might practice picking up small objects to help their hand work better.',
        'Someone learning to walk again might use parallel bars for support during physical therapy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Stroke rehabilitation is a comprehensive program that uses physical, occupational, and speech therapy to help patients regain lost functions and learn adaptive strategies.',
      explanation: `Stroke rehabilitation is a structured program designed to help stroke survivors recover as much function as possible and adapt to any permanent changes.

**Phases of Stroke Recovery:**

**1. Acute Phase (First Few Days)**
- Medical stabilization is the priority
- Early mobilization when safe
- Prevention of complications

**2. Subacute Phase (Weeks to Months)**
- Intensive rehabilitation begins
- Most rapid recovery typically occurs
- Focus on relearning skills

**3. Chronic Phase (Months to Years)**
- Continued improvement possible
- Focus on maintaining gains
- Community reintegration

**The Rehabilitation Team:**
- **Physiatrist**: Doctor specializing in rehabilitation medicine
- **Physical therapist**: Focuses on movement and mobility
- **Occupational therapist**: Helps with daily living activities
- **Speech-language pathologist**: Addresses communication and swallowing
- **Neuropsychologist**: Evaluates and treats cognitive changes
- **Social worker**: Helps with discharge planning and resources
- **Rehabilitation nurse**: Provides medical care and patient education

**Key Principles:**
- Start rehabilitation as early as safely possible
- Intensity matters - more practice leads to better outcomes
- Task-specific training is most effective
- Family involvement improves results

**Where Does Rehab Happen?**
- Inpatient rehabilitation facility (IRF)
- Skilled nursing facility (SNF)
- Home health therapy
- Outpatient rehabilitation`,
      keyTerms: [
        { term: 'physiatrist', definition: 'A doctor who specializes in rehabilitation medicine', pronunciation: 'fih-ZY-uh-trist' },
        { term: 'neuroplasticity', definition: 'The brain\'s ability to form new connections and reorganize itself' },
        { term: 'task-specific training', definition: 'Practicing the exact activities you want to improve' },
        { term: 'activities of daily living (ADLs)', definition: 'Basic self-care tasks like bathing, dressing, and eating' },
      ],
      analogies: [
        'Neuroplasticity is like the brain building new highways when old roads are damaged.',
        'The rehabilitation team is like a pit crew - each member has a specialized role working toward the same goal.',
      ],
    },
    3: {
      level: 3,
      summary: 'Stroke rehabilitation leverages neuroplasticity through intensive, task-specific interventions delivered by an interdisciplinary team, with timing, intensity, and approach tailored to stroke type, location, and individual patient factors.',
      explanation: `## Neurobiological Basis of Stroke Recovery

**Mechanisms of Recovery:**
- **Diaschisis resolution**: Recovery of function in undamaged but connected brain regions
- **Neural reorganization**: Cortical remapping and recruitment of alternate pathways
- **Synaptic plasticity**: Strengthening of existing connections and formation of new synapses
- **Axonal sprouting**: Growth of new neural projections

**Time-Sensitive Recovery Windows:**
- First 3 months: Period of enhanced neuroplasticity
- Proportional recovery rule: ~70% of potential recovery occurs early
- Continued gains possible beyond 6 months with intensive therapy

## Assessment Tools

**Functional Independence Measure (FIM):**
- 18-item scale measuring disability
- Motor and cognitive subscales
- Scores range from 18 to 126

**NIH Stroke Scale (NIHSS):**
- 11-item neurological examination
- Quantifies stroke severity
- Used for treatment decisions and prognosis

**Modified Rankin Scale (mRS):**
- Global disability outcome measure
- Scores 0-6 (no symptoms to death)
- Standard endpoint in stroke trials

## Rehabilitation Settings

| Setting | Criteria | Intensity |
|---------|----------|-----------|
| Acute Inpatient Rehab | Can tolerate 3+ hours therapy/day | High |
| Skilled Nursing Facility | Lower tolerance, complex medical needs | Moderate |
| Home Health | Homebound status | Variable |
| Outpatient | Community dwelling, independent mobility | Variable |

## Evidence-Based Interventions

**Motor Recovery:**
- Constraint-induced movement therapy (CIMT)
- Task-oriented training
- Body-weight supported treadmill training
- Robotics-assisted therapy
- Virtual reality applications

**Spasticity Management:**
- Stretching and positioning
- Splinting
- Botulinum toxin injections
- Oral medications (baclofen, tizanidine)
- Intrathecal baclofen pump

**Cognitive Rehabilitation:**
- Attention training
- Memory strategies
- Executive function training
- Cognitive-communication therapy`,
      keyTerms: [
        { term: 'diaschisis', definition: 'Temporary dysfunction in brain areas connected to but remote from the stroke lesion', pronunciation: 'dy-AS-kih-sis' },
        { term: 'constraint-induced movement therapy', definition: 'Therapy that restricts the unaffected limb to force use of the affected side' },
        { term: 'FIM score', definition: 'Functional Independence Measure - standardized assessment of disability level' },
        { term: 'spasticity', definition: 'Increased muscle tone causing stiffness and resistance to movement' },
      ],
      clinicalNotes: 'Earlier initiation of rehabilitation (within 24-48 hours when medically stable) is associated with better outcomes. The AVERT trial established safety of very early mobilization, though optimal timing and intensity continue to be studied.',
    },
    4: {
      level: 4,
      summary: 'Contemporary stroke rehabilitation integrates neuroimaging biomarkers, predictive algorithms, and precision rehabilitation approaches to optimize recovery trajectories through targeted, dose-optimized interventions addressing specific neural substrates.',
      explanation: `## Predictive Models and Biomarkers

**Structural Imaging Biomarkers:**
- Corticospinal tract integrity (diffusion tensor imaging)
- Lesion overlap with motor pathways
- White matter hyperintensity burden
- Brain atrophy patterns

**Functional Biomarkers:**
- Motor evoked potentials (MEPs) to transcranial magnetic stimulation
- Presence/absence of MEP predicts upper extremity recovery
- fMRI activation patterns during motor tasks
- Electroencephalography connectivity measures

**PREP Algorithm (Predicting REcovery Potential):**
1. SAFE score (Shoulder Abduction, Finger Extension) at 72 hours
2. If SAFE ≥5: Predict "excellent" recovery
3. If SAFE <5: Obtain TMS-MEP
4. MEP+ predicts "good" recovery
5. MEP- plus age <80 predicts "limited" recovery
6. MEP- plus age ≥80 predicts "poor" recovery

## Dose-Response Relationships

**Key Parameters:**
- Total therapy time
- Repetitions of movement
- Session frequency
- Duration of therapy period

**Evidence on Dosing:**
- EXCITE trial: 3 hours/day CIMT × 10 days showed efficacy
- Higher repetition counts (300-400/session) associated with better outcomes
- Scheduled therapy more effective than equivalent ad lib practice

## Advanced Interventions

**Neuromodulation:**
- Transcranial direct current stimulation (tDCS)
- Repetitive transcranial magnetic stimulation (rTMS)
- Paired associative stimulation
- Peripheral nerve stimulation

**Brain-Computer Interface (BCI):**
- EEG-based motor imagery detection
- Contingent feedback to affected limb
- Promotes motor cortex reorganization

**Pharmacological Augmentation:**
- Selective serotonin reuptake inhibitors (FLAME trial)
- Amphetamines (mixed evidence)
- Cerebrolysin (under investigation)

## Specific Syndrome Management

**Hemispatial Neglect:**
- Prism adaptation therapy
- Visual scanning training
- Limb activation approaches
- Eye patching

**Aphasia:**
- Intensive language-action therapy
- Constraint-induced language therapy
- Melodic intonation therapy
- Script training

**Apraxia:**
- Gesture training
- Strategy training (verbal mediation)
- Direct training of ADL tasks

## Rehabilitation Intensity Studies

| Trial | Intervention | Finding |
|-------|--------------|---------|
| EXCITE | CIMT vs usual care | CIMT superior at 12 months |
| ICARE | Structured Accelerated Skill Training | No difference from dose-matched control |
| ATTEND | Task-specific intervention by family | No significant improvement |
| AVERT | Very early mobilization | Earlier out of bed safe; higher doses may be harmful early |`,
      keyTerms: [
        { term: 'PREP algorithm', definition: 'Clinical prediction tool using shoulder abduction, finger extension, and TMS to predict upper limb recovery' },
        { term: 'motor evoked potential', definition: 'Electrical response in muscle to transcranial magnetic stimulation of motor cortex' },
        { term: 'prism adaptation', definition: 'Treatment for neglect using prism glasses that shift the visual field' },
        { term: 'hemispatial neglect', definition: 'Failure to attend to or respond to stimuli on one side of space' },
      ],
      clinicalNotes: 'Absence of MEP in the first week post-stroke is a strong predictor of poor upper limb recovery. However, ~10% of patients without initial MEP still achieve functional use, so predictions should inform but not limit therapy goals.',
    },
    5: {
      level: 5,
      summary: 'Stroke rehabilitation research is advancing toward precision rehabilitation paradigms incorporating multimodal biomarker phenotyping, adaptive interventions responsive to recovery trajectories, and combination approaches targeting multiple neurobiological mechanisms.',
      explanation: `## Precision Rehabilitation Framework

**Individual Phenotyping:**
- Genetic polymorphisms affecting recovery (BDNF Val66Met, APOE)
- Inflammatory biomarker profiles
- Prestroke cognitive reserve
- Structural and functional connectome analysis

**Biomarker-Stratified Clinical Trials:**
- PREP2 validation studies
- MRI-based patient selection for upper limb trials
- CST integrity as inclusion criterion

## Mechanisms of Neural Repair

**Cellular Level:**
- Oligodendrogenesis and remyelination
- Neurogenesis in subventricular zone
- Angiogenesis and neurovascular unit remodeling
- Glial scar modulation

**Network Level:**
- Interhemispheric inhibition changes
- Ipsilesional M1 reorganization
- Contralesional compensation
- Cerebellar-cortical network adaptations

**Enhancing Plasticity:**
- Critical period reopening (HDAC inhibitors, JAK/STAT modulators)
- Growth factor administration (BDNF, IGF-1)
- Stem cell therapies
- Exosome-based approaches

## Emerging Technologies

**Closed-Loop Systems:**
- BCI with real-time feedback
- EMG-triggered electrical stimulation
- EEG-based adaptive difficulty adjustment

**Advanced Robotics:**
- Soft exoskeletons for community use
- Haptic feedback systems
- AI-driven adaptive algorithms

**Neuroimaging-Guided Therapy:**
- Neuronavigated TMS targeting
- fMRI neurofeedback
- Lesion-network mapping for target selection

## Comparative Effectiveness Questions

**Unresolved Issues:**
- Optimal timing for intensive rehabilitation
- CIMT vs high-dose task-specific training
- Individual vs group therapy formats
- Technology-assisted vs traditional therapy cost-effectiveness

**Implementation Gaps:**
- Evidence-practice lag in stroke rehabilitation
- Variability in therapy content and dosing
- Access disparities to specialized rehabilitation
- Sustaining gains after discharge

## Novel Trial Designs

**Adaptive Platform Trials:**
- Multiple interventions tested simultaneously
- Biomarker-stratified randomization
- Response-adaptive allocation

**N-of-1 Trials:**
- Individual treatment effects
- Multiple crossover periods
- Personalized medicine application

**Dose-Finding Studies:**
- Phase I/II dose-response designs
- Identification of minimum effective dose
- Ceiling effects and plateau determination

## Health Services Research

**Value-Based Rehabilitation:**
- Bundled payment models
- Quality metrics development
- Readmission reduction strategies
- Transition care optimization

**Disparities Research:**
- Geographic access to IRFs
- Racial/ethnic differences in rehabilitation utilization
- Socioeconomic factors in recovery
- Rural stroke rehabilitation models

## Future Directions

**Combination Therapies:**
- rTMS + intensive motor training
- tDCS + cognitive rehabilitation
- Pharmacological priming + behavioral therapy

**Remote and Digital Health:**
- Telerehabilitation efficacy and implementation
- Sensor-based home monitoring
- Gamification and engagement optimization
- Caregiver-delivered therapy models

**Chronic Stroke:**
- Breaking the "plateau" paradigm
- Intensive chronic stroke rehabilitation programs
- Community-based recovery support`,
      keyTerms: [
        { term: 'BDNF Val66Met', definition: 'Common genetic polymorphism in brain-derived neurotrophic factor affecting neuroplasticity and recovery' },
        { term: 'connectome', definition: 'Comprehensive map of neural connections in the brain' },
        { term: 'closed-loop system', definition: 'Technology that measures brain/muscle activity and provides real-time contingent feedback or stimulation' },
        { term: 'adaptive platform trial', definition: 'Trial design testing multiple interventions with biomarker stratification and response-adaptive randomization' },
      ],
      clinicalNotes: 'The BDNF Val66Met polymorphism (present in ~30% of Caucasians, ~50% of Asians) is associated with reduced activity-dependent BDNF secretion and may moderate response to motor rehabilitation. Screening for this polymorphism is not yet standard but may inform intensity of intervention in future precision rehabilitation paradigms.',
    },
  },

  media: [
    {
      id: 'stroke-rehab-phases',
      type: 'diagram',
      filename: 'stroke-rehab-phases.svg',
      title: 'Phases of Stroke Rehabilitation',
      description: 'Timeline showing acute, subacute, and chronic phases of stroke recovery',
    },
    {
      id: 'rehab-team-roles',
      type: 'diagram',
      filename: 'rehab-team-roles.svg',
      title: 'Interdisciplinary Rehabilitation Team',
      description: 'Diagram showing roles of different team members in stroke rehabilitation',
    },
  ],

  citations: [
    {
      id: 'winstein-stroke-rehab-guidelines',
      type: 'article',
      title: 'Guidelines for Adult Stroke Rehabilitation and Recovery',
      authors: ['Winstein, C.J.', 'et al.'],
      source: 'Stroke',
      url: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000098',
    },
    {
      id: 'stinear-prep-algorithm',
      type: 'article',
      title: 'PREP2 Algorithm for Predicting Upper Limb Function After Stroke',
      authors: ['Stinear, C.M.', 'et al.'],
      source: 'Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-acute-stroke-rehab', targetType: 'topic', relationship: 'child', label: 'Acute Stroke Rehabilitation' },
    { targetId: 'rehab-motor-recovery-stroke', targetType: 'topic', relationship: 'child', label: 'Motor Recovery After Stroke' },
    { targetId: 'rehab-physical-therapy-principles', targetType: 'topic', relationship: 'related', label: 'Physical Therapy Principles' },
  ],

  tags: {
    systems: ['neurological', 'musculoskeletal'],
    topics: ['rehabilitation', 'stroke', 'neuroplasticity'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default strokeRehabilitationOverview;
