/**
 * Colonoscopy Screening
 *
 * Comprehensive education on colorectal cancer screening
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const COLONOSCOPY_SCREENING: EducationalContent = {
  id: 'concept-colonoscopy-screening',
  type: 'concept',
  name: 'Colonoscopy Screening',
  alternateNames: ['Colorectal cancer screening', 'Colon cancer screening', 'CRC screening'],

  levels: {
    1: {
      level: 1,
      summary: 'A colonoscopy looks inside your colon to find and remove growths called polyps before they turn into cancer.',
      explanation: `A colonoscopy is a test where a doctor uses a thin, flexible tube with a camera to look inside your colon (large intestine). This test can find cancer early and even prevent it by removing polyps.

**What is a Polyp?**
- A small growth on the inside wall of the colon
- Most polyps are not cancer
- Some polyps can slowly turn into cancer over many years
- Removing polyps prevents cancer!

**Why Get a Colonoscopy?**
- Find cancer early when it's easier to treat
- Remove polyps before they become cancer
- Colon cancer is very treatable when found early
- It's the most thorough way to check your colon

**Who Should Get One?**
- Everyone starting at age 45
- Earlier if you have family history of colon cancer
- Repeat every 10 years if normal

**What to Expect:**

*Before the Test:*
- You'll drink a special liquid to clean out your colon
- You can only have clear liquids the day before
- This "prep" is the hardest part for most people

*During the Test:*
- You'll be given medicine so you're sleepy and comfortable
- The test takes about 30-60 minutes
- You won't remember most of it

*After the Test:*
- You'll rest until the medicine wears off
- Someone must drive you home
- You can eat normally after
- The doctor will tell you the results

**Other Colon Cancer Tests:**
If you can't have a colonoscopy, other tests can check for cancer:
- **Stool test (FIT)**: Check poop for blood every year
- **Stool DNA test**: Check poop for cancer signs every 1-3 years
- **CT colonography**: Special X-ray every 5 years`,
      keyTerms: [
        { term: 'colonoscopy', definition: 'A test where a doctor uses a camera to look inside your colon', pronunciation: 'koh-luh-NAH-skuh-pee' },
        { term: 'polyp', definition: 'A small growth on the inside wall of the colon that can sometimes become cancer', pronunciation: 'PAH-lip' },
        { term: 'colon', definition: 'The large intestine; the last part of your digestive system' },
      ],
      analogies: [
        'A colonoscopy is like having a plumber inspect your pipes with a camera to find and fix problems before they cause a backup.',
        'Removing polyps is like pulling weeds before they take over your garden.',
      ],
      examples: [
        'John\'s colonoscopy found and removed 3 polyps. Because they were removed, he never got colon cancer.',
        'Maria\'s stool test showed blood, so she got a colonoscopy that found early-stage cancer. Treatment was successful because it was caught early.',
      ],
    },
    2: {
      level: 2,
      summary: 'Colorectal cancer screening detects precancerous polyps and early cancers, with colonoscopy being the gold standard that allows both visualization and removal of lesions, reducing cancer incidence and mortality.',
      explanation: `Colorectal cancer (CRC) is the third most common cancer and second leading cause of cancer death. However, it's one of the most preventable cancers through screening.

**Why Colorectal Cancer is Preventable:**
- Most CRCs develop from adenomatous polyps over 10-15 years
- Removing polyps prevents them from becoming cancer
- Early-stage CRC has 90% 5-year survival rate
- Late-stage CRC has only 15% 5-year survival rate

**Screening Recommendations (USPSTF):**

| Age | Recommendation | Grade |
|-----|----------------|-------|
| 45-49 | Screen | B |
| 50-75 | Screen | A |
| 76-85 | Individual decision | C |
| >85 | Don't screen | D |

**Screening Options:**

**Direct Visualization:**
- **Colonoscopy**: Every 10 years
  - Sees entire colon
  - Can remove polyps during exam
  - Requires sedation and bowel prep

- **Flexible sigmoidoscopy**: Every 5 years
  - Only sees lower third of colon
  - Less bowel prep
  - Less commonly used now

- **CT colonography**: Every 5 years
  - Virtual colonoscopy using CT scan
  - Still requires bowel prep
  - Can't remove polyps

**Stool-Based Tests:**
- **FIT (Fecal Immunochemical Test)**: Yearly
  - Detects blood in stool
  - Easy to do at home
  - If positive, need colonoscopy

- **FIT-DNA (Cologuard)**: Every 1-3 years
  - Tests for blood + DNA markers
  - More sensitive than FIT alone
  - Higher false-positive rate
  - If positive, need colonoscopy

**Colonoscopy Procedure:**

*Preparation:*
1. Clear liquid diet day before
2. Bowel prep solution (split dose recommended)
3. Stop certain medications as directed

*Procedure:*
- IV sedation (propofol or midazolam + fentanyl)
- Colonoscope inserted through rectum
- Colon inflated with air/CO2 for visualization
- Entire colon examined
- Polyps removed with snare or forceps
- Takes 30-60 minutes

*Recovery:*
- 1-2 hours in recovery
- May have bloating, gas
- Need someone to drive home
- Resume normal diet same day

**Risk Factors Requiring Earlier Screening:**
- Family history (first-degree relative with CRC)
- Personal history of polyps
- Inflammatory bowel disease
- Lynch syndrome or FAP`,
      keyTerms: [
        { term: 'adenomatous polyp', definition: 'A type of colon polyp that can develop into cancer over time', pronunciation: 'ad-eh-NOH-muh-tus' },
        { term: 'FIT', definition: 'Fecal Immunochemical Test; a stool test that detects blood using antibodies' },
        { term: 'polypectomy', definition: 'Removal of a polyp, usually during colonoscopy', pronunciation: 'pah-lip-EK-toh-mee' },
        { term: 'bowel prep', definition: 'The process of cleaning out the colon before colonoscopy using laxative solutions' },
      ],
      analogies: [
        'The adenoma-carcinoma sequence (polyp to cancer) is like a slow-growing weed that takes years to become a problem - you have time to pull it out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Colorectal cancer screening leverages the adenoma-carcinoma sequence, utilizing colonoscopy, stool-based tests, and imaging modalities with defined test characteristics, while optimizing screening intervals based on polyp findings, risk stratification, and quality metrics like adenoma detection rate.',
      explanation: `**Adenoma-Carcinoma Sequence:**

The biological basis for CRC screening:
1. Normal epithelium
2. Aberrant crypt foci
3. Small adenoma
4. Large adenoma
5. Carcinoma in situ
6. Invasive carcinoma

*Timeline:* 10-15 years from adenoma to cancer
*Implication:* Window for detection and intervention

**Polyp Classification:**

*By Histology:*
- **Adenomatous polyps (pre-malignant):**
  - Tubular adenoma (85%) - lowest risk
  - Tubulovillous adenoma (10%)
  - Villous adenoma (5%) - highest risk

- **Serrated polyps:**
  - Hyperplastic polyps (usually benign)
  - Sessile serrated lesions (SSLs) - precancerous
  - Traditional serrated adenomas (rare)

*By Morphology:*
- Pedunculated: On a stalk
- Sessile: Flat/broad-based
- Flat: <2.5mm height

**High-Risk Polyp Features:**
- Size ≥10mm
- Villous histology
- High-grade dysplasia
- ≥3 adenomas
- Serrated lesions ≥10mm or with dysplasia

**Screening Test Performance:**

| Test | Sensitivity (CRC) | Sensitivity (Advanced Adenoma) | Specificity |
|------|-------------------|--------------------------------|-------------|
| Colonoscopy | 95% | 75-95% | 100% (reference) |
| FIT (annual) | 74-79% | 23-48% | 94-96% |
| FIT-DNA | 92% | 42% | 87-90% |
| CT colonography | 90-95% | 67-94% | 86-98% |
| Sigmoidoscopy | 70% (reaches) | 60-70% | High |

**USPSTF 2021 Recommendations:**

*New Start Age: 45 (previously 50)*
- Based on increasing CRC incidence in younger adults
- Evidence strongest for stool-based tests

*Screening Modalities (all Grade A for 50-75, Grade B for 45-49):*
- Colonoscopy every 10 years
- FIT every year
- FIT-DNA every 1-3 years
- CT colonography every 5 years
- Flexible sigmoidoscopy every 5 years
- Flexible sigmoidoscopy every 10 years + FIT every year

**Surveillance After Polypectomy:**

Based on US Multi-Society Task Force Guidelines:

| Baseline Findings | Repeat Interval |
|-------------------|-----------------|
| 1-2 tubular adenomas <10mm | 7-10 years |
| 3-4 tubular adenomas <10mm | 3-5 years |
| 5-10 adenomas | 3 years |
| Adenoma ≥10mm | 3 years |
| Adenoma with villous or HGD | 3 years |
| >10 adenomas | 1 year |
| Sessile serrated lesion ≥10mm | 3 years |
| SSL with dysplasia | 3 years |

**Quality Metrics:**

*Adenoma Detection Rate (ADR):*
- Percentage of colonoscopies with ≥1 adenoma detected
- Minimum target: 25% (men 30%, women 20%)
- Higher ADR = lower post-colonoscopy CRC

*Other Metrics:*
- Cecal intubation rate: ≥95%
- Withdrawal time: ≥6 minutes
- Adequate bowel prep rate: ≥85%

**High-Risk Groups:**

*Family History:*
- 1 first-degree relative with CRC or advanced adenoma <60 years: Start at 40 or 10 years before earliest diagnosis
- 1 first-degree relative with CRC ≥60 years: Start at 40

*Genetic Syndromes:*
- Lynch syndrome: Colonoscopy every 1-2 years starting 20-25
- FAP: Annual sigmoidoscopy starting 10-12, then colectomy
- MUTYH-associated polyposis: Every 1-2 years from 25-30`,
      keyTerms: [
        { term: 'adenoma detection rate (ADR)', definition: 'Quality metric representing the percentage of screening colonoscopies in which at least one adenoma is detected' },
        { term: 'sessile serrated lesion (SSL)', definition: 'A flat, often right-sided colon polyp that can progress to cancer through the serrated pathway' },
        { term: 'high-grade dysplasia', definition: 'Severe cellular abnormality within a polyp indicating high risk of progression to cancer' },
        { term: 'Lynch syndrome', definition: 'Hereditary condition caused by mismatch repair gene mutations, increasing CRC and other cancer risks' },
        { term: 'FAP', definition: 'Familial adenomatous polyposis; genetic condition causing hundreds to thousands of colon polyps' },
      ],
      clinicalNotes: 'Always calculate surveillance intervals based on the most advanced lesion. Document bowel prep quality. If prep inadequate, repeat within 1 year. Consider split-dose prep for improved quality.',
    },
    4: {
      level: 4,
      summary: 'Colorectal cancer screening optimization integrates molecular pathways (chromosomal instability, microsatellite instability, serrated/CpG island methylation), risk-stratified approaches, quality benchmarking, and evolving modalities including AI-enhanced detection and blood-based markers, while addressing population-level implementation challenges.',
      explanation: `**Molecular Pathways to CRC:**

**Chromosomal Instability Pathway (CIN):**
- Most common (~85% of sporadic CRC)
- APC → KRAS → SMAD4 → TP53
- Classic adenoma-carcinoma sequence
- Left-sided predominance

**Microsatellite Instability Pathway (MSI):**
- ~15% of sporadic CRC
- Defective DNA mismatch repair (MLH1, MSH2, MSH6, PMS2)
- Lynch syndrome (hereditary) or sporadic (MLH1 methylation)
- Right-sided predominance
- Better prognosis, may predict immunotherapy response

**Serrated Pathway:**
- BRAF mutation → CIMP → MLH1 methylation
- Sessile serrated lesions (SSLs)
- Right-sided
- May be missed on colonoscopy (flat, subtle)
- Faster progression than adenoma pathway

**Clinical Implications:**
- Universal tumor testing for Lynch syndrome
- MSI-high tumors may not benefit from 5-FU
- Pembrolizumab approved for MSI-high CRC

**Advanced Polyp Detection:**

*AI-Enhanced Colonoscopy (Computer-Aided Detection):*
- Real-time polyp detection
- Increases ADR by 10-15% in studies
- GI Genius, EndoBrain approved by FDA
- Reduces polyp miss rate

*Advanced Imaging Techniques:*
- Chromoendoscopy: Dye spray to enhance mucosal detail
- Narrow-band imaging (NBI): Electronic chromoendoscopy
- Endocytoscopy: Cellular-level visualization

*Impact on Serrated Lesion Detection:*
- AI and advanced imaging improve SSL detection
- Right colon requires careful examination

**Blood-Based Biomarkers:**

*Epi proColon (Septin9):*
- Methylated SEPT9 gene in blood
- Sensitivity 48-68% for CRC
- Lower than stool-based tests
- Role: Patients refusing other tests

*Multi-Cancer Early Detection (MCED):*
- Galleri test includes CRC
- cfDNA-based
- Lower sensitivity for early-stage CRC than colonoscopy
- May detect interval cancers

**FIT Performance Optimization:**

*Factors Affecting Results:*
- Hemoglobin threshold (lower = more sensitive)
- Number of samples
- Sample handling/storage
- Time to lab processing

*Quantitative FIT:*
- Provides hemoglobin concentration
- Higher values = higher cancer probability
- May stratify colonoscopy urgency

**Implementation Science:**

*Barriers to Screening:*
1. Access (insurance, facility availability)
2. Bowel prep tolerability
3. Time/work constraints
4. Fear/embarrassment
5. Lack of awareness
6. Prior negative experience

*Evidence-Based Interventions:*
- Mailed FIT kits: Increase screening by 20-30%
- Patient navigation: Improves colonoscopy completion
- Provider reminders: EHR-based alerts
- Text message reminders: Cost-effective
- Low-volume prep options: Improve tolerability

*Comparative Effectiveness:*
- FIT invitation programs achieve higher participation than colonoscopy invitations
- Colonoscopy has higher one-time completion but lower repeat adherence
- FIT programmatically may detect similar cancers over time with higher participation

**Surveillance Colonoscopy Optimization:**

*Risk Stratification:*
- Low-risk: 1-2 small tubular adenomas → 7-10 years
- Intermediate-risk: 3-4 small adenomas → 5 years
- High-risk: ≥5 adenomas, any ≥10mm, villous, HGD → 3 years

*Reducing Overuse:*
- Many patients surveilled too frequently
- Guidelines aim to reduce unnecessary procedures
- Focus resources on high-risk individuals

**Special Populations:**

*Inflammatory Bowel Disease:*
- Increased CRC risk (8-30 years after diagnosis)
- Surveillance colonoscopy every 1-3 years
- Chromoendoscopy recommended
- Targeted biopsies replacing random biopsies

*Post-CRC Resection:*
- Colonoscopy at 1 year (if not done preop)
- If normal, repeat at 3 years, then 5 years
- Perioperative clearing colonoscopy important

*Kidney Transplant Recipients:*
- 2-3x increased CRC risk
- Start screening earlier, more frequent

**Cost-Effectiveness:**

All recommended modalities are cost-effective compared to no screening.

*Relative Cost-Effectiveness:*
- FIT annually: Very cost-effective
- Colonoscopy every 10 years: Cost-effective
- FIT-DNA every 3 years: Less cost-effective (higher cost per test)
- Combination strategies: May optimize detection/cost`,
      keyTerms: [
        { term: 'chromosomal instability (CIN)', definition: 'Molecular pathway to CRC characterized by aneuploidy and loss of heterozygosity, driven by APC, KRAS, and TP53 mutations' },
        { term: 'microsatellite instability (MSI)', definition: 'DNA replication errors due to defective mismatch repair, creating variable-length microsatellite repeats' },
        { term: 'CpG island methylator phenotype (CIMP)', definition: 'Epigenetic pathway involving hypermethylation of gene promoters, associated with serrated polyps and BRAF mutations' },
        { term: 'computer-aided detection (CADe)', definition: 'AI systems that identify and highlight potential polyps during colonoscopy in real-time' },
        { term: 'Septin9', definition: 'Blood-based biomarker (methylated gene) for colorectal cancer detection' },
      ],
      clinicalNotes: 'Order Lynch syndrome testing (immunohistochemistry for MMR proteins or MSI testing) on all newly diagnosed CRC. Consider referral for genetic counseling if MSI-high or family history suggestive. AI-assisted colonoscopy may become standard of care.',
    },
    5: {
      level: 5,
      summary: 'Precision colorectal cancer prevention requires integration of molecular screening targets, germline and somatic genetics, AI-enhanced endoscopy, risk-adapted surveillance, equity-focused implementation strategies, and evolving multi-cancer detection platforms, while critically evaluating resource allocation and competing modality performance across diverse populations.',
      explanation: `**Precision CRC Screening:**

**Polygenic Risk Scores:**
- GRS (genetic risk scores) combining 40+ SNPs
- May identify individuals for earlier/more frequent screening
- Validation studies ongoing
- Potential to personalize screening start age

**Circulating Tumor DNA (ctDNA):**
*For Screening:*
- MCED tests (Galleri) include CRC detection
- Sensitivity lower for early-stage than colonoscopy
- May complement rather than replace current methods

*For Surveillance (MRD):*
- Post-surgery ctDNA predicts recurrence
- Signatera, Guardant Reveal
- May guide adjuvant therapy decisions
- Earlier detection of recurrence than imaging

**Artificial Intelligence in Endoscopy:**

*Current FDA-Approved Systems:*
- GI Genius (Medtronic)
- EndoBrain-EYE (Olympus)
- SKOUT (Iterative Health)

*Evidence:*
- ADENOMA trial: CADe increased ADR from 40% to 55%
- Meta-analyses: RR 1.44 for adenoma detection
- Improved serrated lesion detection

*Limitations:*
- May increase procedure time
- Alert fatigue
- Cost of implementation
- Training requirements

*Future Directions:*
- Polyp characterization (CADx)
- Optical biopsy (predict histology)
- Quality assurance automation

**Microbiome Biomarkers:**

*Emerging Research:*
- Fusobacterium nucleatum associated with CRC
- Microbiome signatures for risk prediction
- Stool microbiome testing under development
- Potential for non-invasive detection

**Chemoprevention Integration:**

*Aspirin:*
- USPSTF previously recommended for CRC prevention (age 50-59, 10-year CVD risk ≥10%)
- 2022 update: No longer routinely recommended
- Individual decision based on CVD and bleeding risk

*Lynch Syndrome:*
- CAPP2 trial: Aspirin reduced CRC risk
- CAPP3 trial: Optimizing aspirin dose

**Health Equity Focus:**

*Disparities Data:*
- Black adults: 20% higher CRC incidence, 40% higher mortality
- Alaska Natives: Highest CRC rates in US
- Uninsured: 30-40% lower screening rates

*Tailored Interventions:*
- Community health workers for navigation
- Faith-based partnerships
- Culturally concordant messaging
- Addressing medical mistrust
- Reducing structural barriers (transport, work leave)

*Policy Implications:*
- Medicaid expansion associated with increased screening
- ACA preventive services mandate
- Quality metrics tied to reimbursement

**Quality Improvement Framework:**

*Colonoscopy Quality Indicators:*

| Metric | Target | Impact |
|--------|--------|--------|
| ADR | ≥25% (30% men, 20% women) | 3% lower interval CRC per 1% ADR increase |
| Cecal intubation | ≥95% | Ensures complete examination |
| Withdrawal time | ≥6 min | Correlates with ADR |
| Bowel prep adequacy | ≥85% | Enables polyp detection |
| Perforation rate | <1:1000 screening | Safety metric |
| SSL detection rate | Emerging target | Addresses serrated pathway |

*Benchmarking:*
- GIQuIC (GI Quality Improvement Consortium)
- ASGE quality indicators
- CMS quality payment programs

**Comparative Effectiveness Modeling:**

*CISNET Modeling:*
- All recommended strategies prevent 70-90% of CRC deaths
- Colonoscopy every 10 years and annual FIT roughly equivalent when adherence optimized
- FIT-DNA cost-effectiveness depends on price and interval

*Real-World Considerations:*
- Colonoscopy capacity limitations
- FIT requires annual adherence
- Patient preference affects completion

**Post-Polypectomy Surveillance Refinement:**

*Risk Calculators:*
- Combining adenoma characteristics with patient factors
- May enable more personalized intervals
- Under development and validation

*Serrated Pathway Surveillance:*
- Less evidence than adenoma pathway
- SSLs ≥10mm or with dysplasia: 3 years
- Hyperplastic polyps: Average-risk intervals

**Future Paradigms:**

1. **Risk-stratified screening initiation** (PRS + family history + demographics)
2. **AI-enabled colonoscopy** as standard of care
3. **Blood-based MCED** for those declining colonoscopy/FIT
4. **Microbiome-based risk prediction**
5. **Personalized surveillance intervals** (machine learning models)
6. **Integration of chemoprevention** for high-risk

**Implementation Science Frameworks:**

*RE-AIM Model:*
- Reach: Target screening rates
- Effectiveness: Cancer detection and prevention
- Adoption: Provider uptake
- Implementation: Fidelity to guidelines
- Maintenance: Sustained performance

*Learning Health System:*
- EHR data for quality tracking
- Population health management
- Continuous quality improvement`,
      keyTerms: [
        { term: 'minimal residual disease (MRD)', definition: 'Small amounts of cancer remaining after treatment, detectable by sensitive molecular methods like ctDNA' },
        { term: 'CADx', definition: 'Computer-aided diagnosis; AI systems that predict polyp histology to enable optical biopsy' },
        { term: 'GIQuIC', definition: 'GI Quality Improvement Consortium; national benchmarking database for colonoscopy quality metrics' },
        { term: 'RE-AIM', definition: 'Implementation science framework: Reach, Effectiveness, Adoption, Implementation, Maintenance' },
        { term: 'Fusobacterium nucleatum', definition: 'Oral bacterium associated with colorectal cancer development and progression' },
      ],
      clinicalNotes: `**Implementation Excellence:**
- Track and optimize your ADR (quality correlates with patient outcomes)
- Use split-dose bowel prep to maximize preparation quality
- Consider AI-assisted colonoscopy when available
- Ensure appropriate Lynch syndrome testing on all CRC
- Address equity: offer alternative modalities, patient navigation
- Personalize surveillance based on polyp findings, not just presence
- Stay current: MCED tests emerging but not yet standard of care
- Document cecal intubation, prep quality, withdrawal time
- Genetic counseling referral for: multiple adenomas, early-onset CRC, family history`,
    },
  },

  media: [
    {
      id: 'colon-anatomy-colonoscopy',
      type: 'diagram',
      filename: 'colon-anatomy-colonoscopy-view.svg',
      title: 'Colon Anatomy for Colonoscopy',
      description: 'Anatomical diagram showing colonoscope path through the colon',
    },
    {
      id: 'polyp-types',
      type: 'diagram',
      filename: 'polyp-types-classification.svg',
      title: 'Colon Polyp Classification',
      description: 'Visual guide to different types of colon polyps and their significance',
    },
  ],

  citations: [
    {
      id: 'uspstf-crc-2021',
      type: 'article',
      title: 'Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
      accessedDate: '2025-01-24',
    },
    {
      id: 'usmstf-surveillance-2020',
      type: 'article',
      title: 'Recommendations for Follow-Up After Colonoscopy and Polypectomy',
      authors: ['US Multi-Society Task Force on Colorectal Cancer'],
      source: 'Gastroenterology',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Screening Overview' },
    { targetId: 'structure-large-intestine', targetType: 'structure', relationship: 'related', label: 'Large Intestine Anatomy' },
    { targetId: 'concept-lynch-syndrome', targetType: 'concept', relationship: 'related', label: 'Lynch Syndrome' },
  ],

  tags: {
    systems: ['digestive'],
    topics: ['preventive medicine', 'oncology', 'screening', 'gastroenterology'],
    keywords: ['colonoscopy', 'colorectal cancer', 'colon cancer', 'polyp', 'adenoma', 'FIT', 'screening'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
