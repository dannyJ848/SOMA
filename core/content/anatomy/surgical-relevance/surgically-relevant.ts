/**
 * Surgically Relevant Anomalies - Surgical Relevance
 *
 * Anatomical variations that significantly impact surgical planning,
* technique, and outcomes across surgical specialties.
 */

import { EducationalContent } from '../../types';

export const SURGICALLY_RELEVANT: EducationalContent = {
  id: 'anatomy-surgical-surgically-relevant',
  type: 'topic',
  name: 'Surgically Relevant Anomalies',
  alternateNames: ['Surgical Anatomical Variants', 'Surgically Important Variations', 'Operative Anatomy Variants'],

  levels: {
    1: {
      level: 1,
      summary: 'Surgically relevant anomalies are anatomical differences that surgeons need to know about before operating because they can change how surgery is done or affect the outcome.',
      explanation: `**What Are Surgically Relevant Anomalies?**

Surgically relevant anomalies are differences in body anatomy that matter when someone has surgery. Even though these differences might not cause problems in everyday life, they become very important during surgery.

**Why Are They Important for Surgery?**

- They change where organs and blood vessels are located
- They can make surgery more difficult
- They might change the surgical approach
- They increase the risk of complications if not recognized
- They require the surgeon to adjust their technique

**Common Examples:**

**Blood Vessel Variations:**
- Arteries that branch differently than expected
- Veins in unusual positions
- Extra blood vessels that need to be avoided
- Blood vessels that are connected differently

**Organ Position Variations:**
- Organs in different places than normal
- Organs rotated or tilted
- Extra pieces of organs
- Organs connected differently

**Tissue Structure Variations:**
- Muscles that attach differently
- Nerves that take unusual paths
- Scar tissue from previous surgeries
- Extra layers of tissue

**How Do Surgeons Prepare?**

**Before Surgery:**
- Review X-rays, CT scans, or MRI images
- Look for anatomical variations
- Plan the surgical approach
- Prepare for unexpected findings

**During Surgery:**
- Identify key structures carefully
- Adjust the plan if needed
- Take extra care with variations
- Use special techniques when needed

**Why This Matters for Patients:**

- **Safety**: Knowing about variations prevents accidental injury
- **Success**: Proper planning leads to better outcomes
- **Time**: Surgery might take longer with variations
- **Recovery**: May affect how quickly you heal

**Important to Know:**

- Surgeons are trained to recognize and handle variations
- Imaging before surgery helps identify many variations
- Sometimes variations are only discovered during surgery
- Surgeons can adjust their technique to safely manage variations`,

      keyTerms: [
        { term: 'surgical approach', definition: 'The way a surgeon accesses the area they need to operate on' },
        { term: 'anatomical variation', definition: 'A difference in body structure from what\'s typically expected' },
        { term: 'complication', definition: 'An unexpected problem that occurs during or after surgery' },
        { term: 'intraoperative', definition: 'Happening during surgery' },
      ],

      analogies: [
        'Surgically relevant anomalies are like finding a room addition when remodeling a house - the plans need to be adjusted.',
        'Think of it like driving in a new city - you need to know the roads are different than you expected.',
      ],

      examples: [
        'A surgeon might find an artery that branches higher than expected during heart surgery.',
        'The gallbladder might be in a different position, requiring adjustment of the incision.',
        'Extra blood vessels to the kidney need to be carefully preserved during surgery.',
      ],

      patientCounselingPoints: [
        'Your surgeon will review your imaging to identify any relevant variations before surgery.',
        'If unexpected variations are found during surgery, your surgeon can adjust their technique safely.',
        'Anatomical variations are one reason why surgery sometimes takes longer than expected.',
      ],
    },

    2: {
      level: 2,
      summary: 'Surgically relevant anomalies are anatomical variations that alter standard surgical anatomy, requiring modification of surgical approach, technique, or management to ensure safe and effective operative outcomes.',
      explanation: `**Definition and Significance**

Surgically relevant anomalies are anatomical variations that impact surgical care because they:
- Alter expected anatomical relationships
- Change surgical landmarks
- Modify dissection planes
- Require altered exposure
- Increase risk of iatrogenic injury
- Necessitate technique modification

**Classification by Surgical Impact:**

*Exposure Variants:*
- Alter incision placement
- Change retraction strategy
- Require alternative approaches
- Necessitate special instruments

*Dissection Planes:*
- Alter tissue planes
- Change anatomical relationships
- Create distorted landmarks
- Require careful identification

*Vascular Considerations:*
- Unexpected vessel locations
- Variant branching patterns
- Aberrant blood supply
- Complex drainage patterns

**Major Categories by Specialty:**

**General Surgery:**

| Variation | Surgical Impact | Management |
|-----------|-----------------|------------|
| Replaced hepatic artery | Identify before mobilization | Preserve during dissection |
| Accessory spleen | Resect for hematologic disease | Remove all splenic tissue |
| Retrocecal appendix | Difficult to find | Extended cecal mobilization |
| Meckel's diverticulum | May be confused for pathology | Recognize and treat if symptomatic |

**Cardiothoracic Surgery:**

| Variation | Surgical Impact | Management |
|-----------|-----------------|------------|
| Left coronary dominance | Different graft targets | Plan conduits accordingly |
| Persistent left SVC | Bleeding risk, cannulation | Recognize, manage cannulation |
| Bicuspid aortic valve | Repair vs. replacement | Assess morphology |
| Aberrant subclavian | May cross surgical field | Identify and protect |

**Vascular Surgery:**

| Variation | Surgical Impact | Management |
|-----------|-----------------|------------|
| Renal artery early branching | Difficult clamp placement | Proximal control needed |
| IVC variants | Filter placement, exposure | Adjust technique |
| Common femoral vein variation | Access difficulty | Use alternative access |

**Orthopedic Surgery:**

| Variation | Surgical Impact | Management |
|-----------|-----------------|------------|
| Cervical rib | Thoracic outlet surgery | Resection needed |
| Accessory navicular | Foot surgery | Excision if symptomatic |
| Os acromiale | Shoulder surgery | Recognize, avoid destabilizing |
| Bipartite patella | Knee surgery | Don't confuse with fracture |

**Urology:**

| Variation | Surgical Impact | Management |
|-----------|-----------------|------------|
| Multiple renal arteries | Donor nephrectomy complexity | Careful dissection |
| Retroaortic left renal vein | Hilar dissection | Identify, avoid injury |
| Pelvic kidney | Altered position | Modified approach |
| Crossed fused ectopia | Orientation confusion | Understand anatomy |`,

      keyTerms: [
        { term: 'iatrogenic injury', definition: 'Accidental harm caused during medical treatment or surgery' },
        { term: 'dissection plane', definition: 'Natural tissue planes used for separation during surgery' },
        { term: 'surgical landmark', definition: 'Consistent anatomical feature used for orientation during surgery' },
        { term: 'mobilization', definition: 'Freeing up tissue or organs to improve exposure or access' },
      ],

      analogies: [
        'Surgical landmarks are like road signs - if they\'re in different places, you can get lost without a map.',
        'Dissection planes are like the seams in clothing - following them makes separation easier.',
      ],

      clinicalNotes: 'Preoperative imaging is essential when anomalies are suspected. Intraoperative recognition requires knowledge of normal anatomy and common variants. When unexpected anatomy is encountered, careful dissection and identification of structures is critical before dividing any tissue.',
    },

    3: {
      level: 3,
      summary: 'Surgically relevant anomalies encompass anatomical variations that significantly alter operative anatomy, requiring detailed preoperative recognition, modified surgical techniques, and increased vigilance to prevent complications.',
      explanation: `**Preoperative Recognition and Planning:**

*Imaging Strategies:*

**CT Angiography:**
- **Indications**: Vascular variants suspected, oncologic resection
- **Advantages**: 3D reconstruction, detailed vascular anatomy
- **Timing**: Within 3 months of surgery
- **Interpretation**: Radiologist-surgeon collaboration

**MR Angiography:**
- **Indications**: Renal donor evaluation, vascular malformations
- **Advantages**: No radiation, excellent vascular detail
- **Limitations**: Longer acquisition, less available

**Intraoperative Imaging:**
- **Ultrasound**: Vascular identification, bile ducts
- **Fluoroscopy**: Real-time guidance
- **Cholangiography**: Biliary anatomy verification

**High-Impact Anatomical Variants:**

*Hepatobiliary Surgery:*

**Hepatic Artery Variants (Michels):**
- **Type II (Replaced LHA from LGA)**:
  - Runs in gastrohepatic ligament
  - At risk during gastrectomy
  - Must identify and preserve

- **Type III (Replaced RHA from SMA)**:
  - Retroportal course
  - At risk during pancreatic surgery
  - May require reconstruction

- **Type IX (Common hepatic from SMA)**:
  - No proper hepatic artery
  - Requires modified hilar dissection
  - Transplant implications

*Biliary Variants:*
- **Accessory right hepatic duct**: 5% prevalence
  - Enters cystic duct or common duct
  - Risk during cholecystectomy
  - Intraoperative cholangiography identifies

- **Aberrant bile ducts**: Variable anatomy
  - May drain directly into cystic duct
  - Injury risk if not recognized
  - Intraoperative recognition essential

*Colorectal Surgery:*

**Vascular Variants:**
- **Inferior mesenteric artery**: Variable takeoff from aorta
- **Right colic artery**: Present in 10-20%
- **Middle colic artery**: Variable branching
- **Marginal artery of Drummond**: Must be preserved

**Surgical Implications:**
- High ligation vs. low ligation decisions
- Lymphadenectomy template modifications
- Anastomotic perfusion assessment

**Appendiceal Variants:**
- **Retrocecal (65%)**: Requires cecal mobilization
- **Pelvic (30%)**: Retrograde often needed
- **Postileal (2-5%)**: Unusual position
- **Long appendix**: May reach right upper quadrant

*Cardiac Surgery:*

**Coronary Artery Anomalies:**
- **Left main from right sinus**: Malignant course
  - Surgical repair required in young patients
  - Unroofing procedure

- **Coronary dominance**: Bypass strategy
  - Right dominant: RCA graft important
  - Left dominant: circumflex graft emphasis
  - Codominant: Both systems

**Valve Variants:**
- **Bicuspid aortic valve**: Repair vs. replace
  - Young patients: Repair preferred
  - Older: Replacement often needed
  - Associated aortic dilation addressed

**Aortic Root Variants:**
- **Sinus of Valsalva aneurysm**: Rare
  - May require root replacement
  - Associated with connective tissue disorders

**Vascular Surgery:**

**Carotid Variants:**
- **High carotid bifurcation**: Difficult exposure
  - May require mandibular subluxation
  - Extended incision needed

- **Bulbar tortuosity**: Technical challenge
  - Requires careful clamping
  - May need transposition

**Renal Artery Variants:**
- **Multiple arteries**: 20-30% prevalence
  - Donor nephrectomy complexity
  - May require separate anastomoses
  - Reconstruction before implantation

- **Early branching**: <1.5 cm from origin
  - Difficult clamp placement
  - Proximal control needed
  - May require endovascular approach`,

      keyTerms: [
        { term: 'cholangiography', definition: 'Imaging of bile ducts with contrast; used intraoperatively to identify anatomy' },
        { term: 'high ligation', definition: 'Ligation of vessel close to origin for maximum lymph node harvest' },
        { term: 'marginal artery of Drummond', definition: 'Artery supplying colon; must be preserved during colon resection' },
        { term: 'retrograde appendectomy', definition: 'Appendectomy performed from base to tip when forward approach difficult' },
        { term: 'unroofing procedure', definition: 'Surgical removal of shared wall between anomalous coronary and aorta' },
      ],

      analogies: [
        'The marginal artery of Drummond is like a highway running along the colon - cutting it cuts off blood supply to downstream areas.',
        'High carotid bifurcation is like a fork in the road occurring much higher than expected - you need to climb higher to see it.',
      ],

      clinicalNotes: 'Intraoperative cholangiography reduces bile duct injury during cholecystectomy. Preoperative CTA is standard for major hepatic resections. Renal artery variants are the most common reason for rejecting living kidney donors.',
    },

    4: {
      level: 4,
      summary: 'Surgically relevant anomalies require comprehensive understanding of anatomical variations, advanced imaging for preoperative planning, and specialized surgical techniques to optimize outcomes and minimize complications.',
      explanation: `**Complex Surgical Scenarios:**

*Reoperative Surgery:*

**Anatomical Distortion:**
- **Adhesions**: Obliterate normal planes
- **Fibrosis**: Alters tissue characteristics
- **Displacement**: Structures move from expected position
- **Neovascularization**: Abnormal blood supply

**Strategies:**
- **Preoperative imaging**: Define altered anatomy
- **Alternative approaches**: Avoid scarred areas
- **Meticulous dissection**: Establish new planes
- **Intraoperative imaging**: Real-time guidance

**Minimally Invasive Surgery Challenges:**

*Laparoscopic/Robotic:*
- **Limited tactile feedback**: Reduced ability to feel variations
- **2D visualization**: Depth perception challenges
- **Fixed instrument angles**: Dissection constraints
- **Pneumoperitoneum**: Alters anatomical relationships

**Solutions:**
- **3D imaging**: Preoperative virtual planning
- **Fluoroscopic guidance**: Real-time instrument tracking
- **Intraoperative ultrasound**: Identify structures
- **Hybrid approaches**: Convert if needed

**Organ-Specific Complex Variants:**

**Pancreatic Surgery:**

*Annular Pancreas:*
- **Anomaly**: Pancreatic tissue encircles duodenum
- **Surgery**: Duodenal obstruction requires bypass
- **Procedure**: Gastrojejunostomy or duodenoduodenostomy
- **Difficulties**: Difficult pancreatic head exposure

*Pancreas Divisum:*
- **Anomaly**: Ducts don't fuse
- **Surgery**: May complicate pancreatic procedures
- **Management**: Minor papilla sphincterotomy if symptomatic

**Hepatic Surgery:**

**Portal Vein Variants:**
- **Trifurcation**: 5-10% prevalence
- **Right posterior from main**: 10-15%
- **Surgical impact**: Alters hilar dissection
- **Management**: Identify and preserve

**Hepatic Vein Variants:**
- **Accessory inferior right hepatic**: 10-25%
- **Direct drainage to IVC**: Common
- **Surgical impact**: Affects parenchymal transection
- **Management**: Preserve to avoid outflow obstruction

**Transplant Surgery:**

*Liver Transplant:*

**Arterial Variants:**
- **Replaced hepatic artery**: Reconstruction needed
- **Multiple arteries**: May require back-table reconstruction
- **Accessory arteries**: Preserve or reconstruct

**Biliary Variants:**
- **Accessory ducts**: May require multiple anastomoses
- **Aberrant drainage**: Alters reconstruction
- **Complications**: Increased biliary complications

*Kidney Transplant:*

**Multiple Arteries:**
- **Prevalence**: 20-30%
- **Technique**: Separate anastomoses or conjoined
- **Outcomes**: Slightly increased complications
- **Donor considerations**: May affect donor selection

**Venous Variants:**
- **Retroaortic left renal vein**: Longer vein needed
- **Multiple veins**: Reconstruction considerations
- **Right renal vein**: Short, difficult mobilization

**Vascular Surgery:**

**Complex Aneurysm Anatomy:**

*Juxtarenal Aneurysm:*
- **Challenge**: Renal arteries involved
- **Strategy**: Suprarenal clamp, renal revascularization
- **Alternatives**: Fenestrated endograft

**Thoracoabdominal:**
- **Challenge**: Visceral vessels involved
- **Strategy**: Sequential clamp, revascularization
- **Complications**: Spinal cord ischemia risk

**Oncologic Surgery:**

**Vascular Involvement:**
- **Portal vein involvement**: Pancreatic cancer
  - Resection and reconstruction possible
  - Modified pancreaticoduodenectomy

- **IVC involvement**: Renal cell carcinoma
  - Resection with tumor
  - Reconstruction or ligation
  - May require cardiopulmonary bypass

**Nerve Preservation:**
- **Pelvic autonomic nerves**: Rectal cancer
  - Critical for sexual function
  - Anatomical variations common
  - Meticulous dissection required

- **Recurrent laryngeal nerve**: Thyroid surgery
  - Non-recurrent variant: 0.5-1%
  - Higher risk of injury
  - Nerve monitoring essential`,

      keyTerms: [
        { term: 'neovascularization', definition: 'Formation of new blood vessels, often abnormal in scar tissue' },
        { term: 'back-table reconstruction', definition: 'Surgical reconstruction of organ vessels ex vivo before implantation' },
        { term: 'fenestrated endograft', definition: 'Custom stent graft with openings for branch vessels' },
        { term: 'autonomic nerves', definition: 'Involuntary nervous system; pelvic nerves important for sexual function' },
      ],

      clinicalNotes: 'Complex vascular anomalies often require hybrid open/endovascular approaches. Liver transplantation with arterial variants has higher complication rates. Renal variants may preclude living donation. Preoperative CT with 3D reconstruction is standard for complex oncologic resections.',
    },

    5: {
      level: 5,
      summary: 'Surgically relevant anomalies represent the intersection of anatomical variation and operative surgery, requiring specialized expertise, advanced imaging, individualized surgical planning, and technical adaptations for optimal outcomes.',
      explanation: `**Advanced Surgical Strategies:**

*Customized Implants and Prosthetics:*

**Patient-Specific Design:**
- **3D printing**: Preoperative modeling
- **Custom implants**: Designed for unique anatomy
- **Surgical guides**: Patient-specific instrumentation
- **Simulation**: Virtual surgery practice

**Applications:**
- **Aortic stent grafts**: Fenestrated for visceral vessels
- **Joint replacement**: Custom for unusual anatomy
- **Craniofacial reconstruction**: Unique defect shapes
- **Spinal implants**: Atypical pedicle anatomy

**Intraoperative Navigation:**

**Augmented Reality:**
- **Overlay imaging**: Projected onto surgical field
- **Real-time tracking**: Instrument position
- **Virtual structures**: See through tissue
- **Depth perception**: Improved accuracy

**Robotics:**
- **3D visualization**: Better depth perception
- **Articulated instruments**: Improved angles
- **Tremor filtration**: Enhanced precision
- **Remote capability**: Expert access

**Special Situations:**

**Extracorporeal Circulation:**

*Cardiopulmonary Bypass Variants:*
- **Cannulation sites**: Variations may require alternatives
- **Venous drainage**: IVC anomalies affect cannula position
- **Arterial return**: Femoral vs. axillary based on anatomy

*Special Techniques:*
- **Deep hypothermic circulatory arrest**: Complex arch
- **Antegrade cerebral perfusion**: Arch variations
- **Femoral vein cannulation**: IVC anomalies

**Trauma Surgery:**

**Anomalous Anatomy Impact:**
- **Bleeding sources**: Unexpected vessel locations
- **Injury patterns**: Variant anatomy vulnerability
- **Exposure challenges**: Altered approaches needed
- **Control difficulties**: Atypical vascular branching

**Emergency Adaptations:**
- **Rapid imaging**: Identify critical variants
- **Alternative exposure**: Flexible approaches
- **Endovascular options**: Temporary control
- **Damage control**: Adapted for anomalies

**Pediatric Considerations:**

**Developmental Anatomy:**
- **Size variations**: Age-dependent
- **Proportions**: Different from adults
- **Plasticity**: More adaptable
- **Growth**: Consider future development

**Congenital Anomalies:**
- **Complex cardiac**: Multiple variations common
- **Abdominal wall**: Omphalocele, gastroschisis
- **Diaphragmatic**: Bochdalek, Morgagni defects
- **Anorectal**: Spectrum of anomalies

**International Perspectives:**

**Resource-Limited Settings:**
- **Limited imaging**: Rely on intraoperative findings
- **Technology access**: May not have advanced navigation
- **Expertise**: Generalists with varied training
- **Adaptation**: Low-tech solutions

**Ethical Considerations:**

**Informed Consent:**
- **Anomaly discussion**: Known variants
- **Possibility of unknown**: Unexpected findings
- **Risk communication**: Variant-related complications
- **Alternative approaches**: When anatomy precludes standard

**Surgical Training:**

**Anatomy Education:**
- **Variant emphasis**: Beyond standard anatomy
- **Cadaver dissection**: Discovering variations
- **Simulation**: Practicing with anomalies
- **Case-based learning**: Real-world experience

**Credentialing:**
- **Complex cases**: Specialized training
- **Volume requirements**: Maintain proficiency
- **Outcomes monitoring**: Quality assurance
- **Multidisciplinary**: Team-based care

**Future Directions:**

**Artificial Intelligence:**
- **Variant recognition**: Automated identification
- **Surgical planning**: Optimal approach prediction
- **Intraoperative guidance**: Real-time assistance
- **Outcome prediction**: Risk stratification

**Regenerative Medicine:**
- **Tissue engineering**: Replacement parts
- **Organ regeneration**: Anomalous organ treatment
- **Bioactive materials**: Enhanced healing
- **Stem cell therapy**: Functional restoration`,

      keyTerms: [
        { term: 'patient-specific instrumentation', definition: 'Custom surgical guides and implants designed from individual patient imaging' },
        { term: 'augmented reality', definition: 'Technology overlaying digital information onto real-world view' },
        { term: 'damage control surgery', definition: 'Initial abbreviated surgery to control bleeding, followed by definitive repair' },
        { term: 'deep hypothermic circulatory arrest', definition: 'Cooling body to stop circulation for complex aortic surgery' },
      ],

      clinicalNotes: 'Custom fenestrated stent grafts have revolutionized treatment of juxtarenal and thoracoabdominal aneurysms with anomalous anatomy. Augmented reality guidance is increasingly used for complex oncologic resections. International surgery requires adapting techniques based on available resources and local anatomy prevalence.',
    },
  },

  media: [
    {
      id: 'surgically-relevant-1',
      type: 'diagram',
      filename: 'hepatic-artery-surgical.svg',
      title: 'Hepatic Artery Surgical Variants',
      description: 'Surgically relevant hepatic artery variants and approach modifications',
    },
    {
      id: 'surgically-relevant-2',
      type: 'diagram',
      filename: 'biliary-anatomy-surgical.svg',
      title: 'Biliary Anatomy Surgical Variants',
      description: 'Biliary anatomical variants important for cholecystectomy',
    },
  ],

  citations: [
    {
      id: 'skandalakis-surgical',
      type: 'textbook',
      title: 'Surgical Anatomy',
      source: 'Surgical Anatomy and Technique, Skandalakis',
      license: 'Copyrighted',
    },
    {
      id: 'cameron-surgical',
      type: 'textbook',
      title: 'Current Surgical Therapy',
      source: 'Current Surgical Therapy, Cameron, 14th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-variations-vascular', targetType: 'topic', relationship: 'related', label: 'Vascular Variations' },
    { targetId: 'anatomy-variations-organ', targetType: 'topic', relationship: 'related', label: 'Organ Variations' },
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Preoperative Evaluation' },
  ],

  tags: {
    systems: ['all'],
    structures: [],
    topics: ['anatomy', 'surgery', 'surgical anatomy', 'operative technique'],
    keywords: ['surgical variants', 'operative anatomy', 'surgical planning', 'anatomical anomalies', 'surgical complications'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
