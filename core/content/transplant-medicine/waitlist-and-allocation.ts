/**
 * Waitlist and Allocation - Educational Content
 *
 * Education on organ allocation systems, UNOS/OPTN processes,
 * waitlist management, and organ matching criteria.
 */

import { EducationalContent } from '../types';

export const waitlistAndAllocation: EducationalContent = {
  id: 'process-waitlist-allocation',
  type: 'process',
  name: 'Waitlist and Allocation',
  alternateNames: ['Organ Waiting List', 'UNOS Allocation', 'Organ Matching'],

  levels: {
    1: {
      level: 1,
      summary: 'When someone needs an organ transplant, they go on a waiting list until a matching organ becomes available.',
      explanation: `After the doctors say someone can have a transplant, that person goes on a waiting list. This is a list of all the people waiting for organs.

**Why Is There a Waiting List?**
- More people need organs than there are organs available
- Finding the right match takes time
- The system makes sure organs go to the people who need them most

**How Does Matching Work?**
When an organ becomes available, a computer system looks for:
- Blood type match
- Body size match
- How sick the person is
- How long they have been waiting

**What Happens While Waiting?**
- Keep going to doctor appointments
- Stay as healthy as possible
- Keep the transplant team updated on any changes
- Have a phone ready to answer at any time

**Getting the Call**
When a matching organ is found:
- The hospital will call right away
- The person needs to get to the hospital quickly
- More tests are done to make sure the organ is a good match
- If everything looks good, the surgery happens

**How Long Is the Wait?**
It depends on many things:
- Which organ is needed
- Blood type
- How sick the person is
- Where they live`,
      keyTerms: [
        { term: 'waiting list', definition: 'A list of all people approved for transplant who are waiting for an organ' },
        { term: 'matching', definition: 'Finding an organ that is a good fit for a specific person' },
        { term: 'blood type', definition: 'A way to group blood; organs must match blood types' },
      ],
      analogies: [
        'The waiting list is like waiting in line for a bus that comes at unknown times - you need to be ready when your bus arrives.',
      ],
      examples: [
        'When an organ becomes available, the computer checks who on the list is the best match and calls them first.',
      ],
    },
    2: {
      level: 2,
      summary: 'The organ allocation system uses medical criteria including blood type, tissue matching, medical urgency, and wait time to fairly distribute organs to those who need them most.',
      explanation: `**The National Organ Allocation System**

In the United States, UNOS (United Network for Organ Sharing) manages organ allocation. Every person waiting for an organ is registered in a national computer system.

**How Organs Are Matched**

**Medical Compatibility**
1. **Blood Type** - Must be compatible (similar to blood transfusion rules)
2. **Size Matching** - Especially important for heart and lungs
3. **Tissue Typing (HLA)** - Important for kidney transplants

**Priority Factors**
1. **Medical Urgency** - How sick is the patient?
2. **Wait Time** - How long have they been waiting?
3. **Distance** - How far is the organ from the recipient?
4. **Pediatric Status** - Children may receive priority

**Organ-Specific Allocation**

| Organ | Primary Priority Factor |
|-------|------------------------|
| Kidney | Wait time, HLA match |
| Liver | MELD score (illness severity) |
| Heart | Medical status (urgency) |
| Lung | Lung allocation score |

**Wait Times**
- Kidney: 3-5 years average (longer in some areas)
- Liver: Varies by MELD score
- Heart: 6 months to 2 years
- Lung: 1-2 years

**Responsibilities While Waiting**
- Attend all medical appointments
- Maintain contact information with transplant center
- Report health changes immediately
- Avoid behaviors that could remove you from the list
- Have a plan for rapid travel to the hospital`,
      keyTerms: [
        { term: 'UNOS', definition: 'United Network for Organ Sharing - the organization managing the U.S. organ transplant system' },
        { term: 'MELD score', definition: 'A number (6-40) that shows how sick someone with liver disease is' },
        { term: 'allocation', definition: 'The system for deciding who receives available organs' },
        { term: 'HLA match', definition: 'How similar the tissue types are between donor and recipient' },
      ],
    },
    3: {
      level: 3,
      summary: 'Organ allocation operates through UNOS/OPTN policies using evidence-based algorithms that balance medical utility, justice, and practical considerations to optimize organ distribution.',
      explanation: `## The Allocation System Framework

**OPTN (Organ Procurement and Transplantation Network)**
- Federally mandated system under NOTA (National Organ Transplant Act)
- UNOS operates OPTN under contract with HRSA
- Establishes policies for organ distribution
- Maintains the national waiting list

**Allocation Policy Development**
- Committee-based policy development
- Public comment periods
- Board approval required
- Implementation with monitoring

## Organ-Specific Allocation

**Kidney Allocation System (KAS)**

Point-Based System:
- Wait time (1 point/year dialysis, fraction for pre-dialysis listing)
- Prior living donor status
- Pediatric priority
- cPRA sliding scale (for sensitized patients)
- Local/regional priority

Longevity Matching:
- KDPI: Kidney Donor Profile Index (donor quality)
- EPTS: Estimated Post-Transplant Survival (recipient expected survival)
- Top 20% KDPI kidneys to top 20% EPTS recipients

**Liver Allocation (MELD/PELD)**

MELD Score Components:
- Creatinine
- Bilirubin
- INR
- Sodium (MELD-Na)
- Sex (MELD 3.0)

MELD Exception Points:
- HCC within Milan criteria
- Hepatopulmonary syndrome
- Portopulmonary hypertension
- Cholangiocarcinoma with neoadjuvant therapy

**Heart Allocation**

Status-Based System (1-6):
- Status 1: MCS with life-threatening complications
- Status 2: MCS without complications, IABP, high-dose inotropes
- Status 3: Stable MCS, moderate inotropes
- Status 4: Oral medications, listed but stable

**Lung Allocation Score (LAS)**
- Predicts waitlist urgency (mortality risk without transplant)
- Predicts post-transplant survival
- Composite score balancing both factors
- Range 0-100; higher = higher priority

## Geographic Distribution

**Current Framework**
- Concentric circles from donor hospital
- 250 nm and 500 nm thresholds
- Balances local access with broader distribution

**Acuity Circles**
- Higher acuity patients access broader geography first
- Reduces disparities in access

## Waitlist Management

**Status Updates**
- Regular reassessment required
- Status changes with clinical changes
- Inactive status options (temporary medical issues)

**Multiple Listing**
- Patients can list at multiple centers
- Must meet each center's criteria
- Travel and logistics considerations`,
      keyTerms: [
        { term: 'OPTN', definition: 'Organ Procurement and Transplantation Network - the national system for organ allocation' },
        { term: 'KDPI', definition: 'Kidney Donor Profile Index - score comparing donor kidney quality to reference population' },
        { term: 'LAS', definition: 'Lung Allocation Score - composite score balancing transplant urgency and expected benefit' },
        { term: 'acuity circles', definition: 'Geographic distribution system giving sicker patients access to broader geography' },
      ],
      clinicalNotes: 'Patients should be counseled on realistic wait time expectations based on their blood type, sensitization status, and geographic area. Consideration of multiple listing or center transfer may benefit some patients.',
    },
    4: {
      level: 4,
      summary: 'Allocation policy reflects ongoing tension between utilitarian maximization of aggregate outcomes, justice-based equity considerations, and practical constraints of organ preservation and logistics.',
      explanation: `## Policy Framework and Ethics

**Ethical Principles in Allocation**

**Utility**
- Maximize aggregate benefit (life-years, quality-adjusted life-years)
- Optimize organ utilization (minimize discard)
- Efficient geographic distribution

**Justice**
- Equal access regardless of socioeconomic status
- Address disparities in listing, transplant rates
- Geographic equity

**Respect for Persons**
- Informed consent for listing decisions
- Patient autonomy in organ acceptance
- Transparent policies

## Advanced Allocation Mechanics

**Kidney Allocation Details**

cPRA Sliding Scale:
| cPRA | Additional Points |
|------|------------------|
| 99-100% | 202 points |
| 98% | 50.09 points |
| 85-97% | Sliding scale |
| <85% | 0 points |

Pediatric Priority:
- Candidates <18 receive additional priority
- Donation after pediatric death prioritized to pediatric recipients

Blood Type Considerations:
- Blood type O patients disadvantaged (can only receive O)
- Blood type B patients historically disadvantaged
- Policy adjustments for B patients (A2 to B)

**Liver Allocation Complexities**

MELD Exception Standardization:
- National Liver Review Board adjudicates exceptions
- Standard exception pathways
- Non-standard exceptions require NLRB approval

Status 1A Criteria (Acute Liver Failure):
- Life expectancy <7 days without transplant
- No prior liver disease
- Specific diagnostic criteria

**Heart Allocation Nuances**

Status Justification Forms:
- Clinical criteria must be documented
- Regional review board oversight
- Temporary vs. permanent status

MCS Considerations:
- Type of device matters for status
- Duration on device affects priority
- Complication definitions specified

## Quality and Outcomes Monitoring

**SRTR (Scientific Registry of Transplant Recipients)**
- Outcomes reporting for all U.S. transplant programs
- Risk-adjusted survival metrics
- Program comparison reports

**Performance Standards**
- Minimum acceptable outcomes
- Programs below threshold face review
- CMS oversight and potential decertification

## Policy Evolution

**Continuous Distribution Framework**
- Moving from classification systems to continuous scoring
- Composite allocation scores
- Reduces hard boundaries
- Kidney and pancreas implemented first

**Components of Continuous Distribution**
1. Medical urgency/necessity
2. Post-transplant outcomes
3. Candidate biology/access
4. Efficiency (proximity, logistics)
5. Patient access (waiting time, prior living donor)`,
      keyTerms: [
        { term: 'continuous distribution', definition: 'Allocation framework using composite scores rather than categorical status systems' },
        { term: 'SRTR', definition: 'Scientific Registry of Transplant Recipients - national database tracking transplant outcomes' },
        { term: 'National Liver Review Board', definition: 'Body adjudicating liver MELD exception requests nationally' },
        { term: 'cPRA sliding scale', definition: 'Allocation points system giving increasing priority to highly sensitized patients' },
      ],
      clinicalNotes: 'Transplant programs should monitor their SRTR outcomes reports and implement quality improvement measures. Programs must maintain outcomes above minimum thresholds for continued Medicare certification.',
    },
    5: {
      level: 5,
      summary: 'Contemporary allocation research examines optimization algorithms, simulation modeling of policy impacts, behavioral economics of organ offer acceptance, and system-level interventions to reduce discard rates and address persistent disparities.',
      explanation: `## Allocation Optimization Research

**Mathematical Modeling Approaches**

Simulation Studies:
- KPSAM (Kidney-Pancreas Simulation Allocation Model)
- LSAM (Liver Simulation Allocation Model)
- Monte Carlo simulations of policy impacts
- Used for policy development and impact assessment

Optimization Algorithms:
- Linear programming for allocation efficiency
- Machine learning for outcome prediction
- Multi-objective optimization (utility + equity)

**Organ Offer Acceptance Behavior**

Behavioral Economics Insights:
- High organ offer decline rates
- Risk aversion in decision-making
- Order effects (first offers more likely accepted)
- Anchoring on wait time

KDPI Effects:
- Higher KDPI associated with higher decline rates
- Many declined organs successfully transplanted elsewhere
- Potential survival benefit of earlier transplant with higher KDPI

Interventions:
- Offer filtering algorithms
- Decision support tools
- Behavioral nudges
- Default acceptance frameworks

## Reducing Organ Discard

**Discard Rates by Organ**
- Kidney: ~20% of recovered kidneys discarded
- Liver: ~10% discard rate
- Heart: Low discard, high non-recovery
- Lung: High non-utilization rate

**Contributing Factors**
- Organ quality concerns
- Recipient complications at time of offer
- Logistics/timing issues
- Risk-averse culture

**Interventions**
- Biopsy standardization
- Machine perfusion for assessment
- Expedited placement pathways
- Backup recipient programs

## Equity and Disparities Research

**Documented Disparities**

Racial/Ethnic Disparities:
- Black patients: Lower transplant rates, longer wait times
- Hispanic patients: Lower living donation rates
- Asian patients: Longer wait times for kidney

Socioeconomic Factors:
- Insurance type affects listing probability
- Geographic variation in access
- Neighborhood effects on outcomes

**Root Cause Analysis**
- Differential referral patterns
- Evaluation completion rates
- Living donor pool differences
- Post-transplant outcome disparities

**Policy Interventions**
- Removal of race from eGFR calculation
- Geographic distribution changes
- Kidney paired donation access expansion
- Community navigation programs

## Future Directions

**Technology Integration**
- Real-time allocation optimization
- Predictive analytics for organ quality
- Telemedicine for expedited evaluation
- Blockchain for donation registry

**Xenotransplantation Impact**
- Potential to eliminate waitlist
- Allocation policy implications unclear
- Transition period considerations

**Bioengineered Organs**
- Decellularized scaffolds
- 3D bioprinting
- Organoid development
- Long-term regulatory framework

**International Perspectives**
- Eurotransplant: Multinational collaboration
- Opt-out donation systems
- Living donation regulations vary
- Cross-border allocation protocols`,
      keyTerms: [
        { term: 'KPSAM', definition: 'Kidney-Pancreas Simulation Allocation Model - tool for simulating allocation policy impacts' },
        { term: 'organ offer acceptance', definition: 'Decision by transplant teams to accept or decline offered organs for their patients' },
        { term: 'expedited placement', definition: 'Pathways for rapid allocation of organs at high risk for discard' },
        { term: 'opt-out donation', definition: 'Presumed consent system where organs are donated unless explicitly declined' },
      ],
      clinicalNotes: `System improvement priorities:
1. Reduce kidney discard through machine perfusion and expedited pathways
2. Address behavioral barriers to organ acceptance
3. Implement disparity reduction interventions with outcome monitoring
4. Prepare for xenotransplantation and bioengineered organ integration`,
    },
  },

  media: [
    {
      id: 'allocation-flowchart',
      type: 'diagram',
      filename: 'organ-allocation-flowchart.svg',
      title: 'Organ Allocation Process Flowchart',
      description: 'Visual guide to how organs are allocated from recovery to transplantation',
    },
  ],

  citations: [
    {
      id: 'optn-policy',
      type: 'website',
      title: 'OPTN Policies',
      source: 'UNOS/OPTN',
      url: 'https://optn.transplant.hrsa.gov/policies-bylaws/policies/',
    },
    {
      id: 'srtr-reports',
      type: 'website',
      title: 'Scientific Registry of Transplant Recipients',
      source: 'SRTR',
      url: 'https://www.srtr.org',
    },
  ],

  crossReferences: [
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'parent', label: 'Transplant Basics' },
    { targetId: 'process-transplant-evaluation', targetType: 'process', relationship: 'related', label: 'Transplant Evaluation' },
    { targetId: 'process-living-donation', targetType: 'process', relationship: 'related', label: 'Living Donation' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['organ allocation', 'waiting list', 'UNOS', 'OPTN'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default waitlistAndAllocation;
