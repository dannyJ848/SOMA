/**
 * Endometrial Cancer - Reproductive System
 *
 * Comprehensive content on uterine cancer including types,
 * molecular classification, risk factors, and treatment.
 */

import { EducationalContent } from '../../../types';

export const endometrialCancer: EducationalContent = {
  id: 'reproductive-endometrial-cancer',
  type: 'condition',
  name: 'Endometrial Cancer',
  alternateNames: ['Uterine Cancer', 'Corpus Uteri Cancer', 'Womb Cancer'],

  levels: {
    1: {
      level: 1,
      summary: 'Endometrial cancer starts in the lining of the uterus. It is the most common gynecologic cancer. Most cases are found early because they cause abnormal bleeding.',
      explanation: `## What Is Endometrial Cancer?

Endometrial cancer is cancer that starts in the endometrium, the lining of the uterus (womb).

### Most Common Gynecologic Cancer

- More common than ovarian and cervical cancer combined
- About 65,000 new cases per year in the US
- Usually found at early stages
- High cure rate when found early

### Two Main Types

**Type 1 (Endometrioid):**
- Most common (80% of cases)
- Grows slowly
- Responds to hormones
- Better prognosis
- Associated with excess estrogen

**Type 2 (Non-endometrioid):**
- Less common (20% of cases)
- More aggressive
- Not hormone-related
- Poorer prognosis
- Includes serous and clear cell types

### Warning Signs

**Postmenopausal bleeding:**
- Any bleeding after menopause is abnormal
- Must be evaluated immediately
- 90% of women with endometrial cancer have bleeding

**Premenopausal symptoms:**
- Heavy or prolonged periods
- Bleeding between periods
- Any unusual vaginal discharge

### Risk Factors

- Obesity (major risk factor)
- Age over 50
- Diabetes
- Never having children
- Early first period
- Late menopause
- Tamoxifen use
- Family history
- Lynch syndrome

### Protective Factors

- Birth control pills
- Pregnancy
- Breastfeeding
- Progestin-containing IUD`,
      keyTerms: [
        { term: 'endometrium', definition: 'The inner lining of the uterus' },
        { term: 'menopause', definition: 'The time when menstrual periods stop permanently' },
        { term: 'postmenopausal bleeding', definition: 'Any vaginal bleeding that occurs after menopause' },
        { term: 'estrogen', definition: 'A female hormone that can promote endometrial growth' },
        { term: 'hysterectomy', definition: 'Surgical removal of the uterus' },
      ],
      analogies: [
        'The endometrium is like the soil of a garden - Type 1 cancer grows in rich soil with lots of fertilizer (estrogen), while Type 2 grows even in poor conditions.',
      ],
      examples: [
        'Type 1 endometrial cancer accounts for about 80% of cases and has a 5-year survival rate over 95% when found early',
        'Obese women have 2-4 times higher risk of endometrial cancer',
        'Any postmenopausal bleeding should be evaluated - 90% of endometrial cancer presents with bleeding',
      ],
      patientCounselingPoints: [
        'Postmenopausal bleeding is not normal and should be evaluated immediately',
        'Most endometrial cancer is curable when found early',
        'Maintaining healthy weight reduces risk significantly',
        'Tell your doctor about any family history of colon, uterine, or ovarian cancer',
      ],
    },
    2: {
      level: 2,
      summary: 'Endometrial cancer has two pathogenic types. Type 1 is estrogen-related, low-grade endometrioid adenocarcinoma associated with endometrial hyperplasia. Type 2 is non-estrogen-related, high-grade cancers including serous and clear cell types. Diagnosis requires endometrial biopsy with histologic confirmation.',
      explanation: `## Types and Classification

### Type 1: Estrogen-Related

**Characteristics:**
- Endometrioid histology
- Low grade (grade 1-2)
- PTEN, PIK3CA, KRAS, CTNNB1 mutations
- Associated with unopposed estrogen
- Favorable prognosis
- Hormone receptor positive

**Risk Factors:**
- Obesity (peripheral estrogen conversion)
- Anovulation (PCOS)
- Nulliparity
- Early menarche/late menopause
- Tamoxifen use
- Estrogen-only HRT
- Diabetes, metabolic syndrome
- Endometrial hyperplasia

### Type 2: Non-Estrogen-Related

**Characteristics:**
- Serous, clear cell, carcinosarcoma
- High grade
- TP53 mutations (serous)
- Not associated with hyperplasia
- Poor prognosis
- Often hormone receptor negative

**Not associated with:**
- Obesity
- Estrogen exposure
- Endometrial hyperplasia

### Histologic Types

**Endometrioid Adenocarcinoma:**
- Glandular architecture
- Resembles normal endometrium
- Squamous differentiation may be present
- Graded 1-3 by differentiation

**Uterine Papillary Serous Carcinoma:**
- Papillary architecture
- High nuclear grade
- TP53 mutations
- Like ovarian serous carcinoma
- Aggressive

**Clear Cell Carcinoma:**
- Hobnail cells
- Clear cytoplasm
- Hyaline stroma
- Aggressive
- HNF1B, ARID1A mutations

**Mucinous Carcinoma:**
- >50% mucinous differentiation
- Usually low grade
- Better prognosis

**Carcinosarcoma:**
- Malignant mixed Mullerian tumor
- Biphasic: carcinoma + sarcoma
- Very aggressive
- Poor prognosis

### Diagnosis

**Endometrial Biopsy:**
- Office procedure
- Pipelle or similar device
- 90-95% accuracy
- First-line diagnostic test

**Dilation and Curettage:**
- If biopsy insufficient
- Hysteroscopy with directed biopsy
- More accurate
- Operating room procedure

**Imaging:**
- Transvaginal ultrasound
- MRI for myometrial invasion
- CT chest/abdomen/pelvis for staging

**Tumor Markers:**
- CA-125 (especially for serous)
- HE4
- ROMA algorithm

### Staging (FIGO 2009)

**Stage I:** Confined to corpus
- IA: <50% myometrial invasion
- IB: >=50% myometrial invasion

**Stage II:** Cervical involvement

**Stage III:** Local/regional spread
- IIIA: Serosa/adnexa
- IIIB: Vaginal/parametrial
- IIIC: Pelvic/para-aortic nodes

**Stage IV:** Distant metastasis`,
      keyTerms: [
        { term: 'endometrioid', definition: 'Type of cancer resembling the normal endometrial glands' },
        { term: 'myometrial invasion', definition: 'How deeply the cancer has grown into the uterine muscle wall' },
        { term: 'unopposed estrogen', definition: 'Estrogen stimulation without the protective effect of progesterone' },
        { term: 'Lynch syndrome', definition: 'Hereditary condition increasing risk of uterine, colon, and ovarian cancer' },
        { term: 'carcinosarcoma', definition: 'Malignant tumor containing both carcinoma and sarcoma components' },
      ],
      analogies: [
        'Type 1 endometrial cancer grows in response to estrogen like a plant growing with fertilizer - remove the estrogen (or treat) and it responds.',
        'Type 2 cancers are like invasive weeds - they grow aggressively regardless of conditions.',
      ],
      examples: [
        'Women with Lynch syndrome have 40-60% lifetime risk of endometrial cancer',
        'Grade 1 endometrioid cancer has >95% 5-year survival',
        'Serous carcinoma comprises only 10% of cases but accounts for 40% of deaths',
      ],
      patientCounselingPoints: [
        'Any postmenopausal bleeding requires evaluation',
        'Endometrial biopsy is usually done in the office with minimal discomfort',
        'Most women with endometrial cancer require hysterectomy',
        'Lynch syndrome testing should be considered for all endometrial cancer patients',
      ],
    },
    3: {
      level: 3,
      summary: 'Endometrial cancer management involves hysterectomy with staging. Low-risk patients may not need lymphadenectomy. High-risk features include deep myometrial invasion, high grade, lymphovascular invasion, and non-endometrioid histology. Molecular classification guides adjuvant therapy decisions.',
      explanation: `## Management of Endometrial Cancer

### Surgical Treatment

**Standard Surgery:**
- Total hysterectomy (abdominal, laparoscopic, or robotic)
- Bilateral salpingo-oophorectomy
- Pelvic washings for cytology
- Lymph node assessment
- Omental biopsy (if high grade/serous)

**Lymph Node Assessment:**

Indications for lymphadenectomy:
- Grade 3
- Deep myometrial invasion (>50%)
- Serous, clear cell, carcinosarcoma
- Tumor >2 cm
- Cervical involvement

Sentinel lymph node mapping:
- Cervical injection of dye/tracer
- Identifies first draining nodes
- Reduces lymphedema risk
- Validated approach

**Fertility-Sparing:**

Candidates:
- Stage IA, grade 1
- Endometrioid histology
- Desire fertility
- No contraindications

Approach:
- High-dose oral/medroxyprogesterone
- Levonorgestrel IUD
- Close surveillance
- Deliver, then hysterectomy
- 50-70% response rate
- Recurrence risk 20-40%

### Risk Stratification

**Low Risk:**
- Stage IA, grade 1-2, endometrioid
- No LVSI
- No adjuvant therapy needed
- 95%+ survival

**Intermediate Risk:**
- Stage IB grade 1-2
- Stage IA grade 3
- Consider vaginal brachytherapy

**High Risk:**
- Stage II+
- Serous, clear cell, carcinosarcoma
- Lymph node positive
- Adjuvant therapy required

### Adjuvant Therapy

**Radiation:**

Vaginal brachytherapy:
- Intermediate risk
- Reduces vaginal recurrence
- Low toxicity

External beam:
- High risk
- Deep invasion, LVSI, high grade
- Pelvic control improvement

**Chemotherapy:**

High-risk early stage:
- Controversial
- GOG-249: No benefit to chemoRT vs RT alone

Advanced stage:
- Carboplatin + paclitaxel
- 6 cycles
- Standard of care

**Hormonal Therapy:**

Advanced/recurrent ER+:
- Megestrol acetate
- Tamoxifen
- Aromatase inhibitors
- mTOR inhibitors

### Molecular Classification

**TCGA Four Groups:**

1. POLE ultramutated:
   - Excellent prognosis
   - Good outcomes regardless of grade
   - Immune-responsive

2. MSI hypermutated:
   - Intermediate prognosis
   - Lynch syndrome or sporadic
   - Immunotherapy candidate

3. Copy-number low (NSMP):
   - Most common
   - Hormone receptor-positive
   - Grade-dependent prognosis

4. Copy-number high (serous-like):
   - TP53 mutations
   - Poor prognosis
   - Chemotherapy-responsive

**Clinical Implementation:**
- ProMisE classification
- TransPORTEC risk categories
- Guides adjuvant therapy
- Better than histology alone

### Surveillance

**Follow-up Schedule:**
- Every 3-6 months x 2 years
- Every 6 months x 3 years
- Then annually

**Evaluation:**
- History and physical
- Pelvic examination
- Imaging as indicated
- CA-125 if elevated initially

**Recurrence Patterns:**
- Vaginal cuff (most common local)
- Pelvic/para-aortic nodes
- Distant: lung, liver, bone, brain

### Recurrent Disease

**Local Recurrence:**
- Prior radiation: Surgery if possible, chemotherapy
- No prior radiation: Radiation
- Prognosis better than distant

**Distant Metastases:**
- Chemotherapy
- Hormonal (if ER+)
- Targeted therapy
- Clinical trials
- Palliative care`,
      keyTerms: [
        { term: 'lymphadenectomy', definition: 'Surgical removal of lymph nodes for evaluation' },
        { term: 'vaginal brachytherapy', definition: 'Radiation delivered via applicator in the vagina' },
        { term: 'PORTEC', definition: 'Post-Operative Radiation Therapy in Endometrial Cancer trials' },
        { term: 'TCGA', definition: 'The Cancer Genome Atlas; molecular characterization project' },
        { term: 'MSI', definition: 'Microsatellite instability; marker for Lynch syndrome and immunotherapy response' },
      ],
      clinicalNotes: 'Universal Lynch syndrome screening of endometrial cancers is now recommended. Testing can be done by immunohistochemistry for MMR proteins (MLH1, MSH2, MSH6, PMS2) or molecular testing for MSI. All patients diagnosed with endometrial cancer should be asked about family history of Lynch-related cancers.',
    },
    4: {
      level: 4,
      summary: 'Advanced endometrial cancer requires multimodal therapy. Molecular profiling guides targeted therapy including immunotherapy for MSI-H tumors and mTOR inhibitors for endometrioid cancers. Quality of life, survivorship, and genetic counseling are integral to comprehensive care.',
      explanation: `## Advanced Topics

### Targeted Therapies

**Immunotherapy:**

Pembrolizumab (MSI-H/dMMR):
- FDA approved for MSI-H tumors
- 50%+ response rate
- Durable responses
- TMB-high also eligible

Pembrolizumab + Lenvatinib:
- All-comers (not MSI-H required)
- For advanced/recurrent
- Improved survival
- Toxicity manageable

Atezolizumab:
- Trials ongoing
- Combination approaches

**Targeted Agents:**

Everolimus + Letrozole:
- ER+ advanced/recurrent
- mTOR pathway inhibition
- About 30% response rate

Alpelisib:
- PIK3CA-mutated
- Hormone-resistant
- Under investigation

Trastuzumab:
- HER2+ (3%+ of endometrial)
- Case reports of response
- Trials ongoing

**Anti-angiogenics:**
- Bevacizumab
- Cabozantinib
- Lenvatinib
- Various combinations

### Uterine Sarcomas

**Leiomyosarcoma:**
- Smooth muscle origin
- High grade, aggressive
- Hematogenous spread
- Poor prognosis
- Chemotherapy (doxorubicin, gemcitabine/docetaxel)

**Endometrial Stromal Sarcoma:**
- Low grade: Hormone-sensitive
- High grade: Aggressive
- JAZF1 fusion (low grade)
- Surgery primary treatment

**Undifferentiated Uterine Sarcoma:**
- Very aggressive
- Poor prognosis
- Chemotherapy

### Hereditary Syndromes

**Lynch Syndrome:**

Identification:
- Universal screening of tumors
- IHC for MMR proteins
- MSI testing
- Germline confirmation

Management:
- Colonoscopy starting age 20-25
- Consider risk-reducing hysterectomy/BSO after childbearing
- Annual endometrial sampling
- Urinalysis for urothelial cancer

**Cowden Syndrome (PTEN):**
- Endometrial cancer risk
- Breast, thyroid cancer
- Hamartomas

### Fertility Preservation

**Candidates:**
- Stage IA, grade 1
- Endometrioid only
- No contraindications
- Strong desire for fertility

**Approach:**
- Oral progestins (megestrol, MA)
- Levonorgestrel IUD
- Hysteroscopic resection
- Close monitoring

**Outcomes:**
- 50-70% response rate
- 20-40% recurrence after treatment
- Live birth rate 20-40%
- Delivery followed by hysterectomy

### Survivorship

**Long-term Effects:**

Surgery:
- Menopausal symptoms
- Sexual dysfunction
- Pelvic floor issues
- Lymphedema (if nodes removed)

Radiation:
- Vaginal stenosis
- Sexual dysfunction
- Bowel/bladder issues
- Secondary malignancies

Hormonal:
- Cardiovascular risk
- Osteoporosis
- Quality of life

**Management:**
- Hormone therapy (if no contraindication)
- Vaginal dilators
- Pelvic floor PT
- Bone health monitoring
- Psychosocial support

### Quality Metrics

**Surgical Quality:**
- Minimally invasive rate
- Sentinel node mapping use
- Adequate node yield
- Complete cytoreduction

**Pathology Quality:**
- Lynch screening completion
- Molecular testing
- Standardized reporting

**Systemic Therapy:**
- Time to treatment
- Completion rate
- Toxicity management
- Clinical trial enrollment`,
      keyTerms: [
        { term: 'dMMR', definition: 'Deficient mismatch repair; associated with Lynch syndrome and immunotherapy response' },
        { term: 'TMB', definition: 'Tumor mutational burden; high TMB predicts immunotherapy response' },
        { term: 'TMB-high', definition: 'Tumor with high number of mutations per megabase' },
        { term: 'leiomyosarcoma', definition: 'Malignant tumor of smooth muscle; distinct from benign leiomyoma' },
        { term: 'endometrial stromal sarcoma', definition: 'Malignant tumor arising from endometrial stroma' },
      ],
      clinicalNotes: 'The combination of pembrolizumab and lenvatinib is FDA-approved for advanced or recurrent endometrial cancer that is not MSI-H or dMMR (after progression on prior systemic therapy). This provides a treatment option for patients who were previously limited to chemotherapy.',
    },
    5: {
      level: 5,
      summary: 'Expert endometrial cancer management involves molecular profiling, clinical trial participation, addressing health disparities, and research frontiers including novel immunotherapy combinations and maintenance strategies.',
      explanation: `## Expert Topics

### Molecular Profiling

**Comprehensive Testing:**
- FoundationOne, Tempus
- Actionable mutations
- Clinical trial matching
- Resistance monitoring

**Key Alterations:**

POLE:
- Excellent prognosis
- Immune-responsive
- Overtreatment risk

TP53:
- Poor prognosis
- Chemotherapy benefit
- Not hormone-sensitive

PIK3CA:
- Targetable
- Alpelisib trials
- Resistance pathways

CTNNB1:
- Exon 3 mutations
- Prognostic significance
- Wnt pathway activation

### Clinical Trials

**Frontline Maintenance:**
- Immunotherapy
- PARP inhibitors
- Targeted agents
- After chemotherapy response

**Biomarker-Driven:**
- PI3K inhibitors
- AKT inhibitors
- FGFR inhibitors
- HER2-targeted therapy

**Novel Combinations:**
- Immunotherapy + targeted
- Dual immunotherapy
- ADCs (antibody-drug conjugates)

### Disparities

**Racial Differences:**
- Higher mortality in Black women
- More aggressive histologies
- Access to care issues
- Genetic factors

**Addressing:**
- Navigation programs
- Community outreach
- Genetic testing access
- Clinical trial enrollment

### Research Frontiers

**Liquid Biopsy:**
- ctDNA monitoring
- Early recurrence detection
- Response prediction
- Resistance monitoring

**Immunotherapy Advances:**
- Biomarker development
- Combination strategies
- Adoptive cell therapy
- Vaccine approaches

**Prevention:**
- Weight management programs
- Metformin
- Aspirin
- Selective estrogen modulators

**Early Detection:**
- Biomarkers
- Molecular testing
- Risk stratification
- Screening for high-risk

### Quality of Life Research

**Sexual Health:**
- Vaginal estrogen safety
- Lubricants, moisturizers
- Dilator use
- Counseling

**Menopause Management:**
- HT safety in low-grade
- Non-hormonal options
- Bone health
- Cardiovascular risk

**Psychosocial:**
- Anxiety, depression
- Body image
- Support groups
- Financial toxicity

### Education and Awareness

**Provider Education:**
- Lynch syndrome recognition
- Molecular classification
- Sentinel node technique
- Minimally invasive surgery

**Patient Education:**
- Postmenopausal bleeding
- Risk factors
- Genetic testing
- Survivorship care

### Global Health

**Challenges:**
- Rising incidence worldwide
- Obesity epidemic
- Limited resources
- Access to care

**Solutions:**
- Task-shifting
- Telemedicine
- Simplified protocols
- Cost-effective approaches`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA for liquid biopsy monitoring' },
        { term: 'ADC', definition: 'Antibody-drug conjugate for targeted chemotherapy delivery' },
        { term: 'overtreatment', definition: 'Giving more therapy than needed; risk with POLE-mutated tumors' },
        { term: 'adoptive cell therapy', definition: 'Using patient\'s own immune cells expanded and reinfused' },
        { term: 'financial toxicity', definition: 'Financial burden of cancer treatment affecting patients' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. All endometrial cancer patients should be screened for Lynch syndrome either by MMR IHC or MSI testing, regardless of age or family history.

2. POLE ultramutated endometrial cancers have excellent prognosis regardless of histologic grade. Overtreatment with adjuvant therapy should be avoided.

3. Sentinel lymph node mapping with pathologic ultrastaging is the preferred approach for surgical staging in endometrial cancer.

4. Pembrolizumab + lenvatinib is approved for advanced/recurrent endometrial cancer, including those that are not MSI-H/dMMR.

5. Fertility preservation with progestin therapy is an option for carefully selected young women with grade 1, stage IA endometrioid cancer, but requires close surveillance and completion of family planning followed by hysterectomy.`,
    },
  },

  media: [
    {
      id: 'endometrial-cancer-staging',
      type: 'diagram',
      filename: 'endometrial-staging.svg',
      title: 'Endometrial Cancer Staging',
      description: 'FIGO staging system',
    },
  ],

  citations: [
    {
      id: 'tcga-endometrial',
      type: 'article',
      title: 'Integrated Genomic Characterization of Endometrial Carcinoma',
      authors: ['The Cancer Genome Atlas Research Network'],
      source: 'Nature',
    },
    {
      id: 'portec-4',
      type: 'article',
      title: 'PORTEC-4a: Molecular Profile-Guided Radiotherapy',
      authors: ['Nout RA', 'de Boer SM'],
      source: 'Lancet Oncology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-uterus-histology', targetType: 'structure', relationship: 'related', label: 'Uterus Histology' },
    { targetId: 'reproductive-ovarian-cancer', targetType: 'condition', relationship: 'related', label: 'Ovarian Cancer' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'gynecologic-cancer'],
    keywords: ['endometrial cancer', 'uterine cancer', 'Lynch syndrome', 'endometrioid', 'serous carcinoma'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default endometrialCancer;
