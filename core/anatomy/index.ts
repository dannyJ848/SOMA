// =============================================================================
// Anatomy - Barrel Export
// =============================================================================

// --- Cardiovascular (explicit re-exports to avoid name collisions) ---
export type {
  VesselType,
  VesselLayer,
  ArteryType,
  VeinType,
  CardiovascularRegion,
  HeartWallLayer,
  ValveType,
  HeartChamber,
  CardiacValve,
  ValvePathology,
  ConductionNode,
  ECGCorrelation,
  BloodVessel,
  VesselPathology,
  CardiacCyclePhase,
  CoronaryTerritory,
  CardioContent,
  CardiovascularStatistics,
} from "./cardiovascular";
export {
  ECG_CORRELATIONS,
  CARDIAC_CYCLE_PHASES,
  CORONARY_TERRITORIES,
  getChamber,
  getAllChambers,
  getValve,
  getAllValves,
  getConductionNode,
  getAllConductionNodes,
  getVessel,
  getAllVessels,
  getVesselsByRegion,
  getArteries,
  getVeins,
  searchVessels,
  getStatistics as getCardiovascularStatistics,
  getExplanation as getCardiovascularExplanation,
} from "./cardiovascular";

// --- Digestive (explicit re-exports to avoid name collisions) ---
export type {
  GITractRegion,
  GIWallLayer,
  SmallIntestineSegment,
  LargeIntestineSegment,
  DigestiveStructure,
  DigestiveSecretion,
  AccessoryOrgan,
  DigestivePathology,
  DigestiveEnzyme,
  AbsorptionSite,
  DigestiveStatistics,
} from "./digestive";
export {
  DIGESTIVE_ENZYMES,
  ABSORPTION_SITES,
  getDigestiveStructure,
  getAllDigestiveStructures,
  getDigestiveStructuresByRegion,
  getAccessoryOrgan,
  getAllAccessoryOrgans,
  searchDigestiveStructures,
  searchAccessoryOrgans,
  getEnzymesBySource,
  getAbsorptionSitesByLocation,
  getAbsorptionSiteByNutrient,
  getExplanation as getDigestiveExplanation,
  getDigestiveStatistics,
} from "./digestive";

// --- Non-conflicting modules (safe to use export *) ---
export * from "./endocrine";
export * from "./integumentary";
export * from "./lymphatic";

// --- Muscular (explicit re-exports to avoid name collisions) ---
export type {
  MuscleType,
  MuscleShape,
  FiberComposition,
  MuscularRegion,
  MuscleGroup,
  MuscleAction,
  MuscleAttachment,
  JointAction,
  MuscleInnervation,
  MuscleBloodSupply,
  MuscleRelationship,
  MuscleInjury,
  MusclePathology,
  MuscleExercise,
  MuscleContent,
  Muscle,
  MuscleSummary,
  MuscularRegionInfo,
  MuscleStatistics,
} from "./muscular";
export {
  MUSCULAR_REGIONS,
  getMuscle,
  getAllMuscles,
  getMusclesByRegion,
  getMusclesByGroup,
  searchMuscles,
  getMuscleByName,
  getMuscleByFmaId,
  getMuscleSummaries,
  getRegionInfo as getMuscularRegionInfo,
  getAllRegions as getAllMuscularRegions,
  getMuscleStatistics,
  getExplanation as getMuscularExplanation,
  getMusclesForBone,
  getAntagonists,
  getSynergists,
} from "./muscular";

// --- Non-conflicting modules (safe to use export *) ---
export * from "./nervous";
export * from "./reproductive";

// --- Respiratory (explicit re-exports to avoid name collisions) ---
export type {
  RespiratoryDivision,
  RespiratoryRegion,
  LungLobe,
  BronchopulmonarySegment,
  RespiratoryStructure,
  RespiratoryPathology,
  Lung,
  RespiratoryMuscle,
  VentilationParameter,
  GasExchangeConcept,
  RespiratoryStatistics,
} from "./respiratory";
export {
  VENTILATION_PARAMETERS,
  GAS_EXCHANGE_CONCEPTS,
  getStructure,
  getAllStructures,
  getStructuresByRegion,
  getLung,
  getAllLungs,
  getMuscle as getRespiratoryMuscle,
  getAllMuscles as getAllRespiratoryMuscles,
  searchStructures,
  getStatistics as getRespiratoryStatistics,
  getExplanation as getRespiratoryExplanation,
} from "./respiratory";

// --- Skeletal (explicit re-exports to avoid name collisions) ---
export type {
  BoneType,
  SkeletalDivision,
  SkeletalRegion,
  JointType,
  JointMovement,
  BonyLandmark,
  MuscleAttachment as BoneMuscleAttachment,
  BoneBloodSupply,
  BoneInnervation,
  Joint,
  FractureType,
  BonePathology,
  ImagingExample,
  BoneContent,
  Bone,
  BoneSummary,
  SkeletalRegionInfo,
  BoneStatistics,
} from "./skeletal";
export {
  SKELETAL_REGIONS,
  getBone,
  getAllBones,
  getBonesByRegion,
  getBonesByDivision,
  getBonesByType,
  searchBones,
  getBoneByName,
  getBoneByFmaId,
  getBoneSummaries,
  getRegionInfo as getSkeletalRegionInfo,
  getAllRegions as getAllSkeletalRegions,
  getBoneStatistics,
  getJoint,
  getJointsForBone,
  getExplanation as getSkeletalExplanation,
  getRelatedBones,
} from "./skeletal";

// --- Non-conflicting module ---
export * from "./urinary";
