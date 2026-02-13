/**
 * Mind-Body Practices - Educational Content
 *
 * Comprehensive content covering meditation, yoga, tai chi,
 * and other mind-body practices with evidence and mechanisms.
 */

import { EducationalContent } from "../types";

export const mindBodyPracticesContent: EducationalContent = {
  id: "integrative-medicine-mind-body-practices",
  type: "concept",
  name: "Mind-Body Practices",
  alternateNames: [
    "Mind-Body Medicine",
    "Contemplative Practices",
    "Mindfulness Practices",
    "Meditative Movement",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Mind-body practices like meditation, yoga, and tai chi use your mind to help your body feel better by reducing stress and teaching you to relax.",
      explanation: `**What are mind-body practices?**
Mind-body practices are activities that use your thoughts, breathing, and gentle movements to help your body feel better. They teach you to pay attention to how your body feels and how to relax.

**Common mind-body practices:**
- **Meditation**: Sitting quietly and focusing your mind
- **Yoga**: Gentle stretches and poses with breathing exercises
- **Tai chi**: Slow, flowing movements like a gentle dance
- **Deep breathing**: Taking slow, deep breaths to calm down

**How can they help?**
- Reduce stress and worry
- Help you sleep better
- Lower pain levels
- Improve mood
- Help you feel calmer and more focused

**Why do they work?**
When you are stressed, your body tenses up and your heart beats faster. Mind-body practices help turn on your body's "relax mode." This can help many health problems because stress makes many conditions worse.

**Getting started:**
- You do not need special equipment
- Start with just 5-10 minutes a day
- Many free videos and apps can guide you
- Classes are available at gyms, community centers, and online

**Important to know:**
- Mind-body practices are very safe for most people
- They work best when practiced regularly
- They can help alongside regular medical treatment
- Tell your doctor if you have injuries before starting yoga`,
      keyTerms: [
        {
          term: "meditation",
          definition: "Sitting quietly and focusing your mind to become calm and relaxed",
        },
        {
          term: "yoga",
          definition: "Gentle stretches and poses combined with breathing exercises",
        },
        {
          term: "tai chi",
          definition: "Slow, flowing movements done standing, like a gentle dance",
        },
        {
          term: "stress response",
          definition: "How your body reacts when you feel worried or scared",
        },
      ],
      analogies: [
        "Mind-body practices are like a reset button for your body - they help you switch from \"stressed mode\" to \"relaxed mode.\"",
        "Meditation is like giving your busy brain a chance to rest, like how your body rests during sleep.",
      ],
      examples: [
        "A student feeling anxious about a test might do deep breathing exercises to calm down.",
        "Someone with trouble sleeping might try meditation before bed to relax their mind.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Mind-body practices including meditation, yoga, and tai chi activate the relaxation response, reduce stress hormones, and have evidence supporting benefits for anxiety, depression, chronic pain, and cardiovascular health.",
      explanation: `**Major Mind-Body Practices:**

*Meditation Types:*
- **Mindfulness meditation**: Focusing on present moment awareness
- **Concentration meditation**: Focusing on a single point (breath, mantra)
- **Loving-kindness meditation**: Cultivating compassion
- **Body scan**: Systematically noticing sensations throughout body

*Yoga:*
- Physical postures (asanas)
- Breathing exercises (pranayama)
- Meditation and relaxation
- Many styles: Hatha, Vinyasa, Iyengar, Restorative

*Tai Chi and Qigong:*
- Slow, flowing movements
- Emphasis on balance and coordination
- Standing or seated forms available
- Originally from Chinese martial arts traditions

**How They Work:**

*Relaxation Response:*
- Opposite of stress response
- Decreases heart rate and blood pressure
- Reduces muscle tension
- Slows breathing
- Lowers stress hormones (cortisol)

*Brain Effects:*
- Increases activity in calming brain areas
- Reduces activity in stress centers
- Improves attention and focus
- May increase brain gray matter over time

**Evidence for Benefits:**

*Strong Evidence:*
- Anxiety reduction
- Stress management
- Depression (mild to moderate)
- Chronic low back pain
- Blood pressure reduction

*Moderate Evidence:*
- Insomnia
- Fibromyalgia
- PTSD symptoms
- Quality of life in chronic illness

*Being Studied:*
- Immune function
- Aging and cellular health
- Chronic disease prevention
- Cognitive decline prevention

**Getting Started Safely:**

*Meditation:*
- Start with guided meditations (apps, videos)
- Begin with 5-10 minutes daily
- Consistency more important than duration
- Many free resources available

*Yoga:*
- Beginners should start with basic classes
- Inform instructor of injuries or limitations
- Many modifications available
- Chair yoga for limited mobility

*Tai Chi:*
- Often taught in community settings
- Very low impact and gentle
- Good for older adults
- Improves balance and reduces falls

**Precautions:**
- Yoga: Avoid extreme positions if you have injuries
- Meditation: May intensify emotions in some people
- Start gently and progress gradually
- Consult doctor if you have significant health conditions`,
      keyTerms: [
        {
          term: "relaxation response",
          definition: "Body's ability to release chemicals that slow down muscles and organs - opposite of stress response",
        },
        {
          term: "mindfulness",
          definition: "Paying attention to the present moment without judgment",
        },
        {
          term: "pranayama",
          definition: "Yoga breathing exercises designed to control breath and energy",
        },
        {
          term: "cortisol",
          definition: "Stress hormone released by adrenal glands - reduced by mind-body practices",
        },
      ],
      analogies: [
        "The relaxation response is like switching your car from \"drive\" to \"park\" - it lets the engine rest.",
        "Mindfulness is like watching clouds pass by - you notice thoughts without getting carried away by them.",
      ],
      examples: [
        "A person with high blood pressure might practice meditation daily to help lower it naturally.",
        "Someone recovering from back pain might do gentle yoga to improve flexibility and reduce discomfort.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Mind-body practices modulate the autonomic nervous system, hypothalamic-pituitary-adrenal axis, and inflammatory pathways, with randomized controlled trials supporting efficacy for psychological and select physical health conditions.",
      explanation: `**Neurobiological Mechanisms:**

*Autonomic Nervous System:*
- Increased parasympathetic (vagal) tone
- Decreased sympathetic activation
- Heart rate variability improvements
- Reduced basal heart rate and blood pressure

*Hypothalamic-Pituitary-Adrenal Axis:*
- Reduced cortisol levels (acute and chronic)
- Altered cortisol awakening response
- Improved negative feedback sensitivity
- Reduced ACTH secretion

*Inflammatory Markers:*
- Reduced C-reactive protein (CRP)
- Decreased IL-6 and TNF-alpha
- Altered NF-kB activity
- Potential effects on cellular aging (telomeres)

*Neuroplasticity:*
- Increased gray matter in prefrontal cortex, hippocampus
- Changes in amygdala structure and function
- Enhanced default mode network regulation
- Improved attention network function

**Evidence by Practice:**

*Mindfulness-Based Stress Reduction (MBSR):*
- 8-week structured program
- Strongest evidence base among meditation programs
- Effective for anxiety, depression, chronic pain
- Moderate effect sizes in meta-analyses

*Mindfulness-Based Cognitive Therapy (MBCT):*
- Combines mindfulness with cognitive therapy
- Prevents depression relapse (NNT ~5)
- NICE guideline recommended for recurrent depression
- Comparable to maintenance antidepressants

*Yoga:*
- Low back pain: Comparable to physical therapy (RCTs)
- Depression: Moderate evidence as adjunct
- Anxiety: Consistent benefits
- Flexibility and balance improvements

*Tai Chi:*
- Fall prevention in elderly (strong evidence)
- Balance and coordination
- Osteoarthritis symptoms
- Quality of life improvements

**Research Methodology:**

*Challenges:*
- Blinding impossible for active practice
- Attention/expectation control groups needed
- Practitioner and setting variability
- Dose-response relationships unclear
- Self-selection bias

*Quality Indicators:*
- Randomized controlled trials
- Active control groups (not waitlist only)
- Validated outcome measures
- Adequate follow-up duration
- Intention-to-treat analysis

**Clinical Application:**

*Indications (Strong Evidence):*
- Anxiety disorders (generalized anxiety, social anxiety)
- Depression (mild-moderate; relapse prevention)
- Chronic low back pain
- Stress management
- Insomnia

*Dosing Considerations:*
- MBSR: 8 weeks, 2.5 hours/week + daily practice
- Maintenance practice important for sustained benefit
- Apps and brief practices show some benefit
- Individualized recommendations based on patient

**Safety Considerations:**

*Meditation:*
- May exacerbate psychiatric symptoms in some
- Depersonalization, derealization (rare)
- Increased anxiety during initial practice
- Screen for trauma history

*Yoga:*
- Injury risk with aggressive practice
- Modify for individual limitations
- Avoid heat yoga with certain conditions
- Prenatal modifications needed`,
      keyTerms: [
        {
          term: "MBSR",
          definition: "Mindfulness-Based Stress Reduction - structured 8-week meditation program",
        },
        {
          term: "heart rate variability",
          definition: "Variation in time between heartbeats, indicator of autonomic balance",
        },
        {
          term: "NF-kB",
          definition: "Nuclear factor kappa-B - inflammatory pathway reduced by mind-body practices",
        },
        {
          term: "default mode network",
          definition: "Brain network active during rest and self-referential thinking",
        },
      ],
      clinicalNotes:
        "MBSR and MBCT have the strongest evidence base. For depression relapse prevention, MBCT is NICE-recommended. Consider yoga for low back pain as alternative to physical therapy. Tai chi is particularly suitable for older adults (fall prevention). Screen for psychiatric history before intensive meditation programs.",
    },
    4: {
      level: 4,
      summary:
        "Advanced understanding of mind-body practices encompasses molecular and cellular mechanisms, personalized treatment matching, and integration within clinical care pathways for conditions including chronic pain, mood disorders, and cardiovascular disease.",
      explanation: `**Molecular Mechanisms:**

*Epigenetic Effects:*
- Histone modifications with meditation practice
- DNA methylation changes
- Gene expression alterations (CREB, NF-kB pathways)
- Potential transgenerational effects

*Telomere Biology:*
- Telomerase activity increases with meditation
- Potential slowing of cellular aging
- Studies in caregivers and stressed populations
- Long-term meditators show longer telomeres

*Neurotransmitter Systems:*
- Increased GABA in experienced meditators
- Dopamine release during meditation
- Serotonin system modulation
- Endogenous opioid involvement

*Immune Function:*
- Enhanced vaccine response
- Altered cytokine profiles
- Natural killer cell activity changes
- Reduced inflammatory gene expression

**Advanced Neuroimaging Findings:**

*Structural Changes:*
- Cortical thickening in prefrontal regions
- Hippocampal volume preservation
- Amygdala volume changes (variable findings)
- White matter tract improvements

*Functional Changes:*
- Altered default mode network connectivity
- Enhanced attentional network function
- Reduced emotional reactivity in amygdala
- Improved top-down regulation

*Expertise Effects:*
- Dose-response with practice hours
- Expert meditators show distinct patterns
- State vs. trait effects distinguished
- Neuroplasticity across lifespan

**Clinical Integration:**

*Chronic Pain Management:*
- Component of multimodal pain programs
- MBSR reduces pain catastrophizing
- Acceptance-based approaches
- Mechanisms: central sensitization reduction, improved coping

*Mood Disorders:*
- MBCT for recurrent depression (NICE recommended)
- Adjunct to pharmacotherapy
- Potential to reduce medication burden
- Maintain remission

*Cardiovascular Disease:*
- AHA statement supports TM for blood pressure
- Yoga as adjunct for hypertension
- Cardiac rehabilitation programs
- Secondary prevention potential

*Cancer Survivorship:*
- Fatigue reduction
- Sleep improvement
- Anxiety and depression
- Quality of life enhancement

**Personalized Approaches:**

*Patient Matching:*
- Personality factors (openness to experience)
- Prior experience with contemplative practices
- Cultural and religious considerations
- Psychiatric comorbidities

*Practice Selection:*
- Movement-based (yoga, tai chi) for those who dislike sitting
- Concentrative practices for difficulty with open awareness
- Brief practices for time constraints
- Group vs. individual based on preference

**Implementation Considerations:**

*Provider Training:*
- MBSR instructor certification requires personal practice
- Yoga teacher training varies (200-500 hours)
- Medical provider training programs available
- Importance of personal practice for teaching

*Healthcare System Integration:*
- Reimbursement challenges
- Group programs more cost-effective
- Digital delivery expansion (apps, online)
- Referral pathways

*Quality Assurance:*
- Fidelity assessment for research programs
- Credentialing standards vary
- Evidence-based curriculum adherence
- Outcome monitoring

**Special Populations:**

*Trauma-Sensitive Approaches:*
- Modified yoga for trauma survivors
- Trauma-informed mindfulness
- Avoid intense interoceptive focus initially
- Importance of choice and empowerment

*Pediatric:*
- School-based mindfulness programs
- Evidence for attention and emotional regulation
- Age-appropriate modifications
- Family involvement

*Older Adults:*
- Chair yoga and seated practices
- Fall prevention (tai chi)
- Cognitive benefits
- Social engagement component`,
      keyTerms: [
        {
          term: "epigenetics",
          definition: "Changes in gene expression without altering DNA sequence, potentially influenced by meditation",
        },
        {
          term: "telomerase",
          definition: "Enzyme that maintains telomeres, increased with meditation practice",
        },
        {
          term: "central sensitization",
          definition: "Amplification of pain signaling in central nervous system, potentially reduced by mindfulness",
        },
        {
          term: "interoception",
          definition: "Perception of internal body sensations, enhanced by mind-body practices",
        },
      ],
      clinicalNotes:
        "For integration into clinical practice: MBCT is evidence-based for depression relapse prevention. Consider referral to structured programs (MBSR, MBCT) when available. For chronic pain, mind-body practices address central sensitization and pain catastrophizing. Digital delivery (apps) provides accessible option but may have smaller effects than in-person programs.",
    },
    5: {
      level: 5,
      summary:
        "Contemporary mind-body medicine research integrates contemplative neuroscience, implementation science, and precision medicine approaches to optimize delivery of evidence-based interventions across diverse populations and healthcare settings.",
      explanation: `**Contemplative Neuroscience:**

*Advanced Methodologies:*
- Real-time fMRI neurofeedback
- EEG markers of meditation states
- Multimodal neuroimaging approaches
- Computational modeling of attention

*State-Trait Distinction:*
- Acute effects during practice
- Trait changes with long-term practice
- Neuroplasticity mechanisms
- Critical periods and dose-response

*Mechanisms of Attention Regulation:*
- Focused attention practices (FA)
- Open monitoring practices (OM)
- Different neural correlates
- Sequential skill development

*Default Mode Network Research:*
- Decreased activation during meditation
- Improved regulation in experienced meditators
- Relationship to self-referential processing
- Implications for rumination reduction

**Precision Medicine Approaches:**

*Biomarker Development:*
- HRV as indicator of treatment response
- Inflammatory markers
- EEG signatures
- Genetic factors (serotonin transporter polymorphisms)

*Treatment Matching:*
- Personality predictors of response
- Baseline symptom profiles
- Prior contemplative experience
- Comorbidity considerations

*Adaptive Interventions:*
- Sequential multiple assignment randomized trials (SMART)
- Just-in-time adaptive interventions
- Digital phenotyping for personalization
- Machine learning for responder prediction

**Implementation Science:**

*Dissemination Frameworks:*
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- PRECIS-2 for trial design
- Hybrid effectiveness-implementation trials
- Pragmatic trial designs

*Delivery Modalities:*
- In-person group programs
- Individual instruction
- Digital apps and platforms
- Hybrid models

*Scalability Challenges:*
- Instructor training bottleneck
- Fidelity vs. flexibility
- Cultural adaptation needs
- Accessibility and equity

**Digital Therapeutics:**

*Evidence for App-Based Mindfulness:*
- Growing RCT evidence
- Effect sizes smaller than in-person
- Engagement and adherence challenges
- Potential for broad reach

*Emerging Technologies:*
- Virtual reality meditation
- Biofeedback integration
- AI-guided personalization
- Wearable monitoring

**Healthcare System Integration:**

*Policy and Reimbursement:*
- Medicare coverage for cardiac rehabilitation
- Limited general reimbursement
- Insurance coverage varies
- Advocacy for expanded access

*Workforce Development:*
- Medical education integration
- Provider wellness programs
- Interprofessional training
- Community health worker training

*Clinical Pathways:*
- Pain management programs
- Behavioral health integration
- Cancer survivorship programs
- Cardiac rehabilitation

**Research Priorities:**

*NCCIH Research Priorities:*
- Mechanisms of action
- Optimal dosing
- Biomarkers of response
- Real-world effectiveness
- Implementation outcomes

*Emerging Areas:*
- Microbiome-brain-mindfulness connections
- Inflammation and depression mechanisms
- Aging and cognitive decline prevention
- Substance use disorder applications

**Clinical Practice Synthesis:**

*Evidence-Based Recommendations:*

Depression:
- MBCT for relapse prevention (NNT ~5)
- Adjunct to medication for current episode
- May allow medication tapering in stable patients

Anxiety:
- MBSR effective (moderate effect sizes)
- Consider for generalized anxiety disorder
- Component of transdiagnostic approaches

Chronic Pain:
- Part of multimodal management
- Addresses psychological components
- MBSR or ACT-based approaches

Cardiovascular:
- Blood pressure reduction (modest)
- Adjunct to lifestyle modification
- TM has most evidence (AHA statement)

*Referral Guidance:*
1. Identify patient interest and readiness
2. Match practice to preferences and abilities
3. Refer to credentialed instructors/programs
4. Set realistic expectations
5. Monitor outcomes
6. Support ongoing practice

*Resources:*
- MBSR: UMass Center for Mindfulness directory
- MBCT: University of Oxford website
- Apps: Headspace, Calm, Insight Timer
- Yoga Alliance for yoga teachers
- American Tai Chi and Qigong Association`,
      keyTerms: [
        {
          term: "contemplative neuroscience",
          definition: "Field studying neural mechanisms of meditation and related practices",
        },
        {
          term: "SMART design",
          definition: "Sequential Multiple Assignment Randomized Trial for adaptive intervention development",
        },
        {
          term: "digital therapeutics",
          definition: "Evidence-based therapeutic interventions delivered via software programs",
        },
        {
          term: "RE-AIM framework",
          definition: "Implementation science framework: Reach, Effectiveness, Adoption, Implementation, Maintenance",
        },
      ],
      clinicalNotes: `Summary of clinical integration:

For Depression:
- MBCT is NICE-recommended for recurrent depression
- 8-week program plus ongoing practice
- Consider referral after acute episode stabilized
- May reduce relapse by ~30%

For Anxiety:
- MBSR effective for generalized anxiety
- Moderate effect sizes comparable to CBT
- Consider for medication-averse patients
- Apps provide accessible entry point

For Chronic Pain:
- Component of interdisciplinary pain programs
- Addresses catastrophizing and central sensitization
- MBSR or ACT-based approaches
- Combine with physical rehabilitation

For Cardiovascular Health:
- TM has AHA scientific statement support
- Modest blood pressure effects
- Part of lifestyle modification package

Key Implementation Points:
- Start with patient preferences and readiness assessment
- Recommend structured programs (MBSR, MBCT) when available
- Apps useful for introduction and maintenance
- Personal practice by recommending provider enhances credibility
- Monitor outcomes and adjust approach`,
    },
  },

  media: [
    {
      id: "mind-body-overview-diagram",
      type: "diagram",
      filename: "mind_body_practices_overview.svg",
      title: "Mind-Body Practices Overview",
      description: "Illustration of different mind-body practices and their effects",
    },
    {
      id: "relaxation-response-diagram",
      type: "diagram",
      filename: "relaxation_response.svg",
      title: "The Relaxation Response",
      description: "Diagram showing physiological effects of the relaxation response",
    },
  ],

  citations: [
    {
      id: "goyal-meditation-meta",
      type: "article",
      title: "Meditation Programs for Psychological Stress and Well-being: A Systematic Review and Meta-analysis",
      authors: ["Goyal M", "Singh S", "Sibinga EMS"],
      source: "JAMA Internal Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/24395196/",
    },
    {
      id: "nccih-mind-body",
      type: "website",
      title: "Mind and Body Practices",
      source: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/mind-and-body-practices",
    },
  ],

  crossReferences: [
    {
      targetId: "integrative-medicine-evidence-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Evidence-Based Complementary Therapies",
    },
    {
      targetId: "stress-physiology",
      targetType: "concept",
      relationship: "related",
      label: "Stress Physiology",
    },
    {
      targetId: "anxiety-disorders",
      targetType: "condition",
      relationship: "related",
      label: "Anxiety Disorders",
    },
  ],

  tags: {
    systems: ["integrative", "nervous", "cardiovascular"],
    topics: [
      "meditation",
      "yoga",
      "tai chi",
      "mindfulness",
      "stress reduction",
      "mental health",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "psychiatry", "family medicine"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default mindBodyPracticesContent;
