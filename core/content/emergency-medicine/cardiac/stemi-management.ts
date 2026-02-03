/**
 * STEMI Management - ST-Elevation Myocardial Infarction
 *
 * Comprehensive content on recognition, treatment, and management of STEMI
 * including door-to-balloon time, reperfusion strategies, and complications.
 */

import { EducationalContent } from '../../types';

export const stemiManagement: EducationalContent = {
  id: 'emergency-cardiac-stemi-management',
  type: 'topic',
  name: 'STEMI Management',
  nameEs: 'Manejo del Infarto con Elevacion del ST',
  alternateNames: ['ST-Elevation Myocardial Infarction', 'Heart Attack Management', 'Acute STEMI', 'STEMI Protocol'],

  levels: {
    1: {
      level: 1,
      summary: 'A STEMI is a severe type of heart attack where a major heart artery is completely blocked. Getting the blockage open quickly with a procedure or medicine saves heart muscle and lives.',
      explanation: `## What Is a STEMI?

A STEMI (ST-Elevation Myocardial Infarction) is a serious type of **heart attack**. It happens when a blood clot completely blocks one of the arteries that supply blood to the heart muscle.

### How to Recognize a Heart Attack

Common symptoms:
- **Chest pain or pressure** - feels like squeezing, heaviness, or tightness
- **Pain spreading** to the arm (usually left), jaw, neck, or back
- **Shortness of breath**
- **Sweating, nausea, or dizziness**
- **Feeling of doom** - something is very wrong

**Important:** Women may have less typical symptoms like unusual fatigue, nausea, or back pain without classic chest pain.

### What Happens at the Hospital

**Time is muscle** - the faster the blockage is opened, the more heart muscle is saved.

1. **ECG (heart tracing)** - done immediately to identify the STEMI pattern
2. **Aspirin** - given to thin the blood
3. **Cardiac catheterization** - a thin tube is threaded through an artery to the heart
4. **Balloon and stent** - the blockage is opened with a tiny balloon and a metal tube (stent) holds it open

### The Golden Time Window

- **Best:** Artery opened within 90 minutes of hospital arrival
- **Good:** Within 120 minutes if transferred from another hospital
- **Still helpful:** Within 12 hours of symptom start

### After Treatment

- Medications to prevent another heart attack
- Cardiac rehabilitation (supervised exercise program)
- Lifestyle changes: healthy diet, exercise, quit smoking
- Regular follow-up with a cardiologist`,
      keyTerms: [
        { term: 'STEMI', definition: 'A severe heart attack where a heart artery is completely blocked, shown by a specific pattern on the heart monitor' },
        { term: 'heart attack', definition: 'When blood flow to part of the heart muscle is blocked, causing damage to the heart' },
        { term: 'stent', definition: 'A tiny metal mesh tube placed inside a blocked artery to hold it open' },
        { term: 'cardiac catheterization', definition: 'A procedure where a thin tube is guided through blood vessels to the heart to find and treat blockages' },
      ],
      analogies: [
        'A STEMI is like a completely clogged pipe - no water can get through. The plumber (cardiologist) needs to clear the blockage fast before damage occurs.',
        'A stent is like a tiny scaffold placed inside the artery to keep it propped open after clearing the clot.',
        'Time is muscle means every minute the artery stays blocked, more heart tissue dies - like a plant wilting without water.',
      ],
      examples: [
        'A 55-year-old man has crushing chest pain and calls 911. The paramedics do an ECG in the ambulance showing a STEMI. The hospital is alerted and the cath lab team is ready when he arrives. A stent is placed within 60 minutes.',
        'A 68-year-old woman feels unusually tired with back pain and nausea. She goes to the ER where an ECG shows a STEMI. Despite atypical symptoms, quick recognition leads to successful stenting.',
      ],
      patientCounselingPoints: [
        'Call 911 immediately if you have chest pain - do not drive yourself to the hospital',
        'Chew an aspirin (325mg) if you think you are having a heart attack and are not allergic',
        'Time is critical - every minute counts in saving heart muscle',
        'After a heart attack, take all prescribed medications as directed',
      ],
    },

    2: {
      level: 2,
      summary: 'STEMI management requires rapid ECG diagnosis, activation of the catheterization lab, and primary PCI within 90 minutes of first medical contact, supported by antiplatelet and antithrombotic therapy.',
      explanation: `## STEMI Recognition

### ECG Criteria
- ST elevation at the J-point in 2 or more contiguous leads
- >=1mm in limb leads
- >=2mm in precordial leads V2-V3 (men) or >=1.5mm (women)
- New left bundle branch block (LBBB) with ischemic symptoms

### Localization by ECG
| Territory | Leads | Artery |
|-----------|-------|--------|
| Anterior | V1-V4 | LAD |
| Lateral | I, aVL, V5-V6 | LCx |
| Inferior | II, III, aVF | RCA (80%) or LCx |
| Right ventricular | V4R | Proximal RCA |
| Posterior | V7-V9 | RCA or LCx |

## Initial Management (ED)

**MONA (Memory Aid):**
- **M**orphine (cautious use, only for refractory pain)
- **O**xygen (only if SpO2 <94%)
- **N**itroglycerin (sublingual, unless RV infarct or low BP)
- **A**spirin (162-325mg chewed immediately)

**Additional medications:**
- P2Y12 inhibitor: Clopidogrel, ticagrelor, or prasugrel (loading dose)
- Anticoagulation: Heparin (UFH) bolus
- Beta-blocker: If stable, within 24 hours (avoid in heart failure, bradycardia)
- Statin: High-intensity (atorvastatin 80mg)

## Reperfusion Strategy

### Primary PCI (Preferred)
- **Door-to-balloon time:** <90 minutes (at PCI-capable hospital)
- **First medical contact-to-device:** <120 minutes (if transfer needed)
- Angioplasty with drug-eluting stent placement
- Radial access preferred (fewer bleeding complications)

### Fibrinolytic Therapy (When PCI Not Available)
- Given within 30 minutes of hospital arrival (door-to-needle)
- Used when PCI cannot be done within 120 minutes
- Agents: Tenecteplase (TNK), alteplase (tPA), reteplase
- Must rule out contraindications (active bleeding, recent surgery, stroke)

**Contraindications to fibrinolytics:**
- Active internal bleeding
- History of hemorrhagic stroke
- Ischemic stroke within 3 months
- Intracranial neoplasm
- Aortic dissection suspected
- Recent major surgery (<3 weeks)

### Pharmacoinvasive Strategy
- Fibrinolytics given at non-PCI hospital
- Transfer for angiography within 3-24 hours
- Rescue PCI if fibrinolytics fail (persistent symptoms/ST elevation)

## Complications

- **Cardiogenic shock:** Pump failure, may need intra-aortic balloon pump or Impella
- **Arrhythmias:** VF/VT (most common cause of early death), heart block
- **Heart failure:** Depends on amount of muscle damaged
- **Mechanical complications:** Free wall rupture, VSD, papillary muscle rupture (days 3-7)`,
      keyTerms: [
        { term: 'primary PCI', definition: 'Percutaneous coronary intervention (balloon and stent) as the initial treatment for STEMI; preferred over fibrinolytics' },
        { term: 'door-to-balloon time', definition: 'Time from hospital arrival to opening the blocked artery with a balloon; target <90 minutes' },
        { term: 'fibrinolytic therapy', definition: 'Clot-dissolving medication given when PCI is not available within 120 minutes' },
        { term: 'P2Y12 inhibitor', definition: 'A type of antiplatelet medication (like clopidogrel or ticagrelor) that prevents blood clots by blocking platelet activation' },
        { term: 'cardiogenic shock', definition: 'Heart failure so severe that the heart cannot pump enough blood to meet the body needs' },
        { term: 'drug-eluting stent', definition: 'A stent coated with medication that slowly releases to prevent re-narrowing of the artery' },
      ],
      analogies: [
        'Door-to-balloon time is like a countdown clock in a race - every second counts toward saving heart muscle.',
        'Fibrinolytics are like chemical drain cleaners - they dissolve the clot but are not as precise as physically removing it (PCI).',
        'A drug-eluting stent is like a slow-release capsule inside the artery, preventing scar tissue from growing back.',
      ],
      examples: [
        'A 62-year-old man with chest pain arrives at a PCI-capable hospital. ECG shows inferior STEMI. Aspirin and heparin given. Cath lab activated. Angiography shows 100% RCA occlusion. Stent placed, door-to-balloon time 55 minutes.',
        'A 58-year-old woman presents to a rural hospital with anterior STEMI. Nearest PCI center is 3 hours away. Tenecteplase given (door-to-needle 20 min). Transferred for angiography next day. LAD stented.',
      ],
      patientCounselingPoints: [
        'Take dual antiplatelet therapy (aspirin + P2Y12 inhibitor) for at least 12 months after stenting',
        'Do not stop these medications without talking to your cardiologist - this could cause the stent to clot',
        'Cardiac rehabilitation significantly improves recovery and reduces future heart attack risk',
      ],
    },

    3: {
      level: 3,
      summary: 'STEMI management centers on rapid reperfusion through primary PCI or pharmacoinvasive strategy, supported by evidence-based antiplatelet/antithrombotic regimens and monitoring for mechanical and electrical complications.',
      explanation: `## STEMI Pathophysiology

**Atherosclerotic plaque rupture/erosion:**
- Vulnerable plaque: Thin fibrous cap, large lipid core, inflammatory infiltrate
- Plaque rupture exposes thrombogenic subendothelium
- Platelet adhesion, activation, and aggregation
- Thrombus formation causing complete coronary occlusion
- Transmural ischemia progressing to necrosis (wavefront phenomenon)

**Time-dependent myocardial salvage:**
- Subendocardium most vulnerable (highest oxygen demand)
- Necrosis progresses from endocardium to epicardium
- Maximum salvage within first 2-3 hours
- Diminishing returns but still beneficial up to 12 hours

## Advanced Reperfusion Strategy

### Primary PCI Details
- **Access:** Radial preferred (MATRIX, RIVAL trials: lower bleeding, mortality)
- **Culprit-only vs complete revascularization:** COMPLETE trial supports staged complete revascularization
- **Aspiration thrombectomy:** Not routine (TOTAL trial: no benefit, stroke risk)
- **Stent selection:** Drug-eluting stents (DES) standard; 2nd/3rd generation preferred
- **Multivessel disease:** Treat culprit first, stage other lesions within index hospitalization or 45 days

### Antiplatelet Strategy
**Aspirin:** 162-325mg loading, then 81mg daily indefinitely

**P2Y12 inhibitors:**
| Agent | Loading | Maintenance | Notes |
|-------|---------|-------------|-------|
| Ticagrelor | 180mg | 90mg BID | Preferred in ACS; reversible |
| Prasugrel | 60mg | 10mg daily | More potent; avoid age >75, <60kg, prior stroke |
| Clopidogrel | 600mg | 75mg daily | If ticagrelor/prasugrel contraindicated |

**DAPT duration:** Minimum 12 months post-DES; may extend to 30 months if high ischemic, low bleeding risk (PEGASUS-TIMI 54)

### Anticoagulation
- UFH: 60 U/kg bolus (max 4000), 12 U/kg/hr (max 1000) - target aPTT 50-70
- Bivalirudin: Alternative in PCI (HORIZONS-AMI, EUROMAX: less bleeding but more stent thrombosis)
- Enoxaparin: 0.5 mg/kg IV bolus in PCI, or 1 mg/kg SC BID if fibrinolysis

### GP IIb/IIIa Inhibitors
- Abciximab, eptifibatide, tirofiban
- Routine upstream use no longer recommended
- Consider for large thrombus burden, slow/no reflow in cath lab

## Mechanical Complications

| Complication | Timing | Presentation | Management |
|-------------|--------|--------------|------------|
| Free wall rupture | Days 3-7 | PEA, tamponade | Emergency surgery |
| VSD | Days 3-7 | New murmur, shock | Surgical repair (delayed if possible) |
| Papillary muscle rupture | Days 2-7 | Acute MR, pulmonary edema | Emergency surgery |
| LV aneurysm | Weeks | Heart failure, arrhythmia | Medical; surgery if refractory |

## Cardiogenic Shock

**Definition:** SBP <90, CI <2.2, PCWP >15

**Management:**
- Emergent revascularization (PCI)
- Vasopressors: Norepinephrine first-line
- Inotropes: Dobutamine or milrinone
- Mechanical support: IABP (limited evidence), Impella (growing use), ECMO (salvage)
- SHOCK trial: Early revascularization improves 6-month survival

## Right Ventricular Infarction

- Complicates 30-50% of inferior STEMI
- Diagnosis: V4R ST elevation >=1mm, JVD, hypotension, clear lungs
- Treatment: Volume loading (avoid nitrates and diuretics!), inotropes if needed
- Reperfusion critical: RV function often recovers with successful PCI`,
      keyTerms: [
        { term: 'wavefront phenomenon', definition: 'Progression of myocardial necrosis from subendocardium to epicardium over time; basis for time-dependent salvage' },
        { term: 'pharmacoinvasive strategy', definition: 'Fibrinolysis followed by transfer for angiography within 3-24 hours; alternative when PCI unavailable within 120 minutes' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy; aspirin plus P2Y12 inhibitor for minimum 12 months after DES placement' },
        { term: 'no-reflow', definition: 'Failure of myocardial perfusion despite epicardial artery patency; caused by microvascular obstruction' },
        { term: 'cardiogenic shock', definition: 'Cardiac pump failure with SBP <90, cardiac index <2.2, and elevated filling pressures' },
      ],
      analogies: [
        'The wavefront phenomenon is like a fire spreading from inside a building outward - the inside burns first, and stopping the fire early saves more structure.',
        'No-reflow is like unclogging a main pipe but the smaller branches are still blocked - water pressure is restored but flow is impaired.',
        'RV infarction: the right side of the heart needs volume to generate output, so nitrates and diuretics (which reduce volume) are like draining a well that is already low.',
      ],
      examples: [
        'Anterior STEMI with cardiogenic shock (BP 75/50, HR 120). Norepinephrine started. Emergent PCI reveals 100% proximal LAD. Impella placed. Stent deployed. CI improves from 1.8 to 2.5.',
        'Inferior STEMI with V4R ST elevation. Patient hypotensive after nitroglycerin. Recognized as RV infarct. Nitro stopped, 2L NS bolus given. BP improves to 105/70. PCI to RCA performed.',
      ],
      clinicalNotes: 'COMPLETE trial: Staged complete revascularization reduces CV death and MI compared to culprit-only. Aspiration thrombectomy is NOT routine. RV infarct: volume first, avoid nitrates/diuretics. Mechanical complications peak at days 3-7 post-MI; any acute deterioration in this window requires urgent echo. Free wall rupture is nearly always fatal without immediate surgical repair.',
    },

    4: {
      level: 4,
      summary: 'Advanced STEMI management integrates coronary physiology, mechanical circulatory support decision-making, complex PCI techniques, and evidence-based management of cardiogenic shock and mechanical complications.',
      explanation: `## Advanced Coronary Physiology in STEMI

**Microvascular obstruction (MVO):**
- Present in 40-60% of STEMI patients despite successful PCI
- Mechanisms: Distal embolization, ischemia-reperfusion injury, endothelial swelling
- Detection: Cardiac MRI (late gadolinium enhancement with dark zones)
- Clinical significance: Independently predicts mortality and LV remodeling
- Prevention/treatment: Limited options; IIb/IIIa inhibitors, adenosine IC, nicorandil (investigational)

**Myocardial salvage assessment:**
- Cardiac MRI at 3-7 days: T2 edema (area at risk) minus LGE (infarct) = salvage
- Salvage index: Salvaged myocardium / area at risk
- Correlates with symptom-to-balloon time
- Used as endpoint in clinical trials

### Mechanical Circulatory Support (MCS) in STEMI

**Device selection in cardiogenic shock:**

| Device | Mechanism | Flow | Advantages | Limitations |
|--------|-----------|------|------------|-------------|
| IABP | Counterpulsation | +0.5 L/min | Familiar, easy insert | Modest support, IABP-SHOCK II negative |
| Impella CP | Axial flow pump | 3-4 L/min | Better unloading | Vascular complications, hemolysis |
| Impella 5.5 | Axial flow pump | 5.5 L/min | Highest percutaneous support | Requires surgical cutdown |
| TandemHeart | Centrifugal pump | 4-5 L/min | Biventricular capable | Complex insertion (trans-septal) |
| VA-ECMO | Centrifugal + oxygenator | 3-6 L/min | Full cardiopulmonary support | Increases afterload (LV distension) |
| ECMO + Impella | Combined | Full support | Best unloading + support | Most complex, costly |

**Timing of MCS:**
- Early MCS (before PCI) may improve outcomes
- DANGER trial (ongoing): Impella before PCI vs after in STEMI with shock
- Door-to-support time emerging as important metric

### Complex PCI Considerations

**Chronic total occlusion (CTO) in STEMI:**
- Contralateral CTO present in 10-15% of STEMI patients
- Associated with worse outcomes
- Staged CTO PCI may improve outcomes in selected patients

**Bifurcation lesions:**
- Provisional stenting preferred
- Two-stent techniques for significant side branch disease
- Increased complexity in STEMI setting

**Calcified lesions:**
- Intravascular lithotripsy (IVL) or rotational atherectomy
- May be needed for stent delivery in severely calcified STEMI

### Advanced Shock Management

**SCAI Shock Classification (2019):**
| Stage | Name | Description | Lactate |
|-------|------|-------------|---------|
| A | At risk | Risk factors without signs | Normal |
| B | Beginning | Hypotension or tachycardia | Normal |
| C | Classic | Hypoperfusion requiring intervention | >=2 |
| D | Deteriorating | Worsening despite initial treatment | Rising |
| E | Extremis | Cardiac arrest or refractory shock | >5 |

**National Cardiogenic Shock Initiative (NCSI) protocol:**
- Early MCS (before PCI)
- Right heart catheterization-guided management
- Target: Cardiac power output >0.6 W
- Results: Survival 72% (vs historical 50%)

### Post-MI Risk Stratification

**LVEF assessment:** Echo within 48 hours and at 40 days
- EF <=35% at 40 days: ICD evaluation
- EF 36-40%: Repeat assessment, optimize medical therapy

**ICD indications post-MI:**
- EF <=35% on optimal medical therapy >=40 days post-MI
- EF <=30% >=40 days post-MI (even without symptoms)
- Sustained VT/VF >48 hours post-MI

**Medical therapy optimization:**
- ACE inhibitor/ARB (or ARNI if EF <=40%)
- Beta-blocker
- Mineralocorticoid receptor antagonist (if EF <=40%)
- SGLT2 inhibitor (DAPA-HF, EMPEROR-Reduced: benefit regardless of diabetes)
- High-intensity statin`,
      keyTerms: [
        { term: 'microvascular obstruction', definition: 'Impaired myocardial perfusion despite patent epicardial artery; detected on cardiac MRI and independently predicts outcomes' },
        { term: 'SCAI shock classification', definition: 'Five-stage classification of cardiogenic shock severity (A-E) guiding escalation of support' },
        { term: 'cardiac power output', definition: 'MAP times CO divided by 451; strongest hemodynamic predictor of mortality in cardiogenic shock. Target >0.6 W' },
        { term: 'Impella', definition: 'Percutaneous axial flow pump providing active LV unloading; various sizes for different levels of support' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan); superior to ACEi in HFrEF post-MI' },
      ],
      analogies: [
        'MVO is like unclogging a highway but finding all the side streets flooded - the main route is open but traffic still cannot get through.',
        'SCAI staging is like a weather severity scale for cardiogenic shock - it helps predict the storm and prepare resources accordingly.',
        'Impella + ECMO (ECPELLA) is like having both a backup generator and a ventilation system when the building power fails completely.',
      ],
      examples: [
        'Anterior STEMI with SCAI Stage C shock. Impella CP placed before PCI per NCSI protocol. Proximal LAD stented. CPO improves from 0.3 to 0.7 W. Impella weaned over 48 hours.',
        'Inferior STEMI, successful PCI. Day 4: acute pulmonary edema, new holosystolic murmur. Echo: severe MR from posterior papillary muscle rupture. Emergency mitral valve replacement.',
      ],
      clinicalNotes: 'IABP-SHOCK II showed no mortality benefit for IABP in cardiogenic shock. Impella before PCI (early unloading) is being studied. SCAI classification should guide MCS escalation. MVO on MRI is the strongest predictor of adverse remodeling. ICD assessment must wait >=40 days post-MI on optimal medical therapy.',
    },

    5: {
      level: 5,
      summary: 'Expert STEMI management integrates personalized reperfusion timing, advanced mechanical support strategies, novel therapeutics targeting ischemia-reperfusion injury, and systems-level optimization of STEMI networks.',
      explanation: `## Frontiers in STEMI Management

### Ischemia-Reperfusion Injury Therapeutics

**The paradox:** Reperfusion itself causes up to 50% of final infarct size through oxidative stress, calcium overload, inflammation, and mitochondrial dysfunction.

**Investigated therapies:**
- Remote ischemic conditioning (RIC): Brief limb ischemia before/during PCI. CONDI-2/ERIC-PPCI (2019): No benefit on cardiac death/HF hospitalization
- Cyclosporine A: Mitochondrial protection. CIRCUS trial: Negative
- Metoprolol IV pre-PCI: METOCARD-CNIC: Reduced infarct size in anterior STEMI
- Hypothermia before reperfusion: Neutral in most studies
- Colchicine: Anti-inflammatory. COLCOT (2019): Reduced ischemic events post-MI

**Emerging targets:**
- NLRP3 inflammasome inhibition
- Mitochondrial-targeted antioxidants (MitoQ)
- Extracellular vesicle-based therapies
- Gene therapy for angiogenesis (Phase I/II trials)

### STEMI Network Optimization

**Systems metrics:**
- First medical contact to device time (target <120 min)
- Prehospital ECG transmission
- Single-call cath lab activation
- Transfer vs drip-and-ship decision algorithms
- Bypass of non-PCI centers

**International comparison:**
- Stent for Life initiative (Europe): Improved PCI rates and outcomes
- Mission: Lifeline (US): Standardized regional STEMI systems
- Door-in to door-out time: <30 min for transfer patients

**AI and machine learning:**
- Automated STEMI detection on ECG (FDA-cleared algorithms)
- Risk prediction models for cardiogenic shock development
- Natural language processing for quality metric extraction
- Predictive modeling for MCS timing

### Advanced Shock Paradigms

**Shock teams:**
- Multidisciplinary: Cardiology, cardiac surgery, critical care
- Hub-and-spoke model with shock centers
- Standardized protocols and escalation pathways
- Registry-based quality improvement (CSWG, Detroit Cardiogenic Shock Initiative)

**Right ventricular failure in STEMI:**
- Often under-recognized contributor to shock
- RV-specific MCS: Impella RP, ProtekDuo
- PA catheter monitoring essential for RV failure management

### Late Presentation STEMI

**>12 hours with ongoing symptoms:**
- PCI still beneficial with ongoing ischemia
- No benefit for totally occluded artery without symptoms (OAT trial)
- Viability assessment (MRI, PET) may guide late revascularization

**>24 hours, stable, occluded artery:**
- Medical therapy preferred
- OAT trial: No benefit to routine PCI of occluded IRA
- Exception: Recurrent ischemia, large territory at risk

### Post-MI Ventricular Tachycardia

**Timing classification:**
- <48 hours post-MI: Often reperfusion-related, does not mandate ICD
- 48h to 40 days: "Gray zone" - optimize medical therapy, reassess
- >40 days with EF <=35%: ICD indicated

**VT substrate post-MI:**
- Scar-related re-entry circuits
- Border zone tissue with heterogeneous conduction
- Catheter ablation for recurrent VT despite ICD
- VANISH trial: Ablation superior to escalating drug therapy`,
      keyTerms: [
        { term: 'ischemia-reperfusion injury', definition: 'Paradoxical myocardial damage from restoring blood flow, contributing up to 50% of final infarct size' },
        { term: 'NLRP3 inflammasome', definition: 'Key mediator of post-MI inflammation; therapeutic target for reducing ischemia-reperfusion injury' },
        { term: 'COLCOT trial', definition: 'Colchicine reduced ischemic events post-MI through anti-inflammatory mechanism' },
        { term: 'OAT trial', definition: 'Occluded Artery Trial showing no benefit to routine late PCI of totally occluded infarct-related arteries' },
        { term: 'shock team', definition: 'Multidisciplinary team approach to cardiogenic shock management with standardized protocols and escalation pathways' },
      ],
      clinicalNotes: 'Ischemia-reperfusion injury remains the largest unmet therapeutic target in STEMI. CONDI-2 and CIRCUS dampened enthusiasm for conditioning and cyclosporine. Colchicine (COLCOT) is the most promising anti-inflammatory approach post-MI. STEMI network optimization has the highest population-level impact. AI-based ECG STEMI detection is FDA-cleared and reducing door-to-activation times. Shock teams with standardized protocols improve survival - the NCSI model shows 72% survival vs historical 50%. Late presentation: do not routinely open chronically occluded arteries (OAT).',
    },
  },

  media: [
    {
      id: 'stemi-ecg-patterns',
      type: 'diagram',
      filename: 'stemi-ecg-localization.svg',
      title: 'STEMI ECG Patterns by Territory',
      description: 'ECG lead changes and corresponding coronary artery territories',
    },
    {
      id: 'stemi-management-algorithm',
      type: 'diagram',
      filename: 'stemi-reperfusion-algorithm.svg',
      title: 'STEMI Reperfusion Strategy',
      description: 'Decision algorithm for PCI vs fibrinolysis',
    },
  ],

  citations: [
    {
      id: 'acc-aha-stemi-2013',
      type: 'article',
      title: 'ACCF/AHA Guideline for Management of ST-Elevation Myocardial Infarction',
      authors: ['O\'Gara PT', 'et al.'],
      source: 'Circulation',
      accessedDate: '2026-01-30',
    },
    {
      id: 'complete-trial',
      type: 'article',
      title: 'Complete Revascularization with Multivessel PCI for Myocardial Infarction',
      authors: ['Mehta SR', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-acls-algorithms', targetType: 'topic', relationship: 'related', label: 'ACLS Algorithms' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'specialties-cardiology-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['emergency medicine', 'cardiology', 'interventional cardiology', 'critical care'],
    keywords: ['STEMI', 'heart attack', 'PCI', 'reperfusion', 'cardiogenic shock', 'stent'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'internal medicine', 'cardiology'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default stemiManagement;
