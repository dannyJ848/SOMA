/**
 * Medical Procedures - Barrel Export
 *
 * Re-exports procedure databases and types for convenient access.
 */

export {
  MEDICAL_PROCEDURES,
  getProcedure,
  searchProcedures,
  getProceduresByCategory,
  getProceduresBySpecialty,
  type MedicalProcedureEntry,
  type ProcedureCategory,
  type ComplexityLevel,
  type AnesthesiaType,
  type SettingType,
} from './procedure-database';

export {
  IR_PROCEDURES,
  type IRProcedureEntry,
  findIRProcedure,
  getIRProceduresByComplexity,
  getIRProceduresByBodyRegion,
  getIRProceduresByCategory,
} from './interventional-radiology-database';

export {
  BEDSIDE_AND_SCREENING_PROCEDURES,
  type BedsideScreeningEntry,
  getBedsideScreeningById,
  getBedsideScreeningByCategory,
  getBedsideScreeningByComplexity,
  getBedsideScreeningBySpecialty,
  searchBedsideScreening,
} from './bedside-and-screening-database';

export {
  SURGICAL_PROCEDURES,
  type SurgicalProcedureEntry,
  findSurgicalProcedure,
  getSurgicalProceduresByComplexity,
  getSurgicalProceduresBySpecialty,
  getSurgicalProceduresByBodyRegion,
  searchSurgicalProcedures,
} from './surgical-procedures-database';

export {
  ENDOSCOPIC_PROCEDURES,
  type EndoscopicProcedureEntry,
  findEndoscopicProcedure,
  getEndoscopicProceduresByComplexity,
  getEndoscopicProceduresByType,
  getEndoscopicProceduresBySpecialty,
  searchEndoscopicProcedures,
} from './endoscopic-procedures-database';

export {
  EMERGENCY_PROCEDURES,
  type EmergencyProcedureEntry,
  findEmergencyProcedure,
  getEmergencyProceduresByComplexity,
  getEmergencyProceduresByCategory,
  getEmergencyProceduresBySpecialty,
  searchEmergencyProcedures,
} from './emergency-procedures-database';
