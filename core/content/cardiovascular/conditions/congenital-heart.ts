/**
 * Congenital Heart Disease - Comprehensive Educational Content
 *
 * Heart problems present at birth including septal defects, valve abnormalities,
    and complex congenital heart disease
 */

import { EducationalContent } from '../../types';

export const congenitalHeartContent: EducationalContent = {
  id: 'congenital-heart',
  type: 'condition',
  name: 'Congenital Heart Disease',
  alternateNames: ['CHD', 'Congenital Heart Defect', 'Heart Defect', 'Structural Heart Disease', 'Atrial Septal Defect', 'Ventricular Septal Defect', 'Patent Ductus Arteriosus', 'Tetralogy of Fallot', 'Coarctation of the Aorta'],
  hpoId: 'HP:0001627',

  levels: {
    1: {
      level: 1,
      summary: 'Congenital heart disease refers to heart problems that are present at birth, affecting the structure of the heart and how it works.',
      explanation: `## What is Congenital Heart Disease?

Congenital (con-JEN-ih-tal) means "present at birth." Congenital heart disease (CHD) means a problem with the heart\'s structure that existed before birth. These defects happen when the heart is forming in the womb.

**How Common?**
- About 1 in 100 babies born with some form of CHD
- About 25% of these are critical (need surgery in first year)
- Many are simple defects that cause no problems

## The Normal Heart

Before understanding the defects, let's understand how the normal heart works:

- **Right side:** Receives blue blood (low oxygen) from body, pumps to lungs
- **Left side:** Receives red blood (high oxygen) from lungs, pumps to body
- **Wall (septum):** Separates left and right sides
- **Valves:** Doors between chambers keeping blood flowing correctly

## Common Types of Congenital Heart Disease

### Septal Defects ("Holes in the Heart")

**Atrial Septal Defect (ASD):**
- Hole between the upper chambers (atria)
- Allows blood to leak from left to right
- Usually causes no symptoms in childhood
- May be discovered in adulthood

**Ventricular Septal Defect (VSD):**
- Hole between the lower chambers (ventricles)
- Most common congenital heart defect
- Many small VSDs close on their own
- Larger ones need treatment

### Patent Ductus Arteriosus (PDA)

**What is it?**
- A blood vessel that should close after birth stays open
- Connects aorta to pulmonary artery
- Allows extra blood to flow to lungs

**Normal process:**
- Before birth: Ductus arteriosus is open (bypasses lungs)
- After birth: Should close within days

**Problem:**
- If stays open, causes heart murmur and breathing problems
- More common in premature babies

### Valve Problems

**Pulmonary Stenosis:**
- Pulmonary valve cannot open fully
- Heart must work harder to pump blood to lungs
- May cause heart murmur

**Aortic Stenosis:**
- Aortic valve cannot open fully
- Heart must work harder to pump blood to body
- Can be mild or severe

### Coarctation of the Aorta

**What is it?**
- Narrowing of the aorta (main artery)
- Usually occurs where aorta arches down
- Causes high blood pressure in arms, low in legs

**Symptoms:**
- May not be noticed in childhood
- High blood pressure in arms
- Weak pulses in legs
- Headaches, nosebleeds

### Tetralogy of Fallot

**A more serious defect with 4 problems:**
1. Large VSD (hole in lower chambers)
2. Pulmonary stenosis (narrowing to lungs)
3. Overriding aorta (aorta over the hole)
4. Thickened right ventricle

**"Tet Spells":**
- Episodes where baby turns blue
- Caused by sudden decrease in blood to lungs
- Medical emergency

## Symptoms

**Babies might have:**
- Blue color to skin (cyanosis)
- Fast or troubled breathing
- Poor feeding or poor weight gain
- Tiring easily during feedings

**Older children/adults might have:**
- Shortness of breath during exercise
- Tiring easily
- Swelling in hands, ankles, feet
- Heart murmur (extra sound)

## Diagnosis

**Tests to find CHD:**

**During Pregnancy:**
- Ultrasound may detect some defects
- Fetal echocardiogram if suspicious

**After Birth:**
- Physical exam (listening for murmurs)
- Pulse oximetry (measure oxygen in blood)
- Echocardiogram (ultrasound of baby's heart)
- Chest X-ray
- ECG
- Cardiac catheterization (for detailed pictures)

**Newborn Screening:**
- Pulse oximetry screening is now standard in many places
- Measures oxygen levels in hand and foot
- Can detect critical CHD before baby goes home

## Treatment

**Depends on the type and severity:**

**No Treatment Needed:**
- Some small defects (VSDs, ASDs) close on their own
- May just need monitoring

**Medications:**
- Help the heart work better
- Prevent complications
- Diuretics (water pills)

**Procedures:**
- Cardiac catheterization to close holes (ASD, PDA, VSD)
- Balloon procedures to open narrowed areas
- Device closures (avoiding surgery)

**Surgery:**
- Open-heart surgery to fix defects
- May need more than one surgery
- Timing depends on the defect

**Lifelong Care:**
- Many people with CHD need lifelong follow-up
- Some need additional surgeries as adults
- Pregnancy requires special planning

## Living with CHD

**Most people with CHD live full, active lives!**

**Important steps:**
- Regular check-ups with heart specialist
- Take medications as prescribed
- Know your exercise limits
- Practice good dental hygiene (prevents infection)
- Tell all doctors about your heart condition
- Pregnancy planning (for women)

**Prevention of Infection:**
- Some CHD patients need antibiotics before dental work
- Prevents endocarditis (heart valve infection)
- Ask your doctor if you need this

**Exercise:**
- Most can and should exercise
- Some may have limits
- Discuss with your cardiologist

## Causes

**Most CHD has no known cause.**

**Possible factors:**
- Genetics (runs in families)
- Mother having certain infections during pregnancy (rubella)
- Mother taking certain medications
- Alcohol or drug use during pregnancy
- Mother having certain health conditions (diabetes, obesity)
- Mother smoking during pregnancy

**Important:** Most CHD cannot be prevented, but healthy pregnancy habits help reduce risk!`,
      keyTerms: [
        { term: 'congenital', definition: 'Present at birth; not acquired later in life', pronunciation: 'con-JEN-ih-tal' },
        { term: 'ASD', definition: 'Atrial septal defect; hole between the upper heart chambers' },
        { term: 'VSD', definition: 'Ventricular septal defect; hole between the lower heart chambers' },
        { term: 'PDA', definition: 'Patent ductus arteriosus; blood vessel that fails to close after birth' },
        { term: 'cyanosis', definition: 'Bluish color of skin from low oxygen in blood', pronunciation: 'sye-ah-NO-sis' },
        { term: 'murmur', definition: 'Extra sound heard when listening to the heart with a stethoscope' },
        { term: 'coarctation', definition: 'Narrowing of the aorta, the main artery from the heart' },
      ],
      analogies: [
        'A septal defect is like a hole in a wall between two rooms - things can pass through that shouldn\'t.',
        'A PDA is like a back door that should be closed but stays open.',
        'Coarctation is like a kink in a garden hose - water cannot get through properly.',
      ],
      examples: [
        'A newborn baby fails pulse oximetry screening and is found to have a critical heart defect that needs surgery.',
        'A young adult finds out they have an ASD during a routine physical exam when a murmur is heard.',
        'A premature baby needs medication to help close a PDA that is causing breathing problems.',
      ],
      patientCounselingPoints: [
        'Keep all appointments with your cardiologist - even if you feel well',
        'Know your specific defect and what it means for your life',
        'Ask if you need antibiotics before dental work',
        'Practice excellent dental hygiene to prevent heart infections',
        'Discuss exercise with your cardiologist - most people can and should exercise',
        'Women: Discuss pregnancy plans with cardiologist before becoming pregnant',
        'Carry a card describing your heart condition',
        'Tell all healthcare providers about your heart condition',
        'Endocarditis prevention is important - ask about antibiotic prophylaxis',
        'Learn about warning signs that mean you should call your doctor',
      ],
    },
    2: {
      level: 2,
      summary: 'Congenital heart disease encompasses structural heart abnormalities present at birth, classified as simple shunt lesions (ASD, VSD, PDA), obstructive lesions (coarctation, stenosis), and complex cyanotic conditions (TOF, TGA).',
      explanation: `## Congenital Heart Disease

**Definition:** Structural abnormalities of the heart or great vessels present at birth, resulting from errors in embryologic development.

## Incidence and Classification

**Epidemiology:**
- Incidence: ~1% of live births (8-10 per 1000)
- Critical CHD (requiring intervention in first year): ~25%
- Slight male predominance overall

**Classification:**

**By Physiology:**
- **Left-to-right shunts:** ASD, VSD, PDA, AV canal
- **Right-to-left shunts (cyanotic):** TOF, TGA, TAPVR, truncus arteriosus
- **Obstructive lesions:** Coarctation, AS, PS
- **Mixing lesions:** Single ventricle, AV canal

**By Complexity:**
- **Simple:** One anomaly (ASD, VSD, PDA)
- **Moderate:** Multiple anomalies without cyanosis
- **Complex:** Multiple anomalies with cyanosis

## Septal Defects

### Atrial Septal Defect

**Types:**
- **Secundum ASD:** 70% (central fossa ovalis)
- **Primum ASD:** 20% (part of AV canal defect)
- **Sinus venosus ASD:** 10% (SVC or IVC)

**Pathophysiology:**
- Left-to-right shunt (LA pressure > RA pressure)
- RA and RV volume overload
- Pulmonary overcirculation
- Eventual pulmonary hypertension if unrepaired

**Clinical Presentation:**
- Often asymptomatic in childhood
- Fixed split S2 (pathognomonic)
- Systolic ejection murmur (pulmonary flow murmur)
- May present in adulthood with:
  - Exercise intolerance
  - Atrial arrhythmias
  - Right heart failure

**Natural History:**
- Small defects (<5 mm): May close spontaneously
- Large defects: Progressive RV enlargement
- Eisenmenger syndrome if untreated (rare)

### Ventricular Septal Defect

**Types:**
- **Perimembranous:** 80% (most common)
- **Muscular:** 5-20%
- **Outlet (supracristal):** 5-7%
- **Inlet (AV canal type):** 5%

**Pathophysiology:**
- Left-to-right shunt (LV pressure > RV pressure)
- LA and LV volume overload
- Pulmonary overcirculation
- Pulmonary hypertension if large

**Clinical Presentation:**
- Harsh holosystolic murmur at lower left sternal border
- Thrill with large VSD
- Symptoms depend on size:
  - Small: Asymptomatic, loud murmur
  - Moderate: Failure to thrive, recurrent respiratory infections
  - Large: CHF in infancy

**Natural History:**
- Small VSDs: 30-50% close spontaneously
- Moderate: May close or become restrictive
- Large: Develop pulmonary hypertension if untreated

### Atrioventricular Canal Defect

**Complete AV Canal (Endocardial Cushion Defect):**
- Primum ASD
- Inlet VSD
- Common AV valve
- Associated with Down syndrome (50%)

**Pathophysiology:**
- Large left-to-right shunt
- AV valve regurgitation
- Early CHF
- Pulmonary hypertension

## Patent Ductus Arteriosus

**Normal Physiology:**
- Fetal: PDA connects PA to aorta (bypasses lungs)
- After birth: Should close within 24-48 hours

**Pathophysiology:**
- Continuous run-off from aorta to PA
- Left-to-right shunt
- LA and LV volume overload
- Pulmonary overcirculation
- Risk of pulmonary hypertension

**Clinical Presentation:**
- Machine-like murmur (continuous)
- Wide pulse pressure
- Bounding pulses
- In premature infants: Respiratory distress

**Associated with:**
- Prematurity
- Congenital rubella
- High altitude

## Obstructive Lesions

### Coarctation of the Aorta

**Definition:** Narrowing of the aorta, typically at the isthmus (distal to left subclavian artery)

**Types:**
- **Discrete:** Shelf-like narrowing
- **Long-segment:** Tubular hypoplasia

**Associated with:**
- Bicuspid aortic valve (50-80%)
- VSD
- Mitral valve abnormalities
- Turner syndrome

**Pathophysiology:**
- Obstruction to LV outflow
- Upper body hypertension
- Lower body hypoperfusion
- LV hypertrophy

**Clinical Presentation:**
- BP discrepancy (arms > legs)
- Delayed or diminished femoral pulses
- Systolic murmur (may be continuous with collaterals)
- Rib notching (if collaterals develop)

**Critical Coarctation:**
- Presents in neonate with shock when PDA closes
- Medical emergency

### Pulmonary Stenosis

**Definition:** Obstruction at pulmonary valve (valvular) or below/above (subvalvular/supravalvular)

**Pathophysiology:**
- RV pressure overload
- RV hypertrophy
- Decreased pulmonary blood flow if severe

**Clinical Presentation:**
- Systolic ejection murmur with wide split S2
- May be asymptomatic if mild-moderate
- Cyanosis if severe

**Associated with:**
- Tetralogy of Fallot
- Noonan syndrome
- Congenital rubella

## Cyanotic Heart Disease

### Tetralogy of Fallot

**Four Components:**
1. **VSD:** Large, unrestrictive
2. **Pulmonary stenosis:** RVOT obstruction
3. **Overriding aorta:** Receives blood from both ventricles
4. **RV hypertrophy:** From obstruction

**Pathophysiology:**
- RV outflow obstruction causes right-to-left shunt
- Degree of cyanosis depends on severity of obstruction
- "Tet spells": Hypercyanotic episodes from increased RVOT obstruction

**Clinical Presentation:**
- Cyanosis (variable)
- Single S2 (audible aortic valve only)
- Systolic ejection murmur (RVOT obstruction)
- Squatting increases systemic vascular resistance, decreases R-L shunt, improves symptoms

### Transposition of the Great Arteries

**Definition:** Aorta arises from RV, PA arises from LV

**Pathophysiology:**
- Parallel circulations (incompatible with life without mixing)
- Requires communication (ASD, VSD, or PDA) for survival
- Severe cyanosis after birth

**Classification:**
- **TGA with intact ventricular septum:** Most severe cyanosis
- **TGA with VSD:** Less cyanosis, risk of pulmonary hypertension

### Total Anomalous Pulmonary Venous Return

**Definition:** Pulmonary veins do not connect to LA; drain to systemic venous circulation

**Types:**
- **Supracardiac:** To SVC via innominate vein
- **Cardiac:** To coronary sinus or directly to RA
- **Infradiaphragmatic:** To portal vein

**Pathophysiology:**
- Requires ASD for survival
- Cyanosis depends on degree of mixing

### Truncus Arteriosus

**Definition:** Single artery arising from both ventricles giving rise to aorta, PA, and coronary arteries

**Always associated with VSD**
- Cyanosis from mixing
- CHF from pulmonary overcirculation`,
      keyTerms: [
        { term: 'shunt', definition: 'Abnormal flow of blood between heart chambers or vessels' },
        { term: 'cyanosis', definition: 'Bluish skin from low oxygen; indicates right-to-left shunt' },
        { term: 'Eisenmenger syndrome', definition: 'Reversal of shunt direction from pulmonary hypertension' },
        { term: 'Tet spell', definition: 'Hypercyanotic episode in TOF from increased RVOT obstruction' },
        { term: 'prostaglandin E1', definition: 'Keeps PDA open in ductal-dependent lesions' },
        { term: 'fixed split S2', definition: 'Wide S2 that does not vary with respiration; characteristic of ASD' },
        { term: 'rib notching', definition: 'Notching of inferior rib borders from collateral vessels in coarctation' },
      ],
      analogies: [
        'A left-to-right shunt is like a leak in a dam - water goes the wrong way.',
        'Cyanotic heart disease is like two separate loops that do not connect - blood does not get oxygen.',
        'A VSD is like a hole in the wall between two rooms - pressure determines which way the flow goes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Congenital heart disease requires accurate anatomic and physiologic diagnosis using echocardiography and advanced imaging, with management including medical stabilization, catheter-based interventions, and surgical repair tailored to specific defect.',
      explanation: `## Congenital Heart Disease: Diagnosis and Management

## Diagnostic Approach

### Prenatal Diagnosis

**Fetal Echocardiography:**
- Indicated when:
  - Abnormal 4-chamber view on obstetric ultrasound
  - Family history of CHD
  - Maternal conditions (diabetes, autoimmune, infections)
  - Fetal arrhythmias
  - Increased nuchal translucency

**Detection Rate:**
- 30-50% of major CHD
- Better for lesions causing 4-chamber view abnormalities
- Limited for isolated outflow tract anomalies

### Postnatal Diagnosis

**Clinical Presentation:**
- **Cyanosis:** Critical CHD (ductal-dependent)
- **Heart failure:** Large left-to-right shunts
- **Murmur:** Incidental finding
- **Shock:** Ductal-dependent systemic or pulmonary circulation

**Pulse Oximetry Screening:**
- Universal screening recommended (since 2011)
- Measures preductal (right hand) and postductal (foot) saturation
- Positive: Difference ≥3% or saturation <95% in either
- Detects most critical CHD (sensitivity ~75%)

**Chest X-ray:**
- Cardiac size, shape
- Pulmonary vascularity
- Situs (abdominal and thoracic)
- Aortic arch sidedness

**Electrocardiogram:**
- Axis deviation
- Chamber hypertrophy
- Arrhythmias
- Can suggest specific lesions (e.g., superior axis in AV canal)

**Echocardiography:**
- Primary diagnostic tool
- Anatomic detail
- Physiologic assessment (pressures, shunts)
- Valve function

**Advanced Imaging:**

**Cardiac CT:**
- Excellent for vascular anatomy
- Coronary artery anomalies
- Aortic arch anomalies
- Radiation exposure concern

**Cardiac MRI:**
- Excellent for vascular anatomy
- Ventricular volumes and function
- Shunt quantification
- No radiation
- May require sedation in children

**Cardiac Catheterization:**
- Hemodynamic measurements
- Shunt calculations
- Interventional procedures
- Coronary anatomy
- Pulmonary vascular resistance

## Left-to-Right Shunt Lesions

### Atrial Septal Defect

**Diagnosis:**
- Echocardiography: Defect size, shunt direction
- Transesophageal echo: Better anatomic detail
- Qp/Qs calculation if needed (>1.5: significant)

**Management:**

**Medical:**
- None required for isolated ASD
- Treat complications (arrhythmias, HF)

**Closure Indications:**
- Right heart enlargement
- Qp/Qs >1.5
- Documented paradoxical embolism

**Closure Methods:**
- **Device closure (preferred):** Amplatzer septal occluder
  - Indicated for secundum ASD with adequate rims
  - Success >95%
  - Complications: Erosion, thrombus, arrhythmia

- **Surgical closure:**
  - Primum ASD, sinus venosus ASD
  - Very large ASD
  - Inadequate rims for device

### Ventricular Septal Defect

**Diagnosis:**
- Echocardiography: Size, location, number
- Shunt quantification
- Pulmonary pressures

**Management:**

**Medical:**
- Diuretics for CHF
- ACE inhibitors for afterload reduction
- Adequate nutrition
- Consider PGE1 in premature with PDA (lowers PVR)

**Spontaneous Closure:**
- Perimembranous: ~40% close by age 2
- Muscular: Up to 80% close by age 2
- Outlet: Rarely close

**Closure Indications:**
- Large defects with CHF
- Failure to thrive
- Pulmonary hypertension

**Closure Methods:**
- **Device closure:** Perimembranous and muscular VSDs
  - Risk of heart block with perimembranous
- **Surgical closure:** Outlet VSD, large defects, device failure

### Patent Ductus Arteriosus

**Diagnosis:**
- Echocardiography confirms
- Assess size, shunt direction, pulmonary pressures

**Management:**

**Medical Closure:**
- **Indomethacin:** NSAID, closes PDA in premature
  - Success rate: 70-80%
  - Complications: Renal dysfunction, NEC
- **Ibuprofen:** Alternative to indomethacin
- **Acetaminophen:** Emerging option

**Surgical Ligation:**
- If medical therapy fails
- Contraindication to NSAIDs
- Large PDA in older infant/child

**Device Closure:**
- For infants >6 months, children, adults
- Coils for small PDA
- Devices for larger

## Obstructive Lesions

### Coarctation of the Aorta

**Diagnosis:**
- Echocardiography: Severity, arch anatomy
- MRI/CT: Detailed anatomy
- Cardiac catheterization: For intervention

**Management:**

**Neonates with Critical Coarctation:**
- **PGE1:** Keep PDA open for systemic perfusion
- Stabilize, then repair

**Intervention:**

**Balloon Angioplasty:**
- Neonates: Good results, but high recoarctation rate
- Older children/adults: Preferred (surgery more difficult)

**Surgical Repair:**
- **End-to-end anastomosis:** Most common
- **Subclavian flap aortoplasty:** Uses subclavian artery
- **Patch aortoplasty:** Uses prosthetic material
- **Bypass graft:** In older patients

**Recoarctation:**
- 10-20% after surgery
- Balloon angioplasty first-line

**Residual Hypertension:**
- Common even after repair
- Lifelong monitoring needed

### Pulmonary Stenosis

**Diagnosis:**
- Echocardiography: Severity, annular size
- Doppler gradient estimation

**Management:**

**Balloon Valvuloplasty:**
- First-line treatment for significant PS
- Gradient reduced from severe to mild/none
- Complications: Pulmonary regurgitation (common)

**Surgical Valvotomy:**
- Dysplastic valves
- Failed balloon
- Supra/subvalvar PS

## Cyanotic Heart Disease

### Tetralogy of Fallot

**Diagnosis:**
- Echocardiography usually diagnostic
- MRI/CT for coronary anomalies
- Cardiac cath for pulmonary artery anatomy

**Management:**

**Neonatal Management:**
- **Hypercyanotic Spells:**
  - Knee-chest position (increases SVR)
  - Oxygen
  - Morphine
  - Phenylephrine (increases SVR)
  - Beta-blocker (propranolol)
  - Avoid Valsalva

**Surgical Repair:**
- **Timing:** Typically 3-6 months
- **Complete repair:**
  - VSD closure
  - RVOT obstruction relief
  - Pulmonary valvotomy ± transannular patch
- **Shunt (BT):** If palliative approach
  - Blalock-Taussig shunt (subclavian to PA)
  - Increases pulmonary blood flow

**Long-Term Issues:**
- Pulmonary regurgitation
- RV dilation/dysfunction
- Arrhythmias (VT)
- Sudden cardiac death
- May need pulmonary valve replacement

### Transposition of the Great Arteries

**Diagnosis:**
- Echocardiography confirms
- Assess for VSD, coronary anatomy

**Management:**

**Initial Stabilization:**
- **PGE1:** Keep PDA open for mixing
- **Balloon atrial septostomy (Rashkind):**
  - Creates ASD if inadequate mixing
  - Emergent procedure in first hours/days

**Surgical Repair:**

**Arterial Switch Operation (Jatene):**
- **Timing:** First 1-2 weeks
- **Procedure:**
  - Great arteries switched
  - Coronary arteries transferred
  - VSD closed if present
- **Outcomes:**
  - Survival >95%
  - Risk: Coronary problems, RVOT obstruction

**Atrial Switch (Mustard/Senning):**
- Older operation (historical)
- Baffles redirect blood at atrial level
- Systemic RV → long-term failure
- Arrhythmias common

### Total Anomalous Pulmonary Venous Return

**Diagnosis:**
- Echocardiography confirms
- Assess obstruction (infradiaphragmatic type)
- Cardiac cath may be needed

**Management:**

**Initial Stabilization:**
- PGE1 (may help)
- Treat pulmonary hypertension

**Surgical Repair:**
- **Emergency:** If obstructed TAPVR
- **Elective:** First few weeks of life
- **Procedure:**
  - Connect pulmonary veins to LA
  - Close ASD
  - Repair associated anomalies

## Single Ventricle Physiology

**Definition:** One functional ventricle

**Lesions:**
- Hypoplastic left heart syndrome (HLHS)
- Tricuspid atresia
- Double inlet left ventricle
- Unbalanced AV canal

**Staged Surgical Palliation:**

**Stage I (Norwood):**
- Neonatal period
- Create systemic-to-pulmonary shunt
- Restrict pulmonary blood flow
- Make RV the systemic ventricle (for HLHS)

**Stage II (Glenn/Hemi-Fontan):**
- 3-6 months
- SVC to PA connection
- Decreases volume load on ventricle

**Stage III (Fontan):**
- 2-4 years
- IVC to PA connection
- Complete separation of pulmonary and systemic circulations

**Complications:**
- Protein-losing enteropathy
- Plastic bronchitis
- Arrhythmias
- Thrombosis
- Ventricular dysfunction`,
      keyTerms: [
        { term: 'Qp/Qs', definition: 'Ratio of pulmonary to systemic blood flow; quantifies shunt' },
        { term: 'PGE1', definition: 'Prostaglandin E1; keeps PDA open in ductal-dependent lesions' },
        { term: 'Rashkind procedure', definition: 'Balloon atrial septostomy; creates ASD for mixing' },
        { term: 'BT shunt', definition: 'Blalock-Taussig shunt; subclavian to PA for pulmonary blood flow' },
        { term: 'Fontan procedure', definition: 'Final palliation for single ventricle; IVC to PA connection' },
        { term: 'Norwood procedure', definition: 'Stage I palliation for HLHS; makes RV systemic ventricle' },
        { term: 'Jatene operation', definition: 'Arterial switch for TGA; great arteries switched' },
      ],
      clinicalNotes: 'For critical CHD, PGE1 is lifesaving to maintain ductal patency. Pulse oximetry screening detects most critical CHD before discharge. ASD device closure preferred for secundum defects with adequate rims. For VSD, spontaneous closure common - watch and wait for small defects. TOF repair typically at 3-6 months. TGA requires arterial switch within first 1-2 weeks. Fontan completion at 2-4 years for single ventricle.',
    },
    4: {
      level: 4,
      summary: 'Modern management of CHD integrates fetal diagnosis, neonatal screening, catheter-based interventions, staged surgical palliation for complex lesions, and lifelong follow-up for adult survivors.',
      explanation: `## Advanced Management of Congenital Heart Disease

## Interventional Cardiology for CHD

### Device Closure of Septal Defects

**ASD Device Closure:**

**Indications:**
- Secundum ASD with:
  - Right heart enlargement
  - Qp/Qs >1.5
  - Symptomatic (arrhythmias, paradoxical embolism)

**Contraindications:**
- Primum or sinus venosus ASD (surgical)
- Inadequate rims (<5 mm)
- Very large ASD (>38 mm)
- Associated anomalies requiring surgery

**Devices:**
- Amplatzer Septal Occluder (most common)
- Gore Septal Occluder
- Figulla Occluder

**Complications:**
- Device erosion (rare, catastrophic)
- Thrombus formation
- Atrial arrhythmias
- Device embolization
- Pericardial effusion

**VSD Device Closure:**

**Indications:**
- Muscular VSD (any age)
- Perimembranous VSD (with careful selection)
- Residual post-surgical VSD

**Complications:**
- Heart block (highest with perimembranous)
- Device embolization
- Tricuspid or aortic regurgitation
- Ventricular arrhythmias

**PDA Device Closure:**

**Devices:**
- Coils: Small PDA
- Amplatzer Vascular Plug: Larger PDA

**Indications:**
- PDA >6 months (not closing spontaneously)
- Left heart enlargement
- Pulmonary overcirculation

## Surgical Outcomes and Considerations

### Tetralogy of Fallot

**Surgical Evolution:**
- Early: Blalock-Taussig shunt (palliation)
- Then: Intracardiac repair (1950s-)
- Now: Complete repair in infancy

**Current Practice:**
- Repair at 3-6 months
- Earlier if symptomatic
- Transannular patch common (creates pulmonary regurgitation)

**Long-Term Issues:**

**Pulmonary Regurgitation:**
- Consequence of transannular patch
- RV volume overload
- Exercise intolerance
- Arrhythmia risk

**Pulmonary Valve Replacement:**
- Indications:
  - QRS >180 ms
  - RV dilation/dysfunction
  - Symptoms
  - Sustained VT
- Options: Surgical or transcatheter

**Arrhythmias:**
- VT: Risk of sudden death
- Atrial arrhythmias common
- ICD consideration

### Single Ventricle Management

**Stage I Norwood:**
- Highest mortality (10-20%)
- Shunt vs right ventricle to PA conduit (Sano)
- Hybrid alternative (less invasive)

**Stage II Glenn:**
- Lower mortality (3-5%)
- Creates passive pulmonary blood flow
- Improves oxygenation

**Stage III Fontan:**
- Mortality 2-5% at experienced centers
- Creates complete separation of circulations

**Fontan Complications:**

**Protein-Losing Enteropathy:**
- Protein loss in gut
- Edema, diarrhea, ascites
- Mortality 50% at 5 years
- Treat: Diuretics, heparin, sildenafil, Fontan conversion

**Plastic Bronchitis:**
- Cast formation in airways
- Life-threatening
- Similar treatment to PLE
- Fontan conversion may help

**Thrombosis:**
- Stasis in Fontan pathway
- Anticoagulation considered

**Pregnancy Considerations:**
- High-risk pregnancy
- Preconception counseling essential
- Delivery at experienced center

## Adult Congenital Heart Disease

### Transition of Care

**Pediatric to Adult:**
- Structured transition programs
- ACHD centers recommended
- Lifelong follow-up needed

**Issues:**
- Loss to follow-up common
- Repaired lesions develop late problems
- Pregnancy counseling needed
- Exercise prescriptions

### Repaired Lesions: Late Complications

**Repaired TOF:**
- Pulmonary regurgitation → PVR
- Arrhythmias → ablation, ICD
- Exercise restriction (competitive sports) if significant

**Repaired Coarctation:**
- Recoarctation → balloon/stent
- Hypertension persists
- Aortic aneurysm risk
- Endocarditis prophylaxis if coarctation + prosthetic material

**Repaired TGA (atrial switch):**
- Systemic RV failure
- Arrhythmias
- May need conversion to arterial switch (rare) or transplant

**Repaired TGA (arterial switch):**
- Coronary problems
- Neoaortic regurgitation
- RVOT obstruction

### ACHD Classification

**Class I (Simple):**
- Isolated ASD (small, repaired)
- Isolated VSD (small, repaired)
- Repaired PDA
- Mild valve disease

**Class II (Moderate):**
- Most unrepaired lesions
- Complex lesions with good repair
- Cyanotic lesions without pulmonary hypertension

**Class III (Great complexity):**
- Fontan, single ventricle
- Cyanotic lesions with pulmonary hypertension
- Eisenmenger syndrome

## Pregnancy in CHD

**Risk Stratification (CARPREG II):**

**Predictors of complications:**
- Prior cardiac events
- Poor functional class
- Cyanosis
- Left heart obstruction
- Pulmonary hypertension
- Atrial arrhythmias

**Contraindications:**
- Severe pulmonary hypertension
- Severe systemic ventricular dysfunction
- Severe aortic stenosis
- Marfan with aortic root >45 mm
- Mechanical valves (warfarin issues)

**Management:**
- Preconception counseling
- Multidisciplinary care (cardiology, OB, anesthesia)
- Delivery at experienced center

## Endocarditis Prophylaxis

**Current Guidelines:**

**Indicated for:**
- Prosthetic material (surgical or catheter-based)
- Previous endocarditis
- Certain cyanotic lesions (unrepaired)
- Completely repaired with prosthetic material (first 6 months)

**NOT indicated for:**
- Isolated ASD (repaired)
- Isolated VSD (repaired, no residua)
- Most repaired lesions without prosthetic material

**Procedure:**
- Amoxicillin 2 g 30-60 min before
- Alternatives if penicillin allergy

## Imaging in ACHD

**Echocardiography:**
- First-line for most lesions
- Serial measurements

**Cardiac MRI:**
- Ventricular volumes and function
- Shunt quantification
- Great vessel anatomy
- Tissue characterization

**CT Angiography:**
- Coronary anatomy
- Aortic pathology
- Stent/prosthesis assessment

**Cardiac Catheterization:**
- Interventional procedures
- Hemodynamic assessment
- Pulmonary vascular resistance`,
      keyTerms: [
        { term: 'ACHD', definition: 'Adult congenital heart disease; grown survivors of childhood CHD' },
        { term: 'CARPREG', definition: 'Pregnancy risk prediction in women with heart disease' },
        { term: 'PLE', definition: 'Protein-losing enteropathy; Fontan complication with protein loss' },
        { term: 'plastic bronchitis', definition: 'Cast formation in airways; Fontan complication' },
        { term: 'Fontan conversion', definition: 'Surgical revision of Fontan pathway for complications' },
        { term: 'transannular patch', definition: 'Surgical technique in TOF repair causing pulmonary regurgitation' },
        { term: 'systemic RV', definition: 'Right ventricle functioning as systemic ventricle (atrial switch TGA)' },
      ],
      clinicalNotes: 'For ACHD, care at specialized ACHD center improves outcomes. Pregnant women with CHD require preconception counseling and multidisciplinary care. Endocarditis prophylaxis indicated for prosthetic material, certain unrepaired lesions, and first 6 months post-repair with prosthetic material. Fontan patients need monitoring for PLE, plastic bronchitis, thrombosis. TOF survivors need PVR when RV dilates/dysfunctions, QRS >180 ms, or symptomatic.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CHD care integrates fetal diagnosis, catheter-based interventions, refined surgical techniques, staged palliation for complex lesions, and specialized adult congenital heart disease programs.',
      explanation: `## Evidence-Based Congenital Heart Disease Management

## Landmark Trials and Advances

### Interventional Cardiology

**ASD Device Closure:**
- Multiple devices now available
- Success rates >95%
- Avoids sternotomy, shorter recovery
- Long-term data excellent

**VSD Device Closure:**
- Muscular VSDs: Excellent results
- Perimembranous: Higher complication rate (heart block)
- FDA approval for selected VSDs

**PDA Closure:**
- Device closure standard for >6 months
- Coils for small, devices for large
- Avoids thoracotomy

### Surgical Outcomes

**Norwood Evolution:**
- Single-center results: Mortality <20% (was >50%)
- Hybrid procedure alternative (less invasive)
- Experience critical: Volume-outcome relationship

**Arterial Switch for TGA:**
- Survival >95% at experienced centers
- Replaced atrial switch operations
- Better long-term outcomes (systemic LV vs RV)

**Fontan Evolution:**
- Extracardiac conduit preferred now
- Lateral tunnel less common
- Fenestration reduces early morbidity
- Long-term issues remain (PLE, plastic bronchitis)

### Fetal Diagnosis

**Impact:**
- Earlier diagnosis improves outcomes
- Planned delivery at experienced center
- In-utero interventions (rare, developing)
- Parental counseling

**Limitations:**
- 50-70% detection of major CHD
- False positives/negatives
- Operator-dependent

## Contemporary Controversies

### Timing of Intervention

**VSD Closure:**
- Large with CHF: Early closure
- Asymptomatic: Debate (many close spontaneously)
- Current: Observe small defects, close large ones

**PDA Treatment:**
- Premature: Medical closure (indomethacin/ibuprofen)
- Term: Device closure preferred
- Timing: >6 months (allow spontaneous closure)

**TOF Repair:**
- Earlier repair (1-3 months) now common
- Better neurodevelopmental outcomes?
- Balanced against surgical risk

### Pulmonary Valve Replacement in TOF

**Indications Evolving:**
- QRS >180 ms (guideline)
- RV dilation (RVEDV >150 mL/m²)
- RV dysfunction (RVEF <45%)
- Symptomatic
- Sustained VT

**Options:**
- Surgical PVR: Standard
- Transcatheter PVR (Harmony, Melody):
  - FDA approved
  - Less invasive
  - Good short-term results

### Single Ventricle Outcomes

**Fontan Failure:**
- 10-20% at 10 years
- Risk factors:
  - Single right ventricle
  - Increased PVR
  - AV valve regurgitation
  - Heterotaxy

**Management:**
- Heart transplantation (high-risk)
- Fontan conversion
- Palliative care

### ACHD Pregnancy

**CARPREG II Study (2018):**
- Risk prediction model
- Identifies high-risk pregnancies
- Guides preconception counseling

**ZAHARA Investigators:**
- Similar risk model in European cohort

**Recommendations:**
- All women with CHD: Preconception counseling
- High-risk: Avoid pregnancy or experienced center
- Mechanical valves: High maternal and fetal risk

## Imaging Advances

**3D Echocardiography:**
- Better anatomic detail
- Guidance for interventions
- Preoperative planning

**Cardiac MRI:**
- Standard for ACHD follow-up
- Ventricular volumes (most accurate)
- Tissue characterization
- Shunt quantification

**Fetal Echocardiography:**
- Earlier detection
- Better counseling
- Planned delivery

## Future Directions

### Fetal Interventions

**Aortic Valvuloplasty for Severe AS:**
- Prevents HLHS development
- Early experience promising
- Selected centers

**Balloon Atrial Septostomy in Utero:**
- For TGA with restrictive atrial communication
- Experimental

### Stem Cell Therapy

- Regenerate myocardium
- Improve RV function in TOF
- Early research

### Gene Therapy

- Identifying genetic causes
- Potential for targeted therapy
- Early research

### 3D Printing
- Surgical planning
- Patient education
- Procedure simulation

## Transition and Long-Term Care

**Transition Programs:**
- Structured pediatric to adult transition
- Reduces loss to follow-up
- Improves outcomes

**Lifelong Follow-Up:**
- All CHD patients require lifelong follow-up
- Frequency depends on complexity
- ACHD center care improves outcomes

**Exercise Prescription:**
- Most CHD patients can and should exercise
- Formal exercise testing recommended
- Prescribe based on physiology

**Neurodevelopmental Outcomes:**
- CHD associated with neurodevelopmental delays
- Early intervention important
- School performance monitoring

## Quality Metrics

**Surgical Outcomes:**
- STS Database (Society of Thoracic Surgeons)
- Public reporting
- Volume-outcome relationship

**Hospital Quality:**
- CHD surgery volume matters
- Cardiac catheterization volume matters
- Team experience critical

**Regionalization:**
- Higher risk cases at high-volume centers
- Transport of critically ill neonates
- In-utero transport when possible

## Psychosocial Aspects

**Family Impact:**
- Stress on families
- Financial burden
- Sibling impact
- Support groups helpful

**Neurocognitive Issues:**
- Learning disabilities common
- Executive function deficits
- Attention problems
- School accommodations often needed

**Quality of Life:**
- Most adult survivors have good QoL
- Reduced in complex lesions
- Anxiety/depression more common`,
      keyTerms: [
        { term: 'CARPREG II', definition: 'Pregnancy risk prediction in women with heart disease' },
        { term: 'ZAHARA', definition: 'European study of pregnancy outcomes in CHD' },
        { term: 'transcatheter PVR', definition: 'Transcatheter pulmonary valve replacement; less invasive alternative to surgery' },
        { term: 'Harmony valve', definition: 'Transcatheter pulmonary valve for RVOT reconstruction' },
        { term: 'fetal echocardiography', definition: 'Ultrasound of fetal heart; detects CHD before birth' },
        { term: 'heterotaxy', definition: 'Abnormal organ arrangement; associated with complex CHD and worse Fontan outcomes' },
        { term: 'neurodevelopmental', definition: 'Brain/developmental outcomes; CHD associated with delays' },
      ],
      clinicalNotes: `Key Practice Updates:

1. **Fetal diagnosis** improves outcomes - plan delivery at experienced center
2. **ASD/VSD device closure** now standard for suitable anatomy
3. **PDA device closure** preferred for infants >6 months
4. **TOF repair** at 3-6 months with excellent outcomes
5. **Arterial switch** for TGA within first 1-2 weeks
6. **Fontan completion** at 2-4 years; watch for PLE, plastic bronchitis
7. **ACHD care** at specialized centers improves survival
8. **Pregnancy counseling** essential for all women with CHD
9. **Endocarditis prophylaxis** limited to prosthetic material and high-risk lesions
10. **Neurodevelopmental monitoring** recommended for all CHD survivors

Risk Stratification for Exercise:
- Class I (no restriction): Most repaired simple lesions
- Class II (low intensity): Complex repairs, arrhythmias
- Class III (no competitive): Cyanotic, pulmonary HTN, severe obstruction

ACHD Classification Importance:
- Determines follow-up frequency
- Guides activity recommendations
- Pregnancy risk assessment
- Endocarditis prophylaxis decisions`,
      patientCounselingPoints: [
        'Keep all appointments with your cardiologist - lifelong follow-up is important',
        'Learn about your specific heart defect and what it means for your life',
        'Ask about endocarditis prophylaxis before dental work',
        'Practice excellent dental hygiene to prevent heart infections',
        'Discuss exercise with your cardiologist - most people can and should exercise',
        'Women: Discuss pregnancy plans with cardiologist before becoming pregnant',
        'Carry a medical alert card or bracelet describing your condition',
        'Tell all healthcare providers about your heart condition',
        'If you had surgery as a child, ask if you need follow-up as an adult',
        'Join a support group for people with congenital heart disease',
      ],
    },
  },

  media: [
    {
      id: 'asd-vsd-pda',
      type: 'diagram',
      filename: 'simple-shunt-lesions.svg',
      title: 'Simple Shunt Lesions',
      description: 'ASD, VSD, and PDA anatomy and shunt direction',
    },
    {
      id: 'tof-anatomy',
      type: 'diagram',
      filename: 'tetralogy-of-fallot.svg',
      title: 'Tetralogy of Fallot',
      description: 'Four components of TOF',
    },
    {
      id: 'tga-anatomy',
      type: 'diagram',
      filename: 'transposition-great-arteries.svg',
      title: 'Transposition of the Great Arteries',
      description: 'Normal vs TGA anatomy',
    },
    {
      id: 'fontan-circulation',
      type: 'diagram',
      filename: 'fontan-circulation.svg',
      title: 'Single Ventricle Palliation',
      description: 'Norwood, Glenn, and Fontan procedures',
    },
  ],

  citations: [
    {
      id: 'aha-achd-2020',
      type: 'article',
      title: '2020 AHA/AHA Guideline for the Management of Adults With Congenital Heart Disease',
      authors: ['Stout KK', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'esc-chd-2020',
      type: 'article',
      title: '2020 ESC Guidelines for the management of adult congenital heart disease',
      authors: ['Bauersachs J', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'statPearls-chd',
      type: 'website',
      title: 'Congenital Heart Disease',
      authors: ['Finley A', 'Kong R'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK556012/',
    },
  ],

  crossReferences: [
    { targetId: 'heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'arrhythmia', targetType: 'condition', relationship: 'related', label: 'Arrhythmia' },
    { targetId: 'valvular-disease', targetType: 'condition', relationship: 'related', label: 'Valvular Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'pediatric cardiology', 'congenital', 'adult congenital heart disease'],
    keywords: ['CHD', 'ASD', 'VSD', 'PDA', 'TOF', 'TGA', 'Fontan', 'coarctation'],
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
