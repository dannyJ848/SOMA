/**
 * Testicular Cancer - Reproductive System
 *
 * Comprehensive content on testicular germ cell tumors including
 * types, staging, treatment, and survivorship.
 */

import { EducationalContent } from '../../../types';

export const testicularCancer: EducationalContent = {
  id: 'reproductive-testicular-cancer',
  type: 'condition',
  name: 'Testicular Cancer',
  alternateNames: ['Testicular Germ Cell Tumor', 'Testis Cancer'],

  levels: {
    1: {
      level: 1,
      summary: 'Testicular cancer starts in the testicles. It is most common in young men ages 15-35. It is highly curable, even when it has spread. A lump or swelling in the testicle is the most common sign.',
      explanation: `## What Is Testicular Cancer?

Testicular cancer starts in the testicles (testes), the male reproductive organs that make sperm and testosterone.

### Most Common Cancer in Young Men

- Most common in ages 15-35
- About 9,000 new cases per year in US
- Highly curable, even if advanced
- 95% survival rate overall

### Types of Testicular Cancer

**Germ Cell Tumors (95%):**
- Start from cells that make sperm
- Two main types:
  - **Seminoma:** Grows more slowly
  - **Non-seminoma:** Grows faster, multiple types

**Stromal Tumors (5%):**
- Start from hormone-producing cells
- Usually benign
- Leydig cell, Sertoli cell tumors

### Risk Factors

- Undescended testicle (cryptorchidism)
- Family history of testicular cancer
- Personal history of testicular cancer
- HIV infection
- Caucasian race
- Tall height (slight increased risk)

### Warning Signs

- Lump or swelling in either testicle
- Feeling of heaviness in scrotum
- Dull ache in lower abdomen or groin
- Sudden fluid collection in scrotum
- Pain or discomfort in testicle

### Self-Examination

- Monthly self-check recommended
- Best done after warm bath/shower
- Feel for lumps, changes in size
- See doctor if anything abnormal

### Treatment

- Surgery to remove affected testicle (orchiectomy)
- Radiation for seminoma
- Chemotherapy for non-seminoma or advanced
- Surveillance for early stage
- Highly effective cures`,
      keyTerms: [
        { term: 'testicle', definition: 'Male reproductive organ that produces sperm and testosterone' },
        { term: 'seminoma', definition: 'Type of testicular cancer made of uniform cells; more common and treatable' },
        { term: 'non-seminoma', definition: 'Type of testicular cancer that grows faster; includes several subtypes' },
        { term: 'orchiectomy', definition: 'Surgical removal of a testicle' },
        { term: 'cryptorchidism', definition: 'Condition where one or both testicles do not descend into scrotum' },
      ],
      analogies: [
        'Testicular cancer is like an invader in a fortress - even if it spreads beyond, treatments can hunt it down and eliminate it.',
      ],
      examples: [
        'Testicular cancer is the most common cancer in men ages 15-35',
        'Seminomas account for about 50% of all testicular germ cell tumors',
        'Even with spread to distant organs, cure rates exceed 80%',
      ],
      patientCounselingPoints: [
        'Monthly testicular self-exam helps find changes early',
        'Removing one testicle does not usually affect fertility or masculinity',
        'Testicular cancer is highly curable even when advanced',
        'Sperm banking before treatment if fertility is a concern',
      ],
    },
    2: {
      level: 2,
      summary: 'Testicular germ cell tumors are classified as seminomatous or non-seminomatous. Staging involves serum tumor markers (AFP, hCG, LDH), imaging, and pathology. Treatment ranges from surveillance to chemotherapy depending on stage and histology.',
      explanation: `## Testicular Cancer Overview

### Epidemiology

**Statistics:**
- 9,000 new cases/year (US)
- 460 deaths/year
- Median age: 33 years
- Bimodal distribution (peaks at 30 and 60)
- Incidence increasing

**Risk Factors:**

Strong:
- Cryptorchidism (3-8x risk)
- Personal history
- Family history
- Intratubular germ cell neoplasia

Moderate:
- HIV infection
- Caucasian race
- Tall stature
- Cannabis use (controversial)

Protective:
- Late puberty
- Physical activity

### Pathology

**Germ Cell Tumors:**

Seminoma (50%):
- Sheets of uniform cells
- Clear cytoplasm
- Central nucleus
- Lymphocytic infiltrate
- Radiosensitive
- Chemosensitive

Non-seminoma (50%):
- Embryonal carcinoma
- Yolk sac tumor
- Choriocarcinoma
- Teratoma
- Mixed germ cell tumors

**Stromal Tumors:**
- Leydig cell tumors
- Sertoli cell tumors
- Usually benign
- May produce hormones

### Serum Tumor Markers

**AFP (Alpha-fetoprotein):**
- Yolk sac tumor, embryonal
- Half-life: 5-7 days
- Elevated only in non-seminoma

**hCG (Human chorionic gonadotropin):**
- Choriocarcinoma, some seminoma
- Half-life: 24-36 hours
- Elevated in both types

**LDH (Lactate dehydrogenase):**
- Tumor burden marker
- Less specific
- Prognostic value

**Marker Patterns:**

| Tumor Type | AFP | hCG | LDH |
|------------|-----|-----|-----|
| Seminoma | Normal | May be elevated | May be elevated |
| Embryonal | Elevated | Elevated | Elevated |
| Yolk sac | Elevated | Normal | May be elevated |
| Choriocarcinoma | Normal | Very high | Elevated |
| Teratoma | Normal | Normal | Normal |

### Staging (AJCC 8th Edition)

**Stage I:** Limited to testis
- pT1: No vascular invasion, limited to testis
- pT2: Vascular invasion or hilar invasion
- pT3: Spermatic cord invasion
- pT4: Scrotal invasion

**Stage II:** Retroperitoneal nodes
- IIA: Nodes <=2 cm
- IIB: Nodes 2-5 cm
- IIC: Nodes >5 cm

**Stage III:** Supradiaphragmatic nodes or metastases
- IIIA: High markers, any metastasis
- IIIB: Very high markers or pulmonary mets
- IIIC: Extrapulmonary visceral mets

### Treatment by Stage

**Stage I Seminoma:**
- Surveillance (preferred)
- Single agent carboplatin
- Radiation to para-aortic nodes

**Stage I Non-seminoma:**
- Surveillance (risk-adapted)
- RPLND (nerve-sparing)
- One cycle BEP

**Stage II:**
- Radiation (seminoma, low bulk)
- Chemotherapy (BEP)
- RPLND (select non-seminoma)

**Stage III:**
- Chemotherapy (BEP x 3-4 cycles)
- Post-chemo RPLND if residual mass

### Chemotherapy

**BEP Regimen:**
- Bleomycin
- Etoposide
- Cisplatin
- 3-4 cycles
- 5 days per cycle
- Curative for most metastatic disease

**EP Regimen:**
- Etoposide + Cisplatin
- If bleomycin contraindicated

**Salvage:**
- VIP (etoposide, ifosfamide, cisplatin)
- TIP (paclitaxel, ifosfamide, cisplatin)
- High-dose chemotherapy + stem cell rescue

### Surgical Approaches

**Radical Inguinal Orchiectomy:**
- High inguinal incision
- Clamp spermatic cord early
- Pathologic diagnosis
- Do not transect scrotum

**Retroperitoneal Lymph Node Dissection (RPLND):**
- Template or bilateral dissection
- Nerve-sparing technique
- Removes retroperitoneal nodes
- For stage I non-seminoma
- Post-chemo residual mass

**Complications:**
- Antegrade ejaculation preservation (nerve-sparing)
- Small bowel obstruction
- Vascular injury
- Chylous ascites

### Surveillance

**Stage I Surveillance:**

Physical exam:
- Every 1-2 months x 1 year
- Every 2-3 months x 1 year
- Every 3-4 months x 1 year
- Then less frequently

Tumor markers:
- Same schedule as exam
- More frequent initially

CT imaging:
- Every 3-4 months x 1 year
- Every 4-6 months x 2 years
- Annually thereafter

Chest X-ray:
- As needed

**Relapse Risk:**
- Seminoma: 15-20%
- Non-seminoma: 20-30%
- Salvageable with chemotherapy`,
      keyTerms: [
        { term: 'RPLND', definition: 'Retroperitoneal lymph node dissection; surgery to remove lymph nodes' },
        { term: 'BEP', definition: 'Bleomycin, Etoposide, Cisplatin chemotherapy regimen' },
        { term: 'yolk sac tumor', definition: 'Non-seminoma germ cell tumor producing AFP' },
        { term: 'teratoma', definition: 'Germ cell tumor with mature tissues from multiple germ layers' },
        { term: 'IGCCCG', definition: 'International Germ Cell Consensus Classification; prognostic grouping' },
      ],
      clinicalNotes: 'Testicular cancer is the most curable solid tumor, with survival rates exceeding 95% overall. Even metastatic disease is curable in approximately 80% of cases with modern platinum-based chemotherapy.',
    },
    3: {
      level: 3,
      summary: 'Testicular cancer management requires multidisciplinary care. IGCCCG risk stratification guides chemotherapy decisions. Post-chemotherapy residual masses require surgical evaluation. Long-term follow-up monitors for recurrence and late effects including secondary malignancies and cardiovascular disease.',
      explanation: `## Detailed Management

### IGCCCG Risk Classification

**Good Risk (90% survival):**
- Testis or retroperitoneal primary
- No non-pulmonary visceral mets
- AFP <1000, hCG <5000, LDH <1.5x ULN

**Intermediate Risk (80% survival):**
- Testis or retroperitoneal primary
- No non-pulmonary visceral mets
- Markers moderately elevated

**Poor Risk (50% survival):**
- Mediastinal primary
- Non-pulmonary visceral mets
- Very high markers
- AFP >10,000 OR hCG >50,000 OR LDH >10x ULN

### Post-Chemotherapy Surgery

**Indications:**
- Residual mass >1 cm
- Non-seminoma
- Teratoma component likely

**Timing:**
- 4-6 weeks after chemotherapy
- Markers normalized or plateaued

**Approach:**
- Full bilateral RPLND
- Viable cancer in 10-20%
- Teratoma in 40-50%
- Necrosis in 40-50%

**Complications:**
- Higher than primary RPLND
- Vascular involvement
- Pulmonary resection if thoracic disease

### Late Effects and Survivorship

**Secondary Malignancies:**
- Risk increased 2-fold
- Leukemia (etoposide)
- Solid tumors (radiation field)
- Screening important

**Cardiovascular Disease:**
- Increased risk with platinum
- Hypertension
- Ischemic heart disease
- Metabolic syndrome
- Annual BP, lipids, glucose

**Pulmonary Toxicity:**
- Bleomycin lung injury
- Restrictive lung disease
- Monitor pulmonary function

**Renal Function:**
- Cisplatin nephrotoxicity
- Monitor creatinine
- Hydration important

**Hearing Loss:**
- Cisplatin ototoxicity
- High-frequency loss
- Tinnitus

**Neurotoxicity:**
- Peripheral neuropathy
- Cisplatin-induced
- May be permanent

**Hypogonadism:**
- Testosterone deficiency
- Monitor testosterone levels
- Replacement if symptomatic

**Fertility:**
- Impaired by chemotherapy
- Sperm banking before treatment
- Recovery possible
- Testicular atrophy

### Fertility Preservation

**Sperm Banking:**
- Before any treatment
- Multiple samples
- Referral to fertility specialist
- Cost/viability considerations

**Testicular Sperm Extraction:**
- If azoospermic after treatment
- TESE/micro-TESE
- ART options

**Testosterone Replacement:**
- If hypogonadal
- Does not affect recurrence
- Improves quality of life

### Follow-up Protocols

**Years 1-2:**
- Physical exam: Every 2 months
- Tumor markers: Every 2 months
- CT abdomen/pelvis: Every 3-4 months
- Chest X-ray: Every 4-6 months

**Years 3-5:**
- Physical exam: Every 3-4 months
- Tumor markers: Every 3-4 months
- CT: Every 6 months

**After 5 Years:**
- Annual follow-up
- Late effects screening
- Quality of life assessment

**Relapse Patterns:**
- Most within 2 years
- Late relapse (>2 years) possible
- Teratoma grows slowly
- Seminoma can relapse late

### Special Situations

**Brain Metastases:**
- Choriocarcinoma
- Poor prognosis
- Combined modality treatment
- Whole brain radiation

**Growing Teratoma Syndrome:**
- Enlarging masses despite markers normal
- Chemoresistant
- Surgical resection

**Late Relapse:**
- >2 years after complete response
- Chemotherapy-resistant
- Surgery primary treatment

**Contralateral Tumor:**
- 2-5% risk
- Synchronous or metachronous
- Treat as new primary`,
      keyTerms: [
        { term: 'growing teratoma syndrome', definition: 'Enlarging tumor mass despite normalized markers after chemotherapy' },
        { term: 'late relapse', definition: 'Recurrence more than 2 years after complete response' },
        { term: 'bleomycin lung', definition: 'Pulmonary fibrosis caused by bleomycin toxicity' },
        { term: 'azoospermia', definition: 'Absence of sperm in semen' },
        { term: 'hypogonadism', definition: 'Insufficient testosterone production' },
      ],
      clinicalNotes: 'Bleomycin is associated with life-threatening pulmonary toxicity, particularly when combined with high oxygen concentrations. Patients who have received bleomycin should avoid high FiO2 during surgery and anesthesia.',
    },
    4: {
      level: 4,
      summary: 'Advanced testicular cancer management includes management of poor prognosis disease, salvage therapy with high-dose chemotherapy, and chronic toxicity monitoring. Psychosocial support and quality of life are important given the young age of patients.',
      explanation: `## Advanced Topics

### Poor-Risk Disease Management

**Definition:**
- Mediastinal primary
- Non-pulmonary visceral mets
- Very high tumor markers
- 50% cure rate with standard BEP

**Approaches:**
- BEP x 4 cycles (standard)
- Clinical trials
- High-dose chemotherapy (investigational upfront)
- Post-chemo surgery essential

**Post-Chemo Residual:**
- RPLND for residual mass
- Viable cancer indicates need for salvage
- Second-line chemotherapy

### Salvage Therapy

**Conventional Dose:**
- VIP (etoposide, ifosfamide, cisplatin)
- TIP (paclitaxel, ifosfamide, cisplatin)
- 25-35% cure rate

**High-Dose Chemotherapy:**
- Carboplatin + etoposide
- Autologous stem cell transplant
- TI-CE (paclitaxel, ifosfamide, carboplatin, etoposide)
- 50-70% cure rate in salvage setting

**Timing:**
- After first relapse
- Platinum-refractory disease
- At experienced centers

### Chronic Toxicity Management

**Cardiovascular:**
- Annual BP monitoring
- Lipid panel
- Diabetes screening
- Cardiology referral
- Lifestyle modifications
- Statin therapy

**Pulmonary:**
- PFTs if bleomycin received
- Smoking cessation
- Influenza/pneumococcal vaccines
- Avoid high oxygen

**Renal:**
- Annual creatinine
- Avoid nephrotoxins
- Hydration

**Hearing:**
- Audiometry
- Hearing aids if needed
- Communication strategies

**Neuropathy:**
- Gabapentin, duloxetine
- Physical therapy
- Fall prevention

**Fertility:**
- Semen analysis
- Fertility referral
- Testosterone replacement

### Quality of Life

**Body Image:**
- Testicular prosthesis
- Body image concerns
- Partner communication
- Sexual function

**Psychological:**
- Anxiety/depression
- Fear of recurrence
- Support groups
- Counseling

**Social:**
- Employment
- Relationships
- Insurance concerns
- Financial toxicity

### Psychosocial Support

**Young Adult Challenges:**
- Career disruption
- Dating/relationships
- Fertility concerns
- Financial burden

**Support Services:**
- Social work
- Psychology/psychiatry
- Support groups
- Peer support
- Financial counseling

### Testicular Prosthesis

**Timing:**
- At orchiectomy
- Delayed insertion
- Patient preference

**Considerations:**
- Silicone vs saline
- Size matching
- Risks (infection, displacement)
- Patient satisfaction

### Survivorship Care

**Transition to Primary Care:**
- After 5 years
- Shared care model
- Late effects screening
- Health maintenance

**Screening:**
- Secondary malignancies
- Cardiovascular disease
- Testosterone deficiency
- Fertility

**Health Promotion:**
- Exercise
- Healthy diet
- Smoking cessation
- Limit alcohol

**Patient Education:**
- Late effects
- Symptoms to report
- Follow-up schedule
- Self-advocacy`,
      keyTerms: [
        { term: 'platinum-refractory', definition: 'Disease progressing during or within 4 weeks of platinum chemotherapy' },
        { term: 'autologous stem cell transplant', definition: 'Using patient\'s own stem cells to recover from high-dose chemotherapy' },
        { term: 'testicular prosthesis', definition: 'Artificial implant to replace removed testicle' },
        { term: 'financial toxicity', definition: 'Financial burden of cancer treatment affecting patient wellbeing' },
        { term: 'shared care', definition: 'Coordinated care between oncology and primary care' },
      ],
      clinicalNotes: 'High-dose chemotherapy with autologous stem cell rescue achieves cure in 50-70% of patients with relapsed testicular germ cell tumors, making it the preferred salvage approach at experienced centers.',
    },
    5: {
      level: 5,
      summary: 'Expert testicular cancer care involves management of rare histologies, clinical trial participation, addressing survivorship issues in long-term survivors, and research into reducing treatment toxicity while maintaining high cure rates.',
      explanation: `## Expert Topics

### Rare Histologies

**Spermatocytic Tumor:**
- Formerly spermatocytic seminoma
- Not true germ cell tumor
- No metastatic potential
- Orchiectomy curative
- No adjuvant therapy

**Carcinoma In Situ (CIS):**
- Intratubular germ cell neoplasia
- Precursor to germ cell tumors
- Associated with cryptorchidism
- Can treat with radiation or surveillance

**Sex Cord-Stromal Tumors:**
- Leydig cell tumors
- Sertoli cell tumors
- Usually benign
- Hormone production
- Malignant variants rare

**Testicular Lymphoma:**
- Most common testis tumor in men >60
- Systemic disease
- Not germ cell tumor
- Chemotherapy treatment
- Poor prognosis

### Clinical Trials

**Current Research:**
- Reducing chemotherapy toxicity
- Omitting bleomycin (BEP vs EP)
- Shorter duration (3 vs 4 cycles)
- Substituting carboplatin
- Omission of RPLND

**De-escalation:**
- Can we treat less?
- Maintain cure rates
- Reduce late effects
- Quality of life

**Molecular Studies:**
- miRNA markers
- Circulating tumor DNA
- Risk stratification
- Response prediction

### Global Health

**Disparities:**
- Access to care
- Orchiectomy availability
- Chemotherapy access
- Fertility preservation

**Solutions:**
- Telemedicine
- Clinical pathways
- Training programs
- Resource allocation

### Research Frontiers

**Molecular Markers:**
- miR-371a-3p
- Liquid biopsy
- Early detection
- Response monitoring

**Immunotherapy:**
- Limited efficacy to date
- Combination approaches
- Checkpoint inhibitors
- Microenvironment studies

**Targeted Therapy:**
- c-KIT inhibitors
- PI3K pathway
- MEK inhibitors
- Personalized approaches

**Fertility:**
- Stem cell preservation
- In vitro spermatogenesis
- Testicular tissue cryopreservation
- Experimental approaches

### Education and Awareness

**Movember:**
- Testicular cancer awareness
- Self-exam education
- Young men engagement
- Funding for research

**Provider Education:**
- Early recognition
- Referral pathways
- Fertility preservation
- Survivorship care

**Patient Education:**
- Self-examination
- When to seek care
- Treatment options
- Late effects awareness

### Long-Term Outcomes

**Cure Rates:**
- Stage I: 99%
- Stage II: 95%
- Stage III good risk: 90%
- Stage III poor risk: 50%
- Salvage: 25-50%

**Quality of Life:**
- Generally good
- Chronic toxicities manageable
- Psychosocial support needed
- Career/relationship impacts

**Second Malignancies:**
- 2-fold increased risk
- Lifelong surveillance
- Screening programs
- Risk reduction`,
      keyTerms: [
        { term: 'spermatocytic tumor', definition: 'Benign testicular tumor with no metastatic potential' },
        { term: 'testicular lymphoma', definition: 'Most common testicular cancer in elderly; systemic lymphoma' },
        { term: 'miRNA', definition: 'MicroRNA; small non-coding RNA with diagnostic potential' },
        { term: 'de-escalation', definition: 'Reducing treatment intensity while maintaining efficacy' },
        { term: 'in vitro spermatogenesis', definition: 'Creating sperm from stem cells in laboratory' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Testicular cancer is the most curable solid tumor with 95% overall survival. Even metastatic disease is curable in 80% of cases with modern platinum-based chemotherapy.

2. All patients should have sperm banking before starting chemotherapy, as infertility is a common side effect of treatment. Recovery of spermatogenesis can occur but is unpredictable.

3. Patients who receive bleomycin are at risk for life-threatening pulmonary toxicity and should avoid high concentrations of oxygen during anesthesia and surgery.

4. Post-chemotherapy retroperitoneal lymph node dissection is indicated for residual masses >1 cm in non-seminoma to remove teratoma or viable cancer.

5. Long-term survivors require surveillance for late effects including cardiovascular disease, secondary malignancies, hypogonadism, and infertility.`,
    },
  },

  media: [
    {
      id: 'testicular-cancer-staging',
      type: 'diagram',
      filename: 'testis-cancer-staging.svg',
      title: 'Testicular Cancer Staging',
      description: 'Stages and lymph node involvement',
    },
  ],

  citations: [
    {
      id: 'nccn-testicular',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines: Testicular Cancer',
      authors: ['NCCN'],
      source: 'NCCN',
    },
    {
      id: 'igcccg',
      type: 'article',
      title: 'International Germ Cell Consensus Classification',
      authors: ['International Germ Cell Cancer Collaborative Group'],
      source: 'Journal of Clinical Oncology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-prostate-cancer', targetType: 'condition', relationship: 'related', label: 'Prostate Cancer' },
    { targetId: 'reproductive-testis-histology', targetType: 'structure', relationship: 'related', label: 'Testis Histology' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'urology'],
    keywords: ['testicular cancer', 'germ cell tumor', 'seminoma', 'BEP chemotherapy', 'orchiectomy'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default testicularCancer;
