/**
 * Intussusception - Pediatric Condition
 *
 * Comprehensive content on intussusception including diagnosis, air enema,
 * surgical indications, and recurrence prevention.
 */

import { EducationalContent } from '../../types';

export const intussusception: EducationalContent = {
  id: 'condition-intussusception',
  type: 'condition',
  name: 'Intussusception',
  alternateNames: ['Intussusception', 'Bowel Intussusception', 'ILEO-COLIC Intussusception'],

  levels: {
    1: {
      level: 1,
      summary: 'Intussusception happens when one part of the intestine slides into another part, like a telescope. It blocks the bowel and causes severe pain. It needs quick treatment to prevent serious damage.',
      explanation: `## What is Intussusception?

Intussusception is a serious condition where a part of the intestine slides into another part of the intestine, like how a telescope collapses. This blocks the bowel and can cut off blood flow.

**Who Gets It:**
- Most common in babies and toddlers (ages 3 months to 3 years)
- Rare in children over 5
- More common in boys than girls

**The Good News:**
- Can be treated successfully if caught early
- Most children recover completely

## Warning Signs and Symptoms

**The Classic Signs:**

1. **Sudden, Severe Pain**
   - Baby screams and pulls legs up to belly
   - Pain comes in waves (every 15-20 minutes)
   - Baby looks fine in between pain episodes

2. **Vomiting**
   - Starts as throwing up food
   - May turn green (bile) later

3. **Bloody Stools**
   - Called "red currant jelly" stools
   - Dark red, jelly-like mixture of blood and mucus
   - Happens in about half of cases

4. **Lethargy**
   - Baby seems very tired and weak
   - Not interested in eating or playing
   - May seem pale

**Other Signs:**
- A lump might be felt in the belly
- Belly may look swollen
- Baby may stop having bowel movements
- Fever (if bowel is damaged)

## How It's Diagnosed

Doctors can find intussusception by:

1. **Physical Exam**
   - Feeling the belly for a lump
   - Checking for tenderness

2. **Ultrasound**
   - Uses sound waves to see inside the belly
   - Can show the "telescoped" bowel
   - Safest test for babies

3. **X-ray**
   - May show signs of blockage
   - Sometimes not enough to diagnose

4. **Air Enema**
   - Can both diagnose AND treat
   - Air is pumped into the rectum
   - Shows the blockage on X-ray

## Treatment

**Non-Surgical Treatment (First Choice):**

*Air Enema:*
- Air is pumped into the rectum
- Pushes the telescoped bowel back into place
- Works in 80-90% of cases
- Done in the X-ray department

**Surgical Treatment (if enema doesn't work):**

*Reasons for surgery:*
- The enema didn't fix it
- The bowel has been damaged (has a hole in it)
- The child is very sick

*What happens:*
- Surgery through a small cut or with a scope
- Surgeon pushes the bowel back into place
- Removes any damaged bowel
- Fixes any weak spots to prevent recurrence

## What to Watch For

**Call the Doctor or Go to Emergency Room If:**
- Baby has sudden severe belly pain
- Pain comes and goes in waves
- Baby is vomiting green fluid
- Baby has bloody or jelly-like stools
- Baby seems very tired and weak
- Baby hasn't had a wet diaper in 6+ hours

## Recovery and Outlook

- Most children go home within 1-2 days
- Some soreness in the belly
- Return to normal eating within a day or two
- It can come back (about 5-10% of children)
- Long-term problems are rare

## Prevention

- There's no sure way to prevent it
- Some cases may be triggered by viral infections
- A vaccine for rotavirus may help prevent some cases`,
      keyTerms: [
        { term: 'intussusception', definition: 'When one part of the intestine slides into another part like a telescope', pronunciation: 'in-tuh-suh-SEP-shun' },
        { term: 'red currant jelly stools', definition: 'Dark red, jelly-like bowel movements caused by blood and mucus in the stool' },
        { term: 'air enema', definition: 'A procedure where air is pumped into the rectum to fix intussusception' },
        { term: 'ultrasound', definition: 'A test that uses sound waves to create pictures of inside the body' },
        { term: 'bile', definition: 'Green fluid made by the liver; vomit that is green means it\'s coming from the small intestine' },
      ],
      analogies: [
        'Intussusception is like a telescope collapsing - one part slides into another part instead of staying open.',
        'The intestines are like a hose - if a kink forms, nothing can get through and the hose can be damaged.',
        'An air enema is like using air to unclog a pipe - the pressure pushes the blockage back where it belongs.',
      ],
      examples: [
        'A 6-month-old baby suddenly starts screaming and pulling her legs up. She stops crying after a few minutes, then does it again 20 minutes later.',
        'A toddler has "red currant jelly" stools and seems very tired and pale.',
        'An air enema successfully pushes the telescoped bowel back in place, and the baby goes home the next day.',
      ],
      patientCounselingPoints: [
        'Seek immediate care if your baby has sudden severe belly pain that comes and goes',
        'Red or jelly-like stools are always an emergency',
        'Most children recover completely with proper treatment',
        'Watch for recurrence in the days and weeks after treatment',
      ],
    },

    2: {
      level: 2,
      summary: 'Intussusception is a pediatric surgical emergency where a segment of bowel telescopes into an adjacent segment, causing obstruction and potential ischemia. Classic presentation is intermittent colicky abdominal pain, vomiting, and "currant jelly" stools. Air enema is both diagnostic and therapeutic.',
      explanation: `## What is Intussusception?

Intussusception is the most common cause of intestinal obstruction in infants and young children. It occurs when a proximal segment of bowel (the intussusceptum) telescopes into a distal segment (the intussuscipiens).

**Epidemiology:**
- Peak age: 3-12 months (rare after 3 years)
- Incidence: 1-4 per 1,000 live births
- Male to female ratio: 3:2
- Slightly more common on the right side

**Pathophysiology:**

The leading edge of the intussusceptum (the "head") drags the mesentery with it:
- Mesenteric vessels become compressed
- Venous and lymphatic drainage is obstructed
- Bowel wall becomes edematous and congested
- Ischemia develops if untreated
- Eventually leads to bowel perforation

**Types:**

| Type | Description | Frequency |
|------|-------------|-----------|
| Ileocolic | Ileum into cecum/colon | 75-80% |
| Ileoileal | Ileum into ileum | 10% |
| Colocolic | Colon into colon | 5% |
| Others | Various combinations | Rare |

## Clinical Presentation

**Classic Triad (present in <50% of cases):**
1. Intermittent colicky abdominal pain
2. Vomiting
3. Red "currant jelly" stools

**Pain Characteristics:**
- Sudden onset, severe
- Occurs in paroxysms every 15-20 minutes
- Child draws knees up to chest during pain
- Appears completely well between episodes
- As obstruction progresses: Continuous pain, lethargy

**Vomiting:**
- Initially: Bilious (green) in 75%
- May become non-bilious as obstruction progresses
- Can become feculent late in course

**Stool Changes:**
- "Red currant jelly": Mucus mixed with blood
- Occurs in about 50% of cases
- Usually indicates some mucosal ischemia
- May be absent early in presentation

**Physical Examination:**
- Sausage-shaped mass in right upper quadrant (RUQ)
- "Dance sign": Mass felt, then disappears, then returns
- Abdominal distension
- Guarding or tenderness (if peritonitis)
- Lethargy or shock (late finding)

## Diagnosis

**Ultrasound (First-line):**
- Sensitivity: 95-98%
- Specificity: 98-100%
- Findings:
  - "Target sign" (transverse view)
  - "Pseudokidney sign" (longitudinal view)
  - "Sandwich sign" (alternating layers)

**Abdominal X-ray:**
- Nonspecific findings in 50% of cases
- May show:
  - Absence of gas in right colon
  - Soft tissue mass in RUQ
  - Small bowel obstruction pattern
  - Free air (if perforated)

**Air Enema:**
- Both diagnostic AND therapeutic
- Shows filling defect at level of intussusception
- Coilspring appearance in barium studies

**CT Scan:**
- Not typically used in children (radiation)
- May be used in atypical cases or older children
- Classic "target sign" seen

## Treatment

**Nonoperative Reduction (First-line):**

*Air Enema:*
- Success rate: 80-90%
- Lower perforation rate than barium enema
- Requires surgical backup available
- Contraindications: Perforation, peritonitis, shock

*Technique:*
- Air pressure typically 80-120 mm Hg
- Visualize reduction on fluoroscopy
- Successful when air fills the entire small bowel
- Air in the peritoneum = perforation

*Barium Enema:*
- Success rate: 75-85%
- Higher perforation risk
- Rarely used now

**Surgical Intervention:**

*Indications:*
- Failed enema reduction (2 attempts)
- Perforation
- Peritonitis
- Hemodynamic instability
- Recurrence after successful reduction

*Procedure:*
- Manual reduction: "Milking" the bowel back
- Resection if nonviable bowel
- Appendectomy often performed
- Check for lead point (pathologic cause)

*Approaches:*
- Laparoscopic (preferred if feasible)
- Open laparotomy

## Lead Points

**In infants (<2 years):**
- Most are idiopathic (no identifiable cause)
- Possibly lymphoid hyperplasia after viral infection
- Meckel diverticulum (most common pathologic lead point)
- Duodenal atresia/stenosis

**In children >2 years:**
- Meckel diverticulum
- Polyps
- Lymphoma
- Intestinal duplication
- Enteric cysts

**Red Flags for Pathologic Lead Point:**
- Age >2 years
- Recurrent intussusception
- Atypical location (not ileocolic)
- Failure of enema reduction

## Complications

**Early Complications:**
- Bowel perforation (2-5% with enema, higher without treatment)
- Peritonitis
- Sepsis
- Shock

**Late Complications:**
- Recurrence (5-10% after enema, 2-5% after surgery)
- Short bowel syndrome (if extensive resection)
- Adhesions and bowel obstruction
- Stricture formation

## Prognosis

**With Prompt Treatment:**
- Excellent prognosis
- Mortality: <1% in developed countries
- Most children discharged within 24-48 hours

**Risk Factors for Poor Outcome:**
- Delayed presentation (>24 hours)
- Younger age (<3 months)
- Shock at presentation
- Perforation
- Need for bowel resection`,
      keyTerms: [
        { term: 'intussusceptum', definition: 'The proximal bowel segment that telescopes into the distal segment', pronunciation: 'in-tuh-suh-SEP-tum' },
        { term: 'intussuscipiens', definition: 'The distal bowel segment that receives the telescoping segment', pronunciation: 'in-tuh-suh-SIP-ee-ens' },
        { term: 'lead point', definition: 'An abnormality that acts as the focus where the bowel begins to telescope' },
        { term: 'target sign', definition: 'Ultrasound appearance of intussusception in transverse view', pronunciation: 'mese-en-TER-ee' },
        { term: 'Meckel diverticulum', definition: 'A congenital pouch in the intestine; can be a lead point for intussusception', pronunciation: 'MEK-ul di-ver-TIK-yoo-lum' },
      ],
      analogies: [
        'The bowel is like a tube with one section sliding inside another, like a collapsing telescope.',
        'The mesentery is like a leash that gets pulled tight when the bowel telescopes - this cuts off blood flow.',
        'An air enema is like using air pressure to push a stuck inner tube back into a tire.',
      ],
      clinicalNotes: 'After successful enema reduction, children are usually observed for 12-24 hours to detect recurrence before discharge. Recurrence is most common in the first 24-48 hours.',
    },

    3: {
      level: 3,
      summary: 'Intussusception is a surgical emergency in children characterized by bowel telescoping causing obstruction, vascular compromise, and potential perforation. Ileocolic is most common. Air enema reduction is first-line with surgery reserved for failures or complications.',
      explanation: `## Pathophysiology

**Mechanism:**

1. **Initiation:** A lead point or focal dysmotility creates an invagination
2. **Propagation:** Peristalsis propagates the intussusceptum distally
3. **Obstruction:** Luminal obstruction causes proximal dilation
4. **Vascular Compromise:**
   - Venous congestion → edema → hemorrhage
   - Lymphatic obstruction → edema
   - Arterial compromise → ischemia → necrosis → perforation

**Lead Points by Age:**

| Age | Common Lead Points |
|-----|-------------------|
| <3 months | Anatomic abnormalities, malrotation |
| 3-12 months | Idiopathic (lymphoid hyperplasia, viral) |
| 12-24 months | Idiopathic, Meckel diverticulum |
| >2 years | Meckel diverticulum, polyps, lymphoma, duplication |

**Viral Association:**
- Adenovirus (types 1, 2, 5, 6)
- Rotavirus
- Human herpesvirus 6
- Peyer patch hypertrophy after infection

## Clinical Presentation

**Age-Specific Features:**

*Infants 3-12 months:*
- Classic presentation with pain, vomiting, currant jelly stools
- Lethargy predominates
- Cannot communicate pain

*Older children:*
- Pain more localized
- May have longer prodrome
- Higher likelihood of pathologic lead point
- Vomiting less prominent

**Pain Paroxysms:**
- Duration: 5-15 minutes
- Frequency: Every 10-20 minutes initially
- Progression: Increases as obstruction worsens
- Child behavior: Drawing knees up, screaming, then suddenly stops

**Late Findings (indicate advanced disease):**
- Continuous pain
- Lethargy or obtundation
- Hypovolemic shock
- Peritonitis (rigidity, guarding)
- Bloody stools (mucosal ischemia)

## Diagnostic Imaging

**Ultrasound Examination:**

*Transverse View - "Target Sign":*
- Hypoechoic rim (edematous bowel wall)
- Echogenic center (mesenteric fat)
- Multiple concentric rings

*Longitudinal View - "Pseudokidney Sign":*
- Hypoechoic mass with echogenic stripes
- Resembles kidney on ultrasound
- Compressed mesentery within

*Doppler Findings:*
- Presence of blood flow: Good prognostic sign
- Absent blood flow: Concern for ischemia

**Diagnostic Criteria:**
- Target lesion with diameter >3 cm
- Length >5 cm
- Absence of peristalsis

**Contrast Enema (Air or Barium):**

*Diagnostic Features:*
- Filling defect at leading edge
- "Coil spring" appearance (barium)
- Meniscus sign (cup-shaped defect)

*Therapeutic Success Criteria:*
- Free flow of contrast into terminal ileum
- Resolution of filling defect
- Patient symptom improvement

**X-ray Findings:**
- Nonspecific early
- "Target sign" (rarely seen)
- Absent gas in cecum/ascending colon
- Small bowel obstruction pattern
- Free air = perforation

**CT Indications:**
- Atypical presentation
- Older children with suspected lead point
- Diagnosis unclear after other studies
- Preoperative planning

## Air Enema Reduction

**Technique:**

*Preparation:*
- IV access (in case of perforation)
- Surgical consultation on standby
- Resuscitation if unstable
- Nasogastric tube if vomiting

*Procedure:*
1. Patient positioned (supine, fluoroscopy)
2. Rectal tube placed
3. Air insufflation with pressure monitoring
4. Typical pressure: 80-120 mm Hg
5. Maximum pressure: 135 mm Hg (most protocols)
6. Continuous fluoroscopic visualization

*Signs of Reduction:*
- Sudden rush of air into small bowel
- Disappearance of mass effect
- Patient relief
- Air visualized throughout small bowel

**Success Rates:**

| Presentation | Success Rate |
|--------------|--------------|
| Early (<24h symptoms) | 90-95% |
| Intermediate (24-48h) | 70-80% |
| Late (>48h) | 40-60% |
| Ileoileal | Lower than ileocolic |

**Contraindications:**

*Absolute:*
- Perforation (free air)
- Peritonitis
- Shock
- Necrotic bowel on imaging

*Relative:*
- Symptoms >48 hours
- Age >3 years (higher likelihood of lead point)
- Recurrent intussusception

**Complications:**
- Perforation: 1-3%
- Aspiration (sedation)
- Recurrence: 5-10%

## Surgical Management

**Indications:**
- Failed enema reduction (2 attempts)
- Perforation
- Peritonitis/sepsis
- Clinical deterioration
- Known pathologic lead point
- Recurrent intussusception

**Intraoperative Assessment:**

*Reduction Attempt:*
- "Milk" the bowel retrograde (distal to proximal)
- Never pull the intussusceptum (risks tearing)
- Apply gentle pressure to the leading edge

*Viability Assessment:*
- Color (pink = viable, purple/black = nonviable)
- Peristalsis
- Mesenteric pulsation
- Temperature of bowel wall
- Doppler ultrasound if uncertain

**Resection Indications:**
- Nonviable bowel
- Perforation
- Gangrenous bowel
- Meckel diverticulum (resect with segment)
- Lead point requiring removal

**Surgical Options:**

*Open Laparotomy:*
- Right lower quadrant incision
- Allows palpation of entire bowel
- May require extension

*Laparoscopy:*
- Smaller incisions
- Faster recovery
- May convert to open if needed
- Useful for reduction and assessment

**Intraoperative Findings:**
- Edematous, congested bowel
- Hemorrhagic fluid in peritoneum (if perforated)
- Lead point identified in 25% of surgical cases

## Post-Reduction Care

**After Successful Enema:**
- Observation: 12-24 hours
- Monitor for recurrence
- Clear liquids advancing to diet
- Discharge when tolerating diet

**After Surgery:**
- NPO until bowel function returns
- Nasogastric tube if needed
- IV fluids
- Pain management
- Advance diet as tolerated

**Follow-up:**
- Most children: No long-term follow-up needed
- Pathologic lead point: Address underlying condition
- Recurrence: Consider surgical evaluation

## Recurrence

**Risk Factors:**
- Age <1 year (higher recurrence risk)
- Family history of intussusception
- Longer duration of symptoms
- Successful enema reduction (higher recurrence than surgery)

**Recurrence Rate:**
- After enema: 5-10%
- After surgery: 2-5%
- Most recurrences within 72 hours
- Rare >2 years after initial episode

**Management of Recurrence:**
- Repeat enema reduction (usually successful)
- Surgical exploration after 2 recurrences
- Look for lead point on surgical exploration`,
      keyTerms: [
        { term: 'Peyer patches', definition: 'Lymphoid tissue aggregates in small intestine; hypertrophy after viral infections can trigger intussusception' },
        { term: 'meniscus sign', definition: 'Cup-shaped filling defect seen on contrast enema at the leading edge of intussusception' },
        { term: 'NPO', definition: 'Nothing by mouth; no eating or drinking' },
      ],
      clinicalNotes: 'In children with bloody stools but no evidence of intussusception on imaging, consider other diagnoses including Meckel diverticulum (technetium scan), volvulus (upper GI series), or infectious colitis (stool studies).',
    },

    4: {
      level: 4,
      summary: 'Advanced management of intussusception requires understanding of pathophysiologic mechanisms, recognition of atypical presentations, appropriate imaging selection, enema reduction technique optimization, surgical decision-making, and management of recurrent disease.',
      explanation: `## Advanced Pathophysiology

**Lymphoid Hyperplasia Model:**

*Developmental Context:*
- Peyer patches peak size at 4-9 months
- Post-viral hypertrophy creates lead point
- Explains age distribution
- Explains seasonal variation (viral peaks)

**Peristaltic Dysfunction:**
- Irregular, forceful contractions
- Abnormal motility at ileocecal valve
- Segmental dysmotility
- Possibly related to abnormal neuronal plexus

**Intussusception Variants:**

| Type | Characteristics | Clinical Significance |
|------|----------------|----------------------|
| Ileocolic | Ileum into cecum/colon | Most common, best enema success |
| Ileoileal | Ileum into ileum | Harder diagnosis, lower enema success |
| Colocolic | Colon into colon | Rare, often pathologic lead point |
| Ileocolic ileoileal | Compound | More complex, often surgical |
| Jejunojejunal | Jejunum into jejunum | Rare, often surgical |
| Retrograde | Distal to proximal | Very rare |

## Atypical Presentations

**Painless Intussusception:**
- Lethargy as sole symptom
- More common in young infants
- "Lethargic infant" diagnosis of exclusion
- High index of suspicion needed

**Chronic Intussusception:**
- Symptoms >14 days
- Rare, typically older children
- Weight loss, intermittent pain
- Usually has pathologic lead point
- Lower enema success rate

**Postoperative Intussusception:**
- Occurs after abdominal surgery
- Typically ileoileal
- Diagnosis difficult (post-op changes)
- High index of suspicion needed

**Intussusception with Pathologic Lead Points:**

*Meckel Diverticulum:*
- Most common pathologic lead point
- Heterotopic gastric mucosa causes ulceration
- Inflammation creates lead point
- Diagnosis: Technetium scan

*Polyps:*
- Juvenile polyps (hamartomatous)
- Peutz-Jeghers syndrome
- Familial adenomatous polyposis
- Usually ileocolic, reducible

*Lymphoma:*
- Non-Hodgkin lymphoma (Burkitt)
- Bowel wall infiltration
- Presents with obstruction
- Requires biopsy

**Red Flags for Pathologic Lead Point:**
- Age >2 years (5-10% have lead point)
- Age >5 years (20-30% have lead point)
- Recurrent intussusception
- Atypical location (not ileocolic)
- Failure of enema reduction
- Chronic symptoms

## Advanced Imaging

**Ultrasound Technique Optimization:**

*Key Views:*
1. Right upper quadrant (most common location)
2. Right flank (ascending colon)
3. Left upper quadrant (transverse colon)
4. Pelvis (rectosigmoid)

*Findings Assessment:*
- Diameter: >3 cm concerning
- Length: >5 cm typical
- Wall thickness: >5 mm suggests ischemia
- Lymph nodes: Enlarged nodes support diagnosis
- Free fluid: Concern for perforation

*Doppler Assessment:*
- Venous flow: Normal early
- Absent flow: Concerning for ischemia
- Arterial flow: Should be present in viable bowel

**CT Indications and Findings:**

*Indications:*
- Atypical presentation
- Older children (>3 years)
- Suspected lead point
- Postoperative patients
- Diagnostic uncertainty

*Findings:*
- Target sign (cross-section)
- Kidney-shaped mass (longitudinal)
- Bowel wall thickening
- Mesenteric fat stranding
- Transition point
- Possible lead point visualization

## Air Enema Optimization

**Pressure Guidelines:**

| Age | Starting Pressure | Maximum Pressure |
|-----|-------------------|------------------|
| <3 months | 80 mm Hg | 100 mm Hg |
| 3-12 months | 80-100 mm Hg | 120 mm Hg |
| >12 months | 100-120 mm Hg | 135 mm Hg |

**Technique Pearls:**
- Start with patient in left lateral decubitus
- Turn supine after initial reduction
- Manual palpation may help
- Keep rectal tube well-lubricated
- Avoid excessive manipulation

**Predictors of Enema Failure:**
- Duration of symptoms >48 hours
- Age >3 years
- Ileoileal location
- Septic appearance
- Leukocytosis >15,000
- Acidosis on blood gas
- Perforation on imaging

**Management of Failed Reduction:**
- Second attempt reasonable (within limits)
- Surgical consultation
- Avoid multiple attempts (>2-3)
- Higher perforation risk with repeated attempts

## Surgical Decision-Making

**Intraoperative Reduction Technique:**

*Principles:*
- Never pull the intussusceptum out
- Apply milking pressure to receiving segment
- Work distal to proximal
- Gentle, sustained pressure
- May require 10-20 minutes of effort

*When to Stop Reduction Attempts:*
- Tearing of serosa
- No progress after reasonable effort
- Perforation imminent
- Bowel clearly nonviable

**Resection Decisions:**

*Indications:*
- Nonviable bowel (dusky, no peristalsis, no Doppler signal)
- Perforation with contamination
- Lead point requiring removal
- Gangrenous bowel
- Compromised mesentery

*Extent of Resection:*
- Resect all nonviable bowel
- Include 5-10 cm margins into healthy bowel
- Mesenteric resection with bowel segment
- Primary anastomosis if stable
- Stoma if unstable or contaminated

**Laparoscopic vs. Open:**

| Factor | Laparoscopic | Open |
|--------|--------------|------|
| Incision | 3-5 small incisions | One large incision |
| Visualization | Limited | Full bowel |
| Recovery | Faster | Slower |
| Conversion rate | 10-20% | N/A |
| Best for | Stable, early disease | Unstable, perforated |

**Special Situations:**

*Lead Point Management:*
- Meckel diverticulum: Resect with bowel segment
- Polyps: Remove via enterotomy
- Lymphoma: Biopsy, oncology referral
- Duplication cyst: Resect completely
- Don't leave an untreated lead point

## Recurrence Management

**Patterns of Recurrence:**
- Most within first 72 hours
- 50% within 2 days
- 75% within 1 week
- Rare >2 years later

**Indications for Surgical Exploration:**
- 2 or more recurrences
- Pathologic lead point suspected
- Recurrence after surgery
- Family history of intestinal polyposis

**During Surgery for Recurrence:**
- Thorough bowel exploration
- Look for lead points
- Consider pexy (fixation) in recurrent cases
- Appendectomy may reduce recurrence

## Long-term Outcomes

**After Successful Enema:**
- No long-term sequelae
- Normal bowel function
- Recurrence risk 5-10%
- No contraindication to future activity

**After Surgery:**
- Small risk of adhesions (5-10%)
- Obstruction risk from adhesions
- Short bowel syndrome only with extensive resection
- Most children: Normal growth and development

**Special Populations:**

*Cystic Fibrosis:*
- Higher incidence of intussusception
- Meconium ileus equivalent
- May require enzyme therapy
- Recurrence more common

*Henoch-Schonlein Purpura:*
- Intussusception is complication
- May be ileoileal
- May be multiple
- Requires HSP treatment`,
      keyTerms: [
        { term: 'lead point', definition: 'Anatomic or pathologic abnormality that initiates intussusception by serving as focal point for bowel invagination' },
        { term: 'technetium scan', definition: 'Nuclear medicine scan using technetium-99m pertechnetate; detects ectopic gastric mucosa in Meckel diverticulum' },
        { term: 'primary anastomosis', definition: 'Surgically connecting two ends of bowel after removing a segment' },
        { term: 'enterotomy', definition: 'Surgical incision into the intestine' },
      ],
      clinicalNotes: 'In children with intussusception and bloody stools but no evidence of peritonitis, air enema reduction is still first-line. Bloody stools alone don\'t indicate perforation - free air on imaging or peritoneal signs are required to diagnose perforation.',
    },

    5: {
      level: 5,
      summary: 'Expert-level intussusception management integrates advanced pathophysiology, precise imaging interpretation, optimized enema techniques, nuanced surgical decision-making, identification and management of pathologic lead points, and comprehensive approaches to recurrent disease.',
      explanation: `## Specialized Pathology

**Rare Lead Points:**

*Benign:*
- Lipoma (may be visible on CT)
- Hemangioma
- Enteric duplication cyst
- Inflammatory polyps
- Fibrovascular polyp

*Malignant:*
- Lymphoma (most common malignant)
- Carcinoid tumor
- Rare: Adenocarcinoma (children with polyposis syndromes)

*Genetic Syndromes:*
- Peutz-Jeghers syndrome (hamartomatous polyps)
- Familial adenomatous polyposis (adenomatous polyps)
- Juvenile polyposis syndrome
- Cronkhite-Canada syndrome

**Intussusception in Special Situations:**

*Cystic Fibrosis:*
- Pathophysiology: Inspissated meconium
- Age: May present later than typical
- Location: Ileocolic most common
- Management: Enzyme therapy, enema reduction
- Higher recurrence rate

*Postoperative:*
- Occurs in 0.08-0.5% after abdominal surgery
- Typically ileoileal
- Diagnosis challenging
- Lower enema success rate
- May require surgical exploration

*Intussusception Abdominal Pain (IAP):*
- Acute abdomen presentation in children with known HSP
- May be multiple
- Small bowel involvement common
- Air enema often unsuccessful
- Surgery often required

## Controversies and Evolving Practice

**Delayed vs. Immediate Enema:**

*Arguments for Immediate:*
- Faster reduction
- Shorter hospital stay
- No clear benefit to delay

*Arguments for Delayed:*
- Allows resuscitation
- Reduces perforation risk
- May improve success rate

*Current Practice:*
- Immediate for stable patients
- Short delay for unstable patients
- Individualize based on clinical judgment

**Maximum Enema Pressure:**

*Traditional:*
- Maximum 120 mm Hg
- Increased pressure increases perforation risk

*Recent Data:*
- Pressures up to 135-140 mm Hg may be safe
- Higher pressure may increase success
- Surgeon presence required for higher pressures

**Second Enema Attempt:**

*Supportive Arguments:*
- Second attempt often successful
- Avoids surgery in some cases
- Low additional risk

*Opposing Arguments:*
- May delay necessary surgery
- Increased perforation risk with multiple attempts
- Cost and radiation exposure

*Consensus:*
- Second attempt reasonable if:
  - First attempt was close to success
  - Patient remains stable
  - No evidence of perforation

**Laparoscopy vs. Laparotomy for Failed Enema:**

*Laparoscopy Benefits:*
- Smaller incisions
- Faster recovery
- Better cosmesis
- Allows full bowel exam

*Laparoscopy Limitations:*
- May not reduce intussusception
- May need to convert to open
- Technical challenge with swollen bowel

**Management of Asymptomatic Lead Points:**

*Incidental Finding:*
- Small polyps found incidentally
- Lipomas, small duplications
- No clear consensus on management

*Approaches:*
- Leave if asymptomatic
- Remove if accessible
- Individualize based on pathology

## International Variations

**Treatment Patterns:**

*United States:*
- Air enema standard
- Early surgical consultation
- Lower threshold for surgery

*Europe:*
- Hydrostatic reduction (water/saline) more common
- Ultrasound-guided reduction
- Similar success rates

*Asia:*
- Air enema preferred
- Lower threshold for surgery
- More frequent pathologic lead points

## Long-term Data

**Recurrence by Age:**

| Age at First Episode | Recurrence Rate |
|---------------------|-----------------|
| <6 months | 12% |
| 6-12 months | 8% |
| 12-24 months | 5% |
| >2 years | 3% |

**Surgical vs. Enema Recurrence:**
- After successful enema: 5-10%
- After surgical reduction: 2-5%
- After resection: <1%

**Adhesion Outcomes:**
- After laparotomy: 5-15% develop symptomatic adhesions
- After laparoscopy: 2-5%
- Time to adhesion-related obstruction: 2-5 years

**Growth and Development:**
- No significant long-term effects
- Normal growth patterns
- No bowel dysfunction after recovery
- No dietary restrictions needed

## Quality Improvement

**Time to Treatment Metrics:**
- Diagnosis to enema: <2 hours (target)
- Emergency department to OR: <4 hours (for surgical cases)
- Length of stay: <24 hours (successful enema)

**Process Improvement:**
- Standardized order sets
- Enema team activation protocol
- Surgical standby requirements
- Documentation templates

## Future Directions

**Ultrasound-Guided Reduction:**
- Uses saline enema under ultrasound
- No radiation exposure
- Similar success rates
- Growing adoption in Europe

**Training Simulation:**
- Simulation training for enema reduction
- Surgical training models
- Team training for rare emergencies

**Biomarker Research:**
- Ischemia biomarkers (intestinal fatty acid binding protein)
- May guide surgical decision-making
- Research stage currently`,
      keyTerms: [
        { term: 'IAP', definition: 'Intussusception abdominal pain; complication of HSP requiring surgical intervention' },
        { term: 'hydrostatic reduction', definition: 'Enema reduction using fluid (water/saline) instead of air; guided by ultrasound or fluoroscopy' },
        { term: 'iFABP', definition: 'Intestinal fatty acid binding protein; biomarker for intestinal ischemia' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **Age >2 years:** Always consider pathologic lead point. Pre-enema CT or intraoperative exploration for polyps, Meckel diverticulum, or lymphoma.

2. **Failed First Enema:** Second attempt reasonable if first attempt showed progress and patient remains stable. Don't persist beyond 2-3 attempts.

3. **Ileoileal Intussusception:** Harder to diagnose on enema. May only see filling defects in small bowel. Ultrasound diagnosis more reliable.

4. **Postoperative Intussusception:** Maintain high index of suspicion after abdominal surgery. Presentation may be atypical (pain out of proportion to exam).

5. **Reduction Technique:** Always "milk" the bowel retrograde, never pull the intussusceptum. Pulling risks perforation and tearing of mesentery.

6. **Recurrent Intussusception:** Surgical exploration after 2 recurrences to evaluate for lead point. Consider bowel pexy in selected cases.`,
    },
  },

  media: [
    {
      id: 'intussusception-mechanism',
      type: 'diagram',
      filename: 'intussusception-mechanism.svg',
      title: 'Intussusception Mechanism',
      description: 'Diagram showing telescoping of bowel segments',
    },
    {
      id: 'target-sign-ultrasound',
      type: 'diagram',
      filename: 'target-sign-ultrasound.svg',
      title: 'Target Sign on Ultrasound',
      description: 'Characteristic ultrasound finding in intussusception',
    },
  ],

  citations: [
    {
      id: 'intussusception-guidelines-2020',
      type: 'article',
      title: 'Management of Intussusception in Children: A Systematic Review',
      authors: ['Klein, E.J.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2020-0876',
      accessedDate: '2026-01-26',
    },
    {
      id: 'air-vs-barium-enema',
      type: 'article',
      title: 'Air versus Barium Enema for Intussusception Reduction: A Meta-analysis',
      authors: ['Hirose, S.', 'et al.'],
      source: 'Journal of Pediatric Surgery',
      url: 'https://doi.org/10.1016/j.jpedsurg.2020.03.010',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-gastrointestinal', targetType: 'system', relationship: 'related', label: 'Gastrointestinal System' },
    { targetId: 'condition-henoch-schonlein', targetType: 'condition', relationship: 'related', label: 'HSP with GI involvement' },
    { targetId: 'condition-meckel-diverticulum', targetType: 'condition', relationship: 'related', label: 'Meckel Diverticulum' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['pediatrics', 'surgical emergency', 'intestinal obstruction'],
    keywords: ['intussusception', 'bowel obstruction', 'telescoping bowel', 'air enema', 'currant jelly stools', 'abdominal emergency'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'surgery'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default intussusception;
