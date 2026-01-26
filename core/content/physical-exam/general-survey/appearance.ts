/**
 * General Appearance Assessment - Physical Examination
 *
 * Comprehensive content on assessing patient appearance during the general survey,
 * including signs of distress, body habitus, and overall health status.
 */

import { EducationalContent } from '../../types';

export const appearanceAssessment: EducationalContent = {
  id: 'physical-exam-general-survey-appearance',
  type: 'concept',
  name: 'General Appearance Assessment',
  alternateNames: ['Appearance', 'General Survey', 'Patient Appearance'],

  levels: {
    1: {
      level: 1,
      summary: 'Looking at a person can tell you a lot about how they are feeling and how sick they might be.',
      explanation: `When you first meet someone, you can learn a lot just by looking at them. Doctors do this too - it's called observing their appearance.

**What Doctors Look For:**

**How Sick Do They Look?**
- Does the person look very sick or mostly healthy?
- Are they in pain or uncomfortable?
- Are they tired and weak, or full of energy?

**Body Size and Shape:**
- Is their body size normal, very thin, or very heavy?
- Being very thin might mean they're not eating enough
- Being very heavy can cause health problems

**How They Move and Act:**
- Can they walk and move easily?
- Do they seem confused or clear-headed?
- Are they breathing easily or having trouble?

**How They Look:**
- Is their skin color normal (not too pale, not too red)?
- Do they look clean and cared for?
- Do their clothes fit their situation?

These observations help doctors understand how a person is feeling and what might be wrong.

**Important:** Always be respectful and kind when observing people.`,
      keyTerms: [
        { term: 'general survey', definition: 'Looking at the whole person to understand their overall health' },
        { term: 'appearance', definition: 'How someone looks on the outside' },
        { term: 'body habitus', definition: 'The general shape and size of a person\'s body' },
        { term: 'distress', definition: 'Showing signs of pain, discomfort, or trouble' },
      ],
      analogies: [
        'Assessing appearance is like looking at a car - you can tell if something might be wrong just by looking at the outside.',
        'Doctors are like detectives looking for clues about how someone is feeling.',
      ],
      examples: [
        'Someone who looks very pale and sweaty might be in pain or feeling faint.',
        'A person who is breathing hard and can\'t lie flat might have heart or lung problems.',
        'Someone who seems confused might be very sick or have a problem with their brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'The general appearance assessment provides immediate information about a patient\'s overall health status, severity of illness, and potential underlying conditions.',
      explanation: `## Elements of General Appearance Assessment

**Overall Appearance:**
- **Appearance of health vs. illness**: Does the patient look well or unwell?
- **Level of distress**: Is the patient comfortable or in obvious discomfort?
- **Level of consciousness**: Alert, drowsy, confused, or unresponsive?

**Body Habitus:**
- **Body mass index (BMI) category**: Underweight, normal, overweight, obese
- **Muscle mass**: Well-developed, normal, or wasted
- **Body proportions**: Normal or abnormal (e.g., limb length discrepancies)

**Posture and Position:**
- **Sitting position**: Relaxed, leaning forward (respiratory distress), tripod position
- **Ability to lie flat**: Orthopnea (difficulty breathing when lying down)
- **Gait**: Normal, impaired, or requires assistance

**Grooming and Hygiene:**
- **Personal cleanliness**: Well-groomed, disheveled, or neglected
- **Appropriate dress**: Suitable for weather and setting
- **Self-care indicators**: Suggests functional status

## Common Findings and Their Significance

| Appearance Finding | Possible Significance |
|-------------------|----------------------|
| Pale, diaphoretic | Shock, hypoglycemia, acute illness |
| Cachectic, wasted | Cancer, chronic disease, malnutrition |
| Obese | Metabolic syndrome, sleep apnea risk |
| Cyanotic (blue) | Hypoxia, respiratory or cardiac failure |
| Jaundiced (yellow) | Liver disease, hemolysis |
| Edematous (swollen) | Heart failure, kidney disease, liver disease |
| Tremulous | Anxiety, alcohol withdrawal, thyroid disease |

## Signs of Respiratory Distress
- Use of accessory muscles
- Nasal flaring
- Tripod position (sitting, leaning forward)
- Ability to speak in full sentences vs. short phrases`,
      keyTerms: [
        { term: 'body habitus', definition: 'The general build, shape, and physical structure of the body', pronunciation: 'HAB-ih-tus' },
        { term: 'cachectic', definition: 'Appearing extremely thin and wasted, usually from serious illness', pronunciation: 'kuh-KEK-tik' },
        { term: 'cyanosis', definition: 'Bluish discoloration of the skin from low oxygen', pronunciation: 'sy-ah-NO-sis' },
        { term: 'orthopnea', definition: 'Difficulty breathing when lying flat', pronunciation: 'or-THOP-nee-ah' },
        { term: 'tripod position', definition: 'Sitting leaning forward with arms supported; classic sign of respiratory distress' },
      ],
      analogies: [
        'The general survey is like the introduction to a book - it sets the tone for everything that follows.',
        'Appearance assessment is like looking at the "check engine" light - it tells you something needs attention.',
      ],
    },
    3: {
      level: 3,
      summary: 'Systematic assessment of general appearance integrates multiple observations to estimate disease severity, identify acute distress, and recognize patterns associated with specific clinical conditions.',
      explanation: `## Systematic Approach to General Appearance

**Immediate Assessment (The "Doorway" Assessment):**
1. Level of consciousness and orientation
2. Respiratory effort and distress
3. Circulatory status (shock signs)
4. Pain or discomfort level
5. Overall severity of illness

## Detailed Assessment Components

**Consciousness and Cognition:**
| Level | Description | Clinical Significance |
|-------|-------------|----------------------|
| Alert | Fully awake, interactive | Normal |
| Lethargic | Drowsy, falls asleep easily | Metabolic, toxic, infectious causes |
| Obtunded | Limited responsiveness, requires stimulation | More severe encephalopathy |
| Stuporous | Arouses only to painful stimuli | Critical illness |
| Comatose | No response to stimuli | Neurological catastrophe |

**Respiratory Distress Indicators:**
- **Respiratory rate**: >20 breaths/minute suggests distress
- **Accessory muscle use**: SCM, scalene, intercostal recruitment
- **Abdominal paradox**: Abdomen moves in during inspiration (diaphragm fatigue)
- **Inability to lie supine**: Orthopnea class indicates heart failure severity
- **Speech**: Full sentences, short phrases, or single words (越来越严重)

**Cardiovascular Shock Signs:**
- Pallor, cool/clammy skin
- Diaphoresis
- Altered mental status
- Weak/thready pulse
- Capillary refill >2 seconds

## Body Habitus Classification

**Nutritional Status Assessment:**
| Category | BMI | Physical Findings |
|----------|-----|-------------------|
| Severe underweight | <16.5 | Muscle wasting, fat loss, prominent bones |
| Underweight | 16.5-18.5 | Decreased fat stores, some muscle loss |
| Normal | 18.5-25 | Balanced fat and muscle distribution |
| Overweight | 25-30 | Increased adipose tissue |
| Obese | 30-35 | Markedly increased fat, strain on joints |
| Morbidly obese | >35 | Severe fat accumulation, mobility impairment |

**Specific Body Habitus Patterns:**
- **Asthenic**: Thin, tall, fragile appearance
- **Pyknic**: Stocky, round, muscular build
- **Habitual**: Normal proportional development

## Dermatologic Clues from Appearance

**Skin Color Changes:**
- **Pallor**: Anemia, vasoconstriction, shock
- **Flushed**: Fever, hyperthyroidism, alcohol use
- **Cyanosis**: Hypoxia (central: tongue/lips; peripheral: extremities)
- **Jaundice**: Hepatocellular disease, hemolysis, obstruction
- **Bronze skin**: Hemochromatosis, adrenal insufficiency (Addison's)

**Skin Quality:**
- **Xerosis**: Dry skin (dehydration, hypothyroidism)
- **Decreased turgor**: Poor skin elasticity (dehydration, aging)
- **Petechiae/purpura**: Bleeding disorders, vasculitis
- **Ecchymoses**: Bruising (coagulopathy, trauma)`,
      keyTerms: [
        { term: 'accessory muscles', definition: 'Secondary respiratory muscles (SCM, scalenes) used during labored breathing' },
        { term: 'abdominal paradox', definition: 'Abdomen moves inward during inspiration; indicates diaphragmatic fatigue' },
        { term: 'capillary refill', definition: 'Time for color to return after blanching; normal is <2 seconds' },
        { term: 'cyanosis (central vs peripheral)', definition: 'Central: tongue/lips (more serious); Peripheral: extremities (may be benign)' },
        { term: 'petechiae', definition: 'Small red/purple spots from bleeding under skin; don\'t blanch with pressure', pronunciation: 'puh-TEE-kee-ee' },
        { term: 'xerosis', definition: 'Abnormally dry skin', pronunciation: 'zee-RO-sis' },
      ],
      clinicalNotes: 'Central cyanosis (tongue, lips) is more concerning than peripheral cyanosis. A patient can be hypoxic without visible cyanosis - always check oxygen saturation.',
    },
    4: {
      level: 4,
      summary: 'Advanced interpretation of general appearance integrates pathophysiological understanding of distress states, nutritional assessment, and recognition of syndrome-specific patterns that guide immediate clinical decision-making.',
      explanation: `## Clinical Syndromes Recognized by Appearance

### Shock Syndromes

**Hypovolemic Shock:**
- Pale, cool, clammy skin
- Thready pulse, delayed capillary refill
- Flat neck veins (unless concomitant cardiac disease)
- Altered mental status (late finding)

**Cardiogenic Shock:**
- Diaphoresis prominent
- Pale or ashen appearance
- Distended neck veins (if right heart failure)
- Pulmonary edema signs (crackles, frothy sputum)

**Distributive Shock (Septic):**
- Warm, flushed skin (early)
- May appear acutely ill with normal skin perfusion
- Later: cool extremities with mottling

**Obstructive Shock:**
- Tamponade: Beck triad (muffled heart sounds, JVD, hypotension)
- PE: Dyspnea, tachycardia, pleuritic pain

### Respiratory Failure Patterns

**Type 1 Respiratory Failure (Hypoxemic):**
- Central cyanosis
- Confusion, restlessness
- Accessory muscle use
- Tripod positioning common

**Type 2 Respiratory Failure (Hypercapnic):**
- Air hunger (CO2 narcosis)
- Asterixis (flapping tremor)
- Headache, confusion progressing to coma
- Warm, flushed skin (vasodilation from CO2)

**Acute Pulmonary Edema:**
- Terrified appearance ("air hunger")
- Sitting upright, leaning forward
- Diaphoresis, cyanosis possible
- Frothy, pink-tinged sputum

### Endocrine and Metabolic Appearances

**Thyrotoxicosis:**
- Staring, lid lag, exophthalmos (if Graves)
- Fine tremor, hyperkinetic movements
- Warm, moist skin
- Weight loss despite increased appetite
- Atrial fibrillation signs

**Myxedema (Hypothyroidism):**
- Coarse facial features, puffy appearance
- Dry, cool skin with myxedema (non-pitting edema)
- Slow movements, delayed relaxation of reflexes
- Macroglossia, hoarse voice
- Hypothermia possible

**Cushing Syndrome:**
- Moon facies, central obesity
- Thin, fragile skin with easy bruising
- Buffalo hump (dorsocervical fat pad)
- Proximal muscle wasting
- Purple striae

**Acromegaly:**
- Coarse facial features (brow, nose, chin)
- Enlarged hands and feet
- Macroglossia
- Skin thickening, oily

### Nutritional and Metabolic States

**Malnutrition:**
- Temporal wasting, hollow cheeks
- Clavicle and bone prominence
- Muscle atrophy (interosseous, temporalis)
- Skin: Dry, loose, poor turgor
- Hair: Dry, brittle, easily pluckable
- Edema possible (kwashiorkor pattern)

**Obesity-Related Findings:**
- Acanthosis nigricans (insulin resistance)
- Striae (abdomen, axillae, thighs)
- Skin tags (multiple)
- Panniculus (overhanging abdominal fold)
- Joint changes (osteoarthritis)

### Specific Disease Patterns

**Chronic Liver Disease:**
- Jaundice, spider angiomas
- Gynecomastia, testicular atrophy
- Loss of male body hair
- Pale, leathery skin
- Dupuytren contracture possible
**Marfan Syndrome:**
- Tall, asthenic body habitus
- Arm span > height
- Arachnodactyly (long, slender fingers)
- Pectus excavatum or carinatum
- High-arched palate, lens dislocation

**Turner Syndrome:**
- Short stature, webbed neck
- Lymphedema of hands/feet
- Wide-spaced nipples
**Down Syndrome:**
- Up-slanting palpebral fissures
- Epicanthal folds
- Flat nasal bridge
- Single palmar crease
**Noonan Syndrome:**
- Webbed neck, ptosis
- Low-set ears
- Short stature

## Pain Assessment by Appearance

**Pain Severity Clues:**
- Guarding (protecting painful area)
- Facial grimacing
- Restlessness or immobility
- Diaphoresis
- Tachycardia, hypertension (acute pain)
- Hypotension, bradycardia (severe pain/vasovagal)

## Functional Status Assessment

**ADL/IADL Clues from Appearance:**
- Grooming: Self-care ability
- Dressing: Fine motor, cognitive function
- Mobility: Musculoskeletal, neurological status
- Social engagement: Mood, cognitive function`,
      keyTerms: [
        { term: 'orthopnea class', definition: 'Number of pillows needed to breathe comfortably; higher class = worse heart failure' },
        { term: 'paradoxical breathing', definition: 'Chest wall moves inward during inspiration; indicates respiratory muscle fatigue' },
        { term: 'air hunger', definition: 'Severe sensation of breathlessness; subjective feeling of need to breathe' },
        { term: 'asterixis', definition: 'Flapping tremor of hands; metabolic encephalopathy sign (CO2 retention, liver failure)', pronunciation: 'as-ter-EK-sis' },
        { term: 'moon facies', definition: 'Rounded, full facial appearance characteristic of Cushing syndrome' },
        { term: 'acanthosis nigricans', definition: 'Dark, velvety skin patches in body folds; marker of insulin resistance', pronunciation: 'ay-kan-THO-sis NY-gruh-kans' },
      ],
      clinicalNotes: 'Never rely solely on appearance for severity assessment. A patient can look "well" and be critically ill (e.g., early sepsis, pulmonary embolism). Vitals and objective data are essential.',
    },
    5: {
      level: 5,
      summary: 'Expert-level appearance assessment integrates pattern recognition with pathophysiologic correlation, enabling rapid identification of occult illness, prognostic assessment, and initiation of targeted interventions based on visual cues alone.',
      explanation: `## Subtle Signs of Critical Illness

### The "Sick Patient" Recognition

**Early Deterioration Signs:**
- **"Sick non-specific" appearance**: Something just "not right"
- Change in baseline appearance (known patients)
- Subtle agitation or withdrawal
- Decreased interaction with environment
- Vital signs at extremes of normal or slightly abnormal

**High-Risk Appearance Patterns:**
| Pattern | Clinical Significance | Action |
|---------|---------------------|--------|
| "Crashing" | Imminent deterioration | RAPID RESPONSE |
| Toxic appearance | Sepsis likely | Early sepsis workup |
| Lethargic + ill-appearing | Serious infection/metabolic | Comprehensive evaluation |
| Comfortable-appearing | Low acuity (usually) | Continue assessment |

### Prognostic Appearance Indicators

**Framingham Risk Appearance:**
- Premature aging suggests vascular disease
- Xanthelasmas (cholesterol deposits)
- Corneal arcus in younger patients
- Peripheral vascular disease signs

**Chronic Disease Burden:**
- Clubbing (cardiopulmonary disease)
- Dupuytren contracture (liver disease, manual labor)
- Nicotine staining (addiction, COPD risk)
- Track marks (injection drug use)

### Neuropsychiatric Appearance Patterns

**Acute Psychiatric Presentation:**
- **Mania**: Pressured speech, hyperactive, disheveled
- **Depression**: Psychomotor retardation, poor grooming, flat affect
- **Psychosis**: Disorganized behavior, poor hygiene, inappropriate responses
- **Catatonia**: Waxy flexibility, stupor, abnormal postures

**Delirium vs Dementia:**
| Feature | Delirium | Dementia |
|---------|----------|----------|
| Onset | Acute (hours-days) | Insidious (months-years) |
| Course | Fluctuating | Progressive |
| Attention | Impaired | Normal until late |
| Consciousness | Altered | Normal |
| Appearance | Acutely ill, distressed | Varies by stage |

### Geriatric-Specific Appearance Assessment

**Frailty Indicators (Fried Phenotype):**
1. Unintentional weight loss
2. Exhaustion
3. Weakness (grip strength)
4. Slow walking speed
5. Low physical activity

**Geriatric Syndromes on Appearance:**
- Falls: Bruising, skin tears, fractures
- Elder mistreatment: Poor hygiene despite capacity, unexplained injuries
- Failure to thrive: Weight loss, muscle wasting, functional decline
**Pressure injury risk**: Limited mobility, poor nutrition, incontinence

### Substance Use Appearance Signs

**Alcohol Use Disorder:**
- Rhinophyma (rosacea, enlarged nose)
- Parotid enlargement
- Dupuytren contracture
- Peripheral neuropathy signs
- Abdominal wall varices (caput medusae)

**Injection Drug Use:**
- Track marks (arm, leg, neck veins)
- Scarred veins
- Sclerosed veins
- Abscesses, cellulitis

**Stimulant Use:**
- Dilated pupils, tachycardia
- Tremor, bruxism (tooth grinding)
- Malnutrition, weight loss
- Skin picking (methamphetamine)

### Integrative Appearance Assessment

**The "Doorway Diagnosis" Approach:**
1. Immediate life threat recognition (<10 seconds)
   - Airway, breathing, circulation, altered mental status
2. General health and severity estimate (<30 seconds)
   - Sick vs. non-sick appearance
   - Level of distress
   - Functional status
3. Pattern recognition for specific conditions
   - Syndrome-specific features
   - Chronic disease burden
   - Social determinants indicators

**Documentation Standards:**
- "Well-developed, well-nourished, no acute distress" (classic normal)
- "Ill-appearing, lethargic, appears dehydrated"
- "Comfortable at rest, in no acute distress"
- "Toxic-appearing, diaphoretic, appears unwell"

### Cultural Considerations in Appearance

**Avoid Bias by Recognizing:**
- Normal variation in body types across ethnicities
- Cultural dress and grooming norms
- Sociodemographic factors affecting appearance
- Baseline appearance varies individually

**Red Flags for Neglect or Abuse:**
- Poor hygiene inconsistent with capacity
- Unexplained injuries in various stages of healing
- Inappropriate clothing for situation
- Malnutrition without medical cause`,
      keyTerms: [
        { term: 'toxic appearance', definition: 'Appears acutely and seriously ill; sepsis warning sign' },
        { term: 'Fried phenotype', definition: 'Five criteria defining physical frailty syndrome in geriatrics' },
        { term: 'rhinophyma', definition: 'Enlarged, red, bumpy nose; associated with rosacea and alcohol use', pronunciation: 'rye-no-FY-mah' },
        { term: 'caput medusae', definition: 'Dilated periumbilical veins from portal hypertension', pronunciation: 'KAP-it me-DEE-see' },
        { term: 'xanthelasma', definition: 'Yellow cholesterol deposits around eyelids; lipid disorder marker', pronunciation: 'zan-the-LAZ-mah' },
        { term: 'clubbing', definition: 'Fingertip enlargement with nail angle loss; cardiopulmonary disease sign' },
      ],
      clinicalNotes: `Expert Clinical Pearls:
1. "Comfortable at rest" is deceptive - always correlate with vitals and lab values
2. The "toxic appearance" predicts bacteremia/sepsis better than fever alone
3. Changes from baseline (for known patients) are more significant than single exam findings
4. Appearance + vitals = better mortality prediction than either alone
5. When appearance doesn't match vitals, believe the vitals - appearance is subjective
6. Geriatric patients may not mount tachycardia despite serious illness - pay attention to appearance
7. "Something just doesn't look right" is a valid clinical observation requiring further investigation`,
    },
  },

  media: [
    {
      id: 'body-habitus-types',
      type: 'diagram',
      filename: 'body-habitus-types.svg',
      title: 'Body Habitus Types',
      description: 'Illustration of asthenic, pyknic, and normal body types',
    },
    {
      id: 'shock-appearance',
      type: 'diagram',
      filename: 'shock-appearance.svg',
      title: 'Physical Signs of Shock',
      description: 'Visible signs of different types of shock',
    },
  ],

  citations: [
    {
      id: 'bates-general-survey',
      type: 'textbook',
      title: 'The Physical Examination: General Survey, Vital Signs',
      authors: ['Bickley, L.S.'],
      source: "Bates' Guide to Physical Examination and History Taking",
      chapter: '4',
    },
    {
      id: 'hurtado-general-appearance',
      type: 'article',
      title: 'The General Appearance of the Patient',
      authors: ['Hurtado, M.P.', 'Celenza, J.'],
      source: 'Medical Clinics of North America',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'related', label: 'Vital Signs' },
    { targetId: 'physical-exam-skin-inspection', targetType: 'topic', relationship: 'related', label: 'Skin Examination' },
    { targetId: 'condition-shock', targetType: 'condition', relationship: 'related', label: 'Shock States' },
  ],

  tags: {
    systems: ['general'],
    topics: ['physical-examination', 'clinical-assessment', 'patient-evaluation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default appearanceAssessment;
