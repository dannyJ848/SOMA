/**
 * Image Registry
 * 
 * Central registry for all pathology, anatomy, and histology images
 * extracted from educational sources.
 */

export type ImageCategory = 'pathology' | 'anatomy' | 'histology';
export type LicenseType = 'cc-by' | 'cc-by-sa' | 'cc-by-nc' | 'public-domain' | 'unknown';
export type BodyRegion = 
  | 'head' | 'neck' | 'chest' | 'abdomen' | 'pelvis' | 'back'
  | 'arm' | 'forearm' | 'hand' | 'shoulder' | 'elbow' | 'wrist'
  | 'thigh' | 'leg' | 'foot' | 'hip' | 'knee' | 'ankle'
  | 'general' | 'multiple';

export type BodySystem = 
  | 'cardiovascular' | 'respiratory' | 'digestive' | 'urinary' 
  | 'nervous' | 'endocrine' | 'reproductive' | 'musculoskeletal'
  | 'lymphatic' | 'integumentary' | 'hematologic' | 'general';

export interface ImageMetadata {
  id: string;
  filename: string;
  path: string;
  category: ImageCategory;
  subcategory: string;
  title: string;
  description?: string;
  source: string;
  sourceUrl: string;
  license: LicenseType;
  licenseFull: string;
  attribution: string;
  author?: string;
  tags: string[];
  bodyRegions: BodyRegion[];
  bodySystems: BodySystem[];
  conditions?: string[];
  width?: number;
  height?: number;
  fileSize?: number;
  extractedAt: string;
}

export interface ImageFilter {
  category?: ImageCategory;
  bodyRegion?: BodyRegion;
  bodySystem?: BodySystem;
  license?: LicenseType;
  searchQuery?: string;
}

// ============================================================================
// IMAGE DATA
// ============================================================================

// Auto-generated from extracted images
// Format: images/[category]/[subcategory]/[filename]

