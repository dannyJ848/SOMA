/**
 * Abdominal Pain Diagnostic Algorithm
 *
 * A comprehensive approach to evaluating abdominal pain, one of the most
 * common and challenging presentations in medicine due to the wide
 * differential diagnosis.
 */

import { DiagnosticAlgorithm } from '../types';

export const ABDOMINAL_PAIN_ALGORITHM: DiagnosticAlgorithm = {
  id: 'algorithm-abdominal-pain',
  name: 'Abdominal Pain Diagnostic Algorithm',
  alternateNames: ['Acute Abdomen Evaluation', 'Belly Pain Workup'],
  presentation: 'Abdominal Pain',
  icdCodes: ['R10.9', 'R10.0', 'R10.1', 'R10.2', 'R10.3', 'R10.4'],

  levels: {
    1: {
      level: 1,
      summary: 'Belly pain can have many causes. Doctors need to figure out if it is something that needs quick treatment or something less urgent.',
      explanation: `When your belly hurts, it could be something simple like a stomach bug or something more serious that needs surgery. Doctors ask lots of questions and do tests to find out what is wrong.

**Why Belly Pain Happens:**
Your belly has many organs - stomach, intestines, liver, gallbladder, appendix, and more. Pain can come from:
- Stomach problems (like an ulcer or stomach bug)
- Intestinal problems (like appendicitis or blocked intestines)
- Gallbladder problems (like gallstones)
- Kidney problems (like kidney stones)
- Problems with other organs

**What Doctors Look For:**
1. **Where does it hurt?** Different locations suggest different problems
2. **How did the pain start?** Sudden or gradual?
3. **What kind of pain?** Sharp, crampy, burning?
4. **What else is happening?** Fever, vomiting, diarrhea, no bowel movements?

**When to Get Help Right Away:**
- Very severe pain
- Pain that gets worse when you move or cough
- Belly is very hard or swollen
- Blood in vomit or stool
- High fever with belly pain
- Pain that started suddenly and is getting worse fast`,
      keyTerms: [
        { term: 'appendicitis', definition: 'When the appendix gets infected and swollen, causing pain usually in the lower right belly', pronunciation: 'uh-pen-dih-SY-tis' },
        { term: 'gallstones', definition: 'Hard pieces that form in the gallbladder and can cause pain, especially after eating fatty foods' },
        { term: 'ulcer', definition: 'A sore in the stomach or intestine lining that can cause burning pain' },
      ],
      analogies: [
        'Your belly is like a house with many rooms. When there is a problem, doctors try to figure out which room it is in.',
        'The appendix is like a little finger sticking off your intestine. When it gets infected, it can be very dangerous if not treated.',
      ],
      examples: [
        'A teenager with appendicitis might first feel pain around their belly button, then it moves to the lower right side.',
        'Someone with gallstones might feel pain in the upper right belly after eating a greasy meal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Abdominal pain evaluation uses location, character, and associated symptoms to narrow down the differential diagnosis and identify conditions requiring urgent surgical intervention.',
      explanation: `Abdominal pain is one of the most common complaints in medicine. The challenge is distinguishing benign causes from serious conditions that need urgent treatment.

**Initial Assessment:**
Doctors first determine if the patient is stable and if there are signs of a "surgical abdomen" - conditions that need emergency surgery.

**Location-Based Approach:**

**Right Upper Quadrant (RUQ):**
- Gallbladder disease (cholecystitis, biliary colic)
- Liver problems (hepatitis, abscess)
- Right kidney problems
- Pneumonia (can cause RUQ pain)

**Left Upper Quadrant (LUQ):**
- Spleen problems
- Stomach (gastritis, ulcer)
- Left kidney problems
- Heart attack (can present as LUQ pain)

**Right Lower Quadrant (RLQ):**
- Appendicitis (most important to rule out)
- Ovarian problems in women
- Ectopic pregnancy (life-threatening)
- Kidney stone passing down

**Left Lower Quadrant (LLQ):**
- Diverticulitis
- Ovarian problems in women
- Kidney stone
- Constipation

**Central/Diffuse:**
- Small bowel obstruction
- Gastroenteritis
- Early appendicitis
- Pancreatitis
- Abdominal aortic aneurysm (AAA)

**Key Questions:**
- **Onset**: Sudden (perforation, rupture, obstruction) vs. gradual (infection, inflammation)
- **Character**: Colicky/crampy (obstruction) vs. constant (inflammation, ischemia)
- **Radiation**: Back (pancreatitis, AAA), shoulder (diaphragm irritation), groin (kidney stone)
- **Associated symptoms**: Vomiting, diarrhea, constipation, fever, urinary symptoms

**Basic Tests:**
- Blood tests: CBC, metabolic panel, liver function, lipase
- Urine test: For infection or blood (kidney stones)
- Pregnancy test: Essential in women of reproductive age
- Imaging: X-ray, ultrasound, or CT scan depending on suspected diagnosis`,
      keyTerms: [
        { term: 'peritonitis', definition: 'Inflammation of the lining of the abdominal cavity, usually causing severe pain that worsens with movement', pronunciation: 'pair-ih-toe-NY-tis' },
        { term: 'cholecystitis', definition: 'Inflammation of the gallbladder, often caused by gallstones', pronunciation: 'koh-leh-sis-TY-tis' },
        { term: 'diverticulitis', definition: 'Infection of small pouches in the colon, causing left lower abdominal pain', pronunciation: 'dy-ver-tik-yoo-LY-tis' },
        { term: 'ectopic pregnancy', definition: 'A pregnancy growing outside the uterus, usually in a fallopian tube - a medical emergency' },
      ],
      analogies: [
        'Colicky pain is like a wave - it comes and goes. This often means something is blocked and trying to squeeze through.',
        'Peritonitis is like an alarm system - any movement sets off severe pain because the inflamed lining is very sensitive.',
      ],
    },
    3: {
      level: 3,
      summary: 'Abdominal pain evaluation integrates anatomical localization, pathophysiological mechanisms, and targeted diagnostic testing to differentiate surgical emergencies from medical conditions requiring varying levels of intervention.',
      explanation: `## Systematic Approach to Abdominal Pain

### Initial Stabilization
- Assess ABCs, hemodynamic stability
- IV access, fluid resuscitation if needed
- NPO (nothing by mouth) until surgical evaluation if indicated
- Pain control (does not mask peritoneal signs in modern practice)

### History - Key Elements

**Pain Characteristics (OPQRST):**
- Onset: Sudden (perforation, rupture, vascular) vs. gradual (inflammatory)
- Provocation: Worse with movement (peritonitis), better with leaning forward (pancreatitis)
- Quality: Colicky (obstruction, renal colic), constant (inflammation, ischemia), burning (PUD)
- Radiation: Back (pancreatitis, AAA), shoulder (diaphragm), groin (ureteral)
- Severity: Severe out of proportion to exam (mesenteric ischemia)
- Timing: Duration, progression, episodic vs. constant

**Associated Symptoms:**
- GI: Nausea, vomiting (timing, contents), diarrhea, constipation, obstipation
- Urinary: Dysuria, frequency, hematuria
- Gynecologic: LMP, vaginal bleeding/discharge, pregnancy possible?
- Constitutional: Fever, chills, weight loss, anorexia

### Physical Examination Focus

**Inspection:**
- Distension (obstruction, ascites)
- Surgical scars (adhesions)
- Visible peristalsis (obstruction)
- Ecchymosis: Grey-Turner (flank), Cullen (periumbilical) - hemorrhagic pancreatitis

**Auscultation:**
- High-pitched/tinkling (early obstruction)
- Absent (ileus, late obstruction, peritonitis)

**Palpation:**
- Voluntary vs. involuntary guarding
- Rebound tenderness (peritoneal irritation)
- Murphy sign (cholecystitis)
- McBurney point tenderness (appendicitis)
- Rovsing sign (appendicitis)
- Psoas sign, obturator sign (retrocecal appendix)
- Pulsatile mass (AAA)

### Differential by Mechanism

**Inflammatory:**
- Appendicitis, cholecystitis, diverticulitis, pancreatitis
- Inflammatory bowel disease
- Pelvic inflammatory disease

**Obstructive:**
- Small bowel obstruction (SBO)
- Large bowel obstruction (LBO)
- Biliary colic
- Ureteral colic (kidney stones)

**Perforative:**
- Perforated peptic ulcer
- Perforated appendix
- Perforated diverticulum
- Boerhaave syndrome

**Vascular:**
- Mesenteric ischemia
- Ruptured abdominal aortic aneurysm
- Ruptured ectopic pregnancy

**Infectious:**
- Gastroenteritis
- Infectious colitis
- Spontaneous bacterial peritonitis

### Diagnostic Workup

**Laboratory:**
- CBC: Leukocytosis (infection/inflammation), anemia (bleeding)
- CMP: Electrolytes, renal function, glucose
- Liver panel: Hepatobiliary disease
- Lipase: Pancreatitis (>3x ULN diagnostic)
- Lactate: Elevated in ischemia, sepsis
- Urinalysis: Infection, hematuria (stones)
- Pregnancy test: Essential in reproductive-age women

**Imaging:**
| Suspected Diagnosis | First-line Imaging |
|---------------------|-------------------|
| Appendicitis | CT abdomen/pelvis (US in pregnancy/children) |
| Cholecystitis | RUQ ultrasound |
| Pancreatitis | CT if diagnosis unclear or complications suspected |
| SBO | CT with IV contrast |
| AAA | CT angiography (US if unstable) |
| Kidney stone | CT without contrast |
| Diverticulitis | CT abdomen/pelvis |`,
      keyTerms: [
        { term: 'Murphy sign', definition: 'Inspiratory arrest during RUQ palpation, positive in cholecystitis' },
        { term: 'McBurney point', definition: 'Point 1/3 distance from ASIS to umbilicus, classic location of appendicitis pain' },
        { term: 'Rovsing sign', definition: 'RLQ pain with palpation of LLQ, suggests appendicitis' },
        { term: 'mesenteric ischemia', definition: 'Inadequate blood flow to intestines, causing severe pain out of proportion to exam', pronunciation: 'mez-en-TAIR-ik' },
        { term: 'Grey-Turner sign', definition: 'Flank ecchymosis indicating retroperitoneal hemorrhage' },
      ],
      clinicalNotes: 'The classic teaching "pain out of proportion to exam" should raise concern for mesenteric ischemia. This diagnosis has high mortality if delayed.',
    },
    4: {
      level: 4,
      summary: 'Abdominal pain evaluation requires integration of clinical probability assessment, biomarker interpretation, and multimodal imaging while recognizing atypical presentations in special populations and applying evidence-based clinical decision tools.',
      explanation: `## Advanced Diagnostic Framework

### Pathophysiology of Abdominal Pain

**Pain Mechanisms:**
1. **Visceral pain**: From organ distension/inflammation, poorly localized, midline
2. **Parietal pain**: From peritoneal irritation, well-localized, lateralized
3. **Referred pain**: Shared embryologic origin (e.g., diaphragm to shoulder via C3-5)

**Pain Progression:**
- Appendicitis: Visceral (periumbilical) → Parietal (RLQ) as inflammation reaches peritoneum
- Understanding this helps time the pathology

### Clinical Decision Tools

**Alvarado Score (MANTRELS) for Appendicitis:**
- Migration of pain: +1
- Anorexia: +1
- Nausea/vomiting: +1
- Tenderness RLQ: +2
- Rebound tenderness: +1
- Elevated temperature: +1
- Leukocytosis: +2
- Shift left (neutrophilia): +1
- Score ≥7: High probability, consider surgery
- Score 5-6: Probable, imaging recommended
- Score ≤4: Low probability

**Ranson Criteria for Pancreatitis Severity (at admission):**
- Age >55
- WBC >16,000
- Glucose >200 mg/dL
- LDH >350 IU/L
- AST >250 IU/L
- Score ≥3 indicates severe pancreatitis

**BISAP Score (simpler pancreatitis severity):**
- BUN >25
- Impaired mental status
- SIRS criteria ≥2
- Age >60
- Pleural effusion

### Advanced Imaging Interpretation

**CT Findings by Condition:**

*Appendicitis:*
- Appendix >6mm diameter
- Periappendiceal fat stranding
- Appendicolith (increases perforation risk)
- Wall enhancement, abscess if perforated

*Small Bowel Obstruction:*
- Dilated proximal bowel (>3cm)
- Decompressed distal bowel
- "Small bowel feces sign"
- Transition point identification
- Closed-loop obstruction (C or U shape) - surgical emergency

*Mesenteric Ischemia:*
- Bowel wall thickening or paper-thin
- Pneumatosis intestinalis (air in bowel wall)
- Portal venous gas
- SMA/SMV thrombosis on CTA
- Free fluid

### Special Populations

**Elderly:**
- Atypical presentations common
- Less fever, less leukocytosis
- Higher mortality from delayed diagnosis
- Consider: AAA, mesenteric ischemia, malignancy
- Lower threshold for imaging

**Immunocompromised:**
- Muted inflammatory response
- Consider neutropenic enterocolitis (typhlitis)
- CMV colitis, fungal infections
- Spontaneous bacterial peritonitis in cirrhosis

**Pregnant:**
- Appendicitis: Most common non-obstetric surgical emergency
- Appendix location shifts cephalad with pregnancy
- Avoid ionizing radiation when possible (US first, then MRI)
- Ectopic pregnancy: Must rule out in first trimester
- HELLP syndrome, preeclampsia

**Post-operative:**
- Ileus vs. early SBO
- Anastomotic leak
- Abscess formation
- Bile leak after cholecystectomy

### Biomarker Deep Dive

**Lipase:**
- More specific than amylase for pancreatitis
- >3x ULN diagnostic
- Level does not correlate with severity
- Can be elevated in renal failure, DKA, bowel obstruction

**Lactate:**
- Elevated in hypoperfusion, sepsis, ischemia
- Mesenteric ischemia: Often markedly elevated
- Trend more valuable than single value
- Normal lactate does not exclude early ischemia

**Procalcitonin:**
- May help differentiate infectious from non-infectious causes
- Elevated in bacterial peritonitis
- May guide antibiotic duration

### Mimics and Pitfalls

**Extra-abdominal causes of abdominal pain:**
- Inferior MI (epigastric pain)
- Lower lobe pneumonia (upper abdominal pain)
- Diabetic ketoacidosis
- Porphyria
- Herpes zoster (before rash appears)
- Adrenal insufficiency
- Spinal pathology (radiculopathy)

**High-risk misses:**
1. Ectopic pregnancy (always test)
2. Mesenteric ischemia (pain out of proportion)
3. AAA rupture (back pain, hypotension)
4. Testicular torsion (may present as abdominal pain)
5. Early appendicitis (can have normal WBC and mild symptoms)`,
      keyTerms: [
        { term: 'Alvarado score', definition: 'Clinical decision tool for appendicitis probability using 8 criteria (MANTRELS)' },
        { term: 'transition point', definition: 'Location on CT where dilated bowel meets decompressed bowel in obstruction' },
        { term: 'pneumatosis intestinalis', definition: 'Air within bowel wall, concerning for ischemia or necrosis', pronunciation: 'new-mah-TOE-sis in-tes-tin-AL-is' },
        { term: 'closed-loop obstruction', definition: 'Bowel obstruction with two points of obstruction, creating a trapped segment with high risk of ischemia' },
        { term: 'HELLP syndrome', definition: 'Hemolysis, Elevated Liver enzymes, Low Platelets - pregnancy complication' },
      ],
      clinicalNotes: 'The elderly patient with vague abdominal pain and metabolic acidosis should prompt consideration of mesenteric ischemia. Early surgical consultation and CTA are essential.',
    },
    5: {
      level: 5,
      summary: 'Expert abdominal pain evaluation requires recognition of subtle presentations, integration of advanced imaging modalities, understanding of complex surgical decision-making, and application of current evidence regarding non-operative management strategies.',
      explanation: `## Expert-Level Diagnostic Considerations

### Diagnostic Dilemmas

**Indeterminate RLQ Pain:**
When appendicitis cannot be ruled in or out:
- Serial examinations (repeat in 8-12 hours)
- MRI as alternative (especially in pregnancy)
- Diagnostic laparoscopy if high clinical suspicion
- Consider epiploic appendagitis, omental infarction as mimics

**Differentiation: SBO vs. Ileus:**
| Feature | Mechanical SBO | Ileus |
|---------|---------------|-------|
| Bowel sounds | High-pitched, hyperactive early | Absent/hypoactive |
| Transition point on CT | Present | Absent |
| Recent surgery | Variable | Common cause |
| Air-fluid levels | Differential levels | All same level |
| Response to NG decompression | Limited | May resolve |

**Acute vs. Chronic Mesenteric Ischemia:**
- Acute: Sudden severe pain, often atrial fibrillation (embolic source)
- Chronic: Post-prandial pain, food fear, weight loss
- Mixed: Chronic becomes acute with thrombosis

### Advanced Management Concepts

**Non-operative Management of Appendicitis:**
- Selected cases of uncomplicated appendicitis
- Antibiotics alone may be effective (CODA trial)
- Higher recurrence rate vs. surgery
- Patient selection critical: No appendicolith, no perforation
- Shared decision-making essential

**Enhanced Recovery After Surgery (ERAS) in Abdominal Surgery:**
- Minimally invasive approach when feasible
- Multimodal analgesia (opioid-sparing)
- Early feeding and mobilization
- Goal-directed fluid therapy
- Reduced length of stay

**Damage Control Surgery:**
- Severely ill patients: Abbreviated initial operation
- Source control without definitive reconstruction
- Temporary abdominal closure
- ICU resuscitation
- Return to OR when stable (24-72 hours)

### Atypical Presentations

**Appendicitis Variants:**
- Retrocecal: Psoas sign positive, may have urinary symptoms
- Pelvic: Diarrhea, rectal tenderness, bladder symptoms
- Pregnancy: Higher and more lateral tenderness
- Elderly: Minimal symptoms, delayed presentation, higher perforation rate
- Tip appendicitis: May have normal base, only tip inflammation

**Mesenteric Ischemia Subtypes:**
1. **Arterial embolism** (50%): AF, recent MI, look for other emboli
2. **Arterial thrombosis** (25%): Pre-existing atherosclerosis
3. **Non-occlusive** (20%): Low-flow states, vasopressors, cocaine
4. **Venous thrombosis** (5%): Hypercoagulable states, cirrhosis, malignancy

**Acute Abdomen in Cirrhosis:**
- SBP: Insidious onset, may lack classic peritoneal signs
- Hepatorenal syndrome: Creatinine rise without other cause
- Perforated ulcer: High mortality
- Portal hypertensive gastropathy/colopathy

### Surgical Decision-Making Pearls

**When NOT to operate immediately:**
- Uncomplicated diverticulitis (antibiotics first)
- Adhesive SBO without strangulation (trial of NG decompression)
- Mild pancreatitis
- Small hepatic abscess (percutaneous drainage)

**When to operate emergently:**
- Peritonitis with hemodynamic instability
- Pneumoperitoneum (perforation)
- Ischemic bowel (pneumatosis, portal venous gas)
- Closed-loop obstruction
- Ruptured AAA

**Laparoscopic vs. Open Approach:**
- Laparoscopic: Appendectomy, cholecystectomy, adhesiolysis (selected)
- Open: Unstable patient, previous extensive surgery, expected dense adhesions
- Conversion threshold should be low

### Emerging Concepts

**Point-of-Care Ultrasound:**
- RUQ: Gallstones, cholecystitis (wall thickening >3mm, pericholecystic fluid)
- Appendix: Can visualize if >6mm, non-compressible
- Free fluid: FAST exam
- AAA: Aortic diameter measurement
- Hydronephrosis: Obstructing ureteral stone

**CT Protocols:**
- Oral contrast: Falling out of favor (delays, minimal added value)
- IV contrast: Essential for vascular assessment
- Low-dose CT: For kidney stones, young patients
- Dual-energy CT: May reduce contrast needs

**Biomarker Advances:**
- I-FABP: Intestinal fatty acid binding protein for ischemia
- Citrulline: Marker of enterocyte mass
- Fecal calprotectin: Inflammatory bowel disease activity

**AI in Imaging:**
- Deep learning for appendicitis detection
- Automated bowel obstruction assessment
- May improve speed and accuracy of diagnosis`,
      keyTerms: [
        { term: 'CODA trial', definition: 'Randomized trial showing antibiotics alone as reasonable alternative to surgery for uncomplicated appendicitis' },
        { term: 'damage control surgery', definition: 'Abbreviated operation for source control in critically ill patients, with planned reoperation' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - multimodal perioperative care protocols' },
        { term: 'I-FABP', definition: 'Intestinal Fatty Acid Binding Protein - biomarker for intestinal ischemia/injury' },
        { term: 'SBP', definition: 'Spontaneous Bacterial Peritonitis - infection of ascites in cirrhotic patients' },
      ],
      clinicalNotes: `Key clinical pearls:
1. In the elderly, a "normal" exam may still harbor serious pathology
2. Free air on upright CXR is specific but not sensitive for perforation
3. CT-negative abdominal pain still requires clinical judgment - early ischemia can be CT-negative
4. The threshold for imaging and surgical consultation should be lower in the immunocompromised
5. Always reassess: Abdominal exams can change rapidly and serial examination is valuable`,
    },
  },

  steps: [
    {
      id: 'initial-assessment',
      type: 'action',
      content: {
        1: 'First, check if the person looks very sick and if their belly is very tender.',
        2: 'Perform initial assessment: vital signs, appearance, and brief abdominal examination for obvious distress or peritoneal signs.',
        3: 'Assess hemodynamic stability, evaluate for peritoneal signs (guarding, rigidity, rebound), and determine acuity.',
        4: 'Rapid assessment: Hemodynamic status, peritoneal irritation, evidence of shock. Concurrent resuscitation if indicated.',
        5: 'Systematic primary survey: Hemodynamics, signs of peritonitis, assessment for shock states. Consider bedside ultrasound for free fluid, AAA.',
      },
      nextSteps: [
        { condition: 'Unstable or peritonitis', targetStepId: 'surgical-emergency' },
        { condition: 'Stable', targetStepId: 'history-assessment' },
      ],
    },
    {
      id: 'surgical-emergency',
      type: 'warning',
      content: {
        1: 'EMERGENCY: This person may need surgery right away. Get help immediately!',
        2: 'CRITICAL: Signs of surgical emergency. Start IV fluids, keep patient NPO, get emergency surgery consultation.',
        3: 'Surgical emergency: Large-bore IV access, fluid resuscitation, NPO, NG tube if obstructed/vomiting, urgent surgical consultation, consider CT if stable enough.',
        4: 'Immediate surgical consultation. Bedside assessment for AAA (pulsatile mass), pneumoperitoneum (rigid abdomen). Stabilize and prepare for OR.',
        5: 'Critical pathway: Balanced resuscitation, permissive hypotension if hemorrhage suspected. Massive transfusion protocol if indicated. Bedside POCUS. Direct to OR vs. CT based on stability.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'Free air/perforation', targetStepId: 'perforation-pathway' },
        { condition: 'Suspected AAA', targetStepId: 'aaa-pathway' },
        { condition: 'Ischemic bowel', targetStepId: 'ischemia-pathway' },
      ],
    },
    {
      id: 'history-assessment',
      type: 'question',
      content: {
        1: 'Tell me about your belly pain. Where does it hurt? When did it start? What makes it better or worse?',
        2: 'Detailed history: Location, onset, character, radiation, severity, timing, and associated symptoms (nausea, vomiting, bowel changes, urinary symptoms).',
        3: 'OPQRST assessment, associated GI/GU/GYN symptoms, surgical history (adhesions), risk factors for specific diagnoses.',
        4: 'Comprehensive history including pregnancy risk, immunosuppression, anticoagulation, prior similar episodes. Calculate clinical probability for common diagnoses.',
        5: 'Expert history: Pattern recognition for specific diagnoses, assessment for mimics (MI, DKA, pneumonia), medication review, travel/exposure history.',
      },
      nextSteps: [
        { condition: 'RUQ pain after meals', targetStepId: 'biliary-evaluation' },
        { condition: 'RLQ pain with migration', targetStepId: 'appendicitis-evaluation' },
        { condition: 'LLQ pain in older adult', targetStepId: 'diverticulitis-evaluation' },
        { condition: 'Epigastric pain with nausea', targetStepId: 'upper-gi-evaluation' },
        { condition: 'Diffuse pain with distension', targetStepId: 'obstruction-evaluation' },
        { condition: 'Flank pain', targetStepId: 'renal-evaluation' },
        { condition: 'Female with pelvic symptoms', targetStepId: 'gyn-evaluation' },
      ],
    },
    {
      id: 'biliary-evaluation',
      type: 'decision',
      content: {
        1: 'Your pain might be from your gallbladder. We need an ultrasound to check for gallstones.',
        2: 'Evaluating for gallbladder disease: Right upper quadrant ultrasound to look for gallstones and signs of inflammation.',
        3: 'Biliary workup: RUQ ultrasound for gallstones, wall thickening, pericholecystic fluid. Check LFTs for choledocholithiasis.',
        4: 'Murphy sign assessment. LFTs pattern: Elevated bili/ALP suggests CBD stone. Lipase to rule out gallstone pancreatitis. MRCP or EUS if CBD stone suspected.',
        5: 'Tokyo Guidelines for cholecystitis severity. ERCP indication for choledocholithiasis. Consider cholangitis (Charcot triad/Reynolds pentad). Timing of cholecystectomy based on severity.',
      },
      nextSteps: [
        { condition: 'Cholecystitis confirmed', targetStepId: 'cholecystitis-management' },
        { condition: 'Biliary colic only', targetStepId: 'biliary-colic-management' },
        { condition: 'CBD stone suspected', targetStepId: 'choledocholithiasis-management' },
      ],
    },
    {
      id: 'appendicitis-evaluation',
      type: 'decision',
      content: {
        1: 'We need to check if your appendix is infected. You will need some tests.',
        2: 'Evaluating for appendicitis: Blood tests and CT scan (or ultrasound in children/pregnancy) to look at the appendix.',
        3: 'Appendicitis workup: CBC, CMP. CT abdomen/pelvis with IV contrast. Calculate Alvarado score. US for pregnancy/pediatrics.',
        4: 'Risk stratification with Alvarado score. CT findings: Appendix >6mm, fat stranding, appendicolith. MRI alternative in pregnancy. Consider perforated vs. uncomplicated.',
        5: 'Expert evaluation: Tip appendicitis, retrocecal variants. Consider non-operative management for uncomplicated cases (shared decision-making). Early surgical consultation.',
      },
      nextSteps: [
        { condition: 'Appendicitis confirmed', targetStepId: 'appendicitis-management' },
        { condition: 'Alternative diagnosis found', targetStepId: 'alternative-diagnosis' },
      ],
    },
    {
      id: 'diverticulitis-evaluation',
      type: 'decision',
      content: {
        1: 'You might have an infection in your colon. We need a CT scan to check.',
        2: 'Evaluating for diverticulitis: CT scan of abdomen and pelvis to look for inflamed diverticula and any complications.',
        3: 'Diverticulitis workup: CT abdomen/pelvis. Assess for complications (abscess, perforation, fistula). Stage by Hinchey classification.',
        4: 'Hinchey staging guides management. Consider percutaneous drainage for contained abscess >3cm. Evaluate for sigmoid obstruction.',
        5: 'Expert evaluation: Differentiate from colon cancer (consider colonoscopy after resolution). Recurrent diverticulitis surgery considerations. Immunosuppressed patients may need earlier surgery.',
      },
      nextSteps: [
        { condition: 'Uncomplicated diverticulitis', targetStepId: 'diverticulitis-medical' },
        { condition: 'Complicated with abscess', targetStepId: 'diverticulitis-abscess' },
        { condition: 'Free perforation', targetStepId: 'diverticulitis-surgical' },
      ],
    },
    {
      id: 'upper-gi-evaluation',
      type: 'decision',
      content: {
        1: 'Your pain might be from your stomach or pancreas. We need blood tests and maybe imaging.',
        2: 'Evaluating upper GI causes: Blood tests including lipase for pancreatitis, and possibly CT scan or ultrasound.',
        3: 'Upper GI workup: Lipase (pancreatitis if >3x ULN), LFTs. CT if pancreatitis unclear or to assess severity. Consider PUD, gastritis.',
        4: 'Differentiate pancreatitis from PUD, biliary disease. BISAP score for pancreatitis severity. Atlanta classification for pancreatitis complications.',
        5: 'Expert evaluation: Gallstone vs. alcoholic vs. other causes of pancreatitis. Early ERCP for cholangitis with biliary pancreatitis. Necrotizing pancreatitis management.',
      },
      nextSteps: [
        { condition: 'Pancreatitis confirmed', targetStepId: 'pancreatitis-management' },
        { condition: 'PUD suspected', targetStepId: 'pud-management' },
      ],
    },
    {
      id: 'obstruction-evaluation',
      type: 'decision',
      content: {
        1: 'Your intestines might be blocked. We need X-rays and a CT scan.',
        2: 'Evaluating for bowel obstruction: Abdominal X-ray and CT scan to look for blocked intestines.',
        3: 'SBO workup: CT with IV contrast. Identify transition point, assess for strangulation (wall enhancement, mesenteric haziness). Plain films less sensitive.',
        4: 'Differentiate partial vs. complete, simple vs. strangulated. Look for closed-loop obstruction (surgical emergency). Determine etiology (adhesions, hernia, malignancy).',
        5: 'Expert evaluation: CT findings of ischemia (decreased enhancement, pneumatosis). Large bowel obstruction must rule out malignancy. Sigmoid volvulus vs. cecal volvulus management differences.',
      },
      nextSteps: [
        { condition: 'SBO without strangulation', targetStepId: 'sbo-conservative' },
        { condition: 'Strangulated or complete obstruction', targetStepId: 'sbo-surgical' },
      ],
    },
    {
      id: 'renal-evaluation',
      type: 'decision',
      content: {
        1: 'Your pain might be from a kidney stone. We need a CT scan to check.',
        2: 'Evaluating for kidney stones: CT scan without contrast is the best test to find kidney stones.',
        3: 'Renal colic workup: CT abdomen/pelvis without contrast. Assess stone size, location, presence of hydronephrosis. UA for hematuria.',
        4: 'Stratify by stone size and location. >10mm or proximal stones less likely to pass. Assess for infection (pyonephrosis - urologic emergency).',
        5: 'Expert evaluation: Infected hydronephrosis requires emergent decompression. Alpha-blockers for medical expulsive therapy. Indications for intervention (shock wave, ureteroscopy, PCNL).',
      },
      nextSteps: [
        { condition: 'Small stone, likely to pass', targetStepId: 'stone-conservative' },
        { condition: 'Large stone or infected', targetStepId: 'stone-intervention' },
      ],
    },
    {
      id: 'gyn-evaluation',
      type: 'decision',
      content: {
        1: 'We need to check for problems related to your female organs. A pregnancy test is very important.',
        2: 'Gynecologic evaluation: Pregnancy test is essential. Pelvic ultrasound to evaluate ovaries and uterus.',
        3: 'GYN workup: Beta-hCG first. Pelvic US for ovarian pathology (cyst, torsion), ectopic pregnancy if positive test. Consider PID.',
        4: 'Ectopic pregnancy: Beta-hCG + transvaginal US. Discriminatory zone concept. Ovarian torsion: Doppler US, but flow may be present. PID criteria.',
        5: 'Expert evaluation: Heterotopic pregnancy in IVF patients. Hemorrhagic corpus luteum vs. ectopic. Tubo-ovarian abscess management. Ovarian torsion: diagnostic laparoscopy if high suspicion despite US.',
      },
      nextSteps: [
        { condition: 'Ectopic pregnancy', targetStepId: 'ectopic-management' },
        { condition: 'Ovarian pathology', targetStepId: 'ovarian-management' },
        { condition: 'PID', targetStepId: 'pid-management' },
      ],
    },
    {
      id: 'appendicitis-management',
      type: 'endpoint',
      content: {
        1: 'Your appendix is infected and needs to be removed. This is called an appendectomy.',
        2: 'Appendicitis confirmed. Most patients need surgery (appendectomy), usually done laparoscopically. Antibiotics are also given.',
        3: 'Appendicitis management: Surgical consultation. Laparoscopic appendectomy is standard. Perioperative antibiotics. Perforated: May need drainage, delayed surgery.',
        4: 'Uncomplicated: Laparoscopic appendectomy within 24 hours optimal. Consider antibiotics-first approach in selected uncomplicated cases. Perforated with abscess: Consider interval appendectomy.',
        5: 'Expert management: CODA trial implications for shared decision-making. Appendiceal neoplasms found incidentally. Right hemicolectomy for carcinoid >2cm or adenocarcinoma.',
      },
    },
    {
      id: 'cholecystitis-management',
      type: 'endpoint',
      content: {
        1: 'Your gallbladder is infected and likely needs to be removed.',
        2: 'Cholecystitis confirmed. Treatment involves antibiotics and surgery to remove the gallbladder, usually within a few days.',
        3: 'Cholecystitis management: NPO, IV fluids, antibiotics, pain control. Early cholecystectomy (within 72 hours) preferred over delayed. Percutaneous cholecystostomy if poor surgical candidate.',
        4: 'Tokyo Guidelines for severity and management. Grade I (mild): Early lap chole. Grade II (moderate): Early lap chole or conservative + interval. Grade III (severe): Cholecystostomy or conservative.',
        5: 'Expert management: Subtotal cholecystectomy for difficult dissection. Intraoperative cholangiogram indications. ERCP timing if CBD stone. Mirizzi syndrome recognition.',
      },
    },
    {
      id: 'pancreatitis-management',
      type: 'endpoint',
      content: {
        1: 'Your pancreas is inflamed. You need to rest your digestive system and get IV fluids.',
        2: 'Pancreatitis treatment: Nothing to eat initially, IV fluids, pain control. Most cases improve with supportive care.',
        3: 'Pancreatitis management: Aggressive IV fluid resuscitation (goal-directed), NPO initially then advance as tolerated, pain control. Address etiology (cholecystectomy for gallstone pancreatitis).',
        4: 'Severity assessment (BISAP, Ranson, APACHE-II). ICU for severe. Enteral nutrition preferred (via NJ tube if needed). Necrosectomy reserved for infected necrosis.',
        5: 'Expert management: Early ERCP only for cholangitis, not routine. Step-up approach for infected necrosis (percutaneous → endoscopic → surgical). Timing of cholecystectomy: Index admission for mild, delayed for severe.',
      },
    },
    {
      id: 'alternative-diagnosis',
      type: 'action',
      content: {
        1: 'Your pain is not from the problem we first thought. We need to keep looking.',
        2: 'Initial suspected diagnosis not confirmed. Broaden differential and consider other causes.',
        3: 'Expand differential: Consider gastroenteritis, mesenteric adenitis, ovarian pathology, musculoskeletal, and medical causes (DKA, lower lobe pneumonia).',
        4: 'Systematic re-evaluation. Reconsider high-risk diagnoses (ectopic, ischemia, AAA). Serial examinations. Consider observation with repeat imaging if diagnosis unclear.',
        5: 'Expert approach: CT-negative abdominal pain still requires judgment. Early ischemia, intermittent obstruction may be imaging-negative. Low threshold for laparoscopy if concern persists.',
      },
    },
  ],

  startStepId: 'initial-assessment',

  differentials: [
    {
      diagnosis: 'Acute Appendicitis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Periumbilical pain migrating to RLQ', 'Anorexia', 'Low-grade fever', 'McBurney point tenderness', 'Rovsing sign'],
    },
    {
      diagnosis: 'Acute Cholecystitis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['RUQ pain', 'Positive Murphy sign', 'Pain after fatty meals', 'Fever', 'Elevated WBC'],
    },
    {
      diagnosis: 'Acute Pancreatitis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Epigastric pain radiating to back', 'Nausea/vomiting', 'Better leaning forward', 'Lipase >3x ULN', 'Alcohol or gallstone history'],
    },
    {
      diagnosis: 'Small Bowel Obstruction',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Colicky abdominal pain', 'Distension', 'Vomiting', 'Obstipation', 'Prior abdominal surgery'],
    },
    {
      diagnosis: 'Diverticulitis',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['LLQ pain', 'Fever', 'Change in bowel habits', 'Older age', 'Prior episodes'],
    },
    {
      diagnosis: 'Mesenteric Ischemia',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Severe pain out of proportion to exam', 'Atrial fibrillation', 'Metabolic acidosis', 'Older age', 'Cardiovascular disease'],
    },
    {
      diagnosis: 'Ruptured AAA',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Severe abdominal/back pain', 'Hypotension', 'Pulsatile abdominal mass', 'Older male', 'Smoking history'],
    },
    {
      diagnosis: 'Ectopic Pregnancy',
      prevalence: 'common',
      urgency: 'emergent',
      keyFeatures: ['Lower abdominal pain', 'Missed period', 'Vaginal bleeding', 'Positive pregnancy test', 'Adnexal tenderness'],
    },
    {
      diagnosis: 'Kidney Stone',
      prevalence: 'common',
      urgency: 'urgent',
      keyFeatures: ['Severe colicky flank pain', 'Radiation to groin', 'Hematuria', 'Nausea', 'Restlessness'],
    },
    {
      diagnosis: 'Peptic Ulcer Disease',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Epigastric burning', 'Related to meals', 'NSAID or H. pylori history', 'Relief with antacids', 'Night-time awakening'],
    },
  ],

  redFlags: [
    {
      finding: 'Rigid, board-like abdomen',
      implication: 'Peritonitis, likely perforation',
      action: 'Emergency surgery consultation, likely operative intervention',
    },
    {
      finding: 'Severe pain out of proportion to exam',
      implication: 'Mesenteric ischemia until proven otherwise',
      action: 'CTA abdomen, emergent surgical consultation',
    },
    {
      finding: 'Hypotension with abdominal pain',
      implication: 'May indicate rupture (AAA, ectopic) or sepsis',
      action: 'Immediate resuscitation, emergent evaluation',
    },
    {
      finding: 'Pulsatile abdominal mass',
      implication: 'Abdominal aortic aneurysm, may be rupturing',
      action: 'Do not palpate further, emergent vascular surgery',
    },
    {
      finding: 'Free air on imaging',
      implication: 'Bowel perforation',
      action: 'Emergent surgery',
    },
    {
      finding: 'Positive pregnancy test with abdominal pain',
      implication: 'Ectopic pregnancy must be ruled out',
      action: 'Urgent pelvic ultrasound, GYN consultation',
    },
    {
      finding: 'Bloody stool or hematemesis with abdominal pain',
      implication: 'GI bleeding, may indicate ischemia or perforation',
      action: 'Urgent evaluation, resuscitation, GI/surgery consultation',
    },
    {
      finding: 'Fever with severe abdominal pain in immunocompromised patient',
      implication: 'May have atypical presentation of serious pathology',
      action: 'Low threshold for imaging and surgical consultation',
    },
  ],

  media: [
    {
      id: 'abdominal-pain-algorithm-flowchart',
      type: 'diagram',
      filename: 'abdominal-pain-algorithm.svg',
      title: 'Abdominal Pain Evaluation Algorithm',
      description: 'Flowchart for systematic abdominal pain evaluation',
    },
    {
      id: 'abdominal-quadrants',
      type: 'diagram',
      filename: 'abdominal-quadrants.svg',
      title: 'Abdominal Quadrants and Differential Diagnosis',
      description: 'Visual guide to location-based differential diagnosis',
    },
  ],

  citations: [
    {
      id: 'acep-abdominal-pain',
      type: 'article',
      title: 'Clinical Policy: Critical Issues in the Evaluation and Management of Emergency Department Patients With Suspected Appendicitis',
      authors: ['ACEP Clinical Policies Committee'],
      source: 'Annals of Emergency Medicine',
    },
    {
      id: 'tokyo-guidelines-cholecystitis',
      type: 'article',
      title: 'Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis',
      source: 'Journal of Hepato-Biliary-Pancreatic Sciences',
    },
    {
      id: 'coda-trial',
      type: 'article',
      title: 'A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis (CODA)',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'algorithm-chest-pain', targetType: 'pathway', relationship: 'related', label: 'Chest Pain Algorithm' },
    { targetId: 'red-flags-gastrointestinal', targetType: 'topic', relationship: 'related', label: 'GI Red Flags' },
    { targetId: 'exam-abdominal', targetType: 'topic', relationship: 'related', label: 'Abdominal Examination' },
    { targetId: 'history-opqrst', targetType: 'topic', relationship: 'related', label: 'OPQRST Framework' },
  ],

  tags: {
    systems: ['gastrointestinal', 'genitourinary', 'gynecologic', 'vascular'],
    topics: ['diagnostic-algorithm', 'emergency-medicine', 'general-surgery', 'gastroenterology'],
    keywords: ['abdominal pain', 'appendicitis', 'cholecystitis', 'pancreatitis', 'bowel obstruction', 'diverticulitis', 'acute abdomen'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const abdominalPainDiagnosticAlgorithm = ABDOMINAL_PAIN_ALGORITHM;
export default ABDOMINAL_PAIN_ALGORITHM;
