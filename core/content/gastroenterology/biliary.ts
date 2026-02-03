/**
 * Biliary Disorders - Gallstones, Cholecystitis, Cholangitis
 *
 * Covers cholelithiasis, acute and chronic cholecystitis, choledocholithiasis,
 * cholangitis, and gallbladder pathology.
 */

import { EducationalContent } from '../types';

export const biliaryContent: EducationalContent = {
  id: 'gi-biliary-disorders',
  type: 'condition',
  name: 'Biliary Disorders',
  alternateNames: [
    'Cholelithiasis',
    'Gallstones',
    'Cholecystitis',
    'Choledocholithiasis',
    'Cholangitis',
    'Biliary Colic',
    'Gallbladder Disease',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The gallbladder stores bile made by the liver. Gallstones are hard deposits that can form in the gallbladder, causing pain and sometimes serious infections.',
      explanation: `**What is the Gallbladder?**

The gallbladder is a small, pear-shaped organ under your liver on the right side of your belly. It stores bile, a fluid that helps digest fats. When you eat fatty foods, the gallbladder squeezes bile into your small intestine.

**Common Gallbladder Problems:**

1. **Gallstones (Cholelithiasis)**
   - Hard deposits that form inside the gallbladder
   - Made of cholesterol or bile pigments
   - Can be as small as a grain of sand or as large as a golf ball
   - Many people have gallstones without knowing it

2. **Biliary Colic**
   - Sudden pain when a gallstone blocks the bile duct
   - Usually in the upper right part of the belly
   - Pain may spread to the right shoulder or back
   - Often happens after eating a fatty meal
   - Lasts from 30 minutes to several hours

3. **Acute Cholecystitis**
   - Inflammation of the gallbladder
   - Usually caused by a gallstone blocking the cystic duct
   - Causes constant pain (not off-and-on)
   - May cause fever, nausea, and vomiting
   - Requires hospital treatment

4. **Cholangitis**
   - Infection of the bile ducts
   - Serious condition that can be life-threatening
   - Caused by bile duct blockage
   - Causes fever, jaundice (yellow skin), and belly pain
   - Emergency medical treatment needed

5. **Choledocholithiasis**
   - Gallstones that have moved into the common bile duct
   - Can block bile flow from liver to intestine
   - May cause jaundice and pancreatitis
   - May need special procedure to remove

**Who Gets Gallstones?**
- More common in women
- More common with age
- Being overweight
- Pregnancy
- Rapid weight loss
- Family history of gallstones

**Symptoms of Gallbladder Problems:**
- Pain in upper right belly or center of belly
- Pain that spreads to the right shoulder or back
- Nausea and vomiting
- Fever (if infection)
- Yellowing of skin and eyes (jaundice)
- Dark urine, pale stools

**Diagnosis:**
- Ultrasound (best test for seeing gallstones)
- Blood tests
- CT scan or MRI for complex cases

**Treatment:**
- Gallbladder removal surgery (cholecystectomy) for symptomatic stones
- No treatment needed for silent gallstones
- Antibiotics for infection
- Procedures to remove stones from bile ducts`,
      keyTerms: [
        { term: 'gallbladder', definition: 'Small organ that stores bile for digestion' },
        { term: 'bile', definition: 'Fluid made by liver that helps digest fats' },
        { term: 'gallstones', definition: 'Hard deposits that form in the gallbladder' },
        { term: 'cholecystitis', definition: 'Inflammation of the gallbladder', pronunciation: 'koh-lee-sis-TIE-tis' },
        { term: 'jaundice', definition: 'Yellowing of the skin and eyes', pronunciation: 'JAWN-dis' },
        { term: 'biliary colic', definition: 'Pain from temporary bile duct blockage by a gallstone' },
      ],
      analogies: [
        'The gallbladder is like a water storage tank that releases water when needed.',
        'Gallstones are like rocks that form in a pipe, blocking the flow of bile.',
        'Biliary colic is like a kink in a hose - bile cannot get through until the stone moves.',
      ],
      examples: [
        'A 40-year-old overweight woman who has pain after eating fried foods might have gallstones.',
        'Someone with fever, right belly pain, and jaundice might have cholangitis.',
        'A person who has sudden pain after a large, fatty meal might be having biliary colic.',
      ],
      patientCounselingPoints: [
        'Eat a healthy diet with moderate fat intake',
        'Maintain a healthy weight through diet and exercise',
        'Avoid rapid weight loss diets',
        'Report any new belly pain, fever, or yellowing of skin/eyes',
        'Follow up promptly if symptoms worsen',
      ],
    },

    2: {
      level: 2,
      summary: 'Biliary disorders include cholelithiasis (gallstones), cholecystitis (gallbladder inflammation), choledocholithiasis (bile duct stones), and cholangitis (bile duct infection). These conditions are interrelated and share risk factors.',
      explanation: `## Cholelithiasis (Gallstones)

**Types of Gallstones:**
1. **Cholesterol Stones:** Most common (80% in US)
   - Yellow-green color
   - Primarily cholesterol
   - May be single or multiple

2. **Pigment Stones:** Less common (20% in US)
   - Dark brown or black
   - Composed of calcium bilirubinate
   - Associated with hemolysis, cirrhosis

**Risk Factors (5 F's):**
- **Fat:** Obesity increases cholesterol secretion
- **Female:** Estrogen increases cholesterol saturation
- **Forty:** Incidence increases with age
- **Fertile:** Pregnancy increases risk
- **Fair:** More common in Native Americans, Hispanics, less in African Americans

**Additional Risk Factors:**
- Rapid weight loss (>1.5 kg/week)
- Total parenteral nutrition (TPN)
- Clofibrate, octreotide use
- Diabetes mellitus
- Family history

**Clinical Presentation:**
- **Silent:** 80% asymptomatic
- **Biliary colic:**
  - Steady, severe RUQ or epigastric pain
  - Radiates to right scapula or shoulder
  - Precipitated by fatty meals
  - Lasts 30 minutes to several hours
  - Resolves spontaneously

## Acute Cholecystitis

**Definition:**
Acute inflammation of the gallbladder, usually from cystic duct obstruction.

**Pathophysiology:**
- Gallstone obstructs cystic duct
- Gallbladder distension
- Inflammation from chemical irritation and ischemia
- Bacterial infection (secondary, often E. coli, Klebsiella, Enterococcus)

**Clinical Features:**
- **RUQ pain:** Constant (not colicky), may radiate
- **Fever:** Usually low-grade
- **Nausea and vomiting**
- **Murphy's sign positive:** Arrest of inspiration with RUQ palpation

**Diagnosis:**
- **Ultrasound (first-line):**
  - Gallstones present
  - Gallbladder wall thickening >3 mm
  - Pericholecystic fluid
  - Sonographic Murphy's sign
- **HIDA scan:** If ultrasound equivocal
  - Non-filling of gallbladder suggests cystic duct obstruction

**Grading Severity:**
- **Mild:** No organ dysfunction, low risk
- **Moderate:** Significant local inflammation, comorbidities
- **Severe:** Organ dysfunction, gangrene, perforation

## Choledocholithiasis

**Definition:**
Gallstone(s) in the common bile duct (CBD).

**Sources:**
- Primary: Formed in CBD (brown pigment stones)
- Secondary: Migrated from gallbladder (cholesterol stones)

**Clinical Manifestations:**
- May be asymptomatic
- Biliary colic
- Obstructive jaundice
- Cholangitis (if infection)
- Acute pancreatitis (gallstone pancreatitis)

**Diagnosis:**
- **Laboratory:**
  - Elevated alkaline phosphatase, GGT
  - Elevated bilirubin (conjugated/direct)
  - Mildly elevated transaminases
- **Imaging:**
  - Ultrasound: Dilated bile ducts (>6 mm)
  - MRCP: Gold standard for CBD stones
  - ERCP: Diagnostic and therapeutic
  - EUS: Alternative to MRCP

## Cholangitis

**Definition:**
Infection of the biliary tract, usually from obstruction.

**Charcot Triad (Classic Triad):**
1. Fever
2. RUQ pain
3. Jaundice

**Reynolds Pentad (Severe Cholangitis):**
1. Charcot triad +
2. Altered mental status
3. Hypotension

**Pathophysiology:**
- Biliary obstruction → bacterial overgrowth
- Increased intraductal pressure
- Bacteria and endotoxins translocate to bloodstream
- Sepsis and potential shock

**Diagnosis:**
- Clinical suspicion + Charcot triad
- Blood cultures (often positive)
- Cholangiography (MRCP, ERCP)

**Treatment:**
- **Urgent:** Antibiotics (ciprofloxacin, ceftriaxone, or piperacillin-tazobactam)
- **Definitive:** Biliary decompression (ERCP with sphincterotomy, PTBD, or surgery)

## Acalculous Cholecystitis

**Definition:**
Gallbladder inflammation without stones, typically in critically ill patients.

**Risk Factors:**
- Major trauma, burns, surgery
- Sepsis, shock
- Prolonged fasting/TPN
- Vasculitis

**Diagnosis and Treatment:**
- High index of suspicion
- CT or ultrasound
- Higher risk of gangrene/perforation
- Cholecystectomy or cholecystostomy tube`,
      keyTerms: [
        { term: 'cholelithiasis', definition: 'Presence of gallstones in the gallbladder' },
        { term: 'cholecystitis', definition: 'Inflammation of the gallbladder' },
        { term: 'choledocholithiasis', definition: 'Gallstones in the common bile duct' },
        { term: 'cholangitis', definition: 'Infection of the bile ducts' },
        { term: 'Murphys sign', definition: 'Inspiratory arrest during RUQ palpation; suggests cholecystitis' },
        { term: 'Charcot triad', definition: 'Fever, RUQ pain, jaundice - classic triad of cholangitis' },
        { term: 'Reynolds pentad', definition: 'Charcot triad + mental status changes + hypotension; severe cholangitis' },
        { term: 'MRCP', definition: 'MR cholangiopancreatography - imaging of bile ducts' },
        { term: 'ERCP', definition: 'Endoscopic retrograde cholangiopancreatography - procedure to treat bile duct problems' },
        { term: 'acalculous', definition: 'Without stones (e.g., acalculous cholecystitis)' },
      ],
      analogies: [
        'The cystic duct is like a pipe; when blocked, pressure builds up behind it.',
        'Cholangitis is like a clogged drain that backs up and becomes infected.',
      ],
      examples: [
        'A 45-year-old woman with RUQ pain after eating, fever, and positive Murphy sign has acute cholecystitis.',
        'A patient with fever, jaundice, and RUQ pain (Charcot triad) likely has cholangitis.',
        'Someone with elevated alkaline phosphatase and dilated bile ducts on ultrasound may have choledocholithiasis.',
      ],
    },

    3: {
      level: 3,
      summary: 'Biliary disease encompasses a spectrum from asymptomatic gallstones to life-threatening cholangitis. Cholesterol stones form from bile supersaturation, while pigment stones result from hemolysis or cirrhosis. Gallstone complications include cholecystitis, choledocholithiasis, and gallstone pancreatitis.',
      explanation: `## Gallstone Formation Pathophysiology

**Cholesterol Gallstones:**

*Bile Composition:*
- Cholesterol (solubilized by bile salts and phospholipids)
- Bile salts
- Phospholipids (lecithin)
- Bilirubin

*Pathogenesis (3 Defects):*
1. **Bile supersaturation:**
   - Excess cholesterol secretion
   - Relative deficiency of bile salts
   - Cholesterol: Phospholipid ratio increases
   - Also influenced by estrogen, obesity, rapid weight loss

2. **Gallbladder stasis:**
   - Incomplete emptying
   - Prolonged residence time
   - Pregnancy, TPN, fasting

3. **Nucleation:**
   - Mucin glycoproteins promote crystal formation
   - Calcium salts act as nidus
   - Inflammation accelerates process

*Stages:*
1. Supersaturated bile
2. Cholesterol crystal formation
3. Stone growth (aggregation)
4. Stone migration and complications

**Pigment Gallstones:**

*Black Pigment Stones:*
- Composition: Calcium bilirubinate polymer, calcium phosphate
- Settings:
  - Chronic hemolysis (sickle cell, hereditary spherocytosis)
  - Cirrhosis
  - Gilbert syndrome (controversial)
- Radiopaque on X-ray

*Brown Pigment Stones:*
- Composition: Calcium bilirubinate + fatty acids
- Associated with bacterial infection (β-glucuronidase)
- Biliary stasis/stricture
- Common in Asia
- Form primarily in bile ducts

**Epidemiology:**
- Overall prevalence: 10-15% in US adults
- Higher in women (2:1 ratio)
- Increases with age (50% at age 70)
- Ethnic variation: Native American (80%), Mexican American, Northern European, African American (low)

## Acute Cholecystitis Pathophysiology

**Mechanisms:**
1. **Mechanical obstruction:** Cystic duct blocked by stone
2. **Chemical inflammation:** Lysolecithin (from bile phospholipids) is toxic
3. **Ischemia:** Increased intraluminal pressure → mural ischemia
4. **Bacterial overgrowth:** Secondary (50-70% positive cultures)

**Bacterial Pathogens:**
- E. coli (most common)
- Klebsiella
- Enterococcus
- Enterobacter
- Bacteroides (anaerobes)

**Complications:**
- Gangrenous cholecystitis (10-15%)
- Gallbladder perforation (1-2%)
- Pericholecystic abscess
- Biliary-enteric fistula
- Gallstone ileus (bowel obstruction)

**Tokyo Guidelines 2018 (Diagnostic Criteria):**

*Must have ONE local sign of inflammation:*
- Murphy sign
- RUQ mass/pain/tenderness
- Plus ONE systemic sign:
- Fever
- Elevated inflammatory markers (WBC, CRP)
- Plus imaging confirmation

## Choledocholithiasis Management

**Risk Assessment for CBD Stones (ASGE Criteria):**

*Strong predictors:*
- Total bilirubin >4 mg/dL
- CBD stone on ultrasound
- Clinical cholangitis

*Moderate predictors:*
- Total bilirubin 1.8-4 mg/dL
- Dilated CBD (>6 mm) on ultrasound
- Age >55
- Clinical gallstone pancreatitis

*Very strong predictors (mandatory ERCP):*
- Choledocholithiasis on imaging
- Cholangitis
- Bilirubin >4 mg/dL with dilated CBD

**Management Options:**
- ERCP with sphincterotomy and stone extraction (gold standard)
- Intraoperative cholangiography with laparoscopic CBD exploration
- Percutaneous transhepatic cholangiography (PTC) if ERCP inaccessible
- Postoperative ERCP if stones found incidentally

## Cholangitis Severity and Management

**Grading (Tokyo Guidelines 2013):**

*Grade I (Mild):*
- Cholangitis responsive to medical management
- No organ dysfunction

*Grade II (Moderate):*
- Abnormal WBC, high fever, high bilirubin
- No organ dysfunction
- Responds to initial treatment

*Grade III (Severe):*
- Organ dysfunction present
- CV: Hypotension requiring vasopressors
- CNS: Mental status changes
- Renal: Oliguria, creatinine increase
- Hepatic: INR >1.5
- Hematologic: Platelets <100,000

**Management by Grade:**
- Grade I: Elective biliary drainage
- Grade II: Urgent/early biliary drainage
- Grade III: Emergent biliary drainage (within 24 hours)

**Biliary Drainage Options:**
- ERCP with sphincterotomy and stenting (preferred)
- PTCD (percutaneous transhepatic cholangial drainage)
- Surgical drainage (rare, high mortality)

**Antibiotic Selection:**
- Target gram-negative enterics and enterococci
- Ceftriaxone, ciprofloxacin, or piperacillin-tazobactam
- Add vancomycin if MRSA risk
- Add metronidazole if anaerobic concern
- Continue for 5-7 days after drainage`,
      keyTerms: [
        { term: 'lysolecithin', definition: 'Toxic breakdown product of lecithin that damages gallbladder mucosa' },
        { term: 'supersaturation', definition: 'Excess cholesterol relative to bile salts and phospholipids' },
        { term: 'nucleation', definition: 'Formation of cholesterol crystals; first step in stone formation' },
        { term: 'ASGE criteria', definition: 'American Society for Gastrointestinal Endoscopy CBD stone risk assessment' },
        { term: 'Tokyo Guidelines', definition: 'International consensus for cholecystitis and cholangitis diagnosis and management' },
        { term: 'PTCD', definition: 'Percutaneous transhepatic cholangial drainage' },
        { term: 'sphincterotomy', definition: 'Cutting the biliary sphincter during ERCP to access bile duct' },
      ],
      clinicalNotes: 'Silent gallstones: No cholecystectomy needed. Incidental stones found during other surgery: Leave unless symptomatic. Diabetes mellitus: Consider cholecystectomy for asymptomatic stones due to higher complication risk.',
    },

    4: {
      level: 4,
      summary: 'Gallstone pathogenesis involves complex interactions between genetic predisposition, metabolic factors, and gallbladder motility. Biliary complications can progress rapidly to life-threatening conditions requiring prompt recognition and intervention.',
      explanation: `## Advanced Gallstone Pathogenesis

**Genetic Factors:**
- ABCG8 (sterolin) mutations: Increased cholesterol secretion
- ABCB4 (MDR3) mutations: Reduced phospholipid secretion
- CYP7A1 polymorphisms: Altered cholesterol metabolism
- APOE4: Increased cholesterol saturation

**Nuclear Receptors and Bile Homeostasis:**
- FXR (farnesoid X receptor): Bile acid sensor
  - Activation → decreased bile acid synthesis
  - Reduced cholesterol secretion
- PXR, CAR: Xenobiotic receptors affecting bile composition
- Pregnane X receptor: Induced by certain drugs

**Gallbladder Motility:**
- CCK-1 receptor mediated contraction
- Impaired in obesity, pregnancy, TPN
- Smooth muscle dysfunction
- Diabetic gastroparesis association

**Intestinal Factors:**
- Reduced enterohepatic circulation efficiency
- Altered bile acid pool composition
- Increased deoxycholic acid (promotes cholesterol secretion)
- Gut microbiome influences bile acid metabolism

**Microbiome and Gallstones:**
- Bacterial DNA present in cholesterol stones
- Biofilms on gallstones
- Chronic inflammation from bacterial antigens
- Potential role of Helicobacter pylori

## Acalculous Cholecystitis: Detailed

**Pathogenesis:**
- Ischemia-reperfusion injury primary mechanism
- Vasoconstriction from shock, vasopressors
- Hyperviscosity and microvascular thrombosis
- Bile stasis from fasting/TPN
- Functional obstruction at cystic duct
- Secondary bacterial infection common

**Risk Stratification:**
- Burns >30% BSA
- Major trauma (Injury Severity Score >9)
- Prolonged ICU stay
- Sepsis, shock
- Mechanical ventilation
- Total parenteral nutrition

**Diagnosis Challenges:**
- Clinical findings unreliable in sedated patient
- Fever may be attributed to other sources
- Ultrasound sensitivity reduced (70% vs. 90% for calculous)
- CT may be more accurate in critically ill
- HIDA scan not practical in ICU

**Treatment Options:**
- Cholecystectomy: Definitive but high risk in unstable
- Percutaneous cholecystostomy tube:
  - Bridge to surgery
  - Definitive in very high risk
- High failure rate if gallbladder necrotic

## Gallbladder Cancer

**Risk Factors:**
- Chronic cholelithiasis (80% have gallstones)
- Porcelain gallbladder (calcified wall)
- Gallbladder polyps >1 cm
- Primary sclerosing cholangitis
- Anomalous pancreaticobiliary duct junction
- Ethnic: Native American, Chilean, Indian

**Porcelain Gallbladder:**
- Calcification of gallbladder wall
- Blueberry muffin pattern on imaging
- Historical 25% cancer risk (modern data suggests 6%)
- Strong indication for cholecystectomy

**Gallbladder Polyps:**
- Cholesterol polyps (benign, 60-70%)
- Adenomas (premalignant)
- Size matters: <5 mm benign, >1 cm significant cancer risk
- Cholecystectomy recommended for polyps >1 cm

## Mirizzi Syndrome

**Definition:**
Obstructive jaundice from impacted cystic duct stone compressing common hepatic duct.

**Pathophysiology:**
- Large stone impacted in Hartmann pouch
- External compression of CHD
- Inflammation causes fistula to CBD in severe cases

**Classification:**
- Type I: External compression only
- Type II: Cholecystobiliary fistula <1/3 CBD circumference
- Type III: Fistula 1/3-2/3 CBD
- Type IV: Fistula >2/3 CBD with complete destruction

**Management:**
- Surgical; cholecystectomy possible
- May require biliary reconstruction (Roux-en-Y hepaticojejunostomy)
- High risk of bile duct injury

## Biliary Strictures

**Benign Causes:**
- Post-cholecystectomy (iatrogenic injury)
- Chronic pancreatitis
- Primary sclerosing cholangitis
- IgG4-related disease
- Radiation, ischemia

**Malignant Causes:**
- Pancreatic cancer (most common)
- Cholangiocarcinoma
- Ampullary cancer
- Gallbladder cancer
- Lymphadenopathy

**Evaluation:**
- MRCP: First-line imaging
- ERCP with cytology/brushings
- Intraluminal cholangioscopy (SpyGlass)
- Fluorescence in situ hybridization (FISH) for malignancy

**Differentiation:**
- Benign: Tapered stricture, upstream dilation <10 mm
- Malignant: Abrupt, shouldered stricture, upstream dilation >13 mm
- CA 19-9: Limited utility (elevated in both)

## Gallstone Ileus

**Definition:**
Mechanical bowel obstruction from gallstone eroding into bowel lumen.

**Pathophysiology:**
- Cholecystoenteric fistula formation
- Large stone (>2.5 cm usually)
- Impacts at terminal ileum (narrowest lumen)
- Bouveret syndrome if stone at duodenum

**Clinical Presentation:**
- SBO symptoms
- History of biliary symptoms in 50%
- Pneumobilia on CT (air in biliary tree)

**Management:**
- Initial: Bowel rest, possible surgical exploration
- Enterolithotomy (remove stone)
- Interval cholecystectomy vs. fistula repair controversial`,
      keyTerms: [
        { term: 'FXR receptor', definition: 'Farnesoid X receptor; bile acid sensor regulating bile composition' },
        { term: 'porcelain gallbladder', definition: 'Calcified gallbladder wall; increased cancer risk' },
        { term: 'Mirizzi syndrome', definition: 'Cystic duct stone compressing common hepatic duct' },
        { term: 'Bouveret syndrome', definition: 'Gallstone causing gastric outlet obstruction' },
        { term: 'cholangioscopy', definition: 'Direct visualization of bile ducts during ERCP (SpyGlass)' },
        { term: 'FISH', definition: 'Fluorescence in situ hybridization; detects malignancy in biliary brushings' },
        { term: 'Hartmann pouch', definition: 'Outpouching of gallbladder infundibulum near cystic duct' },
      ],
      clinicalNotes: 'Gallbladder cancer: Poor prognosis, often incidentally found at cholecystectomy. Porcelain gallbladder: Operate even if asymptomatic. Bile duct injury: Most common complication of cholecystectomy (0.3-0.5%).',
    },

    5: {
      level: 5,
      summary: 'Management of biliary disease requires risk stratification, appropriate imaging, and timely intervention. Guidelines from ACG and Tokyo Consensus provide evidence-based approaches to cholecystitis, choledocholithiasis, and cholangitis.',
      explanation: `## Cholelithiasis Management Guidelines

**Asymptomatic Gallstones:**

*ACG 2022 Guidelines:*
- Expectant management (no surgery) for:
  - True asymptomatic stones
  - Expectant management for most
  - Exceptions:
    - Porcelain gallbladder (strong recommendation)
    - Very large stones (>3 cm)
    - Incidentally found during weight loss surgery
    - Native American populations with high cancer risk
    - Immunosuppressed/transplant candidates
- Observation preferred even in diabetics (change from older teaching)

**Symptomatic Gallstones:**
- Laparoscopic cholecystectomy (standard of care)
- Preoperative ERCP if high suspicion of CBD stones
- Same-admission cholecystectomy for mild acute cholecystitis
- Medical therapy (ursodeoxycholic acid) for poor surgical candidates
  - Limited efficacy (small stones only)
  - Long duration required (months to years)

## Acute Cholecystitis Management (Tokyo 2018)

**Timing of Cholecystectomy:**
- **Mild (Grade I):**
  - Early laparoscopic cholecystectomy (within 7 days, ideally 24-72 hours)
  - Outpatient surgery possible in some centers
- **Moderate (Grade II):**
  - Early cholecystectomy after medical optimization
  - Delay if significant comorbidities
  - Consider cholecystostomy tube if high surgical risk
- **Severe (Grade III):**
  - Urgent medical management and organ support
  - Cholecystectomy delayed until patient stabilized
  - Cholecystostomy tube as bridge
  - ICU management initially

**Antibiotic Duration:**
- Uncomplicated cholecystitis: Single preoperative dose or 24 hours post-op
- Complicated (gangrenous, perforation): 4-7 days
- Post-cholecystectomy: No antibiotics needed if no complications

**Surgical Approach:**
- Laparoscopic cholecystectomy (gold standard)
- Intraoperative cholangiogram:
  - Routine vs. selective (surgeon preference)
  - Mandatory if CBD stones suspected
- Conversion to open: ~5-10%
- Subtotal cholecystectomy for difficult cases

**Difficult Gallbladder:**
- Severe inflammation, fibrosis
- Anatomic distortion
- Techniques:
  - Fundus-first (retrograde) dissection
  - Subtotal cholecystomy with remnant closure
  - Bail out to cholecystostomy tube

## Choledocholithiasis Management (ASGE 2019)

**Preoperative Risk Stratification:**
- Strong predictors (mandatory ERCP):
  - CBD stone on imaging
  - Clinical cholangitis
  - Bilirubin >4 mg/dL

- Moderate predictors (consider ERCP/MRCP/EUS):
  - Dilated CBD (>6 mm)
  - Age >55
  - Abnormal liver tests (AST, ALT, ALP)
  - Clinical gallstone pancreatitis

**Management Strategy:**

*Low Risk:*
- Laparoscopic cholecystectomy alone
- Intraoperative cholangiogram
- Postoperative ERCP if needed

*Intermediate Risk:*
- Preoperative MRCP or EUS
- ERCP if stones confirmed

*High Risk:*
- Preoperative ERCP with clearance
- Laparoscopic cholecystectomy after CBD cleared

**ERCP Techniques:**
- Biliary sphincterotomy
- Balloon/basket extraction
- Mechanical lithotripsy for large stones
- Cholangioscopy with laser lithotripsy for difficult stones
- Biliary stent placement if complete clearance not possible

## Cholangitis Management (Tokyo 2018)

**Initial Resuscitation:**
- IV fluids (lactated Ringer's)
- Broad-spectrum antibiotics
- Source control (biliary drainage)

**Antibiotic Selection:**
- Ceftriaxone 2 g daily + metronidazole
- OR piperacillin-tazobactam 3.375 g q6h
- OR carbapenem (meropenem, ertapenem)
- Duration: 5-7 days after adequate drainage

**Biliary Drainage Timing:**
- Grade I: Elective drainage
- Grade II: Urgent/early drainage (within 72 hours)
- Grade III: Emergent drainage (within 24 hours)

**Drainage Method Selection:**
- **ERCP:** First-line if accessible
  - Sphincterotomy + stone extraction if lithiasis
  - Stent placement if stricture
  - Nasobiliary catheter if reassessment needed
- **PTCD:** If ERCP unavailable or failed
  - Particularly effective for proximal obstruction
  - Higher complication rate than ERCP
- **Surgical:** Last resort, high mortality in emergency setting

**Special Situations:**
- IgG4-related cholangitis: Steroids
- PSC: Dominant stricture dilation/stenting
- Malignant obstruction: Metal stents for longer life expectancy, plastic for shorter

## Gallstone Pancreatitis Management

**Diagnosis:**
- Elevated lipase >3× ULN
- Imaging evidence of gallstones
- No other obvious cause

**Severity Stratification:**
- Same as other pancreatitis (BISAP, APACHE II)
- Most cases mild

**Management:**
- NPO, IV fluids, analgesia
- MRCP or EUS to confirm CBD stones
- ERCP if:
  - Cholangitis suspected
  - Bilirubin >4 mg/dL
  - Dilated CBD on imaging
  - Clinical deterioration

**Timing of Cholecystectomy:**
- **Mild pancreatitis:**
  - During same admission (before discharge)
  - Ideally within 48 hours of resolution
- **Severe pancreatitis:**
  - Delay until inflammation resolves (weeks)
  - ERCP with sphincterotomy to prevent recurrence

## Complications and Special Situations

**Bile Duct Injury:**
- Most serious complication of cholecystectomy
- Incidence 0.3-0.5%
- Strasberg classification (types A-E)
- Management: Large volume center experience
- Repair: Roux-en-Y hepaticojejunostomy
- Best outcomes when recognized intraoperatively

**Post-cholecystectomy Syndrome:**
- Persistent symptoms after cholecystectomy
- Causes:
  - Retained CBD stones
  - Biliary dyskinesia
  - Sphincter of Oddi dysfunction
  - Alternatives diagnoses (IBS, PUD)
- Evaluation: MRCP, HIDA scan, manometry

**Biliary Dyskinesia:**
- Biliary pain without stones
- CCK-HIDA scan: Gallbladder ejection fraction <40%
- Controversial entity
- Cholecystectomy improves symptoms in ~70%`,
      keyTerms: [
        { term: 'cholecystostomy', definition: 'Placement of drainage tube into gallbladder' },
        { term: 'Strasberg classification', definition: 'Classification system for bile duct injuries' },
        { term: 'biliary dyskinesia', definition: 'Functional biliary pain disorder with abnormal gallbladder emptying' },
        { term: 'ejection fraction', definition: 'Percentage of gallbladder contents emptied; <40% = abnormal' },
        { term: 'post-cholecystectomy syndrome', definition: 'Persistent symptoms after gallbladder removal' },
        { term: 'CCK-HIDA', definition: 'Cholecystokinin-stimulated hepatobiliary scan; measures GB function' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Silent gallstones: Do NOT treat (except porcelain GB)
2. Acute cholecystitis: Early cholecystectomy (<72 hours) preferred; delayed surgery after 72 hours has higher conversion rate
3. Grade III cholecystitis: Medical resuscitation first, cholecystectomy after stabilized
4. CBD stones: Low risk - lap chole alone; High risk - ERCP first
5. Cholangitis: ERCP for source control is definitive treatment
6. Gallstone pancreatitis: Cholecystectomy during same admission for mild cases
7. Bile duct injury: Refer to high-volume center for repair
8. Retained stones post-cholecystectomy: ERCP is treatment of choice
9. Intraoperative cholangiogram: Helpful to define anatomy and detect injuries
10. Subtotal cholecystectomy: Acceptable alternative in difficult cases to avoid duct injury`,
    },
  },

  media: [
    {
      id: 'biliary-anatomy',
      type: 'diagram',
      filename: 'biliary-anatomy.svg',
      title: 'Biliary Anatomy',
      description: 'Anatomical relationships of gallbladder and bile ducts',
    },
    {
      id: 'gallstone-types',
      type: 'diagram',
      filename: 'gallstone-types.svg',
      title: 'Types of Gallstones',
      description: 'Comparison of cholesterol and pigment gallstones',
    },
  ],

  citations: [
    {
      id: 'acg-gallstones-2022',
      type: 'article',
      title: 'ACG Guideline: Treatment of Gallstone Disease',
      authors: ['Ko CW', 'Schiffman L', 'Misra'],
      source: 'American Journal of Gastroenterology 2022',
    },
    {
      id: 'tokyo-guidelines-2018',
      type: 'article',
      title: 'Tokyo Guidelines 2018: Diagnostic Criteria and Severity Assessment of Acute Cholecystitis',
      authors: ['Tokyo Guidelines Revision Committee'],
      source: 'Journal of Hepato-Biliary-Pancreatic Sciences 2018',
    },
    {
      id: 'asge-cbd-2019',
      type: 'article',
      title: 'ASGE Guideline: The Role of ERCP in Diseases of the Biliary Tract',
      authors: ['ASGE Standards of Practice Committee'],
      source: 'Gastrointestinal Endoscopy 2019',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pancreas', targetType: 'condition', relationship: 'related', label: 'Pancreatitis' },
    { targetId: 'condition-liver', targetType: 'condition', relationship: 'related', label: 'Liver Disease' },
    { targetId: 'procedure-cholecystectomy', targetType: 'topic', relationship: 'see-also', label: 'Cholecystectomy' },
  ],

  tags: {
    systems: ['gastrointestinal', 'hepatic'],
    topics: ['gastroenterology', 'surgery', 'pathology'],
    keywords: ['gallstones', 'cholecystitis', 'cholangitis', 'Murphy sign', 'biliary'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
