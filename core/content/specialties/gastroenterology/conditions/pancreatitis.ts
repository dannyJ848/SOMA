/**
 * Pancreatitis - Comprehensive Educational Content
 *
 * Covers acute pancreatitis (etiology, severity assessment, management)
 * and chronic pancreatitis (pathophysiology, complications, treatment).
 */

import { EducationalContent } from '../../../types';

export const pancreatitis: EducationalContent = {
  id: 'condition-pancreatitis',
  type: 'condition',
  name: 'Pancreatitis',
  alternateNames: [
    'Acute Pancreatitis',
    'Chronic Pancreatitis',
    'Necrotizing Pancreatitis',
    'Pancreatic Inflammation',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Pancreatitis is inflammation of the pancreas, an organ that helps digest food and control blood sugar. It causes severe belly pain and can be caused by gallstones or drinking too much alcohol.',
      explanation: `**What is the Pancreas?**

Your pancreas is a long, flat organ behind your stomach. It has two important jobs:
1. Makes digestive juices (enzymes) that break down food
2. Makes hormones like insulin that control blood sugar

**What is Pancreatitis?**

Pancreatitis happens when the pancreas becomes inflamed (swollen and irritated). It can be:
- **Acute**: Sudden, severe, but usually gets better in a few days
- **Chronic**: Long-lasting damage that doesn't go away

**What Causes It?**

The two most common causes are:
1. **Gallstones**: A stone from the gallbladder can block the duct from the pancreas, trapping digestive enzymes inside
2. **Alcohol**: Heavy drinking damages the pancreas over time

Other causes include high triglycerides (blood fats), certain medications, and injuries.

**What Does It Feel Like?**

- Severe pain in the upper belly that goes through to your back
- Pain that's worse after eating
- Nausea and vomiting
- Fever
- Fast heartbeat
- Tender belly

**How is It Treated?**

Most people with acute pancreatitis need to stay in the hospital for:
- IV fluids (the pancreas gets very thirsty)
- Pain medicine
- Not eating for a short time to let the pancreas rest
- Treatment of the cause (like removing gallstones)

Most people recover completely, but severe cases can be very dangerous.`,
      keyTerms: [
        { term: 'pancreas', definition: 'An organ that makes digestive juices and hormones like insulin' },
        { term: 'pancreatitis', definition: 'Inflammation of the pancreas', pronunciation: 'pan-kree-uh-TY-tis' },
        { term: 'acute', definition: 'Sudden and severe but short-lasting' },
        { term: 'chronic', definition: 'Long-lasting or keeps coming back' },
        { term: 'enzymes', definition: 'Chemicals that break down food into smaller pieces for absorption' },
      ],
      analogies: [
        'The pancreas is like a factory that makes both digestive chemicals and blood sugar controllers.',
        'In pancreatitis, the digestive enzymes start digesting the pancreas itself - like acid eating through its container.',
        'A gallstone blocking the pancreatic duct is like a cork plugging a bottle, causing pressure to build up.',
      ],
      examples: [
        'Someone might develop acute pancreatitis a day after a heavy drinking binge.',
        'A person with gallstones might get pancreatitis after eating a large fatty meal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute pancreatitis involves autodigestion of the pancreas by prematurely activated enzymes. Severity ranges from mild interstitial disease to severe necrotizing pancreatitis. Treatment focuses on fluid resuscitation, pain control, and addressing the underlying cause.',
      explanation: `## Acute Pancreatitis

### Etiology (GET SMASHED mnemonic)

- **G**allstones (40%)
- **E**thanol/Alcohol (30%)
- **T**rauma
- **S**teroids
- **M**umps (and other infections)
- **A**utoimmune
- **S**corpion sting
- **H**yperlipidemia, Hypothermia, Hypercalcemia
- **E**RCP
- **D**rugs (azathioprine, valproic acid, didanosine, sulfasalazine)

### Pathophysiology

1. Premature activation of trypsinogen to trypsin within pancreatic acinar cells
2. Trypsin activates other digestive enzymes
3. Autodigestion of pancreatic tissue
4. Local inflammation spreads systemically
5. Can progress to systemic inflammatory response syndrome (SIRS)

### Clinical Presentation

- Severe epigastric pain radiating to back
- Pain worse lying flat, better leaning forward
- Nausea, vomiting
- Abdominal distension
- Low-grade fever
- Tachycardia
- Severe cases: Hypotension, respiratory distress

### Physical Exam Signs (uncommon but classic)

- **Cullen's sign**: Periumbilical ecchymosis (blood tracking)
- **Grey Turner's sign**: Flank ecchymosis
- These indicate hemorrhagic pancreatitis (poor prognosis)

### Diagnosis

**Requires 2 of 3 criteria:**
1. Characteristic abdominal pain
2. Serum lipase (or amylase) ≥3x upper limit of normal
3. Imaging findings of pancreatitis

**Laboratory Studies:**
- Lipase: More specific, stays elevated longer
- Amylase: Less specific (elevated in other conditions)
- Elevated lipase does NOT correlate with severity

**Imaging:**
- CT with contrast: Not needed initially; use if diagnosis uncertain or to assess complications (after 72-96 hours)
- Ultrasound: To evaluate for gallstones

### Severity Assessment

**Mild:** No organ failure, no local complications
**Moderately severe:** Transient organ failure (<48h) OR local complications
**Severe:** Persistent organ failure (>48h)

**BISAP Score (1 point each):**
- BUN >25 mg/dL
- Impaired mental status
- SIRS
- Age >60
- Pleural effusion

Score ≥3: Higher mortality risk

### Treatment

**Supportive Care:**
1. **Fluid resuscitation** (most important in first 24h)
   - Goal-directed therapy
   - Lactated Ringer's preferred
   - Monitor for fluid overload

2. **Pain management**
   - Opioids as needed
   - No evidence that morphine worsens outcomes

3. **Nutrition**
   - Early enteral feeding (within 24-48h) preferred
   - NPO only if vomiting, ileus, or severe disease
   - No need for "pancreatic rest"

4. **No role for prophylactic antibiotics**

**Address Underlying Cause:**
- Gallstone pancreatitis: Cholecystectomy during same admission (if mild)
- Alcohol: Counseling, abstinence
- Hypertriglyceridemia: May need apheresis if severe (TG >1000)

### Complications

- Pancreatic necrosis (sterile or infected)
- Pseudocyst (encapsulated fluid collection >4 weeks)
- Splenic vein thrombosis
- Hemorrhage
- Multi-organ failure
- Death`,
      keyTerms: [
        { term: 'lipase', definition: 'Pancreatic enzyme that digests fats; elevated in pancreatitis (more specific than amylase)' },
        { term: 'autodigestion', definition: 'Process where pancreatic enzymes digest the pancreas itself' },
        { term: 'necrotizing pancreatitis', definition: 'Severe form with death of pancreatic tissue' },
        { term: 'pseudocyst', definition: 'Fluid collection surrounded by fibrous wall, occurring weeks after pancreatitis' },
        { term: 'SIRS', definition: 'Systemic inflammatory response syndrome; indicates severe inflammatory state' },
        { term: 'BISAP score', definition: 'Bedside Index of Severity in Acute Pancreatitis; predicts mortality' },
      ],
      analogies: [
        'Premature enzyme activation is like a grenade exploding inside the factory that made it.',
        'Fluid resuscitation is critical because the inflamed pancreas leaks fluid like a damaged pipe.',
        'A pseudocyst is like a water balloon that forms around leaked pancreatic fluid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute pancreatitis involves intracellular trypsinogen activation, NF-kappaB-mediated inflammation, and pancreatic microcirculation failure. Revised Atlanta Classification guides severity. Management emphasizes early goal-directed fluid therapy, enteral nutrition, and delayed intervention for complications.',
      explanation: `## Acute Pancreatitis Pathophysiology

### Molecular Mechanisms

**Initiating Events:**
1. **Premature trypsinogen activation**
   - Normally, enteropeptidase in duodenum activates trypsinogen
   - In pancreatitis: Intracellular activation via cathepsin B
   - Trypsin activates other zymogens (chymotrypsin, elastase, phospholipase)

2. **Calcium signaling abnormalities**
   - Sustained cytosolic calcium elevation
   - Mitochondrial dysfunction
   - Acinar cell injury

3. **NF-kappaB activation**
   - Proinflammatory cytokine release (IL-1, IL-6, TNF-alpha)
   - Neutrophil recruitment
   - Systemic inflammatory response

**Propagation:**
- Microcirculatory failure → ischemia
- Increased vascular permeability → third-spacing
- Complement activation
- Progression: Interstitial edema → hemorrhage → necrosis

### Revised Atlanta Classification (2012)

**Phases:**
1. **Early phase** (first week): SIRS predominates
2. **Late phase** (>1 week): Local complications, infection

**Severity:**
- **Mild**: No organ failure, no local/systemic complications
- **Moderately severe**: Transient organ failure (<48h) OR local/systemic complications without persistent organ failure
- **Severe**: Persistent organ failure (≥48h)

**Modified Marshall Score for Organ Failure:**

| System | 0 | 1 | 2 | 3 | 4 |
|--------|---|---|---|---|---|
| Respiratory (PaO2/FiO2) | >400 | 301-400 | 201-300 | 101-200 | ≤100 |
| Renal (Cr) | <1.4 | 1.4-1.8 | 1.9-3.6 | 3.6-4.9 | >4.9 |
| Cardiovascular (SBP) | >90 | <90, fluid responsive | <90, not fluid responsive | <90, pH<7.3 | <90, pH<7.2 |

Organ failure = score ≥2 in any system

### Local Complications

**Early (<4 weeks):**
- **Acute peripancreatic fluid collection (APFC)**: Interstitial pancreatitis
- **Acute necrotic collection (ANC)**: Necrotizing pancreatitis
- No defined wall

**Late (>4 weeks):**
- **Pseudocyst**: Encapsulated APFC, no solid debris
- **Walled-off necrosis (WON)**: Encapsulated ANC, contains solid necrotic debris

### Infected Necrosis

**Suspect if:**
- Clinical deterioration after initial improvement
- New/persistent fever, leukocytosis
- Gas in necrotic collection on CT

**Management:**
- CT-guided fine needle aspiration if diagnosis uncertain
- Antibiotics covering gut flora (carbapenems)
- Delay intervention until 4+ weeks when possible (step-up approach)
- Step-up: Percutaneous drainage → Endoscopic necrosectomy → Surgical necrosectomy

### Fluid Resuscitation

**Goal-directed approach:**
- Target: Adequate end-organ perfusion
- Urine output >0.5 mL/kg/hr
- Heart rate <120
- MAP 65-85 mmHg
- Hematocrit 35-44%

**Fluid choice:**
- Lactated Ringer's preferred over normal saline
- Associated with reduced SIRS, lower CRP

**Cautions:**
- Avoid aggressive over-resuscitation (abdominal compartment syndrome, pulmonary edema)
- Reassess frequently

### Nutrition

**Current Evidence:**
- Early enteral nutrition (within 24-48h) is safe and beneficial
- Reduces infection, mortality
- Nasogastric and nasojejunal routes similarly effective
- Oral diet when tolerated

**Parenteral nutrition:**
- Only if enteral route fails or is contraindicated
- Associated with higher infection rates

## Chronic Pancreatitis

### Definition
Progressive inflammatory disease leading to:
- Irreversible structural damage
- Fibrosis replacing exocrine/endocrine tissue
- Chronic pain
- Exocrine insufficiency (malabsorption)
- Endocrine insufficiency (diabetes)

### Etiology (TIGAR-O Classification)

- **T**oxic-metabolic: Alcohol (70-80%), smoking, hypertriglyceridemia, hypercalcemia
- **I**diopathic: Early onset, late onset
- **G**enetic: PRSS1, SPINK1, CFTR mutations
- **A**utoimmune: Type 1 (IgG4-related), Type 2 (idiopathic duct-centric)
- **R**ecurrent acute pancreatitis
- **O**bstructive: Pancreatic divisum, strictures, stones

### Clinical Features

- Chronic epigastric pain (may decrease as gland "burns out")
- Steatorrhea (fatty, foul-smelling stools) - occurs when >90% exocrine function lost
- Weight loss
- Diabetes mellitus (Type 3c)
- B12 deficiency (impaired R-protein cleavage)

### Diagnosis

**Imaging:**
- CT: Calcifications, ductal dilation, atrophy
- MRCP: Ductal changes
- EUS: Most sensitive for early changes

**Function Testing:**
- Fecal elastase-1 <200 mcg/g = exocrine insufficiency
- HbA1c for diabetes screening

### Treatment

- **Pain management**: Step-wise approach; avoid opioid dependence
- **Pancreatic enzyme replacement**: 40,000-50,000 lipase units/meal
- **Diabetes management**: Often insulin-requiring
- **Smoking/alcohol cessation**: Critical to slow progression
- **Endoscopic/surgical intervention**: For ductal stones, strictures`,
      keyTerms: [
        { term: 'Revised Atlanta Classification', definition: '2012 consensus defining acute pancreatitis severity and local complications' },
        { term: 'walled-off necrosis', definition: 'Mature encapsulated collection containing necrotic debris; amenable to drainage' },
        { term: 'step-up approach', definition: 'Minimally invasive interventions before surgery for infected necrosis' },
        { term: 'TIGAR-O', definition: 'Classification system for chronic pancreatitis etiology' },
        { term: 'fecal elastase', definition: 'Stool test for pancreatic exocrine function; <200 indicates insufficiency' },
        { term: 'Type 3c diabetes', definition: 'Diabetes due to pancreatic disease (pancreatogenic)' },
      ],
      clinicalNotes: 'Lipase magnitude does NOT correlate with severity - use clinical scores. Early (24-48h) enteral nutrition improves outcomes and does not require jejunal access. Delay intervention for necrosis until 4+ weeks unless clinical deterioration.',
    },
    4: {
      level: 4,
      summary: 'Acute pancreatitis management follows evidence-based algorithms emphasizing moderate fluid resuscitation, early enteral nutrition, and step-up approaches for necrosis. Genetic testing expands chronic pancreatitis diagnosis. Autoimmune pancreatitis requires differentiation from malignancy.',
      explanation: `## Advanced Pancreatitis Management

### Acute Pancreatitis - Evidence Update

**Fluid Resuscitation:**

*Traditional "aggressive" vs. moderate approach:*
- WATERFALL trial (2022): Aggressive fluids increased complications without benefit
- Current recommendation: Goal-directed moderate resuscitation
- LR preferred; caution with NS (hyperchloremic acidosis)

*Initial bolus:*
- 10 mL/kg if hypovolemic, 5 mL/kg if not
- Then 1.5 mL/kg/hr, reassess q6h

*Goals:*
- Urine output 0.5-1 mL/kg/hr
- Normalizing BUN
- Heart rate <120

**ERCP in Gallstone Pancreatitis:**

*Current indications:*
- Cholangitis: Urgent ERCP (<24h)
- Persistent biliary obstruction: Early ERCP
- No cholangitis, no obstruction: No role for routine ERCP

**Timing of Cholecystectomy:**

*Mild pancreatitis:*
- Same-admission cholecystectomy (PONCHO trial)
- Reduces recurrent biliary events

*Severe/necrotizing:*
- Delay until acute inflammation resolves
- Usually 6+ weeks

### Pancreatic Necrosis Management

**Step-Up Approach (Dutch Pancreatitis Study Group):**

1. **Maximal medical therapy** (antibiotics if infected)
2. **Percutaneous catheter drainage** (CT or US-guided)
3. **Endoscopic necrosectomy** (transgastric or transduodenal)
4. **Surgical necrosectomy** (video-assisted retroperitoneal debridement)

*Advantages:*
- Lower new-onset organ failure vs. primary necrosectomy
- Lower mortality in randomized trials
- Allow maturation of collection wall

**Timing:**
- Delay intervention until ≥4 weeks when possible
- Earlier if clinical deterioration despite antibiotics

**Endoscopic Transluminal Necrosectomy:**

*Technique:*
- EUS-guided transmural access
- Lumen-apposing metal stent (LAMS) placement
- Direct endoscopic necrosectomy (DEN)
- Multiple sessions often required

*LAMS advantages:*
- Maintain access for repeat debridement
- Larger diameter than plastic stents
- Comparable outcomes to surgery in selected patients

### Chronic Pancreatitis - Diagnostic Advances

**EUS Findings (Rosemont Criteria):**

*Major A criteria:*
- Hyperechoic foci with shadowing (stones)
- Main pancreatic duct (MPD) calculi

*Major B criteria:*
- Lobularity with honeycombing

*Minor criteria:*
- Hyperechoic strands
- Hyperechoic foci without shadowing
- Lobularity without honeycombing
- Cysts
- Dilated side branches
- MPD dilation
- Hyperechoic MPD margin
- Non-contiguous MPD

**Genetic Testing:**

*Indications:*
- Idiopathic chronic pancreatitis, especially early onset
- Recurrent acute pancreatitis without clear cause
- Family history

*Key Genes:*
- **PRSS1**: Cationic trypsinogen; autosomal dominant hereditary pancreatitis
- **SPINK1**: Serine protease inhibitor; modifier gene
- **CFTR**: CF gene; heterozygotes at risk
- **CTRC**: Chymotrypsin C; trypsin degradation

**Total Pancreatectomy with Islet Autotransplantation (TPIAT):**
- For intractable pain in chronic pancreatitis
- Islets harvested and infused into portal vein
- Goal: Prevent/minimize post-pancreatectomy diabetes
- ~30% insulin independence, many have reduced insulin needs

### Autoimmune Pancreatitis

**Type 1 (IgG4-Related Disease):**
- Elevated serum IgG4 (>2x normal)
- Systemic disease: Sclerosing cholangitis, sialadenitis, retroperitoneal fibrosis
- Histology: Lymphoplasmacytic infiltrate, storiform fibrosis, obliterative phlebitis
- Responds dramatically to steroids

**Type 2 (Idiopathic Duct-Centric):**
- Normal IgG4
- Isolated pancreatic involvement
- Associated with IBD (~30%)
- Histology: Granulocytic epithelial lesions (GEL)
- Also steroid-responsive

**Diagnosis (International Consensus Criteria):**

*Level 1 evidence - any one:*
- Typical imaging + serum IgG4 >2x ULN
- Typical imaging + other organ involvement
- Histology showing LPSP

*Level 2 evidence requires combination of criteria*

**Critical:** Differentiate from pancreatic cancer
- If doubt, biopsy before steroids
- Short-term steroid trial if high AIP probability

### Pancreatic Exocrine Insufficiency

**Enzyme Replacement Therapy:**

*Dosing:*
- 40,000-50,000 lipase units per meal
- 20,000-25,000 per snack
- Take with first bite of food

*Optimization:*
- If inadequate response: Increase dose, add PPI
- PPI prevents acid denaturation of enzymes

*Monitoring:*
- Symptom improvement
- Weight stabilization
- Fecal elastase may not change despite effective therapy

### Complications of Chronic Pancreatitis

**Pseudocyst:**
- If symptomatic or enlarging: EUS-guided drainage
- Cystogastrostomy or cystoduodenostomy

**Biliary stricture:**
- Distal CBD stricture from chronic inflammation
- ERCP with stenting
- Surgery if refractory

**Duodenal obstruction:**
- Gastrojejunostomy

**Splenic vein thrombosis:**
- Left-sided portal hypertension
- Gastric varices
- Splenectomy if bleeding

**Pancreatic cancer:**
- Increased risk (~4-5% lifetime)
- Surveillance imaging controversial`,
      keyTerms: [
        { term: 'WATERFALL trial', definition: 'RCT showing aggressive IV fluids increase complications in acute pancreatitis' },
        { term: 'LAMS', definition: 'Lumen-apposing metal stent; facilitates endoscopic necrosectomy and drainage' },
        { term: 'Rosemont criteria', definition: 'EUS-based diagnostic criteria for chronic pancreatitis' },
        { term: 'PRSS1', definition: 'Cationic trypsinogen gene; mutations cause hereditary pancreatitis' },
        { term: 'TPIAT', definition: 'Total pancreatectomy with islet autotransplantation; option for intractable chronic pancreatitis' },
        { term: 'IgG4-related disease', definition: 'Systemic fibroinflammatory condition; Type 1 AIP is a manifestation' },
      ],
      clinicalNotes: 'WATERFALL trial changed practice - avoid aggressive fluids; use goal-directed moderate resuscitation. LAMS have revolutionized management of walled-off necrosis. Always consider malignancy before diagnosing autoimmune pancreatitis - the "trial of steroids" can delay cancer diagnosis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pancreatitis management integrates severity prediction, personalized fluid strategies, and minimally invasive interventions. Research frontiers include targeted therapies for necrotizing pancreatitis, precision approaches to chronic pancreatitis, and early biomarkers for disease progression.',
      explanation: `## Pancreatitis: Evidence-Based Practice and Frontiers

### Acute Pancreatitis - Quality Care Pathways

**Initial Assessment (first 24 hours):**
1. Confirm diagnosis (2 of 3 criteria)
2. Determine etiology (gallstones, alcohol, other)
3. Assess severity (BISAP, SIRS, organ failure)
4. Initiate fluid resuscitation (goal-directed)
5. Pain management
6. Order RUQ ultrasound

**Day 1-3 Goals:**
- Adequate resuscitation (avoid both under- and over-resuscitation)
- Initiate early oral/enteral feeding when tolerated
- Identify gallstones → plan cholecystectomy
- Monitor for deterioration

**Persistent Organ Failure Protocol:**
- ICU level care
- Consider CT at 72-96 hours to assess for necrosis
- Enteral nutrition (jejunal if necessary)
- Discuss with pancreatitis center if necrotizing

### Predicting Severe Disease

**Early Biomarkers:**

| Biomarker | Cutoff | Interpretation |
|-----------|--------|----------------|
| BUN rise at 24h | Any increase | Associated with worse outcomes |
| Hematocrit | Rise despite fluids | Inadequate resuscitation |
| CRP at 48h | >150 mg/L | Suggests necrotizing pancreatitis |
| Procalcitonin | Elevated | Infection/systemic inflammation |

**Imaging-Based:**
- CT Severity Index (Balthazar)
- Extrapancreatic necrosis independently predicts worse outcomes

### Management of Pancreatic Fluid Collections

**Intervention Indications:**
- Symptomatic (pain, obstruction, early satiety)
- Infected necrosis
- Disconnected pancreatic duct syndrome
- Progressive enlargement

**Approach Selection:**

| Collection Type | Timing | Preferred Approach |
|-----------------|--------|-------------------|
| Acute peripancreatic fluid | <4 weeks | Observation (usually resolves) |
| Acute necrotic collection | <4 weeks | Percutaneous drainage if infected |
| Pseudocyst | >4 weeks | EUS-guided drainage |
| Walled-off necrosis | >4 weeks | EUS-guided LAMS + DEN |

**Disconnected Pancreatic Duct Syndrome:**
- Complete transection of main duct
- Leads to persistent fluid collection
- Long-term transmural stent vs. surgery

### Infected Necrosis - Step-Up Approach Details

**PANTER Trial (2010):**
- Step-up vs. open necrosectomy
- Step-up: Lower new-onset organ failure, lower incisional hernia
- No mortality difference

**TENSION Trial (2018):**
- Immediate drainage vs. step-up
- Step-up had fewer interventions, similar outcomes
- Supports delaying intervention

**MISER Trial (2020):**
- Minimally invasive surgical necrosectomy vs. endoscopic
- Similar outcomes
- Endoscopic: Shorter LOS, no difference in cost

**Current Algorithm:**
1. Antibiotics (if infected)
2. Wait until >4 weeks if stable
3. Percutaneous drainage (if accessible, especially posterior collections)
4. Endoscopic transluminal drainage/necrosectomy
5. VARD or surgical necrosectomy for failures

### Chronic Pancreatitis - Precision Medicine

**Pain Management Evolution:**

*Endoscopic therapy:*
- ESWL for stones >5mm
- ERCP for duct clearance
- Stent for dominant stricture
- Limited evidence for long-term benefit; may delay surgery

*Surgical options:*
- Lateral pancreaticojejunostomy (Puestow) for dilated duct
- Duodenum-preserving pancreatic head resection (Beger, Frey)
- Pancreaticoduodenectomy for head mass
- TPIAT for diffuse disease

*CaQTDM Trial (ongoing):*
- Early surgery vs. endoscopy-first approach
- Investigating whether early surgery improves outcomes

**Genetic Implications:**

*PRSS1 mutations:*
- 80% lifetime pancreatitis risk
- Higher pancreatic cancer risk (~40% lifetime)
- Consider TPIAT early
- Family screening

*SPINK1/CFTR:*
- Modifier genes
- Lower penetrance
- May guide therapy as research evolves

### Autoimmune Pancreatitis - Diagnostic Algorithm

**HISORt Criteria for Type 1:**
- **H**istology: LPSP
- **I**maging: Diffuse enlargement, delayed enhancement, capsule-like rim
- **S**erology: IgG4 >2x ULN
- **O**ther organ involvement
- **R**esponse **t**o steroids

**Treatment:**
- Prednisone 40 mg daily x 4 weeks
- Taper over 8-12 weeks
- Maintenance (azathioprine, rituximab) if relapse
- IgG4 levels may guide therapy

### Emerging Therapies and Research

**Targeting Inflammation:**
- Pentoxifylline (TNF inhibitor): Mixed trial results
- Anti-cytokine therapies: Under investigation
- Protease inhibitors: Not proven effective

**Gut Microbiome:**
- Bacterial translocation drives infection
- Probiotic prophylaxis: PROPATRIA showed harm
- Selective decontamination: No clear benefit

**Biomarkers:**
- Circulating cell-free DNA
- MicroRNAs
- Machine learning prediction models

**Nutrition Research:**
- Immunonutrition (glutamine, arginine, omega-3): Mixed results
- Timing and composition optimization ongoing

### Quality Metrics

**Process Measures:**
- CT timing (not early routine scanning)
- Enteral nutrition within 48h
- Cholecystectomy during index admission (mild gallstone pancreatitis)
- ERCP for cholangitis within 24h

**Outcome Measures:**
- ICU admission rate
- Mortality
- Intervention rate for necrosis
- Readmission rate

### Centers of Excellence

**High-volume centers:**
- Better outcomes for necrotizing pancreatitis
- Access to multidisciplinary team (interventional radiology, advanced endoscopy, HPB surgery)
- Consider transfer for severe disease`,
      keyTerms: [
        { term: 'PANTER trial', definition: 'Landmark study showing step-up approach superior to open necrosectomy' },
        { term: 'TENSION trial', definition: 'Study supporting delayed intervention for infected necrosis' },
        { term: 'VARD', definition: 'Video-assisted retroperitoneal debridement; minimally invasive surgical necrosectomy' },
        { term: 'disconnected duct syndrome', definition: 'Complete pancreatic duct disruption leading to isolated viable pancreatic tissue' },
        { term: 'HISORt criteria', definition: 'Diagnostic criteria for autoimmune pancreatitis incorporating histology, imaging, serology, other organs, and response to steroids' },
        { term: 'lateral pancreaticojejunostomy', definition: 'Puestow procedure; surgical drainage for chronic pancreatitis with dilated duct' },
      ],
      clinicalNotes: `Key clinical pearls:
1. WATERFALL changed practice: Moderate, goal-directed fluids; avoid aggressive resuscitation
2. Early enteral nutrition is safe and beneficial - don't withhold food waiting for "pancreatic rest"
3. ERCP only for gallstone pancreatitis with cholangitis or persistent biliary obstruction
4. Same-admission cholecystectomy for mild gallstone pancreatitis prevents recurrence (PONCHO)
5. Delay intervention for necrosis until ≥4 weeks (step-up approach) unless clinical deterioration
6. LAMS with direct endoscopic necrosectomy is first-line for walled-off necrosis at experienced centers
7. Autoimmune pancreatitis: Always rule out cancer before starting steroids
8. Genetic testing indicated for idiopathic pancreatitis, especially early onset or family history
9. TPIAT can prevent/reduce post-pancreatectomy diabetes in chronic pancreatitis
10. Transfer severe/necrotizing cases to high-volume centers - outcomes are better`,
    },
  },

  media: [
    {
      id: 'pancreas-anatomy',
      type: 'diagram',
      filename: 'pancreas-anatomy.svg',
      title: 'Pancreas Anatomy',
      description: 'Pancreatic structure including ducts and surrounding organs',
    },
    {
      id: 'atlanta-classification',
      type: 'diagram',
      filename: 'atlanta-fluid-collections.svg',
      title: 'Atlanta Classification',
      description: 'Types of pancreatic fluid collections and their management',
    },
  ],

  citations: [
    {
      id: 'aga-acute-pancreatitis',
      type: 'article',
      title: 'AGA Clinical Practice Update on Management of Acute Pancreatitis',
      source: 'Gastroenterology',
    },
    {
      id: 'revised-atlanta',
      type: 'article',
      title: 'Revised Atlanta Classification of Acute Pancreatitis',
      source: 'Gut',
    },
    {
      id: 'panter-trial',
      type: 'article',
      title: 'Step-up Approach vs Open Necrosectomy in Severe Pancreatitis (PANTER Trial)',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gallbladder-disease', targetType: 'condition', relationship: 'related', label: 'Gallbladder Disease' },
    { targetId: 'condition-gi-cancers', targetType: 'condition', relationship: 'related', label: 'Pancreatic Cancer' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'ERCP' },
  ],

  tags: {
    systems: ['digestive', 'endocrine'],
    topics: ['pathology', 'gastroenterology', 'surgery', 'critical care'],
    keywords: ['pancreatitis', 'acute pancreatitis', 'chronic pancreatitis', 'necrotizing', 'pseudocyst', 'ERCP'],
    clinicalRelevance: 'critical',
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

export default pancreatitis;
