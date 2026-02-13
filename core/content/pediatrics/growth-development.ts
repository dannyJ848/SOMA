/**
 * Growth & Development
 *
 * Comprehensive pediatric growth and development content covering
 * developmental milestones, growth physiology, failure to thrive,
 * Tanner staging, and neurodevelopmental assessment.
 */

import { EducationalContent } from '../types';

export const GROWTH_AND_DEVELOPMENT: EducationalContent = {
  id: 'pediatrics-growth-development',
  type: 'topic',
  name: 'Growth & Development',
  nameEs: 'Crecimiento y Desarrollo',
  alternateNames: [
    'Pediatric growth and development',
    'Child development milestones',
    'Developmental pediatrics',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Babies and children grow and learn new skills at every age. Doctors track milestones to make sure each child is developing on schedule.',
      explanation: `Every child grows and develops at their own pace, but there are general patterns most children follow. Doctors and parents watch for these patterns, called milestones, to make sure a child is healthy and on track.

**How Babies Grow**
- Newborns sleep a lot and can only cry to communicate
- By 2 months, babies start smiling and following objects with their eyes
- By 6 months, most babies can sit with support and babble
- By 1 year, many babies take their first steps and say a few words

**Types of Skills Children Develop**
- **Moving around (motor skills):** Rolling, crawling, walking, running
- **Using hands (fine motor):** Grasping, stacking blocks, drawing
- **Talking (language):** Babbling, first words, sentences
- **Getting along with others (social):** Smiling, playing, sharing

**What Parents Notice**
- First smile (around 6 weeks)
- First time sitting up (around 6 months)
- First words (around 12 months)
- First steps (around 12 months)
- First sentences (around 2 years)

**Growth Tracking**
Doctors measure height, weight, and head size at every visit. They use growth charts to compare your child to other children the same age.

**When to Talk to Your Doctor**
- Your baby is not reaching milestones on time
- Your child loses skills they already had
- Your child is not growing as expected
- You have any worries about your child's development

**Important to Remember**
- Every child is different and develops at their own pace
- Small delays are usually nothing to worry about
- Early help is available if your child needs it
- Talking, reading, and playing with your child helps development`,
      keyTerms: [
        {
          term: 'milestone',
          definition:
            'A skill or behavior that most children can do by a certain age, like walking or talking',
        },
        {
          term: 'development',
          definition:
            'The process of learning new skills and abilities as a child grows',
        },
        {
          term: 'growth chart',
          definition:
            'A graph that shows how your child compares to other children the same age in height and weight',
        },
      ],
      analogies: [
        'Development is like building a house - you need the foundation (basic skills) before you can add the walls and roof (more advanced skills).',
        'Growth charts are like a road map showing different paths children can take - there is no single "right" path.',
      ],
      examples: [
        'A 9-month-old who is not walking yet is perfectly normal - most children walk between 9 and 15 months.',
        'A 2-year-old who knows 50 words is right on track for language development.',
      ],
      patientCounselingPoints: [
        'Read to your child every day to support language development.',
        'Tummy time helps babies build the muscles they need to crawl and walk.',
        'Limit screen time for children under 2 years old.',
        'Talk to your pediatrician if you have any concerns about your child reaching milestones.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Child development follows predictable patterns across four domains: gross motor, fine motor, language, and social-emotional. Growth charts and developmental screening tools help identify children who may need early intervention.',
      explanation: `**Developmental Domains**

Child development is typically assessed across four major domains:

**1. Gross Motor Development**
| Age | Milestone |
|-----|-----------|
| 2 months | Lifts head when on stomach |
| 4 months | Rolls front to back |
| 6 months | Sits without support |
| 9 months | Pulls to stand |
| 12 months | Walks with one hand held |
| 15 months | Walks independently |
| 18 months | Runs, kicks ball |
| 2 years | Goes up stairs with help, jumps |
| 3 years | Rides tricycle, goes up stairs alternating feet |
| 4 years | Hops on one foot |
| 5 years | Skips |

**2. Fine Motor Development**
| Age | Milestone |
|-----|-----------|
| 3 months | Hands open, bats at objects |
| 6 months | Reaches and grasps objects (palmar grasp) |
| 9 months | Pincer grasp developing |
| 12 months | Mature pincer grasp |
| 15 months | Stacks 2 blocks, scribbles |
| 18 months | Stacks 3-4 blocks |
| 2 years | Stacks 6 blocks, copies vertical line |
| 3 years | Copies circle, uses scissors |
| 4 years | Copies cross, draws person with 3 parts |
| 5 years | Copies square, draws person with 6 parts |

**3. Language Development**
| Age | Receptive | Expressive |
|-----|-----------|------------|
| 2 months | Alerts to voice | Cooing |
| 6 months | Turns to voice | Babbling ("bababa") |
| 9 months | Understands "no" | Nonspecific "mama/dada" |
| 12 months | Follows 1-step command | 1-3 words, specific "mama/dada" |
| 18 months | Points to body parts | 10-25 words |
| 2 years | Follows 2-step commands | 50+ words, 2-word phrases |
| 3 years | Understands prepositions | 3-word sentences, 75% intelligible |
| 4 years | Follows 3-step commands | Full sentences, 100% intelligible |
| 5 years | Understands complex questions | Tells stories, knows colors |

**4. Social-Emotional Development**
| Age | Milestone |
|-----|-----------|
| 2 months | Social smile |
| 6 months | Stranger anxiety begins |
| 9 months | Separation anxiety |
| 12 months | Waves bye-bye, plays peek-a-boo |
| 18 months | Parallel play, temper tantrums begin |
| 2 years | Imitates adults, begins pretend play |
| 3 years | Takes turns, knows gender |
| 4 years | Cooperative play, has friends |
| 5 years | Follows rules, understands right and wrong |

**Denver Developmental Screening Test (DDST-II)**
- Screens children from birth to 6 years
- Tests 4 domains: gross motor, fine motor-adaptive, language, personal-social
- Results: Normal, Suspect, or Untestable
- A screening tool, NOT a diagnostic test
- If suspect, refer for formal developmental evaluation

**Growth Chart Basics**
- WHO charts for 0-2 years (breastfed infants)
- CDC charts for 2-20 years
- Track weight, height, head circumference, BMI
- Watch for crossing percentile lines
- Growth velocity matters more than single measurements

**Failure to Thrive (FTT)**
- Weight <3rd percentile or crossing 2 major percentile lines downward
- Most common cause: inadequate caloric intake
- Can be organic (medical cause) or non-organic (environmental)
- Early intervention is key for best outcomes

**Red Flags Requiring Referral**
- No social smile by 3 months
- No babbling by 9 months
- No words by 18 months
- No 2-word phrases by 2 years
- Loss of previously acquired skills at any age
- Not walking by 18 months`,
      keyTerms: [
        {
          term: 'gross motor',
          definition:
            'Large body movements like walking, running, and jumping that use the big muscles',
        },
        {
          term: 'fine motor',
          definition:
            'Small, precise movements like grasping, stacking, and drawing that use hand muscles',
        },
        {
          term: 'Denver Developmental Screening Test',
          definition:
            'A standardized tool used to screen children aged 0-6 for developmental delays across four domains',
        },
        {
          term: 'failure to thrive',
          definition:
            'Inadequate weight gain in a young child, defined as weight below the 3rd percentile or crossing 2 major percentile lines',
        },
        {
          term: 'stranger anxiety',
          definition:
            'Normal developmental phase beginning around 6-9 months when infants become wary of unfamiliar people',
        },
      ],
      analogies: [
        'Developmental domains are like four channels on a TV - each one runs its own program, but they all work together to create the full picture.',
        'The Denver screening is like a check engine light - it tells you something may need attention, but not exactly what is wrong.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Developmental assessment integrates growth plate physiology, the GH/IGF-1 axis, Tanner staging of puberty, bone age assessment, and recognition of red flags for developmental regression in pediatric practice.',
      explanation: `**Growth Plate Physiology**

Linear growth occurs at the epiphyseal growth plates (physes), which consist of organized zones of cartilage:

| Zone | Function |
|------|----------|
| Reserve (Resting) | Stem cell reservoir; maintains plate structure |
| Proliferative | Active chondrocyte division; columnar arrangement |
| Hypertrophic | Cell enlargement; matrix production; main contributor to bone lengthening |
| Calcification/Ossification | Cartilage mineralization; vascular invasion; bone formation |

Growth plates close (fuse) at skeletal maturity, ending linear growth. Estrogen is the primary hormone driving growth plate fusion in both sexes.

**GH/IGF-1 Axis in Children**

\`\`\`
Hypothalamus
  ├── GHRH (+)
  └── Somatostatin (-)
        ↓
Anterior Pituitary → GH secretion (pulsatile, peaks during sleep)
        ↓
Liver → IGF-1 production (GH-dependent)
        ↓
Growth plates → Chondrocyte proliferation → Linear growth
\`\`\`

Key regulatory features:
- GH secretion is pulsatile (60-70% during deep sleep)
- IGF-1 circulates bound to IGFBP-3 and ALS (acid-labile subunit)
- Thyroid hormone is permissive for GH action
- Cortisol excess inhibits growth
- Sex steroids initially accelerate then terminate growth
- Nutritional status modulates IGF-1 production

**Tanner Staging (Sexual Maturity Rating)**

*Female Breast Development:*
| Stage | Description |
|-------|-------------|
| 1 | Prepubertal |
| 2 | Breast bud (thelarche); mean age 10.5 years |
| 3 | Breast elevation beyond areola |
| 4 | Areola forms secondary mound |
| 5 | Adult contour |

*Male Genital Development:*
| Stage | Description |
|-------|-------------|
| 1 | Prepubertal (testicular volume <4 mL) |
| 2 | Testicular enlargement (≥4 mL); mean age 11.5 years |
| 3 | Penile lengthening |
| 4 | Penile broadening, glans development |
| 5 | Adult genitalia |

*Pubic Hair (Both Sexes):*
| Stage | Description |
|-------|-------------|
| 1 | None |
| 2 | Sparse, slightly pigmented, straight |
| 3 | Darker, curlier, spreading |
| 4 | Adult-type but limited area |
| 5 | Adult distribution |

**Normal Puberty Sequence**
- Girls: Thelarche → Growth spurt → Menarche (mean 12.5 years) → Adult height (~2 years after menarche)
- Boys: Testicular enlargement → Growth spurt (later, ~14 years) → Adult height (~3 years after peak growth)

**Bone Age Assessment**
- Left hand/wrist radiograph compared to Greulich-Pyle atlas or assessed by Tanner-Whitehouse method
- Bone age vs chronological age:
  - Advanced bone age: precocious puberty, obesity, hyperthyroidism
  - Delayed bone age: constitutional delay, GH deficiency, hypothyroidism, chronic illness
  - Normal bone age with short stature: familial short stature

**Developmental Regression Red Flags**

Regression (loss of previously acquired skills) is always pathological and requires urgent evaluation:

| Pattern | Consider |
|---------|----------|
| Language regression 18-24 months | Autism spectrum disorder |
| Motor regression | Neurodegenerative disease (e.g., leukodystrophy) |
| Global regression + seizures | Neuronal ceroid lipofuscinosis, Rett syndrome |
| Regression after illness | Mitochondrial disease, metabolic crisis |
| Stepwise regression | Vascular, demyelinating disease |

Workup for regression:
1. Brain MRI with spectroscopy
2. EEG
3. Metabolic studies (lactate, pyruvate, amino acids, organic acids)
4. Genetic testing (chromosomal microarray, targeted panels)
5. Ophthalmologic and audiologic evaluation

**Developmental Assessment Tools**

| Tool | Age Range | Purpose |
|------|-----------|---------|
| ASQ-3 (Ages & Stages) | 1-66 months | Parent-completed screening |
| Denver II (DDST-II) | 0-6 years | Provider-administered screening |
| PEDS (Parents' Evaluation) | 0-8 years | Parent concern-based screening |
| Bayley-III | 1-42 months | Diagnostic evaluation |
| M-CHAT-R/F | 16-30 months | Autism-specific screening |
| ADOS-2 | 12 months+ | Autism diagnostic assessment |

**Primitive Reflexes**

| Reflex | Appears | Disappears | Significance if Persistent |
|--------|---------|------------|---------------------------|
| Moro | Birth | 4-6 months | Upper motor neuron lesion |
| Palmar grasp | Birth | 4-6 months | Frontal lobe pathology |
| ATNR | Birth | 6 months | Cerebral palsy risk |
| Babinski | Birth | 12-24 months | Upper motor neuron lesion |
| Parachute | 8-9 months | Persists | Absent = motor concern |`,
      keyTerms: [
        {
          term: 'growth plate (physis)',
          definition:
            'Cartilaginous region at the ends of long bones responsible for linear growth; organized into resting, proliferative, hypertrophic, and calcification zones',
          pronunciation: 'FY-sis',
        },
        {
          term: 'Tanner staging',
          definition:
            'Standardized 5-stage scale for assessing pubertal development of breasts, genitalia, and pubic hair',
        },
        {
          term: 'bone age',
          definition:
            'Skeletal maturity assessed by left hand/wrist radiograph, compared to chronological age to evaluate growth potential',
        },
        {
          term: 'developmental regression',
          definition:
            'Loss of previously acquired developmental skills; always pathological and requires urgent evaluation',
        },
        {
          term: 'IGF-1',
          definition:
            'Insulin-like Growth Factor 1, the primary mediator of growth hormone effects on linear growth, produced mainly by the liver',
        },
        {
          term: 'thelarche',
          definition:
            'The onset of breast development, the first sign of puberty in girls (Tanner stage 2)',
          pronunciation: 'theh-LAR-kee',
        },
      ],
      clinicalNotes:
        'Bone age is the single most useful initial test for evaluating growth concerns. A delayed bone age suggests remaining growth potential. In girls, always consider Turner syndrome (45,X) in the differential for short stature - obtain karyotype even without classic features. Regression of developmental milestones is always abnormal and warrants urgent referral to pediatric neurology.',
    },
    4: {
      level: 4,
      summary:
        'Advanced understanding of growth and development encompasses epigenetic programming, the Developmental Origins of Health and Disease (DOHaD) hypothesis, catch-up growth mechanisms, and comprehensive workup algorithms for short stature, precocious puberty, and delayed puberty.',
      explanation: `**Epigenetic Programming of Growth**

The intrauterine environment permanently influences growth trajectory through epigenetic mechanisms:

*Key Epigenetic Mechanisms:*
| Mechanism | Effect on Growth |
|-----------|-----------------|
| DNA methylation | Imprinting of growth genes (IGF2, H19) |
| Histone modification | Chromatin remodeling affecting GH receptor expression |
| Non-coding RNA | MicroRNAs regulating GH/IGF-1 signaling |
| Placental programming | Nutrient transporter expression determines fetal growth |

*Imprinted Gene Disorders:*
| Condition | Gene/Region | Growth Effect |
|-----------|-------------|---------------|
| Beckwith-Wiedemann | 11p15 (IGF2 overexpression) | Overgrowth, macrosomia |
| Silver-Russell | 11p15 (IGF2 underexpression) or UPD(7)mat | Severe IUGR, postnatal growth failure |
| Prader-Willi | 15q11 paternal deletion | Short stature, obesity |
| Angelman | 15q11 maternal deletion | Normal growth, developmental delay |
| Temple | UPD(14)mat | Short stature, precocious puberty |

**Developmental Origins of Health and Disease (DOHaD)**

The DOHaD hypothesis (Barker hypothesis) proposes that adverse early-life conditions program long-term disease risk:

*Critical Windows:*
- Periconceptional: Epigenetic reprogramming
- First trimester: Organogenesis, placentation
- Second/third trimester: Rapid growth, metabolic programming
- First 1000 days (conception to age 2): Nutritional programming

*Predictive Adaptive Response (PAR):*
- Fetus adapts to predicted postnatal environment
- Mismatch between predicted and actual environment → disease
- SGA infant + rapid postnatal weight gain → metabolic syndrome risk
- Mechanisms: Insulin resistance, altered HPA axis, nephron endowment

*Evidence:*
| Exposure | Later-Life Risk |
|----------|-----------------|
| Fetal undernutrition | Type 2 diabetes, cardiovascular disease |
| Maternal obesity | Childhood obesity, metabolic syndrome |
| Maternal stress | Altered HPA axis, behavioral issues |
| Gestational diabetes | Childhood obesity, glucose intolerance |
| Preterm birth | Insulin resistance, reduced nephron mass |

**Catch-Up Growth Mechanisms**

*Neuroendocrine Mechanisms:*
- Growth plate retains capacity for delayed growth
- Reduced senescence of resting zone chondrocytes during growth restriction
- "Catch-up" = accelerated proliferation when restriction removed
- GH/IGF-1 axis upregulation after recovery

*Clinical Patterns:*
| Scenario | Expected Catch-Up | Timeframe |
|----------|-------------------|-----------|
| Preterm, AGA | Usually complete | By 2-3 years corrected age |
| SGA, no syndromic cause | 85-90% catch up | By 2 years |
| SGA, persistent short stature | GH indicated if no catch-up by age 2-4 | Ongoing |
| Post-malnutrition | Weight first, then height | Variable |
| Post-GH treatment initiation | Rapid first-year response | 6-12 months |

*Failure to Catch Up — Workup:*
1. Genetic evaluation (chromosomal, targeted panels)
2. Endocrine: IGF-1, thyroid function, cortisol
3. GI: Celiac screen, nutritional labs
4. Renal: BMP, urinalysis
5. Consider skeletal survey for dysplasia

**Short Stature Workup Algorithm**

\`\`\`
Height <3rd percentile or >2 SD below mid-parental target
                    ↓
         History and Physical Exam
       (proportionate vs disproportionate)
              ↓                ↓
     Proportionate      Disproportionate
         ↓                    ↓
  Bone age X-ray        Skeletal survey
      ↓                      ↓
  ┌──────────┐          Skeletal dysplasia
  ↓          ↓           genetics panel
Delayed    Normal
  ↓          ↓
Constitutional   Familial short
delay vs GHD    stature vs
vs hypothyroid   pathologic
  ↓
Labs: IGF-1, IGFBP-3, TSH, fT4,
CBC, CMP, celiac panel, ESR
Karyotype (girls)
  ↓
If IGF-1 low → GH stimulation testing
If other abnormalities → targeted workup
\`\`\`

**Precocious Puberty**

*Definition:*
- Girls: Secondary sexual characteristics before age 8
- Boys: Secondary sexual characteristics before age 9

*Classification:*
| Type | Mechanism | GnRH-Dependent? |
|------|-----------|-----------------|
| Central (CPP) | Premature activation of HPG axis | Yes (gonadotropin-dependent) |
| Peripheral (PPP) | Autonomous sex steroid production | No (gonadotropin-independent) |

*Central Precocious Puberty (CPP):*
| Etiology | Details |
|----------|---------|
| Idiopathic | Most common in girls (80-90%) |
| CNS lesions | Hamartoma, tumor, hydrocephalus |
| Prior CNS insult | Radiation, infection, trauma |
| Genetic | MKRN3 mutations (most common genetic cause), KISS1, KISS1R |

*Peripheral Precocious Puberty (PPP):*
| Etiology | Source |
|----------|--------|
| Congenital adrenal hyperplasia | Adrenal androgens |
| McCune-Albright syndrome | Activating GNAS mutation |
| Ovarian cysts/tumors | Estrogen |
| Testicular tumors (Leydig) | Testosterone |
| Familial male-limited (testotoxicosis) | Activating LHR mutation |
| Exogenous hormones | Environmental exposure |

*Workup:*
1. Tanner staging, growth velocity, bone age
2. LH, FSH (basal and GnRH-stimulated)
3. Estradiol (girls) / Testosterone (boys)
4. Brain MRI (mandatory in all boys, girls <6 years)
5. Pelvic ultrasound (girls)
6. 17-OHP, DHEA-S if adrenal source suspected

*Treatment:*
- CPP: GnRH agonists (leuprolide, histrelin implant) → suppress HPG axis
- PPP: Treat underlying cause; ketoconazole, aromatase inhibitors, or anti-androgens as needed

**Delayed Puberty**

*Definition:*
- Girls: No breast development by age 13
- Boys: No testicular enlargement by age 14

*Classification:*
| Type | Gonadotropins | Etiology |
|------|---------------|----------|
| Constitutional delay | Low (pre-pubertal) | Most common; family history; delayed bone age |
| Hypogonadotropic (central) | Low | Kallmann syndrome, pituitary pathology, chronic illness, functional |
| Hypergonadotropic (primary) | Elevated | Turner syndrome, Klinefelter, gonadal dysgenesis, chemotherapy |

*Workup:*
1. Bone age, LH, FSH, sex steroids
2. Prolactin, TSH, IGF-1
3. Karyotype if gonadotropins elevated
4. Brain MRI if hypogonadotropic (rule out Kallmann: anosmia testing)
5. Assess nutritional status, chronic illness, exercise

**Neurodevelopmental Assessment in Detail**

*Cognitive Development (Piaget Stages):*
| Stage | Age | Key Features |
|-------|-----|-------------|
| Sensorimotor | 0-2 years | Object permanence (8-12 mo), cause-effect |
| Preoperational | 2-7 years | Symbolic play, egocentrism, magical thinking |
| Concrete operational | 7-11 years | Conservation, logical reasoning about concrete events |
| Formal operational | 11+ years | Abstract thinking, hypothetical reasoning |

*Moral Development (Kohlberg):*
| Level | Age | Reasoning |
|-------|-----|-----------|
| Preconventional | <10 years | Rules to avoid punishment |
| Conventional | 10-13 years | Rules to gain approval |
| Postconventional | 13+ years | Rules as social contracts |`,
      keyTerms: [
        {
          term: 'DOHaD',
          definition:
            'Developmental Origins of Health and Disease; hypothesis that early-life exposures program long-term health outcomes through epigenetic mechanisms',
          relatedTerms: ['Barker hypothesis', 'fetal programming'],
        },
        {
          term: 'epigenetic programming',
          definition:
            'Heritable changes in gene expression without DNA sequence alteration, including DNA methylation and histone modification, that permanently influence growth trajectory',
        },
        {
          term: 'central precocious puberty',
          definition:
            'Premature activation of the hypothalamic-pituitary-gonadal axis causing pubertal development before age 8 in girls or 9 in boys',
        },
        {
          term: 'constitutional delay of growth and puberty',
          definition:
            'Normal variant characterized by delayed bone age, late puberty onset, and eventual normal adult height; often familial',
        },
        {
          term: 'MKRN3',
          definition:
            'Makorin ring finger protein 3; paternally expressed imprinted gene whose loss-of-function mutations are the most common genetic cause of central precocious puberty',
        },
        {
          term: 'predictive adaptive response',
          definition:
            'Concept that the fetus adapts to anticipated postnatal environment; mismatch between prediction and reality increases disease risk',
        },
      ],
      clinicalNotes:
        'All boys with central precocious puberty require brain MRI — the rate of CNS pathology is much higher in boys than girls. MKRN3 mutations should be considered in familial CPP cases. SGA infants who fail to demonstrate catch-up growth by age 2-4 years are candidates for GH therapy. The DOHaD framework explains why SGA babies who gain weight rapidly in infancy have increased metabolic syndrome risk — counsel families about healthy (not excessive) catch-up nutrition.',
    },
    5: {
      level: 5,
      summary:
        'Expert-level growth and development integrates GH testing controversies, idiopathic short stature treatment debates, neurodevelopmental follow-up of preterm infants, evolving autism screening paradigms, and cutting-edge research in growth biology.',
      explanation: `**Growth Hormone Testing Controversies**

*Problems with GH Stimulation Testing:*
| Issue | Details |
|-------|---------|
| Poor reproducibility | 50-60% of normal children fail at least one test |
| Arbitrary cutoffs | 10 ng/mL threshold not evidence-based; varies by assay |
| Assay variability | Different assays yield different GH values; no standardization |
| BMI effect | Obesity blunts GH response → false-positive deficiency |
| Priming controversy | Sex steroid priming before testing not universally adopted |
| Safety concerns | Insulin tolerance test carries hypoglycemia risk |

*Current Debate:*
- Should the cutoff be 5, 7, or 10 ng/mL?
- The Endocrine Society and PENS (Pediatric Endocrine Nursing Society) differ in recommendations
- Move toward IGF-1 + clinical criteria without mandatory stimulation testing gaining traction
- MRI findings (ectopic posterior pituitary, stalk interruption) may reduce need for provocative testing

*Alternative Diagnostic Approaches:*
| Approach | Advantages | Limitations |
|----------|------------|-------------|
| IGF-1/IGFBP-3 screening | Non-invasive, widely available | Poor sensitivity/specificity alone |
| 12-hour overnight GH profile | Physiologic, captures pulsatility | Impractical, expensive |
| IGF-1 generation test | Differentiates GHD from GH insensitivity | Not standardized |
| Genetic testing (GH1, GHR, etc.) | Definitive for genetic causes | Low yield in isolated GHD |
| Pituitary MRI | Identifies structural causes | Normal MRI does not exclude GHD |

**Idiopathic Short Stature (ISS) Treatment Debate**

*FDA Approval:*
- GH approved for ISS in 2003 (height < -2.25 SD)
- Controversial decision; remains debated internationally

*Arguments For Treatment:*
| Point | Evidence |
|-------|----------|
| Psychosocial benefit | Mixed evidence; some studies show improved QoL |
| Height gain | Average 3-5 cm over final height |
| Safety profile | Generally favorable long-term data |
| Patient/family desire | Significant psychological burden in some families |

*Arguments Against Treatment:*
| Point | Evidence |
|-------|----------|
| Modest height gain | 3-5 cm for years of daily injections |
| High cost | $20,000-40,000/year for uncertain benefit |
| Medicalization of normal | Short stature as normal variation |
| Injection burden | Daily injections for years |
| Heightism concerns | Treating societal bias vs medical condition |
| Long-term safety | Unclear cancer risk, metabolic effects at population level |

*Shared Decision-Making Framework:*
1. Exclude all pathological causes of short stature
2. Assess psychosocial impact (validated instruments)
3. Discuss realistic expectations (3-5 cm gain)
4. Consider cost/insurance coverage
5. Evaluate child's assent (age-appropriate)
6. Monitor treatment response; discontinue if poor response

*Long-Acting GH and ISS:*
- Weekly formulations (somapacitan, lonapegsomatropin) may improve adherence
- Not yet specifically studied for ISS in many trials
- Cost implications even greater with newer formulations

**Neurodevelopmental Follow-Up of Preterm Infants**

*NICU Graduate Surveillance Protocol:*

| Corrected Age | Assessment Focus |
|---------------|-----------------|
| 4 months | Tone, visual tracking, feeding |
| 8 months | Motor milestones, emerging communication |
| 12 months | Walking readiness, first words, play skills |
| 18 months | Language explosion, M-CHAT-R autism screen |
| 24 months | Bayley-III formal assessment, ASQ-3 |
| 3-4 years | Pre-academic skills, behavioral assessment |
| School entry | Cognitive testing, executive function, learning disabilities |

*Risk Stratification:*
| Risk Factor | Neurodevelopmental Risk |
|-------------|----------------------|
| <28 weeks GA | 25-50% significant impairment |
| Grade III-IV IVH | 40-60% motor/cognitive disability |
| PVL (cystic) | 80-90% cerebral palsy |
| NEC requiring surgery | Increased developmental delay |
| BPD (severe) | Cognitive and motor delays |
| Postnatal steroids | Cerebral palsy risk (dexamethasone > hydrocortisone) |

*Late Preterm (34-36 weeks) Follow-Up:*
- Often overlooked but at increased risk for:
  - Language delays (1.5-2x risk)
  - Learning disabilities
  - Behavioral problems (ADHD)
  - School readiness concerns
- AAP recommends developmental surveillance, not routine Bayley testing

*Outcomes Data — EPICure and Similar Cohorts:*
| Gestational Age | Survival | No/Mild Disability |
|-----------------|----------|-------------------|
| 22 weeks | 10-35% | 1-9% of survivors |
| 23 weeks | 30-50% | 15-30% of survivors |
| 24 weeks | 50-70% | 30-50% of survivors |
| 25 weeks | 70-80% | 50-65% of survivors |
| 26 weeks | 80-90% | 60-75% of survivors |

**Autism Screening Evolution**

*Screening History and Current Practice:*
| Era | Approach |
|-----|----------|
| Pre-2007 | No universal screening; provider concern-based |
| 2007 AAP | Universal screening at 18 and 24 months (M-CHAT) |
| 2016 USPSTF | Insufficient evidence for universal screening (controversial) |
| Current practice | AAP still recommends universal M-CHAT-R/F at 18 and 24 months |
| Emerging | Eye-tracking, AI-assisted detection, digital phenotyping |

*M-CHAT-R/F Performance:*
| Metric | Value |
|--------|-------|
| Sensitivity | 85-90% (with follow-up interview) |
| Specificity | 95-99% (with follow-up interview) |
| PPV (without follow-up) | 14-54% |
| PPV (with follow-up) | 48-74% |
| Optimal screening age | 18-24 months |

*Emerging Screening Technologies:*
| Technology | Mechanism | Status |
|------------|-----------|--------|
| Eye-tracking | Measures gaze patterns to social stimuli | FDA breakthrough designation |
| EEG biomarkers | Altered neural connectivity patterns | Research phase |
| AI video analysis | Machine learning on home videos | Commercial development |
| Digital phenotyping | Smartphone-based behavioral analysis | Early clinical trials |
| Salivary RNA | Epigenetic biomarkers | Research phase |

*Early Intervention Evidence:*
| Intervention | Evidence Level | Key Findings |
|--------------|---------------|-------------|
| ESDM (Early Start Denver Model) | RCT evidence | Improved cognition and adaptive behavior |
| JASPER | RCT evidence | Improved joint attention and language |
| ABA (Applied Behavior Analysis) | Extensive evidence base | Improved adaptive skills; intensity debate ongoing |
| Parent-mediated (e.g., PACT) | RCT evidence | Sustained social communication gains |
| Naturalistic developmental behavioral | Growing evidence | Community-implementable models |

**Growth Biology Research Frontiers**

*Senescence Model of Growth Plate:*
- Growth deceleration = progressive exhaustion of resting zone stem cells
- Not hormonal decline but intrinsic cellular aging
- Explains why catch-up growth potential is time-limited
- Catch-up works by slowing senescence during restriction period

*Circadian Regulation of Growth:*
- GH secretion predominantly nocturnal (stage 3/4 NREM sleep)
- Sleep disruption in hospitalized children → growth impairment
- Melatonin may modulate growth plate function directly
- Blue light exposure and modern sleep patterns may affect growth

*Gut Microbiome and Growth:*
| Mechanism | Evidence |
|-----------|----------|
| Nutrient absorption | Microbiome affects caloric harvest |
| IGF-1 modulation | Germ-free mice have low IGF-1 |
| Lactobacillus effects | Some strains promote linear growth in animal models |
| Environmental enteric dysfunction | Gut inflammation → stunting in developing countries |

*Genetic Architecture of Height:*
- >10,000 SNPs identified by GWAS (GIANT consortium)
- Common variants explain ~40% of height heritability
- Rare variants in ~700 genes with large effects
- Polygenic risk scores may improve short stature evaluation
- Gene-environment interaction increasingly recognized

**Ethical and Policy Considerations**

*Growth Hormone Access:*
| Issue | Current Status |
|-------|---------------|
| Insurance coverage | Variable; often denied for ISS |
| Global access | Unavailable in most low-income countries |
| Biosimilar GH | Increasing availability, reducing cost |
| Height discrimination | Limited legal protections |
| Enhancement vs. treatment | Ongoing philosophical debate |

*Transition of Care:*
- Childhood GH deficiency → retest in transition (30-50% no longer deficient)
- Adult GH replacement: different dosing, different goals (metabolic, QoL, not height)
- Precocious puberty patients: long-term reproductive health follow-up
- Preterm NICU graduates: lifelong surveillance for metabolic, neurodevelopmental outcomes`,
      keyTerms: [
        {
          term: 'idiopathic short stature',
          definition:
            'Height below -2.25 SD without identifiable pathological cause; FDA-approved for GH treatment since 2003 but remains controversial',
        },
        {
          term: 'growth plate senescence',
          definition:
            'Progressive exhaustion of resting zone stem cell proliferative capacity, explaining age-related growth deceleration independent of hormonal changes',
        },
        {
          term: 'M-CHAT-R/F',
          definition:
            'Modified Checklist for Autism in Toddlers, Revised with Follow-Up; current standard autism screening tool administered at 18 and 24 months',
        },
        {
          term: 'ESDM',
          definition:
            'Early Start Denver Model; evidence-based naturalistic developmental behavioral intervention for young children with autism spectrum disorder',
          relatedTerms: ['ABA', 'JASPER', 'early intervention'],
        },
        {
          term: 'environmental enteric dysfunction',
          definition:
            'Subclinical gut inflammation from chronic fecal-oral pathogen exposure, contributing to stunting in low-resource settings through impaired nutrient absorption and chronic immune activation',
        },
        {
          term: 'GIANT consortium',
          definition:
            'Genetic Investigation of ANthropometric Traits; large-scale GWAS collaborative identifying thousands of height-associated genetic variants',
        },
      ],
      clinicalNotes: `**Clinical Integration Points:**
- GH stimulation testing has significant limitations; interpret results in clinical context, not in isolation. A child with clear clinical features of GHD, low IGF-1, and abnormal pituitary MRI may not require two failed stimulation tests.
- For ISS, shared decision-making with families is essential. Discuss realistic height gain expectations (3-5 cm) versus years of daily injections and high cost.
- All NICU graduates <32 weeks should have formal developmental assessment by corrected age 2 years; late preterms (34-36 weeks) are an under-screened population.
- Autism screening is evolving rapidly; eye-tracking technology may supplement or eventually replace questionnaire-based screening.
- The growth plate senescence model explains why early intervention for growth disorders yields better outcomes than delayed treatment.
- Gut microbiome-growth axis is an emerging area with potential therapeutic implications for stunting in global health.`,
    },
  },

  media: [
    {
      id: 'dev-milestones-infographic',
      type: 'diagram',
      filename: 'developmental-milestones-0-5-years.svg',
      title: 'Developmental Milestones: Birth to 5 Years',
      description:
        'Visual timeline of gross motor, fine motor, language, and social milestones from birth to age 5',
    },
    {
      id: 'tanner-stages-diagram',
      type: 'diagram',
      filename: 'tanner-staging-overview.svg',
      title: 'Tanner Stages of Pubertal Development',
      description:
        'Schematic overview of Tanner stages for breast, genital, and pubic hair development',
    },
    {
      id: 'gh-igf1-axis-diagram',
      type: 'diagram',
      filename: 'gh-igf1-axis.svg',
      title: 'GH/IGF-1 Axis',
      description:
        'Diagram of the hypothalamic-pituitary-growth hormone-IGF-1 signaling pathway',
    },
  ],

  citations: [
    {
      id: 'nelson-pediatrics-growth',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier',
      chapter: 'Growth, Development, and Behavior',
      license: 'Proprietary',
    },
    {
      id: 'aap-bright-futures',
      type: 'website',
      title: 'Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents',
      source: 'American Academy of Pediatrics',
      url: 'https://brightfutures.aap.org',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cdc-dev-milestones',
      type: 'website',
      title: 'CDC Developmental Milestones',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'endocrine-society-gh',
      type: 'article',
      title: 'Guidelines on Growth Hormone and IGF-I Treatment in Children and Adolescents',
      source: 'Journal of Clinical Endocrinology & Metabolism',
      authors: ['Grimberg, A.', 'DiVall, S.A.', 'et al.'],
    },
  ],

  crossReferences: [
    {
      targetId: 'concept-growth-charts',
      targetType: 'concept',
      relationship: 'related',
      label: 'Growth Charts Explained',
    },
    {
      targetId: 'concept-developmental-milestones',
      targetType: 'concept',
      relationship: 'related',
      label: 'Developmental Milestones',
    },
    {
      targetId: 'pediatrics-common-conditions',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Common Pediatric Conditions',
    },
    {
      targetId: 'pediatrics-neonatology-basics',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Neonatology Basics',
    },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal', 'nervous'],
    topics: [
      'pediatrics',
      'growth',
      'development',
      'endocrinology',
      'neurodevelopment',
      'puberty',
    ],
    keywords: [
      'milestones',
      'growth chart',
      'Tanner staging',
      'bone age',
      'GH deficiency',
      'precocious puberty',
      'delayed puberty',
      'failure to thrive',
      'autism screening',
      'developmental regression',
      'DOHaD',
      'epigenetics',
      'idiopathic short stature',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
