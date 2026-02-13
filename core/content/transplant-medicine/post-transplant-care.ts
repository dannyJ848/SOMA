/**
 * Post-Transplant Care - Educational Content
 *
 * Education on post-transplant monitoring, complications,
 * lifestyle modifications, and long-term management.
 */

import { EducationalContent } from '../types';

export const postTransplantCare: EducationalContent = {
  id: 'process-post-transplant-care',
  type: 'process',
  name: 'Post-Transplant Care',
  alternateNames: ['After Transplant Care', 'Transplant Follow-Up', 'Post-Transplant Management'],

  levels: {
    1: {
      level: 1,
      summary: 'After getting a new organ, you need to take good care of yourself by taking medicines, seeing your doctor regularly, and living a healthy lifestyle.',
      explanation: `Getting a transplant is a big step, but taking care of yourself afterwards is just as important. Here is what you need to know about life after transplant.

**Taking Your Medicines**
- Take all medicines exactly as your doctor says
- Take them at the same times every day
- Never skip doses or stop taking them
- Use a pill box or reminders to help remember

**Going to Doctor Appointments**
- Many appointments at first (sometimes several times a week)
- Fewer appointments over time as you get healthier
- Blood tests to check your organ and medicine levels
- Never miss your appointments

**Staying Healthy**
- Eat healthy foods
- Stay active (ask your doctor what exercise is safe)
- Do not smoke
- Limit alcohol
- Get enough sleep

**Avoiding Germs**
Because your medicines weaken your immune system:
- Wash your hands often
- Stay away from sick people
- Be careful around pets (especially cleaning litter boxes or cages)
- Avoid raw or undercooked foods

**Watching for Problems**
Tell your doctor right away if you have:
- Fever
- Pain or swelling near your transplant
- Feeling very tired
- Not urinating as much (for kidney transplant)
- Shortness of breath (for heart or lung transplant)

**Living Your Life**
Most people go back to normal activities after recovery:
- Return to work or school
- Enjoy hobbies
- Travel (with some precautions)
- Spend time with family and friends`,
      keyTerms: [
        { term: 'follow-up', definition: 'Regular visits to your doctor to check on your health' },
        { term: 'blood tests', definition: 'Tests that check how well your new organ and medicines are working' },
        { term: 'lifestyle', definition: 'The way you live, including what you eat and how active you are' },
      ],
      analogies: [
        'Taking care of your transplant is like taking care of a new plant - it needs regular water (medicine), sunlight (healthy living), and check-ups to make sure it is growing well.',
      ],
      examples: [
        'After her kidney transplant, Maria takes her medicines every morning and evening, eats healthy meals, and walks for exercise every day.',
      ],
    },
    2: {
      level: 2,
      summary: 'Post-transplant care involves regular monitoring, medication management, infection prevention, cancer screening, and lifestyle modifications to protect graft function and patient health.',
      explanation: `**Phases of Post-Transplant Care**

**Early Period (0-3 months)**
- Most intensive monitoring
- Frequent clinic visits (often weekly)
- Laboratory monitoring 1-2 times per week
- Highest rejection and infection risk

**Intermediate Period (3-12 months)**
- Gradual reduction in visit frequency
- Monthly labs typically
- Ongoing infection prophylaxis
- Cancer screening begins

**Long-Term Period (>12 months)**
- Quarterly to annual visits
- Focus on chronic complications
- Long-term medication management
- Preventive health maintenance

**Medication Management**

Key Medications:
| Category | Purpose | Examples |
|----------|---------|----------|
| Anti-rejection | Prevent rejection | Tacrolimus, mycophenolate, prednisone |
| Infection prevention | Prevent infections | Valganciclovir, TMP-SMX |
| Other | Manage side effects | Blood pressure, diabetes medicines |

**Monitoring Laboratory Tests**
- Kidney function (creatinine, BUN)
- Liver function (AST, ALT, bilirubin)
- Blood counts (CBC)
- Drug levels (tacrolimus, cyclosporine)
- Blood sugar
- Cholesterol

**Infection Prevention**
- Vaccinations (avoid live vaccines)
- Prophylactic medications (typically 3-6 months)
- Food safety precautions
- Travel precautions

**Cancer Prevention**
- Annual skin exams (high skin cancer risk)
- Age-appropriate cancer screenings
- Limit sun exposure, use sunscreen

**Lifestyle Modifications**
- Healthy diet (low salt, heart-healthy)
- Regular exercise (after cleared by doctor)
- No smoking
- Limited alcohol
- Weight management`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Taking medicine to prevent infections before they happen' },
        { term: 'monitoring', definition: 'Regular testing to check organ function and medicine levels' },
        { term: 'rejection', definition: 'When the body attacks the transplanted organ' },
        { term: 'immunocompromised', definition: 'Having a weakened immune system due to anti-rejection medicines' },
      ],
    },
    3: {
      level: 3,
      summary: 'Post-transplant management requires structured surveillance protocols, infection prophylaxis regimens, metabolic risk management, and coordination of preventive care to optimize long-term outcomes.',
      explanation: `## Surveillance Protocols

**Laboratory Monitoring Schedule**

| Time Post-Transplant | Frequency |
|---------------------|-----------|
| 0-1 month | 2-3 times/week |
| 1-3 months | Weekly |
| 3-6 months | Every 2 weeks |
| 6-12 months | Monthly |
| >12 months | Every 2-3 months |

**Standard Laboratory Panel**
- Complete metabolic panel
- Complete blood count
- Tacrolimus/cyclosporine trough
- Urinalysis (kidney)
- Liver function tests (liver)
- BNP (heart)
- Pulmonary function tests (lung)

## Infection Prevention

**Antimicrobial Prophylaxis**

CMV Prophylaxis:
- Valganciclovir 900 mg daily
- Duration: 3-6 months (varies by risk)
- Monitor CMV viremia

PJP Prophylaxis:
- TMP-SMX (Bactrim) DS 3x/week or daily
- Duration: 6-12 months minimum
- Alternative: dapsone, atovaquone

Fungal Prophylaxis:
- Nystatin or clotrimazole (oral candidiasis)
- Fluconazole for high-risk patients

**Vaccination**

Recommended Vaccines:
- Influenza (annually)
- Pneumococcal (PCV15/PPSV23)
- COVID-19 and boosters
- Hepatitis B (if non-immune)

Contraindicated (Live Vaccines):
- MMR
- Varicella
- Live attenuated influenza
- Oral polio

## Metabolic Complications

**New-Onset Diabetes After Transplant (NODAT)**
- Risk factors: tacrolimus, steroids, obesity
- Screening: Fasting glucose, HbA1c
- Management: Lifestyle, oral agents, insulin

**Dyslipidemia**
- Common with mTOR inhibitors, steroids
- Statin therapy first-line
- Monitor liver function with statins

**Hypertension**
- CNI-induced vasoconstriction
- Target <130/80 mmHg
- First-line: CCBs (avoid diltiazem/verapamil drug interactions)

**Bone Disease**
- Osteoporosis from steroids
- DEXA scan at baseline and annually
- Calcium, vitamin D supplementation
- Bisphosphonates as indicated

## Cancer Surveillance

**Skin Cancer**
- Annual dermatology exam
- Sun protection education
- Self-skin exams

**Post-Transplant Lymphoproliferative Disorder (PTLD)**
- EBV-driven in many cases
- Monitor EBV viremia in high-risk
- Low threshold for biopsy of lymphadenopathy

**Standard Cancer Screening**
- Colonoscopy per guidelines
- Mammography per guidelines
- Cervical cancer screening
- Prostate cancer screening`,
      keyTerms: [
        { term: 'CMV', definition: 'Cytomegalovirus - common viral infection after transplant requiring prophylaxis' },
        { term: 'PJP', definition: 'Pneumocystis jirovecii pneumonia - fungal infection prevented with TMP-SMX' },
        { term: 'NODAT', definition: 'New-onset diabetes after transplant - metabolic complication of immunosuppression' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder - malignancy associated with immunosuppression' },
      ],
      clinicalNotes: 'Coordination with primary care is essential for long-term preventive care. Transplant recipients should receive routine health maintenance including immunizations (avoiding live vaccines) and cancer screening.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive post-transplant care integrates organ-specific surveillance, personalized immunosuppression management, and evidence-based prevention strategies addressing the spectrum of complications affecting long-term survival.',
      explanation: `## Organ-Specific Surveillance

**Kidney Transplant**

Protocol Biopsies:
- 3-month and 12-month surveillance
- Detects subclinical rejection
- Guides treatment intensification

DSA Monitoring:
- Baseline and serial testing
- De novo DSA indicates immune activation
- Triggers enhanced surveillance

BK Virus:
- Monthly PCR for first 12 months
- Rising viremia: reduce immunosuppression
- Biopsy if nephropathy suspected

**Liver Transplant**

Recurrent Disease:
- HCV: Monitor for recurrence if not cured pre-transplant
- HBV: HBIG and antiviral prophylaxis
- Autoimmune: Monitor liver enzymes
- NASH: Metabolic management

Protocol Biopsies:
- Less standardized than kidney
- Indicated for unexplained enzyme elevation

**Heart Transplant**

Endomyocardial Biopsy Schedule:
- Weekly x 4, then biweekly x 4, then monthly x 6
- Quarterly in second year
- Annually thereafter

Coronary Surveillance:
- Annual coronary angiography
- IVUS more sensitive for CAV

**Lung Transplant**

Surveillance Bronchoscopy:
- Varies by protocol
- BAL for infection and rejection evaluation
- Transbronchial biopsy

PFT Monitoring:
- Baseline post-transplant
- Every 3-6 months
- Decline suggests CLAD

## Advanced Complication Management

**Chronic Kidney Disease (in non-kidney transplant)**
- CNI nephrotoxicity common
- Monitor creatinine, proteinuria
- CNI minimization strategies
- Nephrology co-management

**Cardiovascular Disease**
- Leading cause of death in kidney transplant
- Aggressive risk factor management
- SGLT2 inhibitors emerging role

**Opportunistic Infections**

CMV Disease:
- Treatment: Valganciclovir or ganciclovir IV
- Duration: 3 weeks minimum, until negative
- Secondary prophylaxis after treatment

BK Nephropathy:
- Reduce immunosuppression
- Consider switching CNI
- Limited antiviral efficacy (cidofovir, leflunomide)

**Malignancy Management**
- IS reduction when possible
- mTOR inhibitor conversion (antiproliferative effect)
- Oncology collaboration

## Adherence Support

**Non-Adherence Impact**
- Leading cause of late graft loss
- De novo DSA development
- Rejection episodes

**Interventions**
- Simplified regimens
- Pill boxes, alarms
- Electronic monitoring
- Motivational interviewing
- Addressing barriers (cost, side effects, mental health)

## Care Coordination

**Transplant Center Role**
- Immunosuppression management
- Rejection/complication management
- Surveillance protocols

**Primary Care Role**
- Preventive care
- Non-transplant health maintenance
- Routine vaccinations
- Chronic disease management

**Specialty Integration**
- Cardiology (cardiovascular risk)
- Nephrology (CKD management)
- Infectious disease (complex infections)
- Dermatology (skin cancer)
- Oncology (malignancies)`,
      keyTerms: [
        { term: 'protocol biopsy', definition: 'Surveillance biopsy performed at scheduled intervals regardless of clinical indication' },
        { term: 'CAV', definition: 'Cardiac allograft vasculopathy - chronic rejection manifesting as coronary disease' },
        { term: 'CLAD', definition: 'Chronic lung allograft dysfunction - chronic rejection of lung transplant' },
        { term: 'IVUS', definition: 'Intravascular ultrasound - more sensitive imaging for cardiac allograft vasculopathy' },
      ],
      clinicalNotes: 'Non-adherence should be screened for at every visit. A multi-disciplinary approach including pharmacy, social work, and behavioral health improves adherence outcomes.',
    },
    5: {
      level: 5,
      summary: 'Post-transplant care optimization leverages biomarker-guided monitoring, precision medicine approaches, telehealth integration, and quality metrics to improve long-term graft and patient survival.',
      explanation: `## Biomarker-Integrated Surveillance

**Non-Invasive Rejection Monitoring**

dd-cfDNA Integration:
- AlloSure, Prospera validated
- High NPV for ruling out rejection
- May reduce surveillance biopsies
- Integration protocols in development

Gene Expression:
- AlloMap for heart (reduces biopsies)
- kSORT for kidney (predicts rejection)
- Molecular phenotyping of biopsies (MMDx)

TTV Monitoring:
- Immune function biomarker
- Guides immunosuppression adjustment
- Low TTV suggests over-immunosuppression

**Precision Immunosuppression**

Pharmacogenomics:
- CYP3A5 genotype for tacrolimus dosing
- Implementing CPIC guidelines
- Point-of-care genetic testing

AUC-Based Dosing:
- More precise than trough-only
- Limited sampling strategies
- Bayesian estimators

Intra-Patient Variability:
- High IPV associated with poor outcomes
- Signals adherence issues or absorption problems
- Trigger for intervention

## Digital Health Integration

**Telehealth in Transplant**
- Video visits for stable patients
- Remote monitoring of vitals
- Reduced travel burden
- Pandemic-accelerated adoption

**Remote Patient Monitoring**
- Blood pressure cuffs
- Glucose monitors
- Weight scales
- Integration with EHR

**Mobile Health Applications**
- Medication reminders
- Symptom tracking
- Lab result access
- Communication with transplant team

**Wearable Technology**
- Activity tracking
- Heart rate monitoring
- Sleep quality assessment
- Potential for early complication detection

## Quality Metrics and Outcomes

**SRTR Metrics**
- 1-year graft survival
- 1-year patient survival
- Waitlist mortality
- Program-specific reports

**Process Measures**
- Time to first clinic visit
- Tacrolimus therapeutic range achievement
- Infection prophylaxis compliance
- Vaccination rates

**Patient-Reported Outcomes**
- Quality of life measures
- Symptom burden
- Functional status
- Satisfaction with care

## Emerging Approaches

**Machine Learning Applications**
- Rejection risk prediction
- Readmission prediction
- Optimal dosing algorithms
- Natural language processing for adherence detection

**Novel Infection Management**
- CMV-specific T-cell therapy
- Adoptive immunotherapy
- Novel antivirals in development

**Long-Term Tolerance Monitoring**
- Biomarkers of tolerance
- Candidates for IS minimization
- Operational tolerance studies

## Systems-Level Optimization

**Care Transition**
- Post-transplant to long-term care
- Transplant to primary care handoff
- Geographic distance challenges

**Health Equity**
- Disparities in long-term outcomes
- Access to follow-up care
- Medication affordability
- Social determinants of health

**Survivorship Care**
- Transition to cancer survivorship model
- Structured long-term follow-up
- Preventive care integration
- Mental health support`,
      keyTerms: [
        { term: 'AUC-based dosing', definition: 'Drug dosing based on area under the concentration-time curve rather than trough levels' },
        { term: 'intra-patient variability', definition: 'Fluctuation in drug levels over time within individual patient, marker of adherence or absorption' },
        { term: 'patient-reported outcomes', definition: 'Health outcomes directly reported by patients, including quality of life and symptom burden' },
        { term: 'remote patient monitoring', definition: 'Technology-enabled collection of health data from patients at home' },
      ],
      clinicalNotes: `Quality improvement priorities:
1. Integrate non-invasive biomarkers into surveillance protocols
2. Implement pharmacogenomic dosing
3. Expand telehealth and remote monitoring programs
4. Address health equity in long-term outcomes
5. Develop standardized care transitions`,
    },
  },

  media: [
    {
      id: 'post-transplant-timeline',
      type: 'diagram',
      filename: 'post-transplant-timeline.svg',
      title: 'Post-Transplant Care Timeline',
      description: 'Visual timeline of monitoring and care activities after transplant',
    },
  ],

  citations: [
    {
      id: 'kdigo-ktx-care',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'Transplantation',
      url: 'https://kdigo.org',
    },
    {
      id: 'ast-guidelines',
      type: 'article',
      title: 'AST Infectious Diseases Guidelines',
      source: 'American Society of Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'concept-immunosuppression-therapy', targetType: 'concept', relationship: 'related', label: 'Immunosuppression' },
    { targetId: 'condition-transplant-rejection', targetType: 'condition', relationship: 'related', label: 'Rejection' },
    { targetId: 'concept-long-term-outcomes', targetType: 'concept', relationship: 'related', label: 'Long-Term Outcomes' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['post-transplant care', 'monitoring', 'infection prevention', 'follow-up'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default postTransplantCare;
