/**
 * Enhanced Layer Configuration System
 *
 * Provides medically accurate anatomical layer definitions with:
 * - Detailed sublayer hierarchies
 * - Body region filtering
 * - Clinical relevance categorization
 * - Complexity levels
 * - Clinical scenario presets
 */

// ============================================
// Types
// ============================================

export type BodyRegion = 'head' | 'neck' | 'thorax' | 'abdomen' | 'pelvis' | 'upper_limb' | 'lower_limb';
export type ClinicalRelevance = 'essential' | 'common' | 'specialized' | 'research';
export type ComplexityLevel = 'basic' | 'intermediate' | 'advanced' | 'expert';

export interface EnhancedLayerDefinition {
  id: string;
  name: string;
  latinName?: string;
  color: string;
  opacity?: number;
  defaultOpacity?: number;
  bodyRegions?: BodyRegion[];
  clinicalRelevance?: ClinicalRelevance;
  complexityLevel?: ComplexityLevel;
  sublayers?: EnhancedLayerDefinition[];
  description?: string;
}

export interface LayerFilterOptions {
  bodyRegions?: BodyRegion[];
  clinicalRelevance?: ClinicalRelevance[];
  complexityLevel?: ComplexityLevel;
  searchTerm?: string;
}

export interface ClinicalPreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  activeLayers: string[];
  defaultOpacities?: Record<string, number>;
  recommendedView?: {
    rotation?: [number, number, number];
    zoom?: number;
  };
}

// ============================================
// Enhanced Anatomical Layers
// ============================================

