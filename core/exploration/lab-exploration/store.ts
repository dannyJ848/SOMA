/**
 * Lab-to-Anatomy Exploration Data Store
 *
 * Comprehensive mappings from lab results to anatomical structures,
 * pathways, and educational content for one-click exploration.
 */

import type {
  LabExplorationContext,
  LabResultWithExploration,
  ExplorationSession,
  ExploreAction,
} from './types';

/**
 * Lab exploration contexts
 */
export const LAB_EXPLORATION_CONTEXTS = new Map<string, LabExplorationContext>([
  // ============ HEMATOLOGY ============
  [
    'hemoglobin',
    {
      labId: 'hemoglobin',
      labName: 'Hemoglobin',
      loincCode: '718-7',
      category: 'hematology',
      primaryOrgans: [
        {
          organId: 'bone-marrow',
          organName: 'Bone Marrow',
          system: 'hematopoietic',
          highlightColor: '#e74c3c',
          role: 'Produces red blood cells containing hemoglobin',
          isPrimary: true,
        },
        {
          organId: 'spleen',
          organName: 'Spleen',
          system: 'lymphatic',
          highlightColor: '#9b59b6',
          role: 'Removes old/damaged red blood cells',
          isPrimary: false,
        },
        {
          organId: 'liver',
          organName: 'Liver',
          system: 'digestive',
          highlightColor: '#8b4513',
          role: 'Processes hemoglobin breakdown products (bilirubin)',
          isPrimary: false,
        },
        {
          organId: 'kidney',
          organName: 'Kidney',
          system: 'urinary',
          highlightColor: '#c0392b',
          role: 'Produces erythropoietin to stimulate RBC production',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'heme-bilirubin',
          pathwayName: 'Heme Synthesis and Bilirubin Metabolism',
          relevance: 'Shows how hemoglobin is made and broken down',
          stepHighlights: [1, 2, 3, 4, 5],
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'The oxygen-carrying protein in red blood cells',
        howItWorks: 'Hemoglobin binds oxygen in the lungs and releases it to tissues throughout the body',
        whyItMatters: 'Low hemoglobin (anemia) means less oxygen delivery; high levels may indicate dehydration or blood disorders',
        explanations: {
          level1: 'Hemoglobin is the part of your blood that carries oxygen from your lungs to the rest of your body, like a delivery truck.',
          level2: 'Hemoglobin is a protein in red blood cells that picks up oxygen in your lungs and drops it off where your body needs it. Low levels mean anemia.',
          level3: 'Hemoglobin is a tetrameric protein (2 alpha, 2 beta globin chains) with heme groups containing iron that reversibly binds oxygen. Its concentration reflects RBC mass.',
          level4: 'Hemoglobin exhibits cooperative oxygen binding described by the oxygen-hemoglobin dissociation curve. Factors like pH, CO2, 2,3-DPG, and temperature shift the curve, affecting oxygen affinity.',
          level5: 'Hemoglobin\'s quaternary structure transitions between T (tense, low O2 affinity) and R (relaxed, high affinity) states. Bohr effect: decreased pH right-shifts the curve, promoting O2 unloading in metabolically active tissues.',
        },
      },
      relatedStructures: [
        {
          structureId: 'red-blood-cells',
          structureName: 'Red Blood Cells (Erythrocytes)',
          system: 'hematopoietic',
          relationship: 'Contains hemoglobin',
          explorePrompt: 'Learn about red blood cell structure and function',
        },
        {
          structureId: 'bone-marrow-red',
          structureName: 'Red Bone Marrow',
          system: 'skeletal',
          relationship: 'Production site',
          explorePrompt: 'See where blood cells are made',
        },
        {
          structureId: 'lungs-alveoli',
          structureName: 'Pulmonary Alveoli',
          system: 'respiratory',
          relationship: 'Oxygen loading site',
          explorePrompt: 'Explore where hemoglobin picks up oxygen',
        },
      ],
      relatedLabs: [
        { labId: 'hematocrit', labName: 'Hematocrit', relationship: 'Parallel measure', clinicalReason: 'Both reflect red cell mass' },
        { labId: 'mcv', labName: 'MCV', relationship: 'RBC size', clinicalReason: 'Helps classify anemia type' },
        { labId: 'reticulocytes', labName: 'Reticulocyte Count', relationship: 'Production marker', clinicalReason: 'Shows if bone marrow is responding' },
        { labId: 'iron', labName: 'Serum Iron', relationship: 'Cofactor', clinicalReason: 'Iron deficiency is common cause of anemia' },
        { labId: 'ferritin', labName: 'Ferritin', relationship: 'Iron stores', clinicalReason: 'Reflects total body iron' },
      ],
      clinicalContext: {
        normalRange: 'Male: 13.5-17.5, Female: 12.0-16.0',
        unit: 'g/dL',
        criticalLow: '7.0',
        criticalHigh: '20.0',
        commonCauses: {
          low: ['Iron deficiency', 'Chronic disease', 'B12/folate deficiency', 'Blood loss', 'Hemolysis', 'Bone marrow failure'],
          high: ['Dehydration', 'Polycythemia vera', 'Chronic hypoxia (COPD, high altitude)', 'EPO-producing tumors'],
        },
        urgentActions: {
          low: 'Severe anemia may require transfusion; evaluate for active bleeding',
          high: 'Evaluate for polycythemia vera vs secondary causes; consider phlebotomy',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'thoracic',
        visibleLayers: ['skeleton', 'organs', 'vessels'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.5, organs: 1.0, vessels: 0.8, nerves: 0.1 },
        focusStructure: 'bone-marrow',
      },
    },
  ],
  [
    'wbc',
    {
      labId: 'wbc',
      labName: 'White Blood Cell Count',
      loincCode: '6690-2',
      category: 'hematology',
      primaryOrgans: [
        {
          organId: 'bone-marrow',
          organName: 'Bone Marrow',
          system: 'hematopoietic',
          highlightColor: '#e74c3c',
          role: 'Produces white blood cells',
          isPrimary: true,
        },
        {
          organId: 'thymus',
          organName: 'Thymus',
          system: 'lymphatic',
          highlightColor: '#3498db',
          role: 'Matures T lymphocytes',
          isPrimary: false,
        },
        {
          organId: 'spleen',
          organName: 'Spleen',
          system: 'lymphatic',
          highlightColor: '#9b59b6',
          role: 'Filters blood and houses immune cells',
          isPrimary: false,
        },
        {
          organId: 'lymph-nodes',
          organName: 'Lymph Nodes',
          system: 'lymphatic',
          highlightColor: '#27ae60',
          role: 'Immune surveillance and activation',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'hematopoiesis',
          pathwayName: 'Hematopoiesis',
          relevance: 'Shows differentiation of WBC types from stem cells',
        },
        {
          pathwayId: 'inflammatory-response',
          pathwayName: 'Inflammatory Response',
          relevance: 'How WBCs respond to infection and injury',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Total number of infection-fighting white blood cells',
        howItWorks: 'WBCs are part of the immune system that fights infections and responds to inflammation',
        whyItMatters: 'High counts often indicate infection or inflammation; low counts increase infection risk',
        explanations: {
          level1: 'White blood cells are your body\'s soldiers that fight germs and infections.',
          level2: 'WBCs are immune cells made in bone marrow. They increase when fighting infection and decrease with certain diseases or treatments.',
          level3: 'WBCs include neutrophils (bacterial defense), lymphocytes (viral/adaptive immunity), monocytes (phagocytosis), eosinophils (parasites/allergy), and basophils (allergic reactions).',
          level4: 'Leukocytosis occurs via demargination (stress), increased production (infection), or decreased apoptosis. The differential helps identify whether elevation is reactive or malignant.',
          level5: 'Left shift (bandemia) indicates acute bacterial infection with premature neutrophil release. Leukemoid reaction (>50K) must be distinguished from CML by LAP score and BCR-ABL testing.',
        },
      },
      relatedStructures: [
        {
          structureId: 'neutrophil',
          structureName: 'Neutrophil',
          system: 'hematopoietic',
          relationship: 'Most common WBC type',
          explorePrompt: 'Learn about the first responders to infection',
        },
        {
          structureId: 'lymphocyte',
          structureName: 'Lymphocyte',
          system: 'lymphatic',
          relationship: 'Adaptive immunity',
          explorePrompt: 'Explore T and B cells',
        },
      ],
      relatedLabs: [
        { labId: 'wbc-differential', labName: 'WBC Differential', relationship: 'Cell types', clinicalReason: 'Identifies which WBC type is elevated' },
        { labId: 'crp', labName: 'C-Reactive Protein', relationship: 'Inflammation marker', clinicalReason: 'Confirms inflammatory state' },
        { labId: 'procalcitonin', labName: 'Procalcitonin', relationship: 'Bacterial marker', clinicalReason: 'Distinguishes bacterial from viral' },
      ],
      clinicalContext: {
        normalRange: '4.5-11.0',
        unit: 'K/µL',
        criticalLow: '2.0',
        criticalHigh: '30.0',
        commonCauses: {
          low: ['Chemotherapy', 'Bone marrow failure', 'Viral infections', 'Autoimmune', 'Medications'],
          high: ['Infection', 'Inflammation', 'Stress', 'Leukemia', 'Medications (steroids)'],
        },
        urgentActions: {
          low: 'Neutropenic precautions; evaluate for infection despite low counts',
          high: 'Rule out serious infection; consider hematologic malignancy if very high',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'anterior',
        visibleLayers: ['skeleton', 'organs'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.5, organs: 1.0, vessels: 0.3, nerves: 0.1 },
        focusStructure: 'spleen',
      },
    },
  ],
  // ============ LIVER FUNCTION ============
  [
    'alt',
    {
      labId: 'alt',
      labName: 'ALT (Alanine Aminotransferase)',
      loincCode: '1742-6',
      category: 'liver',
      primaryOrgans: [
        {
          organId: 'liver',
          organName: 'Liver',
          system: 'digestive',
          highlightColor: '#8b4513',
          role: 'Primary source of ALT; released when liver cells are damaged',
          isPrimary: true,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'amino-acid-metabolism',
          pathwayName: 'Amino Acid Metabolism',
          relevance: 'ALT transfers amino groups in gluconeogenesis',
        },
        {
          pathwayId: 'gluconeogenesis',
          pathwayName: 'Gluconeogenesis',
          relevance: 'ALT converts alanine to pyruvate for glucose synthesis',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'An enzyme found mainly in liver cells',
        howItWorks: 'ALT is released into the blood when liver cells are damaged or inflamed',
        whyItMatters: 'Elevated ALT is a sensitive marker of liver injury; more liver-specific than AST',
        explanations: {
          level1: 'ALT is like an alarm from your liver - when liver cells are hurt, ALT leaks into your blood.',
          level2: 'ALT is an enzyme inside liver cells. When the liver is inflamed or damaged, ALT spills into the bloodstream, raising levels.',
          level3: 'ALT catalyzes transamination (alanine + α-ketoglutarate → pyruvate + glutamate). It\'s more liver-specific than AST because it\'s predominantly hepatic.',
          level4: 'ALT elevation pattern helps diagnose liver disease: >1000 suggests acute viral hepatitis or ischemia; modest elevation with high ALP suggests cholestasis; AST:ALT >2 suggests alcoholic liver disease.',
          level5: 'ALT is cytoplasmic, while AST has mitochondrial and cytoplasmic isoforms. Hepatocyte necrosis releases both, but mitochondrial injury (alcohol, severe damage) preferentially elevates AST. NAFLD typically shows ALT > AST.',
        },
      },
      relatedStructures: [
        {
          structureId: 'hepatocyte',
          structureName: 'Hepatocytes',
          system: 'digestive',
          relationship: 'Contains ALT',
          explorePrompt: 'Explore liver cell structure',
        },
        {
          structureId: 'liver-lobule',
          structureName: 'Liver Lobule',
          system: 'digestive',
          relationship: 'Functional unit',
          explorePrompt: 'See liver microanatomy',
        },
        {
          structureId: 'portal-vein',
          structureName: 'Portal Vein',
          system: 'cardiovascular',
          relationship: 'Blood supply',
          explorePrompt: 'Understand liver blood flow',
        },
      ],
      relatedLabs: [
        { labId: 'ast', labName: 'AST', relationship: 'Paired enzyme', clinicalReason: 'AST:ALT ratio helps identify cause' },
        { labId: 'alp', labName: 'Alkaline Phosphatase', relationship: 'Cholestatic marker', clinicalReason: 'Distinguishes hepatocellular vs cholestatic' },
        { labId: 'bilirubin', labName: 'Bilirubin', relationship: 'Liver function', clinicalReason: 'Assesses synthetic/excretory function' },
        { labId: 'ggt', labName: 'GGT', relationship: 'Biliary enzyme', clinicalReason: 'Confirms hepatic source of ALP' },
        { labId: 'hepatitis-panel', labName: 'Hepatitis Panel', relationship: 'Etiology', clinicalReason: 'Identifies viral causes' },
      ],
      clinicalContext: {
        normalRange: '7-56',
        unit: 'U/L',
        criticalHigh: '1000',
        commonCauses: {
          low: ['Normal (no clinical significance)'],
          high: ['NAFLD/NASH', 'Viral hepatitis', 'Medications', 'Alcohol', 'Autoimmune hepatitis', 'Ischemia'],
        },
        urgentActions: {
          high: 'ALT >1000 requires urgent evaluation for acute hepatitis, ischemia, or drug toxicity',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'abdominal',
        visibleLayers: ['organs', 'vessels'],
        opacity: { skin: 0.1, muscle: 0.1, skeleton: 0.2, organs: 1.0, vessels: 0.6, nerves: 0.1 },
        focusStructure: 'liver',
      },
    },
  ],
  [
    'bilirubin',
    {
      labId: 'bilirubin',
      labName: 'Total Bilirubin',
      loincCode: '1975-2',
      category: 'liver',
      primaryOrgans: [
        {
          organId: 'liver',
          organName: 'Liver',
          system: 'digestive',
          highlightColor: '#8b4513',
          role: 'Conjugates bilirubin for excretion',
          isPrimary: true,
        },
        {
          organId: 'spleen',
          organName: 'Spleen',
          system: 'lymphatic',
          highlightColor: '#9b59b6',
          role: 'Breaks down old RBCs, releasing bilirubin',
          isPrimary: false,
        },
        {
          organId: 'gallbladder',
          organName: 'Gallbladder',
          system: 'digestive',
          highlightColor: '#27ae60',
          role: 'Stores and excretes bilirubin in bile',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'heme-bilirubin',
          pathwayName: 'Heme Synthesis and Bilirubin Metabolism',
          relevance: 'Complete pathway from heme to bilirubin excretion',
          stepHighlights: [6, 7, 8, 9, 10, 11, 12],
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Yellow pigment from red blood cell breakdown',
        howItWorks: 'Bilirubin is produced when RBCs die, processed by the liver, and excreted in bile',
        whyItMatters: 'Elevated bilirubin causes jaundice and indicates liver, biliary, or hemolytic problems',
        explanations: {
          level1: 'Bilirubin is a yellow substance from old blood cells. Too much turns your skin and eyes yellow (jaundice).',
          level2: 'When red blood cells break down, they release bilirubin. The liver processes it for removal in bile. High levels cause jaundice.',
          level3: 'Unconjugated (indirect) bilirubin is transported to liver, conjugated with glucuronic acid by UGT1A1, and excreted in bile. Direct vs indirect fractions help localize the problem.',
          level4: 'Pre-hepatic (hemolysis): elevated unconjugated. Hepatic (hepatitis, Gilbert\'s): both elevated. Post-hepatic (obstruction): elevated conjugated with dark urine, pale stools.',
          level5: 'UGT1A1 polymorphisms cause Gilbert syndrome (mild unconjugated hyperbilirubinemia). Crigler-Najjar: severe UGT1A1 deficiency. Dubin-Johnson: defective MRP2 canalicular transport of conjugated bilirubin.',
        },
      },
      relatedStructures: [
        {
          structureId: 'bile-ducts',
          structureName: 'Bile Ducts',
          system: 'digestive',
          relationship: 'Excretion pathway',
          explorePrompt: 'Trace the biliary system',
        },
        {
          structureId: 'red-blood-cells',
          structureName: 'Red Blood Cells',
          system: 'hematopoietic',
          relationship: 'Source of bilirubin',
          explorePrompt: 'Learn about RBC lifecycle',
        },
      ],
      relatedLabs: [
        { labId: 'direct-bilirubin', labName: 'Direct Bilirubin', relationship: 'Fraction', clinicalReason: 'Distinguishes conjugated from unconjugated' },
        { labId: 'alt', labName: 'ALT', relationship: 'Liver injury', clinicalReason: 'Assesses hepatocellular damage' },
        { labId: 'alp', labName: 'ALP', relationship: 'Cholestasis', clinicalReason: 'Elevated in biliary obstruction' },
        { labId: 'ldh', labName: 'LDH', relationship: 'Hemolysis marker', clinicalReason: 'Elevated if hemolytic cause' },
        { labId: 'haptoglobin', labName: 'Haptoglobin', relationship: 'Hemolysis marker', clinicalReason: 'Low if hemolytic cause' },
      ],
      clinicalContext: {
        normalRange: '0.1-1.2',
        unit: 'mg/dL',
        criticalHigh: '15.0',
        commonCauses: {
          low: ['Normal (no clinical significance)'],
          high: ['Hemolysis', 'Hepatitis', 'Cirrhosis', 'Biliary obstruction', 'Gilbert syndrome', 'Medications'],
        },
        urgentActions: {
          high: 'New jaundice requires urgent workup; rule out biliary obstruction, acute hepatitis, hemolysis',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'abdominal',
        visibleLayers: ['organs', 'vessels'],
        opacity: { skin: 0.1, muscle: 0.1, skeleton: 0.2, organs: 1.0, vessels: 0.5, nerves: 0.1 },
        focusStructure: 'liver',
      },
    },
  ],
  // ============ KIDNEY FUNCTION ============
  [
    'creatinine',
    {
      labId: 'creatinine',
      labName: 'Creatinine',
      loincCode: '2160-0',
      category: 'kidney',
      primaryOrgans: [
        {
          organId: 'kidney',
          organName: 'Kidneys',
          system: 'urinary',
          highlightColor: '#c0392b',
          role: 'Filters and excretes creatinine; level reflects kidney function',
          isPrimary: true,
        },
        {
          organId: 'skeletal-muscle',
          organName: 'Skeletal Muscle',
          system: 'muscular',
          highlightColor: '#e74c3c',
          role: 'Produces creatinine from muscle metabolism',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'creatine-phosphate',
          pathwayName: 'Creatine Phosphate Metabolism',
          relevance: 'Creatinine is the breakdown product of creatine phosphate',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Waste product from muscle metabolism filtered by kidneys',
        howItWorks: 'Creatinine is produced at a constant rate from muscle and freely filtered by glomeruli',
        whyItMatters: 'Rising creatinine indicates declining kidney function; used to calculate GFR',
        explanations: {
          level1: 'Creatinine is waste from your muscles that your kidneys filter out. High levels mean your kidneys may not be working well.',
          level2: 'Creatinine comes from normal muscle breakdown and is removed by the kidneys. When kidney function drops, creatinine rises.',
          level3: 'Creatinine is freely filtered at the glomerulus with minimal secretion/reabsorption. Serum creatinine inversely correlates with GFR and is used in eGFR calculations.',
          level4: 'Creatinine-based eGFR (CKD-EPI equation) accounts for age, sex, and race. Limitations: affected by muscle mass, diet, and tubular secretion. Cystatin C provides muscle-independent estimate.',
          level5: 'Creatinine tubular secretion (~10-20%) via OCT2 and MATE transporters is inhibited by trimethoprim, cimetidine, causing pseudo-elevation without true GFR change. Steady-state assumption requires stable production.',
        },
      },
      relatedStructures: [
        {
          structureId: 'nephron',
          structureName: 'Nephron',
          system: 'urinary',
          relationship: 'Filtration unit',
          explorePrompt: 'Explore kidney microstructure',
        },
        {
          structureId: 'glomerulus',
          structureName: 'Glomerulus',
          system: 'urinary',
          relationship: 'Filtration site',
          explorePrompt: 'See where blood is filtered',
        },
      ],
      relatedLabs: [
        { labId: 'bun', labName: 'BUN', relationship: 'Kidney marker', clinicalReason: 'BUN:Cr ratio helps distinguish pre-renal from intrinsic' },
        { labId: 'egfr', labName: 'eGFR', relationship: 'Calculated function', clinicalReason: 'More accurate assessment of kidney function' },
        { labId: 'cystatin-c', labName: 'Cystatin C', relationship: 'Alternative marker', clinicalReason: 'Independent of muscle mass' },
        { labId: 'urine-albumin', labName: 'Urine Albumin', relationship: 'Kidney damage', clinicalReason: 'Detects early diabetic nephropathy' },
      ],
      clinicalContext: {
        normalRange: 'Male: 0.7-1.3, Female: 0.6-1.1',
        unit: 'mg/dL',
        criticalHigh: '10.0',
        commonCauses: {
          low: ['Low muscle mass', 'Malnutrition', 'Pregnancy'],
          high: ['Acute kidney injury', 'Chronic kidney disease', 'Dehydration', 'Medications', 'Rhabdomyolysis'],
        },
        urgentActions: {
          high: 'Rapidly rising creatinine requires urgent evaluation for AKI; check for obstruction, nephrotoxins',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'posterior',
        visibleLayers: ['skeleton', 'organs', 'vessels'],
        opacity: { skin: 0.1, muscle: 0.3, skeleton: 0.4, organs: 1.0, vessels: 0.7, nerves: 0.1 },
        focusStructure: 'kidney',
      },
    },
  ],
  // ============ LIPID PANEL ============
  [
    'ldl-cholesterol',
    {
      labId: 'ldl-cholesterol',
      labName: 'LDL Cholesterol',
      loincCode: '13457-7',
      category: 'lipid',
      primaryOrgans: [
        {
          organId: 'liver',
          organName: 'Liver',
          system: 'digestive',
          highlightColor: '#8b4513',
          role: 'Produces VLDL (precursor to LDL) and clears LDL via LDL receptors',
          isPrimary: true,
        },
        {
          organId: 'arteries',
          organName: 'Arteries',
          system: 'cardiovascular',
          highlightColor: '#e74c3c',
          role: 'Site of LDL deposition and atherosclerosis',
          isPrimary: false,
        },
        {
          organId: 'heart',
          organName: 'Heart',
          system: 'cardiovascular',
          highlightColor: '#c0392b',
          role: 'Target organ for atherosclerotic disease',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'cholesterol-synthesis',
          pathwayName: 'Cholesterol Synthesis Pathway',
          relevance: 'Shows how cholesterol is made and where statins work',
        },
        {
          pathwayId: 'vldl-ldl-lifecycle',
          pathwayName: 'VLDL to LDL Lifecycle',
          relevance: 'How LDL particles are formed',
        },
        {
          pathwayId: 'atherosclerosis',
          pathwayName: 'Atherosclerosis Progression',
          relevance: 'How LDL contributes to plaque formation',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: '"Bad" cholesterol that can build up in arteries',
        howItWorks: 'LDL delivers cholesterol to tissues but can deposit in artery walls causing atherosclerosis',
        whyItMatters: 'High LDL is a major risk factor for heart attack and stroke; lowering it reduces risk',
        explanations: {
          level1: 'LDL is "bad" cholesterol that can clog your arteries like grease in a pipe.',
          level2: 'LDL carries cholesterol in your blood. Too much can build up in artery walls, leading to heart disease.',
          level3: 'LDL particles deliver cholesterol to peripheral tissues. Oxidized LDL enters the arterial intima, triggering foam cell formation and atherosclerosis.',
          level4: 'LDL particle number and size affect atherogenicity. Small dense LDL is more atherogenic. LDL receptor upregulation by statins increases hepatic LDL clearance.',
          level5: 'ApoB-100 on LDL binds hepatic LDL receptors for clearance. PCSK9 degrades LDL receptors, reducing clearance. PCSK9 inhibitors markedly lower LDL by increasing receptor recycling.',
        },
      },
      relatedStructures: [
        {
          structureId: 'coronary-arteries',
          structureName: 'Coronary Arteries',
          system: 'cardiovascular',
          relationship: 'Target of atherosclerosis',
          explorePrompt: 'See where heart attacks occur',
        },
        {
          structureId: 'carotid-artery',
          structureName: 'Carotid Arteries',
          system: 'cardiovascular',
          relationship: 'Stroke risk',
          explorePrompt: 'Explore brain blood supply',
        },
      ],
      relatedLabs: [
        { labId: 'total-cholesterol', labName: 'Total Cholesterol', relationship: 'Overall lipids', clinicalReason: 'Context for LDL' },
        { labId: 'hdl-cholesterol', labName: 'HDL Cholesterol', relationship: 'Protective factor', clinicalReason: '"Good" cholesterol for comparison' },
        { labId: 'triglycerides', labName: 'Triglycerides', relationship: 'Lipid component', clinicalReason: 'Affects LDL calculation and particle size' },
        { labId: 'apob', labName: 'Apolipoprotein B', relationship: 'Particle number', clinicalReason: 'More accurate atherogenic risk' },
        { labId: 'lpa', labName: 'Lipoprotein(a)', relationship: 'Genetic risk', clinicalReason: 'Independent CVD risk factor' },
      ],
      clinicalContext: {
        normalRange: '<100 (optimal), <70 for high risk',
        unit: 'mg/dL',
        criticalHigh: '>190',
        commonCauses: {
          low: ['Statins', 'PCSK9 inhibitors', 'Hyperthyroidism', 'Malnutrition'],
          high: ['Diet', 'Genetics (familial hypercholesterolemia)', 'Hypothyroidism', 'Diabetes', 'Obesity'],
        },
        urgentActions: {
          high: 'Very high LDL (>190) suggests familial hypercholesterolemia; consider early intensive treatment',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'thoracic',
        visibleLayers: ['organs', 'vessels'],
        opacity: { skin: 0.1, muscle: 0.1, skeleton: 0.2, organs: 0.8, vessels: 1.0, nerves: 0.1 },
        focusStructure: 'heart',
      },
    },
  ],
  // ============ THYROID ============
  [
    'tsh',
    {
      labId: 'tsh',
      labName: 'Thyroid Stimulating Hormone (TSH)',
      loincCode: '3016-3',
      category: 'thyroid',
      primaryOrgans: [
        {
          organId: 'pituitary',
          organName: 'Pituitary Gland',
          system: 'endocrine',
          highlightColor: '#9b59b6',
          role: 'Produces TSH to stimulate thyroid',
          isPrimary: true,
        },
        {
          organId: 'thyroid',
          organName: 'Thyroid Gland',
          system: 'endocrine',
          highlightColor: '#3498db',
          role: 'Target of TSH; produces T3 and T4',
          isPrimary: true,
        },
        {
          organId: 'hypothalamus',
          organName: 'Hypothalamus',
          system: 'nervous',
          highlightColor: '#e74c3c',
          role: 'Releases TRH to control pituitary TSH',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'hpt-axis',
          pathwayName: 'Hypothalamic-Pituitary-Thyroid Axis',
          relevance: 'Complete feedback loop controlling thyroid function',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Pituitary hormone that controls thyroid function',
        howItWorks: 'TSH stimulates the thyroid to produce hormones; levels inversely reflect thyroid function',
        whyItMatters: 'High TSH indicates underactive thyroid (hypothyroidism); low TSH indicates overactive (hyperthyroidism)',
        explanations: {
          level1: 'TSH is like a thermostat that tells your thyroid how much hormone to make.',
          level2: 'TSH from the pituitary tells the thyroid to make hormones. High TSH means your thyroid is underactive; low TSH means it\'s overactive.',
          level3: 'TSH has an inverse log-linear relationship with free T4. Small changes in T4 cause large changes in TSH, making TSH the most sensitive test for thyroid dysfunction.',
          level4: 'TSH binds thyroid TSH receptors (Gs-coupled), stimulating cAMP → thyroid hormone synthesis and release. Negative feedback by T3/T4 suppresses TRH and TSH.',
          level5: 'Subclinical disease: TSH abnormal with normal fT4. Central hypothyroidism: low/normal TSH with low fT4 (rare). TSH pulsatility and circadian variation affect interpretation.',
        },
      },
      relatedStructures: [
        {
          structureId: 'thyroid-follicle',
          structureName: 'Thyroid Follicle',
          system: 'endocrine',
          relationship: 'TSH target',
          explorePrompt: 'See thyroid microstructure',
        },
        {
          structureId: 'anterior-pituitary',
          structureName: 'Anterior Pituitary',
          system: 'endocrine',
          relationship: 'TSH source',
          explorePrompt: 'Explore the master gland',
        },
      ],
      relatedLabs: [
        { labId: 'free-t4', labName: 'Free T4', relationship: 'Thyroid hormone', clinicalReason: 'Confirms hypo/hyperthyroidism' },
        { labId: 'free-t3', labName: 'Free T3', relationship: 'Active hormone', clinicalReason: 'May be elevated in early hyperthyroidism' },
        { labId: 'tpo-antibodies', labName: 'TPO Antibodies', relationship: 'Autoimmune', clinicalReason: 'Confirms Hashimoto\'s thyroiditis' },
        { labId: 'trab', labName: 'TSH Receptor Antibodies', relationship: 'Graves\' disease', clinicalReason: 'Diagnoses autoimmune hyperthyroidism' },
      ],
      clinicalContext: {
        normalRange: '0.4-4.0',
        unit: 'mIU/L',
        criticalLow: '0.1',
        criticalHigh: '10.0',
        commonCauses: {
          low: ['Hyperthyroidism (Graves\')', 'Thyroiditis', 'Excess thyroid medication', 'Central hypothyroidism (rare)'],
          high: ['Primary hypothyroidism (Hashimoto\'s)', 'Iodine deficiency', 'Thyroid hormone resistance (rare)'],
        },
        urgentActions: {
          low: 'Very low TSH with symptoms may indicate thyroid storm; check free T4/T3',
          high: 'Very high TSH indicates significant hypothyroidism; check symptoms, start replacement',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'head-neck',
        visibleLayers: ['skeleton', 'organs'],
        opacity: { skin: 0.2, muscle: 0.3, skeleton: 0.5, organs: 1.0, vessels: 0.3, nerves: 0.2 },
        focusStructure: 'thyroid',
      },
    },
  ],
  // ============ CARDIAC ============
  [
    'troponin',
    {
      labId: 'troponin',
      labName: 'Troponin',
      loincCode: '6598-7',
      category: 'cardiac',
      primaryOrgans: [
        {
          organId: 'heart',
          organName: 'Heart',
          system: 'cardiovascular',
          highlightColor: '#c0392b',
          role: 'Source of troponin; released when heart muscle is damaged',
          isPrimary: true,
        },
        {
          organId: 'coronary-arteries',
          organName: 'Coronary Arteries',
          system: 'cardiovascular',
          highlightColor: '#e74c3c',
          role: 'Blockage leads to heart muscle damage and troponin release',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'cardiac-muscle-contraction',
          pathwayName: 'Cardiac Muscle Contraction',
          relevance: 'Troponin\'s role in regulating heart muscle contraction',
        },
        {
          pathwayId: 'atherosclerosis',
          pathwayName: 'Atherosclerosis Progression',
          relevance: 'How plaque rupture causes heart attack',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Protein released when heart muscle is damaged',
        howItWorks: 'Troponin is part of the heart muscle contraction machinery; damage releases it into blood',
        whyItMatters: 'Elevated troponin is the key marker for heart attack (myocardial infarction)',
        explanations: {
          level1: 'Troponin is a chemical that leaks from your heart into your blood when heart muscle is hurt.',
          level2: 'Troponin is released when heart muscle cells are damaged. It\'s the main blood test to diagnose a heart attack.',
          level3: 'Cardiac troponins (cTnI, cTnT) are regulatory proteins in the sarcomere. High-sensitivity assays detect very small amounts, enabling early MI diagnosis.',
          level4: 'Troponin rises 3-6 hours after MI, peaks at 12-24 hours. The degree of elevation correlates with infarct size. Serial measurements track evolution.',
          level5: 'Type 1 MI: plaque rupture with thrombosis. Type 2 MI: supply-demand mismatch. High-sensitivity troponin detects myocardial injury from any cause; clinical context determines significance.',
        },
      },
      relatedStructures: [
        {
          structureId: 'cardiac-myocyte',
          structureName: 'Cardiac Myocyte',
          system: 'cardiovascular',
          relationship: 'Contains troponin',
          explorePrompt: 'See heart muscle cell structure',
        },
        {
          structureId: 'coronary-arteries',
          structureName: 'Coronary Arteries',
          system: 'cardiovascular',
          relationship: 'Blockage site',
          explorePrompt: 'Explore where heart attacks occur',
        },
      ],
      relatedLabs: [
        { labId: 'ck-mb', labName: 'CK-MB', relationship: 'Cardiac enzyme', clinicalReason: 'Older marker, less specific than troponin' },
        { labId: 'bnp', labName: 'BNP', relationship: 'Heart strain', clinicalReason: 'Assesses heart failure' },
        { labId: 'ecg', labName: 'ECG', relationship: 'Electrical activity', clinicalReason: 'Localizes MI, guides treatment' },
      ],
      clinicalContext: {
        normalRange: '<0.04',
        unit: 'ng/mL',
        criticalHigh: '>0.4',
        commonCauses: {
          low: ['Normal (no heart damage)'],
          high: ['Heart attack (MI)', 'Heart failure', 'Myocarditis', 'PE', 'Renal failure', 'Sepsis', 'Cardiac procedures'],
        },
        urgentActions: {
          high: 'Elevated troponin requires urgent evaluation: ECG, cardiology consult, possible catheterization',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'thoracic',
        visibleLayers: ['skeleton', 'organs', 'vessels'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.3, organs: 1.0, vessels: 0.9, nerves: 0.1 },
        focusStructure: 'heart',
      },
    },
  ],
  // ============ ELECTROLYTES ============
  [
    'sodium',
    {
      labId: 'sodium',
      labName: 'Sodium',
      loincCode: '2951-2',
      category: 'electrolyte',
      primaryOrgans: [
        {
          organId: 'kidney',
          organName: 'Kidneys',
          system: 'urinary',
          highlightColor: '#c0392b',
          role: 'Regulates sodium excretion; responds to aldosterone and ADH',
          isPrimary: true,
        },
        {
          organId: 'adrenal-gland',
          organName: 'Adrenal Glands',
          system: 'endocrine',
          highlightColor: '#f39c12',
          role: 'Produces aldosterone to retain sodium',
          isPrimary: false,
        },
        {
          organId: 'pituitary',
          organName: 'Pituitary Gland',
          system: 'endocrine',
          highlightColor: '#9b59b6',
          role: 'Releases ADH affecting water balance and sodium concentration',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'raas',
          pathwayName: 'Renin-Angiotensin-Aldosterone System',
          relevance: 'How kidneys regulate sodium balance',
        },
        {
          pathwayId: 'aldosterone-mechanism',
          pathwayName: 'Aldosterone Mechanism',
          relevance: 'Detailed sodium reabsorption pathway',
        },
        {
          pathwayId: 'adh-mechanism',
          pathwayName: 'ADH Mechanism',
          relevance: 'Water balance affects sodium concentration',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Main electrolyte controlling fluid balance',
        howItWorks: 'Sodium determines how much water your body holds and affects nerve and muscle function',
        whyItMatters: 'Abnormal sodium causes neurologic symptoms; severe abnormalities can be life-threatening',
        explanations: {
          level1: 'Sodium is the salt in your blood that controls how much water your body keeps.',
          level2: 'Sodium is the main electrolyte in blood. It controls fluid balance and is regulated by the kidneys. Too high or low causes brain symptoms.',
          level3: 'Serum sodium reflects water balance more than sodium balance. Hyponatremia is usually dilutional; hypernatremia indicates water deficit.',
          level4: 'Assess volume status to classify hyponatremia: hypovolemic, euvolemic (SIADH), or hypervolemic (CHF, cirrhosis). Correct slowly to avoid osmotic demyelination.',
          level5: 'ADH is the primary regulator of water balance and thus sodium concentration. Effective osmolality (excludes urea) determines ADH release. ODS risk factors: Na <120, chronic, hypokalemia, malnutrition.',
        },
      },
      relatedStructures: [
        {
          structureId: 'collecting-duct',
          structureName: 'Collecting Duct',
          system: 'urinary',
          relationship: 'Sodium fine-tuning',
          explorePrompt: 'See where aldosterone acts',
        },
        {
          structureId: 'hypothalamus',
          structureName: 'Hypothalamus',
          system: 'nervous',
          relationship: 'Osmoreceptors',
          explorePrompt: 'Learn about thirst regulation',
        },
      ],
      relatedLabs: [
        { labId: 'serum-osmolality', labName: 'Serum Osmolality', relationship: 'Tonicity', clinicalReason: 'Confirms true hypoosmolar state' },
        { labId: 'urine-sodium', labName: 'Urine Sodium', relationship: 'Kidney response', clinicalReason: 'Distinguishes causes' },
        { labId: 'urine-osmolality', labName: 'Urine Osmolality', relationship: 'ADH activity', clinicalReason: '>100 suggests SIADH' },
        { labId: 'potassium', labName: 'Potassium', relationship: 'Co-regulated', clinicalReason: 'Often abnormal together' },
      ],
      clinicalContext: {
        normalRange: '136-145',
        unit: 'mEq/L',
        criticalLow: '120',
        criticalHigh: '160',
        commonCauses: {
          low: ['SIADH', 'Diuretics', 'Heart failure', 'Cirrhosis', 'Polydipsia', 'Vomiting'],
          high: ['Dehydration', 'Diabetes insipidus', 'Impaired thirst', 'Osmotic diuresis'],
        },
        urgentActions: {
          low: 'Severe hyponatremia (<120) with symptoms needs urgent treatment; avoid rapid correction',
          high: 'Severe hypernatremia needs careful water replacement; avoid rapid correction',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'abdominal',
        visibleLayers: ['skeleton', 'organs'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.3, organs: 1.0, vessels: 0.5, nerves: 0.1 },
        focusStructure: 'kidney',
      },
    },
  ],
  // ============ GLUCOSE ============
  [
    'glucose',
    {
      labId: 'glucose',
      labName: 'Blood Glucose',
      loincCode: '2345-7',
      category: 'glucose',
      primaryOrgans: [
        {
          organId: 'pancreas',
          organName: 'Pancreas',
          system: 'endocrine',
          highlightColor: '#f1c40f',
          role: 'Produces insulin and glucagon to regulate glucose',
          isPrimary: true,
        },
        {
          organId: 'liver',
          organName: 'Liver',
          system: 'digestive',
          highlightColor: '#8b4513',
          role: 'Stores glycogen and produces glucose via gluconeogenesis',
          isPrimary: true,
        },
        {
          organId: 'skeletal-muscle',
          organName: 'Skeletal Muscle',
          system: 'muscular',
          highlightColor: '#e74c3c',
          role: 'Major site of glucose uptake and storage',
          isPrimary: false,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'glucose-insulin',
          pathwayName: 'Glucose-Insulin Pathway',
          relevance: 'How insulin regulates blood glucose',
        },
        {
          pathwayId: 'glycolysis',
          pathwayName: 'Glycolysis',
          relevance: 'How cells use glucose for energy',
        },
        {
          pathwayId: 'gluconeogenesis',
          pathwayName: 'Gluconeogenesis',
          relevance: 'How liver makes glucose during fasting',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Blood sugar - the body\'s main energy source',
        howItWorks: 'Glucose from food is regulated by insulin; cells use it for energy',
        whyItMatters: 'High glucose indicates diabetes; very high or low can be emergencies',
        explanations: {
          level1: 'Glucose is sugar in your blood that gives your body energy. Too much over time causes diabetes.',
          level2: 'Blood glucose comes from food and is controlled by insulin from the pancreas. High levels damage blood vessels over time.',
          level3: 'Glucose homeostasis involves insulin (lowers glucose via GLUT4 translocation), glucagon (raises glucose via glycogenolysis), and counter-regulatory hormones.',
          level4: 'Fasting glucose ≥126 or random ≥200 with symptoms diagnoses diabetes. HbA1c reflects 3-month average. Insulin resistance precedes beta cell failure in type 2.',
          level5: 'Incretin effect: GLP-1 and GIP augment insulin secretion. SGLT2 inhibitors cause glucosuria, reducing glucose independent of insulin. Metformin inhibits hepatic gluconeogenesis via AMPK.',
        },
      },
      relatedStructures: [
        {
          structureId: 'beta-cell',
          structureName: 'Pancreatic Beta Cells',
          system: 'endocrine',
          relationship: 'Insulin source',
          explorePrompt: 'See insulin-producing cells',
        },
        {
          structureId: 'islet-of-langerhans',
          structureName: 'Islets of Langerhans',
          system: 'endocrine',
          relationship: 'Endocrine pancreas',
          explorePrompt: 'Explore pancreas microstructure',
        },
      ],
      relatedLabs: [
        { labId: 'hba1c', labName: 'HbA1c', relationship: 'Long-term control', clinicalReason: '3-month glucose average' },
        { labId: 'insulin', labName: 'Insulin', relationship: 'Hormone level', clinicalReason: 'Assesses insulin production/resistance' },
        { labId: 'c-peptide', labName: 'C-Peptide', relationship: 'Endogenous insulin', clinicalReason: 'Distinguishes type 1 from type 2' },
        { labId: 'fructosamine', labName: 'Fructosamine', relationship: '2-week average', clinicalReason: 'Alternative when HbA1c unreliable' },
      ],
      clinicalContext: {
        normalRange: 'Fasting: 70-99',
        unit: 'mg/dL',
        criticalLow: '50',
        criticalHigh: '500',
        commonCauses: {
          low: ['Insulin excess', 'Sulfonylureas', 'Alcohol', 'Sepsis', 'Adrenal insufficiency'],
          high: ['Diabetes', 'Stress/illness', 'Steroids', 'Pancreatitis', 'DKA', 'HHS'],
        },
        urgentActions: {
          low: 'Symptomatic hypoglycemia: give glucose immediately; investigate cause',
          high: 'Very high glucose (>500) may indicate DKA/HHS requiring urgent treatment',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'abdominal',
        visibleLayers: ['organs'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.2, organs: 1.0, vessels: 0.4, nerves: 0.1 },
        focusStructure: 'pancreas',
      },
    },
  ],
  [
    'hba1c',
    {
      labId: 'hba1c',
      labName: 'Hemoglobin A1c',
      loincCode: '4548-4',
      category: 'glucose',
      primaryOrgans: [
        {
          organId: 'pancreas',
          organName: 'Pancreas',
          system: 'endocrine',
          highlightColor: '#f1c40f',
          role: 'Insulin production affects long-term glucose control',
          isPrimary: true,
        },
        {
          organId: 'red-blood-cells',
          organName: 'Red Blood Cells',
          system: 'hematopoietic',
          highlightColor: '#e74c3c',
          role: 'Hemoglobin becomes glycated in proportion to glucose exposure',
          isPrimary: true,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'glycation',
          pathwayName: 'Protein Glycation',
          relevance: 'How glucose attaches to hemoglobin',
        },
        {
          pathwayId: 'diabetic-complications',
          pathwayName: 'Diabetic Complications',
          relevance: 'Long-term effects of poor glucose control',
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Average blood sugar over the past 2-3 months',
        howItWorks: 'Glucose attaches to hemoglobin; higher glucose means more attachment',
        whyItMatters: 'HbA1c shows long-term diabetes control and predicts complication risk',
        explanations: {
          level1: 'HbA1c shows your average blood sugar over several months, like a report card for diabetes control.',
          level2: 'HbA1c measures sugar that has attached to hemoglobin in red blood cells. It shows average glucose over 2-3 months.',
          level3: 'Non-enzymatic glycation of hemoglobin is proportional to glucose exposure over RBC lifespan (~120 days). HbA1c <7% is the typical target for diabetes.',
          level4: 'DCCT/UKPDS established that lower HbA1c reduces microvascular complications. Each 1% reduction decreases complication risk by ~15-30%.',
          level5: 'HbA1c limitations: affected by hemoglobin variants, anemia, RBC turnover, and ethnicity. Fructosamine or CGM data may be preferred in these cases.',
        },
      },
      relatedStructures: [
        {
          structureId: 'diabetic-retinopathy',
          structureName: 'Retina (Diabetic Changes)',
          system: 'nervous',
          relationship: 'Complication site',
          explorePrompt: 'See diabetic eye damage',
        },
        {
          structureId: 'diabetic-nephropathy',
          structureName: 'Kidney (Diabetic Changes)',
          system: 'urinary',
          relationship: 'Complication site',
          explorePrompt: 'See diabetic kidney damage',
        },
      ],
      relatedLabs: [
        { labId: 'glucose', labName: 'Fasting Glucose', relationship: 'Point-in-time', clinicalReason: 'Acute glucose level' },
        { labId: 'urine-microalbumin', labName: 'Urine Microalbumin', relationship: 'Kidney complication', clinicalReason: 'Screens for diabetic nephropathy' },
        { labId: 'lipid-panel', labName: 'Lipid Panel', relationship: 'CV risk', clinicalReason: 'Diabetes increases CVD risk' },
      ],
      clinicalContext: {
        normalRange: '<5.7%',
        unit: '%',
        criticalHigh: '>10%',
        commonCauses: {
          low: ['Recent hypoglycemia', 'Hemolytic anemia', 'Blood loss', 'Hemoglobin variants'],
          high: ['Poorly controlled diabetes', 'New diabetes diagnosis', 'Steroid use'],
        },
        urgentActions: {
          high: 'Very high HbA1c indicates poor control; intensify treatment and screen for complications',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'abdominal',
        visibleLayers: ['organs'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.2, organs: 1.0, vessels: 0.4, nerves: 0.1 },
        focusStructure: 'pancreas',
      },
    },
  ],
  // ============ COAGULATION ============
  [
    'pt-inr',
    {
      labId: 'pt-inr',
      labName: 'PT/INR',
      loincCode: '5902-2',
      category: 'coagulation',
      primaryOrgans: [
        {
          organId: 'liver',
          organName: 'Liver',
          system: 'digestive',
          highlightColor: '#8b4513',
          role: 'Produces clotting factors measured by PT',
          isPrimary: true,
        },
      ],
      relatedPathways: [
        {
          pathwayId: 'coagulation-cascade',
          pathwayName: 'Coagulation Cascade',
          relevance: 'PT measures the extrinsic and common pathways',
          stepHighlights: [1, 5, 6],
        },
      ],
      physiologyExplanation: {
        whatItMeasures: 'Time for blood to clot via the extrinsic pathway',
        howItWorks: 'PT measures factors VII, X, V, II, and fibrinogen; INR standardizes results',
        whyItMatters: 'Monitors warfarin therapy and assesses liver synthetic function',
        explanations: {
          level1: 'PT/INR tells how long it takes your blood to clot, especially important if you take blood thinners.',
          level2: 'PT measures clotting time using factors made by the liver. INR standardizes results to monitor warfarin.',
          level3: 'PT assesses the extrinsic pathway (tissue factor → VII → Xa → thrombin → fibrin). INR normalizes for reagent variability: INR = (patient PT / normal PT)^ISI.',
          level4: 'Warfarin inhibits vitamin K-dependent factors (II, VII, IX, X). Factor VII has shortest half-life, so PT rises first. Target INR 2-3 for most indications.',
          level5: 'Factor VII deficiency isolated to PT (intrinsic pathway factors normal). Supratherapeutic INR: hold warfarin, vitamin K if bleeding or very high, FFP/PCC for serious bleeding.',
        },
      },
      relatedStructures: [
        {
          structureId: 'hepatocyte',
          structureName: 'Hepatocytes',
          system: 'digestive',
          relationship: 'Factor synthesis',
          explorePrompt: 'See where clotting factors are made',
        },
      ],
      relatedLabs: [
        { labId: 'ptt', labName: 'PTT', relationship: 'Intrinsic pathway', clinicalReason: 'Monitors heparin, screens intrinsic factors' },
        { labId: 'fibrinogen', labName: 'Fibrinogen', relationship: 'Final clot', clinicalReason: 'Low in DIC, liver failure' },
        { labId: 'inr', labName: 'INR', relationship: 'Standardized PT', clinicalReason: 'Comparable across labs for warfarin' },
      ],
      clinicalContext: {
        normalRange: 'PT: 11-13.5 sec, INR: 0.8-1.1',
        unit: 'seconds / ratio',
        criticalHigh: 'INR >5',
        commonCauses: {
          low: ['Hypercoagulable state (rare clinical significance)'],
          high: ['Warfarin', 'Liver disease', 'Vitamin K deficiency', 'DIC', 'Factor VII deficiency'],
        },
        urgentActions: {
          high: 'Elevated INR with bleeding: hold warfarin, give vitamin K, consider FFP/PCC',
        },
        disclaimer: 'This information is educational. Consult your healthcare provider for medical advice.',
      },
      viewSettings: {
        cameraPosition: 'abdominal',
        visibleLayers: ['organs'],
        opacity: { skin: 0.1, muscle: 0.2, skeleton: 0.2, organs: 1.0, vessels: 0.5, nerves: 0.1 },
        focusStructure: 'liver',
      },
    },
  ],
]);

// ============ API Functions ============

/**
 * Get exploration context for a lab
 */
export function getLabExplorationContext(labId: string): LabExplorationContext | undefined {
  return LAB_EXPLORATION_CONTEXTS.get(labId);
}

/**
 * Get all available lab exploration contexts
 */
export function getAllLabExplorationContexts(): LabExplorationContext[] {
  return Array.from(LAB_EXPLORATION_CONTEXTS.values());
}

/**
 * Get labs by category
 */
export function getLabsByCategory(category: string): LabExplorationContext[] {
  return Array.from(LAB_EXPLORATION_CONTEXTS.values()).filter(
    (lab) => lab.category === category
  );
}

/**
 * Get explanation at specified complexity level
 */
export function getLabExplanation(
  labId: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const context = LAB_EXPLORATION_CONTEXTS.get(labId);
  return context?.physiologyExplanation.explanations[`level${level}`];
}

/**
 * Get related labs for a given lab
 */
export function getRelatedLabs(labId: string): LabExplorationContext['relatedLabs'] {
  const context = LAB_EXPLORATION_CONTEXTS.get(labId);
  return context?.relatedLabs ?? [];
}

/**
 * Get organs to highlight for a lab
 */
export function getOrgansToHighlight(labId: string): LabExplorationContext['primaryOrgans'] {
  const context = LAB_EXPLORATION_CONTEXTS.get(labId);
  return context?.primaryOrgans ?? [];
}

/**
 * Get view settings for 3D exploration
 */
export function getExplorationViewSettings(labId: string): LabExplorationContext['viewSettings'] | undefined {
  const context = LAB_EXPLORATION_CONTEXTS.get(labId);
  return context?.viewSettings;
}

/**
 * Create exploration context for a user's lab result
 */
export function createLabResultExploration(
  resultId: string,
  labId: string,
  value: number,
  unit: string,
  date: string
): LabResultWithExploration | undefined {
  const context = getLabExplorationContext(labId);
  if (!context) return undefined;

  // Determine interpretation based on normal range
  let interpretation: LabResultWithExploration['interpretation'] = 'normal';
  const { normalRange, criticalLow, criticalHigh } = context.clinicalContext;

  // Parse normal range (simplified - assumes "X-Y" or "Male: X-Y, Female: X-Y" format)
  const rangeMatch = normalRange.match(/(\d+\.?\d*)-(\d+\.?\d*)/);
  if (rangeMatch) {
    const low = parseFloat(rangeMatch[1]);
    const high = parseFloat(rangeMatch[2]);

    if (criticalLow && value < parseFloat(criticalLow)) {
      interpretation = 'critical-low';
    } else if (criticalHigh && value > parseFloat(criticalHigh)) {
      interpretation = 'critical-high';
    } else if (value < low) {
      interpretation = 'low';
    } else if (value > high) {
      interpretation = 'high';
    }
  }

  return {
    resultId,
    labId,
    value,
    unit,
    date,
    interpretation,
    explorationContext: context,
  };
}

/**
 * Get explore action for a lab
 */
export function createExploreAction(
  labId: string,
  resultValue?: number,
  interpretation?: string
): ExploreAction {
  return {
    type: 'lab-explore',
    labId,
    resultValue,
    interpretation,
  };
}

/**
 * Create new exploration session
 */
export function createExplorationSession(
  labId: string,
  complexityLevel: 1 | 2 | 3 | 4 | 5 = 3
): ExplorationSession {
  return {
    currentLab: labId,
    viewedStructures: [],
    viewedPathways: [],
    complexityLevel,
    notes: [],
    startTime: new Date().toISOString(),
  };
}

/**
 * Search labs by keyword
 */
export function searchLabs(query: string): LabExplorationContext[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(LAB_EXPLORATION_CONTEXTS.values()).filter(
    (lab) =>
      lab.labName.toLowerCase().includes(lowerQuery) ||
      lab.category.toLowerCase().includes(lowerQuery) ||
      lab.physiologyExplanation.whatItMeasures.toLowerCase().includes(lowerQuery) ||
      lab.primaryOrgans.some((o) => o.organName.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get labs that involve a specific organ
 */
export function getLabsForOrgan(organId: string): LabExplorationContext[] {
  return Array.from(LAB_EXPLORATION_CONTEXTS.values()).filter((lab) =>
    lab.primaryOrgans.some((o) => o.organId === organId)
  );
}

/**
 * Get all lab categories
 */
export function getLabCategories(): string[] {
  const categories = new Set<string>();
  LAB_EXPLORATION_CONTEXTS.forEach((lab) => categories.add(lab.category));
  return Array.from(categories);
}
