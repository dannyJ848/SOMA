/**
 * Appendectomy
 *
 * Surgical removal of the appendix, typically for acute appendicitis.
 */

import { EducationalContent } from '../../types';

export const appendectomyContent: EducationalContent = {
  id: 'surgical-appendectomy',
  type: 'topic',
  name: 'Appendectomy',
  alternateNames: ['Appendix Removal', 'Appendicitis Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Appendectomy is surgery to remove the appendix, usually when it becomes infected and swollen (appendicitis). This is a common emergency surgery.',
      explanation: `## What Is the Appendix?

The appendix is a small, finger-shaped pouch attached to your large intestine. It's located in the lower right side of your belly. Scientists aren't exactly sure what it does, but we know we can live without it!

## What Is Appendicitis?

Sometimes the appendix gets blocked (by poop, swollen tissue, or infection) and bacteria grow inside it. This causes:
- Pain in the lower right belly
- Nausea and vomiting
- Fever
- Not wanting to eat

This is called appendicitis, and it's a medical emergency!

## What Happens During Surgery?

There are two ways to do this surgery:

**Laparoscopic (Keyhole) Surgery:**
- Surgeon makes 3 tiny cuts
- Uses a camera and special tools
- You get small Band-Aids
- Most common method

**Open Surgery:**
- One larger cut (2-3 inches)
- Used if the appendix already burst
- Larger scar but still effective

## Recovery

- Hospital stay: 1-2 days (if no burst appendix)
- Back to normal: 1-2 weeks
- No heavy lifting for a few weeks
- Walk as soon as you can to prevent clots

## Most People Do Great!

Appendectomy is one of the most common surgeries. Complications are rare, and almost everyone goes back to normal activities quickly.`,

      keyTerms: [
        { term: 'Appendicitis', definition: 'Infection and inflammation of the appendix' },
        { term: 'Laparoscopic', definition: 'Surgery using small cuts and a camera instead of one large opening' },
        { term: 'Rupture', definition: 'When the appendix bursts open, spreading infection inside the belly' },
      ],
      analogies: [
        'The appendix is like a little spare room that we don\'t really need - removing it doesn\'t affect the house!',
        'Laparoscopic surgery is like fixing a toy through small keyholes instead of opening the whole toy box.',
      ],
      examples: [
        'A teenager with belly pain that moved to the lower right side needs appendectomy',
        'Someone who had belly pain for 2 days and now has a high fever may have a burst appendix',
      ],
    },

    2: {
      level: 2,
      summary: 'Appendectomy is the definitive treatment for acute appendicitis. Laparoscopic approach has faster recovery but contraindicated in late pregnancy or extensive peritonitis.',
      explanation: `## Indications for Surgery

**Acute Appendicitis:**
- Classic presentation: Periumbilical pain migrating to RLQ
- Positive McBurney point tenderness
- Leukocytosis, fever
- Imaging confirms diagnosis (CT or ultrasound)

**Urgency:**
- Within 24 hours for uncomplicated appendicitis
- Emergency for ruptured appendix with peritonitis
- Immediate for sepsis or abscess

## Surgical Approaches

**Laparoscopic Appendectomy (Standard):**
- 3 ports (umbilical, suprapubic, LLQ)
- 10mm camera, 5mm working ports
- Grasp appendix, mesoappendix stapled/divided
- Appendix base divided with endoloop or stapler
- Extraction through umbilical port

**Open Appendectomy:**
- Rocky-Davis or McBurney incision
- Used for: 3rd trimester pregnancy, extensive peritonitis, prior surgeries
- Allows better peritoneal washout
- Larger incision, longer recovery

## Perioperative Management

**Preoperative:**
- NPO after diagnosis
- IV fluids (NS or LR)
- Antibiotics (ceftriaxone + metronidazole)
- Pain control (avoid masking exam)

**Postoperative:**
- Diet advance as tolerated
- Early ambulation
- Discharge when tolerating diet, afebrile
- Pain meds: NSAIDs + acetaminophen (avoid opioids if possible)

## Complications

**Surgical Site Infection:** 2-5%
**Intra-abdominal Abscess:** 2-5% (higher with rupture)
**Ileus:** Temporary bowel slowdown
**Injury to adjacent structures:** <1% (ureter, bowel, vessels)`,

      keyTerms: [
        { term: 'McBurney point', definition: 'Point in the RLQ that is tender in appendicitis, 1/3 distance from umbilicus to ASIS' },
        { term: 'Peritonitis', definition: 'Infection of the abdominal lining from ruptured appendix' },
        { term: 'Leukocytosis', definition: 'Increased white blood cell count, sign of infection' },
        { term: 'Ileus', definition: 'Temporary stoppage of bowel function after surgery' },
      ],
      analogies: [
        'Peritonitis is like having a spill in a closed room - the contamination spreads everywhere.',
        'McBurney point is like the appendix\'s "address" - it hurts right there when the appendix is inflamed.',
      ],
      examples: [
        'A 20-year-old with migration of pain to RLQ gets laparoscopic appendectomy',
        'A pregnant woman in 3rd trimester gets open appendectomy (large uterus blocks camera)',
        'Someone with ruptured appendix stays in hospital for 5 days on antibiotics',
      ],
      clinicalNotes: 'Antibiotics within 8 hours of diagnosis reduces complications. Interval appendectomy (6-8 weeks later) for appendiceal abscess is controversial - some treat with antibiotics alone initially.',
    },

    3: {
      level: 3,
      summary: 'Appendectomy treats acute appendicitis with excellent outcomes. Negative appendectomy rate is 10-20% in females, 5% in males. Management of perforated appendicitis involves source control and prolonged antibiotics.',
      explanation: `## Diagnostic Accuracy

**Clinical Decision Rules:**
- Alvarado Score: 7+ = high probability (proceed to surgery)
- Appendicitis Inflammatory Response Score
- Clinical judgment remains paramount

**Imaging:**
- CT abdomen/pelvis: Sensitivity 94-98% (adults)
- Ultrasound: Preferred for children/pregnant women
- MRI: For pregnant women when US equivocal

**Negative Appendectomy:**
- 5-10% overall, 10-20% in women of childbearing age
- Higher in young women (ovarian pathology mimics)
- Acceptable to rule out serious pathology
- Laparoscopy allows diagnosis of other conditions

## Complicated Appendicitis

**Gangrenous Appendicitis:**
- Tissue necrosis before rupture
- Higher risk of post-op abscess
- Requires thorough irrigation

**Perforated Appendicitis:**
- 20-30% of pediatric cases
- Contained vs. free perforation
- Peritoneal toilet, antibiotics 5-7 days
- Abscess rate 10-20% post-op

**Appendiceal Mass/Abscess:**
- Initial management: IV antibiotics, percutaneous drainage
- Interval appendectomy in 6-12 weeks
- Controversy: Some studies suggest antibiotics alone may suffice

## Surgical Technique Pearls

**Laparoscopic:**
- Antegrade or retrograde dissection
- Mesoappendix ligation prevents bleeding
- Endoloop vs. stapler (cost consideration)
- Specimen bag extraction prevents wound infection

**Difficult Anatomy:**
- Retrocecal appendix: Need mobilization of cecum
- Pelvic appendix: Careful ureter/iliac vessel identification
- Perforated at base: May need cecal patch or partial cecectomy

## Postoperative Ileus

**Prolonged ileus (>5 days):**
- More common with perforation
- NGT if vomiting, otherwise observation
- Total parenteral nutrition if prolonged
- Exclude abscess if ileus persists`,

      keyTerms: [
        { term: 'Alvarado score', definition: 'Clinical scoring system to predict appendicitis probability based on symptoms, signs, and labs' },
        { term: 'Retrocecal appendix', definition: 'Appendix located behind the cecum, harder to diagnose and remove' },
        { term: 'Mesoappendix', definition: 'The fatty tissue containing the appendix\'s blood supply' },
        { term: 'Interval appendectomy', definition: 'Delayed surgery after treating abscess with antibiotics first' },
      ],
      analogies: [
        'A retrocecal appendix is like hiding in a corner - harder to find and reach.',
        'Interval appendectomy is like cleaning up a flood before fixing the broken pipe.',
      ],
      examples: [
        'A woman with PID symptoms gets laparoscopy, appendix found normal but ovaries examined',
        'Child with pelvic abscess gets IR drain, then interval appendectomy 8 weeks later',
        'Retrocecal appendix found after mobilizing cecum and ascending colon',
      ],
      clinicalNotes: 'NONTRADS trial: Many cases of uncomplicated appendicitis can be treated with antibiotics alone. However, 20-30% recur within a year. Surgery remains definitive treatment. Pregnant patients: MRI preferred over CT for radiation safety.',
    },

    4: {
      level: 4,
      summary: 'Appendectomy remains the standard for acute appendicitis. CT imaging has reduced negative appendectomy rates. Minimally invasive approach is standard except in specific contraindications.',
      explanation: `## Pathophysiology of Appendicitis

**Obstruction (60% of cases):**
- Fecalith (appendicolith): Hard stool blockage
- Lymphoid hyperplasia: Viral infection causes swelling
- Fibrosis: Previous episodes cause scarring
- Tumors: Carcinoid, adenocarcinoma (rare, elderly)

**Bacterial Overgrowth:**
- Obstruction → pressure → ischemia
- Bacterial translocation through wall
- Inflammation progresses to gangrene → perforation
- Time course: 24-72 hours from onset to perforation

**Atypical Presentations:**
- Retrocecal: Psoas irritation (flank pain, hip flexion relief)
- Pelvic: Suprapubic pain, urinary frequency, diarrhea
- Left-sided: Malrotation, very long appendix

## Surgical Decision-Making

**Laparoscopic vs. Open:**
- Laparoscopic: Faster recovery, less pain, lower infection rate
- Open: For perforation with generalized peritonitis
- Pregnancy: 2nd trimester laparoscopy is safe; 3rd trimester often open
- Prior lower abdominal surgery: Consider open due to adhesions

**Negative Appendectomy:**
- 5% acceptable in men, 10-20% in women
- Lower with CT imaging
- Higher in children (clinical diagnosis preferred over CT)
- Laparoscopy allows diagnosis of other pathology

## Complications

**Intraoperative:**
- Bleeding from mesoappendix: Ligation essential
- Stapler misfire: Rare but serious
- Iatrogenic bowel injury: 0.2-0.5%

**Postoperative:**
- Ileus: Common, usually resolves in 2-3 days
- Abscess: 2-5% overall, 20% with perforation
- Wound infection: 2-5%
- Bowel obstruction: <1% (adhesions)

## Long-Term Outcomes

**After Appendectomy:**
- No measurable change in immune function
- Slightly higher risk of Crohn\'s disease (controversial)
- No impact on fertility
- Normal life expectancy`,

      keyTerms: [
        { term: 'Appendicolith', definition: 'Fecalith - a hard stone of stool blocking the appendix opening' },
        { term: 'Fecalith', definition: 'Hard, stonelike mass of feces that can obstruct the appendix' },
        { term: 'Psoas sign', definition: 'Pain on extension of hip (retrocecal appendix causes psoas irritation)' },
        { term: 'Iatrogenic', definition: 'Caused by medical treatment or surgery (unintentional complication)' },
      ],
      analogies: [
        'An appendicolith is like a plug in a drain - blocks everything up until it\'s removed.',
        'Ileus is like the bowels going on strike after being handled during surgery.',
      ],
      examples: [
        'Elderly patient with constipation gets appendicitis from fecalith impaction',
        'Child with viral URI gets appendicitis from lymphoid hyperplasia',
        'Woman with RLQ pain gets laparoscopy, finds ruptured ovarian cyst instead of appendicitis',
      ],
      clinicalNotes: 'Antibiotic-first approach for uncomplicated appendicitis is gaining traction (CODA trial). 70% of patients avoid surgery with antibiotics, but 30% need appendectomy within a year. Discuss both options with patients.',
    },

    5: {
      level: 5,
      summary: 'Appendectomy for acute appendicitis has excellent outcomes with low mortality. Emerging evidence supports antibiotic-first approach for uncomplicated cases, though surgery remains definitive treatment.',
      explanation: `## Evidence-Based Practice

**CODA Trial (2022):**
- Antibiotics vs. surgery for uncomplicated appendicitis
- 70% of antibiotic group avoided surgery
- 29% needed appendectomy within a year
- Quality of life similar at 30 days
- Antibiotics: More disability days at 90 days

**Meta-analyses:**
- Negative appendectomy: 3.8% with CT, 15.9% without
- Laparoscopic vs. open: Faster recovery, lower wound infection
- Perforation rate: Higher in elderly, young children, delayed presentation

## Special Populations

**Pregnant Patients:**
- Appendicitis is most common non-obstetric surgical emergency
- MRI preferred for imaging (no radiation)
- Laparoscopy safe in 2nd trimester
- 3rd trimester: Open approach often preferred
- Fetal loss rate: 1.5% with uncomplicated, 5% with perforation

**Elderly (>65):**
- Atypical presentation common
- Higher perforation rate at presentation
- Higher mortality (3-10% with rupture)
- Comorbidities increase risk
- Lower threshold for CT scanning

**Children:**
- Clinical diagnosis preferred (avoid CT radiation)
- Ultrasound first, then CT if equivocal
- Negative appendectomy rate higher (5-15%)
- Appendicitis perforation more common than adults
- Excellent outcomes, rapid recovery

## Surgical Controversies

**Antibiotic-First Approach:**
- CODA trial supports as reasonable alternative
- Patient counseling essential about recurrence risk
- Consider for: Young healthy patients, early presentation, no fecalith
- Avoid for: Fecalith, peritonitis, immunocompromised

**Interval Appendectomy:**
- For appendiceal abscess/phlegmon
- Traditionally: 6-12 weeks later
- Emerging data: Many don\'t need interval surgery
- Recurrence rate: 10-20% without interval appendectomy
- Shared decision-making essential

**Incisional Negative Pressure:**
- For wound infection in obese patients
- Reduces surgical site infection rates
- Higher cost but may prevent readmission

## Quality Metrics

**Surgical Care Improvement Project (SCIP) measures:**
- Preop antibiotic within 60 minutes
- Appropriate antibiotic selection
- Hair removal: No razors, clippers only if needed
- Normothermia in PACU
- DVT prophylaxis within 24 hours`,

      keyTerms: [
        { term: 'CODA trial', definition: 'Comparison of the Outcomes of Antibiotic Drugs and Appendectomy trial comparing antibiotics vs. surgery' },
        { term: 'Phlegmon', definition: 'Solid inflammatory mass without abscess formation (early stage of perforation)' },
        { term: 'SCIP', definition: 'Surgical Care Improvement Project - quality measures to prevent surgical complications' },
        { term: 'Incisional NPWT', definition: 'Negative Pressure Wound Therapy on surgical incision to prevent infection' },
      ],
      analogies: [
        'The CODA trial is like testing two different routes to the same destination - both can work, but one may take longer.',
      ],
      examples: [
        'A 25-year-old with early appendicitis chooses antibiotics, avoids surgery but has recurrence 8 months later',
        'Pregnant woman in 2nd trimester gets successful laparoscopic appendectomy',
        'Child with appendiceal abscess gets IR drain, no interval appendectomy needed',
      ],
      clinicalNotes: 'Appendicitis remains a clinical diagnosis. Imaging should not delay surgery in classic cases. Alvarado score ≥7 has 92% positive predictive value. Don\'t let "normal" CT delay surgery when clinical suspicion is high.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['surgery', 'appendectomy', 'appendicitis', 'general-surgery'],
    systems: ['digestive'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
