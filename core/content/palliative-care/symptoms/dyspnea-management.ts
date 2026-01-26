/**
 * Dyspnea Management - Educational Content
 *
 * Comprehensive content on dyspnea (shortness of breath) assessment
 * and management in palliative care settings.
 */

import { EducationalContent } from '../../types';

export const dyspneaManagement: EducationalContent = {
  id: 'symptom-dyspnea',
  type: 'concept',
  name: 'Dyspnea Management',
  alternateNames: ['Shortness of Breath', 'Breathlessness', 'Air Hunger'],

  levels: {
    1: {
      level: 1,
      summary: 'Dyspnea means feeling short of breath or having trouble breathing. There are many ways to help you breathe more easily and feel more comfortable.',
      explanation: `**What Is Dyspnea?**

Dyspnea (say: disp-NEE-uh) is the medical word for feeling short of breath. It can feel like:
- You cannot catch your breath
- Your chest feels tight
- You are breathing hard but not getting enough air
- Breathing takes extra work

**Why Does It Happen?**

Many things can cause shortness of breath when you are sick:
- Lung problems (fluid, infection, disease)
- Heart problems
- Being very weak or tired
- Anxiety and worry
- Anemia (low blood count)

**How Can You Feel Better?**

**Medicines That Help**
- Medicines to open your airways
- Medicines to remove extra fluid
- Medicine for pain can actually help breathing too
- Medicine for anxiety if worry makes it worse

**Things You Can Do**
- Sit up or lean forward slightly
- Use a fan to blow air on your face
- Practice breathing slowly through pursed lips (like blowing out candles gently)
- Stay calm - panic makes breathing feel worse
- Open a window for fresh air
- Do activities slowly with rest breaks

**Oxygen**
Some people need extra oxygen through a tube or mask. Your doctor will check if this would help you.

**When to Get Help Right Away**
- Suddenly cannot breathe at all
- Lips or fingers turn blue
- Chest pain with shortness of breath
- Breathing gets much worse very quickly`,
      keyTerms: [
        { term: 'dyspnea', definition: 'The medical word for feeling short of breath or having trouble breathing', pronunciation: 'DISP-nee-uh' },
        { term: 'oxygen', definition: 'A gas in the air we breathe that our body needs; can be given through a tube' },
        { term: 'pursed lip breathing', definition: 'A breathing technique where you breathe out slowly through lips almost closed, like whistling' },
      ],
      analogies: [
        'Feeling short of breath is like trying to breathe through a narrow straw. Treatment helps make that straw wider so air flows more easily.',
        'A fan on your face is like a breath of fresh air that tells your brain "there is enough air" and helps you relax.',
      ],
      examples: [
        'Using a small fan pointed at your face can make breathing feel easier, even without extra oxygen.',
        'Sitting up in bed with pillows behind you can make breathing more comfortable than lying flat.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dyspnea is a subjective sensation of breathing discomfort that requires systematic assessment of underlying causes and multimodal treatment addressing both the symptom and its impact on quality of life.',
      explanation: `## Understanding Dyspnea

### What Causes Dyspnea?

**Respiratory Causes**
- Lung disease (COPD, cancer, fibrosis)
- Pleural effusion (fluid around the lung)
- Pneumonia or infection
- Airway obstruction
- Pulmonary embolism (blood clot)

**Cardiac Causes**
- Heart failure
- Pericardial effusion (fluid around the heart)
- Arrhythmias

**Systemic Causes**
- Anemia (low red blood cells)
- Deconditioning and weakness
- Ascites (fluid in abdomen pushing up)
- Anxiety and panic

### Assessment

**Questions to Ask**
- When does it occur? At rest or with activity?
- How severe is it? (0-10 scale)
- What makes it better or worse?
- Any associated symptoms (cough, pain, anxiety)?
- How does it affect daily activities?

**Important Signs**
- Breathing rate and effort
- Oxygen saturation (pulse ox)
- Use of accessory muscles
- Ability to speak in sentences
- Mental status changes

### Treatment Approaches

**Treat Reversible Causes**
- Drain pleural effusion
- Treat infection
- Blood transfusion for anemia
- Diuretics for heart failure

**Medications for Symptom Relief**

*Opioids*
- Most effective medication for dyspnea
- Work even without pain
- Low doses often help
- Do not accelerate death when used properly

*Bronchodilators*
- If any wheezing or bronchospasm component
- Albuterol nebulizer or inhaler

*Anxiolytics*
- If significant anxiety component
- Benzodiazepines (lorazepam)

*Corticosteroids*
- For airway inflammation
- Tumor-related obstruction

**Non-Medication Approaches**

*Fan Therapy*
- Portable fan directed at face
- Stimulates trigeminal nerve
- Evidence-based, simple, effective

*Positioning*
- Sitting upright
- Leaning forward with arms supported
- Sleeping with head elevated

*Breathing Techniques*
- Pursed lip breathing
- Diaphragmatic breathing
- Paced breathing during activities

*Energy Conservation*
- Plan activities, take breaks
- Use assistive devices
- Prioritize important activities

*Oxygen Therapy*
- If hypoxemic (low oxygen levels)
- May not help if oxygen is normal
- Trial may be reasonable

### When to Reassess
- Symptoms worsen
- New symptoms develop
- Current treatment not working
- Goals of care change`,
      keyTerms: [
        { term: 'pleural effusion', definition: 'Fluid buildup between the layers covering the lung, which can cause breathlessness', pronunciation: 'PLOOR-ul eh-FYOO-zhun' },
        { term: 'hypoxemia', definition: 'Low oxygen levels in the blood', pronunciation: 'hi-pok-SEE-mee-uh' },
        { term: 'bronchodilator', definition: 'Medicine that opens up the airways to make breathing easier', pronunciation: 'BRONK-oh-DY-lay-tor' },
        { term: 'accessory muscles', definition: 'Neck and shoulder muscles used when breathing is difficult' },
        { term: 'diaphragmatic breathing', definition: 'Deep breathing using the diaphragm muscle for more efficient breathing' },
      ],
      analogies: [
        'Opioids for dyspnea work like turning down the volume on a smoke alarm - the sensation of breathlessness is reduced even if the underlying condition remains.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dyspnea management requires understanding the neurophysiology of breathlessness, evidence-based pharmacological interventions (particularly opioids), and integration of non-pharmacological approaches in a comprehensive symptom management plan.',
      explanation: `## Neurophysiology of Dyspnea

### Central Processing

**Cortical Perception**
- Insular cortex: Interoceptive awareness
- Anterior cingulate cortex: Affective component
- Limbic system: Emotional response

**Afferent Inputs**
- Chemoreceptors: CO2, pH, O2 levels
- Mechanoreceptors: Lung stretch, chest wall
- Pulmonary C-fibers: Irritant receptors
- Respiratory muscle afferents: Sense of effort

### Mechanisms of Dyspnea

**Increased Ventilatory Demand**
- Hypoxemia, hypercapnia
- Metabolic acidosis
- Anemia

**Increased Work of Breathing**
- Airway obstruction
- Reduced compliance
- Respiratory muscle weakness

**Neuromechanical Dissociation**
- Mismatch between effort and ventilation
- "Air hunger" sensation

### Evidence-Based Pharmacotherapy

**Opioids**

*Mechanism*
- Reduce central perception of dyspnea
- Decrease ventilatory response to CO2 and hypoxia
- Anxiolysis

*Evidence Base*
- Multiple RCTs and meta-analyses support efficacy
- Cochrane review: Significant benefit for dyspnea
- No evidence of hastened death at appropriate doses

*Dosing*
- Opioid-naive: Morphine 2-5 mg PO q4h or 1-2 mg IV/SC
- Opioid-tolerant: 25% increase in baseline dose
- Nebulized: 2.5-5 mg morphine (evidence limited)

*Monitoring*
- Respiratory rate (concern if <8-10/min)
- Level of sedation
- Symptom response

**Benzodiazepines**

*Indication*
- Anxiety component
- Adjunct to opioids

*Evidence*
- Less evidence than opioids
- May help when anxiety prominent
- Lorazepam 0.5-1 mg q4-6h PRN

**Corticosteroids**

*Indications*
- Superior vena cava syndrome
- Lymphangitic carcinomatosis
- Airway obstruction from tumor
- COPD exacerbation

*Dosing*
- Dexamethasone 4-8 mg/day
- Prednisone 40-60 mg/day

### Non-Pharmacological Interventions

**Fan Therapy**
- Handheld or table fan directed at face
- Nasal/facial trigeminal nerve stimulation
- Reduces perception of dyspnea
- RCT evidence supports benefit

**Pulmonary Rehabilitation**
- For patients with adequate prognosis
- Exercise training, education
- Improves dyspnea and function

**Breathing Techniques**
- Pursed lip breathing: Prolongs expiration, reduces air trapping
- Diaphragmatic breathing: More efficient ventilation
- Paced breathing: Match breath to activity

**Energy Conservation**
- Occupational therapy assessment
- Activity pacing
- Assistive devices
- Environmental modifications

**Oxygen Therapy**
- Clear benefit if hypoxemic (SpO2 <88-90%)
- Limited evidence if normoxemic
- Symptomatic trial reasonable
- May have placebo effect

**Neuromuscular Electrical Stimulation (NMES)**
- For severe COPD
- May improve exercise tolerance

### Palliative Interventions for Malignant Effusions

**Pleural Effusion**
- Thoracentesis: Immediate relief, recurs
- Indwelling pleural catheter: Long-term drainage
- Pleurodesis: Prevent reaccumulation

**Pericardial Effusion**
- Pericardiocentesis
- Pericardial window

**Ascites**
- Paracentesis
- Consider indwelling catheter if recurrent`,
      keyTerms: [
        { term: 'neuromechanical dissociation', definition: 'Mismatch between respiratory effort and achieved ventilation, causing air hunger' },
        { term: 'lymphangitic carcinomatosis', definition: 'Cancer spread through lymphatic channels of the lung', pronunciation: 'lim-fan-JIT-ik kar-sin-oh-muh-TOE-sis' },
        { term: 'pleurodesis', definition: 'Procedure to adhere lung to chest wall, preventing fluid reaccumulation', pronunciation: 'ploor-oh-DEE-sis' },
        { term: 'indwelling pleural catheter', definition: 'Tunneled catheter allowing ongoing drainage of pleural fluid at home' },
        { term: 'thoracentesis', definition: 'Procedure to drain fluid from around the lung', pronunciation: 'THOR-uh-sen-TEE-sis' },
      ],
      clinicalNotes: 'Opioids are the most effective pharmacological treatment for dyspnea. Start low-dose morphine (2-5 mg PO q4h) in opioid-naive patients. Fan therapy is evidence-based and should be recommended to all patients. Oxygen helps hypoxemic patients but has limited benefit if SpO2 >90%. Consider indwelling pleural catheter for recurrent malignant effusion.',
    },
    4: {
      level: 4,
      summary: 'Advanced dyspnea management integrates pathophysiology-based treatment selection, evidence synthesis for opioid use, management of refractory breathlessness, and palliative interventional procedures.',
      explanation: `## Advanced Pathophysiology

### Neuroimaging Studies

**fMRI Research**
- Dyspnea activates insula, anterior cingulate, amygdala
- Similar neural networks to pain
- Affective and sensory components separable
- Explains benefit of psychological interventions

### Phenotypes of Dyspnea

**Air Hunger**
- Cannot get enough air
- Related to CO2/pH chemoreception
- Responsive to opioids

**Work/Effort**
- Breathing takes too much work
- Related to respiratory muscle load
- May respond to breathing techniques

**Chest Tightness**
- Constriction sensation
- Related to bronchoconstriction
- Responsive to bronchodilators

## Evidence Synthesis: Opioids for Dyspnea

### Key Studies

**Abernethy et al., BMJ 2003**
- 48 patients, crossover RCT
- Sustained-release morphine 20 mg vs placebo
- Significant improvement in dyspnea intensity

**Currow et al., Thorax 2011**
- 83 patients, parallel RCT
- Morphine 20 mg/day vs placebo
- Improved breathlessness without excess adverse effects

**Verberkt et al., JAMA IM 2017**
- 111 patients with refractory dyspnea
- Morphine 10 mg bid vs placebo
- No significant benefit (possible dose issue)

### Meta-Analyses

**Cochrane Review (2019)**
- Systemic opioids vs placebo
- Small statistically significant benefit
- Standardized mean difference -0.32

### Clinical Interpretation
- Evidence supports opioid efficacy
- Effect size modest but clinically meaningful
- No evidence of respiratory depression at low doses
- Benefits outweigh risks in appropriate patients

## Refractory Dyspnea

### Definition
- Persistent dyspnea despite optimal treatment of underlying cause
- Significant distress and functional impairment
- Adequate trial of standard therapies

### Management Approach

**Step 1: Reassess**
- Reversible causes adequately treated?
- Opioids at adequate dose?
- Non-pharmacological measures tried?

**Step 2: Optimize Current Therapy**
- Increase opioid dose incrementally
- Add/optimize bronchodilators
- Ensure fan therapy used

**Step 3: Add Adjunctive Therapy**
- Benzodiazepines (if anxiety prominent)
- Nebulized opioids (limited evidence)
- Mirtazapine (emerging evidence)

**Step 4: Consider Specialized Interventions**
- Pulmonary rehabilitation (if functional status allows)
- High-flow nasal cannula
- Non-invasive ventilation (selected patients)
- Palliative sedation (truly refractory, end of life)

### Emerging Therapies

**Mirtazapine**
- 5-HT3 antagonist, noradrenergic
- Small studies suggest benefit
- 15 mg at night, may help sleep too

**High-Flow Nasal Cannula (HFNC)**
- Humidified, heated high-flow oxygen
- May improve comfort vs standard oxygen
- Useful in acute settings

**Heliox**
- Helium-oxygen mixture
- Reduces airway resistance
- Limited evidence, expensive

## Palliative Procedures

### Indwelling Pleural Catheters (IPC)

**Indications**
- Recurrent symptomatic malignant pleural effusion
- Failed pleurodesis
- Trapped lung

**Technique**
- Tunneled silicone catheter
- Home drainage 2-3 times weekly
- Pleurodesis occurs in 40-60%

**Complications**
- Infection (5-10%)
- Catheter malfunction
- Pain at insertion site

### Endobronchial Interventions

**Stenting**
- For central airway obstruction
- Silicone or metallic stents

**Laser/Electrocautery**
- Debulking of obstructing tumor
- Immediate relief

**Brachytherapy**
- Radiation via bronchoscope
- For endobronchial tumors

### Superior Vena Cava Syndrome

**Presentation**
- Dyspnea, facial swelling, headache
- From tumor compression or thrombosis

**Management**
- Dexamethasone 8-16 mg/day
- Radiation (if radiation-sensitive)
- Stenting (rapid relief)
- Anticoagulation (if thrombosis)`,
      keyTerms: [
        { term: 'HFNC', definition: 'High-Flow Nasal Cannula - delivers heated, humidified oxygen at high flow rates' },
        { term: 'trapped lung', definition: 'Lung that cannot expand due to pleural disease, limiting pleurodesis success' },
        { term: 'mirtazapine', definition: 'Antidepressant with emerging evidence for dyspnea via serotonergic mechanism' },
        { term: 'heliox', definition: 'Helium-oxygen mixture reducing airway resistance' },
        { term: 'endobronchial', definition: 'Within the bronchial airways', pronunciation: 'EN-doh-BRONK-ee-ul' },
      ],
      clinicalNotes: 'For refractory dyspnea: 1) Ensure opioid dose adequate (increase 25-50% if tolerated), 2) Confirm fan therapy in use, 3) Consider adding benzodiazepine if anxiety prominent. For malignant effusion: IPC preferred over repeated thoracentesis. For central airway obstruction: refer for interventional pulmonology evaluation.',
    },
    5: {
      level: 5,
      summary: 'Expert dyspnea management encompasses precision symptom assessment, implementation of evidence-based protocols, leadership in research and quality improvement, and addressing disparities in breathlessness care.',
      explanation: `## Precision Dyspnea Assessment

### Multidimensional Measurement

**Intensity (Sensory)**
- Numeric rating scale (0-10)
- Modified Borg Scale (0-10)
- Visual analog scale

**Affective Dimension**
- Distress, anxiety, fear
- Cancer Dyspnea Scale (affective domain)

**Functional Impact**
- MRC Dyspnea Scale
- Baseline/Transition Dyspnea Index
- Activities of daily living impact

**Quality of Life**
- Chronic Respiratory Questionnaire
- St. George Respiratory Questionnaire

### Patient-Reported Outcome Integration

**ESAS-r**
- Single item for dyspnea
- Routine screening tool

**Dyspnea-Specific PROs**
- Consider for detailed assessment
- Research applications
- Quality improvement tracking

## Research Frontiers

### Opioid Mechanisms Research

**Central Mechanisms**
- fMRI studies of opioid effect on dyspnea processing
- Role of specific opioid receptors

**Peripheral Mechanisms**
- Pulmonary opioid receptors
- Role in nebulized opioid effect

**Optimal Dosing**
- Dose-response relationships
- Individual variability
- Long-acting vs. short-acting

### Novel Therapeutic Targets

**Serotonergic System**
- Mirtazapine research
- Buspirone trials (mixed results)

**Endocannabinoid System**
- Limited research
- Theoretical rationale

**Peripheral Chemoreceptor Modulation**
- Domperidone (carotid body effects)
- Early-phase research

### Biomarkers

**Potential Markers**
- Pro-BNP (cardiac component)
- Inflammatory markers
- Metabolic markers

**Limitations**
- Dyspnea is subjective sensation
- Biomarkers may not correlate with perception

## Quality Improvement

### Dyspnea Management Quality Metrics

**Structure**
- Palliative care availability
- Interventional pulmonology access
- Non-pharmacological program availability

**Process**
- Dyspnea assessment documented
- Treatment plan documented
- Opioid prescribed when appropriate
- Non-pharmacological interventions offered

**Outcome**
- Dyspnea severity scores
- Patient satisfaction
- Healthcare utilization

### Protocol Development

**Elements**
- Systematic assessment
- Treatment algorithm
- Response evaluation
- Escalation pathway

**Implementation**
- EHR decision support
- Order sets
- Staff education
- Audit and feedback

## Disparities in Dyspnea Care

### Documented Disparities

**Opioid Prescribing**
- Lower rates in minority populations
- Physician bias in symptom assessment
- Cultural barriers to reporting

**Access to Palliative Care**
- Rural areas underserved
- Socioeconomic barriers
- Insurance coverage differences

**Interventional Procedures**
- Availability varies by center
- Referral patterns may vary by demographics

### Strategies to Address

- Education on implicit bias
- Standardized assessment protocols
- Telehealth palliative care
- Reducing financial barriers
- Community engagement

## Special Populations

### Pediatric Dyspnea

**Assessment Challenges**
- Age-appropriate tools needed
- Parent proxy reporting
- Behavioral observation

**Management**
- Same principles as adults
- Opioid dosing by weight
- Family-centered approach

### Dyspnea in Dementia

**Challenges**
- Cannot self-report
- Behavioral changes may indicate dyspnea
- Assessment tools limited

**Approach**
- Observe for signs (respiratory rate, accessory muscle use)
- Trial of treatment with reassessment
- Caregiver input essential

### End-of-Life Dyspnea

**Prevalence**
- 50-70% in final days
- Often increases as death approaches

**Management**
- Opioids: May need higher doses
- Anxiolytics: Benzodiazepines
- Anticholinergics: For secretions (death rattle)
- Oxygen: Usually not helpful if dying
- Family support: Explain what they may observe

**Palliative Sedation**
- For truly refractory, unbearable dyspnea
- Requires informed consent
- Proportional sedation first
- Documentation of refractoriness`,
      keyTerms: [
        { term: 'Modified Borg Scale', definition: 'Validated 0-10 scale for rating dyspnea intensity' },
        { term: 'Cancer Dyspnea Scale', definition: 'Multidimensional dyspnea assessment with sensory, affective, and cognitive domains' },
        { term: 'MRC Dyspnea Scale', definition: 'Medical Research Council scale grading dyspnea by activity limitation' },
        { term: 'implicit bias', definition: 'Unconscious attitudes affecting clinical decision-making' },
        { term: 'carotid body', definition: 'Peripheral chemoreceptor sensing blood oxygen and CO2 levels' },
      ],
      clinicalNotes: `Expert-level dyspnea management priorities:
1. Use multidimensional assessment (intensity, distress, functional impact)
2. Implement standardized dyspnea protocols with EHR decision support
3. Ensure opioids prescribed appropriately - evidence supports safety and efficacy
4. Address disparities through standardized assessment and bias training
5. For dementia: observe for behavioral signs, use trial of treatment
6. At end of life: increase opioid dose as needed, anticipate worsening, support family
7. Lead research and quality improvement in breathlessness care`,
    },
  },

  media: [
    {
      id: 'dyspnea-algorithm',
      type: 'diagram',
      filename: 'dyspnea-management-algorithm.svg',
      title: 'Dyspnea Management Algorithm',
      description: 'Flowchart for assessment and treatment of dyspnea in palliative care',
    },
    {
      id: 'fan-therapy-diagram',
      type: 'diagram',
      filename: 'fan-therapy-technique.svg',
      title: 'Fan Therapy for Dyspnea',
      description: 'Illustration of proper fan positioning for dyspnea relief',
    },
  ],

  citations: [
    {
      id: 'cochrane-opioids-dyspnea',
      type: 'article',
      title: 'Opioids for the palliation of refractory breathlessness in adults with advanced disease and terminal illness',
      authors: ['Barnes, H.', 'McDonald, J.', 'Smallwood, N.', 'Manser, R.'],
      source: 'Cochrane Database of Systematic Reviews',
      url: 'https://doi.org/10.1002/14651858.CD011008.pub2',
    },
    {
      id: 'abernethy-morphine-copd',
      type: 'article',
      title: 'Randomised, double blind, placebo controlled crossover trial of sustained release morphine for the management of refractory dyspnoea',
      authors: ['Abernethy, A.P.', 'Currow, D.C.', 'Frith, P.', 'et al.'],
      source: 'BMJ',
      url: 'https://doi.org/10.1136/bmj.326.7398.1117',
    },
  ],

  crossReferences: [
    { targetId: 'symptom-overview', targetType: 'topic', relationship: 'parent', label: 'Symptom Management Overview' },
    { targetId: 'symptom-pain', targetType: 'topic', relationship: 'sibling', label: 'Pain Management' },
    { targetId: 'concept-comfort-care', targetType: 'concept', relationship: 'related', label: 'Comfort Care Measures' },
  ],

  tags: {
    systems: ['palliative-care', 'respiratory'],
    topics: ['dyspnea', 'breathlessness', 'symptom management', 'opioids'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dyspneaManagement;
