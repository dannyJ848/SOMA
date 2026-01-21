/**
 * Import Quest Diagnostics Pharmacogenomics Panel Data
 *
 * Imports pharmacogenomics data from Quest Diagnostics PGx panel into the Biological Self database.
 * Data extracted from: /Users/dannygomez/Desktop/untitled folder 4/Pharmacogenomics Panel.pdf
 */

import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { BiologicalSelfStore } from './core/biological-self/store.js';
import type { GeneVariant, DrugGuidance } from './core/biological-self/types.js';

const DATA_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DATA_DIR, 'biological-self.db');

// ============================================================================
// Quest Diagnostics PGx Panel Data (May 2019)
// ============================================================================

const GENE_VARIANTS: GeneVariant[] = [
  // CYP Enzymes
  {
    gene: 'CYP2C19',
    genotype: '*1/*17',
    phenotype: 'Rapid Metabolizer',
    clinicalSignificance: 'actionable',
    functionCategory: 'rapid',
    allelesTested: ['*1', '*2', '*3', '*4', '*4B', '*5', '*6', '*7', '*8', '*17'],
    affectedDrugCategories: ['Antidepressants (SSRIs)', 'Proton Pump Inhibitors', 'Antifungals', 'Antiplatelet Agents'],
  },
  {
    gene: 'CYP2D6',
    genotype: '*1/*1',
    phenotype: 'Normal Metabolizer',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*2', '*2A', '*3', '*4', '*4M', '*5', '*6', '*7', '*8', '*9', '*10', '*11', '*12', '*14', '*15', '*17', '*29', '*35', '*41'],
    affectedDrugCategories: ['Antidepressants (TCAs)', 'Opioids', 'Antipsychotics', 'Antiemetics'],
  },
  {
    gene: 'CYP3A5',
    genotype: '*3/*3',
    phenotype: 'Poor Metabolizer',
    clinicalSignificance: 'actionable',
    functionCategory: 'poor',
    allelesTested: ['*1', '*2', '*3', '*6', '*7'],
    affectedDrugCategories: ['Immunosuppressants', 'Statins'],
  },
  {
    gene: 'CYP2C9',
    genotype: '*1/*1',
    phenotype: 'Normal Metabolizer',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*2', '*3', '*4', '*5', '*6', '*8', '*11'],
    affectedDrugCategories: ['Anticoagulants', 'NSAIDs', 'Sulfonylureas'],
  },
  {
    gene: 'CYP4F2',
    genotype: '*1/*1',
    phenotype: 'Normal',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*3'],
    affectedDrugCategories: ['Anticoagulants (Warfarin)'],
  },
  {
    gene: 'CYP1A2',
    genotype: '*1F/*1F',
    phenotype: 'Rapid Metabolizer',
    clinicalSignificance: 'informative',
    functionCategory: 'rapid',
    allelesTested: ['*1A', '*1C', '*1D', '*1F', '*1K', '*1L', '*1V', '*1W'],
    affectedDrugCategories: ['Antipsychotics', 'Antidepressants'],
  },

  // Transporters
  {
    gene: 'ABCG2',
    genotype: '421C>A A/A',
    phenotype: 'Poor Function',
    clinicalSignificance: 'actionable',
    functionCategory: 'poor',
    allelesTested: ['421C>A (rs2231142)'],
    affectedDrugCategories: ['Statins', 'Chemotherapy'],
    notes: 'Decreased transporter function may lead to increased drug exposure',
  },
  {
    gene: 'SLCO1B1',
    genotype: '*1A/*1A',
    phenotype: 'Normal Function',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1A', '*1B', '*5', '*15', '*17'],
    affectedDrugCategories: ['Statins'],
  },

  // Coagulation
  {
    gene: 'VKORC1',
    genotype: '-1639G>A G/A',
    phenotype: 'Intermediate Sensitivity',
    clinicalSignificance: 'actionable',
    functionCategory: 'intermediate',
    allelesTested: ['-1639G>A (rs9923231)'],
    affectedDrugCategories: ['Anticoagulants (Warfarin)'],
    notes: 'May require lower warfarin dose compared to G/G genotype',
  },

  // Folate Metabolism
  {
    gene: 'MTHFR',
    genotype: 'c.665C>T C/T',
    phenotype: 'Reduced Activity',
    clinicalSignificance: 'informative',
    functionCategory: 'decreased',
    allelesTested: ['c.665C>T (rs1801133)', 'c.1286A>C (rs1801131)'],
    affectedDrugCategories: ['Methotrexate', 'Folate Supplements'],
    notes: 'Heterozygous for C677T variant; may benefit from methylfolate supplementation',
  },
  {
    gene: 'MTHFR',
    genotype: 'c.1286A>C A/A',
    phenotype: 'Normal',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['c.1286A>C (rs1801131)'],
    affectedDrugCategories: ['Methotrexate'],
  },

  // Serotonin
  {
    gene: 'HTR2A',
    genotype: 'c.-1438A>G G/G',
    phenotype: 'Standard Response',
    clinicalSignificance: 'informative',
    functionCategory: 'normal',
    allelesTested: ['c.-1438A>G (rs6311)'],
    affectedDrugCategories: ['Antidepressants', 'Antipsychotics'],
  },
  {
    gene: 'SLC6A4',
    genotype: '5-HTTLPR L/L',
    phenotype: 'Standard Response',
    clinicalSignificance: 'informative',
    functionCategory: 'normal',
    allelesTested: ['5-HTTLPR (L/S variants)'],
    affectedDrugCategories: ['SSRIs', 'Antidepressants'],
  },

  // Dopamine
  {
    gene: 'COMT',
    genotype: 'Val158Met G/A',
    phenotype: 'Intermediate Activity',
    clinicalSignificance: 'informative',
    functionCategory: 'intermediate',
    allelesTested: ['Val158Met (rs4680)'],
    affectedDrugCategories: ['Antipsychotics', 'Stimulants', 'Pain Medications'],
  },
  {
    gene: 'DRD2',
    genotype: '-141C Ins/Del Ins/Ins',
    phenotype: 'Standard Response',
    clinicalSignificance: 'informative',
    functionCategory: 'normal',
    allelesTested: ['-141C Ins/Del (rs1799732)'],
    affectedDrugCategories: ['Antipsychotics'],
  },

  // HLA Markers
  {
    gene: 'HLA-A*31:01',
    genotype: 'Negative',
    phenotype: 'Standard Risk',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['HLA-A*31:01'],
    affectedDrugCategories: ['Carbamazepine'],
    notes: 'Negative for HLA-A*31:01 - standard risk for carbamazepine hypersensitivity',
  },
  {
    gene: 'HLA-B*15:02',
    genotype: 'Negative',
    phenotype: 'Standard Risk',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['HLA-B*15:02'],
    affectedDrugCategories: ['Carbamazepine', 'Phenytoin'],
    notes: 'Negative for HLA-B*15:02 - standard risk for Stevens-Johnson syndrome',
  },
  {
    gene: 'HLA-B*57:01',
    genotype: 'Negative',
    phenotype: 'Standard Risk',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['HLA-B*57:01'],
    affectedDrugCategories: ['Abacavir'],
    notes: 'Negative for HLA-B*57:01 - standard risk for abacavir hypersensitivity',
  },

  // Other
  {
    gene: 'OPRM1',
    genotype: 'A118G A/A',
    phenotype: 'Standard Response',
    clinicalSignificance: 'informative',
    functionCategory: 'normal',
    allelesTested: ['A118G (rs1799971)'],
    affectedDrugCategories: ['Opioids'],
  },
  {
    gene: 'DPYD',
    genotype: '*1/*1',
    phenotype: 'Normal Metabolizer',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*2A', '*13', 'c.2846A>T'],
    affectedDrugCategories: ['Fluoropyrimidines (5-FU, Capecitabine)'],
  },
  {
    gene: 'TPMT',
    genotype: '*1/*1',
    phenotype: 'Normal Metabolizer',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*2', '*3A', '*3B', '*3C'],
    affectedDrugCategories: ['Thiopurines (Azathioprine, 6-MP)'],
  },
  {
    gene: 'NUDT15',
    genotype: '*1/*1',
    phenotype: 'Normal Metabolizer',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*2', '*3'],
    affectedDrugCategories: ['Thiopurines'],
  },
  {
    gene: 'UGT1A1',
    genotype: '*1/*1',
    phenotype: 'Normal Metabolizer',
    clinicalSignificance: 'normal',
    functionCategory: 'normal',
    allelesTested: ['*1', '*6', '*27', '*28', '*36', '*37'],
    affectedDrugCategories: ['Irinotecan', 'Atazanavir'],
  },
  {
    gene: 'IFNL3',
    genotype: 'rs12979860 C/C',
    phenotype: 'Favorable Response',
    clinicalSignificance: 'informative',
    functionCategory: 'normal',
    allelesTested: ['rs12979860 (C/T)'],
    affectedDrugCategories: ['Hepatitis C Antivirals (Peginterferon)'],
    notes: 'C/C genotype associated with better response to interferon-based HCV treatment',
  },
];

