import { LegacyEducationalContent } from '../../types'

export const fertilityBasicsContent: LegacyEducationalContent = {
  title: 'Fertility Basics',
  category: 'reproductive',
  subcategory: 'fertility',
  levels: {
    1: {
      title: 'Introduction to Fertility',
      content: `
## What is Fertility?

Fertility is the natural ability to conceive a child. It involves complex processes in both the male and female reproductive systems.

### Key Concepts

- **Conception**: When sperm fertilizes an egg
- **Fertile window**: Days in menstrual cycle when pregnancy is possible
- **Ovulation**: Release of an egg from the ovary
- **Sperm health**: Quality and quantity of sperm

### Did You Know?

- The fertile window is about 6 days per cycle
- Sperm can live up to 5 days inside the female body
- Eggs live about 12-24 hours after ovulation
      `,
      keyPoints: [
        'Fertility involves both male and female factors',
        'Timing is important for conception',
        'Age affects fertility for both sexes'
      ]
    },
    novice: {
      title: 'Understanding the Menstrual Cycle',
      content: `
## The Menstrual Cycle and Fertility

A typical menstrual cycle lasts 21-35 days, with day 1 being the first day of bleeding.

### Cycle Phases

1. **Follicular Phase (Days 1-13)**
   - Egg follicles develop in ovaries
   - Uterine lining thickens
   - Estrogen rises

2. **Ovulation (Day 14)**
   - Egg release from ovary
   - Peak fertility day
   - LH surge triggers release

3. **Luteal Phase (Days 15-28)**
   - Progesterone increases
   - Uterus prepares for possible pregnancy
   - If no fertilization, cycle restarts

### Tracking Your Cycle

- Calendar method
- Basal body temperature
- Ovulation predictor kits
- Cervical mucus monitoring
      `,
      keyPoints: [
        'Ovulation typically occurs 14 days before menstruation',
        'The fertile window includes the 5 days before ovulation',
        'Cycle tracking can help identify fertile days'
      ]
    },
    intermediate: {
      title: 'Factors Affecting Fertility',
      content: `
## Fertility Influencing Factors

Multiple factors can affect fertility in all individuals.

### Female Factors

| Factor | Impact | Details |
|--------|--------|---------|
| Age | Significant decline after 35 | Egg quality and quantity decrease |
| Weight | Both under/overweight affect hormones | BMI 18.5-24.9 optimal |
| Stress | Can delay or prevent ovulation | Cortisol affects reproductive hormones |
| Smoking | Accelerates egg loss | Can cause earlier menopause |
| Alcohol | Reduces conception chances | Affects hormone levels |

### Male Factors

| Factor | Impact | Details |
|--------|--------|---------|
| Age | Gradual decline after 40 | Sperm quality decreases |
| Temperature | Heat affects sperm production | Avoid hot tubs, tight clothing |
| Lifestyle | Diet, exercise, substance use | Direct impact on sperm health |
| Medical conditions | Varicocele, infections | Can affect sperm production |

### Optimizing Fertility

- Maintain healthy BMI (18.5-24.9)
- Exercise regularly (moderately)
- Eat a balanced diet rich in antioxidants
- Limit alcohol and avoid smoking
- Manage stress levels
- Get adequate sleep
      `,
      keyPoints: [
        'Lifestyle factors significantly impact fertility',
        'Age is the most significant factor for egg quality',
        'Both partners\' health affects conception chances'
      ]
    },
    advanced: {
      title: 'Reproductive Physiology and Hormones',
      content: `
## The Hormonal Regulation of Fertility

### Hypothalamic-Pituitary-Gonadal Axis

The reproductive system is controlled by a complex hormonal cascade:

1. **GnRH (Gonadotropin-Releasing Hormone)**
   - Released by hypothalamus
   - Pulses determine frequency/amount of FSH and LH

2. **FSH (Follicle-Stimulating Hormone)**
   - Stimulates follicle growth in ovaries
   - Promotes sperm production in males
   - Peak in follicular phase

3. **LH (Luteinizing Hormone)**
   - Triggers ovulation
   - Stimulates testosterone production in males
   - Surge causes egg release

4. **Estradiol**
   - Primary estrogen
   - Builds uterine lining
   - Negative then positive feedback on LH

5. **Progesterone**
   - Produced after ovulation
   - Maintains uterine lining
   - Raises basal body temperature

### Folliculogenesis

- Primordial follicles: Present at birth (~1-2 million)
- Primary follicles: Begin development
- Antral follicles: Fluid-filled, visible on ultrasound
- Dominant follicle: Selected to ovulate
- Corpus luteum: Formed after ovulation, produces progesterone

### Spermatogenesis

- Duration: ~74 days from stem cell to mature sperm
- Location: Seminiferous tubules in testes
- Temperature requirement: 2-3°C below body temperature
- Daily production: ~100 million sperm
      `,
      keyPoints: [
        'The HPG axis controls all reproductive functions',
        'Hormone levels fluctuate throughout the cycle',
        'Sperm production requires specific conditions'
      ]
    },
    expert: {
      title: 'Advanced Fertility Assessment and Biomarkers',
      content: `
## Clinical Fertility Evaluation

### Ovarian Reserve Testing

| Test | What It Measures | Interpretation |
|------|------------------|----------------|
| AMH (Anti-Müllerian Hormone) | Remaining follicle pool | <1.0 ng/mL low reserve |
| AFC (Antral Follicle Count) | Visible follicles via ultrasound | <10 low reserve |
| FSH (Day 3) | Ovarian response | >10-15 IU/L diminished reserve |
| Estradiol (Day 3) | Early follicular phase | High levels may suppress FSH |

### Semen Analysis Parameters (WHO 2021)

| Parameter | Reference Range |
|-----------|-----------------|
| Volume | ≥1.4 mL |
| Concentration | ≥16 million/mL |
| Total motility | ≥42% |
| Progressive motility | ≥30% |
| Morphology | ≥4% normal forms |
| Vitality | ≥54% live |
| pH | 7.2-7.8 |

### Fertility Preservation Indications

**Medical:**
- Cancer diagnosis before chemotherapy/radiation
- Autoimmune conditions requiring gonadotoxic treatment
- Genetic conditions affecting ovarian reserve (e.g., fragile X premutation)

**Social:**
- Age-related fertility decline
- Lack of partner
- Personal/circumstantial timing

**Techniques:**
- Egg freezing (oocyte cryopreservation)
- Embryo freezing
- Ovarian tissue cryopreservation
- Sperm banking
- Testicular sperm extraction (TESE)

### Emerging Biomarkers

- Follicular fluid metabolomics
- Mitochondrial DNA copy number in oocytes
- Cumulus cell gene expression
- Sperm DNA fragmentation testing
- Oxidative stress markers
      `,
      keyPoints: [
        'Multiple tests assess ovarian reserve and sperm health',
        'Reference ranges guide clinical interpretation',
        'Fertility preservation options exist for various scenarios'
      ]
    }
  }
}
