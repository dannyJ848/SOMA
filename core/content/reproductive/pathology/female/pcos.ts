import { EducationalContent } from '../../../types';

export const pcosContent: EducationalContent = {
  id: 'reproductive-pcos',
  type: 'condition',
  name: 'Polycystic Ovary Syndrome',
  alternateNames: ['PCOS', 'Polycystic ovarian syndrome', 'Stein-Leventhal syndrome'],
  levels: {
    1: {
      level: 1,
      summary: 'PCOS is a common hormonal condition that affects how the ovaries work. It can cause irregular periods, excess hair growth, acne, and difficulty getting pregnant.',
      explanation: `Polycystic ovary syndrome (PCOS) is one of the most common hormone conditions affecting women and people with ovaries. About 1 in 10 are affected.

**What Happens in PCOS:**
- The ovaries may develop many small fluid-filled sacs (follicles) but not release eggs regularly
- Hormone levels, especially androgens (male-type hormones), are higher than normal
- Periods may be irregular or absent

**Common Symptoms:**
- Irregular periods (too few, too many, or none at all)
- Excess hair growth on face, chest, or back (hirsutism)
- Acne that is hard to treat
- Weight gain, especially around the belly
- Thinning hair on the scalp
- Difficulty getting pregnant
- Skin darkening in body creases (neck, groin)

**Not Everyone Has All Symptoms:**
- PCOS affects people differently
- Some have mild symptoms, others more severe
- The name can be misleading - not everyone has visible cysts

**What Causes PCOS:**
- The exact cause is unknown
- It runs in families
- Insulin resistance plays a role
- Related to both genetics and lifestyle

**Why It Matters:**
- Can make it harder to get pregnant
- Increases risk of diabetes and heart disease
- Can affect mood and self-esteem
- With proper management, symptoms can be controlled

**Treatment Helps:**
- Birth control pills can regulate periods and reduce symptoms
- Lifestyle changes (healthy diet, exercise) are very effective
- Medications can help with specific symptoms
- Fertility treatments available if trying to get pregnant`,
      keyTerms: [
        { term: 'PCOS', definition: 'A hormone condition affecting the ovaries and menstrual cycle' },
        { term: 'Androgens', definition: 'Hormones like testosterone that are higher in PCOS' },
        { term: 'Insulin resistance', definition: 'When the body does not use insulin properly, related to blood sugar' },
        { term: 'Hirsutism', definition: 'Excess hair growth in places where women typically have little hair' },
      ],
      analogies: [
        'In PCOS, the ovaries are like an assembly line that starts making many eggs but does not finish the process to release them',
        'Insulin resistance is like having a key (insulin) that does not quite fit the lock (cells), so the body makes more keys',
      ],
      patientCounselingPoints: [
        'PCOS is manageable with proper treatment',
        'Lifestyle changes can make a big difference',
        'You can still get pregnant with PCOS, though it may need help',
        'Regular check-ups are important because of related health risks',
      ],
    },
    2: {
      level: 2,
      summary: 'PCOS is a syndrome of ovarian dysfunction with hyperandrogenism and/or polycystic ovarian morphology. Diagnosis requires excluding other causes, and management focuses on symptom control and metabolic health.',
      explanation: `Polycystic ovary syndrome affects 6-12% of reproductive-age women and is a leading cause of anovulatory infertility.

**Diagnostic Criteria (Rotterdam - need 2 of 3):**
1. Oligo- or anovulation (irregular or absent periods)
2. Clinical or biochemical hyperandrogenism
3. Polycystic ovaries on ultrasound (≥12 follicles 2-9mm per ovary OR ovarian volume >10 mL)

*Must exclude other causes of hyperandrogenism or ovulatory dysfunction*

**Clinical Features:**

**Menstrual Irregularity**
- Oligomenorrhea (cycles >35 days)
- Amenorrhea (no period for 3+ months)
- Or heavy, irregular bleeding (anovulatory bleeding)

**Hyperandrogenism**
- Hirsutism: Male-pattern hair growth (face, chest, abdomen)
- Acne: Especially if severe or persistent into adulthood
- Androgenic alopecia: Male-pattern hair loss

**Metabolic Features**
- Obesity (50-70% of patients)
- Insulin resistance (present in lean and obese)
- Acanthosis nigricans (dark, velvety skin)

**Associated Conditions:**
- Infertility (anovulation)
- Type 2 diabetes
- Metabolic syndrome
- Obstructive sleep apnea
- Non-alcoholic fatty liver disease (NAFLD)
- Depression and anxiety
- Endometrial hyperplasia/cancer (chronic anovulation)

**Evaluation:**

*Laboratory*
- Total testosterone (elevated in ~70%)
- Free testosterone or SHBG
- FSH and LH (LH:FSH ratio often >2:1)
- Thyroid function (exclude hypothyroidism)
- Prolactin (exclude hyperprolactinemia)
- 17-OHP (exclude non-classic CAH if elevated androgens)
- Fasting glucose and lipids

*Imaging*
- Pelvic ultrasound (polycystic morphology)

**Treatment by Goal:**

**Menstrual Regulation**
- Combined oral contraceptives (first-line)
- Cyclic progestins if contraindicated to estrogen
- Prevents endometrial hyperplasia

**Hirsutism/Acne**
- Combined oral contraceptives
- Spironolactone (androgen blocker)
- Topical treatments for acne
- Hair removal methods

**Infertility**
- Letrozole (first-line for ovulation induction)
- Clomiphene citrate (alternative)
- Gonadotropins if medications fail
- IVF if needed

**Metabolic Health**
- Weight loss (even 5-10% improves symptoms)
- Exercise
- Metformin (improves insulin sensitivity)
- Screen for diabetes, dyslipidemia`,
      keyTerms: [
        { term: 'Rotterdam criteria', definition: 'Diagnostic criteria for PCOS requiring 2 of 3: anovulation, hyperandrogenism, polycystic ovaries' },
        { term: 'Oligomenorrhea', definition: 'Infrequent menstruation with cycles longer than 35 days' },
        { term: 'Acanthosis nigricans', definition: 'Dark, velvety skin in body folds; sign of insulin resistance' },
        { term: 'Letrozole', definition: 'Aromatase inhibitor; first-line medication for ovulation induction in PCOS' },
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; low levels mean more free testosterone' },
      ],
      examples: [
        'A woman with irregular periods, hirsutism, and polycystic ovaries meets Rotterdam criteria for PCOS',
        'Weight loss of 5-10% can restore ovulatory cycles in some women with PCOS',
      ],
    },
    3: {
      level: 3,
      summary: 'PCOS pathophysiology involves hypothalamic-pituitary dysfunction, ovarian hyperandrogenism, and insulin resistance creating a self-perpetuating cycle. Phenotypic classification guides management, and long-term cardiovascular and endometrial risks require monitoring.',
      explanation: `**Pathophysiology:**

**Hypothalamic-Pituitary Dysfunction**
- Increased GnRH pulse frequency
- Elevated LH with normal-to-low FSH
- LH:FSH ratio often >2:1
- LH stimulates theca cell androgen production

**Ovarian Dysfunction**
- Theca cell hyperactivity → excess androgens
- Granulosa cell dysfunction → impaired aromatization
- Arrested follicular development
- Anovulation or oligo-ovulation
- Multiple small antral follicles (polycystic morphology)

**Insulin Resistance**
- Present in 50-70% (lean and obese)
- Compensatory hyperinsulinemia
- Insulin effects:
  - Stimulates ovarian androgen production
  - Decreases hepatic SHBG → more free testosterone
  - May contribute to hypothalamic dysfunction

**Vicious Cycle**
- Excess androgens → disrupt follicular development
- Anovulation → excess androgens
- Hyperinsulinemia → more androgens
- Obesity → insulin resistance → more androgens

**PCOS Phenotypes:**

| Phenotype | Features | % of PCOS | Metabolic Risk |
|-----------|----------|-----------|----------------|
| A (Classic) | HA + OD + PCO | 60-70% | Highest |
| B (Classic) | HA + OD | 20% | High |
| C (Ovulatory) | HA + PCO | 10% | Moderate |
| D (Non-hyperandrogenic) | OD + PCO | 10% | Lower |

*HA = hyperandrogenism, OD = ovulatory dysfunction, PCO = polycystic ovaries*

**Androgen Excess - Sources:**
- Ovarian (primary): Theca cells
- Adrenal (secondary): 50% have elevated DHEA-S
- Peripheral conversion in adipose tissue

**Differential Diagnosis:**

| Condition | Key Differentiating Features |
|-----------|----------------------------|
| Non-classic CAH | Elevated 17-OHP (>200 ng/dL), confirm with ACTH stim |
| Cushing syndrome | Stigmata, elevated cortisol, dexamethasone suppression test |
| Androgen-secreting tumor | Rapid virilization, very high androgens (testosterone >200) |
| Hyperprolactinemia | Elevated prolactin, may have galactorrhea |
| Hypothyroidism | Elevated TSH |
| Primary ovarian insufficiency | High FSH |

**Long-Term Complications:**

**Endometrial**
- Unopposed estrogen (anovulation) → hyperplasia
- 2-6x increased risk of endometrial cancer
- Progestin withdrawal every 3 months if amenorrheic

**Metabolic**
- Metabolic syndrome: 33-47%
- Type 2 diabetes: 10% by age 40
- Dyslipidemia (high TG, low HDL)

**Cardiovascular**
- Increased CV risk factors present
- Unclear if increased CV events (studies ongoing)
- Consider screening/prevention

**Psychological**
- Depression: 28-64%
- Anxiety: 34-57%
- Eating disorders
- Body image concerns
- Quality of life impact`,
      keyTerms: [
        { term: 'GnRH pulse frequency', definition: 'Rate of hypothalamic GnRH release; increased frequency favors LH secretion' },
        { term: 'Theca cells', definition: 'Ovarian cells that produce androgens in response to LH' },
        { term: 'Non-classic CAH', definition: 'Mild form of congenital adrenal hyperplasia presenting with hyperandrogenism; important PCOS mimicker' },
        { term: '17-OHP', definition: '17-hydroxyprogesterone; elevated in congenital adrenal hyperplasia' },
        { term: 'PCOS phenotype', definition: 'Subclassification based on which Rotterdam criteria are present; affects prognosis' },
      ],
      examples: [
        'Phenotype A (classic PCOS with all three criteria) has the highest metabolic risk and benefits most from aggressive lifestyle intervention',
        'A patient with rapid-onset severe hirsutism and testosterone >200 ng/dL warrants imaging to rule out androgen-secreting tumor',
      ],
    },
    4: {
      level: 4,
      summary: 'PCOS molecular pathophysiology involves genetic susceptibility, intrauterine programming, and complex neuroendocrine-metabolic interactions. Anti-Mullerian hormone (AMH) reflects ovarian dysfunction, and emerging therapies target specific pathway abnormalities.',
      explanation: `**Genetic and Developmental Factors:**

**Heritability**
- Strong familial clustering
- Heritability estimate: 70%
- Polygenic with environmental modifiers

**GWAS-Identified Loci**
- LHCGR (LH receptor)
- FSHR (FSH receptor)
- DENND1A (androgen synthesis regulation)
- THADA (insulin signaling)
- INSR (insulin receptor)
- FTO, MC4R (obesity-related)

**Developmental Programming**
- Prenatal androgen exposure hypothesis
- Excess androgens in utero → PCOS phenotype
- Supports observed intergenerational transmission
- Animal models demonstrate programming effects

**Neuroendocrine Dysregulation:**

**GnRH Pulse Generator**
- Accelerated pulse frequency (~1 pulse/hour vs. 1/2-4 hours)
- Favors LH over FSH synthesis
- Possibly due to:
  - Reduced progesterone negative feedback (anovulation)
  - Altered kisspeptin signaling
  - Prenatal androgen programming

**LH Hypersecretion**
- Elevated in 60-70%
- Stimulates theca cell androgen production
- Pulse amplitude may also be increased

**FSH "Deficiency"**
- Normal to low levels
- Inadequate for follicle selection and maturation
- Multiple follicles remain in early antral stage

**Insulin Resistance Mechanisms:**

**Cellular Defects**
- Post-receptor insulin signaling impairment
- Selective insulin resistance (metabolic vs. steroidogenic)
- Theca cells remain insulin-sensitive → enhanced androgen synthesis
- Serine phosphorylation of insulin receptor substrate (IRS-1)

**Adipose Tissue**
- Visceral adiposity predominates
- Adipokine dysregulation (low adiponectin, high resistin)
- Chronic low-grade inflammation

**Intrinsic vs. Obesity-Related**
- Insulin resistance present in lean PCOS
- Obesity amplifies but does not cause
- Independent contribution to pathophysiology

**AMH in PCOS:**

**Elevated AMH**
- 2-4x higher than controls
- Reflects increased antral follicle count
- Correlates with severity
- May contribute to pathophysiology:
  - Inhibits FSH-induced aromatase
  - Enhances GnRH pulsatility
  - Disrupts follicle selection

**Clinical Utility**
- Adjunct to diagnosis (not in formal criteria)
- May help diagnose in adolescents
- Decreases with treatment (sign of improvement)

**Emerging Therapeutic Targets:**

**Inositol**
- Myo-inositol and D-chiro-inositol
- Second messengers in insulin signaling
- May improve insulin sensitivity and ovarian function
- 40:1 ratio (myo:DCI) physiologic

**GnRH Antagonists**
- Suppress LH hypersecretion
- Research for PCOS treatment

**Kisspeptin Modulation**
- Potential target for GnRH pulse modulation
- Investigational

**Activin/Inhibin Manipulation**
- Regulate FSH and folliculogenesis
- Theoretical targets

**Gut Microbiome**
- Alterations in PCOS
- May affect inflammation, insulin sensitivity
- Probiotics under investigation`,
      keyTerms: [
        { term: 'DENND1A', definition: 'Gene associated with PCOS; involved in regulation of androgen synthesis in theca cells' },
        { term: 'Prenatal androgen programming', definition: 'Theory that fetal androgen exposure leads to PCOS phenotype in offspring' },
        { term: 'AMH', definition: 'Anti-Mullerian hormone; elevated in PCOS, reflects increased antral follicle count' },
        { term: 'Inositol', definition: 'Insulin-sensitizing compound with myo- and D-chiro- forms; adjunct PCOS therapy' },
        { term: 'Selective insulin resistance', definition: 'Concept that metabolic insulin actions are impaired while ovarian steroidogenic response persists' },
      ],
      clinicalNotes: 'AMH levels >4.7-5 ng/mL in adults (varies by assay) suggest PCOS when ultrasound is not feasible. AMH is increasingly used to support diagnosis, especially in adolescents where polycystic morphology overlaps with normal development. However, AMH is not yet included in formal diagnostic criteria.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based PCOS management integrates individualized treatment based on phenotype and goals, with attention to cardiometabolic risk prevention, fertility optimization, and mental health. International guidelines provide comprehensive management frameworks.',
      explanation: `**International Guideline Recommendations (2023 Update):**

**Diagnosis:**
- Rotterdam criteria remain standard for adults
- Adolescent diagnosis: Require all 3 criteria (more stringent)
- AMH may supplement ultrasound but is not a criterion
- Exclude other causes in all patients

**Screening at Diagnosis:**
- OGTT (preferred) or HbA1c for glycemic status
- Lipid panel
- Blood pressure
- Depression/anxiety screening
- OSA screening if symptoms or obesity

**First-Line Management - Lifestyle:**

**Weight Management**
- First-line for overweight/obese PCOS
- 5-10% weight loss improves:
  - Menstrual regularity
  - Ovulation rates
  - Androgen levels
  - Insulin sensitivity
- No specific diet superior; caloric deficit key
- Exercise: 150 min/week moderate or 75 min vigorous

**Behavioral Support**
- Structured programs more effective
- Address emotional eating
- Long-term sustainability focus

**Pharmacologic Management:**

**Menstrual Regulation & Hyperandrogenism**

*Combined Oral Contraceptives (First-Line)*
- Regulate cycles, prevent endometrial hyperplasia
- Suppress LH and ovarian androgens
- Increase SHBG → reduce free testosterone
- Improve hirsutism, acne
- No specific formulation preferred (limited evidence)
- Consider VTE risk

*Anti-androgens*
- Spironolactone: 50-200 mg daily (most commonly used)
- Cyproterone acetate (not US; in OCPs elsewhere)
- Finasteride: 5-ARI, not first-line
- Require contraception (feminize male fetus)

*Topical*
- Eflornithine cream for facial hirsutism
- Combine with laser/electrolysis

**Metabolic Management**

*Metformin*
- First-line for metabolic features
- Modest effect on weight, androgens, ovulation
- Indicated if: BMI ≥25, impaired glucose tolerance, T2DM
- May add to lifestyle intervention
- GI side effects; extended-release better tolerated

*GLP-1 Agonists*
- Emerging evidence in PCOS
- Significant weight loss
- Improve metabolic parameters
- Consider in obesity + PCOS

**Infertility Management:**

**Ovulation Induction**

| Therapy | First-Line | Success | Notes |
|---------|------------|---------|-------|
| Letrozole | Yes | 27-30% live birth | Superior to clomiphene (PPCOS2 trial) |
| Clomiphene | Second-line | 20-22% live birth | More multiple pregnancies |
| Metformin | Adjunct | Modest effect alone | May add to letrozole |
| Gonadotropins | Third-line | Higher | OHSS risk, monitoring required |

**IVF**
- For failed ovulation induction or other indications
- PCOS patients at high OHSS risk
- GnRH antagonist protocols preferred
- GnRH agonist trigger to reduce OHSS

**Surgical (LOD)**
- Laparoscopic ovarian drilling
- Alternative to gonadotropins in select cases
- Risk of surgical complications, adhesions, ovarian damage

**Long-Term Health:**

**Cardiometabolic Monitoring**
- OGTT every 1-3 years (more frequent if risk factors)
- Annual lipids, BP
- Assess CV risk factors

**Endometrial Protection**
- Induce withdrawal bleed every 3 months if amenorrheic
- Progestin for 10-14 days
- OCPs provide continuous protection
- Ultrasound if abnormal bleeding (endometrial thickness)

**Mental Health**
- Screen for depression and anxiety
- Validated tools (PHQ-9, GAD-7)
- Body image and QoL assessment
- Refer for psychological support as needed

**Pregnancy Considerations:**
- Higher risk: GDM, preeclampsia, preterm birth
- Metformin may continue in pregnancy (controversial benefit)
- Screen for GDM early and at 24-28 weeks`,
      keyTerms: [
        { term: 'PPCOS2 trial', definition: 'Landmark trial showing letrozole superior to clomiphene for ovulation induction in PCOS' },
        { term: 'GnRH agonist trigger', definition: 'Using GnRH agonist instead of hCG to induce ovulation in IVF; reduces OHSS risk' },
        { term: 'Laparoscopic ovarian drilling', definition: 'Surgical creation of holes in ovary surface; reduces androgens and may restore ovulation' },
        { term: 'GLP-1 agonists', definition: 'Medications like semaglutide that cause significant weight loss; emerging therapy in PCOS' },
        { term: 'PHQ-9', definition: 'Patient Health Questionnaire-9; validated depression screening tool recommended in PCOS' },
      ],
      clinicalNotes: 'The 2023 international evidence-based guideline emphasizes that lifestyle intervention is first-line for all overweight/obese PCOS patients before pharmacologic treatment. For infertility, letrozole is now definitively first-line based on PPCOS2 trial results showing higher live birth rates than clomiphene. Mental health screening should be routine given high prevalence of depression and anxiety in PCOS.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'International Evidence-based Guideline for the Assessment and Management of PCOS',
      source: 'Monash University / European Society of Human Reproduction and Embryology',
      authors: ['Teede, H.J.', 'et al.'],
      url: 'https://doi.org/10.1093/humrep/dead156',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Polycystic Ovary Syndrome',
      source: 'New England Journal of Medicine',
      authors: ['Ehrmann, D.A.'],
      url: 'https://doi.org/10.1056/NEJMra041536',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
    { targetId: 'reproductive-hormones', targetType: 'process', relationship: 'related', label: 'Reproductive Hormones' },
  ],
  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['pathology', 'endocrinology', 'infertility'],
    keywords: ['PCOS', 'polycystic ovary syndrome', 'hyperandrogenism', 'anovulation', 'infertility', 'insulin resistance'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'endocrinology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
