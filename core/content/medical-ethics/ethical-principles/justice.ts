import { EducationalContent } from '../../types';

export const justice: EducationalContent = {
  id: 'justice',
  type: 'concept',
  name: 'Justice',
  alternateNames: ['Fairness', 'Equity'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding the basic concept of fairness in healthcare.',
      explanation: `Justice means fair and equitable treatment in healthcare. Healthcare should be distributed fairly, with equal access to medical care for all. Patients should be treated with equal respect and concern.

**Key Concepts:**

- Justice means fair and equitable treatment
- Healthcare should be distributed fairly
- Equal access to medical care
- Treating patients with equal respect and concern`,
      keyTerms: [
        { term: 'Justice', definition: 'The principle of fairness and equal treatment in healthcare' },
        { term: 'Fairness', definition: 'Treating people equitably and without bias' },
        { term: 'Equity', definition: 'Fair access to healthcare resources based on need' },
        { term: 'Equal treatment', definition: 'Providing the same care to all patients regardless of background' },
        { term: 'Healthcare access', definition: 'The ability to obtain needed medical services' }
      ],
      analogies: [
        'Justice in healthcare is like waiting in line - everyone should get their turn fairly.',
        'It\'s like grading on a curve vs. equally - fairness means giving each person what they need.'
      ],
      examples: [
        'Treating all patients regardless of background',
        'Providing emergency care to anyone in need',
        'Not discriminating based on race, gender, or socioeconomic status'
      ],
      patientCounselingPoints: [
        'You deserve fair treatment in healthcare, regardless of your background.',
        'Justice means healthcare resources should be available when you need them.',
        'All patients should be treated with equal respect.',
        'Your care should not be affected by your race, gender, income, or other factors.'
      ]
    },
    2: {
      level: 2,
      summary: 'Major philosophical frameworks for fair distribution in healthcare.',
      explanation: `Several theories guide distributive justice in healthcare: egalitarianism emphasizes equal access to basic healthcare; utilitarianism seeks to maximize overall health benefits; libertarianism favors market-based distribution; sufficientarianism aims to ensure everyone has enough healthcare; and Rawlsian theory prioritizes the least advantaged.

**Theories of Distributive Justice:**

- Egalitarianism: equal access to basic healthcare
- Utilitarianism: maximize overall health benefits
- Libertarianism: market-based distribution
- Sufficientarianism: ensure everyone has enough healthcare
- Rawlsian theory: prioritize the least advantaged`,
      keyTerms: [
        { term: 'Egalitarianism', definition: 'The belief that all people should have equal access to healthcare' },
        { term: 'Utilitarianism', definition: 'An ethical approach that seeks to maximize overall health benefits' },
        { term: 'Libertarianism', definition: 'A political philosophy favoring market-based distribution of healthcare' },
        { term: 'Sufficientarianism', definition: 'The principle that everyone should have sufficient healthcare to meet basic needs' },
        { term: 'Rawlsian justice', definition: 'A theory of justice that prioritizes improving the situation of the least advantaged' }
      ],
      analogies: [
        'Egalitarianism is like everyone getting the same slice of pizza.',
        'Utilitarianism is like giving the pizza to whoever would enjoy it most.',
        'Rawlsian justice is like making sure the hungriest person gets fed first.'
      ],
      examples: [
        'Universal healthcare systems based on egalitarian principles',
        'Quality-adjusted life years (QALYs) in resource allocation',
        'Debates about healthcare as a right vs. commodity',
        'Progressive healthcare financing systems'
      ],
      patientCounselingPoints: [
        'Different theories of justice lead to different healthcare systems.',
        'Your country\'s approach to healthcare reflects beliefs about fairness.',
        'Justice in healthcare involves complex decisions about resource distribution.',
        'Understanding these theories helps explain healthcare policy debates.'
      ]
    },
    3: {
      level: 3,
      summary: 'Different aspects of fairness in medical practice and systems.',
      explanation: `Justice in healthcare has multiple dimensions: distributive justice (allocation of resources), procedural justice (fair decision-making processes), relational justice (quality of patient-provider relationships), epistemic justice (respecting patient knowledge and perspectives), and social justice (addressing health disparities and determinants).

**Dimensions of Healthcare Justice:**

- Distributive justice: allocation of resources
- Procedural justice: fair decision-making processes
- Relational justice: quality of patient-provider relationships
- Epistemic justice: respecting patient knowledge and perspectives
- Social justice: addressing health disparities and determinants`,
      keyTerms: [
        { term: 'Distributive justice', definition: 'Fair distribution of healthcare resources among individuals and groups' },
        { term: 'Procedural justice', definition: 'Fairness in the processes by which decisions are made' },
        { term: 'Relational justice', definition: 'The quality of interpersonal relationships in healthcare' },
        { term: 'Epistemic justice', definition: 'Respect for patients\' knowledge and perspectives' },
        { term: 'Social determinants of health', definition: 'Conditions in which people are born, grow, live, work, and age that affect health' }
      ],
      analogies: [
        'Distributive justice is about who gets what, procedural justice is about how decisions are made.',
        'Epistemic justice is like believing patients when they describe their symptoms.'
      ],
      examples: [
        'Transparent criteria for organ transplant waiting lists',
        'Including diverse populations in clinical research',
        'Addressing language barriers in healthcare',
        'Community health initiatives targeting underserved areas'
      ],
      patientCounselingPoints: [
        'Justice includes both fair distribution and fair processes.',
        'Your relationship with your healthcare provider matters for just care.',
        'Your knowledge and perspective about your health should be respected.',
        'Social factors outside healthcare significantly affect your health.',
        'Health justice involves addressing broader social determinants of health.'
      ]
    },
    4: {
      level: 4,
      summary: 'Ethical challenges in distributing scarce medical resources.',
      explanation: `Resource allocation and triage present significant justice challenges. Scarcity necessitates allocation decisions in emergency and disaster situations. Criteria for allocating organs for transplant must be fair. Micro-allocation involves bedside rationing decisions, while macro-allocation involves healthcare policy and budget decisions.

**Key Challenges:**

- Scarcity necessitates allocation decisions
- Triage in emergency and disaster situations
- Criteria for allocating organs for transplant
- Micro-allocation: bedside rationing decisions
- Macro-allocation: healthcare policy and budget decisions`,
      keyTerms: [
        { term: 'Triage', definition: 'The process of prioritizing patients based on the severity of their condition' },
        { term: 'Resource allocation', definition: 'How scarce healthcare resources are distributed' },
        { term: 'Micro-allocation', definition: 'Decisions about individual patient care at the bedside' },
        { term: 'Macro-allocation', definition: 'Policy-level decisions about healthcare resource distribution' },
        { term: 'Rationing', definition: 'Limiting the availability of healthcare resources' },
        { term: 'QALY', definition: 'Quality-Adjusted Life Year, a measure of disease burden including both quality and quantity of life' }
      ],
      analogies: [
        'Tiage is like battlefield medicine - treating those who can benefit most first.',
        'Micro-allocation is like a doctor deciding who gets the last bed; macro-allocation is like deciding how many beds the hospital should have.'
      ],
      examples: [
        'COVID-19 ventilator allocation protocols',
        'Organ transplant waitlist criteria',
        'Prioritizing limited medications during shortages',
        'Bed allocation during surge capacity crises'
      ],
      patientCounselingPoints: [
        'Scarcity of resources sometimes forces difficult allocation decisions.',
        'Triage aims to save the most lives when resources are limited.',
        'Organ allocation uses criteria to ensure fair distribution.',
        'Bedside rationing involves difficult decisions about resource use.',
        'These decisions follow ethical guidelines to ensure fairness.'
      ]
    },
    5: {
      level: 5,
      summary: 'Current challenges and debates in healthcare justice.',
      explanation: `Contemporary justice issues include global health disparities and access to essential medicines, health equity and social determinants of health, racism and bias in healthcare delivery, genetic justice and access to precision medicine, intersecting vulnerabilities and multiple disadvantages, climate change and environmental justice, AI and algorithmic bias in healthcare, and justice in pandemic response and vaccine distribution.

**Contemporary Issues:**

- Global health disparities and access to essential medicines
- Health equity and social determinants of health
- Racism and bias in healthcare delivery
- Genetic justice and access to precision medicine
- Intersecting vulnerabilities and multiple disadvantages
- Climate change and environmental justice
- AI and algorithmic bias in healthcare
- Justice in pandemic response and vaccine distribution`,
      keyTerms: [
        { term: 'Health equity', definition: 'The absence of avoidable differences in health among groups of people' },
        { term: 'Structural racism', definition: 'Systems and policies that create and maintain racial inequalities in health' },
        { term: 'Social determinants', definition: 'Conditions in which people live, learn, work, and play that affect health' },
        { term: 'Genetic justice', definition: 'Fair access to genetic testing and gene therapies' },
        { term: 'Algorithmic bias', definition: 'Systematic errors in AI that create unfair outcomes' },
        { term: 'Global health', definition: 'Health issues that transcend national boundaries' }
      ],
      analogies: [
        'Health equity is like starting line fairness - everyone should have a fair chance to be healthy.',
        'Algorithmic bias is like a scale that\'s slightly off - it systematically favors some over others.'
      ],
      examples: [
        'International disparities in COVID-19 vaccine access',
        'Racial disparities in maternal mortality',
        'AI diagnostic tools performing differently across populations',
        'Climate vulnerability and health impacts on disadvantaged communities',
        'Gene therapy costs and accessibility',
        'Addressing food insecurity as health policy'
      ],
      patientCounselingPoints: [
        'Health equity means addressing avoidable differences in health outcomes.',
        'Social factors outside healthcare significantly affect your health.',
        'Racism and bias in healthcare lead to unfair treatment and outcomes.',
        'Access to new genetic technologies raises justice concerns.',
        'Climate change affects health, with disproportionate impacts on vulnerable populations.',
        'AI tools in healthcare may perpetuate biases if not carefully designed.',
        'Pandemic response and vaccine distribution involve complex justice issues.',
        'Advocating for health justice helps create a fairer healthcare system.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'justice', 'health-equity'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
