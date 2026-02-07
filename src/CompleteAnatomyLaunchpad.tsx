import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Grid, Html } from '@react-three/drei';
import * as THREE from 'three';
import { type DashboardData } from './App';

interface CompleteAnatomyLaunchpadProps {
  onBack: () => void;
  onLearn?: (regionId: string, moduleId?: string) => void;
  onViewLabs?: (regionId: string) => void;
  dashboardData: DashboardData | null;
}

// Body region definitions with anatomical accuracy
export type BodySystem = 'integumentary' | 'skeletal' | 'muscular' | 'nervous' | 'cardiovascular' | 'respiratory' | 'digestive' | 'urinary' | 'endocrine' | 'reproductive' | 'lymphatic';

// Layer type for dissection mode - maps to anatomical depth
export type LayerType = 'skin' | 'fat' | 'muscle' | 'bone' | 'organ';

// Layer assignment interface for body regions
export interface LayerAssignment {
  primary: LayerType;
  // All layers that this region participates in (for proper dissection)
  layers: LayerType[];
}

export interface BodyRegion {
  id: string;
  name: string;
  latinName: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
  geometry: 'capsule' | 'sphere' | 'box' | 'cylinder' | 'torso' | 'head' | 'joint';
  systems: BodySystem[];
  description: string;
  commonConditions: string[];
  keyStructures: string[];
  layer: LayerType;
  layers: LayerType[]; // All layers this region belongs to
  relatedModules: string[];
  educationalContentId?: string;
}

