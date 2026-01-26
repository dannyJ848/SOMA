/**
 * PSA Screening
 *
 * Comprehensive education on prostate cancer screening
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const PSA_SCREENING: EducationalContent = {
  id: 'concept-psa-screening',
  type: 'concept',
  name: 'PSA Screening',
  alternateNames: ['Prostate cancer screening', 'Prostate-specific antigen test', 'Prostate screening'],

  levels: {
    1: {
      level: 1,
      summary: 'PSA is a blood test that can help find prostate cancer in men, but deciding whether to get tested should be discussed with your doctor.',
      explanation: `PSA (prostate-specific antigen) is a substance made by the prostate gland. A blood test can measure PSA levels to help find prostate cancer.

**What is the Prostate?**
- A small gland in men, about the size of a walnut
- Located below the bladder
- Makes fluid that is part of semen

**What the PSA Test Does:**
- Measures PSA level in your blood
- Higher levels may indicate prostate problems
- Does NOT diagnose cancer by itself

**Who Should Consider Testing?**
- Men ages 55-69 should discuss with their doctor
- Men with higher risk may start earlier:
  - African American men
  - Men with father or brother who had prostate cancer

**Important Things to Know:**
- Prostate cancer often grows very slowly
- Many men with prostate cancer never have symptoms
- Treatment can have side effects (urinary and sexual problems)
- Not all prostate cancers need treatment

**The Decision is Personal:**
Before getting tested, talk to your doctor about:
- Your personal risk factors
- Benefits: Finding cancer early
- Risks: False alarms and unnecessary treatment
- What you would do if cancer is found`,
      keyTerms: [
        { term: 'PSA', definition: 'Prostate-specific antigen - a protein made by the prostate that can be measured in blood' },
        { term: 'prostate', definition: 'A small gland in men that makes fluid for semen' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to check for cancer' },
      ],
      analogies: [
        'The PSA test is like a smoke detector - it can alert you to a problem, but sometimes it goes off when there is no fire (false alarm).',
      ],
      examples: [
        'Tom discussed PSA testing with his doctor at age 55. After learning about the pros and cons, he decided to get tested and monitor his levels over time.',
      ],
    },
    2: {
      level: 2,
      summary: 'PSA screening for prostate cancer requires shared decision-making, balancing potential mortality reduction against significant risks of overdiagnosis and treatment-related harms.',
      explanation: `Prostate cancer screening with PSA is complex because while it can detect cancer early, many prostate cancers are slow-growing and may never cause problems during a man's lifetime.

**Understanding PSA:**
- Normal level: Generally <4 ng/mL
- Higher levels can indicate:
  - Prostate cancer
  - Benign prostatic hyperplasia (enlarged prostate)
  - Prostatitis (prostate infection)
  - Recent ejaculation or prostate exam

**USPSTF Recommendations:**

| Age | Recommendation |
|-----|----------------|
| <55 | Not recommended for average risk |
| 55-69 | Individual decision after discussion (Grade C) |
| 70+ | Not recommended (Grade D) |

**Benefits of Screening:**
- May reduce prostate cancer deaths by ~20%
- Earlier detection of aggressive cancers
- Peace of mind if negative

**Risks of Screening:**
- **False positives**: Many men with elevated PSA don't have cancer
- **Overdiagnosis**: Finding cancers that would never cause harm
- **Overtreatment**: Unnecessary surgery or radiation
- **Treatment side effects**: Incontinence, erectile dysfunction
- **Anxiety**: From abnormal results and biopsies

**If PSA is Elevated:**
1. Repeat PSA test
2. Consider PSA velocity (rate of change)
3. Digital rectal exam (DRE)
4. Prostate MRI may be recommended
5. Biopsy if cancer suspected

**Active Surveillance:**
For low-risk prostate cancer:
- Monitor with regular PSA and exams
- Delay treatment unless cancer progresses
- Avoids treatment side effects
- Safe for many men with low-grade cancer`,
      keyTerms: [
        { term: 'overdiagnosis', definition: 'Finding a cancer that would never have caused symptoms or death' },
        { term: 'active surveillance', definition: 'Closely monitoring cancer without immediate treatment' },
        { term: 'Gleason score', definition: 'A grading system for prostate cancer aggressiveness (2-10)' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia - non-cancerous enlargement of the prostate' },
      ],
      analogies: [
        'Prostate cancer screening is like checking for termites - some infestations are aggressive and need immediate treatment, while others are so slow you might never notice them.',
      ],
    },
    3: {
      level: 3,
      summary: 'PSA-based prostate cancer screening requires nuanced understanding of test characteristics, risk stratification approaches, and the evidence for mortality benefit weighed against significant overdiagnosis rates, informing shared decision-making discussions.',
      explanation: `**PSA Biology:**
- Serine protease produced by prostatic epithelium
- Functions: Liquefies semen
- Elevated in: Cancer, BPH, prostatitis, manipulation
- Half-life: ~2-3 days

**PSA Forms:**
- Total PSA: Bound + free PSA
- Free PSA: Lower percentage suggests cancer
- PSA density: PSA/prostate volume
- PSA velocity: Rate of change over time

**Test Performance:**

| PSA Level | Sensitivity | Specificity |
|-----------|-------------|-------------|
| >4.0 ng/mL | ~20% | ~90% |
| >3.0 ng/mL | ~32% | ~85% |
| >2.5 ng/mL | ~40% | ~80% |

*Key Point:* No PSA level excludes cancer; 15% of men with PSA <4 have cancer on biopsy.

**Risk Calculators:**
- PCPT Risk Calculator
- ERSPC Risk Calculator
- Integrates: PSA, age, race, family history, DRE, prior biopsy

**Evidence Base:**

*ERSPC Trial:*
- European study, 182,000 men
- 20% relative reduction in prostate cancer mortality
- NNI (number needed to invite): ~570 to prevent 1 death
- NND (number needed to diagnose): ~18 to prevent 1 death
- Significant overdiagnosis

*PLCO Trial:*
- US study, 77,000 men
- No mortality benefit found
- BUT: High contamination (control group had PSA testing)
- Limits interpretation

**USPSTF 2018 Recommendation:**

*Grade C for ages 55-69:*
- Offer screening after informed discussion
- Small potential benefit
- Known harms from overdiagnosis/treatment
- Individual values matter

*Grade D for age 70+:*
- Harms outweigh benefits

**Improving Specificity:**

*Free PSA Percentage:*
- <10%: Higher cancer risk
- >25%: Lower cancer risk
- Useful for PSA 4-10 ng/mL

*4Kscore:*
- Total PSA, free PSA, intact PSA, hK2
- Age and DRE status
- Predicts high-grade cancer risk

*PHI (Prostate Health Index):*
- Combines total PSA, free PSA, p2PSA
- FDA approved for PSA 4-10 ng/mL
- Reduces unnecessary biopsies

**MRI Before Biopsy:**

*Multiparametric MRI (mpMRI):*
- T2-weighted, DWI, DCE
- PI-RADS scoring system
- Can detect clinically significant cancer
- May avoid biopsy if negative

*PRECISION Trial:*
- MRI-targeted biopsy vs systematic biopsy
- More clinically significant cancers detected
- Fewer insignificant cancers diagnosed
- Fewer biopsies overall

**Biopsy Approaches:**
- Systematic transrectal (TRUS): 12-core standard
- MRI-fusion targeted biopsy
- Transperineal approach (lower infection risk)`,
      keyTerms: [
        { term: 'PSA density', definition: 'PSA level divided by prostate volume; higher density suggests cancer' },
        { term: 'PSA velocity', definition: 'Rate of PSA change over time; >0.75 ng/mL/year concerning' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System; standardized MRI interpretation' },
        { term: 'mpMRI', definition: 'Multiparametric MRI; combines multiple imaging sequences to evaluate prostate' },
      ],
      clinicalNotes: 'Use risk calculators to guide biopsy decisions. Consider MRI before biopsy for elevated PSA. Document shared decision-making discussion. Avoid PSA testing without prior discussion.',
    },
    4: {
      level: 4,
      summary: 'Contemporary prostate cancer detection integrates PSA kinetics, novel biomarkers, multiparametric MRI, and genomic classifiers to risk-stratify patients, reducing overdiagnosis while identifying clinically significant cancers requiring intervention.',
      explanation: `**Molecular Biology of Prostate Cancer:**

*Key Genomic Alterations:*
- TMPRSS2-ERG fusion (~50%)
- PTEN loss
- TP53 mutations
- AR amplification (advanced disease)
- DNA repair defects (BRCA1/2, ATM)

*Gleason Grading Evolution:*
- 2014 ISUP revision
- Grade Groups 1-5 replace Gleason sum
- GG1 (Gleason 3+3): Very low risk
- GG2 (3+4): Low risk
- GG3 (4+3): Intermediate risk
- GG4 (4+4, 3+5, 5+3): High risk
- GG5 (4+5, 5+4, 5+5): Very high risk

**Novel Biomarkers:**

*Blood-Based:*
| Test | Marker | Use |
|------|--------|-----|
| 4Kscore | Panel of kallikreins | Pre-biopsy risk |
| PHI | p2PSA, free PSA, total PSA | Pre-biopsy risk |
| IsoPSA | PSA isoforms | Pre-biopsy risk |

*Urine-Based:*
| Test | Marker | Use |
|------|--------|-----|
| PCA3 | Long non-coding RNA | Pre-biopsy |
| SelectMDx | HOXC6, DLX1 mRNA | Pre-biopsy |
| ExoDx | Exosomal RNA | Pre-biopsy |
| MyProstateScore | PCA3 + TMPRSS2:ERG | Pre-biopsy |

*Tissue-Based (Post-Biopsy):*
| Test | Use |
|------|-----|
| Oncotype DX GPS | Active surveillance candidacy |
| Prolaris | Aggressiveness/prognosis |
| Decipher | Metastatic potential |
| ConfirmMDx | Repeat biopsy need |

**MRI-Guided Detection Paradigm:**

*PRECISION Trial Findings:*
- MRI pathway: MRI first, targeted biopsy if positive
- Clinically significant cancer detection: 38% vs 26%
- Insignificant cancer detection: 9% vs 22%
- 28% of men avoided biopsy

*PI-RADS v2.1:*
- 1: Very low suspicion
- 2: Low suspicion
- 3: Equivocal
- 4: High suspicion
- 5: Very high suspicion

*Biopsy Threshold:*
- PI-RADS ≥3: Consider biopsy
- PI-RADS 1-2: May defer biopsy (depending on clinical factors)

**Active Surveillance Protocols:**

*Eligibility (NCCN):*
- Very low risk: GG1, PSA <10, <3 positive cores, <50% any core
- Low risk: GG1, PSA <10

*Monitoring:*
- PSA every 6 months
- DRE every 12 months
- Repeat biopsy at 1 year, then every 2-3 years
- Consider confirmatory MRI

*Reclassification:*
- ~30% reclassified to higher grade on surveillance
- Many due to sampling error, not true progression
- Triggers treatment discussion

**Genomics in Treatment Decision:**

*Decipher Score:*
- 22-gene genomic classifier
- Predicts metastasis after surgery
- Guides adjuvant therapy decisions

*BRCA/DNA Repair Testing:*
- ~12% of metastatic prostate cancer has DNA repair defects
- PARP inhibitors (olaparib, rucaparib) approved
- Germline testing recommended for metastatic disease

**Liquid Biopsy:**
- ctDNA for AR alterations
- Prognostic and predictive value
- Emerging for early detection`,
      keyTerms: [
        { term: 'TMPRSS2-ERG', definition: 'Most common gene fusion in prostate cancer; associated with androgen regulation' },
        { term: 'Grade Group', definition: 'ISUP grading system 1-5 replacing Gleason score for clearer risk communication' },
        { term: 'Decipher', definition: 'Genomic classifier predicting metastatic potential and guiding post-surgery decisions' },
        { term: 'PCA3', definition: 'Prostate Cancer Antigen 3; urine biomarker overexpressed in prostate cancer' },
      ],
      clinicalNotes: 'Consider PHI or 4Kscore for PSA 4-10 ng/mL before biopsy. MRI before biopsy is standard at many centers. Use genomic tests to guide active surveillance decisions. Test for germline BRCA in high-risk family history.',
    },
    5: {
      level: 5,
      summary: 'Precision prostate cancer screening leverages multiparametric MRI, blood and urine biomarker panels, germline and somatic genomics, and AI-enhanced interpretation, while critically evaluating evolving evidence for risk-adapted strategies and addressing health equity considerations in shared decision-making frameworks.',
      explanation: `**Precision Screening Paradigm:**

*Risk-Stratified Approach:*
1. Baseline risk assessment (age, race, family history)
2. Polygenic risk scores (emerging)
3. Biomarker-enhanced PSA interpretation
4. MRI-guided biopsy decision
5. Genomic classification if cancer detected

**Polygenic Risk Scores:**
- 200+ SNPs associated with prostate cancer risk
- Can identify men at 2-3x population risk
- May inform screening start age and frequency
- Validation studies ongoing
- Potential for population-level screening stratification

**AI in Prostate Cancer Detection:**

*MRI Interpretation:*
- Deep learning for PI-RADS scoring
- Lesion detection and segmentation
- Radiomics features for characterization
- May improve reader consistency

*Pathology:*
- Gleason grading assistance
- Grade Group prediction
- Outcome prediction from histology
- Reducing interobserver variability

**Health Equity Considerations:**

*Racial Disparities:*
- Black men: 2x higher incidence, 2x higher mortality
- Earlier onset, more aggressive disease
- Lower screening rates despite higher risk
- USPSTF guidelines may undervalue screening for Black men

*Recommendations for Black Men:*
- Discuss screening starting at age 40-45
- Consider family history
- Some organizations recommend earlier start
- Shared decision-making essential

*Access Barriers:*
- Insurance coverage
- Specialist access
- MRI availability
- Genomic testing costs

**Active Surveillance Optimization:**

*MRI in Surveillance:*
- Can reduce biopsy frequency
- Detects progression earlier
- Standardized protocols emerging

*Genomic Classifiers:*
- Oncotype DX GPS for AS candidacy
- May identify low-grade cancers safe for AS
- Reduces upgrade anxiety

*Long-Term Data:*
- PIVOT: No survival benefit for low-risk, surgery vs observation
- ProtecT: 15-year data shows low mortality regardless of treatment
- Supports AS for low-risk disease

**Screening Cessation:**

*When to Stop:*
- Age 70+ with average risk (USPSTF)
- Life expectancy <10-15 years
- Personal preference after discussion

*Challenges:*
- Men often want to continue
- PSA momentum difficult to stop
- Balance autonomy with evidence

**PSMA-PET Imaging:**

*Emerging Role:*
- Prostate-Specific Membrane Antigen
- Superior to conventional imaging for staging
- FDA approved for recurrence
- Emerging role in initial staging

*Primary Screening?*
- Not yet indicated for screening
- May detect aggressive cancers missed by PSA
- Cost and access barriers
- Research ongoing

**Future Directions:**

1. **Integrated risk models** combining PRS, PSA, biomarkers, MRI
2. **Liquid biopsy** for early detection (ctDNA, exosomes)
3. **AI-enhanced screening** pathways
4. **MRI-first** approaches without PSA
5. **Targeted screening** for high-risk populations
6. **Chemoprevention** (5-alpha reductase inhibitors) integration

**Shared Decision-Making Framework:**

*Key Elements:*
- Explain population-level data
- Discuss personal risk factors
- Present benefits (mortality reduction)
- Present harms (overdiagnosis, treatment effects)
- Explore patient values
- Document discussion

*Decision Aids:*
- Option grids
- Visual displays
- Interactive tools
- Culturally appropriate materials`,
      keyTerms: [
        { term: 'PSMA-PET', definition: 'Positron emission tomography using prostate-specific membrane antigen tracer; highly sensitive for prostate cancer detection' },
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk from multiple common variants; may stratify prostate cancer screening intensity' },
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical images for prediction and classification' },
        { term: 'ProtecT trial', definition: 'Large trial comparing active monitoring, surgery, and radiotherapy for localized prostate cancer' },
      ],
      clinicalNotes: `**Clinical Implementation:**
- Document shared decision-making (required for Medicare reimbursement)
- Consider earlier screening discussion for Black men and those with family history
- Use biomarker tests (PHI, 4Kscore) to reduce unnecessary biopsies
- MRI before biopsy increasingly standard of care
- Active surveillance safe for GG1 (Gleason 3+3)
- Refer for genetic counseling if: multiple family cancers, Ashkenazi Jewish heritage, early-onset prostate cancer
- Address barriers: offer decision aids, patient navigation
- Stay current: Guidelines evolving with MRI and biomarker evidence`,
    },
  },

  media: [
    {
      id: 'prostate-anatomy',
      type: 'diagram',
      filename: 'prostate-anatomy.svg',
      title: 'Prostate Anatomy',
      description: 'Anatomical diagram showing prostate location and zones',
    },
  ],

  citations: [
    {
      id: 'uspstf-prostate-2018',
      type: 'article',
      title: 'Screening for Prostate Cancer: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cancer-screening-overview', targetType: 'concept', relationship: 'parent', label: 'Cancer Screening Overview' },
    { targetId: 'structure-prostate', targetType: 'structure', relationship: 'related', label: 'Prostate Anatomy' },
  ],

  tags: {
    systems: ['reproductive', 'urinary'],
    topics: ['preventive medicine', 'oncology', 'screening', 'urology'],
    keywords: ['PSA', 'prostate cancer', 'screening', 'shared decision-making', 'active surveillance'],
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
