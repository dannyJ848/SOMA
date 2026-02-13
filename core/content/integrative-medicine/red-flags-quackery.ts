/**
 * Red Flags for Quackery - Educational Content
 *
 * Comprehensive content covering how to identify fraudulent health claims,
 * protect yourself from health scams, and evaluate medical information critically.
 */

import { EducationalContent } from "../types";

export const redFlagsQuackery: EducationalContent = {
  id: "integrative-medicine-red-flags-quackery",
  type: "concept",
  name: "Red Flags for Quackery",
  alternateNames: [
    "Health Fraud Detection",
    "Pseudoscience Identification",
    "Medical Scam Warning Signs",
    "Health Misinformation Recognition",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Quackery means fake health treatments that do not work and can waste your money or hurt you. Learning to spot warning signs helps you avoid being tricked.",
      explanation: `**What is quackery?**
Quackery is when people sell health treatments that do not work. Sometimes they know their products are fake. Sometimes they truly believe in them but are wrong. Either way, these products can:
- Waste your money
- Not help your health problem
- Actually hurt you
- Keep you from getting treatment that works

**Warning signs to watch for:**

*"Miracle" or "breakthrough" claims:*
- "Cures all diseases"
- "Doctors do not want you to know"
- "Ancient secret"
- "Revolutionary discovery"
Real medicine does not talk this way.

*Testimonials instead of research:*
- "It worked for me!" stories
- Celebrity endorsements
- Before-and-after pictures
Signs that there is no real science behind it.

*One product for everything:*
- "Treats cancer, diabetes, arthritis, and more"
Real treatments target specific problems. No single thing fixes everything.

*Pressure to buy now:*
- "Limited time offer"
- "While supplies last"
- "Order in the next 10 minutes"
Real medicine does not require pressure sales.

*Attack on regular medicine:*
- "Doctors are hiding the cure"
- "Big Pharma conspiracy"
- "The FDA does not want you to know"
This is used to make you distrust people who might warn you.

**How to protect yourself:**

*Ask questions:*
- Does this seem too good to be true?
- Where is the scientific proof?
- What do my doctors think?
- Why would everyone else hide this?

*Check before you buy:*
- Talk to your doctor
- Look up the product on trusted websites
- Be suspicious of amazing claims
- Remember: if something sounds too good to be true, it probably is

**When in doubt:**
Ask your doctor, pharmacist, or another health professional you trust. They can help you figure out if something is real or fake.`,
      keyTerms: [
        {
          term: "quackery",
          definition: "Selling or promoting fake health treatments",
        },
        {
          term: "testimonial",
          definition: "A personal story about how something worked for one person",
        },
        {
          term: "scam",
          definition: "A trick to take your money",
        },
      ],
      analogies: [
        "A miracle cure that fixes everything is like a key that opens every lock - it does not exist.",
        "Testimonials without research are like reviews from the seller's family - of course they say it is great!",
      ],
      examples: [
        "A website selling 'magic water' that claims to cure cancer, diabetes, and arthritis is almost certainly a scam.",
        "A supplement that promises you will lose 30 pounds in 30 days without diet or exercise is too good to be true.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Identifying quackery requires understanding common persuasion tactics, recognizing the difference between evidence and anecdote, and knowing where to find reliable health information.",
      explanation: `**Understanding Quackery:**

*Definition:*
Quackery is the promotion of fraudulent or unproven health practices. It exists on a spectrum from deliberate fraud to sincere but mistaken beliefs.

*Why it persists:*
- Desperation for cures, especially for serious illness
- Distrust of conventional medicine
- Confirmation bias and placebo effects
- Clever marketing
- Regulatory gaps
- Social proof from other believers

**Red Flag Categories:**

*Claim-based red flags:*
- Cure-all claims (treats many unrelated conditions)
- "Natural" as a guarantee of safety
- "Detox" or "cleanse" without specifying what
- "Boosts immune system" vaguely
- Quantum, energy, or vibrational claims without evidence
- Ancient or secret knowledge

*Evidence-based red flags:*
- Testimonials as primary evidence
- Conspiracy theories about suppressed cures
- No peer-reviewed research
- Research only on company website
- Cherry-picked or misrepresented studies
- Animal or cell studies presented as human evidence

*Marketing-based red flags:*
- High-pressure sales tactics
- Limited time offers
- Money-back guarantee as proof of effectiveness
- Celebrity endorsements
- Before and after images
- Fake medical credentials or titles

*Practitioner-based red flags:*
- Dismissing all conventional medicine
- Discouraging second opinions
- Selling products directly (financial conflict of interest)
- Making diagnoses without proper examination
- Offering treatments for conditions they cannot diagnose

**Difference Between Evidence and Anecdote:**

*Anecdotes (testimonials):*
- One person's experience
- Cannot rule out placebo effect
- Cannot rule out natural recovery
- Selection bias (failures not reported)
- Memory and interpretation biased

*Evidence (research):*
- Many people compared
- Control groups for comparison
- Blinding to prevent bias
- Statistical analysis
- Peer review
- Replication

**How to Evaluate Claims:**

*Questions to ask:*
- What is the specific claim being made?
- What evidence supports it?
- Who is making money from this?
- What do independent experts say?
- Has it been tested in controlled studies?
- What are the potential harms?

*Reliable information sources:*
- PubMed (research articles)
- Cochrane reviews
- NCCIH (National Center for Complementary and Integrative Health)
- Your healthcare providers
- Academic medical centers

*Unreliable information sources:*
- Company websites selling products
- Social media testimonials
- Celebrity endorsements
- Health news without sources
- Sites promoting one product or viewpoint

**Protecting Yourself:**

*Before trying any treatment:*
- Research the evidence (not testimonials)
- Talk to your doctor
- Check for FDA warnings
- Look for third-party verification
- Consider the financial motivation

*Warning signs you might be a target:*
- Chronic or serious illness
- Frustration with conventional treatment
- Desire for control over health
- Financial vulnerability
- Social isolation`,
      keyTerms: [
        {
          term: "placebo effect",
          definition: "Improvement that occurs because someone believes a treatment will work, not because it actually does",
        },
        {
          term: "confirmation bias",
          definition: "Tendency to notice and remember information that confirms what we already believe",
        },
        {
          term: "peer review",
          definition: "Process where other scientists evaluate research before publication",
        },
        {
          term: "anecdote",
          definition: "Personal story that is not controlled evidence",
        },
      ],
      analogies: [
        "Testimonials are like online reviews - helpful for some things, but not reliable proof that something treats disease.",
        "A product that claims to treat everything is like a tool that claims to be a hammer, screwdriver, and saw all at once - suspiciously versatile.",
      ],
      examples: [
        "A supplement company claims their product cures cancer based on emails from satisfied customers. This is anecdotal evidence, not scientific proof.",
        "A website selling 'detox foot pads' shows dramatic before-and-after pictures of the pads turning brown. The brown color is actually from the pads reacting to sweat, not 'toxins' being removed.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Critical appraisal of health claims requires understanding logical fallacies, cognitive biases, research design principles, and the regulatory framework for health products and claims.",
      explanation: `**Logical Fallacies in Quackery:**

*Appeal to nature:*
- "Natural is better/safer"
- Naturalistic fallacy
- Hemlock is natural; aspirin is derived from willow bark

*Appeal to tradition:*
- "Used for thousands of years"
- Longevity does not equal efficacy
- Many traditional practices abandoned when tested

*Appeal to authority:*
- "Doctors recommend"
- Credentials do not guarantee correctness
- False or irrelevant credentials common

*Post hoc fallacy:*
- "I took it and got better"
- Correlation does not equal causation
- Natural disease course, regression to mean, placebo

*Argument from ignorance:*
- "Science cannot explain it"
- Lack of explanation is not evidence of magic
- Many things await scientific understanding

*False dichotomy:*
- "Either toxic drugs or natural healing"
- Many options exist
- Nuance rejected for simplicity

*Shifting the burden of proof:*
- "Prove it does not work"
- Claimant must prove claims
- Absence of evidence when expected is evidence of absence

**Cognitive Biases Exploited:**

*Confirmation bias:*
- Seek confirming information
- Dismiss contradicting evidence
- Remember hits, forget misses

*Sunk cost fallacy:*
- "I've invested so much already"
- Continue despite evidence of failure
- Emotional investment protects belief

*Bandwagon effect:*
- "Everyone is using it"
- Social proof persuasive
- Popularity does not equal validity

*Anchoring:*
- First information influences later judgment
- High prices suggest quality
- "Compare at $200, now only $50"

*Availability heuristic:*
- Vivid testimonials more persuasive than statistics
- Memorable examples overweighted
- Rare events seem common if publicized

**Research Design Principles:**

*Hierarchy of evidence:*
1. Systematic reviews and meta-analyses
2. Randomized controlled trials
3. Cohort studies
4. Case-control studies
5. Case series and case reports
6. Expert opinion
7. Testimonials (lowest)

*Why RCTs matter:*
- Randomization prevents selection bias
- Control group provides comparison
- Blinding prevents expectation effects
- Statistical analysis quantifies uncertainty

*Red flags in research claims:*
- Only cell or animal studies
- No control group
- Unblinded studies
- Very small samples
- No peer review
- Conflict of interest
- Cherry-picked outcomes

**Regulatory Framework:**

*FDA authority:*
- Drugs: Pre-market approval required
- Devices: Classification system, varying oversight
- Supplements: No pre-market approval (DSHEA 1994)
- Cosmetics: Limited oversight
- Homeopathy: Special exception (changing)

*FTC authority:*
- Advertising claims
- Deceptive practices
- Enforcement actions
- Required disclaimers

*What regulation does NOT mean:*
- Supplement in store ≠ proven effective
- Supplement legal to sell ≠ proven safe
- No FDA warning ≠ FDA approved

**Specific Quackery Categories:**

*Detoxification:*
- Vague "toxin" claims
- No specific mechanism
- Liver and kidneys already detoxify
- Colon cleanses, foot pads, ionic detox

*Energy medicine:*
- Undetectable energies
- Quantum misuse
- No plausible mechanism
- Healing touch, reiki, therapeutic touch

*Cancer quackery:*
- Particularly dangerous - delays effective treatment
- Laetrile, Gerson therapy, coffee enemas
- Exploits desperation
- May harm directly

*Anti-vaccine misinformation:*
- Disproven links (autism)
- "Natural immunity" promotion
- Conspiracy theories
- Risk miscalculation

**Professional Response:**

*Counseling patients:*
- Non-judgmental inquiry
- Understand motivations
- Provide evidence-based information
- Maintain therapeutic relationship
- Focus on safety

*Reporting quackery:*
- FDA MedWatch
- FTC complaint
- State medical boards
- State attorneys general
- Consumer protection agencies`,
      keyTerms: [
        {
          term: "naturalistic fallacy",
          definition: "Incorrect assumption that what is natural is good or safe",
        },
        {
          term: "post hoc fallacy",
          definition: "Assuming that because B followed A, A caused B",
        },
        {
          term: "regression to the mean",
          definition: "Tendency for extreme values to move toward average on repeat measurement",
        },
        {
          term: "randomized controlled trial",
          definition: "Study where participants are randomly assigned to treatment or control groups",
        },
      ],
      clinicalNotes:
        "When patients present using questionable therapies: assess for harm potential, understand their perspective, provide evidence-based information without damaging the relationship. For dangerous practices (cancer quackery, vaccine refusal), document discussion thoroughly. Report fraudulent practitioners or products to appropriate agencies.",
    },
    4: {
      level: 4,
      summary:
        "Advanced quackery identification integrates understanding of pseudoscience methodology, regulatory enforcement mechanisms, patient psychology, and systematic approaches to protecting vulnerable populations.",
      explanation: `**Pseudoscience Methodology:**

*Characteristics of pseudoscience:*
- Untestable or unfalsifiable claims
- Reliance on confirmation rather than refutation
- Absence of self-correction
- Emphasis on confirmation bias
- Use of scientific-sounding language without substance
- Refusal to engage with scientific community

*Demarcation criteria (science vs. pseudoscience):*
- Falsifiability (Popper)
- Paradigm adherence (Kuhn)
- Research programme progressiveness (Lakatos)
- Epistemic virtues approach

*Common pseudoscience tactics:*
- Moving goalposts
- Special pleading
- Ad hoc hypotheses
- Unfalsifiable mechanisms
- Rejecting disconfirming evidence
- Quantum mysticism

**Regulatory Enforcement:**

*FDA enforcement mechanisms:*
- Warning letters
- Import alerts
- Injunctions
- Seizures
- Criminal prosecution
- Consent decrees

*FTC enforcement:*
- Civil investigative demands
- Cease and desist orders
- Civil penalties
- Consumer redress
- Advertising substantiation

*Limitations:*
- Resource constraints
- Jurisdictional limits (internet)
- DSHEA limitations
- First Amendment considerations
- Enforcement priorities

*Notable enforcement actions:*
- POM Wonderful (FTC)
- Prevagen (FTC)
- Kevin Trudeau (FTC criminal contempt)
- Homeopathy warning letters (FDA)

**Psychology of Belief:**

*Why intelligent people believe:*
- Compartmentalization
- Motivated reasoning
- Tribal identity
- Pattern recognition errors
- Need for control
- Meaning-making

*Vulnerability factors:*
- Chronic or serious illness
- Treatment failure
- Health anxiety
- Distrust of institutions
- Prior positive experiences with CAM
- Social network influence

*Identity-protective cognition:*
- Beliefs tied to identity
- Evidence rejection to protect identity
- Backfire effect (debated)
- Motivated skepticism

**Communication Strategies:**

*Debunking effectiveness:*
- Provide alternative explanation
- Explain the trick (mechanism)
- Lead with facts, not myth
- Simple messaging
- Graphics and visualization

*Motivational interviewing application:*
- Express empathy
- Develop discrepancy
- Roll with resistance
- Support self-efficacy
- Avoid argumentation

*When debunking may fail:*
- Identity-protective beliefs
- Deep conspiracy thinking
- Social/financial investment
- Lack of trust in source

**Institutional Approaches:**

*Healthcare organization strategies:*
- Evidence-based CAM integration
- Clear policies on quackery
- Staff education
- Patient education resources
- Complaint mechanisms

*Academic medical center role:*
- Research agenda setting
- Evidence synthesis
- Provider education
- Public education
- Media engagement

*Professional society responsibilities:*
- Practice guidelines
- Position statements
- Member education
- Advocacy for regulation
- Discipline of members

**Vulnerable Populations:**

*Cancer patients:*
- 40-80% use some CAM
- Vulnerability due to prognosis
- May delay or refuse effective treatment
- Financial exploitation
- Need for oncology-specific resources

*Chronic disease:*
- Frustration with management
- Search for cure vs. management
- Financial burden of ongoing care
- Quality of life focus

*Mental health:*
- Stigma may drive to alternatives
- Antipsychiatry movements
- May refuse effective medication
- Suicide risk if untreated

*Children:*
- Parents making decisions
- Vaccine refusal implications
- Medical neglect concerns
- Legal and ethical considerations

**Ethical Considerations:**

*Autonomy vs. protection:*
- Respect for patient choice
- Harm reduction when disagreement
- When to involve others (minors, incapacity)
- Documentation requirements

*Provider complicity:*
- Referral to quacks
- Passive endorsement
- Failure to warn
- Financial relationships

*Truth-telling:*
- Balancing honesty with compassion
- Avoiding harm from blunt debunking
- Maintaining hope within reality
- Therapeutic relationship preservation`,
      keyTerms: [
        {
          term: "falsifiability",
          definition: "Ability of a claim to be proven wrong - a key criterion distinguishing science from pseudoscience",
        },
        {
          term: "motivated reasoning",
          definition: "Tendency to arrive at conclusions we want to reach, rather than following evidence",
        },
        {
          term: "identity-protective cognition",
          definition: "Rejection of evidence that threatens group identity or core beliefs",
        },
        {
          term: "consent decree",
          definition: "Legal agreement with regulatory agency to stop certain practices",
        },
      ],
      clinicalNotes:
        "For patients using questionable therapies: assess motivation, maintain relationship, provide evidence without confrontation, document discussions. For vulnerable populations (cancer, chronic disease, mental health), extra vigilance needed. Report dangerous practitioners or products. Consider ethics consultation for complex cases involving minors or treatment refusal.",
    },
    5: {
      level: 5,
      summary:
        "Leadership in combating health misinformation requires expertise in science communication, policy development, media engagement, public health surveillance, and building institutional capacity for evidence-based practice.",
      explanation: `**Science Communication:**

*Effective messaging principles:*
- Lead with facts, not myths
- Explain the mechanism
- Use clear, simple language
- Visual aids enhance understanding
- Emotional resonance matters
- Trusted messenger crucial

*Inoculation theory:*
- Pre-exposure to weakened arguments
- Builds resistance to misinformation
- More effective than post-hoc debunking
- Scalable through education

*Misinformation research:*
- Continued influence effect
- Belief persistence
- Source amnesia
- Illusory truth effect
- Correction fatigue

**Policy Development:**

*Regulatory reform options:*
- DSHEA modernization
- Pre-market safety requirements
- Mandatory adverse event reporting
- Third-party testing requirements
- Advertising substantiation

*Enforcement enhancement:*
- Increased FDA/FTC resources
- Coordination between agencies
- International cooperation
- Platform accountability
- Penalty enhancement

*Professional regulation:*
- Scope of practice laws
- Licensing requirements
- Discipline mechanisms
- Continuing education requirements
- Supervision requirements

**Media and Platform Engagement:**

*Social media challenges:*
- Algorithm amplification
- Echo chambers
- Rapid spread
- Anonymous actors
- Cross-platform coordination

*Platform policies:*
- Health misinformation policies (evolving)
- Enforcement inconsistency
- Appeals processes
- Expert partnerships
- Transparency requirements

*Media literacy:*
- Source evaluation
- Claim verification
- Bias recognition
- Statistical literacy
- Understanding research

**Surveillance Systems:**

*Adverse event monitoring:*
- FDA MedWatch
- Poison control centers
- Academic surveillance networks
- Consumer organizations
- International collaboration

*Misinformation monitoring:*
- Social media surveillance
- Google Trends analysis
- News monitoring
- Academic tracking
- Rapid response capability

*Early warning systems:*
- Emerging trends identification
- Risk assessment
- Coordination with enforcement
- Public communication

**Institutional Capacity:**

*Academic medical centers:*
- Integrative medicine programs
- Research infrastructure
- Training programs
- Public engagement
- Media office expertise

*Professional organizations:*
- Position statements
- Practice guidelines
- Member education
- Advocacy capacity
- Discipline processes

*Government agencies:*
- Research funding (NCCIH)
- Enforcement (FDA, FTC)
- Public education
- Surveillance
- International coordination

**Research Priorities:**

*Communication research:*
- Effective debunking strategies
- Inoculation interventions
- Trusted messenger identification
- Platform-specific approaches
- Cultural adaptation

*Implementation research:*
- Healthcare provider education
- Patient education
- System-level interventions
- Policy effectiveness
- Cost-effectiveness

*Surveillance research:*
- Harm detection
- Trend identification
- Rapid response
- Outcome measurement
- International comparison

**Building Coalitions:**

*Stakeholder engagement:*
- Healthcare providers
- Patient advocacy groups
- Consumer protection organizations
- Media organizations
- Platform companies
- Regulators
- Researchers

*Advocacy strategies:*
- Evidence-based messaging
- Coalition building
- Policy engagement
- Media engagement
- Public education

*Conflict navigation:*
- Free speech considerations
- Autonomy respect
- Cultural sensitivity
- Religious practices
- Economic interests

**Future Directions:**

*Technology applications:*
- AI for misinformation detection
- Automated fact-checking
- Personalized education
- Platform integration
- Research acceleration

*Global health security:*
- Infodemic preparedness
- International coordination
- Rapid response capacity
- Equity considerations
- Sustainable systems

*Education evolution:*
- K-12 critical thinking
- Health literacy curricula
- Professional education
- Public education campaigns
- Lifelong learning

**Leadership Framework:**

*Personal expertise:*
- Evidence appraisal skills
- Communication training
- Media engagement capability
- Policy understanding
- Network building

*Organizational leadership:*
- Culture of evidence
- Resource allocation
- Staff development
- Quality improvement
- External engagement

*Field leadership:*
- Research contributions
- Guideline development
- Policy advocacy
- Public engagement
- Mentorship

*Systemic change:*
- Regulatory reform
- Platform accountability
- Education transformation
- Health system integration
- Equity advancement`,
      keyTerms: [
        {
          term: "inoculation theory",
          definition: "Communication strategy that builds resistance to misinformation by pre-exposing to weakened arguments",
        },
        {
          term: "continued influence effect",
          definition: "Tendency for misinformation to continue affecting thinking even after correction",
        },
        {
          term: "infodemic",
          definition: "Rapid spread of misinformation during health crises, paralleling disease spread",
        },
        {
          term: "platform accountability",
          definition: "Responsibility of social media companies for content spread and harm prevention",
        },
      ],
      clinicalNotes: `Leadership summary:

Clinical practice:
- Universal, non-judgmental inquiry
- Evidence-based counseling
- Document discussions
- Report dangerous products/practitioners

Organizational role:
- Staff education
- Policy development
- Resource creation
- Quality monitoring

Professional engagement:
- Guidelines and position statements
- Media engagement
- Policy advocacy
- Research contribution

Resources for reporting:
- FDA MedWatch (products)
- FTC (advertising)
- State medical boards (practitioners)
- State attorneys general (fraud)
- FBI (internet fraud)

Key organizations:
- NCCIH
- Quackwatch
- Science-Based Medicine
- Center for Inquiry
- American Council on Science and Health`,
    },
  },

  media: [
    {
      id: "quackery-red-flags-checklist",
      type: "diagram",
      filename: "quackery_red_flags_checklist.svg",
      title: "Quackery Red Flags Checklist",
      description: "Visual checklist of warning signs for health fraud",
    },
    {
      id: "evidence-hierarchy-pyramid",
      type: "diagram",
      filename: "evidence_hierarchy.svg",
      title: "Evidence Hierarchy Pyramid",
      description: "Levels of evidence from testimonials to systematic reviews",
    },
  ],

  citations: [
    {
      id: "fda-health-fraud",
      type: "website",
      title: "Health Fraud Scams",
      source: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/consumers/health-fraud-scams",
    },
    {
      id: "ftc-health-claims",
      type: "website",
      title: "Health Claims",
      source: "Federal Trade Commission",
      url: "https://www.ftc.gov/news-events/topics/health-care",
    },
    {
      id: "quackwatch",
      type: "website",
      title: "Quackwatch",
      source: "Stephen Barrett, MD",
      url: "https://quackwatch.org/",
    },
    {
      id: "science-based-medicine",
      type: "website",
      title: "Science-Based Medicine",
      source: "SBM Editors",
      url: "https://sciencebasedmedicine.org/",
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
      targetId: "integrative-medicine-alternative-therapies-evaluation",
      targetType: "concept",
      relationship: "related",
      label: "Alternative Therapies Evaluation",
    },
    {
      targetId: "evidence-based-medicine",
      targetType: "concept",
      relationship: "related",
      label: "Evidence-Based Medicine",
    },
  ],

  tags: {
    systems: ["integrative", "public-health"],
    topics: [
      "quackery",
      "health fraud",
      "pseudoscience",
      "patient safety",
      "health literacy",
      "critical thinking",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family medicine", "preventive medicine"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default redFlagsQuackery;
