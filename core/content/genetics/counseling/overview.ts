/**
 * Genetic Counseling Overview - Comprehensive Educational Content
 *
 * Covers the genetic counseling process, roles, principles,
 * and clinical applications in various healthcare settings.
 */

import { EducationalContent } from "../../types";

export const geneticCounselingOverviewContent: EducationalContent = {
  id: "concept-genetic-counseling-overview",
  type: "concept",
  name: "Genetic Counseling Overview",
  alternateNames: [
    "Genetic Counseling",
    "Genetics Consultation",
    "Genomic Counseling",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Genetic counseling helps people understand how genetics might affect their health and make informed decisions about genetic testing and medical care.",
      explanation: `Genetic counseling is a type of healthcare service that helps people learn about genetics and how it relates to their health and their family"s health.

**What is a genetic counselor?**

A genetic counselor is a healthcare professional who has special training in genetics and counseling. They help people:
- Understand how genes work and how genetic conditions run in families
- Decide whether genetic testing might be helpful
- Understand what genetic test results mean
- Make decisions about their healthcare based on genetic information
- Cope with the emotions that can come with genetic information

**When might someone see a genetic counselor?**

- Before or during pregnancy to learn about risks for genetic conditions in the baby
- If there is a family history of a genetic condition like cancer or heart disease
- If someone or their child has a genetic condition
- If someone is considering genetic testing
- After getting results from genetic testing

**What happens during a genetic counseling session?**

1. **Gathering information**: The counselor asks about your health history and your family"s health history
2. **Education**: They explain genetics concepts in a way that is easy to understand
3. **Discussion of options**: They discuss whether genetic testing might be helpful and what kinds of tests are available
4. **Support**: They provide emotional support and help you think through decisions
5. **Follow-up**: They may coordinate care with other doctors and provide resources

**Important things to know:**

- Genetic counseling is a confidential service
- The counselor will not tell you what to do - they help you make your own informed decisions
- Genetic counseling is available throughout your life as your needs change`,
      keyTerms: [
        {
          term: "genetic counselor",
          definition:
            "A healthcare professional trained to help people understand genetics and make decisions about genetic testing",
        },
        {
          term: "family history",
          definition:
            "Information about health conditions that have occurred in your relatives",
        },
        {
          term: "informed decision",
          definition:
            "A choice made after understanding all the important information and options",
        },
        {
          term: "confidential",
          definition:
            "Private; genetic information is protected and not shared without permission",
        },
      ],
      analogies: [
        "A genetic counselor is like a guide who helps you navigate a complicated map - they explain the terrain and help you choose your path, but the journey is yours.",
        "Genetic counseling is like having a translator who speaks \"genetics\" and can explain it in everyday language.",
        "A family history is like a family tree that shows health patterns instead of just names.",
      ],
      examples: [
        "A pregnant woman sees a genetic counselor to discuss prenatal genetic testing options.",
        "A man whose father and brother had colon cancer meets with a genetic counselor to discuss hereditary cancer testing.",
        "Parents of a child born with a genetic condition see a genetic counselor to understand the condition and learn about resources.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Genetic counseling is a communication process integrating family history assessment, risk evaluation, education about inheritance and testing options, and psychosocial support to facilitate informed autonomous decision-making.",
      explanation: `Genetic counseling is defined by the National Society of Genetic Counselors as "the process of helping people understand and adapt to the medical, psychological, and familial implications of genetic contributions to disease."

**Core Components of Genetic Counseling:**

1. **Family History Assessment**
   - Three-generation pedigree minimum
   - Includes ages, diagnoses, ages at diagnosis
   - Identifies inheritance patterns
   - Reveals at-risk relatives

2. **Risk Assessment**
   - Empiric risk data
   - Risk models when applicable
   - Bayesian analysis for carrier status
   - Considers penetrance and expressivity

3. **Education**
   - Basic genetics concepts
   - Specific condition information
   - Inheritance patterns
   - Testing options and limitations

4. **Informed Consent**
   - Benefits and limitations of testing
   - Possible results and their meanings
   - Implications for family members
   - Privacy and discrimination concerns

5. **Psychosocial Support**
   - Emotional impact assessment
   - Coping strategies
   - Decision-making support
   - Referrals when needed

**Clinical Settings:**

| Setting | Focus Areas |
|---------|-------------|
| Prenatal | Screening options, diagnostic testing, pregnancy management |
| Pediatric | Diagnosis, developmental prognosis, family planning |
| Cancer | Hereditary risk assessment, testing, management |
| Cardiovascular | Inherited cardiomyopathies, arrhythmias |
| Neurogenetics | Huntington disease, hereditary ataxias |
| Pharmacogenomics | Drug-gene interactions |

**Genetic Counseling Principles:**

*Non-Directive Approach:*
- Present options without recommending specific choices
- Support patient autonomy
- Respect diverse values and beliefs

*Confidentiality:*
- Genetic information protected
- GINA provides some protection against discrimination
- Limitations in life/disability/long-term care insurance

**Who Provides Genetic Counseling:**

- Certified Genetic Counselors (CGCs)
- Medical Geneticists (MDs with genetics specialty)
- Advanced practice providers with genetics training
- Other providers with appropriate training (mainstreaming model)`,
      keyTerms: [
        {
          term: "pedigree",
          definition:
            "A diagram of family relationships and medical history used to identify inheritance patterns",
        },
        {
          term: "non-directive counseling",
          definition:
            "Approach that provides information without recommending specific decisions",
        },
        {
          term: "penetrance",
          definition:
            "The proportion of individuals with a genetic variant who develop the associated condition",
        },
        {
          term: "GINA",
          definition:
            "Genetic Information Nondiscrimination Act; US law protecting against genetic discrimination in health insurance and employment",
        },
        {
          term: "CGC",
          definition:
            "Certified Genetic Counselor; credential from the American Board of Genetic Counseling",
        },
      ],
      analogies: [
        "A pedigree is like a family health blueprint - it shows patterns that might not be obvious from one person\"s story alone.",
        "Non-directive counseling is like being a knowledgeable friend who shares information but lets you decide what\"s right for you.",
        "Genetic counseling is like having GPS for a health journey - it shows you where you are, possible routes, and potential obstacles.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Genetic counseling practice integrates clinical genetics expertise with psychosocial assessment, utilizing evidence-based risk assessment tools, facilitating shared decision-making, and addressing the complex implications of genomic information for individuals and families.",
      explanation: `## Professional Practice Framework

### Competencies

**Knowledge Domains:**
- Human genetics and genomics
- Psychosocial counseling
- Healthcare system navigation
- Research methods and evidence appraisal

**Clinical Skills:**
- Contracting and relationship building
- Risk assessment and calculation
- Information provision and education
- Psychosocial assessment and counseling
- Case management and coordination

### Counseling Models

**Reciprocal Engagement Model:**
- Education and information gathering interwoven
- Addresses emotional responses in real-time
- Emphasizes relationship and rapport
- Adapts to patient needs

**Stages of Genetic Counseling:**
| Stage | Focus |
|-------|-------|
| Contracting | Establish agenda, expectations |
| Assessment | Family history, psychosocial |
| Information | Education, risk presentation |
| Decision-making | Options, values clarification |
| Support | Coping, adjustment |
| Follow-up | Coordination, resources |

## Risk Assessment Methodology

### Pedigree Analysis

**Documentation Standards:**
- Standardized symbols (proband, affected, carriers)
- Three generations minimum
- Include: Diagnoses, ages, ages at diagnosis
- Note consanguinity, adoption, assisted reproduction

**Pattern Recognition:**

| Pattern | Features | Examples |
|---------|----------|----------|
| Autosomal dominant | Vertical; 50% recurrence | HD, BRCA |
| Autosomal recessive | Horizontal; 25% recurrence | CF, SCD |
| X-linked | Males affected; carrier females | Hemophilia, DMD |
| Mitochondrial | Maternal transmission | MELAS, LHON |
| Multifactorial | Clustering; variable risk | Diabetes, CHD |

### Bayesian Analysis

**Application:**
- Modifies prior probability based on new information
- Incorporates pedigree data, test results
- Useful for carrier risk calculation

**Components:**
- Prior probability (baseline risk)
- Conditional probability (information that modifies risk)
- Joint probability (prior × conditional)
- Posterior probability (normalized result)

### Risk Models

| Model | Application |
|-------|-------------|
| Claus | BRCA risk without testing |
| Tyrer-Cuzick | Breast cancer risk |
| BRCAPRO | BRCA probability |
| PREMM5 | Lynch syndrome probability |
| CanRisk | Multiple genes |

## Communication Strategies

### Health Literacy

**Principles:**
- Assess understanding continuously
- Use plain language
- Chunk information
- Teach-back verification
- Written materials as supplement

**Numeric Communication:**
- Natural frequencies (1 in 100 vs. 1%)
- Absolute vs. relative risk
- Visual aids (pictographs, icon arrays)
- Framing effects awareness

### Cultural Considerations

**Areas to Address:**
- Health beliefs and practices
- Family structure and decision-making
- Language and interpretation needs
- Cultural views on genetics and disability
- Religious considerations

## Psychosocial Dimensions

### Emotional Responses

**Common Reactions:**
- Anticipatory anxiety
- Guilt (survivor, parental)
- Relief
- Grief and loss
- Identity questions

**Assessment:**
- Prior coping history
- Current stressors
- Support systems
- Mental health history
- Readiness for testing/information

### Decision-Making Support

**Values Clarification:**
- Explore what matters to patient
- Discuss impact on life plans
- Consider family implications
- Assess decision confidence

**Ambivalence:**
- Normal and expected
- Explore both sides
- Time for deliberation
- Return visits as needed`,
      keyTerms: [
        {
          term: "reciprocal engagement model",
          definition:
            "Counseling approach integrating education and emotional support throughout the session",
        },
        {
          term: "Bayesian analysis",
          definition:
            "Statistical method combining prior probability with new information to calculate updated risk",
        },
        {
          term: "teach-back",
          definition:
            "Method of confirming understanding by asking patients to explain information in their own words",
        },
        {
          term: "values clarification",
          definition:
            "Process of exploring what matters most to a patient to support autonomous decision-making",
        },
        {
          term: "contracting",
          definition:
            "Initial process of establishing session goals, expectations, and time frame",
        },
        {
          term: "proband",
          definition:
            "The individual through whom a family is identified for genetic evaluation",
        },
      ],
      clinicalNotes:
        "Pedigree should be updated at each visit as family history evolves. Document reason for referral and specific questions to be addressed. Consider cultural factors that may influence understanding and decision-making. Screen for psychiatric history before presymptomatic testing for adult-onset conditions.",
    },
    4: {
      level: 4,
      summary:
        "Advanced genetic counseling practice addresses complex clinical scenarios including variant interpretation, cascade testing coordination, reproductive counseling for genomic findings, and integration of emerging technologies while maintaining ethical frameworks and psychosocial support.",
      explanation: `## Complex Case Management

### Variant of Uncertain Significance (VUS)

**Counseling Challenges:**
- Uncertainty difficult to communicate
- Risk cannot be precisely defined
- Management implications unclear
- Patient anxiety common

**Approach:**
| Step | Action |
|------|--------|
| Explain | VUS definition; current knowledge limits |
| Contextualize | Prevalence; most are eventually benign |
| Clarify | Should not change medical management |
| Plan | Reclassification monitoring; family studies |

**Reclassification:**
- Encourage laboratory contact updates
- Periodic literature review
- Document in chart for future reference
- Communicate changes to patient

### Cascade Testing Coordination

**Process:**
1. Identify at-risk relatives from pedigree
2. Discuss family communication with proband
3. Provide resources (letters, educational materials)
4. Facilitate direct contact when appropriate
5. Track and document outreach

**Barriers and Solutions:**

| Barrier | Approach |
|---------|----------|
| Family estrangement | Written materials for indirect sharing |
| Geographic distance | Telegenetics; local provider coordination |
| Declination | Document; offer future contact |
| Privacy concerns | Explain protections; address specifically |

### Multi-Gene Panel Results

**Challenges:**
- Multiple findings possible
- VUS more common
- Genes of varying evidence
- Incidental findings

**Interpretation Framework:**
- High-penetrance, actionable genes → Primary focus
- Moderate-penetrance genes → Discuss with caveats
- VUS → Communicate carefully
- Secondary findings → Per patient preference

### Reproductive Counseling Integration

**Scenarios:**
| Finding | Reproductive Considerations |
|---------|----------------------------|
| Carrier status | Partner testing; PGT-M option |
| Autosomal dominant | 50% transmission risk; PGT-M |
| X-linked carrier | 50% male offspring affected; PGT-M |
| Chromosome abnormality | Recurrence risk; PGT-M or PGT-A |

**Options Discussion:**
- Natural conception with prenatal testing
- Preimplantation genetic testing (PGT-M)
- Donor gametes
- Adoption
- Not having children

## Emerging Technology Integration

### Telegenetics

**Applications:**
- Initial consultations
- Results disclosure
- Follow-up visits
- Cascade testing coordination

**Considerations:**
| Advantage | Challenge |
|-----------|-----------|
| Access expansion | Technology barriers |
| Convenience | Non-verbal cues limited |
| Cost reduction | Rapport building |
| Flexibility | Privacy in home setting |

### Genomic Sequencing Counseling

**Pre-Test:**
- Scope of analysis
- Possible findings (including secondary)
- VUS likelihood
- Reanalysis potential

**Post-Test:**
- Result categories
- Actionability assessment
- Secondary findings handling
- Future reanalysis policy

### Polygenic Risk Scores

**Counseling Considerations:**
- Population-level vs. individual prediction
- Cannot be used for diagnosis
- Limited validation in diverse populations
- Modification by lifestyle factors

## Ethical Frameworks

### Testing Minors

**Generally Appropriate:**
- Conditions with childhood onset
- Conditions requiring childhood intervention
- Conditions affecting medical management

**Generally Defer:**
- Adult-onset conditions (HD, BRCA)
- No childhood medical implications
- Preserve child\"s future autonomy

**Mature Minor Considerations:**
- Assess decision-making capacity
- Consider psychological readiness
- Family dynamics

### Duty to Warn

**Tension:**
- Patient confidentiality
- Potential harm to relatives

**Frameworks:**
- Encourage patient-mediated disclosure
- Consider severity and preventability
- Document discussions
- State laws vary

### Incidental and Secondary Findings

**ACMG Recommendations:**
- 81 genes for secondary findings
- Reporting recommended regardless of indication
- Patient can opt out
- Updated periodically

**Counseling:**
- Pre-test discussion of possibility
- Separate consent if needed
- Post-test management for positive findings

## Supervision and Quality

### Documentation Standards

**Essential Elements:**
- Referral reason
- Pedigree (updated)
- Risk assessment methodology
- Information provided
- Options discussed
- Patient questions/concerns
- Psychosocial assessment
- Plan and recommendations

### Outcome Metrics

| Metric | Assessment |
|--------|------------|
| Patient understanding | Knowledge assessment |
| Decision quality | Decision conflict scale |
| Psychosocial | Anxiety/depression screening |
| Satisfaction | Post-visit surveys |

### Supervision Models

**Training:**
- Direct observation
- Case review
- Feedback sessions
- Competency assessment

**Practice:**
- Peer consultation
- Case conferences
- Quality improvement
- Continuing education`,
      keyTerms: [
        {
          term: "duty to warn",
          definition:
            "Ethical and sometimes legal obligation to inform third parties of potential harm, including at-risk relatives",
        },
        {
          term: "PGT-M",
          definition:
            "Preimplantation Genetic Testing for Monogenic disorders; embryo selection for known family variant",
        },
        {
          term: "secondary findings",
          definition:
            "Pathogenic variants in genes unrelated to testing indication but with medical actionability",
        },
        {
          term: "telegenetics",
          definition:
            "Delivery of genetic counseling services via telecommunication technology",
        },
        {
          term: "mature minor",
          definition:
            "Adolescent with demonstrated capacity for decision-making regarding their healthcare",
        },
        {
          term: "decision conflict",
          definition:
            "Uncertainty experienced when choosing between options; measured by validated scales",
        },
      ],
      clinicalNotes:
        "Document VUS counseling thoroughly including explanation that management should not change. Cascade testing letters should include laboratory contact information and note that results may change. For adult-onset conditions in minors, document rationale if testing is performed (e.g., management changes, mature minor).",
    },
    5: {
      level: 5,
      summary:
        "Contemporary genetic counseling practice addresses health system implementation, workforce challenges, diverse service delivery models, and policy considerations while advancing the field through research, education, and leadership.",
      explanation: `## Health System Integration

### Service Delivery Models

**Traditional Model:**
- Referral to genetics clinic
- In-person comprehensive session
- Follow-up coordination
- Limitations: Access, wait times

**Alternative Models:**

| Model | Description | Applications |
|-------|-------------|--------------|
| Mainstreaming | Non-genetics providers order tests | Oncology BRCA testing |
| Embedded | GC within specialty clinic | Cancer center, cardiology |
| Telegenetics | Remote counseling | Rural access, cascade |
| Group counseling | Multiple patients | Prenatal screening education |
| Tiered | Prioritized by complexity | High-volume settings |

### Mainstreaming Considerations

**Prerequisites:**
- Provider education
- Clear protocols
- GC availability for complex cases
- Quality assurance

**Appropriate Cases:**
- Straightforward testing indication
- Limited pre-test counseling needs
- Clear positive/negative results

**Requires GC:**
- Complex family history
- VUS interpretation
- Unexpected findings
- Significant psychosocial concerns

### EHR Integration

**Functionality Needs:**
- Pedigree documentation
- Result storage and display
- Clinical decision support
- Cascade tracking

**Current Limitations:**
- Pedigree tools often inadequate
- Interoperability challenges
- Alert design for genetics

## Workforce Development

### Current State

**Shortage:**
- Geographic maldistribution
- Demand exceeding supply
- Growth in genomic applications

**NSGC Data:**
- ~6,000 practicing GCs (US)
- Growing but insufficient
- Concentrated in academic centers

### Solutions

| Approach | Description |
|----------|-------------|
| Program expansion | More training programs |
| Alternative pathways | Master\"s degree alternatives under discussion |
| Genetic counseling assistants | Task delegation |
| Provider education | Non-GC provider training |
| Technology | AI support tools |

### Career Trajectories

**Clinical Specialization:**
- Cancer genetics
- Prenatal/reproductive
- Cardiovascular
- Neurogenetics
- Laboratory genetics

**Non-Clinical Roles:**
- Industry (pharma, biotech, testing companies)
- Research
- Education
- Policy/advocacy
- Administration

## Research and Evidence Generation

### Outcomes Research Priorities

**Key Questions:**
- Does genetic counseling improve outcomes?
- What are essential components?
- How can services be delivered efficiently?
- What predicts patient outcomes?

**Measurement Challenges:**
- Long-term follow-up needed
- Heterogeneous populations
- Complex interventions
- Comparison groups

### Implementation Science

**Focus Areas:**
- Barriers to testing uptake
- Cascade testing optimization
- Guideline adherence
- Technology adoption

**Frameworks:**
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)
- CFIR (Consolidated Framework for Implementation Research)

## Policy and Advocacy

### Access Issues

**Barriers:**
| Barrier | Impact |
|---------|--------|
| Insurance coverage | Out-of-pocket costs |
| Provider availability | Wait times, distance |
| Health literacy | Understanding, decision quality |
| Language/culture | Interpretation needs |

**Advocacy Areas:**
- Coverage mandates
- Workforce funding
- Research support
- Anti-discrimination protections

### GINA Limitations

**Covered:**
- Health insurance (group and individual)
- Employment

**Not Covered:**
- Life insurance
- Disability insurance
- Long-term care insurance
- Small employers (<15 employees)

**State Laws:**
- Variable additional protections
- Some address life/disability insurance

### Genetic Testing Regulations

**Laboratory Regulation:**
- CLIA certification
- CAP accreditation
- State licensure (NY)

**Direct-to-Consumer:**
- FDA oversight variable
- FTC truth in advertising
- Concerns about quality, interpretation

## Global Perspectives

### International Variation

| Region | GC Status |
|--------|-----------|
| USA | Established profession |
| UK | Established; different training |
| Europe | Variable by country |
| Australia | Established |
| Asia | Developing |
| Latin America | Emerging |

### Harmonization Efforts

**Transnational Alliance:**
- Professional society collaboration
- Competency alignment
- Reciprocity discussions

## Future Directions

### Emerging Roles

**Precision Medicine:**
- Pharmacogenomics implementation
- Risk stratification programs
- Research participation counseling

**Public Health:**
- Population screening programs
- Health disparities initiatives
- Cascade testing systems

### Technology Evolution

**AI and Decision Support:**
- Risk calculation tools
- Variant interpretation aids
- Patient education chatbots
- Surveillance reminders

**Challenges:**
- Maintaining human connection
- Ensuring accuracy
- Equitable access
- Professional identity

### Education Evolution

**Competency Updates:**
- Genomic sequencing
- Technology integration
- Healthcare systems
- Health equity
- Leadership

**Continuing Education:**
- Rapidly evolving field
- Specialty certifications
- Maintenance of certification`,
      keyTerms: [
        {
          term: "mainstreaming",
          definition:
            "Delivery of genetic testing and basic counseling by non-genetics healthcare providers",
        },
        {
          term: "NSGC",
          definition:
            "National Society of Genetic Counselors; primary US professional organization",
        },
        {
          term: "RE-AIM framework",
          definition:
            "Implementation science framework assessing Reach, Effectiveness, Adoption, Implementation, Maintenance",
        },
        {
          term: "genetic counseling assistant",
          definition:
            "Support role performing delegated tasks to extend genetic counselor capacity",
        },
        {
          term: "Transnational Alliance",
          definition:
            "International collaboration of genetic counseling professional societies",
        },
        {
          term: "tiered service model",
          definition:
            "Delivery approach matching counseling intensity to case complexity",
        },
      ],
      clinicalNotes: `Implementation considerations:
1. Assess which patients benefit most from traditional comprehensive counseling vs. streamlined approaches
2. Develop protocols for mainstreaming with clear escalation criteria
3. Track outcome metrics to demonstrate value
4. Address access disparities through telegenetics and diverse delivery models
5. Engage in workforce advocacy and training program support
6. Stay current with policy changes affecting patient access and protections
7. Contribute to outcomes research to strengthen evidence base
8. Mentor next generation and promote diverse pipeline`,
    },
  },

  media: [
    {
      id: "genetic-counseling-process",
      type: "diagram",
      filename: "genetic-counseling-process.svg",
      title: "The Genetic Counseling Process",
      description:
        "Overview of genetic counseling session components and flow",
    },
    {
      id: "pedigree-symbols",
      type: "diagram",
      filename: "pedigree-symbols.svg",
      title: "Standard Pedigree Symbols",
      description:
        "Guide to symbols used in genetic family history diagrams",
    },
  ],

  citations: [
    {
      id: "resta-2006",
      type: "article",
      title:
        "A new definition of genetic counseling: National Society of Genetic Counselors\" Task Force report",
      authors: ["Resta, R.", "et al."],
      source: "Journal of Genetic Counseling",
      chapter: "15",
      page: "77-83",
    },
    {
      id: "nsgc-practice",
      type: "website",
      title: "NSGC Practice Guidelines",
      source: "National Society of Genetic Counselors",
      url: "https://www.nsgc.org",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-risk-assessment",
      targetType: "concept",
      relationship: "child",
      label: "Genetic Risk Assessment",
    },
    {
      targetId: "concept-informed-consent",
      targetType: "concept",
      relationship: "child",
      label: "Informed Consent for Genetic Testing",
    },
    {
      targetId: "concept-genetic-testing-overview",
      targetType: "concept",
      relationship: "related",
      label: "Genetic Testing Overview",
    },
  ],

  tags: {
    systems: ["genetics"],
    topics: [
      "genetic counseling",
      "risk assessment",
      "patient education",
      "shared decision-making",
    ],
    keywords: [
      "genetic counselor",
      "pedigree",
      "family history",
      "informed consent",
      "nondirective",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "obstetrics-gynecology", "pediatrics"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default geneticCounselingOverviewContent;
