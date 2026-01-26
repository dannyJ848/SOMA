/**
 * Liver Disorders - Hepatitis, Cirrhosis, Fatty Liver
 *
 * Covers viral hepatitis, alcoholic liver disease, NAFLD/NASH, cirrhosis,
 * and liver failure.
 */

import { EducationalContent } from '../types';

export const liverContent: EducationalContent = {
  id: 'gi-liver-disorders',
  type: 'condition',
  name: 'Liver Disorders',
  alternateNames: [
    'Hepatitis',
    'Cirrhosis',
    'Fatty Liver',
    'NAFLD',
    'NASH',
    'Alcoholic Liver Disease',
    'Liver Failure',
    'Ascites',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The liver is a large organ in the upper right abdomen that helps digest food, remove toxins, and store energy. Liver problems include hepatitis, fatty liver, and cirrhosis.',
      explanation: `**What Does the Liver Do?**

The liver is the largest internal organ, located under your ribs on the right side. It performs hundreds of vital functions:
- Filters blood from the digestive tract
- Makes bile to help digest fats
- Stores energy (sugar) and vitamins
- Makes proteins for blood clotting
- Breaks down medications and alcohol
- Removes toxins from the body

**Common Liver Problems:**

1. **Hepatitis**
   - Inflammation (swelling) of the liver
   - Often caused by viruses (hepatitis A, B, C)
   - Can also be caused by alcohol, medications, or autoimmune problems
   - Some types can become long-term (chronic) infections

2. **Fatty Liver Disease**
   - Fat builds up in liver cells
   - Often from obesity, diabetes, or high cholesterol
   - Called NAFLD when not from alcohol
   - Can progress to more serious liver damage

3. **NASH (Non-alcoholic Steatohepatitis)**
   - Fatty liver with inflammation
   - Can lead to permanent scarring (fibrosis)
   - A growing problem due to obesity epidemic

4. **Alcoholic Liver Disease**
   - Damage from drinking too much alcohol
   - Ranges from fatty liver to hepatitis to cirrhosis
   - Stopping alcohol can prevent further damage

5. **Cirrhosis**
   - Permanent scarring of the liver
   - Scar tissue replaces healthy liver tissue
   - Liver cannot work properly
   - Can lead to liver failure

6. **Ascites**
   - Fluid buildup in the abdomen
   - Caused by increased pressure in liver blood vessels
   - Common in advanced liver disease

**Warning Signs of Liver Problems:**
- Yellowing of skin and eyes (jaundice)
- Dark urine, pale stools
- Belly pain and swelling
- Extreme tiredness
- Easy bruising or bleeding
- Confusion or memory problems

**Protecting Your Liver:**
- Limit alcohol or avoid it completely
- Maintain a healthy weight
- Get vaccinated for hepatitis A and B
- Avoid sharing needles
- Eat a healthy diet
- Exercise regularly`,
      keyTerms: [
        { term: 'hepatitis', definition: 'Inflammation of the liver', pronunciation: 'hep-uh-TIE-tis' },
        { term: 'cirrhosis', definition: 'Permanent scarring of the liver', pronunciation: 'sir-OH-sis' },
        { term: 'jaundice', definition: 'Yellowing of the skin and eyes', pronunciation: 'JAWN-dis' },
        { term: 'ascites', definition: 'Fluid buildup in the belly', pronunciation: 'uh-SIE-tees' },
        { term: 'NAFLD', definition: 'Fatty liver not caused by alcohol' },
        { term: 'bile', definition: 'Fluid made by liver that helps digest fats' },
      ],
      analogies: [
        'The liver is like the body chemical processing plant, breaking down and sorting everything that enters.',
        'Cirrhosis is like scar tissue on the skin, but inside the liver - it does not work like healthy tissue.',
        'The liver acts like a filter, cleaning blood as it passes through.',
      ],
      examples: [
        'Someone with hepatitis A might have gotten it from eating contaminated food at a restaurant.',
        'A person who drinks heavily every day might develop fatty liver that eventually becomes cirrhosis.',
        'Someone with obesity and type 2 diabetes might have NAFLD without knowing it.',
      ],
      patientCounselingPoints: [
        'Never share needles, razors, or toothbrushes to prevent hepatitis transmission',
        'Limit alcohol to no more than one drink per day for women, two for men',
        'Maintain a healthy weight through diet and exercise to prevent fatty liver',
        'Get vaccinated against hepatitis A and B if you are at risk',
        'Tell your doctor about all medications and supplements you take',
      ],
    },

    2: {
      level: 2,
      summary: 'Liver disorders encompass viral hepatitis (A, B, C), alcoholic liver disease, NAFLD/NASH, and cirrhosis. Each has distinct causes, progression patterns, and treatment approaches.',
      explanation: `## Viral Hepatitis

**Hepatitis A:**
- Transmission: Fecal-oral route (contaminated food/water)
- Course: Acute only, never chronic
- Severity: Usually mild, rarely fulminant
- Prevention: Vaccine, good hygiene
- Treatment: Supportive care only

**Hepatitis B:**
- Transmission: Blood, sexual contact, perinatal
- Course: Acute infection; 90% of infants become chronic, only 5% of adults
- Chronic hepatitis B can lead to cirrhosis and liver cancer
- Prevention: Vaccine (safe and effective)
- Treatment: Antivirals (tenofovir, entecavir) for chronic disease

**Hepatitis C:**
- Transmission: Blood exposure (IV drug use historically)
- Course: 75-85% become chronic
- Leading cause of liver transplantation in the US
- Now curable with direct-acting antivirals (DAAs)
- No vaccine available

**Chronic Hepatitis Complications:**
- Cirrhosis (20-30% after 20-30 years)
- Hepatocellular carcinoma (HCC)
- Liver failure requiring transplant

## Alcoholic Liver Disease

**Spectrum of Disease:**
1. **Steatosis (Fatty Liver):** Reversible with abstinence
2. **Alcoholic Hepatitis:** Inflammation, may be severe/fulminant
3. **Cirrhosis:** Irreversible, permanent scarring

**Risk Factors:**
- Quantity of alcohol (≥80g/day for >10 years increases risk)
- Female sex (more susceptible)
- Genetic factors
- Coexisting viral hepatitis

**Diagnosis:**
- Elevated AST > ALT (typically AST:ALT ratio >2:1)
- Elevated GGT
- Macrocytosis (MCV >100)
- Evidence of liver dysfunction

## NAFLD and NASH

**NAFLD (Non-Alcoholic Fatty Liver Disease):**
- Fat accumulation in liver (>5% hepatocytes)
- In the absence of significant alcohol use
- Strongly associated with:
  - Obesity (especially central adiposity)
  - Type 2 diabetes
  - Metabolic syndrome
  - Hyperlipidemia

**NASH (Non-Alcoholic Steatohepatitis):**
- NAFLD plus inflammation and hepatocyte injury
- Can progress to:
  - Fibrosis
  - Cirrhosis
  - HCC (even without cirrhosis in some cases)

**Prevalence:**
- NAFLD: 25-30% of US population
- NASH: 3-5% of US population
- Leading cause of chronic liver disease and indication for liver transplant

## Cirrhosis

**Definition:**
Diffuse hepatic fibrosis with regenerative nodules that disrupts liver architecture and function.

**Causes:**
| Etiology | Percentage |
|----------|------------|
| Alcohol | 30-40% |
| Hepatitis C | 20-25% |
| Hepatitis B | 5-10% |
| NAFLD/NASH | 10-20% (rising) |
| Autoimmune hepatitis | 5% |
| Other (PBC, PSC, hemochromatosis, etc.) | 10% |

**Complications:**
- Portal hypertension → varices, ascites, splenomegaly
- Liver failure: jaundice, coagulopathy, encephalopathy
- Hepatocellular carcinoma (HCC)
- Spontaneous bacterial peritonitis (SBP)
- Hepatorenal syndrome
- Hepatopulmonary syndrome
- Portopulmonary hypertension

**Clinical Presentation:**
- Early: Often asymptomatic
- Advanced:
  - Fatigue, weakness
  - Jaundice
  - Ascites, edema
  - GI bleeding from varices
  - Encephalopathy (confusion, sleep pattern changes)
      - Easy bruising, gynecomastia, testicular atrophy`,
      keyTerms: [
        { term: 'hepatitis', definition: 'Inflammation of the liver, viral or non-viral causes' },
        { term: 'cirrhosis', definition: 'Diffuse hepatic fibrosis with regenerative nodules' },
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease - fat accumulation without alcohol' },
        { term: 'NASH', definition: 'Non-alcoholic steatohepatitis - fatty liver with inflammation' },
        { term: 'portal hypertension', definition: 'Increased pressure in portal venous system due to liver disease' },
        { term: 'varices', definition: 'Dilated veins in esophagus, stomach, or rectum from portal HTN' },
        { term: 'hepatocellular carcinoma (HCC)', definition: 'Primary liver cancer' },
        { term: 'ascites', definition: 'Pathologic fluid accumulation in peritoneal cavity' },
        { term: 'encephalopathy', definition: 'Brain dysfunction from liver failure', pronunciation: 'en-sef-uh-LAW-puh-thee' },
      ],
      analogies: [
        'Portal hypertension is like a traffic jam - blood backs up into other vessels because the liver is blocked.',
        'Cirrhosis develops slowly like rust on a car - it accumulates over time and is hard to reverse.',
      ],
      examples: [
        'A person who used IV drugs 30 years ago might have chronic hepatitis C.',
        'Someone with obesity and diabetes may have NAFLD that progresses to NASH.',
        'A patient with cirrhosis might vomit blood from ruptured esophageal varices.',
      ],
    },

    3: {
      level: 3,
      summary: 'Liver disease encompasses diverse etiologies including viral hepatitis, alcohol-related injury, metabolic dysfunction, and autoimmune processes. Cirrhosis represents the common endpoint of chronic liver injury, characterized by fibrosis and portal hypertension.',
      explanation: `## Viral Hepatitis: Detailed Features

**Hepatitis B Natural History:**

*Acute Infection:*
- Incubation: 1-6 months
- Symptoms: Jaundice, fatigue, RUQ pain, arthralgias, rash
- Fulminant hepatitis in <1%
- 95% of adults resolve spontaneously
- 90% of infants, 30% of children <5 years progress to chronic

*Chronic Infection Phases:*
1. Immune tolerant: HBeAg+, high viral load, minimal inflammation
2. Immune active: HBeAg+/-, elevated ALT, liver damage
3. Inactive carrier: HBeAg-, anti-HBe+, low viral load
4. HBeAg-negative chronic hepatitis: Mutations, fluctuating activity

**Hepatitis C Natural History:**
- Incubation: 2-12 weeks (average 6-8 weeks)
- 15-25% spontaneously clear (especially symptomatic, females, IL-28B CC genotype)
- 75-85% become chronic
- 20-30% develop cirrhosis over 20-30 years
- HCC risk: 1-4% per year once cirrhotic

**Direct-Acting Antiviral (DAA) Therapy for HCV:**
- NS5A inhibitors: Ledipasvir, velpatasvir, pibrentasvir
- NS5B polymerase inhibitors: Sofosbuvir
- NS3/4A protease inhibitors: Glecaprevir, voxilaprevir
- Cure rates >95% with 8-12 week regimens
- Pan-genotypic options now available

## Alcoholic Liver Disease: Pathophysiology

**Mechanisms of Injury:**
- Ethanol metabolism → acetaldehyde → toxic intermediates
- CYP2E1 induction → reactive oxygen species
- Impaired mitochondrial β-oxidation → steatosis
- Inflammation from endotoxin and cytokine release
- Fibrosis from hepatic stellate cell activation

**Histologic Stages:**
1. **Steatosis:** Macrovesicular fat globules in hepatocytes
2. **Alcoholic Hepatitis:**
   - Hepatocyte ballooning
   - Mallory-Denk bodies (eosinophilic inclusions)
   - Neutrophilic infiltration
   - Pericellular fibrosis
3. **Cirrhosis:** Micronodular initially, may become mixed

**Severe Alcoholic Hepatitis:**
- Maddrey Discriminant Function (MDF) ≥32: High mortality
- Prednisolone or pentoxifylline for MDF ≥32 (with caveats)
- Lille score at day 7 to assess response

## NAFLD/NASH: Metabolic Liver Disease

**Pathophysiology (Multiple Hits):**
1. **First hit:** Insulin resistance → increased free fatty acids → hepatic steatosis
2. **Second hits:**
   - Oxidative stress and lipid peroxidation
   - Cytokine-mediated inflammation (TNF-α, IL-6)
   - Mitochondrial dysfunction
   - Endoplasmic reticulum stress
   - Gut dysbiosis and increased permeability

**Risk Factors for Progression to NASH/Fibrosis:**
- Age >50
- Hispanic ethnicity
- Type 2 diabetes
- Metabolic syndrome
- Elevated AST/ALT ratio >1
- Platelet count <200,000
- PNPLA3 polymorphism

**Diagnosis:**
- Imaging: Ultrasound (steatosis), FibroScan (stiffness)
- Serologic markers: NAFLD Fibrosis Score, Fib-4
- Liver biopsy: Gold standard for NASH diagnosis and staging

## Cirrhosis and Portal Hypertension

**Pathophysiology of Portal Hypertension:**
1. **Structural:** Fibrosis and regenerative nodules increase intrahepatic resistance
2. **Dynamic:** Sinusoidal endothelial dysfunction, vasoconstriction
3. **Splanchnic vasodilation:** Increased portal inflow
4. **Portal-systemic shunts:** Develop to bypass liver

**Hepatic Venous Pressure Gradient (HVPG):**
- Normal: 1-5 mmHg
- Portal HTN: >5 mmHg
- Clinically significant: >10 mmHg (varices, ascites)
- Severe: >12 mmHg (higher bleeding risk)

**Complications Management:**
- Variceal hemorrhage: NSBBs, EVL, TIPS
- Ascites: Sodium restriction, diuretics, paracentesis
- SBP prophylaxis: Antibiotics for high-risk patients
- Encephalopathy: Lactulose, rifaximin

**HCC Surveillance (AASLD Guidelines):**
- Ultrasound ± AFP every 6 months for:
  - All cirrhotic patients
  - Chronic HBV (Asian men >40, Asian women >50, African >20, any with family HCC)
  - Advanced fibrosis from HCV, NAFLD with risk factors

**Model for End-Stage Liver Disease (MELD):**
- 3.78 × ln(bilirubin) + 11.2 × ln(INR) + 9.57 × ln(creatinine) + 6.43
- Used for transplant prioritization
- MELD >15: Consider transplant referral`,
      keyTerms: [
        { term: 'HBeAg', definition: 'Hepatitis B e-antigen; marker of active viral replication' },
        { term: 'NS5A/NS5B/NS3', definition: 'Hepatitis C viral proteins targeted by DAA medications' },
        { term: 'Mallory-Denk bodies', definition: 'Eosinophilic inclusions in hepatocytes characteristic of alcoholic hepatitis' },
        { term: 'PNPLA3', definition: 'Gene polymorphism associated with increased NAFLD/NASH risk' },
        { term: 'HVPG', definition: 'Hepatic venous pressure gradient; measures portal pressure' },
        { term: 'EVL', definition: 'Endoscopic variceal ligation - treatment to prevent bleeding' },
        { term: 'TIPS', definition: 'Transjugular intrahepatic portosystemic shunt' },
      ],
      clinicalNotes: 'Hepatitis B: Monitor HBV DNA and ALT regularly. Pregnant women with high HBV DNA should receive tenofovir to prevent perinatal transmission. Alcoholic hepatitis: Steroids contraindicated if active infection or GI bleeding.',
    },

    4: {
      level: 4,
      summary: 'Liver disease pathogenesis involves complex interactions between genetic susceptibility, environmental triggers, and host immune responses. Fibrosis results from hepatic stellate cell activation and extracellular matrix deposition, while portal hypertension drives most cirrhosis complications.',
      explanation: `## Advanced Hepatitis B Pathogenesis

**Viral Replication Cycle:**
1. HBV enters hepatocyte via NTCP receptor
2. Relaxed circular DNA (rcDNA) delivered to nucleus
3. Converted to covalently closed circular DNA (cccDNA) - reservoir for persistence
4. Transcription → pregenomic RNA
5. Reverse transcription → new rcDNA
6. Secretion or recycling to nucleus

**cccDNA Significance:**
- Stable mini-chromosome in hepatocyte nucleus
- Very long half-life (months to years)
- Reservoir for viral persistence
- Current therapies do not eliminate cccDNA
- Cure requires eradication of cccDNA (functional cure: HBsAg loss)

**Genetic Variants:**
- Pre-core mutant: HBeAg-negative chronic hepatitis
- Basal core promoter mutant: Increased replication
- Vaccine escape mutants (s gene mutations)
- Drug resistance mutations (rtM204V for lamivudine)

**Hepatitis D:**
- Defective RNA virus requiring HBsAg for replication
- Co-infection: HBV + HDV simultaneously (usually resolves)
- Super-infection: HDV in chronic HBV carrier (severe, rapid progression)
- Treatment: Peginterferon (limited efficacy); bulevirtide (new)

## Advanced Hepatitis C Pathogenesis

**Viral Quasispecies:**
- High mutation rate due to error-prone RNA polymerase
- Multiple co-existing viral variants
- Impacts immune evasion and treatment resistance
- Interferon lambda polymorphisms affect spontaneous clearance

**Extrahepatic Manifestations:**
- Cryoglobulinemia (membranoproliferative GN)
- Porphyria cutanea tarda
- Lichen planus
- HCV-associated lymphoma
- Insulin resistance and diabetes

**Resistance-Associated Substitutions (RAS):**
- Y93H in NS5A (reduced response to ledipasvir)
- C316N in NS5B (sofosbuvir resistance - rare)

## Fibrosis Pathogenesis

**Hepatic Stellate Cell (HSC) Activation:**
- Quiescent HSCs: Store vitamin A, maintain normal ECM
- Activated HSCs (myofibroblast phenotype):
  - Proliferate rapidly
  - Secrete type I collagen (fibrogenesis)
  - Secrete tissue inhibitors of metalloproteinases (TIMPs)
  - Constrict sinusoids (increase resistance)

**Fibrogenic Pathways:**
- TGF-β: Master fibrogenic cytokine
- PDGF: Potent HSC mitogen
- Angiotensin II: Stimulates collagen production
- ROS: Oxidative stress promotes activation
- Endotoxin/LPS: TLR4-mediated inflammation

**Regression of Fibrosis:**
- Possible with removal of injury (alcohol cessation, HCV cure)
- Requires HSC apoptosis or reversion to quiescence
- MMP-mediated collagen degradation
- Advanced cirrhosis: Limited reversibility due to architectural disruption

## NAFLD to NASH Progression

**Multiple Parallel Hits Hypothesis:**

*Lipid Toxicity:*
- Free fatty acid overload exceeds β-oxidation capacity
- Lipotoxic species: diacylglycerol, ceramides, lysophosphatidylcholine
- ER stress and mitochondrial dysfunction
- Apoptosis via JNK pathway

*Inflammation:*
- Adipose tissue inflammation → increased adipokines
- TNF-α, IL-6, IL-1β from Kupffer cells
- Inflammasome activation (NLRP3)
- Recruitment of inflammatory cells

*Gut-Liver Axis:*
- Dysbiosis: Reduced Akkermansia, increased Proteobacteria
- Increased intestinal permeability
- Endotoxin (LPS) translocation via portal vein
- TLR4 activation on Kupffer cells and HSCs

*Genetic Factors:*
- PNPLA3 I148M: 3-fold increased NASH risk
- TM6SF2 E167K: Increased steatosis, decreased VLDL secretion
- MBOAT7: Membrane lipid remodeling
- GCKR: Glucokinase regulation

## Portal Hypertension: Advanced Concepts

**Sinusoidal Portal Hypertension Mechanisms:**

*Structural Component:*
- Fibrosis and nodular regeneration
- Sinusoidal capillarization (loss of endothelial fenestrations)
- Perisinusoidal fibrosis

*Dynamic Component:*
- Reduced NO production (endothelial dysfunction)
- Increased endothelin-1 (vasoconstriction)
- Increased intrahepatic vascular tone (reversible)
- Target for therapy: NSBBs reduce variceal pressure

*Splanchnic Vasodilation:*
- NO overproduction (splanchnic endothelial NO synthase upregulation)
- Carbon monoxide, glucagon, prostacyclin
- Increased portal inflow
- Contributes to effective hypovolemia

**HVPG Measurements:**
- Normal: 1-5 mmHg
- Preclinical portal HTN: 5-9 mmHg
- Clinically significant: >10 mmHg
- HVPG reduction to <12 mmHg markedly reduces variceal bleeding risk
- HVPG reduction >20% from baseline predicts survival benefit

**Portosystemic Collaterals:**
- Left gastric vein → esophageal/gastric varices
- Inferior mesenteric vein → rectal varices
- Paraumbilical veins → caput medusae
- Splenorenal and gastrorenal shunts`,
      keyTerms: [
        { term: 'cccDNA', definition: 'Covalently closed circular DNA - HBV reservoir for persistence' },
        { term: 'NTCP receptor', definition: 'Sodium taurocholate cotransporting polypeptide; HBV entry receptor' },
        { term: 'quasispecies', definition: 'Swarm of closely related viral variants within a host' },
        { term: 'TIMPs', definition: 'Tissue inhibitors of metalloproteinases; prevent fibrosis regression' },
        { term: 'caput medusae', definition: 'Periumbilical collateral veins in portal hypertension' },
        { term: 'NSBBs', definition: 'Non-selective beta-blockers (propranolol, nadolol) for varices' },
        { term: 'sinusoidal capillarization', definition: 'Loss of endothelial fenestrations increasing vascular resistance' },
      ],
      clinicalNotes: 'HBsAg loss (functional cure) achievable in <10% with finite duration therapy. HCV reinfection possible with risk behaviors. Alcohol abstinence can reverse early fibrosis but not advanced cirrhosis.',
    },

    5: {
      level: 5,
      summary: 'Contemporary management of liver disease incorporates antiviral therapy for hepatitis B and C, lifestyle and pharmacologic interventions for NAFLD/NASH, and comprehensive management of cirrhosis complications guided by evidence-based guidelines.',
      explanation: `## Hepatitis B Management (AASLD 2018)

**Treatment Indications:**
- ALT >2× ULN (or significant histologic disease)
- HBV DNA >20,000 IU/mL (HBeAg+) or >2,000 IU/mL (HBeAg-)
- Evidence of cirrhosis or immune active phase

**First-Line Agents:**
- Tenofovir alafenamide (TAF) 25 mg daily
- Tenofovir disoproxil fumarate (TDF) 300 mg daily
- Entecavir 0.5 mg daily (0.5 mg if lamivudine-naïve, 1 mg if experienced)

**Monitoring:**
- HBV DNA and ALT every 3-6 months during treatment
- Renal function and bone density (TDF) or lipids (TAF)
- HCC surveillance per cirrhosis status

**Special Situations:**
- Pregnancy: TDF in third trimester if viral load >200,000 IU/mL
- Chemotherapy/immunosuppression: Prophylaxis regardless of HBsAg status
- Coinfection: Treat HIV concurrently (avoid monotherapy)

**End Points:**
- Preferred: HBsAg loss (functional cure) - uncommon
- Acceptable: HBV DNA <20 IU/mL, ALT normalization
- HBeAg seroconversion with durable response

## Hepatitis C Management (AASLD-IDSA 2020)

**Who to Treat:**
- All patients with chronic HCV infection except those with short life expectancy
- Post-exposure prophylaxis NOT recommended

**Regimens (Pan-Genotypic):**
- Sofosbuvir/velpatasvir (12 weeks)
- Glecaprevir/pibrentasvir (8 weeks if non-cirrhotic, 12 weeks if cirrhotic)
- Sofosbuvir/velpatasvir/voxilaprevir (salvage for DAA failure)

**Special Populations:**
- Decompensated cirrhosis: Sofosbuvir/velpatasvir for 12 weeks
- CKD stage 4-5: Glecaprevir/pibrentasvir (avoid sofosbuvir)
- HCV-HIV coinfection: Same regimens, watch for drug interactions
- Pregnancy: Deferr until postpartum (limited safety data)

**Post-Treatment:**
- SVR12 (undetectable RNA 12 weeks post-treatment) = cure
- No need for further HCV monitoring
- Continue HCC surveillance if advanced fibrosis/cirrhosis

## NAFLD/NASH Management

**Lifestyle (First-Line):**
- Weight loss of 7-10% improves NASH
- Mediterranean diet (high MUFA, fiber, omega-3)
- Limit fructose, sugary beverages, refined carbs
- Exercise 150-300 minutes/week
- Avoid alcohol

**Pharmacologic Options:**

*For NASH with Fibrosis:*
- Pioglitazone (improves NASH, not FDA-approved): weight gain, fluid retention
- Vitamin E (800 IU daily) for non-diabetic NASH
- GLP-1 agonists (semaglutide): promising, not yet standard
- SGLT2 inhibitors: may reduce liver fat, limited data
- Obeticholic acid (OCA): Phase 3 data mixed, not approved
- Resmetirom (THR-β agonist): FDA-approved for NASH (2023)

*Future Directions:*
- Combination therapies targeting multiple pathways
- FGF21 analogs
- CCR2/CCR5 inhibitors
- ASK1 inhibitors

**Bariatric Surgery:**
- Improves all features of metabolic syndrome
- Improves NASH and regression of fibrosis in most
- Consider for BMI ≥35 with NAFLD

## Cirrhosis Complications Management

**Variceal Hemorrhage:**

*Primary Prophylaxis:*
- NSBBs (propranolol, nadolol) titrated to HR 55-60 or SBP reduction 25%
- EVL if contraindication to NSBBs or intolerance
- Carvedilol may be more effective (additive α-blockade)

*Acute Bleed:*
- Vasoactive drug: Octreotide, terlipressin (US availability 2023)
- Antibiotic prophylaxis: Ceftriaxone 1g daily x 5-7 days
- Endoscopy within 12 hours: EVL preferred over sclerotherapy
- PPI to improve visualization
- TIPS if pharmacologic + endoscopic therapy fails

*Secondary Prophylaxis:*
- Combine NSBB + EVL
- TIPS for refractory bleeding despite above

**Ascites Management:**

*Initial:*
- Sodium restriction <2 g/day
- Spironolactone 100-400 mg/day ± furosemide 40-160 mg/day
- Goal: Weight loss 0.5 kg/day (edema) or 1 kg/day (ascites)

*Refractory Ascites:*
- Large volume paracentesis with albumin 6-8 g per liter removed
- Consider TIPS (caution in older patients, hepatic encephalopathy risk)

**Spontaneous Bacterial Peritonitis (SBP):**
- Diagnostic: Ascitic fluid PMN >250 cells/mm3
- Treatment: Cefotaxime 2g q8h or ceftriaxone 2g daily
- Albumin 1.5 g/kg on day 1, 1 g/kg on day 3 (creatinine >1 mg, bilirubin >4 mg)
- Secondary prophylaxis: Norfloxacin or fluoroquinolone daily

**Hepatic Encephalopathy:**
- Precipitants: Infection, GI bleed, constipation, medications, dehydration
- Lactulose: Titrate to 2-3 soft stools daily
- Rifaximin 550 mg BID (add if lactulose alone insufficient)
- Avoid sedatives, CNS depressants

**HCC Surveillance:**
- Ultrasound ± AFP every 6 months
- If lesion >1 cm: Multiphasic CT or MRI
- Treatment per BCLC staging (resection, transplant, ablation, TACE, systemic)

**Liver Transplantation:**
- MELD-Na for allocation
- Exceptions: HCC, hepatopulmonary syndrome, cholangiocarcinoma protocol
- Contraindications: Active alcohol/substance use, uncontrolled sepsis, extrahepatic malignancy`,
      keyTerms: [
        { term: 'SVR12', definition: 'Sustained virologic response 12 weeks post-treatment; HCV cure' },
        { term: 'EVL', definition: 'Endoscopic variceal ligation - banding of varices' },
        { term: 'NSBB', definition: 'Non-selective beta-blocker for portal hypertension' },
        { term: 'MELD-Na', definition: 'Model for End-Stage Liver Disease with sodium; transplant priority score' },
        { term: 'BCLC', definition: 'Barcelona Clinic Liver Cancer staging system' },
        { term: 'TACE', definition: 'Transarterial chemoembolization for HCC' },
        { term: 'THR-β agonist', definition: 'Thyroid hormone receptor-beta agonist; treats NASH (resmetirom)' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Hepatitis B: Lifelong treatment usually required; do NOT stop due to risk of reactivation and severe hepatitis
2. Hepatitis C: Cure achievable in >95%; screen all baby boomers (1945-1965) and high-risk groups
3. HCV: Check for reinfection if ongoing risk behaviors
4. NAFLD: ALT may be normal; up to 30% of NASH patients have normal enzymes
5. NAFLD: Exclude other causes (viral hepatitis, hemochromatosis, autoimmune) before diagnosis
6. Ascites: Maximum diuretic doses typically spironolactone 400 mg + furosemide 160 mg
7. SBP: Always rule out before starting diuretics for new ascites
8. TIPS: Better than serial paracentesis but higher encephalopathy risk
9. Variceal bleed: Octreotide/terlipressin + antibiotics + EVL reduces mortality to <20%
10. Liver transplant: Refer early when MELD >15 or first decompensation event
11. Alcohol-related liver disease: Liver transplant consideration after 6 months abstinence (selected centers)
12. HCC: Patients with cirrhosis qualify for transplant with single tumor ≤5 cm or ≤3 tumors ≤3 cm`,
    },
  },

  media: [
    {
      id: 'viral-hepatitis-comparison',
      type: 'diagram',
      filename: 'hepatitis-comparison.svg',
      title: 'Viral Hepatitis Comparison',
      description: 'Comparison of hepatitis A, B, and C features',
    },
    {
      id: 'nafld-progression',
      type: 'diagram',
      filename: 'nafld-nash-progression.svg',
      title: 'NAFLD to NASH Progression',
      description: 'Progression from fatty liver to NASH and cirrhosis',
    },
  ],

  citations: [
    {
      id: 'aasld-hbv-2018',
      type: 'article',
      title: 'AASLD Guidelines for Treatment of Chronic Hepatitis B',
      authors: ['Terrault NA', 'Lok ASF', 'McMahon BJ'],
      source: 'Hepatology 2018',
    },
    {
      id: 'aasld-idsa-hcv-2020',
      type: 'article',
      title: 'AASLD-IDSA Recommendations for Testing, Managing, and Treating Hepatitis C',
      authors: ['AASLD-IDSA'],
      source: 'HCV Guidelines Website 2020',
    },
    {
      id: 'aasld-nafld-2018',
      type: 'article',
      title: 'AASLD Practice Guidance: Diagnosis and Management of NAFLD',
      authors: ['Chalasani N', 'Younossi Z', 'Lavine JE'],
      source: 'Hepatology 2018',
    },
  ],

  crossReferences: [
    { targetId: 'condition-alcohol-use-disorder', targetType: 'condition', relationship: 'related', label: 'Alcohol Use Disorder' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
    { targetId: 'procedure-paracentesis', targetType: 'topic', relationship: 'see-also', label: 'Paracentesis' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hepatic'],
    topics: ['gastroenterology', 'hepatology', 'infectious disease', 'pathology'],
    keywords: ['hepatitis', 'cirrhosis', 'NAFLD', 'NASH', 'ascites', 'liver failure', 'MELD'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
