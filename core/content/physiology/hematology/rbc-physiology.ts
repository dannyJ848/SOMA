/**
 * Red Blood Cell Physiology - Comprehensive Educational Content
 *
 * Covers hemoglobin structure and function, oxygen-carrying capacity,
 * erythropoiesis, and the various types of anemia from a pathophysiological perspective.
 */

import { EducationalContent } from '../../types';

export const rbcPhysiology: EducationalContent = {
  id: 'physiology-rbc-physiology',
  type: 'process',
  name: 'Red Blood Cell Physiology',
  alternateNames: ['Erythrocyte physiology', 'Hemoglobin function', 'Oxygen transport'],

  levels: {
    1: {
      level: 1,
      summary: 'Red blood cells carry oxygen from your lungs to every part of your body using a special protein called hemoglobin.',
      explanation: `Red blood cells are like tiny delivery trucks that pick up oxygen in your lungs and deliver it everywhere in your body.

**How Red Blood Cells Work:**

Inside each red blood cell is a special protein called hemoglobin. Hemoglobin is what makes blood red and what allows red cells to carry oxygen.

Think of hemoglobin like a sponge that soaks up oxygen. When blood flows through your lungs, the hemoglobin picks up oxygen. Then when the blood travels to other parts of your body, the hemoglobin releases the oxygen where it is needed.

**Why Oxygen Is Important:**
Your body's cells need oxygen to make energy, like how a car needs fuel to run. Without enough oxygen, you would feel tired and weak.

**What Happens When You Do Not Have Enough Red Cells (Anemia):**
If you do not have enough red blood cells or hemoglobin, your body cannot get enough oxygen. This is called anemia. People with anemia often:
- Feel very tired
- Look pale
- Get out of breath easily
- Feel weak

**Types of Anemia:**
1. **Not eating enough iron** - Iron is needed to make hemoglobin
2. **Losing blood** - Like from heavy periods or an injury
3. **Cells not lasting long enough** - Some diseases make red cells break down too fast
4. **Body not making enough** - Sometimes the bone marrow cannot make enough red cells`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'The protein inside red blood cells that carries oxygen' },
        { term: 'anemia', definition: 'Not having enough healthy red blood cells to carry oxygen' },
        { term: 'iron', definition: 'A mineral your body needs to make hemoglobin' },
        { term: 'oxygen', definition: 'A gas from the air that your cells need to make energy' },
      ],
      analogies: [
        'Red blood cells are like delivery trucks carrying oxygen packages to every house (cell) in your body.',
        'Hemoglobin is like a magnet for oxygen - it picks it up in the lungs and drops it off where needed.',
      ],
      examples: [
        'Athletes at high altitudes make more red blood cells because there is less oxygen in the air.',
        'Eating foods rich in iron like spinach and meat helps your body make healthy red blood cells.',
      ],
    },
    2: {
      level: 2,
      summary: 'Erythrocytes contain hemoglobin for oxygen transport, with their production regulated by erythropoietin and their function dependent on proper hemoglobin synthesis and membrane integrity.',
      explanation: `## Red Blood Cell Characteristics

**Structure:**
- Biconcave disc shape (7.5 micrometers diameter)
- No nucleus when mature (more room for hemoglobin)
- Flexible membrane for squeezing through capillaries
- Contains about 280 million hemoglobin molecules

**Hemoglobin Structure:**
- Four protein chains (2 alpha, 2 beta in adult HbA)
- Each chain has one heme group
- Each heme contains one iron atom
- Each hemoglobin can carry 4 oxygen molecules

**Oxygen-Hemoglobin Binding:**
- Cooperative binding: First O2 makes it easier to bind more
- Results in the S-shaped (sigmoidal) oxygen-hemoglobin dissociation curve
- Allows efficient pickup in lungs (high O2) and release in tissues (low O2)

**Erythropoiesis (Red Cell Production):**
- Occurs in bone marrow
- Takes about 7 days from stem cell to mature red cell
- Erythropoietin (EPO) is the main hormone regulating production
- EPO is made mainly by the kidneys in response to low oxygen
- Requires iron, vitamin B12, and folate

**Red Cell Lifespan:**
- Normal lifespan: 120 days
- Old cells removed by spleen and liver
- Iron recycled for new hemoglobin

## Types of Anemia

**By Size (MCV):**
| Type | MCV | Examples |
|------|-----|----------|
| Microcytic | <80 fL | Iron deficiency, thalassemia |
| Normocytic | 80-100 fL | Acute blood loss, chronic disease |
| Macrocytic | >100 fL | B12 deficiency, folate deficiency |

**By Cause:**
1. **Decreased production:** Iron deficiency, B12/folate deficiency, bone marrow failure
2. **Increased destruction (hemolytic):** Autoimmune, sickle cell, infections
3. **Blood loss:** Acute bleeding, chronic GI bleeding, heavy menstruation`,
      keyTerms: [
        { term: 'erythropoietin', definition: 'Hormone from kidneys that stimulates red blood cell production', pronunciation: 'eh-rith-roh-POY-eh-tin' },
        { term: 'heme', definition: 'Iron-containing molecule in hemoglobin that binds oxygen', pronunciation: 'heem' },
        { term: 'hemolytic anemia', definition: 'Anemia caused by red blood cells being destroyed too quickly', pronunciation: 'hee-moh-LIT-ik' },
        { term: 'MCV', definition: 'Mean corpuscular volume; average size of red blood cells' },
        { term: 'reticulocyte', definition: 'Young red blood cell just released from bone marrow', pronunciation: 'reh-TIK-yoo-loh-site' },
      ],
      analogies: [
        'The S-shaped oxygen curve is like a relay race - the first runner picking up the baton makes it easier for the next runners.',
        'EPO is like a factory manager who hires more workers (red cells) when production needs increase.',
      ],
    },
    3: {
      level: 3,
      summary: 'Erythrocyte physiology encompasses hemoglobin biochemistry, oxygen-hemoglobin dissociation dynamics, metabolic pathways maintaining cell viability, and the pathophysiology of anemia classification.',
      explanation: `## Hemoglobin Biochemistry

**Normal Hemoglobin Types:**
- HbA (alpha2beta2): 95-98% of adult hemoglobin
- HbA2 (alpha2delta2): 2-3%
- HbF (alpha2gamma2): <1% in adults, predominant in fetus

**Hemoglobin States:**
- Oxyhemoglobin: O2 bound (bright red)
- Deoxyhemoglobin: No O2 (dark red/blue)
- Carboxyhemoglobin: CO bound (cherry red)
- Methemoglobin: Fe3+ state (brown, cannot bind O2)

**Oxygen-Hemoglobin Dissociation Curve:**

The sigmoidal curve reflects cooperative binding:
- T state (tense): Low O2 affinity, stabilized by 2,3-DPG
- R state (relaxed): High O2 affinity

**Factors Affecting O2 Affinity:**

| Factor | Effect on Curve | O2 Release |
|--------|-----------------|------------|
| Increased temp | Right shift | Enhanced |
| Decreased pH (Bohr effect) | Right shift | Enhanced |
| Increased CO2 | Right shift | Enhanced |
| Increased 2,3-DPG | Right shift | Enhanced |
| CO binding | Left shift | Impaired |
| HbF | Left shift | Impaired |
| Anemia | Increased 2,3-DPG | Compensatory |

**P50:** Partial pressure of O2 at which hemoglobin is 50% saturated (normally 26-27 mmHg)

## Erythrocyte Metabolism

**Energy Production:**
- Glycolysis (Embden-Meyerhof pathway): Produces ATP
- No mitochondria = no oxidative phosphorylation
- ATP maintains membrane pumps, cell shape

**Protective Pathways:**
- Hexose monophosphate shunt: Produces NADPH
- NADPH regenerates reduced glutathione
- Glutathione protects against oxidative damage
- G6PD deficiency = susceptible to oxidative stress

**Rapoport-Luebering Shunt:**
- Produces 2,3-DPG from 1,3-DPG
- Unique to red blood cells
- Regulates oxygen release

## Clinical Classification of Anemia

**Reticulocyte Production Index (RPI):**
- RPI = (Reticulocyte % x Hct/45) / Maturation factor
- RPI >2: Adequate marrow response (hemolysis, bleeding)
- RPI <2: Inadequate response (production problem)

**Kinetic Classification:**

1. **Decreased Production (Hypoproliferative):**
   - Iron deficiency: Microcytic, low ferritin
   - B12/Folate deficiency: Macrocytic, megaloblastic
   - Chronic disease/inflammation: Normocytic, elevated ferritin
   - Bone marrow failure: Pancytopenia
   - Chronic kidney disease: Low EPO

2. **Increased Destruction (Hemolytic):**
   - Intravascular: Free hemoglobin, hemoglobinuria, low haptoglobin
   - Extravascular: Splenomegaly, indirect hyperbilirubinemia
   - Causes: Autoimmune, hereditary spherocytosis, sickle cell, malaria

3. **Blood Loss:**
   - Acute: Initially normocytic, then microcytic if iron-depleted
   - Chronic: Microcytic (iron deficiency)

**Peripheral Smear Findings:**

| Finding | Suggests |
|---------|----------|
| Microcytic, hypochromic | Iron deficiency |
| Target cells | Thalassemia, liver disease |
| Spherocytes | Hereditary spherocytosis, AIHA |
| Sickle cells | Sickle cell disease |
| Schistocytes | MAHA (TTP, DIC, HUS) |
| Macro-ovalocytes | Megaloblastic anemia |
| Hypersegmented neutrophils | B12/folate deficiency |`,
      keyTerms: [
        { term: 'Bohr effect', definition: 'Decreased hemoglobin oxygen affinity with lower pH, facilitating O2 release in metabolically active tissues' },
        { term: '2,3-DPG', definition: '2,3-diphosphoglycerate; glycolytic intermediate that stabilizes deoxyhemoglobin and decreases O2 affinity' },
        { term: 'P50', definition: 'Partial pressure of oxygen at 50% hemoglobin saturation; reflects overall O2 affinity' },
        { term: 'G6PD', definition: 'Glucose-6-phosphate dehydrogenase; enzyme in hexose monophosphate shunt protecting against oxidative stress' },
        { term: 'haptoglobin', definition: 'Plasma protein that binds free hemoglobin; depleted in intravascular hemolysis' },
      ],
      clinicalNotes: 'The reticulocyte production index distinguishes production problems from destruction/loss. Always correct the reticulocyte count for anemia severity and reticulocyte shift to avoid overestimating marrow response.',
    },
    4: {
      level: 4,
      summary: 'Red cell physiology integrates globin genetics, oxygen transport biophysics, metabolic regulation, and senescence pathways, with anemia pathophysiology reflecting specific disruptions in erythroid development, hemoglobin function, or cell survival.',
      explanation: `## Globin Gene Regulation and Hemoglobinopathies

**Developmental Switching:**
- Embryonic: zeta (alpha-like) and epsilon (beta-like) genes
- Fetal: alpha and gamma genes (HbF alpha2gamma2)
- Adult: alpha, beta, delta genes (HbA, HbA2)
- Switch occurs around birth; complete by 6 months

**Regulatory Elements:**
- Locus Control Region (LCR): Chromatin opening, temporal regulation
- Transcription factors: GATA-1, KLF1, BCL11A
- BCL11A: Represses gamma globin, therapeutic target

**Hemoglobinopathies:**

*Sickle Cell Disease:*
- HbS: beta chain Glu6Val mutation
- Deoxy-HbS polymerizes forming tactoids
- Triggers: Hypoxia, acidosis, dehydration, infection
- Sickling -> hemolysis, vaso-occlusion, organ damage
- HbF inhibits polymerization (therapeutic target)

*Thalassemias:*
- Alpha-thalassemia: Gene deletions (--/--) to single gene loss
- Beta-thalassemia: Point mutations affecting transcription/translation
- Imbalanced chains precipitate, causing ineffective erythropoiesis
- Classification: Silent carrier, trait, intermedia, major

## Oxygen Transport Biophysics

**Allosteric Regulation:**
- Hemoglobin is a classic allosteric protein
- T state: Salt bridges between subunits, low O2 affinity
- R state: Broken salt bridges, high O2 affinity
- Transition triggered by O2 binding to heme iron

**Hill Equation:**
Y = (pO2)^n / (P50^n + (pO2)^n)
- n (Hill coefficient) = 2.8 for hemoglobin (cooperative)
- n = 1 would be non-cooperative (myoglobin)

**Physiologic Significance:**
- At pO2 100 mmHg (lungs): ~98% saturation
- At pO2 40 mmHg (tissues): ~75% saturation
- At pO2 20 mmHg (exercising muscle): ~35% saturation
- Right shift allows more O2 delivery to active tissues

**Carbon Dioxide Transport:**
- 7% dissolved in plasma
- 23% bound to hemoglobin (carbaminohemoglobin)
- 70% as bicarbonate (carbonic anhydrase reaction)
- Haldane effect: Deoxyhemoglobin binds CO2 better

## Red Cell Senescence and Destruction

**Aging Changes:**
- Decreased enzyme activity (hexokinase, G6PD)
- ATP depletion
- Loss of membrane lipid asymmetry
- Phosphatidylserine externalization
- Decreased CD47 (dont-eat-me signal)
- Increased IgG binding

**Recognition and Removal:**
- Splenic macrophages recognize senescent markers
- Band 3 clustering creates senescence antigen
- Complement activation on aged cells
- Extravascular hemolysis in spleen and liver

**Iron Recycling:**
- Heme oxygenase cleaves heme ring
- Iron released, bound to ferritin or exported
- Biliverdin converted to bilirubin
- Bilirubin transported to liver (albumin-bound)
- Conjugated and excreted in bile

## Erythropoietin Biology

**Production:**
- 90% from peritubular interstitial cells in kidney
- 10% from liver (fetal: 90% liver)
- Hypoxia-inducible factor (HIF) regulation
- Prolyl hydroxylases as oxygen sensors

**HIF Pathway:**
- Normal O2: PHD hydroxylates HIF-alpha, VHL targets for degradation
- Hypoxia: PHD inactive, HIF stabilized, EPO transcription
- HIF-PHD inhibitors: Novel therapy for anemia (roxadustat)

**EPO Response:**
- CFU-E and proerythroblasts are EPO-dependent
- Prevents apoptosis of erythroid precursors
- Response takes 3-5 days (reticulocytosis)
- Maximum response at 10-14 days

**Clinical Applications:**
- Recombinant EPO (epoetin alfa, darbepoetin)
- Indications: CKD, chemotherapy-induced anemia, MDS
- Target hemoglobin: 10-11 g/dL (not to normalize)
- Risks: Hypertension, thrombosis, pure red cell aplasia (rare)`,
      keyTerms: [
        { term: 'BCL11A', definition: 'Transcription factor that represses gamma globin expression; therapeutic target for HbF induction' },
        { term: 'Hill coefficient', definition: 'Measure of cooperativity in hemoglobin oxygen binding; n=2.8 indicates positive cooperativity' },
        { term: 'HIF pathway', definition: 'Hypoxia-inducible factor pathway sensing oxygen levels and regulating EPO production' },
        { term: 'prolyl hydroxylase', definition: 'Oxygen-sensing enzyme that marks HIF for degradation in normoxia' },
        { term: 'Haldane effect', definition: 'Enhanced CO2 binding to deoxyhemoglobin compared to oxyhemoglobin' },
      ],
      clinicalNotes: 'BCL11A inhibition and HIF-PHD inhibitors represent novel approaches to treating hemoglobinopathies and anemia. ESA target hemoglobin should not exceed 11 g/dL due to increased cardiovascular events seen in trials targeting higher levels.',
    },
    5: {
      level: 5,
      summary: 'Contemporary erythrocyte biology integrates molecular genetics, systems physiology, and translational therapeutics, with precision medicine approaches revolutionizing management of hemoglobinopathies and anemia.',
      explanation: `## Molecular Basis of Hemoglobin Switching

**Transcriptional Control:**
- LCR looping to promoters (chromosome conformation)
- GATA-1/FOG-1 complex: Essential for erythropoiesis
- KLF1: Activates beta globin, indirectly represses gamma
- BCL11A: Direct gamma globin repressor
- LRF (ZBTB7A): Cooperates with BCL11A

**HbF Induction Strategies:**

| Approach | Mechanism | Status |
|----------|-----------|--------|
| Hydroxyurea | Multiple (stress erythropoiesis, NO) | Standard of care |
| BCL11A knockdown | Gene editing/siRNA | Clinical trials |
| LRF inhibition | Small molecules | Preclinical |
| Decitabine | DNA methylation | Approved for MDS |
| Pomalidomide | Unknown mechanism | Clinical trials |

**Gene Therapy:**
- LentiGlobin (betibeglogene autotemcel): beta-globin gene addition
- Exagamglogene autotemcel (exa-cel): BCL11A enhancer editing
- Base editing: Direct correction of sickle mutation
- Challenges: Engraftment, insertional mutagenesis, cost

## Advanced Oxygen Transport Physiology

**Hemoglobin-Based Oxygen Carriers (HBOCs):**
- Cell-free hemoglobin solutions
- Challenges: Vasoconstriction (NO scavenging), oxidative damage
- Modifications: PEGylation, polymerization, encapsulation
- Applications: Emergency medicine, transfusion alternative

**Nitric Oxide and Hemoglobin:**
- Hemoglobin scavenges NO (nitric oxide)
- Free hemoglobin causes vasoconstriction
- Intravascular hemolysis: Pulmonary hypertension, esophageal dysfunction
- SNO-hemoglobin: NO transport and delivery

**Computational Modeling:**
- Whole-body oxygen delivery models
- Critical hemoglobin thresholds
- Transfusion trigger optimization
- Individualized treatment protocols

## Anemia Diagnostics: Precision Medicine

**Next-Generation Sequencing:**
- Thalassemia mutation panels
- HBB gene sequencing for hemoglobinopathies
- Bone marrow failure syndrome genes (DKC1, TERT, TERC)
- Whole exome/genome for undiagnosed anemias

**Advanced Flow Cytometry:**
- Reticulocyte maturation indices (IRF)
- Zinc protoporphyrin (ZPP) - microcytic anemia workup
- Paroxysmal nocturnal hemoglobinuria (PNH) clones
- Red cell enzyme deficiency screening

**Biomarker Integration:**

| Biomarker | Utility |
|-----------|---------|
| Hepcidin | IDA vs ACD differentiation |
| sTfR | Functional iron deficiency |
| GDF15 | Ineffective erythropoiesis |
| Erythroferrone | Erythropoietic drive |
| EPO level | Appropriate response to anemia |

## Therapeutic Advances

**Novel EPO Pathway Agents:**
- HIF-PHD inhibitors: Roxadustat, vadadustat, daprodustat
- Mechanism: Stabilize HIF, increase endogenous EPO and iron absorption
- Advantage: Oral administration
- Concerns: Tumor angiogenesis, cardiovascular safety

**Luspatercept (ACE-536):**
- Modified activin receptor IIB-Fc fusion
- Traps TGF-beta superfamily ligands
- Reduces ineffective erythropoiesis
- Approved for MDS with ring sideroblasts, beta-thalassemia
- Increases hemoglobin, reduces transfusion burden

**Mitapivat:**
- Pyruvate kinase activator
- Addresses PK deficiency and thalassemia
- Shifts metabolic flux, reduces 2,3-DPG
- Left-shifts O2 dissociation curve
- Reduces hemolysis in PK deficiency

**Gene Editing for Sickle Cell:**
- CRISPR-Cas9 targeting BCL11A erythroid enhancer
- Disrupts BCL11A expression in red cells only
- Robust HbF induction (>20%)
- Potential functional cure
- FDA approved (exa-cel) 2023

## Transfusion Medicine Integration

**Restrictive Transfusion:**
- Threshold: Hemoglobin 7-8 g/dL for most patients
- Liberal thresholds not beneficial (TRICC, FOCUS, TRACS trials)
- Exception: Active cardiac ischemia, some cardiac surgery

**Hemoglobin-Based Transfusion Triggers:**
- Physiologic triggers more appropriate than arbitrary cutoffs
- Lactate, ScvO2, clinical symptoms
- Goal-directed transfusion in surgery

**Blood Conservation:**
- Patient blood management programs
- Preoperative anemia optimization
- Intraoperative cell salvage
- Antifibrinolytics (tranexamic acid)

**Emerging Technologies:**
- In vitro red cell generation
- Cultured red cells from stem cells
- Universal donor cells (antigen knockout)
- Pathogen reduction technologies`,
      keyTerms: [
        { term: 'luspatercept', definition: 'TGF-beta superfamily ligand trap that reduces ineffective erythropoiesis in MDS and thalassemia' },
        { term: 'mitapivat', definition: 'Pyruvate kinase activator for treating PK deficiency and showing promise in thalassemia' },
        { term: 'exa-cel', definition: 'Exagamglogene autotemcel; CRISPR gene-edited cell therapy for sickle cell disease inducing HbF' },
        { term: 'SNO-hemoglobin', definition: 'S-nitrosohemoglobin; form of hemoglobin that transports and delivers nitric oxide' },
        { term: 'restrictive transfusion', definition: 'Evidence-based practice of transfusing at lower hemoglobin thresholds (7-8 g/dL) shown equivalent or superior to liberal strategies' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Luspatercept is first-in-class for transfusion-dependent MDS with ring sideroblasts and beta-thalassemia
- HIF-PHD inhibitors are oral alternatives to ESAs but require cardiovascular safety monitoring
- Gene therapy with BCL11A disruption achieves durable HbF induction in sickle cell disease
- Restrictive transfusion (Hgb 7-8 g/dL trigger) is standard for most hospitalized patients
- Reticulocyte hemoglobin content (CHr <28 pg) indicates functional iron deficiency even with normal ferritin
- Understanding the O2-Hgb dissociation curve is essential for managing critically ill patients and understanding tissue O2 delivery`,
    },
  },

  media: [
    {
      id: 'hemoglobin-structure',
      type: 'diagram',
      filename: 'hemoglobin-structure.svg',
      title: 'Hemoglobin Quaternary Structure',
      description: 'Four subunits of hemoglobin with heme groups and iron atoms',
    },
    {
      id: 'oxygen-dissociation-curve',
      type: 'diagram',
      filename: 'oxygen-hemoglobin-dissociation.svg',
      title: 'Oxygen-Hemoglobin Dissociation Curve',
      description: 'Sigmoidal curve showing cooperative O2 binding and factors causing shifts',
    },
    {
      id: 'erythropoiesis-diagram',
      type: 'diagram',
      filename: 'erythropoiesis.svg',
      title: 'Erythropoiesis Pathway',
      description: 'Development from stem cell to mature erythrocyte',
    },
  ],

  citations: [
    {
      id: 'bunn-hemoglobin',
      type: 'article',
      title: 'Hemoglobin: Molecular, Genetic and Clinical Aspects',
      authors: ['Bunn HF', 'Forget BG'],
      source: 'W.B. Saunders',
    },
    {
      id: 'camaschella-iron-2019',
      type: 'article',
      title: 'Iron deficiency',
      authors: ['Camaschella C'],
      source: 'Blood',
      url: 'https://doi.org/10.1182/blood-2018-05-815944',
    },
    {
      id: 'williams-hematology-rbc',
      type: 'textbook',
      title: 'Production and Destruction of Erythrocytes',
      source: 'Williams Hematology',
      chapter: '32',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-blood-components', targetType: 'topic', relationship: 'parent', label: 'Blood Components' },
    { targetId: 'condition-iron-deficiency-anemia', targetType: 'condition', relationship: 'related', label: 'Iron Deficiency Anemia' },
    { targetId: 'physiology-bone-marrow', targetType: 'topic', relationship: 'related', label: 'Bone Marrow Function' },
    { targetId: 'process-hematopoiesis', targetType: 'pathway', relationship: 'related', label: 'Hematopoiesis' },
  ],

  tags: {
    systems: ['hematologic', 'respiratory'],
    topics: ['hemoglobin', 'oxygen transport', 'erythropoiesis', 'anemia'],
    keywords: ['erythrocyte', 'hemoglobin', 'EPO', '2,3-DPG', 'oxygen dissociation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default rbcPhysiology;
