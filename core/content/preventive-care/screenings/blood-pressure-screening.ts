/**
 * Blood Pressure Screening
 *
 * Comprehensive education on hypertension screening and management
 * based on USPSTF guidelines and major medical society recommendations.
 */

import { EducationalContent } from '../../types';

export const BLOOD_PRESSURE_SCREENING: EducationalContent = {
  id: 'concept-blood-pressure-screening',
  type: 'concept',
  name: 'Blood Pressure Screening',
  alternateNames: ['Hypertension screening', 'BP screening', 'High blood pressure screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Blood pressure screening checks the force of blood in your arteries to find high blood pressure before it causes problems.',
      explanation: `Blood pressure is how hard your blood pushes against your artery walls. High blood pressure (hypertension) can damage your heart, brain, and kidneys over time.

**Why Get Checked:**
- High blood pressure usually has NO symptoms
- Called the "silent killer"
- Can lead to heart attack, stroke, kidney disease
- Treatment can prevent these problems

**How Blood Pressure is Measured:**
- A cuff wraps around your arm
- The cuff inflates and slowly releases
- Two numbers are recorded

**Understanding the Numbers:**
- **Top number (systolic)**: Pressure when heart beats
- **Bottom number (diastolic)**: Pressure between beats
- Written as: systolic/diastolic (example: 120/80)

**Blood Pressure Categories:**
| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | <120 | <80 |
| Elevated | 120-129 | <80 |
| High (Stage 1) | 130-139 | 80-89 |
| High (Stage 2) | 140+ | 90+ |

**How Often to Check:**
- Every doctor visit
- At least once a year for adults
- More often if elevated

**How to Lower Blood Pressure:**
- Eat less salt
- Exercise regularly
- Maintain healthy weight
- Limit alcohol
- Take medications if prescribed`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against your artery walls' },
        { term: 'hypertension', definition: 'High blood pressure that can damage your organs over time' },
        { term: 'systolic', definition: 'The top number - pressure when your heart beats' },
        { term: 'diastolic', definition: 'The bottom number - pressure when your heart rests' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a garden hose. Too much pressure over time can damage the hose, just like high blood pressure damages your arteries.',
      ],
      examples: [
        'Linda had no symptoms but discovered high blood pressure at a routine checkup. With lifestyle changes and medication, she prevented a stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood pressure screening identifies hypertension, a major modifiable risk factor for cardiovascular disease, stroke, and chronic kidney disease, enabling early intervention through lifestyle modification and pharmacotherapy.',
      explanation: `Hypertension affects nearly half of US adults and is a leading cause of preventable death. Screening is simple, inexpensive, and enables interventions that significantly reduce cardiovascular events.

**Screening Recommendations (USPSTF Grade A):**
- Screen all adults ≥18 years
- Optimal interval: Annually
- Office measurement with confirmation

**Blood Pressure Classification (ACC/AHA 2017):**

| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | <120 | and <80 |
| Elevated | 120-129 | and <80 |
| Stage 1 HTN | 130-139 | or 80-89 |
| Stage 2 HTN | ≥140 | or ≥90 |
| Hypertensive crisis | >180 | and/or >120 |

**Proper Measurement Technique:**
1. Rest 5 minutes before measurement
2. No caffeine or smoking for 30 minutes
3. Empty bladder
4. Proper cuff size (too small = falsely high)
5. Arm supported at heart level
6. Feet flat on floor
7. No talking during measurement
8. Average of 2-3 readings

**Confirming Diagnosis:**
- Single elevated reading is not enough
- Repeat measurements on separate occasions
- Consider ambulatory (24-hour) or home monitoring
- Rule out white coat hypertension

**White Coat vs Masked Hypertension:**
- **White coat**: High in office, normal at home
- **Masked**: Normal in office, high at home
- Both require out-of-office confirmation

**Target Blood Pressure:**
- General population: <130/80 mmHg
- Higher targets may be appropriate for elderly or frail

**Treatment Approach:**

*Lifestyle Modifications (all patients):*
- DASH diet (fruits, vegetables, low-fat dairy)
- Sodium restriction (<2300 mg/day, ideally <1500)
- Regular exercise (150 min/week moderate)
- Weight loss if overweight
- Alcohol moderation (≤2 drinks/day men, ≤1 women)

*Medication (if lifestyle insufficient):*
- Thiazide diuretics
- ACE inhibitors or ARBs
- Calcium channel blockers
- Beta-blockers (specific indications)`,
      keyTerms: [
        { term: 'white coat hypertension', definition: 'Blood pressure that is high in the clinic but normal at home' },
        { term: 'masked hypertension', definition: 'Blood pressure that is normal in the clinic but high at home' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension - eating pattern proven to lower blood pressure' },
        { term: 'ambulatory blood pressure monitoring', definition: '24-hour blood pressure monitoring with a portable device' },
      ],
      analogies: [
        'White coat hypertension is like getting nervous during a test - your score (blood pressure) is higher than your true ability.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypertension diagnosis requires standardized measurement techniques and out-of-office confirmation, with treatment intensity guided by cardiovascular risk assessment, target organ damage evaluation, and individualized blood pressure targets.',
      explanation: `**Measurement Standardization:**

*Office Blood Pressure:*
- Automated office blood pressure (AOBP) preferred
- Patient alone in room
- Multiple readings averaged
- Eliminates white coat effect in 30-40%

*Ambulatory Blood Pressure Monitoring (ABPM):*
- Gold standard for diagnosis
- 24-hour monitoring
- Captures nocturnal dipping
- Mean daytime, nighttime, 24-hour values

*Home Blood Pressure Monitoring (HBPM):*
- Morning and evening measurements
- 7-day average
- Validated device required

**Diagnostic Thresholds:**

| Setting | Hypertension Threshold |
|---------|------------------------|
| Office | ≥130/80 |
| ABPM (24-hour mean) | ≥125/75 |
| ABPM (daytime mean) | ≥130/80 |
| ABPM (nighttime mean) | ≥110/65 |
| HBPM (average) | ≥130/80 |

**Blood Pressure Phenotypes:**

| Phenotype | Office | Out-of-Office | Prevalence | Risk |
|-----------|--------|---------------|------------|------|
| Normotension | Normal | Normal | - | Lowest |
| White coat HTN | High | Normal | 15-30% | Intermediate |
| Masked HTN | Normal | High | 10-15% | High |
| Sustained HTN | High | High | - | Highest |

**Secondary Hypertension:**

*When to Suspect:*
- Age <30 without risk factors
- Resistant hypertension (≥3 drugs)
- Abrupt onset or worsening
- Hypokalemia
- Abnormal kidney function

*Causes:*
- Primary aldosteronism (most common)
- Renovascular disease
- Pheochromocytoma
- Obstructive sleep apnea
- Chronic kidney disease
- Thyroid disease
- Cushing syndrome

**Target Organ Damage Assessment:**

*Cardiac:*
- LVH on ECG or echocardiogram
- Heart failure
- Coronary artery disease

*Renal:*
- Elevated creatinine
- Albuminuria
- eGFR decline

*Vascular:*
- Peripheral artery disease
- Aortic disease

*Cerebral:*
- Prior stroke/TIA
- Cognitive impairment

**Treatment Initiation:**

| BP Category | No ASCVD, Risk <10% | ASCVD or Risk ≥10% |
|-------------|---------------------|-------------------|
| Elevated | Lifestyle | Lifestyle |
| Stage 1 | Lifestyle | Lifestyle + 1 drug |
| Stage 2 | Lifestyle + 1-2 drugs | Lifestyle + 2 drugs |

**First-Line Medications:**
- Thiazide/thiazide-like diuretics
- ACE inhibitors
- Angiotensin receptor blockers (ARBs)
- Dihydropyridine calcium channel blockers

**Special Populations:**
- Black patients: CCB or thiazide preferred first-line
- CKD with albuminuria: ACE or ARB required
- Heart failure: ACE/ARB, specific beta-blockers
- Diabetes: ACE or ARB preferred`,
      keyTerms: [
        { term: 'AOBP', definition: 'Automated office blood pressure; patient alone, multiple readings, reduces white coat effect' },
        { term: 'nocturnal dipping', definition: 'Normal 10-20% drop in BP during sleep; non-dipping associated with higher risk' },
        { term: 'resistant hypertension', definition: 'BP above goal despite 3 antihypertensive agents including a diuretic' },
        { term: 'primary aldosteronism', definition: 'Most common secondary cause of hypertension; excess aldosterone production' },
      ],
      clinicalNotes: 'Use AOBP or out-of-office monitoring to confirm diagnosis. Screen for secondary causes in young or resistant hypertension. Assess target organ damage at diagnosis. Individualize targets for elderly.',
    },
    4: {
      level: 4,
      summary: 'Hypertension management integrates evidence from SPRINT and other landmark trials, addressing intensive vs standard targets, resistant hypertension evaluation, and emerging device-based therapies while considering individual patient factors including frailty, orthostatic hypotension, and polypharmacy.',
      explanation: `**Landmark Trial Evidence:**

*SPRINT Trial:*
- Intensive target (<120 systolic) vs standard (<140)
- 25% reduction in CV events, 27% mortality reduction
- Higher rates of hypotension, syncope, AKI
- Excluded: Diabetes, prior stroke, eGFR <20

*Implications:*
- Target <130/80 for high-risk patients
- AOBP-based measurement
- Intensive control beneficial if tolerated
- Individualize for elderly/frail

*ACCORD-BP (Diabetes):*
- No significant CVD benefit from intensive control
- Higher adverse events
- Why guidelines less aggressive in diabetes

*SPS3 (Stroke):*
- Intensive control trended toward benefit
- Justified <130 target for secondary prevention

**Resistant Hypertension:**

*Definition:*
- BP above goal on ≥3 medications (including diuretic)
- Or controlled on ≥4 medications

*Pseudo-Resistance (Exclude First):*
- Poor adherence (most common)
- White coat effect
- Improper measurement technique
- Suboptimal drug dosing

*True Resistance Evaluation:*
1. Confirm with ABPM
2. Assess adherence (directly observed therapy, drug levels)
3. Screen for secondary causes
4. Optimize diuretic therapy
5. Add spironolactone (PATHWAY-2 trial)

**Primary Aldosteronism Screening:**

*Who to Screen:*
- Resistant hypertension
- Hypokalemia (spontaneous or diuretic-induced)
- Adrenal incidentaloma
- Early-onset hypertension
- Family history of early stroke

*Screening Test:*
- Aldosterone-to-renin ratio (ARR)
- ARR >30 with aldosterone >10 ng/dL suspicious
- Confirmatory testing required

**Device-Based Therapies:**

*Renal Denervation:*
- Catheter-based ablation of renal sympathetic nerves
- SPYRAL HTN-ON MED: Modest BP reduction
- SYMPLICITY HTN-3: Initial trial negative (patient selection issues)
- Role in resistant hypertension being redefined

*Baroreflex Activation:*
- Implanted device stimulates carotid baroreceptors
- FDA approved for resistant hypertension
- Limited use due to invasiveness

**Special Considerations:**

*Elderly Patients:*
- HYVET: Treatment beneficial even >80 years
- SPRINT subgroup: Intensive treatment beneficial ≥75
- But: Higher risk of falls, orthostatic hypotension
- Individualize targets (may accept <140/90)

*Orthostatic Hypotension:*
- Check standing BP in elderly, diabetics
- May limit treatment intensity
- Avoid excessive diuresis

*Frailty:*
- Assess functional status
- Less aggressive targets may be appropriate
- Quality of life considerations
- Deprescribing discussions

**Adherence Optimization:**

*Strategies:*
- Single-pill combinations
- Once-daily dosing
- Simplified regimens
- Home BP monitoring
- Patient education
- Team-based care

*Directly Observed Therapy:*
- For suspected non-adherence
- Dramatic BP drop confirms non-adherence
- Guides further management`,
      keyTerms: [
        { term: 'SPRINT', definition: 'Systolic Blood Pressure Intervention Trial; showed benefit of intensive BP control (<120) in high-risk patients' },
        { term: 'renal denervation', definition: 'Catheter-based ablation of renal sympathetic nerves for resistant hypertension' },
        { term: 'aldosterone-to-renin ratio', definition: 'Screening test for primary aldosteronism; high ratio suggests excess aldosterone' },
        { term: 'directly observed therapy', definition: 'Administering medication with direct observation to confirm adherence' },
      ],
      clinicalNotes: 'Use AOBP to match SPRINT methodology. Confirm resistant hypertension with adherence assessment. Screen for primary aldosteronism in resistant cases. Spironolactone is evidence-based add-on for resistant HTN.',
    },
    5: {
      level: 5,
      summary: 'Precision hypertension management integrates pharmacogenomics, digital health monitoring, emerging biomarkers, and health systems approaches while addressing implementation gaps, health equity, and the transition to team-based and algorithm-driven care models.',
      explanation: `**Pharmacogenomics in Hypertension:**

*Current Evidence:*
- Limited clinical utility currently
- CYP2D6: May affect metoprolol metabolism
- NEDD4L: Thiazide response
- ACE I/D polymorphism: ACEi response (inconsistent)

*Future Potential:*
- Genotype-guided drug selection
- Dose optimization
- Adverse effect prediction
- Research ongoing

**Digital Health and Hypertension:**

*Remote Patient Monitoring:*
- Bluetooth-enabled BP cuffs
- Smartphone integration
- Real-time data transmission
- Algorithm-driven medication titration

*Evidence:*
- TASMINH4: Self-monitoring + self-titration effective
- Team-based models improve control
- Virtual visits maintain outcomes

*Implementation:*
- Reimbursement evolving
- RPM codes (99453, 99454, 99457)
- Requires infrastructure
- Equity concerns (digital divide)

**Biomarkers and Risk Stratification:**

*Subclinical Target Organ Damage:*
- High-sensitivity troponin
- NT-proBNP
- Albuminuria
- CAC score
- Carotid IMT (less favored)

*Risk Reclassification:*
- Biomarkers may identify high-risk despite controlled BP
- Guide treatment intensity
- Research application currently

**Blood Pressure Variability:**

*Visit-to-Visit Variability:*
- Higher variability predicts outcomes
- Independent of mean BP
- Calcium channel blockers may reduce variability

*Clinical Utility:*
- Not yet incorporated into guidelines
- May guide drug selection in future

**Implementation Science:**

*Control Rates:*
- US: ~50% of hypertensives controlled
- Significant improvement from 2000s
- Plateau in recent years
- COVID-19 pandemic setback

*Barriers:*
- Patient: Knowledge, access, adherence
- Provider: Inertia, time constraints
- System: Fragmentation, follow-up gaps

*Evidence-Based Interventions:*
- Team-based care (pharmacist, nurse)
- Home BP monitoring programs
- EHR-based alerts
- Population health management
- Self-measured BP with co-management

**Health Equity:**

*Disparities:*
- Black adults: Higher prevalence, worse control
- Hispanic: Lower awareness
- Low SES: Reduced access, adherence
- Rural: Fewer providers

*Contributing Factors:*
- Social determinants of health
- Healthcare access
- Implicit bias
- Medication costs

*Interventions:*
- Community health workers
- Barbershop interventions (Black men)
- Faith-based programs
- Addressing SDOH

**Algorithm-Driven Titration:**

*Protocol-Based Management:*
- Standardized titration algorithms
- Non-physician management
- Improved time to control
- Kaiser Permanente model

*Example Protocol:*
1. Start ACEI/ARB or CCB
2. Add second agent if not at goal in 4 weeks
3. Add third (usually diuretic)
4. Consider spironolactone
5. Referral for resistant HTN

**Future Directions:**

1. Pharmacogenomic-guided therapy
2. AI-driven treatment optimization
3. Continuous BP monitoring (wearables)
4. Novel drug targets
5. Gene therapy approaches
6. Enhanced implementation science

**Quality Metrics:**

*Process:*
- BP screening rate
- Follow-up of elevated BP
- Appropriate medication prescribing

*Outcome:*
- BP control rate (<130/80 or <140/90)
- CVD event rates
- Disparities in control

*Improvement Strategies:*
- Dashboard monitoring
- Feedback to providers
- System-level interventions`,
      keyTerms: [
        { term: 'remote patient monitoring', definition: 'Use of connected devices to collect and transmit BP data for clinical management' },
        { term: 'blood pressure variability', definition: 'Fluctuation in BP between measurements; higher variability predicts worse outcomes' },
        { term: 'team-based care', definition: 'Collaborative care model involving pharmacists, nurses, and physicians for hypertension management' },
        { term: 'algorithm-driven titration', definition: 'Standardized protocols for medication adjustment, often managed by non-physician providers' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Use standardized measurement (AOBP or HBPM)
- Confirm diagnosis with out-of-office measurements
- Assess for secondary causes in young/resistant
- Target <130/80 for high-risk if tolerated
- Use team-based care models
- Implement remote monitoring where feasible
- Track control rates by demographics
- Address equity through targeted interventions
- Simplify regimens for adherence
- Individualize for elderly/frail patients`,
    },
  },

  media: [
    {
      id: 'bp-measurement-technique',
      type: 'diagram',
      filename: 'bp-measurement-technique.svg',
      title: 'Proper Blood Pressure Measurement',
      description: 'Illustration showing correct positioning and technique for BP measurement',
    },
  ],

  citations: [
    {
      id: 'uspstf-bp-2021',
      type: 'article',
      title: 'Screening for Hypertension in Adults: US Preventive Services Task Force Reaffirmation Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
      accessedDate: '2025-01-24',
    },
    {
      id: 'acc-aha-htn-2017',
      type: 'article',
      title: '2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      source: 'Hypertension',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-cardiovascular-screening', targetType: 'concept', relationship: 'parent', label: 'Cardiovascular Screening' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['preventive medicine', 'cardiology', 'screening'],
    keywords: ['blood pressure', 'hypertension', 'screening', 'SPRINT', 'cardiovascular'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
