/**
 * Pediatric Appendicitis - Pediatric Condition
 *
 * Comprehensive content on appendicitis in children including diagnosis,
* antibiotics vs surgery decision-making, and complications.
 */

import { EducationalContent } from '../../types';

export const appendicitis: EducationalContent = {
  id: 'condition-pediatric-appendicitis',
  type: 'condition',
  name: 'Pediatric Appendicitis',
  alternateNames: ['Appendicitis', 'Acute Appendicitis', 'Ruptured Appendix'],

  levels: {
    1: {
      level: 1,
      summary: 'Appendicitis is when the appendix gets infected and swollen. It causes belly pain, usually on the lower right side. It needs quick medical care to prevent it from bursting.',
      explanation: `## What is Appendicitis?

Appendicitis is an infection and swelling of the appendix, a small finger-shaped pouch attached to the large intestine. When it gets blocked and infected, it can cause serious problems.

**Who Gets It:**
- Can happen at any age
- Most common in school-age children (10-12 years)
- Rare in babies and toddlers
- Affects about 1 in 15 people at some point

## Warning Signs and Symptoms

**The most common signs:**

1. **Belly Pain**
   - Usually starts around the belly button
   - Moves to lower right side after several hours
   - Gets worse with movement, coughing, or jumping
   - Hurts more than you would expect

2. **Not Wanting to Eat**
   - Loss of appetite
   - Nausea and vomiting
   - "I don't want to eat anything"

3. **Fever**
   - Usually low-grade (100-101°F)
   - Can be higher if the appendix bursts

4. **Other Signs:**
   - Child wants to lie very still
   - Walks bent over
   - Complains of pain when going over bumps in the car
   - Pain in the right lower belly

**In Young Children (Under 5):**
- May not be able to say where it hurts
- Might just seem sick or fussy
- May vomit or have diarrhea
- May refuse to walk

## Why Quick Treatment Matters

The appendix can burst (rupture) if not treated:
- Usually happens 24-48 hours after symptoms start
- Causes infection to spread through the belly
- Makes treatment much more complicated
- Takes longer to recover

## How Doctors Diagnose It

Doctors check for appendicitis by:
1. **Exam** - Pressing on the belly
2. **Blood tests** - Looking for signs of infection
3. **Urine test** - To check for urinary tract infection
4. **Ultrasound** - Pictures of the belly (no radiation)
5. **CT scan** - Sometimes needed for older children

## Treatment

**Surgery (Appendectomy):**
- Most common treatment
- Removal of the appendix through small cuts
- Usually done with laparosscopy (small cuts, camera)
- Child goes home 1-2 days later
- Full recovery in 1-2 weeks

**Antibiotics Only (for some cases):**
- May be an option for uncomplicated appendicitis
- Close monitoring needed
- Surgery if not improving

**If the Appendix Bursts:**
- Surgery still needed
- Stronger antibiotics
- May need longer hospital stay
- May need a tube to drain infection

## Recovery

**After Surgery:**
- Some pain for a few days
- Limit activity for 1-2 weeks
- No heavy lifting or sports for a few weeks
- Keep incision clean and dry
- Follow-up visit with surgeon

**What to Watch For After Going Home:**
- Fever over 101°F
- Increasing belly pain
- Redness, swelling, or drainage from incision
- Vomiting
- Not able to pass gas or have a bowel movement

## When to Call the Doctor

Call the doctor right away if your child has:
- Severe belly pain that doesn't go away
- Pain that moves to the lower right side
- Pain that's worse with movement
- Fever along with belly pain
- Vomiting that won't stop

**Important:** Quick diagnosis and treatment leads to the best outcomes!`,
      keyTerms: [
        { term: 'appendicitis', definition: 'Infection and inflammation of the appendix', pronunciation: 'uh-pen-dih-SIGH-tis' },
        { term: 'appendix', definition: 'A small finger-shaped pouch attached to the large intestine', pronunciation: 'uh-PEN-diks' },
        { term: 'rupture', definition: 'When the appendix bursts open, spreading infection' },
        { term: 'laparoscopy', definition: 'Surgery using small cuts and a camera', pronunciation: 'lap-uh-ROSS-koh-pee' },
        { term: 'incision', definition: 'A surgical cut in the skin' },
      ],
      analogies: [
        'The appendix is like a small dead-end alley attached to the main road (intestine) - when blocked, trash backs up and causes problems.',
        'Appendicitis pain is like a traffic jam that starts in one spot and then moves to another location.',
        'Laparoscopic surgery is like working with long tools through a keyhole instead of opening a big door.',
      ],
      examples: [
        'An 8-year-old has pain around her belly button that moved to her right lower side after 6 hours. She doesn\'t want to eat and feels like throwing up.',
        'A teenager needs emergency surgery because his appendix burst, spreading infection through his belly.',
        'A child recovers at home after laparoscopic appendectomy, feeling much better after a week.',
      ],
      patientCounselingPoints: [
        'Don\'t let children eat or drink if appendicitis is suspected - surgery may be needed',
        'Report any fever, increasing pain, or redness around the incision after surgery',
        'Follow activity restrictions - no sports or heavy lifting for 2-4 weeks',
        'Complete all antibiotics if prescribed after surgery',
      ],
    },

    2: {
      level: 2,
      summary: 'Appendicitis is the most common surgical emergency in children. It presents with periumbilical pain migrating to RLQ, anorexia, nausea/vomiting, and fever. Diagnosis is clinical with imaging support. Treatment is appendectomy; antibiotics alone may be considered for uncomplicated cases.',
      explanation: `## What is Appendicitis?

Appendicitis is inflammation of the vermiform appendix, a lymphoid tissue structure attached to the cecum. It is the most common cause of emergency abdominal surgery in children.

**Epidemiology:**
- Lifetime risk: 7-9%
- Peak incidence: 10-12 years
- Male to female ratio: Equal in childhood, slight male predominance
- Seasonal variation: Slightly more common in fall/winter

**Pathophysiology:**

1. **Obstruction:** Fecalith, lymphoid hyperplasia, or other blockage
2. **Distension:** Continued mucus secretion increases pressure
3. **Ischemia:** Pressure exceeds venous and arterial capillary pressure
4. **Inflammation:** Bacterial overgrowth and inflammatory response
5. **Perforation:** If untreated, wall necrosis and rupture (24-48 hours)

## Clinical Presentation

**Classic History (Present in <50% of children):**

| Symptom | Frequency | Characteristics |
|---------|-----------|-----------------|
| Abdominal pain | 95% | Periumbilical → RLQ migration |
| Anorexia | 80% | Significant loss of appetite |
| Nausea/vomiting | 70% | Usually AFTER pain starts |
| Fever | 60% | Low-grade (100-101°F) |

**Pain Characteristics:**
- Starts periumbilical (visceral pain)
- Migrates to RLQ (somatic pain) over 6-12 hours
- Worse with movement, coughing, jarring
- Child prefers to lie still

**Age-Specific Presentations:**

*Younger Children (<5 years):*
- Less specific presentation
- May not localize pain well
- Diarrhea more common (30%)
- Higher perforation rate (40-60%)
- Often diagnosed later

*Adolescents:*
- More classic presentation
- Gynecologic considerations in females
- May mimic other conditions

**Physical Examination:**

| Sign | Description |
|------|-------------|
| RLQ tenderness | Maximal tenderness at McBurney point |
| Rebound tenderness | Pain when pressure released |
| Guarding | Voluntary or involuntary muscle protection |
| Psoas sign | Pain on right thigh extension |
| Obturator sign | Pain on right hip rotation |
| Rovsing sign | RLQ pain with LLQ palpation |

## Diagnostic Approach

**Laboratory Studies:**

*Complete Blood Count:*
- Leukocytosis: WBC >10,000 (80%)
- Left shift: Neutrophilia with bands
- Normal WBC does NOT rule out appendicitis

*Inflammatory Markers:*
- CRP: Elevated in 70-85%
- ESR: Less useful in acute setting

*Urinalysis:*
- May show pyuria/hematuria (ureteral irritation)
- Normal urinalysis helps rule out UTI

**Imaging:**

*Ultrasound (First-line for children):*
- No radiation
- Sensitivity: 85-95%
- Specificity: 90-98%
- Findings:
  - Diameter >6 mm
  - Noncompressible
  - Appendicolith
  - Increased flow on Doppler

*CT Scan (Older children, equivocal cases):*
- Higher sensitivity and specificity
- Radiation exposure concern
- Findings:
  - Dilated appendix (>6 mm)
  - Wall thickening
  - Periappendiceal fat stranding
  - Appendicolith

## Differential Diagnosis

**Common Mimics:**
- Mesenteric adenitis (often after URI)
- Gastroenteritis
- Urinary tract infection
- Constipation
- Ovarian pathology (cyst, torsion)
- Testicular torsion (pain may radiate)

## Treatment

**Surgical Appendectomy (Standard of Care):**

*Laparoscopic (Preferred):*
- 3 small incisions
- Camera-guided removal
- Faster recovery
- Less pain
- Lower wound infection rate

*Open Appendectomy:*
- Single larger incision
- May be needed for ruptured cases
- Faster in unstable patients

**Antibiotic Therapy:**

*Uncomplicated Appendicitis:*
- Single preoperative dose
- Postoperative course optional
- Cefoxitin or ceftriaxone + metronidazole

*Complicated (Ruptured) Appendicitis:*
- Preoperative antibiotics
- Postoperative course 5-10 days
- Broader coverage

**Antibiotics-Only Approach:**
- Select cases (uncomplicated, reliable family)
- Success rate: 70-90%
- 15-30% recurrence within 1 year
- Requires close monitoring
- Not yet standard of care

## Complications

**Perforation:**
- Rate: 20-30% overall
- Higher in younger children
- Treatment: Surgery + antibiotics
- May need drain placement

**Abscess Formation:**
- Presents days to weeks after perforation
- Periappendiceal or pelvic abscess
- Treatment: Drainage + antibiotics
- May delay appendectomy

**Wound Infection:**
- More common with open surgery
- More common with perforation
- Treatment: Wound care, antibiotics

**Postoperative Ileus:**
- Bowel stops moving temporarily
- Resolves with time
- NPO until flatus returns

## Prognosis

**Mortality:**
- <0.1% in developed countries
- Higher with perforation and delayed treatment

**Recovery:**
- Uncomplicated: 1-2 weeks
- Complicated: 2-4 weeks
- Return to school: 1 week (uncomplicated)`,
      keyTerms: [
        { term: 'McBurney point', definition: 'Point in right lower quadrant, one-third distance from hip bone to navel; site of maximal tenderness in appendicitis' },
        { term: 'appendicolith', definition: 'Hard, stone-like mass in the appendix; visible on imaging', pronunciation: 'uh-PEN-dih-koh-lith' },
        { term: 'rebound tenderness', definition: 'Pain when pressure is suddenly released from the abdomen' },
        { term: 'mesenteric adenitis', definition: 'Swelling of lymph nodes in the abdomen; can mimic appendicitis' },
        { term: 'periappendiceal', definition: 'Around the appendix', pronunciation: 'pair-ee-uh-PEN-dih-SEE-kal' },
      ],
      analogies: [
        'The appendix is like a small dead-end road off the main highway - when blocked, traffic backs up and problems occur.',
        'Pain migration is like the pain moving from a general location to a specific address.',
      ],
      clinicalNotes: 'In children under 5 with abdominal pain, maintain high index of suspicion for appendicitis. Presentation is often atypical, and perforation rates are higher. Early imaging (ultrasound) is recommended.',
    },

    3: {
      level: 3,
      summary: 'Appendicitis in children presents diagnostic challenges due to variable presentation. History, physical exam, and imaging (ultrasound first-line) guide diagnosis. Prompt appendectomy remains standard treatment; antibiotics-only protocols show promise but require careful patient selection.',
      explanation: `## Pathophysiology

**Obstruction Etiologies:**

| Cause | Frequency | Mechanism |
|-------|-----------|-----------|
| Lymphoid hyperplasia | 40-60% | Post-viral hyperplasia |
| Fecalith | 20-40% | Hard stool concretion |
| Parasites | Rare | Pinworms, Ascaris |
| Foreign body | Rare | Ingested objects |
| Tumor | Very rare | Carcinoid, lymphoma |

**Sequence of Events:**

1. Lumen obstruction
2. Continued mucus secretion
3. Intraluminal pressure increases (30-60 mm Hg)
4. Venous and lymphatic obstruction
5. Mucosal ischemia and ulceration
6. Bacterial translocation
7. Inflammatory cascade
8. Wall necrosis and perforation

**Perforation Risk Factors:**
- Delayed presentation (>48 hours)
- Younger age (<5 years)
- Fecalith on imaging
- Leukocytosis >15,000
- Low socioeconomic status (delayed access)

## Clinical Decision-Making

**Diagnostic Algorithms:**

*Pediatric Appendicitis Score (PAS):*

| Finding | Points |
|---------|--------|
| Migration of pain | 1 |
| Anorexia | 1 |
| Nausea/vomiting | 1 |
| RLQ tenderness | 2 |
| Rebound tenderness | 1 |
| Elevated temperature | 1 |
| Leukocytosis | 1 |
- Score ≤4: Low risk (rule out)
- Score 5-7: Moderate risk (imaging)
- Score ≥8: High risk (surgery)

*Alvarado Score Modified for Pediatrics:*
- Similar elements
- Helps guide imaging decisions

## Imaging Strategy

**Age-Based Approach:**

| Age | First-line | Second-line |
|-----|------------|-------------|
| 0-5 years | Ultrasound | CT if equivocal |
| 6-12 years | Ultrasound | CT if equivocal |
| 13-18 years | Ultrasound | CT if equivocal |

**Ultrasound Diagnostic Criteria:**

*Primary Findings:*
- Appendix diameter >6 mm
- Noncompressible
- Blind-ending tubular structure
- Target sign (cross-section)

*Secondary Findings:*
- Appendicolith (hyperechoic with shadowing)
- Periappendiceal fluid
- Increased Doppler flow
- Surrounding fat echogenicity

*Limitations:*
- Operator-dependent
- Limited by bowel gas
- Retrocecal appendix hard to visualize
- Obese patients: More difficult

**CT Scan Indications:**
- Equivocal ultrasound
- Atypical presentation
- High clinical suspicion despite negative ultrasound
- Older children/adolescents
- Complex presentation

**MRI:**
- Radiation-free alternative to CT
- Limited availability
- Longer acquisition time
- May be useful in pregnancy

## Treatment Options

**Surgical Appendectomy (Standard):**

*Laparoscopic Technique:*
- 3-port technique (umbilical, LLQ, suprapubic)
- CO2 insufflation (8-12 mm Hg)
- Endoloop or stapler for mesoappendix
- Specimen extraction through umbilical port
- Irrigation if perforated

*Open Technique:*
- Right lower quadrant incision
- Muscle-splitting (McBurney) or vertical
- May be preferred for:
  - Hemodynamic instability
  - Extensive perforation
  - Lack of laparoscopic expertise

**Antibiotic-First Approach (Emerging):**

*Evidence:*
- Success rates: 70-90%
- Recurrence: 15-30% at 1 year
- Lower complication rate initially
- Shorter recovery time initially
- Quality of life similar

*Protocol:*
- IV antibiotics: Ceftriaxone + metronidazole OR ertapenem
- Observation: 24-48 hours
- Discharge when afebrile, tolerating diet
- Oral antibiotics: 7-10 days

*Patient Selection:*
- Uncomplicated appendicitis
- No appendicolith
- Reliable family
- Close follow-up available
- No peritonitis

*Contraindications:*
- Perforation
- Appendicolith on imaging
- Peritonitis
- Abscess
- Comorbidities

**Postoperative Antibiotics:**

| Scenario | Recommendation |
|----------|----------------|
| Uncomplicated | Single preoperative dose only |
| Early perforation | 3-5 days |
| Gangrenous | 5-7 days |
| Abscess | Until drain removed + antibiotics |

## Complications

**Surgical Site Infection:**
- Superficial: 2-5%
- Deep: 1-2%
- Risk factors: Perforation, obesity, diabetes

**Intraabdominal Abscess:**
- Rate: 2-5% after perforation
- Location: Pelvis, subphrenic
- Treatment: Percutaneous drainage + antibiotics
- May delay interval appendectomy

**Ileus/Bowel Obstruction:**
- Postoperative ileus: Expected
- Small bowel obstruction: 1-2% long-term
- Adhesions causative

**Stump Leak:**
- Rare (<1%)
- More common with laparoscopic
- May require reoperation

**Urinary Retention:**
- Postoperative: 5-10%
- More common with spinal anesthesia
- Usually self-limited

## Controversies

**Incisional Drainage:**
- Not routinely recommended
- Consider for gross contamination
- Increases hospital stay

**Interval Appendectomy:**
- After perforation with abscess:
  - Drain abscess
  - Treat with antibiotics
  - Interval appendectomy in 6-12 weeks
- Not always necessary (some never develop appendicitis)

**Negative Appendectomy:**
- Rate: 5-15%
- Higher in females (gynecologic pathology)
- CT has reduced negative appendectomy rate
- Balance: Missing appendicitis vs. unnecessary surgery

## Special Populations

**Pregnant Adolescents:**
- Delayed diagnosis common (uterus displaces appendix)
- MRI preferred over CT
- Laparoscopy safe in all trimesters
- Fetal monitoring recommended

**Cystic Fibrosis:**
- Appendicitis symptoms may be attributed to CF
- Higher diagnostic imaging required
- Higher complication rate
- More likely to present with abscess

**Immunocompromised:**
- May not mount significant fever or WBC response
- Higher perforation rate
- Lower threshold for imaging`,
      keyTerms: [
        { term: 'PAS', definition: 'Pediatric Appendicitis Score; clinical decision tool to assess appendicitis risk' },
        { term: 'target sign', definition: 'Ultrasound appearance of appendix in cross-section - concentric rings like a bullseye' },
        { term: 'blind-ending', definition: 'Structure that ends abruptly without connection to another structure; appendix is blind-ending tubular structure' },
      ],
      clinicalNotes: 'Children with sickle cell disease may present with right lower quadrant pain from vaso-occlusive crisis mimicking appendicitis. Ultrasound may be helpful but clinical judgment essential.',
    },

    4: {
      level: 4,
      summary: 'Advanced appendicitis management integrates risk-scoring systems, optimized imaging pathways, nuanced surgical decision-making, evidence-based antibiotic protocols, and individualized approaches to complicated disease including interval appendectomy strategies.',
      explanation: `## Advanced Diagnostic Strategies

**Risk Stratification Tools:**

*Pediatric Appendicitis Risk Calculator (pARC):*
- Age, sex, fever, WBC, neutrophil %, pain characteristics
- Provides probability score
- Guides imaging decisions
- Validated in multiple centers

*Appendicitis Inflammatory Response (AIR) Score:*
- Originally developed for adults
- Modified for pediatric use
- Incorporates CRP
- More accurate than PAS in some studies

**Imaging Pathway Optimization:**

*Ultrasound First Protocol:*
- Reduces CT utilization by 50% or more
- Maintains diagnostic accuracy
- Cost-effective
- Requires training and commitment

*CT Reduction Strategies:*
- Shared decision-making
- Serial ultrasound (repeat if equivocal)
- MRI as second-line (no radiation)
- Surgeon-performed ultrasound

**Diagnostic Dilemmas:**

*Normal Appendix on Imaging:*
- Can visualize normal appendix (up to 30%)
- Diameter <6 mm
- Compressible
- Pericecal fat normal
- Clinical judgment still required

*Borderline Appendix (5-7 mm):*
- Gray zone
- Incorporate other findings
- Wall thickening (>2 mm)
- Periappendiceal fat stranding
- Clinical correlation essential

## Surgical Considerations

**Laparoscopic Appendectomy Technical Pearls:**

*Port Placement:*
- Umbilical (camera): 10 mm or 5 mm
- Suprapubic: 5 mm (grasper)
- Left lower quadrant: 5 mm (grasper)
- Optional: 4th port for retraction

*Tips for Difficult Cases:*
- Retrocecal appendix: Patient in Trendelenburg, left lateral tilt
- Inflamed mesentery: Gentle dissection, avoid tearing
- Fecalith: Gentle manipulation to avoid spillage
- Gangrenous appendix: Use endoscopic bag

*Conversion to Open:*
- Indications: Inability to identify appendix, bleeding, injury
- Rate: <5% in experienced hands

**Single-Incision Laparoscopic Surgery:**
- Single umbilical incision
- Cosmetic advantage
- Longer operative time
- Similar complication rate
- Limited adoption

**Perforation Management:**

*Contamination Control:*
- Copious irrigation (controversial)
- Suction rather than irrigation (some protocols)
- Avoid excessive peritoneal manipulation
- Drain placement controversial

*Antibiotic Duration:*
- uncomplicated: Single dose
- Early perforation: 3-5 days
- Diffuse peritonitis: 5-7 days
- Duration based on clinical improvement

## Antibiotic-First Treatment

**Evidence Synthesis:**

*Meta-analysis Data:*
- Nonoperative success: 73% (95% CI 67-78%)
- Appendicitis recurrence: 20% (95% CI 14-28%)
- Complications: Lower than surgery initially
- Hospital stay: Shorter initially
- Quality of life: Similar at 1 year

*Selection Criteria:*
- Duration <5 days
- No appendicolith
- No abscess or phlegmon
- WBC <15,000
- Reliable social support

*Protocol:*
\`\`\`Day 0: IV ceftriaxone + metronidazole OR ertapenem
Days 1-2: IV antibiotics, observation
Discharge: Afebrile 24h, tolerating diet, pain controlled
Days 3-10: Oral antibiotics (levofloxacin + metronidazole OR amoxicillin-clavulanate)
\`\`\`

**Predictors of Nonoperative Failure:**
- Appendicolith on imaging
- WBC >15,000
- Fever >38.5°C
- Periumbilical pain
- Longer symptom duration

## Complicated Appendicitis Management

**Abscess Formation:**

*Presentation:*
- Days to weeks after perforation
- Palpable mass or systemic symptoms
- CT diagnosis

*Initial Management:*
- CT-guided percutaneous drainage
- IV antibiotics
- Observation

*Interval Appendectomy:*
- Timing: 6-12 weeks after resolution
- Controversy: Some advocate observation only
- Recurrence risk: 15-30% without interval appendectomy

*Preoperative Preparation:*
- Mechanical bowel prep (some surgeons)
- Prophylactic antibiotics
- counseling about risk of colostomy

**Phlegmon:**
- Inflamed, matted bowel without abscess
- Antibiotic treatment
- Some proceed to interval appendectomy
- Others: Observation if resolved

## Postoperative Care Optimization

**Enhanced Recovery After Surgery (ERAS):**

*Preoperative:*
- No prolonged fasting
- Carbohydrate loading
- No routine NG tube
- Single-dose antibiotics

*Intraoperative:*
- Multimodal analgesia
- Minimize opioids
- Maintain normothermia
- PONV prophylaxis

*Postoperative:*
- Early feeding (within 4 hours)
- Early ambulation
- Gum chewing (reduces ileus)
- NSAIDs for pain

**Discharge Criteria:**

*Uncomplicated:*
- Tolerating diet
- Pain controlled with oral meds
- Afebrile
- Urinating spontaneously

*Complicated:*
- All of above PLUS
- Antibiotic plan established
- Drain management teaching
- Follow-up arranged

## Long-term Outcomes

**Negative Appendectomy:**
- Rate: 5-15%
- Female: Higher (gynecologic pathology)
- No long-term consequences
- Lower than missing appendicitis

**Postoperative Adhesions:**
- Small bowel obstruction: 1-2% at 10 years
- Higher after open vs. laparoscopic
- Higher after perforation

**Fertility Concerns:**
- No significant impact on fertility
- Perforation may increase tubal adhesion risk (controversial)
- Laparoscopy may reduce adhesions

**Quality of Life:**
- Return to normal activities: 1-2 weeks
- Return to sports: 2-4 weeks
- No dietary restrictions
- No long-term medications needed`,
      keyTerms: [
        { term: 'pARC', definition: 'Pediatric Appendicitis Risk Calculator; validated tool for estimating appendicitis probability' },
        { term: 'AIR score', definition: 'Appendicitis Inflammatory Response score; incorporates CRP for risk stratification' },
        { term: 'phlegmon', definition: 'Solid inflammatory mass without pus collection; seen in perforated appendicitis', pronunciation: 'FLEG-mon' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; protocolized approach to optimize surgical recovery' },
      ],
      clinicalNotes: 'Children with appendiceal fecaliths have higher failure rates with antibiotic-only treatment. Laparoscopic appendectomy after antibiotics may be more difficult due to inflammation. Consider definitive surgery upfront if fecalith present.',
    },

    5: {
      level: 5,
      summary: 'Expert-level appendicitis management integrates precision diagnostic tools, individualized imaging pathways, nuanced decision-making between surgery and antibiotics, optimized surgical techniques, and evidence-based management of complicated disease including interval appendectomy strategies.',
      explanation: `## Advanced Pathophysiology

**Microbiome Implications:**

*Appendiceal Biofilm:*
- Biofilm formation in obstructed appendix
- May contribute to pathogenesis
- Implications for antibiotic penetration

*Post-Appendectomy Microbiome:*
- Altered gut microbiota after appendectomy
- Possible protective effect against ulcerative colitis
- Mechanism unclear (immune modulation?)

**Genetic Susceptibility:**
- Family history increases risk
- HLA associations identified
- Polymorphisms in inflammatory genes
- NOT yet clinically actionable

## Precision Diagnostic Approaches

**Machine Learning Applications:**

*Prediction Models:*
- Integrate clinical, lab, imaging data
- Outperform traditional scores in some studies
- Real-time decision support
- Validation required before widespread use

*Image Analysis:*
- AI-assisted ultrasound interpretation
- Standardized measurements
- Reduced operator dependence

**Biomarker Development:**

*Novel Biomarkers:*
- Procalcitonin: Higher specificity than CRP
- S100A8/A9: Early inflammation marker
- Urinary 5-HIAA: Elevated in appendicitis
- Panel approaches combining multiple markers

*Clinical Utility:*
- Not yet standard of care
- May reduce imaging need
- May distinguish perforation

## Controversies in Management

**Antibiotics-First: Long-term Data:**

*Five-Year Outcomes:*
- Recurrence rate plateaus after 1-2 years
- Overall success: ~60-65% at 5 years
- Quality of life: Similar to surgery
- Cost: Lower overall (fewer surgeries)

*Shared Decision-Making:*
- Discuss success rates honestly
- Address recurrence risk
- Consider patient values
- Family logistics

**Drainage of Perforated Appendicitis:**

*Arguments For:*
- May reduce abscess formation
- Removes contaminated fluid
- Allows monitoring for bleeding

*Arguments Against:*
- Increases hospital stay
- No clear benefit in most studies
- May increase infection risk
- Patient discomfort

*Current Consensus:*
- Selective use
- Most perforations: No drain needed
- Abscess: Drain
- Diffuse purulence: Individualize

**Interval Appendectomy:**

*Routine vs. Selective:*
- Historically: Routine interval appendectomy
- Emerging: Observation may be sufficient
- Recurrence without interval appy: 10-20%
- Benefits: Avoids surgery in 80-90%
- Risks: Recurrence, confusion with future pain

*Shared Decision-Making:*
- Discuss recurrence risk
- Discuss operative risks (higher in interval setting)
- Consider patient age and preferences
- Consider imaging findings

## Special Situations

**Appendiceal Carcinoid:**
- Found in 0.5% of appendectomies
- Most: Incidental, small (<1 cm)
- Treatment: Appendectomy sufficient for <1 cm
- Consider formal right hemicolectomy for >2 cm

**Appendiceal Mucocele:**
- Mucinous distension of appendix
- May be benign or malignant
- Preoperative diagnosis rare
- Intraoperative: Avoid rupture
- Treatment: Formal oncologic resection if malignant

**Crohn Disease Mimic:**
- Terminal ileitis mimics appendicitis
- May be discovered intraoperatively
- Laparoscopic appy reasonable
- Avoid ileocecal resection acutely
- Biopsies for diagnosis
- Medical treatment for Crohn

**Appendicitis in Ventriculoperitoneal Shunt:**
- Peritoneal catheter near appendix
- Preoperative antibiotics
- Laparoscopic approach preferred
- Consider shunt externalization if peritonitis

**Pregnancy-Associated Appendicitis:**
- Diagnostic challenge: Uterus displaces appendix
- MRI preferred for imaging
- Laparoscopy safe in all trimesters
- Preterm labor risk: 5-10%
- Fetal mortality: <2% with prompt treatment
- Obstetric consultation recommended

## Global Health Perspectives

**Resource-Limited Settings:**
- Diagnosis: Clinical (limited imaging)
- Treatment: Open appendectomy
- Higher perforation rates (delayed presentation)
- Higher mortality
- Training programs improving outcomes

**Cost-Effectiveness:**
- Ultrasound first: Cost-effective
- Selective CT: Cost-effective
- Antibiotics first: May be cost-effective in selected patients
- Laparoscopic vs. open: Similar long-term costs

## Future Directions

**Non-invasive Treatment:**
- Enhanced antibiotic protocols
- Biofilm-disrupting agents
- Endoscopic appendix decompression (experimental)

**Prevention:**
- Dietary fiber: Possible protective effect
- Probiotics: Theoretical benefit
- No proven prevention strategies

**Quality Improvement:**
- Time-to-operative benchmarks
- Negative appendectomy rate monitoring
- CT reduction protocols
- Standardized order sets
- Multidisciplinary pathways

**Surgical Innovation:**
- Natural orifice surgery (transgastric)
- Single-incision advances
- Robotic assistance (limited pediatric use)
- Fluorescence imaging for perfusion assessment

## Long-term Outcomes Data

**Reproductive Outcomes:**
- No significant impact on fertility
- Possible slight increase in ectopic pregnancy (controversial)
- No impact on subsequent pregnancies

**Disease-Specific Survival:**
- Appendicitis mortality: <0.1% in developed countries
- Higher mortality with perforation
- Higher mortality in very young children
- Higher mortality in resource-limited settings

**Economic Impact:**
- Direct costs: Hospitalization, surgery
- Indirect costs: Parental time off work
- School days missed
- Antibiotic-first: Lower direct costs initially

**Psychological Impact:**
- Surgical anxiety common
- Post-traumatic stress in severe cases
- Preoperative preparation helpful
- Child life specialists valuable`,
      keyTerms: [
        { term: 'biofilm', definition: 'Complex community of microorganisms attached to surface; contributes to antibiotic resistance in appendicitis' },
        { term: '5-HIAA', definition: '5-hydroxyindoleacetic acid; breakdown product of serotonin; elevated in urine with appendicitis' },
        { term: 'mucocele', definition: 'Mucinous distension of appendix; may be benign or malignant condition', pronunciation: 'myoo-koh-seel' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **Fecalith:** Appendiceal fecalith predicts higher failure with antibiotics-only. Recommend definitive appendectomy for these patients.

2. **Pregnancy:** MRI is imaging modality of choice. Laparoscopy safe but requires obstetric monitoring. Consider tocolytics for uterine irritability.

3. **Interval Appendectomy:** Not mandatory after perforated appendicitis with abscess. Shared decision-making; 80-90% remain asymptomatic without interval surgery.

4. **Drain Controversy:** Most perforated appendicitis cases do NOT benefit from drain placement. Reserve for abscess drainage or inaccessible purulence.

5. **Negative Appendectomy:** Rate of 5-15% is acceptable. Missing appendicitis has higher morbidity than negative appendectomy.

6. **Antibiotic Duration:** Uncomplicated appendicitis: Single preoperative dose sufficient. Complicated: Base duration on clinical response, not fixed duration.`,
    },
  },

  media: [
    {
      id: 'appendicitis-anatomy',
      type: 'diagram',
      filename: 'appendicitis-anatomy.svg',
      title: 'Appendicitis Anatomy',
      description: 'Location of appendix and common pain pattern',
    },
    {
      id: 'mcburney-point',
      type: 'diagram',
      filename: 'mcburney-point.svg',
      title: 'McBurney Point',
      description: 'Location of maximal tenderness in appendicitis',
    },
  ],

  citations: [
    {
      id: 'apa-appendicitis-guidelines-2020',
      type: 'article',
      title: 'Appendicitis Guidelines: Clinical Practice Guidelines by the Pediatric Appendicitis Score Study Group',
      authors: ['Kharbanda, A.B.', 'et al.'],
      source: 'Journal of the American College of Surgeons',
      url: 'https://doi.org/10.1016/j.jamcollsurg.2020.05.011',
      accessedDate: '2026-01-26',
    },
    {
      id: 'antibiotics-first-meta-analysis-2020',
      type: 'article',
      title: 'Antibiotics First for Acute Appendicitis: A Systematic Review and Meta-analysis',
      authors: ['Minott, J.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2020-0876',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-gastrointestinal', targetType: 'system', relationship: 'related', label: 'Gastrointestinal System' },
    { targetId: 'condition-intussusception', targetType: 'condition', relationship: 'sibling', label: 'Intussusception' },
    { targetId: 'condition-ovarian-cyst', targetType: 'condition', relationship: 'see-also', label: 'Ovarian Pathology (adolescent females)' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['pediatrics', 'surgical emergency', 'abdominal pain'],
    keywords: ['appendicitis', 'appendectomy', 'right lower quadrant pain', 'McBurney point', 'perforated appendix', 'laparoscopic surgery'],
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

export default appendicitis;
