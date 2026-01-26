/**
 * Surgical Safety Checklist
 *
 * Understanding and participating in surgical safety protocols.
 */

import { EducationalContent } from '../../types';

export const surgicalSafetyChecklist: EducationalContent = {
  id: 'concept-surgical-safety-checklist',
  type: 'concept',
  name: 'Surgical Safety Checklist',
  alternateNames: ['Pre-Surgery Checklist', 'WHO Surgical Checklist', 'Operative Safety Protocol'],

  levels: {
    1: {
      level: 1,
      summary: 'Before surgery, doctors and nurses check many things to keep you safe. You can help by answering their questions.',
      explanation: `**What Happens Before Surgery:**
Before your surgery, the medical team asks you lots of questions and does many checks. This is to make sure everything goes right!

**Questions They Will Ask:**
- What is your name and birthday?
- What surgery are you having?
- Which body part is being operated on?
- Do you have any allergies?

**Why They Mark Your Body:**
If you are having surgery on one side of your body (like your left knee), someone will draw on it with a marker. This helps everyone know exactly where to operate.

**What You Can Do:**
- Answer all questions, even if you have answered them before
- Tell them if the mark is in the wrong spot
- Say something if anything seems wrong
- Ask questions if you are confused

**The Team Works Together:**
Before surgery starts, everyone in the operating room stops and checks:
- Patient name and procedure
- All equipment is ready
- Any special concerns

**It's Good They Ask Many Times!**
It might seem annoying to answer the same questions over and over, but this keeps you safe. Each check is like a safety net!`,
      keyTerms: [
        { term: 'surgery', definition: 'An operation where doctors fix something inside your body' },
        { term: 'operating room', definition: 'The special room where surgeries happen' },
        { term: 'surgical site marking', definition: 'A mark drawn on your body to show where the surgery will be' },
      ],
      analogies: [
        'The surgery checklist is like a pilot checking the airplane before takeoff - it makes sure everything is ready for a safe trip.',
        'Marking the surgery spot is like putting an X on a treasure map - it shows exactly where to go.',
      ],
      examples: [
        'A nurse asks your name and what surgery you are having, and you tell them clearly.',
        'You notice the mark is on your right knee instead of your left, and you speak up.',
      ],
    },
    2: {
      level: 2,
      summary: 'Surgical safety checklists are proven tools that reduce complications. Patients play an active role by verifying their identity, procedure, and surgical site.',
      explanation: `**The Surgical Safety Checklist:**

The WHO Surgical Safety Checklist was developed to reduce surgical complications and deaths. Studies show it works - reducing deaths by 47% in some settings.

**Three Phases of the Checklist:**

| Phase | When | Key Checks |
|-------|------|------------|
| Sign In | Before anesthesia | Identity, site, consent, allergies |
| Time Out | Before incision | Team introduction, procedure confirmation |
| Sign Out | Before leaving OR | Counts complete, specimen labeled, concerns |

**Your Role in Each Phase:**

*Before Anesthesia (Sign In):*
- Confirm your name and date of birth
- State what procedure you are having
- Confirm which side/site
- Verify allergies are documented
- Confirm you understand the consent

*Before Surgery Starts (Time Out):*
- You may be asleep, but beforehand confirm:
- Correct procedure
- Correct site marked
- Any concerns addressed

**Site Marking:**
- Required for procedures involving left/right, multiple structures, or levels
- Should be done by surgeon or authorized person
- You should verify the mark is correct
- Mark should be visible after draping

**Questions to Ask:**
- "Can you tell me what procedure I'm having today?"
- "Can I see where you've marked the surgical site?"
- "Have you received my complete allergy list?"
- "What time will the surgery start and how long will it take?"

**Red Flags to Report:**
- Mark in wrong location
- Team seems uncertain about procedure
- Your identity or procedure seems confused
- Allergies not confirmed

**Why This Matters:**
- Wrong-site surgery still occurs (1 in 100,000 procedures)
- Wrong-patient surgery is rare but devastating
- Retained surgical items happen
- Checklists prevent these errors`,
      keyTerms: [
        { term: 'WHO Surgical Safety Checklist', definition: 'A standardized checklist developed by the World Health Organization to improve surgical safety' },
        { term: 'time out', definition: 'A pause before surgery begins where the entire team verifies patient, procedure, and site' },
        { term: 'site marking', definition: 'Drawing on the patient to indicate the correct surgical location' },
        { term: 'wrong-site surgery', definition: 'Surgery performed on the wrong body part or side' },
      ],
      analogies: [
        'The surgical time out is like a team huddle before a big play - everyone confirms they know the plan.',
      ],
    },
    3: {
      level: 3,
      summary: 'Surgical safety checklists represent a systems-based approach to error prevention, integrating standardized protocols with team communication and patient engagement.',
      explanation: `## Surgical Safety: A Systems Approach

**Evidence for Checklists:**
- WHO Safe Surgery Saves Lives initiative (2008)
- Landmark study: 47% reduction in deaths, 36% reduction in complications
- Adopted globally as standard of care
- Part of Joint Commission National Patient Safety Goals

**Checklist Components:**

*Sign In (Before Induction):*
1. Patient identity confirmed
2. Site marked and confirmed
3. Consent documented
4. Anesthesia safety check complete
5. Pulse oximeter functioning
6. Known allergies documented
7. Difficult airway/aspiration risk assessed
8. Blood loss risk assessed

*Time Out (Before Incision):*
1. All team members introduced
2. Patient identity, procedure, site confirmed
3. Antibiotic prophylaxis given (within 60 min)
4. Critical events anticipated
5. Surgeon: Critical steps, expected duration, blood loss
6. Anesthesia: Patient-specific concerns
7. Nursing: Sterility confirmed, equipment concerns
8. Imaging displayed if relevant

*Sign Out (Before Leaving OR):*
1. Procedure name recorded
2. Instrument, sponge, needle counts complete
3. Specimen labeling confirmed
4. Equipment problems documented
5. Key concerns for recovery discussed

**Patient Participation:**

*Active Engagement:*
- Verify identity at each transition
- Confirm procedure and laterality
- Participate in site marking verification
- Ask questions about the plan
- Report concerns

*Informed Consent:*
- Understand the procedure
- Know risks and alternatives
- Have questions answered
- Signed by correct patient

**Wrong-Site Surgery Prevention:**

*Universal Protocol:*
1. Pre-procedure verification
2. Site marking
3. Time out immediately before procedure

*Risk Factors for Error:*
- Multiple procedures
- Multiple surgeons
- Unusual time pressure
- Unusual patient characteristics

**Organizational Implementation:**
- Leadership support required
- Training for all team members
- Audit and feedback
- Culture of safety
- No hierarchy in speaking up`,
      keyTerms: [
        { term: 'Universal Protocol', definition: 'Joint Commission requirements for preventing wrong-site, wrong-procedure, wrong-person surgery' },
        { term: 'sign in', definition: 'Checklist phase before anesthesia induction' },
        { term: 'sign out', definition: 'Checklist phase before patient leaves operating room' },
        { term: 'retained surgical item', definition: 'Sponge, instrument, or other item unintentionally left inside patient' },
      ],
      clinicalNotes: 'Checklist effectiveness depends on genuine engagement, not mere compliance. A culture supporting speaking up regardless of hierarchy is essential.',
    },
    4: {
      level: 4,
      summary: 'Surgical safety systems integrate checklists, team training, human factors engineering, and safety culture to minimize preventable harm in operative settings.',
      explanation: `## Advanced Surgical Safety Systems

**Theoretical Framework:**
- Swiss cheese model of error
- High-reliability organization principles
- Human factors and ergonomics
- Team training (CRM adaptation)

**Checklist Science:**

*Evidence Synthesis:*
| Study | Setting | Results |
|-------|---------|---------|
| Haynes 2009 | 8 hospitals global | 47% mortality reduction |
| van Klei 2012 | Netherlands | 33% complication reduction |
| Haugen 2015 | Norway | Improved team communication |

*Implementation Factors:*
- Fidelity to protocol
- Team engagement
- Leadership support
- Feedback mechanisms
- Adaptation to local context

**Human Factors in Surgery:**

*Error Types:*
- Slips: Correct intention, wrong action
- Lapses: Forgetting to do something
- Mistakes: Wrong plan
- Violations: Intentional deviation

*Mitigation Strategies:*
- Standardization
- Checklists and protocols
- Forcing functions
- Team communication
- Environmental design

**Team Training:**

*Crew Resource Management (CRM) Adaptation:*
- Situation awareness
- Communication
- Decision-making
- Workload management
- Team building

*Debriefing:*
- Regular post-procedure review
- Non-judgmental discussion
- Identification of improvement opportunities
- Celebration of successes

**Enhanced Recovery Protocols:**

Integration with safety checklists:
- Preoperative optimization
- Multimodal analgesia
- Early mobilization
- Nutrition management
- VTE prophylaxis

**Special Circumstances:**

*Emergency Surgery:*
- Abbreviated checklist may be needed
- Core elements must remain
- Document deviations and rationale

*Pediatric Surgery:*
- Family involvement in verification
- Age-appropriate communication
- Special equipment considerations

*High-Risk Procedures:*
- Enhanced monitoring
- Specialized team members
- Explicit contingency planning

**Quality Metrics:**

| Metric | Target |
|--------|--------|
| Checklist compliance | >95% |
| Time out completion | 100% |
| Antibiotic timing | >95% within 60 min |
| Site marking | 100% when applicable |
| Never events | Zero |

**Patient Safety Indicators:**
- Death in low-mortality DRGs
- PSI 90 composite
- Retained surgical items
- Wrong-site surgery
- Perioperative complications`,
      keyTerms: [
        { term: 'Swiss cheese model', definition: 'Error theory describing how hazards pass through multiple defensive layers' },
        { term: 'crew resource management', definition: 'Team training approach adapted from aviation to improve safety' },
        { term: 'forcing function', definition: 'Design feature that prevents error by making it difficult or impossible' },
        { term: 'enhanced recovery protocol', definition: 'Evidence-based perioperative care pathway to improve outcomes' },
      ],
      clinicalNotes: 'Checklist implementation without culture change yields limited benefit. Briefing and debriefing practices, psychological safety for speaking up, and leadership modeling are essential complements.',
    },
    5: {
      level: 5,
      summary: 'Optimal surgical safety integrates checklists within high-reliability systems, incorporating human factors engineering, team science, technology, and continuous improvement.',
      explanation: `## Surgical Safety Science: Current State and Future Directions

**Evolution of Surgical Safety:**
- From individual skill focus to systems thinking
- Recognition of teamwork and communication
- Technology integration
- Patient as safety partner

**Implementation Science:**

*Adoption Barriers:*
\`\`\`
Organizational Culture
        ↓
Individual Attitudes → Implementation Fidelity
        ↓                       ↓
Resource Constraints      Outcome Achievement
        ↓
Sustainability
\`\`\`

*Success Factors:*
- Leadership engagement
- Front-line ownership
- Adaptation to context
- Audit and feedback
- Integration with workflow

**Technology Integration:**

*Current Applications:*
- Electronic checklists
- Barcode specimen verification
- Real-time data capture
- Decision support
- Communication platforms

*Emerging Technologies:*
- AI-assisted risk prediction
- Smart OR integration
- Voice-activated documentation
- Video review systems
- Simulation and training

**Research Frontiers:**

*Current Investigations:*
- Optimal checklist design
- Debriefing effectiveness
- Team training outcomes
- Technology impact
- Patient engagement methods

*Knowledge Gaps:*
- Long-term sustainability
- Context-specific adaptations
- Cost-effectiveness
- Implementation strategies

**Global Surgical Safety:**

*Disparities:*
- Resource-limited settings
- Access to safe surgery
- Workforce development
- Infrastructure limitations

*Initiatives:*
- Lancet Commission on Global Surgery
- WHO Safe Surgery
- G4 Alliance
- Academic partnerships

**Quality and Regulatory Framework:**

*Accreditation:*
- Joint Commission NPSG
- CMS Conditions of Participation
- Leapfrog Group standards
- State regulations

*Reporting:*
- PSI measures
- Hospital Compare
- State adverse event reporting
- PSO submissions

**Safety Culture Assessment:**

*Measurement Tools:*
- Safety Attitudes Questionnaire
- Hospital Survey on Patient Safety Culture
- OR-specific assessments
- Teamwork measures

*Culture Interventions:*
- Leadership WalkRounds
- Comprehensive Unit-based Safety Program
- TeamSTEPPS
- Safety coaching

**Patient Partnership:**

*Evolution:*
- From passive recipient to active partner
- Shared decision-making
- Patient verification participation
- Family presence options
- Patient-reported outcomes

*Implementation:*
- Health literacy accommodation
- Cultural competency
- Interpreter services
- Accessible information

**Future Directions:**

*System Evolution:*
- Integrated safety management
- Real-time risk adjustment
- Predictive analytics
- Personalized safety plans

*Research Priorities:*
- Implementation effectiveness
- Equity in safety
- Technology evaluation
- Global surgery safety`,
      keyTerms: [
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
        { term: 'Safety Attitudes Questionnaire', definition: 'Validated instrument measuring safety culture dimensions' },
        { term: 'TeamSTEPPS', definition: 'Evidence-based teamwork system developed by AHRQ and DoD' },
        { term: 'Lancet Commission on Global Surgery', definition: 'Initiative addressing global access to safe surgical care' },
        { term: 'patient safety indicator', definition: 'AHRQ-developed measures of potentially preventable complications' },
      ],
      clinicalNotes: 'Surgical safety represents a mature patient safety domain with strong evidence base. Ongoing challenges include implementation fidelity, sustainability, and adaptation to new surgical technologies and settings.',
    },
  },

  media: [],

  citations: [
    {
      id: 'who-surgical-checklist',
      type: 'website',
      title: 'WHO Surgical Safety Checklist',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/integrated-health-services/patient-safety/research/safe-surgery',
    },
  ],

  crossReferences: [
    { targetId: 'concept-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
    { targetId: 'concept-speaking-up-about-concerns', targetType: 'concept', relationship: 'related', label: 'Speaking Up About Concerns' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['surgical-safety', 'checklists', 'patient-advocacy'],
    clinicalRelevance: 'critical',
    keywords: ['surgery safety', 'checklist', 'time out', 'wrong-site surgery'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default surgicalSafetyChecklist;
