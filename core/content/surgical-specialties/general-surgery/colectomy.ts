/**
 * Colectomy
 *
 * Surgical removal of all or part of the colon.
 */

import { EducationalContent } from '../../types';

export const colectomyContent: EducationalContent = {
  id: 'surgical-colectomy',
  type: 'topic',
  name: 'Colectomy',
  alternateNames: ['Colon Resection', 'Large Bowel Resection'],

  levels: {
    1: {
      level: 1,
      summary: 'Colectomy is surgery to remove part or all of the colon (large intestine). It\'s done for colon cancer, diverticulitis, inflammatory bowel disease, or other colon problems.',
      explanation: `## What Is the Colon?

The colon (also called large intestine or large bowel) is the last part of your digestive system. It absorbs water from food and stores waste until you have a bowel movement.

## Why Is Colectomy Done?

**Colon Cancer:**
- Most common reason for colectomy
- Remove the cancer with part of the colon
- Lymph nodes also removed

**Diverticulitis:**
- Small pouches in the colon get infected
- Can cause severe infection or abscess
- Repeated attacks may need surgery

**Inflammatory Bowel Disease:**
- Ulcerative colitis or Crohn\'s disease
- Medical treatment first
- Surgery when medicine fails or cancer risk

**Emergency Reasons:**
- Blockage (obstruction)
- Perforation (hole in colon)
- Severe bleeding

## Types of Colectomy

**Right Colectomy:**
- Remove right colon (ascending)
- Connect small intestine to remaining colon

**Left Colectomy:**
- Remove left colon (descending/sigmoid)
- Reconnect the remaining ends

**Total Colectomy:**
- Remove entire colon
- Create ileostomy (poop bag)

## Recovery

- **Hospital:** 5-7 days for open, 3-5 days for laparoscopic
- **Bowel function:** Returns in 2-5 days
- **Diet:** Progress from liquids to solids
- **Full recovery:** 4-6 weeks`,
      keyTerms: [
        { term: 'Diverticulitis', definition: 'Infection or inflammation of small pouches in the colon wall' },
        { term: 'Ileostomy', definition: 'Opening in the belly where small intestine comes out to collect waste in a bag' },
        { term: 'Obstruction', definition: 'Blockage preventing passage of contents through the bowel' },
        { term: 'Perforation', definition: 'Hole in the colon allowing contents to leak into belly' },
      ],
      analogies: [
        'Diverticula are like little bubbles or balloons that form in the colon wall.',
        'An ileostomy is like creating a side exit for waste when the main exit is blocked.',
      ],
      examples: [
        '65-year-old with colon cancer needs right colectomy',
        'Someone with severe diverticulitis and abscess needs sigmoid colectomy',
        'Emergency surgery for bowel perforation from diverticulitis',
      ],
    },

    2: {
      level: 2,
      summary: 'Colectomy may be performed for colorectal cancer, diverticulitis, IBD, or obstruction. Surgical approach depends on location, pathology, and urgency.',
      explanation: `## Indications

**Colorectal Cancer:**
- Adenocarcinoma of colon or rectum
- Oncologic resection with lymph nodes
- Primary treatment for localized disease

**Diverticulitis:**
- Complicated: Abscess, perforation, fistula
- Recurrent attacks (2+ episodes)
- Unable to exclude cancer

**Inflammatory Bowel Disease:**
- Ulcerative colitis: Emergency colectomy for toxic megacolon, cancer
- Crohn\'s disease: Stricture, obstruction, perforation
- Planned surgery for UC with dysplasia or cancer

**Emergency:**
- Obstruction: Blockage prevents stool passage
- Perforation: Hole in bowel, peritonitis
- Hemorrhage: Severe uncontrolled bleeding`,

      keyTerms: [
        { term: 'Adenocarcinoma', definition: 'Cancer that starts in glandular cells, most common type of colon cancer' },
        { term: 'Toxic megacolon', definition: 'Severe colon dilation in ulcerative colitis, risk of perforation' },
        { term: 'Fistula', definition: 'Abnormal connection between bowel and other organs or skin' },
        { term: 'Peritonitis', definition: 'Infection in the belly from bowel contents leaking' },
      ],
      analogies: [
        'Megacolon is like a balloon that\'s been overinflated - at risk of popping.',
        'A fistula is like a secret passage between places that shouldn\'t be connected.',
      ],
      examples: [
        'Person with UC who develops toxic megacolon needs emergency colectomy',
        'Diverticulitis with abscess requiring sigmoid colectomy',
        'Colon cancer with obstruction needs emergency surgery',
      ],
      clinicalNotes: 'Mechanical bowel prep was standard but increasingly omitted for right colectomy. Primary anastomosis is safe for most emergency cases when patient stable. Diverting colostomy created for contaminated cases.',
    },

    3: {
      level: 3,
      summary: 'Laparoscopic colectomy has equivalent oncologic outcomes with faster recovery. Primary anastomosis is usually safe unless contaminated or hemodynamically unstable.',
      explanation: `## Surgical Approaches

**Right Colectomy:**
- Ileocolic anastomosis (small bowel to transverse colon)
- Removal of terminal ileum, cecum, ascending colon
- Hepatic flexure mobilization
- Relatively straightforward

**Left Colectomy:**
- Splenic flexure mobilization needed
- Dividing splenic flexure ligaments
- Colon mobilized to rectum
- Rectosigmoid anastomosis

**Proctocolectomy:**
- Remove entire colon and rectum
- IPAA (ileal pouch-anal anastomosis)
- J-pouch construction`,

      keyTerms: [
        { term: 'Ileocolic anastomosis', definition: 'Connection between small bowel (ileum) and transverse colon' },
        { term: 'Splenic flexure', definition: 'Corner where descending colon turns to transverse colon (near spleen)' },
        { term: 'IPAA', definition: 'Ileal Pouch-Anal Anastomosis - J-pouch creation' },
        { term: 'Rectosigmoid anastomosis', definition: 'Connection between remaining colon and rectum' },
      ],
      analogies: [
        'The J-pouch is like a reservoir made from small intestine - acts as a new rectum.',
      ],
      examples: [
        'UC patient with dysplasia gets proctocolectomy with J-pouch',
        'Right colon cancer removed with ileocolic anastomosis',
        'Left colon cancer with splenic flexure mobilization',
      ],
      clinicalNotes: 'Laparoscopic colectomy is standard for most cases. Hand-assisted laparoscopic (HALS) useful for large tumors or needing palpation. Rectal cancers >5cm from anal verge consider APR (abdominoperineal resection) with permanent colostomy.',
    },

    4: {
      level: 4,
      summary: 'Colectomy outcomes depend on pathology, urgency, and patient factors. Complications include anastomotic leak, ileus, and bowel dysfunction.',
      explanation: `## Complications

**Anastomotic Leak (2-5%):**
- Most serious complication
- More common with low pelvic anastomosis
- Can cause life-threatening peritonitis
- May require diversion (ileostomy)

**Ileus (5-10%):**
- Temporary bowel shutdown
- Related to surgical manipulation
- NGT decompression
- Postop ileus is expected

**Bowel Dysfunction:**
- Increased frequency (3-5 stools/day)
- Urgency
- Similar results with either approach`,

      keyTerms: [
        { term: 'Anastomotic leak', definition: 'Breakdown of connection between bowel ends, leaking contents into belly' },
        { term: 'Ileus', definition: 'Temporary shutdown of bowel function after surgery' },
        { term: 'Pelvic anastomosis', definition: 'Connection low in the pelvis, higher leak risk' },
        { term: 'NGT', definition: 'Nasogastric tube - tube through nose into stomach' },
      ],
      analogies: [
        'Anastomotic leak is like a water pipe bursting - major cleanup needed.',
        'Ileus is like the bowels going on strike after being handled.',
      ],
      examples: [
        'Low pelvic anastomosis leaks, requires temporary ileostomy',
        'Severe ileus requires NGT and parenteral nutrition',
      ],
      clinicalNotes: 'Enhanced Recovery After Surgery (ERAS) protocols reduce length of stay. Early feeding, ambulation, gum chewing, opioid-sparing analgesia all help return bowel function faster.',
    },

    5: {
      level: 5,
      summary: 'Modern colectomy uses laparoscopic techniques with ERAS protocols. Robotic assistance offers technical advantages for rectal cancer surgery.',
      explanation: `## Advanced Techniques

**Robotic Colectomy:**
- 3D visualization
- Precise dissection in pelvis
- Advantageous for rectal cancer
- TME (Total Mesorectal Excision)

**Transanal Minimally Invasive Surgery:**
- Transanal endoscopic microsurgery
- TaTME (Transanal Total Mesorectal Excision)
- For very low rectal cancers
- Technically demanding

## Controversies

**Complete Mesocolic Excision (CME):**
- Central vascular ligation
- More lymph nodes removed
- Improved oncologic outcomes
- Requires significant expertise

**D2 vs. D3 Lymphadenectomy:**
- D3 yields more nodes but not proven survival benefit
- D2 is standard for most cancers`,

      keyTerms: [
        { term: 'TME', definition: 'Total Mesorectal Excision - en bloc removal of rectum and its lymph node envelope' },
        { term: 'TaTME', definition: 'Transanal Total Mesorectal Excision - bottom-up approach to rectal cancer' },
        { term: 'Central vascular ligation', definition: 'Tying off blood vessels at their origin rather than at the colon' },
      ],
      analogies: [
        'TME is like removing the entire package with its wrapper intact.',
        'Central ligation is like cutting a tree at the trunk rather than individual branches.',
      ],
      examples: [
        'Robotic TME for low rectal cancer with clear circumferential margins',
        'TaTME for very low tumors requiring ultralow resection',
      ],
      clinicalNotes: 'Oncologic principles: En bloc resection (no tumor cut), adequate proximal/distal margins (5cm for colon, 2cm for rectum), lymph node harvest (12+ nodes minimum). Circumferential radial margins critical for rectal cancer - positive margin = APR.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['surgery', 'colectomy', 'colon-cancer', 'diverticulitis', 'IBD'],
    systems: ['digestive'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
