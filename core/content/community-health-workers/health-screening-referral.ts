import { EducationalContent } from '../types';

export const healthScreeningReferralContent: EducationalContent = {
  id: 'topic-health-screening-referral',
  type: 'topic',
  name: 'Health Screening and Referral',
  nameEs: 'Tamizaje y Referencia en Salud',
  levels: [
    {
      level: 1,
      title: 'Checking Health Numbers and Connecting People to Care',
      titleEs: 'Revisando Numeros de Salud y Conectando a Personas con Atencion Medica',
      readingLevel: '8th grade',
      content: `
As a community health worker (CHW), one of your important jobs is helping people
find out about their health through simple tests called screenings. A screening is
like an early warning system — it checks for signs of a health problem before the
person feels sick. Think of it like checking the oil in your car. You do not wait
until the engine breaks down; you check the oil regularly so you can catch problems
early and fix them before they get worse.

The most common screenings that CHWs help with include blood pressure checks, blood
sugar (glucose) testing, and body mass index (BMI) measurements. These three numbers
tell an important story about a person's health. Let us look at each one.

Blood pressure measures how hard the blood pushes against the walls of the arteries.
Think of a garden hose — if you turn the water up too high, the hose has to work
harder and might eventually wear out. High blood pressure works the same way in
your body. It makes the heart and blood vessels work too hard, which can lead to
heart attacks, strokes, and kidney problems. A normal blood pressure is less than
120/80 mmHg. When you check someone's blood pressure, you share the result and
explain what it means in simple terms.

Blood sugar, or glucose, is the amount of sugar in the blood. Sugar is the body's
main source of energy, but too much of it can be dangerous — like too much
fertilizer can burn a plant. High blood sugar over time can damage the eyes,
kidneys, nerves, and heart. A fasting blood sugar below 100 mg/dL is normal. A
result between 100 and 125 may indicate prediabetes, and 126 or higher may
indicate diabetes. CHWs often use a small device called a glucometer to do a
quick finger-stick test.

BMI stands for body mass index. It is a number calculated from a person's height
and weight that gives a general idea of whether they are at a healthy weight.
BMI is not perfect — it does not tell you about muscle versus fat — but it is a
useful starting point for conversations about weight and health. A BMI between
18.5 and 24.9 is considered healthy. Above 25 is overweight, and above 30 is
considered obese.

After doing a screening, the CHW's job is not to diagnose or treat anything.
Instead, the CHW shares the results with the person, explains what they might
mean, and helps connect them to a healthcare provider if the numbers are
concerning. This is called a referral. A referral is like giving someone
directions to the right destination — you are not driving the car for them, but
you are making sure they know where to go and how to get there.

A good referral does not stop at giving someone a phone number. An effective CHW
will help the person understand why the referral is important, assist them in
making the appointment, address barriers like transportation or cost, and follow
up to make sure the appointment was kept. Many people fall through the cracks
between screening and treatment — the CHW's role is to catch them.

It is important to remember that screenings are not the same as diagnoses. A high
blood pressure reading at a health fair does not mean a person definitely has
hypertension. It means they need to see a doctor for further evaluation. CHWs
should always explain this difference to avoid causing unnecessary fear while
still encouraging appropriate follow-up.
      `.trim(),
      patientCounselingPoints: [
        'Screenings are early warning checks — they catch health problems before symptoms appear, like checking the oil in a car.',
        'Blood pressure, blood sugar, and BMI are the three most common screenings CHWs help with in community settings.',
        'A screening result is not a diagnosis — it is a signal that tells a person whether they need to see a doctor for further evaluation.',
        'An effective referral goes beyond giving a phone number: help with appointments, transportation, cost, and follow-up are essential.',
        'CHWs should explain results in simple terms and make sure people understand both the meaning and the next steps.',
      ],
      keyTerms: [
        { term: 'Health Screening', definition: 'A quick test or measurement done to check for early signs of a health condition before a person feels symptoms.' },
        { term: 'Blood Pressure', definition: 'The force of blood pushing against artery walls, measured in millimeters of mercury (mmHg); normal is less than 120/80.' },
        { term: 'Blood Glucose', definition: 'The amount of sugar in the blood; a fasting level below 100 mg/dL is normal, 100-125 indicates prediabetes, and 126 or above suggests diabetes.' },
        { term: 'Body Mass Index (BMI)', definition: 'A number calculated from height and weight that provides a general indication of whether a person is at a healthy weight.' },
        { term: 'Referral', definition: 'The process of connecting a person to a healthcare provider or service for further evaluation or treatment based on screening results.' },
        { term: 'Follow-Up', definition: 'Checking back with a person after a screening or referral to make sure they received the care they needed.' },
      ],
    },
    {
      level: 2,
      title: 'Screening Procedures and the Referral Process',
      titleEs: 'Procedimientos de Tamizaje y el Proceso de Referencia',
      readingLevel: 'High school',
      content: `
Health screening conducted by community health workers (CHWs) is a critical
point of entry into the healthcare system for many underserved individuals.
Screenings performed in community settings — health fairs, churches, community
centers, WIC offices, food banks — reach people who may not have regular access
to healthcare. Understanding proper screening techniques, result interpretation,
and referral processes is essential for CHW effectiveness.

Blood pressure screening requires proper technique to ensure accurate results.
The person should be seated with their back supported, feet flat on the floor,
and arm at heart level. They should not have consumed caffeine, smoked, or
exercised within the 30 minutes prior to measurement. The correct cuff size is
important — a cuff that is too small will give falsely high readings, and one
that is too large will give falsely low readings. Two readings should be taken,
one to two minutes apart, and the average should be recorded.

Blood pressure categories according to current guidelines are: normal (systolic
less than 120 AND diastolic less than 80), elevated (systolic 120-129 AND
diastolic less than 80), hypertension stage 1 (systolic 130-139 OR diastolic
80-89), hypertension stage 2 (systolic 140 or higher OR diastolic 90 or
higher), and hypertensive crisis (systolic higher than 180 AND/OR diastolic
higher than 120). A hypertensive crisis requires immediate medical attention.

Blood glucose screening using a point-of-care glucometer involves a finger-
stick blood sample. Proper technique includes cleaning the finger with an
alcohol swab, allowing it to dry, using a lancet device to prick the side
of the fingertip (less painful than the pad), obtaining an adequate blood
drop, and applying it to the test strip. Universal precautions — wearing
gloves, proper sharps disposal, and surface disinfection — must be followed
for every finger-stick test.

Interpretation of blood glucose results depends on whether the person is
fasting. A fasting blood glucose below 100 mg/dL is normal, 100-125 mg/dL
indicates impaired fasting glucose (prediabetes), and 126 mg/dL or higher
suggests diabetes. Random (non-fasting) blood glucose above 200 mg/dL with
symptoms of diabetes also warrants referral. CHWs should always ask when
the person last ate before interpreting results.

BMI calculation requires accurate height and weight measurements. BMI is
calculated as weight in kilograms divided by height in meters squared, or
alternatively as weight in pounds multiplied by 703 divided by height in
inches squared. BMI charts and calculators simplify this process. While
BMI has limitations — it does not distinguish between muscle and fat, and
thresholds may not be equally applicable across all ethnic groups — it
remains a widely used screening tool for weight-related health risk.

The referral process should be systematic and documented. Key elements
include clearly communicating the screening result to the person, explaining
the significance of the result and the reason for referral, identifying
an appropriate provider or facility (considering insurance status, language,
location, and specialty needs), assisting with appointment scheduling when
possible, addressing barriers to keeping the appointment (transportation,
childcare, work schedule, cost), providing written referral information
including the person's screening results, and following up within an
agreed-upon timeframe to confirm that the appointment was kept and to
determine next steps.

Documentation of screenings and referrals serves multiple purposes. For
the individual, it creates a record of results and actions taken. For the
CHW program, it provides data on the number and types of screenings
performed, the prevalence of abnormal findings, referral rates, and
follow-up completion rates. This data supports program evaluation, quality
improvement, and reporting to funders and stakeholders.

Additional screening activities that CHWs may participate in include
vision screening, hearing screening, depression screening using validated
tools like the PHQ-2 or PHQ-9, social needs screening, cancer screening
awareness and navigation, and immunization status review. The specific
screenings offered depend on the CHW's training, organizational protocols,
and state scope-of-practice guidelines.
      `.trim(),
      patientCounselingPoints: [
        'Proper blood pressure technique — seated position, correct cuff size, two readings averaged — is essential for accurate results.',
        'Universal precautions including gloves and proper sharps disposal must be followed for every finger-stick glucose test.',
        'Blood glucose interpretation depends on fasting status — always ask when the person last ate before explaining results.',
        'An effective referral addresses barriers (transportation, cost, language, scheduling) and includes follow-up to confirm appointment completion.',
        'Documentation of all screenings and referrals supports individual care, program evaluation, and quality improvement.',
      ],
      keyTerms: [
        { term: 'Point-of-Care Testing', definition: 'Medical testing performed at or near the site of patient care, such as a glucometer finger-stick test at a health fair.' },
        { term: 'Universal Precautions', definition: 'Infection control practices, including wearing gloves and proper disposal of sharps, applied to all blood contact situations regardless of the person\'s infection status.' },
        { term: 'Hypertensive Crisis', definition: 'A dangerously high blood pressure reading (above 180/120 mmHg) that requires immediate medical attention.' },
        { term: 'PHQ-2 / PHQ-9', definition: 'Patient Health Questionnaire screening tools used to identify possible depression; the PHQ-2 is a brief 2-question screen, and the PHQ-9 is a more detailed 9-question assessment.' },
        { term: 'Impaired Fasting Glucose', definition: 'A fasting blood sugar level between 100-125 mg/dL, indicating prediabetes and increased risk of developing type 2 diabetes.' },
        { term: 'Closed-Loop Referral', definition: 'A referral process that includes tracking and confirmation that the person received the intended service, ensuring accountability and continuity of care.' },
      ],
    },
    {
      level: 3,
      title: 'Evidence-Based Screening Protocols and Referral System Design',
      titleEs: 'Protocolos de Tamizaje Basados en Evidencia y Diseno de Sistemas de Referencia',
      readingLevel: 'College',
      content: `
Community-based health screening programs led by CHWs operate at the
intersection of clinical preventive services and public health outreach.
Understanding the evidence base for screening recommendations, the
principles of screening test validity, and the design of effective
referral systems is essential for program quality and impact.

The U.S. Preventive Services Task Force (USPSTF) provides evidence-based
recommendations for clinical preventive services, including screening
tests. USPSTF grades recommendations on an A-B-C-D-I scale: A and B
recommendations have high certainty of substantial or moderate net benefit
and are recommended for routine use. Key USPSTF recommendations relevant
to CHW-led screening include hypertension screening for adults (Grade A),
prediabetes and type 2 diabetes screening for adults aged 35-70 with
overweight or obesity (Grade B), and depression screening for the general
adult population (Grade B).

The fundamental principles of screening test validity include sensitivity
(the ability of the test to correctly identify people with the condition),
specificity (the ability to correctly identify people without the condition),
positive predictive value (the probability that a positive result indicates
true disease), and negative predictive value (the probability that a
negative result indicates true absence of disease). In community-based
screening where prevalence of the condition may be lower than in clinical
populations, positive predictive value may be reduced, leading to more
false-positive results. This underscores the importance of communicating
that screening results are not diagnostic.

The concept of number needed to screen (NNS) helps contextualize the
efficiency of screening programs. NNS represents the number of people who
must be screened to prevent one adverse outcome. For conditions like
hypertension, the NNS is relatively low because the condition is highly
prevalent and treatment is effective. For rarer conditions, the NNS may
be quite high, raising questions about resource allocation and
prioritization in community screening programs.

Quality assurance in community-based screening requires attention to
several domains: equipment maintenance and calibration (blood pressure
monitors should be validated and calibrated according to manufacturer
specifications), standardized protocols (ensuring consistent technique
across screeners), training and competency verification (initial training
with ongoing skills assessment), documentation standards (complete and
accurate recording of results), and referral thresholds (clear criteria
for when to refer and at what urgency level).

The design of referral systems in community health settings draws on
principles from health services research and quality improvement. An
effective referral system includes standardized referral criteria
(evidence-based thresholds for when screening results warrant referral),
a tiered referral pathway (distinguishing between routine referral,
urgent referral, and emergency referral), a resource directory (maintained
and updated listing of providers, clinics, and services), bidirectional
communication (the referring CHW receives feedback on whether the person
was seen and what actions were taken), tracking and follow-up mechanisms
(systematic processes for monitoring referral completion), and barrier
reduction strategies (transportation, language, insurance navigation).

The care continuum from screening to treatment involves multiple
transitions, each of which represents a potential dropout point. Research
on the "screening cascade" has documented significant attrition at each
stage: from screening to result communication, from result communication
to referral, from referral to appointment, from appointment to diagnosis,
and from diagnosis to treatment initiation. CHW programs that address
each transition point can significantly reduce attrition and improve the
proportion of people who ultimately receive needed care.

Health information technology increasingly supports screening and referral
processes. Community screening databases, referral tracking platforms, and
community resource directories (such as those built on 2-1-1 data or
platforms like UniteUs and Aunt Bertha/findhelp.org) enable more
efficient and coordinated screening and referral operations. Integration
of these tools with clinical EHR systems through interoperability
standards supports seamless data sharing across community and clinical
settings.

Ethical considerations in community-based screening include informed
consent (ensuring participants understand what is being tested and what
the results may mean), privacy protection (maintaining confidentiality
of screening results in public or semi-public settings), appropriate
follow-up (ensuring that people with abnormal results are not simply
informed and abandoned), cultural sensitivity (acknowledging cultural
beliefs about health testing and medical care), and equitable access
(ensuring that screening opportunities reach the populations with the
greatest need and burden of disease).
      `.trim(),
      keyTerms: [
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force, an independent panel that makes evidence-based recommendations about clinical preventive services including screening tests.' },
        { term: 'Sensitivity', definition: 'The ability of a screening test to correctly identify people who have the condition (true positive rate).' },
        { term: 'Specificity', definition: 'The ability of a screening test to correctly identify people who do not have the condition (true negative rate).' },
        { term: 'Number Needed to Screen (NNS)', definition: 'The number of people who must be screened to prevent one adverse health outcome, a measure of screening program efficiency.' },
        { term: 'Screening Cascade', definition: 'The sequential stages from screening through referral, appointment, diagnosis, and treatment, with potential attrition at each transition.' },
        { term: 'Bidirectional Communication', definition: 'A referral system feature where the referring party receives feedback on whether the person was seen and what clinical actions were taken.' },
      ],
    },
    {
      level: 4,
      title: 'Advanced Screening Program Design and Referral Network Optimization',
      titleEs: 'Diseno Avanzado de Programas de Tamizaje y Optimizacion de Redes de Referencia',
      readingLevel: 'Graduate',
      content: `
Graduate-level analysis of community-based screening and referral programs
encompasses advanced epidemiological concepts, health systems integration
strategies, implementation science applications, and the economic evaluation
of screening programs within the context of population health management.

The decision to implement a community-based screening program should be
guided by the Wilson and Jungner criteria (as updated for modern contexts):
the condition should be an important health problem; there should be an
accepted treatment or intervention; facilities for diagnosis and treatment
should be available; there should be a recognizable latent or early
symptomatic stage; there should be a suitable test; the test should be
acceptable to the population; the natural history of the condition should
be understood; there should be an agreed policy on whom to treat; the
cost of case-finding should be economically balanced against the cost of
treatment; and case-finding should be a continuing process rather than
a one-time project.

Bayesian reasoning is essential for understanding screening results in
community settings. The positive predictive value of any screening test
is strongly influenced by the prevalence of the condition in the
population being screened. In a community-based screening event where
prevalence may be relatively low (compared to a clinical population
seeking care for symptoms), the proportion of false-positive results
will be higher. This has implications for how results are communicated,
how referral urgency is determined, and how resources are allocated for
confirmatory testing.

Risk-stratified screening approaches can improve the efficiency and
equity of community screening programs. Rather than offering the same
screening to all community members, risk stratification uses demographic,
behavioral, and clinical information to identify individuals at highest
risk who would benefit most from screening. Risk calculators, social
determinant screening results, and community-level data can inform
stratification decisions. This approach must be balanced against the
equity imperative of ensuring access to screening for all, including
those who may not be identified as high-risk by available data.

Referral network optimization involves the strategic development and
management of relationships between community-based screening programs
and clinical and social service providers. Network analysis methods
can map existing referral pathways, identify gaps and bottlenecks,
and inform the development of new partnerships. Key metrics for
referral network performance include referral acceptance rate (proportion
of referrals that are acknowledged by the receiving provider), referral
completion rate (proportion of referred individuals who attend), time
to appointment (days between referral and the scheduled or completed
visit), and referral outcome rate (proportion of completed referrals
that result in appropriate clinical action).

The integration of social needs screening with health screening
represents a paradigm shift in community-based screening programs.
By screening for food insecurity, housing instability, transportation
barriers, and interpersonal safety alongside blood pressure and blood
glucose, CHW programs can identify and address the upstream determinants
that drive health outcomes. The Accountable Health Communities model
demonstrated that systematic social needs screening followed by
navigation support can reduce emergency department utilization and
improve health outcomes, though the evidence on cost-effectiveness
remains mixed.

Implementation science frameworks guide the design and evaluation of
screening and referral programs. The Practical, Robust Implementation
and Sustainability Model (PRISM) extends the RE-AIM framework by
adding organizational and external environment perspectives. PRISM
emphasizes the importance of organizational readiness, patient and
staff perspectives, implementation and sustainability infrastructure,
and the external environment (policy, regulation, market forces)
in determining program success.

Data quality and management in community-based screening programs
require systematic attention. Data governance frameworks should address
data ownership, access controls, quality assurance processes, retention
policies, and reporting standards. Training for CHW screeners should
include not only screening technique but also data entry accuracy,
documentation completeness, and privacy protection. Regular data
audits and feedback loops support continuous improvement in data quality.

The economic evaluation of community-based screening programs considers
costs at multiple levels: direct program costs (personnel, equipment,
supplies, training, supervision), downstream healthcare costs (clinical
evaluation, diagnosis, treatment initiated as a result of screening),
averted costs (healthcare expenditures avoided through early detection
and treatment), and societal costs and benefits (productivity gains,
quality-adjusted life years gained). Cost-effectiveness thresholds
vary by context, but generally, community-based screening programs
for highly prevalent conditions with effective treatments demonstrate
favorable cost-effectiveness ratios.
      `.trim(),
      clinicalNotes: [
        'Wilson and Jungner criteria provide the foundational framework for evaluating whether a condition is appropriate for community-based screening.',
        'Bayesian reasoning is essential: positive predictive value is strongly influenced by disease prevalence in the screened population.',
        'Risk-stratified screening improves efficiency but must be balanced against equity imperatives for universal access.',
        'Referral network optimization using network analysis methods can identify gaps, bottlenecks, and opportunities for improving the screening-to-treatment cascade.',
        'The PRISM framework extends RE-AIM by incorporating organizational and external environment perspectives into implementation analysis.',
        'Economic evaluation should consider direct costs, downstream healthcare costs, averted costs, and societal benefits including quality-adjusted life years.',
      ],
      keyTerms: [
        { term: 'Wilson and Jungner Criteria', definition: 'A set of ten principles established in 1968 to guide decisions about which conditions are appropriate for population-based screening programs.' },
        { term: 'Bayesian Reasoning', definition: 'A probabilistic approach to interpreting test results that considers the prior probability (prevalence) of a condition when estimating the likelihood of disease given a positive result.' },
        { term: 'Positive Predictive Value', definition: 'The probability that a person with a positive screening result truly has the condition, strongly influenced by disease prevalence in the screened population.' },
        { term: 'PRISM Framework', definition: 'Practical, Robust Implementation and Sustainability Model — an implementation science framework extending RE-AIM with organizational and environmental perspectives.' },
        { term: 'Risk Stratification', definition: 'The process of categorizing individuals by their level of risk for a condition to optimize screening intensity and resource allocation.' },
        { term: 'Quality-Adjusted Life Year (QALY)', definition: 'A measure of health outcome that combines length of life with quality of life, used in economic evaluations to compare the value of different health interventions.' },
      ],
    },
    {
      level: 5,
      title: 'Population-Level Screening Infrastructure and Health System Integration',
      titleEs: 'Infraestructura de Tamizaje a Nivel Poblacional e Integracion con Sistemas de Salud',
      readingLevel: 'Professional',
      content: `
For health systems leaders, public health officials, and program directors,
community-based screening and referral programs represent a strategic
component of population health infrastructure that bridges clinical
prevention and community-based public health practice. The design and
management of these programs at scale requires sophisticated analysis of
epidemiological priorities, health system capacity, financing mechanisms,
technology infrastructure, and equity considerations.

The strategic alignment of community-based screening with organizational
population health goals requires data-driven priority setting. Analysis
of community health needs assessment data, claims data, clinical quality
metrics, and health equity indicators can identify the conditions, populations,
and geographies where community-based screening would generate the greatest
health impact and return on investment. This analysis should consider both
clinical need (disease burden, screening gaps) and structural factors
(access barriers, social determinants, healthcare distrust).

The technology infrastructure for population-level screening programs
encompasses several interconnected systems: mobile screening data capture
platforms with offline capability and HIPAA-compliant data transmission,
community resource directories with real-time availability and eligibility
information, referral management platforms with bidirectional communication
and outcome tracking, EHR integration through HL7 FHIR or other
interoperability standards, analytics platforms for population-level
screening data visualization and trend analysis, and patient engagement
tools for appointment reminders, follow-up, and health education.

Financing models for community-based screening programs vary by payer and
state context. Managed care organizations may include community screening
in population health management contracts, particularly when linked to
HEDIS quality measures. Accountable care organizations may invest in
community screening as part of total cost of care management strategies.
Section 1115 waivers in some states cover preventive services delivered
by non-licensed providers including CHWs. Grant funding from federal
agencies (HRSA, CDC, SAMHSA), state health departments, and private
foundations provides startup and supplemental support. The braiding of
multiple funding sources is typically necessary for program sustainability.

Quality measurement at the program level should encompass process metrics
(screening volume, coverage of target population, referral rates, follow-up
completion rates), outcome metrics (proportion of screened individuals
with abnormal results who receive confirmatory diagnosis and treatment
initiation), equity metrics (screening access and outcomes disaggregated
by race, ethnicity, language, insurance status, and geographic location),
and efficiency metrics (cost per screening, cost per completed referral,
cost per new diagnosis). Dashboards that present these metrics in real-time
enable program leaders to identify trends, address problems, and
demonstrate value to stakeholders.

The legal and regulatory environment for community-based screening involves
several considerations. Clinical Laboratory Improvement Amendments (CLIA)
regulations classify point-of-care tests by complexity; tests waived from
CLIA requirements (such as blood glucose meters and certain rapid diagnostic
tests) can be performed in community settings with appropriate training.
Blood pressure screening does not fall under CLIA but does require proper
technique and equipment. State practice acts may define what screening
activities non-licensed CHWs may perform and under what supervision
arrangements.

Emerging innovations in community-based screening include the use of
artificial intelligence for automated risk assessment and screening
prioritization, wearable device integration for continuous monitoring
following community screening events, pharmacogenomic screening to
identify medication response patterns relevant to chronic disease
management, and precision public health approaches that use multi-level
data (individual, community, environmental) to target screening and
intervention with unprecedented specificity.

The future of community-based screening and referral will be shaped by
the continued evolution of value-based payment models, the maturation
of health data interoperability, the expansion of CHW scope of practice
and financing, and the growing recognition that health outcomes are
determined as much by the conditions in which people live as by the
clinical services they receive. Organizations that invest in robust,
equitable, data-driven community screening infrastructure will be
better positioned to address health disparities, improve population
health outcomes, and demonstrate the value of prevention in an
increasingly outcome-oriented healthcare landscape.
      `.trim(),
      clinicalNotes: [
        'Strategic alignment of screening priorities requires analysis of needs assessment data, claims data, quality metrics, and health equity indicators.',
        'CLIA waivers allow point-of-care tests like glucometers to be used in community settings; blood pressure screening is not subject to CLIA but requires standardized technique.',
        'Financing sustainability requires braiding multiple sources: managed care contracts, ACO investments, Section 1115 waivers, and federal/state grants.',
        'Equity metrics disaggregated by race, ethnicity, language, insurance, and geography are essential for identifying and addressing screening disparities.',
        'Emerging innovations include AI-powered risk assessment, wearable device integration, and precision public health approaches to screening targeting.',
        'Real-time dashboards presenting process, outcome, equity, and efficiency metrics enable data-driven program management and stakeholder reporting.',
      ],
      keyTerms: [
        { term: 'CLIA Waiver', definition: 'A classification under Clinical Laboratory Improvement Amendments that allows simple point-of-care tests to be performed outside traditional laboratory settings with minimal regulatory burden.' },
        { term: 'Precision Public Health', definition: 'An approach that uses multi-level data to target public health interventions to specific populations, geographies, and conditions with greater specificity and efficiency.' },
        { term: 'HEDIS Measures', definition: 'Healthcare Effectiveness Data and Information Set — quality metrics used by managed care organizations that may include screening rates for conditions like hypertension and diabetes.' },
        { term: 'Braided Funding', definition: 'A strategy combining multiple revenue streams to support a single program, enhancing financial sustainability beyond any single funding source.' },
        { term: 'Total Cost of Care', definition: 'A comprehensive measure of all healthcare expenditures for a population, used in value-based payment models where providers assume financial risk for managing costs.' },
        { term: 'Pharmacogenomics', definition: 'The study of how genetic variation affects drug response, emerging as a potential component of community-based precision screening programs.' },
      ],
    },
  ],
  media: [],
  citations: [
    {
      id: 'citation-screening-1',
      source: 'U.S. Preventive Services Task Force. Screening for Hypertension in Adults: Recommendation Statement. JAMA. 2021;325(16):1650-1656.',
      url: 'https://doi.org/10.1001/jama.2021.4987',
      accessedDate: new Date().toISOString(),
    },
    {
      id: 'citation-screening-2',
      source: 'U.S. Preventive Services Task Force. Screening for Prediabetes and Type 2 Diabetes: Recommendation Statement. JAMA. 2021;326(8):736-743.',
      url: 'https://doi.org/10.1001/jama.2021.12531',
      accessedDate: new Date().toISOString(),
    },
    {
      id: 'citation-screening-3',
      source: 'Alley DE, Asomugha CN, Conway PH, Sanghavi DM. Accountable Health Communities — Addressing Social Needs through Medicare and Medicaid. New England Journal of Medicine. 2016;374(1):8-11.',
      url: 'https://doi.org/10.1056/NEJMp1512532',
      accessedDate: new Date().toISOString(),
    },
  ],
  crossReferences: [
    {
      id: 'topic-chronic-disease-management-community',
      name: 'Chronic Disease Management in the Community',
      relationship: 'related',
    },
    {
      id: 'topic-health-fair-planning',
      name: 'Health Fair Planning',
      relationship: 'related',
    },
  ],
  tags: [
    'health-screening',
    'blood-pressure',
    'blood-glucose',
    'BMI',
    'referral',
    'preventive-care',
    'community-health',
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
