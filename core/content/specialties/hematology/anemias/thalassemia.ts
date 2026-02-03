/**
 * Thalassemia - Comprehensive Educational Content
 *
 * Inherited disorders of hemoglobin synthesis characterized by reduced or
 * absent production of alpha or beta globin chains.
 */

import { EducationalContent } from '../../../types';

export const thalassemia: EducationalContent = {
  id: 'condition-thalassemia',
  type: 'condition',
  name: 'Thalassemia',
  nameEs: 'Talasemia',
  alternateNames: ['Thalassemia syndromes', 'Cooley anemia', 'Mediterranean anemia'],
  hpoId: 'HP:0001878',

  levels: {
    1: {
      level: 1,
      summary: 'Thalassemia is an inherited blood condition where the body cannot make enough normal hemoglobin, causing anemia that ranges from mild to severe.',
      explanation: `Thalassemia is a condition you are born with that affects how your body makes hemoglobin, the protein inside red blood cells that carries oxygen.

**What happens:**
Hemoglobin is made of two types of protein chains: alpha and beta. In thalassemia, the body cannot make enough of one type, so the red blood cells are small, fragile, and break apart too easily.

**Two main types:**
- **Alpha thalassemia:** Not enough alpha chains (more common in Southeast Asian and African populations)
- **Beta thalassemia:** Not enough beta chains (more common in Mediterranean, Middle Eastern, and South Asian populations)

**Range of severity:**
- **Thalassemia trait (minor):** Mild or no symptoms; often found by accident on blood tests
- **Thalassemia intermedia:** Moderate anemia; may sometimes need transfusions
- **Thalassemia major:** Severe anemia from birth; needs regular blood transfusions to survive

**Important:** People with thalassemia trait are often mistakenly told they have iron deficiency. Taking iron when you do not need it can be harmful.`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'The protein in red blood cells that carries oxygen; made of alpha and beta chains' },
        { term: 'thalassemia trait', definition: 'Carrying one copy of the thalassemia gene; usually causes only mild anemia' },
        { term: 'transfusion', definition: 'Receiving donated blood through an IV to treat severe anemia' },
      ],
      analogies: [
        'Hemoglobin is like a car that needs four tires (two alpha, two beta). In thalassemia, the factory cannot make enough of one tire type, so the cars do not work properly.',
      ],
      patientCounselingPoints: [
        'Thalassemia trait does not usually require treatment',
        'Genetic counseling is recommended if both partners carry thalassemia genes',
        'Do not take iron supplements unless your doctor confirms iron deficiency',
      ],
    },
    2: {
      level: 2,
      summary: 'Thalassemias are autosomal recessive disorders of globin chain synthesis, classified as alpha (gene deletions on chromosome 16) or beta (point mutations on chromosome 11), with clinical severity ranging from silent carrier to transfusion-dependent anemia.',
      explanation: `## Alpha Thalassemia

Four alpha-globin genes (two on each chromosome 16). Disease severity depends on how many are deleted:

| Genes Deleted | Condition | Hb Level | Clinical Features |
|---------------|-----------|----------|-------------------|
| 1 (-a/aa) | Silent carrier | Normal | No symptoms |
| 2 (-a/-a or --/aa) | Alpha-thal trait | Mild low | Microcytosis, mild anemia |
| 3 (--/-a) | HbH disease | 7-10 g/dL | Moderate anemia, splenomegaly |
| 4 (--/--) | Hb Bart's hydrops | Incompatible with life | Fetal death in utero |

## Beta Thalassemia

Two beta-globin genes. Mutations reduce (beta+) or abolish (beta0) chain production:

| Genotype | Condition | Clinical Features |
|----------|-----------|-------------------|
| beta/beta+ or beta/beta0 | Beta-thal trait | Mild microcytic anemia |
| beta+/beta+ or beta+/beta0 | Thal intermedia | Moderate anemia, variable transfusion need |
| beta0/beta0 | Thal major | Severe anemia, transfusion-dependent from age 6-12 months |

## Diagnosis
- CBC: Low MCV (<70 fL), low MCH, normal/elevated RBC count
- Iron studies: Normal ferritin (distinguishes from iron deficiency)
- Hemoglobin electrophoresis: Elevated HbA2 (>3.5%) in beta-thal trait
- DNA analysis for alpha-thal (normal electrophoresis)

## Key Complications of Thalassemia Major
- Growth retardation and skeletal deformities (marrow expansion)
- Iron overload from chronic transfusions
- Endocrinopathies (diabetes, hypogonadism, hypothyroidism)
- Cardiomyopathy (leading cause of death)`,
      keyTerms: [
        { term: 'alpha-globin genes', definition: 'Four genes on chromosome 16 encoding the alpha chain of hemoglobin' },
        { term: 'beta-globin genes', definition: 'Two genes on chromosome 11 encoding the beta chain of hemoglobin' },
        { term: 'HbH disease', definition: 'Three alpha-gene deletions causing moderate hemolytic anemia with HbH (beta-4 tetramers)' },
        { term: 'Hb Bart\'s', definition: 'Gamma-4 tetramers formed when all alpha genes are deleted; causes hydrops fetalis' },
        { term: 'HbA2', definition: 'Minor adult hemoglobin (alpha-2/delta-2); elevated in beta-thalassemia trait' },
      ],
      analogies: [
        'Alpha-thal is like a dimmer switch with four settings - losing one bulb is barely noticeable, losing all four leaves you in complete darkness.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thalassemia pathophysiology involves ineffective erythropoiesis from unbalanced globin chain production, leading to intramedullary hemolysis, extramedullary hematopoiesis, and iron overload mediated by hepcidin suppression independent of transfusion.',
      explanation: `## Pathophysiology

**Unbalanced chain production:**
In beta-thalassemia major, excess alpha chains precipitate as insoluble aggregates, causing:
1. Oxidative damage to erythroid precursors
2. Intramedullary apoptosis (ineffective erythropoiesis ~60-80% of precursors destroyed)
3. Peripheral hemolysis of surviving defective RBCs

In HbH disease, excess beta chains form beta-4 tetramers (HbH) with high oxygen affinity, causing functional hypoxia.

**Iron overload mechanisms:**
- Transfusion-dependent: Each unit of PRBCs delivers ~200 mg iron
- Transfusion-independent: Suppressed hepcidin from erythroferrone (ERFE), GDF15, and TWSG1 released by expanding erythroid precursors, leading to unchecked intestinal iron absorption

**Bone marrow expansion:**
Massive erythroid hyperplasia causes:
- Frontal bossing, maxillary hypertrophy ("chipmunk facies")
- "Hair-on-end" appearance on skull X-ray
- Cortical thinning, pathologic fractures
- Extramedullary hematopoiesis (hepatosplenomegaly, paravertebral masses)

## Management of Thalassemia Major

**Transfusion therapy:**
- Goal: Pre-transfusion Hb 9-10.5 g/dL (suppresses endogenous erythropoiesis)
- Extended antigen matching (Rh, Kell) to prevent alloimmunization
- Monitor for alloantibodies every 3-6 months

**Iron chelation:**
| Agent | Route | Monitoring |
|-------|-------|------------|
| Deferoxamine | SC/IV infusion 8-12h | Audiometry, ophthalmology annually |
| Deferasirox | Oral daily | Renal function, LFTs monthly |
| Deferiprone | Oral TID | Weekly CBC (agranulocytosis risk) |

**Cardiac iron monitoring:** T2* MRI; <20 ms indicates iron overload, <10 ms high risk for cardiomyopathy

## Curative Options
- Matched sibling HSCT: >90% cure rate when performed early
- Haploidentical transplant with post-transplant cyclophosphamide expanding access
- Gene therapy (betibeglogene autotemcel/Zynteglo): FDA-approved for transfusion-dependent beta-thal`,
      keyTerms: [
        { term: 'ineffective erythropoiesis', definition: 'Destruction of erythroid precursors in the marrow before maturation; hallmark of thalassemia' },
        { term: 'erythroferrone (ERFE)', definition: 'Hormone released by erythroblasts that suppresses hepcidin, increasing iron absorption' },
        { term: 'T2* MRI', definition: 'Magnetic resonance technique for quantifying tissue iron; <20 ms in the heart indicates iron loading' },
        { term: 'deferasirox', definition: 'Oral iron chelator; first-line for chronic iron overload in thalassemia' },
        { term: 'betibeglogene autotemcel', definition: 'Gene therapy adding functional beta-globin gene via lentiviral vector for transfusion-dependent beta-thal' },
      ],
      clinicalNotes: 'Iron overload is the primary cause of morbidity and mortality in well-transfused thalassemia patients. Cardiac T2* MRI should be performed annually starting at age 10. Combination chelation (deferasirox + deferiprone) for severe cardiac iron loading.',
    },
    4: {
      level: 4,
      summary: 'Advanced thalassemia care requires precision genotype-phenotype correlation, optimized chelation strategies guided by tissue iron quantification, management of endocrine and cardiac complications, and selection of appropriate curative approaches.',
      explanation: `## Genotype-Phenotype Correlations

**Beta-thalassemia modifiers:**
- Co-inheritance of alpha-thal reduces chain imbalance, improving phenotype
- High HbF determinants (BCL11A, HBS1L-MYB, Xmn1-HBG2) can ameliorate severity
- beta+ mutations with residual output may manifest as intermedia rather than major

**Alpha-thalassemia genotypes of concern:**
- Southeast Asian deletion (--SEA) in cis: risk of Hb Bart's in offspring
- vs. trans deletions (-a/-a): no risk of Hb Bart's in offspring
- Non-deletional alpha-thal (e.g., Hb Constant Spring): more severe than deletional

## Iron Overload Management

**Tissue-specific monitoring:**
| Organ | Method | Threshold |
|-------|--------|-----------|
| Heart | T2* MRI | <20 ms = loading; <10 ms = severe |
| Liver | R2 MRI (FerriScan) | >7 mg/g = moderate; >15 mg/g = severe |
| Endocrine | Clinical + labs | Annual screening from age 10 |

**Chelation strategies:**
- Monotherapy: Deferasirox preferred for most patients
- Combination (DFO + DFP): For severe cardiac iron (T2* <10 ms)
- Intensive rescue: Continuous IV deferoxamine for heart failure

**Endocrine complications (prevalence in thal major):**
- Hypogonadism: 40-70% (most common)
- Hypothyroidism: 10-20%
- Diabetes mellitus: 10-15%
- Hypoparathyroidism: 5-10%
- Growth hormone deficiency: 10-20%
- Adrenal insufficiency: 5%

## Non-Transfusion-Dependent Thalassemia (NTDT)

**Includes:** Beta-thal intermedia, HbH disease, mild HbE/beta-thal
**Unique challenges:**
- Iron overload from GI hyperabsorption (not transfusion)
- Higher risk of thrombosis, pulmonary hypertension, leg ulcers
- Splenectomy may reduce transfusion needs but increases thrombotic risk

**Luspatercept (BELIEVE trial):**
- TGF-beta ligand trap promoting late-stage erythropoiesis
- Reduces transfusion burden by >=33% in ~21% of patients
- Now FDA-approved for transfusion-dependent beta-thalassemia`,
      keyTerms: [
        { term: 'luspatercept', definition: 'TGF-beta superfamily ligand trap that improves late-stage erythropoiesis; approved for transfusion-dependent beta-thal' },
        { term: 'non-transfusion-dependent thalassemia', definition: 'Intermediate thalassemia phenotypes not requiring regular transfusions but still at risk for iron overload and complications' },
        { term: 'Hb Constant Spring', definition: 'Non-deletional alpha-thal variant causing more severe disease than typical alpha-gene deletions' },
        { term: 'FerriScan', definition: 'R2-MRI based liver iron quantification technique; gold standard for non-invasive liver iron assessment' },
      ],
      clinicalNotes: 'In NTDT, iron overload occurs from hyperabsorption, not transfusion; ferritin underestimates true iron burden. Liver MRI is essential. Splenectomy in thal intermedia increases thrombotic risk; consider anticoagulation prophylaxis. Cis vs. trans alpha-gene deletions critically affect genetic counseling for hydrops fetalis risk.',
    },
    5: {
      level: 5,
      summary: 'Frontiers in thalassemia include gene therapy and gene editing approaches achieving transfusion independence, novel agents targeting iron metabolism and erythropoiesis, and global health initiatives for equitable access to screening and curative therapies.',
      explanation: `## Gene Therapy and Gene Editing

**Lentiviral gene addition:**
- Betibeglogene autotemcel (Zynteglo): Adds betaA-T87Q-globin gene
- ~89% of patients achieve transfusion independence in clinical trials
- Requires myeloablative busulfan conditioning

**CRISPR gene editing:**
- Exagamglogene autotemcel (Casgevy): BCL11A enhancer disruption to reactivate HbF
- Applicable to both beta-thal and SCD (same mechanism)
- >90% transfusion independence in beta-thal major trials

**Next-generation approaches:**
- Base editing for direct correction of specific beta-globin mutations
- In vivo editing with LNP delivery to HSCs (preclinical)
- Epigenetic approaches to sustainably reactivate gamma-globin
- Multiplexed editing: correct mutation + disrupt BCL11A simultaneously

## Novel Therapeutic Targets

**Erythropoiesis modulators:**
- Luspatercept targets GDF11/activin to improve terminal erythropoiesis
- RAP-536 (murine homolog) elucidated the mechanism
- Sotatercept (ActRIIA-Fc) redistributes erythropoiesis

**Iron metabolism targets:**
- TMPRSS6 inhibitors (siRNA, ASO) to increase hepcidin and reduce iron absorption
- Mini-hepcidins: Engineered hepcidin agonists resistant to proteolysis
- Ferroportin inhibitors: VIT-2763 oral small molecule

**Fetal hemoglobin induction beyond gene editing:**
- Pomalidomide increases HbF through cereblon-dependent mechanism
- EHMT1/2 inhibitors targeting repressive histone methylation at gamma-globin locus

## Global Epidemiology and Prevention

- ~60,000 births with severe thalassemia annually; highest burden in South/Southeast Asia and Mediterranean
- National prevention programs (Cyprus, Sardinia, Iran) reduced births by >90% through carrier screening + genetic counseling
- Preimplantation genetic testing (PGT) enables selection of unaffected embryos
- Non-invasive prenatal testing (NIPT) from cell-free fetal DNA increasingly feasible

## Emerging Challenges

- Gene therapy cost ($2.8M for Zynteglo): How to make curative therapy accessible globally?
- Long-term safety of gene editing: off-target effects, insertional mutagenesis monitoring
- Fertility preservation before myeloablative conditioning
- Transition care: adolescent patients with complex endocrine and cardiac comorbidities`,
      keyTerms: [
        { term: 'TMPRSS6 siRNA', definition: 'RNA interference approach to silence TMPRSS6, increasing hepcidin to restrict iron absorption in thalassemia' },
        { term: 'mini-hepcidins', definition: 'Engineered peptide agonists of hepcidin with improved stability for treating iron overload' },
        { term: 'betaA-T87Q-globin', definition: 'Anti-sickling beta-globin variant used in Zynteglo gene therapy vector' },
        { term: 'sotatercept', definition: 'ActRIIA-Fc fusion protein modulating TGF-beta superfamily signaling to improve erythropoiesis' },
      ],
      clinicalNotes: `Key clinical considerations:

1. Gene therapy selection: Both lentiviral (Zynteglo) and CRISPR (Casgevy) achieve transfusion independence; choice depends on specific mutation, availability, and patient factors
2. TMPRSS6 inhibitors may obviate chelation in NTDT by controlling iron absorption at the source
3. Carrier screening programs are the most cost-effective intervention at the population level
4. All patients on chelation need regular monitoring: renal function (deferasirox), neutrophils (deferiprone), eyes/ears (deferoxamine)
5. Cardiac T2* MRI is the single most important prognostic tool; normalize cardiac iron before elective procedures`,
    },
  },

  media: [
    { id: 'thal-pathophys', type: 'diagram', filename: 'thalassemia-chain-imbalance.svg', title: 'Globin Chain Imbalance in Thalassemia', description: 'Mechanism of ineffective erythropoiesis from unbalanced alpha/beta chain production' },
    { id: 'thal-genotypes', type: 'diagram', filename: 'thalassemia-genotypes.svg', title: 'Alpha and Beta Thalassemia Genotypes', description: 'Gene deletion patterns and clinical correlations' },
  ],
  citations: [
    { id: 'taher-thal-nejm', type: 'article', title: 'Thalassemia', authors: ['Taher AT', 'Musallam KM', 'Cappellini MD'], source: 'New England Journal of Medicine' },
    { id: 'tif-guidelines', type: 'article', title: 'Guidelines for the Management of Transfusion Dependent Thalassemia', authors: ['Thalassemia International Federation'], source: 'TIF Publication' },
  ],
  crossReferences: [
    { targetId: 'condition-iron-deficiency-anemia', targetType: 'condition', relationship: 'related', label: 'Iron Deficiency Anemia (differential)' },
    { targetId: 'condition-sickle-cell-disease', targetType: 'condition', relationship: 'related', label: 'Sickle Cell Disease' },
    { targetId: 'microcytic-anemia', targetType: 'condition', relationship: 'parent', label: 'Microcytic Anemia' },
    { targetId: 'topic-blood-transfusion-medicine', targetType: 'topic', relationship: 'related', label: 'Blood Transfusion Medicine' },
  ],
  tags: {
    systems: ['hematology'],
    topics: ['pathology', 'genetics', 'therapeutics'],
    keywords: ['thalassemia', 'hemoglobin', 'globin chain', 'iron overload', 'chelation', 'gene therapy', 'HbF'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thalassemia;
