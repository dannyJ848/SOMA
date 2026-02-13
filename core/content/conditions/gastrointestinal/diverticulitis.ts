/**
 * Diverticulitis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const diverticulitis: EducationalContent = {
  id: 'condition-diverticulitis',
  type: 'condition',
  name: 'Diverticulitis',
  nameEs: 'Diverticulitis',
  alternateNames: ['Acute Diverticulitis', 'Colonic Diverticulitis'],
  hpoId: 'HP:0002027',

  levels: {
    1: {
      level: 1,
      summary: 'Diverticulitis occurs when small pouches in the colon become infected or inflamed, causing abdominal pain, fever, and digestive problems.',
      explanation: `Small pouches called diverticula can form in the wall of the colon, especially with age. When these pouches get infected, it's called diverticulitis.

**Diverticulosis:** Having the pouches without symptoms (very common)
**Diverticulitis:** When pouches become infected/inflamed

**Symptoms of diverticulitis:**
- Sudden abdominal pain (usually left lower side)
- Fever
- Nausea, vomiting
- Constipation or diarrhea
- Bloating

**Risk factors:**
- Age over 50
- Low-fiber diet
- Obesity
- Lack of exercise
- Smoking

**Treatment:**
- Mild: Antibiotics, liquid diet, rest
- Severe: Hospitalization, IV antibiotics
- Complicated: Surgery (rare)

**Prevention:**
- Eat high-fiber foods (fruits, vegetables, whole grains)
- Drink plenty of water
- Exercise regularly`,
      keyTerms: [
        { term: 'diverticula', definition: 'Small pouches that bulge outward through weak spots in the colon' },
        { term: 'colon', definition: 'The large intestine; the final part of the digestive tract' },
        { term: 'diverticulosis', definition: 'Having diverticula without symptoms or inflammation' },
      ],
      analogies: ['The colon is like a tire with weak spots that bulge out (diverticula). Diverticulitis is when those bulges get irritated and infected.'],
      examples: ['A 55-year-old experiencing sudden left-sided abdominal pain and fever after years of low-fiber eating might have diverticulitis.'],
    },
    2: {
      level: 2,
      summary: 'Acute diverticulitis is inflammation of colonic diverticula, typically presenting with left lower quadrant pain and fever, diagnosed by CT scan, and managed based on severity classification.',
      explanation: `## Pathophysiology
- Diverticulosis: acquired sac-like mucosal herniations through colonic wall
- Diverticulitis: microperforation → inflammation → infection
- Most common in sigmoid colon
- Associated with low-fiber diet, constipation

## Clinical Presentation
**Left lower quadrant pain** (most common)
- Tenderness at sigmoid
- Fever, leukocytosis
- Altered bowel habits
- Urinary symptoms (if adjacent inflammation)

## Classification
**Uncomplicated:** No abscess, perforation, obstruction
**Complicated:** Abscess, perforation, obstruction, fistula

## Diagnosis
- **CT abdomen** (gold standard)
- May show fat stranding, abscess, free air
- Colonoscopy is contraindicated in acute phase

## Treatment
**Uncomplicated:**
- Outpatient antibiotics (ciprofloxacin + metronidazole; amoxicillin-clavulanate)
- Liquid diet then advance
- Consider antibiotics only for more severe cases

**Complicated:**
- Hospital admission
- IV antibiotics
- Percutaneous drainage for abscess
- Surgery for perforation, generalized peritonitis`,
      keyTerms: [
        { term: 'LLQ pain', definition: 'Left lower quadrant abdominal pain, classic location of diverticulitis' },
        { term: 'sigmoid colon', definition: 'S-shaped final section of colon; most common site of diverticulitis' },
        { term: 'uncomplicated diverticulitis', definition: 'Inflammation without abscess, perforation, or obstruction' },
      ],
    },
    3: {
      level: 3,
      summary: 'Diverticulitis management is guided by Hinchey classification, with treatment ranging from outpatient antibiotics for uncomplicated disease to surgical intervention for complicated cases or recurrent episodes.',
      explanation: `## Hinchey Classification (Complicated Diverticulitis)
- **Stage I:** Pericolic abscess
- **Stage II:** Pelvic/remote abscess
- **Stage III:** Generalized purulent peritonitis
- **Stage IV:** Fecal peritonitis

## Treatment by Severity

**Uncomplicated (Hinchey 0):**
- Outpatient if tolerating oral intake, no comorbidities
- Ciprofloxacin + metronidazole OR amoxicillin-clavulanate
- Consider no antibiotics for mild cases (recent studies)
- Diet advancement as tolerated

**Complicated:**
- **Hinchey I-II:** IV antibiotics ± percutaneous drainage
- **Hinchey III:** Surgical resection + Hartmann procedure
- **Hinchey IV:** Emergency surgery, washout, resection

## Surgery Indications
**Absolute:**
- Free perforation with peritonitis
- Failure of medical management
- Obstruction
- Fistula

**Relative:**
- Recurrent episodes (>2-3)
- Immunosuppressed patient
- Inability to exclude cancer

## Surgical Options
- Hartmann procedure (resection + colostomy)
- Primary anastomosis with diverting ileostomy
- Laparoscopic lavage (controversial)

## Prevention of Recurrence
- High-fiber diet (25-35g/day)
- Avoid nuts, seeds, popcorn (controversial—modern data suggests OK)
- Weight loss
- Exercise
- Consider mesalamine (limited evidence)`,
      keyTerms: [
        { term: 'Hartmann procedure', definition: 'Surgical resection of colon with end colostomy and rectal stump' },
        { term: 'percutaneous drainage', definition: 'Needle drainage of abscess through skin under imaging guidance' },
        { term: 'primary anastomosis', definition: 'Surgical connection of bowel ends without temporary colostomy' },
      ],
      clinicalNotes: 'Consider colonoscopy 6-8 weeks after resolution to exclude malignancy, especially if no recent colonoscopy. Age-appropriate cancer screening should be up to date.',
    },
    4: {
      level: 4,
      summary: 'Diverticulitis management incorporates evidence-based approaches including selective antibiotic use, minimally invasive drainage techniques, and individualized surgical timing based on patient factors and disease course.',
      explanation: `## Evolving Treatment Paradigm

**Antibiotic controversy:**
- Scandinavian studies suggest uncomplicated diverticulitis may not need antibiotics
- Reserving antibiotics for higher-risk patients:
  - Immunocompromised
  - Significant comorbidities
  - Outpatient treatment failure
  - High inflammatory markers

## Percutaneous Drainage
**Indications:**
- Abscess >3-4 cm
- Accessible drainage path
- Patient stable for procedure

**Technique:**
- CT or ultrasound-guided
- Pigtail catheter placement
- Flush until resolution

## Surgical Timing
**Emergency:** Free perforation, sepsis
**Urgent:** Failed medical management, abscess not amenable to drainage
**Elective:** After 2+ attacks, immunosuppressed

**Surgical approach:**
- Laparoscopic preferred (faster recovery)
- Segmental resection
- Primary anastomosis in selected cases

## Special Populations
**Immunosuppressed:** Lower threshold for surgery, higher complication risk
**Pregnant:** MRI to avoid radiation; surgery if no response
**Young (<50):** Higher recurrence; may offer earlier surgery

## Chronic Diverticulitis
- Smoldering symptoms
- May require segmental resection
- Exclude IBD, ischemia`,
      keyTerms: [
        { term: 'laparoscopic', definition: 'Minimally invasive surgery using small incisions and camera' },
        { term: 'smoldering diverticulitis', definition: 'Chronic, low-grade inflammation without acute features' },
        { term: 'segmental resection', definition: 'Removal of only the affected segment of colon' },
      ],
      clinicalNotes: 'The "nuts and seeds" restriction is outdated—modern evidence shows these do not increase diverticulitis risk. High-fiber diet remains cornerstone of prevention.',
    },
    5: {
      level: 5,
      summary: 'Contemporary diverticulitis management embraces precision medicine approaches including genotype-guided therapy, microbiome modulation, minimally invasive surgical techniques, and individualized recurrence prevention strategies.',
      explanation: `## Emerging Concepts in Pathogenesis
**Microbiome alterations:**
- Reduced diversity
- Increased Proteobacteria
- Potential for probiotic therapy

**Genetic factors:**
- Familial clustering
- Genome-wide association studies identifying susceptibility loci
- Potential for risk stratification

## Advanced Therapeutic Options
**Endoscopic:**
- Endoscopic vacuum therapy for perforation
- Endoscopic abscess drainage
- Stent placement for obstruction

**Antibiotic stewardship:**
- Biomarker-guided duration
- Procalcitonin to guide therapy
- Shorter courses (4-7 days) for uncomplicated

**Non-antibiotic anti-inflammatory:**
- Mesalamine (5-ASA) - mixed evidence
- Rifaximin - promising for prevention

## Surgical Advances
**Robotic-assisted:** Better visualization, easier in obese patients
**Single-port:** Further minimally invasive approach
**NO-colectomy:** Diverticulectomy (selected cases)

## Recurrence Prevention
**Individualized dietary recommendations:**
- High fiber (≥25g/day)
- Reduced red meat
- Increased physical activity
- Weight management

**Pharmacologic prevention:**
- Rifaximin rotation
- Mesalamine (selected patients)
- Statins may have protective effect

## Risk Stratification Tools
- Age-adjusted comorbidity index
- Diverticulitis scoring systems
- Genetic profiling (future)`,
      keyTerms: [
        { term: 'procalcitonin', definition: 'Biomarker that may guide antibiotic duration in bacterial infections' },
        { term: 'endoscopic vacuum therapy', definition: 'Endoscopic placement of sponge for managing perforation' },
        { term: 'diverticulectomy', definition: 'Removal of only the affected diverticula without full colectomy' },
      ],
      clinicalNotes: 'Shared decision-making crucial for elective surgery after recurrent attacks. Consider quality of life, patient preferences, and surgical risk. Interval colonoscopy mandatory after first episode to exclude malignancy.',
    },
  },

  media: [],
  citations: [
    { id: 'acg-diverticulitis-2024', type: 'article', title: 'ACG Clinical Guideline: Management of Acute Diverticulitis', source: 'American Journal of Gastroenterology' },
    { id: 'ases-2022', type: 'article', title: 'Guidelines for Surgical Management of Diverticulitis', source: 'Society of American Gastrointestinal and Endoscopic Surgeons' },
  ],
  crossReferences: [
    { targetId: 'condition-ibs', targetType: 'condition', relationship: 'related', label: 'Irritable Bowel Syndrome' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'surgery'], keywords: ['diverticulitis', 'colon', 'abscess', 'Hinchey'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diverticulitis;
