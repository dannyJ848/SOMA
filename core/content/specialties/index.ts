// =============================================================================
// Specialties - Barrel Export
// =============================================================================

export * from "./specialty-map";

export * from "./allergy-immunology";
export * from "./cardiology";
export * from "./cardiothoracic-surgery";
export * from "./dermatology";
export * from "./emergency-medicine";
export * from "./endocrinology";

// --- ENT (explicit re-exports to avoid allergicRhinitis collision) ---
export {
  earAnatomy,
  hearingPhysiology,
  hearingLoss,
  otitisMedia,
  otitisExterna,
  tinnitus,
  vertigo,
  noseAndSinusAnatomy,
  sinusitis,
  allergicRhinitis as entAllergicRhinitis,
  throatAnatomy,
  voiceAndLarynx,
  tonsillitisAdenoids,
  sleepApnea,
  ENT_CONTENT_CATEGORIES,
  ENT_CLINICAL_PRIORITIES,
  ENT_CONTENT_REGISTRY,
  ENT_ENTRIES,
  getENTEntry,
  searchENT,
  getENTBySubcategory,
  getENTCount,
} from "./ent";
export type { ENTContentCategory, ENTEntry } from "./ent";

export * from "./gastroenterology";
export * from "./general-surgery";
export * from "./geriatrics";
export * from "./hematology";
export * from "./infectious-disease";
export * from "./nephrology";
export * from "./neurology";
export * from "./neurosurgery";
export * from "./obgyn";

// --- Oncology (explicit re-exports to avoid melanomaContent and immunotherapyContent collisions) ---
export {
  ONCOLOGY_ENTRIES,
  getOncologyEntry,
  searchOncology,
  getOncologyByCategory,
  getOncologyCount,
  cancerBiologyContent,
  cellCycleContent,
  mutationsContent,
  metastasisContent,
  breastCancerContent,
  lungCancerContent,
  prostateCancerContent,
  colorectalCancerContent,
  melanomaContent as oncologyMelanomaContent,
  tnmStagingContent,
  chemotherapyContent,
  targetedTherapyContent,
  immunotherapyContent as oncologyImmunotherapyContent,
  radiationTherapyContent,
  screeningGuidelinesContent,
  oncologicEmergenciesContent,
  palliativeCareContent,
  cancerSurvivorshipContent,
  ONCOLOGY_CATEGORIES,
} from "./oncology";
export type { OncologyEntry, OncologyDatabaseCategory, OncologyCategory } from "./oncology";

export * from "./ophthalmology";
export * from "./orthopedics";
export * from "./pediatrics";
export * from "./plastic-surgery";
export * from "./psychiatry";
export * from "./pulmonology";

// --- Rheumatology (explicit re-exports to avoid osteoarthritisContent collision) ---
export {
  RHEUMATOLOGY_ENTRIES,
  rheumatoidArthritisContent,
  osteoarthritisContent as rheumatologyOsteoarthritisContent,
  systemicLupusContent,
  goutContent,
  pseudogoutContent,
  ankylosingSpondylitisContent,
  spondyloarthropathiesContent,
  fibromyalgiaContent,
  vasculitisContent,
  sclerodermaContent,
  connectiveTissueDiseasesContent,
  autoimmuneSerogyContent,
  dmardsContent,
  biologicsContent,
  RHEUMATOLOGY_CATEGORIES,
  getAllRheumatologyContent,
} from "./rheumatology";
export type {
  RheumatologyEntry,
  RheumatologyDatabaseCategory,
  RheumatologyCategory,
} from "./rheumatology";

export * from "./urology";
export * from "./vascular-surgery";
