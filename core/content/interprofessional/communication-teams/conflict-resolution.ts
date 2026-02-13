/**
 * Conflict Resolution - Managing Disagreements in Healthcare Teams
 */

import { EducationalContent } from '../../types';

export const conflictResolution: EducationalContent = {
  id: 'interprofessional-conflict-resolution',
  type: 'concept',
  name: 'Conflict Resolution in Healthcare Teams',
  alternateNames: ['Managing Team Disagreements', 'Team Conflict Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Healthcare team members sometimes disagree. Learning to work through disagreements respectfully helps everyone and keeps patients safe.',
      explanation: `**Why Conflict Happens:**

- Different opinions about patient care
- Stressful situations
- Miscommunication
- Different professional training

**Healthy Ways to Handle Disagreement:**

1. Stay calm and respectful
2. Listen to the other persons view
3. Focus on the patient, not winning
4. Ask questions to understand
5. Find common ground

**When to Speak Up:**

If you are worried about patient safety, it is always okay to speak up, even if others disagree.

**Getting Help:**

- Ask a supervisor to help
- Request a team meeting
- Use chain of command if needed`,
      keyTerms: [
        { term: 'conflict', definition: 'A disagreement between people, often about what should be done' },
        { term: 'respect', definition: 'Treating others as you would want to be treated' },
        { term: 'chain of command', definition: 'The order of who to go to when problems need to be escalated' },
      ],
      analogies: ['Resolving conflict is like solving a puzzle together - everyone has pieces of the answer'],
      examples: ['A nurse disagrees with a treatment plan and calmly discusses concerns with the doctor'],
      patientCounselingPoints: ['Your care team works together even when they discuss different approaches', 'You can always ask questions about your care'],
    },
    2: {
      level: 2,
      summary: 'Constructive conflict resolution skills are essential for effective interprofessional teamwork.',
      explanation: `## Sources of Healthcare Conflict

**Professional Differences:**
- Training and perspectives
- Scope of practice boundaries
- Resource allocation
- Treatment preferences

**System Factors:**
- Time pressure
- Workload stress
- Communication barriers
- Hierarchical structures

## Conflict Resolution Approaches

**Collaborative (Win-Win):**
- Focus on shared goals
- Explore all perspectives
- Creative problem-solving
- Build relationships

**Assertive Communication:**
- I statements (I am concerned that...)
- Specific observations
- Focus on behavior, not person
- Propose solutions

## CUS and Two-Challenge Rule

**CUS Words:**
- Concerned: I am concerned about...
- Uncomfortable: I am uncomfortable with...
- Safety: I believe this is a safety issue

**Two-Challenge Rule:**
- State concern clearly twice
- If ignored, escalate to supervisor`,
      keyTerms: [
        { term: 'collaborative conflict resolution', definition: 'Approach seeking solutions that work for all parties' },
        { term: 'assertive communication', definition: 'Clear, respectful expression of opinions and needs' },
        { term: 'two-challenge rule', definition: 'Stating a safety concern twice before escalating' },
      ],
      patientCounselingPoints: ['Your care team discusses different approaches to find the best plan for you'],
    },
    3: {
      level: 3,
      summary: 'Conflict management competencies are core interprofessional skills with direct patient safety implications.',
      explanation: `## Conflict in Healthcare Context

**Impact of Unresolved Conflict:**
- Communication breakdowns
- Medical errors
- Decreased team performance
- Burnout and turnover
- Poor patient outcomes

**Constructive Conflict Benefits:**
- Better decision-making
- Innovation and improvement
- Issue identification
- Learning opportunities

## TeamSTEPPS Conflict Tools

**DESC Script:**
- Describe the specific situation
- Express your concern
- Suggest alternatives
- Consequences stated

**Advocacy and Inquiry:**
- Advocate your position clearly
- Inquire about others perspectives
- Seek to understand before being understood

## Escalation Pathways

**When to Escalate:**
- Patient safety at risk
- Unable to reach agreement
- Policy violation concerns
- Ethical issues

**How to Escalate:**
- Follow chain of command
- Document concerns
- Engage appropriate resources
- Maintain professionalism`,
      keyTerms: [
        { term: 'DESC script', definition: 'Conflict resolution tool: Describe, Express, Suggest, Consequences' },
        { term: 'advocacy and inquiry', definition: 'Balance of asserting position while seeking to understand others' },
        { term: 'escalation', definition: 'Bringing an issue to a higher level of authority when needed' },
      ],
      clinicalNotes: 'Train staff in DESC and CUS tools. Create clear escalation pathways. Model constructive conflict.',
    },
    4: {
      level: 4,
      summary: 'Effective conflict management requires understanding team dynamics, power structures, and organizational culture.',
      explanation: `## Theoretical Frameworks

**Thomas-Kilmann Conflict Modes:**
- Competing (assertive, uncooperative)
- Collaborating (assertive, cooperative)
- Compromising (moderate both)
- Avoiding (unassertive, uncooperative)
- Accommodating (unassertive, cooperative)

**Power and Hierarchy:**
- Status differences affect speaking up
- Psychological safety critical
- Authority gradients need management
- Empowerment of all team members

## Interprofessional Dynamics

**Professional Identity:**
- Socialization differences
- Scope of practice tensions
- Knowledge asymmetries
- Territorial behaviors

**Building Collaborative Culture:**
- Shared goals and values
- Role clarity
- Mutual respect
- Trust development

## Mediation and Facilitation

**Third-Party Intervention:**
- Neutral facilitator
- Structured process
- Ground rules
- Focus on interests, not positions`,
      keyTerms: [
        { term: 'Thomas-Kilmann model', definition: 'Framework describing five conflict-handling modes' },
        { term: 'authority gradient', definition: 'Perceived power difference between team members affecting communication' },
        { term: 'professional identity', definition: 'Sense of self derived from professional training and role' },
      ],
      clinicalNotes: 'Address authority gradients. Build psychological safety. Use appropriate conflict modes for situation.',
    },
    5: {
      level: 5,
      summary: 'Conflict competency is a team and organizational capability essential for high-reliability healthcare.',
      explanation: `## Organizational Approaches

**Just Culture:**
- Distinguish error from violation
- Focus on system improvement
- Psychological safety for reporting
- Accountability with learning

**Speaking Up Culture:**
- Encouragement from leadership
- Removal of barriers
- Protection from retaliation
- Recognition of contributions

## Research Agenda

**Current Evidence:**
- TeamSTEPPS effectiveness
- Simulation training value
- Culture change challenges
- Sustainability questions

**Gaps:**
- Optimal intervention intensity
- Setting-specific adaptations
- Long-term outcomes
- Cost-effectiveness

## Health Equity Considerations

**Power Dynamics:**
- Race, gender, role intersections
- Addressing implicit bias
- Inclusive environments
- Diverse leadership

## Future Directions

- AI-assisted conflict identification
- Real-time team monitoring
- Predictive analytics
- Virtual team conflict management`,
      keyTerms: [
        { term: 'just culture', definition: 'Approach balancing accountability and learning without blame' },
        { term: 'speaking up culture', definition: 'Organizational environment where voicing concerns is expected and valued' },
        { term: 'implicit bias', definition: 'Unconscious attitudes that affect perceptions and behaviors' },
      ],
      clinicalNotes: 'Build organizational culture supporting constructive conflict. Address equity dimensions.',
    },
  },

  media: [],
  citations: [{ id: 'teamstepps-conflict', type: 'website', title: 'TeamSTEPPS Mutual Support', source: 'AHRQ' }],
  crossReferences: [{ targetId: 'interprofessional-team-meetings', targetType: 'concept', relationship: 'sibling', label: 'Team Meetings' }],
  tags: { systems: ['communication-teams'], topics: ['conflict resolution', 'team dynamics'], keywords: ['conflict', 'disagreement', 'speaking up'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default conflictResolution;
