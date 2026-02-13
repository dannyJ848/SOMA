import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const ivf: WomensHealthContent = {
  id: 'ivf',
  title: 'In Vitro Fertilization (IVF)',
  category: 'Fertility',
  complexityLevels: [
    {
      level: 1,
      title: 'What is IVF?',
      content: `IVF (In Vitro Fertilization) is a fertility treatment where eggs are fertilized with sperm outside the body in a laboratory.

**How IVF Works:**

**Step 1: Ovarian Stimulation**
- Medications help ovaries produce multiple eggs
- Takes about 2 weeks
- Frequent monitoring with blood tests and ultrasound

**Step 2: Egg Retrieval**
- Minor procedure to remove eggs from ovaries
- Done with ultrasound guidance
- Takes about 20-30 minutes
- Sedation given for comfort

**Step 3: Fertilization**
- Eggs combined with sperm in lab
- Fertilization happens in petri dish
- Embryos develop over 3-6 days

**Step 4: Embryo Transfer**
- One or more embryos placed in uterus
- Simple procedure, no anesthesia needed
- Takes about 15 minutes

**Step 5: Pregnancy Test**
- Done 10-14 days after transfer
- Blood test measures pregnancy hormone

**Who Needs IVF?**
- Blocked or damaged fallopian tubes
- Severe male infertility
- Endometriosis
- Problems with ovulation
- Unexplained infertility
- Genetic concerns

**Success Rates:**
- Under 35: 40-50% per transfer
- 35-37: 30-40% per transfer
- 38-40: 20-30% per transfer
- Over 40: 5-10% per transfer

**Risks:**
- Multiple pregnancy (twins, triplets)
- Ovarian hyperstimulation (swelling, pain)
- Multiple births: premature delivery, low birth weight
- Ectopic pregnancy (2-5%)
- Stress and emotional impact

**Remember:** IVF has helped millions of couples have babies. Talk to a fertility specialist to see if it's right for you.
`,
      keyPoints: [
        'IVF involves fertilizing eggs with sperm in a laboratory',
        "Success rates depend heavily on the woman's age",
        'Multiple pregnancy is a significant risk',
        'Multiple attempts may be needed for success',
      ],
      vocabulary: [
        { term: 'IVF', definition: 'In Vitro Fertilization - fertilization outside the body' },
        { term: 'Egg Retrieval', definition: 'Procedure to collect eggs from ovaries' },
        { term: 'Embryo Transfer', definition: 'Placing embryos into the uterus' },
        { term: 'Multiple Pregnancy', definition: 'Twins, triplets, or more' }
      ],
      quiz: [
        {
          question: 'What is the approximate success rate of IVF for women under 35?',
          options: [
            '5-10%',
            '20-30%',
            '40-50%',
            '70-80%',
          ],
          correctAnswer: 2,
          explanation: 'Women under 35 have the highest success rates with IVF, approximately 40-50% live birth rate per embryo transfer.'
        },
        {
          question: 'What is the most common risk of IVF?',
          options: [
            'Multiple pregnancy',
            'Ectopic pregnancy',
            'Infection',
            'Immediate menopause',
          ],
          correctAnswer: 0,
          explanation: 'Multiple pregnancy (twins or more) is the most common risk of IVF, occurring when multiple embryos are transferred and more than one implants.',
        }
      ]
    },
    {
      level: 2,
      title: 'The IVF Process Explained',
      content: `IVF is a complex multistep process that has helped millions of couples achieve pregnancy since the first IVF baby was born in 1978.

**IVF Timeline:**

**Pretreatment (Weeks -1 to 0):**
- Preliminary testing
- Ovarian reserve testing
- Infectious disease screening
- Genetic counseling (if indicated)
- Consent forms and planning

**Ovarian Stimulation (Days 1-12):**
- Birth control pills (sometimes) for cycle scheduling
- GnRH agonist or antagonist started
- Gonadotropin injections begin (FSH ± LH)
- Monitoring: ultrasounds and estradiol levels
- Trigger shot (hCG or GnRH agonist) when follicles mature

**Egg Retrieval (Day ~14):**
- 34-36 hours after trigger
- Transvaginal ultrasound-guided aspiration
- Sedation anesthesia
- Typically 15-30 minutes
- Recovery: 30-60 minutes
- Go home same day

**Fertilization (Day 14-15):**
- Eggs assessed for maturity
- Prepared sperm added (conventional IVF)
- Or ICSI (single sperm injected per egg)
- Fertilization checked next day

**Embryo Development (Days 15-20):**
- Embryos cultured in incubator
- Day 3: Cleavage stage (6-8 cells)
- Day 5-6: Blastocyst stage (100+ cells)
- Graded for quality

**Embryo Transfer (Day 19-20):**
- 1-2 embryos selected
- Soft catheter through cervix
- Ultrasound guidance
- No anesthesia needed
- Rest for 30 minutes after

**Luteal Phase Support (2 weeks):**
- Progesterone (injections, vaginal, or oral)
- Estradiol (sometimes)
- Pregnancy test 9-14 days after transfer

**IVF Protocols:**

**Long Protocol:**
- Lupron (GnRH agonist) starts in luteal phase of previous cycle
- "Down-regulation" before stimulation
- Most common protocol
- Good control, predictable response

**Antagonist Protocol:**
- Ganirelix or cetrorelix added mid-cycle
- Prevents premature ovulation
- Shorter duration
- Lower OHSS risk

**Flare Protocol:**
- GnRH agonist from day 1
- "Flare" of endogenous FSH/LH
- For poor responders

**Egg Quality Factors:**
- Age (most important factor)
- Antral follicle count (AFC)
- AMH level
- Previous response
- Lifestyle factors (smoking, BMI)

**Embryo Selection:**

**Grading Systems:**
- Cell number (day 3)
- Cell symmetry
- Fragmentation
- Blastocyst expansion
- Inner cell mass quality
- Trophectoderm quality

**Comprehensive Chromosome Screening (PGT-A):**
- Tests for aneuploidy (wrong chromosome number)
- May improve implantation rates
- Reduces miscarriage risk
- Allows single embryo transfer

**Number to Transfer:**
- Elective single embryo transfer (eSET) increasingly common
- Reduces multiple pregnancy risk
- Success depends on embryo quality and patient age

**Cryopreservation:**
- Excess embryos can be frozen (vitrification)
- Allows multiple transfer attempts
- Reduces need for fresh stimulation
- Success rates similar to fresh embryos

**Failed Cycle:**
- Common - not every cycle works
- Emotional impact significant
- Discuss changes for next attempt
- Consider taking a break between cycles

`,
      keyPoints: [
        'IVF involves ovarian stimulation, egg retrieval, fertilization, embryo culture, and embryo transfer',
        'Long protocol uses down-regulation, antagonist protocol is shorter with lower OHSS risk',
        'Embryo grading helps select best embryos for transfer',
        'Vitrification allows successful freezing of excess embryos',
      ],
      vocabulary: [
        { term: 'GnRH Agonist', definition: 'Medication that initially stimulates then suppresses FSH/LH' },
        { term: 'GnRH Antagonist', definition: 'Medication that prevents premature LH surge' },
        { term: 'Vitrification', definition: 'Ultra-rapid freezing technique for embryos' },
        { term: 'eSET', definition: 'Elective Single Embryo Transfer' }
      ],
      quiz: [
        {
          question: 'How many days after trigger shot is egg retrieval performed?',
          options: [
            '12-24 hours',
            '24-36 hours',
            '48-72 hours',
            '5-7 days',
          ],
          correctAnswer: 1,
          explanation: 'Egg retrieval is performed 34-36 hours after the trigger shot, which is when the eggs have reached final maturation but before ovulation occurs.'
        },
        {
          question: 'What is the advantage of the antagonist protocol?',
          options: [
            'Higher success rates',
            'Lower cost',
            'Shorter duration and lower OHSS risk',
            'No monitoring needed',
          ],
          correctAnswer: 2,
          explanation: 'The antagonist protocol is shorter in duration and carries a lower risk of ovarian hyperstimulation syndrome (OHSS) compared to the long protocol.',
        }
      ]
    },
    {
      level: 3,
      title: 'IVF Protocols and Monitoring',
      content: `IVF requires precise hormonal manipulation and monitoring to optimize outcomes while minimizing complications.

**Controlled Ovarian Stimulation (COS):**

**Goal:** Retrieve multiple mature oocytes while avoiding OHSS

**Medications:**

**GnRH Agonists (Long Protocol):**
- Leuprolide, goserelin
- Started in luteal phase of previous cycle
- Causes initial flare then down-regulation
- Prevents premature LH surge

**GnRH Antagonists:**
- Ganirelix acetate, cetrorelix acetate
- Started when lead follicle ≥14 mm
- Immediately suppresses LH surge
- Shorter stimulation duration

**Gonadotropins:**
- FSH preparations (Follistim, Gonal-F, Bravelle)
- FSH + LH preparations (Menopur, Repronex)
- Dosing: 75-450 IU daily based on protocol
- Subcutaneous injection

**Adjunct Medications:**
- Oral contraceptives (cycle scheduling)
- Baby aspirin (some protocols)
- Vitamin D (if deficient)
- DHEA (for poor responders - limited evidence)

**Monitoring:**

| Day | Assessment |
|-----|------------|
| Day 3 | Baseline ultrasound, estradiol, start stimulation |
| Day 6-7 | Ultrasound, estradiol, adjust dose |
| Day 8-10 | Ultrasound, estradiol, adjust dose |
| Day 11+ | Continue until lead follicles ≥18 mm |
| Trigger | When 3+ follicles ≥17-18 mm, E2 appropriate |

**Estradiol Ranges:**

| Lead Follicle Size | Expected E2 (pg/mL) |
|-------------------|---------------------|
| 10-12 mm | 200-400 |
| 13-15 mm | 400-600 |
| 16-18 mm | 600-1000+ |
| Mature (≥18 mm) | 200-300 per follicle |

**Trigger Criteria:**
- ≥3 follicles ≥17 mm
- Estradiol appropriate for follicle number
- Consider OHSS risk (high AFC, high E2, young age)

**Trigger Medications:**

| Medication | Dose | Timing to Retrieval |
|-----------|------|---------------------|
| hCG (Ovidrel, Pregnyl) | 10,000 IU | 34-36 hours |
| Leuprolide | 1 mg | 34-36 hours |
| Dual trigger | hCG + leuprolide | 34-36 hours |

**Egg Retrieval:**

**Procedure:**
- Transvaginal ultrasound-guided
- 17-gauge needle through vaginal wall
- Follicle aspiration with suction
- Follicles flushed with culture medium
- Fluid collected in test tubes
- Temperature controlled

**Sedation Options:**
- General anesthesia (rare now)
- IV sedation (most common)
- Paracervical block (rare)

**Post-Procedure:**
- Recover 30-60 minutes
- Discharge home with companion
- Pain: cramping, spotting
- Return to work: 1-2 days

**Fertilization Methods:**

**Conventional IVF:**
- 50,000-100,000 motile sperm per egg
- Co-incubation overnight
- Fertilization check next day
- Normal fertilization rate: 70-80%

**ICSI Indications:**
- Male factor (count, motility, morphology)
- Previous fertilization failure
- Low yield or poor quality eggs
- Frozen-thawed sperm
- PGT-M (requires genetic testing)

**ICSI Procedure:**
- Immobilize sperm
- Tail removed if needed
- Single sperm injected into oocyte
- Fertilization check next day
- Similar success to conventional IVF when indicated

**Abnormal Fertilization:**

| Pattern | Description | Outcome |
|--------|-------------|---------|
| Empty | No sperm entered | Discard |
| 1PN | Only one pronucleus | Discard |
| 3PN | Multiple sperm entry | Discard |
| 2PN | Normal fertilization | Culture |

**Embryo Culture:**
- Temperature: 37°C
- Gas: 5-6% O2, 5-6% CO2
- Humidity: 95%+
- Culture medium: sequential media
- Embryologists check daily
- Morphology assessed

**Day 3 vs. Day 5 Transfer:**

| Factor | Day 3 | Day 5 (Blastocyst) |
|--------|--------|-------------------|
| Cell number | 6-10 cells | 100+ cells |
| Selection | Limited | Better selection |
| Embryos to transfer | 2-3 | 1-2 |
| Freeze all | Less common | More common |
| Implantation | 25-35% | 45-55% |
| No transfer | 10% | 30-40% |

**Luteal Phase Support:**

**Progesterone:**
- Vaginal suppositories/crumps (most common)
- Intramuscular progesterone in oil
- Oral progesterone (less effective)
- Continue until 8-10 weeks if pregnant

- Estradiol:
- Often added with progesterone
- Especially in IVF cycles
- Discontinued with positive pregnancy test 
      `,
      keyPoints: [
        'GnRH agonists cause down-regulation, antagonists prevent LH surge',
        'Estradiol monitoring helps assess follicular development',
        'ICSI is indicated for male factor or previous fertilization failure',
        'Blastocyst culture allows better embryo selection',
      ],
      vocabulary: [
        { term: 'COS', definition: 'Controlled Ovarian Stimulation' },
        { term: '1PN/2PN/3PN', definition: 'Number of pronuclei - 2PN is normal fertilization' },
        { term: 'Sequential Media', definition: 'Different culture media for different embryo stages' },
        { term: 'Trophectoderm', definition: 'Outer cell layer of blastocyst that becomes placenta' }
      ],
      quiz: [
        {
          question: 'What does 2PN indicate after fertilization?',
          options: [
          'Abnormal fertilization',
          'Normal fertilization (two pronuclei)',
          'Failed fertilization',
          'Polyspermy (three sperm entered)',
          ],
          correctAnswer: 1,
          explanation: '2PN indicates normal fertilization with two pronuclei (one from sperm, one from egg). This is the expected appearance of a normally fertilized zygote.'
        },
        {
          question: 'What is the primary advantage of blastocyst transfer over day 3 transfer?',
          options: [
          'Faster procedure',
          'Better embryo selection and higher implantation rate',
          'Lower cost',
          'No need for progesterone support',
          ],
          correctAnswer: 1,
          explanation: 'Blastocyst transfer allows better embryo selection because embryos that develop to day 5-6 are more likely to be genetically normal and viable, resulting in higher implantation rates.'
        }
      ]
    },
    {
      level: 4,
      title: 'IVF Outcomes and Complications',
      content: `Success rates and complications of IVF depend on multiple factors including patient age, ovarian reserve, and protocol choices.

**Predictors of IVF Success:**

**Patient Factors:**

| Factor | Impact on Success |
|--------|-----------------|
| Age | Strongest predictor |
| AMH | Predicts oocyte yield |
| AFC | Predicts oocyte yield |
| BMI | Obese: lower success |
| Smoking | Decreases success |
| Alcohol | Heavy use decreases success |

**Cycle Factors:**

| Factor | Optimal Range |
|--------|---------------|
| Eggs retrieved | 10-15 |
| Maturity rate | >80% |
| Fertilization rate | 70-80% |
| Blastocyst formation | 40-60% |
| Embryo quality | Good grades |

**Age-Specific Success Rates:**

| Age | Live Birth/Egg | Live Birth/Transfer |
|-----|---------------|-------------------|
| <35 | 20-30% | 40-50% |
| 35-37 | 15-20% | 30-40% |
| 38-40 | 5-10% | 20-30% |
| 41-42 | 3-5% | 10-15% |
| >42 | 1-3% | 5-10% |

**Cumulative Success:**
- 60-80% achieve pregnancy within 3 cycles
- Consider multiple cycles before giving up
- FET (frozen embryo transfer) adds cumulative chance

**Complications:**

**Ovarian Hyperstimulation Syndrome (OHSS):**

**Incidence:**
- Mild: 20-33% of IVF cycles
- Moderate: 3-6%
- Severe: 0.1-2%

**Risk Factors:**
- Age <35
- Low BMI
- PCOS
- High antral follicle count
- High estradiol (>6000 pg/mL)
- Previous OHSS

**Prevention:**
- GnRH antagonist with GnRH agonist trigger
- Coasting (stop gonadotropins, continue antagonist)
- Elective cryopbursement of all embryos
- Cabergoline (may reduce risk)

**Mild OHSS Management:**
- Observation
- Hydration
- Pain relievers
- Monitor weight, abdominal girth

**Severe OHSS Management:**
- Hospitalization
- IV fluids
- Paracentesis, thoracentesis
- Anticoagulation (if indicated)
- Consider albumin

**Multiple Pregnancy:**
- Twin rate: 25-35% with double embryo transfer
- Triplet+ rate: 2-5%
- Risks: prematurity, low birth weight, preeclampsia
- Prevention: eSET (elective single embryo transfer)

**Ectopic Pregnancy:**
- Rate: 2-5% (vs. 1-2% natural conception)
- Usually tubal
- Heterotopic (intrauterine + ectopic): <1%
- Diagnosis: hCG + ultrasound (no intrauterine sac)
- Treatment: methotrexate or surgery

**Adhesion Formation:**
- From egg retrieval or prior surgery
- Can affect future cycles
- May require adhesiolysis
- Prevention: careful technique, hydroflotation

**Psychological Impact:**
- Anxiety, depression common
- Stress of treatment
- Grief after failed cycle
- Relationship strain
- Counseling and support essential

**Financial Considerations:**
- Cost: $12,000-20,000 per fresh IVF cycle
- Medications: $3,000-6,000
- FET: $3,000-5,000
- PGT: $3,000-7,000
- Insurance coverage varies by state/country

**Preimplantation Genetic Testing (PGT):**
- Screens for aneuploidy (PGT-A)
- Single gene disorders (PGT-M)
- Structural rearrangements (PGT-SR)
- Biopsy of trophectoderm cells (day 5-6)
- Mosaicism detection possible
- Controversial benefit for all patients
- Recommended for: recurrent loss, advanced age, known genetic risks 
      `,
      keyPoints: [
        'Age is the strongest predictor of IVF success',
        'OHSS risk is highest in young women with high ovarian reserve',
        'Multiple pregnancy risk is significantly increased with IVF',
        'PGT can screen embryos for chromosomal abnormalities',
      ],
      vocabulary: [
        { term: 'FET', definition: 'Frozen Embryo Transfer' },
        { term: 'eSET', definition: 'Elective Single Embryo Transfer' },
        { term: 'Heterotopic', definition: 'Simultaneous intrauterine and ectopic pregnancy' },
        { term: 'Mosaicism', definition: 'Embryo with both normal and abnormal cells' }
      ],
      quiz: [
        {
          question: 'What is the most effective strategy to prevent multiple pregnancy in IVF?',
          options: [
          'Using clomiphene instead of gonadotropins',
          'Elective single embryo transfer (eSET)',
          'Lowering the dose of trigger medication',
          'Waiting longer between cycles',
          ],
          correctAnswer: 1,
          explanation: 'Elective single embryo transfer (eSET) is the most effective strategy to prevent multiple pregnancy in IVF, while maintaining good success rates with good quality embryos.'
        },
        {
          question: 'What is the primary indication for PGT-A (aneuploidy screening)?',
          options: [
          'Male factor infertility',
          'Advanced maternal age or recurrent pregnancy loss',
          'Low ovarian reserve',
          'Previous IVF failure regardless of age',
          ],
          correctAnswer: 1,
          explanation: 'PGT-A is most beneficial for advanced maternal age (where aneuploidy rates are high) or recurrent pregnancy loss (where chromosomal abnormalities are a common cause).'
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced IVF Techniques and Outcomes',
      content: `Specialized IVF techniques address specific fertility challenges and improve outcomes for difficult cases.

**Intracytoplasmic Sperm Injection (ICSI):**

**Indications:**
- Severe oligoasthenoteratospermia
- Azoospermia (surgical sperm retrieval)
- Previous fertilization failure
- Frozen-thawed sperm
- Abnormal sperm morphology (strict criteria <4% normal)
- Anti-sperm antibodies

**Sperm Retrieval Techniques:**

**Percutaneous Epididymal Sperm Aspiration (PESA):**
- Simple office procedure
- No sedation needed
- For obstructive azoospermia

**Microsurgical Epididymal Sperm Aspiration (MESA):**
- Operating microscope
- Microscopic aspiration of epididymis
- For obstructive azoospermia
- Higher quality sperm than PESA

**Testicular Sperm Extraction (TESE):**
- Open testicular biopsy
- For non-obstructive azoospermia
- May find focal sperm production
- Multiple biopsies if needed
- Can be performed fresh or previously frozen

**Micro-TESE:**
- Microscopic evaluation
- Identifies sperm-containing tubules
- Higher success than standard TESE
- Operating microscope required

**Preimplantation Genetic Testing (PGT):**

**PGT-A (Aneuploidy):**

**Technique:**
- Trophectoderm biopsy (day 5-6)
- 5-8 cells biopsied
- Next-generation sequencing
- 24-chromosome analysis
- Mosaicism detection

**Benefits:**
- Improved implantation rates in selected groups
- Reduced miscarriage rates
- Reduced multiple pregnancy (eSET more acceptable)
- Shorter time to pregnancy
- Avoids transfer of non-viable embryos

**Limitations:**
- Not 100% sensitive/specific
- May discard viable mosaic embryos
- Embryo biopsy risk (rare damage)
- Additional cost ($3,000-7,000)
- Requires IVF

**PGT-M (Monogenic Disorders):**

- Indications:
- Single gene disorders (cystic fibrosis, SMA, Huntington)
- Both parents carriers of same condition
- Balancing translocations

- Technique:
- Probe development required
- Amplification of biopsied cells
- PCR-based testing
- Simultaneous aneuploidy screening possible

**Donor Egg IVF:**

- Indications:
- Diminished ovarian reserve (high FSH, low AMH)
- Primary ovarian insufficiency
- Poor response in previous cycles
- Genetic conditions in intended mother
- Same-sex male couples

- Process:
- Donor screening and selection
- Ovarian stimulation of donor
- Recipient cycle synchronization
- Fertilization with recipient/partner sperm
- Embryo transfer to recipient

- Success:
- 50-60% live birth per transfer
- Dependent on recipient age, not donor age
- Cumulative >80% with multiple cycles

**Gestational Surrogacy:**

- Indications:
- Absent uterus
- Severe uterine abnormalities
- Recurrent pregnancy loss
- Medical contraindications to pregnancy
- Same-sex male couples

- Types:
- Gestational carrier (no genetic link)
- Traditional surrogacy (donor + carrier) - rarely done now

- Process:
- Intended parents' gametes (or donor)
- IVF to create embryos
- Transfer to carrier
- Legal contracts essential

**Considerations:|
- Varies by jurisdiction
- Complex legal arrangements
- Screening of carrier required
- Pre-birth orders often needed

**Ovarian Tissue Cryopreservation:**

- Indications:
- Cancer patients requiring immediate treatment
- Cannot delay for ovarian stimulation
- Prepubertal patients
- Gender affirming care

- Technique:
- Laparoscopic removal of ovarian cortex
- Sectioned into strips
- Cryopreserved by slow freezing or vitrification
- Stored indefinitely

- Transplantation:
- Orthotopic (back to ovarian location)
- Heterotopic (forearm, abdominal wall)
- Restoration of ovarian function
- Spontaneous pregnancies possible
- >100 live births reported

**In Vitro Maturation (IVM):**

- Concept:
- Immature oocytes retrieved
- Matured in laboratory culture
- No or minimal stimulation
- Reduces OHSS risk

- Indications:
- PCOS (high OHSS risk)
- Fertility preservation
- Cancer patients

| Success:|
- Lower maturation rates (50-70%)
- Lower pregnancy rates than conventional IVF
- Promising but limited availability

**Mitochondrial Replacement:**

- "Three-Parent" Technique:
- Spindle transfer
- Pronuclear transfer
- Prevents mitochondrial DNA transmission

- Indications:
- Mitochondrial diseases
- Possibly age-related oocyte quality (controversial)

- Status:
- Legal in UK
- Not legal in US
- Ethical concerns

- Live births:
- Several healthy children born
- Long-term follow-up ongoing

**Future Directions:**
- In vitro gametogenesis (stem cells to gametes)
- Artificial gametes (somatic cells to gametes)
- Gene editing (CRISPR) in embryos
- Organ generation
- Improved cryopreservation
- AI embryo selection algorithms 
      `,
      keyPoints: [
        'ICSI bypasses natural sperm-egg interaction barriers',
        'PGT-A screens embryos for chromosomal abnormalities',
        'Donor egg success depends on recipient age, not donor age',
        'Ovarian tissue cryopreservation has produced >100 live births',
      ],
      vocabulary: [
        { term: 'Mosaicism', definition: 'Cells with different chromosomal makeup in same embryo' },
        { term: 'Spindle Transfer', definition: 'Moving spindle apparatus from one egg to another' },
        { term: 'IVM', definition: 'In Vitro Maturation - maturing eggs in laboratory' },
        { term: 'Artificial Gametes', definition: 'Gametes created from somatic cells' }
      ],
      quiz: [
        {
          question: 'What is the primary difference between PESA and MESA?',
          options: [
          'One is done under general anesthesia, the other under local',
          'MESA uses microscopic visualization, PESA does not',
          'PESA retrieves testicular sperm, MESA retrieves epididymal',
          'MESA is only for donor sperm',
          ],
          correctAnswer: 1,
          explanation: 'MESA uses an operating microscope for direct visualization of the epididymis, while PESA is a blind aspiration technique without visualization. MESA typically yields higher quality sperm.'
        },
        {
          question: 'What is the theoretical upper limit of success for donor egg IVF?',
          options: [
          '30% per transfer regardless of recipient age',
          '50-60% per transfer (depends on recipient age)',
          '80-90% per transfer',
          '100% success rate',
          ],
          correctAnswer: 1,
          explanation: 'Donor egg IVF has success rates of 50-60% live birth per transfer, but this depends on recipient age (uterus age) rather than donor age.',
        }
      ]
    }
  ],
  relatedTopics: [
    'fertility-overview',
    'fertility-treatments',
    'infertility',
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ASRM Practice Guidelines',
    'SART National Summary Report',
    'CDC ART Success Rates',
  ]
}