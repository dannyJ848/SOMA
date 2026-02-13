/**
 * Prostate Health - Educational Content
 */

import { EducationalContent } from '../../types';

export const prostateHealth: EducationalContent = {
  id: 'prevention-prostate-health',
  type: 'topic',
  name: 'Prostate Health',
  alternateNames: ['Prostate Cancer Prevention', 'Prostate Wellness'],

  levels: {
    1: {
      level: 1,
      summary: 'Maintaining prostate health involves healthy lifestyle choices and knowing when to talk to your doctor about screening.',
      explanation: `The prostate is a small gland in men that can cause problems as men age. Here's how to keep it healthy:

**Healthy Lifestyle:**
- Eat plenty of fruits and vegetables
- Choose whole grains over refined ones
- Limit red meat and high-fat dairy
- Exercise regularly
- Maintain a healthy weight

**Foods That May Help:**
- Tomatoes (cooked better - lycopene)
- Cruciferous vegetables (broccoli, cauliflower)
- Green tea
- Soy products
- Fish rich in omega-3

**Talk to Your Doctor About:**
- When to start PSA screening
- Family history of prostate cancer
- Any urinary symptoms

**Know the Symptoms of Prostate Problems:**
- Difficulty urinating
- Frequent urination, especially at night
- Weak stream
- Blood in urine or semen

**Screening Discussion:**
- Usually starts around age 50 (earlier if high risk)
- It's a shared decision with your doctor
- Know the benefits and limitations`,
      keyTerms: [
        { term: 'prostate health', definition: 'Keeping the prostate functioning well and preventing disease' },
        { term: 'PSA screening', definition: 'Blood test that can help detect prostate problems' },
        { term: 'lycopene', definition: 'Compound in tomatoes that may help prostate health' },
      ],
      analogies: [
        'The prostate is like a traffic controller - when it has problems, urine flow gets disrupted.',
      ],
      examples: [
        'Cooking tomatoes increases the amount of lycopene your body can absorb.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prostate health encompasses BPH symptom management, prostate cancer screening decisions, and lifestyle modifications that may reduce disease risk.',
      explanation: `## Prostate Cancer Screening

**Who to Screen:**
- Men age 50-69 with >10 year life expectancy
- Earlier if high risk:
  - African American
  - Family history (first-degree relative)
  - BRCA2 mutation carriers

**Screening Tests:**
- PSA blood test
- Digital rectal exam
- MRI (increasingly used)

**Shared Decision Making:**
- Discuss benefits and harms
- Personal values and preferences
- Family history considerations

## Lifestyle Factors

**Diet:**
- Mediterranean-style diet
- Plant-based emphasis
- Limit saturated fat
- Adequate selenium and vitamin E from food

**Exercise:**
- Regular physical activity
- May reduce aggressive cancer risk
- Helps with BPH symptoms

**Weight:**
- Obesity linked to aggressive prostate cancer
- Weight loss may improve BPH

## BPH Prevention/Management

**Lifestyle:**
- Limit fluids before bed
- Reduce caffeine and alcohol
- Timed voiding
- Avoid antihistamines and decongestants

**Medications:**
- Alpha-blockers for symptoms
- 5-ARIs for larger prostates
- Combination therapy

## What Doesn't Work

**No Proven Prevention:**
- Vitamin E supplements (may be harmful)
- Selenium supplements
- Finasteride (reduces low-grade, not mortality)

**Uncertain Benefit:**
- Statins
- Aspirin
- Various supplements`,
      keyTerms: [
        { term: 'shared decision making', definition: 'Patient and doctor deciding together about screening' },
        { term: '5-ARI', definition: '5-alpha reductase inhibitor - shrinks the prostate' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia - non-cancerous prostate growth' },
      ],
      analogies: [
        'Prostate cancer screening is like checking your car for problems - it can find issues early, but false alarms happen.',
      ],
    },
    3: {
      level: 3,
      summary: 'Prostate health optimization requires understanding of screening evidence, risk factors, and chemoprevention data.',
      explanation: `## Screening Evidence

**Benefits:**
- Early detection of curable cancer
- ERSPC: 21% mortality reduction at 16 years
- NNS to prevent 1 death: ~570 (at 13 years)

**Harms:**
- Overdiagnosis (detecting non-lethal cancers)
- False positives leading to biopsy
- Biopsy complications
- Treatment side effects

**Risk Calculators:**
- PCPT Risk Calculator
- ERSPC Risk Calculator
- Incorporates PSA, DRE, age, race, family history

## Risk Factors

**Non-Modifiable:**
- Age (strongest factor)
- African American race (1.7x risk)
- Family history (2-3x risk if first-degree)
- Genetics (BRCA2, Lynch syndrome)

**Potentially Modifiable:**
- Obesity (aggressive cancer)
- Diet
- Physical activity
- Smoking (mortality, not incidence)

## Chemoprevention Data

**PCPT Trial (Finasteride):**
- 25% reduction in prostate cancer
- Higher grade cancers detected
- No mortality benefit
- Not recommended for prevention

**SELECT Trial (Selenium + Vitamin E):**
- No benefit
- Vitamin E increased cancer risk
- Trial stopped early

**Current Recommendations:**
- No pharmacologic prevention recommended
- Focus on healthy lifestyle

## Biomarkers Beyond PSA

**Reflex Tests:**
- Free PSA ratio
- PSA density
- PSA velocity

**Novel Markers:**
- PHI (Prostate Health Index)
- 4Kscore
- PCA3 urine test
- SelectMDx

**MRI Integration:**
- mpMRI before biopsy
- PI-RADS scoring
- Reduces unnecessary biopsies`,
      keyTerms: [
        { term: 'overdiagnosis', definition: 'Detecting cancers that would never cause harm in patient lifetime' },
        { term: 'PCPT', definition: 'Prostate Cancer Prevention Trial evaluating finasteride' },
        { term: 'NNS', definition: 'Number needed to screen to prevent one death' },
      ],
      clinicalNotes: 'The ERSPC trial showed mortality benefit from screening while PLCO did not, likely due to contamination in PLCO. Screening decisions should be individualized.',
    },
    4: {
      level: 4,
      summary: 'Advanced prostate health includes genetic risk assessment, precision screening, and emerging prevention strategies.',
      explanation: `## Genetic Risk Assessment

**Who to Test:**
- Metastatic prostate cancer
- Family history (breast, ovarian, pancreatic)
- Multiple affected relatives
- Ashkenazi Jewish heritage

**Relevant Genes:**
- BRCA2 (3.5x risk, more aggressive)
- BRCA1 (modest increased risk)
- Lynch syndrome genes
- HOXB13

**Management Implications:**
- Earlier screening (age 40)
- More intensive surveillance
- Consider MRI-based screening
- Family cascade testing

## Precision Screening

**Risk-Stratified Approach:**
- Baseline PSA at age 45-50
- Stratify by PSA level
- Low PSA (<1): Screen every 2-4 years
- Higher PSA: Annual screening

**MRI-First Strategy:**
- MRI before biopsy
- Reduces over-diagnosis
- Improves detection of significant cancer

**Biomarker Integration:**
- Use novel markers for gray-zone PSA
- Avoid unnecessary biopsies
- Risk calculators incorporating markers

## Dietary Research

**Strongest Evidence:**
- Tomatoes/lycopene (moderate)
- Cruciferous vegetables (moderate)
- Fish/omega-3 (weak)
- Mediterranean diet (moderate)

**Mechanisms:**
- Antioxidant effects
- Anti-inflammatory
- Hormonal modulation
- Apoptosis promotion

## Exercise Research

**Benefits:**
- Reduced aggressive cancer risk
- Improved outcomes post-diagnosis
- BPH symptom improvement
- Quality of life

**Recommendations:**
- 150+ minutes moderate activity weekly
- Strength training 2x/week
- Consistent long-term pattern

## Sexual Activity

**Research Findings:**
- Higher ejaculation frequency may reduce risk
- Proposed mechanism: prostatic stasis reduction
- Observational data only
- Not basis for recommendations`,
      keyTerms: [
        { term: 'cascade testing', definition: 'Testing family members after genetic finding in patient' },
        { term: 'HOXB13', definition: 'Gene mutation associated with hereditary prostate cancer' },
        { term: 'MRI-first strategy', definition: 'Using MRI before biopsy to improve cancer detection' },
      ],
      clinicalNotes: 'Men with BRCA2 mutations should begin screening at age 40 with PSA and consider MRI. These men have more aggressive prostate cancer.',
    },
    5: {
      level: 5,
      summary: 'Expert prostate health encompasses research frontiers, personalized risk models, and integration of emerging technologies.',
      explanation: `## Polygenic Risk Scores

**Concept:**
- Multiple genetic variants
- Combined risk calculation
- Population stratification

**Current Status:**
- Research tool primarily
- Not yet clinical standard
- May guide screening intensity

**Future Integration:**
- Combined with PSA and family history
- Personalized screening intervals
- Target high-risk population

## Imaging Innovation

**PSMA PET:**
- Not for screening (yet)
- May detect occult cancer
- Research applications

**Multiparametric MRI Advances:**
- AI-assisted reading
- Improved standardization
- Broader access

**Contrast-Enhanced Ultrasound:**
- Office-based option
- Less expensive than MRI
- Under development

## Microbiome Research

**Prostate Microbiome:**
- Emerging field
- Inflammation connection
- Cancer risk modification

**Gut-Prostate Axis:**
- Diet effects through microbiome
- Phytoestrogen metabolism
- Research implications

## Chemoprevention Research

**Active Areas:**
- Metformin (epidemiologic association)
- Statins (possible modest effect)
- Aspirin (conflicting data)
- Novel targets

**Future Approaches:**
- Biomarker-guided prevention
- High-risk population targeting
- Precision prevention

## Quality of Life Focus

**Holistic Approach:**
- Symptoms management
- Sexual health
- Mental well-being
- Social support

**Survivorship:**
- Active surveillance counseling
- Post-treatment quality of life
- Long-term monitoring

## Clinical Trial Integration

**Prevention Trials:**
- IMPACT (BRCA carriers)
- Various biomarker studies
- Lifestyle interventions

**Screening Trials:**
- MRI-based protocols
- Novel marker integration
- Risk-stratified approaches

## Public Health Perspective

**Health Disparities:**
- African American screening rates
- Access to care
- Genetic testing equity

**Education:**
- Informed decision making
- Community outreach
- Cultural sensitivity`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Combined genetic variant score predicting disease risk' },
        { term: 'IMPACT study', definition: 'Trial evaluating screening in BRCA mutation carriers' },
        { term: 'prostate microbiome', definition: 'Microbial communities in prostate and their disease implications' },
      ],
      clinicalNotes: 'Polygenic risk scores for prostate cancer are not yet ready for clinical use but may eventually help stratify screening recommendations.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-psa-screening',
      type: 'article',
      title: 'Early Detection of Prostate Cancer',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'cancer-prostate-cancer', targetType: 'condition', relationship: 'related', label: 'Prostate Cancer' },
    { targetId: 'topic-prostate-conditions', targetType: 'topic', relationship: 'related', label: 'Prostate Conditions' },
  ],
  tags: {
    systems: ['urinary', 'male reproductive'],
    topics: ['prevention', 'screening'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostateHealth;
