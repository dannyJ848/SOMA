import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const fertilityTreatments: WomensHealthContent = {
  id: 'fertility-treatments',
  title: 'Fertility Treatments',
  category: 'Fertility',
  complexityLevels: [
    {
      level: 1,
      title: 'Fertility Treatment Options',
      content: `If you're having trouble getting pregnant, there are many treatments available. Most couples who get treatment eventually become parents.

**Common Fertility Treatments:**

**1. Lifestyle Changes**
- Reach a healthy weight
| Quit smoking
| Limit alcohol
| Reduce stress
| Exercise moderately

**2. Medicines for Ovulation**
- Help ovaries release eggs
| Pills or injections
| Monitor with ultrasound
| May cause multiples (twins, triplets)

**3. Intrauterine Insemination (IUI)**
- Sperm is placed directly in the uterus
| Done around the time of ovulation
| Simple procedure, done in office
| Success rate: 10-20% per cycle

**4. In Vitro Fertilization (IVF)**
- Eggs are removed from ovaries
| Fertilized with sperm in lab
| Embryos placed in uterus
| Most effective treatment
| More expensive and complex

**5. Surgery**
- Fix blocked fallopian tubes
| Remove fibroids or polyps
| Treat endometriosis
| Remove ovarian cysts

**6. Third-Party Options**
- Egg donation
| Sperm donation
| Gestational carrier (surrogacy)
| Adoption

**What to Expect:**
- Treatment may take several months
| Multiple attempts may be needed
| Emotional ups and downs are normal
| Support groups and counseling available

**Remember:** Your doctor will help you choose the best treatment based on your specific situation.`,
      keyPoints: [
        'Lifestyle changes are first-line for fertility',
        'Ovulation medications help release eggs',
        'IUI places sperm directly in the uterus',
        'IVF is the most effective but most complex treatment'
      ],
      vocabulary: [
        { term: 'IUI', definition: 'Intrauterine Insemination - sperm placed in uterus' },
        { term: 'IVF', definition: 'In Vitro Fertilization - eggs fertilized outside body' },
        { term: 'Ovulation', definition: 'When ovaries release an egg' },
        { term: 'Multiples', definition: 'Twins, triplets, or more babies' }
      ],
      quiz: [
        {
          question: 'What is the success rate per cycle for IUI?',
          options: [
            '5-10%',
            '10-20%',
            '30-40%',
            '50-60%'
          ],
          correctAnswer: 1,
          explanation: 'IUI has a success rate of approximately 10-20% per cycle, with cumulative success rates increasing with multiple attempts.'
        },
        {
          question: 'What is the most effective fertility treatment?',
          options: [
            'Lifestyle changes',
            'Ovulation medications',
            'IVF',
            'Surgery'
          ],
          correctAnswer: 2,
          explanation: 'IVF (In Vitro Fertilization) is generally the most effective fertility treatment, with success rates of 40-50% per transfer for younger women.'
        }
      ]
    },
    {
      level: 2,
      title: 'Overview of Fertility Treatments',
      content: `Fertility treatments range from simple lifestyle interventions to complex assisted reproductive technologies.

**Treatment Hierarchy:**

**Step 1: Lifestyle and Optimization**

**Modifications:**
- Weight management:
  - Underweight: gain to BMI 18.5-24.9
  - Overweight: lose 5-10% of body weight
- Smoking cessation (both partners)
| Alcohol reduction (<2 drinks/day)
| Caffeine moderation (<200-300 mg/day)
| Moderate exercise
| Stress reduction

**Timing Intercourse:**
| Every 1-2 days during fertile window
| Avoid lubricants that harm sperm
| Use sperm-friendly lubricants if needed

**Step 2: Ovulation Induction**

**Oral Medications:**

**Clomiphene Citrate:**
- First-line treatment
| Days 5-9 of cycle (or 3-7)
| Dose: 50-150 mg/day
| 60-85% ovulation rate
| 10-15% pregnancy rate per cycle

**Letrozole:**
- Alternative to clomiphene
| Better for PCOS
| Lower multiple pregnancy risk
| Similar success to clomiphene

**Injectable Gonadotropins:**
| FSH or FSH+LH
| Daily injections for 8-12 days
| Strict monitoring required
| Higher success (15-25% per cycle)
| Higher multiple risk (20-30%)

**Step 3: Intrauterine Insemination (IUI)**

**Process:**
1. Ovulation induction or natural cycle
2. Monitor for ovulation
3. Collect and prepare sperm (wash)
4. Inseminate 24-36 hours after LH surge/hCG trigger
5. Progesterone support if needed

**Success by Indication:**
- Cervical factors: 20-30%
| Mild male factor: 10-15%
| Unexplained: 10-15%
| Severe male factor: <5%

**Step 4: Surgical Treatments**

**Hysteroscopic:**
- Remove polyps
| Remove submucosal fibroids
| Break up scar tissue
| Septum resection

**Laparoscopic:**
| Treat endometriosis
| Remove endometriomas
| Adhesiolysis
| Ovarian drilling (PCOS)
| Tubal reconstruction

**Step 5: Assisted Reproductive Technology (ART)**

**In Vitro Fertilization (IVF):**

**Indications:**
- Tubal factor
| Severe male factor
| Endometriosis
| Failed IUI
| Genetic conditions
| Unexplained infertility

**Process:**
1. Ovarian stimulation (8-12 days)
2. Egg retrieval
3. Fertilization (lab)
4. Embryo culture (3-6 days)
5. Embryo transfer
6. Pregnancy test

**Success Rates by Age:**

| Age | Live Birth/Transfer |
|-----|-------------------|
| <35 | 40-50% |
| 35-37 | 30-40% |
| 38-40 | 20-30% |
| >40 | 5-10% |

**ICSI (Intracytoplasmic Sperm Injection):**
| Used for male factor
| Direct sperm injection into egg
| Similar success to IVF when indicated

**Other ART Options:**

**GIFT (Gamete Intrafallopian Transfer):**
| Sperm and eggs placed in tube
| Fertilization inside body
| Rarely used now

**ZIFT (Zygote Intrafallopian Transfer):**
| Fertilized egg placed in tube
| Rarely used now

**Third-Party Reproduction:**
- Egg/sperm donation
| Gestational surrogacy
| Consider success with donor eggs (50-60%)

**Combined Approaches:**

Many couples use multiple treatments:
| Medications + IUI
| Surgery + IVF
| Multiple IVF cycles

**Emotional Support:**
| Counseling available
| Support groups
| Stress management techniques
| Mental health important throughout process |
`,
      keyPoints: [
        'Fertility treatments progress from simple to complex',
        'Ovulation induction is first-line for anovulation',
        'IUI success rates range from 10-30% depending on indication',
        'IVF success declines significantly with age'
      ],
      vocabulary: [
        { term: 'Hysteroscopic', definition: 'Procedure to look inside the uterus' },
        { term: 'Laparoscopic', definition: 'Minimally invasive abdominal surgery' },
        { term: 'ART', definition: 'Assisted Reproductive Technology' },
        { term: 'ICSI', definition: 'Intracytoplasmic Sperm Injection' }
      ],
      quiz: [
        {
          question: 'What is the first-line oral medication for ovulation induction?',
          options: [
            'Clomiphene citrate',
            'Letrozole',
            'Gonadotropins',
            'hCG'
          ],
          correctAnswer: 0,
          explanation: 'Clomiphene citrate is the first-line oral medication for ovulation induction, with letrozole as an alternative that may be better for PCOS patients.'
        },
        {
          question: 'What is the primary advantage of IVF over IUI?',
          options: [
            'Lower cost',
            'Higher success rates per cycle',
            'No need for monitoring',
            'Can be done at home'
          ],
          correctAnswer: 1,
          explanation: 'IVF has significantly higher success rates per cycle compared to IUI, particularly for certain indications like tubal factor or severe male factor infertility.'
        }
      ]
    },
    {
      level: 3,
      title: 'Fertility Treatment Protocols and Outcomes',
      content: `Fertility treatments involve specific protocols with careful monitoring to maximize success while minimizing risks.

**Ovulation Induction Protocols:**

**Clomiphene Citrate:**

**Mechanism of Action:**
- Estrogen receptor modulator
| Blocks negative feedback → ↑GnRH, ↑FSH, ↑LH
| Stimulates follicular development

**Dosing:**
- Day 3-7 or 5-9: 50 mg
| Increase by 50 mg each cycle (max 150-150 mg)
| Monitor with ultrasound if risk of multiples
| Consider clomiphene challenge test

**Monitoring:**
| Urine LH kits (ovulation prediction)
| Basal body temperature charts
| Mid-luteal progesterone (>3 ng/mL confirms ovulation)
| Ultrasound monitoring for:
  - Multiple follicles
  - Endometrial development
  - Hyperstimulation

**Side Effects:**
| Hot flashes (10%)
| Mood changes
| Visual disturbances (discontinue if occur)
| Ovarian cysts
| Multiple pregnancy (5-10%)

**Letrozole Protocol:**

**Mechanism:**
| Aromatase inhibitor
| Blocks androgen-to-estrogen conversion
| Reduces estrogen → ↑FSH

**Dosing:**
| Days 3-7: 2.5-7.5 mg
| Similar monitoring to clomiphene

**Advantages:**
| Lower multiple pregnancy rate
| Better endometrial development
| Fewer side effects
| Superior for PCOS

**Gonadotropin Protocols:**

**Medications:**
| Recombinant FSH (follitropin alfa/beta)
| Urinary FSH/LH (menotropins)
| hCG trigger (for final maturation)

**Protocols:**

**Step-Up Protocol:**
| Start 75 IU/day
| Increase based on response
| Lower risk of OHSS

**Step-Down Protocol:**
| Start higher dose
| Decrease after response begins
| Lower risk of OHSS

**Monitoring:**
| Daily or every other day ultrasounds
| Estradiol measurements
| Adjust dose based on follicular response

**Trigger Criteria:**
| Lead follicles ≥18 mm
| Estradiol ≥200-300 pg/mL per mature follicle
| hCG 10,000 IU or leuprolide 1 mg

**Intrauterine Insemination (IUI):**

**Sperm Preparation:**
| Wash to remove prostaglandins, seminal fluid
| Concentrate motile sperm
| Swim-up or density gradient

**Timing:**
| 24-36 hours after LH surge
| 34-36 hours after hCG trigger
| Usually single insemination
| Double insemination (controversial)

**Number of Cycles:**
| Recommend 3-6 cycles
| After 6 cycles, consider other options
| Success plateaus after 4-6 cycles

**IVF Protocols:**

**Long Protocol (Luteal GnRH Agonist):**
| Down-regulation in luteal phase (previous cycle)
| Start ganirelix or cetrorelix when lead follicle ≥14 mm
| Continue until trigger
| Advantages: Shorter, less medication, lower OHSS risk

**Flare Protocol:|
| GnRH agonist day 1-2
| Flare of endogenous FSH/LH
| For poor responders
| May get more eggs but lower quality

**Protocols by Response Type:|

| Patient Type | Recommended Protocol |
|-------------|---------------------|
| Normal responder | Long protocol |
| High responder | Antagonist (lower OHSS) |
| Poor responder | Flare, microdose, or natural cycle |
| High OHSS risk | Antagonist + GnRH trigger |

**Embryo Transfer Decisions:**

**Number to Transfer:**

| Age | Embryos Transferred (Day 5) |
|-----|----------------------------|
| <35 | 1-2 |
| 35-37 | 2 |
| 38-40 | 2-3 |
| >40 | 3+ (consider PGT-A first) |

**Transfer Day:**
| Day 3 (cleavage): Earlier transfer, more info |
| Day 5-6 (blastocyst): Better selection, higher implantation |
`,
      keyPoints: [
        'Clomiphene blocks estrogen feedback to stimulate FSH and LH',
        'Antagonist protocol has lower OHSS risk than long protocol',
        'IUI is typically performed 24-36 hours after hCG trigger',
        'Blastocyst transfer allows better embryo selection'
      ],
      vocabulary: [
        { term: 'OHSS', definition: 'Ovarian Hyperstimulation Syndrome - over-response to fertility drugs' },
        { term: 'Cleavage Stage', definition: 'Day 3 embryo with 4-8 cells' },
        { term: 'Blastocyst', definition: 'Day 5-6 embryo with differentiated inner cell mass and trophectoderm' },
        { term: 'hCG Trigger', definition: 'Injection to finalize egg maturation before retrieval' }
      ],
      quiz: [
        {
          question: 'What is the benefit of the antagonist protocol over the long protocol?',
          options: [
          'Higher success rates',
          'Shorter duration and lower OHSS risk',
          'Lower cost',
          'No monitoring required'
          ],
          correctAnswer: 1,
          explanation: 'The antagonist protocol is shorter in duration and carries a lower risk of ovarian hyperstimulation syndrome (OHSS) compared to the long protocol.'
        },
        {
          question: 'How many embryos are typically transferred in women under 35 using blastocysts?',
          options: [
          '1-2 embryos',
          '3-4 embryos',
          '5+ embryos',
          'All embryos created'
          ],
          correctAnswer: 0,
          explanation: 'For women under 35, typically 1-2 blastocyst embryos are transferred to minimize the risk of multiple pregnancy while maintaining good success rates.'
        }
      ]
    },
    {
      level: 4,
      title: 'Complications and Advanced Protocols',
      content: `Fertility treatments carry specific risks and require specialized management strategies.

**Ovarian Hyperstimulation Syndrome (OHSS):**

**Pathophysiology:**
| VEGF-mediated increase in vascular permeability
| Fluid shift from intravascular to third space
| Activated by hCG (endogenous or exogenous)

**Risk Factors:**
| Young age |
| Polycystic ovaries
| High antral follicle count
| Previous OHSS
| High estradiol levels (>6000 pg/mL)

**Prevention:**
| Coast (stop gonadotropins, continue GnRH agonist)
| Trigger with GnRH agonist (antagonist cycles)
| Elective cryopreservation of all embryos
| Aspirin, cabergoline (may reduce risk)

**Classification:**

| Grade | Description |
|-------|-------------|
| Mild | Abdominal distension, discomfort |
| Moderate | Abdominal pain, nausea, vomiting, ultrasound evidence of ascites |
| Severe | Clinical ascites, hydrothorax, oliguria, hemoconcentration |

**Management:**

| Grade | Treatment |
|-------|----------|
| Mild | Observation, hydration |
| Moderate | Outpatient monitoring, analgesics, antiemetics |
| Severe | Hospitalization, IV fluids, paracentesis if needed |

**Multiple Pregnancy:**

**Risks:**
| Preterm delivery
| Low birth weight
| Preeclampsia
| Gestational diabetes
| Cesarean delivery
| NICU admission

**Prevention:**
| Limit number of embryos transferred
| Single embryo transfer (SET) when appropriate
| Blastocyst transfer (better selection)
| PGT-A (aneuploidy screening)

**Selective Reduction:**
| Considered for high-order multiples (≥3)
| Performed at 10-12 weeks
| Ethical considerations
| Emotional support essential

**Ectopic Pregnancy after ART:**

**Risk:**
| 2-5% after IVF (vs. 1-2% natural)
| Higher with tubal factor infertility

**Diagnosis:|
| Serial hCG levels
| Transvaginal ultrasound
| No gestational sac in uterus with hCG >1500

**Treatment:|
| Methotrexate if stable and early
| Laparoscopic surgery if unstable or advanced
| Tubal rupture risk with subsequent pregnancy

**Adhesion Formation:**
| Post-surgical scarring
| Can impair fertility
| Prevention: |
  - Meticulous surgical technique
  - Adhesion barriers
  - Laparoscopy over laparotomy

**Poor Responders:**

**Definition:**
| Retrieved ≤3 oocytes with standard stimulation
| Requires high gonadotropin doses
| Low antral follicle count

**Protocols:**

**Microdose Flare:**
| Oral contraceptives 2-3 weeks
| Microdose leuprolide (40-50 mcg BID) starting day 3
| Gonadotropins 300-450 IU starting day 3
| For very poor responders

**Natural Cycle IVF:**
| No stimulation
| Collect single dominant follicle
| Lower cost, no OHSS risk
| Low success (3-7%)
| Often requires multiple cycles

**Mild Stimulation:**
| Lower gonadotropin doses (150 IU)
| Clomiphene or letrozole add-back
| Oral gonadotropins (not available in US)

**Adjunctive Treatments:**

**Growth Hormone:**
| Controversial
| May improve oocyte quality
| For poor responders with previous failure

**DHEA:**
| Androgen precursor
| May improve ovarian response
| Used for low ovarian reserve
| Limited evidence

**Coenzyme Q10:**
| Antioxidant
| May improve egg quality
| Limited but promising evidence

**Vaginal Viagra:**
| Increases uterine blood flow
| For thin endometrium
| Limited evidence

**Testosterone Priming:**
| Short course before stimulation
| May improve follicular response
| Evidence limited |
`,
      keyPoints: [
        'OHSS is caused by VEGF-mediated vascular leak',
        'GnRH trigger reduces OHSS risk in antagonist cycles',
        'Multiple pregnancy risk increases with more embryos transferred',
        'Poor responders may benefit from microdose protocols'
      ],
      vocabulary: [
        { term: 'VEGF', definition: 'Vascular Endothelial Growth Factor - increases vascular permeability' },
        { term: 'SET', definition: 'Single Embryo Transfer' },
        { term: 'DHEA', definition: 'Dehydroepiandrosterone - androgen precursor' },
        { term: 'Coasting', definition: 'Stopping gonadotropins while continuing GnRH agonist to reduce OHSS risk' }
      ],
      quiz: [
        {
          question: 'What is the most effective method to prevent OHSS in high-risk patients?',
          options: [
          'Increased fluid intake',
          'Trigger with GnRH agonist in antagonist cycles',
          'Bed rest',
          'Prophylactic antibiotics'
          ],
          correctAnswer: 1,
          explanation: 'Triggering with a GnRH agonist in antagonist cycles (instead of hCG) significantly reduces the risk of OHSS in high-risk patients because it causes an endogenous LH surge with shorter half-life.'
        },
        {
          question: 'What defines a poor responder in IVF?',
          options: [
          'No pregnancy after 1 cycle',
          'Retrieved ≤3 oocytes with standard stimulation',
          'Age over 35',
          'High FSH levels only'
          ],
          correctAnswer: 1,
          explanation: 'A poor responder is typically defined as someone who retrieves ≤3 oocytes despite standard gonadotropin dosing, or requires high doses to achieve this.'
        }
      ]
    },
    {
      level: 5,
      title: 'Emerging Therapies and Special Populations',
      content: `Advances in reproductive medicine continue to expand options for challenging cases and special populations.

**Preimplantation Genetic Testing (PGT):**

**PGT-A (Aneuploidy Screening):**

**Technology:**
| Trophectoderm biopsy (5-8 cells)
| Next-generation sequencing
| Can detect mosaicism
| 24-chromosome analysis

**Benefits:**
| Improved implantation rates
| Reduced miscarriage rates
| Reduced multiple pregnancy (SET)
| Shorter time to pregnancy

**Limitations:**
| Not 100% sensitive/specific
| May discard mosaic embryos that could be viable
| Embryo damage risk
| Additional cost ($3,000-7,000)

**PGT-M (Monogenic/Single Gene):**

**Indications:|
| Cystic fibrosis
| Spinal muscular atrophy
| Huntington disease
| Hemoglobinopathies
| Specific mutations in family

**Process:|
| Custom probe development required
| Biopsy of embryo
| Testing for specific mutation
| Transfer unaffected embryos

**Ethical Issues:|
| Selection based on genetic traits
| Designer babies concerns
| Disability rights perspective
| Regulation varies by country

**Ovarian Tissue Cryopreservation:**

**Indications:|
| Cancer patients requiring immediate gonadotoxic therapy
| Cannot delay for ovarian stimulation
| Prepubertal patients
| Gender affirming care

**Procedure:|
| Laparoscopic removal of ovarian cortex
| Cut into strips
| Cryopreserved (slow freezing or vitrification)

| Transplantation:
| Orthotopic (back to ovary) |
| Heterotopic (forearm, abdominal wall)
| Restoration of ovarian function
| >100 live births reported

**In Vitro Maturation (IVM):|
| Immature oocytes retrieved
| Matured in laboratory
| No/minimal stimulation
| Reduces OHSS risk

| Indications:
| PCOS (high OHSS risk)
| Fertility preservation
| Cancer patients

| Challenges:
| Lower maturation rates
| Lower pregnancy rates
| Technically demanding
| Not widely available

**Mitochondrial Replacement Therapy (MRT):**

"Three-Parent" Technique:
| Maternal spindle transfer
| Pronuclear transfer
| Prevents mitochondrial DNA transmission
| Legal in UK, not US

| Applications:
| Mitochondrial diseases
| Age-related oocyte quality (controversial)

| Concerns:
| Ethical
| Genetic identity
| Long-term effects unknown

**Non-Invasive PGT:|
| Cell-free DNA from culture media
| No embryo biopsy required
| Less invasive, less risk
| Still experimental
| May replace PGT in future

**Fertility Preservation for Cancer Patients:**

| Urgent Considerations:
| Cancer treatment timing
| Stage of disease
| Partner status (sperm/embryo vs. egg only)
| Prognosis

| Options:
| Random-start ovarian stimulation
| Ovarian tissue cryopreservation
| Ovarian transposition (surgery)
| GnRH agonist during chemotherapy (controversial)

| Random-Start Stimulation:
| Start any day of cycle
| Growth in random cohort
| Still retrieve mature oocytes
| Comparable to conventional stimulation

| Fertility After Cancer:
| Discuss before treatment
| Consider referral to fertility specialist
| Emotional support
| Financial planning

**Special Populations:**

| HIV-Serodiscordant Couples:
| Sperm washing
| IUI or IVF with washed sperm
| Suppressive ART during pregnancy
| Viral load monitoring

| Same-Sex Couples:
| Female: IUI/IVF with donor sperm
| Male: Egg donation + gestational carrier
| Legal considerations vary

| Single Parents:
| Donor sperm (women)
| Donor eggs + gestational carrier (men)
| Counseling important

| Patients with Disabilities:
| Physical adaptations for procedures
| Emotional support
| Consider support persons
| Accessibility planning

| Future Directions:
| In vitro gametogenesis (stem cells to gametes)
| Artificial gametes
| Gene editing (CRISPR)
| Organ generation
| Improved cryopreservation
| AI embryo selection |
`,
      keyPoints: [
        'PGT-A screens for aneuploidy to improve implantation rates',
        'Ovarian tissue cryopreservation has produced >100 live births',
        'IVM allows egg maturation without ovarian stimulation',
        'MRT prevents mitochondrial DNA transmission but is ethically controversial'
      ],
      vocabulary: [
        { term: 'NGS', definition: 'Next-Generation Sequencing - DNA sequencing technology' },
        { term: 'Mosaicism', definition: 'Presence of both normal and abnormal cells in embryo' },
        { term: 'IVM', definition: 'In Vitro Maturation - maturing eggs in laboratory' },
        { term: 'Random-Start', definition: 'Starting ovarian stimulation any day of cycle' }
      ],
      quiz: [
        {
          question: 'What is the primary advantage of non-invasive PGT compared to standard PGT?',
          options: [
        'Higher accuracy',
        'Lower cost',
        'No embryo biopsy required, less invasive',
        'Faster results'
        ],
          correctAnswer: 2,
          explanation: 'Non-invasive PGT analyzes cell-free DNA from culture media, eliminating the need for embryo biopsy and reducing potential damage to the embryo.'
        },
        {
          question: 'What is random-start ovarian stimulation primarily used for?',
          options: [
        'Improving egg quality',
        'Cancer patients who need immediate treatment',
        'Women with PCOS',
        'Reducing medication cost'
        ],
          correctAnswer: 1,
          explanation: 'Random-start ovarian stimulation is primarily used for cancer patients who cannot wait for the next menstrual period to start fertility preservation, allowing them to begin stimulation immediately.'
        }
      ]
    }
  ],
  relatedTopics: [
    'fertility-overview',
    'infertility',
    'ivf',
    'contraception'
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ASRM Practice Guidelines',
    'ESHE Guidelines',
    'Cochrane Reviews'
  ]
};
