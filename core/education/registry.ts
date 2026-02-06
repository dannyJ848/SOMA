/**
 * Educational Module Registry
 * 
 * Central registry for all educational content modules.
 * Provides discovery, lookup, and metadata access.
 */

import type { EducationalModule, MedicalSpecialty, ModuleType } from './types.js';

// Import existing modules
import { type2DiabetesModule } from './modules/endocrinology/type2-diabetes.js';
import { hypertensionModule } from './modules/cardiology/hypertension.js';
import { cbcModule } from './modules/labs/cbc.js';
import { lipidsModule } from './modules/labs/lipids.js';
import { thyroidModule } from './modules/labs/thyroid.js';
import { labThyroidInterpretationModule } from './modules/lab-thyroid-interpretation.js';
import { headacheModule } from './modules/neurology/headache.js';
import { gerdModule } from './modules/gastroenterology/gerd.js';
import { ibsModule } from './modules/gastroenterology/gastro-ibs-comprehensive.js';
import { ckdComprehensiveModule } from './modules/nephrology/ckd-comprehensive.js';
import { anemiaModule } from './modules/hematology/anemia-comprehensive.js';
import { acneComprehensiveModule } from './modules/dermatology/acne-comprehensive.js';
import { hypothyroidismModule } from './modules/endocrinology/hypothyroidism-comprehensive.js';
import { asthmaModule } from './modules/pulmonology/asthma-comprehensive.js';

// Module storage - will be populated as modules are created
const modules: Map<string, EducationalModule> = new Map();

// Index by specialty
const specialtyIndex: Map<MedicalSpecialty, Set<string>> = new Map();

// Index by type
const typeIndex: Map<ModuleType, Set<string>> = new Map();

// Index by prerequisite
const prerequisiteIndex: Map<string, Set<string>> = new Map();

// ============================================================================
// Registration
// ============================================================================

/**
 * Register a new educational module
 */
export function registerModule(module: EducationalModule): void {
  // Store the module
  modules.set(module.id, module);
  
  // Index by specialty
  if (module.specialty) {
    if (!specialtyIndex.has(module.specialty)) {
      specialtyIndex.set(module.specialty, new Set());
    }
    specialtyIndex.get(module.specialty)!.add(module.id);
  }
  
  // Index by type
  if (!typeIndex.has(module.type)) {
    typeIndex.set(module.type, new Set());
  }
  typeIndex.get(module.type)!.add(module.id);
  
  // Index prerequisites (reverse: who depends on this module)
  for (const prereq of module.prerequisites) {
    if (!prerequisiteIndex.has(prereq)) {
      prerequisiteIndex.set(prereq, new Set());
    }
    prerequisiteIndex.get(prereq)!.add(module.id);
  }
  
  console.log(`[Education] Registered module: ${module.id} (${module.title})`);
}

/**
 * Register multiple modules at once
 */
export function registerModules(modulesToRegister: EducationalModule[]): void {
  for (const module of modulesToRegister) {
    registerModule(module);
  }
}

// ============================================================================
// Lookup
// ============================================================================

/**
 * Get a module by ID
 */
export function getModule(id: string): EducationalModule | undefined {
  return modules.get(id);
}

/**
 * Check if a module exists
 */
export function hasModule(id: string): boolean {
  return modules.has(id);
}

/**
 * Get all modules
 */
export function getAllModules(): EducationalModule[] {
  return Array.from(modules.values());
}

/**
 * Get all module IDs
 */
export function getAllModuleIds(): string[] {
  return Array.from(modules.keys());
}

// ============================================================================
// Discovery
// ============================================================================

/**
 * Find modules by specialty
 */
export function findBySpecialty(specialty: MedicalSpecialty): EducationalModule[] {
  const ids = specialtyIndex.get(specialty);
  if (!ids) return [];
  return Array.from(ids).map(id => modules.get(id)!).filter(Boolean);
}