const RAW_IMAGE_ENTRIES: Partial<ImageMetadata>[] = [
  // ==========================================================================
  // ANATOMY IMAGES - Wikimedia Commons
  // ==========================================================================
  
  // General Anatomy
  { filename: 'wiki_6-5-3-1 B-Scan.jpg', category: 'anatomy', subcategory: 'general', title: 'Ultrasound B-Scan Diagram', source: 'Wikimedia Commons', license: 'cc-by-sa', licenseFull: 'CC BY-SA 4.0', author: 'Educate-UK' },
  { filename: 'wiki_Anatomy lecture ticket 1860.jpg', category: 'anatomy', subcategory: 'general', title: 'Anatomy Lecture Ticket 1860', source: 'Wikimedia Commons', license: 'cc-by-sa', licenseFull: 'CC BY-SA 4.0', author: 'Mikepascoe' },
  { filename: 'wiki_Anato Hayes (NBY 417341).jpg', category: 'anatomy', subcategory: 'general', title: 'Anato Hayes', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'Unknown' },
  { filename: 'Human_Anatomy.png', category: 'anatomy', subcategory: 'general', title: 'Human Anatomy Overview', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain' },
  { filename: 'Biology_anatomy_stomach_with_9_abdominal_region_and_pectoral_triangle.jpg', category: 'anatomy', subcategory: 'general', title: 'Abdominal Regions', source: 'Wikimedia Commons', license: 'cc-by-sa', licenseFull: 'CC BY-SA 4.0', bodyRegions: ['abdomen'] },
  { filename: 'Eye_model.png', category: 'anatomy', subcategory: 'general', title: 'Eye Model', source: 'Wikimedia Commons', license: 'cc-by-sa', licenseFull: 'CC BY-SA 4.0', bodySystems: ['nervous'], bodyRegions: ['head'] },

  // Lymphatic System
  { filename: 'Illu_quiz_hn_03.jpg', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymphatic System Quiz', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'Arcadian', bodySystems: ['lymphatic'] },
  { filename: 'Die_Frau_als_Haus_rztin_1911_060_Saugadern_des_Beines_Lymphgef_e_.png', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymphatic Vessels of the Leg (1911)', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'Anna Fischer-Dückelmann', bodySystems: ['lymphatic'], bodyRegions: ['leg'] },
  { filename: 'Sistemacirculatoriolinfatico.jpg', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymphatic Circulatory System', source: 'Wikimedia Commons', license: 'cc-by-sa', licenseFull: 'CC BY-SA 4.0', author: 'Posible2006', bodySystems: ['lymphatic'] },
  { filename: 'Illu_lymph_chain01.jpg', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymph Chain 1', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'Arcadian', bodySystems: ['lymphatic'] },
  { filename: 'Illu_lymph_chain02.jpg', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymph Chain 2', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'Arcadian', bodySystems: ['lymphatic'] },
  { filename: 'Illu_lymph_chain03.jpg', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymph Chain 3 - Upper Torso', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'National Cancer Institute', bodySystems: ['lymphatic'], bodyRegions: ['chest', 'arm'] },
  { filename: 'Lymphatic_system.png', category: 'anatomy', subcategory: 'lymphatic', title: 'Lymphatic System Overview', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', author: 'NIH', bodySystems: ['lymphatic'] },

  // Cardiovascular
  { filename: 'Heart_diagram-en.svg.png', category: 'anatomy', subcategory: 'cardiovascular', title: 'Heart Diagram', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['cardiovascular'], bodyRegions: ['chest'] },
  { filename: 'Circulatory_System_en.svg', category: 'anatomy', subcategory: 'cardiovascular', title: 'Circulatory System', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['cardiovascular'] },

  // Nervous System
  { filename: 'Brain_human_normal_inferior_view.svg.png', category: 'anatomy', subcategory: 'nervous', title: 'Brain - Inferior View', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['nervous'], bodyRegions: ['head'] },
  { filename: 'Gray722.png', category: 'anatomy', subcategory: 'nervous', title: 'Spinal Nerves', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['nervous'] },
  { filename: 'Gray767.png', category: 'anatomy', subcategory: 'nervous', title: 'Sympathetic Nervous System', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['nervous'] },
  { filename: 'Gray770.png', category: 'anatomy', subcategory: 'nervous', title: 'Cervical Nerves', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['nervous'], bodyRegions: ['neck'] },

  // Skeletal
  { filename: 'Human_skeleton_front.svg.png', category: 'anatomy', subcategory: 'skeletal', title: 'Human Skeleton - Front View', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'] },
  { filename: 'Human_skeleton_back.svg.png', category: 'anatomy', subcategory: 'skeletal', title: 'Human Skeleton - Back View', source: 'Wikimedia Commons', license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'] },
  { filename: 'Gray207.png', category: 'anatomy', subcategory: 'skeletal', title: 'Vertebra - Superior View', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'] },
  { filename: 'Gray208.png', category: 'anatomy', subcategory: 'skeletal', title: 'Vertebra - Lateral View', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'] },

  // Muscular
  { filename: 'Gray388.png', category: 'anatomy', subcategory: 'muscular', title: 'Muscles of the Arm', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'], bodyRegions: ['arm'] },
  { filename: 'Gray393.png', category: 'anatomy', subcategory: 'muscular', title: 'Muscles of the Forearm', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'], bodyRegions: ['forearm'] },
  { filename: 'Gray410.png', category: 'anatomy', subcategory: 'muscular', title: 'Muscles of the Thigh', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'], bodyRegions: ['thigh'] },
  { filename: 'Gray414.png', category: 'anatomy', subcategory: 'muscular', title: 'Muscles of the Lower Leg', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['musculoskeletal'], bodyRegions: ['leg'] },

  // Respiratory
  { filename: 'Gray955.png', category: 'anatomy', subcategory: 'respiratory', title: 'Respiratory System', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['respiratory'], bodyRegions: ['chest'] },
  { filename: 'Gray961.png', category: 'anatomy', subcategory: 'respiratory', title: 'Lungs - Cross Section', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['respiratory'], bodyRegions: ['chest'] },

  // Digestive
  { filename: 'Gray1033.png', category: 'anatomy', subcategory: 'digestive', title: 'Digestive System', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['digestive'], bodyRegions: ['abdomen'] },
  { filename: 'Gray1045.png', category: 'anatomy', subcategory: 'digestive', title: 'Stomach Anatomy', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['digestive'], bodyRegions: ['abdomen'] },

  // Urinary
  { filename: 'Gray1127.png', category: 'anatomy', subcategory: 'urinary', title: 'Urinary System', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['urinary'], bodyRegions: ['abdomen', 'pelvis'] },
  { filename: 'Gray1131.png', category: 'anatomy', subcategory: 'urinary', title: 'Kidney Anatomy', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['urinary'], bodyRegions: ['abdomen'] },

  // Endocrine
  { filename: 'Gray1177.png', category: 'anatomy', subcategory: 'endocrine', title: 'Thyroid Gland', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['endocrine'], bodyRegions: ['neck'] },
  { filename: 'Gray1181.png', category: 'anatomy', subcategory: 'endocrine', title: 'Endocrine Glands', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['endocrine'] },

  // Reproductive
  { filename: 'Gray1163.png', category: 'anatomy', subcategory: 'reproductive', title: 'Male Reproductive System', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['reproductive'], bodyRegions: ['pelvis'] },
  { filename: 'Gray1167.png', category: 'anatomy', subcategory: 'reproductive', title: 'Female Reproductive System', source: "Gray's Anatomy", license: 'public-domain', licenseFull: 'Public Domain', bodySystems: ['reproductive'], bodyRegions: ['pelvis'] },

  // ==========================================================================
  // HISTOLOGY IMAGES
  // ==========================================================================
  
  // Epithelial Tissue
  { filename: 'stratified_squamous_nonkeratinized.jpg', category: 'histology', subcategory: 'epithelial', title: 'Stratified Squamous Non-keratinized', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['integumentary', 'digestive'], tags: ['epithelium', 'oral cavity', 'esophagus'] },
  { filename: 'simple_cuboidal_kidney.jpg', category: 'histology', subcategory: 'epithelial', title: 'Simple Cuboidal Epithelium - Kidney', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['urinary'], tags: ['kidney', 'tubules'] },
  { filename: 'simple_columnar_intestine.jpg', category: 'histology', subcategory: 'epithelial', title: 'Simple Columnar Epithelium - Intestine', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['digestive'], tags: ['intestine', 'villi'] },
  { filename: 'pseudostratified_ciliated.jpg', category: 'histology', subcategory: 'epithelial', title: 'Pseudostratified Ciliated Epithelium', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['respiratory'], bodyRegions: ['chest'], tags: ['trachea', 'cilia'] },
  { filename: 'transitional_epithelium.jpg', category: 'histology', subcategory: 'epithelial', title: 'Transitional Epithelium', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['urinary'], tags: ['bladder', 'ureter'] },

  // Connective Tissue
  { filename: 'loose_areolar_connective.jpg', category: 'histology', subcategory: 'connective', title: 'Loose Areolar Connective Tissue', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', tags: ['connective tissue'] },
  { filename: 'dense_regular_connective.jpg', category: 'histology', subcategory: 'connective', title: 'Dense Regular Connective Tissue', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['musculoskeletal'], tags: ['tendon', 'ligament'] },
  { filename: 'adipose_tissue.jpg', category: 'histology', subcategory: 'connective', title: 'Adipose Tissue', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', tags: ['fat', 'lipid'] },
  { filename: 'hyaline_cartilage.jpg', category: 'histology', subcategory: 'connective', title: 'Hyaline Cartilage', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['musculoskeletal'], tags: ['cartilage', 'joint'] },
  { filename: 'compact_bone.jpg', category: 'histology', subcategory: 'connective', title: 'Compact Bone', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['musculoskeletal'], tags: ['bone', 'osteons'] },
  { filename: 'blood_smear.jpg', category: 'histology', subcategory: 'connective', title: 'Blood Smear', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['hematologic'], tags: ['blood', 'cells', 'hematology'] },

  // Muscle Tissue
  { filename: 'skeletal_muscle.jpg', category: 'histology', subcategory: 'muscle', title: 'Skeletal Muscle', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['musculoskeletal'], tags: ['striated', 'voluntary'] },
  { filename: 'cardiac_muscle.jpg', category: 'histology', subcategory: 'muscle', title: 'Cardiac Muscle', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['cardiovascular'], bodyRegions: ['chest'], tags: ['heart', 'striated', 'intercalated discs'] },
  { filename: 'smooth_muscle.jpg', category: 'histology', subcategory: 'muscle', title: 'Smooth Muscle', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', tags: ['visceral', 'involuntary'] },

  // Nervous Tissue
  { filename: 'neuron_multipolar.jpg', category: 'histology', subcategory: 'nervous', title: 'Multipolar Neuron', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['nervous'], tags: ['neuron', 'nerve cell'] },
  { filename: 'cerebral_cortex.jpg', category: 'histology', subcategory: 'nervous', title: 'Cerebral Cortex', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['nervous'], bodyRegions: ['head'], tags: ['brain', 'gray matter'] },
  { filename: 'cerebellum.jpg', category: 'histology', subcategory: 'nervous', title: 'Cerebellum', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['nervous'], bodyRegions: ['head'], tags: ['brain', 'purkinje cells'] },
  { filename: 'peripheral_nerve.jpg', category: 'histology', subcategory: 'nervous', title: 'Peripheral Nerve', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['nervous'], tags: ['myelin', 'axons'] },

  // Organ Systems
  { filename: 'skin_cross_section.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Skin Cross Section', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['integumentary'], tags: ['epidermis', 'dermis'] },
  { filename: 'lymph_node.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Lymph Node', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['lymphatic'], tags: ['lymphoid', 'follicles'] },
  { filename: 'spleen.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Spleen', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['lymphatic', 'hematologic'], bodyRegions: ['abdomen'], tags: ['white pulp', 'red pulp'] },
  { filename: 'thymus.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Thymus', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['lymphatic'], bodyRegions: ['chest'], tags: ['hassall corpuscles'] },
  { filename: 'tonsil.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Tonsil', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['lymphatic'], bodyRegions: ['head'], tags: ['lymphoid', 'crypts'] },
  { filename: 'liver_lobule.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Liver Lobule', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['digestive'], bodyRegions: ['abdomen'], tags: ['hepatocytes', 'central vein'] },
  { filename: 'trachea_cross_section.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Trachea Cross Section', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['respiratory'], bodyRegions: ['chest'], tags: ['hyaline cartilage', 'pseudostratified'] },
  { filename: 'lung_alveoli.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Lung Alveoli', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['respiratory'], bodyRegions: ['chest'], tags: ['alveoli', 'gas exchange'] },
  { filename: 'kidney_cortex.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Kidney Cortex', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['urinary'], bodyRegions: ['abdomen'], tags: ['glomeruli', 'tubules'] },
  { filename: 'pancreas_islets.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Pancreas with Islets of Langerhans', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['digestive', 'endocrine'], bodyRegions: ['abdomen'], tags: ['islets', 'acini'] },
  { filename: 'thyroid_follicles.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Thyroid Follicles', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['endocrine'], bodyRegions: ['neck'], tags: ['follicular cells', 'colloid'] },
  { filename: 'adrenal_gland.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Adrenal Gland', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], tags: ['cortex', 'medulla'] },
  { filename: 'pituitary_gland.jpg', category: 'histology', subcategory: 'organ-systems', title: 'Pituitary Gland', source: 'Histology-World', license: 'cc-by-nc', licenseFull: 'CC BY-NC', bodySystems: ['endocrine'], bodyRegions: ['head'], tags: ['adenohypophysis', 'neurohypophysis'] },

  // ==========================================================================
  // PATHOLOGY IMAGES - WebPath & PathologyOutlines
  // ==========================================================================
  
  // Cardiovascular Pathology
  { filename: 'myocardial_infarction.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Myocardial Infarction', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], bodyRegions: ['chest'], conditions: ['myocardial infarction', 'heart attack'] },
  { filename: 'atherosclerosis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Atherosclerosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['atherosclerosis', 'arterial plaque'] },
  { filename: 'hyaline_arteriolosclerosis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Hyaline Arteriolosclerosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['hypertension', 'diabetes'] },
  { filename: 'hyperplastic_arteriolosclerosis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Hyperplastic Arteriolosclerosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['malignant hypertension'] },
  { filename: 'calcific_aortic_stenosis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Calcific Aortic Stenosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['aortic stenosis', 'valve disease'] },
  { filename: 'mitral_stenosis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Mitral Stenosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['mitral stenosis', 'rheumatic heart disease'] },
  { filename: 'bacterial_endocarditis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Bacterial Endocarditis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['endocarditis', 'infective endocarditis'] },
  { filename: 'myocarditis.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Myocarditis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['myocarditis', 'viral infection'] },
  { filename: 'dilated_cardiomyopathy.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Dilated Cardiomyopathy', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['dilated cardiomyopathy', 'heart failure'] },
  { filename: 'hypertrophic_cardiomyopathy.jpg', category: 'pathology', subcategory: 'cardiovascular', title: 'Hypertrophic Cardiomyopathy', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['cardiovascular'], conditions: ['hypertrophic cardiomyopathy', 'HCM'] },

  // Respiratory Pathology
  { filename: 'emphysema.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Emphysema', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['emphysema', 'COPD'] },
  { filename: 'chronic_bronchitis.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Chronic Bronchitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['chronic bronchitis', 'COPD'] },
  { filename: 'bronchiectasis.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Bronchiectasis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['bronchiectasis'] },
  { filename: 'pneumonia_lobar.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Lobar Pneumonia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['pneumonia', 'lobar pneumonia'] },
  { filename: 'pneumonia_bronchopneumonia.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Bronchopneumonia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['pneumonia', 'bronchopneumonia'] },
  { filename: 'lung_abscess.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Lung Abscess', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['lung abscess'] },
  { filename: 'pulmonary_embolism.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Pulmonary Embolism', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory', 'cardiovascular'], bodyRegions: ['chest'], conditions: ['pulmonary embolism', 'PE'] },
  { filename: 'lung_cancer_squamous.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Squamous Cell Lung Cancer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['lung cancer', 'squamous cell carcinoma'] },
  { filename: 'lung_cancer_adenocarcinoma.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Lung Adenocarcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['lung cancer', 'adenocarcinoma'] },
  { filename: 'mesothelioma.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Mesothelioma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['mesothelioma', 'asbestos'] },
  { filename: 'sarcoidosis.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Sarcoidosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['sarcoidosis'] },
  { filename: 'pulmonary_edema.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Pulmonary Edema', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['pulmonary edema', 'heart failure'] },
  { filename: 'ards.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Acute Respiratory Distress Syndrome (ARDS)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['ARDS', 'respiratory failure'] },
  { filename: 'pulmonary_fibrosis.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Pulmonary Fibrosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['pulmonary fibrosis', 'interstitial lung disease'] },
  { filename: 'pneumocystis_pneumonia.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Pneumocystis Pneumonia (PCP)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['PCP', 'opportunistic infection', 'HIV'] },
  { filename: 'tuberculosis.jpg', category: 'pathology', subcategory: 'respiratory', title: 'Tuberculosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['respiratory'], bodyRegions: ['chest'], conditions: ['tuberculosis', 'TB'] },

  // Gastrointestinal Pathology
  { filename: 'esophageal_varices.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Esophageal Varices', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['chest', 'abdomen'], conditions: ['esophageal varices', 'cirrhosis', 'portal hypertension'] },
  { filename: 'barrett_esophagus.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: "Barrett's Esophagus", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['chest'], conditions: ['Barrett esophagus', 'GERD', 'metaplasia'] },
  { filename: 'esophageal_adenocarcinoma.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Esophageal Adenocarcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['chest'], conditions: ['esophageal cancer', 'adenocarcinoma'] },
  { filename: 'gastric_ulcer.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Gastric Ulcer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['gastric ulcer', 'peptic ulcer disease', 'H. pylori'] },
  { filename: 'duodenal_ulcer.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Duodenal Ulcer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['duodenal ulcer', 'peptic ulcer disease'] },
  { filename: 'gastritis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Gastritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['gastritis', 'H. pylori'] },
  { filename: 'gastric_cancer.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Gastric Cancer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['gastric cancer', 'stomach cancer'] },
  { filename: 'celiac_disease.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Celiac Disease', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['celiac disease', 'gluten sensitivity'] },
  { filename: 'crohn_disease.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: "Crohn's Disease", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ["Crohn disease", 'IBD'] },
  { filename: 'ulcerative_colitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Ulcerative Colitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['ulcerative colitis', 'IBD'] },
  { filename: 'appendicitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Appendicitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['appendicitis'] },
  { filename: 'diverticulitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Diverticulitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['diverticulitis', 'diverticulosis'] },
  { filename: 'colorectal_cancer.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Colorectal Cancer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen', 'pelvis'], conditions: ['colorectal cancer', 'colon cancer'] },
  { filename: 'pseudomembranous_colitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Pseudomembranous Colitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['C. diff colitis', 'antibiotic-associated diarrhea'] },
  { filename: 'ischemic_colitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Ischemic Colitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['ischemic colitis', 'mesenteric ischemia'] },

  // Hepatobiliary Pathology
  { filename: 'fatty_liver.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Fatty Liver Disease (NAFLD)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['fatty liver', 'NAFLD', 'NASH'] },
  { filename: 'alcoholic_hepatitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Alcoholic Hepatitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['alcoholic hepatitis', 'alcoholic liver disease'] },
  { filename: 'cirrhosis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Cirrhosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['cirrhosis', 'liver fibrosis'] },
  { filename: 'hemochromatosis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Hemochromatosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['hemochromatosis', 'iron overload'] },
  { filename: 'wilson_disease.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Wilson Disease', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['Wilson disease', 'copper overload'] },
  { filename: 'hepatitis_b.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Hepatitis B', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['hepatitis B', 'viral hepatitis'] },
  { filename: 'hepatitis_c.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Hepatitis C', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['hepatitis C', 'viral hepatitis'] },
  { filename: 'hepatocellular_carcinoma.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Hepatocellular Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['hepatocellular carcinoma', 'liver cancer'] },
  { filename: 'cholelithiasis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Cholelithiasis (Gallstones)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['gallstones', 'cholelithiasis'] },
  { filename: 'cholecystitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Cholecystitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['cholecystitis', 'gallbladder inflammation'] },
  { filename: 'cholangiocarcinoma.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Cholangiocarcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['cholangiocarcinoma', 'bile duct cancer'] },
  { filename: 'primary_sclerosing_cholangitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Primary Sclerosing Cholangitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['primary sclerosing cholangitis', 'PSC'] },
  { filename: 'primary_biliary_cholangitis.jpg', category: 'pathology', subcategory: 'gastrointestinal', title: 'Primary Biliary Cholangitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['digestive'], bodyRegions: ['abdomen'], conditions: ['primary biliary cholangitis', 'PBC'] },

  // Renal/Genitourinary Pathology
  { filename: 'acute_glomerulonephritis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Acute Glomerulonephritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['glomerulonephritis', 'post-streptococcal GN'] },
  { filename: 'rapidly_progressive_gn.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Rapidly Progressive Glomerulonephritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['RPGN', 'crescentic GN'] },
  { filename: 'nephrotic_syndrome_minimal_change.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Minimal Change Disease', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['minimal change disease', 'nephrotic syndrome'] },
  { filename: 'nephrotic_syndrome_fsgs.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Focal Segmental Glomerulosclerosis (FSGS)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['FSGS', 'nephrotic syndrome'] },
  { filename: 'nephrotic_syndrome_membranous.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Membranous Nephropathy', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['membranous nephropathy', 'nephrotic syndrome'] },
  { filename: 'diabetic_nephropathy.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Diabetic Nephropathy', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary', 'endocrine'], bodyRegions: ['abdomen'], conditions: ['diabetic nephropathy', 'diabetic kidney disease'] },
  { filename: 'hypertensive_nephrosclerosis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Hypertensive Nephrosclerosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary', 'cardiovascular'], bodyRegions: ['abdomen'], conditions: ['hypertensive nephrosclerosis'] },
  { filename: 'renal_cell_carcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Renal Cell Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['renal cell carcinoma', 'kidney cancer'] },
  { filename: 'transitional_cell_carcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Transitional Cell Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['pelvis'], conditions: ['urothelial carcinoma', 'bladder cancer'] },
  { filename: 'acute_pyelonephritis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Acute Pyelonephritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['pyelonephritis', 'kidney infection', 'UTI'] },
  { filename: 'chronic_pyelonephritis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Chronic Pyelonephritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['chronic pyelonephritis', 'reflux nephropathy'] },
  { filename: 'renal_papillary_necrosis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Renal Papillary Necrosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['renal papillary necrosis', 'analgesic nephropathy'] },
  { filename: 'polycystic_kidney.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Polycystic Kidney Disease', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['autosomal dominant PKD', 'ADPKD'] },
  { filename: 'acute_tubular_necrosis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Acute Tubular Necrosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['acute tubular necrosis', 'ATN', 'AKI'] },
  { filename: 'nephrolithiasis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Nephrolithiasis (Kidney Stones)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['kidney stones', 'nephrolithiasis', 'urolithiasis'] },
  { filename: 'hydronephrosis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Hydronephrosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['abdomen'], conditions: ['hydronephrosis', 'urinary obstruction'] },
  { filename: 'cystitis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Cystitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['urinary'], bodyRegions: ['pelvis'], conditions: ['cystitis', 'UTI', 'bladder infection'] },

  // Reproductive Pathology (Male)
  { filename: 'prostate_adenocarcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Prostate Adenocarcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['prostate cancer', 'prostatic adenocarcinoma'] },
  { filename: 'prostatic_hyperplasia.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Benign Prostatic Hyperplasia (BPH)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['BPH', 'enlarged prostate'] },
  { filename: 'prostatitis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Prostatitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['prostatitis'] },
  { filename: 'testicular_seminoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Testicular Seminoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['testicular cancer', 'seminoma'] },
  { filename: 'testicular_nonseminoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Testicular Non-seminoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['testicular cancer', 'embryonal carcinoma', 'teratoma', 'yolk sac'] },
  { filename: 'testicular_torsion.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Testicular Torsion', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['testicular torsion'] },
  { filename: 'epididymitis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Epididymitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['epididymitis'] },
  { filename: 'cryptorchidism.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Cryptorchidism (Undescended Testis)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['cryptorchidism', 'undescended testicle'] },

  // Reproductive Pathology (Female)
  { filename: 'endometriosis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Endometriosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis', 'abdomen'], conditions: ['endometriosis'] },
  { filename: 'leiomyoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Uterine Leiomyoma (Fibroids)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['uterine fibroids', 'leiomyoma'] },
  { filename: 'endometrial_hyperplasia.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Endometrial Hyperplasia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['endometrial hyperplasia'] },
  { filename: 'endometrial_carcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Endometrial Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['endometrial cancer', 'uterine cancer'] },
  { filename: 'cervical_cancer.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Cervical Cancer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['cervical cancer', 'HPV', 'squamous cell carcinoma'] },
  { filename: 'cervical_dysplasia.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Cervical Dysplasia (CIN)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['cervical dysplasia', 'CIN', 'SIL'] },
  { filename: 'ovarian_cyst.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Ovarian Cyst', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['ovarian cyst'] },
  { filename: 'polycystic_ovary.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Polycystic Ovary Syndrome (PCOS)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive', 'endocrine'], bodyRegions: ['pelvis'], conditions: ['PCOS', 'polycystic ovary'] },
  { filename: 'ovarian_serous_cystadenoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Ovarian Serous Cystadenoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['ovarian serous cystadenoma'] },
  { filename: 'ovarian_mucinous_cystadenoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Ovarian Mucinous Cystadenoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['ovarian mucinous cystadenoma'] },
  { filename: 'ovarian_serous_cystadenocarcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Ovarian Serous Cystadenocarcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['pelvis'], conditions: ['ovarian cancer', 'high-grade serous carcinoma'] },
  { filename: 'breast_fibroadenoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Breast Fibroadenoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['fibroadenoma', 'breast lump'] },
  { filename: 'breast_cyst.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Breast Cyst', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['breast cyst', 'fibrocystic changes'] },
  { filename: 'fibrocystic_changes.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Fibrocystic Breast Changes', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['fibrocystic breast disease'] },
  { filename: 'ductal_carcinoma_in_situ.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Ductal Carcinoma In Situ (DCIS)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['DCIS', 'breast cancer'] },
  { filename: 'invasive_ductal_carcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Invasive Ductal Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['invasive ductal carcinoma', 'breast cancer'] },
  { filename: 'invasive_lobular_carcinoma.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Invasive Lobular Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['invasive lobular carcinoma', 'breast cancer'] },
  { filename: 'paget_disease_breast.jpg', category: 'pathology', subcategory: 'genitourinary', title: "Paget Disease of the Breast", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ["Paget disease", 'breast cancer'] },
  { filename: 'inflammatory_breast_cancer.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Inflammatory Breast Cancer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['inflammatory breast cancer'] },
  { filename: 'phylloides_tumor.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Phyllodes Tumor', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['phyllodes tumor'] },
  { filename: 'mastitis.jpg', category: 'pathology', subcategory: 'genitourinary', title: 'Mastitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['reproductive'], bodyRegions: ['chest'], conditions: ['mastitis', 'breast infection'] },

  // Hematologic Pathology
  { filename: 'iron_deficiency_anemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Iron Deficiency Anemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['iron deficiency anemia', 'microcytic anemia'] },
  { filename: 'megaloblastic_anemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Megaloblastic Anemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['megaloblastic anemia', 'B12 deficiency', 'folate deficiency'] },
  { filename: 'pernicious_anemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Pernicious Anemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['pernicious anemia', 'B12 deficiency'] },
  { filename: 'sickle_cell_anemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Sickle Cell Anemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['sickle cell disease', 'sickle cell anemia'] },
  { filename: 'thalassemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Thalassemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['thalassemia', 'alpha thalassemia', 'beta thalassemia'] },
  { filename: 'hereditary_spherocytosis.jpg', category: 'pathology', subcategory: 'hematology', title: 'Hereditary Spherocytosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['hereditary spherocytosis'] },
  { filename: 'glucose_6_phosphate_dehydrogenase_deficiency.jpg', category: 'pathology', subcategory: 'hematology', title: 'G6PD Deficiency', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['G6PD deficiency'] },
  { filename: 'autoimmune_hemolytic_anemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Autoimmune Hemolytic Anemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['autoimmune hemolytic anemia', 'Coombs positive'] },
  { filename: 'aplastic_anemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Aplastic Anemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['aplastic anemia', 'bone marrow failure'] },
  { filename: 'polycythemia_vera.jpg', category: 'pathology', subcategory: 'hematology', title: 'Polycythemia Vera', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['polycythemia vera', 'myeloproliferative neoplasm'] },
  { filename: 'essential_thrombocythemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Essential Thrombocythemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['essential thrombocythemia', 'myeloproliferative neoplasm'] },
  { filename: 'acute_myeloid_leukemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Acute Myeloid Leukemia (AML)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['AML', 'acute myeloid leukemia'] },
  { filename: 'acute_lymphoblastic_leukemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Acute Lymphoblastic Leukemia (ALL)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['ALL', 'acute lymphoblastic leukemia'] },
  { filename: 'chronic_myeloid_leukemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Chronic Myeloid Leukemia (CML)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['CML', 'chronic myeloid leukemia'] },
  { filename: 'chronic_lymphocytic_leukemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Chronic Lymphocytic Leukemia (CLL)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['CLL', 'chronic lymphocytic leukemia'] },
  { filename: 'hodgkin_lymphoma.jpg', category: 'pathology', subcategory: 'hematology', title: 'Hodgkin Lymphoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic', 'lymphatic'], conditions: ['Hodgkin lymphoma', 'Reed-Sternberg'] },
  { filename: 'non_hodgkin_lymphoma.jpg', category: 'pathology', subcategory: 'hematology', title: 'Non-Hodgkin Lymphoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic', 'lymphatic'], conditions: ['non-Hodgkin lymphoma', 'B-cell lymphoma', 'T-cell lymphoma'] },
  { filename: 'multiple_myeloma.jpg', category: 'pathology', subcategory: 'hematology', title: 'Multiple Myeloma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['multiple myeloma', 'plasma cell dyscrasia'] },
  { filename: 'mononucleosis.jpg', category: 'pathology', subcategory: 'hematology', title: 'Infectious Mononucleosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['mononucleosis', 'EBV', 'atypical lymphocytes'] },
  { filename: 'hairy_cell_leukemia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Hairy Cell Leukemia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['hairy cell leukemia'] },
  { filename: 'disseminated_intravascular_coagulation.jpg', category: 'pathology', subcategory: 'hematology', title: 'Disseminated Intravascular Coagulation (DIC)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['DIC', 'coagulopathy'] },
  { filename: 'idiopathic_thrombocytopenic_purpura.jpg', category: 'pathology', subcategory: 'hematology', title: 'Immune Thrombocytopenic Purpura (ITP)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['ITP', 'immune thrombocytopenia'] },
  { filename: 'thrombotic_thrombocytopenic_purpura.jpg', category: 'pathology', subcategory: 'hematology', title: 'Thrombotic Thrombocytopenic Purpura (TTP)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['TTP', 'ADAMTS13 deficiency'] },
  { filename: 'hemophilia.jpg', category: 'pathology', subcategory: 'hematology', title: 'Hemophilia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['hemophilia A', 'hemophilia B', 'factor VIII deficiency'] },
  { filename: 'von_willebrand_disease.jpg', category: 'pathology', subcategory: 'hematology', title: 'von Willebrand Disease', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic'], conditions: ['von Willebrand disease', 'VWD'] },
  { filename: 'deep_vein_thrombosis.jpg', category: 'pathology', subcategory: 'hematology', title: 'Deep Vein Thrombosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['hematologic', 'cardiovascular'], bodyRegions: ['leg'], conditions: ['DVT', 'deep vein thrombosis'] },

  // Endocrine Pathology
  { filename: 'grave_disease.jpg', category: 'pathology', subcategory: 'endocrine', title: "Graves' Disease", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ["Graves disease", 'hyperthyroidism'] },
  { filename: 'hashimoto_thyroiditis.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Hashimoto Thyroiditis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['Hashimoto thyroiditis', 'hypothyroidism'] },
  { filename: 'multinodular_goiter.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Multinodular Goiter', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['multinodular goiter', 'thyroid enlargement'] },
  { filename: 'papillary_thyroid_cancer.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Papillary Thyroid Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['papillary thyroid cancer', 'thyroid carcinoma'] },
  { filename: 'follicular_thyroid_cancer.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Follicular Thyroid Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['follicular thyroid cancer'] },
  { filename: 'medullary_thyroid_cancer.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Medullary Thyroid Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['medullary thyroid cancer', 'MEN2'] },
  { filename: 'anaplastic_thyroid_cancer.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Anaplastic Thyroid Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['anaplastic thyroid cancer'] },
  { filename: 'thyroglossal_duct_cyst.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Thyroglossal Duct Cyst', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['thyroglossal duct cyst'] },
  { filename: 'parathyroid_adenoma.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Parathyroid Adenoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['neck'], conditions: ['parathyroid adenoma', 'hyperparathyroidism'] },
  { filename: 'pituitary_adenoma.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Pituitary Adenoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['head'], conditions: ['pituitary adenoma', 'prolactinoma', 'acromegaly'] },
  { filename: 'diabetes_mellitus_type1.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Type 1 Diabetes Mellitus', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], conditions: ['type 1 diabetes', 'T1DM', 'insulin dependent'] },
  { filename: 'diabetes_mellitus_type2.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Type 2 Diabetes Mellitus', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], conditions: ['type 2 diabetes', 'T2DM'] },
  { filename: 'diabetic_retinopathy.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Diabetic Retinopathy', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine', 'nervous'], bodyRegions: ['head'], conditions: ['diabetic retinopathy'] },
  { filename: 'insulinoma.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Insulinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], conditions: ['insulinoma', 'hypoglycemia'] },
  { filename: 'pheochromocytoma.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Pheochromocytoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], conditions: ['pheochromocytoma', 'catecholamine excess'] },
  { filename: 'adrenal_adenoma.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Adrenal Adenoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], conditions: ['adrenal adenoma', 'Cushing syndrome', 'Conn syndrome'] },
  { filename: 'addison_disease.jpg', category: 'pathology', subcategory: 'endocrine', title: "Addison's Disease", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], conditions: ['Addison disease', 'adrenal insufficiency'] },
  { filename: 'cushing_syndrome.jpg', category: 'pathology', subcategory: 'endocrine', title: "Cushing's Syndrome", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], conditions: ['Cushing syndrome', 'cortisol excess'] },
  { filename: 'conn_syndrome.jpg', category: 'pathology', subcategory: 'endocrine', title: "Conn's Syndrome", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], bodyRegions: ['abdomen'], conditions: ['Conn syndrome', 'hyperaldosteronism', 'primary aldosteronism'] },
  { filename: 'acromegaly.jpg', category: 'pathology', subcategory: 'endocrine', title: 'Acromegaly', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['endocrine'], conditions: ['acromegaly', 'GH excess'] },

  // Nervous System Pathology
  { filename: 'alzheimer_disease.jpg', category: 'pathology', subcategory: 'neurological', title: "Alzheimer's Disease", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['Alzheimer disease', 'dementia', 'amyloid plaques'] },
  { filename: 'parkinson_disease.jpg', category: 'pathology', subcategory: 'neurological', title: "Parkinson's Disease", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['Parkinson disease', 'Lewy bodies'] },
  { filename: 'multiple_sclerosis.jpg', category: 'pathology', subcategory: 'neurological', title: 'Multiple Sclerosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], conditions: ['multiple sclerosis', 'demyelination'] },
  { filename: 'glioblastoma.jpg', category: 'pathology', subcategory: 'neurological', title: 'Glioblastoma Multiforme', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['glioblastoma', 'GBM', 'brain tumor'] },
  { filename: 'meningioma.jpg', category: 'pathology', subcategory: 'neurological', title: 'Meningioma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['meningioma'] },
  { filename: 'astrocytoma.jpg', category: 'pathology', subcategory: 'neurological', title: 'Astrocytoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['astrocytoma', 'low grade glioma'] },
  { filename: 'medulloblastoma.jpg', category: 'pathology', subcategory: 'neurological', title: 'Medulloblastoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['medulloblastoma', 'posterior fossa tumor'] },
  { filename: 'cerebral_infarction.jpg', category: 'pathology', subcategory: 'neurological', title: 'Cerebral Infarction (Stroke)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous', 'cardiovascular'], bodyRegions: ['head'], conditions: ['ischemic stroke', 'cerebral infarction'] },
  { filename: 'intracerebral_hemorrhage.jpg', category: 'pathology', subcategory: 'neurological', title: 'Intracerebral Hemorrhage', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous', 'cardiovascular'], bodyRegions: ['head'], conditions: ['intracerebral hemorrhage', 'hemorrhagic stroke', 'hypertension'] },
  { filename: 'subarachnoid_hemorrhage.jpg', category: 'pathology', subcategory: 'neurological', title: 'Subarachnoid Hemorrhage', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['subarachnoid hemorrhage', 'aneurysm rupture'] },
  { filename: 'subdural_hematoma.jpg', category: 'pathology', subcategory: 'neurological', title: 'Subdural Hematoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['subdural hematoma', 'trauma'] },
  { filename: 'epidural_hematoma.jpg', category: 'pathology', subcategory: 'neurological', title: 'Epidural Hematoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['epidural hematoma', 'trauma'] },
  { filename: 'brain_abscess.jpg', category: 'pathology', subcategory: 'neurological', title: 'Brain Abscess', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['brain abscess', 'infection'] },
  { filename: 'viral_encephalitis.jpg', category: 'pathology', subcategory: 'neurological', title: 'Viral Encephalitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['encephalitis', 'HSV', 'viral infection'] },
  { filename: 'bacterial_meningitis.jpg', category: 'pathology', subcategory: 'neurological', title: 'Bacterial Meningitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['nervous'], bodyRegions: ['head'], conditions: ['bacterial meningitis', 'meningitis'] },

  // Musculoskeletal Pathology
  { filename: 'osteoarthritis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteoarthritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteoarthritis', 'degenerative joint disease', 'DJD'] },
  { filename: 'rheumatoid_arthritis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Rheumatoid Arthritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal', 'hematologic'], conditions: ['rheumatoid arthritis', 'RA', 'autoimmune'] },
  { filename: 'gout.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Gout', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['gout', 'hyperuricemia', 'uric acid crystals'] },
  { filename: 'pseudogout_cppd.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Pseudogout (CPPD)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['pseudogout', 'CPPD', 'calcium pyrophosphate'] },
  { filename: 'osteoporosis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteoporosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteoporosis', 'bone density loss'] },
  { filename: 'osteomalacia.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteomalacia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteomalacia', 'vitamin D deficiency'] },
  { filename: 'paget_disease_bone.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: "Paget Disease of Bone", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['Paget disease of bone', 'osteitis deformans'] },
  { filename: 'osteomyelitis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteomyelitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteomyelitis', 'bone infection'] },
  { filename: 'osteosarcoma.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteosarcoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteosarcoma', 'bone cancer'] },
  { filename: 'ewing_sarcoma.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Ewing Sarcoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['Ewing sarcoma', 'bone cancer'] },
  { filename: 'chondrosarcoma.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Chondrosarcoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['chondrosarcoma', 'cartilage cancer'] },
  { filename: 'giant_cell_tumor.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Giant Cell Tumor of Bone', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['giant cell tumor'] },
  { filename: 'osteochondroma.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteochondroma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteochondroma', 'bone exostosis'] },
  { filename: 'osteoid_osteoma.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Osteoid Osteoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['osteoid osteoma'] },
  { filename: 'fibrous_dysplasia.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Fibrous Dysplasia', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['fibrous dysplasia', 'McCune-Albright'] },
  { filename: 'duchenne_muscular_dystrophy.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Duchenne Muscular Dystrophy', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['Duchenne muscular dystrophy', 'DMD'] },
  { filename: 'myasthenia_gravis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Myasthenia Gravis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal', 'nervous'], conditions: ['myasthenia gravis', 'autoimmune', 'neuromuscular'] },
  { filename: 'dermatomyositis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Dermatomyositis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal', 'integumentary'], conditions: ['dermatomyositis', 'autoimmune myositis'] },
  { filename: 'polymyositis.jpg', category: 'pathology', subcategory: 'musculoskeletal', title: 'Polymyositis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['musculoskeletal'], conditions: ['polymyositis', 'autoimmune myositis'] },

  // Dermatologic Pathology
  { filename: 'basal_cell_carcinoma.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Basal Cell Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['basal cell carcinoma', 'skin cancer'] },
  { filename: 'squamous_cell_carcinoma.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Squamous Cell Carcinoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['squamous cell carcinoma', 'skin cancer'] },
  { filename: 'melanoma.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Malignant Melanoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['melanoma', 'skin cancer'] },
  { filename: 'melanoma_in_situ.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Melanoma In Situ', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['melanoma in situ'] },
  { filename: 'actinic_keratosis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Actinic Keratosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['actinic keratosis', 'solar keratosis'] },
  { filename: 'seborrheic_keratosis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Seborrheic Keratosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['seborrheic keratosis'] },
  { filename: 'nevus.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Melanocytic Nevus (Mole)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['nevus', 'mole'] },
  { filename: 'dysplastic_nevus.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Dysplastic Nevus', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['dysplastic nevus', 'atypical mole'] },
  { filename: 'acne_vulgaris.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Acne Vulgaris', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['acne', 'acne vulgaris'] },
  { filename: 'rosacea.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Rosacea', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['rosacea'] },
  { filename: 'atopic_dermatitis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Atopic Dermatitis (Eczema)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['atopic dermatitis', 'eczema'] },
  { filename: 'contact_dermatitis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Contact Dermatitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['contact dermatitis'] },
  { filename: 'psoriasis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Psoriasis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['psoriasis'] },
  { filename: 'lichen_planus.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Lichen Planus', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['lichen planus'] },
  { filename: 'seborrheic_dermatitis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Seborrheic Dermatitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['seborrheic dermatitis', 'dandruff'] },
  { filename: 'pityriasis_rosea.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Pityriasis Rosea', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['pityriasis rosea'] },
  { filename: 'urticaria.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Urticaria (Hives)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['urticaria', 'hives'] },
  { filename: 'cellulitis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Cellulitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['cellulitis', 'skin infection'] },
  { filename: 'impetigo.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Impetigo', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['impetigo', 'bacterial infection'] },
  { filename: 'herpes_simplex.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Herpes Simplex', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['herpes simplex', 'HSV', 'cold sore'] },
  { filename: 'herpes_zoster.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Herpes Zoster (Shingles)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary', 'nervous'], conditions: ['herpes zoster', 'shingles', 'VZV'] },
  { filename: 'verruca_vulgaris.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Verruca Vulgaris (Wart)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['verruca vulgaris', 'wart', 'HPV'] },
  { filename: 'molluscum_contagiosum.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Molluscum Contagiosum', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['molluscum contagiosum'] },
  { filename: 'tinea_corporis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Tinea Corporis (Ringworm)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['tinea corporis', 'ringworm', 'fungal infection'] },
  { filename: 'tinea_pedis.jpg', category: 'pathology', subcategory: 'dermatology', title: "Tinea Pedis (Athlete's Foot)", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['tinea pedis', 'athlete foot', 'fungal infection'] },
  { filename: 'candidiasis_cutaneous.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Cutaneous Candidiasis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['candidiasis', 'yeast infection'] },
  { filename: 'scabies.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Scabies', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['scabies', 'mite infestation'] },
  { filename: 'pediculosis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Pediculosis (Lice)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['pediculosis', 'lice'] },
  { filename: 'vitiligo.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Vitiligo', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['vitiligo'] },
  { filename: 'alopecia_areata.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Alopecia Areata', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['alopecia areata', 'hair loss'] },
  { filename: 'lipoma.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Lipoma', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['lipoma', 'fat tumor'] },
  { filename: 'epidermal_inclusion_cyst.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Epidermal Inclusion Cyst', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['epidermal cyst', 'sebaceous cyst'] },
  { filename: 'keloid.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Keloid', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['keloid', 'scar'] },
  { filename: 'pressure_ulcer.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Pressure Ulcer', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['pressure ulcer', 'bed sore', 'decubitus'] },
  { filename: 'stasis_dermatitis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Stasis Dermatitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary', 'cardiovascular'], conditions: ['stasis dermatitis', 'venous insufficiency'] },
  { filename: 'stevens_johnson_syndrome.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Stevens-Johnson Syndrome', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['Stevens-Johnson syndrome', 'SJS', 'drug reaction'] },
  { filename: 'toxic_epidermal_necrolysis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Toxic Epidermal Necrolysis (TEN)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['TEN', 'toxic epidermal necrolysis'] },
  { filename: 'erythema_multiforme.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Erythema Multiforme', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['erythema multiforme'] },
  { filename: 'erythema_nodosum.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Erythema Nodosum', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['erythema nodosum'] },
  { filename: 'necrotizing_fasciitis.jpg', category: 'pathology', subcategory: 'dermatology', title: 'Necrotizing Fasciitis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['integumentary'], conditions: ['necrotizing fasciitis', 'flesh-eating bacteria'] },

  // General/Other Pathology
  { filename: 'amyloidosis.jpg', category: 'pathology', subcategory: 'general', title: 'Amyloidosis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['amyloidosis'] },
  { filename: 'sarcoidosis_general.jpg', category: 'pathology', subcategory: 'general', title: 'Sarcoidosis (General)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['sarcoidosis'] },
  { filename: 'granulomatosis_with_polyangiitis.jpg', category: 'pathology', subcategory: 'general', title: 'Granulomatosis with Polyangiitis (Wegener)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['GPA', 'Wegener granulomatosis', 'ANCA'] },
  { filename: 'lupus_erythematosus.jpg', category: 'pathology', subcategory: 'general', title: 'Systemic Lupus Erythematosus', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['SLE', 'lupus'] },
  { filename: 'sjogren_syndrome.jpg', category: 'pathology', subcategory: 'general', title: "Sjögren Syndrome", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['Sjögren syndrome'] },
  { filename: 'scleroderma.jpg', category: 'pathology', subcategory: 'general', title: 'Systemic Sclerosis (Scleroderma)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['systemic sclerosis', 'scleroderma'] },
  { filename: 'dermatomyositis_general.jpg', category: 'pathology', subcategory: 'general', title: 'Dermatomyositis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['dermatomyositis'] },
  { filename: 'polyarteritis_nodosa.jpg', category: 'pathology', subcategory: 'general', title: 'Polyarteritis Nodosa', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['polyarteritis nodosa', 'PAN'] },
  { filename: 'henoch_schonlein_purpura.jpg', category: 'pathology', subcategory: 'general', title: 'IgA Vasculitis (Henoch-Schönlein)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['IgA vasculitis', 'Henoch-Schönlein purpura'] },
  { filename: 'kawasaki_disease.jpg', category: 'pathology', subcategory: 'general', title: 'Kawasaki Disease', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general', 'cardiovascular'], conditions: ['Kawasaki disease', 'mucocutaneous lymph node syndrome'] },
  { filename: 'temporal_arteritis.jpg', category: 'pathology', subcategory: 'general', title: 'Giant Cell Arteritis (Temporal Arteritis)', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['giant cell arteritis', 'temporal arteritis'] },
  { filename: 'takayasu_arteritis.jpg', category: 'pathology', subcategory: 'general', title: 'Takayasu Arteritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general', 'cardiovascular'], conditions: ['Takayasu arteritis'] },
  { filename: 'behcet_disease.jpg', category: 'pathology', subcategory: 'general', title: "Behçet Disease", source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general'], conditions: ['Behçet disease'] },
  { filename: 'reactive_arthritis.jpg', category: 'pathology', subcategory: 'general', title: 'Reactive Arthritis', source: 'WebPath', license: 'unknown', licenseFull: 'Educational Use', bodySystems: ['general', 'musculoskeletal'], conditions: ['reactive arthritis'] },
];

// ============================================================================
// BUILD COMPLETE IMAGE REGISTRY
// ============================================================================

function buildImageRegistry(): ImageMetadata[] {
  return RAW_IMAGE_ENTRIES.map((entry, index) => {
    const id = `img_${entry.category}_${index}`;
    const path = `images/${entry.category}/${entry.subcategory}/${entry.filename}`;
    
    return {
      id,
      filename: entry.filename!,
      path,
      category: entry.category as ImageCategory,
      subcategory: entry.subcategory || 'general',
      title: entry.title || entry.filename!.replace(/_/g, ' ').replace(/\.[^/.]+$/, ''),
      description: entry.description,
      source: entry.source || 'Unknown',
      sourceUrl: entry.sourceUrl || '',
      license: (entry.license as LicenseType) || 'unknown',
      licenseFull: entry.licenseFull || 'Unknown',
      attribution: entry.attribution || `${entry.author || 'Unknown'}, ${entry.source || 'Unknown'}`,
      author: entry.author,
      tags: entry.tags || [],
      bodyRegions: entry.bodyRegions || ['general'],
      bodySystems: entry.bodySystems || ['general'],
      conditions: entry.conditions,
      extractedAt: new Date().toISOString(),
    };
  });
}

// ============================================================================
// EXPORT REGISTRY AND HELPER FUNCTIONS
// ============================================================================

export const IMAGE_REGISTRY: ImageMetadata[] = buildImageRegistry();

// Helper functions for filtering and querying
export function getImagesByCategory(category: ImageCategory): ImageMetadata[] {
  return IMAGE_REGISTRY.filter(img => img.category === category);
}

export function getImagesByBodyRegion(region: BodyRegion): ImageMetadata[] {
  return IMAGE_REGISTRY.filter(img => img.bodyRegions.includes(region));
}

export function getImagesByBodySystem(system: BodySystem): ImageMetadata[] {
  return IMAGE_REGISTRY.filter(img => img.bodySystems.includes(system));
}

export function getImagesByCondition(condition: string): ImageMetadata[] {
  return IMAGE_REGISTRY.filter(img => 
    img.conditions?.some(c => 
      c.toLowerCase().includes(condition.toLowerCase()) ||
      condition.toLowerCase().includes(c.toLowerCase())
    )
  );
}

export function getImagesByLicense(license: LicenseType): ImageMetadata[] {
  return IMAGE_REGISTRY.filter(img => img.license === license);
}

export function filterImages(filters: ImageFilter): ImageMetadata[] {
  return IMAGE_REGISTRY.filter(img => {
    if (filters.category && img.category !== filters.category) return false;
    if (filters.bodyRegion && !img.bodyRegions.includes(filters.bodyRegion)) return false;
    if (filters.bodySystem && !img.bodySystems.includes(filters.bodySystem)) return false;
    if (filters.license && img.license !== filters.license) return false;
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const match = 
        img.title.toLowerCase().includes(query) ||
        img.description?.toLowerCase().includes(query) ||
        img.tags.some(t => t.toLowerCase().includes(query)) ||
        img.conditions?.some(c => c.toLowerCase().includes(query)) ||
        img.subcategory.toLowerCase().includes(query);
      if (!match) return false;
    }
    return true;
  });
}

export function getImageById(id: string): ImageMetadata | undefined {
  return IMAGE_REGISTRY.find(img => img.id === id);
}

export function getRelatedImages(imageId: string, limit: number = 6): ImageMetadata[] {
  const image = getImageById(imageId);
  if (!image) return [];
  
  // Find images with same category, system, or region
  return IMAGE_REGISTRY
    .filter(img => 
      img.id !== imageId && (
        img.category === image.category ||
        img.bodySystems.some(s => image.bodySystems.includes(s)) ||
        img.bodyRegions.some(r => image.bodyRegions.includes(r))
      )
    )
    .slice(0, limit);
}

// Statistics
export function getImageRegistryStats() {
  return {
    total: IMAGE_REGISTRY.length,
    byCategory: {
      pathology: IMAGE_REGISTRY.filter(i => i.category === 'pathology').length,
      anatomy: IMAGE_REGISTRY.filter(i => i.category === 'anatomy').length,
      histology: IMAGE_REGISTRY.filter(i => i.category === 'histology').length,
    },
    byLicense: {
      'public-domain': IMAGE_REGISTRY.filter(i => i.license === 'public-domain').length,
      'cc-by': IMAGE_REGISTRY.filter(i => i.license === 'cc-by').length,
      'cc-by-sa': IMAGE_REGISTRY.filter(i => i.license === 'cc-by-sa').length,
      'cc-by-nc': IMAGE_REGISTRY.filter(i => i.license === 'cc-by-nc').length,
      'unknown': IMAGE_REGISTRY.filter(i => i.license === 'unknown').length,
    },
    bySystem: Object.fromEntries(
      (['cardiovascular', 'respiratory', 'digestive', 'urinary', 'nervous', 'endocrine', 'reproductive', 'musculoskeletal', 'lymphatic', 'hematologic', 'integumentary'] as BodySystem[])
        .map(sys => [sys, IMAGE_REGISTRY.filter(i => i.bodySystems.includes(sys)).length])
    ),
  };
}

// License display helpers
export const LICENSE_DISPLAY: Record<LicenseType, { name: string; badge: string; url?: string }> = {
  'public-domain': { name: 'Public Domain', badge: '🏛️ PD' },
  'cc-by': { name: 'Creative Commons BY', badge: '⚖️ CC BY', url: 'https://creativecommons.org/licenses/by/4.0/' },
  'cc-by-sa': { name: 'Creative Commons BY-SA', badge: '⚖️ CC BY-SA', url: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  'cc-by-nc': { name: 'Creative Commons BY-NC', badge: '⚖️ CC BY-NC', url: 'https://creativecommons.org/licenses/by-nc/4.0/' },
  'unknown': { name: 'Educational Use', badge: '📚 Edu' },
};

// Source display helpers
export const SOURCE_DISPLAY: Record<string, { name: string; url?: string }> = {
  'WebPath': { name: 'WebPath', url: 'https://library.med.utah.edu/WebPath/' },
  "Gray's Anatomy": { name: "Gray's Anatomy (1918)", url: 'https://archive.org/details/anatomyofhumanbo1918gray' },
  'Wikimedia Commons': { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org' },
  'Histology-World': { name: 'Histology-World', url: 'http://www.lab.anhb.uwa.edu.au/' },
  'Pathology Outlines': { name: 'Pathology Outlines', url: 'https://www.pathologyoutlines.com/' },
  'Unknown': { name: 'Unknown Source' },
};
