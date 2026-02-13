/**
 * Congenital Heart Disease - Comprehensive Educational Content
 *
 * Covers common congenital heart defects including septal defects,
 valve abnormalities, and complex lesions with pathophysiology,
 clinical presentation, and management.
 */

import { EducationalContent } from '../types';

export const congenitalHeartContent: EducationalContent = {
  id: 'condition-congenital-heart-disease',
  type: 'condition',
  name: 'Congenital Heart Disease',
  alternateNames: ['CHD', 'Congenital Heart Defect', 'Congenital Cardiac Defect'],
  fmaId: undefined,
  hpoId: 'HP:0001627',

  levels: {
    1: {
      level: 1,
      summary: 'Congenital heart defects are problems with the heart\'s structure that are present at birth, causing abnormal blood flow through the heart. Many are mild, but some require surgery to fix.',
      explanation: `## What Is Congenital Heart Disease?

Congenital heart disease means a person is born with a problem in how their heart is formed. The word "congenital" means "present at birth."

These defects happen when the heart is developing in the womb, usually in the first few months of pregnancy.

## Types of Congenital Heart Defects

### Holes in the Heart (Septal Defects)

The heart has a wall (septum) that separates the left and right sides. Holes can form in this wall:

**Atrial Septal Defect (ASD):**
- Hole between the two upper chambers (atria)
- Oxygen-rich blood leaks back to the right side
- Must work harder to pump extra blood

**Ventricular Septal Defect (VSD):**
- Hole between the two lower chambers (ventricles)
- Oxygen-rich blood leaks back to the right side
- Can cause heart failure if large

### Valve Problems

**Pulmonary Stenosis:**
- Pulmonary valve doesn't open fully
- Heart must work harder to push blood
- Right ventricle becomes thick

### Abnormal Blood Vessels

**Patent Ductus Arteriosus (PDA):**
- Blood vessel that should close after birth stays open
- Allows extra blood to flow to lungs
- Can cause heart failure

**Coarctation of the Aorta:**
- Aorta is narrowed
- Heart works harder to pump blood
- BP high in arms, low in legs

### Complex Problems

Some babies are born with multiple problems:
- **Tetralogy of Fallot:** Four different problems together
- **Transposition of the Great Arteries:** Arteries switched places
- **Hypoplastic Left Heart Syndrome:** Left side of heart underdeveloped

## How Do Defects Happen?

**Most of the time, we don't know why.**

**Possible Risk Factors:**
- Genetics (runs in families)
- Mother having certain infections during pregnancy
- Mother drinking alcohol during pregnancy
- Mother smoking during pregnancy
- Mother taking certain medications
- Mother having diabetes

**Important:** Most defects are NOT caused by anything the mother did wrong!

## Signs and Symptoms

**Mild defects:**
- No symptoms
- Found during routine exam (heart murmur)

**Moderate to severe defects:**
- Blue tint to skin (cyanosis)
- Fast breathing
- Poor weight gain
- Getting tired easily
- Swelling in legs or belly
- Clubbing of fingers

## Diagnosis

**Tests Used:**
- Ultrasound during pregnancy (sometimes finds defects before birth)
- Physical exam (hearing a murmur)
- Echocardiogram (ultrasound of heart)
- Chest X-ray
- ECG
- Cardiac catheterization

## Treatment

**Many small defects:**
- No treatment needed
- May close on their own
- Regular check-ups to monitor

**Medications:**
- Help the heart work better
- Remove extra fluid
- Treat abnormal rhythms

**Procedures:**
- Cardiac catheterization (fix through blood vessels)
- Open-heart surgery

## Living with CHD

**Most people with CHD live normal, active lives!**

**Important Care:**
- Regular check-ups with heart doctor
- Take antibiotics before dental work (some patients)
- Tell all doctors about your heart condition
- Exercise as recommended by your doctor
- Healthy lifestyle

**Adults with CHD:**
- Need lifelong follow-up care
- May need additional procedures as adults
- Pregnancy planning requires special care

## Outlook

**Severe defects:**
- Usually found and treated in infancy
- May need multiple surgeries
- Ongoing care needed

**Mild defects:**
- May never cause problems
- May be found later in life
- Often just need monitoring

**Today's Treatments:**
- Much better than in the past
- Most children survive to adulthood
- Adults living normal lives with CHD is common!`,
      keyTerms: [
        { term: 'congenital heart disease', definition: 'Heart defects present at birth' },
        { term: 'septal defect', definition: 'A hole in the wall separating heart chambers' },
        { term: 'ASD', definition: 'Atrial septal defect; hole between upper chambers' },
        { term: 'VSD', definition: 'Ventricular septal defect; hole between lower chambers' },
        { term: 'murmur', definition: 'An extra sound when listening to the heart' },
        { term: 'cyanosis', definition: 'Bluish color from low oxygen in blood' },
        { term: 'PDA', definition: 'Patent ductus arteriosus; vessel that should close after birth' },
      ],
      analogies: [
        'A hole in the heart is like a leak in a dam - water (blood) flows where it shouldn\'t.',
        'PDA is like a back door that should be locked but stays open.',
      ],
      examples: [
        'A baby might turn blue when crying if they have Tetralogy of Fallot.',
        'A child with a small VSD might have no symptoms and just need monitoring.',
        'Adults with repaired CHD still need regular heart check-ups.',
      ],
    },
    2: {
      level: 2,
      summary: 'Congenital heart defects encompass a spectrum from simple lesions (ASD, VSD, PDA) to complex cyanotic conditions (Tetralogy of Fallot, transposition), with hemodynamic consequences depending on shunt direction, magnitude, and associated anomalies requiring timely recognition and intervention.',
      explanation: `## Classification

### Acyanotic (Increased Pulmonary Blood Flow)

**Left-to-Right Shunts:**
- Pressure usually higher on left
- Oxygenated blood recirculates to lungs
- No cyanosis (unless late, Eisenmenger)
- Examples: ASD, VSD, PDA

**Obstructive Lesions:**
- Valve or vessel narrowing
- Pressure proximal to obstruction increases
- Examples: Coarctation, pulmonary stenosis, aortic stenosis

### Cyanotic (Decreased Pulmonary Blood Flow)

**Right-to-Left Shunts:**
- Deoxygenated blood enters systemic circulation
- Cyanosis present
- Examples: Tetralogy of Fallot, transposition

## Specific Defects

### Atrial Septal Defect (ASD)

**Types:**
- **Secundum (70%):** Central fossa ovalis defect
- **Primum (20%):** Associated with AV canal (Down syndrome)
- **Sinus venosus (10%):** SVC or IVC type

**Pathophysiology:**
- Left atrial pressure > right atrial pressure
- Shunt: LA → RA → RV → pulmonary
- RA and RV dilation
- Pulmonary overcirculation

**Clinical:**
- Often asymptomatic until adulthood
- Fixed split S2 (classic finding)
- Pulmonary flow murmur
- TR murmur from RV dilation

**Complications:**
- Pulmonary hypertension (rare before adulthood)
- Paradoxical embolism (stroke)
- Atrial arrhythmias

**Treatment:**
- Small defects: Observation
- Large defects: Closure (device or surgery)
- Closure indicated if Qp:Qs >1.5:1

### Ventricular Septal Defect (VSD)

**Types:**
- **Perimembranous (80%):** Near tricuspid valve
- **Muscular (5-20%):** In muscular septum
- **Outlet (5-7%):** Below pulmonary valve
- **Inlet (5%):** Near tricuspid valve

**Pathophysiology:**
- LV pressure > RV pressure
- Shunt: LV → RV → PA → lungs
- LV and LA dilation
- Pulmonary overcirculation

**Clinical:**
- Holosystolic murmur at lower left sternal border
- Thrill if large
- Signs of HF if large (failure at 2-8 weeks)

**Natural History:**
- Small VSDs: 30-50% close spontaneously
- Moderate VSDs: May require closure
- Large VSDs: HF if untreated, Eisenmenger if untreated

**Treatment:**
- Medical management of HF first
- Surgical closure if symptomatic or large
- Some can be closed percutaneously

### Patent Ductus Arteriosus (PDA)

**Normal:** Ductus closes within 1-2 days after birth
**Pathologic:** Fails to close, connects aorta to PA

**Pathophysiology:**
- Aortic pressure > PA pressure
- Continuous shunt: Aorta → PA → lungs
- Pulmonary overcirculation
- LA and LV dilation

**Clinical:**
- Continuous "machine-like" murmur
- Bounding pulses
- Wide pulse pressure
- HF if large

**Risk Factors:**
- Prematurity
- Congenital rubella
- Family history

**Treatment:**
- Indomethacin/ibuprofen (closes ductus in prematures)
- Surgical ligation if medical fails
- Catheter closure (coil/device) in older children/adults

### Coarctation of the Aorta

**Definition:** Narrowing of aorta, typically at juxtaductal location

**Associated:**
- Bicuspid aortic valve (50-80%)
- VSD
- Mitral valve abnormalities

**Pathophysiology:**
- Obstruction to LV outflow
- Upper body hypertension
- Lower body hypoperfusion
- LV hypertrophy

**Clinical:**
- BP discrepancy: Arms > legs
- Diminished femoral pulses
- Systolic murmur, continuous if collaterals
- Rib notching on CXR (collaterals)

**Treatment:**
- Balloon angioplasty or stent (preferred)
- Surgical resection with end-to-end anastomosis
- Recoarctation possible

## Cyanotic Heart Disease

### Tetralogy of Fallot

**Four Components:**
1. **VSD:** Large, unrestrictive
2. **Overriding Aorta:** Positioned over VSD
3. **RV Outflow Obstruction:** Pulmonic stenosis
4. **RV Hypertrophy:** Secondary to obstruction

**Pathophysiology:**
- Degree of RVOT obstruction determines shunt direction
- Minimal obstruction: L→R shunt (acyanotic "pink Tet")
- Significant obstruction: R→L shunt (cyanotic)

**Clinical:**
- Cyanosis (variable)
- Tet spells: Hypercyanotic episodes
- Boot-shaped heart on CXR
- RV heave

**Tet Spells:**
- Triggered by crying, feeding, defecation
- Infundibular spasm increases RVOT obstruction
- Severe cyanosis, hyperpnea
- Treatment: Knee-chest position, oxygen, morphine, beta-blocker

**Treatment:**
- Complete surgical repair (4-6 months)
- Blalock-Taussig shunt if symptomatic neonate (palliative)

### Transposition of the Great Arteries

**Anatomy:**
- Aorta arises from RV
- PA arises from LV
- Parallel circulations incompatible with life

**Survival Depends On:**
- Mixing via ASD, VSD, or PDA
- Without mixing: Fatal

**Clinical:**
- Severe cyanosis at birth
- Single loud S2
- "Egg on string" CXR

**Treatment:**
- PGE1 to keep PDA open
- Balloon atrial septostomy (Rashkind)
- Arterial switch operation (within 2 weeks)

### Tricuspid Atresia

**Anatomy:**
- No tricuspid valve
- No direct connection between RA and RV
- ASD required for survival
- VSD or PDA required for pulmonary blood flow

**Clinical:**
- Cyanosis depends on pulmonary blood flow
- Single S2
- LA and RA dilation

**Treatment:**
- Staged palliation (similar to HLHS)`,
      keyTerms: [
        { term: 'left-to-right shunt', definition: 'Blood flows from left (oxygenated) to right (deoxygenated) side' },
        { term: 'right-to-left shunt', definition: 'Blood flows from right (deoxygenated) to left side; causes cyanosis' },
        { term: 'cyanosis', definition: 'Bluish discoloration from low oxygen saturation' },
        { term: 'Eisenmenger syndrome', definition: 'Pulmonary HTN from uncorrected L→R shunt becoming R→L' },
        { term: 'fixed split S2', definition: 'A2 and P2 split widely and don\'t vary with respiration; classic for ASD' },
        { term: 'Tet spell', definition: 'Hypercyanotic episode in TOF caused by infundibular spasm' },
        { term: 'PGE1', definition: 'Prostaglandin E1; keeps PDA open in ductal-dependent lesions' },
      ],
      analogies: [
        'Left-to-right shunt is like a leak from the fresh water pipe back into the dirty water pipe.',
        'Tet spell is like kinking a hose - less gets through, pressure builds up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Congenital heart defects result from errors in cardiac embryogenesis, creating shunts, obstructions, or mixing lesions. Hemodynamic consequences depend on shunt direction, magnitude, and associated pulmonary vascular resistance, with timing of intervention critical for preventing irreversible pulmonary hypertension and Eisenmenger syndrome.',
      explanation: `## Cardiac Embryology

**Key Stages:**

**Week 4:** Heart tube formation, looping
**Week 5-8:** Septation and valve formation
- Atrial septation: Septum primum → ostium secundum → septum secundum
- Ventricular septation: Muscular portion → membranous portion
- Endocardial cushion formation → AV valves
- Conotruncal development → great arteries

**Critical Periods:**
- Days 20-45: Most susceptible to teratogens

**Etiology:**
- Multifactorial (most common)
- Genetic (chromosomal, single gene)
- Environmental (rubella, alcohol, medications)
- Idiopathic

## Hemodynamic Principles

### Shunt Physics

**Direction Determinants:**
- Shunt direction = (P1 × R1) vs (P2 × R2)
- Initially L→R (systemic > pulmonary resistance)
- May become R→L if pulmonary resistance increases

**Shunt Magnitude (Qp:Qs):**
- Qp: Pulmonary blood flow
- Qs: Systemic blood flow
- Normal: Qp:Qs = 1:1
- Significant L→R shunt: Qp:Qs >1.5:1

### Pulmonary Vascular Disease

**Eisenmenger Syndrome:**
- Uncorrected L→R shunt
- Pulmonary vascular obstruction
- Pulmonary vascular resistance > systemic
- Shunt reverses to R→L
- Cyanosis develops
- Irreversible changes

**Progression:**
1. Pulmonary overcirculation
2. Pulmonary vascular remodeling
3. Increased PVR
4. Shunt reversal
5. Cyanosis, clubbing, polycythemia

## Detailed Lesions

### Atrial Septal Defect

**Hemodynamics:**
- LA → RA shunt (driven by compliance, not pressure)
- RV volume overload
- Pulmonary overcirculation
- LA and LV underfilled (paradoxical embolism risk)

**Echocardiography:**
- RA and RV enlargement
- Flattened interventricular septum (D-shaped LV)
- Qp:Qs calculation

**Indications for Closure:**
- Qp:Qs ≥1.5:1
- Evidence of RV volume overload
- Paradoxical embolism

**Contraindications:**
- Eisenmenger syndrome
- Small shunt with normal RV size

### Ventricular Septal Defect

**Hemodynamics:**
- LV → RV shunt (pressure-driven)
- Magnitude depends on defect size
- Small: Restrictive, high-velocity jet
- Large: Non-restrictive, equal ventricular pressures

**Natural History:**
- Muscular VSDs: Highest spontaneous closure rate
- Perimembranous: May close with tricuspid tissue
- Outlet: Rarely close, may cause aortic regurgitation

**Surgical Indications:**
- CHF unresponsive to medical management
- Failure to thrive
- Large VSD with pulmonary HTN
- Aortic valve prolapse/regurgitation

### Endocardial Cushion Defects (AV Canal)

**Complete AV Canal:**
- Primum ASD
- Inlet VSD
- Common AV valve
- Associated: Down syndrome (50%)

**Pathophysiology:**
- L→R shunt at atrial and ventricular level
- AV regurgitation
- Early pulmonary HTN
- Early CHF

**Partial AV Canal:**
- Primum ASD
- Cleft mitral valve (MR)
- No VSD

### Obstructive Lesions

**Aortic Stenosis:**
- Valvar (most common), subvalvar, supravalvar
- Critical AS in neonates: PDA-dependent
- Gradient vs stenosis severity

**Pulmonary Stenosis:**
- Valvar (most common)
- May be associated with TOF, Noonan syndrome
- Severe: Cyanosis, CHF

**Coarctation of the Aorta:**
- Juxtaductal (most common)
- Associated: Bicuspid AV (50-80%), Turner syndrome
- Collateral vessels develop over time
- Recoarctation risk

**Interrupted Aortic Arch:**
- Complete discontinuity between ascending and descending aorta
- Type A: Interruption distal to left subclavian
- Type B: Interruption between left carotid and subclavian
- PDA-dependent lower body

### Cyanotic Lesions

**Tetralogy of Fallot:**
- VSD: Large, unrestrictive
- Overriding aorta: >50% over LV
- RVOT obstruction: Variable severity
- RV hypertrophy: Secondary

**TOF Variants:**
- **Pink Tet:** Minimal obstruction, minimal cyanosis
- **Classic Tet:** Moderate obstruction
- **Severe Tet:** Significant obstruction, cyanosis at rest

**Tet Spells:**
- Hypercyanotic episodes
- Infundibular spasm increases RVOT obstruction
- Increased R→L shunt
- Precipitants: Crying, feeding, fever, defecation
- Treatment: Knee-chest position, O2, morphine, beta-blocker, fluids

**Management:**
- Complete repair (VSD closure, RVOT obstruction relief)
- Age: 3-6 months (earlier if cyanotic spells)
- Palliative BT shunt if not repairable

**Transposition of the Great Arteries:**
- Aorta from RV, PA from LV
- Parallel circulations
- No mixing = incompatible with life
- Mixing via ASD, VSD, or PDA essential

**TGA Types:**
- **TGA with IVS:** Intact ventricular septum
- **TGA with VSD:** 30-40%
- **TGA with VSD + PS:** Pulmonary stenosis

**Management:**
- PGE1 to keep PDA open
- Balloon atrial septostomy (Rashkind)
- Arterial switch operation (ASO) within 2 weeks
- Rastelli procedure if VSD + PS

**Total Anomalous Pulmonary Venous Return (TAPVR):**
- Pulmonary veins don't drain to LA
- Drain to: SVC, coronary sinus, IVC, or mixed
- Obligatory R→L shunt at atrial level
- PDA-dependent for systemic output if obstructed

**Tricuspid Atresia:**
- No tricuspid valve
- ASD required
- VSD or PDA for pulmonary blood flow
- Hypoplastic RV
- Staged single-ventricle palliation

**Hypoplastic Left Heart Syndrome (HLHS):**
- Underdeveloped LV, aorta, mitral valve
- Single-ventricle physiology
- PDA-dependent systemic circulation
- Staged palliation (Norwood, Glenn, Fontan)

## Adult Congenital Heart Disease

**Classification:**
- **Simple:** Shunt or isolated valve lesion
- **Moderate:** Complex anatomy, good physiology
- **Great:** Single-ventricle, cyanotic lesions

**Long-Term Issues:**
- Arrhythmias
- Pulmonary hypertension
- Ventricular dysfunction
- Reoperations needed
- Pregnancy considerations`,
      keyTerms: [
        { term: 'Qp:Qs', definition: 'Ratio of pulmonary to systemic blood flow; >1.5 indicates significant L→R shunt' },
        { term: 'Eisenmenger complex', definition: 'Irreversible pulmonary HTN with shunt reversal' },
        { term: 'AV canal', definition: 'Endocardial cushion defect; ASD + VSD + AV valve abnormality' },
        { term: 'juxtaductal', definition: 'Near ductus arteriosus; typical location for coarctation' },
        { term: 'BT shunt', definition: 'Blalock-Taussig shunt; palliative systemic-to-pulmonary artery shunt' },
        { term: 'arterial switch', definition: 'Surgical correction of TGA; aorta and PA switched' },
        { term: 'single-ventricle physiology', definition: 'One ventricle pumps to both circulations; Fontan palliation' },
      ],
      clinicalNotes: 'PGE1 essential for ductal-dependent lesions. Large VSDs cause CHF at 2-8 weeks. ASD closure indicated if Qp:Qs >1.5:1. Coarctation associated with bicuspid AV - screen! Tet spells: knee-chest, oxygen, morphine, beta-blocker. Eisenmenger = contraindication to closure. Adults with CHD need specialized ACHD centers.',
    },
    4: {
      level: 4,
      summary: 'Advanced congenital heart disease management integrates understanding of complex anatomy, physiology of single-ventricle palliation, interventional catheterization techniques, long-term complications including arrhythmias and pulmonary hypertension, and specialized care for adult survivors of congenital heart disease.',
      explanation: `## Prenatal Diagnosis

**Fetal Echocardiography:**
- Indicated with abnormal four-chamber view on anatomy scan
- Maternal risk factors: Diabetes, phenylketonuria, teratogen exposure
- Family history of CHD
- Detection rate: 30-50% of major CHD

**Benefits:**
- Planned delivery at tertiary center
- Immediate postnatal intervention if needed
- Parental counseling
- Pregnancy management considerations

## Interventional Catheterization

**Balloon Atrial Septostomy:**
- Indication: TGA or other mixing lesions
- Creates or enlarges ASD
- Rashkind procedure
- Complications: Atrial injury, arrhythmias

**Balloon Valvuloplasty:**
- Pulmonary valve: Critical PS
- Aortic valve: Critical AS
- Creates competent (but regurgitant) valve

**Stent Placement:**
- PDA stenting: Alternative to BT shunt
- RVOT stent: TOF palliation
- Coarctation stent: Alternative to surgery

**Device Closure:**
- ASD: Amplatzer septal occluder
- VSD: Amplatzer muscular/ membranous occluder
- PDA: Coils, Amplatzer duct occluder

**Complications:**
- Device embolization
- Residual shunt
- Vessel injury
- Arrhythmias
- Thrombosis

## Single Ventricle Physiology

**Goal:** Separate systemic and pulmonary circulations using single ventricle

**Stage 1: Neonatal Period**
- Norwood procedure (HLHS):
  - Atrial septectomy
  - Anastomosis of proximal PA to aorta (neoaorta)
  - BT shunt (systemic-to-pulmonary)
- Goal: Control pulmonary blood flow, systemic output via aorta

**Stage 2: 4-6 months**
- Bidirectional Glenn (BDG) / Hemi-Fontan:
  - SVC to PA anastomosis
  - Removed shunt
- Goal: Reduce volume load, passive pulmonary flow

**Stage 3: 2-4 years**
- Fontan completion:
  - IVC to PA conduit (extracardiac or lateral tunnel)
  - Total cavopulmonary connection
- Goal: Complete separation of circulations

**Fontan Circulation:**
- Passive pulmonary blood flow
- Systemic venous hypertension
- Low cardiac output
- Ventricular dysfunction over time

**Complications:**
- Pleural effusions, ascites (early)
- Protein-losing enteropathy (PLE)
- Arrhythmias (atrial tachycardia)
- Thrombosis
- Fontan failure

## Adult Congenital Heart Disease

**Classification (ACC/AHA):**

**Simple:**
- Isolated ASD (repaired)
- Isolated VSD (repaired)
- Mild pulmonary stenosis
- Repaired PDA

**Moderate:**
- ASD (unrepaired)
- VSD (unrepaired)
- Repaired TOF
- Coarctation (repaired)
- Ebstein anomaly
- Mild valve disease

**Great:**
- Cyanotic lesions
- Fontan circulation
- Eisenmenger syndrome
- Complex single ventricle

**Common Long-Term Issues:**

**Arrhythmias:**
- Atrial tachycardia (Fontan, Mustard/Senning)
- Ventricular tachycardia (TOF repair)
- Sinus node dysfunction (ASD repair, Mustard/Senning)
- Pacemaker/ICD indications

**Pulmonary Hypertension:**
- Eisenmenger syndrome
- Portopulmonary hypertension (Fontan)
- Indications for advanced therapies

**Ventricular Dysfunction:**
- Systemic RV (Mustard/Senning, congenitally corrected TGA)
- TOF: Pulmonary regurgitation, RV dilation
- Single ventricle: Progressive dysfunction

**Reoperation:**
- Pulmonary valve replacement (TOF)
- Conduit replacement
- Arrhythmia surgery (Maze)
- Fontan conversion/revision

**Pregnancy Considerations:**
- WHO classification I-IV
- Preconception counseling essential
- WHO III: Significant increased maternal risk
- WHO IV: Pregnancy contraindicated

## Eisenmenger Syndrome

**Pathophysiology:**
- Uncorrected L→R shunt
- Pulmonary vascular remodeling
- PVR > SVR
- Shunt reversal (R→L)
- Cyanosis, erythrocytosis

**Clinical:**
- Cyanosis, clubbing
- Exercise intolerance
- Syncope
- Hemoptysis
- Thrombosis

**Management:**
- NO pregnancy (WHO IV)
- NO closure (contraindicated)
- Avoid dehydration
- Phlebotomy only if hyperviscosity symptoms
- Advanced PAH therapies may help
- Transplant referral

## Specific Lesion Updates

**Tetralogy of Fallot:**

**Long-Term Issues:**
- Pulmonary regurgitation: Progressive RV dilation
- RV dysfunction: Timing of PVR
- Arrhythmias: VT risk, QRS >180 ms high risk
- Aortic root dilation: 15% have AR

**PVR Indications:**
- QRS >180 ms
- RV EDVI >160 mL/m²
- RV EF <45%
- Symptoms
- Sustained VT

**Transposition of the Great Arteries:**

**Mustard/Senning (Atrial Baffle):**
- Systemic RV (eventual dysfunction)
- Atrial arrhythmias (40%)
- Baffle obstruction/leak
- Pregnancy: WHO III

**Arterial Switch:**
- Anatomic correction
- Coronary ostia translocated
- Neo-aortic root dilation (10-15%)
- Pulmonary stenosis (10%)
- Excellent long-term results

**Fontan Circulation:**
- Liver disease (fibrosis, cirrhosis)
- Plastic bronchitis (rare)
- PLE (3-10%)
- Arrhythmias
- Need for Fontan conversion in some

**Ebstein Anomaly:**
- Apical displacement of tricuspid valve
- Atrialization of RV
- Associated: WPW (25%), ASD/PFO
- Surgical repair if severe`,
      keyTerms: [
        { term: 'Norwood procedure', definition: 'Stage 1 palliation for HLHS; creates neoaorta from PA and aorta' },
        { term: 'Bidirectional Glenn', definition: 'Stage 2 single-ventricle palliation; SVC to PA' },
        { term: 'Fontan', definition: 'Stage 3 single-ventricle palliation; IVC to PA' },
        { term: 'protein-losing enteropathy', definition: 'Protein loss from gut; Fontan complication' },
        { term: 'plastic bronchitis', definition: 'Bronchial casts from lymph leakage; Fontan complication' },
        { term: 'systemic RV', definition: 'Right ventricle pumping to systemic circulation; eventual failure' },
        { term: 'Mustard/Senning', definition: 'Atrial baffle repair for TGA; systemic RV' },
      ],
      clinicalNotes: 'Prenatal echo detects 30-50% of major CHD. Catheter interventions increasingly used - ASD/VSD/PDA closures, valvuloplasty. Fontan staging: Norwood (neonatal), Glenn (4-6 mo), Fontan (2-4 yrs). Eisenmenger = don\'t close shunt, avoid pregnancy, consider PAH meds. TOF: PVR indicated if QRS >180 or RV dysfunction. Adults with CHD need specialized ACHD center care.',
    },
    5: {
      level: 5,
      summary: 'Contemporary congenital heart disease management integrates prenatal diagnosis, hybrid surgical-interventional approaches, refined single-ventricle palliation with Fontan modifications, long-term surveillance for adult survivors, and emerging therapies for pulmonary hypertension and ventricular dysfunction.',
      explanation: `## Current Advances

### Prenatal Diagnosis

**Fetal Echocardiography:**
- Detection rate improving with technology
- 4D imaging, spatiotemporal image correlation
- Fetal MRI for complex anatomy

**Fetal Interventions:**
- Severe aortic stenosis with evolving HLHS
- Balloon valvuloplasty in utero
- Pulmonary atresia with intact septum
- Fetal atrial septostomy

**Outcomes:**
- Still experimental
- Select centers only
- Potential for biventricular conversion in selected cases

### Hybrid Procedures

**Minimally Invasive Approaches:**
- PDA stent instead of BT shunt
- Perimembranous VSD device closure (hybrid)
- Pulmonary artery banding via thoracotomy

**Benefits:**
- Avoids sternotomy/CABG
- Shorter recovery
- Bridge to surgical repair

**Risks:**
- Stent obstruction
- Vocal cord paralysis (PDA stent)
- Need for reintervention

### Single Ventricle Advances

**Fontan Modifications:**
- Extracardiac conduit preferred
- Lateral tunnel (some centers)
- Fenestration (controversial)
- Off-pump techniques

**Complication Management:**
- PLE: Steroids, heparin, sildenafil
- Plastic bronchitis: Inhaled tPA, biventricular pacing
- Fontan failure: PEA (pulsatile flow assist), transplant

**PAH in Fontan:**
- Pulmonary vasodilators (sildenafil, bosentan)
- Improves symptoms
- Not curative

### Adult CHD Registries

**Key Findings:**
- More adults than children with CHD (2020+)
- Most common adult CHD:
  - TOF
  - ASD
  - TGA (Mustard/Senning, ASO)
  - Single ventricle
  - Coarctation

**Guidelines:**
- ACC/AHA 2020 Adult CHD Guidelines
- ESC 2020 Adult CHD Guidelines
- Emphasize specialized ACHD centers
- Transition programs from pediatric to adult care

### Valve Interventions

**Pulmonary Valve Replacement:**
- Surgical vs transcatheter (Melody, Harmony valves)
- Earlier intervention to prevent RV dysfunction
- Conduit vs homograft vs bioprosthetic

**Aortic Valve Interventions:**
- Ross procedure (pulmonary autograft) in young
- TAVR (limited data in CHD)
- Valve-sparing root replacement

### Arrhythmia Management

**Atrial Tachycardia:**
- Common in Fontan, Mustard/Senning, ASD repair
- Catheter ablation increasingly successful
- Surgical Maze with concomitant repair

**Ventricular Tachycardia:**
- TOF repair most common substrate
- Anatomic-based ablation
- ICD indications expanding

**Conduction Disease:**
- Sinus node dysfunction (ASD closure, Mustard/Senning)
- AV block (VSD closure, TOF repair)
- Pacemaker indications

### Pulmonary Hypertension

**Eisenmenger:**
- Advanced PAH therapies approved
- Bosentan, ambrisentan, macitentan
- Sildenafil, tadalafil
- Selexipag
- Combination therapy increasingly used

**Fontan-Associated PH:**
- Diagnosis challenging
- PAH medications may help
- Not classic PAH pathophysiology

### Imaging Advances

**Cardiac MRI:**
- Gold standard for ventricular volumes, function
- Flow quantification (Qp:Qs, regurgitant fraction)
- Tissue characterization (fibrosis)
- 4D flow (hemodynamics)

**CT Angiography:**
- Coronary anatomy in adults
- Extracardiac conduits
- Stent patency
- Lung perfusion

**3D Echocardiography:**
- Valve anatomy
- Intracardiac baffles
- Strain imaging

## Pregnancy in ACHD

**WHO Classification:**
- **I:** No risk, no restriction (small repaired ASD, VSD)
- **II:** Small increased risk (mild valve disease)
- **III:** Significantly increased risk (systemic RV, Fontan, coarctation)
- **IV:** Contraindicated (Eisenmenger, severe PAH)

**Preconception Counseling:**
- Essential for all women with CHD
- Risk assessment
- Medication review
- Genetic counseling

**High-Risk Pregnancies:**
- Fontan: High maternal morbidity
- Systemic RV: Decompensation risk
- Severe valve stenosis: Needs intervention before pregnancy

## Long-Term Follow-Up

**Recommended Frequency:**
- Simple CHD: Every 2-3 years
- Moderate CHD: Every 1-2 years
- Great complexity: Every 6-12 months

**Monitoring:**
- Echocardiography
- Cardiac MRI/CT
- Holter/event monitor
- Exercise testing
- Labs: BNP, liver function (Fontan)

## Future Directions

1. **Stem Cell Therapy:**
   - Regenerate myocardium
   - Tissue-engineered valves
   - Single-ventricle augmentation

2. **Gene Therapy:**
   - Target genetic causes
   - 22q11 deletion research
   - Not yet clinical

3. **3D Printing:**
   - Pre-surgical planning
   - Patient education
   - Procedural training

4. **Artificial Intelligence:**
   - Risk prediction
   - Automated echo analysis
   - Longitudinal risk assessment

5. **Remote Monitoring:**
   - Implantable hemodynamic monitors
   - Wearable devices
   - Virtual visits`,
      keyTerms: [
        { term: 'hybrid procedure', definition: 'Combined surgical and catheter-based intervention' },
        { term: 'Melody valve', definition: 'Transcatheter pulmonary valve; FDA approved for RVOT conduits' },
        { term: 'Harmony valve', definition: 'Transcatheter pulmonary valve for native RVOT' },
        { term: 'Ross procedure', definition: 'Aortic valve replacement with pulmonary autograft + pulmonary homograft' },
        { term: 'strain imaging', definition: 'Echo technique detecting myocardial dysfunction earlier' },
        { term: '22q11 deletion', definition: 'DiGeorge syndrome; associated with conotruncal defects' },
        { term: 'WHO pregnancy classification', definition: 'Risk stratification for pregnancy in CHD' },
      ],
      clinicalNotes: `Current CHD practice updates:

1. **Prenatal:** 3D/4D echo improving detection; fetal interventions experimental
2. **Hybrid:** PDA stent replacing BT shunt in some centers
3. **TOF:** Earlier PVR (QPS >180, RV EDVI >160) prevents irreversible dysfunction
4. **Fontan:** Complications common (PLE, plastic bronchitis, liver disease); need surveillance
5. **TGA:** Arterial switch superior to atrial baffle long-term
6. **ACHD:** More adults than children with CHD; specialized centers essential
7. **Pregnancy:** WHO classification guides counseling
8. **Transcatheter:** Pulmonary valves (Melody, Harmony) avoid redo sternotomy`,
    },
  },

  media: [
    {
      id: 'asd-vsd-pda',
      type: 'diagram',
      filename: 'simple-shunt-lesions.svg',
      title: 'Simple Left-to-Right Shunt Lesions',
      description: 'ASD, VSD, and PDA anatomy',
    },
    {
      id: 'tof-anatomy',
      type: 'diagram',
      filename: 'tetralogy-of-fallot.svg',
      title: 'Tetralogy of Fallot Anatomy',
      description: 'VSD, overriding aorta, RVOT obstruction, RV hypertrophy',
    },
    {
      id: 'fontan-pathway',
      type: 'diagram',
      filename: 'single-ventricle-palliation.svg',
      title: 'Single Ventricle Palliation',
      description: 'Norwood, Glenn, and Fontan procedures',
    },
  ],

  citations: [
    {
      id: 'acc-aha-achd-2020',
      type: 'article',
      title: '2020 ACC/AHA Guideline for the Management of Adults With Congenital Heart Disease',
      authors: ['Stout KK', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'esc-achd-2020',
      type: 'article',
      title: '2020 ESC Guidelines for the Management of Adult Congenital Heart Disease',
      authors: ['Baumgartner H', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'allen-textbook',
      type: 'textbook',
      title: 'Moss and Adams\' Heart Disease in Infants, Children, and Adolescents',
      authors: ['Allen HD', 'Driscoll DJ', 'Shaddy RE', 'Feltes TF'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'topic-cardiovascular-testing', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Testing' },
    { targetId: 'category-arrhythmias', targetType: 'topic', relationship: 'related', label: 'Arrhythmias' },
    { targetId: 'condition-pulmonary-hypertension', targetType: 'condition', relationship: 'related', label: 'Pulmonary Hypertension' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'pediatrics', 'congenital'],
    keywords: ['CHD', 'ASD', 'VSD', 'TOF', 'Fontan', 'TGA', 'Eisenmenger'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default congenitalHeartContent;
