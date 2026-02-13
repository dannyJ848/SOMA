/**
 * Erectile Dysfunction - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const erectileDysfunction: EducationalContent = {
  id: 'condition-erectile-dysfunction',
  type: 'condition',
  name: 'Erectile Dysfunction',
  nameEs: 'Disfunción Eréctil',
  alternateNames: ['ED', 'Impotence', 'Male Sexual Dysfunction'],
  hpoId: 'HP:0000048',

  levels: {
    1: {
      level: 1,
      summary: 'Erectile dysfunction is the inability to get or keep an erection firm enough for sexual intercourse, affecting millions of men and often indicating an underlying health condition.',
      explanation: `Erectile dysfunction (ED) is when a man has trouble getting or keeping an erection. It's a common problem, especially in older men, but can happen at any age.

**How Erections Work:**
- Sexual arousal causes signals from the brain
- Blood flows into the penis
- Blood is trapped to create an erection
- After sex, blood flows out and penis becomes soft

**Common Causes:**
- Stress, anxiety, or relationship problems
- Heart disease, high blood pressure, or diabetes
- Low testosterone
- Smoking, alcohol, or drug use
- Certain medications
- Aging

**Symptoms:**
- Trouble getting an erection
- Trouble keeping an erection
- Reduced sexual desire

**Treatments:**
- Oral medications (Viagra, Cialis)
- Lifestyle changes (exercise, quit smoking)
- Counseling for psychological causes
- Other therapies if pills don't work

**When to See a Doctor:**
- ED concerns you
- You have other health problems like diabetes or heart disease
- You have other symptoms along with ED`,
      keyTerms: [
        { term: 'erection', definition: 'When the penis becomes firm, enlarged, and erect due to blood filling the tissues' },
        { term: 'libido', definition: 'Sexual desire or interest in sexual activity' },
        { term: 'testosterone', definition: 'Male hormone important for sexual function and other male characteristics' },
        { term: 'cardiovascular', definition: 'Related to the heart and blood vessels' },
      ],
      analogies: [
        'An erection is like a hydraulic system—blood pressure fills the chambers, and valves keep it there until the pressure is released.',
        'Think of the penis like a balloon—it needs enough air pressure to inflate and a way to keep the air inside.'
      ],
      examples: [
        'A 55-year-old man with diabetes notices he can no longer maintain an erection during intercourse—he should discuss ED treatment with his doctor.',
        'A young man experiences ED only when he\'s stressed about work—this suggests a psychological cause.'
      ],
      patientCounselingPoints: [
        'ED can be an early warning sign of heart disease—don\'t ignore it',
        'Lifestyle changes like losing weight, exercising, and quitting smoking can improve ED',
        'ED medications work best when taken on an empty stomach',
        'Be honest with your doctor about all medications you take and your sexual history'
      ],
    },
    2: {
      level: 2,
      summary: 'ED is classified as organic (vascular, neurogenic, hormonal, anatomic) or psychogenic, with risk factors including age, diabetes, cardiovascular disease, smoking, and certain medications.',
      explanation: `## Classification of ED

**Organic ED (80%):**
- **Vascular:** Poor blood flow (arteriogenic or venous leak)
- **Neurogenic:** Nerve damage (diabetes, spinal cord injury, prostate surgery)
- **Hormonal:** Low testosterone, thyroid disorders, prolactinoma
- **Anatomic:** Peyronie's disease, hypospadias

**Psychogenic ED (10-20%):**
- Performance anxiety
- Stress (work, financial)
- Relationship issues
- Depression
- History of sexual trauma

**Mixed ED:**
- Most common category
- Organic problem worsened by psychological factors

## Risk Factors

**Modifiable:**
- Smoking (doubles risk)
- Obesity
- Physical inactivity
- Excessive alcohol use
- Drug use

**Medical Conditions:**
- Diabetes (3x risk)
- Heart disease
- High blood pressure
- High cholesterol
- Kidney disease
- Multiple sclerosis
- Parkinson's disease

**Medications That Can Cause ED:**
- Antihypertensives (especially thiazides, beta-blockers)
- Antidepressants (SSRIs, TCAs)
- Antipsychotics
- Antiandrogens
- 5-alpha reductase inhibitors

## Diagnostic Approach

**History:**
- Onset (gradual vs sudden)
- Duration
- Morning/nocturnal erections
- Libido changes
- Surgical history (prostate, bladder, rectal)
- Medications

**Physical Exam:**
- Secondary sexual characteristics
- Penile examination (Peyronie's plaques)
- Testicular size and consistency
- Neurologic assessment
- Vascular examination

**Laboratory Tests:**
- Testosterone (morning draw)
- Prolactin
- Thyroid function tests
- Lipid panel
- Glucose/HbA1c
- PSA (if indicated)

## Treatment Options

**First-Line: Oral PDE5 Inhibitors**
- Sildenafil (Viagra) 25-100 mg
- Tadalafil (Cialis) 5-20 mg daily or as needed
- Vardenafil (Levitra) 5-20 mg
- Avanafil (Stendra) 50-200 mg

**Second-Line:**
- Vacuum erection device
- Intracavernosal injections (alprostadil)
- Intraurethral alprostadil (MUSE)

**Third-Line:**
- Penile implant (prosthesis)

**Psychogenic ED:**
- Counseling/sex therapy
- Couples therapy`,
      keyTerms: [
        { term: 'PDE5 inhibitor', definition: 'Phosphodiesterase type 5 inhibitor; class of medications for ED including sildenafil and tadalafil' },
        { term: 'venous leak', definition: 'When blood escapes from penile veins too quickly, preventing erection maintenance' },
        { term: 'Peyronie\'s disease', definition: 'Scar tissue in the penis causing curvature and ED' },
        { term: 'nocturnal tumescence', definition: 'Erection during sleep; normal if present suggests organic function intact' },
        { term: 'libido', definition: 'Sexual drive or desire' },
      ],
      analogies: [
        'Venous leak is like a tire with a slow leak—air gets in but can\'t stay to keep it inflated.'
      ],
      examples: [
        'A man with normal morning erections but problems with his partner likely has psychogenic ED.',
        'A man with diabetes and no morning erections likely has vascular/neurogenic ED.',
        'Hydrochlorothiazide (HCTZ) may cause ED—switching to another antihypertensive might help.'
      ],
      patientCounselingPoints: [
        'PDE5 inhibitors require sexual stimulation to work',
        'Tadalafil can be taken daily at a low dose for spontaneous activity',
        'Don\'t take ED medications with nitrates (nitroglycerin)—dangerous drop in blood pressure',
        'Morning testosterone levels are most accurate for testing'
      ],
    },
    3: {
      level: 3,
      summary: 'ED pathophysiology involves nitric oxide-mediated vasodilation of penile arteries, with evaluation including hormonal assessment, vascular testing, and specialized studies when indicated.',
      explanation: `## Normal Erectile Physiology

**Initiation (Neural):**
- Parasympathetic input (S2-4) via pelvic nerves
- Nitric oxide (NO) released from nerve terminals
- Sexual arousal triggers this response

**Cellular Mechanism:**
- NO activates guanylate cyclase
- Increases cGMP (cyclic GMP)
- cGMP causes smooth muscle relaxation
- **PDE5 (phosphodiesterase type 5)** breaks down cGMP

**Vascular Events:**
- Arterial dilation (helicine arteries)
- Blood flow increases 20-40x baseline
- Sinusoids fill with blood
- Emissary veins compressed against tunica albuginea
- Venous outflow reduced (veno-occlusion)
- Intracavernous pressure rises to systemic levels

**Detumescence:**
- Sympathetic discharge (T11-L2)
- Contraction of cavernous smooth muscle
- PDE5 degrades cGMP
- Arterial inflow decreases
- Venous drainage reopens

## ED Pathophysiology

**Arteriogenic Insufficiency:**
- Atherosclerosis of penile arteries
- Microvascular disease (diabetes, hypertension)
- Reduced arterial inflow
- **"Penis is a barometer of endothelial function"**

**Venous Leak:**
- Tunica albuginea dysfunction
- Inadequate veno-occlusion
- Blood drains despite adequate inflow
- Common after radical prostatectomy

**Neurogenic:**
- Autonomic neuropathy (diabetes)
- Radical prostatectomy (cavernous nerve damage)
- Spinal cord injury
- MS, Parkinson's

**Hormonal:**
- Low testosterone (decreases libido, NO production)
- Hyperproactinemia (inhibits GnRH)
- Thyroid disorders
- Cortisol excess

## Diagnostic Evaluation

**Hormonal Assessment:**
- **Total testosterone:** Morning draw (< 300 ng/dL = low)
- **Free testosterone:** If SHBG abnormal
- **LH, FSH:** Distinguish primary vs secondary hypogonadism
- **Prolactin:** If low testosterone with high LH
- **TSH:** Thyroid dysfunction
- **Estradiol:** If on testosterone therapy

**Vascular Testing:**

**Duplex Ultrasound:**
- Baseline and post-injection measurements
- Peak systolic velocity (PSV): < 30 cm/s suggests arterial insufficiency
- End-diastolic velocity (EDV): > 5 cm/s suggests venous leak
- Visualizes plaques, calcifications

**Nocturnal Penile Tumescence (NPT) Testing:**
- Distinguishes organic vs psychogenic
- Normal: 3-6 erections per night, lasting 10-15 minutes
- Absent in organic ED

**Cavernosometry/Cavernosography:**
- Dynamic infusion cavernosometry
- Measures corporal pressure, flow
- Visualizes venous leak
- Rarely performed today

**Neurologic Testing:**
- Bulbocavernosus reflex
- Biothesiometry (penile sensation)
- Usually not necessary unless neurologic symptoms

## Treatment in Detail

**PDE5 Inhibitors (Mechanism):**
- Inhibit degradation of cGMP
- Enhance NO-mediated smooth muscle relaxation
- Require intact NO pathway (need some nerve function)

**Contraindications:**
- **Nitrates:** Absolute contraindication
- **Alpha-blockers:** Risk of hypotension (separate dosing by 4 hours)
- Severe cardiac disease (recent MI, stroke)

**Drug Interactions:**
- Alpha-blockers (doxazosin, tamsulosin)
- Other vasodilators
- CYP3A4 inhibitors (ketoconazole, ritonavir)

**Intracavernosal Injections:**
- Alprostadil (PGE1) alone or in combination
- Bimix: papaverine + phentolamine
- Trimix: papaverine + phentolamine + alprostadil
- Onset: 5-15 minutes
- Duration: 30-60 minutes
- Risks: Priapism, pain, fibrosis

**Intraurethral Alprostadil (MUSE):**
- Suppository placed in urethra
- Less effective than injections
- Systemic absorption possible (dizziness)
- Vaginal burning in partner reported

**Vacuum Erection Device (VED):**
- Negative pressure draws blood into penis
- Constriction ring maintains erection
- Works for most causes of ED
- Side effects: bruising, cold penis, ejaculation difficulty`,
      keyTerms: [
        { term: 'nitric oxide', definition: 'Gas molecule that signals smooth muscle relaxation in the penis; key for erections' },
        { term: 'cGMP', definition: 'Cyclic guanosine monophosphate; secondary messenger that causes smooth muscle relaxation' },
        { term: 'veno-occlusion', definition: 'Compression of veins that traps blood in the penis during erection' },
        { term: 'priapism', definition: 'Prolonged erection lasting > 4 hours; medical emergency' },
        { term: 'PSV', definition: 'Peak systolic velocity; ultrasound measure of arterial blood flow to penis' },
        { term: 'EDV', definition: 'End-diastolic velocity; ultrasound measure suggesting venous leak if elevated' },
        { term: 'tunica albuginea', definition: 'Tough fibrous covering of the corpora cavernosa; essential for veno-occlusion' },
      ],
      clinicalNotes: 'Check morning testosterone (before 10 AM) when evaluating ED. PDE5 inhibitors are contraindicated with nitrates—can cause fatal hypotension. Consider duplex ultrasound for men who don\'t respond to PDE5 inhibitors to identify vascular etiology.',
    },
    4: {
      level: 4,
      summary: 'Complex ED management addresses refractory cases, penile rehabilitation after prostate cancer treatment, psychogenic ED, and distinguishing organic from psychogenic causes.',
      explanation: `## Refractory ED: Treatment Failure

**Definition:**
- No response to maximum dose PDE5 inhibitors
- Trials on multiple agents
- Proper technique confirmed

**Evaluation:**
- Confirm adequate trial (at least 8 doses)
- Check testosterone level
- Review for drug interactions
- Consider vascular testing (duplex ultrasound)
- Assess for psychogenic factors

**Advanced Treatments:**

**Combination Therapy:**
- PDE5 inhibitor + VED
- PDE5 inhibitor + intracavernosal injection
- Enhanced response vs either alone

**Penile Implant (Prosthesis):**
- **Inflatable:** 3-piece (reservoir, cylinders, pump) or 2-piece
  - Most natural appearance
  - Patient controls erection
  - Higher satisfaction rates
  - Mechanical failure risk over time
- **Malleable (Semi-rigid):**
  - Simpler surgery
  - Always firm but bendable
  - Lower cost
  - Lower mechanical failure

**Indications for Implant:**
- PDE5 inhibitor failure
- Patient preference
- Congenital curvature
- Severe Peyronie's disease with ED

**Outcomes:**
- High satisfaction (85-95%)
- Partner satisfaction often similar
- Infection risk (2-3%)
- Mechanical failure (5-10% at 10 years)

## Post-Prostatectomy ED

**Penile Rehabilitation:**
- Early treatment after radical prostatectomy
- Goals: Preserve tissue, improve recovery
- Daily PDE5 inhibitor or regular VED/injection use

**Recovery Timeline:**
- **0-3 months:** Most severe ED
- **3-12 months:** Gradual improvement
- **12-24 months:** Plateau in recovery
- Nerve-sparing technique improves outcomes
- Age is major factor (younger = better recovery)

**Rehabilitation Strategies:**
- **Daily PDE5 inhibitor:** Low-dose tadalafil or sildenafil
- **Regular VED use:** 2-3 times weekly
- **Intracavernosal injections:** For refractory cases
- **Combination approaches:** Often most effective

**Outcomes:**
- Spared nerves: 40-70% return of function
- Non-nerve-sparing: < 15% recovery
- Early rehabilitation may improve outcomes

## Psychogenic ED

**Characteristics:**
- Sudden onset
- Situational (partner-specific)
- Normal nocturnal/morning erections
- Often related to performance anxiety

**Approach:**
- Validate the problem is real
- Address the psychological factors
- Counseling (individual, couples, sex therapy)
- Consider pharmacologic help while addressing psychology
- Cognitive behavioral therapy (CBT)

**Relationship Issues:**
- Communication problems
- Resentment, lack of intimacy
- Mismatched sexual desire
- Couples therapy essential

**Depression and Anxiety:**
- Both can cause ED
- ED can worsen depression (cycle)
- Treat underlying condition
- Consider bupropion (less sexual side effects)

## Peyronie's Disease

**Pathophysiology:**
- Fibrosis of tunica albuginea
- Plaque formation causes curvature
- Often associated with ED
- May follow trauma (often unnoticed)

**Phases:**
- **Acute:** Painful, changing curvature (6-18 months)
- **Chronic:** Stable curvature, pain resolved

**Treatment:**
- **Acute:** Oral (colchicine, pentoxifylline), intralesional injections (verapamil, Xiaflex), traction therapy
- **Chronic:** Surgery if curvature interferes with intercourse
  - Plication (shortening side opposite plaque)
  - Plaque excision with graft
  - Penile implant if severe ED

## Hormonal Management

**Testosterone Replacement Therapy (TRT):**
- Indicated if low testosterone AND symptoms
- Improves libido, may improve ED
- Forms:
  - Injections (testosterone cypionate/enanthate)
  - Gel (AndroGel, Testim)
  - Patches
  - Pellets (Testopel)
- Monitoring: PSA, hematocrit, testosterone levels

**Contraindications to TRT:**
- Untreated prostate cancer
- Breast cancer
- Untreated sleep apnea
- Uncontrolled heart failure
- Desire for fertility (decreases sperm production)

**Hyperprolactinemia:**
- Dopamine agonists (cabergoline, bromocriptine)
- Improves libido, may restore testosterone

## Special Populations

**Diabetes:**
- Microvascular disease common
- Neuropathy contributes
- May need combination therapy
- Tight glycemic control helps prevent progression

**Spinal Cord Injury:**
- Depends on level and completeness
- Upper motor neuron: Reflex erections possible
- Lower motor neuron: Difficulty with erections
- VED or injections often effective
- Ejaculatory dysfunction common

**Young Men (< 40):**
- Consider psychogenic causes
- Rule out hormonal causes
- Arterial insufficiency from pelvic trauma
- High satisfaction with treatment

**Elderly Men:**
- Multiple comorbidities
- Polypharmacy concerns
- Manage expectations
- Consider all options including implant`,
      keyTerms: [
        { term: 'penile rehabilitation', definition: 'Therapy after prostate cancer surgery to improve erectile function recovery' },
        { term: 'nerve-sparing', definition: 'Surgical technique preserving the cavernous nerves during prostatectomy' },
        { term: 'Xiaflex', definition: 'Collagenase clostridium histolyticum; injectable for Peyronie\'s disease' },
        { term: 'plication', definition: 'Surgical technique shortening one side to straighten curved penis' },
        { term: 'TRT', definition: 'Testosterone replacement therapy; treatment for hypogonadism' },
      ],
      clinicalNotes: 'Penile implants have high satisfaction rates despite being last-line—many men wish they had chosen them earlier. After radical prostatectomy, start penile rehabilitation within 3-6 months for best recovery. Always check testosterone in men with ED and low libido.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ED management explores stem cell therapy, shockwave therapy, PRP injections, novel pharmacologic agents, and precision medicine approaches based on genetic and vascular profiling.',
      explanation: `## Regenerative Therapies

**Low-Intensity Shockwave Therapy (LiSWT):**
- Acoustic waves promote angiogenesis
- Improves endothelial function
- May restore natural erectile function
- Protocol: 1-2 sessions weekly for 6-12 weeks
- Evidence: Mixed but promising in select patients
- Best for vasculogenic ED
- FDA status: Not approved for ED (off-label)

**Stem Cell Therapy:**
- **Adipose-derived stem cells (ADSCs):** Liposuction harvest
- **Bone marrow-derived stem cells:** Aspirate from ilium
- **Platelet-rich plasma (PRP):** Autologous growth factors
- Mechanism: Paracrine effects, angiogenesis, tissue regeneration
- Delivery: Intracavernosal injection
- Evidence: Early studies, limited standardization
- Challenges: Cell survival, optimal dosing, regulatory

**Combination Approaches:**
- LiSWT + stem cells
- PRP + stem cells
- Stem cells + PDE5 inhibitor
- Synergistic effects proposed

## Novel Pharmacologic Agents

**Soluble Guanylate Cyclase (sGC) Stimulators:**
- **Riociguat:** Approved for pulmonary hypertension
- Works independently of NO
- Theoretical benefit in PDE5 inhibitor non-responders
- Limited ED data

**Rho-Kinase Inhibitors:**
- Rho-kinase involved in smooth muscle contraction
- Inhibition promotes relaxation
- Preclinical investigation

**Melanocortin Agonists:**
- **Melanotan II:** Central action on sexual arousal
- **Bremelanotide:** Approved for female sexual dysfunction
- Investigational for male ED

**Dopamine Agonists:**
- **Apomorphine SL:** Sublingual (approved in Europe)
- Central action on hypothalamic pathways
- Limited efficacy

**Gene Therapy:**
- **hSlo gene (Maxi-K):** Potassium channel
- **Vascular endothelial growth factor (VEGF):** Angiogenesis
- **Nitric oxide synthase (NOS):** Increase NO production
- Early-phase trials only

## Advanced Diagnostics

**Penile Imaging Advances:**
- **High-resolution MRI:** Visualizes fibrosis, plaques
- **CT angiography:** Pelvic arterial anatomy
- **4D ultrasound:** Dynamic blood flow assessment

**Biomarker Discovery:**
- Endothelial dysfunction markers
- Inflammatory cytokines
- Genetic markers of response
- Erectile tissue-specific proteins

**Genetic Testing:**
- Androgen receptor polymorphisms
- eNOS gene variants
- PDE5 gene variants
- Pharmacogenomic prediction of treatment response

## Precision Medicine Approaches

**Phenotypic Classification:**
- Arteriogenic: Focus on vascular health
- Venous leak: Surgical options or implants
- Neurogenic: Rehabilitation, injections
- Hormonal: TRT if indicated
- Psychogenic: Counseling, therapy

**Predictive Modeling:**
- Machine learning algorithms
- Predict treatment response
- Personalize therapy selection
- Incorporate patient preferences

## Vascular Health Optimization

**"The Penis is a Barometer":**
- ED often precedes CAD by 2-5 years
- Opportune time for cardiovascular risk assessment
- Treat ED as cardiovascular risk equivalent

**Comprehensive Approach:**
- **Lifestyle modification:** Exercise, weight loss, smoking cessation
- **Cardiovascular risk optimization:** Statins, antihypertensives
- **Glycemic control:** In diabetics
- **Testosterone optimization:** If deficient

**Statins and ED:**
- Mixed evidence
- May improve endothelial function
- Can worsen ED in some
- Individualized approach

## Surgical Innovation

**Penile Implant Advances:**
- **Infection-resistant coatings:** Antibiotic dip, hydrophilic coating
- **Improved durability:** Longer-lasting devices
- **Enhanced cylinders:** Better girth expansion
- **Remote-controlled:** Early-stage development

**Vascular Surgery:**
- **Arterial revascularization:** For young men with arterial injury
- **Venous ligation:** For pure venous leak (rare)
- Largely replaced by implants

**Robotic Surgery:**
- Robotic penile implantation
- Improves precision
- Early experience

## Future Directions

**Nanotechnology:**
- Targeted drug delivery
- Enhanced stem cell survival
- Tissue engineering scaffolds

**Tissue Engineering:**
- Bioengineered corporal tissue
- Regeneration of smooth muscle
- Nerve regeneration strategies

**Artificial Intelligence:**
- Diagnostic assistance
- Treatment selection algorithms
- Outcome prediction
- Automated postoperative monitoring

**Telemedicine:**
- Remote ED consultation
- Digital prescription
- Virtual follow-up
- Improved access

**Regulatory Changes:**
- OTC status for some PDE5 inhibitors (international)
- Direct-to-consumer testing
- Expanded access to therapies

## Research Gaps

**Long-term LiSWT data:**
- Durability beyond 2 years
- Optimal retreatment protocol
- Patient selection criteria

**Stem cell standardization:**
- Optimal cell type
- Dose and delivery
- Outcome measures
- Regulatory pathway

**Combination therapy evidence:**
- Which combinations work best
- Treatment sequencing
- Cost-effectiveness

## Special Considerations

**LGBTQ+ Health:**
- ED affects gay and bisexual men
- Consider anal intercourse implications
- HIV status and ED
- PrEP and sexual function

**Gender-Affirming Surgery:**
- Transgender men after phalloplasty
- Erectile prosthesis for neophallus
- Specialized considerations`,
      keyTerms: [
        { term: 'LiSWT', definition: 'Low-intensity shockwave therapy; acoustic wave treatment for vasculogenic ED' },
        { term: 'ADSCs', definition: 'Adipose-derived stem cells; stem cells harvested from fat tissue' },
        { term: 'riociguat', definition: 'Soluble guanylate cyclase stimulator; investigational for ED' },
        { term: 'melanocortin agonists', definition: 'Class of drugs acting on central pathways for sexual arousal' },
        { term: 'eNOS', definition: 'Endothelial nitric oxide synthase; enzyme that produces NO in blood vessels' },
      ],
      clinicalNotes: 'Low-intensity shockwave therapy shows promise for vasculogenic ED but is not FDA-approved for this indication—insurance typically doesn\'t cover. ED often precedes coronary artery disease by years—use it as an opportunity for cardiovascular risk assessment. Stem cell therapies remain experimental.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-ed-2022', type: 'article', title: 'AUA Guideline on Erectile Dysfunction', source: 'Journal of Urology' },
    { id: 'eau-ed-2023', type: 'article', title: 'EAU Guidelines on Sexual and Reproductive Health', source: 'European Association of Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-bph', targetType: 'condition', relationship: 'related', label: 'Benign Prostatic Hyperplasia' },
    { targetId: 'condition-prostatitis', targetType: 'condition', relationship: 'related', label: 'Prostatitis' },
    { targetId: 'condition-hypogonadism', targetType: 'condition', relationship: 'related', label: 'Hypogonadism' },
  ],
  tags: { systems: ['reproductive', 'urinary', 'cardiovascular'], topics: ['urology', 'men\'s health', 'sexual health'], keywords: ['ED', 'erectile dysfunction', 'impotence', 'libido', 'testosterone', 'PDE5 inhibitor'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default erectileDysfunction;
