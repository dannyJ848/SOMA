/**
 * Dialysis Preparation - Kidney Disease Management
 */

import { EducationalContent } from '../../types';

export const DIALYSIS_PREPARATION: EducationalContent = {
  id: 'kidney-disease-dialysis-preparation',
  type: 'concept',
  name: 'Preparing for Dialysis',
  alternateNames: ['Kidney replacement therapy', 'Dialysis planning', 'End-stage kidney disease options'],

  levels: {
    1: {
      level: 1,
      summary: 'When kidneys can no longer do their job, dialysis or a kidney transplant can keep you alive and healthy. Planning ahead gives you the best options.',
      explanation: `**What Is Dialysis?**
Dialysis does the work your kidneys can no longer do - cleaning your blood and removing extra fluid.

**Two Types of Dialysis:**

*Hemodialysis (HD):*
- Blood is cleaned by a machine
- Usually done 3 times per week for 3-4 hours
- Done at a dialysis center or at home

*Peritoneal Dialysis (PD):*
- Uses the lining of your belly to clean blood
- Done every day at home
- More flexibility in schedule

**When to Start Planning:**
- Usually when eGFR is around 15-20
- Gives time to prepare access (fistula or catheter)
- Allows you to learn about options

**Vascular Access for Hemodialysis:**
- Fistula: Surgery connects artery to vein (best option)
- Graft: Tube connecting artery to vein
- Catheter: Temporary tube in neck or chest

**Planning Starts Early:**
- Meet with the kidney team
- Learn about all options
- Start access surgery 6+ months before needed
- Consider transplant evaluation

**Questions to Ask:**
- What are my options?
- What fits my lifestyle?
- When should I start planning?
- Am I a candidate for transplant?`,
      keyTerms: [
        { term: 'hemodialysis', definition: 'Dialysis using a machine to filter blood through a special filter' },
        { term: 'peritoneal dialysis', definition: 'Dialysis using the lining of your belly to filter blood' },
        { term: 'fistula', definition: 'Surgery creating an access point in your arm for hemodialysis' },
        { term: 'transplant', definition: 'Surgery to put a healthy kidney from a donor into your body' },
      ],
      analogies: ['Dialysis is like an external kidney - it does the filtering job when your kidneys cannot.'],
      examples: ['Maria started planning for dialysis when her eGFR was 18. She had fistula surgery, which gave it time to mature. When she needed dialysis 8 months later, her fistula was ready.'],
    },
    2: {
      level: 2,
      summary: 'Timely dialysis preparation includes education, modality selection, vascular or peritoneal access creation, and transplant evaluation to optimize outcomes when kidney replacement therapy is needed.',
      explanation: `**Timing of Preparation:**

*KDIGO Recommendations:*
| eGFR | Actions |
|------|---------|
| <30 | Education about KRT options |
| ~20 | Access planning |
| ~15 | Access creation if HD planned |
| <10-15 | Dialysis initiation (symptom-based) |

**Modality Options:**

| Modality | Frequency | Location | Independence |
|----------|-----------|----------|--------------|
| In-center HD | 3x/week | Facility | Less |
| Home HD | Daily or 3x/week | Home | More |
| CAPD | 4x/day | Home | More |
| APD | Nightly | Home | More |

**Vascular Access:**

*Hierarchy of Preference:*
1. **Arteriovenous fistula (AVF)**: Best outcomes, needs maturation time
2. **Arteriovenous graft (AVG)**: Second choice, faster maturation
3. **Central venous catheter**: Last resort, highest infection risk

*Timing:*
- AVF: Create 6+ months before anticipated need
- AVG: Create 3-6 weeks before
- Catheter: When urgent start needed

**Peritoneal Dialysis:**
- Catheter placed 2+ weeks before start
- Training required (1-2 weeks)
- Good for patients wanting independence

**Transplant:**
- Evaluate early (eGFR <20)
- Living donor preferred
- Can be done pre-dialysis (preemptive)`,
      keyTerms: [
        { term: 'CAPD', definition: 'Continuous ambulatory peritoneal dialysis; manual exchanges throughout day' },
        { term: 'APD', definition: 'Automated peritoneal dialysis; machine does exchanges overnight' },
        { term: 'preemptive transplant', definition: 'Kidney transplant before needing dialysis' },
        { term: 'maturation', definition: 'Time for fistula to develop before it can be used' },
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive kidney replacement therapy preparation integrates patient-centered modality selection, optimal access strategies, and transplant evaluation within a multidisciplinary care framework.',
      explanation: `**Shared Decision-Making:**

*Factors in Modality Choice:*
\`\`\`
Patient Factors:
- Lifestyle preferences
- Employment/travel
- Home environment
- Physical/cognitive abilities
- Caregiver support

Clinical Factors:
- Comorbidities
- Residual renal function
- Vascular access options
- Abdominal surgery history
- Cardiac status
\`\`\`

**Evidence on Modality:**

*Outcomes Comparison:*
| Outcome | HD | PD | Notes |
|---------|----|----|-------|
| Survival (early) | Similar | May favor PD | First 2 years |
| Survival (long-term) | Similar | May favor HD | After 2-3 years |
| Quality of life | Varies | May favor | Patient preference matters |
| Transplant rate | Lower | Higher | PD may preserve options |

**Vascular Access Planning:**

*AVF Maturation:*
- Adequate blood flow (>600 mL/min)
- Adequate diameter (>6 mm)
- Depth accessible for cannulation
- Time: 2-6 months typically

*Access Complications:*
| Type | Complication Rate |
|------|-------------------|
| AVF | Lowest |
| AVG | Intermediate |
| CVC | Highest (infection) |

**Conservative Management:**

*Option for Some Patients:*
- Elderly with multiple comorbidities
- Limited life expectancy
- Patient preference
- Focus on symptom management and QOL
- Requires informed discussion

**Transplant Evaluation:**

*Workup Components:*
- Cardiac evaluation
- Malignancy screening
- Infectious disease testing
- Psychosocial assessment
- Immunological evaluation

*Living Donor:*
- Best outcomes
- Can avoid dialysis entirely
- Paired exchange programs available`,
      keyTerms: [
        { term: 'conservative management', definition: 'Managing ESKD without dialysis, focusing on comfort and quality of life' },
        { term: 'paired kidney exchange', definition: 'Program allowing incompatible donor-recipient pairs to exchange kidneys' },
        { term: 'fistula first', definition: 'Initiative promoting AVF as preferred access' },
      ],
      clinicalNotes: 'Modality choice should be patient-centered after education about all options. AVF remains preferred access but requires planning. Conservative management is valid option for selected patients. Preemptive transplant offers best outcomes when possible.',
    },
    4: {
      level: 4,
      summary: 'Advanced KRT preparation integrates precision prognostication, optimized access strategies, and patient-centered decision frameworks to maximize outcomes and quality of life.',
      explanation: `**Precision Prognostication:**

*Kidney Failure Risk Equation:*
\`\`\`
KFRE Variables: Age, sex, eGFR, ACR
Output: 2-year and 5-year probability of kidney failure

Clinical Application:
- 2-year risk >10%: Intensify preparation
- 5-year risk >10%: Begin education
- Guides timing of access, transplant eval
\`\`\`

**Optimized Access Strategies:**

*Preoperative Assessment:*
- Vein mapping (ultrasound)
- Arterial assessment
- Cardiac function
- Dominant arm consideration

*Maturation Enhancement:*
- Hand exercises
- Monitoring protocols
- Salvage procedures for non-maturation

**Incremental Dialysis:**

*Concept:*
- Start with less than full-dose dialysis
- Preserve residual kidney function
- Gradual intensification as RKF declines

*Evidence:*
- May preserve RKF longer
- Patient satisfaction often higher
- Outcomes appear non-inferior

**Decision Aids:**

*Validated Tools:*
- Option Grids
- Question prompt lists
- Visual aids
- Online resources (NKF, AAKP)

**Advance Care Planning:**

*Components:*
- Goals of care discussion
- Preferences if dialysis fails
- Surrogate decision-maker
- Documentation

*Timing:*
- Should begin during CKD education
- Revisit periodically
- Document in medical record`,
      keyTerms: [
        { term: 'residual kidney function', definition: 'Remaining native kidney function in dialysis patients' },
        { term: 'incremental dialysis', definition: 'Starting dialysis at less than standard dose based on residual function' },
        { term: 'vein mapping', definition: 'Ultrasound assessment of arm veins for access planning' },
      ],
      clinicalNotes: 'KFRE helps personalize timing of preparation. Incremental dialysis is gaining evidence support. Preserve residual kidney function - it matters for outcomes. Advance care planning is essential component of preparation.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art KRT preparation leverages precision prediction, patient-centered innovation, and systems approaches to optimize individualized kidney replacement therapy decisions.',
      explanation: `**Precision KRT Planning:**

*Integrated Assessment:*
\`\`\`
Clinical Trajectory
+ Patient Preferences
+ Prognostic Models
+ Social Support Assessment
+ Frailty Evaluation
         ↓
Personalized KRT Plan
         ↓
Modality Match
         ↓
Optimal Timing
\`\`\`

**Innovation in Access:**

*Emerging Approaches:*
| Innovation | Status |
|------------|--------|
| Endovascular AVF creation | FDA approved |
| Bioengineered vessels | Research |
| Novel catheter designs | Available |
| Access monitoring devices | Research |

**Home Therapies Expansion:**

*Factors Driving Home Dialysis:*
- Patient preference
- COVID-19 impact
- Technology improvements
- Outcome data
- Cost considerations

**Bioartificial Kidney:**

*Research Directions:*
- Implantable device
- Combines filtration + cell-based reabsorption
- Potential to eliminate dialysis
- Early development stage

**Learning Health System:**

*Continuous Improvement:*
- Registry data (USRDS, CMS)
- Quality improvement programs
- Comparative effectiveness research
- Implementation science

**Future Directions:**

*Research Priorities:*
- Wearable artificial kidney
- Xenotransplantation
- Kidney regeneration
- Personalized dialysis
- Expanded donor pool`,
      keyTerms: [
        { term: 'endovascular AVF', definition: 'Minimally invasive fistula creation using catheter-based technique' },
        { term: 'bioartificial kidney', definition: 'Implantable device combining synthetic filtration with living kidney cells' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs from animals to humans' },
      ],
      clinicalNotes: 'Endovascular AVF creation expands options for patients. Home dialysis expansion is major trend. Bioartificial kidney and xenotransplantation are active research areas. Learning health systems enable continuous quality improvement.',
    },
  },

  media: [],
  citations: [{ id: 'kdigo-ckd', type: 'article', title: 'KDIGO CKD Guidelines', source: 'Kidney International' }],
  crossReferences: [{ targetId: 'kidney-disease-ckd-stages', targetType: 'topic', relationship: 'related', label: 'CKD Stages' }],
  tags: { systems: ['renal'], topics: ['CKD', 'dialysis'], keywords: ['dialysis preparation', 'kidney transplant', 'vascular access', 'ESKD'], clinicalRelevance: 'critical' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
