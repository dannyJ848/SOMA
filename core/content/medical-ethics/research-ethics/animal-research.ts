import { EducationalContent } from '../../types';

export const animalResearch: EducationalContent = {
  id: 'animal-research-ethics',
  type: 'concept',
  name: 'Ethics of Animal Research',
  alternateNames: ['Animal research ethics', 'Laboratory animal ethics'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding why ethical consideration of animal research matters.',
      explanation: `Animals are widely used in biomedical research. Animal research has contributed to major medical advances. Animals are sentient beings capable of experiencing suffering. There is an ethical obligation to balance scientific benefits against animal welfare.

**Key Concepts:**

- Animals are widely used in biomedical research
- Animal research has contributed to major medical advances
- Animals are sentient beings capable of experiencing suffering
- Ethical obligation to balance scientific benefits against animal welfare`,
      keyTerms: [
        { term: 'Animal research', definition: 'The use of animals in scientific experiments' },
        { term: 'Sentience', definition: 'The capacity to feel and experience things' },
        { term: 'Animal welfare', definition: 'The well-being of animals' },
        { term: 'Biomedical research', definition: 'Scientific studies related to health and medicine' },
        { term: 'Research animal', definition: 'An animal used in scientific research' }
      ],
      analogies: [
        'Animal sentience is like animals having feelings similar to humans.',
        'Balancing benefits and welfare is like weighing pros and cons.'
      ],
      examples: [
        'Mice used to study cancer treatments',
        'Primates used in neuroscience research',
        'Drug safety testing in animals before human trials'
      ],
      patientCounselingPoints: [
        'Animal research has contributed to many medical advances you benefit from.',
        'Animals can feel pain and distress, so their welfare matters.',
        'Ethical guidelines ensure animals are treated humanely in research.',
        'Researchers must justify why animals are needed for their work.'
      ]
    },
    2: {
      level: 2,
      summary: 'Development of ethical frameworks for animal research.',
      explanation: `The ethics of animal research evolved over time. Historically, animals were used in research without ethical oversight. The animal welfare movement grew from ethical concern. Utilitarianism balances animal suffering against human benefit. Animal rights views consider animals as ends, not means. Moral status debates center on speciesism and moral consideration.

**Historical Context and Ethics Frameworks:**

- Historical use of animals in research without ethical oversight
- Animal welfare movement and growing ethical concern
- Utilitarian calculus: animal suffering vs. human benefit
- Animal rights views: animals as ends, not means
- Moral status debates: speciesism and moral consideration`,
      keyTerms: [
        { term: 'Utilitarianism', definition: 'An ethical approach weighing benefits against harms' },
        { term: 'Animal rights', definition: 'The view that animals have moral rights' },
        { term: 'Speciesism', definition: 'Giving preference to humans over other species' },
        { term: 'Moral status', definition: 'The standing of a being in moral consideration' },
        { term: 'Tom Regan', definition: 'Philosopher who argued for animal rights' },
        { term: 'Peter Singer', definition: 'Philosopher who wrote about animal liberation' }
      ],
      analogies: [
        'Speciesism is like racism but based on species instead of race.',
        'Animal rights is like believing animals deserve certain basic protections.'
      ],
      examples: [
        'Historical experiments with no anesthesia or consideration of animal pain',
        'Philosophical debates about animal consciousness',
        'Development of the animal welfare movement',
        'Species-specific moral status debates'
      ],
      patientCounselingPoints: [
        'Historically, animals weren\'t protected from painful experiments.',
        'The animal welfare movement emerged to protect research animals.',
        'Philosophers debate whether animals have rights like humans do.',
        'Speciesism asks why we treat animals differently than humans.',
        'These debates inform current animal research policies.'
      ]
    },
    3: {
      level: 3,
      summary: 'Core principles guiding ethical animal research.',
      explanation: `The Three Rs framework guides ethical animal research. Replacement means using non-animal methods when possible. Reduction means using the minimum number of animals necessary. Refinement means minimizing pain, distress, and suffering. Russell and Burch (1959) developed these principles in "The Principles of Humane Experimental Technique." Implementation happens through research design and review.

**The Three Rs Framework:**

- Replacement: using non-animal methods when possible
- Reduction: using the minimum number of animals necessary
- Refinement: minimizing pain, distress, and suffering
- Russell and Burch (1959): The Principles of Humane Experimental Technique
- Implementation in research design and review`,
      keyTerms: [
        { term: 'Three Rs', definition: 'Replacement, Reduction, and Refinement - principles for humane animal research' },
        { term: 'Replacement', definition: 'Using non-animal methods instead of animals in research' },
        { term: 'Reduction', definition: 'Using fewer animals in research while maintaining scientific validity' },
        { term: 'Refinement', definition: 'Minimizing pain and distress for animals used in research' },
        { term: 'Russell and Burch', definition: 'Scientists who developed the Three Rs framework in 1959' },
        { term: 'IACUC', definition: 'Institutional Animal Care and Use Committee' }
      ],
      analogies: [
        'The Three Rs are like a recipe for humane animal research.',
        'Replacement is like using a simulator instead of live practice.'
      ],
      examples: [
        'Using cell cultures instead of live animals (replacement)',
        'Statistical methods to determine minimum sample sizes (reduction)',
        'Providing anesthesia and analgesia for painful procedures (refinement)',
        'Environmental enrichment for laboratory animals'
      ],
      patientCounselingPoints: [
        'The Three Rs guide researchers to treat animals humanely.',
        'Replacement means finding alternatives to animal use when possible.',
        'Reduction means using the fewest animals necessary.',
        'Refinement means minimizing any pain or distress animals experience.',
        'IACUC committees ensure the Three Rs are followed.'
      ]
    },
    4: {
      level: 4,
      summary: 'Institutional and legal frameworks governing animal research.',
      explanation: `Multiple oversight systems govern animal research. Institutional Animal Care and Use Committees (IACUCs) review protocols. The Public Health Service Policy on Humane Care and Use of Laboratory Animals applies to federally funded research. The Animal Welfare Act and USDA regulations provide legal oversight. The Guide for the Care and Use of Laboratory Animals sets standards. AAALAC accreditation provides voluntary certification. Veterinary oversight ensures animal welfare.

**Oversight and Regulation:**

- Institutional Animal Care and Use Committees (IACUCs)
- Public Health Service Policy on Humane Care and Use of Laboratory Animals
- Animal Welfare Act and USDA regulations
- Guide for the Care and Use of Laboratory Animals
- AAALAC accreditation and voluntary standards
- Veterinary oversight and animal welfare monitoring`,
      keyTerms: [
        { term: 'IACUC', definition: 'Institutional Animal Care and Use Committee - reviews animal research protocols' },
        { term: 'Animal Welfare Act', definition: 'U.S. law setting standards for animal care in research' },
        { term: 'USDA', definition: 'United States Department of Agriculture - enforces animal welfare laws' },
        { term: 'PHS Policy', definition: 'Public Health Service Policy on humane animal care and use' },
        { term: 'AAALAC', definition: 'Association for Assessment and Accreditation of Laboratory Animal Care' },
        { term: 'Animal welfare protocol', definition: 'A detailed plan for humane animal care in research' }
      ],
      analogies: [
        'IACUC is like an ethics board for animal research.',
        'AAALAC accreditation is like a gold star for animal care standards.'
      ],
      examples: [
        'Submitting a protocol to IACUC for review',
        'USDA inspections of animal facilities',
        'Veterinarian involvement in animal research projects',
        'Training requirements for personnel working with animals'
      ],
      patientCounselingPoints: [
        'IACUC committees review all animal research to ensure ethical treatment.',
        'Federal laws like the Animal Welfare Act protect research animals.',
        'USDA inspectors check that facilities are following regulations.',
        'Veterinarians oversee the health and welfare of research animals.',
        'Researchers must be trained in humane animal care.'
      ]
    },
    5: {
      level: 5,
      summary: 'Current ethical challenges and future directions in animal research.',
      explanation: `Contemporary issues include great ape research bans and restrictions, chimpanzee retirement and ethical reconsideration, genetically modified animals and welfare concerns, alternative methods (organoids, organs-on-chips, computer models), CRISPR and animal gene editing ethics, species selection and moral hierarchy debates, animal research in drug development effectiveness debates, transparency and public communication, international variation in regulations, and xenotransplantation and human-animal chimeras.

**Contemporary Issues and Debates:**

- Great ape research bans and restrictions
- Chimpanzee retirement and ethical reconsideration
- Genetically modified animals and welfare concerns
- Alternative methods: organoids, organs-on-chips, computer models
- CRISPR and animal gene editing ethics
- Species selection and moral hierarchy debates
- Animal research in drug development effectiveness debate
- Transparency and public communication about animal research
- International variation in animal research regulations
- Xenotransplantation and human-animal chimeras`,
      keyTerms: [
        { term: 'Great ape research', definition: 'Research using chimpanzees, gorillas, orangutans, and bonobos' },
        { term: 'Xenotransplantation', definition: 'Transplanting organs from one species to another' },
        { term: 'Organoid', definition: 'A miniaturized and simplified organ grown in vitro' },
        { term: 'Organ-on-chip', definition: 'A microfluidic cell culture device that simulates organ function' },
        { term: 'Chimera', definition: 'An organism containing cells from different species' },
        { term: 'CRISPR animals', definition: 'Animals whose genes have been edited using CRISPR technology' },
        { term: 'Translational research', definition: 'Research that translates basic science into clinical applications' }
      ],
      analogies: [
        'Organoids are like tiny organs grown in a lab.',
        'Organs-on-chips are like miniature organ systems on a microchip.',
        'Chimeras are like mixtures of different species.'
      ],
      examples: [
        'NIH ending chimpanzee research support',
        'Creating humanized mouse models for disease research',
        'Organs-on-chips replacing some animal toxicity testing',
        'Gene-edited animals for disease modeling',
        'Growing human organs in pigs for transplantation',
        'Public debates about necessity of animal testing'
      ],
      patientCounselingPoints: [
        'Great apes receive special protection and are rarely used in research.',
        'Chimpanzees previously used in research have been retired to sanctuaries.',
        'Gene editing in animals raises new ethical questions.',
        'Alternative methods are reducing the need for animal research.',
        'Organs-on-chips and organoids can replace some animal testing.',
        'Xenotransplantation could use animal organs for human transplants.',
        'Debates continue about how much animal research is necessary.',
        'International laws on animal research vary significantly.',
        'Transparency about animal use helps maintain public trust.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'research-ethics', 'animal-welfare'],
    clinicalRelevance: 'medium'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