// ============================================================================
// Drug Guidance (from Quest Panel)
// ============================================================================

const DRUG_GUIDANCE: DrugGuidance[] = [
  // Consider Alternatives (due to CYP2C19 Rapid Metabolizer status)
  {
    drugName: 'Citalopram',
    genericName: 'citalopram',
    drugClass: 'Antidepressants (SSRIs)',
    recommendation: 'consider-alternatives',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may have reduced drug exposure and potentially decreased efficacy. Consider alternative SSRIs not primarily metabolized by CYP2C19.',
    riskLevel: 'moderate',
  },
  {
    drugName: 'Escitalopram',
    genericName: 'escitalopram',
    drugClass: 'Antidepressants (SSRIs)',
    recommendation: 'consider-alternatives',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may have reduced drug exposure. Consider alternative antidepressants or higher doses with careful monitoring.',
    riskLevel: 'moderate',
  },
  {
    drugName: 'Amitriptyline',
    genericName: 'amitriptyline',
    drugClass: 'Antidepressants (TCAs)',
    recommendation: 'consider-alternatives',
    affectedByGenes: ['CYP2C19', 'CYP2D6'],
    guidanceText: 'Rapid CYP2C19 metabolism may affect drug levels. Monitor response and consider alternatives if efficacy is suboptimal.',
    riskLevel: 'moderate',
  },
  {
    drugName: 'Clomipramine',
    genericName: 'clomipramine',
    drugClass: 'Antidepressants (TCAs)',
    recommendation: 'consider-alternatives',
    affectedByGenes: ['CYP2C19', 'CYP2D6'],
    guidanceText: 'Rapid CYP2C19 metabolism may reduce drug levels. Consider alternative medications.',
    riskLevel: 'moderate',
  },
  {
    drugName: 'Voriconazole',
    genericName: 'voriconazole',
    drugClass: 'Antifungals',
    recommendation: 'consider-alternatives',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may have significantly reduced voriconazole exposure. Consider alternative antifungals or therapeutic drug monitoring.',
    riskLevel: 'high',
  },

  // Proceed with Caution
  {
    drugName: 'Clopidogrel',
    genericName: 'clopidogrel',
    drugClass: 'Antiplatelet Agents',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may have enhanced antiplatelet effect. Standard dosing is acceptable but monitor for increased bleeding risk.',
    riskLevel: 'low',
  },
  {
    drugName: 'Omeprazole',
    genericName: 'omeprazole',
    drugClass: 'Proton Pump Inhibitors',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may have reduced PPI efficacy. May require higher doses for adequate acid suppression. Consider alternative PPIs like rabeprazole.',
    riskLevel: 'low',
  },
  {
    drugName: 'Esomeprazole',
    genericName: 'esomeprazole',
    drugClass: 'Proton Pump Inhibitors',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may require higher doses for therapeutic effect.',
    riskLevel: 'low',
  },
  {
    drugName: 'Lansoprazole',
    genericName: 'lansoprazole',
    drugClass: 'Proton Pump Inhibitors',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['CYP2C19'],
    guidanceText: 'Rapid metabolizers may have reduced drug exposure. Monitor for adequate response.',
    riskLevel: 'low',
  },
  {
    drugName: 'Rosuvastatin',
    genericName: 'rosuvastatin',
    drugClass: 'Statins',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['ABCG2'],
    guidanceText: 'Poor ABCG2 function may increase rosuvastatin exposure. Start with lower dose and monitor for muscle-related side effects.',
    riskLevel: 'moderate',
  },
  {
    drugName: 'Atorvastatin',
    genericName: 'atorvastatin',
    drugClass: 'Statins',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['ABCG2'],
    guidanceText: 'Poor ABCG2 function may increase atorvastatin exposure. Monitor for muscle symptoms.',
    riskLevel: 'low',
  },
  {
    drugName: 'Morphine',
    genericName: 'morphine',
    drugClass: 'Opioids',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['CYP2D6', 'OPRM1'],
    guidanceText: 'Standard dosing is appropriate. Monitor for typical opioid response.',
    riskLevel: 'low',
  },
  {
    drugName: 'Warfarin',
    genericName: 'warfarin',
    drugClass: 'Anticoagulants',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['VKORC1', 'CYP2C9', 'CYP4F2'],
    guidanceText: 'VKORC1 G/A genotype suggests intermediate warfarin sensitivity. May require lower-than-average maintenance dose. Use validated dosing algorithms.',
    riskLevel: 'moderate',
  },
  {
    drugName: 'Tacrolimus',
    genericName: 'tacrolimus',
    drugClass: 'Immunosuppressants',
    recommendation: 'proceed-with-caution',
    affectedByGenes: ['CYP3A5'],
    guidanceText: 'CYP3A5 poor metabolizer status may result in higher tacrolimus levels. Start with lower doses and monitor drug levels closely.',
    riskLevel: 'moderate',
  },

  // Use as Directed (Normal metabolism for these pathways)
  {
    drugName: 'Codeine',
    genericName: 'codeine',
    drugClass: 'Opioids',
    recommendation: 'use-as-directed',
    affectedByGenes: ['CYP2D6'],
    guidanceText: 'Normal CYP2D6 metabolism - standard codeine response expected.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Tramadol',
    genericName: 'tramadol',
    drugClass: 'Opioids',
    recommendation: 'use-as-directed',
    affectedByGenes: ['CYP2D6'],
    guidanceText: 'Normal CYP2D6 metabolism - standard tramadol dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Oxycodone',
    genericName: 'oxycodone',
    drugClass: 'Opioids',
    recommendation: 'use-as-directed',
    affectedByGenes: ['CYP2D6'],
    guidanceText: 'Normal CYP2D6 metabolism - standard oxycodone response expected.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Fluoxetine',
    genericName: 'fluoxetine',
    drugClass: 'Antidepressants (SSRIs)',
    recommendation: 'use-as-directed',
    affectedByGenes: ['CYP2D6'],
    guidanceText: 'Normal CYP2D6 metabolism - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Paroxetine',
    genericName: 'paroxetine',
    drugClass: 'Antidepressants (SSRIs)',
    recommendation: 'use-as-directed',
    affectedByGenes: ['CYP2D6'],
    guidanceText: 'Normal CYP2D6 metabolism - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Sertraline',
    genericName: 'sertraline',
    drugClass: 'Antidepressants (SSRIs)',
    recommendation: 'use-as-directed',
    affectedByGenes: ['CYP2C19', 'CYP2D6'],
    guidanceText: 'Primarily metabolized by CYP2B6 and CYP3A4. Standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Simvastatin',
    genericName: 'simvastatin',
    drugClass: 'Statins',
    recommendation: 'use-as-directed',
    affectedByGenes: ['SLCO1B1'],
    guidanceText: 'Normal SLCO1B1 function - standard statin dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Pravastatin',
    genericName: 'pravastatin',
    drugClass: 'Statins',
    recommendation: 'use-as-directed',
    affectedByGenes: ['SLCO1B1'],
    guidanceText: 'Normal SLCO1B1 function - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Carbamazepine',
    genericName: 'carbamazepine',
    drugClass: 'Anticonvulsants',
    recommendation: 'use-as-directed',
    affectedByGenes: ['HLA-A*31:01', 'HLA-B*15:02'],
    guidanceText: 'Negative for HLA risk alleles - standard risk for hypersensitivity reactions.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Phenytoin',
    genericName: 'phenytoin',
    drugClass: 'Anticonvulsants',
    recommendation: 'use-as-directed',
    affectedByGenes: ['HLA-B*15:02', 'CYP2C9'],
    guidanceText: 'Negative for HLA-B*15:02 and normal CYP2C9 - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Abacavir',
    genericName: 'abacavir',
    drugClass: 'Antiretrovirals',
    recommendation: 'use-as-directed',
    affectedByGenes: ['HLA-B*57:01'],
    guidanceText: 'Negative for HLA-B*57:01 - standard risk for hypersensitivity.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Azathioprine',
    genericName: 'azathioprine',
    drugClass: 'Immunosuppressants',
    recommendation: 'use-as-directed',
    affectedByGenes: ['TPMT', 'NUDT15'],
    guidanceText: 'Normal TPMT and NUDT15 activity - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Mercaptopurine',
    genericName: 'mercaptopurine',
    drugClass: 'Immunosuppressants',
    recommendation: 'use-as-directed',
    affectedByGenes: ['TPMT', 'NUDT15'],
    guidanceText: 'Normal TPMT and NUDT15 activity - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Fluorouracil',
    genericName: 'fluorouracil',
    drugClass: 'Chemotherapy',
    recommendation: 'use-as-directed',
    affectedByGenes: ['DPYD'],
    guidanceText: 'Normal DPYD activity - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Capecitabine',
    genericName: 'capecitabine',
    drugClass: 'Chemotherapy',
    recommendation: 'use-as-directed',
    affectedByGenes: ['DPYD'],
    guidanceText: 'Normal DPYD activity - standard dosing appropriate.',
    riskLevel: 'standard',
  },
  {
    drugName: 'Irinotecan',
    genericName: 'irinotecan',
    drugClass: 'Chemotherapy',
    recommendation: 'use-as-directed',
    affectedByGenes: ['UGT1A1'],
    guidanceText: 'Normal UGT1A1 activity - standard dosing appropriate.',
    riskLevel: 'standard',
  },
];

