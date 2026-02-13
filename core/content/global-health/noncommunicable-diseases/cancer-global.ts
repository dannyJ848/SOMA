/**
 * Global Cancer Burden
 *
 * Educational content about cancer worldwide.
 */

import { EducationalContent } from '../../types';

export const CANCER_GLOBAL: EducationalContent = {
  id: 'cancer-global',
  type: 'concept',
  name: 'Global Cancer Burden',
  alternateNames: ['Cancer Worldwide', 'Global Oncology'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer is when cells in the body grow out of control. It is the second leading cause of death worldwide, but many cancers can be prevented or treated if found early.',
      explanation: `Your body is made of trillions of cells that normally grow and divide in an organized way. Cancer happens when this process goes wrong and cells start growing out of control.

**How Cancer Develops:**
- Cells get damaged (from smoking, radiation, viruses, etc.)
- Damaged cells keep dividing instead of dying
- They form a lump called a tumor
- Cancer cells can spread to other parts of the body

**Most Common Cancers Worldwide:**
- Breast cancer (most common in women)
- Lung cancer (often caused by smoking)
- Colon cancer (in the large intestine)
- Prostate cancer (in men)
- Stomach cancer

**What Causes Cancer?**

**Things We Can Control:**
- Tobacco use (causes 22% of cancer deaths)
- Being overweight
- Drinking too much alcohol
- Poor diet
- Not being physically active

**Infections (Preventable with vaccines/treatment):**
- HPV causes cervical cancer
- Hepatitis B and C cause liver cancer
- H. pylori bacteria causes stomach cancer

**Other Factors:**
- Family history
- Age (risk increases as we get older)
- Environmental exposures

**Prevention:**
- Don't smoke
- Maintain healthy weight
- Eat fruits and vegetables
- Limit alcohol
- Get vaccinated (HPV, Hepatitis B)
- Use sun protection

**Early Detection:**
Finding cancer early often means better treatment outcomes. Screening tests can find some cancers before symptoms appear.`,
      keyTerms: [
        { term: 'cancer', definition: 'A disease where cells grow out of control and can spread to other parts of the body' },
        { term: 'tumor', definition: 'An abnormal lump or mass of tissue' },
        { term: 'screening', definition: 'Tests to find cancer before symptoms appear' },
      ],
      analogies: [
        'Cancer cells are like weeds in a garden - they grow where they shouldn\'t and crowd out healthy plants.',
      ],
      examples: [
        'Cervical cancer is almost completely preventable with the HPV vaccine and regular screening.',
        'Lung cancer deaths have decreased in countries where fewer people smoke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cancer causes 10 million deaths annually, with incidence rising globally. Common cancers vary by region and development status. Approximately 30-50% of cancers are preventable through modifiable risk factors, while early detection improves outcomes for many cancers.',
      explanation: `Cancer represents a major global health challenge, with patterns varying by geography, development status, and cancer type.

**Global Cancer Burden (GLOBOCAN 2020):**
- 19.3 million new cases
- 10 million deaths
- Second leading cause of death
- Projected: 28.4 million cases by 2040

**Most Common Cancers:**
| Cancer Type | New Cases | Deaths |
|-------------|-----------|--------|
| Breast | 2.3 million | 685,000 |
| Lung | 2.2 million | 1.8 million |
| Colorectal | 1.9 million | 935,000 |
| Prostate | 1.4 million | 375,000 |
| Stomach | 1.1 million | 769,000 |

**Patterns by Development:**

**High-income countries:**
- Higher incidence (detection, lifestyle)
- Lower mortality (better treatment)
- Breast, prostate, colorectal common

**Low/middle-income countries:**
- Lower incidence but rising
- Higher mortality (late diagnosis, limited treatment)
- Infection-related cancers more common

**Risk Factors:**

**Attributable Fraction by Risk Factor:**
| Factor | % of Cancer Deaths |
|--------|-------------------|
| Tobacco | 22% |
| Infections | 15% (higher in LMICs) |
| Alcohol | 4% |
| Overweight/obesity | 3% |
| Poor diet | 5% |

**Infection-Associated Cancers:**
| Infection | Cancer | Prevention |
|-----------|--------|------------|
| HPV | Cervical, oropharyngeal | Vaccination |
| HBV/HCV | Liver | Vaccination, treatment |
| H. pylori | Stomach | Treatment |
| EBV | Nasopharyngeal, lymphoma | None yet |

**Prevention and Early Detection:**

**Primary Prevention:**
- Tobacco control
- Vaccination (HPV, HBV)
- Healthy diet and physical activity
- Alcohol limitation
- Sun protection

**Screening:**
| Cancer | Screening Method | Evidence |
|--------|-----------------|----------|
| Cervical | Pap smear, HPV test | Strong |
| Breast | Mammography | Moderate |
| Colorectal | Colonoscopy, FIT | Strong |
| Lung (smokers) | Low-dose CT | Emerging |

**Treatment Pillars:**
- Surgery
- Radiation therapy
- Chemotherapy
- Targeted therapy
- Immunotherapy
- Palliative care`,
      keyTerms: [
        { term: 'incidence', definition: 'Number of new cancer cases in a population over time' },
        { term: 'HPV', definition: 'Human papillomavirus - causes cervical and other cancers', pronunciation: 'H-P-V' },
        { term: 'attributable fraction', definition: 'Proportion of cancer cases caused by a specific risk factor' },
        { term: 'palliative care', definition: 'Care focused on relieving symptoms and improving quality of life' },
      ],
      analogies: [
        'Cancer screening is like regular car maintenance - finding problems early makes them easier to fix.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cancer arises from accumulation of genetic alterations in oncogenes and tumor suppressors. Global patterns reflect varying exposure to risk factors and access to prevention/treatment. Comprehensive cancer control spans prevention, early detection, treatment, and palliative care.',
      explanation: `Cancer biology involves complex interactions between genetic predisposition, environmental exposures, and stochastic events, with significant global variation in cancer burden and outcomes.

**Cancer Biology:**

**Hallmarks of Cancer:**
1. Sustaining proliferative signaling
2. Evading growth suppressors
3. Resisting cell death
4. Enabling replicative immortality
5. Inducing angiogenesis
6. Activating invasion and metastasis
7. Deregulating cellular metabolism
8. Avoiding immune destruction

**Genetic Alterations:**
- Oncogene activation (gain of function)
- Tumor suppressor inactivation (loss of function)
- DNA repair defects (genomic instability)
- Epigenetic modifications

**Global Epidemiology:**

**Survival Disparities:**
| Cancer | 5-Year Survival (HIC) | 5-Year Survival (LMIC) |
|--------|----------------------|----------------------|
| Breast | 90% | 40-60% |
| Childhood ALL | 90% | 10-30% |
| Cervical | 65% | 15-45% |

**Contributing Factors:**
- Late-stage diagnosis
- Limited treatment availability
- Out-of-pocket costs
- Workforce shortages

**WHO Cancer Control Framework:**

**Prevention:**
- Tobacco control (FCTC implementation)
- Infection control (vaccination, screening)
- Environmental/occupational exposures
- Healthy lifestyles

**Early Detection:**
- Awareness and early diagnosis
- Population-based screening
- Down-staging efforts

**Diagnosis and Treatment:**
- Pathology services
- Imaging capabilities
- Multimodal treatment
- Referral systems

**Palliative Care:**
- Pain management (opioid access)
- Symptom control
- Psychosocial support
- End-of-life care

**Essential Cancer Services:**

**WHO Essential Packages:**
| Level | Services |
|-------|----------|
| Primary | Prevention, symptom recognition, referral |
| District | Diagnosis, surgery, basic chemotherapy |
| Tertiary | Complex surgery, radiation, advanced therapy |

**Essential Medicines:**
WHO Model List includes chemotherapy agents for curable and palliative treatment.

**Resource-Stratified Guidelines:**
NCCN and others provide pathways adapted to available resources.`,
      keyTerms: [
        { term: 'oncogene', definition: 'Gene that when activated promotes cancer development', pronunciation: 'ON-koh-jeen' },
        { term: 'tumor suppressor', definition: 'Gene that normally prevents cancer; cancer develops when inactivated' },
        { term: 'metastasis', definition: 'Spread of cancer from original site to other parts of body', pronunciation: 'meh-TASS-tah-sis' },
        { term: 'down-staging', definition: 'Detecting cancer at earlier, more treatable stages' },
      ],
      clinicalNotes: 'Consider cancer in differential diagnosis. Implement appropriate screening. Ensure timely referral. Address palliative care needs.',
    },
    4: {
      level: 4,
      summary: 'Cancer control requires integration of prevention, early detection, treatment, and palliation within health systems. Implementation challenges in LMICs demand innovative approaches, task-shifting, and prioritization of high-impact interventions while addressing access barriers.',
      explanation: `**Implementation Challenges:**

**Workforce:**
- Global shortage of oncologists
- Limited pathologists, radiologists
- Training and retention challenges
- Task-shifting opportunities

**Infrastructure:**
- Radiation therapy unavailable in most LMICs
- Pathology and imaging gaps
- Blood bank access
- Cold chain for biologics

**Financing:**
- Cancer as catastrophic expense
- Out-of-pocket payments dominant
- Insurance gaps
- Price of new therapies

**Innovative Approaches:**

**Cervical Cancer Elimination:**
WHO Global Strategy:
- 90% HPV vaccination coverage
- 70% screening coverage
- 90% treatment access

Single-visit approaches:
- Visual inspection with acetic acid (VIA)
- HPV testing
- Same-day treatment (cryotherapy, thermal ablation)

**Breast Cancer:**
- Clinical breast exam downstaging
- Resource-appropriate treatment pathways
- Breast health awareness

**Childhood Cancer:**
- WHO Global Initiative (60% survival by 2030)
- Supportive care strengthening
- Treatment abandonment reduction
- Essential medicines access

**Treatment Advances:**

| Therapy | Examples | Considerations |
|---------|----------|----------------|
| Targeted therapy | Imatinib (CML), trastuzumab (HER2+) | Companion diagnostics needed |
| Immunotherapy | PD-1/PD-L1 inhibitors | High cost, limited access |
| Precision oncology | Tumor profiling | Infrastructure intensive |

**Biosimilars:**
- Trastuzumab, rituximab biosimilars
- Potential for cost reduction
- Quality assurance essential

**Policy Framework:**

**National Cancer Control Programs:**
- Situational analysis
- Priority setting
- Implementation planning
- Monitoring and evaluation

**Civil Society Role:**
- Patient advocacy
- Awareness campaigns
- Accountability
- Resource mobilization`,
      keyTerms: [
        { term: 'VIA', definition: 'Visual Inspection with Acetic Acid - low-tech cervical screening method' },
        { term: 'biosimilar', definition: 'Biologic medicine highly similar to approved reference product' },
        { term: 'companion diagnostic', definition: 'Test to identify patients likely to respond to specific treatment' },
        { term: 'treatment abandonment', definition: 'Discontinuing cancer treatment before completion' },
      ],
      clinicalNotes: 'Consider resource-appropriate approaches. Advocate for access to essential cancer medicines. Integrate palliative care early. Support patient navigation.',
    },
    5: {
      level: 5,
      summary: 'Cancer control exemplifies complex health system challenges requiring precision medicine advances alongside population-level prevention, within frameworks addressing commercial determinants, equity, and health system transformation for universal health coverage.',
      explanation: `**Precision Oncology:**

**Genomic Medicine:**
- Tumor sequencing for treatment selection
- Liquid biopsy for monitoring
- Hereditary cancer syndromes
- Pharmacogenomics

**Challenges:**
- Access and affordability
- Clinical utility evidence
- Implementation in LMICs
- Equity concerns

**Population Health:**

**Prevention ROI:**
Most cost-effective interventions:
- Tobacco control
- HPV vaccination
- HBV vaccination
- Cervical screening

**Research Priorities:**
- Implementation science for LMICs
- Health systems integration
- Precision prevention
- Value-based care

**Political Economy:**

**Commercial Determinants:**
- Tobacco industry
- Alcohol industry
- Cancer drug pricing
- Industry influence on policy

**Global Governance:**
- WHO cancer resolutions
- IARC role
- Civil society movements
- Accountability mechanisms

**Equity:**
- Survival gaps
- Access barriers
- Structural determinants
- Indigenous and marginalized populations

**Future Trajectories:**

**Optimistic:**
- Cervical cancer elimination achieved
- Survival gaps narrowed
- UHC includes cancer care
- Precision medicine benefits shared

**Challenging:**
- Rising incidence in LMICs
- Treatment costs escalate
- Prevention stalls
- Inequities widen`,
      keyTerms: [
        { term: 'liquid biopsy', definition: 'Detection of cancer markers in blood or other fluids' },
        { term: 'IARC', definition: 'International Agency for Research on Cancer - WHO cancer research body' },
        { term: 'cancer moonshot', definition: 'Initiatives to accelerate cancer research and treatment' },
      ],
      clinicalNotes: 'Engage with evolving evidence. Advocate for equity. Participate in research. Support health system strengthening.',
    },
  },

  media: [],
  citations: [
    {
      id: 'globocan',
      type: 'website',
      title: 'GLOBOCAN Cancer Statistics',
      source: 'IARC/WHO',
      url: 'https://gco.iarc.fr/',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'ncd-epidemic', targetType: 'topic', relationship: 'parent', label: 'NCD Epidemic' },
  ],

  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'cancer', 'oncology'],
    keywords: ['cancer', 'oncology', 'prevention', 'screening', 'treatment'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
