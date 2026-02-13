/**
 * Erectile Dysfunction - Comprehensive Educational Content
 *
 * Covers pathophysiology, etiology, evaluation, and management
 * of erectile dysfunction including organic and psychogenic causes.
 */

import { EducationalContent } from '../../types';

export const erectileDysfunction: EducationalContent = {
  id: 'condition-erectile-dysfunction',
  type: 'condition',
  name: 'Erectile Dysfunction',
  alternateNames: ['ED', 'Impotence', 'Male Sexual Dysfunction', 'Erectile Impotence'],

  levels: {
    1: {
      level: 1,
      summary: 'Erectile dysfunction is when a man has trouble getting or keeping an erection firm enough for sexual activity.',
      explanation: `Erectile dysfunction (ED) is a common condition where a man has difficulty achieving or maintaining an erection. This can happen occasionally to anyone, but when it happens frequently, it may need medical attention.

**How Erections Work:**
When a man becomes sexually aroused, blood flows into the penis and fills spongy tissue, making it firm. The blood stays trapped there during an erection. When arousal ends, the blood flows back out.

**What Causes ED:**
- **Blood flow problems**: Heart disease, high blood pressure, diabetes, or clogged arteries can reduce blood flow to the penis
- **Nerve problems**: Diabetes, spinal cord injury, or surgery can damage nerves needed for erections
- **Hormone issues**: Low testosterone can reduce sex drive and erections
- **Emotional factors**: Stress, anxiety, depression, or relationship problems
- **Medications**: Some blood pressure pills and antidepressants can cause ED
- **Lifestyle factors**: Smoking, heavy drinking, being overweight, lack of exercise

**When to See a Doctor:**
- ED happens more than half the time
- It bothers you or your partner
- You have other symptoms like pain or difficulty urinating

**Treatment Options:**
- **Lifestyle changes**: Quit smoking, exercise, lose weight, reduce alcohol
- **Pills**: Medications like Viagra or Cialis help blood flow to the penis
- **Counseling**: Helps with stress, anxiety, or relationship issues
- **Other treatments**: Injections, pumps, or surgery for severe cases

**Good News:**
ED is very treatable! Most men find a treatment that works for them.`,
      keyTerms: [
        { term: 'erection', definition: 'When the penis becomes firm and enlarged due to increased blood flow' },
        { term: 'erectile dysfunction', definition: 'Difficulty getting or keeping an erection firm enough for sex' },
        { term: 'testosterone', definition: 'The main male sex hormone that affects sex drive' },
        { term: 'arousal', definition: 'Sexual excitement that triggers physical responses in the body' },
      ],
      analogies: [
        'An erection works like a water balloon - blood fills the penis like water fills a balloon, making it firm.',
        'Blood vessels to the penis are like pipes - if they get clogged or narrowed, less blood can flow through.',
        'Nerves controlling erections are like electrical wires - if damaged, the signal cannot get through.',
      ],
      examples: [
        'A 55-year-old man with diabetes and high blood pressure notices he cannot maintain erections like he used to - his blood vessel health is affecting blood flow to the penis.',
        'A 35-year-old man under high stress at work starts having erection problems - once he addresses his stress, his erections improve.',
      ],
    },
    2: {
      level: 2,
      summary: 'Erectile dysfunction results from vascular, neurological, hormonal, or psychological factors affecting the complex process of penile erection, with treatment ranging from lifestyle modifications to pharmacotherapy.',
      explanation: `## Definition and Epidemiology
- Inability to achieve or maintain erection sufficient for satisfactory sexual performance
- Prevalence: 20% of men over 20, increasing with age (40% by age 40, 70% by age 70)
- Often an early marker of cardiovascular disease

## Physiology of Erection

**Normal Mechanism:**
1. Sexual stimulation activates parasympathetic nerves
2. Nitric oxide (NO) released from nerve endings and endothelium
3. NO activates guanylate cyclase, increasing cGMP
4. cGMP causes smooth muscle relaxation in corpora cavernosa
5. Blood fills sinusoidal spaces, compressing venous outflow
6. Penis becomes rigid

**Phases of Erection:**
- Latent phase: Initial arousal, nerve activation
- Tumescence: Filling phase, increasing rigidity
- Full erection: Maximum rigidity, venous occlusion
- Detumescence: Return to flaccid state after ejaculation or arousal cessation

## Etiology

**Organic Causes (80%):**

| Category | Examples |
|----------|----------|
| Vascular | Atherosclerosis, hypertension, diabetes, hyperlipidemia |
| Neurological | Diabetes neuropathy, spinal cord injury, multiple sclerosis, prostatectomy |
| Hormonal | Hypogonadism, hyperprolactinemia, thyroid disorders |
| Medication-induced | Antihypertensives, antidepressants, antiandrogens |
| Anatomical | Peyronie's disease, penile fracture |

**Psychogenic Causes (20%):**
- Performance anxiety
- Depression
- Relationship problems
- Stress

**Mixed Etiology:**
- Most patients have combination of factors
- Psychological factors often develop secondary to organic ED

## Risk Factors
- Age (strongest predictor)
- Diabetes mellitus (3-4x increased risk)
- Cardiovascular disease
- Smoking
- Obesity
- Sedentary lifestyle
- Alcohol abuse
- Medications

## Evaluation

**History:**
- Onset (gradual vs sudden)
- Severity and progression
- Nocturnal/morning erections (preserved = likely psychogenic)
- Libido assessment
- Medication review
- Psychological assessment

**Physical Examination:**
- Cardiovascular: Blood pressure, peripheral pulses
- Genitourinary: Penis (Peyronie's plaques), testicles (size)
- Neurological: Sensation, reflexes
- Endocrine: Secondary sexual characteristics

**Laboratory:**
- Fasting glucose/HbA1c
- Lipid panel
- Testosterone (morning sample)
- TSH if indicated

## Treatment

**First-Line: Lifestyle Modification:**
- Smoking cessation
- Weight loss
- Exercise
- Reduce alcohol
- Address modifiable risk factors

**Pharmacotherapy - PDE5 Inhibitors:**
| Drug | Onset | Duration |
|------|-------|----------|
| Sildenafil (Viagra) | 30-60 min | 4-6 hours |
| Tadalafil (Cialis) | 30-45 min | 24-36 hours |
| Vardenafil (Levitra) | 30-60 min | 4-6 hours |
| Avanafil (Stendra) | 15-30 min | 6 hours |

- Mechanism: Block PDE5 enzyme that breaks down cGMP
- Contraindication: Nitrate use (severe hypotension risk)
- Efficacy: 60-70% response rate

**Second-Line Therapies:**
- Vacuum erection devices
- Intracavernosal injections (alprostadil)
- Intraurethral suppositories

**Third-Line:**
- Penile prosthesis (inflatable or malleable)`,
      keyTerms: [
        { term: 'phosphodiesterase-5 (PDE5)', definition: 'Enzyme that breaks down cGMP, reducing erection; PDE5 inhibitors block this' },
        { term: 'nitric oxide', definition: 'Chemical messenger that triggers smooth muscle relaxation for erection' },
        { term: 'corpora cavernosa', definition: 'Two cylindrical chambers in the penis that fill with blood during erection', pronunciation: 'KOR-por-ah kav-er-NO-sah' },
        { term: 'psychogenic', definition: 'Caused by psychological rather than physical factors' },
        { term: 'nocturnal penile tumescence', definition: 'Normal erections during REM sleep; presence suggests intact physical mechanism' },
      ],
      analogies: [
        'PDE5 is like a brake pedal that slows down erections - PDE5 inhibitors release that brake.',
        'The corpora cavernosa work like a sponge that fills with blood and becomes firm.',
        'Nitric oxide acts like a key that unlocks the blood vessels, allowing more blood to enter.',
      ],
    },
    3: {
      level: 3,
      summary: 'Erectile dysfunction involves disruption of the NO-cGMP signaling pathway in penile smooth muscle, with organic causes including vasculogenic, neurogenic, and hormonal etiologies requiring systematic evaluation and stepped treatment approach.',
      explanation: `## Molecular Physiology of Erection

**NO-cGMP Pathway:**
1. Sexual stimulation → parasympathetic activation (S2-S4)
2. Non-adrenergic non-cholinergic (NANC) nerves release NO
3. Endothelial cells also release NO via eNOS activation
4. NO diffuses into smooth muscle cells
5. NO activates soluble guanylate cyclase (sGC)
6. sGC converts GTP → cyclic GMP (cGMP)
7. cGMP activates protein kinase G (PKG)
8. PKG causes:
   - K+ channel opening → hyperpolarization
   - Ca2+ sequestration into sarcoplasmic reticulum
   - Decreased intracellular Ca2+
9. Smooth muscle relaxation → arterial dilation → increased inflow
10. Sinusoidal filling compresses subtunical venules
11. Veno-occlusive mechanism → rigid erection

**Detumescence:**
- Sympathetic activation (norepinephrine)
- PDE5 degrades cGMP
- Smooth muscle contraction
- Venous drainage resumes

## Pathophysiology by Etiology

**Vasculogenic ED:**
- Most common organic cause
- Atherosclerosis affects penile arteries (smaller than coronary arteries)
- ED may precede cardiovascular events by 2-5 years
- Endothelial dysfunction → decreased NO production
- Arterial insufficiency and/or venous leak

**Neurogenic ED:**
- Central: Spinal cord injury, MS, stroke, Parkinson's
- Peripheral: Diabetic neuropathy, radical prostatectomy, pelvic radiation
- Cavernous nerve injury during prostatectomy → 25-75% develop ED

**Hormonal ED:**
- Testosterone maintains libido AND erectile function
- Required for NOS expression in corpus cavernosum
- Hypogonadism: Low testosterone (<300 ng/dL)
- Hyperprolactinemia: Inhibits GnRH → low testosterone

**Drug-Induced ED:**
| Drug Class | Mechanism |
|------------|-----------|
| Thiazides | Unclear; possibly decreased blood flow |
| Beta-blockers | Central sedation, decreased NO release |
| Spironolactone | Antiandrogen effects |
| SSRIs | Serotonergic effects, delayed ejaculation → ED |
| Antiandrogens | Direct hormonal effect |
| Alcohol | Acute: vasodilation; Chronic: neuropathy, hypogonadism |

## Diagnostic Evaluation

**Validated Questionnaires:**
- International Index of Erectile Function (IIEF-5)
- Sexual Health Inventory for Men (SHIM)
- Score <21 indicates ED

**Laboratory Workup:**
- Morning testosterone (8-10 AM)
- If low: Repeat + LH, FSH, prolactin
- Fasting glucose, HbA1c
- Lipid panel
- Consider PSA if > 40 years

**Specialized Testing (when indicated):**

*Nocturnal Penile Tumescence Testing:*
- RigiScan device monitors nocturnal erections
- Preserved NPT suggests psychogenic cause
- Absent/reduced NPT suggests organic cause

*Penile Doppler Ultrasound:*
- After intracavernosal injection of prostaglandin
- Measures peak systolic velocity (PSV) and resistive index
- PSV < 25 cm/s suggests arterial insufficiency
- PSV > 35 cm/s with poor erection suggests venous leak

*Cavernosometry/Cavernosography:*
- Measures flow needed to maintain erection
- Identifies site of venous leak
- Used if venous surgery considered

## Treatment Algorithm

**Step 1: Risk Factor Modification**
- Cardiovascular risk assessment
- Lifestyle modification
- Optimize comorbidities (DM, HTN, hyperlipidemia)
- Medication adjustment if drug-induced

**Step 2: PDE5 Inhibitors**

*Mechanism:*
- Competitive inhibition of PDE5
- Prolongs cGMP half-life
- Requires sexual stimulation (not direct initiator)

*Prescribing Considerations:*
- Start lowest dose, titrate up
- Adequate trial: 4-6 attempts
- Take on empty stomach (except tadalafil)
- Absolute contraindication: Nitrates (within 24h of short-acting, 48h of tadalafil)

*Comparative Features:*
| Feature | Sildenafil | Tadalafil | Vardenafil | Avanafil |
|---------|------------|-----------|------------|----------|
| T-max | 1 hr | 2 hr | 1 hr | 30 min |
| Half-life | 4 hr | 17.5 hr | 4 hr | 5 hr |
| Food effect | Yes | No | Yes | Minimal |
| Daily dosing | No | Yes (2.5-5mg) | No | No |

**Step 3: Second-Line Therapies**

*Intracavernosal Injections:*
- Alprostadil (PGE1): Increases cAMP
- Tri-mix: Alprostadil + papaverine + phentolamine
- 85-90% efficacy
- Risk: Priapism, fibrosis

*Vacuum Erection Devices:*
- Creates negative pressure → blood inflow
- Constriction ring maintains erection
- 60-70% satisfaction
- Useful post-prostatectomy during nerve recovery

*Intraurethral Alprostadil (MUSE):*
- Prostaglandin suppository
- Lower efficacy than injection (40%)

**Step 4: Penile Prosthesis**
- Surgical implantation
- Types: Malleable (semi-rigid) vs inflatable (3-piece)
- 90% satisfaction rates
- Reserved for refractory ED
- Destroys natural erectile tissue (irreversible)`,
      keyTerms: [
        { term: 'soluble guanylate cyclase', definition: 'Enzyme activated by NO that produces cGMP from GTP in penile smooth muscle' },
        { term: 'veno-occlusive mechanism', definition: 'Compression of subtunical venules by expanding sinusoids that traps blood in the penis' },
        { term: 'cavernous nerves', definition: 'Nerves from pelvic plexus that control penile smooth muscle; often injured during prostatectomy' },
        { term: 'nocturnal penile tumescence', definition: 'Normal erections during REM sleep used to differentiate organic from psychogenic ED' },
        { term: 'priapism', definition: 'Prolonged painful erection lasting >4 hours requiring emergency treatment' },
      ],
      clinicalNotes: 'ED in men <50 without risk factors warrants cardiovascular evaluation - may be early marker of CAD. Nitrate contraindication with PDE5i is absolute - includes recreational nitrites (poppers). Testosterone alone rarely restores erections but may augment PDE5i response.',
    },
    4: {
      level: 4,
      summary: 'Erectile dysfunction pathogenesis involves endothelial dysfunction, autonomic neuropathy, and Rho-kinase upregulation, with emerging therapies targeting regenerative medicine and novel signaling pathways.',
      explanation: `## Advanced Pathophysiology

**Endothelial Dysfunction:**
- Central to both ED and cardiovascular disease
- Decreased eNOS expression and NO bioavailability
- Increased oxidative stress (superoxide dismantles NO)
- Asymmetric dimethylarginine (ADMA): Endogenous NOS inhibitor elevated in ED
- Endothelial progenitor cells (EPCs) reduced in ED patients

**Rho-Kinase Pathway:**
- RhoA/Rho-kinase pathway maintains flaccidity
- Inhibits myosin light chain phosphatase → sustained contraction
- Upregulated in diabetes, hypertension
- RhoA/ROCK inhibitors under investigation for ED

**Insulin Resistance and ED:**
- PI3K/Akt pathway impaired → decreased eNOS activation
- Advanced glycation end products (AGEs) damage cavernous tissue
- Diabetic neuropathy affects cavernous nerves
- Diabetes causes 3-4x increased ED risk

**Penile Fibrosis:**
- Chronic ischemia → fibroblast activation
- TGF-β1 upregulation
- Collagen deposition replaces smooth muscle
- Decreased compliance → corporeal veno-occlusive dysfunction (CVOD)

## Hormonal Considerations

**Testosterone and Erectile Function:**
- Required for NOS expression
- Maintains structural integrity of erectile tissue
- Modulates PDE5 expression
- Low testosterone associated with reduced PDE5i response

**Testosterone Threshold Effect:**
- Erections maintained until T drops below threshold (~200-300 ng/dL)
- Below threshold: Androgen replacement may restore function
- Above threshold: Additional T provides little benefit

**Evaluation of Hypogonadism:**
- Morning total testosterone (8-10 AM)
- If borderline (200-400 ng/dL): Repeat + free T, SHBG
- If low: LH, FSH to distinguish primary vs secondary
- MRI sella if secondary hypogonadism or elevated prolactin

**Testosterone Replacement:**
- Options: Injections, gel, patches, pellets
- Monitor: T levels, hematocrit, PSA
- Contraindications: Prostate cancer, severe BPH, polycythemia, OSA
- May enhance PDE5i response

## Post-Prostatectomy ED

**Nerve Injury Patterns:**
- Bilateral nerve-sparing: 40-70% recover erections
- Unilateral nerve-sparing: 30-50% recover
- Non-nerve-sparing: <20% recover

**Recovery Timeline:**
- Neurapraxia: Nerves intact but stunned
- Recovery typically 6-24 months
- Cavernous smooth muscle apoptosis occurs during denervation

**Penile Rehabilitation:**
- Goal: Maintain oxygenation and prevent fibrosis
- Low-dose daily PDE5i (tadalafil 5mg)
- Vacuum device 2-3x weekly
- Early intracavernosal injection therapy
- Evidence mixed but widely practiced

## Advanced Diagnostics

**Penile Duplex Doppler Ultrasonography:**

*Technique:*
- Intracavernosal injection (PGE1 10-20mcg or trimix)
- Measure at 10-15 minute intervals
- Evaluate in multiple planes

*Parameters:*
| Measurement | Normal | Abnormal |
|-------------|--------|----------|
| Peak systolic velocity (PSV) | >35 cm/s | <25 cm/s (arterial insufficiency) |
| End diastolic velocity (EDV) | <5 cm/s | >5 cm/s (venous leak) |
| Resistive index | >0.9 | <0.75 (venous leak) |

*Interpretation:*
- PSV >35, good rigidity: Normal vasculature
- PSV <25: Arterial insufficiency
- PSV >35, EDV >5, poor rigidity: Venous leak
- PSV 25-35: Borderline, may be anxiety-related

**Dynamic Infusion Cavernosometry/Cavernosography (DICC):**
- Measures maintenance flow rate
- Normal: <3 mL/min to maintain erection
- Venous leak: >10 mL/min
- Cavernosography localizes leak sites
- Used if considering venous ligation surgery

## Complex Treatment Scenarios

**PDE5 Inhibitor Non-Responders:**
*Optimization Strategies:*
- Adequate trial (6-8 attempts)
- Proper dosing (maximum approved dose)
- Address confounders (alcohol, heavy meal, timing)
- Verify adequate sexual stimulation

*True Non-Responders:*
- ~30-40% fail PDE5i
- Evaluate for hypogonadism (T augmentation)
- Consider combination therapy
- Transition to second-line options

**Combination Therapies:**
- PDE5i + testosterone (if hypogonadal)
- PDE5i + vacuum device
- PDE5i + low-dose intracavernosal (controversial)

**Cardiac Risk Stratification:**
| Risk Level | Definition | Recommendation |
|------------|------------|----------------|
| Low | Controlled HTN, mild CAD, >6wk post-MI | Sexual activity safe |
| Intermediate | 3+ cardiac risk factors, moderate CAD | Cardiac evaluation before resuming |
| High | Unstable angina, uncontrolled HTN, severe CHF | Defer until stabilized |

**Priapism Management:**
- Ischemic (low-flow): Emergency - cavernosal aspiration, phenylephrine injection
- Non-ischemic (high-flow): Less urgent - usually trauma-related, observation vs embolization
- Stuttering priapism (recurrent): Oral phenylephrine, androgen suppression`,
      keyTerms: [
        { term: 'RhoA/Rho-kinase pathway', definition: 'Signaling pathway that maintains penile smooth muscle contraction; upregulated in ED' },
        { term: 'endothelial progenitor cells', definition: 'Circulating cells that repair damaged endothelium; reduced in ED and cardiovascular disease' },
        { term: 'corporeal veno-occlusive dysfunction', definition: 'Venous leak due to impaired compression of subtunical venules; often from fibrosis' },
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; binds testosterone, making it unavailable; increases with age' },
        { term: 'penile rehabilitation', definition: 'Post-prostatectomy interventions to maintain cavernosal tissue health during nerve recovery' },
      ],
      clinicalNotes: 'ED precedes cardiovascular events by 2-5 years in men without known CVD - consider cardiac workup. Post-prostatectomy penile rehabilitation should start early (within weeks). Testosterone augmentation may help PDE5i non-responders with borderline T levels. Ischemic priapism is urological emergency - irreversible damage after 4-6 hours.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ED management integrates cardiovascular risk assessment, precision diagnostics, regenerative therapies including stem cells and low-intensity shockwave therapy, and individualized treatment algorithms addressing the shared pathophysiology with metabolic syndrome.',
      explanation: `## ED as Cardiovascular Risk Marker

**Artery Size Hypothesis:**
- Penile arteries (1-2mm) < coronary arteries (3-4mm) < carotid (5-7mm)
- Same atherosclerotic process affects smaller arteries first
- ED precedes CAD symptoms by average 3-5 years
- 50% of men presenting with ACS have prior ED

**Guidelines for CV Risk Assessment:**
- All men with ED should be assessed for CV risk factors
- ED in men 40-70 considered equivalent to 1 major CV risk factor
- AUA/Princeton Consensus: Cardiac evaluation before resuming sexual activity in intermediate-risk patients

**MACE Risk:**
- Meta-analyses show ED independently predicts MACE
- Hazard ratio 1.4-1.6 for cardiovascular events
- Risk elevated even after adjusting for traditional risk factors

## Emerging Pathophysiological Targets

**Hydrogen Sulfide (H2S):**
- Gasotransmitter like NO
- Cystathionine beta-synthase (CBS) produces H2S in corpus cavernosum
- Causes smooth muscle relaxation via KATP channels
- Decreased in diabetic ED
- H2S donors under investigation

**Melanocortin System:**
- MC4R agonists stimulate central erectile pathways
- Bremelanotide (Vyleesi): Approved for female hypoactive sexual desire
- PT-141 analog investigated for ED
- Works centrally, not peripherally

**Ion Channel Targets:**
- Maxi-K (BKCa) channels: Activated by cGMP/PKG
- Gene therapy with Maxi-K under investigation
- Bypass impaired NO-cGMP pathway

## Regenerative Medicine Approaches

**Low-Intensity Extracorporeal Shockwave Therapy (LI-ESWT):**

*Mechanism:*
- Mechanical energy induces angiogenesis
- Upregulates VEGF, eNOS
- Recruits endothelial progenitor cells
- May improve endothelial function

*Clinical Evidence:*
- Multiple RCTs show improvement in IIEF scores
- Heterogeneous protocols (energy, frequency, sessions)
- Best evidence for mild-moderate vasculogenic ED
- Meta-analyses show modest benefit (2-4 point IIEF improvement)
- AUA: Not recommended outside clinical trials (insufficient evidence)

**Platelet-Rich Plasma (PRP):**
- Growth factors: PDGF, TGF-β, VEGF
- Theoretical angiogenesis and tissue regeneration
- P-Shot: Commercial application
- Limited clinical evidence, not in guidelines

**Stem Cell Therapy:**

*Cell Sources Investigated:*
- Adipose-derived stem cells (ADSCs)
- Bone marrow mesenchymal stem cells (BMSCs)
- Umbilical cord-derived cells

*Mechanisms:*
- Paracrine effects (growth factors, cytokines)
- Angiogenesis promotion
- Anti-fibrotic effects
- Neural regeneration potential

*Clinical Evidence:*
- Phase I/II trials show safety
- Some efficacy signals in small trials
- Not standard of care; ongoing investigation
- Regulatory concerns with commercial "stem cell clinics"

## Advanced Surgical Management

**Penile Prosthesis Outcomes:**

*Device Types:*
- Malleable: Simpler, lower cost, always semi-rigid
- 2-piece inflatable: Pump in scrotum, reservoir integrated
- 3-piece inflatable: Most natural, reservoir in abdomen

*Modern Outcomes:*
- 5-year revision-free survival: 90-95%
- Patient satisfaction: 90-97%
- Partner satisfaction: 85-95%
- Infection rate: 1-3% (with antibiotic coatings)

*Complications:*
- Infection (most feared): May require explant
- Mechanical failure: Cylinder leak, pump malfunction
- Erosion: Through urethra or skin
- Autoinflation: Spontaneous inflation

**Venous Surgery (largely abandoned):**
- Historically: Venous ligation for venous leak
- Poor long-term results (<50% success at 5 years)
- Collateral pathways develop
- Rarely performed except select cases (congenital venous leak)

**Arterial Revascularization:**
- For isolated arterial injury (pelvic trauma, young men)
- Inferior epigastric artery to dorsal penile artery
- Success in select populations (60-70%)
- Not for generalized atherosclerosis

## Special Populations

**Diabetes Mellitus:**
- 35-75% prevalence of ED
- Earlier onset, more severe
- Lower PDE5i response (50% vs 70%)
- Multiple mechanisms: Neuropathy, vasculopathy, hormonal
- Glycemic control modestly reduces progression
- Consider testosterone evaluation; higher prevalence of hypogonadism

**Post-Radiation:**
- Pelvic radiation for prostate/rectal cancer
- Progressive ED over 2-3 years
- Vascular damage and fibrosis
- Lower PDE5i response
- May need injection therapy or prosthesis earlier

**Peyronie's Disease:**
- Penile curvature from fibrous plaque
- 20-40% associated with ED
- Evaluate before treating either condition
- Collagenase (Xiaflex) for curvature
- If severe ED + curvature: Consider prosthesis with plication/grafting

## Emerging Therapeutics

**Novel Drug Targets:**
| Target | Drug/Approach | Status |
|--------|---------------|--------|
| sGC activators | Riociguat analogs | Investigational |
| Rho-kinase inhibitors | Fasudil derivatives | Preclinical |
| MC4R agonists | Bremelanotide analogs | Investigational |
| Gene therapy | Maxi-K channel | Phase I |
| Topical PDE5i | Topical alprostadil + | Some approved (EU) |

**Combination Approaches:**
- Dual PDE5i + sGC stimulator (theoretical synergy)
- PDE5i + vacuum device + rehabilitation
- Regenerative (ESWT, PRP) + pharmacotherapy

**Digital Health:**
- Telemedicine expansion for ED (post-COVID)
- At-home NPT monitoring devices
- Apps for adherence and tracking

## Quality Metrics and Outcomes

**Patient-Reported Outcomes:**
- IIEF-5 (SHIM): Most validated
- Erectile Hardness Score (EHS): 0-4 scale
- Quality of Erection Questionnaire (QEQ)
- Partner assessments important

**Treatment Goals:**
- Not just penetration but satisfaction
- Spontaneity considerations (daily tadalafil)
- Quality of life impact
- Partner involvement in decisions`,
      keyTerms: [
        { term: 'low-intensity extracorporeal shockwave therapy', definition: 'Mechanical energy therapy aiming to induce angiogenesis in penile tissue; investigational for vasculogenic ED' },
        { term: 'melanocortin-4 receptor', definition: 'Central nervous system receptor involved in sexual arousal; target for novel erectogenic therapies' },
        { term: 'artery size hypothesis', definition: 'Theory that smaller penile arteries manifest atherosclerosis before coronary arteries, explaining ED as early CVD marker' },
        { term: 'penile rehabilitation', definition: 'Post-prostatectomy protocol using PDE5i, vacuum devices, or injections to prevent cavernosal fibrosis' },
        { term: 'adipose-derived stem cells', definition: 'Mesenchymal stem cells from fat tissue being investigated for regenerative ED therapy' },
      ],
      clinicalNotes: `**Board-Relevant Clinical Pearls:**
- ED precedes cardiovascular events by 3-5 years; all ED patients warrant CV risk assessment
- PDE5i absolute contraindication: Nitrates (24h for short-acting, 48h for tadalafil)
- Low testosterone (<300 ng/dL) warrants further evaluation and may augment PDE5i response
- Post-prostatectomy ED: Start rehabilitation early; recovery may take 24 months
- ESWT has promising but insufficient evidence for routine recommendation (AUA position)
- Penile prosthesis satisfaction >90% but irreversible - destroys natural erectile tissue
- Priapism >4 hours is urological emergency - aspirate and inject phenylephrine`,
    },
  },

  media: [
    {
      id: 'erection-physiology-diagram',
      type: 'diagram',
      filename: 'erection-physiology-diagram.svg',
      title: 'Physiology of Erection',
      description: 'NO-cGMP signaling pathway and hemodynamic changes during erection',
    },
    {
      id: 'pde5i-mechanism',
      type: 'diagram',
      filename: 'pde5i-mechanism.svg',
      title: 'PDE5 Inhibitor Mechanism',
      description: 'How PDE5 inhibitors prolong cGMP signaling',
    },
    {
      id: 'penile-doppler-interpretation',
      type: 'image',
      filename: 'penile-doppler-interpretation.jpg',
      title: 'Penile Duplex Doppler Ultrasound',
      description: 'Normal vs abnormal waveforms in arterial insufficiency and venous leak',
    },
  ],

  citations: [
    {
      id: 'aua-ed-guidelines',
      type: 'article',
      title: 'Erectile Dysfunction: AUA Guideline',
      authors: ['Burnett AL', 'Nehra A', 'Breau RH', 'et al.'],
      source: 'Journal of Urology',
      chapter: '200(3):633-641',
      url: 'https://doi.org/10.1016/j.juro.2018.05.004',
    },
    {
      id: 'campbell-walsh-ed',
      type: 'textbook',
      title: 'Evaluation and Management of Erectile Dysfunction',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '69-71',
      license: 'Elsevier',
    },
    {
      id: 'princeton-consensus',
      type: 'article',
      title: 'Princeton III Consensus Recommendations for the Management of ED and CVD',
      authors: ['Nehra A', 'Jackson G', 'Miner M', 'et al.'],
      source: 'Mayo Clinic Proceedings',
      chapter: '87(8):766-778',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-benign-prostatic-hyperplasia', targetType: 'condition', relationship: 'related', label: 'BPH' },
    { targetId: 'concept-prostate-cancer-screening', targetType: 'concept', relationship: 'related', label: 'Prostate Cancer' },
    { targetId: 'condition-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
  ],

  tags: {
    systems: ['reproductive', 'urinary', 'cardiovascular'],
    topics: ['urology', 'sexual-health', 'andrology'],
    keywords: ['erectile dysfunction', 'impotence', 'PDE5 inhibitors', 'Viagra', 'Cialis', 'penile prosthesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default erectileDysfunction;
