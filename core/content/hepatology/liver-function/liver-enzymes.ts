import { EducationalContent } from '../../types';

export const liverEnzymes: EducationalContent = {
  id: 'liver-enzymes',
  type: 'concept',
  name: 'Liver Enzymes',
  nameEs: 'Enzimas Hepáticas',
  levels: {
    1: {
      level: 1,
      summary: 'Liver enzymes are proteins that help chemical reactions in the liver.',
      explanation: 'The liver makes special proteins called enzymes that help break down and process nutrients, remove toxins, and perform many other important functions. When liver cells are damaged, these enzymes leak into the bloodstream.',
      keyTerms: [{ term: 'enzymes', definition: 'Proteins that help chemical reactions in cells' }, { term: 'liver function', definition: 'How well the liver performs its jobs' }, { term: 'blood tests', definition: 'Tests that measure substances in your blood' }],
      clinicalNotes: ''
    },
    2: {
      level: 2,
      summary: 'Elevated liver enzymes indicate hepatocellular injury or cholestasis.',
      explanation: 'ALT and AST are markers of hepatocellular damage, while alkaline phosphatase and bilirubin indicate cholestatic processes. The pattern of enzyme elevation helps narrow the differential diagnosis.',
      keyTerms: [{ term: 'ALT', definition: 'Alanine aminotransferase - liver enzyme marker' }, { term: 'AST', definition: 'Aspartate aminotransferase - enzyme found in liver and other tissues' }, { term: 'alkaline phosphatase', definition: 'Enzyme elevated in cholestatic liver disease' }, { term: 'bilirubin', definition: 'Yellow pigment from breakdown of red blood cells' }, { term: 'hepatocellular injury', definition: 'Damage to liver cells' }, { term: 'cholestasis', definition: 'Impaired bile flow' }],
      clinicalNotes: 'ALT is more specific to the liver than AST. AST:ALT ratio >2 suggests alcoholic liver disease.'
    },
    3: {
      level: 3,
      summary: 'Liver enzyme patterns guide diagnostic workup and management of hepatobiliary disease.',
      explanation: 'Different patterns of liver enzyme abnormalities suggest specific etiologies: predominantly elevated aminotransferases indicate hepatocellular disease, while elevated alkaline phosphatase and bilirubin suggest cholestatic or infiltrative processes. The magnitude and ratio of enzyme elevations, combined with clinical context, guide further diagnostic evaluation.',
      keyTerms: [{ term: 'aminotransferases', definition: 'ALT and AST - enzymes marking hepatocellular injury' }, { term: 'cholestatic pattern', definition: 'Elevated alkaline phosphatase and bilirubin' }, { term: 'hepatocellular pattern', definition: 'Elevated aminotransferases' }, { term: 'R-factor', definition: 'Ratio distinguishing hepatocellular from cholestatic injury' }, { term: 'gamma-glutamyl transferase', definition: 'GGT - enzyme confirming hepatic origin of elevated alkaline phosphatase' }],
      clinicalNotes: 'R-factor = (ALT/ULN) / (ALP/ULN). R>5 is hepatocellular, R<2 is cholestatic, R=2-5 is mixed.'
    },
    4: {
      level: 4,
      summary: 'Advanced interpretation of liver enzymes requires understanding of pathophysiology and correlation with imaging and histology.',
      explanation: 'The degree of aminotransferase elevation correlates with extent of hepatocellular necrosis. Very high levels (>1000 U/L) suggest acute hepatocellular injury from ischemia, toxins, or acute viral hepatitis. Chronic mild elevations suggest chronic hepatitis, NAFLD, or medication effects. GGT elevation helps confirm hepatic origin of elevated ALP.',
      keyTerms: [{ term: 'drug-induced liver injury', definition: 'DILI - hepatotoxicity from medications' }, { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease' }, { term: 'ischemic hepatitis', definition: 'Acute hepatic injury from hypoperfusion' }, { term: 'acute hepatitis', definition: 'Sudden liver inflammation' }, { term: 'chronic hepatitis', definition: 'Persistent liver inflammation >6 months' }],
      clinicalNotes: 'AST>ALT with AST:ALT >2 and GGT elevation is classic for alcoholic hepatitis. Consider Wilson disease in young patients with unexplained hepatitis and low ALP.'
    },
    5: {
      level: 5,
      summary: 'Expert management involves integrating enzyme patterns with clinical presentation, imaging, and liver biopsy to guide precision diagnostics and therapy.',
      explanation: 'Liver enzyme patterns must be interpreted in context of pre-test probability for specific diseases. Model for End-Stage Liver Disease (MELD) score incorporates bilirubin and INR for prognostication. Acute liver failure requires rapid evaluation and consideration for transplantation. Drug-induced liver injury requires careful medication history and application of Roussel Uclaf Causality Assessment Method (RUCAM).',
      keyTerms: [{ term: 'MELD score', definition: 'Model for End-Stage Liver Disease - prognostic score' }, { term: 'acute liver failure', definition: 'Sudden severe hepatic dysfunction with encephalopathy' }, { term: 'RUCAM', definition: 'Roussel Uclaf Causality Assessment Method for DILI' }, { term: 'precision medicine', definition: 'Individualized treatment based on genetic and molecular features' }, { term: 'liver transplantation', definition: 'Surgical replacement of diseased liver' }],
      clinicalNotes: 'King\'s College Criteria help determine transplant need in acute liver failure. Consider genetic testing for hemochromatosis, alpha-1 antitrypsin deficiency, and Wilson disease in appropriate clinical contexts.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [{ targetId: 'liver-function-tests', targetType: 'concept', relationship: 'related' }, { targetId: 'what-the-liver-does', targetType: 'concept', relationship: 'related' }],
  tags: {},
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published'
};
