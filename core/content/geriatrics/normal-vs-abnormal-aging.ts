/**
 * Normal vs Abnormal Aging - Educational Content
 *
 * Helps older adults and caregivers understand the difference between
 * typical age-related changes and signs that warrant medical attention.
 */

import { EducationalContent } from '../types';

export const normalVsAbnormalAging: EducationalContent = {
  id: 'geriatric-normal-vs-abnormal-aging',
  type: 'concept',
  name: 'Normal vs Abnormal Aging',
  alternateNames: ['Healthy Aging', 'Age-Related Changes', 'When to Worry About Aging'],

  levels: {
    1: {
      level: 1,
      summary: 'Some changes are a normal part of getting older, while others might be signs of a health problem that a doctor should check.',
      explanation: `As we get older, our bodies change. Some changes are perfectly normal and happen to everyone. Other changes might mean something is wrong and needs a doctor's attention.

**Normal Changes That Happen to Most People**

- Taking a little longer to remember names (but still remembering them)
- Needing reading glasses
- Hair turning gray
- Moving a bit slower than before
- Needing to use the bathroom more often at night
- Taking longer to heal from small cuts

**Changes That Need a Doctor's Attention**

- Forgetting recent conversations or getting lost in familiar places
- Sudden vision changes or seeing flashes of light
- Falling frequently or feeling very unsteady
- Losing a lot of weight without trying
- Feeling sad or hopeless for weeks
- Pain that does not go away

**The Key Difference**

Normal aging happens gradually and does not stop you from doing your daily activities. When changes happen suddenly, get much worse quickly, or make it hard to take care of yourself, it is time to see a doctor.

Remember: Getting older does not mean you have to feel bad. Many problems can be treated when found early.`,
      keyTerms: [
        { term: 'normal aging', definition: 'Changes that happen to almost everyone as they get older' },
        { term: 'symptoms', definition: 'Signs that something might be wrong with your health' },
        { term: 'gradually', definition: 'Happening slowly over time' },
      ],
      analogies: [
        'Normal aging is like a car getting older - it might not be as shiny and might make a few more sounds, but it still runs well. A problem is when the car suddenly stops working or makes a loud new noise.',
        'Think of aging like seasons changing - leaves slowly changing color is normal, but a tree losing all its leaves overnight would be unusual.',
      ],
      examples: [
        'Taking a moment to remember where you put your keys is normal. Getting lost while driving to a store you have been going to for years is not normal.',
        'Needing a bit more light to read is normal. Suddenly seeing dark spots or flashes needs immediate attention.',
      ],
    },
    2: {
      level: 2,
      summary: 'Distinguishing normal age-related physiological changes from pathological conditions helps identify when medical evaluation is needed and prevents both over-concern about normal changes and dismissal of treatable conditions.',
      explanation: `## Understanding the Aging Process

Aging affects every body system, but knowing what is typical helps identify concerning changes early.

**Normal Cardiovascular Changes**
- Slight increase in blood pressure with age
- Reduced maximum heart rate during exercise
- Heart working harder to pump same amount of blood

**Concerning Signs**
- Chest pain or pressure
- Severe shortness of breath with mild activity
- Swelling in legs that is new or worsening
- Irregular heartbeat that comes and goes

**Normal Brain and Memory Changes**
- Processing speed slows down
- Takes longer to learn new information
- Occasional word-finding difficulty
- Multitasking becomes harder

**Concerning Signs**
- Getting lost in familiar places
- Asking the same question repeatedly
- Difficulty following conversations
- Personality changes
- Problems managing finances or medications

**Normal Musculoskeletal Changes**
- Gradual loss of height (up to 2 inches over lifetime)
- Some joint stiffness, especially in morning
- Reduced muscle mass and strength
- Takes longer to recover from exercise

**Concerning Signs**
- Severe back pain, especially if sudden
- Fractures from minor falls
- Joint pain that limits daily activities
- Significant weakness that develops quickly

**Normal Sensory Changes**
- Need for brighter light to read
- Difficulty hearing in noisy environments
- Reduced sense of taste and smell

**Concerning Signs**
- Sudden vision loss
- Flashing lights or new floaters
- Sudden hearing loss
- Complete loss of taste or smell

**When to Seek Medical Evaluation**

See a doctor if changes:
- Happen suddenly (over days to weeks)
- Significantly impact daily life
- Are accompanied by other new symptoms
- Cause you or family members concern`,
      keyTerms: [
        { term: 'physiological', definition: 'Related to normal body functions', pronunciation: 'fiz-ee-oh-LOJ-ih-kul' },
        { term: 'pathological', definition: 'Related to disease or abnormal conditions', pronunciation: 'path-oh-LOJ-ih-kul' },
        { term: 'cognitive', definition: 'Related to thinking, memory, and mental processes', pronunciation: 'KOG-nih-tiv' },
        { term: 'musculoskeletal', definition: 'Related to muscles and bones', pronunciation: 'MUS-kyoo-loh-SKEL-eh-tul' },
      ],
      analogies: [
        'Normal aging is like a well-maintained older home - it shows its age but functions well. Problems are like a leaky roof or cracked foundation - they need repair to prevent further damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'Normal aging involves predictable physiological changes across organ systems due to cellular senescence and reduced functional reserve, while pathological aging involves disease processes that exceed normal variation and benefit from medical intervention.',
      explanation: `## Biology of Normal Aging

**Cellular Mechanisms**
- Telomere shortening with each cell division
- Accumulation of senescent cells
- Mitochondrial dysfunction
- Oxidative stress and DNA damage
- Reduced stem cell function

**Cardiovascular System**

*Normal Changes*
- Arterial stiffening (increased pulse pressure)
- Left ventricular wall thickening
- Reduced beta-adrenergic responsiveness
- Decreased maximum cardiac output
- Baroreceptor sensitivity reduction

*Pathological Indicators*
- Symptomatic coronary artery disease
- Heart failure with reduced or preserved EF
- Atrial fibrillation with symptoms
- Syncope or presyncope
- Orthostatic hypotension with falls

**Neurological System**

*Normal Changes*
- Brain volume reduction (0.5-1% per year after 60)
- Slowed processing speed
- Reduced working memory capacity
- White matter changes on imaging
- Mild word-finding difficulty

*Pathological Indicators*
- Impairment in instrumental ADLs
- Progressive memory loss affecting function
- Behavioral or personality changes
- Aphasia or apraxia
- Visuospatial disorientation

**Renal System**

*Normal Changes*
- GFR decline (~1 mL/min/year after 40)
- Reduced concentrating ability
- Decreased renin-aldosterone responsiveness
- Nocturia (1-2 times nightly)

*Pathological Indicators*
- Rapid GFR decline (>3 mL/min/year)
- Proteinuria or hematuria
- Severe nocturia (>3 times)
- Electrolyte abnormalities

**Immune System (Immunosenescence)**

*Normal Changes*
- Thymic involution
- Reduced naive T-cell production
- Increased inflammatory markers (inflammaging)
- Reduced vaccine response

*Pathological Indicators*
- Recurrent serious infections
- Unexplained weight loss
- Persistent fevers
- New autoimmune phenomena

**Endocrine System**

*Normal Changes*
- Reduced growth hormone and IGF-1
- Decreased testosterone (men) and estrogen (women)
- Reduced thyroid hormone clearance
- Impaired glucose tolerance

*Pathological Indicators*
- Symptomatic hypothyroidism or hyperthyroidism
- Diabetes mellitus with complications
- Osteoporosis with fractures
- Severe hypogonadal symptoms

**Functional Reserve Concept**

Normal aging reduces the body's reserve capacity - the ability to respond to stress. Young adults have significant reserve; older adults operate closer to threshold. This explains why:
- Illness causes more severe symptoms
- Recovery takes longer
- Multiple small stressors can cause decompensation`,
      keyTerms: [
        { term: 'senescence', definition: 'The biological process of cellular aging and deterioration', pronunciation: 'seh-NESS-ens' },
        { term: 'functional reserve', definition: 'The extra capacity of organs to respond to increased demands or stress' },
        { term: 'immunosenescence', definition: 'Age-related decline in immune system function' },
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation associated with aging' },
        { term: 'baroreceptor', definition: 'Sensors that detect blood pressure changes and help regulate cardiovascular response' },
      ],
      clinicalNotes: 'When evaluating elderly patients, consider that "normal" lab values may differ. A creatinine of 1.0 in an 85-year-old woman likely represents significant renal impairment. Use age-adjusted GFR calculations.',
    },
    4: {
      level: 4,
      summary: 'Distinguishing physiological aging from geriatric syndromes and disease requires understanding age-related changes in homeostatic mechanisms, the concept of frailty as reduced resilience, and the atypical presentation of illness in older adults.',
      explanation: `## Advanced Concepts in Aging Physiology

### Homeostenosis

The progressive reduction in homeostatic capacity with age:
- Narrower range of compensatory responses
- Longer time to return to baseline after perturbation
- Increased vulnerability to stressors

**Clinical Implications**
- Dehydration occurs more readily (reduced thirst, impaired ADH response)
- Temperature dysregulation (hypothermia/hyperthermia risk)
- Glucose homeostasis impairment
- Blood pressure lability

### Frailty Phenotype (Fried Criteria)

Physical frailty defined by 3+ of:
1. Unintentional weight loss (>10 lbs/year)
2. Self-reported exhaustion
3. Weakness (grip strength)
4. Slow walking speed
5. Low physical activity

**Pre-frail**: 1-2 criteria
**Robust**: 0 criteria

Frailty predicts:
- Falls, hospitalization, disability
- Surgical complications
- Mortality independent of comorbidities

### Atypical Disease Presentation

Older adults often present differently than younger patients:

**Infection**
- May lack fever (present in <50% of elderly with serious infection)
- Confusion may be sole presenting sign
- Reduced inflammatory markers despite severe infection

**Myocardial Infarction**
- Silent MI common (up to 30% in elderly)
- Dyspnea or confusion may predominate
- Classic chest pain in minority

**Acute Abdomen**
- Reduced pain perception
- Delayed presentation
- Higher perforation rates

**Hyperthyroidism**
- "Apathetic thyrotoxicosis" - weakness, weight loss
- Atrial fibrillation may be primary presentation
- Classic symptoms often absent

### Geriatric Syndromes

Complex conditions resulting from multiple contributing factors:

**Delirium**
- Acute confusional state
- Predisposing factors (dementia, sensory impairment, dehydration)
- Precipitating factors (infection, medications, surgery)
- Often first sign of serious illness

**Falls**
- Multifactorial (gait, balance, vision, medications, environment)
- May indicate underlying illness
- Assessment requires comprehensive evaluation

**Incontinence**
- Not a normal consequence of aging
- Reversible causes common (DRIP: Delirium, Restricted mobility, Infection, Pharmaceuticals)

**Functional Decline**
- Often heralds acute illness
- May precede other symptoms by days
- Sensitive indicator of health change

### Assessment Approach

**Comprehensive Geriatric Assessment (CGA)**
- Medical assessment
- Functional status (ADLs, IADLs)
- Cognitive and mental health
- Social and environmental factors
- Goals and values

**Screening Tools**
- Mini-Cog (cognitive screening)
- Timed Up and Go (mobility)
- PHQ-2/PHQ-9 (depression)
- Hearing Handicap Inventory
- ADL/IADL assessments`,
      keyTerms: [
        { term: 'homeostenosis', definition: 'Age-related narrowing of homeostatic range and reduced adaptive capacity' },
        { term: 'frailty phenotype', definition: 'Clinical syndrome of vulnerability characterized by weight loss, weakness, exhaustion, slowness, and low activity' },
        { term: 'atypical presentation', definition: 'Disease manifestation that differs from classic textbook descriptions, common in elderly' },
        { term: 'geriatric syndrome', definition: 'Multifactorial conditions common in elderly not attributable to single disease' },
        { term: 'comprehensive geriatric assessment', definition: 'Multidimensional evaluation of older adults to develop coordinated care plan' },
      ],
      clinicalNotes: 'The "1-2-3 Rule" for evaluating elderly patients: If they are 1) not eating, 2) not talking as usual, or 3) not getting out of bed - something is seriously wrong regardless of vital signs or lab values.',
    },
    5: {
      level: 5,
      summary: 'Differentiating normal aging from pathology requires integrating molecular geroscience, validated phenotyping tools, biomarkers of aging, and evidence-based frameworks while recognizing the heterogeneity of aging trajectories and avoiding both therapeutic nihilism and overtreatment.',
      explanation: `## Molecular Geroscience and Clinical Translation

### Hallmarks of Aging

Nine proposed cellular hallmarks:
1. Genomic instability
2. Telomere attrition
3. Epigenetic alterations
4. Loss of proteostasis
5. Deregulated nutrient sensing
6. Mitochondrial dysfunction
7. Cellular senescence
8. Stem cell exhaustion
9. Altered intercellular communication

**Clinical Relevance**
- Senolytic drugs targeting senescent cells in trials
- mTOR inhibitors (rapamycin) studied for aging
- NAD+ precursors under investigation
- Metformin in TAME trial for aging

### Biomarkers of Biological Age

**Epigenetic Clocks**
- Horvath clock (multi-tissue)
- Hannum clock (blood-based)
- GrimAge (mortality predictor)
- PhenoAge (phenotypic age)

**Other Biomarkers**
- Telomere length (limited utility)
- Inflammatory markers (IL-6, CRP)
- GDF-15 (mortality predictor)
- Cystatin C (better than creatinine for renal function)

### Validated Assessment Instruments

**Frailty Indices**
- Clinical Frailty Scale (9-point)
- Frailty Index (deficit accumulation model)
- FRAIL scale (5-item screening)
- Edmonton Frail Scale

**Functional Assessment**
- Katz ADL Index
- Lawton IADL Scale
- Physical Performance Battery (SPPB)
- Gait speed (single best predictor)

**Cognitive Screening**
- Mini-Cog
- Montreal Cognitive Assessment (MoCA)
- MMSE (less sensitive to MCI)
- AD8 (informant-based)

### Heterogeneity of Aging

**Successful vs Usual vs Pathological Aging**

*Successful Aging (Rowe & Kahn)*
- Low disease/disability probability
- High cognitive/physical function
- Active engagement with life

*Usual Aging*
- Non-pathological but non-optimal
- Some functional decline
- Opportunity for intervention

*Pathological Aging*
- Disease-driven decline
- Exceeds normal trajectory
- Requires treatment

**Compression of Morbidity**
- Goal: Shorten period of morbidity at end of life
- Extend healthspan, not just lifespan
- Preventive interventions maintain function

### Clinical Decision-Making Framework

**Age Alone Is Not a Contraindication**
- Biological vs chronological age
- Individual trajectory matters
- Functional status > age for prognosis

**Geriatric-Specific Evidence**
- Limited RCT data for >80 years
- Observational data suggests benefit continues
- Shared decision-making essential

**Time-to-Benefit Concept**
- Interventions require time to show benefit
- Compare to estimated life expectancy
- Consider patient goals and values

**De-prescribing and Optimization**
- Review benefit-risk continuously
- Consider functional trajectory
- Prioritize medications aligned with goals

### Research Considerations

**OAIC Network Studies**
- Interventions targeting multiple systems
- Exercise, cognitive training, social engagement
- LIFE study: Exercise prevents disability

**Geroscience Hypothesis**
- Targeting aging mechanisms may prevent multiple diseases
- Pilot studies of metformin, rapamycin, senolytics
- Need validated biomarkers for clinical trials

**Challenges in Geriatric Research**
- Exclusion of oldest-old from trials
- Multimorbidity complicates interpretation
- Functional outcomes vs disease-specific endpoints
- Caregiver and quality of life outcomes`,
      keyTerms: [
        { term: 'geroscience', definition: 'Field studying biological mechanisms of aging to prevent age-related disease' },
        { term: 'senolytic', definition: 'Drug that selectively eliminates senescent cells' },
        { term: 'epigenetic clock', definition: 'DNA methylation-based predictor of biological age' },
        { term: 'compression of morbidity', definition: 'Goal of shortening the period of illness/disability at end of life' },
        { term: 'time-to-benefit', definition: 'Duration required for an intervention to produce meaningful clinical benefit' },
        { term: 'deficit accumulation model', definition: 'Frailty index approach counting accumulated health deficits' },
      ],
      clinicalNotes: `Key practice points:
1. Gait speed <0.8 m/s predicts adverse outcomes and can guide intervention intensity
2. Consider stopping cancer screening when life expectancy <10 years (USPSTF)
3. Frailty index >0.25 indicates high-risk surgical candidate
4. Always assess whether functional decline precedes or follows new symptoms
5. CGA in hospitalized elderly reduces mortality and nursing home placement (Cochrane)
6. Avoid ageism - many robust 85-year-olds benefit from aggressive treatment`,
    },
  },

  media: [
    {
      id: 'normal-abnormal-aging-chart',
      type: 'diagram',
      filename: 'normal-vs-abnormal-aging-chart.svg',
      title: 'Normal vs Concerning Changes by Body System',
      description: 'Visual guide comparing typical age-related changes with warning signs',
    },
  ],

  citations: [
    {
      id: 'fried-frailty-2001',
      type: 'article',
      title: 'Frailty in older adults: evidence for a phenotype',
      authors: ['Fried, L.P.', 'Tangen, C.M.', 'Walston, J.', 'et al.'],
      source: 'Journals of Gerontology: Medical Sciences',
      url: 'https://doi.org/10.1093/gerona/56.3.M146',
    },
    {
      id: 'lopez-otin-2013',
      type: 'article',
      title: 'The hallmarks of aging',
      authors: ['Lopez-Otin, C.', 'Blasco, M.A.', 'Partridge, L.', 'Serrano, M.', 'Kroemer, G.'],
      source: 'Cell',
      url: 'https://doi.org/10.1016/j.cell.2013.05.039',
    },
  ],

  crossReferences: [
    { targetId: 'geriatric-sensory-changes', targetType: 'concept', relationship: 'related', label: 'Sensory Changes with Aging' },
    { targetId: 'geriatric-dementia-types', targetType: 'concept', relationship: 'related', label: 'Dementia Types' },
    { targetId: 'geriatric-functional-assessment', targetType: 'concept', relationship: 'related', label: 'Functional Assessment' },
  ],

  tags: {
    systems: ['geriatrics', 'aging'],
    topics: ['normal aging', 'pathology', 'frailty', 'geriatric assessment'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default normalVsAbnormalAging;
