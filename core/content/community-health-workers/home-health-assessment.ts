import { EducationalContent } from '../types';

export const homeHealthAssessmentContent: EducationalContent = {
  id: 'topic-home-health-assessment',
  type: 'topic',
  name: 'Home Health Assessment',
  nameEs: 'Evaluacion de Salud en el Hogar',
  levels: [
    {
      level: 1,
      title: 'Visiting People at Home to Help Them Stay Healthy',
      titleEs: 'Visitando a Personas en su Hogar para Ayudarles a Mantenerse Saludables',
      readingLevel: '8th grade',
      content: `
One of the most important things a community health worker (CHW) can do is visit
people in their homes. A home visit is not like going to the doctor's office. It
is more relaxed, and it happens in a place where the person feels comfortable and
safe. Think of it like this: when a friend comes to your house, you can talk more
openly than if you were in a waiting room full of strangers.

During a home visit, the CHW looks at the whole picture of a person's life —
not just their blood pressure or medications, but also their living conditions,
their neighborhood, their family, and their daily challenges. This is called a
"home health assessment." It is like being a detective, but instead of solving
a crime, you are trying to find out what helps or hurts a person's health.

Imagine you visit a family and notice that there is mold on the walls, or that
the house is very cold because the heater is broken. These are environmental
factors — things in the home that can make people sick. A child living in a
moldy home is more likely to have asthma attacks. An older adult in a cold
house is more likely to get sick in the winter. As a CHW, you can help by
connecting the family with resources to fix these problems.

The CHW also pays attention to social factors during a home visit. Does the
person have enough food? Can they get to the pharmacy to pick up their
medications? Do they have support from family or friends? Are they feeling
lonely or depressed? These social determinants of health are like invisible
forces that shape a person's wellbeing. They can be just as powerful as any
medicine.

Safety is also a big part of the home assessment. The CHW checks for things
like loose rugs that could cause falls, medications that are expired or stored
incorrectly, and whether the home has working smoke detectors. For older adults,
fall prevention is especially important because a fall can lead to serious
injury and a long recovery.

A good home visit is built on trust and respect. The CHW asks permission before
looking around the home. They listen more than they talk. They do not judge.
They treat every home with dignity, regardless of how small or cluttered it
may be. The goal is not to inspect or criticize, but to understand and to help.

After the visit, the CHW writes down what they observed and any concerns they
identified. They make a plan with the person — not for the person — about
what steps to take next. This might include scheduling a doctor's appointment,
applying for heating assistance, or connecting with a food pantry. The CHW
follows up to make sure things are moving forward.
      `.trim(),
      patientCounselingPoints: [
        'Home visits allow CHWs to see the full picture of a person\'s health, including their living conditions and daily challenges.',
        'Environmental hazards like mold, pest infestations, and broken heating systems can directly cause or worsen health problems.',
        'Social factors such as food access, transportation, loneliness, and financial stress are just as important as medical conditions.',
        'Safety checks for fall risks, medication storage, and smoke detectors are a key part of every home assessment.',
        'Trust and respect are the foundation of effective home visits — always ask permission and avoid judgment.',
      ],
      keyTerms: [
        { term: 'Home Health Assessment', definition: 'A structured visit to a person\'s home to evaluate their living conditions, health risks, and social support in order to develop a plan for improving their health.' },
        { term: 'Environmental Factors', definition: 'Physical conditions in the home or neighborhood that affect health, such as mold, lead paint, pest infestations, or lack of heat.' },
        { term: 'Social Determinants of Health', definition: 'The non-medical conditions that influence health outcomes, including income, housing, food access, education, and social support.' },
        { term: 'Fall Prevention', definition: 'Actions taken to reduce the risk of falls in the home, especially for older adults, such as removing loose rugs and installing grab bars.' },
        { term: 'Home Visit', definition: 'A scheduled visit by a CHW or other health professional to a person\'s residence to provide health support, education, or assessment.' },
        { term: 'Care Plan', definition: 'A written plan developed together with the person that outlines health goals and the steps to achieve them.' },
      ],
    },
    {
      level: 2,
      title: 'Conducting Effective Home Health Assessments',
      titleEs: 'Realizando Evaluaciones de Salud en el Hogar Efectivas',
      readingLevel: 'High school',
      content: `
Home health assessments are a cornerstone of community health worker (CHW) practice.
They provide a window into the real-life circumstances that influence a person's
health — circumstances that are often invisible in clinical settings. When conducted
effectively, home assessments can reveal critical information about environmental
hazards, medication management, nutritional status, social isolation, and safety
risks.

The process of a home health assessment begins before the CHW ever steps through
the door. Preparation includes reviewing any available information about the person,
understanding the purpose of the visit (initial assessment, follow-up, or specific
concern), and gathering necessary tools such as blood pressure cuffs, educational
materials, referral lists, and documentation forms.

Upon arrival, the CHW establishes rapport and explains the purpose of the visit.
Obtaining verbal consent is essential — the person must understand that the
assessment is voluntary and that they can decline to answer any questions or
show any part of their home. Cultural sensitivity is paramount, as attitudes
toward privacy and the sanctity of the home vary across cultures.

The environmental assessment component examines the physical conditions of the
home. Key areas of focus include housing quality (structural integrity, plumbing,
heating and cooling), indoor air quality (mold, secondhand smoke, ventilation),
water safety (lead pipes, well water testing), pest infestations (cockroaches,
rodents, bedbugs), and chemical exposures (cleaning products, pesticides stored
near food). These environmental factors are particularly relevant for households
with children, older adults, or people with respiratory conditions.

The social determinants assessment explores the broader context of the person's
life. This includes food security (access to nutritious food, ability to cook,
food storage), economic stability (employment, income, benefits enrollment),
transportation (access to medical appointments, grocery stores, pharmacies),
social connections (family support, community involvement, isolation),
education and literacy (ability to read medication labels, health materials),
and neighborhood safety (crime, walkability, access to green spaces).

Medication review is a critical component of home assessments, particularly
for individuals managing chronic conditions. The CHW can observe how
medications are stored, identify expired or duplicate prescriptions, note
whether the person has a system for remembering to take medications, and
flag potential concerns for follow-up with the healthcare provider. This is
not a clinical medication review — it is an observational assessment that
supports the clinical team.

Safety assessment includes evaluation of fall risks (loose rugs, poor
lighting, lack of grab bars), fire safety (working smoke detectors,
accessible exits, cooking safety), and emergency preparedness (knowledge
of 911, access to phone, emergency contacts posted). For homes with
children, the CHW also assesses child safety measures such as cabinet locks,
outlet covers, and safe sleep environments.

Documentation of the home assessment should be thorough, objective, and
respectful. Notes should describe observations without making judgments
about the person or their home. For example, "Three medications observed
on kitchen counter, one with expired label" is appropriate, while "Messy
kitchen with medications scattered around" is not. Documentation becomes
part of the person's record and may inform clinical care decisions.

Follow-up is where the home assessment translates into action. Based on
findings, the CHW works with the person to prioritize concerns and
develop an action plan. This might include referrals to housing assistance,
food programs, or social services; scheduling medical appointments;
providing education on safety or medication management; or connecting with
community resources for home repairs or pest control.
      `.trim(),
      patientCounselingPoints: [
        'Preparation before the visit — reviewing information and gathering tools — is essential for an effective assessment.',
        'Informed consent and cultural sensitivity must guide every interaction in a person\'s home.',
        'Environmental assessments should cover housing quality, air quality, water safety, pests, and chemical exposures.',
        'Social determinants including food security, transportation, social isolation, and economic stability are key assessment areas.',
        'Documentation should be objective and respectful, describing observations without making personal judgments.',
      ],
      keyTerms: [
        { term: 'Environmental Assessment', definition: 'A systematic evaluation of the physical conditions in and around a person\'s home that may affect their health.' },
        { term: 'Food Security', definition: 'The state of having reliable access to a sufficient quantity of affordable, nutritious food.' },
        { term: 'Medication Review', definition: 'An observational assessment of how medications are stored, organized, and used in the home setting, conducted to identify potential safety concerns.' },
        { term: 'Informed Consent', definition: 'The process of obtaining a person\'s voluntary agreement to participate in the home assessment after explaining its purpose and their right to decline.' },
        { term: 'Documentation', definition: 'The written record of observations, findings, and actions taken during a home visit, which becomes part of the person\'s care record.' },
        { term: 'Action Plan', definition: 'A collaborative plan developed with the person that outlines specific steps to address concerns identified during the home assessment.' },
      ],
    },
    {
      level: 3,
      title: 'Evidence-Based Home Assessment Frameworks and Social Determinant Screening',
      titleEs: 'Marcos de Evaluacion en el Hogar Basados en Evidencia y Tamizaje de Determinantes Sociales',
      readingLevel: 'College',
      content: `
Home health assessment by community health workers (CHWs) represents a practice
domain grounded in public health theory, social determinants of health frameworks,
and a growing evidence base linking housing conditions to health outcomes. At the
college level, understanding the structured approaches to home assessment and their
empirical foundations enhances the ability to design, implement, and evaluate these
interventions effectively.

Several standardized tools and frameworks guide home health assessments. The
Healthy Homes Rating System (HHRS), originally developed in the United Kingdom
and adapted for U.S. use, provides a systematic approach to evaluating housing
conditions and their potential health impacts. The tool categorizes hazards into
physiological (damp, cold, heat, asbestos), psychological (crowding, lighting,
noise), infectious (sanitation, water supply, drainage), and safety-related
(falls, fire, electrical, structural) domains.

The Protocol for Assessing Community Excellence in Environmental Health (PACE-EH)
offers a community-level framework that includes home-based assessment as one
component of a broader environmental health evaluation. This tool emphasizes
community participation in identifying environmental health priorities and
developing action plans.

Social determinant screening tools have proliferated in recent years as
healthcare systems recognize the impact of non-medical factors on health
outcomes. The PRAPARE (Protocol for Responding to and Assessing Patients'
Assets, Risks, and Experiences) tool was developed by the National Association
of Community Health Centers to systematically collect social determinants data
in clinical and community settings. PRAPARE assesses domains including race
and ethnicity, education, employment, income, housing stability, food
insecurity, transportation, social integration, stress, and safety.

The Accountable Health Communities (AHC) Health-Related Social Needs Screening
Tool, developed by the Centers for Medicare and Medicaid Services, focuses
on five core domains: housing instability, food insecurity, transportation
problems, utility help needs, and interpersonal safety. This tool was designed
for use in clinical settings and has been validated for identifying unmet
social needs that affect health outcomes.

The evidence linking housing conditions to health outcomes is substantial
and multifaceted. Substandard housing has been associated with increased
rates of respiratory illness (particularly asthma), lead poisoning, injuries,
mental health disorders, and infectious diseases. The pathways from housing
to health operate through multiple mechanisms: direct physical exposure
(mold, toxins, temperature extremes), psychological stress (housing
instability, crowding, noise), economic strain (housing cost burden reducing
resources for food, medication, and healthcare), and social disruption
(frequent moves, neighborhood instability, loss of social networks).

The intersection of housing policy and health policy is an area of growing
attention. The Health in All Policies (HiAP) approach advocates for
consideration of health impacts in all policy decisions, including housing,
land use, and urban planning. CHWs who understand these policy connections
can serve as effective advocates for systemic change, moving beyond
individual-level interventions to address the structural determinants of
health.

Data collection during home assessments serves multiple purposes: individual
care planning, program evaluation, community needs assessment, and advocacy.
Standardized data collection using validated tools enables aggregation
across individuals and communities, supporting population-level analysis
and resource allocation. The integration of home assessment data with
clinical data through electronic health records (EHRs) or care coordination
platforms enhances the ability of healthcare teams to address the full
spectrum of factors affecting patient health.

Quality improvement in home assessment programs involves regular calibration
of assessment tools, inter-rater reliability testing among CHWs conducting
assessments, supervision and feedback loops, and continuous training on
emerging assessment methodologies and community resources. Fidelity to
assessment protocols is essential for data quality and program credibility,
while flexibility in implementation allows for adaptation to diverse
community contexts and cultural norms.

Ethical considerations in home assessment include the balance between
thorough assessment and invasion of privacy, the responsibility to report
certain findings (such as child abuse or neglect, or unsafe living
conditions), the management of sensitive information, and the potential
for assessment findings to be used in ways that harm rather than help
(such as reporting to landlords or immigration authorities). Clear
organizational policies, informed consent processes, and ongoing ethics
training are essential safeguards.
      `.trim(),
      keyTerms: [
        { term: 'PRAPARE', definition: 'Protocol for Responding to and Assessing Patients\' Assets, Risks, and Experiences — a standardized social determinants screening tool developed by the National Association of Community Health Centers.' },
        { term: 'Healthy Homes Rating System (HHRS)', definition: 'A systematic framework for evaluating housing conditions and categorizing hazards based on their potential health impacts.' },
        { term: 'Accountable Health Communities (AHC)', definition: 'A CMS model testing whether systematically identifying and addressing unmet social needs improves health outcomes and reduces costs.' },
        { term: 'Health in All Policies (HiAP)', definition: 'An approach that systematically considers the health implications of decisions across all policy areas, including housing, transportation, and urban planning.' },
        { term: 'Housing Cost Burden', definition: 'A measure of housing affordability defined as spending more than 30% of household income on housing costs.' },
        { term: 'Inter-Rater Reliability', definition: 'The degree of agreement among multiple assessors using the same assessment tool, important for ensuring consistency in home assessments.' },
      ],
    },
    {
      level: 4,
      title: 'Advanced Home Assessment: Integration with Clinical Systems and Population Health',
      titleEs: 'Evaluacion Avanzada en el Hogar: Integracion con Sistemas Clinicos y Salud Poblacional',
      readingLevel: 'Graduate',
      content: `
At the graduate level, home health assessment by community health workers
(CHWs) is examined within the broader context of population health management,
health systems integration, and the structural determinants of health
inequity. This analysis requires understanding of systems thinking,
implementation science, data infrastructure, and the policy frameworks
that shape housing and health at the population level.

The integration of CHW home assessment data into clinical decision-making
represents a significant opportunity and challenge for health systems.
Traditional clinical data capture focuses on vital signs, laboratory values,
diagnoses, and treatments — the biomedical dimensions of health. Home
assessment data adds a fundamentally different dimension: the lived context
in which health is produced or undermined. The challenge lies in developing
data architectures, workflow processes, and interprofessional communication
norms that enable this integration without overwhelming clinicians or
reducing complex social realities to oversimplified data fields.

Electronic health record (EHR) systems are increasingly incorporating
social determinants of health (SDOH) data, supported by the development
of standardized coding systems. The ICD-10-CM Z codes (Z55-Z65) allow
for documentation of social risk factors including problems related to
education and literacy (Z55), employment and unemployment (Z56), housing
and economic circumstances (Z59), social environment (Z60), and other
psychosocial circumstances (Z65). However, the use of Z codes in practice
remains inconsistent, and there are legitimate concerns about the
implications of documenting social risk factors in medical records.

The Gravity Project, a national collaborative convened by the Social
Interventions Research and Evaluation Network (SIREN), has developed
consensus-based data standards for social determinants documentation
using standardized clinical terminologies (SNOMED CT, LOINC, ICD-10).
These standards support interoperability, enabling SDOH data collected
in one setting (such as a home visit) to be shared and used across the
care continuum.

Population-level analysis of home assessment data can inform community
health needs assessments, resource allocation decisions, and public
health intervention priorities. Geographic information systems (GIS)
mapping of assessment findings can reveal spatial patterns in housing
hazards, social needs, and health risks, supporting targeted
interventions and advocacy for neighborhood-level resources.

The causal pathways from housing conditions to health outcomes have been
elucidated through a combination of epidemiological studies, natural
experiments (such as the Moving to Opportunity study), and quasi-
experimental evaluations of housing interventions. These studies
demonstrate that housing quality, affordability, stability, and
neighborhood context independently affect physical health, mental
health, and health behaviors through biological, psychological, and
social mechanisms.

The Moving to Opportunity (MTO) study, a landmark randomized housing
mobility experiment conducted by the U.S. Department of Housing and
Urban Development, demonstrated that families who moved from high-
poverty to lower-poverty neighborhoods experienced significant
improvements in mental health, obesity, and diabetes outcomes. These
findings provide some of the strongest evidence for the causal impact
of neighborhood context on health.

Implementation science principles guide the design and evaluation of
home assessment programs within health systems. The Exploration,
Preparation, Implementation, Sustainment (EPIS) framework provides
a phased approach to integrating home assessment into organizational
workflows. Key implementation determinants include organizational
readiness, workforce capacity, technology infrastructure, financing
mechanisms, and the alignment of home assessment with organizational
strategic priorities.

Advanced practice considerations include the use of predictive
analytics to identify individuals who would benefit most from home
assessment (risk stratification), the design of tiered assessment
protocols (brief screening followed by comprehensive assessment for
those with identified needs), and the development of closed-loop
referral systems that track whether social needs identified in home
assessments are actually addressed.

The economic evaluation of home assessment programs requires
sophisticated methodological approaches. Cost-effectiveness analysis
must account for the costs of the assessment program (CHW time,
training, supervision, materials), the costs of downstream
interventions triggered by assessment findings (referrals, services,
home modifications), and the savings generated through improved
health outcomes and reduced utilization (avoided emergency department
visits, hospitalizations, and institutional care). Time horizons for
economic analysis should be sufficiently long to capture benefits
that accrue gradually, such as improved chronic disease control and
reduced long-term disability.
      `.trim(),
      clinicalNotes: [
        'ICD-10-CM Z codes (Z55-Z65) provide a standardized mechanism for documenting social risk factors in clinical records, though use remains inconsistent.',
        'The Gravity Project has developed consensus data standards for SDOH documentation using SNOMED CT and LOINC, supporting interoperability across systems.',
        'GIS mapping of home assessment data can reveal spatial patterns in housing hazards and social needs, supporting targeted community interventions.',
        'The Moving to Opportunity study provides rigorous evidence that neighborhood context causally affects health outcomes including obesity, diabetes, and mental health.',
        'Implementation of home assessment programs within health systems should be guided by frameworks such as EPIS that address readiness, capacity, and sustainability.',
        'Economic evaluation must account for both direct program costs and downstream savings from reduced utilization, using sufficiently long time horizons.',
      ],
      keyTerms: [
        { term: 'Z Codes (ICD-10-CM)', definition: 'Diagnosis codes in the Z55-Z65 range that document social determinants of health including education, employment, housing, and social environment factors.' },
        { term: 'Gravity Project', definition: 'A national initiative developing consensus-based data standards for documenting and sharing social determinants of health information across healthcare systems.' },
        { term: 'Moving to Opportunity (MTO)', definition: 'A landmark randomized housing experiment demonstrating the causal impact of neighborhood poverty on health outcomes including mental health, obesity, and diabetes.' },
        { term: 'EPIS Framework', definition: 'Exploration, Preparation, Implementation, Sustainment — a phased implementation science framework guiding the integration of evidence-based practices into organizations.' },
        { term: 'Risk Stratification', definition: 'The process of using data and predictive models to identify individuals at highest risk who would benefit most from intensive interventions like home assessment.' },
        { term: 'Closed-Loop Referral', definition: 'A referral process that tracks whether a referral was received, acted upon, and resulted in the intended service, ensuring accountability across systems.' },
      ],
    },
    {
      level: 5,
      title: 'Home Assessment as Population Health Infrastructure: Systems, Policy, and Innovation',
      titleEs: 'La Evaluacion en el Hogar como Infraestructura de Salud Poblacional: Sistemas, Politicas e Innovacion',
      readingLevel: 'Professional',
      content: `
For health systems leaders, policy makers, and public health professionals,
home health assessment by community health workers (CHWs) represents a
critical component of population health infrastructure — a mechanism for
generating actionable intelligence about the social and environmental
conditions that drive health outcomes and costs at the community level.

The strategic value of home assessment programs extends beyond individual
patient care to encompass population health surveillance, community needs
assessment, health equity monitoring, and the development of data-driven
advocacy for policy change. Organizations that invest in robust home
assessment programs create a feedback loop between community conditions
and organizational strategy, enabling more responsive and effective
resource deployment.

The data architecture required to support population-level analysis of
home assessment findings involves several interconnected components:
standardized assessment instruments with validated measures, mobile data
collection platforms with offline capability (essential for areas with
limited connectivity), secure data storage and transmission compliant
with HIPAA and organizational privacy standards, integration with EHR
systems through HL7 FHIR or similar interoperability standards, analytic
tools for individual-level care planning and population-level pattern
identification, and visualization capabilities including GIS mapping and
dashboard reporting.

The Health Information Technology for Economic and Clinical Health (HITECH)
Act and the 21st Century Cures Act have created policy frameworks
supporting health data interoperability. These frameworks are directly
relevant to the integration of CHW-collected home assessment data with
clinical systems, though implementation challenges persist, particularly
in resource-constrained community-based organizations.

Innovative financing models for home assessment programs are emerging at
the intersection of healthcare and housing sectors. Social impact bonds
(also known as pay-for-success contracts) have been used to finance
housing interventions with returns tied to measurable health outcomes.
Accountable care organizations (ACOs) and managed care organizations
(MCOs) are increasingly investing in upstream social determinant
interventions, including home assessment and remediation, as part of
total cost of care management strategies.

The Medicaid Section 1115 waiver landscape has evolved to support housing-
related services and supports, with several states obtaining approval for
waivers that include housing transition services, sustaining services, and
pre-tenancy supports. These waivers represent a significant policy shift,
recognizing housing as a health-related expenditure eligible for Medicaid
financing.

The intersection of environmental health science and community health
practice creates opportunities for home assessment programs to contribute
to environmental justice advocacy. Data on housing hazards, environmental
exposures, and health outcomes collected through home assessments can be
aggregated and analyzed to identify patterns of environmental injustice —
the disproportionate burden of environmental hazards on low-income
communities and communities of color. This data can support regulatory
enforcement actions, policy advocacy, and community organizing efforts.

Advanced technological innovations are transforming the capabilities of
home assessment programs. Internet of Things (IoT) sensors for monitoring
indoor air quality, temperature, and humidity can provide continuous
environmental data that complements periodic CHW assessments. Smartphone-
based tools for lead paint screening, mold identification, and
environmental sampling are expanding the scope of what CHWs can assess
in the field. Machine learning algorithms applied to home assessment data
can identify patterns and predict risk in ways that support targeted
intervention design.

The ethical framework for home assessment at the population level must
address questions of data sovereignty, community consent for aggregate
data use, the potential for surveillance and control disguised as health
promotion, and the obligation to act on findings at the systemic level
rather than merely documenting individual-level needs. Community-based
participatory approaches to data governance, in which communities have
meaningful control over how data about their neighborhoods is collected,
analyzed, and used, represent an emerging best practice.

Quality measurement for home assessment programs at the organizational
level should encompass structural measures (workforce capacity, training
standards, technology infrastructure), process measures (assessment
completion rates, referral rates, follow-up rates), outcome measures
(clinical outcomes, utilization patterns, patient-reported outcomes),
and equity measures (disparities in access to and benefit from home
assessment services across demographic groups). Balanced scorecards that
integrate these dimensions provide organizational leaders with a
comprehensive view of program performance.

The future of home assessment practice will be shaped by the convergence
of several trends: the continued expansion of value-based payment models
that incentivize upstream social determinant interventions, the
advancement of data interoperability standards that enable seamless
integration of community-collected data with clinical systems, the
maturation of implementation science methodologies for evaluating complex
community-clinical interventions, and the growing political and social
recognition that health equity requires addressing the conditions in
which people live, not merely the diseases they develop.
      `.trim(),
      clinicalNotes: [
        'Home assessment data architecture requires standardized instruments, mobile platforms, HIPAA-compliant storage, EHR integration via HL7 FHIR, and GIS visualization.',
        'Section 1115 waivers in multiple states now support housing-related services as Medicaid-eligible expenditures, representing a major policy shift.',
        'Social impact bonds and ACO/MCO investments in upstream determinants are emerging financing models for home assessment and remediation programs.',
        'Environmental justice advocacy can be supported by aggregating home assessment data to document disproportionate hazard exposure in vulnerable communities.',
        'IoT sensors, smartphone-based screening tools, and machine learning applied to assessment data represent frontier innovations in home assessment technology.',
        'Community data sovereignty and participatory data governance are essential ethical principles for population-level home assessment programs.',
      ],
      keyTerms: [
        { term: 'HL7 FHIR', definition: 'Health Level Seven Fast Healthcare Interoperability Resources — a standard for exchanging healthcare data electronically, enabling integration of CHW data with clinical systems.' },
        { term: 'Social Impact Bond', definition: 'A pay-for-success financing mechanism where private investors fund social interventions and receive returns based on measurable outcomes achieved.' },
        { term: 'Environmental Justice', definition: 'The fair treatment and meaningful involvement of all people regardless of race or income in environmental decisions, policies, and enforcement.' },
        { term: 'Data Sovereignty', definition: 'The principle that communities have the right to control and govern data collected about their members and neighborhoods.' },
        { term: 'Balanced Scorecard', definition: 'A strategic management framework measuring organizational performance across multiple dimensions including structural, process, outcome, and equity measures.' },
        { term: 'Section 1115 Waiver', definition: 'A Medicaid demonstration authority that allows states to test innovative approaches to coverage and service delivery, increasingly used for housing-related health services.' },
      ],
    },
  ],
  media: [],
  citations: [
    {
      id: 'citation-home-assessment-1',
      source: 'Krieger J, Higgins DL. Housing and Health: Time Again for Public Health Action. American Journal of Public Health. 2002;92(5):758-768.',
      url: 'https://doi.org/10.2105/AJPH.92.5.758',
      accessedDate: new Date().toISOString(),
    },
    {
      id: 'citation-home-assessment-2',
      source: 'Ludwig J, Duncan GJ, Gennetian LA, et al. Neighborhoods, Obesity, and Diabetes — A Randomized Social Experiment. New England Journal of Medicine. 2011;365(16):1509-1519.',
      url: 'https://doi.org/10.1056/NEJMsa1103216',
      accessedDate: new Date().toISOString(),
    },
    {
      id: 'citation-home-assessment-3',
      source: 'National Academies of Sciences, Engineering, and Medicine. Integrating Social Care into the Delivery of Health Care. Washington, DC: National Academies Press; 2019.',
      url: 'https://doi.org/10.17226/25467',
      accessedDate: new Date().toISOString(),
    },
  ],
  crossReferences: [
    {
      id: 'topic-chw-role-overview',
      name: 'Community Health Worker Role Overview',
      relationship: 'parent',
    },
    {
      id: 'topic-connecting-resources',
      name: 'Connecting People to Resources',
      relationship: 'related',
    },
  ],
  tags: [
    'home-visit',
    'health-assessment',
    'environmental-health',
    'social-determinants',
    'housing',
    'safety',
    'community-health-worker',
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
