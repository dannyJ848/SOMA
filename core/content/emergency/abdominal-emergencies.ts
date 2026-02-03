/**
 * Abdominal Emergencies
 *
 * Covers acute abdomen, appendicitis, bowel obstruction,
 * perforated ulcer, and other surgical abdominal emergencies.
 */

import { EducationalContent } from '../types';

export const abdominalEmergenciesContent: EducationalContent = {
  id: 'emergency-abdominal',
  type: 'topic',
  name: 'Abdominal Emergencies',
  alternateNames: ['Acute Abdomen', 'Surgical Abdomen', 'Abdominal Pain Emergency', 'Acute Abdominal Pain'],

  levels: {
    1: {
      level: 1,
      summary: 'Abdominal emergencies are serious problems in the belly area that happen suddenly, like appendicitis or a blockage in the intestines, which often need surgery to fix.',
      explanation: `Your abdomen (belly) contains many important organs including the stomach, intestines, liver, and appendix. Sometimes, serious problems can develop suddenly in these organs that need emergency medical care.

**What is an "Acute Abdomen"?**

An acute abdomen means sudden, severe pain in the belly that might be caused by a serious problem needing surgery. Think of it like your body's emergency alarm system telling you something is very wrong inside.

**Common Abdominal Emergencies:**

**Appendicitis:**
- The appendix becomes infected and swollen
- Pain usually starts near the belly button, then moves to the lower right side
- Pain gets worse with movement, coughing, or bumping on the road
- May cause fever, nausea, and vomiting
- Very common - affects many people
- Needs surgery to remove the appendix before it bursts

**Bowel Obstruction (Blockage):**
- Something blocks the intestines so nothing can pass through
- Causes severe cramping pain
- Vomiting (often green or yellow)
- Cannot pass gas or have a bowel movement
- Belly becomes swollen and hard
- Can be caused by scar tissue, hernia, or the intestine twisting

**Diverticulitis:**
- Small pouches in the colon get infected
- Pain in the lower left side
- Fever, nausea, change in bowel habits
- More common in older adults
- Usually treated with antibiotics, sometimes needs surgery

**Gallbladder Attack (Biliary Colic):**
- Stones block the tube from the gallbladder
- Severe pain in the upper right side
- Pain often happens after eating fatty foods
- May spread to the right shoulder
- Often needs surgery to remove the gallbladder

**Kidney Stone:**
- Hard mineral deposit moves through the urinary tract
- Severe pain that comes and goes in waves
- Pain in the side or back that spreads to the groin
- Blood in the urine
- Very painful but usually not life-threatening

**Perforated Ulcer:**
- A hole develops in the stomach or intestine
- Digestive juices leak into the belly
- Very severe pain, person looks very sick
- Belly feels hard like a board
- Emergency surgery needed

**Warning Signs - Go to the ER:**
- Severe abdominal pain that doesn't go away
- Pain getting worse over time
- Blood in vomit or stool
- Cannot pass gas or have a bowel movement
- Abdomen feels hard or rigid
- Fever with abdominal pain
- Vomiting that won't stop
- Pain after an injury to the belly
- History of abdominal surgery with new pain

**What Happens at the Hospital:**

Doctors will:
- Ask about the pain (where, when, how bad, what makes it worse)
- Examine your belly carefully
- Check your vital signs (temperature, blood pressure, heart rate)
- Order blood tests
- Order imaging (X-rays, ultrasound, or CT scan)
- Decide if you need surgery

**Treatment Options:**
- Antibiotics for infections
- IV fluids for dehydration
- Pain medicine (sometimes - they don't want to hide symptoms)
- Surgery to fix problems like appendicitis, obstruction, or perforation
- Observation in the hospital

Remember: Severe abdominal pain is your body warning you that something is wrong. Don't ignore it or wait too long to get help. Some abdominal problems get much worse quickly and need immediate treatment.`,
      keyTerms: [
        { term: 'abdomen', definition: 'The part of the body between the chest and the pelvis that contains the stomach, intestines, and other organs' },
        { term: 'appendicitis', definition: 'Inflammation of the appendix, a small pouch attached to the large intestine' },
        { term: 'obstruction', definition: 'A blockage that prevents something from passing through, like food through intestines' },
        { term: 'gallbladder', definition: 'A small organ that stores bile, which helps digest fats' },
        { term: 'ulcer', definition: 'A sore or hole in the lining of the stomach or intestine' },
        { term: 'rupture', definition: 'When something bursts open, like an appendix that has swollen too much' },
      ],
      analogies: [
        'The appendix is like a small dead-end alley off a main street - when it gets blocked, problems happen.',
        'A bowel obstruction is like a traffic jam on a highway where nothing can get through.',
        'Your abdomen is like a suitcase packed tightly - when something goes wrong, everything is affected.',
      ],
      examples: [
        'A 12-year-old has pain that started around the belly button and moved to the lower right side.',
        'Someone who had surgery last year now has severe cramping and vomiting.',
        'A 45-year-old feels sudden severe pain in the right upper abdomen after eating fried chicken.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute abdominal emergencies encompass conditions such as appendicitis, cholecystitis, bowel obstruction, diverticulitis, and perforated viscus, requiring rapid assessment, differentiation between surgical and medical causes, and timely intervention to prevent complications.',
      explanation: `## Acute Abdomen Assessment

The term "acute abdomen" refers to sudden onset abdominal pain that may require surgical intervention. Rapid assessment is critical because delays can lead to increased morbidity and mortality.

**History Taking:**

**Key Questions:**
- Where is the pain? (Ask patient to point with one finger)
- When did it start? (Suggests different diagnoses)
- What does the pain feel like? (Sharp, dull, burning, cramping)
- What makes it better or worse?
- Are there associated symptoms? (Nausea, vomiting, fever, change in bowel habits)
- Any previous abdominal surgery? (Adhesions common cause of obstruction)

**Pain Patterns and Localization:**

| Location | Common Causes |
|----------|---------------|
| Right upper quadrant | Cholecystitis, hepatitis, pneumonia |
| Left upper quadrant | Splenic injury, splenomegaly, gastritis |
| Right lower quadrant | Appendicitis, ectopic pregnancy, ovarian pathology |
| Left lower quadrant | Diverticulitis, ovarian cyst, constipation |
| Epigastric | Peptic ulcer disease, GERD, MI (can mimic abdominal pain) |
| Periumbilical | Early appendicitis, small bowel obstruction, mesenteric ischemia |
| Suprapubic | Cystitis, appendicitis (pelvic), ovarian pathology |
| Diffuse | Peritonitis, ischemia, metabolic causes |

**Physical Examination:**

**Inspection:**
- Abdominal distension
- Surgical scars
- Contusions or seatbelt signs
- Hernias
- Coughing or splinting (protecting the abdomen)

**Auscultation:**
- Bowel sounds (present, increased, decreased, absent)
- Vascular bruits
- Absent bowel sounds with peritonitis or obstruction

**Percussion:**
- Tympany (gas) vs dullness (fluid or solid)
- Tenderness with percussion (peritoneal irritation)
- Shifting dullness (ascites)
- Costovertebral angle tenderness (pyelonephritis)

**Palpation:**
- Start away from painful area
- Light palpation first (voluntary guarding)
- Deep palpation (involuntary guarding, rigidity)
- Rebound tenderness (peritoneal irritation)
- Special tests: McBurney's point (appendicitis), Murphy's sign (cholecystitis)

**Peritoneal Signs:**
- Voluntary guarding: Conscious muscle contraction to protect abdomen
- Involuntary guarding: Unconscious muscle rigidity (more concerning)
- Rigidity: Board-like abdomen (peritonitis)
- Rebound tenderness: Pain when pressure is released
- **Important**: Elderly and immunocompromised may have minimal signs despite serious pathology

## Specific Conditions

**Appendicitis:**

**Classic Presentation:**
- Periumbilical pain → migrates to RLQ (McBurney's point)
- Anorexia (almost always present)
- Nausea, vomiting (pain precedes vomiting)
- Low-grade fever
- RLQ tenderness with possible rebound

**Atypical Presentations:**
- Pelvic appendix: Suprapubic pain, urinary symptoms
- Retrocecal appendix: Flank pain, back pain
- Pregnancy: Appendix displaced upward, right upper quadrant pain
- Elderly: Often minimal pain, may present with confusion

**Diagnosis:**
- CBC: Leukocytosis (not always present)
- Urinalysis: Pyuria, hematuria (if appendix near ureter)
- CT abdomen: Gold standard for diagnosis
- Ultrasound: Preferred in pregnancy and children

**Treatment:**
- IV antibiotics
- Appendectomy (surgical removal)
- Antibiotics alone in selected uncomplicated cases

**Bowel Obstruction:**

**Causes:**
- Adhesions (most common in adults)
- Hernia (incarcerated/strangulated)
- Volvulus (twisting of intestine)
- Intussusception (telescoping - children)
- Tumor
- Constipation/impaction

**Symptoms:**
- Cramping abdominal pain (comes in waves)
- Nausea and vomiting
- Abdominal distension
- Constipation (in complete obstruction) or obstipation (inability to pass gas or stool)
- Bowel sounds: High-pitched early, absent late

**Diagnosis:**
- Abdominal X-ray: Dilated loops of bowel, air-fluid levels
- CT scan: More accurate, identifies transition point
- Findings: Dilated bowel proximal to obstruction, collapsed distal bowel

**Treatment:**
- NPO (nothing by mouth)
- IV fluids
- Nasogastric tube decompression
- Surgery for complete obstruction, strangulation, or peritonitis

**Cholecystitis:**

**Symptoms:**
- RUQ pain, often after fatty meal
- Pain may radiate to right shoulder or scapula
- Nausea, vomiting
- Fever (infection)
- Murphy's sign positive: Arrest of inspiration with RUQ palpation

**Diagnosis:**
- Ultrasound: Gallstones, thickened gallbladder wall, pericholecystic fluid
- HIDA scan: Functional study if ultrasound equivocal
- Labs: Leukocytosis, elevated LFTs (mild)

**Treatment:**
- NPO, IV fluids, antibiotics
- Pain control
- Cholecystectomy (surgical removal)
- Percutaneous cholecystostomy tube in high-risk surgical patients

**Diverticulitis:**

**Symptoms:**
- LLQ pain (most common)
- Fever, nausea, vomiting
- Change in bowel habits
- May have urinary symptoms (if near bladder)

**Diagnosis:**
- CT abdomen: Thickened colonic wall, fat stranding, possible abscess
- Colonoscopy: Avoid during acute attack (risk of perforation)

**Treatment:**
- Uncomplicated: Oral antibiotics, outpatient
- Complicated (abscess, perforation): Hospitalization, IV antibiotics
- Perforation with peritonitis: Surgery (resection with or without colostomy)

**Kidney Stone (Nephrolithiasis):**

**Symptoms:**
- Flank pain radiating to groin
- Colicky pain (comes in waves)
- Nausea, vomiting
- Hematuria (blood in urine)
- Urinary urgency, frequency

**Diagnosis:**
- Urinalysis: Hematuria, crystals
- CT scan: Gold standard for diagnosis and location

**Treatment:**
- Pain control (NSAIDs, opioids)
- Antiemetics
- Hydration
- Urology intervention for large stones, infection, or solitary kidney

## Red Flags for Surgical Emergencies

**Immediate Surgical Consultation For:**
- Peritoneal signs (rigidity, rebound)
- Abdominal pain with hemodynamic instability
- Signs of sepsis (fever, leukocytosis, hypotension)
- Obstipation (no gas or stool output)
- Pneumoperitoneum (free air on imaging)
- Suspected ischemia (pain out of proportion, lactic acidosis)

**Elderly Considerations:**
- May have minimal pain despite serious pathology
- May present with confusion instead of pain
- Higher risk for perforation and poor outcomes
- Lower threshold for imaging and surgical consultation`,
      keyTerms: [
        { term: 'acute abdomen', definition: 'Sudden onset abdominal pain that may require surgical intervention' },
        { term: 'peritonitis', definition: 'Inflammation of the lining of the abdominal cavity; serious condition' },
        { term: 'McBurney\'s point', definition: 'Point in RLQ that is tender in appendicitis; 1/3 distance from hip bone to navel' },
        { term: 'Murphy\'s sign', definition: 'Pain and arrest of inspiration when palpating RUQ; indicates gallbladder inflammation' },
        { term: 'rebound tenderness', definition: 'Pain when pressure is released from abdomen; indicates peritoneal irritation' },
        { term: 'obstipation', definition: 'Inability to pass gas or stool; indicates complete bowel obstruction' },
        { term: 'voluntus guarding', definition: 'Conscious tensing of abdominal muscles to protect painful area' },
      ],
      analogies: [
        'Peritonitis is like having salt rubbed into a wound inside your belly - every movement hurts.',
        'Bowel sounds in obstruction are like trying to force water through a kinked hose - you hear the struggle.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute abdominal emergencies require systematic evaluation integrating history, physical examination, laboratory studies, and imaging to distinguish between surgical and medical causes, with recognition that atypical presentations in special populations can delay diagnosis and increase morbidity.',
      explanation: `## Comprehensive Abdominal Assessment

**Differential Diagnosis by Location:**

**Right Upper Quadrant:**
- Acute cholecystitis: Biliary colic progressing to constant pain, fever, Murphy's sign
- Hepatitis: RUQ pain, jaundice, elevated LFTs
- Pneumonia: Lower lobe pneumonia can cause abdominal pain
- Pyelonephritis: CVA tenderness, fever, urinary symptoms
- Fitz-Hugh-Curtis syndrome: Perihepatitis from PID (RUQ pain in women)

**Right Lower Quadrant:**
- Appendicitis: Migratory pain, anorexia, McBurney's tenderness
- Ectopic pregnancy: Missed period, vaginal bleeding, positive pregnancy test
- Ovarian pathology: Torsion (sudden severe pain), cyst rupture
- Kidney stone: Colicky flank pain radiating to groin
- Mesenteric adenitis: Often in children, follows URI

**Left Upper Quadrant:**
- Splenic infarction/rupture: Usually in trauma or sickle cell
- Splenomegaly: Early satiety, LUQ fullness
- Gastritis: Epigastric/LUQ pain, NSAID use
- Atypical appendicitis (rare)

**Left Lower Quadrant:**
- Diverticulitis: LLQ pain, fever, usually >50 years old
- Ovarian pathology: Cyst, torsion, PID
- Sigmoid volvulus: Elderly, constipation, abdominal distension
- Ectopic pregnancy (rare)

**Epigastric:**
- Peptic ulcer disease: Burning pain, related to meals, NSAID use
- GERD: Burning, retrosternal, worsens with lying down
- Myocardial infarction: Especially inferior wall, can present as epigastric pain
- Pancreatitis: Severe epigastric pain radiating to back, relieved by leaning forward
- Esophagitis: Odynophagia, heartburn

**Periumbilical:**
- Early appendicitis (before migration)
- Small bowel obstruction
- Mesenteric ischemia: "Pain out of proportion to exam"
- AAA rupture: Radiates to back, pulsatile mass

## Detailed Condition Analysis

**Appendicitis:**

**Pathophysiology:**
- Luminal obstruction by fecalith, lymphoid hyperplasia, or tumor
- Stasis → bacterial overgrowth → inflammation → ischemia → perforation
- Risk of perforation: 20% at 24 hours, >70% at 48 hours

**Diagnosis:**
- Alvarado Score (MANTRELS):
  - M: Migration (1 point)
  - A: Anorexia (1 point)
  - N: Nausea/vomiting (1 point)
  - T: Tenderness in RLQ (2 points)
  - R: Rebound tenderness (1 point)
  - E: Elevated temperature (1 point)
  - L: Leukocytosis (2 points)
  - S: Shift in WBC differential (1 point)
  - Score ≥7: High suspicion for appendicitis

**Atypical Presentations:**
- Pregnancy: Appendix displaced upward, may present as RUQ pain
- Elderly: Often present with vague symptoms, delayed diagnosis common
- Immunocompromised: Minimal inflammatory response
- Children: May present with diarrhea initially

**Complications:**
- Perforation: Causes peritonitis, abscess formation
- Appendiceal abscess: May be managed with percutaneous drainage
- Pylephlebitis: Septic thrombosis of portal vein (rare, serious)

**Bowel Obstruction:**

**Classification:**

| Type | Location | Mechanism | Presentation |
|------|----------|-----------|--------------|
| Small bowel | Jejunum/ileum | Adhesions, hernia | Vomiting early prominent |
| Large bowel | Colon | Cancer, volvulus | Constipation prominent |
| High-grade | Significant blockage | Mechanical | Obstipation |
| Low-grade | Partial blockage | Mechanical, adynamic | Some output continues |
| Closed-loop | Two points blocked | Volvulus, incarcerated hernia | High ischemia risk |
| Strangulated | Vascular compromise | Any obstruction | Ischemia, peritonitis |

**Volvulus:**
- Sigmoid volvulus: Elderly, constipated, "U-shaped" loop on X-ray
- Cecal volvulus: Mobile cecum, distension, risk of ischemia
- Management: Decompression with colonoscopy or surgery

**Intussusception:**
- Telescoping of bowel segment
- Most common in children 3 months to 3 years
- "Currant jelly" stools
- Diagnosis: Ultrasound (target sign)
- Treatment: Air contrast enema (often therapeutic) or surgery

**Cholecystitis:**

**Acalculous Cholecystitis:**
- No stones present
- Critical illness, trauma, post-op patients
- Higher mortality (diagnosis often delayed)
- Diagnosis: Ultrasound, CT, or HIDA scan

**Complications:**
- Gangrene: Ischemic gallbladder wall
- Perforation: Leads to bile peritonitis or abscess
- Gallstone ileus: Stone erodes into bowel, causes obstruction

**Choledocholithiasis:**
- Stone in common bile duct
- Jaundice, elevated bilirubin, elevated LFTs
- ERCP for stone extraction

**Pancreatitis:**

**Causes:**
- Gallstones (most common)
- Alcohol
- Hypertriglyceridemia
- Drugs, trauma, ERCP
- Idiopathic

**Diagnosis:**
- Lipase: 3x upper limit of normal (more specific than amylase)
- CT abdomen: For severity assessment and complications
- Ranson's criteria, APACHE II for prognosis

**Complications:**
- Necrotizing pancreatitis
- Pancreatic abscess
- Pseudocyst
- Organ failure (pulmonary, renal)

**Mesenteric Ischemia:**

**Acute Mesenteric Ischemia:**
- Embolic ( SMA embolus): Sudden severe pain, atrial fibrillation
- Thrombotic: Gradual onset, atherosclerotic disease
- Non-occlusive: Low flow state (shock, vasoconstrictors)

**Diagnosis:**
- High clinical suspicion
- CT angiography: Gold standard
- Lactic acidosis (late sign)
- Pain out of proportion to exam (classic sign)

**Treatment:**
- Emergent surgical exploration for embolic/thrombotic
- Vasodilators for non-occlusive
- Bowel resection for necrosis

**Abdominal Aortic Aneurysm (AAA):**

**Ruptured AAA:**
- Classic triad: Hypotension, pulsatile abdominal mass, flank/back pain
- Pain: Severe, tearing/ripping, may radiate to back
- Mortality: >50% if not repaired emergently

**Diagnosis:**
- Bedside ultrasound in unstable patient
- CT angiography in stable patient

**Treatment:**
- Emergency surgical or endovascular repair

## Imaging in Acute Abdomen

**Plain Abdominal X-ray:**
- Limited utility but can show:
  - Free air (pneumoperitoneum)
  - Bowel obstruction pattern
  - Kidney stones (radiopaque)
  - Calcifications

**Ultrasound:**
- First-line for: Gallbladder, appendix (children/pregnancy), ovarian pathology
- No radiation
- Operator-dependent

**CT Abdomen/Pelvis:**
- Gold standard for most abdominal pathology
- IV and oral contrast typically used
- Rapid, comprehensive
- Radiation exposure concern

**MRI:**
- Limited acute use
- Useful in pregnancy, for certain vascular conditions`,
      keyTerms: [
        { term: 'Alvarado score', definition: 'Clinical decision tool for appendicitis; MANTRELS mnemonic' },
        { term: 'closed-loop obstruction', definition: 'Bowel obstructed at two points; high ischemia risk' },
        { term: 'strangulation', definition: 'Compromised blood supply to obstructed bowel; surgical emergency' },
        { term: 'intussusception', definition: 'Telescoping of bowel into adjacent segment; common in children' },
        { term: 'acalculous cholecystitis', definition: 'Gallbladder inflammation without stones; seen in critically ill' },
        { term: 'mesenteric ischemia', definition: 'Inadequate blood flow to intestines; pain out of proportion to exam' },
        { term: 'lipase', definition: 'Pancreatic enzyme; 3x elevation diagnostic for pancreatitis' },
      ],
      clinicalNotes: 'Elderly, very young, pregnant, and immunocompromised patients often present atypically. Maintain high index of suspicion.',
    },
    4: {
      level: 4,
      summary: 'Complex abdominal presentations require integration of clinical judgment, advanced imaging modalities, understanding of surgical disease evolution, and recognition of high-risk patient populations to optimize diagnostic accuracy and time to intervention.',
      explanation: `## Advanced Abdominal Pathophysiology

**Peritonitis:**

**Pathogenesis:**
- Primary: Spontaneous bacterial peritonitis (cirrhotic ascites)
- Secondary: Perforation, ischemia, inflammation
- Tertiary: Persistent or recurrent peritonitis

**Bacterial Translocation:**
- Gut barrier dysfunction → bacteria enter peritoneal cavity
- Exacerbated by bowel ischemia, obstruction, immunosuppression

**Localizing Peritonitis:**
- May be subtle in early obstruction or localized inflammation
- Can be absent in immunocompromised, elderly, or on corticosteroids

**Systemic Effects:**
- Third-spacing: Fluid sequestration in peritoneal cavity
- Hypovolemia, electrolyte abnormalities
- SIRS/sepsis, multi-organ dysfunction

**Appendicitis Revisited:**

**Histologic Progression:**
- Early: Fecalith obstruction → lymphoid hyperplasia
- Progressive: Vascular congestion → ischemia → necrosis
- Late: Perforation → peritonitis/abscess

**Risk Factors for Perforation:**
- Delay in presentation (>24 hours)
- extremes of age (<5 or >60)
- Diabetes (altered pain perception)
- Immunosuppression
- Pregnancy (delayed diagnosis)

**Diagnostic Dilemmas:**
- Mesenteric adenitis: Mimics appendicitis in children, follows URI
- Crohn's disease: Terminal ileitis can mimic appendicitis
- Pelvic inflammatory disease: Lower abdominal pain, cervical motion tenderness

**Bowel Obstruction Advanced Concepts:**

**Pathophysiology:**
- Proximal bowel distension with gas and fluid
- Increased peristalsis initially → secretory function ↑ → distension worsens
- Venous and lymphatic obstruction → bowel wall edema → ischemia
- Bacterial translocation → peritonitis, sepsis

**Strangulation Timeline:**
- Can occur within 6 hours of complete obstruction
- Risk factors: Closed-loop obstruction, volvulus, incarcerated hernia

**Laboratory Findings:**
- Metabolic alkalosis: Proximal obstruction (vomiting gastric acid)
- Metabolic acidosis: Ischemia/strangulation (lactic acidosis)
- Elevated amylase/lipase: Pancreatic involvement from distension
- Leukocytosis: Present, but poor predictor of strangulation

**Special Obstruction Types:**
- Gallstone ileus: Gallstone erodes into bowel, causes obstruction at ileocecal valve
- Bezoar: Indigestible material accumulation (hair, medications, food)
- Malignancy: Gradual obstruction, weight loss, anemia

**Complex Biliary Disease:**

**Choledocholithiasis Complications:**
- Cholangitis: Charcot's triad (fever, jaundice, RUQ pain) + hypotension + confusion (Reynolds' pentad)
- Gallstone pancreatitis: Obstruction at pancreatic duct
- Mirizzi syndrome: Gallstone impaction in cystic duct compressing common bile duct

**Acalculous Cholecystitis:**
- Critically ill patients (burns, trauma, sepsis, TPN)
- Ischemia + stasis + bile stasis
- Diagnosis challenging (often delayed)
- High mortality (10-50%)

**Pancreatitis Severity Stratification:**

**Atlanta Classification (Revised):**

| Severity | Definition | Findings |
|----------|------------|----------|
| Mild | No organ failure, no local/systemic complications | Resolves without intervention |
| Moderately Severe | Local complications or transient organ failure (<48h) | Requires intervention |
| Severe | Persistent organ failure (>48h) | ICU care, high mortality |

**Local Complications:**
- Acute peripancreatic fluid collection
- Acute necrotic collection
- Pseudocyst (encapsulated, no necrosis)
- Walled-off necrosis (encapsulated necrosis)

**Systemic Complications:**
- Pulmonary: ARDS, pleural effusion
- Renal: AKI from hypovolemia
- Cardiovascular: Myocardial depression, hypotension
- Metabolic: Hypocalcemia, hyperglycemia, acidosis

**Ischemic and Vascular Emergencies:**

**Mesenteric Ischemia Timeline:**
- Hyperperistalsis (early) → aperistalsis (late)
- Reversible ischemia (within 6 hours) → transmural infarction (irreversible)
- Mortality: 60-80% overall, >90% with bowel infarction

**CT Findings in Mesenteric Ischemia:**
- Bowel wall thickening (edema)
- Pneumatosis intestinalis (air in bowel wall)
- Portal venous gas
- Mesenteric vascular occlusion

**Ruptured AAA:**
- Classical presentation often absent
- May present with syncope, flank pain, or nonspecific abdominal pain
- Misdiagnosis as nephrolithiasis, musculoskeletal pain common
- Mortality increases by 1-2% per hour from symptom onset

**Gynecologic Emergencies:**

**Ectopic Pregnancy:**
- RUPLNG: Ruptured, Unruptured, Persistent, Live, Gestational sac, No gestational sac
- Diagnosis: Transvaginal ultrasound + beta-hCG
- Treatment: Methotrexate (unruptured, <3.5 cm, fetal cardiac activity absent)
- Treatment: Salpingectomy for rupture or hemodynamic instability

**Ovarian Torsion:**
- Sudden onset severe pain, often with nausea/vomiting
- Enlarged ovary (>5 cm) predisposes
- Diagnosis: Doppler ultrasound (absent venous flow)
- Treatment: Surgical detorsion and oophoropexy or oophorectomy

**Tubo-Ovarian Abscess:**
- Complication of PID
- RUQ pain (if perihepatitis - Fitz-Hugh-Curtis)
- Treatment: Antibiotics, drainage if large

**Urologic Emergencies:**

**Testicular Torsion:**
- Twisting of spermatic cord → ischemia
- Time to salvage: <6 hours (90%), >24 hours (<10%)
- Prehn's sign: Pain relief with elevation (more common in epididymitis, not torsion)
- Diagnosis: Doppler ultrasound (absent flow)
- Treatment: Surgical detorsion and orchiopexy

**Fournier's Gangrene:**
- Necrotizing fasciitis of perineum
- Diabetes, immunosuppression risk factors
- Crepitus, bullae, necrosis
- Treatment: Urgent surgical debridement, broad antibiotics

**Postoperative Abdomen:**

**Anastomotic Leak:**
- Typically day 5-7 post-op
- Signs: Fever, leukocytosis, abdominal pain, organ dysfunction
- Diagnosis: CT with oral contrast (extravasation)
- Treatment: Reoperation vs percutaneous drainage

**Small Bowel Obstruction:**
- Adhesions most common
- Partial may resolve with NGT and NPO
- Complete or strangulated: Surgery required
- Repeat CT if clinical deterioration

**Ileus:**
- Functional, not mechanical
- Common after surgery, opioids, electrolyte abnormalities
- Treatment: Correction of underlying cause`,
      keyTerms: [
        { term: 'Charcot\'s triad', definition: 'Fever, jaundice, and RUQ pain; suggests cholangitis' },
        { term: 'Reynolds\' pentad', definition: 'Charcot\'s triad plus hypotension and confusion; severe cholangitis' },
        { term: 'pneumatosis intestinalis', definition: 'Air in bowel wall; sign of ischemia or necrosis' },
        { term: 'portal venous gas', definition: 'Air in portal vein; sign of bowel necrosis, grave prognosis' },
        { term: 'RUPPLNG', definition: 'Classification of ectopic pregnancy types' },
        { term: 'anastomotic leak', definition: 'Breakdown of surgical connection; serious postoperative complication' },
      ],
      clinicalNotes: 'The "classic" presentation is often absent. High index of suspicion in atypical populations prevents diagnostic delay.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of abdominal emergencies integrates evidence-based diagnostic algorithms, advanced imaging techniques, minimally invasive interventions, and multidisciplinary expertise to optimize outcomes across the spectrum of acute surgical and non-surgical abdominal pathology.',
      explanation: `## Evidence-Based Diagnostic Pathways

**Appendicitis: 2020 Updates**

**Alvarado Score Modifications:**
- Pediatric Appendicitis Score (PAS) for children
- Adult Appendicitis Score for adults
- Scores guide imaging decisions

**Imaging Strategy:**
- Adults: CT abdomen/pelvis (sensitivity 94%, specificity 95%)
- Children/Pregnant: Ultrasound first (sensitivity 86%, specificity 81%)
- MRI as second line in pregnancy if ultrasound equivocal

**Treatment Evolution:**
- Antibiotics alone for uncomplicated appendicitis:
  - CODA trial: 70% of patients avoided surgery at 90 days
  - Consider for selected patients
  - Higher recurrence rate (~20-30% at 1 year)
- Laparoscopic vs open appendectomy:
  - Shorter recovery, lower wound infection
  - Higher cost, longer OR time
  - Both acceptable approaches

**Diverticulitis:**

**Classification Systems:**
- Modified Hinchey classification:
  - I: Pericolic abscess
  - II: Pelvic abscess
  - III: Generalized purulent peritonitis
  - IV: Fecal peritonitis

**Treatment Guidelines:**
- Uncomplicated (Hinchey Ia): Outpatient antibiotics (low-risk patients)
- Complicated (abscess): Percutaneous drainage + antibiotics
- Perforation with peritonitis: Surgery (resection with or without anastomosis)
- After recovery: Colonoscopy in 6-8 weeks (rule out cancer)

**Prevention:**
- High-fiber diet reduces risk
- Avoid nuts, seeds? No evidence for this restriction
- Prophylactic antibiotics after second attack? Consider elective colectomy

**Bowel Obstruction:**

**Management Algorithm:**
- Distinguish SBO vs LBO (imaging)
- Assess for strangulation signs
- Partial vs complete obstruction
- Adhesions (most common) vs other causes

**Water-Soluble Contrast Study:**
- Gastrografin challenge: May therapeutically relieve adhesive SBO
- Predicts need for surgery (contrast reaches colon = may resolve)
- Sensitivity and specificity >90%

**Predictors of Surgical Intervention:**
- Complete obstruction vs partial
- Signs of strangulation
- Failure of conservative management (24-48 hours)
- Elevated lactate
- Mesenteric edema on CT

**Timing of Surgery:**
- Emergency: Signs of strangulation, peritonitis, complete obstruction
- Urgent: Failed conservative management
- Elective: Recurrent obstructions, interval for adhesiolysis

**Cholecystitis:**

**Diagnosis:**
- Ultrasound: Sensitivity 81%, specificity 83%
- Rim sign: Pericholecystic fluid
- Sonographic Murphy's sign: More specific than clinical Murphy's sign
- HIDA scan: For equivocal cases; sensitivity 97%, specificity 90%

**Treatment Timing:**
- Early cholecystectomy (within 24-48 hours): Lower conversion rate to open
- Delayed cholecystectomy (6-8 weeks): Higher rate of recurrent symptoms
- Guidelines support early cholecystectomy for most patients

**Acute Calculous Cholecystitis:**
- Tokyo Guidelines (2018): Diagnostic criteria, severity grading
- Grade I (mild): Early cholecystectomy
- Grade II (moderate): Early cholecystectomy
- Grade III (severe): Manage medically, then delayed cholecystectomy

**Acute Acalculous Cholecystitis:**
- Cholecystostomy tube preferred initially
- Cholecystectomy when patient stabilizes

**Pancreatitis:**

**Severity Stratification:**
- Bedside Index for Severity in Acute Pancreatitis (BISAP)
- SIRS score on admission
- Persistent SIRS (>48 hours) predicts organ failure

**Fluid Resuscitation:**
- Aggressive early: 250-500 mL/hour for first 6 hours
- Goal: MAP 65-85 mmHg, urine output 0.5 mL/kg/hour
- Avoid fluid overload after initial resuscitation

**Nutrition:**
- Enteral nutrition preferred over parenteral
- Nasogastric vs nasojejunal: Similar outcomes
- Start within 24-48 hours if tolerated

**Antibiotics:**
- Prophylactic antibiotics NOT recommended for sterile necrosis
- Antibiotics for infected necrosis only
- Proven infected necrosis: FNA, culture, then antibiotics

**Intervention for Necrosis:**
- Step-up approach (PANTER trial):
  - Percutaneous drainage first
  - If no improvement, surgical necrosectomy
  - Endoscopic transgastric necrosectomy (emerging)

**Colonic Volvulus:**

**Sigmoid Volvulus:**
- Endoscopic detorsion first (successful 70-90%)
- Elective surgery after decompression
- Emergency surgery if perforation or ischemia

**Cecal Volvulus:**
- Surgical resection (no effective endoscopic management)
- Right hemicolectomy

**Mesenteric Ischemia:**

**CT Angiography Gold Standard:**
- Sensitivity 93%, specificity 96%
- Shows occlusion, bowel wall changes, pneumomatosis

**Treatment:**
- Occlusive: Emergent surgical exploration + vascular reconstruction
- Non-occlusive: Vasodilators (papaverine intra-arterial)
- Second-look surgery: 24-48 hours later if extensive resection

**AAA Rupture:**

**Endovascular vs Open Repair:**
- EVAR: Less invasive, faster
- Open: More durable, higher morbidity
- Choice based on anatomy, patient factors, center expertise

## Special Populations

**Pregnant Patients:**
- Appendicitis: Most common non-obstetric surgical emergency
- Anatomy: Appendix displaced upward (right upper quadrant in third trimester)
- Imaging: Ultrasound first, then MRI (avoid CT)
- Fetal risks higher with delayed diagnosis than with imaging

**Elderly Patients:**
- Atypical presentations common
- Higher perforation rates
- Comorbidities increase risk
- Lower threshold for CT scan and surgical consultation
- Poorer outcomes with delayed treatment

**Immunocompromised:**
- HIV, transplant, chemotherapy, chronic steroids
- Blunted inflammatory response
- Minimal peritoneal signs despite serious pathology
- High index of suspicion required
- Broader differential (including opportunistic infections)

## Postoperative Complications

**Anastomotic Leak Management:**
- CT with oral/rectal contrast
- Percutaneous drainage if accessible
- Reoperation with diversion if septic or peritonitis
- Nutrition support (TPN or enteral)

**Intra-abdominal Abscess:**
- Percutaneous drainage first-line
- Antibiotics based on culture
- Surgical drainage if inaccessible

**Surgical Site Infections:**
- Prophylactic antibiotics within 60 minutes of incision
- Perioperative normothermia
- Glycemic control
- Smoking cessation preoperatively

## Quality Metrics

**Time-Based Metrics:**
- Door-to-CT for appendicitis: <60 minutes
- Door-to-incision for appendicitis: <8 hours
- Time to antibiotics for perforated viscus: <3 hours
- Time to OR for obstruction with strangulation: <2 hours

**Outcome Metrics:**
- Negative appendectomy rate: Target <10%
- Surgical site infection rate: Target <5%
- Return to OR within 30 days
- Length of stay
- Readmission rate`,
      keyTerms: [
        { term: 'CODA trial', definition: 'Comparison of Antibiotics and Appendectomy for uncomplicated appendicitis trial' },
        { term: 'Hinchey classification', definition: 'Staging system for perforated diverticulitis' },
        { term: 'Tokyo Guidelines', definition: 'Diagnostic and severity grading for cholecystitis' },
        { term: 'BISAP', definition: 'Bedside Index for Severity in Acute Pancreatitis; 5-point mortality predictor' },
        { term: 'step-up approach', definition: 'Minimally invasive drainage first, surgery if needed' },
        { term: 'EVAR', definition: 'Endovascular Aneurysm Repair; minimally invasive AAA treatment' },
      ],
      clinicalNotes: `Key Clinical Pearls for Abdominal Emergencies:

1. **Atypical presentations are common**: Especially in elderly, pregnant, immunocompromised
2. **Pain migration is classic**: Periumbilical → RLQ suggests appendicitis
3. **Exam limitations**: Obese patients, prior surgeries, altered mental status affect exam
4. **Don't rely on fever**: Absent early in many surgical conditions
5. **Obstipation is significant**: Inability to pass gas or stool = complete obstruction until proven otherwise
6. **Elderly perforation risk**: Higher perforation rates, often present later
7. **Pregnancy alters anatomy**: Consider appendix displacement, prefer ultrasound/MRI
8. **Re-examine frequently**: Surgical abdomen can evolve rapidly
9. **Labs lag behind**: Normal WBC does not rule out surgical abdomen
10. **Improve antibiotic stewardship**: Targeted duration based on condition, not arbitrary`,
    },
  },

  media: [
    {
      id: 'abdominal-pain-quadrants',
      type: 'diagram',
      filename: 'abdominal-quadrants-diagnosis.svg',
      title: 'Abdominal Pain by Quadrant',
      description: 'Differential diagnosis organized by abdominal quadrant',
    },
    {
      id: 'appendicitis-migration',
      type: 'diagram',
      filename: 'appendicitis-pain-migration.svg',
      title: 'Appendicitis Pain Migration',
      description: 'Classic periumbilical to RLQ pain migration pattern',
    },
    {
      id: 'bowel-obstruction-imaging',
      type: 'diagram',
      filename: 'bowel-obstruction-xray-patterns.svg',
      title: 'Bowel Obstruction Imaging Patterns',
      description: 'X-ray and CT findings in bowel obstruction',
    },
  ],

  citations: [
    {
      id: 'coda-trial-2020',
      type: 'article',
      title: 'A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis',
      authors: ['Talan, D.A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2014320',
    },
    {
      id: 'tokyo-guidelines-2018',
      type: 'article',
      title: 'Tokyo Guidelines 2018: Diagnostic Criteria and Severity Grading of Acute Cholecystitis',
      authors: ['Yokoe, M.', 'et al.'],
      source: 'Journal of Hepato-Biliary-Pancreatic Sciences',
    },
    {
      id: 'wses-guidelines-appendicitis',
      type: 'article',
      title: '2017 WSES Guidelines for Acute Appendicitis',
      authors: ['Sartelli, M.', 'et al.'],
      source: 'World Journal of Emergency Surgery',
    },
    {
      id: 'tintinalli-abdominal',
      type: 'textbook',
      title: 'Tintinalli\'s Emergency Medicine: A Comprehensive Study Guide',
      source: 'McGraw Hill',
      chapter: 'Acute Abdominal Pain',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'system-digestive', targetType: 'system', relationship: 'parent', label: 'Digestive System' },
    { targetId: 'condition-diverticulitis', targetType: 'condition', relationship: 'related', label: 'Diverticulitis' },
  ],

  tags: {
    systems: ['digestive', 'urinary', 'reproductive'],
    topics: ['emergency medicine', 'general surgery', 'gastroenterology'],
    keywords: ['acute abdomen', 'appendicitis', 'cholecystitis', 'obstruction', 'diverticulitis', 'peritonitis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default abdominalEmergenciesContent;
