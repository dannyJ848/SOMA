/**
 * Vitamin & Micronutrient Levels - Laboratory Interpretation Content
 *
 * Educational content for vitamin lab test interpretation:
 * - Vitamin B12 (Cobalamin), Folate, Vitamin D, Vitamin A, Vitamin E, Vitamin K
 * - Thiamine (B1), Vitamin B6
 * - Iron Studies: Ferritin, TIBC, Serum Iron
 *
 * Spanish translations (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';
import { LabPanel } from './types';

// Helper to build EducationalContent entries with all 5 complexity levels
const mkEntry = (
  id: string, name: string, nameEs: string, alts: string[],
  l1: { s: string; e: string; t: [string, string][] },
  l2: { s: string; e: string; t: [string, string][] },
  l3: { s: string; e: string; t: [string, string][] },
  l4: { s: string; e: string; t: [string, string][] },
  l5: { s: string; e: string; t: [string, string][] },
): EducationalContent => ({
  id, type: 'concept', name,
  alternateNames: [nameEs, ...alts],
  levels: {
    1: { level: 1, summary: l1.s, explanation: l1.e, keyTerms: l1.t.map(([term, definition]) => ({ term, definition })) },
    2: { level: 2, summary: l2.s, explanation: l2.e, keyTerms: l2.t.map(([term, definition]) => ({ term, definition })) },
    3: { level: 3, summary: l3.s, explanation: l3.e, keyTerms: l3.t.map(([term, definition]) => ({ term, definition })) },
    4: { level: 4, summary: l4.s, explanation: l4.e, keyTerms: l4.t.map(([term, definition]) => ({ term, definition })) },
    5: { level: 5, summary: l5.s, explanation: l5.e, keyTerms: l5.t.map(([term, definition]) => ({ term, definition })) },
  },
  media: [], citations: [], crossReferences: [],
  tags: { systems: ['hematologic', 'endocrine'], topics: ['vitamins', 'micronutrients', 'lab-interpretation'], clinicalRelevance: 'high' },
  createdAt: '2025-01-15', updatedAt: '2025-01-15', version: 1, status: 'published',
});

// =============================================================================
// VITAMIN B12
// =============================================================================
const vitaminB12 = mkEntry(
  'lab-vitamin-b12', 'Vitamin B12 (Cobalamin)', 'Vitamina B12 (Cobalamina)', ['Cobalamin', 'B12'],
  { s: 'B12 helps make red blood cells and keeps nerves healthy.', e: 'Found in animal foods. Low B12 causes tiredness, numbness, and anemia. Vegans and older adults are at risk.', t: [['vitamin B12', 'A vitamin from animal foods for blood cells and nerves'], ['anemia', 'Not enough healthy red blood cells']] },
  { s: 'B12 is essential for DNA synthesis and myelination. Deficiency causes macrocytic anemia and neurological damage.', e: '**Normal**: 200-900 pg/mL. Cofactor for methionine synthase and methylmalonyl-CoA mutase. Megaloblastic anemia (MCV >100), hypersegmented neutrophils, peripheral neuropathy.', t: [['pernicious anemia', 'Autoimmune destruction of parietal cells preventing B12 absorption'], ['macrocytic', 'Red blood cells larger than normal (MCV >100 fL)']] },
  { s: 'B12 workup: serum B12, MMA, homocysteine, anti-IF antibodies. Gray zone 200-300 needs MMA.', e: '## B12 Interpretation\nAbsorption: gastric acid -> haptocorrin -> IF binding -> ileal cubilin.\n- <200: deficient\n- 200-300: gray zone, check MMA\n- >300: unlikely deficient\nMMA specific to B12; homocysteine elevated in both B12 and folate deficiency.', t: [['intrinsic factor', 'Glycoprotein from parietal cells for ileal B12 absorption'], ['methylmalonic acid', 'Metabolite elevated specifically in B12 deficiency']] },
  { s: 'Advanced: holotranscobalamin, methylfolate trap, nitrous oxide toxicity.', e: '## Advanced B12\nHolotranscobalamin (active B12, ~20% of total) is earliest depletion marker. Methylfolate trap: B12 deficiency traps folate as 5-methylTHF. N2O oxidizes B12, inactivating both enzymes.', t: [['holotranscobalamin', 'Active B12 fraction; earliest depletion marker'], ['methylfolate trap', 'Folate trapped as 5-methylTHF from B12 deficiency']] },
  { s: 'Expert: CblC disease (MMACHC mutations), cB12 composite, post-bariatric monitoring.', e: '## Expert B12\nCblC disease (MMACHC): most common inborn error. cB12 integrates B12, holoTC, MMA, homocysteine. Hydroxocobalamin preferred in renal impairment.', t: [['CblC disease', 'Most common inborn error of cobalamin metabolism'], ['cB12', 'Combined B12 indicator integrating four biomarkers']] },
);

// =============================================================================
// FOLATE
// =============================================================================
const folate = mkEntry(
  'lab-folate', 'Folate (Folic Acid)', 'Folato (Acido Folico)', ['Folic Acid', 'Vitamin B9'],
  { s: 'Folate helps make new cells, especially blood cells and during pregnancy.', e: 'Found in leafy greens, beans, fortified grains. Critical in pregnancy for brain/spine development. Low folate causes anemia.', t: [['folate', 'A B vitamin for DNA and blood cells']] },
  { s: 'Folate deficiency causes macrocytic anemia without neurological damage (unlike B12).', e: '**Normal**: 2.7-17.0 ng/mL. One-carbon metabolism cofactor. 3-4 month stores. Elevated homocysteine but normal MMA distinguishes from B12.', t: [['megaloblastic anemia', 'Anemia from impaired DNA synthesis'], ['neural tube defect', 'Birth defect from inadequate folate']] },
  { s: 'RBC folate reflects 120-day tissue stores; serum folate fluctuates with meals.', e: '## Folate Metabolism\nAbsorbed jejunum via PCFT. Drug-induced: methotrexate (DHFR inhibitor), trimethoprim, phenytoin, sulfasalazine.', t: [['tetrahydrofolate', 'Active folate as one-carbon carrier'], ['leucovorin', 'Reduced folate rescue after methotrexate']] },
  { s: 'MTHFR C677T reduces activity 35-70%; NOT a thrombophilia (ACMG).', e: '## Advanced Folate\nMTHFR C677T: mild hyperhomocysteinemia. ACMG against routine testing. Folate protects against CRC but may promote existing neoplasms.', t: [['MTHFR', 'Folate cycle enzyme with common polymorphisms'], ['DHFR', 'Dihydrofolate reductase; methotrexate target']] },
  { s: 'Expert: cerebral folate deficiency, SAM epigenetics, pharmacogenomic antifolate dosing.', e: '## Expert Folate\nCerebral folate deficiency: anti-FR-alpha antibodies or FOLR1 mutations. SAM is universal methyl donor. Periconceptional folate influences offspring epigenome.', t: [['cerebral folate deficiency', 'Low CSF folate with normal serum'], ['glucarpidase', 'Cleaves methotrexate in delayed clearance']] },
);

// =============================================================================
// VITAMIN D
// =============================================================================
const vitaminD = mkEntry(
  'lab-vitamin-d', 'Vitamin D (25-Hydroxyvitamin D)', 'Vitamina D (25-Hidroxivitamina D)', ['25-OH D', 'Calcidiol'],
  { s: 'Vitamin D helps absorb calcium and keep bones strong.', e: 'The "sunshine vitamin." Skin makes it from sunlight. Without enough, bones become weak. Many need supplements in winter.', t: [['vitamin D', 'Helps absorb calcium for strong bones']] },
  { s: 'Deficient <20, insufficient 20-29, sufficient 30-100, toxic >150 ng/mL.', e: '**Metabolism**: Skin (UVB) -> liver (25-OH) -> kidney (1,25-(OH)2 calcitriol). Repletion: D3 50,000 IU/wk x8wk then 1-2K IU daily. Obesity needs 2-3x.', t: [['calcidiol', '25-OH vitamin D; storage form'], ['calcitriol', '1,25-(OH)2 vitamin D; active hormone']] },
  { s: 'PTH, FGF23, calcium regulate calcitriol via CYP27B1.', e: '## Vitamin D Physiology\nCYP2R1 (liver), CYP27B1 (kidney), CYP24A1 (inactivation). Extra-skeletal: VDR on T-cells, CVD/cancer associations epidemiologic.', t: [['CYP27B1', '1-alpha hydroxylase producing calcitriol'], ['CYP24A1', '24-hydroxylase catabolizing vitamin D']] },
  { s: 'VDR genomics, extra-renal hydroxylation in granulomatous disease, CKD management.', e: '## Advanced Vitamin D\nVDR-RXR binds >1000 promoters. Extra-renal CYP27B1 (macrophages) explains granulomatous hypercalcemia. CKD: calcitriol/paricalcitol for G4-G5.', t: [['VDR', 'Vitamin D receptor; >1000 gene targets'], ['paricalcitol', 'Selective VDR activator for CKD']] },
  { s: 'VITAL: no CVD/cancer benefit in replete. Free 25-OH D, VDBP polymorphisms.', e: '## Expert Vitamin D\nVITAL (2019): no benefit in replete adults. Free 25-OH D may better predict status with VDBP variants. CYP24A1 loss-of-function: infantile hypercalcemia.', t: [['VDBP', 'Vitamin D binding protein; genotype-dependent'], ['CYP24A1 deficiency', 'Impaired vitamin D catabolism']] },
);

// =============================================================================
// VITAMIN A
// =============================================================================
const vitaminA = mkEntry(
  'lab-vitamin-a', 'Vitamin A (Retinol)', 'Vitamina A (Retinol)', ['Retinol', 'Retinyl Esters'],
  { s: 'Vitamin A keeps eyes, skin, and immune system healthy.', e: 'Found in liver, dairy, carrots. Too little causes night blindness; too much damages liver.', t: [['vitamin A', 'For eyes, skin, and immunity']] },
  { s: 'Normal: 20-60 mcg/dL. Deficiency: night blindness, xerophthalmia. Toxicity: hepatotoxicity.', e: 'Fat-soluble; liver stellate cells store it. Deficiency: night blindness -> xerophthalmia -> keratomalacia. Toxicity: pseudotumor cerebri or hepatotoxicity. Teratogenic >10,000 IU/day.', t: [['xerophthalmia', 'Dry eye from vitamin A deficiency'], ['retinol', 'Active form measured in blood']] },
  { s: 'RBP4 transports retinol; retinoic acid regulates gene expression and differentiation.', e: '## Vitamin A Biology\nRetinol (animal) and beta-carotene (plants). Stellate (Ito) cells store retinol. RBP4/STRA6 delivery. Functions: rhodopsin (vision), retinoic acid (differentiation).', t: [['RBP4', 'Retinol binding protein'], ['retinoic acid', 'Active metabolite regulating genes']] },
  { s: 'ATRA in APL (PML-RARa); isotretinoin for acne; carotenemia vs jaundice.', e: '## Advanced Vitamin A\nATRA differentiates APL blasts. Isotretinoin for acne. Carotenemia: yellow skin, normal sclerae. Retinyl esters elevated in toxicity.', t: [['ATRA', 'Retinoic acid for APL differentiation'], ['PML-RARa', 'APL fusion oncoprotein']] },
  { s: 'Expert: measles mortality reduction, stellate cell fibrosis, Golden Rice biofortification.', e: '## Expert Vitamin A\nWHO: vitamin A in measles reduces mortality 30%. Chronic toxicity -> stellate cell activation -> fibrosis. CARET: beta-carotene increased lung cancer in smokers.', t: [['stellate cells', 'Liver cells; activation causes fibrosis'], ['biofortification', 'Enhanced crop micronutrient content']] },
);

// =============================================================================
// VITAMIN E
// =============================================================================
const vitaminE = mkEntry(
  'lab-vitamin-e', 'Vitamin E (Alpha-Tocopherol)', 'Vitamina E (Alfa-Tocoferol)', ['Alpha-Tocopherol', 'Tocopherol'],
  { s: 'Vitamin E protects cells from damage and supports immunity.', e: 'Found in nuts, seeds, oils. Shields cells from free radicals. Deficiency rare in healthy people.', t: [['vitamin E', 'Protects cells from damage']] },
  { s: 'Normal: 5.5-17 mg/L. Deficiency in fat malabsorption: ataxia, neuropathy.', e: 'Fat-soluble antioxidant. Deficiency: ataxia, neuropathy, retinitis pigmentosa. Seen in abetalipoproteinemia, cholestasis. Adjust for lipids.', t: [['alpha-tocopherol', 'Most active vitamin E form'], ['ataxia', 'Loss of coordinated movement']] },
  { s: 'AVED (TTPA mutations) causes ataxia. E:lipid ratio >0.8 mg/g = sufficient.', e: '## Vitamin E Biology\nTTPA in liver retains alpha-tocopherol. AVED: TTPA mutations cause spinocerebellar ataxia. E:lipid ratio corrects for hyperlipidemia.', t: [['TTPA', 'Transfer protein; mutations cause AVED'], ['AVED', 'Ataxia with vitamin E deficiency']] },
  { s: 'High-dose (>400 IU/day) may increase mortality. SELECT: no cancer benefit.', e: '## Advanced Vitamin E\n>400 IU/day may increase mortality. SELECT: no prostate cancer benefit. High-dose alpha displaces gamma-tocopherol.', t: [['gamma-tocopherol', 'Dietary form with anti-inflammatory properties'], ['SELECT trial', 'No cancer benefit from vitamin E']] },
  { s: 'Expert: PIVENS (vitamin E in NASH), tocotrienols, neonatal ROP.', e: '## Expert Vitamin E\nPIVENS: 800 IU/day improved NASH histology in non-diabetics. Tocotrienols have unique biological activities. Neonatal supplementation reduces ROP.', t: [['tocotrienols', 'Vitamin E isoforms with unique activities'], ['PIVENS', 'Vitamin E benefit in non-diabetic NASH']] },
);

// =============================================================================
// VITAMIN K
// =============================================================================
const vitaminK = mkEntry(
  'lab-vitamin-k', 'Vitamin K', 'Vitamina K', ['Phylloquinone', 'Menaquinone', 'K1', 'K2'],
  { s: 'Vitamin K helps blood clot and keeps bones healthy.', e: 'Found in green vegetables (K1) and fermented foods (K2). Deficiency causes bleeding. Newborns get a vitamin K shot.', t: [['vitamin K', 'For blood clotting and bone health']] },
  { s: 'Cofactor for gamma-carboxylation of factors II, VII, IX, X. PT/INR is functional test.', e: 'K1 (plants), K2 (bacteria/fermented). Deficiency: elevated PT/INR. Warfarin is K antagonist. Newborn prophylaxis prevents hemorrhagic disease.', t: [['phylloquinone', 'K1 from plants'], ['menaquinone', 'K2 from bacteria']] },
  { s: 'GGCX carboxylates glutamate for calcium binding. VKORC1 recycles vitamin K.', e: '## Vitamin K Biology\nGGCX adds carboxyl groups to clotting factor glutamate residues. VKORC1 recycles K epoxide. Warfarin inhibits VKORC1.', t: [['VKORC1', 'Vitamin K reductase; warfarin target'], ['gamma-carboxylation', 'Enables calcium binding']] },
  { s: 'K2 (MK-7) prevents vascular calcification via matrix Gla protein. VKORC1/CYP2C9 pharmacogenomics.', e: '## Advanced Vitamin K\nMGP requires K-dependent carboxylation. ucMGP biomarker for K insufficiency. VKORC1/CYP2C9 guide warfarin dosing.', t: [['matrix Gla protein', 'K-dependent calcification inhibitor'], ['ucMGP', 'Functional K deficiency biomarker']] },
  { s: 'Expert: PIVKA-II (HCC marker), K2 in CKD calcification, 4-factor PCC reversal.', e: '## Expert Vitamin K\nPIVKA-II: HCC marker. CKD: high ucMGP, K2 trials ongoing. 4-factor PCC for urgent warfarin reversal.', t: [['PIVKA-II', 'HCC tumor marker'], ['4-factor PCC', 'Warfarin reversal concentrate']] },
);

// =============================================================================
// THIAMINE (B1)
// =============================================================================
const thiamineB1 = mkEntry(
  'lab-thiamine-b1', 'Thiamine (Vitamin B1)', 'Tiamina (Vitamina B1)', ['Thiamine', 'B1', 'Aneurin'],
  { s: 'Thiamine turns food into energy and supports brain function.', e: 'Found in whole grains, pork, legumes. Alcohol use is the most common deficiency cause, leading to confusion and heart problems.', t: [['thiamine', 'B vitamin converting food to energy']] },
  { s: 'Deficiency: Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia) and beriberi.', e: '**Normal**: 70-180 nmol/L. Cofactor for pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, transketolase. Wernicke (acute), Korsakoff (chronic), beriberi (wet=heart, dry=nerves).', t: [['Wernicke encephalopathy', 'Confusion, ataxia, ophthalmoplegia'], ['beriberi', 'Heart (wet) or nerve (dry) disease']] },
  { s: 'ETKA >25% TPP effect = deficiency. Give thiamine BEFORE glucose.', e: '## Thiamine Biology\nTPP is active form. ETKA functional test. ALWAYS give thiamine BEFORE glucose to prevent precipitating Wernicke.', t: [['TPP', 'Thiamine pyrophosphate; active form'], ['transketolase', 'Thiamine-dependent enzyme']] },
  { s: 'Refeeding syndrome, post-bariatric Wernicke, high-dose IV thiamine in sepsis.', e: '## Advanced Thiamine\nRefeeding: carbs deplete thiamine. Post-bariatric Wernicke under-recognized. IV thiamine 200-500mg TID studied in sepsis.', t: [['refeeding syndrome', 'Crisis from feeding after starvation'], ['VITAMINS trial', 'Thiamine/vitamin C in sepsis']] },
  { s: 'Expert: SLC19A2 (TRMA), thiamine in MSUD and Leigh syndrome.', e: '## Expert Thiamine\nTRMA (SLC19A2): anemia, diabetes, deafness. Thiamine in MSUD. Leigh syndrome variants may respond to high-dose thiamine.', t: [['TRMA', 'Thiamine-responsive megaloblastic anemia'], ['Rogers syndrome', 'TRMA: anemia, diabetes, deafness']] },
);

// =============================================================================
// VITAMIN B6
// =============================================================================
const vitaminB6 = mkEntry(
  'lab-vitamin-b6', 'Vitamin B6 (Pyridoxine)', 'Vitamina B6 (Piridoxina)', ['Pyridoxine', 'PLP'],
  { s: 'B6 helps process protein and make brain chemicals.', e: 'Found in chicken, fish, potatoes, bananas. Helps make neurotransmitters. High supplement doses cause nerve damage.', t: [['vitamin B6', 'For protein processing and brain chemicals']] },
  { s: 'PLP normal: 5-50 mcg/L. Deficiency: sideroblastic anemia, neuropathy. INH classic cause.', e: 'Cofactor for >140 enzymes: aminotransferases, ALA synthase (heme), DOPA decarboxylase. INH classic cause. Toxicity >200mg/day: sensory neuropathy.', t: [['pyridoxal-5-phosphate', 'PLP; active B6 form'], ['sideroblastic anemia', 'Impaired heme synthesis']] },
  { s: 'PLP for ALA synthase (heme), CBS (homocysteine), AADC (neurotransmitters).', e: '## B6 Biology\nPLP for: ALA synthase (heme), CBS (homocysteine), AADC (serotonin/dopamine). INH forms hydrazone with PLP.', t: [['ALA synthase', 'B6-dependent heme enzyme'], ['cystathionine beta-synthase', 'B6-dependent homocysteine enzyme']] },
  { s: 'Pyridoxine-dependent epilepsy (ALDH7A1); B6-responsive homocystinuria.', e: '## Advanced B6\nALDH7A1 mutations: pyridoxine-dependent epilepsy. ~50% homocystinuria (CBS) is B6-responsive. PNPO mutations need PLP, not pyridoxine.', t: [['antiquitin', 'ALDH7A1; pyridoxine-dependent epilepsy'], ['PNPO', 'Mutations need PLP not pyridoxine']] },
  { s: 'Expert: DRG toxicity mechanism, ALAS2 (X-linked sideroblastic anemia), drug interactions.', e: '## Expert B6\nToxicity: DRG sensory ganglionopathy. X-linked sideroblastic anemia (ALAS2): ~60% respond to B6. Levodopa: use carbidopa. Penicillamine chelates PLP.', t: [['ALAS2', 'X-linked sideroblastic anemia gene'], ['sensory ganglionopathy', 'DRG damage from B6 toxicity']] },
);

// =============================================================================
// FERRITIN
// =============================================================================
const ferritin = mkEntry(
  'lab-ferritin', 'Ferritin', 'Ferritina', ['Serum Ferritin', 'Iron Stores'],
  { s: 'Ferritin measures stored iron needed for oxygen transport.', e: 'Low = iron running out (tiredness). High = too much iron or inflammation. Iron-rich foods: meat, spinach, cereals.', t: [['ferritin', 'Iron storage protein'], ['iron deficiency', 'Not enough iron']] },
  { s: 'Ferritin <30 diagnostic of iron deficiency. Acute phase reactant.', e: '**Normal**: M 12-300, F 12-150 ng/mL. Iron deficiency: low ferritin/iron, high TIBC, Tsat <20%. Chronic disease: high ferritin, low iron/TIBC. Overload: high ferritin, Tsat >45%.', t: [['TIBC', 'Total iron-binding capacity'], ['transferrin saturation', 'Iron loaded on transferrin']] },
  { s: 'Hepcidin blocks ferroportin. IL-6 raises hepcidin, sequestering iron.', e: '## Iron Homeostasis\nHepcidin blocks ferroportin. Increased by IL-6/iron. Decreased by deficiency/hypoxia/erythroferrone. CKD: <100 cutoff. HF: <100 or 100-300 with Tsat <20%.', t: [['hepcidin', 'Master iron regulator'], ['ferroportin', 'Sole iron exporter']] },
  { s: 'HFE hemochromatosis, IV iron in HFrEF, MRI T2* cardiac iron.', e: '## Advanced Iron\nHemochromatosis: Type 1 (HFE C282Y), Type 2 (juvenile), Type 3 (TFR2), Type 4 (ferroportin). IV iron improves HFrEF outcomes.', t: [['HFE', 'Hemochromatosis gene'], ['hemojuvelin', 'Juvenile hemochromatosis co-receptor']] },
  { s: 'Expert: chelation, hepcidin mimetics (rusfertide), sTfR/log ferritin.', e: '## Expert Iron\nDeferoxamine, deferasirox, deferiprone. sTfR elevated in true deficiency not ACD. Rusfertide for polycythemia vera.', t: [['rusfertide', 'Hepcidin mimetic'], ['sTfR', 'Distinguishes iron deficiency from ACD']] },
);

// =============================================================================
// TIBC
// =============================================================================
const tibc = mkEntry(
  'lab-tibc', 'TIBC (Total Iron-Binding Capacity)', 'TIBC (Capacidad Total de Fijacion de Hierro)', ['Total Iron-Binding Capacity', 'Transferrin'],
  { s: 'TIBC measures how much iron your blood can carry.', e: 'Low iron -> more carriers (TIBC up). High iron or illness -> TIBC down.', t: [['TIBC', 'Blood iron-carrying capacity']] },
  { s: 'Normal: 250-370 mcg/dL. High in iron deficiency, low in chronic disease.', e: 'Indirect transferrin measure. Tsat = iron/TIBC x 100%. IDA: TIBC >400, Tsat <20%. ACD: TIBC low-normal. Hemochromatosis: Tsat >45%.', t: [['transferrin', 'Iron transport protein'], ['transferrin saturation', 'Iron/TIBC percentage']] },
  { s: 'Transferrin is a negative acute phase reactant; low in inflammation.', e: '## TIBC Biology\nTransferrin binds 2 Fe3+. Negative acute phase reactant. In IDA+inflammation, TIBC misleadingly normal. Use sTfR or CHr.', t: [['negative acute phase reactant', 'Decreases in inflammation'], ['CHr', 'Reticulocyte hemoglobin marker']] },
  { s: 'TfR1 (ubiquitous, IRP) vs TfR2 (hepatocyte hepcidin sensor).', e: '## Advanced TIBC\nTfR1: IRP1/2 regulated. TfR2: hepatocyte hepcidin sensor. Atransferrinemia: rare AR, anemia + iron overload.', t: [['TfR1', 'Ubiquitous transferrin receptor'], ['TfR2', 'Hepatocyte iron sensor']] },
  { s: 'Expert: UIBC vs TIBC, CDT for alcohol, iron sensing network.', e: '## Expert TIBC\nUIBC directly measured; TIBC = UIBC + serum iron. CDT for chronic alcohol. Iron sensing: TfR2-HFE + BMP6-HJV -> hepcidin.', t: [['CDT', 'Alcohol marker'], ['UIBC', 'Unsaturated iron-binding capacity']] },
);

// =============================================================================
// SERUM IRON
// =============================================================================
const serumIron = mkEntry(
  'lab-serum-iron', 'Serum Iron', 'Hierro Serico', ['Serum Fe', 'Iron Level'],
  { s: 'Serum iron measures circulating iron right now.', e: 'Fluctuates through the day and with meals. Always interpret with ferritin and TIBC together.', t: [['serum iron', 'Iron in blood at time of test']] },
  { s: 'Normal: 60-170 mcg/dL. Diurnal variation 30%. Never interpret alone.', e: 'Transferrin-bound iron. Peak morning. Elevated: hemochromatosis, supplements. Decreased: iron deficiency, chronic disease. Always pair with TIBC/ferritin.', t: [['diurnal variation', 'Normal daily lab fluctuation'], ['transferrin-bound iron', 'Iron on transferrin']] },
  { s: 'NTBI appears at Tsat >70-80%; toxic via Fenton reaction.', e: '## Serum Iron Biology\nNTBI at high Tsat is toxic (Fenton reaction -> free radicals). LPI is the redox-active subfraction driving organ damage.', t: [['NTBI', 'Toxic non-transferrin-bound iron'], ['Fenton reaction', 'Iron generates hydroxyl radicals']] },
  { s: 'Iron poisoning >500: deferoxamine. NTBI drives thalassemia organ damage.', e: '## Advanced Serum Iron\nAcute poisoning >500 mcg/dL: deferoxamine. Thalassemia: transfusions -> NTBI -> organ loading.', t: [['ferrioxamine', 'Iron-deferoxamine chelate'], ['labile plasma iron', 'Redox-active toxic iron']] },
  { s: 'Expert: nutritional immunity, ERFE-hepcidin in ineffective erythropoiesis.', e: '## Expert Serum Iron\nHost withholds iron (nutritional immunity). Pathogens use siderophores. ERFE suppresses hepcidin in beta-thalassemia/MDS.', t: [['nutritional immunity', 'Iron withholding from pathogens'], ['siderophores', 'Microbial iron-chelating molecules']] },
);

// =============================================================================
// CONSOLIDATED EXPORT
// =============================================================================

export const vitaminLevelsContent: Record<string, EducationalContent> = {
  'vitamin-b12': vitaminB12,
  'folate': folate,
  'vitamin-d': vitaminD,
  'vitamin-a': vitaminA,
  'vitamin-e': vitaminE,
  'vitamin-k': vitaminK,
  'thiamine-b1': thiamineB1,
  'vitamin-b6': vitaminB6,
  'ferritin': ferritin,
  'tibc': tibc,
  'serum-iron': serumIron,
};

// =============================================================================
// VITAMIN LEVELS PANEL
// =============================================================================

export const VITAMIN_LEVELS_PANEL: LabPanel = {
  id: 'panel-vitamin-levels',
  name: 'Vitamin & Micronutrient Panel',
  abbreviation: 'Vitamin Panel',
  description: 'Comprehensive vitamin and micronutrient evaluation: B-vitamins, fat-soluble vitamins, and iron studies.',
  includedTests: [
    'lab-vitamin-b12', 'lab-folate', 'lab-vitamin-d', 'lab-vitamin-a',
    'lab-vitamin-e', 'lab-vitamin-k', 'lab-thiamine-b1', 'lab-vitamin-b6',
    'lab-ferritin', 'lab-tibc', 'lab-serum-iron',
  ],
  commonIndications: [
    'Unexplained anemia workup',
    'Fatigue evaluation',
    'Malabsorption screening (celiac, Crohn, post-bariatric)',
    'Neurological symptoms (neuropathy, cognitive decline)',
    'Vegetarian/vegan dietary assessment',
    'Osteoporosis risk evaluation',
    'Alcohol use disorder nutritional assessment',
  ],
  interpretationGuidance: [
    { level: 1, content: 'This panel checks vitamins and minerals. Low levels cause tiredness, weakness, and other problems.' },
    { level: 3, content: 'B12 with MMA/homocysteine. Ferritin needs CRP context. Iron studies together (ferritin, TIBC, iron, Tsat). Vitamin K via PT/INR.' },
    { level: 5, content: 'Integrate holotranscobalamin, sTfR, free 25-OH D, PIVKA-II, ETKA, PLP. MTHFR, VDBP, VKORC1 pharmacogenomics.' },
  ],
  patterns: [
    {
      patternName: 'Megaloblastic Anemia - B12 Deficiency',
      description: 'B12 deficiency with macrocytic anemia.',
      labFindings: [
        { labId: 'lab-vitamin-b12', labName: 'Vitamin B12', expectedDirection: 'low' },
        { labId: 'lab-folate', labName: 'Folate', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Pernicious anemia', 'B12 malabsorption'],
      clinicalContext: 'MCV >100, hypersegmented neutrophils. Elevated MMA AND homocysteine.',
    },
    {
      patternName: 'Iron Deficiency Anemia',
      description: 'Depleted iron stores with microcytic anemia.',
      labFindings: [
        { labId: 'lab-ferritin', labName: 'Ferritin', expectedDirection: 'low' },
        { labId: 'lab-serum-iron', labName: 'Serum Iron', expectedDirection: 'low' },
        { labId: 'lab-tibc', labName: 'TIBC', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Iron deficiency anemia', 'Chronic blood loss'],
      clinicalContext: 'Low MCV, Tsat <20%. Investigate bleeding source.',
    },
    {
      patternName: 'Malabsorption Syndrome',
      description: 'Multiple concurrent deficiencies.',
      labFindings: [
        { labId: 'lab-vitamin-b12', labName: 'Vitamin B12', expectedDirection: 'low' },
        { labId: 'lab-folate', labName: 'Folate', expectedDirection: 'low' },
        { labId: 'lab-ferritin', labName: 'Ferritin', expectedDirection: 'low' },
        { labId: 'lab-vitamin-d', labName: 'Vitamin D', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Celiac disease', 'Crohn disease', 'Post-bariatric surgery'],
      clinicalContext: 'Check celiac serologies (tTG-IgA). Mixed anemia pattern.',
    },
    {
      patternName: 'Alcohol-Related Nutritional Deficiency',
      description: 'Thiamine and folate deficiency in alcohol use disorder.',
      labFindings: [
        { labId: 'lab-thiamine-b1', labName: 'Thiamine', expectedDirection: 'low' },
        { labId: 'lab-folate', labName: 'Folate', expectedDirection: 'low' },
        { labId: 'lab-vitamin-b6', labName: 'Vitamin B6', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Wernicke encephalopathy', 'Alcohol-related deficiency'],
      clinicalContext: 'Give thiamine BEFORE glucose.',
    },
  ],
};
