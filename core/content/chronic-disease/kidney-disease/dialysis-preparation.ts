/**
 * Dialysis Preparation - Dialysis Options and Vascular Access
 */

import { EducationalContent } from '../../types';

export const DIALYSIS_PREPARATION: EducationalContent = {
  id: 'chronic-kidney-dialysis-preparation',
  type: 'concept',
  name: 'Dialysis Preparation and Options',
  alternateNames: ['Kidney Replacement Therapy', 'Dialysis Options', 'Vascular Access', 'ESRD Planning', 'Dialysis Education'],

  levels: {
    1: {
      level: 1,
      summary: 'When kidneys fail completely, dialysis or a transplant is needed to stay alive. Planning ahead helps you choose the best treatment for your life and ensures access is ready when needed.',
      explanation: `**What Happens When Kidneys Fail?**

When kidneys stop working (Stage 5 CKD, also called kidney failure or ESRD), waste builds up in your blood. Without treatment, this is life-threatening. Your options are:

1. Dialysis - a treatment that cleans your blood
2. Kidney transplant - surgery to get a new kidney
3. Conservative care - comfort-focused care without dialysis

**Types of Dialysis:**

*Hemodialysis (HD):*
- Blood is filtered through a machine
- Done at a dialysis center or at home
- Usually 3 times per week
- Each treatment takes about 3-4 hours

*Peritoneal Dialysis (PD):*
- Uses your belly lining as a filter
- Fluid goes in and out through a catheter
- Can be done at home, even while sleeping
- Done daily

**Planning Ahead Is Important:**

Do not wait until an emergency. When your kidney function drops to about 20% (Stage 4), it is time to:
- Learn about treatment options
- Choose what is right for you
- Get access placed if needed

**Vascular Access for Hemodialysis:**

Your blood needs a way to get to and from the machine:

*Fistula (Best Option):*
- Surgery connects an artery to a vein in your arm
- Takes 2-3 months to mature
- Lasts the longest
- Fewest complications

*Graft:*
- Surgery uses a tube to connect artery and vein
- Ready in 2-3 weeks
- Good option if fistula not possible

*Catheter:*
- Tube placed in a large neck vein
- Used immediately
- Only for short-term if possible
- Higher infection risk

**Access for Peritoneal Dialysis:**

*PD Catheter:*
- Soft tube placed in your belly
- Needs 2 weeks to heal before use
- Stays in place permanently
- Hidden under clothing

**Choosing Your Treatment:**

Think about:
- Your schedule and activities
- Travel preferences
- Home situation and support
- Your health conditions
- Your personal preferences

**Transplant as an Option:**

A kidney transplant may be the best long-term option for many people:
- Better quality of life than dialysis
- No dialysis schedule
- Requires lifelong medications
- Need a suitable donor
- Evaluation process takes time

**Questions to Ask Your Doctor:**

- What treatment options are best for me?
- When should I get access placed?
- Can I do dialysis at home?
- Am I a candidate for transplant?
- What should I expect with each option?

**Getting Ready:**

1. Attend education classes
2. Meet with a surgeon about access
3. Get transplant evaluation if interested
4. Make your choice before an emergency
5. Tell your family about your wishes

Remember: Many people live active, fulfilling lives on dialysis or with a transplant. Planning ahead gives you the best start.`,
      keyTerms: [
        { term: 'dialysis', definition: 'Treatment that does the job of kidneys when they fail' },
        { term: 'hemodialysis', definition: 'Type of dialysis using a machine to filter blood' },
        { term: 'peritoneal dialysis', definition: 'Type of dialysis using your belly lining as a filter' },
        { term: 'vascular access', definition: 'The way blood travels to and from the dialysis machine' },
        { term: 'fistula', definition: 'Connection of artery to vein for dialysis access; considered the best option' },
        { term: 'ESRD', definition: 'End-Stage Renal Disease; permanent kidney failure' },
      ],
      analogies: [
        'Think of dialysis like a washing machine for your blood. Just like dirty clothes go in and come out clean, your blood goes through the machine and comes back without the waste products.',
        'A fistula is like building a highway for your blood. It creates a stronger, larger pathway that can handle the traffic of dialysis treatments for years.',
      ],
      examples: [
        'Maria chose peritoneal dialysis because she could do it overnight while sleeping, allowing her to work during the day without interruption. She had her PD catheter placed 3 weeks before starting treatment.',
        'John wanted a transplant but needed dialysis while waiting. He got a fistula placed early, which was ready to use when his kidney function declined. His fistula has worked well for 5 years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney replacement therapy planning begins in Stage 4 CKD with modality education, access placement timing, and transplant evaluation to ensure optimal transition to dialysis or transplantation.',
      explanation: `**Timing of Kidney Replacement Therapy Planning**

*When to Begin Education:*
---
Stage 4 CKD (eGFR 15-29):
- Begin formal education
- Introduce treatment options
- Assess home suitability
- Discuss transplant evaluation

Stage 5 CKD (eGFR less than 15):
- Finalize modality choice
- Place permanent access
- Transplant workup completion
- Plan initiation timing
---

*Initiation Timing:*
- Planned start preferred over urgent
- eGFR 5-10 or symptoms despite higher GFR
- Avoid catheter starts when possible
- "Healthy start" improves outcomes

**Treatment Modality Options:**

*In-Center Hemodialysis:*
- 3 times weekly, 3-4 hours per treatment
- Professional staff present
- Social support from other patients
- Fixed schedule
- Travel requires advance planning

*Home Hemodialysis:*
- 3-6 times weekly (short daily or nocturnal)
- Training required (4-8 weeks)
- Partner may be needed
- More dietary freedom
- Better quality of life for many

*Peritoneal Dialysis:*
- CAPD: 4 exchanges daily
- APD (CCPD): Overnight cycler
- Home-based
- Preserves residual kidney function longer
- More infection risk than HD

*Kidney Transplant:*
- Best survival and quality of life
- Preemptive (before dialysis) preferred
- Requires lifelong immunosuppression
- Living donor vs deceased donor
- Not suitable for all patients

*Conservative Care:*
- Active medical management without dialysis
- Focus on quality of life
- Appropriate for some elderly/frail patients
- Requires comprehensive support

**Vascular Access Planning:**

*Fistula First Initiative:*
- AV fistula preferred over graft or catheter
- Lower infection rates
- Longer patency
- Lower mortality

*Fistula Creation Timing:*
---
When eGFR 15-20 or:
- Progressive decline expected
- Diabetes (faster progression)
- Access surgeon availability
- Patient preference

Healing time: 6-12 weeks minimum
Maturation: Often 2-4 months
---

*Preoperative Vessel Mapping:*
- Ultrasound assessment
- Identifies suitable vessels
- Guides surgical planning
- Increases fistula success

**Peritoneal Dialysis Access:**

*PD Catheter Placement:*
- Laparoscopic or open insertion
- 2-3 cm below umbilicus
- Subcutaneous tunnel
- 2+ weeks healing before use

*Contraindications:*
- Severe abdominal adhesions
- Active inflammatory bowel disease
- Morbid obesity (relative)
- Large abdominal hernias

**Transplant Evaluation:**

*Referral Timing:*
- eGFR less than 30 (earlier if progressive)
- Before dialysis if possible (preemptive)

*Evaluation Components:*
---
Medical:
- Cardiac clearance
- Cancer screening
- Infectious disease testing
- Immunologic testing

Psychosocial:
- Support system assessment
- Financial evaluation
- Medication adherence history
- Mental health screening

Surgical:
- Anatomic assessment
- Prior surgeries review
- Vessel patency
---

*Listing Process:*
- Waiting list time varies by region
- Living donation can bypass wait
- Paired exchange programs available

**Modality Selection Considerations:**

| Factor           | HD Preference   | PD Preference   | Transplant     |
|------------------|-----------------|-----------------|----------------|
| Patient choice   | Often selected  | Motivated       | Best candidate |
| Home support     | Less critical   | More important  | Essential      |
| Cardiac status   | May be better   | Hemodynamic     | Best option    |
| Residual UF      | Less important  | Important       | N/A            |
| Prior abdominal  | Better          | Contraindicated | N/A            |
| Infection risk   | Access-related  | Peritonitis     | Immunosuppress |

**Shared Decision-Making:**

*Patient Education:*
- Objective information about options
- Quality of life considerations
- Home visit for PD/HHD assessment
- Peer support contacts

*Decision Support Tools:*
- Decision aids
- Values clarification
- Risk communication
- Family involvement`,
      keyTerms: [
        { term: 'modality', definition: 'Type of kidney replacement therapy (HD, PD, transplant)' },
        { term: 'preemptive transplant', definition: 'Transplant performed before starting dialysis' },
        { term: 'maturation', definition: 'Process of vein enlargement and strengthening after fistula creation' },
        { term: 'patency', definition: 'Openness of blood vessel or access; ability to maintain flow' },
        { term: 'residual renal function', definition: 'Remaining kidney function; better preserved with PD' },
        { term: 'conservative care', definition: 'Non-dialysis medical management of ESRD' },
      ],
      analogies: [
        'Choosing a dialysis modality is like choosing how to commute to work. In-center HD is like taking the train on a fixed schedule. PD is like driving your own car with flexibility. Home HD is like working from home with its own advantages and responsibilities.',
        'A vascular access is like building a bridge before you need to cross the river. It takes time to construct properly, but trying to cross without it when the waters rise leads to dangerous emergency situations.',
      ],
      examples: [
        'A 45-year-old employed patient chose home hemodialysis to maintain work schedule. After 6 weeks of training, they dialyzed 5 nights weekly for 6 hours, reporting better energy and fewer dietary restrictions than in-center treatment.',
        'An 80-year-old with multiple comorbidities and frailty chose conservative care over dialysis after discussing goals of care with their family. They focused on quality of life and comfort with supportive care.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive dialysis preparation integrates timely access placement, modality-specific education, transplant evaluation, and coordinated care to optimize outcomes for patients approaching ESRD.',
      explanation: `**ESRD Preparation Guidelines**

*KDIGO Recommendations:*
- Begin education when eGFR less than 30
- Place permanent access when eGFR 15-20
- Evaluate for transplant preemptively
- Individualize initiation timing

*"Fistula First" Principles:*
- Native AV fistula preferred access
- Timely referral to surgeon
- Vessel mapping preoperatively
- Avoid tunneled catheters when possible

**Vascular Access Types and Characteristics:**

*Arteriovenous Fistula (AVF):*
---
Types by Location:
- Radiocephalic (wrist): First choice
- Brachiocephalic (elbow)
- Brachial-basilic (transposition)

Advantages:
- Lowest infection rate (less than 0.5/1000 days)
- Best long-term patency (65% at 2 years)
- No synthetic material
- Lowest mortality association

Disadvantages:
- Long maturation time (6-12+ weeks)
- 20-50% fail to mature
- Not suitable for all patients
- Aesthetic concerns
---

*Arteriovenous Graft (AVG):*
---
Materials:
- PTFE (polytetrafluoroethylene)
- Biological grafts (less common)

Advantages:
- Ready in 2-4 weeks
- Multiple cannulation sites
- Good for small vessels

Disadvantages:
- Higher infection rate (1-3/1000 days)
- Lower primary patency (50% at 1 year)
- More interventions needed
- Steal syndrome risk
---

*Tunneled Dialysis Catheter:*
---
Indications:
- Urgent dialysis start
- Maturing permanent access
- Exhausted permanent access

Complications:
- Bacteremia (2-5/1000 days)
- Central venous stenosis
- Poor adequacy
- Mortality risk highest

Limited use to:
- Less than 10% of prevalent patients
- Temporary when possible
---

**Fistula Maturation and Surveillance:**

*Maturation Assessment:*
- Physical examination (thrill, bruit)
- Ultrasound evaluation
- Flow greater than 350-500 mL/min
- Diameter greater than 4-5 mm
- Depth less than 6 mm

*Surveillance Protocol:*
- Regular physical examination
- Flow monitoring
- Preemptive angioplasty controversial
- Prompt intervention for dysfunction

**Peritoneal Dialysis Access Details:**

*Catheter Types:*
- Straight Tenckhoff (most common)
- Coiled Tenckhoff
- Swan neck (pre-exit)
- Moncrief-Popovich (buried)

*Insertion Techniques:*
- Open surgical
- Laparoscopic (preferred if available)
- Percutaneous
- Peritoneoscopic

*Complications:*
- Pericatheter leak
- Exit site infection
- Tunnel infection
- Hernia formation
- Outflow failure

**Transplant Evaluation Process:**

*Absolute Contraindications:*
- Active malignancy (most)
- Active infection
- Severe irreversible comorbidity
- Non-adherence history
- Active substance abuse

*Relative Contraindications:*
- Age greater than 75
- Severe obesity
- Severe vascular disease
- Limited life expectancy
- Poor social support

*Immunologic Evaluation:*
- ABO blood type
- HLA typing
- Panel Reactive Antibody (PRA)
- Crossmatch potential donors
- Desensitization if sensitized

**Timing of Dialysis Initiation:**

*Planned Initiation:*
- eGFR 5-10 mL/min/1.73m2
- Or earlier if symptoms present:
  - Uremic pericarditis
  - Progressive neuropathy
  - Intractable volume overload
  - Malnutrition despite optimization
  - Refractory acidosis or hyperkalemia

*IDEAL Trial:*
- Early (eGFR 10-14) vs late (5-7) initiation
- No survival benefit to early start
- Quality of life similar
- Supports symptom-guided initiation

**Care Coordination:**

*Multidisciplinary Team:*
- Nephrologist
- Vascular access surgeon
- Transplant team
- Dialysis nurses
- Social worker
- Dietitian
- Pharmacist

*Patient Education Components:*
- Modality options
- Access care
- Transplant process
- Conservative care option
- Advance care planning

**Outcomes by Modality:**

*Survival:*
- Transplant best (living greater than deceased)
- Home HD and PD similar
- In-center HD slightly lower
- Catheter HD worst

*Quality of Life:*
- Home modalities generally preferred
- Transplant best overall
- Individual variation significant
- Patient choice matters`,
      keyTerms: [
        { term: 'AVF', definition: 'Arteriovenous Fistula; surgical connection of artery to vein' },
        { term: 'AVG', definition: 'Arteriovenous Graft; synthetic tube connecting artery and vein' },
        { term: 'maturation', definition: 'Process of arterialized vein enlargement for cannulation' },
        { term: 'steal syndrome', definition: 'Ischemia of hand from diversion of blood to access' },
        { term: 'PRA', definition: 'Panel Reactive Antibody; measure of sensitization to HLA' },
        { term: 'desensitization', definition: 'Treatment to reduce antibody levels for incompatible transplant' },
      ],
      clinicalNotes: 'Fistula First Breakthrough Initiative goals: AVF in greater than 65% of incident patients, catheter in less than 10% of prevalent patients. Timely referral for access is critical - refer when eGFR 15-20. Preemptive transplant offers best outcomes. Conservative care is appropriate for some elderly/frail patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced dialysis preparation encompasses evidence-based access strategies, personalized modality selection, comprehensive transplant evaluation, and coordinated transition protocols to optimize ESRD outcomes.',
      explanation: `**Evidence-Based Access Strategies**

*AVF Creation Techniques:*
---
Preoperative Assessment:
- Vessel mapping (ultrasound)
- Allen test (hand circulation)
- Cardiac evaluation (steal risk)
- Anatomic considerations

Surgical Approaches:
- End-to-side anastomosis (most common)
- Side-to-side
- End-to-end (less common)

Adjunctive Procedures:
- Proximalization for steal
- DRIL procedure (ischemia)
- Banding for high flow
- Revision for stenosis
---

*Enhancing Fistula Maturation:*
- Preoperative exercise (handgrip)
- Postoperative arm elevation
- Avoidance of venipuncture/pressure
- Far-infrared therapy (emerging)
- Early endovascular intervention for stenosis

**Access Complications and Management:****

*Stenosis:*
- Most common cause of dysfunction
- Typically at venous anastomosis
- Diagnosis: Decreased flow, elevated venous pressure
- Treatment: Angioplasty, stenting

*Thrombosis:*
- Requires urgent declotting
- Surgical vs endovascular
- Identify and treat underlying stenosis

*Infection:*
- AVF: Rare but serious
- AVG: More common, may require excision
- Catheter: Common, often requires removal

*Steal Syndrome:*
- Grades: Mild (cool hand) to severe (ischemic pain/tissue loss)
- Management: Banding, DRIL, ligation

**Peritoneal Dialysis Optimization:**

*Catheter Function Issues:*
- Outflow failure (constipation common cause)
- One-way obstruction (fibrin, omentum)
- Leaks (early vs late)

*Prevention Strategies:*
- Bowel regimen
- Laparoscopic placement with omentopexy
- Proper exit site care
- Patient training quality

*Peritonitis Prophylaxis:*
- Exit site care protocols
- mupirocin prophylaxis if S. aureus carrier
- Connection hygiene
- Double-bag systems

**Transplant Advances:**

*Living Donor Options:*
---
Directed donation:
- Known donor to specific recipient

Non-directed donation:
- Altruistic donor to chain

Paired exchange:
- Incompatible pairs swap donors
- Can start donor chains

Compatible pair participation:
- Join exchange to optimize matching
- May reduce waiting time
---

*ABO-Incompatible Transplant:*
- Pre-transplant desensitization
- Rituximab, IVIG, plasmapheresis
- Outcomes approaching compatible

*Sensitized Patient Strategies:*
- Virtual crossmatch
- Desensitization protocols
- National sharing for highly sensitized
- Acceptable mismatch programs

**Modality Survival Analysis:**

*Confounding Factors:*
- Selection bias (healthier patients choose home)
- Comorbidity differences
- Age distribution
- Switching between modalities

*Intent-to-Treat Analysis:*
- Transplant superior to all dialysis
- Home HD and PD similar
- In-center HD reference standard

*Time on Modality:*
- Early mortality higher on PD (less selection)
- Long-term PD associated with technique failure
- Transplant benefit persists decades

**Conservative Care Program:**

*Candidate Selection:*
- Age greater than 75 with comorbidity
- Severe frailty
- Advanced dementia
- Limited life expectancy
- Patient preference

*Program Components:*
- Comprehensive symptom management
- Advance care planning
- Psychosocial support
- Palliative care integration
- Family support

*Outcomes:*
- Median survival 6-24 months
- Quality of life focus
- High satisfaction when chosen
- Cost-effective

**Transitional Care:**

*Pre-ESRD Care Model:*
- Multidisciplinary clinics
- Integrated education
- Timely access placement
- Transplant referral
- Psychosocial support

*Outcomes:*
- Reduced catheter starts
- More home dialysis
- More preemptive transplants
- Better survival
- Lower costs

**Quality Metrics:**

*Access:*
- AVF rate in incident patients
- Catheter rate (target less than 10%)
- Time from referral to creation
- Fistula maturation rate

*Modality:*
- Home dialysis prevalence (target 15%+)
- Preemptive transplant rate
- Patient education documentation

*Outcomes:*
- Mortality by modality
- Hospitalization rates
- Patient-reported outcomes
- Quality of life measures`,
      keyTerms: [
        { term: 'DRIL', definition: 'Distal Revascularization Interval Ligation; surgical treatment for steal syndrome' },
        { term: 'venous anastomosis', definition: 'Connection between graft/fistula and vein' },
        { term: 'omentum', definition: 'Abdominal tissue that can obstruct PD catheters' },
        { term: 'desensitization', definition: 'Reducing donor-specific antibodies to enable transplant' },
        { term: 'virtual crossmatch', definition: 'Predicting compatibility using known HLA antibody profile' },
        { term: 'transitional care', definition: 'Coordinated care during transition to ESRD' },
      ],
      clinicalNotes: 'Endovascular interventions for AVF stenosis should be proactive but not too aggressive - balance intervention with fistula longevity. DRIL procedure preferred for severe steal syndrome. Conservative care programs provide excellent quality of life for appropriate patients. Transitional care clinics show improved outcomes across multiple metrics.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art dialysis preparation integrates precision medicine, advanced access technologies, innovative transplant strategies, and patient-centered decision-making to optimize kidney replacement therapy outcomes.',
      explanation: `**Precision Approaches to Access Creation**

*Predictive Modeling for AVF Success:*
---
Preoperative Factors:
- Vessel diameter and quality
- Age and sex
- Comorbidities
- Central vein patency
- Inflammatory markers

Machine Learning Applications:
- Predict fistula maturation
- Optimize surgical site selection
- Individualize surveillance
- Guide early intervention
---

*Biological Enhancement:*
- Stem cell therapy for maturation
- Growth factor applications
- Gene therapy approaches
- Tissue engineering

**Advanced Access Technologies:**

*Novel Fistula Creation:*
- Endovascular fistula creation (WavelinQ, Ellipsys)
- No open surgery required
- Faster maturation
- Limited long-term data
- Exciting development

*Vascular Access Grafts:*
- Bioengineered grafts
- Endothelialized surfaces
- Infection-resistant coatings
- Improved patency potential

*Implantable Ports:*
- Dual-lumen ports for dialysis
- Lower infection risk than catheters
- Subcutaneous placement
- Emerging technology

**Transplant Innovation:****

*Xenotransplantation:*
- Genetically modified pigs
- Decreased rejection potential
- Clinical trials beginning
- Potential unlimited organ supply

*Organ Preservation:*
- Machine perfusion technologies
- Ex-vivo organ repair
- Extended criteria utilization
- Improved graft function

*Tolerance Protocols:*
- Mixed chimerism approaches
- Minimize immunosuppression
- Operational tolerance research
- Living donor tolerance trials

**Wearable and Implantable Dialysis:**

*Wearable Artificial Kidney:*
- Continuous ambulatory dialysis
- Battery-operated
- Clinical trials ongoing
- Freedom from machines

*Implantable Artificial Kidney:*
- Biohybrid device
- No immunosuppression needed
- Powered by blood pressure
- Development stage

*Peritoneal Dialysis Innovations:*
- Automated wearable system
- Continuous flow PD
- Sorbent technology
- Remote monitoring integration

**Decision Support and AI:**

*Modality Selection Algorithms:*
---
Input Variables:
- Clinical characteristics
- Comorbidities
- Psychosocial factors
- Patient preferences
- Geographic/access factors

AI-Driven Recommendations:
- Outcome predictions
- Personalized matching
- Shared decision support
- Continuous learning
---

*Predictive Analytics:*
- Timing of ESRD prediction
- Access creation optimization
- Transplant waitlist management
- Outcome prediction

**Patient-Centered Outcomes Research:****

*Patient-Reported Outcome Measures:*
- KDQOL-36 and -SF
- Dialysis-specific measures
- Treatment burden assessment
- Preference elicitation

*Shared Decision-Making Tools:*
- Decision aids
- Values clarification
- Risk communication
- Deliberation support

*Patient Engagement:*
- Peer support programs
- Patient navigators
- Digital health tools
- Telehealth integration

**Health Services Research:**

*Access to Care:*
- Racial disparities in access placement
- Geographic variation
- Socioeconomic factors
- Intervention strategies

*Economic Analyses:*
- Cost-effectiveness by modality
- Value-based care models
- Home dialysis incentives
- Transplant cost savings

*Policy Implications:*
- ESRD Prospective Payment System
- Quality incentives
- Transplant access policies
- Innovation funding

**Future Directions:**

*Regenerative Medicine:*
- Kidney organoids
- 3D bioprinting
- Decellularized scaffolds
- Stem cell therapies

*Prevention of ESRD:*
- Earlier intervention
- Disease-modifying therapies
- Artificial intelligence prediction
- Precision prevention

*Global Disparities:*
- Worldwide ESRD burden
- Dialysis access inequities
- Transplant tourism
- Ethical considerations

**Research Priorities:**

*Clinical Trials Needed:*
- Access surveillance strategies
- Optimal dialysis initiation
- Conservative care outcomes
- Wearable dialysis efficacy

*Implementation Science:*
- Spread of best practices
- Technology adoption
- Behavior change
- Quality improvement`,
      keyTerms: [
        { term: 'endovascular fistula', definition: 'Fistula created through minimally invasive catheter techniques' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs between species' },
        { term: 'machine perfusion', definition: 'Technology to preserve and assess organs outside the body' },
        { term: 'mixed chimerism', definition: 'Coexistence of donor and recipient immune cells; may enable tolerance' },
        { term: 'operational tolerance', definition: 'Stable graft function without immunosuppression' },
        { term: 'KDQOL', definition: 'Kidney Disease Quality of Life; validated assessment tool' },
      ],
      clinicalNotes: 'Endovascular fistula creation represents a paradigm shift in access surgery. Xenotransplantation may solve organ shortage in coming decades. Wearable and implantable dialysis devices promise to transform treatment. Patient-reported outcomes should guide innovation. Addressing disparities in access to care is a critical priority.',
    },
  },

  media: [
    {
      id: 'dialysis-options-chart',
      type: 'diagram',
      filename: 'dialysis-modality-comparison.svg',
      title: 'Dialysis Options Comparison',
      description: 'Visual comparison of hemodialysis, peritoneal dialysis, and transplant options',
    },
    {
      id: 'vascular-access-types',
      type: 'diagram',
      filename: 'vascular-access-guide.svg',
      title: 'Types of Vascular Access',
      description: 'Illustrations of fistula, graft, and catheter for hemodialysis',
    },
    {
      id: 'pd-catheter-diagram',
      type: 'diagram',
      filename: 'pd-catheter-placement.svg',
      title: 'Peritoneal Dialysis Catheter',
      description: 'Diagram showing PD catheter placement in the abdomen',
    },
  ],

  citations: [
    {
      id: 'kdigo-2020-krt',
      type: 'article',
      title: 'KDIGO 2020 Clinical Practice Guideline on the Evaluation and Management of Candidates for Kidney Transplantation',
      source: 'Transplantation',
    },
    {
      id: 'fistula-first',
      type: 'article',
      title: 'Fistula First Breakthrough Initiative',
      source: 'Centers for Medicare and Medicaid Services',
    },
    {
      id: 'ideal-trial',
      type: 'article',
      title: 'Initiating Dialysis Early and Late (IDEAL) Study',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-kidney-ckd-stages', targetType: 'concept', relationship: 'related', label: 'CKD Stages' },
    { targetId: 'chronic-kidney-fluid-management', targetType: 'concept', relationship: 'related', label: 'Fluid Management' },
    { targetId: 'chronic-kidney-medication-adjustments', targetType: 'concept', relationship: 'related', label: 'Medication Adjustments' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['chronic-disease', 'ckd', 'dialysis', 'transplant', 'vascular-access'],
    keywords: ['dialysis', 'kidney transplant', 'vascular access', 'fistula', 'ESRD', 'kidney replacement therapy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology', 'surgery'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
