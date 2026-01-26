import { EducationalContent } from '../../types';

export const candidacy: EducationalContent = {
  id: 'candidacy',
  type: 'concept',
  name: 'Transplant Candidacy Determination',
  alternateNames: ['Transplant Eligibility', 'Transplant Evaluation', 'Transplant Candidate Selection'],

  levels: {
    1: {
      level: 1,
      summary: 'Not everyone with organ failure can receive a transplant. Doctors evaluate many factors to determine if transplantation is safe and likely to succeed.',
      explanation: `Before someone can be placed on the transplant waiting list, they must go through a careful evaluation process. This is called determining transplant candidacy.

**Why Not Everyone is a Candidate**

The transplant team must be sure that:
- The surgery is safe enough to perform
- The new organ will have a good chance of working
- The person can take care of the new organ properly
- The benefits outweigh the risks

**What Doctors Evaluate**

*Medical Factors:*
- How sick is the person from organ failure?
- Are there other serious medical problems?
- Is the person strong enough for surgery?
- Can the anesthesia be given safely?

*Non-Medical Factors:*
- Does the person have family support?
- Can they follow complex medication schedules?
- Do they understand what's involved?
- Can they get to appointments regularly?

**Absolute Contraindications - Reasons transplant Cannot Be Done**

These are situations where transplant is too dangerous:
- Active cancer that has spread
- Severe untreatable infection
- Severe irreversible brain damage
- Life expectancy too short (<1-2 years)
- Inability to understand or agree to treatment

**Relative Contraindications - Issues That May Need Treatment**

These problems might be treated first:
- Obesity (may need weight loss)
- Active smoking (must quit)
- Recent cancer (may need waiting period)
- Uncontrolled diabetes (needs better management)
- Lack of social support (needs planning)

**The Goal of Evaluation**

The transplant team wants to be sure that:
- The surgery will be safe
- The new organ will function well
- The person will take good care of it
- The benefits are greater than the risks`,
      keyTerms: [
        { term: 'Candidate', definition: 'Person being considered for organ transplantation' },
        { term: 'Contraindication', definition: 'Medical condition or factor that makes a treatment unsafe or inadvisable' },
        { term: 'Comorbidities', definition: 'Other medical conditions a person has besides their main illness' },
        { term: 'Absolute Contraindication', definition: 'Condition that completely prevents transplantation' },
        { term: 'Relative Contraindication', definition: 'Condition that may be addressed before transplantation is possible' }
      ],
      analogies: [
        'Transplant candidacy is like qualifying for a loan - the bank (transplant team) needs to be sure you can handle the responsibility before they approve.',
        'Absolute contraindications are like red lights that stop the process, while relative contraindications are like yellow lights requiring caution.',
      ],
      examples: [
        'A person with active spreading cancer cannot receive a transplant because the immunosuppression would make cancer grow worse.',
        'Someone who smokes may need to quit smoking for 6 months before being listed for a lung transplant.',
        'A patient who lives alone and cannot manage medications may need to arrange for home care before transplant.',
      ],
    },
    2: {
      level: 2,
      summary: 'Absolute contraindications include active cancer, severe infection, and irreversible brain damage. Relative contraindications include obesity, smoking, and psychosocial issues.',
      explanation: `Understanding transplant candidacy requires knowledge of the specific conditions that prevent or complicate transplantation.

**Absolute Contraindications**

*Active Malignancy:*
- Any cancer with metastasis (spread)
- Recent cancer diagnosis (within 2-5 years typically)
- Exceptions: some skin cancers (basal cell, squamous cell)
- Need cancer-free period before transplant

*Active Infection:*
- Sepsis or bacteremia
- Untreated tuberculosis
- Active hepatitis that is uncontrolled
- HIV (now relative, not absolute, if controlled)
- Fungal infections with spread

*Severe Irreversible Brain Damage:*
- Advanced dementia
- Severe cognitive impairment
- Brain injury with no awareness
- Cannot give informed consent
- Cannot participate in care

*Severe Comorbidities Limiting Survival:*
- Untreatable heart disease (for non-heart transplants)
- Severe lung disease (for non-lung transplants)
- Irreversible pulmonary hypertension
- Life expectancy <1-2 years regardless of transplant

**Relative Contraindications**

*Obesity:*
- BMI >35-40 often requires weight loss
- May be acceptable at lower BMI
- Increases surgical risk
- Can be addressed before transplant

*Smoking:*
- Current smoking usually requires cessation
- Must quit before lung transplant
- Increases risk of complications
- Abstinence typically required for 6 months

*Alcohol Use:*
- Active alcohol use contraindicates liver transplant
- Usually requires 6 months of abstinence
- Participation in treatment program
- Random testing to confirm abstinence

*Substance Abuse:*
- Active drug use prevents transplantation
- Requires treatment and documented abstinence
- Random monitoring
- Psychosocial support required

*Psychiatric Conditions:*
- Active psychosis (untreated)
- Severe depression (untreated)
- History of non-adherence
- Suicidal ideation
- May require treatment and stabilization

*Lack of Social Support:*
- Lives alone without assistance
- No one to help with medications/appointments
- May be addressable with care planning
- Case manager involvement

**Age Considerations**

*Age alone is NOT a contraindication*
- Physiologic age more important than chronologic
- 80-year-old may be better candidate than 60-year-old
- Fitness and frailty matter more than calendar age
- Individual assessment required

*Elderly candidates:*
- May have excellent outcomes
- Need careful cardiac/pulmonary evaluation
- May need shorter immunosuppression
- Frailty assessment important

**Financial Considerations**

*Insurance coverage:*
- Must have coverage for surgery
- Must have coverage for medications
- Medicaid, Medicare, private insurance accepted
- Financial counseling available

*Medication costs:*
- Immunusppression costs thousands monthly
- Assistance programs available
- Cannot be barrier to access

**Special Situations**

*Previous transplant:*
- Need evaluation for rejection causes
- Non-adherence must be addressed
- May require special monitoring
- Individualized decision

*Autoimmune diseases:*
- May recur in transplanted organ
- Some are absolute, most are relative
- Examples: FSGS, IgA nephropathy, primary biliary cholangitis
- Careful risk-benefit discussion`,
      keyTerms: [
        { term: 'Non-Adherence', definition: 'Not following prescribed treatment plans or taking medications as directed' },
        { term: 'Social Support', definition: 'Help from family and friends with medical care and daily activities' },
        { term: 'Active Cancer', definition: 'Cancer that is currently growing or has been treated recently' },
        { term: 'Psychosis', definition: 'Mental condition where a person loses contact with reality' },
        { term: 'Waitlist', definition: 'Official list of approved candidates waiting for organ transplant' }
      ],
      clinicalNotes: 'Cancer: Usually 2-5 year disease-free period required. Smoking: Must quit for 6 months before lung transplant. Alcohol: 6 months abstinence required for liver transplant. Age: Physiologic > chronologic age. BMI >35-40 requires weight loss.',
    },
    3: {
      level: 3,
      summary: 'Organ-specific contraindications include PVR >5 for heart, severe COPD for lung, and MELD exceptions. Evaluation includes cardiac, pulmonary, and psychosocial assessment.',
      explanation: `Each organ type has specific contraindications and evaluation criteria based on the unique aspects of that transplantation.

**Kidney Transplant Contraindications**

*Absolute:*
- Active infection
- Recent malignancy (<2-5 years depending on type)
- Severe vascular disease making surgery impossible
- Irreversible pulmonary hypertension
- Active substance abuse

*Relative:*
- Severe obesity (BMI >40)
- Nephrotic syndrome with active thrombosis
- Recurrent kidney stones (may need treatment)
- Bladder dysfunction (may affect graft)

*Special considerations:*
- Prior kidney transplant: higher immunologic risk
- Recurrent disease: FSGS, membranous nephropathy
- Urinary diversion: ileal conduit, neobladder
- Hepatitis C: now treatable, not a contraindication

**Liver Transplant Contraindications**

*Absolute:*
- Active alcohol use (<6 months sobriety)
- Extrahepatic malignancy
- Uncontrolled sepsis
- Severe cardiopulmonary disease
- Advanced liver disease with poor functional status

*Relative:*
- Portal vein thrombosis (surgery more complex)
- Prior bariatric surgery (altered anatomy)
- Severe malnutrition (needs optimization)
- Age >70 (physiologic assessment)

*Alcohol-related liver disease:*
- 6 months sobriety standard
- Participation in treatment program
- Random testing
- Psychosocial evaluation

*MELD Exception Criteria:*
- Some conditions don't accurately reflect severity
- Can apply for exception points
- Examples: hepatopulmonary syndrome, hepatocellular carcinoma
- Requires documentation and review

**Heart Transplant Contraindications**

*Absolute:*
- Fixed PVR >5 Wood units (untreatable)
- Severe COPD (FEV1 <50% predicted)
- Recent MI (<3-6 months, depending on context)
- Untreatable psychiatric illness
- Severe peripheral vascular disease

*Relative:*
- Obesity (BMI >35)
- Diabetes with end-organ damage
- Osteoporosis (steroid-induced risk)
- Peptic ulcer disease
- Kidney dysfunction (may need combined transplant)

*PVR Assessment:*
- Pulmonary Vascular Resistance
- Must be <5 Wood units
- Vasodilator challenge may lower PVR
- If responsive, transplant possible
- If fixed, contraindication

**Lung Transplant Contraindications**

*Absolute:*
- Mechanical ventilation (relative, depends on center)
- Ventilator dependence
- Chest wall deformity limiting expansion
- BMI >35 (varies by center)
- Uncontrolled extrapulmonary infection

*Relative:*
- Previous chest surgery (increases complexity)
- Colonization with highly resistant organisms
- Osteoporosis (steroid-induced fracture risk)
- Severe gastroesophageal reflux (aspiration risk)

*Special Considerations:*
- Cystic fibrosis: Burkholderia cepacia complex - some centers consider absolute
- Pulmonary fibrosis: rapid progression prioritized
- Pulmonary hypertension: may need heart-lung

**Pancreas Transplant Contraindications**

*Absolute:*
- Severe cardiovascular disease
- Active substance abuse
- Inability to manage diabetes/medications

*Relative:*
- Obesity (BMI >30-35)
- Previous kidney transplant (may need SPK)
- Severe neuropathy (may not benefit)
- Laser-treated retinopathy

**Intestine Transplant Contraindications**

*Absolute:*
- Severe cardiovascular disease
- Fatal comorbidities
- Active malignancy
- Uncontrollable psychiatric disease

*Relative:*
- Portal hypertension, thrombosis of major vessels
- Motility disorders (may persist)
- Short gut with very short remnant (<5026)
- Liver dysfunction (may need combined liver-intestine)

**Psychosocial Evaluation**

*Components:*
- Mental health assessment
- Cognitive functioning
- Substance use history
- Social support system
- Understanding of transplant process
- History of adherence

*Red flags:*
- Non-adherence to previous treatments
- Multiple no-shows to appointments
- Family conflict interfering with care
- Inadequate housing
- Active psychotic symptoms

*Interventions:*
- Mental health treatment
- Substance abuse treatment
- Case management
- Family therapy
- Patient education programs`,
      keyTerms: [
        { term: 'PVR', definition: 'Pulmonary Vascular Resistance - measure of resistance to blood flow in lungs' },
        { term: 'Sobriety', definition: 'Not using alcohol or drugs; requirement for many transplant candidates with history of abuse' },
        { term: 'BMI', definition: 'Body Mass Index - measure of body fat based on height and weight' },
        { term: 'Extrahepatic', definition: 'Outside the liver; refers to cancer that has spread beyond the liver' },
        { term: 'Mechanical Ventilation', definition: 'Using a machine to breathe - often contraindicates lung transplant' }
      ],
      clinicalNotes: 'Heart: PVR must be <5 Wood units. Lung: BMI <35 preferred. Liver: 6-month sobriety required. Kidney: Vascular disease must be surgically correctable. MELD exceptions available for special conditions. Colonization with B. cepacia contraindicates lung transplant at many centers.',
    },
    4: {
      level: 4,
      summary: 'Complex candidacy decisions include older recipients, FSGS recurrence, portal vein thrombosis, and sensitized patients with high cPRA requiring desensitization.',
      explanation: `Complex transplant scenarios require nuanced decision-making that balances risks and benefits.

**Older Recipients (Age >65-70)**

*Physiologic vs Chronologic Age:*
- Chronologic age: number of years lived
- Physiologic age: functional capacity
- Frailty more important than number

*Frailty Assessment:*
- Fried criteria: unintentional weight loss, weakness, slow walking, exhaustion, low activity
- Short Physical Performance Battery (SPPB)
- Timed up-and-go test
- Grip strength measurement

*Outcomes in elderly:*
- Similar 1-3 year survival to younger recipients
- Higher complication rates
- Shorter graft survival (lifetime risk)
- Need to justify scarce organ use

*Evaluation considerations:*
- Comprehensive geriatric assessment
- Cardiovascular stress testing
- Cognitive screening
- Functional status assessment
- Social support evaluation

*Centers of excellence:*
- Some programs specialize in elderly recipients
- May have modified protocols
- Individualized decision-making

**Disease Recurrence**

*FSGS (Focal Segmental Glomerulosclerosis):*
- 30-50% recurrence risk after transplant
- Higher risk in children vs adults
- Native nephrectomy may reduce risk
- Plasmapheresis at time of surgery
- Rituximab may reduce recurrence

*Membranous Nephropathy:*
- 20-30% recurrence risk
- Usually milder than native disease
- May respond to treatment

*IgA Nephropathy:*
- 50-60% recurrence risk
- Usually slowly progressive
- Graft loss from rare

*Primary Biliary Cholangitis:*
- 20-30% recurrence in liver
- Rarely causes graft loss
- Can be treated medically

*Primary Sclerosing Cholangitis:*
- Recurrence common
- May affect biliary anastomosis
- Requires monitoring

**Vascular Complications**

*Portal Vein Thrombosis:*
- Previously absolute contraindication
- Now can be managed surgically
- Piggyback technique avoids thrombosis
- Requires surgical expertise

*Pulmonary Hypertension:*
- Fixed PVR >5 contraindicates heart transplant
- Vasodilator challenge may identify responsive PVR
- LVAD bridge may lower PVR
- Some centers accept higher PVR with caution

**Highly Sensitized Patients**

*cPRA (Calculated PRA) >99%:*
- Very difficult to find compatible donor
- Long wait times on standard list
- Special programs needed

*Desensitization protocols:*
- Plasmapheresis
- IVIG
- Rituximab
- Bortezomib

*Paired donation:*
- Finds compatible donor
- Increases access for sensitized
- May require chain participation

*Priority points:*
- Highly sensitized patients get priority
- CPRA >98% gets additional points
- Reduces wait time disparity

**Previous Transplant**

*Retransplantation Indications:*
- Primary graft non-function
- Chronic rejection
- Recurrent disease
- Technical complications

*Outcomes:*
- Higher mortality than primary transplant
- Lower graft survival
- More complications
- May still be best option

*Evaluation:*
- Why did first transplant fail?
- Was there non-adherence?
- Are there new contraindications?
- More careful psychosocial assessment needed

**Complex Medical Scenarios**

*Cardiovascular Disease:*
- Coronary artery disease
- May require revascularization first
- Stress testing indicated
- Coronary angiography for high-risk

*Pulmonary Disease:*
- COPD (contraindicates lung transplant, relative for others)
- Pulmonary fibrosis (lung transplant may help)
- Sleep apnea (must be treated)

*Liver Dysfunction in Kidney Transplant:*
- Combined liver-kidney (SLK) decision
- When to transplant liver with kidney?
- Kidney dysfunction in liver failure often reversible
- MELD exception points available

*Bone Disease:*
- Osteoporosis from steroids
- Fracture risk assessment
- DEXA screening
- Calcium and vitamin D optimization`,
      keyTerms: [
        { term: 'FSGS', definition: 'Focal Segmental Glomerulosclerosis - kidney disease that frequently recurs after transplant' },
        { term: 'Portal Vein Thrombosis', definition: 'Blood clot in the main vein going to the liver' },
        { term: 'Recurrence', definition: 'Return of the original disease in the transplanted organ' },
        { term: 'cPRA', definition: 'Calculated Panel Reactive Antibody - percentage of donors incompatible with recipient' },
        { term: 'Physiological Age', definition: 'Functional health status rather than chronological age' }
      ],
      clinicalNotes: 'FSGS recurrence 30-50%, plasmapheresis at surgery may help. Portal vein thrombosis managed with piggyback technique. PVR >5 Wood units contraindicates heart transplant. cPRA >98% gets priority points. Frailty predicts mortality better than age.',
    },
    5: {
      level: 5,
      summary: 'Emerging considerations include marijuana use, sarcopenic obesity, frailty assessment tools, and financial/insurance clearance in candidacy determination.',
      explanation: `Transplant candidacy determination continues to evolve with new understanding and changing social landscape.

**Controversial and Evolving Issues**

*Marijuana Use:*
- Increasing acceptance of medical and recreational use
- Not an absolute contraindication at most centers
- Requires assessment of cannabis use disorder
- Medical marijuana with legitimate indication acceptable
- Must distinguish therapeutic from problematic use

*Cannabis Use Disorder:*
- Problematic use causing impairment
- May contraindicate transplant
- Requires evaluation and treatment
- Abstinence periods vary by center

*Opioid Use:*
- Medicinal use for chronic pain
- Not absolute contraindication
- Distinguish dependence from addiction
- Pain management plans needed
- Urine drug screening

*Obesity Paradox:*
- "Obesity paradox" - higher BMI sometimes protective
- Sarcopenic obesity particularly challenging
- BMI alone may be poor criterion
- Body composition analysis more informative

*Sarcopenic Obesity:*
- Low muscle mass + high body fat
- Higher risk than simple obesity
- Poorer outcomes with transplant
- May benefit from pre-habilitation

**Frailty Assessment Tools**

*Fried Phenotype:*
1. Unintentional weight loss (>10 lbs in past year)
2. Exhaustion (self-reported)
3. Weakness (grip strength)
4. Slow walking speed
5. Low physical activity

*Clinical Frailty Scale:*
- 7-point scale
- 0-1 = robust, 2-3 = pre-frail, 4-7 = frail
- Predicts mortality, graft loss

*Short Physical Performance Battery (SPPB):*
- Balance, gait speed, chair stands
- Score 0-12
- Lower score = higher risk

*Timed Up-and-Go (TUG):*
- Measures mobility
- <10 seconds = normal, >20 seconds = impaired
- Predicts post-op complications

**Multimorbidity Assessment**

*Cumulative Illness Burden:*
- Count of chronic conditions
- Weighted by severity
- Higher burden = higher risk
- Can be measured (Charlson Comorbidity Index)

*Competing Risks:*
- Transplant vs. remaining on therapy
- Dialysis vs. transplant survival
- Medical management vs. surgical risk
- Individualized decision-making

**Sensitization Advances**

*Workup of highly sensitized:*
- Comprehensive HLA antibody identification
- Luminex single antigen beads
- Acceptable mismatch identification
- Virtual crossmatch

*Desensitization protocols:*
- IVIG + rituximab (most common)
- Bortezomib for resistant cases
- Tocilizumab emerging
- Often combined with plasmapheresis

*Outcomes:*
- Similar to non-sensitized when successful
- Expensive and resource-intensive
- Not available everywhere
- Higher rejection rates initially

**Ethical Allocation Questions**

*Age-based rationing:*
- Should older patients get organs?
- Younger patients get more life-years
- But organs not "wasted" on elderly
- Individual assessment, not age discrimination

*Social worth criteria:*
- Rejected as discriminatory
- Employment status not considered
- Social support IS considered
- No "worthiness" judgments

*Re-transplantation:*
- Is second chance fair?
- Scarce organs given twice to same person?
- Individualized assessment
- Outcomes still reasonable

*Alcohol-related liver disease:*
- Stigma and discrimination concerns
- 6-month rule may be arbitrary
- Exceptions for individual circumstances
- Psychosocial optimization important

**Financial Considerations**

*Insurance clearance:*
- Required before listing
- Medicare covers kidney (3 years)
- Medicaid varies by state
- Private insurance varies
- Financial advocates help navigate

*Out-of-pocket costs:*
- Medications: $2000-5000/month initially
- Co-pays for clinic visits
- Transportation costs
- Lost wages during recovery
- Assistance programs available

*Fundraising:*
- Some centers allow/encourage
- National Foundation for Transplants
- HelpHopeLive
- Must be planned appropriately

**Psychosocial Optimization**

*Interventions to address deficits:*
- Case management
- Social work involvement
- Family meetings
- Patient education programs
- Behavioral contracts

*Adherence promotion:*
- Electronic monitoring (pill bottles)
- Medication timing optimization
- Side effect management
- Regular follow-up scheduling
- Patient support groups

*Support systems:*
- Identifying caregivers
- Training family members
- Respite care for caregivers
- Community resources
- Transportation assistance

**Emerging Contraindications**

*Untreated celiac disease:*
- Malabsorption affects medications
- May cause gluten ataxia
- Should be treated and controlled

*Ehlers-Danlos syndrome:*
- Vascular fragility
- Surgical complications
- Tissue healing problems
- May be relative contraindication

*Autoimmune conditions:*
- Need individualized assessment
- Disease recurrence risk
- Medication interactions
- May need combined organ transplant`,
      keyTerms: [
        { term: 'Sarcopenic Obesity', definition: 'Having both low muscle mass and high body fat' },
        { term: 'Cannabis Use Disorder', definition: 'Problematic marijuana use causing impairment or distress' },
        { term: 'Simultaneous vs Sequential', definition: 'Whether to transplant both organs at once or at different times' },
        { term: 'Non-Adherence', definition: 'Failure to follow medical recommendations or take medications as prescribed' },
        { term: 'Re-List', definition: 'Being placed back on the waiting list after a previous transplant' }
      ],
      clinicalNotes: 'Frailty measured by Fried criteria or SPPB predicts mortality. cPRA >98% gets priority points. FSGS recurrence: plasmapheresis + rituximab may help. 6-month sobriety rule may be arbitrary; individualize. Sarcopenic obesity worse than simple obesity.',
    },
  },

  media: [
    {
      id: 'candidacy-evaluation',
      type: 'diagram',
      filename: 'transplant-candidacy-evaluation.svg',
      title: 'Transplant Candidacy Evaluation',
      description: 'Flowchart showing transplant candidacy evaluation process',
    },
  ],
  citations: [
    {
      id: 'transplant-candidacy-guidelines',
      type: 'article',
      title: 'Guidelines for the Referral and Management of Patients Eligible for Solid Organ Transplantation',
      source: 'American Journal of Transplantation',
    },
  ],
  crossReferences: [
    { targetId: 'transplant-overview', targetType: 'concept', relationship: 'parent', label: 'Transplant Overview' },
    { targetId: 'evaluation-process', targetType: 'concept', relationship: 'related', label: 'Evaluation Process' },
  ],
  tags: {
    systems: ['all'],
    topics: ['transplantation', 'ethics', 'psychosocial'],
    keywords: ['contraindications', 'candidacy', 'evaluation', 'MELD', 'PVR', 'frailty'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
