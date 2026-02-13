import { EducationalContent } from '../../types';

export const nonSurgicalManagementContent: EducationalContent = {
  id: 'ortho-patient-non-surgical-management',
  type: 'concept',
  name: 'Non-Surgical Arthritis Management',
  alternateNames: ['Conservative treatment', 'Non-operative management', 'Medical management'],

  levels: {
    1: {
      level: 1,
      summary: 'Most arthritis can be managed without surgery using exercise, weight management, medications, and lifestyle changes. Surgery is only needed when these treatments no longer help.',
      explanation: `You don't need surgery for most arthritis. Many effective treatments can help you feel better and stay active.

**Lifestyle Changes:**
- Stay active - movement is medicine for joints
- Maintain a healthy weight - less pressure on joints
- Protect your joints during activities
- Get enough sleep

**Exercise:**
- Low-impact activities (walking, swimming, biking)
- Strengthening exercises for muscles around joints
- Stretching for flexibility
- Balance exercises to prevent falls

**Medications:**
- Over-the-counter pain relievers
- Anti-inflammatory medications
- Topical creams and gels
- Prescription options if needed

**Other Treatments:**
- Physical therapy
- Hot and cold therapy
- Assistive devices (canes, braces)
- Joint injections when appropriate

**When to Talk to Your Doctor:**
- Pain affecting your daily life
- Trouble sleeping due to pain
- Not responding to home treatments
- Joint swelling that doesn't improve`,
      keyTerms: [
        { term: 'conservative treatment', definition: 'Managing a condition without surgery' },
        { term: 'anti-inflammatory', definition: 'Medication that reduces inflammation and pain' },
        { term: 'physical therapy', definition: 'Exercise and treatment program to improve function' },
      ],
      analogies: [
        'Exercise for arthritis is like oiling a squeaky hinge - keeps things moving smoothly.',
        'Weight loss takes pressure off joints like taking heavy books out of a backpack.',
      ],
      examples: [
        'Swimming is excellent for arthritis because water supports your weight.',
        'Using a cane on the opposite side of a painful hip reduces joint stress by 50%.',
      ],
    },
    2: {
      level: 2,
      summary: 'Non-surgical OA management combines lifestyle modification, exercise therapy, pharmacologic treatment, and adjunctive therapies based on evidence-based guidelines.',
      explanation: `Evidence-based guidelines recommend a stepped approach to OA management.

**Core Treatments (All Patients):**
- Patient education
- Exercise (aerobic + strengthening)
- Weight management if overweight

**Pharmacologic Options:**

*Oral Medications:*
- Acetaminophen: First-line, limited efficacy
- NSAIDs: More effective, cardiovascular/GI risks
- Duloxetine: For chronic pain component
- Opioids: Last resort, limited role

*Topical Treatments:*
- Topical NSAIDs: Effective, fewer side effects
- Capsaicin: Modest benefit
- Lidocaine: Temporary relief

*Injections:*
- Corticosteroids: Short-term relief
- Hyaluronic acid: Variable evidence
- PRP: Emerging option

**Physical Therapy:**
- Individualized exercise program
- Manual therapy
- Modalities (heat, ice, TENS)
- Gait training

**Assistive Devices:**
- Braces (unloader for knee)
- Canes and walkers
- Shoe modifications
- Joint protection

**Lifestyle Modifications:**
- Activity modification (not cessation)
- Ergonomic adjustments
- Sleep optimization
- Stress management`,
      keyTerms: [
        { term: 'unloader brace', definition: 'Knee brace that shifts weight away from damaged compartment' },
        { term: 'TENS', definition: 'Transcutaneous electrical nerve stimulation; pain relief modality' },
        { term: 'topical NSAID', definition: 'Anti-inflammatory medication applied to skin over joint' },
      ],
      analogies: [
        'An unloader brace works like a shock absorber, redirecting force.',
        'Core treatments are like the foundation of a house - everything else builds on them.',
      ],
    },
    3: {
      level: 3,
      summary: 'OA management requires individualized treatment based on disease characteristics, patient factors, and evidence-based guidelines. Multimodal approaches addressing multiple domains optimize outcomes.',
      explanation: `Comprehensive OA management integrates multiple evidence-based interventions.

**Evidence Hierarchy:**

*Strong Evidence:*
- Exercise therapy
- Weight loss (if overweight)
- Oral NSAIDs
- Topical NSAIDs
- IA corticosteroids (short-term)

*Moderate Evidence:*
- Physical therapy
- Walking aids
- Knee braces
- Acetaminophen (limited efficacy)

*Uncertain Evidence:*
- Glucosamine/chondroitin
- Viscosupplementation
- Acupuncture
- Regenerative therapies

**Exercise Prescription:**
- Aerobic: 150 min/week moderate intensity
- Strengthening: 2-3 days/week
- Flexibility: Daily
- Balance: Especially for older adults

**Weight Management:**
- 5% weight loss improves symptoms
- 10% provides additional benefit
- Combined diet and exercise most effective
- Bariatric surgery may be option

**Pharmacologic Considerations:**

*NSAIDs:*
- Cardiovascular risk (all NSAIDs)
- GI risk (non-selective > COX-2)
- Renal considerations
- Shortest duration, lowest dose

*Opioids:*
- Limited efficacy for OA
- High risk profile
- Last resort only
- Short-term crisis use

**Adjunctive Therapies:**
- CBT for chronic pain
- Self-management programs
- Sleep hygiene
- Social support`,
      keyTerms: [
        { term: 'COX-2 inhibitor', definition: 'Selective NSAID with less GI risk but cardiovascular concerns' },
        { term: 'self-management program', definition: 'Structured program teaching patients skills to manage their condition' },
        { term: 'multimodal therapy', definition: 'Using multiple treatment types simultaneously' },
      ],
      clinicalNotes: 'OARSI, ACR, and AAOS guidelines recommend core treatments for all patients. Pharmacologic therapy individualized based on risk factors. Surgery reserved for failed conservative management.',
    },
    4: {
      level: 4,
      summary: 'Non-surgical OA management integrates biomechanical modification, neuromuscular training, and pharmacologic strategies. Patient phenotyping may guide treatment selection.',
      explanation: `Advanced conservative management addresses multiple pathophysiologic mechanisms.

**Biomechanical Interventions:**

*Footwear and Orthotics:*
- Lateral wedge insoles (medial knee OA)
- Variable evidence
- Individual assessment
- Shock-absorbing properties

*Bracing:*
- Unloader braces (unicompartmental OA)
- Mechanism: Reduces adduction moment
- Compliance challenging
- Best for varus deformity

*Gait Modification:*
- Toe-out gait reduces medial load
- Trunk lean strategies
- Training with biofeedback
- Cane use (contralateral)

**Neuromuscular Training:**
- Proprioceptive deficits common
- Balance training
- Perturbation training
- Reduces fall risk

**Injection Therapy Evidence:**

*Corticosteroids:*
- Short-term benefit (4-8 weeks)
- Repeated injections: Cartilage concerns
- Ultrasound guidance improves accuracy
- Optimal interval unclear

*Hyaluronic Acid:*
- Guidelines vary in recommendations
- May benefit some phenotypes
- Multiple formulations
- Placebo effect significant

*PRP and Biologics:*
- Growing evidence base
- Preparation methods vary
- Cost considerations
- Not first-line

**Treatment by Location:**

*Knee:*
- Quadriceps strengthening key
- Bracing option for unicompartmental
- Multiple injection options

*Hip:*
- Hip strengthening
- Gait aids effective
- Fewer injection options

*Hand:*
- Splinting during activities
- Exercise therapy
- Topical treatments preferred`,
      keyTerms: [
        { term: 'adduction moment', definition: 'Force tending to collapse knee into varus; modified by bracing' },
        { term: 'perturbation training', definition: 'Balance exercises using unexpected disturbances' },
        { term: 'phenotype', definition: 'Patient subgroup with distinct characteristics and treatment response' },
      ],
      clinicalNotes: 'Treatment should be individualized based on patient presentation. Inflammatory phenotype may respond better to anti-inflammatory approaches. Biomechanical phenotype may benefit from load modification.',
    },
    5: {
      level: 5,
      summary: 'Contemporary non-surgical OA management integrates precision medicine approaches, emerging biologics, and technology-enabled interventions within value-based care frameworks.',
      explanation: `Expert conservative management requires understanding of current evidence and emerging approaches.

**Precision Medicine Approaches:**

*Phenotype-Directed Treatment:*
- Inflammatory: Anti-inflammatory focus
- Metabolic: Weight loss emphasis
- Biomechanical: Load modification
- Centralized pain: CNS-active agents

*Biomarker Development:*
- Identify progression risk
- Predict treatment response
- Currently research stage
- Clinical application limited

**Emerging Therapies:**

*Disease Modification Attempts:*
- No approved DMOADs
- Sprifermin (FGF-18): Phase III
- Wnt inhibitors: Early stage
- Senolytic therapy: Research

*Regenerative Approaches:*
- PRP: Evidence accumulating
- BMAC: Limited evidence
- Adipose-derived cells
- Exosomes: Early research

**Technology-Enabled Care:**

*Digital Health:*
- Exercise apps
- Wearable activity monitors
- Remote monitoring
- Telehealth integration

*Smart Devices:*
- Instrumented insoles
- Biofeedback systems
- Real-time gait analysis
- Personalized feedback

**Value-Based Care:**

*Cost-Effective Interventions:*
- Exercise therapy
- Weight management
- Self-management programs
- Physical therapy

*Cost-Effectiveness Analysis:*
- Surgery vs. conservative
- Timing of intervention
- Prevention emphasis

**Implementation Science:**
- Exercise adherence challenges
- Behavior change strategies
- Health system considerations
- Population health approaches

**Future Directions:**
- Precision phenotyping
- Biomarker-guided therapy
- Disease modification
- Prevention focus`,
      keyTerms: [
        { term: 'sprifermin', definition: 'Recombinant FGF-18; investigational disease-modifying agent' },
        { term: 'senolytic', definition: 'Agent that eliminates senescent cells; research for OA' },
        { term: 'digital therapeutics', definition: 'Technology-enabled treatments for health conditions' },
      ],
      clinicalNotes: 'Despite extensive research, no DMOAD exists. Prevention through weight management and injury prevention offers most promise. Digital health tools may improve exercise adherence.',
    },
  },

  media: [
    {
      id: 'conservative-treatments',
      type: 'diagram',
      filename: 'non-surgical-options.svg',
      title: 'Non-Surgical Treatment Options',
      description: 'Overview of conservative OA management',
    },
  ],
  citations: [
    {
      id: 'conservative-ref',
      type: 'textbook',
      title: 'Non-Surgical Arthritis Management',
      source: 'Rheumatology Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-osteoarthritis', targetType: 'condition', relationship: 'parent', label: 'Osteoarthritis' },
    { targetId: 'ortho-patient-injections', targetType: 'concept', relationship: 'related', label: 'Injections' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'arthritis', 'conservative treatment'],
    keywords: ['conservative', 'exercise', 'weight loss', 'NSAIDs'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nonSurgicalManagementContent;
