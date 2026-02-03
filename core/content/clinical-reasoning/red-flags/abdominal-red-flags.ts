/**
 * Abdominal Red Flags
 *
 * Warning signs indicating serious intra-abdominal pathology requiring urgent evaluation.
 */

import { EducationalContent } from '../../types';

export const abdominalRedFlagsContent: EducationalContent = {
  id: 'abdominal-red-flags',
  type: 'concept',
  name: 'Abdominal Red Flags',
  alternateNames: ['Serious Abdominal Symptoms', 'Abdominal Warning Signs', 'Acute Abdomen Signs'],

  levels: {
    1: {
      level: 1,
      summary: 'Abdominal red flags are warning signs that something serious might be wrong inside your belly and you need medical help right away.',
      explanation: `Belly pain is common and usually not serious, but some signs mean something dangerous could be happening inside your body.

**Call 911 or Go to Emergency Room If You Have:**

**Severe Pain That Comes On Suddenly**
If you suddenly get terrible belly pain "out of nowhere" like you have never felt before.

**Pain With Fever**
Belly pain along with a high fever can mean a serious infection.

**Vomiting Blood or Coffee Ground Material**
Throwing up blood or something that looks like coffee grounds is an emergency.

**Black or Bloody Stools**
If your poop is black like tar or has bright red blood, this is serious.

**Belly That Is Hard and Very Tender**
If your belly is hard like a board and hurts even with gentle touch.

**Cannot Pass Gas or Poop**
If you have belly pain and cannot pass gas or have a bowel movement, especially with vomiting.

**Fainting or Dizziness With Belly Pain**
Feeling like you might pass out along with belly pain is a warning sign.

**Pain After Injury**
Belly pain after being hit, falling, or in a car accident.

**Special Warning for Women:**
- Severe belly pain if you might be pregnant
- Sudden severe pain with dizziness (could be ectopic pregnancy)

**Why These Matter:**
These warning signs could mean:
- Appendicitis (infected appendix)
- Perforated ulcer (hole in stomach)
- Bowel obstruction (blocked intestine)
- Internal bleeding
- Infection (peritonitis)

**Do Not Wait:**
Serious belly problems can get worse quickly. It is better to be checked and find out it is nothing serious than to wait too long.`,
      keyTerms: [
        { term: 'appendicitis', definition: 'Inflammation and infection of the appendix, a small pouch attached to the intestine', pronunciation: 'uh-pen-dih-SY-tis' },
        { term: 'peritonitis', definition: 'Serious infection of the lining of the abdominal cavity', pronunciation: 'pair-ih-tuh-NY-tis' },
        { term: 'obstruction', definition: 'Blockage that prevents normal passage through a tube or intestine' },
        { term: 'ulcer', definition: 'An open sore in the lining of the stomach or intestine' },
      ],
      analogies: [
        'Abdominal red flags are like warning lights on a car - they tell you that something inside needs immediate attention before permanent damage occurs.',
        'They are like a fire alarm - when they go off, you need to evacuate and call for help immediately.',
      ],
      examples: [
        'A person who suddenly has severe pain in the right lower belly with fever and loss of appetite may have appendicitis.',
        'Someone who vomits bright red blood and has black tarry stools may have bleeding from a stomach ulcer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Abdominal red flags indicate potentially life-threatening intra-abdominal conditions including peritonitis, obstruction, perforation, or hemorrhage requiring immediate surgical or medical intervention.',
      explanation: `The abdomen contains multiple vital organs, and certain clinical features indicate serious pathology requiring urgent evaluation. Recognition of these red flags is critical for preventing morbidity and mortality.

**Life-Threatening Causes of Acute Abdomen:**

**1. Peritonitis**
Inflammation of the peritoneal lining.
Red flags:
- Rigid, board-like abdomen
- Rebound tenderness (pain when releasing pressure)
- Guarding (muscle spasm)
- Absent bowel sounds
- Fever, tachycardia

**2. Bowel Obstruction**
Mechanical or functional blockage.
Red flags:
- Crampy abdominal pain
- Distension (bloating)
- Vomiting (feculent in late cases)
- Obstipation (no gas or stool)
- High-pitched bowel sounds (early) or absent (late)

**3. Perforated Viscus**
Hole in stomach, intestine, or other organ.
Red flags:
- Sudden severe pain
- Rigid abdomen
- Free air on X-ray
- Signs of sepsis

**4. Mesenteric Ischemia**
Compromised blood supply to intestines.
Red flags:
- Severe pain out of proportion to exam
- Risk factors: AF, atherosclerosis
- Bloody diarrhea
- Metabolic acidosis

**5. Ruptured Abdominal Aortic Aneurysm**
Red flags:
- Sudden severe abdominal/back pain
- Pulsatile abdominal mass
- Hypotension/shock
- Known AAA history

**6. Ectopic Pregnancy**
Pregnancy outside the uterus.
Red flags (in reproductive-age women):
- Unilateral pelvic pain
- Amenorrhea or irregular bleeding
- Positive pregnancy test
- Dizziness/syncope (rupture)
- Shoulder pain (referred)

**7. Severe Acute Pancreatitis**
Red flags:
- Severe epigastric pain radiating to back
- Nausea/vomiting
- Elevated amylase/lipase
- Signs of necrosis or organ failure

**Physical Exam Red Flags:**

**Inspection:**
- Distension
- Visible peristalsis (obstruction)
- Ecchymosis (Grey Turner, Cullen signs)
- Surgical scars (adhesions)

**Palpation:**
- Rebound tenderness
- Guarding/rigidity
- Pulsatile mass (AAA)
- Hepatomegaly, splenomegaly

**Percussion:**
- Tympany (obstruction)
- Dullness (ascites, mass)

**Auscultation:**
- Absent bowel sounds (peritonitis, ileus)
- High-pitched tinkling (obstruction)
- Bruits (vascular)

**Laboratory Red Flags:**
- Elevated lactate (ischemia, sepsis)
- Leukocytosis with left shift
- Elevated lipase (pancreatitis)
- Elevated creatinine (prerenal azotemia)
- Positive pregnancy test (ectopic risk)
- Elevated INR (liver dysfunction, bleeding risk)`,
      keyTerms: [
        { term: 'peritonitis', definition: 'Inflammation of the peritoneum, often from bacterial infection or leakage of GI contents' },
        { term: 'rebound tenderness', definition: 'Pain upon sudden release of abdominal pressure; sign of peritoneal irritation' },
        { term: 'guarding', definition: 'Involuntary muscle contraction when abdomen is touched; protects underlying inflamed structures' },
        { term: 'obstipation', definition: 'Severe constipation with inability to pass stool or gas' },
        { term: 'pulsatile mass', definition: 'Mass that expands and contracts with the heartbeat; suggests aneurysm' },
      ],
      analogies: [
        'Peritonitis is like sandpaper rubbing against tissue - the peritoneum becomes irritated and extremely sensitive, causing severe pain with any movement or touch.',
        'Bowel obstruction is like a clogged drain - nothing can pass through, pressure builds up behind the blockage, and the system backs up.',
      ],
      examples: [
        'An elderly patient with atrial fibrillation who develops severe abdominal pain "out of proportion" to exam findings has red flags for mesenteric ischemia.',
        'A woman of reproductive age with unilateral pelvic pain, amenorrhea, and positive pregnancy test needs immediate evaluation for ectopic pregnancy.',
      ],
    },
    3: {
      level: 3,
      summary: 'Abdominal red flags represent clinical features indicating surgical emergencies, intra-abdominal catastrophes, or severe medical conditions requiring immediate diagnostic imaging, laboratory evaluation, and therapeutic intervention.',
      explanation: `## Acute Abdomen: Systematic Evaluation

### Surgical Abdomen vs. Medical Abdomen

**Surgical Abdomen Features:**
- Peritoneal signs (rebound, guarding, rigidity)
- Progressive worsening
- Failure to improve with conservative management
- Radiographic evidence of perforation or obstruction
- Need for source control

**Medical Abdomen Features:**
- Absence of peritoneal signs
- Diffuse pain without localization
- Systemic illness (DKA, porphyria, lead poisoning)
- Response to medical therapy

### Differential Diagnosis by Location

**Right Upper Quadrant:**
- Cholecystitis/cholelithiasis
- Cholangitis (Charcot triad: fever, RUQ pain, jaundice)
- Hepatitis
- Hepatic abscess
- Subphrenic abscess
- Right lower lobe pneumonia (referred)

**Epigastric:**
- Pancreatitis
- Peptic ulcer disease/perforation
- GERD/esophageal spasm
- Myocardial infarction (referred)
- Aortic dissection

**Left Upper Quadrant:**
- Gastritis/PUD
- Splenic infarct/rupture
- Gastric volvulus
- Pancreatitis (tail)
- Left lower lobe pneumonia

**Right Lower Quadrant:**
- Appendicitis (McBurney point tenderness)
- Ectopic pregnancy
- Ovarian torsion/cyst
- Crohn disease (terminal ileitis)
- Cecal diverticulitis
- Kidney stone
- Yersinia infection

**Left Lower Quadrant:**
- Diverticulitis
- Ectopic pregnancy
- Ovarian pathology
- Sigmoid volvulus
- Kidney stone

**Diffuse:**
- Gastroenteritis
- Peritonitis
- Ischemic bowel
- Obstruction
- Mesenteric ischemia
- Diabetic ketoacidosis

### Imaging Selection

**Plain Radiographs (KUB):**
- Dilated loops (obstruction)
- Air-fluid levels
- Free air (perforation)
- Sentinel loop (localized ileus)

**CT Abdomen/Pelvis:**
- Gold standard for most conditions
- Oral and IV contrast when appropriate
- Detects: Appendicitis, diverticulitis, obstruction, mass

**Ultrasound:**
- First-line for: Gallbladder, gynecologic, pediatric, pregnancy
- FAST exam for trauma
- No radiation

**MRI:**
- Problem-solving for indeterminate cases
- Pregnant patients (avoid radiation)
- MRCP for biliary/pancreatic ducts

### Specific Conditions

**Acute Appendicitis:**
- Migration of pain to RLQ
- Anorexia precedes pain
- Fever, leukocytosis
- CT: Dilated appendix >6mm, appendicolith, fat stranding
- Alvarado score for risk stratification

**Acute Diverticulitis:**
- LLQ pain in elderly
- Fever, leukocytosis
- CT: Diverticula, bowel wall thickening, fat stranding
- Hinchey classification for severity

**Small Bowel Obstruction:**
- Prior abdominal surgery (adhesions)
- Crampy pain, vomiting, distension
- CT: Transition point, dilated proximal loops
- Strangulation: Fever, tachycardia, peritonitis, pneumatosis

**Acute Cholecystitis:**
- RUQ pain after fatty meal
- Positive Murphy sign
- Ultrasound: Gallstones, wall thickening, pericholecystic fluid
- HIDA scan if ultrasound equivocal

**Acute Pancreatitis:**
- Epigastric pain radiating to back
- Elevated lipase (>3x normal)
- CT: Pancreatic edema, necrosis, collections
- Ranson criteria or BISAP for severity

### Perioperative Considerations

**Preoperative Optimization:**
- Fluid resuscitation
- Antibiotics (if infection suspected)
- Correction of electrolyte abnormalities
- DVT prophylaxis
- Glycemic control

**Indications for Emergency Surgery:**
- Perforation with peritonitis
- Strangulated obstruction
- Uncontrolled hemorrhage
- Necrotizing infection
- Ruptured AAA
- Ruptured ectopic pregnancy`,
      keyTerms: [
        { term: 'Alvarado score', definition: 'Clinical scoring system for appendicitis using symptoms, signs, and lab values' },
        { term: 'Murphy sign', definition: 'Arrest of inspiration during RUQ palpation; suggests cholecystitis' },
        { term: 'pneumatosis intestinalis', definition: 'Gas within the bowel wall; sign of bowel ischemia or necrosis', pronunciation: 'noo-muh-TOH-sis' },
        { term: 'Charcot triad', definition: 'Fever, jaundice, RUQ pain; classic for cholangitis' },
        { term: 'BISAP score', definition: 'Bedside Index of Severity in Acute Pancreatitis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced abdominal emergency management requires integration of sophisticated imaging interpretation, recognition of atypical presentations in special populations, and evidence-based surgical decision-making for complex intra-abdominal pathologies.',
      explanation: `## Advanced Abdominal Emergency Management

### Complex Abdominal Emergencies

**Mesenteric Ischemia:**

**Acute Arterial:**
- Etiology: Embolism (AF), thrombosis (atherosclerosis), dissection
- "Pain out of proportion to exam"
- Bloody diarrhea, elevated lactate
- CT angiography: Vessel occlusion, bowel wall changes
- Treatment: Anticoagulation, revascularization, resection if necrotic

**Venous:**
- Risk factors: Hypercoagulable, malignancy, inflammation
- Insidious onset
- CT: Venous filling defect, bowel edema
- Treatment: Anticoagulation first-line

**Chronic:**
- Postprandial pain (intestinal angina)
- Weight loss, food fear
- CTA: Calcified vessels, stenosis
- Treatment: Revascularization

**Ischemic Colitis:**
- "Watershed" areas (splenic flexure)
- Self-limited to necrotic
- CT: Thumbprinting, pneumatosis
- Colonoscopy: Segmental inflammation

**Gastrointestinal Perforation:**

**Causes:**
- Peptic ulcer disease
- Diverticulitis
- Appendicitis
- Ischemia/necrosis
- Iatrogenic (endoscopy)
- Trauma

**Imaging:**
- Free air on upright CXR (sensitivity 70%)
- CT: Direct visualization of perforation site
- Fluid collections, fat stranding

**Management:**
- Resuscitation, antibiotics
- Source control: Surgery vs. endoscopic clipping
- Percutaneous drainage for contained leaks

**Severe Acute Pancreatitis:**

**Necrotizing Pancreatitis:**
- CT: Non-enhancing pancreatic tissue
- Infected necrosis: Gas in collection
- Sterile necrosis: Conservative management
- Infected necrosis: Debridement

**Timing of Intervention:**
- Step-up approach: Drainage first, then minimal access retroperitoneal necrosectomy
- Delayed intervention (>4 weeks) preferred

**Severity Scoring:**
- Ranson criteria (admission and 48h)
- APACHE II
- BISAP
- CT severity index (Balthazar)

### Special Populations

**Elderly:**
- Atypical presentations common
- Delayed presentation
- Higher mortality
- Consider: Mesenteric ischemia, AAA, diverticulitis
- Medications mask signs (beta-blockers, steroids)

**Immunocompromised:**
- Subtle presentations
- Opportunistic infections (CMV, fungal)
- Typhlitis (neutropenic enterocolitis)
- Graft-versus-host disease
- Consider: Steroids mask fever, leukopenia

**Pregnant Patients:**
- Ultrasound preferred imaging
- MRI without gadolinium alternative
- CT if life-threatening condition suspected
- Consider: Physiologic changes, displaced organs
- Ruptured ectopic: Leading cause of maternal death in first trimester

**Bariatric Surgery Patients:**
- Internal hernia
- Marginal ulcer
- Bowel obstruction
- Gallstone disease
- Nutrient deficiencies

### Evidence-Based Surgical Decisions

**Appendicitis:**
- Antibiotics alone for uncomplicated: Ongoing debate
- Surgery still standard for most
- Interval appendectomy after perforated with abscess: Controversial

**Diverticulitis:**
- Outpatient management for uncomplicated
- Abscess: Percutaneous drainage if >3cm
- Surgery for: Failed medical therapy, complications
- Elective resection after 2+ episodes: Individualized

**Acute Cholecystitis:**
- Early laparoscopic cholecystectomy (within 72 hours)
- Delayed if: Severe inflammation, comorbidities
- Choledocholithiasis: ERCP + laparoscopic cholecystectomy

**Bowel Obstruction:**
- Adhesive SBO: Conservative management first
- Complete obstruction, peritonitis, strangulation: Surgery
- CT predictors of failure: Ascites, mesenteric edema

### Minimally Invasive Approaches

**Laparoscopy:**
- Diagnostic and therapeutic
- Therapeutic for: Appendicitis, cholecystitis, perforated ulcer
- Contraindications: Severe peritonitis, hemodynamic instability

**Interventional Radiology:**
- Abscess drainage
- Biliary drainage (PTC)
- Embolization for bleeding
- TIPS for portal hypertension

**Endoscopic Therapy:**
- Perforation closure (OTSC)
- Stenting for obstruction
- Pseudocyst drainage
- Cholangitis: Emergency ERCP`,
      keyTerms: [
        { term: 'thumbprinting', definition: 'Radiographic appearance of thickened haustral folds in ischemic colitis' },
        { term: 'typhlitis', definition: 'Neutropenic enterocolitis affecting cecum; oncologic emergency', pronunciation: 'tif-LY-tis' },
        { term: 'retroperitoneal necrosectomy', definition: 'Surgical removal of necrotic tissue through retroperitoneal approach' },
        { term: 'endoscopic closure', definition: 'Sealing of GI perforation using endoscopic devices (OTSC)' },
        { term: 'TIPS', definition: 'Transjugular Intrahepatic Portosystemic Shunt; for portal hypertension' },
      ],
      clinicalNotes: 'Elderly patients and those with immunosuppression often present with atypical or muted signs of serious abdominal pathology. Maintain a low threshold for imaging and surgical consultation in these populations.',
    },
    5: {
      level: 5,
      summary: 'Expert-level abdominal emergency care encompasses precision surgical techniques, multidisciplinary management of complex cases, advanced endoscopic interventions, and continuous quality improvement in acute care surgery.',
      explanation: `## Expert-Level Abdominal Emergency Care

### Complex Surgical Scenarios

**Damage Control Surgery:**

**Indications:**
- Hemodynamic instability
- Hypothermia (<35C)
- Acidosis (pH <7.2)
- Coagulopathy
- Massive transfusion

**Phases:**
1. **Control:** Hemorrhage and contamination control
2. **Resuscitation:** ICU stabilization
3. **Definitive:** Reoperation for reconstruction
4. **Reconstruction:** Abdominal wall closure

**Abdominal Compartment Syndrome:**
- Intra-abdominal pressure >20 mmHg
- Organ dysfunction
- Measurement: Bladder pressure
- Treatment: Decompressive laparotomy

**Open Abdomen Management:**
- Negative pressure wound therapy
- Planned reoperations
- Prevention of fistulas
- Progressive closure techniques

### Advanced Pancreatitis Management

**Walled-Off Necrosis:**
- Develops 4+ weeks after necrotizing pancreatitis
- Mature wall on imaging
- Step-up approach:
  1. Percutaneous or endoscopic drainage
  2. Minimally invasive necrosectomy if needed
  3. Open surgery as last resort

**Endoscopic Therapy:**
- Cystgastrostomy or cystduodenostomy
- Lumen-apposing metal stents
- Direct endoscopic necrosectomy

**Surgical Therapy:**
- Video-assisted retroperitoneal debridement (VARD)
- Sinus tract endoscopy
- Delayed intervention improves outcomes

### Multidisciplinary Care

**Acute Care Surgery Model:**
- Trauma
- Emergency general surgery
- Surgical critical care
- 24/7 in-house coverage

**Tumor Board Approach for Complex Cases:**
- GI malignancy with obstruction
- Interventional radiology
- Medical oncology
- Palliative care

**Enhanced Recovery After Surgery (ERAS):**
- Even in emergency settings when possible
- Early feeding
- Multimodal analgesia
- Avoidance of NG tubes
- Early mobilization

### Quality Metrics in Emergency Abdominal Surgery

**Structure Measures:**
- 24/7 OR availability
- Acute care surgery coverage
- Critical care capacity
- Interventional radiology availability

**Process Measures:**
- Time to OR for perforated viscus
- Appropriate antibiotic timing
- VTE prophylaxis
- Glycemic control

**Outcome Measures:**
- Mortality
- Morbidity (SSI, anastomotic leak)
- Length of stay
- Readmission rates

**NSQIP Risk-Adjusted Outcomes:**
- ACS NSQIP for benchmarking
- Morbidity and Mortality conferences
- Continuous quality improvement

### Research Frontiers

**Artificial Intelligence:**
- CT interpretation for appendicitis
- Predicting SBO resolution vs. surgery
- Outcome prediction

**Precision Medicine:**
- Genomic markers in pancreatitis severity
- Personalized antibiotic selection
- Host response biomarkers

**Innovative Techniques:**
- Natural orifice transluminal endoscopic surgery (NOTES)
- Robot-assisted emergency surgery
- Advanced hemostatic agents

**Telemedicine:**
- Remote surgical consultation
- Prehospital triage
- Rural emergency surgery support

### Teaching and Learning

**Simulation:**
- Laparoscopic skills
- Crisis resource management
- Decision-making under uncertainty

**Morbidity and Mortality Conference:**
- Case-based learning
- Systems analysis
- Cognitive error recognition

**Acute Care Surgery Fellowships:**
- Advanced training
- Research opportunities
- Leadership development

### End-of-Life Considerations

**Palliative Surgery:**
- Obstruction in terminal illness
- Goals of care discussion
- Minimally invasive approaches

**Non-Operative Management:**
- Hospice-appropriate patients
- Venting gastrostomy
- Symptom management

**Shared Decision-Making:**
- Transparent discussion of risks/benefits
- Family involvement
- Cultural sensitivity`,
      keyTerms: [
        { term: 'damage control surgery', definition: 'Abbreviated laparotomy for hemorrhage control with planned reoperation after resuscitation' },
        { term: 'abdominal compartment syndrome', definition: 'Elevated intra-abdominal pressure causing organ dysfunction (ACS)' },
        { term: 'step-up approach', definition: 'Progressive minimally invasive management of necrotizing pancreatitis' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; multimodal perioperative care pathway' },
        { term: 'NSQIP', definition: 'National Surgical Quality Improvement Program; risk-adjusted outcomes database' },
      ],
      clinicalNotes: `Expert abdominal emergency care requires:
1. Rapid, accurate diagnosis using appropriate imaging
2. Timely source control for infection or hemorrhage
3. Multidisciplinary collaboration
4. Appropriate use of minimally invasive techniques
5. Recognition of when to operate, when to wait, and when not to operate
6. Quality improvement focus

The acute care surgery model has improved outcomes through dedicated teams, standardized protocols, and continuous learning.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'sages-acute-care-surgery',
      type: 'article',
      title: 'Acute Care Surgery: A Comprehensive Guide',
      authors: ['Society of American Gastrointestinal and Endoscopic Surgeons'],
      source: 'SAGES Guidelines',
    },
    {
      id: 'atlanta-pancreatitis-2012',
      type: 'article',
      title: 'Classification of Acute Pancreatitis - 2012: Revision of the Atlanta Classification',
      authors: ['Banks PA', 'et al.'],
      source: 'Gut',
    },
    {
      id: 'world-society-emergency-surgery',
      type: 'article',
      title: 'Management of Acute Colonic Diverticulitis: WSES Guidelines',
      authors: ['Sartelli M', 'et al.'],
      source: 'World Journal of Emergency Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'chest-pain-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Chest Pain Red Flags' },
    { targetId: 'neurological-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Neurological Red Flags' },
    { targetId: 'pediatric-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Pediatric Red Flags' },
    { targetId: 'oncologic-urgencies', targetType: 'concept', relationship: 'related', label: 'Oncologic Urgencies' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['emergency-medicine', 'surgery', 'critical-care'],
    keywords: ['abdominal pain', 'acute abdomen', 'red flags', 'peritonitis', 'obstruction', 'emergency'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default abdominalRedFlagsContent;
