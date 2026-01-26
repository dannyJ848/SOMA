/**
 * Clinically Significant Anomalies - Common Anatomical Variations
 *
 * Anatomical variations that have important clinical implications,
 * affecting diagnosis, treatment, and surgical management.
 */

import { EducationalContent } from '../../types';

export const CLINICALLY_SIGNIFICANT: EducationalContent = {
  id: 'anatomy-anomalies-clinically-significant',
  type: 'topic',
  name: 'Clinically Significant Anomalies',
  alternateNames: ['Surgically Relevant Variants', 'Pathological Variants', 'Clinically Important Anomalies'],

  levels: {
    1: {
      level: 1,
      summary: 'Clinically significant anomalies are anatomical differences that can affect your health or need special medical attention, unlike normal variations that don\'t cause problems.',
      explanation: `**What Are Clinically Significant Anomalies?**

While many anatomical differences are normal and harmless, some are important because they can affect your health or change how doctors need to treat you. These are called clinically significant anomalies.

**Why Are They Important?**

These anatomical differences matter because they can:

- Cause symptoms or health problems
- Affect how well organs work
- Make surgery more complicated
- Change how doctors interpret tests
- Require special treatment

**Common Clinically Significant Anomalies:**

**Heart and Blood Vessels:**
- Heart valves that don't work perfectly
- Blood vessels that can compress nerves
- Abnormal connections between heart chambers

**Digestive System:**
- Organs that can block other organs
- Abnormal positions that cause problems
- Tissues that don't belong where they are

**Bones and Muscles:**
- Extra ribs that press on nerves
- Bones that didn't form correctly
- Muscles with abnormal attachments

**Kidneys and Urinary System:**
- Kidneys in abnormal positions
- Blockages in drainage tubes
- Abnormal kidney shapes

**How Are They Found?**

Clinically significant anomalies are often found when:
- Someone develops symptoms
- Tests are done for a specific problem
- Imaging shows something unusual
- Surgery reveals unexpected anatomy

**What Happens Next?**

When a clinically significant anomaly is found:

1. **Evaluation**: Tests to understand the problem
2. **Treatment**: May or may not be needed
3. **Monitoring**: Regular check-ups for some conditions
4. **Special Care**: Certain activities might need to be avoided

**Important to Know:**

- Not all anomalies need treatment
- Many can be monitored safely
- Treatment depends on symptoms
- Specialists may be involved in care`,

      keyTerms: [
        { term: 'clinically significant', definition: 'Something that affects health or changes medical treatment' },
        { term: 'anomaly', definition: 'Something different from what\'s typical or expected' },
        { term: 'symptoms', definition: 'Physical signs that something is wrong or not working right' },
        { term: 'specialist', definition: 'A doctor with extra training in a specific area' },
      ],

      analogies: [
        'A clinically significant anomaly is like a road with a sharp curve - it doesn\'t mean the road is broken, but drivers need to be aware and adjust.',
        'Think of it like building a house on uneven ground - the house can still be great, but you need to plan differently.',
      ],

      examples: [
        'An extra rib near the neck can press on nerves and cause arm pain.',
        'A kidney that didn\'t move to its normal position might develop kidney stones more often.',
        'A heart valve that doesn\'t close perfectly might leak blood backward.',
      ],

      patientCounselingPoints: [
        'Having a clinically significant anomaly doesn\'t always mean you need surgery.',
        'Many anomalies can be monitored over time without treatment.',
        'Your doctor will explain the specific implications for your situation.',
      ],
    },

    2: {
      level: 2,
      summary: 'Clinically significant anomalies are anatomical variations that produce symptoms, complications, or require modified medical or surgical management due to their impact on normal physiology or clinical decision-making.',
      explanation: `**Definition and Categories**

Clinically significant anomalies differ from normal variants because they:
- Produce symptoms or functional impairment
- Increase risk of complications
- Require modification of standard treatment
- Create diagnostic confusion

**Categories by Clinical Impact:**

*1. Symptom-Producing Anomalies:*
- Cause pain, discomfort, or dysfunction
- May develop at any age
- Symptoms relate to anatomical abnormality

*2. High-Risk Anomalies:*
- Asymptomatic but carry risk
- May cause future complications
- May require preventive intervention

*3. Surgically Relevant Anomalies:*
- Alter surgical approach
- Increase operative risk
- Require modified technique

**Major Clinically Significant Anomalies by System:**

**Cardiovascular:**

| Anomaly | Clinical Impact | Treatment |
|---------|----------------|-----------|
| Bicuspid aortic valve | Stenosis, regurgitation | Monitoring, replacement |
| Coronary artery anomaly | Sudden death risk (some) | Surgical correction (some) |
| Coarctation of aorta | Hypertension, heart failure | Repair |
| Patent foramen ovale | Stroke risk (rare) | Closure if indicated |

**Gastrointestinal:**

| Anomaly | Clinical Impact | Treatment |
|---------|----------------|-----------|
| Intestinal malrotation | Volvulus risk | Ladd's procedure |
| Meckel's diverticulum | Bleeding, obstruction | Resection if symptomatic |
| Annular pancreas | Duodenal obstruction | Bypass surgery |
| Pancreas divisum | Pancreatitis | Endoscopic therapy |

**Genitourinary:**

| Anomaly | Clinical Impact | Treatment |
|---------|----------------|-----------|
| UPJ obstruction | Hydronephrosis | Pyeloplasty |
| Vesicoureteral reflux | Pyelonephritis | Antibiotics, reimplantation |
| Uterine septum | Pregnancy loss | Resection |
| Undescended testis | Infertility, cancer | Orchiopexy |

**Musculoskeletal:**

| Anomaly | Clinical Impact | Treatment |
|---------|----------------|-----------|
| Cervical rib | Thoracic outlet syndrome | Rib resection |
| Tarsal coalition | Rigid flatfoot | Resection or fusion |
| Scoliosis | Progressive deformity | Bracing, fusion |
| Hip dysplasia | Arthritis | Osteotomy, replacement |

**When Anomalies Become Clinically Significant:**

*Normal Variant → Clinical Significance:*
- Accessory navicular: Becomes painful with activity
- Bipartite patella: Symptomatic with trauma
- Os acromiale: Contributes to impingement
- Renal anomaly: Develops obstruction or stones

*Progressive Significance:*
- Bicuspid valve: Calcification over decades
- Scoliosis: Progression during growth
- Renal dysplasia: Functional decline
- Vascular anomalies: Enlargement over time`,

      keyTerms: [
        { term: 'bicuspid aortic valve', definition: 'Aortic valve with two leaflets instead of three, prone to stenosis' },
        { term: 'coarctation', definition: 'Narrowing of the aorta, typically near ductus arteriosus' },
        { term: 'volvulus', definition: 'Twisting of intestine that causes obstruction and can compromise blood supply' },
        { term: 'UPJ obstruction', definition: 'Blockage at ureteropelvic junction causing kidney swelling' },
        { term: 'thoracic outlet syndrome', definition: 'Compression of nerves/vessels between neck and shoulder' },
      ],

      analogies: [
        'A bicuspid valve is like a door with two hinges instead of three - it works but may wear out faster.',
        'Intestinal malrotation is like a twisted garden hose - water can\'t get through properly.',
      ],

      clinicalNotes: 'Not all anomalies require treatment. The decision to intervene depends on symptoms, risk of complications, and individual factors. Some anomalies like bicuspid aortic valve require lifelong surveillance even if initially asymptomatic.',
    },

    3: {
      level: 3,
      summary: 'Clinically significant anomalies encompass anatomical variations that disrupt normal physiology, predispose to complications, or require modified management due to their anatomical and pathophysiological consequences.',
      explanation: `**Pathophysiology of Clinical Significance:**

*Mechanisms of Symptom Production:*

**Compression Syndromes:**
- **Vascular compression**: Arteries, veins
- **Neural compression**: Nerves, plexuses
- **Visceral compression**: Hollow organs, airways
- **Combined compression**: Multiple structures

**Obstructive Phenomena:**
- **Luminal obstruction**: Blockage of tubes/ducts
- **Extrinsic compression**: External pressure
- **Valve dysfunction**: Incompetence, stenosis
- **Flow limitation**: Restricted passage

**Functional Impairment:**
- **Reduced capacity**: Smaller functional volume
- **Altered mechanics**: Biomechanical disadvantage
- **Physiologic stress**: Compensatory demands
- **Fatigue failure**: Progressive deterioration

**Specific Clinically Significant Anomalies:**

*Cardiovascular:*

**Bicuspid Aortic Valve:**
- **Incidence**: 1-2% of population
- **Pathophysiology**: Turbulent flow → calcification
- **Clinical course**:
  - Childhood: Usually normal
  - Early adulthood: Mild stenosis possible
  - Middle age: Stenosis common
  - Older: Regurgitation, aneurysm
- **Management**: Serial echocardiography
- **Indications for surgery**: Gradient >40 mmHg, regurgitation, aneurysm

**Coronary Artery Anomalies:**

*Malignant Course (Requires Surgery):*
- Left main from right sinus with interarterial course
- Right coronary from left sinus with interarterial course
- Single coronary with interarterial course

*Benign Course (Observation):*
- Left circumflex from right sinus (retroaortic)
- High anterior takeoff

**Gastrointestinal:**

**Intestinal Malrotation:**
- **Pathophysiology**: Narrow mesenteric base → volvulus
- **Volvulus timeline**:
  - 6-12 hours: Edema, ischemia
  - 12-24 hours: Gangrene, perforation
  - >24 hours: High mortality
- **Ladd's procedure**:
  - Detorsion of volvulus
  - Resection of necrotic bowel
  - Broadening of mesentery
  - Appendectomy (future confusion avoided)

**Meckel's Diverticulum:**
- **Complications**: Bleeding (most common), obstruction, inflammation
- **Bleeding mechanism**: Ectopic gastric acid → ulceration
- **Diagnosis**: Meckel scan (TCM-99m pertechnetate)
- **Treatment**: Resection if symptomatic

*Genitourinary:*

**Ureteropelvic Junction (UPJ) Obstruction:**
- **Pathophysiology**: Impaired urine drainage → hydronephrosis
- **Etiology**: Intrinsic stenosis, crossing vessel
- **Diagnosis**: Lasix renal scan (differential function)
- **Indications for surgery**:
  - Symptomatic (pain, infection)
  - Function <40%
  - Progressive hydronephrosis
- **Procedure**: Dismembered pyeloplasty (Anderson-Hynes)

**Vesicoureteral Reflux (VUR):**
- **Grading**: I (mild) to V (severe)
- **Clinical impact**: Pyelonephritis, renal scarring
- **Management**:
  - Grade I-II: Antibiotic prophylaxis
  - Grade III: Individualized
  - Grade IV-V: Surgical correction

*Musculoskeletal:*

**Thoracic Outlet Syndrome (TOS):**
- **Types**: Neurogenic (95%), venous (4%), arterial (1%)
- **Anatomical causes**:
  - Cervical rib (10-20%)
  - First rib anomaly
  - Scalene muscle hypertrophy
  - Fibrous bands
- **Diagnosis**: Nerve conduction studies, venogram
- **Treatment**: PT first, then first rib resection + scalenectomy

**Tarsal Coalition:**
- **Types**: Calcaneonavicular (most common), talocalcaneal
- **Presentation**: Rigid flatfoot, recurrent sprains
- **Age of presentation**: Adolescence (coalition ossifies)
- **Treatment**:
  - Symptomatic: Resection (early), fusion (late)
  - Asymptomatic: Observation`,

      keyTerms: [
        { term: 'hemodynamically significant', definition: 'Severe enough to affect blood flow or pressure' },
        { term: 'interarterial course', definition: 'Coronary artery passing between aorta and pulmonary artery' },
        { term: 'mesenteric base', definition: 'Attachment of mesentery; narrow base increases volvulus risk' },
        { term: 'dismembered pyeloplasty', definition: 'Surgical reconstruction of UPJ with complete transection and reanastomosis' },
        { term: 'rigid flatfoot', definition: 'Flatfoot that cannot be corrected; suggests tarsal coalition' },
      ],

      analogies: [
        'UPJ obstruction is like a kinked garden hose - water backs up behind the kink.',
        'Thoracic outlet syndrome is like traffic squeezing through a narrow tunnel.',
      ],

      clinicalNotes: 'The timing of intervention is critical for many anomalies. Malrotation requires immediate attention for volvulus. UPJ obstruction surgery timing depends on symptoms and function. Tarsal coalition resection must be done before arthritic changes develop.',
    },

    4: {
      level: 4,
      summary: 'Clinically significant anomalies require systematic understanding of their pathophysiology, natural history, and evidence-based management algorithms to optimize outcomes and prevent complications.',
      explanation: `**Evidence-Based Management:**

*Risk Stratification:*

**Cardiovascular Anomalies:**

*Bicuspid Aortic Valve Surveillance:*
- **Annual echocardiogram**: If valve dysfunction or aorta >40 mm
- **Every 2 years**: Normal valve, aorta <40 mm
- **Surgical thresholds**:
  - Aortic diameter >50 mm (or >45 mm with risk factors)
  - Peak gradient >40 mmHg
  - Severe regurgitation with symptoms

*Coronary Anomalies:*
- **Exercise testing**: For asymptomatic anomalies
- **Surgical indications**:
  - Symptomatic (syncope, chest pain)
  - Abnormal stress test
  - Interarterial course (especially young athletes)
- **Surgery options**:
  - Unroofing procedure
  - Coronary translocation
  - Bypass grafting

**Gastrointestinal Anomalies:**

*Malrotation Protocol:*
- **Neonates**: Upper GI contrast study
- **Ladd's procedure**: Even if asymptomatic (prophylactic)
- **Volvulus**: Surgical emergency
- **Long-term**: Obstruction risk persists (adhesions)

*Meckel's Algorithm:*
- **Painless GI bleeding**: Meckel scan first
- **Negative scan**: Consider capsule endoscopy, angiography
- **Incidental finding**: No intervention
- **Symptomatic**: Resection with segmental ileum

**Genitourinary Anomalies:**

*VUR Management Update:*
- **Grade I-II**: Observation (may resolve spontaneously)
- **Grade III**: Individualized based on age, gender
- **Grade IV-V**: Endoscopic injection (Deflux) or ureteral reimplantation
- **Breakthrough UTI**: Surgical intervention regardless of grade

**Complex Scenarios:**

*Pregnancy with Anomalies:*

| Anomaly | Pregnancy Considerations |
|---------|-------------------------|
| Bicuspid valve | Monitor for aortic dilation, heart failure |
| Renal agenesis | Monitor single kidney function, blood pressure |
| Uterine septum | Resection before pregnancy (if loss history) |
| Cervical rib | No pregnancy-specific concerns |

*Multiple Anomalies:*

**VACTERL Association:**
- **Systematic evaluation**: All system components
- **Cardiac**: Echo essential
- **Renal**: Ultrasound screening
- **Vertebral**: Spinal MRI if neurologic symptoms
- **Anorectal**: Surgical correction needed
- **Tracheoesophageal**: Surgical repair
- **Limb**: Orthopedic management

*Failed Previous Treatment:*

**Recurrent UPJ Obstruction:**
- **Endopyelotomy**: For short segment
- **Re-do pyeloplasty**: Gold standard
- **Nephrectomy**: For non-functioning kidney

**Recurrent TOS:**
- **First surgery incomplete**: Complete resection
- **Scalene muscle**: Resection
- **Brachial plexus neurolysis**: If needed
- **First rib re-resection**: Challenging`,

      keyTerms: [
        { term: 'unroofing procedure', definition: 'Surgical removal of coronary artery wall shared with aorta for anomalous coronary' },
        { term: 'endopyelotomy', definition: 'Endoscopic incision of UPJ obstruction' },
        { term: 'Deflux', definition: 'Dextranomer/hyaluronic acid copolymer for endoscopic VUR treatment' },
        { term: 'neurolysis', definition: 'Surgical freeing of nerve from adhesions or compression' },
      ],

      clinicalNotes: 'Bicuspid aortic valve patients require aortic surveillance even if valve function is normal due to risk of aortic dilation. VUR management has shifted toward observation for lower grades. Re-do pyeloplasty has high success rates for recurrent UPJ obstruction.',
    },

    5: {
      level: 5,
      summary: 'Clinically significant anomalies represent complex intersections of anatomy, physiology, genetics, and clinical decision-making requiring multidisciplinary expertise, individualized management, and lifelong surveillance for optimal outcomes.',
      explanation: `**Advanced Management Concepts:**

*Multidisciplinary Care Models:*

**Anomaly Teams:**
- **Cardiac**: Surgery, cardiology, genetics, imaging
- **VACTERL**: Surgery, urology, orthopedics, genetics
- **Airway**: ENT, surgery, pulmonology, radiology
- **Pelvic**: Urology, gynecology, colorectal surgery

**Genetic Evaluation:**

*When to Refer:*
- Multiple congenital anomalies
- Dysmorphic features
- Family history
- Recurrent pregnancy loss
- Unusual anomaly patterns

*Testing Strategy:*
1. **Chromosomal microarray**: First tier
2. **Exome sequencing**: If microarray negative
3. **Specific gene tests**: For suspected syndromes
4. **Parental testing**: For recurrence risk

**Controversial Areas:**

*Asymptomatic Anomalies:*

**Bicuspid Valve with Normal Function:**
- **Consensus**: Serial imaging
- **Debate**: Optimal interval, activity restrictions
- **Individualization**: Family history, aortic size, valve morphology

**Incidental pancreatic divisum:**
- **Observation**: Asymptomatic
- **ERCP**: Only if pancreatitis
- **Sphincterotomy**: If recurrent pancreatitis

**Small asymptomatic renal stone with anomaly:**
- **Conservative**: Observation usually
- **Intervention**: If infection, obstruction, growth

**Reproductive Counseling:**

*Recurrence Risk Counseling:*

| Anomaly | Recurrence Risk | Testing |
|---------|----------------|---------|
| Bicuspid valve | 3-5% | Fetal echo |
| Hydronephrosis | 10-15% | Fetal US |
| VUR | 30% (siblings) | Screening VCUG |
| Cleft lip/palate | 2-5% | Fetal US |

*Pregnancy Management:*
- **Preconception counseling**: Optimize health
- **Fetal screening**: Targeted imaging
- **Delivery planning**: Tertiary center if needed
- **Postnatal evaluation**: Confirm anatomy

**Long-Term Outcomes:**

*Quality of Life:*

**Positive Predictors:**
- Early diagnosis
- Appropriate treatment
- Minimal residual disease
- Good psychosocial support

**Challenges:**
- Multiple surgeries
- Chronic monitoring
- Activity restrictions
- Reproductive implications

*Transition of Care:*

**Pediatric to Adult:**
- **Timing**: Late adolescence
- **Transfer**: Structured program
- **Education**: Self-management
- **Continuity**: Adult providers

**Emerging Therapies:**

*Minimally Invasive:*
- **Robotic surgery**: Complex reconstruction
- **Endoscopic approaches**: VUR, UPJ
- **Image-guided therapy**: Precise localization

*Regenerative Medicine:*
- **Tissue engineering**: Replacement parts
- **Stem cell therapy**: Organ repair
- **3D printing**: Custom implants

**Special Populations:**

*Athletes with Anomalies:*

**Clearance Considerations:**
- **Bicuspid valve**: Echo, exercise test
- **Coronary anomaly**: Risk stratification
- **Cervical rib**: Neurologic assessment
- **Scoliosis**: Pulmonary function

**Genetic Implications:**
- **Family screening**: For hereditary conditions
- **Reproductive options**: PGD, prenatal testing
- **Insurance considerations**: Genetic discrimination`,

      keyTerms: [
        { term: 'PGD', definition: 'Preimplantation genetic diagnosis; testing embryos before implantation' },
        { term: 'transition of care', definition: 'Process of transferring from pediatric to adult medical care' },
        { term: 'multidisciplinary', definition: 'Involving multiple medical specialties working together' },
        { term: 'quality of life', definition: 'General well-being including physical, mental, and social health' },
      ],

      clinicalNotes: 'The management of clinically significant anomalies requires lifelong follow-up for many conditions. Transition programs from pediatric to adult care improve outcomes. Family screening is important for hereditary conditions. Psychosocial support is essential for quality of life.',
    },
  },

  media: [
    {
      id: 'clinically-significant-1',
      type: 'diagram',
      filename: 'bicuspid-valve-progression.svg',
      title: 'Bicuspid Aortic Valve Natural History',
      description: 'Timeline of bicuspid valve progression and treatment thresholds',
    },
    {
      id: 'clinically-significant-2',
      type: 'diagram',
      filename: 'thoracic-outlet-anatomy.svg',
      title: 'Thoracic Outlet Syndrome Anatomy',
      description: 'Anatomical causes of thoracic outlet syndrome',
    },
  ],

  citations: [
    {
      id: 'clements-congenital',
      type: 'textbook',
      title: 'Congenital Heart Disease',
      source: 'Clements\' Congenital Heart Defects, 2nd Edition',
      license: 'Copyrighted',
    },
    {
      id: 'ashcraft-pediatric',
      type: 'textbook',
      title: 'Pediatric Surgery',
      source: 'Ashcraft\'s Pediatric Surgery, 7th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-anomalies-common-congenital', targetType: 'topic', relationship: 'related', label: 'Common Congenital Anomalies' },
    { targetId: 'anatomy-anomalies-anatomical-variants', targetType: 'topic', relationship: 'related', label: 'Anatomical Variants' },
    { targetId: 'surgery-congenital', targetType: 'topic', relationship: 'related', label: 'Congenital Surgery' },
  ],

  tags: {
    systems: ['all'],
    structures: [],
    topics: ['anatomy', 'congenital anomalies', 'clinical significance', 'surgery'],
    keywords: ['clinical significance', 'symptomatic', 'treatment', 'surgical management', 'complications'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'pediatrics', 'medicine', 'obgyn'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
