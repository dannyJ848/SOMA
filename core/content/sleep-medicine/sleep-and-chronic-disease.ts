/**
 * Sleep and Chronic Disease - Comprehensive Educational Content
 *
 * Covers the bidirectional relationships between sleep disorders and
 * chronic medical conditions including cardiovascular, metabolic,
 * neurodegenerative, and psychiatric diseases.
 */

import { EducationalContent } from '../types';

export const sleepAndChronicDisease: EducationalContent = {
  id: 'concept-sleep-and-chronic-disease',
  type: 'concept',
  name: 'Sleep and Chronic Disease',
  alternateNames: [
    'Sleep-Disordered Breathing and Systemic Disease',
    'Sleep and Medical Comorbidities',
    'Cardiometabolic Consequences of Sleep Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Poor sleep can make many health problems worse, and having health problems can also make it harder to sleep well - it works both ways.',
      explanation: `**The Sleep-Health Connection**

Sleep is not just about feeling rested - it's essential for keeping your body healthy. When you don't sleep well, it can affect many parts of your body. And when you have health problems, they can also mess up your sleep!

**Health Problems Linked to Poor Sleep:**

**Heart and Blood Problems:**
- High blood pressure
- Heart disease
- Stroke
- People with sleep apnea have higher chances of heart problems

**Sugar and Weight Problems:**
- Type 2 diabetes
- Weight gain and obesity
- Harder to control blood sugar when sleep is poor

**Brain and Mood Problems:**
- Memory problems
- Depression and anxiety
- Higher risk of Alzheimer's disease

**Body-Wide Inflammation:**
- Poor sleep increases inflammation throughout the body
- Inflammation is linked to many chronic diseases

**Why Does This Happen?**

Think of sleep like your body's repair time:
- While you sleep, your heart gets a break
- Your brain cleans out waste products
- Your body repairs damaged cells
- Hormones that control appetite and blood sugar work properly

When you skip this repair time, problems build up over time.

**The Good News:**
- Treating sleep problems (like using a CPAP for apnea) can improve other health conditions
- Better sleep habits can help control blood pressure, blood sugar, and weight
- Getting good sleep is just as important as eating healthy and exercising`,
      keyTerms: [
        { term: 'sleep apnea', definition: 'A condition where breathing stops and starts during sleep' },
        { term: 'inflammation', definition: 'The body\'s response to injury or infection; chronic inflammation can damage the body' },
        { term: 'CPAP', definition: 'A machine that helps with sleep apnea by gently blowing air into a mask while you sleep' },
        { term: 'chronic disease', definition: 'A health condition that lasts a long time or keeps coming back' },
      ],
      analogies: [
        'Sleep is like charging your phone - if you don\'t charge it properly, other apps (body systems) won\'t work well either.',
        'Your body during sleep is like a night shift cleaning crew - they come in to clean and repair everything for the next day.',
      ],
      examples: [
        'Someone with diabetes might find it harder to control their blood sugar if they also have untreated sleep apnea.',
        'Treating sleep apnea with CPAP can lower blood pressure in people with hypertension.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep disorders have bidirectional relationships with many chronic diseases, including cardiovascular disease, diabetes, obesity, depression, and neurodegenerative disorders. Poor sleep contributes to disease progression, and these conditions also disrupt sleep architecture.',
      explanation: `## Bidirectional Relationships

The relationship between sleep and chronic disease is bidirectional - each affects the other in a vicious cycle:

**Sleep Problems Lead to:**
- Hormonal imbalances
- Increased inflammation
- Metabolic dysfunction
- Impaired tissue repair
- Weakened immune system

**Chronic Diseases Lead to:**
- Pain/discomfort disrupting sleep
- Medication side effects
- Direct organ system effects
- Psychological stress

## Cardiovascular Disease

**Hypertension:**
- Sleep deprivation increases sympathetic nervous system activity
- Normal "dip" in blood pressure during sleep is blunted
- Non-dippers have higher cardiovascular risk
- OSA is a common secondary cause of hypertension

**Coronary Artery Disease:**
- Short sleep duration (<6 hours) increases MI risk
- OSA associated with CAD, independent of other risk factors
- Nocturnal hypoxemia causes endothelial dysfunction
- Treating OSA may reduce cardiovascular events

**Heart Failure:**
- OSA present in 30-50% of HF patients
- Central sleep apnea (Cheyne-Stokes) common in HFrEF
- Sleep-disordered breathing worsens HF prognosis
- Positive airway pressure can improve EF in some patients

**Arrhythmias:**
- OSA increases risk of AFib, PVCs, and nocturnal bradyarrhythmias
- Nocturnal hypoxemia triggers arrhythmogenic pathways

## Metabolic Disease

**Type 2 Diabetes:**
- Short sleep increases insulin resistance
- Poor sleep impairs glucose tolerance
- OSA is highly prevalent in diabetics
- Sleep affects hormones regulating appetite:
  - Decreases leptin (satiety hormone)
  - Increases ghrelin (hunger hormone)

**Obesity:**
- Bidirectional relationship: obesity worsens OSA, OSA promotes weight gain
- Sleep deprivation reduces physical activity and increases calorie intake
- Fatigue leads to poor dietary choices

## Neurodegenerative Disease

**Alzheimer's Disease:**
- Sleep disturbances are common early symptoms
- Glymphatic system clears amyloid-beta during sleep
- Poor sleep may accelerate amyloid accumulation
- OSA treatment may slow cognitive decline

**Parkinson's Disease:**
- REM sleep behavior disorder often precedes motor symptoms
- Sleep disorders affect quality of life

## Mental Health

**Depression:**
- 80% of depressed patients have sleep disturbances
- Insomnia is both a symptom and risk factor
- Sleep disruption precedes depressive episodes in many cases

**Anxiety:**
- Hyperarousal interferes with sleep initiation
- Sleep loss increases anxiety symptoms`,
      keyTerms: [
        { term: 'bidirectional', definition: 'When two things affect each other in both directions', pronunciation: 'by-di-REK-shun-al' },
        { term: 'glymphatic system', definition: 'Brain waste clearance system active during sleep', pronunciation: 'glim-FAT-ik' },
        { term: 'insulin resistance', definition: 'When cells don\'t respond properly to insulin, leading to high blood sugar' },
        { term: 'sympathetic nervous system', definition: 'The "fight or flight" system that activates during stress' },
        { term: 'Cheyne-Stokes respiration', definition: 'Abnormal breathing pattern with cycles of deeper and faster breathing followed by slower breathing', pronunciation: 'chain-stokes' },
      ],
      analogies: [
        'The bidirectional relationship is like a game of tennis - each side (sleep and disease) hits the ball back to the other, making the problem worse.',
        'The glymphatic system is like a dishwasher that runs at night - if you don\'t run the dishwasher, the dirty dishes (waste products) pile up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep disorders contribute to the pathogenesis of systemic diseases through sympathetic activation, inflammation, oxidative stress, and hormonal dysregulation. OSA is particularly linked to cardiovascular and metabolic morbidity, while sleep disturbances accelerate neurodegenerative processes.',
      explanation: `## Pathophysiological Mechanisms

### Sympathetic Nervous System Activation

**Sleep Deprivation Effects:**
- Increased catecholamines (norepinephrine, epinephrine)
- Elevated heart rate and blood pressure
- Reduced heart rate variability
- Increased vascular tone

**OSA-Specific Mechanisms:**
- Apnea events trigger sympathetic surges
- Arousal from sleep activates stress response
- Persistent daytime sympathetic tone
- Endothelial dysfunction from repeated hypoxia-reoxygenation

### Inflammation and Immune Dysfunction

**Pro-inflammatory Cytokines:**
- IL-6: Elevated in sleep deprivation and OSA
- TNF-α: Increased in sleep disorders
- CRP: Markedly elevated in OSA

**Immune Cell Changes:**
- Natural killer cell dysfunction
- Altered T-cell responses
- Increased leukocyte adhesion

### Oxidative Stress

**Reactive Oxygen Species (ROS):**
- Intermittent hypoxia-reoxygenation cycles generate ROS
- Antioxidant capacity overwhelmed
- Oxidative damage to proteins, lipids, DNA
- Mitochondrial dysfunction

### Metabolic and Hormonal Dysregulation

**Glucose Metabolism:**
- Decreased insulin sensitivity
- Reduced glucose tolerance
- Impaired pancreatic beta-cell function
- Altered counter-regulatory hormone secretion

**Appetite Regulation:**
| Hormone | Sleep Effect | Consequence |
|---------|--------------|-------------|
| Leptin | Decreased | Reduced satiety |
| Ghrelin | Increased | Increased hunger |
| Cortisol | Elevated evening | Promotes gluconeogenesis |

**Growth Hormone:**
- Primarily secreted during slow-wave sleep
- Disrupted in sleep disorders
- Affects body composition

## Cardiovascular Disease Specifics

**Hypertension Pathogenesis:**
1. Sympathetic activation increases peripheral resistance
2. RAAS activation (renin-angiotensin-aldosterone system)
3. Fluid retention from nocturnal renal effects
4. Endothelial dysfunction reduces vasodilation

**Atherosclerosis Promotion:**
- Inflammation accelerates plaque formation
- Oxidative stress oxidizes LDL
- Endothelial dysfunction promotes monocyte adhesion
- Smooth muscle proliferation

**Heart Failure Mechanisms:**
- Increased afterload from hypertension
- Negative intrathoracic pressure increases LV transmural pressure
- Intermittent hypoxemia causes myocardial injury
- Arrhythmias contribute to dysfunction

## Neurodegenerative Disease Mechanisms

**Glymphatic Clearance:**
- CSF-ISF exchange increases 60% during sleep
- Perivascular AQP4 channels essential
- Clears amyloid-beta, tau, alpha-synuclein
- Sleep deprivation impairs waste clearance

**Protein Aggregation:**
- Sleep deprivation increases amyloid production
- Reduced clearance allows accumulation
- Synaptic homeostasis disrupted
- Neuronal injury from chronic hypoxia (OSA)

**REM Sleep Behavior Disorder:**
- Prodromal marker for synucleinopathies
- Loss of normal REM atonia
- Often precedes Parkinson's by years

## Metabolic Syndrome Connection

**Diagnostic Criteria:**
(3 or more of the following)
- Central obesity
- Elevated triglycerides
- Low HDL
- Elevated blood pressure
- Elevated fasting glucose

**Sleep's Role:**
- OSA associated with metabolic syndrome independent of BMI
- Treating OSA improves some components
- Sleep duration inversely related to metabolic syndrome risk`,
      keyTerms: [
        { term: 'catecholamines', definition: 'Hormones (epinephrine, norepinephrine) that activate the fight-or-flight response', pronunciation: 'kat-eh-KOL-ah-meens' },
        { term: 'endothelial dysfunction', definition: 'Impaired function of blood vessel lining, reducing ability to dilate' },
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; regulates blood pressure and fluid balance' },
        { term: 'AQP4', definition: 'Aquaporin-4; water channel essential for glymphatic function' },
        { term: 'synucleinopathies', definition: 'Neurodegenerative disorders characterized by alpha-synuclein accumulation (Parkinson\'s, Lewy body dementia)', pronunciation: 'sik-noo-klee-ROP-ah-thees' },
      ],
      clinicalNotes: 'Screen for OSA in all patients with refractory hypertension, atrial fibrillation, stroke, or difficult-to-control diabetes. CPAP adherence is crucial - only consistent use confers cardiovascular benefit.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of sleep-chronic disease interactions includes molecular mechanisms linking circadian disruption to disease, gene-environment interactions, and evidence-based approaches to sleep disorder management in complex chronic disease patients.',
      explanation: `## Molecular Clocks and Disease

### Circadian Gene Polymorphisms

**Clock Genes and Disease Risk:**
- CLOCK gene variants: Obesity, metabolic syndrome
- BMAL1 variants: Hypertension, diabetes
- PER mutations: Sleep phase disorders, mood disorders
- CRY variants: Metabolic syndrome

**Peripheral Clock Disruption:**
- Tissue-specific circadian rhythms
- Misalignment between central and peripheral clocks
- Shift work as circadian disruption model
- Social jetlag and metabolic consequences

### Epigenetic Mechanisms

**Sleep Deprivation Epigenetics:**
- DNA methylation changes in clock genes
- Histone modification alterations
- microRNA expression changes
- Transgenerational effects

**Disease-Specific Epigenetics:**
- Inflammatory gene hypomethylation
- Metabolic pathway gene dysregulation

## Clinical Implications by Disease

### Heart Failure with Sleep-Disordered Breathing

**Obstructive Sleep Apnea in HF:**
- Prevalence: 50% in HFrEF, 30% in HFpEF
- Pathophysiology: Fluid overload redistributes to neck
- Worsens: Afterload, sympathetic tone, ischemia

**Central Sleep Apnea (CSA) in HF:**
- Cheyne-Stokes respirations in 30-50% of HFrEF
- Driven by: Hyperventilation from pulmonary congestion, circulatory delay, hypersensitivity to CO2
- Prognostic significance: CSA predicts mortality

**Treatment Approaches:**
| Treatment | Indication | Evidence |
|-----------|-----------|----------|
| CPAP | OSA with HF | Strong for symptomatic benefit, blood pressure |
| ASV | HFpEF with CSA | SERVE-HF: Harmful in HFrEF (LVEF ≤45%) |
| Oxygen | CSA | Improves AHI, limited outcome data |
| PAP therapy titration | All HF-SDB | Individualized based on OSA vs CSA |

### Diabetes and Sleep Disorders

**Diabetic Complications:**
- Peripheral neuropathy increases OSA risk (upper airway muscle dysfunction)
- Autonomic neuropathy worsens CSA
- Nephropathy affects fluid handling (worsens OSA)

**Glycemic Effects of CPAP:**
- Modest HbA1c reduction (0.3-0.5%) in adherent users
- Greater benefit in severe OSA
- Synergistic with weight loss

**Timing Considerations:**
- Nocturnal hypoglycemia risk
- Dawn phenomenon and sleep disruption
- Medication timing optimization

### Stroke and Sleep Disorders

**Post-Stroke Sleep Apnea:**
- Prevalence: 50-70% (mostly OSA)
- Contributes to: Stroke recurrence, poor recovery, mortality
- Screening: All stroke patients should undergo sleep study

**Treatment Timing:**
- Early CPAP initiation recommended
- Rehab outcomes improved with CPAP

### Cancer and Sleep

**Epidemiological Links:**
- Short sleep associated with increased cancer incidence
- OSA linked to: Colorectal, melanoma, breast, prostate cancers
- Mechanism: Immune suppression, angiogenesis

**Hypoxia-Inducible Factor (HIF):**
- Chronic intermittent hypoxia activates HIF-1α
- Promotes tumor angiogenesis, metastasis
- Potential therapeutic target

## Therapeutic Optimization

### Personalized PAP Therapy

**Device Selection:**
- CPAP: Fixed pressure (most OSA)
- APAP: Varying pressure (positional OSA, REM-predominant)
- BPAP: Pressure support (hypoventilation, high pressure needs)
- ASV: Adaptive servo-ventilation (CSA - caution in HFrEF)

**Adherence Optimization:**
- Early intervention for mask/interface issues
- Heated humidification for comfort
- Cognitive behavioral therapy for insomnia
- Telemedicine monitoring

### Pharmacologic Considerations

**In Chronic Disease:**

| Disease | Sleep Medication Considerations |
|---------|--------------------------------|
| Heart Failure | Avoid beta-blockers at bedtime if insomnia; avoid digoxin toxicity (symptoms mimic sleep issues) |
| COPD | Avoid benzodiazepines (respiratory depression) |
| Kidney Disease | Dose adjustment for hypnotics (zolpidem, eszopiclone) |
| Liver Disease | Avoid drugs with hepatic metabolism |

**Drug-Sleep Interactions:**
- Beta-blockers: Melatonin suppression, nightmares
- Diuretics: Nocturia
- Statins: Some cause insomnia (less with current agents)
- Steroids: Circadian disruption if dosed incorrectly`,
      keyTerms: [
        { term: 'social jetlag', definition: 'Mismatch between biological clock and social/work schedule causing circadian misalignment' },
        { term: 'ASV', definition: 'Adaptive servo-ventilation; adjusts pressure support breath-by-breath for CSA' },
        { term: 'HIF-1α', definition: 'Hypoxia-inducible factor 1-alpha; transcription factor activated by low oxygen' },
        { term: 'APAP', definition: 'Auto-adjusting positive airway pressure; automatically titrates pressure' },
        { term: 'SERVE-HF', definition: 'Trial showing ASV harm in HFrEF with CSA; changed clinical practice' },
      ],
      clinicalNotes: 'Always screen for sleep-disordered breathing in patients with cardiovascular disease, especially refractory hypertension, atrial fibrillation, and heart failure. ASV is contraindicated in HFrEF (LVEF ≤45%) with predominant CSA based on SERVE-HF trial results.',
    },
    5: {
      level: 5,
      summary: 'Current evidence supports integrated sleep medicine approaches in chronic disease management, with specific attention to precision phenotyping, individual risk stratification, and emerging therapeutic targets that modify disease trajectories through sleep optimization.',
      explanation: `## Evidence-Based Practice Updates

### Cardiovascular Outcomes with PAP Therapy

**Recent RCT Data:**

| Trial | Population | Intervention | Outcome |
|-------|------------|--------------|---------|
| SAVE | OSA with CVD | CPAP vs usual care | No reduction in CV events overall; benefit in adherent subgroup |
| ISAACC | OSA with ACS | CPAP vs usual care | No difference in composite CV outcome |
| RICCADSA | Recent revascularization | CPAP vs usual care | No difference in CV events; symptom benefit |
| HIPARCO | Resistant HTN + OSA | CPAP vs sham | 24-hour BP decreased; night-time benefit most significant |

**Interpretation:**
- Symptom benefit consistently demonstrated
- Hard CV outcome benefit limited to highly adherent patients
- Screening and treatment still indicated for symptom relief
- Ongoing trials targeting specific phenotypes

### Sleep and Neurodegeneration

**Biomarker Research:**
- CSF amyloid-beta and tau fluctuate with sleep-wake cycles
- Sleep deprivation increases CSF Aβ42 acutely
- Chronic poor sleep associated with:
  - Amyloid PET positivity
  - Brain atrophy patterns
  - Cognitive decline trajectory

**Preventive Implications:**
- Sleep optimization as preventive strategy
- OSA treatment may slow cognitive decline
- Mid-life sleep disturbances predict later dementia
- Circadian disruption contributes to protein aggregation

### Precision Sleep Medicine

**Phenotypic Classification:**

**OSA Phenotypes:**
1. **Surgical phenotype**: Tonsillar hypertrophy, craniofacial abnormalities
2. **PAP-responsive phenotype**: Moderate disease, good adherence predictors
3. **REM-predominant phenotype**: Events mainly in REM; may require lower pressure
4. **Positional phenotype**: Events mainly supine; positional therapy effective
5. **Complex phenotype**: High loop gain, low arousal threshold, poor muscle response

**Personalized Therapy Selection:**
- Drug-induced sleep endoscopy for anatomic assessment
- Loop gain measurement for central apnea contribution
- Arousal threshold assessment
- Pharyngeal muscle responsiveness testing

### Emerging Therapeutic Targets

**Pharmacologic:**
- Orexin receptor antagonists for insomnia
- Selective serotonin agents for REM-related disorders
- Anti-inflammatory agents targeting sleep-related inflammation
- HIF pathway modulators

**Device Innovations:**
- Hypoglossal nerve stimulation (implantable)
- Expiratory positive airway pressure (EPAP) valves
- Mandibular advancement devices with adherence monitoring
- Bedside automated PAP titration

### Integrated Care Models

**Multidisciplinary Approaches:**
- Sleep-cardiology clinics for arrhythmia, HF
- Sleep-endocrinology programs for metabolic disease
- Sleep-neurology for neurodegenerative disease
- Behavioral sleep medicine integration

**System-Level Integration:**
- EHR alerts for at-risk patients
- Automated screening tools
- Telemedicine for remote management
- Patient-reported outcome tracking

### Future Directions

**Biomarker Development:**
- Blood-based sleep need markers
- Inflammation signatures for OSA-related CV risk
- Amyloid clearance biomarkers for AD prevention
- Genetic risk stratification

**Prevention Trials:**
- Sleep duration modification for primary prevention
- Circadian alignment interventions in shift workers
- OSA treatment to prevent cognitive decline
- Sleep optimization in metabolic syndrome

**Knowledge Gaps:**
- Optimal sleep duration for disease prevention
- Sex-specific differences in sleep-disease relationships
- Critical windows for intervention
- Dose-response relationships for sleep quality`,
      keyTerms: [
        { term: 'loop gain', definition: 'Ventilatory control stability; high loop gain promotes respiratory instability' },
        { term: 'arousal threshold', definition: 'Level of respiratory stimulus required to trigger arousal from sleep' },
        { term: 'drug-induced sleep endoscopy (DISE)', definition: 'Direct visualization of airway during sedation to identify sites of obstruction' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implantable device stimulating tongue protrusion for OSA' },
        { term: 'positional therapy', definition: 'Interventions to prevent supine sleep in positional OSA' },
        { term: 'EPAP', definition: 'Expiratory positive airway pressure; valve that creates resistance during exhalation' },
      ],
      clinicalNotes: `Clinical practice implications:

1. **Cardiovascular disease**: Continue to screen and treat OSA for symptomatic benefit, blood pressure reduction, and quality of life. Hard outcome benefit remains uncertain but symptomatic improvement alone justifies treatment.

2. **Metabolic disease**: Treat OSA in diabetes; modest glycemic benefit expected. Weight management remains cornerstone; CPAP facilitates weight loss efforts.

3. **Neurodegeneration**: Screen for and treat sleep disorders in patients with cognitive impairment. Consider RBD as red flag for evolving synucleinopathy.

4. **Precision approach**: Consider phenotyping for treatment-resistant cases. Not all OSA is the same - personalized therapy selection improves outcomes.

5. **Adherence is critical**: Benefits correlate with consistent use >4 hours/night. Prioritize adherence support.

6. **Integrated care**: Collaborate with specialists managing comorbid conditions. Sleep medicine enhances overall disease management.`,
    },
  },

  media: [
    {
      id: 'sleep-disease-cycle',
      type: 'diagram',
      filename: 'sleep-chronic-disease-cycle.svg',
      title: 'Bidirectional Sleep-Disease Cycle',
      description: 'Diagram showing how poor sleep worsens disease and disease worsens sleep',
    },
    {
      id: 'osa-cardiovascular-effects',
      type: 'diagram',
      filename: 'osa-cardiovascular-effects.svg',
      title: 'Cardiovascular Effects of OSA',
      description: 'Pathways linking sleep apnea to cardiovascular disease',
    },
  ],

  citations: [
    {
      id: 'aes-osa-cvd',
      type: 'article',
      title: 'Obstructive Sleep Apnea and Cardiovascular Disease',
      authors: ['Javaheri S', 'Barbe F', 'Campos-Rodriguez F', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'sav trial',
      type: 'article',
      title: 'CPAP for Prevention of Cardiovascular Events in Obstructive Sleep Apnea',
      source: 'New England Journal of Medicine',
      chapter: '370:1394-1404',
    },
    {
      id: 'serve-hf-trial',
      type: 'article',
      title: 'Adaptive Servo-Ventilation for Central Sleep Apnea in Systolic Heart Failure',
      authors: ['Cowie MR', 'Woehrle H', 'Wegscheider K', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '373:1095-1105',
    },
  ],

  crossReferences: [
    { targetId: 'condition-obstructive-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Obstructive Sleep Apnea' },
    { targetId: 'condition-central-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Central Sleep Apnea' },
    { targetId: 'process-sleep-physiology', targetType: 'process', relationship: 'parent', label: 'Sleep Physiology' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-type-2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous', 'endocrine', 'respiratory'],
    topics: ['sleep medicine', 'chronic disease', 'comorbidities', 'preventive medicine'],
    keywords: ['sleep apnea', 'cardiovascular disease', 'diabetes', 'metabolic syndrome', 'neurodegeneration'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sleepAndChronicDisease;
