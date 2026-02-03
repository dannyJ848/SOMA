/**
 * COPD (Chronic Obstructive Pulmonary Disease)
 *
 * Progressive airflow limitation from chronic inflammation.
 */

import { EducationalContent } from '../../types';

export const copdContent: EducationalContent = {
  id: 'pulmonology-copd',
  type: 'topic',
  name: 'COPD',
  alternateNames: ['Chronic Obstructive Pulmonary Disease', 'Emphysema', 'Chronic Bronchitis'],

  levels: {
    1: {
      level: 1,
      summary: "COPD is a lung disease that makes it hard to breathe. It's usually caused by smoking. The airways become blocked and lungs are damaged.",
      explanation: `## What Is COPD?

COPD stands for Chronic Obstructive Pulmonary Disease. It's a group of lung diseases that block airflow and make breathing difficult.

## Two Main Types

**Emphysema:**
- Damage to air sacs (alveoli)
- Air sacs become weak and stretch
- Old air gets trapped inside
- Makes it hard to get fresh air

**Chronic Bronchitis:**
- Constant inflammation of bronchial tubes
- Lots of mucus production
- Chronic cough
- Frequent infections

## What Causes COPD?

- Smoking (90% of cases)
- Secondhand smoke
- Air pollution
- Workplace dust and chemicals
- Rare genetic condition (alpha-1 antitrypsin)

## Common Symptoms

- Chronic cough (often called "smoker's cough")
- Lots of mucus (phlegm)
- Shortness of breath (worse with activity)
- Wheezing
- Chest tightness
- Frequent respiratory infections

## Treatment

- Stop smoking (most important!)
- Inhalers to open airways
- Oxygen therapy if needed
- Pulmonary rehabilitation
- Vaccinations (flu, pneumonia)
- Surgery in severe cases`,

      keyTerms: [
        { term: 'Alveoli', definition: 'Tiny air sacs in lungs where oxygen enters blood' },
        { term: 'Bronchial tubes', definition: 'Airways that carry air to lungs' },
        { term: 'Phlegm', definition: 'Thick mucus coughed up from lungs' },
        { term: 'Spirometry', definition: 'Breathing test to diagnose COPD' },
      ],
      analogies: [
        'Emphysema is like having old, stretched-out rubber bands where air sacs should be.',
        'COPD is like trying to breathe through a straw while walking.',
      ],
      examples: [
        'Long-time smoker with chronic cough and shortness of breath',
        'Person who gets winded climbing stairs',
        'Someone with frequent lung infections',
      ],
    },

    2: {
      level: 2,
      summary: 'COPD is defined by persistent airflow limitation on spirometry (FEV1/FVC <0.7). Smoking is primary cause. Treatment focuses on symptom relief, exacerbation prevention, and smoking cessation.',
      explanation: `## Diagnosis

**Spirometry (Required):**
- FEV1/FVC <0.7 after bronchodilator (post-bronchodilator)
- Irreversible or only partially reversible
- Classifies severity:
  - GOLD 1 (Mild): FEV1 ≥80%
  - GOLD 2 (Moderate): FEV1 50-79%
  - GOLD 3 (Severe): FEV1 30-49%
  - GOLD 4 (Very Severe): FEV1 <30%

**Other Findings:**
- Hyperinflation on CXR
- Flattened diaphragms
- Increased retrosternal airspace
- Pulmonary hypertension signs in late disease

## Clinical Presentation

**Chronic Bronchitis Predominant:**
- Productive cough ≥3 months/year for ≥2 years
- Cyanosis, edema ("blue bloater")
- Chronic hypoxemia, cor pulmonale

**Emphysema Predominant:**
- Dyspnea out of proportion to cough
- Weight loss (cachexia)
- Pink puffer (no cyanosis until late)
- Barrel chest

## Risk Factors

**Primary:**
- Cigarette smoking (pack-years × duration)
- Pipe, cigar, secondhand smoke

**Occupational:**
- Dust, chemicals, fumes
- Coal mining, construction

**Genetic:**
- Alpha-1 antitrypsin deficiency
- Consider if: early onset (<45), family history, basilar predominance

## Differential Diagnosis

- Asthma: Reversible, earlier onset
- CHF: Orthopnea, PND, cardiomegaly
- Bronchiectasis: Copious sputum, infections
- ILD: Restrictive pattern`,

      keyTerms: [
        { term: 'FEV1', definition: 'Forced Expiratory Volume in 1 second' },
        { term: 'FVC', definition: 'Forced Vital Capacity - total air exhaled' },
        { term: 'Cor pulmonale', definition: 'Right heart failure from lung disease' },
        { term: 'Barrel chest', definition: 'Rounded, bulging chest from hyperinflated lungs' },
      ],
      analogies: [
        'Cor pulmonale is like the right heart getting tired from pumping against stiff lungs.',
        'Barrel chest is like the chest is permanently expanded from trapped air.',
      ],
      examples: [
        '40-pack-year smoker with FEV1/FVC 0.65 diagnosed with COPD',
        'Young patient with emphysema screened for AAT deficiency',
        'Person with edema and cyanosis from cor pulmonale',
      ],
      clinicalNotes: 'Alpha-1 antitrypsin deficiency: Test all COPD patients OR at minimum: <45 years, family history, basilar emphysema. Replacement therapy available for deficiency. Smoking dramatically accelerates lung damage in AAT deficiency.',
    },

    3: {
      level: 3,
      summary: 'COPD treatment includes bronchodilators (LABA, LAMA), inhaled corticosteroids for exacerbations, oxygen for hypoxemia, and pulmonary rehabilitation. Smoking cessation is essential.',
      explanation: `## Pharmacologic Treatment

**Bronchodilators (Foundation):**

*LAMA (First-line):*
- Tiotropium, glycopyrrolate, umeclidinium
- Once-daily dosing
- Reduces exacerbations

*LABA:*
- Salmeterol, formoterol, vilanterol, olodaterol
- Twice-daily (except vilanterol, olodaterol)
- Never use alone in COPD

*LABA-LAMA:*
- More effective than either alone
- First-line for symptomatic patients

*LABA-ICS:*
- For patients with frequent exacerbations
- Increased pneumonia risk
- Blood eosinophils predict ICS response

**Other Medications:**
- Roflumilast: For severe COPD with chronic bronchitis
- Azithromycin: For frequent exacerbators
- Theophylline: Limited use now

## Oxygen Therapy

**Indications:**
- PaO2 ≤55 mmHg
- SpO2 ≤88%
- OR PaO2 56-59 mmHg with:
  - Cor pulmonale
  - Polycythemia
  - Pulmonary hypertension

**Prescription:**
- At least 15 hours/day (including sleep)
- Titrate to SpO2 88-92%

## Smoking Cessation

**Most Important Intervention:**
- Slows FEV1 decline
- Improves survival
- Pharmacotherapy: Varenicline, bupropion, NRT
- Counseling essential

## Pulmonary Rehabilitation**

**Components:**
- Exercise training
- Education
- Nutrition counseling
- Psychological support

**Benefits:**
- Improved exercise tolerance
- Reduced dyspnea
- Better QOL
- Fewer hospitalizations`,

      keyTerms: [
        { term: 'LAMA', definition: 'Long-Acting Muscarinic Antagonist' },
        { term: 'ICS', definition: 'Inhaled Corticosteroid' },
        { term: 'Polycythemia', definition: 'High red blood cell count from chronic hypoxemia' },
        { term: 'NRT', definition: 'Nicotine Replacement Therapy' },
      ],
      analogies: [
        'Blood eosinophils are like a test to see if steroids will help.',
        'Pulmonary rehab is like physical therapy for your lungs.',
      ],
      examples: [
        'Patient started on tiotropium once daily',
        'Person with SpO2 85% started on home oxygen',
        'Frequent exacerbator started on azithromycin MWF',
      ],
      clinicalNotes: 'Overuse of antibiotics in COPD contributes to resistance. Anthonisen criteria for antibiotic treatment of exacerbation: Increased dyspnea + increased sputum volume + increased sputum purulence. 2 of 3 = treat with antibiotics.',
    },

    4: {
      level: 4,
      summary: 'COPD exacerbations are acute worsenings requiring increased bronchodilators, steroids, and sometimes antibiotics. Prevention includes vaccinations, smoking cessation, and appropriate maintenance therapy.',
      explanation: `## Exacerbations

**Definition:**
- Acute worsening of respiratory symptoms
- Beyond normal day-to-day variation
- Requires additional treatment

**Triggers:**
- Respiratory infections (most common)
- Air pollution
- Non-adherence to medications
- Pulmonary embolism (consider if atypical)

**Treatment:**

*Mild (Outpatient):*
- Increased SABA
- Increased bronchodilators
- Prednisone 40mg 5 days
- Antibiotics if purulent sputum

*Severe (Hospitalization):*
- Supplemental oxygen
- Nebulized bronchodilators
- Prednisone 40mg daily
- Antibiotics (amoxicillin-clavulanate, doxycycline, respiratory fluoroquinolone)
- Consider NIV for respiratory acidosis
- Mechanical ventilation if NIV fails

## Prevention of Exacerbations

**Pharmacologic:**
- LAMA reduces exacerbations
- LABA-LAMA better than either alone
- ICS if eosinophils ≥300 or history of exacerbations
- Roflumilast for chronic bronchitis phenotype
- Azithromycin for frequent exacerbators (use ECG for QTc)

**Vaccinations:**
- Influenza: Annually
- Pneumococcal: PCV15 then PPSV23 one year later
- COVID-19: Stay current
- RSV: For older adults (new)

**Non-Pharmacologic:**
- Smoking cessation
- Pulmonary rehabilitation
- Action plan
- Early treatment of worsening symptoms

## Comorbidities

**Cardiovascular:**
- CAD, HF, arrhythmias
- COPD increases CV mortality

**Osteoporosis:**
- Systemic steroid use
- Smoking, weight loss
- DEXA monitoring

**Depression/Anxiety:**
- Dyspnea causes anxiety
- Screen all patients
- Treat appropriately`,

      keyTerms: [
        { term: 'NIV', definition: 'Non-Invasive Ventilation - mask ventilation without intubation' },
        { term: 'Anthonisen criteria', definition: 'Three signs for determining when to use antibiotics' },
        { term: 'DEXA', definition: 'Dual-energy X-ray absorptiometry - bone density test' },
        { term: 'Action plan', definition: 'Written plan for managing COPD exacerbations at home' },
      ],
      analogies: [
        'Anthonisen criteria is like a checklist for deciding on antibiotics.',
        'NIV is like giving your lungs a rest with a machine doing some work.',
      ],
      examples: [
        'Patient with increased dyspnea, sputum volume, and purulence gets antibiotics',
        'Frequent exacerbator started on azithromycin after QTc checked',
        'Person with COPD gets PCV15 followed by PPSV23 one year later',
      ],
      clinicalNotes: 'Inspiratory muscle training may help selected patients. Lung volume reduction surgery (LVRS) improves survival in upper-lobe emphysema with low exercise capacity. Endobronchial valves for severe heterogeneous emphysema (EMPEROR, LIBERATE trials).',
    },

    5: {
      level: 5,
      summary: 'COPD is a systemic disease with significant extrapulmonary manifestations. Phenotyping guides personalized therapy. Lung transplantation consideration for very severe disease.',
      explanation: `## Phenotypes

**Frequent Exacerbator:**
- ≥2 exacerbations/year
- Benefits from: LAMA, LABA-LAMA, ICS (if eosinophilic), azithromycin
- Avoid: ICS alone

**Asthma-COPD Overlap (ACO):**
- Features of both
- Responds well to ICS
- High eosinophils
- History of atopy

**Chronic Bronchitis:**
- Productive cough
- May benefit from roflumilast
- Mucolytics (not available in US)

**Emphysema-Predominant:**
- Low DLCO, hyperinflation
- May benefit from LVRS
- Lung reduction with valves

## Surgical Options

**Lung Volume Reduction Surgery:**
- Upper-lobe predominant emphysema
- Low exercise capacity
- Improves survival, QOL
- NETT trial established criteria

**Endobronchial Valves:**
- Heterogeneous emphysema
- Complete fissure (no collateral ventilation)
- Improves FEV1, exercise capacity
- Less invasive than LVRS

**Lung Transplantation:**
- FEV1 <15-20% predicted
- BODE index 7-10
- Referral before too sick
- Single or bilateral

## Prognosis

**BODE Index:**
- BMI: <21 = 1 point
- Obstruction: FEV1 % predicted
- Dyspnea: mMRC score
- Exercise: 6-minute walk distance

**Predicts:**
- Mortality
- Hospitalization
- Need for transplantation

**Palliative Care:**
- Dyspnea management
- Anxiety control
- Goals of care discussion
- Hospice when appropriate`,

      keyTerms: [
        { term: 'ACO', definition: 'Asthma-COPD Overlap - features of both diseases' },
        { term: 'DLCO', definition: 'Diffusing capacity of lung for carbon monoxide - measures gas exchange' },
        { term: 'BODE', definition: 'Body mass index, Obstruction, Dyspnea, Exercise capacity - predicts mortality' },
        { term: 'mMRC', definition: 'Modified Medical Research Council dyspnea scale' },
      ],
      analogies: [
        'BODE index is like a scorecard for how severe COPD is.',
        'ACO is like having features of both asthma and COPD mixed together.',
      ],
      examples: [
        'Patient with BODE 8 referred for lung transplant evaluation',
        'Upper-lobe emphysema with low exercise capacity considered for LVRS',
        'Patient with high eosinophils and atopy treated for ACO',
      ],
      clinicalNotes: 'Alpha-1 antitrypsin augmentation therapy for deficiency: slows emphysema progression. IV infusion weekly or monthly. Expensive but recommended for deficiency with moderate emphysema. Smoking cessation remains essential even with augmentation.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['pulmonology', 'COPD', 'emphysema', 'chronic-bronchitis', 'smoking'],
    systems: ['respiratory'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['pulmonology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
