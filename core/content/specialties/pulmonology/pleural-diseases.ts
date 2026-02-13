/**
 * Pleural Diseases - Comprehensive Educational Content
 *
 * Covers pleural effusion, pneumothorax, empyema, pleuritis, and
 * pleural malignancies with diagnostic and management approaches.
 */

import { EducationalContent } from '../../types';

export const pleuralDiseases: EducationalContent = {
  id: 'condition-pleural-diseases',
  type: 'condition',
  name: 'Pleural Diseases',
  alternateNames: ['Pleural Disorders', 'Diseases of the Pleura'],

  levels: {
    1: {
      level: 1,
      summary: 'Pleural diseases are problems with the thin lining around your lungs, which can fill with fluid, air, or become infected.',
      explanation: `Your lungs are wrapped in a thin, slippery covering called the pleura (PLOOR-uh). Think of it like plastic wrap around your lungs. There are actually two layers with a tiny bit of fluid between them that helps your lungs slide smoothly when you breathe.

**What can go wrong with the pleura?**

**1. Pleural Effusion (fluid buildup)**
Sometimes too much fluid collects between the layers. This is like having water in a balloon - it squishes the lung and makes it harder to breathe.

Causes include:
- Heart problems
- Lung infections (pneumonia)
- Kidney or liver disease
- Cancer

**2. Pneumothorax (collapsed lung)**
Sometimes air gets between the layers where it shouldn't be. This pushes on the lung and can make it collapse, like letting air out of a balloon.

Causes include:
- Injury to the chest
- Lung diseases
- Sometimes it happens for no clear reason (especially in tall, thin young men)

**3. Pleurisy (inflammation)**
The pleura can become irritated and swollen. When this happens, the two layers rub against each other painfully instead of sliding smoothly.

**Symptoms to watch for:**
- Sharp chest pain that gets worse when you breathe in
- Shortness of breath
- Dry cough

**How doctors diagnose it:**
- Listening to your chest with a stethoscope
- Chest X-ray
- Sometimes draining fluid with a needle to test it

**Treatment depends on the cause:**
- Draining extra fluid or air
- Treating infections with antibiotics
- Pain medicine for pleurisy
- Sometimes surgery for serious cases`,
      keyTerms: [
        { term: 'pleura', definition: 'The thin, two-layered covering around your lungs', pronunciation: 'PLOOR-uh' },
        { term: 'pleural effusion', definition: 'Too much fluid collecting in the space around the lungs', pronunciation: 'PLOOR-al eh-FYOO-zhun' },
        { term: 'pneumothorax', definition: 'Air trapped in the space around the lung, which can cause the lung to collapse', pronunciation: 'noo-moh-THOR-aks' },
        { term: 'pleurisy', definition: 'Painful swelling of the pleura', pronunciation: 'PLOOR-ih-see' },
      ],
      analogies: [
        'The pleura is like a plastic bag with two layers - your lung fits inside one layer, and the other layer sticks to your chest wall. A tiny bit of fluid helps them slide.',
        'A pneumothorax is like a tire going flat - air in the wrong place causes the lung to deflate.',
        'Pleurisy feels like sandpaper rubbing together instead of smooth surfaces sliding past each other.',
      ],
      examples: [
        'A person with heart failure might have swollen ankles AND fluid around their lungs (pleural effusion).',
        'A young basketball player who suddenly gets chest pain and trouble breathing might have a spontaneous pneumothorax.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pleural diseases include effusions, pneumothorax, and pleural inflammation, each with distinct etiologies requiring systematic diagnostic evaluation and targeted treatment.',
      explanation: `## Anatomy Review

The pleura consists of two membranes:
- **Visceral pleura**: Covers the lung surface
- **Parietal pleura**: Lines the chest wall, diaphragm, and mediastinum
- **Pleural space**: Potential space between layers containing ~10-20 mL of fluid

## Pleural Effusion

### Definition
Abnormal accumulation of fluid in the pleural space.

### Classification

**Transudative** (low protein):
- Caused by imbalance in hydrostatic/oncotic pressures
- Heart failure (most common)
- Cirrhosis (hepatic hydrothorax)
- Nephrotic syndrome
- Fluid is "pushed" into the space

**Exudative** (high protein):
- Caused by local disease affecting the pleura
- Pneumonia (parapneumonic effusion)
- Cancer
- Pulmonary embolism
- Tuberculosis
- Fluid "leaks" due to inflammation

### Light's Criteria (Exudate if any ONE is met):
1. Pleural fluid protein / serum protein > 0.5
2. Pleural fluid LDH / serum LDH > 0.6
3. Pleural fluid LDH > 2/3 upper limit of normal serum LDH

### Symptoms
- Dyspnea (proportional to effusion size)
- Pleuritic chest pain (if inflamed)
- Cough

### Diagnosis
- **Chest X-ray**: Blunting of costophrenic angle (requires ~200 mL)
- **Ultrasound**: More sensitive, guides thoracentesis
- **CT scan**: Evaluates underlying cause
- **Thoracentesis**: Fluid analysis for diagnosis

### Treatment
- Treat underlying cause
- Therapeutic thoracentesis for symptom relief
- Chest tube for complicated effusions
- Pleurodesis for recurrent malignant effusions

## Pneumothorax

### Definition
Air in the pleural space causing lung collapse.

### Types

**Primary Spontaneous:**
- No underlying lung disease
- Typically tall, thin young men
- Rupture of apical blebs

**Secondary Spontaneous:**
- Underlying lung disease (COPD, cystic fibrosis, pneumonia)
- Higher risk of complications

**Traumatic:**
- Penetrating or blunt chest trauma
- Iatrogenic (central line, thoracentesis, lung biopsy)

**Tension Pneumothorax:**
- Medical emergency
- One-way valve effect traps air
- Causes mediastinal shift, cardiovascular collapse

### Symptoms
- Sudden chest pain (sharp, pleuritic)
- Dyspnea
- Decreased breath sounds on affected side

### Diagnosis
- Chest X-ray (expiratory film more sensitive)
- CT scan (small pneumothoraces)
- **Tension pneumothorax is a clinical diagnosis** - do not delay treatment for imaging

### Treatment
| Size | Symptoms | Treatment |
|------|----------|-----------|
| Small (<2 cm) | None | Observation, supplemental O2 |
| Small | Dyspnea | Aspiration or small catheter |
| Large (>2 cm) | Any | Chest tube |
| Tension | Unstable | Immediate needle decompression, then chest tube |

## Empyema

Infected pleural fluid (pus in pleural space).

### Progression
1. Parapneumonic effusion (sterile)
2. Complicated parapneumonic (loculated, low pH)
3. Empyema (frank pus, positive culture)

### Diagnosis
- Pleural fluid: Purulent, pH <7.2, glucose <60, positive Gram stain/culture
- CT: Loculations, pleural thickening ("split pleura sign")

### Treatment
- Antibiotics
- Chest tube drainage (early)
- Fibrinolytics (tPA) for loculations
- VATS or surgical decortication if medical treatment fails

## Pleuritis (Pleurisy)

### Definition
Inflammation of the pleura causing characteristic pain.

### Causes
- Viral infection (most common)
- Pneumonia
- Pulmonary embolism
- Autoimmune disease (lupus, RA)
- Post-cardiac injury syndrome

### Features
- Sharp, stabbing chest pain
- Worse with breathing, coughing
- Pleural friction rub on exam

### Treatment
- NSAIDs for pain
- Treat underlying cause`,
      keyTerms: [
        { term: 'thoracentesis', definition: 'Procedure to remove fluid from the pleural space using a needle', pronunciation: 'thor-ah-sen-TEE-sis' },
        { term: 'Light\'s criteria', definition: 'Laboratory tests used to determine if a pleural effusion is transudative or exudative' },
        { term: 'tension pneumothorax', definition: 'Life-threatening condition where air accumulates under pressure, shifting organs and compromising circulation' },
        { term: 'empyema', definition: 'Collection of pus in the pleural space', pronunciation: 'em-py-EE-mah' },
        { term: 'pleurodesis', definition: 'Procedure to fuse the pleural layers together to prevent fluid reaccumulation', pronunciation: 'ploor-oh-DEE-sis' },
      ],
      analogies: [
        'Light\'s criteria help distinguish transudates (systemic problem "pushing" fluid) from exudates (local problem causing "leaking").',
      ],
    },
    3: {
      level: 3,
      summary: 'Pleural diseases require systematic differentiation using biochemical markers, imaging characteristics, and clinical context to guide appropriate drainage, medical, or surgical management.',
      explanation: `## Pleural Fluid Analysis

### Thoracentesis Indications
- New effusion of unknown etiology
- Suspected infection
- Therapeutic drainage for dyspnea

### Contraindications (Relative)
- Coagulopathy (INR >2, platelets <50,000)
- Mechanical ventilation (increased PTX risk)
- Very small effusion (<1 cm on lateral decubitus)

### Initial Tests

**Routine:**
- Cell count with differential
- Protein, LDH, glucose
- pH (collected anaerobically)
- Gram stain and culture
- Cytology

**Light's Criteria Refinement:**
- Sensitivity 98%, specificity 83%
- Can misclassify transudates (especially with diuretic use)
- If borderline exudate, check serum-effusion albumin gradient
  - SAAG >1.2 g/dL suggests transudate

### Specific Markers

| Marker | Interpretation |
|--------|---------------|
| pH <7.2 | Complicated parapneumonic/empyema, malignancy, esophageal rupture |
| Glucose <60 | Complicated parapneumonic, RA, TB, malignancy |
| Amylase elevated | Pancreatitis, esophageal rupture, malignancy |
| Triglycerides >110 | Chylothorax |
| Hematocrit >50% peripheral | Hemothorax |
| ADA >40 U/L | Tuberculosis (high sensitivity in endemic areas) |

### Cell Differential

| Predominant Cell | Suggests |
|------------------|----------|
| Neutrophils | Acute process: parapneumonic, PE |
| Lymphocytes | Chronic: TB, malignancy, chylothorax |
| Eosinophils (>10%) | Blood or air in space, drug reaction, parasites, malignancy |

## Malignant Pleural Effusion

### Epidemiology
- Most common cause: Lung cancer, breast cancer, lymphoma
- Indicates advanced disease (stage IV)
- Median survival 3-12 months depending on primary

### Diagnosis
- Cytology positive in 60% (first sample)
- Repeat thoracentesis increases yield to 80%
- Thoracoscopy with pleural biopsy: >90% sensitivity

### Management Goals
- Symptom palliation
- Quality of life

### Treatment Options

**Therapeutic Thoracentesis:**
- For slow reaccumulation
- Limited by repeated procedures

**Indwelling Pleural Catheter (IPC):**
- Tunneled catheter for home drainage
- Allows outpatient management
- Spontaneous pleurodesis in 40-50%

**Chemical Pleurodesis:**
- Talc most effective (>90% success)
- Requires chest tube, hospitalization
- Contraindicated if trapped lung

**Trapped Lung:**
- Visceral pleural tumor encasement prevents expansion
- Pleurodesis will fail
- IPC preferred

## Pneumothorax Management Details

### Size Assessment

**British Thoracic Society:**
- Measure at hilum level
- >2 cm = large

**American College of Chest Physicians:**
- Measure apex to cupola
- >3 cm = large

### Primary Spontaneous Pneumothorax (PSP)

**First Episode:**
- Small + asymptomatic: Observation, repeat CXR in 6 hours
- Small + symptomatic OR large: Aspiration (60-80% success)
- Aspiration failure: Small-bore chest tube

**Recurrence:**
- 30% recurrence after first episode
- Surgery (VATS with blebectomy + pleurodesis) after:
  - Second ipsilateral episode
  - First contralateral (bilateral history)
  - Persistent air leak (>5-7 days)
  - High-risk occupation (pilot, diver)

### Secondary Spontaneous Pneumothorax (SSP)

- Higher morbidity due to underlying lung disease
- Lower threshold for chest tube (vs. aspiration)
- Higher threshold for discharge
- Surgery more complex due to disease

### Tension Pneumothorax

**Recognition:**
- Hypotension, tachycardia
- Tracheal deviation (late sign)
- Absent breath sounds
- Distended neck veins (may be absent if hypovolemic)

**Management:**
1. Needle decompression: 2nd intercostal space, midclavicular line
2. Immediate chest tube placement

## Parapneumonic Effusion and Empyema

### Risk Stratification (RAPID Score)

| Category | Features |
|----------|----------|
| Low risk | Small, free-flowing, pH >7.2, culture negative |
| Moderate risk | Moderate size, loculated, pH 7.0-7.2 |
| High risk | Large, pH <7.0, pus, positive Gram stain |

### Drainage Decision

**Simple parapneumonic:** Antibiotics alone
**Complicated parapneumonic:** Chest tube + antibiotics
**Empyema:** Chest tube + antibiotics + consider fibrinolytics or surgery

### Fibrinolytic Therapy

**MIST2 Trial Protocol:**
- tPA 10 mg + DNase 5 mg twice daily x 3 days
- Improved drainage, reduced surgery
- Both agents required (synergistic effect)

### Surgical Options

**VATS Decortication:**
- For failed medical management
- Earlier surgery = better outcomes
- Removes fibrin peel, drains loculations

**Open Thoracotomy:**
- For very late/organized empyema
- Higher morbidity`,
      keyTerms: [
        { term: 'SAAG', definition: 'Serum-ascites albumin gradient; when applied to pleural fluid (serum-effusion albumin gradient), helps distinguish transudates from misclassified exudates' },
        { term: 'ADA', definition: 'Adenosine deaminase; elevated in tuberculous pleuritis', pronunciation: 'A-D-A' },
        { term: 'chylothorax', definition: 'Pleural effusion containing chyle (lymphatic fluid high in triglycerides) from thoracic duct injury', pronunciation: 'KY-loh-thor-aks' },
        { term: 'trapped lung', definition: 'Lung unable to expand due to visceral pleural encasement, preventing successful pleurodesis' },
        { term: 'IPC', definition: 'Indwelling pleural catheter; tunneled catheter for recurrent effusion drainage at home' },
        { term: 'decortication', definition: 'Surgical removal of the fibrous peel (cortex) encasing the lung in chronic empyema' },
      ],
      clinicalNotes: 'Always send pleural fluid pH in a heparinized blood gas syringe - exposure to air falsely elevates pH. In parapneumonic effusions, pH is the single best predictor of need for drainage. A pH <7.2 mandates chest tube even if fluid appears clear.',
    },
    4: {
      level: 4,
      summary: 'Advanced pleural disease management integrates diagnostic algorithms, imaging-guided interventions, and individualized treatment strategies for complex effusions, recurrent pneumothoraces, and pleural malignancies.',
      explanation: `## Pleural Effusion: Advanced Diagnostics

### Ultrasound in Pleural Disease

**Diagnostic Applications:**
- Effusion detection (10-20 mL detectable)
- Characterization (simple vs. complex/loculated)
- Pleural thickening assessment
- Guidance for thoracentesis (reduces complications)

**Sonographic Features:**

| Feature | Interpretation |
|---------|---------------|
| Anechoic | Transudate or simple exudate |
| Echogenic swirling | Hemorrhagic or high protein |
| Septations | Complicated effusion, empyema |
| Pleural thickening | Malignancy, TB, empyema |
| Pleural nodules | Highly suggestive of malignancy |

### CT Imaging

**Contrast-Enhanced CT Indications:**
- Unknown etiology after thoracentesis
- Suspected malignancy
- Complicated effusion/empyema
- Pre-procedural planning

**Malignancy Signs:**
- Nodular pleural thickening
- Mediastinal pleural involvement
- Circumferential thickening
- Associated mass or lymphadenopathy

**Empyema Signs:**
- Split pleura sign (enhancing visceral and parietal pleura)
- Loculations
- Increased attenuation of extrapleural fat

### Medical Thoracoscopy

**Indications:**
- Undiagnosed exudative effusion after thoracentesis
- Staging of mesothelioma
- Pleurodesis

**Advantages:**
- Direct visualization
- Multiple biopsies under vision
- 95% diagnostic yield for malignancy
- Can perform talc pleurodesis

**Contraindications:**
- Obliterated pleural space (adhesions)
- Coagulopathy
- Hypoxemia requiring high FiO2

## Malignant Pleural Mesothelioma

### Epidemiology and Etiology
- Asbestos exposure (80% of cases)
- Latency period 20-40 years
- Increasing incidence until ~2020, now declining

### Histological Types
1. **Epithelioid** (60%): Best prognosis
2. **Sarcomatoid** (10%): Worst prognosis
3. **Biphasic** (30%): Mixed, prognosis depends on sarcomatoid component

### Diagnosis

**Challenges:**
- Cytology sensitivity only 30-50%
- Differentiating from adenocarcinoma metastatic to pleura

**Immunohistochemistry Panel:**

| Marker | Mesothelioma | Adenocarcinoma |
|--------|--------------|----------------|
| Calretinin | + | - |
| WT-1 | + | - |
| CK5/6 | + | - |
| D2-40 | + | - |
| CEA | - | + |
| TTF-1 | - | + (lung primary) |
| MOC-31 | - | + |

**BAP1 Loss:**
- Somatic BAP1 mutation in 60% of mesothelioma
- Loss of nuclear BAP1 staining supports diagnosis
- Germline BAP1 mutations: familial mesothelioma

### Staging (AJCC 8th Edition)
- Based on tumor extent, nodal involvement, metastases
- T stage: Involvement of pleura, lung, diaphragm, mediastinum
- Most patients present at stage III-IV

### Treatment

**Multimodality (Resectable Disease):**
- Pleurectomy/decortication (P/D) preferred over extrapleural pneumonectomy
- Combined with chemotherapy ± radiation
- Median survival 14-19 months with multimodality

**Chemotherapy:**
- First-line: Pemetrexed + cisplatin (or carboplatin)
- Add bevacizumab in eligible patients
- Maintenance pemetrexed considered

**Immunotherapy:**
- CheckMate-743: Nivolumab + ipilimumab improved OS vs chemo
- FDA approved for unresectable mesothelioma

**Palliative:**
- IPC for effusion management
- Radiation for pain control
- Best supportive care

## Advanced Pneumothorax Management

### Recurrent PSP Prevention

**Chemical Pleurodesis Agents:**
- Talc: Most effective (>90%)
- Minocycline, doxycycline: Alternatives
- Autologous blood patch: Less effective

**Surgical Approach (VATS):**
1. Identify and resect blebs/bullae
2. Mechanical pleurodesis (abrasion) or chemical
3. Success rate >95%

### Catamenial Pneumothorax

**Definition:**
- Recurrent pneumothorax within 72 hours of menses
- Association with thoracic endometriosis

**Diagnosis:**
- Characteristic timing
- Diaphragmatic fenestrations on thoracoscopy
- Endometrial tissue on histology

**Treatment:**
- Hormonal suppression (GnRH agonists, danazol)
- VATS with diaphragm repair if fenestrations present

### Air Leak Management

**Persistent Air Leak:**
- >5-7 days after chest tube

**Options:**
- Heimlich valve for outpatient management
- Autologous blood patch via chest tube
- Endobronchial valves (off-label)
- VATS for definitive repair

**Digital Chest Drainage Systems:**
- Quantify air leak
- Objective assessment of resolution
- May reduce hospital stay

## Chylothorax

### Etiology

**Traumatic:**
- Surgical (esophagectomy, thoracic spine surgery, cardiac surgery)
- Penetrating trauma
- Central line placement

**Non-Traumatic:**
- Malignancy (lymphoma most common)
- LAM (lymphangioleiomyomatosis)
- Superior vena cava thrombosis
- Idiopathic

### Diagnosis
- Milky fluid (if patient eating)
- Triglycerides >110 mg/dL (diagnostic)
- Triglycerides 50-110 mg/dL: Check lipoprotein electrophoresis for chylomicrons
- Lymphocyte predominance

### Management

**Conservative (2-4 weeks):**
- NPO or medium-chain triglyceride diet (MCT)
- MCTs absorbed directly into portal circulation, bypass thoracic duct
- Total parenteral nutrition if severe
- Octreotide (reduces lymphatic flow)

**Interventional:**
- Thoracic duct embolization (interventional radiology)
- Success rate 70-90%

**Surgical:**
- Thoracic duct ligation
- For failed conservative/interventional management
- Can perform via VATS

## Pleural Infection in Special Populations

### Immunocompromised Host

**Expanded Differential:**
- Fungal (Aspergillus, Cryptococcus)
- Nocardia
- Non-tuberculous mycobacteria
- PJP (Pneumocystis) - usually pneumatoceles, not effusion

**Diagnostic Approach:**
- Broader cultures (fungal, mycobacterial)
- Consider PCR/molecular testing
- Earlier imaging and intervention`,
      keyTerms: [
        { term: 'split pleura sign', definition: 'CT finding in empyema where both visceral and parietal pleura enhance and are separated by fluid' },
        { term: 'mesothelioma', definition: 'Primary malignancy of the pleura strongly associated with asbestos exposure', pronunciation: 'mez-oh-thee-lee-OH-mah' },
        { term: 'BAP1', definition: 'BRCA1-associated protein 1; tumor suppressor gene frequently mutated in mesothelioma and used as diagnostic marker' },
        { term: 'catamenial pneumothorax', definition: 'Recurrent pneumothorax associated with menstruation, often due to thoracic endometriosis', pronunciation: 'kat-ah-MEE-nee-al' },
        { term: 'thoracic duct embolization', definition: 'Interventional radiology procedure to occlude the thoracic duct for chylothorax treatment' },
        { term: 'pleurectomy/decortication', definition: 'Surgical removal of parietal pleura and tumor from visceral pleura; lung-sparing surgery for mesothelioma' },
      ],
      clinicalNotes: 'For suspected mesothelioma, always perform thoracoscopy with adequate biopsies - at least 6 samples from different areas. Cytology alone is insufficient for diagnosis due to low sensitivity and difficulty distinguishing from adenocarcinoma. BAP1 immunostaining can be done on cytology but definitive diagnosis requires tissue architecture.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pleural disease management leverages molecular diagnostics, biomarker-guided prognostication, targeted therapeutics for mesothelioma, and minimally invasive interventional approaches to optimize outcomes across the spectrum of pleural pathology.',
      explanation: `## Molecular Diagnostics in Pleural Disease

### Liquid Biopsy and Biomarkers

**Mesothelin:**
- Glycoprotein overexpressed in mesothelioma
- Serum mesothelin-related peptide (SMRP) for monitoring
- Limited sensitivity for screening, better for surveillance

**Fibulin-3:**
- Plasma and pleural fluid levels elevated in mesothelioma
- May complement mesothelin

**Circulating Tumor Cells/DNA:**
- Emerging role in mesothelioma monitoring
- Not yet standard of care

### Genomic Landscape of Mesothelioma

**Frequent Alterations:**
| Gene | Type | Frequency | Implication |
|------|------|-----------|-------------|
| BAP1 | Loss of function | 60% | Diagnostic marker |
| CDKN2A | Deletion | 45% | Loss = worse prognosis, FISH useful |
| NF2 | Inactivation | 40% | Hippo pathway |
| TP53 | Mutation | 15% | |
| SETD2 | Loss | 10% | Epigenetic regulator |

**Therapeutic Implications:**
- EZH2 inhibitors (tazemetostat) for BAP1-deficient tumors
- CDK4/6 inhibitors for CDKN2A-intact tumors
- MTAP deletion: Potential target (PRMT5/MAT2A inhibitors)

### Mesothelioma Immunotherapy Era

**CheckMate-743 Details:**
- Unresectable pleural mesothelioma
- Nivolumab + ipilimumab vs pemetrexed-platinum
- OS: 18.1 vs 14.1 months (HR 0.74)
- Greatest benefit in non-epithelioid histology

**Predictive Biomarkers:**
- PD-L1 not strongly predictive
- TMB generally low in mesothelioma
- Epithelioid with low inflammation: May favor chemotherapy
- Non-epithelioid: Immunotherapy preferred

**Emerging Combinations:**
- Chemo-IO combinations
- Dual checkpoint blockade + chemotherapy
- CAR-T targeting mesothelin

### Tuberculous Pleural Effusion

**Diagnosis Challenges:**
- Smear/culture sensitivity low (15-30%)
- ADA >40 U/L: Sensitivity 92%, specificity 90% in endemic areas
- ADA <40 with lymphocytosis: Consider biopsy

**Molecular Diagnostics:**
- Xpert MTB/RIF on pleural fluid: Sensitivity 22-51%
- Xpert on pleural tissue: Higher yield
- Cell-free DNA: Emerging

**Unstimulated Interferon-γ:**
- >140 pg/mL suggestive of TB
- Combined with ADA improves accuracy

## Advanced Interventional Techniques

### Indwelling Pleural Catheter Evolution

**TIME2 Trial:**
- IPC non-inferior to talc pleurodesis for breathlessness
- Higher spontaneous pleurodesis rate than expected (40-50%)

**Combination Approaches:**
- IPC + talc (via catheter): May accelerate pleurodesis
- IPC + fibrinolytics for septated effusions

**Complications:**
- Infection: 5% (lower than expected)
- Catheter blockage: 3%
- Tumor seeding along tract: Rare

### Thoracic Duct Embolization

**Technique:**
- Intranodal lymphangiography (pedal or inguinal)
- Visualization of thoracic duct
- Coil embolization or glue (n-BCA)
- Disruption with needle if no direct access

**Success Rates:**
- 70-90% in experienced centers
- May need repeat procedure
- Avoids thoracotomy in high-risk patients

### Endobronchial Valves for Air Leak

**Off-Label Use:**
- Persistent air leak despite chest tube
- Poor surgical candidates
- One-way valves placed in segmental/subsegmental bronchi feeding the leak

**Outcomes:**
- Success in 50-70% of persistent air leaks
- Can be removed once leak resolved

## Pleural Effusion in Heart Failure

### Pathophysiology
- Transudative (elevated venous pressures)
- Usually bilateral (R>L) or right-sided
- Can become exudative with diuretic use

**SAAG and NT-proBNP:**
- Serum-effusion albumin gradient >1.2: Suggests transudate
- Pleural fluid NT-proBNP >1500 pg/mL: Cardiac etiology

### Management
- Diuresis first-line
- Therapeutic thoracentesis for refractory dyspnea
- Avoid IPC (frequent reaccumulation, infection risk)

### Hepatic Hydrothorax

**Mechanism:**
- Transdiaphragmatic passage of ascites through defects
- Usually right-sided (defects in tendinous portion)
- Can occur without clinically apparent ascites

**Diagnosis:**
- Technetium-99m sulfur colloid scan: Demonstrates peritoneal-pleural communication
- Usually unnecessary if typical presentation

**Management:**
- Sodium restriction and diuretics
- TIPS for refractory cases
- Avoid chest tube (protein/fluid depletion, infection)
- IPC controversial (some use for bridge to transplant)

## Quality Metrics and Outcomes Research

### Pleural Procedure Complications

| Procedure | Pneumothorax | Bleeding | Infection |
|-----------|--------------|----------|-----------|
| Thoracentesis | 4-6% | <1% | <1% |
| Chest tube | N/A | 1-2% | 2-5% |
| Medical thoracoscopy | 4-8% | <1% | <1% |
| VATS | 5-10% | 1-3% | 1-3% |

### Patient-Centered Outcomes

**Breathlessness Measures:**
- Visual analogue scale (VAS)
- Modified Borg scale
- 6-minute walk test

**Quality of Life:**
- EORTC QLQ-C30 (cancer)
- St. George's Respiratory Questionnaire
- FACIT-dyspnea

### Mesothelioma Prognosis

**EORTC/CALGB Prognostic Score:**
Poor prognosis factors:
- PS >0
- Chest pain
- Platelet count >400,000
- Non-epithelioid histology
- Age >75
- Male sex
- WBC >8,300

**LENT Score (Malignant Effusion):**
- LDH, ECOG PS, Neutrophil:lymphocyte ratio, Tumor type
- Predicts survival to guide palliation intensity

## Clinical Practice Pearls

1. **Point-of-care ultrasound** should guide all thoracenteses - reduces pneumothorax from 10% to <1%.

2. **Pleural manometry** during large-volume thoracentesis: Stop if pleural pressure <-20 cm H2O (suggests trapped lung, re-expansion pulmonary edema risk).

3. **Post-thoracentesis CXR** not routinely needed if no symptoms and ultrasound-guided procedure.

4. **Recurrent undiagnosed effusion**: Medical thoracoscopy superior to repeated thoracentesis - don't delay.

5. **Empyema with loculations**: Early tPA/DNase (MIST2 protocol) reduces need for surgery from 16% to 4%.

6. **Mesothelioma**: Always refer to specialized center. Multimodality discussion essential for potentially resectable disease.`,
      keyTerms: [
        { term: 'SMRP', definition: 'Soluble mesothelin-related peptide; serum biomarker for mesothelioma monitoring, not screening' },
        { term: 'CDKN2A', definition: 'Cyclin-dependent kinase inhibitor 2A (p16); deletion detectable by FISH indicates worse prognosis in mesothelioma' },
        { term: 'LENT score', definition: 'Prognostic score for malignant pleural effusion using LDH, ECOG PS, neutrophil:lymphocyte ratio, and tumor type' },
        { term: 'hepatic hydrothorax', definition: 'Pleural effusion resulting from transdiaphragmatic passage of ascites in cirrhosis, usually right-sided' },
        { term: 'pleural manometry', definition: 'Measurement of pleural pressure during thoracentesis to detect trapped lung and predict pleurodesis success' },
        { term: 'CheckMate-743', definition: 'Landmark trial establishing nivolumab-ipilimumab as first-line therapy for unresectable mesothelioma' },
      ],
      clinicalNotes: `Key practice recommendations:

1. **Diagnostic thoracentesis**: Always perform on new effusion unless clearly CHF bilateral and responding to diuresis. Send pH, glucose, LDH, protein, cell count, Gram stain, culture, cytology.

2. **Trapped lung evaluation**: If pleural pressure drops rapidly during drainage or lung doesn't expand on imaging, suspect trapped lung. Pleurodesis will fail; IPC is preferred.

3. **Empyema timing**: "Time is pleura" - delay in adequate drainage worsens outcomes. Early (<3 days) chest tube + fibrinolytics or surgery if needed.

4. **Mesothelioma immunotherapy**: Now first-line for most patients. Chemotherapy may still be preferred for rapidly progressive epithelioid with high tumor burden.

5. **IPC vs pleurodesis**: Patient preference important. IPC allows shorter hospitalization but requires ongoing home care. Pleurodesis provides definitive management in 60-80%.`,
    },
  },

  media: [
    {
      id: 'pleural-anatomy',
      type: 'diagram',
      filename: 'pleural-anatomy.svg',
      title: 'Pleural Anatomy',
      description: 'Cross-section showing visceral and parietal pleura, pleural space, and relationship to lung and chest wall',
    },
    {
      id: 'lights-criteria-algorithm',
      type: 'diagram',
      filename: 'lights-criteria-algorithm.svg',
      title: 'Light\'s Criteria Algorithm',
      description: 'Flowchart for differentiating transudative from exudative effusions',
    },
    {
      id: 'pneumothorax-types',
      type: 'diagram',
      filename: 'pneumothorax-types.svg',
      title: 'Types of Pneumothorax',
      description: 'Comparison of simple, tension, and loculated pneumothorax',
    },
  ],

  citations: [
    {
      id: 'bts-pleural-guidelines',
      type: 'article',
      title: 'BTS Pleural Disease Guideline 2023',
      authors: ['British Thoracic Society'],
      source: 'Thorax',
      url: 'https://thorax.bmj.com',
    },
    {
      id: 'mist2-trial',
      type: 'article',
      title: 'Intrapleural Use of Tissue Plasminogen Activator and DNase in Pleural Infection',
      authors: ['Rahman NM', 'Maskell NA', 'West A', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1012740',
    },
    {
      id: 'checkmate-743',
      type: 'article',
      title: 'Nivolumab plus Ipilimumab in Unresectable Malignant Pleural Mesothelioma',
      authors: ['Baas P', 'Scherpereel A', 'Nowak AK', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(21)00098-2',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'condition-lung-cancer', targetType: 'condition', relationship: 'related', label: 'Lung Cancer' },
    { targetId: 'topic-pulmonary-function-tests', targetType: 'topic', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'thoracic surgery', 'oncology', 'infectious disease'],
    keywords: ['pleural effusion', 'pneumothorax', 'empyema', 'mesothelioma', 'thoracentesis', 'chest tube', 'pleurodesis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pleuralDiseases;
