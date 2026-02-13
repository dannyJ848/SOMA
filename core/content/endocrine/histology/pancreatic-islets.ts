/**
 * Pancreatic Islets Histology
 *
 * Microscopic anatomy of the islets of Langerhans including cell types,
 * ultrastructure, and histopathological changes in disease.
 */

import { EducationalContent } from '../../types';

export const PANCREATIC_ISLETS_HISTOLOGY: EducationalContent = {
  id: 'endocrine-pancreatic-islets-histology',
  type: 'concept',
  name: 'Pancreatic Islets Histology',
  alternateNames: ['Islets of Langerhans', 'Endocrine pancreas histology', 'Islet cell morphology'],

  levels: {
    1: {
      level: 1,
      summary: 'The pancreas contains small clusters of special cells called islets that make insulin and other hormones to control blood sugar.',
      explanation: `**What Are Pancreatic Islets?**

Inside your pancreas are tiny clusters of cells called islets (or islands) of Langerhans. They are named after the scientist who discovered them.

**What Do They Look Like?**

- Small round clusters scattered throughout the pancreas
- Much smaller than the rest of the pancreas
- About 1-2 million islets in your pancreas
- Each islet is about the size of a grain of sand

**Different Cell Types:**

The islets contain different types of cells, each making a different hormone:

1. **Beta cells (most common - about 70%)**
   - Make insulin
   - Help lower blood sugar

2. **Alpha cells (about 20%)**
   - Make glucagon
   - Help raise blood sugar

3. **Delta cells (about 5%)**
   - Make somatostatin
   - Helps control other hormones

4. **PP cells (rare)**
   - Make pancreatic polypeptide
   - Helps with digestion

**Why Does This Matter?**

In Type 1 diabetes, the beta cells are destroyed by the immune system, so the body cannot make insulin anymore.`,
      keyTerms: [
        { term: 'islets of Langerhans', definition: 'Small clusters of hormone-making cells in the pancreas' },
        { term: 'beta cells', definition: 'Cells in the islets that make insulin' },
        { term: 'alpha cells', definition: 'Cells in the islets that make glucagon' },
      ],
      analogies: [
        'Islets are like small islands of hormone-making cells floating in a sea of digestive enzyme-making tissue.',
        'Beta cells are like sugar traffic controllers - they release insulin to help sugar get into cells.',
      ],
      examples: [
        'When you eat a meal, your beta cells sense the rising blood sugar and release insulin.',
        'In people with Type 1 diabetes, most of the beta cells have been destroyed, so they cannot make insulin.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pancreatic islets are compact clusters of endocrine cells with distinct cell types identifiable by their location, staining characteristics, and immunohistochemistry, surrounded by exocrine acinar tissue.',
      explanation: `**Islet Structure:**

*General Features:*
- 1-2% of pancreatic mass
- 1,000-2,000 cells per islet
- Islet diameter: 50-300 micrometers
- Surrounded by thin connective tissue capsule
- Rich capillary network (fenestrated)

*Distribution in Pancreas:*
| Region | Islet Density | Predominant Cell Type |
|--------|---------------|----------------------|
| Head | Lower | PP cells more common |
| Body | Higher | Beta cells predominate |
| Tail | Highest | Beta cells predominate |

**Cell Type Identification:**

*By Location:*
| Cell Type | Location in Islet | Percentage |
|-----------|------------------|------------|
| Beta | Central core | 70-80% |
| Alpha | Peripheral mantle | 15-20% |
| Delta | Scattered | 5-10% |
| PP | Peripheral | 1-2% |

*By Staining:*
| Cell Type | H&E Appearance | Special Stains |
|-----------|----------------|----------------|
| Beta | Pale, granular | Aldehyde fuchsin (+) |
| Alpha | Bright pink (acidophilic) | Glucagon IHC |
| Delta | Variable | Somatostatin IHC |

**Blood Supply and Innervation:**

*Vascular Organization:*
- Arterioles enter islet center
- Blood flows from center (beta cells) outward
- This allows insulin to regulate alpha and delta cells
- Fenestrated capillaries for hormone release

*Innervation:*
- Sympathetic (from celiac plexus)
- Parasympathetic (vagus nerve)
- Affects hormone secretion

**Comparison with Exocrine Pancreas:**

| Feature | Islet (Endocrine) | Acinar (Exocrine) |
|---------|-------------------|-------------------|
| Structure | Clusters | Acini with ducts |
| Staining | Pale | Basophilic |
| Products | Hormones | Digestive enzymes |
| Secretion into | Blood | Ducts |

**Histopathology:**

*Type 1 Diabetes:*
- Reduced islet size
- Loss of beta cells
- Relative increase in alpha cells
- Insulitis (lymphocytic infiltration) early

*Type 2 Diabetes:*
- Islet amyloid deposits (IAPP)
- Reduced beta cell mass (30-50%)
- Beta cell dysfunction`,
      keyTerms: [
        { term: 'insulitis', definition: 'Lymphocytic infiltration of islets seen in early Type 1 diabetes' },
        { term: 'IAPP', definition: 'Islet amyloid polypeptide; forms amyloid deposits in Type 2 diabetes' },
        { term: 'fenestrated capillaries', definition: 'Blood vessels with pores allowing hormones to easily enter bloodstream' },
        { term: 'mantle', definition: 'The outer peripheral zone of the islet containing alpha cells' },
      ],
      analogies: [
        'The islet blood flow pattern (center to periphery) allows beta cells to control their neighbor cells, like a central command post.',
        'Islet amyloid is like plaque buildup that damages and crowds out the insulin-making cells.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pancreatic islet histology reveals complex cytoarchitecture with species-specific organization, ultrastructural features of hormone synthesis and secretion, and pathological changes that correlate with diabetic disease progression.',
      explanation: `**Cytoarchitecture:**

*Human Islet Organization:*
\`\`\`
Unlike rodent islets (core-mantle):
- More intermixed cell distribution
- Heterogeneous organization
- Beta cells: 50-70%
- Alpha cells: 30-40%
- Less distinct boundaries
\`\`\`

*Cell-Cell Contacts:*
| Junction Type | Function |
|---------------|----------|
| Gap junctions | Electrical coupling, coordinated secretion |
| E-cadherin | Cell adhesion, islet integrity |
| Neural CAM | Cell recognition |

**Ultrastructure:**

*Beta Cell:*
\`\`\`
Secretory Granules:
- Dense core (insulin crystal)
- Clear halo (soluble content)
- Size: 250-350 nm
- Crystalline structure (zinc-insulin hexamers)
\`\`\`

*Alpha Cell:*
- Dense, uniform granules
- Size: 200-250 nm
- No halo
- More electron-dense than beta

*Delta Cell:*
- Large, pale granules
- Size: 300-350 nm
- Moderate density

**Hormone Synthesis and Processing:**

*Insulin:*
\`\`\`
Preproinsulin (ER)
    ↓ Signal peptide removal
Proinsulin (Golgi)
    ↓ PC1/3 and PC2 cleavage
Insulin + C-peptide (Secretory granules)
    ↓ Regulated secretion
Released with equimolar C-peptide
\`\`\`

*Secretory Granule Maturation:*
| Stage | pH | Contents | Insulin Form |
|-------|----|---------| -------------|
| Immature | 6.5-7 | Proinsulin | Soluble |
| Mature | 5.0-5.5 | Insulin + C-peptide | Crystalline |

**Immunohistochemistry:**

| Marker | Cell Type | Additional Notes |
|--------|-----------|------------------|
| Insulin | Beta | Proinsulin also detected |
| Glucagon | Alpha | |
| Somatostatin | Delta | |
| PP | PP cells | Head of pancreas |
| Chromogranin A | All islet cells | Pan-neuroendocrine |
| Synaptophysin | All islet cells | Pan-neuroendocrine |

**Pathological Changes:**

*Type 1 Diabetes - Stages:*
1. **Pre-diabetic**: Normal appearance or insulitis
2. **New-onset**: Active insulitis (CD8+ T cells)
3. **Long-standing**:
   - Small, fibrotic islets
   - Absent/rare beta cells
   - Preserved alpha cells
   - Pseudoatrophic islets

*Type 2 Diabetes:*
| Finding | Frequency | Location |
|---------|-----------|----------|
| Amyloid deposits | >90% | Extracellular |
| Reduced beta cell mass | Universal | Throughout islet |
| Beta cell apoptosis | Increased | |
| Alpha cell hyperplasia | Relative | |

*IAPP Amyloid:*
- Congo red positive
- Apple-green birefringence
- Replaces beta cells
- Correlates with disease duration

**Islet Transplantation Considerations:**

*Histological Assessment:*
- Islet equivalents (IEQ): 150 μm diameter standard
- Purity: % islet vs exocrine tissue
- Viability: Live/dead staining
- Function: Insulin content, stimulation index`,
      keyTerms: [
        { term: 'C-peptide', definition: 'Connecting peptide released with insulin; marker of endogenous insulin production' },
        { term: 'PC1/3', definition: 'Prohormone convertase 1/3; enzyme processing proinsulin to insulin' },
        { term: 'pseudoatrophic islet', definition: 'Small, beta cell-depleted islet seen in longstanding Type 1 diabetes' },
        { term: 'Congo red', definition: 'Histological stain for amyloid showing apple-green birefringence under polarized light' },
      ],
      clinicalNotes: 'In new-onset Type 1 diabetes, insulitis with CD8+ T cells targeting beta cells can be observed on pancreatic biopsy, though this is rarely performed clinically. IAPP amyloid deposition is nearly universal in Type 2 diabetes at autopsy and contributes to beta cell loss. C-peptide measurement clinically reflects endogenous insulin production and is useful for distinguishing Type 1 from Type 2 diabetes.',
    },
    4: {
      level: 4,
      summary: 'Advanced islet histology integrates single-cell transcriptomics, understanding of beta cell heterogeneity and plasticity, mechanisms of islet autoimmunity, and emerging regenerative medicine approaches for diabetes therapy.',
      explanation: `**Beta Cell Heterogeneity:**

*Functional Subtypes:*
\`\`\`
Single-cell RNA-seq reveals:
- Mature high-function beta cells
- Immature low-function beta cells
- "Virgin" beta cells (never secreted)
- Aging/senescent beta cells
\`\`\`

*Markers of Heterogeneity:*
| Marker | Population | Function |
|--------|------------|----------|
| Fltp (human homolog) | Mature | High secretion |
| Ucn3 | Mature | Glucose responsiveness |
| CD9 | Subpopulation | Enhanced function |
| p16/p21 | Senescent | Dysfunction, SASP |

**Beta Cell Identity and Plasticity:**

*Key Identity Factors:*
| Factor | Function | Loss in Diabetes |
|--------|----------|------------------|
| PDX1 | Master regulator | Dedifferentiation |
| MAFA | Maturation | Dysfunction |
| NKX6.1 | Beta specification | |
| FOXO1 | Metabolic regulation | Stress response |

*Dedifferentiation Model:*
\`\`\`
Healthy Beta Cell
    ↓ Metabolic stress (glucolipotoxicity)
Stressed Beta Cell (reduced insulin, markers)
    ↓ Continued stress
Dedifferentiated Cell (multipotent-like)
    ↓ Potential fates
- Transdifferentiation to alpha-like
- Death
- Redifferentiation (with intervention)
\`\`\`

**Insulitis - Detailed:**

*Cell Types:*
| Cell | Role | Markers |
|------|------|---------|
| CD8+ T cells | Primary effectors | Perforin, granzyme |
| CD4+ T cells | Help, regulation | Variable |
| Macrophages | Antigen presentation | CD68 |
| B cells | Autoantibody production | CD20 |

*Autoantigens:*
- Proinsulin/insulin (primary)
- GAD65
- IA-2 (ICA512)
- ZnT8
- Hybrid insulin peptides

*Insulitis Scoring (nPOD):*
\`\`\`
≥15 CD45+ cells in ≥3 islets
AND
Presence of CD8+ or CD4+ T cells
Present in <30% of new-onset T1D pancreata
\`\`\`

**Alpha Cell Biology:**

*Counter-regulation in Diabetes:*
- Impaired glucagon suppression by glucose
- Loss of paracrine insulin inhibition
- Alpha cell hyperfunction contributes to hyperglycemia

*Alpha-to-Beta Transdifferentiation:*
- ARX suppression → beta cell markers
- Potential regenerative pathway
- GABA treatment in animal models

**Islet Pathology in Other Conditions:**

*Insulinoma:*
| Feature | Description |
|---------|-------------|
| Gross | Usually <2 cm, benign |
| Micro | Trabecular, nesting pattern |
| IHC | Insulin+, proinsulin+ |
| Grade | Ki-67, mitotic count |

*MEN1-Associated NETs:*
- Multiple, often microscopic
- Preceded by islet hyperplasia
- MEN1 gene (menin) loss

*Glucagonoma:*
- Alpha cell tumor
- Necrolytic migratory erythema
- Diabetes, DVT, weight loss

**Regeneration Research:**

*Approaches:*
| Strategy | Mechanism | Status |
|----------|-----------|--------|
| Beta cell proliferation | DYRK1A inhibitors | Early clinical |
| Alpha-to-beta conversion | ARX inhibition | Preclinical |
| Stem cell-derived islets | Pluripotent differentiation | Clinical trials |
| Islet encapsulation | Immune isolation | Clinical trials |

*Proliferation Limitation:*
- Adult human beta cells rarely divide (<1%/year)
- Multiple cell cycle inhibitors (p16, p21)
- Combinatorial approaches needed`,
      keyTerms: [
        { term: 'beta cell dedifferentiation', definition: 'Loss of mature beta cell identity and function under metabolic stress, potentially reversible' },
        { term: 'ARX', definition: 'Aristaless-related homeobox; transcription factor maintaining alpha cell identity' },
        { term: 'DYRK1A', definition: 'Dual-specificity tyrosine phosphorylation-regulated kinase 1A; target for inducing beta cell proliferation' },
        { term: 'nPOD', definition: 'Network for Pancreatic Organ Donors with Diabetes; biorepository for diabetes research' },
      ],
      clinicalNotes: 'The nPOD program has revolutionized understanding of human diabetes histopathology by collecting pancreas specimens from donors with T1D and T2D. Insulitis is less prevalent than previously thought, present in only ~30% of new-onset T1D cases. Beta cell dedifferentiation rather than solely apoptosis may account for beta cell loss in T2D, raising possibility of reversibility with appropriate interventions.',
    },
    5: {
      level: 5,
      summary: 'Expert-level islet histology encompasses integrated genomic and proteomic profiling, spatial biology of islet microenvironment, precision medicine applications in monogenic diabetes, and cutting-edge regenerative and immunotherapy approaches.',
      explanation: `**Single-Cell and Spatial Technologies:**

*Human Islet Atlas:*
\`\`\`
Human Cell Atlas - Pancreas:
- >15 cell types defined
- Developmental trajectories mapped
- Disease-specific signatures

Spatial transcriptomics:
- Islet cell interactions
- Microenvironment mapping
- Exocrine-endocrine interface
\`\`\`

*Mass Cytometry (CyTOF):*
| Application | Panels |
|-------------|--------|
| Immune infiltrate | 40+ immune markers |
| Islet function | Insulin, glucagon, GLUT2, PDX1 |
| Signaling pathways | pSTAT, pAKT, pERK |

**Integrated Histomolecular Diagnosis:**

*Monogenic Diabetes Pathology:*
| Gene | Histology | Clinical |
|------|-----------|----------|
| GCK | Normal islets | Mild fasting hyperglycemia |
| HNF1A | Reduced beta cell mass | Sulfonylurea-responsive |
| KCNJ11/ABCC8 | Normal or hypertrophic | Neonatal DM, often SU-responsive |
| INS | ER stress, beta cell loss | Variable presentation |

*Congenital Hyperinsulinism:*
\`\`\`
Diffuse Form:
- Abnormally large nuclei
- Increased insulin content
- Global involvement

Focal Form:
- Localized lesion
- Paternal uniparental disomy
- Curable with focal resection
\`\`\`

**Precision Pathology:**

*Laser Capture Microdissection:*
- Isolate pure islet populations
- Downstream genomics/proteomics
- Compare diabetic vs non-diabetic

*Imaging Mass Spectrometry:*
- Spatial distribution of metabolites
- Lipid mapping
- Drug distribution

**Islet Transplantation Pathology:**

*Assessment Protocols:*
| Parameter | Method | Criteria |
|-----------|--------|----------|
| Purity | Dithizone staining | >30% for transplant |
| Viability | FDA/PI | >70% viable |
| Function | GSIS | Stimulation index >1 |
| Potency | ATP/DNA ratio | Correlates with outcomes |

*Post-Transplant Histology (rare):*
- Intrahepatic location
- Revascularization
- Potential rejection
- Recurrent autoimmunity

**Emerging Therapies - Histological Targets:**

*Immune Modulation:*
\`\`\`
Checkpoint Inhibitors:
- CTLA-4 (tregs)
- PD-1/PD-L1 (effector T cells)
- LAG-3, TIM-3 (emerging)

Tolerogenic approaches:
- Antigen-specific tolerance
- Treg expansion
- Mixed chimerism
\`\`\`

*Beta Cell Regeneration:*
| Approach | Target | Status |
|----------|--------|--------|
| Harmine | DYRK1A | Phase 1 trials |
| GLP-1 + DYRK1A | Combination | Preclinical |
| Notch inhibition | Duct-to-beta | Research |
| GABA | Alpha-to-beta | Clinical trials |

*Stem Cell-Derived Islets:*
\`\`\`
Production:
hPSC → Definitive endoderm → Pancreatic progenitor →
Endocrine progenitor → SC-islets

Histological Features:
- Insulin+ glucose-responsive cells
- Glucagon+, somatostatin+ cells present
- Immature features (polyhormonality)
- Variable organization
\`\`\`

**Research Frontiers:**

*Islet Organoids:*
- Self-organizing 3D structures
- Vascularized islets
- Disease modeling platform

*In Vivo Imaging:*
| Modality | Agent | Status |
|----------|-------|--------|
| PET | GLP-1R tracers | Clinical research |
| MRI | Mn-enhanced | Research |
| Optical | Near-IR probes | Preclinical |

*Biomarkers for Beta Cell Mass:*
\`\`\`
Challenges:
- No current clinical test
- Total beta cell mass ~0.5-1g

Approaches:
- Cell-free DNA (demethylated insulin gene)
- Circulating microRNAs
- Novel PET tracers
\`\`\`

**Future Directions:**

*Xenotransplantation:*
- Porcine islets with genetic modification
- CRISPR removal of PERV
- Encapsulation technologies

*Gene Therapy:*
- AAV-mediated beta cell proliferation genes
- CRISPR correction of monogenic diabetes
- Immunomodulatory gene delivery`,
      keyTerms: [
        { term: 'SC-islets', definition: 'Stem cell-derived islets; insulin-producing cells differentiated from pluripotent stem cells' },
        { term: 'focal congenital hyperinsulinism', definition: 'Localized islet abnormality with paternal UPD curable by limited resection' },
        { term: 'dithizone', definition: 'Zinc-chelating dye that stains beta cells red for islet purity assessment' },
        { term: 'GSIS', definition: 'Glucose-stimulated insulin secretion; functional assay for islet quality' },
      ],
      clinicalNotes: 'Stem cell-derived islets are now in Phase 1/2 clinical trials for T1D. Histological analysis shows these cells achieve glucose-responsiveness but differ from native islets in organization and maturation markers. Focal congenital hyperinsulinism can be cured surgically if distinguished from diffuse disease by 18F-DOPA PET and genetic testing. Beta cell mass imaging remains an unmet need that would transform diabetes management if achieved.',
    },
  },

  media: [
    {
      id: 'islet-histology-1',
      type: 'histology',
      filename: 'pancreatic-islet-normal.jpg',
      title: 'Normal Pancreatic Islet',
      description: 'H&E staining showing islet architecture',
    },
    {
      id: 'islet-ihc-1',
      type: 'histology',
      filename: 'islet-insulin-glucagon.jpg',
      title: 'Islet Immunohistochemistry',
      description: 'Insulin and glucagon double-labeling',
    },
  ],

  citations: [
    {
      id: 'campbell-islets',
      type: 'article',
      title: 'Human Islet Organization and Architecture',
      authors: ['Campbell-Thompson, M', 'et al'],
      source: 'Islets',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-histology', targetType: 'concept', relationship: 'parent', label: 'Endocrine Histology' },
    { targetId: 'endocrine-diabetes-pathology', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Pathology' },
    { targetId: 'endocrine-clinical-assessment', targetType: 'concept', relationship: 'related', label: 'Clinical Assessment' },
  ],

  tags: {
    systems: ['endocrine', 'digestive'],
    topics: ['histology', 'pancreas', 'diabetes'],
    keywords: ['islets', 'Langerhans', 'beta cells', 'insulin', 'glucagon', 'pancreas', 'diabetes'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'endocrinology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
