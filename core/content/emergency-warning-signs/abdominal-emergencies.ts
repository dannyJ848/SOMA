/**
 * Abdominal Emergencies - Warning Signs and Response
 *
 * Comprehensive content on recognizing abdominal emergencies including
 * appendicitis, bowel obstruction, GI bleeding, and acute abdomen.
 */

import { EducationalContent } from '../types';

export const abdominalEmergencies: EducationalContent = {
  id: 'emergency-abdominal-warning-signs',
  type: 'condition',
  name: 'Abdominal Emergency Warning Signs',
  alternateNames: ['Stomach Emergency', 'Belly Pain Emergency', 'Acute Abdomen', 'GI Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'Belly pain can sometimes be a sign of something serious that needs quick medical care. Knowing when belly pain is an emergency can save your life.',
      explanation: `## When Belly Pain Is an Emergency

Everyone gets stomach aches sometimes. But some belly pain means something serious is happening inside that needs a doctor right away.

**Warning signs that belly pain is an emergency:**

1. **Very severe pain** - Pain so bad you can't stand up straight or walk normally

2. **Belly is hard and hurts when touched** - Your belly feels tight like a drum and is very tender

3. **Blood in vomit or stool:**
   - Vomiting blood (red or looks like coffee grounds)
   - Black, tarry stool
   - Bright red blood in stool

4. **Signs of serious illness with belly pain:**
   - High fever
   - Can't keep anything down (severe vomiting)
   - Haven't pooped or passed gas for a day or more
   - Feeling faint or dizzy
   - Pain that started around the belly button and moved to the lower right side

5. **Belly getting bigger or more swollen**

## Common Belly Emergencies

**Appendicitis** - Your appendix (a small pouch in your gut) gets infected
- Pain often starts around belly button, then moves to lower right
- Hurts more when walking or moving
- Low fever, nausea

**Food poisoning** - Usually not an emergency, but can be if:
- You can't keep any fluids down
- There's blood in vomit or stool
- High fever
- Signs of dehydration

**Bowel obstruction** - Something blocking your intestines
- Severe cramping pain
- Belly swelling
- Can't pass gas or have bowel movement
- Vomiting

**Bleeding inside** - From ulcer, injury, or other causes
- Vomiting blood
- Black tarry stools
- Feeling weak, dizzy, or faint
- Fast heartbeat

## What To Do

**Call 911 if:**
- Severe pain and you can't stand up straight
- Vomiting blood or have bloody/black stool
- Belly is hard and extremely tender
- Recent injury to the belly
- Pregnant and having severe pain

**Go to the ER if:**
- Fever with belly pain
- Pain that keeps getting worse
- Can't keep fluids down for many hours
- Pain in lower right side
- Haven't had a bowel movement in days

**See a doctor soon if:**
- Mild pain that won't go away
- Upset stomach that lasts more than a few days
- Changes in your bowel habits

**While waiting for help:**
- Don't eat or drink anything
- Don't take pain medicine (it can hide important symptoms)
- Lie in a comfortable position
- Note when the pain started and what it feels like`,
      keyTerms: [
        { term: 'appendix', definition: 'A small finger-shaped pouch attached to your large intestine that can get infected', pronunciation: 'ah-PEN-diks' },
        { term: 'bowel obstruction', definition: 'When something blocks your intestines so food and waste can\'t pass through' },
        { term: 'ulcer', definition: 'A sore in the lining of your stomach or intestine that can bleed' },
        { term: 'dehydration', definition: 'When your body doesn\'t have enough water, often from vomiting or diarrhea' },
      ],
      analogies: [
        'Your appendix is like a small dead-end street in your gut - when things get stuck there and infected, it needs to be removed.',
        'A bowel obstruction is like a clog in a pipe - nothing can get through and pressure builds up.',
        'Black, tarry stool is like coffee grounds because the blood has been digested as it traveled through your gut.',
      ],
      examples: [
        'A teenager has pain that started around their belly button and is now in their lower right side with low fever - this could be appendicitis and needs to be checked right away.',
        'An adult vomits something that looks like coffee grounds and feels weak and dizzy - this is bleeding in the stomach and needs 911.',
      ],
    },

    2: {
      level: 2,
      summary: 'Abdominal emergencies range from appendicitis to GI bleeding to bowel obstruction. Recognizing the location, character, and associated symptoms of abdominal pain helps determine when emergency care is needed.',
      explanation: `## Understanding Abdominal Pain

The abdomen contains many organs, and pain can come from any of them. The location and type of pain provide important clues about what's wrong.

### Abdominal Quadrants

**Right Upper Quadrant (RUQ):**
- Liver, gallbladder, right kidney
- Common emergencies: Cholecystitis, hepatitis

**Left Upper Quadrant (LUQ):**
- Spleen, stomach, left kidney
- Common emergencies: Splenic injury, gastric problems

**Right Lower Quadrant (RLQ):**
- Appendix, right ovary (females)
- Common emergencies: Appendicitis, ovarian torsion

**Left Lower Quadrant (LLQ):**
- Sigmoid colon, left ovary (females)
- Common emergencies: Diverticulitis, ovarian torsion

**Diffuse/Generalized:**
- Bowel obstruction, peritonitis, mesenteric ischemia

### Pain Characteristics

**Visceral pain (from organs):**
- Dull, crampy, poorly localized
- Often midline
- Associated with nausea, sweating

**Parietal/somatic pain (from peritoneum):**
- Sharp, well-localized
- Worsened by movement
- Indicates more serious inflammation

**Referred pain:**
- Felt in a different location than the problem
- Examples: Gallbladder → right shoulder; Spleen → left shoulder

### Appendicitis

**Pathophysiology:** Obstruction of appendix → bacterial overgrowth → inflammation → potential rupture

**Classic presentation:**
1. Periumbilical pain (first 12-24 hours)
2. Migrates to RLQ (McBurney's point)
3. Anorexia, nausea, low-grade fever
4. Worsens with movement, coughing

**Atypical presentations:**
- Retrocecal appendix: Back or flank pain
- Pregnant patients: Higher location
- Elderly: Muted symptoms, higher perforation rate

**Signs on examination:**
- RLQ tenderness and guarding
- Rovsing sign: RLQ pain with LLQ palpation
- Psoas sign: Pain with right hip extension
- Obturator sign: Pain with internal rotation of flexed hip

### Cholecystitis (Gallbladder Inflammation)

**Risk factors (4 F's):** Female, Forty, Fertile, Fat (oversimplified but memorable)

**Symptoms:**
- RUQ pain, often after fatty meal
- Pain radiating to right shoulder or back
- Nausea, vomiting
- Fever if infected

**Murphy's sign:** Inspiratory arrest during RUQ palpation

### Gastrointestinal Bleeding

**Upper GI bleeding (above ligament of Treitz):**
- Hematemesis (vomiting blood)
- Coffee-ground emesis
- Melena (black, tarry stool)
- Causes: Peptic ulcers, varices, Mallory-Weiss tears

**Lower GI bleeding (below ligament of Treitz):**
- Hematochezia (bright red blood per rectum)
- Causes: Diverticulosis, hemorrhoids, cancer, IBD

**Signs of significant blood loss:**
- Tachycardia (heart rate >100)
- Hypotension (low blood pressure)
- Orthostatic changes (dizzy when standing)
- Pale skin, cool extremities
- Altered mental status

### Bowel Obstruction

**Types:**
- Small bowel obstruction (SBO): More common, often from adhesions
- Large bowel obstruction (LBO): Often from cancer

**Symptoms:**
- Crampy abdominal pain (comes in waves)
- Distension
- Nausea and vomiting (earlier in SBO)
- Constipation, obstipation (no gas either)

**Signs of strangulation (blood supply cut off):**
- Constant severe pain
- Fever
- Peritoneal signs (rigid abdomen, rebound tenderness)
- Signs of shock

### Acute Mesenteric Ischemia

"Pain out of proportion to exam" - severe pain with minimal findings on physical exam

**Risk factors:** Atrial fibrillation, heart failure, atherosclerosis

**Symptoms:**
- Severe abdominal pain
- Nausea, vomiting, diarrhea (may be bloody)
- Rapid deterioration

**High mortality if not treated quickly**

## When to Seek Different Levels of Care

| Call 911 | Emergency Room | Urgent Care/Doctor |
|----------|---------------|-------------------|
| Vomiting blood | Severe pain, can't stand | Mild persistent pain |
| Rigid abdomen | Fever with abdominal pain | Heartburn, indigestion |
| Signs of shock | RLQ pain (possible appendicitis) | Constipation |
| Severe pain after trauma | Unable to keep fluids down | Mild nausea |
| Black tarry stools | No BM or gas for days | Diarrhea without blood |`,
      keyTerms: [
        { term: 'peritonitis', definition: 'Inflammation of the peritoneum (lining of the abdomen), usually from infection or organ rupture', pronunciation: 'pair-ih-toh-NY-tis' },
        { term: 'hematemesis', definition: 'Vomiting blood, either bright red or looking like coffee grounds', pronunciation: 'hee-mah-TEM-eh-sis' },
        { term: 'melena', definition: 'Black, tarry, foul-smelling stool indicating upper GI bleeding', pronunciation: 'meh-LEE-nah' },
        { term: 'hematochezia', definition: 'Bright red blood in or on the stool, usually from lower GI source', pronunciation: 'hee-mat-oh-KEE-zee-ah' },
        { term: 'obstipation', definition: 'Complete inability to pass stool or gas, more severe than constipation' },
        { term: 'mesenteric ischemia', definition: 'Reduced blood flow to the intestines, causing severe pain and tissue death', pronunciation: 'mez-en-TAIR-ik iss-KEE-mee-ah' },
      ],
      analogies: [
        'Appendicitis is like a small pipe getting clogged and infected - it can burst if not removed in time.',
        'Peritonitis is like a contained infection breaking free and spreading throughout the abdomen.',
        'Bowel obstruction is like a kinked garden hose - nothing can flow through, and pressure builds up behind the block.',
      ],
      clinicalNotes: 'In elderly patients, abdominal emergencies often present atypically with muted pain and minimal fever. A rigid abdomen with severe pain suggests peritonitis until proven otherwise. "Pain out of proportion to exam" is a classic description of mesenteric ischemia.',
    },

    3: {
      level: 3,
      summary: 'Acute abdominal emergencies require systematic assessment using history, physical examination, and imaging to differentiate surgical from medical conditions. Understanding pathophysiology guides recognition and management of life-threatening conditions.',
      explanation: `## Systematic Approach to the Acute Abdomen

### History and Examination

**OPQRST for abdominal pain:**
- **O**nset: Sudden vs gradual
- **P**rovocation/Palliation: What makes it worse/better
- **Q**uality: Sharp, dull, crampy, burning
- **R**adiation: Where does it spread
- **S**everity: Scale 1-10
- **T**iming: Constant, intermittent, progression

**Associated symptoms:**
- Fever (infection, inflammation)
- Vomiting (timing relative to pain important)
- Bowel changes (diarrhea, constipation, blood)
- Urinary symptoms (kidney, bladder involvement)
- Gynecologic history (LMP, discharge, pregnancy)

**Physical examination:**
- Inspection: Distension, visible peristalsis, surgical scars
- Auscultation: Bowel sounds (hyperactive, hypoactive, absent)
- Percussion: Tympany (gas), dullness (fluid, mass)
- Palpation: Tenderness, guarding, rebound, masses

**Peritoneal signs:**
- Involuntary guarding
- Rebound tenderness
- Rigidity
- Positive cough test

### Appendicitis: Diagnosis and Management

**Clinical scoring (Alvarado Score):**
- Migration of pain (1)
- Anorexia (1)
- Nausea/vomiting (1)
- RLQ tenderness (2)
- Rebound (1)
- Elevated temperature (1)
- Leukocytosis (2)
- Left shift (1)

Score ≥7: High probability

**Imaging:**
- CT abdomen/pelvis: >95% sensitivity, specificity
- Ultrasound: First-line in children, pregnant women
- MRI: Alternative in pregnancy

**Management:**
- NPO, IV fluids, analgesia
- Antibiotics (cover gram-negatives and anaerobes)
- Surgery: Appendectomy (laparoscopic preferred)
- Non-operative management with antibiotics: Selected uncomplicated cases

### Cholecystitis

**Pathophysiology:**
- Cystic duct obstruction by stone
- Bile stasis → inflammation → bacterial superinfection
- Progression: Simple → gangrenous → perforation

**Tokyo Guidelines for diagnosis:**
- Local signs: Murphy's sign, RUQ mass/pain/tenderness
- Systemic signs: Fever, elevated WBC, elevated CRP
- Imaging: Wall thickening, pericholecystic fluid, sonographic Murphy's

**Complications:**
- Gangrenous cholecystitis
- Emphysematous cholecystitis (gas-forming organisms)
- Gallbladder perforation
- Cholangitis (infection in bile ducts)

**Charcot triad (cholangitis):** Fever, jaundice, RUQ pain
**Reynolds pentad (severe cholangitis):** + hypotension, altered mental status

### Small Bowel Obstruction

**Etiologies:**
- Adhesions (60% - most common, from prior surgery)
- Hernias (15%)
- Malignancy (15%)
- Crohn's disease
- Intussusception

**Classification:**
- Partial vs complete
- Simple vs strangulated

**Imaging findings (CT):**
- Dilated proximal bowel (>3cm small bowel)
- Decompressed distal bowel
- Transition point
- "Small bowel feces sign"

**Strangulation indicators:**
- Mesenteric edema
- Bowel wall thickening
- Decreased enhancement
- Mesenteric fluid
- Closed loop obstruction

**Management:**
- NPO, NG tube decompression
- IV fluids, electrolyte correction
- Serial exams
- Surgery if: Strangulation, complete obstruction, no improvement in 48-72h

### GI Bleeding: Risk Stratification

**Upper GI bleeding scores:**

**Glasgow-Blatchford Score (pre-endoscopy):**
- BUN, hemoglobin, systolic BP, pulse
- Melena, syncope, liver disease, heart failure
- Score 0: Very low risk, consider outpatient

**Rockall Score (post-endoscopy):**
- Age, shock, comorbidities
- Diagnosis, stigmata of recent hemorrhage
- Predicts mortality

**Management priorities:**
1. Resuscitation: IV access, fluids, transfusion if needed
2. Risk stratification
3. PPI infusion (high-dose for high-risk)
4. Endoscopy within 24 hours (12h if high-risk)
5. Treat underlying cause

**Variceal bleeding:**
- Octreotide/somatostatin analog
- Antibiotics (prevent SBP)
- Urgent endoscopy with banding
- Consider TIPS if refractory

### Acute Pancreatitis

**Etiologies (I GET SMASHED):**
- Idiopathic, Gallstones, Ethanol, Trauma, Steroids
- Mumps/Malignancy, Autoimmune, Scorpion sting, Hyperlipidemia/Hypercalcemia, ERCP, Drugs

**Diagnosis (2 of 3):**
- Characteristic pain (epigastric, radiating to back)
- Lipase >3x upper limit of normal
- Imaging findings

**Severity assessment (Revised Atlanta):**
- Mild: No organ failure, no local complications
- Moderate: Transient organ failure (<48h) or local complications
- Severe: Persistent organ failure (>48h)

**Ranson criteria, BISAP score:** Predict severity

**Management:**
- Aggressive fluid resuscitation (goal-directed)
- Analgesia
- Nutrition (early enteral if tolerated)
- Address underlying cause (cholecystectomy if gallstones)

### Acute Mesenteric Ischemia

**Types:**
- Arterial embolism (50%): Often from AFib
- Arterial thrombosis (25%): Atherosclerotic
- Venous thrombosis (5-15%): Hypercoagulable states
- Non-occlusive (20-30%): Low flow states (shock)

**Classic triad:**
- Severe abdominal pain
- Gut emptying (vomiting, diarrhea)
- Cardiac disease (source of embolus)

**Laboratory:**
- Elevated lactate (late finding)
- Metabolic acidosis
- Leukocytosis
- D-dimer often elevated

**CT angiography:** Test of choice
- Filling defect in mesenteric vessels
- Bowel wall changes (thickening, pneumatosis)
- Portal venous gas (ominous)

**Management:**
- Resuscitation
- Anticoagulation
- Surgical or endovascular revascularization
- Bowel resection if necrosis`,
      keyTerms: [
        { term: 'Alvarado score', definition: 'Clinical scoring system for diagnosing appendicitis based on symptoms, signs, and lab findings' },
        { term: 'Murphy sign', definition: 'Inspiratory arrest with RUQ palpation; suggestive of cholecystitis' },
        { term: 'Charcot triad', definition: 'Fever, jaundice, and RUQ pain indicating cholangitis' },
        { term: 'Reynolds pentad', definition: 'Charcot triad plus hypotension and altered mental status; indicates severe cholangitis' },
        { term: 'transition point', definition: 'Location in bowel where obstruction occurs, identified on imaging by change from dilated to collapsed bowel' },
        { term: 'pneumatosis intestinalis', definition: 'Gas within the bowel wall, concerning for ischemia or necrosis' },
      ],
      clinicalNotes: 'In suspected SBO, high NG output and complete obstipation suggest complete obstruction requiring surgery. Signs of strangulation (constant pain, fever, peritoneal signs) warrant urgent surgical exploration. In mesenteric ischemia, pain out of proportion to exam with elevated lactate and metabolic acidosis is a late finding - earlier CT angiography saves lives.',
    },

    4: {
      level: 4,
      summary: 'Advanced management of abdominal emergencies requires integration of clinical findings, imaging interpretation, laboratory studies, and evidence-based treatment protocols. Understanding surgical indications, resuscitation goals, and critical care principles is essential.',
      explanation: `## Advanced Imaging in Abdominal Emergencies

### CT Interpretation Principles

**Systematic approach:**
1. Review clinical indication and prior imaging
2. Bone windows: Spine, ribs, pelvis
3. Lung bases: Effusion, atelectasis, infiltrate
4. Solid organs: Liver, spleen, kidneys, pancreas
5. Hollow viscera: Bowel wall, distension, transition points
6. Mesentery and retroperitoneum
7. Vasculature: Aorta, mesenteric vessels
8. Free fluid, free air

**Key findings:**
- Free air: Hollow viscus perforation
- Portal venous gas: Bowel ischemia/necrosis
- Sentinel clot sign: Localized blood near bleeding source
- Whirl sign: Volvulus
- Target sign: Intussusception

### Damage Control Surgery

**Indications:**
- Hypothermia (<35°C)
- Coagulopathy (pH <7.2)
- Acidosis (base deficit >-8)
- Massive transfusion requirement
- Hemodynamic instability

**Principles:**
1. Source control (control bleeding, control contamination)
2. Temporary abdominal closure
3. ICU resuscitation
4. Planned return to OR (24-72h)

**Temporary closure techniques:**
- Negative pressure wound therapy
- Bogota bag
- Planned ventral hernia

### Massive Transfusion in GI Bleeding

**Definition:** >10 units pRBC in 24h or replacement of blood volume

**Protocol:**
- Activate massive transfusion protocol
- 1:1:1 ratio (pRBC:FFP:platelets)
- Goal: Hemoglobin >7-8 g/dL (higher if CAD)
- Correct coagulopathy
- Consider TXA (early, within 3 hours)

**Transfusion triggers in GI bleeding:**
- Restrictive: Hgb <7 g/dL target 7-9 (lower mortality)
- Liberal: Hgb <9 g/dL target 9-11 (consider for CAD, active bleeding)

### Endoscopic Interventions

**Upper GI bleeding:**
- Injection therapy (epinephrine)
- Thermal therapy (heater probe, APC)
- Mechanical therapy (clips, bands)
- Combination therapy most effective

**Stigmata of recent hemorrhage (Forrest classification):**
- Ia: Spurting (high risk)
- Ib: Oozing (high risk)
- IIa: Visible vessel (high risk)
- IIb: Adherent clot (intermediate)
- IIc: Flat spot (low risk)
- III: Clean base (low risk)

**When to consider interventional radiology:**
- Endoscopy fails to control bleeding
- Massive bleeding precluding endoscopy
- Hemodynamically unstable despite resuscitation

### Surgical Decision-Making

**Appendicitis complications:**

| Presentation | Management |
|-------------|------------|
| Uncomplicated | Laparoscopic appendectomy or antibiotics |
| Perforated with abscess | Antibiotics + drainage → interval appendectomy |
| Perforated with diffuse peritonitis | Emergent surgery |

**Cholecystitis timing:**
- Early cholecystectomy (within 72h) preferred
- Decreased complications, shorter hospital stay
- If high surgical risk: Percutaneous cholecystostomy

**SBO management algorithm:**
1. Assess for strangulation → surgery
2. Complete obstruction → surgery
3. Partial obstruction → trial of conservative management
4. No improvement 48-72h → surgery or water-soluble contrast challenge

### Critical Care Considerations

**Abdominal compartment syndrome:**
- Sustained IAP >20 mmHg with organ dysfunction
- Causes: Massive resuscitation, bowel edema, hemorrhage
- Measurement: Bladder pressure
- Treatment: Decompressive laparotomy

**Grade:**
- I: 12-15 mmHg
- II: 16-20 mmHg
- III: 21-25 mmHg
- IV: >25 mmHg

**Open abdomen management:**
- Negative pressure wound therapy
- Serial abdominal exams
- Goal: Primary fascial closure
- Enteral nutrition when possible

### Acute Mesenteric Ischemia: Definitive Management

**Arterial embolism:**
- Anticoagulation
- Surgical embolectomy or endovascular thrombectomy
- Second-look laparotomy (24-48h)
- Assess bowel viability

**Arterial thrombosis:**
- Often requires bypass (SMA to aorta or iliac)
- Endovascular options emerging

**Venous thrombosis:**
- Anticoagulation primary treatment
- Surgery only if peritoneal signs

**Non-occlusive:**
- Treat underlying cause (optimize cardiac output)
- Vasodilators (papaverine infusion)
- Surgery if peritoneal signs

**Bowel viability assessment:**
- Color, peristalsis, bleeding on cut edge
- Doppler assessment
- Fluorescein angiography
- If questionable: Planned second-look

### Special Populations

**Elderly:**
- Diminished pain perception
- Delayed presentation
- Higher rates of complicated appendicitis, ischemia
- Increased mortality

**Immunocompromised:**
- Neutropenic enterocolitis (typhlitis)
- CMV colitis
- Opportunistic infections
- Diminished inflammatory response masks severity

**Post-transplant:**
- Rejection can mimic surgical abdomen
- CMV, EBV-related complications
- High index of suspicion for perforation`,
      keyTerms: [
        { term: 'damage control surgery', definition: 'Abbreviated surgical approach focusing on hemorrhage and contamination control with delayed definitive repair' },
        { term: 'abdominal compartment syndrome', definition: 'Sustained IAP >20 mmHg with new organ dysfunction; requires decompressive laparotomy' },
        { term: 'Forrest classification', definition: 'Endoscopic classification of peptic ulcer bleeding risk based on stigmata of recent hemorrhage' },
        { term: 'second-look laparotomy', definition: 'Planned reoperation to reassess bowel viability after mesenteric ischemia' },
        { term: 'intra-abdominal pressure (IAP)', definition: 'Pressure within the abdominal cavity; measured via bladder' },
        { term: 'typhlitis', definition: 'Neutropenic enterocolitis; inflammation of the cecum in immunocompromised patients' },
      ],
      clinicalNotes: 'In damage control surgery, the goal is abbreviated operation (<60 min) for source control, followed by ICU resuscitation before definitive repair. For GI bleeding, restrictive transfusion (Hgb goal 7-9) showed lower mortality than liberal transfusion. Early cholecystectomy within 72 hours is associated with better outcomes than delayed surgery.',
    },

    5: {
      level: 5,
      summary: 'Expert management of abdominal emergencies integrates current evidence, advanced techniques, quality metrics, and systems-based approaches to optimize outcomes. Understanding emerging therapies and evolving surgical paradigms is essential for contemporary practice.',
      explanation: `## Evidence-Based Updates in Abdominal Emergencies

### Appendicitis: Evolving Management

**Antibiotics-first approach:**

**APPAC Trial (2015):**
- Uncomplicated appendicitis: Antibiotics vs surgery
- 73% success at 1 year with antibiotics
- 39% recurrence at 5 years
- Antibiotics offer option for shared decision-making

**CODA Trial (2020):**
- Larger US trial confirming antibiotic option
- 29% appendectomy rate within 90 days
- Appendicolith associated with higher failure rate

**Current practice:**
- Surgery remains standard for complicated appendicitis
- Antibiotics reasonable option in uncomplicated cases
- Patient preference plays significant role
- Appendicolith: Consider surgery

### Acute Pancreatitis: Contemporary Management

**Fluid resuscitation:**
- WATERFALL Trial (2022): LR superior to NS
- Aggressive early fluids (250-500 mL/hr) with frequent reassessment
- Goal-directed resuscitation preferred

**Nutrition:**
- Early enteral nutrition (within 24-48h) preferred
- NG feeding non-inferior to NJ in PYTHON trial
- Oral diet as tolerated in mild pancreatitis

**Infected necrosis management:**
- Step-up approach: Antibiotics → percutaneous drainage → minimally invasive necrosectomy → open surgery
- PENGUIN Trial, PANTER Trial: Endoscopic/minimally invasive superior to open necrosectomy
- Delay intervention if possible (>4 weeks allows better demarcation)

**Severe pancreatitis:**
- ICU care for organ failure
- Multidisciplinary approach
- Consider transfer to high-volume center

### GI Bleeding: Quality Metrics and Outcomes

**Time to endoscopy:**
- Very urgent (<6h) vs urgent (6-24h)
- Most studies: No benefit to <6h vs 6-24h
- Exception: Hemodynamically unstable varices

**Prokinetics pre-endoscopy:**
- Erythromycin or metoclopramide
- Improves visualization
- May reduce need for second endoscopy

**Radioembolization and TIPS:**
- Trans-arterial embolization for refractory bleeding
- TIPS for refractory variceal bleeding
- Early TIPS in high-risk varices (HVPG >20, Child C) - improved survival

### Bowel Obstruction: Predictive Models

**Water-soluble contrast challenge:**
- Gastrografin challenge for adhesive SBO
- If contrast in colon at 24h → likely to resolve
- Accelerates resolution and reduces need for surgery
- Diagnostic and therapeutic

**CT predictors of strangulation:**
- Closed-loop obstruction
- Mesenteric edema/haziness
- Reduced bowel wall enhancement
- Serrated beak sign
- Whirl sign
- Free fluid

**Small bowel obstruction score:**
- Emerging prediction tools incorporating clinical and imaging features
- Guide surgical timing

### Mesenteric Ischemia: Endovascular Revolution

**Endovascular first approach:**
- SMA stenting for thrombotic occlusion
- Aspiration thrombectomy for embolic
- Thrombolysis (catheter-directed)
- Hybrid approaches (endovascular + surgical)

**Advantages:**
- Less physiologic stress
- Can treat concurrent cardiac disease
- Bridge to surgery if needed

**Limitations:**
- Cannot assess bowel viability
- May still need laparotomy for necrotic bowel
- Expertise not universally available

### Trauma and Abdominal Emergencies

**Non-operative management (NOM) of solid organ injury:**

**Liver:**
- Grade I-III: NOM in hemodynamically stable
- Grade IV-V: Selective NOM with angioembolization
- Surgery for hemodynamic instability

**Spleen:**
- High-grade injuries with blush → angioembolization
- Immunocompetent adults: Reasonable to attempt NOM even high-grade
- Vaccination if splenectomy

**REBOA (Resuscitative Endovascular Balloon Occlusion of Aorta):**
- Temporary hemorrhage control
- Bridge to definitive management
- Zone I (supraceliac) or Zone III (infrarenal)
- Emerging evidence on outcomes

### Quality and Systems Improvement

**Appendicitis metrics:**
- Time to OR for uncomplicated appendicitis
- Perforation rates (delayed diagnosis indicator)
- Negative appendectomy rate (diagnostic accuracy)
- Laparoscopic vs open rates

**GI bleeding metrics:**
- Time to endoscopy
- Rebleeding rates
- Mortality
- Blood utilization

**Septic shock (including intra-abdominal sources):**
- Door-to-antibiotics time
- Early goal-directed therapy components
- Source control timing

### Emerging Technologies

**AI and imaging:**
- Automated detection of appendicitis, free air, obstruction
- Quantification of free fluid
- Texture analysis for characterization

**Enhanced recovery after surgery (ERAS):**
- Now applied to emergency surgery
- Reduced length of stay
- Earlier return of function

**Minimally invasive emergency surgery:**
- Laparoscopic appendectomy standard
- Laparoscopic cholecystectomy in acute setting
- Laparoscopic/endoscopic approaches to perforation, obstruction

### Future Directions

**Biomarkers:**
- I-FABP for intestinal ischemia
- Procalcitonin-guided therapy
- Lactate clearance for resuscitation adequacy

**Microbiome:**
- Role in acute pancreatitis severity
- Impact of antibiotics in appendicitis
- Fecal transplant for C. diff

**Precision medicine:**
- Genetic factors in pancreatitis severity
- Tailored antibiotic therapy based on cultures
- Risk stratification for NOM in trauma`,
      keyTerms: [
        { term: 'CODA trial', definition: 'Comparing Outcomes of antibiotic Drugs and Appendectomy trial; established antibiotics as reasonable option for uncomplicated appendicitis' },
        { term: 'step-up approach', definition: 'Graduated intervention strategy for infected pancreatic necrosis, starting with antibiotics and progressing to drainage then surgery as needed' },
        { term: 'REBOA', definition: 'Resuscitative Endovascular Balloon Occlusion of Aorta; temporary hemorrhage control in trauma' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; multimodal perioperative care pathway to accelerate recovery' },
        { term: 'I-FABP', definition: 'Intestinal Fatty Acid Binding Protein; biomarker for intestinal ischemia and damage' },
        { term: 'Gastrografin challenge', definition: 'Water-soluble contrast study in SBO; diagnostic and potentially therapeutic; predicts resolution' },
      ],
      clinicalNotes: `Expert-level considerations:

1. **Appendicitis:** Antibiotics-first approach is now a shared decision-making option. Presence of appendicolith predicts higher failure rate with conservative management. CT findings of perforation warrant surgery.

2. **Pancreatitis:** LR preferred over NS. Early enteral nutrition is key. Delay intervention for necrosis when possible (>4 weeks); step-up approach preferred when needed.

3. **GI bleeding:** Restrictive transfusion (Hgb 7-9) improves outcomes. Very early endoscopy (<6h) generally not superior to urgent (6-24h) except for unstable variceal bleeding. Consider early TIPS for high-risk varices.

4. **Mesenteric ischemia:** Endovascular-first approach is emerging for arterial ischemia. Venous thrombosis is primarily medical management. Non-occlusive requires treatment of underlying cause.

5. **Systems approach:** Time to intervention matters. Early cholecystectomy, protocolized SBO management, and standardized care pathways improve outcomes.`,
    },
  },

  media: [
    {
      id: 'abdominal-quadrants',
      type: 'diagram',
      filename: 'abdominal-quadrants.svg',
      title: 'Abdominal Quadrants and Organs',
      description: 'Anatomical diagram showing abdominal quadrants and typical pain locations',
    },
    {
      id: 'appendicitis-signs',
      type: 'diagram',
      filename: 'appendicitis-signs.svg',
      title: 'Appendicitis Physical Examination',
      description: 'Demonstration of physical examination signs for appendicitis',
    },
    {
      id: 'gi-bleeding-algorithm',
      type: 'diagram',
      filename: 'gi-bleeding-algorithm.svg',
      title: 'GI Bleeding Management Algorithm',
      description: 'Flowchart for managing upper and lower GI bleeding',
    },
  ],

  citations: [
    {
      id: 'eastern-trauma-guidelines',
      type: 'article',
      title: 'Eastern Association for the Surgery of Trauma Practice Management Guidelines',
      source: 'EAST',
      url: 'https://www.east.org/education-career-development/practice-management-guidelines',
      accessedDate: '2026-01-24',
    },
    {
      id: 'aga-gi-bleeding-guidelines',
      type: 'article',
      title: 'AGA Clinical Practice Guidelines on Management of Gastrointestinal Bleeding',
      source: 'American Gastroenterological Association',
      accessedDate: '2026-01-24',
    },
    {
      id: 'wses-guidelines',
      type: 'article',
      title: 'World Society of Emergency Surgery Guidelines',
      source: 'World Journal of Emergency Surgery',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'system-digestive', targetType: 'system', relationship: 'related', label: 'Digestive System' },
    { targetId: 'emergency-when-to-seek-care', targetType: 'topic', relationship: 'see-also', label: 'When to Seek Care' },
    { targetId: 'emergency-first-response', targetType: 'topic', relationship: 'see-also', label: 'First Response Actions' },
    { targetId: 'emergency-pediatric', targetType: 'topic', relationship: 'see-also', label: 'Pediatric Emergencies' },
  ],

  tags: {
    systems: ['digestive'],
    topics: ['emergency medicine', 'patient education', 'warning signs', 'surgery', 'gastroenterology'],
    keywords: ['appendicitis', 'cholecystitis', 'GI bleeding', 'bowel obstruction', 'pancreatitis', 'abdominal pain'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default abdominalEmergencies;
