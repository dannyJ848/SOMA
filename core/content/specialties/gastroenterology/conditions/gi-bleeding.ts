/**
 * Gastrointestinal Bleeding - Comprehensive Educational Content
 *
 * Covers upper and lower GI hemorrhage, including causes, diagnosis,
 * risk stratification, and management approaches.
 */

import { EducationalContent } from '../../../types';

export const giBleeding: EducationalContent = {
  id: 'condition-gi-bleeding',
  type: 'condition',
  name: 'Gastrointestinal Bleeding',
  alternateNames: [
    'GI Hemorrhage',
    'GI Bleed',
    'Upper GI Bleeding',
    'Lower GI Bleeding',
    'Hematemesis',
    'Melena',
    'Hematochezia',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'GI bleeding is when blood comes from somewhere in your digestive system. It can be serious and needs medical attention.',
      explanation: `**What is GI Bleeding?**

Your digestive system is a long tube that goes from your mouth all the way to your bottom. It includes your stomach, small intestine, and large intestine (colon). Sometimes, there can be bleeding somewhere along this tube.

**How do you know if you have GI bleeding?**

The signs depend on where the bleeding is coming from:

- **Throwing up blood**: If you vomit blood or something that looks like coffee grounds, the bleeding is in your stomach or the upper part of your digestive system.

- **Black, tarry poop**: This means blood has been digested and the bleeding is usually from higher up (stomach or small intestine).

- **Bright red blood in poop**: This usually means the bleeding is from lower down, like the large intestine or rectum.

**What causes GI bleeding?**

Many things can cause bleeding:
- Sores (ulcers) in the stomach
- Swollen blood vessels
- Tears in the lining of the digestive system
- Growths like polyps

**Is it serious?**

GI bleeding can be serious, especially if you lose a lot of blood. If you see blood in your vomit or poop, you should tell a doctor right away. Some bleeding is just a small amount and isn't dangerous, but a doctor should always check it out.

**Can it be treated?**

Yes! Doctors have many ways to find where the bleeding is coming from and stop it. Most people who get treatment do very well.`,
      keyTerms: [
        { term: 'GI bleeding', definition: 'Blood coming from anywhere in your digestive system' },
        { term: 'hematemesis', definition: 'Throwing up blood', pronunciation: 'hee-mat-EM-eh-sis' },
        { term: 'melena', definition: 'Black, tarry poop from digested blood', pronunciation: 'meh-LEE-nah' },
        { term: 'hematochezia', definition: 'Bright red blood in your poop', pronunciation: 'hee-mat-oh-KEE-zee-ah' },
        { term: 'ulcer', definition: 'A sore in the lining of your stomach or intestine' },
      ],
      analogies: [
        'Think of your digestive system like a garden hose - if there\'s a hole or crack anywhere along it, water (blood) can leak out.',
        'Coffee ground vomit looks like coffee grounds because the blood has been "cooked" by stomach acid, like how cooking changes the color of meat.',
      ],
      examples: [
        'Someone with a stomach ulcer might throw up blood after the ulcer starts bleeding.',
        'An older person might see bright red blood in the toilet if they have a bleeding hemorrhoid.',
      ],
    },
    2: {
      level: 2,
      summary: 'GI bleeding is classified as upper (above the ligament of Treitz) or lower (below), with different causes, presentations, and diagnostic approaches for each.',
      explanation: `## Understanding GI Bleeding

GI bleeding is divided into two main categories based on location:

**Upper GI Bleeding (UGIB)**
- Occurs above the ligament of Treitz (where the small intestine begins)
- Includes bleeding from the esophagus, stomach, and duodenum

**Lower GI Bleeding (LGIB)**
- Occurs below the ligament of Treitz
- Includes bleeding from the small intestine, colon, and rectum

## How GI Bleeding Presents

**Signs of Upper GI Bleeding:**
- Hematemesis: Vomiting fresh blood or "coffee grounds" (blood darkened by stomach acid)
- Melena: Black, tarry, foul-smelling stools (blood digested as it passes through intestines)
- Sometimes hematochezia if bleeding is massive and rapid

**Signs of Lower GI Bleeding:**
- Hematochezia: Bright red or maroon blood mixed with or coating stool
- Melena is rare (only if bleeding is from right colon and transit time is slow)

## Common Causes

**Upper GI Bleeding Causes:**
1. Peptic ulcer disease (most common - ~40%)
2. Esophageal varices (in liver disease)
3. Mallory-Weiss tear (tear at stomach-esophagus junction from vomiting)
4. Erosive gastritis/esophagitis
5. Gastric cancer

**Lower GI Bleeding Causes:**
1. Diverticulosis (most common in elderly)
2. Hemorrhoids and anal fissures
3. Colorectal polyps or cancer
4. Inflammatory bowel disease
5. Angiodysplasia (abnormal blood vessels)

## Diagnosis

- **Upper endoscopy (EGD)**: Camera exam of esophagus, stomach, and duodenum
- **Colonoscopy**: Camera exam of the colon
- **CT angiography**: Imaging to find active bleeding
- **Blood tests**: Check hemoglobin, blood clotting, liver function

## Treatment

Treatment depends on the cause but may include:
- IV fluids and blood transfusions if needed
- Endoscopic therapy (clips, cautery, injection) to stop bleeding
- Medications to reduce acid
- Surgery in severe cases`,
      keyTerms: [
        { term: 'ligament of Treitz', definition: 'Anatomical landmark dividing upper from lower GI tract; located at the duodenojejunal junction', pronunciation: 'TRYTES' },
        { term: 'esophageal varices', definition: 'Enlarged, fragile veins in the esophagus, usually from liver disease', pronunciation: 'VAIR-ih-seez' },
        { term: 'Mallory-Weiss tear', definition: 'A tear in the lining at the junction of the esophagus and stomach, often from forceful vomiting' },
        { term: 'diverticulosis', definition: 'Condition where small pouches form in the colon wall; can bleed', pronunciation: 'dy-ver-tik-yoo-LOH-sis' },
        { term: 'angiodysplasia', definition: 'Abnormal, fragile blood vessels in the GI tract that can bleed', pronunciation: 'AN-jee-oh-dis-PLAY-zhah' },
      ],
      analogies: [
        'The ligament of Treitz is like a boundary line on a map - it helps doctors locate where the bleeding is coming from.',
        'Varices are like varicose veins in your legs, but in your esophagus - they bulge and can burst.',
      ],
    },
    3: {
      level: 3,
      summary: 'GI bleeding requires systematic assessment of hemodynamic stability, risk stratification using validated scores, timely resuscitation, and appropriate diagnostic endoscopy to identify and treat the bleeding source.',
      explanation: `## Classification and Epidemiology

**Upper GI Bleeding (UGIB):**
- Incidence: 50-150 per 100,000 adults/year
- Mortality: 2-10% (varies by cause and comorbidities)
- Accounts for ~80% of all GI bleeding

**Lower GI Bleeding (LGIB):**
- Incidence: 20-30 per 100,000 adults/year
- Mortality: 2-4% (lower than UGIB)
- Majority (80-85%) stops spontaneously

**Small Bowel Bleeding (previously "obscure"):**
- ~5% of GI bleeding
- Diagnosed when upper endoscopy and colonoscopy are negative

## Initial Assessment

**Hemodynamic Evaluation:**
- Vital signs: Tachycardia, hypotension, orthostatic changes
- Signs of shock: Altered mental status, delayed capillary refill, cool extremities
- Estimated blood loss:
  - Class I (<15%): Normal vitals
  - Class II (15-30%): Tachycardia, narrowed pulse pressure
  - Class III (30-40%): Hypotension, tachycardia, altered mental status
  - Class IV (>40%): Severe shock

**Laboratory Evaluation:**
- CBC: Hemoglobin may be normal initially (hemodilution takes hours)
- BMP: BUN/creatinine ratio >30 suggests upper GI source (digested blood → urea absorption)
- Coagulation studies: PT/INR, platelets
- Type and screen/crossmatch
- Liver function tests (evaluate for cirrhosis)

## Risk Stratification

**Glasgow-Blatchford Score (GBS):**
- Used at presentation to predict need for intervention
- Score 0-1: Very low risk, may be managed outpatient
- Higher scores: Increased risk of needing intervention

| Component | Score |
|-----------|-------|
| BUN 18.2-22.4 | 2 |
| BUN 22.4-28 | 3 |
| BUN 28-70 | 4 |
| BUN >70 | 6 |
| Hemoglobin (male) 12-13 | 1 |
| Hemoglobin (male) 10-12 | 3 |
| Hemoglobin (male) <10 | 6 |
| Systolic BP 100-109 | 1 |
| Systolic BP 90-99 | 2 |
| Systolic BP <90 | 3 |
| Pulse ≥100 | 1 |
| Melena | 1 |
| Syncope | 2 |
| Hepatic disease | 2 |
| Heart failure | 2 |

**Rockall Score:**
- Applied after endoscopy
- Predicts rebleeding and mortality

## Causes by Location

**Esophageal:**
- Varices (portal hypertension)
- Mallory-Weiss tear
- Esophagitis (reflux, pill, infectious)
- Esophageal cancer
- Dieulafoy lesion

**Gastric:**
- Peptic ulcer disease
- Gastritis (NSAID, stress, H. pylori)
- Gastric varices
- Gastric antral vascular ectasia (GAVE/watermelon stomach)
- Gastric cancer

**Duodenal:**
- Peptic ulcer disease
- Aortoenteric fistula (catastrophic, in patients with aortic grafts)
- Dieulafoy lesion

**Colonic:**
- Diverticulosis (painless, massive bleeding)
- Angiodysplasia
- Colorectal cancer/polyps
- Ischemic colitis
- IBD
- Post-polypectomy bleeding

## Management Principles

**Resuscitation:**
1. Two large-bore IV access
2. Fluid resuscitation (crystalloid)
3. Blood transfusion: Target Hgb 7-8 g/dL (restrictive strategy improves outcomes)
4. Correct coagulopathy (FFP, vitamin K, platelets)
5. PPI infusion for suspected peptic ulcer bleeding

**Timing of Endoscopy:**
- UGIB: Within 24 hours of presentation
- Very high risk: Within 12 hours
- LGIB: After hemodynamic stabilization and bowel prep

**Endoscopic Hemostasis:**
- Injection therapy (epinephrine)
- Thermal coagulation (bipolar, heater probe)
- Mechanical therapy (clips, bands)
- Topical hemostatic agents`,
      keyTerms: [
        { term: 'Glasgow-Blatchford Score', definition: 'Pre-endoscopy risk score to predict need for intervention in upper GI bleeding' },
        { term: 'Rockall Score', definition: 'Post-endoscopy score predicting rebleeding and mortality in UGIB' },
        { term: 'Dieulafoy lesion', definition: 'Abnormally large submucosal artery that erodes through mucosa and bleeds', pronunciation: 'DYOO-lah-fwah' },
        { term: 'GAVE', definition: 'Gastric antral vascular ectasia (watermelon stomach); dilated blood vessels in antrum causing chronic bleeding' },
        { term: 'aortoenteric fistula', definition: 'Abnormal connection between aorta and GI tract; surgical emergency' },
        { term: 'restrictive transfusion', definition: 'Strategy targeting Hgb 7-8 g/dL; associated with better outcomes in GI bleeding' },
      ],
      clinicalNotes: 'A BUN/creatinine ratio >30 suggests upper GI bleeding source. Coffee-ground emesis indicates the blood has been in contact with gastric acid. Massive hematochezia (bright red blood per rectum) can occasionally be from a briskly bleeding upper source - always consider UGIB in unstable patients with hematochezia.',
    },
    4: {
      level: 4,
      summary: 'Advanced GI bleeding management requires integration of hemodynamic resuscitation, pharmacotherapy, endoscopic intervention, and recognition of high-risk stigmata. Understanding variceal bleeding pathophysiology and management is critical for patients with portal hypertension.',
      explanation: `## Variceal Hemorrhage

### Pathophysiology
- Portal hypertension (HVPG >10 mmHg) → portosystemic collaterals
- Varices develop at sites of portosystemic communication:
  - Gastroesophageal junction (esophageal varices)
  - Gastric fundus (gastric varices)
  - Rectum (hemorrhoids)
  - Anterior abdominal wall (caput medusae)
- Variceal wall tension (LaPlace law): T = (P × r) / w
- Rupture risk increases with variceal size, red wale marks, and Child-Pugh class

### Acute Management of Variceal Bleeding

**Resuscitation:**
- Restrictive transfusion (Hgb target 7-8 g/dL)
- Over-transfusion increases portal pressure → rebleeding risk
- Correct severe coagulopathy only

**Pharmacotherapy:**
- **Vasoactive drugs** (start immediately, before endoscopy):
  - Octreotide 50 mcg bolus → 50 mcg/hr infusion (5 days)
  - Terlipressin (synthetic vasopressin analog) - superior, not available in US
  - Mechanism: Splanchnic vasoconstriction → decreased portal flow
- **Antibiotics** (all cirrhotics with GI bleed):
  - Ceftriaxone 1g IV daily (7 days)
  - Reduces infections, rebleeding, and mortality

**Endoscopic Therapy:**
- Esophageal varices: Endoscopic variceal ligation (EVL/banding)
- Gastric varices (GOV2/IGV1): Cyanoacrylate (glue) injection
- TIPS if endoscopic therapy fails or for secondary prophylaxis

**Rescue Therapy for Refractory Bleeding:**
- Balloon tamponade (Sengstaken-Blakemore, Minnesota tube) - bridge to TIPS
- Early TIPS (within 24-72 hours) for high-risk patients (Child B with active bleeding, Child C)

### Primary and Secondary Prophylaxis

**Primary Prophylaxis (prevent first bleed):**
- Screen all cirrhotics for varices with EGD
- Medium/large varices: Non-selective beta-blocker (NSBB) OR EVL
- Carvedilol may be preferred NSBB (additional anti-alpha effect)

**Secondary Prophylaxis (prevent rebleed):**
- Combination therapy: NSBB + EVL (repeat EVL until eradication)
- TIPS for refractory bleeding

## Non-Variceal Upper GI Bleeding

### High-Risk Stigmata (Forrest Classification)

| Class | Description | Rebleed Risk |
|-------|-------------|--------------|
| Ia | Active arterial spurting | 90% |
| Ib | Active oozing | 50% |
| IIa | Visible vessel | 50% |
| IIb | Adherent clot | 30% |
| IIc | Flat pigmented spot | 7% |
| III | Clean base ulcer | 3% |

**Treatment by Stigmata:**
- Forrest Ia, Ib, IIa: Endoscopic therapy (dual therapy preferred)
- Forrest IIb: Remove clot and treat underlying lesion
- Forrest IIc, III: PPI therapy alone; early discharge

### Endoscopic Hemostasis Techniques

**Injection Therapy:**
- Epinephrine 1:10,000 (tamponade effect, temporary)
- Never use alone - always combine with second modality

**Thermal Therapy:**
- Bipolar/multipolar coagulation
- Heater probe
- Argon plasma coagulation (APC)

**Mechanical Therapy:**
- Hemoclips (through-the-scope)
- Over-the-scope clips (OTSC) for larger defects

**Topical Agents:**
- Hemostatic powder/spray (TC-325)
- Bridge therapy; temporary hemostasis

### PPI Therapy

- High-dose IV PPI (pantoprazole 80 mg bolus → 8 mg/hr × 72 hrs) after successful hemostasis
- Rationale: Gastric pH >6 stabilizes clot, reduces pepsin activity
- Oral PPI BID equally effective if patient can take orals

## Lower GI Bleeding

### Diverticular Bleeding
- Most common cause of major LGIB in elderly
- Usually right-sided (thinner wall, larger vasa recta)
- Typically painless, massive, and self-limited (80-90%)
- Colonoscopy for diagnosis and treatment
- Rebleeding risk: 25% after first episode, 50% after second

### Angiodysplasia
- Degenerative, thin-walled vessels
- More common in right colon
- Associated with aortic stenosis (Heyde syndrome), CKD, von Willebrand disease
- Treatment: APC, clips

### Ischemic Colitis
- Usually watershed areas (splenic flexure, rectosigmoid)
- Bloody diarrhea + abdominal pain + tenderness
- Thumbprinting on imaging
- Usually supportive care; surgery if gangrene/perforation

### Algorithm for LGIB

1. Hemodynamic stabilization
2. Rule out upper source if unstable (NG aspirate or upper endoscopy)
3. Colonoscopy after rapid bowel prep (within 24 hours if possible)
4. If colonoscopy non-diagnostic and ongoing bleeding:
   - CT angiography (requires active bleeding ≥0.5 mL/min)
   - Tagged RBC scan (requires ≥0.1 mL/min, localizes but doesn't diagnose)
5. Angiographic embolization or surgery if needed`,
      keyTerms: [
        { term: 'HVPG', definition: 'Hepatic venous pressure gradient; measure of portal hypertension. Clinically significant if >10 mmHg' },
        { term: 'Forrest classification', definition: 'Endoscopic classification of peptic ulcer bleeding stigmata predicting rebleed risk' },
        { term: 'TIPS', definition: 'Transjugular intrahepatic portosystemic shunt; creates low-resistance channel between portal and hepatic veins' },
        { term: 'Sengstaken-Blakemore tube', definition: 'Balloon tamponade device for controlling variceal bleeding; bridge to definitive therapy' },
        { term: 'Heyde syndrome', definition: 'Association of aortic stenosis, GI angiodysplasia, and acquired von Willebrand deficiency' },
        { term: 'over-the-scope clip (OTSC)', definition: 'Large nitinol clip for endoscopic closure of larger defects or treatment of refractory bleeding' },
      ],
      clinicalNotes: 'All patients with cirrhosis and GI bleeding need antibiotics - this is one of the most impactful interventions. The restrictive transfusion strategy in both variceal and non-variceal bleeding improves outcomes; over-transfusion in varices increases portal pressure. Early TIPS (within 24-72 hours) should be considered in high-risk variceal bleeding (Child B with active bleeding or Child C ≤13).',
    },
    5: {
      level: 5,
      summary: 'Contemporary GI bleeding management incorporates evidence-based resuscitation targets, validated risk stratification tools for disposition decisions, optimal timing of intervention, and recognition of special circumstances including anticoagulant reversal and refractory bleeding management.',
      explanation: `## Evidence-Based Resuscitation

### Restrictive vs. Liberal Transfusion
- **TRIGGER trial** and subsequent meta-analyses: Restrictive strategy (Hgb 7 g/dL threshold) reduces mortality compared to liberal (Hgb 9 g/dL)
- Mechanism: Over-transfusion increases portal pressure, impairs hemostasis
- Exception: Active coronary syndrome or symptomatic anemia

### Hemostatic Resuscitation
- TEG/ROTEM-guided transfusion shows promise but not yet standard
- Platelet transfusion: Threshold <50,000/μL for procedures
- FFP for INR >1.5-2.0 in active bleeding

### Volume Resuscitation
- Initial crystalloid (balanced preferred)
- Avoid over-resuscitation: Increases rebleeding, dilutes clotting factors

## Advanced Risk Stratification

### Pre-Endoscopy Scores

**Glasgow-Blatchford Score (GBS):**
- Score 0-1: Very low risk; outpatient management safe
- Validated in multiple settings
- Does not include endoscopic findings

**AIMS65:**
| Factor | Points |
|--------|--------|
| Albumin <3 g/dL | 1 |
| INR >1.5 | 1 |
| Altered Mental Status | 1 |
| Systolic BP ≤90 | 1 |
| Age >65 | 1 |

- Predicts mortality: Score 0 = 0.3%, Score 5 = 25%

**ABC Score (Artificial intelligence Bleeding risk Classifier):**
- Machine learning-derived
- Age, BUN, hemoglobin, sex, albumin, creatinine, INR, mental status, SBP, HR, melena

### Post-Endoscopy Scores

**Rockall Score:**
- Combines clinical and endoscopic variables
- Predicts rebleeding and mortality
- Score ≤2: Low risk for rebleeding/death

**PNED Score (for safe early discharge):**
- BUN, hemoglobin, SBP, age, syncope, liver/heart disease
- Validated for identifying patients suitable for outpatient management

## Anticoagulation Management

### DOACs
| Drug | Reversal Agent | Half-life |
|------|---------------|-----------|
| Dabigatran | Idarucizumab (Praxbind) | 12-17 hrs |
| Rivaroxaban | Andexanet alfa (Andexxa) | 5-9 hrs |
| Apixaban | Andexanet alfa, 4F-PCC | 12 hrs |
| Edoxaban | Andexanet alfa | 10-14 hrs |

- 4-factor PCC 25-50 units/kg if specific reversal agent unavailable
- Resume anticoagulation: Individualized, typically 7-14 days post-hemostasis

### Warfarin
- Vitamin K 10 mg IV (slow reversal)
- 4F-PCC for rapid reversal (faster than FFP)
- Target INR ≤2.5 for procedures

### Antiplatelet Agents
- No specific reversal
- Platelet transfusion of limited benefit (new platelets also inhibited by circulating drug)
- Continue aspirin for secondary cardiovascular prevention if possible
- Resume within 3-5 days if stopped

## Refractory and Recurrent Bleeding

### Definition
- Recurrent hemodynamic instability or transfusion requirement after initial control
- Occurs in 10-20% of UGIB

### Predictors of Failure
- Ulcer size >2 cm
- Location: Posterior duodenal (GDA), lesser curve gastric (left gastric)
- Active arterial bleeding at endoscopy
- Hypotension, coagulopathy, comorbidities

### Management
1. **Repeat endoscopy**: Appropriate first step for most
2. **Interventional radiology**:
   - Trans-arterial embolization
   - Success rates 70-90%
   - Complications: Ischemia (rare in UGI due to collaterals)
3. **Surgery**:
   - Decreasing role with improved endoscopic/IR techniques
   - Indications: Failed endoscopy + IR, hemodynamic instability, perforation
   - Mortality increases with each intervention

### Doppler Endoscopic Probe (DEP)
- Detects blood flow beneath ulcer
- Positive DEP after hemostasis predicts rebleeding
- Guides need for additional therapy

## Special Situations

### Obscure GI Bleeding / Small Bowel Bleeding
- Definition: Bleeding of unknown origin after EGD and colonoscopy
- Overt: Visible bleeding
- Occult: Iron deficiency anemia, positive FOBT

**Diagnostic Approach:**
1. Video capsule endoscopy (VCE) - first-line
2. Device-assisted enteroscopy (DAE): Single-balloon, double-balloon, spiral
3. CT/MR enterography
4. Angiography (if active bleeding)
5. Intraoperative enteroscopy (last resort)

**Common Causes:**
- Angiodysplasia (most common)
- Small bowel tumors (GIST, carcinoid, lymphoma)
- Crohn's disease
- Meckel's diverticulum
- NSAID enteropathy
- Dieulafoy lesion

### Post-Sphincterotomy Bleeding
- Occurs in 1-2% of ERCPs
- Risk factors: Coagulopathy, anticoagulation, precut sphincterotomy
- Management: Epinephrine injection, balloon tamponade, clips, fully covered SEMS

### Hemobilia
- Bleeding from biliary tree
- Classic triad: RUQ pain, jaundice, GI bleeding (Quincke's triad)
- Causes: Trauma/procedure, tumor, aneurysm, cholangitis
- Treatment: Angiographic embolization

### Aortoenteric Fistula
- Primary (rare) or secondary (post-aortic surgery)
- "Herald bleed" followed by massive exsanguination
- High index of suspicion in patients with aortic grafts
- CTA, EGD (may see graft eroding into duodenum)
- Treatment: Emergency surgery

## Quality Metrics and Outcomes

**ASGE Quality Indicators for GI Bleeding:**
- Time to endoscopy <24 hours
- Documentation of Forrest classification
- Dual therapy for high-risk stigmata
- Appropriate PPI dosing
- H. pylori testing in peptic ulcer
- Documentation of anticoagulant/antiplatelet status

**Outcomes Data:**
- UGIB mortality has decreased from 10% to 2-5%
- Attributed to: PPI therapy, improved endoscopic techniques, restrictive transfusion, early risk stratification`,
      keyTerms: [
        { term: 'idarucizumab', definition: 'Specific reversal agent for dabigatran; monoclonal antibody fragment', pronunciation: 'eye-dah-ROO-si-zoo-mab' },
        { term: 'andexanet alfa', definition: 'Reversal agent for factor Xa inhibitors (rivaroxaban, apixaban, edoxaban)' },
        { term: '4-factor PCC', definition: 'Four-factor prothrombin complex concentrate; contains factors II, VII, IX, X for rapid coagulopathy reversal' },
        { term: 'video capsule endoscopy', definition: 'Swallowed camera that images the small bowel; first-line for obscure GI bleeding' },
        { term: 'device-assisted enteroscopy', definition: 'Endoscopic techniques (single/double balloon, spiral) allowing deep small bowel examination and therapy' },
        { term: 'Quincke\'s triad', definition: 'Classic presentation of hemobilia: RUQ pain, jaundice, and GI bleeding' },
        { term: 'AIMS65', definition: 'Albumin, INR, Mental status, Systolic BP, age >65; pre-endoscopy score predicting mortality in UGIB' },
      ],
      clinicalNotes: `Critical decision points:
1. GBS 0-1 can be managed outpatient with close follow-up - this is validated and safe
2. In massive hematochezia with hemodynamic instability, always exclude upper source first (up to 15% of brisk hematochezia is from above the ligament of Treitz)
3. Anticoagulant reversal: Use specific agents when available; balance bleeding vs. thrombotic risk
4. The "herald bleed" in suspected aortoenteric fistula demands immediate action - the next bleed may be fatal
5. For refractory bleeding, involve interventional radiology and surgery early rather than repeated failed endoscopic attempts
6. All peptic ulcers should be tested for H. pylori and treated if positive - this reduces rebleeding risk significantly
7. Don't forget to address underlying cause: Stop NSAIDs, treat H. pylori, manage portal hypertension`,
    },
  },

  media: [
    {
      id: 'gi-bleeding-anatomy',
      type: 'diagram',
      filename: 'gi-bleeding-sources.svg',
      title: 'Sources of GI Bleeding',
      description: 'Anatomical diagram showing common bleeding sites in upper and lower GI tract',
    },
    {
      id: 'forrest-classification',
      type: 'diagram',
      filename: 'forrest-classification.svg',
      title: 'Forrest Classification',
      description: 'Visual guide to Forrest classification of peptic ulcer bleeding stigmata',
    },
    {
      id: 'variceal-banding',
      type: 'image',
      filename: 'variceal-banding-procedure.jpg',
      title: 'Endoscopic Variceal Ligation',
      description: 'Endoscopic image showing variceal ligation technique',
    },
  ],

  citations: [
    {
      id: 'acg-ugib-2021',
      type: 'article',
      title: 'ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding',
      authors: ['Laine, L.', 'Barkun, A.N.', 'Saltzman, J.R.'],
      source: 'American Journal of Gastroenterology',
      url: 'https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__upper_gastrointestinal_and.9.aspx',
    },
    {
      id: 'baveno-vii',
      type: 'article',
      title: 'Baveno VII - Renewing Consensus in Portal Hypertension',
      source: 'Journal of Hepatology',
    },
    {
      id: 'asge-gi-bleeding',
      type: 'article',
      title: 'The Role of Endoscopy in the Management of Patients with Peptic Ulcer Disease',
      source: 'Gastrointestinal Endoscopy',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gerd-peptic-ulcer', targetType: 'condition', relationship: 'related', label: 'Peptic Ulcer Disease' },
    { targetId: 'condition-liver-diseases', targetType: 'condition', relationship: 'related', label: 'Liver Disease and Portal Hypertension' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'Upper Endoscopy' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopy' },
  ],

  tags: {
    systems: ['digestive', 'gastrointestinal', 'hepatic'],
    topics: ['emergency medicine', 'gastroenterology', 'critical care'],
    keywords: ['GI bleeding', 'hematemesis', 'melena', 'hematochezia', 'varices', 'peptic ulcer', 'diverticulosis'],
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

export default giBleeding;
