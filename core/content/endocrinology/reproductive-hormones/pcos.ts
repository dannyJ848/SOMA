/**
 * Polycystic Ovary Syndrome (PCOS) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const pcos: EducationalContent = {
  id: 'condition-pcos',
  type: 'condition',
  name: 'Polycystic Ovary Syndrome',
  alternateNames: ['PCOS', 'Stein-Leventhal Syndrome', 'Polycystic Ovarian Syndrome'],
  hpoId: 'HP:0000786',

  levels: {
    1: {
      level: 1,
      summary: 'PCOS is a common hormone disorder in women that can cause irregular periods, acne, excess hair growth, and difficulty getting pregnant.',
      explanation: `PCOS is a condition that affects how a woman\'s ovaries work. It is common, affecting about 1 in 10 women of childbearing age.

**Main features:**
- Irregular or missed periods
- High levels of male hormones (androgens)
- Polycystic ovaries (many small cysts on ovaries)

**Common symptoms:**
- Irregular periods or no periods
- Acne and oily skin
- Excess hair growth on face, chest, or back
- Thinning hair on head
- Weight gain or difficulty losing weight
- Dark skin patches
- Difficulty getting pregnant

**Health risks with PCOS:**
- Type 2 diabetes
- High blood pressure
- High cholesterol
- Sleep apnea
- Depression and anxiety
- Endometrial cancer risk

**Treatment:**
- Lifestyle changes (diet, exercise)
- Birth control pills to regulate periods
- Medications for hair growth and acne
- Fertility treatments if needed`,
      keyTerms: [
        { term: 'PCOS', definition: 'Polycystic ovary syndrome; a hormonal disorder' },
        { term: 'androgens', definition: 'Male hormones that women also have' },
        { term: 'ovaries', definition: 'Female organs that produce eggs and hormones' },
      ],
      analogies: [
        'In PCOS, the ovaries are like a crowded party where too many guests (eggs) start to develop, but none actually get invited to leave (ovulate).',
      ],
      examples: [
        'A woman with irregular periods, acne, and extra facial hair may have PCOS.',
      ],
    },
    2: {
      level: 2,
      summary: 'PCOS is diagnosed by Rotterdam criteria: two of three features - oligo/anovulation, clinical/biochemical hyperandrogenism, polycystic ovaries on ultrasound. Associated with insulin resistance and metabolic syndrome.',
      explanation: `## Diagnostic Criteria (Rotterdam - 2003)

Need 2 of 3:
1. **Oligo/anovulation:** Irregular cycles (>35 days) or absent periods
2. **Hyperandrogenism:** Clinical (hirsutism, acne, alopecia) or biochemical (elevated testosterone)
3. **Polycystic ovaries:** >=12 follicles 2-9mm or volume >10mL on ultrasound

**Exclusions:**
- Must exclude other causes of hyperandrogenism
- Thyroid disease, hyperprolactinemia, NCCAH, androgen-secreting tumors

## Pathophysiology

**Hormonal Dysregulation:**
- Increased GnRH pulse frequency favors LH over FSH
- Elevated LH:FSH ratio (classically >2:1)
- Increased ovarian androgen production
- Decreased SHBG (from hyperinsulinemia)
- Anovulation from follicular arrest

**Insulin Resistance:**
- Present in 50-70% of women with PCOS
- Compensatory hyperinsulinemia
- Insulin stimulates ovarian androgens
- Worsens metabolic profile

**Clinical Consequences:**
- Anovulatory infertility
- Metabolic syndrome
- Type 2 diabetes risk
- Cardiovascular risk factors
- Endometrial hyperplasia/cancer (unopposed estrogen)

## Evaluation

**History:**
- Menstrual pattern
- Symptoms of hyperandrogenism
- Family history
- Lifestyle factors

**Physical:**
- BMI, waist circumference
- Ferriman-Gallwey score for hirsutism
- Acne grading
- Acanthosis nigricans

**Laboratory:**
- Testosterone, free testosterone
- DHEAS (adrenal source)
- 17-OH progesterone (exclude NCCAH)
- LH, FSH
- TSH, prolactin
- Fasting glucose, HbA1c
- Lipid panel

**Imaging:**
- Transvaginal ultrasound
- Endometrial thickness if irregular bleeding`,
      keyTerms: [
        { term: 'Rotterdam criteria', definition: 'Diagnostic criteria requiring 2 of 3 features for PCOS diagnosis' },
        { term: 'insulin resistance', definition: 'Reduced tissue response to insulin' },
        { term: 'hirsutism', definition: 'Excess male-pattern hair growth in women' },
      ],
    },
    3: {
      level: 3,
      summary: 'PCOS management focuses on lifestyle modification as foundation, with hormonal contraceptives for cycle regulation, metformin for metabolic issues, and anti-androgens for hirsutism. Fertility requires ovulation induction.',
      explanation: `## Lifestyle Management

**Weight Loss:**
- Even 5-10% reduction improves symptoms
- Restores ovulation in many
- Improves metabolic parameters
- Reduces cardiovascular risk

**Diet:**
- Low glycemic index
- Mediterranean-style patterns
- Reduce refined carbohydrates
- Adequate protein

**Exercise:**
- 150 min/week moderate intensity
- Resistance training
- Reduces insulin resistance

## Menstrual Regulation

**Hormonal Contraceptives:**
- First-line for cycle control
- Reduce endometrial cancer risk
- Improve acne and hirsutism
- Options: Combined pills, patch, ring, progestin-only

**Progestin-Only Options:**
- Cyclic progestin (10-14 days/month)
- If estrogen contraindicated
- Protects endometrium

**Levonorgestrel IUD:**
- Excellent endometrial protection
- Minimal systemic effects
- Preferred for long-term

## Metabolic Management

**Metformin:**
- Improves insulin sensitivity
- May restore ovulation
- Reduces progression to diabetes
- 1500-2000 mg daily
- Consider if:
  - Prediabetes
  - Metabolic syndrome
  - Infertility (adjunct)
  - Unable to tolerate OCPs

**GLP-1 Agonists:**
- Semaglutide, liraglutide
- Weight loss 10-15%
- Improves metabolic parameters
- Emerging role in PCOS

## Hirsutism and Acne Treatment

**Mechanical:**
- Shaving, waxing, threading
- Laser hair removal
- Electrolysis

**Pharmacologic:**

*Anti-androgens:*
| Drug | Dosing | Notes |
|------|--------|-------|
| Spironolactone | 50-200 mg daily | Most common; monitor K+ |
| Finasteride | 5 mg daily | 5-alpha reductase inhibitor |
| Flutamide | Not first-line | Hepatotoxicity risk |

*Topical:*
- Eflornithine cream (facial hair)

*Note:* Anti-androgens require contraception (teratogenic to male fetus)

## Infertility Management

**First-Line:**
- Weight loss if overweight
- Letrozole (preferred over clomiphene)
- 2.5-7.5 mg days 3-7 of cycle

**Second-Line:**
- Clomiphene citrate
- Metformin + letrozole
- Gonadotropins

**Third-Line:**
- IVF
- Ovarian drilling (rarely now)

**Monitoring:**
- Ultrasound for follicle tracking
- Risk of multiple gestation`,
      keyTerms: [
        { term: 'letrozole', definition: 'Aromatase inhibitor; first-line for ovulation induction in PCOS' },
        { term: 'spironolactone', definition: 'Anti-androgen used for hirsutism' },
        { term: 'ovulation induction', definition: 'Medication to stimulate egg release' },
      ],
      clinicalNotes: 'Letrozole is now preferred over clomiphene for ovulation induction in PCOS due to higher ovulation and pregnancy rates with lower multiple pregnancy risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced PCOS management addresses long-term metabolic and cardiovascular risk, endometrial protection, mental health considerations, and adolescent-specific approaches while managing infertility with assisted reproductive technologies.',
      explanation: `## Long-term Health Management

**Metabolic Monitoring:**
- Screen for diabetes every 1-3 years (earlier/more frequent if risk factors)
- Lipid panel annually
- Blood pressure monitoring
- Consider coronary calcium scoring in select patients

**Cardiovascular Risk:**
- Increased risk factors present
- Stroke and MI risk debated but likely elevated
- Aggressive risk factor modification
- Smoking cessation essential

**Endometrial Protection:**
- Unopposed estrogen from anovulation increases cancer risk
- Ensure regular withdrawal bleeds
- Ultrasound if abnormal bleeding
- Endometrial biopsy if indicated

## Mental Health

**Increased Risk:**
- Depression (2-3x increased)
- Anxiety
- Eating disorders
- Body image issues

**Screening:**
- Regular PHQ-9, GAD-7
- Address weight stigma
- Consider counseling
- Support groups beneficial

## Adolescent PCOS

**Diagnostic Challenges:**
- Irregular cycles normal for 2-3 years post-menarche
- Multicystic ovaries normal in adolescents
- Higher diagnostic threshold

**Criteria:**
- Both hyperandrogenism AND irregular cycles
- Exclude other causes
- Ultrasound not recommended in adolescents

**Management:**
- Lifestyle first
- Hormonal contraceptives for symptoms
- Metformin if metabolic issues
- Sensitive approach to weight discussions

## Pregnancy Considerations

**Risks:**
- Gestational diabetes (40-50%)
- Preeclampsia
- Pregnancy-induced hypertension
- Preterm delivery
- Miscarriage (controversial)

**Management:**
- Preconception counseling
- Metformin may reduce miscarriage (continue through first trimester in some)
- Early GDM screening
- Aspirin for preeclampsia prevention if risk factors
- Delivery planning

**Postpartum:**
- Screen for diabetes at 6-12 weeks
- Lifetime diabetes risk elevated

## Alternative/Complementary

**Inositol:**
- Myo-inositol and D-chiro-inositol
- May improve insulin sensitivity and ovulation
- Evidence mixed but generally safe

**Supplements:**
- Vitamin D if deficient
- Omega-3 fatty acids
- Limited evidence for most supplements

**Acupuncture:**
- Some evidence for ovulation induction
- Generally safe

**Cautions:****
- Avoid unproven "cures"
- Discuss all supplements with provider`,
      keyTerms: [
        { term: 'myo-inositol', definition: 'Supplement that may improve insulin sensitivity in PCOS' },
        { term: 'NCCAH', definition: 'Non-classical congenital adrenal hyperplasia; differential diagnosis' },
        { term: 'endometrial hyperplasia', definition: 'Thickening of uterine lining from unopposed estrogen' },
      ],
      clinicalNotes: 'PCOS is a lifelong metabolic condition. Even after menopause, women with PCOS have elevated diabetes and cardiovascular risk requiring ongoing surveillance.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PCOS research addresses the heterogeneity of the disorder, novel therapeutic targets including inositol analogs and GnRH antagonists, precision medicine approaches, and advocacy for renaming the syndrome to reflect its metabolic nature.',
      explanation: `## Heterogeneity and Phenotypes

**Four Phenotypes (Rotterdam):**
| Phenotype | Features |
|-----------|----------|
| A (Classic) | Hyperandrogenism + oligomenorrhea + PCO |
| B (Ovulatory) | Hyperandrogenism + PCO (regular cycles) |
| C (Mild) | Hyperandrogenism + oligomenorrhea (normal ovaries) |
| D (Mild) | Oligomenorrhea + PCO (no hyperandrogenism) |

**Different Risks:**
- Metabolic risks vary by phenotype
- Classic phenotype has highest risk
- Phenotype D may be mildest

**Implications:**
- Individualized treatment
- Not all PCOS is the same
- Risk stratification

## Novel Therapeutics

**GnRH Antagonists:**
- Elagolix (approved for endometriosis)
- Potential for PCOS
- Reduces gonadotropins and androgens

**Inositol Analogs:**
- D-chiro-inositol enhancers
- Improved formulations
- Better bioavailability

**SGLT2 Inhibitors:**
- Dapagliflozin, empagliflozin
- Weight loss and metabolic benefits
- Trials ongoing

**Thiazolidinediones:**
- Pioglitazone improves insulin sensitivity
- Less used due to side effects
- Effective for metabolic features

## Precision Medicine

**Genetic Markers:**
- Multiple susceptibility loci identified
- Polygenic risk scores
- Not yet clinically useful

**Metabolomics:**
- Metabolic profiling
- Subphenotyping
- Targeted interventions

**Pharmacogenomics:**
- Predicting metformin response
- Anti-androgen selection
- Individualized dosing

## Renaming Debate

**Current Issues:**
- "Polycystic" is misleading (are follicles, not cysts)
- Focus on ovaries misses metabolic aspects
- Stigma associated with name

**Proposed Names:**
- Metabolic reproductive syndrome
- Hyperandrogenic persistent ovulatory dysfunction
- Various alternatives debated

**Implications:**
- Patient understanding
- Clinical approach
- Research funding

## Research Priorities

**Understanding:**
- Environmental triggers
- Gene-environment interactions
- Developmental origins
- Long-term outcomes

**Treatment:**
- Novel insulin sensitizers
- Fertility preservation
- Cardiovascular protection
- Mental health interventions

**Health Services:**
- Care pathways
- Patient education
- Reducing stigma
- Access to care

## Future Directions

- Prevention strategies
- Early intervention in at-risk girls
- Novel drug targets
- Integrated care models
- Patient-centered outcomes research
- Global health approaches`,
      keyTerms: [
        { term: 'phenotype', definition: 'Specific combination of features in a condition' },
        { term: 'elagolix', definition: 'GnRH antagonist with potential PCOS applications' },
        { term: 'polygenic risk score', definition: 'Combined genetic risk from multiple variants' },
      ],
      clinicalNotes: 'The name "PCOS" may change in the future as understanding evolves. The current name inadequately captures the metabolic and systemic nature of the disorder.',
    },
  },

  media: [],
  citations: [
    {
      id: 'pcos-guidelines-2018',
      type: 'article',
      title: 'International Evidence-Based Guideline for the Assessment and Management of PCOS',
      source: 'Human Reproduction',
      authors: ['Teede HJ', 'Misso ML', 'Costello MF', 'et al.'],
    },
    {
      id: 'rotterdam-2004',
      type: 'article',
      title: 'Revised 2003 Consensus on Diagnostic Criteria and Long-term Health Risks',
      source: 'Fertility and Sterility',
      authors: ['Rotterdam ESHRE/ASRM-Sponsored PCOS Consensus Workshop Group'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-hirsutism', targetType: 'condition', relationship: 'related', label: 'Hirsutism' },
    { targetId: 'condition-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['endocrinology', 'gynecology'],
    keywords: ['PCOS', 'polycystic ovary', 'hyperandrogenism', 'infertility', 'insulin resistance'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'ob-gyn', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pcos;
