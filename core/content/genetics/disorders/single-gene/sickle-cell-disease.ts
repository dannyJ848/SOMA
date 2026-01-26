/**
 * Sickle Cell Disease - Comprehensive Educational Content
 *
 * Covers the genetics, pathophysiology, clinical manifestations,
 * diagnosis, and management of sickle cell disease.
 */

import { EducationalContent } from '../../../types';

export const sickleCellDiseaseContent: EducationalContent = {
  id: 'condition-sickle-cell-disease',
  type: 'condition',
  name: 'Sickle Cell Disease',
  alternateNames: ['Sickle Cell Anemia', 'SCD', 'Hemoglobin SS Disease', 'Drepanocytosis'],
  hpoId: 'HP:0001903',

  levels: {
    1: {
      level: 1,
      summary: 'Sickle cell disease is a condition where red blood cells become shaped like crescents or sickles, which can block blood flow and cause pain.',
      explanation: `Sickle cell disease is something you're born with that affects your red blood cells. Normally, red blood cells are round and flexible like little donuts, which helps them flow smoothly through your blood vessels to carry oxygen to all parts of your body.

In sickle cell disease, some red blood cells become shaped like a crescent moon or the letter "C" - like a farming tool called a sickle. These oddly-shaped cells are stiff and sticky. They can get stuck in small blood vessels, blocking the flow of blood.

When blood can't flow properly, it causes pain - sometimes very bad pain. This is called a "pain crisis" or "sickle cell crisis." The pain can happen in the chest, belly, joints, or bones.

People with sickle cell disease also don't have enough healthy red blood cells. This is called anemia, and it can make you feel very tired.

Sickle cell disease runs in families. A child can only get it if both parents carry the gene for it. If only one parent passes on the gene, the child becomes a "carrier" - they usually don't get sick, but they can pass the gene to their own children someday.`,
      keyTerms: [
        { term: 'sickle cell', definition: 'A red blood cell that has changed into a crescent or C-shape instead of being round' },
        { term: 'red blood cell', definition: 'The cells in your blood that carry oxygen throughout your body' },
        { term: 'pain crisis', definition: 'Episodes of severe pain that happen when sickle cells block blood flow' },
        { term: 'anemia', definition: 'Not having enough healthy red blood cells, which makes you feel tired' },
        { term: 'carrier', definition: 'Someone who has one copy of the sickle cell gene but doesn\'t have the disease' },
      ],
      analogies: [
        'Normal red blood cells are like flexible rubber balls that bounce through tubes easily, while sickle cells are like hard, pointy chips that get stuck.',
        'A pain crisis is like a traffic jam - when sickle cells pile up and block the road, nothing can get through.',
        'Being a carrier is like having a recipe but never making the dish - you have the instructions but they don\'t cause problems for you.',
      ],
      examples: [
        'A child with sickle cell disease might need to rest more than other kids and drink lots of water.',
        'Pain crises can be triggered by getting too cold, being dehydrated, or getting an infection.',
        'Many babies are tested for sickle cell disease right after birth with a simple blood test.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sickle cell disease is an inherited blood disorder caused by a mutation in the hemoglobin gene, leading to abnormally shaped red blood cells that cause anemia and vaso-occlusive crises.',
      explanation: `Sickle cell disease (SCD) is a genetic blood disorder that affects hemoglobin - the protein in red blood cells that carries oxygen. It's caused by a change (mutation) in the gene that makes hemoglobin.

**What Happens in the Body:**

Normal hemoglobin is called hemoglobin A. In sickle cell disease, people make an abnormal form called hemoglobin S. When hemoglobin S releases oxygen, it can clump together and form long, stiff rods inside the red blood cell. This changes the cell's shape from a flexible disc to a rigid sickle or crescent shape.

**Key Problems:**

1. **Anemia**: Sickle cells die much faster than normal red blood cells (10-20 days vs. 120 days). The body can't make new cells fast enough to replace them, causing chronic anemia.

2. **Vaso-occlusive crises**: Sickle cells are sticky and can block small blood vessels. This blocks oxygen delivery and causes severe pain, typically in the bones, chest, and abdomen.

3. **Organ damage**: Over time, repeated blockages can damage organs including the spleen, kidneys, brain, and lungs.

**Inheritance Pattern:**

SCD follows autosomal recessive inheritance:
- Both parents must carry at least one copy of the hemoglobin S gene
- A child needs two copies (one from each parent) to have the disease
- With one copy, a person has "sickle cell trait" - usually healthy but a carrier

**Types of Sickle Cell Disease:**
- **HbSS**: Most common and severe form (both genes make hemoglobin S)
- **HbSC**: One gene for hemoglobin S, one for hemoglobin C (milder)
- **HbS beta-thalassemia**: Combination with another hemoglobin disorder`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'The protein in red blood cells that carries oxygen; made of four protein chains', pronunciation: 'HEE-moh-gloh-bin' },
        { term: 'hemoglobin S', definition: 'The abnormal form of hemoglobin that causes sickling; results from a specific gene mutation', pronunciation: 'HEE-moh-gloh-bin S' },
        { term: 'vaso-occlusive crisis', definition: 'Episode of severe pain caused by sickle cells blocking blood vessels', pronunciation: 'VAY-zoh oh-KLOO-siv' },
        { term: 'autosomal recessive', definition: 'Inheritance pattern where a child must receive the abnormal gene from both parents to have the disease', pronunciation: 'aw-toh-SOH-mal ree-SESS-iv' },
        { term: 'sickle cell trait', definition: 'Having one normal hemoglobin gene and one sickle gene; usually no symptoms' },
      ],
      analogies: [
        'Hemoglobin S molecules are like sticky velcro strips - when many are together, they attach and form stiff chains.',
        'Sickle cells in blood vessels are like logs jamming a river - they pile up and stop the flow.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sickle cell disease results from a point mutation (Glu6Val) in the beta-globin gene causing HbS polymerization under deoxygenation, leading to hemolytic anemia, vaso-occlusion, and multi-organ pathology.',
      explanation: `## Molecular Genetics

Sickle cell disease is caused by a single nucleotide substitution in the beta-globin gene (HBB) on chromosome 11:
- **Mutation**: GAG → GTG at codon 6
- **Amino acid change**: Glutamic acid → Valine (Glu6Val or E6V)
- **Result**: Hemoglobin S (HbS) instead of normal Hemoglobin A (HbA)

## Pathophysiology of Sickling

**HbS Polymerization:**
1. In deoxygenated state, valine at position 6 creates a hydrophobic patch
2. This patch binds to a complementary site on adjacent HbS molecules
3. HbS molecules polymerize into long, rigid fibers
4. Fibers deform the red blood cell membrane into the sickle shape

**Factors promoting sickling:**
- Hypoxia (low oxygen)
- Acidosis
- Dehydration (increases HbS concentration)
- Temperature changes
- Infection/inflammation

## Hemolytic Anemia

| Feature | Normal RBC | Sickle RBC |
|---------|------------|------------|
| Lifespan | ~120 days | 10-20 days |
| Shape | Biconcave disc | Sickle/crescent |
| Flexibility | High | Low |
| Membrane | Intact | Damaged |

Chronic hemolysis leads to:
- Elevated bilirubin (jaundice, gallstones)
- Elevated LDH
- Low haptoglobin
- Reticulocytosis (compensatory)

## Vaso-occlusion

Multiple mechanisms contribute:
1. **Sickle cell adhesion**: Increased expression of adhesion molecules (VCAM-1, ICAM)
2. **Endothelial activation**: Inflammatory state, reduced nitric oxide
3. **Coagulation activation**: Hypercoagulable state
4. **White cell interactions**: Neutrophils contribute to vessel occlusion

## Clinical Manifestations

**Acute:**
- Vaso-occlusive pain crisis
- Acute chest syndrome (pulmonary vaso-occlusion + infection)
- Stroke (children particularly at risk)
- Splenic sequestration (emergency in young children)
- Aplastic crisis (often parvovirus B19 infection)

**Chronic:**
- Chronic hemolytic anemia
- Functional asplenia (auto-infarction)
- Avascular necrosis (hip, shoulder)
- Chronic kidney disease
- Pulmonary hypertension
- Leg ulcers

## Diagnosis

- Newborn screening: Hemoglobin electrophoresis or HPLC
- Blood smear: Sickle cells, target cells, Howell-Jolly bodies
- Hemoglobin analysis: HbS predominant (>80% in HbSS)
- Genetic testing: Confirms beta-globin mutations`,
      keyTerms: [
        { term: 'HbS polymerization', definition: 'Formation of long, rigid hemoglobin S fibers that cause cell sickling', pronunciation: 'pah-LIM-er-ih-ZAY-shun' },
        { term: 'acute chest syndrome', definition: 'Life-threatening complication with fever, respiratory symptoms, and new pulmonary infiltrate' },
        { term: 'splenic sequestration', definition: 'Rapid pooling of blood in the spleen causing life-threatening anemia and splenomegaly' },
        { term: 'functional asplenia', definition: 'Loss of normal spleen function due to repeated infarction; increases infection risk' },
        { term: 'hemoglobin electrophoresis', definition: 'Laboratory test that separates and identifies different types of hemoglobin' },
        { term: 'reticulocytosis', definition: 'Elevated immature red blood cells in blood, indicating increased production', pronunciation: 'reh-TIK-yoo-loh-sy-TOH-sis' },
      ],
      clinicalNotes: 'Acute chest syndrome is the leading cause of death in adults with SCD. Transcranial Doppler screening identifies children at high stroke risk - abnormal velocities indicate need for chronic transfusion therapy.',
    },
    4: {
      level: 4,
      summary: 'SCD pathogenesis involves HbS polymer-induced RBC membrane damage, adhesion molecule upregulation, nitric oxide depletion, and sterile inflammation creating a complex vasculopathy with both acute and chronic manifestations.',
      explanation: `## Advanced Molecular Pathophysiology

### HbS Polymer Dynamics

**Nucleation and Growth:**
- HbS polymerization follows a double-nucleation mechanism
- Delay time inversely proportional to ~30th power of HbS concentration
- Critical for understanding why HbF is protective (interrupts polymer formation)

**Membrane Effects:**
- Repeated sickling damages the lipid bilayer
- Potassium loss through Gardos channels → dehydration
- Phosphatidylserine exposure → prothrombotic surface
- Irreversibly sickled cells (ISC): permanently damaged membranes

### Vascular Pathobiology

**Hemolysis-Endothelial Dysfunction Axis:**
1. Intravascular hemolysis releases free hemoglobin
2. Free Hb scavenges nitric oxide (NO)
3. Arginase released from RBCs depletes arginine (NO precursor)
4. Reduced NO availability causes:
   - Vasoconstriction
   - Platelet activation
   - Endothelial adhesion molecule expression
   - Pulmonary hypertension

**Sterile Inflammation:**
- Damage-associated molecular patterns (DAMPs) from hemolysis
- Heme activates TLR4 on endothelium
- IL-1β, TNF-α, IL-6 elevation
- Neutrophil extracellular traps (NETs) promote occlusion

### Genotype-Phenotype Correlations

| Genotype | Hemoglobin Pattern | Severity |
|----------|-------------------|----------|
| HbSS | ~90% HbS, <10% HbF | Severe |
| HbSC | ~50% HbS, ~50% HbC | Moderate |
| HbS/β⁰-thal | ~90% HbS, no HbA | Severe |
| HbS/β⁺-thal | 60-90% HbS, some HbA | Variable |

**Genetic Modifiers:**
- α-thalassemia co-inheritance: Reduces hemolysis but may increase vaso-occlusion
- BCL11A variants: Affect HbF levels
- HBS1L-MYB region: Influences HbF
- Senegal/Arab-Indian haplotypes: Higher HbF, milder disease

### Organ-Specific Complications

**Cerebrovascular Disease:**
- Large vessel stenosis (circle of Willis) → stroke
- Silent cerebral infarcts in 30% of children
- Moyamoya pattern neovascularization
- Cognitive impairment even without overt stroke

**Cardiopulmonary:**
- High-output cardiac state (compensatory)
- Pulmonary hypertension (30-40% by echo screening)
- Right heart failure
- Acute chest syndrome: Fat embolism + infection + vaso-occlusion

**Nephropathy:**
- Hyposthenuria (inability to concentrate urine)
- Papillary necrosis
- Hyperfiltration → glomerulosclerosis → CKD
- APOL1 variants may modify risk

### Laboratory Assessment

| Test | Finding | Significance |
|------|---------|--------------|
| Hb | 6-9 g/dL | Chronic anemia baseline |
| Reticulocytes | 10-20% | Compensatory production |
| LDH | Elevated | Hemolysis marker |
| Bilirubin | Elevated (indirect) | Hemolysis |
| Ferritin | Elevated | Transfusion burden |
| Tricuspid regurgitant velocity | >2.5 m/s | Pulmonary hypertension risk |`,
      keyTerms: [
        { term: 'Gardos channel', definition: 'Calcium-activated potassium channel; causes RBC dehydration in SCD' },
        { term: 'nitric oxide scavenging', definition: 'Free hemoglobin consuming NO, leading to endothelial dysfunction' },
        { term: 'sterile inflammation', definition: 'Inflammatory response triggered by endogenous damage signals without infection' },
        { term: 'BCL11A', definition: 'Transcription factor that represses fetal hemoglobin; therapeutic target', pronunciation: 'B-C-L-eleven-A' },
        { term: 'moyamoya', definition: 'Pattern of abnormal blood vessel development at base of brain; "puff of smoke" on angiography' },
        { term: 'hyposthenuria', definition: 'Inability to concentrate urine; early sign of sickle nephropathy', pronunciation: 'hy-poh-sthen-YOO-ree-ah' },
      ],
      clinicalNotes: 'Tricuspid regurgitant jet velocity >2.5 m/s on echocardiography indicates elevated pulmonary pressures and 10x increased mortality risk. Right heart catheterization confirms diagnosis. Elevated NT-proBNP also correlates with pulmonary hypertension.',
    },
    5: {
      level: 5,
      summary: 'Contemporary SCD management integrates disease-modifying therapies (hydroxyurea, L-glutamine, voxelotor, crizanlizumab), curative approaches (HCT, gene therapy), and precision medicine guided by genetic modifiers and biomarkers.',
      explanation: `## Disease-Modifying Pharmacotherapy

### Hydroxyurea (First-Line)

**Mechanisms:**
- Increases HbF production (gamma-globin induction)
- Reduces neutrophil count (less vaso-occlusion)
- Increases nitric oxide production
- Macrocytosis reduces MCHC

**Evidence:**
- MSH trial: 44% reduction in pain crises
- BABY HUG: Benefits even in young children
- Long-term follow-up: Reduced mortality, organ protection

**Monitoring:**
- CBC every 4-8 weeks during titration
- Maximum tolerated dose (MTD) targeting
- Goal: MCV increase, ANC >2,000, ARC adequate

### Newer Agents

| Drug | Mechanism | Key Trial | FDA Status |
|------|-----------|-----------|------------|
| L-glutamine | Reduces oxidative stress | Phase 3: 25% reduction in crises | Approved 2017 |
| Voxelotor | HbS polymerization inhibitor | HOPE trial: Hb increase 1.1 g/dL | Approved 2019 |
| Crizanlizumab | Anti-P-selectin antibody | SUSTAIN: 45% crisis reduction | Approved 2019 |

### Transfusion Therapy

**Indications:**
- Acute: Stroke, severe ACS, splenic sequestration
- Chronic: Primary/secondary stroke prevention, recurrent ACS
- Surgical: High-risk procedures

**Goals:**
- Simple transfusion: Increase Hb (avoid >10 g/dL acutely)
- Exchange transfusion: Reduce HbS% to <30%

**Complications:**
- Alloimmunization (30% prevalence)
- Iron overload (requires chelation)
- Delayed hemolytic transfusion reaction

## Curative Therapies

### Hematopoietic Cell Transplantation (HCT)

**Outcomes (HLA-matched sibling):**
- Event-free survival: ~90%
- Overall survival: >95%
- Cure rate: ~90%

**Challenges:**
- Donor availability (~18% have matched sibling)
- Graft rejection risk with reduced-intensity conditioning
- GVHD in matched unrelated/haploidentical donors

### Gene Therapy Approaches

**Gene Addition:**
- LentiGlobin (bluebird bio): Lentiviral vector expressing βA-T87Q
- HGB-206/HGB-210 trials: Durable HbF/HbAT87Q production
- FDA approved as Lyfgenia (2023)

**Gene Editing:**
- CRISPR/Cas9 targeting BCL11A erythroid enhancer
- Exa-cel (exagamglogene autotemcel): BCL11A disruption
- FDA approved as Casgevy (2023)
- Results: Robust HbF induction, VOC elimination

**Considerations:**
- Myeloablative conditioning required
- Long-term safety monitoring (insertional mutagenesis)
- Access and cost ($2-3 million per treatment)

## Precision Medicine Approaches

### Biomarkers

| Biomarker | Application |
|-----------|-------------|
| HbF level | Predict disease severity, monitor therapy |
| LDH, reticulocyte | Hemolytic subphenotype |
| TRV by echo | Pulmonary hypertension screening |
| MRI brain | Silent infarct detection |
| TCD velocity | Stroke risk stratification |
| Ferritin | Transfusion burden monitoring |
| Albuminuria | Nephropathy screening |

### Genetic Modifiers in Clinical Practice

- **HbF QTL testing**: May predict hydroxyurea response
- **Alpha-thalassemia status**: Informs transfusion strategy
- **APOL1 genotype**: Identifies nephropathy risk
- **UGT1A1 polymorphisms**: Affect bilirubin levels, Gilbert's overlap

## Management of Complications

### Acute Chest Syndrome Protocol
1. Oxygen supplementation (avoid hyperoxia)
2. Incentive spirometry
3. Pain control (avoid excessive opioids/hypoventilation)
4. Empiric antibiotics (atypicals + encapsulated organisms)
5. Exchange transfusion if deteriorating

### Stroke Management
- Acute: Exchange transfusion to HbS <30%
- Chronic: Regular transfusions or HCT if eligible
- Primary prevention: TCD screening, chronic transfusion if abnormal

### Reproductive Health
- Preconception counseling and carrier testing
- High-risk pregnancy management
- Partner testing essential
- Prenatal diagnosis options (CVS, amniocentesis)

## Emerging Directions

- Oral HbS polymerization inhibitors (GBT021601)
- Pyruvate kinase activators (mitapivat)
- Gene therapy without myeloablation
- Universal donor gene-edited cells
- Anti-sickling HbF inducers beyond hydroxyurea`,
      keyTerms: [
        { term: 'voxelotor', definition: 'HbS polymerization inhibitor that increases oxygen affinity; reduces hemolysis', pronunciation: 'vok-SEL-oh-tor' },
        { term: 'crizanlizumab', definition: 'Monoclonal antibody against P-selectin; reduces vaso-occlusive crises', pronunciation: 'kriz-an-LIZ-oo-mab' },
        { term: 'exagamglogene autotemcel', definition: 'CRISPR-based gene therapy targeting BCL11A to induce HbF; FDA approved as Casgevy' },
        { term: 'alloimmunization', definition: 'Development of antibodies against foreign blood cell antigens from transfusion' },
        { term: 'exchange transfusion', definition: 'Procedure removing patient blood while transfusing donor blood to reduce HbS percentage' },
        { term: 'transcranial Doppler (TCD)', definition: 'Ultrasound measuring cerebral blood flow velocity; screens for stroke risk', pronunciation: 'trans-CRAY-nee-al DOP-ler' },
      ],
      clinicalNotes: `Critical clinical updates:
1. Gene therapy (Casgevy, Lyfgenia) approved 2023 - potential cure but access limited
2. TCD screening should begin at age 2 and continue annually
3. Hydroxyurea should be offered to all patients with HbSS/HbSB0-thal regardless of severity
4. Penicillin prophylaxis until age 5 minimum
5. Vaccinations: PCV13/PPSV23, meningococcal, annual influenza
6. Opioid tolerance is common - do not undertreat acute pain
7. Acute chest syndrome may present subtly - low threshold for chest X-ray`,
    },
  },

  media: [
    {
      id: 'sickle-cell-shape',
      type: 'diagram',
      filename: 'sickle-vs-normal-rbc.svg',
      title: 'Sickle Cell vs Normal Red Blood Cell',
      description: 'Comparison of normal biconcave disc-shaped RBC with crescent-shaped sickle cell',
    },
    {
      id: 'hbs-polymerization',
      type: 'diagram',
      filename: 'hbs-polymerization.svg',
      title: 'Hemoglobin S Polymerization',
      description: 'Molecular diagram showing HbS fiber formation under deoxygenation',
    },
    {
      id: 'sickle-inheritance',
      type: 'diagram',
      filename: 'sickle-cell-inheritance.svg',
      title: 'Sickle Cell Disease Inheritance Pattern',
      description: 'Autosomal recessive inheritance diagram showing carrier and affected offspring probabilities',
    },
    {
      id: 'scd-pathophysiology',
      type: 'diagram',
      filename: 'scd-pathophysiology.svg',
      title: 'Sickle Cell Disease Pathophysiology',
      description: 'Overview of hemolysis, vaso-occlusion, and organ damage pathways',
    },
  ],

  citations: [
    {
      id: 'piel-2017',
      type: 'article',
      title: 'Sickle Cell Disease',
      authors: ['Piel, F.B.', 'Steinberg, M.H.', 'Rees, D.C.'],
      source: 'New England Journal of Medicine',
      chapter: '376',
      page: '1561-1573',
    },
    {
      id: 'kato-2018',
      type: 'article',
      title: 'Sickle cell disease',
      authors: ['Kato, G.J.', 'Piel, F.B.', 'Reid, C.D.', 'et al.'],
      source: 'Nature Reviews Disease Primers',
      chapter: '4',
      page: '18010',
    },
    {
      id: 'frangoul-2021',
      type: 'article',
      title: 'CRISPR-Cas9 Gene Editing for Sickle Cell Disease and Beta-Thalassemia',
      authors: ['Frangoul, H.', 'Altshuler, D.', 'Cappellini, M.D.', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '384',
      page: '252-260',
    },
  ],

  crossReferences: [
    { targetId: 'concept-autosomal-recessive', targetType: 'concept', relationship: 'related', label: 'Autosomal Recessive Inheritance' },
    { targetId: 'concept-hemoglobin', targetType: 'concept', relationship: 'related', label: 'Hemoglobin Structure' },
    { targetId: 'condition-thalassemia', targetType: 'condition', relationship: 'related', label: 'Thalassemia' },
    { targetId: 'concept-carrier-screening', targetType: 'concept', relationship: 'related', label: 'Carrier Screening' },
    { targetId: 'concept-gene-therapy', targetType: 'concept', relationship: 'related', label: 'Gene Therapy' },
  ],

  tags: {
    systems: ['hematology', 'genetics'],
    topics: ['hemoglobinopathies', 'inherited disorders', 'gene therapy'],
    keywords: ['sickle cell', 'HbS', 'hemolysis', 'vaso-occlusion', 'hydroxyurea', 'CRISPR'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sickleCellDiseaseContent;
