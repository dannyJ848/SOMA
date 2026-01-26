/**
 * Global Mental Health
 *
 * Educational content about mental health worldwide.
 */

import { EducationalContent } from '../../types';

export const MENTAL_HEALTH_GLOBAL: EducationalContent = {
  id: 'mental-health-global',
  type: 'concept',
  name: 'Global Mental Health',
  alternateNames: ['Mental Health Worldwide', 'Global Psychiatric Burden'],

  levels: {
    1: {
      level: 1,
      summary: 'Mental health is about how we think, feel, and cope with life. Mental health conditions like depression and anxiety affect nearly 1 billion people worldwide, but most don\'t get the help they need.',
      explanation: `Mental health is just as important as physical health. When someone has a mental health condition, their thoughts, feelings, or behaviors cause them distress or make daily life difficult.

**Common Mental Health Conditions:**

**Depression:**
- Persistent sadness and hopelessness
- Loss of interest in activities
- Changes in sleep and appetite
- Affects over 280 million people

**Anxiety:**
- Excessive worry and fear
- Physical symptoms like racing heart
- Can be disabling
- Affects over 300 million people

**Other Conditions:**
- Bipolar disorder (mood swings)
- Schizophrenia (altered perception of reality)
- PTSD (after traumatic experiences)
- Substance use disorders

**Why Mental Health Matters:**

**Impact on Life:**
- Affects relationships and work
- Can lead to physical health problems
- Connected to suicide (700,000+ deaths/year)
- Reduces quality of life

**The Treatment Gap:**
- Most people with mental health conditions get no treatment
- In poor countries, only 1 in 10 get help
- Shortage of mental health professionals
- Stigma prevents people from seeking help

**Barriers to Care:**
- Not enough services
- Cost of treatment
- Stigma and discrimination
- Lack of awareness

**What Helps:**
- Talking therapies (counseling, psychotherapy)
- Medications for some conditions
- Support from family and community
- Reducing stigma
- Training non-specialists to provide care`,
      keyTerms: [
        { term: 'mental health', definition: 'Our emotional, psychological, and social well-being - how we think, feel, and act' },
        { term: 'depression', definition: 'A condition causing persistent sadness and loss of interest in life' },
        { term: 'stigma', definition: 'Negative attitudes and discrimination toward people with certain conditions' },
      ],
      analogies: [
        'Mental health is like physical health - just as a broken leg needs treatment, mental health conditions need care too.',
        'The treatment gap is like having hospitals but no one can afford to go in.',
      ],
      examples: [
        'Depression is the leading cause of disability worldwide.',
        'In many countries, there is less than one psychiatrist for every million people.',
      ],
    },
    2: {
      level: 2,
      summary: 'Mental, neurological, and substance use disorders affect approximately 970 million people globally, contributing 14% of the global disease burden. A massive treatment gap exists, with 75-85% in LMICs receiving no treatment, driving global mental health initiatives.',
      explanation: `Mental health represents a critical yet neglected component of global health, with enormous burden and inadequate response worldwide.

**Global Burden:**

**Prevalence (2019):**
| Condition | People Affected |
|-----------|----------------|
| Anxiety disorders | 301 million |
| Depression | 280 million |
| Bipolar disorder | 40 million |
| Schizophrenia | 24 million |
| Substance use | 165 million |

**Disease Burden:**
- Mental disorders: 14% of global DALYs
- Depression: Leading cause of disability
- Suicide: 703,000 deaths annually
- Self-harm: 20 million attempts annually

**Treatment Gap:**

| Setting | % Receiving Treatment |
|---------|----------------------|
| High-income countries | 50% |
| Low-income countries | 10-15% |
| Severe mental disorders (LMICs) | 10% |

**Causes of Gap:**
- Shortage of mental health workers
- Limited services, especially in PHC
- Out-of-pocket costs
- Stigma and discrimination
- Low priority in health budgets

**Workforce Crisis:**
| Setting | Psychiatrists per 100,000 |
|---------|--------------------------|
| High-income | 11.9 |
| Upper-middle income | 2.8 |
| Lower-middle income | 0.4 |
| Low-income | 0.1 |

**WHO Mental Health Action Plan 2013-2030:**

**Objectives:**
1. Strengthen leadership and governance
2. Provide community-based services
3. Implement prevention and promotion
4. Strengthen information systems

**Targets:**
- 80% coverage of severe mental disorders
- 50% reduction in suicide rate
- 80% of countries with mental health policy

**Effective Interventions:**

**Pharmacological:**
- Antidepressants
- Mood stabilizers
- Antipsychotics
- Essential medicines list

**Psychological:**
- Cognitive behavioral therapy
- Problem-solving therapy
- Interpersonal therapy
- Brief interventions

**Service Delivery:**
- Integration in primary care
- Community mental health
- Task-shifting to non-specialists
- Digital mental health`,
      keyTerms: [
        { term: 'treatment gap', definition: 'Difference between those needing mental health care and those receiving it' },
        { term: 'task-shifting', definition: 'Training non-specialists to deliver mental health care' },
        { term: 'mhGAP', definition: 'Mental Health Gap Action Programme - WHO program for scaling up mental health care' },
        { term: 'psychosocial support', definition: 'Non-medical interventions supporting psychological and social well-being' },
      ],
      analogies: [
        'The mental health treatment gap is like having medicine that works but keeping it locked away where most people can\'t access it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Mental disorders arise from complex biopsychosocial interactions with significant genetic and environmental components. The mhGAP provides evidence-based guidelines for non-specialists. Integration into primary care and task-shifting are key strategies for closing the treatment gap.',
      explanation: `Understanding mental health requires biopsychosocial frameworks, while improving global mental health requires implementation strategies that address workforce and resource constraints.

**Biopsychosocial Model:**

**Biological Factors:**
- Genetic predisposition
- Neurotransmitter systems
- Brain structure/function
- Physical health conditions

**Psychological Factors:**
- Early life experiences
- Cognitive patterns
- Coping mechanisms
- Personality traits

**Social Factors:**
- Poverty and inequality
- Social support
- Trauma and adversity
- Cultural context

**Evidence-Based Treatments:**

**Depression:**
| Intervention | NNT | Evidence |
|-------------|-----|----------|
| Antidepressants (moderate-severe) | 7 | Strong |
| CBT | 5-7 | Strong |
| Problem-solving therapy | 5-7 | Strong |
| Exercise | ~4 | Moderate |

**Anxiety:**
- CBT (gold standard)
- SSRIs/SNRIs
- Relaxation techniques
- Exposure therapy

**Severe Mental Disorders:**
- Antipsychotics for schizophrenia
- Mood stabilizers for bipolar
- Psychosocial rehabilitation
- Community-based care

**mhGAP Program:**

**Priority Conditions:**
- Depression
- Psychosis
- Epilepsy
- Child mental/developmental disorders
- Dementia
- Substance use disorders
- Self-harm/suicide

**Intervention Guide:**
- Algorithms for non-specialists
- Essential medicines
- Psychosocial interventions
- Referral pathways

**Task-Shifting Models:**

**Evidence:**
- MANAS (India): PHC counselors effective for depression
- PRIME: Integration in five LMICs
- StrongMinds: Group IPT in Africa
- Friendship Bench: Lay counselors in Zimbabwe

**Components:**
- Training and supervision
- Simplified protocols
- Quality assurance
- Referral linkages

**Service Organization:**

**WHO Service Pyramid:**
1. Self-care (base)
2. Informal community care
3. Primary care mental health
4. General hospital psychiatric
5. Specialist services (top)

**Community-Based Care:**
- Deinstitutionalization
- Supported housing
- Peer support
- Recovery orientation`,
      keyTerms: [
        { term: 'biopsychosocial', definition: 'Model integrating biological, psychological, and social factors in understanding health' },
        { term: 'mhGAP-IG', definition: 'mhGAP Intervention Guide - WHO clinical protocols for non-specialists' },
        { term: 'recovery model', definition: 'Approach emphasizing personal journey toward meaningful life despite symptoms' },
        { term: 'NNT', definition: 'Number Needed to Treat - patients treated for one to benefit' },
      ],
      clinicalNotes: 'Integrate mental health screening in routine care. Use mhGAP protocols where appropriate. Address comorbid conditions. Coordinate with specialists.',
    },
    4: {
      level: 4,
      summary: 'Global mental health implementation requires health systems strengthening, policy reform, and addressing social determinants. Evidence supports integration, task-shifting, and digital approaches, while advocacy movements challenge biomedical hegemony and promote rights-based care.',
      explanation: `**Health Systems Lens:**

**Six Building Blocks Applied:**
| Block | Mental Health Application |
|-------|--------------------------|
| Service delivery | Integration, community-based |
| Workforce | Task-shifting, supervision |
| Information | Routine data, registries |
| Medicines | Essential medicines access |
| Financing | Budget allocation, coverage |
| Governance | Policy, legislation |

**Financing:**
- Mental health: <2% of health budgets in LMICs
- Return on investment: $5 for every $1 invested
- Economic costs of mental disorders: $2.5 trillion/year
- UHC inclusion essential

**Implementation Evidence:**

**Scaling Proven Interventions:**
| Intervention | Scale-Up Evidence |
|-------------|------------------|
| mhGAP integration | District-level in multiple countries |
| Thinking Healthy (maternal) | Pakistan, multiple LMICs |
| Youth FRIENDS (schools) | Various settings |
| Digital platforms | Emerging evidence |

**Implementation Barriers:**
- Weak political will
- Competing priorities
- Stigma in health systems
- Supervision challenges

**Advocacy and Rights:**

**Movement for Global Mental Health:**
- Lancet series (2007, 2018, 2022)
- UN conventions (CRPD)
- Grand Challenges
- Civil society advocacy

**Rights-Based Approach:**
- UN CRPD Article 12 (legal capacity)
- Challenging coercive practices
- Supported decision-making
- Community inclusion

**Critiques:**
- Biomedical reductionism
- Western frameworks
- Treatment vs. determinants
- Colonial legacies

**Social Determinants:**

**Structural:**
- Poverty and inequality
- Discrimination
- Conflict and displacement
- Climate change

**Proximal:**
- Violence and abuse
- Social isolation
- Unemployment
- Housing instability

**Interventions:**
- Cash transfers (evidence for mental health)
- Housing First
- Livelihoods programs
- Violence prevention

**Special Populations:**

**Humanitarian Settings:**
- Displacement and mental health
- IASC guidelines
- Psychological first aid
- Longer-term care

**Children and Adolescents:**
- 50% of mental disorders begin by age 14
- School-based programs
- Parent training
- Early intervention`,
      keyTerms: [
        { term: 'CRPD', definition: 'Convention on the Rights of Persons with Disabilities - UN human rights treaty' },
        { term: 'psychological first aid', definition: 'Humanitarian framework for supporting people in acute distress' },
        { term: 'supported decision-making', definition: 'Alternative to guardianship preserving legal capacity with assistance' },
        { term: 'Movement for Global Mental Health', definition: 'Coalition advocating for scaling up mental health services globally' },
      ],
      clinicalNotes: 'Address social determinants. Use rights-based approaches. Support integration efforts. Advocate for policy change.',
    },
    5: {
      level: 5,
      summary: 'Global mental health operates at intersections of neuroscience, culture, politics, and economics, with contested conceptual frameworks and implementation challenges. Transformation requires addressing power dynamics, structural determinants, and system reform while respecting epistemic diversity.',
      explanation: `**Theoretical Debates:**

**Conceptual Tensions:**
| Domain | Tension |
|--------|---------|
| Etiology | Biological vs. social causation |
| Categories | Universal vs. cultural specificity |
| Treatment | Medical vs. psychosocial primacy |
| Agency | Professional authority vs. lived experience |

**Critical Perspectives:**
- "Treatment gap" framing critiques
- Pharmaceutical industry influence
- Western diagnostic categories
- Epistemic justice

**Decolonizing Mental Health:**
- Local healing traditions
- Cultural concepts of distress
- Power in research
- Community-defined outcomes

**Research Frontiers:**

**Implementation Science:**
- Hybrid effectiveness-implementation designs
- Adaptation frameworks
- Scale-up science
- Sustainability research

**Digital Mental Health:**
- Apps and platforms
- AI applications
- Equity considerations
- Regulatory challenges

**Neuroscience:**
- RDoC framework
- Biomarkers
- Treatment targets
- Prevention science

**Political Economy:**

**Commercial Determinants:**
- Pharmaceutical marketing
- Digital platform governance
- Insurance industry
- Workplace mental health market

**Global Governance:**
- WHO's role
- UN mental health agenda
- Funding flows
- Civil society power

**Future Trajectories:**

**Optimistic:**
- UHC includes mental health
- Social determinants addressed
- Rights-based care normalized
- Treatment gap closed

**Concerning:**
- Medicalization without resources
- Digital divides
- Mental health "exceptionalism"
- Structural factors ignored

**Transformation:**
- Upstream prevention
- Community-centered care
- Lived experience leadership
- Intersectoral action`,
      keyTerms: [
        { term: 'epistemic justice', definition: 'Fairness in whose knowledge counts and how it is produced' },
        { term: 'RDoC', definition: 'Research Domain Criteria - neuroscience-based framework for mental disorders' },
        { term: 'cultural concepts of distress', definition: 'Culturally-specific ways of experiencing and expressing suffering' },
      ],
      clinicalNotes: 'Engage with conceptual debates. Consider cultural context. Support system transformation. Center lived experience.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-mental-health',
      type: 'website',
      title: 'Mental Health',
      source: 'World Health Organization',
      url: 'https://www.who.int/health-topics/mental-health',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],

  crossReferences: [
    { targetId: 'ncd-epidemic', targetType: 'topic', relationship: 'parent', label: 'NCD Epidemic' },
    { targetId: 'sdoh-overview', targetType: 'topic', relationship: 'related', label: 'Social Determinants of Health' },
  ],

  tags: {
    systems: ['nervous', 'public-health'],
    topics: ['global-health', 'mental-health', 'psychiatry'],
    keywords: ['mental health', 'depression', 'anxiety', 'treatment gap', 'mhGAP'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
