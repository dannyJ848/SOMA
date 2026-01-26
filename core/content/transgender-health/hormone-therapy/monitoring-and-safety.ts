import { EducationalContent } from '../../types';

export const monitoringAndSafetyContent: EducationalContent = {
  id: 'topic-monitoring-and-safety',
  type: 'topic',
  name: 'Hormone Therapy Monitoring and Safety',
  alternateNames: ['HRT Safety', 'Hormone Monitoring'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular checkups and blood tests help make sure hormone therapy is working safely.',
      explanation: `When you take hormones, your doctor wants to make sure everything is going well. They do this through checkups and blood tests.

**Why Monitoring Matters:**
- Makes sure hormones are at the right levels
- Catches any problems early
- Helps adjust doses if needed
- Keeps you healthy

**What to Expect:**
- Blood tests every few months at first
- Regular appointments with your doctor
- Talking about how you feel
- Checking blood pressure and weight

This is a normal part of hormone therapy that helps keep you safe.`,
      keyTerms: [
        { term: 'monitoring', definition: 'Checking to make sure treatment is working safely' },
        { term: 'blood test', definition: 'Taking a small sample of blood to check your health' },
        { term: 'dose', definition: 'The amount of medicine you take' },
      ],
      analogies: [
        'Monitoring is like a car checkup - you make sure everything is running smoothly.',
      ],
      examples: [
        'A few months after starting hormones, you might get blood tests to check that levels are good.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hormone therapy monitoring includes regular lab tests, vital signs, and clinical assessments to ensure safety and optimize treatment.',
      explanation: `Monitoring is a routine part of hormone therapy that helps your healthcare team provide safe, effective care.

**Types of Monitoring:**

*Laboratory Tests:*
- Hormone levels (estrogen, testosterone)
- Blood counts
- Liver and kidney function
- Cholesterol and blood sugar

*Clinical Assessments:*
- Blood pressure
- Weight changes
- Side effect review
- Physical changes and progress

**Monitoring Schedule:**

*First Year:*
- More frequent visits (every 3 months)
- More blood tests
- Dose adjustments as needed

*After First Year:*
- Usually annual checkups
- Annual labs
- More often if concerns arise

**Safety Considerations:**

*Feminizing Therapy:*
- Blood clot risk (especially with oral estrogen)
- Prolactin levels
- Potassium (if on spironolactone)

*Masculinizing Therapy:*
- Blood thickening (polycythemia)
- Liver function
- Cholesterol changes`,
      keyTerms: [
        { term: 'polycythemia', definition: 'When blood has too many red blood cells', pronunciation: 'pol-ee-sy-THEE-mee-ah' },
        { term: 'prolactin', definition: 'A hormone that should be monitored with estrogen therapy' },
        { term: 'blood clot', definition: 'When blood thickens into a clump that can be dangerous' },
        { term: 'liver function', definition: 'How well the liver is working' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hormone therapy monitoring follows Endocrine Society guidelines including baseline and periodic laboratory assessment, vital signs, and clinical evaluation to optimize efficacy and manage risks.',
      explanation: `Systematic monitoring is essential for safe hormone therapy, guided by evidence-based protocols.

**Baseline Evaluation:**

*All Patients:*
- Comprehensive history and physical
- Blood pressure, weight, BMI
- Labs: CBC, CMP, fasting lipids, fasting glucose/HbA1c
- Specific hormone panel

*Feminizing Therapy:*
- Testosterone, estradiol
- Prolactin (baseline)

*Masculinizing Therapy:*
- Testosterone, estradiol
- Consider baseline pelvic ultrasound if irregular bleeding

**Follow-Up Schedule:**

*Months 1-12:*
- Visits every 3 months
- Labs at 3, 6, and 12 months
- Dose adjustments based on levels and response

*After Year 1:*
- Annual visits and labs
- More frequent if concerns

**Key Monitoring Parameters:**

*Feminizing:*
| Parameter | Frequency | Target/Concern |
|-----------|-----------|----------------|
| Estradiol | Every 3 months, then annual | 100-200 pg/mL |
| Testosterone | Every 3 months, then annual | <50 ng/dL |
| Potassium | Every 3 months if on spiro | Normal range |
| Prolactin | Annually | <100 ng/mL |

*Masculinizing:*
| Parameter | Frequency | Target/Concern |
|-----------|-----------|----------------|
| Testosterone | Every 3 months, then annual | 400-700 ng/dL |
| Hematocrit | Every 3 months, then annual | <54% |
| Lipids | Annual | Standard targets |

**Risk Mitigation:**
- VTE risk: Consider non-oral estrogen for high-risk patients
- Polycythemia: Dose reduction, route change, phlebotomy
- Hepatotoxicity: Rare with modern formulations; monitor LFTs`,
      keyTerms: [
        { term: 'hematocrit', definition: 'Percentage of blood volume that is red blood cells', pronunciation: 'he-MAT-oh-krit' },
        { term: 'HbA1c', definition: 'Test for average blood sugar over 3 months' },
        { term: 'VTE', definition: 'Venous thromboembolism; blood clots' },
        { term: 'hepatotoxicity', definition: 'Liver damage from medications' },
      ],
      clinicalNotes: 'Check trough levels for injectable hormones. Hematocrit >54% requires intervention. Prolactin >100 ng/mL warrants pituitary evaluation.',
    },
    4: {
      level: 4,
      summary: 'Hormone therapy monitoring integrates laboratory surveillance, clinical assessment, and risk management per Endocrine Society guidelines, with attention to specific complications including VTE, polycythemia, and metabolic effects.',
      explanation: `Comprehensive monitoring protocols optimize hormone therapy safety and efficacy.

**Laboratory Monitoring Protocol:**

*Feminizing Hormone Therapy:*

| Test | Baseline | 3 months | 6 months | 12 months | Annual |
|------|----------|----------|----------|-----------|--------|
| Estradiol | X | X | X | X | X |
| Testosterone | X | X | X | X | X |
| CBC | X | | | X | X |
| CMP | X | | | X | X |
| Lipids | X | | | X | X |
| Prolactin | X | | | X | X |
| Potassium* | X | X | X | X | X |

*If on spironolactone

*Masculinizing Hormone Therapy:*

| Test | Baseline | 3 months | 6 months | 12 months | Annual |
|------|----------|----------|----------|-----------|--------|
| Testosterone | X | X | X | X | X |
| Estradiol | X | X | X | X | As needed |
| CBC/Hematocrit | X | X | X | X | X |
| CMP | X | | | X | X |
| Lipids | X | | | X | X |

**Managing Specific Risks:**

*VTE (Feminizing):*
- Risk factors: Age >40, BMI >30, smoking, personal/family history, surgery, immobility
- Mitigation: Transdermal estrogen, lower doses, smoking cessation
- Absolute contraindications: Active VTE, recent VTE (<3 months)
- Perioperative: Consider holding 2-4 weeks before major surgery

*Polycythemia (Masculinizing):*
- Hematocrit monitoring essential
- 50-54%: Lifestyle modification, closer monitoring
- >54%: Intervention required
- Options: Reduce dose, transdermal route, phlebotomy
- Rule out: Sleep apnea, pulmonary disease

*Prolactinoma (Feminizing):*
- Rare with standard doses
- Symptoms: Headache, visual changes, galactorrhea
- If prolactin >100 ng/mL or symptoms: MRI pituitary
- Management: Reduce estrogen, consider dopamine agonist

*Metabolic:*
- Lipids: HDL may decrease on testosterone; monitor LDL
- Glucose: Monitor for new diabetes
- Liver: LFTs periodically; modern formulations low risk

**Additional Screening:**
- Cardiovascular: Risk assessment, BP monitoring
- Bone health: DEXA if risk factors, prolonged hormone disruption
- Cancer screening: Per anatomy (breast, cervical, prostate)`,
      keyTerms: [
        { term: 'prolactinoma', definition: 'Benign pituitary tumor producing excess prolactin' },
        { term: 'galactorrhea', definition: 'Abnormal milk discharge from nipples' },
        { term: 'dopamine agonist', definition: 'Medication that can lower prolactin levels' },
        { term: 'phlebotomy', definition: 'Removing blood to reduce hematocrit' },
      ],
      clinicalNotes: 'For injectable testosterone, check trough levels. Polycythemia is the most common significant complication of testosterone therapy.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based hormone therapy monitoring requires systematic laboratory surveillance per Endocrine Society guidelines, individualized risk stratification, protocol-driven management of complications, and attention to long-term outcomes.',
      explanation: `Expert hormone therapy monitoring integrates guideline-based protocols with individualized patient care.

**Comprehensive Monitoring Framework:**

*Risk Stratification:*

Feminizing - VTE Risk Assessment:
- Low: <40, no risk factors → Standard monitoring
- Moderate: 40-60, 1 risk factor → Consider transdermal, closer monitoring
- High: >60, multiple factors, prior VTE → Transdermal only, hematology consult

Masculinizing - Polycythemia Risk Assessment:
- Low: Non-smoker, no pulmonary disease → Standard monitoring
- Moderate: Smoker OR sleep apnea → More frequent Hct, consider transdermal
- High: Both, baseline elevated → Transdermal, low dose, close monitoring

**Laboratory Interpretation:**

*Hormone Level Targets:*
- Feminizing:
  - Estradiol: 100-200 pg/mL (some target higher for effect)
  - Testosterone: <50 ng/dL
  - Check timing: Trough for oral (before dose), mid-cycle for patch

- Masculinizing:
  - Testosterone: 400-700 ng/dL
  - Check at trough (before next injection)
  - Peak levels less informative for safety

*Prolactin Management:*
- Mild elevation (<100): Annual monitoring, usually benign
- Moderate (100-200): More frequent monitoring, consider dose reduction
- Severe (>200) or symptoms: MRI, possible dose reduction, endocrinology consult

*Polycythemia Protocol:*
- Hematocrit 50-54%:
  - Confirm on repeat
  - Smoking cessation counseling
  - Sleep apnea screening (STOP-Bang)
  - Consider: Hydration, dose reduction
- Hematocrit >54%:
  - Hold testosterone until Hct <50%
  - Phlebotomy (1 unit)
  - Evaluate for contributing factors
  - Restart at lower dose or transdermal

**Long-Term Safety Data:**

*Cardiovascular:*
- Feminizing: Some studies suggest increased VTE, MI in older patients
- Masculinizing: Mixed data; may increase CV events in some populations
- Clinical approach: Aggressive risk factor modification, standard preventive care

*Bone Health:*
- Both regimens: Adequate hormone levels are protective
- DEXA if: Prolonged hypogonadism, fracture risk factors, non-compliance
- Treatment: Standard osteoporosis management if low BMD

*Cancer:*
- Breast: Feminizing may increase risk over time; screening per natal female guidelines often appropriate
- Prostate: Case reports in transgender women; consider screening in older patients
- Gynecologic: Continue cervical screening; endometrial surveillance if abnormal bleeding

**Quality Metrics:**
- Lab adherence rates
- Time to therapeutic levels
- Adverse event tracking
- Patient satisfaction
- Continuity of care`,
      keyTerms: [
        { term: 'STOP-Bang', definition: 'Sleep apnea screening questionnaire' },
        { term: 'BMD', definition: 'Bone mineral density, measured by DEXA scan' },
        { term: 'therapeutic phlebotomy', definition: 'Blood removal to treat polycythemia' },
        { term: 'hypogonadism', definition: 'Inadequate sex hormone levels' },
      ],
      clinicalNotes: `**Monitoring Pearls:**
- For injectable hormones, always check trough levels
- Polycythemia is the most actionable risk with testosterone
- VTE risk drives route selection for estrogen
- Prolactinoma is rare; most mild elevations are benign
- Continue age-appropriate cancer screening based on anatomy
- Document monitoring rationale in chart
- Create systems for tracking and recalling patients for labs
- Endocrine Society guidelines (2017) are primary reference; update expected`,
    },
  },

  media: [],
  citations: [
    {
      id: 'hembree-2017',
      type: 'article',
      title: 'Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons',
      authors: ['Hembree WC', 'et al.'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
      url: 'https://doi.org/10.1210/jc.2017-01658',
      license: 'Copyright Endocrine Society',
    },
  ],
  crossReferences: [
    { targetId: 'topic-feminizing-hormone-therapy', targetType: 'topic', relationship: 'related', label: 'Feminizing Hormone Therapy' },
    { targetId: 'topic-masculinizing-hormone-therapy', targetType: 'topic', relationship: 'related', label: 'Masculinizing Hormone Therapy' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['monitoring', 'safety', 'hormone therapy', 'transgender health'],
    keywords: ['lab monitoring', 'safety', 'polycythemia', 'VTE'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default monitoringAndSafetyContent;
