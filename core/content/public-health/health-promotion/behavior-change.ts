import { PublicHealthContent } from '../types';

export const behaviorChange: PublicHealthContent = {
  id: 'behavior-change',
  title: 'Behavior Change',
  category: 'Health Promotion',
  description: 'Understanding and influencing health behaviors to improve population health outcomes',
  levels: [
    {
      level: 1,
      title: 'Understanding Health Behaviors',
      content: {
        summary: 'Health behaviors are actions people take that affect their health. Understanding why people do what they do helps us help them make healthier choices.',
        keyPoints: [
          'Health behaviors can help or harm our health',
          'Knowledge alone is often not enough to change behavior',
          'Habits form through repeated actions',
          'Social influences affect what we do',
          'Environment shapes our choices'
        ],
        vocabulary: [
          { term: 'Behavior', definition: 'Actions or reactions of a person' },
          { term: 'Habit', definition: 'Regular practice that is hard to give up' },
          { term: 'Risk Behavior', definition: 'Action that increases chance of disease or injury' },
          { term: 'Protective Behavior', definition: 'Action that maintains or improves health' }
        ],
        examples: [
          'Regular exercise as a healthy behavior',
          'Smoking as a harmful health behavior',
          'Buckling seatbelt as a safety behavior',
          'Eating vegetables as a protective behavior'
        ]
      }
    },
    {
      level: 2,
      title: 'Theories of Behavior Change',
      content: {
        summary: 'Behavior change theories provide frameworks for understanding why people behave as they do and how to influence positive health changes.',
        keyPoints: [
          'Health Belief Model considers perceived threats and benefits',
          'Stages of Change describes readiness to change',
          'Social Cognitive Theory emphasizes learning and environment',
          'Theory of Planned Behavior addresses intentions and attitudes',
          'Transtheoretical Model integrates multiple approaches'
        ],
        vocabulary: [
          { term: 'Self-Efficacy', definition: 'Belief in ability to succeed in specific situations' },
          { term: 'Readiness', definition: 'Preparedness to take action for change' },
          { term: 'Intention', definition: 'Plan or commitment to act' },
          { term: 'Cues', definition: 'Triggers that prompt behavior' },
          { term: 'Reinforcement', definition: 'Consequences that encourage behavior repetition' }
        ],
        examples: [
          'Someone quitting smoking because they fear lung cancer (HBM)',
          'Moving from thinking about exercise to actually doing it (Stages)',
          'Learning healthy cooking from family members (Social Cognitive)',
          'Planning to get vaccinated next week (Intention)'
        ]
      }
    },
    {
      level: 3,
      title: 'Behavior Change Techniques',
      content: {
        summary: 'Specific, evidence-based techniques can effectively support individuals in making and maintaining positive health behavior changes.',
        keyPoints: [
          'Goal setting creates specific targets for behavior',
          'Self-monitoring increases awareness of behavior patterns',
          'Action planning identifies specific steps and resources',
          'Social support provides encouragement and accountability',
          'Motivational interviewing resolves ambivalence about change'
        ],
        vocabulary: [
          { term: 'Goal Setting', definition: 'Identifying specific, measurable targets' },
          { term: 'Self-Monitoring', definition: 'Tracking ones own behavior' },
          { term: 'Action Plan', definition: 'Detailed steps to achieve behavior change' },
          { term: 'Motivational Interviewing', definition: 'Counseling style for resolving ambivalence' },
          { term: 'Relapse Prevention', definition: 'Strategies to maintain change and avoid setbacks' }
        ],
        examples: [
          'Setting goal to walk 30 minutes daily',
          'Food diary to track eating patterns',
          'Planning routes and times for weekly exercise',
          'Walking with a friend for accountability',
          'Counseling session exploring pros and cons of quitting drinking'
        ]
      }
    },
    {
      level: 4,
      title: 'Motivation and Decision Making',
      content: {
        summary: 'Understanding motivation, decision-making processes, and behavioral economics helps design more effective interventions and policies.',
        keyPoints: [
          'Intrinsic motivation comes from within the individual',
          'Extrinsic motivation comes from external rewards or pressures',
          'Cognitive biases influence health decisions',
          'Default options powerfully shape choices',
          'Framing affects perception of health information'
        ],
        vocabulary: [
          { term: 'Intrinsic Motivation', definition: 'Drive from within based on enjoyment or values' },
          { term: 'Extrinsic Motivation', definition: 'Drive from external rewards or consequences' },
          { term: 'Cognitive Bias', definition: 'Systematic error in thinking' },
          { term: 'Default Bias', definition: 'Tendency to choose pre-selected option' },
          { term: 'Loss Aversion', definition: 'Preference to avoid losses over acquire gains' }
        ],
        examples: [
          'Exercising because it feels good (intrinsic)',
          'Exercising to win a bet (extrinsic)',
          'Presenting surgery survival rate as 90% vs 10% mortality (framing)',
          'Default enrollment in retirement savings plans',
          'Organ donation opt-in vs opt-out policies'
        ]
      }
    },
    {
      level: 5,
      title: 'Advanced Approaches and Contextual Factors',
      content: {
        summary: 'Complex behavior change requires understanding social, cultural, economic, and environmental contexts alongside individual psychology and neuroscience.',
        keyPoints: [
          'Social norms and cultural values shape health behaviors',
          'Structural barriers constrain behavior choices',
          'Stress and trauma affect decision-making and self-control',
          'Digital platforms enable just-in-time intervention',
          'Policy and environment create sustainable behavior change'
        ],
        vocabulary: [
          { term: 'Social Norms', definition: 'Unwritten rules of behavior in groups' },
          { term: 'Structural Barriers', definition: 'Systemic obstacles to behavior change' },
          { term: 'Nudge', definition: 'Subtle change in choice architecture' },
          { term: 'Digital Intervention', definition: 'Technology-delivered behavior change support' },
          { term: 'Implementation Science', definition: 'Study of putting evidence into practice' }
        ],
        examples: [
          'Descriptive norms showing most peers do not smoke',
          'Food deserts limiting healthy eating options',
          'Trauma-informed approaches to addiction treatment',
          'Just-in-time messages to support physical activity',
          'Sugary drink taxes combined with public education campaigns'
        ]
      }
    }
  ]
};
