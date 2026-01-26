/**
 * Medical Terminology Content Types
 *
 * Specialized types for medical terminology educational content.
 * Extends the base content system with terminology-specific structures.
 */

import { ComplexityLevel } from '../types';

/**
 * Word origin/etymology information
 */
export interface Etymology {
  language:
    | 'Greek'
    | 'Latin'
    | 'French'
    | 'German'
    | 'Arabic'
    | 'English'
    | 'Greek/Latin'
    | 'Latin/Greek'
    | 'French/Greek'
    | 'English/Greek'
    | 'English/Latin'
    | 'Latin/English'
    | 'Danish'
    | 'Old English'
    | 'Other';
  originalWord: string;
  originalMeaning: string;
  notes?: string;
}

/**
 * Pronunciation guide with IPA and simplified phonetic
 */
export interface Pronunciation {
  ipa: string;              // International Phonetic Alphabet
  simplified: string;       // Easy-to-read phonetic (e.g., "kar-dee-AK")
  audioFile?: string;       // Optional audio pronunciation file
  stressedSyllable?: number; // 1-indexed syllable with primary stress
}

/**
 * A medical term component (prefix, suffix, or root)
 */
export interface TermComponent {
  id: string;
  component: string;        // The actual prefix/suffix/root (e.g., "cardi/o")
  type: 'prefix' | 'suffix' | 'combiningForm' | 'root';
  meaning: string;
  etymology: Etymology;
  pronunciation?: Pronunciation;

  // Multi-level definitions
  definitions: {
    [K in ComplexityLevel]?: string;
  };

  // Examples at different levels
  examples: {
    term: string;
    meaning: string;
    level: ComplexityLevel;
  }[];

  // Related components
  relatedComponents?: string[];  // IDs of related prefixes/suffixes/roots

  // Common combinations
  commonCombinations?: {
    with: string;           // The other component
    result: string;         // The combined term
    meaning: string;
  }[];

  // Usage notes
  usageNotes?: string;

  // Variants (alternative spellings)
  variants?: string[];
}

/**
 * A complete medical term with full breakdown
 */
export interface MedicalTerm {
  id: string;
  term: string;
  alternateSpellings?: string[];
  pronunciation: Pronunciation;

  // Word breakdown
  components: {
    prefix?: string;
    root: string;
    combiningVowel?: string;
    suffix?: string;
  };

  // Multi-level definitions
  definitions: {
    [K in ComplexityLevel]: string;
  };

  // Etymology
  etymology: Etymology;

  // Category/domain
  category: TermCategory;
  subcategory?: string;

  // System associations
  bodySystems?: string[];

  // Related terms
  relatedTerms?: string[];
  synonyms?: string[];
  antonyms?: string[];

  // Usage context
  usageContext?: 'clinical' | 'research' | 'patient' | 'documentation' | 'all';

  // Common mistakes
  commonMistakes?: {
    mistake: string;
    correction: string;
  }[];
}

/**
 * Category types for medical terminology
 */
export type TermCategory =
  | 'anatomy'
  | 'physiology'
  | 'pathology'
  | 'procedure'
  | 'diagnostic'
  | 'laboratory'
  | 'pharmacology'
  | 'symptom'
  | 'diagnosis'
  | 'directional'
  | 'positional'
  | 'general';

/**
 * Medical abbreviation with expansion and context
 */
export interface MedicalAbbreviation {
  id: string;
  abbreviation: string;
  expansion: string;

  // Multi-level explanations
  explanations: {
    [K in ComplexityLevel]?: string;
  };

  // Category
  category: AbbreviationCategory;

  // Context of use
  context: ('prescription' | 'documentation' | 'laboratory' | 'imaging' | 'orders' | 'diagnosis' | 'general')[];

  // Safety information
  isOnDoNotUseList?: boolean;
  doNotUseReason?: string;
  safeAlternative?: string;

  // Related abbreviations
  relatedAbbreviations?: string[];

  // Examples of use
  examples?: {
    context: string;
    usage: string;
    level: ComplexityLevel;
  }[];
}

/**
 * Abbreviation category types
 */
export type AbbreviationCategory =
  | 'prescription'
  | 'timing'
  | 'route'
  | 'measurement'
  | 'diagnosis'
  | 'procedure'
  | 'laboratory'
  | 'imaging'
  | 'vital-signs'
  | 'documentation'
  | 'general';

/**
 * Drug class/suffix information
 */
export interface DrugSuffix {
  id: string;
  suffix: string;
  drugClass: string;
  mechanism?: string;

  // Multi-level explanations
  explanations: {
    [K in ComplexityLevel]: string;
  };

  // Examples
  examples: {
    drug: string;
    genericName: string;
    brandName?: string;
    indication?: string;
  }[];

  // Related classes
  relatedClasses?: string[];

  // Clinical notes
  clinicalNotes?: string;
}

/**
 * Anatomical directional term
 */
export interface DirectionalTerm {
  id: string;
  term: string;
  oppositeTerm?: string;

  pronunciation: Pronunciation;
  etymology: Etymology;

  // Multi-level definitions
  definitions: {
    [K in ComplexityLevel]: string;
  };

  // Examples with body reference
  examples: {
    description: string;
    bodyExample: string;
    level: ComplexityLevel;
  }[];

  // Related terms
  relatedTerms?: string[];

  // Clinical usage
  clinicalUsage?: string;
}

/**
 * Body plane definition
 */
export interface BodyPlane {
  id: string;
  name: string;
  alternateNames?: string[];

  pronunciation: Pronunciation;
  etymology: Etymology;

  // Multi-level definitions
  definitions: {
    [K in ComplexityLevel]: string;
  };

  // Division description
  divides: string;

  // Imaging relevance
  imagingRelevance?: string;

  // Clinical applications
  clinicalApplications?: string[];
}

/**
 * Body region/cavity
 */
export interface BodyRegion {
  id: string;
  name: string;
  alternateNames?: string[];

  pronunciation: Pronunciation;
  etymology: Etymology;

  // Multi-level definitions
  definitions: {
    [K in ComplexityLevel]: string;
  };

  // Contents
  majorContents?: string[];

  // Boundaries
  boundaries?: {
    superior?: string;
    inferior?: string;
    anterior?: string;
    posterior?: string;
    medial?: string;
    lateral?: string;
  };
}

/**
 * Complete terminology module content
 */
export interface TerminologyModule {
  id: string;
  name: string;
  description: string;

  // Content arrays
  prefixes?: TermComponent[];
  suffixes?: TermComponent[];
  combiningForms?: TermComponent[];
  roots?: TermComponent[];
  terms?: MedicalTerm[];
  abbreviations?: MedicalAbbreviation[];
  directionalTerms?: DirectionalTerm[];
  bodyPlanes?: BodyPlane[];
  bodyRegions?: BodyRegion[];
  drugSuffixes?: DrugSuffix[];

  // Metadata
  createdAt: string;
  updatedAt: string;
  version: number;
}
