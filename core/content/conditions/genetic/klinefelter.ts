/**
 * Klinefelter Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const klinefelter: EducationalContent = {
  id: 'condition-klinefelter-syndrome',
  type: 'condition',
  name: 'Klinefelter Syndrome',
  nameEs: 'Síndrome de Klinefelter',
  alternateNames: ['KS', '47,XXY', 'XXY Syndrome', 'Klinefelter\'s Syndrome'],
  hpoId: 'HP:0003208',

  levels: {
    1: {
      level: 1,
      summary: 'Klinefelter syndrome is a genetic condition in males who are born with an extra X chromosome, causing tall stature, small testicles, infertility, and sometimes learning difficulties.',
      explanation: `Klinefelter syndrome (KS) is a genetic condition that affects males. It happens when a boy is born with an extra X chromosome.

**What causes Klinefelter syndrome:**
- Males normally have one X and one Y chromosome (XY)
- In KS, males have XXY chromosomes
- The extra X chromosome occurs by chance
- Not inherited from parents
- About 1 in 650 males have KS

**Physical features:**
- Taller than average
- Longer arms and legs
- Small testicles
- Small penis (sometimes)
- Less facial and body hair
- Enlarged breasts (gynecomastia)
- Reduced muscle tone
- May be overweight

**Health problems:**
- Infertility (cannot father children)
- Low testosterone
- Weak bones (osteoporosis)
- Autoimmune disorders
- Learning and behavior problems

**Learning and development:**
- Normal intelligence
- May have speech delays
- Reading and writing difficulties
- Trouble with attention
- Shy or anxious personality

**Treatments:**
- Testosterone replacement therapy
- Speech and language therapy
- Educational support
- Fertility treatment (some options)
- Breast reduction surgery if needed

**Life with KS:**
- Can lead healthy, normal lives
- Can have successful careers
- May need help with fertility
- Testosterone treatment helps many symptoms`,
      keyTerms: [
        { term: 'chromosome', definition: 'Structures in cells that contain genes; males normally have XY, females XX' },
        { term: 'testosterone', definition: 'Male hormone responsible for male characteristics and reproduction' },
        { term: 'infertility', definition: 'Inability to have children naturally' },
        { term: 'gynecomastia', definition: 'Enlarged breast tissue in males' },
      ],
      analogies: [
        'Think of chromosomes like a recipe book. Klinefelter syndrome is like having an extra page added—it changes some things but the recipe still makes a male, just with some differences.',
        'If being male is like a recipe with X ingredients, KS is like the recipe with an extra X ingredient—it does not ruin the dish, but it changes the flavor.',
      ],
      examples: [
        'A teenager with KS is shorter than expected for his age. He starts testosterone treatment and grows normally.',
        'A man with KS and his partner use donor sperm and IVF to have children.',
      ],
      patientCounselingPoints: [
        'Testosterone replacement is important for puberty, bone health, and muscle development.',
        'Speech therapy can help with language delays.',
        'Educational support for reading and writing challenges is helpful.',
        'Exercise and healthy eating help maintain healthy weight and strong bones.',
        'Fertility options exist but should be discussed early.',
        'Joining a support group can help with emotional support.',
      ],
    },
    2: {
      level: 2,
      summary: 'Klinefelter syndrome (47,XXY) is the most common sex chromosome aneuploidy, characterized by hypogonadism, gynecomastia, tall stature, learning difficulties, and infertility.',
      explanation: `## Genetics

**Karyotypes:**
- 47,XXY: Most common (80-90%)
- 46,XY/47,XXY mosaicism: 10-20%
- 48,XXXY or 49,XXXXY: More severe
- Higher-grade aneuploidy: More severe phenotype

**Origin:**
- Nondisjunction in meiosis
- Usually paternal (meiosis I)
- Advanced paternal age risk factor
- Not typically inherited
- Recurrence risk low

**Frequency:**
- 1 in 650 males
- Often undiagnosed
- Only 25-35% diagnosed
- Diagnosis usually in adulthood

## Clinical Features

**Physical Characteristics:**
- Tall stature
- Long limbs (arm span > height)
- Narrow shoulders
- Wide hips
- Small firm testicles
- Small penis (sometimes)
- Gynecomastia (30-50%)
- Reduced facial/body hair
- Decreased muscle mass
- Increased body fat

**Hypogonadism:**
- Primary testicular failure
- Low testosterone
- High LH, FSH
- Infertility (azoospermia)
- Delayed/incomplete puberty

**Neurocognitive:**
- Normal overall intelligence
- Language-based learning disability
- Reading difficulties
- Expressive language delay
- Executive function deficits
- Attention problems
- Social skill difficulties

**Behavioral:**
- Shy, timid personality
- Anxiety
- Depression increased
- Low self-esteem
- Social withdrawal

## Medical Complications

**Metabolic:**
- Insulin resistance
- Metabolic syndrome (30-50%)
- Type 2 diabetes
- Dyslipidemia
- Increased body fat

**Bone Health:**
- Osteoporosis risk
- Osteopenia common
- Increased fracture risk
- Related to low testosterone

**Autoimmune:**
- Systemic lupus erythematosus (SLE)
- Rheumatoid arthritis
- Sjogren syndrome
- Type 1 diabetes

**Malignancy:**
- Breast cancer (20x increased)
- Germ cell tumors (mediastinal)
- Non-Hodgkin lymphoma (slightly increased)
- Prostate cancer (possibly decreased)

**Venous Disease:**
- Varicose veins
- Deep vein thrombosis
- Pulmonary embolism
- Leg ulcers

**Other:**
- Dental problems (taurodontism)
- Tremor/ataxia (in some variants)
- Hearing loss (higher grades)

## Diagnosis

**When to Suspect:**
- Delayed puberty
- Small testicles
- Infertility evaluation
- Gynecomastia
- Learning difficulties
- Behavioral problems

**Testing:**
- Karyotype: 47,XXY
- FISH for rapid results
- Hormone levels: Low T, high LH/FSH
- Semen analysis (azoospermia)

**Newborn Screening:**
- Not routinely done
- Would detect many cases
- Ethical considerations

## Differential Diagnosis

- Hypogonadotropic hypogonadism
- Delayed puberty
- Kallmann syndrome
- Noonan syndrome
- Marfan syndrome`,
      keyTerms: [
        { term: 'hypogonadism', definition: 'Reduced functional activity of the testes, resulting in low testosterone' },
        { term: 'azoospermia', definition: 'Absence of sperm in semen, causing infertility' },
        { term: 'mosaicism', definition: 'Presence of cells with different chromosome numbers in one individual' },
      ],
      analogies: [
        'Mosaicism in KS is like a patchwork quilt—some patches are normal (XY) and some have the extra chromosome (XXY), creating a mix of effects.',
      ],
      clinicalNotes: 'Only 25% of KS cases are diagnosed. Many men discover they have KS during infertility evaluation. Testosterone replacement is important for puberty, bone health, muscle mass, and well-being.',
    },
    3: {
      level: 3,
      summary: 'Klinefelter syndrome management includes testosterone replacement therapy, fertility counseling and treatment (TESE with ICSI), educational support, and surveillance for associated conditions including breast cancer, metabolic syndrome, and osteoporosis.',
      explanation: `## Testosterone Replacement Therapy (TRT)

**Goals:**
- Induce and maintain puberty
- Develop secondary sexual characteristics
- Improve muscle mass and strength
- Promote bone health
- Enhance libido and sexual function
- Improve mood and energy
- Reduce gynecomastia progression

**Timing:**
- Start at normal puberty age (11-12 years)
- Some prefer to wait until age 14
- Early discussion with family needed

**Formulations:**
- Testosterone gel: Daily application
- Testosterone injections: Every 2-4 weeks
- Testosterone patch: Daily
- Buccal testosterone: Twice daily
- Pellets: Every 3-6 months

**Monitoring:**
- Testosterone levels (mid-dose)
- Hematocrit (may increase)
- Lipid profile
- Bone age during puberty
- Breast and prostate examination
- Psychological assessment

**Contraindications/Cautions:**
- Prostate cancer
- Breast cancer
- Severe sleep apnea
- Uncontrolled heart failure

## Fertility Management

**Sperm Retrieval:**
- Micro-TESE (microsurgical testicular sperm extraction)
- Success rates: 40-70% in non-mosaic
- Better with early retrieval
- May require multiple attempts

**Assisted Reproduction:**
- ICSI (intracytoplasmic sperm injection)
- IVF with retrieved sperm
- Donor sperm if retrieval fails
- Adoption alternative

**Counseling:**
- Discuss early (before TRT?)
- Fertility preservation options
- Realistic expectations
- Success rates
- Financial considerations

**Timing:**
- Consider sperm retrieval before TRT
- Some retrieve during adolescence
- Still possible after TRT started

## Gynecomastia Management

**Prevention:**
- Early TRT may prevent
- Monitor during puberty
- Patient education

**Treatment:**
- Observation if mild
- Medical therapy (rarely effective)
- Surgical reduction if significant
- Timing: After puberty complete
- Psychosexual support

## Educational Support

**Learning Disabilities:**
- Reading and writing difficulties
- Expressive language delays
- Executive function deficits
- Math problems (less common)

**Interventions:**
- Speech and language therapy
- Special education services
- IEP (individualized education program)
- Extra time on tests
- Occupational therapy
- Educational psychologist evaluation

**Behavioral Support:**
- ADHD evaluation and treatment
- Anxiety management
- Social skills training
- Psychological counseling
- Self-esteem building

## Metabolic Management

**Monitoring:**
- Annual fasting glucose
- HbA1c every 2-3 years
- Lipid panel
- Blood pressure
- BMI and waist circumference
- Screen for metabolic syndrome

**Interventions:**
- Diet and exercise
- Weight management
- Treat dyslipidemia
- Diabetes treatment if needed
- Lifestyle modifications

## Bone Health

**Risk Factors:**
- Low testosterone
- Hypogonadism duration
- Low bone mineral density common
- Increased fracture risk

**Management:**
- Adequate testosterone replacement
- Calcium 1000-1200 mg daily
- Vitamin D 600-800 IU daily
- Weight-bearing exercise
- DEXA scan at diagnosis and periodically
- Treat osteoporosis if present

## Breast Cancer Surveillance

**Risk:**
- 20x increased compared to XY males
- Lifetime risk: ~6%
- Still lower than female risk

**Surveillance:**
- Breast self-exam education
- Clinical breast exam annually
- Low threshold for imaging
- Biopsy any suspicious mass

**Treatment:**
- Mastectomy if cancer develops
- Standard oncologic therapy
- Consider risk reduction if BRCA also present

## Psychosocial Support

**Mental Health:**
- Increased depression risk
- Anxiety disorders
- Social difficulties
- Body image concerns

**Interventions:**
- Psychotherapy
- Support groups
- Peer support
- Family counseling
- Medication when needed`,
      keyTerms: [
        { term: 'TESE', definition: 'Testicular sperm extraction; surgical retrieval of sperm from testicle' },
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection; injecting sperm directly into egg during IVF' },
        { term: 'metabolic syndrome', definition: 'Cluster of conditions (high BP, high blood sugar, excess body fat) increasing disease risk' },
      ],
      clinicalNotes: 'Testosterone replacement should be started at puberty age. Discuss fertility preservation early—testosterone may impair future sperm retrieval. Monitor for breast cancer with annual exams. Screen for metabolic syndrome and diabetes.',
    },
    4: {
      level: 4,
      summary: 'Adult KS care focuses on maintaining testosterone replacement, monitoring for metabolic complications, bone health surveillance, breast cancer screening, psychological support, and management of varicose veins and venous disease.',
      explanation: `## Testosterone Optimization

**Individualizing Therapy:**
- Symptom-based dosing
- Serum level targeting
- Delivery method preference
- Side effect management

**Formulation Selection:**
- Injections: Cheapest, reliable levels
- Gels: Stable levels, skin transfer risk
- Patches: Local irritation
- Pellets: Long-lasting, procedure risk

**Monitoring Protocol:**
- Testosterone, LH, FSH
- Hematocrit, hemoglobin
- PSA if age >40
- Lipid profile
- Bone markers if indicated
- Symptom assessment

**Complications:**
- Polycythemia: Phlebotomy or dose reduction
- Sleep apnea exacerbation
- Acne, oily skin
- Aggression or mood changes

## Metabolic Syndrome Management

**Prevalence:**
- 30-50% of KS adults
- Higher than general population
- Related to hypogonadism
- Worsens with age

**Components:**
- Central obesity
- Insulin resistance
- Dyslipidemia
- Hypertension
- Prothrombotic state

**Treatment:**
- Lifestyle modification first
- Testosterone optimization
- Metformin for insulin resistance
- Statins for dyslipidemia
- Antihypertensives as needed

## Bone Health Throughout Life

**Osteoporosis Risk:**
- Hypogonadism is major risk
- Duration of untreated KS
- Sedentary lifestyle
- Possible genetic factors

**Management:**
- Lifelong testosterone
- DEXA at diagnosis
- Repeat every 2-5 years
- Calcium and vitamin D
- Weight-bearing exercise
- Fall prevention in elderly

**Osteoporosis Treatment:**
- Bisphosphonates
- Denosumab
- Teriparatide
- Anabolic therapy
- Ensure adequate testosterone

## Cancer Surveillance

**Breast Cancer:**
- Annual clinical exam
- Self-exam education
- Low threshold for imaging
- Mammogram if gynecomastia or palpable mass
- Genetic counseling if family history

**Extragonadal Germ Cell Tumors:**
- Mediastinal germ cell tumors
- Increased risk in KS
- Consider imaging if symptoms
- Tumor markers (AFP, hCG)

**Prostate Cancer:**
- Risk may be decreased
- Standard screening after age 50
- PSA with TRT
- Biopsy if indicated

## Venous Disease Management

**Common Problems:**
- Varicose veins (30-40%)
- Chronic venous insufficiency
- Leg ulcers
- Deep vein thrombosis
- Pulmonary embolism

**Management:**
- Compression stockings
- Leg elevation
- Wound care for ulcers
- Ablation procedures
- Anticoagulation for DVT/PE

**Prevention:**
- Avoid prolonged standing
- Regular exercise
- Weight management
- Compression during travel

## Dental and Oral Health

**Taurodontism:**
- Enlarged pulp chambers
- Increased caries risk
- Crown-lengthening challenges
- Orthodontic considerations

**Management:**
- Regular dental care
- Preventive focus
- Orthodontic evaluation
- Endodontic considerations

## Transition to Adult Care

**Timing:**
- Begin at age 16-18
- Transfer by age 21
- Adult providers identified

**Components:**
- Testosterone management
- Fertility preservation discussion
- Metabolic monitoring
- Psychosocial support
- Bone health
- Cancer surveillance

## Reproductive Counseling

**Timing:**
- Discuss before TRT started
- Sperm retrieval possible even after TRT
- Micro-TESE success rates
- Donor gametes option

**Psychological Aspects:**
- Infertility grief
- Alternative family building
- Identity issues
- Relationship concerns

**Options:**
- Micro-TESE with ICSI
- Donor sperm with IVF
- Adoption
- Foster parenting
- Child-free living`,
      keyTerms: [
        { term: 'taurodontism', definition: 'Dental anomaly with enlarged pulp chamber and short roots; common in 47,XXY' },
        { term: 'polycythemia', definition: 'Increased red blood cell count; possible side effect of testosterone therapy' },
      ],
      clinicalNotes: 'Testosterone replacement is lifelong. Monitor hematocrit for polycythemia. Screen for metabolic syndrome annually. Consider micro-TESE before or early in TRT. Annual breast exam is essential. DEXA screening for osteoporosis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary KS management incorporates personalized testosterone regimens, advanced fertility techniques, genetic counseling, psychosocial interventions, surveillance for associated malignancies, and research on optimal timing of interventions.',
      explanation: `## Precision Medicine in KS

**Pharmacogenomics:**
- Androgen receptor polymorphisms
- Testosterone metabolism variability
- Individualized dosing based on genetics
- Side effect prediction

**Biomarker Development:**
- Sperm retrieval predictors
- FSH, inhibin B as markers
- Testicular volume correlation
- Genetic markers of spermatogenesis

## Testosterone Therapy Evolution

**Novel Formulations:**
- Long-acting injectables (11 weeks)
- Nasal testosterone
- Oral testosterone undecanoate
- Selective androgen receptor modulators

**Monitoring Advances:**
- Pharmacokinetic modeling
- Trough vs peak levels
- Free testosterone calculation
- Bioavailable testosterone

**Controversies:**
- Optimal serum levels
- Age-specific targets
- Treatment of "low-normal" T
- Intermittent therapy?

## Fertility Preservation Advances

**Timing Debates:**
- Retrieve before puberty? (cryopreservation not yet possible)
- Early adolescence?
- Before TRT vs during TRT
- Multiple retrievals

**Micro-TESE Optimization:**
- Microsurgical advances
- Mapping techniques
- Hormonal priming protocols
- Cryopreservation improvements

**Experimental Techniques:**
- In vitro maturation of spermatogonia
- Stem cell therapies
- Testicular tissue cryopreservation
- Gene editing considerations

## Neuropsychiatric Research

**Cognitive Profile:**
- Specific language deficits
- Executive function patterns
- Social cognition differences
- Processing speed variability

**Psychiatric Comorbidity:**
- Schizophrenia risk increased
- Autism spectrum overlap
- ADHD prevalence
- Mood disorder patterns

**Intervention Studies:**
- Cognitive training effectiveness
- Language therapy protocols
- Pharmacologic enhancement
- Neuroplasticity potential

## Cancer Biology

**Breast Cancer Risk:**
- BRCA interaction studies
- Hormonal mechanisms
- Surveillance optimization
- Risk-reduction strategies

**Germ Cell Tumors:**
- Mediastinal location predilection
- Histologic patterns
- Serum markers (AFP, hCG, LDH)
- Treatment outcomes

## Cardiovascular Research

**Venous Thromboembolism:**
- Hypercoagulable state investigation
- Androgen effects on coagulation
- Prophylaxis strategies
- Thrombophilia testing

**Metabolic Effects:**
- Testosterone and insulin sensitivity
- Body composition changes
- Lipid metabolism
- Cardiovascular outcomes

## Quality of Life Studies

- Treatment satisfaction
- Sexual function outcomes
- Body image impact
- Social participation
- Occupational attainment
- Relationship satisfaction

## Registries and Research

- International KS registries
- Natural history studies
- Long-term outcome data
- Clinical trial networks

## Ethical Considerations

- Newborn screening debate
- Early testosterone initiation
- Fertility preservation ethics
- Genetic counseling approaches
- Disclosure decisions`,
      keyTerms: [
        { term: 'androgen receptor', definition: 'Nuclear receptor that binds testosterone and mediates its effects' },
        { term: 'spermatogonia', definition: 'Sperm stem cells in testes; potential for fertility preservation' },
      ],
      clinicalNotes: 'Micro-TESE success rates are 40-70% in KS, but counseling about realistic expectations is essential. Earlier retrieval (before or early in TRT) may improve outcomes. Long-term cardiovascular and metabolic risks require ongoing research. Breast cancer risk, while elevated, remains modest but warrants vigilance.',
    },
  },

  media: [],
  citations: [
    { id: 'klinefelter-guidelines', type: 'article', title: 'Diagnosis and Management of Klinefelter Syndrome', source: 'European Journal of Endocrinology' },
    { id: 'aau-klinefelter', type: 'website', title: 'Klinefelter Syndrome Guidelines', source: 'American Urological Association' },
  ],
  crossReferences: [
    { targetId: 'condition-hypogonadism', targetType: 'condition', relationship: 'related', label: 'Hypogonadism' },
    { targetId: 'condition-gynecomastia', targetType: 'condition', relationship: 'related', label: 'Gynecomastia' },
  ],
  tags: {
    systems: ['endocrine', 'genetic', 'reproductive'],
    topics: ['genetics', 'endocrinology', 'reproductive health', 'urology'],
    keywords: ['Klinefelter syndrome', '47,XXY', 'hypogonadism', 'testosterone', 'infertility', 'gynecomastia', 'TESE'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['endocrinology', 'urology', 'pediatrics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default klinefelter;
