/**
 * Cirrhosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const cirrhosis: EducationalContent = {
  id: 'condition-cirrhosis',
  type: 'condition',
  name: 'Cirrhosis',
  nameEs: 'Cirrosis',
  alternateNames: ['Liver Cirrhosis', 'End-Stage Liver Disease', 'ESLD'],
  hpoId: 'HP:0001394',

  levels: {
    1: {
      level: 1,
      summary: 'Cirrhosis is scarring of the liver that happens over time, making it hard for the liver to work properly.',
      explanation: `The liver is a large organ that filters blood, makes proteins, and helps digest food. When the liver is repeatedly injured, it forms scar tissue. Over time, this scarring replaces healthy liver tissue.

**What happens in cirrhosis:**
- Healthy liver cells are replaced by scar tissue
- Blood cannot flow through the liver properly
- Liver cannot perform its normal functions

**Common causes:**
- Long-term heavy alcohol use
- Hepatitis B or C infection
- Fatty liver disease (from obesity/diabetes)

**Symptoms:**
- Feeling very tired and weak
- Yellow skin and eyes (jaundice)
- Swelling in legs and abdomen
- Easy bruising and bleeding
- Confusion, memory problems

**Complications:**
- Fluid buildup in abdomen (ascites)
- Bleeding from enlarged veins
- Confusion (hepatic encephalopathy)
- Liver cancer

**Treatment:**
- Treat the underlying cause
- Stop drinking alcohol
- Medications for complications
- Liver transplant in severe cases`,
      keyTerms: [
        { term: 'cirrhosis', definition: 'Severe scarring of the liver that impairs its function' },
        { term: 'jaundice', definition: 'Yellowing of the skin and eyes due to liver problems' },
        { term: 'ascites', definition: 'Fluid buildup in the abdomen caused by liver disease' },
      ],
      analogies: ['A healthy liver is like a soft sponge. Cirrhosis turns it into a hard scar that cannot absorb anything.'],
      examples: ['Someone who has drank heavily for 20 years might develop cirrhosis, causing swelling in the belly and confusion.'],
    },
    2: {
      level: 2,
      summary: 'Cirrhosis is advanced liver fibrosis characterized by regenerative nodules and portal hypertension, diagnosed by clinical features, labs, imaging, and sometimes biopsy.',
      explanation: `## Pathophysiology
- Chronic liver injury → fibrosis → cirrhosis
- Disorganized liver architecture
- Portal hypertension (increased resistance to flow)
- Liver dysfunction

## Common Causes
**Alcohol-related liver disease** (most common)
- Chronic excessive alcohol use
- Dose-dependent damage

**Metabolic dysfunction-associated steatotic liver disease (MASLD)**
- Formerly NAFLD/NASH
- Related to obesity, diabetes, metabolic syndrome

**Viral hepatitis**
- Hepatitis B and C
- Chronic infection leads to cirrhosis

**Other causes:**
- Autoimmune hepatitis
- Primary biliary cholangitis
- Primary sclerosing cholangitis
- Hemochromatosis, Wilson disease
- Alpha-1 antitrypsin deficiency

## Clinical Features
**Compensated:** No symptoms, asymptomatic
**Decompensated:**
- Ascites
- Variceal bleeding
- Hepatic encephalopathy
- Jaundice

## Diagnosis
**Laboratory:**
- AST, ALT (often AST>ALT in alcohol)
- Elevated bilirubin
- Low albumin
- Low platelets (from portal hypertension/splenomegaly)
- Prolonged INR

**Imaging:**
- Ultrasound (nodular liver, splenomegaly, ascites)
- CT, MRI
- Elastography (measures stiffness)

**Biopsy:** Gold standard (not always needed)`,
      keyTerms: [
        { term: 'portal hypertension', definition: 'High blood pressure in the portal vein going to the liver' },
        { term: 'fibrosis', definition: 'Formation of excess fibrous connective tissue as a repair response' },
        { term: 'regenerative nodules', definition: 'Lumps of liver cells trying to grow back surrounded by scar tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cirrhosis management focuses on treating the underlying etiology, preventing variceal bleeding with beta-blockers or band ligation, managing ascites with diuretics and paracentesis, and monitoring for complications including HCC.',
      explanation: `## Etiology-Specific Management
**Alcohol-related:** Cessation, support programs, nutritional support
**Viral hepatitis:** Antiviral therapy for HBV, DAAs for HCV
**Hemochromatosis:** Phlebotomy
**Wilson disease:** Chelation therapy
**Autoimmune:** Immunosuppression
**PBC/PSC:** Ursodeoxycholic acid

## Complication Management

**Variceal bleeding prophylaxis:**
- Non-selective beta-blockers (propranolol, nadolol): Target HR 55-60
- EVL (endoscopic variceal ligation) for large varices

**Ascites:**
- Sodium restriction (<2 g/day)
- Spironolactone + furosemide (ratio 100:40)
- Large-volume paracentesis with albumin for refractory
- TIPS for refractory

**Hepatic encephalopathy:**
- Lactulose (titrate to 2-3 soft stools)
- Rifaximin (add if recurrent)

**HCC surveillance:**
- Ultrasound ± AFP every 6 months
- MRI/CT for further evaluation

## Prognostic Scoring
**Child-Pugh Class:**
- Class A: 5-6 points (good prognosis)
- Class B: 7-9 points (moderate)
- Class C: 10-15 points (poor)

**MELD-Na:**
- Used for transplant prioritization
- Based on bilirubin, INR, creatinine, sodium
- Higher = higher mortality`,
      keyTerms: [
        { term: 'EVL', definition: 'Endoscopic variceal ligation; placing bands on varices to prevent bleeding' },
        { term: 'TIPS', definition: 'Transjugular intrahepatic portosystemic shunt; creates channel in liver' },
        { term: 'MELD-Na', definition: 'Model for End-Stage Liver Disease with sodium; predicts mortality' },
      ],
      clinicalNotes: 'All patients with cirrhosis should be vaccinated against hepatitis A and B if non-immune. Avoid nephrotoxic medications (NSAIDs) and sedatives that worsen encephalopathy.',
    },
    4: {
      level: 4,
      summary: 'Cirrhosis care involves surveillance for complications, management of decompensation, nutritional support, and timely referral for liver transplant evaluation when indicated.',
      explanation: `## Surveillance Recommendations

**Esophageal varices:**
- Screen all with EGD at diagnosis
- Repeat based on findings

**Hepatocellular carcinoma (HCC):**
- Ultrasound every 6 months
- AFP optional (low sensitivity)

**Osteoporosis:**
- DEXA screening
- Calcium and vitamin D

## Management of Decompensation

**Refractory ascites:**
- Failed diuretic therapy (max spironolactone 400 mg, furosemide 160 mg)
- Consider TIPS if MELD <18
- Repeat paracentesis if TIPS contraindicated

**Hepatorenal syndrome:**
- Type 1: Rapid renal decline (weeks)
- Type 2: Slower progression (months)
- Treatment: Midodrine + octreotide + albumin
- Definitive: Liver transplant

**Spontaneous bacterial peritonitis (SBP):**
- Ascitic fluid PMN >250 cells/mm3
- Treatment: Cefotaxime or ceftriaxone
- Secondary prophylaxis: Daily norfloxacin or weekly ciprofloxacin

**Acute-on-chronic liver failure (ACLF):**
- Acute deterioration in patient with cirrhosis
- High short-term mortality
- Consider early transplant evaluation

## Transplant Evaluation
**Indications:**
- MELD-Na ≥15 (most centers)
- Complications refractory to medical therapy
- HCC within Milan criteria

**Contraindications:**
- Active alcohol/substance use (6-month rule)
- Uncontrolled sepsis
- Extrahepatic malignancy
- Severe cardiopulmonary disease`,
      keyTerms: [
        { term: 'hepatorenal syndrome', definition: 'Kidney failure in cirrhosis from low blood flow' },
        { term: 'SBP', definition: 'Spontaneous bacterial peritonitis; infection of ascitic fluid' },
        { term: 'Milan criteria', definition: 'Limits for HCC size/number for transplant eligibility' },
      ],
      clinicalNotes: 'Avoid contrast when possible (contrast nephropathy risk). Albumin infusion after large-volume paracentesis (>5 L) prevents paracentesis-induced circulatory dysfunction.',
    },
    5: {
      level: 5,
      summary: 'Advanced cirrhosis management incorporates precision prognostication, individualized complication prevention, novel pharmacologic therapies, and comprehensive transplant candidacy assessment with multidisciplinary care.',
      explanation: `## Emerging Therapeutics

**For portal hypertension:**
- Non-selective beta-blockers (carvedilol has additional effect)
- Statins (reduce portal pressure, improve survival)
- Simtuzumab (anti-LOXL2) - failed in trials

**For alcohol use disorder:**
- Baclofen for maintenance of abstinence
- Naltrexone, acamprosate

**For decompensation:**
- Terlipressin (approved for HRS in US)
- Midodrine + octreotide + albumin for HRS

**For complications:**
- Rifaximin for recurrent HE (well-established)
- L-ornithine L-aspartate (LOLA) for HE

## Precision Prognostication
**MELD 3.0:**
- Includes albumin in addition to bilirubin, INR, creatinine, sodium
- Better prediction of mortality

**Risk scores:**
- ACLF grade (CLIF-C ACLF score)
- Frailty assessments
- Sarcopenia measurement (psoas muscle area)

## Novel Transplant Approaches
**Extended criteria donors:**
- Older donors
- Steatotic livers
- HCV-positive donors (treatable)

**Machine perfusion:**
- Normothermic perfusion
- Improves outcomes with marginal organs

**Living donor liver transplant:**
- Expands donor pool
- Earlier transplant before deterioration

## Emerging Therapies
**Anti-fibrotic agents:**
- Obeticholic acid (PBC, being studied for NASH cirrhosis)
- Cenicriviroc (anti-fibrotic)

**Microbiome modulation:**
- Fecal transplant for HE
- Rifaximin's multiple benefits

**Future directions:**
- Stem cell therapies
- Bioartificial liver support
- Pharmacologic reversal of fibrosis`,
      keyTerms: [
        { term: 'terlipressin', definition: 'Vasopressin analog approved for hepatorenal syndrome' },
        { term: 'CLIF-C ACLF', definition: 'Chronic Liver Failure Consortium ACLF score' },
        { term: 'normothermic perfusion', definition: 'Keeping donor liver warm with oxygenated blood' },
      ],
      clinicalNotes: 'Fragility scoring predicts mortality independent of MELD. Protein restriction in HE is outdated—maintain adequate protein intake. Lactulose and rifaximin are HE cornerstone.',
    },
  },

  media: [],
  citations: [
    { id: 'aasld-cirrhosis-2023', type: 'article', title: 'AASLD Guidance for Care of Patients with Cirrhosis', source: 'Hepatology' },
    { id: 'aasld-ascites-2024', type: 'article', title: 'Management of Adult Patients with Ascites Due to Cirrhosis', source: 'Hepatology' },
    { id: 'aasld-varices-2023', type: 'article', title: 'Screening and Management of Portal Hypertension', source: 'Hepatology' },
  ],
  crossReferences: [
    { targetId: 'condition-hepatitis-b', targetType: 'condition', relationship: 'related', label: 'Hepatitis B' },
    { targetId: 'condition-hepatitis-c', targetType: 'condition', relationship: 'related', label: 'Hepatitis C' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'hepatology'], keywords: ['cirrhosis', 'portal hypertension', 'ascites', 'MELD'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cirrhosis;
