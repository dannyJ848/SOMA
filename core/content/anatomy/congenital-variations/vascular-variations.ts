/**
 * Vascular Variations - Congenital Anatomical Variations
 *
 * Anatomical variations in blood vessels that occur due to developmental
 * differences during embryogenesis, affecting arterial and venous patterns.
 */

import { EducationalContent } from '../../types';

export const VASCULAR_VARIATIONS: EducationalContent = {
  id: 'anatomy-variations-vascular',
  type: 'topic',
  name: 'Vascular Variations',
  alternateNames: ['Blood Vessel Anomalies', 'Vascular Anomalies', 'Congenital Vascular Variants'],

  levels: {
    1: {
      level: 1,
      summary: 'Vascular variations are differences in how blood vessels form and connect in the body that people are born with.',
      explanation: `**What Are Vascular Variations?**

Just like people can have different eye colors or heights, the blood vessels in our bodies can also look different from person to person. These differences are called vascular variations.

**How Do They Happen?**

When a baby is growing inside the mother, blood vessels form like a tree growing branches. Sometimes the branches grow in slightly different patterns. This doesn't mean something is wrong - it's just a different way the vessels developed.

**Common Examples:**

- Extra blood vessels that some people have but others don't
- Blood vessels that take slightly different paths through the body
- Blood vessels that are bigger or smaller than usual
- Blood vessels that connect to different places than expected

**Why Do They Matter?**

Most vascular variations don't cause any problems at all. People can live their whole lives without knowing they have one. However:

- Doctors need to know about them before surgery so they don't accidentally cut a blood vessel
- Some variations can affect how doctors do medical tests or procedures
- A few rare variations might cause health problems

**Interesting Facts:**

- No two people have exactly the same blood vessel pattern
- About 1 in 3 people have some kind of vascular variation
- Doctors often find these variations by accident when doing imaging tests for other reasons`,

      keyTerms: [
        { term: 'vascular variation', definition: 'A difference in how blood vessels are formed that some people are born with' },
        { term: 'blood vessel', definition: ' tubes that carry blood through your body - includes arteries, veins, and capillaries' },
        { term: 'artery', definition: 'Blood vessels that carry blood away from the heart to the rest of the body' },
        { term: 'vein', definition: 'Blood vessels that carry blood back to the heart' },
        { term: 'congenital', definition: 'Something you are born with, that developed before birth' },
      ],

      analogies: [
        'Blood vessels are like roads in a city - most cities follow a similar pattern, but there are always different routes and shortcuts that make each city unique.',
        'Vascular variations are like having a slightly different fingerprint pattern - unique to you but still works perfectly fine.',
      ],

      examples: [
        'Some people have an extra artery in their wrist that supplies blood to the hand.',
        'The veins in your arms might be in slightly different positions than your friend\'s veins.',
        'Some people have their kidney arteries branch off at different heights.',
      ],

      patientCounselingPoints: [
        'Having a vascular variation is normal and usually doesn\'t affect your health.',
        'These variations are typically discovered by chance during imaging for other reasons.',
        'If you have a vascular variation, your doctor can plan around it for any procedures.',
      ],
    },

    2: {
      level: 2,
      summary: 'Vascular variations are congenital differences in the anatomy of blood vessels that occur during embryological development, with most being asymptomatic but clinically important for surgical planning and interventional procedures.',
      explanation: `**Overview of Vascular Variations**

Vascular variations are differences in the normal anatomy of arteries and veins that develop during embryogenesis. These variations are present from birth and represent alternative patterns of vascular development rather than pathological conditions.

**Classification by Vessel Type:**

*Arterial Variations:*
- Differences in origin of major branches
- Duplicate or missing vessels
- Variable branching patterns
- Abnormal course or relationship to other structures

*Venous Variations:*
- Variant drainage patterns
- Persistent embryonic veins
- Accessory or duplicate veins
- Different termination points

**Major Categories:**

| Category | Examples | Frequency |
|----------|----------|-----------|
| Aortic arch variants | Aberrant right subclavian, common carotid trunk | 10-35% |
| Renal artery variants | Multiple renal arteries, early branching | 30-40% |
| Hepatic artery variants | Replaced or accessory hepatic arteries | 40-45% |
| Venous variants | Persistent left SVC, renal vein anomalies | Variable |

**Embryological Basis:**

Blood vessels develop through two main processes:
- **Vasculogenesis**: Formation of new blood vessels from angioblasts
- **Angiogenesis**: Sprouting from existing vessels

The vascular pattern is established during weeks 3-8 of embryonic development. Variations occur when normal remodeling or regression processes deviate from the typical pattern.

**Clinical Significance:**

*Why It Matters to Healthcare:*

1. **Surgical Planning**: Surgeons need to know vascular anatomy to avoid injury
2. **Interventional Radiology**: Catheter-based procedures require understanding of vascular patterns
3. **Imaging Interpretation**: Radiologists must recognize variants to avoid misdiagnosis
4. **Transplant Surgery**: Vascular anomalies affect donor organ retrieval and implantation
5. **Trauma Management**: Variant vessels may be injured in unexpected patterns

**Detection Methods:**

- **CT Angiography**: Detailed 3D visualization of vascular anatomy
- **MR Angiography**: Non-invasive vascular imaging without radiation
- **Digital Subtraction Angiography**: Invasive but highly detailed
- **Doppler Ultrasound**: For superficial vessels`,

      keyTerms: [
        { term: 'embryogenesis', definition: 'The process by which an embryo develops and forms organs and structures', pronunciation: 'em-bree-oh-JEN-uh-sis' },
        { term: 'angiogenesis', definition: 'The formation of new blood vessels from existing vessels', pronunciation: 'an-jee-oh-JEN-uh-sis' },
        { term: 'vasculogenesis', definition: 'The formation of entirely new blood vessels during embryonic development', pronunciation: 'vas-kyoo-loh-JEN-uh-sis' },
        { term: 'aberrant', definition: 'Departing from the usual or expected course; abnormal in structure or position', pronunciation: 'AB-er-ant' },
        { term: 'persistent', definition: 'Refers to embryonic structures that fail to regress and remain into adulthood', pronunciation: 'per-SIS-tent' },
      ],

      analogies: [
        'Vascular variations are like different floor plans for the same house - the rooms and functions are the same, but the layout differs.',
        'The embryonic vascular system is like a highway system under construction - some on-ramps and off-ramps may close while others remain, creating different traffic patterns.',
      ],

      clinicalNotes: 'Vascular variations are among the most common anatomical variations in humans. They are typically discovered incidentally during imaging or surgery. The presence of a variation should be documented in the medical record to guide future procedures.',
    },

    3: {
      level: 3,
      summary: 'Vascular variations result from alterations in the complex embryological development of the cardiovascular system, involving incomplete regression, abnormal persistence, or atypical branching patterns of primitive vascular structures.',
      explanation: `**Embryological Development of the Vascular System**

The vascular system develops from the third week of gestation through a complex process of vessel formation, remodeling, and regression. Understanding this development explains why variations occur.

*Key Developmental Processes:*

1. **Week 3-4**: Formation of the primitive heart tube and early aortic arches
2. **Week 5-6**: Aortic arch system development and remodeling
3. **Week 7-8**: Regression of selected arch segments, persistence of others
4. **Week 8+:** Final vascular pattern establishment

**Aortic Arch Variations:**

*Normal Pattern:*
- Brachiocephalic trunk → right subclavian + right common carotid
- Left common carotid artery
- Left subclavian artery

*Common Variations:*

| Variation | Description | Frequency | Clinical Significance |
|-----------|-------------|-----------|----------------------|
| Bovine arch | Common origin of brachiocephalic and left CCA | 10-27% | Usually asymptomatic |
| Aberrant right subclavian | ARSA arises distal to left subclavian | 0.5-2% | May cause dysphagia |
| Right aortic arch | Arch curves over right bronchus | 0.1% | Associated with congenital heart disease |
| Double aortic arch | Both right and left arches persist | Rare | Causes tracheoesophageal compression |

**Visceral Artery Variations:**

*Celiac Trunk Variations:*
- Classic tripod pattern: 70-75%
- Hepatosplenic trunk: 10-15%
- Celiacomesenteric trunk: 1-3%
- Gastrosplenic trunk: Rare

*Renal Artery Variations:*
- Multiple renal arteries: 20-30%
- Accessory renal arteries: More common on left
- Early branching within 1.5 cm of origin: Common
- Pelvic kidney arteries: Variable origin

**Hepatic Artery Variations (Michels Classification):**

| Type | Pattern | Frequency |
|------|---------|-----------|
| I | Classic anatomy | 55% |
| II | Replaced left hepatic from LGA | 10% |
| III | Replaced right hepatic from SMA | 11% |
| IV | Both replaced | 1% |
| V | Accessory left hepatic from LGA | 8% |
| VI | Accessory right hepatic from SMA | 7% |
| VII | Both accessory | 1% |
| VIII | Replaced + accessory combinations | Rare |
| IX | Common hepatic from SMA | 2-4% |
| X | Other combinations | Rare |

**Venous System Variations:**

*Superior Vena Cava:*
- Persistent left SVC: 0.3-0.5% (higher in congenital heart disease)
- Usually drains into left atrium via coronary sinus

*Inferior Vena Cava:*
- Left IVC: Rare
- Double IVC: 0.2-3%
- Azygos continuation of IVC: 0.6%

*Renal Veins:*
- Multiple renal veins: Common on right
- Retroaortic left renal vein: 1.7-3.4%
- Circumaortic left renal vein: 1.2-8.7%

**Coronary Artery Variations:**

- Left coronary dominance: 50-70%
- Right coronary dominance: 20-30%
- Codominance: 10-20%
- Anomalous coronary origin: 0.6-1.3%`,

      keyTerms: [
        { term: 'bovine arch', definition: 'Common trunk giving rise to both brachiocephalic and left common carotid arteries' },
        { term: 'aberrant right subclavian artery (ARSA)', definition: 'Right subclavian artery arising as the last branch of aortic arch, crossing posterior to esophagus' },
        { term: 'Michels classification', definition: 'Standard system for categorizing hepatic artery anatomical variants' },
        { term: 'persistent left SVC', definition: 'Congenital persistence of the left anterior cardinal vein, forming a second superior vena cava' },
        { term: 'coronary dominance', definition: 'Which coronary artery gives rise to the posterior descending artery' },
      ],

      analogies: [
        'Aortic arch development is like a construction project where some planned roads are abandoned while others become major highways - the pattern of which roads remain determines the final anatomy.',
        'The celiac trunk variations are like different ways to split a three-way electrical connection - the components are the same but the wiring differs.',
      ],

      clinicalNotes: 'Preoperative imaging is essential when vascular variations are suspected. For major abdominal surgeries, CT angiography can identify variants that would significantly alter surgical approach. In liver transplantation, hepatic artery variants require modified anastomosis techniques.',
    },

    4: {
      level: 4,
      summary: 'Vascular variations represent alterations in the embryological patterning of blood vessels due to genetic, epigenetic, and hemodynamic factors, with significant implications for surgical anatomy, interventional procedures, and pathological differential diagnosis.',
      explanation: `**Molecular and Genetic Basis of Vascular Patterning**

*Key Signaling Pathways:*

1. **VEGF (Vascular Endothelial Growth Factor) Signaling**
   - VEGF-A, VEGF-B, VEGF-C, VEGF-D
   - Receptors: VEGFR-1 (Flt-1), VEGFR-2 (Flk-1/KDR), VEGFR-3 (Flt-4)
   - Regulates angiogenesis and vascular permeability

2. **Angiopoietin-Tie System**
   - Ang1/Ang2 binding to Tie2 receptor
   - Controls vessel maturation and stability
   - Regulates interaction with pericytes and smooth muscle

3. **Notch Signaling**
   - Notch1, Notch4 in arterial specification
   - Delta-like 4 (Dll4) as key ligand
   - Determines arterial vs. venous fate

4. **Sonic Hedgehog (Shh)**
   - Critical for aortic arch development
   - Regulates pharyngeal arch artery formation

5. **Transforming Growth Factor-beta (TGF-β)**
   - TGF-β1, TGF-β2, TGF-β3
   - Regulates extracellular matrix and smooth muscle differentiation

*Hemodynamic Factors:*

Blood flow patterns during development influence vascular remodeling through shear stress-responsive gene expression:
- Laminar flow promotes arterial specification
- Altered flow patterns can result in aberrant vessel persistence or regression

**Detailed Aortic Arch Embryology:**

*Normal Development:*
- 6 aortic arches form (1-6), but not all persist
- Arch 1-2: Regress (portions form maxillary and stapedial arteries)
- Arch 3: Forms common carotid and proximal internal carotid
- Arch 4: Right forms proximal right subclavian; left forms aortic arch
- Arch 5: Regresses completely
- Arch 6: Right forms proximal right pulmonary artery; left forms ductus arteriosus then ligamentum arteriosum

*Neural Crest Contribution:*
- Cardiac neural crest cells populate aortic arches 3, 4, and 6
- Essential for normal patterning
- Explains association with other congenital anomalies

**Complex Vascular Variants:**

*Kommerell Diverticulum:*
- Bulge at origin of aberrant subclavian artery
- Represents remnant of 4th aortic arch
- Risk of aneurysm formation, dissection
- Surgical treatment required if symptomatic

*Vascular Rings:*
- Double aortic arch: Complete ring, causes tracheoesophageal compression
- Pulmonary sling: Left pulmonary artery from right pulmonary artery
- Innominate artery compression: Anterior tracheal compression

*Abdominal Aortic Variants:*
- Renal artery aneurysms: Often associated with fibromuscular dysplasia
- Supernumerary renal arteries: May enter hilum or directly into parenchyma
- Testicular/Ovarian vein variations: Variable drainage patterns

**Hepatic Venous Variants:**

*Portal Venous System:*
- Portal vein trifurcation: 5-10%
- Right posterior portal vein from main portal: 10-15%
- Portal vein duplication: Rare

*Hepatic Vein Drainage:*
- Classic pattern: Right, middle, left hepatic veins to IVC
- Accessory hepatic veins: Common
- Direct inferior right hepatic vein: 10-25%

**Clinical Implications by Specialty:**

*Cardiac Surgery:*
- Internal mammary artery harvest requires anatomical awareness
- Coronary bypass affected by coronary dominance patterns
- Aortic valve surgery affected by coronary ostial position

*Liver Surgery and Transplant:*
- Hepatic artery variants determine anastomosis technique
- Portal vein variants affect donor organ selection
- Hepatic vein variants influence venous reconstruction

*Renal Surgery:*
- Multiple renal arteries increase ischemia risk during partial nephrectomy
- Accessory vessels may be ligated if terminal branches
- Donor nephrectomy requires detailed vascular mapping

*Vascular Surgery:*
- Carotid sheath anatomy affects carotid endarterectomy
- Femoral artery bifurcation level varies (affects access)
- IVC filter placement affected by IVC variants`,

      keyTerms: [
        { term: 'Kommerell diverticulum', definition: 'Saccular dilatation at origin of aberrant subclavian artery, representing persistent aortic arch remnant' },
        { term: 'vascular ring', definition: 'Congenital anomaly where great vessels completely encircle trachea and esophagus, causing compression' },
        { term: 'cardiac neural crest', definition: 'Population of migratory cells essential for aortic arch patterning and septation' },
        { term: 'shear stress', definition: 'Frictional force from blood flow on vessel endothelium; influences vascular remodeling' },
        { term: 'fibromuscular dysplasia', definition: 'Non-atherosclerotic vascular disease often associated with renal artery aneurysms' },
      ],

      clinicalNotes: 'Advanced imaging techniques like 3D reconstruction and volume-rendered CT angiography have significantly improved preoperative detection of vascular variants. For major oncologic resections, intraoperative ultrasound may be used to identify variant vessels not appreciated on preoperative imaging.',
    },

    5: {
      level: 5,
      summary: 'Vascular variations represent a complex interplay of genetic programming, epigenetic regulation, and hemodynamic influences during embryogenesis, with critical implications for surgical decision-making, endovascular intervention planning, and understanding of vascular disease pathogenesis.',
      explanation: `**Advanced Embryological Concepts**

*Developmental Timing and Critical Periods:*

The sensitivity to vascular anomalies varies by developmental stage:
- Week 3-5: Cardiac looping and aortic arch formation (high sensitivity)
- Week 5-7: Aortic arch remodeling (critical for arch variants)
- Week 7-8: Organogenesis and visceral vessel development
- Week 8+: Refinement and maturation

*Mechanisms of Variant Formation:*

1. **Failed Regression**: Persistence of normally regressing structures (e.g., left SVC)
2. **Aberrant Persistence**: Maintaining connections that should disappear
3. **Asymmetric Development**: Differential growth on contralateral sides
4. **Abnormal Migration**: Neural crest cell migration defects
5. **Hemodynamic Alterations**: Flow changes affecting remodeling signals

*Genetic Syndromes with Vascular Variants:*

| Syndrome | Vascular Features | Genetic Basis |
|----------|------------------|---------------|
| Turner (45,X) | Bicuspid aortic valve, coarctation, aberrant subclavian | SHOX gene haploinsufficiency |
| Marfan | Aortic root dilation, arterial tortuosity | FBN1 mutation |
| Ehlers-Danlos IV | Arterial fragility, aneurysms | COL3A1 mutation |
| PHACES | Coarctation, aberrant subclavian, carotid anomalies | Unknown |
| 22q11.2 deletion | Conotruncal defects, aortic arch anomalies | TBX1 haploinsufficiency |
| Alagille | Pulmonary artery stenosis, aberrant vasculature | JAG1/NOTCH2 |

**Rare and Complex Vascular Anomalies:**

*Aortocaval Anomalies:*
- Inferior vena cava interruption with azygos continuation
- Left IVC with hemiazygos continuation
- Circumcaval ureter (ureter passing behind IVC)

*Splanchnic Arterial Variants:*
- Celiacomesenteric trunk: Combined celiac-SMA origin (1-3%)
- Gastrosplenic trunk: Isolated gastric and splenic origin
- Hepatomesenteric trunk: Combined hepatic-SMA origin
- Pancreaticoduodenal arterial arcade variants

*Coronary Artery Anomalies:*

|Malignant Course Anomalies | | | |
|---------------------------|---|---|---|
| Left main from right sinus | Interarterial course | Sudden death risk | Surgical correction indicated |
| Right coronary from left sinus | Interarterial course | Exercise-related death | Surgical correction |
| Single coronary artery | Variable | Variable | Individualized |

*Venous Anomalies of Clinical Importance:*

- **May-Thurner Syndrome**: Left common iliac compression by right common iliac against lumbar vertebrae
- **Nutcracker Syndrome**: Left renal vein compression between aorta and SMA
- **Paget-Schroetter Syndrome**: Effort thrombosis of subclavian vein related to thoracic outlet anatomy

**Surgical and Interventional Implications:**

*Endovascular Planning:*
- Fenestrated EVAR requires precise measurement of visceral artery ostia
- Branch vessel variants affect graft design
- Iliac artery anatomy determines distal seal zone

*Hybrid Procedures:*
- Debranching procedures require understanding of arch variants
- Retrograde perfusion strategies affected by femoral/iliac anatomy
- Mesenteric revascularization requires variant awareness

*Transplant Considerations:*
- Living donor liver transplantation: Anatomical variants increase complexity
- Renal transplantation: Multiple renal arteries may require reconstruction
- Pancreas transplantation: Splenic artery variants affect implantation

**Controversies and Evolving Understanding:**

*Terminology Debate:*
- "Variant" vs. "anomaly" vs. "variation"
- Growing consensus: Use "variant" for asymptomatic, "anomaly" for pathologic

*Imaging Protocols:*
- ECG-gated CT for coronary artery anomaly assessment
- Dual-phase CT for hepatic artery mapping
- MR angiography for renal donor evaluation

*Management Algorithms:*
- Incidental coronary anomalies: Exercise testing, possible surgical repair
- Vascular rings: Symptomatic presentation determines timing
- Visceral artery variants: Document, but no intervention unless surgery planned`,

      keyTerms: [
        { term: 'PHACES syndrome', definition: 'Posterior fossa anomalies, Hemangiomas, Arterial anomalies, Cardiac defects, Eye abnormalities, Sternal clefting' },
        { term: 'May-Thurner syndrome', definition: 'Left iliac vein compression by right iliac artery, causing deep vein thrombosis' },
        { term: 'Nutcracker syndrome', definition: 'Left renal vein compression between aorta and superior mesenteric artery' },
        { term: 'interarterial course', definition: 'Coronary artery passing between aorta and pulmonary artery; high-risk for sudden death' },
        { term: 'fenestrated EVAR', definition: 'Endovascular aneurysm repair with customized openings for visceral vessels' },
      ],

      clinicalNotes: 'The discovery of vascular variants should trigger systematic evaluation for associated anomalies. For example, a right aortic arch should prompt evaluation for congenital heart disease. Coronary artery anomalies with interarterial course have up to 20-30% sudden death risk in young athletes, making surgical correction mandatory. Preoperative CT angiography with 3D reconstruction is now standard for major oncologic resections where vascular variants could impact resectability.',
    },
  },

  media: [
    {
      id: 'vascular-variations-1',
      type: 'diagram',
      filename: 'aortic-arch-variants.svg',
      title: 'Aortic Arch Variants',
      description: 'Comparison of normal and variant aortic arch patterns',
    },
    {
      id: 'vascular-variations-2',
      type: 'diagram',
      filename: 'hepatic-artery-variants.svg',
      title: 'Hepatic Artery Variants (Michels Classification)',
      description: 'Illustration of the ten types of hepatic artery anatomy',
    },
    {
      id: 'vascular-variations-3',
      type: 'animation',
      filename: 'aortic-arch-development.mp4',
      title: 'Aortic Arch Development Animation',
      description: 'Embryological development of aortic arch and common variants',
    },
  ],

  citations: [
    {
      id: 'moore-vascular',
      type: 'textbook',
      title: 'Vascular System',
      source: 'Clinically Oriented Anatomy, Moore, 9th Edition',
      chapter: 'Vascular System',
      license: 'Copyrighted',
    },
    {
      id: 'standring-gray',
      type: 'textbook',
      title: 'Cardiovascular System',
      source: 'Gray\'s Anatomy, 42nd Edition',
      chapter: 'Cardiovascular System',
      license: 'Copyrighted',
    },
    {
      id: 'loukas-vascular-variations',
      type: 'article',
      title: 'Clinical Anatomy of Vascular Variations',
      source: 'Clinical Anatomy',
      authors: ['Loukas, M.', 'Tubbs, R.S.'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-heart', targetType: 'structure', relationship: 'related', label: 'Heart' },
    { targetId: 'anatomy-aorta', targetType: 'structure', relationship: 'related', label: 'Aorta' },
    { targetId: 'pathology-vascular-rings', targetType: 'condition', relationship: 'see-also', label: 'Vascular Rings' },
    { targetId: 'procedures-ct-angiography', targetType: 'topic', relationship: 'related', label: 'CT Angiography' },
    { targetId: 'surgery-vascular-access', targetType: 'topic', relationship: 'related', label: 'Vascular Access' },
  ],

  tags: {
    systems: ['cardiovascular'],
    structures: ['blood vessels', 'arteries', 'veins', 'aorta'],
    topics: ['anatomy', 'congenital variations', 'vascular surgery', 'surgical anatomy'],
    keywords: ['vascular variants', 'anatomical variations', 'aortic arch', 'hepatic artery', 'renal artery', 'embryology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'radiology', 'anatomy'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
