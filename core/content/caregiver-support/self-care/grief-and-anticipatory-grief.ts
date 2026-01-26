/**
 * Grief and Anticipatory Grief - Educational Content
 *
 * Guidance for caregivers on understanding and coping with grief
 * both before and after the death of a loved one.
 */

import { EducationalContent } from "../../types";

export const griefAndAnticipatoryGrief: EducationalContent = {
  id: "caregiver-grief-and-anticipatory-grief",
  type: "concept",
  name: "Grief and Anticipatory Grief",
  alternateNames: ["Caregiver Grief", "Pre-Death Grief", "Bereavement"],

  levels: {
    1: {
      level: 1,
      summary: "Grief is the sadness you feel when losing someone, and anticipatory grief is grief that starts before your loved one dies as you watch them decline.",
      explanation: `Grief is a natural response to loss. As a caregiver, you may start grieving before death even occurs.

**Anticipatory Grief**
You may grieve for:
- The person they used to be
- The relationship you had
- Plans for the future
- Your own life changes

**Signs of Anticipatory Grief**
- Deep sadness
- Anxiety about the future
- Anger or frustration
- Wanting it to be over (then feeling guilty)
- Trouble focusing
- Withdrawing from others
- Sleep or eating changes

**This Is Normal**
- Many caregivers feel this way
- It does not mean you want them gone
- It does not mean you love them less
- It is part of caring for someone with serious illness

**Coping Strategies**
- Talk about your feelings
- Join a support group
- Spend meaningful time with your loved one
- Take care of yourself
- Allow yourself to feel
- Do not judge your emotions

**After Death**
- Grief continues and changes
- There is no \"right\" way to grieve
- Take time to mourn
- Accept support from others
- Consider grief counseling
- Be patient with yourself

**When to Get Help**
- You cannot function daily
- You have thoughts of harming yourself
- You cannot stop crying
- You feel stuck in grief
- Grief is interfering with health`,
      keyTerms: [
        { term: "grief", definition: "The deep sadness and other feelings you experience when someone dies or you experience a major loss" },
        { term: "anticipatory grief", definition: "Grief that begins before death, as you anticipate losing someone" },
        { term: "bereavement", definition: "The period after someone has died when you are mourning their loss" },
      ],
      analogies: [
        "Grief is like waves in the ocean - sometimes calm, sometimes overwhelming, but always eventually receding.",
        "Anticipatory grief is like mourning in slow motion - you grieve each loss as it comes.",
      ],
      examples: [
        "Maria found herself crying when she realized her mother no longer recognized her. She was grieving the mother she knew.",
        "Tom felt guilty for sometimes wishing his wife\"s illness would end, but learned this is a normal part of anticipatory grief.",
      ],
    },
    2: {
      level: 2,
      summary: "Anticipatory grief involves mourning multiple losses during caregiving, while post-death grief follows a complex path influenced by the caregiving experience and relationship with the deceased.",
      explanation: `**Understanding Anticipatory Grief**

**Types of Losses During Caregiving**
| Loss | Description |
|------|-------------|
| Loss of the person | Who they were before illness |
| Loss of relationship | The way you related to each other |
| Loss of future | Plans and dreams that will not happen |
| Loss of self | Your own identity beyond caregiver |
| Loss of normalcy | The life you had before |

**Unique Aspects**
- Grief happens while still providing care
- May feel you cannot grieve openly
- Fluctuates with condition changes
- Hope and grief coexist

**Common Experiences**
- Sadness watching decline
- Relief at times (with guilt)
- Anger at the situation
- Anxiety about future
- Exhaustion
- Isolation

**Grief After Death**

**Influences on Grief**
- Quality of death experience
- Preparation for death
- Relationship with deceased
- Support available
- Circumstances of death
- Caregiver health

**Stages/Tasks of Grief** (not linear)
- Accepting the reality of loss
- Processing the pain
- Adjusting to life without them
- Finding enduring connection

**Caregiver-Specific Grief**
- Role loss after death
- Relief and guilt about relief
- Physical exhaustion recovery
- Identity adjustment
- Time for delayed emotions

**Complicated Grief**
When grief becomes stuck:
- Intense longing persisting
- Difficulty accepting death
- Unable to function
- Avoiding reminders
- Bitterness and anger persisting

**Getting Support**
- Grief support groups
- Individual counseling
- Spiritual support
- Bereavement services
- Friends and family`,
      keyTerms: [
        { term: "ambiguous loss", definition: "Loss that is unclear, as when someone is physically present but changed by illness" },
        { term: "complicated grief", definition: "Grief that is prolonged, intense, and interferes with functioning beyond typical grief" },
        { term: "disenfranchised grief", definition: "Grief that is not openly acknowledged or socially supported" },
        { term: "tasks of mourning", definition: "Work of grief including accepting loss, processing pain, adjusting, and finding connection" },
      ],
      analogies: ["Grief is not a straight path but a winding road - you may revisit the same places multiple times."],
    },
    3: {
      level: 3,
      summary: "Grief in caregiving contexts involves understanding theoretical models, recognizing complicated grief, applying evidence-based interventions, and integrating bereavement support throughout the caregiving continuum.",
      explanation: `## Theoretical Models

**Dual Process Model (Stroebe & Schut)**
- Loss-oriented coping: grief work
- Restoration-oriented coping: adjusting to changes
- Oscillation between orientations
- Healthy grief involves both

**Continuing Bonds**
- Maintained connection with deceased
- Shifting relationship, not ending
- Healthy adaptation
- Cultural variations

**Meaning Reconstruction**
- Finding meaning in loss
- Identity reconstruction
- Narrative approaches
- Benefit finding

## Anticipatory Grief Research

**Evidence**
- Common in terminal illness caregiving
- May or may not ease post-death grief
- Ambivalent findings on preparation
- Individual variation significant

**Factors Influencing**
- Disease trajectory
- Caregiver-patient relationship
- Social support
- Cultural background
- Meaning-making

**Concurrent Grief**
| Aspect | Description |
|--------|-------------|
| Ongoing losses | Function, cognition, relationship |
| Role overload | Caregiving while grieving |
| Suppressed grief | Cannot express during care |
| Anticipatory orphanhood | Adult child losing parent |

## Complicated Grief (Prolonged Grief Disorder)

**Diagnostic Criteria** (DSM-5-TR/ICD-11)
- Intense yearning/longing
- Preoccupation with deceased
- Identity disruption
- Disbelief
- Avoidance of reminders
- Functional impairment
- Duration criteria

**Risk Factors**
- Sudden unexpected death
- Violent death
- Ambivalent relationship
- Dependent relationship
- Lack of social support
- Previous losses
- Mental health history

**Screening Tools**
- Inventory of Complicated Grief (ICG)
- Prolonged Grief Disorder Scale
- Brief Grief Questionnaire

## Evidence-Based Interventions

**For Anticipatory Grief**
- Meaning-centered approaches
- Support groups
- Family meetings
- Palliative care integration
- Counseling

**For Bereavement**
| Intervention | Evidence | Indication |
|--------------|----------|------------|
| Support groups | Moderate | General grief |
| Grief counseling | Moderate | As needed |
| CGT (Complicated Grief Treatment) | Strong | Complicated grief |
| Meaning reconstruction | Moderate | Meaning struggles |

**Complicated Grief Treatment (CGT)**
- Developed by Shear
- Integrates CBT and IPT
- Dual process focus
- Evidence-based protocol`,
      keyTerms: [
        { term: "Dual Process Model", definition: "Grief theory describing oscillation between loss and restoration orientations" },
        { term: "Prolonged Grief Disorder", definition: "Clinical diagnosis for pathological grief in DSM-5-TR and ICD-11" },
        { term: "Complicated Grief Treatment", definition: "Evidence-based therapy for prolonged grief disorder" },
        { term: "continuing bonds", definition: "Maintaining ongoing connection with deceased as part of healthy grief" },
      ],
      clinicalNotes: "Assess for anticipatory grief during caregiving. Screen for complicated grief risk. Provide bereavement support resources. Refer for CGT when prolonged grief disorder indicated. Integrate grief support into palliative care.",
    },
    4: {
      level: 4,
      summary: "Evidence-based grief care integrates validated assessment instruments, prolonged grief disorder treatment protocols, caregiver-specific bereavement research, and quality metrics for grief outcomes.",
      explanation: `## Assessment Evidence

**Validated Instruments**
- Inventory of Complicated Grief (ICG-R)
- Prolonged Grief-13 (PG-13)
- Grief Cognitions Questionnaire
- Continuing Bonds Scale
- Post-Death Grief Scale (anticipatory grief research)

**Clinical Assessment**
- Symptom severity
- Functional impairment
- Risk factor evaluation
- Support availability
- Treatment history

## Treatment Evidence

**Complicated Grief Treatment (CGT)**
- RCT evidence (Shear et al.)
- Superior to interpersonal therapy
- Maintenance of gains
- Mechanism research

**CGT Components**
| Component | Focus |
|-----------|-------|
| Psychoeducation | Grief understanding |
| Dual process | Loss and restoration |
| Situational revisiting | Processing death |
| Imaginal revisiting | Conversation with deceased |
| Memory work | Integration |
| Goals and plans | Restoration |

**Other Approaches**
- Internet-based interventions
- Writing interventions
- Meaning-making therapies
- Mindfulness approaches

## Caregiver-Specific Research

**Post-Caregiving Grief**
- Relief and guilt documented
- Role loss challenges
- Identity reconstruction
- Health effects

**Predictors of Outcomes**
- Pre-death grief intensity
- Caregiving strain
- Death circumstances
- Relationship quality
- Support availability

**Intervention Needs**
- Transition support
- Health recovery
- Identity work
- Meaning-making

## Quality Metrics

**Process Measures**
- Grief screening rates
- Bereavement referral
- Follow-up completion
- Intervention fidelity

**Outcome Measures**
- Grief severity
- Functional status
- Quality of life
- Complicated grief rates

**System Metrics**
- Bereavement service availability
- Caregiver follow-up
- Hospice bereavement programs
- Quality benchmarking

## Palliative Care Integration

**Early Integration**
- Anticipatory grief support
- Family meetings
- Meaning-making support
- Preparation for death

**Bereavement Programs**
- Hospice bereavement services
- Follow-up protocols
- Risk screening
- Referral pathways`,
      keyTerms: [
        { term: "Inventory of Complicated Grief", definition: "Validated instrument for assessing complicated grief symptoms" },
        { term: "situational revisiting", definition: "CGT technique processing avoided situations related to death" },
        { term: "imaginal revisiting", definition: "CGT technique involving imagined conversation with deceased" },
        { term: "post-caregiving adjustment", definition: "Process of adapting to life after caregiving ends" },
        { term: "bereavement risk screening", definition: "Assessment to identify those at high risk for complicated grief" },
      ],
      clinicalNotes: "Use validated instruments for grief assessment. Implement CGT for prolonged grief disorder. Integrate bereavement services in palliative care. Screen caregivers for complicated grief risk. Track grief outcomes systematically.",
    },
    5: {
      level: 5,
      summary: "Grief research examines neurobiological mechanisms, intervention science, cultural considerations, and policy frameworks while addressing disparities in bereavement care and the unique trajectory of caregiver grief.",
      explanation: `## Neurobiological Research

**Brain Mechanisms**
- Reward pathway involvement
- Attachment system
- Stress response alterations
- Cognitive control circuits

**Imaging Studies**
- Nucleus accumbens activation
- Posterior cingulate
- Prefrontal cortex
- Difference in complicated grief

**Biological Markers**
- Cortisol patterns
- Inflammatory markers
- Sleep physiology
- Cardiovascular effects

## Intervention Science

**Mechanism Research**
- Active ingredients identification
- Mediator analysis
- Moderator identification
- Process research

**Comparative Effectiveness**
- CGT vs. other treatments
- Dosage optimization
- Delivery modalities
- Prevention approaches

**Technology Integration**
- Internet-based interventions
- App-based support
- Virtual reality applications
- AI-assisted tools

## Cultural Considerations

**Cultural Variation**
- Grief expression norms
- Mourning rituals
- Continuing bonds meaning
- Help-seeking attitudes

**Cultural Adaptation**
- Community-based approaches
- Culturally specific rituals
- Language concordance
- Family involvement patterns

**Research Needs**
- Cross-cultural studies
- Adaptation effectiveness
- Diverse populations
- Global perspectives

## Policy Framework

**Bereavement Services**
- Hospice bereavement requirements
- Medicare coverage
- Access and quality
- Workforce needs

**Caregiver Support**
- Post-caregiving transition
- Health recovery support
- Financial considerations
- Identity support

**Advocacy**
- Service expansion
- Coverage improvement
- Research funding
- Recognition

## Health Equity

**Disparities**
- Access to grief support
- Bereavement service utilization
- Cultural barriers
- Complicated grief rates

**Targeted Approaches**
- Community-based grief support
- Cultural adaptation
- Language access
- Underserved populations

**Research Priorities**
- Equity in outcomes
- Effective adaptations
- Access interventions
- Cultural factors

## Future Directions

**Research Agenda**
- Mechanism clarification
- Prevention approaches
- Technology effectiveness
- Long-term outcomes

**Innovation**
- Precision grief care
- Digital therapeutics
- Integrated models
- Early intervention

**Systems Change**
- Healthcare integration
- Policy advancement
- Workforce development
- Quality improvement`,
      keyTerms: [
        { term: "reward pathway", definition: "Brain circuits involved in yearning and craving associated with grief" },
        { term: "continuing bonds", definition: "Ongoing relationship with deceased, culturally variable in healthy expression" },
        { term: "bereavement care access", definition: "Availability of grief support services, with documented disparities" },
        { term: "grief prevention", definition: "Emerging approaches to prevent complicated grief in high-risk individuals" },
        { term: "precision grief care", definition: "Tailored grief interventions based on individual risk factors and needs" },
      ],
      clinicalNotes: `Systems implementation:
1. Integrate grief assessment into caregiver support
2. Develop bereavement care pathways
3. Address cultural factors in grief support
4. Ensure equity in service access
5. Research caregiver grief trajectories
6. Advocate for policy supports`,
    },
  },

  media: [
    { id: "grief-understanding-guide", type: "diagram", filename: "anticipatory-grief-guide.svg", title: "Understanding Anticipatory Grief", description: "Visual guide to grief during caregiving" },
  ],

  citations: [
    { id: "center-loss-grief", type: "website", title: "Grief Resources", source: "Center for Loss and Life Transition", url: "https://www.centerforloss.com/" },
    { id: "cgt-research", type: "article", title: "Complicated Grief Treatment", source: "JAMA Psychiatry" },
  ],

  crossReferences: [
    { targetId: "caregiver-difficult-conversations", targetType: "concept", relationship: "related", label: "Difficult Conversations" },
    { targetId: "caregiver-support-groups", targetType: "concept", relationship: "related", label: "Support Groups" },
  ],

  tags: { systems: ["caregiver-support"], topics: ["grief", "anticipatory grief", "bereavement", "loss", "complicated grief"], clinicalRelevance: "critical" },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default griefAndAnticipatoryGrief;
