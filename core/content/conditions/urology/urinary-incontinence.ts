/**
 * Urinary Incontinence - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const urinaryIncontinence: EducationalContent = {
  id: 'condition-urinary-incontinence',
  type: 'condition',
  name: 'Urinary Incontinence',
  alternateNames: ['UI', 'Incontinence', 'Bladder Leakage', 'Enuresis'],
  hpoId: 'HP:0000019',

  levels: {
    1: {
      level: 1,
      summary: 'Urinary incontinence means you leak urine accidentally, which can happen when you cough, sneeze, or feel a sudden strong urge to urinate.',
      explanation: `Urinary incontinence is the loss of bladder control, ranging from occasional leaks to complete inability to hold urine. It's a common problem that affects millions of people.

**Common Types:**

**Stress Incontinence:**
- Leaks when you cough, sneeze, laugh, or exercise
- Happens when pressure is put on your bladder

**Urge Incontinence:**
- Sudden, intense urge to urinate followed by leakage
- Can't make it to the bathroom in time

**Overflow Incontinence:**
- Frequent dribbling of urine
- Bladder doesn't empty completely

**What Causes Incontinence:**
- Weak pelvic floor muscles
- Pregnancy and childbirth
- Menopause
- Prostate problems in men
- Certain medications
- Medical conditions like diabetes or stroke

**When to See a Doctor:**
- Incontinence interferes with daily activities
- Sudden onset of incontinence
- Blood in urine
- Difficulty urinating or emptying bladder`,
      keyTerms: [
        { term: 'incontinence', definition: 'Inability to control urine; accidental leakage of urine' },
        { term: 'pelvic floor', definition: 'Muscles that support the bladder, uterus, and rectum' },
        { term: 'bladder', definition: 'The organ that stores urine before it leaves the body' },
        { term: 'sphincter', definition: 'Muscle that controls the release of urine from the bladder' },
      ],
      analogies: [
        'The bladder sphincter is like a valve on a faucet—when it works properly, it keeps water in until you decide to let it out.',
        'Pelvic floor muscles are like a hammock supporting your bladder—if they get stretched or weak, things can slip through.'
      ],
      examples: [
        'A mother of three leaks urine when she sneezes or laughs, typical of stress incontinence from childbirth.',
        'An elderly man constantly dribbles urine because his enlarged prostate blocks complete bladder emptying—this is overflow incontinence.'
      ],
      patientCounselingPoints: [
        'Keep a bladder diary to track when and how much you drink and when leakage occurs',
        'Try to lose excess weight which can reduce pressure on your bladder',
        'Practice double voiding—urinate, wait, then try again',
        'Limit caffeine and alcohol as these can increase urine production and irritate the bladder'
      ],
    },
    2: {
      level: 2,
      summary: 'Urinary incontinence is classified as stress, urge, overflow, functional, or mixed types, with different mechanisms and treatment approaches for each category.',
      explanation: `## Classification of Urinary Incontinence

**Stress Urinary Incontinence (SUI):**
- Leakage with increased abdominal pressure
- Caused by coughing, sneezing, laughing, exercise
- Due to urethral hypermobility or sphincter weakness
- Most common in women after childbirth or menopause

**Urge Urinary Incontinence (UUI):**
- Sudden urge followed by involuntary leakage
- Due to detrusor overactivity (bladder muscle contracts too early)
- Common cause: overactive bladder (OAB)
- Can be caused by neurological conditions

**Overflow Incontinence:**
- Passive leakage from overdistended bladder
- Bladder doesn't empty completely
- Due to obstruction or underactive bladder
- Common in men with BPH or after prostate surgery

**Functional Incontinence:**
- Urine leakage due to physical or cognitive limitations
- Patient can't reach bathroom in time
- Problems with mobility, dexterity, or thinking

**Mixed Incontinence:**
- Combination of stress and urge components
- Most common: stress + urge in women
- Treatment must address both components

## Risk Factors

**For Women:**
- Pregnancy and childbirth
- Menopause (loss of estrogen)
- Hysterectomy
- Obesity
- Smoking

**For Men:**
- Prostate problems (BPH, prostate cancer treatment)
- Prostate surgery
**For Both:**
- Age
- Neurological disease (stroke, MS, Parkinson's)
- Diabetes
- Certain medications
- Constipation
- Limited mobility

## Diagnostic Evaluation

**Basic Assessment:**
- Detailed history (timing, triggers, amount)
- Physical exam (including pelvic/rectal exam)
- Urinalysis (rule out infection, blood)
- Post-void residual measurement

**Bladder Diary:**
- Record fluid intake
- Record voiding times and amounts
- Document incontinence episodes
- Identify triggers

**Simple Tests:**
- Cough stress test (observe leakage with coughing)
- Pad test (weigh pads to quantify leakage)

## Treatment Options by Type

**Stress Incontinence:**
- Pelvic floor muscle exercises (Kegels)
- Weight loss
- Vaginal estrogen (postmenopausal women)
- Pessary (vaginal support device)
- Surgery (slings, bladder suspension)

**Urge Incontinence:**
- Bladder training (scheduled voiding)
- Pelvic floor exercises
- Medications (anticholinergics, beta-3 agonists)
- Botox injections into bladder
- Nerve stimulation

**Overflow Incontinence:**
- Treat underlying obstruction
- Intermittent catheterization
- Medications to improve bladder emptying`,
      keyTerms: [
        { term: 'SUI', definition: 'Stress urinary incontinence; leakage with increased abdominal pressure' },
        { term: 'UUI', definition: 'Urge urinary incontinence; sudden urge followed by leakage' },
        { term: 'detrusor', definition: 'The bladder muscle; detrusor overactivity causes urge incontinence' },
        { term: 'Kegel exercises', definition: 'Pelvic floor muscle exercises to strengthen muscles supporting the bladder' },
        { term: 'pessary', definition: 'Device inserted into vagina to support pelvic organs' },
        { term: 'post-void residual', definition: 'Urine remaining in bladder after urination' },
      ],
      analogies: [
        'Stress incontinence is like a worn-out rubber band—it stretches too much when pressure is applied.',
        'Urge incontinence is like a twitchy trigger finger—the bladder contracts too easily.'
      ],
      examples: [
        'A woman leaking urine during aerobics class has stress incontinence.',
        'A man with diabetes and constant dribbling may have overflow incontinence from neurogenic bladder.',
        'A woman who leaks when she sneezes AND feels sudden urges has mixed incontinence.'
      ],
      patientCounselingPoints: [
        'Perform Kegel exercises daily: squeeze pelvic muscles for 3-5 seconds, relax for 3-5 seconds; repeat 10-15 times, 3 times daily',
        'Bladder training: gradually increase time between bathroom visits (start every hour, increase by 15 minutes weekly)',
        'Limit fluids 2 hours before bedtime to reduce nighttime leakage',
        'Avoid bladder irritants like caffeine, alcohol, spicy foods, and artificial sweeteners'
      ],
    },
    3: {
      level: 3,
      summary: 'Urinary incontinence evaluation includes urodynamic testing to assess bladder storage and emptying function, with treatment tailored to pathophysiology and patient goals.',
      explanation: `## Urodynamic Evaluation

**Indications for Urodynamics:**
- Prior to invasive or surgical therapy
- Incontinence refractory to initial treatment
- Complex or mixed symptoms
- Suspected neurologic bladder dysfunction
- Prior failed incontinence surgery

**Components of Urodynamics:**

**Uroflowmetry:**
- Non-invasive measurement of urine flow rate
- Peak flow rate > 15 mL/s suggests normal voiding
- Low flow rate suggests obstruction or weak detrusor

**Cystometry (CMG):**
- Measures bladder pressure during filling and voiding
- Assesses:
  - Bladder capacity
  - Bladder compliance (stretchability)
  - Detrusor overactivity (involuntary contractions)
  - Bladder sensation (first urge, strong urge, urgency)

**Pressure-Flow Study:**
- Simultaneous measurement of bladder pressure and flow rate
- Distinguishes obstruction from weak bladder
- Important for men (distinguish obstruction from underactivity)

**Urethral Pressure Profile:**
- Measures sphincter pressure along urethra
- Maximum urethral closure pressure (MUCP)
- Low MUCP associated with sphincteric incompetence

**EMG (Electromyography):**
- Measures sphincter muscle activity
- Identifies detrusor-sphincter dyssynergia
- Useful in neurologic patients

**Video Urodynamics:**
- Combines urodynamics with fluoroscopy
- Visualizes bladder shape, urethral anatomy
- Identifies vesicoureteral reflux

## Urodynamic Findings

**Detrusor Overactivity (DO):**
- Involuntary detrusor contractions during filling
- Neurogenic DO: neurologic lesion
- Idiopathic DO: no identifiable cause

**Detrusor Underactivity (DU):**
- Weak contraction during voiding
- Elevated post-void residual
- Can be caused by aging, diabetes, neurologic disease

**Bladder Outlet Obstruction (BOO):**
- High pressure, low flow
- Common in men with BPH
- Stricture, sphincter overactivity in women

**Low Compliance Bladder:**
- Stiff bladder with high pressure during filling
- Risk to upper tracts (hydronephrosis, renal damage)
- Common causes: radiation, neurogenic bladder

## Pharmacologic Management

**For Urge Incontinence:**

**Anticholinergics:**
- Oxybutynin, tolterodine, solifenacin, darifenacin, fesoterodine
- Block muscarinic receptors in detrusor
- Side effects: dry mouth, constipation, blurred vision, cognitive effects
- Caution in elderly (cognitive impairment, delirium risk)

**Beta-3 Agonists:**
- Mirabegron 25-50 mg daily
- Vibegron 75 mg daily
- Relax detrusor via beta-3 receptors
- Better tolerated than anticholinergics
- Less dry mouth, no cognitive effects
- Can increase blood pressure (monitor)

**For Stress Incontinence:**

**Duloxetine:**
- SNRI that increases urethral sphincter tone
- Modest benefit
- Side effects: nausea, insomnia, dry mouth
- Not FDA-approved for SUI in US
- More commonly used in Europe

**Pseudoephedrine:**
- Alpha agonist increases sphincter tone
- Modest benefit
- Increases blood pressure, heart rate
- Limited use due to side effects

## Non-Surgical Treatments

**Pelvic Floor Muscle Training:**

**Standard Kegels:**
- 8-12 weeks for maximum benefit
- Proper technique: squeeze pelvic muscles, not abdomen/thighs
- Biofeedback can improve technique
- Vaginal weights for resistance training

**Electrical Stimulation:**
- Stimulates pudendal nerve
- Strengthens pelvic floor
- Home devices available
- 15-20 minutes daily

**Bladder Training:**
- Scheduled voiding (start every 1-2 hours)
- Gradually increase interval
- Urgency suppression techniques
- 6-12 week program

**Vaginal Estrogen:**
- Cream, tablet, or ring
- Improves tissue health
- Increases urethral closure pressure
- Useful for postmenopausal SUI

**Pessary:**
- Ring, Gellhorn, or incontinence dish
- Supports urethra/bladder neck
- Fitted by provider
- Removed and cleaned regularly

**Injectable Bulking Agents:**
- Bulkamid, Coaptite, Macroplastique
- Injected periurethrally
- Increases urethral resistance
- Office procedure
- Temporary effect (1-2 years)
- Best for mild SUI or poor surgical candidates`,
      keyTerms: [
        { term: 'urodynamics', definition: 'Comprehensive testing of bladder and urethral function during filling and emptying' },
        { term: 'detrusor overactivity', definition: 'Involuntary contractions of the bladder muscle causing urgency and urge incontinence' },
        { term: 'detrusor-sphincter dyssynergia', definition: 'Uncoordinated contraction of detrusor and sphincter; seen in neurologic conditions' },
        { term: 'low compliance', definition: 'Stiff bladder with high pressure during filling; risks kidney damage' },
        { term: 'bladder training', definition: 'Behavioral therapy to increase interval between voids and suppress urgency' },
      ],
      clinicalNotes: 'Urodynamics are not necessary for uncomplicated incontinence before conservative treatment. Beta-3 agonists are preferred over anticholinergics in elderly due to lower cognitive side effects. Post-void residual should always be checked before starting anticholinergics.',
    },
    4: {
      level: 4,
      summary: 'Complex incontinence management addresses neurogenic bladder, post-prostatectomy incontinence, refractory cases, and distinguishing between genuine stress incontinence and intrinsic sphincter deficiency.',
      explanation: `## Intrinsic Sphincter Deficiency (ISD)

**Pathophysiology:**
- Severe urethral sphincter incompetence
- Low urethral closure pressure
- Loss of coaptation (urethral walls don't seal)
- "Lead pipe" urethra on exam

**Causes:**
- Radical prostatectomy (men)
- Multiple anti-incontinence surgeries (women)
- Radiation therapy
- Neurologic disease
- Severe trauma

**Diagnosis:**
- Low MUCP (< 20 cm H2O)
- VLPP (valsalva leak point pressure) < 60 cm H2O
- Urethroscopy: open bladder neck at rest

**Treatment Implications:**
- Bulking agents less effective
- May need sling with more obstruction (transobturator)
- Men: artificial urinary sphincter (AUS)

## Post-Prostatectomy Incontinence

**Incidence:**
- Temporary incontinence: very common
- Persistent incontinence (>12 months): 5-20%
- Improves for up to 2 years post-op

**Causes:**
- Sphincter damage (most common)
- Bladder dysfunction (detrusor overactivity from prior obstruction)
- Bladder neck contracture

**Initial Management (First Year):**
- Conservative: pelvic floor exercises
- Wait for natural recovery
- Treat contributing factors (DO with medications)

**Persistent Incontinence (>12 months):**

**Male Sling:**
- AdVance, Virtue, Reemex
- For mild-moderate SUI
- Compresses urethra, repositions bulb
- Less effective than AUS but less morbid

**Artificial Urinary Sphincter (AUS):**
- Gold standard for severe male SUI
- Inflatable cuff around urethra
- Pump in scrotum to inflate/deflate
- High satisfaction rates
- Risks: erosion, infection, mechanical failure

**Bulking Agents:**
- Less invasive
- Modest benefit
- Better for poor surgical candidates

## Neurogenic Bladder

**Suprapontine Lesions:**
- Stroke, brain tumor, Parkinson's
- Detrusor overactivity common
- Urgency, frequency, urge incontinence
- Treatment: anticholinergics, beta-3 agonists

**Spinal Cord Lesions:**

**Above sacral level (suprasacral):**
- Detrusor-sphincter dyssynergia
- Detrusor overactivity
- Risk of high-pressure bladder → renal damage
- Treatment: CIC + anticholinergics, possible sphincterotomy/Botox

**Sacral level (conus medullaris):**
- Areflexic bladder
- Poor emptying, overflow incontinence
- Treatment: CIC

**Peripheral nerve lesions:**
- Diabetes, lumbar disc herniation
- Detrusor underactivity
- Overflow incontinence
- Treatment: CIC, bethanechol

**Multiple Sclerosis:**
- Mixed storage and emptying problems
- Symptoms change with disease course
- Treat symptoms as they arise
- Monitor upper tracts (renal ultrasounds)

**Spina Bifida:**
- Neurogenic bladder from birth
- Lifelong management needed
- Monitor for renal damage
- Catheterization or diversion common

## Complex Surgical Options

**For Stress Incontinence (Women):**

**Midurethral Slings:**
- **Retropubic:** TVT, SPARC
  - Higher cure rate
  - Risk of bladder injury, retention
- **Transobturator:** TOT, Monarc
  - Lower risk of bladder injury
  - May be less effective for ISD
- **Single-incision mini-slings:** MiniArc, Solyx
  - Less invasive
  - Lower long-term efficacy

**Pubovaginal Sling (Autologous Fascia):**
- Rectus fascia or fascia lata
- Used for failed previous slings
- Good for ISD
- Higher morbidity than mesh slings

**Bladder Neck Suspension:**
- Burch colposuspension
- MMK (Marshall-Marchetti-Krantz)
- Largely replaced by slings
- Useful when mesh contraindicated

**For Urge Incontinence:**

**Sacral Neuromodulation (InterStim):**
- InterStim device
- Modulates sacral nerve roots (S3)
- Test phase first (temporary lead)
- Permanent implant if >50% improvement
- Treats urgency, frequency, urgency incontinence, retention

**Percutaneous Tibial Nerve Stimulation (PTNS):**
- Stimulation of tibial nerve (S3 derivative)
- Weekly office treatments for 12 weeks
- Maintenance treatments periodically
- Less invasive than InterStim

**Botulinum Toxin A (Botox) Injection:**
- Injected into detrusor muscle (20-100 units)
- Reduces detrusor overactivity
- Office or OR procedure
- Cystoscopic guidance
- Risks: urinary retention (may need CIC), UTI
- Effect lasts 6-12 months, repeat injections

**For Refractory Cases:**

**Urinary Diversion:**
- **Continent:** Mitrofanoff, Indiana pouch
- **Incontinent:** Ileal conduit, ureterostomy
- Last resort for severe, refractory cases

**Augmentation Cystoplasty:**
- Enlarges bladder with bowel segment
- Reduces pressure, increases capacity
- Major surgery with potential complications
- Requires lifelong monitoring

## Post-Treatment Issues

**Persistent SUI after sling:**
- Evaluate for:
  - Sling failure/erosion
  - ISD (may need different approach)
  - Detrusor overactivity (mixed)
  - Urethral diverticulum

**Retention after sling:**
- Incision of sling for refractory retention
- Wait 6-8 weeks (many improve)
- Intermittent catheterization while waiting

**Recurrent UTI with incontinence:**
- Post-void residual assessment
- Vaginal atrophy treatment
- Antibiotic prophylaxis if indicated`,
      keyTerms: [
        { term: 'ISD', definition: 'Intrinsic sphincter deficiency; severe weakness of urethral sphincter' },
        { term: 'VLPP', definition: 'Valsalva leak point pressure; lowest abdominal pressure causing leakage' },
        { term: 'MUCP', definition: 'Maximum urethral closure pressure; measure of sphincter strength' },
        { term: 'AUS', definition: 'Artificial urinary sphincter; implantable device for severe male incontinence' },
        { term: 'CIC', definition: 'Clean intermittent catheterization; periodic catheterization to empty bladder' },
        { term: 'detrusor-sphincter dyssynergia', definition: 'Uncoordinated contraction of bladder and sphincter; causes high pressure in bladder' },
        { term: 'urethral diverticulum', definition: 'Outpouching of urethral wall; can cause incontinence, recurrent infections' },
      ],
      clinicalNotes: 'Artificial urinary sphincter is gold standard for severe post-prostatectomy incontinence but has high reoperation rate. Botox for urge incontinence requires patient willingness to perform CIC if retention develops. Always check PVR before treating incontinence.',
    },
    5: {
      level: 5,
      summary: 'Emerging incontinence therapies include stem cell regeneration, novel neuromodulation techniques, tissue engineering, and personalized approaches based on urodynamic phenotyping and genetic factors.',
      explanation: `## Regenerative Medicine

**Stem Cell Therapy:**
- **Muscle-derived stem cells:** Injected into urethral sphincter
- **Adipose-derived stem cells:** Liposuction harvest, injection
- **Mesenchymal stem cells:** Paracrine effects for tissue regeneration
- Early clinical trials show promise for SUI
- Challenges: Cell survival, optimal delivery, regulatory

**Platelet-Rich Plasma (PRP):**
- Autologous growth factors
- Injected periurethrally or intravesically
- Early evidence for SUI and OAB
- Limited standardization

**Tissue Engineering:**
- **Scaffolds:** Biodegradable materials for cell growth
- **Cell-seeded constructs:** Regenerate sphincter, detrusor
- **Decellularized matrices:** ECM for regeneration
- **3D bioprinting:** Customized urethral tissues

## Advanced Neuromodulation

**Closed-Loop InterStim:**
- Sensing of sacral nerve activity
- Responsive stimulation
- Smart algorithm adapts to patient
- Ongoing clinical trials

**Posterior Tibial Nerve Stimulation Advances:**
- Implantable tibial nerve stimulator
- Longer-lasting effect than weekly PTNS
- Less invasive than InterStim

**Pudendal Nerve Stimulation:**
- Direct pudendal nerve modulation
- For refractory urgency
- Less commonly used than sacral

**Dorsal Genital Nerve Stimulation:**
- Peripheral target for urgency
- Less invasive than sacral approaches
- Emerging data

**Transcutaneous Electrical Nerve Stimulation (TENS):**
- Non-invasive
- Applied to sacral dermatomes
- Home treatment possible

## Novel Pharmacologic Approaches

**Transient Receptor Potential (TRP) Channel Modulators:**
- **TRPV1 antagonists:** Reduce bladder overactivity
- **TRPV4 antagonists:** Decrease afferent signaling
- **TRPA1 modulators:** Bladder sensitivity
- Oral agents in development

**Voltage-Gated Sodium Channel Blockers:**
- **Ranolazine:** Approved for angina, studied for OAB
- Reduce afferent nerve firing
- Limited data to date

**Central Targets:**
- **GABA agonists:** Reduce central urgency signaling
- **NK1 receptor antagonists:** Substance P blockade
- **Glutamate modulators:** Central micturition control

**Combination Therapies:**
- Anticholinergic + beta-3 agonist
- Combination acting at different receptors
- Potential synergy with lower side effects

## Advanced Imaging and Diagnostics

**4D Ultrasound:**
- Dynamic assessment of pelvic floor
- Visualize urethral mobility
- Assess sling position
- Real-time imaging

**MRI Neuroimaging:**
- Functional MRI of bladder control centers
- Identify brain changes in incontinence
- Research tool currently

**Biomarker Discovery:**
- Urinary markers for different incontinence types
- Nerve growth factor (NGF)
- Cytokines, prostaglandins
- Distinguish OAB subtypes

**Smartphone and Wearable Technology:**
- Home uroflowmetry
- Fluid intake tracking
- Pad weight monitoring
- Biofeedback apps
- Telemedicine integration

## Phenotypic Classification

**OAB Phenotypes:**
- **Sensory:** Normal bladder function, heightened sensation
- **Motor:** Detrusor overactivity
- **Mixed:** Both components
- **Low urgency:** Cognitive/affective component

**Personalized Treatment:**
- Sensory phenotype: neuromodulation, behavioral
- Motor phenotype: anticholinergics, Botox
- Low urgency: cognitive therapies

## Special Populations

**Pediatric Incontinence:**
- Enuresis (bedwetting)
- Daytime wetting
- Behavioral approaches primary
- Desmopressin for enuresis
- Alarm therapy for nocturnal enuresis

**Geriatric Considerations:**
- Multimorbidity, polypharmacy
- Frailty impacts treatment options
- Goals of care focus
- Minimally invasive approaches preferred

**Cognitive Impairment:**
- Behavioral approaches limited
- Pads, external collection devices
- Prompted voiding programs
- Caregiver education essential

**Pregnancy and Postpartum:**
- Prevalent in pregnancy, often resolves postpartum
- Pelvic floor exercises preventive
- Persistent SUI may need treatment later

## Surgical Innovation

**Single-Incision Slings:**
- Less invasive than standard slings
- Emerging data on long-term efficacy
- Ongoing refinement

**Robotic-Assisted Surgery:**
- Robotic Burch, sacrocolpopexy
- For complex pelvic organ prolapse with incontinence
- Precision, visualization advantages

**Adaptive AUS:**
- Pressure-activated artificial sphincter
- Automatically adjusts to patient activity
- Emerging technology

## Quality of Life and Outcomes

**Patient-Reported Outcome Measures (PROMs):**
- ICIQ, UDI-6, IIQ-7 validated questionnaires
- Condition-specific measures
- Important for assessing treatment success

**Minimally Clinically Important Difference (MCID):**
- Defines meaningful improvement
- Guides treatment decisions
- For example: 50% reduction in leaks

**Value-Based Care:**
- Cost-effectiveness of treatments
- Shared decision making
- Considering patient priorities

## Future Directions

**Gene Therapy:**
- For neurogenic bladder
- Targeting specific nerve pathways
- Early research phase

**Nanotechnology:**
- Targeted drug delivery
- Enhanced tissue engineering
- Diagnostic applications

**Artificial Intelligence:**
- Predicting treatment response
- Automated urodynamic interpretation
- Personalized treatment selection

**Regenerative Approaches:**
- Tissue-engineered sphincters
- Stem cell-derived bladder tissue
- Decellularized scaffolds`,
      keyTerms: [
        { term: 'TRP channels', definition: 'Transient receptor potential channels; involved in bladder sensation and overactivity' },
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1; capsaicin receptor involved in bladder afferent signaling' },
        { term: 'NK1 receptor', definition: 'Neurokinin 1 receptor; binds substance P, involved in urgency signaling' },
        { term: 'MCID', definition: 'Minimally clinically important difference; smallest change in symptoms that patients perceive as beneficial' },
        { term: 'phenotype', definition: 'Observable characteristics or behavior; OAB phenotypes guide personalized treatment' },
      ],
      clinicalNotes: 'Stem cell therapies for incontinence are promising but remain experimental—awaiting larger trials and regulatory approval. Phenotypic classification of OAB (sensory vs motor) can guide personalized treatment selection. Closed-loop InterStim represents the future of neuromodulation with adaptive stimulation based on real-time sensing.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-incontinence-2023', type: 'article', title: 'AUA/SUFU Guideline on Surgery for Stress Urinary Incontinence', source: 'Journal of Urology' },
    { id: 'eau-incontinence-2023', type: 'article', title: 'EAU Guidelines on Urinary Incontinence', source: 'European Association of Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-bph', targetType: 'condition', relationship: 'related', label: 'Benign Prostatic Hyperplasia' },
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infection' },
    { targetId: 'condition-prostatitis', targetType: 'condition', relationship: 'related', label: 'Prostatitis' },
  ],
  tags: { systems: ['urinary', 'reproductive'], topics: ['urology', 'men\'s health', 'women\'s health'], keywords: ['incontinence', 'SUI', 'urge incontinence', 'overactive bladder', 'OAB', 'enuresis', 'Kegel'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'family medicine', 'ob-gyn'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default urinaryIncontinence;
