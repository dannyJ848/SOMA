/**
 * Fatty Liver Disease (MASLD/MASH) — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const fattyLiverContent: EducationalContent = {
  id: 'gi-hepatology-fatty-liver',
  type: 'condition',
  name: 'Fatty Liver Disease (MASLD/MASH)',
  nameEs: 'Enfermedad Hep\u00e1tica por Esteatosis Metab\u00f3lica',
  alternateNames: ['NAFLD', 'NASH', 'MASLD', 'MASH', 'Non-Alcoholic Fatty Liver Disease', 'Hepatic Steatosis'],
  levels: {
    1: {
      level: 1,
      summary: 'Fatty liver disease happens when too much fat builds up in your liver, usually linked to being overweight or having diabetes. Most people have no symptoms, but it can slowly lead to serious liver damage.',
      explanation: `Your liver normally has a small amount of fat, but when fat makes up more than 5-10% of the liver, it's called fatty liver disease. It's now one of the most common liver problems — affecting about 1 in 4 adults worldwide. Most people with fatty liver feel fine and don't know they have it. In some people, the extra fat causes inflammation (swelling) called MASH (metabolic-associated steatohepatitis), which can scar the liver over many years. The best treatment is lifestyle change: losing 7-10% of body weight through healthy eating and exercise significantly improves the condition. Controlling diabetes and cholesterol also helps protect your liver.`,
      keyTerms: [t('fatty liver', 'Too much fat stored in liver cells'), t('MASH', 'When fatty liver causes inflammation and can lead to scarring'), t('inflammation', 'Swelling and irritation that can damage tissue over time')],
      analogies: ['Your liver with excess fat is like a kitchen sponge soaked in oil — it can still work, but too much oil makes it heavy and less efficient.'],
      patientCounselingPoints: ['Losing even 5% of body weight can reduce liver fat significantly', 'There is no specific medicine for most fatty liver — lifestyle changes are the main treatment', 'Get your liver checked if you have diabetes or metabolic syndrome'],
    },
    2: {
      level: 2,
      summary: 'MASLD (metabolic dysfunction-associated steatotic liver disease) is hepatic steatosis with at least one cardiometabolic risk factor. MASH adds inflammation and hepatocyte injury, risking fibrosis progression to cirrhosis.',
      explanation: `**New nomenclature (2023):** NAFLD is now MASLD, and NASH is now MASH — reflecting the metabolic basis of the disease. Diagnosis requires hepatic steatosis (on imaging or biopsy) plus at least one cardiometabolic criterion (BMI >25, diabetes, hypertension, dyslipidemia, elevated waist circumference). **Spectrum:** Simple steatosis (MASLD) -> steatohepatitis (MASH) -> fibrosis -> cirrhosis -> HCC. Only ~20% of MASLD progresses to MASH. Fibrosis stage (F0-F4) is the strongest predictor of liver-related outcomes. **Diagnosis:** Ultrasound detects steatosis >30%. FIB-4 index triages fibrosis risk (FIB-4 <1.3 = low risk). FibroScan confirms. Liver biopsy remains gold standard for MASH diagnosis (NAS score). **Management:** Weight loss (7-10% reduces steatohepatitis, >10% can reverse fibrosis). GLP-1 receptor agonists (semaglutide) show liver benefit. Pioglitazone for non-diabetic MASH. Vitamin E 800 IU/day for non-diabetic, non-cirrhotic MASH. Resmetirom is the first FDA-approved drug for MASH with fibrosis.`,
      keyTerms: [t('MASLD', 'Metabolic dysfunction-associated steatotic liver disease — the new term replacing NAFLD'), t('FIB-4', 'Non-invasive fibrosis score using age, AST, ALT, and platelets'), t('steatohepatitis', 'Fatty liver with inflammation and liver cell damage (ballooning)')],
      examples: ['A 50-year-old with BMI 34, type 2 diabetes, elevated ALT, and hepatic steatosis on ultrasound has MASLD. FIB-4 of 2.1 warrants FibroScan to assess fibrosis.'],
    },
    3: {
      level: 3,
      summary: 'MASLD pathogenesis involves the "multiple-hit" hypothesis: insulin resistance drives lipid accumulation, while lipotoxicity, oxidative stress, gut dysbiosis, and genetic susceptibility promote MASH and fibrogenesis.',
      explanation: `**Pathogenesis (multiple parallel hits):** Insulin resistance increases hepatic de novo lipogenesis (SREBP-1c activation) and impairs fatty acid oxidation. Free fatty acids and lipotoxic lipids (diacylglycerols, ceramides, free cholesterol) trigger ER stress, mitochondrial dysfunction, and JNK-mediated hepatocyte apoptosis. Damaged hepatocytes release DAMPs activating Kupffer cells (IL-6, TNF-alpha) and hepatic stellate cells (fibrogenesis). Gut-liver axis: dysbiosis increases intestinal permeability, exposing the liver to endotoxin (LPS) via the portal vein. **Genetics:** PNPLA3 I148M variant (strongest risk allele) impairs hepatic lipid droplet remodeling. TM6SF2 E167K reduces VLDL secretion. HSD17B13 loss-of-function is protective. **Non-invasive assessment algorithm:** FIB-4 -> if indeterminate (1.3-2.67) -> FibroScan or ELF test -> liver biopsy if discordant. MRI-PDFF quantifies steatosis precisely. **Therapeutics:** Resmetirom (THR-beta agonist) — first approved drug: improves fibrosis without worsening MASH in 26% vs. 14% placebo at 52 weeks. Semaglutide resolves MASH in ~60% (STEP-NASH) but fibrosis benefit was non-significant. Combination approaches expected.`,
      keyTerms: [t('PNPLA3', 'Patatin-like phospholipase domain-containing protein 3 — I148M variant is the strongest genetic risk factor for MASLD/MASH'), t('lipotoxicity', 'Cellular damage from accumulation of toxic lipid species in hepatocytes'), t('MRI-PDFF', 'MRI proton density fat fraction — most accurate non-invasive quantification of hepatic steatosis')],
      clinicalNotes: 'FIB-4 <1.3 has >90% NPV for advanced fibrosis. Repeat FIB-4 every 1-2 years in MASLD patients. Cardiovascular disease is the #1 cause of death in MASLD patients, not liver disease.',
    },
    4: {
      level: 4,
      summary: 'Advanced MASLD/MASH management focuses on multi-target combination therapy, cardiometabolic risk reduction, and fibrosis-centric treatment endpoints with emerging non-invasive trial endpoints.',
      explanation: `**Drug pipeline (>40 phase 2/3 agents):** Metabolic targets: GLP-1/GIP/glucagon receptor tri-agonists (survodutide, retatrutide — profound weight loss + liver benefit). FGF21 analogs (pegozafermin) — 27% MASH resolution, fibrosis improvement in 26% (ENLIVEN trial). FXR agonists (obeticholic acid) — fibrosis improvement but pruritus limits use. ACC inhibitors (firsocostat) — reduce DNL but raise triglycerides. Anti-inflammatory: pan-PPAR agonist (lanifibranor) — only agent showing improvement in MASH, fibrosis, AND metabolic parameters simultaneously. Anti-fibrotic: galectin-3 inhibitors, LOXL2 inhibitors. **Non-invasive endpoints:** FDA accepted MRI-PDFF and FibroScan-AST (FAST score) as surrogate trial endpoints. Corrected T1 (cT1) on LiverMultiScan identifies at-risk MASH. **Cardiovascular co-management:** MASLD independently increases CVD risk. GLP-1 RAs with proven CV benefit (semaglutide, liraglutide) offer dual hepatic-cardiac protection. SGLT2 inhibitors reduce hepatic fat via insulin sensitization and caloric loss. **Lean MASLD:** ~10-20% of MASLD patients have normal BMI — often driven by visceral adiposity, PNPLA3 risk alleles, or lipodystrophy. Similar fibrosis risk; same management principles apply.`,
      keyTerms: [t('survodutide', 'GLP-1/glucagon dual agonist showing potent hepatic fat reduction and fibrosis improvement in MASH trials'), t('pegozafermin', 'Engineered FGF21 analog — metabolic hormone analog improving steatohepatitis and fibrosis'), t('FAST score', 'FibroScan-AST composite — identifies at-risk MASH (NAS >= 4 + F >= 2) non-invasively')],
      clinicalNotes: 'Retatrutide (GLP-1/GIP/glucagon triple agonist) achieved 86% relative hepatic fat reduction at 48 weeks in phase 2. Weight loss of ~24% at highest dose.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include multi-omic MASH subtyping for precision medicine, hepatocyte-targeted gene therapy, spatial transcriptomics of fibrosis niches, and AI-based digital pathology endpoints.',
      explanation: `**Precision subtyping:** Multi-omic clustering (transcriptomics, proteomics, metabolomics) of liver biopsies identifies MASH molecular subtypes: lipid metabolism-driven, immune-dominant, and fibrosis-dominant — with differential drug responsiveness. Polygenic risk scores (PNPLA3 + TM6SF2 + HSD17B13 + MBOAT7) stratify genetic risk for fibrosis progression. **Spatial transcriptomics:** Single-cell and spatial RNA-seq reveal fibrosis niche architecture — scar-associated macrophages (TREM2+) and mesenchymal cells with distinct zonation patterns. TREM2+ macrophages are both pro-fibrogenic and pro-resolution, suggesting therapeutic timing matters. **Digital pathology:** AI models (e.g., PathAI) quantify steatosis, ballooning, inflammation, and fibrosis from H&E slides with high inter-reader agreement — accepted as clinical trial endpoint by FDA. Continuous fibrosis scores from AI replace ordinal staging (F0-F4). **Gene therapy/editing:** Hepatocyte-targeted PNPLA3 silencing (GalNAc-siRNA: AZD2693) reduces liver fat in phase 1. Base editing of HSD17B13 to mimic protective loss-of-function variant in preclinical development. **Microbiome:** Defined bacterial consortia increasing secondary bile acid production (FXR activation) show anti-MASH effects in preclinical models.`,
      keyTerms: [t('TREM2+ macrophages', 'Triggering receptor expressed on myeloid cells 2 — scar-associated macrophage phenotype central to fibrosis remodeling'), t('AZD2693', 'GalNAc-conjugated siRNA targeting PNPLA3 in hepatocytes — gene therapy approach to MASLD'), t('PathAI', 'AI-based digital pathology platform for quantitative histologic assessment in MASH clinical trials')],
      clinicalNotes: 'AZD2693 (PNPLA3 siRNA) reduced hepatic fat by 36-46% vs. placebo in PNPLA3 148M carriers in phase 1. Genotype-stratified therapy is the future of MASH treatment.',
    },
  },
  media: [],
  citations: [{ id: 'masld-nomenclature', type: 'article', title: 'A multisociety Delphi consensus on MASLD nomenclature', source: 'Hepatology 2023', authors: ['Rinella ME et al.'] }],
  crossReferences: [
    { targetId: 'gi-hepatology-cirrhosis', targetType: 'condition', relationship: 'child', label: 'Cirrhosis' },
    { targetId: 'gi-hepatology-hepatitis', targetType: 'condition', relationship: 'related', label: 'Hepatitis' },
  ],
  tags: { systems: ['gastrointestinal', 'hepatobiliary', 'endocrine'], topics: ['gastroenterology', 'hepatology', 'metabolic'], keywords: ['MASLD', 'MASH', 'NAFLD', 'fatty liver', 'fibrosis', 'metabolic syndrome', 'resmetirom'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
