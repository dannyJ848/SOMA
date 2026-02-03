/**
 * Hematuria - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hematuria: EducationalContent = {
  id: 'condition-hematuria',
  type: 'condition',
  name: 'Hematuria',
  alternateNames: ['Blood in Urine', 'Hematuria', 'Urinary Bleeding'],
  hpoId: 'HP:0000092',

  levels: {
    1: {
      level: 1,
      summary: 'Hematuria is the presence of blood in the urine, which can be visible to the naked eye or detected only under a microscope, and requires medical evaluation to find the cause.',
      explanation: `Blood in the urine is called hematuria. It can range from pink, red, or brown urine to microscopic amounts only detected on lab tests.

**Types of Hematuria:**
- **Gross hematuria:** You can see blood in your urine (pink, red, or brown)
- **Microscopic hematuria:** Blood can only be seen under a microscope

**Possible Causes:**
- Urinary tract infection
- Kidney infection
- Kidney stones
- Enlarged prostate (in men)
- Kidney disease
- Injury to the urinary tract
- Intense exercise
- Bladder or kidney cancer (more serious)

**What to Watch For:**
- Pink, red, or brown urine
- Blood clots in urine
- Pain during urination
- Pain in your back or side
- Frequent urination
- Fever

**When to See a Doctor:**
- Any visible blood in your urine
- Blood in urine without pain (possible cancer)
- Blood clots in urine
- Frequent episodes of blood in urine`,
      keyTerms: [
        { term: 'hematuria', definition: 'Blood in the urine' },
        { term: 'gross hematuria', definition: 'Blood in urine that is visible to the naked eye' },
        { term: 'microscopic hematuria', definition: 'Blood in urine that can only be seen under a microscope' },
        { term: 'urinary tract', definition: 'The system that makes and carries urine including kidneys, ureters, bladder, and urethra' },
      ],
      analogies: [
        'Finding blood in your urine is like seeing a check engine light come on in your car—it\'s a warning sign that something needs attention.',
        'The urinary tract is like a plumbing system—if you see water where it shouldn\'t be, there\'s a leak somewhere.'
      ],
      examples: [
        'A 50-year-old man notices his urine has turned reddish and contains small blood clots—he needs evaluation for possible bladder cancer.',
        'A woman with burning urination and blood in her urine likely has a urinary tract infection.',
        'After a long run, a 25-year-old athlete has slight blood in urine that resolves on its own—this can be "runner\'s hematuria."'
      ],
      patientCounselingPoints: [
        'Don\'t ignore visible blood in your urine, even if it happens only once',
        'Certain foods (beets, berries) and medications can turn urine red—mention these to your doctor',
        'Stay hydrated to help flush your urinary system',
        'Seek immediate care if you have blood clots and difficulty urinating'
      ],
    },
    2: {
      level: 2,
      summary: 'Hematuria evaluation includes urine microscopy to confirm true hematuria and rule out mimics like myoglobin, porphyrins, or foods, followed by workup for glomerular vs non-glomerular causes.',
      explanation: `## Confirming True Hematuria

**Urine Microscopy:**
- > 3 RBCs per high-powered field (hpf) on 2 of 3 samples
- **Dipstick:** Detects hemoglobin, not RBCs (can be false positive)
- **Microscopy:** Confirms actual red blood cells

**Mimics of Hematuria (False Positives):**
- Myoglobin (rhabdomyolysis)
- Porphyrins (porphyria)
- Foods: Beets, berries, rhubarb
- Medications: Rifampin, phenazopyridine, warfarin
- Menstruation contamination
- Severe exercise

## Differential Diagnosis

**Glomerular (Nephritic) Hematuria:**
- **Causes:** GN, IgA nephropathy, Alport syndrome
- **Clues:** Dysmorphic RBCs, RBC casts, proteinuria
- **Associated with:** Hypertension, edema, elevated creatinine

**Non-Glomerular Hematuria:**
- **Causes:** Stones, infection, cancer, trauma, BPH
- **Clues:** Normal-shaped RBCs, no casts, isolated hematuria
- **Workup:** Imaging, cystoscopy

## Common Causes by Age

**Young Adults (< 40):**
- Infection (UTI)
- Kidney stones
- Exercise-induced hematuria
- Glomerular disease

**Middle-Aged (40-60):**
- Stones
- Infection
- BPH (men)
- Early bladder cancer (especially smokers)

**Elderly (> 60):**
- Bladder cancer
- Prostate cancer
- BPH
- Renal cell carcinoma

## Risk Factors for Malignancy
- Age > 60
- Smoking (major risk factor for bladder cancer)
- Occupational exposures (dyes, rubber, leather)
- Prior pelvic radiation
- Schistosomiasis (endemic areas)
- Analgesic abuse (renal cell carcinoma)

## Diagnostic Approach

**Required Workup for Microscopic Hematuria:**
- Urine culture (rule out infection)
- Cystoscopy (if age > 50 or risk factors)
- CT urogram or renal ultrasound

**For Gross Hematuria:**
- Urine culture
- CT urogram (preferred)
- Cystoscopy (almost always indicated)`,
      keyTerms: [
        { term: 'dysmorphic RBCs', definition: 'Misshapen red blood cells indicating glomerular origin' },
        { term: 'RBC casts', definition: 'Red blood cells clumped in protein cast; indicates glomerular bleeding' },
        { term: 'proteinuria', definition: 'Protein in the urine; suggests kidney disease' },
        { term: 'cystoscopy', definition: 'Visual examination of the inside of the bladder with a scope' },
        { term: 'CT urogram', definition: 'CT scan that images the entire urinary tract after contrast injection' },
        { term: 'myoglobin', definition: 'Muscle protein that can turn urine positive for blood without actual RBCs' },
      ],
      analogies: [
        'Glomerular hematuria is like bleeding inside a filter (the kidney), while non-glomerular is like bleeding in the pipes (urinary tract).'
      ],
      examples: [
        'RBC casts and proteinuria suggest glomerular hematuria (kidney inflammation) rather than bladder cancer.',
        'A 65-year-old male smoker with gross hematuria needs cystoscopy and CT urogram to rule out bladder cancer.',
        'Beet consumption can cause reddish urine that mimics hematuria but has no RBCs on microscopy.'
      ],
      patientCounselingPoints: [
        'Smoking is the most significant modifiable risk factor for bladder cancer—quitting reduces risk',
        'Blood in urine even without pain needs evaluation—cancer often presents as painless hematuria',
        'Repeat testing may be needed to confirm persistent microscopic hematuria',
        'Ask about foods and medications that can color your urine'
      ],
    },
    3: {
      level: 3,
      summary: 'Hematuria evaluation algorithm incorporates AUA guidelines for imaging and cystoscopy based on risk stratification, with attention to distinguishing glomerular from non-glomerular bleeding.',
      explanation: `## AUA Guidelines for Microscopic Hematuria Evaluation

**Definition:** ≥ 3 RBCs/hpf on 2 of 3 urine samples

**Risk Stratification:**

**Low Risk (no imaging or cystoscopy needed initially):**
- Age < 50
- No smoking history
- < 25 RBCs/hpf

**Intermediate Risk:**
- Age 50-60
- Smoking history < 10 pack-years
- 25-50 RBCs/hpf

**High Risk:**
- Age > 60
- Smoking history > 10 pack-years
- > 50 RBCs/hpf

**Workup by Risk Category:**

| Risk | Imaging | Cystoscopy |
|------|---------|------------|
| Low | Renal ultrasound | No |
| Intermediate | Renal ultrasound or CT urogram | Consider |
| High | CT urogram | Yes |

## Imaging Options

**CT Urogram (Gold Standard):**
- 3-phase scan: arterial, nephrographic, excretory
- Detects renal masses, stones, urothelial tumors
- Sensitivity > 95% for bladder cancer > 5mm
- Contraindications: Contrast allergy, renal failure

**Renal Ultrasound:**
- No contrast required
- Good for renal masses, hydronephrosis
- Poor for small urothelial tumors
- Lower sensitivity for bladder cancer

**MRI Urogram:**
- Alternative for contrast allergy or renal failure
- Expensive, less available
- Good for renal mass characterization

## Cystoscopy

**Indications:**
- Gross hematuria
- Microscopic hematuria with risk factors
- Abnormal imaging with suspicious bladder

**Procedure:**
- Flexible cystoscopy (office-based)
- Rigid cystoscopy (OR)
- Visualize entire bladder (ureteral orifices, trigone, vault)
- Biopsy any suspicious lesions
- Prostatic urethra evaluation in men

**Findings:**
- **Bladder cancer:** Papillary, solid, or carcinoma in situ
- **Cystitis cystica:** Benign cystic lesions
- **Inflammation:** Suggests infection or radiation cystitis
- **Normal:** Urothelial carcinoma may be flat (carcinoma in situ)

## Glomerular vs Non-Glomerular

**Glomerular Hematuria Features:**
- Dysmorphic RBCs on microscopy
- RBC casts
- Proteinuria (> 500 mg/day)
- Renal insufficiency (elevated creatinine)
- Hypertension
- Edema
- Family history of kidney disease

**Workup for Glomerular Disease:**
- Serum complement (C3, C4)
- ANA, ANCA (vasculitis)
- Anti-GBM (Goodpasture's)
- Anti-phospholipase A2 receptor (membranous nephropathy)
- Serum protein electrophoresis (myeloma)
- Renal biopsy if indicated

**Non-Glomerular Hematuria Features:**
- Normal-shaped RBCs
- No casts, no proteinuria
- Normal creatinine
- Isolated hematuria
- Need urologic workup

## Specific Causes

**Urothelial Carcinoma (Bladder Cancer):**
- **Risk factors:** Smoking (4x risk), occupational exposures
- **Presentation:** Painless gross hematuria (80%)
- **Diagnosis:** Cystoscopy with biopsy
- **Types:** Ta (non-invasive), T1 (invades lamina propria), ≥T2 (muscle invasive)
- **Treatment:** TURBT, BCG for CIS, cystectomy for muscle-invasive

**Renal Cell Carcinoma:**
- **Classic triad:** Hematuria, flank pain, palpable mass (rare all together)
- **Paraneoplastic:** Erythrocytosis, hypercalcemia, Stauffer syndrome
- **Diagnosis:** CT with contrast shows enhancing renal mass
- **Treatment:** Partial or radical nephrectomy

**Kidney Stones:**
- **Symptoms:** Flank pain radiating to groin, hematuria, nausea
- **Diagnosis:** CT stone protocol (non-contrast)
- **Uric acid stones:** Radiolucent on CT but visible on ultrasound

**Urinary Tract Infection:**
- **Symptoms:** Dysuria, frequency, urgency, suprapubic pain
- **Pyelonephritis:** Fever, flank pain, CVA tenderness
- **Diagnosis:** Urinalysis (WBCs, bacteria, nitrites), culture

**Benign Prostatic Hyperplasia:**
- **Hematuria mechanism:** Increased prostate vascularity
- **Evaluation:** DRE, PSA, urinary symptoms
- **Treatment:** 5-ARIs shrink prostate, reduce bleeding

## Exercise-Induced Hematuria

**Causes:**
- Bladder trauma (runner's hematuria)
- Hemolysis from footstrike (march hemoglobinuria)
- Dehydration with concentrated urine

**Characteristics:**
- Resolves within 48-72 hours
- Not concerning if transient
- Persistent hematuria needs evaluation`,
      keyTerms: [
        { term: 'TURBT', definition: 'Transurethral resection of bladder tumor; surgery to diagnose and stage bladder cancer' },
        { term: 'urothelial carcinoma', definition: 'Cancer arising from the urothelial lining of the urinary tract' },
        { term: 'carcinoma in situ', definition: 'Flat cancerous lesion in the urothelium; high-grade, high-risk' },
        { term: 'pack-years', definition: 'Number of years smoked multiplied by packs per day; measure of smoking exposure' },
        { term: 'CVA tenderness', definition: 'Costovertebral angle tenderness; flank pain suggesting kidney inflammation' },
        { term: 'erythrocytosis', definition: 'Increased red blood cell mass; paraneoplastic syndrome of renal cell carcinoma' },
      ],
      clinicalNotes: 'Smoking causes > 50% of bladder cancers—always ask about smoking history. All gross hematuria requires cystoscopy and upper tract imaging. If glomerular hematuria suspected (RBC casts, proteinuria), refer to nephrology rather than urology.',
    },
    4: {
      level: 4,
      summary: 'Complex hematuria evaluation addresses persistent hematuria after negative workup, hereditary causes, anticoagulation considerations, and surveillance strategies for detected malignancies.',
      explanation: `## Persistent Hematuria After Negative Workup

**Definition:**
- Hematuria persisting > 6 months
- Negative cystoscopy and imaging
- No glomerular disease identified

**Possible Causes:**
- Small renal tumors missed on imaging
- Urothelial carcinoma too small to visualize
- Small angiomas or vascular malformations
- Coagulopathy
- Medication effect (antiplatelets, anticoagulants)

**Management:**
- Repeat cystoscopy in 3-12 months
- Consider repeat imaging (especially if initial study suboptimal)
- Urine cytology or FISH (UroVysion)
- Coagulation studies if not already done

## Hereditary Causes of Hematuria

**IgA Nephropathy (Berger's Disease):**
- Most common glomerulonephritis worldwide
- **Presentation:** Gross hematuria 1-2 days after URI
- **Pathology:** Mesangial IgA deposits
- **Course:** Variable, 20-30% progress to ESRD
- **Diagnosis:** Renal biopsy

**Alport Syndrome:**
- **Genetics:** COL4A3, COL4A4, COL4A5 mutations (type IV collagen)
- **Triad:** Hematuria, sensorineural hearing loss, ocular abnormalities
- **Pathology:** Thin basement membrane → GBM thickening and splitting
- **Course:** Progressive to ESRD (especially males)

**Thin Basement Membrane Nephropathy:**
- **Presentation:** Isolated microscopic hematuria
- **Pathology:** Thinned GBM (< 250 nm)
- **Course:** Benign, no progression to renal failure
- **Distinguish from early Alport**

**Polycystic Kidney Disease (ADPKD):**
- Hematuria from cyst rupture or stone
- Family history, large kidneys on imaging
- Associated with intracranial aneurysms

## Hematuria on Anticoagulation

**Key Principle:**
- "Hematuria is a symptom, not a diagnosis"
- Anticoagulation unmasking underlying pathology

**Evaluation Required:**
- Same workup as if not anticoagulated
- Hematuria on warfarin/direct oral anticoagulants needs investigation
- Don't attribute to anticoagulation alone

**Common Causes on Anticoagulation:**
- BPH with vascular prostate
- Bladder cancer
- Kidney stones
- Renal cell carcinoma

**Management:**
- Treat underlying cause
- Hold anticoagulation temporarily if severe
- Resume when bleeding controlled

## Urine Cytology and Molecular Markers

**Urine Cytology:**
- Exfoliated cells examined microscopically
- High specificity for high-grade disease
- Poor sensitivity for low-grade tumors
- Complement to cystoscopy

**FISH (UroVysion):**
- Detects chromosomal abnormalities in urothelial cells
- Chromosomes 3, 7, 17, 9p21
- Higher sensitivity than cytology
- Useful for:
  - Monitoring bladder cancer recurrence
  - Evaluating atypical cytology
  - Patients with negative cystoscopy but persistent hematuria

**Other Markers:**
- **NMP22:** Nuclear matrix protein
- **BTA stat:** Bladder tumor antigen
- **Cystoscopy remains gold standard**

## Bladder Cancer Surveillance

**Low-Grade Ta Tumors:**
- Cystoscopy at 3 months, then 6-12 months
- If recurrent, more frequent surveillance

**High-Grade T1/CIS:**
- Cystoscopy every 3 months for 2 years
- Every 6 months for 2 years
- Then annually

**Upper Tract Surveillance:**
- For high-grade bladder cancer
- Annual CT urogram
- Risk of upper tract recurrence

## Pregnancy-Associated Hematuria

**Causes:**
- Physiologic hydronephrosis (compression by uterus)
- Increased UTI risk
- Kidney stones
- Pre-existing conditions

**Imaging Considerations:**
- Ultrasound first-line
- MRI without contrast if needed
- Avoid radiation (CT)

## Pediatric Hematuria

**Common Causes:**
- UTI (most common)
- Post-streptococcal glomerulonephritis
- IgA nephropathy
- HSP nephritis
- Kidney stones
- Trauma

**Evaluation:**
- Urine culture
- Renal/bladder ultrasound
- Serum creatinine, complement
- Nephrology referral for persistent hematuria

## Idiopathic Hematuria

**Definition:**
- Negative thorough workup
- No evidence of glomerular disease
- No identifiable urologic cause

**Natural History:**
- Usually benign
- May resolve spontaneously
- Ongoing surveillance recommended

**Monitoring:**
- Repeat urinalysis in 6-12 months
- Repeat imaging in 1-2 years
- Patient education about concerning symptoms (gross hematuria, pain)`,
      keyTerms: [
        { term: 'FISH', definition: 'Fluorescence in situ hybridization; detects chromosomal abnormalities in urine cells' },
        { term: 'UroVysion', definition: 'FISH-based test for bladder cancer surveillance' },
        { term: 'GBM', definition: 'Glomerular basement membrane; structural component of kidney filtration barrier' },
        { term: 'NMP22', definition: 'Nuclear matrix protein 22; tumor marker for bladder cancer' },
        { term: 'ADPKD', definition: 'Autosomal dominant polycystic kidney disease; inherited kidney cysts' },
        { term: 'thin basement membrane nephropathy', definition: 'Benign condition with thinned GBM causing isolated hematuria' },
      ],
      clinicalNotes: 'Hematuria on anticoagulation always needs workup—don\'t assume it\'s just from the blood thinner. Alport syndrome should be suspected in young men with hematuria, hearing loss, and family history of kidney failure. Repeat cystoscopy is indicated for persistent hematuria even after negative initial workup.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hematuria management integrates novel biomarkers, molecular diagnostics, risk-adapted surveillance protocols, and emerging technologies for early cancer detection and reduced invasive testing.',
      explanation: `## Novel Biomarkers

**Urine-Based Tests:**

**Cystoscopy-Replacement Strategies:**
- **Xpert Bladder Cancer Monitor:** Gene expression (5 mRNA targets)
- **Bladder EpiCheck:** Methylation biomarkers
- **ADXBLADDER:** Mutation and methylation panel
- Goal: Reduce frequency of invasive cystoscopy

**Early Detection:**
- **Telomerase:** TRAP assay
- **MicroRNA signatures:** miR-21, miR-126, miR-200
- **Exosomal markers:** Non-invasive liquid biopsy
- **Protein panels:** Multiple protein biomarkers combined

**Performance Characteristics:**
- Sensitivity: 70-90% for high-grade disease
- Specificity: 70-85%
- Best used in combination with cystoscopy, not replacement yet

## Molecular Characterization

**Bladder Cancer Subtyping:**
- **Luminal:** Urothelial differentiation markers
- **Basal:** Squamous differentiation, worse prognosis
- **Subtype predicts:** Response to BCG, chemotherapy, checkpoint inhibitors

**Urothelial Carcinoma:**
- **FGFR3 mutations:** Low-grade, low-stage tumors
- **TP53 mutations:** High-grade, invasive disease
- **TERT promoter mutations:** Early event
- **Therapeutic implications:** FGFR inhibitors (erdafitinib)

## Imaging Advances

**Multiparametric MRI for Bladder Cancer:**
- T2-weighted: Anatomy
- Diffusion-weighted: Cellularity
- Dynamic contrast: Perfusion
- Staging accuracy approaching CT

**Reduced-Radiation CT:**
- Iterative reconstruction techniques
- Lower radiation dose
- Diagnostic quality maintained

**Ultra-Low-Dose CT:**
- For hematuria in young patients
- Radiation dose comparable to few X-rays

## Risk-Adapted Surveillance

**Reduced-Frequency Protocols:**
- Low-risk Ta: Extend cystoscopy intervals
- Use urine markers between cystoscopies
- Personalized based on tumor biology

**Risk Stratification Tools:**
- **EORTC risk tables:** Recurrence and progression scores
- **CUETO score:** For BCG-treated patients
- **Clinical nomograms:** Individualized prediction

**Molecular Recurrence Monitoring:**
- Serial urine markers (FISH, NMP22)
- Detect recurrence before visible
- Guide cystoscopy timing

## Special Populations

**Immunocompromised:**
- Higher risk of urothelial carcinoma
- BK virus (hemorrhagic cystitis)
- Adenovirus cystitis
- CMV cystitis

**Spinal Cord Injury:**
- High prevalence of bladder stones
- Catheter-associated trauma
- Squamous cell carcinoma risk (long-term catheter)

**Indwelling Catheter:**
- Chronic microtrauma
- Inflammation, squamous metaplasia
- Increased cancer risk (especially SCC)

## Global Health Perspectives

**Schistosoma-Associated Bladder Cancer:**
- Endemic: Egypt, Africa, Middle East
- **S. haematobium:** Chronic infection
- **Pathology:** Squamous cell carcinoma (vs urothelial in endemic)
- **Prevention:** Praziquantel treatment, clean water

**Resource-Limited Settings:**
- Ultrasound instead of CT
- Flexible cystoscopy availability
- Hematuria screening programs in high-risk populations

## Emerging Therapies for Detected Malignancy

**Non-Muscle Invasive Bladder Cancer:**
- **BCG unresponsive:** Checkpoint inhibitors (pembrolizumab)
- **Intravesical gemcitabine/docetaxel:** Alternative to BCG
- **Novel agents:** Oncolytic viruses, antibody-drug conjugates

**Muscle-Invasive Bladder Cancer:**
- **Neoadjuvant checkpoint inhibitors:** Ongoing trials
- **Trimodal therapy:** Chemo + radiation + TURBT
- **Bladder-sparing approaches:** Select patients

## Hematuria Clinics

**Multidisciplinary Approach:**
- Urology, nephrology, radiology collaboration
- Rapid evaluation pathway
- Standardized protocols
- Improved patient outcomes

**Efficiency:**
- One-stop evaluation
- Immediate cystoscopy and imaging
- Reduced time to diagnosis

## Artificial Intelligence Applications

**Urine Microscopy AI:**
- Automated RBC characterization
- Distinguish glomerular vs non-glomerular
- Predict urologic vs nephrologic cause

**Imaging AI:**
- Automated tumor detection
- Size and staging measurement
- Risk prediction

**Risk Prediction Models:**
- Machine learning algorithms
- Incorporate clinical, lab, imaging data
- Predict malignancy risk
- Guide workup intensity

## Future Directions

**Liquid Biopsy:**
- Circulating tumor DNA
- Cell-free DNA in urine
- Early cancer detection
- Monitor treatment response

**Microbiome:**
- Urinary microbiome characterization
- Dysbiosis and cancer risk
- Probiotic approaches

**Genetic Risk Assessment:**
- Polygenic risk scores
- Family history integration
- Personalized surveillance intervals

**Point-of-Care Testing:**
- Smartphone-connected microscopy
- Home urine testing
- Telemedicine integration`,
      keyTerms: [
        { term: 'Luminal', definition: 'Molecular subtype of urothelial carcinoma with urothelial differentiation markers' },
        { term: 'Basal', definition: 'Molecular subtype of urothelial carcinoma with squamous features and worse prognosis' },
        { term: 'FGFR3', definition: 'Fibroblast growth factor receptor 3; mutations common in low-grade bladder tumors' },
        { term: 'TERT', definition: 'Telomerase reverse transcriptase; promoter mutations common in bladder cancer' },
        { term: 'liquid biopsy', definition: 'Analysis of cell-free DNA in blood or urine for cancer detection' },
        { term: 'erdafitinib', definition: 'FGFR inhibitor approved for FGFR-mutated urothelial carcinoma' },
      ],
      clinicalNotes: 'Urine biomarkers are increasingly used to reduce cystoscopy frequency but are not yet standard for initial hematuria evaluation. Molecular subtyping of bladder cancer guides therapy selection (luminal vs basal). Schistosoma hematobium infection causes squamous cell carcinoma of the bladder in endemic regions.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-hematuria-2020', type: 'article', title: 'AUA Guideline on Diagnosis and Evaluation of Hematuria', source: 'Journal of Urology' },
    { id: 'eau-hematuria-2023', type: 'article', title: 'EAU Guidelines on Muscle-Invasive and Metastatic Bladder Cancer', source: 'European Association of Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infection' },
    { targetId: 'condition-bladder-cancer', targetType: 'condition', relationship: 'related', label: 'Bladder Cancer' },
    { targetId: 'condition-renal-cell-carcinoma', targetType: 'condition', relationship: 'related', label: 'Renal Cell Carcinoma' },
  ],
  tags: { systems: ['urinary', 'renal'], topics: ['urology', 'nephrology'], keywords: ['hematuria', 'blood in urine', 'gross hematuria', 'microscopic hematuria', 'cystoscopy'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hematuria;
