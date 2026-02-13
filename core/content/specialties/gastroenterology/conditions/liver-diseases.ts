/**
 * Liver Diseases - Comprehensive Educational Content
 *
 * Covers viral hepatitis, cirrhosis, metabolic dysfunction-associated steatotic
 * liver disease (MASLD/MASH), alcoholic liver disease, and complications of cirrhosis.
 */

import { EducationalContent } from '../../../types';

export const liverDiseases: EducationalContent = {
  id: 'condition-liver-diseases',
  type: 'condition',
  name: 'Liver Diseases',
  alternateNames: [
    'Hepatitis',
    'Cirrhosis',
    'Fatty Liver',
    'NAFLD',
    'NASH',
    'MASLD',
    'MASH',
    'Alcoholic Liver Disease',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The liver is a vital organ that filters blood and processes nutrients. Liver diseases include infections (hepatitis), fatty buildup, and scarring (cirrhosis). Many can be prevented or treated if caught early.',
      explanation: `**What Does Your Liver Do?**

Your liver is like a super-factory inside your body. It:
- Cleans your blood of toxins and waste
- Makes proteins that help your blood clot
- Stores vitamins and energy (sugar)
- Helps digest fats by making bile
- Breaks down medications

**Types of Liver Disease:**

**1. Hepatitis (Liver Inflammation)**
"Hepatitis" means inflammation of the liver. Common causes include:
- **Viruses**: Hepatitis A, B, and C are the main ones
  - Hep A: From contaminated food/water (can be prevented with a vaccine)
  - Hep B: From blood or body fluids (can be prevented with a vaccine)
  - Hep C: From blood contact, often cured with medicine now!
- **Alcohol**: Drinking too much damages the liver
- **Medications**: Some medicines can harm the liver

**2. Fatty Liver Disease**
When too much fat builds up in the liver:
- Often linked to being overweight or having diabetes
- Usually causes no symptoms at first
- Can be reversed with weight loss and healthy eating

**3. Cirrhosis (Liver Scarring)**
When the liver is damaged over and over, it forms scars. Too much scarring means the liver can't work properly. Causes include:
- Long-term alcohol use
- Chronic hepatitis B or C
- Untreated fatty liver disease

**Warning Signs of Liver Problems:**
- Yellowing of skin or eyes (jaundice)
- Belly swelling
- Easy bruising
- Feeling very tired
- Dark urine or pale stool

**The Good News:**
- Vaccines prevent hepatitis A and B
- Hepatitis C can now be cured
- Fatty liver can often be reversed
- The liver can heal if damage is caught early`,
      keyTerms: [
        { term: 'liver', definition: 'A large organ that cleans your blood, makes important proteins, and helps digest food' },
        { term: 'hepatitis', definition: 'Inflammation (swelling and irritation) of the liver' },
        { term: 'cirrhosis', definition: 'Severe scarring of the liver that prevents it from working properly', pronunciation: 'sir-OH-sis' },
        { term: 'jaundice', definition: 'Yellowing of the skin and eyes from liver problems', pronunciation: 'JAWN-dis' },
        { term: 'fatty liver', definition: 'A condition where too much fat builds up in the liver' },
      ],
      analogies: [
        'Your liver is like a water filter - it cleans everything that passes through your blood.',
        'Cirrhosis is like replacing spongy liver tissue with hard scar tissue, like a wound that heals with a stiff scar.',
        'Fatty liver is like a storage room getting filled with junk - at first it still works, but eventually there\'s no room to do its job.',
      ],
      examples: [
        'Someone who drinks a lot of alcohol for many years may slowly develop cirrhosis without realizing it until serious symptoms appear.',
        'A person with untreated hepatitis C might feel fine for years while the virus slowly damages their liver.',
      ],
    },
    2: {
      level: 2,
      summary: 'Liver diseases include viral hepatitis (A, B, C, D, E), alcoholic liver disease, metabolic dysfunction-associated steatotic liver disease (MASLD), and cirrhosis. Diagnosis relies on liver function tests, viral serologies, imaging, and sometimes biopsy.',
      explanation: `## Overview of Liver Diseases

### Viral Hepatitis

**Hepatitis A (HAV):**
- Transmission: Fecal-oral (contaminated food/water)
- Course: Acute only, no chronic form
- Prognosis: Self-limited, rarely fulminant
- Prevention: Vaccine available

**Hepatitis B (HBV):**
- Transmission: Blood, sexual contact, perinatal
- Course: Can become chronic (5% adults, 90% infants)
- Complications: Cirrhosis, hepatocellular carcinoma
- Prevention: Vaccine available
- Treatment: Antivirals (entecavir, tenofovir)

**Hepatitis C (HCV):**
- Transmission: Blood (IV drug use, transfusions pre-1992)
- Course: 75-85% become chronic
- Complications: Cirrhosis, hepatocellular carcinoma
- No vaccine, but highly curable with direct-acting antivirals (DAAs)

**Hepatitis D (HDV):**
- Requires HBV co-infection
- More severe disease than HBV alone

**Hepatitis E (HEV):**
- Fecal-oral transmission
- Usually self-limited, can be severe in pregnancy

### Alcoholic Liver Disease Spectrum

1. **Alcoholic fatty liver**: Reversible with abstinence
2. **Alcoholic hepatitis**: Acute inflammation, can be severe
3. **Alcoholic cirrhosis**: End-stage, often irreversible

**Risk factors:**
- Amount and duration of alcohol use
- Daily drinking worse than binge drinking
- Women more susceptible at lower amounts
- Co-existing hepatitis C accelerates damage

### Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)

*Formerly called Non-Alcoholic Fatty Liver Disease (NAFLD)*

**Spectrum:**
1. **Simple steatosis**: Fat in liver, minimal inflammation
2. **MASH (Metabolic dysfunction-associated steatohepatitis)**: Fat + inflammation + cell damage
3. **Cirrhosis**: Progressive fibrosis leading to cirrhosis

**Risk Factors:**
- Obesity (especially abdominal)
- Type 2 diabetes
- Metabolic syndrome
- Dyslipidemia

**Diagnosis:**
- Ultrasound shows fatty liver
- FibroScan measures liver stiffness (fibrosis)
- Elevated ALT (though can be normal)
- Rule out other causes (alcohol, viral hepatitis)

### Liver Function Tests (LFTs)

| Test | What It Indicates |
|------|-------------------|
| ALT (SGPT) | Hepatocyte damage (most specific for liver) |
| AST (SGOT) | Hepatocyte damage (also in muscle, heart) |
| Alkaline Phosphatase | Cholestasis (bile duct problems) |
| GGT | Cholestasis, alcohol use |
| Bilirubin | Liver function, bile excretion |
| Albumin | Synthetic function |
| PT/INR | Synthetic function (clotting factors) |

**Patterns:**
- **Hepatocellular**: ALT/AST >> Alk Phos (hepatitis)
- **Cholestatic**: Alk Phos/GGT >> ALT/AST (bile duct obstruction)
- **AST:ALT > 2:1**: Suggests alcoholic liver disease

### Cirrhosis and Its Complications

**Definition:** End-stage of chronic liver disease with fibrosis and nodule formation

**Complications:**
- **Portal hypertension**: Elevated pressure in portal vein
- **Ascites**: Fluid accumulation in abdomen
- **Varices**: Enlarged veins in esophagus/stomach (can bleed)
- **Hepatic encephalopathy**: Confusion from toxin buildup
- **Hepatorenal syndrome**: Kidney failure
- **Hepatocellular carcinoma**: Liver cancer`,
      keyTerms: [
        { term: 'direct-acting antivirals (DAAs)', definition: 'Medications that cure hepatitis C by blocking viral replication' },
        { term: 'portal hypertension', definition: 'Elevated pressure in the portal vein due to cirrhosis, causing ascites and varices' },
        { term: 'ascites', definition: 'Accumulation of fluid in the abdominal cavity', pronunciation: 'uh-SY-teez' },
        { term: 'varices', definition: 'Enlarged, fragile veins that can bleed, especially in the esophagus', pronunciation: 'VAIR-ih-seez' },
        { term: 'hepatic encephalopathy', definition: 'Brain dysfunction due to liver failure and toxin buildup (especially ammonia)' },
        { term: 'MASLD', definition: 'Metabolic dysfunction-associated steatotic liver disease; new name for NAFLD' },
      ],
      analogies: [
        'Portal hypertension is like a traffic jam in the blood vessels leading to the liver, causing backup and detours.',
        'Varices are like over-inflated balloons that can pop under too much pressure.',
        'Hepatic encephalopathy is like the brain being poisoned by waste products the liver can\'t clean anymore.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hepatitis pathophysiology involves immune-mediated hepatocyte destruction. MASLD is driven by insulin resistance, lipotoxicity, and inflammation. Cirrhosis develops through progressive fibrosis with portal hypertension complications including ascites, variceal bleeding, and hepatic encephalopathy.',
      explanation: `## Hepatitis Pathophysiology

### Viral Hepatitis Mechanisms

**Hepatitis B:**
- DNA virus, replicates via reverse transcriptase
- Hepatocyte injury is immune-mediated (not direct cytopathic)
- CD8+ T cells target infected hepatocytes
- Covalently closed circular DNA (cccDNA) persists in nucleus
- Serology interpretation:

| Marker | Acute Infection | Chronic Infection | Immunity (Vaccine) | Immunity (Natural) |
|--------|-----------------|-------------------|-------------------|-------------------|
| HBsAg | + | + | - | - |
| Anti-HBs | - | - | + | + |
| Anti-HBc IgM | + | - | - | - |
| Anti-HBc IgG | + | + | - | + |
| HBeAg | + | +/- | - | - |
| HBV DNA | High | Variable | - | - |

**Hepatitis C:**
- RNA virus, high genetic variability
- Direct cytopathic effect + immune-mediated injury
- Chronic infection in 75-85% due to immune evasion
- Genotypes guide treatment duration (though pangenotypic regimens common)

### MASLD/MASH Pathophysiology

**"Multiple Hit" Hypothesis:**

1. **First hit - Steatosis:**
   - Insulin resistance → increased hepatic lipogenesis
   - Increased free fatty acid delivery from adipose tissue
   - Decreased fatty acid oxidation
   - Decreased VLDL export

2. **Second hits - Progression to MASH:**
   - Lipotoxicity (toxic lipid metabolites)
   - Oxidative stress (mitochondrial dysfunction, ROS)
   - ER stress and unfolded protein response
   - Adipokine imbalance (decreased adiponectin, increased leptin)
   - Gut-liver axis (endotoxin, altered microbiome)

3. **Fibrogenesis:**
   - Hepatic stellate cell activation
   - Myofibroblast transformation
   - Collagen deposition
   - Progressive fibrosis → cirrhosis

**Fibrosis Assessment:**
- Non-invasive: FIB-4 score, NAFLD Fibrosis Score, FibroScan (VCTE)
- Invasive: Liver biopsy (gold standard but sampling variability)

### Alcoholic Liver Disease

**Mechanisms of Injury:**
- Acetaldehyde toxicity (from alcohol metabolism)
- Oxidative stress (CYP2E1-mediated)
- Gut permeability → endotoxemia → Kupffer cell activation
- Immune response and inflammation

**Alcoholic Hepatitis:**
- Acute presentation with jaundice, fever, leukocytosis
- High AST:ALT ratio (>2:1)
- Severity scores: Maddrey's Discriminant Function, MELD
- Treatment: Abstinence, nutrition, prednisolone if severe (DF ≥32)

### Cirrhosis Pathophysiology

**Structural Changes:**
- Regenerative nodules surrounded by fibrous bands
- Sinusoidal capillarization (loss of fenestrae)
- Disrupted hepatic architecture

**Portal Hypertension:**
- Increased intrahepatic resistance (mechanical + vasoconstriction)
- Increased portal blood flow (splanchnic vasodilation)
- Normal: 1-5 mmHg; Significant: ≥10 mmHg
- HVPG ≥12 mmHg: Variceal hemorrhage risk

**Complications:**

*Ascites:*
- Mechanism: Portal HTN → splanchnic vasodilation → decreased effective arterial volume → RAAS activation → Na/H2O retention
- Management: Na restriction, diuretics (spironolactone ± furosemide)
- Refractory: Paracentesis, TIPS

*Hepatic Encephalopathy:*
- Ammonia and other toxins cross blood-brain barrier
- Astrocyte swelling, altered neurotransmission
- West Haven Criteria for grading (I-IV)
- Treatment: Lactulose (trap ammonia in colon), rifaximin

*Hepatorenal Syndrome:*
- Functional renal failure in cirrhosis
- Type 1: Rapid onset, poor prognosis
- Type 2: Gradual, associated with refractory ascites
- Treatment: Albumin + vasoconstrictors, TIPS, transplant`,
      keyTerms: [
        { term: 'cccDNA', definition: 'Covalently closed circular DNA; stable HBV DNA form in hepatocyte nucleus responsible for persistence' },
        { term: 'lipotoxicity', definition: 'Cellular damage from accumulation of toxic lipid intermediates' },
        { term: 'hepatic stellate cells', definition: 'Liver cells that become activated and produce collagen in fibrosis' },
        { term: 'HVPG', definition: 'Hepatic venous pressure gradient; measure of portal hypertension; ≥10 mmHg clinically significant' },
        { term: 'Maddrey Discriminant Function', definition: 'Score predicting prognosis in alcoholic hepatitis; ≥32 indicates severe disease' },
        { term: 'MELD score', definition: 'Model for End-Stage Liver Disease; predicts mortality, used for transplant allocation' },
      ],
      clinicalNotes: 'AST:ALT > 2:1 with both values <300 suggests alcoholic liver disease. In MASLD, normal ALT does not exclude significant fibrosis; use non-invasive scores. Spontaneous bacterial peritonitis should be ruled out in any cirrhotic with ascites and fever, abdominal pain, or encephalopathy.',
    },
    4: {
      level: 4,
      summary: 'HBV treatment targets cccDNA persistence and HBsAg loss. HCV DAA regimens achieve >95% cure rates. MASLD treatment focuses on cardiometabolic risk, with emerging anti-fibrotic therapies. Cirrhosis management requires risk stratification for decompensation and HCC surveillance.',
      explanation: `## Advanced Hepatology

### Hepatitis B - Treatment and Monitoring

**Goals of Therapy:**
- Durable suppression of HBV DNA
- HBeAg seroconversion (in HBeAg+ patients)
- HBsAg loss (functional cure - difficult to achieve)
- Prevention of cirrhosis and HCC

**Treatment Indications:**
- Cirrhosis (compensated or decompensated)
- Significant fibrosis (F≥2) with elevated ALT or HBV DNA
- HBeAg+ chronic hepatitis with ALT >2x ULN
- HBeAg- chronic hepatitis with persistent elevation
- Immunosuppression (prophylaxis)

**First-Line Antivirals:**
- Entecavir (ETV) 0.5-1 mg daily
- Tenofovir disoproxil fumarate (TDF) 300 mg daily
- Tenofovir alafenamide (TAF) 25 mg daily (preferred if renal/bone concerns)

**Monitoring on Treatment:**
- HBV DNA q3-6 months initially, then q6-12 months
- HBsAg quantification (declining levels favorable)
- HCC surveillance q6 months (in cirrhosis or high-risk)

**Emerging Therapies:**
- Capsid assembly modulators
- siRNA/antisense oligonucleotides (target HBsAg production)
- Entry inhibitors
- Immune modulators (checkpoint inhibitors, therapeutic vaccines)

### Hepatitis C - DAA Era

**Pangenotypic Regimens (>95% SVR):**
- Sofosbuvir/velpatasvir (Epclusa) x 12 weeks
- Glecaprevir/pibrentasvir (Mavyret) x 8-12 weeks
- Sofosbuvir/velpatasvir/voxilaprevir (Vosevi) - for prior DAA failure

**Special Populations:**
- Decompensated cirrhosis: Avoid protease inhibitors (glecaprevir, voxilaprevir)
- Renal impairment: Glecaprevir/pibrentasvir safe in ESRD
- HCV/HIV coinfection: Drug interactions with ART

**Post-Treatment:**
- SVR12 = cure (sustained virologic response at 12 weeks)
- HCC surveillance continues in cirrhosis patients even after cure
- Reinfection possible (no lasting immunity)

### MASLD/MASH - Current Landscape

**Diagnosis and Staging:**

*Non-invasive Assessment Algorithm:*
1. FIB-4 score as initial triage
   - <1.3: Low risk, monitor
   - ≥1.3: Proceed to FibroScan or ELF test
2. FibroScan (VCTE)
   - <8 kPa: Low risk fibrosis
   - 8-12 kPa: Intermediate
   - >12 kPa: Advanced fibrosis likely

**Management:**
*Lifestyle (cornerstone):*
- Weight loss 7-10% body weight → MASH resolution
- Mediterranean diet superior to low-fat diet
- Exercise (even without weight loss improves steatosis)
- Bariatric surgery effective in morbid obesity

*Pharmacotherapy:*
- Resmetirom (thyroid hormone receptor beta agonist): FDA-approved for MASH with fibrosis (2024)
- Pioglitazone: Improves histology in MASH (diabetes or prediabetes)
- Vitamin E 800 IU: Benefit in MASH without diabetes
- GLP-1 receptor agonists: Weight loss, possible direct hepatic benefit (semaglutide)
- SGLT2 inhibitors: Emerging evidence for benefit

*Emerging Targets:*
- FXR agonists (obeticholic acid)
- ACC inhibitors
- FGF19/FGF21 analogs
- Combination therapies

### Cirrhosis - Risk Stratification

**Compensated vs. Decompensated:**

*Compensated cirrhosis:*
- No ascites, variceal bleeding, encephalopathy, or jaundice
- Median survival >12 years
- Key: Prevent decompensation

*Decompensated cirrhosis:*
- One or more complications present
- Median survival 2 years without transplant
- Key: Manage complications, evaluate for transplant

**Child-Pugh Classification:**

| Parameter | 1 point | 2 points | 3 points |
|-----------|---------|----------|----------|
| Bilirubin | <2 | 2-3 | >3 |
| Albumin | >3.5 | 2.8-3.5 | <2.8 |
| INR | <1.7 | 1.7-2.3 | >2.3 |
| Ascites | None | Mild | Moderate-severe |
| Encephalopathy | None | Grade I-II | Grade III-IV |

- Class A (5-6): Well-compensated
- Class B (7-9): Significant functional compromise
- Class C (10-15): Decompensated

**MELD Score:**
- MELD = 3.78 × ln(bilirubin) + 11.2 × ln(INR) + 9.57 × ln(creatinine) + 6.43
- Used for transplant allocation
- MELD 3.0 includes sex and albumin

### HCC Surveillance

**Who:**
- All cirrhosis patients (any etiology)
- HBV carriers at high risk (Asian males >40, Asian females >50, Africans >20, family history)

**How:**
- Ultrasound with or without AFP every 6 months
- MRI/CT for inconclusive ultrasound findings

**LI-RADS Classification:**
- LR-1: Definitely benign
- LR-2: Probably benign
- LR-3: Intermediate probability
- LR-4: Probably HCC
- LR-5: Definitely HCC (diagnostic without biopsy)`,
      keyTerms: [
        { term: 'SVR12', definition: 'Sustained virologic response 12 weeks post-treatment; indicates HCV cure' },
        { term: 'resmetirom', definition: 'Thyroid hormone receptor beta agonist; first FDA-approved drug for MASH with fibrosis' },
        { term: 'VCTE', definition: 'Vibration-controlled transient elastography (FibroScan); measures liver stiffness as fibrosis surrogate' },
        { term: 'LI-RADS', definition: 'Liver Imaging Reporting and Data System; standardized HCC imaging classification' },
        { term: 'FIB-4', definition: 'Fibrosis-4 index; non-invasive score using age, AST, ALT, platelets to estimate fibrosis' },
        { term: 'functional cure', definition: 'In HBV, sustained HBsAg loss; cccDNA persists but immune control achieved' },
      ],
      clinicalNotes: 'Resmetirom represents a paradigm shift as the first approved MASH-specific therapy. FIB-4 is an excellent triage tool - low score (<1.3) has high negative predictive value for advanced fibrosis. All cirrhosis patients need HCC surveillance even after HCV cure.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hepatology emphasizes non-invasive fibrosis assessment, personalized treatment based on etiology and stage, and prevention of disease progression. Liver transplantation algorithms, HCC management, and novel therapeutics for MASH and HBV represent active frontiers.',
      explanation: `## Hepatology: Contemporary Practice and Frontiers

### Integrated Liver Disease Assessment

**Multi-Disciplinary Approach:**
- MASLD patients benefit from cardiometabolic evaluation (CV disease is leading cause of death)
- Alcohol use disorder screening and treatment resources
- Mental health integration
- Nutrition/bariatric surgery referral when appropriate

**Sequential Non-Invasive Testing Algorithm:**

\`\`\`
Primary Care: FIB-4 Score
    │
    ├── <1.3 (low risk) → Repeat in 2-3 years
    │
    └── ≥1.3 → Hepatology referral
                    │
                    └── FibroScan or ELF test
                            │
                            ├── Low stiffness → Monitor, address risk factors
                            │
                            ├── Intermediate → Consider biopsy or close monitoring
                            │
                            └── High stiffness → Advanced fibrosis care pathway
                                    │
                                    └── HCC surveillance, variceal screening, transplant evaluation
\`\`\`

### HBV Cure Strategies

**Current "Functional Cure" Rate:**
- HBsAg loss with NUC therapy: ~1-2% per year
- Peg-IFN: Higher rates in select patients (~10%)

**Novel Approaches in Development:**

*Targeting cccDNA:*
- Gene editing (CRISPR approaches)
- Epigenetic silencing

*Reducing HBsAg Production:*
- siRNA (e.g., bepirovirsen, JNJ-3989)
- Antisense oligonucleotides
- Goal: Enable immune reconstitution

*Immune Activation:*
- Checkpoint inhibitors (PD-1, PD-L1)
- Therapeutic vaccines
- TLR agonists
- Combination approaches (antiviral + immune modulator)

### MASH Therapeutics Pipeline

**Approved:**
- Resmetirom (THR-beta agonist): First FDA-approved (2024)

**Phase 3:**
- Semaglutide (GLP-1 RA): MASH resolution benefit demonstrated
- Tirzepatide (GIP/GLP-1): Similar potential
- Lanifibranor (pan-PPAR agonist): Anti-fibrotic effects

**Emerging Mechanisms:**
- FGF21 analogs (pegozafermin): Metabolic and anti-fibrotic
- FXR agonists (obeticholic acid): Approved for PBC, MASH trial complications
- Combination regimens likely necessary for fibrosis reversal

### Cirrhosis Management - AASLD/EASL Updates

**Portal Hypertension Management:**

*Variceal Bleeding Prophylaxis:*
- Primary: Non-selective beta-blocker (carvedilol preferred) OR endoscopic band ligation
- Carvedilol dose: Start 6.25 mg daily, target 12.5 mg daily
- Secondary (post-bleed): NSBB + EBL

*Acute Variceal Hemorrhage:*
- Resuscitation, restrictive transfusion (Hgb target 7-8)
- IV octreotide + antibiotics (ceftriaxone 1g)
- Emergent endoscopy within 12 hours
- TIPS for refractory bleeding or high-risk (Child B with active bleeding, Child C)

*Baveno VII Recommendations:*
- Compensated cirrhosis: LSM + platelet count can rule out varices
  - LSM <20 kPa AND platelets >150 → EGD can be avoided
- Beta-blocker use expanding to earlier stages

**Ascites Management:**

*First-line:*
- Sodium restriction (<2g/day)
- Spironolactone 100-400 mg + furosemide 40-160 mg (100:40 ratio)

*Refractory Ascites:*
- Large-volume paracentesis + albumin (6-8g per liter removed if >5L)
- TIPS evaluation (consider if suitable candidate)
- Midodrine + octreotide (limited evidence)
- Transplant evaluation

**Hepatic Encephalopathy:**

*Treatment Algorithm:*
1. Identify precipitant (infection, bleeding, constipation, medications)
2. Lactulose titrated to 2-3 soft BMs daily
3. Add rifaximin 550 mg BID if recurrent episodes
4. Secondary prophylaxis continues indefinitely

### Liver Transplantation

**Indications:**
- MELD ≥15 (survival benefit from transplant)
- Decompensated cirrhosis
- HCC within Milan criteria
- Acute liver failure

**Milan Criteria for HCC:**
- Single tumor ≤5 cm OR
- Up to 3 tumors, each ≤3 cm
- No vascular invasion, no extrahepatic spread

**MELD Score Evolution:**
- Original: Bilirubin, INR, creatinine
- MELD-Na: Added sodium (2016)
- MELD 3.0: Added sex, albumin (2022) - reduces sex-based disparity

**Living Donor Liver Transplantation:**
- Expanding due to organ shortage
- Minimum 30% graft-to-recipient weight ratio
- Donor risk ~0.1-0.5% mortality

### HCC Management

**Barcelona Clinic Liver Cancer (BCLC) Staging:**

| Stage | Tumor Status | Performance | Liver Function | Treatment |
|-------|--------------|-------------|----------------|-----------|
| 0 | Single <2cm | ECOG 0 | Child A | Ablation, resection |
| A | Single or ≤3 tumors ≤3cm | ECOG 0 | Child A-B | Resection, ablation, transplant |
| B | Multinodular | ECOG 0 | Child A-B | TACE |
| C | Portal invasion or extrahepatic | ECOG 1-2 | Child A-B | Systemic therapy |
| D | Any | ECOG 3-4 | Child C | Best supportive care |

**Systemic Therapy:**
- First-line: Atezolizumab + bevacizumab (checkpoint inhibitor + anti-VEGF)
- Alternatives: Lenvatinib, sorafenib
- Second-line: Regorafenib, cabozantinib, ramucirumab

**Locoregional Therapy:**
- Ablation: RFA, MWA for tumors ≤3cm
- TACE: Trans-arterial chemoembolization for intermediate stage
- TARE: Y90 radioembolization, emerging role
- SBRT: Stereotactic body radiation therapy, alternative to ablation

### Quality Metrics

**Process Measures:**
- HCC surveillance completion rate in cirrhosis
- Variceal screening in new cirrhosis diagnosis
- HCV treatment rate in eligible patients
- Alcohol abstinence documentation

**Outcome Measures:**
- Variceal bleeding rates
- Decompensation events
- Transplant waitlist mortality
- HCC detection at early stage`,
      keyTerms: [
        { term: 'Baveno VII', definition: 'Updated consensus guidelines on portal hypertension management including non-invasive risk stratification' },
        { term: 'BCLC', definition: 'Barcelona Clinic Liver Cancer staging; guides HCC treatment selection' },
        { term: 'atezolizumab-bevacizumab', definition: 'First-line systemic therapy for advanced HCC (checkpoint inhibitor + anti-VEGF)' },
        { term: 'MELD 3.0', definition: 'Updated transplant allocation score incorporating sex and albumin to reduce disparity' },
        { term: 'carvedilol', definition: 'Preferred non-selective beta-blocker for portal hypertension due to additional alpha-blocking effect' },
        { term: 'TARE', definition: 'Trans-arterial radioembolization with Y90; locoregional HCC therapy' },
      ],
      clinicalNotes: `Key clinical pearls:
1. FIB-4 <1.3 has >90% NPV for advanced fibrosis - excellent primary care triage tool
2. All cirrhotics need HCC surveillance q6 months regardless of etiology
3. Baveno VII allows avoiding EGD for varices if LSM <20 AND platelets >150k
4. Carvedilol is preferred NSBB for portal HTN prophylaxis over propranolol
5. After variceal bleed, early TIPS (within 72h) improves survival in high-risk patients (Child B with active bleed, Child C 10-13)
6. HCV cure does not eliminate HCC risk in cirrhotics - surveillance continues indefinitely
7. Atezolizumab-bevacizumab is first-line for advanced HCC but requires recent EGD to assess variceal bleeding risk
8. MELD 3.0 gives women additional points, addressing prior sex-based disparity in transplant access
9. Resmetirom represents first approved MASH therapy - indicated for F2-F3 fibrosis with MASH
10. TIPS is underutilized for refractory ascites; early referral improves outcomes`,
    },
  },

  media: [
    {
      id: 'liver-anatomy',
      type: 'diagram',
      filename: 'liver-anatomy.svg',
      title: 'Liver Anatomy',
      description: 'Liver structure showing lobes, blood supply, and biliary system',
    },
    {
      id: 'cirrhosis-complications',
      type: 'diagram',
      filename: 'portal-hypertension.svg',
      title: 'Portal Hypertension Complications',
      description: 'Pathophysiology of portal hypertension and its complications',
    },
  ],

  citations: [
    {
      id: 'aasld-hbv-2018',
      type: 'article',
      title: 'AASLD Guidelines for Treatment of Chronic Hepatitis B',
      source: 'Hepatology',
    },
    {
      id: 'aasld-hcv-2023',
      type: 'article',
      title: 'AASLD-IDSA HCV Guidance',
      source: 'hcvguidelines.org',
      url: 'https://www.hcvguidelines.org/',
    },
    {
      id: 'aasld-masld-2023',
      type: 'article',
      title: 'AASLD Practice Guidance on MASLD',
      source: 'Hepatology',
    },
    {
      id: 'baveno-vii',
      type: 'article',
      title: 'Baveno VII Consensus on Portal Hypertension',
      source: 'Journal of Hepatology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-liver', targetType: 'structure', relationship: 'related', label: 'Liver Anatomy' },
    { targetId: 'condition-gi-cancers', targetType: 'condition', relationship: 'related', label: 'GI Cancers (HCC)' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding (Varices)' },
  ],

  tags: {
    systems: ['digestive', 'hepatobiliary'],
    topics: ['pathology', 'gastroenterology', 'hepatology', 'infectious disease', 'oncology'],
    keywords: ['hepatitis', 'cirrhosis', 'fatty liver', 'MASLD', 'MASH', 'HBV', 'HCV', 'portal hypertension'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default liverDiseases;
