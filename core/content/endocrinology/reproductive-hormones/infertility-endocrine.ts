/**
 * Infertility - Endocrine Perspective - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const infertilityEndocrine: EducationalContent = {
  id: 'condition-infertility-endocrine',
  type: 'condition',
  name: 'Endocrine Infertility',
  alternateNames: ['Hormonal Infertility', 'Ovulatory Infertility', 'Hypothalamic Infertility'],
  hpoId: 'HP:0000789',

  levels: {
    1: {
      level: 1,
      summary: 'Endocrine causes of infertility involve hormone imbalances that prevent normal ovulation or sperm production, affecting about 15% of couples trying to conceive.',
      explanation: 'Infertility is defined as not being able to get pregnant after one year of trying (or six months if woman is over 35). About 15% of couples experience infertility.\n\n**Endocrine causes in women:**\n- Polycystic ovary syndrome (PCOS)\n- Thyroid problems\n- High prolactin levels\n- Early menopause\n- Stress or excessive exercise\n- Eating disorders\n\n**Endocrine causes in men:**\n- Low testosterone\n- High prolactin\n- Thyroid problems\n\n**How hormones affect fertility:**\n- Hormones control egg development and release\n- Hormones prepare the uterus for pregnancy\n- Imbalances can prevent ovulation\n\n**Evaluation:**\n- Blood tests for hormone levels\n- Ovulation tracking\n- Semen analysis for men\n- Imaging of reproductive organs\n\n**Treatment:**\n- Medications to stimulate ovulation\n- Hormone replacement\n- Treating underlying condition\n- Assisted reproductive technologies (IVF)',
      keyTerms: [
        { term: 'infertility', definition: 'Inability to conceive after one year of unprotected intercourse' },
        { term: 'ovulation', definition: 'Release of an egg from the ovary' },
        { term: 'assisted reproductive technology', definition: 'Medical procedures to help with fertility' },
      ],
      analogies: [
        'Fertility hormones are like a carefully choreographed dance. When one dancer is off-beat, the whole performance (conception) cannot happen.',
      ],
      examples: [
        'A woman with irregular periods who is not ovulating regularly may need medication to help her ovaries release eggs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endocrine infertility involves hypothalamic-pituitary-gonadal axis dysfunction. Common causes include PCOS, hypogonadotropic hypogonadism, hyperprolactinemia, thyroid disease, and premature ovarian insufficiency.',
      explanation: '## Female Endocrine Infertility\n\n**Hypothalamic Causes:**\n- Functional hypothalamic amenorrhea (stress, weight loss, exercise)\n- Kallmann syndrome\n- Tumors\n\n**Pituitary Causes:**\n- Hyperprolactinemia\n- Hypopituitarism\n- Sheehan syndrome\n- Empty sella\n\n**Ovarian Causes:**\n- PCOS (most common)\n- Premature ovarian insufficiency (POI)\n- Resistant ovary syndrome\n\n**Thyroid:**\n- Hypothyroidism\n- Hyperthyroidism\n\n## Male Endocrine Infertility\n\n**Hypothalamic-Pituitary:**\n- Hypogonadotropic hypogonadism (Kallmann)\n- Hyperprolactinemia\n- Hypopituitarism\n\n**Testicular:**\n- Primary testicular failure\n- Klinefelter syndrome\n- Chemotherapy/radiation\n\n**Thyroid/Adrenal:**\n- Thyroid dysfunction\n- Congenital adrenal hyperplasia\n\n## Evaluation\n\n**Female Workup:**\n| Test | Purpose |\n|------|---------|\n| Day 3 FSH, LH | Ovarian reserve |\n| Estradiol | Baseline follicular activity |\n| AMH | Ovarian reserve |\n| Progesterone (day 21) | Confirm ovulation |\n| TSH | Thyroid function |\n| Prolactin | Exclude hyperprolactinemia |\n| HSG | Tubal patency |\n\n**Male Workup:**\n- Semen analysis\n- Testosterone, LH, FSH\n- Prolactin if testosterone low\n\n**Ovulation Tracking:**\n- Basal body temperature\n- Ovulation predictor kits (LH surge)\n- Serial ultrasounds\n- Progesterone levels',
      keyTerms: [
        { term: 'hypogonadotropic hypogonadism', definition: 'Low sex hormones due to pituitary/hypothalamic failure' },
        { term: 'AMH', definition: 'Anti-Mullerian hormone; marker of ovarian reserve' },
        { term: 'functional hypothalamic amenorrhea', definition: 'Period loss from stress, weight loss, or exercise' },
      ],
    },
    3: {
      level: 3,
      summary: 'Endocrine infertility management targets the underlying axis dysfunction with ovulation induction for PCOS, gonadotropins for hypogonadotropic hypogonadism, dopamine agonists for prolactinomas, and appropriate thyroid replacement.',
      explanation: '## PCOS-Related Infertility\n\n**First-Line:**\n- Weight loss if overweight (5-10% can restore ovulation)\n- Letrozole 2.5-7.5 mg days 3-7\n- Higher ovulation rates than clomiphene\n- Lower multiple pregnancy risk\n\n**Clomiphene Citrate:**\n- 50-150 mg days 3-7 or 5-9\n- Induces ovulation in 80%\n- Multiple pregnancy rate 5-10%\n- Limit 6 cycles\n\n**Second-Line:**\n- Gonadotropins (FSH, hMG)\n- Higher cost and monitoring\n- Higher multiple pregnancy risk\n- IVF if gonadotropins fail\n\n**Metformin:**\n- May restore ovulation\n- Adjunct to fertility treatments\n- Especially if insulin resistant\n\n## Hypogonadotropic Hypogonadism\n\n**Induction of Ovulation:**\n- Pulsatile GnRH pump\n- Or gonadotropin injections\n- High success rates\n- Requires specialist care\n\n**In Men:**\n- hCG stimulates testosterone and sperm\n- Add FSH if azoospermic\n- Takes months to years for sperm production\n\n## Hyperprolactinemia\n\n**Treatment:**\n- Cabergoline (preferred)\n- Bromocriptine\n- Ovulation usually returns when prolactin normalized\n\n## Premature Ovarian Insufficiency\n\n**Fertility Options:**\n- Donor oocytes (high success)\n- IVF with own eggs (low success)\n- Adoption\n- Gestational carrier\n\n**Not Recommended:**\n- Ovarian stimulation (poor response)\n- "Fertility preservation" after diagnosis\n\n## Thyroid Disease\n\n**Hypothyroidism:**\n- Correct before fertility treatment\n- TSH goal <2.5 preconception\n- Increases ovulation and pregnancy rates\n\n**Hyperthyroidism:**\n- Treat before conception\n- Radioiodine contraindicated if pregnant\n- Surgery or ATDs\n\n## Luteal Phase Defect\n\n**Controversial entity:**\n- Inadequate progesterone\n- Short luteal phase\n- Treat with progesterone supplementation\n- Or ovulation induction\n\n## Assisted Reproductive Technologies\n\n**Intrauterine Insemination (IUI):**\n- With ovulation induction\n- Moderate success rates\n\n**IVF:**\n- Bypasses tubal/ovulation issues\n- Controlled ovarian stimulation\n- Higher success rates\n- More invasive and expensive\n\n**ICSI:**\n- For male factor\n- Direct sperm injection',
      keyTerms: [
        { term: 'letrozole', definition: 'Aromatase inhibitor; first-line for ovulation induction in PCOS' },
        { term: 'GnRH pump', definition: 'Device delivering pulsatile GnRH for ovulation induction' },
        { term: 'donor oocytes', definition: 'Eggs from another woman for IVF' },
      ],
      clinicalNotes: 'Letrozole is now preferred over clomiphene citrate as first-line ovulation induction in PCOS due to higher live birth rates and lower multiple pregnancy rates.',
    },
    4: {
      level: 4,
      summary: 'Advanced endocrine infertility management includes fertility preservation, management of complex cases like hypopituitarism, pregnancy outcomes in treated patients, and ethical considerations in assisted reproduction.',
      explanation: '## Fertility Preservation\n\n**Indications:**\n- Cancer treatment (chemotherapy, radiation)\n- Gender-affirming hormone therapy\n- Early menopause risk\n- Elective (social) egg freezing\n\n**Methods:**\n- Oocyte/embryo cryopreservation\n- Ovarian tissue cryopreservation (experimental)\n- Sperm banking for men\n\n**Timing:**\n- Before gonadotoxic therapy\n- Optimal before age 35 for elective\n\n## Complex Cases\n\n**Hypopituitarism:**\n- Multiple hormone deficiencies\n- Must optimize all axes\n- GH replacement may help fertility\n- Close monitoring required\n\n**Hypothalamic Amenorrhea:**\n- First: Lifestyle modification\n- Ovulation induction if persistent\n- May need gonadotropins\n- Risk of OHSS\n\n**Sheehan Syndrome:**\n- Complex pituitary deficiency\n- May need multiple replacements\n- Fertility possible with treatment\n- High-risk pregnancy\n\n## Pregnancy Considerations\n\n**After Ovulation Induction:**\n- Higher multiple pregnancy risk\n- Need for early ultrasound\n- Selective reduction counseling if high-order\n\n**With Endocrine Disorders:**\n- Close monitoring of thyroid\n- Continue prolactinoma treatment (bromocriptine safe)\n- Adjust hydrocortisone if adrenal insufficiency\n- Higher risk pregnancies\n\n**IVF Pregnancies:**\n- Higher risk of complications\n- Preterm delivery\n- Preeclampsia\n- Close obstetric care\n\n## Ethical and Legal Considerations\n\n**Access to Care:**\n- Insurance coverage varies\n- Cost barriers\n- Disparities in access\n\n**Multiple Pregnancy:**\n- Elective single embryo transfer\n- Reducing multiples\n- Patient counseling\n\n**Third-Party Reproduction:**\n- Donor gametes\n- Gestational carriers\n- Legal complexities\n- Psychological counseling needed\n\n**Emerging Technologies:**\n- Mitochondrial replacement\n- In vitro gametogenesis\n- Gene editing\n- Ethical debates ongoing',
      keyTerms: [
        { term: 'fertility preservation', definition: 'Preserving eggs/sperm before treatment that may cause infertility' },
        { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome; complication of ovulation induction' },
        { term: 'oocyte cryopreservation', definition: 'Egg freezing for future use' },
      ],
      clinicalNotes: 'Fertility preservation should be discussed with all reproductive-age patients before gonadotoxic cancer therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary fertility research addresses ovarian aging mechanisms, novel ovulation induction protocols, fertility preservation advances, and personalized medicine approaches to optimize outcomes in endocrine infertility.',
      explanation: '## Ovarian Aging Research\n\n**Mechanisms:**\n- Oocyte quality decline\n- Mitochondrial dysfunction\n- Telomere shortening\n- Epigenetic changes\n\n**Biomarkers:**\n- AMH, FSH currently used\n- Novel markers: Inhibin B, antral follicle count\n- Ovarian reserve testing\n\n**Interventions:**\n- Ovarian rejuvenation (experimental)\n- PRP injection into ovary\n- Limited evidence\n- Ethical concerns\n\n## Novel Fertility Treatments\n\n**In Vitro Maturation (IVM):**\n- Immature egg retrieval\n- Maturation in lab\n- Lower hormone stimulation\n- Lower cost\n- Lower success rates than IVF\n\n**Freeze-All Strategies:**\n- Freeze all embryos\n- Transfer in subsequent cycle\n- Better endometrial receptivity\n- Lower OHSS risk\n\n**Time-Lapse Imaging:**\n- Embryo development monitoring\n- Non-invasive selection\n- May improve outcomes\n\n**AI in Embryo Selection:**\n- Machine learning algorithms\n- Morphokinetic analysis\n- Standardizing selection\n\n## Personalized Medicine\n\n**Pharmacogenomics:**\n- FSH receptor variants\n- Response to stimulation\n- Dosing individualization\n\n**Endometrial Receptivity:**\n- ERA test (controversial)\n- Personalized transfer timing\n- Limited supporting evidence\n\n**Immunology:**\n- NK cell testing (controversial)\n- Immunotherapy for RPL\n- Limited evidence base\n\n## Male Fertility Advances\n\n**Micro-TESE:**\n- Microdissection testicular sperm extraction\n- For non-obstructive azoospermia\n- Specialist procedure\n\n**Stem Cell Approaches:**\n- In vitro sperm production\n- Experimental\n- Ethical considerations\n\n## Future Directions\n\n**Artificial Gametes:**\n- From stem cells\n- Not yet clinically available\n- Regulatory challenges\n\n**Uterus Transplantation:**\n- For absolute uterine factor infertility\n- Specialized centers only\n- Experimental\n\n**Fertility Education:**\n- School-based programs\n- Age-related fertility awareness\n- Prevention of age-related infertility\n\n**Research Priorities:**\n- Improve IVF success rates\n- Reduce multiple pregnancies\n- Affordable access\n- Male factor treatments\n- Preservation techniques',
      keyTerms: [
        { term: 'IVM', definition: 'In vitro maturation of oocytes' },
        { term: 'micro-TESE', definition: 'Microsurgical sperm retrieval from testicle' },
        { term: 'ovarian rejuvenation', definition: 'Experimental techniques to restore ovarian function' },
      ],
      clinicalNotes: 'The future of fertility treatment lies in personalization based on genetics, biomarkers, and AI-assisted embryo selection to optimize outcomes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'who-infertility-2020',
      type: 'article',
      title: 'WHO Guidelines on Infertility',
      source: 'World Health Organization',
      authors: ['WHO Expert Group'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
    { targetId: 'condition-hypopituitarism', targetType: 'condition', relationship: 'related', label: 'Hypopituitarism' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['endocrinology', 'gynecology', 'reproductive medicine'],
    keywords: ['infertility', 'ovulation', 'IVF', 'fertility', 'endocrine'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'ob-gyn'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default infertilityEndocrine;
