/**
 * Workers' Compensation Basics - Comprehensive Educational Content
 *
 * Covers the fundamentals of workers' compensation systems including
 * eligibility, filing claims, benefits, return-to-work processes,
 * and worker rights across all complexity levels.
 */

import { EducationalContent } from '../types';

export const workersCompensationBasicsContent: EducationalContent = {
  id: 'topic-workers-compensation-basics',
  type: 'topic',
  name: 'Workers Compensation Basics',
  nameEs: 'Compensacion para Trabajadores',
  alternateNames: ['Workers Comp', 'Work Injury Benefits', 'Workplace Injury Compensation'],

  levels: {
    1: {
      level: 1,
      summary: 'If you get hurt or sick because of your job, workers\' compensation pays for your medical bills and part of your lost wages while you recover.',
      explanation: `Workers' compensation (often called "workers' comp") is like insurance that your employer pays for that protects you if you get hurt or sick because of your job.

**What does workers' comp cover?**

1. **Medical bills**: Doctor visits, hospital stays, surgery, medicine, physical therapy - all paid for with no cost to you
2. **Lost wages**: If you cannot work because of your injury, you get part of your regular pay (usually about 2/3)
3. **Disability payments**: If your injury causes permanent problems, you may receive ongoing payments
4. **Job training**: If you cannot return to your old job, workers' comp may pay to train you for a new one

**Who is covered?**

Almost every worker is covered, including:
- Full-time and part-time employees
- Workers regardless of immigration status
- You are covered from your very first day on the job

**What should you do if you get hurt at work?**

Think of this as four important steps:
1. **Report it immediately**: Tell your supervisor right away, even if the injury seems minor
2. **Get medical care**: See a doctor as soon as possible. Tell them it is a work injury
3. **File a claim**: Your employer must give you the forms to file a claim
4. **Keep records**: Save all paperwork, doctor notes, and receipts related to your injury

**Important things to know:**

- **You do not need to prove your employer was at fault** - workers' comp is a "no-fault" system
- **You cannot be fired for filing a claim** - that is illegal
- **Your employer cannot ask you to use your personal insurance** for a work injury
- **You do not need to be a citizen** to receive workers' comp benefits
- **Time limits apply** - report your injury and file your claim as soon as possible

**What if your claim is denied?**
You have the right to appeal. Many workers get help from a workers' comp attorney - they usually do not charge you unless you win your case.`,
      keyTerms: [
        { term: 'workers\' compensation', definition: 'An insurance program paid for by your employer that covers your medical bills and lost wages if you get hurt or sick because of your job' },
        { term: 'claim', definition: 'A formal request to receive workers\' compensation benefits after a work-related injury or illness' },
        { term: 'no-fault system', definition: 'A system where you receive benefits regardless of who caused the injury - you, your employer, or nobody' },
        { term: 'lost wages', definition: 'The money you lose because you cannot work due to your injury; workers\' comp pays about two-thirds of your regular pay' },
        { term: 'disability benefits', definition: 'Payments you receive if your work injury causes permanent limitations that affect your ability to work' },
      ],
      analogies: [
        'Workers\' compensation is like car insurance for work injuries - just as car insurance pays for repairs after an accident without blaming the driver, workers\' comp pays for your medical care without you having to prove whose fault it was.',
        'Filing a workers\' comp claim is like filing a police report after an accident - the sooner you do it, the better the documentation, and the easier it is to get help.',
      ],
      patientCounselingPoints: [
        'Report ANY work injury to your employer as soon as possible, even if it seems minor. Many serious conditions start as small problems.',
        'Always tell your doctor that your injury happened at work so they document it correctly in your medical record.',
        'You have the right to workers\' compensation regardless of your immigration status, whether you work full-time or part-time, and from your first day of employment.',
        'If your employer tells you to use your personal health insurance for a work injury, that is wrong. Work injuries should go through workers\' compensation.',
        'Keep copies of everything - doctor notes, bills, the accident report, and any communication with your employer about the injury.',
        'It is illegal for your employer to fire you, threaten you, or punish you for filing a workers\' compensation claim.',
      ],
    },
    2: {
      level: 2,
      summary: 'Workers\' compensation is a state-mandated, no-fault insurance system that provides medical benefits, wage replacement, and disability compensation for work-related injuries and occupational diseases, funded entirely by employers.',
      explanation: `## Workers' Compensation Overview

### How the System Works

Workers' compensation is a trade-off:
- **Workers receive**: Guaranteed medical care and wage replacement without proving fault
- **Employers receive**: Protection from lawsuits (called the "exclusive remedy" doctrine)

### Who Is Covered?

**Generally covered:**
- Most employees in every state (varies by state law)
- Full-time, part-time, and temporary workers
- Workers regardless of citizenship or immigration status
- Coverage begins on the first day of employment

**Common exemptions (vary by state):**
- Independent contractors (this classification is often disputed)
- Domestic workers (some states)
- Agricultural workers (some states)
- Very small employers (some states exempt businesses with <3-5 employees)
- Federal employees (covered under FECA, a separate federal system)

### Types of Benefits

**1. Medical Benefits**
- All reasonable and necessary treatment for the work injury
- No deductibles or copays for the worker
- Includes: Doctor visits, surgery, medication, physical therapy, medical devices
- Employer or insurer may direct initial choice of physician (varies by state)

**2. Temporary Disability Benefits**
- **Temporary Total Disability (TTD)**: Cannot work at all during recovery
  - Typically 66.67% (2/3) of average weekly wage
  - Subject to state maximum and minimum rates
- **Temporary Partial Disability (TPD)**: Can do some modified/light duty work
  - Typically 66.67% of wage difference (full wage minus modified duty wage)

**3. Permanent Disability Benefits**
- **Permanent Partial Disability (PPD)**: Permanent impairment but can still work
  - Based on impairment rating (AMA Guides or state-specific method)
  - May be "scheduled" (specific body part) or "unscheduled" (whole body)
- **Permanent Total Disability (PTD)**: Cannot work in any capacity
  - Lifetime benefits in most states

**4. Death Benefits**
- Funeral expenses
- Survivor benefits to dependents (spouse, children)
- Typically a percentage of the deceased worker's wage

**5. Vocational Rehabilitation**
- Job retraining if worker cannot return to previous occupation
- Job placement assistance
- Varies significantly by state

### The Claims Process

1. **Injury occurs**: Worker is injured or becomes ill due to work
2. **Report to employer**: Worker notifies employer (time limits vary by state, typically 30-90 days)
3. **Employer reports to insurer**: First Report of Injury filed
4. **Medical treatment**: Worker sees authorized physician
5. **Claim investigation**: Insurer reviews and accepts or denies claim
6. **Benefits begin**: If accepted, medical and wage benefits start
7. **Maximum Medical Improvement (MMI)**: Doctor determines injury has stabilized
8. **Impairment rating**: If permanent impairment exists, rating is assigned
9. **Claim closure**: Settlement or award issued

### Common Reasons for Claim Denial

- Injury not reported within required timeframe
- Injury did not arise out of and in the course of employment
- Pre-existing condition (employer may argue injury is not work-related)
- Positive drug test at time of injury (some states)
- Horseplay or intentional self-harm
- Failure to seek authorized medical treatment

### Your Rights

- Right to file a claim without retaliation
- Right to medical treatment for work-related conditions
- Right to appeal denied claims
- Right to legal representation
- Right to a second medical opinion (in most states)`,
      keyTerms: [
        { term: 'exclusive remedy', definition: 'The legal principle that workers\' compensation is the only way an employee can receive benefits for a work injury - in exchange, the employee cannot sue the employer for negligence' },
        { term: 'Maximum Medical Improvement (MMI)', definition: 'The point at which a doctor determines that your condition has stabilized and is not expected to improve significantly with further treatment' },
        { term: 'impairment rating', definition: 'A percentage assigned by a doctor indicating how much permanent physical damage was caused by the work injury, used to calculate disability benefits' },
        { term: 'temporary total disability', definition: 'Benefits paid when a worker cannot do any work at all while recovering from a work injury, usually about 2/3 of their average wage' },
        { term: 'First Report of Injury', definition: 'The official document an employer must file with their insurance company when a worker reports a work-related injury or illness' },
      ],
      patientCounselingPoints: [
        'Maximum Medical Improvement does not mean you are fully healed - it means your condition is as good as it is going to get with treatment. You may still have permanent limitations.',
        'If your workers\' comp claim is denied, do not give up. You have the right to appeal, and many denied claims are overturned on appeal.',
        'Your employer may have the right to choose your initial doctor, but in most states you can request a change of physician after the first visit.',
        'Keep a personal log of your symptoms, treatments, and how your injury affects your daily life. This documentation can be important if your claim is disputed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Workers\' compensation law establishes a state-specific statutory framework governing compensability determination, benefit calculations, medical treatment authorization, impairment evaluation, and dispute resolution for occupational injuries and diseases under a no-fault, exclusive remedy model.',
      explanation: `## Workers' Compensation System Analysis

### Legal Framework

**Compensability Requirements:**
1. **Employment relationship**: Worker must be an employee (not independent contractor)
2. **Arising out of employment (AOE)**: Causal connection between work and injury
3. **In the course of employment (COE)**: Injury occurred during work-related activity
4. Both AOE and COE must be satisfied

**Causation Standards:**
- Medical causation: "Reasonable medical probability" (>50% likely)
- Legal causation: Work must be a "substantial contributing factor"
- Occupational disease: Must establish exposure + medical nexus + temporal relationship
- Aggravation/exacerbation: Pre-existing condition worsened by work is compensable

**Special Doctrines:**
- Positional risk: Injury compensable if employment placed worker in position of risk
- Personal comfort: Activities incidental to work (eating, restroom) generally covered
- Going and coming rule: Generally not covered during commute (exceptions: dual purpose trips, special errand, employer vehicle)
- Last injurious exposure: For progressive occupational disease, last employer bears liability

### Benefit Calculation

**Average Weekly Wage (AWW):**
- Based on earnings in specified period before injury (typically 52 weeks)
- Includes overtime, bonuses, tips, and employer-provided benefits
- Concurrent employment: Wages from all jobs may be included
- Seasonal workers: Calculated to reflect full-year equivalent

**Compensation Rate:**
- TTD/TPD: Typically 66.67% of AWW (varies 60-75% by state)
- State maximum rate: Often 100% of state average weekly wage (SAWW)
- State minimum rate: Varies, sometimes as low as 20% of SAWW
- Tax status: Workers' compensation benefits are generally not taxable

**Permanent Disability Calculation:**
- Scheduled injuries: Fixed benefit per body part (e.g., loss of hand = X weeks)
- Unscheduled injuries: Based on impairment rating + additional factors
- Some states: Loss of earning capacity model
- Some states: Whole person impairment + vocational factors

### Medical Treatment Under Workers' Compensation

**Treatment Authorization:**
- Employer/insurer may direct to approved physician network
- Treatment guidelines: Evidence-based (ACOEM, ODG) in many states
- Utilization review: Pre-authorization required for certain treatments
- Independent medical review for disputed treatment

**Key Physician Roles:**
- Authorized Treating Physician (ATP): Primary treating doctor
- Qualified Medical Evaluator (QME): Independent evaluator (CA system)
- Independent Medical Examiner (IME): Defense-requested evaluation
- Rating physician: Assigns permanent impairment rating

**Maximum Medical Improvement:**
- Clinical determination that condition is stable
- Triggers permanent impairment evaluation
- Does not mean treatment stops (maintenance care may continue)
- Premature MMI declaration is a common dispute issue

### Impairment Rating Systems

**AMA Guides (most states use 5th or 6th edition):**
- 5th edition: Regional impairment model (DRE or ROM methods)
- 6th edition: Diagnosis-Based Impairment (DBI) with modifiers
- Whole person impairment: Combines regional impairments using Combined Values Chart

**State-Specific Systems:**
- Some states use proprietary rating guides (FL, NY, MN)
- California PDRS (Permanent Disability Rating Schedule)
- Schedule vs. unscheduled determination varies by state

### Dispute Resolution

**Administrative Process:**
1. Informal conference/mediation
2. Formal hearing before administrative law judge (ALJ)
3. Workers' compensation board/commission review
4. Appeals court (limited grounds for judicial review)

**Common Disputes:**
- Compensability (work-relatedness)
- Medical treatment authorization
- MMI determination and impairment rating
- Average weekly wage calculation
- Temporary vs. permanent disability
- Need for future medical treatment`,
      keyTerms: [
        { term: 'arising out of employment', definition: 'The legal requirement that an injury must have a causal connection to the worker\'s employment duties or conditions to be compensable under workers\' compensation' },
        { term: 'in the course of employment', definition: 'The legal requirement that an injury must occur within the time, place, and circumstances of work-related activity for workers\' compensation compensability' },
        { term: 'average weekly wage', definition: 'The calculation of a worker\'s pre-injury earnings used to determine the compensation rate for temporary and permanent disability benefits' },
        { term: 'utilization review', definition: 'A process where an insurer or third party evaluates whether requested medical treatment is reasonable, necessary, and consistent with evidence-based guidelines' },
        { term: 'qualified medical evaluator', definition: 'A physician certified to perform independent medical evaluations in workers\' compensation cases, determining causation, MMI, and permanent impairment (California system term)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced workers\' compensation practice requires mastery of impairment rating methodology, causation analysis for complex occupational diseases, understanding of medical-legal report writing standards, and navigation of state-specific regulatory frameworks governing treatment authorization, dispute resolution, and disability determination.',
      explanation: `## Advanced Workers' Compensation Practice

### Impairment Rating: AMA Guides 6th Edition in Detail

**Methodology:**
1. Identify most applicable Diagnosis-Based Impairment (DBI) class
2. Assign default impairment value within class
3. Apply grade modifiers:
   - Functional History (GMFH): ADL impact, pain interference
   - Physical Examination (GMPE): Objective findings
   - Clinical Studies (GMCS): Imaging, EMG, lab findings
4. Net adjustment = (GMFH - CDX) + (GMPE - CDX) + (GMCS - CDX)
5. Move up or down within class based on net adjustment
6. Convert regional impairment to whole person impairment

**Common Rating Scenarios:**
- Lumbar disc herniation with radiculopathy: Class 1-3 (depends on surgical outcome)
- Carpal tunnel syndrome post-release: Class 0-2 (depends on residual findings)
- Rotator cuff tear post-repair: Class 1-3 (depends on functional outcome)
- Amputation: Direct whole person rating from tables
- Multiple impairments: Combined Values Chart (never additive)

### Causation Analysis

**Standards of Causation:**
- Reasonable medical probability: More likely than not (>50%)
- NOT "possible" or "may have contributed" (insufficient)
- NOT "beyond a reasonable doubt" (criminal standard, too high)

**Occupational Disease Causation Framework:**
1. Establish diagnosis
2. Identify occupational exposure(s) with specificity
3. Demonstrate biological plausibility (exposure → disease mechanism)
4. Establish temporal relationship (exposure preceded disease onset)
5. Rule out non-occupational causes or apportion
6. Reference epidemiologic evidence (dose-response, relative risk)

**Apportionment:**
- Division of impairment between work-related and pre-existing causes
- Must be based on reasonable medical probability
- Methods vary by state: Proportional, substantial factor, last injurious exposure
- Example: Pre-existing degenerative disc disease + work injury → apportion

### Medical-Legal Report Writing

**Essential Report Elements:**
1. History of injury/illness (patient-reported and documented)
2. Occupational history (detailed exposures, duration, conditions)
3. Review of medical records and prior claims
4. Physical examination findings
5. Review of diagnostic studies
6. Diagnosis (using ICD-10 codes)
7. Causation analysis with medical reasoning
8. Work restrictions (current and permanent)
9. MMI determination with rationale
10. Impairment rating (if at MMI)
11. Future medical treatment recommendations

**Quality Standards:**
- Objective tone, avoid advocacy
- Cite medical literature for causation opinions
- Address alternative diagnoses and non-occupational factors
- Use precise terminology ("reasonable medical probability")
- Distinguish clinical opinion from administrative/legal determination
- AMA Guides compliance for impairment ratings

### State-Specific System Variations

**Key Variable Areas:**

| Feature | Liberal States (e.g., CA) | Restrictive States (e.g., TX) |
|---------|--------------------------|-------------------------------|
| Coverage | Nearly universal | Voluntary for employers |
| Physician choice | Employee choice after initial | Employer-directed network |
| Treatment guidelines | ACOEM with exceptions | Mandatory ODG/ACOEM |
| Impairment rating | PDRS schedule | AMA Guides + IR dispute |
| Attorney involvement | Common (~30% of claims) | Less common |
| Benefit levels | Higher maximums | Lower maximums |

### Return-to-Work and Case Management

**Evidence-Based Return-to-Work Principles:**
- Early return to modified duty improves outcomes
- Job match: Modified duties within medical restrictions
- Communication: Treating physician, employer, and insurer coordination
- Progressive: Graduated increase in demands over time
- Monitor: Track symptom response to work activities

**Barriers to Return-to-Work:**
- Medical: Unresolved symptoms, comorbidities, opioid dependence
- Psychological: Fear-avoidance beliefs, catastrophizing, depression
- Workplace: No modified duty available, adversarial relationship
- Legal: Claim disputes, secondary gain concerns
- Systemic: Delayed authorization, communication breakdown

**Physician Work Restrictions:**
- Must be specific and measurable (not "light duty")
- Example: "No lifting >10 lbs, no repetitive wrist flexion, sit-stand option, maximum 4 hours of keyboard use"
- Based on objective findings and reasonable medical judgment
- Temporary vs. permanent distinction
- Reviewed and updated at each clinical encounter`,
      keyTerms: [
        { term: 'Diagnosis-Based Impairment', definition: 'The primary rating methodology in AMA Guides 6th Edition that assigns an impairment class and grade based on the specific diagnosis, then adjusts using functional history, physical examination, and clinical study grade modifiers' },
        { term: 'apportionment', definition: 'The clinical and legal process of dividing permanent impairment between work-related causation and pre-existing or non-occupational conditions, based on reasonable medical probability' },
        { term: 'independent medical examination', definition: 'A medical evaluation performed by a physician not involved in the patient\'s treatment, typically requested by the employer/insurer to assess compensability, MMI, impairment, or treatment necessity' },
        { term: 'Combined Values Chart', definition: 'The AMA Guides mathematical method for combining multiple impairment values that accounts for the diminishing effect of additional impairments on the remaining whole person' },
        { term: 'fear-avoidance beliefs', definition: 'A psychosocial barrier to recovery where the worker develops an exaggerated belief that physical activity will cause further injury, leading to activity avoidance and prolonged disability' },
        { term: 'medical-legal report', definition: 'A comprehensive medical document prepared for workers\' compensation proceedings that addresses diagnosis, causation, work restrictions, MMI, and impairment rating with opinions stated to a reasonable degree of medical probability' },
      ],
      clinicalNotes: `Key clinical management points for workers' compensation practice:

1. **Documentation is everything**: In workers' compensation, the medical record IS the evidence. Document the mechanism of injury (patient's own words), specific job tasks, physical examination findings (objective measurements, not just "tenderness"), and the reasoning behind your causation opinion. Vague or incomplete documentation is the most common reason claims are denied or delayed.

2. **Causation language**: Use "within reasonable medical probability" (or your state's equivalent) when stating causation opinions. "Possible" or "cannot rule out" are legally insufficient. If you believe work was a contributing factor at >50% probability, state so explicitly.

3. **Impairment rating pitfalls**: The most common errors in impairment rating are: (a) rating before MMI, (b) using the wrong edition of the AMA Guides for the jurisdiction, (c) failing to apply grade modifiers correctly in the 6th edition, and (d) adding impairments arithmetically instead of using the Combined Values Chart.

4. **Work restriction specificity**: "Light duty" is not a medical restriction - it is an employer classification. Write specific, measurable restrictions: weight limits, positional tolerances (hours of sitting/standing), repetitive motion limitations, and environmental restrictions. Vague restrictions lead to job mismatches and re-injury.

5. **Second opinion requests**: Patients have the right to a second medical opinion in most states. When a patient disagrees with an IME finding, guide them through the appeals process rather than simply contradicting the IME physician in your notes. Document your independent clinical findings that support or refute the IME conclusions.`,
    },
    5: {
      level: 5,
      summary: 'Contemporary workers\' compensation systems face challenges from evolving employment models, opioid utilization management, mental health parity demands, artificial intelligence in claims adjudication, and international comparative policy analysis demonstrating divergent approaches to occupational injury compensation and prevention incentive alignment.',
      explanation: `## Workers' Compensation: System-Level Analysis

### Evolving Employment Models and Coverage Gaps

**Gig Economy Challenges:**
- Independent contractor classification excludes workers from coverage
- ABC test vs. economic reality test for classification
- California AB5 and subsequent Proposition 22: Contradictory legislative approaches
- Platform companies (Uber, DoorDash) creating limited injury benefit programs outside WC
- Workers' misclassification: Estimated 10-30% of workforce may be misclassified

**Remote Work Implications:**
- "Arising out of and in the course of employment" standard challenged by home offices
- Ergonomic injuries in non-employer-controlled environments
- Difficulty distinguishing work from personal activity
- Mental health claims from social isolation
- Employer duty to ensure safe home work environment (unclear legal ground)

### Opioid Management in Workers' Compensation

**The Problem:**
- WC claimants historically received opioids at rates 4-7x the general population
- Duration of opioid treatment significantly longer in WC cases
- Associated with prolonged disability, delayed return to work, and addiction
- Claim costs with opioid involvement average 5x higher than without

**Evidence-Based Interventions:**
- State formularies restricting initial opioid dispensing (TX, CA, NY)
- Duration limits: 7-14 day initial supply for acute injury
- Prior authorization for opioids >30 days
- Mandatory PDMP (Prescription Drug Monitoring Program) checks
- Drug testing for chronic opioid therapy
- Mandatory taper protocols for prolonged use
- Integration of non-pharmacologic pain management (PT, CBT, acupuncture)

**Outcomes of Opioid Reform:**
- Texas: 66% reduction in opioid prescriptions after closed formulary implementation
- Workers' compensation-specific opioid guidelines (ACOEM, ODG)
- Reduced claim duration and improved return-to-work rates
- Challenge: Ensuring adequate pain management for legitimate needs

### Mental Health in Workers' Compensation

**Compensability of Mental Health Claims:**
- Physical-mental: Mental condition resulting from physical work injury (generally compensable)
- Mental-mental: Mental condition from work-related mental stress (limited compensability)
- Mental-physical: Physical condition from work-related mental stress (most restrictive)

**Presumptive PTSD Laws:**
- First responders (fire, police, EMS): Expanding presumptions in many states
- PTSD is presumed work-related if diagnosed after qualifying exposure
- Reduces burden of proof for claimant
- States with presumptions: CA, TX, FL, CO, MN, and growing

**Emerging Issues:**
- COVID-19 presumption laws for frontline workers
- Burnout and cumulative stress claims
- Workplace violence-related mental health claims
- Accommodation requirements for mental health (ADA intersection)

### Artificial Intelligence in Workers' Compensation

**Current Applications:**
- Predictive analytics: Risk stratification of new claims for complexity
- Natural language processing: Automated medical record review and coding
- Treatment recommendation engines: Evidence-based care pathway suggestions
- Fraud detection: Pattern recognition in claim filing and billing
- Return-to-work prediction: Machine learning models using claim characteristics

**Ethical Concerns:**
- Algorithmic bias in claim adjudication (racial, socioeconomic disparities)
- Transparency: Black-box models affecting benefit determination
- Data privacy: Medical and employment data aggregation
- Human oversight: Ensuring AI recommendations are reviewed by qualified humans
- Regulatory framework: No current standard for AI use in WC decisions

### International Comparative Systems

**Key System Models:**

| Feature | US (State-Based) | Germany (Social Insurance) | Australia (Hybrid) |
|---------|------------------|---------------------------|-------------------|
| Administration | State-level, private insurers | BG (employer associations) | National + state |
| Coverage | Variable, some exempt | Universal | Universal |
| Physician choice | Often employer-directed | Employee choice | Employee choice |
| Prevention incentive | Experience modification rate | BG safety programs | Premium adjustment |
| Rehabilitation focus | Variable | Strong emphasis | Strong emphasis |
| Dispute rate | High (~10-15%) | Low (~2-3%) | Moderate |

**Evidence from International Comparisons:**
- Countries with integrated prevention and compensation have lower injury rates
- Single-payer models reduce administrative costs (German model ~5% overhead vs. US ~20-30%)
- Early intervention and rehabilitation focus reduces long-term disability
- Employer experience rating (premium adjustment) provides prevention incentive

### Health Economics of Workers' Compensation

**System Costs:**
- Total US workers' compensation costs: ~$100 billion annually
- Medical benefits: ~50% of total costs
- Indemnity (wage replacement): ~50% of total costs
- Administrative costs: ~20-30% of premium dollar
- Employer costs: Average $1.19 per $100 of payroll (varies widely by industry)

**Cost Drivers:**
- Aging workforce: Longer recovery times, higher medical utilization
- Medical cost inflation: Outpacing general inflation
- Opioid-related claims: Extended disability and high treatment costs
- Litigation: Attorney-involved claims cost 2-5x more than non-litigated
- Mental health claims: Growing volume and duration

**Prevention ROI:**
- Safety program investments show 2:1 to 6:1 return through reduced claims
- Experience modification rate incentivizes prevention (premium impact)
- OSHA compliance reduces both injury rates and WC costs
- Ergonomic interventions: ROI typically 3:1 to 10:1`,
      keyTerms: [
        { term: 'experience modification rate', definition: 'A multiplier applied to workers\' compensation insurance premiums based on an employer\'s actual loss history relative to expected losses for their industry, creating a financial incentive for injury prevention' },
        { term: 'mental-mental claim', definition: 'A workers\' compensation claim for a mental health condition allegedly caused solely by work-related mental stress without a physical injury, subject to the most restrictive compensability rules in most states' },
        { term: 'closed formulary', definition: 'A workers\' compensation pharmaceutical management approach that predefines which medications are approved for first-fill dispensing without prior authorization, used to reduce opioid prescribing and overall medication costs' },
        { term: 'ABC test', definition: 'A worker classification test requiring that a worker is (A) free from control, (B) performing work outside the usual course of business, and (C) engaged in an independently established trade, to be classified as an independent contractor rather than employee' },
        { term: 'presumptive coverage', definition: 'A legal provision that shifts the burden of proof by presuming that a specific condition (e.g., PTSD in first responders, cancer in firefighters) is work-related, requiring the employer to disprove causation' },
        { term: 'Berufsgenossenschaften (BG)', definition: 'The German statutory accident insurance carriers organized by industry sector that integrate workplace safety oversight, workers\' compensation coverage, and rehabilitation in a single system' },
      ],
      clinicalNotes: `System-level practice considerations:

1. **Opioid stewardship in workers' compensation**: Clinicians treating WC patients should follow state-specific formulary and duration guidelines for opioid prescribing. Best practice is to establish treatment goals, document functional outcomes (not just pain scores), check PDMP before each prescription, and have a clear taper plan. Consider referral to pain management when opioids are needed beyond the acute phase.

2. **Mental health claim documentation**: For PTSD and mental health claims in workers' compensation, document the specific work-related stressor(s) with dates and details, the DSM-5 diagnostic criteria met, and the temporal relationship between exposure and symptom onset. In states without presumptive coverage, the clinician must explicitly establish work-relatedness to a reasonable degree of medical probability.

3. **AI and clinical practice**: Be aware that AI tools are increasingly used by insurers to review treatment requests, predict claim outcomes, and flag utilization patterns. Ensure your medical records contain clear clinical reasoning for treatment decisions, as AI review systems look for evidence-based justification.

4. **Gig worker injuries**: When treating patients with work-related injuries who are classified as independent contractors, document the injury circumstances thoroughly regardless of expected coverage. Classification disputes are common, and good medical documentation supports the worker's case if they pursue reclassification.

5. **International evidence for best practices**: Evidence from countries with integrated prevention-compensation systems (Germany, Scandinavian countries) demonstrates that early rehabilitation, employer engagement, and graduated return-to-work programs significantly reduce disability duration. Advocate for these evidence-based practices within the US system, even when the administrative structure creates barriers.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'osha-workers-compensation',
      type: 'website',
      title: 'Workers\' Compensation',
      authors: ['Occupational Safety and Health Administration'],
      source: 'OSHA',
      url: 'https://www.osha.gov/workers-compensation',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-niosh-workers-comp',
      type: 'website',
      title: 'Workers\' Compensation - NIOSH Workplace Safety and Health Topics',
      authors: ['National Institute for Occupational Safety and Health'],
      source: 'CDC/NIOSH',
      url: 'https://www.cdc.gov/niosh/topics/workercomp/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'who-occupational-health',
      type: 'website',
      title: 'Occupational Health - WHO Global Plan of Action',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/occupational_health/en/',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    { targetId: 'topic-osha-rights-all-workers', targetType: 'topic', relationship: 'related', label: 'OSHA Rights for All Workers' },
    { targetId: 'topic-workplace-injury-first-aid', targetType: 'topic', relationship: 'related', label: 'Workplace Injury First Aid' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['occupational-medicine', 'workers-compensation', 'disability-evaluation', 'legal-medicine'],
    keywords: ['workers compensation', 'disability', 'impairment rating', 'return to work', 'MMI', 'work injury benefits'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
