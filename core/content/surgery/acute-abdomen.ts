/**
 * Acute Abdomen
 *
 * Comprehensive general surgery content covering acute abdominal emergencies
 * including appendicitis, cholecystitis, bowel obstruction, peritonitis,
 * and mesenteric ischemia. Designed for multi-level medical education.
 */

import { EducationalContent } from '../types';

export const acuteAbdomen: EducationalContent = {
  id: 'surgery-acute-abdomen',
  type: 'condition',
  name: 'Acute Abdomen',
  nameEs: 'Abdomen Agudo',
  alternateNames: ['Surgical Abdomen', 'Acute Abdominal Emergency', 'Acute Surgical Abdomen'],

  levels: {
    1: {
      level: 1,
      summary:
        'A really bad tummy ache that needs a doctor right away because something inside might be seriously wrong and could need surgery.',
      explanation: `Sometimes people get a tummy ache that is much worse than a normal stomachache. This is called an "acute abdomen," and it means something inside the belly might be seriously wrong and needs a doctor right away.

**Common Causes:**

1. **Appendicitis** - The appendix (a small finger-shaped pouch near where the large and small intestines meet) gets swollen and infected. This usually causes pain that starts near the belly button and moves to the lower right side.

2. **Gallbladder Problems** - The gallbladder (a small sac under the liver that stores digestive juice) can get blocked by stones and become swollen and painful, usually on the upper right side of the belly.

3. **Blocked Intestine** - Sometimes the intestine (the long tube that digests food) gets blocked so food and liquids cannot pass through. This causes bad cramping pain, throwing up, and a swollen belly.

4. **Infection Inside the Belly** - If something bursts or leaks inside the belly, germs can spread and cause a serious infection called peritonitis. The whole belly becomes very painful and stiff.

**Warning Signs to Go to the Emergency Room:**
- Very bad belly pain that does not go away
- Pain that gets worse when you move, cough, or walk
- Throwing up and unable to keep food or water down
- Belly that is hard and very tender to touch
- Fever with belly pain
- No bowel movements or gas for a long time

**What Happens at the Hospital:**
- The doctor will ask where it hurts and press gently on your belly
- They may do blood tests and take pictures of the inside of your belly (like a CT scan)
- You might need surgery to fix the problem
- Some problems can be treated with medicines and rest instead`,
      keyTerms: [
        { term: 'acute', definition: 'Something that happens suddenly and is serious' },
        { term: 'abdomen', definition: 'The area of your body between your chest and your hips — your belly' },
        { term: 'appendix', definition: 'A small finger-shaped pouch attached to the large intestine in the lower right belly' },
        { term: 'gallbladder', definition: 'A small sac under the liver that stores bile, a juice that helps digest fat' },
        { term: 'peritonitis', definition: 'A dangerous infection of the lining inside the belly' },
      ],
      analogies: [
        'The appendix getting blocked and swollen is like a tiny dead-end street that gets clogged — pressure builds up and it can burst if not fixed.',
        'Gallstones blocking the gallbladder are like a marble stuck in a drain — the fluid backs up and causes swelling and pain.',
        'A blocked intestine is like a kinked garden hose — nothing can get through, so everything backs up.',
      ],
      examples: [
        'A 10-year-old with pain around the belly button that moves to the lower right side and gets worse over a few hours likely has appendicitis.',
        'An older person who has not had a bowel movement for 3 days and whose belly is very swollen and painful might have a bowel obstruction.',
      ],
      patientCounselingPoints: [
        'Do not eat or drink anything if you think you might need surgery — the doctor will tell you when it is safe.',
        'Do not take strong pain medicine before seeing the doctor because it can hide important signs.',
        'Go to the emergency room right away if belly pain is very bad, your belly is hard, or you have a fever with belly pain.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Acute abdomen refers to sudden, severe abdominal pain requiring urgent evaluation. Common causes are categorized by location: right lower quadrant (appendicitis), right upper quadrant (cholecystitis), and diffuse (peritonitis or obstruction).',
      explanation: `## Understanding the Acute Abdomen

An acute abdomen is a medical emergency where severe abdominal pain develops suddenly and may require surgical intervention. The key to diagnosis is understanding which organs are in each part of the abdomen.

### Pain Location Helps Identify the Cause

**Right Lower Quadrant (RLQ):**
- **Appendicitis** — most common surgical emergency
- Pain typically starts as vague periumbilical (around the belly button) pain, then migrates to the RLQ over 12-24 hours
- Associated with nausea, vomiting, low-grade fever, and loss of appetite

**Right Upper Quadrant (RUQ):**
- **Acute cholecystitis** — inflammation of the gallbladder
- Pain often begins after eating fatty foods
- May radiate to the right shoulder or back
- Associated with nausea, vomiting, and fever

**Left Lower Quadrant (LLQ):**
- **Diverticulitis** — infection of small pouches in the colon wall
- Often called "left-sided appendicitis" in older adults
- Associated with fever, changes in bowel habits

**Epigastric (Upper Middle):**
- Pancreatitis, peptic ulcer disease, or gastritis
- Pain may radiate straight through to the back

**Diffuse (Whole Abdomen):**
- **Bowel obstruction** — crampy pain that comes and goes
- **Peritonitis** — constant, severe pain; rigid abdomen
- **Mesenteric ischemia** — "pain out of proportion to exam"

### Peritoneal Signs — Indicators of Serious Trouble
When the peritoneum (the lining of the abdominal cavity) becomes irritated, specific signs appear:
- **Guarding** — tensing of abdominal muscles when touched
- **Rebound tenderness** — pain worsens when pressure is released
- **Rigidity** — board-like stiffness of the abdomen
- **Absent bowel sounds** — the intestines stop moving

### Key Diagnostic Steps
1. History and physical examination (most important)
2. Blood tests: CBC (white blood cell count), CRP, lipase, liver function
3. Imaging: CT scan of the abdomen/pelvis (most useful), ultrasound for gallbladder and appendix in children/pregnant patients
4. X-rays: can show free air (perforation) or bowel obstruction patterns

### Small Bowel Obstruction (SBO) vs. Large Bowel Obstruction (LBO)
| Feature | SBO | LBO |
|---------|-----|-----|
| Most common cause | Adhesions from prior surgery | Colon cancer |
| Vomiting | Early and frequent | Late or absent |
| Abdominal distension | Moderate | Marked |
| Pain | Crampy, periumbilical | Crampy, lower abdomen |`,
      keyTerms: [
        { term: 'peritoneal signs', definition: 'Physical exam findings (guarding, rebound tenderness, rigidity) that suggest irritation of the abdominal lining, indicating a serious surgical problem' },
        { term: 'McBurney point', definition: 'A spot one-third of the way from the hip bone to the belly button on the right side; maximum tenderness here suggests appendicitis' },
        { term: 'Murphy sign', definition: 'Pain and catching of breath when pressing under the right rib cage during a deep breath; suggests gallbladder inflammation' },
        { term: 'rebound tenderness', definition: 'Increased pain when pressure on the abdomen is suddenly released, indicating peritoneal irritation' },
        { term: 'bowel obstruction', definition: 'A blockage in the small or large intestine that prevents normal passage of food, fluid, and gas' },
        { term: 'adhesions', definition: 'Bands of scar tissue that form between organs after surgery, the most common cause of small bowel obstruction' },
      ],
      analogies: [
        'The peritoneum is like a plastic wrap lining the inside of the abdomen — when it gets irritated by infection or blood, everything becomes extremely painful.',
        'Adhesions after surgery are like internal scars that can form sticky bands, sometimes kinking the intestine like pinching a straw.',
      ],
      examples: [
        'A 25-year-old with 12 hours of worsening RLQ pain, loss of appetite, and low-grade fever most likely has acute appendicitis.',
        'A 55-year-old woman with severe RUQ pain after eating fried chicken, with a positive Murphy sign, likely has acute cholecystitis.',
        'A 70-year-old with prior abdominal surgery who presents with crampy pain, vomiting, and no bowel movements for 2 days likely has a small bowel obstruction from adhesions.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Acute abdomen encompasses surgical emergencies requiring systematic evaluation using clinical scoring systems, cross-sectional imaging, and understanding of pathophysiology to distinguish conditions needing operative vs. non-operative management.',
      explanation: `## Acute Abdomen: Clinical Approach and Pathophysiology

### Appendicitis

**Pathophysiology:** Luminal obstruction (fecalith, lymphoid hyperplasia, or rarely tumor) leads to increased intraluminal pressure, venous congestion, bacterial invasion, and eventual ischemia and perforation.

**Alvarado Score (MANTRELS):**
| Criteria | Points |
|----------|--------|
| **M**igration of pain to RLQ | 1 |
| **A**norexia | 1 |
| **N**ausea/Vomiting | 1 |
| **T**enderness in RLQ | 2 |
| **R**ebound pain | 1 |
| **E**levated temperature (>37.3°C) | 1 |
| **L**eukocytosis (>10,000/μL) | 2 |
| **S**hift to left (>75% neutrophils) | 1 |
| **Total** | **10** |

- Score 1-4: Appendicitis unlikely
- Score 5-6: Possible appendicitis — observe or image
- Score 7-8: Probable appendicitis
- Score 9-10: Almost certain appendicitis

**CT Findings:** Dilated appendix >6mm, periappendiceal fat stranding, appendicolith, wall enhancement, periappendiceal fluid. Sensitivity >95%.

### Acute Cholecystitis

**Pathophysiology of Murphy Sign:** Gallstone impaction in the cystic duct causes gallbladder distension and wall inflammation. During deep inspiration, the diaphragm pushes the inflamed gallbladder inferiorly into the examiner's hand at the right costal margin, producing pain and inspiratory arrest.

**Ultrasound Findings (Sonographic Murphy Sign):**
- Gallstones with posterior acoustic shadowing
- Gallbladder wall thickening (>3mm)
- Pericholecystic fluid
- Sonographic Murphy sign (pain with probe pressure)

**HIDA Scan:** Absent gallbladder filling after 4 hours = cystic duct obstruction (sensitivity 97% for acute cholecystitis).

### Small Bowel Obstruction (SBO) vs. Large Bowel Obstruction (LBO)

**Transition Point:** The location where dilated bowel transitions to decompressed bowel — this is where the obstruction is located. CT is the gold standard for identifying transition points.

**SBO Key Features:**
- Causes: Adhesions (65%), hernias (15%), neoplasm (10%), Crohn disease
- "String of pearls" sign on upright X-ray: small air-fluid levels in a row
- Dilated small bowel (>3 cm), decompressed colon
- CT: "small bowel feces sign" at transition point

**LBO Key Features:**
- Causes: Colorectal cancer (60%), volvulus (15%), diverticular stricture
- Massively dilated colon (cecum >9 cm = risk of perforation)
- Competent ileocecal valve creates "closed-loop" obstruction — surgical emergency
- Sigmoid volvulus: "coffee bean" sign on X-ray; cecal volvulus: "kidney bean" sign

### Mesenteric Ischemia

**Classic Presentation:** "Pain out of proportion to physical examination" — severe abdominal pain with a relatively benign exam.

**Types:**
1. **Acute mesenteric arterial embolism** (50%) — often from atrial fibrillation; SMA is most commonly affected
2. **Acute mesenteric arterial thrombosis** (25%) — superimposed on atherosclerotic disease
3. **Non-occlusive mesenteric ischemia (NOMI)** (20%) — vasospasm in low-flow states (shock, pressors)
4. **Mesenteric venous thrombosis** (5%) — associated with hypercoagulable states

**CT Angiography Findings:** Filling defect in SMA, bowel wall thickening or pneumatosis intestinalis (air in bowel wall), portal venous gas, mesenteric fat stranding.

**Laboratory:** Elevated lactate, metabolic acidosis, leukocytosis (late finding = bowel necrosis).

### Peritonitis

**Classification:**
- **Primary (spontaneous bacterial peritonitis):** Infection without surgical source; common in cirrhosis/ascites. Diagnosed by ascitic fluid PMN >250/mm³.
- **Secondary:** From perforation or necrosis of an intra-abdominal organ (perforated appendix, perforated ulcer, diverticular perforation). Requires surgical source control.
- **Tertiary:** Persistent or recurrent peritonitis after adequate surgical treatment, often with opportunistic organisms.

**Free Air on Imaging:** Pneumoperitoneum on upright chest X-ray (air under diaphragm) or CT indicates hollow viscus perforation — typically requires emergent surgery.`,
      keyTerms: [
        { term: 'Alvarado score', definition: 'A 10-point clinical scoring system (MANTRELS mnemonic) used to predict the probability of acute appendicitis based on symptoms, signs, and laboratory findings' },
        { term: 'transition point', definition: 'The location on CT where dilated bowel changes to collapsed bowel, marking the site of obstruction' },
        { term: 'pneumatosis intestinalis', definition: 'Air within the bowel wall, seen on CT, indicating bowel ischemia or necrosis — an ominous finding requiring urgent intervention' },
        { term: 'pneumoperitoneum', definition: 'Free air in the peritoneal cavity, typically from perforation of a hollow viscus, visible as air under the diaphragm on upright chest X-ray' },
        { term: 'mesenteric ischemia', definition: 'Inadequate blood supply to the intestines, most commonly from embolic occlusion of the superior mesenteric artery, presenting as severe pain disproportionate to exam findings' },
        { term: 'HIDA scan', definition: 'Hepatobiliary iminodiacetic acid scan — nuclear medicine study that evaluates gallbladder function; non-filling indicates cystic duct obstruction consistent with acute cholecystitis' },
        { term: 'fecalith', definition: 'A hardened mass of fecal material that can obstruct the appendiceal lumen, initiating the pathologic cascade of appendicitis' },
        { term: 'closed-loop obstruction', definition: 'A segment of bowel obstructed at two points, preventing both antegrade and retrograde decompression, creating a surgical emergency due to high perforation risk' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Always obtain upright chest X-ray or CT when perforation is suspected — free air changes management to emergent surgery.
- In elderly and immunosuppressed patients, peritoneal signs may be blunted despite catastrophic intra-abdominal pathology.
- Mesenteric ischemia has a narrow window for intervention — early CTA is critical when clinical suspicion is high.
- A competent ileocecal valve in LBO converts a simple obstruction to a closed-loop obstruction, significantly increasing perforation risk.
- Lactate alone is a late marker of ischemia; a normal lactate does not exclude mesenteric ischemia.`,
    },

    4: {
      level: 4,
      summary:
        'Advanced surgical decision-making in acute abdomen involves evidence-based algorithms for timing of intervention, severity grading systems, damage control strategies, and nuanced management of complicated presentations.',
      explanation: `## Advanced Management of the Acute Abdomen

### Appendicitis: Complicated vs. Uncomplicated Decision-Making

**Perforated Appendicitis Scenarios:**

1. **Early presentation (<48 hours symptoms), no abscess:** Proceed with appendectomy (laparoscopic preferred). Perforation found intraoperatively does not change the procedure.

2. **Late presentation with contained abscess (phlegmon/abscess):**
   - Initial management: IV antibiotics + percutaneous drainage of abscess if >3-4 cm
   - Interval appendectomy at 6-8 weeks (controversial — see Level 5)
   - CT-guided drainage success rate 80-90%

3. **Diffuse peritonitis from perforation:** Emergent laparoscopic or open appendectomy with peritoneal lavage.

**Interval Appendectomy Evidence:**
- Traditional teaching: Perform interval appendectomy to prevent recurrence (~20% at 5 years) and to rule out occult malignancy (appendiceal neoplasm found in 10-29% of patients >40 years)
- Recent evidence challenges routine interval appendectomy in younger patients (see Level 5)
- Colonoscopy recommended before interval appendectomy in patients >40 years

### Cholecystitis Severity Grading: Tokyo Guidelines (TG18)

**Grade I (Mild):**
- Acute cholecystitis in a healthy patient
- No organ dysfunction, mild inflammatory changes
- Management: Early laparoscopic cholecystectomy (within 72 hours)

**Grade II (Moderate):**
- Elevated WBC >18,000/μL
- Palpable gallbladder
- Duration >72 hours
- Marked local inflammation (gangrenous, emphysematous, pericholecystic abscess)
- Management: Early cholecystectomy if experienced surgeon available; otherwise percutaneous cholecystostomy + delayed surgery

**Grade III (Severe):**
- Associated organ dysfunction (cardiovascular, neurologic, respiratory, renal, hepatic, hematologic)
- Management: Urgent gallbladder drainage (percutaneous cholecystostomy), definitive surgery when stabilized
- Cholecystectomy may be deferred or converted to subtotal cholecystectomy

**Mirizzi Syndrome:** Gallstone impacted in cystic duct or Hartmann pouch compressing the common hepatic duct, causing obstructive jaundice. Requires careful surgical management to avoid bile duct injury.

### Adhesive Small Bowel Obstruction: Management Algorithm

**Initial Assessment:**
1. NPO, IV fluid resuscitation, nasogastric tube decompression
2. CT abdomen/pelvis with IV contrast (oral contrast debated)
3. Assess for signs requiring emergent surgery

**Emergent Surgery Indicators:**
- Peritoneal signs (perforation or strangulation)
- Closed-loop obstruction on CT
- Pneumatosis intestinalis or portal venous gas
- Free intraperitoneal fluid with bowel wall thickening
- Hemodynamic instability

**Non-Operative Management (if no emergent indicators):**
- Water-soluble contrast challenge (Gastrografin): 100mL via NGT
  - If contrast reaches colon by 24 hours on X-ray → obstruction resolved, advance diet
  - If no contrast in colon at 24-48 hours → surgical exploration recommended
  - Gastrografin is both diagnostic AND therapeutic (osmotic effect draws fluid into lumen)
- Success rate of non-operative management for partial SBO: 65-80%

**Surgical Approach:**
- Laparoscopic adhesiolysis: preferred for single-band adhesions, first-time SBO
- Open adhesiolysis: for multiple adhesions, hostile abdomen, failed laparoscopic attempt
- Bowel resection: if non-viable bowel identified

### Damage Control Laparotomy (DCL)

**Indications (Lethal Triad):**
- Hypothermia (<35°C)
- Acidosis (pH <7.2, lactate >4 mmol/L)
- Coagulopathy (INR >1.5, platelets <50,000)

**Three-Phase Approach:**
1. **Phase 1 — Abbreviated Laparotomy (OR):**
   - Source control: resect non-viable bowel (no anastomosis), pack bleeding, temporary abdominal closure (negative pressure wound therapy or Bogota bag)
   - Limit OR time to <60-90 minutes

2. **Phase 2 — Resuscitation (ICU):**
   - Correct hypothermia (warm fluids, forced air warming)
   - Reverse coagulopathy (blood products, TXA)
   - Optimize hemodynamics, correct acidosis
   - Duration: typically 24-72 hours

3. **Phase 3 — Definitive Surgery (OR):**
   - Re-exploration, removal of packing
   - Definitive repair: intestinal anastomosis, definitive closure
   - May require multiple re-explorations

**Abdominal Compartment Syndrome:**
- Sustained intra-abdominal pressure >20 mmHg with new organ dysfunction
- Measured via bladder (Foley) pressure transduction
- Treatment: decompressive laparotomy if medical measures fail`,
      keyTerms: [
        { term: 'Tokyo Guidelines (TG18)', definition: 'Evidence-based severity grading and management guidelines for acute cholecystitis and cholangitis, categorizing severity into Grade I (mild), Grade II (moderate), and Grade III (severe) to guide surgical timing and approach' },
        { term: 'interval appendectomy', definition: 'Delayed appendectomy performed 6-8 weeks after initial non-operative management of complicated appendicitis with phlegmon or abscess, to allow inflammation to resolve' },
        { term: 'Gastrografin challenge', definition: 'Administration of water-soluble contrast via NGT in adhesive SBO; both diagnostic (predicts need for surgery if contrast does not reach colon by 24 hours) and therapeutic (osmotic effect may resolve partial obstruction)' },
        { term: 'damage control laparotomy', definition: 'Staged surgical approach for critically ill patients with the lethal triad (hypothermia, acidosis, coagulopathy), involving abbreviated initial surgery for source control, ICU resuscitation, and planned re-exploration' },
        { term: 'abdominal compartment syndrome', definition: 'Life-threatening condition with sustained intra-abdominal pressure >20 mmHg causing new organ dysfunction, requiring decompressive laparotomy' },
        { term: 'Mirizzi syndrome', definition: 'Extrinsic compression of the common hepatic duct by a gallstone impacted in the cystic duct or gallbladder neck, causing obstructive jaundice' },
        { term: 'percutaneous cholecystostomy', definition: 'Image-guided drainage of the gallbladder through a catheter placed through the skin, used as a temporizing measure in high-risk patients with severe cholecystitis' },
        { term: 'lethal triad', definition: 'The combination of hypothermia, acidosis, and coagulopathy in trauma and surgical patients that creates a self-perpetuating cycle of physiologic derangement and high mortality' },
      ],
      clinicalNotes: `**Decision-Making Pearls:**
- Early cholecystectomy (<72 hours) for acute cholecystitis reduces total hospital stay, complications, and cost compared to delayed surgery — this is Grade A evidence.
- In adhesive SBO, the Gastrografin challenge at 24 hours is the single best predictor of need for surgical intervention.
- Damage control laparotomy has reduced mortality in critically ill surgical patients from >90% to approximately 50% — recognize the lethal triad early.
- Appendiceal neoplasm incidence increases with age — always send the specimen to pathology and have a lower threshold for colonoscopy in patients >40 years.
- In elderly patients with SBO, consider hernia (inguinal, femoral, internal) as a cause even when adhesions from prior surgery are present — always examine the groins.`,
    },

    5: {
      level: 5,
      summary:
        'Current evidence challenges traditional surgical dogma in acute abdominal management. Key trials (CODA, ACDC) support non-operative approaches in select patients, while ERAS protocols and AI-assisted decision tools are transforming perioperative care.',
      explanation: `## Frontiers in Acute Abdomen Management

### Non-Operative Management of Appendicitis: The CODA Trial

**Comparison of Outcomes of Antibiotic Drugs and Appendectomy (CODA) Trial (NEJM 2020):**
- Multicenter RCT: 1,552 adults with appendicitis randomized to antibiotics alone vs. appendectomy
- **Key Findings:**
  - Antibiotics-first approach was non-inferior for 30-day health status (EQ-5D score)
  - At 90 days, 29% of antibiotics group underwent appendectomy (crossover)
  - In patients WITHOUT appendicolith: antibiotic success rate ~80% at 1 year
  - In patients WITH appendicolith: 41% required appendectomy within 90 days — antibiotics less effective
  - Serious adverse events were similar between groups
  - Antibiotic group had more days of work missed and more healthcare encounters in the first 90 days

**Clinical Implications:**
- Antibiotics-first is a reasonable option for uncomplicated appendicitis WITHOUT appendicolith in patients who wish to avoid surgery
- Appendicolith is a key stratifying factor — CT should specifically evaluate for its presence
- Shared decision-making is essential — recurrence risk, multiple healthcare visits, and need for eventual surgery must be discussed
- Not appropriate for complicated appendicitis (perforation, abscess, diffuse peritonitis)

**APPAC III Trial (2024):** Extended follow-up data confirming 5-year outcomes for antibiotic-treated appendicitis; approximately 40% eventually required appendectomy, but most who avoided surgery had good long-term outcomes.

### Early Cholecystectomy Evidence: The ACDC Trial and Beyond

**ACDC Trial (Annals of Surgery 2013):**
- RCT of early laparoscopic cholecystectomy (<24 hours) vs. conservative management + delayed cholecystectomy (7-45 days)
- **Key Findings:**
  - Early group: lower morbidity (12% vs. 34%), shorter total hospital stay
  - No difference in bile duct injury rate
  - 30% of delayed group required urgent surgery during the waiting period

**COCHRANE Meta-Analysis (Updated 2023):**
- Early cholecystectomy (<7 days) is safe and superior to delayed cholecystectomy
- Lower total hospital stay, lower complication rates, no increase in bile duct injury
- Cost-effective from a health-system perspective

**Same-Admission Cholecystectomy:**
- Current best practice: cholecystectomy during the index admission for uncomplicated cholecystitis
- "Hot cholecystectomy" within 24 hours increasingly adopted at high-volume centers
- Bailout procedures for difficult cholecystectomy: subtotal cholecystectomy, fundus-first approach, critical view of safety (Strasbourg consensus)

### Enhanced Recovery After Surgery (ERAS) in Emergency Abdominal Surgery

**ERAS Adaptation for Emergency Surgery:**
Traditional ERAS protocols were designed for elective surgery. Adaptation to emergency settings includes:

- **Preoperative:** Goal-directed fluid resuscitation (not liberal fluids), early antibiotics, minimize opioids, VTE prophylaxis as soon as hemostasis achieved
- **Intraoperative:** Laparoscopic approach when feasible (reduces ileus duration), restrictive fluid strategy, multimodal analgesia (TAP blocks, IV acetaminophen, ketamine), normothermia maintenance
- **Postoperative:** Early enteral nutrition (within 24 hours if bowel in continuity), early mobilization, minimize NG tube use (no routine NGT after laparotomy), multimodal opioid-sparing analgesia, early Foley removal

**Emergency Laparoscopic Surgery Evidence:**
- Laparoscopic appendectomy: standard of care. Lower SSI rate, faster recovery, better cosmesis. Three-port technique standard; single-incision feasible but not superior.
- Laparoscopic cholecystectomy for acute cholecystitis: safe with experienced surgeons. Critical view of safety reduces bile duct injury risk to <0.5%.
- Diagnostic laparoscopy for undifferentiated acute abdomen: reduces negative laparotomy rate from 20% to <5%.

### AI-Assisted Surgical Decision Support

**Current Applications:**
1. **Deep learning for CT interpretation:** Automated detection of appendicitis, free air, bowel obstruction, and mesenteric ischemia with sensitivity >90% and ability to triage urgent cases
2. **Clinical decision algorithms:** Machine learning models integrating vital signs, labs, and imaging to predict:
   - Need for operative intervention in SBO (outperforms surgeon gestalt in some studies)
   - Risk of bowel strangulation
   - Probability of successful non-operative management
3. **Natural language processing:** Automated extraction of surgical history and risk factors from EHR for preoperative risk stratification
4. **Intraoperative AI:** Real-time surgical field analysis for critical view of safety during cholecystectomy (EndoDigest, AI4SafeChole projects)

**Limitations:**
- Most AI tools are retrospectively validated; prospective RCTs are ongoing
- Algorithm performance degrades outside training demographics — equity concerns
- Decision support, not replacement — surgeon clinical judgment remains paramount
- Regulatory and medicolegal frameworks still evolving

### Emerging Concepts

**Antibiotic Stewardship in Surgical Infections:**
- Short-course antibiotics (3-5 days) after adequate source control are equivalent to longer courses (STOP-IT trial)
- De-escalation based on culture data reduces Clostridioides difficile infection and antimicrobial resistance
- Procalcitonin-guided antibiotic discontinuation reduces duration without increasing recurrence

**Biomarker-Guided Management:**
- Serial CRP in appendicitis may predict perforation risk (CRP >60 mg/L associated with complicated appendicitis)
- Ischemia-modified albumin and I-FABP (intestinal fatty acid binding protein) as early markers of mesenteric ischemia — not yet in routine clinical use
- Point-of-care lactate for triage in undifferentiated acute abdomen

**Interval Cancer Screening After Complicated Appendicitis:**
- In patients >40 years treated non-operatively for appendiceal abscess, appendiceal neoplasm rate is 10-29%
- Colonoscopy recommended before or in lieu of interval appendectomy
- Cross-sectional imaging follow-up if appendectomy deferred`,
      keyTerms: [
        { term: 'CODA trial', definition: 'Landmark 2020 NEJM RCT (n=1,552) demonstrating non-inferiority of antibiotics-first approach compared to appendectomy for uncomplicated appendicitis, with appendicolith as a key stratifying factor for treatment failure' },
        { term: 'ACDC trial', definition: 'Randomized trial demonstrating superiority of early laparoscopic cholecystectomy (<24 hours) over conservative management with delayed surgery for acute cholecystitis, with lower morbidity and shorter total hospital stay' },
        { term: 'critical view of safety', definition: 'The Strasbourg consensus-defined operative landmark during cholecystectomy requiring clear identification of the cystic duct and artery in the hepatocystic triangle with the lower third of the gallbladder dissected off the liver bed, reducing bile duct injury risk' },
        { term: 'STOP-IT trial', definition: 'Landmark trial demonstrating that short-course (approximately 4 days) antibiotics after adequate source control for intra-abdominal infection produces equivalent outcomes to longer courses (approximately 8 days)' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery — evidence-based multimodal perioperative care pathway including early nutrition, multimodal analgesia, early mobilization, and minimized invasive interventions, increasingly adapted for emergency surgery settings' },
        { term: 'appendicolith', definition: 'Calcified fecal deposit in the appendiceal lumen; its presence on CT is a key predictor of failure of antibiotic-only management in appendicitis (CODA trial subgroup analysis)' },
        { term: 'I-FABP', definition: 'Intestinal fatty acid binding protein — an emerging serum biomarker released from damaged enterocytes, showing promise as an early indicator of intestinal ischemia before lactate elevation' },
      ],
      clinicalNotes: `**Evidence-Based Practice Points:**
- The CODA trial supports shared decision-making: antibiotics-first is reasonable for uncomplicated appendicitis WITHOUT appendicolith, but patients must accept ~30% chance of eventual appendectomy.
- Same-admission cholecystectomy is now standard of care — delays increase readmission, morbidity, and cost. The "6-week wait" is outdated.
- ERAS principles apply to emergency surgery: early feeding, opioid-sparing analgesia, and early mobilization improve outcomes even after emergent laparotomy.
- AI-assisted CT interpretation is approaching clinical readiness for triage of acute abdominal emergencies, but prospective validation and equity considerations remain active areas of research.
- Short-course antibiotics (STOP-IT) after source control: stop antibiotics at 3-5 days if source controlled and patient improving — no need for arbitrary 7-14 day courses.`,
    },
  },

  media: [
    {
      id: 'acute-abdomen-quadrants-diagram',
      type: 'diagram',
      filename: 'abdominal-quadrants-differential.svg',
      title: 'Abdominal Quadrants and Common Surgical Diagnoses',
      description: 'Diagram mapping abdominal quadrants to most common acute surgical diagnoses by location.',
    },
    {
      id: 'acute-abdomen-ct-findings',
      type: 'image',
      filename: 'acute-abdomen-ct-gallery.png',
      title: 'CT Findings in Acute Abdominal Emergencies',
      description: 'Representative CT images of appendicitis, cholecystitis, bowel obstruction, free air, and mesenteric ischemia.',
    },
    {
      id: 'sbo-management-algorithm',
      type: 'diagram',
      filename: 'sbo-management-algorithm.svg',
      title: 'Small Bowel Obstruction Management Algorithm',
      description: 'Flowchart for management of adhesive small bowel obstruction including Gastrografin challenge protocol.',
    },
  ],

  citations: [
    {
      id: 'coda-trial-2020',
      type: 'article',
      title: 'A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis',
      authors: ['CODA Collaborative'],
      source: 'New England Journal of Medicine',
      chapter: '383(20):1907-1919',
      url: 'https://doi.org/10.1056/NEJMoa2014320',
    },
    {
      id: 'acdc-trial-2013',
      type: 'article',
      title: 'The ACDC Trial: Early Laparoscopic Cholecystectomy for Acute Cholecystitis',
      authors: ['Gutt CN', 'Encke J', 'Köninger J', 'et al.'],
      source: 'Annals of Surgery',
      chapter: '258(3):385-393',
    },
    {
      id: 'tokyo-guidelines-2018',
      type: 'article',
      title: 'Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis',
      authors: ['Yokoe M', 'Hata J', 'Takada T', 'et al.'],
      source: 'Journal of Hepato-Biliary-Pancreatic Sciences',
      chapter: '25(1):41-54',
    },
    {
      id: 'stop-it-trial',
      type: 'article',
      title: 'Trial of Short-Course Antimicrobial Therapy for Intraabdominal Infection',
      authors: ['Sawyer RG', 'Claridge JA', 'Nathens AB', 'et al.'],
      source: 'New England Journal of Medicine',
      chapter: '372(21):1996-2005',
    },
    {
      id: 'schwartz-principles-surgery',
      type: 'textbook',
      title: "Schwartz's Principles of Surgery",
      authors: ['Brunicardi FC', 'et al.'],
      source: "McGraw-Hill, 11th Edition",
      license: 'Commercial',
    },
  ],

  crossReferences: [
    {
      targetId: 'surgery-surgical-complications',
      targetType: 'topic',
      relationship: 'related',
      label: 'Surgical Complications',
    },
    {
      targetId: 'surgery-pre-operative-evaluation',
      targetType: 'topic',
      relationship: 'related',
      label: 'Pre-Operative Evaluation',
    },
    {
      targetId: 'surgery-post-operative-care',
      targetType: 'topic',
      relationship: 'related',
      label: 'Post-Operative Care',
    },
    {
      targetId: 'surgery-surgical-principles',
      targetType: 'topic',
      relationship: 'related',
      label: 'Surgical Principles',
    },
  ],

  tags: {
    systems: ['gastrointestinal', 'hepatobiliary'],
    topics: ['surgery', 'emergency', 'acute care', 'general surgery'],
    keywords: [
      'appendicitis', 'cholecystitis', 'bowel obstruction', 'peritonitis',
      'mesenteric ischemia', 'acute abdomen', 'SBO', 'LBO', 'damage control',
      'CODA trial', 'Tokyo guidelines', 'Alvarado score',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2025-01-30T00:00:00Z',
  updatedAt: '2025-01-30T00:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
