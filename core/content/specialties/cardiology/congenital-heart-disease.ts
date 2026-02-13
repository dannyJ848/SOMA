/**
 * Congenital Heart Disease - Comprehensive Educational Content
 *
 * Covers anatomy, classification, pathophysiology, diagnosis, and management
 * of congenital cardiac defects in pediatric and adult populations.
 */

import { EducationalContent } from '../../types';

export const congenitalHeartDisease: EducationalContent = {
  id: 'condition-congenital-heart-disease',
  type: 'condition',
  name: 'Congenital Heart Disease',
  alternateNames: ['CHD', 'Congenital Heart Defects', 'ACHD', 'Adult Congenital Heart Disease'],
  hpoId: 'HP:0001627',

  levels: {
    1: {
      level: 1,
      summary: 'Congenital heart disease refers to heart problems that babies are born with, caused by the heart not forming correctly before birth.',
      explanation: `When a baby is growing inside the mother, the heart forms during the first few weeks. Sometimes, something goes wrong during this process, and the baby is born with a heart that did not form correctly. This is called congenital heart disease.

**Common Types of Heart Defects:**

1. **Holes in the Heart**
Some babies are born with holes between different chambers of the heart. This allows blood to flow where it should not.
- Hole between upper chambers (ASD)
- Hole between lower chambers (VSD)

2. **Narrowed Passages**
Sometimes the valves or blood vessels are too narrow, making it hard for blood to flow through.

3. **Wrong Connections**
The blood vessels may be connected to the wrong parts of the heart.

**What Causes These Problems?**
- Most of the time, we do not know
- Sometimes it runs in families
- Certain infections or medications during pregnancy
- Diabetes in the mother

**Signs That Something May Be Wrong:**
- Blue color to the lips or skin
- Fast breathing
- Trouble feeding
- Not gaining weight
- Getting tired easily

**Good News:**
Today, doctors can find many heart defects before babies are born using ultrasound. Many can be fixed with surgery or other procedures, and most children with heart defects grow up to live normal, healthy lives!`,
      keyTerms: [
        { term: 'congenital', definition: 'A condition that a baby is born with' },
        { term: 'defect', definition: 'A problem with how something formed or works' },
        { term: 'cyanosis', definition: 'Blue color of the skin caused by not enough oxygen in the blood' },
        { term: 'murmur', definition: 'An extra sound the heart makes when blood flows abnormally' },
      ],
      analogies: [
        'The heart is like a house with four rooms and doors between them. A heart defect is like having a hole in a wall or a door that does not close properly.',
        'Blood vessels are like pipes carrying water. If a pipe is too narrow or connected wrong, water cannot flow where it needs to go.',
        'Think of the heart as having a "blue side" (used blood) and a "red side" (fresh blood). Heart defects can mix these up.',
      ],
      examples: [
        'A baby with a large hole in their heart might breathe very fast and have trouble gaining weight.',
        'A child with a narrowed heart valve might get tired more easily than other children when playing.',
      ],
    },
    2: {
      level: 2,
      summary: 'Congenital heart disease encompasses structural heart abnormalities present at birth, classified as cyanotic (blue baby) or acyanotic based on whether deoxygenated blood mixes with systemic circulation.',
      explanation: `## Overview

Congenital heart disease (CHD) occurs in approximately 1% of all live births (8-10 per 1,000). Advances in diagnosis and treatment mean that most patients now survive into adulthood, creating a growing population of adults with congenital heart disease (ACHD).

## Classification

**Acyanotic Defects (Left-to-Right Shunts):**
Oxygen-rich blood flows from the left side to the right side of the heart. Initially no cyanosis because oxygenated blood is still reaching the body.

| Defect | Location | Description |
|--------|----------|-------------|
| VSD | Ventricular septum | Hole between ventricles (most common CHD) |
| ASD | Atrial septum | Hole between atria |
| PDA | Ductus arteriosus | Persistent connection between aorta and pulmonary artery |
| AVSD | AV valves | Complete AV canal defect (common in Down syndrome) |

**Cyanotic Defects (Right-to-Left Shunts):**
Deoxygenated blood bypasses the lungs and enters systemic circulation, causing cyanosis.

| Defect | Mechanism | Description |
|--------|-----------|-------------|
| Tetralogy of Fallot | Decreased pulmonary blood flow | Most common cyanotic CHD |
| TGA | Parallel circulations | Aorta arises from RV, PA from LV |
| Tricuspid Atresia | No RV inflow | Absent tricuspid valve |
| Truncus Arteriosus | Common arterial trunk | Single vessel from ventricles |
| Total Anomalous Pulmonary Venous Return | Pulmonary veins to RA | All pulmonary veins drain wrong |

## Tetralogy of Fallot

Four components:
1. **VSD** - Large ventricular septal defect
2. **Overriding aorta** - Aorta sits over the VSD
3. **Pulmonary stenosis** - Obstruction of RV outflow
4. **RV hypertrophy** - Right ventricle thickens in response

**Clinical Features:**
- Cyanosis (degree depends on pulmonary stenosis severity)
- "Tet spells" - Episodes of profound cyanosis, often with crying/feeding
- Squatting position increases systemic resistance, improves symptoms
- Boot-shaped heart on X-ray

## Transposition of the Great Arteries

**D-TGA (Complete TGA):**
- Aorta arises from RV, pulmonary artery from LV
- Two parallel circuits - incompatible with life without mixing
- Requires atrial communication (ASD, PFO) or PDA for survival
- Arterial switch operation is definitive repair

## Diagnosis

**Prenatal:**
- Fetal echocardiography (18-22 weeks)
- Detects many major defects

**Postnatal:**
- Physical exam: Murmur, cyanosis, failure to thrive
- Pulse oximetry screening (now routine in newborn nurseries)
- Echocardiography: Primary diagnostic tool
- Chest X-ray: Heart size and shape
- ECG: Chamber enlargement, hypertrophy

## General Management Principles

**Medical:**
- Prostaglandin E1 (PGE1) to keep PDA open in duct-dependent lesions
- Diuretics for heart failure
- Digoxin (less commonly used now)

**Surgical:**
- Palliative procedures (shunts, banding)
- Definitive repair (varies by defect)

**Long-term Considerations:**
- Endocarditis prophylaxis (for specific lesions)
- Activity restrictions
- Pregnancy counseling
- Lifelong follow-up`,
      keyTerms: [
        { term: 'cyanotic', definition: 'Heart defects that cause blue discoloration due to deoxygenated blood in systemic circulation' },
        { term: 'acyanotic', definition: 'Heart defects without mixing of deoxygenated blood into systemic circulation' },
        { term: 'shunt', definition: 'Abnormal blood flow between cardiac chambers or vessels' },
        { term: 'Tetralogy of Fallot', definition: 'Most common cyanotic CHD with VSD, overriding aorta, pulmonary stenosis, RV hypertrophy' },
        { term: 'PGE1', definition: 'Prostaglandin E1; medication to keep ductus arteriosus open in duct-dependent lesions' },
        { term: 'arterial switch', definition: 'Definitive surgical repair for TGA; switches great arteries to correct positions' },
      ],
      analogies: [
        'Left-to-right shunts are like a detour that makes blood go back through the lungs again - extra work for the heart.',
        'In TGA, the heart circulates blood in two separate loops that do not connect properly, like two highways that never intersect.',
        'A duct-dependent lesion relies on the PDA like a baby relies on the umbilical cord - it is a lifeline until surgery.',
      ],
    },
    3: {
      level: 3,
      summary: 'Congenital heart disease involves abnormal cardiac morphogenesis resulting in structural defects with specific hemodynamic consequences, classified by shunt direction and pulmonary blood flow, with management determined by anatomy and physiology.',
      explanation: `## Embryology and Development

### Normal Cardiac Development

**Week 3:**
- Cardiac progenitor cells form cardiac crescent
- Fusion to form primitive heart tube

**Weeks 4-5:**
- Looping (D-loop in normal hearts)
- Atrioventricular canal formation
- Atrial and ventricular septation begins

**Weeks 5-8:**
- Conotruncal septation (outflow tracts)
- Valve development
- Coronary artery formation

### Developmental Defects by Timing

| Timing | Defect | Developmental Error |
|--------|--------|-------------------|
| Early looping | Heterotaxy, TGA | Abnormal L/R patterning |
| AV canal | AVSD | Endocardial cushion defects |
| Septation | VSD, ASD | Incomplete septal formation |
| Conotruncal | TOF, truncus, TGA | Conotruncal septation failure |

## Acyanotic Defects - Detailed

### Ventricular Septal Defect (VSD)

**Classification by Location:**
- Perimembranous (75-80%): Adjacent to tricuspid and aortic valves
- Muscular (5-20%): Within muscular septum
- Inlet (5-8%): Posterior, near AV valves
- Outlet/Supracristal (5-7%): Near pulmonary valve (common in Asians)

**Physiology:**
- Shunt magnitude depends on: VSD size, PVR, SVR
- Small VSD: Restrictive, high velocity jet, loud murmur
- Large VSD: Nonrestrictive, PVR determines shunt

**Natural History:**
- 30-50% close spontaneously (especially muscular)
- Large VSDs: CHF in infancy, Eisenmenger if uncorrected

**Indications for Closure:**
- Qp:Qs > 1.5-2.0:1
- Volume overload (LV dilation)
- Symptoms
- Endocarditis

### Atrial Septal Defect (ASD)

**Types:**
- Ostium secundum (75%): Central fossa ovalis
- Ostium primum (15%): Adjacent to AV valves, AVSD spectrum
- Sinus venosus (10%): Superior or inferior, associated with anomalous pulmonary veins
- Coronary sinus: Rare, unroofed coronary sinus

**Hemodynamics:**
- Left-to-right shunt due to RV compliance > LV compliance
- RV volume overload
- Pulmonary hypertension (late)

**Clinical Features:**
- Often asymptomatic in childhood
- Fixed split S2 (no respiratory variation)
- Flow murmur (pulmonary)
- May present in adulthood with AFib, stroke, RV failure

**Closure:**
- Qp:Qs > 1.5:1 or RV volume overload
- Secundum: Device closure (Amplatzer, Gore)
- Others: Surgical

### Patent Ductus Arteriosus (PDA)

**Normal Closure:**
- Functional: Hours after birth (↓PGE2, ↑O2)
- Anatomic: 2-3 weeks

**Persistent PDA:**
- More common in prematurity
- Left-to-right shunt (aorta to PA)
- Continuous "machinery" murmur at left clavicle
- Wide pulse pressure, bounding pulses

**Treatment:**
- Premature: Indomethacin/Ibuprofen (inhibit PGE)
- Term/older: Device closure or surgical ligation

## Cyanotic Defects - Detailed

### Tetralogy of Fallot

**Embryologic Basis:**
- Anterocephalad deviation of conal septum

**Spectrum:**
- "Pink Tet" (mild PS) to TOF with pulmonary atresia

**Pathophysiology:**
- Degree of cyanosis determined by RVOT obstruction
- VSD is usually nonrestrictive
- Systemic pressures in RV

**Tet Spells:**
- Hypercyanotic episodes
- ↓SVR (crying, feeding, fever) → ↑R→L shunt
- Treatment: Knee-chest position, O2, morphine, phenylephrine, beta-blocker

**Surgical Repair:**
- Complete repair: VSD closure + RVOT relief
- Usually performed in first year of life
- May need BT shunt first if PA hypoplasia

**Long-term Issues:**
- Pulmonary regurgitation (post-repair)
- RV dilation/dysfunction
- Arrhythmias
- Pulmonary valve replacement often needed

### Transposition of the Great Arteries

**Anatomy:**
- Aorta arises from morphologic RV (anterior, right)
- Pulmonary artery from morphologic LV (posterior, left)
- Parallel circulations

**Presentation:**
- Cyanosis at birth
- Requires mixing lesion for survival
- Egg-on-string cardiac silhouette (X-ray)

**Management:**
- PGE1 to keep PDA open
- Rashkind balloon atrial septostomy
- Arterial switch operation (Jatene)

### Single Ventricle Physiology

**Examples:**
- Tricuspid atresia
- Hypoplastic left heart syndrome (HLHS)
- Double inlet left ventricle

**Palliation (Staged):**
1. **Stage 1 (Norwood):** Aortic reconstruction, BT shunt or Sano
2. **Stage 2 (Glenn):** Superior cavopulmonary connection (SVC to PA)
3. **Stage 3 (Fontan):** Total cavopulmonary connection (IVC to PA)

**Fontan Physiology:**
- Passive pulmonary blood flow (no subpulmonary ventricle)
- Low cardiac output
- Central venous hypertension
- Late complications: Fontan failure, protein-losing enteropathy, liver disease`,
      keyTerms: [
        { term: 'Qp:Qs', definition: 'Ratio of pulmonary to systemic blood flow; measures shunt magnitude' },
        { term: 'Eisenmenger syndrome', definition: 'Reversal of shunt to R→L due to severe pulmonary hypertension from chronic overcirculation' },
        { term: 'endocardial cushion', definition: 'Embryonic structure forming AV valves and adjacent septa; defects cause AVSD' },
        { term: 'Fontan circulation', definition: 'Single ventricle palliation with passive pulmonary blood flow' },
        { term: 'Rashkind septostomy', definition: 'Balloon atrial septostomy to create ASD for mixing in TGA' },
        { term: 'tet spell', definition: 'Hypercyanotic episode in TOF due to increased right-to-left shunting' },
      ],
      clinicalNotes: 'Prostaglandin E1 is a lifesaver in duct-dependent lesions - always consider in a cyanotic newborn. Fixed split S2 is the hallmark of ASD. Tet spells require immediate treatment including knee-chest position and phenylephrine to increase SVR.',
    },
    4: {
      level: 4,
      summary: 'Congenital heart disease management requires detailed understanding of lesion-specific anatomy, hemodynamics, and surgical palliation strategies, with adult CHD emerging as a subspecialty addressing long-term sequelae of repaired and unrepaired defects.',
      explanation: `## Advanced Anatomic Concepts

### Segmental Approach to CHD

**Atrial Situs:**
- Solitus (normal): RA right, LA left
- Inversus: Mirror image
- Ambiguous (heterotaxy): Abnormal L/R patterning

**Ventricular Loop:**
- D-loop (normal): Morphologic RV to the right
- L-loop: Morphologic RV to the left

**Great Artery Relationship:**
- Normal: Aorta posterior-right, PA anterior-left
- TGA: Aorta anterior-right
- CCTGA: Aorta anterior-left

### Heterotaxy Syndromes

**Right Atrial Isomerism (Asplenia):**
- Bilateral right-sidedness
- Two morphologic right atria
- Complex CHD, TAPVR
- Asplenia → infection risk

**Left Atrial Isomerism (Polysplenia):**
- Bilateral left-sidedness
- AV block (lack of normal SA node)
- Less severe CHD

## Complex Surgical Considerations

### Shunt Procedures

| Shunt | Indication | Description |
|-------|------------|-------------|
| Modified BT | ↑ Pulmonary blood flow | Subclavian to PA with Gore-Tex |
| Central | ↑ Pulmonary blood flow | Aorta to PA |
| PA band | ↓ Pulmonary blood flow | Restrict PA flow in high-flow lesions |

### Single Ventricle Staging - Details

**Stage 1 (Norwood for HLHS):**
- Native aorta used as coronary perfusion source
- Neo-aorta from native PA + aortic arch reconstruction
- BT shunt or Sano (RV-PA conduit) for pulmonary flow

**Hybrid Stage 1:**
- PA banding + PDA stent + atrial septostomy
- Delays major surgery

**Stage 2 (Bidirectional Glenn/Hemi-Fontan):**
- SVC to PA end-to-side
- Age 4-6 months
- ↓Volume load on single ventricle

**Stage 3 (Fontan):**
- Completion of cavopulmonary circulation
- Lateral tunnel or extracardiac conduit
- Fenestration option (R→L pop-off)

### Fontan Complications

**Failing Fontan:**
- Protein-losing enteropathy (PLE)
- Plastic bronchitis
- Liver cirrhosis/hepatocellular carcinoma
- Atrial arrhythmias
- Thromboembolism
- Exercise intolerance

**Fontan-Associated Liver Disease (FALD):**
- Universal with long-standing Fontan
- Elevated central venous pressure → hepatic congestion
- Fibrosis, cirrhosis, HCC
- Consider heart transplant before liver becomes prohibitive

## Adult Congenital Heart Disease (ACHD)

### Growing Population

- ~1.4 million adults with CHD in US
- Outnumber pediatric CHD patients
- Require specialized lifelong care

### Common ACHD Presentations

**Repaired Tetralogy of Fallot:**
- Pulmonary regurgitation (absent pulmonary valve effect)
- RV dilation → dysfunction → failure
- Arrhythmias (VT, sudden death)
- Pulmonary valve replacement timing controversial

**Indications for PVR:**
- RV dilation (RVEDVi >150-170 mL/m2)
- RV dysfunction
- Symptoms (HF, arrhythmia)
- QRS >180 ms

**Coarctation of Aorta (Repaired):**
- Recoarctation or aneurysm at repair site
- Hypertension (often persistent)
- Bicuspid aortic valve (50-80%)
- Aortic aneurysm
- Berry aneurysms (circle of Willis)

**Ebstein Anomaly:**
- Apical displacement of tricuspid valve
- "Atrialized" right ventricle
- TR, RA dilation, arrhythmias
- Associated with WPW (accessory pathways)
- Repair: Cone procedure

### Eisenmenger Syndrome

**Pathophysiology:**
- Long-standing L→R shunt
- Pulmonary vascular disease development
- PVR > SVR → shunt reversal
- Cyanosis, polycythemia

**Management:**
- Do NOT close defect (right heart fails)
- Pulmonary vasodilators (endothelin antagonists, PDE5i, prostacyclins)
- Phlebotomy if symptomatic hyperviscosity (Hct >65%)
- Avoid dehydration, altitude, iron deficiency
- Consider heart-lung transplant

## Arrhythmias in CHD

### Mechanisms

**Macro-reentry:**
- Scar-related (post-surgical)
- Intra-atrial reentrant tachycardia (IART)
- Common in Fontan, Mustard/Senning, ASD repair

**Accessory Pathways:**
- Ebstein (multiple pathways)
- ccTGA

**Sinus Node Dysfunction:**
- Post-ASD repair
- Mustard/Senning
- Heterotaxy

### Management

- Antiarrhythmic drugs (limited efficacy)
- Catheter ablation (complex anatomy challenges)
- Pacing (epicardial often needed)
- ICD for sudden death prevention

## Pregnancy in CHD

### Risk Stratification (mWHO Classification)

| Risk Class | Examples | Pregnancy Risk |
|------------|----------|----------------|
| I | Small VSD, repaired ASD/VSD | Similar to general population |
| II | Unrepaired ASD, repaired TOF | Slightly increased |
| II-III | Mild LV dysfunction, ACHD with mild systemic RV | Significant |
| III | Mechanical valve, Fontan, cyanosis | High |
| IV | Severe PH, severe systemic ventricular dysfunction | Contraindicated |

### High-Risk Conditions

- Eisenmenger syndrome (30-50% maternal mortality)
- Severe aortic stenosis/coarctation
- Marfan with dilated aorta
- Fontan with complications`,
      keyTerms: [
        { term: 'segmental approach', definition: 'Systematic method to describe CHD anatomy: atrial situs, ventricular loop, great artery relationship' },
        { term: 'heterotaxy', definition: 'Abnormal left-right patterning resulting in isomerism of thoracoabdominal organs' },
        { term: 'Fontan-associated liver disease', definition: 'Hepatic congestion and fibrosis from elevated central venous pressure in Fontan circulation' },
        { term: 'cone procedure', definition: 'Surgical repair for Ebstein anomaly creating competent tricuspid valve' },
        { term: 'IART', definition: 'Intra-atrial reentrant tachycardia; common post-surgical arrhythmia in CHD' },
        { term: 'mWHO classification', definition: 'Modified WHO classification for maternal cardiovascular risk in pregnancy' },
      ],
      clinicalNotes: 'ACHD patients require specialized centers. Repaired TOF patients need lifelong surveillance for pulmonary valve replacement timing. Eisenmenger patients should never have defect closure - it is a death sentence. Pregnancy in CHD requires pre-conception counseling and multidisciplinary management.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CHD management spans fetal intervention through lifelong ACHD care, integrating advanced imaging, transcatheter innovations, genetic insights, and multidisciplinary approaches to optimize outcomes across the lifespan.',
      explanation: `## Current Guidelines and Evidence

### 2018 AHA/ACC Guideline for Adults with CHD

**Key Recommendations:**
1. Regional ACHD centers for moderate/complex CHD
2. Standardized terminology (AP classification)
3. Exercise testing for functional assessment
4. Pregnancy risk stratification (mWHO)
5. Endocarditis prophylaxis (specific indications)

### 2020 ESC Guidelines

**Updates:**
- CMR central to ACHD imaging
- BNP/NT-proBNP for surveillance
- Expanded transcatheter options
- Pulmonary hypertension management

## Advanced Imaging

### Cardiac MRI in CHD

**Essential Information:**
- Ventricular volumes and function (both ventricles)
- Myocardial fibrosis (scar mapping)
- Flow quantification (Qp:Qs)
- Pulmonary regurgitation fraction
- Great vessel anatomy

**When to Use:**
- Baseline after repair (TOF, ACHD)
- Serial surveillance (every 2-5 years)
- Pre-intervention planning
- Arrhythmia evaluation

### 3D Printing and Virtual Planning

**Applications:**
- Complex anatomy visualization
- Surgical planning
- Device sizing
- Training and education

### Fetal Echocardiography

**Indications:**
- Family history of CHD
- Maternal diabetes, phenylketonuria
- Fetal nuchal translucency increased
- Extracardiac anomalies
- Abnormal obstetric ultrasound

**Detection Rates:**
- Major defects: 50-80%
- Improves with specialized centers

## Transcatheter Interventions

### Valve Interventions

**Pulmonary Valve Replacement (TPVR):**
- Melody valve (Medtronic)
- SAPIEN (Edwards)
- Harmony (Medtronic) - native outflow
- Avoids sternotomy for valve replacement

**Indications:**
- Conduit dysfunction (stenosis/regurgitation)
- Native RVOT dysfunction (selected)
- RV dilation/dysfunction

**Tricuspid Valve:**
- Emerging options for Ebstein, post-repair TR
- Device modification for CHD anatomy

### Septal Defect Closure

**ASD Devices:**
- Amplatzer septal occluder
- Gore CARDIOFORM
- Sizing by TEE or ICE

**VSD Devices:**
- Muscular VSD closure
- Perimembranous (higher complication risk)
- Post-MI VSD (Amplatzer Muscular)

### Duct and Vessel Interventions

**PDA Occlusion:**
- Coils (small PDA)
- Amplatzer duct occluder

**Coarctation:**
- Balloon angioplasty
- Covered stents (CoA, recoarctation)
- Aortic arch stenting

### Fontan Interventions

**Fenestration Management:**
- Closure if good hemodynamics
- Sometimes left open intentionally

**Fontan Baffle Stenting:**
- For pathway obstruction

**Lymphatic Interventions:**
- Thoracic duct embolization
- Selective lymphatic ablation
- For PLE, plastic bronchitis

## Genetic Insights

### Syndromic CHD

| Syndrome | Gene/Chromosomal | CHD Association |
|----------|-----------------|-----------------|
| Down (Trisomy 21) | Chromosome 21 | AVSD (50%), VSD |
| Turner (45,X) | X chromosome | Coarctation, bicuspid AV |
| DiGeorge (22q11) | TBX1 | Conotruncal defects, interrupted arch |
| Noonan | PTPN11, RAS pathway | Pulmonary stenosis, HCM |
| Williams | 7q11 elastin | Supravalvular AS, PA stenosis |
| Alagille | JAG1, NOTCH2 | PA stenosis |
| Holt-Oram | TBX5 | ASD, VSD |
| Marfan | FBN1 | Aortic root dilation, MVP |

### Non-Syndromic CHD Genetics

**Copy Number Variants:**
- 10-20% of severe CHD
- Microarray recommended for CHD + extracardiac anomalies

**Single Gene Defects:**
- NOTCH1: Bicuspid AV, calcification
- GATA4: ASD, VSD
- NKX2-5: ASD + conduction defects
- MYH6: ASD, cardiomyopathy

**Polygenic Risk:**
- Most isolated CHD multifactorial
- Low recurrence risk (2-5% for first-degree relatives)

## Special Topics

### Fetal Cardiac Intervention

**Current Options:**
- Aortic valvuloplasty (critical AS, evolving HLHS)
- Pulmonary valvuloplasty (PA/IVS)
- Atrial septostomy (HLHS with restrictive atrial septum)

**Evidence:**
- MWAV trial: Some benefit in preventing HLHS progression
- Highly selected cases only
- Technical success improving

### Mechanical Circulatory Support in CHD

**Challenges:**
- Anatomy (systemic RV, single ventricle)
- Small patient size
- Prior surgeries

**Options:**
- ECMO (short-term)
- VAD (Berlin Heart EXCOR pediatric)
- Total artificial heart (limited)

**Fontan VAD:**
- Emerging concept for failing Fontan
- Cavopulmonary assist
- Bridge to transplant or destination

### Transplantation in CHD

**Indications:**
- Failing Fontan
- Systemic RV failure
- Severe ACHD with refractory symptoms

**Challenges:**
- Prior surgeries increase surgical complexity
- Sensitization from blood products
- Higher waitlist mortality
- May need combined heart-liver

**Outcomes:**
- Lower post-transplant survival than non-CHD
- Improving with experience

## Emerging Therapies and Research

### Regenerative Medicine

**Stem Cell Therapy:**
- TICAP, PERSEUS trials in single ventricle
- Modest improvement in EF
- Optimal cell type, timing unclear

**Tissue Engineering:**
- Bioengineered valves and conduits
- Growth potential (pediatric advantage)
- Not yet clinical

### Precision Medicine

**Genetic Testing:**
- Whole exome/genome sequencing
- Identifies cause in 20-30%
- Impacts recurrence counseling
- May predict outcomes

**Pharmacogenomics:**
- Warfarin dosing in CHD
- Beta-blocker response

### Novel Medical Therapies

**Heart Failure in CHD:**
- ACHD-specific HF trials lacking
- SGLT2 inhibitors being studied
- Sacubitril/valsartan extrapolated

**Pulmonary Hypertension in CHD:**
- ERA, PDE5i, prostacyclins used
- CHD-specific evidence from subgroups
- PAH-CHD recognized category`,
      keyTerms: [
        { term: 'AP classification', definition: 'Anatomic and physiologic classification system for ACHD severity' },
        { term: 'TPVR', definition: 'Transcatheter pulmonary valve replacement; avoids sternotomy for valve failure' },
        { term: '22q11 deletion', definition: 'DiGeorge/velocardiofacial syndrome; conotruncal defects, thymic aplasia' },
        { term: 'lymphatic intervention', definition: 'Embolization or ablation of lymphatic channels for Fontan complications' },
        { term: 'Melody valve', definition: 'First FDA-approved transcatheter pulmonary valve for conduit dysfunction' },
        { term: 'biventricular conversion', definition: 'Surgical strategy to transition from single ventricle to two-ventricle circulation' },
      ],
      clinicalNotes: `Key clinical pearls for CHD management:

1. **Newborn Cyanosis**: PGE1 is lifesaving in duct-dependent lesions; start empirically if CHD suspected
2. **Pulse Ox Screening**: Universal newborn screening catches critical CHD; follow up abnormals promptly
3. **ACHD Care**: Moderate/complex ACHD needs regional specialized centers; general cardiologists miss complications
4. **TOF Follow-up**: Pulmonary regurgitation leads to RV failure; CMR quantification guides PVR timing
5. **Fontan Surveillance**: Liver disease is universal; screen with MRI/elastography and AFP
6. **Pregnancy**: Pre-conception counseling essential; some conditions contraindicate pregnancy (Eisenmenger)
7. **Arrhythmia**: Common cause of morbidity in ACHD; catheter ablation challenging but improving
8. **Genetics**: Recommend microarray for CHD + extracardiac anomalies; recurrence counseling important
9. **Exercise**: Most CHD patients should exercise; formal testing guides recommendations
10. **Endocarditis Prophylaxis**: Only for specific high-risk lesions and procedures; know the guidelines`,
    },
  },

  media: [
    {
      id: 'chd-anatomy-diagram',
      type: 'diagram',
      filename: 'congenital-heart-defects-overview.svg',
      title: 'Common Congenital Heart Defects',
      description: 'Visual guide to VSD, ASD, TOF, TGA anatomy',
    },
    {
      id: 'fontan-stages',
      type: 'diagram',
      filename: 'fontan-palliation-stages.svg',
      title: 'Single Ventricle Palliation Stages',
      description: 'Norwood, Glenn, and Fontan procedures',
    },
    {
      id: 'segmental-approach',
      type: 'diagram',
      filename: 'segmental-approach-chd.svg',
      title: 'Segmental Approach to CHD',
      description: 'Systematic description of cardiac anatomy',
    },
  ],

  citations: [
    {
      id: 'aha-achd-2018',
      type: 'article',
      title: '2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease',
      authors: ['Stout KK', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000603',
    },
    {
      id: 'esc-chd-2020',
      type: 'article',
      title: '2020 ESC Guidelines for the management of adult congenital heart disease',
      authors: ['Baumgartner H', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'moss-adams-hd',
      type: 'textbook',
      title: "Moss and Adams' Heart Disease in Infants, Children, and Adolescents",
      source: 'Wolters Kluwer',
      chapter: 'Congenital Heart Disease',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'procedure-cardiac-catheterization', targetType: 'topic', relationship: 'related', label: 'Cardiac Catheterization' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'condition-pulmonary-hypertension', targetType: 'condition', relationship: 'related', label: 'Pulmonary Hypertension' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['congenital', 'pediatric cardiology', 'cardiac surgery', 'ACHD'],
    keywords: ['VSD', 'ASD', 'TOF', 'TGA', 'Fontan', 'Eisenmenger', 'cyanosis', 'shunt'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default congenitalHeartDisease;