// ============================================================================
// Main Import Function
// ============================================================================

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     Quest Diagnostics PGx Panel Import                   ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  // Ensure data directory exists
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  // Get passphrase from env
  const passphrase = process.env.BIOSELF_PASSPHRASE;
  if (!passphrase) {
    console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
    console.error('Set it with: export BIOSELF_PASSPHRASE=your_passphrase');
    process.exit(1);
  }

  console.log('Using passphrase from BIOSELF_PASSPHRASE environment variable.\n');

  // Initialize store
  console.log('Connecting to database...');
  const store = new BiologicalSelfStore(DB_PATH, passphrase);

  // Get or create BiologicalSelf
  let self = store.get();
  if (!self) {
    console.log('Creating new Biological Self profile...');
    self = store.create();
    console.log(`Created profile with ID: ${self.id}`);
  } else {
    console.log(`Loaded existing profile (${self.labResults.length} lab results)`);
    if (self.pharmacogenomics) {
      console.log(`⚠ Existing pharmacogenomics profile found from ${self.pharmacogenomics.source}`);
      console.log('  This import will replace the existing data.\n');
    }
  }

  // Create pharmacogenomics profile
  console.log('─'.repeat(60));
  console.log('Importing Quest Diagnostics Pharmacogenomics Panel...');
  console.log('─'.repeat(60));

  const profile = store.setPharmacogenomics(self, {
    source: 'Quest Diagnostics',
    labOrderCode: '94769',
    testDate: new Date('2019-05-15'),
    reportDate: new Date('2019-05-20'),
    specimenType: 'Buccal Swab',
    genes: GENE_VARIANTS,
    drugGuidance: DRUG_GUIDANCE,
    notes: 'Comprehensive pharmacogenomics panel covering drug metabolism, transport, and sensitivity markers.',
  });

  console.log(`✓ Profile ID: ${profile.id}`);
  console.log(`✓ Source: ${profile.source}`);
  console.log(`✓ Test Date: ${profile.testDate.toLocaleDateString()}`);
  console.log(`✓ Genes Analyzed: ${profile.genes.length}`);
  console.log(`✓ Drug Guidance Entries: ${profile.drugGuidance.length}`);

  // Summary by category
  console.log('\n' + '═'.repeat(60));
  console.log('SUMMARY');
  console.log('═'.repeat(60));

  // Genes by significance
  const actionable = profile.genes.filter(g => g.clinicalSignificance === 'actionable');
  const informative = profile.genes.filter(g => g.clinicalSignificance === 'informative');
  const normalGenes = profile.genes.filter(g => g.clinicalSignificance === 'normal');

  console.log('\nGene Results:');
  console.log(`  • Actionable findings: ${actionable.length}`);
  console.log(`  • Informative findings: ${informative.length}`);
  console.log(`  • Normal results: ${normalGenes.length}`);

  // Drug recommendations
  const alternatives = profile.drugGuidance.filter(d => d.recommendation === 'consider-alternatives');
  const caution = profile.drugGuidance.filter(d => d.recommendation === 'proceed-with-caution');
  const asDirected = profile.drugGuidance.filter(d => d.recommendation === 'use-as-directed');

  console.log('\nDrug Guidance:');
  console.log(`  • Consider Alternatives: ${alternatives.length} drugs`);
  console.log(`  • Proceed with Caution: ${caution.length} drugs`);
  console.log(`  • Use as Directed: ${asDirected.length} drugs`);

  // Key actionable findings
  console.log('\n' + '─'.repeat(60));
  console.log('KEY ACTIONABLE FINDINGS');
  console.log('─'.repeat(60));

  for (const gene of actionable) {
    console.log(`\n${gene.gene}: ${gene.genotype}`);
    console.log(`  Phenotype: ${gene.phenotype}`);
    if (gene.affectedDrugCategories && gene.affectedDrugCategories.length > 0) {
      console.log(`  Affects: ${gene.affectedDrugCategories.join(', ')}`);
    }
    if (gene.notes) {
      console.log(`  Note: ${gene.notes}`);
    }
  }

  // Drugs to avoid or use with caution
  console.log('\n' + '─'.repeat(60));
  console.log('DRUGS REQUIRING ATTENTION');
  console.log('─'.repeat(60));

  console.log('\nConsider Alternatives:');
  for (const drug of alternatives) {
    console.log(`  ⚠ ${drug.drugName} (${drug.drugClass})`);
    console.log(`    Reason: ${drug.guidanceText?.slice(0, 80)}...`);
  }

  console.log('\nProceed with Caution:');
  for (const drug of caution.slice(0, 5)) {
    console.log(`  ⚡ ${drug.drugName} (${drug.drugClass})`);
  }
  if (caution.length > 5) {
    console.log(`  ... and ${caution.length - 5} more`);
  }

  store.close();
  console.log('\n' + '═'.repeat(60));
  console.log('Import complete. Database saved and closed.');
  console.log('═'.repeat(60));
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
