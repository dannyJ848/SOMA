/**
 * Global Cardiovascular Disease
 *
 * Educational content about cardiovascular diseases worldwide,
 * the leading cause of death globally.
 */

import { EducationalContent } from '../../types';

export const CARDIOVASCULAR_DISEASE_GLOBAL: EducationalContent = {
  id: 'cardiovascular-disease-global',
  type: 'concept',
  name: 'Global Cardiovascular Disease',
  alternateNames: ['Heart Disease Worldwide', 'Global CVD Burden', 'Cardiovascular Health Global'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiovascular disease (CVD) affects the heart and blood vessels. It is the number one cause of death in the world, killing more people than anything else, but many of these deaths can be prevented.',
      explanation: `Your heart pumps blood through tubes called blood vessels to every part of your body. Cardiovascular disease is when something goes wrong with this system.

**Types of Heart and Blood Vessel Problems:**

**Heart Attacks:**
- When blood can't reach part of the heart
- The heart muscle gets damaged
- Can be deadly or cause lasting damage

**Stroke:**
- When blood can't reach part of the brain
- The brain gets damaged
- Can cause paralysis, speech problems, or death

**High Blood Pressure:**
- Blood pushes too hard on vessel walls
- Damages vessels over time
- Called the "silent killer" because you can't feel it

**Why Does CVD Happen?**

**Things That Damage Blood Vessels:**
- Smoking
- Eating too much salt, sugar, and unhealthy fats
- Not exercising
- Being overweight
- Diabetes
- Too much stress

**What Happens Inside:**
- Fat builds up inside blood vessels (like gunk in a pipe)
- Vessels get narrow and stiff
- Blood can't flow properly
- Parts of the body don't get enough oxygen

**CVD Around the World:**
- 17.9 million people die from CVD each year
- That's almost 1 in 3 of all deaths
- It used to be mainly in rich countries, now it's everywhere
- Many deaths happen in poorer countries

**How to Protect Your Heart:**
- Don't smoke (or quit if you do)
- Eat fruits, vegetables, and whole grains
- Limit salt, sugar, and fatty foods
- Exercise regularly
- Maintain a healthy weight
- Manage stress
- Get regular checkups`,
      keyTerms: [
        { term: 'cardiovascular disease', definition: 'Diseases affecting the heart and blood vessels' },
        { term: 'heart attack', definition: 'When blood flow to part of the heart is blocked, damaging heart muscle' },
        { term: 'stroke', definition: 'When blood flow to part of the brain is blocked, damaging brain tissue' },
      ],
      analogies: [
        'Blood vessels are like pipes in your house - if they get clogged, things stop working properly.',
        'Your heart is like a pump that never stops - it needs clean fuel and pipes to keep running.',
      ],
      examples: [
        'Someone who smokes and eats a lot of fried food is much more likely to have a heart attack than someone who doesn\'t smoke and eats healthy.',
        'High blood pressure has no symptoms, so many people don\'t know they have it until they have a heart attack or stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiovascular diseases cause 17.9 million deaths annually, representing 32% of all global deaths. Major forms include ischemic heart disease and stroke. Risk factors are well-established and largely modifiable, making CVD substantially preventable.',
      explanation: `CVD is the leading cause of death globally and a major cause of disability. Understanding its epidemiology and risk factors is essential for prevention.

**Global CVD Burden (2019):**

**Mortality:**
| Condition | Deaths (millions) |
|-----------|------------------|
| Ischemic heart disease | 9.1 |
| Stroke | 6.6 |
| Hypertensive heart disease | 1.1 |
| Other CVD | 1.1 |
| **Total** | **17.9** |

**Trends:**
- CVD deaths increased 12% from 2010-2019
- Age-standardized rates declining in HICs
- Rising in many LMICs
- 75% of CVD deaths in LMICs

**Major CVD Conditions:**

**Ischemic Heart Disease (IHD):**
- Caused by coronary artery atherosclerosis
- Manifests as angina, MI, heart failure
- Leading cause of death worldwide

**Cerebrovascular Disease:**
- Ischemic stroke (87%): Blocked blood vessel
- Hemorrhagic stroke (13%): Bleeding in brain
- Second leading cause of death

**Heart Failure:**
- Heart can't pump effectively
- Often endpoint of other CVDs
- Major cause of hospitalization

**Hypertension:**
- Affects 1.3 billion people
- "Silent killer" - often no symptoms
- Damages blood vessels and organs

**Risk Factors:**

**Modifiable Behavioral:**
| Factor | Population Attributable Fraction |
|--------|--------------------------------|
| Tobacco | ~10% of CVD deaths |
| Unhealthy diet | ~30% of CVD deaths |
| Physical inactivity | ~5% of CVD deaths |
| Harmful alcohol | ~5% of CVD deaths |

**Modifiable Metabolic:**
| Factor | Prevalence | CVD Risk |
|--------|-----------|----------|
| Hypertension | 1.3 billion | 2-4x |
| Diabetes | 460 million | 2-4x |
| Dyslipidemia | Widespread | 2-3x |
| Obesity | 650 million | 1.5-2x |

**Non-Modifiable:**
- Age
- Sex (males at higher risk, but CVD #1 killer of women)
- Family history
- Ethnicity

**Prevention Strategies:**

**Primordial Prevention:**
- Prevent risk factor development
- Policy and environment changes
- Health promotion

**Primary Prevention:**
- Risk factor modification
- Healthy lifestyle
- Medication for high-risk

**Secondary Prevention:**
- After CVD event
- Prevent recurrence
- Medications, rehabilitation

**Cost-Effective Interventions:**
- Tobacco control policies
- Salt reduction
- Polypill for high-risk
- Aspirin for acute MI
- Blood pressure control`,
      keyTerms: [
        { term: 'ischemic heart disease', definition: 'Heart disease caused by reduced blood flow due to blocked coronary arteries', pronunciation: 'is-KEE-mik' },
        { term: 'atherosclerosis', definition: 'Buildup of fatty deposits in artery walls, causing narrowing', pronunciation: 'ath-er-oh-skler-OH-sis' },
        { term: 'hypertension', definition: 'High blood pressure, typically >140/90 mmHg', pronunciation: 'hy-per-TEN-shun' },
        { term: 'primordial prevention', definition: 'Preventing risk factors from developing in the first place' },
      ],
      analogies: [
        'Atherosclerosis is like rust building up in pipes - at first there\'s no problem, but eventually flow gets restricted.',
      ],
    },
    3: {
      level: 3,
      summary: 'CVD pathophysiology centers on atherosclerosis with inflammatory and thrombotic complications. Risk assessment using validated tools guides primary prevention, while secondary prevention requires comprehensive pharmacotherapy and lifestyle modification. Global control requires population and individual-level approaches.',
      explanation: `Cardiovascular disease represents the end result of pathophysiological processes developing over decades, with opportunities for intervention at multiple stages.

**Pathophysiology:**

**Atherosclerosis Development:**
1. Endothelial dysfunction (earliest change)
2. Lipid accumulation in intima
3. Inflammatory cell recruitment
4. Foam cell and fatty streak formation
5. Fibrous plaque development
6. Plaque progression and complications

**Acute Events:**
- Plaque rupture or erosion
- Thrombosis
- Acute vessel occlusion
- Tissue ischemia/infarction

**Hemodynamic Consequences:**
- Myocardial ischemia (angina, MI)
- Heart failure (systolic, diastolic)
- Arrhythmias
- Cerebral ischemia (stroke, TIA)

**Risk Assessment:**

**Global Risk Scores:**
| Tool | Population | Variables |
|------|-----------|-----------|
| Framingham | US, adapted | Age, sex, TC, HDL, BP, smoking, diabetes |
| SCORE | Europe | Age, sex, TC, BP, smoking |
| ASCVD Risk Calculator | US | Age, sex, TC, HDL, BP, diabetes, smoking |
| WHO/ISH Charts | Global | Age, sex, TC, BP, smoking, diabetes |

**Risk Stratification:**
| 10-Year CVD Risk | Category | Recommendation |
|------------------|----------|----------------|
| <5% | Low | Lifestyle advice |
| 5-10% | Moderate | Intensive lifestyle |
| 10-20% | High | Consider medication |
| >20% | Very high | Medication indicated |

**Primary Prevention Evidence:**

**Lifestyle:**
| Intervention | Effect on CVD |
|-------------|---------------|
| Mediterranean diet | 30% RRR |
| DASH diet | BP reduction |
| Exercise (150 min/week) | 20-30% RRR |
| Smoking cessation | 50% RRR within 1-2 years |
| Weight loss (10%) | Improved risk factors |

**Pharmacotherapy:**
| Medication | Indication | Effect |
|------------|-----------|--------|
| Statins | High risk | 25-30% RRR per mmol/L LDL reduction |
| Antihypertensives | HTN | 20% RRR per 10 mmHg reduction |
| Aspirin | Very high risk only | Benefit/bleed balance |

**Secondary Prevention:**

**Post-MI Standard of Care:**
- Dual antiplatelet therapy (DAPT)
- High-intensity statin
- ACE inhibitor/ARB
- Beta-blocker
- Cardiac rehabilitation

**Targets:**
| Parameter | Goal |
|-----------|------|
| LDL-C | <70 mg/dL (<1.8 mmol/L) |
| Blood pressure | <130/80 mmHg |
| HbA1c (diabetics) | <7% |

**Global CVD Programs:**

**WHO HEARTS:**
Technical package for CVD management:
- Healthy-lifestyle counseling
- Evidence-based protocols
- Access to essential medicines
- Risk-based charts
- Team-based care
- Systems for monitoring

**RESOLVE to SAVE LIVES:**
- Salt reduction
- Tobacco control
- Hypertension control
- Focus on LMICs`,
      keyTerms: [
        { term: 'endothelial dysfunction', definition: 'Impaired function of blood vessel lining, early step in atherosclerosis', pronunciation: 'en-doh-THEE-lee-al' },
        { term: 'ASCVD', definition: 'Atherosclerotic Cardiovascular Disease - includes IHD and stroke' },
        { term: 'HEARTS', definition: 'WHO technical package for cardiovascular disease management in primary care' },
        { term: 'cardiac rehabilitation', definition: 'Supervised program of exercise and education after cardiac events' },
      ],
      clinicalNotes: 'Assess CVD risk using appropriate tools for your setting. Treat to target for lipids and blood pressure. Ensure all post-MI patients receive optimal secondary prevention. Refer for cardiac rehabilitation.',
    },
    4: {
      level: 4,
      summary: 'CVD epidemiology reveals shifting global patterns with rising burden in LMICs. Evidence-based interventions span population policy approaches and clinical management, with implementation gaps requiring health systems strengthening and integration with primary health care.',
      explanation: `**Epidemiological Analysis:**

**Geographic Patterns:**
- Highest rates: Central Asia, Eastern Europe
- Lowest rates: High-income Asia-Pacific
- Rising: Sub-Saharan Africa, South Asia
- Declining: Western Europe, Australasia

**Temporal Trends:**
- 50% decline in age-adjusted CVD mortality in HICs (1980-2010)
- Contributions: Risk factor reduction (44%), treatment (47%)
- Reversal in some groups (obesity epidemic)
- LMICs: Variable trends, often rising

**Health Equity:**
| Dimension | Pattern |
|-----------|---------|
| Socioeconomic | Strong inverse gradient |
| Race/ethnicity | Disparities in outcomes |
| Gender | Women undertreated |
| Geography | Rural disadvantage |

**Pathophysiology - Advanced:**

**Inflammation:**
- hs-CRP as risk marker
- IL-6, TNF-alpha in atherogenesis
- Colchicine trials (COLCOT, LoDoCo2)
- Residual inflammatory risk

**Lipid Biology:**
- LDL-C lowering: "Lower is better"
- Lp(a) as risk factor
- Triglyceride-rich lipoproteins
- Novel targets (PCSK9, ANGPTL3)

**Thrombosis:**
- Platelet activation pathways
- Coagulation cascade
- Factor XI inhibition (emerging)
- Dual pathway inhibition

**Evidence Update:**

**Primary Prevention Trials:**
| Trial | Intervention | Result |
|-------|-------------|--------|
| JUPITER | Statin in elevated CRP | Benefit in selected population |
| HOPE-3 | Statin + BP lowering | Benefit in intermediate risk |
| ASCEND | Aspirin in diabetes | Harm/benefit balance |
| ASPREE | Aspirin in elderly | No benefit, increased bleeding |

**Secondary Prevention:**
| Trial | Intervention | Result |
|-------|-------------|--------|
| FOURIER | Evolocumab (PCSK9i) | 15% RRR |
| REDUCE-IT | Icosapent ethyl | 25% RRR |
| COMPASS | Rivaroxaban + ASA | 24% RRR |
| SELECT | Semaglutide in obesity | 20% RRR |

**Implementation Challenges:**

**Hypertension Control:**
- Rule of halves (awareness, treatment, control)
- Only ~20% controlled globally
- Improvement with health system interventions
- Team-based care models

**Medicine Access:**
- Essential medicines often unavailable
- Out-of-pocket costs barrier
- Polypill approaches
- Fixed-dose combinations

**Care Quality:**
- Guideline adherence gaps
- Clinical inertia
- Follow-up challenges
- Care coordination

**Policy Approaches:**

**Tobacco Control (MPOWER):**
- Monitor tobacco use
- Protect from smoke
- Offer help to quit
- Warn about dangers
- Enforce bans
- Raise taxes

**Salt Reduction:**
- Reformulation targets
- Consumer awareness
- Labeling requirements
- Monitoring sodium intake

**Urban Planning:**
- Active transport
- Green spaces
- Food environments
- Air quality`,
      keyTerms: [
        { term: 'residual inflammatory risk', definition: 'Cardiovascular risk persisting despite optimal lipid lowering, attributed to inflammation' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a) - genetically determined CVD risk factor', pronunciation: 'LP-little-a' },
        { term: 'clinical inertia', definition: 'Failure to intensify therapy when treatment targets not met' },
        { term: 'MPOWER', definition: 'WHO framework for tobacco control policies' },
      ],
      clinicalNotes: 'Consider residual risk beyond LDL. Assess medication adherence systematically. Use team-based care for hypertension. Engage in quality improvement. Advocate for policy change.',
    },
    5: {
      level: 5,
      summary: 'CVD represents a complex disease system shaped by genetics, environment, and health care, requiring precision prevention approaches, novel therapeutics targeting inflammation and metabolism, and transformation of health systems for chronic disease management within broader policy frameworks addressing commercial and structural determinants.',
      explanation: `**Systems Perspective:**

**Complex Disease Model:**
- Multiple interacting causal pathways
- Gene-environment interactions
- Developmental origins (DOHaD)
- Social-biological embedding

**Precision Cardiovascular Prevention:**
- Genetic risk scores
- Imaging biomarkers (CAC scoring)
- Novel circulating biomarkers
- Integration with clinical factors

**Life Course Approach:**
- Fetal programming (birth weight, maternal nutrition)
- Childhood risk factors
- Cumulative exposure
- Critical periods

**Advanced Science:**

**Genetics:**
| Discovery | Implication |
|-----------|-------------|
| PCSK9 mutations | PCSK9 inhibitors |
| Lp(a) | siRNA therapies |
| ANGPTL3 | Monoclonal antibodies |
| APOC3 | Antisense oligonucleotides |
| Protective variants | Drug targets |

**Inflammation Therapeutics:**
| Approach | Evidence |
|----------|----------|
| IL-1beta blockade (canakinumab) | CANTOS - positive, not approved |
| Colchicine | COLCOT, LoDoCo2 - positive |
| Methotrexate | CIRT - negative |
| NLRP3 inhibition | Development |

**Metabolic Therapies:**
- GLP-1 agonists (cardiovascular benefits)
- SGLT2 inhibitors (HF benefits)
- Novel weight loss agents
- Integrative cardiometabolic approach

**Research Frontiers:**

**Mechanisms:**
- Clonal hematopoiesis (CHIP) and CVD
- Gut microbiome (TMAO)
- Epigenetic mechanisms
- Cellular senescence

**Technologies:**
- AI in risk prediction
- Wearable monitoring
- Point-of-care diagnostics
- Digital therapeutics

**Clinical Trials:**
- Platform and adaptive designs
- Pragmatic trials
- Implementation trials
- Decentralized trials

**Health Systems Research:**

**Models of Care:**
- Community-based prevention
- Primary care integration
- Specialty-primary care linkage
- Self-management support

**Implementation Science:**
- Context-mechanism-outcome
- Spread and scale
- Sustainability
- Deadoption of low-value care

**Digital Health:**
- Remote monitoring
- Telehealth
- Decision support
- Patient engagement

**Political Economy:**

**Commercial Determinants:**
- Food industry role
- Tobacco industry interference
- Pharmaceutical industry influence
- Digital health governance

**Global Governance:**
- WHO frameworks
- UN HLM commitments
- Trade agreements
- Civil society advocacy

**Equity:**
- Social determinants
- Structural racism
- Gender equity
- Geographic justice

**Future Trajectories:**

**Optimistic:**
- Precision prevention achieved
- Novel therapeutics accessible
- Health systems transformed
- 25% mortality reduction achieved

**Concerning:**
- Obesity epidemic accelerates
- Climate impacts worsen
- Implementation gaps persist
- Inequities widen

**Transformation Pathways:**
- Integrate CVD in PHC
- Address commercial determinants
- Invest in prevention
- Achieve universal health coverage`,
      keyTerms: [
        { term: 'clonal hematopoiesis of indeterminate potential', definition: 'Age-related accumulation of blood cell mutations linked to CVD risk', pronunciation: 'CHIP' },
        { term: 'GLP-1 agonists', definition: 'Glucagon-like peptide-1 receptor agonists with cardiometabolic benefits' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide - gut microbiome-derived metabolite linked to CVD' },
        { term: 'CAC', definition: 'Coronary artery calcium - imaging marker of subclinical atherosclerosis' },
      ],
      clinicalNotes: 'Consider genetic risk in clinical decisions. Use cardiometabolic approaches. Engage with emerging evidence. Participate in implementation research. Advocate for systems change.',
    },
  },

  media: [
    {
      id: 'cvd-global-map',
      type: 'diagram',
      filename: 'cvd-mortality-global.svg',
      title: 'Global Cardiovascular Disease Mortality',
      description: 'World map showing CVD death rates by country',
    },
  ],

  citations: [
    {
      id: 'gbd-cvd',
      type: 'article',
      title: 'Global Burden of Cardiovascular Diseases',
      source: 'Journal of the American College of Cardiology',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'ncd-epidemic', targetType: 'topic', relationship: 'parent', label: 'NCD Epidemic' },
    { targetId: 'diabetes-global', targetType: 'topic', relationship: 'related', label: 'Diabetes Global' },
  ],

  tags: {
    systems: ['cardiovascular', 'public-health'],
    topics: ['global-health', 'cardiovascular-disease'],
    keywords: ['CVD', 'heart disease', 'stroke', 'hypertension', 'atherosclerosis'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
