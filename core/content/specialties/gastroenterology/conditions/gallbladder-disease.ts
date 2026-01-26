/**
 * Gallbladder Disease - Comprehensive Educational Content
 *
 * Covers cholelithiasis, cholecystitis (acute and chronic), choledocholithiasis,
 * cholangitis, and biliary dyskinesia.
 */

import { EducationalContent } from '../../../types';

export const gallbladderDisease: EducationalContent = {
  id: 'condition-gallbladder-disease',
  type: 'condition',
  name: 'Gallbladder Disease',
  alternateNames: [
    'Gallstones',
    'Cholelithiasis',
    'Cholecystitis',
    'Biliary Colic',
    'Choledocholithiasis',
    'Cholangitis',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'The gallbladder stores bile, which helps digest fats. Gallstones are hard pieces that form in the gallbladder and can cause pain, especially after eating fatty foods.',
      explanation: `**What is the Gallbladder?**

Your gallbladder is a small, pear-shaped pouch under your liver. Its job is to store bile - a green-yellow liquid that helps break down fats from the food you eat.

When you eat a fatty meal, the gallbladder squeezes and releases bile into your intestine to help with digestion.

**What are Gallstones?**

Gallstones are hard pieces that form inside the gallbladder, kind of like how rocks form from minerals. They can be:
- Tiny like grains of sand
- As big as a golf ball
- One stone or many stones

Most people with gallstones don't even know they have them because they cause no problems.

**When Gallstones Cause Trouble:**

Sometimes a stone can block the opening of the gallbladder, causing:
- **Biliary colic**: Sharp pain in the upper right belly, often after eating fatty foods. The pain can last 30 minutes to several hours.
- **Cholecystitis**: If a stone stays stuck, the gallbladder gets inflamed. This causes constant pain, fever, and feeling sick.

**Who Gets Gallstones?**

Gallstones are more common if you:
- Are female
- Are overweight
- Have had babies
- Are over 40
- Lose weight quickly
- Have family members with gallstones

**How are They Treated?**

If gallstones cause problems, doctors usually remove the gallbladder through small cuts (laparoscopic surgery). You can live a normal life without a gallbladder - bile just drips directly into your intestine instead of being stored.`,
      keyTerms: [
        { term: 'gallbladder', definition: 'A small organ under the liver that stores bile' },
        { term: 'bile', definition: 'A liquid made by the liver that helps digest fats' },
        { term: 'gallstones', definition: 'Hard pieces that form in the gallbladder from bile' },
        { term: 'biliary colic', definition: 'Pain from the gallbladder when a stone temporarily blocks its opening' },
        { term: 'cholecystitis', definition: 'Inflammation of the gallbladder, usually from a stuck gallstone', pronunciation: 'koh-leh-sis-TY-tis' },
      ],
      analogies: [
        'The gallbladder is like a water balloon that stores and squeezes out bile when you eat.',
        'Gallstones forming is like when honey crystallizes in the jar - the bile ingredients can harden into solid pieces.',
        'Biliary colic is like a cramp when the gallbladder tries to squeeze against a stone blocking its exit.',
      ],
      examples: [
        'Someone might notice pain after eating pizza or fried food because fatty meals make the gallbladder squeeze harder.',
        'A person could have gallstones for years with no problems, then suddenly get severe pain one day when a stone moves.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gallstone disease encompasses cholelithiasis (gallstones), biliary colic (symptomatic stones), cholecystitis (gallbladder inflammation), and choledocholithiasis (stones in bile duct). Acute cholangitis is a serious infection requiring urgent treatment.',
      explanation: `## Gallbladder and Biliary Disease

### Anatomy Review

The biliary system includes:
- **Gallbladder**: Stores and concentrates bile
- **Cystic duct**: Connects gallbladder to common bile duct
- **Common bile duct (CBD)**: Carries bile to duodenum
- **Sphincter of Oddi**: Controls bile flow into intestine

### Types of Gallstones

**Cholesterol stones (80%):**
- Yellow-green color
- Single or multiple
- Associated with metabolic syndrome, obesity, rapid weight loss

**Pigment stones (20%):**
- Black pigment: Hemolysis, cirrhosis
- Brown pigment: Infection, stasis (often in ducts)

### Clinical Spectrum

**1. Asymptomatic Cholelithiasis:**
- ~80% of gallstones never cause symptoms
- Discovered incidentally on imaging
- Generally no treatment needed (prophylactic cholecystectomy rarely indicated)

**2. Biliary Colic:**
- Stone temporarily obstructs cystic duct
- Intermittent pain in RUQ or epigastrium
- Radiates to right shoulder/back
- Lasts 30 min to 6 hours, then resolves
- No fever, normal labs
- Risk of progression: ~2% per year develop complications

**3. Acute Cholecystitis:**
- Persistent cystic duct obstruction → gallbladder inflammation
- Constant RUQ pain >6 hours
- Fever, leukocytosis
- Murphy's sign: Pain/inspiratory arrest with palpation of RUQ
- Treatment: Antibiotics + cholecystectomy (preferably within 72 hours)

**4. Choledocholithiasis:**
- Stone in common bile duct
- May cause obstructive jaundice
- Elevated bilirubin, alkaline phosphatase
- Risk of cholangitis and pancreatitis
- Treatment: ERCP for stone extraction

**5. Acute Cholangitis:**
- Infection of biliary system due to obstruction
- **Charcot's triad**: Fever, jaundice, RUQ pain
- **Reynolds' pentad**: Add confusion and hypotension (severe)
- Medical emergency - requires urgent drainage (ERCP)

### Diagnosis

**Ultrasound (first-line):**
- Detects gallstones with ~95% sensitivity
- Shows gallbladder wall thickening in cholecystitis
- Sonographic Murphy's sign

**HIDA scan (cholescintigraphy):**
- Useful when ultrasound inconclusive
- Non-visualization of gallbladder = cystic duct obstruction (cholecystitis)

**MRCP (MR cholangiopancreatography):**
- Non-invasive imaging of bile ducts
- Detects choledocholithiasis

**ERCP:**
- Both diagnostic and therapeutic
- Can remove CBD stones

### Treatment

**Biliary Colic:**
- Elective cholecystectomy (prevents future complications)
- Low-fat diet while awaiting surgery

**Acute Cholecystitis:**
- NPO, IV fluids, pain control
- Antibiotics covering gram-negatives and anaerobes
- Laparoscopic cholecystectomy (early, within 72 hours preferred)
- Percutaneous cholecystostomy if too sick for surgery

**Choledocholithiasis:**
- ERCP with sphincterotomy and stone extraction
- Followed by cholecystectomy

**Cholangitis:**
- Urgent biliary drainage (ERCP preferred)
- IV antibiotics
- Hemodynamic support if septic`,
      keyTerms: [
        { term: 'cholelithiasis', definition: 'Medical term for gallstones', pronunciation: 'KOH-leh-lith-EYE-uh-sis' },
        { term: 'choledocholithiasis', definition: 'Stones in the common bile duct', pronunciation: 'koh-LED-oh-koh-lith-EYE-uh-sis' },
        { term: 'cholangitis', definition: 'Infection/inflammation of the bile ducts', pronunciation: 'koh-lan-JY-tis' },
        { term: 'Murphy\'s sign', definition: 'Pain and inspiratory arrest during RUQ palpation; indicates cholecystitis' },
        { term: 'Charcot\'s triad', definition: 'Fever + jaundice + RUQ pain; classic for cholangitis' },
        { term: 'ERCP', definition: 'Endoscopic retrograde cholangiopancreatography; procedure to access and treat bile duct problems' },
      ],
      analogies: [
        'Biliary colic is like a muscle cramp - it comes and goes as the gallbladder tries to squeeze against a blockage.',
        'The bile duct is like a drain pipe - when a stone blocks it, things back up and can get infected.',
        'ERCP is like a plumber going through the pipes with a camera and tools to clear blockages.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gallstone formation involves bile supersaturation, nucleation, and gallbladder dysmotility. Cholecystitis pathophysiology involves obstruction, ischemia, and inflammation. Tokyo Guidelines stratify cholecystitis and cholangitis severity to guide management.',
      explanation: `## Biliary Pathophysiology

### Gallstone Formation

**Cholesterol Stone Pathogenesis:**

Three requirements (lithogenic bile):
1. **Cholesterol supersaturation**
   - Excess cholesterol secretion
   - Decreased bile salt secretion
   - Decreased phospholipid secretion

2. **Nucleation**
   - Mucin glycoproteins promote crystal formation
   - Rapid nucleation in lithogenic bile

3. **Gallbladder hypomotility**
   - Stasis allows crystal aggregation
   - Impaired emptying (diabetes, TPN, pregnancy, octreotide)

**Risk Factors (4 F's + more):**
- Female, Fertile, Forty, Fat
- Family history
- Rapid weight loss (>1.5 kg/week)
- Prolonged fasting/TPN
- Ileal disease (Crohn's) - decreased bile salt reabsorption
- Medications: Fibrates, estrogen, octreotide, ceftriaxone

**Pigment Stone Pathogenesis:**

*Black pigment:*
- Unconjugated bilirubin + calcium = calcium bilirubinate
- Associated with hemolysis (sickle cell, spherocytosis), cirrhosis
- Form in gallbladder

*Brown pigment:*
- Bacterial deconjugation of bilirubin
- Associated with biliary stasis, infection, parasites
- Often form in bile ducts

### Cholecystitis Pathophysiology

**Calculous Cholecystitis (90%):**
1. Stone impacted in cystic duct
2. Gallbladder distension
3. Mucosal ischemia from wall tension
4. Secondary bacterial infection (E. coli, Klebsiella, Enterococcus)
5. Inflammation progresses: Edematous → Gangrenous → Perforated

**Acalculous Cholecystitis (10%):**
- No gallstones
- Risk factors: Critical illness, trauma, burns, TPN, surgery
- Mechanism: Gallbladder stasis + mucosal ischemia
- Higher morbidity/mortality than calculous

### Severity Classification

**Tokyo Guidelines 2018 (TG18) - Cholecystitis:**

| Grade | Criteria | Management |
|-------|----------|------------|
| Grade I (Mild) | No organ dysfunction, mild inflammation | Early lap chole |
| Grade II (Moderate) | WBC >18k, mass, symptoms >72h, marked inflammation | Early lap chole (experienced surgeon) or delayed |
| Grade III (Severe) | Organ dysfunction (CV, neuro, renal, hepatic, hematologic) | Supportive care, cholecystostomy, delayed surgery |

**Tokyo Guidelines - Cholangitis:**

| Grade | Criteria |
|-------|----------|
| Grade I (Mild) | Responds to initial treatment |
| Grade II (Moderate) | No organ dysfunction but WBC >12k or <4k, fever >39°C, age >75, bili >5 |
| Grade III (Severe) | Organ dysfunction (same criteria) |

### Complications

**Gangrenous cholecystitis:**
- Necrosis of gallbladder wall
- Higher in elderly, diabetics
- May have deceptively less pain (denervation)

**Emphysematous cholecystitis:**
- Gas-forming organisms (Clostridium, E. coli)
- Risk factors: Diabetes, males
- High mortality - urgent surgery

**Mirizzi syndrome:**
- Stone in cystic duct or Hartmann's pouch compresses CBD
- Causes obstructive jaundice
- Can erode into CBD (Type II-IV)

**Gallstone ileus:**
- Large stone erodes through gallbladder into duodenum
- Migrates and impacts in terminal ileum
- "Rigler's triad" on imaging: Bowel obstruction, ectopic gallstone, pneumobilia

**Gallbladder cancer:**
- Associated with porcelain gallbladder, large polyps (>1cm), chronic cholecystitis
- Often discovered incidentally at cholecystectomy

### Special Considerations

**Pregnancy:**
- Biliary disease is second most common non-obstetric surgical emergency
- Laparoscopic cholecystectomy safe in all trimesters (second trimester often preferred)
- Conservative management has higher recurrence and morbidity

**CBD Stones - Likelihood Assessment:**

*High (>50% probability):*
- CBD stone on imaging
- Clinical cholangitis
- Bilirubin >4 + dilated CBD on US

*Intermediate (10-50%):*
- Abnormal LFTs (other than bilirubin >4)
- Dilated CBD on US
- Age >55
- Clinical gallstone pancreatitis

→ High risk: ERCP before cholecystectomy
→ Intermediate: EUS or MRCP, then ERCP if positive`,
      keyTerms: [
        { term: 'lithogenic bile', definition: 'Bile composition prone to gallstone formation due to cholesterol supersaturation' },
        { term: 'nucleation', definition: 'Process of crystal formation that initiates gallstone development' },
        { term: 'acalculous cholecystitis', definition: 'Gallbladder inflammation without stones; occurs in critically ill patients' },
        { term: 'Tokyo Guidelines', definition: 'Severity grading system for cholecystitis and cholangitis guiding management' },
        { term: 'Mirizzi syndrome', definition: 'External compression of CBD by stone in cystic duct or Hartmann\'s pouch' },
        { term: 'gallstone ileus', definition: 'Bowel obstruction from gallstone migration through cholecystoenteric fistula' },
      ],
      clinicalNotes: 'Early cholecystectomy (within 72 hours) is preferred for acute cholecystitis - reduces complications without increasing surgical difficulty. Acalculous cholecystitis carries higher mortality and should be suspected in ICU patients with unexplained sepsis.',
    },
    4: {
      level: 4,
      summary: 'Contemporary biliary surgery emphasizes early intervention for cholecystitis based on Tokyo Guidelines. ERCP techniques, sphincter of Oddi dysfunction, and biliary dyskinesia represent specialized areas. Post-cholecystectomy syndrome requires systematic evaluation.',
      explanation: `## Advanced Biliary Disease Management

### Surgical Approach to Cholecystitis

**Critical View of Safety (CVS):**
- Standard for identifying structures before division
- Three criteria:
  1. Hepatocystic triangle cleared of fat/fibrous tissue
  2. Two structures (cystic duct, cystic artery) entering gallbladder
  3. Lowest part of gallbladder separated from liver bed

**Difficult Cholecystectomy Strategies:**
- "Dome-down" (fundus-first) approach
- Subtotal cholecystectomy (reconstituting or fenestrating)
- Bailout: Convert to open, cholecystostomy tube
- Document critical view with photo/video

**Intraoperative Cholangiography:**
- Routine vs. selective remains debated
- Indications: Unclear anatomy, suspected CBD stone
- Reduces bile duct injury recognition delay

### ERCP Techniques

**Indications:**
- Choledocholithiasis
- Cholangitis (urgent drainage)
- Biliary stricture evaluation/stenting
- Sphincterotomy

**Stone Extraction Methods:**
- Sphincterotomy + balloon/basket extraction
- Mechanical lithotripsy for large stones
- Electrohydraulic/laser lithotripsy (cholangioscopy-guided)
- Stent placement if incomplete clearance

**Complications:**
- Post-ERCP pancreatitis (3-7%)
  - Risk factors: Young, female, SOD, difficult cannulation
  - Prevention: Rectal indomethacin, pancreatic duct stent
- Bleeding (sphincterotomy site)
- Perforation
- Cholangitis

### Sphincter of Oddi Dysfunction (SOD)

**Classification (Milwaukee Classification - now revised):**

*Type I (Biliary):*
- Dilated CBD >10mm
- Elevated liver enzymes
- Delayed drainage on ERCP
- Most likely to benefit from sphincterotomy

*Type II:*
- 1-2 of above criteria
- Variable response

*Type III:*
- None of above criteria (biliary-type pain only)
- EPISOD trial showed sphincterotomy = sham
- Likely functional - medical management

**Rome IV Criteria for Biliary Pain:**
- Epigastric/RUQ pain
- Building to steady level, lasting ≥30 minutes
- Occurs at different intervals (not daily)
- Severe enough to interrupt activities or seek medical attention
- Not significantly relieved by position change, acid suppression, or bowel movements

**Manometry:**
- Sphincter basal pressure >40 mmHg = abnormal
- Invasive, variable availability
- Reserved for Type II SOD consideration

### Biliary Dyskinesia

**Definition:**
- Gallbladder symptoms without stones
- Abnormal gallbladder ejection fraction (EF) on HIDA

**Diagnosis:**
- Biliary-type symptoms
- Normal ultrasound (no stones)
- CCK-HIDA: EF <35-40% suggests dysmotility
- Reproduction of pain with CCK (controversial)

**Management:**
- Cholecystectomy benefits ~80-90% with classic symptoms + low EF
- Less predictable outcomes than for stone-related disease
- Consider excluding other etiologies first

### Post-Cholecystectomy Syndrome

**Definition:**
- Persistent or new symptoms after cholecystectomy
- Occurs in 10-40% (usually transient)

**Causes:**
*Biliary:*
- Retained/recurrent CBD stones
- Bile duct stricture/injury
- Cystic duct remnant stones
- Sphincter of Oddi dysfunction

*Non-biliary:*
- Bile acid diarrhea (most common)
- Peptic ulcer disease
- IBS
- Chronic pancreatitis
- Gastroesophageal reflux

**Workup:**
1. Labs: LFTs, lipase
2. Imaging: US → MRCP if dilated ducts or elevated LFTs
3. EGD if upper GI symptoms
4. HIDA for functional assessment
5. Bile acid diarrhea testing (SeHCAT or empiric bile acid sequestrant trial)

**Bile Acid Diarrhea Management:**
- Cholestyramine 4g daily, titrate
- Colesevelam (better tolerated)
- Often overlooked diagnosis

### Cholangioscopy

**Indications:**
- Indeterminate biliary stricture evaluation (direct visualization + biopsy)
- Difficult stone extraction (intrahepatic, large CBD stones)
- Tumor staging

**Techniques:**
- Digital single-operator cholangioscopy (SpyGlass)
- Electrohydraulic lithotripsy under direct vision
- Laser lithotripsy`,
      keyTerms: [
        { term: 'Critical View of Safety', definition: 'Surgical standard requiring visualization of two structures entering gallbladder before division' },
        { term: 'sphincterotomy', definition: 'Incision of sphincter of Oddi during ERCP to facilitate stone extraction or relieve obstruction' },
        { term: 'EPISOD trial', definition: 'Study showing sphincterotomy no better than sham for Type III SOD; changed practice' },
        { term: 'CCK-HIDA', definition: 'HIDA scan with cholecystokinin stimulation measuring gallbladder ejection fraction' },
        { term: 'cholangioscopy', definition: 'Direct visualization of bile ducts using a small scope through ERCP' },
        { term: 'bile acid diarrhea', definition: 'Diarrhea from malabsorbed bile acids reaching colon; common post-cholecystectomy' },
      ],
      clinicalNotes: 'The critical view of safety is paramount - if unclear anatomy, bail out to subtotal cholecystectomy rather than risk bile duct injury. Post-ERCP pancreatitis prevention with rectal indomethacin (100mg) is standard of care. Bile acid diarrhea affects up to 50% post-cholecystectomy patients and responds well to sequestrants.',
    },
    5: {
      level: 5,
      summary: 'Optimal biliary surgery timing, bile duct injury management, and advanced ERCP techniques define contemporary practice. Evidence guides cholecystectomy timing in acute cholecystitis and pancreatitis. Biliary complications require multidisciplinary management.',
      explanation: `## Biliary Disease: Evidence-Based Practice

### Timing of Cholecystectomy

**Acute Cholecystitis:**

*Current Evidence (CHOCOLATE Trial, Meta-analyses):*
- Early surgery (<72 hours, or index admission) superior to delayed
- Lower morbidity, shorter total hospital stay
- No increase in bile duct injury or conversion rate
- TG18: Index admission cholecystectomy unless severe (Grade III)

*Same-admission vs. Early Interval:*
- Same-admission (during initial hospitalization) preferred
- "Cooling off" period lacks evidence and increases total complications

**Gallstone Pancreatitis:**

*Mild Pancreatitis:*
- Same-admission cholecystectomy (after lipase trending down)
- PONCHO trial: Same-admission vs. interval → same-admission reduces recurrent biliary events

*Severe Pancreatitis with Collections:*
- Delay until collections resolve or are manageable
- Generally 6+ weeks
- May need ERCP for CBD stones during acute phase if cholangitis/obstruction

**CBD Stone Management:**

*Single-Stage vs. Two-Stage:*
- Single-stage: Lap chole + laparoscopic CBD exploration
- Two-stage: ERCP → lap chole
- Meta-analyses show similar outcomes; approach depends on local expertise
- If preoperative ERCP done, cholecystectomy within 72 hours to 2 weeks

### Bile Duct Injury

**Strasberg Classification:**

| Type | Description |
|------|-------------|
| A | Cystic duct leak or leak from liver bed |
| B | Occluded aberrant right hepatic duct |
| C | Transected aberrant right hepatic duct with leak |
| D | Lateral injury to common bile duct |
| E1 | Stricture >2cm from confluence |
| E2 | Stricture <2cm from confluence |
| E3 | Stricture at confluence (bifurcation intact) |
| E4 | Stricture involving confluence (bifurcation destroyed) |
| E5 | Combined injury to CHD and aberrant right duct |

**Management Algorithm:**

*Minor leaks (Type A, small D):*
- ERCP with stent placement
- Usually heals with bile diversion

*Major injuries (Type E):*
- Early recognition crucial
- Do NOT attempt repair if discovered intraoperatively by non-specialist
- Drain, close, refer to hepatobiliary specialist
- Definitive repair: Roux-en-Y hepaticojejunostomy
- Timing: Early repair (within days) if clean field; delayed (6-8 weeks) if inflammation/infection

**Long-term Outcomes:**
- Hepaticojejunostomy at experienced center: 90-95% success
- Recurrent strictures require revision or liver transplant in severe cases
- Medicolegal implications significant

### Advanced ERCP

**Difficult Cannulation:**
- Double-wire technique
- Transpancreatic sphincterotomy
- Precut sphincterotomy (needle-knife)
- Rendezvous (EUS-guided or percutaneous)

**EUS-Guided Biliary Drainage:**
- Alternative when ERCP fails
- EUS-guided choledochoduodenostomy
- EUS-guided hepaticogastrostomy
- LAMS (lumen-apposing metal stents)

**Primary Sclerosing Cholangitis Management:**
- ERCP for dominant stricture dilation
- Brush cytology ± FISH for cholangiocarcinoma
- Serial dilations may improve outcomes
- Transplant for advanced disease

### Gallbladder Cancer

**Risk Factors:**
- Porcelain gallbladder (calcified wall)
- Gallbladder polyps >1cm
- Anomalous pancreaticobiliary junction
- Chronic cholecystitis

**Incidental Discovery:**
- T1a (lamina propria): Cholecystectomy sufficient
- T1b (muscular layer): Controversial - many recommend re-resection
- T2+ (perimuscular/serosa): Extended cholecystectomy with liver resection + lymphadenectomy

**Port-Site Recurrence:**
- Historically common with T2+ disease
- Port-site resection controversial

### Quality Metrics and Outcomes

**Process Measures:**
- Intraoperative documentation of critical view
- Antibiotic prophylaxis compliance
- VTE prophylaxis
- Early cholecystectomy rate for acute cholecystitis

**Outcome Measures:**
- Bile duct injury rate (<0.5% target)
- Conversion to open rate
- 30-day readmission
- Retained stone rate

**Risk Calculators:**
- ASGE guidelines for CBD stone probability
- Charlson Comorbidity Index for surgical risk
- Tokyo Guidelines for severity stratification

### Controversies and Frontiers

**Prophylactic Cholecystectomy:**
- Asymptomatic stones: Generally not recommended
- Exceptions: Bariatric surgery, cardiac transplant candidates, porcelain gallbladder

**Natural Orifice Surgery:**
- Transvaginal cholecystectomy
- Limited adoption due to added complexity

**Gallbladder-Preserving Approaches:**
- Endoscopic gallbladder drainage (LAMS)
- Primarily for high-risk surgical patients
- Stone recurrence limits long-term utility`,
      keyTerms: [
        { term: 'PONCHO trial', definition: 'RCT showing same-admission cholecystectomy reduces recurrent biliary events after mild gallstone pancreatitis' },
        { term: 'Strasberg classification', definition: 'Standard system for classifying bile duct injuries from cholecystectomy' },
        { term: 'rendezvous technique', definition: 'Combined EUS/percutaneous and endoscopic approach to achieve biliary access when standard ERCP fails' },
        { term: 'FISH', definition: 'Fluorescence in situ hybridization; cytologic adjunct for detecting cholangiocarcinoma' },
        { term: 'LAMS', definition: 'Lumen-apposing metal stent; used in EUS-guided drainage procedures' },
        { term: 'CHOCOLATE trial', definition: 'Dutch RCT supporting early vs. delayed cholecystectomy in acute cholecystitis' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Early cholecystectomy (<72 hours) for acute cholecystitis improves outcomes - avoid "cooling off"
2. Same-admission cholecystectomy after mild gallstone pancreatitis prevents recurrence (PONCHO)
3. The critical view of safety should be documented (photo/video) in every cholecystectomy
4. If bile duct injury suspected intraoperatively - STOP, drain, close, refer to specialist
5. ERCP + cholecystectomy should occur within 72 hours to 2 weeks of each other for CBD stones
6. Post-ERCP pancreatitis prophylaxis: Rectal indomethacin 100mg + pancreatic duct stent for high-risk
7. Incidental T2 gallbladder cancer requires re-resection with liver bed and lymphadenectomy
8. Bile acid diarrhea post-cholecystectomy is underdiagnosed - empiric trial of sequestrant reasonable
9. EUS-guided biliary drainage is viable alternative when ERCP fails
10. Tokyo Guidelines help stratify severity but early surgery is still preferred for non-severe cases`,
    },
  },

  media: [
    {
      id: 'biliary-anatomy',
      type: 'diagram',
      filename: 'biliary-anatomy.svg',
      title: 'Biliary System Anatomy',
      description: 'Gallbladder, cystic duct, common bile duct, and sphincter of Oddi',
    },
    {
      id: 'gallstone-types',
      type: 'diagram',
      filename: 'gallstone-types.svg',
      title: 'Types of Gallstones',
      description: 'Cholesterol vs. pigment stones',
    },
  ],

  citations: [
    {
      id: 'tokyo-2018',
      type: 'article',
      title: 'Tokyo Guidelines 2018: Diagnostic and Severity Grading for Acute Cholecystitis and Cholangitis',
      source: 'Journal of Hepato-Biliary-Pancreatic Sciences',
    },
    {
      id: 'sages-cholecystectomy',
      type: 'article',
      title: 'SAGES Safe Cholecystectomy Program',
      source: 'SAGES Guidelines',
      url: 'https://www.sages.org/safe-cholecystectomy-program/',
    },
    {
      id: 'chocolate-trial',
      type: 'article',
      title: 'CHOCOLATE Trial: Early vs. Delayed Cholecystectomy for Acute Cholecystitis',
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pancreatitis', targetType: 'condition', relationship: 'related', label: 'Pancreatitis' },
    { targetId: 'condition-liver-diseases', targetType: 'condition', relationship: 'related', label: 'Liver Diseases' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'ERCP' },
  ],

  tags: {
    systems: ['digestive', 'hepatobiliary'],
    topics: ['pathology', 'gastroenterology', 'surgery'],
    keywords: ['gallstones', 'cholecystitis', 'cholangitis', 'ERCP', 'cholecystectomy', 'biliary'],
    clinicalRelevance: 'high',
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

export default gallbladderDisease;
