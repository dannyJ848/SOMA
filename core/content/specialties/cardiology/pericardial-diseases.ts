/**
 * Pericardial Diseases - Comprehensive Educational Content
 *
 * Covers acute pericarditis, pericardial effusion, cardiac tamponade,
 * constrictive pericarditis, and other pericardial conditions.
 */

import { EducationalContent } from '../../types';

export const pericardialDiseases: EducationalContent = {
  id: 'condition-pericardial-diseases',
  type: 'condition',
  name: 'Pericardial Diseases',
  alternateNames: ['Pericarditis', 'Pericardial Effusion', 'Cardiac Tamponade', 'Constrictive Pericarditis'],
  hpoId: 'HP:0001698',

  levels: {
    1: {
      level: 1,
      summary: 'The pericardium is a protective sac around the heart. Pericardial diseases occur when this sac becomes inflamed, fills with fluid, or becomes stiff.',
      explanation: `Your heart sits inside a thin, two-layered sac called the pericardium. Think of it like a plastic bag wrapped around your heart with a small amount of fluid inside to help the heart move smoothly.

**What Can Go Wrong with the Pericardium:**

1. **Inflammation (Pericarditis)**
The pericardium becomes inflamed, irritated, and painful. This is the most common pericardial problem.

2. **Fluid Buildup (Pericardial Effusion)**
Too much fluid collects in the sac around the heart. A little bit is normal, but too much can press on the heart.

3. **Cardiac Tamponade**
When fluid builds up so fast or so much that it squeezes the heart and stops it from filling properly. This is an emergency!

4. **Stiff Pericardium (Constrictive Pericarditis)**
The pericardium becomes thick and stiff, like a rigid shell, preventing the heart from expanding normally.

**Symptoms of Pericarditis:**
- Sharp chest pain (often worse when lying flat, better when sitting forward)
- Pain may spread to the shoulders or neck
- Fever
- Feeling tired

**What Causes Pericardial Problems:**
- Viruses (most common cause)
- Infections
- Heart attacks
- Cancer
- Kidney failure
- Autoimmune diseases
- Sometimes we never find the cause

**Treatment:**
- Anti-inflammatory medicines (ibuprofen, aspirin)
- Colchicine (helps prevent it from coming back)
- If fluid is pressing on the heart, doctors may need to drain it with a needle
- Surgery may be needed for constrictive pericarditis`,
      keyTerms: [
        { term: 'pericardium', definition: 'The thin protective sac that surrounds and protects the heart' },
        { term: 'pericarditis', definition: 'Inflammation or irritation of the pericardium' },
        { term: 'effusion', definition: 'Abnormal collection of fluid in a body space' },
        { term: 'tamponade', definition: 'When fluid around the heart squeezes it so it cannot pump properly - an emergency' },
      ],
      analogies: [
        'The pericardium is like a snug sandwich bag around your heart with a bit of oil to keep things sliding smoothly.',
        'Cardiac tamponade is like trying to blow up a balloon inside a rigid box - eventually there is no room left.',
        'Constrictive pericarditis is like wearing a shirt that is too tight - it restricts your movement.',
      ],
      examples: [
        'Someone with pericarditis might feel chest pain that gets worse when lying down and better when leaning forward.',
        'A patient with cardiac tamponade might have low blood pressure and distended neck veins.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pericardial diseases include acute pericarditis, pericardial effusion, cardiac tamponade, and constrictive pericarditis, each with distinct presentations and management strategies.',
      explanation: `## Pericardial Anatomy

The pericardium has two layers:
- **Visceral pericardium (epicardium):** Directly on the heart surface
- **Parietal pericardium:** Outer fibrous layer

Between them is the pericardial space, normally containing 15-50 mL of fluid.

## Acute Pericarditis

**Definition:** Inflammation of the pericardium

**Classic Features:**
1. Sharp, pleuritic chest pain (worse with inspiration, lying flat)
2. Improved by sitting up and leaning forward
3. Pericardial friction rub (scratchy sound on auscultation)
4. Diffuse ST elevations on ECG
5. Pericardial effusion (sometimes)

**Common Causes:**
- Idiopathic (most common in developed countries - presumed viral)
- Viral (Coxsackie, Echo, adenovirus)
- Post-MI (early: fibrinous pericarditis; late: Dressler syndrome)
- Uremia (kidney failure)
- Autoimmune (lupus, RA)
- Tuberculosis (common worldwide)
- Malignancy
- Post-cardiac surgery

**ECG Evolution:**
| Stage | Timing | Findings |
|-------|--------|----------|
| I | Hours-days | Diffuse ST elevation, PR depression |
| II | Days | ST normalizes, T waves flatten |
| III | Weeks | T wave inversion |
| IV | Weeks-months | Normalization |

**Treatment:**
- NSAIDs (ibuprofen 600mg TID) or aspirin (high-dose)
- Colchicine 0.5mg BID (reduces recurrence by 50%!)
- Avoid strenuous activity until resolved
- Steroids only if NSAID contraindication or autoimmune cause

## Pericardial Effusion

**Definition:** Abnormal fluid accumulation in pericardial space

**Significance depends on:**
- Volume of fluid
- Rate of accumulation (acute vs chronic)
- Underlying pericardial compliance

**Causes:** Same as pericarditis, plus:
- Heart failure
- Hypothyroidism (myxedema)
- Aortic dissection (hemorrhagic)

**Evaluation:**
- Echocardiography (primary diagnostic tool)
- CT or MRI for loculated effusions
- Consider pericardiocentesis for diagnosis if cause unclear

**Classification by Size (Echo):**
| Size | Measurement | Volume |
|------|-------------|--------|
| Small | <10 mm | <100 mL |
| Moderate | 10-20 mm | 100-500 mL |
| Large | >20 mm | >500 mL |

## Cardiac Tamponade

**Definition:** Life-threatening compression of the heart by pericardial fluid

**Pathophysiology:**
- Increased pericardial pressure exceeds cardiac filling pressures
- Decreased venous return and cardiac output
- Pulsus paradoxus (>10 mmHg drop in SBP with inspiration)

**Beck's Triad:**
1. Hypotension
2. Jugular venous distension (JVD)
3. Muffled heart sounds

**Pulsus Paradoxus Explained:**
Normally, SBP drops slightly with inspiration. In tamponade, this drop is exaggerated (>10 mmHg) because:
- Inspiration increases RV filling
- RV bulges into LV (ventricular interdependence)
- LV stroke volume falls

**Treatment:**
- Emergency pericardiocentesis
- Avoid diuretics (need preload!)
- IV fluids (bridge to drainage)
- Surgical window if recurrent

## Constrictive Pericarditis

**Definition:** Thickened, fibrotic pericardium restricts cardiac filling

**Key Feature:** Impaired diastolic filling of all chambers

**Causes:**
- Prior pericarditis (any cause)
- Cardiac surgery
- Radiation therapy
- Tuberculosis (common worldwide)
- Idiopathic

**Clinical Features:**
- Right heart failure symptoms predominate
- JVD with Kussmaul sign (JVP rises with inspiration)
- Peripheral edema, ascites, hepatomegaly
- Pericardial knock (early diastolic sound)

**Diagnosis:**
- Echo: Septal bounce, respirophasic variation
- CT/MRI: Thickened pericardium (>4 mm), calcification
- Cardiac catheterization: Equalization of diastolic pressures

**Treatment:**
- Diuretics for congestion (careful - preload dependent)
- Surgical pericardiectomy (definitive)`,
      keyTerms: [
        { term: 'pericardial friction rub', definition: 'Scratchy sound heard with stethoscope when inflamed pericardial layers rub together' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated drop in blood pressure (>10 mmHg) during inspiration; sign of tamponade' },
        { term: 'Beck\'s triad', definition: 'Hypotension, JVD, muffled heart sounds - classic signs of tamponade' },
        { term: 'Dressler syndrome', definition: 'Delayed autoimmune pericarditis occurring weeks after MI or cardiac surgery' },
        { term: 'Kussmaul sign', definition: 'Paradoxical rise in JVP with inspiration; suggests constrictive pericarditis' },
        { term: 'colchicine', definition: 'Anti-inflammatory medication that reduces pericarditis recurrence' },
      ],
      analogies: [
        'The pericardial friction rub sounds like leather shoes squeaking or sandpaper rubbing.',
        'Pulsus paradoxus is like a balloon inside a box - when you try to inflate it, the walls prevent expansion.',
        'Constrictive pericarditis turns the flexible pericardium into a rigid shell, like concrete setting around the heart.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pericardial disease diagnosis requires integration of clinical findings, ECG, imaging, and hemodynamics, with management ranging from anti-inflammatory therapy to emergent pericardiocentesis or surgical pericardiectomy.',
      explanation: `## Acute Pericarditis - Detailed

### Diagnostic Criteria (ESC 2015)

At least 2 of 4 criteria:
1. Typical chest pain (sharp, pleuritic, positional)
2. Pericardial friction rub
3. ECG changes (diffuse ST elevation or PR depression)
4. Pericardial effusion (new or worsening)

### ECG in Pericarditis

**Stage I (Acute):**
- Diffuse ST elevation (concave up, "smiley face")
- PR segment depression (especially in lead II)
- ST elevation in all leads except aVR, V1
- PR elevation in aVR

**Distinguishing from STEMI:**
| Feature | Pericarditis | STEMI |
|---------|--------------|-------|
| ST elevation | Diffuse, concave up | Territorial, convex |
| Reciprocal changes | Absent | Present |
| PR segment | Depressed | Normal |
| Q waves | Absent | May develop |
| Evolution | Days | Hours |

### Biomarkers

- **Troponin:** Elevated in 30-50% (myopericarditis)
- **CRP/ESR:** Elevated; useful for monitoring
- **BNP:** Usually normal (unlike heart failure)

### Risk Stratification

**High-Risk Features (Consider Hospitalization):**
- Fever >38C
- Subacute onset
- Large effusion or tamponade
- Aspirin/NSAID failure
- Myopericarditis (troponin elevation)
- Immunosuppression
- Anticoagulation
- Trauma

### Treatment Protocol

**First Episode:**
- Aspirin 750-1000mg TID x 1-2 weeks, then taper
- OR Ibuprofen 600mg TID x 1-2 weeks, then taper
- PLUS Colchicine 0.5mg BID x 3 months (0.5mg daily if <70kg)
- Activity restriction until symptoms resolved + CRP normalized

**Recurrent Pericarditis:**
- NSAID + colchicine for longer duration (6+ months)
- Corticosteroids if NSAID-refractory (low dose)
- Immunomodulatory agents: azathioprine, IVIG, anakinra
- Pericardiectomy for refractory cases

## Pericardial Effusion

### Echo Assessment

**Qualitative:**
- Circumferential vs loculated
- Fibrin strands, septations
- Thickened pericardium

**Quantitative:**
- Small: <10mm (posterior only)
- Moderate: 10-20mm
- Large: >20mm (circumferential)

**Tamponade Physiology:**
- RA systolic collapse (first sign, sensitive)
- RV diastolic collapse (more specific)
- Dilated IVC without respiratory variation
- Respirophasic flow variation (>25% mitral, >40% tricuspid)

### Pericardiocentesis

**Indications:**
- Tamponade physiology
- Large effusion with symptoms
- Diagnostic uncertainty
- Suspected purulent pericarditis

**Technique:**
- Echo-guided preferred
- Subxiphoid approach classic
- Apical approach if loculated
- Drain placement for ongoing drainage

**Fluid Analysis:**
- Cell count, protein, glucose, LDH
- Gram stain, culture, AFB
- Cytology (malignancy)
- Specific tests (adenosine deaminase for TB)

### Effusion Etiologies

**Transudative:**
- Heart failure
- Cirrhosis
- Hypothyroidism
- Nephrotic syndrome

**Exudative:**
- Infectious (bacterial, viral, TB)
- Malignancy
- Autoimmune
- Uremia
- Post-procedural

## Cardiac Tamponade

### Hemodynamics

**Pathophysiology:**
1. Pericardial pressure exceeds right heart filling pressure
2. Impaired venous return
3. Reduced stroke volume
4. Compensatory tachycardia
5. Eventually cardiogenic shock

**Critical Volume:**
- Acute: 150-200 mL can cause tamponade
- Chronic: 1-2 L can be tolerated if slow accumulation

**Pressure Tracings:**
- Elevated and equalized diastolic pressures
- RA pressure = RV diastolic = PA diastolic = PCWP
- Prominent x-descent, blunted y-descent

### Management

**Temporizing Measures:**
- IV fluids (increase preload)
- Avoid positive pressure ventilation
- Inotropes (dobutamine)
- Avoid bradycardia

**Definitive Treatment:**
- Pericardiocentesis (emergent)
- Pericardial window (surgical)
- Pericardiectomy (if constrictive or recurrent)

## Constrictive Pericarditis

### Pathophysiology

**Key Concepts:**
- Thick, fibrotic pericardium limits diastolic expansion
- Early diastolic filling preserved (rapid equalization)
- Late diastolic filling impaired ("dip and plateau")
- Ventricular interdependence exaggerated

**Hemodynamic Findings:**
- Equalization of diastolic pressures
- "Square root" sign (dip and plateau)
- Kussmaul sign (JVP rises with inspiration)
- Respirophasic ventricular interdependence

### Distinguishing Constriction vs Restriction

| Feature | Constriction | Restriction |
|---------|--------------|-------------|
| Pericardium | Thickened | Normal |
| Septal motion | Bounce | Normal |
| E/e' ratio | Normal or low | Elevated |
| Respirophasic variation | Present | Minimal |
| BNP | Normal or mild | Very elevated |
| MRI | Thickened pericardium | Myocardial abnormality |

### Effusive-Constrictive Pericarditis

- Tamponade physiology initially
- After drainage, constrictive features persist
- Elevated pressures remain despite effusion removal
- Common in TB, malignancy, post-radiation`,
      keyTerms: [
        { term: 'myopericarditis', definition: 'Pericarditis with myocardial involvement indicated by troponin elevation' },
        { term: 'RA systolic collapse', definition: 'Early echo sign of tamponade; right atrium collapses during ventricular systole' },
        { term: 'square root sign', definition: 'Hemodynamic pattern in constriction: rapid early diastolic filling then abrupt plateau' },
        { term: 'ventricular interdependence', definition: 'Exaggerated respiratory variation in ventricular filling due to shared pericardial constraint' },
        { term: 'effusive-constrictive', definition: 'Mixed picture with tamponade features that reveal constriction after drainage' },
        { term: 'anakinra', definition: 'IL-1 receptor antagonist used for refractory recurrent pericarditis' },
      ],
      clinicalNotes: 'The friction rub is pathognomonic but may be transient - listen with patient leaning forward in expiration. Colchicine reduces recurrence by 50% and should be used with first episode. In tamponade, avoid diuretics and positive pressure ventilation - they worsen hemodynamics.',
    },
    4: {
      level: 4,
      summary: 'Advanced pericardial disease management integrates multimodality imaging, hemodynamic assessment, targeted anti-inflammatory strategies, and surgical intervention with recognition of specific etiologies and contemporary evidence.',
      explanation: `## Advanced Imaging

### Cardiac MRI in Pericardial Disease

**Acute Pericarditis:**
- Pericardial thickening
- Pericardial enhancement (gadolinium)
- Associated myocardial involvement

**Pericardial Effusion:**
- Precise quantification
- Characterization (simple vs complex)
- Loculated effusions

**Constrictive Pericarditis:**
- Pericardial thickness >4 mm
- Septal bounce (real-time imaging)
- Myocardial tagging (adherence)
- Distinguish from restrictive cardiomyopathy

**LGE Patterns:**
- Pericardial enhancement: Active inflammation
- Myocardial enhancement: Myopericarditis

### CT Imaging

**Advantages:**
- Excellent for calcification detection
- Pericardial thickness measurement
- Anatomic relationships

**Findings:**
- Calcified pericardium (constriction)
- Pericardial thickening
- Effusion characterization (Hounsfield units)

### Advanced Echocardiography

**Strain Imaging:**
- Preserved longitudinal strain in constriction
- Reduced in restrictive cardiomyopathy

**Tissue Doppler:**
- e' preserved or increased in constriction (annulus paradoxus)
- e' reduced in restriction

**Speckle Tracking:**
- Diastolic dyssynchrony in constriction
- May differentiate from restriction

## Hemodynamic Assessment

### Cardiac Catheterization

**Indications:**
- Diagnostic uncertainty (constriction vs restriction)
- Pre-operative assessment
- Hemodynamic optimization

**Classic Constrictive Findings:**
- RVEDP = LVEDP (within 5 mmHg)
- RVEDP/RVSP > 0.33
- RVSP < 50 mmHg
- "Square root" sign
- Kussmaul sign

**Dynamic Testing:**
- Volume loading (separates pressures in restriction)
- Respirophasic variation (concordance vs discordance)
- Exercise (unmasks occult constriction)

### Concordance vs Discordance

**Constrictive Pericarditis:**
- Discordant RV/LV pressure changes with respiration
- Inspiration: RV pressure increases, LV decreases
- Ventricular interdependence due to fixed pericardium

**Restrictive Cardiomyopathy:**
- Concordant changes
- Both RV and LV pressures move together
- Diseased myocardium, normal pericardium

## Specific Etiologies

### Tuberculous Pericarditis

**Epidemiology:**
- Common in endemic areas
- Leading cause of large effusions in developing world
- High mortality without treatment

**Diagnosis:**
- Pericardial fluid: Lymphocyte-predominant
- Adenosine deaminase (ADA) >40 U/L (70% sensitive, 87% specific)
- PCR for MTB
- Pericardial biopsy (granulomas)

**Treatment:**
- Standard TB regimen (4 drugs)
- Duration: 6 months minimum
- Steroids controversial (may reduce constriction, immunoreconstitution considerations)
- High rate of progression to constriction

### Uremic Pericarditis

**Two Types:**
- Pre-dialysis: BUN > 60, improves with dialysis initiation
- Dialysis-associated: Despite adequate dialysis, inflammatory

**Management:**
- Intensify dialysis
- NSAIDs (if not contraindicated)
- Steroids for refractory cases
- Pericardiocentesis for tamponade

### Malignant Pericardial Disease

**Common Primaries:**
- Lung cancer (most common)
- Breast cancer
- Lymphoma
- Melanoma

**Presentation:**
- Often large effusions
- May present with tamponade
- Bloody pericardial fluid common

**Management:**
- Pericardiocentesis for tamponade
- Cytology for diagnosis (60-90% yield)
- Pericardial window for recurrence
- Intrapericardial chemotherapy (selected cases)
- Systemic therapy for underlying malignancy

### Post-Cardiac Surgery Pericarditis

**Timing:**
- Early (days): Surgical trauma
- Late (weeks-months): Postcardiotomy syndrome (autoimmune)

**Risk Factors:**
- Valve surgery > CABG
- Preoperative NSAIDs
- Warfarin

**Management:**
- NSAIDs + colchicine
- Drainage if hemodynamically significant
- Steroids if refractory

### Radiation-Induced Pericarditis

**Timeline:**
- Acute (during or shortly after radiation)
- Delayed (months to decades later)

**Associated Conditions:**
- Constrictive pericarditis
- Radiation-induced cardiomyopathy
- Coronary artery disease
- Valvular disease

**Management:**
- Pericardiectomy for constriction
- High surgical risk due to fibrosis, coronary disease
- May require combined procedures

## Recurrent Pericarditis

### Definition

- Symptom-free interval of ≥4-6 weeks
- Then recurrence with objective evidence
- Occurs in 15-30% of patients

### Risk Factors for Recurrence

- Inadequate initial treatment (especially no colchicine)
- Steroid use (dose-dependent)
- Autoimmune etiology
- Large effusion
- Myopericarditis

### Management Escalation

**Step 1: NSAIDs + Colchicine**
- Longer duration (6+ months)
- Slow taper

**Step 2: Low-Dose Corticosteroids**
- Prednisone 0.25-0.5 mg/kg
- Very slow taper (months)
- With colchicine continuation

**Step 3: Immunomodulatory Agents**
- Azathioprine
- IVIG
- Anakinra (IL-1 inhibitor) - highly effective

**Step 4: Pericardiectomy**
- Refractory cases
- Must ensure no active inflammation at surgery

### Anakinra in Pericarditis

**Evidence:**
- AIRTRIP trial: 95% reduction in recurrence
- Rapid symptom relief (hours)

**Dosing:**
- 100 mg SC daily
- 3-6 months minimum
- Slow taper off

**Side Effects:**
- Injection site reactions
- Infections
- Neutropenia`,
      keyTerms: [
        { term: 'annulus paradoxus', definition: 'Preserved or increased e\' velocity in constriction despite diastolic dysfunction' },
        { term: 'adenosine deaminase', definition: 'Enzyme elevated in tuberculous pericardial fluid; aids diagnosis' },
        { term: 'postcardiotomy syndrome', definition: 'Autoimmune pericarditis occurring weeks after cardiac surgery' },
        { term: 'AIRTRIP', definition: 'Trial demonstrating anakinra efficacy in refractory recurrent pericarditis' },
        { term: 'LGE', definition: 'Late gadolinium enhancement on MRI indicating inflammation or fibrosis' },
        { term: 'Hounsfield units', definition: 'CT density measurement helping characterize pericardial fluid' },
      ],
      clinicalNotes: 'CMR is invaluable for distinguishing constriction from restriction. In TB-endemic areas, always consider tuberculous pericarditis with large effusions. Anakinra has revolutionized treatment of refractory recurrent pericarditis. Avoid steroids as first-line - they increase recurrence risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pericardial disease management integrates advanced imaging, targeted anti-inflammatory therapies including IL-1 blockade, and surgical intervention, with ongoing research into genetic susceptibility and novel therapeutic targets.',
      explanation: `## Current Guidelines and Evidence

### 2015 ESC Guidelines Update

**Key Recommendations:**
1. Colchicine for all pericarditis episodes (Class I)
2. Restrict exercise until symptom resolution and CRP normalization
3. Low-dose steroids only for specific indications
4. Multimodality imaging for complex cases
5. Anakinra for refractory recurrent pericarditis

### COPE and ICAP Trial Evidence

**COPE Trial:**
- Colchicine 0.5mg BID x 3 months
- Reduced recurrence from 32% to 11%

**ICAP Trial:**
- Colchicine 0.5mg BID x 3 months (first episode)
- Reduced recurrence from 17% to 8%
- Faster symptom resolution

**CORP/CORP-2 Trials:**
- Colchicine for recurrent pericarditis
- 6-month duration
- Dramatic reduction in recurrence

### Contemporary Diagnostic Approach

**First Episode Algorithm:**
1. Clinical diagnosis (2 of 4 criteria)
2. Risk stratification
3. Low risk: Outpatient management
4. High risk: Admit, workup for specific etiology

**Workup Considerations:**
- CBC, CRP, ESR (all patients)
- Troponin (exclude myopericarditis)
- Renal function, TSH
- ANA, RF (if autoimmune suspected)
- TB testing (if endemic area or risk factors)
- CT/CMR (if atypical or diagnostic uncertainty)

## Advanced Therapeutic Strategies

### IL-1 Pathway Targeting

**Rationale:**
- Pericarditis involves inflammasome activation
- IL-1beta release drives inflammation
- Autoinflammatory component in recurrence

**Agents:**
- Anakinra (IL-1 receptor antagonist)
- Rilonacept (IL-1 trap)
- Canakinumab (anti-IL-1beta monoclonal)

**RHAPSODY Trial (Rilonacept):**
- Phase 3 trial in recurrent pericarditis
- 96% reduction in recurrence
- FDA approved 2021

### Colchicine Mechanisms

**Anti-inflammatory Effects:**
- Tubulin polymerization inhibition
- Neutrophil chemotaxis reduction
- Inflammasome inhibition
- IL-1beta processing reduction

**Dosing Considerations:**
- Weight-based (0.5mg daily if <70kg)
- Renal adjustment
- Drug interactions (CYP3A4, P-gp)

### Steroid Strategy

**When to Use:**
- NSAID contraindication
- Autoimmune etiology
- Uremic pericarditis (sometimes)
- Refractory to NSAID + colchicine

**How to Minimize Risk:**
- Low starting dose (0.25-0.5 mg/kg)
- Very slow taper (weeks to months)
- Always with colchicine
- Taper NSAIDs first, then steroids

## Surgical Considerations

### Pericardiectomy

**Indications:**
- Constrictive pericarditis (Class I)
- Refractory recurrent pericarditis (after medical therapy exhausted)
- Large effusion requiring repeated drainage

**Timing:**
- Constriction: Earlier is better (before advanced fibrosis)
- Recurrent: Ensure no active inflammation at surgery

**Surgical Approach:**
- Median sternotomy (most common)
- Left anterolateral thoracotomy
- Extent: Complete vs partial (complete preferred)

**Outcomes:**
- Operative mortality: 5-15% (higher in radiation-induced)
- Symptom improvement: 80-90%
- Long-term survival depends on etiology

**Predictors of Poor Outcome:**
- Radiation-induced
- Advanced NYHA class
- Renal dysfunction
- Atrial fibrillation
- RV dysfunction

### Pericardial Window

**Indications:**
- Recurrent malignant effusion
- Unable to tolerate pericardiectomy

**Approaches:**
- Subxiphoid (local anesthesia possible)
- Video-assisted thoracoscopic (VATS)

## Special Populations

### Pregnancy

**Pericarditis in Pregnancy:**
- NSAIDs (avoid third trimester)
- Colchicine (limited data, avoid if possible)
- Steroids (relative safety)

**Pericardial Effusion:**
- Small effusions common in pregnancy
- Monitor if hemodynamically significant

### Immunocompromised

**Considerations:**
- Broader infectious differential
- Fungal, mycobacterial etiologies
- Drug-induced (checkpoint inhibitors)
- Kaposi sarcoma (HIV)

**Management:**
- Aggressive diagnostic approach
- Pericardiocentesis for fluid analysis
- Consider empiric therapy while awaiting results

### Athletes

**Return to Play:**
- Complete symptom resolution
- Normal CRP
- Normalized ECG/echo
- At least 3 months from diagnosis
- Gradual return under supervision

## Emerging Concepts

### Genetic Susceptibility

**Autoinflammatory Syndromes:**
- Familial Mediterranean Fever (FMF)
- TNF receptor-associated periodic syndrome (TRAPS)
- May present as "idiopathic" recurrent pericarditis

**MEFV Gene Variants:**
- Associated with recurrent pericarditis
- May identify patients who benefit from early IL-1 blockade

### Biomarker-Guided Therapy

**CRP Monitoring:**
- Guide treatment duration
- Must normalize before taper
- Rising CRP predicts recurrence

**Novel Biomarkers:**
- IL-6
- IL-1beta
- ST2
- Potential for personalized therapy

### Intrapericardial Therapies

**Local Drug Delivery:**
- Triamcinolone injection
- Chemotherapy (malignant effusions)
- Sclerosing agents

**Pericardial Access:**
- Percutaneous techniques
- Epicardial ablation access adaptation

### Future Directions

1. **Precision Medicine:** Genetic testing for autoinflammatory variants
2. **Novel Biologics:** Other IL-1 pathway targets, IL-6 inhibition
3. **Imaging Biomarkers:** PET for inflammation, MRI for treatment response
4. **Prevention:** Post-surgical prophylaxis trials
5. **Pericardial Regeneration:** Tissue engineering approaches`,
      keyTerms: [
        { term: 'rilonacept', definition: 'IL-1 trap FDA-approved for recurrent pericarditis; soluble decoy receptor' },
        { term: 'RHAPSODY', definition: 'Phase 3 trial demonstrating rilonacept efficacy in recurrent pericarditis' },
        { term: 'MEFV', definition: 'Gene mutated in Familial Mediterranean Fever; variants associated with recurrent pericarditis' },
        { term: 'inflammasome', definition: 'Intracellular complex that activates IL-1beta; target in autoinflammatory pericarditis' },
        { term: 'occult constriction', definition: 'Constrictive physiology unmasked by exercise or volume challenge' },
        { term: 'pericardial regeneration', definition: 'Emerging approach using tissue engineering to restore pericardial function' },
      ],
      clinicalNotes: `Key clinical pearls for pericardial disease:

1. **Colchicine**: Use for ALL pericarditis episodes - reduces recurrence by 50%+
2. **Steroids**: Avoid as first-line; increase recurrence risk; use low dose if needed
3. **CRP**: Must normalize before stopping treatment; guide taper decisions
4. **Tamponade**: Clinical diagnosis - do not delay drainage for imaging in unstable patient
5. **Constriction vs Restriction**: CMR and cath both valuable; look for septal bounce, annulus paradoxus
6. **TB Pericarditis**: Always consider in endemic areas; ADA in pericardial fluid helpful
7. **Recurrent Disease**: Escalate to IL-1 blockade (anakinra, rilonacept) if NSAID/colchicine fail
8. **Return to Sport**: Wait 3 months, require symptom resolution, normal CRP, and normal imaging
9. **Pericardiectomy**: Consider early in constriction; outcomes worse in radiation-induced
10. **Autoinflammatory**: Consider MEFV variants in "idiopathic" recurrent pericarditis`,
    },
  },

  media: [
    {
      id: 'pericarditis-ecg',
      type: 'diagram',
      filename: 'pericarditis-ecg-stages.svg',
      title: 'ECG Evolution in Pericarditis',
      description: 'Four stages of ECG changes in acute pericarditis',
    },
    {
      id: 'tamponade-echo',
      type: 'diagram',
      filename: 'cardiac-tamponade-echo.svg',
      title: 'Echocardiographic Signs of Tamponade',
      description: 'RA collapse, RV collapse, IVC dilation',
    },
    {
      id: 'constriction-hemodynamics',
      type: 'diagram',
      filename: 'constrictive-hemodynamics.svg',
      title: 'Constrictive Pericarditis Hemodynamics',
      description: 'Square root sign and pressure equalization',
    },
  ],

  citations: [
    {
      id: 'esc-pericardial-2015',
      type: 'article',
      title: '2015 ESC Guidelines for the diagnosis and management of pericardial diseases',
      authors: ['Adler Y', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehv318',
    },
    {
      id: 'cope-trial',
      type: 'article',
      title: 'Colchicine for Pericarditis (COPE)',
      authors: ['Imazio M', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'braunwald-pericardial',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Pericardial Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'condition-tuberculosis', targetType: 'condition', relationship: 'related', label: 'Tuberculosis' },
    { targetId: 'topic-cardiac-imaging', targetType: 'topic', relationship: 'related', label: 'Cardiac Imaging' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pericardium', 'inflammation', 'emergencies', 'cardiac surgery'],
    keywords: ['pericarditis', 'tamponade', 'constrictive', 'effusion', 'colchicine', 'friction rub'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pericardialDiseases;
