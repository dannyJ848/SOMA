/**
 * Cirrhosis - Chronic Disease Education
 *
 * Comprehensive patient education about cirrhosis of the liver,
 * advanced scarring of the liver from chronic damage.
 */

import { EducationalContent } from '../../types';

export const CIRRHOSIS: EducationalContent = {
  id: 'chronic-disease-cirrhosis',
  type: 'condition',
  name: 'Cirrhosis',
  alternateNames: ['Liver cirrhosis', 'End-stage liver disease', 'Liver fibrosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Cirrhosis is severe scarring of the liver caused by long-term liver damage. The scar tissue replaces healthy liver tissue and blocks blood flow, making it hard for the liver to work properly.',
      explanation: `**What Is Cirrhosis?**

Cirrhosis is when healthy liver tissue is replaced by scar tissue. This scarring is permanent and prevents the liver from working properly. It happens slowly over many years.

**What Causes Cirrhosis?**


Common Causes:
---------------------------------
- Alcohol abuse (most common)
- Hepatitis C or B
- Fatty liver disease
- Autoimmune liver diseases
- Genetic disorders
---------------------------------


**How It Affects the Liver:

Think of your liver like a sponge that filters your blood. In cirrhosis:
- The sponge becomes hard and scarred instead of spongy
- Blood cannot flow through easily
- The liver cannot clean toxins from blood
- The liver cannot make important proteins

**Common Symptoms:**


Symptoms:
---------------------------------
Early stages:
  - Fatigue and weakness
  - Loss of appetite
  - Weight loss
  - Nausea

Later stages:
  - Yellowing of skin and eyes (jaundice)
  - Swelling in legs and belly
  - Confusion or thinking problems
  - Easy bruising or bleeding
  - Dark urine
  - Itchy skin
---------------------------------


**Treatment:**


Management:
---------------------------------
- Treat the underlying cause
- Stop drinking alcohol
- Medications for complications
- Low-sodium diet
- Regular monitoring
- Liver transplant for severe cases
---------------------------------


**Prevention:**

- Limit alcohol intake
- Get vaccinated for hepatitis A and B
- Maintain healthy weight
- Avoid risky behaviors
`,
      keyTerms: [
        { term: 'cirrhosis', definition: 'Scarring of the liver' },
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from liver problems' },
        { term: 'hepatitis', definition: 'Inflammation of the liver' },
        { term: 'liver transplant', definition: 'Surgery to replace diseased liver with healthy liver' },
      ],
      analogies: [
        'Cirrhosis is like a liver that has turned into scar tissue - like a cut that heals with a scar instead of normal tissue.',
        'Think of a healthy liver like fresh bread, cirrhosis like toast - the structure has changed permanently.',
      ],
      examples: [
        'Bob developed cirrhosis after 20 years of heavy drinking and stopped alcohol to save his liver.',
        'Sarah has hepatitis C that progressed to cirrhosis and needs a liver transplant.',
      ],
      patientCounselingPoints: [
        'If you have cirrhosis, stopping alcohol can stop further damage.',
        'Get vaccinated against hepatitis A and B if you have cirrhosis.',
        'Family members of people with cirrhosis should be screened.',
        'Cirrhosis can be slowed or stopped if caught early.',
        'Liver transplant is an option for severe cirrhosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cirrhosis represents the late stage of progressive liver fibrosis characterized by distortion of hepatic architecture and vascular complications, leading to liver failure and portal hypertension.',
      explanation: `**Definition:**

Cirrhosis is defined as diffuse hepatic process characterized by fibrosis and conversion of normal liver architecture into structurally abnormal nodules.

**Causes:**


Major Causes of Cirrhosis:
-------------------------------------------------
Alcohol-related:
  - 40-50% of cases in Western countries
  - Dose-dependent: >3 drinks/day for 10+ years
  - Women more susceptible at lower doses

Viral Hepatitis:
  - Hepatitis C (40% of cases)
  - Hepatitis B (especially in endemic areas)
  - Hepatitis D (requires hepatitis B)

NAFLD/NASH:
  - Non-alcoholic fatty liver disease
  - Progressive inflammation and fibrosis
  - Associated with metabolic syndrome

Other:
  - Autoimmune hepatitis
  - Primary biliary cholangitis
  - Primary sclerosing cholangitis
  - Hemochromatosis (iron overload)
  - Wilson disease (copper accumulation)
  - Alpha-1 antitrypsin deficiency
  - Drugs/toxins
-------------------------------------------------


**Clinical Manifestations:**

*Compensated Cirrhosis:*
- May be asymptomatic
- Fatigue, weakness
- Anorexia, weight loss
- Palmar erythema
  Spider angiomata (telangiectasias)
- Caput medusae

*Decompensated Cirrhosis:*
- Ascites (fluid in abdomen)
- Peripheral edema
- Variceal bleeding
- Hepatic encephalopathy
  Jaundice
- Spontaneous bacterial peritonitis
- Hepatocellular carcinoma

**Diagnosis:**

Diagnostic Tests:
-------------------------------------------------
Laboratory:
  - AST, ALT (often AST>ALT in cirrhosis)
  - Alkaline phosphatase, GGT
  - Bilirubin (direct and indirect)
  - Albumin (decreased)
  - INR (prolonged)
  - Platelet count (decreased)

Imaging:
  - Ultrasound (assess liver size, nodularity, ascites)
  - CT scan
  - MRI (fibrosis assessment)

Fibrosis Staging:
  - Biopsy (gold standard)
  - FibroScan (elastography)
  - FibroTest (serum markers)

Endoscopy:
  - Screen for varices (esophageal/gastric)
  - Primary prophylaxis if large varices
-------------------------------------------------


**Management:


Treatment Principles:
-------------------------------------------------
Treat Underlying Cause:
  - Alcohol cessation
  - Antiviral therapy for hepatitis
  - Remove iron (hemochromatosis)
  - Zinc/chelation (Wilson disease)

Complications:
  Ascites: Diuretics, paracentesis, TIPS
  Varices: Beta blockers, band ligation
  Encephalopathy: Lactulose, rifaximin
  Coagulopathy: Vitamin K, FFP

Liver Transplant:
  - Indicated for decompensated cirrhosis
  - MELD score ≥15
  - Best outcomes for alcoholic hepatitis after 6 months abstinence
-------------------------------------------------
`,
      keyTerms: [
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease' },
        { term: 'NASH', definition: 'Non-alcoholic steatohepatitis' },
        { term: 'ascites', definition: 'Fluid accumulation in abdomen' },
        { term: 'varices', definition: 'Enlarged veins that can bleed' },
        { term: 'hepatic encephalopathy', definition: 'Brain dysfunction from liver failure' },
        { term: 'MELD', definition: 'Model for End-Stage Liver Disease; mortality score' },
      ],
      analogies: [
        'The MELD score is like a liver failure severity ranking system - higher scores mean greater urgency for transplant.',
        'Varices are like weakened blood vessels that can burst and cause dangerous bleeding.',
      ],
      clinicalNotes: 'AST:ALT ratio >2:1 suggests alcoholic liver disease. Screening for varices recommended when cirrhosis diagnosed. MELD score determines transplant priority.',
      patientCounselingPoints: [
        'Stopping alcohol can halt progression of alcoholic cirrhosis.',
        'Get screened for varices to prevent dangerous bleeding.',
        'Vaccines and regular monitoring are important with cirrhosis.',
        'Liver transplant is an option if cirrhosis becomes severe.',
        'Family members should be screened for hereditary causes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cirrhosis is characterized by advanced hepatic fibrosis with regenerative nodules, leading to portal hypertension and liver dysfunction, requiring management of decompensation complications and consideration of transplantation.',
      explanation: `**Pathophysiology:

*Progressive Fibrosis:*
Fibrosis Staging (METAVIR):
-------------------------------------------------------------
F0: No fibrosis
F1: Portal fibrosis without septa
F2: Portal fibrosis with rare septa
F3: Numerous septa but no cirrhosis
F4: Cirrhosis
-------------------------------------------------------------

Mechanism:
  Chronic injury → Inflammation → Stellate cell activation
    ↓
  Activation of hepatic stellate cells
    ↓
  Extracellular matrix deposition
    ↓
  Fibrosis + architectural distortion
    ↓
  Nodule formation + vascular shunting
    ↓
  Cirrhosis
-------------------------------------------------------------


*Portal Hypertension:*
Hemodynamic Consequences:
------------------------------------------------------------
Increased resistance to portal flow
    ↓
Portal hypertension (>10 mmHg)
    ↓
  → Portosystemic collaterals develop
    → Splenomegaly (enlarged spleen)
    → Ascites (splanchnic vasodilation + hypoalbuminemia)
    → Varices (esophageal, gastric, rectal, hemorrhoidal)
    → Hepatic hydrothorax
    → Hepatic encephalopathy
-------------------------------------------------------------


**Complications:**

*Ascites:*
Pathophysiology:
------------------------------------------------------------
Splanchnic arterial vasodilation
  - NO overproduction
    ↓
  Increased capillary permeability
    ↓
  Sodium and water retention
    ↓
  Hypoalbuminemia (decreased oncotic pressure)
    ↓
  Ascites formation

Treatment:
  Sodium restriction (<2 g/day)
  Fluid restriction (if hyponatremic)
  Diuretics: spironolactone + furosemide
  Large-volume paracentesis (>5 L)
  Albumin infusion (if SBP <15)
  TIPS (refractory cases)
-------------------------------------------------------------


*Variceal Bleeding:*
Variceal Classification:
------------------------------------------------------------
Size:
  Small: <5 mm
  Medium: 5-10 mm
  Large: >10 mm (high risk)

Red Wale Signs:
  - Cherry red spots on varices
  → High bleeding risk

Primary Prophylaxis (prevent first bleed):
  - NSBBs (propranolol, nadolol)
  - EVL (endoscopic variceal ligation)

Acute Bleeding:
  - Octreotide/vasopressin (reduce portal pressure)
  - EVL + banding
  - Antibiotic prophylaxis (ceftriaxone, 3-7 days)
  - TIPS if refractory
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'METAVIR', definition: 'Scoring system for liver fibrosis' },
        { term: 'stellate cells', definition: 'Liver cells that produce collagen when activated' },
        { term: 'NSBBs', definition: 'Non-selective beta blockers' },
        { term: 'EVL', definition: 'Endoscopic variceal ligation; banding varices' },
        { term: 'TIPS', definition: 'Transjugular intrahepatic portosystemic shunt' },
        { term: 'splenomegaly', definition: 'Enlarged spleen from portal hypertension' },
      ],
      analogies: [
        'TIPS is like creating a detour around the liver for blood flow, reducing pressure in varices.',
        'Stellate cells are like construction workers that build scar tissue when activated.',
      ],
      clinicalNotes: 'NSBBs reduce bleeding risk when varices present. TIPS is effective but increases encephalopathy risk. Albumin infusion improves outcomes in SBP <15 mmHg.',
      patientCounselingPoints: [
        'Beta blockers can prevent dangerous bleeding from varices.',
        'Your doctor will screen for varices when diagnosing cirrhosis.',
        'Low-salt diet and diuretics help control fluid buildup.',
        'TIPS procedure can reduce ascites and variceal bleeding risk.',
        'Liver transplant evaluation should be considered early for advanced disease.',
      ],
    },
    4: {
      level: 4,
      summary: 'Cirrhosis is characterized by advanced hepatic fibrosis with complications including portal hypertension, ascites, varices, and encephalopathy, requiring comprehensive management and transplantation consideration.',
      explanation: `**Advanced Concepts:**

*Reversal Considerations:*
Reversibility of Fibrosis:
------------------------------------------------------------
Alcoholic Cirrhosis:
  - Can partially reverse with abstinence
  - Improvements over years
  - Better if caught early

Viral Cirrhosis:
  - Hepatitis C: Cure with DAA may reverse fibrosis
  - Hepatitis B: Suppression improves fibrosis
  - Advanced cirrhosis usually irreversible

NASH Cirrhosis:
  - Weight loss can improve fibrosis
  - Pharmacologic agents under investigation
  - Bariatric surgery may help

Limitations:
  - Nodular regeneration usually irreversible
  - Vascular changes persist
  - Regenerated nodules have abnormal architecture
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'DAA', definition: 'Direct-acting antiviral agents for hepatitis C' },
      ],
      analogies: [
        'Direct-acting antivirals are like precision weapons that can eliminate hepatitis C virus.',
      ],
      clinicalNotes: 'DAA therapy can achieve SVR in >95% of hepatitis C cases, potentially reversing fibrosis. Bariatric surgery can improve NASH-related fibrosis.',
      patientCounselingPoints: [
        'New hepatitis C treatments can cure the virus and may improve your liver.',
        'Weight loss can improve NASH-related liver disease.',
        'Some fibrosis may be reversible if caught early.',
      ],
    },
    5: {
      level: 5,
      summary: 'Cirrhosis represents the end-stage of chronic liver injury with unique hemodynamic consequences, managed through portal hypertension control, complication prevention, and liver transplantation.',
      explanation: `**Emerging Therapies:**

*Anti-fibrotic Agents:*

Investigational Anti-fibrotics:
------------------------------------------------------------
Obeticholic acid (OCA):
  - FXR agonist
  - Improves NASH fibrosis
  - Pruritus side effect

Cenicriviroc:
  - Anti-inflammatory
  - Anti-fibrotic
  - Ongoing trials

Seladelpar:
  - ASK1 inhibitor
  - Anti-fibrotic
  - Safety concerns
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'FXR agonist', definition: 'Farnesoid X receptor agonist' },
        { term: 'ASK1', definition: 'Apoptosis signal-regulating kinase 1' },
      ],
      clinicalNotes: 'Anti-fibrotic agents are in development for NASH cirrhosis.',
      patientCounselingPoints: [
        'New medicines are being developed to treat NASH and fibrosis.',
        'Clinical trials may offer access to cutting-edge treatments.',
      ],
    },
  },

  media: [
    {
      id: 'cirrhosis-pathogenesis',
      type: 'diagram',
      filename: 'liver-cirrhosis-pathogenesis.svg',
      title: 'Cirrhosis Pathogenesis',
      description: 'Diagram showing progression from liver injury to cirrhosis',
    },
    {
      id: 'portal-hypertension',
      type: 'diagram',
      filename: 'portal-hypertension-complications.svg',
      title: 'Portal Hypertension Complications',
      description: 'Illustration of portal hypertension effects',
    },
  ],

  citations: [
    {
      id: 'aasld-cirrhosis-2024',
      type: 'article',
      title: 'Guidance for the Care of Patients with Cirrhosis',
      source: 'Hepatology',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-hepatitis', targetType: 'condition', relationship: 'sibling', label: 'Hepatitis' },
    { targetId: 'chronic-disease-fatty-liver', targetType: 'condition', relationship: 'sibling', label: 'Fatty Liver' },
    { targetId: 'chronic-disease-liver-failure', targetType: 'condition', relationship: 'child', label: 'Liver Failure' },
  ],

  tags: {
    systems: ['hepatic', 'gastrointestinal'],
    structures: ['liver', 'hepatic artery', 'portal vein'],
    topics: ['cirrhosis', 'liver failure', 'portal hypertension'],
    keywords: ['cirrhosis', 'liver scarring', 'ESLD', 'fibrosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'gastroenterology'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
