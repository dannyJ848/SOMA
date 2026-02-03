/**
 * Colonoscopy - Comprehensive Educational Content
 *
 * Covers colonoscopy including indications, bowel preparation,
 * procedural technique, findings, therapeutic interventions,
  screening guidelines, and complications.
 */

import { EducationalContent } from '../../../types';

export const colonoscopy: EducationalContent = {
  id: 'procedure-colonoscopy',
  type: 'topic',
  name: 'Colonoscopy',
  alternateNames: [
    'Lower Endoscopy',
    'Colonoscopic Examination',
    'Colorectal Cancer Screening Colonoscopy',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Colonoscopy is a medical test where a doctor uses a flexible tube with a camera to look inside your large intestine (colon) to check for problems like polyps, cancer, or inflammation.',
      explanation: `**What is a Colonoscopy?**

A colonoscopy is a test that lets a doctor look at the inside of your entire large intestine (colon) and rectum. The doctor uses a long, thin, flexible tube called a colonoscope that has a tiny camera and light on the end.

**Why is it Done?**

Doctors use colonoscopy to:
- **Screen for cancer**: Find and remove polyps before they become cancer
- **Find problems**: Check for causes of belly pain, bleeding, or changes in bowel habits
- **Follow up**: Monitor people who have had polyps or colon cancer before
- **Treat**: Remove polyps, stop bleeding, or take samples of tissue (biopsy)

**Getting Ready for a Colonoscopy (Bowel Prep)**

The day before your colonoscopy, you need to clean out your colon completely so the doctor can see clearly. This is called bowel preparation:

**Diet Changes:**
- The day before: Only clear liquids (broth, clear juices, water, Jell-O, sports drinks)
- Nothing red or purple (can look like blood)
- No solid food
- Usually, you can't eat or drink anything after midnight

**Laxative Medicine:**
- You'll drink a special liquid that makes you have many bowel movements
- This cleans all the stool out of your colon
- You'll need to be near a bathroom for several hours

**During the Procedure**

1. **Medicine for comfort**: You'll get medicine through an IV to make you sleepy and relaxed. Most people don't remember anything.

2. **Position**: You'll lie on your left side.

3. **The exam**: The doctor gently inserts the colonoscope into your rectum and moves it through your entire colon. The camera shows pictures on a screen.

4. **Length**: Usually takes 30-60 minutes.

5. **If polyps are found**: The doctor can usually remove them during the exam.

**After the Procedure**

- You'll rest for about 30 minutes while the medicine wears off
- You might feel bloated or have mild gas discomfort
- Someone must drive you home because of the medicine
- You can usually eat normally the next day
- The doctor will discuss findings with you (or at a follow-up visit)

**How Often Should You Get One?**

Colonoscopy is the best way to prevent colon cancer. The usual recommendations:

| Age | Risk Level | How Often |
|-----|------------|-----------|
| 45+ | Average risk | Every 10 years |
| 40+ | Higher risk (family history) | Every 5 years |
| Earlier | Very high risk | Every 1-2 years |

**Is it Safe?**

Yes, colonoscopy is very safe. Serious problems are very rare (less than 1 in 1,000).

**Does it Hurt?**

Most people feel no pain because of the sedation medicine. You might feel some pressure or bloating afterward from air used during the exam.`,
      keyTerms: [
        { term: 'colonoscope', definition: 'A long, thin, flexible tube with a camera used to examine the colon', pronunciation: 'koh-LON-oh-scope' },
        { term: 'polyp', definition: 'A small growth in the colon that can sometimes turn into cancer', pronunciation: 'POL-ip' },
        { term: 'biopsy', definition: 'Taking a tiny sample of tissue to examine under a microscope', pronunciation: 'BY-op-see' },
        { term: 'sedation', definition: 'Medicine that makes you relaxed and sleepy during a procedure' },
        { term: 'bowel preparation', definition: 'Cleaning out the colon with laxatives before a colonoscopy' },
      ],
      analogies: [
        'A colonoscope is like a flexible flashlight that can bend around corners to see inside your colon.',
        'Bowel prep is like spring cleaning for your colon - it clears everything out so the doctor can see clearly.',
        'Polyps are like small mushrooms growing on the inside of the colon - removing them prevents cancer.',
      ],
      examples: [
        'A person turning 45 with no family history of colon cancer should schedule their first colonoscopy.',
        'If a colonoscopy finds a small polyp, the doctor removes it during the same procedure - no need for another surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Colonoscopy is the gold standard for colorectal cancer screening and diagnosis of colonic disease. It allows direct visualization, biopsy, and therapeutic intervention. Proper bowel preparation is essential for adequate examination.',
      explanation: `## Overview

Colonoscopy is the definitive examination of the entire colon and terminal ileum using a flexible endoscope. It serves both diagnostic and therapeutic roles.

## Indications

**Diagnostic:**
- GI bleeding (occult or overt)
- Change in bowel habits
- Unexplained abdominal pain
- Chronic diarrhea
- Iron deficiency anemia
- Abnormal imaging findings (CT, barium enema)
- Surveillance after cancer resection or polypectomy

**Screening:**
- Average-risk individuals starting at age 45
- Family history of colorectal cancer or polyps
- Personal history of polyps or cancer
- Inflammatory bowel disease surveillance

**Therapeutic:**
- Polypectomy
- Hemostasis for bleeding
- Foreign body removal
- Decompression of volvulus or obstruction
- Stricture dilation

## Bowel Preparation

**Goal:** Remove all solid and liquid stool to allow complete mucosal visualization.

**Split-Dose Preparation (Preferred):**
- Half the prep the evening before
- Second half 4-6 hours before procedure
- Clear liquids only after prep starts
- Nothing by mouth 2-3 hours before procedure

**Common Regimens:**
- **PEG-based solutions**: GoLYTELY, NuLYTELY (large volume, safe electrolytes)
- **PEG + electrolytes**: MiraLAX + Gatorade (better tolerated)
- **Low-volume options**: Prepopik, SuPrep, MoviPrep
- **Sodium phosphate**: Contraindicated in kidney disease, elderly

**Diet:**
- Day before: Clear liquids only
- Avoid red/purple foods/drinks
- No solid food
- Increase hydration

**Quality Assessment:**
- Boston Bowel Preparation Scale (0-3 each segment, max 9)
- Adequate: Score ≥6, each segment ≥2
- Inadequate prep associated with missed lesions, increased costs

## Procedure

**Sedation Options:**
- Moderate sedation: Midazolam + fentanyl (most common)
- Deep sedation: Propofol (increasing use)
- Patient comfort and safety priority

**Equipment:**
- Colonoscope: 160-180 cm length
- Video processor and light source
- Insufflation: CO2 preferred (less post-procedure pain)
- Suction channel
- Working channel for instruments

**Technique:**
1. Position: Usually left lateral, may change during
2. Digital rectal examination
3. Scope insertion under direct visualization
4. Navigation to cecum (identified by landmarks)
5. Terminal ileum intubation (if indicated)
6. Careful withdrawal with inspection
7. Therapeutic interventions as needed

**Cecal landmarks:**
- Appendiceal orifice
- Ileocecal valve
- Taenia coli converging
- Transillumination in right lower quadrant

## Common Findings

**Normal:**
- Healthy mucosa with vascular pattern
- Haustral markings
- No masses, lesions, or inflammation

**Colorectal Polyps:**
- Hyperplastic: Small, usually distal, benign
- Adenomatous: Precancerous, vary in size, architecture
- Serrated: May have malignant potential
- See Polyp section below

**Diverticulosis:**
- Pockets in colon wall
- Common in sigmoid
- Usually asymptomatic

**Inflammation:**
- Colitis patterns
- Ulcerations
- Mucosal changes

**Vascular Abnormalities:**
- Angiodysplasia
- Hemorrhoids
- Varices

## Polyp Management

**Classification by Size:**

| Size | Management |
|------|------------|
| Diminutive (<5mm) | Usually cold biopsy or cold snare; can leave if hyperplastic |
| Small (5-9mm) | Cold snare polypectomy |
| Large (10-19mm) | Endoscopic mucosal resection (EMR) |
| Giant (≥20mm) | EMR or referral to specialist; consider surgery |

**Pathology Types:**
- **Tubular adenoma**: Least malignant potential
- **Villous adenoma**: Highest malignant potential
- **Tubulovillous**: Intermediate risk
- **Serrated adenoma**: Requires complete removal

## Screening Guidelines

**Average Risk:**
- Start at age 45 (USPSTF 2021 update)
- Repeat every 10 years if normal
- Continue to age 75 (individualize 75-85)

**Increased Risk:**
- Family history (first-degree relative): Start 10 years before relative's diagnosis or age 40, whichever is first; repeat every 5 years
- Personal history of adenomas: Based on number and size of adenomas

**High Risk (Advanced adenoma):**
- Repeat in 3 years

**Inflammatory Bowel Disease:**
- Ulcerative colitis: Start 8-10 years after diagnosis, then every 1-2 years
- Crohn's colitis: Similar approach`,
      keyTerms: [
        { term: 'cecum', definition: 'The beginning of the large intestine; the goal of colonoscope insertion', pronunciation: 'SEE-kum' },
        { term: 'ileocecal valve', definition: 'Valve between the small intestine (ileum) and large intestine (cecum)', pronunciation: 'ill-ee-oh-SEE-kal' },
        { term: 'adenoma', definition: 'A benign tumor that can become cancerous; precancerous polyp', pronunciation: 'ad-eh-NO-ma' },
        { term: 'diverticulosis', definition: 'Small pouches in the colon wall; common with age', pronunciation: 'dy-ver-tik-yoo-LOH-sis' },
        { term: 'surveillance', definition: 'Repeated examinations to monitor for disease recurrence or progression' },
      ],
      analogies: [
        'The colonoscope reaching the cecum is like reaching the end of the road - the doctor has successfully navigated the entire colon.',
        'Polyps removed during colonoscopy are like weeding a garden - removing problems before they spread.',
      ],
    },
    3: {
      level: 3,
      summary: 'Colonoscopy requires meticulous technique for cecal intubation, thorough mucosal inspection during withdrawal, and appropriate management of detected lesions. Adenoma detection rate is a key quality metric. Advanced polypectomy techniques enable endoscopic treatment of larger lesions.',
      explanation: `## Technical Performance

### Cecal Intubation

**Target Rate:** >95% in screening colonoscopies
**Time to Cecum:** Ideally <10 minutes

**Techniques for Difficult Passage:**

**Loop Reduction:**
- Identify loop formation by abdominal pressure
- Withdraw and torque to reduce
- May require abdominal counterpressure

**Position Changes:**
- Supine: Often helps through transverse colon
- Right lateral: May help at hepatic flexure
- Left lateral: Standard starting position

**Scope Manipulation:**
- Torque combined with advancement
- "Steering" rather than pushing
- Hook and withdraw technique
- Water exchange (may reduce discomfort)

### Withdrawal and Inspection

**Critical Component:** Most pathology detection occurs during withdrawal

**Target Withdrawal Time:** ≥6 minutes for normal colonoscopies

**Systematic Examination:**
- Examine behind folds
- Wash residual fluid
- Inspect flexures carefully (blind spots)
- Examine rectum retroflexion
- Photo-documentation of landmarks

**Quality Metric - Adenoma Detection Rate (ADR):**

| Endoscopist Category | ADR Target |
|---------------------|------------|
| Overall | ≥25% |
| Male patients | ≥30% |
| Female patients | ≥20% |

Higher ADR correlates with:
- Lower interval cancer rates
- Lower cancer mortality
- Better quality endoscopy

### Polypectomy Techniques

**Cold Snare Polypectomy (4-9mm polyps):**
- Preferred over hot biopsy forceps
- Lower perforation risk
- Complete removal with clear margins
- No cautery artifact

**Cold Forceps Polypectomy (1-3mm polyps):**
- Acceptable for diminutive polyps
- May need multiple bites
- Piecemeal removal common

**Hot Snare Polypectomy (≥10mm polyps):**
- Electrocautery current cutting and coagulation
- Reduce bleeding risk
- Ensure complete capture
- Mark site if large or concern for residual

**Endoscopic Mucosal Resection (EMR):**

| Indication | Technique |
|------------|-----------|
| 10-20mm polyps | Injection + snare resection |
| Large sessile polyps | Lift, assess, resect |
| Laterally spreading tumors | Piecemeal EMR |

**Injection Solutions:**
- Normal saline + methylene blue (stains)
- Alternatively: Dilute epinephrine (helps with hemostasis)

**Resection Technique:**
1. Submucosal injection to lift lesion
2. Assess lift sign (non-lifting suggests deeper invasion)
3. Snare capture of elevated lesion
4. Electrocautery resection
5. Retrieve specimen for pathology

**Endoscopic Submucosal Dissection (ESD):**
- En bloc resection of larger lesions
- Specialist technique
- Lower recurrence, higher complication risk

### Lesion Characterization

**Narrow Band Imaging (NBI):**
- Optical enhancement of vascular patterns
- Distinguishes adenomatous vs hyperplastic
- Real-time optical diagnosis possible

**Pit Pattern Classification (Kudo):**
- Type I-II: Non-neoplastic
- Type III-IV: Neoplastic
- Type V: Invasive carcinoma

## Advanced Therapeutic Procedures

**Hemostasis:**

| Method | Indication |
|--------|------------|
| Injection (epinephrine) | Active bleeding, before other methods |
| Thermal (APC, bipolar) | Vascular lesions, oozing |
| Clips (through-the-scope) | Visible vessel, post-polypectomy |
| Band ligation | Diverticular bleeding |

**Stricture Dilation:**
- Balloon dilation (gradual)
- Through-the-scope balloons
- Savory dilation (less common)
- Rule of 3: Don't exceed 3 sizes in one session

**Foreign Body Removal:**
- Retrieval nets, forceps, snares
- Overtube for sharp objects
- Consider surgery if unsafe

## Complications

**Immediate:**
- Bleeding (0.1-0.6%): More common with polypectomy, anticoagulation
- Perforation (0.01-0.1%): More with therapeutic procedures
- Cardiopulmonary (sedation-related)
- Post-polypectomy syndrome (transmural burn without perforation)

**Delayed:**
- Delayed bleeding (up to 2 weeks post-polypectomy)
- Infection (rare in routine colonoscopy)

**Complication Management:**
- Bleeding: Observation, repeat colonoscopy, endoscopic therapy, or surgery
- Perforation: Surgery for large perforations; conservative for small if stable
- Post-polypectomy syndrome: Antibiotics, bowel rest, IV fluids`,
      keyTerms: [
        { term: 'adenoma detection rate (ADR)', definition: 'Percentage of screening colonoscopies where at least one adenoma is found; key quality metric' },
        { term: 'cecal intubation rate', definition: 'Percentage of colonoscopies reaching the cecum; quality metric (target >95%)' },
        { term: 'withdrawal time', definition: 'Time spent withdrawing the colonoscope while examining the mucosa; target ≥6 minutes' },
        { term: 'lift sign', definition: 'Elevation of a polyp after submucosal injection; absence suggests invasive cancer' },
        { term: 'post-polypectomy syndrome', definition: 'Transmural burn without perforation causing fever, pain, leukocytosis; managed conservatively' },
        { term: 'piecemeal resection', definition: 'Removing a large polyp in multiple pieces; increases recurrence risk' },
        { term: 'interval cancer', definition: 'Colorectal cancer diagnosed between scheduled screening colonoscopies' },
      ],
      clinicalNotes: 'ADR is the most important quality metric - each 1% increase in ADR reduces interval cancer risk by 3-6%. When a polyp is found, document size, morphology, and location precisely. Consider tattooing large polyp sites for future localization.',
    },
    4: {
      level: 4,
      summary: 'Expert colonoscopy encompasses advanced polypectomy techniques, management of anticoagulation, recognition of subtle lesions including serrated polyps, and strategies for difficult procedures. Quality improvement initiatives focus on improving adenoma detection while minimizing complications.',
      explanation: `## Advanced Polyp Management

### Serrated Polyposis Syndrome

**Diagnostic Criteria (WHO):**
1. ≥5 serrated polyps proximal to sigmoid, with 2 ≥10mm
   OR
2. Any serrated polyps proximal to sigmoid in a first-degree relative
   OR
3. >20 serrated polyps of any size

**Management:**
- High lifetime cancer risk (40-70%)
- Annual colonoscopy
- Consider genetic testing
- Consider colectomy if control not possible

### Sessile Serrated Lesions (SSLs)

**Challenges:**
- Subtle appearance: Mucus cap, indistinct borders
- Proximal colon location
- Often missed on colonoscopy
- Malignant potential similar to adenomas

**Detection:**
- Use NBI or other image enhancement
- Careful inspection of proximal colon
- Wash mucus cap
- Longer inspection time

**Resection:**
- EMR often required for larger lesions
- Higher recurrence rates than conventional adenomas
- Close surveillance required

## Difficult Colonoscopy

### Inadequate Bowel Preparation

**Strategies:**
- Split-dose prep (most effective)
- Increased prep volume
- Adjuncts: Simethicone, prokinetics
- Rescue prep same day if severe

**Management:**
- If adequate but suboptimal: Repeat in 1 year
- If inadequate: Repeat within 1 year
- Document prep quality

### Failed Cecal Intubation

**Causes:**
- Fixed colonic anatomy (adhesions, phlegmon)
- Redundant colon (elongated, looping)
- Patient factors (pain, poor tolerance)
- Obstructing mass

**Strategies:**
- Change patient position
- Abdominal pressure
- Water exchange method
- Smaller scope (pediatric colonoscope)
- Variable stiffness scope
- Deep sedation

**Alternatives if colonoscopy fails:**
- CT colonography
- Flexible sigmoidoscopy + barium enema
- Capsule colonoscopy

### Anticoagulation Management

**Periprocedural Thrombotic Risk:**

| Risk Category | Examples | Hold Anticoagulation? |
|---------------|----------|----------------------|
| Low | Mechanical aortic valve | No |
| Moderate | AFib, VTE >3 months ago | Individualize |
| High | VTE <3 months, mechanical mitral valve | Bridge with heparin |

**Polypectomy Bleeding Risk:**

| Procedure | Bleeding Risk | Management |
|-----------|---------------|-------------|
| Diagnostic, cold forceps | Low | Continue anticoagulants |
| Hot biopsy, small snare | Moderate | Hold warfarin; continue DOACs? |
| Large polypectomy, EMR | High | Hold warfarin 3-5 days; hold DOACs 2-3 days |

**Post-Polypectomy Bleeding Management:**

**Immediate:**
- Endoscopic evaluation
- Hemostasis: Clip, thermal, epinephrine
- May need repeat colonoscopy

**Delayed (presents up to 2 weeks):**
- Hospital admission
- IV fluids, blood transfusion if needed
- Urgent colonoscopy with hemostasis
- Consider interventional radiology if rebleeding

## Quality Improvement

### Key Quality Metrics

**Process Measures:**
- Cecal intubation rate >95%
- Photo-documentation of landmarks
- Withdrawal time ≥6 minutes
- Adequate bowel preparation rate >85%

**Outcome Measures:**
- Adenoma detection rate ≥25%
- Advanced adenoma detection rate
- Interval cancer rate
- Complication rate <1%

### Enhancing ADR

**Position Change During Withdrawal:**
- Right and left lateral turns
- Improves visualization of flexures
- May increase ADR by 10-20%

**Water Exchange:**
- Water instead of air during insertion
- Better distension, less looping
- Higher ADR in some studies

**Second Observer:**
- Trainee participation increases ADR
- Computer-aided detection (AI) emerging

### Capnography Monitoring

**Why Use:**
- Detects respiratory depression earlier than pulse oximetry
- Standard of care for propofol sedation
- May reduce hypoxic events

## Special Populations

### Inflammatory Bowel Disease

**Surveillance Colonoscopy:**
- Start 8-10 years after pancolitis diagnosis
- Start 12-15 years after left-sided colitis
- Every 1-2 years thereafter
- Four-quadrant biopsies every 10 cm
- Targeted biopsies of visible lesions

**Dysplasia Management:**
- Visible dysplasia: Endoscopic resection if possible
- Invisible high-grade dysplasia: Colectomy recommended
- Invisible low-grade dysplasia: Controversial; many recommend colectomy

### Hereditary Cancer Syndromes

**Lynch Syndrome (HNPCC):**
- Colonoscopy every 1-2 years starting age 20-25
- Full colonoscopy required (proximal lesion risk)
- Consider chromoendoscopy

**FAP:**
- Annual colonoscopy starting age 10-12
- Colectomy when polyposis burden too high

## Controversies and Evolving Practice

**Screening Age:**
- USPSTF now recommends starting at 45 (was 50)
- Reflects rising CRC incidence in younger adults

**Interval After Negative Colonoscopy:**
- 10 years for average risk
- Shorter if bowel prep suboptimal
- Shorter if family history

**FIT vs Colonoscopy:**
- FIT: Annual, non-invasive, lower sensitivity
- Colonoscopy: 10-year interval, invasive, higher sensitivity
- Both acceptable screening options`,
      keyTerms: [
        { term: 'sessile serrated lesion (SSL)', definition: 'Subtle precancerous polyp with malignant potential; often proximal and difficult to detect' },
        { term: 'serrated polyposis syndrome', definition: 'Condition with multiple serrated polyps; high colorectal cancer risk' },
        { term: 'bridge therapy', definition: 'Using short-acting anticoagulant (heparin) when warfarin is held before procedure' },
        { term: 'chromoendoscopy', definition: 'Spraying dye during colonoscopy to enhance lesion detection' },
        { term: 'computer-aided detection', definition: 'AI systems that highlight potential polyps during colonoscopy' },
        { term: 'water exchange', definition: 'Using water instead of air during colonoscope insertion to reduce looping and improve comfort' },
      ],
      clinicalNotes: 'SSLs are commonly missed - use image enhancement, take your time in the proximal colon, and wash off mucus caps. For large polyps, consider referral to a specialist if EMR/ESD expertise is not available. Tattoo the site of any large polyp or cancer for surgical localization.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art colonoscopy practice integrates advanced imaging technologies, AI-assisted lesion detection, sophisticated resection techniques, quality benchmarking, and personalized screening approaches based on individual risk assessment and emerging genetic insights.',
      explanation: `## Advanced Imaging Modalities

### Image-Enhanced Endoscopy (IEE)

**Narrow Band Imaging (NBI):**
- Optical filter technology (415nm, 540nm)
- Enhances mucosal and vascular patterns
- Predicts histology with ~90% accuracy for diminutive polyps
- NBI International Colorectal Endoscopic (NICE) classification:
  - Type 1: Hyperplastic (67% diagnostic confidence threshold)
  - Type 2: Tubular adenoma (can "resect and discard")
  - Type 3: Deep submucosal invasive cancer

**Flexible Spectral Imaging Color Enhancement (FICE):**
- Computer selects specific wavelengths
- Similar efficacy to NBI
- Available on Fujinon systems

**Blue Laser Imaging (BLI) and LINK:**
- Laser-based light sources
- Available on Fujinon systems
- Combined with contrast (LINK) for improved visualization

**Linked Color Imaging (LCI):**
- Enhances red color contrast
- Improves detection of flat lesions
- Particularly useful for SSLs

### AI and Computer Vision

**Computer-Aided Detection (CADe):**
- Real-time polyp detection
- Meta-analysis: 96% sensitivity, 92% specificity
- Increases ADR by 10-50%
- FDA-approved systems available (GI Genius, others)

**Computer-Aided Diagnosis (CADx):**
- Real-time histology prediction
- "Resect and discard" strategy
- Reduce pathology costs
- Diminutive rectosigmoid polyps: Optical diagnosis acceptable

**Quality Monitoring:**
- Automated withdrawal time tracking
- Withdrawal speed monitoring
- Photodocumentation verification
- Blind spot detection

## Advanced Resection Techniques

### Endoscopic Submucosal Dissection (ESD)

**Indications:**
- Laterally spreading tumors ≥20mm
- Lesions with fibrosis (failed EMR)
- Lesions with suspicion of shallow submucosal invasion
- En bloc resection preferred

**Technique:**
1. Mucosal marking around lesion
2. Submucosal injection
3. Circumferential mucosal incision
4. Submucosal dissection with specialized knife
5. Complete en bloc removal

**Knives:**
- Dual knife (Olympus)
- Triangle-tip knife (Olympus)
- Flush knife (Fujifilm)
- Hybrid knife (ERBE)

**Outcomes:**
- En bloc rate: >90%
- Curative resection: 80-90%
- Recurrence: <2%
- Perforation: 2-5%

### Full-Thickness Resection

**Over-the-Scope Clip (OTSC) Full-Thickness Resection:**
- Combines OTSC with full-thickness resection
- For difficult lesions not amenable to EMR/ESD
- Limited availability

## Colorectal Cancer Screening Revolution

### Multi-Modal Screening

**USPSTF Tier 1 Recommendations:**
- Colonoscopy every 10 years
- FIT annually
- CT colonography every 5 years
- Flexible sigmoidoscopy every 5 years (+ FIT annually)
- FIT-DNA every 1-3 years

**Risk-Adapted Screening:**

| Risk Category | Starting Age | Interval |
|---------------|--------------|----------|
| Average | 45 | 10 years |
| One 1st-degree relative <60 | 40 | 5 years |
| One 1st-degree relative ≥60 | 40 | 10 years |
| Multiple relatives | 40 or 10 years before earliest | 3-5 years |
| Lynch syndrome | 20-25 | 1-2 years |
| FAP | 10-12 | Annually |

### FIT as Primary Screening

**Advantages:**
- Non-invasive
- High sensitivity for cancer (90%+)
- Acceptable sensitivity for advanced adenoma (40-50%)
- Cost-effective
- Improves screening uptake

**Limitations:**
- Limited sensitivity for serrated polyps
- Requires annual testing
- Positive test requires colonoscopy

**Implementation:**
- Most screening programs globally use FIT
- US increasingly adopting FIT-first approach
- FIT "tiered" approach: FIT first, colonoscopy for positive

## Quality Benchmarking

### ADR Standards by Specialty

| Specialty | ADR Benchmark |
|-----------|---------------|
| Gastroenterology | ≥25% |
| Primary Care | ≥20% |
| Surgeons | ≥20% |

### High-Performer Characteristics

**Technique Factors:**
- Withdrawal time 9-10 minutes (not just 6)
- Position changes during withdrawal
- Dynamic bowel preparation adjustment
- Regular audit and feedback

**Endoscopist Factors:**
- Fellowship training
- Higher procedure volume
- Attention to cleaning folds
- Use of IEE

## Genetic and Molecular Considerations

### Serrated Pathway

**Molecular Features:**
- BRAF mutation
- CIMP-high
- Microsatellite instability (MSI)
- MLH1 promoter methylation

**Clinical Implications:**
- More proximal
- More likely to be missed
- More rapid progression in some cases
- Interval cancers often serrated

### Post-Polypectomy Surveillance

**US Multi-Society Task Force (2020) Recommendations:**

| Finding | Interval |
|---------|----------|
| No adenomas | 10 years |
| 1-2 tubular adenomas <10mm | 7-10 years |
| 3-4 tubular adenomas <10mm | 3-5 years |
| ≥5 adenomas or ≥1 ≥10mm | 3 years |
| Serrated lesion ≥10mm or with dysplasia | 3 years |
| SSL ≥10mm | 3 years |

## Emerging Technologies

**Robotic Endoscopy:**
- Autonomous scope advancement
- May reduce operator dependence

**Capsule Colonoscopy:**
- Second-generation capsules
- Useful for incomplete colonoscopy
- Not yet screening standard

**Molecular Endoscopy:**
- Fluorescent probes
- Real-time molecular characterization
- Research stage`,
      keyTerms: [
        { term: 'NICE classification', definition: 'NBI International Colorectal Endoscopic classification for predicting polyp histology based on vascular and surface patterns' },
        { term: 'resect and discard', definition: 'Strategy of removing small polyps and not sending for pathology when optical diagnosis is confident' },
        { term: 'en bloc resection', definition: 'Removing a lesion in one piece; allows complete pathological assessment' },
        { term: 'FIT-DNA', definition: 'Stool test combining fecal immunochemical test with DNA markers; Cologuard' },
        { term: 'CIMP-high', definition: 'CpG island methylator phenotype-high; molecular feature of some serrated polyps and cancers' },
        { term: 'interval cancer', definition: 'Colorectal cancer diagnosed between scheduled screening examinations; often reflects missed lesions or rapid progression' },
      ],
      clinicalNotes: `Quality improvement strategies:

1. **Measure and track ADR**: The single most important quality metric. Aim for >25% overall.

2. **Use split-dose prep**: Significantly improves preparation quality and ADR.

3. **Target ≥9 minute withdrawal time**: Higher ADRs correlate with longer withdrawal times.

4. **Employ position changes**: Right and left lateral turns during withdrawal improve detection.

5. **Consider image enhancement**: NBI or other IEE can improve polyp characterization and detection.

6. **Audit and feedback**: Regular performance review improves quality.

7. **Adopt "resect and discard"**: For diminutive polyps when confident in optical diagnosis.

8. **Personalize surveillance**: Base intervals on individual risk, not rigid protocols.`,
    },
  },

  media: [
    {
      id: 'colonoscopy-procedure',
      type: 'diagram',
      filename: 'colonoscopy-procedure.svg',
      title: 'Colonoscopy Procedure',
      description: 'Diagram showing colonoscope insertion and key anatomical landmarks',
    },
    {
      id: 'polyp-types',
      type: 'image',
      filename: 'colonic-polyp-types.jpg',
      title: 'Colonic Polyp Types',
      description: 'Images of different polyp types: adenomatous, serrated, hyperplastic',
    },
    {
      id: 'bowel-prep-guide',
      type: 'diagram',
      filename: 'bowel-preparation-instructions.svg',
      title: 'Bowel Preparation Instructions',
      description: 'Step-by-step guide for colonoscopy bowel preparation',
    },
  ],

  citations: [
    {
      id: 'usmstf-colonoscopy-2021',
      type: 'article',
      title: 'Colonoscopy Surveillance After Colorectal Cancer Resection: US Multi-Society Task Force Recommendations',
      authors: ['ASGE', 'ACG', 'AGA'],
      source: 'Gastroenterology',
    },
    {
      id: 'uspstf-crc-screening-2021',
      type: 'article',
      title: 'Colorectal Cancer Screening: US Preventive Services Task Force Recommendation Statement',
      source: 'JAMA',
      chapter: '325(21):2115-2123',
    },
    {
      id: 'asge-adenoma-detection',
      type: 'article',
      title: 'Adenoma Detection Rate Benchmarking',
      source: 'Gastrointestinal Endoscopy',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
    { targetId: 'condition-gi-cancers', targetType: 'condition', relationship: 'related', label: 'Colorectal Cancer' },
    { targetId: 'condition-inflammatory-bowel-disease', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'Upper Endoscopy' },
  ],

  tags: {
    systems: ['digestive', 'gastrointestinal'],
    topics: ['gastroenterology', 'procedures', 'screening', 'preventive medicine'],
    keywords: ['colonoscopy', 'polypectomy', 'colorectal cancer screening', 'bowel preparation', 'adenoma detection'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default colonoscopy;
