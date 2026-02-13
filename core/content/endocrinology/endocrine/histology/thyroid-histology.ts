/**
 * Thyroid Histology - Comprehensive Educational Content
 */

import { EducationalContent } from '../../../types';

export const thyroidHistology: EducationalContent = {
  id: 'histology-thyroid-gland',
  type: 'structure',
  name: 'Thyroid Histology',
  alternateNames: ['Thyroid Microscopic Anatomy', 'Thyroid Follicular Histology'],

  levels: {
    1: {
      level: 1,
      summary: 'The thyroid gland is made of tiny spherical structures called follicles that store and produce thyroid hormones.',
      explanation: `Under the microscope, the thyroid has a unique structure made of small balls called follicles.

**Follicles:**
- Round structures filled with colloid
- Lined by follicular cells
- Store thyroid hormone

**Colloid:**
- Gel-like material inside follicles
- Contains thyroglobulin
- Stains pink on H&E

**Follicular cells:**
- Cuboidal to columnar shape
- Make thyroid hormone
- Arranged in single layer around follicle

**C cells (parafollicular cells):**
- Between follicles
- Make calcitonin
- Not visible on routine staining

**Normal appearance:**
- Follicles are similar size
- Evenly distributed
- Active follicles have columnar cells and less colloid
- Inactive follicles have flat cells and more colloid`,
      keyTerms: [
        { term: 'follicle', definition: 'Spherical structure in thyroid that stores hormone' },
        { term: 'colloid', definition: 'Gel-like material inside thyroid follicles' },
        { term: 'thyroglobulin', definition: 'Protein stored in colloid used to make hormone' },
      ],
      analogies: [
        'Thyroid follicles are like tiny water balloons filled with gel, lined by cells that both make and release hormones.',
      ],
      examples: [
        'On a thyroid biopsy, the pathologist looks at the size and shape of follicles to determine if the tissue is normal or abnormal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid parenchyma consists of follicles lined by follicular epithelium containing colloid. C cells are in interfollicular spaces. The gland has a rich vascular and lymphatic network.',
      explanation: `## Follicular Architecture

**Follicles:**
- Spherical structures
- Diameter: 50-500 micrometers
- Single layer of epithelium
- Central lumen with colloid

**Follicular Cells (Thyrocytes):**
- Simple cuboidal epithelium
- Height varies with activity:
  - Inactive: Squamous
  - Active: Columnar
- Microvilli on apical surface
- Basement membrane on basal side

**Colloid:**
- Thyroglobulin-rich
- Homogeneous, eosinophilic
- Resorptive vacuoles at periphery when active

**Interfollicular Connective Tissue:**
- Reticular fibers
- Capillaries
- Lymphatics
- C cells

## C Cells (Parafollicular Cells)

**Location:**
- Interfollicular
- In follicular wall (basal aspect)
- More numerous in upper lobes

**Appearance:**
- Larger than follicular cells
- Pale cytoplasm
- Can be recognized with calcitonin stain

**Function:**
- Produce calcitonin
- Neural crest origin
- Not visible on routine H&E

## Vascular Supply

**Capillaries:**
- Rich network between follicles
- Fenestrated endothelium
- Close to basal membrane

**Lymphatics:**
- Perifollicular network
- Drains to regional nodes`,
      keyTerms: [
        { term: 'parenchyma', definition: 'Functional tissue of an organ' },
        { term: 'interfollicular', definition: 'Between follicles' },
        { term: 'eosinophilic', definition: 'Stains pink with eosin dye' },
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid histology shows follicular cells with apical microvilli, tight junctions, and basement membrane polarity essential for hormone synthesis. Colloid is thyroglobulin stored for hormone release. C cells are neuroendocrine-derived calcitonin-producing cells.',
      explanation: `## Follicular Cell Ultrastructure

**Apical Surface:**
- Microvilli project into colloid
- Site of hormone release
- Thyroglobulin endocytosis

**Cytoplasm:**
- Rough ER (protein synthesis)
- Golgi (packaging)
- Lysosomes (processing)
- Mitochondria (energy)

**Basolateral Surface:**
- TSH receptors
- Iodide transport (NIS)
- Resting on basement membrane

**Cell Junctions:**
- Tight junctions (apical)
- Desmosomes
- Maintain polarity

## Thyroglobulin Synthesis and Storage

**Synthesis:**
- Made by follicular cells
- Glycoprotein (660 kDa)
- Secreted into colloid

**Structure:**
- Dimer
- Tyrosine residues
- Iodination sites

**Function:**
- Scaffold for hormone synthesis
- Storage form
- Release by endocytosis

## C Cell Features

**Calcitonin Production:**
- Pre-procalcitonin
- Cleaved to calcitonin
- Regulated by calcium

**Immunohistochemistry:**
- Calcitonin positive
- CEA positive (some)
- Chromogranin positive
- Synaptophysin positive

**Hyperplasia:**
- Seen in hypercalcemia
- MEN2
- C cell hyperplasia precedes MTC

## Histologic Variations

**Age:**
- Young: Smaller follicles
- Old: More fibrosis, heterogeneity

**Sex:**
- Women: More cellularity

**Functional State:**
- Hyperactive: Columnar cells, scalloped colloid
- Hypoactive: Flat cells, dense colloid`,
      keyTerms: [
        { term: 'NIS', definition: 'Sodium-iodide symporter; transports iodide into cells' },
        { term: 'endocytosis', definition: 'Cellular uptake of material by vesicle formation' },
        { term: 'immunohistochemistry', definition: 'Staining using antibodies to identify proteins' },
      ],
      clinicalNotes: 'C cell hyperplasia can be physiological or neoplastic; in MEN2 patients, it is considered premalignant and indicates need for prophylactic thyroidectomy.',
    },
    4: {
      level: 4,
      summary: 'Pathological thyroid histology includes Hashimoto thyroiditis with lymphocytic infiltration and Hurthle cell change, Graves disease with hyperplastic tall follicular cells, and neoplastic changes distinguishing benign from malignant lesions.',
      explanation: `## Hashimoto Thyroiditis

**Key Features:**
- Dense lymphocytic infiltrate
- Germinal centers
- Hurthle cell change (oncocytic metaplasia)
- Fibrosis (variable)
- Follicular atrophy

**Hurthle Cells:**
- Large, polygonal
- Eosinophilic granular cytoplasm
- Prominent nucleoli
- Oncocytic change

**Variants:**
- Fibrous variant
- IgG4-related
- Juvenile

## Graves Disease

**Histology:**
- Hyperplastic follicles
- Tall columnar epithelium
- Scalloped colloid
- Pseudo-papillary projections
- Reduced colloid

**Compared to Toxic Nodule:**
- Diffuse vs nodular
- Uniform hyperplasia

## Neoplastic Changes

**Papillary Thyroid Cancer:**
- Nuclear features (orphan annie eye, grooves, pseudoinclusions)
- Papillary architecture
- Psammoma bodies

**Follicular Adenoma vs Carcinoma:**
- Capsule
- Vascular invasion
- Minimally invasive vs widely invasive

**Medullary Thyroid Cancer:**
- Amyloid stroma
- Cell nests
- Spindle cells
- Calcitonin positive

## Staining Patterns

**H&E:**
- Routine morphology
- Colloid stains pink
- Nuclei blue

**Immunohistochemistry:**
- Thyroglobulin: Follicular differentiation
- Calcitonin: Medullary, C cells
- TTF-1: Thyroid and lung origin
- PAX8: Thyroid, kidney, Mullerian
- CK19: Papillary carcinoma
- HBME-1: Malignancy marker
- Galectin-3: Malignancy marker`,
      keyTerms: [
        { term: 'Hurthle cell', definition: 'Oncocytic follicular cell with eosinophilic cytoplasm' },
        { term: 'psammoma bodies', definition: 'Concentric calcified structures in papillary cancer' },
        { term: 'TTF-1', definition: 'Thyroid transcription factor-1; immunohistochemical marker' },
      ],
      clinicalNotes: 'The nuclear features of papillary thyroid cancer (orphan annie nuclei, nuclear grooves, pseudoinclusions) are diagnostic and often visible even in small foci.',
    },
    5: {
      level: 5,
      summary: 'Advanced thyroid histology includes molecular-pathologic correlation, classification updates, and specialized techniques for challenging cases including poorly differentiated and anaplastic carcinomas.',
      explanation: `## Molecular-Pathologic Correlation

**BRAF V600E:**
- Papillary carcinoma
- Associated with classic features
- Prognostic significance debated
- IHC available

**RAS Mutations:**
- Follicular adenoma/carcinoma
- Follicular variant papillary
- N-RAS most common

**RET/PTC:**
- Papillary carcinoma
- Radiation-associated
- Papillary architecture

**PAX8/PPARgamma:**
- Follicular carcinoma
- Translocation
- Encapsulated

## Classification Updates (WHO 2022)

**New Entities:**
- NIFTP (non-invasive follicular thyroid neoplasm)
- Hurthle cell tumors separate
- Subtypes of papillary carcinoma

**Risk Stratification:**
- Histologic features
- Molecular markers
- Combined approaches

## Special Techniques

**Electron Microscopy:**
- Ultrastructural details
- Research applications
- Diagnostic in select cases

**Molecular Testing:**
- FNA samples
- Mutation panels
- Gene expression classifiers

**In Situ Hybridization:**
- RET/PTC detection
- MicroRNA

## Challenging Cases

**Poorly Differentiated Carcinoma:**
- Insular pattern
- Mitotic activity
- Necrosis
- Intermediate between differentiated and anaplastic

**Anaplastic Carcinoma:**
- Spindle cells
- Giant cells
- Squamoid features
- Rhabdomyosarcomatous

**Lymphoma:**
- MALT type
- Diffuse large B-cell
- Hashimoto association

## Future Directions

**Digital Pathology:**
- Whole slide imaging
- AI-assisted diagnosis
- Remote consultation

**Proteomics:**
- Protein profiling
- Biomarker discovery

**Integrated Diagnosis:**
- Morphology + molecular
- Personalized classification
- Treatment guidance`,
      keyTerms: [
        { term: 'NIFTP', definition: 'Non-invasive follicular thyroid neoplasm with papillary-like features' },
        { term: 'insular carcinoma', definition: 'Poorly differentiated thyroid cancer with nests of cells' },
        { term: 'MALT', definition: 'Mucosa-associated lymphoid tissue lymphoma' },
      ],
      clinicalNotes: 'NIFTP redefined management of encapsulated follicular-patterned lesions, reducing overdiagnosis of cancer and overtreatment.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-thyroid-2022',
      type: 'article',
      title: 'WHO Classification of Thyroid Tumours',
      source: 'WHO',
      authors: ['Asa SL', 'Mete O'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-thyroid-gland', targetType: 'structure', relationship: 'related', label: 'Thyroid Gland' },
    { targetId: 'condition-thyroid-cancer', targetType: 'condition', relationship: 'related', label: 'Thyroid Cancer' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['histology', 'pathology', 'endocrinology'],
    keywords: ['thyroid histology', 'follicle', 'colloid', 'C cells', 'thyroglobulin'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['pathology', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroidHistology;
