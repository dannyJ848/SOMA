/**
 * OSHA Rights for All Workers - Comprehensive Educational Content
 *
 * Covers the rights and protections provided by the Occupational Safety and
 * Health Act to ALL workers in the United States, with particular emphasis on
 * immigrant worker protections, anti-retaliation provisions, complaint
 * procedures, and the legal framework ensuring workplace safety regardless
 * of immigration status.
 */

import { EducationalContent } from '../types';

export const oshaRightsAllWorkersContent: EducationalContent = {
  id: 'topic-osha-rights-all-workers',
  type: 'topic',
  name: 'OSHA Rights for All Workers',
  nameEs: 'Derechos OSHA para Todos los Trabajadores',
  alternateNames: [
    'Worker Safety Rights',
    'OSHA Protections',
    'Workplace Safety Rights',
    'Derechos de Seguridad en el Trabajo',
    'Employee Safety Rights',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'OSHA is a government agency that protects ALL workers from dangerous conditions at work. Your rights are the same whether you are a citizen, have a visa, or are undocumented. No one can take these rights away from you.',
      explanation: `Every worker in the United States has the right to be safe at work. A government agency called OSHA (the Occupational Safety and Health Administration) makes rules to keep workplaces safe and makes sure employers follow them.

**The most important thing to know: OSHA protects ALL workers.** It does not matter:
- Where you were born
- What language you speak
- Whether you have immigration papers or not
- Whether you are paid in cash or by check
- Whether you work full-time, part-time, or as a day laborer

**Your basic rights under OSHA:**

1. **The right to a safe workplace**: Your employer MUST provide a workplace free from serious hazards that could hurt or kill you
2. **The right to information**: You have the right to know about dangers at your job. Your employer must provide safety training in a language you understand
3. **The right to report problems**: You can file a complaint with OSHA if your workplace is unsafe. You can do this anonymously (without giving your name)
4. **The right to refuse dangerous work**: If you believe a task will seriously hurt or kill you, and your employer will not fix the danger, you may have the right to refuse to do it
5. **The right to be free from retaliation**: Your employer CANNOT fire you, cut your hours, threaten you, or punish you in any way for reporting safety problems

**How to file an OSHA complaint:**

You can report unsafe conditions in several ways:
- **By phone**: Call 1-800-321-OSHA (1-800-321-6742). Spanish speakers are available
- **Online**: Visit osha.gov and file a complaint
- **By mail**: Write a letter describing the hazard and send it to your local OSHA office
- **In person**: Visit your nearest OSHA office
- **You do NOT need to give your name** - anonymous complaints are accepted
- **You do NOT need to show immigration papers** - OSHA does not ask for them

**What happens after you file a complaint?**

1. OSHA reviews your complaint
2. If it is serious, OSHA may send an inspector to your workplace
3. The inspector looks for hazards and talks to workers
4. If violations are found, OSHA requires the employer to fix them
5. OSHA can fine employers who do not fix dangerous conditions

**What if your employer retaliates against you?**

If your employer punishes you for reporting a safety problem:
- **This is illegal** under Section 11(c) of the OSH Act
- You have 30 days to file a retaliation complaint with OSHA
- OSHA can order your employer to give you your job back, pay you lost wages, and stop retaliating
- This protection applies to ALL workers, including undocumented workers

**Important resources:**
- OSHA Hotline: 1-800-321-OSHA (6742) - Spanish available
- OSHA website: www.osha.gov (available in Spanish)
- OSHA on-site consultation program: Free, confidential safety help for small businesses
- Worker centers in your community can help you understand your rights`,
      keyTerms: [
        { term: 'OSHA', definition: 'The Occupational Safety and Health Administration - the government agency that makes and enforces rules to keep workers safe at their jobs' },
        { term: 'retaliation', definition: 'When your employer punishes you for reporting unsafe conditions or injuries - for example, firing you, cutting your hours, or threatening you. This is illegal.' },
        { term: 'hazard', definition: 'Anything at your workplace that could hurt you, make you sick, or kill you - like broken equipment, toxic chemicals, or unsafe conditions' },
        { term: 'complaint', definition: 'An official report you make to OSHA about unsafe conditions at your job. You can file one anonymously.' },
        { term: 'inspection', definition: 'When an OSHA officer comes to your workplace to check for safety problems and make sure your employer is following the rules' },
      ],
      analogies: [
        'OSHA is like the health department for restaurants, but for ALL workplaces. Just like the health department makes sure restaurants are clean and safe for customers, OSHA makes sure workplaces are safe for workers.',
        'Your right to a safe workplace is like your right to call 911 in an emergency - it belongs to everyone, no matter who you are, and no one can take it away.',
      ],
      examples: [
        'Miguel works at a construction site where there are no railings on high scaffolds. He calls the OSHA hotline to report the danger. He does not need to give his name or immigration status. OSHA sends an inspector who requires the employer to install railings.',
        'Lucia works at a nail salon and the chemical fumes make her dizzy. She asks her boss for better ventilation. Her boss threatens to fire her. Lucia files a retaliation complaint with OSHA. This protection is hers regardless of her immigration status.',
        'A group of warehouse workers are told to lift boxes that are too heavy without any equipment. They file a group complaint with OSHA. The employer cannot punish any of them.',
      ],
      patientCounselingPoints: [
        'You have the right to a safe workplace no matter what your immigration status is. OSHA protects ALL workers.',
        'If your workplace is dangerous, you can report it to OSHA at 1-800-321-6742. You do NOT need to give your name.',
        'OSHA does NOT ask about your immigration status. They are only interested in workplace safety.',
        'Your employer CANNOT legally fire you or punish you for reporting unsafe conditions.',
        'You have the right to safety training in a language you understand. If your employer only provides training in English and you do not speak English, that is a violation.',
        'If you are hurt at work, you have the right to see your medical records and know what chemicals and hazards you were exposed to.',
      ],
    },
    2: {
      level: 2,
      summary: 'The Occupational Safety and Health Act of 1970 establishes workplace safety rights for all employees in the United States, enforced by OSHA through inspections, citations, and penalties. These protections extend to all workers regardless of immigration status, with specific anti-retaliation provisions under Section 11(c).',
      explanation: `## OSHA: Protecting All Workers

### The OSH Act of 1970

The Occupational Safety and Health Act (OSH Act) was signed into law by President Nixon in 1970 to "assure safe and healthful working conditions for working men and women." The law created three agencies:

1. **OSHA** (Occupational Safety and Health Administration): Sets and enforces workplace safety standards
2. **NIOSH** (National Institute for Occupational Safety and Health): Conducts research on workplace hazards
3. **OSHRC** (Occupational Safety and Health Review Commission): Hears appeals of OSHA citations

### Who Is Covered?

**Covered by OSHA:**
- Private sector employees in all 50 states
- Federal government employees (covered by Executive Order)
- State and local government employees (in the 28 states with OSHA-approved state plans)

**NOT covered by OSHA:**
- Self-employed individuals
- Immediate family members of farm employers
- Workplace hazards regulated by other agencies (e.g., mining, nuclear energy, certain transportation)

**Critical point**: Coverage is based on employment, NOT citizenship or immigration status. OSHA has explicitly stated that it protects all workers equally.

### Core Worker Rights Under the OSH Act

**1. Right to a Safe Workplace (Section 5)**
- General Duty Clause (Section 5(a)(1)): Employers must provide a workplace "free from recognized hazards" likely to cause death or serious physical harm
- Specific standards: OSHA has issued thousands of specific safety and health standards for different industries

**2. Right to Know (Hazard Communication Standard)**
- Employers must inform workers about chemical hazards through:
  - Safety Data Sheets (SDS) for all hazardous chemicals
  - Container labels with hazard information
  - Training programs on chemical safety
- Training must be provided in a language and vocabulary workers can understand
- This right is especially important for immigrant workers who may not read English

**3. Right to Report Hazards**
- Workers can file complaints with OSHA about unsafe conditions
- Complaints can be filed by phone, online, mail, or in person
- Complaints can be filed anonymously
- OSHA must investigate formal (signed, written) complaints
- Informal complaints may result in a phone call or letter to the employer

**4. Right to Participate in Inspections**
- Workers can request an OSHA inspection
- A worker representative can accompany the OSHA inspector
- Workers can speak privately with the inspector
- Workers can provide information about hazards to the inspector

**5. Right to Access Records**
- Access to your own medical records and workplace exposure records
- Access to the OSHA 300 Log (Summary of Work-Related Injuries and Illnesses)
- Access to results of workplace monitoring (noise, chemicals, etc.)

### Anti-Retaliation Protections (Section 11(c))

**Protected activities:**
- Filing an OSHA complaint or reporting a hazard
- Participating in an OSHA inspection
- Exercising any right under the OSH Act
- Refusing to perform work that poses imminent danger

**Types of illegal retaliation:**
| Retaliation Type | Examples |
|-----------------|----------|
| Termination | Firing a worker who reports a safety concern |
| Discrimination | Reducing hours, denying promotion, reassigning to worse duties |
| Intimidation | Threats, harassment, surveillance |
| Blacklisting | Preventing a worker from finding future employment |
| Immigration threats | Threatening to report a worker to ICE |

**Filing a retaliation complaint:**
- Must be filed within 30 days of the retaliatory action
- Filed with OSHA (not through the regular complaint process)
- OSHA investigates and can order: Reinstatement, back pay, restoration of benefits
- The 30-day deadline is strict - do not wait

### OSHA and Immigrant Workers

**Official OSHA Policy:**
- OSHA does not inquire about immigration status during inspections or investigations
- OSHA materials are available in multiple languages (Spanish, Chinese, Vietnamese, Korean, and others)
- Employers must provide safety training in a language workers understand
- Immigration status does not affect any worker's right to file a complaint or participate in an inspection

**Memoranda of Understanding:**
- OSHA and other Department of Labor agencies have agreements limiting immigration enforcement during labor investigations
- These policies recognize that fear of deportation undermines workplace safety for all workers
- However, the strength of these protections varies with political administrations

**Practical guidance for immigrant workers:**
- You do NOT need to provide a Social Security Number to file an OSHA complaint
- You can file complaints anonymously
- Worker centers and legal aid organizations can help you navigate the process
- Many OSHA area offices have bilingual staff`,
      keyTerms: [
        { term: 'General Duty Clause', definition: 'Section 5(a)(1) of the OSH Act, which requires every employer to provide a workplace free from recognized hazards likely to cause death or serious physical harm to employees' },
        { term: 'Hazard Communication Standard', definition: 'The OSHA standard requiring employers to inform workers about chemical hazards through labels, Safety Data Sheets, and training in a language workers can understand' },
        { term: 'Safety Data Sheet', definition: 'A document required for each hazardous chemical in the workplace that provides information about the chemical\'s properties, health effects, safe handling, and emergency procedures', pronunciation: 'SDS' },
        { term: 'Section 11(c)', definition: 'The part of the OSH Act that protects workers from retaliation for exercising their safety rights, including filing complaints, participating in inspections, or reporting hazards' },
        { term: 'OSHA 300 Log', definition: 'A form employers must maintain recording all work-related injuries and illnesses; workers have the right to access the annual summary of this log' },
        { term: 'imminent danger', definition: 'A hazard at the workplace that could reasonably be expected to cause death or serious physical harm immediately or before the danger can be eliminated through normal procedures' },
      ],
      patientCounselingPoints: [
        'You have 30 days to file a retaliation complaint with OSHA if your employer punishes you for reporting safety problems. Do not wait.',
        'If your employer only provides safety training in English and you do not understand English, this is an OSHA violation. You have the right to training in your language.',
        'Keep written records of any safety concerns you report and your employer\'s response. Dates, times, and names are important.',
        'You can request copies of your workplace medical records and exposure monitoring results at any time.',
        'Worker centers and legal aid organizations in your community can help you file OSHA complaints and understand your rights, often for free and in your language.',
        'If you smell chemicals, see exposed wiring, or notice any hazard at work, you have the legal right to report it without fear of punishment.',
      ],
    },
    3: {
      level: 3,
      summary: 'OSHA regulatory authority derives from the OSH Act of 1970, implementing workplace safety through a framework of promulgated standards, the General Duty Clause, inspection protocols, citation procedures, and whistleblower protections. Application to all workers regardless of immigration status is supported by statutory text, agency policy, and evolving inter-agency agreements addressing enforcement conflicts.',
      explanation: `## OSHA Regulatory Framework

### Standard-Setting Authority

**Types of OSHA Standards:**

1. **General Industry Standards (29 CFR 1910)**: Apply to most workplaces
   - Hazard Communication (1910.1200)
   - Respiratory Protection (1910.134)
   - Lockout/Tagout (1910.147)
   - Electrical Safety (1910 Subpart S)
   - Walking-Working Surfaces (1910 Subpart D)
   - Personal Protective Equipment (1910 Subpart I)

2. **Construction Standards (29 CFR 1926)**: Construction-specific requirements
   - Fall Protection (1926 Subpart M)
   - Scaffolding (1926 Subpart L)
   - Excavation (1926 Subpart P)
   - Electrical (1926 Subpart K)

3. **Maritime Standards (29 CFR 1915-1919)**: Shipyard, marine terminal, longshoring

4. **Agriculture Standards (29 CFR 1928)**: Limited agricultural-specific standards

**Standard-Setting Process (Section 6):**
- NIOSH criteria documents and recommendations
- Advisory committee input
- Proposed rulemaking with public comment period
- Final rule publication
- Judicial review available
- Process typically takes 3-10 years per standard

### The General Duty Clause in Practice

**Elements Required for Citation:**
1. An employer-employee relationship exists
2. A hazard is "recognized" (by the employer, the industry, or common sense)
3. The hazard causes or is likely to cause death or serious physical harm
4. A feasible means of abatement exists

**Application to Emerging Hazards:**
- Heat illness (no specific standard exists yet at federal level)
- Workplace violence (healthcare, retail)
- Ergonomic hazards (after the 2001 ergonomics standard was repealed)
- COVID-19 (until the Healthcare ETS was issued)
- General Duty Clause fills regulatory gaps when specific standards do not exist

### OSHA Inspection Process

**Inspection Priorities (in order):**
1. Imminent danger situations
2. Fatalities and catastrophes (3+ hospitalizations)
3. Worker complaints and referrals
4. Programmed inspections (targeted high-hazard industries)
5. Follow-up inspections

**Inspection Procedure:**
1. **Opening conference**: Inspector presents credentials, explains purpose
2. **Walkaround**: Physical inspection of the workplace
   - Inspector can take photos, measurements, air samples
   - Employee representative has the right to accompany inspector
   - Workers can speak privately with inspector
3. **Closing conference**: Inspector discusses findings, timeline
4. **Citation and penalty**: OSHA issues within 6 months of inspection

**Worker Interview Protections:**
- Workers can speak with inspectors confidentially
- Employer cannot be present during private worker interviews
- Workers can submit written complaints during inspections
- OSHA will not disclose the identity of complainants without their permission

### Citation Types and Penalties

| Citation Type | Severity | Maximum Penalty (2024) |
|--------------|----------|----------------------|
| Other-than-serious | Low to moderate risk | $16,131 per violation |
| Serious | Substantial probability of death/serious harm | $16,131 per violation |
| Willful | Intentional or knowing disregard | $161,323 per violation |
| Repeat | Same or similar violation within 5 years | $161,323 per violation |
| Failure to abate | Hazard not corrected by deadline | $16,131 per day |

**Criminal Penalties:**
- Willful violation causing death: Up to 6 months imprisonment and $250,000 fine (first offense)
- Giving false information to OSHA: Up to 6 months and $10,000
- Violation of posting requirements: Up to $7,000

### Whistleblower Protection Programs

**Section 11(c) - OSH Act Retaliation:**
- Protects workers who exercise ANY right under the OSH Act
- 30-day filing deadline (strict; rarely extended)
- OSHA investigates; can order reinstatement and back pay
- If OSHA dismisses, worker can file in federal court

**OSHA-Administered Whistleblower Statutes (25+ laws):**
- Surface Transportation Assistance Act (trucking)
- Pipeline Safety Improvement Act
- Wendell H. Ford Aviation Investment and Reform Act
- Sarbanes-Oxley Act (corporate fraud)
- Consumer Product Safety Improvement Act
- Affordable Care Act (health reform implementation)

### Immigration Status and OSHA Protections

**Statutory Basis:**
- OSH Act Section 2(b): "to assure safe and healthful working conditions for working men and women"
- The statute does not distinguish between citizens, lawful residents, and undocumented workers
- "Employee" is defined as "an employee of an employer who is employed in a business of his employer which affects commerce" (Section 3(6))
- No immigration status qualifier exists in the definition

**OSHA Policy Documents:**
- OSHA Directive CPL 02-00-150 (Field Operations Manual): No provision for immigration status inquiry during inspections
- OSHA Policy Memorandum (2003, periodically reaffirmed): OSHA will not ask about immigration status during inspections or investigations
- OSHA outreach materials: Available in Spanish, Chinese, Vietnamese, Korean, Haitian Creole, and other languages

**Inter-Agency Agreements:**
- DOL-DHS Revised Memorandum of Understanding (2011, reaffirmed 2016): Limits ICE enforcement actions at worksites under DOL investigation
- Prosecutorial discretion guidance: ICE agents directed not to conduct enforcement at or near labor agency proceedings
- Effectiveness varies with administration priorities; not legally binding

**Challenges in Practice:**
- Employers using immigration-related threats as de facto retaliation
- Workers' fear of immigration enforcement deterring complaint filing (chilling effect)
- Limited OSHA resources for multilingual outreach
- Worker misclassification reducing OSHA jurisdiction
- Lack of awareness of rights in immigrant communities

**Community-Based Advocacy:**
- Worker centers: Provide rights education, complaint filing assistance, and legal referrals in workers' languages
- OSHA Alliance Program: Formal partnerships with worker advocacy organizations
- OSHA Susan Harwood Training Grants: Fund safety training for underserved worker populations
- Consulate-based outreach: OSHA partnerships with Mexican, Guatemalan, and other consulates to reach immigrant workers`,
      keyTerms: [
        { term: 'General Duty Clause', definition: 'Section 5(a)(1) of the OSH Act, the catch-all enforcement provision requiring employers to keep workplaces free from recognized hazards likely to cause death or serious harm; used when no specific OSHA standard addresses the hazard' },
        { term: 'willful violation', definition: 'An OSHA citation issued when the employer intentionally and knowingly committed the violation or was aware of a hazardous condition and made no reasonable effort to eliminate it; carries the highest penalties including criminal liability' },
        { term: 'Field Operations Manual', definition: 'OSHA Directive CPL 02-00-150, the comprehensive procedural guide for OSHA compliance officers conducting inspections, investigations, and citation activities' },
        { term: 'chilling effect', definition: 'The phenomenon where fear of immigration enforcement deters undocumented workers from exercising their workplace safety rights, resulting in unreported hazards and higher injury rates across entire workplaces' },
        { term: 'Susan Harwood Training Grant', definition: 'OSHA-funded grants supporting organizations that provide workplace safety training to hard-to-reach worker populations, including immigrant workers, small business employees, and workers in high-hazard industries' },
        { term: 'imminent danger', definition: 'An OSHA-recognized condition where there is reasonable certainty that a hazard exists that can be expected to cause death or serious physical harm immediately or before the hazard can be eliminated through normal enforcement procedures' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced OSHA practice involves navigating multi-employer worksite liability, understanding the interplay between federal and state-plan OSHA jurisdiction, interpreting evolving case law on worker classification and immigration-related retaliation, and designing comprehensive workplace safety programs that meet regulatory requirements while addressing the unique vulnerabilities of immigrant worker populations.',
      explanation: `## Advanced OSHA Regulatory Practice

### Multi-Employer Worksite Doctrine

**OSHA's Multi-Employer Citation Policy (CPL 02-00-124):**

On worksites with multiple employers (common in construction), OSHA can cite any of four employer categories:

1. **Creating employer**: The employer whose employees created the hazard
   - Citable even if its own employees are not exposed
   - Example: Subcontractor installs defective scaffolding

2. **Exposing employer**: The employer whose employees are exposed to the hazard
   - Must take reasonable steps to protect its workers
   - Can be cited for failure to detect or correct hazard
   - Defense: Lack of knowledge of hazard (must show reasonable diligence)

3. **Correcting employer**: An employer responsible for correcting the hazard (by contract or trade practice)
   - Citable for failure to correct the hazard
   - Example: Scaffolding contractor responsible for scaffold safety

4. **Controlling employer**: The employer with general supervisory authority over the worksite
   - Typically the general contractor or construction manager
   - Responsible for exercising reasonable care to detect and correct hazards
   - Can be cited even if its own employees are not exposed
   - Standard: "Reasonable diligence" - periodic inspections, enforcement of safety rules

**Significance for Immigrant Workers:**
- Multi-employer doctrine is particularly relevant in construction, where subcontracting chains and labor brokers are common
- Immigrant workers are disproportionately employed by smaller subcontractors with fewer resources
- The controlling employer (general contractor) has a legal obligation to ensure safety across the entire site
- Workers can file complaints against any employer at the worksite, including the general contractor

### State Plan OSHA Programs

**Federal vs. State Plans:**
- 22 states and territories have OSHA-approved plans covering both private and public sector
- 6 states have plans covering only public sector employees
- State plans must be "at least as effective" as federal OSHA
- States can have more stringent standards than federal OSHA

**State Plans with Notable Provisions:**
- **California (Cal/OSHA)**: Repetitive motion injury standard, heat illness prevention standard, aerosol transmissible diseases standard
- **Washington (WISHA)**: Ergonomics rule (enacted and later repealed), fall protection stricter than federal
- **Oregon (OR-OSHA)**: Heat illness prevention rule, wildfire smoke protection
- **Minnesota (MN OSHA)**: Workplace violence prevention for healthcare
- **Virginia (VOSH)**: First state to adopt permanent COVID-19 standard

### Legal Developments Affecting Worker Coverage

**Worker Classification:**
- The distinction between "employee" and "independent contractor" determines OSHA coverage
- OSHA follows the economic reality test, examining:
  - Control over work methods
  - Opportunity for profit/loss
  - Investment in equipment
  - Skill required
  - Permanence of relationship
  - Integration into employer's business
- Misclassification as independent contractor removes OSHA protections
- Disproportionately affects immigrant workers in construction, cleaning, and food delivery

**Temporary Workers:**
- OSHA and host employer are jointly responsible for temporary worker safety
- OSHA Directive on Temporary Workers: Both staffing agency and host employer have obligations
- Staffing agency: General safety training, hazard communication
- Host employer: Site-specific training, supervision, PPE, hazard elimination
- "Temporary workers are not just temporary workers - they are real workers with real rights" (OSHA)

**Day Laborers:**
- Covered by OSHA if an employment relationship exists
- Day labor hiring sites: OSHA has conducted targeted enforcement
- Challenges: Informal arrangements, cash payment, no records
- Worker centers advocate for day laborer safety and rights

### Immigration-Related Retaliation

**Legal Framework:**
- Section 11(c) prohibits retaliation for exercising safety rights
- Immigration-related threats constitute illegal retaliation:
  - Threatening to report to ICE
  - Demanding immigration documents after a safety complaint
  - Selectively auditing I-9 forms of workers who complained
  - Using E-Verify as a retaliatory tool
- OSHA investigates these claims under Section 11(c)

**Case Law and Agency Interpretations:**
- OSHA has found merit in cases where employers threatened immigration consequences for safety complaints
- Department of Labor has issued guidance that immigration-related retaliation violates multiple worker protection statutes
- State anti-retaliation statutes in some jurisdictions (CA Labor Code Section 1019, IL 820 ILCS 55/) specifically prohibit immigration-related threats

**Enforcement Challenges:**
- Workers may not file retaliation complaints due to fear of exposure
- Establishing causal connection between safety complaint and retaliation
- Employer may claim legitimate business reasons for adverse action
- 30-day filing deadline for Section 11(c) complaints is extremely short
- Many workers are unaware of the deadline

### Comprehensive Safety Program Design

**OSHA Recommended Practices for Safety and Health Programs:**

Seven core elements:
1. **Management leadership**: Commitment from top management, resource allocation
2. **Worker participation**: Involvement in hazard identification and program development
3. **Hazard identification and assessment**: Systematic workplace inspection and analysis
4. **Hazard prevention and control**: Hierarchy of controls implementation
5. **Education and training**: Comprehensive, language-appropriate training
6. **Program evaluation and improvement**: Regular assessment of program effectiveness
7. **Communication and coordination**: Multi-employer worksite coordination

**Language Access Requirements:**
- Hazard communication training in a language workers understand (not just English)
- Safety Data Sheets available in workers' primary languages when feasible
- Multilingual signage for hazard warnings
- Translated written materials for safety policies and procedures
- Use of bilingual trainers and interpreters for safety meetings
- Visual communication methods (pictograms, demonstrations, videos) supplement written materials

**Participatory Safety Models for Diverse Workforces:**
- Promotora/community health worker models for safety education
- Peer-to-peer safety training using trained worker-leaders
- Culturally adapted training content (not just translation)
- Integration of worker experience and traditional knowledge
- Regular feedback mechanisms in workers' languages`,
      keyTerms: [
        { term: 'multi-employer worksite doctrine', definition: 'The OSHA enforcement policy allowing citation of creating, exposing, correcting, and controlling employers at worksites with multiple employers, particularly relevant in construction where subcontracting chains create complex liability relationships' },
        { term: 'controlling employer', definition: 'Under OSHA\'s multi-employer policy, the employer (typically the general contractor) with general supervisory authority over a worksite who must exercise reasonable care to detect and correct safety hazards, even those created by other employers' },
        { term: 'state plan OSHA', definition: 'A state-operated occupational safety and health program approved by federal OSHA as being "at least as effective" as the federal program, covering state and local government employees and, in most cases, private sector workers' },
        { term: 'economic reality test', definition: 'The legal standard used by OSHA and courts to determine whether a worker is an employee (covered by OSHA) or an independent contractor (not covered), based on the totality of the working relationship rather than a single factor' },
        { term: 'I-9 retaliation', definition: 'The illegal practice of selectively auditing workers\' employment eligibility verification forms (Form I-9) in retaliation for exercising workplace safety rights, recognized as a form of immigration-related intimidation' },
      ],
      clinicalNotes: `Graduate-level clinical considerations:

1. **Occupational health providers and OSHA compliance**: Clinicians providing occupational health services should be familiar with OSHA recordkeeping requirements (29 CFR 1904). Work-related injuries and illnesses meeting recording criteria must be documented on the OSHA 300 Log. Providers should ensure accurate classification of injuries as work-related and understand the criteria for recordable cases (medical treatment beyond first aid, restricted work/transfer, days away from work).

2. **Medical surveillance requirements**: OSHA standards for specific exposures (lead, asbestos, benzene, silica, noise, etc.) mandate medical surveillance programs. Occupational health providers must understand examination protocols, biological monitoring requirements, and medical removal protection provisions. Language barriers can complicate informed consent and exposure history collection - professional interpreter services are essential.

3. **OSHA 300 Log access and health advocacy**: Workers have the right to access the OSHA 300 Log summary. Clinicians can encourage patients to request this information, which may reveal patterns of injury at their workplace. High injury rates at a specific employer can support OSHA complaints and provide context for individual patient injuries.

4. **Reporting fatalities and severe injuries**: Employers must report all work-related fatalities to OSHA within 8 hours and all work-related in-patient hospitalizations, amputations, and losses of an eye within 24 hours. Healthcare providers treating these injuries should confirm that the employer has made the required report and, if not, contact OSHA directly.

5. **Immigration-related barriers to occupational health**: Immigrant workers may avoid occupational health screenings and medical surveillance due to fear of documentation requirements. Clinicians should clearly communicate that medical records are confidential, that occupational health services do not require immigration documentation, and that participation in medical surveillance is a worker right, not a risk.`,
    },
    5: {
      level: 5,
      summary: 'Expert analysis of OSHA worker protections requires understanding of administrative law principles governing agency authority, constitutional dimensions of workplace safety regulation, the evolving intersection of labor law and immigration enforcement policy, international comparative regulatory models, and evidence-based strategies for addressing the structural determinants of occupational health inequity among vulnerable worker populations.',
      explanation: `## Expert Analysis: OSHA Authority and Worker Protection

### Constitutional and Administrative Law Framework

**Commerce Clause Authority:**
- The OSH Act derives authority from the Commerce Clause (Article I, Section 8)
- Coverage extends to any employer "engaged in a business affecting commerce"
- Exceptionally broad jurisdictional reach; effectively universal coverage of private employers

**Non-Delegation Doctrine and OSHA Standard-Setting:**
- Section 6(b) grants OSHA broad authority to promulgate standards "reasonably necessary or appropriate"
- Industrial Union Department v. American Petroleum Institute (1980) (Benzene Decision): OSHA must demonstrate "significant risk" before regulating
- American Textile Manufacturers v. Donovan (1981) (Cotton Dust Decision): OSHA need not perform cost-benefit analysis; feasibility analysis suffices
- These landmark cases established the legal framework for OSHA standard-setting that persists today

**Judicial Review:**
- Pre-enforcement challenges to OSHA standards filed in Courts of Appeals within 60 days of promulgation
- Post-enforcement challenges to individual citations through OSHRC then federal courts
- Standard of review: "Substantial evidence on the record as a whole"
- Deference to agency expertise (Chevron/Loper Bright framework considerations)

### The Regulatory Gap Problem

**Standards OSHA Lacks:**
- **Heat illness prevention**: No federal standard despite being a leading cause of occupational death (proposed rulemaking initiated 2021)
- **Workplace violence**: No comprehensive standard (Cal/OSHA has healthcare-specific standard)
- **Ergonomics**: Standard repealed in 2001; no replacement
- **Infectious disease (general)**: No comprehensive standard beyond healthcare ETS during COVID-19
- **Indoor air quality**: Proposed and withdrawn in the 1990s
- **Chemical process safety reform**: PySM standard unchanged since 1992

**Impact of Regulatory Gaps:**
- General Duty Clause enforcement is resource-intensive and case-by-case
- Lower deterrence effect than specific standards with clear requirements
- Disproportionate impact on workers in underregulated industries
- Immigrant workers concentrated in industries with the largest regulatory gaps (agriculture, construction, services)

### OSHA Resource Constraints and Enforcement Limitations

**Inspection Capacity:**
- Approximately 1,850 federal OSHA inspectors for 8+ million worksites
- At current inspection rates, it would take OSHA over 160 years to inspect each workplace once
- State plan inspectors add approximately 1,200 additional inspectors
- Result: Most employers will never be inspected unless a complaint is filed or a catastrophe occurs

**Budget Limitations:**
- OSHA's budget (~$620 million annually) has remained relatively flat in inflation-adjusted terms
- Per-worker spending on workplace safety in the US is among the lowest in developed nations
- Limited multilingual outreach capacity despite growing non-English-speaking workforce
- Susan Harwood Training Grants (~$12 million annually) represent a small fraction of training needs

**Enforcement Impact Analysis:**
- Average serious violation penalty (~$4,000 after adjustments) is often too low to incentivize compliance
- Criminal prosecution of employers rare (average 5-10 cases per year)
- Maximum criminal penalty for a willful violation causing death (6 months) is a misdemeanor
- Compare: Environmental crimes under the Clean Air Act can carry felony charges with 5-15 years imprisonment

### Immigration Policy and Workplace Safety Intersection

**Structural Analysis:**
- Immigration enforcement policy directly affects workplace safety outcomes
- The "chilling effect" of enforcement creates a two-tier safety system where undocumented workers face greater hazards
- Employers who know workers will not report hazards have reduced incentive to maintain safety
- This dynamic harms ALL workers at affected worksites, not just undocumented workers

**Policy Mechanisms for Protection:**
1. **Firewall policies**: Prohibit sharing of immigration information obtained during labor investigations with immigration authorities
2. **Labor agency MOUs**: Inter-agency agreements limiting enforcement during investigations
3. **Deferred action for labor disputes**: Temporary immigration relief for workers engaged in labor proceedings (DHS prosecutorial discretion)
4. **State anti-retaliation statutes**: State laws specifically prohibiting immigration-related threats in the workplace
5. **Consular protection agreements**: Bilateral agreements allowing consular officials to advocate for nationals' workplace rights

**Evidence Base:**
- Studies show that workplaces with high proportions of undocumented workers have 2-3x higher injury rates
- Post-immigration raid studies demonstrate decreased OSHA complaint filing in affected communities
- Economic modeling shows that immigration enforcement at worksites increases occupational injury costs system-wide
- Countries with strong labor migration protections (Germany, Canada) have lower occupational injury disparities

### International Comparative Regulatory Analysis

**ILO Framework:**
- ILO Convention 155 (Occupational Safety and Health): Establishes fundamental principles for national OSH policies
- ILO Convention 187 (Promotional Framework for OSH): Requires continuous improvement of OSH systems
- US has not ratified either convention (one of the few developed nations in this position)

**EU Framework Directive 89/391/EEC:**
- Risk assessment obligation for all employers
- Hierarchy of prevention measures
- Worker consultation and participation requirements
- Specific daughter directives for individual hazards
- Coverage extends to all workers regardless of nationality or status

**Comparative Enforcement Models:**
| Feature | US (OSHA) | UK (HSE) | Germany (BAuA + BGs) | Australia (SafeWork) |
|---------|-----------|----------|---------------------|---------------------|
| Inspectors per 10,000 workers | 0.5 | 0.9 | 1.2 | 1.0 |
| Max criminal penalty | 6 months | 2 years (unlimited fine) | 5 years | 5 years (individual) |
| Worker participation | Limited | Safety representatives | Works councils | Health & safety reps |
| Prevention integration | Separate from WC | Integrated | BG-integrated | Harmonized |

### Evidence-Based Strategies for Vulnerable Worker Protection

**Research Evidence for Effective Interventions:**
1. **Community health worker (promotora) models**: RCTs and quasi-experimental studies show improved safety knowledge, hazard reporting, and injury prevention in immigrant worker communities
2. **Participatory ergonomics**: Worker-involved programs show 40-60% greater effectiveness than top-down expert approaches in diverse workforces
3. **Worker center-OSHA partnerships**: Alliance programs increase complaint filing rates by 200-300% in underserved communities
4. **Multilingual safety training**: Studies show 30-50% improvement in hazard recognition when training is provided in workers' primary language
5. **Know Your Rights campaigns**: Combined labor-immigration rights education reduces the chilling effect of enforcement

**Health Equity Framework:**
- Occupational health disparities are a social determinant of health
- Workers in the lowest-wage, most hazardous jobs are disproportionately immigrants, people of color, and individuals with limited English proficiency
- Addressing occupational health inequity requires policy interventions at structural, organizational, and individual levels
- The occupational health community has a professional obligation to advocate for the rights and safety of all workers`,
      keyTerms: [
        { term: 'significant risk doctrine', definition: 'The legal standard established in the Benzene Decision (1980) requiring OSHA to demonstrate that a workplace hazard poses a "significant risk of harm" before promulgating a new health standard, setting the evidentiary threshold for regulation' },
        { term: 'feasibility analysis', definition: 'The standard OSHA must meet when setting permissible exposure limits, requiring demonstration that the proposed limit is technologically and economically achievable by affected industries; notably, cost-benefit analysis is NOT required under the Cotton Dust Decision' },
        { term: 'firewall policy', definition: 'A regulatory mechanism that creates an impermeable barrier between labor enforcement agencies and immigration authorities, preventing immigration status information obtained during workplace safety investigations from being shared with ICE or CBP' },
        { term: 'ILO Convention 155', definition: 'The International Labour Organization Convention on Occupational Safety and Health establishing fundamental principles for national workplace safety policy, including universal worker coverage, employer obligations, and worker participation rights; not ratified by the United States' },
        { term: 'promotora model', definition: 'A community health worker intervention using trusted community members to deliver health and safety education in culturally appropriate ways, with evidence demonstrating effectiveness in improving hazard recognition and rights awareness among immigrant worker populations' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Occupational health as health equity**: The distribution of occupational hazards in the US follows clear demographic patterns: the most dangerous jobs are disproportionately held by immigrants, people of color, and workers with limited English proficiency. Occupational medicine physicians should view workplace safety not just as a clinical issue but as a health equity issue with structural determinants including immigration policy, labor law enforcement, and economic inequality.

2. **The physician's role in OSHA proceedings**: Occupational health physicians may be called to provide expert testimony in OSHA citation proceedings, particularly regarding the General Duty Clause elements (recognized hazard, serious harm, feasible abatement). Understanding administrative law procedure, burden of proof, and the admissibility of medical and epidemiological evidence is essential for effective participation.

3. **Advocacy for regulatory reform**: The occupational health profession should advocate for closing regulatory gaps that disproportionately affect vulnerable workers. Priority areas include: a federal heat illness prevention standard, comprehensive workplace violence prevention standards, stronger criminal penalties for willful violations causing death, and increased OSHA inspection capacity. Professional organizations (ACOEM, APHA) have policy statements supporting these reforms.

4. **Ethical obligations regarding undocumented patients**: Physicians have an ethical obligation to provide competent care to all patients regardless of immigration status (AMA Code of Ethics Opinion 11.1.1). In occupational medicine, this includes thorough documentation of work-related injuries and exposures, appropriate workers' compensation referrals, and avoidance of any actions that could expose patients to immigration enforcement. Medical records should not contain immigration status information.

5. **Research priorities**: Key gaps in the evidence base include: (a) accurate measurement of occupational injury rates in undocumented worker populations (methodological challenge due to underreporting); (b) evaluation of firewall policy effectiveness on OSHA complaint filing; (c) longitudinal studies of worker center interventions on community-level injury rates; (d) economic impact analysis of immigration enforcement on occupational safety outcomes.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-worker-rights',
      type: 'website',
      title: 'Workers\' Rights',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/workers',
      accessedDate: '2025-01-15',
    },
    {
      id: 'osha-immigrant-workers',
      type: 'website',
      title: 'Protecting Immigrant Workers',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/immigrant-workers',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-worker-rights',
      type: 'website',
      title: 'Workplace Safety and Health Topics',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/topics/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'medlineplus-occupational-health',
      type: 'website',
      title: 'Occupational Health',
      authors: ['U.S. National Library of Medicine'],
      source: 'MedlinePlus',
      url: 'https://medlineplus.gov/occupationalhealth.html',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-workers-compensation-basics', targetType: 'topic', relationship: 'related', label: 'Workers Compensation Basics' },
    { targetId: 'topic-heat-illness-prevention', targetType: 'topic', relationship: 'related', label: 'Heat Illness Prevention' },
    { targetId: 'topic-workplace-injury-first-aid', targetType: 'topic', relationship: 'related', label: 'Workplace Injury First Aid' },
  ],

  tags: {
    systems: ['occupational-health'],
    topics: ['occupational-medicine', 'safety', 'worker-rights', 'regulatory-compliance'],
    keywords: ['OSHA', 'worker rights', 'workplace safety', 'immigrant workers', 'retaliation', 'whistleblower', 'inspection', 'General Duty Clause'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
