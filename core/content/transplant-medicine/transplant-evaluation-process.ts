/**
 * Transplant Evaluation Process - Educational Content
 *
 * Comprehensive education on the medical, psychosocial, and financial
 * evaluation process for transplant candidates.
 */

import { EducationalContent } from '../types';

export const transplantEvaluationProcess: EducationalContent = {
  id: 'process-transplant-evaluation',
  type: 'process',
  name: 'Transplant Evaluation Process',
  alternateNames: ['Transplant Workup', 'Pre-Transplant Evaluation', 'Transplant Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'Before getting a transplant, doctors need to make sure the person is healthy enough for the surgery and will take good care of their new organ.',
      explanation: `Before someone can get a new organ, doctors need to learn a lot about them. This is called a transplant evaluation.

**Why Do Doctors Need to Check So Many Things?**
- To make sure the surgery will be safe
- To find any health problems that need to be fixed first
- To make sure the person can take care of their new organ

**What Happens During the Evaluation?**

**Medical Tests**
- Blood tests to check overall health
- Heart tests to make sure the heart is strong
- Imaging tests (like X-rays) to look inside the body
- Tests to see how well other organs are working

**Meeting with Different Experts**
- Doctors who specialize in transplants
- Nurses who teach about transplant care
- Social workers who help with practical concerns
- Pharmacists who explain the medicines

**Making Sure You Have Support**
- Having family or friends to help after surgery
- Being able to get to appointments
- Having a plan for paying for medicines

**What Happens After Evaluation?**
The transplant team meets to discuss everything they learned. They will let the person know if they are approved for transplant and can go on the waiting list.`,
      keyTerms: [
        { term: 'evaluation', definition: 'The process of checking if someone is ready and healthy enough for a transplant' },
        { term: 'transplant team', definition: 'A group of doctors, nurses, and other helpers who work together to care for transplant patients' },
        { term: 'waiting list', definition: 'A list of people approved for transplant who are waiting for an organ' },
      ],
      analogies: [
        'The evaluation is like a big check-up to make sure everything is ready, similar to how you would inspect a house before moving in.',
      ],
      examples: [
        'During evaluation, Mary had blood tests, a heart ultrasound, and met with a social worker to discuss her support at home.',
      ],
    },
    2: {
      level: 2,
      summary: 'The transplant evaluation is a comprehensive assessment including medical testing, psychosocial evaluation, and financial planning to determine candidacy and optimize outcomes.',
      explanation: `**Purpose of Transplant Evaluation**

The evaluation determines whether transplant is:
- Medically necessary
- Likely to be successful
- The best treatment option

**Components of the Evaluation**

**Medical Assessment**
1. **Organ-specific testing**
   - Confirms the need for transplant
   - Rules out other treatment options

2. **Cardiac evaluation**
   - Stress test or cardiac catheterization
   - Ensures heart can handle surgery

3. **Cancer screening**
   - Colonoscopy, mammogram, skin check
   - Most cancers must be treated and in remission

4. **Infection screening**
   - HIV, hepatitis B and C
   - Tuberculosis testing
   - Dental evaluation

5. **Laboratory work**
   - Blood type
   - Tissue typing (HLA)
   - Antibody screening

**Psychosocial Evaluation**
- Mental health assessment
- Substance use history
- Support system evaluation
- Ability to follow medical instructions

**Financial Assessment**
- Insurance coverage review
- Medication cost planning
- Transportation and housing needs

**The Decision-Making Process**

After all evaluations are complete:
1. The transplant selection committee reviews the case
2. Team decides: approve, decline, or defer with conditions
3. Patient is notified of the decision
4. If approved, patient is listed for transplant`,
      keyTerms: [
        { term: 'tissue typing', definition: 'Testing to identify HLA antigens for matching donor and recipient' },
        { term: 'selection committee', definition: 'Group of transplant team members who review cases and make listing decisions' },
        { term: 'psychosocial evaluation', definition: 'Assessment of mental health, social support, and ability to manage transplant care' },
      ],
      analogies: [
        'Think of the evaluation like applying for a complex job - they check your qualifications, interview you, verify your references, and assess if you are a good fit.',
      ],
    },
    3: {
      level: 3,
      summary: 'Transplant candidacy evaluation involves systematic assessment of medical suitability, immunological risk stratification, psychosocial preparedness, and financial resources to optimize recipient selection and outcomes.',
      explanation: `## Medical Evaluation Components

**Organ-Specific Assessment**

**Kidney Transplant**
- Cause of kidney failure
- Dialysis history and vascular access
- Urologic evaluation
- Prior transplant history

**Liver Transplant**
- Etiology of liver disease
- MELD/PELD score calculation
- Hepatocellular carcinoma screening
- Portal hypertension assessment

**Heart Transplant**
- Heart failure etiology and course
- Right heart catheterization
- Pulmonary vascular resistance
- Peak VO2 testing

**Cardiac Risk Assessment**

| Patient Group | Recommended Testing |
|---------------|---------------------|
| Low risk | Stress echocardiogram |
| Diabetes or age >50 | Cardiac catheterization |
| Known CAD | Revascularization evaluation |

**Malignancy Screening**
- Age and sex-appropriate cancer screening
- Dermatology evaluation (skin cancer risk post-transplant)
- Disease-free interval requirements (typically 2-5 years depending on cancer type)

**Infection Evaluation**
- Serologies: CMV, EBV, HSV, VZV, HIV, Hepatitis panel
- TB testing (QuantiFERON or PPD)
- Dental clearance
- Urinalysis/culture

## Immunological Assessment

**HLA Typing**
- Class I: HLA-A, B, C
- Class II: HLA-DR, DQ, DP
- Molecular typing increasingly standard

**Antibody Screening**
- Panel reactive antibody (PRA/cPRA)
- HLA-specific antibody identification
- Virtual crossmatch capability

**Sensitization Considerations**
- Prior transplants
- Pregnancies
- Blood transfusions
- Mechanical circulatory support

## Psychosocial Evaluation

**Assessment Areas**
- Psychiatric history and stability
- Cognitive function
- Health literacy
- Adherence history
- Social support network
- Housing stability
- Transportation access
- Financial resources

**Substance Use Evaluation**
- Alcohol: Most centers require 6-month abstinence
- Tobacco: Smoking cessation required
- Illicit drugs: Treatment and abstinence documentation
- Cannabis: Policies vary by center

## Financial Assessment
- Insurance authorization
- Medication coverage (immunosuppression is lifelong)
- Gap coverage needs
- Patient financial assistance programs`,
      keyTerms: [
        { term: 'cPRA', definition: 'Calculated Panel Reactive Antibody - estimated percentage of donors to whom recipient has antibodies' },
        { term: 'virtual crossmatch', definition: 'Computer-based prediction of crossmatch result using donor HLA and recipient antibody data' },
        { term: 'MELD score', definition: 'Model for End-Stage Liver Disease - predicts 90-day mortality and determines liver allocation priority' },
        { term: 'peak VO2', definition: 'Maximum oxygen consumption during exercise, used to assess heart transplant candidacy' },
      ],
      clinicalNotes: 'Referral for transplant evaluation should occur early in disease progression. KDIGO recommends kidney transplant referral when GFR <30 mL/min or when renal replacement therapy is anticipated within 1 year.',
    },
    4: {
      level: 4,
      summary: 'Transplant evaluation requires integration of objective medical criteria, risk stratification models, and multidisciplinary assessment to balance individual candidacy against system-level considerations of organ utilization and equity.',
      explanation: `## Risk Stratification Models

**Kidney Transplant**
- **EPTS (Estimated Post-Transplant Survival)**: Predicts recipient survival
  - Factors: Age, diabetes duration, prior transplant, dialysis time
  - Used for longevity matching with KDPI

- **KDRI/KDPI (Kidney Donor Risk Index/Profile Index)**
  - Assesses donor kidney quality
  - KDPI 0-20%: Highest quality; KDPI >85%: Higher risk

**Liver Transplant**
- **MELD 3.0**: Updated model including sex
  - Creatinine, bilirubin, INR, sodium, sex
- **MELD exception points**: For conditions not reflected in lab values
  - HCC within Milan criteria
  - Hepatopulmonary syndrome
  - Primary sclerosing cholangitis with cholangiocarcinoma

**Heart Transplant**
- **IMPACT score**: Predicts post-transplant survival
- **INTERMACS profiles**: Classify pre-transplant status

## Advanced Immunological Considerations

**Highly Sensitized Patients (cPRA >85%)**
- Require more detailed antibody characterization
- Mean fluorescence intensity (MFI) assessment
- Complement-binding antibody analysis
- Acceptable mismatch programs

**Desensitization Protocols**
- Plasmapheresis/immunoadsorption
- IVIG (intravenous immunoglobulin)
- Rituximab (anti-CD20)
- Bortezomib (proteasome inhibitor)
- Efficacy varies; required for living donor with DSA

## Specific Contraindication Considerations

**Absolute Contraindications**
- Active malignancy (most types)
- Uncontrolled systemic infection
- Irreversible multi-organ failure
- Active substance abuse
- Documented ongoing non-adherence

**Relative Contraindications (Context-Dependent)**
- Advanced age
- Obesity (BMI thresholds vary by organ)
- Peripheral vascular disease
- Chronic infections (HIV, hepatitis now manageable)
- Prior malignancy (disease-free intervals)

## Psychosocial Assessment Tools

**Standardized Instruments**
- Stanford Integrated Psychosocial Assessment for Transplant (SIPAT)
- Psychosocial Assessment of Candidates for Transplant (PACT)

**SIPAT Domains**
1. Patient readiness level
2. Social support
3. Psychological stability
4. Lifestyle and substance use

## Ethical Considerations in Listing

**Justice and Utility Balance**
- Individual benefit vs. population outcomes
- Repeated transplant considerations
- Resource allocation transparency

**Committee Decision-Making**
- Multidisciplinary input
- Consistent criteria application
- Documentation of rationale
- Appeals process availability`,
      keyTerms: [
        { term: 'EPTS', definition: 'Estimated Post-Transplant Survival - score predicting recipient longevity after kidney transplant' },
        { term: 'longevity matching', definition: 'Pairing higher-quality donor organs with recipients expected to benefit longest' },
        { term: 'desensitization', definition: 'Protocols to reduce recipient antibodies enabling transplant across immunologic barriers' },
        { term: 'SIPAT', definition: 'Stanford Integrated Psychosocial Assessment for Transplantation - validated tool for psychosocial candidacy evaluation' },
      ],
      clinicalNotes: 'Selection committee decisions should be documented with clear medical and psychosocial rationale. Centers should have written policies for contraindications and reconsideration processes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary transplant evaluation integrates advanced immunological risk assessment, frailty metrics, machine learning outcome prediction, and evolving ethical frameworks addressing equity, futility, and expanded donor utilization.',
      explanation: `## Advanced Immunological Phenotyping

**Antibody Characterization Beyond MFI**
- Complement-binding assays (C1q, C3d)
- IgG subclass determination
- Memory B-cell assessment
- Bone marrow plasma cell persistence

**Virtual Crossmatch Algorithms**
- Incorporation of epitope matching (HLAMatchmaker, PIRCHE-II)
- Probabilistic crossmatch prediction
- Acceptable mismatch determination for sensitized patients

**Immune Monitoring Biomarkers**
- Torque teno virus (TTV) as marker of immune function
- Gene expression profiling (pre-transplant immune state)
- Donor-reactive T-cell quantification (ELISPOT)

## Frailty and Functional Assessment

**Frailty Phenotype in Transplant**
- Fried Frailty Phenotype adapted for transplant
- Liver Frailty Index
- Kidney Transplant Frailty Index

**Components Assessed**
- Grip strength
- Gait speed
- Chair stands
- Unintentional weight loss
- Exhaustion

**Clinical Impact**
- Frailty predicts waitlist mortality
- Predicts post-transplant mortality and complications
- Some centers use for listing decisions
- Prehabilitation programs emerging

## Machine Learning in Candidacy Assessment

**Outcome Prediction Models**
- Random forest models for post-transplant survival
- Neural networks incorporating complex variable interactions
- Integration of EHR data, imaging, and laboratory values

**Decision Support Applications**
- Organ offer acceptance prediction
- Donor-recipient matching optimization
- Risk communication tools for informed consent

**Limitations**
- Validation across diverse populations
- Interpretability concerns
- Perpetuation of existing biases

## Expanded Criteria and Novel Donor Utilization

**HIV-Positive Donors**
- HOPE Act enabled HIV+ to HIV+ transplant
- Excellent outcomes in appropriately selected recipients

**Hepatitis C Viremic Donors**
- DAA therapy enables HCV+ to HCV- transplant
- Expanded donor pool significantly
- Protocol optimization ongoing

**DCD (Donation After Circulatory Death)**
- Machine perfusion reducing DGF rates
- Normothermic regional perfusion expanding DCD heart transplant

## Equity Considerations in Evaluation

**Bias in Selection Criteria**
- Social support requirements may disadvantage marginalized groups
- Financial requirements create barriers
- Transportation/housing requirements

**Structural Inequities**
- Racial/ethnic disparities in referral
- Insurance coverage variations
- Geographic access disparities

**Mitigation Strategies**
- Standardized assessment tools
- Committee training on implicit bias
- Community navigation programs
- Policy advocacy for coverage

## Evolving Ethical Frameworks

**Utility vs. Justice**
- Longevity matching debates
- Transplant benefit calculation
- Highly sensitized patient prioritization

**Retransplantation Ethics**
- Outcomes generally poorer
- Criteria for relisting
- Prior non-adherence considerations

**Futility Considerations**
- When is transplant unlikely to benefit?
- Quality of life vs. survival
- Family/surrogate expectations`,
      keyTerms: [
        { term: 'Liver Frailty Index', definition: 'Validated tool measuring functional status in liver disease using grip strength, chair stands, and balance' },
        { term: 'PIRCHE-II', definition: 'Predicted Indirectly Recognizable HLA Epitopes - algorithm predicting indirect allorecognition' },
        { term: 'HOPE Act', definition: 'HIV Organ Policy Equity Act - 2013 legislation enabling HIV+ to HIV+ transplantation' },
        { term: 'normothermic regional perfusion', definition: 'Technique restoring circulation to abdominal organs after circulatory death to enable DCD heart transplant' },
      ],
      clinicalNotes: `Research priorities:
1. Validation of frailty measures and prehabilitation interventions
2. Machine learning model development with equity considerations
3. Optimal integration of novel donor types
4. Standardized psychosocial assessment with reduced bias
5. Long-term outcomes with expanded criteria donors`,
    },
  },

  media: [
    {
      id: 'evaluation-flowchart',
      type: 'diagram',
      filename: 'transplant-evaluation-flowchart.svg',
      title: 'Transplant Evaluation Process Flowchart',
      description: 'Step-by-step visualization of the transplant evaluation journey',
    },
  ],

  citations: [
    {
      id: 'kdigo-guideline',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'American Journal of Transplantation',
      url: 'https://kdigo.org',
    },
    {
      id: 'asts-guidelines',
      type: 'article',
      title: 'ASTS Recommended Practice Guidelines for Transplant Programs',
      source: 'American Society of Transplant Surgeons',
      url: 'https://asts.org',
    },
  ],

  crossReferences: [
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'parent', label: 'Transplant Basics' },
    { targetId: 'process-waitlist-allocation', targetType: 'process', relationship: 'related', label: 'Waitlist and Allocation' },
    { targetId: 'process-living-donation', targetType: 'process', relationship: 'related', label: 'Living Donation' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['transplant evaluation', 'pre-transplant', 'candidacy assessment'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default transplantEvaluationProcess;
