import { LegacyEducationalContent } from '../../types'

export const larcContent: LegacyEducationalContent = {
  title: 'Long-Acting Reversible Contraception',
  category: 'reproductive',
  subcategory: 'contraception',
  levels: {
    1: {
      title: 'Introduction to LARC',
      content: `
## What is LARC?

LARC stands for Long-Acting Reversible Contraception. These are birth control methods that last for years but can be removed anytime.

### Types of LARC

**Intrauterine Devices (IUDs)**
- Small T-shaped device placed in the uterus
- Two types: Hormonal (Mirena, Kyleena, etc.) and Copper (Paragard)
- Last 3-12 years depending on type
- Over 99% effective

**Implant**
- Small matchstick-sized rod placed in the arm
- Releases progestin hormone
- Lasts 3-5 years
- Over 99% effective

### Why Choose LARC?

- **Most effective**: Even better than pills and patches
- **Convenient**: No daily action needed
- **Private**: No one can tell you're using it
- **Reversible**: Fertility returns quickly after removal
- **Low maintenance**: Just place and forget

### Myths vs Facts

| Myth | Fact |
|------|------|
| LARC is only for women who've had babies | False: Safe for all ages |
| LARC causes infertility | False: Fertility returns quickly |
| LARC is dangerous | False: Very safe with few risks |
| LARC is permanent | False: Can be removed anytime |
      `,
      keyPoints: [
        'LARC methods are over 99% effective',
        'IUDs and implants are reversible options',
        'Safe for most people including teens'
      ]
    },
    novice: {
      title: 'IUD Options Explained',
      content: `
## Intrauterine Devices

### Hormonal IUDs (Levonorgestrel)

**Available Options (US):**

| Brand | Hormone Amount | Duration | Approved For |
|-------|----------------|----------|--------------|
| Liletta | 52 mg | 6 years | Pregnancy prevention |
| Mirena | 52 mg | 6 years | Pregnancy prevention + heavy periods |
| Kyleena | 19.5 mg | 5 years | Pregnancy prevention |
| Skyla | 13.5 mg | 3 years | Pregnancy prevention |

**Benefits:**
- Lighter or no periods
- Less cramping
- Improved PMS symptoms
- Can treat endometriosis

**Side Effects:**
- Irregular spotting first 3-6 months
- Possible amenorrhea (no periods)
- Hormonal side effects (headache, breast tenderness)

### Copper IUD

**Paragard:**
- No hormones
- Contains copper wrapped in plastic
- Lasts up to 10 years
- Over 99% effective

**Benefits:**
- Hormone-free
- Works for 10+ years
- Emergency contraception option
- Can be used while breastfeeding

**Side Effects:**
- Heavier periods
- More cramping
- Longer periods

### The Implant

**Nexplanon:**
- Small rod placed under upper arm skin
- Releases progestin (etonogestrel)
- Lasts 3-5 years
- Over 99% effective

**Benefits:**
- Highest patient satisfaction
- Discreet
- Completely reversible

**Side Effects:**
- Unpredictable bleeding patterns
- No periods or frequent spotting
- Possible hormonal side effects
      `,
      keyPoints: [
        'Multiple IUD options with different hormone levels',
        'Copper IUD is the only non-hormonal LARC option',
        'Implant has highest satisfaction rates'
      ]
    },
    intermediate: {
      title: 'LARC Procedures and Considerations',
      content: `
## Getting and Using LARC

### IUD Insertion Procedure

**Before Insertion:**
1. Discuss options with healthcare provider
2. Pregnancy test if needed
3. May need to schedule during period (easier insertion)
4. Take pain medication 30-60 minutes before
5. Possibly use misoprostol to soften cervix (if needed)

**During Insertion:**
- Speculum exam (like Pap smear)
- Measure uterus
- Clean cervix
- Place IUD through cervix into uterus
- Cut strings (short, tucked in uterus)
- Takes 5-10 minutes

**After Insertion:**
- Rest 15-30 minutes
- Cramping and spotting common for a few days
- Avoid tampons, sex, swimming for 24-48 hours
- Check for strings after first period

### Implant Insertion

**Procedure:**
- Numb small area on inner upper arm
- Make tiny incision
- Place rod under skin
- No stitches needed
- Takes 1-2 minutes

**Recovery:**
- Bruising common for 1-2 weeks
- Keep bandaged for 24 hours
- Avoid heavy lifting with that arm for a few days

### Removal

**Both IUD and Implant:**
- Quick office procedure
- Fertility returns immediately
- Can have new one placed same time
- No waiting period to try for pregnancy

### Effectiveness

| Method | Perfect Use | Typical Use |
|--------|-------------|-------------|
| IUD | >99% | >99% |
| Implant | >99% | >99% |
| Pill | 99.7% | 91% |
| Condoms | 98% | 82% |

LARC has no user error - the most important factor in its effectiveness!
      `,
      keyPoints: [
        'Insertion is a quick office procedure',
        'Most discomfort is short-lived',
        'Removal is simple with immediate return to fertility'
      ]
    },
    advanced: {
      title: 'LARC Clinical Considerations',
      content: `
## LARC Clinical Decision-Making

### IUD Selection Guide

**52 mg LNG (Mirena/Liletta):**
- Indicated for heavy menstrual bleeding
- Preferred for perimenopausal patients
- Can provide endometrial protection with estrogen
- 6-year duration

**19.5 mg LNG (Kyleena):**
- Smaller insertion tube (5.6mm vs 6.7mm)
- Good for nulliparous patients
- Less hormonal effect
- 5-year duration

**13.5 mg LNG (Skyla):**
- Smallest insertion tube (5.4mm)
- Designed for nulliparous patients
- More bleeding (less amenorrhea)
- 3-year duration

**Copper IUD (Paragard):**
- Preferred for patients wanting hormone-free
- Emergency contraception up to 5 days
- Can worsen bleeding symptoms
- 10-year duration

### Contraindications and Precautions

**IUD Contraindications:**
- Pregnancy (Category 4)
- Active pelvic infection (Category 4)
- Current cervical cancer (Category 4)
- Uterine distortion preventing placement (Category 4)
- Postpartum sepsis (Category 4)

**Implant Contraindications:**
- Pregnancy (Category 4)
- Current breast cancer (Category 4)
- History of breast cancer (Category 3 - consider alternatives)

### Postpartum LARC Initiation

| Timing | IUD | Implant |
|--------|-----|---------|
| Immediate (<10 min) | Safe, ↓ expulsion risk | Safe |
| Delayed (10 min - 4 wks) | ↑ Expulsion risk | Safe |
| After 4 weeks | Safe, standard insertion | Safe, standard insertion |

### Bleeding Management

**Expected Patterns:**

| Method | First 3-6 Months | Long-term |
|--------|------------------|-----------|
| Copper IUD | Heavier, longer periods | Stays heavier |
| 52 mg LNG | Spotting, then lighter | Amenorrhea common |
| 19.5/13.5 mg LNG | Spotting | Lighter, less amenorrhea |
| Implant | Unpredictable spotting | Unpredictable spotting |

**Managing Unscheduled Bleeding with Implant:**
- Counsel on expected pattern
- NSAIDs (mefenamic acid)
- Short course of combined estrogen
- Consider switching methods if bothersome
      `,
      keyPoints: [
        'Multiple IUD options allow personalized selection',
        'Insertion timing affects expulsion risk',
        'Bleeding patterns vary significantly by method'
      ]
    },
    expert: {
      title: 'LARC Evidence and Complications',
      content: `
## Evidence-Based LARC Practice

### Effectiveness Data

**PEARL Index (Failure Rate per 100 Women-Years):**

| Method | Pearl Index | 95% CI |
|--------|-------------|--------|
| LNG IUD 52mg | 0.1-0.2 | 0.0-0.5 |
| Copper T380A | 0.2-0.6 | 0.1-0.9 |
| Implant | 0.0-0.3 | 0.0-0.5 |
| Combined pill | 2-9 | - |
| Condom | 13-18 | - |

### Continuation Rates

**1-Year Continuation (CHOICE Project):**

| Method | 12-Month Continuation |
|--------|----------------------|
| Implant | 84% |
| IUD | 82% |
| Pill | 55% |
| Patch | 50% |
| Ring | 50% |
| DMPA | 56% |

### Expulsion Rates

**Risk Factors for IUD Expulsion:**
- Immediate postpartum (<10 min): 10-27%
- Delayed postpartum (≥6 weeks): 3-5%
- Nulliparity: Slightly higher
- Previous expulsion: Recurrence risk ~30%
- Improper placement: Technical factor

### Uterine Perforation

**Incidence:**
- 1 in 1,000 to 1 in 2,000 insertions
- Higher in postpartum and breastfeeding
- Higher with inexperienced providers

**Management:**
- Most diagnosed at insertion or soon after
- Surgical removal usually required
- Hysteroscopy or laparoscopy depending on location
- Delayed diagnosis can lead to migration

### Actinomycosis

**Background:**
- Actinomyces israelii (normal vaginal flora)
- Identified on Pap smear or IUD strings
- Controversial clinical significance

**Management (CDC 2024):**
- Asymptomatic, no treatment needed, IUD can remain
- Symptomatic (pelvic pain, fever): Treat and remove IUD
- Re-treat and re-insert after treatment completion

### Expulsion Management

**Partial Expulsion:**
- Visible IUD at cervix
- Patient reports "feeling strings"
- Ultrasound confirms

**Options:**
- Remove and replace same visit
- Remove and allow time before reinsertion
- Consider different IUD type

### Breastfeeding Safety

**Hormonal IUD:**
- Safe, minimal systemic absorption
- ACOG Category 1 (no restriction)

**Implant:**
- Minimal effect on milk supply
- ACOG Category 1 (no restriction)

**Copper IUD:**
- No hormonal concerns
- Safe for breastfeeding

### Nulliparity Considerations

**Evidence supports:**
- Nulliparous patients are excellent candidates
- Slightly higher expulsion risk (small difference)
- Higher satisfaction scores in some studies
- Insertion may be more uncomfortable
- 52mg LNG may be appropriate if heavy bleeding
      `,
      keyPoints: [
        'LARC has highest continuation rates of all methods',
        'Serious complications are rare but require recognition',
        'Evidence strongly supports LARC for nulliparous patients'
      ]
    }
  }
}
