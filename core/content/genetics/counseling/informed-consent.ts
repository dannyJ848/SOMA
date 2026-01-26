/**
 * Informed Consent for Genetic Testing - Comprehensive Educational Content
 *
 * Covers the process, elements, and considerations of informed consent
 * for genetic testing across different clinical contexts.
 */

import { EducationalContent } from "../../types";

export const informedConsentContent: EducationalContent = {
  id: "concept-informed-consent",
  type: "concept",
  name: "Informed Consent for Genetic Testing",
  alternateNames: [
    "Genetic Testing Consent",
    "Pre-Test Counseling",
    "Consent Process",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Informed consent for genetic testing means understanding what the test is, what results could mean, and agreeing to have the test done after having your questions answered.",
      explanation: `Before having a genetic test, you have the right to understand what you are agreeing to. This is called "informed consent."

**What should you know before genetic testing?**

1. **What the test is looking for**
   - Which genes are being tested
   - What conditions these genes are related to

2. **What results you might get**
   - Positive (a gene change was found)
   - Negative (no gene change found)
   - Uncertain (a change was found but we do not know what it means)

3. **What results could mean for you**
   - Your health and medical care
   - Screening or prevention options
   - Your family members

4. **Limitations of the test**
   - No test is 100% accurate
   - A negative result may not guarantee you will not get the condition
   - Some results may be uncertain

5. **Privacy and confidentiality**
   - Who will see your results
   - How your information is protected
   - Laws that protect you from discrimination

**Your rights:**

- Ask as many questions as you need
- Take time to think about whether to have testing
- Decide not to have the test (and change your mind later if you want)
- Choose not to receive certain types of results
- Expect your results to be kept private

**The consent process:**

Before testing, a healthcare provider (often a genetic counselor) will:
- Explain the test and what to expect
- Answer your questions
- Make sure you understand
- Document that you agreed to testing

You can usually take time to think about it before deciding.`,
      keyTerms: [
        {
          term: "informed consent",
          definition:
            "Agreement to a medical test or procedure after understanding what it involves and what results could mean",
        },
        {
          term: "genetic test",
          definition:
            "A medical test that looks at your DNA to find changes that might affect your health",
        },
        {
          term: "confidentiality",
          definition:
            "Keeping your personal health information private",
        },
        {
          term: "discrimination",
          definition:
            "Unfair treatment based on personal characteristics like genetic information",
        },
      ],
      analogies: [
        "Informed consent is like reading a map before a trip - you should know where you are going and what you might find along the way.",
        "Signing consent without understanding is like agreeing to a contract without reading it - you need to know what you are agreeing to.",
        "The consent discussion is like a two-way conversation, not a lecture - you can ask questions and take time to decide.",
      ],
      examples: [
        "A woman considering BRCA testing discusses with her genetic counselor what a positive result would mean for her and her sisters.",
        "A couple learns that carrier testing could reveal if they are both carriers for conditions that could affect their future children.",
        "A person decides to wait a few weeks before agreeing to genetic testing so they have time to think about the implications.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Informed consent for genetic testing involves a comprehensive discussion of test indications, possible results and their implications, risks and benefits, limitations, privacy protections, and alternatives, ensuring patient understanding and autonomous decision-making.",
      explanation: `Informed consent for genetic testing goes beyond simply signing a form. It is a process ensuring patients understand testing implications and make autonomous decisions.

**Core Elements of Informed Consent:**

**1. Information Provision**

| Element | Description |
|---------|-------------|
| Purpose | Why testing is being offered |
| Procedure | How the test is performed |
| Genes/conditions | What is being tested |
| Results | Possible outcomes and meanings |
| Accuracy | Test sensitivity, specificity |
| Implications | Medical, psychological, family |
| Limitations | What test cannot tell you |
| Alternatives | Other options including not testing |

**2. Possible Results**

| Result Type | Meaning |
|-------------|---------|
| Positive/Pathogenic | Disease-causing variant found |
| Negative | No variant found; interpretation depends on context |
| VUS | Variant of uncertain significance |
| Incidental/Secondary | Findings unrelated to test indication |

**3. Implications to Discuss**

*Medical:*
- Screening recommendations
- Prevention options
- Treatment implications

*Psychological:*
- Emotional impact
- Impact on self-image
- Coping considerations

*Family:*
- Implications for relatives
- Duty to inform family members
- Family communication challenges

**4. Privacy and Legal Protections**

*GINA (Genetic Information Nondiscrimination Act):*
- Protects against discrimination in health insurance and employment
- Does NOT cover life, disability, or long-term care insurance

*HIPAA:*
- Protects health information privacy
- Genetic information included

**5. Special Considerations**

*Panel Testing:*
- May reveal unexpected findings
- Higher VUS rate
- Genes with uncertain clinical utility

*Whole Exome/Genome Sequencing:*
- Secondary findings possible
- Option to opt out of some results
- Reanalysis potential

**6. Documentation**

The consent process should document:
- Information provided
- Questions asked and answered
- Patient understanding confirmed
- Decision (consent or decline)`,
      keyTerms: [
        {
          term: "autonomous decision-making",
          definition:
            "Making choices based on personal values after understanding available information",
        },
        {
          term: "VUS",
          definition:
            "Variant of Uncertain Significance; a genetic change whose impact on health is not yet known",
        },
        {
          term: "GINA",
          definition:
            "Genetic Information Nondiscrimination Act; US law protecting against genetic discrimination",
        },
        {
          term: "secondary findings",
          definition:
            "Genetic results unrelated to the reason for testing but with potential health implications",
        },
        {
          term: "HIPAA",
          definition:
            "Health Insurance Portability and Accountability Act; law protecting health information privacy",
        },
      ],
      analogies: [
        "Informed consent is like a pre-flight safety briefing - it covers what you need to know before taking off on this journey.",
        "A VUS is like a word you do not recognize - it might be important, but we need more information to understand what it means.",
        "GINA is like a partial umbrella - it provides some protection but does not cover everything.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Informed consent for genetic testing requires addressing test characteristics, variant interpretation complexity, psychosocial readiness, family implications, legal protections and limitations, and special considerations for prenatal, pediatric, and presymptomatic testing contexts.",
      explanation: `## Consent Process Components

### Pre-Test Counseling Structure

**Agenda Setting:**
- Assess patient knowledge and expectations
- Establish session goals
- Identify specific concerns

**Information Exchange:**
| Topic | Key Points |
|-------|------------|
| Test mechanics | Sample type, turn-around time |
| Analytical validity | Detection rate, methodology |
| Clinical validity | Sensitivity, PPV, NPV |
| Clinical utility | Impact on management |
| Results spectrum | Positive, negative, VUS, incidental |

**Decision Support:**
- Values clarification
- Explore ambivalence
- Address emotional reactions
- Ensure understanding (teach-back)

### Result-Specific Counseling

**Negative Results:**
- Uninformative vs. true negative
- Residual risk after negative test
- Empiric risk may persist
- Family testing implications

**Positive Results:**
- Penetrance and expressivity
- Risk modification options
- Cascade testing recommendations
- Resources and support

**VUS:**
- Explain uncertainty
- Should not change management
- Reclassification possibility
- Family studies potential utility

**Secondary Findings:**
- ACMG recommended genes
- Patient choice to receive or not
- Return of results process

### Special Testing Contexts

**Presymptomatic Testing:**

| Consideration | Approach |
|---------------|----------|
| Psychological readiness | Assess coping, support |
| Timing | Not during crisis |
| Multi-visit model | Consider for HD-type testing |
| Support person | Encourage accompaniment |

**Pediatric Testing:**

| Scenario | Guidance |
|----------|----------|
| Childhood-onset | Generally appropriate |
| Adult-onset | Generally defer to adulthood |
| Carrier status | Defer unless reproductive implications |
| Research | Special protections apply |

**Prenatal Testing:**

| Element | Discussion |
|---------|------------|
| Options | Screening vs. diagnostic |
| Timing | Decision windows |
| Results implications | Pregnancy management options |
| Partner involvement | When appropriate |

### Psychosocial Assessment

**Readiness Factors:**
- Decision-making capacity
- Emotional stability
- Support systems
- Understanding of implications

**Risk Factors:**
- History of depression/anxiety
- Recent major stressors
- Complicated family dynamics
- Unrealistic expectations

**Interventions:**
- Delay testing if significant concerns
- Provide resources
- Coordinate with mental health
- Follow-up plan

## Legal and Ethical Framework

### GINA Protections and Limitations

**Covered:**
- Health insurance (individual and group)
- Employment (hiring, firing, terms)

**NOT Covered:**
- Life insurance
- Disability insurance
- Long-term care insurance
- Military (TRICARE exceptions exist)
- Employers with <15 employees

### State Variations

- Some states have broader protections
- Genetic counselor should know local laws
- May influence consent discussion

### Research Considerations

**Additional Requirements:**
- IRB approval
- Specific research consent
- Certificate of Confidentiality
- GINA research provisions

## Documentation Standards

### Essential Documentation

| Element | Purpose |
|---------|---------|
| Reason for testing | Clinical indication |
| Information provided | Liability protection |
| Questions/concerns | Demonstrates engagement |
| Understanding confirmed | Required for valid consent |
| Decision | Consent or decline |
| Signature | Legal documentation |

### Electronic Consent

- Increasingly common
- Must maintain same standards
- Consider accessibility
- Verify identity appropriately`,
      keyTerms: [
        {
          term: "analytical validity",
          definition:
            "Accuracy of a test in detecting the genetic variant it is designed to find",
        },
        {
          term: "clinical validity",
          definition:
            "Accuracy of a test in predicting the presence or risk of a clinical condition",
        },
        {
          term: "clinical utility",
          definition:
            "Whether test results lead to improved health outcomes",
        },
        {
          term: "teach-back",
          definition:
            "Method of confirming understanding by having patient explain information in their own words",
        },
        {
          term: "presymptomatic testing",
          definition:
            "Testing healthy individuals for genetic conditions that may manifest later",
        },
        {
          term: "Certificate of Confidentiality",
          definition:
            "Protection preventing researchers from being compelled to disclose identifying information",
        },
      ],
      clinicalNotes:
        "For presymptomatic testing of adult-onset conditions (especially HD), consider multi-visit protocol with psychiatric evaluation. Document VUS counseling thoroughly, including that management should not change. Ensure patients understand GINA limitations before testing.",
    },
    4: {
      level: 4,
      summary:
        "Advanced informed consent practice addresses multi-gene panel complexity, secondary findings policies, evolving variant interpretation, novel testing technologies, and diverse service delivery models while maintaining ethical principles and regulatory compliance.",
      explanation: `## Complex Consent Scenarios

### Multi-Gene Panel Testing

**Consent Challenges:**

| Challenge | Approach |
|-----------|----------|
| Multiple genes | Tier by evidence level |
| VUS prevalence | Quantify likelihood (20-40%) |
| Moderate-penetrance | Discuss evolving management |
| Gene discovery | Address future reclassification |

**Tiered Consent Approach:**
1. Primary genes (indication-specific)
2. Extended genes (related conditions)
3. Moderate-penetrance
4. Research genes

### Whole Exome/Genome Sequencing

**Pre-Test Discussion:**

| Topic | Considerations |
|-------|----------------|
| Scope | What is analyzed vs. available |
| Secondary findings | ACMG list; patient choice |
| Incidental findings | Policy discussion |
| VUS | High volume expected |
| Reanalysis | Future potential |
| Data storage | Duration, access |

**Secondary Findings Options:**
- Full list disclosure
- Partial disclosure
- No disclosure
- Separate consent for categories

### Somatic Tumor Testing

**Germline Implications:**
- May detect presumed germline variants
- Requires confirmatory germline testing
- Consent should address possibility
- Family implications apply

**Dual Consent:**
- Tumor testing consent
- Potential germline finding disclosure
- Germline confirmation testing

### Direct-to-Consumer Testing

**Re-Consent in Clinical Context:**
- Verify understanding of prior results
- Discuss limitations of DTC testing
- Clinical-grade confirmation if actionable
- Address incidental findings

## Evolving Consent Practices

### Dynamic Consent

**Concept:**
- Ongoing engagement rather than single event
- Allows preference updates
- Particularly relevant for research
- Technology-enabled

**Components:**
| Element | Function |
|---------|----------|
| Initial consent | Baseline preferences |
| Notification system | Alert to relevant developments |
| Preference update | Allow changes over time |
| Withdrawal option | Easy process |

### Reanalysis and Recontact

**Policy Considerations:**
- Variant reclassification responsibility
- Reanalysis frequency
- Patient notification process
- Resource implications

**Consent Elements:**
- Explain reanalysis possibility
- Preference for future contact
- Responsibility clarification

### Biobank Consent

**Special Considerations:**
| Topic | Approach |
|-------|----------|
| Future unspecified research | Broad vs. specific consent |
| Secondary use | Commercial, international |
| Return of results | Policy and capability |
| Withdrawal | Data already used |

## Regulatory Compliance

### Laboratory Reporting Requirements

**CLIA/CAP Standards:**
- Appropriate use statements
- Interpretation guidance
- Limitations clearly stated
- Patient-directed reports

### FDA Considerations

**Regulated Tests:**
- Some require specific indications
- Reporting restrictions may apply
- Off-label use documentation

### State Requirements

**Variations:**
| State | Requirement |
|-------|-------------|
| NY | State-approved tests only |
| Some states | Written consent required |
| Some states | Enhanced genetic privacy |

## Quality Assurance

### Consent Process Evaluation

**Metrics:**
| Metric | Assessment Method |
|--------|-------------------|
| Understanding | Knowledge assessment |
| Decision quality | Decision conflict scale |
| Satisfaction | Post-visit survey |
| Documentation | Chart audit |

### Audit Elements

**Review for:**
- Essential elements present
- Documentation complete
- Understanding verified
- Special circumstances addressed

### Continuous Improvement

- Track outcome measures
- Identify process gaps
- Implement improvements
- Staff training

## Service Delivery Variations

### Mainstreamed Consent

**Non-Genetics Provider Considerations:**
- Abbreviated consent appropriate for some tests
- Clear indication and limitations
- Referral criteria for complex cases
- Decision support tools

### Telehealth Consent

**Special Considerations:**
| Issue | Solution |
|-------|----------|
| Identity verification | Confirm patient identity |
| Technology barriers | Assess capability |
| Documentation | Electronic signature |
| Visual aids | Screen sharing |

### Group Education Models

**Appropriate For:**
- Prenatal screening education
- Carrier screening overview
- General information sessions

**Follow Individual:**
- Personal risk discussion
- Decision-making
- Consent documentation`,
      keyTerms: [
        {
          term: "dynamic consent",
          definition:
            "Ongoing consent process allowing preference updates over time, often technology-enabled",
        },
        {
          term: "tiered consent",
          definition:
            "Approach offering different levels of result disclosure based on patient preference",
        },
        {
          term: "recontact",
          definition:
            "Process of contacting patients about new information relevant to their genetic results",
        },
        {
          term: "broad consent",
          definition:
            "Consent for future unspecified research uses of samples or data",
        },
        {
          term: "mainstreaming",
          definition:
            "Delivery of genetic testing by non-genetics specialists",
        },
        {
          term: "decision conflict scale",
          definition:
            "Validated measure of uncertainty and factors affecting decision quality",
        },
      ],
      clinicalNotes:
        "Establish institutional policy for secondary findings before implementing WES/WGS. Document patient preferences for tiered result disclosure. For reanalysis, clarify laboratory vs. clinical responsibility. Track consent quality metrics for QI purposes.",
    },
    5: {
      level: 5,
      summary:
        "State-of-the-art informed consent integrates precision medicine complexity, health equity considerations, digital consent innovations, international frameworks, and evolving ethical standards while preparing for emerging technologies and population-scale genomic programs.",
      explanation: `## Precision Medicine Era Consent

### Integrated Consent Models

**Multi-Omic Testing:**
| Data Type | Consent Consideration |
|-----------|----------------------|
| Genomics | Standard PGx elements |
| Proteomics | Research status |
| Metabolomics | Clinical utility emerging |
| Microbiome | Variable interpretation |

**Pharmacogenomics:**
- Pre-emptive panel consent
- Lifetime results
- Future drug implications
- EHR integration

### AI-Assisted Interpretation

**Emerging Considerations:**
| Issue | Consent Implication |
|-------|---------------------|
| Algorithm use | Transparency |
| Uncertainty | May be quantified differently |
| Updates | Results may change |
| Bias | Population limitations |

### Polygenic Risk Scores

**Consent Challenges:**
- Probabilistic, not diagnostic
- Population-specific validity
- Clinical utility evolving
- Interpretation complexity

**Discussion Elements:**
- What PRS can and cannot tell
- Population limitations
- Research status of clinical use
- Integration with other risk factors

## Health Equity in Consent

### Addressing Disparities

**Barriers:**
| Barrier | Approach |
|---------|----------|
| Language | Professional interpretation |
| Literacy | Plain language, visual aids |
| Cultural | Culturally informed approach |
| Trust | Acknowledge historical context |

### Diverse Population Considerations

**VUS Disparities:**
- Higher VUS rates in underrepresented groups
- Must explain in consent
- Implications for interpretation

**Ancestry and Results:**
- Penetrance data may be ancestry-specific
- PRS validation varies by population
- Acknowledge limitations

### Community Engagement

**Best Practices:**
- Community advisory input
- Culturally adapted materials
- Trust-building approaches
- Feedback incorporation

## Digital and Technological Innovation

### Digital Consent Platforms

**Features:**
| Feature | Benefit |
|---------|---------|
| Multimedia | Enhanced understanding |
| Interactive | Engagement, comprehension check |
| Accessible | Multiple formats |
| Trackable | Documentation, analytics |

**Validation:**
- Comprehension assessment
- Satisfaction surveys
- Outcome tracking
- Equity assessment

### Blockchain Applications

**Potential Uses:**
- Consent tracking
- Data access logging
- Patient control
- Research consent management

### Patient Portals

**Integration:**
- Consent status visible
- Preference updates
- Result access
- Educational resources

## International Frameworks

### Global Variation

| Region | Framework |
|--------|-----------|
| USA | GINA, state laws |
| EU | GDPR, national laws |
| UK | UK GDPR, specific genetics legislation |
| Canada | PIPEDA, provincial |

### Cross-Border Considerations

**Challenges:**
- Testing across jurisdictions
- Data transfer
- Regulatory compliance
- Standard harmonization

### WHO Guidance

**Principles:**
- Informed consent essential
- Cultural appropriateness
- Confidentiality protection
- Non-discrimination

## Population-Scale Genomics

### Screening Program Consent

**Examples:**
| Program | Consent Approach |
|---------|------------------|
| Newborn screening | Varies by state; sometimes opt-out |
| Research biobanks | Broad consent models |
| National programs | Tailored frameworks |

### Public Engagement

**Elements:**
- Population education
- Stakeholder input
- Transparency
- Trust building

### Return of Results at Scale

**Challenges:**
| Challenge | Approach |
|-----------|----------|
| Volume | Digital delivery |
| Interpretation | Decision support |
| Follow-up | Tiered model |
| Counseling | Alternative models |

## Emerging Technologies

### Gene Therapy Consent

**Special Elements:**
| Element | Consideration |
|---------|---------------|
| Experimental nature | Research consent |
| Long-term effects | Unknown risks |
| Monitoring | Follow-up requirements |
| Cost | Financial counseling |

### Germline Editing

**Future Considerations:**
- Currently not clinical
- Ethical debates ongoing
- Intergenerational implications
- International variation in permissibility

### Embryo Testing Advances

**PGT Consent:**
- Embryo selection implications
- Mosaicism detection
- Polygenic embryo screening (controversial)
- Ethical considerations

## Quality and Safety

### Outcome Measurement

**Key Outcomes:**
| Outcome | Measure |
|---------|---------|
| Understanding | Knowledge assessment |
| Decision quality | Validated scales |
| Regret | Decision regret scale |
| Psychological | Anxiety, distress |
| Health | Clinical outcomes |

### Safety Events

**Monitoring:**
- Consent failures
- Misunderstanding reports
- Adverse psychological outcomes
- Regulatory reports

### Continuous Learning

**System Improvements:**
- Outcome tracking
- Process evaluation
- Staff training
- Material updates`,
      keyTerms: [
        {
          term: "multi-omic testing",
          definition:
            "Comprehensive analysis of multiple biological data types (genome, proteome, metabolome, etc.)",
        },
        {
          term: "GDPR",
          definition:
            "General Data Protection Regulation; European data privacy law with genetic data provisions",
        },
        {
          term: "broad consent",
          definition:
            "Consent model for future unspecified research uses of samples/data",
        },
        {
          term: "germline editing",
          definition:
            "Genetic modification of reproductive cells or embryos, with heritable changes",
        },
        {
          term: "decision regret scale",
          definition:
            "Validated measure of post-decision satisfaction or regret",
        },
        {
          term: "polygenic embryo screening",
          definition:
            "Controversial application of PRS to embryo selection in IVF",
        },
      ],
      clinicalNotes: `Implementation priorities:
1. Develop population-appropriate consent materials with community input
2. Implement digital consent with accessibility features
3. Establish clear policies for emerging technologies before clinical use
4. Track consent quality metrics and act on findings
5. Train staff on evolving consent requirements
6. Engage with policy discussions on population screening
7. Prepare for AI-interpreted results and their consent implications
8. Address equity in all consent processes`,
    },
  },

  media: [
    {
      id: "consent-process-flowchart",
      type: "diagram",
      filename: "genetic-consent-process.svg",
      title: "Informed Consent Process for Genetic Testing",
      description:
        "Flowchart showing steps in the genetic testing consent process",
    },
    {
      id: "gina-coverage",
      type: "diagram",
      filename: "gina-protections.svg",
      title: "GINA Protections and Limitations",
      description:
        "Visual summary of what GINA does and does not cover",
    },
  ],

  citations: [
    {
      id: "acmg-informed-consent",
      type: "article",
      title:
        "Points to consider for informed consent for genome/exome sequencing",
      authors: ["ACMG Board of Directors"],
      source: "Genetics in Medicine",
      chapter: "15",
      page: "748-749",
    },
    {
      id: "nsgc-consent",
      type: "website",
      title: "Position Statement on Genetic Testing",
      source: "National Society of Genetic Counselors",
      url: "https://www.nsgc.org",
    },
  ],

  crossReferences: [
    {
      targetId: "concept-genetic-counseling-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Genetic Counseling Overview",
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
      "informed consent",
      "genetic testing",
      "patient rights",
      "privacy",
    ],
    keywords: [
      "consent",
      "GINA",
      "genetic discrimination",
      "VUS",
      "secondary findings",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default informedConsentContent;
