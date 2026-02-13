import { EducationalContent } from '../../types';

export const pcos: EducationalContent = {
  id: 'obgyn-pcos',
  type: 'condition',
  name: 'Polycystic Ovary Syndrome',
  nameEs: 'Sindrome de Ovario Poliquistico',
  alternateNames: ['PCOS', 'Stein-Leventhal Syndrome'],
  levels: {
    1: {
      level: 1,
      summary: 'PCOS is a common hormonal condition that can cause irregular periods, acne, extra body hair, and difficulty getting pregnant.',
      explanation:
        'Polycystic ovary syndrome (PCOS) is one of the most common hormone problems in women of childbearing age, affecting about 1 in 10. ' +
        'The ovaries may develop many small fluid-filled sacs (cysts) and may not release eggs regularly. Women with PCOS often have higher ' +
        'levels of male-type hormones (androgens), which can cause acne, hair growth on the face or body, and thinning hair on the head. ' +
        'Periods may be irregular or absent. Many women with PCOS also struggle with weight gain and have a higher risk of diabetes.',
      keyTerms: [
        { term: 'Ovary', definition: 'One of two organs that store eggs and make hormones like estrogen and progesterone' },
        { term: 'Hormone', definition: 'A chemical messenger in the body that controls many functions' },
        { term: 'Androgen', definition: 'A type of hormone (like testosterone) that is usually higher in males but present in females too' },
      ],
      analogies: ['PCOS is like a traffic jam in the hormone system — signals get backed up and don\'t flow the way they should.'],
      patientCounselingPoints: [
        'PCOS is very common and manageable with the right treatment plan.',
        'Healthy eating and regular exercise can significantly improve symptoms.',
        'Having PCOS does not mean you cannot have children — treatments are available.',
      ],
    },
    2: {
      level: 2,
      summary: 'PCOS is diagnosed by the Rotterdam criteria (2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovaries) and managed with lifestyle changes, OCPs, and metformin.',
      explanation:
        '**Diagnosis (Rotterdam Criteria — need 2 of 3):**\n' +
        '- Oligo-ovulation or anovulation (irregular or absent periods)\n' +
        '- Clinical or biochemical hyperandrogenism (acne, hirsutism, elevated testosterone)\n' +
        '- Polycystic ovaries on ultrasound (>=12 follicles 2-9 mm per ovary or ovarian volume >10 mL)\n\n' +
        '**Workup:**\n' +
        '- Total and free testosterone, DHEA-S\n' +
        '- TSH (exclude thyroid disease), prolactin, 17-hydroxyprogesterone (exclude late-onset CAH)\n' +
        '- Fasting glucose and insulin, lipid panel, HbA1c\n\n' +
        '**Treatment:**\n' +
        '- Lifestyle: weight loss of 5-10% significantly improves ovulation and metabolic parameters\n' +
        '- OCPs: regulate periods, reduce androgens, protect endometrium\n' +
        '- Spironolactone: anti-androgen for hirsutism (must use contraception — teratogenic)\n' +
        '- Metformin: insulin sensitizer, may restore ovulation\n' +
        '- Fertility: letrozole (first-line ovulation induction), clomiphene, gonadotropins',
      keyTerms: [
        { term: 'Rotterdam criteria', definition: 'International diagnostic standard for PCOS requiring 2 of 3 features: anovulation, hyperandrogenism, polycystic ovaries' },
        { term: 'Hirsutism', definition: 'Excess hair growth in a male-pattern distribution, scored using the modified Ferriman-Gallwey scale' },
        { term: 'Letrozole', definition: 'Aromatase inhibitor used as first-line ovulation induction in PCOS, superior to clomiphene per NICHD trial' },
      ],
    },
    3: {
      level: 3,
      summary: 'PCOS pathophysiology involves insulin resistance, LH hypersecretion, and ovarian androgen excess creating a self-perpetuating cycle, with long-term metabolic and oncologic risks requiring surveillance.',
      explanation:
        '**Pathophysiology:**\n' +
        '- Hypothalamic: increased GnRH pulse frequency favors LH over FSH secretion\n' +
        '- Ovarian: excess LH stimulates theca cells to produce androgens; insufficient FSH impairs follicle maturation -> anovulation\n' +
        '- Insulin resistance: hyperinsulinemia stimulates ovarian androgen production and reduces SHBG, increasing free androgen\n' +
        '- Adipose tissue: peripheral aromatization of androgens to estrone -> chronic anovulation -> unopposed estrogen on endometrium\n\n' +
        '**Phenotypes (Rotterdam):**\n' +
        '- A: full (HA + OD + PCO) — highest metabolic risk\n' +
        '- B: HA + OD (no PCO)\n' +
        '- C: HA + PCO (regular cycles) — lower metabolic risk\n' +
        '- D: OD + PCO (no HA) — \"non-hyperandrogenic PCOS\"\n\n' +
        '**Long-term Risks:**\n' +
        '- Type 2 diabetes: 5-8x increased risk; screen with OGTT q1-3 years\n' +
        '- Endometrial cancer: 2.7x risk due to unopposed estrogen; endometrial biopsy if prolonged amenorrhea\n' +
        '- Cardiovascular: dyslipidemia, subclinical atherosclerosis, though hard cardiovascular outcomes data remain limited\n' +
        '- NAFLD: screen with ALT; prevalence 30-40%\n' +
        '- Obstructive sleep apnea: screen with validated questionnaire regardless of BMI',
      keyTerms: [
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; reduced by insulin, increasing bioavailable testosterone in PCOS' },
        { term: 'Theca cells', definition: 'Ovarian cells that produce androgens under LH stimulation; hyperactive in PCOS' },
        { term: 'Unopposed estrogen', definition: 'Chronic estrogen exposure without progesterone, increasing risk of endometrial hyperplasia and cancer' },
      ],
      clinicalNotes: 'All PCOS patients need metabolic screening regardless of BMI. Endometrial protection is essential in anovulatory patients — cyclic progestins or OCPs.',
    },
    4: {
      level: 4,
      summary: 'Advanced PCOS management addresses ovarian drilling, gonadotropin protocols, anti-Mullerian hormone as a diagnostic adjunct, and the metabolic-reproductive interface in adolescents and lean phenotypes.',
      explanation:
        '**AMH as Diagnostic Tool:**\n' +
        '- Elevated AMH (>4.7 ng/mL) reflects increased antral follicle count\n' +
        '- 2023 international guidelines (PCOS guidelines) included AMH as alternative to ultrasound for diagnosis in adults\n' +
        '- Not validated in adolescents (physiologically elevated)\n\n' +
        '**Ovarian Drilling:**\n' +
        '- Laparoscopic ovarian drilling (LOD): 4-10 punctures per ovary with monopolar diathermy\n' +
        '- Mechanism: reduces androgen-producing stroma, lowers AMH, restores FSH responsiveness\n' +
        '- Comparable ovulation rates to gonadotropins with no multiple pregnancy risk\n' +
        '- Risk: diminished ovarian reserve if over-treated\n\n' +
        '**Adolescent PCOS:**\n' +
        '- Diagnosis requires both hyperandrogenism AND menstrual dysfunction (not ultrasound alone)\n' +
        '- Menstrual irregularity definitions vary by years post-menarche\n' +
        '- At risk vs. diagnosed categories to avoid premature labeling\n\n' +
        '**Lean PCOS (BMI <25):**\n' +
        '- ~20-30% of PCOS patients; insulin resistance still present in many\n' +
        '- Often underdiagnosed; hyperandrogenism drives diagnosis\n' +
        '- Inositol supplementation (myo-inositol:D-chiro-inositol 40:1) shows benefit in restoring ovulation\n\n' +
        '**IVF Considerations:**\n' +
        '- High risk for ovarian hyperstimulation syndrome (OHSS)\n' +
        '- GnRH antagonist protocol preferred; trigger with GnRH agonist instead of hCG\n' +
        '- Freeze-all strategy reduces OHSS risk significantly',
      keyTerms: [
        { term: 'Anti-Mullerian hormone (AMH)', definition: 'Glycoprotein produced by granulosa cells, elevated in PCOS due to increased small antral follicles; now accepted as diagnostic adjunct' },
        { term: 'Ovarian drilling', definition: 'Surgical technique creating small holes in the ovarian surface to reduce androgen production and restore ovulation' },
        { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome; a potentially life-threatening complication of fertility treatment, more common in PCOS' },
      ],
      clinicalNotes: 'AMH-based diagnosis should use assay-specific thresholds. In IVF for PCOS, GnRH agonist trigger plus freeze-all is the safest approach to prevent OHSS.',
    },
    5: {
      level: 5,
      summary: 'Expert-level PCOS science encompasses neuroendocrine programming, gut microbiome-androgen interactions, GWAS-identified susceptibility loci, and precision medicine approaches to phenotype-specific treatment.',
      explanation:
        '**Neuroendocrine Origins:**\n' +
        '- Prenatal androgen exposure programs hypothalamic GnRH pulse generator (animal models: prenatal DHT -> PCOS-like phenotype)\n' +
        '- AMH excess acts centrally to increase GnRH pulsatility via AMH receptor type II on GnRH neurons\n' +
        '- Kisspeptin/neurokinin B/dynorphin (KNDy) neuron dysfunction: potential therapeutic target\n\n' +
        '**Genetic Architecture:**\n' +
        '- GWAS: >20 susceptibility loci including DENND1A (androgen synthesis), THADA (insulin signaling), LHCGR, FSHR, INSR\n' +
        '- DENND1A splice variant V2 overexpressed in PCOS theca cells drives CYP17A1 upregulation\n' +
        '- Mendelian randomization: BMI causally linked to PCOS; PCOS causally linked to T2D independently of BMI\n\n' +
        '**Gut Microbiome:**\n' +
        '- Reduced alpha diversity in PCOS; depletion of Lactobacillus and enrichment of Prevotella\n' +
        '- Gut dysbiosis -> increased intestinal permeability -> LPS-driven inflammation -> insulin resistance\n' +
        '- Bile acid-FXR-FGF19 axis dysregulation contributes to metabolic phenotype\n' +
        '- Fecal microbiota transplant (animal studies) and probiotic supplementation show promise\n\n' +
        '**Emerging Therapies:**\n' +
        '- Opioid receptor antagonists (naltrexone): reduce LH pulsatility\n' +
        '- GLP-1 receptor agonists (liraglutide, semaglutide): superior weight loss and metabolic improvement vs. metformin\n' +
        '- SGLT2 inhibitors: under investigation for insulin-resistant PCOS\n' +
        '- AKR1C3 inhibitors: target intracrine androgen activation in peripheral tissues',
      keyTerms: [
        { term: 'DENND1A', definition: 'PCOS susceptibility gene whose V2 splice variant drives excess androgen production in theca cells' },
        { term: 'KNDy neurons', definition: 'Hypothalamic kisspeptin/neurokinin B/dynorphin neurons regulating GnRH pulsatility, dysregulated in PCOS' },
        { term: 'GLP-1 receptor agonist', definition: 'Incretin mimetic showing superior weight and metabolic outcomes in PCOS compared to metformin' },
      ],
      clinicalNotes: 'GLP-1 receptor agonists are emerging as the most effective pharmacotherapy for metabolic PCOS, particularly in obese phenotypes. DENND1A targeting remains preclinical. Precision medicine aims to tailor treatment to Rotterdam phenotype and metabolic profile.',
    },
  },
  media: [],
  citations: [
    { id: 'teede-pcos-2023', type: 'article', title: 'International Evidence-based Guideline for the Assessment and Management of PCOS', source: 'Monash University / ESHRE / ASRM', authors: ['Teede, H.J.', 'Misso, M.L.', 'Costello, M.F.'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-endometriosis', targetType: 'condition', relationship: 'sibling', label: 'Endometriosis' },
    { targetId: 'obgyn-fertility', targetType: 'topic', relationship: 'related', label: 'Fertility and Infertility' },
    { targetId: 'obgyn-contraception', targetType: 'topic', relationship: 'see-also', label: 'Contraception' },
  ],
  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['gynecology', 'endocrinology', 'metabolic', 'infertility'],
    keywords: ['PCOS', 'polycystic ovary', 'hyperandrogenism', 'anovulation', 'insulin resistance', 'hirsutism'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn', 'medicine'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
