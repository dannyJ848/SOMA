/**
 * Fatty Liver - Chronic Disease Education
 *
 * Comprehensive patient education about fatty liver disease (NAFLD/NASH),
 * accumulation of fat in the liver.
 */

import { EducationalContent } from '../../types';

export const FATTY_LIVER: EducationalContent = {
  id: 'chronic-disease-fatty-liver',
  type: 'condition',
  name: 'Fatty Liver',
  alternateNames: ['NAFLD', 'Non-alcoholic fatty liver disease', 'NASH', 'Fatty liver disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Fatty liver disease means fat builds up in your liver. It is common in people who are overweight or have diabetes. Most people can reverse it with weight loss and lifestyle changes.',
      explanation: `**What Is Fatty Liver?**

Fatty liver disease means fat builds up in your liver cells. This can happen even if you drink little or no alcohol. The liver normally has a small amount of fat, but when more than 5-10% of the liver is fat, it is considered fatty liver.


Two Types of Fatty Liver:
---------------------------------
NAFLD:
  - Non-alcoholic fatty liver disease
  - Fat in liver without damage
  - Common in overweight people

NASH:
  - Non-alcoholic steatohepatitis
  - Fat plus inflammation and damage
  - Can progress to cirrhosis
---------------------------------


**Who Is at Risk?**


Risk Factors:
---------------------------------
- Overweight or obesity
- Type 2 diabetes
- High cholesterol
- High blood pressure
- Metabolic syndrome
- Family history
- Age (middle-aged and older)
- Certain ethnicities (Hispanic, Asian)
---------------------------------


**Common Signs:**


Symptoms:
---------------------------------
Most people have NO symptoms

When symptoms occur:
  - Fatigue
  - Pain in upper right abdomen
  - Weakness
  - Weight loss
  - Confusion (in severe cases)
---------------------------------


**How Is It Diagnosed?

Doctors may suspect fatty liver if:
- Blood tests show elevated liver enzymes
- Ultrasound shows fat in liver
- You have risk factors
- Sometimes a liver biopsy is done

**Can It Be Reversed?**

Yes! The good news is that fatty liver can often be reversed with lifestyle changes:
- Weight loss of 5-10% can significantly reduce liver fat
- Exercise helps
- Control of diabetes and blood pressure
- Avoid alcohol

**Complications:**

If not treated, fatty liver can progress to:
- NASH (inflamed fatty liver)
- Liver scarring (fibrosis)
- Cirrhosis
- Liver cancer

**Prevention and Treatment:**


Lifestyle Changes:
---------------------------------
- Lose weight if overweight
- Exercise regularly
- Eat a healthy diet
- Control blood sugar
- Lower cholesterol
- Avoid alcohol
- Avoid unnecessary medicines
---------------------------------
`,
      keyTerms: [
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease' },
        { term: 'NASH', definition: 'Non-alcoholic steatohepatitis; fatty liver with inflammation' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue for examination' },
        { term: 'enzymes', definition: 'Proteins that help chemical reactions in the liver' },
      ],
      analogies: [
        'Fatty liver is like a liver marbling - fat interspersed throughout the liver tissue.',
        'Think of NAFLD as fat accumulation without inflammation, NASH as fat plus inflammation damage.',
      ],
      examples: [
        'Maria has fatty liver from obesity. She lost 20 pounds and her liver fat resolved.',
        'John has type 2 diabetes and was found to have fatty liver on ultrasound.',
      ],
      patientCounselingPoints: [
        'Weight loss is the most effective treatment for fatty liver.',
        'Your liver can heal itself if you remove the fat accumulation.',
        'Fatty liver is a warning sign for metabolic syndrome.',
        'Regular monitoring can prevent progression to NASH.',
      ],
    },
    2: {
      level: 2,
      summary: 'Non-alcoholic fatty liver disease (NAFLD) encompasses simple steatosis to progressive NASH with fibrosis, strongly associated with metabolic syndrome, requiring lifestyle modification for prevention and treatment.',
      explanation: `**Definition:

NAFLD includes:
- Simple steatosis: Fat accumulation without inflammation
- NASH: Fat with inflammation and hepatocyte injury
- Fibrosis: Progressive scarring from chronic inflammation
- Cirrhosis: End-stage scarring

**Prevalence:
- 20-30% of Western population
- Up to 70-90% in obese individuals
- Most common chronic liver disease worldwide

**Risk Factors:**

Core Risk Factors:
-----------------------------------------
Metabolic Syndrome:
  - Obesity (especially central/abdominal)
  - Type 2 diabetes or insulin resistance
  - Hypertension
  - Dyslipidemia (high TG, low HDL)

Other Factors:
  - Age >50 years
  - Hispanic or Asian ethnicity
  - Polycystic ovary syndrome
  - Hypothyroidism
  - Sleep apnea
  - Certain medications (amiodarone, methotrexate,
    corticosteroids)
-----------------------------------------


**Diagnosis:**

Diagnostic Approach:
-------------------------------------------------
Laboratory:
  - AST, ALT (elevated)
  - AST:ALT ratio <1 (vs >2 in alcoholic)
  - Alkaline phosphatase (mild elevation)
  - GGT (often elevated)
  - Ferritin (often elevated)
  - Insulin resistance markers

Imaging:
  - Ultrasound (steatosis appears bright)
  - CT (shows fat attenuation)
  - MRI-PD (quantifies fat percentage)
    - MRI most accurate for detecting
      and quantifying liver fat

Biopsy:
  - Gold standard for NASH diagnosis
  - Used when diagnosis unclear
  - Assesses inflammation and fibrosis
-------------------------------------------------


**Management:**

Lifestyle Modification (Core Treatment):
-------------------------------------------------
Weight Loss:
  - Goal: 7-10% weight loss
  - Rate: 0.5-1.0 kg/week
  - NASH improvement with 5% weight loss

Diet:
  - Mediterranean diet
  - Limit saturated and trans fats
  - Limit simple carbohydrates
  - Increase fiber
  - Avoid sugar-sweetened beverages

Physical Activity:
  - 150-300 min/week moderate intensity
  - Include resistance training 2x/week
  - Both aerobic and anaerobic exercise

Avoid:
  - Alcohol (completely)
  - Fructose especially
  - Processed foods
  - Sedentary behavior
-------------------------------------------------
`,
      keyTerms: [
        { term: 'steatosis', definition: 'Fat accumulation in cells' },
        { term: 'NASH', definition: 'Non-alcoholic steatohepatitis' },
        { term: 'metabolic syndrome', definition: 'Cluster of insulin resistance, obesity, hypertension, dyslipidemia' },
        { term: 'fibrosis', definition: 'Scarring of tissue' },
      ],
      analogies: [
        'Metabolic syndrome is like a perfect storm for fatty liver.',
      ],
      clinicalNotes: 'Weight loss of 5-10% can reverse NASH. MRI-PD is the most accurate non-invasive test. Biopsy considered when diagnosis uncertain.',
      patientCounselingPoints: [
        'Lifestyle changes are the main treatment for fatty liver disease.',
        'Losing weight can reverse inflammation and early scarring.',
        'Avoiding alcohol and sugary drinks is important.',
        'Screening for diabetes and cholesterol problems is important.',
        'Progression to cirrhosis is less common than you might think.',
      ],
    },
    3: {
      level: 3,
      summary: 'NAFLD encompasses a spectrum from simple steatosis to NASH with fibrosis, driven by insulin resistance and metabolic syndrome, with natural history dependent on genetic and environmental factors.',
      explanation: `**Pathophysiology:**

*Two-Hit Hypothesis:*
Two-Hit Model:
-------------------------------------------------------------
First Hit (Fat Accumulation):
  - Insulin resistance
  - Lipolysis from adipose tissue
  - Free fatty acid flux to liver
  → Hepatic triglyceride accumulation

Second Hit (Inflammatory/Oxidative Stress):
  - Gut microbiome changes (leaky gut)
  - Inflammatory cytokines
  - Oxidative stress
  - Mitochondrial dysfunction
  → Hepatocyte injury, inflammation, fibrosis
-------------------------------------------------------------

**Genetic Factors:**

PNPLA3 gene:
- I148M variant (missense mutation)
- Increased hepatic triglyceride synthesis
- Increased risk of NASH and fibrosis
- More common in Hispanic population

TM6SF2 gene:
- E167K variant
- Increased liver fat but less inflammation
- Lower risk of NASH

**Staging:**
NAFLD Activity Score (NAS):
------------------------------------------------------------
Steatosis: 0-3
Ballooning: 0-2
Inflammation: 0-3
  (0=none, 1=mild, 2=moderate, 3=severe)

Fibrosis Stage (0-4):
  0: None
  1: Perisinusoidal
  2: Periportal and sinusoidal
  3: Bridging fibrosis
  4: Cirrhosis

NASH defined as:
  - NAS ≥5
  - Fibrosis stage ≥2
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'Reduced response to insulin' },
        { term: 'free fatty acids', definition: 'Fats released from fat tissue' },
        { term: 'lipolysis', definition: 'Breakdown of fat into free fatty acids' },
        { term: 'ballooning', definition: 'Swelling of hepatocytes with fat droplets' },
      ],
      analogies: [
        'The two-hit theory is like a one-two punch - first fat accumulates, then inflammation attacks.',
      ],
      clinicalNotes: 'NAFLD is the most common liver disease globally. PNPLA3 variant increases NASH risk. Most patients with NAFLD do not progress to advanced fibrosis.',
      patientCounselingPoints: [
        'Your genetic makeup may affect your fatty liver risk.',
        'Most people with fatty liver will not progress to serious disease.',
        'Weight loss and lifestyle changes remain key regardless of genetics.',
      ],
    },
    4: {
      level: 4,
      summary: 'NAFLD/NASH management focuses on metabolic syndrome improvement through lifestyle intervention, with emerging pharmacologic options targeting fibrosis pathways and metabolic regulators.',
      explanation: `**Management Approaches:

*Pharmacologic Therapy:*
Emerging Medical Therapies:
------------------------------------------------------------
Pioglitazone:
  - TZD (thiazolidinedione)
  - Improves insulin sensitivity
  - Reduces steatosis and inflammation
  - Can cause weight gain, fractures
  - Black box warning for heart failure
    (if with insulin)

GLP-1 Agonists:
  - Semaglutide, liraglutide
  - Weight loss 10-15%
  - Improved liver enzymes
  - Reduced MASH on biopsy
  - May become first-line

Vitamin E (α-tocopherol):
  - Antioxidant properties
  - Improves steatosis and inflammation in NASH
  - Dose: 800 IU daily
  - Possible all-cause mortality increase

SGLT2 Inhibitors:
  - Empagliflozin, dapagliflozin
  - Small benefits seen in trials
  - Weight loss, metabolic improvement

Investigational:
  - Obeticholic acid: FXR agonist
  - Cenicriviroc: anti-inflammatory
  - Resmetirom: ASK1 inhibitor
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'TZD', definition: 'Thiazolidinedione; insulin sensitizer' },
        { term: 'FXR agonist', definition: 'Farnesoid X receptor agonist' },
        { term: 'ASK1 inhibitor', definition: 'Apoptosis signal-regulating kinase 1 inhibitor' },
      ],
      clinicalNotes: 'Pioglitazone improves NASH but has significant safety concerns. GLP-1 agonists may become preferred due to weight loss and metabolic benefits.',
      patientCounselingPoints: [
        'New medicines are being developed specifically for fatty liver disease.',
        'GLP-1 agonists may become important treatment options.',
        'Vitamin E has modest benefits but discuss with your doctor first.',
      ],
    },
    5: {
      level: 5,
      summary: 'NAFLD/NASH management is evolving with novel pharmacologic agents targeting FXR, ASK1, GLP-1, and inflammatory pathways to complement lifestyle intervention.',
      explanation: `**Precision Medicine Approaches:**

*Genetic Stratification:*
Genetic Risk Assessment:
------------------------------------------------------------
PNPLA3 I148M:
  - 2x increased NASH risk
  - Worse fibrosis progression
  - May affect treatment response

TM6SF2 E167K:
  - Increases liver fat
  - Protective against inflammation and fibrosis
  → "Healthy" fatty liver phenotype

HSD17B13 variants:
  - Increased PNPLA3 expression
  - Risk stratification

Polygenic Risk Scores:
  - Multiple gene variants
  - Predict progression risk
  - May guide therapy intensity
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'HSD17B13', definition: 'Hydroxysteroid 17-beta dehydrogenase 13' },
      ],
      clinicalNotes: 'Genetic testing can identify patients at highest risk for progression. PNPLA3 variant has FDA testing availability.',
      patientCounselingPoints: [
        'Genetic testing may help determine your personal risk.',
        'Your genetics may affect how you respond to treatment.',
      ],
    },
  },

  media: [
    {
      id: 'nafld-spectrum',
      type: 'diagram',
      filename: 'nafld-to-nash-spectrum.svg',
      title: 'NAFLD to NASH Spectrum',
      description: 'Progression from simple fat accumulation to NASH',
    },
    {
      id: 'nash-biopsy',
      type: 'diagram',
      filename: 'nash-liver-biopsy.svg',
      title: 'Liver Biopsy in NASH',
      description: 'Illustration of liver biopsy procedure and findings',
    },
  ],

  citations: [
    {
      id: 'aasld-nafld-2023',
      type: 'article',
      title: 'AASLD Practice Guidance for NAFLD',
      source: 'Hepatology',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-cirrhosis', targetType: 'condition', relationship: 'child', label: 'Cirrhosis' },
    { targetId: 'chronic-disease-hepatitis', targetType: 'condition', relationship: 'sibling', label: 'Hepatitis' },
    { targetId: 'chronic-disease-liver-failure', targetType: 'condition', relationship: 'child', label: 'Liver Failure' },
  ],

  tags: {
    systems: ['hepatic', 'gastrointestinal'],
    structures: ['liver', 'hepatocyte'],
    topics: ['NAFLD', 'NASH', 'fatty liver', 'metabolic syndrome'],
    keywords: ['NAFLD', 'NASH', 'fatty liver', 'metabolic syndrome'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