// Enhanced body regions with better anatomical accuracy
export const BODY_REGIONS: BodyRegion[] = [
  // HEAD & NECK
  {
    id: 'head',
    name: 'Head',
    latinName: 'Caput',
    position: [0, 1.55, 0],
    scale: [0.22, 0.26, 0.24],
    geometry: 'head',
    systems: ['nervous', 'integumentary', 'skeletal'],
    description: 'Contains the brain, sensory organs, and cranial structures',
    commonConditions: ['Migraine', 'Tension headache', 'Sinusitis', 'Vertigo', 'Tinnitus'],
    keyStructures: ['Brain', 'Eyes', 'Ears', 'Nose', 'Mouth', 'Skull'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone', 'organ'],
    relatedModules: ['neurology', 'ophthalmology', 'ent'],
  },
  {
    id: 'neck',
    name: 'Neck',
    latinName: 'Collum',
    position: [0, 1.28, 0],
    scale: [0.12, 0.18, 0.12],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous', 'lymphatic'],
    description: 'Connects head to torso; contains cervical spine and major vessels',
    commonConditions: ['Cervical strain', 'Thyroid disorders', 'Lymphadenopathy'],
    keyStructures: ['Cervical spine', 'Trachea', 'Thyroid', 'Carotid arteries', 'Jugular veins'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['endocrinology', 'orthopedics'],
  },

  // TORSO
  {
    id: 'chest',
    name: 'Chest',
    latinName: 'Thorax',
    position: [0, 0.85, 0.02],
    scale: [0.38, 0.42, 0.28],
    geometry: 'torso',
    systems: ['cardiovascular', 'respiratory', 'skeletal', 'muscular'],
    description: 'Houses heart, lungs, and major vessels protected by the rib cage',
    commonConditions: ['Hypertension', 'Asthma', 'COPD', 'Pneumonia', 'Angina', 'GERD'],
    keyStructures: ['Heart', 'Lungs', 'Ribs', 'Sternum', 'Thoracic spine'],
    layer: 'organ',
    layers: ['skin', 'fat', 'muscle', 'bone', 'organ'],
    relatedModules: ['cardiology', 'pulmonology'],
  },
  {
    id: 'thoracicSpine',
    name: 'Thoracic Spine',
    latinName: 'Columna thoracica',
    position: [0, 0.85, -0.15],
    scale: [0.25, 0.45, 0.12],
    geometry: 'capsule',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: '12 vertebrae (T1-T12) forming the mid-back',
    commonConditions: ['Thoracic outlet syndrome', 'Scoliosis', 'Kyphosis', 'Disc herniation'],
    keyStructures: ['Vertebrae T1-T12', 'Spinal cord', 'Intercostal nerves'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'neurology'],
  },
  {
    id: 'lumbarSpine',
    name: 'Lumbar Spine',
    latinName: 'Columna lumbalis',
    position: [0, 0.25, -0.12],
    scale: [0.28, 0.35, 0.12],
    geometry: 'capsule',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: '5 vertebrae (L1-L5), most common source of back pain',
    commonConditions: ['Low back pain', 'Lumbar disc herniation', 'Spinal stenosis', 'Sciatica'],
    keyStructures: ['Vertebrae L1-L5', 'Cauda equina', 'Sciatic nerve', 'Psoas muscle'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'neurology'],
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    latinName: 'Abdomen',
    position: [0, 0.25, 0.03],
    scale: [0.35, 0.45, 0.3],
    geometry: 'torso',
    systems: ['digestive', 'urinary', 'endocrine'],
    description: 'Contains digestive organs, kidneys, and endocrine glands',
    commonConditions: ['Diabetes', 'GERD', 'IBS', 'Kidney disease', 'Liver disease', 'Gallstones'],
    keyStructures: ['Stomach', 'Liver', 'Kidneys', 'Pancreas', 'Intestines', 'Gallbladder'],
    layer: 'organ',
    layers: ['skin', 'fat', 'muscle', 'bone', 'organ'],
    relatedModules: ['gastroenterology', 'endocrinology', 'nephrology'],
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    latinName: 'Pelvis',
    position: [0, -0.32, 0.02],
    scale: [0.32, 0.22, 0.28],
    geometry: 'torso',
    systems: ['reproductive', 'urinary', 'skeletal', 'digestive'],
    description: 'Bony basin containing reproductive organs, bladder, and rectum',
    commonConditions: ['UTI', 'Prostatitis', 'Endometriosis', 'Hemorrhoids'],
    keyStructures: ['Bladder', 'Reproductive organs', 'Rectum', 'Hip bones', 'Sacrum'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone', 'organ'],
    relatedModules: ['obgyn', 'urology'],
  },

  // SHOULDER JOINTS
  {
    id: 'leftShoulder',
    name: 'Left Shoulder',
    latinName: 'Articulatio glenohumeralis sinistra',
    position: [-0.42, 1.05, 0],
    scale: [0.14, 0.14, 0.14],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting arm to torso',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  {
    id: 'rightShoulder',
    name: 'Right Shoulder',
    latinName: 'Articulatio glenohumeralis dextra',
    position: [0.42, 1.05, 0],
    scale: [0.14, 0.14, 0.14],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting arm to torso',
    commonConditions: ['Rotator cuff tear', 'Frozen shoulder', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus head', 'Scapula', 'Clavicle', 'Rotator cuff muscles'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // ARMS
  {
    id: 'leftArm',
    name: 'Left Arm',
    latinName: 'Brachium sinistrum',
    position: [-0.48, 0.65, 0],
    scale: [0.11, 0.45, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous', 'cardiovascular'],
    description: 'Upper extremity from shoulder to elbow',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    keyStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },
  {
    id: 'rightArm',
    name: 'Right Arm',
    latinName: 'Brachium dextrum',
    position: [0.48, 0.65, 0],
    scale: [0.11, 0.45, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous', 'cardiovascular'],
    description: 'Upper extremity from shoulder to elbow',
    commonConditions: ['Biceps tendonitis', 'Humerus fracture', 'Triceps strain'],
    keyStructures: ['Humerus', 'Biceps', 'Triceps', 'Brachial artery', 'Median nerve'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },

  // ELBOW JOINTS
  {
    id: 'leftElbow',
    name: 'Left Elbow',
    latinName: 'Articulatio cubiti sinistra',
    position: [-0.5, 0.35, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting upper arm to forearm',
    commonConditions: ['Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  {
    id: 'rightElbow',
    name: 'Right Elbow',
    latinName: 'Articulatio cubiti dextra',
    position: [0.5, 0.35, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting upper arm to forearm',
    commonConditions: ['Golfer\'s elbow', 'Bursitis', 'Arthritis'],
    keyStructures: ['Humerus', 'Radius', 'Ulna', 'Biceps tendon'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // FOREARMS
  {
    id: 'leftForearm',
    name: 'Left Forearm',
    latinName: 'Antebrachium sinistrum',
    position: [-0.5, 0.0, 0],
    scale: [0.1, 0.4, 0.1],
    rotation: [0, 0, 0.05],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From elbow to wrist containing radius and ulna',
    commonConditions: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
    keyStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },
  {
    id: 'rightForearm',
    name: 'Right Forearm',
    latinName: 'Antebrachium dextrum',
    position: [0.5, 0.0, 0],
    scale: [0.1, 0.4, 0.1],
    rotation: [0, 0, -0.05],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From elbow to wrist containing radius and ulna',
    commonConditions: ['Wrist fracture', 'Compartment syndrome', 'Radial nerve palsy'],
    keyStructures: ['Radius', 'Ulna', 'Forearm flexors', 'Radial nerve'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },

  // WRIST JOINTS
  {
    id: 'leftWrist',
    name: 'Left Wrist',
    latinName: 'Articulatio radiocarpalis sinistra',
    position: [-0.52, -0.22, 0],
    scale: [0.07, 0.07, 0.07],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex joint connecting forearm to hand',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture'],
    keyStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  {
    id: 'rightWrist',
    name: 'Right Wrist',
    latinName: 'Articulatio radiocarpalis dextra',
    position: [0.52, -0.22, 0],
    scale: [0.07, 0.07, 0.07],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex joint connecting forearm to hand',
    commonConditions: ['Sprain', 'Arthritis', 'Fracture'],
    keyStructures: ['Radius', 'Ulna', 'Carpal bones', 'Transverse ligament'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },

  // HANDS
  {
    id: 'leftHand',
    name: 'Left Hand',
    latinName: 'Manus sinistra',
    position: [-0.52, -0.35, 0],
    scale: [0.12, 0.12, 0.04],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 27 bones for manipulation',
    commonConditions: ['Trigger finger', 'Arthritis', 'De Quervain\'s'],
    keyStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },
  {
    id: 'rightHand',
    name: 'Right Hand',
    latinName: 'Manus dextra',
    position: [0.52, -0.35, 0],
    scale: [0.12, 0.12, 0.04],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 27 bones for manipulation',
    commonConditions: ['Trigger finger', 'Arthritis', 'De Quervain\'s'],
    keyStructures: ['Carpal bones', 'Metacarpals', 'Phalanges', 'Thenar muscles'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'rheumatology'],
  },

  // HIP JOINTS
  {
    id: 'leftHip',
    name: 'Left Hip',
    latinName: 'Articulatio coxae sinistra',
    position: [-0.22, -0.35, 0],
    scale: [0.16, 0.16, 0.16],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting leg to pelvis',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    keyStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },
  {
    id: 'rightHip',
    name: 'Right Hip',
    latinName: 'Articulatio coxae dextra',
    position: [0.22, -0.35, 0],
    scale: [0.16, 0.16, 0.16],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Ball-and-socket joint connecting leg to pelvis',
    commonConditions: ['Hip osteoarthritis', 'Bursitis', 'Labral tear', 'Hip fracture'],
    keyStructures: ['Femoral head', 'Acetabulum', 'Hip muscles', 'Sciatic nerve'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },

  // THIGHS
  {
    id: 'leftThigh',
    name: 'Left Thigh',
    latinName: 'Femur sinistrum',
    position: [-0.2, -0.75, 0],
    scale: [0.14, 0.5, 0.14],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'cardiovascular'],
    description: 'Upper leg containing the femur and major muscle groups',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    keyStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  {
    id: 'rightThigh',
    name: 'Right Thigh',
    latinName: 'Femur dextrum',
    position: [0.2, -0.75, 0],
    scale: [0.14, 0.5, 0.14],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'cardiovascular'],
    description: 'Upper leg containing the femur and major muscle groups',
    commonConditions: ['Quadriceps strain', 'Hamstring tear', 'Compartment syndrome'],
    keyStructures: ['Femur', 'Quadriceps', 'Hamstrings', 'Femoral artery'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // KNEE JOINTS
  {
    id: 'leftKnee',
    name: 'Left Knee',
    latinName: 'Articulatio genus sinistra',
    position: [-0.18, -1.08, 0],
    scale: [0.13, 0.13, 0.13],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting thigh to lower leg',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    keyStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  {
    id: 'rightKnee',
    name: 'Right Knee',
    latinName: 'Articulatio genus dextra',
    position: [0.18, -1.08, 0],
    scale: [0.13, 0.13, 0.13],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting thigh to lower leg',
    commonConditions: ['ACL tear', 'Meniscus tear', 'Osteoarthritis', 'Bursitis'],
    keyStructures: ['Femoral condyles', 'Tibial plateau', 'Patella', 'Menisci', 'Ligaments'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // LOWER LEGS
  {
    id: 'leftLeg',
    name: 'Left Lower Leg',
    latinName: 'Crus sinistrum',
    position: [-0.18, -1.45, 0],
    scale: [0.11, 0.4, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From knee to ankle containing tibia and fibula',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    keyStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },
  {
    id: 'rightLeg',
    name: 'Right Lower Leg',
    latinName: 'Crus dextrum',
    position: [0.18, -1.45, 0],
    scale: [0.11, 0.4, 0.11],
    geometry: 'capsule',
    systems: ['muscular', 'skeletal', 'nervous'],
    description: 'From knee to ankle containing tibia and fibula',
    commonConditions: ['Shin splints', 'Stress fracture', 'Achilles tendonitis'],
    keyStructures: ['Tibia', 'Fibula', 'Gastrocnemius', 'Soleus', 'Tibial nerve'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics'],
  },

  // ANKLE JOINTS
  {
    id: 'leftAnkle',
    name: 'Left Ankle',
    latinName: 'Articulatio talocruralis sinistra',
    position: [-0.18, -1.72, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting lower leg to foot',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    keyStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  {
    id: 'rightAnkle',
    name: 'Right Ankle',
    latinName: 'Articulatio talocruralis dextra',
    position: [0.18, -1.72, 0],
    scale: [0.09, 0.09, 0.09],
    geometry: 'joint',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Hinge joint connecting lower leg to foot',
    commonConditions: ['Sprain', 'Achilles tendonitis', 'Arthritis', 'Fracture'],
    keyStructures: ['Tibia', 'Fibula', 'Talus', 'Calcaneus'],
    layer: 'bone',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },

  // FEET
  {
    id: 'leftFoot',
    name: 'Left Foot',
    latinName: 'Pes sinister',
    position: [-0.18, -1.85, 0.08],
    scale: [0.11, 0.08, 0.22],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 26 bones for weight-bearing and locomotion',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    keyStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
  {
    id: 'rightFoot',
    name: 'Right Foot',
    latinName: 'Pes dexter',
    position: [0.18, -1.85, 0.08],
    scale: [0.11, 0.08, 0.22],
    geometry: 'box',
    systems: ['skeletal', 'muscular', 'nervous'],
    description: 'Complex structure with 26 bones for weight-bearing and locomotion',
    commonConditions: ['Plantar fasciitis', 'Ankle sprain', 'Achilles rupture', 'Bunions'],
    keyStructures: ['Tarsals', 'Metatarsals', 'Phalanges', 'Plantar fascia'],
    layer: 'muscle',
    layers: ['skin', 'fat', 'muscle', 'bone'],
    relatedModules: ['orthopedics', 'sports-medicine'],
  },
];

// Quiz question type
interface QuizQuestion {
  id: string;
  question: string;
  targetRegionId: string;
  hint?: string;
}

// Quiz state type
type QuizState = 'idle' | 'asking' | 'correct' | 'incorrect' | 'complete';

// Generate quiz questions from body regions
const generateQuizQuestions = (): QuizQuestion[] => {
  const questions: QuizQuestion[] = [
    { id: 'q1', question: 'Click the heart', targetRegionId: 'chest', hint: 'Located in the center of the chest' },
    { id: 'q2', question: 'Click the brain', targetRegionId: 'head', hint: 'Protected by the skull' },
    { id: 'q3', question: 'Click the knee', targetRegionId: 'leftKnee', hint: 'A hinge joint in the leg' },
    { id: 'q4', question: 'Click the shoulder', targetRegionId: 'rightShoulder', hint: 'Ball-and-socket joint' },
    { id: 'q5', question: 'Click the stomach', targetRegionId: 'abdomen', hint: 'In the upper abdomen' },
    { id: 'q6', question: 'Click the hand', targetRegionId: 'leftHand', hint: 'Has 27 bones' },
    { id: 'q7', question: 'Click the hip', targetRegionId: 'rightHip', hint: 'Ball-and-socket joint connecting leg to pelvis' },
    { id: 'q8', question: 'Click the neck', targetRegionId: 'neck', hint: 'Connects head to torso' },
  ];
  return questions.sort(() => Math.random() - 0.5); // Shuffle
};
const SYSTEM_TO_SPECIALTY: Partial<Record<BodySystem, string>> = {
  cardiovascular: 'cardiology',
  respiratory: 'pulmonology',
  digestive: 'gastroenterology',
  endocrine: 'endocrinology',
  nervous: 'neurology',
  muscular: 'orthopedics',
  skeletal: 'orthopedics',
  urinary: 'nephrology',
  reproductive: 'obgyn',
};

// Region to educational module mapping
const REGION_MODULES: Record<string, string[]> = {
  head: ['neurology', 'ophthalmology', 'ent'],
  neck: ['endocrinology', 'orthopedics'],
  chest: ['cardiology', 'pulmonology'],
  thoracicSpine: ['orthopedics', 'neurology'],
  lumbarSpine: ['orthopedics', 'neurology'],
  abdomen: ['gastroenterology', 'endocrinology', 'nephrology'],
  pelvis: ['obgyn', 'urology'],
  leftShoulder: ['orthopedics', 'sports-medicine'],
  rightShoulder: ['orthopedics', 'sports-medicine'],
  leftArm: ['orthopedics'],
  rightArm: ['orthopedics'],
  leftForearm: ['orthopedics'],
  rightForearm: ['orthopedics'],
  leftHand: ['orthopedics', 'rheumatology'],
  rightHand: ['orthopedics', 'rheumatology'],
  leftHip: ['orthopedics'],
  rightHip: ['orthopedics'],
  leftThigh: ['orthopedics', 'sports-medicine'],
  rightThigh: ['orthopedics', 'sports-medicine'],
  leftKnee: ['orthopedics', 'sports-medicine'],
  rightKnee: ['orthopedics', 'sports-medicine'],
  leftLeg: ['orthopedics'],
  rightLeg: ['orthopedics'],
  leftFoot: ['orthopedics', 'sports-medicine'],
  rightFoot: ['orthopedics', 'sports-medicine'],
};
export const SYSTEM_COLORS: Record<BodySystem, string> = {
  integumentary: '#f4d7c4',  // Skin tone
  skeletal: '#e8e4dc',       // Bone white
  muscular: '#c44d4d',       // Muscle red
  nervous: '#4a90d9',        // Nerve blue
  cardiovascular: '#c41e3a', // Heart red
  respiratory: '#87ceeb',    // Lung blue
  digestive: '#daa520',      // Stomach gold
  urinary: '#9370db',        // Kidney purple
  endocrine: '#ff69b4',      // Hormone pink
  reproductive: '#20b2aa',   // Teal
  lymphatic: '#90ee90',      // Light green
};

// Layer colors for dissection mode
export const LAYER_COLORS: Record<string, string> = {
  skin: '#f4d7c4',
  fat: '#fff8dc',
  muscle: '#c44d4d',
  bone: '#e8e4dc',
  organ: '#ff9999',
};

// System visibility type
type SystemVisibility = Record<BodySystem, boolean>;

// ============================================================================
// ENHANCED 3D GEOMETRY COMPONENTS
// ============================================================================

// Anatomically accurate torso shape
function TorsoGeometry({ scale }: { scale: [number, number, number] }) {
  // Create a custom torso-like shape using a rounded box approach
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Create chest profile
    s.moveTo(0, 0.5);
    s.bezierCurveTo(0.3, 0.5, 0.4, 0.3, 0.4, 0);
    s.bezierCurveTo(0.4, -0.3, 0.3, -0.5, 0, -0.5);
    s.bezierCurveTo(-0.3, -0.5, -0.4, -0.3, -0.4, 0);
    s.bezierCurveTo(-0.4, 0.3, -0.3, 0.5, 0, 0.5);
    return s;
  }, []);

  const config = useMemo(() => ({
    depth: 0.6,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  }), []);

  return (
    <group scale={scale}>
      <mesh>
        <extrudeGeometry args={[shape, config]} />
      </mesh>
    </group>
  );
}

// Anatomically accurate head shape
function HeadGeometry({ scale }: { scale: [number, number, number] }) {
  return (
    <group scale={scale}>
      {/* Main skull */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
      </mesh>
      {/* Jaw/chin */}
      <mesh position={[0, -0.3, 0.1]}>
        <sphereGeometry args={[0.35, 24, 24]} />
      </mesh>
      {/* Neck connection */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.3, 16]} />
      </mesh>
    </group>
  );
}

// Joint articulation with visible joint structure
function JointGeometry({ scale, isSelected, isHovered }: { scale: [number, number, number]; isSelected: boolean; isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && isHovered) {
      // Subtle pulse when hovered
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.05;
      groupRef.current.scale.setScalar(pulse);
    } else if (groupRef.current) {
      groupRef.current.scale.setScalar(1);
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main joint sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
      </mesh>
      {/* Joint highlight ring */}
      {(isSelected || isHovered) && (
        <mesh>
          <torusGeometry args={[0.55, 0.02, 8, 32]} />
          <meshBasicMaterial color={isSelected ? '#22ff44' : '#4488ff'} transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

// ============================================================================
// BODY PART MESH COMPONENT
// ============================================================================

interface BodyPartMeshProps {
  region: BodyRegion;
  isHovered: boolean;
  isSelected: boolean;
  visibleSystems: SystemVisibility;
  layerDepth: number;
  clippingPlanes: THREE.Plane[];
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
}

function BodyPartMesh({ 
  region, 
  isHovered, 
  isSelected, 
  visibleSystems, 
  layerDepth,
  clippingPlanes,
  onPointerOver, 
  onPointerOut, 
  onClick 
}: BodyPartMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const [targetOpacity, setTargetOpacity] = useState(1);

  // Determine visibility based on layer depth with smooth transition
  useEffect(() => {
    const layerOrder: LayerType[] = ['skin', 'fat', 'muscle', 'bone', 'organ'];
    
    // Calculate max visible layer based on slider position
    const maxVisibleLayer = Math.floor((layerDepth / 100) * layerOrder.length);
    const layerProgress = (layerDepth / 100) * layerOrder.length - maxVisibleLayer;
    
    // Find the primary layer index
    const primaryLayerIndex = layerOrder.indexOf(region.layer);
    
    // Check if region has any visible layers
    const hasVisibleLayer = region.layers.some(layer => {
      const layerIndex = layerOrder.indexOf(layer);
      if (layerIndex < maxVisibleLayer) return true;
      if (layerIndex === maxVisibleLayer && layerProgress >= 0.3) return true;
      return false;
    });
    
    if (!hasVisibleLayer) {
      setTargetOpacity(0);
    } else if (primaryLayerIndex === maxVisibleLayer && layerProgress < 1) {
      // Fading out the current layer
      setTargetOpacity(0.3 + layerProgress * 0.6);
    } else if (primaryLayerIndex > maxVisibleLayer) {
      // Primary layer is beyond visibility - use secondary visible layer opacity
      const visibleLayers = region.layers.filter(layer => {
        const layerIndex = layerOrder.indexOf(layer);
        return layerIndex <= maxVisibleLayer;
      });
      if (visibleLayers.length > 0) {
        // Show with reduced opacity when showing through dissection
        setTargetOpacity(0.5 + layerProgress * 0.3);
      } else {
        setTargetOpacity(0);
      }
    } else {
      setTargetOpacity(1);
    }
  }, [layerDepth, region.layer, region.layers]);

  // Smooth opacity animation
  useFrame(() => {
    if (materialRef.current) {
      const currentOpacity = materialRef.current.opacity;
      const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;
      if (Math.abs(newOpacity - currentOpacity) > 0.001) {
        materialRef.current.opacity = newOpacity;
        materialRef.current.transparent = newOpacity < 0.95;
      }
    }
  });

  // Determine primary system for coloring
  const primarySystem = region.systems[0];
  const baseColor = SYSTEM_COLORS[primarySystem];

  // Calculate system visibility
  const systemVisible = region.systems.some(sys => visibleSystems[sys]);

  // Highlight effects
  let emissiveColor = '#000000';
  let emissiveIntensity = 0;

  if (isSelected) {
    emissiveColor = '#22ff44';
    emissiveIntensity = 0.4;
  } else if (isHovered) {
    emissiveColor = '#4488ff';
    emissiveIntensity = 0.3;
  }

  if (targetOpacity <= 0.01) return null;
  const renderGeometry = () => {
    switch (region.geometry) {
      case 'head':
        return <HeadGeometry scale={[1, 1, 1]} />;
      case 'torso':
        return <torsoShape scale={region.scale} />;
      case 'joint':
        return <JointGeometry scale={[1, 1, 1]} isSelected={isSelected} isHovered={isHovered} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.5, 0.5, 1, 16]} />;
      case 'capsule':
      default:
        return <capsuleGeometry args={[0.5, 1, 8, 16]} />;
    }
  };

  // For torso, use a custom rounded shape
  const torsoShape = useMemo(() => {
    if (region.geometry !== 'torso') return null;
    return (
      <mesh>
        <capsuleGeometry args={[0.5, 1.2, 8, 16]} />
      </mesh>
    );
  }, [region.geometry]);

  if (targetOpacity <= 0.01) return null;

  return (
    <group
      position={region.position}
      rotation={region.rotation || [0, 0, 0]}
    >
      {region.geometry === 'head' && (
        <HeadGeometry scale={region.scale} />
      )}
      {region.geometry === 'joint' && (
        <JointGeometry 
          scale={region.scale} 
          isSelected={isSelected} 
          isHovered={isHovered} 
        />
      )}
      {(region.geometry === 'capsule' || region.geometry === 'torso') && (
        <mesh
          ref={meshRef}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <capsuleGeometry args={[0.5, 1, 8, 16]} />
          <meshStandardMaterial
            ref={materialRef}
            color={baseColor}
            roughness={0.5}
            metalness={0.1}
            emissive={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            transparent={true}
            opacity={targetOpacity}
            clippingPlanes={clippingPlanes}
            clipShadows={true}
          />
        </mesh>
      )}
      {region.geometry === 'box' && (
        <mesh
          ref={meshRef}
          scale={region.scale}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            ref={materialRef}
            color={baseColor}
            roughness={0.5}
            metalness={0.1}
            emissive={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            transparent={true}
            opacity={targetOpacity}
            clippingPlanes={clippingPlanes}
            clipShadows={true}
          />
        </mesh>
      )}
      {region.geometry === 'sphere' && (
        <mesh
          ref={meshRef}
          scale={region.scale}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            ref={materialRef}
            color={baseColor}
            roughness={0.5}
            metalness={0.1}
            emissive={emissiveColor}
            emissiveIntensity={emissiveIntensity}
            transparent={true}
            opacity={targetOpacity}
            clippingPlanes={clippingPlanes}
            clipShadows={true}
          />
        </mesh>
      )}
    </group>
  );
}

// ============================================================================
// ENHANCED ANATOMY MODEL COMPONENT
// ============================================================================

interface AnatomyModelProps {
  hoveredRegion: string | null;
  selectedRegion: string | null;
  visibleSystems: SystemVisibility;
  layerDepth: number;
  showPins: boolean;
  showGrid: boolean;
  crossSectionMode: 'none' | 'sagittal' | 'coronal' | 'transverse';
  cutPosition: number;
  onHover: (regionId: string | null) => void;
  onSelect: (regionId: string) => void;
}

function AnatomyModel({ 
  hoveredRegion, 
  selectedRegion, 
  visibleSystems, 
  layerDepth,
  showPins,
  showGrid,
  crossSectionMode,
  cutPosition,
  onHover, 
  onSelect 
}: AnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, gl } = useThree();

  // Setup clipping planes
  const clippingPlanes = useMemo(() => {
    if (crossSectionMode === 'none') return [];
    
    let normal: THREE.Vector3;
    let constant: number;
    
    switch (crossSectionMode) {
      case 'sagittal': // Left/Right cut
        normal = new THREE.Vector3(1, 0, 0);
        constant = -cutPosition * 0.5;
        break;
      case 'coronal': // Front/Back cut
        normal = new THREE.Vector3(0, 0, 1);
        constant = -cutPosition * 0.5;
        break;
      case 'transverse': // Top/Bottom cut
        normal = new THREE.Vector3(0, 1, 0);
        constant = -cutPosition * 1.5;
        break;
      default:
        return [];
    }
    
    return [new THREE.Plane(normal, constant)];
  }, [crossSectionMode, cutPosition]);

  // Apply clipping planes to renderer
  useEffect(() => {
    gl.localClippingEnabled = crossSectionMode !== 'none';
    gl.clippingPlanes = clippingPlanes;
  }, [gl, clippingPlanes, crossSectionMode]);

  // Gentle idle rotation
  useFrame((state) => {
    if (groupRef.current && !selectedRegion) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  // Configure shadows
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group ref={groupRef}>
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Main directional light (sun-like) */}
      <directionalLight 
        position={[5, 10, 7]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.001}
      />
      
      {/* Fill light from opposite side */}
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={0.4} 
        color="#e0e8ff"
      />
      
      {/* Rim light for definition */}
      <spotLight
        position={[0, 5, -5]}
        intensity={0.6}
        angle={Math.PI / 4}
        penumbra={0.5}
        color="#ffffff"
      />

      {/* Grid Floor */}
      {showGrid && (
        <Grid
          position={[0, -2.5, 0]}
          args={[10, 10]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#4a90d9"
          sectionSize={2}
          sectionThickness={1}
          sectionColor="#2a6099"
          fadeDistance={15}
          fadeStrength={1}
          infiniteGrid
        />
      )}

      {/* Cut plane visualization */}
      {crossSectionMode !== 'none' && (
        <CutPlaneVisualizer mode={crossSectionMode} position={cutPosition} />
      )}

      {/* Body parts */}
      {BODY_REGIONS.map((region) => (
        <BodyPartMesh
          key={region.id}
          region={region}
          isHovered={hoveredRegion === region.id}
          isSelected={selectedRegion === region.id}
          visibleSystems={visibleSystems}
          layerDepth={layerDepth}
          clippingPlanes={clippingPlanes}
          onPointerOver={() => onHover(region.id)}
          onPointerOut={() => onHover(null)}
          onClick={() => onSelect(region.id)}
        />
      ))}

      {/* Contact shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={4}
        resolution={1024}
      />
    </group>
  );
}

// ============================================================================
// CUT PLANE VISUALIZER
// ============================================================================

interface CutPlaneVisualizerProps {
  mode: 'sagittal' | 'coronal' | 'transverse';
  position: number;
}

function CutPlaneVisualizer({ mode, position }: CutPlaneVisualizerProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Pulse animation for the cut plane
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  let planePosition: [number, number, number];
  let rotation: [number, number, number];

  switch (mode) {
    case 'sagittal':
      planePosition = [position * 0.5, 0, 0];
      rotation = [0, Math.PI / 2, 0];
      break;
    case 'coronal':
      planePosition = [0, 0, position * 0.5];
      rotation = [0, 0, 0];
      break;
    case 'transverse':
      planePosition = [0, position * 1.5, 0];
      rotation = [Math.PI / 2, 0, 0];
      break;
  }

  return (
    <group position={planePosition} rotation={rotation}>
      {/* Semi-transparent cut plane */}
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 4]} />
        <meshBasicMaterial 
          color="#4a9eff" 
          transparent 
          opacity={0.3} 
          side={THREE.DoubleSide}
          depthTest={false}
        />
      </mesh>
      
      {/* Cut line */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(3, 4)]} />
        <lineBasicMaterial color="#4a9eff" linewidth={2} />
      </lineSegments>
    </group>
  );
}

// ============================================================================
// PIN LABEL COMPONENT
// ============================================================================

interface PinLabelProps {
  region: BodyRegion;
  isVisible: boolean;
  isHovered: boolean;
  isSelected: boolean;
  showAll: boolean;
  primarySystem: BodySystem;
  layerDepth: number;
  onClick: () => void;
}

// Calculate accurate pin offset based on geometry type and scale
function calculatePinOffset(region: BodyRegion): number {
  const [sx, sy, sz] = region.scale;
  
  switch (region.geometry) {
    case 'head':
      // Head is roughly spherical, use average radius
      return Math.max(sx, sy, sz) * 0.6 + 0.1;
    case 'torso':
      // Torso is wider than tall, offset from side
      return sx * 0.6 + 0.15;
    case 'joint':
      // Joints are compact, smaller offset
      return Math.max(sx, sy, sz) * 0.5 + 0.08;
    case 'sphere':
      return Math.max(sx, sy, sz) * 0.55 + 0.1;
    case 'box':
      // For boxes, offset from the widest dimension
      return Math.max(sx, sy, sz) * 0.55 + 0.1;
    case 'cylinder':
      return Math.max(sx, sz) * 0.55 + 0.1;
    case 'capsule':
    default:
      // Capsule: offset from the radius (x/z) plus half height
      return Math.max(sx, sz) * 0.55 + 0.12;
  }
}

// Check if a region should be visible based on current layer depth
function isLayerVisible(regionLayers: BodyRegion['layers'], layerDepth: number): boolean {
  const layerOrder: LayerType[] = ['skin', 'fat', 'muscle', 'bone', 'organ'];
  const maxVisibleLayer = Math.floor((layerDepth / 100) * layerOrder.length);
  
  // Calculate fade progress for the boundary layer
  const layerProgress = (layerDepth / 100) * layerOrder.length - maxVisibleLayer;
  
  // Check if ANY of the region's layers are visible
  for (const regionLayer of regionLayers) {
    const currentLayerIndex = layerOrder.indexOf(regionLayer);
    
    // If completely beyond visible layers, skip
    if (currentLayerIndex > maxVisibleLayer) {
      continue;
    }
    
    // If at the boundary layer, apply fade threshold
    if (currentLayerIndex === maxVisibleLayer && layerProgress < 0.3) {
      continue;
    }
    
    // At least one layer is visible
    return true;
  }
  
  return false;
}

function PinLabel({ region, isVisible, isHovered, isSelected, showAll, primarySystem, layerDepth, onClick }: PinLabelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  // Make labels always face camera (billboard effect)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position);
    }
  });

  // Layer-aware visibility check - must be before early return for consistent hook order
  const layerVisible = isLayerVisible(region.layers, layerDepth);
  
  // Determine if pin should be shown
  const shouldShow = isVisible && layerVisible && (showAll || isHovered || isSelected);
  const opacity = isSelected ? 1 : isHovered ? 0.9 : showAll ? 0.7 : 0;
  
  // Calculate pin position with geometry-aware offset
  const pinOffset = calculatePinOffset(region);
  const pinPosition: [number, number, number] = [
    region.position[0] + pinOffset,
    region.position[1],
    region.position[2] + 0.1
  ];
  
  if (!shouldShow || opacity <= 0) return null;

  const systemColor = SYSTEM_COLORS[primarySystem];

  return (
    <group 
      ref={groupRef}
      position={pinPosition}
    >
      {/* Pin line connecting to body */}
      <mesh position={[-pinOffset/2, 0, 0]}>
        <cylinderGeometry args={[0.005, 0.005, pinOffset, 8]} rotation={[0, 0, Math.PI/2]} />
        <meshBasicMaterial color={systemColor} transparent opacity={opacity} />
      </mesh>
      
      {/* Pin head */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={systemColor} transparent opacity={opacity} />
      </mesh>

      {/* HTML Label */}
      <Html
        position={[0.08, 0, 0]}
        center={false}
        distanceFactor={8}
        style={{
          userSelect: 'none',
          pointerEvents: 'none', // FIX: Prevent label from blocking mouse events on 3D model
          transition: 'opacity 0.2s ease',
        }}
      >
        <div
          className={`pin-label ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
          style={{
            background: isSelected ? 'rgba(34, 255, 68, 0.9)' : 'rgba(0,0,0,0.85)',
            borderLeft: `3px solid ${systemColor}`,
            opacity: opacity,
            pointerEvents: 'auto', // Re-enable clicks on the label itself
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <span className="pin-name">{region.name}</span>
          <span className="pin-latin">{region.latinName}</span>
        </div>
      </Html>
    </group>
  );
}

// ============================================================================
// QUIZ PANEL COMPONENT
// ============================================================================

interface QuizPanelProps {
  isActive: boolean;
  currentQuestion: QuizQuestion | null;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  state: QuizState;
  onStart: () => void;
  onClose: () => void;
  onSkip: () => void;
}

function QuizPanel({ 
  isActive, 
  currentQuestion, 
  questionNumber, 
  totalQuestions, 
  score, 
  state,
  onStart, 
  onClose, 
  onSkip 
}: QuizPanelProps) {
  if (!isActive) return null;

  return (
    <div className="quiz-panel">
      <div className="quiz-header">
        <h4>🎯 Anatomy Quiz</h4>
        <button className="quiz-close" onClick={onClose}>×</button>
      </div>

      {state === 'idle' && (
        <div className="quiz-intro">
          <p>Test your anatomy knowledge!</p>
          <p className="quiz-description">
            Identify body regions as they are called out.
            {totalQuestions} questions, immediate feedback.
          </p>
          <button className="quiz-start-btn" onClick={onStart}>
            Start Quiz
          </button>
        </div>
      )}

      {(state === 'asking' || state === 'correct' || state === 'incorrect') && currentQuestion && (
        <div className="quiz-question">
          <div className="quiz-progress">
            <span>Question {questionNumber} of {totalQuestions}</span>
            <span className="quiz-score">Score: {score}/{questionNumber - (state === 'asking' ? 1 : 0)}</span>
          </div>

          <div className={`quiz-prompt ${state}`}>
            <h3>{currentQuestion.question}</h3>
            {state === 'asking' && currentQuestion.hint && (
              <p className="quiz-hint">💡 {currentQuestion.hint}</p>
            )}
            {state === 'correct' && (
              <div className="quiz-feedback correct">
                <span className="feedback-icon">✅</span>
                <span>Correct!</span>
              </div>
            )}
            {state === 'incorrect' && (
              <div className="quiz-feedback incorrect">
                <span className="feedback-icon">❌</span>
                <span>Try again!</span>
              </div>
            )}
          </div>

          <button className="quiz-skip" onClick={onSkip}>
            Skip →
          </button>
        </div>
      )}

      {state === 'complete' && (
        <div className="quiz-complete">
          <h3>🎉 Quiz Complete!</h3>
          <div className="final-score">
            <span className="score-number">{score}</span>
            <span className="score-total">/{totalQuestions}</span>
          </div>          <div className="score-percentage">
            {Math.round((score / totalQuestions) * 100)}% Correct
          </div>
          <button className="quiz-restart" onClick={onStart}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// SYSTEM TOGGLE COMPONENT
// ============================================================================

const DISPLAY_NAMES: Record<BodySystem, string> = {
  integumentary: 'Skin',
  skeletal: 'Skeleton',
  muscular: 'Muscles',
  nervous: 'Nervous',
  cardiovascular: 'Heart & Vessels',
  respiratory: 'Lungs',
  digestive: 'Digestive',
  urinary: 'Urinary',
  endocrine: 'Endocrine',
  reproductive: 'Reproductive',
  lymphatic: 'Lymphatic',
};

interface SystemToggleProps {
  system: BodySystem;
  color: string;
  isActive: boolean;
  onToggle: () => void;
}

function SystemToggle({ system, color, isActive, onToggle }: SystemToggleProps) {
  return (
    <button
      className={`system-toggle ${isActive ? 'active' : ''}`}
      onClick={onToggle}
      style={{ '--system-color': color } as React.CSSProperties}
    >
      <span className="system-dot" style={{ backgroundColor: color }} />
      <span className="system-name">{DISPLAY_NAMES[system]}</span>
    </button>
  );
}

// ============================================================================
// REGION INFO PANEL COMPONENT
// ============================================================================

interface RegionInfoPanelProps {
  region: BodyRegion;
  onClose: () => void;
  onLearn?: (regionId: string, moduleId?: string) => void;
  onViewLabs?: (regionId: string) => void;
  dashboardData: DashboardData | null;
}

function RegionInfoPanel({ region, onClose, onLearn, onViewLabs, dashboardData }: RegionInfoPanelProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'conditions' | 'structures' | 'education'>('overview');

  const userConditions = useMemo(() => {
    if (!dashboardData?.activeConditions) return [];
    const regionKeywords = region.commonConditions.map(c => c.toLowerCase());
    return dashboardData.activeConditions.filter(c =>
      regionKeywords.some(kw => c.name.toLowerCase().includes(kw.toLowerCase()))
    );
  }, [dashboardData, region]);

  const relevantLabs = useMemo(() => {
    if (!dashboardData?.recentLabs) return [];
    // Map body systems to common lab tests
    const systemLabMap: Record<string, string[]> = {
      cardiovascular: ['lipid', 'cholesterol', 'troponin', 'bnp'],
      endocrine: ['glucose', 'hba1c', 'tsh', 't3', 't4', 'insulin'],
      digestive: ['liver', 'ast', 'alt', 'bilirubin', 'amylase'],
      urinary: ['creatinine', 'bun', 'uric acid', 'egfr'],
      respiratory: ['oxygen', 'spo2'],
    };
    
    const relevantTests = region.systems.flatMap(sys => systemLabMap[sys] || []);
    return dashboardData.recentLabs.filter(lab =>
      relevantTests.some(test => lab.name.toLowerCase().includes(test.toLowerCase()))
    ).slice(0, 5);
  }, [dashboardData, region]);

  const recommendedModules = useMemo(() => {
    return REGION_MODULES[region.id] || [];
  }, [region.id]);

  const handleLearn = () => {
    // Use region's relatedModules if available, fallback to system-based mapping
    const specialty = region.relatedModules?.[0] || SYSTEM_TO_SPECIALTY[region.systems[0]];
    if (onLearn) {
      onLearn(region.id, specialty);
    }
  };

  const handleViewLabs = () => {
    if (onViewLabs) {
      onViewLabs(region.id);
    }
  };

  return (
    <div className="region-panel">
      <div className="region-panel-header">
        <div>
          <h2>{region.name}</h2>
          <span className="latin-name">{region.latinName}</span>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="region-tabs">
        <button
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'conditions' ? 'active' : ''}
          onClick={() => setActiveTab('conditions')}
        >
          Conditions
        </button>
        <button
          className={activeTab === 'structures' ? 'active' : ''}
          onClick={() => setActiveTab('structures')}
        >
          Structures
        </button>
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          Learn
        </button>
      </div>

      <div className="region-panel-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <p className="region-description">{region.description}</p>

            <div className="systems-list">
              <h4>Body Systems</h4>
              <div className="system-tags">
                {region.systems.map(sys => (
                  <span
                    key={sys}
                    className="system-tag"
                    style={{ backgroundColor: SYSTEM_COLORS[sys] }}
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>

            {userConditions.length > 0 && (
              <div className="user-conditions">
                <h4>Your Conditions</h4>
                <ul>
                  {userConditions.map(c => (
                    <li key={c.id} className={`condition-${c.status}`}>
                      {c.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relevantLabs.length > 0 && (
              <div className="user-labs">
                <h4>Relevant Labs</h4>
                <ul className="labs-mini-list">
                  {relevantLabs.map(lab => (
                    <li key={lab.id} className={`lab-${lab.status}`}>
                      <span className="lab-name-mini">{lab.name}</span>
                      <span className="lab-value-mini">{lab.value} {lab.unit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="quick-actions">
              <button className="action-btn primary" onClick={handleLearn}>
                📚 Learn About This Region
              </button>
              <button className="action-btn" onClick={handleViewLabs}>
                🔬 View Related Labs
              </button>
            </div>
          </div>
        )}

        {activeTab === 'conditions' && (
          <div className="conditions-tab">
            <h4>Common Conditions</h4>
            <ul className="conditions-list">
              {region.commonConditions.map((condition, i) => (
                <li key={i} className="condition-item">
                  <span className="condition-number">{i + 1}</span>
                  <span className="condition-name">{condition}</span>
                  <button className="learn-link">Learn →</button>
                </li>
              ))}
            </ul>
            
            {userConditions.length > 0 && (
              <>
                <h4 className="user-section-title">Your Conditions</h4>
                <ul className="conditions-list user-conditions-list">
                  {userConditions.map(c => (
                    <li key={c.id} className={`condition-item condition-${c.status}`}>
                      <span className="condition-status-dot status-${c.status}" />
                      <span className="condition-name">{c.name}</span>
                      <span className="condition-meta">{c.status}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {activeTab === 'structures' && (
          <div className="structures-tab">
            <h4>Key Anatomical Structures</h4>
            <ul className="structures-list">
              {region.keyStructures.map((structure, i) => (
                <li key={i} className="structure-item">
                  <span className="structure-icon">🔬</span>
                  {structure}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="education-tab">
            <h4>Educational Modules</h4>
            <p className="education-intro">
              Learn about the {region.name.toLowerCase()} and related medical topics.
            </p>
            
            {recommendedModules.length > 0 && (
              <div className="recommended-modules">
                <h5>Recommended Specialties</h5>
                <div className="module-chips">
                  {recommendedModules.map(module => (
                    <button 
                      key={module} 
                      className="module-chip"
                      onClick={() => onLearn?.(region.id, module)}
                    >
                      {module.charAt(0).toUpperCase() + module.slice(1).replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="education-actions">
              <button className="action-btn primary" onClick={handleLearn}>
                📚 Start Learning Module
              </button>
            </div>
            
            <div className="related-topics">
              <h5>Related Topics</h5>
              <ul className="topics-list">
                {region.commonConditions.slice(0, 3).map((condition, i) => (
                  <li key={i} className="topic-item">
                    <span className="topic-icon">📖</span>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// CROSS-SECTION PANEL COMPONENT
// ============================================================================

interface CrossSectionPanelProps {
  mode: 'none' | 'sagittal' | 'coronal' | 'transverse';
  position: number;
  onModeChange: (mode: 'none' | 'sagittal' | 'coronal' | 'transverse') => void;
  onPositionChange: (pos: number) => void;
}

function CrossSectionPanel({ mode, position, onModeChange, onPositionChange }: CrossSectionPanelProps) {
  const modes = [
    { id: 'none', label: 'Off', icon: '○' },
    { id: 'sagittal', label: 'Left/Right', icon: '↔' },
    { id: 'coronal', label: 'Front/Back', icon: '↗' },
    { id: 'transverse', label: 'Top/Bottom', icon: '↕' },
  ] as const;

  return (
    <div className="cross-section-panel">
      <div className="cross-section-header">
        <h4>Cross Section</h4>
        <div className="mode-buttons">
          {modes.map((m) => (
            <button
              key={m.id}
              className={`mode-btn ${mode === m.id ? 'active' : ''}`}
              onClick={() => onModeChange(m.id)}
              title={m.label}
            >
              <span className="mode-icon">{m.icon}</span>
              <span className="mode-label">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {mode !== 'none' && (
        <div className="cut-slider-container">
          <label>
            Cut Position: {position > 0 ? '+' : ''}{position.toFixed(1)}
          </label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.05"
            value={position}
            onChange={(e) => onPositionChange(Number(e.target.value))}
            className="cut-slider"
          />
          <div className="cut-labels">
            <span>{mode === 'sagittal' ? 'Left' : mode === 'coronal' ? 'Back' : 'Top'}</span>
            <span>Center</span>
            <span>{mode === 'sagittal' ? 'Right' : mode === 'coronal' ? 'Front' : 'Bottom'}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// LAYER PANEL COMPONENT
// ============================================================================

interface LayerPanelProps {
  layerDepth: number;
  onLayerChange: (depth: number) => void;
}

function LayerPanel({ layerDepth, onLayerChange }: LayerPanelProps) {
  const layers = [
    { name: 'Skin', color: '#f4d7c4', desc: 'Epidermis & Dermis' },
    { name: 'Fat', color: '#fff8dc', desc: 'Subcutaneous tissue' },
    { name: 'Muscle', color: '#c44d4d', desc: 'Skeletal muscles' },
    { name: 'Bone', color: '#e8e4dc', desc: 'Skeletal system' },
    { name: 'Organs', color: '#ff9999', desc: 'Internal organs' }
  ];
  
  const currentLayerIndex = Math.floor((layerDepth / 100) * layers.length);
  const currentLayer = layers[Math.min(currentLayerIndex, layers.length - 1)];

  return (
    <div className="layer-panel">
      <div className="layer-header">
        <h4>Layer Dissection</h4>
        <div className="current-layer" style={{ borderLeftColor: currentLayer.color }}>
          <span className="current-layer-name">{currentLayer.name}</span>
          <span className="current-layer-desc">{currentLayer.desc}</span>
        </div>
      </div>
      
      <div className="layer-slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={layerDepth}
          onChange={(e) => onLayerChange(Number(e.target.value))}
          className="layer-slider"
          style={{
            background: `linear-gradient(to right, ${currentLayer.color} ${layerDepth}%, rgba(255,255,255,0.2) ${layerDepth}%)`
          }}
        />
        
        <div className="layer-legend">
          {layers.map((layer, i) => (
            <div 
              key={layer.name} 
              className={`layer-item ${i === currentLayerIndex ? 'active' : ''}`}
              onClick={() => onLayerChange(((i + 0.5) / layers.length) * 100)}
            >
              <span className="layer-color" style={{ backgroundColor: layer.color }} />
              <span className="layer-name">{layer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function CompleteAnatomyLaunchpad({ onBack, onLearn, onViewLabs, dashboardData }: CompleteAnatomyLaunchpadProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [showUI, setShowUI] = useState(true);
  const [showPins, setShowPins] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [layerDepth, setLayerDepth] = useState(100);
  
  // Cross-section state
  const [crossSectionMode, setCrossSectionMode] = useState<'none' | 'sagittal' | 'coronal' | 'transverse'>('none');
  const [cutPosition, setCutPosition] = useState(0); // -1 to 1

  // Quiz state
  const [quizActive, setQuizActive] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>('idle');
  const [feedbackTimer, setFeedbackTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const [visibleSystems, setVisibleSystems] = useState<SystemVisibility>({
    integumentary: true,
    skeletal: true,
    muscular: true,
    nervous: true,
    cardiovascular: true,
    respiratory: true,
    digestive: true,
    urinary: true,
    endocrine: true,
    reproductive: true,
    lymphatic: true,
  });

  const toggleSystem = useCallback((system: BodySystem) => {
    setVisibleSystems(prev => ({ ...prev, [system]: !prev[system] }));
  }, []);

  const handleRegionSelect = useCallback((regionId: string) => {
    // Handle quiz mode
    if (quizActive && quizState === 'asking' && quizQuestions[currentQuestionIndex]) {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      
      if (regionId === currentQuestion.targetRegionId || 
          // Allow matching symmetric body parts (left/right)
          (currentQuestion.targetRegionId.startsWith('left') && regionId === currentQuestion.targetRegionId.replace('left', 'right')) ||
          (currentQuestion.targetRegionId.startsWith('right') && regionId === currentQuestion.targetRegionId.replace('right', 'left'))) {
        // Correct answer
        setQuizState('correct');
        setQuizScore(prev => prev + 1);
        
        // Clear any existing timer
        if (feedbackTimer) clearTimeout(feedbackTimer);
        
        // Move to next question after delay
        const timer = setTimeout(() => {
          if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setQuizState('asking');
          } else {
            setQuizState('complete');
          }
        }, 1500);
        setFeedbackTimer(timer);
        return;
      } else {
        // Incorrect answer
        setQuizState('incorrect');
        if (feedbackTimer) clearTimeout(feedbackTimer);
        const timer = setTimeout(() => {
          setQuizState('asking');
        }, 1000);
        setFeedbackTimer(timer);
        return;
      }
    }

    // Normal mode
    const region = BODY_REGIONS.find(r => r.id === regionId);
    if (region) {
      setSelectedRegion(region);
    }
  }, [quizActive, quizState, quizQuestions, currentQuestionIndex, feedbackTimer]);

  const startQuiz = useCallback(() => {
    const questions = generateQuizQuestions();
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setQuizScore(0);
    setQuizState('asking');
    setQuizActive(true);
    setSelectedRegion(null); // Close any open panel
  }, []);

  const closeQuiz = useCallback(() => {
    setQuizActive(false);
    setQuizState('idle');
    if (feedbackTimer) clearTimeout(feedbackTimer);
  }, [feedbackTimer]);

  const skipQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setQuizState('asking');
    } else {
      setQuizState('complete');
    }
  }, [currentQuestionIndex, quizQuestions.length]);

  const hoveredRegionData = useMemo(() => {
    if (!hoveredRegion) return null;
    return BODY_REGIONS.find(r => r.id === hoveredRegion);
  }, [hoveredRegion]);

  // Loading state - simulate model loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Number keys 1-9 for systems
      const systemKeys: BodySystem[] = [
        'integumentary', 'skeletal', 'muscular', 'nervous', 
        'cardiovascular', 'respiratory', 'digestive', 'urinary', 'endocrine'
      ];
      const num = parseInt(e.key);
      if (num >= 1 && num <= 9) {
        toggleSystem(systemKeys[num - 1]);
      }
      // Space to reset
      if (e.key === ' ') {
        setSelectedRegion(null);
        setLayerDepth(100);
        setShowPins(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSystem]);

  return (
    <div className="complete-anatomy-launchpad">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading Anatomy Model...</div>
          <div className="loading-progress">
            <div className="loading-bar" />
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`anatomy-header ${!showUI ? 'hidden' : ''}`}>
        <button className="back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="header-title">
          <h1>Anatomy Explorer</h1>
          <p>Click any body region to explore</p>
        </div>
        <button className="ui-toggle" onClick={() => setShowUI(!showUI)}>
          {showUI ? 'Hide UI' : 'Show UI'}
        </button>
      </header>

      {/* System Toggles */}
      <div className={`system-toggles ${!showUI ? 'hidden' : ''}`}>
        {(Object.keys(SYSTEM_COLORS) as BodySystem[]).map(system => (
          <SystemToggle
            key={system}
            system={system}
            color={SYSTEM_COLORS[system]}
            isActive={visibleSystems[system]}
            onToggle={() => toggleSystem(system)}
          />
        ))}
      </div>

      {/* Layer Panel */}
      <div className={`layer-panel-container ${!showUI ? 'hidden' : ''}`}>
        <LayerPanel layerDepth={layerDepth} onLayerChange={setLayerDepth} />
      </div>

      {/* Cross Section Panel */}
      <div className={`cross-section-container ${!showUI ? 'hidden' : ''}`}>
        <CrossSectionPanel 
          mode={crossSectionMode} 
          position={cutPosition}
          onModeChange={setCrossSectionMode}
          onPositionChange={setCutPosition}
        />
      </div>

      {/* View Controls */}
      <div className={`view-controls ${!showUI ? 'hidden' : ''}`}>
        <button 
          className={`view-btn ${showPins ? 'active' : ''}`}
          onClick={() => setShowPins(!showPins)}
          title="Toggle Labels"
        >
          📍 Labels
        </button>
        <button 
          className={`view-btn ${showGrid ? 'active' : ''}`}
          onClick={() => setShowGrid(!showGrid)}
          title="Toggle Grid"
        >
          ⊞ Grid
        </button>
        <button 
          className={`view-btn ${quizActive ? 'active' : ''}`}
          onClick={() => quizActive ? closeQuiz() : startQuiz()}
          title="Quiz Mode"
        >
          🎯 Quiz
        </button>
      </div>

      {/* Quiz Panel */}
      <QuizPanel
        isActive={quizActive}
        currentQuestion={quizQuestions[currentQuestionIndex] || null}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        score={quizScore}
        state={quizState}
        onStart={startQuiz}
        onClose={closeQuiz}
        onSkip={skipQuestion}
      />

      {/* Hover Tooltip */}
      {hoveredRegionData && !selectedRegion && (
        <div className="hover-tooltip">
          <span className="tooltip-name">{hoveredRegionData.name}</span>
          <span className="tooltip-latin">{hoveredRegionData.latinName}</span>
        </div>
      )}

      {/* 3D Canvas */}
      <div className="anatomy-canvas-container">
        <Canvas
          shadows
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ antialias: true, alpha: true, shadowMap: true }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
            target={[0, 0, 0]}
          />
          <Environment preset="studio" />
          <AnatomyModel
            hoveredRegion={hoveredRegion}
            selectedRegion={selectedRegion?.id || null}
            visibleSystems={visibleSystems}
            layerDepth={layerDepth}
            showPins={showPins}
            showGrid={showGrid}
            crossSectionMode={crossSectionMode}
            cutPosition={cutPosition}
            onHover={setHoveredRegion}
            onSelect={handleRegionSelect}
          />
          {/* Pin Labels */}
          {BODY_REGIONS.map(region => {
            const isVisible = region.systems.some(sys => visibleSystems[sys]);
            const primarySystem = region.systems[0];
            return (
              <PinLabel
                key={`pin-${region.id}`}
                region={region}
                isVisible={isVisible}
                isHovered={hoveredRegion === region.id}
                isSelected={selectedRegion?.id === region.id}
                showAll={showPins}
                primarySystem={primarySystem}
                layerDepth={layerDepth}
                onClick={() => handleRegionSelect(region.id)}
              />
            );
          })}
        </Canvas>
      </div>

      {/* Region Info Panel */}
      {selectedRegion && (
        <RegionInfoPanel
          region={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          onLearn={onLearn}
          onViewLabs={onViewLabs}
          dashboardData={dashboardData}
        />
      )}

      {/* Instructions */}
      {!selectedRegion && showUI && (
        <div className="anatomy-instructions">
          <div className="instruction-item">
            <span className="key">🖱️ Click</span>
            <span>Select region</span>
          </div>
          <div className="instruction-item">
            <span className="key">🖐️ Drag</span>
            <span>Rotate view</span>
          </div>
          <div className="instruction-item">
            <span className="key">🔍 Scroll</span>
            <span>Zoom in/out</span>
          </div>
          <div className="instruction-item">
            <span className="key">Space</span>
            <span>Reset</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompleteAnatomyLaunchpad;
