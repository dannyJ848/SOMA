/**
 * Male Infertility - Educational Content
 */

import { EducationalContent } from '../../types';

export const maleInfertility: EducationalContent = {
  id: 'condition-male-infertility',
  type: 'condition',
  name: 'Male Infertility',
  alternateNames: ['Male Factor Infertility', 'Azoospermia', 'Oligospermia'],

  levels: {
    1: {
      level: 1,
      summary: 'Male infertility means a man has trouble fathering a child, usually due to problems with sperm production or delivery.',
      explanation: `Male infertility contributes to about half of all couples having trouble getting pregnant.

**Common Causes:**
- Low sperm count
- Sperm that don't move well
- Abnormally shaped sperm
- Blockages preventing sperm release
- Hormone problems
- Previous infections

**Risk Factors:**
- Previous groin surgery
- Undescended testicles as a child
- Varicocele (enlarged vein in scrotum)
- Certain medications
- Tobacco, alcohol, drugs

**When to Get Checked:**
- Unable to conceive after 1 year of trying
- Known risk factors
- Partner over 35

**Good News:**
- Many causes are treatable
- Assisted reproduction options available
- Even men with very low sperm counts can become fathers`,
      keyTerms: [
        { term: 'sperm', definition: 'Male reproductive cells needed to fertilize an egg' },
        { term: 'infertility', definition: 'Inability to achieve pregnancy after 1 year of trying' },
        { term: 'varicocele', definition: 'Enlarged veins in the scrotum that can affect sperm' },
      ],
      analogies: [
        'Sperm are like swimmers in a race - they need to be numerous, fast, and healthy to win.',
      ],
      examples: [
        'A varicocele is present in 40% of men with infertility and is often treatable with surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Male infertility results from pretesticular (hormonal), testicular (production), or post-testicular (delivery) causes, evaluated by semen analysis and treated based on etiology.',
      explanation: `## Definition

Infertility: Failure to conceive after 12 months of unprotected intercourse.

Male factor: Present in 50% of infertile couples (30% male only, 20% combined).

## Semen Analysis (WHO 2021)

**Normal Parameters:**
- Volume: ≥1.4 mL
- Concentration: ≥16 million/mL
- Total motility: ≥42%
- Progressive motility: ≥30%
- Morphology: ≥4% normal forms

**Terminology:**
- Azoospermia: No sperm
- Oligospermia: <16 million/mL
- Asthenospermia: Low motility
- Teratospermia: Low morphology

## Causes

**Pretesticular (Hormonal):**
- Hypogonadotropic hypogonadism
- Hyperprolactinemia
- Exogenous testosterone

**Testicular:**
- Varicocele (35%)
- Cryptorchidism history
- Genetic (Klinefelter, Y deletions)
- Infections (mumps orchitis)

**Post-testicular:**
- Obstruction (vasectomy, CBAVD)
- Ejaculatory dysfunction
- Antisperm antibodies

## Evaluation

**History:**
- Duration of infertility
- Prior pregnancies
- Medical/surgical history
- Medications
- Lifestyle factors

**Physical Exam:**
- Testicular size and consistency
- Varicocele
- Vas deferens palpable
- Secondary sex characteristics

**Initial Workup:**
- Semen analysis (x2 if abnormal)
- Hormone panel if indicated`,
      keyTerms: [
        { term: 'azoospermia', definition: 'Complete absence of sperm in ejaculate', pronunciation: 'ay-zoo-SPER-mee-ah' },
        { term: 'CBAVD', definition: 'Congenital bilateral absence of vas deferens - associated with CF' },
        { term: 'WHO criteria', definition: 'World Health Organization standards for semen analysis' },
      ],
      analogies: [
        'Semen analysis is like a report card for sperm - checking numbers, movement, and appearance.',
      ],
    },
    3: {
      level: 3,
      summary: 'Male infertility evaluation requires hormonal profiling, genetic testing, and specialized techniques to differentiate obstructive from non-obstructive azoospermia.',
      explanation: `## Hormonal Evaluation

**When to Test:**
- Sperm concentration <10 million/mL
- Sexual dysfunction
- Clinical signs of hypogonadism

**Panel:**
- FSH
- Testosterone (AM)
- +/- LH, prolactin, estradiol

**Interpretation:**
| FSH | T | Interpretation |
|-----|---|----------------|
| Low | Low | Hypogonadotropic hypogonadism |
| High | Low | Primary hypogonadism |
| High | Normal | Impaired spermatogenesis |
| Normal | Normal | Obstruction likely if azoospermic |

## Genetic Testing

**Indications:**
- Severe oligospermia (<5 million/mL)
- Non-obstructive azoospermia
- Before ICSI

**Tests:**
- Karyotype (Klinefelter 47,XXY)
- Y chromosome microdeletions
- CF gene testing (if CBAVD)

**Y Deletions:**
- AZFa: Sertoli-cell only, poor prognosis
- AZFb: Maturation arrest, poor prognosis
- AZFc: Variable, may have sperm on TESE

## Azoospermia Workup

**Obstructive (OA):**
- Normal testicular size
- Normal FSH
- Dilated epididymis
- CFTR testing

**Non-Obstructive (NOA):**
- Small/soft testes
- Elevated FSH
- Genetic testing
- Diagnostic TESE may be needed

## Advanced Testing

**Sperm DNA Fragmentation:**
- Associated with failed IVF
- Lifestyle modification may help
- TESE sperm may be better

**Scrotal Ultrasound:**
- Varicocele confirmation
- Testicular lesions
- Epididymal pathology`,
      keyTerms: [
        { term: 'NOA', definition: 'Non-obstructive azoospermia - testicular failure' },
        { term: 'OA', definition: 'Obstructive azoospermia - blocked ducts with normal production' },
        { term: 'AZF', definition: 'Azoospermia factor - Y chromosome regions critical for spermatogenesis' },
      ],
      clinicalNotes: 'All men with NOA should have karyotype and Y chromosome microdeletion testing. AZFa and AZFb deletions predict poor outcomes with sperm retrieval.',
    },
    4: {
      level: 4,
      summary: 'Advanced male infertility treatment includes microsurgical techniques, sperm retrieval procedures, and hormonal optimization.',
      explanation: `## Varicocele Repair

**Indications:**
- Palpable varicocele
- Abnormal semen parameters
- Female partner with normal fertility
- +/- Pain

**Techniques:**
- Microsurgical subinguinal (gold standard)
- Laparoscopic
- Percutaneous embolization

**Outcomes:**
- 60-70% improvement in parameters
- 30-40% natural pregnancy rate
- May improve ICSI outcomes

## Microsurgical Reconstruction

**Vasovasostomy:**
- Vasectomy reversal
- <3 years: 95% patency, 75% pregnancy
- >15 years: 70% patency, 30% pregnancy

**Vasoepididymostomy:**
- Epididymal obstruction
- 60-85% patency
- Lower pregnancy rates
- More technically demanding

## Sperm Retrieval

**Obstructive Azoospermia:**
- PESA: Percutaneous epididymal aspiration
- MESA: Microsurgical epididymal aspiration
- Excellent sperm quantity

**Non-Obstructive Azoospermia:**
- Conventional TESE
- Micro-TESE: 50-60% retrieval rate
- Requires ICSI

**Fresh vs Frozen:**
- OA: Frozen often adequate
- NOA: Fresh may be preferred

## Hormonal Manipulation

**Hypogonadotropic Hypogonadism:**
- hCG + FSH therapy
- Excellent prognosis
- May take 6-12 months

**Empiric Therapy:**
- Clomiphene citrate
- Anastrozole (aromatase inhibitor)
- hCG
- Controversial efficacy in other contexts

## Exogenous Testosterone

**Problem:**
- Suppresses spermatogenesis
- Common cause of iatrogenic infertility

**Recovery:**
- Stop testosterone
- Consider hCG/FSH or clomiphene
- Recovery in 6-12 months usually
- Some permanent`,
      keyTerms: [
        { term: 'micro-TESE', definition: 'Microsurgical testicular sperm extraction under operating microscope' },
        { term: 'MESA', definition: 'Microsurgical epididymal sperm aspiration' },
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection - single sperm injected into egg' },
      ],
      clinicalNotes: 'Exogenous testosterone is a common cause of male infertility. Always ask about testosterone supplementation in infertile men.',
    },
    5: {
      level: 5,
      summary: 'Expert male fertility care encompasses oncofertility, advanced genetic counseling, and emerging regenerative approaches.',
      explanation: `## Oncofertility

**Pre-Treatment Counseling:**
- All males of reproductive age
- Sperm banking before treatment
- May need emergency retrieval

**Cancer Treatment Effects:**
- Alkylating agents: High risk
- Radiation: Dose-dependent
- Surgery: May affect ejaculation

**Post-Treatment:**
- Semen analysis at 6-12 months
- May recover over years
- Micro-TESE if persistent azoospermia

## Advanced Genetics

**Preimplantation Genetic Testing:**
- PGT-M for single gene disorders
- PGT-A for aneuploidy
- When Y deletions present

**Genetic Counseling:**
- Y deletions transmitted to sons
- Klinefelter mosaic may have sperm
- CF carrier status implications

## Emerging Therapies

**Spermatogonial Stem Cell Transplant:**
- Experimental
- Prepubertal cancer patients
- Freeze testicular tissue
- Reimplant after treatment

**In Vitro Spermatogenesis:**
- Culture spermatogonia to sperm
- Mouse models successful
- Human application years away

**Gene Therapy:**
- Correct genetic defects
- Ethical considerations
- Experimental

## Complex Cases

**Retrograde Ejaculation:**
- Sperm in post-ejaculatory urine
- Alkalinize urine
- Use for IUI or ICSI

**Anejaculation:**
- Penile vibratory stimulation
- Electroejaculation
- Surgical retrieval if fails

**Spinal Cord Injury:**
- PVS or EEJ
- Often adequate sperm quality
- May need ICSI

## Outcomes and Counseling

**Prognosis Factors:**
- Etiology
- Duration of infertility
- Female partner factors
- Genetic findings

**When to Refer:**
- Azoospermia
- Surgical candidates
- Failed medical therapy
- Genetic conditions

**Psychological Support:**
- Infertility counseling
- Donor sperm discussion
- Adoption options`,
      keyTerms: [
        { term: 'spermatogonial stem cells', definition: 'Stem cells that can regenerate sperm production' },
        { term: 'electroejaculation', definition: 'Electrical stimulation to induce ejaculation in SCI patients' },
        { term: 'PGT', definition: 'Preimplantation genetic testing of embryos' },
      ],
      clinicalNotes: 'Testicular tissue cryopreservation for prepubertal boys before gonadotoxic therapy is available at specialized centers. Counsel families about experimental nature.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-male-infertility',
      type: 'article',
      title: 'Male Infertility',
      source: 'AUA/ASRM Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'structure-male-reproductive-anatomy', targetType: 'structure', relationship: 'related', label: 'Male Anatomy' },
  ],
  tags: {
    systems: ['male reproductive'],
    topics: ['infertility', 'reproduction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default maleInfertility;
