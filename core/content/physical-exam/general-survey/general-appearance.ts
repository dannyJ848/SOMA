/**
 * General Appearance Assessment
 *
 * Comprehensive content on assessing patient general appearance including
 * body habitus, nutritional status, distress level, and overall impression.
 */

import { EducationalContent } from '../../types';

export const generalAppearance: EducationalContent = {
  id: 'physical-exam-general-survey-general-appearance',
  type: 'concept',
  name: 'General Appearance',
  alternateNames: ['General Survey', 'Overall Appearance', 'Initial Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'General appearance is the first thing doctors notice about you - how you look, act, and seem to feel.',
      explanation: `When you visit a doctor, they start forming an impression the moment they see you. This "general appearance" assessment happens before any tests or detailed examination.

**What Doctors Notice:**

**How You Look:**
- Do you look healthy or sick?
- Are you well-groomed or disheveled?
- Do you look your stated age?
- What is your body size and shape?

**How You Act:**
- Are you calm or anxious?
- Are you sitting comfortably or in distress?
- Do you make eye contact?
- Can you move around easily?

**Signs of Distress:**
- Holding a painful area
- Difficulty breathing
- Sweating when you shouldn't be
- Looking pale or flushed
- Grimacing or moaning

**Body Size:**
- Thin, average, or overweight
- Muscular or frail
- Signs of recent weight loss or gain

**Why It Matters:**
The general appearance can give important clues about:
- How sick someone is (acute vs. chronic illness)
- Nutrition and overall health
- Mental health and well-being
- Whether urgent treatment is needed`,
      keyTerms: [
        { term: 'general appearance', definition: 'The overall impression of how someone looks and acts' },
        { term: 'distress', definition: 'Signs of pain, discomfort, or difficulty' },
        { term: 'body habitus', definition: 'A person\'s body build and shape' },
        { term: 'grooming', definition: 'How well someone takes care of their appearance (hair, clothes, hygiene)' },
      ],
      analogies: [
        'The general appearance is like the cover of a book - it gives you a first impression before you read the details inside.',
        'Assessing general appearance is like checking if a car looks damaged before looking under the hood.',
      ],
      examples: [
        'A person clutching their chest and sweating tells you something is seriously wrong before any tests.',
        'Someone who looks very thin with loose-fitting clothes may have lost a lot of weight recently.',
      ],
    },
    2: {
      level: 2,
      summary: 'The general survey systematically assesses apparent state of health, body habitus, level of distress, and behavioral observations to form an initial clinical impression.',
      explanation: `## Components of General Survey

**1. Apparent State of Health**
| Observation | Consider |
|-------------|----------|
| Appears stated age | Premature aging may suggest chronic disease |
| Well-developed | Growth, musculature appropriate |
| Well-nourished | Adequate nutrition |
| Ill-appearing | Acute or chronic illness present |

**2. Level of Consciousness**
- Alert and oriented
- Responds to voice
- Responds to stimulation
- Unresponsive

**3. Signs of Distress**
| Type | Signs |
|------|-------|
| Respiratory | Tripod position, accessory muscle use, pursed lips |
| Cardiac | Diaphoresis, clutching chest, pallor |
| Pain | Guarding, grimacing, moaning, restlessness |
| Anxiety | Fidgeting, tremor, rapid speech, sweating |

**4. Body Habitus**
| Type | Description |
|------|-------------|
| Ectomorphic | Thin, lean, long limbs |
| Mesomorphic | Muscular, athletic |
| Endomorphic | Round, larger fat stores |

**BMI Categories:**
| Category | BMI (kg/m²) |
|----------|-------------|
| Underweight | <18.5 |
| Normal | 18.5-24.9 |
| Overweight | 25-29.9 |
| Obese Class I | 30-34.9 |
| Obese Class II | 35-39.9 |
| Obese Class III | ≥40 |

**5. Skin**
- Color: Pale, flushed, jaundiced, cyanotic
- Moisture: Dry, diaphoretic
- Lesions: Obvious rashes, wounds

**6. Posture and Gait**
- Standing posture
- Sitting position
- Walking pattern
- Use of assistive devices

**7. Personal Hygiene and Grooming**
- Cleanliness
- Clothing appropriateness
- Body odor
- Dental hygiene

**8. Facial Expression**
- Congruent with mood
- Pain facies
- Flat affect
- Anxiety

## Clinical Impressions

**"Sick" vs. "Not Sick":**
This gestalt assessment guides urgency:
- Not sick: Can proceed with routine evaluation
- Sick: Need urgent assessment and intervention
- Toxic: Requires immediate stabilization

**Red Flags:**
- Altered mental status
- Tripod positioning
- Severe pallor or cyanosis
- Diaphoresis at rest
- Writhing in pain
- Inability to speak in sentences`,
      keyTerms: [
        { term: 'body habitus', definition: 'Physical build and constitution of a person' },
        { term: 'tripod position', definition: 'Sitting upright, leaning forward with arms braced; indicates respiratory distress' },
        { term: 'diaphoresis', definition: 'Excessive sweating, often indicating stress, pain, or autonomic activation' },
        { term: 'toxic appearance', definition: 'Severely ill appearance suggesting systemic illness requiring urgent intervention' },
        { term: 'BMI', definition: 'Body Mass Index; weight in kg divided by height in meters squared' },
      ],
    },
    3: {
      level: 3,
      summary: 'General appearance assessment integrates visual cues with clinical reasoning to identify acuity, generate diagnostic hypotheses, and guide examination focus.',
      explanation: `## Systematic General Survey Assessment

### Apparent Age vs. Chronological Age

**Appearing Older:**
| Condition | Mechanism |
|-----------|-----------|
| Chronic illness | Catabolic state, oxidative stress |
| Progeria | Genetic premature aging |
| Werner syndrome | DNA repair defect |
| Chronic smoking | Skin aging, vascular disease |
| Severe weight loss | Loss of subcutaneous fat |
| Chronic sun exposure | Photoaging |

**Appearing Younger:**
| Condition | Mechanism |
|-----------|-----------|
| Pituitary dwarfism | Growth hormone deficiency |
| Hypothyroidism | Metabolic slowing |
| Anorexia nervosa | Prepubertal appearance |
| Delayed puberty | Various causes |

### Nutritional Status Assessment

**Signs of Malnutrition:**
| Finding | Deficiency |
|---------|------------|
| Temporal wasting | Protein-calorie |
| Bitemporal hemianopia | Pituitary mass |
| Angular cheilitis | Riboflavin (B2), iron |
| Glossitis | B12, folate, iron, niacin |
| Koilonychia | Iron deficiency |
| Petechiae/purpura | Vitamin C (scurvy) |
| Dermatitis | Niacin, zinc, EFAs |
| Peripheral neuropathy | B12, thiamine |
| Night blindness | Vitamin A |

**Cachexia vs. Marasmus vs. Kwashiorkor:**
| Type | Features |
|------|----------|
| Cachexia | Disease-related wasting, inflammation-driven |
| Marasmus | Protein-calorie deficiency, "skin and bones" |
| Kwashiorkor | Protein deficiency with edema, "potbelly" |

### Facies

**Characteristic Facial Appearances:**
| Facies | Features | Condition |
|--------|----------|-----------|
| Cushing | Moon face, plethora, hirsutism | Hypercortisolism |
| Acromegalic | Coarse features, prognathism, frontal bossing | Growth hormone excess |
| Myxedematous | Puffy, coarse, loss of lateral eyebrows | Hypothyroidism |
| Marfanoid | Long face, high-arched palate | Marfan syndrome |
| Mitral facies | Malar flush | Mitral stenosis |
| Hippocratic | Sunken eyes, hollow cheeks | Severe illness, impending death |
| Parkinson | Masked facies, hypomimia | Parkinson disease |
| Myasthenic | Ptosis, expressionless | Myasthenia gravis |

### Posture and Positioning

**Diagnostic Positions:**
| Position | Suggests |
|----------|----------|
| Tripod | Respiratory distress (COPD, asthma) |
| Orthopnea | Heart failure, diaphragm weakness |
| Leaning forward | Pericarditis, pancreatitis |
| Knee-to-chest | Aortic regurgitation, tetralogy of Fallot |
| Fetal position | Peritonitis |
| Rigid/Splinting | Localized pain (abdominal, rib) |

### Odors

| Odor | Consider |
|------|----------|
| Fruity/acetone | DKA |
| Ammonia/urine | Uremia |
| Musty/fetor hepaticus | Hepatic encephalopathy |
| Feculent | Bowel obstruction, fistula |
| Alcohol | Intoxication, withdrawal |
| Garlic | Organophosphate poisoning |

### Vital Signs Context

**Correlation with Appearance:**
- Tachycardia + diaphoresis + pale = Consider shock, MI, PE
- Fever + rigors + ill-appearing = Consider sepsis
- Tachypnea + tripod + cyanosis = Respiratory failure
- Bradycardia + altered mental status = Consider increased ICP, hypothermia

### Acuity Assessment

**Rapid Impression:**
1. **A**ppearance: Sick vs. not sick
2. **B**reathing: Work of breathing, oxygen requirement
3. **C**irculation: Perfusion, capillary refill, pulses

**Triage Categories:**
| Category | Description | Action |
|----------|-------------|--------|
| Resuscitation | Life-threatening, unstable | Immediate intervention |
| Emergent | Potentially life-threatening | Rapid evaluation |
| Urgent | Could worsen | Timely evaluation |
| Less urgent | Stable | Routine evaluation |
| Non-urgent | Minor | Can wait |`,
      keyTerms: [
        { term: 'cachexia', definition: 'Inflammatory-mediated wasting syndrome with muscle loss seen in cancer, heart failure, and chronic illness' },
        { term: 'facies', definition: 'Characteristic facial appearance associated with specific diseases or syndromes' },
        { term: 'Cushingoid facies', definition: 'Moon face, plethora, hirsutism from glucocorticoid excess' },
        { term: 'fetor hepaticus', definition: 'Musty, sweet breath odor in hepatic encephalopathy from dimethyl sulfide' },
        { term: 'orthopnea', definition: 'Dyspnea when lying flat, relieved by sitting; seen in heart failure' },
      ],
      clinicalNotes: 'The "gestalt" of general appearance often determines clinical urgency before any data is collected. Trust this impression - if a patient "looks sick," they likely are.',
    },
    4: {
      level: 4,
      summary: 'Advanced general assessment integrates pattern recognition, illness severity scoring, and prognostic implications to guide clinical decision-making in complex patients.',
      explanation: `## Advanced Pattern Recognition

### Syndrome Recognition by Appearance

**Endocrine Phenotypes:**
| Condition | Appearance Features |
|-----------|---------------------|
| Hyperthyroidism | Weight loss, tremor, lid lag, stare, tachycardia |
| Hypothyroidism | Weight gain, puffy face, slow movements, dry skin |
| Addison disease | Hyperpigmentation (skin creases, buccal), weight loss |
| Pheochromocytoma | Paroxysmal sweating, pallor, anxiety |
| Acromegaly | Enlarged hands/feet, coarse features, macroglossia |
| Diabetes (uncontrolled) | Weight loss, fruity breath, Kussmaul breathing |

**Connective Tissue Phenotypes:**
| Condition | Features |
|-----------|----------|
| Marfan syndrome | Tall, arm span > height, arachnodactyly, pectus |
| Ehlers-Danlos | Hyperextensible skin, joint hypermobility |
| Osteogenesis imperfecta | Blue sclera, fractures, short stature |
| Homocystinuria | Marfanoid habitus, intellectual disability |

**Chromosomal Phenotypes:**
| Condition | Features |
|-----------|----------|
| Turner syndrome | Short stature, webbed neck, shield chest |
| Klinefelter syndrome | Tall, gynecomastia, small testes |
| Down syndrome | Epicanthal folds, flat face, single palmar crease |
| Prader-Willi | Obesity, hypotonia, small hands/feet |

### Severity Scoring and Prognostication

**APACHE II (ICU):**
- Acute Physiology Score (12 variables)
- Age points
- Chronic health points
- Higher score = higher mortality risk

**NEWS2 (National Early Warning Score):**
| Parameter | Scoring Range |
|-----------|---------------|
| Respiratory rate | 0-3 |
| SpO2 | 0-3 |
| Supplemental O2 | 0-2 |
| Temperature | 0-3 |
| Systolic BP | 0-3 |
| Heart rate | 0-3 |
| Consciousness | 0-3 |

Total 0-4: Low risk; 5-6: Medium; ≥7: High

**SOFA Score (Sepsis):**
| System | Assessment |
|--------|------------|
| Respiratory | PaO2/FiO2 ratio |
| Coagulation | Platelet count |
| Liver | Bilirubin |
| Cardiovascular | MAP or vasopressor use |
| CNS | Glasgow Coma Scale |
| Renal | Creatinine or urine output |

### Functional Status Assessment

**Karnofsky Performance Status:**
| Score | Description |
|-------|-------------|
| 100 | Normal, no complaints |
| 80 | Normal activity with effort |
| 60 | Requires occasional assistance |
| 40 | Disabled, requires special care |
| 20 | Very sick, hospitalization needed |
| 0 | Dead |

**ECOG Performance Status:**
| Score | Description |
|-------|-------------|
| 0 | Fully active |
| 1 | Restricted strenuous activity |
| 2 | Ambulatory, capable of self-care, up >50% of day |
| 3 | Limited self-care, confined >50% of day |
| 4 | Completely disabled |

### Frailty Assessment

**Fried Frailty Phenotype:**
1. Unintentional weight loss (>10 lbs/year)
2. Self-reported exhaustion
3. Weakness (grip strength)
4. Slow walking speed
5. Low physical activity

Score: 0 = robust, 1-2 = pre-frail, ≥3 = frail

**Clinical Frailty Scale (1-9):**
| Score | Description |
|-------|-------------|
| 1 | Very fit |
| 2 | Well |
| 3 | Managing well |
| 4 | Vulnerable |
| 5 | Mildly frail |
| 6 | Moderately frail |
| 7 | Severely frail |
| 8 | Very severely frail |
| 9 | Terminally ill |

### Body Composition Assessment

**Sarcopenia:**
- Loss of muscle mass and function
- Assessment: Handgrip strength, gait speed, muscle mass (DEXA, BIA)
- EWGSOP2 criteria: Low muscle strength + low muscle quantity

**Sarcopenic Obesity:**
- Combination of sarcopenia and obesity
- Particularly poor outcomes
- BMI may be normal or elevated

**Body Composition Methods:**
| Method | Measures |
|--------|----------|
| BMI | Weight/height ratio (crude) |
| Waist circumference | Central adiposity |
| Waist-to-hip ratio | Fat distribution |
| Skinfold thickness | Subcutaneous fat |
| Bioimpedance (BIA) | Fat mass, lean mass |
| DEXA | Fat, lean, bone mass |

### Skin Findings in Systemic Disease

**Dermatologic Clues:**
| Finding | Consider |
|---------|----------|
| Acanthosis nigricans | Insulin resistance, malignancy |
| Xanthomas | Hyperlipidemia |
| Spider angiomata | Cirrhosis, pregnancy |
| Petechiae | Thrombocytopenia, vasculitis |
| Livedo reticularis | Vasculitis, APLS, cholesterol emboli |
| Erythema nodosum | Sarcoidosis, IBD, infection |
| Pyoderma gangrenosum | IBD, RA, hematologic malignancy |
| Dermatomyositis (heliotrope, Gottron) | Malignancy screening indicated |`,
      keyTerms: [
        { term: 'APACHE II', definition: 'Acute Physiology and Chronic Health Evaluation; ICU severity scoring system predicting mortality' },
        { term: 'NEWS2', definition: 'National Early Warning Score; bedside tool for early detection of clinical deterioration' },
        { term: 'sarcopenia', definition: 'Age-related loss of skeletal muscle mass and function associated with adverse outcomes' },
        { term: 'Clinical Frailty Scale', definition: '9-point scale assessing fitness to frailty; predicts outcomes in elderly' },
        { term: 'acanthosis nigricans', definition: 'Velvety hyperpigmented skin in flexures; marker of insulin resistance or malignancy' },
      ],
      clinicalNotes: 'Frailty assessment should be routine in elderly patients - it predicts surgical outcomes, mortality, and guides goals-of-care discussions.',
    },
    5: {
      level: 5,
      summary: 'Expert-level general assessment encompasses rapid clinical pattern recognition, integration with prognostic tools, and application to complex decision-making including goals of care.',
      explanation: `## Expert Clinical Assessment

### Gestalt in Clinical Decision-Making

**Evidence for Clinical Gestalt:**
- "Gut feeling" correlates with outcomes
- Experienced clinicians integrate subtle cues
- Complements but doesn't replace systematic assessment
- Most valuable in undifferentiated presentations

**"Eyeball" Assessment Studies:**
- Nurse concern predicts deterioration
- "Looks sick" predicts ICU admission
- "I'm worried about this patient" improves early warning scores

### Rapid Assessment Frameworks

**Primary Survey (Trauma/Resuscitation):**
- A: Airway (with C-spine control)
- B: Breathing
- C: Circulation
- D: Disability (neurologic status)
- E: Exposure/Environment

**Pediatric Assessment Triangle:**
- Appearance: Tone, interactivity, consolability, look/gaze, speech/cry
- Work of breathing: Abnormal sounds, positioning, retractions
- Circulation to skin: Pallor, mottling, cyanosis

### Prognostic Assessment in Serious Illness

**"Surprise Question":**
"Would I be surprised if this patient died in the next 12 months?"
- If no: Consider palliative care consultation
- Sensitivity 76%, specificity 62% for 1-year mortality

**Trajectory Recognition:**
| Trajectory | Typical Course | Example |
|------------|----------------|---------|
| Sudden death | Full function → death | Fatal arrhythmia, massive PE |
| Terminal illness | Steady decline | Cancer |
| Organ failure | Exacerbations with partial recovery | COPD, CHF |
| Frailty | Slow decline, vulnerability to stressors | Dementia |

### Goals of Care Assessment

**Functional Status Implications:**
| Baseline | Prognosis Consideration |
|----------|-------------------------|
| Independent, active | Good reserve, likely to recover |
| Limited ADLs | May recover but slower |
| Dependent, declining | High mortality risk from acute illness |
| Bedbound, nonverbal | Consider comfort-focused care |

**Assessment Questions:**
- What was the patient's function 2 weeks ago?
- What is the trajectory (improving, stable, declining)?
- What are the patient's values and goals?
- What would the patient not want to live with?

### Complex Phenotyping

**Multiple Comorbidity Assessment:**
- Charlson Comorbidity Index
- Elixhauser Comorbidity Measure
- CCI predicts 10-year mortality

**Multimorbidity Patterns:**
| Cluster | Characteristics |
|---------|-----------------|
| Cardiometabolic | HTN, DM, dyslipidemia, CAD |
| Mental health | Depression, anxiety, chronic pain |
| Musculoskeletal | OA, back pain, osteoporosis |
| Respiratory | COPD, asthma, OSA |

### Assessment in Special Populations

**Critically Ill:**
- Systematic head-to-toe
- Integration with monitoring data
- Serial assessment for trends
- Recognition of deterioration vs. improvement

**Palliative Care:**
- Symptom burden assessment
- Performance status
- Prognostic awareness
- Care preference documentation

**Trauma:**
- Mechanism of injury consideration
- Occult injury recognition
- Reassessment after resuscitation

### Documentation Standards

**General Survey Documentation:**
\`\`\`
General: Alert, appears stated age, well-developed, well-nourished,
in no acute distress. Dressed appropriately, good hygiene.
Sitting comfortably in bed. Makes good eye contact.
\`\`\`

**Concerning Documentation:**
\`\`\`
General: Alert but appears acutely ill. Appears older than stated age.
Cachectic habitus with temporal wasting. Lying still, splinting
right abdomen. Diaphoretic, pale. Unable to speak in full sentences.
\`\`\`

### Teaching and Learning

**Observation Skills:**
- Conscious observation practice
- Pattern library building
- Gestalt calibration with outcomes
- Learning from experts

**Clinical Reasoning:**
- Hypothesis generation from appearance
- Bayesian updating with examination
- Integration of all data sources
- Recognition of cognitive biases

### Quality and Safety

**High-Reliability Practices:**
- Standardized handoffs including gestalt
- "Worried about this patient" escalation
- Closed-loop communication
- Team situational awareness

**Diagnostic Error Prevention:**
- Anchor on first impression cautiously
- Consider alternatives systematically
- Reconcile gestalt with data
- "What could I be missing?"`,
      keyTerms: [
        { term: 'surprise question', definition: 'Prognostic tool asking if death within 12 months would be surprising; identifies candidates for palliative care' },
        { term: 'illness trajectory', definition: 'Typical pattern of functional decline preceding death: sudden, terminal, organ failure, or frailty' },
        { term: 'Charlson Comorbidity Index', definition: 'Weighted score of comorbidities predicting 10-year mortality' },
        { term: 'clinical gestalt', definition: 'Intuitive clinical judgment integrating pattern recognition and experience' },
        { term: 'Pediatric Assessment Triangle', definition: 'Rapid assessment framework evaluating appearance, work of breathing, and circulation' },
      ],
      clinicalNotes: `Clinical Pearls:
1. If your gut says "sick," act on it - clinical gestalt has evidence basis
2. The Surprise Question helps identify patients who may benefit from palliative care
3. Baseline functional status is the strongest predictor of outcomes in acute illness
4. Document concerning findings specifically - "ill-appearing" needs details
5. Serial assessment more valuable than single snapshot - trend is key
6. Frailty assessment should be standard in elderly surgical and critically ill patients
7. "Eyeball test" failure should lower threshold for aggressive evaluation`,
    },
  },

  media: [
    {
      id: 'body-habitus-types',
      type: 'diagram',
      filename: 'body-habitus.svg',
      title: 'Body Habitus Types',
      description: 'Visual comparison of ectomorphic, mesomorphic, and endomorphic body types',
    },
    {
      id: 'characteristic-facies',
      type: 'diagram',
      filename: 'characteristic-facies.svg',
      title: 'Characteristic Facies',
      description: 'Examples of recognizable facial appearances in various conditions',
    },
  ],

  citations: [
    {
      id: 'bates-general-survey',
      type: 'textbook',
      title: 'Beginning the Physical Examination: General Survey',
      source: 'Bates\' Guide to Physical Examination and History Taking',
      chapter: '4',
    },
    {
      id: 'degowin',
      type: 'textbook',
      title: 'DeGowin\'s Diagnostic Examination',
      source: 'McGraw-Hill Medical',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'sibling', label: 'Vital Signs' },
    { targetId: 'physical-exam-general-survey-mental-status', targetType: 'topic', relationship: 'sibling', label: 'Mental Status' },
    { targetId: 'condition-malnutrition', targetType: 'condition', relationship: 'related', label: 'Malnutrition' },
  ],

  tags: {
    systems: ['general'],
    topics: ['physical-examination', 'clinical-skills', 'diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default generalAppearance;
