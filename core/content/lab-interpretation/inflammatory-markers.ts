/**
 * Inflammatory Markers - Laboratory Interpretation Content
 *
 * Comprehensive educational content for inflammatory marker interpretation including:
 * - C-Reactive Protein (CRP)
 * - Erythrocyte Sedimentation Rate (ESR)
 * - Procalcitonin
 * - Ferritin (as acute phase reactant)
 */

import { LabInterpretationContent, LabPanel, PanelPattern } from './types';

// =============================================================================
// C-REACTIVE PROTEIN (CRP)
// =============================================================================

export const crpInterpretation: LabInterpretationContent = {
  id: 'lab-crp',
  type: 'concept',
  name: 'C-Reactive Protein',
  alternateNames: ['CRP', 'hs-CRP', 'High-Sensitivity CRP'],

  labMetadata: {
    loincCode: '1988-5',
    testName: 'C-Reactive Protein',
    commonAbbreviations: ['CRP', 'hs-CRP'],
    category: 'inflammatory',
    panel: 'Inflammatory Markers',
    orderingFrequency: 'common',
  },

  referenceRanges: {
    adult: {
      low: 0,
      high: 1.0,
      unit: 'mg/dL',
      notes: 'Standard CRP; values may vary by assay',
    },
    variations: [
      {
        low: 0,
        high: 0.3,
        unit: 'mg/dL',
        notes: 'hs-CRP for cardiovascular risk (equivalent to 0-3 mg/L)',
      },
    ],
  },

  criticalValues: {
    high: 10.0,
    unit: 'mg/dL',
    urgency: 'expedited',
    action: 'Evaluate for significant infection or inflammatory process',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Infection',
          causes: [
            'Bacterial infection (often CRP >10 mg/dL)',
            'Viral infection (usually mild elevation)',
            'Fungal infection',
            'Sepsis',
          ],
          commonality: 'common',
        },
        {
          category: 'Inflammatory Conditions',
          causes: [
            'Rheumatoid arthritis flare',
            'Inflammatory bowel disease',
            'Systemic lupus erythematosus',
            'Vasculitis',
            'Gout/crystal arthropathy',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Malignancy',
            'Myocardial infarction',
            'Trauma/surgery',
            'Burns',
            'Obesity (mild chronic elevation)',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Fever, elevated WBC in infection',
        'Joint symptoms in arthritis',
        'Elevated ESR often parallels CRP',
      ],
      workupSuggestions: [
        'Clinical correlation for source',
        'CBC with differential',
        'Blood cultures if infection suspected',
        'Imaging as directed by symptoms',
      ],
      clinicalPearls: [
        'CRP rises rapidly (6-12 hours) and falls quickly with resolution',
        'CRP >10 mg/dL more suggestive of bacterial than viral infection',
        'hs-CRP is for cardiovascular risk, not acute inflammation',
      ],
    },
  },

  specimen: {
    specimenType: 'serum',
    tubeType: 'Red top or gold top (SST)',
    volume: '3 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '24 hours',
      refrigerated: '7 days',
    },
    interferences: ['Rheumatoid factor may affect some assays'],
  },

  relatedLabs: ['lab-esr', 'lab-procalcitonin', 'lab-ferritin', 'lab-wbc'],

  organAssociations: [
    { organId: 'liver', organName: 'Liver', relationship: 'Site of CRP synthesis' },
  ],

  levels: {
    1: {
      level: 1,
      summary: 'CRP is a protein that increases in your blood when there is inflammation or infection in your body.',
      explanation: `C-Reactive Protein (CRP) is made by your liver when your body is fighting infection or dealing with inflammation.

**What it measures:**
- How much inflammation is in your body
- Rises quickly when you're sick
- Falls quickly when you get better

**Normal levels:**
- Less than 1.0 mg/dL (or 10 mg/L) is normal
- Higher levels suggest infection or inflammation

**Common reasons for high CRP:**
- Infections (bacterial, viral)
- Arthritis flares
- Inflammatory bowel disease
- After surgery or injury

Doctors use CRP to help diagnose infections and track how well treatment is working.`,
      keyTerms: [
        { term: 'CRP', definition: 'C-Reactive Protein - a marker that rises with inflammation' },
        { term: 'inflammation', definition: 'Your body\'s response to infection, injury, or disease' },
      ],
      analogies: [
        'CRP is like a fire alarm - it goes off when there\'s inflammation in your body, alerting doctors to a problem.',
      ],
    },
    2: {
      level: 2,
      summary: 'CRP is an acute phase reactant that rises rapidly with inflammation. It is useful for detecting infection and monitoring inflammatory conditions.',
      explanation: `## CRP Overview

**Production:**
- Synthesized in liver
- Stimulated by IL-6, IL-1, TNF-alpha
- Part of innate immune response

**Kinetics:**
| Phase | Timing |
|-------|--------|
| Onset of rise | 6-12 hours |
| Peak | 24-48 hours |
| Fall (with resolution) | Rapid (half-life ~19 hours) |

## Interpretation

**Level Categories (mg/dL):**
| Level | Interpretation |
|-------|----------------|
| <1.0 | Normal |
| 1.0-5.0 | Mild inflammation |
| 5.0-10.0 | Moderate inflammation |
| >10.0 | Significant inflammation/infection |
| >20.0 | Severe infection (consider bacterial) |

## CRP vs ESR

| Feature | CRP | ESR |
|---------|-----|-----|
| Rise time | Hours | Days |
| Fall time | Rapid | Slow |
| Specificity | Better | Less specific |
| Affected by anemia | No | Yes |
| Affected by age | Minimal | Yes |

## hs-CRP for Cardiovascular Risk
- Different assay with lower detection limit
- For CV risk stratification, NOT acute illness
| hs-CRP (mg/L) | CV Risk |
|---------------|---------|
| <1 | Low |
| 1-3 | Intermediate |
| >3 | High |
| >10 | Acute inflammation (invalid for CV risk) |`,
      keyTerms: [
        { term: 'acute phase reactant', definition: 'Protein that increases or decreases with inflammation' },
        { term: 'hs-CRP', definition: 'High-sensitivity CRP - more precise assay for cardiovascular risk' },
        { term: 'IL-6', definition: 'Interleukin-6 - cytokine that stimulates CRP production' },
      ],
      analogies: [
        'CRP is like a speedometer for inflammation - it quickly shows how severe the problem is and rapidly returns to normal when it resolves.',
      ],
    },
    3: {
      level: 3,
      summary: 'CRP interpretation requires clinical context. It helps distinguish bacterial from viral infection and monitors inflammatory disease activity.',
      explanation: `## Systematic CRP Interpretation

### Clinical Applications

**Infection Evaluation:**
| CRP Level | Suggests |
|-----------|----------|
| <2 mg/dL | Viral or no bacterial infection likely |
| 2-10 mg/dL | Possible bacterial, depends on context |
| >10 mg/dL | Bacterial infection more likely |
| >20-30 mg/dL | High probability bacterial/severe |

**Limitations:**
- Not all bacterial infections elevate CRP markedly
- Some viral infections (adenovirus, EBV) can elevate CRP
- Immunocompromised patients may not mount CRP response

### Disease Monitoring

**Rheumatoid Arthritis:**
- CRP correlates with disease activity
- Target low CRP on treatment
- Predicts joint damage

**Inflammatory Bowel Disease:**
- Correlates with disease activity
- Helps distinguish flare from IBS symptoms
- Crohn's elevates CRP more than UC

**Giant Cell Arteritis/PMR:**
- CRP and ESR both elevated
- Used for diagnosis and monitoring
- May be elevated before symptoms

### Post-Operative Monitoring
| Day Post-Op | Expected CRP |
|-------------|--------------|
| Day 2-3 | Peak (often >10 mg/dL) |
| Day 5-7 | Should be declining |
| Day 7+ | Rising CRP suggests complication |

### CRP in Specific Populations

**Neonates:**
- CRP for sepsis evaluation
- Serial measurements more useful than single
- Normal CRP does not exclude early sepsis

**Pregnancy:**
- Mild elevation may be normal
- Very high suggests infection/preeclampsia`,
      keyTerms: [
        { term: 'serial measurements', definition: 'Repeated testing over time to track trends' },
        { term: 'PMR', definition: 'Polymyalgia rheumatica - inflammatory condition causing muscle pain' },
      ],
      clinicalNotes: 'In post-operative patients, CRP normally peaks at day 2-3. A second rise or failure to decline suggests infection or complication.',
    },
    4: {
      level: 4,
      summary: 'Advanced CRP interpretation includes understanding of CRP isoforms, genetic determinants, and integration with other biomarkers.',
      explanation: `## Advanced CRP Interpretation

### CRP Biology

**Isoforms:**
- Pentameric CRP (pCRP): Circulating form
- Monomeric CRP (mCRP): At sites of inflammation
- mCRP has different biological activities

**Genetic Determinants:**
- CRP gene polymorphisms affect baseline levels
- Some individuals have constitutively higher CRP
- May affect interpretation

### CRP in Cardiovascular Disease

**Mechanisms:**
- May directly promote atherosclerosis
- Activates complement
- Promotes endothelial dysfunction
- Debate: marker vs mediator

**JUPITER Trial:**
- Rosuvastatin in patients with LDL <130 but hs-CRP >2
- Reduced CV events
- Led to hs-CRP in risk assessment

**Current Guidelines:**
- hs-CRP may be used for risk refinement
- Not for routine screening
- Useful in intermediate-risk patients

### Combined Biomarker Strategies

**CRP + Procalcitonin:**
| CRP | Procalcitonin | Suggests |
|-----|---------------|----------|
| High | High | Bacterial infection likely |
| High | Low | Viral, autoimmune, or non-infectious |
| Low | Low | Low probability of significant infection |

**CRP + Ferritin in COVID-19:**
- Both markedly elevated in severe disease
- Part of cytokine storm assessment
- Trending important for prognosis

### CRP in Specific Diseases

**Lupus:**
- Often low or modestly elevated despite active disease
- High CRP in lupus suggests infection
- IL-6 may be suppressed in SLE

**Sepsis:**
- CRP rises but not specific
- Procalcitonin more specific for bacterial
- Serial CRP helps monitor response

### Assay Considerations
**Standard vs High-Sensitivity:**
| Feature | Standard CRP | hs-CRP |
|---------|--------------|--------|
| Detection limit | ~3-10 mg/L | <0.3 mg/L |
| Use | Infection, inflammation | CV risk |
| Units often | mg/dL | mg/L |`,
      keyTerms: [
        { term: 'pentameric CRP', definition: 'Native circulating form of CRP composed of 5 subunits' },
        { term: 'JUPITER trial', definition: 'Landmark trial of statin therapy in patients with elevated hs-CRP' },
      ],
      clinicalNotes: 'In lupus, a significantly elevated CRP should prompt evaluation for infection rather than assuming disease flare. SLE typically does not cause markedly elevated CRP.',
    },
    5: {
      level: 5,
      summary: 'Expert CRP interpretation encompasses precision inflammation assessment, point-of-care applications, and integration with emerging biomarkers.',
      explanation: `## Expert-Level CRP Interpretation

### Precision Inflammation Assessment

**Inflammaging:**
- Chronic low-grade inflammation with aging
- hs-CRP mildly elevated in older adults
- Associated with frailty, mortality
- Intervention targets unclear

**Residual Inflammatory Risk:**
- After LDL optimization, CRP >2 indicates residual risk
- CANTOS trial: IL-1 inhibition reduced events and CRP
- Colchicine trials (COLCOT, LoDoCo2) show benefit
- CRP as target in CV secondary prevention

### Biomarker Combinations

**Multi-Marker Approaches:**
| Biomarker | Information |
|-----------|-------------|
| CRP | General inflammation |
| Procalcitonin | Bacterial infection |
| IL-6 | Upstream cytokine |
| Ferritin | Macrophage activation |
| D-dimer | Thromboinflammation |
| LDH | Tissue damage |

**Cytokine Storm Assessment:**
- COVID-19 and other viral syndromes
- CRP, ferritin, IL-6, D-dimer panel
- Prognostic for severe disease
- Guides immunomodulatory therapy

### Point-of-Care CRP

**Applications:**
- Antibiotic stewardship in primary care
- CRP-guided antibiotic prescribing
- Reduces unnecessary antibiotic use
- Rapid results support decision-making

**Limitations:**
- Less precise than lab-based
- Quality control important
- Still requires clinical judgment

### Future Directions

**Novel Inflammatory Biomarkers:**
| Biomarker | Characteristic |
|-----------|----------------|
| Galectin-3 | Fibrosis, HF prognosis |
| GDF-15 | Cellular stress |
| sST2 | IL-33 pathway, HF |
| LP-PLA2 | Vascular inflammation |
| MPO | Neutrophil activation |

**Integrated Risk Scores:**
- Combining inflammatory markers with traditional risk factors
- Personalized risk assessment
- Guiding intensity of prevention

### Quality Considerations

**Pre-analytical:**
- Stable in serum at room temperature
- Minimal diurnal variation
- Recent infection/trauma: wait for resolution

**Standardization:**
- WHO reference material available
- Reasonable inter-laboratory agreement
- hs-CRP requires specific standardized assay

**Reporting:**
- Specify if standard or hs-CRP
- Include appropriate reference ranges
- Note if acute illness present (invalid for CV risk)`,
      keyTerms: [
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation associated with aging' },
        { term: 'residual inflammatory risk', definition: 'Persistent CV risk related to inflammation after lipid optimization' },
        { term: 'CANTOS trial', definition: 'Trial showing CV benefit of anti-inflammatory therapy targeting IL-1' },
      ],
      clinicalNotes: 'Expert interpretation recognizes CRP as part of a broader inflammatory assessment. Emerging evidence supports targeting inflammation in cardiovascular disease prevention.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aha-crp',
      type: 'article',
      title: 'CDC/AHA Workshop on Markers of Inflammation and Cardiovascular Disease',
      source: 'Circulation',
      authors: ['Pearson TA', 'et al'],
    },
  ],
  crossReferences: [
    { targetId: 'lab-esr', targetType: 'concept', relationship: 'related' },
    { targetId: 'lab-procalcitonin', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['immune', 'cardiovascular'],
    topics: ['laboratory', 'infectious disease', 'rheumatology', 'cardiology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// ERYTHROCYTE SEDIMENTATION RATE (ESR)
// =============================================================================

export const esrInterpretation: LabInterpretationContent = {
  id: 'lab-esr',
  type: 'concept',
  name: 'Erythrocyte Sedimentation Rate',
  alternateNames: ['ESR', 'Sed Rate', 'Sedimentation Rate'],

  labMetadata: {
    loincCode: '4537-7',
    testName: 'Erythrocyte Sedimentation Rate',
    commonAbbreviations: ['ESR', 'Sed Rate'],
    category: 'inflammatory',
    panel: 'Inflammatory Markers',
    orderingFrequency: 'common',
  },

  referenceRanges: {
    adult: {
      low: 0,
      high: 20,
      unit: 'mm/hr',
      notes: 'General adult range; varies by age and sex',
    },
    variations: [
      {
        low: 0,
        high: 15,
        unit: 'mm/hr',
        demographic: { sex: 'male' },
        notes: 'Male <50 years',
      },
      {
        low: 0,
        high: 20,
        unit: 'mm/hr',
        demographic: { sex: 'female' },
        notes: 'Female <50 years',
      },
      {
        low: 0,
        high: 30,
        unit: 'mm/hr',
        demographic: { sex: 'male', ageGroup: 'geriatric' },
        notes: 'Male >50 years',
      },
      {
        low: 0,
        high: 40,
        unit: 'mm/hr',
        demographic: { sex: 'female', ageGroup: 'geriatric' },
        notes: 'Female >50 years',
      },
    ],
  },

  criticalValues: {
    high: 100,
    unit: 'mm/hr',
    urgency: 'expedited',
    action: 'Evaluate for serious infection, malignancy, or inflammatory condition',
    notificationRequired: true,
  },

  interpretations: {
    high: {
      direction: 'high',
      severity: 'moderate',
      causes: [
        {
          category: 'Inflammatory Conditions',
          causes: [
            'Rheumatoid arthritis',
            'Systemic lupus erythematosus',
            'Vasculitis (GCA, PAN)',
            'Polymyalgia rheumatica',
            'Inflammatory bowel disease',
          ],
          commonality: 'common',
        },
        {
          category: 'Infection',
          causes: [
            'Bacterial infections',
            'Tuberculosis',
            'Osteomyelitis',
            'Endocarditis',
          ],
          commonality: 'common',
        },
        {
          category: 'Malignancy',
          causes: [
            'Multiple myeloma',
            'Lymphoma',
            'Metastatic cancer',
          ],
          commonality: 'common',
        },
        {
          category: 'Other',
          causes: [
            'Anemia',
            'Pregnancy',
            'End-stage renal disease',
            'Obesity',
            'Advanced age',
          ],
          commonality: 'common',
        },
      ],
      associatedFindings: [
        'Elevated CRP usually accompanies',
        'Anemia may be present',
        'Check for monoclonal protein (myeloma)',
      ],
      workupSuggestions: [
        'CRP for comparison',
        'SPEP if very high ESR with no clear cause',
        'Evaluate based on clinical suspicion',
      ],
      clinicalPearls: [
        'Very high ESR (>100) suggests myeloma, infection, or malignancy',
        'ESR rises and falls slowly compared to CRP',
        'Age-adjusted formula: Men: age/2; Women: (age+10)/2',
      ],
    },
    low: {
      direction: 'low',
      severity: 'mild',
      causes: [
        {
          category: 'Hematologic',
          causes: [
            'Polycythemia',
            'Sickle cell disease',
            'Spherocytosis',
            'Hyperviscosity',
          ],
          commonality: 'uncommon',
        },
        {
          category: 'Other',
          causes: [
            'Congestive heart failure',
            'Cachexia',
            'Hypofibrinogenemia',
          ],
          commonality: 'rare',
        },
      ],
      associatedFindings: [],
      workupSuggestions: ['Usually not clinically significant'],
      clinicalPearls: ['Low ESR is rarely clinically relevant except in polycythemia'],
    },
  },

  specimen: {
    specimenType: 'whole blood',
    tubeType: 'Lavender top (EDTA) or black top (citrate)',
    volume: '5 mL',
    fastingRequired: false,
    stability: {
      roomTemp: '4 hours (test promptly)',
      refrigerated: '24 hours',
    },
    interferences: ['Tilted tube', 'Temperature variations', 'Delayed testing'],
  },

  relatedLabs: ['lab-crp', 'lab-cbc', 'lab-spep'],

  organAssociations: [],

  levels: {
    1: {
      level: 1,
      summary: 'ESR measures how quickly red blood cells settle in a tube, which happens faster when there is inflammation in your body.',
      explanation: `The ESR (Erythrocyte Sedimentation Rate) is a simple test that measures inflammation.

**How it works:**
- Blood is placed in a tall, thin tube
- The red blood cells settle to the bottom
- Inflammation makes them clump and settle faster

**Normal values (mm/hour):**
- Men: less than 15-20
- Women: less than 20-30
- Older adults: slightly higher is normal

**What high ESR might mean:**
- Infection
- Arthritis or other inflammatory conditions
- Some cancers
- Pregnancy (this is normal)

ESR is often used along with other tests to help diagnose inflammatory conditions.`,
      keyTerms: [
        { term: 'ESR', definition: 'Erythrocyte Sedimentation Rate - how fast red blood cells settle, indicating inflammation' },
        { term: 'sedimentation', definition: 'The process of particles settling to the bottom of a liquid' },
      ],
      analogies: [
        'ESR is like watching sand settle in water - when red blood cells are sticky from inflammation, they clump together and sink faster.',
      ],
    },
    2: {
      level: 2,
      summary: 'ESR is an indirect marker of inflammation influenced by plasma proteins, especially fibrinogen. It rises slowly and is less specific than CRP.',
      explanation: `## ESR Overview

**Mechanism:**
- Inflammatory proteins (fibrinogen, immunoglobulins) coat RBCs
- Reduces RBC surface charge (zeta potential)
- RBCs aggregate (rouleaux formation)
- Aggregates settle faster

**Reference Ranges:**
| Age/Sex | Upper Limit |
|---------|-------------|
| Male <50 | 15 mm/hr |
| Male >50 | Age/2 |
| Female <50 | 20 mm/hr |
| Female >50 | (Age+10)/2 |

## Comparison with CRP

| Feature | ESR | CRP |
|---------|-----|-----|
| Rises | Days | Hours |
| Falls | Weeks | Days |
| Specificity | Lower | Higher |
| Affected by anemia | Yes (↑) | No |
| Affected by polycythemia | Yes (↓) | No |
| Affected by protein abnormalities | Yes | Less |

## Classic Elevations

**Very High ESR (>100 mm/hr):**
- Multiple myeloma (very suggestive)
- Temporal arteritis/GCA
- Tuberculosis
- Malignancy
- Severe infection

**Moderate ESR:**
- Active rheumatoid arthritis
- Polymyalgia rheumatica
- Chronic infections
- Inflammatory bowel disease`,
      keyTerms: [
        { term: 'rouleaux', definition: 'Stacking of red blood cells like coins, promoted by inflammatory proteins' },
        { term: 'zeta potential', definition: 'Surface charge on red blood cells that normally keeps them apart' },
      ],
      analogies: [
        'Rouleaux formation is like coins stacking in a roll - the red blood cells stick together and drop faster.',
      ],
    },
    3: {
      level: 3,
      summary: 'ESR interpretation requires understanding of factors that affect sedimentation beyond inflammation, including anemia, paraproteins, and technical variables.',
      explanation: `## Systematic ESR Interpretation

### Factors Affecting ESR

**Non-Inflammatory Elevations:**
| Factor | Effect on ESR | Mechanism |
|--------|---------------|-----------|
| Anemia | ↑ | Less RBC viscosity |
| Macrocytosis | ↑ | Larger cells settle faster |
| Hypergammaglobulinemia | ↑ | Proteins promote aggregation |
| Hyperfibrinogenemia | ↑ | Fibrinogen promotes aggregation |
| Pregnancy | ↑ | Multiple factors |
| Obesity | ↑ | Chronic inflammation |
| Female sex | Higher normal | Hormonal factors |

**Factors That Lower ESR:**
| Factor | Effect on ESR | Mechanism |
|--------|---------------|-----------|
| Polycythemia | ↓ | High viscosity |
| Sickle cell | ↓ | Abnormal RBC shape |
| Spherocytosis | ↓ | Abnormal RBC shape |
| CHF | ↓ | Possible fibrinogen consumption |
| Cachexia | ↓ | Low protein |

### Clinical Applications

**Giant Cell Arteritis/PMR:**
- ESR is part of diagnostic criteria
- Often ESR >50, frequently >100
- Normal ESR does not exclude GCA
- ~5% of biopsy-proven GCA have normal ESR
- Use both ESR and CRP

**Rheumatoid Arthritis:**
- Correlates with disease activity
- Part of disease activity scores (DAS28)
- Target low ESR on treatment

**Osteomyelitis:**
- ESR elevated in most cases
- Serial ESR monitors treatment response
- Slow to normalize

### Very High ESR Workup

**ESR >100 mm/hr:**
1. Consider multiple myeloma (order SPEP, free light chains)
2. Evaluate for serious infection (blood cultures, imaging)
3. Consider malignancy
4. Assess for vasculitis (temporal arteritis in elderly)
5. Look for chronic infections (TB, endocarditis)

### ESR in Monitoring

**Preferred Uses:**
- PMR/GCA disease activity
- Osteomyelitis treatment response
- Some rheumatologic conditions

**Not Preferred:**
- Acute phase monitoring (CRP better)
- Post-operative infection (too slow)`,
      keyTerms: [
        { term: 'DAS28', definition: 'Disease Activity Score including ESR, used in rheumatoid arthritis' },
        { term: 'paraprotein', definition: 'Abnormal immunoglobulin that can elevate ESR dramatically' },
      ],
      clinicalNotes: 'A normal ESR does not exclude giant cell arteritis. If clinical suspicion is high, proceed with temporal artery biopsy regardless of ESR.',
    },
    4: {
      level: 4,
      summary: 'Advanced ESR interpretation includes understanding of the Westergren method, zeta sedimentation ratio, and ESR in complex clinical scenarios.',
      explanation: `## Advanced ESR Interpretation

### Methodology

**Westergren Method (Standard):**
- 200 mm tube
- Blood diluted with citrate
- Read at 1 hour
- Reference method

**Modified Westergren:**
- EDTA blood
- Automated readers available
- Generally comparable

**Zeta Sedimentation Ratio (ZSR):**
- Not affected by anemia
- More consistent
- Less commonly used

### ESR in Specific Conditions

**Multiple Myeloma:**
- Very high ESR common (often >100)
- Due to paraprotein
- ESR may not correlate with disease activity
- Hyperviscosity may limit ESR elevation

**Waldenstrom Macroglobulinemia:**
- IgM paraprotein
- Very high ESR
- Hyperviscosity can paradoxically lower ESR

**Temporal Arteritis:**
| ESR | Sensitivity |
|-----|-------------|
| >47 | 86% |
| >100 | ~40% |
| Normal | ~5% of cases |

### Discordant CRP and ESR

**Elevated ESR, Normal CRP:**
- Multiple myeloma/paraprotein
- Chronic kidney disease
- Anemia
- SLE (CRP may be low despite active disease)

**Elevated CRP, Normal ESR:**
- Early acute inflammation
- Polycythemia masking ESR rise
- Sickle cell disease

### ESR in Pregnancy

**Expected Changes:**
| Trimester | ESR |
|-----------|-----|
| First | Mild increase |
| Second | Moderate increase |
| Third | Can be 30-40+ mm/hr normally |
| Postpartum | Returns to normal over weeks |

**Caution:** High ESR in pregnancy may be normal; need clinical correlation

### Technical Issues
| Problem | Effect |
|---------|--------|
| Tilted tube | Falsely elevated |
| Vibration | Falsely elevated |
| High temperature | Falsely elevated |
| Delayed reading | Falsely elevated |
| Clotted specimen | Invalid |`,
      keyTerms: [
        { term: 'Westergren method', definition: 'Standard reference method for ESR measurement' },
        { term: 'ZSR', definition: 'Zeta Sedimentation Ratio - alternative method less affected by anemia' },
      ],
      clinicalNotes: 'In multiple myeloma, ESR may be extremely elevated due to paraprotein. However, hyperviscosity syndrome can paradoxically limit ESR rise.',
    },
    5: {
      level: 5,
      summary: 'Expert ESR interpretation recognizes the test\'s limitations, appropriate clinical applications, and integration with modern inflammatory markers.',
      explanation: `## Expert-Level ESR Interpretation

### Historical Context
- Introduced in early 1900s
- One of oldest laboratory tests still in use
- Largely superseded by CRP for acute monitoring
- Retained for specific conditions

### Modern Role of ESR

**Still Valuable For:**
- Giant cell arteritis/PMR (part of diagnostic criteria)
- Rheumatoid arthritis (DAS28 score)
- Osteomyelitis monitoring
- Multiple myeloma evaluation

**Largely Replaced By CRP:**
- Acute infection evaluation
- Post-operative monitoring
- Inflammatory disease activity (most conditions)

### Complex Interpretations

**SLE:**
- ESR often elevated
- CRP may be normal despite active disease
- High CRP in SLE → think infection
- ESR may be more sensitive for lupus activity

**Endocarditis:**
- ESR typically elevated
- CRP rises and falls faster with treatment
- Both useful in monitoring

**Chronic Infections (TB, Osteomyelitis):**
- ESR elevation expected
- Slow to normalize (may take months)
- Serial measurements track response

### Corrected ESR

**For Anemia:**
- Several formulas proposed
- None universally accepted
- Some suggest: ESR_corrected = ESR × (Hct/0.45)
- Clinical correlation most important

### Future of ESR

**Declining Use:**
- CRP more informative for most applications
- Procalcitonin for bacterial infection
- Specific cytokines (IL-6) available

**Persistent Utility:**
- PMR/GCA: remains in guidelines
- Complement CRP in some conditions
- Low cost, widely available

### Quality Assurance

**Pre-analytical:**
- Test within 4 hours
- Maintain upright position
- Avoid temperature extremes

**Analytical:**
- ICSH standardization
- Automated readers common
- QC with control materials

**Post-analytical:**
- Report with reference range
- Note patient factors (age, sex, anemia)
- Clinical correlation essential`,
      keyTerms: [
        { term: 'ICSH', definition: 'International Council for Standardization in Haematology - sets ESR standards' },
        { term: 'DAS28', definition: 'Disease Activity Score in 28 joints - uses ESR in RA assessment' },
      ],
      clinicalNotes: 'Expert interpretation uses ESR judiciously, recognizing its specific strengths (PMR/GCA, myeloma) while preferring CRP for acute inflammation monitoring.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'lab-crp', targetType: 'concept', relationship: 'related' },
  ],
  tags: {
    systems: ['immune', 'hematologic'],
    topics: ['laboratory', 'rheumatology', 'infectious disease'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

// =============================================================================
// INFLAMMATORY MARKER PANEL
// =============================================================================

export const INFLAMMATORY_MARKER_PANEL: LabPanel = {
  id: 'panel-inflammatory',
  name: 'Inflammatory Marker Panel',
  nameEs: 'Marcadores Inflamatorios',
  abbreviation: 'Inflamm Panel',
  description: 'Assessment of systemic inflammation using acute phase reactants.',
  includedTests: [
    'lab-crp',
    'lab-esr',
    'lab-procalcitonin',
    'lab-ferritin',
  ],
  commonIndications: [
    'Evaluation of fever of unknown origin',
    'Differentiation of bacterial vs viral infection',
    'Monitoring inflammatory diseases (RA, IBD, vasculitis)',
    'Assessment of giant cell arteritis/polymyalgia rheumatica',
    'Sepsis evaluation',
    'Post-operative infection surveillance',
  ],
  interpretationGuidance: [
    {
      level: 1,
      content: 'Inflammatory markers like CRP and ESR tell doctors if there is inflammation or infection in your body. Higher levels mean more inflammation.',
    },
    {
      level: 3,
      content: 'CRP rises rapidly (hours) and falls quickly, making it better for acute monitoring. ESR rises slowly (days) and falls slowly. Very high ESR (>100) suggests myeloma, GCA, or serious infection. Use CRP for acute infection; use ESR for chronic inflammatory conditions.',
    },
    {
      level: 5,
      content: 'Expert interpretation combines markers strategically: CRP for acute phase, ESR for PMR/GCA, procalcitonin for bacterial sepsis. Recognize discordant patterns (high ESR/low CRP in SLE or myeloma). Consider hs-CRP for cardiovascular risk separately from acute inflammation.',
    },
  ],
  patterns: [
    {
      patternName: 'Acute Bacterial Infection',
      description: 'Pattern suggesting bacterial infection',
      labFindings: [
        { labId: 'lab-crp', labName: 'CRP', expectedDirection: 'high' },
        { labId: 'lab-procalcitonin', labName: 'Procalcitonin', expectedDirection: 'high' },
        { labId: 'lab-esr', labName: 'ESR', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Bacterial sepsis', 'Pneumonia', 'Pyelonephritis', 'Bacteremia'],
      clinicalContext: 'CRP >10 mg/dL and elevated procalcitonin strongly suggest bacterial infection. Procalcitonin >0.5 ng/mL indicates high probability of bacterial sepsis.',
    },
    {
      patternName: 'Viral Infection',
      description: 'Pattern more consistent with viral illness',
      labFindings: [
        { labId: 'lab-crp', labName: 'CRP', expectedDirection: 'normal' },
        { labId: 'lab-procalcitonin', labName: 'Procalcitonin', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Viral respiratory infection', 'Viral gastroenteritis', 'Viral syndrome'],
      clinicalContext: 'Low CRP (<2 mg/dL) and low procalcitonin (<0.25) suggest viral rather than bacterial infection. Some viruses (adenovirus) may elevate CRP moderately.',
    },
    {
      patternName: 'Giant Cell Arteritis/PMR',
      description: 'Pattern typical of these vasculitic conditions',
      labFindings: [
        { labId: 'lab-esr', labName: 'ESR', expectedDirection: 'high' },
        { labId: 'lab-crp', labName: 'CRP', expectedDirection: 'high' },
      ],
      suggestsDiagnosis: ['Giant cell arteritis', 'Polymyalgia rheumatica'],
      clinicalContext: 'ESR often >50, frequently >100 mm/hr in GCA. Normal ESR does not exclude diagnosis (~5% have normal ESR). Both ESR and CRP used for diagnosis and monitoring.',
    },
    {
      patternName: 'Multiple Myeloma Pattern',
      description: 'Very high ESR with disproportionate elevation',
      labFindings: [
        { labId: 'lab-esr', labName: 'ESR', expectedDirection: 'high' },
        { labId: 'lab-crp', labName: 'CRP', expectedDirection: 'normal' },
      ],
      suggestsDiagnosis: ['Multiple myeloma', 'Waldenstrom macroglobulinemia', 'Paraproteinemia'],
      clinicalContext: 'ESR >100 with normal or mildly elevated CRP suggests paraprotein. Order SPEP and free light chains. Hyperviscosity may paradoxically limit ESR.',
    },
  ],
};
