import { EducationalContent } from '../../types';

export const boneMarrowContent: EducationalContent = {
  id: 'structure-bone-marrow',
  type: 'structure',
  name: 'Bone Marrow',
  alternateNames: ['Medulla ossium', 'Marrow', 'Red marrow', 'Yellow marrow'],
  fmaId: 'FMA:9608',

  levels: {
    1: {
      level: 1,
      summary: 'Bone marrow is the soft, spongy tissue inside your bones that makes blood cells.',
      explanation: `Think of bone marrow like a factory inside your bones. This factory works 24 hours a day, 7 days a week, making new blood cells. Every day, your bone marrow makes billions of new cells!

There are two types of bone marrow:
- **Red marrow**: This is the active factory that makes blood cells. It's red because of all the blood being made.
- **Yellow marrow**: This is mostly fat stored inside bones. It's like a backup factory that can start working if you need extra blood cells.

When you're a baby, almost all your bones have red marrow. As you grow up, some of it turns into yellow marrow. Adults have red marrow mainly in their hip bones, backbone, ribs, and skull.

The blood cells made here include:
- Red blood cells that carry oxygen
- White blood cells that fight germs
- Platelets that help stop bleeding`,
      keyTerms: [
        { term: 'bone marrow', definition: 'The soft tissue inside bones that makes blood cells' },
        { term: 'red marrow', definition: 'The part of bone marrow that actively makes blood cells' },
        { term: 'yellow marrow', definition: 'Bone marrow that stores fat and can make blood cells if needed' },
        { term: 'blood cells', definition: 'Tiny cells that float in your blood and do important jobs' },
      ],
      analogies: [
        'Bone marrow is like a cell factory inside your bones, constantly producing new workers (blood cells) to keep your body running.',
        'Red marrow is like an active factory floor, while yellow marrow is like a warehouse that can be converted to production space if needed.',
      ],
      examples: [
        'When you get a cut, your bone marrow makes more platelets to help your blood clot.',
        'When you have an infection, your bone marrow works overtime to make more white blood cells.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bone marrow is the primary site of hematopoiesis, producing all blood cell types from stem cells within the medullary cavities of bones.',
      explanation: `Bone marrow is a specialized tissue found in the central cavities of bones. It serves as the primary site for hematopoiesis (blood cell production) in adults.

**Types of Bone Marrow:**

1. **Red (Hematopoietic) Marrow**
   - Contains hematopoietic stem cells (HSCs)
   - Actively produces blood cells
   - Found in flat bones (pelvis, sternum, ribs, skull) and ends of long bones
   - Makes up about 50% of adult marrow

2. **Yellow (Fatty) Marrow**
   - Primarily composed of adipocytes (fat cells)
   - Can convert back to red marrow when blood cell demand increases
   - Found in the shafts of long bones
   - Increases with age

**Cell Production:**
- Red blood cells (erythrocytes): ~200 billion per day
- White blood cells (leukocytes): ~10 billion per day
- Platelets (thrombocytes): ~100 billion per day

**Blood Supply:**
The bone marrow receives blood through nutrient arteries that enter bones and branch into sinusoidal capillaries. Mature blood cells enter the bloodstream by crossing the sinusoidal walls.`,
      keyTerms: [
        { term: 'hematopoiesis', definition: 'The process of blood cell formation and development', pronunciation: 'hee-MAT-oh-poy-EE-sis' },
        { term: 'hematopoietic stem cell', definition: 'A cell that can develop into any type of blood cell', pronunciation: 'hee-MAT-oh-poy-ET-ik' },
        { term: 'medullary cavity', definition: 'The hollow space inside bones containing marrow', pronunciation: 'MED-yoo-lair-ee' },
        { term: 'sinusoidal capillaries', definition: 'Specialized blood vessels in bone marrow with porous walls', pronunciation: 'sy-new-SOY-dal' },
        { term: 'erythrocyte', definition: 'Red blood cell', pronunciation: 'eh-RITH-roh-site' },
      ],
      analogies: [
        'Hematopoietic stem cells are like master blueprints that can be copied to make any type of blood cell.',
        'The sinusoidal capillaries act like quality control gates, only allowing mature cells to enter the bloodstream.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bone marrow contains the hematopoietic stem cell niche, supporting self-renewal and multilineage differentiation through complex stromal-stem cell interactions and growth factor signaling.',
      explanation: `Bone marrow is a complex organ with distinct microenvironments that regulate hematopoiesis through cellular and molecular mechanisms.

**Structural Organization:**

1. **Hematopoietic Compartment**
   - Hematopoietic stem cells (HSCs): CD34+, CD38-, Lin-
   - Multipotent progenitors (MPPs)
   - Lineage-committed progenitors
   - Maturing blood cells

2. **Stromal Compartment (Microenvironment)**
   - Mesenchymal stem cells (MSCs)
   - Osteoblasts (bone-forming cells)
   - Adipocytes
   - Endothelial cells
   - Reticular cells (CAR cells - CXCL12-abundant reticular cells)
   - Sympathetic nerve fibers

3. **Vascular Compartment**
   - Central venous sinus
   - Sinusoidal capillaries with fenestrated endothelium
   - Arterial supply from nutrient arteries

**Stem Cell Niche:**
The HSC niche provides signals for:
- Self-renewal (maintaining stem cell pool)
- Quiescence (keeping HSCs in G0)
- Differentiation (producing progenitors)
- Mobilization (releasing cells to circulation)

**Key Niche Factors:**
- CXCL12/SDF-1: Retention signal from CAR cells
- SCF (stem cell factor): Survival and proliferation
- Thrombopoietin (TPO): HSC maintenance
- TGF-beta: Quiescence maintenance
- Angiopoietin-1: Niche adhesion

**Hematopoietic Lineages:**
1. Myeloid: RBCs, platelets, granulocytes, monocytes
2. Lymphoid: B cells, T cell progenitors, NK cells`,
      keyTerms: [
        { term: 'stem cell niche', definition: 'The specialized microenvironment that regulates stem cell behavior through cellular interactions and signaling molecules' },
        { term: 'CAR cells', definition: 'CXCL12-abundant reticular cells; stromal cells that secrete retention factors for HSCs' },
        { term: 'CXCL12', definition: 'Chemokine (also called SDF-1) that retains HSCs in the bone marrow niche', pronunciation: 'see-ex-see-el-twelve' },
        { term: 'quiescence', definition: 'A reversible cell cycle arrest (G0) that protects HSCs from exhaustion', pronunciation: 'kwee-ES-ens' },
        { term: 'multipotent progenitor', definition: 'A cell derived from HSCs that can still differentiate into multiple (but not all) blood cell types' },
      ],
      clinicalNotes: 'Disruption of the HSC niche is implicated in myelodysplastic syndromes and leukemia. G-CSF mobilizes HSCs by disrupting CXCL12 signaling, enabling peripheral blood stem cell collection.',
    },
    4: {
      level: 4,
      summary: 'The bone marrow microenvironment comprises distinct anatomical niches with specialized cellular and molecular constituents that regulate HSC fate through direct contact, paracrine signaling, and metabolic gradients.',
      explanation: `The bone marrow represents a highly organized organ with spatially distinct functional zones that coordinate to maintain hematopoietic homeostasis and respond to physiological demands.

**Anatomical Niche Architecture:**

1. **Endosteal Niche**
   - Location: Adjacent to bone surface (trabecular and cortical)
   - Key cells: Osteoblasts, osteoclasts, bone-lining cells
   - Function: Maintains HSC quiescence
   - Factors: Angiopoietin-1 (Tie2 signaling), N-cadherin adhesion
   - Oxygen tension: Hypoxic (~1% O2)
   - Metabolic state: Predominantly glycolytic

2. **Perivascular Niche**
   - Location: Around sinusoidal and arteriolar vessels
   - Key cells:
     * Arteriolar: NG2+ pericytes, Nestin+ MSCs
     * Sinusoidal: Leptin receptor (LepR)+ cells, CAR cells
   - Function: Regulates HSC retention and proliferation
   - Factors: SCF, CXCL12, pleiotrophin

3. **Central Marrow**
   - Location: Central medullary space
   - Contains: Differentiating progenitors, adipocytes
   - Oxygen: Relatively higher (~6% O2)

**Cellular Components:**

*Hematopoietic Hierarchy:*
- LT-HSC (Long-term): CD34+CD38-CD90+CD45RA-, self-renewal capacity >16 weeks
- ST-HSC (Short-term): Limited self-renewal (6-8 weeks)
- MPP: Multipotent progenitors, minimal self-renewal
- CMP/CLP: Common myeloid/lymphoid progenitors
- Lineage-committed progenitors (GMP, MEP, etc.)

*Stromal Hierarchy:*
- MSCs differentiate into: osteoblasts, adipocytes, chondrocytes
- Balance determines marrow composition and hematopoietic support

**Molecular Regulation:**

*Niche Retention Signals:*
- CXCL12-CXCR4: Primary retention axis
- VLA-4 (α4β1 integrin) - VCAM-1: Adhesion
- Kit-SCF: Survival and retention
- Tie2-Angiopoietin: Quiescence

*Circadian Regulation:*
- Sympathetic nervous system via β3-adrenergic signaling
- CXCL12 expression oscillates (lower at night in mice)
- HSC egress peaks during rest phase

*Hypoxic Regulation:*
- HIF-1α stabilization in endosteal niche
- Promotes glycolysis, reduces ROS
- Maintains HSC stemness and quiescence

**Extracellular Matrix Components:**
- Fibronectin, collagen, laminin
- Proteoglycans: Heparan sulfate (binds growth factors)
- Osteopontin: Negative regulator of HSC proliferation`,
      keyTerms: [
        { term: 'endosteal niche', definition: 'The HSC microenvironment adjacent to bone surfaces, characterized by hypoxia and promoting quiescence' },
        { term: 'perivascular niche', definition: 'HSC microenvironment around blood vessels, containing CXCL12-secreting stromal cells' },
        { term: 'LT-HSC', definition: 'Long-term hematopoietic stem cell with durable self-renewal capacity and multilineage reconstitution ability' },
        { term: 'HIF-1α', definition: 'Hypoxia-inducible factor 1-alpha; transcription factor stabilized in low oxygen that regulates HSC metabolism', pronunciation: 'hif-one-alpha' },
        { term: 'VLA-4', definition: 'Very late antigen-4 (α4β1 integrin); adhesion molecule on HSCs binding VCAM-1 on stromal cells' },
      ],
      clinicalNotes: 'AMD3100 (plerixafor) is a CXCR4 antagonist used to mobilize HSCs for transplantation. JAK2 V617F mutation in myeloproliferative neoplasms disrupts normal niche interactions. Niche targeting is an emerging therapeutic strategy for hematologic malignancies.',
    },
    5: {
      level: 5,
      summary: 'Bone marrow constitutes a dynamically regulated organ system where HSC fate decisions are determined by niche topology, metabolic state, epigenetic programming, and systemic signals, with direct implications for malignant transformation and therapeutic targeting.',
      explanation: `The bone marrow microenvironment functions as an integrated system where spatial organization, cellular heterogeneity, and molecular networks converge to regulate hematopoiesis at steady-state and during stress responses.

**Advanced Niche Biology:**

1. **Heterogeneous Niche Populations**

   *Arteriolar vs. Sinusoidal Niches:*
   - Arteriolar: NG2+Nestin+ pericytes, maintain quiescent HSCs
   - Sinusoidal: LepR+ cells, support activated HSCs
   - Distinct transcriptional programs and secretomes

   *Recent Single-Cell Mapping:*
   - >15 distinct stromal populations identified
   - Spatial transcriptomics reveals zonated expression
   - Niche heterogeneity underlies lineage bias

2. **Metabolic Regulation of HSC Function**

   *Metabolic States:*
   - Quiescent HSCs: Glycolysis-dependent, low mitochondrial activity
   - Activated HSCs: Shift to OXPHOS, increased ROS
   - Metabolic intermediates regulate epigenetics (acetyl-CoA, NAD+)

   *Niche-Mediated Metabolic Support:*
   - Adipocytes provide fatty acids
   - Endothelial cells transfer mitochondria
   - Hypoxic niche limits ROS damage

3. **Epigenetic Niche Regulation**

   - DNA methylation: DNMT3A/TET2 mutations common in clonal hematopoiesis
   - Histone modifications: ASXL1, EZH2 alterations in myeloid malignancies
   - Chromatin accessibility changes with HSC aging
   - Niche signals influence epigenetic state

4. **Inflammatory Niche Remodeling**

   *Emergency Hematopoiesis:*
   - IL-1, IL-6, TNFα, IFNγ activate HSCs
   - Chronic inflammation promotes HSC exhaustion
   - "Inflammaging" alters niche composition

   *Infection Response:*
   - Pattern recognition receptors on HSCs (TLRs)
   - Direct pathogen sensing modifies differentiation
   - G-CSF and M-CSF drive myelopoiesis

**Clinical Correlations:**

1. **Bone Marrow Failure Syndromes**

   *Aplastic Anemia:*
   - Immune-mediated HSC destruction
   - T cell clones target HSCs
   - Treatment: ATG/cyclosporine or allogeneic HCT

   *Inherited Failure Syndromes:*
   - Fanconi anemia: DNA repair defects
   - Dyskeratosis congenita: Telomere maintenance
   - Diamond-Blackfan anemia: Ribosomal defects

2. **Myeloid Malignancies and the Niche**

   *Leukemic Niche Remodeling:*
   - AML blasts reprogram stromal cells
   - Secrete inflammatory cytokines
   - Displace normal HSCs
   - Create protective microenvironments

   *Therapeutic Niche Targeting:*
   - CXCR4 inhibitors: Mobilize leukemic cells
   - Anti-adhesion therapy: VLA-4 inhibition
   - Niche-directed differentiation therapy

3. **Bone Marrow Transplantation**

   *Niche Conditioning:*
   - Myeloablative: Creates "space" and eliminates disease
   - Reduced-intensity: Relies more on graft-versus-tumor
   - Niche damage affects engraftment kinetics

   *Graft-versus-Host Disease:*
   - Donor T cells attack recipient tissues
   - Marrow involvement causes cytopenias
   - Niche fibrosis in chronic GVHD

4. **Clonal Hematopoiesis of Indeterminate Potential (CHIP)**

   - Age-related acquisition of HSC mutations
   - Common mutations: DNMT3A, TET2, ASXL1
   - Increased cardiovascular risk
   - Risk factor for hematologic malignancy

**Emerging Research:**

- Spatial multiomics of marrow niches
- Organoid models of human marrow
- Niche-targeted immunotherapies
- Rejuvenation strategies for aged niches
- 3D bioprinting of hematopoietic niches`,
      keyTerms: [
        { term: 'clonal hematopoiesis', definition: 'Expansion of HSCs carrying somatic mutations, common with aging, associated with increased cardiovascular and malignancy risk' },
        { term: 'emergency hematopoiesis', definition: 'Rapid, inflammation-driven increase in blood cell production in response to infection or stress' },
        { term: 'niche remodeling', definition: 'Pathological alteration of the marrow microenvironment by disease processes (malignancy, inflammation, fibrosis)' },
        { term: 'graft-versus-host disease', definition: 'Condition where transplanted donor immune cells attack recipient tissues', pronunciation: 'GVHD' },
        { term: 'myeloablative conditioning', definition: 'High-dose chemotherapy/radiation that destroys host hematopoiesis before transplant' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- G-CSF mobilization: Disrupts CXCL12-CXCR4 axis
- Plerixafor + G-CSF: Synergistic mobilization, rescue for poor mobilizers
- Bone marrow biopsy indications: Unexplained cytopenias, staging lymphoma, evaluating MDS/AML
- Cellularity assessment: 100 minus age approximates normal cellularity (%)
- Reticulin staining grades fibrosis (MF-0 to MF-3)
- CD34+ HSC counts predict engraftment (target >2×10^6/kg)`,
    },
  },

  media: [
    {
      id: 'bone-marrow-diagram',
      type: 'diagram',
      filename: 'bone-marrow-structure.svg',
      title: 'Bone Marrow Structure and Hematopoietic Niches',
      description: 'Cross-sectional view showing endosteal and perivascular niches with cellular components',
    },
    {
      id: 'hematopoiesis-diagram',
      type: 'diagram',
      filename: 'hematopoiesis-hierarchy.svg',
      title: 'Hematopoietic Differentiation Hierarchy',
      description: 'Diagram showing differentiation from HSC to mature blood cells',
    },
  ],
  citations: [
    {
      id: 'morrison-scadden-2014',
      type: 'article',
      title: 'The bone marrow niche for haematopoietic stem cells',
      authors: ['Morrison SJ', 'Scadden DT'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature12984',
      license: 'Copyright Nature Publishing Group',
    },
    {
      id: 'openstax-ap-ch18',
      type: 'textbook',
      title: 'The Cardiovascular System: Blood',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '18',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/18-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
    { targetId: 'system-lymphatic', targetType: 'system', relationship: 'parent', label: 'Lymphatic System' },
    { targetId: 'process-hematopoiesis', targetType: 'pathway', relationship: 'related', label: 'Hematopoiesis' },
    { targetId: 'structure-thymus', targetType: 'structure', relationship: 'related', label: 'Thymus' },
  ],
  tags: {
    systems: ['immune', 'lymphatic', 'hematopoietic'],
    structures: ['FMA:9608'],
    topics: ['anatomy', 'physiology', 'hematology', 'immunology'],
    keywords: ['hematopoiesis', 'stem cells', 'HSC', 'niche', 'blood cell production'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default boneMarrowContent;
