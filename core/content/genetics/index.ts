/**
 * Genetics Educational Content
 *
 * Comprehensive coverage of human genetics including:
 * - DNA and Gene Basics: Structure, function, expression
 * - Inheritance Patterns: Mendelian and non-Mendelian inheritance
 * - Chromosomal Disorders: Aneuploidies, structural abnormalities
 * - Single Gene Disorders: Common inherited conditions
 * - Genetic Testing: Types, technologies, interpretation
 * - Carrier Screening: Pre-conception and prenatal testing
 * - Prenatal Genetic Testing: Screening and diagnostic options
 * - Cancer Genetics: Hereditary cancer syndromes, BRCA
 * - Pharmacogenomics: Drug-gene interactions
 * - Genetic Counseling: Process, principles, resources
 *
 * Content is designed for patient education with multi-level complexity.
 */

// Basics
export { dnaStructureContent } from './basics/dna-structure';
export { geneExpressionContent } from './basics/gene-expression';
export { chromosomesContent } from './basics/chromosomes';
export { mutationsAndVariantsContent } from './basics/mutations-variants';

// Inheritance Patterns
export { autosomalDominantContent } from './inheritance/autosomal-dominant';
export { autosomalRecessiveContent } from './inheritance/autosomal-recessive';
export { xLinkedInheritanceContent } from './inheritance/x-linked';
export { mitochondrialInheritanceContent } from './inheritance/mitochondrial';
export { complexInheritanceContent } from './inheritance/complex-inheritance';

// Chromosomal Disorders
export { downSyndromeContent } from './disorders/chromosomal/down-syndrome';
export { turnerSyndromeContent } from './disorders/chromosomal/turner-syndrome';
export { klinefelterSyndromeContent } from './disorders/chromosomal/klinefelter-syndrome';
export { chromosomalDisordersOverviewContent } from './disorders/chromosomal/overview';

// Single Gene Disorders
export { cysticFibrosisContent } from './disorders/single-gene/cystic-fibrosis';
export { sickleCellDiseaseContent } from './disorders/single-gene/sickle-cell-disease';
export { huntingtonDiseaseContent } from './disorders/single-gene/huntington-disease';
export { thalassemiaContent } from './disorders/single-gene/thalassemia';
export { hemophiliaContent } from './disorders/single-gene/hemophilia';

// Genetic Testing
export { geneticTestingOverviewContent } from './testing/overview';
export { diagnosticTestingContent } from './testing/diagnostic-testing';
export { predictiveTestingContent } from './testing/predictive-testing';
export { carrierScreeningContent } from './testing/carrier-screening';
export { prenatalTestingContent } from './testing/prenatal-testing';
export { newbornScreeningContent } from './testing/newborn-screening';

// Cancer Genetics
export { cancerGeneticsOverviewContent } from './cancer-genetics/overview';
export { brcaContent } from './cancer-genetics/brca';
export { lynchSyndromeContent } from './cancer-genetics/lynch-syndrome';
export { hereditaryCancerSyndromesContent } from './cancer-genetics/hereditary-cancer-syndromes';

// Pharmacogenomics
export { pharmacogenomicsOverviewContent } from './pharmacogenomics/overview';
export { commonDrugGeneInteractionsContent } from './pharmacogenomics/common-interactions';

// Genetic Counseling
export { geneticCounselingOverviewContent } from './counseling/overview';
export { riskAssessmentContent } from './counseling/risk-assessment';
export { informedConsentContent } from './counseling/informed-consent';

// Content categories
export const GENETICS_CATEGORIES = [
  'basics',
  'inheritance-patterns',
  'chromosomal-disorders',
  'single-gene-disorders',
  'genetic-testing',
  'carrier-screening',
  'prenatal-testing',
  'cancer-genetics',
  'pharmacogenomics',
  'genetic-counseling',
] as const;

export type GeneticsCategory = (typeof GENETICS_CATEGORIES)[number];
