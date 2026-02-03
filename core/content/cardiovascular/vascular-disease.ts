/**
 * Vascular Disease - Comprehensive Educational Content
 *
 * Covers peripheral artery disease, aortic aneurysms, deep vein thrombosis,
 * pulmonary embolism, and other vascular conditions.
 */

import { EducationalContent } from '../types';

export const vascularDiseaseContent: EducationalContent = {
  id: 'category-vascular-disease',
  type: 'topic',
  name: 'Vascular Disease',
  alternateNames: ['Peripheral Vascular Disease', 'PVD', 'Vascular Disorders'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Vascular disease affects the blood vessels outside the heart, causing problems like blocked leg arteries, bulging weak spots in the aorta, and blood clots in the veins that can travel to the lungs.',
      explanation: `## What Is Vascular Disease?

Vascular disease means problems with your blood vessels - the tubes that carry blood throughout your body. Just like pipes in a house can get clogged, leaky, or damaged, your blood vessels can develop problems too.

## Main Types of Vascular Disease

### 1. Peripheral Artery Disease (PAD)

**What It Is:**
The arteries that carry blood to your legs and arms get narrowed or blocked, usually by buildup of fatty deposits (plaque).

**What You Might Feel:**
- Pain or cramping in your legs when walking (claudication)
- Pain goes away when you rest, comes back when you walk again
- Cold feet or legs
- Sores on your feet that won't heal
- Color changes in your legs (pale, blue, or dark)
- Hair loss on your legs

**Why It Matters:**
- Can make it hard to walk or exercise
- Increases risk of heart attack and stroke
- Severe cases can lead to amputation

**Who Gets It:**
- People who smoke
- People with diabetes
- People over age 65
- People with high blood pressure or high cholesterol

### 2. Aortic Aneurysm

**What It Is:**
A weak, bulging spot in the aorta (your body's main artery). Think of it like a weak spot on a balloon that expands outward.

**Types:**
- **Abdominal aortic aneurysm (AAA):** In the belly area
- **Thoracic aortic aneurysm:** In the chest

**Why It's Dangerous:**
- Can burst (rupture) causing life-threatening bleeding
- Most people have no symptoms until it's very large

**Warning Signs:**
- Deep, constant pain in belly or back
- Pulsing feeling near your belly button
- Sudden, severe pain (emergency!)

**Prevention:**
- Men who smoke or used to smoke should get screened starting at age 65
- Control blood pressure
- Don't smoke

### 3. Deep Vein Thrombosis (DVT)

**What It Is:**
A blood clot that forms in a deep vein, usually in the leg. The clot can block blood flow and damage the vein.

**What You Might Feel:**
- Swelling in one leg (usually calf)
- Pain or tenderness, often when standing or walking
- Warmth in the affected area
- Red or discolored skin
- Sometimes no symptoms at all!

**What Causes It:**
- Surgery (especially hip or knee)
- Long periods of not moving (long flights, bed rest)
- Birth control pills
- Pregnancy
- Cancer
- Family history

**Why It's Dangerous:**
The clot can break off and travel to the lungs, causing a pulmonary embolism - a life-threatening emergency.

### 4. Pulmonary Embolism (PE)

**What It Is:**
When a blood clot (usually from a DVT) travels to the lungs and blocks blood flow.

**Warning Signs (Call 911):**
- Sudden shortness of breath
- Chest pain that gets worse with breathing
- Coughing up blood
- Rapid heartbeat
- Feeling faint or passing out
- Sweating

**Why Immediate Help Is Needed:**
PE can be fatal if not treated quickly, but most people recover completely with proper treatment.

## Reducing Your Risk

**Things You Can Do:**
- Don't smoke (or quit if you do)
- Exercise regularly
- Maintain a healthy weight
- Control blood pressure and cholesterol
- Manage diabetes if you have it
- Move around during long trips
- Take medicine as prescribed if you've had a clot before

## When to Get Help

**Emergency (Call 911):**
- Sudden chest pain or shortness of breath
- Sudden severe back or belly pain
- Coughing up blood
- Fainting

**See Your Doctor Soon:**
- Leg pain when walking
- Swelling in one leg
- Non-healing sores on feet or legs
- Pulsing sensation in your belly

Remember: Vascular disease often has no early symptoms, so regular check-ups are important, especially if you have risk factors!`,
      keyTerms: [
        { term: 'peripheral artery disease', definition: 'Narrowing of arteries to the legs, arms, or stomach' },
        { term: 'claudication', definition: 'Pain and cramping in legs during exercise that stops with rest' },
        { term: 'aneurysm', definition: 'A weak, bulging area in an artery wall' },
        { term: 'aorta', definition: 'The main artery carrying blood from the heart to the body' },
        { term: 'DVT', definition: 'Deep vein thrombosis; a blood clot in a deep vein, usually in the leg' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to the lungs' },
      ],
      analogies: [
        'PAD is like a clogged pipe - not enough water can get through to water the plants.',
        'An aneurysm is like a weak spot on a tire that bulges out and could burst.',
        'DVT is like traffic blocked by an accident - nothing can get through.',
      ],
      examples: [
        'A person with PAD might walk 2 blocks and feel leg cramping, then need to stop and rest before walking again.',
        'Someone with an AAA might notice a pulsing sensation near their belly button that wasn\'t there before.',
        'After a long flight, a person might notice one leg is swollen and painful - signs of a possible DVT.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vascular disease encompasses peripheral artery disease (atherosclerotic occlusion causing claudication), aortic aneurysms (abdominal and thoracic), and venous thromboembolism (DVT/PE), with significant morbidity and mortality requiring risk factor modification and appropriate screening.',
      explanation: `## Peripheral Artery Disease (PAD)

**Definition:** Atherosclerosis of arteries to the extremities, most commonly lower extremities

**Epidemiology:**
- Affects 8-12 million Americans
- Prevalence increases with age: 3% <60 years, >20% >75 years
- Associated with CAD (60-70% have concomitant CAD)

**Pathophysiology:**
- Atherosclerotic plaque narrows arterial lumen
- Exercise increases oxygen demand exceeds supply
- Rest: Supply meets demand (ischemia resolves)
- Severe disease: Ischemia at rest (critical limb ischemia)

**Clinical Presentation:**

**Claudication:**
- Reproducible muscle pain with exercise
- Relieved within 10 minutes of rest
- Location indicates level of obstruction:
  - Buttock/hip: Aortoiliac disease
  - Thigh: Common femoral artery
  - Calf: Superficial femoral artery (most common)

**Critical Limb Ischemia:**
- Rest pain (worse at night, relieved by dangling leg)
- Non-healing ulcer or gangrene
- Risk of limb loss

**Diagnosis:**
- **ABI (Ankle-Brachial Index):**
  - Ratio of ankle to brachial systolic BP
  - Normal: 1.0-1.4
  - PAD: ≤0.90
  - Severe: ≤0.40
  - Non-compressible: >1.4 (calcified vessels)

- **Imaging:**
  - Duplex ultrasound (first-line)
  - CTA (anatomy for intervention)
  - MRA (if contrast contraindicated)
  - Angiography (gold standard, invasive)

**Risk Factors:**
- Smoking (strongest risk factor)
- Diabetes
- Age >65
- Hypertension
- Dyslipidemia
- Family history

## Aortic Aneurysm

**Definition:** Permanent localized dilation of aorta >1.5× normal diameter

### Abdominal Aortic Aneurysm (AAA)

**Definition:** AAA ≥3.0 cm

**Epidemiology:**
- Affects 4-8% of men >65 years
- Rupture risk increases with size
- 15th leading cause of death in men >65

**Risk Factors:**
- Male sex (4-6:1 ratio)
- Smoking (strongest modifiable risk)
- Age >65
- Caucasian race
- Family history (first-degree relative)
- Atherosclerosis
- COPD

**Natural History:**
| Diameter | Rupture Risk/Year |
|----------|-------------------|
| 3.0-3.9 cm | <0.5% |
| 4.0-4.9 cm | 1-5% |
| 5.0-5.9 cm | 3-15% |
| ≥6.0 cm | >10% |

**Screening Recommendations:**
- One-time ultrasound for men 65-75 who ever smoked
- Consider for men >60 with family history
- Women: no routine screening (lower risk)

**Clinical Presentation:**
- Most are asymptomatic (found incidentally)
- Rupture: Sudden severe back/flank/abdominal pain, hypotension, pulsatile mass
- Emergency surgical repair needed

### Thoracic Aortic Aneurysm (TAA)

**Definition:** Ascending ≥4.0 cm, descending ≥5.0 cm

**Causes:**
- Degenerative/atherosclerotic
- Genetic (Marfan, Ehlers-Danlos, Loeys-Dietz)
- Bicuspid aortic valve
- Dissection (type B chronic)

**Complications:**
- Rupture (into pericardium, pleura, esophagus)
- Aortic regurgitation
- Dissection
- Compression (trachea, esophagus, nerves)

## Deep Vein Thrombosis (DVT)

**Definition:** Thbus formation in deep veins, most commonly lower extremity

**Virchow's Triad (Risk Factors):**
1. **Stasis:** Immobility, surgery, heart failure, travel
2. **Hypercoagulability:** Cancer, pregnancy, OCPs, genetic thrombophilia
3. **Vessel Injury:** Trauma, surgery, IV access

**Clinical Presentation:**
- Asymptomatic (up to 50%)
- Unilateral leg swelling
- Calf pain or tenderness
- Warmth, erythema, edema
- Homan's sign (not reliable)

**Diagnosis:**
- **D-dimer:** Sensitive but not specific (elevated in many conditions)
- **Compression ultrasound:** Gold standard for proximal DVT
- **CT venography:** For suspected pelvic/thoracic DVT

## Pulmonary Embolism (PE)

**Definition:** Obstruction of pulmonary artery by thrombus (usually from DVT)

**Clinical Presentation:**

**Classic Triad (rarely all present):**
- Dyspnea
- Pleuritic chest pain
- Hemoptysis

**Other Symptoms:**
- Tachycardia
- Tachypnea
- Hypoxia
- Syncope (massive PE)

**Diagnosis:**
- **CT pulmonary angiography:** Gold standard
- **V/Q scan:** If contrast contraindicated
- **Lower extremity ultrasound:** To find DVT source

**Severity Classification:**
- **Massive:** Hemodynamic instability (hypotension)
- **Submassive:** Normotensive with RV dysfunction (echo, biomarkers)
- **Low risk:** Normotensive, no RV dysfunction

## Venous Thromboembolism (VTE) Treatment

**Anticoagulation:**

**Acute (First 5-10 days):**
- Heparin or LMWH (enoxaparin)
- Fondaparinux
- Direct oral anticoagulants (some options)

**Long-term (≥3 months):**
- DOACs preferred (apixaban, rivaroxaban, dabigatran, edoxaban)
- Warfarin (if DOAC contraindicated or severe renal impairment)

**Duration:**
- First provoked VTE: 3 months
- Unprovoked or recurrent: Extended (indefinite)
- Cancer-associated: As long as active cancer

**IVC Filter:**
- Indicated when anticoagulation contraindicated
- Recurrent VTE despite anticoagulation
- Not routinely used`,
      keyTerms: [
        { term: 'claudication', definition: 'Reproducible leg pain with exercise relieved by rest; classic PAD symptom' },
        { term: 'ABI', definition: 'Ankle-brachial index; ankle BP ÷ brachial BP, screens for PAD' },
        { term: 'AAA', definition: 'Abdominal aortic aneurysm; dilation ≥3 cm' },
        { term: 'critical limb ischemia', definition: 'Rest pain, ulcer, or gangrene from arterial occlusion' },
        { term: 'Virchow\'s triad', definition: 'Three factors promoting thrombosis: stasis, hypercoagulability, vessel injury' },
        { term: 'D-dimer', definition: 'Fibrin degradation product; sensitive but nonspecific for VTE' },
        { term: 'massive PE', definition: 'PE with hemodynamic instability (shock)' },
      ],
      analogies: [
        'ABI is like comparing water pressure at two points in a pipe to find a blockage.',
        'Virchow\'s triad is like three ingredients needed for a clot to form.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vascular disease encompasses atherosclerotic peripheral arterial disease, aortic aneurysms with rupture risk based on diameter, and venous thromboembolism encompassing DVT and PE, each requiring specific diagnostic approaches, risk stratification, and evidence-based management strategies.',
      explanation: `## Peripheral Artery Disease

### Pathophysiology

**Atherosclerotic Process:**
- Similar to coronary artery disease
- Endothelial injury → lipid infiltration → inflammation → plaque
- Plaque progression leads to lumen narrowing
- Distal collateral vessels develop
- Critical stenosis: ≥50% diameter reduction (≥75% cross-sectional area)

**Hemodynamics:**
- Stenosis causes pressure gradient across lesion
- Exercise increases flow → pressure drop → ischemia
- Collateral circulation determines severity
- Runoff vessels affect outcome

### Diagnosis

**Ankle-Brachial Index (ABI):**
- Formula: Higher of ankle systolic pressures ÷ higher of brachial systolic pressures
- Normal: 1.00-1.40
- Mild PAD: 0.91-0.99 (borderline)
- Moderate PAD: 0.41-0.90
- Severe PAD: ≤0.40
- Non-compressible: >1.40 (medial arterial calcification)

**ABI Exercise Testing:**
- Normal: ABI increases or stays same after exercise
- PAD: ABI decreases by >15-20% after exercise
- Useful when resting ABI normal

**Imaging Modalities:**

**Duplex Ultrasound:**
- Anatomic and hemodynamic assessment
- Velocity ratios: >2.0 indicates >50% stenosis
- No contrast, operator-dependent

**CT Angiography:**
- Excellent anatomic detail
- 3D reconstruction
- Contrast nephrotoxicity risk

**MR Angiography:**
- No contrast needed (gadolinium less nephrotoxic)
- Avoid in severe CKD (nephrogenic systemic fibrosis risk)

**Digital Subtraction Angiography:**
- Gold standard for anatomy
- Invasive, contrast load
- Allows simultaneous intervention

### Management

**Medical Therapy (Class I):**
- Antiplatelet: Aspirin or clopidogrel
- Statin: High-intensity (LDL <70 mg/dL)
- Smoking cessation (critical)
- Exercise program (supervised best)
- Cilostazol 100 mg BID (symptom improvement)

**Revascularization Indications:**
- Lifestyle-limiting claudication despite medical therapy
- Critical limb ischemia (rest pain, tissue loss)
- Acute limb ischemia

**Options:**
- Endovascular: Angioplasty ± stent (first-line for TASC II A, B, C lesions)
- Surgical: Bypass graft (TASC II D lesions, long occlusions)

**Critical Limb Ischemia:**
- Rest pain, ulceration, gangrene
- <50% amputation-free survival at 1 year without revascularization
- Urgent evaluation needed

## Aortic Aneurysms

### Abdominal Aortic Aneurysm

**Natural History:**
- Average expansion: 2-3 mm/year
- Expansion rate predictors:
  - Larger initial size
  - Female sex
  - Smoking
  - Hypertension
  - COPD

**Surgical Thresholds:**
- ≥5.5 cm (or ≥5.0 cm in women)
- Growth ≥1 cm/year
- Symptomatic (any size)

**Repair Options:**

**Endovascular (EVAR):**
- Femoral artery access
- Graft within aneurysm sac
- Lower perioperative mortality
- Requires lifelong surveillance (endoleak risk)
- Anatomic requirements: Adequate proximal/distal landing zones, access vessel size

**Open Repair:**
- Midline laparotomy or retroperitoneal
- Graft replacement
- Higher perioperative mortality
- Durable, no long-term imaging needed
- Younger patients, favorable anatomy

**Complications:**
- Rupture: Mortality >80% without repair
- Endoleak (EVAR): Blood flow into sac
- Graft infection
- Aorto-enteric fistula (rare, fatal)

### Thoracic Aortic Aneurysm

**Diameter Thresholds for Repair:**
- Ascending: ≥5.5 cm (≥5.0 cm if risk factors)
- Descending: ≥6.0 cm (≥5.5 cm if connective tissue disorder)
- Growth ≥5 mm/year

**Genetic Syndromes:**

**Marfan Syndrome (FBN1 mutation):**
- Ascending aortic aneurysm
- Dissection risk at smaller sizes
- Beta-blocker or ARB (losartan) to slow growth
- Surgical threshold: ≥5.0 cm

**Loeys-Dietz (TGFBR mutation):**
- More aggressive than Marfan
- Aneurysms and arterial tortuosity
- Surgical threshold: ≥4.4-4.6 cm

**Ehlers-Danlos (vascular type, COL3A1):**
- Fragile vessels, high rupture risk
- High surgical mortality
- Avoid endovascular when possible

## Venous Thromboembolism

### DVT Pathophysiology

**Propagation Risk Factors:**
- Proximal > distal
- Unprovoked > provoked
- Malignancy
- Thrombophilia
- Previous VTE

**Post-thrombotic Syndrome:**
- Chronic venous insufficiency after DVT
- Edema, pain, skin changes, ulcers
- Compression stockings reduce risk

### PE Severity Classification

**Massive PE:**
- SBP <90 mmHg or drop ≥40 mmHg for >15 min
- Requires thrombolysis or embolectomy
- Mortality >50% without treatment

**Submassive PE:**
- Normotensive with:
  - RV dysfunction on echo
  - Elevated cardiac biomarkers
  - Consider thrombolysis in high-risk

**Low-risk PE:**
- Normotensive, no RV dysfunction
- Home discharge possible (PESI low risk)

### VTE Treatment

**Initial Anticoagulation:**

**Options:**
- LMWH (enoxaparin 1 mg/kg BID)
- UFH infusion (renal failure, high bleeding risk, pending procedures)
- Fondaparinux (7.5 mg daily)
- Rivaroxaban 15 mg BID × 21 days (single-drug approach)
- Apixaban 10 mg BID × 7 days (single-drug approach)

**Long-term Anticoagulation:**

**DOACs Preferred (Hokusai-VTE, AMPLIFY, EINSTEIN trials):**
- Non-inferior to warfarin for VTE recurrence
- Lower bleeding risk
- No monitoring needed

**Warfarin (Target INR 2-3):**
- Mechanical heart valves
- Severe renal failure (CrCl <15)
- Antiphospholipid antibody syndrome
- Pregnancy (except certain DOACs)

**Duration:**
- Provoked (surgery, trauma, immobilization): 3 months
- Unprovoked: At least 3 months, consider extended
- Recurrent: Extended (indefinite)
- Active cancer: As long as active, at least 6 months

**Cancer-Associated VTE:**
- LMWH preferred (CATCH trial) or DOACs
- Treat for as long as cancer active
- Consider IVC filter if contraindication to anticoagulation

### IVC Filters

**Indications:**
- Absolute contraindication to anticoagulation
- Recurrent VTE despite adequate anticoagulation
- Prophylaxis in high-risk trauma patients

**Complications:**
- Filter thrombosis
- IVC penetration
- Migration
- DVT post-filter
- Retrieval failure (when indicated)`,
      keyTerms: [
        { term: 'TASC II classification', definition: 'TransAtlantic Inter-Society Consensus; PAD lesion classification' },
        { term: 'EVAR', definition: 'Endovascular aneurysm repair; stent graft via femoral approach' },
        { term: 'endoleak', definition: 'Persistent blood flow into aneurysm sac after EVAR' },
        { term: 'connective tissue disorder', definition: 'Genetic conditions affecting collagen (Marfan, EDS, LDS)' },
        { term: 'post-thrombotic syndrome', definition: 'Chronic venous insufficiency after DVT; edema, ulcers' },
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; risk stratification tool' },
        { term: 'Hokusai-VTE', definition: 'Trial establishing edoxaban non-inferior to warfarin for VTE' },
      ],
      clinicalNotes: 'ABI non-compressible (>1.4) suggests medial arterial calcification, common in diabetes - use toe-pressure or TBI instead. For AAA, recommend repair at ≥5.5 cm, ≥5.0 cm in women, or ≥5.0 cm in Marfan. Massive PE (hypotensive) requires thrombolysis or embolectomy. For cancer-associated VTE, LMWH or DOAC preferred over warfarin.',
    },
    4: {
      level: 4,
      summary: 'Advanced vascular disease management integrates anatomic and hemodynamic assessment, evidence-based medical therapy, endovascular and surgical interventions tailored to individual risk profiles, and multidisciplinary approaches to complex aortic pathology and acute limb ischemia.',
      explanation: `## Advanced Peripheral Artery Disease

### Supervised Exercise Therapy

**Structure:**
- 3 sessions/week, 30-60 minutes
- Walk to near-maximal pain, rest, repeat
- 12-week program
- Improves walking distance by 100-150%

**Mechanisms:**
- Muscle metabolic adaptations
- Collateral vessel development
- Improved walking efficiency
- Psychological factors

**Effect on Outcomes:**
- Equivalent or superior to stent for claudication (CLEVER trial)
- Lower cost, fewer complications

### Endovascular Techniques

**Plain Balloon Angioplasty:**
- First-line for TASC II A lesions
- Limitation: Restenosis (30-40% at 1 year)

**Stenting:**
- Primary stenting for iliac arteries (better patency)
- Femoropopliteal: Drug-eluting stents reduce restenosis
- Below-knee: Balloon-expandable or self-expanding

**Drug-Coated Balloons:**
- Paclitaxel coating reduces restenosis
- IN.PACT DEEP: Conflicting safety signals
- Use limited in US

**Atherectomy:**
- Orbital, directional, laser
- Use for heavily calcified lesions
- No mortality benefit, higher cost
- Use selectively

### Bypass Surgery

**Graft Selection:**
- Autologous vein: Greater saphenous vein (best)
- Prosthetic: PTFE or Dacron (above knee)
- Composite: Vein + prosthetic (femoropopliteal)

**Patency Rates:**
- Above-knee vein: 65% at 5 years
- Below-knee vein: 50% at 5 years
- Prosthetic: 30-40% at 5 years

**Indications:**
- TASC II D lesions
- Long occlusions (>20 cm)
- Failed endovascular
- Good autologous vein available

### Acute Limb Ischemia

**Classification (Rutherford):**

| Category | Sensory | Motor | Doppler | Viability |
|----------|---------|-------|---------|-----------|
| I | Intact | Intact | Audible | Viable |
| IIa | Minimal/loss | Intact | Inaudible | Threatened, salvageable |
| IIb | Significant loss | Mild/moderate loss | Inaudible | Threatened, immediate intervention |
| III | Profound | Profound | Inaudible | Irreversible |

**Management:**
- Heparin immediately
- Vascular surgery consult
- Emergent revascularization
- Fasciotomy if compartment syndrome

## Aortic Disease

### Thoracic Endovascular Aneurysm Repair (TEVAR)

**Indications:**
- Descending TAA ≥5.5 cm (smaller with connective tissue)
- Complicated type B aortic dissection
- Traumatic aortic injury
- Penetrating aortic ulcer

**Advantages:**
- Lower perioperative mortality vs open
- Less blood loss, shorter ICU stay
- Spinal cord ischemia risk 2-5%

**Complications:**
- Endoleak
- Stroke (embolization)
- Paraplegia (spinal cord ischemia)
- Access complications

### Aortic Dissection

**Classification:**

**Stanford:**
- Type A: Ascending aorta involved → Surgical emergency
- Type B: Descending only → Medical ± TEVAR

**DeBakey:**
- I: Ascending + descending
- II: Ascending only
- III: Descending only

**Type A Management:**
- Emergency surgical repair
- Graft replacement of ascending aorta
- Mortality 1-2% per hour untreated
- 30-day mortality 25% with surgery

**Type B Management:**
- **Uncomplicated:** Medical therapy (beta-blocker, ARB)
- **Complicated:** TEVAR indications:
  - Rupture or impending rupture
  - Malperfusion (organ ischemia)
  - Refractory pain
  - Uncontrolled hypertension

**Medical Therapy (All Dissections):**
- IV beta-blocker first (labetalol, esmolol)
- Reduce SBP to 100-120 mmHg
- Add vasodilator (nicardipine) after beta-blocker
- Avoid tachycardia

### Aortic Intramural Hematoma

**Definition:** Hemorrhage into aortic wall without intimal tear
- Type A: Manage like Type A dissection
- Type B: Similar to Type B dissection, may resorb

## Complex VTE

### High-Rockville PE

**Risk Factors for Mortality:**
- Age >80
- Male sex
- Cancer
- Heart failure
- COPD
- Hypotension
- Tachycardia
- Hypoxia

**Management of Massive PE:**
- Systemic thrombolysis (tPA)
- Surgical embolectomy
- Catheter-directed therapy
- ECMO as bridge

### Catheter-Directed Therapy

**Options:**
- Ultrasound-assisted thrombolysis (EKOS)
- Angiojet rheolytic thrombectomy
- Catheter fragmentation

**Indications:**
- High-risk submassive PE
- Contraindication to systemic thrombolysis
- Massive PE with bleeding risk

### Chronic Thromboembolic Pulmonary Hypertension (CTEPH)

**Definition:** Pulmonary HTN from unresolved PE
- Diagnosis: V/Q scan (mismatch), right heart cath
- Incidence: 0.5-5% after acute PE

**Treatment:**
- Pulmonary thromboendarterectomy (PTE) - curative
- Riociguat (sGC stimulator) - medical therapy
- Balloon pulmonary angioplasty - for inoperable`,
      keyTerms: [
        { term: 'CLEVER trial', definition: 'Supervised exercise vs stenting for claudication' },
        { term: 'IN.PACT DEEP', definition: 'Drug-coated balloon trial; safety concerns' },
        { term: 'TEVAR', definition: 'Thoracic endovascular aneurysm repair; stent graft for TAA' },
        { term: 'Rutherford classification', definition: 'Acute limb ischemia severity staging' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension' },
        { term: 'PTE', definition: 'Pulmonary thromboendarterectomy; curative surgery for CTEPH' },
        { term: 'EKOS', definition: 'Ultrasound-assisted catheter-directed thrombolysis' },
      ],
      clinicalNotes: 'CLEVER trial showed supervised exercise equivalent to stenting for claudication with lower cost. For TAA, TEVAR preferred when anatomy suitable. Type A dissection is surgical emergency with 1-2% mortality per hour if untreated. CTEPH should be considered in PE patients with persistent dyspnea and PH.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vascular medicine integrates advanced imaging for precise anatomic and functional assessment, minimally invasive endovascular techniques with decreasing morbidity, multidisciplinary aortic teams, and evolving paradigms for VTE including outpatient treatment and novel therapies for CTEPH.',
      explanation: `## Current Guidelines and Evidence

### PAD Management Updates

**2021 ESC PAD Guidelines:**
- ABI screening for high-risk patients
- Supervised exercise program first-line for claudication
- Statin therapy regardless of LDL level
- Dual antiplatelet for symptomatic PAD (aspirin + clopidogrel)
- DOACs (rivaroxaban 2.5 mg BID) + aspirin for symptomatic PAD

**COMPASS Trial:**
- Rivaroxaban 2.5 mg BID + aspirin
- 43% reduction in MACE
- 46% reduction in major adverse limb events
- Increased bleeding but net clinical benefit

**VOYAGER PAD:**
- Rivaroxaban 2.5 mg BID + aspirin after lower extremity revascularization
- Reduced limb ischemia and cardiovascular events
- Bleeding risk similar to aspirin alone

### Aortic Aneurysm Management

**EVAR-1 Trial (Long-term Follow-up):**
- EVAR: Lower early mortality
- Open repair: Better long-term durability
- Crossover (EVAR failures) increases late mortality
- Recommendations: EVAR for older/comorbid, open for younger/fit

**UK Small Aneurysm Trial:**
- No benefit to early repair for AAA 4.0-5.5 cm
- Surveillance safe until ≥5.5 cm

**Imaging Surveillance:**
- CT or ultrasound every 6-12 months
- Longer intervals if stable <5.0 cm
- More frequent if ≥5.0 cm or rapid growth

### Aortic Dissection Updates

**IRAD (International Registry of Aortic Dissection) Findings:**
- Type A: 60% in-hospital mortality without surgery
- Type B: 10% in-hospital mortality with medical therapy
- Surgery for Type B if complications

**ASPIRE Registry (Type B):**
- TEVAR superior to medical for complicated Type B
- Uncomplicated: Medical therapy preferred (no survival benefit to TEVAR)

### VTE Management

**Acute PE Updates:**

**HOME-PE Trial:**
- PESI (simplified) identifies low-risk patients
- 40% of PE patients eligible for home treatment
- Non-inferior to hospitalization

**PEITHO Trial (Thrombolysis for Submassive PE):**
- Reduced hemodynamic decompensation
- Increased major bleeding (especially in patients >75)
- Selective use in younger patients (<65)

**Dose-Reduced Thrombolysis:**
- Half-dose tPA safer in patients >75
- Catheter-directed therapy with lower thrombolytic dose

**DOACs in VTE:**
- Apixaban (AMPLIFY): Non-inferior to warfarin, less bleeding
- Rivaroxaban (EINSTEIN): Single-drug approach
- Edoxaban (Hokusai-VTE): Non-inferior, once daily
- Dabigatran (RE-COVER): Non-inferior

**Special Populations:**
- **Cancer:**
  - SELECT-D: Rivaroxaban vs dalteparin (more bleeding)
  - ADAM VTE: Apixaban vs dalteparin (similar efficacy, less bleeding)
  - DOACs increasingly used in cancer
- **Pregnancy:**
  - LMWH preferred throughout
  - Warfarin contraindicated (teratogenic)
  - DOACs generally avoided (limited data)

### CTEPH Management

**CEPA (Chronic Thromboembolic Pulmonary Hypertension):**
- 4-chamber beraprost benefit
- Riociguat (CHEST-1): Improved 6-minute walk distance
- Balloon pulmonary angioplasty for inoperable

## Emerging Therapies

### Endovascular Innovations

**Drug-Eluting Technologies:**
- Drug-eluting balloons (Zilver PTX): Improved patency
- Drug-eluting stents (Eluvia, Stellarex): Superior patency

**Below-Knee Interventions:**
- Drug-coated balloons for tibioperoneal disease
- Limb salvage rates improving

### Aortic Arch Innovations

**Branched/Fenestrated Grafts:**
- Custom-made devices for complex anatomy
- Extend TEVAR capabilities
- Requires experienced centers

### Anticoagulation

**Reversal Agents:**
- Idarucizumab: Dabigatran reversal
- Andexanet alfa: Factor Xa inhibitor reversal

## Quality Improvement

### Vascular Quality Initiative (VQI)
- Society for Vascular Surgery database
- Benchmarking outcomes
- Quality improvement

### PAD Awareness
- Most patients with PAD asymptomatic or atypical
- Under-diagnosed and under-treated
- High CV risk equivalent to CAD
- Need for public education and screening

### AAA Screening Programs
- One-time ultrasound for men 65-75 who ever smoked
- Cost-effective (>$15,000 per QALY)
- Underutilized (~50% screening rate)`,
      keyTerms: [
        { term: 'COMPASS trial', definition: 'Rivaroxaban 2.5 mg BID + aspirin in PAD/CAD; reduced MACE and limb events' },
        { term: 'VOYAGER PAD', definition: 'Rivaroxaban + aspirin after lower extremity revascularization' },
        { term: 'HOME-PE trial', definition: 'Home treatment safe for low-risk PE using PESI score' },
        { term: 'PEITHO trial', definition: 'Full-dose thrombolysis in intermediate-risk PE; efficacy vs bleeding' },
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; risk stratification for home treatment' },
        { term: 'riociguat', definition: 'sGC stimulator for CTEPH and PAH' },
        { term: 'VQI', definition: 'Vascular Quality Initiative; SVS outcomes database' },
      ],
      clinicalNotes: `Contemporary vascular practice updates:

1. **PAD:** COMPASS supports rivaroxaban 2.5 mg BID + aspirin for symptomatic disease
2. **AAA:** EVAR for older/comorbid, open for younger/fit patients; lifelong surveillance needed
3. **Dissection:** Type A surgical emergency; Type B medical unless complicated
4. **VTE:** DOACs preferred over warfarin for most patients
5. **PE:** Low-risk (PESI I-II) can be treated at home
6. **Massive PE:** Systemic thrombolysis, catheter-directed, or surgical embolectomy
7. **CTEPH:** Consider if persistent symptoms after PE; PTE curative for operable
8. **Screening:** AAA one-time ultrasound for men 65-75 who ever smoked`,
    },
  },

  media: [
    {
      id: 'pad-anatomy',
      type: 'diagram',
      filename: 'peripheral-artery-disease.svg',
      title: 'Peripheral Artery Disease Anatomy',
      description: 'Arterial occlusions at different levels causing claudication',
    },
    {
      id: 'aaa-sizes',
      type: 'diagram',
      filename: 'aortic-aneurysm-sizes.svg',
      title: 'Aortic Aneurysm Size and Rupture Risk',
      description: 'Diameter-based rupture risk and surgical thresholds',
    },
    {
      id: 'dvt-pe-pathway',
      type: 'diagram',
      filename: 'dvt-to-pvte-pathway.svg',
      title: 'DVT to PE Pathway',
      description: 'Thrombus formation and propagation to lungs',
    },
  ],

  citations: [
    {
      id: 'esc-pad-2021',
      type: 'article',
      title: '2021 ESC Guidelines for the Diagnosis and Treatment of Peripheral Arterial Diseases',
      authors: ['Vrints CJ', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'svs-aaa',
      type: 'article',
      title: 'Society for Vascular Surgery Practice Guidelines for the Care of Patients with an Abdominal Aortic Aneurysm',
      authors: ['Chaikof EL', 'et al.'],
      source: 'Journal of Vascular Surgery',
    },
    {
      id: 'chest-vte-2021',
      type: 'article',
      title: 'The Diagnosis and Management of Pulmonary Embolism',
      authors: ['Konstantinides SV', 'et al.'],
      source: 'Chest',
    },
    {
      id: 'compass-trial',
      type: 'article',
      title: 'Rivaroxaban with or without Aspirin in Stable Cardiovascular Disease',
      authors: ['Eikelboom JW', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'topic-hypertension', targetType: 'topic', relationship: 'related', label: 'Hypertension' },
    { targetId: 'topic-lipid-disorders', targetType: 'topic', relationship: 'related', label: 'Lipid Disorders' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['vascular surgery', 'cardiology', 'internal medicine'],
    keywords: ['PAD', 'AAA', 'DVT', 'PE', 'claudication', 'aneurysm', 'VTE'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vascularDiseaseContent;
