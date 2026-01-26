import { EducationalContent } from '../../types';

export const recoveryTimelinesContent: EducationalContent = {
  id: 'ortho-patient-recovery-timelines',
  type: 'topic',
  name: 'Recovery Timelines',
  alternateNames: ['Healing times', 'How long to recover', 'Return to activity timeline'],

  levels: {
    1: {
      level: 1,
      summary: 'Recovery time depends on your injury type and severity. Understanding typical timelines helps set realistic expectations, though everyone heals at their own pace.',
      explanation: `One of the most common questions is "How long will this take to heal?" While every person and injury is different, there are general timelines that can help you know what to expect.

**Factors That Affect Healing:**
- Type and severity of injury
- Your overall health
- Age (younger usually heals faster)
- Following treatment instructions
- Nutrition and sleep
- Smoking (slows healing significantly)

**Common Injury Recovery Times:**

*Sprains and Strains:*
| Severity | Time to Heal | Return to Activity |
|----------|--------------|-------------------|
| Mild (Grade 1) | 1-2 weeks | 2-3 weeks |
| Moderate (Grade 2) | 3-6 weeks | 6-8 weeks |
| Severe (Grade 3) | 6-12 weeks | 3-6 months |

*Fractures:*
| Type | Bone Healing | Full Recovery |
|------|--------------|---------------|
| Finger/toe | 3-6 weeks | 6-8 weeks |
| Wrist | 6-8 weeks | 3-4 months |
| Ankle | 6-8 weeks | 3-4 months |
| Leg (tibia) | 12-16 weeks | 4-6 months |

*Surgeries:*
| Procedure | Return to Work | Full Recovery |
|-----------|----------------|---------------|
| Knee arthroscopy | 1-2 weeks | 4-6 weeks |
| ACL reconstruction | 4-6 weeks | 9-12 months |
| Hip replacement | 4-6 weeks | 3-6 months |
| Rotator cuff repair | 6-12 weeks | 6-12 months |

**What Recovery Looks Like:**

*Week 1-2:*
- Worst pain and swelling
- Rest and protection important
- Limited activity

*Week 2-6:*
- Pain decreasing
- Starting to move more
- Physical therapy often begins

*Week 6-12:*
- Significant improvement
- Building strength
- Returning to more activities

*Month 3-12:*
- Continued strengthening
- Return to sport/activity
- Full function restored

**Tips for Best Recovery:**
- Follow your healthcare provider's instructions
- Don't skip physical therapy
- Be patient - pushing too hard can set you back
- Celebrate small progress along the way`,
      keyTerms: [
        { term: 'healing time', definition: 'How long it takes for injured tissue to repair itself' },
        { term: 'recovery', definition: 'Return to normal function after an injury' },
        { term: 'weight bearing', definition: 'Putting body weight on an injured leg or foot' },
      ],
      analogies: [
        'Healing is like a construction project - there\'s a sequence of work that takes time to complete properly.',
        'Recovery is like training for a marathon - you have to build up gradually.',
      ],
      examples: [
        'A mild ankle sprain might let you walk in a week but full sports may take 3-4 weeks.',
        'A broken wrist in a cast for 6 weeks still needs months of exercise to regain full strength and motion.',
      ],
    },
    2: {
      level: 2,
      summary: 'Recovery timelines are based on tissue healing biology and functional restoration requirements, with progression guided by clinical milestones rather than time alone.',
      explanation: `Understanding tissue healing helps set realistic expectations and guides treatment decisions.

**Tissue Healing Phases:**

*Phase 1: Inflammation (Days 1-7)*
- Body responds to injury
- Pain, swelling, redness
- Protection important
- Goal: Control inflammation

*Phase 2: Proliferation (Days 7-21)*
- New tissue forms
- Still fragile
- Careful movement begins
- Goal: Support healing

*Phase 3: Remodeling (Week 3 - Months/Years)*
- Tissue strengthens
- Progressive loading
- Function returns
- Goal: Restore strength and function

**Healing Timelines by Tissue:**

| Tissue | Initial Healing | Full Strength |
|--------|-----------------|---------------|
| Muscle | 2-4 weeks | 2-3 months |
| Tendon | 6-8 weeks | 4-6 months |
| Ligament | 6-8 weeks | 6-12 months |
| Bone | 6-12 weeks | 1 year |
| Cartilage | Limited healing | Variable |

**Surgical Recovery Timelines:**

*Arthroscopy (knee/shoulder):*
- Swelling reduction: 1-2 weeks
- Return to work (desk): 1-2 weeks
- Return to sports: 4-6 weeks (meniscectomy) to 9-12 months (ACL)

*Joint replacement:*
- Hospital stay: 1-3 days
- Walker/crutches: 2-4 weeks
- Driving: 4-6 weeks
- Full recovery: 3-6 months

*Spine surgery:*
- Hospital stay: 1-3 days
- Light activity: 2-4 weeks
- Return to work: 4-12 weeks
- Full recovery: 3-12 months

**Milestones vs. Time:**

Progress should be measured by what you can do, not just time passed:
- Pain-free daily activities
- Full range of motion
- Strength equal to other side
- Passing functional tests
- Psychological readiness

**Factors Affecting Recovery:**

*Positive factors:*
- Good general health
- Non-smoker
- Normal weight
- Compliance with treatment
- Adequate nutrition
- Good sleep

*Negative factors:*
- Smoking (delays bone/soft tissue healing)
- Diabetes (impairs healing)
- Poor nutrition
- Non-compliance
- Pushing too hard too soon
- Not addressing psychological factors`,
      keyTerms: [
        { term: 'proliferation', definition: 'Phase of healing when new tissue forms' },
        { term: 'remodeling', definition: 'Final healing phase when tissue matures and strengthens' },
        { term: 'milestone-based progression', definition: 'Advancing based on achieving specific goals rather than time' },
        { term: 'weight bearing status', definition: 'How much weight can be put on an injured extremity' },
      ],
      analogies: [
        'Tissue healing is like concrete setting - it takes time to reach full strength.',
        'Remodeling is like renovating a house - the structure is there, but it takes time to finish properly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Recovery timelines integrate tissue healing biology, surgical considerations, and patient-specific factors, with progression guided by objective criteria and evidence-based protocols.',
      explanation: `Clinical decision-making around recovery timelines requires understanding of healing biology and individual patient factors.

**Tissue Healing Biology:**

*Bone:*
- Hematoma formation: Days 1-7
- Soft callus: Weeks 2-3
- Hard callus: Weeks 4-16
- Remodeling: Months to years
- Fracture healing affected by: Stability, blood supply, gap size, infection

*Tendon/Ligament:*
- Inflammation: Days 1-7
- Proliferation: Weeks 1-3
- Remodeling: Week 4 onward
- Full maturation: 6-12+ months
- Never returns to 100% native strength

*Cartilage:*
- Limited intrinsic healing capacity
- Avascular tissue
- Fibrocartilage replacement possible
- Hyaline regeneration: Only with advanced procedures

**Procedure-Specific Timelines:**

*ACL Reconstruction:*
| Phase | Timeline | Goals |
|-------|----------|-------|
| Protection | 0-2 weeks | Control swelling, quad activation |
| Early rehab | 2-6 weeks | Full extension, weight bearing |
| Strengthening | 6-12 weeks | Build strength, proprioception |
| Progressive activity | 3-6 months | Sport-specific training |
| Return to sport | 9-12 months | Pass RTS testing |

*Total Knee Replacement:*
| Phase | Timeline | Goals |
|-------|----------|-------|
| Hospital | 1-3 days | Mobilize, manage pain |
| Early home | 1-6 weeks | Improve ROM, strength |
| Progressive | 6-12 weeks | Advance activities |
| Full recovery | 3-6 months | Optimize function |

**Criteria-Based Progression:**

*Objective measures:*
- Range of motion goals
- Strength testing (limb symmetry >90%)
- Functional tests (hop tests, balance)
- Patient-reported outcomes

*Progression criteria:*
- Previous phase goals achieved
- Pain acceptable
- No signs of adverse response
- Quality of movement maintained

**Modifying Factors:**

*Patient factors:*
| Factor | Effect on Recovery |
|--------|-------------------|
| Smoking | Slows all healing; major effect |
| Diabetes | Impaired healing, higher complications |
| Age | Slower but usually successful |
| BMI | Higher complications, longer recovery |
| Nutrition | Deficiency impairs healing |

*Surgical factors:*
- Tissue quality
- Repair integrity
- Surgical approach
- Complications`,
      keyTerms: [
        { term: 'soft callus', definition: 'Early fracture healing tissue that is cartilage-like' },
        { term: 'hard callus', definition: 'Woven bone that forms during fracture healing' },
        { term: 'limb symmetry index', definition: 'Comparison of injured to uninjured side performance' },
        { term: 'graft maturation', definition: 'Process of ACL graft transforming into ligament-like tissue' },
      ],
      clinicalNotes: 'Time-based protocols are guidelines, not absolute rules. Progression should be criteria-based with objective measures. Rushing return to activity increases re-injury risk; delays past optimal windows may also impair outcomes.',
    },
    4: {
      level: 4,
      summary: 'Recovery optimization requires integration of tissue healing science, evidence-based rehabilitation protocols, patient-specific factors, and objective outcome measures to guide criteria-based progression.',
      explanation: `Advanced recovery management integrates biological principles, protocol-driven care, and individualized decision-making.

**Tissue Healing Optimization:**

*Bone healing factors:*
- Stability: Rigid vs. relative fixation
- Biology: Blood supply, gap size
- Systemic: Smoking, diabetes, nutrition
- Loading: Appropriate mechanical stimulus

*Soft tissue healing:*
- Controlled loading beneficial (mechanotherapy)
- Optimal loading zone: Challenge without damage
- Progressive stress promotes remodeling
- Immobilization has negative effects

**Evidence-Based Protocols:**

*ACL reconstruction:*
- Early ROM critical (prevent arthrofibrosis)
- Quad activation emphasized
- Closed chain exercises preferred
- Return to sport: 9-12 months minimum
- Criteria-based RTS reduces re-injury 60%

*Rotator cuff repair:*
- Protect repair initially (varies by tear size)
- Passive ROM, then active
- Strengthening delayed (6-12 weeks)
- Full recovery: 6-12 months

*Total joint replacement:*
- Early mobilization (day of surgery)
- Rapid recovery protocols
- Outpatient joint replacement expanding
- Most improvement by 3 months, continues to 1 year

**Objective Outcome Measures:**

*Functional tests:*
- Single hop for distance
- Triple hop
- Y-balance test
- Timed functional tests

*Strength testing:*
- Isokinetic dynamometry
- Hand-held dynamometry
- Functional strength measures

*Patient-reported outcomes:*
- KOOS, HOOS, ODI, DASH
- Track over time
- Compare to MCID

**Progression Decision-Making:**

*Green light:*
- Objectives met
- Pain acceptable
- Quality movement
- Psychologically ready

*Yellow light (caution):*
- Partial progress
- Some concerns
- Modify approach
- Close monitoring

*Red light (hold):*
- Significant symptoms
- Objective decline
- Investigate cause
- Address before progressing

**Complication Recognition:**

*Concerning signs:*
- Increasing pain/swelling
- Loss of motion (arthrofibrosis)
- Persistent weakness
- Re-injury symptoms
- Infection signs`,
      keyTerms: [
        { term: 'mechanotherapy', definition: 'Use of mechanical loading to stimulate tissue healing' },
        { term: 'arthrofibrosis', definition: 'Excessive scar tissue causing joint stiffness' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference on outcome measures' },
        { term: 'criteria-based RTS', definition: 'Return to sport based on achieving objective measures' },
      ],
      clinicalNotes: 'The shift from time-based to criteria-based progression has improved outcomes. For ACL reconstruction, each month delay to 9 months reduces re-injury risk by 51%. Rushing return to sport based on time alone leads to higher re-injury rates.',
    },
    5: {
      level: 5,
      summary: 'Contemporary recovery management integrates precision monitoring, personalized rehabilitation, technology-enhanced assessment, and data-driven progression within evidence-based frameworks.',
      explanation: `Expert recovery management requires synthesis of healing science, technology, and individualized care.

**Precision Monitoring:**

*Technology integration:*
- Wearable activity monitors
- Force plate assessments
- Motion capture analysis
- Remote patient monitoring

*Biomarkers (emerging):*
- Collagen turnover markers
- Inflammatory markers
- Tissue healing indicators

*Data-driven decisions:*
- Objective trend analysis
- Comparison to benchmarks
- Individual response patterns

**Personalized Rehabilitation:**

*Individual factors:*
- Tissue healing capacity
- Response to loading
- Psychological factors
- Activity goals

*Protocol modification:*
- Standard protocols as framework
- Individualized based on response
- Accelerated or decelerated as appropriate
- Continuous reassessment

**Evidence Synthesis:**

*ACL recovery:*
- 9-12 month minimum supported by evidence
- Criteria-based RTS reduces re-injury
- Psychological readiness critical
- Long-term outcomes: 35% develop OA

*Joint replacement:*
- Enhanced recovery protocols standard
- Same-day/outpatient increasing
- Most recovery by 3-6 months
- Long-term function excellent

*Tendon repair:*
- Early controlled loading beneficial
- Protocol varies by tendon, repair
- Functional outcomes generally good
- Re-tear rates: 5-30% depending on factors

**Complex Recovery Management:**

*Multi-morbidity:*
- Prioritize healing factors
- Address modifiable risks
- Coordinate care
- Modified expectations

*Failed recovery:*
- Investigate cause
- Address biological factors
- Consider psychological factors
- Multidisciplinary approach

**Return-to-Activity Framework:**

*Phases:*
1. Protected healing
2. Functional restoration
3. Activity-specific training
4. Return to participation
5. Return to performance

*Progression criteria:*
- Objective measures achieved
- Quality of movement
- Psychological readiness
- Activity demands considered

**Prevention Focus:**

*Secondary prevention:*
- Address risk factors
- Prevention program integration
- Long-term maintenance
- Lifestyle modification

**Research Directions:**

*Current focus:*
- Optimal rehabilitation parameters
- Technology integration
- Prediction models
- Long-term outcomes

*Emerging:*
- Personalized protocols
- Biomarker-guided progression
- AI for decision support
- Regenerative approaches`,
      keyTerms: [
        { term: 'enhanced recovery protocol', definition: 'Optimized perioperative care pathway accelerating recovery' },
        { term: 'return to performance', definition: 'Achieving pre-injury performance level, beyond just participation' },
        { term: 'secondary prevention', definition: 'Preventing recurrence or complications after initial injury' },
        { term: 'precision rehabilitation', definition: 'Individualized recovery based on monitoring and response' },
      ],
      clinicalNotes: `**Key Recovery Principles:**

1. **Tissue healing biology:**
   - Understand healing phases
   - Respect timelines
   - Optimize healing environment
   - Appropriate loading

2. **Criteria-based progression:**
   - Objective measures guide decisions
   - Time provides framework, not absolutes
   - Individual variation expected
   - Quality over speed

3. **Patient factors matter:**
   - Smoking cessation critical
   - Diabetes control
   - Nutrition optimization
   - Psychological readiness

4. **Protocol as framework:**
   - Evidence-based starting point
   - Individualize based on response
   - Modify as needed
   - Document decisions

5. **Long-term perspective:**
   - Recovery continues beyond discharge
   - Prevention programs important
   - Lifestyle factors influence outcomes
   - Set appropriate expectations

**Timeline Summary:**
- Acute injuries: Days to weeks
- Fractures: 6-12 weeks to union
- Soft tissue repair: 6-12 months full recovery
- Joint replacement: 3-6 months primary recovery
- Return to sport (ACL): 9-12 months minimum`,
    },
  },

  media: [
    {
      id: 'healing-phases',
      type: 'diagram',
      filename: 'tissue-healing-phases.svg',
      title: 'Tissue Healing Phases',
      description: 'Timeline of tissue healing from injury to recovery',
    },
  ],
  citations: [
    {
      id: 'tissue-healing-review',
      type: 'article',
      title: 'Tissue Healing and Rehabilitation Timelines',
      source: 'Sports Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-physical-therapy-expectations', targetType: 'topic', relationship: 'related', label: 'PT Expectations' },
    { targetId: 'ortho-patient-return-to-activity', targetType: 'topic', relationship: 'related', label: 'Return to Activity' },
    { targetId: 'ortho-patient-home-exercises', targetType: 'topic', relationship: 'related', label: 'Home Exercises' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'healing', 'recovery'],
    keywords: ['recovery time', 'healing', 'rehabilitation', 'timelines'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default recoveryTimelinesContent;
