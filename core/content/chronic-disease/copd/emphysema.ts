/**
 * Emphysema - Chronic Disease Education
 *
 * Comprehensive patient education about emphysema,
 * a type of COPD characterized by damage to the air sacs.
 */

import { EducationalContent } from '../../types';

export const EMPHYSEMA: EducationalContent = {
  id: 'chronic-disease-emphysema',
  type: 'condition',
  name: 'Emphysema',
  alternateNames: ['Pulmonary emphysema', 'Pink puffer', 'Panacinar emphysema', 'Centriacinar emphysema'],

  levels: {
    1: {
      level: 1,
      summary: 'Emphysema is a lung condition that damages the air sacs in your lungs, making it hard to breathe. It is usually caused by smoking and gets worse over time, but treatments can help you breathe easier.',
      explanation: `**What Is Emphysema?**

Emphysema is a lung disease that damages the tiny air sacs (alveoli) in your lungs. These air sacs are where oxygen enters your blood. When they are damaged, your body cannot get enough oxygen.

**How Healthy Lungs Work:**

Think of your lungs like a sponge with tiny little balloons:
- When you breathe in, the balloons inflate (fill with air)
- When you breathe out, the balloons deflate (push air out)
- The balloons are stretchy and spring back easily

**What Happens in Emphysema:**


In Emphysema:
---------------------------------
- The tiny air sacs are damaged
- The walls between sacs break down
- Air sacs become larger but fewer
- They lose their stretchiness
- Air gets trapped inside
- Old air cannot get out
- New air cannot get in
---------------------------------


**Common Symptoms:**


Main Symptoms:
---------------------------------
- Shortness of breath (especially with activity)
- Feeling like you cannot get enough air
- Wheezing (whistling sound when breathing)
- Chest tightness
- Weight loss (in later stages)
- Loss of appetite
- Feeling tired
---------------------------------


**What Causes It?**

- Smoking (most common cause)
- Second-hand smoke
- Air pollution
- Chemical fumes or dust at work
- Genetic condition (alpha-1 antitrypsin deficiency)

**How It Affects Breathing:**

Imagine blowing up a balloon:
- Healthy lungs: Balloon inflates and deflates easily
- Emphysema: Balloon is overstretched and floppy - air does not move in or out well

**Treatment:**


Management Options:
---------------------------------
- Quit smoking (most important!)
- Inhaled medications
- Oxygen therapy (if needed)
- Pulmonary rehabilitation
- Breathing exercises
- Avoiding lung irritants
- Getting vaccinated (flu, pneumonia)
- Sometimes surgery for severe cases
---------------------------------


**Living with Emphysema:**

- Learn pursed-lip breathing technique
- Stay active within your limits
- Eat small, frequent meals (easier on breathing)
- Wear loose clothing that does not restrict breathing
- Use oxygen if prescribed
- Avoid things that make breathing worse

**When to Call Your Doctor:**

- More short of breath than usual
- Chest pain
- Fever or coughing up mucus
- Confusion or extreme tiredness
- Lips or fingernails look blue

**Remember:** Quitting smoking can slow down the disease and help you feel better!`,
      keyTerms: [
        { term: 'alveoli', definition: 'Tiny air sacs in the lungs where oxygen enters the blood' },
        { term: 'pursed-lip breathing', definition: 'A breathing technique that helps empty air from the lungs' },
        { term: 'oxygen therapy', definition: 'Using extra oxygen to help your body get enough oxygen' },
        { term: 'genetic condition', definition: 'A condition that runs in families and is passed down through genes' },
      ],
      analogies: [
        'Emphysema is like having lungs that have lost their spring - like an old rubber band that has been stretched too many times.',
        'Think of emphysema like a stretched-out plastic bag - it is floppy and does not snap back.',
      ],
      examples: [
        'John smoked for 35 years and has emphysema. He quit smoking and uses pursed-lip breathing to help with shortness of breath.',
        'Pat has a genetic form of emphysema called alpha-1 antitrypsin deficiency. She receives replacement therapy.',
      ],
      patientCounselingPoints: [
        'Quitting smoking is the single most important thing you can do for your lungs.',
        'Pursed-lip breathing can help you feel less short of breath - practice this technique daily.',
        'Eat smaller, more frequent meals to avoid feeling too full, which can make breathing harder.',
        'Stay as active as you can - exercise helps strengthen your breathing muscles.',
        'If you use oxygen, wear it as prescribed - it helps your heart and body work less hard.',
      ],
    },
    2: {
      level: 2,
      summary: 'Emphysema is a condition characterized by irreversible enlargement of the airspaces distal to the terminal bronchioles, destruction of alveolar walls, and loss of lung elasticity, leading to airflow limitation and impaired gas exchange.',
      explanation: `**Understanding Emphysema:**

Emphysema is a pathological term describing permanent enlargement of airspaces distal to terminal bronchioles, accompanied by destruction of alveolar walls without obvious fibrosis.

**Types of Emphysema:**


Classification:
-----------------------------------------
Centriacinar (Centrilobular):
  - Upper lobes primarily
  - Respiratory bronchioles involved
  - Associated with smoking
  - Most common type

Panacinar (Panlobular):
  - Lower lobes primarily
  - Entire acinus involved
  - Associated with alpha-1 antitrypsin deficiency

Paraseptal (Distal acinar):
  - Adjacent to pleura
  - Can cause pneumothorax
  - May be asymptomatic

Irregular:
  - Associated with scarring
-----------------------------------------


**Pathophysiology:**


Disease Process:
-----------------------------------------
Protease-Antiprotease Imbalance:
  - Smoking → ↑ neutrophils/macrophages
  - Release of elastase
  - Inactivation of alpha-1 antitrypsin
  - Unchecked elastase activity
      ↓
Destruction of Alveolar Walls:
  - Loss of surface area
  - Decreased elastic recoil
  - Airway collapse on expiration
      ↓
Air Trapping and Hyperinflation:
  - Old air cannot exit
  - New air cannot enter
  - Flattened diaphragm
      ↓
Impaired Gas Exchange:
  - Reduced oxygen absorption
  - V/Q mismatch
-----------------------------------------


**Clinical Presentation:**

*Symptoms:*
- Progressive dyspnea (main symptom)
- Initially with exertion, later at rest
- Minimal cough (unlike chronic bronchitis)
- Little sputum production
- Weight loss (common)
- Barrel chest (advanced)

*Physical Examination:*
- Prolonged expiration
- Decreased breath sounds
- Hyperresonance to percussion
- Barrel chest
- Use of accessory muscles
- Digital clubbing (uncommon)

*Classic Presentation:*
- "Pink puffer" (vs chronic bronchitis "blue bloater")
- Thin, tachypneic
- No cyanosis until late
- Maintains normal oxygen longer

**Diagnosis:**

Diagnostic Findings:
-----------------------------------------
Spirometry:
  - FEV1/FVC < 0.70
  - Reduced FEV1
  - Increased TLC (hyperinflation)
  - Increased RV (air trapping)
  - Reduced DLCO (gas transfer)

Chest X-ray:
  - Flattened diaphragm
  - Increased retrosternal airspace
  - Hyperinflated lungs
  - Reduced vascular markings

CT Scan:
  - Emphysema patterns visible
  - Lower attenuation areas
  - Quantitative assessment
-----------------------------------------


**Management:**


Treatment Options:
-----------------------------------------
Smoking Cessation:
  - Most important intervention
  - Slows disease progression

Bronchodilators:
  - LABA (long-acting beta-agonist)
  - LAMA (long-acting muscarinic antagonist)
  - Combination therapy

Pulmonary Rehabilitation:
  - Exercise training
  - Breathing techniques
  - Education
  - Improves symptoms and quality of life

Oxygen Therapy:
  - For severe disease
  - Reduces mortality in hypoxemic patients

Surgical Options (selected):
  - Lung volume reduction
  - Lung transplantation
-----------------------------------------


**Breathing Techniques:**

*Pursed-Lip Breathing:*
1. Breathe in through nose for 2 counts
2. Pucker lips like blowing a kiss
3. Breathe out slowly for 4 counts
4. Creates backpressure to keep airways open

*Diaphragmatic Breathing:*
- Breathing with your diaphragm instead of chest muscles
- More efficient, uses less energy

**Alpha-1 Antitrypsin Deficiency:**

AAT Deficiency Emphysema:
-----------------------------------------
Genetic condition:
  - Lack of protective protein
  - Early-onset emphysema
  - Basal emphysema pattern
  - Family history

Treatment:
  - AAT replacement therapy (IV infusions)
  - Smoking cessation critical
  - Screen family members
-----------------------------------------
`,
      keyTerms: [
        { term: 'alveolar walls', definition: 'Thin tissue separating adjacent air sacs' },
        { term: 'elastic recoil', definition: 'Lungs ability to spring back during exhalation' },
        { term: 'air trapping', definition: 'Air that cannot be exhaled from the lungs' },
        { term: 'barrel chest', definition: 'Rounded, bulging chest from hyperinflated lungs' },
        { term: 'DLCO', definition: 'Diffusing capacity; measures how well gases move from lungs to blood' },
        { term: 'TLC', definition: 'Total lung capacity' },
        { term: 'RV', definition: 'Residual volume; air remaining after full exhalation' },
      ],
      analogies: [
        'The "pink puffer" appearance comes from working so hard to breathe while maintaining oxygen levels.',
      ],
      clinicalNotes: 'Emphysema patients have less sputum and fewer infections than chronic bronchitis patients. Weight loss is common and associated with worse prognosis.',
      patientCounselingPoints: [
        'Pursed-lip breathing helps empty trapped air from your lungs - practice it daily.',
        'Eat small, frequent meals to avoid feeling too full, which makes breathing harder.',
        'Stay active within your limits - muscle weakness worsens breathing difficulty.',
        'Consider genetic testing for alpha-1 antitrypsin deficiency, especially if you have family history.',
        'Join a support group to connect with others living with emphysema.',
      ],
    },
    3: {
      level: 3,
      summary: 'Emphysema is characterized by permanent destruction of alveolar walls and loss of pulmonary capillary bed, resulting in decreased elastic recoil, air trapping, and impaired gas exchange with characteristic clinical and physiologic manifestations.',
      explanation: `**Pathogenesis:**

*Protease-Antiprotease Imbalance:*

Emphysema Pathogenesis:
-----------------------------------------------------
Normal Balance:
  Alpha-1 antitrypsin (A1AT)
    ↓ Neutralizes
  Neutrophil elastase
    ↓ Protects
  Elastin in alveolar walls

Smoking/Inflammation:
  - Activated neutrophils/macrophages
  - Release of neutrophil elastase
  - Oxidative stress inactivates A1AT
  - Smoking directly damages A1AT
    ↓
Protease-Antiprotease Imbalance
    ↓
Unopposed Elastase Activity
    ↓
Elastin Degradation
    ↓
Alveolar Wall Destruction
    ↓
Permanent Enlargement of Airspaces
-----------------------------------------------------


**Morphology:**

Histologic Patterns:
-----------------------------------------------------
Centriacinar (Centrilobular):
  - Respiratory bronchioles primarily involved
  - Distal alveoli spared (early)
  - Upper lobe predominance
  - Smoking-related
  - Focal around bronchioles

Panacinar (Panlobular):
  - Entire acinus uniformly involved
  - Lower lobe predominance
  - A1AT deficiency-related
  - Diffuse involvement

Paraseptal (Distal acinar):
  - Peripheral lobule near pleura
  - Adjacent to septa
  - Risk of pneumothorax
  - May be localized

Advanced Changes:
  - Confluent destruction → bullae formation
  - Loss of capillary bed
  - Pulmonary vascular destruction
-----------------------------------------------------


**Physiologic Abnormalities:**

*Airflow Limitation:*

Mechanisms of Airflow Obstruction:
-----------------------------------------------------
Loss of Elastic Recoil:
  - Radial traction on airways reduced
  - Small airways collapse during expiration
  → Premature airway closure

Hyperinflation:
  - TLC ↑ ( lungs overfilled)
  - RV ↑ (air trapping)
  - FRC ↑ (increased residual volume)
  - Flattened diaphragm
    → Mechanical disadvantage

Air Trapping:
  - Slow emptying
  - Increased work of breathing
  - Dyspnea disproportionate to spirometry
-----------------------------------------------------


*Gas Exchange Abnormality:*

Diffusing Impairment:
-----------------------------------------------------
Destruction:
  - Alveolar surface area ↓
  - Pulmonary capillary bed ↓
      ↓
DLCO ↓ (diffusing capacity)
      ↓
Impaired Oxygen Transfer
      ↓
Exercise desaturation (early)
Resting hypoxemia (late)
-----------------------------------------------------


**Clinical Assessment:**

*Symptom Progression:*

Disease Stages:
-----------------------------------------------------
Early:
  - Dyspnea on exertion
  - Often attributed to aging/deconditioning

Moderate:
  - Noticeable dyspnea with daily activities
  - Avoidance of stairs, hills
  - Social withdrawal

Severe:
  - Dyspnea at rest
  - Orthopnea (difficulty lying flat)
  - Weight loss, muscle wasting
  - Cor pulmonale may develop
-----------------------------------------------------


*Physical Signs:*
- Decreased breath sounds
- Hyperresonant to percussion
- Diaphragmatic movement limited
- Use of accessory muscles
- Tripod position (leaning forward)
- Hoover's sign (inspiratory retraction at costal margin)

**Diagnostics:**

*Quantitative CT:*

CT Assessment of Emphysema:
-----------------------------------------------------
Visual Scoring:
  - Extent of low attenuation areas
  - Distribution pattern
  - Presence of bullae

Quantitative Measures:
  - Percent lung attenuation <-950 HU
  - Emphysema index
  - Lobe distribution
  - Bulla size and location

Clinical Applications:
  - LVRS candidacy assessment
  - Lung cancer screening overlap
  - Disease progression monitoring
-----------------------------------------------------


**Management:**

*Bronchodilator Selection:*

Pharmacologic Approach:
-----------------------------------------------------
Initial:
  LAMA monotherapy
    - Better symptom relief than LABA
    - Less hyperinflation
    - Improved exercise capacity

If Symptoms Persist:
  LABA/LAMA combination
    - Additive bronchodilation
    - Reduced hyperinflation
    - Improved dyspnea

ICS Consideration:
  - Limited benefit in emphysema phenotype
  - Consider only with:
    - Frequent exacerbations
    - High eosinophils
    - Asthma overlap
-----------------------------------------------------


*Surgical Interventions:*

Lung Volume Reduction Surgery (LVRS):
-----------------------------------------------------
Indications:
  - FEV1 15-45% predicted
  - Upper lobe predominant emphysema
  - Low exercise capacity
  - Hyperinflation (TLC >100%)
  - No significant comorbidities

Benefits:
  - Improved survival in selected patients
  - Reduced hyperinflation
  - Improved diaphragm function
  - Better exercise capacity

Contraindications:
  - FEV1 <15% or >45%
  - Diffuse emphysema
  - PaCO2 >55 mm Hg
  - Severe pulmonary hypertension
-----------------------------------------------------


*Bullous Disease:*
- Large bullae (>1 cm) compressing surrounding lung
- Surgical resection if compressive symptoms
- Risk of pneumothorax

**Complications:**

*Pneumothorax:*

Spontaneous Pneumothorax in Emphysema:
-----------------------------------------------------
Risk Factors:
  - Paraseptal emphysema
  - Large bullae
  - Tall, thin body habitus

Presentation:
  - Sudden dyspnea
  - Pleuritic chest pain
  - Reduced breath sounds on affected side

Treatment:
  - Chest tube insertion
  - Possible pleurodesis
  - Surgical bullectomy if recurrent
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'elastic recoil', definition: 'Lung tendency to return to resting volume after inflation' },
        { term: 'radial traction', definition: 'Forces that hold airways open by attachment to lung parenchyma' },
        { term: 'tripod position', definition: 'Leaning forward with arms supported; improves breathing mechanics' },
        { term: 'Hoover sign', definition: 'Inward movement of lower rib cage during inspiration' },
        { term: 'orthopnea', definition: 'Shortness of breath when lying flat' },
      ],
      clinicalNotes: 'Emphysema patients may have significant dyspnea with relatively preserved spirometry due to hyperinflation. LVRS provides survival benefit in carefully selected upper-lobe predominant emphysema patients.',
      patientCounselingPoints: [
        'Your shortness of breath may be worse than your test numbers show due to air trapping.',
        'LVRS or lung transplantation may be options for severe emphysema - ask your doctor if you might be a candidate.',
        'Pursed-lip breathing and leaning forward (tripod position) can help you breathe more easily.',
        'Weight loss is common - eat high-calorie, high-protein foods if losing weight.',
        'Bullae can rupture causing pneumothorax - seek care for sudden increased shortness of breath.',
      ],
    },
    4: {
      level: 4,
      summary: 'Emphysema represents an alveolar-destructive COPD phenotype characterized by loss of elastic recoil, air trapping, and gas exchange impairment, with distinct clinical characteristics requiring targeted management including surgical options in appropriate candidates.',
      explanation: `**Advanced Pathophysiology:**

*Alveolar Destruction Mechanics:*

Cellular and Molecular Pathogenesis:
-----------------------------------------------------
Apoptosis Pathways:
  - Alveolar epithelial cell apoptosis
  - Endothelial cell apoptosis
  - VEGF receptor involvement
  - Senescence of structural cells

Inflammatory Cascade:
  - CD8+ T-cell mediated cytotoxicity
  - Macrophage activation (M1 phenotype)
  - Neutrophil recruitment
  - Protease release (MMP-1, MMP-9, MMP-12)
  - Oxidative stress (ROS overproduction)

Autoimmunity:
  - Anti-elastin antibodies
  - Anti-endothelial cell antibodies
  - Possible autoimmune component

Repair Failure:
  - Stem cell exhaustion
  - Impaired regeneration
  - Fibrosis (limited in pure emphysema)
-----------------------------------------------------


*Heterogeneity of Emphysema:*

Distribution Patterns:
-----------------------------------------------------
Upper Lobe Predominant:
  - Centriacinar emphysema
  - Smoking-related
  - May benefit from LVRS
  - Better prognosis if surgical candidate

Lower Lobe Predominant:
  - Panacinar emphysema
  - A1AT deficiency
  - Less amenable to LVRS
  - May respond to AAT replacement

Diffuse:
  - Widespread involvement
  - Poor surgical candidate
  - Consider transplant

Apical:
  - Paraseptal emphysema
  - Pneumothorax risk
  - May be isolated
-----------------------------------------------------


**Advanced Management:**

*Bronchoscopic Lung Volume Reduction:*

BLVR Options:
-----------------------------------------------------
Endobronchial Valves (e.g., Zephyr):
  - One-way valves
  - Allow air exit, prevent entry
  - Lobe collapse and volume reduction
  - Reversible (removable)
  - Proven benefit in upper-lobe emphysema
  - RCTs show improved FEV1, 6MWD, QoL

Coils:
  - Nitinol coils compress lung parenchyma
  - Reduce hyperinflation
  - Not dependent on fissure completeness

Vapor Ablation:
  - Bronchoscopic thermal vapor ablation
  - Targeted upper lobe treatment
  - Limited availability

Sealants:
  - Biological sealants to collapse target lobe
  - Fissure-independent
-----------------------------------------------------


*Lung Transplantation:*

Transplant Considerations:
-----------------------------------------------------
Indications:
  - FEV1 <15-20% predicted
  - PaO2 <55 mm Hg on oxygen
  - PaCO2 >55 mm Hg
  - Pulmonary hypertension
  - Rapid deterioration

Contraindications:
  - Active smoking (6 months abstinent required)
  - Uncontrolled psychosocial issues
  - Severe comorbidities
  - Inability to comply with regimen

Procedure Options:
  - Single lung transplant (COPD)
  - Bilateral lung transplant (selected)
  - Median survival ~5-7 years

Outcomes:
  - Improved survival (vs medical therapy)
  - Better quality of life
  - Reduced hyperinflation
  - BOS (bronchiolitis obliterans syndrome)
    limits long-term success
-----------------------------------------------------


**Physiologic Consequences:**

*Ventilatory Mechanics:*

Hyperinflation Effects:
-----------------------------------------------------
Increased Lung Volumes:
  - TLC ↑↑ (overdistension)
  - RV ↑↑ (air trapping)
  - FRC ↑ (functional residual capacity)

Diaphragmatic Effects:
  - Flattened, low position
  - Reduced zone of apposition
  - Mechanical disadvantage
  - Increased work of breathing

Respiratory Muscle Function:
  - Increased oxygen consumption
  - Reduced efficiency
  - Muscle fatigue possible
  → Dyspnea out of proportion to airflow
-----------------------------------------------------


**Complications:**

*Pneumothorax:*

Emphysema-Associated Pneumothorax:
-----------------------------------------------------
Risk:
  - Spontaneous pneumothorax
  - Higher recurrence risk
  - May be life-threatening

Management:
  - Chest tube standard
  - Possible chemical pleurodesis
  - Surgical intervention for recurrence:
    - VATS bullectomy
    - Pleural abrasion
    - Pleurectomy

Considerations:
  - Poor tolerance of tension pneumothorax
  - Limited reserve
  - May require urgent intervention
-----------------------------------------------------


*Cor Pulmonale:*

Right Heart Failure in Emphysema:
-----------------------------------------------------
Mechanism:
  - Hypoxic vasoconstriction
  - Pulmonary vascular bed destruction
  - Pulmonary hypertension
  → Right ventricular hypertrophy
  → Right ventricular failure

Clinical Features:
  - Peripheral edema
  - JVD (jugular venous distension)
  - Hepatomegaly
  - Ascites (late)

Management:
  - Long-term oxygen therapy (most important)
  - Diuretics for volume overload
  - Pulmonary vasodilators (limited)
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'VEGF', definition: 'Vascular endothelial growth factor; angiogenesis factor' },
        { term: 'MMP', definition: 'Matrix metalloproteinases; enzymes that degrade extracellular matrix' },
        { term: 'BOS', definition: 'Bronchiolitis obliterans syndrome; chronic lung transplant rejection' },
        { term: 'VATS', definition: 'Video-assisted thoracoscopic surgery' },
        { term: 'zone of apposition', definition: 'Area where diaphragm contacts rib cage' },
      ],
      clinicalNotes: 'Bronchoscopic lung volume reduction is now first-line surgical option for eligible patients. Endobronchial valves are reversible and effective in heterogeneous emphysema with complete fissures.',
      patientCounselingPoints: [
        'Bronchoscopic lung volume reduction may help if you are not a candidate for surgery.',
        'If you have severe emphysema, ask your doctor about lung transplant evaluation.',
        'Pneumothorax is a risk - seek immediate care for sudden worsening of breathing.',
        'Long-term oxygen therapy improves survival if your oxygen is low.',
        'Maintain adequate nutrition - muscle wasting worsens breathing difficulty.',
      ],
    },
    5: {
      level: 5,
      summary: 'Emphysema represents an alveolar-destructive COPD phenotype characterized by permanent loss of lung parenchyma through apoptotic, inflammatory, and proteolytic pathways, with distinct imaging biomarkers and emerging surgical and bronchoscopic interventions.',
      explanation: `**Molecular Pathogenesis:**

*Apoptotic Pathways:*
Cellular Death Mechanisms:
-----------------------------------------------------
Endothelial Apoptosis:
  - VEGF signaling disruption
  - eNOS uncoupling
  - Ceramide-induced apoptosis
  → Capillary bed destruction

Epithelial Apoptosis:
  - p53 pathway activation
  - Death receptor signaling (Fas/FasL)
  - Mitochondrial dysfunction
  → Alveolar wall destruction

Autophagy:
  - Cellular recycling process
  - May be protective or harmful
  - LC3, ATG5 involvement
  - Therapeutic target?

Senescence:
  - Telomere shortening
  - SA-β-gal expression
  - SASP (senescence-associated secretory phenotype)
  - Perpetuates inflammation
-----------------------------------------------------


*Precision Imaging:*

Quantitative CT Biomarkers:
-----------------------------------------------------
Emphysema Index (%LAA):
  - Percentage of low attenuation areas (<-950 HU)
  - Correlates with:
    - FEV1 decline
    - Mortality risk
    - Exacerbation risk
  - Helps identify surgical candidates

Airway Metrics:
  - Pi10 (wall thickness)
  - Lumen diameter
  - Airway-vascular relationship
  → Distinguish airway vs parenchymal phenotype

Texture Analysis:
  - Fractal dimension
  - Co-occurrence matrices
  - Machine learning classification
  → Outcome prediction
-----------------------------------------------------


**Emerging Therapeutics:**

*Lung Regeneration:*

Regenerative Approaches:
-----------------------------------------------------
Stem Cell Therapy:
  - Mesenchymal stem cells (MSCs)
    - Modulate inflammation
    - Paracrine effects
    - Phase 2 trials ongoing
  - Induced pluripotent stem cells
  - Endogenous lung progenitors

Growth Factors:
  - Retinoic acid (animal only)
  - HGF (hepatocyte growth factor)
  - KGF (keratinocyte growth factor)
  → Preclinical investigation

Anti-Apoptotic:
  - Caspase inhibitors
  - Ceramide synthesis inhibitors
  - Preclinical stage
-----------------------------------------------------


*Alpha-1 Antitrypsin Augmentation:*

AAT Replacement Therapy:
-----------------------------------------------------
Indications:
  - Severe deficiency (PiZZ)
  - Panacinar emphysema
  - FEV1 30-65% predicted

Dosing:
  - 60 mg/kg weekly IV
  - Raises serum and alveolar levels
  - Expensive therapy

Evidence:
  - Slows FEV1 decline (modest)
  - Does not reverse damage
  - May improve mortality (controversial)

Future:
  - Inhaled AAT (investigational)
  - Gene therapy (preclinical)
  - RNA therapy (siRNA)
-----------------------------------------------------


**Advanced Surgical/Bronchoscopic:**

*Precision Selection:*

Patient Selection for Interventions:
-----------------------------------------------------
Heterogeneous Emphysema:
  - Upper lobe predominance
  - Intact fissures
  - High compressibility
  - Good exercise capacity
  → Best surgical/BLVR candidates

Homogeneous Emphysema:
  - Diffuse involvement
  - Poor BLVR response
  - Consider transplant

AAT Deficiency:
  - Lower lobe predominance
  - Poor LVRS response
  - Early transplant consideration
  - Augmentation therapy
-----------------------------------------------------


**Research Frontiers:**

*Microbiome:*

Lung Microbiome in Emphysema:
-----------------------------------------------------
Changes:
  - Reduced diversity
  - Enrichment of Proteobacteria
  - Haemophilus, Moraxella

Therapeutic Implications:
  - Probiotic supplementation?
  - Bacteriophage therapy?
  - Microbiome restoration?
-----------------------------------------------------


*Artificial Intelligence:*

AI Applications:
-----------------------------------------------------
CT Analysis:
  - Automated emphysema quantification
  - Phenotype classification
  - Progression prediction
  - Treatment response prediction
  → Outperforms human assessment

Risk Prediction:
  - Exacerbation prediction models
  - Mortality risk stratification
  - Surgical candidacy assessment
  → Personalized treatment planning
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'VEGF', definition: 'Vascular endothelial growth factor' },
        { term: 'eNOS', definition: 'Endothelial nitric oxide synthase' },
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype' },
        { term: 'LAA', definition: 'Low attenuation areas on CT; emphysema measure' },
        { term: 'HGF', definition: 'Hepatocyte growth factor' },
      ],
      clinicalNotes: 'AAT augmentation is costly with modest benefit - indicated for PiZZ patients with FEV1 30-65%. Bronchoscopic lung volume reduction is first-line for eligible patients.',
      patientCounselingPoints: [
        'Genetic testing for AAT deficiency may change your treatment options.',
        'New bronchoscopic treatments offer alternatives to major surgery.',
        'Artificial intelligence is helping identify which patients benefit from different treatments.',
        'Clinical trials for stem cell therapy may be available.',
        'Your emphysema pattern on CT helps determine which treatments might work.',
      ],
    },
  },

  media: [
    {
      id: 'emphysema-pathogenesis',
      type: 'diagram',
      filename: 'emphysema-alveolar-destruction.svg',
      title: 'Emphysema Alveolar Destruction',
      description: 'Comparison of healthy alveoli vs emphysema',
    },
    {
      id: 'pursed-lip-breathing',
      type: 'diagram',
      filename: 'pursed-lip-breathing-technique.svg',
      title: 'Pursed-Lip Breathing Technique',
      description: 'Step-by-step guide to pursed-lip breathing',
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
    { targetId: 'chronic-disease-chronic-bronchitis', targetType: 'condition', relationship: 'sibling', label: 'Chronic Bronchitis' },
  ],

  tags: {
    systems: ['respiratory'],
    structures: ['alveoli', 'lungs'],
    topics: ['COPD', 'emphysema', 'dyspnea', 'lung destruction'],
    keywords: ['emphysema', 'pink puffer', 'alveolar destruction', 'hyperinflation'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