/**
 * Find modules by type
 */
export function findByType(type: ModuleType): EducationalModule[] {
  const ids = typeIndex.get(type);
  if (!ids) return [];
  return Array.from(ids).map(id => modules.get(id)!).filter(Boolean);
}

/**
 * Find modules that depend on a given prerequisite
 */
export function findDependentModules(prerequisiteId: string): EducationalModule[] {
  const ids = prerequisiteIndex.get(prerequisiteId);
  if (!ids) return [];
  return Array.from(ids).map(id => modules.get(id)!).filter(Boolean);
}

/**
 * Search modules by keyword
 */
export function searchModules(query: string): EducationalModule[] {
  const lowerQuery = query.toLowerCase();
  return getAllModules().filter(module => 
    module.title.toLowerCase().includes(lowerQuery) ||
    module.description.toLowerCase().includes(lowerQuery) ||
    module.learningObjectives.some(obj => obj.toLowerCase().includes(lowerQuery))
  );
}

// ============================================================================
// Validation
// ============================================================================

/**
 * Validate that all prerequisites exist
 */
export function validatePrerequisites(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  for (const module of modules.values()) {
    for (const prereq of module.prerequisites) {
      if (!modules.has(prereq)) {
        errors.push(`Module ${module.id} has missing prerequisite: ${prereq}`);
      }
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Check for circular dependencies
 */
export function checkCircularDependencies(): { valid: boolean; cycles: string[][] } {
  const cycles: string[][] = [];
  const visited = new Set<string>();
  const recursionStack = new Set<string>();
  
  function dfs(moduleId: string, path: string[]): void {
    if (recursionStack.has(moduleId)) {
      // Found cycle
      const cycleStart = path.indexOf(moduleId);
      cycles.push(path.slice(cycleStart));
      return;
    }
    
    if (visited.has(moduleId)) return;
    
    visited.add(moduleId);
    recursionStack.add(moduleId);
    
    const module = modules.get(moduleId);
    if (module) {
      for (const prereq of module.prerequisites) {
        dfs(prereq, [...path, moduleId]);
      }
    }
    
    recursionStack.delete(moduleId);
  }
  
  for (const id of modules.keys()) {
    if (!visited.has(id)) {
      dfs(id, []);
    }
  }
  
  return {
    valid: cycles.length === 0,
    cycles,
  };
}

// ============================================================================
// Statistics
// ============================================================================

export interface ModuleStatistics {
  totalModules: number;
  byType: Record<ModuleType, number>;
  bySpecialty: Record<MedicalSpecialty, number>;
  totalPrerequisites: number;
  orphanedModules: string[];
}

/**
 * Get statistics about registered modules
 */
export function getStatistics(): ModuleStatistics {
  const byType: Record<ModuleType, number> = {} as Record<ModuleType, number>;
  const bySpecialty: Record<MedicalSpecialty, number> = {} as Record<MedicalSpecialty, number>;
  
  for (const [type, ids] of typeIndex) {
    byType[type] = ids.size;
  }
  
  for (const [specialty, ids] of specialtyIndex) {
    bySpecialty[specialty] = ids.size;
  }
  
  // Find orphaned modules (no other module depends on them and they have no prerequisites)
  const orphaned: string[] = [];
  for (const module of modules.values()) {
    const isDependedOn = prerequisiteIndex.has(module.id) && prerequisiteIndex.get(module.id)!.size > 0;
    const hasPrereqs = module.prerequisites.length > 0;
    
    if (!isDependedOn && !hasPrereqs && module.type !== 'foundation') {
      orphaned.push(module.id);
    }
  }
  
  return {
    totalModules: modules.size,
    byType,
    bySpecialty,
    totalPrerequisites: prerequisiteIndex.size,
    orphanedModules: orphaned,
  };
}

// ============================================================================
// Export
// ============================================================================

export { modules, specialtyIndex, typeIndex, prerequisiteIndex };
