/**
 * GI Procedures - Endoscopy, Colonoscopy, Biopsy
 *
 * Covers upper endoscopy (EGD), colonoscopy, flexible sigmoidoscopy,
 * biopsy techniques, and endoscopic therapies.
 */

import { EducationalContent } from '../types';

export const giProceduresContent: EducationalContent = {
  id: 'gi-procedures',
  type: 'topic',
  name: 'GI Procedures',
  alternateNames: [
    'Endoscopy',
    'EGD',
    'Upper Endoscopy',
    'Colonoscopy',
    'Flexible Sigmoidoscopy',
    'Capsule Endoscopy',
    'Biopsy',
    'Polypectomy',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'GI procedures are tests that use a camera on a flexible tube to look inside the digestive tract. They help diagnose and treat many digestive problems.',
      explanation: `**What are GI Procedures?**

GI (gastrointestinal) procedures allow doctors to see inside your digestive system without surgery. They use a flexible tube with a camera and light at the end. This tube is called an endoscope.

**Common GI Procedures:**

1. **Upper Endoscopy (EGD)**
   - Looks at the esophagus, stomach, and upper small intestine
   - Camera goes through the mouth
   - Used for: heartburn, stomach pain, ulcers, trouble swallowing
   - Takes about 15-30 minutes
   - Done with sedation (medicine to make you sleepy)

2. **Colonoscopy**
   - Looks at the entire colon (large intestine)
   - Camera goes through the rectum
   - Used for: colon cancer screening, polyps, bleeding, diarrhea
   - Takes about 30-60 minutes
   - Requires bowel prep (cleaning the bowel)
   - Done with sedation

3. **Flexible Sigmoidoscopy**
   - Looks at only the lower part of the colon
   - Similar to colonoscopy but shorter exam
   - No sedation needed usually
   - Less bowel prep needed

4. **Capsule Endoscopy**
   - A tiny camera inside a pill-sized capsule
   - You swallow it, and it takes pictures as it passes through
   - Looks at the small intestine
   - Pictures sent to a recorder you wear
   - The capsule passes out in stool

**Why These Procedures Are Done:**
- Find the cause of belly pain
- Look for bleeding or ulcers
- Find and remove polyps (growths that can become cancer)
- Take tiny samples (biopsies) to examine
- Treat problems like bleeding or narrowings
- Screen for cancer

**What to Expect:**
- **Before:** Fasting (no food or drink for several hours)
- **During:** Sedation to keep you comfortable
- **After:** Rest in recovery area, someone must drive you home
- Minor throat discomfort (for EGD)
- Gas and bloating (from air used during procedure)

**Risks:**
- Bleeding (especially if biopsy or polyp removal)
- Perforation (tiny tear in the digestive tract) - rare
- Reaction to sedation
- Very low risk of serious complications

**Benefits:**
- Can diagnose problems that other tests miss
- Can treat problems during the same procedure
- Prevents colon cancer by removing polyps
- Generally safe and well-tolerated`,
      keyTerms: [
        { term: 'endoscopy', definition: 'Procedure using a flexible tube with a camera to see inside the body' },
        { term: 'EGD', definition: 'Esophagogastroduodenoscopy - upper endoscopy' },
        { term: 'colonoscopy', definition: 'Procedure to look at the entire colon with a camera' },
        { term: 'biopsy', definition: 'Taking a tiny sample of tissue for examination' },
        { term: 'polypectomy', definition: 'Removal of a polyp during colonoscopy' },
        { term: 'sedation', definition: 'Medicine to make you relaxed and sleepy during a procedure' },
        { term: 'perforation', definition: 'A hole or tear in the digestive tract wall' },
      ],
      analogies: [
        'An endoscope is like a flexible telescope that can bend around corners.',
        'Capsule endoscopy is like a tiny spaceship sending back pictures as it travels through your body.',
      ],
      examples: [
        'Someone with chronic heartburn might have an EGD to check for damage to the esophagus.',
        'A 50-year-old having a colonoscopy for cancer screening might have polyps removed during the same procedure.',
        'A person with unexplained anemia might have both EGD and colonoscopy to find bleeding sources.',
      ],
      patientCounselingPoints: [
        'Follow fasting instructions carefully before your procedure',
        'Arrange for someone to drive you home after sedation',
        'Tell your doctor about all medications you take',
        'Complete bowel prep exactly as instructed for colonoscopy',
        'Report severe pain, fever, or bleeding after the procedure',
      ],
    },

    2: {
      level: 2,
      summary: 'Endoscopic procedures include EGD (upper endoscopy), colonoscopy, flexible sigmoidoscopy, and capsule endoscopy. These procedures allow visualization, diagnosis, and therapy of GI conditions.',
      explanation: `## Upper Endoscopy (EGD)

**Indications:**
- Dyspepsia (especially with alarm features)
- Persistent GERD not responding to PPI
- Dysphagia or odynophagia
- GI bleeding (hematemesis, melena)
- Anemia with suspected GI blood loss
- Foreign body ingestion
- Barrett's esophagus surveillance
- Unexplained weight loss
- Abnormal imaging findings

**Procedure:**
- Patient in left lateral decubitus position
- Mouth guard inserted
- Local anesthetic spray to throat
- Conscious sedation (midazolam, fentanyl, propofol)
- Endoscope advanced under direct visualization
- Systematic examination of esophagus, stomach, duodenum

**Therapeutic Capabilities:**
- Biopsy for histology
- Hemostasis (injection, cautery, clips)
- Polypectomy
- Dilation of strictures (Savary, balloon)
- Foreign body removal
- PEG tube placement
- Variceal banding/sclerotherapy
- Feeding tube placement

**Complications:**
- Perforation (0.03-0.1%)
- Bleeding (0.1-0.5%)
- Aspiration pneumonia
- Cardiopulmonary complications from sedation
- Tooth injury

## Colonoscopy

**Indications:**
- Colorectal cancer screening
- Polyp surveillance
- GI bleeding (hematochezia, melena)
- Change in bowel habits
- Unexplained abdominal pain
- Anemia
- Positive FOBT/FIT
- Inflammatory bowel disease diagnosis/surveillance
- Diarrhea evaluation

**Procedure:**
- Bowel preparation essential
- Patient in left lateral position, may reposition during
- Conscious sedation (typically propofol)
- Scope advanced to cecum
- Careful withdrawal while examining
- Polypectomy or biopsy as indicated

**Bowel Preparation Options:**
- PEG-based: Large volume, electrolyte balanced
- PEG + ascorbate: Lower volume
- Sodium phosphate: Contraindicated in renal/heart disease
- Sodium picosulfate + magnesium citrate

**Cecal Intubation Indicators:**
- Appendiceal orifice visualization
- Ileocecal valve
- Terminal ileum intubation
- Transillumination of RLQ

**Quality Metrics:**
- Cecal intubation rate >95%
- Adenoma detection rate >25%
- Withdrawal time ≥6 minutes
- Adequate bowel preparation >85%

**Complications:**
- Perforation (0.02-0.2%)
- Bleeding (0.1-3% after polypectomy)
- Post-polypectomy syndrome
- Splenic injury (rare)
- Cardiopulmonary complications
- Inadequate prep (10-20%)

## Flexible Sigmoidoscopy

**Indications:**
- Part of CRC screening (with FIT)
- Evaluation of lower GI bleeding in young patients
- IBD surveillance
- Incomplete colonoscopy

**Procedure:**
- Limited bowel prep (enema often sufficient)
- Exam to splenic flexure (~60 cm)
- Can be done without sedation
- Shorter duration than colonoscopy

**Limitations:**
- Cannot visualize proximal colon
- Polyps beyond reach missed
- Higher miss rate for neoplasia

## Capsule Endoscopy

**Indications:**
- Obscure GI bleeding (after negative EGD/colonoscopy)
- Small bowel evaluation
- Crohn disease evaluation
- Polyposis syndromes
- Celiac disease (refractory)

**Procedure:**
- Sensor array placed on abdomen
- Patient swallows capsule
- 8-hour recording
- Capsule passes naturally

**Contraindications:**
- GI obstruction
- Pregnancy
- Pacemaker/ICD (older devices)
- Swallowing disorders

**Limitations:**
- No tissue sampling
- Cannot treat findings
- Limited visualization control
- May get trapped in strictures

## Capsule Retention
- Risk ~1-2%
- Higher with strictures, NSAIDs, Crohn disease
- Patency capsule test before procedure if stricture suspected
- Surgical or endoscopic retrieval if retained`,
      keyTerms: [
        { term: 'dysphagia', definition: 'Difficulty swallowing' },
        { term: 'odynophagia', definition: 'Painful swallowing' },
        { term: 'dyspepsia', definition: 'Indigestion, upper abdominal discomfort' },
        { term: 'PEG tube', definition: 'Percutaneous endoscopic gastrostomy feeding tube' },
        { term: 'ileocecal valve', definition: 'Valve between small and large intestine; cecal landmark' },
        { term: 'cecal intubation', definition: 'Reaching the beginning of the colon (cecum) during colonoscopy' },
        { term: 'adenoma detection rate', definition: 'Percentage of colonoscopies finding adenomas; quality metric' },
        { term: 'patency capsule', definition: 'Test capsule that dissolves to check for strictures' },
      ],
      analogies: [
        'The ileocecal valve is like a doorway between the small and large intestine.',
        'Capsule retention is like a car getting stuck in a tunnel.',
      ],
      examples: [
        'A 55-year-old with anemia and positive FIT needs colonoscopy.',
        'Someone with food stuck in their esophagus needs urgent EGD.',
        'A patient with ongoing GI bleeding after negative EGD and colonoscopy may need capsule endoscopy.',
      ],
    },

    3: {
      level: 3,
      summary: 'Endoscopic procedures require careful preparation, sedation considerations, and technical expertise. Diagnostic yield depends on proper technique and patient factors. Complications are rare but can be serious.',
      explanation: `## Pre-Procedure Considerations

**Risk Assessment:**
- Comorbidities (cardiac, pulmonary, liver disease)
- Bleeding risk (anticoagulants, antiplatelets)
- Medication review
- Allergies (latex, sedatives)
- Prior abdominal surgery (may affect scope advancement)
- Previous endoscopy findings

**Anticoagulation Management:**

*For Low-Risk Procedures (diagnostic only):*
- Continue warfarin, DOACs, clopidogrel

*For High-Risk Procedures (biopsy, polypectomy, dilation):*
- Warfarin: Hold 3-5 days, bridge if high thrombotic risk
- DOACs: Hold 24-48 hours before
- Clopidogrel: Hold 5-7 days (continue aspirin)
- Continue aspirin for most patients

**Bowel Preparation Optimization:**
- Split-dose superior to day-before
- Clear liquids only during prep
- Walk/movement enhances cleansing
- Consider low-residue diet day before (may improve tolerance)

**Sedation Options:**

*Standard Sedation:*
- Midazolam (benzodiazepine): Amnesia, anxiolysis
- Fentanyl (opioid): Analgesia
- Combination synergistic

*Propofol:*
- Rapid onset, rapid recovery
- Deeper sedation
- Requires trained monitoring (anesthesia or trained endoscopist)
- Better patient satisfaction

*Moderate vs. Deep Sedation:*
- Moderate: Responds to verbal/tactile stimulation
- Deep: Responds only to painful stimulation
- Propofol often achieves deep sedation

## Advanced Endoscopic Techniques

**Chromoendoscopy:**
- Spraying dye to highlight mucosal patterns
- Methylene blue, indigo carmine, acetic acid
- Improves detection of:
  - Flat adenomas
  - Dysplasia in IBD
  - Barrett's esophagus islands

**NBI (Narrow Band Imaging):**
- Optical technology, no dye needed
- Enhances vascular pattern visualization
- Distinguish neoplastic from non-neoplastic lesions
- Real-time histology prediction

**Endoscopic Mucosal Resection (EMR):**
- Remove lesions up to 20 mm
- Submucosal injection lifts lesion
- Snare capture and resection
- En bloc or piecemeal

**Endoscopic Submucosal Dissection (ESD):**
- Remove large lesions (>20 mm) en bloc
- Mucosal incision
- Submucosal dissection
- Higher technical difficulty, longer procedure time
- Lower recurrence compared to EMR

**Endoscopic Ultrasound (EUS):**
- Ultrasound probe on endoscope
- Visualize beyond GI lumen
- Layers of GI wall
- Submucosal lesions
- Pancreas, biliary tree
- Lymph nodes
- Vascular structures
- Fine needle aspiration (FNA) capability

## Procedure-Specific Complications

**EGD Complications:**
- **Perforation:** Usually at cervical esophagus or pylorus
- **Bleeding:** After biopsy, polypectomy
- **Aspiration:** Higher with inadequate fasting, emergency procedures
- **Cardiopulmonary:** Hypotension, arrhythmias, respiratory depression

**Colonoscopy Complications:**
- **Perforation:** Risk factors: therapeutic procedures, advanced age, female sex, diverticulosis
  - Management: Surgical consultation, antibiotics if free perforation
- **Post-polypectomy bleeding:**
  - Immediate: Endoscopic treatment (clips, cautery)
  - Delayed (up to 2 weeks): Presentation with hematochezia
- **Post-polypectomy syndrome:** Transmural burn without perforation, treated with antibiotics
- **Splenic injury:** Left upper quadrant pain, splenomegaly on CT

**Capsule Endoscopy Complications:**
- **Retention:** 1-2% risk
  - Risk factors: NSAIDs, Crohn disease, abdominal radiation
  - Patency capsule before procedure if high risk
  - Surgical/endoscopic retrieval if retained
- **Missed lesions:** 5-10% miss rate
- **Poor visualization:** Inadequate prep, rapid transit

## Post-Procedure Care

**EGD Post-Procedure:**
- NPO until gag reflex returns
- Watch for sore throat, bloating
- Resume diet as tolerated
- Discharge instructions

**Colonoscopy Post-Procedure:**
- Diet as tolerated after sedation wears off
- Expect bloating, flatulence
- Watch for bleeding, severe pain, fever
- Resumption of anticoagulation based on bleeding risk

**Colonoscopy Prep Failure:**
- Repeat prep with alternative agent
- Consider endoscopic lavage
- May need to reschedule`,
      keyTerms: [
        { term: 'chromoendoscopy', definition: 'Use of dye to enhance mucosal visualization' },
        { term: 'NBI', definition: 'Narrow band imaging - optical enhancement of vascular patterns' },
        { term: 'EMR', definition: 'Endoscopic mucosal resection - removal of flat lesions' },
        { term: 'ESD', definition: 'Endoscopic submucosal dissection - en bloc removal of large lesions' },
        { term: 'EUS', definition: 'Endoscopic ultrasound - imaging through GI wall' },
        { term: 'FNA', definition: 'Fine needle aspiration - tissue sampling with EUS' },
        { term: 'post-polypectomy syndrome', definition: 'Transmural burn without perforation after polypectomy' },
        { term: 'split-dose prep', definition: 'Bowel prep split between evening and morning of procedure' },
      ],
      clinicalNotes: 'Aspirin alone (without P2Y12 inhibitor) can generally be continued for all procedures. Warfarin: hold 5 days before high-risk procedures. DOACs: hold 24-48 hours depending on drug and renal function.',
    },

    4: {
      level: 4,
      summary: 'Advanced endoscopic techniques allow diagnosis and treatment that previously required surgery. Understanding of technical indications, limitations, and complications is essential for safe practice.',
      explanation: `## Advanced Diagnostic Techniques

**Endoscopic Ultrasound (EUS) Applications:**

*Staging of Malignancy:*
- Esophageal cancer: T and N staging
- Gastric cancer: Depth of invasion
- Rectal cancer: T and N staging, CRM assessment
- Pancreatic cancer: Resectability assessment
- Lung cancer: Mediastinal nodes

*Submucosal Lesions:*
- Layer of origin determines lesion type
- Mucosa: Polyps, carcinoid, inflammation
- Submucosa: Lipoma, granular cell, GIST, carcinoid
- Muscularis propria: GIST, leiomyoma
- Serosa: Extrinsic compression

*Fine Needle Aspiration (FNA):*
- Pancreatic masses
- Lymph nodes
- Submucosal tumors (GIST)
- Mediastinal masses

*Therapeutic EUS:*
- Celiac plexus neurolysis (pain)
- Pancreatic cyst ablation
- Drainage of pancreatic fluid collections

**Balloon-Assisted Enteroscopy:**

*Indications:*
- Deep small bowel evaluation
- ERCP in altered anatomy (gastric bypass, Whipple)
- Intervention after capsule endoscopy finding

*Types:*
- Double balloon (DBE): Balloon on scope and overtube
- Single balloon (SBE): Balloon on overtube only
- Spiral (Spirus): Rotating overtube

*Therapeutic Capabilities:*
- Biopsy of small bowel lesions
- Polypectomy
- Hemostasis
- Stricture dilation
- Enteroscopic ERCP

## Therapeutic Endoscopy

**Hemostasis Techniques:**

*Injection:*
- Epinephrine (vasoconstriction, tamponade)
- Sclerosants (NOT preferred alone)
- Cyanoacrylate glue (gastric varices)

*Thermal:*
- Contact: Bipolar/multipolar probe, heater probe
- Non-contact: Argon plasma coagulation (APC)
- Radiofrequency ablation (RFA)

*Mechanical:*
- Through-the-scope clips (TTSC)
- Over-the-scope clips (OTSC)
- Bands (variceal ligation)
- Endoloops (polyp pedicles)

*Combination Therapy:*
- Epinephrine + second modality preferred
- Superior to epinephrine alone

**Dilation Techniques:**

*For Strictures:*
- Savary-Gilliard dilators (wire-guided)
- Balloon dilators (through-scope)
- Serial dilations often needed
- Intralesional steroids for refractory strictures

*For Achalasia:*
- Pneumatic dilation (30-40 mm balloons)
- Risk of perforation (~2-5%)
- Alternative to surgical myotomy

**Polypectomy Techniques:**

*Cold Forceps Biopsy:*
- Small polyps (<3 mm)
- Shallow biopsy, risk of incomplete removal

*Cold Snare Polypectomy:*
- Polyps up to 10 mm
- Safe, no electrocautery
- Lower bleeding risk

*Hot Snare Polypectomy:*
- Larger polyps (>10 mm)
- Electrocautery needed
- Higher bleeding/perforation risk

*EMR Indications:*
- Sessile polyps 10-20 mm
- Laterally spreading lesions
- Carcinoid tumors

*ESD Indications:*
- Lesions >20 mm
- Lesions with suspicion of submucosal invasion
- Need for en bloc resection
- Early cancers (curative intent)

**Barrier to Surgery:**
Endoscopic resection replaces surgery for many early GI cancers (T1a, favorable histology)

## Specialized Procedures

**Peroral Endoscopic Myotomy (POEM):**
- Treatment for achalasia
- Endoscopic myotomy of LES
- Comparable efficacy to Heller myotomy
- Less invasive, faster recovery

**Endoscopic Submucosal Tunnel Dissection (STER):**
- Removal of submucosal tumors
- Tunnel created in submucosa
- En bloc resection with mucosal closure

**Endoscopic Full-Thickness Resection (EFTR):**
- Resection through entire bowel wall
- For lesions not amenable to standard EMR/ESD
- Higher complication risk

**Lumen-Apposing Metal Stents (LAMS):**
- Pancreatic fluid collection drainage
- Gallbladder drainage
- Connect two lumens (e.g., stomach and pancreas)

## Endoscopic Mucosal Imaging

**Pit Patterns (Kudo Classification):**
- Type I-II: Non-neoplastic (round/stellar)
- Type III-IV: Neoplastic (tubulovillous, branched)
- Type V: Invasive cancer (irregular, non-structured)

**NBI International Colorectal Endoscopic (NICE) Classification:**
- Color, vessels, pit pattern
- Distinguishes hyperplastic from adenomatous
- Guides resection decisions

**Paris Classification:**
- Polyp morphology description
- Protruded (0-Ip, 0-Is)
- Sessile (0-IIa)
- Depressed (0-IIc)
- Flat (0-IIb)
- Predicts submucosal invasion risk

## Management of Complications

**Perforation Management:**
- Immediate recognition crucial
- Endoscopic closure (clips, OTSC, suturing) if small
- Surgical consultation for large or delayed perforations
- Antibiotics, NPO, hospitalization

**Bleeding Management:**
- Immediate: Endoscopic hemostasis
- Delayed: Repeat endoscopy
- Consider interventional radiology if endoscopy fails
- Surgery as last resort

**Sedation-Related Complications:**
- Hypoxia: Supplemental oxygen, airway repositioning
- Hypotension: Fluids, vasopressors, propofol reduction
- Aspiration: Head of bed up, suction, antibiotics if needed

**Post-Polypectomy Syndrome:**
- Transmural burn without perforation
- Fever, leukocytosis, abdominal pain
- Antibiotics (usually ciprofloxacin + metronidazole)
- No surgical intervention needed`,
      keyTerms: [
        { term: 'celiac plexus neurolysis', definition: 'EUS-guided alcohol injection for pancreatic pain' },
        { term: 'LAMS', definition: 'Lumen-apposing metal stent; connects two lumens' },
        { term: 'POEM', definition: 'Peroral endoscopic myotomy for achalasia' },
        { term: 'STER', definition: 'Submucosal tunnel endoscopic resection' },
        { term: 'EFTR', definition: 'Endoscopic full-thickness resection' },
        { term: 'Kudo pit pattern', definition: 'Mucosal surface pattern classification for polyps' },
        { term: 'NICE classification', definition: 'NBI International Colorectal Endoscopic classification' },
        { term: 'Paris classification', definition: 'Polyp morphology classification system' },
      ],
      clinicalNotes: 'LAMS increasingly used for pancreatic walled-off necrosis, gallbladder drainage in poor surgical candidates. POEM emerging as preferred achalasia treatment at specialized centers.',
    },

    5: {
      level: 5,
      summary: 'Modern endoscopy encompasses sophisticated diagnostic and therapeutic capabilities that continue to evolve. Training, quality metrics, and appropriate credentialing are essential for safe practice.',
      explanation: `## Quality Assurance in Endoscopy

**Colonoscopy Quality Metrics:**

*Core Measures:*
- **Adenoma detection rate (ADR):** >25% overall
  - Direct correlation with interval cancer risk
  - Endoscopist-specific metric
  - Male endoscopists tend to have higher ADR
  - Higher withdrawal time improves ADR

- **Cecal intubation rate:** >95%
  - Photo documentation of landmarks
  - Terminal ileum intubation not required but beneficial

- **Withdrawal time:** ≥6 minutes
  - Shorter withdrawal times associated with lower ADR
  - Should be averaged across all procedures

- **Adequate bowel preparation:** >85%
  - Affects ADR and adenoma miss rate
  - Inadequate prep: Repeat in 1 year or sooner

- **Adenoma miss rate:** <20%
  - Benchmark derived from tandem studies
  - Influenced by preparation quality, withdrawal time

**EGD Quality Metrics:**
- Documentation of indication
- Photo documentation of normal anatomy and pathology
- Gastric mapping (minimal images: antrum, body, fundus)
- Biopsy rate for appropriate indications
- Patient tolerability/satisfaction scores

**Credentialing and Privileging:**
- Minimum procedure numbers for competence
- ASGE training thresholds: EGD 100+, colonoscopy 100+
- Ongoing competency assessment
- Required CME and credential renewal

## Advanced Therapeutic Endoscopy

**Third Space Endoscopy:**
- Submucosal tunneling (submucosal space is "third space")
- POEM for achalasia
- POET for subepithelial tumors (peroral endoscopic tumor removal)
- Z-POEM for Zenker diverticulum

**Endoscopic Suturing:**
- Over-the-scope suturing device (OverStitch)
- Full-thickness closure of perforations
- Closure of large mucosal defects
- Endoscopic bariatric procedures

**Endoscopic Bariatrics:**
- Endoscopic sleeve gastroplasty (ESG)
- Intragastric balloon (IGB)
- Endoscopic aspiration therapy (EndoBarrier)
- Primary obesity surgery endoluminal (POSE)
- Adjuncts to lifestyle modification

**Endoscopic Full-Thickness Resection Evolution:**
- Initially required laparoscopic assistance
- Now purely endoscopic for many lesions
- Combines mucosal incision, submucosal dissection, full-thickness resection
- Closure with suturing devices

## Advanced Imaging

**Artificial Intelligence in Endoscopy:**
- Real-time polyp detection
- Characterization (adenoma vs. hyperplastic)
- Quality monitoring (withdrawal time, photography)
- Reduced miss rates
- Still evolving, not yet standard

**Confocal Laser Endomicroscopy:**
- Cellular-level imaging during endoscopy
- "Virtual biopsy"
- Fluorescent contrast agents
- Distinguish neoplastic from non-neoplastic
- Limited availability

**Volumetric Laser Endomicroscopy:**
- 3D imaging of subsurface
- Barrett's esophagus dysplasia detection
- Currently investigational

## Training and Competence

**Training Pathways:**
- Fellowship training (GI, surgical endoscopy)
- Mentorship model
- Simulation training
- Virtual reality simulators
- Animal model training

**Competence Assessment:**
- Direct observation
- Video review
- Procedure metrics (ADR, cecal intubation)
- Complication rates
- Patient outcomes

**Maintenance of Certification:**
- Procedure volume requirements
- Quality metric monitoring
- CME requirements
- Periodic re-credentialing

## Evidence-Based Guidelines

**ASGE Guidelines (Key Recommendations):**

*Appropriate Use of Colonoscopy:*
- Screening: As per USPSTF
- Surveillance: Based on findings and USMSTF intervals
- Diagnostic: For signs/symptoms, not for routine IBD surveillance (biopsy protocol)

*Appropriate Use of EGD:*
- Dyspepsia: Only with alarm features or >60 years old
- GERD: Only for refractory symptoms or screening for Barrett's
*   Dysphagia: Always appropriate

*EGD for Uninvestigated Dyspepsia:*
- Onset >60 years: Immediate EGD
- Onset <60 years with alarm features: Immediate EGD
- Onset <60 years without alarm features: H. pylori test and treat, or empiric PPI

**Safe Endoscopy During COVID-19:**
- Pre-procedure testing (guideline-dependent)
- PPE for all endoscopic procedures
- Negative pressure rooms when possible
- Limit aerosol-generating procedures
- Prioritize urgent/emergency cases

## Future Directions

**Robotic Endoscopy:**
- Stable platform
- Improved maneuverability
- Robotic resection devices
- Still early development

**Wireless Capsule Advances:**
- Panoramic views
- Self-propelled capsules
- Therapeutic capabilities
- Colon capsules for screening

**Molecular Imaging:**
- Fluorescently labeled peptides
- Detect dysplasia at molecular level
- Personalized medicine applications`,
      keyTerms: [
        { term: 'ADR', definition: 'Adenoma detection rate - key quality metric for colonoscopy' },
        { term: 'third space', definition: 'Submucosal space used in POEM and other tunneling procedures' },
        { term: 'ESG', definition: 'Endoscopic sleeve gastroplasty - endoscopic bariatric procedure' },
        { term: 'IGB', definition: 'Intragastric balloon - endoscopic weight loss device' },
        { term: 'Z-POEM', definition: 'Peroral endoscopic myotomy for Zenker diverticulum' },
        { term: 'confocal endomicroscopy', definition: 'Cellular-level imaging during endoscopy' },
        { term: 'interval cancer', definition: 'Cancer diagnosed between recommended screening intervals' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Quality metrics: ADR is the most important predictor of interval cancer prevention
2. Inadequate prep: Repeat colonoscopy in 1 year (sooner if high-risk findings)
3. Cold snare preferred for polyps ≤10 mm (lower bleeding risk)
4. ESD requires advanced training; refer to expert centers
5. EUS for rectal cancer staging: essential for treatment planning
6. Pancreatic fluid collections: LAMS preferred over traditional stents
7. POEM: Emerging as first-line treatment for achalasia
8. Consider third-space endoscopy centers for challenging submucosal lesions
9. Maintain competency with ongoing procedure volume and CME
10. Document quality metrics for periodic review`,
    },
  },

  media: [
    {
      id: 'endoscopy-anatomy',
      type: 'diagram',
      filename: 'egd-anatomy.svg',
      title: 'EGD Anatomy',
      description: 'Normal anatomical landmarks seen during upper endoscopy',
    },
    {
      id: 'colonoscopy-technique',
      type: 'diagram',
      filename: 'colonoscopy-technique.svg',
      title: 'Colonoscopy Technique',
      description: 'Proper scope advancement and withdrawal technique',
    },
  ],

  citations: [
    {
      id: 'asge-standards-2022',
      type: 'article',
      title: 'ASGE Standards of Practice Committee: Quality Indicators for Endoscopy',
      authors: ['ASGE Standards of Practice Committee'],
      source: 'Gastrointestinal Endoscopy 2022',
    },
    {
      id: 'usmstf-surveillance-2020',
      type: 'article',
      title: 'USMSTF Guidelines for Colonoscopy Surveillance After Polypectomy',
      authors: ['Lieberman DA', 'Rex DK', 'Winawer SJ'],
      source: 'Gastroenterology 2020',
    },
    {
      id: 'asge-anticoagulation-2023',
      type: 'article',
      title: 'ASGE Guideline: Management of Antithrombotic Agents for Endoscopy',
      authors: ['ASGE Standards of Practice Committee'],
      source: 'Gastrointestinal Endoscopy 2023',
    },
  ],

  crossReferences: [
    { targetId: 'condition-upper-gi', targetType: 'condition', relationship: 'related', label: 'UGI Disorders' },
    { targetId: 'condition-gi-neoplasia', targetType: 'condition', relationship: 'related', label: 'Colorectal Cancer' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'procedures', 'diagnostic methods'],
    keywords: ['endoscopy', 'EGD', 'colonoscopy', 'biopsy', 'polypectomy', 'EUS'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
