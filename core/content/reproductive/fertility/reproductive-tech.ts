import { LegacyEducationalContent } from '../../types'

export const reproductiveTechContent: LegacyEducationalContent = {
  title: 'Reproductive Technology',
  category: 'reproductive',
  subcategory: 'fertility',
  levels: {
    1: {
      title: 'Introduction to Fertility Treatments',
      content: `
## What is Assisted Reproductive Technology?

Assisted Reproductive Technology (ART) includes medical procedures to help people have children. These treatments handle eggs and sperm to help with pregnancy.

### Common Treatments

**IUI - Intrauterine Insemination**
- Sperm is placed directly into the uterus
- Timed with ovulation
- Less invasive option

**IVF - In Vitro Fertilization**
- Egg and sperm combine in a lab
- Embryo grows for a few days
- Embryo is placed in the uterus
- Most effective ART treatment

**Egg/Sperm Freezing**
- Preserves fertility for later use
- Helpful before medical treatments
- Used for age-related fertility decline

### Who Might Need ART?

- Couples trying for over a year
- Same-sex couples
- Single people wanting children
- People with fertility medical conditions
- Those undergoing cancer treatment

### Success Rates

- Success depends on age and cause
- IVF has highest success rates
- Multiple cycles may be needed
      `,
      keyPoints: [
        'ART helps people facing fertility challenges',
        'IVF is the most effective treatment',
        'Many options exist for different situations'
      ]
    },
    novice: {
      title: 'Types of Reproductive Technology',
      content: `
## ART Procedures Explained

### Intrauterine Insemination (IUI)

**Process:**
1. Ovulation is monitored or triggered
2. Partner or donor sperm is prepared
3. Washed sperm is placed in uterus using a thin catheter
4. Pregnancy test in 2 weeks

**Best For:**
- Mild male factor infertility
- Cervical mucus issues
- Unexplained infertility
- Using donor sperm

### In Vitro Fertilization (IVF)

**Process:**
1. Ovarian stimulation (8-14 days)
2. Egg retrieval (minor procedure)
3. Fertilization in lab
4. Embryo development (3-6 days)
5. Embryo transfer
6. Pregnancy test

**Best For:**
- Blocked tubes
- Severe male factor
- Endometriosis
- Failed other treatments

### Third-Party Reproduction

- **Egg donation**: Using donor eggs
- **Sperm donation**: Using donor sperm
- **Embryo donation**: Using donated embryos
- **Surrogacy**: Another person carries the pregnancy

### Fertility Preservation

- **Egg freezing**: For future use
- **Embryo freezing**: After fertilization
- **Sperm banking**: Freezing sperm
- **Ovarian tissue freezing**: Experimental
      `,
      keyPoints: [
        'IUI is simpler but less effective than IVF',
        'IVF involves multiple steps over several weeks',
        'Third-party options help many build families'
      ]
    },
    intermediate: {
      title: 'IVF Process and Considerations',
      content: `
## The IVF Journey in Detail

### Phase 1: Ovarian Stimulation

| Day | Activity | Purpose |
|-----|----------|---------|
| 1-2 | Baseline ultrasound | Check ovaries are quiet |
| 2-14 | Injections (FSH/LH) | Stimulate multiple follicles |
| Every 2-3 days | Monitoring | Blood work and ultrasound |
| Trigger day | hCG trigger shot | Final egg maturation |

### Phase 2: Egg Retrieval

- Scheduled 34-36 hours after trigger
- Transvaginal ultrasound-guided
- Takes 15-30 minutes under sedation
- Recovery: 1-2 hours at clinic, rest at home

### Phase 3: Fertilization Methods

**Conventional insemination:**
- Eggs and sperm mixed together
- Sperm penetrates egg naturally
- Used when sperm parameters are normal

**ICSI (Intracytoplasmic Sperm Injection):**
- Single sperm injected into each egg
- Used for male factor infertility
- Slightly higher fertilization rates

### Phase 4: Embryo Development

| Day | Development Stage |
|-----|-------------------|
| 1 | Fertilization check (2PN) |
| 2 | 2-4 cell stage |
| 3 | 6-8 cell stage |
| 5 | Blastocyst (100+ cells) |

### Phase 5: Transfer

- **Day 3 transfer**: Cleavage stage (6-8 cells)
- **Day 5 transfer**: Blastocyst stage
- Number transferred: 1-2 (usually)
- Wait 2 weeks for pregnancy test

### Medications Commonly Used

- **Birth control pills**: Protocol timing
- **GnRH agonists/antagonists**: Prevent premature ovulation
- **FSH injections**: Stimulate follicles
- **hCG trigger**: Final egg maturation
- **Progesterone**: Support uterine lining
- **Estrogen**: Build uterine lining
      `,
      keyPoints: [
        'IVF takes 4-6 weeks from start to pregnancy test',
        'Multiple monitoring appointments are required',
        'Not all eggs become embryos for transfer'
      ]
    },
    advanced: {
      title: 'Advanced ART Techniques',
      content: `
## Specialized Reproductive Technologies

### Preimplantation Genetic Testing (PGT)

**PGT-A (Aneuploidy screening):**
- Tests for chromosomal abnormalities
- Recommended for: advanced maternal age, recurrent miscarriage
- Increases implantation rates
- Reduces miscarriage risk

**PGT-M (Monogenic/single gene disorders):**
- Tests for specific genetic conditions
- Cystic fibrosis, Huntington disease, SMA, etc.
- Requires custom probe development
- Allows selection of unaffected embryos

**PGT-SR (Structural rearrangements):**
- Tests for translocations, inversions
- Used when parent has chromosomal rearrangement
- Reduces miscarriage risk

### Laboratory Techniques

**Embryo Culture Systems:**
- Conventional incubators (group culture)
- Time-lapse imaging (Embryoscope)
- Continuous monitoring without disturbance

**Embryo Selection Tools:**
- Morphokinetic analysis
- Metabolomic profiling
- Non-invasive PGT (cell-free DNA)

**Cryopreservation Methods:**
- Vitrification (ultra-rapid freezing)
- Slow-freezing (less common now)
- >95% survival with vitrification

### ICSI Variations

- **PICSI**: Hyaluronan-selected sperm binding
- **IMSI**: High-magnification sperm selection
- **ROSI**: Round spermatid injection (experimental)
- **Electroejaculation**: For anejaculation

### Surgical Sperm Retrieval

| Technique | Indication | Sperm Source |
|-----------|------------|--------------|
| TESA | Simple retrieval | Testis aspiration |
| TESE | Higher yield | Testicular tissue |
| Micro-TESE | Best for NOA | Microscopic extraction |
| PESA | Obstruction | Epididymal aspiration |
| MESA | Best for reconstruction | Epididymal microsurgery |

NOA = Non-obstructive azoospermia
      `,
      keyPoints: [
        'PGT improves live birth rates for certain patients',
        'Laboratory techniques continue advancing',
        'Sperm retrieval options exist for azoospermia'
      ]
    },
    expert: {
      title: 'Evidence-Based ART Practice',
      content: `
## Current Evidence and Guidelines (ASRM 2024)

### Ovarian Stimulation Optimization

**AMH-Based Stratification:**

| AMH (ng/mL) | Expected Response | Starting Dose |
|-------------|-------------------|---------------|
| <1.0 | Poor | 300-450 IU |
| 1.0-3.5 | Normal | 150-225 IU |
| >3.5 | High | 75-112.5 IU |

**GnRH Protocol Selection:**
- Antagonist preferred for:
  - PCOS (reduced OHSS risk)
  - Donor egg cycles
  - Poor responders (flexibility)

**Trigger Selection:**
- hCG 10,000 IU: High responders, planned freeze-all
- GnRH agonist: High OHSS risk (with agonist protocol)
- Dual trigger: Combination for optimal oocyte maturation

### Embryo Transfer Strategy

**Fresh vs. Elective Freeze-All:**

| Fresh Transfer | Freeze-All |
|----------------|------------|
| Lower cost | Higher cumulative live birth |
| Faster time to pregnancy | Reduced OHSS risk |
| Natural cycle | Optimal endometrial environment |
| Risk of OHSS | Better for high responders |

**Number to Transfer (SART 2024):**
- <35: 1 blastocyst (elective SET strongly recommended)
- 35-37: 1 blastocyst (consider 2 in select cases)
- 38-40: 1-2 blastocysts
- >40: 2-3 blastocysts (based on discussion)

### Luteal Phase Support

**Vaginal Progesterone:**
- Micronized 200mg TID or 400mg BID
- Endometrin 100mg TID
- Crinone 8% daily

**Options:**
- Vaginal route preferred (higher endometrial levels)
- IM progesterone if vaginal not tolerated
- Continue until 8-10 weeks gestation

### Ovarian Hyperstimulation Syndrome (OHSS) Prevention

**Risk Stratification:**
- High risk: >20 follicles, estradiol >5000 pg/mL, AMH >3.5

**Prevention Strategies:**
1. GnRH agonist trigger (if agonist protocol)
2. Coasting (withhold hCG until E2 decreases)
3. Dopamine agonists (cabergoline)
4. Freeze-all embryos
5. IV albumin at retrieval

### Success Metrics

**Cumulative Live Birth Rate:**
- <35: >70% with multiple IVF cycles
- 35-37: ~55-60%
- 38-40: ~35-40%
- >40: ~15-20%

**Multiple Birth Rate:**
- Elective SET: <2% twins
- Double blastocyst transfer: ~40% twins

### Emerging Technologies

- **IVG**: In vitro gametogenesis (research)
- **Artificial ovaries**: Tissue engineering (experimental)
- **AI embryo selection**: Deep learning algorithms (validation phase)
- **Mitochondrial replacement**: Approved in UK (limited)
      `,
      keyPoints: [
        'Personalized protocols improve outcomes',
        'Elective single embryo transfer reduces multiples',
        'Cumulative live birth rate is the key metric'
      ]
    }
  }
}
