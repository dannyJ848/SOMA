/**
 * Aortic Aneurysm - Comprehensive Educational Content
 *
 * Covers pathophysiology, screening, surveillance, and management
 * of abdominal and thoracic aortic aneurysms.
 */

import { EducationalContent } from '../../types';

export const aorticAneurysm: EducationalContent = {
  id: 'condition-aortic-aneurysm',
  type: 'condition',
  name: 'Aortic Aneurysm',
  nameEs: 'Aneurisma Aórtico',
  alternateNames: ['AAA', 'Abdominal Aortic Aneurysm', 'TAA', 'Thoracic Aortic Aneurysm', 'Aortic Dilation'],
  hpoId: 'HP:0004942',

  levels: {
    1: {
      level: 1,
      summary: 'An aortic aneurysm is a bulge or ballooning in the aorta (your body\'s main blood vessel), which can be dangerous if it grows too large and bursts.',
      explanation: `The aorta is the largest blood vessel in your body. It carries blood from your heart and branches out to supply blood to the rest of your body. An aneurysm is when a weak spot in the wall of the aorta bulges out, like a balloon.

**Where do aortic aneurysms occur?**
- **Abdominal aortic aneurysm (AAA)**: In the belly area (most common)
- **Thoracic aortic aneurysm (TAA)**: In the chest area

**Why are aneurysms dangerous?**
- As the aneurysm grows, the wall stretches thinner
- Like an over-inflated balloon, it can burst (rupture)
- A ruptured aneurysm causes massive internal bleeding
- This is often fatal if not treated immediately

**What causes aneurysms?**
- Atherosclerosis (fatty buildup in arteries) - most common
- High blood pressure
- Smoking (major risk factor)
- Family history
- Older age (usually over 65)
- Being male (more common in men)
- Some genetic conditions (Marfan syndrome, Ehlers-Danlos)

**What are the warning signs?**
Most aneurysms have NO symptoms until they rupture. That's why they're called "silent killers."

When symptoms occur, they may include:
- Pulsating feeling in the belly (AAA)
- Back pain, belly pain, or flank pain
- Chest pain, back pain, or cough (TAA)

**Signs of rupture (emergency!):**
- Sudden, severe abdominal or back pain
- Dizziness or fainting
- Rapid heartbeat
- Nausea, vomiting
- Clammy skin, sweating

**How are aneurysms found and treated?**
- Often found by chance during imaging for other reasons
- Screening with ultrasound recommended for men 65-75 who have smoked
- Small aneurysms: Watch and wait, control blood pressure, stop smoking
- Large aneurysms: Surgery to repair before rupture
  - Open surgery: Replace with a graft
  - Endovascular repair: Place a stent-graft from inside the artery`,
      keyTerms: [
        { term: 'aorta', definition: 'The largest blood vessel in your body that carries blood from your heart to the rest of your body' },
        { term: 'aneurysm', definition: 'A bulge or ballooning in a blood vessel caused by weakness in the vessel wall' },
        { term: 'rupture', definition: 'When an aneurysm bursts open, causing life-threatening internal bleeding' },
        { term: 'stent-graft', definition: 'A tube-like device placed inside the aorta to reinforce the weak area and prevent rupture' },
      ],
      analogies: [
        'An aneurysm is like a weak spot in a garden hose that bulges out when water pressure is high.',
        'A growing aneurysm is like a balloon being blown up - eventually, it will pop if it gets too big.',
        'The aorta is like the trunk of a tree, with branches going to all parts of the body.',
      ],
      examples: [
        'A 70-year-old man who smoked for 40 years has an ultrasound during a checkup that shows a 4 cm bulge in his abdominal aorta.',
        'A woman with Marfan syndrome has regular imaging to monitor her aorta because people with this condition are prone to aneurysms.',
      ],
    },
    2: {
      level: 2,
      summary: 'Aortic aneurysm is focal dilation of the aorta to >1.5 times normal diameter, most commonly affecting the infrarenal abdominal aorta in older male smokers, requiring surveillance based on size and repair when rupture risk exceeds surgical risk.',
      explanation: `## Understanding Aortic Aneurysms

### Definition
- Aneurysm: Focal dilation >50% above normal diameter
- Normal abdominal aorta: ~2 cm
- AAA definition: >3 cm diameter

### Types by Location

**Abdominal Aortic Aneurysm (AAA):**
- 80% of aortic aneurysms
- Usually infrarenal (below kidney arteries)
- Associated with atherosclerosis
- Male:female ratio 4-6:1

**Thoracic Aortic Aneurysm (TAA):**
- Ascending, arch, or descending aorta
- More often associated with genetic syndromes
- Higher risk of dissection

### Risk Factors

**AAA:**
- Smoking (strongest modifiable factor)
- Age >65
- Male sex
- Caucasian race
- Family history (first-degree relative with AAA)
- Atherosclerosis (CAD, PAD)
- Hypertension
- Hyperlipidemia

**TAA:**
- Genetic syndromes (Marfan, Loeys-Dietz, Ehlers-Danlos)
- Bicuspid aortic valve
- Aortic coarctation
- Family history
- Hypertension

### Natural History

**Growth Rates:**
- Small AAA (<4 cm): 1-4 mm/year
- Larger AAA: Faster growth
- Smoking accelerates growth
- "Law of Laplace": Larger vessels = greater wall tension

**Rupture Risk by Size (AAA):**

| Diameter | Annual Rupture Risk |
|----------|---------------------|
| <4 cm | ~0% |
| 4-5 cm | 0.5-1% |
| 5-6 cm | 3-15% |
| 6-7 cm | 10-20% |
| >7 cm | 20-40% |

### Screening

**USPSTF Recommendations:**
- One-time ultrasound screening for men aged 65-75 who have ever smoked
- Selective screening for men 65-75 who have never smoked
- No recommendation for women (insufficient evidence)

### Clinical Presentation

**Most are asymptomatic:**
- Found incidentally on imaging
- Found on physical exam (pulsatile abdominal mass)

**Symptomatic (concerning for expansion/impending rupture):**
- Abdominal, back, or flank pain
- New or worsening pain
- May indicate contained rupture

**Ruptured AAA (emergency):**
- Severe abdominal/back pain
- Hypotension
- Syncope
- Classic triad: Pain + hypotension + pulsatile mass (present in <50%)
- 80-90% mortality if not emergently repaired

### Surveillance

| AAA Size | Surveillance Interval |
|----------|----------------------|
| 3.0-3.9 cm | Every 3 years |
| 4.0-4.9 cm | Every 12 months |
| 5.0-5.4 cm | Every 6 months |

### Treatment

**Medical Management:**
- Smoking cessation (most important!)
- Blood pressure control (target <130/80)
- Statin therapy
- Avoid fluoroquinolones (may increase rupture risk)

**Repair Thresholds:**
- AAA: ≥5.5 cm (men), ≥5.0 cm (women)
- TAA: ≥5.5 cm (or 5.0 cm with connective tissue disorder)
- Rapid growth (>1 cm/year)
- Symptoms
- Saccular morphology

**Repair Options:**
1. **Open surgical repair:** Laparotomy, cross-clamp, graft replacement
2. **Endovascular repair (EVAR):** Femoral access, stent-graft deployment

| Feature | Open Repair | EVAR |
|---------|-------------|------|
| Perioperative mortality | 4-5% | 1-2% |
| Long-term durability | Excellent | Requires surveillance |
| Reintervention | Rare | 20-30% at 5 years |
| Recovery | 6-12 weeks | 1-2 weeks |`,
      keyTerms: [
        { term: 'infrarenal', definition: 'Below the kidney arteries; the most common location for abdominal aortic aneurysms' },
        { term: 'EVAR', definition: 'Endovascular aneurysm repair; minimally invasive repair using a stent-graft placed through the femoral artery' },
        { term: 'Law of Laplace', definition: 'Physical principle explaining why larger aneurysms have greater wall tension and higher rupture risk' },
        { term: 'contained rupture', definition: 'When an aneurysm partially ruptures but bleeding is temporarily contained by surrounding tissue' },
        { term: 'surveillance', definition: 'Regular imaging to monitor aneurysm size and growth rate' },
      ],
      analogies: [
        'Law of Laplace is like why a larger balloon is easier to pop - more surface area means more force on the wall.',
        'EVAR is like putting a liner inside a weak pipe instead of digging it up and replacing it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Aortic aneurysm pathogenesis involves matrix metalloproteinase-mediated degradation of elastic fibers and collagen, with rupture risk determined by wall stress exceeding wall strength; management includes surveillance imaging based on size, medical optimization, and repair (EVAR or open) when threshold diameter is reached or symptoms develop.',
      explanation: `## Pathophysiology

### Structural Changes

**Medial Degeneration:**
- Elastic fiber fragmentation
- Smooth muscle cell apoptosis
- Extracellular matrix degradation
- Increased collagen (stiffer, weaker wall)

**Molecular Mechanisms:**
- Matrix metalloproteinases (MMP-2, MMP-9) elevated
- Tissue inhibitors of metalloproteinases (TIMPs) decreased
- Inflammatory cell infiltration (macrophages, lymphocytes)
- Oxidative stress

**Wall Stress (Law of Laplace):**
- Wall tension = (Pressure × Radius) / (2 × Wall thickness)
- Larger diameter = greater wall stress
- Explains exponential rupture risk with size

### AAA vs TAA Differences

**AAA:**
- Atherosclerosis-associated
- Infrarenal predominance (less vasa vasorum)
- Inflammatory infiltrate
- Male predominance

**TAA:**
- More genetic/degenerative
- Cystic medial necrosis
- Associated with bicuspid aortic valve (ascending)
- Less inflammatory

## Genetic Syndromes

### Marfan Syndrome
- FBN1 mutation (fibrillin-1)
- Ascending aorta dilation
- Root enlargement with aortic regurgitation
- Repair threshold: 5.0 cm (or 4.5 cm with family history of dissection)
- Beta-blocker or ARB for medical therapy

### Loeys-Dietz Syndrome
- TGFBR1/2, SMAD3 mutations
- Aggressive aortopathy
- Arterial tortuosity
- Repair threshold: 4.0-4.5 cm
- More aggressive surveillance

### Ehlers-Danlos (Vascular Type IV)
- COL3A1 mutation (type III collagen)
- Arterial fragility
- Spontaneous rupture
- Surgery high risk; medical management preferred

### Turner Syndrome
- 45,X karyotype
- Bicuspid aortic valve common
- Coarctation
- Aortic dilation relative to body size
- Use aortic size index (ASI) for decisions

## Diagnosis and Surveillance

### Imaging Modalities

**Ultrasound:**
- Screening modality of choice for AAA
- Operator-dependent
- Limited for suprarenal or thoracic

**CT Angiography (CTA):**
- Gold standard for pre-operative planning
- Detailed anatomy
- Assesses branch vessels
- Radiation and contrast exposure

**MR Angiography (MRA):**
- Alternative to CTA
- No radiation
- Gadolinium or non-contrast techniques

**Echocardiography:**
- Ascending aorta and root assessment
- Transthoracic or transesophageal

### Pre-Repair Evaluation

**CTA Elements:**
- Maximum diameter (orthogonal to centerline)
- Length and angulation of neck
- Access vessels (iliacs, femorals)
- Branch vessel involvement
- Thrombus, calcium distribution

**Anatomy for EVAR:**
- Adequate landing zones (proximal and distal)
- Appropriate neck length (>15 mm)
- Neck angulation (<60°)
- Access vessel diameter (>7 mm)

## Treatment Strategies

### Medical Management

**All Patients:**
- Smoking cessation
- Blood pressure control (<130/80 mmHg)
- Statin therapy (LDL <70 mg/dL)
- Antiplatelet therapy (if atherosclerotic)

**Fluoroquinolone Caution:**
- Epidemiologic association with aortic dissection/rupture
- FDA warning
- Avoid in patients with aneurysms if alternatives exist

**Doxycycline (MMP inhibitor):**
- Theoretical benefit
- Clinical trials (PHAST, AARDVARK) negative
- Not recommended

### EVAR vs Open Repair

**EVAR Advantages:**
- Lower perioperative mortality
- Shorter hospital stay
- Faster recovery
- Suitable for high-risk patients

**EVAR Limitations:**
- Anatomic requirements
- Endoleaks (persistent flow outside graft)
- Need for lifelong surveillance
- Secondary interventions common

**Open Repair Advantages:**
- Durable long-term
- No surveillance after recovery
- Works for complex anatomy

**Open Repair Limitations:**
- Higher perioperative risk
- Longer recovery
- Major surgery with complications

### Trial Evidence

**EVAR-1 (2010):**
- EVAR vs open for AAA ≥5.5 cm
- Early survival advantage for EVAR
- Long-term: No difference in overall survival
- More reinterventions with EVAR

**OVER Trial:**
- Similar findings to EVAR-1
- EVAR benefit diminished over time

**DREAM Trial:**
- Short-term mortality benefit for EVAR
- Long-term outcomes similar

### Endoleaks

| Type | Source | Management |
|------|--------|------------|
| I | Seal zone (proximal/distal) | Requires treatment |
| II | Branch vessels (lumbar, IMA) | Usually observe |
| III | Graft defect or separation | Requires treatment |
| IV | Graft porosity | Self-limited |
| V | Endotension (sac expansion without leak) | Controversial |

## Ruptured AAA

### Presentation
- Severe abdominal/back pain
- Hemodynamic instability
- Pulsatile mass (not always palpable)
- Classic triad: Pain + hypotension + pulsatile mass (<50%)

### Management
- Immediate vascular surgery consultation
- Permissive hypotension (target SBP 70-90)
- Avoid over-resuscitation
- Emergency repair (open or EVAR)
- Mortality: 30-50% with repair, >80% without`,
      keyTerms: [
        { term: 'matrix metalloproteinases', definition: 'Enzymes that degrade structural proteins in the aortic wall, contributing to aneurysm formation' },
        { term: 'endoleak', definition: 'Persistent blood flow outside the stent-graft but within the aneurysm sac after EVAR' },
        { term: 'cystic medial necrosis', definition: 'Pathologic finding of mucoid degeneration and smooth muscle loss in the aortic media; seen in TAA' },
        { term: 'landing zone', definition: 'Healthy aortic segment where the stent-graft seals against the vessel wall' },
        { term: 'permissive hypotension', definition: 'Deliberately maintaining lower blood pressure to reduce bleeding in ruptured aneurysm' },
      ],
      clinicalNotes: 'Fluoroquinolones should be avoided in patients with known aortic aneurysms when alternatives exist, based on FDA warning and epidemiologic studies. For ruptured AAA, EVAR is increasingly used and may have mortality benefit if anatomically suitable. Type II endoleaks are common and usually managed expectantly unless sac expansion occurs.',
    },
    4: {
      level: 4,
      summary: 'Aortic aneurysm management integrates biomechanical rupture risk modeling, genetic syndrome identification, contemporary EVAR technology with branched and fenestrated devices for complex anatomy, and evidence-based thresholds informed by randomized trials (EVAR-1, OVER, DREAM), with attention to surveillance protocols, endoleak management, and special considerations for thoracoabdominal disease.',
      explanation: `## Advanced Pathophysiology

### Biomechanical Modeling

**Wall Stress Analysis:**
- Finite element analysis
- Patient-specific 3D modeling
- Peak wall stress predicts rupture
- May improve risk stratification beyond diameter

**Rupture Risk Factors:**
- Maximum diameter (strongest predictor)
- Rapid expansion (>1 cm/year)
- Female sex (higher wall stress for size)
- Smoking (continued)
- COPD
- Saccular morphology
- Eccentric thrombus
- Blebs or ulcerations

### Molecular Targets

**MMP Inhibition:**
- Doxycycline trials (PHAST, AARDVARK) negative
- Other MMP inhibitors in development

**TGF-β Modulation:**
- ARBs (losartan) may reduce aneurysm growth
- Pediatric Marfan trials supportive
- Adult data less convincing

**Anti-Inflammatory:**
- Statins (anti-inflammatory effects)
- Potential growth-limiting effect (observational data)

## Thoracic Aortic Aneurysm

### Classification by Segment

**Ascending Aorta:**
- Aortic root (sinuses of Valsalva)
- Tubular ascending aorta
- Often associated with aortic valve disease

**Aortic Arch:**
- Involves great vessels
- Complex surgical anatomy

**Descending Thoracic:**
- Distal to left subclavian
- TEVAR amenable

### Genetic Evaluation

**Indications for Testing:**
- TAA at young age (<50)
- Family history of aortic disease
- Syndromic features (Marfan, Loeys-Dietz)
- Bicuspid aortic valve with dilation
- Root dilation pattern

**Genes:**
- FBN1 (Marfan)
- TGFBR1/2, SMAD3 (Loeys-Dietz)
- COL3A1 (vascular EDS)
- ACTA2, MYH11 (familial TAA)
- LOX, PRKG1

**Cascade Screening:**
- First-degree relatives of patients with genetic TAA
- Baseline imaging and follow-up based on findings

### Ascending Aortic Surgery

**Indications:**
- ≥5.5 cm in degenerative disease
- ≥5.0 cm with connective tissue disorder or bicuspid valve with risk factors
- ≥4.5 cm if undergoing aortic valve surgery
- ≥4.0-4.5 cm in Loeys-Dietz

**Procedures:**
- Supracoronary graft (if root normal)
- Valve-sparing root replacement (David, Yacoub)
- Bentall (composite valve-graft)
- Ross procedure considerations

### TEVAR (Thoracic Endovascular Aortic Repair)

**Indications:**
- Descending thoracic aneurysm ≥5.5 cm
- Traumatic aortic injury
- Complicated type B dissection
- Penetrating atherosclerotic ulcer

**Considerations:**
- Landing zone coverage
- Left subclavian coverage (revascularize if needed)
- Spinal cord ischemia risk
- Access vessel adequacy

## Complex Aortic Disease

### Thoracoabdominal Aneurysm (TAAA)

**Crawford Classification:**
| Extent | Description |
|--------|-------------|
| I | Distal to left subclavian to above renals |
| II | Left subclavian to aortic bifurcation |
| III | Mid-descending to aortic bifurcation |
| IV | Below diaphragm to aortic bifurcation |
| V | Below 6th rib to above renals |

**Open Repair:**
- Thoracoabdominal incision
- Sequential clamping
- Reimplantation of visceral and renal arteries
- Significant morbidity (paraplegia, renal failure)

**Endovascular Options:**
- Branched endografts (custom-made)
- Fenestrated endografts
- Physician-modified endografts (PMEG)
- Parallel grafts (chimney, periscope)

### Spinal Cord Protection

**Risk Factors for Spinal Cord Ischemia:**
- Extent of coverage
- Prior abdominal aortic surgery
- Hypotension
- Renal failure

**Prevention Strategies:**
- Staged repair (if extensive)
- Cerebrospinal fluid drainage
- Permissive hypertension (MAP >80-90)
- Avoiding hypoperfusion
- Monitoring with MEPs (motor evoked potentials)

### Juxtarenal and Pararenal AAA

**Definitions:**
- Juxtarenal: Extends to renal arteries
- Pararenal: Involves one or both renal arteries
- Suprarenal: Above renals (may involve SMA, celiac)

**Treatment:**
- Open repair with suprarenal clamping
- Fenestrated EVAR (FEVAR)
- Chimney/snorkel grafts

## Long-Term Surveillance

### Post-EVAR Follow-Up

**Imaging Protocol:**
- CTA at 1 month, 12 months, then annually
- Transition to duplex if stable and no endoleak
- Lifelong surveillance required

**Concerning Findings:**
- Sac expansion (>5 mm)
- Type I or III endoleak
- Graft migration
- Limb occlusion

### Post-Open Repair

- Less intensive surveillance
- Consider imaging at 5 years
- Monitor for anastomotic aneurysm

### Graft Infections

**Risk Factors:**
- Contaminated field
- Groin incisions
- Immunosuppression

**Presentation:**
- Fever, leukocytosis
- Bleeding (aorto-enteric fistula)
- Sinus tract
- PET-CT for diagnosis

**Management:**
- Antibiotics
- Graft excision (often required)
- Extra-anatomic bypass
- In-situ reconstruction with rifampin-soaked graft or homograft`,
      keyTerms: [
        { term: 'fenestrated EVAR', definition: 'Endovascular repair using a graft with holes (fenestrations) aligned with branch vessels like renals' },
        { term: 'branched endograft', definition: 'Endovascular device with side branches to maintain flow to visceral arteries in complex aneurysm repair' },
        { term: 'cerebrospinal fluid drainage', definition: 'Procedure to reduce spinal cord pressure and improve perfusion during thoracoabdominal aortic surgery' },
        { term: 'valve-sparing root replacement', definition: 'Surgical technique to replace dilated aortic root while preserving native aortic valve (David or Yacoub procedure)' },
        { term: 'aorto-enteric fistula', definition: 'Abnormal connection between aorta and bowel, often a late complication of aortic surgery presenting with GI bleeding' },
      ],
      clinicalNotes: 'Genetic testing and cascade screening are critical for patients with TAA, especially those with ascending involvement at young ages or syndromic features. For complex aortic disease, multidisciplinary aortic teams in high-volume centers achieve best outcomes. Spinal cord protection strategies (CSF drainage, staged repair, maintaining MAP) are essential for extensive thoracoabdominal repair.',
    },
    5: {
      level: 5,
      summary: 'Contemporary aortic aneurysm management incorporates advanced imaging for rupture risk prediction, genetic stratification for individualized surveillance, sophisticated endovascular technologies (fenestrated, branched, physician-modified grafts), and emerging pharmacotherapies, with quality metrics emphasizing outcomes at specialized aortic centers and integration of multidisciplinary expertise for complex disease.',
      explanation: `## Precision Risk Assessment

### Biomechanical Analysis

**Finite Element Modeling:**
- Patient-specific 3D reconstruction from CTA
- Wall stress calculation
- Rupture potential index
- May identify high-risk smaller aneurysms

**Shape Analysis:**
- Asymmetry index
- Maximum curvature
- Wall thickness mapping
- Intraluminal thrombus characteristics

### Biomarkers

**Circulating MMP:**
- MMP-9 levels correlate with growth
- Not yet clinical standard

**D-dimer:**
- Elevated in aneurysm patients
- May indicate thrombus turnover

**Genetic Risk Scores:**
- Polygenic risk scores in development
- May improve prediction

### Advanced Imaging

**4D Flow MRI:**
- Hemodynamic flow patterns
- Wall shear stress
- Predicts growth and remodeling

**PET-CT:**
- 18F-FDG uptake indicates inflammation
- May identify unstable aneurysms
- Research application

## Genetic Aortopathies

### Precision Surveillance

**Gene-Specific Guidelines:**

| Gene | Syndrome | Threshold | Surveillance Interval |
|------|----------|-----------|----------------------|
| FBN1 | Marfan | 5.0 cm (root) | Annual TTE, MRI q2-3yr |
| TGFBR1/2 | Loeys-Dietz | 4.0-4.2 cm | Annual imaging, CTA or MRA |
| SMAD3 | Loeys-Dietz 3 | 4.5 cm | Annual |
| COL3A1 | Vascular EDS | Conservative | Annual CTA head to pelvis |
| ACTA2 | Familial TAA | 4.5-5.0 cm | Annual MRA |

**Aortic Size Index:**
- For patients with abnormal body size (Turner, Marfan)
- ASI = Diameter / Body Surface Area
- Thresholds adjust for body size

### Pregnancy Management

**High Risk Conditions:**
- Marfan syndrome
- Loeys-Dietz syndrome
- Turner syndrome
- Bicuspid aortic valve with dilation

**Recommendations:**
- Pre-pregnancy counseling
- Genetic counseling
- Aorta <4.0-4.5 cm before pregnancy (gene-dependent)
- Beta-blocker throughout pregnancy
- Monthly echo in third trimester
- Vaginal delivery with assisted second stage if aorta <4.5 cm
- C-section if aorta >4.5 cm or rapid growth

## Advanced Endovascular Techniques

### Fenestrated EVAR (FEVAR)

**Indications:**
- Juxtarenal and pararenal AAA
- Short infrarenal neck
- Inadequate for standard EVAR

**Technical Considerations:**
- Custom device manufacturing (6-12 weeks)
- Precise orientation during deployment
- Branch vessel stenting

**Outcomes:**
- Technical success >95%
- 30-day mortality 2-3%
- Branch patency >90% at 5 years

### Branched Endografts

**Applications:**
- Thoracoabdominal aneurysms
- Aortic arch disease
- Complex anatomies

**Types:**
- Custom devices (Cook, Gore)
- Physician-modified endografts (PMEG)
- Off-the-shelf branched (in development)

**Spinal Cord Ischemia with TEVAR:**
- Risk 3-10% depending on coverage
- Strategies:
  - Staged repair
  - CSF drainage
  - MAP augmentation
  - Collateral preservation

### Parallel Grafts (Chimney/Snorkel)

**Technique:**
- Branch vessel stent placed alongside main body
- Creates gutter between devices
- Higher endoleak risk

**Use Cases:**
- Emergency situations
- When fenestrated not available
- Salvage procedures

### Endovascular Arch Repair

**Total Arch Replacement:**
- Hybrid (debranching + TEVAR)
- Branched arch devices (investigational)
- Zone 0 landing

**Challenges:**
- Stroke risk
- Great vessel management
- Type Ia endoleak

## Pharmacotherapy Frontiers

### Aneurysm Growth Reduction

**ACE Inhibitors/ARBs:**
- TGF-β pathway modulation
- Some observational data supportive
- Marfan-specific trials (atenolol vs losartan)
- Losartan may reduce aortic root growth

**Statins:**
- Anti-inflammatory effects
- Observational data suggests reduced growth
- No RCT evidence

**Doxycycline:**
- MMP inhibition
- PHAST, AARDVARK trials negative for AAA growth
- Not recommended

### Novel Targets

**Anti-Inflammatory:**
- Targeting macrophage infiltration
- NLRP3 inflammasome
- IL-1β inhibition

**Smooth Muscle Cell Protection:**
- Preventing apoptosis
- Promoting phenotype stability

**Gene Therapy:**
- Early research phase
- Targeted delivery to aortic wall

## Quality and Outcomes

### Volume-Outcome Relationship

**High-Volume Centers:**
- Better outcomes for complex repair
- Multidisciplinary expertise
- Complication management

**Regionalization:**
- Arguments for concentrating complex cases
- Emergency cases need local capability
- Telemedicine for consultation

### Quality Metrics

**EVAR:**
- 30-day mortality <2%
- Technical success >95%
- Freedom from secondary intervention

**Open Repair:**
- 30-day mortality <5%
- Myocardial infarction <5%
- Renal failure <10%

### Patient Selection

**Risk Scores:**
- SVS risk calculator
- Medicare risk model
- NSQIP surgical risk calculator

**Shared Decision-Making:**
- Life expectancy
- Quality of life priorities
- Surveillance burden acceptability

## Future Directions

### Device Innovation

**Lower-Profile Devices:**
- Smaller delivery systems
- Access for smaller patients

**Off-the-Shelf Branch Devices:**
- Reduce custom manufacturing time
- Standard anatomic variants

**Bioresorbable Scaffolds:**
- Research phase
- Potential for growing vessels

### Digital Health

**Remote Surveillance:**
- Home-based imaging
- AI image interpretation
- Wearable monitoring for rupture detection

### Precision Medicine Integration

**Decision Algorithms:**
- Combine genetics, imaging, biomarkers
- Personalized repair thresholds
- Growth trajectory prediction`,
      keyTerms: [
        { term: 'finite element analysis', definition: 'Computational method to model wall stress distribution in aneurysms for patient-specific rupture risk prediction' },
        { term: 'aortic size index', definition: 'Ratio of aortic diameter to body surface area; used to adjust thresholds in patients with abnormal body size' },
        { term: 'physician-modified endograft', definition: 'Off-the-shelf device modified intraoperatively to add fenestrations or branches for complex anatomy' },
        { term: 'zone 0 landing', definition: 'Endovascular landing zone in the ascending aorta, proximal to the innominate artery' },
        { term: '4D flow MRI', definition: 'Advanced MRI technique visualizing blood flow patterns and wall shear stress over time' },
        { term: 'cascade screening', definition: 'Systematic genetic testing and imaging of first-degree relatives of patients with heritable aortic disease' },
      ],
      clinicalNotes: `Key clinical pearls for advanced aortic aneurysm management:

1. **Genetic testing matters**: For TAA, especially in young patients or those with syndromic features, genetic testing guides surveillance intensity and repair thresholds. Cascade screening of relatives is essential.

2. **Volume-outcome relationship**: Complex aortic repair (TAAA, branched/fenestrated) should be performed at high-volume centers with multidisciplinary aortic teams.

3. **Fenestrated/branched EVAR expands options**: Patients previously considered open-only can now be treated endovascularly with acceptable outcomes at experienced centers.

4. **Spinal cord protection is critical**: For extensive thoracoabdominal repair, staged procedures, CSF drainage, and maintaining perfusion pressure reduce paraplegia risk.

5. **Pregnancy in aortopathy**: Pre-pregnancy counseling, genetic testing, and close surveillance are mandatory. Delivery planning depends on aortic diameter and condition.

6. **Pharmacotherapy is supportive**: Beta-blockers, ACEi/ARBs, and statins are recommended, but no drug has proven to significantly limit aneurysm growth in RCTs.

7. **Avoid fluoroquinolones**: Based on FDA warning and epidemiologic data, prefer alternative antibiotics in patients with known aortic disease.

8. **Biomechanical analysis is emerging**: Beyond diameter, wall stress analysis and shape parameters may better predict rupture risk in borderline cases.`,
    },
  },

  media: [
    {
      id: 'aaa-anatomy',
      type: 'diagram',
      filename: 'aaa-anatomy.svg',
      title: 'Abdominal Aortic Aneurysm Anatomy',
      description: 'Location and classification of abdominal aortic aneurysms',
    },
    {
      id: 'evar-procedure',
      type: 'diagram',
      filename: 'evar-procedure.svg',
      title: 'EVAR Procedure',
      description: 'Steps of endovascular aneurysm repair',
    },
    {
      id: 'taaa-crawford',
      type: 'diagram',
      filename: 'taaa-crawford.svg',
      title: 'Crawford Classification',
      description: 'Classification of thoracoabdominal aortic aneurysms',
    },
  ],

  citations: [
    {
      id: 'svs-aaa-guidelines',
      type: 'article',
      title: 'SVS Clinical Practice Guidelines for the Management of Abdominal Aortic Aneurysms',
      source: 'Journal of Vascular Surgery',
    },
    {
      id: 'evar-1-trial',
      type: 'article',
      title: 'Endovascular versus Open Repair of Abdominal Aortic Aneurysm',
      authors: ['EVAR Trial Participants'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa0909305',
    },
    {
      id: 'acc-aha-taa-2022',
      type: 'article',
      title: 'ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease',
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'condition-peripheral-artery-disease', targetType: 'condition', relationship: 'related', label: 'Peripheral Artery Disease' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'structure-aorta', targetType: 'structure', relationship: 'related', label: 'Aorta' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['vascular surgery', 'cardiothoracic surgery', 'genetics', 'interventional radiology'],
    keywords: ['aortic aneurysm', 'AAA', 'EVAR', 'thoracic aneurysm', 'Marfan syndrome', 'aortic dissection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default aorticAneurysm;
