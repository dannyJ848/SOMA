/**
 * Asthma
 *
 * Chronic inflammatory airway disease causing reversible airflow obstruction.
 */

import { EducationalContent } from '../../types';

export const asthmaContent: EducationalContent = {
  id: 'pulmonology-asthma',
  type: 'topic',
  name: 'Asthma',
  alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease'],

  levels: {
    1: {
      level: 1,
      summary: "Asthma is a chronic condition that affects your airways. The airways become inflamed and narrow, making it hard to breathe. It causes wheezing, coughing, and shortness of breath.",
      explanation: `## What Is Asthma?

Asthma is a long-term condition affecting the tubes that carry air in and out of your lungs (airways). These airways become inflamed and narrowed, making breathing difficult.

## Common Symptoms

- Wheezing (whistling sound when breathing)
- Shortness of breath
- Chest tightness
- Coughing (especially at night or early morning)

## What Triggers Asthma?

- Allergies (pollen, pets, dust mites)
- Exercise
- Cold air
- Smoke and pollution
- Respiratory infections
- Strong odors or perfumes
- Stress and strong emotions

## What Happens During an Asthma Attack?

1. Muscles around airways tighten
2. Airway lining swells
3. Extra mucus is produced
4. Air gets trapped in lungs
5. Breathing becomes difficult

## Treatment

- Quick-relief inhalers (albuterol) for attacks
- Long-term control medicines to prevent symptoms
- Avoid triggers
- Asthma action plan
- Regular check-ups with doctor`,

      keyTerms: [
        { term: 'Airways', definition: 'Tubes that carry air in and out of lungs' },
        { term: 'Wheezing', definition: 'High-pitched whistling sound when breathing' },
        { term: 'Inhaler', definition: 'Device that delivers medicine directly to lungs' },
        { term: 'Trigger', definition: 'Something that causes asthma symptoms to start' },
      ],
      analogies: [
        'Asthma is like breathing through a straw that keeps getting narrower.',
        'An asthma attack is like traffic jam in your breathing tubes.',
      ],
      examples: [
        'Child who coughs at night and during exercise',
        'Person with wheezing after being around a cat',
        'Someone using rescue inhaler before sports',
      ],
    },

    2: {
      level: 2,
      summary: 'Asthma is characterized by reversible airway obstruction, airway inflammation, and bronchial hyperresponsiveness. Diagnosis by history, spirometry with bronchodilator response.',
      explanation: `## Pathophysiology

**Airway Changes:**
- Smooth muscle constriction (bronchospasm)
- Mucosal edema and inflammation
- Mucus hypersecretion
- Airway remodeling (chronic)

**Inflammatory Cells:**
- Eosinophils (major player)
- Mast cells
- Th2 lymphocytes
- Release mediators: histamine, leukotrienes, cytokines

## Clinical Presentation

**Typical Symptoms:**
- Wheeze, cough, dyspnea, chest tightness
- Episodic, often worse at night/early morning
- Exercise-induced symptoms
- Allergy history common

**Physical Exam:**
- Wheezing (expiratory > inspiratory)
- Prolonged expiratory phase
- May be normal between exacerbations

## Diagnosis

**Spirometry:**
- FEV1/FVC <0.7 (obstruction)
- Reversibility: FEV1 increase >12% AND >200mL after bronchodilator
- Normal between exacerbations possible

**Challenge Testing:**
- Methacholine challenge if baseline spirometry normal
- Positive: PC20 <8 mg/mL

**Other Tests:**
- FeNO (fractional exhaled NO): Eosinophilic inflammation
- Peak flow monitoring: Diurnal variability
- Allergy testing: IgE, skin testing

## Classification

**Severity (based on symptoms):**
- Intermittent: Days ≤2/week, Nights ≤2/month
- Mild persistent: Days >2/week, Nights 3-4/month
- Moderate persistent: Daily symptoms, Nights >1/week
- Severe persistent: Continual symptoms, frequent nights`,

      keyTerms: [
        { term: 'FEV1', definition: 'Forced Expiratory Volume in 1 second - measures how much air you can exhale' },
        { term: 'FVC', definition: 'Forced Vital Capacity - total air exhaled' },
        { term: 'FeNO', definition: 'Fractional exhaled Nitric Oxide - marker of airway inflammation' },
        { term: 'Bronchospasm', definition: 'Constriction of airway muscles' },
      ],
      analogies: [
        'Spirometry is like measuring how fast you can blow out candles.',
        'Airway remodeling is like scar tissue forming inside breathing tubes.',
      ],
      examples: [
        'Patient with wheezing that improves after albuterol',
        'Methacholine challenge positive confirms asthma',
        'Person with daily symptoms and nighttime awakening',
      ],
      clinicalNotes: 'Not all that wheezes is asthma. Consider COPD, heart failure, vocal cord dysfunction, bronchiectasis. Over-reliance on SABA alone is a risk factor for asthma death. Inhaled corticosteroids are underutilized but life-saving.',
    },

    3: {
      level: 3,
      summary: 'Asthma management uses stepwise approach. Inhaled corticosteroids are cornerstone of controller therapy. Biologics indicated for severe asthma with specific phenotypes.',
      explanation: `## Stepwise Approach (GINA 2023)

**Track 1 (Preferred):**
- Step 1-2: Low-dose ICS-formoterol as needed
- Step 3: Low-dose ICS-formoterol daily + as needed
- Step 4: Medium-dose ICS-formoterol daily + as needed
- Step 5: Refer for phenotyping, consider biologics

**Track 2 (Alternative):**
- Step 1: SABA prn
- Step 2: Low-dose ICS daily + SABA prn
- Step 3: Low-dose ICS-LABA daily + SABA prn
- Step 4: Medium-dose ICS-LABA + consider LAMA
- Step 5: High-dose ICS-LABA-LAMA + refer

**Step Down:**
- Consider after 3 months of good control
- Reduce ICS dose by 25-50%
- Maintain controller therapy even if asymptomatic

## Controller Medications

**Inhaled Corticosteroids:**
- Fluticasone, budesonide, mometasone
- Reduce inflammation, prevent exacerbations
- Dose-dependent side effects (thrush, dysphonia)
- Rinse mouth after use

**LABA:**
- Formoterol, salmeterol, vilanterol
- NEVER use alone (black box warning)
- Always combined with ICS

**LAMA:**
- Tiotropium
- For moderate-severe asthma
- Reduces exacerbations

## Biologics for Severe Asthma

**Anti-IgE (Omalizumab):**
- Allergic phenotype (elevated IgE)
- IgE 30-700 IU/mL
- Dosed by IgE and weight

**Anti-IL5 (Mepolizumab, Reslizumab, Benralizumab):**
- Eosinophilic phenotype
- Blood eosinophils ≥150/μL
- Reduces exacerbations by 50%

**Anti-IL4/13 (Dupilumab):**
- Th2-high phenotype
- Eosinophilic or allergic
- Also improves atopic dermatitis`,

      keyTerms: [
        { term: 'ICS', definition: 'Inhaled Corticosteroid - anti-inflammatory inhaler' },
        { term: 'LABA', definition: 'Long-Acting Beta-Agonist - long-acting bronchodilator' },
        { term: 'LAMA', definition: 'Long-Acting Muscarinic Antagonist - long-acting bronchodilator' },
        { term: 'SABA', definition: 'Short-Acting Beta-Agonist - rescue inhaler' },
      ],
      analogies: [
        'ICS are like putting out the fire of inflammation.',
        'LABA opens the airways like opening a umbrella.',
        'Biologics are like snipers targeting specific inflammatory pathways.',
      ],
      examples: [
        'Patient with daily symptoms started on ICS-LABA',
        'Eosinophilic asthma patient started on mepolizumab',
        'Allergic asthma patient on omalizumab',
      ],
      clinicalNotes: 'Overuse of SABA (>3 canisters/year) is risk factor for asthma death. Every asthma patient should have a written asthma action plan. Annual review of inhaler technique is essential - most patients use incorrectly.',
    },

    4: {
      level: 4,
      summary: 'Asthma exacerbations require prompt treatment with SABA and systemic corticosteroids. Severe exacerbations may require hospitalization and respiratory support.',
      explanation: `## Asthma Exacerbations

**Home Management (Mild-Moderate):**
- SABA 2-4 puffs every 20 minutes x3
- If poor response: seek urgent care
- Oral prednisone 40-60mg daily for 5 days
- Continue ICS, possibly increase temporarily

**Emergency Department Assessment:**
- Peak flow or FEV1
- O2 saturation
- Vital signs
- Physical exam: wheezing, work of breathing
- Chest X-ray if pneumonia suspected

**Severity Indicators:**
- Mild: Normal conversational ability
- Moderate: Difficulty speaking in sentences
- Severe: Single words, tripod position
- Respiratory arrest: Imminent

**Hospital Treatment:**
- Supplemental oxygen (SpO2 90-92%)
- SABA: Continuous or frequent
- Ipratroprium for severe exacerbations
- Systemic corticosteroids (early!)
- Magnesium sulfate IV for severe
- Consider heliox for severe
- BiPAP for respiratory fatigue
- Intubation: Last resort, difficult airway

## Special Situations

**Exercise-Induced Bronchoconstriction:**
- Pre-treat with SABA 15 min before
- Or leukotriene modifier daily
- Or ICS-LABA daily if frequent

**Pregnancy:**
- Continue ICS (safe)
- SABA safe
- Oral steroids if needed (worse to undertreat)
- Monitor fetal growth

**Aspirin-Exacerbated Respiratory Disease (AERD):**
- Samter triad: Asthma + nasal polyps + aspirin sensitivity
- COX-1 inhibitors trigger bronchospasm
- Leukotriene modifier treatment
- Consider aspirin desensitization`,

      keyTerms: [
        { term: 'Tripod position', definition: 'Sitting leaning forward with hands on knees - sign of respiratory distress' },
        { term: 'Heliox', definition: 'Helium-oxygen mixture - reduces work of breathing' },
        { term: 'AERD', definition: 'Aspirin-Exacerbated Respiratory Disease - asthma worsened by aspirin' },
        { term: 'Samter triad', definition: 'Asthma, nasal polyps, and aspirin sensitivity' },
      ],
      analogies: [
        'Tripod position is like the body naturally finding the best position to breathe.',
        'Heliox is like breathing thinner air that flows more easily.',
      ],
      examples: [
        'Asthma exacerbation treated with SABA, steroids, and magnesium',
        'Patient with nasal polyps and asthma has reaction to ibuprofen',
        'Pregnant woman with asthma continues ICS throughout pregnancy',
      ],
      clinicalNotes: 'Capnography (ETCO2) can predict need for intubation. Normal ETCO2 in tachypneic patient is concerning (respiratory fatigue). Near-fatal asthma: PaCO2 >40 mmHg during exacerbation indicates severe airflow obstruction.',
    },

    5: {
      level: 5,
      summary: 'Asthma phenotypes guide biologic therapy. Severe asthma evaluation includes sputum eosinophils, FeNO, serum IgE, and periostin. Biomarker-directed therapy improves outcomes.',
      explanation: `## Asthma Phenotypes

**Allergic (IgE-mediated):**
- Early-onset, atopic
- Elevated IgE, positive skin tests
- Omalizumab responsive

**Eosinophilic:**
- Blood/sputum eosinophils elevated
- Often late-onset, severe
- Anti-IL5 responsive
- FeNO elevated

**Neutrophilic:**
- Sputum neutrophils elevated
- Obesity, smoking, infections
- Poor steroid response
- Macrolide may help

**Paucigranulocytic:**
- Normal sputum cell counts
- Obesity-related, older onset
- Fixed airflow obstruction

## Severe Asthma

**Definition:**
- Requires high-dose ICS-LABA ± LAMA
- Or oral corticosteroids to control
- Or remains uncontrolled despite therapy

**Evaluation:**
- Confirm diagnosis (spirometry, challenge)
- Assess adherence (prescription fills, inhaler technique)
- Identify comorbidities:
  - GERD, sinusitis, OSA
  - Anxiety/depression
  - Obesity
- Phenotype for biologic therapy

## Future Directions

**Biologics:**
- Anti-TSLP (tezepelumab): Broad Th2
- Anti-IL-33 (itepekimab): Under investigation
- Anti-seizure drugs for neurogenic inflammation

**Bronchial Thermoplasty:**
- Reduces smooth muscle
- For severe refractory asthma
- 3 procedures, 3 weeks apart
- Modest benefit, risk of exacerbation

**Hot Topics:**
- "Smoking asthma": Distinct phenotype
- "Late-onset eosinophilic": Women, severe
- "Obesity asthma": Weight loss improves
- "Viral-induced": Severe exacerbations`,

      keyTerms: [
        { term: 'Phenotype', definition: 'Observable characteristics that define a subtype of disease' },
        { term: 'Paucigranulocytic', definition: 'Asthma with normal inflammatory cell counts' },
        { term: 'Bronchial thermoplasty', definition: 'Procedure using heat to reduce airway muscle' },
        { term: 'Neutrophilic', definition: 'Asthma with elevated neutrophils in sputum' },
      ],
      analogies: [
        "Phenotyping is like creating a profile of what makes each person's asthma unique.",
        'Bronchial thermoplasty is like burning away the overactive muscle in airways.',
      ],
      examples: [
        'Patient with blood eosinophils 800 started on mepolizumab',
        'Obese asthma patient enrolled in weight loss program',
        'Severe refractory asthma considered for bronchial thermoplasty',
      ],
      clinicalNotes: 'Exhaled breath analysis (volatile organic compounds) emerging for phenotyping. Sputum cytology (eosinophils) guides steroid response. FeNO >50 ppb predicts steroid response. Composite biomarkers (eosinophils + FeNO + periostin) improve phenotyping.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['pulmonology', 'asthma', 'respiratory', 'allergy', 'copd'],
    systems: ['respiratory'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['pulmonology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