export const ENHANCED_ANATOMICAL_LAYERS: EnhancedLayerDefinition[] = [
  // ==========================================
  // INTEGUMENTARY SYSTEM
  // ==========================================
  {
    id: 'integumentary',
    name: 'Skin',
    latinName: 'Integumentum',
    color: '#e8c4a8',
    defaultOpacity: 0.3,
    clinicalRelevance: 'essential',
    complexityLevel: 'basic',
    bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
    description: 'Outermost protective layer of the body',
    sublayers: [
      {
        id: 'integumentary.epidermis',
        name: 'Epidermis',
        latinName: 'Epidermis',
        color: '#f0d4b8',
        defaultOpacity: 0.4,
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        description: 'Outer layer of skin with keratinocytes',
      },
      {
        id: 'integumentary.dermis',
        name: 'Dermis',
        latinName: 'Dermis',
        color: '#d8b498',
        defaultOpacity: 0.5,
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        description: 'Connective tissue layer with blood vessels and nerves',
      },
      {
        id: 'integumentary.hypodermis',
        name: 'Hypodermis',
        latinName: 'Tela Subcutanea',
        color: '#c8a488',
        defaultOpacity: 0.6,
        clinicalRelevance: 'specialized',
        complexityLevel: 'advanced',
        description: 'Subcutaneous fat layer for insulation',
      },
    ],
  },

  // ==========================================
  // SKELETAL SYSTEM
  // ==========================================
  {
    id: 'skeletal',
    name: 'Skeleton',
    latinName: 'Systema Skeletale',
    color: '#f5f5dc',
    defaultOpacity: 0.8,
    clinicalRelevance: 'essential',
    complexityLevel: 'basic',
    bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
    description: 'Bony framework providing support and protection',
    sublayers: [
      // Axial Skeleton
      {
        id: 'skeletal.axial',
        name: 'Axial Skeleton',
        color: '#fffff0',
        defaultOpacity: 0.85,
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis'],
        sublayers: [
          // Cranium
          {
            id: 'skeletal.axial.cranium',
            name: 'Cranium',
            latinName: 'Cranium',
            color: '#f8f8e8',
            defaultOpacity: 0.9,
            bodyRegions: ['head'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
            sublayers: [
              {
                id: 'skeletal.axial.cranium.frontal',
                name: 'Frontal Bone',
                latinName: 'Os Frontale',
                color: '#f8f8e8',
                bodyRegions: ['head'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.cranium.parietal',
                name: 'Parietal Bones',
                latinName: 'Ossa Parietalia',
                color: '#f8f8e8',
                bodyRegions: ['head'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.cranium.temporal',
                name: 'Temporal Bones',
                latinName: 'Ossa Temporalia',
                color: '#f8f8e8',
                bodyRegions: ['head'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.cranium.occipital',
                name: 'Occipital Bone',
                latinName: 'Os Occipitale',
                color: '#f8f8e8',
                bodyRegions: ['head'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.cranium.sphenoid',
                name: 'Sphenoid Bone',
                latinName: 'Os Sphenoidale',
                color: '#f8f8e8',
                bodyRegions: ['head'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
              {
                id: 'skeletal.axial.cranium.ethmoid',
                name: 'Ethmoid Bone',
                latinName: 'Os Ethmoidale',
                color: '#f8f8e8',
                bodyRegions: ['head'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          // Facial bones
          {
            id: 'skeletal.axial.facial',
            name: 'Facial Bones',
            latinName: 'Ossa Faciei',
            color: '#f5f5e0',
            bodyRegions: ['head'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'skeletal.axial.facial.maxilla',
                name: 'Maxilla',
                latinName: 'Maxilla',
                color: '#f5f5e0',
                bodyRegions: ['head'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.facial.mandible',
                name: 'Mandible',
                latinName: 'Mandibula',
                color: '#f5f5e0',
                bodyRegions: ['head'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.facial.nasal',
                name: 'Nasal Bones',
                latinName: 'Ossa Nasalia',
                color: '#f5f5e0',
                bodyRegions: ['head'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
              {
                id: 'skeletal.axial.facial.zygomatic',
                name: 'Zygomatic Bones',
                latinName: 'Ossa Zygomatica',
                color: '#f5f5e0',
                bodyRegions: ['head'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          // Spine regions
          {
            id: 'skeletal.axial.spine',
            name: 'Vertebral Column',
            latinName: 'Columna Vertebralis',
            color: '#f0f0d8',
            bodyRegions: ['neck', 'thorax', 'abdomen', 'pelvis'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
            sublayers: [
              {
                id: 'skeletal.axial.spine.cervical',
                name: 'Cervical Vertebrae (C1-C7)',
                latinName: 'Vertebrae Cervicales',
                color: '#f0f0d8',
                bodyRegions: ['neck'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
                description: '7 vertebrae of the neck region',
              },
              {
                id: 'skeletal.axial.spine.thoracic',
                name: 'Thoracic Vertebrae (T1-T12)',
                latinName: 'Vertebrae Thoracicae',
                color: '#f0f0d8',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
                description: '12 vertebrae attached to ribs',
              },
              {
                id: 'skeletal.axial.spine.lumbar',
                name: 'Lumbar Vertebrae (L1-L5)',
                latinName: 'Vertebrae Lumbales',
                color: '#f0f0d8',
                bodyRegions: ['abdomen'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
                description: '5 large vertebrae of lower back',
              },
              {
                id: 'skeletal.axial.spine.sacrum',
                name: 'Sacrum',
                latinName: 'Os Sacrum',
                color: '#f0f0d8',
                bodyRegions: ['pelvis'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
                description: 'Fused vertebrae connecting to pelvis',
              },
              {
                id: 'skeletal.axial.spine.coccyx',
                name: 'Coccyx',
                latinName: 'Os Coccygis',
                color: '#f0f0d8',
                bodyRegions: ['pelvis'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
                description: 'Tailbone - fused caudal vertebrae',
              },
            ],
          },
          // Thoracic cage
          {
            id: 'skeletal.axial.ribcage',
            name: 'Thoracic Cage',
            latinName: 'Cavea Thoracis',
            color: '#f2f2dc',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
            sublayers: [
              {
                id: 'skeletal.axial.ribcage.sternum',
                name: 'Sternum',
                latinName: 'Sternum',
                color: '#f2f2dc',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.axial.ribcage.trueribs',
                name: 'True Ribs (1-7)',
                latinName: 'Costae Verae',
                color: '#f2f2dc',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
                description: 'Attach directly to sternum',
              },
              {
                id: 'skeletal.axial.ribcage.falseribs',
                name: 'False Ribs (8-10)',
                latinName: 'Costae Spuriae',
                color: '#f2f2dc',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
                description: 'Attach to costal cartilage',
              },
              {
                id: 'skeletal.axial.ribcage.floatingribs',
                name: 'Floating Ribs (11-12)',
                latinName: 'Costae Fluctuantes',
                color: '#f2f2dc',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
                description: 'No anterior attachment',
              },
            ],
          },
        ],
      },
      // Appendicular Skeleton
      {
        id: 'skeletal.appendicular',
        name: 'Appendicular Skeleton',
        color: '#fafad2',
        defaultOpacity: 0.85,
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        bodyRegions: ['thorax', 'pelvis', 'upper_limb', 'lower_limb'],
        sublayers: [
          // Pectoral girdle
          {
            id: 'skeletal.appendicular.pectoral',
            name: 'Pectoral Girdle',
            latinName: 'Cingulum Pectorale',
            color: '#fafad2',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'skeletal.appendicular.pectoral.clavicle',
                name: 'Clavicle',
                latinName: 'Clavicula',
                color: '#fafad2',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.pectoral.scapula',
                name: 'Scapula',
                latinName: 'Scapula',
                color: '#fafad2',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          // Upper limb bones
          {
            id: 'skeletal.appendicular.upperlimb',
            name: 'Upper Limb Bones',
            latinName: 'Ossa Membri Superioris',
            color: '#f8f8d0',
            bodyRegions: ['upper_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'skeletal.appendicular.upperlimb.humerus',
                name: 'Humerus',
                latinName: 'Humerus',
                color: '#f8f8d0',
                bodyRegions: ['upper_limb'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.upperlimb.radius',
                name: 'Radius',
                latinName: 'Radius',
                color: '#f8f8d0',
                bodyRegions: ['upper_limb'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.upperlimb.ulna',
                name: 'Ulna',
                latinName: 'Ulna',
                color: '#f8f8d0',
                bodyRegions: ['upper_limb'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.upperlimb.carpals',
                name: 'Carpal Bones',
                latinName: 'Ossa Carpi',
                color: '#f8f8d0',
                bodyRegions: ['upper_limb'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
              {
                id: 'skeletal.appendicular.upperlimb.metacarpals',
                name: 'Metacarpals',
                latinName: 'Ossa Metacarpi',
                color: '#f8f8d0',
                bodyRegions: ['upper_limb'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
              {
                id: 'skeletal.appendicular.upperlimb.phalanges',
                name: 'Phalanges (Hand)',
                latinName: 'Phalanges Manus',
                color: '#f8f8d0',
                bodyRegions: ['upper_limb'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          // Pelvic girdle
          {
            id: 'skeletal.appendicular.pelvis',
            name: 'Pelvic Girdle',
            latinName: 'Cingulum Pelvicum',
            color: '#f5f5d0',
            bodyRegions: ['pelvis'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'skeletal.appendicular.pelvis.ilium',
                name: 'Ilium',
                latinName: 'Os Ilium',
                color: '#f5f5d0',
                bodyRegions: ['pelvis'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.pelvis.ischium',
                name: 'Ischium',
                latinName: 'Os Ischii',
                color: '#f5f5d0',
                bodyRegions: ['pelvis'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.pelvis.pubis',
                name: 'Pubis',
                latinName: 'Os Pubis',
                color: '#f5f5d0',
                bodyRegions: ['pelvis'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          // Lower limb bones
          {
            id: 'skeletal.appendicular.lowerlimb',
            name: 'Lower Limb Bones',
            latinName: 'Ossa Membri Inferioris',
            color: '#f6f6d2',
            bodyRegions: ['lower_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'skeletal.appendicular.lowerlimb.femur',
                name: 'Femur',
                latinName: 'Femur',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.lowerlimb.patella',
                name: 'Patella',
                latinName: 'Patella',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.lowerlimb.tibia',
                name: 'Tibia',
                latinName: 'Tibia',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.lowerlimb.fibula',
                name: 'Fibula',
                latinName: 'Fibula',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'skeletal.appendicular.lowerlimb.tarsals',
                name: 'Tarsal Bones',
                latinName: 'Ossa Tarsi',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
              {
                id: 'skeletal.appendicular.lowerlimb.metatarsals',
                name: 'Metatarsals',
                latinName: 'Ossa Metatarsi',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
              {
                id: 'skeletal.appendicular.lowerlimb.phalanges',
                name: 'Phalanges (Foot)',
                latinName: 'Phalanges Pedis',
                color: '#f6f6d2',
                bodyRegions: ['lower_limb'],
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
        ],
      },
      // Joints
      {
        id: 'skeletal.joints',
        name: 'Joints',
        latinName: 'Articulationes',
        color: '#d4d4aa',
        defaultOpacity: 0.7,
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
        sublayers: [
          {
            id: 'skeletal.joints.synovial',
            name: 'Synovial Joints',
            color: '#d4d4aa',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'skeletal.joints.cartilaginous',
            name: 'Cartilaginous Joints',
            color: '#c8c8a0',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
          },
          {
            id: 'skeletal.joints.fibrous',
            name: 'Fibrous Joints',
            color: '#bcbc98',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
          },
        ],
      },
    ],
  },

  // ==========================================
  // MUSCULAR SYSTEM
  // ==========================================
  {
    id: 'muscular',
    name: 'Muscles',
    latinName: 'Systema Musculare',
    color: '#c84040',
    defaultOpacity: 0.75,
    clinicalRelevance: 'essential',
    complexityLevel: 'basic',
    bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
    description: 'Skeletal muscles enabling movement',
    sublayers: [
      // Head and Neck Muscles
      {
        id: 'muscular.head',
        name: 'Head & Neck Muscles',
        color: '#d05050',
        bodyRegions: ['head', 'neck'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'muscular.head.facial',
            name: 'Facial Muscles',
            latinName: 'Musculi Faciei',
            color: '#d05050',
            bodyRegions: ['head'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'muscular.head.mastication',
            name: 'Muscles of Mastication',
            latinName: 'Musculi Masticatorii',
            color: '#d05050',
            bodyRegions: ['head'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'muscular.head.sternocleidomastoid',
            name: 'Sternocleidomastoid',
            latinName: 'M. Sternocleidomastoideus',
            color: '#d05050',
            bodyRegions: ['neck'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'muscular.head.trapezius',
            name: 'Trapezius',
            latinName: 'M. Trapezius',
            color: '#d05050',
            bodyRegions: ['neck', 'thorax'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
        ],
      },
      // Thorax Muscles
      {
        id: 'muscular.thorax',
        name: 'Thoracic Muscles',
        color: '#c54545',
        bodyRegions: ['thorax'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'muscular.thorax.pectoralis',
            name: 'Pectoralis Group',
            latinName: 'Mm. Pectorales',
            color: '#c54545',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.thorax.pectoralis.major',
                name: 'Pectoralis Major',
                latinName: 'M. Pectoralis Major',
                color: '#c54545',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.thorax.pectoralis.minor',
                name: 'Pectoralis Minor',
                latinName: 'M. Pectoralis Minor',
                color: '#c54545',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'muscular.thorax.intercostals',
            name: 'Intercostal Muscles',
            latinName: 'Mm. Intercostales',
            color: '#c54545',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'muscular.thorax.diaphragm',
            name: 'Diaphragm',
            latinName: 'Diaphragma',
            color: '#cc6666',
            bodyRegions: ['thorax', 'abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
        ],
      },
      // Back Muscles
      {
        id: 'muscular.back',
        name: 'Back Muscles',
        color: '#b83838',
        bodyRegions: ['neck', 'thorax', 'abdomen'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'muscular.back.superficial',
            name: 'Superficial Back Muscles',
            color: '#b83838',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.back.superficial.latissimus',
                name: 'Latissimus Dorsi',
                latinName: 'M. Latissimus Dorsi',
                color: '#b83838',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.back.superficial.rhomboids',
                name: 'Rhomboid Muscles',
                latinName: 'Mm. Rhomboidei',
                color: '#b83838',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'muscular.back.deep',
            name: 'Deep Back Muscles',
            latinName: 'Mm. Dorsi Profundi',
            color: '#a83030',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
            sublayers: [
              {
                id: 'muscular.back.deep.erectorspinae',
                name: 'Erector Spinae',
                latinName: 'M. Erector Spinae',
                color: '#a83030',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.back.deep.transversospinalis',
                name: 'Transversospinalis',
                latinName: 'Mm. Transversospinales',
                color: '#a83030',
                clinicalRelevance: 'specialized',
                complexityLevel: 'expert',
              },
            ],
          },
        ],
      },
      // Abdominal Muscles
      {
        id: 'muscular.abdomen',
        name: 'Abdominal Muscles',
        color: '#c04040',
        bodyRegions: ['abdomen'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'muscular.abdomen.rectus',
            name: 'Rectus Abdominis',
            latinName: 'M. Rectus Abdominis',
            color: '#c04040',
            clinicalRelevance: 'common',
            complexityLevel: 'basic',
          },
          {
            id: 'muscular.abdomen.obliques',
            name: 'Oblique Muscles',
            color: '#c04040',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.abdomen.obliques.external',
                name: 'External Oblique',
                latinName: 'M. Obliquus Externus Abdominis',
                color: '#c04040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.abdomen.obliques.internal',
                name: 'Internal Oblique',
                latinName: 'M. Obliquus Internus Abdominis',
                color: '#b03838',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'muscular.abdomen.transversus',
            name: 'Transversus Abdominis',
            latinName: 'M. Transversus Abdominis',
            color: '#a83030',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
          },
        ],
      },
      // Upper Limb Muscles
      {
        id: 'muscular.upperlimb',
        name: 'Upper Limb Muscles',
        color: '#d04848',
        bodyRegions: ['upper_limb'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'muscular.upperlimb.shoulder',
            name: 'Shoulder Muscles',
            color: '#d04848',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.upperlimb.shoulder.deltoid',
                name: 'Deltoid',
                latinName: 'M. Deltoideus',
                color: '#d04848',
                clinicalRelevance: 'common',
                complexityLevel: 'basic',
              },
              {
                id: 'muscular.upperlimb.shoulder.rotatorcuff',
                name: 'Rotator Cuff',
                latinName: 'Coiffa Rotatoria',
                color: '#c54040',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'muscular.upperlimb.arm',
            name: 'Arm Muscles',
            color: '#c84040',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.upperlimb.arm.flexors',
                name: 'Arm Flexors',
                color: '#c84040',
                description: 'Biceps brachii, brachialis',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.upperlimb.arm.extensors',
                name: 'Arm Extensors',
                color: '#b83838',
                description: 'Triceps brachii, anconeus',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'muscular.upperlimb.forearm',
            name: 'Forearm Muscles',
            color: '#c04040',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.upperlimb.forearm.flexors',
                name: 'Forearm Flexors',
                color: '#c04040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.upperlimb.forearm.extensors',
                name: 'Forearm Extensors',
                color: '#b03838',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.upperlimb.forearm.rotators',
                name: 'Forearm Rotators',
                color: '#a83030',
                description: 'Pronators and supinators',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'muscular.upperlimb.hand',
            name: 'Hand Muscles',
            latinName: 'Mm. Manus',
            color: '#d85050',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
          },
        ],
      },
      // Lower Limb Muscles
      {
        id: 'muscular.lowerlimb',
        name: 'Lower Limb Muscles',
        color: '#c54040',
        bodyRegions: ['pelvis', 'lower_limb'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'muscular.lowerlimb.hip',
            name: 'Hip Muscles',
            color: '#c54040',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.lowerlimb.hip.flexors',
                name: 'Hip Flexors',
                latinName: 'Mm. Flexores Coxae',
                color: '#c54040',
                description: 'Iliopsoas, rectus femoris',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.hip.extensors',
                name: 'Hip Extensors',
                color: '#b83838',
                description: 'Gluteus maximus, hamstrings',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.hip.abductors',
                name: 'Hip Abductors',
                color: '#c04040',
                description: 'Gluteus medius and minimus',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.hip.rotators',
                name: 'Hip Rotators',
                color: '#a83030',
                description: 'Piriformis, obturators',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'muscular.lowerlimb.thigh',
            name: 'Thigh Muscles',
            color: '#c84040',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.lowerlimb.thigh.quadriceps',
                name: 'Quadriceps',
                latinName: 'M. Quadriceps Femoris',
                color: '#c84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.thigh.hamstrings',
                name: 'Hamstrings',
                latinName: 'Mm. Ischiocrurales',
                color: '#b83838',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.thigh.adductors',
                name: 'Adductors',
                latinName: 'Mm. Adductores',
                color: '#a83030',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'muscular.lowerlimb.leg',
            name: 'Leg Muscles',
            color: '#c04040',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'muscular.lowerlimb.leg.anterior',
                name: 'Anterior Compartment',
                color: '#c04040',
                description: 'Tibialis anterior, extensors',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.leg.posterior',
                name: 'Posterior Compartment',
                color: '#b03838',
                description: 'Gastrocnemius, soleus',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'muscular.lowerlimb.leg.lateral',
                name: 'Lateral Compartment',
                color: '#a02828',
                description: 'Peroneal muscles',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'muscular.lowerlimb.foot',
            name: 'Foot Muscles',
            latinName: 'Mm. Pedis',
            color: '#d85050',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
          },
        ],
      },
      // Tendons and Ligaments
      {
        id: 'muscular.tendons',
        name: 'Tendons & Ligaments',
        color: '#f0e0d0',
        defaultOpacity: 0.6,
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
      },
    ],
  },

  // ==========================================
  // CARDIOVASCULAR SYSTEM
  // ==========================================
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    latinName: 'Systema Cardiovasculare',
    color: '#c04040',
    defaultOpacity: 0.9,
    clinicalRelevance: 'essential',
    complexityLevel: 'basic',
    bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
    description: 'Heart and blood vessels',
    sublayers: [
      // Heart
      {
        id: 'cardiovascular.heart',
        name: 'Heart',
        latinName: 'Cor',
        color: '#d04050',
        bodyRegions: ['thorax'],
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'cardiovascular.heart.chambers',
            name: 'Heart Chambers',
            color: '#d04050',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.heart.chambers.rightatrium',
                name: 'Right Atrium',
                latinName: 'Atrium Dextrum',
                color: '#0044aa',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.chambers.rightventricle',
                name: 'Right Ventricle',
                latinName: 'Ventriculus Dexter',
                color: '#0044aa',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.chambers.leftatrium',
                name: 'Left Atrium',
                latinName: 'Atrium Sinistrum',
                color: '#cc2020',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.chambers.leftventricle',
                name: 'Left Ventricle',
                latinName: 'Ventriculus Sinister',
                color: '#cc2020',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.heart.valves',
            name: 'Heart Valves',
            latinName: 'Valvae Cordis',
            color: '#e06060',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.heart.valves.mitral',
                name: 'Mitral Valve',
                latinName: 'Valva Mitralis',
                color: '#e06060',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.valves.tricuspid',
                name: 'Tricuspid Valve',
                latinName: 'Valva Tricuspidalis',
                color: '#e06060',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.valves.aortic',
                name: 'Aortic Valve',
                latinName: 'Valva Aortae',
                color: '#e06060',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.valves.pulmonary',
                name: 'Pulmonary Valve',
                latinName: 'Valva Trunci Pulmonalis',
                color: '#e06060',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.heart.coronary',
            name: 'Coronary Vessels',
            latinName: 'Vasa Coronaria',
            color: '#ff4040',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.heart.coronary.lca',
                name: 'Left Coronary Artery',
                latinName: 'A. Coronaria Sinistra',
                color: '#ff4040',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.heart.coronary.lad',
                name: 'Left Anterior Descending',
                latinName: 'R. Interventricularis Anterior',
                color: '#ff4040',
                clinicalRelevance: 'essential',
                complexityLevel: 'advanced',
              },
              {
                id: 'cardiovascular.heart.coronary.lcx',
                name: 'Left Circumflex',
                latinName: 'R. Circumflexus',
                color: '#ff4040',
                clinicalRelevance: 'essential',
                complexityLevel: 'advanced',
              },
              {
                id: 'cardiovascular.heart.coronary.rca',
                name: 'Right Coronary Artery',
                latinName: 'A. Coronaria Dextra',
                color: '#ff4040',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.heart.conduction',
            name: 'Conduction System',
            color: '#ffff00',
            clinicalRelevance: 'essential',
            complexityLevel: 'advanced',
            sublayers: [
              {
                id: 'cardiovascular.heart.conduction.sanode',
                name: 'SA Node',
                latinName: 'Nodus Sinuatrialis',
                color: '#ffff00',
                clinicalRelevance: 'essential',
                complexityLevel: 'advanced',
              },
              {
                id: 'cardiovascular.heart.conduction.avnode',
                name: 'AV Node',
                latinName: 'Nodus Atrioventricularis',
                color: '#ffff00',
                clinicalRelevance: 'essential',
                complexityLevel: 'advanced',
              },
              {
                id: 'cardiovascular.heart.conduction.bundle',
                name: 'Bundle of His',
                latinName: 'Fasciculus Atrioventricularis',
                color: '#ffff00',
                clinicalRelevance: 'specialized',
                complexityLevel: 'expert',
              },
            ],
          },
        ],
      },
      // Arteries
      {
        id: 'cardiovascular.arteries',
        name: 'Arteries',
        latinName: 'Arteriae',
        color: '#e04040',
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'cardiovascular.arteries.aortic',
            name: 'Aortic Tree',
            latinName: 'Aorta et Rami',
            color: '#e04040',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.arteries.aortic.ascending',
                name: 'Ascending Aorta',
                latinName: 'Aorta Ascendens',
                color: '#e04040',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.aortic.arch',
                name: 'Aortic Arch',
                latinName: 'Arcus Aortae',
                color: '#e04040',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.aortic.descending',
                name: 'Descending Aorta',
                latinName: 'Aorta Descendens',
                color: '#e04040',
                bodyRegions: ['thorax', 'abdomen'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.aortic.abdominal',
                name: 'Abdominal Aorta',
                latinName: 'Aorta Abdominalis',
                color: '#e04040',
                bodyRegions: ['abdomen'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.arteries.head',
            name: 'Head & Neck Arteries',
            color: '#e04040',
            bodyRegions: ['head', 'neck'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.arteries.head.carotid',
                name: 'Carotid Arteries',
                latinName: 'Aa. Carotides',
                color: '#e04040',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.head.vertebral',
                name: 'Vertebral Arteries',
                latinName: 'Aa. Vertebrales',
                color: '#e04040',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.head.cerebral',
                name: 'Cerebral Arteries',
                latinName: 'Aa. Cerebri',
                color: '#e04040',
                bodyRegions: ['head'],
                clinicalRelevance: 'essential',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'cardiovascular.arteries.upperlimb',
            name: 'Upper Limb Arteries',
            color: '#d84040',
            bodyRegions: ['upper_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.arteries.upperlimb.subclavian',
                name: 'Subclavian Artery',
                latinName: 'A. Subclavia',
                color: '#d84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.upperlimb.brachial',
                name: 'Brachial Artery',
                latinName: 'A. Brachialis',
                color: '#d84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.upperlimb.radial',
                name: 'Radial Artery',
                latinName: 'A. Radialis',
                color: '#d84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.upperlimb.ulnar',
                name: 'Ulnar Artery',
                latinName: 'A. Ulnaris',
                color: '#d84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.arteries.abdominal',
            name: 'Abdominal Arteries',
            color: '#d04040',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.arteries.abdominal.celiac',
                name: 'Celiac Trunk',
                latinName: 'Truncus Coeliacus',
                color: '#d04040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.abdominal.mesenteric',
                name: 'Mesenteric Arteries',
                latinName: 'Aa. Mesentericae',
                color: '#d04040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.abdominal.renal',
                name: 'Renal Arteries',
                latinName: 'Aa. Renales',
                color: '#d04040',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.arteries.lowerlimb',
            name: 'Lower Limb Arteries',
            color: '#c84040',
            bodyRegions: ['pelvis', 'lower_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.arteries.lowerlimb.iliac',
                name: 'Iliac Arteries',
                latinName: 'Aa. Iliacae',
                color: '#c84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.lowerlimb.femoral',
                name: 'Femoral Artery',
                latinName: 'A. Femoralis',
                color: '#c84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.lowerlimb.popliteal',
                name: 'Popliteal Artery',
                latinName: 'A. Poplitea',
                color: '#c84040',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.arteries.lowerlimb.tibial',
                name: 'Tibial Arteries',
                latinName: 'Aa. Tibiales',
                color: '#c84040',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
        ],
      },
      // Veins
      {
        id: 'cardiovascular.veins',
        name: 'Veins',
        latinName: 'Venae',
        color: '#4040c0',
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'cardiovascular.veins.venacava',
            name: 'Venae Cavae',
            color: '#4040c0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.veins.venacava.superior',
                name: 'Superior Vena Cava',
                latinName: 'Vena Cava Superior',
                color: '#4040c0',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.veins.venacava.inferior',
                name: 'Inferior Vena Cava',
                latinName: 'Vena Cava Inferior',
                color: '#4040c0',
                bodyRegions: ['thorax', 'abdomen'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'cardiovascular.veins.head',
            name: 'Head & Neck Veins',
            color: '#4040b0',
            bodyRegions: ['head', 'neck'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.veins.head.jugular',
                name: 'Jugular Veins',
                latinName: 'Vv. Jugulares',
                color: '#4040b0',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.veins.head.sinuses',
                name: 'Dural Venous Sinuses',
                latinName: 'Sinus Durae Matris',
                color: '#4040b0',
                clinicalRelevance: 'specialized',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'cardiovascular.veins.upperlimb',
            name: 'Upper Limb Veins',
            color: '#4848a0',
            bodyRegions: ['upper_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'cardiovascular.veins.portal',
            name: 'Portal Venous System',
            latinName: 'Systema Portale',
            color: '#6060c0',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'cardiovascular.veins.lowerlimb',
            name: 'Lower Limb Veins',
            color: '#5050a0',
            bodyRegions: ['lower_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'cardiovascular.veins.lowerlimb.deep',
                name: 'Deep Veins',
                color: '#5050a0',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'cardiovascular.veins.lowerlimb.superficial',
                name: 'Superficial Veins',
                color: '#6060b0',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
        ],
      },
      // Capillaries
      {
        id: 'cardiovascular.capillaries',
        name: 'Capillaries',
        latinName: 'Vasa Capillaria',
        color: '#c080c0',
        defaultOpacity: 0.4,
        clinicalRelevance: 'specialized',
        complexityLevel: 'advanced',
      },
    ],
  },

  // ==========================================
  // NERVOUS SYSTEM
  // ==========================================
  {
    id: 'nervous',
    name: 'Nervous System',
    latinName: 'Systema Nervosum',
    color: '#f0d060',
    defaultOpacity: 0.85,
    clinicalRelevance: 'essential',
    complexityLevel: 'basic',
    bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
    description: 'Brain, spinal cord, and peripheral nerves',
    sublayers: [
      // Central Nervous System
      {
        id: 'nervous.central',
        name: 'Central Nervous System',
        latinName: 'Systema Nervosum Centrale',
        color: '#f0e080',
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'nervous.central.brain',
            name: 'Brain',
            latinName: 'Encephalon',
            color: '#f5c0c0',
            bodyRegions: ['head'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
            sublayers: [
              {
                id: 'nervous.central.brain.cerebrum',
                name: 'Cerebrum',
                latinName: 'Cerebrum',
                color: '#f5c0c0',
                clinicalRelevance: 'essential',
                complexityLevel: 'basic',
                sublayers: [
                  {
                    id: 'nervous.central.brain.cerebrum.frontal',
                    name: 'Frontal Lobe',
                    latinName: 'Lobus Frontalis',
                    color: '#f0b0b0',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'intermediate',
                  },
                  {
                    id: 'nervous.central.brain.cerebrum.parietal',
                    name: 'Parietal Lobe',
                    latinName: 'Lobus Parietalis',
                    color: '#f0b0b0',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'intermediate',
                  },
                  {
                    id: 'nervous.central.brain.cerebrum.temporal',
                    name: 'Temporal Lobe',
                    latinName: 'Lobus Temporalis',
                    color: '#f0b0b0',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'intermediate',
                  },
                  {
                    id: 'nervous.central.brain.cerebrum.occipital',
                    name: 'Occipital Lobe',
                    latinName: 'Lobus Occipitalis',
                    color: '#f0b0b0',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'intermediate',
                  },
                  {
                    id: 'nervous.central.brain.cerebrum.insula',
                    name: 'Insula',
                    latinName: 'Insula',
                    color: '#e8a0a0',
                    clinicalRelevance: 'specialized',
                    complexityLevel: 'advanced',
                  },
                ],
              },
              {
                id: 'nervous.central.brain.cerebellum',
                name: 'Cerebellum',
                latinName: 'Cerebellum',
                color: '#e8c0c0',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'nervous.central.brain.brainstem',
                name: 'Brainstem',
                latinName: 'Truncus Encephali',
                color: '#e8c0c0',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
                sublayers: [
                  {
                    id: 'nervous.central.brain.brainstem.midbrain',
                    name: 'Midbrain',
                    latinName: 'Mesencephalon',
                    color: '#e0b0b0',
                    clinicalRelevance: 'specialized',
                    complexityLevel: 'advanced',
                  },
                  {
                    id: 'nervous.central.brain.brainstem.pons',
                    name: 'Pons',
                    latinName: 'Pons',
                    color: '#e0b0b0',
                    clinicalRelevance: 'specialized',
                    complexityLevel: 'advanced',
                  },
                  {
                    id: 'nervous.central.brain.brainstem.medulla',
                    name: 'Medulla Oblongata',
                    latinName: 'Medulla Oblongata',
                    color: '#e0b0b0',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'advanced',
                  },
                ],
              },
              {
                id: 'nervous.central.brain.diencephalon',
                name: 'Diencephalon',
                latinName: 'Diencephalon',
                color: '#e8a0a0',
                clinicalRelevance: 'common',
                complexityLevel: 'advanced',
                sublayers: [
                  {
                    id: 'nervous.central.brain.diencephalon.thalamus',
                    name: 'Thalamus',
                    latinName: 'Thalamus',
                    color: '#e8a0a0',
                    clinicalRelevance: 'common',
                    complexityLevel: 'advanced',
                  },
                  {
                    id: 'nervous.central.brain.diencephalon.hypothalamus',
                    name: 'Hypothalamus',
                    latinName: 'Hypothalamus',
                    color: '#e8a0a0',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'advanced',
                  },
                ],
              },
              {
                id: 'nervous.central.brain.limbic',
                name: 'Limbic System',
                latinName: 'Systema Limbicum',
                color: '#e09090',
                clinicalRelevance: 'common',
                complexityLevel: 'advanced',
                sublayers: [
                  {
                    id: 'nervous.central.brain.limbic.hippocampus',
                    name: 'Hippocampus',
                    latinName: 'Hippocampus',
                    color: '#e09090',
                    clinicalRelevance: 'essential',
                    complexityLevel: 'advanced',
                  },
                  {
                    id: 'nervous.central.brain.limbic.amygdala',
                    name: 'Amygdala',
                    latinName: 'Corpus Amygdaloideum',
                    color: '#e09090',
                    clinicalRelevance: 'common',
                    complexityLevel: 'advanced',
                  },
                ],
              },
              {
                id: 'nervous.central.brain.basalganglia',
                name: 'Basal Ganglia',
                latinName: 'Nuclei Basales',
                color: '#d88080',
                clinicalRelevance: 'common',
                complexityLevel: 'advanced',
              },
            ],
          },
          {
            id: 'nervous.central.spinalcord',
            name: 'Spinal Cord',
            latinName: 'Medulla Spinalis',
            color: '#e0d050',
            bodyRegions: ['neck', 'thorax', 'abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
            sublayers: [
              {
                id: 'nervous.central.spinalcord.cervical',
                name: 'Cervical Segments (C1-C8)',
                latinName: 'Segmenta Cervicalia',
                color: '#e0d050',
                bodyRegions: ['neck'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'nervous.central.spinalcord.thoracic',
                name: 'Thoracic Segments (T1-T12)',
                latinName: 'Segmenta Thoracica',
                color: '#e0d050',
                bodyRegions: ['thorax'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'nervous.central.spinalcord.lumbar',
                name: 'Lumbar Segments (L1-L5)',
                latinName: 'Segmenta Lumbalia',
                color: '#e0d050',
                bodyRegions: ['abdomen'],
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'nervous.central.spinalcord.sacral',
                name: 'Sacral Segments (S1-S5)',
                latinName: 'Segmenta Sacralia',
                color: '#e0d050',
                bodyRegions: ['pelvis'],
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'nervous.central.meninges',
            name: 'Meninges',
            latinName: 'Meninges',
            color: '#f0d0a0',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
        ],
      },
      // Cranial Nerves
      {
        id: 'nervous.cranial',
        name: 'Cranial Nerves',
        latinName: 'Nervi Craniales',
        color: '#f0e0a0',
        bodyRegions: ['head', 'neck'],
        clinicalRelevance: 'essential',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'nervous.cranial.i',
            name: 'CN I - Olfactory',
            latinName: 'N. Olfactorius',
            color: '#f0e0a0',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.ii',
            name: 'CN II - Optic',
            latinName: 'N. Opticus',
            color: '#f0e0a0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.iii',
            name: 'CN III - Oculomotor',
            latinName: 'N. Oculomotorius',
            color: '#f0e0a0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.iv',
            name: 'CN IV - Trochlear',
            latinName: 'N. Trochlearis',
            color: '#f0e0a0',
            clinicalRelevance: 'specialized',
            complexityLevel: 'advanced',
          },
          {
            id: 'nervous.cranial.v',
            name: 'CN V - Trigeminal',
            latinName: 'N. Trigeminus',
            color: '#f0e0a0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.vi',
            name: 'CN VI - Abducens',
            latinName: 'N. Abducens',
            color: '#f0e0a0',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.vii',
            name: 'CN VII - Facial',
            latinName: 'N. Facialis',
            color: '#f0e0a0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.viii',
            name: 'CN VIII - Vestibulocochlear',
            latinName: 'N. Vestibulocochlearis',
            color: '#f0e0a0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.ix',
            name: 'CN IX - Glossopharyngeal',
            latinName: 'N. Glossopharyngeus',
            color: '#f0e0a0',
            clinicalRelevance: 'common',
            complexityLevel: 'advanced',
          },
          {
            id: 'nervous.cranial.x',
            name: 'CN X - Vagus',
            latinName: 'N. Vagus',
            color: '#f0e0a0',
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.xi',
            name: 'CN XI - Accessory',
            latinName: 'N. Accessorius',
            color: '#f0e0a0',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.cranial.xii',
            name: 'CN XII - Hypoglossal',
            latinName: 'N. Hypoglossus',
            color: '#f0e0a0',
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
        ],
      },
      // Peripheral Nerves
      {
        id: 'nervous.peripheral',
        name: 'Peripheral Nerves',
        latinName: 'Nervi Peripherici',
        color: '#f0e0a0',
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'nervous.peripheral.brachial',
            name: 'Brachial Plexus',
            latinName: 'Plexus Brachialis',
            color: '#f0e0a0',
            bodyRegions: ['neck', 'upper_limb'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.peripheral.lumbar',
            name: 'Lumbar Plexus',
            latinName: 'Plexus Lumbalis',
            color: '#f0e0a0',
            bodyRegions: ['abdomen', 'lower_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.peripheral.sacral',
            name: 'Sacral Plexus',
            latinName: 'Plexus Sacralis',
            color: '#f0e0a0',
            bodyRegions: ['pelvis', 'lower_limb'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'nervous.peripheral.sciatic',
            name: 'Sciatic Nerve',
            latinName: 'N. Ischiadicus',
            color: '#f0e0a0',
            bodyRegions: ['pelvis', 'lower_limb'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
        ],
      },
      // Autonomic Nervous System
      {
        id: 'nervous.autonomic',
        name: 'Autonomic Nervous System',
        latinName: 'Systema Nervosum Autonomicum',
        color: '#d0c040',
        clinicalRelevance: 'common',
        complexityLevel: 'advanced',
        sublayers: [
          {
            id: 'nervous.autonomic.sympathetic',
            name: 'Sympathetic Division',
            latinName: 'Pars Sympathica',
            color: '#e0b040',
            clinicalRelevance: 'common',
            complexityLevel: 'advanced',
            sublayers: [
              {
                id: 'nervous.autonomic.sympathetic.chain',
                name: 'Sympathetic Chain',
                latinName: 'Truncus Sympathicus',
                color: '#e0b040',
                clinicalRelevance: 'specialized',
                complexityLevel: 'expert',
              },
            ],
          },
          {
            id: 'nervous.autonomic.parasympathetic',
            name: 'Parasympathetic Division',
            latinName: 'Pars Parasympathica',
            color: '#c0d040',
            clinicalRelevance: 'common',
            complexityLevel: 'advanced',
          },
          {
            id: 'nervous.autonomic.enteric',
            name: 'Enteric Nervous System',
            latinName: 'Systema Nervosum Entericum',
            color: '#d0c050',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'specialized',
            complexityLevel: 'expert',
          },
        ],
      },
    ],
  },

  // ==========================================
  // ORGANS (DIGESTIVE, RESPIRATORY, URINARY, ETC.)
  // ==========================================
  {
    id: 'organs',
    name: 'Internal Organs',
    latinName: 'Organa Interna',
    color: '#b87850',
    defaultOpacity: 0.9,
    clinicalRelevance: 'essential',
    complexityLevel: 'basic',
    bodyRegions: ['neck', 'thorax', 'abdomen', 'pelvis'],
    description: 'Major organ systems',
    sublayers: [
      // Respiratory organs
      {
        id: 'organs.respiratory',
        name: 'Respiratory Organs',
        latinName: 'Organa Respiratoria',
        color: '#f0a0a0',
        bodyRegions: ['head', 'neck', 'thorax'],
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'organs.respiratory.nasalcavity',
            name: 'Nasal Cavity',
            latinName: 'Cavitas Nasi',
            color: '#f0a0a0',
            bodyRegions: ['head'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.respiratory.pharynx',
            name: 'Pharynx',
            latinName: 'Pharynx',
            color: '#f0a0a0',
            bodyRegions: ['head', 'neck'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.respiratory.larynx',
            name: 'Larynx',
            latinName: 'Larynx',
            color: '#f0a0a0',
            bodyRegions: ['neck'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.respiratory.trachea',
            name: 'Trachea',
            latinName: 'Trachea',
            color: '#f0a0a0',
            bodyRegions: ['neck', 'thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.respiratory.bronchi',
            name: 'Bronchi',
            latinName: 'Bronchi',
            color: '#f0a0a0',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.respiratory.lungs',
            name: 'Lungs',
            latinName: 'Pulmones',
            color: '#ffaaaa',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
            sublayers: [
              {
                id: 'organs.respiratory.lungs.left',
                name: 'Left Lung',
                latinName: 'Pulmo Sinister',
                color: '#ffaaaa',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
              {
                id: 'organs.respiratory.lungs.right',
                name: 'Right Lung',
                latinName: 'Pulmo Dexter',
                color: '#ffaaaa',
                clinicalRelevance: 'essential',
                complexityLevel: 'intermediate',
              },
            ],
          },
        ],
      },
      // Digestive organs
      {
        id: 'organs.digestive',
        name: 'Digestive Organs',
        latinName: 'Organa Digestoria',
        color: '#c88860',
        bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis'],
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'organs.digestive.esophagus',
            name: 'Esophagus',
            latinName: 'Oesophagus',
            color: '#e8a0a0',
            bodyRegions: ['neck', 'thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.digestive.stomach',
            name: 'Stomach',
            latinName: 'Ventriculus',
            color: '#ffb6c1',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
          {
            id: 'organs.digestive.smallintestine',
            name: 'Small Intestine',
            latinName: 'Intestinum Tenue',
            color: '#deb887',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
            sublayers: [
              {
                id: 'organs.digestive.smallintestine.duodenum',
                name: 'Duodenum',
                latinName: 'Duodenum',
                color: '#deb887',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'organs.digestive.smallintestine.jejunum',
                name: 'Jejunum',
                latinName: 'Jejunum',
                color: '#deb887',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
              {
                id: 'organs.digestive.smallintestine.ileum',
                name: 'Ileum',
                latinName: 'Ileum',
                color: '#deb887',
                clinicalRelevance: 'common',
                complexityLevel: 'intermediate',
              },
            ],
          },
          {
            id: 'organs.digestive.largeintestine',
            name: 'Large Intestine',
            latinName: 'Intestinum Crassum',
            color: '#cd853f',
            bodyRegions: ['abdomen', 'pelvis'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.digestive.liver',
            name: 'Liver',
            latinName: 'Hepar',
            color: '#8b4513',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
          {
            id: 'organs.digestive.gallbladder',
            name: 'Gallbladder',
            latinName: 'Vesica Biliaris',
            color: '#228b22',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.digestive.pancreas',
            name: 'Pancreas',
            latinName: 'Pancreas',
            color: '#ffd700',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
        ],
      },
      // Urinary organs
      {
        id: 'organs.urinary',
        name: 'Urinary Organs',
        latinName: 'Organa Urinaria',
        color: '#d0a080',
        bodyRegions: ['abdomen', 'pelvis'],
        clinicalRelevance: 'essential',
        complexityLevel: 'basic',
        sublayers: [
          {
            id: 'organs.urinary.kidneys',
            name: 'Kidneys',
            latinName: 'Renes',
            color: '#8b0000',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
          {
            id: 'organs.urinary.ureters',
            name: 'Ureters',
            latinName: 'Ureteres',
            color: '#dda0dd',
            bodyRegions: ['abdomen', 'pelvis'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.urinary.bladder',
            name: 'Urinary Bladder',
            latinName: 'Vesica Urinaria',
            color: '#dda0dd',
            bodyRegions: ['pelvis'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
          {
            id: 'organs.urinary.urethra',
            name: 'Urethra',
            latinName: 'Urethra',
            color: '#ddaaee',
            bodyRegions: ['pelvis'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
        ],
      },
      // Reproductive organs
      {
        id: 'organs.reproductive',
        name: 'Reproductive Organs',
        latinName: 'Organa Genitalia',
        color: '#e0b0a0',
        bodyRegions: ['abdomen', 'pelvis'],
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
      },
      // Endocrine organs
      {
        id: 'organs.endocrine',
        name: 'Endocrine Organs',
        latinName: 'Organa Endocrina',
        color: '#c0a090',
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'organs.endocrine.pituitary',
            name: 'Pituitary Gland',
            latinName: 'Glandula Pituitaria',
            color: '#ff69b4',
            bodyRegions: ['head'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.endocrine.thyroid',
            name: 'Thyroid Gland',
            latinName: 'Glandula Thyroidea',
            color: '#ff6347',
            bodyRegions: ['neck'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
          {
            id: 'organs.endocrine.parathyroid',
            name: 'Parathyroid Glands',
            latinName: 'Glandulae Parathyroideae',
            color: '#ff8844',
            bodyRegions: ['neck'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'organs.endocrine.adrenal',
            name: 'Adrenal Glands',
            latinName: 'Glandulae Suprarenales',
            color: '#ffd700',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
        ],
      },
    ],
  },

  // ==========================================
  // LYMPHATIC SYSTEM
  // ==========================================
  {
    id: 'lymphatic',
    name: 'Lymphatic System',
    latinName: 'Systema Lymphaticum',
    color: '#80c080',
    defaultOpacity: 0.7,
    clinicalRelevance: 'common',
    complexityLevel: 'intermediate',
    bodyRegions: ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'],
    description: 'Lymph nodes, vessels, and lymphoid organs',
    sublayers: [
      {
        id: 'lymphatic.nodes',
        name: 'Lymph Nodes',
        latinName: 'Nodi Lymphatici',
        color: '#90d090',
        clinicalRelevance: 'essential',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'lymphatic.nodes.cervical',
            name: 'Cervical Nodes',
            latinName: 'Nodi Cervicales',
            color: '#90d090',
            bodyRegions: ['head', 'neck'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'lymphatic.nodes.axillary',
            name: 'Axillary Nodes',
            latinName: 'Nodi Axillares',
            color: '#90d090',
            bodyRegions: ['thorax', 'upper_limb'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
          {
            id: 'lymphatic.nodes.mediastinal',
            name: 'Mediastinal Nodes',
            latinName: 'Nodi Mediastinales',
            color: '#90d090',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'advanced',
          },
          {
            id: 'lymphatic.nodes.abdominal',
            name: 'Abdominal Nodes',
            latinName: 'Nodi Abdominales',
            color: '#90d090',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'common',
            complexityLevel: 'advanced',
          },
          {
            id: 'lymphatic.nodes.inguinal',
            name: 'Inguinal Nodes',
            latinName: 'Nodi Inguinales',
            color: '#90d090',
            bodyRegions: ['pelvis', 'lower_limb'],
            clinicalRelevance: 'essential',
            complexityLevel: 'intermediate',
          },
        ],
      },
      {
        id: 'lymphatic.vessels',
        name: 'Lymph Vessels',
        latinName: 'Vasa Lymphatica',
        color: '#70b070',
        defaultOpacity: 0.5,
        clinicalRelevance: 'specialized',
        complexityLevel: 'advanced',
        sublayers: [
          {
            id: 'lymphatic.vessels.thoracicduct',
            name: 'Thoracic Duct',
            latinName: 'Ductus Thoracicus',
            color: '#70b070',
            clinicalRelevance: 'common',
            complexityLevel: 'advanced',
          },
        ],
      },
      {
        id: 'lymphatic.organs',
        name: 'Lymphoid Organs',
        latinName: 'Organa Lymphoidea',
        color: '#60a060',
        clinicalRelevance: 'common',
        complexityLevel: 'intermediate',
        sublayers: [
          {
            id: 'lymphatic.organs.spleen',
            name: 'Spleen',
            latinName: 'Lien',
            color: '#800080',
            bodyRegions: ['abdomen'],
            clinicalRelevance: 'essential',
            complexityLevel: 'basic',
          },
          {
            id: 'lymphatic.organs.thymus',
            name: 'Thymus',
            latinName: 'Thymus',
            color: '#ffcccc',
            bodyRegions: ['thorax'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
          {
            id: 'lymphatic.organs.tonsils',
            name: 'Tonsils',
            latinName: 'Tonsillae',
            color: '#ff9999',
            bodyRegions: ['head', 'neck'],
            clinicalRelevance: 'common',
            complexityLevel: 'intermediate',
          },
        ],
      },
    ],
  },
];

// ============================================
// Clinical Scenario Presets
// ============================================

export const CLINICAL_PRESETS: ClinicalPreset[] = [
  {
    id: 'cardiac-exam',
    name: 'Cardiac Examination',
    description: 'Heart, coronary vessels, and cardiac conduction system',
    icon: 'heart',
    activeLayers: [
      'cardiovascular.heart',
      'cardiovascular.heart.chambers',
      'cardiovascular.heart.valves',
      'cardiovascular.heart.coronary',
      'cardiovascular.heart.conduction',
      'cardiovascular.arteries.aortic',
      'cardiovascular.veins.venacava',
      'skeletal.axial.ribcage',
    ],
    defaultOpacities: {
      'skeletal.axial.ribcage': 0.2,
    },
    recommendedView: {
      rotation: [0, -0.3, 0],
      zoom: 3,
    },
  },
  {
    id: 'neuro-exam',
    name: 'Neurological Examination',
    description: 'Brain, spinal cord, cranial nerves, and peripheral nerves',
    icon: 'brain',
    activeLayers: [
      'nervous.central.brain',
      'nervous.central.spinalcord',
      'nervous.cranial',
      'nervous.peripheral',
      'skeletal.axial.cranium',
      'skeletal.axial.spine',
    ],
    defaultOpacities: {
      'skeletal.axial.cranium': 0.15,
      'skeletal.axial.spine': 0.3,
    },
    recommendedView: {
      rotation: [0, 0, 0],
      zoom: 2.5,
    },
  },
  {
    id: 'abdominal-exam',
    name: 'Abdominal Examination',
    description: 'Digestive organs, liver, kidneys, and abdominal vessels',
    icon: 'stomach',
    activeLayers: [
      'organs.digestive',
      'organs.urinary',
      'cardiovascular.arteries.abdominal',
      'cardiovascular.veins.portal',
      'muscular.abdomen',
    ],
    defaultOpacities: {
      'muscular.abdomen': 0.3,
    },
    recommendedView: {
      rotation: [0.2, 0, 0],
      zoom: 2.8,
    },
  },
  {
    id: 'respiratory-exam',
    name: 'Respiratory Examination',
    description: 'Airways, lungs, and respiratory muscles',
    icon: 'lungs',
    activeLayers: [
      'organs.respiratory',
      'skeletal.axial.ribcage',
      'muscular.thorax.diaphragm',
      'muscular.thorax.intercostals',
    ],
    defaultOpacities: {
      'skeletal.axial.ribcage': 0.25,
    },
    recommendedView: {
      rotation: [0, 0, 0],
      zoom: 2.5,
    },
  },
  {
    id: 'musculoskeletal-upper',
    name: 'Upper Limb Musculoskeletal',
    description: 'Bones, muscles, and joints of the upper extremity',
    icon: 'arm',
    activeLayers: [
      'skeletal.appendicular.pectoral',
      'skeletal.appendicular.upperlimb',
      'muscular.upperlimb',
      'skeletal.joints',
    ],
    recommendedView: {
      rotation: [0, -0.5, 0],
      zoom: 3.5,
    },
  },
  {
    id: 'musculoskeletal-lower',
    name: 'Lower Limb Musculoskeletal',
    description: 'Bones, muscles, and joints of the lower extremity',
    icon: 'leg',
    activeLayers: [
      'skeletal.appendicular.pelvis',
      'skeletal.appendicular.lowerlimb',
      'muscular.lowerlimb',
      'skeletal.joints',
    ],
    recommendedView: {
      rotation: [0.2, 0, 0],
      zoom: 3,
    },
  },
  {
    id: 'spine-exam',
    name: 'Spinal Examination',
    description: 'Vertebral column, spinal cord, and paraspinal muscles',
    icon: 'spine',
    activeLayers: [
      'skeletal.axial.spine',
      'nervous.central.spinalcord',
      'muscular.back',
      'nervous.peripheral',
    ],
    defaultOpacities: {
      'muscular.back': 0.4,
    },
    recommendedView: {
      rotation: [0, Math.PI, 0],
      zoom: 3,
    },
  },
  {
    id: 'head-neck-exam',
    name: 'Head & Neck Examination',
    description: 'Cranial structures, thyroid, and cervical lymph nodes',
    icon: 'head',
    activeLayers: [
      'skeletal.axial.cranium',
      'skeletal.axial.facial',
      'nervous.central.brain',
      'nervous.cranial',
      'organs.endocrine.thyroid',
      'lymphatic.nodes.cervical',
      'cardiovascular.arteries.head',
      'cardiovascular.veins.head',
    ],
    defaultOpacities: {
      'skeletal.axial.cranium': 0.2,
    },
    recommendedView: {
      rotation: [0, 0, 0],
      zoom: 2,
    },
  },
  {
    id: 'vascular-full',
    name: 'Vascular System Overview',
    description: 'Complete arterial and venous system',
    icon: 'vessel',
    activeLayers: [
      'cardiovascular.heart',
      'cardiovascular.arteries',
      'cardiovascular.veins',
    ],
    recommendedView: {
      rotation: [0, 0, 0],
      zoom: 4,
    },
  },
  {
    id: 'lymphatic-full',
    name: 'Lymphatic System',
    description: 'Lymph nodes, vessels, and lymphoid organs',
    icon: 'lymph',
    activeLayers: [
      'lymphatic',
    ],
    recommendedView: {
      rotation: [0, 0, 0],
      zoom: 4,
    },
  },
  {
    id: 'emergency-trauma',
    name: 'Trauma Assessment',
    description: 'Key structures for trauma evaluation',
    icon: 'emergency',
    activeLayers: [
      'skeletal',
      'cardiovascular.heart',
      'cardiovascular.arteries.aortic',
      'organs.respiratory.lungs',
      'organs.digestive.liver',
      'organs.digestive.spleen',
      'nervous.central.brain',
      'nervous.central.spinalcord',
    ],
    defaultOpacities: {
      'integumentary': 0.1,
    },
    recommendedView: {
      rotation: [0, 0, 0],
      zoom: 5,
    },
  },
  {
    id: 'student-basic',
    name: 'Basic Anatomy Overview',
    description: 'Essential structures for anatomy students',
    icon: 'study',
    activeLayers: [
      'skeletal.axial',
      'skeletal.appendicular',
      'cardiovascular.heart',
      'cardiovascular.arteries.aortic',
      'nervous.central.brain',
      'nervous.central.spinalcord',
      'organs.respiratory.lungs',
      'organs.digestive.stomach',
      'organs.digestive.liver',
      'organs.urinary.kidneys',
    ],
  },
];

// ============================================
// Helper Functions
// ============================================

/**
 * Flatten layer hierarchy for easy lookup
 */
export function flattenLayers(
  layers: EnhancedLayerDefinition[],
  parentId?: string
): EnhancedLayerDefinition[] {
  const result: EnhancedLayerDefinition[] = [];

  for (const layer of layers) {
    result.push(layer);
    if (layer.sublayers) {
      result.push(...flattenLayers(layer.sublayers, layer.id));
    }
  }

  return result;
}

/**
 * Get all layer IDs (including nested)
 */
export function getAllLayerIds(layers: EnhancedLayerDefinition[]): string[] {
  const flat = flattenLayers(layers);
  return flat.map(l => l.id);
}

/**
 * Filter layers by body region
 */
export function filterLayersByRegion(
  layers: EnhancedLayerDefinition[],
  regions: BodyRegion[]
): EnhancedLayerDefinition[] {
  return layers.filter(layer => {
    if (!layer.bodyRegions) return true;
    return layer.bodyRegions.some(r => regions.includes(r));
  }).map(layer => ({
    ...layer,
    sublayers: layer.sublayers
      ? filterLayersByRegion(layer.sublayers, regions)
      : undefined,
  }));
}

/**
 * Filter layers by clinical relevance
 */
export function filterLayersByRelevance(
  layers: EnhancedLayerDefinition[],
  relevance: ClinicalRelevance[]
): EnhancedLayerDefinition[] {
  return layers.filter(layer => {
    if (!layer.clinicalRelevance) return true;
    return relevance.includes(layer.clinicalRelevance);
  }).map(layer => ({
    ...layer,
    sublayers: layer.sublayers
      ? filterLayersByRelevance(layer.sublayers, relevance)
      : undefined,
  }));
}

/**
 * Filter layers by complexity level (show layers up to specified level)
 */
export function filterLayersByComplexity(
  layers: EnhancedLayerDefinition[],
  maxLevel: ComplexityLevel
): EnhancedLayerDefinition[] {
  const levelOrder: ComplexityLevel[] = ['basic', 'intermediate', 'advanced', 'expert'];
  const maxIndex = levelOrder.indexOf(maxLevel);

  return layers.filter(layer => {
    if (!layer.complexityLevel) return true;
    return levelOrder.indexOf(layer.complexityLevel) <= maxIndex;
  }).map(layer => ({
    ...layer,
    sublayers: layer.sublayers
      ? filterLayersByComplexity(layer.sublayers, maxLevel)
      : undefined,
  }));
}

/**
 * Search layers by name or latin name
 */
export function searchLayers(
  layers: EnhancedLayerDefinition[],
  searchTerm: string
): EnhancedLayerDefinition[] {
  const term = searchTerm.toLowerCase();

  return layers.filter(layer => {
    const nameMatch = layer.name.toLowerCase().includes(term);
    const latinMatch = layer.latinName?.toLowerCase().includes(term);
    const descMatch = layer.description?.toLowerCase().includes(term);
    const sublayerMatch = layer.sublayers
      ? searchLayers(layer.sublayers, searchTerm).length > 0
      : false;

    return nameMatch || latinMatch || descMatch || sublayerMatch;
  }).map(layer => ({
    ...layer,
    sublayers: layer.sublayers
      ? searchLayers(layer.sublayers, searchTerm)
      : undefined,
  }));
}

/**
 * Apply all filters
 */
export function filterLayers(
  layers: EnhancedLayerDefinition[],
  options: LayerFilterOptions
): EnhancedLayerDefinition[] {
  let result = layers;

  if (options.bodyRegions?.length) {
    result = filterLayersByRegion(result, options.bodyRegions);
  }

  if (options.clinicalRelevance?.length) {
    result = filterLayersByRelevance(result, options.clinicalRelevance);
  }

  if (options.complexityLevel) {
    result = filterLayersByComplexity(result, options.complexityLevel);
  }

  if (options.searchTerm) {
    result = searchLayers(result, options.searchTerm);
  }

  return result;
}

/**
 * Get layers for a clinical preset
 */
export function getPresetLayers(preset: ClinicalPreset): Set<string> {
  const layers = new Set<string>();

  for (const layerId of preset.activeLayers) {
    layers.add(layerId);

    // Add parent layers
    const parts = layerId.split('.');
    for (let i = 1; i < parts.length; i++) {
      layers.add(parts.slice(0, i).join('.'));
    }
  }

  return layers;
}

/**
 * Get default opacity for a layer from a preset
 */
export function getPresetOpacity(preset: ClinicalPreset, layerId: string): number | undefined {
  return preset.defaultOpacities?.[layerId];
}

export default {
  layers: ENHANCED_ANATOMICAL_LAYERS,
  presets: CLINICAL_PRESETS,
};
