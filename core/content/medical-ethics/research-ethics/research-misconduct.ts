import { EducationalContent } from '../../types';

export const researchMisconduct: EducationalContent = {
  id: 'research-misconduct',
  type: 'concept',
  name: 'Research Misconduct',
  alternateNames: ['Scientific misconduct', 'Research fraud'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding what constitutes misconduct in research.',
      explanation: `Research misconduct violates scientific integrity. Misconduct undermines public trust in science. Three core forms are fabrication, falsification, and plagiarism. There are serious consequences for researchers and institutions.

**Key Concepts:**

- Research misconduct violates scientific integrity
- Misconduct undermines public trust in science
- Three core forms: fabrication, falsification, plagiarism
- Consequences for researchers and institutions`,
      keyTerms: [
        { term: 'Research misconduct', definition: 'Violation of ethical standards in scientific research' },
        { term: 'Fabrication', definition: 'Making up research data or results' },
        { term: 'Falsification', definition: 'Manipulating research materials or changing data' },
        { term: 'Plagiarism', definition: 'Using someone else\'s work without credit' },
        { term: 'Scientific integrity', definition: 'Honesty and ethical behavior in research' }
      ],
      analogies: [
        'Fabrication is like making up evidence in a court case.',
        'Plagiarism is like copying someone else\'s homework and claiming it as yours.'
      ],
      examples: [
        'Making up experimental data',
        'Changing data to support a hypothesis',
        'Using someone else\'s work without credit'
      ],
      patientCounselingPoints: [
        'Research integrity is essential for trustworthy medical knowledge.',
        'Misconduct in research can harm patients who rely on scientific findings.',
        'Most researchers are honest and follow ethical guidelines.',
        'Systems exist to detect and prevent research misconduct.'
      ]
    },
    2: {
      level: 2,
      summary: 'Detailed examination of the three main types of misconduct.',
      explanation: `The three main types of misconduct are well-defined. Fabrication means making up results or recording nonexistent data. Falsification involves manipulating research materials or changing data. Plagiarism means using others\' ideas or words without attribution. Other questionable research practices exist. Image manipulation and digital forgery are modern concerns. Authorship disputes and gift authorship are problems.

**Forms of Research Misconduct:**

- Fabrication: making up results or recording nonexistent data
- Falsification: manipulating research materials or changing data
- Plagiarism: using others\' ideas or words without attribution
- Other questionable research practices
- Image manipulation and digital forgery
- Authorship disputes and gift authorship`,
      keyTerms: [
        { term: 'Fabrication', definition: 'Creating research data or results that never existed' },
        { term: 'Falsification', definition: 'Altering research data or methods to misrepresent results' },
        { term: 'Plagiarism', definition: 'Presenting others\' work as one\'s own without proper attribution' },
        { term: 'Image manipulation', definition: 'Inappropriately altering images or figures in research publications' },
        { term: 'Ghost authorship', definition: 'Not crediting someone who contributed substantially to the research' },
        { term: 'Guest authorship', definition: 'Adding someone as an author who didn\'t contribute to the research' }
      ],
      analogies: [
        'Image manipulation is like Photoshopping evidence - it changes reality.',
        'Guest authorship is like putting someone\'s name on a paper they didn\'t write.'
      ],
      examples: [
        'Inventing patients in a clinical trial dataset',
        'Removing data points to achieve statistical significance',
        'Copying paragraphs from previously published papers',
        'Splitting one study into multiple publications (salami slicing)',
        'Adding colleagues as authors who didn\'t contribute'
      ],
      patientCounselingPoints: [
        'Fabrication means researchers made up data that never existed.',
        'Falsification means researchers changed data to get desired results.',
        'Plagiarism means researchers used others\' work without giving credit.',
        'These practices undermine the scientific foundation of medicine.',
        'Peer review and replication help detect misconduct.'
      ]
    },
    3: {
      level: 3,
      summary: 'Problematic practices that fall short of formal misconduct but undermine science.',
      explanation: `Questionable research practices (QRPs) fall short of formal misconduct but still undermine science. P-hacking involves trying multiple analyses to find significance. Data dredging means searching for patterns without a hypothesis. HARKing means hypothesizing after results are known. Selective reporting and publication bias are problems. Inadequate reporting of conflicts of interest occurs. Failure to share data and materials hinders replication. Peer review abuses exist.

**Questionable Research Practices:**

- P-hacking and data dredging for statistical significance
- HARKing: Hypothesizing After Results are Known
- Selective reporting and publication bias
- Inadequate reporting of conflicts of interest
- Failure to share data and materials
- Peer review abuses`,
      keyTerms: [
        { term: 'P-hacking', definition: 'Trying multiple statistical analyses until finding significant results' },
        { term: 'Data dredging', definition: 'Searching data for patterns without a prior hypothesis' },
        { term: 'HARKing', definition: 'Hypothesizing After Results are Known' },
        { term: 'Publication bias', definition: 'Publishing only positive results while ignoring negative ones' },
        { term: 'Conflict of interest', definition: 'Financial or personal interests that could influence research' },
        { term: 'Data sharing', definition: 'Making research data available to other researchers' }
      ],
      analogies: [
        'P-hacking is like trying many keys until one opens the lock.',
        'HARKing is like predicting the winner after the game is over.',
        'Publication bias is like only reporting successes and hiding failures.'
      ],
      examples: [
        'Trying multiple statistical analyses and only reporting the significant ones',
        'Collecting data until finding a significant result',
        'Publishing only positive studies while filing negative ones',
        'Not disclosing funding from a company whose product is being studied',
        'Refusing to share raw data despite journal requirements'
      ],
      patientCounselingPoints: [
        'Questionable practices aren\'t outright fraud but still compromise science.',
        'P-hacking means researchers manipulate statistics to find "significant" results.',
        'Publication bias means we may not see studies that didn\'t find positive results.',
        'Hidden conflicts of interest can influence research outcomes.',
        'Open science practices are addressing these problems.'
      ]
    },
    4: {
      level: 4,
      summary: 'Strategies to prevent misconduct and identify it when it occurs.',
      explanation: `Preventing and detecting misconduct involves multiple approaches. Research integrity education and training are essential. Mentorship and positive research culture help. Data management plans and documentation are important. Statistical methods can detect fraud. Image forensics and duplicate detection software exist. Whistleblower protections and reporting mechanisms are critical. Institutional and federal oversight provides enforcement.

**Prevention and Detection:**

- Research integrity education and training
- Mentorship and positive research culture
- Data management plans and documentation
- Statistical methods for detecting fraud
- Image forensics and duplicate detection software
- Whistleblower protections and reporting mechanisms
- Institutional and federal oversight`,
      keyTerms: [
        { term: 'Whistleblower', definition: 'Someone who reports misconduct or unethical behavior' },
        { term: 'Research integrity', definition: 'Commitment to honesty and ethical standards in research' },
        { term: 'Data management', definition: 'Practices for organizing, storing, and documenting research data' },
        { term: 'Image forensics', definition: 'Techniques for detecting manipulation of digital images' },
        { term: 'Office of Research Integrity', definition: 'U.S. federal office overseeing research integrity' },
        { term: 'Retraction', definition: 'Withdrawing a published paper due to errors or misconduct' }
      ],
      analogies: [
        'Image forensics is like detective work for digital images.',
        'Whistleblowers are like people reporting crimes - they\'re protected for doing the right thing.'
      ],
      examples: [
        'Implementing mandatory RCR (Responsible Conduct of Research) training',
        'Using electronic lab notebooks with timestamps and audit trails',
        'Statistical tests identifying unlikely data distributions',
        'Software detecting image manipulation in publications',
        'Anonymous reporting systems for research concerns'
      ],
      patientCounselingPoints: [
        'Training in research ethics helps prevent misconduct.',
        'Good mentorship promotes research integrity.',
        'Electronic lab notebooks create audit trails for data.',
        'Statistical methods can detect unusual patterns in data.',
        'Whistleblowers are protected when they report misconduct.',
        'Research institutions have offices that handle misconduct allegations.'
      ]
    },
    5: {
      level: 5,
      summary: 'Modern issues in research integrity and evolving solutions.',
      explanation: `Contemporary challenges include predatory journals and publishing scams, paper mills and fake research articles, citation gaming and impact factor manipulation, AI-generated text and deepfake research, clinical trial registration and reporting transparency, registered reports and results-blind peer review, open science and preprints as integrity measures, research culture and systemic pressures, global perspectives on research integrity, and the reproducibility crisis and solutions.

**Contemporary Challenges and Responses:**

- Predatory journals and publishing scams
- Paper mills and fake research articles
- Citation gaming and impact factor manipulation
- AI-generated text and deepfake research
- Clinical trial registration and reporting transparency
- Registered reports and results-blind peer review
- Open science and preprints as integrity measures
- Research culture and systemic pressures
- Global perspectives on research integrity
- Reproducibility crisis and solutions`,
      keyTerms: [
        { term: 'Predatory journal', definition: 'A journal that exploits authors by publishing papers for fees without proper peer review' },
        { term: 'Paper mill', definition: 'Organizations that produce fake research papers for sale' },
        { term: 'Citation gaming', definition: 'Inappropriately inflating citation counts to manipulate metrics' },
        { term: 'Registered report', definition: 'A journal article format where methods are peer-reviewed before data collection' },
        { term: 'Open science', definition: 'Research practices that make methods and data publicly available' },
        { term: 'Preprint', definition: 'A preliminary version of a scientific paper shared before peer review' },
        { term: 'Reproducibility', definition: 'The ability of other researchers to replicate research findings' }
      ],
      analogies: [
        'Predatory journals are like diploma mills - selling credentials without proper evaluation.',
        'Paper mills are like factories producing fake designer goods.',
        'Registered reports are like agreeing on rules before a game begins.'
      ],
      examples: [
        'Identifying and avoiding predatory publishers',
        'Investigating large-scale research fraud rings',
        'ClinicalTrials.gov requiring study registration before enrollment',
        'Journals adopting registered report formats',
        'Preregistration of study protocols and analysis plans',
        'AI tools detecting potentially problematic publications',
        'Institutions creating research integrity officer positions'
      ],
      patientCounselingPoints: [
        'Predatory journals undermine research quality without proper peer review.',
        'Paper mills produce fake studies that contaminate the scientific literature.',
        'Clinical trial registration ensures studies aren\'t hidden if results are negative.',
        'Registered reports reduce publication bias by reviewing methods before results.',
        'Open science practices make research more transparent and reproducible.',
        'AI is being used both to create fake research and to detect it.',
        'Addressing research culture and pressures is essential for preventing misconduct.',
        'The reproducibility crisis has led to many positive reforms in science.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'research-ethics', 'research-integrity'],
    clinicalRelevance: 'medium'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
