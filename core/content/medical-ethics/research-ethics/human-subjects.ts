import { EducationalContent } from '../../types';

export const humanSubjects: EducationalContent = {
  id: 'human-subjects-research-ethics',
  type: 'concept',
  name: 'Human Subjects Research Ethics',
  alternateNames: ['Research ethics', 'Human subjects protection'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding why protecting human research participants is essential.',
      explanation: `Human subjects research requires special ethical protections. Research participants are vulnerable to exploitation. History of research abuses led to current protections. Institutional Review Boards (IRBs) oversee research.

**Key Concepts:**

- Human subjects research requires special ethical protections
- Research participants are vulnerable to exploitation
- History of research abuses led to current protections
- Institutional Review Boards (IRBs) oversee research`,
      keyTerms: [
        { term: 'Human subject', definition: 'A person whose data or biological samples are used in research' },
        { term: 'Research participant', definition: 'A person who voluntarily takes part in research' },
        { term: 'IRB', definition: 'Institutional Review Board - a committee that reviews research ethics' },
        { term: 'Research ethics', definition: 'Moral principles that guide research involving people' },
        { term: 'Protection', definition: 'Safeguards to prevent harm to research participants' }
      ],
      analogies: [
        'IRB oversight is like a safety committee checking that research is safe.',
        'Human subjects protections are like rules for fair treatment of workers.'
      ],
      examples: [
        'Clinical trials testing new medications',
        'Psychological studies on human behavior',
        'Observational studies collecting health data'
      ],
      patientCounselingPoints: [
        'Research participation has special protections because of past abuses.',
        'IRBs review studies to protect your rights and safety.',
        'You can choose whether or not to participate in research.',
        'Your safety is more important than scientific knowledge.'
      ]
    },
    2: {
      level: 2,
      summary: 'Key events that shaped modern human subjects protections.',
      explanation: `Key historical events established modern protections. The Nuremberg Code (1947) responded to Nazi experiments. The Declaration of Helsinki (1964) established ethical principles for medical research. The Tuskegee Syphilis Study (1932-1972) was a U.S. research abuse. The Belmont Report (1979) established respect for persons, beneficence, justice. The Common Rule (1991) created U.S. federal regulations.

**Key Historical Foundations:**

- Nuremberg Code (1947): response to Nazi experiments
- Declaration of Helsinki (1964): ethical principles for medical research
- Tuskegee Syphilis Study (1932-1972): U.S. research abuse
- Belmont Report (1979): respect for persons, beneficence, justice
- Common Rule (1991): U.S. federal regulations for human subjects research`,
      keyTerms: [
        { term: 'Nuremberg Code', definition: 'A 1947 code establishing ethical research principles after Nazi war crimes trials' },
        { term: 'Declaration of Helsinki', definition: 'World Medical Association\'s ethical principles for medical research' },
        { term: 'Tuskegee Study', definition: 'A notorious U.S. study that withheld syphilis treatment from Black men' },
        { term: 'Belmont Report', definition: 'A 1979 report establishing three core ethical principles for research' },
        { term: 'Common Rule', definition: 'U.S. federal regulations for protecting human research subjects' }
      ],
      analogies: [
        'The Nuremberg Code is like the original rulebook for ethical research.',
        'The Belmont Report is like the constitutional foundation for research ethics in the US.'
      ],
      examples: [
        'Nazi physicians conducting experiments on concentration camp prisoners',
        'Tuskegee study withholding treatment from Black men with syphilis',
        'Willowbrook study exposing children to hepatitis',
        'Jewish Chronic Disease Hospital cancer cell injection study'
      ],
      patientCounselingPoints: [
        'Past research abuses led to current protections for research participants.',
        'The Nuremberg Code was the first international research ethics standard.',
        'The Belmont Report established key ethical principles still used today.',
        'Federal laws like the Common Rule provide regulatory protections.',
        'These historical events show why oversight is necessary.'
      ]
    },
    3: {
      level: 3,
      summary: 'The three fundamental principles from the Belmont Report.',
      explanation: `The Belmont Report established three core principles. Respect for Persons means autonomy and protection of vulnerable populations. Beneficence means maximizing benefits and minimizing harms. Justice means fair distribution of research burdens and benefits. These principles are applied through informed consent, risk-benefit assessment, and subject selection.

**Core Ethical Principles:**

- Respect for Persons: autonomy and protection of vulnerable populations
- Beneficence: maximizing benefits and minimizing harms
- Justice: fair distribution of research burdens and benefits
- Application of principles through informed consent, risk-benefit assessment, and subject selection`,
      keyTerms: [
        { term: 'Respect for Persons', definition: 'Treating individuals as autonomous and protecting those with diminished autonomy' },
        { term: 'Beneficence', definition: 'Maximizing benefits and minimizing harms to research participants' },
        { term: 'Justice', definition: 'Fair distribution of research benefits and burdens' },
        { term: 'Vulnerable population', definition: 'Groups at higher risk of harm or exploitation in research' },
        { term: 'Risk-benefit assessment', definition: 'Evaluation of research risks against potential benefits' }
      ],
      analogies: [
        'The three principles are like a three-legged stool - all needed for ethical research.',
        'Justice in research is like fair selection for a team - not just picking the most convenient people.'
      ],
      examples: [
        'Obtaining informed consent from all research participants',
        'Excluding individuals who cannot consent (e.g., children) without additional protections',
        'Ensuring research benefits include the communities from which participants are drawn',
        'Protecting prisoners from being targeted for risky research'
      ],
      patientCounselingPoints: [
        'Respect for Persons means your autonomy and choices are honored.',
        'Beneficence means researchers must minimize risks and maximize benefits.',
        'Justice means the selection of participants is fair.',
        'Vulnerable populations receive extra protection in research.',
        'These three principles guide all ethical research.'
      ]
    },
    4: {
      level: 4,
      summary: 'Special requirements for consent in the research context.',
      explanation: `Research consent differs from clinical consent. Disclosure includes the research purpose, procedures, risks, benefits, and alternatives. Understanding the distinction between research and treatment is crucial. Voluntariness means freedom from coercion. Documentation and ongoing consent processes are important. Special provisions exist for vulnerable populations and minimal risk research.

**Informed Consent in Research:**

- Research consent differs from clinical consent
- Disclosure of research purpose, procedures, risks, benefits, and alternatives
- Understanding the distinction between research and treatment
- Voluntariness and freedom from coercion
- Documentation and ongoing consent processes
- Special provisions for vulnerable populations and minimal risk research`,
      keyTerms: [
        { term: 'Research consent', definition: 'Agreement to participate in research after understanding relevant information' },
        { term: 'Therapeutic misconception', definition: 'Mistaking research for personal medical treatment' },
        { term: 'Minimal risk', definition: 'Risk no greater than daily life or routine procedures' },
        { term: 'Waiver of consent', definition: 'IRB approval to proceed without consent in certain circumstances' },
        { term: 'Assent', definition: 'A child\'s affirmative agreement to participate in research' }
      ],
      analogies: [
        'Therapeutic misconception is like thinking a clinical trial is treatment just for you.',
        'Minimal risk is like the risk of daily activities - not completely safe but ordinarily acceptable.'
      ],
      examples: [
        'Randomized controlled trials: explaining randomization and placebo',
        'Genetic research: explaining future uses of specimens',
        'Pediatric research: assent from child, permission from parents',
        'Emergency research: exception from informed consent (EFIC)',
        'Cluster randomized trials: community-level consent'
      ],
      patientCounselingPoints: [
        'Research consent is different from consent for your medical treatment.',
        'Understanding the difference between research and treatment is important.',
        'Research may not directly benefit you - it aims to create knowledge.',
        'Your participation must be voluntary without pressure.',
        'Special protections exist for vulnerable populations.',
        'You can withdraw from research at any time.'
      ]
    },
    5: {
      level: 5,
      summary: 'Modern challenges in protecting research participants.',
      explanation: `Contemporary issues in human subjects research include research in resource-limited settings and international collaboration, placebo-controlled trials and standard of care controversies, return of individual research results and incidental findings, big data/biobanks and dynamic consent models, social media and digital research methods, crowdsourced research and citizen science, pragmatic trials embedded in clinical care, artificial intelligence and machine learning research, research during public health emergencies, and payment to participants and undue inducement.

**Contemporary Issues in Human Subjects Research:**

- Research in resource-limited settings and international collaboration
- Placebo-controlled trials and standard of care controversies
- Return of individual research results and incidental findings
- Big data, biobanks, and dynamic consent models
- Social media and digital research methods
- Crowdsourced research and citizen science
- Pragmatic trials embedded in clinical care
- Artificial intelligence and machine learning research
- Research during public health emergencies
- Payment to participants and undue inducement`,
      keyTerms: [
        { term: 'Standard of care', definition: 'The generally accepted medical treatment for a condition' },
        { term: 'Incidental findings', definition: 'Unexpected discoveries made during research that are not the primary focus' },
        { term: 'Biobank', definition: 'A collection of biological samples for research use' },
        { term: 'Dynamic consent', definition: 'An ongoing process where participants can adjust their preferences' },
        { term: 'Pragmatic trial', definition: 'Research conducted in real-world clinical settings' },
        { term: 'Undue inducement', definition: 'Excessive payment that compromises voluntary consent' }
      ],
      analogies: [
        'Incidental findings are like finding money in a coat you haven\'t worn in years - unexpected but potentially important.',
        'Dynamic consent is like subscription preferences you can change anytime.'
      ],
      examples: [
        'AZT trials in Africa with placebo controls',
        'Returning genetic results to research participants',
        'Using electronic health records for research with waiver of consent',
        'Studying social media behavior without direct consent',
        'Conducting research during COVID-19 pandemic',
        'Paying drug users to participate in addiction research'
      ],
      patientCounselingPoints: [
        'International research must address global fairness concerns.',
        'Placebo use in trials raises ethical questions about standard of care.',
        'You may decide whether to receive incidental findings from research.',
        'Big data research may use your health information with special protections.',
        'Social media and digital technologies create new research ethics questions.',
        'Research embedded in care blurs the line between treatment and research.',
        'AI research using health data has special considerations.',
        'Public health emergencies may require flexible research approaches.',
        'Payment for participation should not be coercive.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'research-ethics', 'human-subjects'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
