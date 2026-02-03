/**
 * Pancreatic Islets (Islets of Langerhans) - Anatomy
 *
 * Endocrine cell clusters within the pancreas producing insulin,
 * glucagon, somatostatin, and other hormones for glucose homeostasis.
 */

import { EducationalContent } from '../../types';

export const PANCREATIC_ISLETS_ANATOMY: EducationalContent = {
  id: 'anatomy-pancreatic-islets',
  type: 'structure',
  name: 'Pancreatic Islets',
  alternateNames: ['Islets of Langerhans', 'Endocrine pancreas', 'Pancreatic islet cells'],
  fmaId: 'FMA:16016',

  levels: {
    1: {
      level: 1,
      summary: 'Pancreatic islets are tiny clusters of special cells in your pancreas that make hormones like insulin to control your blood sugar.',
      explanation: `Your pancreas is an organ behind your stomach that has two different jobs:
1. Making digestive juices (the exocrine part - most of the pancreas)
2. Making hormones (the endocrine part - the islets)

**What Are Pancreatic Islets?**
Scattered throughout your pancreas are about a million tiny clusters of cells called islets (pronounced EYE-lets). They were discovered by a scientist named Paul Langerhans, so they're also called the "Islets of Langerhans."

**What Do They Make?**
The islets make several important hormones:

1. **Insulin** (from beta cells)
   - Lowers blood sugar after you eat
   - Lets sugar enter your cells for energy
   - Without it, sugar builds up in blood (diabetes)

2. **Glucagon** (from alpha cells)
   - Raises blood sugar when it gets too low
   - Tells liver to release stored sugar

These two hormones work like a seesaw to keep your blood sugar balanced!

**Fun Fact:** Even though islets make up only 1-2% of your pancreas, they are essential for life!`,
      keyTerms: [
        { term: 'insulin', definition: 'A hormone that lowers blood sugar by helping it enter your cells' },
        { term: 'glucagon', definition: 'A hormone that raises blood sugar by releasing stored sugar from the liver' },
        { term: 'blood sugar', definition: 'The amount of glucose (sugar) in your blood, which gives your cells energy' },
        { term: 'islet', definition: 'A small cluster or island of cells' },
      ],
      analogies: [
        'Insulin and glucagon work like a seesaw - when one goes up, the other goes down, keeping blood sugar balanced in the middle.',
        'Pancreatic islets are like tiny islands scattered in an ocean of digestive tissue.',
      ],
      examples: [
        'After eating a candy bar, your islets release insulin to help your cells use all that sugar.',
        'When you skip breakfast and feel shaky, your islets release glucagon to raise your blood sugar.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pancreatic islets are clusters of endocrine cells scattered throughout the pancreas, containing alpha cells (glucagon), beta cells (insulin), delta cells (somatostatin), and other cell types that regulate glucose metabolism through hormone secretion.',
      explanation: `**Location and Structure:**
The pancreas is located behind the stomach, with its head in the curve of the duodenum and its tail reaching toward the spleen. Throughout the exocrine tissue (which makes digestive enzymes), there are approximately 1 million islets.

**Islet Characteristics:**
- Size: 50-500 micrometers in diameter
- Number: ~1-2 million per pancreas
- Total mass: Only 1-2% of pancreas weight
- Distribution: More in tail than head

**Cell Types in Islets:**

| Cell Type | % of Islet | Hormone | Main Function |
|-----------|------------|---------|---------------|
| Beta (β) | 50-70% | Insulin | Lowers blood glucose |
| Alpha (α) | 20-30% | Glucagon | Raises blood glucose |
| Delta (δ) | 5-10% | Somatostatin | Inhibits both insulin and glucagon |
| PP (F) | 1-2% | Pancreatic polypeptide | Regulates pancreatic secretions |
| Epsilon (ε) | <1% | Ghrelin | Appetite stimulation |

**How They Work Together:**

*After a Meal (High Blood Sugar):*
1. Beta cells sense high glucose
2. Insulin released → glucose enters cells
3. Glucagon suppressed by insulin
4. Blood sugar returns to normal

*Between Meals (Low Blood Sugar):*
1. Alpha cells sense low glucose
2. Glucagon released → liver releases stored glucose
3. Beta cells stop releasing insulin
4. Blood sugar maintained

**Blood Supply:**
Islets receive 10-15% of pancreatic blood flow despite being only 1-2% of mass. They have a rich capillary network for rapid hormone release.`,
      keyTerms: [
        { term: 'beta cells', definition: 'The most common islet cells that produce insulin' },
        { term: 'alpha cells', definition: 'Islet cells that produce glucagon to raise blood sugar' },
        { term: 'delta cells', definition: 'Islet cells that produce somatostatin, which inhibits other islet hormones' },
        { term: 'somatostatin', definition: 'A hormone that inhibits the release of many other hormones' },
        { term: 'pancreatic polypeptide', definition: 'A hormone from PP cells that regulates pancreatic and GI function' },
      ],
      analogies: [
        'The islet is like a small committee where beta cells are the majority party (controlling insulin), but alpha and delta cells provide important checks and balances.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pancreatic islets are highly vascularized micro-organs with species-specific cytoarchitecture, where beta cells form the core in rodents but are intermingled in humans, and paracrine interactions between cell types coordinate glucose-dependent hormone secretion.',
      explanation: `**Islet Architecture:**

*Human Islet Organization:*
- Beta, alpha, and delta cells are intermingled throughout
- No distinct core-mantle arrangement
- Heterogeneous cell distribution
- Average ~1,500 cells per islet

*Rodent Islet Organization:*
- Beta cell core (~70-80% of islet)
- Alpha and delta cells in peripheral mantle
- More uniform structure
- Important when interpreting mouse studies

**Detailed Cell Populations:**

*Beta Cells (50-70%):*
- Insulin + C-peptide + IAPP (amylin)
- Proinsulin cleaved in granules
- Biphasic insulin release (first phase: 5-10 min, second phase: sustained)
- GLUT2 for glucose sensing (humans: also GLUT1)

*Alpha Cells (20-30%):*
- Glucagon + proglucagon-derived peptides
- GLP-1 and GLP-2 produced in intestine (same gene, different processing)
- Paradoxically contain GLUT1 (low Km for glucose)
- Regulated by paracrine signals from beta cells

*Delta Cells (5-10%):*
- Somatostatin (two forms: SST-14 and SST-28)
- Paracrine inhibition of both insulin and glucagon
- Long processes contact multiple beta cells
- Respond to glucose, amino acids, incretin hormones

*PP Cells (1-2%):*
- Located primarily in the head of pancreas
- Release pancreatic polypeptide after meals
- Vagal stimulation triggers release

*Epsilon Cells (<1%):*
- Ghrelin (appetite hormone)
- More prominent in fetal islets
- Function in adult islets not fully understood

**Islet Blood Flow:**

*Vascular Organization:*
- Afferent arterioles enter islet
- Dense fenestrated capillary network
- Blood flow direction varies by islet
- Venous drainage to exocrine pancreas (insuloacinar portal system)

*Functional Significance:*
- High blood flow (10-15% of pancreatic flow for 1-2% mass)
- Rapid hormone delivery to systemic circulation
- Local hormone concentrations affect exocrine function

**Embryology:**
- Endocrine cells arise from ductal epithelium (endoderm)
- Key transcription factors: PDX1, NGN3, Nkx6.1, MafA
- Beta cell specification requires MafA
- Islet formation by cell aggregation during fetal development

**Innervation:**
- Sympathetic: Inhibits insulin, stimulates glucagon
- Parasympathetic: Stimulates insulin secretion
- Sensory nerves: Substance P, CGRP
- Islet ganglia contain intrinsic neurons`,
      keyTerms: [
        { term: 'insuloacinar portal system', definition: 'Venous drainage from islets to surrounding exocrine pancreas, exposing acinar cells to high insulin' },
        { term: 'IAPP/amylin', definition: 'Islet amyloid polypeptide; co-secreted with insulin, forms amyloid deposits in type 2 diabetes' },
        { term: 'C-peptide', definition: 'Connecting peptide released during proinsulin cleavage; marker of endogenous insulin production' },
        { term: 'PDX1', definition: 'Pancreatic and duodenal homeobox 1; master transcription factor for pancreas development and beta cell function' },
        { term: 'NGN3', definition: 'Neurogenin 3; transcription factor required for all pancreatic endocrine cell development' },
      ],
      clinicalNotes: 'Human islet architecture differs significantly from rodents, which has implications for translating mouse diabetes research. C-peptide levels can distinguish type 1 from type 2 diabetes and assess residual beta cell function. IAPP aggregates as amyloid in type 2 diabetes islets, contributing to beta cell death. Islet transplantation typically requires islets from 2-3 donor pancreases due to isolation losses.',
    },
    4: {
      level: 4,
      summary: 'Pancreatic islet function integrates stimulus-secretion coupling in beta cells via metabolic amplifying pathways, inter-islet communication through gap junctions and paracrine signals, and incretin-dependent potentiation, with dysfunction underlying both type 1 and type 2 diabetes.',
      explanation: `**Beta Cell Stimulus-Secretion Coupling:**

*Triggering Pathway:*
1. Glucose enters via GLUT2 (low affinity) or GLUT1 (high affinity)
2. Glucokinase phosphorylates glucose (rate-limiting, glucose sensor)
3. Glycolysis + mitochondrial metabolism → ATP production
4. ATP:ADP ratio increases
5. K-ATP channels close (SUR1/Kir6.2 complex)
6. Membrane depolarization
7. Voltage-gated Ca²⁺ channels open
8. Ca²⁺ influx triggers insulin granule exocytosis

*Amplifying Pathway:*
- Enhances secretion beyond that from Ca²⁺ alone
- Requires glucose metabolism
- Involves: cAMP, NADPH, glutamate, lipid signals
- Responsible for sustained second-phase secretion

**K-ATP Channel Complex:**

| Subunit | Gene | Function | Clinical Mutation |
|---------|------|----------|-------------------|
| Kir6.2 | KCNJ11 | Pore-forming K⁺ channel | Neonatal diabetes, CHI |
| SUR1 | ABCC8 | Regulatory/drug binding | CHI, neonatal diabetes |

- Sulfonylureas bind SUR1 → close channel → stimulate insulin
- Diazoxide opens channel → inhibits insulin (treats CHI)

**Incretin Effect:**

*GLP-1 (from L cells):*
- Released from intestine after meals
- Binds GLP-1R on beta cells → Gs → cAMP
- Potentiates glucose-stimulated insulin secretion
- Does NOT cause hypoglycemia at low glucose (glucose-dependent)
- Inhibits glucagon secretion

*GIP (from K cells):*
- Similar mechanism to GLP-1
- Effect diminished in type 2 diabetes
- May promote fat storage

*Clinical Applications:*
- GLP-1 receptor agonists (semaglutide, liraglutide)
- DPP-4 inhibitors (sitagliptin) - prevent incretin degradation

**Alpha Cell Regulation:**

*Paracrine Control:*
- Insulin: Directly inhibits glucagon secretion
- Somatostatin: Strongly inhibits glucagon
- Zinc (co-released with insulin): Inhibits alpha cells
- GABA (from beta cells): Inhibits alpha cells

*Intrinsic Glucose Sensing:*
- Alpha cells also have glucokinase
- Low glucose → less ATP → K-ATP opens → hyperpolarization
- Paradox: K-ATP opening should inhibit, but P/Q Ca²⁺ channel coupling differs
- Na⁺ channel involvement in glucagon secretion

*Type 1 Diabetes Glucagon Dysregulation:*
- Loss of beta cell paracrine signals
- Glucagon not suppressed after meals (hyperglucagonemia)
- Glucagon not increased during hypoglycemia (impaired counterregulation)

**Islet Synchronization:**

*Gap Junctions:*
- Connexin36 (Cx36) connects beta cells
- Allows synchronized Ca²⁺ waves across islet
- Pulsatile insulin secretion (~5 min intervals)
- Disruption leads to impaired secretion

*Functional Heterogeneity:*
- Hub cells: Highly connected, coordinate islet response
- Follower cells: Less connected, respond to hub signals
- Hub cells may be vulnerable in early diabetes

**Islet Inflammation in Diabetes:**

*Type 1 Diabetes:*
- Autoimmune T cell attack on beta cells
- Insulitis: Immune cell infiltration
- Autoantibodies: GAD65, IA-2, insulin, ZnT8

*Type 2 Diabetes:*
- IAPP amyloid deposits
- IL-1β and other inflammatory cytokines
- ER stress from chronic overwork
- Glucolipotoxicity: Chronic high glucose and fatty acids`,
      keyTerms: [
        { term: 'glucokinase', definition: 'Beta cell glucose sensor; hexokinase IV with low glucose affinity (Km ~8 mM)' },
        { term: 'K-ATP channel', definition: 'ATP-sensitive potassium channel coupling glucose metabolism to electrical activity in beta cells' },
        { term: 'incretin effect', definition: 'Greater insulin response to oral vs. IV glucose, mediated by GLP-1 and GIP' },
        { term: 'connexin36', definition: 'Gap junction protein connecting beta cells for synchronized secretion' },
        { term: 'glucolipotoxicity', definition: 'Beta cell damage from chronic exposure to high glucose and fatty acids' },
        { term: 'hub cells', definition: 'Highly connected beta cells that coordinate islet electrical activity' },
      ],
      clinicalNotes: 'Glucokinase activators were explored as diabetes therapies but caused hypoglycemia. MODY2 (glucokinase mutations) causes mild fasting hyperglycemia rarely requiring treatment. Congenital hyperinsulinism (CHI) from K-ATP channel mutations causes severe neonatal hypoglycemia requiring diazoxide or pancreatectomy. GLP-1 agonists are transforming diabetes therapy due to weight loss effects and cardiovascular benefits.',
    },
    5: {
      level: 5,
      summary: 'Pancreatic islet biology encompasses developmental programming, heterogeneous cell populations with functional hierarchies, complex secretory dynamics amenable to therapeutic manipulation, and regenerative potential with implications for diabetes cure strategies including stem cell-derived beta cells and immunomodulation.',
      explanation: `**Beta Cell Development and Transcription Factor Network:**

*Developmental Hierarchy:*
\`\`\`
Foregut endoderm → PDX1 → Pancreatic progenitor
                        ↓
                   NGN3 (transient)
                        ↓
                   Endocrine progenitor
                        ↓
            ←───────────┼───────────→
           ↓            ↓            ↓
        Alpha        Beta         Delta
        (Arx)    (Pax4, MafA)   (Hhex)
\`\`\`

*Key Transcription Factors:*

| Factor | Role | Mutation Phenotype |
|--------|------|-------------------|
| PDX1 | Pancreas development, beta cell function | MODY4, pancreatic agenesis (homozygous) |
| HNF1A | Beta cell GLUT2, glycolysis genes | MODY3 (most common MODY) |
| HNF4A | Upstream of HNF1A | MODY1 |
| HNF1B | Pancreas development | MODY5 + renal cysts |
| NGN3 | All endocrine cell specification | Permanent neonatal diabetes |
| MafA | Beta cell maturation | Diabetes, impaired insulin secretion |

**Beta Cell Heterogeneity:**

*Functional Subpopulations:*
- Virgin beta cells: Lower insulin content, potentially proliferative
- Mature beta cells: High insulin, glucose-responsive
- Hub cells: Highly connected pacemakers
- Aged beta cells: Accumulated DNA damage, senescent

*Single-Cell Transcriptomics Findings:*
- Multiple beta cell states identified
- CD9⁺ vs CD9⁻ beta cells differ in glucose response
- Heterogeneity increases with age and diabetes
- Some beta cells may dedifferentiate in diabetes

**Neonatal Diabetes vs MODY:**

*Neonatal Diabetes (<6 months):*
| Gene | Mechanism | Treatment |
|------|-----------|-----------|
| KCNJ11 (Kir6.2) | K-ATP activation | Sulfonylureas (can stop insulin!) |
| ABCC8 (SUR1) | K-ATP activation | Sulfonylureas |
| INS | Misfolded proinsulin | Insulin (ER stress mechanism) |
| GCK (homozygous) | No glucose sensing | Insulin |

*MODY (Maturity Onset Diabetes of the Young):*
- Autosomal dominant
- Age <25 at diagnosis
- Often misdiagnosed as type 1 or type 2
- HNF1A and GCK mutations most common

**Islet Transplantation:**

*Edmonton Protocol (2000):*
- Fresh islets from deceased donors
- Infusion via portal vein
- Immunosuppression: Sirolimus, tacrolimus (steroid-free)
- Success: Insulin independence in ~50% at 5 years

*Current Challenges:*
- Donor shortage (need 2-3 donors per recipient)
- Islet loss during isolation (>50%)
- Instant blood-mediated inflammatory reaction (IBMIR)
- Chronic immunosuppression risks
- Gradual graft loss over time

*Emerging Approaches:*
- Encapsulation devices (immune barrier without immunosuppression)
- Stem cell-derived beta cells (unlimited supply)
- Tolerance induction protocols

**Stem Cell-Derived Beta Cells:**

*Directed Differentiation Protocol:*
\`\`\`
Pluripotent stem cell → Definitive endoderm → Foregut → Pancreatic progenitor → Endocrine progenitor → Beta-like cell
       (Activin A)      (FGF10, RA)    (EGF, Noggin)    (Notch inh, T3)     (Maturation factors)
\`\`\`

*Current Products:*
- VX-880 (Vertex): Fully differentiated beta cells, requires immunosuppression
- VX-264 (Vertex): Encapsulated, no immunosuppression needed
- ViaCyte: PEC-01 cells, encapsulation approaches

*Challenges:*
- Full functional maturation
- Long-term survival
- Scaling for clinical use
- Immune protection strategies

**Type 1 Diabetes Prevention:**

*At-Risk Identification:*
- First-degree relatives: 5-10% risk
- Multiple autoantibodies: 70%+ 5-year progression
- Staging: Stage 1 (autoantibodies), Stage 2 (dysglycemia), Stage 3 (clinical)

*Prevention Trials:*
| Agent | Trial | Outcome |
|-------|-------|---------|
| Teplizumab | TrialNet | 2-year delay of Stage 3 (FDA approved 2022) |
| Abatacept | ACCEPT | Slower C-peptide decline |
| Low-dose ATG | START | Preserved C-peptide |

*Teplizumab (Anti-CD3):*
- Humanized anti-CD3 monoclonal antibody
- Induces T regulatory cells
- First disease-modifying therapy for at-risk individuals
- FDA approved for Stage 2 type 1 diabetes

**Advanced Islet Imaging:**

*In Vivo Beta Cell Mass Assessment:*
- PET: 11C-DTBZ (VMAT2 ligand), limited specificity
- MRI: Manganese-enhanced MRI (experimental)
- No validated clinical technique yet

*Functional Imaging:*
- GLP-1R imaging agents in development
- Could assess functional beta cell mass non-invasively`,
      keyTerms: [
        { term: 'MODY', definition: 'Maturity onset diabetes of the young; monogenic diabetes with autosomal dominant inheritance' },
        { term: 'Edmonton Protocol', definition: 'Landmark islet transplantation protocol using steroid-free immunosuppression' },
        { term: 'teplizumab', definition: 'Anti-CD3 antibody that delays type 1 diabetes progression; first disease-modifying therapy' },
        { term: 'IBMIR', definition: 'Instant blood-mediated inflammatory reaction; immediate islet loss after intraportal infusion' },
        { term: 'VX-880', definition: 'Stem cell-derived islet cell therapy in clinical trials for type 1 diabetes' },
        { term: 'NGN3', definition: 'Neurogenin 3; master transcription factor for pancreatic endocrine cell specification' },
      ],
      clinicalNotes: 'Genetic testing should be considered for diabetes diagnosed <6 months (likely monogenic), diabetes before age 25 without obesity or autoantibodies (possible MODY), and strong family history with autosomal dominant pattern. KCNJ11/ABCC8 neonatal diabetes often responds dramatically to sulfonylureas, allowing transition from insulin. Teplizumab approval marks a paradigm shift toward type 1 diabetes prevention. Stem cell-derived beta cells are progressing through clinical trials with early promising results.',
    },
  },

  media: [
    {
      id: 'islet-histology-1',
      type: 'histology',
      filename: 'pancreatic-islet-immunostaining.jpg',
      title: 'Pancreatic Islet Immunohistochemistry',
      description: 'Islet showing insulin (beta cells) and glucagon (alpha cells) immunostaining',
    },
    {
      id: 'islet-diagram-1',
      type: 'diagram',
      filename: 'islet-cell-types.svg',
      title: 'Islet Cell Organization',
      description: 'Diagram showing arrangement of alpha, beta, delta, and PP cells',
    },
  ],

  citations: [
    {
      id: 'rorsman-islet',
      type: 'article',
      title: 'Pancreatic Beta Cell Electrical Activity and Insulin Secretion',
      authors: ['Rorsman, P', 'Ashcroft, FM'],
      source: 'Physiological Reviews',
      license: 'Copyrighted',
    },
    {
      id: 'ada-diabetes-standards',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      source: 'Diabetes Care (American Diabetes Association)',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-glucose-homeostasis', targetType: 'pathway', relationship: 'related', label: 'Glucose Homeostasis' },
    { targetId: 'histology-islet-cells', targetType: 'topic', relationship: 'related', label: 'Islet Histology' },
    { targetId: 'pathology-diabetes-mellitus', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Mellitus' },
    { targetId: 'pathology-insulinoma', targetType: 'condition', relationship: 'see-also', label: 'Insulinoma' },
  ],

  tags: {
    systems: ['endocrine', 'digestive'],
    structures: ['FMA:16016', 'pancreatic islets', 'islets of Langerhans'],
    topics: ['anatomy', 'glucose metabolism'],
    keywords: ['insulin', 'glucagon', 'beta cells', 'alpha cells', 'diabetes', 'glucose homeostasis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
