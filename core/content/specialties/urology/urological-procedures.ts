/**
 * Urological Procedures - Comprehensive Educational Content
 *
 * Covers common urological procedures including cystoscopy,
 * prostate procedures, kidney stone management, male
 * reproductive procedures, and urological surgeries.
 */

import { EducationalContent } from '../../types';

export const urologicalProcedures: EducationalContent = {
  id: 'process-urological-procedures',
  type: 'topic',
  name: 'Urological Procedures',
  alternateNames: [
    'Urologic Surgery',
    'Urological Interventions',
    'Urologic Procedures',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Urological procedures are medical treatments or surgeries that fix problems with the urinary system and male reproductive organs. These include procedures for kidney stones, prostate problems, bladder issues, and more.',
      explanation: `**What Are Urological Procedures?**

Urological procedures are treatments performed by urologists (doctors who specialize in the urinary system and male reproductive organs). They can diagnose or treat problems with:
- Kidneys
- Bladder
- Urethra (tube that carries urine out)
- Prostate gland
- Male reproductive organs

**Common Urological Procedures**

**1. Cystoscopy**
- Looking inside the bladder with a camera
- Used to find causes of bleeding, blockages, or stones
- Takes about 15-30 minutes

**2. Prostate Procedures**
- Biopsy: Taking tiny samples of prostate to check for cancer
- TURP: Shrinking an enlarged prostate to improve urination

**3. Kidney Stone Procedures**
- Lithotripsy: Using sound waves to break stones into pieces
- Ureteroscopy: Using a scope to remove stones
- PCNL: Surgery to remove large kidney stones

**4. Bladder Procedures**
- Botox injections for overactive bladder
- Slings for urinary incontinence (leaking urine)
- Augmentation: Making bladder larger

**5. Male Reproductive Procedures**
- Vasectomy: Permanent birth control for men
- Vasectomy reversal: Reconnecting tubes to restore fertility

**6. Circumcision**
- Removing foreskin of the penis
- Usually done in babies, sometimes adults need it

**7. Testicular Procedures**
- Biopsy: Checking for cancer
- Removal of testicle (orchiectomy) for cancer

**8. Urinary Diversion**
- Creating new way for urine to leave body
- Urostomy: Opening in abdomen for urine collection
- Neobladder: Creating new bladder from intestine

**Why Are These Done?**

**Diagnostic Reasons:**
- Find causes of blood in urine
- Look for causes of frequent infections
- Check for blockages
- Check for cancer

**Treatment Reasons:**
- Remove kidney stones
- Treat enlarged prostate
- Fix incontinence
- Treat cancer
- Birth control (vasectomy)

**What to Expect**

**Before Procedure:**
- May need to stop blood thinners
- May need to take antibiotics
- May need to fast (no food) if anesthesia used
- Arrange someone to drive you home

**During Procedure:**
- May have anesthesia (asleep) or local (numbed)
- Time varies from minutes to hours
- Usually done as outpatient (go home same day)

**After Procedure:**
- May have soreness
- May see blood in urine (common)
- May need catheter temporarily
- Follow-up appointment with doctor

**Risks (General)**
- Bleeding
- Infection
- Pain
- Reaction to anesthesia
- Specific risks depend on procedure`,
      keyTerms: [
        { term: 'urologist', definition: 'Doctor who specializes in urinary system and male reproductive organs' },
        { term: 'cystoscopy', definition: 'Procedure using a camera to look inside the bladder', pronunciation: 'sis-TOS-ko-pee' },
        { term: 'vasectomy', definition: 'Permanent birth control surgery for men' },
        { term: 'biopsy', definition: 'Taking a tiny sample of tissue to examine under microscope' },
        { term: 'anesthesia', definition: 'Medicine to prevent pain during surgery' },
      ],
      analogies: [
        'Cystoscopy is like looking inside a room with a flashlight and camera - the doctor sees the bladder walls clearly.',
        'Lithotripsy for kidney stones is like using sound to break a rock into small pieces that can be washed away.',
      ],
      examples: [
        'A man with an enlarged prostate has TURP surgery to help him urinate better.',
        'A woman with frequent UTIs has cystoscopy to look for the cause.',
      ],
    },
    2: {
      level: 2,
      summary: 'Urological procedures encompass endoscopic interventions (cystoscopy, ureteroscopy), minimally invasive stone treatments (ESWL, PCNL), prostate procedures (TURP, biopsy), urinary diversion, and reproductive surgeries. Procedures range from office-based to major surgical interventions.',
      explanation: `## Endoscopic Procedures

### Cystoscopy

**Indications:**
- Hematuria (blood in urine)
- Recurrent UTIs
- Bladder cancer surveillance
- Foreign body removal
- Stricture dilation
- Place/remove stents

**Types:**
- Flexible cystoscopy: Office-based, local anesthesia
- Rigid cystoscopy: OR, general/sedation, better visualization

**Procedure:**
- Scope inserted through urethra into bladder
- Systematic inspection of bladder, urethra, prostate
- Can take biopsies, remove tumors, extract stones

**Recovery:**
- Burning with urination for 1-3 days
- Blood in urine common
- Urgency/frequency expected

### Ureteroscopy

**Indications:**
- Ureteral stones
- Ureteral stricture
- UPJ obstruction
- Tumor surveillance
- Remove stents

**Procedure:**
- Scope through urethra, bladder, into ureter
- Laser lithotripsy to break stones
- Basket extraction of stones or tissue
- Stent placement commonly

## Kidney Stone Procedures

### ESWL (Extracorporeal Shock Wave Lithotripsy)

**Indications:**
- Kidney stones <2 cm
- Proximal ureteral stones
- Hard stones may not fragment well

**Contraindications:**
- Pregnancy
- Bleeding disorders
- Uncontrolled UTI
- Severe skeletal abnormalities
- Calcified arterial aneurysm below stone

**Procedure:**
- Lithotripter machine generates shock waves
- Focused on stone using fluoroscopy/ultrasound
- 3000-4000 shocks typical
- Usually outpatient with sedation

**Outcome:**
- Stone-free rate: 60-90% depending on size/location
- May require multiple sessions
- Passage of fragments over days-weeks

### PCNL (Percutaneous Nephrolithotomy)

**Indications:**
- Large kidney stones (>2 cm)
- Cystine stones
- ESWL failures
- Complex stone burden

**Procedure:**
- Needle through back into kidney
- Tract dilation
- Nephroscope inserted
- Ultrasonic/laser lithotripsy
- Stone removal through sheath

**Outcomes:**
- Stone-free rate: >90% for single stone
- Hospital stay: 1-2 days
- Blood transfusion rate: <5%

### Ureteral Stenting

**Indications:**
- Relieve obstruction
- After ureteroscopy
- Before stone treatment
- External compression
- Stricture treatment

**Types:**
- Double J stent: Coiled in kidney and bladder
- Stent removal in office or via cystoscopy
- Duration: Days to months

## Prostate Procedures

### Prostate Biopsy

**Indications:**
- Elevated PSA
- Abnormal DRE
- Cancer surveillance

**Technique:**
- Transrectal ultrasound guided
- 12+ core biopsies standard
- Local anesthesia
- Office-based or under sedation

**Risks:**
- Bleeding (hematospermia, hematuria)
- Infection (<5%)
- Urinary retention

### TURP (Transurethral Resection of Prostate)

**Indications:**
- BPH with LUTS refractory to medical therapy
- Retention
- Recurrent UTIs
- Bladder stones
- Hematuria from BPH

**Procedure:**
- Resectoscope through urethra
- Electrical loop removes prostate tissue
- Chips sent to pathology
- Catheter post-op for 1-3 days

**Outcomes:**
- Symptom improvement: 70-80%
- Complications: TUR syndrome, bleeding, incontinence, ED

## Bladder Procedures

### Botulinum Toxin A (Botox) Bladder Injections

**Indications:**
- Overactive bladder refractory to medications
- Neurogenic bladder
- Detrusor overactivity

**Procedure:**
- Cystoscopy with injection into bladder wall
- 20-30 injection sites
- Office-based or under anesthesia

**Outcomes:**
- 60-80% improvement in urgency/incontinence
- Duration: 6-12 months
- Repeat injections as needed

### Sling Procedures (Incontinence)

**Types:**
- Mid-urethral sling (retropubic or transobturator)
- Mini-sling
- Pubovaginal sling (autologous rectus fascia)
- Male slings for post-prostatectomy incontinence

## Male Reproductive Procedures

### Vasectomy

**Indications:**
- Permanent sterilization
- Family complete

**Procedure:**
- Office-based under local anesthesia
- bilateral vas deferens identified, cut, sealed
- 15-30 minutes
- Requires backup contraception until azoospermia confirmed

**Effectiveness:**
- Failure rate: 0.1-0.2%
- Vasectomy reversal possible but not guaranteed

### Vasectomy Reversal (Vasovasostomy)

**Indications:**
- Desire for fertility
- Change in life circumstances (new partner)
- Relieve post-vasectomy pain

**Procedure:**
- Microsurgical reconnection of vas deferens
- Operating microscope
- 2-3 hours
- Outpatient

**Outcomes:**
- Patency: >90%
- Pregnancy: 40-60%`,
      keyTerms: [
        { term: 'cystoscopy', definition: 'Endoscopic examination of bladder using a camera' },
        { term: 'ureteroscopy', definition: 'Endoscopic examination and treatment of ureter and kidney' },
        { term: 'ESWL', definition: 'Extracorporeal Shock Wave Lithotripsy; sound wave treatment for kidney stones' },
        { term: 'PCNL', definition: 'Percutaneous nephrolithotomy; surgical removal of kidney stones through back' },
        { term: 'TURP', definition: 'Transurethral resection of prostate; surgery for enlarged prostate' },
        { term: 'vasectomy', definition: 'Male sterilization procedure by cutting and sealing vas deferens' },
      ],
      analogies: [
        'ESWL is like a sound-based jackhammer that breaks stones from outside the body.',
        'A ureteral stent is like a temporary straw that keeps the tube open while it heals.',
      ],
    },
    3: {
      level: 3,
      summary: 'Urological procedures encompass endoscopic, minimally invasive, and open surgical techniques for treating urinary and male reproductive pathology. Procedure selection depends on diagnosis, patient factors, stone characteristics, and surgeon expertise.',
      explanation: `## Endoscopic Surgery

### Cystoscopy Techniques

**Flexible Cystoscopy:**
- 7-8 Fr scope
- Office-based with local anesthesia
- Patient can be sitting
- Better tolerance for men

**Rigid Cystoscopy:**
- 17-21 Fr scope
- Better visualization and working channel
- Allows procedures (biopsy, tumor resection)
- Requires lithotomy position

**Resection Loops:**
- Monopolar: Cutting and coagulation
- Bipolar: Less risk of TUR syndrome
- Laser: Precise ablation

### Ureteroscopy Techniques

**Semirigid Ureteroscope:**
- Less expensive
- Better pushability
- Limited deflection
- Used for most ureteral stones

**Flexible Ureteroscope:**
- Excellent deflection (270°)
- Access to kidney calyces
- Can access lower pole
- More fragile, expensive

**Laser Lithotripsy:**
- Holmium:YAG laser (standard)
- Dusting vs. fragmentation settings
- Moses technology (more efficient)
- Can treat all stone compositions

**Basket Extraction:**
- Nitinol baskets (shape memory)
- Remove intact small stones
- Must dilate ureter first if needed
- Laser "trabeculation" if stone too large

## Stone Management

### ESWL Technical Considerations

**Factors Affecting Success:**

| Factor | Better Success | Worse Success |
|--------|---------------|---------------|
| Stone size | <1 cm | >1.5 cm |
| Stone density | Lower Hounsfield units | Higher Hounsfield units |
| Stone location | Renal pelvis, upper pole | Lower pole calyx |
| Patient BMI | Normal | Obese |
| Stone type | Calcium oxalate | Cystine, calcium monohydrate |
| Anatomy | Single kidney, normal | Multiple kidneys, horseshoe |

**Contraindications:**
- Pregnancy (relative)
- Coagulopathy (correct first)
- Active UTI (treat first)
- Abdominal aortic aneurysm overlying stone
- Severe skeletal deformity

**Adjuncts:**
- Ureteral stent to facilitate passage
- Push-back technique for ureteral stones
- Patient positioning (prone for lower pole)

### PCNL Technique

**Access:**
- Fluoroscopic or ultrasound guidance
- Target calyx based on stone location
- Ideally access through posterior calyx
- Avoid pleural injury (upper pole)

**Tract Dilation:**
- Sequential dilators (Alken, Amplatz)
- Balloon dilation
- Nephroscopy sheath placement (24-30 Fr)

**Stone Fragmentation:**
- Ultrasonic lithotripsy (fast for soft stones)
- Holmium laser (versatile)
- Combination (ballistic and ultrasound)
- Remove fragments with forceps

**Tubeless PCNL:**
- No nephrostomy tube post-op
- Ureteral stent only
- Decreased hospital stay, pain
- Select patients only

## Prostate Surgery

### TURP (Transurethral Resection)

**Procedure Details:**
- Resectoscope 26-28 Fr
- Loop electrode (monopolar or bipolar)
- Resection chips examined histologically
- Capsule identified at end

**Complications:**
- Bleeding (1-4% transfusion rate)
- TUR syndrome: Water intoxication from irrigation absorption
  - Confusion, nausea, visual changes
  - Sodium dilution
  - Prevented by limiting time, using bipolar
- Incontinence (1-3%)
- Erectile dysfunction (5-10%)
- Stricture (2-4%)

**Alternative:**
- Laser enucleation (HoLEP, ThuLEP)
- Prostate vaporization
- Aquablation therapy
- Rezum (water vapor thermal therapy)

### GreenLight Photoselective Vaporization

**Technique:**
- KTP laser (532 nm)
- Vaporizes prostate tissue
- Less bleeding than TURP
- Shorter hospital stay
- Comparable outcomes to TURP

## Bladder Surgery

### Bladder Tumor Resection (TURBT)

**Indications:**
- Bladder cancer diagnosis
- Staging (Ta, T1, T2)
- Resection of visible tumor

**Technique:**
- Resect tumor down to muscle
- Include muscle in specimen
- Resection bed biopsies
- Single-shot chemotherapy (optional)

### Cystectomy (Bladder Removal)

**Indications:**
- Muscle-invasive bladder cancer
- BCG-refractory CIS
- Neurogenic bladder complications
- Radiation cystitis

**Urinary Diversion:**

| Type | Description | Indications |
|------|-------------|-------------|
| Ileal conduit | Urostomy with stoma | Standard, simplest |
| Neobladder | Reservoir from intestine | Continent, no stoma |
| Cutaneous diversion | Ureterostomy | High-risk patients |

## Male Reproductive

### Vasectomy Reversal

**Surgical Options:**

| Technique | Success Rate | Pregnancy Rate |
|------------|--------------|----------------|
| Vasovasostomy | 90-95% | 40-60% |
| Vasoepididymostomy | 60-75% | 20-40% |
| Combined | 75-85% | 30-50% |

**Factors Affecting Success:**
- Time since vasectomy (<10 years better)
- Partner age/fertility
- Vasectomy technique used
- Surgeon expertise

### TESE/Micro-TESE

**Indications:**
- Azoospermia
- ICSI with partner
- Failed sperm retrieval on previous attempts

**Technique:**
- Open testicle biopsy under anesthesia
- Microscopic examination of seminiferous tubules
- Find viable sperm
- Cryopreservation for IVF/ICSI`,
      keyTerms: [
        { term: 'TUR syndrome', definition: 'Water intoxication from absorption of irrigation fluid during TURP; causes hyponatremia' },
        { term: 'HoLEP', definition: 'Holmium Laser Enucleation of Prostate; laser removal of prostate tissue' },
        { term: 'TURBT', definition: 'Transurethral resection of bladder tumor; diagnosis and staging of bladder cancer' },
        { term: 'neobladder', definition: 'Bladder substitute made from intestine; continent diversion' },
        { term: 'ileoconduit', definition: 'Urinary diversion using ileum; stoma on abdominal wall' },
        { term: 'vasovasostomy', definition: 'Microsurgical reconnection of vas deferens; vasectomy reversal' },
      ],
      clinicalNotes: 'Antibiotics before procedures with urine exposure. Prophylaxis for UTIs after urinary diversion. Bowel prep for urinary diversion surgeries. Stent placement after ureteroscopy helps prevent obstruction from edema.',
    },
    4: {
      level: 4,
      summary: 'Contemporary urological procedures integrate minimally invasive techniques, robotic surgery, advanced laser technologies, and enhanced recovery protocols to optimize outcomes. Individualized procedure selection considers patient factors, stone characteristics, tumor biology, and surgeon expertise.',
      explanation: `## Advanced Surgical Techniques

### Robotic Surgery

**Robotic Prostatectomy:**
- Da Vinci system most common
- 3D visualization, magnification
- Articulated instruments
- Nerve-sparing technique
- Potency preservation
- Continence preservation

**Advantages over open:**
- Less blood loss
- Shorter hospital stay
- Faster return to activities
- Better visualization
- Similar oncologic outcomes

**Other Robotic Procedures:**
- Partial nephrectomy
- Cystectomy with intracorporeal diversion
- Pyeloplasty
- Sacrocolpopexy
- Ureteral reimplantation

### Laser Technologies

**Holmium:YAG:**
- Versatile for stones, prostate, tumors
- Different settings: Fragmentation, dusting, coagulation
- "Moses" technology: More efficient
- All stone types treated

**Thulium:YAG:**
- Prostate vaporization
- Similar to GreenLight
- Continuous wave
- Less depth of penetration

**GreenLight (KTP):**
- Selective for hemoglobin
- Prostate vaporization
- Less bleeding than TURP
- Short catheter time

### Minimally Invasive Nephrolithotomy

**Mini-PCNL:**
- Smaller tract (<20 Fr)
- Less invasive than standard PCNL
- For smaller stone burden
- Decreased morbidity

**Tubeless PCNL:**
- No nephrostomy tube
- Ureteral stent only
- Decreased pain, shorter stay
- Select patients only

## Complex Stone Management

**Staghorn Calculi:**
- Large branched stones
- Fill pelvis and calyces
- Multiple approaches often needed
- Combination PCNL + flexible ureteroscopy
- ESWL adjunct

**Encrusted Stents:**
- Stent left too long
- Stone formation on stent
- Challenging removal
- May require laser, ESWL, or PCNL

**Cystine Stones:**
- Genetic defect in transport
- Recurrent despite treatment
- Alkalinization of urine
- PCNL often required

## Advanced Prostate Procedures

### Prostate Artery Embolization (PAE)

**Indications:**
- Large prostate (>80 g)
- Poor surgical candidate
- Patient refuses surgery

**Technique:**
- Prostatic arteries embolized
- Microspheres
- Reduces prostate size
- Improves symptoms

**Outcomes:**
- IPSS reduction: 15-20 points
- Qmax improvement: 5-10 mL/s
- Retreatment rate: 10-15%

### Aquablation Therapy

**Mechanism:**
- Waterjet ablation of prostate tissue
- Convective and cavitation effects
- Heat-free
- Preserves anterior urethra

**Indications:**
- BPH with LUTS
- Interested in preserving sexual function

### UroLift

**Technique:**
- Permanent implants
- Compress prostate lobes
- Open urethral lumen
- Office-based, local anesthesia

**Indications:**
- Prostate 30-80 g
- Median lobe not prominent
- Preserves sexual function

## Reconstructive Surgery

### Pyeloplasty

**Indications:**
- Ureteropelvic junction obstruction (UPJO)
- Congenital or acquired
- Flank pain, infections, stones

**Technique:**
- Dismembered (Anderson-Hynes): Most common
- Dorsal flap, Y-V plasty alternatives
- Open, laparoscopic, or robotic
- Redundant ureter
- Watertight anastomosis

**Success:**
- 90-95% with open/laparoscopic

### Ureteral Reimplantation

**Indications:**
- Vesicoureteral reflux (VUR)
- Ureteral stricture
- Traumatic injury
- Transplant ureter

**Techniques:**
- Extravesical (Lich-Gregoir): Common
- Intravesical (Cohen): For VUR
- Psoas hitch, Boari flap for long defects
- Robotic increasingly common

## Enhanced Recovery

**Prehabilitation:**
- Optimize nutrition
- Medical optimization
- Smoking cessation
- Preoperative education

**ERAS Protocols:**
- Early ambulation
- Early feeding
- Optimal analgesia
- Minimize invasive devices
- Standardized pathways

**Benefits:**
- Shorter hospital stay
- Fewer complications
- Faster recovery
- Lower costs`,
      keyTerms: [
        { term: 'robotic prostatectomy', definition: 'Removal of prostate using da Vinci robotic system; nerve-sparing possible' },
        { term: 'mini-PCNL', definition: 'Percutaneous nephrolithotomy using smaller instruments and tracts' },
        { term: 'encrusted stent', definition: 'Stent with stones formed on it; difficult to remove' },
        { term: 'PAE', definition: 'Prostate artery embolization; minimally invasive BPH treatment' },
        { term: 'UroLift', definition: 'Permanent implants that compress prostate lobes to open urethra' },
        { term: 'pyeloplasty', definition: 'Surgical reconstruction of ureteropelvic junction for UPJO obstruction' },
      ],
      clinicalNotes: 'Robotic approaches becoming standard for prostatectomy, cystectomy, pyeloplasty. Mini-PCNL and tubeless PCNL reduce morbidity. Laser enucleation (HoLEP) offers advantages for large prostates.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art urologic procedures incorporate robotic surgery, advanced laser platforms, precision targeting systems, single-scar approaches, and enhanced recovery pathways. Innovation continues to expand minimally invasive options for complex urologic pathology.',
      explanation: `## Cutting-Edge Technologies

### Novel Stone Management

**SuperPulse Thulium Fiber Laser:**
- High peak power
- Efficient stone dusting
- Ablation of prostate tissue
- Less retropulsion
- Faster procedures

**Moses 2.0 Technology:**
- Pulse train modulation
- Improved dusting
- Reduced retropulsion
- Enhanced efficiency

**Burst Wave Lithotripsy (BWL):**
- Short bursts of shock waves
- Reduces retropulsion
- Smaller fragments
- Potential clinical trials

### Single-Port Robotics

**Single-Port Da Vinci (SP):**
- Single 25 mm port
- All instruments through one site
- Cosmesis advantage
- Limited use currently (cost, learning curve)

**Applications:**
- Pyeloplasty
- Partial nephrectomy
- Prostatectomy
- Sacrocolpopexy

### Needle-Based Ablation

**Prostate:**
- Focal therapy for prostate cancer
- MRI fusion biopsy guided
- HIFU (high-intensity focused ultrasound)
- Cryotherapy
- Irreversible electroporation

**Kidney:**
- Cryoablation
- Radiofrequency ablation
- Microwave ablation
- Indications: Small tumors, poor surgical candidates

## Image-Guided Interventions

### Fusion Biopsy

**MRI-Ultrasound Fusion:**
- Targets suspicious MRI lesions
- Software overlay
- Increased detection of clinically significant cancer
- Reduced detection of low-risk disease

### Navigation Systems

**Percutaneous Access:**
- 3D holographic guidance
- Fusion of ultrasound/fluoroscopy
- Pre-op CT overlay
- Real-time tracking

**Benefits:**
- Reduced radiation exposure
- Precise access
- Lower complication rates

## Regenerative Medicine

### Stem Cell Therapy

**Stress Urinary Incontinence:**
- Muscle-derived stem cells
- Adipose-derived stem cells
- Umbilical stem cells
- Injection into sphincter or urethra
- Early clinical trials

**Erectile Dysfunction:**
- Stem cells injected into corpora
- Angiogenic growth factors
- Early phase trials
- Not standard of care

### Platelet-Rich Plasma (PRP)

**Applications:**
- Peyronie's disease
- Erectile dysfunction
- Stress incontinence
- Limited evidence, investigational

## Future Directions

**Nanotechnology:**
- Drug-eluting stents
- Targeted drug delivery
- Nanoparticle imaging

**Artificial Intelligence:**
- Surgical planning
- Real-time guidance
- Complication prediction
- Training simulators

**Augmented Reality:**
- Overlay imaging on surgical field
- 3D reconstruction
- Intraoperative guidance

**3D Printing:**
- Patient-specific models
- Surgical planning
- Training tools
- Custom implants

## Quality and Safety

**Outcomes Tracking:**
- Stone-free rates
- Recurrence rates
- Functional outcomes
- Patient-reported outcomes
- Complication tracking

**Standardization:**
- Surgical checklists
- Standardized techniques
- Credentialing
- Proctoring

**Simulation Training:**
- Virtual reality trainers
- Box trainers
- Animal models
- Simulated procedures`,
      keyTerms: [
        { term: 'SP robotic system', definition: 'Single-Port Da Vinci robotic system; single-incision surgery' },
        { term: 'BWL', definition: 'Burst Wave Lithotripsy; new shock wave technology for kidney stones' },
        { term: 'focal therapy', definition: 'Targeted ablation of prostate cancer lesion; not whole gland treatment' },
        { term: 'MRI-ultrasound fusion', definition: 'Combining MRI and ultrasound images for precise biopsy targeting' },
        { term: 'HIFU', definition: 'High-Intensity Focused Ultrasound; focused ultrasound for tissue ablation' },
        { term: 'irreversible electroporation', definition: 'Cell membrane ablation using electrical pulses; focal therapy' },
      ],
      clinicalNotes: `Emerging technologies:

1. **Robotics**: Standard for prostatectomy, cystectomy; expanding to other procedures

2. **Lasers**: Holmium:YAG remains versatile; newer thulium fiber laser promising

3. **Single-port approaches**: Limited by cost, learning curve; emerging

4. **Focal therapy**: Investigational for prostate cancer; requires careful patient selection

5. **Navigation**: Improves precision for percutaneous access

6. **Enhanced recovery**: Reduces hospital stay, complications; becoming standard`,
    },
  },

  media: [
    {
      id: 'cystoscopy-procedure',
      type: 'diagram',
      filename: 'cystoscopy-procedure.svg',
      title: 'Cystoscopy Procedure',
      description: 'Illustration of cystoscopy technique and bladder anatomy',
    },
    {
      id: 'pcnl-technique',
      type: 'diagram',
      filename: 'pcnl-procedure.svg',
      title: 'PCNL Technique',
      description: 'Illustration of percutaneous nephrolithotomy access and stone removal',
    },
    {
      id: 'turp-procedure',
      type: 'diagram',
      filename: 'turp-procedure.svg',
      title: 'TURP Procedure',
      description: 'Transurethral resection of prostate technique',
    },
  ],

  citations: [
    {
      id: 'aua-guidelines-2023',
      type: 'article',
      title: 'AUA Guidelines: Surgical Management of Kidney Stones',
      source: 'American Urological Association',
    },
    {
      id: 'eau-guidelines-2023',
      type: 'article',
      title: 'EAU Guidelines on Urolithiasis',
      source: 'European Association of Urology',
    },
    {
      id: 'turp-outcomes',
      type: 'article',
      title: 'Transurethral Resection of the Prostate: Long-Term Outcomes',
      source: 'European Urology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
    { targetId: 'condition-benign-prostatic-hyperplasia', targetType: 'condition', relationship: 'related', label: 'BPH' },
    { targetId: 'condition-bladder-conditions', targetType: 'condition', relationship: 'related', label: 'Bladder Conditions' },
  ],

  tags: {
    systems: ['urinary', 'reproductive'],
    topics: ['urology', 'surgery', 'endoscopy', 'minimally invasive'],
    keywords: ['cystoscopy', 'lithotripsy', 'TURP', 'vasectomy', 'prostate surgery', 'bladder cancer'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'emergency medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default urologicalProcedures;
