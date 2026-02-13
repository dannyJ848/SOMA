/**
 * Prescription Digital Therapeutics - Applications
 *
 * Software-based medical interventions that require prescription
 * and deliver evidence-based therapeutic interventions.
 */

import { EducationalContent } from '../../types';

export const prescriptionApps: EducationalContent = {
  id: 'digital-health-prescription-apps',
  type: 'concept',
  name: 'Prescription Digital Therapeutics',
  alternateNames: ['PDTs', 'Prescription Apps', 'Digital Medicine', 'Software as a Medical Device'],

  levels: {
    1: {
      level: 1,
      summary: 'Prescription apps are special phone apps that doctors can prescribe to help treat medical conditions, just like medicine pills.',
      explanation: `## What Are Prescription Apps?

Prescription apps are special computer programs on your phone or tablet that doctors can "prescribe" to help treat health problems. Just like a doctor might give you a prescription for medicine, they can now give you a prescription for an app!

**How They Work:**
- Your doctor decides an app could help you
- They write a prescription for the app
- You download it on your phone
- You use it regularly as part of your treatment

**What They Can Help With:**
- Feeling worried or sad (anxiety, depression)
- Trouble sleeping (insomnia)
- Managing pain
- Learning to manage diabetes
- Helping with attention problems (ADHD)

**Why They Need a Prescription:**
These are not regular apps you can download for free. They are special because:
- Scientists tested them to make sure they work
- They are approved by health agencies like the FDA
- They need a doctor to decide if they are right for you

**Examples You Might Use:**
- An app that teaches you to sleep better
- A game that helps train your brain to focus
- A program that teaches breathing exercises to feel calmer

These apps are like having a mini doctor or therapist in your pocket, helping you get better every day!`,
      keyTerms: [
        { term: 'prescription', definition: 'An order from a doctor saying you need a certain medicine or treatment' },
        { term: 'therapeutic', definition: 'Something that helps treat or cure a health problem' },
        { term: 'FDA approved', definition: 'Tested and declared safe to use by the Food and Drug Administration, a government group' },
        { term: 'mobile app', definition: 'A computer program that runs on your phone or tablet' },
      ],
      analogies: [
        'A prescription app is like a personal trainer for your health - it guides you through exercises just for you.',
        'Think of it like a digital medicine cabinet - instead of pills, you get helpful tools on your phone.',
        'It is like having a tutor for your brain, teaching you skills to feel better.',
      ],
      examples: [
        'An app that plays calming sounds and guides breathing for kids who feel anxious before tests',
        'A game that helps kids with ADHD practice focusing their attention',
        'An app that tracks sleep and gives tips for better rest',
        'A program that teaches teens how to manage feelings of sadness',
      ],
      patientCounselingPoints: [
        'Use the app every day as your doctor recommends',
        'Tell your doctor if the app is helping or if you have problems using it',
        'These apps work best when combined with other treatments like talking to a therapist',
        'Keep your phone charged so you do not miss your daily sessions',
      ],
    },
    2: {
      level: 2,
      summary: 'Prescription Digital Therapeutics (PDTs) are FDA-approved software applications that deliver evidence-based therapeutic interventions to treat medical conditions, requiring physician oversight similar to traditional pharmaceuticals.',
      explanation: `## Prescription Digital Therapeutics (PDTs)

Prescription Digital Therapeutics (PDTs) represent a new category of medical treatment that uses software to deliver therapeutic interventions directly to patients. Unlike general wellness apps, PDTs undergo rigorous clinical trials and regulatory review.

**Regulatory Framework:**
- FDA clearance through 510(k) or De Novo pathways
- Classified as Software as a Medical Device (SaMD)
- Require prescription from licensed healthcare provider
- Subject to ongoing post-market surveillance

**Mechanism of Action:**
PDTs deliver cognitive behavioral therapy (CBT), neurobehavioral interventions, or disease management protocols through interactive software. They collect patient data, provide real-time feedback, and adapt interventions based on user progress.

**FDA-Approved Examples:**

| PDT Name | Condition | Mechanism | Evidence Base |
|----------|-----------|-----------|---------------|
| reSET | Substance use disorder | CBT-based modules | RCT showing improved abstinence rates |
| reSET-O | Opioid use disorder | CBT + contingency management | Improved retention in treatment |
| EndeavorRx | Pediatric ADHD | Targeted cognitive training | FDA-approved via De Novo pathway |
| Somryst | Chronic insomnia | CBT-I protocols | 9-week digital CBT program |
| Pear-004 | PTSD | Cognitive therapy | Evidence-based trauma processing |

**Clinical Integration:**
- Prescribed by physicians, psychologists, or other licensed providers
- Integrated into electronic health records (EHR)
- Often reimbursed by insurance like traditional medications
- Require patient monitoring and adherence tracking

**Advantages Over Traditional Therapy:**
- Accessibility: Available 24/7 on personal devices
- Scalability: Can reach patients in underserved areas
- Consistency: Standardized delivery of evidence-based interventions
- Data collection: Real-time monitoring of patient progress
- Cost-effectiveness: Reduced need for in-person visits`,
      keyTerms: [
        { term: 'PDT', definition: 'Prescription Digital Therapeutic - FDA-approved software treatment requiring prescription' },
        { term: 'SaMD', definition: 'Software as a Medical Device - software intended for medical purposes' },
        { term: '510(k)', definition: 'FDA clearance pathway showing substantial equivalence to existing device' },
        { term: 'De Novo', definition: 'FDA pathway for novel devices of low to moderate risk' },
        { term: 'CBT', definition: 'Cognitive Behavioral Therapy - structured psychotherapy approach' },
        { term: 'CBT-I', definition: 'Cognitive Behavioral Therapy for Insomnia - specialized sleep treatment' },
      ],
      analogies: [
        'PDTs are like digital prescriptions - software that functions like a medication with specific therapeutic targets.',
        'Think of them as pocket therapists - delivering standardized cognitive interventions anytime, anywhere.',
        'They represent medical-grade software, like how pharmaceutical drugs represent medical-grade chemicals.',
      ],
      examples: [
        'reSET: 12-week program for substance use disorder with 36 CBT-based lessons and reward-based incentives',
        'EndeavorRx: Video game-based intervention that targets attention networks through adaptive algorithms',
        'Somryst: Structured sleep restriction and stimulus control protocols delivered digitally',
        'Vorvida: Machine learning-based intervention for alcohol use disorder with personalized feedback',
      ],
    },
    3: {
      level: 3,
      summary: 'Prescription Digital Therapeutics are Software as a Medical Device (SaMD) products that deliver clinically-validated therapeutic interventions through algorithm-driven software platforms, requiring FDA clearance and physician oversight.',
      explanation: `## Prescription Digital Therapeutics: Clinical and Technical Framework

Prescription Digital Therapeutics (PDTs) occupy a unique regulatory and clinical space at the intersection of software engineering, clinical psychology, and pharmaceutical regulation. These products are fundamentally different from wellness apps due to their rigorous validation requirements.

**Regulatory Classification:**

Under FDA guidelines, PDTs fall under Software as a Medical Device (SaMD) when intended to treat, diagnose, cure, mitigate, or prevent disease. Key regulatory considerations include:

- **Risk Classification:** Most PDTs are Class II medical devices requiring 510(k) clearance
- **Quality Management:** ISO 13485 compliance for medical device quality systems
- **Clinical Evidence:** Randomized controlled trials demonstrating efficacy and safety
- **Software Lifecycle:** IEC 62304 compliance for medical device software development

**Technical Architecture:**

Modern PDTs employ sophisticated technical infrastructure:

1. **Adaptive Algorithms:** Machine learning models that personalize interventions based on user responses
2. **Clinical Decision Support:** Rule-based engines implementing validated clinical protocols
3. **Data Security:** HIPAA-compliant encryption and secure cloud infrastructure
4. **Interoperability:** FHIR-compliant APIs for EHR integration
5. **Real-time Analytics:** Continuous monitoring of engagement and clinical outcomes

**Clinical Validation Requirements:**

| Requirement | Description | Typical Evidence |
|-------------|-------------|------------------|
| Efficacy | Demonstrated therapeutic benefit | RCT with primary endpoint achievement |
| Safety | Acceptable risk profile | Adverse event monitoring, data security audits |
| Usability | Appropriate user interface | Human factors testing, IEC 62366 compliance |
| Durability | Sustained effect post-treatment | Long-term follow-up studies |
| Generalizability | Effectiveness across populations | Diverse demographic representation in trials |

**Evidence-Based Mechanisms:**

PDTs translate established psychotherapeutic approaches into digital format:
- **Cognitive Behavioral Therapy (CBT):** Digital delivery of thought challenging, behavioral activation
- **Acceptance and Commitment Therapy (ACT):** Digital mindfulness and value-based exercises
- **Contingency Management:** Digital reward systems for behavior modification
- **Cognitive Training:** Adaptive tasks targeting specific neurocognitive domains

**Clinical Deployment Considerations:**

- Provider training on PDT integration into treatment plans
- Patient onboarding and technical support infrastructure
- Adherence monitoring through engagement analytics
- Integration with existing care pathways and referral systems`,
      keyTerms: [
        { term: 'SaMD', definition: 'Software as a Medical Device - software regulated as a medical product' },
        { term: 'ISO 13485', definition: 'International standard for medical device quality management systems' },
        { term: 'IEC 62304', definition: 'Standard for medical device software lifecycle processes' },
        { term: 'FHIR', definition: 'Fast Healthcare Interoperability Resources - standard for EHR data exchange' },
        { term: 'adaptive algorithm', definition: 'Software that modifies interventions based on user input and outcomes' },
        { term: 'contingency management', definition: 'Behavioral intervention using systematic reinforcement of target behaviors' },
        { term: 'primary endpoint', definition: 'Main outcome measure that determines trial success' },
      ],
    },
    4: {
      level: 4,
      summary: 'Prescription Digital Therapeutics represent a regulated class of Software as a Medical Device requiring clinical validation through randomized controlled trials, FDA clearance via 510(k) or De Novo pathways, and integration into clinical workflows with appropriate provider oversight and reimbursement mechanisms.',
      explanation: `## Prescription Digital Therapeutics: Clinical Implementation and Evidence Base

Prescription Digital Therapeutics (PDTs) have emerged as a distinct therapeutic category requiring the same level of clinical scrutiny as pharmacological interventions. Their integration into standard clinical practice necessitates understanding of regulatory pathways, evidence requirements, and implementation science.

**FDA Regulatory Pathways:**

The FDA regulates PDTs as medical devices under the Federal Food, Drug, and Cosmetic Act. Two primary pathways exist:

1. **510(k) Premarket Notification:**
   - Demonstrates substantial equivalence to legally marketed predicate device
   - Requires comparison of intended use, technological characteristics, and performance data
   - Typical review timeline: 90 days
   - Example: reSET-O cleared as substantially equivalent to reSET with additional opioid-specific content

2. **De Novo Classification:**
   - For novel devices of low to moderate risk without predicate
   - Establishes new classification regulation and special controls
   - Creates predicate for future 510(k) submissions
   - Example: EndeavorRx (AKL-T01) first FDA-approved prescription video game

**Clinical Trial Design Requirements:**

PDT trials must meet the same methodological rigor as pharmaceutical trials:

- **Randomization:** Adequate allocation concealment and randomization procedures
- **Blinding:** Often single-blind (patient) due to nature of intervention; objective outcomes preferred
- **Control Conditions:** Active comparator, treatment as usual, or sham digital intervention
- **Primary Endpoints:** Clinically meaningful outcomes validated in target population
- **Non-inferiority Margins:** Pre-specified when comparing to established treatments

**Key Clinical Trial Results:**

| PDT | Condition | Trial Design | Primary Outcome | Results |
|-----|-----------|--------------|-----------------|---------|
| reSET | SUD | Multi-site RCT | Abstinence rates | 40.3% vs 17.6% (p=0.001) |
| reSET-O | OUD | Multi-site RCT | Retention in treatment | 82.4% vs 68.4% (p=0.018) |
| EndeavorRx | ADHD | RCT (n=600) | TOVA API | Effect size 0.47 |
| Somryst | Insomnia | RCT | ISI score change | -8.4 vs -5.6 (p<0.001) |
| Sleepio | Insomnia | RCT (n=1,711) | ISI remission | 76% vs 18% at 8 weeks |

**Clinical Implementation Framework:**

Successful PDT deployment requires systematic implementation:

1. **Provider Education:** Training on appropriate patient selection, prescribing workflow, and outcome monitoring
2. **Workflow Integration:** EHR embedding, e-prescribing capability, automated follow-up
3. **Patient Support:** Technical onboarding, adherence coaching, troubleshooting resources
4. **Outcome Tracking:** Integration of patient-reported outcomes and engagement metrics
5. **Reimbursement Navigation:** Prior authorization support, documentation requirements

**Clinical Decision Points:**

Patient selection criteria for PDT consideration:
- Access to compatible device and reliable internet
- Digital literacy appropriate to platform complexity
- Motivation for self-directed therapeutic engagement
- Comorbidities that do not contraindicate digital intervention
- Concomitant treatments that complement rather than duplicate PDT content`,
      keyTerms: [
        { term: 'predicate device', definition: 'Legally marketed device to which substantial equivalence is demonstrated' },
        { term: 'special controls', definition: 'FDA requirements specific to device class addressing safety and effectiveness' },
        { term: 'TOVA API', definition: 'Test of Variables of Attention - Attention Performance Index; objective attention measure' },
        { term: 'ISI', definition: 'Insomnia Severity Index - validated patient-reported outcome measure' },
        { term: 'non-inferiority trial', definition: 'Study designed to demonstrate test treatment is not worse than control by pre-specified margin' },
        { term: 'e-prescribing', definition: 'Electronic transmission of prescription information from prescriber to pharmacy or platform' },
      ],
      clinicalNotes: `PDTs should be viewed as adjunctive rather than replacement therapy for most conditions. The strongest evidence supports PDTs for substance use disorders, insomnia, and ADHD. Provider prescribing should include baseline assessment, treatment agreement specifying usage expectations, scheduled follow-up to review progress reports, and plan for discontinuation or escalation based on response. Insurance coverage varies significantly; prior authorization often required. Consider patient digital literacy, device access, and competing digital distractions when selecting candidates.`,
    },
    5: {
      level: 5,
      summary: 'Prescription Digital Therapeutics constitute a regulated therapeutic class requiring rigorous clinical validation, with evidence strongest for cognitive-behavioral interventions in substance use disorders, insomnia, and ADHD. Implementation requires integration into clinical workflows with appropriate provider training, patient selection criteria, and outcome monitoring, while reimbursement and regulatory frameworks continue evolving.',
      explanation: `## Prescription Digital Therapeutics: Advanced Clinical Concepts

Prescription Digital Therapeutics represent a paradigm shift in therapeutic delivery, blurring boundaries between traditional pharmacotherapy and behavioral intervention. Their clinical deployment requires sophisticated understanding of digital biomarkers, adaptive algorithms, and the evolving regulatory landscape.

**Regulatory Evolution and Global Harmonization:**

The FDA Digital Health Center of Excellence and international counterparts (EMA, Health Canada, TGA) are developing harmonized frameworks for SaMD regulation. Key developments include:

- **Predetermined Change Control Plans (PCCP):** Allowing manufacturers to pre-specify algorithm modifications without new submissions
- **Real-World Evidence Integration:** Incorporating post-market data into labeling updates
- **Software Precertification Program:** FDA pilot exploring excellence appraisal-based oversight

**Digital Biomarkers and Outcome Assessment:**

PDTs generate novel digital biomarkers through passive and active sensing:

- **Passive Sensing:** Screen time patterns, typing dynamics, accelerometry-derived sleep/wake
- **Active Sensing:** Task-based cognitive assessments, ecological momentary assessments
- **Digital Endpoints:** FDA-qualified Drug Development Tools including Novel Digital Endpoints

Validation frameworks for digital biomarkers require:
- Analytical validation (sensor accuracy, signal processing)
- Clinical validation (relationship to clinical outcome)
- Usability validation (appropriate patient populations)

**Machine Learning and Adaptive Interventions:**

Advanced PDTs employ reinforcement learning and multi-armed bandit algorithms for personalization:

- **Just-in-Time Adaptive Interventions (JITAI):** Dynamically adjusting content delivery based on context
- **Reinforcement Learning:** Optimizing intervention sequences based on patient response patterns
- **Predictive Models:** Identifying patients at risk for dropout or non-response

Regulatory considerations for adaptive algorithms include locked versus continuous learning approaches and predetermined change control specifications.

**Pharmacoeconomic Evaluation:**

Health technology assessment frameworks for PDTs must address:

- **Cost-Effectiveness:** ICER calculations incorporating development costs, delivery platform expenses, and outcomes
- **Budget Impact:** Population-level cost projections for PDT adoption
- **Value-Based Pricing:** Models linking reimbursement to demonstrated outcomes
- **Implementation Costs:** Provider training, technical support, workflow modification

**Emerging Clinical Applications:**

- **Psychiatry:** Digital CBT for major depressive disorder (postpartum, oncology contexts)
- **Neurology:** Cognitive remediation in multiple sclerosis, Parkinson disease
- **Cardiology:** Cardiac rehabilitation digital platforms with remote monitoring
- **Gastroenterology:** Digital CBT for irritable bowel syndrome, inflammatory bowel disease
- **Oncology:** Digital interventions for cancer-related fatigue, cognitive impairment

**Clinical Governance and Quality Assurance:**

- **Cybersecurity:** Post-market monitoring for vulnerabilities, software updates
- **Algorithmic Bias:** Ongoing assessment for differential performance across demographics
- **Clinical Decision Support:** Integration with clinical practice guidelines and care pathways
- **Patient Safety Monitoring:** Vigilance systems for adverse events and unintended consequences`,
      keyTerms: [
        { term: 'PCCP', definition: 'Predetermined Change Control Plan - pre-specified modifications to SaMD without new submissions' },
        { term: 'digital endpoint', definition: 'Outcome measurement derived from digital health technology for clinical trial use' },
        { term: 'JITAI', definition: 'Just-in-Time Adaptive Intervention - dynamically adjusted treatment based on context and receptivity' },
        { term: 'multi-armed bandit', definition: 'Algorithm optimizing choice among options with uncertain rewards' },
        { term: 'ecological momentary assessment', definition: 'Real-time data collection in natural environments via mobile technology' },
        { term: 'novel digital endpoint', definition: 'Digital outcome measure receiving FDA qualification for drug development' },
      ],
      clinicalNotes: `The field of PDTs is evolving rapidly with increasing sophistication in artificial intelligence and machine learning integration. Clinicians should stay informed regarding FDA guidance updates, particularly around adaptive algorithms and real-world evidence integration. When prescribing PDTs, document informed consent regarding data collection and algorithmic personalization. Monitor patients for digital therapeutic alliance - the therapeutic relationship formed with digital platforms may differ from human providers and requires attention to engagement patterns. Consider poly-digital therapy interactions when patients use multiple digital health interventions concurrently.`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['digital-health'],
    keywords: ['prescription', 'digital-therapeutics', 'FDA', 'mobile-health', 'software-as-medical-device'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
