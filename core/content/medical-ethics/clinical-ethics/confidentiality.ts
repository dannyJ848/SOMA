import { EducationalContent } from '../../types';

export const confidentiality: EducationalContent = {
  id: 'confidentiality',
  type: 'concept',
  name: 'Confidentiality',
  alternateNames: ['Patient privacy', 'Medical privacy'],
  levels: {
    1: {
      level: 1,
      summary: 'Understanding the basic concept of patient confidentiality in healthcare.',
      explanation: `Confidentiality protects private patient information. It is essential for trust in the patient-provider relationship. Healthcare providers must not disclose patient information without permission. Confidentiality is protected by law and professional ethics.

**Key Concepts:**

- Confidentiality protects private patient information
- Essential for trust in the patient-provider relationship
- Healthcare providers must not disclose patient information without permission
- Protected by law and professional ethics`,
      keyTerms: [
        { term: 'Confidentiality', definition: 'The protection of personal health information from being shared without permission' },
        { term: 'Privacy', definition: 'The right to keep personal information and activities from being disclosed' },
        { term: 'Protected health information', definition: 'Health information that is protected by law from unauthorized disclosure' },
        { term: 'Trust', definition: 'The belief that healthcare providers will keep information private' },
        { term: 'HIPAA', definition: 'A US law that protects the privacy of health information' }
      ],
      analogies: [
        'Confidentiality is like a locked diary - only you should have access to your personal information.',
        'It\'s like a Vegas rule - what happens in the doctor\'s office stays there.'
      ],
      examples: [
        'Not discussing a patient\'s condition with friends',
        'Keeping medical records secure and private',
        'Only sharing information with the healthcare team'
      ],
      patientCounselingPoints: [
        'Your health information is private and protected.',
        'Your healthcare team is required to keep your information confidential.',
        'Information is only shared with those involved in your care.',
        'Laws like HIPAA provide legal protection for your health information.'
      ]
    },
    2: {
      level: 2,
      summary: 'Historical ethical basis and legal frameworks for patient privacy.',
      explanation: `Confidentiality has deep historical roots. The Hippocratic Oath includes confidentiality provisions. Medical professionalism is built on trust-based relationships. Legal protections include HIPAA, GDPR, and other regulations. Psychotherapy and special confidentiality protections exist. Dignity and respect are foundational values.

**Key Points:**

- Hippocratic Oath confidentiality provisions
- Medical professionalism and trust-based relationships
- Legal protections: HIPAA, GDPR, and other regulations
- Psychotherapy and special confidentiality protections
- Dignity and respect as foundational values`,
      keyTerms: [
        { term: 'Hippocratic Oath', definition: 'An ancient ethical code for physicians that includes confidentiality' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act - a US law protecting health information privacy' },
        { term: 'GDPR', definition: 'General Data Protection Regulation - European Union law on data protection' },
        { term: 'Professional duty', definition: 'Ethical obligation to protect patient information' },
        { term: 'Psychotherapist-patient privilege', definition: 'Legal protection preventing disclosure of communications in therapy' }
      ],
      analogies: [
        'The Hippocratic Oath is like the original privacy policy for doctors.',
        'HIPAA is like a privacy law specifically for your health information.'
      ],
      examples: [
        'Historical evolution of medical confidentiality',
        'Development of health privacy laws',
        'Confidentiality across different healthcare professions',
        'International variations in privacy protections'
      ],
      patientCounselingPoints: [
        'Confidentiality has been a medical ethical principle for thousands of years.',
        'Modern laws provide legal protection for your health information.',
        'Different countries have different privacy laws to protect you.',
        'Your information is protected by both ethical codes and laws.'
      ]
    },
    3: {
      level: 3,
      summary: 'Understanding what information is protected and how it should be handled.',
      explanation: `All information in the medical record is confidential. This includes information shared in the clinical encounter, genetic information and family implications, mental health and substance use records, photographs, videos, and other media, digital health data and apps. Confidentiality persists indefinitely.

**Scope of Confidential Information:**

- All information in the medical record is confidential
- Information shared in the clinical encounter
- Genetic information and family implications
- Mental health and substance use records
- Photographs, videos, and other media
- Digital health data and apps
- Duration: confidentiality persists indefinitely`,
      keyTerms: [
        { term: 'Protected health information', definition: 'Any health information that can be linked to a specific person' },
        { term: 'Medical record', definition: 'The documented history of a patient\'s medical care' },
        { term: 'Genetic information', definition: 'Information about a person\'s genetic makeup and genetic test results' },
        { term: 'Digital health', definition: 'Healthcare services and information provided through digital technology' },
        { term: 'De-identification', definition: 'Removing personal identifiers from health information' }
      ],
      analogies: [
        'Medical records are like a diary that includes everything about your health - and it\'s all private.',
        'Genetic information is like family secrets - it\'s about you and your relatives.'
      ],
      examples: [
        'Protecting HIV status information',
        'Securing mental health counseling records',
        'Handling genetic test results with family implications',
        'Managing photos taken for clinical documentation'
      ],
      patientCounselingPoints: [
        'Everything in your medical record is confidential.',
        'Genetic information about you has implications for your family members.',
        'Mental health records receive special protection.',
        'Even digital health apps and devices should protect your privacy.',
        'Your information remains confidential indefinitely, even after death.'
      ]
    },
    4: {
      level: 4,
      summary: 'Situations where breaching confidentiality may be ethically and legally justified.',
      explanation: `There are important exceptions to confidentiality. Mandatory reporting applies to child/elder abuse and certain communicable diseases. The duty to warn/protect applies for imminent harm to self or others. Court orders and legal proceedings may require disclosure. Public health reporting and surveillance, insurance and payment documentation, and healthcare operations and quality improvement also involve information sharing.

**Exceptions to Confidentiality:**

- Mandatory reporting: child/elder abuse, certain communicable diseases
- Imminent harm to self or others (duty to warn/protect)
- Court orders and legal proceedings
- Public health reporting and surveillance
- Insurance and payment documentation
- Healthcare operations and quality improvement
- Within-hospital communication for care coordination`,
      keyTerms: [
        { term: 'Mandatory reporting', definition: 'Legal requirement to disclose certain information to authorities' },
        { term: 'Duty to warn', definition: 'The obligation to warn potential victims of a patient\'s threatened violence' },
        { term: 'Tarasoff duty', definition: 'The legal duty to warn potential victims based on a patient\'s threat' },
        { term: 'Public health reporting', definition: 'Mandatory reporting of certain diseases to public health authorities' },
        { term: 'Subpoena', definition: 'A court order requiring a person to testify or produce documents' }
      ],
      analogies: [
        'Mandatory reporting is like breaking silence to protect someone from harm.',
        'Duty to warn is like telling someone about a danger you know about.'
      ],
      examples: [
        'Reporting suspected child abuse to authorities',
        'Warning a potential victim of a violent patient',
        'Providing records in response to a court subpoena',
        'Reporting notifiable diseases to public health departments',
        'Sharing information for continuity of care with referrals'
      ],
      patientCounselingPoints: [
        'There are limited situations where information must be shared.',
        'Healthcare providers must report abuse to protect vulnerable people.',
        'If you threaten harm to yourself or others, your doctor may need to warn others.',
        'Court orders may require disclosure of health information.',
        'Public health agencies track certain diseases to protect communities.',
        'Information shared for your care is still protected.'
      ]
    },
    5: {
      level: 5,
      summary: 'Modern dilemmas in protecting privacy in complex healthcare and technological environments.',
      explanation: `Contemporary challenges in confidentiality include electronic health records and cybersecurity, health information exchange and interoperability, social media and provider boundaries, telehealth and cross-border privacy issues, big data/research and secondary use of clinical data, family and caregivers (balancing privacy with involvement), genomic data and biological specimens, AI/ML and data use for algorithm training, wearables and patient-generated health data, and de-identification and re-identification risks.

**Contemporary Challenges:**

- Electronic health records and cybersecurity
- Health information exchange and interoperability
- Social media and provider boundaries
- Telehealth and cross-border privacy issues
- Big data, research, and secondary use of clinical data
- Family and caregivers: balancing privacy with involvement
- Genomic data and biological specimens
- AI/ML and data use for algorithm training
- Wearables and patient-generated health data
- De-identification and re-identification risks`,
      keyTerms: [
        { term: 'Cybersecurity', definition: 'Protection of computer systems and data from digital attacks' },
        { term: 'Health information exchange', definition: 'The electronic sharing of health information between organizations' },
        { term: 'Telehealth', definition: 'Healthcare services provided remotely through technology' },
        { term: 'Data de-identification', definition: 'Removing personal identifiers from health data' },
        { term: 'Re-identification', definition: 'The process of identifying individuals from supposedly anonymous data' },
        { term: 'Secondary use', definition: 'Using health information for purposes other than direct patient care' }
      ],
      analogies: [
        'De-identified data is like removing names from a list - but you might still recognize people from other details.',
        'Cybersecurity in healthcare is like security for a bank - it must be constantly maintained.'
      ],
      examples: [
        'Preventing data breaches in electronic health systems',
        'Managing patient information on social media',
        'Privacy protections in telehealth across state/country lines',
        'Using clinical data for AI development',
        'Sharing information with family members at patient request',
        'Incidental findings in genomic research databases'
      ],
      patientCounselingPoints: [
        'Electronic health records require strong cybersecurity to protect your information.',
        'Telehealth privacy involves additional legal complexities across state lines.',
        'Social media and digital health create new privacy challenges.',
        'Your health data may be used for research and AI development.',
        'Balancing family involvement with privacy is complex.',
        'Genomic data privacy is particularly challenging due to family implications.',
        'Wearables and health apps generate data that needs protection.',
        'Even de-identified data can sometimes be re-identified.'
      ]
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['medical-ethics', 'confidentiality', 'patient-privacy'],
    clinicalRelevance: 'high'
  },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
  version: 1,
  status: 'published'
};
