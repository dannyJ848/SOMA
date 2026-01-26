/**
 * COPD Management - Chronic Disease Education
 *
 * Comprehensive patient education about managing COPD,
 * including medications, breathing techniques, and lifestyle changes.
 */

import { EducationalContent } from '../../types';

export const COPD_MANAGEMENT: EducationalContent = {
  id: 'chronic-disease-copd-management',
  type: 'concept',
  name: 'COPD Management',
  alternateNames: ['COPD treatment', 'COPD care', 'COPD self-management'],

  levels: {
    1: {
      level: 1,
      summary: 'COPD management includes using medicines, learning breathing techniques, staying active, eating healthy, and avoiding things that make breathing worse to help you live better with COPD.',
      explanation: `**What Is COPD Management?**

COPD management means taking care of yourself every day to breathe better and feel your best. While COPD cannot be cured, there are many things that can help you live well.

**Key Parts of COPD Management:**


Daily Management:
---------------------------------
- Take your medicines as prescribed
- Learn breathing exercises
- Stay active within your limits
- Eat healthy foods
- Avoid smoke and lung irritants
- Get vaccinated (flu, pneumonia)
- Have an action plan for flare-ups
---------------------------------


**Medicines That Help:**

*Inhalers (Bronchodilators):*
- Open your airways to make breathing easier
- Have two types: quick-relief and long-acting
- Important to use the correct technique

*Other Medicines:*
- Antibiotics for infections
- Steroids during flare-ups
- Oxygen for some people

**Breathing Techniques:**

*Pursed-Lip Breathing:*
1. Breathe in through your nose for 2 counts
2. Pucker your lips like blowing a kiss
3. Breathe out slowly for 4 counts
4. This helps keep airways open longer

*Diaphragmatic Breathing:*
- Breathe with your belly, not your chest
- Helps you use less energy to breathe

**Staying Active:**


Exercise Tips:
---------------------------------
- Start slow and build up gradually
- Walk for a few minutes each day
- Rest when you need to
- Use your rescue inhaler before exercise
  (if your doctor says to)
- Stop if you feel too short of breath
---------------------------------


**Healthy Eating:**

- Eat small, frequent meals (easier on breathing)
- Choose high-protein foods
- Drink plenty of water (unless your doctor limits fluids)
- Avoid gas-producing foods

**Things to Avoid:**

- Tobacco smoke (most important!)
- Strong odors and fumes
- Very hot or cold air
- Air pollution on bad days
- Crowds during flu season

**Creating an Action Plan:**

Work with your healthcare team to create a written plan that tells you:
- What your daily medicines are
- How to recognize a flare-up
- What to do when symptoms worsen
- When to call your doctor or go to the ER

**Remember:** You are the most important member of your COPD care team!`,
      keyTerms: [
        { term: 'bronchodilator', definition: 'Medication that opens the airways to make breathing easier' },
        { term: 'inhaler', definition: 'Device that delivers medicine directly to your lungs' },
        { term: 'action plan', definition: 'A written plan for managing COPD flare-ups' },
        { term: 'flare-up', definition: 'When COPD symptoms suddenly get worse' },
      ],
      analogies: [
        'Think of your inhaler like a key that unlocks your airways.',
        'Pursed-lip breathing is like letting air out of a small opening in a balloon - it slows and controls the airflow.',
      ],
      examples: [
        'Miguel uses his maintenance inhaler twice daily and does breathing exercises each morning.',
        'Linda follows her COPD action plan when she feels her symptoms worsening and avoids emergency room visits.',
      ],
      patientCounselingPoints: [
        'Proper inhaler technique is crucial - ask your healthcare provider to check your technique.',
        'Practice breathing exercises daily for best results.',
        'Any activity is better than none - even short walks help.',
        'Get your annual flu shot and pneumonia vaccine to prevent infections.',
        'Join a pulmonary rehabilitation program to learn more about managing COPD.',
      ],
    },
    2: {
      level: 2,
      summary: 'COPD management involves smoking cessation, pharmacologic therapy with bronchodilators, pulmonary rehabilitation, vaccination, and self-management education to reduce symptoms, prevent exacerbations, and improve quality of life.',
      explanation: `**Goals of COPD Management:**


Management Goals:
-----------------------------------------
- Relieve symptoms
- Improve exercise tolerance
- Prevent disease progression
- Prevent and treat exacerbations
- Reduce mortality
- Improve quality of life
-----------------------------------------


**Smoking Cessation (Most Important):**


Quitting Smoking Strategies:
-----------------------------------------
Counseling:
  - Discuss health risks
  - Set quit date
  - Address triggers
  - Ongoing support

Medications:
  - Nicotine replacement (patch, gum, lozenge)
  - Varenicline (Chantix)
  - Bupropion (Zyban)

Benefits:
  - Slows disease progression
  - Reduces symptoms
  - Improves response to treatment
  - Extends survival
-----------------------------------------


**Pharmacologic Therapy:**


Bronchodilator Classes:
-----------------------------------------
Short-Acting (Rescue):
  SABA (albuterol)
    - Quick relief
    - Lasts 4-6 hours
    - Use as needed

  SAMA (ipratropium)
    - Quick relief
    - Lasts 6-8 hours
    - Alternative to SABA

Long-Acting (Maintenance):
  LABA (salmeterol, formoterol, vilanterol)
    - Lasts 12-24 hours
    - Regular use

  LAMA (tiotropium, glycopyrrolate, umeclidinium)
    - Lasts 24 hours
    - First-line for many patients
    - Reduces exacerbations

  LABA/LAMA combinations
    - Better symptom relief
    - For persistent symptoms
-----------------------------------------


**Pulmonary Rehabilitation:**

Rehabilitation Components:
-----------------------------------------
Exercise Training:
  - Endurance training (walking, cycling)
  - Strength training (arms and legs)
  - Flexibility exercises
  → Improves exercise capacity and symptoms

Education:
  - Understanding COPD
  - Breathing techniques
  - Medication use
  - Energy conservation
  - Action plan development

Benefits:
  - Less shortness of breath
  - More strength
  - Better quality of life
  - Fewer hospitalizations
-----------------------------------------


**Breathing Techniques:**

*Pursed-Lip Breathing:*
- Reduces shortness of breath
- Improves ventilation
- Use during activity and stress

*Diaphragmatic Breathing:*
- Strengthens diaphragm
- Reduces energy use
- Improves efficiency

*Positions to Help Breathing:*
- Tripod position (leaning forward)
- High Fowler's (sitting up)
- Leaning against a wall

**Vaccinations:**

Recommended Vaccines:
-----------------------------------------
Influenza:
  - Annually
  - Inactivated or recombinant preferred
  - Reduces exacerbations and death

Pneumococcal:
  - PCV20 (one dose) OR
  - PCV15 + PPSV23 one year later
  - Protects against pneumonia

Tdap:
  - One time then Td every 10 years
  - Protects against tetanus, diphtheria, pertussis

COVID-19:
  - Primary series + boosters
  - Important for COPD patients
-----------------------------------------


**Oxygen Therapy:**

Indications:
- Resting oxygen saturation ≤88%
- Exertional desaturation
- Sleep desaturation with complications
- Pulmonary hypertension
- Cor pulmonale

Benefits:
- Improves survival (if hypoxemic)
- Reduces pulmonary hypertension
- Improves mental function
- Improves exercise tolerance

**Self-Management:**

- Daily symptom monitoring
- Early recognition of exacerbations
- Action plan use
- Regular healthcare visits
- Peak flow monitoring (some patients)`,
      keyTerms: [
        { term: 'SABA', definition: 'Short-acting beta-agonist rescue inhaler' },
        { term: 'SAMA', definition: 'Short-acting muscarinic antagonist rescue inhaler' },
        { term: 'LABA', definition: 'Long-acting beta-agonist maintenance inhaler' },
        { term: 'LAMA', definition: 'Long-acting muscarinic antagonist maintenance inhaler' },
        { term: 'cor pulmonale', definition: 'Right heart failure from lung disease' },
      ],
      analogies: [
        'Maintenance inhalers are like daily vitamins for your lungs - they keep things working steadily.',
        'Pulmonary rehab is like physical therapy for your lungs and body.',
      ],
      clinicalNotes: 'Smoking cessation is the only intervention that slows COPD progression. Pulmonary rehabilitation is underutilized but highly effective.',
      patientCounselingPoints: [
        'Use your maintenance inhalers every day, even when you feel well.',
        'Do not stop using your long-acting inhalers without talking to your doctor.',
        'Pulmonary rehabilitation is one of the most effective treatments for COPD.',
        'Get vaccinated every year against flu and once for pneumonia.',
        'Oxygen therapy helps you live longer if your oxygen is low - use it as prescribed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive COPD management integrates smoking cessation, evidence-based pharmacotherapy, pulmonary rehabilitation, vaccination, and self-management strategies tailored to individual patient characteristics and symptom burden.',
      explanation: `**Individualized Management:**

*GOLD ABCD Assessment:*

Treatment Selection by Category:
-----------------------------------------------------
Group A (Low symptoms, Low risk):
  - SABA or SAMA prn OR
  - LAMA or LABA (if symptoms)

Group B (High symptoms, Low risk):
  - LAMA or LABA (single therapy)
  - Consider LABA/LAMA if symptoms persist
  - Bronchodilator choice based on patient preference

Group C (Low symptoms, High risk):
  - LAMA (preferred)
  - LABA (alternative)
  - Consider LABA/LAMA

Group D (High symptoms, High risk):
  - LABA/LAMA (dual bronchodilation)
  - Consider adding ICS if:
    - Exacerbations despite dual therapy
    - Blood eosinophils ≥100 cells/μL
    - Asthma-COPD overlap
-----------------------------------------------------


**Inhaler Device Selection:**


Device Considerations:
-----------------------------------------------------
Metered Dose Inhaler (MDI):
  - Requires coordination
  - Spacer recommended
  - Portable

Dry Powder Inhaler (DPI):
  - No coordination needed
  - Requires adequate inspiratory flow
  - Humidity sensitive

Soft Mist Inhaler (SMI):
  - Slow-moving mist
  - Easier than MDI
  - Portable

Nebulizer:
  - No special technique required
  - Takes more time
  - Good for severe patients or exacerbations

Selection Factors:
  - Patient ability and preference
  - Cost and insurance coverage
  - Cognitive/physical ability
-----------------------------------------------------


**Pharmacologic Management:**

*Triple Therapy (ICS/LABA/LAMA):*

When to Consider Triple Therapy:
-----------------------------------------------------
Indications:
  - Persistent dyspnea on LABA/LAMA
  - ≥1 moderate exacerbation on dual therapy
  - ≥1 severe exacerbation on dual therapy
  - Blood eosinophils ≥100 cells/μL

Evidence:
  - Reduced exacerbations vs dual
  - Improved lung function
  - Better quality of life
  - Increased pneumonia risk

ICS Considerations:
  Benefits:
    - Exacerbation reduction
    - Possible mortality benefit (very severe)
  Risks:
    - Pneumonia (1.5-2x increased risk)
    - Oral candidiasis
    - Dysphonia
  - Use lowest effective dose
-----------------------------------------------------


*Roflumilast:*

PDE-4 Inhibitor Considerations:
-----------------------------------------------------
Indication:
  - Severe COPD (FEV1 <50%)
  - Chronic bronchitis phenotype
  - Frequent exacerbations
  - Added to bronchodilators

Mechanism:
  - Reduces inflammation
  - Decreases exacerbations

Dosing:
  - 500 mcg once daily

Side Effects:
  - Diarrhea (common)
  - Nausea, weight loss
  - Headache
  - Psychiatric effects

Considerations:
  - Contraindicated with moderate liver disease
  - Be cautious in depression
  - Monitor weight
-----------------------------------------------------


**Pulmonary Rehabilitation:**


Comprehensive Program Components:
-----------------------------------------------------
Assessment:
  - Baseline exercise capacity
  - Symptom burden
  - Functional limitations
  - Comorbidities

Exercise Prescription:
  Endurance:
    - Walking, cycling
    - Target: 60-80% peak capacity
    - Duration: 20-30 minutes
    - Frequency: 3-5 times/week

  Strength:
    - Major muscle groups
    - 8-12 reps, 2-3 sets
    - Frequency: 2-3 times/week

  Upper Body:
    - Important for ADLs
    - Arm ergometry
    - Light weights

Breathing Training:
  - Pursed-lip breathing
  - Diaphragmatic breathing
  - Recovery breathing techniques

Education:
  - Disease understanding
  - Medication use
  - Energy conservation
  - Action plan development
  - Oxygen use

Psychosocial Support:
  - Anxiety/depression screening
  - Coping strategies
  - Support groups
  - Behavioral interventions
-----------------------------------------------------


**Long-Term Oxygen Therapy:**


LTOT Indications and Management:
-----------------------------------------------------
Indications:
  PaO2 ≤55 mm Hg or SpO2 ≤88%
  OR
  PaO2 56-59 mm Hg with:
    - Pulmonary hypertension
    - Cor pulmonale
    - Polycythemia (Hct >55%)

Prescription:
  - Flow rate to achieve SpO2 88-92%
  - Use ≥15 hours/day (benefit starts here)
  - 24 hours/day for maximal benefit

Delivery Systems:
  - Compressed gas cylinders
  - Liquid oxygen systems
  - Oxygen concentrators
  - Portable options for外出

Monitoring:
  - SpO2 at rest, with activity
  - ABG periodically
  - Hemoglobin/hematocrit
  - Compliance assessment
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'ABCD assessment', definition: 'GOLD classification for COPD management' },
        { term: 'PDE-4', definition: 'Phosphodiesterase-4 enzyme inhibited by roflumilast' },
        { term: 'LTOT', definition: 'Long-term oxygen therapy' },
        { term: 'ADLs', definition: 'Activities of daily living' },
        { term: 'polycythemia', definition: 'Increased red blood cell count from chronic hypoxemia' },
      ],
      clinicalNotes: 'ICS should not be used alone in COPD. Triple therapy reserved for frequent exacerbators or eosinophilic phenotype. Roflumilast has limited use due to side effects.',
      patientCounselingPoints: [
        'Your COPD treatment is based on your symptoms and exacerbation risk - it may differ from others.',
        'If you have frequent exacerbations, triple therapy may be recommended.',
        'Pulmonary rehabilitation provides benefits that medicines cannot offer.',
        'Oxygen therapy is life-saving if your oxygen is low - use it for at least 15 hours daily.',
        'Roflumilast may help if you have chronic bronchitis and frequent exacerbations.',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern COPD management employs phenotype-directed therapy, integrating smoking cessation, evidence-based pharmacotherapy with dual or triple bronchodilation, pulmonary rehabilitation, and comprehensive care coordination to optimize outcomes.',
      explanation: `**Precision Management:**

*COPD Phenotypes:*

Management by Phenotype:
-----------------------------------------------------
Frequent Exacerbator:
  - ≥2 exacerbations/year
  - LABA/LAMA baseline
  - Add ICS if eosinophils ≥100
  - Consider roflumilast (if chronic bronchitis)
  - Consider chronic macrolide
  - Aggressive vaccination strategy

Chronic Bronchitis Phenotype:
  - Mucus hypersecretion
  - LAMA or LABA/LAMA
  - Airway clearance techniques
  - Consider roflumilast
  - Mucolytics if beneficial

Emphysema Phenotype:
  - Dyspnea-dominant
  - LAMA or LABA/LAMA
  - Breathing exercises
  - Consider LVRS if severe
  - Consider lung transplant

Asthma-COPD Overlap (ACO):
  - Features of both diseases
  - ICS + LABA/LAMA
  - Higher eosinophils
  - Better bronchodilator response

Alpha-1 Deficiency:
  - AAT replacement therapy
  - Specialized management
  - Family screening
-----------------------------------------------------


**Advanced Pharmacotherapy:**

*ICS Selection:*

ICS Use in COPD:
-----------------------------------------------------
When to Add ICS:
  - Frequent exacerbations despite dual therapy
  - Blood eosinophils ≥100 cells/μL
  - Asthma-COPD overlap
  - History of asthma

When to Avoid ICS:
  - No exacerbations
  - Low eosinophils (<100)
  - Recurrent pneumonia
  - TB history (reactivation risk)

ICS Dosing:
  - Lowest effective dose
  - Fluticasone 100-250 mcg BID
  - Budesonide 160-320 mcg BID
  - Mometasone 220-440 mcg BID

Monitoring:
  - Monitor for pneumonia
  - Check for oral candidiasis
  - Monitor dysphonia
  - Assess bone health (long-term)
-----------------------------------------------------


*Chronic Macrolide Therapy:*

Azithromycin Prevention Strategy:
-----------------------------------------------------
Target Population:
  - ≥2 moderate exacerbations/year OR
  - ≥1 severe exacerbation/year
  - Despite maximal inhaled therapy
  - Non-eosinophilic phenotype

Evidence:
  - REDUCE trial: 27% reduction in exacerbations
  - Improved quality of life
  - Reduces hospitalizations

Regimen:
  - 250 mg daily OR
  - 500 mg three times weekly

Monitoring Requirements:
  - Baseline ECG and periodic QTc
  - Liver function tests
  - Hearing assessment
  - Review for drug interactions

Contraindications:
  - Prolonged QTc interval
  - Significant hepatic impairment
  - Known macrolide resistance
-----------------------------------------------------


**Surgical and Procedural Options:**

*Lung Volume Reduction:*

BLVR (Bronchoscopic Lung Volume Reduction):
-----------------------------------------------------
Endobronchial Valves:
  - Zephyr valves (most studied)
  - One-way valve mechanism
  - Lobe deflation and collapse
  - Reversible (removable)

Ideal Candidate:
  - Heterogeneous emphysema
  - Upper lobe predominance
  - Complete interlobar fissures
  - FEV1 15-45%
  - Hyperinflation (TLC >100%)
  - Low exercise capacity

Benefits:
  - Improved FEV1 (+20-30%)
  - Reduced hyperinflation
  - Improved 6-minute walk distance
  - Better quality of life
  - Reduced exacerbations (some studies)

Alternatives:
  - Lung coils (for incomplete fissures)
  - Vapor ablation
  - Sealants
-----------------------------------------------------


*Lung Transplantation:*

Transplant Considerations:
-----------------------------------------------------
Indications:
  - FEV1 <15-20% predicted
  - PaO2 <55 mm Hg on oxygen
  - PaCO2 >55 mm Hg
  - Pulmonary hypertension
  - Rapid clinical deterioration
  - BODE score >7

Procedure Types:
  - Single lung transplant (most common for COPD)
  - Bilateral lung transplant (selected patients)

Outcomes:
  - 30-day mortality: <5%
  - 5-year survival: ~50%
  - Improved quality of life
  - Improved exercise capacity

Complications:
  - Rejection (acute/chronic)
  - Infection
  - Bronchiolitis obliterans syndrome (BOS)
  - Side effects of immunosuppression
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'ACO', definition: 'Asthma-COPD Overlap syndrome' },
        { term: 'BLVR', definition: 'Bronchoscopic lung volume reduction' },
        { term: 'BODE', definition: 'BMI, Obstruction, Dyspnea, Exercise capacity index' },
        { term: 'BOS', definition: 'Bronchiolitis obliterans syndrome; chronic rejection' },
      ],
      clinicalNotes: 'ICS-containing regimens increase pneumonia risk. BLVR is first-line surgical option for eligible emphysema patients. Lung transplant reserved for end-stage disease.',
      patientCounselingPoints: [
        'Your COPD phenotype helps determine which medications are best for you.',
        'Bronchoscopic lung volume reduction may help if you have emphysema and shortness of breath.',
        'Chronic azithromycin can reduce exacerbations but requires regular monitoring.',
        'Lung transplant may be an option for very severe COPD.',
        'Regular follow-up is important to adjust your treatment as needed.',
      ],
    },
    5: {
      level: 5,
      summary: 'Contemporary COPD management employs precision medicine approaches with biomarker-directed therapy, novel biologics, advanced interventional bronchoscopy, and comprehensive digital health tools to optimize individual patient outcomes.',
      explanation: `**Precision Medicine:**

*Biomarker-Directed Therapy:*

Biomarker-Guided Treatment:
------------------------------------------------------------
Blood Eosinophils:
  - ≥300 cells/μL: Strong ICS indication
  - 100-300: Consider ICS
  - <100: ICS unlikely to help

FeNO (Fractional Exhaled NO):
  - Type 2 inflammation marker
  - May guide ICS use in ACO
  - Limited validation in pure COPD

Fibrinogen:
  - High levels (>350 mg/L): High exacerbation risk
  - May guide biologic therapy

Procalcitonin:
  - Guides antibiotic use during exacerbations
  - Reduces unnecessary antibiotics

Sputum Biomarkers:
  - Neutrophils vs eosinophils
  - Guides phenotype-directed therapy
------------------------------------------------------------


*Digital Health Integration:*

Connected Care for COPD:
------------------------------------------------------------
Wearable Sensors:
  - Activity monitoring
  - Respiratory rate tracking
  - Exacerbation prediction
  - Medication adherence

Smart Inhalers:
  - Use tracking
  - Technique feedback
  - Dose reminders
  - Data sharing with providers

Remote Monitoring:
  - Home spirometry
  - Pulse oximetry
  - Symptom diaries
  - Early intervention

AI-Powered Tools:
  - Exacerbation risk prediction
  - Personalized recommendations
  - Treatment optimization
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'FeNO', definition: 'Fractional exhaled nitric oxide' },
        { term: 'smart inhaler', definition: 'Inhaler with electronic use tracking' },
        { term: 'digital therapeutics', definition: 'FDA-regulated software for medical treatment' },
      ],
      clinicalNotes: 'Blood eosinophils guide ICS use. Connected inhaler devices improve adherence and provide useful adherence data.',
      patientCounselingPoints: [
        'Blood tests help personalize your COPD treatment.',
        'Smart inhaler devices can help track your medication use and improve adherence.',
        'Remote monitoring helps your doctor catch problems early.',
        'AI technology may soon help predict and prevent exacerbations.',
        'Your COPD management continues to evolve with new research and technologies.',
      ],
    },
  },

  media: [
    {
      id: 'copd-management-options',
      type: 'diagram',
      filename: 'copd-management-pyramid.svg',
      title: 'COPD Management Options',
      description: 'Hierarchy of COPD management interventions',
    },
    {
      id: 'inhaler-technique',
      type: 'diagram',
      filename: 'inhaler-use-technique.svg',
      title: 'Proper Inhaler Technique',
      description: 'Step-by-step guide for proper inhaler use',
    },
  ],

  citations: [
    {
      id: 'gold-2024',
      type: 'article',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease',
      source: 'GOLD Report 2024',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-copd-overview', targetType: 'condition', relationship: 'parent', label: 'COPD Overview' },
    { targetId: 'chronic-disease-copd-exacerbations', targetType: 'condition', relationship: 'related', label: 'COPD Exacerbations' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['COPD', 'management', 'bronchodilators', 'pulmonary rehabilitation'],
    keywords: ['COPD management', 'inhalers', 'breathing exercises', 'oxygen therapy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
