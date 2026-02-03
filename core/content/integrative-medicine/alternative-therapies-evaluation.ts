/**
 * Alternative Therapies Evaluation - Educational Content
 *
 * Comprehensive content covering when alternative therapies help
 * versus harm and how to critically evaluate them.
 */

import { EducationalContent } from "../types";

export const alternativeTherapiesEvaluation: EducationalContent = {
  id: "integrative-medicine-alternative-therapies-evaluation",
  type: "concept",
  name: "When Alternative Therapies Help vs Harm",
  alternateNames: [
    "Evaluating Alternative Medicine",
    "CAM Critical Evaluation",
    "Alternative Therapy Assessment",
    "Complementary Medicine Benefits and Risks",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Some alternative treatments can help, while others do not work or may even hurt you. Learning to tell the difference can protect your health and your wallet.",
      explanation: `**Why does this matter?**
There are many treatments outside of regular medicine that people try. Some can really help, but others waste your money or could make you sicker. Knowing how to evaluate these treatments helps you make good choices.

**When alternative therapies CAN help:**
- When there is scientific evidence they work
- When they are used TOGETHER with regular medical care
- When they are safe and do not interfere with your other treatments
- For conditions like stress, some types of pain, and nausea

**When alternative therapies can HARM:**
- When people skip proven medical treatments for unproven alternatives
- When "natural" products interact badly with medicines
- When treatments are done by untrained people
- When someone promises to "cure" serious diseases

**Red flags to watch for:**
- Promises that sound too good to be true
- Claims that a treatment cures many different diseases
- Pressure to buy expensive products or long treatment packages
- Being told to keep the treatment secret from your doctor
- Attacking regular medicine as "poison" or harmful

**Good questions to ask:**
- Has this been studied scientifically?
- What are the possible side effects?
- Can I use this along with my regular treatment?
- What training does the practitioner have?
- How much will this cost?

**Remember:**
- "Natural" does not mean safe
- Popular does not mean effective
- Always tell your doctor about everything you are taking or trying`,
      keyTerms: [
        {
          term: "evidence",
          definition: "Proof from scientific studies that something actually works",
        },
        {
          term: "side effects",
          definition: "Unwanted effects that a treatment might cause",
        },
        {
          term: "interaction",
          definition: "When two treatments affect each other, sometimes in harmful ways",
        },
      ],
      analogies: [
        "Evaluating alternative therapies is like checking reviews before buying something online - you want to know if it really works before spending your money.",
        "Using unproven treatments instead of proven medicine is like taking a shortcut on a map that has not been checked - you might end up lost.",
      ],
      examples: [
        "Yoga for stress has good evidence and is generally safe - this is an example of a helpful alternative therapy.",
        "Drinking bleach products to cure diseases has NO evidence and is extremely dangerous - this is an example of a harmful alternative therapy.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Evaluating alternative therapies requires assessing evidence quality, safety profiles, potential interactions, and the risk of delaying effective conventional treatment for serious conditions.",
      explanation: `**Framework for Evaluation:**

*Evidence Assessment:*
- Has the therapy been studied in clinical trials?
- Are the studies well-designed (randomized, controlled)?
- Have results been replicated by different researchers?
- What do systematic reviews and meta-analyses say?

*Safety Evaluation:*
- What are known side effects?
- Are there drug interactions?
- Is the practitioner trained and licensed?
- What are the contraindications?

*Risk-Benefit Analysis:*
- How serious is the condition being treated?
- What are the consequences of delaying conventional treatment?
- What are the potential benefits vs. harms?
- What are the financial costs?

**When Alternative Therapies Can Help:**

*Low-Risk, Evidence-Supported Uses:*
- Mind-body practices for stress and anxiety
- Acupuncture for chronic pain
- Massage for musculoskeletal problems
- Probiotics for certain digestive issues

*Appropriate Integration:*
- Used alongside conventional treatment
- Doctor is informed and involved
- Conditions are monitored
- No delay in necessary medical care

**When Alternative Therapies Cause Harm:**

*Direct Harms:*
- Toxic herbs (e.g., aristolochic acid, comfrey)
- Contaminated supplements
- Injuries from improper manipulation
- Adverse effects from mega-dose vitamins

*Indirect Harms:*
- Delaying cancer treatment for "natural" alternatives
- Replacing proven medications (insulin, heart medications)
- Drug-herb interactions (St. John's Wort + medications)
- Financial exploitation

*Psychological Harms:*
- False hope from unproven cures
- Guilt when alternative treatment "fails"
- Damaged relationship with healthcare providers
- Social isolation in alternative medicine communities

**Red Flags for Harmful Treatments:**

*Claims to Watch Out For:*
- "Cures" or "miracles"
- Treats many unrelated conditions
- "Suppressed" by mainstream medicine
- "Detoxifies" or "cleanses"
- "Boosts immune system" (non-specific)
- Based on "ancient wisdom" alone

*Business Practices Warning Signs:*
- High-pressure sales tactics
- Requires expensive ongoing purchases
- Multi-level marketing structure
- Discourages seeking other opinions
- Attacks conventional medicine

**Drug-Supplement Interactions:**

*Common Dangerous Interactions:*
- St. John's Wort: Birth control, antidepressants, blood thinners
- Ginkgo: Blood thinners, increases bleeding risk
- Kava: Liver damage, sedatives
- Grapefruit: Many medications metabolized by liver

*Why Interactions Occur:*
- Herbal products contain active chemicals
- These can affect how drugs are absorbed or metabolized
- Effects may increase or decrease medication levels
- Some combinations can be life-threatening

**Making Good Decisions:**

*Questions to Ask:*
1. What is the evidence this works for my condition?
2. What are the risks and side effects?
3. Will this interact with my medications?
4. What does my doctor think?
5. What are the qualifications of the practitioner?
6. What will this cost over time?

*Reliable Information Sources:*
- NCCIH (nccih.nih.gov)
- Natural Medicines Database
- MedlinePlus
- Cochrane Reviews`,
      keyTerms: [
        {
          term: "clinical trial",
          definition: "A scientific study testing whether a treatment works in people",
        },
        {
          term: "drug-herb interaction",
          definition: "When herbal products change how medications work in the body",
        },
        {
          term: "direct harm",
          definition: "Injury caused directly by the alternative treatment itself",
        },
        {
          term: "indirect harm",
          definition: "Injury caused by delaying or avoiding effective conventional treatment",
        },
      ],
      analogies: [
        "Drug-herb interactions are like mixing cleaning products - some combinations that seem harmless can be dangerous.",
        "Choosing treatments without evidence is like choosing a parachute without checking if it works - the stakes are too high to guess.",
      ],
      examples: [
        "A patient taking warfarin (blood thinner) who adds ginkgo supplements without telling their doctor could experience dangerous bleeding.",
        "Someone with early-stage cancer who delays surgery to try an herbal \"cure\" may miss the window for effective treatment.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Critical evaluation of alternative therapies involves applying evidence-based medicine principles, understanding mechanisms of apparent efficacy, and recognizing patterns of harm including treatment delay, direct toxicity, and exploitation.",
      explanation: `**Evidence Evaluation Framework:**

*Hierarchy of Evidence:*
1. Systematic reviews and meta-analyses
2. Randomized controlled trials
3. Controlled trials without randomization
4. Cohort and case-control studies
5. Case series and reports
6. Expert opinion, mechanistic reasoning

*Evaluating CAM Research:*
- Study quality often poor
- Positive publication bias
- Small sample sizes common
- Blinding challenges
- Practitioner variability
- Heterogeneity of interventions

*Specific vs. Non-specific Effects:*
- Placebo response substantial in CAM
- Contextual effects (therapeutic relationship, ritual)
- Regression to the mean
- Natural disease course
- Separating components challenging

**Mechanisms of Apparent Efficacy:**

*Why Ineffective Treatments Seem to Work:*
- Placebo effect (powerful for subjective symptoms)
- Natural disease fluctuation
- Regression to the mean
- Concurrent conventional treatment
- Confirmation bias
- Reinterpretation of symptoms

*Cognitive Biases:*
- Anecdotal evidence weighted heavily
- Memorable successes, forgotten failures
- Post hoc reasoning
- Sunk cost fallacy
- In-group trust of testimonials

**Patterns of Harm:**

*Direct Toxicity:*
- Hepatotoxicity (kava, comfrey, pyrrolizidine alkaloids)
- Nephrotoxicity (aristolochic acid)
- Contamination (heavy metals, pesticides, drugs)
- Adulteration (undeclared pharmaceuticals)
- Dosing variability

*Treatment Interaction Mechanisms:*
- CYP450 enzyme induction/inhibition
- P-glycoprotein effects
- Pharmacodynamic interactions
- Altered drug absorption
- Additive effects

*Major Drug-Herb Interactions:*
| Herb | Drugs Affected | Mechanism |
|------|---------------|-----------|
| St. John's Wort | Many (SSRIs, warfarin, contraceptives, cyclosporine) | CYP3A4/P-gp induction |
| Ginkgo | Anticoagulants | Platelet inhibition |
| Ginseng | Warfarin, insulin | Various |
| Grapefruit | Statins, calcium blockers | CYP3A4 inhibition |

*Indirect Harms:*
- Treatment delay in serious illness
- Missed diagnoses
- Non-adherence to proven treatments
- Financial exploitation
- Psychological harm

**Risk-Benefit Analysis:**

*Factors Favoring Trial of CAM:*
- Low-risk intervention
- Some supporting evidence
- Conventional options exhausted
- Non-serious condition
- Patient-centered reasons
- Integrated with conventional care

*Factors Against CAM Use:*
- Serious condition with effective treatment
- High-risk intervention
- No evidence of efficacy
- Delays necessary treatment
- Financial burden
- Drug interaction potential

**Recognizing Exploitation:**

*Characteristics of Quackery:*
- Cure-all claims
- Conspiracy theories (suppressed cures)
- Testimonials as primary evidence
- Attacks on mainstream medicine
- Appeals to nature or tradition
- Financial manipulation

*Vulnerable Populations:*
- Patients with incurable diseases
- Those dissatisfied with conventional care
- Cultural beliefs favoring "natural"
- Limited health literacy
- Financial desperation

**Patient Communication:**

*Non-judgmental Assessment:*
- Ask about CAM use routinely
- Understand patient motivations
- Acknowledge legitimate concerns
- Provide evidence-based information
- Maintain therapeutic relationship

*Harm Reduction Approach:*
- Prioritize preventing serious harm
- Address critical safety issues first
- Negotiate acceptable compromise
- Maintain monitoring and follow-up`,
      keyTerms: [
        {
          term: "CYP450",
          definition: "Cytochrome P450 liver enzymes responsible for metabolizing many drugs",
        },
        {
          term: "regression to the mean",
          definition: "Statistical tendency for extreme values to move toward average over time",
        },
        {
          term: "hepatotoxicity",
          definition: "Liver toxicity or damage caused by substances",
        },
        {
          term: "P-glycoprotein",
          definition: "Membrane transporter that affects drug absorption and distribution",
        },
      ],
      clinicalNotes:
        "Screen all patients for CAM use, including supplements. Document in medical record. Check for interactions before prescribing. For patients using unproven treatments for serious conditions, maintain relationship while clearly communicating risks. Prioritize preventing most serious harms while respecting patient autonomy.",
    },
    4: {
      level: 4,
      summary:
        "Advanced evaluation integrates pharmacovigilance, implementation of shared decision-making, ethical frameworks for discussing unproven treatments, and system-level approaches to quality assurance and patient safety.",
      explanation: `**Pharmacovigilance for Natural Products:**

*Regulatory Framework:*
- DSHEA 1994 limits FDA pre-market authority
- Post-market surveillance primary mechanism
- MedWatch adverse event reporting
- Dietary Supplement and Nonprescription Drug Consumer Protection Act
- Manufacturer responsible for safety

*Quality Concerns:*
- No standardized manufacturing requirements
- USP, NSF voluntary certification
- ConsumerLab independent testing
- Content variability documented
- Contamination/adulteration reports

*Common Adulterants Found:*
- Sildenafil in "natural" male enhancement
- Weight loss products with sibutramine
- Heavy metals in Ayurvedic products
- Steroids in muscle-building supplements
- Synthetic drugs in herbal products

**Drug-Supplement Interaction Database:**

*Key Resources:*
- Natural Medicines Database (subscription)
- Lexicomp drug interactions
- Micromedex
- FDA MedWatch
- Clinical Pharmacology

*High-Risk Combinations:*
- Narrow therapeutic index drugs + CYP modulators
- Anticoagulants + supplements affecting coagulation
- Immunosuppressants + immune modulators
- Chemotherapy + antioxidants (theoretical concern)

**Ethical Framework:**

*Autonomy vs. Beneficence:*
- Patient right to make informed choices
- Provider duty to prevent harm
- Honest communication of evidence
- Avoiding paternalism while ensuring safety

*Disclosure and Informed Decision-Making:*
- Explain evidence honestly (including limitations)
- Discuss both specific and non-specific effects
- Present conventional alternatives
- Acknowledge uncertainty

*Challenging Scenarios:*
- Patient refusing proven treatment for CAM
- Parents choosing CAM for children
- Terminal illness and experimental treatments
- Cultural practices with health implications

**Shared Decision-Making Process:**

*Elements:*
1. Explore patient values and preferences
2. Present evidence clearly (including uncertainty)
3. Discuss potential benefits and harms
4. Consider alternatives
5. Reach mutually acceptable plan
6. Plan for monitoring and follow-up

*Communication Techniques:*
- Open, non-judgmental inquiry
- Avoid confrontation
- Acknowledge what draws patient to CAM
- Build on areas of agreement
- Maintain relationship for ongoing influence

**System-Level Approaches:**

*Quality Assurance:*
- Credentialing of CAM practitioners
- Integration within health systems
- Electronic health record documentation
- Formulary management for supplements
- Pharmacy verification

*Patient Safety Systems:*
- Drug-herb interaction alerts
- Supplement documentation in EHR
- Pre-operative supplement screening
- Oncology treatment protocols

*Educational Initiatives:*
- Provider education on CAM
- Patient health literacy
- Evidence-based information resources
- Shared decision-making tools

**Specific Clinical Scenarios:**

*Cancer and CAM:*
- High prevalence of CAM use in cancer patients
- Risk of treatment interactions
- Importance of oncology-specific assessment
- Memorial Sloan Kettering About Herbs database
- Integration in supportive care

*Mental Health and CAM:*
- St. John's Wort interactions with many psychiatric medications
- Some supplements (omega-3, SAMe) have evidence for depression
- Meditation/mindfulness evidence-based for many conditions
- Kava concerns for anxiety (hepatotoxicity)

*Cardiovascular Disease:*
- Fish oil evidence mixed
- CoQ10 for statin myopathy (limited evidence)
- Red yeast rice contains lovastatin
- Interaction concerns with anticoagulants

**Documentation Requirements:**

*Medical Record Documentation:*
- All supplements and herbal products
- Doses and frequency
- Duration of use
- Discussion of risks
- Recommendations provided
- Patient understanding confirmed`,
      keyTerms: [
        {
          term: "DSHEA",
          definition: "Dietary Supplement Health and Education Act - 1994 law limiting FDA supplement regulation",
        },
        {
          term: "pharmacovigilance",
          definition: "Science of detecting, assessing, and preventing adverse effects",
        },
        {
          term: "narrow therapeutic index",
          definition: "Drugs where small dose changes significantly affect efficacy or toxicity",
        },
        {
          term: "shared decision-making",
          definition: "Process where clinicians and patients jointly make healthcare decisions",
        },
      ],
      clinicalNotes:
        "Implement systematic supplement documentation in EHR. Check interaction databases before prescribing high-risk medications. For oncology patients, coordinate with integrative medicine specialists. Use shared decision-making framework when patients interested in unproven treatments. Maintain relationship and monitoring even when disagreeing with patient choices.",
    },
    5: {
      level: 5,
      summary:
        "Comprehensive evaluation of alternative therapies integrates research methodology critique, regulatory policy analysis, implementation science for safety systems, and ethical frameworks for managing therapeutic uncertainty across diverse clinical contexts.",
      explanation: `**Research Methodology Critique:**

*Challenges in CAM Research:*
- Whole-systems research complexity
- Practitioner as variable
- Individualized treatments vs. standardization
- Blinding limitations
- Outcome measure selection
- Cultural and contextual factors

*Evaluating Systematic Reviews:*
- GRADE assessment of evidence quality
- Heterogeneity and meta-analysis validity
- Publication bias assessment
- Industry funding effects
- Conflict of interest disclosure

*Emerging Methodologies:*
- N-of-1 trials for individual decisions
- Mixed methods research
- Practice-based research networks
- Real-world evidence
- Patient-reported outcomes

**Regulatory Policy Analysis:**

*US Regulatory Framework:*
- DSHEA 1994 and its consequences
- FDA enforcement limitations
- FTC advertising oversight
- State-level regulation variation
- Practitioner licensure variation

*International Comparisons:*
- EU traditional herbal medicines directive
- Canadian Natural Health Products regulations
- WHO traditional medicine strategy
- TGA (Australia) approach

*Policy Debates:*
- Pre-market approval vs. post-market surveillance
- Evidence standards for claims
- Mandatory adverse event reporting
- Quality manufacturing standards
- Health information regulation

**Implementation Science:**

*Safety System Implementation:*
- Clinical decision support for interactions
- Pharmacy verification protocols
- Pre-operative screening programs
- Documentation standards
- Alert fatigue management

*Quality Improvement:*
- Appropriate utilization metrics
- Outcome tracking
- Patient safety event monitoring
- Practitioner credentialing
- Evidence-based guideline adherence

*Dissemination Strategies:*
- Provider education programs
- Patient decision aids
- Evidence summaries for clinicians
- Health system integration models
- Community health programs

**Ethical Frameworks:**

*Autonomy and Evidence:*
- Respecting choices with imperfect information
- Duty to inform vs. persuade
- Cultural competence in evaluation
- Limits of paternalism
- Vulnerable population protections

*Resource Allocation:*
- Insurance coverage decisions
- Health system investment
- Research priority setting
- Access equity concerns
- Opportunity costs

*Professional Ethics:*
- Recommending treatments with limited evidence
- Managing conflicts of interest
- Maintaining relationships with disagreeing patients
- Scope of practice boundaries
- Documentation and liability

**Clinical Decision Framework:**

*Risk Stratification:*
1. **Low risk, evidence-supported**: Recommend (e.g., meditation for stress)
2. **Low risk, limited evidence**: Acceptable with disclosure
3. **Moderate risk, evidence-supported**: Case-by-case with monitoring
4. **High risk, limited evidence**: Generally advise against
5. **Delays necessary treatment**: Strongly advise against

*Patient Factors:*
- Disease severity and prognosis
- Available conventional options
- Patient values and preferences
- Health literacy and understanding
- Support system
- Financial considerations

**Special Contexts:**

*Pediatrics:*
- Parental decision-making authority
- Child assent considerations
- Mandatory reporting for harmful practices
- Evidence standards for children
- Vaccine refusal intersection

*Oncology:*
- High stakes of treatment delay
- Supplement-chemotherapy interactions
- Quality of life considerations
- Terminal illness decisions
- Integrative oncology programs

*End of Life:*
- Expanded patient autonomy
- Comfort vs. cure focus
- Family dynamics
- Meaning and hope
- Regulatory flexibility

**Practice Recommendations:**

*Systematic Assessment:*
1. Universal CAM use inquiry
2. Non-judgmental documentation
3. Interaction screening
4. Risk stratification
5. Evidence communication
6. Shared decision-making
7. Monitoring plan
8. Ongoing relationship maintenance

*High-Yield Interventions:*
- Pre-operative supplement discontinuation protocols
- Drug-herb interaction alerts in EHR
- Oncology integrative medicine consultation
- Patient education resources
- Provider education on common CAM

*Resources:*
- Natural Medicines Database
- Memorial Sloan Kettering About Herbs
- NCCIH Health Information
- Cochrane Complementary Medicine
- FDA MedWatch

**Patient Communication Summary:**

For patients interested in CAM:
1. Explore reasons and validate concerns
2. Assess current medical situation
3. Review evidence together
4. Discuss risks (including indirect harms)
5. Check interactions
6. Negotiate acceptable plan
7. Maintain follow-up
8. Document thoroughly`,
      keyTerms: [
        {
          term: "GRADE",
          definition: "Grading of Recommendations Assessment, Development, and Evaluation - system for rating evidence quality",
        },
        {
          term: "N-of-1 trial",
          definition: "Randomized trial in single patient to determine individual treatment response",
        },
        {
          term: "alert fatigue",
          definition: "Desensitization to clinical decision support alerts due to excessive frequency",
        },
        {
          term: "whole-systems research",
          definition: "Research approach studying complex interventions as implemented rather than isolated components",
        },
      ],
      clinicalNotes: `Summary for clinical practice:

Risk Assessment Framework:
- Low risk + evidence = recommend
- Low risk + no evidence = acceptable with disclosure
- High risk or delays treatment = advise against
- Document discussion regardless of decision

Key Safety Actions:
1. Ask all patients about supplement/CAM use
2. Document in medication list
3. Check interactions before prescribing
4. Pre-operative supplement discontinuation
5. Cancer patients: integrative oncology consult

Communication Approach:
- Non-judgmental inquiry
- Validate patient concerns
- Present evidence honestly
- Maintain relationship even if disagreeing
- Prioritize preventing most serious harms

Resources:
- Natural Medicines Database (evidence ratings)
- About Herbs (MSKCC - oncology focus)
- NCCIH (patient handouts)
- MedWatch (reporting)`,
    },
  },

  media: [
    {
      id: "cam-evaluation-framework",
      type: "diagram",
      filename: "cam_evaluation_framework.svg",
      title: "Alternative Therapy Evaluation Framework",
      description: "Decision framework for evaluating alternative therapies",
    },
    {
      id: "harm-patterns-diagram",
      type: "diagram",
      filename: "cam_harm_patterns.svg",
      title: "Patterns of Harm from Alternative Therapies",
      description: "Illustration of direct and indirect harms",
    },
  ],

  citations: [
    {
      id: "nccih-using-safely",
      type: "website",
      title: "Using Dietary Supplements Wisely",
      source: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/using-dietary-supplements-wisely",
    },
    {
      id: "posadzki-adverse-effects",
      type: "article",
      title: "Adverse effects of herbal medicines: an overview of systematic reviews",
      source: "Clinical Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/23520397/",
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
      targetId: "red-flags-quackery",
      targetType: "concept",
      relationship: "related",
      label: "Red Flags for Quackery",
    },
    {
      targetId: "drug-interactions",
      targetType: "concept",
      relationship: "related",
      label: "Drug Interactions",
    },
  ],

  tags: {
    systems: ["integrative", "general"],
    topics: [
      "patient safety",
      "evidence evaluation",
      "drug interactions",
      "shared decision-making",
      "health literacy",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family medicine"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default alternativeTherapiesEvaluation;
