import { LegacyEducationalContent } from '../../types'

export const contraceptionMethodsContent: LegacyEducationalContent = {
  title: 'Contraception Methods',
  category: 'reproductive',
  subcategory: 'contraception',
  levels: {
    1: {
      title: 'Understanding Birth Control',
      content: `
## What is Contraception?

Contraception (birth control) prevents pregnancy by blocking sperm from reaching an egg, stopping ovulation, or preventing a fertilized egg from implanting in the uterus.

### Types of Birth Control

**Barrier Methods**
- Male condom
- Female condom
- Diaphragm
- Cervical cap

**Hormonal Methods**
- Birth control pills
- Patch
- Vaginal ring
- Shot
- Implant

**Intrauterine Devices (IUDs)**
- Hormonal IUD
- Copper IUD

**Permanent Methods**
- Tubal ligation (female)
- Vasectomy (male)

**Natural Methods**
- Fertility awareness
- Withdrawal
- Abstinence

### Effectiveness

- **Most effective**: IUDs, implants, sterilization (>99%)
- **Very effective**: Pills, patch, ring, shot (91-99% with perfect use)
- **Less effective**: Condoms, diaphragm, natural methods (72-88%)

### Remember

Only condoms protect against both pregnancy AND sexually transmitted infections (STIs).
      `,
      keyPoints: [
        'Many birth control options are available',
        'Effectiveness varies by method and correct use',
        'Condoms are the only method that prevents STIs'
      ]
    },
    novice: {
      title: 'Birth Control Methods Compared',
      content: `
## Contraception Options in Detail

### Barrier Methods

| Method | How It Works | Typical Use Effectiveness |
|--------|--------------|---------------------------|
| Male condom | Blocks sperm | 82% |
| Female condom | Blocks sperm | 79% |
| Diaphragm | Blocks sperm + spermicide | 83% |
| Cervical cap | Blocks sperm + spermicide | 77-86% |

### Short-Acting Hormonal Methods

| Method | How Often | Typical Use Effectiveness |
|--------|-----------|---------------------------|
| Combination pill | Daily | 91% |
| Progestin-only pill | Daily, same time | 91% |
| Patch (Xulane) | Weekly | 91% |
| Ring (NuvaRing) | Monthly | 91% |
| Shot (Depo-Provera) | Every 3 months | 94% |

### Long-Acting Reversible Contraception (LARC)

| Method | Duration | Typical Use Effectiveness |
|--------|----------|---------------------------|
| Copper IUD (Paragard) | 10+ years | >99% |
| Hormonal IUDs | 3-8 years | >99% |
| Implant (Nexplanon) | 3-5 years | >99% |

### Permanent Methods

| Method | Reversible? | Effectiveness |
|--------|-------------|---------------|
| Tubal ligation | No (mostly) | >99% |
| Vasectomy | No (mostly) | >99% |

### Choosing a Method

Consider:
- Effectiveness needs
- Convenience
- Side effects
- Future pregnancy plans
- STI protection needs
- Health history
- Cost/access
      `,
      keyPoints: [
        'LARC methods are most effective and convenient',
        'Combination methods prevent pregnancy AND may help with periods',
        'Personal preferences and health factors guide choice'
      ]
    },
    intermediate: {
      title: 'Contraceptive Mechanisms and Selection',
      content: `
## How Birth Control Works

### Mechanisms of Action

**Combination Hormonal Contraceptives (Estrogen + Progestin)**
1. Suppress ovulation (primary mechanism)
2. Thicken cervical mucus (blocks sperm)
3. Thin endometrial lining (prevents implantation)

**Progestin-Only Methods**
1. Thicken cervical mucus (primary)
2. Suppress ovulation (some, not all)
3. Thin endometrial lining
4. Impair tubal motility

**Copper IUD**
1. Creates inflammatory response toxic to sperm
2. Prevents fertilization
3. May prevent implantation

**Barrier Methods**
- Physically block sperm from reaching egg
- Some use spermicide for additional effect

### Combination Hormonal Options

| Formulation | Estrogen | Progestin | Dosing |
|-------------|----------|-----------|--------|
| Combined pill | Ethinyl estradiol | Various | Daily active, 7 placebo |
| Extended-cycle | EE | Various | 84-91 active, 4-7 placebo |
| Patch | EE | Norelgestromin | Weekly x3, 1 week off |
| Ring | EE | Etonogestrel | Insert x3 weeks, 1 week out |

### Progestin-Only Options

| Formulation | Progestin | Key Features |
|-------------|-----------|--------------|
| Minipill | Norethindrone | Must take same time daily |
| Shot | MPA | 150mg IM every 3 months |
| Implant | Etonogestrel | Subdermal rod, 3 years |
| IUDs | LNG | Various doses, 3-8 years |
| IUD | Copper | Hormone-free, 10 years |

### Contraindications

**Combined Contraceptives: WHO Category 4 (Unacceptable Risk)**
- Age ≥35 + smoking ≥15 cigarettes/day
- History of DVT/PE
- History of stroke/MI
- Migraine with aura
- Uncontrolled hypertension
- Breast cancer
- Pregnancy

**Progestin-Only: Generally safer**
- Can use with most contraindications to estrogen
      `,
      keyPoints: [
        'Hormonal methods primarily prevent ovulation',
        'Copper IUD works via local inflammatory effect',
        'Medical history affects method safety'
      ]
    },
    advanced: {
      title: 'Contraceptive Pharmacology',
      content: `
## Hormonal Contraception Pharmacology

### Estrogen Components

**Ethinyl Estradiol (EE)**
- Potent synthetic estrogen
- Doses: 20-35 mcg (most common)
- Metabolism: Hepatic (CYP3A4)
- Half-life: ~16-20 hours
- Effects: Suppresses FSH, stabilizes endometrium

**Estradiol Valerate (Newer formulations)**
- Bio-identical estrogen
- Lower thrombosis risk theoretical
- Used in some 4-year regimens

### Progestin Generations

| Generation | Examples | Androgenicity | Selectivity |
|------------|----------|---------------|-------------|
| 1st | Norethindrone | Moderate | Low |
| 2nd | Levonorgestrel | High | Moderate |
| 3rd | Desogestrel, Norgestimate | Low | High for PR |
| 4th | Drospirenone, Dienogest | Antiandrogenic | Very high |
| Newer | Nestorone | No androgen/estrogen | PR-only |

### Pharmacokinetic Considerations

**Drug Interactions (CYP3A4 inducers):**
- Rifampin: ↓ effectiveness (use backup)
- Anticonvulsants (carbamazepine, phenytoin)
- St. John's wort
- Some HIV medications

**Antibiotics:**
- Most DO NOT affect effectiveness
- Exception: Rifampin (and possibly rifabutin)
- Some penicillins/tetracyclines historically listed but minimal evidence

### Progestin-Only Pill Mechanisms

**Traditional POP (Norethindrone 0.35mg):**
- 50% of cycles still ovulatory
- Primary effect: Cervical mucus thickening
- Critical timing: Within 3 hours
- Continuing efficacy: ~12 hours after missed dose

**Desogestrel POP (75mcg):**
- Consistently suppresses ovulation
- 24-hour window for missed dose
- More follicular suppression

### Hormonal IUD Progestin Levels

**Levonorgestrel Pharmacokinetics:**
| Device | LNG Release | Serum LNG Level | Local Tissue Level |
|--------|-------------|-----------------|-------------------|
| 52 mg | 20 mcg/day | ~0.3-0.5 ng/mL | ~1000x serum |
| 19.5 mg | 14 mcg/day | ~0.2 ng/mL | ~1000x serum |
| 13.5 mg | 8 mcg/day | ~0.1 ng/mL | ~1000x serum |

Local effect: Atrophic endometrium, thick mucus, sperm immobilization
      `,
      keyPoints: [
        'Progestin generations have different side effect profiles',
        'Drug interactions can reduce contraceptive effectiveness',
        'Hormonal IUDs act primarily via local effects'
      ]
    },
    expert: {
      title: 'Evidence-Based Contraception Practice',
      content: `
## Clinical Guidelines and Evidence (CDC 2024)

### Combined Hormonal Contraceptives (CHC) Eligibility

**Selected Category 3 Conditions (Benefits generally outweigh risks):**

| Condition | Considerations |
|-----------|----------------|
| Postpartum <21 days (breastfeeding) | VTE risk ↑, avoid |
| Postpartum 21-42 days (no other risk) | Can start |
| Migraine without aura | OK |
| Hypertension well-controlled | OK |
| BMI ≥30 | Slightly ↑ VTE risk |
| Smoking <15 cigarettes, <35 | OK |

**Category 4 (Unacceptable Health Risk):**
- CHC contraindicated in breastfeeding <21 days postpartum
- VTE current or history (including provoked)
- Migraine with aura at any age
- Ischemic heart disease
- Stroke history
- Complicated valvular disease
- Lupus with positive antiphospholipid antibodies
- Breast cancer (current)
- Severe cirrhosis

### LARC Initiation

**Immediate Start (Same-Day) Benefits:**
- ↑ Continuation by 30-50%
- ↓ Unintended pregnancy
- No need for backup contraception after 7 days if within 5 days of menses

**IUD Insertion Timing:**
| Timing | Backup Needed? |
|--------|----------------|
| ≤7 days since LMP start | No |
| Postpartum <10 min | No |
| Postpartum 10 min - 4 weeks | Consider (expulsion risk) |
| ≥4 weeks postpartum | No |
| Immediate post-abortion (≤14 wks) | No |
| Miscarriage >14 weeks | Backup 7 days |

### Progestin-Only Pill (POP) Selection

**Traditional POP vs. Desogestrel POP:**

| Feature | Norethindrone 0.35mg | Desogestrel 75mcg |
|---------|---------------------|-------------------|
| Ovulation suppression | 50% cycles | >95% cycles |
| Missed pill window | 3 hours | 12 hours |
| Bleeding pattern | More irregular | More regular |
| Acne benefit | Minimal | Yes |

### Emergency Contraception Efficacy

| Method | Timing | Efficacy |
|--------|--------|----------|
| LNG (Plan B) | Within 72 hrs | 75-89% |
| LNG (Plan B) | Within 24 hrs | 95% |
| UPA (Ella) | Within 120 hrs | 85% |
| Copper IUD | Within 120 hrs | >99% |

### Postpartum Contraception Initiation

**CDC MEC Guidelines:**

| Method | <21 days | 21-42 days | >42 days |
|--------|----------|------------|----------|
| CHC | X ( breastfeeding) | 3 if no VTE risk | 1-2 |
| Progestin-only | 1 | 1 | 1 |
| IUD | 2 (expulsion risk) | 1 | 1 |
| Implant | 1 | 1 | 1 |

### Special Populations

**Obesity (BMI ≥30):**
- CHC: Slightly ↑ VTE risk, generally OK
- POP: No efficacy reduction
- DMPA: Slight ↑ VTE risk
- Implant/IUD: No change in efficacy
- EC: Copper IUD preferred (LNG/UPA possibly reduced)

**Adolescents:**
- LARC first-line recommendation (ACOG, AAP)
- Implant: Highest satisfaction in teens
- IUD: Safe for nulliparous patients
      `,
      keyPoints: [
        'CDC MEC provides evidence-based guidance',
        'LARC first-line for most patients',
        'Immediate insertion improves continuation'
      ]
    }
  }
}
