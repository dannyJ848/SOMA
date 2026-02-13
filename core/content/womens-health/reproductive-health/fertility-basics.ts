import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const fertilityBasics: LegacyWomensHealthContent = {
  id: 'concept-fertility-basics',
  type: 'concept',
  name: 'Fertility Basics',
  alternateNames: ['Getting pregnant', 'Conception basics', 'Reproductive fertility'],

  levels: {
    1: {
      level: 1,
      summary: 'Fertility is your ability to get pregnant. Understanding when you are most fertile helps whether you want to become pregnant or avoid pregnancy.',
      explanation: `**How Pregnancy Happens:**
1. An egg is released from your ovary (ovulation)
2. Sperm travels through the uterus to meet the egg
3. If sperm fertilizes the egg, it travels to the uterus
4. The fertilized egg implants in the uterine lining
5. Pregnancy begins!

**Your Fertile Window:**
- You can only get pregnant around ovulation
- The egg lives about 24 hours after release
- Sperm can live inside you for up to 5 days
- Your most fertile days are the 5 days before and the day of ovulation

**Signs of Ovulation:**
- Clear, stretchy cervical mucus (like egg whites)
- Slight increase in body temperature
- Some women feel mild cramping

**Factors That Affect Fertility:**
- Age (fertility decreases after 35)
- Regular menstrual cycles
- Overall health
- Lifestyle factors (smoking, weight)`,
      keyTerms: [
        { term: 'fertility', definition: 'The ability to become pregnant and have a baby' },
        { term: 'ovulation', definition: 'When an egg is released from the ovary, usually once per month' },
        { term: 'fertile window', definition: 'The days in your cycle when pregnancy is possible' },
      ],
      analogies: ['Your fertile window is like a limited-time opportunity - the egg waits for about a day, and sperm can arrive up to 5 days early.'],
      examples: ['If you ovulate on day 14, you could get pregnant from sex on days 9-14', 'Tracking cervical mucus changes to identify fertile days'],
    },
    2: {
      level: 2,
      summary: 'Fertility depends on regular ovulation, healthy sperm, patent fallopian tubes, and a receptive uterus, with the fertile window occurring approximately 5 days before through 1 day after ovulation.',
      explanation: `**Requirements for Conception:**
1. **Ovulation:** Release of a mature egg
2. **Sperm delivery:** Adequate sperm quantity and motility
3. **Fertilization:** Sperm-egg fusion in fallopian tube
4. **Transport:** Embryo travels to uterus over 3-4 days
5. **Implantation:** Embryo embeds in endometrium 6-10 days after fertilization

**Fertile Window Timing:**
- Sperm survival: Up to 5 days in fertile cervical mucus
- Egg viability: 12-24 hours post-ovulation
- Peak fertility: Day before and day of ovulation
- Probability of conception on peak day: ~30%

**Cycle Tracking Methods:**
- **Calendar method:** Predict ovulation based on cycle length
- **Cervical mucus:** Peak fertility when mucus is clear, stretchy, abundant
- **Basal body temperature (BBT):** Rises 0.5-1°F after ovulation
- **Ovulation predictor kits (OPKs):** Detect LH surge 24-36 hours before ovulation

**Common Fertility Factors:**
- **Age:** Female fertility declines significantly after 35
- **Weight:** Both underweight and obesity affect ovulation
- **Smoking:** Reduces fertility in both partners
- **Medical conditions:** PCOS, endometriosis, thyroid disorders`,
      keyTerms: [
        { term: 'basal body temperature', definition: 'Your temperature first thing in the morning before any activity, used to track ovulation' },
        { term: 'cervical mucus', definition: 'Fluid produced by the cervix that changes consistency throughout the cycle' },
        { term: 'LH surge', definition: 'Rapid rise in luteinizing hormone that triggers ovulation within 24-36 hours' },
        { term: 'implantation', definition: 'When the embryo attaches to and embeds in the uterine lining' },
      ],
      analogies: ['Think of conception like a precisely timed relay race - the egg and sperm must be in the right place at the right time, and the uterus must be ready to receive the embryo.'],
    },
    3: {
      level: 3,
      summary: 'Fertility assessment involves evaluation of ovulatory function, ovarian reserve, tubal patency, uterine cavity, and male factor, with age-appropriate timing of infertility workup.',
      explanation: `**Definition of Infertility:**
- <35 years: 12 months of unprotected intercourse without conception
- ≥35 years: 6 months of unprotected intercourse without conception
- Or known conditions affecting fertility (anovulation, male factor)

**Female Factor Evaluation:**

*Ovulatory Function:*
- Menstrual history (regular cycles suggest ovulation)
- Day 21 (mid-luteal) progesterone >3 ng/mL confirms ovulation
- Urinary LH predictor kits

*Ovarian Reserve:*
- Day 3 FSH and estradiol
- Anti-Mullerian hormone (AMH) - cycle independent
- Antral follicle count (AFC) by transvaginal ultrasound

*Tubal Patency:*
- Hysterosalpingogram (HSG)
- Sonohysterogram with tubal flushing
- Diagnostic laparoscopy

*Uterine Cavity:*
- Transvaginal ultrasound
- Sonohysterography
- Hysteroscopy

**Male Factor (40% of infertility):**
- Semen analysis (volume, count, motility, morphology)
- Normal parameters: >15 million/mL, >40% motility, >4% normal morphology

**Unexplained Infertility:**
- 10-30% of couples after complete workup
- May reflect subtle issues not detected by standard testing`,
      keyTerms: [
        { term: 'ovarian reserve', definition: 'The remaining quantity and quality of a woman\'s eggs, assessed by AMH, FSH, and AFC' },
        { term: 'HSG', definition: 'Hysterosalpingogram - X-ray with dye to evaluate fallopian tube patency', pronunciation: 'H-S-G' },
        { term: 'antral follicle count', definition: 'Number of small follicles visible on ultrasound, indicating ovarian reserve' },
        { term: 'semen analysis', definition: 'Laboratory test evaluating sperm count, movement, and shape' },
      ],
      clinicalNotes: 'Initiate basic fertility evaluation earlier (before 12 months) in women >35, those with known risk factors, or irregular cycles. Always include semen analysis early in workup - male factor is common and easily assessed.',
    },
    4: {
      level: 4,
      summary: 'Infertility management includes lifestyle optimization, ovulation induction, intrauterine insemination (IUI), and assisted reproductive technologies (ART), with treatment selection based on diagnosis, prognosis, and patient preferences.',
      explanation: `**Pretreatment Optimization:**
- Weight management (BMI 19-25 ideal)
- Smoking cessation (both partners)
- Limit alcohol and caffeine
- Folic acid supplementation (0.4-0.8 mg daily)
- Address thyroid abnormalities

**Treatment Approaches by Diagnosis:**

*Anovulation:*
- Lifestyle modification (especially if PCOS with obesity)
- Clomiphene citrate: First-line, 50-150 mg CD 3-7 or 5-9
- Letrozole: Preferred in PCOS, 2.5-7.5 mg CD 3-7
- Gonadotropins: Second-line, higher multiple pregnancy risk

*Tubal Factor:*
- IVF preferred for bilateral tubal occlusion
- Tubal surgery for select cases (mild adhesions, reversal)

*Male Factor:*
- IUI for mild-moderate abnormalities
- IVF with ICSI for severe oligospermia or azoospermia
- Donor sperm if indicated

*Unexplained Infertility:*
- Empiric treatment (superovulation + IUI)
- IVF if empiric treatment fails

**IUI vs. IVF:**
- IUI: Washed sperm placed in uterus, 10-20% per cycle with stimulation
- IVF: Eggs retrieved, fertilized in lab, embryos transferred, 40-50% per cycle (age dependent)

**Prognostic Factors:**
- Age (most important female factor)
- Duration of infertility
- Ovarian reserve
- Sperm quality
- Presence of tubal disease or endometriosis`,
      keyTerms: [
        { term: 'clomiphene citrate', definition: 'Oral medication that stimulates ovulation by blocking estrogen feedback', pronunciation: 'KLOM-ih-feen' },
        { term: 'letrozole', definition: 'Aromatase inhibitor used for ovulation induction, particularly effective in PCOS' },
        { term: 'IUI', definition: 'Intrauterine insemination - placing washed sperm directly into the uterus' },
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection - injecting single sperm directly into egg during IVF' },
      ],
      clinicalNotes: 'Letrozole has higher live birth rates than clomiphene in PCOS. Limit clomiphene to 6 cycles due to theoretical cancer concerns. Multiple pregnancy risk with gonadotropins requires careful monitoring. Age-based IVF success rates should guide counseling.',
    },
    5: {
      level: 5,
      summary: 'Advanced fertility management requires understanding of controlled ovarian stimulation protocols, embryo selection technologies, fertility preservation options, and emerging reproductive technologies, with attention to ethical considerations and insurance/access issues.',
      explanation: `**IVF Protocol Optimization:**

*Ovarian Stimulation:*
- Antagonist protocol: GnRH antagonist added when lead follicle 13-14mm
- Long agonist protocol: GnRH agonist downregulation, then gonadotropins
- Mild stimulation: Lower doses for poor responders or egg freezing

*Trigger Options:*
- hCG: Traditional, higher OHSS risk
- GnRH agonist trigger: Lower OHSS, requires adequate endogenous LH
- Dual trigger: Combination for optimized response

*Embryo Culture:*
- Day 3 (cleavage stage) vs. Day 5/6 (blastocyst) transfer
- Blastocyst transfer: Better selection, higher implantation per embryo

**Embryo Selection Technologies:**
- Preimplantation genetic testing for aneuploidy (PGT-A)
- Morphokinetics (time-lapse imaging)
- AI-assisted embryo grading
- PGT-M for single gene disorders
- PGT-SR for structural rearrangements

**Fertility Preservation:**
- Oocyte cryopreservation: Standard of care, not experimental
- Embryo freezing: Requires sperm source
- Ovarian tissue cryopreservation: Experimental, for prepubertal or urgent cases
- Oncofertility: Expedited cycles before cancer treatment

**Third-Party Reproduction:**
- Donor oocytes: For diminished ovarian reserve, genetic disease
- Donor sperm: For male factor, single women, same-sex couples
- Gestational carrier: For uterine factor, medical contraindications

**Emerging Technologies:**
- In vitro maturation (IVM)
- Artificial gametes from stem cells (research)
- Mitochondrial replacement therapy
- Uterine transplantation

**Access and Ethical Considerations:**
- Insurance coverage variability
- Cost barriers to care
- Age limits and number of cycles
- Disposition of unused embryos
- Disclosure to offspring (donor conception)`,
      keyTerms: [
        { term: 'PGT-A', definition: 'Preimplantation genetic testing for aneuploidy - screening embryos for chromosome number' },
        { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome - iatrogenic complication of ovarian stimulation' },
        { term: 'vitrification', definition: 'Ultra-rapid freezing technique for oocyte and embryo cryopreservation' },
        { term: 'oncofertility', definition: 'Subspecialty addressing fertility preservation before cancer treatment' },
      ],
      clinicalNotes: 'ASRM recommends discussing fertility preservation with all cancer patients of reproductive age. PGT-A remains controversial for all patients; clearest benefit in recurrent implantation failure and advanced maternal age. Single embryo transfer should be standard to reduce multiple pregnancy.',
    },
  },
  media: [],
  citations: [
    {
      id: 'asrm-infertility-eval',
      type: 'article',
      title: 'Diagnostic evaluation of the infertile female: a committee opinion',
      source: 'American Society for Reproductive Medicine',
      url: 'https://www.asrm.org/practice-guidance/',
      license: 'Copyright ASRM',
    },
  ],
  crossReferences: [
    { targetId: 'concept-menstrual-cycle-explained', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'concept-preconception-care', targetType: 'concept', relationship: 'related', label: 'Preconception Care' },
    { targetId: 'condition-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
    { targetId: 'condition-endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'patient-education', 'womens-health', 'fertility'],
    keywords: ['fertility', 'conception', 'ovulation', 'infertility', 'IVF', 'getting pregnant'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
