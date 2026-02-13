/**
 * Cystoscopy - Educational Content
 */

import { EducationalContent } from '../../types';

export const cystoscopy: EducationalContent = {
  id: 'procedure-cystoscopy',
  type: 'topic',
  name: 'Cystoscopy',
  alternateNames: ['Bladder Scope', 'Cystourethroscopy'],

  levels: {
    1: {
      level: 1,
      summary: 'Cystoscopy is a procedure where a doctor uses a thin camera to look inside your bladder and urethra.',
      explanation: `Cystoscopy lets your doctor see inside your bladder using a small camera on a flexible or rigid tube.

**Why It's Done:**
- Blood in the urine
- Frequent urinary infections
- Bladder pain or problems urinating
- To check for bladder tumors
- To place a stent in the ureter

**What to Expect:**
- Usually done in the office
- Takes about 5-15 minutes
- Local numbing gel is used
- You may feel pressure but not severe pain
- You can usually go home right away

**After the Procedure:**
- Mild burning when urinating is normal
- Drink plenty of water
- Pink-tinged urine is common for a day
- Call if you have fever or can't urinate`,
      keyTerms: [
        { term: 'cystoscopy', definition: 'Procedure to look inside the bladder with a camera' },
        { term: 'cystoscope', definition: 'The thin tube with camera used for the procedure' },
        { term: 'urethra', definition: 'The tube through which the scope passes to reach the bladder' },
      ],
      analogies: [
        'A cystoscopy is like using a tiny periscope to look inside your bladder.',
      ],
      examples: [
        'If you see blood in your urine, your doctor may recommend a cystoscopy to look for the cause.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cystoscopy is endoscopic visualization of the lower urinary tract using flexible or rigid instruments for diagnostic and therapeutic purposes.',
      explanation: `## Types of Cystoscopy

**Flexible Cystoscopy:**
- Office-based
- Local anesthesia only
- Less discomfort
- Diagnostic primarily

**Rigid Cystoscopy:**
- Operating room
- Allows instrumentation
- Better optics
- Therapeutic procedures

## Indications

**Diagnostic:**
- Hematuria evaluation
- LUTS workup
- Recurrent UTI
- Bladder surveillance (post-cancer)
- Abnormal imaging findings

**Therapeutic:**
- Stent placement/removal
- Stone extraction
- Tumor biopsy/resection
- Foreign body removal
- Botox injection

## Procedure Steps

1. Patient positioning (lithotomy)
2. Prep and drape
3. Urethral anesthesia (lidocaine gel)
4. Scope introduction
5. Systematic examination
6. Document findings
7. Scope removal

## Normal Findings

**Urethra:**
- Prostatic urethra (men)
- Verumontanum landmark
- External sphincter

**Bladder:**
- Trigone with ureteral orifices
- Smooth mucosa
- Air bubble at dome

## Post-Procedure Care

- Encourage hydration
- Expect mild dysuria
- Pink urine acceptable
- Antibiotics if high-risk`,
      keyTerms: [
        { term: 'lithotomy position', definition: 'Patient lying on back with legs elevated in stirrups' },
        { term: 'trigone', definition: 'Triangular area at bladder base containing ureteral openings' },
        { term: 'verumontanum', definition: 'Landmark in prostatic urethra where ejaculatory ducts open' },
      ],
      analogies: [
        'Systematic cystoscopy is like following a map - check every area in the same order.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cystoscopy technique requires systematic evaluation, recognition of pathology, and understanding of therapeutic applications for lower urinary tract management.',
      explanation: `## Technique Details

**Flexible Cystoscopy:**
- 16-17 Fr diameter
- Active tip deflection
- Video or direct visualization
- Working channel for instruments

**Rigid Cystoscopy:**
- 17-23 Fr sheaths
- Interchangeable telescopes (0, 30, 70 degrees)
- Continuous irrigation
- Larger working channels

## Systematic Examination

**Documentation Checklist:**
1. Urethra: Strictures, lesions
2. Prostatic urethra: BPH, cancer signs
3. Sphincter: Function, scarring
4. Trigone: Edema, tumors
5. Ureteral orifices: Efflux, position
6. Lateral walls: Masses, trabeculation
7. Dome and anterior wall: Diverticula
8. Air bubble confirms completion

## Pathology Recognition

**Bladder Cancer:**
- Papillary (Ta): Frond-like
- Sessile (CIS): Flat, erythematous
- Solid (invasive): Fixed mass

**BPH:**
- Lateral lobe enlargement
- Median lobe elevation
- Trabeculation

**Inflammation:**
- Erythema
- Petechiae (IC)
- Pseudomembranes

## Enhanced Cystoscopy

**Blue Light (Photodynamic):**
- Hexaminolevulinate instillation
- Blue light excitation
- Improved CIS detection

**Narrow Band Imaging:**
- Enhanced vascular pattern
- No dye required
- Real-time visualization

## Complications

**Minor:**
- Dysuria (common)
- Hematuria
- UTI (1-5%)

**Major (rare):**
- Urethral injury
- Bladder perforation
- Severe bleeding`,
      keyTerms: [
        { term: 'CIS', definition: 'Carcinoma in situ - flat high-grade bladder cancer' },
        { term: 'blue light cystoscopy', definition: 'Photodynamic technique improving tumor detection' },
        { term: 'trabeculation', definition: 'Thickened bladder muscle bundles visible with chronic obstruction' },
      ],
      clinicalNotes: 'Blue light cystoscopy improves detection of CIS and reduces recurrence rates. Consider for high-risk or recurrent bladder cancer surveillance.',
    },
    4: {
      level: 4,
      summary: 'Advanced cystoscopy includes therapeutic interventions, complex anatomy management, and integration with imaging technologies.',
      explanation: `## Therapeutic Cystoscopy

**Transurethral Resection (TURBT):**
- Complete tumor removal
- Muscularis propria inclusion
- Electrocautery or laser
- Bipolar vs monopolar

**Stone Management:**
- Basket extraction
- Laser lithotripsy
- Electrohydraulic lithotripsy

**Stent Procedures:**
- Retrograde placement
- Direct visualization
- Difficult anatomy techniques

## Difficult Anatomy

**Stricture Disease:**
- Gentle dilation
- Visual urethrotomy
- Small caliber scopes

**Prior Reconstruction:**
- Neo-bladders
- Augmented bladders
- Continent diversions

**Large Prostates:**
- 30-degree scope helpful
- Flexible approach
- May need resection first

## Imaging Integration

**Fluoroscopy:**
- Stent placement
- Retrograde pyelogram
- Combined procedures

**Ultrasound:**
- Stone localization
- Percutaneous access guidance

## Outpatient Procedures

**Office-Based:**
- Stent removal
- Botox injection
- Fulguration small tumors
- Biopsy

**Considerations:**
- Patient selection
- Adequate anesthesia
- Emergency backup plan

## Quality Measures

**Documentation:**
- Systematic description
- Photo/video recording
- Tumor mapping

**Safety:**
- Antibiotic stewardship
- Consent process
- Time-out verification`,
      keyTerms: [
        { term: 'TURBT', definition: 'Transurethral resection of bladder tumor' },
        { term: 'retrograde pyelogram', definition: 'Contrast injection into ureter for imaging' },
        { term: 'visual urethrotomy', definition: 'Endoscopic incision of urethral stricture' },
      ],
      clinicalNotes: 'En bloc resection of bladder tumors may improve staging accuracy and recurrence rates. Consider for select tumors.',
    },
    5: {
      level: 5,
      summary: 'Expert cystoscopy encompasses emerging technologies, complex therapeutic interventions, and quality improvement in endoscopic practice.',
      explanation: `## Emerging Technologies

**Artificial Intelligence:**
- Real-time lesion detection
- Quality scoring algorithms
- Training applications

**Confocal Laser Endomicroscopy:**
- Cellular-level imaging
- Real-time histology
- Guide biopsy decisions

**Single-Use Scopes:**
- Sterility advantages
- Cost considerations
- Growing adoption

## Advanced Resection

**En Bloc Resection:**
- Complete specimen removal
- Better pathologic staging
- Laser or electrosurgical

**Re-Staging TURBT:**
- 2-6 weeks after initial
- High-grade and T1 tumors
- Improves staging accuracy

**Erythema Management:**
- CIS mapping
- Random biopsy protocol
- Enhanced imaging role

## Complex Reconstruction

**Cystoscopy in Diversions:**
- Neobladder surveillance
- Continent pouch access
- Stoma visualization

**Fistula Evaluation:**
- Vesicovaginal
- Vesicoenteric
- Injection techniques

## Training and Competency

**Simulation:**
- Virtual reality trainers
- Box trainers
- Objective metrics

**Assessment:**
- Direct observation
- Video review
- Procedure logging

## Research Applications

**Clinical Trials:**
- Biomarker sampling
- Treatment response
- Novel imaging validation

**Outcomes Research:**
- Surveillance protocols
- Detection rates
- Complication tracking

## Quality Programs

**Benchmarking:**
- Complete visualization rates
- Recurrence rates
- Complication rates

**Continuous Improvement:**
- Case review
- Technology adoption
- Protocol updates`,
      keyTerms: [
        { term: 'confocal laser endomicroscopy', definition: 'Microscopic imaging during cystoscopy for real-time histology' },
        { term: 'en bloc resection', definition: 'Removal of entire tumor in one piece for improved pathology' },
        { term: 'single-use cystoscope', definition: 'Disposable scope addressing infection and repair concerns' },
      ],
      clinicalNotes: 'AI-assisted cystoscopy is emerging as a tool to improve lesion detection and standardize quality. Early studies show promise for reducing missed lesions.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-cystoscopy',
      type: 'article',
      title: 'Cystourethroscopy',
      source: 'AUA Core Curriculum',
    },
  ],
  crossReferences: [
    { targetId: 'cancer-bladder-cancer', targetType: 'topic', relationship: 'related', label: 'Bladder Cancer' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['procedures', 'endoscopy'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cystoscopy;
