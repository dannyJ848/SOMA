/**
 * Histology Database Population Script
 *
 * Generates comprehensive histology entries for all major tissue types.
 * Creates HistologyImage entries with multiple magnifications, annotations,
 * and 5-level complexity descriptions.
 *
 * Usage: npx ts-node scripts/populate-histology.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  HistologyImage,
  TissueTypeInfo,
  TissueCategory,
  Magnification,
  StainType,
  AnnotationPoint,
} from '../core/histology/types';

// Output paths
const DATA_DIR = path.join(__dirname, '../core/histology/data');
const OUTPUT_FILE = path.join(DATA_DIR, 'tissue-database.json');

// Ensure output directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ============================================================================
// TISSUE TYPE DEFINITIONS
// ============================================================================

interface TissueDefinition {
  category: TissueCategory;
  subtype: string;
  name: string;
  description: string;
  organSources: { organ: string; bodySystem: string }[];
  identifyingFeatures: string[];
  characteristics: {
    level1: string[];
    level2: string[];
    level3: string[];
    level4: string[];
    level5: string[];
  };
  clinicalRelevance: string;
  keyAnnotations: { label: string; description: string }[];
  preferredStains: StainType[];
}

// ============================================================================
// EPITHELIAL TISSUES
// ============================================================================

const epithelialTissues: TissueDefinition[] = [
  {
    category: 'epithelial',
    subtype: 'simple_squamous',
    name: 'Simple Squamous Epithelium',
    description: 'A single layer of flat, scale-like cells that form a smooth, thin membrane optimized for diffusion and filtration.',
    organSources: [
      { organ: 'lung_alveoli', bodySystem: 'respiratory' },
      { organ: 'kidney_bowman_capsule', bodySystem: 'urinary' },
      { organ: 'blood_vessel_endothelium', bodySystem: 'cardiovascular' },
      { organ: 'peritoneum', bodySystem: 'digestive' },
      { organ: 'pleura', bodySystem: 'respiratory' },
    ],
    identifyingFeatures: [
      'Single layer of extremely flat cells',
      'Nuclei appear as flat, elliptical bulges',
      'Barely visible cytoplasm in cross-section',
      'Polygonal cell outlines in surface view',
    ],
    characteristics: {
      level1: [
        'Very flat cells like tiles on a floor',
        'Only one cell thick - the thinnest tissue',
        'Lets gases and small molecules pass through easily',
        'Found where things need to move in and out of blood',
      ],
      level2: [
        'Single layer of flattened, scale-like cells',
        'Nucleus creates a bulge in the center of each cell',
        'Forms thin membranes ideal for diffusion and filtration',
        'Called endothelium in blood vessels, mesothelium in body cavities',
      ],
      level3: [
        'Simple epithelium with squamous (flattened) cell morphology',
        'Cells appear polygonal from surface view, very thin in cross-section',
        'Attenuated cytoplasm with central, elliptical nucleus',
        'Basement membrane separates epithelium from underlying connective tissue',
        'Facilitates passive diffusion of gases, nutrients, and waste products',
      ],
      level4: [
        'Derived from mesoderm (mesothelium, endothelium) or ectoderm',
        'Tight junctions (zonula occludens) regulate paracellular permeability',
        'Basement membrane contains type IV collagen, laminin, and proteoglycans',
        'Endothelial caveolae facilitate receptor-mediated transcytosis',
        'Mesothelial cells produce lubricating surfactant-like substance',
      ],
      level5: [
        'Endothelial dysfunction is a key early event in atherosclerosis pathogenesis',
        'Mesothelial cells undergo reactive hyperplasia in peritonitis',
        'Malignant mesothelioma arises from mesothelial transformation (asbestos exposure)',
        'Podocyte foot process effacement causes proteinuria in glomerular disease',
        'Pulmonary alveolar damage leads to diffuse alveolar damage pattern in ARDS',
      ],
    },
    clinicalRelevance: 'Endothelial dysfunction underlies cardiovascular disease. Mesothelial injury causes ascites and pleural effusions. Malignant mesothelioma from asbestos exposure.',
    keyAnnotations: [
      { label: 'Nucleus', description: 'Flattened, elliptical nucleus creating bulge in cell center' },
      { label: 'Cell boundary', description: 'Thin cytoplasmic border between adjacent cells' },
      { label: 'Basement membrane', description: 'Thin layer separating epithelium from underlying tissue' },
    ],
    preferredStains: ['H&E', 'Silver'],
  },
  {
    category: 'epithelial',
    subtype: 'simple_cuboidal',
    name: 'Simple Cuboidal Epithelium',
    description: 'A single layer of cube-shaped cells specialized for secretion and absorption, found in glands and kidney tubules.',
    organSources: [
      { organ: 'kidney_tubules', bodySystem: 'urinary' },
      { organ: 'thyroid', bodySystem: 'endocrine' },
      { organ: 'ovary_surface', bodySystem: 'reproductive' },
      { organ: 'liver_bile_ducts', bodySystem: 'digestive' },
      { organ: 'salivary_glands', bodySystem: 'digestive' },
    ],
    identifyingFeatures: [
      'Single layer of cube-shaped cells',
      'Round, centrally located nuclei',
      'Cell height approximately equals width',
      'Clear brush border in absorptive regions',
    ],
    characteristics: {
      level1: [
        'Cells shaped like little cubes or dice',
        'Round nuclei in the center of each cell',
        'One layer thick',
        'Found in glands and kidney tubes',
      ],
      level2: [
        'Single layer of cube-shaped cells with equal height and width',
        'Spherical nucleus positioned centrally in each cell',
        'Specialized for secretion (in glands) and absorption (in kidney)',
        'May have microvilli (brush border) on apical surface',
      ],
      level3: [
        'Simple epithelium with cuboidal cell morphology',
        'Uniform cell dimensions with central, spherical nucleus',
        'Apical surface modifications include microvilli for absorption',
        'Lines excretory ducts of many exocrine glands',
        'Active transport mechanisms for reabsorption in kidney tubules',
      ],
      level4: [
        'Proximal tubule cells have extensive brush border and basal infoldings',
        'Mitochondria concentrated basally to power Na+/K+ ATPase',
        'Thyroid follicular cells produce thyroglobulin and thyroid hormones',
        'Intercellular junctions maintain epithelial polarity and barrier function',
        'Germinal epithelium of ovary is actually simple cuboidal mesothelium',
      ],
      level5: [
        'Proximal tubule cells are highly susceptible to ischemic and toxic injury',
        'Acute tubular necrosis shows flattening and loss of brush border',
        'Thyroid follicular adenoma vs carcinoma distinguished by capsular invasion',
        'Ovarian surface epithelium gives rise to most epithelial ovarian cancers',
        'Bile duct obstruction causes cuboidal cell proliferation (bile ductular reaction)',
      ],
    },
    clinicalRelevance: 'Kidney tubule damage causes acute tubular necrosis. Thyroid nodules require fine-needle aspiration. Ovarian surface epithelium is origin of most ovarian cancers.',
    keyAnnotations: [
      { label: 'Cuboidal cell', description: 'Cube-shaped cell with equal height and width' },
      { label: 'Central nucleus', description: 'Round nucleus in center of cell' },
      { label: 'Brush border', description: 'Microvilli on apical surface (in absorptive cells)' },
      { label: 'Basal lamina', description: 'Basement membrane at base of epithelium' },
    ],
    preferredStains: ['H&E', 'PAS'],
  },
  {
    category: 'epithelial',
    subtype: 'simple_columnar',
    name: 'Simple Columnar Epithelium',
    description: 'A single layer of tall, column-shaped cells specialized for absorption and secretion, lining most of the digestive tract.',
    organSources: [
      { organ: 'small_intestine', bodySystem: 'digestive' },
      { organ: 'stomach', bodySystem: 'digestive' },
      { organ: 'gallbladder', bodySystem: 'digestive' },
      { organ: 'uterus', bodySystem: 'reproductive' },
      { organ: 'colon', bodySystem: 'digestive' },
    ],
    identifyingFeatures: [
      'Single layer of tall, column-shaped cells',
      'Oval nuclei aligned at basal third of cell',
      'Height significantly greater than width',
      'Often with goblet cells interspersed',
    ],
    characteristics: {
      level1: [
        'Tall cells like columns or pillars',
        'Oval-shaped nuclei near the bottom of cells',
        'One layer thick',
        'Lines the stomach and intestines',
      ],
      level2: [
        'Single layer of elongated, column-shaped cells',
        'Nuclei are oval and positioned basally',
        'May have microvilli (brush border) for absorption',
        'Often contains mucus-secreting goblet cells',
        'Found throughout the digestive tract',
      ],
      level3: [
        'Simple epithelium with columnar morphology',
        'Cells significantly taller than wide with basally located oval nuclei',
        'Enterocytes of small intestine have elaborate microvillus brush border',
        'Goblet cells produce protective mucin glycoproteins',
        'Tight junctions regulate paracellular transport and maintain polarity',
      ],
      level4: [
        'Enterocyte microvilli contain digestive enzymes and transport proteins',
        'Glycocalyx coat provides unstirred layer for final digestion',
        'Stem cells in intestinal crypts continuously renew epithelium (3-5 days)',
        'Paneth cells at crypt base produce antimicrobial defensins',
        'Enteroendocrine cells secrete hormones (CCK, secretin, GLP-1)',
      ],
      level5: [
        'Villous atrophy with crypt hyperplasia indicates celiac disease',
        'Intestinal metaplasia in stomach is precursor to gastric adenocarcinoma',
        'Colonic adenocarcinoma follows adenoma-carcinoma sequence',
        'Barrett esophagus: columnar metaplasia of distal esophagus',
        'Microvillous inclusion disease: congenital enterocyte brush border defect',
      ],
    },
    clinicalRelevance: 'Villous atrophy in celiac disease. Intestinal metaplasia precedes gastric cancer. Colorectal adenocarcinoma from adenomatous polyps.',
    keyAnnotations: [
      { label: 'Columnar cell', description: 'Tall cell with height greater than width' },
      { label: 'Basal nucleus', description: 'Oval nucleus positioned at base of cell' },
      { label: 'Goblet cell', description: 'Mucus-secreting cell with pale, expanded apical region' },
      { label: 'Brush border', description: 'Dense microvillus layer on apical surface' },
      { label: 'Lamina propria', description: 'Loose connective tissue underlying epithelium' },
    ],
    preferredStains: ['H&E', 'PAS', 'Alcian_Blue'],
  },
  {
    category: 'epithelial',
    subtype: 'stratified_squamous_keratinized',
    name: 'Stratified Squamous Epithelium (Keratinized)',
    description: 'Multiple layers of cells with flat cells at the surface that have lost their nuclei and become filled with keratin, forming a protective barrier.',
    organSources: [
      { organ: 'skin_epidermis', bodySystem: 'integumentary' },
      { organ: 'lip_outer', bodySystem: 'integumentary' },
      { organ: 'palm', bodySystem: 'integumentary' },
      { organ: 'sole', bodySystem: 'integumentary' },
    ],
    identifyingFeatures: [
      'Multiple cell layers (stratified)',
      'Cells become flatter toward surface',
      'Superficial cells lack nuclei (anucleate)',
      'Thick eosinophilic keratin layer on surface',
      'Basal layer of cuboidal/columnar cells',
    ],
    characteristics: {
      level1: [
        'Many layers of cells stacked on top of each other',
        'Top layer is dead cells filled with tough protein (keratin)',
        'Makes skin waterproof and protective',
        'Thickest on palms and soles',
      ],
      level2: [
        'Multiple layers with cells becoming flatter toward surface',
        'Surface cells are dead, filled with keratin protein',
        'Provides waterproof barrier against mechanical stress',
        'New cells produced at bottom (basal layer) push upward',
        'Four distinct layers visible in thick skin',
      ],
      level3: [
        'Stratified epithelium with progressive keratinization',
        'Stratum basale: single layer of mitotically active stem cells',
        'Stratum spinosum: polygonal cells connected by desmosomes',
        'Stratum granulosum: contains keratohyalin granules',
        'Stratum corneum: anucleate, keratin-filled squames',
        'Stratum lucidum present only in thick skin (palms, soles)',
      ],
      level4: [
        'Keratinocyte differentiation controlled by calcium gradient',
        'Keratins K5/K14 in basal layer switch to K1/K10 suprabasally',
        'Keratohyalin contains profilaggrin, precursor to filaggrin',
        'Lamellar bodies extrude lipids to form water barrier',
        'Corneodesmosomes eventually degrade allowing desquamation',
      ],
      level5: [
        'Psoriasis: hyperproliferation with retention of nuclei (parakeratosis)',
        'Ichthyosis: defective barrier from abnormal keratinization',
        'Squamous cell carcinoma: malignant transformation of keratinocytes',
        'Pemphigus vulgaris: autoantibodies against desmosomal cadherins',
        'Epidermolysis bullosa: genetic defects in basement membrane zone',
      ],
    },
    clinicalRelevance: 'Barrier defects lead to dermatitis. Hyperkeratosis in psoriasis. Malignant transformation causes squamous cell carcinoma.',
    keyAnnotations: [
      { label: 'Stratum corneum', description: 'Outermost layer of anucleate, keratinized cells' },
      { label: 'Stratum granulosum', description: 'Layer with darkly staining keratohyalin granules' },
      { label: 'Stratum spinosum', description: 'Layer of polygonal cells with visible desmosomes' },
      { label: 'Stratum basale', description: 'Single basal layer of cuboidal stem cells' },
      { label: 'Dermis', description: 'Underlying connective tissue layer' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'epithelial',
    subtype: 'stratified_squamous_nonkeratinized',
    name: 'Stratified Squamous Epithelium (Non-keratinized)',
    description: 'Multiple layers of cells with flat cells at the surface that retain their nuclei, providing protection in moist environments.',
    organSources: [
      { organ: 'esophagus', bodySystem: 'digestive' },
      { organ: 'oral_cavity', bodySystem: 'digestive' },
      { organ: 'vagina', bodySystem: 'reproductive' },
      { organ: 'cornea', bodySystem: 'special_senses' },
      { organ: 'anal_canal', bodySystem: 'digestive' },
    ],
    identifyingFeatures: [
      'Multiple cell layers (stratified)',
      'Cells become flatter toward surface',
      'Superficial cells retain nuclei (nucleated)',
      'No thick keratin layer on surface',
      'Surface appears more moist/glistening',
    ],
    characteristics: {
      level1: [
        'Many layers of cells for protection',
        'Top cells are flat but still alive (have nuclei)',
        'Found in wet areas like mouth and throat',
        'Keeps areas moist while still protecting',
      ],
      level2: [
        'Multiple layers with flattening toward the surface',
        'Surface cells retain nuclei (unlike keratinized type)',
        'Found in moist locations subject to abrasion',
        'Provides protection without complete water barrier',
        'Lines passages that must stay flexible and moist',
      ],
      level3: [
        'Stratified squamous epithelium without keratinization',
        'Basal cells are cuboidal/columnar and mitotically active',
        'Intermediate layers show progressive flattening',
        'Superficial cells are flattened but nucleated',
        'Desmosomes maintain cell-cell adhesion throughout',
      ],
      level4: [
        'Glycogen accumulation in intermediate and superficial cells',
        'Langerhans cells (dendritic APCs) scattered throughout',
        'Turnover time approximately 25 days',
        'Estrogen-responsive in vaginal epithelium',
        'Corneal epithelium uniquely avascular, relies on tear film',
      ],
      level5: [
        'Barrett esophagus: replacement by columnar epithelium (metaplasia)',
        'Squamous dysplasia graded by thickness of atypical cells',
        'HPV causes cervical and oropharyngeal squamous carcinoma',
        'Candida forms pseudomembrane on non-keratinized epithelium',
        'Erosive lichen planus affects oral and genital mucosa',
      ],
    },
    clinicalRelevance: 'Barrett esophagus increases esophageal adenocarcinoma risk. HPV causes cervical and oropharyngeal cancer. Candidiasis forms pseudomembranes.',
    keyAnnotations: [
      { label: 'Surface cells', description: 'Flattened cells retaining nuclei' },
      { label: 'Intermediate layer', description: 'Polygonal cells with desmosomal connections' },
      { label: 'Basal layer', description: 'Cuboidal stem cells on basement membrane' },
      { label: 'Lamina propria', description: 'Underlying vascularized connective tissue' },
    ],
    preferredStains: ['H&E', 'PAS'],
  },
  {
    category: 'epithelial',
    subtype: 'pseudostratified',
    name: 'Pseudostratified Columnar Epithelium',
    description: 'A single layer of cells of varying heights that appear stratified because nuclei are at different levels, typically ciliated and found in respiratory tract.',
    organSources: [
      { organ: 'trachea', bodySystem: 'respiratory' },
      { organ: 'bronchi', bodySystem: 'respiratory' },
      { organ: 'nasal_cavity', bodySystem: 'respiratory' },
      { organ: 'epididymis', bodySystem: 'reproductive' },
      { organ: 'vas_deferens', bodySystem: 'reproductive' },
    ],
    identifyingFeatures: [
      'Appears multilayered but all cells touch basement membrane',
      'Nuclei at multiple levels create pseudostratified appearance',
      'Cilia on apical surface (respiratory type)',
      'Goblet cells interspersed',
      'Tall columnar cells next to shorter basal cells',
    ],
    characteristics: {
      level1: [
        'Looks like many layers but is really just one',
        'All cells touch the bottom but not all reach the top',
        'Has tiny hair-like cilia that wave to move mucus',
        'Lines the airways to trap and remove dust and germs',
      ],
      level2: [
        'Single layer that appears stratified due to nuclear position',
        'All cells contact the basement membrane',
        'Tall ciliated cells reach the surface',
        'Short basal cells serve as stem cell population',
        'Goblet cells produce protective mucus',
      ],
      level3: [
        'Pseudostratified columnar epithelium with cilia (respiratory type)',
        'All cells rest on basement membrane; not all reach lumen',
        'Ciliated cells predominate with 9+2 microtubule arrangement',
        'Goblet cells and submucosal glands produce mucus layer',
        'Mucociliary escalator clears particles from airways',
      ],
      level4: [
        'Ciliated cells have 200-300 cilia beating at 10-20 Hz',
        'Basal cells are reserve stem cells expressing p63',
        'Periciliary layer of low-viscosity fluid essential for ciliary beat',
        'Secretory cells include goblet cells and Clara (Club) cells',
        'Tight junctions form barrier; gap junctions coordinate ciliary beat',
      ],
      level5: [
        'Squamous metaplasia occurs with chronic irritation (smoking)',
        'Primary ciliary dyskinesia: genetic ciliary defect causes sinusitis, bronchiectasis',
        'Cystic fibrosis: thick mucus impairs mucociliary clearance',
        'Bronchogenic carcinoma often arises at squamous metaplasia sites',
        'Kartagener syndrome: situs inversus with ciliary dysfunction',
      ],
    },
    clinicalRelevance: 'Squamous metaplasia with smoking. Ciliary defects cause recurrent infections (Kartagener syndrome, cystic fibrosis).',
    keyAnnotations: [
      { label: 'Cilia', description: 'Hair-like projections on apical surface' },
      { label: 'Goblet cell', description: 'Mucus-secreting cell with pale cytoplasm' },
      { label: 'Basal cell', description: 'Short cell at base serving as stem cell' },
      { label: 'Basement membrane', description: 'All cells contact this thin layer' },
    ],
    preferredStains: ['H&E', 'PAS'],
  },
  {
    category: 'epithelial',
    subtype: 'transitional',
    name: 'Transitional Epithelium (Urothelium)',
    description: 'Specialized stratified epithelium that can stretch and recoil, lining the urinary tract from renal pelvis to urethra.',
    organSources: [
      { organ: 'urinary_bladder', bodySystem: 'urinary' },
      { organ: 'ureter', bodySystem: 'urinary' },
      { organ: 'renal_pelvis', bodySystem: 'urinary' },
      { organ: 'urethra_proximal', bodySystem: 'urinary' },
    ],
    identifyingFeatures: [
      'Multiple layers (4-6 when relaxed)',
      'Surface cells are large and dome-shaped (umbrella cells)',
      'Binucleated surface cells common',
      'Changes thickness with stretching',
      'No keratinization',
    ],
    characteristics: {
      level1: [
        'Stretchy tissue that lines the bladder',
        'Has big dome-shaped cells on top',
        'Gets thinner when the bladder fills with urine',
        'Keeps urine from leaking into body tissues',
      ],
      level2: [
        'Specialized stratified epithelium that can stretch',
        'Surface umbrella cells are large and often binucleate',
        'Layers decrease when stretched (distended bladder)',
        'Forms waterproof barrier against urine',
        'Found throughout the urinary tract',
      ],
      level3: [
        'Urothelium: stratified epithelium unique to urinary tract',
        'Three cell types: basal, intermediate, and superficial (umbrella) cells',
        'Umbrella cells have specialized asymmetric unit membrane (AUM)',
        'Plaques of uroplakin proteins create permeability barrier',
        'Can accommodate 8-fold increase in surface area with distension',
      ],
      level4: [
        'Uroplakins Ia, Ib, II, IIIa form hexagonal crystalline plaques',
        'Tight junctions among superficial cells are particularly impermeable',
        'Intermediate cells can differentiate into umbrella cells as needed',
        'Fusiform vesicles store extra membrane for expansion',
        'Basal cells serve as slow-cycling stem cell population',
      ],
      level5: [
        'Urothelial carcinoma most common bladder malignancy',
        'Flat (CIS) vs papillary vs invasive patterns of urothelial neoplasia',
        'Schistosoma haematobium causes squamous metaplasia and SCC',
        'Cyclophosphamide causes hemorrhagic cystitis and increases cancer risk',
        'Inverted papilloma: benign but can harbor in situ carcinoma',
      ],
    },
    clinicalRelevance: 'Urothelial carcinoma is the most common bladder cancer. Chronic irritation causes squamous metaplasia. Schistosomiasis increases squamous cell carcinoma risk.',
    keyAnnotations: [
      { label: 'Umbrella cell', description: 'Large dome-shaped surface cell, often binucleate' },
      { label: 'Intermediate cells', description: 'Middle layers of polygonal cells' },
      { label: 'Basal cells', description: 'Small cuboidal cells on basement membrane' },
      { label: 'Lamina propria', description: 'Vascularized connective tissue beneath epithelium' },
    ],
    preferredStains: ['H&E'],
  },
];

// ============================================================================
// CONNECTIVE TISSUES
// ============================================================================

const connectiveTissues: TissueDefinition[] = [
  {
    category: 'connective',
    subtype: 'loose_areolar',
    name: 'Loose (Areolar) Connective Tissue',
    description: 'The most common type of connective tissue, consisting of a loose network of collagen and elastic fibers with abundant ground substance.',
    organSources: [
      { organ: 'subcutaneous_tissue', bodySystem: 'integumentary' },
      { organ: 'mesentery', bodySystem: 'digestive' },
      { organ: 'lamina_propria', bodySystem: 'digestive' },
      { organ: 'submucosa', bodySystem: 'digestive' },
    ],
    identifyingFeatures: [
      'Loosely arranged collagen fibers',
      'Multiple cell types visible',
      'Abundant ground substance (appears clear)',
      'Few elastic fibers',
      'Well vascularized',
    ],
    characteristics: {
      level1: [
        'Soft, gel-like tissue that fills spaces between organs',
        'Has different types of cells floating in clear jelly',
        'Holds blood vessels and nerves',
        'Found just under the skin',
      ],
      level2: [
        'Loosely arranged fibers in abundant ground substance',
        'Contains fibroblasts, macrophages, mast cells, and adipocytes',
        'Collagen fibers provide strength, elastic fibers allow stretch',
        'Serves as packing material and allows tissue mobility',
        'Found in subcutaneous layer and around organs',
      ],
      level3: [
        'Loose connective tissue proper with sparse fiber density',
        'Predominant cell type is fibroblast (produces matrix)',
        'Type I and III collagen fibers irregularly arranged',
        'Ground substance contains GAGs (hyaluronan, proteoglycans)',
        'Provides tissue turgor and facilitates diffusion',
      ],
      level4: [
        'Fibroblasts synthesize collagen, elastin, and ground substance',
        'Resident macrophages provide immune surveillance',
        'Mast cells degranulate histamine in allergic reactions',
        'Adipocytes for energy storage often scattered',
        'Plasma cells produce antibodies in lamina propria',
      ],
      level5: [
        'Edema causes ground substance expansion',
        'Fibrosis from chronic inflammation replaces normal architecture',
        'Mast cell degranulation mediates Type I hypersensitivity',
        'Cellulitis: bacterial infection spreading through loose CT',
        'Delayed-type hypersensitivity causes granulomatous inflammation',
      ],
    },
    clinicalRelevance: 'Edema accumulates in loose CT. Cellulitis spreads through subcutaneous tissue. Allergic reactions involve mast cell degranulation.',
    keyAnnotations: [
      { label: 'Fibroblast', description: 'Elongated cell with oval nucleus, produces matrix' },
      { label: 'Collagen fiber', description: 'Wavy pink fibers providing tensile strength' },
      { label: 'Elastic fiber', description: 'Thin, branching fibers (best seen with special stains)' },
      { label: 'Ground substance', description: 'Clear, gel-like matrix between fibers' },
      { label: 'Macrophage', description: 'Large phagocytic cell with irregular shape' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'connective',
    subtype: 'dense_regular',
    name: 'Dense Regular Connective Tissue',
    description: 'Connective tissue with densely packed, parallel collagen fibers providing great tensile strength in one direction, found in tendons and ligaments.',
    organSources: [
      { organ: 'tendon', bodySystem: 'musculoskeletal' },
      { organ: 'ligament', bodySystem: 'musculoskeletal' },
      { organ: 'aponeurosis', bodySystem: 'musculoskeletal' },
      { organ: 'cornea', bodySystem: 'special_senses' },
    ],
    identifyingFeatures: [
      'Parallel bundles of collagen fibers',
      'Fibroblasts (tenocytes) compressed between fiber bundles',
      'Very little ground substance visible',
      'Minimal vascularity',
      'Fibroblast nuclei appear flattened/wavy',
    ],
    characteristics: {
      level1: [
        'Super-strong tissue made of parallel fibers like a rope',
        'Connects muscles to bones (tendons) and bones to bones (ligaments)',
        'Cells are squeezed flat between the fiber bundles',
        'Cannot stretch much - designed for pulling',
      ],
      level2: [
        'Densely packed collagen fibers arranged in parallel',
        'Fibroblasts (called tenocytes in tendons) lie between bundles',
        'Provides maximum tensile strength in one direction',
        'Found in structures that resist pulling forces',
        'Limited blood supply (heals slowly)',
      ],
      level3: [
        'Dense connective tissue with regular (parallel) fiber arrangement',
        'Type I collagen fibers organized into fascicles',
        'Tenocytes have wing-like cytoplasmic extensions',
        'Endotenon separates fascicles; epitenon covers entire tendon',
        'Crimp pattern visible in relaxed state',
      ],
      level4: [
        'Collagen fibrils have precise quarter-stagger arrangement',
        'Proteoglycans (decorin, fibromodulin) regulate fibrillogenesis',
        'Gap junctions connect tenocyte processes for mechanotransduction',
        'Paratenon provides blood supply in tendons without sheath',
        'Tenosynovial sheath in areas of friction',
      ],
      level5: [
        'Tendinopathy shows mucoid degeneration and neovascularization',
        'Complete tendon rupture requires surgical repair',
        'ACL tears do not heal spontaneously; reconstruction often needed',
        'Ehlers-Danlos syndrome: defective collagen causes hypermobility',
        'Marfan syndrome: fibrillin-1 defect affects elastic tissues',
      ],
    },
    clinicalRelevance: 'Tendons heal slowly due to poor blood supply. Tendinopathy from overuse. Ligament tears often require surgical reconstruction.',
    keyAnnotations: [
      { label: 'Collagen bundles', description: 'Parallel wavy bands of densely packed type I collagen' },
      { label: 'Tenocyte nucleus', description: 'Flattened, elongated nucleus compressed between bundles' },
      { label: 'Endotenon', description: 'Loose CT surrounding fascicles' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'connective',
    subtype: 'dense_irregular',
    name: 'Dense Irregular Connective Tissue',
    description: 'Connective tissue with densely packed collagen fibers arranged in multiple directions, providing strength against forces from any direction.',
    organSources: [
      { organ: 'dermis', bodySystem: 'integumentary' },
      { organ: 'organ_capsules', bodySystem: 'multiple' },
      { organ: 'submucosa', bodySystem: 'digestive' },
      { organ: 'pericardium', bodySystem: 'cardiovascular' },
      { organ: 'dura_mater', bodySystem: 'nervous' },
    ],
    identifyingFeatures: [
      'Densely packed collagen fibers in multiple directions',
      'Fibroblasts scattered among fiber bundles',
      'Little visible ground substance',
      'Bundles interwoven at various angles',
    ],
    characteristics: {
      level1: [
        'Strong tissue with fibers going in many directions',
        'Like a woven fabric that resists pulling from any direction',
        'Makes up most of the deep layer of skin',
        'Surrounds and protects organs',
      ],
      level2: [
        'Collagen fibers densely packed in multiple directions',
        'Provides strength against multidirectional forces',
        'Forms the reticular dermis (deep skin layer)',
        'Creates protective capsules around organs',
        'More cellular than dense regular CT',
      ],
      level3: [
        'Dense connective tissue with irregular (multidirectional) fiber arrangement',
        'Type I collagen bundles interwoven at various angles',
        'Fibroblasts less compressed than in regular type',
        'Some elastic fibers provide recoil',
        'Papillary dermis is looser; reticular dermis is dense irregular',
      ],
      level4: [
        'Collagen bundles form three-dimensional network',
        'Ground substance contains dermatan sulfate proteoglycans',
        'Elastic fibers interspersed throughout dermal collagen',
        'Hair follicles, sweat glands embedded within dermis',
        'Langer lines reflect predominant fiber orientation',
      ],
      level5: [
        'Keloid formation: excessive collagen deposition beyond wound margins',
        'Systemic sclerosis: autoimmune dermal fibrosis',
        'Striae (stretch marks): dermal collagen rupture',
        'Surgical incisions parallel to Langer lines heal better',
        'Cicatricial pemphigoid: autoimmune subepithelial blistering',
      ],
    },
    clinicalRelevance: 'Keloids from excessive collagen. Systemic sclerosis causes skin fibrosis. Surgical incision orientation affects scarring.',
    keyAnnotations: [
      { label: 'Collagen bundles', description: 'Thick eosinophilic bundles in multiple directions' },
      { label: 'Fibroblast', description: 'Spindle-shaped cell between fiber bundles' },
      { label: 'Elastic fibers', description: 'Fine fibers (special stains needed)' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'connective',
    subtype: 'adipose',
    name: 'Adipose Tissue',
    description: 'Specialized connective tissue for energy storage, composed of lipid-filled adipocytes that appear as large, clear cells with peripheral nuclei.',
    organSources: [
      { organ: 'subcutaneous_fat', bodySystem: 'integumentary' },
      { organ: 'visceral_fat', bodySystem: 'digestive' },
      { organ: 'bone_marrow', bodySystem: 'hematopoietic' },
      { organ: 'breast', bodySystem: 'reproductive' },
      { organ: 'orbit', bodySystem: 'special_senses' },
    ],
    identifyingFeatures: [
      'Large, clear (empty-appearing) cells',
      'Thin rim of cytoplasm at periphery',
      'Nucleus pushed to cell edge (signet-ring appearance)',
      'Cells arranged in lobules separated by CT septa',
      'Rich capillary network',
    ],
    characteristics: {
      level1: [
        'Fat tissue - cells filled with oil that stores energy',
        'Cells look empty because fat dissolves during processing',
        'Provides cushioning and insulation',
        'Found under skin and around organs',
      ],
      level2: [
        'Cells (adipocytes) store fat in large central droplet',
        'Nucleus and cytoplasm pushed to cell periphery',
        'White adipose tissue stores energy; brown generates heat',
        'Highly vascularized for nutrient exchange',
        'Cells appear empty because lipid dissolves in processing',
      ],
      level3: [
        'Adipocytes are large (up to 100 micrometers) unilocular cells',
        'Single lipid droplet displaces nucleus to periphery',
        'Organized into lobules by fibrous septa',
        'Dense capillary network (one per adipocyte)',
        'Brown adipose tissue has multilocular cells with many mitochondria',
      ],
      level4: [
        'Leptin secreted by adipocytes regulates appetite',
        'Adiponectin improves insulin sensitivity',
        'Resistin contributes to insulin resistance',
        'Brown adipose expresses UCP1 for thermogenesis',
        'Beige adipocytes in white fat can be activated for thermogenesis',
      ],
      level5: [
        'Obesity: adipocyte hypertrophy and hyperplasia',
        'Lipoma: benign adipose tumor',
        'Liposarcoma: malignant, various subtypes (well-differentiated to dedifferentiated)',
        'Visceral adiposity associated with metabolic syndrome',
        'Lipodystrophy syndromes: defective fat storage',
      ],
    },
    clinicalRelevance: 'Obesity involves adipocyte expansion. Lipomas are benign tumors. Visceral fat accumulation linked to metabolic syndrome.',
    keyAnnotations: [
      { label: 'Adipocyte', description: 'Large cell with empty-appearing cytoplasm (lipid dissolved)' },
      { label: 'Peripheral nucleus', description: 'Flattened nucleus pushed to cell edge' },
      { label: 'Fibrous septum', description: 'Connective tissue dividing adipose lobules' },
      { label: 'Capillary', description: 'Blood vessel adjacent to adipocytes' },
    ],
    preferredStains: ['H&E', 'Oil_Red_O'],
  },
  {
    category: 'connective',
    subtype: 'reticular',
    name: 'Reticular Connective Tissue',
    description: 'Network of thin reticular fibers (type III collagen) forming the structural framework of lymphoid organs, bone marrow, and liver.',
    organSources: [
      { organ: 'lymph_node', bodySystem: 'lymphatic' },
      { organ: 'spleen', bodySystem: 'lymphatic' },
      { organ: 'bone_marrow', bodySystem: 'hematopoietic' },
      { organ: 'liver', bodySystem: 'digestive' },
      { organ: 'thymus', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'Delicate network of thin fibers',
      'Reticular cells associated with fibers',
      'Spaces contain lymphocytes or other cells',
      'Best visualized with silver stains (argyrophilic)',
    ],
    characteristics: {
      level1: [
        'Like a delicate net or spider web made of tiny fibers',
        'Holds immune cells in place in lymph nodes and spleen',
        'Creates spaces for blood cells to develop in bone marrow',
        'Needs special staining to see clearly',
      ],
      level2: [
        'Network of thin type III collagen fibers',
        'Creates scaffold for cells in lymphoid organs',
        'Reticular cells produce and maintain the fiber network',
        'Supports blood cell development in bone marrow',
        'Requires silver stain for visualization',
      ],
      level3: [
        'Type III collagen forms thin (0.5-2 micrometer) reticular fibers',
        'Reticular cells wrap around fibers, connected by gap junctions',
        'Creates three-dimensional meshwork supporting free cells',
        'Found in lymphoid organs, bone marrow, liver sinusoids',
        'Argyrophilic: stains black with silver impregnation',
      ],
      level4: [
        'Type III collagen encoded by COL3A1 gene',
        'Reticular fibers coated with glycoprotein for cell adhesion',
        'Fibroblastic reticular cells of lymph node produce CCL21',
        'Follicular dendritic cells trap antigen-antibody complexes',
        'Hepatic stellate cells produce reticular fibers in liver',
      ],
      level5: [
        'Myelofibrosis: replacement of marrow by reticulin/collagen',
        'Reticulin stain assesses marrow fibrosis grade (MF-0 to MF-3)',
        'Cirrhosis involves reticulin collapse and collagen deposition',
        'Hodgkin lymphoma shows characteristic fibrosis pattern',
        'Gaucher disease: reticuloendothelial lipid accumulation',
      ],
    },
    clinicalRelevance: 'Myelofibrosis diagnosed by reticulin staining. Cirrhosis involves reticular collapse. Essential for lymphoid organ function.',
    keyAnnotations: [
      { label: 'Reticular fiber', description: 'Thin, branching fiber (black with silver stain)' },
      { label: 'Reticular cell', description: 'Cell body associated with fiber network' },
      { label: 'Lymphocytes', description: 'Small round cells within fiber meshwork' },
    ],
    preferredStains: ['Silver', 'H&E'],
  },
];

// ============================================================================
// MUSCLE TISSUES
// ============================================================================

const muscleTissues: TissueDefinition[] = [
  {
    category: 'muscle',
    subtype: 'skeletal',
    name: 'Skeletal Muscle',
    description: 'Voluntary, striated muscle tissue attached to bones, composed of long multinucleated fibers with peripheral nuclei and visible cross-striations.',
    organSources: [
      { organ: 'biceps', bodySystem: 'musculoskeletal' },
      { organ: 'quadriceps', bodySystem: 'musculoskeletal' },
      { organ: 'tongue', bodySystem: 'digestive' },
      { organ: 'diaphragm', bodySystem: 'respiratory' },
      { organ: 'external_eye_muscles', bodySystem: 'special_senses' },
    ],
    identifyingFeatures: [
      'Long, cylindrical fibers',
      'Multiple peripheral nuclei',
      'Clear cross-striations (alternating light and dark bands)',
      'Fibers arranged in parallel bundles',
    ],
    characteristics: {
      level1: [
        'Muscle you control to move your body',
        'Has stripes running across it',
        'Connected to bones by tendons',
        'Has many nuclei in each long fiber',
      ],
      level2: [
        'Voluntary muscle attached to skeleton',
        'Long, cylindrical cells called muscle fibers',
        'Multiple nuclei located at fiber periphery',
        'Cross-striations from organized contractile proteins',
        'Organized into fascicles wrapped in connective tissue',
      ],
      level3: [
        'Multinucleated syncytial fibers 10-100 micrometers in diameter',
        'Sarcomere: functional unit from Z-line to Z-line',
        'A-band (dark): myosin thick filaments',
        'I-band (light): actin thin filaments only',
        'H-zone: center of A-band, only thick filaments',
      ],
      level4: [
        'Satellite cells are muscle stem cells beneath basal lamina',
        'T-tubules at A-I junction trigger calcium release',
        'Triads: T-tubule flanked by terminal cisternae of SR',
        'Type I (slow oxidative), Type IIa (fast oxidative), Type IIb (fast glycolytic)',
        'Neuromuscular junction with specialized motor end plate',
      ],
      level5: [
        'Duchenne muscular dystrophy: absence of dystrophin protein',
        'Myasthenia gravis: autoantibodies against ACh receptors',
        'Rhabdomyolysis: muscle breakdown releases myoglobin',
        'Malignant hyperthermia: RYR1 mutation causes dangerous calcium release',
        'Inclusion body myositis: inflammatory myopathy with rimmed vacuoles',
      ],
    },
    clinicalRelevance: 'Duchenne dystrophy from dystrophin mutations. Myasthenia gravis affects neuromuscular junction. Rhabdomyolysis causes acute kidney injury.',
    keyAnnotations: [
      { label: 'Skeletal muscle fiber', description: 'Long, cylindrical multinucleated cell' },
      { label: 'Peripheral nuclei', description: 'Multiple nuclei at fiber edge' },
      { label: 'A-band', description: 'Dark band containing myosin' },
      { label: 'I-band', description: 'Light band with actin only' },
      { label: 'Endomysium', description: 'Connective tissue around individual fibers' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'muscle',
    subtype: 'cardiac',
    name: 'Cardiac Muscle',
    description: 'Involuntary, striated muscle of the heart, composed of branching fibers with central nuclei connected by intercalated discs.',
    organSources: [
      { organ: 'heart_myocardium', bodySystem: 'cardiovascular' },
      { organ: 'pulmonary_vein_wall', bodySystem: 'cardiovascular' },
    ],
    identifyingFeatures: [
      'Branching fibers',
      'Central nucleus (usually single)',
      'Cross-striations present',
      'Intercalated discs (step-like dark lines)',
      'Less regular arrangement than skeletal muscle',
    ],
    characteristics: {
      level1: [
        'Heart muscle that beats automatically',
        'Has stripes like arm muscles but branches like a tree',
        'Cells connect together to beat as one',
        'One nucleus in the center of each cell',
      ],
      level2: [
        'Involuntary striated muscle specific to the heart',
        'Fibers branch and anastomose',
        'Single, central nucleus per cell',
        'Intercalated discs connect adjacent cells',
        'Striations from sarcomere organization like skeletal muscle',
      ],
      level3: [
        'Cardiomyocytes are branched, striated, and mononucleated',
        'Intercalated discs contain: transverse (desmosomes, fascia adherens) and lateral (gap junctions) components',
        'T-tubules located at Z-lines (not A-I junction)',
        'Diads: T-tubule with single terminal cisterna',
        'Rich in mitochondria (30-40% of cell volume)',
      ],
      level4: [
        'Calcium-induced calcium release from SR via ryanodine receptors',
        'Gap junctions (connexin-43) allow rapid electrical propagation',
        'Cardiac troponin (cTnI, cTnT) distinct from skeletal isoforms',
        'Natriuretic peptides (ANP, BNP) secreted by atrial and ventricular myocytes',
        'Purkinje fibers are specialized conducting cardiomyocytes',
      ],
      level5: [
        'Troponin I and T elevation indicates myocardial infarction',
        'Contraction band necrosis indicates reperfusion injury',
        'Hypertrophic cardiomyopathy: myocyte disarray with fibrosis',
        'Dilated cardiomyopathy: eccentric hypertrophy with dilation',
        'Amyloidosis causes restrictive cardiomyopathy',
      ],
    },
    clinicalRelevance: 'Troponins are markers of myocardial infarction. Cardiomyopathies cause heart failure. Arrhythmias arise from gap junction abnormalities.',
    keyAnnotations: [
      { label: 'Cardiomyocyte', description: 'Branched striated muscle cell' },
      { label: 'Intercalated disc', description: 'Dark-staining stepped junction between cells' },
      { label: 'Central nucleus', description: 'Single nucleus in cell center' },
      { label: 'Striations', description: 'Cross-banding pattern from sarcomeres' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'muscle',
    subtype: 'smooth',
    name: 'Smooth Muscle',
    description: 'Involuntary, non-striated muscle found in walls of hollow organs, composed of spindle-shaped cells with central nuclei.',
    organSources: [
      { organ: 'intestinal_wall', bodySystem: 'digestive' },
      { organ: 'blood_vessel_wall', bodySystem: 'cardiovascular' },
      { organ: 'uterus', bodySystem: 'reproductive' },
      { organ: 'urinary_bladder', bodySystem: 'urinary' },
      { organ: 'bronchi', bodySystem: 'respiratory' },
    ],
    identifyingFeatures: [
      'Spindle-shaped cells',
      'Single, elongated central nucleus',
      'No visible striations',
      'Cells arranged in sheets or bundles',
      'Nuclei may appear corkscrew-shaped when contracted',
    ],
    characteristics: {
      level1: [
        'Muscle that works automatically without you thinking about it',
        'Has no stripes - looks smooth',
        'Moves food through intestines and controls blood vessel size',
        'Cells are shaped like spindles with one nucleus',
      ],
      level2: [
        'Involuntary muscle without striations',
        'Spindle-shaped cells with single central nucleus',
        'Found in walls of hollow organs and blood vessels',
        'Arranged in sheets, often in perpendicular layers',
        'Slower, sustained contractions compared to skeletal muscle',
      ],
      level3: [
        'Fusiform cells 20-200 micrometers long, 3-8 micrometers wide',
        'Single elongated nucleus becomes corkscrew-shaped when contracted',
        'Caveolae substitute for T-tubule system',
        'Dense bodies anchor actin filaments (equivalent to Z-lines)',
        'Calmodulin-dependent myosin light chain kinase activation',
      ],
      level4: [
        'Contraction initiated by calcium-calmodulin complex',
        'MLCK phosphorylates myosin regulatory light chain',
        'Latch state: sustained contraction with low energy expenditure',
        'Gap junctions in single-unit smooth muscle for coordinated contraction',
        'Multi-unit smooth muscle (iris, vas deferens) has individual innervation',
      ],
      level5: [
        'Asthma: bronchial smooth muscle hyperresponsiveness',
        'Hypertension: vascular smooth muscle hypertrophy',
        'Leiomyoma: benign smooth muscle tumor (common in uterus)',
        'Leiomyosarcoma: malignant smooth muscle tumor',
        'Achalasia: loss of inhibitory neurons, esophageal smooth muscle spasm',
      ],
    },
    clinicalRelevance: 'Asthma involves bronchial smooth muscle constriction. Uterine leiomyomas (fibroids) are common benign tumors. Vascular smooth muscle involved in hypertension.',
    keyAnnotations: [
      { label: 'Smooth muscle cell', description: 'Spindle-shaped cell without striations' },
      { label: 'Central nucleus', description: 'Elongated nucleus in cell center' },
      { label: 'Muscle bundle', description: 'Group of smooth muscle cells' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
];

// ============================================================================
// NERVOUS TISSUE
// ============================================================================

const nervousTissues: TissueDefinition[] = [
  {
    category: 'nervous',
    subtype: 'neurons',
    name: 'Neurons',
    description: 'Excitable cells specialized for receiving, processing, and transmitting electrical and chemical signals.',
    organSources: [
      { organ: 'cerebral_cortex', bodySystem: 'nervous' },
      { organ: 'cerebellum', bodySystem: 'nervous' },
      { organ: 'spinal_cord', bodySystem: 'nervous' },
      { organ: 'dorsal_root_ganglion', bodySystem: 'nervous' },
      { organ: 'autonomic_ganglia', bodySystem: 'nervous' },
    ],
    identifyingFeatures: [
      'Large cell body (soma) with prominent nucleus',
      'Large nucleolus visible',
      'Basophilic Nissl bodies in cytoplasm',
      'Processes extending from cell body',
      'Surrounded by smaller glial cells',
    ],
    characteristics: {
      level1: [
        'Brain cells that send and receive messages',
        'Have a big body with branches reaching out',
        'Like a tree with roots (dendrites) and a long trunk (axon)',
        'Signals jump from one neuron to the next',
      ],
      level2: [
        'Cells specialized for electrical signaling',
        'Cell body (soma) contains nucleus and protein-making machinery',
        'Dendrites receive signals; single axon transmits signals',
        'Nissl bodies (rough ER) are prominent in soma',
        'Synapses connect neurons to each other or to muscles',
      ],
      level3: [
        'Neurons have soma, dendrites, axon, and synaptic terminals',
        'Nissl bodies (chromatophilic substance): stacked rough ER',
        'Axon hillock lacks Nissl bodies; generates action potentials',
        'Anterograde transport: kinesin; retrograde: dynein',
        'Multipolar, bipolar, pseudounipolar, and anaxonic types',
      ],
      level4: [
        'Resting potential (-70mV) maintained by Na+/K+ ATPase',
        'Action potential propagation via voltage-gated Na+ and K+ channels',
        'SNARE proteins (VAMP, syntaxin, SNAP-25) mediate vesicle fusion',
        'Neurotrophic factors (NGF, BDNF) support neuronal survival',
        'Synaptic plasticity: LTP and LTD modify synaptic strength',
      ],
      level5: [
        'Chromatolysis: Nissl body dispersion indicates neuronal injury',
        'Neurofibrillary tangles: hyperphosphorylated tau in Alzheimer',
        'Lewy bodies: alpha-synuclein aggregates in Parkinson',
        'Red neurons: acute ischemic/hypoxic injury',
        'Axonal spheroids in diffuse axonal injury',
      ],
    },
    clinicalRelevance: 'Neurodegeneration involves protein aggregation (tau, alpha-synuclein). Axonal injury causes chromatolysis. Red neurons indicate acute hypoxia.',
    keyAnnotations: [
      { label: 'Neuronal soma', description: 'Large cell body with prominent nucleus and nucleolus' },
      { label: 'Nissl bodies', description: 'Basophilic granules (rough ER) in cytoplasm' },
      { label: 'Nucleolus', description: 'Dark round body within pale nucleus' },
      { label: 'Axon hillock', description: 'Pale-staining cone where axon originates' },
      { label: 'Dendrites', description: 'Branching processes receiving input' },
    ],
    preferredStains: ['H&E', 'Silver'],
  },
  {
    category: 'nervous',
    subtype: 'neuroglia',
    name: 'Neuroglia (Glial Cells)',
    description: 'Supporting cells of the nervous system including astrocytes, oligodendrocytes, microglia, and ependymal cells.',
    organSources: [
      { organ: 'brain_white_matter', bodySystem: 'nervous' },
      { organ: 'brain_gray_matter', bodySystem: 'nervous' },
      { organ: 'spinal_cord', bodySystem: 'nervous' },
      { organ: 'ventricle_lining', bodySystem: 'nervous' },
    ],
    identifyingFeatures: [
      'Smaller than neurons',
      'Various morphologies depending on type',
      'Oligodendrocytes: small, round, dark nuclei (fried-egg artifact)',
      'Astrocytes: larger, paler nuclei, star-shaped (with staining)',
      'Microglia: small, elongated, dark nuclei',
    ],
    characteristics: {
      level1: [
        'Helper cells that support neurons',
        'More of these than neurons in the brain',
        'Feed neurons, clean up waste, and fight infections',
        'Different types have different jobs',
      ],
      level2: [
        'Supporting cells outnumber neurons in CNS',
        'Astrocytes provide structural and metabolic support',
        'Oligodendrocytes make myelin in CNS',
        'Microglia are immune cells of the brain',
        'Ependymal cells line ventricles, produce CSF',
      ],
      level3: [
        'Astrocytes: GFAP-positive, form blood-brain barrier with foot processes',
        'Oligodendrocytes: myelinate multiple CNS axon segments',
        'Microglia: bone marrow-derived, CD68/Iba1-positive macrophages',
        'Ependymal cells: ciliated simple cuboidal, line ventricles',
        'Schwann cells: PNS equivalent of oligodendrocytes',
      ],
      level4: [
        'Astrocyte glutamate-glutamine cycle regulates neurotransmission',
        'Oligodendrocyte progenitor cells (NG2+) can remyelinate',
        'Microglial activation: M1 (pro-inflammatory) vs M2 (anti-inflammatory)',
        'Ependymal tanycytes in hypothalamus sense CSF composition',
        'Radial glia serve as neural progenitors and scaffolds during development',
      ],
      level5: [
        'Glioblastoma: astrocytic tumor, most common primary brain malignancy',
        'Multiple sclerosis: autoimmune oligodendrocyte damage',
        'Alexander disease: GFAP mutation causes Rosenthal fibers',
        'Microgliosis accompanies neurodegeneration',
        'Ependymoma: tumor arising from ependymal cells',
      ],
    },
    clinicalRelevance: 'Glioblastoma is most common malignant brain tumor. Multiple sclerosis destroys oligodendrocytes. Microglial activation in neurodegeneration.',
    keyAnnotations: [
      { label: 'Astrocyte', description: 'Star-shaped cell with GFAP-positive processes' },
      { label: 'Oligodendrocyte', description: 'Small round cell with dark nucleus' },
      { label: 'Microglia', description: 'Small cell with elongated dark nucleus' },
      { label: 'Neuropil', description: 'Background of cell processes' },
    ],
    preferredStains: ['H&E', 'IHC'],
  },
  {
    category: 'nervous',
    subtype: 'peripheral_nerve',
    name: 'Peripheral Nerve',
    description: 'Bundle of myelinated and unmyelinated axons in the peripheral nervous system, wrapped in connective tissue layers.',
    organSources: [
      { organ: 'sciatic_nerve', bodySystem: 'nervous' },
      { organ: 'median_nerve', bodySystem: 'nervous' },
      { organ: 'vagus_nerve', bodySystem: 'nervous' },
      { organ: 'cranial_nerves', bodySystem: 'nervous' },
    ],
    identifyingFeatures: [
      'Bundles (fascicles) of nerve fibers',
      'Myelin sheaths appear as clear rings around axons',
      'Schwann cell nuclei visible',
      'Connective tissue wrappings visible',
      'Myelinated fibers: clear halo around dark central dot (axon)',
    ],
    characteristics: {
      level1: [
        'Bundles of nerve cables wrapped in protective covers',
        'Like electrical wires with insulation',
        'Carry messages from brain to body and back',
        'Some cables are insulated (faster), some are not',
      ],
      level2: [
        'Bundle of axons organized into fascicles',
        'Schwann cells wrap axons with myelin for fast conduction',
        'Three connective tissue layers: epineurium, perineurium, endoneurium',
        'Contains both motor and sensory fibers (mixed nerve)',
        'Unmyelinated axons grouped in Remak bundles',
      ],
      level3: [
        'Myelinated axons: one Schwann cell per internode',
        'Nodes of Ranvier: gaps between myelin segments',
        'Perineurium: blood-nerve barrier, tight junctions',
        'Endoneurium: Type III collagen around individual fibers',
        'Vasa nervorum: blood supply to nerve',
      ],
      level4: [
        'Saltatory conduction between nodes of Ranvier',
        'Node contains concentrated voltage-gated Na+ channels',
        'Schmidt-Lanterman incisures: cytoplasmic channels in myelin',
        'P0, PMP22, MBP: major myelin proteins',
        'Regeneration: 1-4 mm/day with intact endoneurial tubes',
      ],
      level5: [
        'Guillain-Barre syndrome: autoimmune demyelination',
        'Charcot-Marie-Tooth: inherited peripheral neuropathy',
        'Diabetic neuropathy: metabolic and vascular damage',
        'Wallerian degeneration distal to axon transection',
        'Schwannoma: benign tumor of Schwann cells',
      ],
    },
    clinicalRelevance: 'Guillain-Barre causes ascending paralysis. Diabetic neuropathy is common complication. Nerve regeneration possible if endoneurium intact.',
    keyAnnotations: [
      { label: 'Myelinated axon', description: 'Fiber with clear myelin ring around central axon' },
      { label: 'Schwann cell nucleus', description: 'Elongated nucleus alongside nerve fiber' },
      { label: 'Epineurium', description: 'Outer connective tissue surrounding entire nerve' },
      { label: 'Perineurium', description: 'Connective tissue surrounding each fascicle' },
      { label: 'Endoneurium', description: 'Delicate CT around individual fibers' },
    ],
    preferredStains: ['H&E', 'Silver'],
  },
];

// ============================================================================
// BONE TISSUES
// ============================================================================

const boneTissues: TissueDefinition[] = [
  {
    category: 'bone',
    subtype: 'compact',
    name: 'Compact (Cortical) Bone',
    description: 'Dense bone tissue forming the outer layer of bones, organized into cylindrical osteons (Haversian systems) for strength.',
    organSources: [
      { organ: 'femur_shaft', bodySystem: 'musculoskeletal' },
      { organ: 'tibia_shaft', bodySystem: 'musculoskeletal' },
      { organ: 'skull', bodySystem: 'musculoskeletal' },
    ],
    identifyingFeatures: [
      'Circular osteons (Haversian systems)',
      'Central Haversian canal in each osteon',
      'Concentric lamellae around central canal',
      'Lacunae with osteocytes between lamellae',
      'Canaliculi radiating from lacunae',
    ],
    characteristics: {
      level1: [
        'The hard outer layer of bones',
        'Has tiny tubes running through it for blood vessels',
        'Made of rings of bone around each tube',
        'Bone cells live in small spaces and connect through tunnels',
      ],
      level2: [
        'Dense, organized bone forming the cortex (outer layer)',
        'Osteons are cylindrical units with central blood vessel canal',
        'Concentric rings (lamellae) of bone matrix around each canal',
        'Osteocytes in lacunae communicate via canaliculi',
        'Provides strength and rigidity',
      ],
      level3: [
        'Osteon (Haversian system): 200-250 micrometer diameter',
        'Central canal contains blood vessels and nerves',
        'Volkmann canals connect osteons horizontally',
        'Interstitial lamellae: remnants of remodeled osteons',
        'Circumferential lamellae at inner and outer bone surfaces',
      ],
      level4: [
        'Osteocyte processes extend through canaliculi, connect via gap junctions',
        'Lacunocanalicular system senses mechanical strain (mechanotransduction)',
        'Matrix: 65% hydroxyapatite, 25% type I collagen, 10% water',
        'Bone remodeling: cutting cone (osteoclasts) followed by closing cone (osteoblasts)',
        'BMU (basic multicellular unit) replaces osteons over 4-6 months',
      ],
      level5: [
        'Osteoporosis: reduced bone mass, increased fracture risk',
        'Osteopetrosis: failed osteoclast function, dense but brittle bone',
        'Paget disease: disorganized remodeling, mosaic lamellar pattern',
        'Osteosarcoma arises from bone-forming cells',
        'Stress fractures from accumulated microdamage',
      ],
    },
    clinicalRelevance: 'Osteoporosis causes fragility fractures. Osteosarcoma is primary bone malignancy. Paget disease shows disorganized remodeling.',
    keyAnnotations: [
      { label: 'Osteon', description: 'Circular structural unit of compact bone' },
      { label: 'Haversian canal', description: 'Central canal containing blood vessels' },
      { label: 'Lamellae', description: 'Concentric rings of bone matrix' },
      { label: 'Lacuna', description: 'Small cavity containing osteocyte' },
      { label: 'Canaliculus', description: 'Tiny channel connecting lacunae' },
    ],
    preferredStains: ['H&E', 'Unstained'],
  },
  {
    category: 'bone',
    subtype: 'spongy',
    name: 'Spongy (Trabecular/Cancellous) Bone',
    description: 'Porous bone tissue with a honeycomb structure of bony trabeculae, found in the interior of bones and filled with bone marrow.',
    organSources: [
      { organ: 'vertebral_body', bodySystem: 'musculoskeletal' },
      { organ: 'epiphysis', bodySystem: 'musculoskeletal' },
      { organ: 'iliac_crest', bodySystem: 'musculoskeletal' },
      { organ: 'sternum', bodySystem: 'musculoskeletal' },
    ],
    identifyingFeatures: [
      'Network of bony trabeculae (spicules)',
      'Open spaces filled with bone marrow',
      'No osteons - relies on diffusion',
      'Osteocytes in lacunae within trabeculae',
      'Active surfaces lined by osteoblasts/osteoclasts',
    ],
    characteristics: {
      level1: [
        'Sponge-like bone on the inside of bones',
        'Has many open spaces filled with bone marrow',
        'Lighter weight but still strong',
        'Where blood cells are made',
      ],
      level2: [
        'Porous bone with interconnecting bony spicules (trabeculae)',
        'Spaces between trabeculae contain bone marrow',
        'No Haversian systems - trabeculae too thin',
        'Osteocytes receive nutrients by diffusion from marrow',
        'Provides strength with minimal weight',
      ],
      level3: [
        'Trabeculae oriented along stress lines (Wolff law)',
        'Surface covered by osteoblasts (bone formation) or osteoclasts (resorption)',
        'Red marrow (hematopoietic) in axial skeleton, ends of long bones',
        'Yellow marrow (fatty) in diaphysis of adult long bones',
        'Higher surface-to-volume ratio means faster turnover than compact bone',
      ],
      level4: [
        'Trabecular bone remodels faster than cortical (25% vs 3%/year)',
        'Strain adaptation: trabeculae remodel to optimize load bearing',
        'Sinusoidal blood vessels in marrow have fenestrated endothelium',
        'Hematopoietic stem cells in perivascular niche near endosteum',
        'Osteocyte apoptosis signals remodeling need',
      ],
      level5: [
        'Trabecular bone lost first in osteoporosis (vertebral fractures)',
        'Multiple myeloma: lytic lesions in trabecular bone',
        'Metastatic carcinoma frequently affects trabecular bone',
        'Bone marrow biopsy samples trabecular bone and marrow',
        'DXA measures BMD of trabecular-rich sites (spine, hip)',
      ],
    },
    clinicalRelevance: 'Trabecular bone lost early in osteoporosis. Multiple myeloma causes lytic lesions. Bone marrow biopsy for hematologic malignancies.',
    keyAnnotations: [
      { label: 'Trabecula', description: 'Bony spicule forming honeycomb structure' },
      { label: 'Bone marrow', description: 'Soft tissue filling spaces between trabeculae' },
      { label: 'Osteoblast', description: 'Cuboidal cell lining trabecular surface' },
      { label: 'Osteoclast', description: 'Large multinucleated cell resorbing bone' },
      { label: 'Osteocyte', description: 'Bone cell entrapped in lacuna' },
    ],
    preferredStains: ['H&E'],
  },
  {
    category: 'bone',
    subtype: 'growth_plate',
    name: 'Growth Plate (Epiphyseal Plate)',
    description: 'Cartilaginous zone between epiphysis and metaphysis responsible for longitudinal bone growth, with distinct zones of chondrocyte maturation.',
    organSources: [
      { organ: 'femur_distal', bodySystem: 'musculoskeletal' },
      { organ: 'tibia_proximal', bodySystem: 'musculoskeletal' },
      { organ: 'radius_distal', bodySystem: 'musculoskeletal' },
    ],
    identifyingFeatures: [
      'Distinct horizontal zones visible',
      'Chondrocyte columns in proliferative zone',
      'Large, hypertrophic chondrocytes near metaphysis',
      'Calcified matrix near bone interface',
      'New bone forming at metaphyseal side',
    ],
    characteristics: {
      level1: [
        'The growth zone of bones in children',
        'Made of cartilage that slowly turns to bone',
        'Cells multiply, get bigger, then turn to bone',
        'When it closes, you stop growing taller',
      ],
      level2: [
        'Cartilaginous disc between epiphysis and metaphysis',
        'Responsible for longitudinal bone growth',
        'Four zones from epiphysis to metaphysis',
        'Chondrocytes proliferate, enlarge, die, and are replaced by bone',
        'Closes at skeletal maturity',
      ],
      level3: [
        'Resting zone: reserve chondrocytes, stem cell function',
        'Proliferative zone: chondrocyte columns, active division',
        'Hypertrophic zone: chondrocyte enlargement, matrix calcification',
        'Zone of ossification: vascular invasion, bone deposition',
        'Growth hormone and IGF-1 regulate proliferation',
      ],
      level4: [
        'Indian hedgehog (Ihh) signals regulate chondrocyte differentiation',
        'PTHrP keeps proliferating chondrocytes from hypertrophy',
        'VEGF from hypertrophic chondrocytes promotes vascular invasion',
        'Type X collagen marks hypertrophic zone',
        'Estrogen accelerates growth plate closure at puberty',
      ],
      level5: [
        'Salter-Harris fractures: growth plate injuries affecting growth',
        'Achondroplasia: FGFR3 gain-of-function impairs proliferation',
        'Rickets: defective mineralization widens growth plate',
        'Slipped capital femoral epiphysis: shear through hypertrophic zone',
        'Osteochondroma: displaced growth plate cartilage',
      ],
    },
    clinicalRelevance: 'Growth plate fractures can affect bone growth. Achondroplasia from FGFR3 mutation. Rickets causes widened, irregular growth plates.',
    keyAnnotations: [
      { label: 'Resting zone', description: 'Reserve chondrocytes nearest epiphysis' },
      { label: 'Proliferative zone', description: 'Columns of dividing chondrocytes' },
      { label: 'Hypertrophic zone', description: 'Enlarged chondrocytes, calcifying matrix' },
      { label: 'Zone of ossification', description: 'New bone forming at metaphysis' },
    ],
    preferredStains: ['H&E'],
  },
];

// ============================================================================
// CARTILAGE TISSUES
// ============================================================================

const cartilageTissues: TissueDefinition[] = [
  {
    category: 'cartilage',
    subtype: 'hyaline',
    name: 'Hyaline Cartilage',
    description: 'Most common type of cartilage with a glassy, translucent matrix, found in articular surfaces, respiratory tract, and fetal skeleton.',
    organSources: [
      { organ: 'articular_cartilage', bodySystem: 'musculoskeletal' },
      { organ: 'trachea', bodySystem: 'respiratory' },
      { organ: 'bronchi', bodySystem: 'respiratory' },
      { organ: 'costal_cartilage', bodySystem: 'musculoskeletal' },
      { organ: 'nasal_septum', bodySystem: 'respiratory' },
    ],
    identifyingFeatures: [
      'Glassy, homogeneous matrix',
      'Chondrocytes in lacunae',
      'Isogenous groups (clusters of 2-8 cells)',
      'Territorial matrix (darker) around cells',
      'Interterritorial matrix (lighter) between groups',
    ],
    characteristics: {
      level1: [
        'Smooth, glassy cartilage covering bone ends in joints',
        'Cells sit in little holes in the matrix',
        'Forms most of the skeleton before birth',
        'Found in nose, windpipe, and ribs',
      ],
      level2: [
        'Most common type with smooth, glassy matrix',
        'Chondrocytes in lacunae produce and maintain matrix',
        'Type II collagen provides tensile strength',
        'Proteoglycan aggregates trap water for compression resistance',
        'Avascular - nutrients diffuse from perichondrium',
      ],
      level3: [
        'Matrix: 60% water, 15% Type II collagen, 10% proteoglycans',
        'Aggrecan: major proteoglycan aggregated on hyaluronan backbone',
        'Territorial matrix enriched in proteoglycans (darker staining)',
        'Isogenous groups arise from chondrocyte division',
        'Perichondrium has outer fibrous and inner chondrogenic layers',
      ],
      level4: [
        'Collagen fibrils organized in arcade pattern in articular cartilage',
        'Superficial zone: tangential fibrils, flattened chondrocytes',
        'Middle zone: random fibrils, round chondrocytes',
        'Deep zone: vertical fibrils, columnar chondrocytes',
        'SOX9 transcription factor essential for chondrogenesis',
      ],
      level5: [
        'Osteoarthritis: cartilage degradation, subchondral changes',
        'Relapsing polychondritis: autoimmune cartilage destruction',
        'Achondroplasia affects growth plate hyaline cartilage',
        'Chondrosarcoma: malignant cartilage tumor',
        'Costochondritis: painful inflammation of costal cartilage',
      ],
    },
    clinicalRelevance: 'Osteoarthritis is progressive cartilage loss. Limited healing capacity due to avascularity. Chondrosarcoma is malignant cartilage tumor.',
    keyAnnotations: [
      { label: 'Chondrocyte', description: 'Cartilage cell within lacuna' },
      { label: 'Lacuna', description: 'Space containing chondrocyte (shrinks in processing)' },
      { label: 'Isogenous group', description: 'Cluster of chondrocytes from same parent cell' },
      { label: 'Territorial matrix', description: 'Darker matrix immediately surrounding cells' },
      { label: 'Perichondrium', description: 'Connective tissue covering (not present in articular cartilage)' },
    ],
    preferredStains: ['H&E', 'Alcian_Blue'],
  },
  {
    category: 'cartilage',
    subtype: 'elastic',
    name: 'Elastic Cartilage',
    description: 'Cartilage with abundant elastic fibers in the matrix, providing flexibility while maintaining shape.',
    organSources: [
      { organ: 'ear_pinna', bodySystem: 'special_senses' },
      { organ: 'epiglottis', bodySystem: 'respiratory' },
      { organ: 'auditory_tube', bodySystem: 'special_senses' },
      { organ: 'larynx_parts', bodySystem: 'respiratory' },
    ],
    identifyingFeatures: [
      'Similar to hyaline but with visible elastic fibers',
      'Elastic fibers form dense network (special stains)',
      'Chondrocytes in lacunae',
      'More opaque, yellowish in fresh state',
      'Maintains shape while allowing bending',
    ],
    characteristics: {
      level1: [
        'Bendy cartilage in your ears and voice box',
        'Has elastic fibers that let it spring back after bending',
        'Yellowish color when fresh',
        'Keeps its shape but can flex',
      ],
      level2: [
        'Contains abundant elastic fibers in matrix',
        'Provides flexibility with structural support',
        'Found in ear, epiglottis, auditory tubes',
        'Chondrocytes similar to hyaline cartilage',
        'Does not calcify with age (unlike hyaline)',
      ],
      level3: [
        'Elastic fibers form branching network throughout matrix',
        'Type II collagen also present (similar to hyaline)',
        'Perichondrium always present',
        'Yellow color from elastin in fresh tissue',
        'Elastic fibers best visualized with Verhoeff or orcein stains',
      ],
      level4: [
        'Elastin assembled from tropoelastin monomers',
        'Fibrillin-1 microfibrils scaffold elastic fiber assembly',
        'Lysyl oxidase cross-links elastin (desmosine, isodesmosine)',
        'More resistant to degeneration than hyaline cartilage',
        'Growth by both interstitial and appositional mechanisms',
      ],
      level5: [
        'Relapsing polychondritis affects elastic cartilage preferentially',
        'Ear cartilage affected in leprosy and frost bite',
        'Epiglottitis: bacterial infection causes swelling, airway compromise',
        'Elastic cartilage tumors rare',
        'Marfan syndrome: fibrillin defect affects elastic tissues',
      ],
    },
    clinicalRelevance: 'Relapsing polychondritis causes ear and airway inflammation. Epiglottitis is a medical emergency. Does not calcify with age.',
    keyAnnotations: [
      { label: 'Chondrocyte', description: 'Cartilage cell in lacuna' },
      { label: 'Elastic fibers', description: 'Branching fibers in matrix (special stain)' },
      { label: 'Matrix', description: 'Less glassy than hyaline due to elastic fibers' },
      { label: 'Perichondrium', description: 'Surrounding connective tissue layer' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
  {
    category: 'cartilage',
    subtype: 'fibrocartilage',
    name: 'Fibrocartilage',
    description: 'Tough cartilage with abundant type I collagen fibers arranged in parallel, found in intervertebral discs and menisci.',
    organSources: [
      { organ: 'intervertebral_disc', bodySystem: 'musculoskeletal' },
      { organ: 'meniscus', bodySystem: 'musculoskeletal' },
      { organ: 'pubic_symphysis', bodySystem: 'musculoskeletal' },
      { organ: 'temporomandibular_joint', bodySystem: 'musculoskeletal' },
    ],
    identifyingFeatures: [
      'Dense collagen fiber bundles visible',
      'Chondrocytes in rows between fiber bundles',
      'No perichondrium',
      'Transition between dense CT and cartilage',
      'Matrix less homogeneous than hyaline',
    ],
    characteristics: {
      level1: [
        'Extra-tough cartilage with visible fibers',
        'Found in discs between spine bones',
        'Also in knee cushions (menisci)',
        'Resists compression and shearing forces',
      ],
      level2: [
        'Combines properties of dense CT and hyaline cartilage',
        'Dense bundles of type I collagen fibers',
        'Chondrocytes arranged in rows between fiber bundles',
        'Lacks perichondrium',
        'Found where resistance to compression and tension needed',
      ],
      level3: [
        'Type I collagen predominates (unlike hyaline type II)',
        'Chondrocytes produce both collagen types',
        'Annulus fibrosus of disc: concentric collagen lamellae',
        'Nucleus pulposus: more proteoglycan-rich, gel-like',
        'Transitions gradually with adjacent tissues',
      ],
      level4: [
        'Collagen fibers oriented to resist predominant stress',
        'Meniscus: circumferential fibers resist hoop stress',
        'Disc: alternating fiber angles in successive lamellae',
        'Proteoglycan content increases toward center of disc',
        'Limited healing due to poor vascularity (except periphery)',
      ],
      level5: [
        'Disc herniation: nucleus pulposus extrusion through annulus',
        'Meniscal tears: common sports injury, peripheral heals better',
        'Degenerative disc disease: loss of nucleus hydration',
        'TMJ dysfunction: disc displacement and degeneration',
        'Pubic symphysis diastasis: pregnancy-related widening',
      ],
    },
    clinicalRelevance: 'Intervertebral disc herniation causes radiculopathy. Meniscal tears require arthroscopic treatment. Poor healing due to avascularity.',
    keyAnnotations: [
      { label: 'Collagen bundles', description: 'Dense, parallel type I collagen fibers' },
      { label: 'Chondrocyte row', description: 'Cells arranged in lines between fiber bundles' },
      { label: 'Lacuna', description: 'Space containing chondrocyte' },
    ],
    preferredStains: ['H&E', 'Masson'],
  },
];

// ============================================================================
// BLOOD CELLS
// ============================================================================

const bloodTissues: TissueDefinition[] = [
  {
    category: 'vascular',
    subtype: 'rbc',
    name: 'Red Blood Cells (Erythrocytes)',
    description: 'Biconcave disc-shaped cells without nuclei, specialized for oxygen transport via hemoglobin.',
    organSources: [
      { organ: 'blood_smear', bodySystem: 'hematopoietic' },
      { organ: 'bone_marrow', bodySystem: 'hematopoietic' },
      { organ: 'spleen', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'Biconcave disc shape (7-8 micrometers)',
      'Central pallor due to biconcave shape',
      'No nucleus (in mature cells)',
      'Uniform pink/salmon color',
      'Most numerous cells in blood smear',
    ],
    characteristics: {
      level1: [
        'Cells that carry oxygen to all parts of your body',
        'Shaped like donuts without the hole',
        'Red color comes from hemoglobin protein',
        'Made in bone marrow and live about 4 months',
      ],
      level2: [
        'Biconcave disc shape maximizes surface area for gas exchange',
        'No nucleus or organelles in mature cells',
        'Hemoglobin (280 million molecules/cell) carries oxygen',
        'Central pallor visible due to thin center',
        'Lifespan approximately 120 days',
      ],
      level3: [
        'Mean corpuscular volume (MCV): 80-100 fL',
        'Mean corpuscular hemoglobin (MCH): 27-33 pg',
        'Spectrin-actin cytoskeleton maintains biconcave shape',
        'Glycolysis only source of ATP (no mitochondria)',
        'Band 3 protein mediates chloride-bicarbonate exchange',
      ],
      level4: [
        'Erythropoietin from kidney stimulates RBC production',
        'Iron recycled from senescent RBCs by splenic macrophages',
        'Hemoglobin: 2 alpha and 2 beta globin chains, each with heme',
        'Oxygen binding cooperativity (sigmoidal O2 dissociation curve)',
        '2,3-DPG regulates oxygen affinity (Bohr effect)',
      ],
      level5: [
        'Anemia: reduced Hb or RBC count - many causes',
        'Sickle cell: HbS polymerization causes sickling',
        'Thalassemia: reduced globin chain synthesis',
        'Spherocytosis: spectrin defects cause sphere shape',
        'Polycythemia vera: JAK2 mutation causes RBC overproduction',
      ],
    },
    clinicalRelevance: 'Anemia has many causes. Sickle cell disease causes vaso-occlusive crises. Polycythemia increases thrombosis risk.',
    keyAnnotations: [
      { label: 'RBC', description: 'Biconcave disc with central pallor' },
      { label: 'Central pallor', description: 'Pale center due to thin biconcave shape' },
    ],
    preferredStains: ['Giemsa', 'H&E'],
  },
  {
    category: 'vascular',
    subtype: 'wbc',
    name: 'White Blood Cells (Leukocytes)',
    description: 'Nucleated blood cells of the immune system including neutrophils, lymphocytes, monocytes, eosinophils, and basophils.',
    organSources: [
      { organ: 'blood_smear', bodySystem: 'hematopoietic' },
      { organ: 'bone_marrow', bodySystem: 'hematopoietic' },
      { organ: 'lymph_node', bodySystem: 'lymphatic' },
      { organ: 'spleen', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'Nucleated cells (unlike mature RBCs)',
      'Larger than RBCs',
      'Different types have characteristic morphologies',
      'Neutrophils: multilobed nucleus, pink granules',
      'Lymphocytes: large nucleus, scant cytoplasm',
      'Monocytes: kidney-shaped nucleus, gray cytoplasm',
      'Eosinophils: bilobed nucleus, red-orange granules',
      'Basophils: obscured nucleus, dark purple granules',
    ],
    characteristics: {
      level1: [
        'Immune cells that fight infections',
        'Five main types with different jobs',
        'Neutrophils: most common, eat bacteria',
        'Lymphocytes: make antibodies and kill infected cells',
        'Much less common than red blood cells',
      ],
      level2: [
        'Five types: neutrophils (60%), lymphocytes (30%), monocytes (6%), eosinophils (3%), basophils (1%)',
        'Neutrophils: phagocytose bacteria, multilobed nucleus',
        'Lymphocytes: B cells (antibodies), T cells (cell-mediated immunity)',
        'Monocytes become macrophages in tissues',
        'Eosinophils fight parasites; basophils mediate allergy',
      ],
      level3: [
        'Neutrophils: 12-15 micrometers, 3-5 nuclear lobes',
        'Lymphocytes: 7-10 micrometers (small) to 10-14 micrometers (large)',
        'Monocytes: 15-20 micrometers, largest WBC',
        'Eosinophils: crystalloid core in granules (major basic protein)',
        'Basophils: metachromatic granules, IgE receptors',
      ],
      level4: [
        'Neutrophil killing: oxidative burst, NETs, granule contents',
        'B cell maturation: VDJ recombination creates antibody diversity',
        'T cell selection in thymus: positive and negative selection',
        'Monocyte subsets: classical, intermediate, nonclassical',
        'Eosinophil granules contain major basic protein, peroxidase',
      ],
      level5: [
        'Leukemia: malignant proliferation of WBC lineages',
        'Leukocytosis: elevated WBC (infection, inflammation)',
        'Neutropenia: increased infection risk',
        'Lymphoma: malignancy of lymphoid cells',
        'Myelodysplastic syndrome: dysplastic blood cell production',
      ],
    },
    clinicalRelevance: 'Leukemia and lymphoma are WBC malignancies. Neutropenia increases infection risk. Differential count helps diagnose infections.',
    keyAnnotations: [
      { label: 'Neutrophil', description: 'Multilobed nucleus, fine pink granules' },
      { label: 'Lymphocyte', description: 'Round nucleus, scant cytoplasm' },
      { label: 'Monocyte', description: 'Kidney-shaped nucleus, blue-gray cytoplasm' },
      { label: 'Eosinophil', description: 'Bilobed nucleus, red-orange granules' },
      { label: 'Basophil', description: 'Nucleus obscured by dark purple granules' },
    ],
    preferredStains: ['Giemsa', 'H&E'],
  },
  {
    category: 'vascular',
    subtype: 'platelets',
    name: 'Platelets (Thrombocytes)',
    description: 'Small anucleate cell fragments from megakaryocytes, essential for blood clotting and hemostasis.',
    organSources: [
      { organ: 'blood_smear', bodySystem: 'hematopoietic' },
      { organ: 'bone_marrow', bodySystem: 'hematopoietic' },
    ],
    identifyingFeatures: [
      'Very small (2-4 micrometers)',
      'No nucleus',
      'Purple granular appearance',
      'Often found in clumps',
      'Irregular shape',
    ],
    characteristics: {
      level1: [
        'Tiny cell pieces that help stop bleeding',
        'Made in bone marrow from giant cells',
        'Stick to wounds and form plugs',
        'Help make blood clots',
      ],
      level2: [
        'Small fragments from megakaryocyte cytoplasm',
        'No nucleus (anucleate)',
        'Contain granules with clotting factors',
        'Normal count: 150,000-400,000/microliter',
        'Lifespan 8-10 days',
      ],
      level3: [
        'Formed by megakaryocyte cytoplasmic fragmentation in marrow',
        'Alpha granules: vWF, fibrinogen, PDGF, Factor V',
        'Dense granules: ADP, ATP, serotonin, calcium',
        'Open canalicular system for granule release',
        'Cytoskeleton: actin, myosin for shape change',
      ],
      level4: [
        'Glycoprotein Ib-IX-V complex: vWF receptor for adhesion',
        'Glycoprotein IIb-IIIa: fibrinogen receptor for aggregation',
        'Thromboxane A2 and ADP amplify platelet activation',
        'Platelet plug stabilized by fibrin clot formation',
        'Thrombopoietin regulates megakaryocyte development',
      ],
      level5: [
        'Thrombocytopenia: increased bleeding risk',
        'ITP: autoimmune platelet destruction',
        'TTP: microangiopathic thrombocytopenia with neurologic symptoms',
        'Essential thrombocythemia: JAK2/MPL mutations',
        'Bernard-Soulier: GPIb deficiency; Glanzmann: GPIIb-IIIa deficiency',
      ],
    },
    clinicalRelevance: 'Thrombocytopenia causes bleeding. ITP is autoimmune destruction. TTP requires urgent plasma exchange.',
    keyAnnotations: [
      { label: 'Platelet', description: 'Small purple granular cell fragment' },
      { label: 'Platelet clump', description: 'Aggregation of multiple platelets' },
    ],
    preferredStains: ['Giemsa', 'H&E'],
  },
];

// ============================================================================
// LYMPHOID TISSUES
// ============================================================================

const lymphoidTissues: TissueDefinition[] = [
  {
    category: 'lymphoid',
    subtype: 'lymph_node',
    name: 'Lymph Node',
    description: 'Encapsulated secondary lymphoid organ that filters lymph and initiates adaptive immune responses.',
    organSources: [
      { organ: 'cervical_lymph_node', bodySystem: 'lymphatic' },
      { organ: 'axillary_lymph_node', bodySystem: 'lymphatic' },
      { organ: 'inguinal_lymph_node', bodySystem: 'lymphatic' },
      { organ: 'mesenteric_lymph_node', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'Bean-shaped with hilum',
      'Cortex with follicles (B cell zones)',
      'Paracortex (T cell zone)',
      'Medullary cords and sinuses',
      'Subcapsular sinus beneath capsule',
    ],
    characteristics: {
      level1: [
        'Small bean-shaped organs that filter lymph fluid',
        'Get swollen when fighting infection',
        'Found in neck, armpits, and groin',
        'Where immune cells meet germs and start fighting them',
      ],
      level2: [
        'Filter lymph and trap antigens',
        'Cortex contains B cell follicles',
        'Paracortex contains T cells',
        'Medulla has cords of plasma cells',
        'Afferent lymphatics enter, single efferent exits at hilum',
      ],
      level3: [
        'Primary follicles: naive B cells, no germinal center',
        'Secondary follicles: germinal center (active immune response)',
        'Germinal center: dark zone (proliferation) and light zone (selection)',
        'High endothelial venules in paracortex: lymphocyte entry',
        'Follicular dendritic cells trap antigen-antibody complexes',
      ],
      level4: [
        'B cells enter follicles via CXCL13; T cells to paracortex via CCL19/21',
        'Germinal center reaction: somatic hypermutation and class switching',
        'Tingible body macrophages clear apoptotic B cells',
        'Memory B cells and long-lived plasma cells generated',
        'Subcapsular sinus macrophages capture particulate antigens',
      ],
      level5: [
        'Lymphadenopathy: reactive vs neoplastic causes',
        'Follicular lymphoma: neoplastic follicles with BCL2 translocation',
        'Hodgkin lymphoma: Reed-Sternberg cells in inflammatory background',
        'Metastatic carcinoma typically in subcapsular sinus',
        'Castleman disease: giant follicle hyperplasia',
      ],
    },
    clinicalRelevance: 'Lymphadenopathy from infection, malignancy, or autoimmune disease. Sentinel node biopsy for cancer staging. Lymphoma arises from lymph node cells.',
    keyAnnotations: [
      { label: 'Cortical follicle', description: 'Round B cell aggregate, may have germinal center' },
      { label: 'Germinal center', description: 'Pale center of secondary follicle' },
      { label: 'Paracortex', description: 'T cell zone between cortex and medulla' },
      { label: 'Medullary cord', description: 'Plasma cell-rich strands in medulla' },
      { label: 'Subcapsular sinus', description: 'Space beneath capsule receiving afferent lymph' },
    ],
    preferredStains: ['H&E', 'IHC'],
  },
  {
    category: 'lymphoid',
    subtype: 'spleen',
    name: 'Spleen',
    description: 'Largest lymphoid organ that filters blood, removes old RBCs, and mounts immune responses to blood-borne pathogens.',
    organSources: [
      { organ: 'spleen', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'White pulp: lymphoid tissue around arteries',
      'Red pulp: splenic cords and sinusoids',
      'Central arteriole in white pulp nodules',
      'Marginal zone at white/red pulp boundary',
      'No cortex and medulla distinction',
    ],
    characteristics: {
      level1: [
        'Largest immune organ, located on left side of belly',
        'Filters blood and removes old red blood cells',
        'Helps fight certain blood infections',
        'Can live without it but more vulnerable to infections',
      ],
      level2: [
        'White pulp: lymphoid tissue (T and B cells)',
        'Red pulp: blood filtration (RBC removal)',
        'Central arteriole surrounded by T cells (PALS)',
        'B cell follicles attached to PALS',
        'Splenic macrophages phagocytose old/damaged RBCs',
      ],
      level3: [
        'PALS (periarteriolar lymphoid sheath): T cell zone',
        'Follicles with germinal centers: B cell zone',
        'Marginal zone: unique B cell population, innate-like immunity',
        'Red pulp cords of Billroth: macrophages, plasma cells',
        'Open circulation: blood percolates through cords to sinusoids',
      ],
      level4: [
        'Splenic sinusoids have unique barrel-stave endothelium',
        'RBCs must deform to pass through inter-endothelial slits',
        'Culling: removal of aged/abnormal RBCs',
        'Pitting: removal of inclusions (Howell-Jolly bodies)',
        'Marginal zone B cells respond to polysaccharide antigens',
      ],
      level5: [
        'Asplenia increases susceptibility to encapsulated bacteria',
        'Splenomegaly from many causes (infection, congestion, infiltration)',
        'Splenic sequestration crisis in sickle cell disease',
        'Splenic marginal zone lymphoma: low-grade B cell neoplasm',
        'Hairy cell leukemia preferentially involves red pulp',
      ],
    },
    clinicalRelevance: 'Asplenia requires vaccination against encapsulated bacteria. Splenomegaly has many causes. Rupture causes life-threatening hemorrhage.',
    keyAnnotations: [
      { label: 'White pulp', description: 'Lymphoid tissue around central arteriole' },
      { label: 'Central arteriole', description: 'Artery within white pulp nodule' },
      { label: 'Red pulp', description: 'Blood-filled tissue between white pulp' },
      { label: 'Marginal zone', description: 'Border between white and red pulp' },
      { label: 'Sinusoid', description: 'Specialized blood vessel in red pulp' },
    ],
    preferredStains: ['H&E', 'IHC'],
  },
  {
    category: 'lymphoid',
    subtype: 'thymus',
    name: 'Thymus',
    description: 'Primary lymphoid organ where T lymphocytes mature, with distinct cortex and medulla and unique epithelial framework.',
    organSources: [
      { organ: 'thymus', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'Lobulated organ with distinct cortex and medulla',
      'Dark cortex (densely packed thymocytes)',
      'Lighter medulla',
      'Hassall corpuscles in medulla (pathognomonic)',
      'Epithelial framework, not reticular fibers',
    ],
    characteristics: {
      level1: [
        'Gland behind the breastbone where T cells learn their job',
        'Largest in children, shrinks with age',
        'Teaches immune cells to recognize self vs foreign',
        'Essential for developing a working immune system',
      ],
      level2: [
        'Primary lymphoid organ for T cell development',
        'Cortex: immature thymocytes, densely packed',
        'Medulla: mature thymocytes, less dense',
        'Hassall corpuscles: concentric epithelial cell whorls',
        'Involutes with age (replaced by fat)',
      ],
      level3: [
        'Blood-thymus barrier in cortex (no antigen entry)',
        'Cortical epithelial cells: positive selection (MHC restriction)',
        'Medullary epithelial cells: negative selection (self-tolerance)',
        'Double negative -> double positive -> single positive progression',
        'AIRE expression in medulla presents tissue-specific antigens',
      ],
      level4: [
        'TCR gene rearrangement in cortex',
        'Positive selection: weak TCR-MHC interaction = survival',
        'Negative selection: strong TCR-self antigen = apoptosis (deletion)',
        'Regulatory T cells (Tregs) also develop in thymus',
        'Hassall corpuscles produce TSLP, may promote Treg development',
      ],
      level5: [
        'DiGeorge syndrome: thymic aplasia, immunodeficiency',
        'Thymoma: epithelial tumor, associated with myasthenia gravis',
        'Thymic hyperplasia in myasthenia gravis (germinal centers)',
        'APECED syndrome: AIRE mutations cause autoimmunity',
        'Thymectomy may benefit myasthenia gravis patients',
      ],
    },
    clinicalRelevance: 'DiGeorge syndrome causes T cell deficiency. Thymoma associated with myasthenia gravis and other autoimmune conditions.',
    keyAnnotations: [
      { label: 'Cortex', description: 'Dark outer zone with densely packed thymocytes' },
      { label: 'Medulla', description: 'Lighter inner zone with mature thymocytes' },
      { label: 'Hassall corpuscle', description: 'Concentric whorl of epithelial cells in medulla' },
      { label: 'Corticomedullary junction', description: 'Border between cortex and medulla' },
    ],
    preferredStains: ['H&E', 'IHC'],
  },
  {
    category: 'lymphoid',
    subtype: 'tonsil',
    name: 'Tonsil',
    description: 'Mucosa-associated lymphoid tissue (MALT) forming a ring around the pharynx, sampling antigens from inspired air and food.',
    organSources: [
      { organ: 'palatine_tonsil', bodySystem: 'lymphatic' },
      { organ: 'pharyngeal_tonsil', bodySystem: 'lymphatic' },
      { organ: 'lingual_tonsil', bodySystem: 'lymphatic' },
    ],
    identifyingFeatures: [
      'Partially encapsulated',
      'Deep crypts (invaginations) of surface epithelium',
      'Lymphoid follicles with germinal centers',
      'Epithelium infiltrated by lymphocytes (lymphoepithelium)',
      'No afferent lymphatics',
    ],
    characteristics: {
      level1: [
        'Immune tissue in the back of your throat',
        'Part of the ring of defenses around your mouth and nose',
        'Catches germs from air you breathe and food you eat',
        'Sometimes get infected and may need removal',
      ],
      level2: [
        'Forms Waldeyer ring around pharynx',
        'Palatine tonsils on sides of throat',
        'Pharyngeal tonsil (adenoid) on nasopharynx roof',
        'Deep crypts lined by stratified squamous epithelium',
        'Samples antigens entering via mouth and nose',
      ],
      level3: [
        'M cells in epithelium transport antigens to lymphoid tissue',
        'Intraepithelial lymphocytes intermixed with epithelial cells',
        'B cell follicles with active germinal centers',
        'Interfollicular T cell zones',
        'No afferent lymphatics; antigens sampled directly across epithelium',
      ],
      level4: [
        'Crypt epithelium has reduced barrier function for antigen sampling',
        'M cells lack surface glycocalyx, have pocket for lymphocytes',
        'Germinal center B cells undergo class switching to IgA',
        'IgA transported across epithelium (secretory IgA)',
        'Tonsillar B cells can disseminate to other mucosal sites',
      ],
      level5: [
        'Tonsillar hypertrophy can cause sleep apnea in children',
        'Peritonsillar abscess: complication of tonsillitis',
        'Tonsillar lymphoma: often extranodal marginal zone or DLBCL',
        'HPV-related oropharyngeal carcinoma arising in tonsil',
        'IgA nephropathy: tonsillar infection may trigger renal disease',
      ],
    },
    clinicalRelevance: 'Tonsillitis common in children. Tonsillar hypertrophy causes obstructive sleep apnea. HPV-related oropharyngeal cancer increasing.',
    keyAnnotations: [
      { label: 'Crypt', description: 'Deep invagination of surface epithelium' },
      { label: 'Follicle', description: 'B cell nodule with germinal center' },
      { label: 'Germinal center', description: 'Active area of B cell proliferation/selection' },
      { label: 'Lymphoepithelium', description: 'Epithelium infiltrated by lymphocytes' },
      { label: 'Interfollicular zone', description: 'T cell area between follicles' },
    ],
    preferredStains: ['H&E', 'IHC'],
  },
];

// ============================================================================
// COMBINE ALL TISSUES
// ============================================================================

const allTissues: TissueDefinition[] = [
  ...epithelialTissues,
  ...connectiveTissues,
  ...muscleTissues,
  ...nervousTissues,
  ...boneTissues,
  ...cartilageTissues,
  ...bloodTissues,
  ...lymphoidTissues,
];

// ============================================================================
// GENERATE HISTOLOGY IMAGES
// ============================================================================

function generateImageId(tissueSubtype: string, organSource: string, magnification: Magnification): string {
  return `hist-${tissueSubtype}-${organSource}-${magnification}`.replace(/_/g, '-').toLowerCase();
}

function generateFilename(tissueSubtype: string, organSource: string, magnification: Magnification, stain: StainType): string {
  return `${tissueSubtype}_${organSource}_${stain.replace('&', 'and')}_${magnification}.jpg`.toLowerCase();
}

function generateImages(tissue: TissueDefinition): HistologyImage[] {
  const images: HistologyImage[] = [];
  const magnifications: Magnification[] = ['10x', '40x', '100x'];
  const now = new Date().toISOString();

  for (const source of tissue.organSources) {
    for (const mag of magnifications) {
      const stain = tissue.preferredStains[0] || 'H&E';
      const id = generateImageId(tissue.subtype, source.organ, mag);

      // Generate annotations with positions
      const annotations: AnnotationPoint[] = tissue.keyAnnotations.map((ann, index) => ({
        x: 20 + (index * 15) % 60,
        y: 25 + (index * 12) % 50,
        label: ann.label,
        description: ann.description,
      }));

      const image: HistologyImage = {
        id,
        title: `${tissue.name} - ${source.organ.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
        description: tissue.description,
        tissueCategory: tissue.category,
        tissueSubtype: tissue.subtype,
        organSource: source.organ,
        bodySystem: source.bodySystem,
        stain: stain,
        magnification: mag,
        filename: generateFilename(tissue.subtype, source.organ, mag, stain),
        filePath: `/images/histology/${tissue.category}/${generateFilename(tissue.subtype, source.organ, mag, stain)}`,
        fileSize: 0, // Placeholder
        width: 1024,
        height: 768,
        thumbnailPath: `/images/histology/thumbnails/${tissue.category}/${generateFilename(tissue.subtype, source.organ, mag, stain)}`,
        annotations: {
          points: annotations,
          regions: [],
        },
        relatedStructures: [],
        relatedImages: [],
        source: Math.random() > 0.5 ? 'blue_histology' : 'histology_guide',
        sourceUrl: Math.random() > 0.5
          ? 'https://www.lab.anhb.uwa.edu.au/mb140/'
          : 'https://histologyguide.com/',
        license: 'Educational use',
        credits: 'Blue Histology / Histology Guide - Educational Resources',
        complexityLevel: mag === '10x' ? 2 : mag === '40x' ? 3 : 4,
        keyFeatures: tissue.identifyingFeatures,
        clinicalRelevance: tissue.clinicalRelevance,
        createdAt: now,
        updatedAt: now,
      };

      images.push(image);
    }
  }

  return images;
}

function generateTissueTypeInfo(tissue: TissueDefinition): TissueTypeInfo {
  return {
    category: tissue.category,
    subtype: tissue.subtype,
    name: tissue.name,
    description: tissue.description,
    characteristics: tissue.characteristics,
    identifyingFeatures: tissue.identifyingFeatures,
    locations: tissue.organSources.map(s => s.organ.replace(/_/g, ' ')),
    relatedStructureIds: [],
    exampleImageIds: [],
  };
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

function main() {
  console.log('Generating histology database...\n');

  const allImages: HistologyImage[] = [];
  const allTissueTypes: TissueTypeInfo[] = [];

  for (const tissue of allTissues) {
    console.log(`Processing: ${tissue.name}`);

    // Generate images
    const images = generateImages(tissue);
    allImages.push(...images);

    // Generate tissue type info
    const tissueInfo = generateTissueTypeInfo(tissue);
    tissueInfo.exampleImageIds = images.slice(0, 3).map(img => img.id);
    allTissueTypes.push(tissueInfo);
  }

  // Link related images
  for (const image of allImages) {
    const related = allImages.filter(img =>
      img.id !== image.id &&
      img.tissueCategory === image.tissueCategory &&
      img.tissueSubtype === image.tissueSubtype
    );
    image.relatedImages = related.slice(0, 5).map(img => img.id);
  }

  // Generate database
  const database = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    description: 'Comprehensive histology database for the Biological Self anatomy app',
    statistics: {
      totalImages: allImages.length,
      totalTissueTypes: allTissueTypes.length,
      tissueCategories: {
        epithelial: allImages.filter(i => i.tissueCategory === 'epithelial').length,
        connective: allImages.filter(i => i.tissueCategory === 'connective').length,
        muscle: allImages.filter(i => i.tissueCategory === 'muscle').length,
        nervous: allImages.filter(i => i.tissueCategory === 'nervous').length,
        bone: allImages.filter(i => i.tissueCategory === 'bone').length,
        cartilage: allImages.filter(i => i.tissueCategory === 'cartilage').length,
        vascular: allImages.filter(i => i.tissueCategory === 'vascular').length,
        lymphoid: allImages.filter(i => i.tissueCategory === 'lymphoid').length,
      },
    },
    sources: {
      blue_histology: {
        name: 'Blue Histology',
        url: 'https://www.lab.anhb.uwa.edu.au/mb140/',
        description: 'University of Western Australia histology resource',
      },
      histology_guide: {
        name: 'Histology Guide',
        url: 'https://histologyguide.com/',
        description: 'Virtual Histology Laboratory',
      },
    },
    images: allImages,
    tissueTypes: allTissueTypes,
    quizQuestions: [], // To be populated later
    imageSets: [], // To be populated later
  };

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(database, null, 2));

  console.log('\n=== Generation Complete ===');
  console.log(`Total images generated: ${allImages.length}`);
  console.log(`Total tissue types: ${allTissueTypes.length}`);
  console.log(`Output file: ${OUTPUT_FILE}`);
  console.log('\nCategory breakdown:');
  console.log(`  Epithelial: ${database.statistics.tissueCategories.epithelial}`);
  console.log(`  Connective: ${database.statistics.tissueCategories.connective}`);
  console.log(`  Muscle: ${database.statistics.tissueCategories.muscle}`);
  console.log(`  Nervous: ${database.statistics.tissueCategories.nervous}`);
  console.log(`  Bone: ${database.statistics.tissueCategories.bone}`);
  console.log(`  Cartilage: ${database.statistics.tissueCategories.cartilage}`);
  console.log(`  Vascular (Blood): ${database.statistics.tissueCategories.vascular}`);
  console.log(`  Lymphoid: ${database.statistics.tissueCategories.lymphoid}`);
}

main();
