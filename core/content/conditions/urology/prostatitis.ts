/**
 * Prostatitis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const prostatitis: EducationalContent = {
  id: 'condition-prostatitis',
  type: 'condition',
  name: 'Prostatitis',
  alternateNames: ['Prostate Inflammation', 'Chronic Pelvic Pain Syndrome', 'CPPS'],
  hpoId: 'HP:0000013',

  levels: {
    1: {
      level: 1,
      summary: 'Prostatitis is inflammation or infection of the prostate gland that can cause pain in the pelvic area, urinary problems, and sometimes fever.',
      explanation: `The prostate gland can become inflamed or infected, causing various symptoms that can be uncomfortable and affect quality of life.

**Symptoms:**
- Pain or burning during urination
- Pain in the groin, pelvic area, or genitals
- Pain during or after ejaculation
- Frequent urge to urinate
- Fever and chills (with bacterial prostatitis)
- Lower back pain

**Types:**
- **Acute bacterial:** Sudden infection with fever
- **Chronic bacterial:** Recurring infections
- **Chronic pelvic pain:** Pain without infection

**Treatment:**
- Antibiotics for bacterial types
- Pain relievers
- Warm baths (sitz baths)
- Stress management

**When to See a Doctor:**
- Fever with urinary symptoms
- Blood in urine or semen
- Severe pain
- Unable to urinate`,
      keyTerms: [
        { term: 'prostatitis', definition: 'Inflammation or infection of the prostate gland' },
        { term: 'sitz bath', definition: 'Warm shallow bath that covers the hips and buttocks to relieve pelvic pain' },
        { term: 'ejaculation', definition: 'Release of semen from the penis during sexual activity' },
        { term: 'pelvic', definition: 'The lower part of the abdomen, between the hip bones' },
      ],
      analogies: [
        'The prostate during prostatitis is like a swollen bruise—painful, tender to touch, and slow to heal.',
        'Chronic prostatitis is like a car engine that overheats—everything gets inflamed and doesn\'t work smoothly.'
      ],
      examples: [
        'A 45-year-old man develops fever, chills, and severe pelvic pain along with burning urination—he may have acute bacterial prostatitis.',
        'A man has had persistent pelvic pain for 6 months with no sign of infection on tests—he may have chronic pelvic pain syndrome.'
      ],
      patientCounselingPoints: [
        'Acute prostatitis with fever is a medical emergency requiring urgent treatment',
        'Complete the full course of antibiotics even if you feel better',
        'Avoid activities that put pressure on the prostate like prolonged cycling',
        'Stress management and relaxation techniques can help with chronic pain'
      ],
    },
    2: {
      level: 2,
      summary: 'Prostatitis is classified into four categories: acute bacterial, chronic bacterial, chronic pelvic pain syndrome (inflammatory/non-inflammatory), and asymptomatic inflammatory prostatitis.',
      explanation: `## NIH Classification of Prostatitis

**Category I: Acute Bacterial Prostatitis**
- Sudden onset febrile illness
- Typical urinary tract infection pathogen (E. coli most common)
- Requires urgent treatment
- Positive urine culture

**Category II: Chronic Bacterial Prostatitis**
- Recurrent UTIs with same organism
- Symptoms persist > 3 months
- Positive culture of prostate fluid or post-massage urine
- Less common than chronic pelvic pain syndrome

**Category III: Chronic Prostatitis/Chronic Pelvic Pain Syndrome (CPPS)**
- **IIIA:** Inflammatory (white blood cells in expressed prostatic secretions)
- **IIIB:** Non-inflammatory (no WBCs)
- Most common category (90% of cases)
- Negative cultures
- Pain predominant symptom

**Category IV: Asymptomatic Inflammatory Prostatitis**
- No symptoms
- Found incidentally during infertility evaluation or prostate biopsy
- WBCs in prostate secretions or semen

## Diagnostic Approach

**History:**
- Urinary symptoms (frequency, urgency, dysuria)
- Pain location (perineum, suprapubic, genital, back)
- Sexual function (ejaculatory pain, erectile dysfunction)
- Bowel symptoms
- Prior UTIs or prostate procedures

**Physical Exam:**
- Abdominal exam
- Genital exam
- Digital rectal exam (DRE)
  - Assess prostate size, consistency, tenderness

**Laboratory:**
- Urinalysis and culture
- Expressed prostatic secretions (EPS)
- Post-massage urine (VB3)
- PSA may be elevated

## Treatment by Category

**Category I (Acute Bacterial):**
- IV or oral antibiotics for 4-6 weeks
- Fluoroquinolone (ciprofloxacin, levofloxacin)
- Add aminoglycoside if septic
- Hospitalization if unstable
- Avoid prostate massage (can cause bacteremia)

**Category II (Chronic Bacterial):**
- Fluoroquinolone for 4-6 weeks
- TMP-SMX alternative
- Treat for longer duration than simple UTI

**Category III (CPPS):**
- Multimodal approach required
- Alpha-blocker (tamsulosin)
- NSAIDs
- Pelvic floor physical therapy
- Stress management

**Category IV:**
- No treatment required (asymptomatic)`,
      keyTerms: [
        { term: 'CPPS', definition: 'Chic pelvic pain syndrome; chronic prostatitis without evidence of bacterial infection' },
        { term: 'EPS', definition: 'Expressed prostatic secretions; fluid obtained by prostate massage for analysis' },
        { term: 'DRE', definition: 'Digital rectal exam; physical examination of the prostate through the rectum' },
        { term: 'perineum', definition: 'The area between the scrotum and anus; common site of prostatitis pain' },
        { term: 'dysuria', definition: 'Painful or difficult urination' },
        { term: 'suprapubic', definition: 'Area above the pubic bone; location of bladder pain' },
      ],
      analogies: [
        'The prostate after prostatitis can be like soil after a forest fire—recovering slowly and remaining sensitive.'
      ],
      examples: [
        'A man with recurrent UTIs with E. coli and persistent pelvic pain has Category II chronic bacterial prostatitis.',
        'Negative cultures with WBCs in EPS and pelvic pain > 6 months indicates Category IIIA inflammatory CPPS.'
      ],
      patientCounselingPoints: [
        'Chronic pelvic pain syndrome is not an infection and antibiotics are rarely helpful',
        'Pelvic floor physical therapy can be very effective for CPPS',
        'Stress and anxiety can worsen pain symptoms',
        'It may take months to see improvement with treatment'
      ],
    },
    3: {
      level: 3,
      summary: 'Prostatitis evaluation involves localization cultures (Meares-Stamey test), uroflowmetry, and cystoscopy when indicated, with CPPS requiring multimodal therapy targeting pain, urinary symptoms, and psychosocial factors.',
      explanation: `## Diagnostic Evaluation

**Localization Studies (Meares-Stamey 4-Glass Test):**

| Sample | Location | Interpretation |
|--------|----------|----------------|
| VB1 (initial 5-10 mL) | Urethra | Urethritis if WBCs present |
| VB2 (midstream) | Bladder | Cystitis if WBCs present |
| EPS | Prostate | Prostatitis if WBCs present |
| VB3 (post-massage) | Prostate | Prostatitis if WBCs present |

**Simplified 2-Glass Test (PPMT):**
- Pre-massage urine (VB2)
- Post-massage urine (first 10 mL)
- If post-massage WBCs >10x pre-massage → bacterial prostatitis

**Cystoscopy:**
- Indicated when hematuria present
- Rules out bladder cancer, stricture
- Assess for bladder neck obstruction

**Urodynamics:**
- For patients with significant voiding symptoms
- Distinguish obstruction from bladder dysfunction

**Prostate Ultrasound:**
- Transrectal ultrasound for abscess evaluation
- Assess for prostate calculi
- Guide prostate biopsy if cancer suspected

## Pathogenesis

**Acute Bacterial Prostatitis:**
- Ascending infection from urethra
- Reflux of infected urine into prostatic ducts
- Hematogenous spread (rare)
- Common organisms: E. coli, Klebsiella, Pseudomonas, Enterococcus

**Chronic Bacterial Prostatitis:**
- Incomplete treatment of acute episode
- Biofilm formation within prostate
- Prostatic calculi as bacterial reservoir
- Same organisms as acute

**CPPS:**
- Multifactorial etiology
- Possible mechanisms:
  - Pelvic floor muscle dysfunction
  - Neuropathic pain mechanisms
  - Autoimmune processes
  - Inflammatory cascade
  - Psychosocial factors
  - Hormonal influences

## Treatment in Detail

**Acute Bacterial Prostatitis:**

**Antibiotics:**
- Ciprofloxacin 500 mg BID (oral) or 400 mg IV q12h
- Levofloxacin 500 mg daily
- Alternative: TMP-SMX DS BID
- Duration: 4-6 weeks (prevent chronic infection)

**Supportive Care:**
- IV fluids if dehydrated
- Pain control (avoid opioids if possible)
- Stool softeners (reduce rectal pain)
- Situ baths

**Chronic Bacterial Prostatitis:**

**Antibiotic Selection:**
- Fluoroquinolones penetrate prostate well
- High lipid solubility, low protein binding, high pKa
- Duration: 4-6 weeks minimum
- Consider suppressive antibiotics if recurrence

**CPPS Treatment:**

**Alpha-Blockers:**
- Tamsulosin 0.4 mg daily
- Silodosin 8 mg daily
- Alfuzosin 10 mg daily
- Benefit: Relax prostate and bladder neck muscles
- Duration: Trial of 3-6 months

**Anti-inflammatory Therapy:**
- NSAIDs (ibuprofen, naproxen)
- COX-2 inhibitors
- May reduce pelvic pain

**Muscle Relaxants:**
- Cyclobenzaprine 10 mg at bedtime
- Baclofen 10 mg TID
- For pelvic floor spasm

**Neuropathic Pain Modulators:**
- Amitriptyline 10-50 mg at bedtime
- Gabapentin 300 mg TID titrated
- Pregabalin 75 mg BID titrated

**Pelvic Floor Physical Therapy:**
- Biofeedback
- Trigger point release
- Stretching exercises
- Relaxation techniques

**Psychological Support:**
- Cognitive behavioral therapy
- Stress management
- Treatment of depression/anxiety

**5-Alpha Reductase Inhibitors:**
- Finasteride or dutasteride
- May help if prostate enlarged
- Some evidence for pain reduction

**Phytotherapy:**
- Quercetin (bioflavonoid antioxidant)
- Saw palmetto
- Pollen extract (Cernilton)
- Modest evidence

## Complications

**Acute Prostatitis:**
- Prostatic abscess (1-5%)
- Sepsis
- Urinary retention
- Epididymitis

**Chronic Prostatitis:**
- Recurrent infections
- Prostate calculi
- Infertility
- Sexual dysfunction
- Reduced quality of life

**Treatment Complications:**
- Antibiotic side effects (tendon rupture with FQ)
- Prostate abscess from massage (acute prostatitis)`,
      keyTerms: [
        { term: 'Meares-Stamey test', definition: '4-glass urine collection test to localize site of urinary tract infection' },
        { term: 'PPMT', definition: 'Pre- and post-massage test; simplified 2-glass localization test for prostatitis' },
        { term: 'prostatic calculi', definition: 'Stones within the prostate that can harbor bacteria' },
        { term: 'biofilm', definition: 'Community of bacteria embedded in protective matrix; resistant to antibiotics' },
        { term: 'epididymitis', definition: 'Inflammation of the epididymis; can be complication of prostatitis' },
      ],
      clinicalNotes: 'Fluoroquinolones have excellent prostate penetration and are first-line for bacterial prostatitis. Avoid prostate massage in acute bacterial prostatitis—can cause bacteremia. CPPS requires multimodal therapy addressing physical, psychological, and social aspects of pain.',
    },
    4: {
      level: 4,
      summary: 'Complex prostatitis management addresses refractory CPPS, autoimmune mechanisms, pelvic floor dysfunction, and distinguishing prostatitis from other causes of chronic pelvic pain.',
      explanation: `## Differential Diagnosis of Chronic Pelvic Pain

**Male Pelvic Pain Causes:**

| Condition | Key Distinguishing Features |
|-----------|----------------------------|
| CPPS | Chronic pain, negative cultures, perineal/gluteal pain |
| Prostate cancer | Often asymptomatic; elevated PSA, nodular prostate |
| Bladder cancer | Hematuria predominant, irritative voiding |
| Interstitial cystitis | Bladder-centered pain, urinary urgency/frequency |
| Pudendal neuralgia | Pain in pudendal nerve distribution, sitting worsens |
| Piriformis syndrome | Buttock pain, sciatica-like symptoms |
| Anal fissure | Pain with bowel movements, rectal bleeding |
| Inguinal hernia | Groin bulge, worsens with Valsalva |
| Myofascial pain | Trigger points, reproducible with palpation |

## Refractory CPPS

**Definition:**
- Failure of standard multimodal therapy
- Persistent symptoms > 6 months of adequate treatment

**Contributing Factors:**
- Central sensitization
- Autonomic dysfunction
- Hormonal abnormalities
- Sleep disturbance
- Psychosocial stressors

**Advanced Treatment Options:**

**Neuromodulation:**
- Sacral nerve stimulation (InterStim)
- Pudendal nerve modulation
- Transcutaneous electrical nerve stimulation (TENS)
- Percutaneous tibial nerve stimulation

**Trigger Point Injections:**
- Local anesthetic ± steroid
- Botox injection into pelvic floor muscles
- Prolotherapy

**Prostate Procedures:**
- Transurethral needle ablation (TUNA)
- Transurethral microwave thermotherapy (TUMT)
- Results inconsistent, not routinely recommended

**Acupuncture:**
- Some evidence for pain reduction
- May be worth considering

**Biofeedback:**
- Surface EMG of pelvic floor
- Helps with muscle relaxation
- Coordinated with physical therapy

## Autoimmune and Inflammatory Mechanisms

**Autoimmune Prostatitis:**
- Evidence from animal models
- Autoantibodies against prostate antigens
- Possible triggers:
  - Infection-triggered autoimmunity
  - Molecular mimicry
  - Release of sequestered antigens

**Cytokine Profiles:**
- Elevated inflammatory cytokines in EPS
- IL-1β, IL-6, IL-8, TNF-α
- Possible therapeutic targets

**Mast Cell Activation:**
- Mast cells found in prostate tissue
- Release inflammatory mediators
- Possible role in CPPS

## Sexual Dysfunction and Prostatitis

**Ejaculatory Pain:**
- Common in CPPS
- Worsens condition through pain cycle
- Treatment: alpha-blockers, pudendal nerve block

**Erectile Dysfunction:**
- Secondary to pain, anxiety
- May improve with pain control
- PDE5 inhibitors if needed

**Premature Ejaculation:**
- Associated with CPPS
- Treat pain first
- Consider SSRI if persistent

**Decreased Libido:**
- Related to chronic pain, depression
- Hormonal evaluation if indicated

## Special Populations

**Prostatitis in HIV Patients:**
- Atypical organisms possible
- Drug interactions with ART
- May require longer treatment

**Immunosuppressed Patients:**
- Higher risk of abscess
- Broader differential diagnosis
- Atypical organisms (fungi, mycobacteria)

**Prostatitis After Prostate Procedures:**
- Biopsy, TURP, brachytherapy
- Usually bacterial
- Culture-directed antibiotics

**Pediatric Prostatitis:**
- Rare in children
- Consider congenital anomalies
- Evaluate for UTI, functional voiding issues

## Prostatitis and Infertility

**Effects on Semen:**
- WBCs in semen (leukocytospermia)
- ROS (reactive oxygen species)
- DNA damage to sperm
- Reduced motility

**Management:**
- Treat infection if present
- Antioxidants (vitamin C, E)
- Consider sperm processing for ART

## Prostatitis and PSA

**PSA Elevation:**
- Acute prostatitis can cause marked PSA elevation
- Chronic prostatitis: modest elevation
- Wait 6-8 weeks after treatment before repeat PSA
- DRE may cause mild PSA elevation

**Biopsy Considerations:**
- Don't biopsy during acute prostatitis
- Repeat PSA after treatment
- Consider free/total PSA if decision unclear

## Prostatic Abscess

**Risk Factors:**
- Untreated acute prostatitis
- Diabetes
- Immunocompromise
- Instrumentation

**Diagnosis:**
- CT scan or transrectal ultrasound
- Fluctuant mass on DRE

**Treatment:**
- IV antibiotics
- Transurethral drainage (TURD)
- Perineal drainage
- Avoid transrectal aspiration (risk of fistula)`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Heightened sensitivity of the central nervous system to pain signals' },
        { term: 'neuromodulation', definition: 'Electrical modulation of nerve function to treat pain' },
        { term: 'TENS', definition: 'Transcutaneous electrical nerve stimulation; non-invasive pain treatment' },
        { term: 'ROS', definition: 'Reactive oxygen species; molecules that can damage sperm DNA' },
        { term: 'leukocytospermia', definition: 'White blood cells in semen; indicates inflammation or infection' },
        { term: 'pudendal neuralgia', definition: 'Pain in the distribution of the pudendal nerve; worsened by sitting' },
      ],
      clinicalNotes: 'Wait 6-8 weeks after treating prostatitis before checking PSA. Prostatic abscess requires drainage—antibiotics alone are insufficient. CPPS is a diagnosis of exclusion—rule out other causes before committing to this diagnosis.',
    },
    5: {
      level: 5,
      summary: 'Emerging prostatitis research explores microbiome characterization, biomarker discovery, targeted immunomodulation, and precision approaches to CPPS based on phenotypic subtyping.',
      explanation: `## The Prostate Microbiome

**Traditional Understanding:**
- Prostate considered sterile in healthy state
- Prostatitis caused by specific pathogens

**Emerging Evidence:**
- Distinct prostate microbiome exists
- 16S rRNA sequencing reveals diverse bacteria
- Differences between healthy and diseased prostate
- Possible role in CPPS pathogenesis

**Unculturable Bacteria:**
- Standard cultures miss many organisms
- Next-generation sequencing identifying new pathogens
- Possible role of cutaneous, GI flora in prostate

**Mycoplasma, Ureaplasma, Chlamydia:**
- Difficult to culture
- PCR-based detection
- Controversial role in CPPS
- Possible chronic infection

## Biomarker Discovery

**Inflammatory Markers:**
- Cytokines in EPS, urine, semen
- IL-8 as potential marker
- PSA isoforms
- miRNA signatures

**Neurologic Markers:**
- Nerve growth factor (NGF)
- Substance P
- Calcitonin gene-related peptide
- Possible markers for neuropathic CPPS

**Genetic Associations:**
- Cytokine gene polymorphisms
- Androgen receptor variants
- Vitamin D receptor polymorphisms
- Possible predisposition to CPPS

## Phenotypic Subtyping of CPPS

**UPOINT System:**
- **U:** Urinary symptoms
- **P:** Psychosocial dysfunction
- **O:** Organ-specific findings
- **I:** Infection
- **N:** Neurologic/systemic
- **T:** Tenderness (muscle)

**Clinical Application:**
- Each domain treated independently
- Personalized multimodal therapy
- Better outcomes than empiric treatment
- Validated in prospective studies

**Implementation:**
- Domain assessment guides therapy
- Treatment to algorithm:
  - Urinary: alpha-blockers
  - Psychosocial: CBT, antidepressants
  - Organ-specific: prostate massage, heat
  - Infection: antibiotics if culture positive
  - Neurologic: neuromodulators, acupuncture
  - Tenderness: physical therapy, trigger point injections

## Emerging Therapies

**Immunomodulation:**
- Autoimmune prostatitis models
- Potential for biologic therapies
- TNF inhibitors (limited evidence)
- Targeted cytokine blockade

**Stem Cell Therapy:**
- Regenerative approaches
- Mesenchymal stem cells
- Anti-inflammatory effects
- Early research phase

**Low-Intensity Shockwave Therapy:**
- Originally for erectile dysfunction
- Investigational for CPPS
- Mechanism: angiogenesis, tissue regeneration, nerve modulation

**Radiofrequency Ablation:**
- Targeted ablation of prostate tissue
- Limited data
- Possible for refractory cases

## Pain Mechanisms in CPPS

**Central Sensitization:**
- Wind-up phenomenon in spinal cord
- NMDA receptor activation
- Glial cell involvement
- Possible treatment: ketamine, dextromethorphan

**Autonomic Dysfunction:**
- Sympathetic overactivity
- Possible role of stress system
- Biofeedback, relaxation techniques

**Myofascial Pain:**
- Pelvic floor muscle dysfunction
- Trigger points
- Referred pain patterns
- Physical therapy mainstay

**Neurogenic Inflammation:**
- Neurogenic plasma extravasation
- Mast cell-nerve interactions
- Possible targets: NK1 receptor antagonists

## Diagnostic Innovation

**Advanced Imaging:**
- Prostate MRI for abscess, cancer exclusion
- Diffusion-weighted imaging
- MR neurography for pudendal nerve
- PET scanning for inflammation (research)

**Molecular Diagnostics:**
- PCR for fastidious organisms
- Next-generation sequencing
- Metagenomic analysis
- Host response profiling

**Biomarker Panels:**
- Multi-marker approaches
- Urine-based tests (e.g., MiPS)
- Distinguish prostatitis from prostate cancer
- Predict treatment response

## Psychosocial Aspects

**Depression and Anxiety:**
- Highly prevalent in CPPS
- Bidirectional relationship with pain
- Treatment improves outcomes
- SSRI/SNRI beneficial for mood and pain

**Catastrophizing:**
- Negative cognitive set
- Predicts poor outcomes
- CBT intervention helpful

**Male Identity Issues:**
- Impact on sexual function
- Relationship strain
- Body image concerns
- Support groups valuable

## Future Directions

**Microbiome Modulation:**
- Probiotic approaches
- Fecal microbiota transplant
- Targeted antimicrobial therapy

**Precision Medicine:**
- Phenotype-guided therapy
- Biomarker-driven treatment selection
- Genetic risk profiling
- Personalized pain management

**Regenerative Approaches:**
- Tissue engineering
- Stem cell therapies
- Growth factor applications

**Digital Health:**
- Telemedicine for CPPS management
- App-based symptom tracking
- Remote physical therapy guidance
- Online support communities

**Research Needs:**
- Better understanding of CPPS pathophysiology
- Standardized outcome measures
- Biomarker validation
- Large-scale clinical trials

## International Collaboration

**Chronic Prostatitis Collaborative Research Network:**
- Standardized definitions
- Common outcome measures
- Multicenter trials
- Data sharing initiatives`,
      keyTerms: [
        { term: 'UPOINT', definition: 'Phenotypic classification system for CPPS with 6 domains (Urinary, Psychosocial, Organ-specific, Infection, Neurologic, Tenderness)' },
        { term: 'central sensitization', definition: 'Heightened pain sensitivity in the central nervous system' },
        { term: 'next-generation sequencing', definition: 'Advanced DNA sequencing technology for comprehensive microbiome analysis' },
        { term: 'metagenomics', definition: 'Study of genetic material from entire communities of organisms' },
        { term: 'MR neurography', definition: 'MRI technique specifically designed to image nerves' },
      ],
      clinicalNotes: 'UPOINT phenotyping improves outcomes by targeting therapy to specific symptom domains. Wait 6-8 weeks after prostatitis treatment before checking PSA. The prostate microbiome is an emerging field that may change our understanding of CPPS pathogenesis.',
    },
  },

  media: [],
  citations: [
    { id: 'aua-prostatitis-2022', type: 'article', title: 'AUA Guideline on Management of Prostatitis', source: 'Journal of Urology' },
    { id: 'eau-prostatitis-2023', type: 'article', title: 'EAU Guidelines on Chronic Pelvic Pain', source: 'European Association of Urology' },
  ],
  crossReferences: [
    { targetId: 'condition-uti', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infection' },
    { targetId: 'condition-erectile-dysfunction', targetType: 'condition', relationship: 'related', label: 'Erectile Dysfunction' },
  ],
  tags: { systems: ['urinary', 'reproductive'], topics: ['urology', 'men\'s health', 'pain'], keywords: ['prostatitis', 'CPPS', 'pelvic pain', 'perineal pain', 'ejaculatory pain'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostatitis;
