/**
 * Endocrine Emergencies - Comprehensive Educational Content
 */

import { EducationalContent } from '../../../types';

export const endocrineEmergencies: EducationalContent = {
  id: 'clinical-endocrine-emergencies',
  type: 'concept',
  name: 'Endocrine Emergencies',
  alternateNames: ['Acute Endocrine Disorders', 'Endocrine Crisis', 'Metabolic Emergencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Endocrine emergencies are serious, life-threatening conditions caused by severe hormone imbalances that require immediate medical treatment.',
      explanation: `Some hormone problems can become emergencies and need immediate medical care. These are life-threatening situations.

**Common endocrine emergencies:**
- Diabetic ketoacidosis (DKA): Severe high blood sugar
- Thyroid storm: Severe overactive thyroid
- Myxedema coma: Severe underactive thyroid
- Adrenal crisis: Severe adrenal insufficiency
- Severe low blood sugar (hypoglycemia)
- Pituitary apoplexy: Sudden pituitary bleeding

**Warning signs:**
- Extreme confusion or drowsiness
- Severe weakness
- Difficulty breathing
- Very high or very low blood pressure
- Fever or very low body temperature
- Severe vomiting

**What to do:**
- Call emergency services (911)
- Do not wait to see if it gets better
- These conditions can be fatal without treatment
- Hospital intensive care often needed

**Prevention:**
- Take medications as prescribed
- Regular medical checkups
- Medical alert bracelet
- Emergency plan and contact information`,
      keyTerms: [
        { term: 'endocrine emergency', definition: 'A life-threatening hormone imbalance requiring immediate treatment' },
        { term: 'DKA', definition: 'Diabetic ketoacidosis; severe high blood sugar emergency' },
        { term: 'adrenal crisis', definition: 'Life-threatening lack of cortisol' },
      ],
      analogies: [
        'Endocrine emergencies are like an overheated engine that is about to seize up - the system has gone beyond normal limits and needs immediate intervention.',
      ],
      examples: [
        'A person with known adrenal insufficiency gets a serious infection and becomes confused with low blood pressure - this is adrenal crisis needing emergency treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endocrine emergencies include DKA, HHS, thyroid storm, myxedema coma, adrenal crisis, and pituitary apoplexy. Rapid recognition, supportive care, and specific hormone replacement or suppression are life-saving.',
      explanation: `## Overview of Emergencies

| Emergency | Key Feature | Immediate Action |
|-----------|-------------|------------------|
| DKA | Ketoacidosis, hyperglycemia | Insulin, fluids, electrolytes |
| HHS | Severe hyperosmolarity | Fluids, insulin |
| Thyroid storm | Hypermetabolic state | Beta-blockers, antithyroids, cooling |
| Myxedema coma | Hypometabolic state | IV levothyroxine + hydrocortisone |
| Adrenal crisis | Hypotension, shock | Hydrocortisone IV, fluids |
| Pituitary apoplexy | Sudden headache, vision | Corticosteroids, possible surgery |
| Severe hypoglycemia | Neuroglycopenia | Glucose administration |

## General Approach

**ABCs:**
- Airway protection if altered
- Breathing support if needed
- Circulation support

**Immediate Labs:**
- Glucose
- Electrolytes
- Cortisol
- TSH, free T4
- ABG

**Monitoring:**
- Vital signs
- Cardiac monitoring
- Urine output
- Glucose monitoring

## Diagnostic Clues

**Hypermetabolic:**
- Fever, tachycardia
- Thyroid storm
- Pheochromocytoma crisis

**Hypometabolic:**
- Hypothermia, bradycardia
- Myxedema coma
- Adrenal crisis (can have fever)

**Hypoglycemia:**
- Neuroglycopenic symptoms
- Seizures, altered mental status

**Hypertension:**
- Thyroid storm
- Pheochromocytoma crisis
- Hyperaldosteronism

**Hypotension:**
- Adrenal crisis
- Myxedema coma
- Pituitary apoplexy`,
      keyTerms: [
        { term: 'thyroid storm', definition: 'Life-threatening hyperthyroidism' },
        { term: 'myxedema coma', definition: 'Life-threatening hypothyroidism' },
        { term: 'pituitary apoplexy', definition: 'Acute pituitary hemorrhage or infarction' },
      ],
    },
    3: {
      level: 3,
      summary: 'Management of endocrine emergencies requires rapid diagnosis, intensive supportive care, and specific therapies including IV hydrocortisone for adrenal crisis, propylthiouracil and iodine for thyroid storm, and IV levothyroxine with hydrocortisone for myxedema coma.',
      explanation: `## Thyroid Storm

**Precipitants:**
- Infection, surgery, trauma
- Iodine exposure
- Medication non-compliance
- Parturition

**Burch-Wartofsky Criteria:**
- Score >25: Storm likely
- Score 25-44: Imminent storm
- Score >=45: Storm

**Treatment:**
1. Beta-blocker (propranolol 60-80 mg q4h)
2. Antithyroid drug (PTU preferred - blocks conversion)
3. Iodine (1 hour after ATD)
4. Hydrocortisone
5. Supportive: Cooling (no aspirin), fluids, treat precipitant

## Myxedema Coma

**Features:**
- Altered mental status
- Hypothermia
- Hypoventilation
- Bradycardia
- Hyponatremia
- Hypoglycemia

**Treatment:**
1. IV levothyroxine 200-400 mcg loading
2. Hydrocortisone 50-100 mg IV (first!)
3. Supportive: Passive warming, ventilatory support
4. IV fluids (careful - risk of water intoxication)
5. Treat precipitant

**Mortality:** 30-40%

## Adrenal Crisis

**Presentation:**
- Shock (refractory to fluids/pressors)
- Abdominal pain
- Fever
- Confusion
- Hyponatremia, hyperkalemia
- Hypoglycemia

**Treatment:**
1. Hydrocortisone 100 mg IV bolus
2. Hydrocortisone 200 mg/day continuous or divided
3. Aggressive fluid resuscitation (D5NS if hypoglycemic)
4. Treat underlying trigger

**DO NOT wait for labs to treat**

## Pituitary Apoplexy

**Presentation:**
- Sudden severe headache
- Vision loss (bitemporal hemianopsia)
- Ophthalmoplegia
- Altered mental status

**Treatment:**
1. Hydrocortisone 100 mg IV (cortisol deficiency common)
2. Urgent neurosurgery consult
3. Surgery if:
   - Visual impairment
   - Deteriorating consciousness
   - Medical therapy fails
4. Conservative if mild

## Severe Hypoglycemia

**Treatment:**
1. Glucose 15-20g orally if awake
2. Glucagon 1 mg IM if unconscious
3. D50 IV if no IV access
4. D10 infusion to maintain
5. Identify cause

**Prevention:**
- Education
- Glucagon kit
- Continuous glucose monitoring`,
      keyTerms: [
        { term: 'Burch-Wartofsky criteria', definition: 'Scoring system for thyroid storm' },
        { term: 'neuroglycopenia', definition: 'Brain dysfunction from low glucose' },
        { term: 'water intoxication', definition: 'Dangerous hyponatremia from excess water' },
      ],
      clinicalNotes: 'Always give hydrocortisone BEFORE levothyroxine in myxedema coma to avoid precipitating adrenal crisis.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of endocrine emergencies includes intensive care monitoring, management of refractory cases, post-emergency stabilization, and prevention strategies including patient education and emergency action plans.',
      explanation: `## Intensive Care Management

**Hemodynamic Support:**
- Arterial line
- Central venous access
- Vasopressors if needed
- Fluid management

**Respiratory Support:**
- ABG monitoring
- Mechanical ventilation if needed
- Common in myxedema, severe DKA

**Temperature Management:**
- Active cooling for thyroid storm
- Passive warming for myxedema
- Avoid rapid temperature changes

**Glucose Management:**
- Insulin protocols for DKA/HHS
- Frequent glucose checks
- Prevent hypoglycemia

## Special Populations

**Pregnancy:**
- Physiologic changes affect presentation
- PTU preferred in first trimester
- Continue hydrocortisone
- Higher risk for thyroid storm

**Pediatrics:**
- Dosing adjustments
- DKA more common
- Different precipitants

**Elderly:**
- Atypical presentations
- Higher mortality
- Comorbidities complicate care

## Post-Emergency Care

**Transition:**
- ICU to floor
- Oral medications when stable
- Education

**Prevention:**
- Medication compliance
- Stress dose education
- Medical alert identification
- Emergency kit

**Follow-up:**
- Endocrinology referral
- Adjust chronic medications
- Address precipitating factors

## Prevention Strategies

**Patient Education:**
- Sick day rules
- When to seek emergency care
- Emergency contact information

**Medical Alert:**
- Bracelet or necklace
- Wallet card
- Emergency information

**Emergency Kits:**
- Glucagon for diabetics
- Injectable hydrocortisone
- Instructions

**Caregiver Training:**
- Recognition of emergencies
- Emergency response
- When to call 911`,
      keyTerms: [
        { term: 'sick day rules', definition: 'Instructions for managing illness with endocrine disorders' },
        { term: 'stress dose', definition: 'Increased glucocorticoid during stress' },
        { term: 'medical alert', definition: 'Identification indicating medical condition' },
      ],
      clinicalNotes: 'Post-emergency education and prevention strategies are critical - many endocrine emergencies are preventable with proper patient education and preparation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endocrine emergency care integrates standardized protocols, simulation training, biomarker-guided therapy, and telemedicine support while developing better prevention and early warning systems.',
      explanation: `## Protocol Development

**Standardized Orders:**
- DKA protocols
- Thyroid storm order sets
- Adrenal crisis pathways
- Reduce errors

**Checklists:**
- Systematic approach
- Ensure nothing missed
- Team communication

**Quality Metrics:**
- Time to treatment
- Complication rates
- Mortality tracking

## Simulation Training

**Scenarios:**
- Thyroid storm
- Adrenal crisis
- DKA management
- Team coordination

**Benefits:**
- Practice rare events
- Improve response time
- Interprofessional education

## Biomarkers

**Point-of-Care Testing:**
- Cortisol (emerging)
- Glucose
- Ketones
- Faster diagnosis

**Novel Markers:**
- Copeptin (adrenal)
- Procalcitonin (infection)
- Guide therapy

## Telemedicine

**Remote Support:**
- Endocrinologist consultation
- Guidance for rural hospitals
- Transfer decisions

**Monitoring:**
- Post-discharge follow-up
- Early detection of problems

## Research Directions

**Improved Therapies:**
- New formulations
- Faster acting agents
- Better outcomes

**Prediction Models:**
- Risk stratification
- Early warning systems
- Prevent decompensation

**Artificial Intelligence:**
- Pattern recognition
- Early diagnosis
- Treatment guidance

## Education and Advocacy

**Patient Organizations:**
- Emergency preparedness
- Education materials
- Support networks

**Healthcare Provider Education:**
- Recognition of emergencies
- Updated guidelines
- Simulation training

**Policy:**
- Access to emergency medications
- Insurance coverage
- Emergency care standards`,
      keyTerms: [
        { term: 'order sets', definition: 'Standardized electronic orders for conditions' },
        { term: 'copeptin', definition: 'Biomarker for adrenal function' },
        { term: 'point-of-care testing', definition: 'Immediate testing at patient location' },
      ],
      clinicalNotes: 'Standardized protocols and simulation training improve outcomes in rare endocrine emergencies by ensuring rapid, appropriate treatment even when specialists are not immediately available.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-emergencies-2020',
      type: 'article',
      title: 'Endocrine Emergencies: Recognition and Management',
      source: 'Critical Care Clinics',
      authors: ['Rushworth RL', 'Torpy DJ', 'Falhammar H'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-thyroid-storm', targetType: 'condition', relationship: 'related', label: 'Thyroid Storm' },
    { targetId: 'condition-adrenal-crisis', targetType: 'condition', relationship: 'related', label: 'Adrenal Crisis' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'critical care', 'emergency medicine'],
    keywords: ['endocrine emergency', 'thyroid storm', 'adrenal crisis', 'myxedema coma'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency medicine', 'critical care'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default endocrineEmergencies;
