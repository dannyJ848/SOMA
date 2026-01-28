import type { EducationalContent } from '../../types.js';

export const professionalBoundaries: EducationalContent = {
  id: 'professional-boundaries',
  type: 'concept',
  name: 'Professional Boundaries',
  alternateNames: ['Healthcare Boundaries', 'Professional Limits', 'Therapeutic Boundaries'],

  levels: {
    1: {
      level: 1,
      summary: 'Professional boundaries are rules that keep the relationship between healthcare workers and patients safe and appropriate.',
      explanation: `**What are Professional Boundaries?**

Professional boundaries are invisible lines that keep relationships between healthcare workers and patients appropriate and safe. They help:
- Keep the focus on the patient\'s health
- Prevent harm to patients
- Protect both the patient and the worker
- Make sure care is fair for everyone

**Examples of Good Boundaries:**

- Being kind but not becoming friends with patients
- Keeping patient information private
- Not accepting expensive gifts from patients
- Treating all patients equally
- Focusing on the patient\'s needs, not your own

**Why Boundaries Matter:**

When boundaries are crossed:
- Patients might get hurt
- Care might not be fair
- Trust can be broken
- Workers can get in trouble

**Keeping Boundaries:**

Healthcare workers should:
- Be friendly but professional
- Follow workplace rules
- Ask for help if unsure
- Report concerns about boundaries`,
      keyTerms: [
        { term: 'professional boundaries', definition: 'Limits that protect the relationship between healthcare workers and patients' },
        { term: 'therapeutic relationship', definition: 'The professional relationship focused on helping the patient get better' },
        { term: 'privacy', definition: 'Keeping patient information confidential and only sharing it with those who need to know' },
      ],
      analogies: ['Professional boundaries are like guardrails on a road - they keep everyone safe and on track'],
      examples: ['A nurse declines a patient\'s invitation to connect on social media to maintain professionalism'],
      patientCounselingPoints: ['Healthcare workers follow rules to keep your care professional and safe', 'You deserve to be treated with respect and have your privacy protected'],
    },
    2: {
      level: 2,
      summary: 'Professional boundaries define appropriate interactions between healthcare providers and patients, protecting both parties and ensuring ethical care delivery.',
      explanation: `## The Therapeutic Relationship

**Purpose:**
The therapeutic relationship exists solely to benefit the patient. It is:
- Professional, not personal
- Goal-directed (health outcomes)
- Time-limited (during care episode)
- Unequal in power (patient is vulnerable)

**Key Characteristics:**
- Compassion without intimacy
- Warmth without friendship
- Self-disclosure is minimal and purposeful
- Focus remains on patient needs

## Types of Boundaries

**Physical Boundaries:**
- Appropriate touch only when clinically necessary
- Explaining procedures before touching
- Respecting personal space
- Privacy during exams

**Emotional Boundaries:**
- Empathy without emotional enmeshment
- Not sharing personal problems with patients
- Managing countertransference
- Recognizing when personal feelings interfere

**Time Boundaries:**
- Keeping appointments professional
- Not extending visits for social reasons
- Appropriate availability (not 24/7 personal access)
- Ending relationships when care is complete

**Financial Boundaries:**
- No personal financial relationships
- Declining inappropriate gifts
- No business partnerships with patients
- Transparent billing practices

## Boundary Violations vs. Crossings

**Boundary Crossing:**
- Brief, unintentional departure from standards
- May be appropriate in context
- Example: Accepting small gift from grateful patient

**Boundary Violation:**
- Harmful breach of professional standards
- Exploits patient vulnerability
- Example: Romantic relationship with patient

## Warning Signs

**For Providers:**
- Thinking about patient outside work
- Sharing personal information unnecessarily
- Preferential treatment
- Feeling offended when patient sees another provider

**For Patients:**
- Provider sharing personal problems
- Inappropriate comments or touch
- Requests for meetings outside clinical setting
- Unusual personal disclosure`,
      keyTerms: [
        { term: 'therapeutic relationship', definition: 'Professional relationship between provider and patient focused on health outcomes' },
        { term: 'countertransference', definition: 'Provider\'s emotional reaction to a patient based on past experiences' },
        { term: 'boundary crossing', definition: 'Brief departure from professional boundaries that may be contextually appropriate' },
      ],
      analogies: ['Professional boundaries are like a fence around a garden - they protect what is growing inside while allowing healthy interaction'],
      examples: ['A physician refers a patient to a colleague when romantic feelings develop', 'A therapist declines a dinner invitation from a patient\'s family'],
      patientCounselingPoints: ['You should expect professional behavior from all healthcare workers', 'If you feel uncomfortable with a provider\'s behavior, you can speak up or seek help'],
    },
    3: {
      level: 3,
      summary: 'Professional boundaries are ethical obligations supported by professional codes of conduct, institutional policies, and regulatory requirements.',
      explanation: `## Ethical Framework

**Core Principles:**

**Beneficence:**
- Acting in patient\'s best interest
- Boundaries protect patient welfare
- Prevents exploitation

**Non-maleficence:**
- Do no harm
- Boundary violations cause harm
- Prevents abuse of power

**Autonomy:**
- Respecting patient self-determination
- Boundaries preserve patient choice
- Prevents coercion

**Justice:**
- Fair treatment for all
- Boundaries ensure equitable care
- Prevents favoritism

## Professional Codes

**Nursing:**
- ANA Code of Ethics
- State nurse practice acts
- Boundary guidelines in specialty standards

**Medicine:**
- AMA Code of Medical Ethics
- FSMB guidelines
- Specialty society policies

**Allied Health:**
- Discipline-specific codes
- Professional licensure requirements
- Scope of practice boundaries

## Institutional Policies

**Common Policy Elements:**
- Gift policies (what can be accepted)
- Social media guidelines
- Dual relationship prohibitions
- Reporting requirements
- Consequences for violations

**Documentation:**
- When boundaries are tested
- Consultation with colleagues
- Decisions about accepting gifts
- Termination of patient relationships

## High-Risk Situations

**Long-Term Relationships:**
- Primary care over years
- Chronic disease management
- Mental health treatment
- Risk of relationship drift

**Vulnerable Populations:**
- Patients with trauma history
- Those with cognitive impairment
- Individuals with limited support
- Those in crisis

**Small Communities:**
- Treating friends or neighbors
- Social overlap unavoidable
- Managing dual relationships
- Extra vigilance required

## Managing Boundary Challenges

**Self-Awareness:**
- Recognize personal triggers
- Understand your needs
- Monitor emotional reactions
- Seek supervision when needed

**Consultation:**
- Discuss concerns with colleagues
- Seek ethics consultation
- Document advice received
- Follow institutional policies

**Setting Limits:**
- Clear communication about boundaries
- Consistent application
- Gentle but firm reinforcement
- Documentation of discussions`,
      keyTerms: [
        { term: 'dual relationship', definition: 'When a provider has both a professional and another type of relationship with a patient' },
        { term: 'power differential', definition: 'Imbalance of authority between provider and patient that makes patients vulnerable' },
        { term: 'ethics consultation', definition: 'Formal process for getting advice on ethical dilemmas in healthcare' },
      ],
      clinicalNotes: 'Know your profession\'s code of ethics. Follow institutional policies. Consult when uncertain. Document boundary decisions.',
    },
    4: {
      level: 4,
      summary: 'Professional boundary management requires sophisticated understanding of ethics, law, psychology, and organizational dynamics to navigate complex clinical situations.',
      explanation: `## Psychological Dimensions

**Transference:**
- Patient projects feelings from past relationships onto provider
- Common in therapeutic relationships
- Must be recognized and managed
- Not acted upon by provider

**Countertransference:**
- Provider projects feelings onto patient
- May be based on patient\'s characteristics
- Requires self-awareness and supervision
- Can compromise objectivity

**Vicarious Trauma:**
- Emotional impact of caring for traumatized patients
- Can blur boundaries as defense mechanism
- Requires self-care and professional support
- Managed through institutional resources

## Legal Considerations

**Malpractice Risk:**
- Boundary violations increase liability
- Sexual misconduct is never defensible
- Documentation is protective
- Early consultation is essential

**Mandatory Reporting:**
- Some boundary violations must be reported
- Laws vary by jurisdiction
- Know your reporting obligations
- Failure to report has consequences

**Disciplinary Actions:**
- License revocation possible
- Employment termination
- Criminal charges in severe cases
- Professional reputation damage

## Complex Scenarios

**Social Media:**
- Friending patients is generally inappropriate
- Privacy settings are not foolproof
- Professional accounts only for professional content
- Clear policies needed

**Rural and Small Communities:**
- Some dual relationships unavoidable
- Social and professional overlap
- Need for modified approaches
- Increased documentation

**Post-Treatment Relationships:**
- Romantic relationships after care ends still problematic
- AMA recommends waiting period (often years)
- Power differential persists
- Patient vulnerability continues

**Gift Acceptance:**
- Factors to consider: value, timing, intent
- Institutional policies vary
- Cultural considerations
- Documentation importance

## Organizational Culture

**Creating Safety:**
- Clear policies and training
- Non-punitive reporting
- Support for staff who raise concerns
- Regular education

**Leadership Role:**
- Modeling appropriate boundaries
- Addressing violations promptly
- Providing consultation resources
- Maintaining accountability

**Peer Support:**
- Collegial consultation
- Balancing confidentiality and safety
- Supporting colleagues in difficulty
- Preventing isolation`,
      keyTerms: [
        { term: 'transference', definition: 'Patient\'s projection of feelings from past relationships onto the provider' },
        { term: 'vicarious trauma', definition: 'Emotional impact on providers from exposure to patients\' traumatic experiences' },
        { term: 'mandatory reporting', definition: 'Legal obligation to report certain violations to authorities' },
      ],
      clinicalNotes: 'Understand psychological dynamics. Know legal obligations. Document carefully. Create organizational cultures that support boundary maintenance.',
    },
    5: {
      level: 5,
      summary: 'Professional boundaries are dynamic constructs requiring ongoing attention to power, vulnerability, and context while balancing human connection with professional responsibility.',
      explanation: `## Theoretical Frameworks

**Relational Ethics:**
Beyond rule-based ethics, relationships themselves have moral weight. Boundaries are not just rules but expressions of:
- Mutual respect
- Attentiveness to vulnerability
- Contextual sensitivity
- Dynamic negotiation

**Feminist Ethics:**
Critiques traditional boundary concepts as:
- Sometimes overly rigid
- Potentially dismissive of genuine connection
- Needing attention to power dynamics
- Contextually situated

**Virtue Ethics:**
Focus on character of practitioner:
- Integrity
- Compassion
- Wisdom in application
- Phronesis (practical wisdom)

## Power and Vulnerability

**Asymmetry Analysis:**
Healthcare relationships are inherently asymmetric:
- Knowledge differential
- Vulnerability differential
- Institutional power
- Dependency needs

**Ethical Implications:**
- Greater responsibility on provider
- Patient\'s limited ability to protect themselves
- Institutional duty to safeguard
- Need for structural protections

**Intersectionality:**
Multiple factors compound vulnerability:
- Race and ethnicity
- Gender and sexuality
- Socioeconomic status
- Disability
- Immigration status
- Language barriers

## Contemporary Challenges

**Digital Boundaries:**
- Telehealth creates new boundary questions
- Electronic communication channels
- Social media complexity
- 24/7 availability expectations
- Data privacy concerns

**Team-Based Care:**
- Multiple providers, multiple relationships
- Consistency in boundary approaches
- Communication among team members
- Shared responsibility

**Patient-Centered Care Movement:**
- Balancing partnership with boundaries
- Shared decision-making within limits
- Authentic connection vs. professional distance
- Evolving expectations

**Global Health Contexts:**
- Cultural variation in relationship norms
- Resource-limited settings
- Short-term medical missions
- Power imbalances between visiting and local providers

## Future Directions

**Education:**
- Integrated throughout training
- Case-based learning
- Self-reflection components
- Peer discussion

**Research:**
- Outcomes of different boundary approaches
- Cultural variations
- Technology impact
- Effective interventions

**Policy Development:**
- Flexible but clear guidelines
- Context-sensitive policies
- Regular review and updating
- Stakeholder involvement

**System-Level Interventions:**
- Supportive supervision structures
- Wellness programs
- Ethics consultation accessibility
- Non-punitive support for providers`,
      keyTerms: [
        { term: 'relational ethics', definition: 'Ethical framework focusing on relationships and connection rather than abstract rules' },
        { term: 'intersectionality', definition: 'Framework for understanding how multiple social identities intersect to create unique experiences of privilege and oppression' },
        { term: 'phronesis', definition: 'Practical wisdom that enables appropriate judgment in specific situations' },
      ],
      clinicalNotes: 'Boundaries require ongoing reflection and adjustment. Balance connection with responsibility. Consider power and vulnerability. Seek consultation in complex situations.',
    },
  },

  media: [],
  citations: [
    { id: 'ana-ethics', type: 'textbook', title: 'ANA Code of Ethics for Nurses', source: 'American Nurses Association' },
    { id: 'ama-boundaries', type: 'article', title: 'AMA Code of Medical Ethics on Professional Boundaries', source: 'American Medical Association' }
  ],
  crossReferences: [
    { targetId: 'scope-of-practice', targetType: 'concept', relationship: 'related', label: 'Scope of Practice' },
    { targetId: 'collaborative-practice', targetType: 'concept', relationship: 'related', label: 'Collaborative Practice' }
  ],
  tags: {
    systems: [],
    topics: ['interprofessional', 'ethics', 'professionalism'],
    keywords: ['boundaries', 'ethics', 'professionalism', 'therapeutic relationship'],
    clinicalRelevance: 'critical'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};

export default professionalBoundaries;
