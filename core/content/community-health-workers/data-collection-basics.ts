import { EducationalContent } from '../types';

export const dataCollectionBasicsContent: EducationalContent = {
  id: 'topic-data-collection-basics',
  type: 'topic',
  name: 'Data Collection Basics',
  nameEs: 'Fundamentos de Recoleccion de Datos',
  levels: [
    {
      level: 1,
      title: 'Why Keeping Track Matters',
      titleEs: 'Por Que Es Importante Llevar un Registro',
      readingLevel: '8th grade',
      content: `
Imagine you plant a garden and you want to know which vegetables grow best in
your soil. You would keep track of what you planted, how much water you gave
each plant, how much sunlight they got, and how big they grew. Without keeping
track, you would just be guessing about what works. Data collection in community
health works the same way — it helps us know what is working and what is not.

As a community health worker (CHW), you do important work every day — visiting
families, teaching about health, connecting people to resources, and supporting
people with chronic conditions. But without data — written records of what you
do and what happens — it is very hard to show the impact of your work or to
improve it over time.

Data collection means writing down information in an organized way. This can
include basic information about the people you serve (age, gender, language,
health conditions), records of your activities (home visits, phone calls,
classes taught, referrals made), health measurements (blood pressure readings,
blood sugar levels), and outcomes (did the person get to their doctor's
appointment? Did their blood pressure improve?).

Think of data like a story told in numbers and facts. When you help 50 people
get their blood pressure checked at a health fair, that is a data point. When
20 of those people had high readings and you referred them to a clinic, that
is another data point. When 15 of those 20 actually went to the clinic, that
shows follow-through. Together, these data points tell the story of your
impact on the community.

Surveys are one of the most common tools for collecting data. A survey is a
set of questions that you ask people to answer. Surveys can be done on paper,
on a tablet or phone, or verbally. Good survey questions are clear, simple,
and respectful. They avoid confusing language and give people the option to
decline answering. Always explain to people why you are asking the questions
and how their information will be used and protected.

Community needs assessments are a special type of data collection that helps
you understand the biggest health concerns in your area. A needs assessment
might include surveys, community meetings, interviews with leaders, and
review of public health data. The results help guide what programs and
services are most needed.

Privacy and confidentiality are extremely important in data collection.
The information people share with you is personal and sensitive. You
must keep it safe, share it only with authorized people, and follow your
organization's rules about data storage and handling. Think of each
person's information like a precious gift they have entrusted to you
— treat it with the care and respect it deserves.

Data does not have to be complicated. Even simple tracking — like keeping
a log of how many home visits you make each week, or how many people
attend your health education sessions — provides valuable information
that your organization needs to keep programs running and improve them
over time.
      `.trim(),
      patientCounselingPoints: [
        'Data collection means keeping organized records of activities, people served, and outcomes — it tells the story of your work\'s impact.',
        'Surveys are common data collection tools; good surveys use clear language and explain to participants why information is being collected.',
        'Community needs assessments use data to identify the biggest health concerns, guiding program design and resource allocation.',
        'Privacy and confidentiality are fundamental — personal information must be protected and shared only with authorized individuals.',
        'Even simple tracking of visits, calls, referrals, and attendance provides valuable information for program improvement.',
      ],
      keyTerms: [
        { term: 'Data Collection', definition: 'The organized process of gathering and recording information about people, activities, and outcomes to track progress and measure impact.' },
        { term: 'Survey', definition: 'A structured set of questions used to gather information from people about their health, needs, experiences, or opinions.' },
        { term: 'Community Needs Assessment', definition: 'A systematic process of collecting information about a community\'s health concerns, resources, and priorities to guide program planning.' },
        { term: 'Confidentiality', definition: 'The ethical and legal obligation to protect personal information and share it only with authorized individuals for approved purposes.' },
        { term: 'Outcome', definition: 'A measurable change that results from an activity or program, such as improved blood pressure or completed referrals.' },
        { term: 'Data Point', definition: 'A single piece of information or measurement collected as part of a data set, such as one person\'s blood pressure reading.' },
      ],
    },
    {
      level: 2,
      title: 'Collecting and Using Data in Community Health Programs',
      titleEs: 'Recolectando y Usando Datos en Programas de Salud Comunitaria',
      readingLevel: 'High school',
      content: `
Data collection is a fundamental skill for community health workers (CHWs)
that supports accountability, quality improvement, and evidence-based
decision-making. While data collection may seem like paperwork, it is
actually one of the most powerful tools CHWs have for demonstrating the
value of their work and improving the health of their communities.

There are different types of data that CHWs may collect. Quantitative data
consists of numbers and measurements — things that can be counted. Examples
include the number of home visits completed, blood pressure readings,
HbA1c levels, and the percentage of referrals that were completed.
Qualitative data consists of descriptions, stories, and observations —
things that capture the quality of experience. Examples include notes
about a client's home environment, quotes from participants about what
they learned in a health education session, or observations about
barriers a family faces.

Data collection tools come in many forms. Paper forms and logs are
simple and accessible but can be hard to compile and analyze. Electronic
data entry (using tablets, smartphones, or computers) is more efficient
and enables automatic compilation, but requires technology access and
training. Standardized assessment tools (like the PHQ-9 for depression
screening or the PRAPARE for social determinants) provide validated
questions that have been tested for accuracy and reliability.

The quality of data depends on how carefully it is collected. Data quality
principles include accuracy (recording the correct information), completeness
(filling in all required fields rather than leaving blanks), consistency
(collecting the same information in the same way each time), and timeliness
(recording information as close to the time of the encounter as possible,
rather than relying on memory days later).

Tracking outcomes is particularly important for demonstrating program
effectiveness. Process measures track what the program does (number of
encounters, referrals made, classes taught). Outcome measures track what
changes as a result (blood pressure reduction, medication adherence rates,
emergency department visit reduction). Both types of measures are needed —
process measures show that the program is operating as intended, while
outcome measures show that the program is making a difference.

Data entry and management systems vary by organization. Some CHW programs
use simple spreadsheets, while others use dedicated case management
software, community health worker platforms, or electronic health record
(EHR) systems. Regardless of the platform, CHWs should be trained in
the specific data entry procedures used by their organization, including
which fields are required, how to handle missing data, and how to
correct errors.

Surveys and questionnaires used in community settings should be designed
with the population in mind. Considerations include reading level (using
plain language at an 8th-grade level or below), language (translating
surveys into all languages spoken by the community), cultural appropriateness
(ensuring questions are relevant and not offensive), format (offering both
written and verbal administration options), and length (keeping surveys
as short as possible to respect participants' time).

Data reporting involves compiling collected data into summaries, reports,
and presentations that communicate findings to stakeholders. Common
reports include monthly or quarterly activity summaries (encounters,
referrals, screenings), annual outcome reports (health indicator changes,
program milestones), and funder reports (required data submissions to
grant makers or organizational leadership). CHWs may contribute to
these reports by ensuring complete and accurate data collection, even
if the compilation and analysis are done by program managers or
evaluators.

Privacy protections in data collection are governed by laws and
organizational policies. HIPAA (Health Insurance Portability and
Accountability Act) protects health information in healthcare settings.
Organizational privacy policies may impose additional protections.
CHWs should understand what constitutes protected information, how
to securely store and transmit data, who is authorized to access
data, and what to do if a privacy breach occurs.
      `.trim(),
      patientCounselingPoints: [
        'Both quantitative data (numbers, measurements) and qualitative data (stories, observations) are valuable for understanding community health impact.',
        'Data quality depends on accuracy, completeness, consistency, and timeliness — recording information correctly and promptly.',
        'Process measures track what the program does; outcome measures track what changes as a result — both are essential for demonstrating value.',
        'Surveys for community settings should be in plain language, translated into relevant languages, and kept as short as possible.',
        'HIPAA and organizational privacy policies govern how health data is collected, stored, shared, and protected.',
      ],
      keyTerms: [
        { term: 'Quantitative Data', definition: 'Numerical data that can be counted and measured, such as blood pressure readings, visit counts, and referral completion rates.' },
        { term: 'Qualitative Data', definition: 'Descriptive data capturing the quality of experiences, such as client stories, observations, and interview responses.' },
        { term: 'Process Measure', definition: 'A metric tracking program activities and operations, such as the number of home visits, classes taught, or referrals made.' },
        { term: 'Outcome Measure', definition: 'A metric tracking changes in health or behavior that result from program activities, such as blood pressure reduction or increased screening rates.' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act — federal law protecting the privacy and security of individuals\' health information.' },
        { term: 'Data Quality', definition: 'The degree to which collected data is accurate, complete, consistent, and timely — essential for reliable program evaluation and decision-making.' },
      ],
    },
    {
      level: 3,
      title: 'Program Evaluation Methodology and Data Systems for CHW Programs',
      titleEs: 'Metodologia de Evaluacion de Programas y Sistemas de Datos para Programas de Promotores',
      readingLevel: 'College',
      content: `
Program evaluation and data management for CHW programs draw on research
methodology, information science, and public health evaluation frameworks.
College-level understanding of these domains enhances the ability to
design data collection systems, conduct meaningful evaluations, and
use data to drive program improvement and advocacy.

Program evaluation is the systematic collection and analysis of information
about program activities, characteristics, and outcomes to make judgments,
improve effectiveness, and inform decisions. The CDC's framework for
program evaluation identifies six steps: engage stakeholders, describe
the program, focus the evaluation design, gather credible evidence,
justify conclusions, and ensure use and share lessons learned. This
framework provides a structured approach that can be applied to CHW
programs of any size or complexity.

Evaluation designs exist on a continuum of rigor. Descriptive designs
document what the program does and who it serves, without comparison
groups. Pre-post designs measure outcomes before and after the program
but cannot control for external factors that may influence results.
Quasi-experimental designs use comparison groups (matched populations
that did not receive the program) to strengthen causal inference.
Experimental designs (randomized controlled trials) randomly assign
participants to intervention and control groups, providing the strongest
evidence of program impact. Each design has trade-offs between rigor,
feasibility, and cost.

The development of a program evaluation plan should begin at the design
stage of the program, not after implementation. Key components include
the evaluation questions (what do we want to know?), indicators (what
will we measure?), data sources (where will the information come from?),
data collection methods (how will we collect it?), data collection
timeline (when will we collect it?), analysis plan (how will we analyze
the data?), and dissemination plan (how will we share the findings?).

Validated assessment instruments provide standardized measures for
constructs commonly assessed in CHW programs. Examples include the
Patient Health Questionnaire (PHQ-9) for depression, the Generalized
Anxiety Disorder scale (GAD-7) for anxiety, the Patient Activation
Measure (PAM) for self-management readiness, the PRAPARE tool for
social determinants, the Diabetes Self-Management Questionnaire (DSMQ),
and the Hunger Vital Sign for food insecurity screening. Using validated
instruments enhances data quality and allows comparison with benchmarks
and other programs.

Data management systems for CHW programs range from simple to complex.
Spreadsheet-based systems (Excel, Google Sheets) are accessible but
limited in capacity, security, and multi-user functionality. Database
systems (Access, REDCap) offer greater capacity and structure. Dedicated
CHW software platforms (CHW Central, Salesforce-based systems) provide
workflow management, data collection, and reporting tailored to CHW
practice. EHR-integrated systems enable CHW data to flow into clinical
records and vice versa. The choice of system depends on organizational
resources, technical capacity, data volume, and integration needs.

Data analysis for CHW program evaluation may include descriptive
statistics (frequencies, means, medians, percentages), comparative
statistics (t-tests, chi-square tests, regression analysis to compare
outcomes between groups), trend analysis (examining changes over time),
and qualitative analysis (thematic coding of interview, focus group,
or observational data). Mixed-methods analysis combines quantitative
and qualitative findings to provide a more complete understanding of
program processes and outcomes.

Community needs assessment methodology combines multiple data sources
and methods. Secondary data analysis uses existing data sources (census
data, vital statistics, hospital discharge data, program enrollment
data) to characterize community demographics and health status. Primary
data collection gathers new information through surveys, focus groups,
key informant interviews, and community mapping. Asset mapping
identifies community strengths and resources in addition to needs.
Participatory approaches involve community members as co-investigators,
enhancing both the quality and the ownership of assessment findings.

Ethical considerations in data collection for CHW programs include
informed consent (ensuring participants understand what data is being
collected and how it will be used), privacy protections (safeguarding
personal information), data ownership (clarifying who owns and controls
collected data), responsible use (using data to benefit participants
and communities rather than to harm or exploit), and equitable
representation (ensuring data collection practices do not exclude or
misrepresent marginalized groups).
      `.trim(),
      keyTerms: [
        { term: 'Program Evaluation', definition: 'The systematic collection and analysis of information about program activities, characteristics, and outcomes to make judgments and improve effectiveness.' },
        { term: 'Quasi-Experimental Design', definition: 'An evaluation design using comparison groups without random assignment to strengthen causal inference while remaining feasible in community settings.' },
        { term: 'Validated Instrument', definition: 'A standardized assessment tool that has been tested for reliability and validity, enabling consistent measurement and comparison across programs and populations.' },
        { term: 'REDCap', definition: 'Research Electronic Data Capture — a web-based data management platform widely used in health research and program evaluation for secure data collection and storage.' },
        { term: 'Mixed-Methods Analysis', definition: 'An analytical approach combining quantitative (numerical) and qualitative (descriptive) data to provide a more comprehensive understanding of program impact.' },
        { term: 'Asset Mapping', definition: 'A component of community needs assessment that identifies existing community strengths, resources, and capacities rather than focusing solely on deficits and needs.' },
      ],
    },
    {
      level: 4,
      title: 'Advanced Evaluation Design, Data Infrastructure, and Implementation Science',
      titleEs: 'Diseno Avanzado de Evaluacion, Infraestructura de Datos y Ciencia de Implementacion',
      readingLevel: 'Graduate',
      content: `
Graduate-level engagement with data collection and program evaluation for
CHW programs requires understanding of advanced research methodologies,
data governance frameworks, implementation science measurement
approaches, and the organizational systems needed to support data-
driven decision-making.

Implementation science contributes specific measurement frameworks for
evaluating CHW programs. The distinction between effectiveness outcomes
(does the intervention improve health?) and implementation outcomes
(is the intervention being delivered as intended?) is fundamental.
Proctor and colleagues identified eight implementation outcomes:
acceptability, adoption, appropriateness, feasibility, fidelity,
implementation cost, penetration, and sustainability. Measuring
these outcomes alongside health outcomes provides a comprehensive
picture of program performance and identifies factors that facilitate
or hinder successful implementation.

Pragmatic trial designs are particularly relevant to CHW program
evaluation because they assess interventions under real-world
conditions rather than controlled research settings. The PRECIS-2
tool helps researchers position their trial on the continuum from
explanatory (efficacy under ideal conditions) to pragmatic
(effectiveness under usual conditions) across nine domains including
eligibility criteria, setting, organization, flexibility in delivery,
and primary analysis. CHW program evaluations should generally lean
toward the pragmatic end of this continuum.

Data governance for CHW programs involves policies and procedures
governing data collection, storage, access, sharing, retention, and
disposal. A comprehensive data governance framework addresses data
ownership (who has authority over the data), data stewardship (who
is responsible for data quality and management), access controls
(who can view or modify data and under what conditions), data sharing
agreements (terms under which data is shared with partners), data
retention and disposal (how long data is kept and how it is destroyed),
data security (technical and administrative safeguards protecting
data from unauthorized access), and audit and accountability (how
compliance with governance policies is monitored).

The development of CHW program dashboards requires thoughtful selection
of key performance indicators (KPIs) that align with program goals,
organizational priorities, and stakeholder information needs. Effective
dashboards display a balanced set of metrics across domains (process,
outcome, equity, efficiency), present data in accessible visual
formats (charts, graphs, maps, trend lines), enable drill-down from
summary metrics to underlying detail, update at defined frequencies
(real-time, daily, weekly, monthly), and flag metrics that fall
outside defined thresholds for management attention.

Advanced statistical methods for CHW program evaluation include
multilevel modeling (accounting for nesting of individuals within
CHWs, CHWs within organizations), propensity score matching
(creating comparison groups from observational data), interrupted
time series analysis (evaluating the impact of program implementation
on trends over time), mediation analysis (testing the causal
pathways through which CHW interventions produce outcomes), and
cost-effectiveness analysis (comparing program costs to outcomes
in standardized units such as quality-adjusted life years).

Participatory evaluation approaches align with CHW values of
community engagement and empowerment. Empowerment evaluation,
developed by David Fetterman, involves program stakeholders
(including CHWs and community members) in designing, conducting,
and interpreting the evaluation. Community-based participatory
research (CBPR) principles applied to evaluation ensure that
community priorities guide evaluation questions, community members
contribute to data collection and interpretation, findings are
disseminated to and used by the community, and the evaluation
process itself builds community capacity.

The tension between evaluation rigor and practical feasibility is
a persistent challenge in CHW program evaluation. Rigorous
evaluation designs (such as RCTs) provide the strongest evidence
but are expensive, time-consuming, and may require resources and
expertise beyond the capacity of community-based organizations.
Practical approaches that maintain methodological quality while
working within resource constraints include single-group pre-post
designs with validated instruments, matched comparison group
designs using administrative data, natural experiment designs
leveraging phased program rollout, and contribution analysis that
builds a credible case for program impact through multiple lines
of evidence.

Data use in organizational decision-making requires a culture of
learning that values evidence, tolerates ambiguity, and supports
iterative improvement. Organizations that effectively use evaluation
data create regular forums for reviewing data (monthly data reviews,
quarterly program assessments), involve frontline staff (including
CHWs) in data interpretation, use data for improvement rather than
punishment, invest in data literacy training for all staff, and
celebrate data-informed successes and learnings.
      `.trim(),
      clinicalNotes: [
        'Implementation outcomes (acceptability, adoption, fidelity, sustainability) should be measured alongside health outcomes for comprehensive CHW program evaluation.',
        'Pragmatic trial designs (assessed using PRECIS-2) evaluate interventions under real-world conditions, most appropriate for CHW program research.',
        'Data governance frameworks must address ownership, stewardship, access, sharing, retention, security, and audit across all program data.',
        'Dashboard design should balance process, outcome, equity, and efficiency KPIs with accessible visual formats and threshold-based alerts.',
        'Participatory evaluation approaches (empowerment evaluation, CBPR) align with CHW values and build community capacity alongside generating evidence.',
        'Organizations that effectively use evaluation data create regular review forums, involve frontline staff, and use findings for improvement rather than punishment.',
      ],
      keyTerms: [
        { term: 'Implementation Outcomes', definition: 'Proctor\'s eight measures of implementation quality: acceptability, adoption, appropriateness, feasibility, fidelity, cost, penetration, and sustainability.' },
        { term: 'PRECIS-2', definition: 'A tool for assessing where a clinical trial sits on the continuum from explanatory (controlled conditions) to pragmatic (real-world conditions) across nine design domains.' },
        { term: 'Data Governance', definition: 'The framework of policies and procedures governing how data is collected, managed, accessed, shared, retained, and disposed of within an organization.' },
        { term: 'Propensity Score Matching', definition: 'A statistical method for creating comparison groups from observational data by matching individuals on their estimated probability of receiving the intervention.' },
        { term: 'Empowerment Evaluation', definition: 'An evaluation approach (Fetterman) involving program stakeholders in designing, conducting, and interpreting evaluation, building capacity alongside generating evidence.' },
        { term: 'Contribution Analysis', definition: 'An evaluation approach building a credible case for program impact through multiple lines of evidence when randomized designs are not feasible.' },
      ],
    },
    {
      level: 5,
      title: 'Data Systems, Learning Organizations, and Evidence Infrastructure',
      titleEs: 'Sistemas de Datos, Organizaciones que Aprenden e Infraestructura de Evidencia',
      readingLevel: 'Professional',
      content: `
For organizational leaders and program directors, data collection and
evaluation infrastructure for CHW programs represents a strategic
investment that enables evidence-based management, accountability to
stakeholders, continuous quality improvement, and the generation of
evidence that advances the field. Building this infrastructure requires
attention to technology, workforce, governance, culture, and the
external environment.

The data architecture for CHW programs at enterprise scale comprises
multiple interconnected layers. The data collection layer includes
mobile and field-based data capture tools, standardized forms and
validated instruments, point-of-care device integration, and automated
data quality checks. The data management layer includes secure cloud-
based storage, data normalization and deduplication processes, master
person index for longitudinal tracking, and integration engines
connecting CHW data with clinical, claims, and social service systems.
The analytics layer includes descriptive dashboards for operational
monitoring, predictive models for risk stratification and resource
allocation, and inferential analysis for program evaluation. The
reporting layer includes automated regulatory and funder reports,
stakeholder-facing impact summaries, and community-facing data
visualizations.

The concept of a learning health system applies directly to CHW program
management. A learning health system generates and applies the best
evidence as part of the routine workflow, creating a continuous cycle
of data collection, analysis, action, and refinement. For CHW programs,
this means that program data flows automatically into analytics systems,
insights are delivered to CHWs and supervisors in actionable formats,
evidence informs program design modifications and resource allocation,
and the effects of changes are measured and fed back into the cycle.

The evidence infrastructure needed to advance the CHW field requires
coordinated investment across organizations and geographies. Multi-
site evaluation networks enable studies with adequate sample sizes,
diverse populations, and generalizable findings. Standardized data
elements and common data models facilitate cross-program comparison
and meta-analysis. Shared technology platforms reduce per-organization
costs for data management and analytics. Research-practice partnerships
bridge the gap between academic rigor and community-based practice.

Workforce data literacy is a critical organizational capability.
Data literacy encompasses the ability to read data (understand what
data means), work with data (handle and manipulate data), analyze
data (draw conclusions from data), and argue with data (use data to
support decisions and advocacy). Building data literacy across the
CHW workforce — from frontline workers to program directors — requires
ongoing training, coaching, and the creation of organizational
cultures that value and use data without penalizing the people who
generate it.

Advanced analytics applications for CHW programs include machine
learning for predicting which clients are at highest risk for adverse
outcomes and would benefit most from CHW intervention, natural
language processing for extracting insights from unstructured CHW
notes and client narratives, geospatial analytics for optimizing
CHW deployment across geographic areas, social network analysis
for understanding how health information and behavior change spread
through communities, and simulation modeling for testing program
design alternatives before implementation.

The ethical framework for data systems in CHW programs must address
several frontier issues. Data sovereignty — the right of communities
to control data about their members — challenges traditional
organizational ownership models. Algorithmic transparency requires
that predictive models used to prioritize CHW services are explainable
and subject to community input. Surveillance concerns arise when data
collected for health purposes could potentially be used for
immigration enforcement, criminal justice, or other harmful purposes.
The balance between data utility and privacy protection requires
ongoing negotiation as data systems become more powerful and
interconnected.

The sustainability of data and evaluation infrastructure depends on
demonstrating value to organizational decision-makers. The business
case for investment includes improved program efficiency through data-
driven resource allocation, enhanced funding competitiveness through
demonstrated impact, reduced risk through quality monitoring and early
problem identification, strengthened stakeholder relationships through
transparent reporting, and compliance with regulatory and accreditation
data requirements.

Looking forward, the field must address the challenge of building
data infrastructure that is robust enough to support rigorous
evaluation, flexible enough to adapt to diverse program models and
community contexts, accessible enough for community-based
organizations with limited technical capacity, and governed by
principles of equity, transparency, and community accountability.
      `.trim(),
      clinicalNotes: [
        'Enterprise data architecture requires interconnected collection, management, analytics, and reporting layers with automated quality checks and system integration.',
        'Learning health system principles create a continuous cycle of data collection, analysis, action, and refinement embedded in routine CHW program workflows.',
        'Multi-site evaluation networks with standardized data elements enable adequately powered studies with generalizable findings for field advancement.',
        'Data literacy across the CHW workforce requires training in reading, working with, analyzing, and arguing with data within supportive organizational cultures.',
        'Advanced analytics (ML, NLP, geospatial, network analysis, simulation) represent frontier applications requiring validation for accuracy, fairness, and utility.',
        'Data sovereignty, algorithmic transparency, and surveillance concerns represent ethical frontier issues requiring community engagement and governance structures.',
      ],
      keyTerms: [
        { term: 'Learning Health System', definition: 'A system in which data, analytics, and evidence generation are integrated into routine workflows, creating continuous cycles of improvement.' },
        { term: 'Master Person Index', definition: 'A system that maintains a unique identifier for each individual across multiple data sources, enabling longitudinal tracking and deduplication.' },
        { term: 'Data Literacy', definition: 'The ability to read, work with, analyze, and argue with data — a critical workforce capability for evidence-based CHW program management.' },
        { term: 'Common Data Model', definition: 'A standardized structure for organizing and representing data that enables comparison and pooling across multiple organizations and programs.' },
        { term: 'Social Network Analysis', definition: 'A method for studying how connections between individuals influence the spread of health information, behaviors, and outcomes through communities.' },
        { term: 'Algorithmic Transparency', definition: 'The principle that predictive models and AI tools used in CHW programs should be explainable, auditable, and subject to community input and oversight.' },
      ],
    },
  ],
  media: [],
  citations: [
    {
      id: 'citation-data-1',
      source: 'Centers for Disease Control and Prevention. Framework for Program Evaluation in Public Health. MMWR. 1999;48(RR-11):1-40.',
      url: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/rr4811a1.htm',
      accessedDate: new Date().toISOString(),
    },
    {
      id: 'citation-data-2',
      source: 'Proctor E, Silmere H, Raghavan R, et al. Outcomes for Implementation Research: Conceptual Distinctions, Measurement Challenges, and a Research Agenda. Administration and Policy in Mental Health. 2011;38(2):65-76.',
      url: 'https://doi.org/10.1007/s10488-010-0319-7',
      accessedDate: new Date().toISOString(),
    },
    {
      id: 'citation-data-3',
      source: 'Fetterman DM, Kaftarian SJ, Wandersman A. Empowerment Evaluation: Knowledge and Tools for Self-Assessment, Evaluation Capacity Building, and Accountability. 2nd ed. Thousand Oaks, CA: Sage Publications; 2015.',
      url: 'https://us.sagepub.com/en-us/nam/empowerment-evaluation/book240286',
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
      id: 'topic-health-screening-referral',
      name: 'Health Screening and Referral',
      relationship: 'related',
    },
  ],
  tags: [
    'data-collection',
    'program-evaluation',
    'community-needs-assessment',
    'surveys',
    'outcomes-tracking',
    'quality-improvement',
    'community-health-worker',
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
