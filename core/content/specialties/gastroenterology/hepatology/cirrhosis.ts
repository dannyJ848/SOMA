/**
 * Cirrhosis — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const cirrhosisContent: EducationalContent = {
  id: 'gi-hepatology-cirrhosis',
  type: 'condition',
  name: 'Cirrhosis',
  nameEs: 'Cirrosis Hep\u00e1tica',
  alternateNames: ['Liver Cirrhosis', 'End-Stage Liver Disease', 'Chronic Liver Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Cirrhosis is severe scarring of the liver that happens over many years, making it hard for the liver to do its jobs like cleaning your blood and making important proteins.',
      explanation: `Your liver is one of the hardest-working organs — it filters toxins from your blood, helps digest food, stores energy, and makes proteins that help your blood clot. When the liver is injured repeatedly (from alcohol, viruses, or fat buildup), scar tissue slowly replaces healthy tissue. This scarring is called cirrhosis. At first, the liver can still work (compensated), but eventually it can't keep up (decompensated) and problems appear: yellow skin (jaundice), swollen belly (ascites), confusion, and easy bleeding. Treatment focuses on stopping the cause of damage and managing complications. In severe cases, a liver transplant may be needed.`,
      keyTerms: [t('cirrhosis', 'Severe liver scarring that blocks normal blood flow and function'), t('jaundice', 'Yellow skin and eyes from buildup of bilirubin'), t('ascites', 'Fluid buildup in the belly from liver disease')],
      analogies: ['A healthy liver is like a sponge — soft and good at filtering. A cirrhotic liver is like a rock — hard and unable to do its job.'],
      patientCounselingPoints: ['Completely avoid alcohol', 'Get vaccinated against hepatitis A and B', 'Report any confusion, belly swelling, or blood in stool immediately'],
    },
    2: {
      level: 2,
      summary: 'Cirrhosis is the end result of chronic liver injury, characterized by diffuse fibrosis, regenerative nodules, and architectural distortion leading to portal hypertension and hepatic dysfunction.',
      explanation: `Common causes: alcohol-related liver disease, chronic hepatitis B/C, and metabolic dysfunction-associated steatotic liver disease (MASLD, formerly NAFLD). Chronic injury activates hepatic stellate cells, which produce excess collagen and extracellular matrix, replacing functional hepatocytes. **Compensated cirrhosis:** Often asymptomatic. Detected by liver stiffness (FibroScan >12.5 kPa), low platelets, or imaging findings. **Decompensated cirrhosis:** Defined by complications — ascites, variceal bleeding, hepatic encephalopathy, or jaundice. **Portal hypertension:** Increased resistance to blood flow through the scarred liver raises portal venous pressure (HVPG >5 mmHg; clinically significant >10 mmHg), creating varices and ascites. Treatment: address the cause, beta-blockers to prevent variceal bleeding, diuretics for ascites, lactulose/rifaximin for encephalopathy. MELD-Na score determines transplant priority.`,
      keyTerms: [t('portal hypertension', 'Elevated pressure in the portal vein from liver scarring'), t('hepatic encephalopathy', 'Confusion and brain fog from toxins the damaged liver cannot clear'), t('MELD-Na', 'Model for End-Stage Liver Disease score — predicts 90-day mortality and guides transplant listing')],
      examples: ['A patient with hepatitis C, low platelets, spider angiomata, and new-onset ascites has decompensated cirrhosis.'],
    },
    3: {
      level: 3,
      summary: 'Cirrhosis pathophysiology involves stellate cell activation, sinusoidal capillarization, and progressive portal hypertension leading to a cascade of complications including ascites, varices, HE, and HCC.',
      explanation: `**Fibrogenesis:** Chronic hepatocyte injury releases DAMPs and ROS, activating Kupffer cells which secrete TGF-beta and PDGF. Hepatic stellate cells (HSCs) transdifferentiate from quiescent vitamin A-storing cells into myofibroblasts producing collagen I/III. Sinusoidal capillarization (loss of endothelial fenestrae) impairs hepatocyte-plasma exchange. **Portal hypertension cascade:** HVPG >10 mmHg: varices form. HVPG >12 mmHg: variceal bleeding risk. Splanchnic vasodilation (excess NO) triggers compensatory activation of RAAS, ADH, and sympathetic nervous system, causing sodium/water retention (ascites). **Complications:** Spontaneous bacterial peritonitis (SBP) — ascitic fluid PMN >250/mm3, treat with cefotaxime. Hepatorenal syndrome (HRS) — functional renal failure from extreme splanchnic vasodilation; terlipressin + albumin is first-line. Hepatocellular carcinoma (HCC) screening: ultrasound +/- AFP every 6 months. **Staging:** Child-Pugh (A/B/C) for prognosis. Baveno VII criteria for non-invasive assessment of clinically significant portal hypertension.`,
      keyTerms: [t('hepatic stellate cells', 'Perisinusoidal cells that produce fibrotic matrix when activated — central to cirrhosis pathogenesis'), t('HVPG', 'Hepatic venous pressure gradient — gold standard for portal hypertension measurement'), t('SBP', 'Spontaneous bacterial peritonitis — infection of ascitic fluid requiring urgent antibiotics')],
      clinicalNotes: 'Baveno VII: liver stiffness <15 kPa + platelets >150K rules out varices needing treatment (avoid screening endoscopy). SBP prophylaxis with norfloxacin for high-risk patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced cirrhosis management encompasses non-invasive fibrosis staging, TIPS for refractory portal hypertension, acute-on-chronic liver failure (ACLF) recognition, and HCC surveillance strategies.',
      explanation: `**Non-invasive assessment:** Vibration-controlled transient elastography (VCTE/FibroScan) and shear wave elastography replace liver biopsy for staging. VCTE thresholds: <8 kPa excludes advanced fibrosis, >12.5 kPa suggests cirrhosis. FIB-4 index and APRI as screening tools. **TIPS:** Transjugular intrahepatic portosystemic shunt creates a channel between portal and hepatic veins, reducing portal pressure. Indications: refractory ascites, recurrent variceal bleeding. Preemptive TIPS within 72h for high-risk variceal bleed (Child-Pugh B with active bleeding or C 10-13). Contraindicated if severe hepatic encephalopathy. **ACLF:** Acute decompensation with organ failure(s) — CLIF-C ACLF score for prognostication. High short-term mortality (28-day up to 80% for grade 3). Precipitants: infection, alcoholic hepatitis, drug injury. **HCC:** LI-RADS classification for hepatic lesion characterization. Arterial phase hyperenhancement with washout on portal/delayed phase is diagnostic (LR-5). Treatment: BCLC staging — resection, ablation, TACE, systemic therapy (atezolizumab-bevacizumab first-line for advanced HCC).`,
      keyTerms: [t('TIPS', 'Transjugular intrahepatic portosystemic shunt — percutaneous shunt for portal hypertension'), t('ACLF', 'Acute-on-chronic liver failure — acute decompensation with extrahepatic organ failure carrying high mortality'), t('LI-RADS', 'Liver Imaging Reporting and Data System — standardized HCC characterization on contrast-enhanced imaging')],
      clinicalNotes: 'Preemptive TIPS (within 72h) reduces mortality in high-risk variceal bleed compared to standard of care. ACLF grade 3 with 4+ organ failures — consider futility of ICU care vs. emergency transplant.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include anti-fibrotic therapies targeting HSC deactivation, cell-free DNA-based liver disease monitoring, ex vivo liver perfusion, and AI-driven non-invasive diagnostics.',
      explanation: `**Anti-fibrotic pipeline:** No approved anti-fibrotic drugs yet, but resmetirom (thyroid hormone receptor-beta agonist) is FDA-approved for MASH with fibrosis — first disease-modifying MASLD therapy. HSC-targeted approaches: galectin-3 inhibitors (belapectin) reduce portal hypertension in NASH cirrhosis. ASK1 inhibitor (selonsertib) failed phase 3 but validated the pathway. FXR agonists (obeticholic acid) improve fibrosis but cause pruritus. **Biomarkers:** Enhanced Liver Fibrosis (ELF) test (HA, TIMP-1, PIIINP) and PRO-C3 (type III collagen formation marker) for fibrosis monitoring. Cell-free DNA methylation patterns detect HCC with high sensitivity. **Transplant innovation:** Ex vivo normothermic machine perfusion resuscitates marginal donor organs, expanding the donor pool. Hepatocyte organoid-based bioartificial liver devices in preclinical trials. **AI:** Deep learning on routine abdominal CT/MRI detects liver stiffness, steatosis, and early HCC without contrast. Automated MELD-Na trajectory modeling predicts waitlist mortality.`,
      keyTerms: [t('resmetirom', 'THR-beta agonist — first FDA-approved drug for MASH with liver fibrosis (2024)'), t('normothermic machine perfusion', 'Ex vivo organ preservation technique maintaining physiologic conditions to assess and resuscitate donor livers'), t('ELF test', 'Enhanced Liver Fibrosis panel — serum biomarker composite for fibrosis staging')],
      clinicalNotes: 'Resmetirom (Rezdiffra) approved March 2024 for non-cirrhotic MASH with moderate-advanced fibrosis (F2-F3). NNT ~6 for fibrosis improvement at 52 weeks.',
    },
  },
  media: [],
  citations: [{ id: 'baveno-vii', type: 'article', title: 'Baveno VII Consensus', source: 'J Hepatol 2022', authors: ['de Franchis R et al.'] }],
  crossReferences: [
    { targetId: 'gi-hepatology-hepatitis', targetType: 'condition', relationship: 'parent', label: 'Hepatitis (common cause)' },
    { targetId: 'gi-hepatology-fatty-liver', targetType: 'condition', relationship: 'related', label: 'Fatty Liver Disease' },
    { targetId: 'gi-upper-gerd', targetType: 'condition', relationship: 'see-also', label: 'Portal Hypertensive Gastropathy' },
  ],
  tags: { systems: ['gastrointestinal', 'hepatobiliary'], topics: ['gastroenterology', 'hepatology'], keywords: ['cirrhosis', 'portal hypertension', 'ascites', 'varices', 'MELD', 'liver transplant'], clinicalRelevance: 'critical', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
