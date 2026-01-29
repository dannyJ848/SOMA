import { LegacyEducationalContent } from '../../types';

const inclusiveCareContent: LegacyEducationalContent = {
  id: 'inclusive-care-lgbtq',
  title: 'Inclusive Care for LGBTQ+ Patients',
  category: 'LGBTQ+ Health',
  subcategory: 'General Principles',

  levels: {
    1: {
      title: 'Introduction to Inclusive Care',
      description: 'Learn the fundamentals of providing welcoming healthcare for LGBTQ+ patients.',
      content: {
        summary: 'Inclusive healthcare means creating a welcoming environment where all patients feel respected and understood regardless of sexual orientation or gender identity.',
        keyPoints: [
          'Use patients preferred names and pronouns',
          'Create a welcoming environment for all patients',
          'Ask open-ended questions about identity and health needs',
          'Respect each patients unique identity'
        ],
        definitions: [
          { term: 'Chosen Name', definition: 'The name a person uses to identify themselves, which may differ from their legal name' },
          { term: 'Pronouns', definition: 'Words used to refer to someone (he/him, she/her, they/them, ze/hir, etc.)' },
          { term: 'Sexual Orientation', definition: 'Who a person is attracted to emotionally, romantically, and sexually' },
          { term: 'Gender Identity', definition: 'A person internal sense of their own gender' }
        ],
        clinicalPearls: [
          'Always apologize and correct yourself if you use the wrong name or pronoun',
          'Include visual cues like rainbow flags or inclusive signage in your practice',
          'Don make assumptions about a patient sexual orientation or gender identity',
          'Treat each patient as an individual with unique needs'
        ],
        redFlags: [
          'Using only legal names and ignoring chosen names',
          'Making assumptions based on appearance',
          'Asking invasive or irrelevant questions',
          'Showing discomfort or judgment'
        ]
      }
    },
    intermediate: {
      title: 'Building Inclusive Clinical Practices',
      description: 'Develop skills for creating affirming healthcare environments and interactions.',
      content: {
        summary: 'Building an inclusive practice requires intentional changes to policies, physical spaces, intake forms, and staff training to ensure LGBTQ+ patients feel welcomed and respected.',
        keyPoints: [
          'Update intake forms to include diverse gender identities and sexual orientations',
          'Train all staff on LGBTQ+ cultural humility',
          'Implement non-discrimination policies that are visible to patients',
          'Create gender-neutral restrooms and changing areas'
        ],
        definitions: [
          { term: 'Cultural Humility', definition: 'An ongoing process of self-reflection and self-critique to understand personal biases and provide respectful care' },
          { term: 'Microaggression', definition: 'Subtle, often unconscious comments or behaviors that convey disrespect or negative assumptions' },
          { term: 'Minority Stress', definition: 'Chronic stress experienced by marginalized groups due to prejudice and discrimination' },
          { term: 'Affirmative Care', definition: 'Healthcare that validates and supports a person identity and experiences' }
        ],
        clinicalPearls: [
          'Include sexual orientation and gender identity (SOGI) data in electronic health records',
          'Offer all patients preventive care appropriate to their anatomy and risk factors',
          'Ask about organ inventory rather than making assumptions',
          'Recognize that LGBTQ+ patients may have had negative past healthcare experiences'
        ],
        redFlags: [
          'Separate LGBTQ+ health from "regular" health',
          'Referring to LGBTQ+ identities as "lifestyle choices"',
          'Assuming all LGBTQ+ patients need mental health care',
          'Focusing only on sexual health or HIV prevention'
        ]
      }
    },
    advanced: {
      title: 'Advanced Inclusive Care Strategies',
      description: 'Master complex scenarios and implement comprehensive inclusive care systems.',
      content: {
        summary: 'Advanced inclusive care requires addressing intersectionality, systemic barriers, and specialized health needs while maintaining patient-centered approaches.',
        keyPoints: [
          'Address intersectionality of LGBTQ+ identity with race, ethnicity, disability, and other factors',
          'Implement trauma-informed care approaches recognizing higher rates of trauma',
          'Navigate complex insurance and legal barriers for transgender patients',
          'Provide care that addresses both general health and LGBTQ+ specific concerns'
        ],
        definitions: [
          { term: 'Intersectionality', definition: 'The interconnected nature of social identities creating overlapping systems of discrimination and disadvantage' },
          { term: 'Trauma-Informed Care', definition: 'An approach that recognizes trauma symptoms and responds with appropriate practices' },
          { term: 'Gender Dysphoria', definition: 'Psychological distress resulting from mismatch between gender identity and sex assigned at birth' },
          { term: 'Euphoria', definition: 'Positive feelings experienced when gender identity is affirmed by others' }
        ],
        clinicalPearls: [
          'Screen for mental health concerns while avoiding pathologizing LGBTQ+ identities',
          'Understand legal requirements for changing gender markers on documents',
          'Advocate for patients with insurance companies for gender-affirming care coverage',
          'Connect patients with LGBTQ+ community resources and support organizations'
        ],
        redFlags: [
          'Declining to provide care based on personal beliefs',
          'Invalidating patient experiences or identities',
          'Failing to screen for health issues due to assumptions',
          'Not referring patients to qualified affirming providers when needed'
        ]
      }
    },
    expert: {
      title: 'Expert-Level LGBTQ+ Healthcare Leadership',
      description: 'Lead institutional change and advocate for LGBTQ+ health equity at systems level.',
      content: {
        summary: 'Expert practitioners champion LGBTQ+ health equity through institutional policy change, research advancement, education leadership, and advocacy addressing systemic healthcare disparities.',
        keyPoints: [
          'Design and implement institutional SOGI collection systems with proper privacy protections',
          'Lead quality improvement initiatives addressing LGBTQ+ health disparities',
          'Conduct and promote research on LGBTQ+ health outcomes and best practices',
          'Advocate for policy changes improving healthcare access for LGBTQ+ populations'
        ],
        definitions: [
          { term: 'Health Equity', definition: 'Achievement of highest level of health for all people by addressing avoidable inequalities' },
          { term: 'Structural Competency', definition: 'Ability to recognize and respond to how social structures impact health' },
          { term: 'Minority Stress Model', definition: 'Framework explaining health disparities through chronic stress from minority status' },
          { term: 'Resilience Factors', definition: 'Protective elements like community connection and identity pride that buffer minority stress' }
        ],
        clinicalPearls: [
          'Collect and analyze SOGI data to identify and address care gaps within your institution',
          'Implement LGBTQ+ health curricula for medical students, residents, and staff',
          'Create clinical pathways for gender-affirming care that are integrated throughout the system',
          'Partner with LGBTQ+ community organizations to improve health outreach and education'
        ],
        redFlags: [
          'Treating LGBTQ+ health as a specialty rather than integrated into all care',
          'Lack of LGBTQ+ representation in leadership and decision-making',
          'Policies that appear inclusive but lack implementation and accountability',
          'Failure to address discrimination complaints from patients or staff'
        ]
      }
    },
    master: {
      title: 'Mastery in LGBTQ+ Health Equity',
      description: 'Achieve comprehensive understanding of LGBTQ+ health across lifespan, contexts, and emerging research.',
      content: {
        summary: 'Mastery encompasses expertise across all aspects of LGBTQ+ health including lifespan considerations, intersectional approaches, research methodology, policy advocacy, and the evolving landscape of gender and sexuality.',
        keyPoints: [
          'Integrate LGBTQ+ health expertise across medical, surgical, mental health, and preventive care domains',
          'Address unique health needs across lifespan from youth to older adults',
          'Navigate global variations in LGBTQ+ healthcare access and cultural contexts',
          'Contribute to advancing the evidence base through rigorous research and publication'
        ],
        definitions: [
          { term: 'Epistemic Injustice', definition: 'Wrong done to someone in their capacity as a knower, including dismissal of lived experience knowledge' },
          { term: 'Cistem', definition: 'The systemic oppression and discrimination against transgender and non-binary people' },
          { term: 'Heteronormativity', definition: 'Assumption that heterosexuality is the default or preferred sexual orientation' },
          { term: 'Cisnormativity', definition: 'Assumption that being cisgender is the default or preferred gender identity' }
        ],
        clinicalPearls: [
          'Recognize how historical medical mistreatment creates ongoing distrust in healthcare systems',
          'Understand that LGBTQ+ health knowledge continues to evolve rapidly',
          'Balance evidence-based medicine with respect for patient experiences and community knowledge',
          'Mentor the next generation of affirming healthcare providers and researchers'
        ],
        redFlags: [
          'Assuming current knowledge represents complete understanding',
          'Dismissing community knowledge or patient experiences',
          'Failing to stay current with evolving terminology and research',
          'Ignoring global perspectives on LGBTQ+ health'
        ]
      }
    }
  }
};

export { inclusiveCareContent };
export default inclusiveCareContent;
