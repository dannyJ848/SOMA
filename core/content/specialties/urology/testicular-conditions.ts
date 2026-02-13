/**
 * Testicular Conditions - Comprehensive Educational Content
 *
 * Covers testicular anatomy, common testicular conditions including
 * pain, masses, torsion, epididymitis, hydrocele, varicocele, and
 * testicular cancer.
 */

import { EducationalContent } from '../../types';

export const testicularConditions: EducationalContent = {
  id: 'condition-testicular-conditions',
  type: 'condition',
  name: 'Testicular Conditions',
  alternateNames: [
    'Testicular Disorders',
    'Scrotal Pathology',
    'Testicular and Scrotal Conditions',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Testicular conditions are problems that affect the testicles, which are the male reproductive organs located in the scrotum that make sperm and testosterone. Common problems include pain, swelling, lumps, and infection.',
      explanation: `**What Are the Testicles?**

The testicles (also called testes) are two oval organs located in the scrotum, the pouch of skin behind the penis. They have two important jobs:
- Making sperm (the male reproductive cells)
- Making testosterone (the male hormone)

**Common Testicular Problems**

**1. Testicular Pain**
- Sudden, severe pain needs immediate medical attention
- Could be torsion (twisting) that cuts off blood supply
- Infections can also cause pain

**2. Testicular Mass or Lump**
- Could be many things:
  - Fluid collection (cyst)
  - Enlarged blood vessels (varicocele)
  - Infection
  - Cancer (rare in young men, but possible)

**3. Swelling**
- Fluid around the testicle (hydrocele)
- Infection (epididymitis)
- Injury or trauma

**4. Epididymitis**
- Infection of the coiled tube behind the testicle
- Usually from bacterial infection or STI
- Causes pain and swelling

**5. Varicocele**
- Enlarged veins in the scrotum
- Like varicose veins in the legs
- May feel like a "bag of worms"

**6. Hydrocele**
- Fluid collection around the testicle
- Usually painless
- Common in babies, can happen in adults

**7. Testicular Torsion**
- Twisting of the testicle
- Cuts off blood supply
- **MEDICAL EMERGENCY** - needs treatment within hours to save the testicle

**8. Testicular Cancer**
- Painless lump is most common sign
- Most common in young men aged 15-35
- Highly treatable if found early

**When to See a Doctor**

**Emergency (go to ER):**
- Sudden, severe testicular pain
- Sudden swelling
- Trauma to the testicles
- Fever with testicular pain

**See doctor soon:**
- Lump or swelling on the testicle
- Dull ache or heaviness in the scrotum
- Any change in size or shape
- Pain or discomfort in the testicle

**Self-Exam (Monthly)**

1. Best time: During or after a warm shower or bath
2. Gently feel each testicle between thumb and fingers
3. Feel for any lumps, bumps, or changes
4. The epididymis (tube behind testicle) feels like a soft bump - this is normal
5. Compare both testicles - one may hang slightly lower than normal

**What to Look For:**
- Lumps on the testicle
- Any change in size
- Any change in shape
- Pain or discomfort
- Areas that feel harder or different than usual`,
      keyTerms: [
        { term: 'testicles', definition: 'Male reproductive organs that make sperm and testosterone' },
        { term: 'scrotum', definition: 'The pouch of skin that holds the testicles' },
        { term: 'epididymis', definition: 'Coiled tube on the back of the testicle that stores sperm', pronunciation: 'ep-ih-DID-ih-miss' },
        { term: 'varicocele', definition: 'Enlarged veins in the scrotum', pronunciation: 'var-ih-koh-seel' },
        { term: 'torsion', definition: 'Twisting of the testicle that cuts off blood supply - an emergency' },
      ],
      analogies: [
        'The testicles are like factories that produce sperm (the product) and testosterone (the supervisor hormone).',
        'Testicular torsion is like twisting a water hose - it cuts off the supply completely and needs to be fixed fast.',
        'A varicocele feels like a bag of worms - soft and lumpy veins above the testicle.',
      ],
      examples: [
        'A 15-year-old boy has sudden severe testicular pain - he needs to go to the ER immediately to check for torsion.',
        'A man notices a painless lump on his testicle during self-exam - he should see his doctor to check for cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Testicular conditions range from acute emergencies like torsion to chronic conditions like varicocele and hydrocele. Common presentations include pain, swelling, mass, and redness. Prompt evaluation and treatment are essential, particularly for torsion where time is critical.',
      explanation: `## Anatomy Review

**Testicle:**
- Oval organ, 4-5 cm long
- Produces sperm and testosterone
- Covered by tunica albuginea (tough white capsule)

**Epididymis:**
- Coiled tube on posterior surface
- Stores and transports sperm
- Three regions: Head, body, tail

**Scrotum:**
- Skin pouch containing testicles
- Regulates temperature (cooler than body)
- Contains cremaster muscle (elevates testicles with cold)

## Acute Scrotal Pain

**Testicular Torsion:**

**Key Features:**
- Sudden onset severe pain
- Nausea, vomiting common
- Affects teens and young adults mostly
- Peak ages: neonatal period and adolescence
- May have history of previous brief episodes
- Emergency: Treatment needed within 6 hours

**Physical Exam:**
- High-riding testicle
- Horizontal lie
- Absent cremasteric reflex
- Tender on palpation
- Scrotal edema

**Treatment:**
- Surgical detorsion and orchiopexy
- Manual detorsion may help temporarily
- Exploration if diagnosis uncertain

**Epididymitis:**

**Key Features:**
- Gradual onset pain
- Swelling over days
- Urinary symptoms common (dysuria, frequency)
- Sexually active men <35: STI (chlamydia, gonorrhea)
- Men >35: Urinary pathogens (E. coli)
- Fever may be present

**Physical Exam:**
- Tender epididymis (posterior)
- Prehn's sign positive (pain relief with elevation)
- Scrotal edema
- Urethral discharge may be present

**Treatment:**
- Antibiotics: Ceftriaxone + doxycycline if <35
- Levofloxacin if >35
- Scrotal elevation
- NSAIDs for pain

**Torsion of Testicular Appendage:**

**Key Features:**
- Children aged 7-14
- Pain localized to upper pole
- "Blue dot" sign (infarcted appendage visible)
- Less severe than torsion
- Benign condition

## Chronic Conditions

**Varicocele:**

**Key Features:**
- Dilated pampiniform plexus veins
- Left side 85-90% of cases
- May cause dull ache or heaviness
- Associated with infertility
- Detected in 15% of general population

**Grading:**
- Grade I: Palpable only with Valsalva
- Grade II: Palpable without Valsalva
- Grade III: Visible through scrotum

**Complications:**
- Testicular atrophy
- Infertility
- Pain

**Hydrocele:**

**Key Features:**
- Fluid collection between layers of tunica vaginalis
- Painless swelling
- Transilluminates (light passes through)
- May be congenital or acquired

**Causes:**
- Trauma
- Infection
- Tumor
- Idiopathic (most common)

**Spermatocele:**
- Cyst in epididymis
- Contains sperm
- Usually painless
- Located above testicle

## Testicular Mass

**Benign Causes:**
- Hydrocele
- Spermatocele
- Varicocele
- Epididymal cyst
- Inflammatory enlargement

**Malignant Concerns:**
- Painless, firm lump
- Heavy sensation in scrotum
- Testicular enlargement
- Dull ache in groin or abdomen
- Gynecomastia (rare)

**Risk Factors for Testicular Cancer:**
- Age 15-35 (peak)
- Cryptorchidism (undescended testicle)
- Prior testicular cancer
- Family history
- Klinefelter syndrome
- White race

**Diagnosis:**
- Ultrasound: First-line imaging
- Tumor markers: AFP, hCG, LDH
- CT scan for staging if cancer found

## Trauma

**Types:**
- Blunt injury (sports, kick)
- Penetrating injury
- Straddle injury

**Complications:**
- Testicular rupture (requires surgery)
- Hematocele (blood in scrotum)
- Traumatic torsion
- Atrophy

## Differential Diagnosis by Age

| Age | Most Common |
|-----|-------------|
| Neonates | Torsion, inguinal hernia, hydrocele |
| Children | Torsion of appendage, hernia, hydrocele |
| Adolescents | Torsion, epididymitis, varicocele |
| Young adults | Epididymitis, torsion, tumor |
| Older adults | Epididymitis, hydrocele, tumor`,
      keyTerms: [
        { term: 'cremasteric reflex', definition: 'Reflex that elevates testicle when inner thigh stroked; absent in torsion' },
        { term: 'Prehn\'s sign', definition: 'Pain relief with testicular elevation; suggests epididymitis' },
        { term: 'transillumination', definition: 'Shining light through scrotal swelling; positive if fluid-filled' },
        { term: 'cryptorchidism', definition: 'Undescended testicle; risk factor for infertility and cancer' },
        { term: 'hematocele', definition: 'Blood collection in scrotum; usually from trauma' },
      ],
      analogies: [
        'Testicular torsion is like wringing out a wet towel - it twists the structures and cuts off the flow.',
        'The epididymis is like a parking lot where sperm wait before being released.',
      ],
    },
    3: {
      level: 3,
      summary: 'Testicular pathology encompasses congenital anomalies, inflammatory conditions, vascular disorders, and neoplasms. Urgent conditions like torsion require immediate surgical intervention, while other conditions like varicocele and hydrocele may be managed conservatively or surgically based on symptoms and complications.',
      explanation: `## Detailed Anatomy

**Vascular Supply:**
- Testicular artery: Branch of abdominal aorta
- Deferential artery: Branch of inferior vesical artery
- Cremasteric artery: Branch of inferior epigastric artery
- Pampiniform plexus: Venous drainage

**Lymphatic Drainage:**
- Right testicle: Para-aortic nodes
- Left testicle: Para-aortic nodes (left renal)
- Important: Drains to retroperitoneal nodes, NOT inguinal

**Innervation:**
- T10-11: Testicular sensation (referred pain to abdomen)
- Genital branch of genitofemoral nerve

## Testicular Torsion

**Pathophysiology:**
- Twisting of spermatic cord
- Venous obstruction first (congestion)
- Arterial obstruction (ischemia)
- Germinal epithelium most sensitive

**Types:**
1. **Extravaginal:** Tunica vaginalis not attached to testicle
   - Neonates
   - Both testicles tunica vaginalis completely surrounds
2. **Intravaginal:** Testicle rotates within tunica vaginalis
   - Adolescents
   - Bell-clapper deformity (abnormal investment)

**Time Sensitivity:**
- 6 hours: 90-100% salvage rate
- 12 hours: 50% salvage rate
- 24 hours: <10% salvage rate

**Diagnosis:**
- Clinical diagnosis (don't delay for imaging)
- Doppler ultrasound if diagnosis uncertain
- Surgical exploration if high suspicion

**Surgical Findings:**
- Viable: Orchiopexy with fixation
- Non-viable: Orchiectomy
- Contralateral orchiopexy (both sides)

**Intermittent Torsion:**
- Recurrent episodes that self-resolve
- May progress to acute torsion
- Bilateral orchiopexy recommended

## Epididymitis

**Acute Epididymitis:**

**Age-based Etiology:**
- <35: Chlamydia trachomatis, Neisseria gonorrhoeae
- >35: Escherichia coli, Pseudomonas
- Post-prostate biopsy: E. coli, Pseudomonas
- Amiodarone: Drug-induced epididymitis

**Pathogens:**
- Chlamydia: Intracellular, causes chronic inflammation
- Gonorrhea: Gram-negative diplococcus
- E. coli: Gram-negative rod
- Pseudomonas: Gram-negative rod

**Complications:**
- Abscess formation
- Infertility (bilateral involvement)
- Epididymo-orchitis
- Scrotal cellulitis

**Chronic Epididymitis:**
- Pain >6 weeks
- Often post-infectious
- May be occupational (bicycle, heavy machinery)
- Treatment difficult, NSAIDs mainstay

## Testicular Cancer

**Types:**

| Type | Age Peak | % of Cases | Prognosis |
|------|----------|------------|-----------|
| Seminoma | 30-40 | 50% | Excellent |
| Non-seminomatous | 20-30 | 50% | Good |
| Lymphoma | 60+ | Rare | Variable |

**Non-Seminomatous Types:**
- Embryonal carcinoma
- Yolk sac tumor
- Choriocarcinoma
- Teratoma
- Mixed

**Tumor Markers:**
- AFP (Alpha-fetoprotein): Yolk sac, embryonal
- hCG: Choriocarcinoma, seminoma (30%)
- LDH: Non-specific, correlates with burden

**Staging (AJCC):**
- Stage I: Confined to testicle
- Stage II: Retroperitoneal lymph nodes
- Stage III: Distant metastasis

**Treatment:**
- Radical inguinal orchiectomy (diagnostic and therapeutic)
- Surveillance, radiation, or chemotherapy based on stage
- 5-year survival: >95% overall

**Cryptorchidism Risk:**
- Relative risk 3-4x higher
- Orchiopexy reduces but doesn't eliminate risk
- Abdominal testis higher risk than inguinal

## Varicocele

**Anatomy:**
- Pampiniform plexus dilation
- Left side predominance (anatomic factors)
- Left renal vein compression between SMA and aorta

**Pathophysiology:**
- Increased scrotal temperature
- Testicular hypoxia from venous stasis
- Reactive oxygen species
- Hormonal alterations

**Indications for Repair:**
- Palpable varicocele
- Abnormal semen parameters
- Testicular atrophy
- Pain (controversial benefit)
- Adolescent: Prevent atrophy

**Surgical Approaches:**
- Microsurgical subinguinal (gold standard)
- Laparoscopic
- Radiographic embolization
- Recurrence rate: <5% with microsurgery

## Hydrocele

**Types:**
- **Primary:** Idiopathic, no communication with peritoneum
- **Secondary:** Infection, tumor, torsion, trauma

**Congenital:**
- Processus vaginalis patent
- Communicating hydrocele
- Usually resolves by age 1-2

**Adult:**
- Usually secondary to another condition
- Requires ultrasound to rule out tumor
- Aspiration discouraged (recurs, may introduce infection)

**Surgical Indication:**
- Symptomatic (pain, discomfort)
- Cosmetic concerns
- Failure to resolve after observation

## Testicular Appendage Torsion

**Appendages:**
- Appendix testis (Müllerian remnant): Upper pole
- Appendix epididymis (Wolffian remnant): Head of epididymis

**Clinical Features:**
- Ages 7-14
- Blue dot sign (infarcted appendage visible through scrotum)
- Tender nodule at upper pole
- Normal cremasteric reflex

**Management:**
- Conservative (NSAIDs, rest)
- Self-limited, resolves over weeks
- Surgical excision if symptoms persist`,
      keyTerms: [
        { term: 'bell-clapper deformity', definition: 'Abnormal testicular attachment allowing increased torsion risk' },
        { term: 'spermatic cord', definition: 'Bundle of vessels, nerves, and vas deferens supplying testicle' },
        { term: 'radical inguinal orchiectomy', definition: 'Removal of testicle through groin incision; primary treatment for testicular cancer' },
        { term: 'processus vaginalis', definition: 'Embryonic connection between peritoneum and scrotum; patent in hydrocele/hernia' },
        { term: 'pampiniform plexus', definition: 'Network of veins draining testicle; becomes varicocele when dilated' },
        { term: 'blue dot sign', definition: 'Blue spot visible through scrotum in torsed testicular appendage' },
      ],
      clinicalNotes: 'Torsion is a surgical emergency - don\'t delay for imaging if clinical suspicion is high. Always examine testicles in abdominal pain in young males (referred pain). Ultrasound is first-line for scrotal masses and pain.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of testicular conditions requires precise anatomical knowledge, understanding of pathophysiology, appropriate imaging selection, and individualized treatment planning. Urgent conditions like torsion and Fournier\'s gangrene require immediate intervention, while malignancies require multidisciplinary care.',
      explanation: `## Complex Scrotal Emergencies

**Fournier's Gangrene:**

**Pathophysiology:**
- Necrotizing fasciitis of perineum/scrotum
- Polymicrobial infection
- Portal of entry: Perineal, genital, anal
- Risk factors: Diabetes, immunosuppression, alcoholism

**Clinical Features:**
- Severe pain
- Scrotal erythema progressing to necrosis
- Crepitus (gas in tissues)
- Sepsis, systemic toxicity
- Mortality: 20-40% despite treatment

**Treatment:**
- Urgent surgical debridement
- Broad-spectrum antibiotics
- Resuscitation
- Possible reconstruction

**Testicular Trauma:**

**Mechanisms:**
- Blunt (90%): Sports, motor vehicle accidents, assaults
- Penetrating (10%): Gunshot, stab wounds, animal bites

**Grading (AAST):**
- Grade I: Contusion
- Grade II: Subcapsular hematoma <50%
- Grade III: Subcapsular hematoma >50% or parenchymal laceration
- Grade IV: Complete rupture or avulsion
- Grade V: Shattered testicle

**Management:**
- Grade I-II: Conservative, scrotal support, analgesia
- Grade III-V: Surgical exploration with repair or orchiectomy
- Ultrasound to assess blood flow

## Diagnostic Imaging

**Ultrasound First-Line:**

**Normal Testicle:**
- Homogeneous echotexture
- 4-5 cm length
- Doppler shows flow

**Torsion Findings:**
- Enlarged testicle
- Decreased or absent flow on affected side
- Heterogeneous echotexture
- Reactive hydrocele
- Spiral appearance of cord (occasionally)

**Epididymitis Findings:**
- Enlarged epididymis
- Increased blood flow
- Hydrocele common
- Possible abscess

**Tumor Findings:**
- Intratesticular mass (usually)
- Homogeneous or heterogeneous
- May contain calcifications
- Hydrocele common

**MRI Indications:**
- Ultrasound inconclusive
- Staging testicular cancer
- Evaluating for extratesticular extension

## Testicular Cancer - Advanced

**Histology Details:**

**Seminoma:**
- Most common pure type
- Radiosensitive
- Chemotherapy sensitive
- Excellent prognosis
- Spread: Lymphatic, predictable

**Non-Seminomatous:**
- Mixed tumors common
- Less radiation responsive
- Chemotherapy sensitive
- More aggressive than seminoma
- Spread: Lymphatic and hematogenous

**Staging Workup:**
- Radical inguinal orchiectomy
- Tumor markers (AFP, hCG, LDH)
- CT abdomen/pelvis (lymph nodes)
- CT chest (lung metastases)
- Brain MRI if choriocarcinoma

**Treatment by Stage:**

**Stage I (confined to testis):**
- Seminoma: Surveillance, radiation, or carboplatin
- Non-seminoma: Surveillance or chemotherapy
- Cure rate: >95%

**Stage II (retroperitoneal nodes):**
- Bulky: Chemotherapy (bleomycin, etoposide, cisplatin - BEP)
- Non-bulky: Radiation (seminoma) or RPLND (non-seminoma)

**Stage III (distant mets):**
- Chemotherapy (BEP x 3-4 cycles)
- Post-chemo surgery for residual masses
- Tumor marker surveillance

**Surveillance:**
- Intensive follow-up required
- CT scans, tumor markers
- Patient compliance essential
- Psychologic stress for some

## Post-Testicular Pain Syndromes

**Chronic Orchialgia:**
- Pain >3 months
- No active pathology found
- Multifactorial: Neuropathic, muscular, psychologic

**Evaluation:**
- Exclude active pathology
- Urinalysis, ultrasound
- Consider nerve block for diagnosis

**Treatment:**
- NSAIDs, neuropathic medications
- Nerve blocks
- Microsurgical denervation (last resort)
- Orchiectomy (very last resort)

## Congenital Anomalies

**Cryptorchidism (Undescended Testicle):**
- 3% of term infants, 30% of preterm
- Spontaneous descent usually by 3 months
- Treatment: Orchiopexy at 6-12 months
- Complications if untreated: Infertility, cancer, torsion

**Testicular Regression Syndrome:**
- Vanishing testis
- Absent testicle on one side
- May be small nubbin of tissue
- Important to distinguish from undescended

**Polyorchidism:**
- More than two testicles
- Usually supernumerary
- Usually discovered incidentally
- Malignancy risk unclear

**Splenogonadal Fusion:**
- Fusion of spleen and testicle
- May appear as testicular mass
- Important to recognize to avoid splenectomy during orchiectomy`,
      keyTerms: [
        { term: 'Fournier\'s gangrene', definition: 'Necrotizing fasciitis of perineum and scrotum; surgical emergency' },
        { term: 'RPLND', definition: 'Retroperitoneal Lymph Node Dissection; surgical removal of lymph nodes for testicular cancer' },
        { term: 'BEP', definition: 'Bleomycin, Etoposide, Cisplatin; chemotherapy regimen for testicular cancer' },
        { term: 'orchiopexy', definition: 'Surgical fixation of testicle to scrotum; for torsion or undescended testicle' },
        { term: 'polyorchidism', definition: 'Condition of having more than two testicles' },
        { term: 'splenogonadal fusion', definition: 'Congenital fusion of spleen and testicle; appears as scrotal mass' },
      ],
      clinicalNotes: 'Any solid testicular mass should be considered cancer until proven otherwise. Scrotal exploration for suspected torsion should not be delayed for imaging. Always perform inguinal approach for orchiectomy (not scrotal) to allow lymphatic dissection.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of testicular conditions integrates advanced imaging, minimally invasive techniques, evidence-based surveillance protocols, and multidisciplinary cancer care. Emerging research focuses on fertility preservation, nerve-sparing approaches, and personalized oncology.',
      explanation: `## Surgical Techniques

**Microsurgical Varicocelectomy:**
- Subinguinal approach (most common)
- Optical magnification (6-25x)
- Identify and preserve:
  - Testicular artery (1-3 branches)
  - Lymphatic channels
  - Vas deferens
- Ligate internal spermatic veins
- Recurrence <5%, complication <1%

**Robotic-Assisted Approaches:**
- Varicocelectomy (emerging)
- RPLND for testicular cancer
- Nerve-sparing template dissection
- Reduced morbidity vs. open

**Testis-Sparing Surgery:**
- Indications: Bilateral tumors, solitary testicle, small tumors
- Enucleation with frozen section
- Radiation to testis (alternative)
- Patient selection critical

**Nerve-Sparing RPLND:**
- Templates dissection
- Preserves sympathetic nerves
- Prevents retrograde ejaculation
- Maintains antegrade ejaculation
- Standard of care for low-stage disease

## Fertility Considerations

**Sperm Banking:**
- Indicated before:
  - Chemotherapy
  - Radiation
  - Orchiectomy (may have decreased contralateral function)
- Recommended for all men of reproductive age
- Multiple samples possible

**Testicular Sperm Extraction (TESE):**
- Performed at time of orchiectomy if azoospermic
- Identifies sperm in ~50% of NOA
- Can be cryopreserved for future IVF/ICSI

**Hypogonadism Management:**
- Post-treatment testosterone deficiency
- Fertility considerations (TRT suppresses spermatogenesis)
- hCG therapy alternative
- Timing of TRT after completing family

## Quality of Life

**Psychological Impact:**
- Body image concerns
- Fertility anxiety
- Sexual function concerns
- Cancer recurrence anxiety

**Sexual Function:**
- After orchiectomy: Usually preserved
- After RPLND: Retrograde ejaculation risk
- After chemotherapy: Often temporary dysfunction
- After radiation: Usually preserved

**Testosterone Replacement:**
- Indicated if symptomatic hypogonadism
- Contra indicates active cancer
- Consider hCG if fertility desired

## Emerging Technologies

**Focal Therapy for Testis Tumors:**
- Organ-sparing approaches
- RFA (radiofrequency ablation)
- HIFU (high-intensity focused ultrasound)
- Cryoablation
- Investigational, limited data

**Molecular Markers:**
- DNA ploidy analysis
- Microsatellite instability
- Epigenetic markers
- Prognostic significance

**Immunotherapy:**
- Checkpoint inhibitors (rarely effective)
- CAR-T cells (investigational)
- Tumor-infiltrating lymphocytes

## Evidence-Based Surveillance

**Stage I Seminoma Surveillance:**
- CT scans at 3, 6, 12, 24, 36, 48, 60 months
- Tumor markers each visit
- Physical exam and serum markers every 3-6 months
- 5-year relapse rate: 15-20%

**Stage I Non-Seminoma Surveillance:**
- More intensive (higher relapse rate)
- CT scans every 3-6 months initially
- Tumor markers weekly for first year
- 5-year relapse rate: 30-50%

**Long-Term Toxicities:**
- Secondary malignancies (radiation, chemotherapy)
- Cardiovascular disease
- Neurotoxicity (cisplatin)
- Pulmonary toxicity (bleomycin)
- Renal dysfunction (cisplatin)

**Guidelines:**
- NCCN guidelines updated annually
- ESMO guidelines
- AUA guidelines

**Survivorship Care:**
- Risk-adapted surveillance
- Cardiovascular screening
- Secondary cancer screening
- Psychosocial support
- Fertility counseling`,
      keyTerms: [
        { term: 'nerve-sparing RPLND', definition: 'Retroperitoneal lymph node dissection preserving sympathetic nerves to maintain ejaculation' },
        { term: 'templates dissection', definition: 'Modified RPLND dissection template to reduce morbidity' },
        { term: 'TRT', definition: 'Testosterone Replacement Therapy; suppresses sperm production, not compatible with fertility' },
        { term: 'RFA', definition: 'Radiofrequency Ablation; uses heat to destroy tumor tissue' },
        { term: 'HIFU', definition: 'High-Intensity Focused Ultrasound; uses focused ultrasound waves for tissue ablation' },
      ],
      clinicalNotes: `Clinical pearls:

1. **Torsion first**: Don't delay exploration for imaging when suspicion high

2. **Inguinal approach**: Never use scrotal approach for testicular cancer (spreads to inguinal nodes)

3. **Fertility first**: Discuss sperm banking before gonadotoxic treatment

4. **Surveillance acceptable**: For stage I disease, surveillance is standard of care

5. **Marker trends**: Rising markers after treatment indicate persistent/recurrent disease

6. **Long-term follow-up**: Testicular cancer patients need decades of surveillance

7. **Contralateral testis**: Risk of bilateral tumors (~2%); examine regularly`,
    },
  },

  media: [
    {
      id: 'testicular-anatomy',
      type: 'diagram',
      filename: 'testicular-anatomy.svg',
      title: 'Testicular Anatomy',
      description: 'Cross-sectional anatomy of testicle and scrotum',
    },
    {
      id: 'torsion-mechanism',
      type: 'diagram',
      filename: 'testicular-torsion-mechanism.svg',
      title: 'Testicular Torsion Mechanism',
      description: 'Illustration of spermatic cord twisting in torsion',
    },
    {
      id: 'testicular-self-exam',
      type: 'diagram',
      filename: 'testicular-self-exam-technique.svg',
      title: 'Testicular Self-Exam Technique',
      description: 'Step-by-step guide for testicular self-examination',
    },
  ],

  citations: [
    {
      id: 'aau-testicular-cancer-2023',
      type: 'article',
      title: 'Testicular Cancer Guidelines',
      source: 'American Urological Association',
    },
    {
      id: 'eau-guidelines-urology-2023',
      type: 'article',
      title: 'EAU Guidelines on Testicular Cancer',
      source: 'European Association of Urology',
    },
    {
      id: 'nccn-testicular-cancer-2023',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Testicular Cancer',
      source: 'National Comprehensive Cancer Network',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
    { targetId: 'condition-erectile-dysfunction', targetType: 'condition', relationship: 'related', label: 'Erectile Dysfunction' },
  ],

  tags: {
    systems: ['reproductive', 'urinary'],
    topics: ['urology', 'andrology', 'scrotal pathology', 'testicular cancer'],
    keywords: ['torsion', 'epididymitis', 'varicocele', 'hydrocele', 'testicular cancer', 'testicular pain'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'emergency medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 2,
  status: 'published',
};

export default testicularConditions;
