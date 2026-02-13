/**
 * Coagulation Panel - Laboratory Interpretation Content
 *
 * Re-exports coagulation studies content and provides the COAGULATION_PANEL export.
 * Main content is in coagulation-studies.ts
 */

import { LabPanel } from './types';

// Re-export from coagulation-studies.ts
export { coagulationStudiesContent } from './coagulation-studies';

// =============================================================================
// COAGULATION PANEL
// =============================================================================

export const COAGULATION_PANEL: LabPanel = {
  id: 'panel-coagulation',
  name: 'Coagulation Panel',
  nameEs: 'Coagulacion',
  abbreviation: 'Coags',
  description: 'Assessment of blood clotting function including PT/INR, PTT, and fibrinogen.',
  includedTests: [
    'lab-pt',
    'lab-inr',
    'lab-ptt',
    'lab-fibrinogen',
    'lab-d-dimer',
    'lab-platelet-count',
  ],
  commonIndications: [
    'Preoperative assessment',
    'Monitoring anticoagulation therapy (warfarin, heparin)',
    'Evaluation of bleeding disorders',
    'DIC workup',
    'Liver disease assessment',
    'Evaluation of unexplained bruising or bleeding',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'Coagulation tests check how well your blood can form clots. PT/INR tests one clotting pathway (used for warfarin monitoring), and PTT tests another pathway (used for heparin monitoring).',
    },
    {
      level: 3,
      content: 'Systematic coagulation interpretation: Elevated PT alone suggests factor VII or extrinsic pathway issue. Elevated PTT alone suggests intrinsic pathway (factors VIII, IX, XI, XII). Both elevated suggests common pathway (X, V, II, fibrinogen) or DIC. Mixing studies differentiate factor deficiency from inhibitor.',
    },
    {
      level: 5,
      content: 'Expert coagulation interpretation integrates viscoelastic testing (TEG/ROTEM), understands DOAC effects on standard assays, recognizes acquired inhibitors, and applies specialized testing (anti-Xa, thrombin time, specific factor assays) for complex cases.',
    },
  ],
  patterns: [
    {
      patternName: 'Warfarin Effect',
      description: 'Expected pattern with vitamin K antagonist therapy',
      labFindings: [
        { labId: 'lab-pt', labName: 'PT', expectedDirection: 'high' },
        { labId: 'lab-inr', labName: 'INR', expectedDirection: 'high' },
        { labId: 'lab-ptt', labName: 'PTT', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Warfarin therapy', 'Vitamin K deficiency', 'Factor VII deficiency'],
      clinicalContext: 'Warfarin inhibits vitamin K-dependent factors (II, VII, IX, X). PT/INR is primarily affected because factor VII has shortest half-life. PTT may be prolonged at higher INR levels.',
    },
    {
      patternName: 'Heparin Effect',
      description: 'Expected pattern with unfractionated heparin therapy',
      labFindings: [
        { labId: 'lab-ptt', labName: 'PTT', expectedDirection: 'high' },
        { labId: 'lab-pt', labName: 'PT', expectedDirection: 'normal' },
        { labId: 'lab-inr', labName: 'INR', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['UFH therapy', 'Factor VIII/IX/XI deficiency', 'Lupus anticoagulant'],
      clinicalContext: 'Heparin potentiates antithrombin, primarily affecting intrinsic pathway measured by PTT. High-dose heparin may also prolong PT. LMWH has less effect on PTT.',
    },
    {
      patternName: 'DIC Pattern',
      description: 'Consumptive coagulopathy with both clotting and bleeding',
      labFindings: [
        { labId: 'lab-pt', labName: 'PT', expectedDirection: 'high' },
        { labId: 'lab-ptt', labName: 'PTT', expectedDirection: 'high' },
        { labId: 'lab-fibrinogen', labName: 'Fibrinogen', expectedDirection: 'low' },
        { labId: 'lab-d-dimer', labName: 'D-dimer', expectedDirection: 'high' },
        { labId: 'lab-platelet-count', labName: 'Platelets', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Disseminated intravascular coagulation', 'Sepsis', 'Malignancy', 'Obstetric complication'],
      clinicalContext: 'DIC shows prolonged PT and PTT, low fibrinogen, high D-dimer, and thrombocytopenia. Look for schistocytes on smear. Treat underlying cause.',
    },
    {
      patternName: 'Liver Disease Coagulopathy',
      description: 'Decreased synthesis of clotting factors',
      labFindings: [
        { labId: 'lab-pt', labName: 'PT', expectedDirection: 'high' },
        { labId: 'lab-inr', labName: 'INR', expectedDirection: 'high' },
        { labId: 'lab-ptt', labName: 'PTT', expectedDirection: 'high' },
        { labId: 'lab-fibrinogen', labName: 'Fibrinogen', expectedDirection: 'low' },
      ],
      suggestsDiagnosis: ['Cirrhosis', 'Acute liver failure', 'Hepatic dysfunction'],
      clinicalContext: 'Liver synthesizes most clotting factors. INR is component of MELD score. Note: Both procoagulants and anticoagulants are reduced - "rebalanced hemostasis" means INR may not predict bleeding.',
    },
    {
      patternName: 'Hemophilia Pattern',
      description: 'Intrinsic pathway factor deficiency',
      labFindings: [
        { labId: 'lab-ptt', labName: 'PTT', expectedDirection: 'high' },
        { labId: 'lab-pt', labName: 'PT', expectedDirection: 'normal' },
        { labId: 'lab-fibrinogen', labName: 'Fibrinogen', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Hemophilia A (Factor VIII)', 'Hemophilia B (Factor IX)', 'Factor XI deficiency', 'von Willebrand disease'],
      clinicalContext: 'Isolated PTT prolongation with normal PT suggests intrinsic pathway deficiency. Mixing study corrects if factor deficiency. Specific factor assays identify which factor is deficient.',
    },
  ],
};
