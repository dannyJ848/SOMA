/**
 * Cervical Pathology - Reproductive System
 *
 * Comprehensive content on cervical cancer, HPV-related changes,
 * CIN, and screening with Pap smear and HPV testing.
 */

import { EducationalContent } from '../../../types';

export const cervicalPathology: EducationalContent = {
  id: 'reproductive-cervical-pathology',
  type: 'condition',
  name: 'Cervical Pathology',
  alternateNames: ['Cervical Cancer', 'Cervical Intraepithelial Neoplasia', 'Cervical Dysplasia'],

  levels: {
    1: {
      level: 1,
      summary: 'Cervical cancer starts in the cervix, the lower part of the uterus. It is mainly caused by HPV, a common virus. Regular screening with Pap tests can find changes early and prevent cancer.',
      explanation: `## What Is Cervical Pathology?

Cervical pathology refers to changes in the cells of the cervix, ranging from minor changes to cancer.

### What Is the Cervix?

The cervix is the lower, narrow part of the uterus that connects to the vagina. It has two main cell types:
- Squamous cells on the outside (ectocervix)
- Glandular cells on the inside (endocervix)

### HPV and Cervical Cancer

HPV (Human Papillomavirus):
- Very common virus spread through skin contact
- Most sexually active people get HPV
- Usually clears on its own
- Some types can cause cervical cancer

High-risk HPV types:
- Types 16 and 18 cause about 70% of cervical cancers
- Types 31, 33, 45, 52, 58 cause most of the rest

### Pre-Cancer Changes

Cervical cells can change before becoming cancer:
- **CIN 1:** Mild changes, often clear on their own
- **CIN 2:** Moderate changes
- **CIN 3:** Severe changes (also called CIS)

These changes are not cancer but may become cancer if not treated.

### Screening Saves Lives

**Pap Test (Pap Smear):**
- Checks for abnormal cervical cells
- Can find changes before cancer develops
- Should start at age 21

**HPV Test:**
- Checks for high-risk HPV types
- Can be done with Pap test (co-test)

**HPV Vaccine:**
- Prevents infection with cancer-causing HPV types
- Best given before sexual activity begins
- Approved for ages 9-45

### Warning Signs of Cervical Cancer

- Bleeding between periods
- Bleeding after sex
- Unusual discharge
- Pain during sex
- Pelvic pain

Early stages often have no symptoms - screening is important!`,
      keyTerms: [
        { term: 'cervix', definition: 'The lower part of the uterus that opens into the vagina' },
        { term: 'HPV', definition: 'Human Papillomavirus, a common virus that can cause cervical cancer' },
        { term: 'Pap test', definition: 'A screening test that checks for abnormal cervical cells' },
        { term: 'CIN', definition: 'Cervical Intraepithelial Neoplasia - abnormal cell growth on the cervix' },
        { term: 'squamous cells', definition: 'Flat cells that cover the outer surface of the cervix' },
      ],
      analogies: [
        'The cervix is like a gateway between the uterus and vagina - it is where doctors check for abnormal cells during a Pap test.',
        'CIN is like a garden that is getting weedy - with care, it can be restored; without care, weeds might take over.',
      ],
      examples: [
        'HPV types 16 and 18 cause about 70% of all cervical cancers worldwide',
        'Cervical cancer screening has reduced deaths by over 70% in developed countries',
        'The HPV vaccine can prevent about 90% of cervical cancers',
      ],
      patientCounselingPoints: [
        'Regular Pap tests can find cervical changes before they become cancer',
        'HPV infection is very common and usually clears on its own',
        'The HPV vaccine prevents infection but does not treat existing infections',
        'Cervical cancer often has no symptoms in early stages',
      ],
    },
    2: {
      level: 2,
      summary: 'Cervical pathology is primarily driven by persistent high-risk HPV infection. The transformation zone is the vulnerable area where most cancers develop. Cervical intraepithelial neoplasia (CIN) represents precancerous changes graded 1-3. Screening with cytology and HPV testing enables early detection and prevention.',
      explanation: `## Understanding Cervical Pathology

### HPV Biology

**Virus Characteristics:**
- Double-stranded DNA virus
- 200+ types identified
- Tropism for epithelial cells
- Over 40 types infect anogenital tract

**Risk Categories:**

High-risk (oncogenic):
- Types 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59
- 16 and 18: ~70% of cervical cancers
- E6 and E7 oncoproteins inactivate p53 and Rb

Low-risk:
- Types 6, 11, 42, 43, 44
- Cause genital warts
- Rarely cause cancer

**Natural History:**
- 80% of women acquire HPV by age 50
- 90% clear infection within 2 years
- Persistent infection causes precancer
- Progression to cancer takes 10-20 years

### Cervical Anatomy and Transformation Zone

**Transformation Zone (TZ):**
- Junction of squamous and columnar epithelium
- Metaplasia occurs here
- Most vulnerable to HPV
- Target for colposcopy

**Squamocolumnar Junction:**
- Original SCJ: At birth
- New SCJ: After metaplasia
- TZ between them
- Moves with age, hormones, parity

### Cervical Intraepithelial Neoplasia (CIN)

**Classification:**

CIN 1 (Mild dysplasia):
- Lower 1/3 of epithelium
- Often regresses spontaneously
- Low-grade lesion

CIN 2 (Moderate dysplasia):
- Lower 2/3 of epithelium
- High-grade lesion
- Treatment usually recommended

CIN 3 (Severe dysplasia/CIS):
- Full thickness involvement
- High-grade lesion
- Treatment required
- 30% progress to invasion if untreated

**Alternative Terminology:**
- LSIL: Low-grade squamous intraepithelial lesion (CIN 1)
- HSIL: High-grade squamous intraepithelial lesion (CIN 2-3)

### Squamous Cell Carcinoma

**Types:**
- Keratinizing
- Non-keratinizing
- Basaloid
- Rare: verrucous, papillary, lymphoepithelioma-like

**Risk Factors:**
- Persistent high-risk HPV
- Smoking
- Immunosuppression
- Long-term oral contraceptives
- Multiple full-term pregnancies
- Chlamydia infection

### Adenocarcinoma

**Characteristics:**
- 10-25% of cervical cancers
- Increasing incidence
- Arises from endocervical glands
- HPV 16, 18 most common
- Harder to detect on cytology

**Types:**
- Usual type (endocervical)
- Mucinous
- Clear cell
- Neuroendocrine

### Screening Guidelines

**Age-Based Screening:**

21-29 years:
- Cytology (Pap test) every 3 years
- HPV testing not recommended

30-65 years:
- Preferred: HPV + cytology co-testing every 5 years
- Acceptable: Cytology alone every 3 years

>65 years:
- Stop if adequate prior screening negative
- No history of CIN 2+ within 20 years

<21 years:
- Do not screen regardless of sexual history

**After Hysterectomy:**
- Stop if no history of CIN 2+ or cancer
- Continue if history of high-grade lesion

### HPV Vaccination

**Vaccines:**
- Gardasil 9 (9-valent): Types 6, 11, 16, 18, 31, 33, 45, 52, 58
- Covers ~90% of cervical cancers
- Also prevents genital warts

**Schedule:**
- Age 9-14: 2 doses
- Age 15-45: 3 doses

**Impact:**
- Dramatically reduced HPV infections
- Reduced precancerous lesions
- Herd immunity effects
- May reduce need for screening intensity`,
      keyTerms: [
        { term: 'transformation zone', definition: 'The area where columnar epithelium transforms to squamous epithelium; most susceptible to HPV' },
        { term: 'colposcopy', definition: 'Examination of cervix with magnifying instrument after applying acetic acid' },
        { term: 'metaplasia', definition: 'Transformation of one cell type to another' },
        { term: 'dysplasia', definition: 'Abnormal development or growth of cells' },
        { term: 'LEEP', definition: 'Loop electrosurgical excision procedure; treatment for CIN' },
      ],
      analogies: [
        'The transformation zone is like a construction site - it is where change is happening, and it is vulnerable to problems.',
        'HPV persistence is like having squatters who will not leave - eventually they might damage the property.',
      ],
      examples: [
        'CIN 1 regresses spontaneously in 60% of cases within 2 years',
        'CIN 3 has a 30% risk of becoming invasive cancer if untreated',
        'HPV vaccination has reduced HPV 16/18 infections by over 80% in vaccinated populations',
      ],
      patientCounselingPoints: [
        'CIN 1 often goes away on its own without treatment',
        'CIN 2-3 requires treatment to prevent progression to cancer',
        'HPV co-testing is more sensitive than Pap test alone for women over 30',
        'Even vaccinated women need regular cervical cancer screening',
      ],
    },
    3: {
      level: 3,
      summary: 'Cervical pathology involves understanding HPV oncogenesis, Bethesda System cytology reporting, colposcopic evaluation, and management of precancerous lesions. Treatment modalities include excisional and ablative procedures with attention to fertility preservation and follow-up protocols.',
      explanation: `## Detailed Cervical Pathology

### HPV Oncogenesis

**Viral Genome:**
- 8 kb circular DNA
- Early (E) and late (L) genes
- Upstream regulatory region

**Oncoproteins:**

E6:
- Binds p53 tumor suppressor
- Targets p53 for degradation
- Prevents apoptosis
- Induces telomerase

E7:
- Binds Rb tumor suppressor
- Releases E2F transcription factor
- Promotes cell cycle progression
- Chromosomal instability

**Progression to Cancer:**
1. HPV infection of basal cells
2. Viral replication in maturing cells
3. Integration into host genome (often)
4. E6/E7 overexpression
5. Accumulation of mutations
6. Invasive carcinoma

### Bethesda System for Reporting Cytology

**Specimen Adequacy:**
- Satisfactory for evaluation
- Satisfactory but limited by...
- Unsatisfactory for evaluation

**Negative for Intraepithelial Lesion or Malignancy (NILM):**
- Organisms (trichomonas, fungal, BV)
- Reactive changes
- Atrophy
- Glandular cells status

**Epithelial Cell Abnormalities:**

Squamous:
- ASC-US: Atypical squamous cells of undetermined significance
- ASC-H: Atypical squamous cells, cannot exclude HSIL
- LSIL: Low-grade squamous intraepithelial lesion
- HSIL: High-grade squamous intraepithelial lesion
- SCC: Squamous cell carcinoma

Glandular:
- AGC: Atypical glandular cells
- AIS: Adenocarcinoma in situ
- Adenocarcinoma

**Management by Result:**

| Result | Action |
|--------|--------|
| NILM | Routine screening |
| ASC-US | HPV test or repeat cytology |
| LSIL | Colposcopy (if HPV positive or 25+) |
| HSIL | Colposcopy with biopsy |
| SCC | Immediate evaluation |
| AGC | Colposcopy + endocervical sampling |

### Colposcopy

**Indications:**
- Abnormal cytology
- Positive HPV (especially 16/18)
- Visible lesion
- Post-treatment surveillance

**Technique:**
1. Visual inspection
2. Apply 3-5% acetic acid
3. Identify acetowhite areas
4. Apply Lugol\'s iodine
5. Biopsy abnormal areas
6. Endocervical sampling

**Acetowhite Changes:**
- Indicate abnormal epithelium
- Demarcated, dense white
- Rapid appearance
- Associated with abnormal vessels

**Grading (Reid Index):**
- Border, color, vessels, iodine
- Predicts lesion severity

### Histopathology

**CIN Microscopic Features:**

CIN 1:
- Atypical cells in lower 1/3
- Koilocytosis (hallmark)
- Nuclear enlargement
- Binucleation
- Perinuclear halos

CIN 2:
- Atypia extends to 2/3
- Loss of maturation
- Hyperchromasia
- Increased mitoses (abnormal)
- Reduced cytoplasm

CIN 3/CIS:
- Full thickness atypia
- No maturation
- Marked nuclear pleomorphism
- Numerous abnormal mitoses
- Minimal cytoplasm

**Invasive Squamous Carcinoma:**
- Invasion through basement membrane
- Irregular nests/cords
- Desmoplastic stroma
- Keratin pearls (keratinizing type)
- Lymphovascular invasion possible

### Treatment of CIN

**Excisional Methods:**

LEEP (Loop Electrosurgical Excision):
- Local anesthesia
- Removes TZ
- Tissue for pathology
- Can treat large areas
- Fertility preserved

Cold Knife Conization:
- Operating room
- Scalpel excision
- Diagnostic and therapeutic
- Used for AIS or suspicious invasion
- More bleeding risk

Laser Conization:
- Precise
- Expensive equipment
- Tissue destruction at margins
- Less commonly used

**Ablative Methods:**

Cryotherapy:
- Freezes abnormal tissue
- Destroys lesion
- No tissue for pathology
- For small, visible lesions
- For LSIL or CIN 1

Laser Ablation:
- Vaporizes tissue
- No pathology specimen
- Requires skill
- Limited use currently

**Hysterectomy:**
- For recurrent CIN 3
- For AIS (preferred)
- When childbearing complete
- Not first-line for CIN

### Follow-up After Treatment

**Test of Cure:**
- HPV test at 6 months
- Co-testing at 12 and 24 months
- Return to routine if negative

**Persistent Disease:**
- Repeat excision
- Hysterectomy if complete

### Adenocarcinoma In Situ (AIS)

**Characteristics:**
- Precursor to adenocarcinoma
- HPV-related (usually 16, 18)
- Multifocal
- Skip lesions common
- Hard to detect

**Management:**
- Cold knife cone (preferred)
- Hysterectomy if childbearing complete
- Conservative management if fertility desired
- Close surveillance essential`,
      keyTerms: [
        { term: 'Bethesda System', definition: 'Standardized system for reporting cervical cytology results' },
        { term: 'koilocytosis', definition: 'Cellular changes including nuclear enlargement and perinuclear halos; hallmark of HPV' },
        { term: 'acetowhite', definition: 'Whitening of epithelium after acetic acid application; indicates abnormal cells' },
        { term: 'endocervical curettage', definition: 'Sampling of endocervical canal during colposcopy' },
        { term: 'AIS', definition: 'Adenocarcinoma in situ; precancerous glandular lesion' },
      ],
      clinicalNotes: 'HPV 16-positive women have higher risk of progression from CIN to cancer than other HPV types. HPV genotyping can help risk stratify women with abnormal cytology, with HPV 16/18 requiring more aggressive management.',
    },
    4: {
      level: 4,
      summary: 'Advanced cervical pathology includes management of invasive cancer by stage, fertility-sparing options, and treatment of rare histologies. HPV-related and-independent pathways exist. Surveillance protocols and survivorship care are essential components of comprehensive management.',
      explanation: `## Advanced Cervical Pathology

### Staging (FIGO 2018)

**Stage I:** Confined to cervix
- IA: Microscopic invasion
  - IA1: <3 mm depth, <7 mm width
  - IA2: 3-5 mm depth, <7 mm width
- IB: Clinically visible or >IA
  - IB1: <2 cm
  - IB2: 2-4 cm
  - IB3: >=4 cm

**Stage II:** Beyond uterus but not pelvic wall/lower vagina
- IIA: Vaginal but not parametrial
- IIB: Parametrial involvement

**Stage III:** Pelvic wall/lower vagina/hydronephrosis
- IIIA: Vaginal involvement (lower 1/3)
- IIIB: Pelvic wall/parametrial to wall
- IIIC: Pelvic/para-aortic nodes

**Stage IV:** Extended beyond pelvis
- IVA: Bladder/rectal mucosa
- IVB: Distant metastases

### Treatment by Stage

**Stage IA1 (No LVSI):**
- Excisional cone biopsy
- Simple hysterectomy (if completed childbearing)
- Fertility preservation possible

**Stage IA1 (LVSI+) to IA2:**
- Modified radical hysterectomy + SLN/lymphadenectomy
- Radical trachelectomy (fertility preservation)

**Stage IB1 (Small):**
- Radical hysterectomy + lymphadenectomy
- OR chemoradiation
- Equivalent outcomes

**Stage IB2-IB3:**
- Chemoradiation (preferred)
- Concurrent cisplatin
- Adjuvant hysterectomy controversial

**Stage II-IVA:**
- Chemoradiation definitive treatment
- Cisplatin weekly or 5-FU + cisplatin
- Brachytherapy component

**Stage IVB:**
- Chemotherapy
- Pembrolizumab + chemo (FDA approved)
- Clinical trials

### Fertility-Sparing Surgery

**Conization:**
- For stage IA1
- Adequate margins essential
- Close surveillance after

**Radical Trachelectomy:**
- Removal of cervix + parametrium
- Uterus preserved
- Lymphadenectomy
- Cerclage placed
- 10-20% recurrence risk
- 50-70% pregnancy rate

**Simple Trachelectomy:**
- Less radical
- For carefully selected small lesions
- Less morbidity

### Pathologic Prognostic Factors

**Tumor Characteristics:**
- Size
- Depth of invasion
- Lymphovascular invasion
- Parametrial involvement
- Margin status
- Histologic type
- Grade

**Lymph Node Status:**
- Most important prognostic factor
- Pelvic vs para-aortic
- Number positive
- Extracapsular extension

**Other Factors:**
- HPV status (better if positive)
- Tumor-infiltrating lymphocytes
- PD-L1 expression

### Surveillance

**Post-Treatment Follow-up:**

First 2 years:
- Every 3-6 months
- History and physical
- Pap/HPV testing
- Consider imaging if high risk

Years 3-5:
- Every 6 months
- Same evaluation

After 5 years:
- Annually
- Continue long-term

**Recurrence Patterns:**
- Pelvic (most common early)
- Para-aortic nodes
- Distant (bone, lung, liver)
- 50% within first year
- 75% within 2 years

### Recurrent Disease

**Central Pelvic Recurrence:**
- Prior radiation: Pelvic exenteration
- No prior radiation: Chemoradiation
- Highly selected cases

**Non-Central Recurrence:**
- Chemotherapy
- Surgery if resectable
- Radiation if not previously treated
- Immunotherapy

**Immunotherapy:**

Pembrolizumab:
- With chemotherapy for metastatic
- As monotherapy for PD-L1+
- KEYNOTE-826 trial

### Rare Histologies

**Adenosquamous:**
- Squamous and glandular components
- Worse prognosis than pure squamous
- Same staging and treatment

**Neuroendocrine:**
- Small cell or large cell
- Very aggressive
- Chemotherapy-based treatment
- Poor prognosis

**Glassy Cell:**
- Rare variant of adenosquamous
- Large cells with "ground glass" cytoplasm
- Aggressive
- Chemoradiation

**HPV-Independent Types:**

Gastric-type adenocarcinoma:
- Not HPV-related
- Gastric phenotype
- Aggressive
- Poor prognosis
- Resistant to chemoradiation

Clear cell carcinoma:
- Associated with DES exposure
- HPV-independent
- Distinct treatment approach

### Survivorship

**Long-term Effects:**

Surgery:
- Bladder dysfunction
- Sexual dysfunction
- Lymphedema
- Menopause (if ovaries removed)

Radiation:
- Vaginal stenosis
- Sexual dysfunction
- Bowel/bladder issues
- Menopause
- Secondary malignancies

**Fertility Considerations:**
- Oocyte/embryo preservation before treatment
- Gestational surrogacy
- Adoption counseling
- Grief support`,
      keyTerms: [
        { term: 'radical hysterectomy', definition: 'Removal of uterus, cervix, upper vagina, and parametrial tissue' },
        { term: 'trachelectomy', definition: 'Surgical removal of the cervix; fertility-sparing procedure' },
        { term: 'chemoradiation', definition: 'Combined chemotherapy and radiation therapy' },
        { term: 'brachytherapy', definition: 'Internal radiation therapy using implanted radioactive sources' },
        { term: 'pelvic exenteration', definition: 'Radical surgery removing pelvic organs for recurrent cancer' },
      ],
      clinicalNotes: 'Fertility-sparing radical trachelectomy is an option for women with early-stage cervical cancer (IB1, tumor <2cm) who desire future fertility. Recurrence rates are slightly higher than with radical hysterectomy (3-5% vs 2-3%), but oncologic outcomes are generally good with proper patient selection.',
    },
    5: {
      level: 5,
      summary: 'Expert cervical pathology encompasses sentinel lymph node mapping, molecular classification, immunotherapy integration, and addressing global disparities. Emerging approaches include therapeutic HPV vaccines and novel surgical techniques.',
      explanation: `## Expert Cervical Pathology Topics

### Sentinel Lymph Node Mapping

**Technique:**
- Injection of blue dye and/or radioactive tracer
- Identify first draining nodes
- Frozen section or ultrastaging

**Advantages:**
- Reduced lymphedema
- Reduced morbidity
- Same survival if negative

**Pathologic Ultrastaging:**
- Serial sectioning
- Immunohistochemistry (cytokeratin)
- Detects micrometastases
- Management implications

**SENTICOL Trials:**
- Validated approach
- Acceptable false negative rate
- Standard of care for early stage

### Molecular Subtypes and Targeted Therapy

**TCGA Classification:**
- Squamous: KEAP1, NRF2, NFE2L2 mutations
- Adenocarcinoma: PIK3CA, PTEN, KRAS
- Potential targets identified

**Actionable Alterations:**

PIK3CA:
- Alpelisib potential
- Trials ongoing

RET fusions:
- Rare but targetable
- Selpercatinib

NTRK fusions:
- Larotrectinib, entrectinib
- Pan-tumor approval

MSI-H/dMMR:
- Pembrolizumab approved
- TMB-high also

**Bevacizumab:**
- GOG-240 in metastatic disease
- Added to chemotherapy
- Improved overall survival
- Targeting angiogenesis

### Immunotherapy

**Pembrolizumab Approvals:**
- With chemo for persistent/recurrent/metastatic
- As monotherapy for PD-L1+ (CPS >=1)
- KEYNOTE-826 established standard

**Other Agents:**
- Nivolumab
- Atezolizumab
- Cemiplimab
- Trials ongoing

**Biomarkers:**
- PD-L1 expression
- Tumor-infiltrating lymphocytes
- MSI status
- TMB

**Combination Approaches:**
- Chemo + immunotherapy + bevacizumab
- Dual checkpoint inhibition
- With radiation

### Global Health Considerations

**Global Burden:**
- 4th most common cancer in women
- 340,000 deaths annually
- 85% in low/middle-income countries

**Disparities:**
- Lack of screening programs
- Limited treatment access
- Late-stage presentation
- Mortality much higher

**WHO Elimination Initiative:**
- 90% HPV vaccination coverage
- 70% screening coverage
- 90% treatment access
- Target: <4 cases per 100,000

**Screen-and-Treat Approaches:**
- HPV testing primary
- Visual inspection with acetic acid
- Same-day treatment
- "See and treat" cryotherapy

### Therapeutic HPV Vaccines

**Rationale:**
- Preventive vaccines do not treat existing infection
- Need for therapeutic approach

**Approaches:**
- Peptide/protein vaccines
- DNA vaccines
- RNA vaccines
- Dendritic cell vaccines
- Viral vector vaccines

**Status:**
- Clinical trials ongoing
- Modest efficacy to date
- Combination with immunotherapy

### Future Directions

**Artificial Intelligence:**
- Automated cytology screening
- Quality improvement
- Resource-limited settings

**Self-Sampling:**
- Vaginal HPV self-collection
- Increase screening uptake
- Validated approach

**Molecular Screening:**
- DNA methylation markers
- miRNA signatures
- More sensitive than cytology

**Novel Surgical Techniques:**
- Sentinel node with ICG
- Robotic surgery
- Nerve-sparing approaches
- Fertility preservation advances

### Quality Metrics

**Screening:**
- Coverage rates
- Follow-up rates
- Time to treatment

**Treatment:**
- Time to treatment
- Standard of care adherence
- Margin status
- Lymph node yield

**Survivorship:**
- Quality of life measures
- Long-term follow-up
- Recurrence rates

### Research Frontiers

**Prevention:**
- Single-dose HPV vaccine
- Broader coverage vaccines
- Therapeutic vaccines

**Early Detection:**
- Blood-based tests
- Urine HPV testing
- AI-powered imaging

**Treatment:**
- Antibody-drug conjugates
- Targeted therapies
- Personalized radiation
- Immunotherapy combinations

**Global:**
- Implementation science
- Cost-effective strategies
- Task-shifting
- Telemedicine`,
      keyTerms: [
        { term: 'ultrastaging', definition: 'Extensive pathologic examination of sentinel nodes to detect micrometastases' },
        { term: 'CPS score', definition: 'Combined positive score; PD-L1 expression measure for immunotherapy eligibility' },
        { term: 'see and treat', definition: 'Approach of immediate treatment after visual diagnosis in low-resource settings' },
        { term: 'ICG', definition: 'Indocyanine green; near-infrared dye used for sentinel node mapping' },
        { term: 'therapeutic vaccine', definition: 'Vaccine designed to treat existing HPV infection rather than prevent it' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. HPV 16 causes approximately 50-60% of cervical cancers and has the highest risk of progression from CIN to cancer. HPV genotyping is useful for risk stratification.

2. The false negative rate for sentinel lymph node mapping in cervical cancer is approximately 2-5%, comparable to other gynecologic malignancies.

3. Gastric-type adenocarcinoma of the cervix is HPV-independent, aggressive, and resistant to standard chemoradiation. It requires different management approaches.

4. Pembrolizumab combined with chemotherapy is now standard first-line treatment for persistent, recurrent, or metastatic cervical cancer based on KEYNOTE-826.

5. Self-collected vaginal samples for HPV testing are as accurate as clinician-collected cervical samples and may increase screening uptake in underserved populations.`,
    },
  },

  media: [
    {
      id: 'cervical-transformation-zone',
      type: 'diagram',
      filename: 'transformation-zone.svg',
      title: 'Cervical Transformation Zone',
      description: 'Anatomy and significance of the transformation zone',
    },
  ],

  citations: [
    {
      id: 'asco-cervical-guidelines',
      type: 'article',
      title: 'ASCO Cervical Cancer Guidelines',
      authors: ['Koh WJ', 'Abu-Rustum NR', 'Bean S', 'et al.'],
      source: 'Journal of Clinical Oncology',
    },
    {
      id: 'bethesda-2014',
      type: 'article',
      title: 'The Bethesda System for Reporting Cervical Cytology',
      authors: ['Nayar R', 'Wilbur DC'],
      source: 'Springer',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-hpv-pathology', targetType: 'condition', relationship: 'related', label: 'HPV Pathology' },
    { targetId: 'reproductive-ovarian-cancer', targetType: 'condition', relationship: 'related', label: 'Ovarian Cancer' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'gynecologic-cancer'],
    keywords: ['cervical cancer', 'HPV', 'CIN', 'Pap test', 'colposcopy'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cervicalPathology;
