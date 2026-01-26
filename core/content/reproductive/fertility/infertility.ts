import { LegacyEducationalContent } from '../../types'

export const infertilityContent: LegacyEducationalContent = {
  title: 'Infertility',
  category: 'reproductive',
  subcategory: 'fertility',
  levels: {
    1: {
      title: 'Understanding Infertility',
      content: `
## What is Infertility?

Infertility is defined as the inability to conceive after 12 months of regular, unprotected intercourse.

### Key Definitions

- **Infertility**: Not conceiving after 1 year of trying (or 6 months if 35+)
- **Primary infertility**: Never achieved pregnancy
- **Secondary infertility**: Difficulty conceiving after previous pregnancy
- **Subfertility**: Reduced fertility but not sterile

### Common Causes

**Female:**
- Ovulation problems
- Blocked fallopian tubes
- Uterine issues
- Age-related factors

**Male:**
- Low sperm count
- Poor sperm movement
- Abnormal sperm shape

**Both:**
- Stress
- Weight issues
- Smoking/alcohol
- Medical conditions

### Important Note

Infertility is common and treatable. About 1 in 8 couples experience fertility challenges.
      `,
      keyPoints: [
        'Infertility affects both males and females equally',
        'Age affects fertility, especially after 35',
        'Many causes are treatable with medical help'
      ]
    },
    novice: {
      title: 'Causes and Risk Factors',
      content: `
## Common Causes of Infertility

### Female Causes (40%)

| Cause | Description |
|-------|-------------|
| Ovulation disorders | PCOS, thyroid issues, premature ovarian insufficiency |
| Tubal factors | Blocked/damaged tubes from infection, endometriosis |
| Uterine factors | Fibroids, polyps, structural abnormalities |
| Endometriosis | Tissue growing outside uterus |

### Male Causes (40%)

| Cause | Description |
|-------|-------------|
| Varicocele | Enlarged veins in testicles |
| Infections | Sexually transmitted infections |
| Ejaculation issues | Retrograde ejaculation, blockages |
| Hormonal imbalances | Low testosterone, other hormone issues |

### Unexplained (20%)

Sometimes no clear cause is found despite thorough testing.

### Risk Factors

- Age (especially over 35)
- Smoking
- Excessive alcohol
- Being very overweight or underweight
- Excessive exercise
- Exposure to toxins
- Chronic stress
      `,
      keyPoints: [
        'Multiple factors can contribute to infertility',
        'Both partners should be evaluated',
        'Lifestyle factors are modifiable risks'
      ]
    },
    intermediate: {
      title: 'Diagnosis and Treatment Options',
      content: `
## Fertility Evaluation

### Initial Assessment

**For Females:**
- Medical history review
- Physical examination
- Blood tests (hormone levels)
- Ovulation testing
- Pelvic ultrasound

**For Males:**
- Medical history
- Physical examination
- Semen analysis
- Hormone testing

### Additional Testing

| Test | Purpose |
|------|---------|
| HSG (Hysterosalpingogram) | Check fallopian tube patency |
| Sonohysterogram | Evaluate uterine cavity |
| Laparoscopy | Visualize pelvic organs |
| Ovarian reserve testing | AMH, FSH, antral follicle count |
| Genetic testing | Karyotype analysis |

### Treatment Progression

**Level 1: Lifestyle Modifications**
- Weight management
- Smoking cessation
- Reducing alcohol
- Stress reduction
- Timing intercourse

**Level 2: Medications**
- Clomiphene citrate
- Letrozole
- Gonadotropins
- Metformin (for PCOS)

**Level 3: Surgical Interventions**
- Laparoscopic surgery
- Myomectomy (fibroid removal)
- Tubal surgery
- Varicocele repair

**Level 4: Assisted Reproductive Technology**
- IUI (Intrauterine insemination)
- IVF (In vitro fertilization)
- ICSI (Intracytoplasmic sperm injection)
- Egg/sperm donation
- Gestational surrogacy
      `,
      keyPoints: [
        'Treatment often follows a stepwise approach',
        'Both partners should be evaluated simultaneously',
        'Success rates vary by cause and treatment type'
      ]
    },
    advanced: {
      title: 'Infertility Pathophysiology',
      content: `
## Mechanisms of Infertility

### Ovulatory Dysfunction Mechanisms

**Hypothalamic:**
- GnRH pulse frequency disruption
- Stress-induced amenorrhea
- Exercise-induced hypothalamic suppression
- Kallmann syndrome (GnRH deficiency)

**Pituitary:**
- Hyperprolactinemia (prolactinoma)
- Sheehan's syndrome (postpartum pituitary necrosis)
- Pituitary adenomas

**Ovarian:**
- diminished ovarian reserve
- Premature ovarian insufficiency (POI)
- PCOS (androgen excess, insulin resistance)

### Tubal and Peritoneal Factors

**Mechanisms:**
- Tubal obstruction from PID
- Peritubal adhesions from endometriosis
- Fimbrial damage preventing egg pickup
- Tubal motility dysfunction
- Hydrosalpinx (fluid-filled tube)

### Male Factor Pathophysiology

**Spermatogenic Failure:**
- Primary testicular failure
- Klinefelter syndrome (47,XXY)
- Y chromosome microdeletions
- Sertoli cell-only syndrome

**Obstructive Azoospermia:**
- Congenital absence of vas deferens (CFTR mutations)
- Epididymal obstruction
- Ejaculatory duct obstruction

**Functional Disorders:**
- Varicocele (increased testicular temperature)
- Oxidative stress
- Sperm DNA fragmentation
- Apoptosis abnormalities

### Immunological Factors

- Antisperm antibodies
- Antiphospholipid syndrome
- Thyroid autoimmunity
- Unexplained recurrent pregnancy loss
      `,
      keyPoints: [
        'Infertility arises from diverse physiological disruptions',
        'Genetic factors contribute to many cases',
        'Immunological mechanisms are increasingly recognized'
      ]
    },
    expert: {
      title: 'Advanced Infertility Management',
      content: `
## Evidence-Based Treatment Protocols

### Ovulation Induction Algorithms

**First-Line for PCOS:**
- Letrozole 2.5-7.5mg days 3-7 (superior to clomid)
- Clomiphene citrate 50-150mg days 5-9
- Metformin 500-2000mg daily (adjunctive)

**Gonadotropin Protocols:**
- Step-up protocol: Start 75 IU, increase by 37.5 IU every 3-5 days
- Step-down protocol: Higher starting dose, decrease after follicle emergence
- Sequential protocol: Clomid followed by low-dose hMG

### IVF Stimulation Protocols

| Protocol | Indication | Characteristics |
|----------|------------|-----------------|
| Long GnRH agonist | High responders | Downregulation before stimulation |
| Antagonist | Poor responders, OHSS risk | Flexible, shorter duration |
| Flare | Poor responders | Agonist stimulates initially |
| Mild/Minimal | Low ovarian reserve | Lower medication doses |
| Natural cycle | Avoiding hyperstimulation | No or minimal stimulation |

### ICSI Indications (ESIRE 2023)

- Severe male factor (<1 million motile sperm)
- Previous fertilization failure
- Need for surgical sperm retrieval
- Preimplantation genetic testing (PGT)
- Cryopreserved oocytes/thawed oocytes

### Recurrent Implantation Failure (RIF) Workup

**Defined as:**
- ≥3 failed IVF cycles with
- ≥4 good-quality embryos transferred

**Evaluation:**
- Endometrial receptivity array (ERA)
- Thrombophilia screening
- Immunological testing
- Chronic endometritis biopsy (CD138 staining)
- Sperm DNA fragmentation

### Emerging Treatments

- Ovarian PRP (platelet-rich plasma) infusion
- Granulocyte colony-stimulating factor (G-CSF)
- Stem cell therapy (investigational)
- Mitochondrial replacement therapy (research)
- Artificial gametes (experimental)

### Success Rates by Age (SART 2023)

| Age | Live Birth Rate per IVF Cycle |
|-----|------------------------------|
| <35 | ~45-55% |
| 35-37 | ~35-40% |
| 38-40 | ~20-25% |
| 41-42 | ~10-15% |
| >42 | ~3-5% |
      `,
      keyPoints: [
        'Personalized protocols optimize outcomes',
        'Multiple factors contribute to treatment success',
        'Age remains the most significant prognostic factor'
      ]
    }
  }
}
