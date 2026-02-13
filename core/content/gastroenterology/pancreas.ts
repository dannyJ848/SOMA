/**
 * Pancreatic Disorders - Pancreatitis, Pancreatic Insufficiency
 *
 * Covers acute and chronic pancreatitis, pancreatic insufficiency,
 * and pancreatic cancer basics.
 */

import { EducationalContent } from '../types';

export const pancreasContent: EducationalContent = {
  id: 'gi-pancreas-disorders',
  type: 'condition',
  name: 'Pancreatic Disorders',
  alternateNames: [
    'Pancreatitis',
    'Acute Pancreatitis',
    'Chronic Pancreatitis',
    'Pancreatic Insufficiency',
    'Exocrine Pancreatic Insufficiency',
    'EPI',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The pancreas is an organ behind the stomach that makes enzymes for digestion and hormones like insulin. Pancreatitis is inflammation of the pancreas causing severe belly pain.',
      explanation: `**What is the Pancreas?**

The pancreas is a long, flat organ located behind your stomach. It has two important jobs:
1. Making enzymes that help digest food in the small intestine
2. Making hormones like insulin that control blood sugar

**Common Pancreas Problems:**

1. **Acute Pancreatitis**
   - Sudden inflammation of the pancreas
   - Causes severe belly pain, usually in the upper middle or left side
   - Pain often radiates to the back
   - Most common causes: gallstones and heavy alcohol use
   - Usually treated in the hospital

2. **Chronic Pancreatitis**
   - Long-term inflammation that damages the pancreas over time
   - Pancreas tissue gets replaced with scar tissue
   - Leads to permanent loss of function
   - Often causes ongoing pain and digestive problems

3. **Pancreatic Insufficiency**
   - Pancreas cannot make enough digestive enzymes
   - Food is not properly digested
   - Causes oily, foul-smelling diarrhea (steatorrhea)
   - Leads to weight loss and vitamin deficiencies

**Symptoms of Pancreatitis:**
- Severe belly pain that may wrap around to the back
- Pain that gets worse after eating
- Nausea and vomiting
- Fever
- Fast heartbeat
- Tender, swollen belly

**What Causes Pancreatitis?**
- Gallstones (most common cause)
- Heavy alcohol use over many years
- High triglycerides (a type of fat in blood)
- Certain medications
- Trauma or injury
- Infections
- Sometimes the cause is unknown

**Diagnosis:**
- Blood tests showing elevated pancreatic enzymes
- CT scan or ultrasound of the abdomen
- Sometimes MRI or other imaging tests

**Treatment:**
- Hospitalization for IV fluids and pain medicine
- Nothing to eat or drink initially (rest the pancreas)
- Treat the underlying cause
- For chronic cases: enzyme supplements to help with digestion`,
      keyTerms: [
        { term: 'pancreas', definition: 'Organ behind the stomach that makes digestive enzymes and hormones' },
        { term: 'pancreatitis', definition: 'Inflammation of the pancreas', pronunciation: 'pan-kree-uh-TIE-tis' },
        { term: 'enzymes', definition: 'Proteins that help break down food for digestion' },
        { term: 'steatorrhea', definition: 'Oily, foul-smelling diarrhea from undigested fat', pronunciation: 'stee-uh-toe-REE-uh' },
        { term: 'triglycerides', definition: 'A type of fat in the blood', pronunciation: 'try-GLIS-er-ides' },
        { term: 'gallstones', definition: 'Hard deposits in the gallbladder that can block bile ducts' },
      ],
      analogies: [
        'The pancreas is like a factory that produces both soap (digestive enzymes) and messengers (hormones).',
        'Acute pancreatitis is like a factory explosion - sudden, dangerous, and needs emergency repair.',
        'Chronic pancreatitis is like a factory slowly wearing down - parts stop working one by one.',
      ],
      examples: [
        'Someone who had their gallbladder removed for stones might have had pancreatitis first.',
        'A person who drinks heavily every day for many years might develop chronic pancreatitis.',
        'A patient with cystic fibrosis might have pancreatic insufficiency from birth.',
      ],
      patientCounselingPoints: [
        'Avoid alcohol completely if you have had pancreatitis',
        'Eat a low-fat diet to reduce stress on the pancreas',
        'Stop smoking - smoking makes pancreatitis worse',
        'Take pancreatic enzyme supplements with meals as prescribed',
        'Stay hydrated and drink plenty of water',
      ],
    },

    2: {
      level: 2,
      summary: 'Pancreatitis is inflammation of the pancreas, classified as acute (sudden onset) or chronic (progressive). Gallstones and alcohol are the leading causes. Pancreatic insufficiency results from inadequate enzyme production.',
      explanation: `## Acute Pancreatitis

**Definition:**
Sudden inflammation of the pancreas causing abdominal pain and elevated pancreatic enzymes.

**Epidemiology:**
- Incidence: 13-45 per 100,000 population
- Most common GI reason for hospital admission
- Slightly more common in men
- Risk increases with age

**Etiology:**

| Cause | Frequency | Notes |
|-------|-----------|-------|
| Gallstones | 40-70% | Most common cause |
| Alcohol | 25-35% | Chronic use (>5 years) |
| Hypertriglyceridemia | 1-4% | Usually >1000 mg/dL |
| ERCP-induced | 1-5% | Procedure complication |
| Trauma | 1-2% | Accidental or surgical |
| Drugs | <2% | Many medications implicated |
| Autoimmune | <2% | IgG4-related |
| Idiopathic | 10-30% | No cause identified |

**Pathophysiology:**
- Premature activation of pancreatic enzymes within the pancreas
- Trypsinogen converted to trypsin prematurely
- Autodigestion of pancreatic tissue
- Inflammatory cascade and systemic effects

**Clinical Presentation:**
- Severe epigastric or left upper quadrant pain
- Radiation to the back in ~50%
- Pain often described as boring or piercing
- Worse with eating, improves leaning forward
- Nausea, vomiting (may be profuse)
- Abdominal distension

**Diagnosis:**
- **Lipase:** More specific than amylase, remains elevated longer
  - ≥3 times upper limit of normal = diagnostic
  - Normalizes in 3-7 days
- **Amylase:** Less specific, rises earlier but normalizes faster
- **Imaging:**
  - CT abdomen with contrast (gold standard for severity)
  - Ultrasound if gallstones suspected
  - MRI for equivocal cases

**Severity Assessment:**
- Ranson criteria (at admission and 48 hours)
- APACHE II score
- Bedside Index for Severity in Acute Pancreatitis (BISAP)
- CT Severity Index (CTSI)

**Complications:**
- Necrotizing pancreatitis
- Pancreatic pseudocyst
- Infected pancreatic necrosis
- Systemic inflammatory response syndrome (SIRS)
- Multiorgan failure
- Death (mortality 1-5% overall, higher with necrosis)

## Chronic Pancreatitis

**Definition:**
Chronic inflammatory disease of the pancreas characterized by irreversible fibrosis and loss of function.

**Etiology:**
- Chronic alcohol use (most common in developed countries)
- Genetic factors (PRSS1, SPINK1, CFTR mutations)
- Obstructive (pancreas divisum, tumors)
- Autoimmune (IgG4-related disease)
- Tropical pancreatitis (developing countries)
- Idiopathic

**Pathology:**
- Irreversible fibrosis
- Ductal dilation and strictures ("chain of lakes" appearance)
- Calcifications (late finding)
- Loss of acinar tissue and islet cells

**Clinical Features:**
- Recurrent or persistent abdominal pain
- Pain may be episodic or constant
- Weight loss
- Steatorrhea (oily, foul stools)
- Diabetes mellitus (later stage)

**Pancreatic Insufficiency:**
- Exocrine: Inadequate digestive enzymes
  - Malabsorption of fat and protein
  - Fat-soluble vitamin deficiency (A, D, E, K)
  - Oily diarrhea (steatorrhea)
- Endocrine: Loss of islet cells
  - Diabetes ("brittle" type 3c)
  - Difficult to control

**Diagnosis:**
- CT: Calcifications, ductal changes
- MRCP: Ductal anatomy
- EUS: Detailed parenchymal and ductal assessment
- Secretin stimulation test (gold standard for insufficiency)
- Fecal elastase (clinical marker for insufficiency)

**Treatment:**
- Pain control (challenging, may require opioids)
- Pancreatic enzyme replacement therapy (PERT)
- Fat-soluble vitamin supplementation
- Diabetes management
- Endoscopic or surgical interventions for ductal obstruction
- Cessation of alcohol and smoking`,
      keyTerms: [
        { term: 'lipase', definition: 'Pancreatic enzyme that breaks down fats; specific marker for pancreatitis' },
        { term: 'amylase', definition: 'Pancreatic enzyme that breaks down carbohydrates; less specific than lipase' },
        { term: 'steatorrhea', definition: 'Oily, foul-smelling diarrhea from fat malabsorption' },
        { term: 'pseudocyst', definition: 'Fluid collection surrounded by fibrous wall, common after pancreatitis' },
        { term: 'pancreas divisum', definition: 'Congenital anomaly where pancreatic ducts fail to fuse' },
        { term: 'PERT', definition: 'Pancreatic enzyme replacement therapy' },
        { term: 'MRCP', definition: 'MR cholangiopancreatography; imaging of pancreatic/biliary ducts' },
        { term: 'EUS', definition: 'Endoscopic ultrasound; internal imaging of pancreas' },
      ],
      analogies: [
        'Trypsin is normally kept inactive (like a safety on a gun) until it reaches the intestine. In pancreatitis, the safety fails.',
      ],
      examples: [
        'A 45-year-old woman with gallstones develops severe epigastric pain radiating to the back and elevated lipase - acute pancreatitis.',
        'A man who drinks a pint of whiskey daily for 15 years develops chronic epigastric pain and calcifications on CT - chronic pancreatitis.',
        'A patient with cystic fibrosis has oily diarrhea and fails to gain weight despite adequate intake - pancreatic insufficiency.',
      ],
    },

    3: {
      level: 3,
      summary: 'Acute pancreatitis results from premature activation of pancreatic enzymes causing autodigestion. Chronic pancreatitis involves irreversible fibrosis from recurrent inflammation. Gallstones and alcohol account for 80% of cases.',
      explanation: `## Acute Pancreatitis Pathophysiology

**Normal Pancreatic Physiology:**
- Acinar cells synthesize digestive enzymes as inactive zymogens
- Trypsinogen, chymotrypsinogen, procarboxypeptidase, phospholipase A2
- Stored in zymogen granules
- Activated only after reaching the duodenum (enterokinase → trypsin)

**Pathogenesis of Acute Pancreatitis:**

1. **Initiating Event:**
   - Obstruction (gallstone at ampulla)
   - Toxic injury (alcohol metabolites)
   - Ischemia, trauma, etc.

2. **Premature Activation:**
   - Trypsinogen converted to trypsin within acinar cells
   - Trypsin activates other zymogens (autocatalysis cascade)
   - Digestive enzymes attack pancreatic tissue

3. **Autodigestion:**
   - Proteases digest tissue proteins
   - Lipase breaks down fat into fatty acids (saponification)
   - Elastase digests blood vessel walls (hemorrhage)
   - Phospholipase A2 damages cell membranes

4. **Inflammatory Cascade:**
   - Damaged cells release cytokines (TNF-α, IL-1, IL-6)
   - Neutrophil infiltration
   - Microcirculatory dysfunction
   - Systemic effects (SIRS, multiorgan failure)

**Severity Scoring Systems:**

*Ranson Criteria (Revised):*
At admission:
- Age >55 years
- WBC >16,000
- Glucose >200 mg/dL
- LDH >350 IU/L
- AST >250 IU/L

At 48 hours:
- Hematocrit drop >10%
- Calcium <8 mg/dL
- PaO2 <60 mmHg
- Base deficit >4 mEq/L
- Fluid sequestration >6 L

*APACHE II:*
- Acute Physiology and Chronic Health Evaluation
- More complex, but more accurate early on

*BISAP (Bedside Index):*
- BUN >25 mg/dL
- Impaired mental status
- SIRS (≥2 criteria)
- Age >60 years
- Pleural effusion

Each point = ~5% increased mortality; ≥3 = high risk

**CT Severity Index (CTSI):**
- Grades pancreatic inflammation and necrosis
- 0-10 scale
- Higher score predicts organ failure and mortality

## Chronic Pancreatitis Pathophysiology

**Mechanisms of Fibrosis:**
- Recurrent inflammation → activated pancreatic stellate cells
- Stellate cells deposit collagen (type I, III)
- Progressive fibrosis replaces functional parenchyma
- Ductal distortion and obstruction
- Ischemia from fibrosis

**Tiger-Lobule Pattern:**
- Bands of fibrosis surrounding lobules of parenchyma
- Characteristic histologic finding

**Ductal Changes:**
- Strictures and dilation alternating
- Calculi form within ducts
- Protein plugs precipitate
- "Chain of lakes" on imaging

**Pain Mechanisms:**
- Ductal hypertension
- Inflammation and ischemia
- Pancreatic neuritis (nerve inflammation)
- Continued alcohol use worsens pain

**Exocrine Insufficiency Pathophysiology:**
- Loss of >90% of acinar mass before symptoms
- Lipase secretion affected before protease
- Undigested fat reaches colon → bacterial degradation → diarrhea
- Fat-soluble vitamin malabsorption

**Endocrine Insufficiency:**
- Islet cell destruction (fibrosis)
- Loss of beta cells → diabetes
- Loss of alpha cells → glucagon deficiency → hypoglycemia risk
- "Brittle" diabetes (hard to control)

**Diagnostic Tests:**

*Direct Tests (Gold Standard):*
- Secretin stimulation test: Measure bicarbonate output
- Cholecystokinin (CCK) stimulation: Measure enzyme output

*Indirect Tests (Clinical):*
- Fecal elastase-1: <200 μg/g = insufficiency
- 72-hour fecal fat quantification: >7 g/day abnormal
- Serum trypsinogen: Low in advanced disease

## Hypertriglyceridemia-Induced Pancreatitis

**Pathophysiology:**
- Triglycerides >1000 mg/dL significantly increase risk
- Chylomicrons cause pancreatic capillary hyperviscosity
- Ischemia and acidosis
- Free fatty acid generation (toxic to acinar cells)

**Treatment:**
- IV fluids (avoid dextrose-containing)
- Insulin infusion (activates lipoprotein lipase)
- Fibrates (once patient can eat)
- Plasmapheresis for severe/refractory cases

## Autoimmune Pancreatitis

**Type 1 (IgG4-related):**
- Lymphoplasmacytic infiltrate
- IgG4-positive plasma cells
- Storiform fibrosis
- Obliterative phlebitis
- Often systemic (other organs involved)
- Responds to steroids

**Type 2:**
- Granulocytic epithelial lesion
- Idiopathic duct-centric pancreatitis
- Not associated with IgG4
- No systemic involvement`,
      keyTerms: [
        { term: 'zymogen', definition: 'Inactive enzyme precursor that requires activation' },
        { term: 'trypsinogen', definition: 'Inactive form of trypsin; normally activated in duodenum' },
        { term: 'enterokinase', definition: 'Brush border enzyme that converts trypsinogen to trypsin' },
        { term: 'autodigestion', definition: 'Self-digestion of pancreatic tissue by activated enzymes' },
        { term: 'SIRS', definition: 'Systemic inflammatory response syndrome' },
        { term: 'pancreatic stellate cells', definition: 'Cells that produce fibrosis in chronic pancreatitis' },
        { term: 'fecal elastase', definition: 'Marker of exocrine pancreatic function; <200 indicates insufficiency' },
        { term: 'IgG4', definition: 'Immunoglobulin G4; elevated in autoimmune pancreatitis type 1' },
      ],
      clinicalNotes: 'Mild acute pancreatitis: Discharge in 1-2 days if pain controlled and tolerating oral intake. Severe/necrotizing: ICU admission, NPO for days to weeks. Chronic pancreatitis pain: Refractory to many treatments; consider celiac plexus block or surgical drainage.',
    },

    4: {
      level: 4,
      summary: 'Pancreatitis pathogenesis involves complex interactions between acinar cell injury, premature zymogen activation, inflammatory cascades, and microcirculatory dysfunction. Chronic pancreatitis represents a progressive fibrotic process with exocrine and endocrine failure.',
      explanation: `## Advanced Pathophysiology of Acute Pancreatitis

**Acinar Cell Injury Mechanisms:**

*Calcium Signaling:*
- Pathologic sustained elevation of cytosolic Ca2+
- Premature trypsinogen activation
- Mitochondrial dysfunction
- Cell death (necrosis more than apoptosis)

*Trypsinogen Activation:*
- Cathepsin B co-localizes with trypsinogen in secretory granules
- Premature conversion to trypsin within acinar cells
- Trypsin activates other zymogens (autocatalytic cascade)
- Normally inhibited by pancreatic secretory trypsin inhibitor (PSTI/SPINK1)

*Genetic Factors:*
- PRSS1 mutations (hereditary pancreatitis): Gain of function, increased trypsin activity
- SPINK1 mutations: Loss of trypsin inhibition
- CFTR mutations: Thick pancreatic secretions, obstruction
- CTRC mutations: Impaired trypsin degradation

**Organ Failure Mechanisms:**

*SIRS to MODS Progression:*
- Cytokine storm (TNF-α, IL-1β, IL-6, IL-8)
- Neutrophil activation and endothelial injury
- Capillary leak syndrome
- Hypovolemia and third-spacing
- Renal dysfunction (ATN from ischemia)
- Pulmonary complications (ARDS, pleural effusions)
- Cardiovascular (shock, myocardial depression)

**Necrosis and Infection:**
- Necrotic tissue devascularized
- Bacterial translocation from gut
- Infection typically occurs week 2-3
- Mortality markedly increased with infected necrosis

**Fluid Sequestration:**
- Third-spacing into retroperitoneum and peritoneal cavity
- Up to several liters can be sequestered
- Aggressive fluid resuscitation critical

## Chronic Pancreatitis: Deep Dive

**Pancreatic Stellate Cell Biology:**
- Quiescent: Store vitamin A (retinoid droplets)
- Activated by:
  - Cytokines (TGF-β, PDGF)
  - Oxidative stress
  - Ethanol metabolites
  - Angiotensin II
- Myofibroblast phenotype
- Secrete type I collagen, fibronectin
- Produce tissue inhibitors of metalloproteinases (TIMPs)
- Self-perpetuating cycle of activation

**Fibrosis Patterns:**
- Early: Periductal and perilobular
- Advanced: Parenchymal replacement
- Duct-centric (obstructive) vs. lobular-centric (toxic-metabolic)

**Pain Pathogenesis (Multiple Mechanisms):**

1. **Ductal Hypertension:**
   - Increased intraductal pressure from strictures/stones
   - Pain improves after ductal drainage (surgery/endoscopy)

2. **Inflammatory:**
   - Active inflammation mediates pain
   - Responds to anti-inflammatory therapy

3. **Neuropathic:**
   - Pancreatic neuritis (perineural inflammation)
   - Neural proliferation and sprouting
   - Central sensitization
   - Less responsive to ductal procedures

**Autoimmune Pancreatitis: Detailed**

*Type 1 (IgG4-related):*
- Affects older men (M:F 3:1)
- Part of IgG4-related disease (systemic)
- Diffuse pancreas enlargement ("sausage-shaped")
- Low-attenuation rim ("halo sign")
- Elevated serum IgG4 in 70%
- Other organs: Biliary tree, salivary glands, retroperitoneum
- Rapid response to steroids

*Type 2 (Idiopathic Duct-Centric):*
- Younger patients, equal sex distribution
- Associated with IBD (especially ulcerative colitis)
- Normal IgG4
- Focal pancreatic mass common
- Also steroid-responsive

**Diagnosis of Autoimmune Pancreatitis:**
- HISORt criteria (Mayo Clinic):
  - H: Histology (lymphoplasmacytic, IgG4+)
  - I: Imaging (diffuse enlargement, capsule-like rim)
  - S: Serology (elevated IgG4)
  - O: Other organ involvement
  - Rt: Response to steroid therapy
- ICDC (International Consensus Diagnostic Criteria) also used

## Pancreatic Insufficiency: Quantitative Assessment

**Secretin Stimulation Test (Gold Standard):**
- Secretin stimulates bicarbonate secretion
- Duodenal intubation
- Bicarbonate output <80 mEq/L = insufficiency
- Rarely performed clinically

**Fecal Fat Quantification:**
- 72-hour stool collection with 100 g fat/day diet
- Normal: <7 g fat/24 hours
- >7 g = steatorrhea (malabsorption)
- Technically difficult, unpleasant

**Fecal Elastase-1 (Most Practical):**
- ELISA test on spot stool sample
- Enzyme stable during intestinal transit
- >200 μg/g: Normal
- 100-200: Moderate insufficiency
- <100: Severe insufficiency
- False-negative with mild disease
- False-positive with watery diarrhea

**Clinical Cutoff:**
- Enzyme secretion must drop to <10% before malabsorption
- Lipase more sensitive to loss than amylase or protease
- Fat malabsorption before protein/carbohydrate

## Hypertriglyceridemia-Induced Pancreatitis

**Mechanism Details:**
- Chylomicrons >1000 mg/dL cause pancreatic capillary sludging
- Local ischemia and acidosis
- Pancreatic lipase acts on triglycerides → free fatty acids
- FFA toxic to acinar cells and endothelium
- Lipotoxicity and mitochondrial injury

**Triglyceride Levels and Risk:**
- Normal: <150 mg/dL
- Borderline high: 150-199
- High: 200-499
- Very high: 500-999
- Pancreatitis risk markedly increases >1000

**Treatment Approach:**
- NPO (nothing oral)
- Aggressive IV fluids (lactated Ringer's preferred)
- Insulin infusion (even in non-diabetics) to stimulate lipoprotein lipase
- Fibrates/omega-3 once oral intake resumes
- Plasmapheresis for severe cases (triglycerides >5000 despite other measures)`,
      keyTerms: [
        { term: 'PRSS1', definition: 'Cationic trypsinogen gene; gain-of-function mutations cause hereditary pancreatitis' },
        { term: 'SPINK1', definition: 'Serine protease inhibitor Kazal type 1; trypsin inhibitor, mutations increase risk' },
        { term: 'CTRC', definition: 'Chymotrypsin C; degrades trypsin, loss-of-function increases risk' },
        { term: 'HISORt', definition: 'Diagnostic criteria for autoimmune pancreatitis (Histology, Imaging, Serology, Other organs, Response to therapy)' },
        { term: 'chylomicrons', definition: 'Lipoprotein particles that transport dietary triglycerides' },
        { term: 'perineural inflammation', definition: 'Inflammation around nerves; source of chronic pain' },
        { term: 'MODS', definition: 'Multiple organ dysfunction syndrome' },
      ],
      clinicalNotes: 'Autoimmune pancreatitis: Can mimic pancreatic cancer. Always consider AIP before surgery for presumed malignancy, especially in older males with biliary obstruction. Steroid trial can be diagnostic.',
    },

    5: {
      level: 5,
      summary: 'Management of acute pancreatitis involves aggressive fluid resuscitation, early nutritional support, and management of complications. Chronic pancreatitis requires a comprehensive approach to pain control, enzyme replacement, and management of endocrine dysfunction.',
      explanation: `## Acute Pancreatitis Management (ACG 2013, Revised 2020)

**Initial Assessment and Risk Stratification:**
- Identify systemic inflammatory response syndrome (SIRS)
- Assess organ failure (respiratory, cardiovascular, renal)
- BISAP score for early mortality prediction
- CT with contrast after 72 hours if diagnosis uncertain or to assess necrosis

**Fluid Resuscitation:**
- Aggressive early fluid therapy is cornerstone
- Lactated Ringer's preferred (may reduce SIRS compared to normal saline)
- Initial bolus 250-500 mL, then 3-4 mL/kg/day titrated to:
  - Hemodynamic stability
  - BUN normalization (not rising)
  - Hematocrit stabilization
- Avoid over-resuscitation (worse outcomes in APACHE II >8)
- Goal: Urine output 0.5-1 mL/kg/hr

**Pain Management:**
- IV opioids (hydromorphone, fentanyl preferred over morphine)
- Morphine historically avoided due to sphincter of Oddi spasm concern (not clinically significant)
- Patient-controlled analgesia (PCA) often needed

**Nutritional Support:**
- Oral intake as tolerated for mild cases
- For severe/necrotizing or predicted prolonged NPO (>48 hours):
  - Enteral nutrition preferred over parenteral
  - Nasojejunal tube if gastric feeding not tolerated
  - Start within 72 hours if oral intake not possible
  - Parenteral nutrition only if enteral contraindicated

**Antibiotic Indications:**
- NOT prophylactic (no benefit)
- Infected pancreatic necrosis:
  - Carbapenem (imipenem, meropenem) preferred
  - Consider CT-guided FNA if infection suspected
  - Minimally invasive necrosectomy preferred

**ERCP:**
- Indicated for acute cholangitis (biliary obstruction with infection)
- May be considered for gallstone pancreatitis with persistent biliary obstruction
- Cholecystectomy during same admission for gallstone pancreatitis

**Intervention for Necrosis:**
- Step-up approach (preferred):
  1. Antibiotics initially for infected necrosis
  2. Percutaneous drainage if no improvement
  3. Surgical or endoscopic necrosectomy if needed
- Delay intervention (3-4 weeks) if possible (walled-off necrosis)
- Minimally invasive approaches (VARD, PANTER) superior to open necrosectomy

## Chronic Pancreatitis Management

**Pain Management (Complex, Stepwise):**

1. **Lifestyle Modification:**
   - Alcohol cessation (mandatory)
   - Smoking cessation (critical, worsens disease)
   - Low-fat, high-protein diet
   - Small, frequent meals

2. **Medical Therapy:**
   - Acetaminophen and NSAIDs (first-line)
   - Tricyclic antidepressants (amitriptyline 10-75 mg)
   - Pregabalin/gabapentin (neuropathic component)
   - Opioids (may be required, risk of dependence)

3. **Pancreatic Enzyme Replacement Therapy (PERT):**
   - May provide pain relief (controversial)
   - Mechanism: Negative feedback on pancreatic secretion
   - Uncoated, enteric-coated tablets
   - Dose: 40,000-50,000 USP units lipase per meal

4. **Antioxidants:** Selenium, beta-carotene, vitamins C and E (limited evidence)

5. **Endoscopic Therapy:**
   - Main pancreatic duct stenting
   - Stone extraction
   - Stricture dilation
   - Best for dominant stricture with upstream dilation

6. **Celiac Plexus Block:**
   - EUS-guided or percutaneous
   - Temporary pain relief (months)
   - Can be repeated

7. **Surgical Options:**
   - Frey procedure (coring out of head + drainage)
   - Puestow procedure (lateral pancreaticojejunostomy)
   - Whipple (pancreaticoduodenectomy) for head mass
   - Total pancreatectomy with islet autotransplant (TP-IAT) for refractory cases

**Pancreatic Enzyme Replacement Therapy:**

*Dosing:*
- Start 500-1,000 USP lipase units/kg/meal
- Titrate to clinical response (reduce steatorrhea, weight gain)
- Typical adults: 40,000-50,000 units per meal
- Half-dose with snacks

*Administration:*
- Take WITH meals and snacks
- Some with first bite, rest during meal
- Enteric-coated to prevent acid degradation
- May add H2 blocker or PPI if suboptimal response
- Do not crush enteric-coated tablets

*Monitoring:*
- Clinical: Stool frequency, consistency, weight
- Fat-soluble vitamin levels
- Nutritional markers

**Endocrine Insufficiency Management:**
- Diabetes mellitus type 3c
- Insulin deficiency + glucagon deficiency
- "Brittle" diabetes (difficult to control)
- Hypoglycemia unawareness (lack of glucagon response)
- Insulin is mainstay
- Oral agents limited (GLP-1 agonists may help)
- Continuous glucose monitoring beneficial

## Autoimmune Pancreatitis Management

**Induction:**
- Prednisone 30-40 mg daily
- Clinical improvement typically within 2-3 weeks
- Imaging improvement within 4-6 weeks
- Taper over 8-12 weeks based on response

**Maintenance/Relapse:**
- Relapse rate 30-50% during/after taper
- Azathioprine, 6-mercaptopurine, or mycophenolate for steroid-sparing
- Rituximab for refractory cases (anti-CD20)

**Biliary Involvement:**
- Distal biliary stricture common
- Biliary stenting often needed initially
- May resolve with steroid therapy

## Pancreatic Cancer Screening (High Risk)

**Who to Screen:**
- Hereditary pancreatitis (PRSS1 mutation)
- Peutz-Jeghers syndrome
- CDKN2A mutations
- BRCA2, PALB2 mutations (consider)
- Lynch syndrome with family history

**Screening Method:**
- MRI/MRCP annually
- EUS as alternative
- Begin at age 40 (or 10 years before earliest case in family)`,
      keyTerms: [
        { term: 'step-up approach', definition: 'Graduated approach to necrosectomy: antibiotics → drainage → surgery' },
        { term: 'BISAP', definition: 'Bedside Index for Severity in Acute Pancreatitis; 5-point mortality predictor' },
        { term: 'Frey procedure', definition: 'Local resection of pancreatic head + longitudinal pancreaticojejunostomy' },
        { term: 'Puestow procedure', definition: 'Lateral pancreaticojejunostomy for ductal drainage' },
        { term: 'TP-IAT', definition: 'Total pancreatectomy with islet autotransplantation' },
        { term: 'VARD', definition: 'Video-assisted retroperitoneal debridement' },
        { term: 'PANTER', definition: 'Percutaneous catheter drainage vs. minimally invasive necrosectomy' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Acute pancreatitis: Goal urine output 0.5-1 mL/kg/hr; monitor BUN and hematocrit to assess adequacy
2. Gallstone pancreatitis: Cholecystectomy during same admission; if delayed, risk of recurrence (50% within 90 days)
3. Necrotizing pancreatitis: Delay intervention if possible (3-4 weeks) for walled-off necrosis
4. Infected necrosis: Carbapenems penetrate pancreatic tissue best; CT-guided FNA to confirm if unclear
5. Chronic pancreatitis: Alcohol and smoking cessation essential; disease progression continues without
6. PERT dosing: 40,000-50,000 USP lipase units per meal; titrate to clinical response
7. PERT: Take with meals; enteric-coated; may add PPI for suboptimal response
8. Autoimmune pancreatitis: Always exclude pancreatic cancer before committing to steroids
9. Pancreatic cancer screening: MRI/MRCP or EUS annually for high-risk individuals
10. Type 3c diabetes: Brittle, insulin-dependent, hypoglycemia unawareness due to glucagon deficiency
11. Pregnancy: MRCP safe; avoid CT; ERCP with radiation shielding if needed
12. Fluid resuscitation: Lactated Ringer's preferred; avoid over-resuscitation in severe disease`,
    },
  },

  media: [
    {
      id: 'pancreatitis-pathophysiology',
      type: 'diagram',
      filename: 'pancreatitis-pathophysiology.svg',
      title: 'Pancreatitis Pathophysiology',
      description: 'Diagram showing mechanisms of pancreatic autodigestion',
    },
    {
      id: 'pancreas-anatomy',
      type: 'diagram',
      filename: 'pancreas-anatomy.svg',
      title: 'Pancreas Anatomy',
      description: 'Anatomical relationship of pancreas to surrounding structures',
    },
  ],

  citations: [
    {
      id: 'acg-pancreatitis-2013',
      type: 'article',
      title: 'ACG Guideline: Management of Acute Pancreatitis',
      authors: ['Tenner S', 'Baillie J', 'DeWitt J'],
      source: 'American Journal of Gastroenterology 2013',
    },
    {
      id: 'hae-pants-2018',
      type: 'article',
      title: 'International Consensus Guidelines on Chronic Pancreatitis',
      authors: ['Whitcomb DC', 'Forsmark CE', 'Garg PK'],
      source: 'Pancreatology 2018',
    },
    {
      id: 'iap-apa-2012',
      type: 'article',
      title: 'Management of Necrotizing Pancreatitis: Executive Summary',
      authors: ['Working Group of IAP/APA'],
      source: 'Pancreas 2013',
    },
  ],

  crossReferences: [
    { targetId: 'condition-biliary', targetType: 'condition', relationship: 'related', label: 'Biliary Disease' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
    { targetId: 'procedure-ercp', targetType: 'topic', relationship: 'see-also', label: 'ERCP' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'hepatology', 'pathology'],
    keywords: ['pancreatitis', 'pancreas', 'steatorrhea', 'PERT', 'amylase', 'lipase'],
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
