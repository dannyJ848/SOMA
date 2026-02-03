/**
 * GI Bleeding - UGIB, LGIB, Evaluation, Treatment
 *
 * Covers upper and lower gastrointestinal bleeding, including etiology,
 * evaluation, resuscitation, and management.
 */

import { EducationalContent } from '../types';

export const giBleedingContent: EducationalContent = {
  id: 'gi-bleeding-disorders',
  type: 'condition',
  name: 'GI Bleeding',
  alternateNames: [
    'Gastrointestinal Bleeding',
    'GI Hemorrhage',
    'Upper GI Bleeding',
    'Lower GI Bleeding',
    'UGIB',
    'LGIB',
    'Hematemesis',
    'Melena',
    'Hematochezia',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'GI bleeding occurs when there is blood loss from the digestive tract. It can be life-threatening and requires immediate medical attention.',
      explanation: `**What is GI Bleeding?**

Gastrointestinal (GI) bleeding is when blood escapes from the digestive tract. This can happen anywhere from the mouth to the rectum. GI bleeding can be a serious medical emergency.

**Types of GI Bleeding:**

1. **Upper GI Bleeding**
   - Bleeding from the esophagus, stomach, or upper small intestine
   - Common causes: stomach ulcers, esophageal varices, tears in the esophagus
   - Symptoms: Vomiting blood or dark material like coffee grounds

2. **Lower GI Bleeding**
   - Bleeding from the colon or rectum
   - Common causes: hemorrhoids, diverticulosis, polyps, cancer
   - Symptoms: Bright red blood in stool or on toilet paper

**Warning Signs:**
- Vomiting blood (bright red or looks like coffee grounds)
- Black, tarry stools (melena)
- Bright red blood in stool
- Stomach pain
- Feeling dizzy, weak, or faint
- Looking pale
- Fast heartbeat
- Shortness of breath
- Confusion (especially in older adults)

**Common Causes:**
- **Stomach ulcers:** Sores in the stomach lining from acid or infection
- **Esophageal varices:** Swollen veins in the esophagus (often from liver disease)
- **Mallory-Weiss tears:** Tears from vomiting forcefully
- **Hemorrhoids:** Swollen veins in the rectum
- **Diverticulosis:** Small pouches in the colon that can bleed
- **Polyps or cancer:** Abnormal growths in the colon
- **Angiodysplasia:** Abnormal blood vessels in the GI tract

**Diagnosis:**
- Blood tests to check for anemia and clotting problems
- Stool tests to check for hidden blood
- Endoscopy: A camera on a flexible tube to look inside the digestive tract
- Colonoscopy: Similar camera test for the colon
- Imaging tests like CT scans

**Treatment:**
- Fluids through IV for dehydration
- Blood transfusion if severe
- Medications to reduce stomach acid
- Procedures to stop bleeding (burning the bleeding vessel, clipping, banding)
- Surgery for severe cases not controlled by other methods

**Prevention:**
- Treat conditions that cause bleeding (ulcers, varices)
- Limit alcohol and avoid smoking
- Use NSAID pain medicines carefully
- Get screened for colon cancer as recommended`,
      keyTerms: [
        { term: 'upper GI bleeding', definition: 'Bleeding from esophagus, stomach, or upper small intestine' },
        { term: 'lower GI bleeding', definition: 'Bleeding from colon or rectum' },
        { term: 'hematemesis', definition: 'Vomiting blood', pronunciation: 'hee-muh-TEM-uh-sis' },
        { term: 'melena', definition: 'Black, tarry stools from digested blood', pronunciation: 'muh-LEE-nuh' },
        { term: 'hematochezia', definition: 'Bright red blood in stool', pronunciation: 'hee-muh-toe-KEE-zee-uh' },
        { term: 'ulcer', definition: 'Open sore in the lining of the stomach or intestine' },
        { term: 'varices', definition: 'Swollen veins that can bleed', pronunciation: 'VAIR-uh-seez' },
      ],
      analogies: [
        'GI bleeding is like a leak in a pipe - you need to find where it is coming from and fix it.',
        'Melena is like asphalt - black and tarry because blood has been digested by stomach acid.',
        'Varices are like balloons filled with blood that can burst under pressure.',
      ],
      examples: [
        'Someone with liver disease might have bleeding esophageal varices.',
        'A person taking daily aspirin might develop a bleeding stomach ulcer.',
        'An elderly person might have diverticular bleeding with bright red blood.',
      ],
      patientCounselingPoints: [
        'Seek immediate medical care if you vomit blood or have black, tarry stools',
        'Tell your doctor about all medications you take, especially blood thinners',
        'Limit or avoid alcohol if you have liver disease',
        'Get colonoscopies as recommended for cancer screening',
        'Report any new belly pain or changes in bowel movements',
      ],
    },

    2: {
      level: 2,
      summary: 'GI bleeding is classified as upper or lower based on the source proximal or distal to the ligament of Treitz. Common causes include PUD, varices, Mallory-Weiss tears, diverticulosis, and angiodysplasia.',
      explanation: `## Classification of GI Bleeding

**Upper GI Bleeding (UGIB):**
- Source proximal to ligament of Treitz
- Accounts for 75-80% of acute GI bleeds
- Mortality 5-10% (higher with comorbidities)

**Lower GI Bleeding (LGIB):**
- Source distal to ligament of Treitz
- Accounts for 20-25% of acute GI bleeds
- Generally lower mortality than UGIB

## Upper GI Bleeding

**Common Causes (Frequency):**
1. **Peptic Ulcer Disease (PUD):** 40-50%
   - Gastric ulcers
   - Duodenal ulcers
   - Often from H. pylori or NSAIDs

2. **Esophageal Varices:** 10-20%
   - From portal hypertension
   - Associated with cirrhosis
   - High mortality

3. **Mallory-Weiss Tear:** 5-10%
   - Mucosal tear at GE junction
   - From retching/vomiting
   - Usually self-limited

4. **Erosive Gastritis:** 5-10%
   - NSAID-induced
   - Alcohol, stress
   - Severe illness

5. **Esophagitis:** 5%
   - GERD
   - Infections (Candida, CMV, HSV)

6. **Other:** Mallory-Weiss, vascular lesions, malignancy

**Clinical Presentation:**
- **Hematemesis:** Vomiting bright red blood
- **Coffee-ground emesis:** Vomiting dark, grainy material
- **Melena:** Black, tarry, foul-smelling stools
- **Hematochezia:** Bright red blood per rectum (if massive UGIB)

## Lower GI Bleeding

**Common Causes:**
1. **Diverticulosis:** 20-40%
   - Most common cause
   - Painless bleeding
   - Spontaneous cessation common

2. **Hemorrhoids:** 10-20%
   - Bright red blood on toilet paper or coating stool
   - Painful if thrombosed
   - Usually not severe

3. **Angiodysplasia:** 5-10%
   - Abnormal blood vessels
   - More common in elderly
   - Can cause chronic bleeding

4. **Colorectal Cancer:** 5-10%
   - Usually chronic, occult bleeding
   - Can present acutely

5. **Inflammatory Bowel Disease:** 5%
   - Ulcerative colitis
   - Crohn disease

6. **Ischemic Colitis:** 5%
   - Low-flow state
   - Usually in elderly

7. **Other:** Polyps, infectious colitis, radiation

## Initial Assessment and Stabilization

**ABCs:**
- **Airway:** Protect airway in massive hematemesis
- **Breathing:** Assess respiratory status
- **Circulation:** IV access, fluid resuscitation

**Resuscitation:**
- Two large-bore IVs
- Crystalloid resuscitation (LR or NS)
- Blood transfusion if:
  - Hemoglobin <7 g/dL (most patients)
  - Hemoglobin <9 g/dL with cardiac disease
  - Active, massive bleeding

**Labs:**
- CBC, BMP, LFTs, coagulation profile
- Type and cross for blood
- Cardiac biomarkers if indicated

**Risk Stratification:**
- **UGIB:** Glasgow-Blatchford Score, Rockall Score
- **LGIB:** Oakland Score

## Diagnostic Evaluation

**Upper GI Bleeding:**
- Upper endoscopy (EGD) within 24 hours
- Allows diagnosis AND treatment
- Identify high-risk stigmata:
  - Active spurting
  - Oozing
  - Visible vessel
  - Adherent clot
  - Flat spot

**Lower GI Bleeding:**
- Colonoscopy after prep (if stable)
- Tagged RBC scan if active bleeding
- Angiography (therapeutic if bleeding >0.5-1 mL/min)
- CT angiography (increasingly used)

**Clinical Clues:**

| Finding | Suggests |
|---------|----------|
| Coffee-ground emesis | UGIB, slow bleed |
| Hematemesis | UGIB, significant bleed |
| Melena | UGIB (or proximal small bowel) |
| Hematochezia | LGIB OR massive UGIB |
| Blood on toilet paper | Hemorrhoids/fissure |
| Blood coating stool | Hemorrhoids |
| Blood mixed in stool | Colonic source`,
      keyTerms: [
        { term: 'ligament of Treitz', definition: 'Anatomic landmark separating upper from lower GI tract' },
        { term: 'hematemesis', definition: 'Vomiting blood' },
        { term: 'melena', definition: 'Black, tarry stools from digested blood' },
        { term: 'hematochezia', definition: 'Bright red or maroon blood per rectum' },
        { term: 'varices', definition: 'Dilated, tortuous veins from portal hypertension' },
        { term: 'diverticulosis', definition: 'Small outpouchings in colon wall' },
        { term: 'angiodysplasia', definition: 'Abnormal, dilated blood vessels in GI tract' },
        { term: 'Rockall score', definition: 'Risk stratification for UGIB mortality and rebleeding' },
        { term: 'Glasgow-Blatchford', definition: 'Score predicting need for intervention in UGIB' },
      ],
      analogies: [
        'The ligament of Treitz is like a border crossing between upper and lower GI tract.',
        'Visible vessel on endoscopy is like a volcano ready to erupt again.',
      ],
      examples: [
        'A patient with cirrhosis vomiting bright red blood likely has bleeding varices.',
        'An elderly person with sudden painless bloody diarrhea likely has diverticular bleeding.',
        'Someone who vomited after forceful retching with bright red blood may have a Mallory-Weiss tear.',
      ],
    },

    3: {
      level: 3,
      summary: 'GI bleeding requires systematic evaluation with risk stratification, resuscitation, and timely endoscopic intervention. UGIB is most commonly from PUD, while LGIB typically arises from diverticulosis in the elderly.',
      explanation: `## Risk Stratification Scores

**Glasgow-Blatchford Score (GBS):**
- Predicts need for intervention (transfusion, endoscopy, surgery)
- Scores 0-2: Low risk, may discharge
- Scores ≥6: High risk, hospitalize
- Based on:
  - Hemoglobin
  - BUN
  - Systolic BP
  - Pulse
  - Presentation (melena, syncope, cardiac disease)
  - Liver disease

**Pre-endoscopy Rockall Score:**
- Predicts mortality based on:
  - Age
  - Shock
  - Comorbidities
  - Diagnosis
  - Major stigmata of recent hemorrhage

**Complete Rockall Score:**
- Includes endoscopic findings
- Score ≥3: Consider early discharge
- Score >8: High mortality risk

**Oakland Score (LGIB):**
- Predicts safe discharge
- Score ≤8: Low risk, may discharge
- Based on age, sex, comorbidities, vitals, bleeding characteristics

## Upper GI Bleeding Management

**Initial Management:**
- IV PPI (omeprazole or pantoprazole) BEFORE endoscopy
  - Reduces need for endoscopic therapy
  - High-dose: 80 mg bolus, then 8 mg/hr infusion
  - Standard dose IV also acceptable
- Prokinetic (erythromycin 250 mg IV) if:
  - Significant bleeding
  - Expected poor visibility
  - Reduces need for repeat endoscopy
- Antibiotics for suspected variceal bleed
  - Ceftriaxone 1 g daily
  - Reduces mortality and rebleeding

**Timing of Endoscopy:**
- **Urgent (<12 hours):** Hemodynamic instability, variceal bleed suspected
- **Early (<24 hours):** Most patients (improves outcomes)
- **Elective (>24 hours):** Low-risk patients

**Endoscopic Therapy for Ulcers:**

*High-risk stigmata requiring treatment:*
- Active spurting
- Oozing
- Visible vessel
- Adherent clot (controversial, consider)

*Modalities:*
- Injection therapy: Epinephrine (tamponade, not definitive alone)
- Thermal: Bipolar cautery, heater probe
- Mechanical: Hemoclips (through-the-scope clips)
- Combination therapy superior

**Post-endoscopy Care:**
- Continue PPI BID for high-risk ulcers, then daily
- Restart anticoagulation when hemostasis secured (usually 3-7 days)
- H. pylori testing and treatment if ulcer found

## Variceal Hemorrhage Management

**Acute Management:**
1. **Resuscitation:**
   - Large-bore IVs
   - Blood products (restrictive transfusion strategy: Hgb 7)
   - Correct coagulopathy (FFP, platelets)

2. **Pharmacologic:**
   - Octreotide 50 mcg bolus, then 50 mcg/hr infusion
   - OR terlipressin where available
   - Continue 3-5 days

3. **Antibiotics:**
   - Ceftriaxone 1 g daily (or quinolone)
   - Reduces bacterial infections and mortality

4. **Endoscopy (within 12 hours):**
   - EVL (band ligation) - first line
   - Sclerotherapy (alternative)
   - Balloon tamponade (temporary bridge)

**Refractory Bleeding:**
- TIPS (transjugular intrahepatic portosystemic shunt)
- Early TIPS (within 72 hours) for high-risk patients
- Surgical shunt (rare, TIPS preferred)

## Lower GI Bleeding Management

**Stabilization:**
- Similar to UGIB
- Assess hemodynamic stability

**Diagnostic Approach:**
- **Colonoscopy:** After bowel prep (within 24 hours)
  - Allows diagnosis and treatment
  - Preparations vary (rapid prep acceptable)
- **Tagged RBC scan:**
  - Detects bleeding at 0.1-0.5 mL/min
  - Localizes to general area
  - Positive scan → angiography
- **CT Angiography:**
  - Detects bleeding at 0.3-0.5 mL/min
  - Localization for angiography
- **Mesenteric Angiography:**
  - Bleeding at >0.5-1 mL/min
  - Allows embolization or vasopressin infusion

**Endoscopic Treatment (LGIB):**
- Epinephrine injection
- Thermal coagulation
- Hemoclips
- Combination therapy

**Angiographic Treatment:**
- Microcoil embolization
- Gelfoam embolization
- Vasopressin infusion (older, less used)

**Surgical Treatment:**
- Segmental resection after localization
- Subtotal colectomy for unlocalized massive bleed
- High mortality in emergencies

## Obscure GI Bleeding

**Definition:**
- Bleeding from GI tract not identified on endoscopy
- After EGD and colonoscopy

**Evaluation:**
- **Capsule endoscopy:**
  - Visualizes small bowel
  - 60% diagnostic yield
- **Device-assisted enteroscopy:**
  - Double balloon enteroscopy
  - Single balloon enteroscopy
  - Therapeutic capability
- **CT/MR enterography:**
  - Small bowel visualization
  - Mass lesions, inflammation`,
      keyTerms: [
        { term: 'high-risk stigmata', definition: 'Endoscopic findings predictive of rebleeding requiring treatment' },
        { term: 'EVL', definition: 'Endoscopic variceal ligation - banding of varices' },
        { term: 'TIPS', definition: 'Transjugular intrahepatic portosystemic shunt' },
        { term: 'capsule endoscopy', definition: 'Pill camera to visualize small bowel' },
        { term: 'tagged RBC scan', definition: 'Nuclear scan using radiolabeled RBCs to localize bleeding' },
        { term: 'enteroscopy', definition: 'Endoscopic evaluation of small bowel' },
        { term: 'obscure GI bleeding', definition: 'Bleeding not identified on standard endoscopy/colonoscopy' },
      ],
      clinicalNotes: 'Variceal bleed: Octreotide + antibiotics + urgent endoscopy. Early TIPS (within 72 hours) for Child-Pugh C or active bleeding despite endoscopy. Restrictive transfusion (Hgb 7) improves outcomes in cirrhosis.',
    },

    4: {
      level: 4,
      summary: 'GI bleeding management requires understanding of bleeding physiology, risk assessment tools, and evidence-based interventions. Portal hypertensive bleeding and anticoagulated patients require specialized approaches.',
      explanation: `## Advanced Bleeding Physiology

**Hemostatic Mechanisms in GI Tract:**
- Vascular constriction (seconds)
- Platelet plug formation (minutes)
- Coagulation cascade (minutes)
- Fibrinolysis regulation

**Impairment in UGIB:**
- Acid pH inhibits platelet aggregation and clot formation
- Pepsin digests clots
- PPIs improve clot stability by raising pH

**Portal Hypertension and Varices:**
- HVPG >10 mmHg: Varices develop
- HVPG >12 mmHg: Variceal bleed risk
- Variceal wall tension = (pressure × radius)/wall thickness
- Larger varices, red wale marks, advanced Child-Pugh = higher risk

## Advanced Risk Stratification

**GBS in Detail:**
Points assigned for:
- BUN ≥18.2 mg/dL (2)
- Hb <11 g/dL men, <10 g/dL women (6)
- Systolic BP <90 mmHg (3)
- Pulse ≥100/min (1)
- Presentation with melena (1), syncope (2)
- Hepatic disease (2), cardiac failure (2)

**GBS=0 predicts:**
- <1% need for intervention
- Safe for outpatient management

**AIMS65 Score:**
- Albumin <3 g/dL
- INR >1.5
- Altered mental status
- Systolic BP <90
- Age >65
- Predicts mortality, length of stay

## Special Populations

**Anticoagulated Patients:**

*DOAC-Associated Bleeding:*
- Hold anticoagulant
- Consider specific reversal:
  - Dabigatran: Idarucizumab
  - Apixaban/rivaroxaban: Andexanet alfa
- Restart anticoagulation when hemostasis secured
- Timing: 3-7 days for high-risk bleeds, 24-48 hours for low-risk

*Warfarin-Associated Bleeding:*
- Hold warfarin
- Vitamin K 10 mg IV (slow) for urgent reversal
- 4-factor PCC for life-threatening bleed
- FFP if PCC unavailable

**Antiplatelet Agents:**
- Aspirin: Continue if cardiovascular risk high
- DAPT: Balance ischemic vs. bleeding risk
- Platelet transfusion only if actively bleeding with thrombocytopenia

**Pregnant Patients:**
- Endoscopy safe in all trimesters
- Avoid radiation
- EGD: Left lateral position, fetal monitoring
- Colonoscopy: Defer to second trimester if possible

**Pediatric Patients:**
- Meckel diverticulum (common cause of LGIB)
- Technetium pertechnetate scan (Meckel scan)
- Polyps (juvenile polyps most common)
- Varices (extrahepatic portal vein obstruction common)

## Rebleeding Prevention

**UGIB Secondary Prevention:**
- PUD:
  - H. pylori test and treat
  - Continue PPI if on NSAIDs
  - Consider H. pylori test of cure in high-risk
- Varices:
  - NSBBs (propranolol, nadolol) titrated
  - Repeat EVL until obliterated
  - Surveillance endoscopy

**LGIB Secondary Prevention:**
- Diverticulosis: No proven prevention
- Angiodysplasia: Consider estrogen/progesterone, octreotide
- IBD: Optimize medical therapy
- Polyps/Cancer: Polypectomy/surgical resection

## Difficult-to-Control Bleeding

**Endoscopic Rescue Techniques:**
- Over-the-scope clips (OTSC) for large defects
- Hemostatic powder sprays (TC-325, Hemospray)
- Endoscopic suturing
- Covered esophageal stents for variceal bleed

**Radiological Interventions:**
- Angiographic embolization (coils, gelfoam)
- Vasopressin infusion
- Covered stents for vascular injuries

**Surgical Options:**
- Over-sew of bleeding ulcer
- Gastrectomy for refractory ulcer
- Subtotal colectomy for LGIB
- Portosystemic shunt for refractory varices

## Obscure-Overt Bleeding

**Systematic Approach:**
1. **Repeat endoscopy** (missed lesions in 20-30%)
2. **Capsule endoscopy**
   - Small bowel visualization
   - Lesions: Angioectasia, ulcers, tumors
3. **Device-assisted enteroscopy**
   - Anterograde or retrograde
   - Therapeutic capability
4. **CT/MR enterography**
   - Mass lesions
   - Inflammation
5. **Intraoperative enteroscopy**
   - Last resort
   - Requires surgical laparotomy

**Angioectasia Treatment:**
- Endoscopic: APC, heater probe, clips
- Medical: Octreotide, estrogen/progesterone
- Anticoagulation management (individualized)`,
      keyTerms: [
        { term: 'HVPG', definition: 'Hepatic venous pressure gradient; measures portal pressure' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; includes dabigatran, apixaban, rivaroxaban' },
        { term: 'PCC', definition: 'Prothrombin complex concentrate; rapidly reverses warfarin' },
        { term: 'OTSC', definition: 'Over-the-scope clip; larger clip for large defects' },
        { term: 'APC', definition: 'Argon plasma coagulation; endoscopic coagulation technique' },
        { term: 'Meckel diverticulum', definition: 'Congenital ileal outpouching containing gastric mucosa; common pediatric LGIB cause' },
      ],
      clinicalNotes: 'Restart anticoagulation after high-risk GI bleed: Balance thrombotic risk (CHA2DS2-VASc) vs bleeding risk. Most patients should restart within 7 days. Consider PPI cotherapy for all on anticoagulation.',
    },

    5: {
      level: 5,
      summary: 'Contemporary GI bleeding management incorporates multidisciplinary care, risk-adapted transfusion strategies, and evidence-based use of endoscopic, radiologic, and surgical interventions. Guidelines from ACG and international societies provide frameworks for care.',
      explanation: `## Evidence-Based Resuscitation

**Transfusion Strategy:**

*General Population:*
- Restrictive strategy (Hgb <7 g/dL)
- Reduces mortality compared to liberal strategy
- Exceptions: Active hemorrhage with hemodynamic instability

*Chronic Liver Disease:*
- Hgb <7 g/dL (strong recommendation)
- Higher transfusion threshold increases portal pressure and mortality
- Correct coagulopathy (platelets <50, INR >2)
- Consider cryoprecipitate if fibrinogen <120 mg/dL

*Cardiovascular Disease:*
- Hgb <8 g/dL (or symptomatic anemia)
- Individualize based on ischemic risk

**Procoagulant Agents:**
- Tranexamic acid: No benefit in UGIB (HALT-IT trial)
- Recombinant factor VIIa: Not recommended (thrombotic risk)
- PCC: Indicated for warfarin reversal with life-threatening bleed

## UGIB Management (ACG 2021)

**Pre-endoscopy Management:**

*PPI Therapy:*
- High-dose continuous infusion NOT superior to intermittent dosing
- Standard dose IV PPI acceptable
- Oral PPI if low-risk and delayed endoscopy

*Prokinetics:*
- Erythromycin 250 mg IV 30-120 minutes before endoscopy
- Improves visualization, reduces need for repeat endoscopy
- Consider if significant bleed or delayed endoscopy

*Antibiotics:*
- All patients with cirrhosis and acute GI bleed
- Ceftriaxone 1 g daily for 5-7 days
- Reduces bacterial infections and mortality

**Timing of Endoscopy:**
- **Within 6 hours:** NOT recommended (worse outcomes)
- **Within 12 hours:** High-risk patients (hemodynamic instability, variceal)
- **Within 24 hours:** Most patients
- **After 24 hours:** Low-risk patients

**Endoscopic Therapy Selection:**

*For Ulcers:*
- Combination therapy preferred (epinephrine + second modality)
- Epinephrine alone is inadequate
- Clips or thermal coagulation preferred over injection alone
- Over-the-scope clips for large ulcers (>2 cm)

*For Non-variceal:*
- Standard techniques effective for most
- Hemostatic powder (TC-325) for difficult lesions
- Covered esophageal stents for fistula/deep ulcers

**Post-endoscopy Management:**
- High-dose IV PPI for 72 hours, then oral
- Oral PPI twice daily for high-risk ulcers, then once daily for duration indicated
- H. pylori testing and treatment if PUD

## Variceal Hemorrhage (AASLD 2023)

**Acute Management Bundle:**
1. **Vasoactive drugs:**
   - Octreotide 50 mcg bolus, 50 mcg/hr infusion (preferred in US)
   - Terlipressin 2 mg IV q4h (not available in US)
   - Continue for 3-5 days

2. **Antibiotics:**
   - Ceftriaxone 1 g IV daily (preferred)
   - Norfloxacin 400 mg BID (alternative)
   - Reduces infections, rebleeding, and mortality

3. **Endoscopy within 12 hours:**
   - EVL preferred over sclerotherapy
   - Repeat until obliteration

**Early TIPS:**
- Indicated for:
  - Child-Pugh C (10-13 points)
  - Child-Pugh B (7-9) with active bleeding
- Within 72 hours (ideally <24 hours)
- Reduces mortality and rebleeding
- Covered stents preferred (lower encephalopathy risk)

**Rescue TIPS:**
- Failure of medical + endoscopic therapy
- Defined as:
  - Hemodynamic instability despite 2 units transfusion
  - Persistent active bleeding despite 2 endoscopic attempts

**Secondary Prevention:**
- NSBBs (propranolol, nadolol) after acute bleed controlled
- Carvedilol may be more effective
- Repeat EVL until obliteration
- Surveillance endoscopy every 1-3 months

## LGIB Management (ACG 2024 Update)

**Risk Stratification:**
- Oakland score ≤8: Safe for outpatient management
- Consider discharge if vitals stable, minimal comorbidities

**Colonoscopy Timing:**
- Urgent colonoscopy (<24 hours) NOT superior to routine
- Perform after adequate prep (within 24-48 hours)
- Oral prep preferred (rapid prep acceptable)
- Tagged RBC scan if active bleeding and unstable

**Management Algorithm:**
1. Hemodynamic instability → Angiography (if rapid bleed)
2. Stable → Colonoscopy after prep
3. Colonoscopy negative/negative prep → Consider:
   - Capsule endoscopy
   - Tagged RBC scan
   - Angiography

**Diverticular Bleeding:**
- Most self-limited (80%)
- High rebleeding rate without definitive therapy
- Endoscopic therapy if active bleeding or visible vessel
- Surgical resection for recurrent/severe
- Segmental colectomy after localization

## Antithrombotic Management

**Peri-endoscopy Management:**

*Low-risk endoscopy:*
- Continue anticoagulation
- Continue single antiplatelet
- Hold DAPT 5-7 days if elective

*High-risk endoscopy (with therapy):*
- Hold warfarin, bridge if high thrombotic risk
- Hold DOACs for 24-48 hours before
- Hold clopidogrel 5-7 days
- Resume anticoagulation 3-7 days post

**Post-bleed Restart:**
- Assess individualized thrombotic vs. bleeding risk
- Most patients: Resume within 7 days
- Add PPI for all on anticoagulation
- DAPT: Resume aspirin immediately, delay P2Y12

## Quality Metrics

**ACG/American Gastroenterological Association Quality Measures:**
- Time to endoscopy (<24 hours for UGIB)
- Appropriate PPI use
- H. pylori testing and treatment
- Antibiotics for variceal bleed
- Appropriate transfusion thresholds
- Documentation of high-risk stigmata
- Planned follow-up for high-risk findings`,
      keyTerms: [
        { term: 'restrictive transfusion', definition: 'Hgb threshold of 7 g/dL for transfusion; improves outcomes' },
        { term: 'HALT-IT trial', definition: 'Showed no benefit for tranexamic acid in GI bleeding' },
        { term: 'early TIPS', definition: 'TIPS placed within 72 hours for high-risk variceal bleed' },
        { term: ' Oakland score', definition: 'LGIB risk stratification score; ≤8 safe for discharge' },
        { term: 'high-risk endoscopy', definition: 'Procedures with high bleeding risk requiring anticoagulation hold' },
      ],
      clinicalNotes: `Clinical Pearls:
1. UGIB: Don't transfuse unless Hgb <7 g/dL (higher threshold harms in cirrhosis)
2. UGIB: Endoscopy within 24 hours improves outcomes; no benefit to rushing (<6 hours)
3. PUD: Treat H. pylori and test for cure; continue PPI if on NSAIDs
4. Variceal bleed: Octreotide + antibiotics + EVL within 12 hours
5. Early TIPS (within 72 hours) for Child C or Child B with active bleed
6. LGIB: Routine colonoscopy (within 24-48 hours) NOT urgent colonoscopy
7. Anticoagulation: Hold for high-risk endoscopy, restart 3-7 days post-bleed
8. DOAC reversal: Idarucizumab for dabigatran, andexanet for anti-Xa inhibitors
9. Obscure bleed: Repeat endoscopy first (20-30% missed lesions)
10. Angioectasia: Consider octreotide therapy for recurrent bleeding`,
    },
  },

  media: [
    {
      id: 'gi-bleeding-algorithm',
      type: 'diagram',
      filename: 'gi-bleeding-algorithm.svg',
      title: 'GI Bleeding Management Algorithm',
      description: 'Stepwise approach to GI bleeding evaluation and management',
    },
    {
      id: 'variceal-ligation',
      type: 'diagram',
      filename: 'evl-technique.svg',
      title: 'Endoscopic Variceal Ligation',
      description: 'Technique of band ligation for esophageal varices',
    },
  ],

  citations: [
    {
      id: 'acg-ugib-2021',
      type: 'article',
      title: 'ACG Guideline: Management of Patients With Acute Nonvariceal Upper GI Bleeding',
      authors: ['Sengupta N', 'Tapper EB', 'Corley DA'],
      source: 'American Journal of Gastroenterology 2021',
    },
    {
      id: 'aasld-varices-2023',
      type: 'article',
      title: 'AASLD Guidance: Portal Hypertensive Bleeding',
      authors: ['Garcia-Tsao G', 'Abraldes JG', 'Sanyal AJ'],
      source: 'Hepatology 2023',
    },
    {
      id: 'acg-lgib-2024',
      type: 'article',
      title: 'ACG Guideline: Management of Lower Gastrointestinal Bleeding',
      authors: ['Gurudu SR', 'Strate LL', 'Sood A'],
      source: 'American Journal of Gastroenterology 2024',
    },
  ],

  crossReferences: [
    { targetId: 'condition-liver', targetType: 'condition', relationship: 'related', label: 'Liver Disease' },
    { targetId: 'condition-upper-gi', targetType: 'condition', relationship: 'related', label: 'PUD' },
    { targetId: 'procedure-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'Endoscopy' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'emergency medicine', 'critical care'],
    keywords: ['GI bleed', 'melena', 'hematochezia', 'varices', 'endoscopy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
