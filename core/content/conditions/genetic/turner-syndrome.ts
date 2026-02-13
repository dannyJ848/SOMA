/**
 * Turner Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const turnerSyndrome: EducationalContent = {
  id: 'condition-turner-syndrome',
  type: 'condition',
  name: 'Turner Syndrome',
  nameEs: 'Síndrome de Turner',
  alternateNames: ['TS', '45,X', 'Monosomy X', 'Ullrich-Turner Syndrome'],
  hpoId: 'HP:0001347',

  levels: {
    1: {
      level: 1,
      summary: 'Turner syndrome is a genetic condition that affects females, where one of the X chromosomes is missing or partially missing, causing short stature, ovarian failure, and certain physical features.',
      explanation: `Turner syndrome (TS) is a condition that only affects females. It happens when one of the X chromosomes is missing or changed.

**What causes Turner syndrome:**
- Females normally have two X chromosomes
- In TS, one X chromosome is missing or altered
- Usually not inherited—happens by chance
- About 1 in 2,500 baby girls born with TS

**Physical features:**
- Short height (most common sign)
- Webbed neck
- Low hairline at back of neck
- Swollen hands and feet (lymphedema) at birth
- Wide chest with widely spaced nipples
- Arms that turn out at elbows
- Many moles on skin

**Health issues:**
- Ovaries do not work properly (infertility)
- No periods without hormone treatment
- Heart and kidney problems
- Hearing problems
- Thyroid problems
- Learning difficulties with certain subjects

**Intelligence and learning:**
- Normal intelligence
- May struggle with math, spatial concepts
- Good language and reading skills
- May need extra help in school

**Treatments:**
- Growth hormone to help with height
- Estrogen to develop female features
- Regular medical checkups
- Treatment for specific health problems
- Infertility treatments possible

**Life with Turner syndrome:**
- Can lead healthy, productive lives
- Can have careers and families
- Need lifelong medical care
- Support groups available`,
      keyTerms: [
        { term: 'chromosome', definition: 'Structures in cells that contain genes; females normally have two X chromosomes' },
        { term: 'estrogen', definition: 'Female hormone that causes development of breasts, menstruation, and other female characteristics' },
        { term: 'growth hormone', definition: 'Hormone that helps children grow; can be given as a medicine' },
      ],
      analogies: [
        'Chromosomes are like instruction manuals. Turner syndrome is like having a manual with missing pages—some instructions for development are incomplete.',
        'Think of X chromosomes like backup hard drives. In Turner syndrome, one hard drive is missing, so some important files are not accessible.',
      ],
      examples: [
        'A girl with TS receives growth hormone injections to help her grow taller.',
        'A teenager with TS takes estrogen pills to start puberty and menstruation.',
      ],
      patientCounselingPoints: [
        'Start growth hormone treatment early for best height results.',
        'Estrogen replacement is necessary for puberty, bone health, and heart health.',
        'Regular heart and kidney checkups are important.',
        'Hearing should be checked regularly.',
        'School may provide extra help for math and spatial skills.',
        'Connect with Turner syndrome support groups.',
      ],
    },
    2: {
      level: 2,
      summary: 'Turner syndrome (45,X or variants) causes characteristic physical features, short stature, gonadal dysgenesis with primary ovarian insufficiency, and increased risk of cardiovascular, renal, thyroid, and auditory complications.',
      explanation: `## Genetics

**Karyotypes:**
- 45,X (Monosomy X): 45-50%
- Mosaicism: 45,X/46,XX (25-30%)
- X chromosome abnormalities: 15-20%
- Y chromosome material: Rare but important (cancer risk)

**Origin:**
- Usually paternal X loss
- Mosaicism from post-zygotic loss
- Not typically inherited
- Recurrence risk low

## Clinical Features

**Characteristic Appearance:**
- Short stature (most universal feature)
- Webbed neck (pterygium colli)
- Low posterior hairline
- Widely spaced nipples (widely spaced areolae)
- High-arched palate
- Cubitus valgus (increased carrying angle)
- Madelung deformity
- Short 4th and 5th metacarpals
- Multiple pigmented nevi
- Lymphedema of hands/feet at birth

**Growth:**
- Intrauterine growth restriction
- Present at birth
- Progressive height deficit
- Adult height: ~20 cm below target
- Without GH: average 143 cm
- With GH: can reach 150-155 cm

**Gonadal Dysgenesis:**
- Streak ovaries
- Primary ovarian insufficiency
- Delayed/absent puberty
- Infertility (most)
- Amenorrhea (no periods)

**Developmental:**
- Normal overall intelligence
- Specific learning disabilities
- Math/spatial reasoning difficulties
- Visual-spatial problems
- Executive function deficits
- Good verbal skills

## Medical Complications

**Cardiovascular (50%):**
- Bicuspid aortic valve (30-50%)
- Coarctation of aorta (10-20%)
- Aortic dilation/aneurysm
- Hypertension
- Increased aortic dissection risk

**Renal (30-40%):**
- Horseshoe kidney
- Duplex collecting system
- Rotated kidney
- Hydronephrosis
- Increased UTI risk

**Endocrine:**
- Hypothyroidism (15-30%)
- Autoimmune thyroiditis
- Diabetes mellitus (2-4%)
- Osteoporosis risk

**Auditory:**
- Recurrent otitis media
- Sensorineural hearing loss
- Conductive hearing loss
- Progressive in adulthood

**Ophthalmologic:**
- Strabismus
- Amblyopia
- Cataracts (rare)
- Color blindness

**Other:**
- Autoimmune disorders overall
- Celiac disease (4-6%)
- Inflammatory bowel disease
- Liver enzyme abnormalities

## Diagnosis

**Prenatal:**
- Increased nuchal translucency
- Cystic hygroma
- Cardiac defects
- Karyotype on CVS/amniocentesis

**Postnatal:**
- Karyotype (30+ cells to detect mosaicism)
- FISH for rapid results
- Microarray if needed

**When to Suspect:**
- Lymphedema at birth
- Webbed neck, low hairline
- Cardiac left-sided obstruction
- Short stature with no other cause
- Primary amenorrhea

## Initial Evaluation

**Cardiac:**
- Echocardiogram at diagnosis
- MRI if echo inadequate
- Cardiology referral
- Blood pressure monitoring

**Renal:**
- Renal ultrasound
- Voiding cystourethrogram if indicated
- Monitor for UTIs

**Endocrine:**
- TSH, free T4
- Fasting glucose/HbA1c
- IGF-1
- LH, FSH, estradiol

**Other:**
- Hearing evaluation
- Eye examination
- Developmental assessment`,
      keyTerms: [
        { term: 'mosaicism', definition: 'Presence of two or more cell lines with different chromosome numbers in one individual' },
        { term: 'streak ovaries', definition: 'Underdeveloped, nonfunctional ovaries that appear as fibrous tissue' },
        { term: 'bicuspid aortic valve', definition: 'Aortic valve with two leaflets instead of three; common in Turner syndrome' },
      ],
      analogies: [
        'Mosaicism in Turner syndrome is like a mosaic artwork—some cells have the normal pattern (46,XX) and others are missing an X (45,X), creating a mix.',
      ],
      clinicalNotes: 'All patients with TS need echocardiogram to evaluate for congenital heart disease. Renal ultrasound detects structural abnormalities. Screen for hypothyroidism annually. GH therapy should be started early (4-6 years) for maximal height benefit.',
    },
    3: {
      level: 3,
      summary: 'Turner syndrome management includes growth hormone therapy, estrogen replacement for puberty induction and maintenance, cardiovascular monitoring (especially aortic dimensions), fertility options, and comprehensive surveillance for associated conditions.',
      explanation: `## Growth Hormone Therapy

**Indications:**
- All children with TS (short stature)
- Start early: 4-6 years old
- Continue until epiphyses fused
- Maximal benefit with early start

**Dosing:**
- 0.05 mg/kg/day subcutaneously
- May increase to 0.1 mg/kg/day
- Daily injections
- Monitor IGF-1 levels

**Expected Response:**
- First year: 8-10 cm growth
- Total: +5-10 cm final height
- Better with earlier start
- Variable response

**Monitoring:**
- Height velocity
- Bone age X-rays
- IGF-1 levels
- Glucose tolerance
- Monitor for scoliosis progression

**Contraindications/Cautions:**
- Malignancy
- Active proliferative retinopathy
- Psychosocial deprivation
- Y chromosome material (gonadoblastoma risk)

## Estrogen Replacement Therapy

**Goals:**
- Induce puberty
- Maintain secondary sexual characteristics
- Optimize bone mineral density
- Support cardiovascular health
- Promote uterine development

**Timing:**
- Usually start at age 11-12
- May delay if GH still effective
- Individualized approach
- Consider psychosocial factors

**Regimens:**
- Start low dose: 1/10 to 1/8 adult dose
- Gradual increase over 2-3 years
- Oral estradiol or transdermal patch
- Add progesterone after 1-2 years or with breakthrough bleeding

**Maintenance:**
- Continue through adulthood
- Dose comparable to replacement
- Consider switching to oral contraceptive for convenience
- Monitor side effects

## Cardiovascular Management

**Aortic Dimensions:**
- Baseline MRI or echocardiogram
- Annual imaging if aortic root ≥2.5 cm
- Monitor for aortic dilation
- Surgical repair if ≥5.0 cm or rapid growth

**Blood Pressure:**
- Monitor at every visit
- Treat hypertension aggressively
- Ace inhibitors or ARBs preferred
- Lifestyle modifications

**Pregnancy Considerations:**
- High-risk pregnancy
- Preconception cardiac evaluation
- Aortic root <2.5 cm preferred
- Consider assisted reproduction

**Surgical Risks:**
- Coarctation repair in infancy if severe
- Aortic root replacement if dilated
- Careful anesthesia planning

## Fertility and Reproduction

**Ovarian Function:**
- Streak ovaries: Nonfunctional
- Spontaneous puberty: Rare (<10%)
- Spontaneous pregnancy: 2-5%
- Mosaicism: Better prognosis

**Pregnancy Options:**
- Oocyte donation
- IVF with donor eggs
- Surrogacy possible
- Spontaneous pregnancy if mosaicism

**Pregnancy Risks:**
- Cardiovascular complications
- Aortic dissection risk
- Hypertensive disorders
- Miscarriage increased
- Need maternal-fetal medicine

**Uterine Preparation:**
- Estrogen needed for development
- Progesterone for secretory changes
- Adequate size for pregnancy

## Endocrine Management

**Hypothyroidism:**
- Screen with TSH annually
- Autoimmune thyroiditis common
- Treat with levothyroxine
- Monitor levels

**Diabetes Screening:**
- Fasting glucose annually
- HbA1c every 2-3 years
- OGTT if risk factors
- Treat if diabetes develops

**Bone Health:**
- Ensure adequate estrogen
- Calcium 1000-1200 mg daily
- Vitamin D 600-800 IU daily
- DEXA scan in adulthood
- Weight-bearing exercise

## Hearing and Vision Care

**Hearing:**
- Annual audiograms
- Aggressive treatment of otitis
- Hearing aids as needed
- Monitor for progressive loss

**Vision:**
- Strabismus treatment
- Amblyopia management
- Regular eye exams
- Glasses/contacts as needed

## Developmental and Educational Support

**Learning Disabilities:**
- Math difficulties common
- Visual-spatial problems
- Executive function deficits
- Nonverbal learning disorder

**Educational Interventions:**
- Math tutoring
- Occupational therapy
- Speech therapy (pragmatics)
- Extra time on tests
- Calculator use

**Psychosocial Support:**
- Self-esteem support
- Body image concerns
- Peer relationships
- Transition to adult care
- Support groups`,
      keyTerms: [
        { term: 'IGF-1', definition: 'Insulin-like growth factor 1; mediator of growth hormone effects, used for monitoring' },
        { term: 'oocyte donation', definition: 'Egg donation from another woman to enable pregnancy in Turner syndrome' },
        { term: 'nonverbal learning disorder', definition: 'Learning disability affecting visual-spatial, motor, and social skills' },
      ],
      clinicalNotes: 'GH therapy should start at 4-6 years for maximal height benefit. Estrogen replacement begins around age 11-12, but timing can be individualized. Monitor aortic root dimensions regularly—aortic dissection is a life-threatening risk. Pregnancy requires careful cardiac evaluation.',
    },
    4: {
      level: 4,
      summary: 'Adult Turner syndrome care focuses on cardiovascular surveillance (aortic dimensions, hypertension), bone health maintenance, hearing preservation, management of autoimmune conditions, psychological support, and reproductive counseling.',
      explanation: `## Adult Cardiovascular Care

**Long-Term Surveillance:**
- Lifelong cardiac monitoring
- Annual blood pressure checks
- Echocardiogram or MRI every 1-5 years based on aortic size
- More frequent if aortic root >2.5 cm

**Aortic Dissection Risk:**
- Risk increases with age
- Pregnancy: High-risk period
- Hypertension: Major risk factor
- Bicuspid aortic valve: Increases risk
- Emergency: Chest pain, back pain

**Hypertension Management:**
- Aggressive treatment: Goal <130/80
- ACE inhibitors or ARBs preferred
- Consider beta-blockers
- Lifestyle modifications
- Monitor electrolytes

**Pregnancy Counseling:**
- Preconception evaluation mandatory
- Aortic root <2.5-2.7 cm preferred
- Discuss risks: Dissection, heart failure
- Avoid pregnancy if significant dilation
- Surrogacy alternative

## Bone Health Throughout Life

**Osteoporosis Risk:**
- Estrogen deficiency
- Hypothyroidism if undertreated
- Potential GH deficiency
- Nutritional factors

**Management:**
- Adequate estrogen replacement
- Calcium 1200 mg daily
- Vitamin D to maintain level >30 ng/mL
- Weight-bearing exercise
- Avoid smoking, excess alcohol

**Monitoring:**
- DEXA at age 18-21
- Repeat every 5 years or sooner with risk factors
- Vertebral fracture assessment
- Consider treatment if osteoporosis

## Hearing Preservation

**Progressive Loss:**
- Sensorineural: Common in adulthood
- May start in childhood
- Accelerates after age 30
- High frequencies affected first

**Interventions:**
- Regular audiograms (every 1-2 years)
- Prompt treatment of otitis media
- Hearing aids when needed
- Cochlear implants if severe
- Communication strategies

**Noise Protection:**
- Avoid excessive noise exposure
- Protective equipment
- Regular monitoring

## Autoimmune Disease Management

**Thyroid Autoimmunity:**
- Annual TSH screening
- Antibodies: TPO, TG
- Treat hypothyroidism promptly
- Monitor for hyperthyroidism

**Celiac Disease:**
- Screen if symptoms
- Tissue transglutaminase IgA
- Confirm with biopsy
- Gluten-free diet if positive

**Other Autoimmune:**
- IBD: Screen if GI symptoms
- Juvenile idiopathic arthritis
- Alopecia areata
- Psoriasis

## Transition to Adult Care

**Timing:**
- Begin at age 16-18
- Complete by age 21
- Structured transition program
- Adult providers identified

**Components:**
- Gynecologic care
- Reproductive counseling
- Cardiology follow-up
- Primary care coordination
- Bone health monitoring
- Mental health support

## Psychosocial Aspects

**Body Image:**
- Short stature concerns
- Infertility distress
- Sexual identity development
- Peer relationship challenges

**Mental Health:**
- Increased risk of ADHD
- Anxiety disorders
- Depression
- Social difficulties

**Support Strategies:**
- Psychotherapy
- Support groups
- Peer mentoring
- Family counseling
- Self-esteem building

## Gynecologic Care

**Routine Care:**
- Pelvic exams when sexually active
- HPV vaccination
- STI screening
- Contraception if needed

**Estrogen Replacement:**
- Lifelong requirement
- Multiple formulations
- Adjust for symptoms
- Monitor side effects

**Pregnancy:**
- Oocyte donation most common
- Careful cardiac monitoring
- High-risk obstetrics
- Postpartum support`,
      keyTerms: [
        { term: 'DEXA', definition: 'Dual-energy X-ray absorptiometry; bone density scan for osteoporosis' },
      ],
      clinicalNotes: 'Aortic dissection is a leading cause of death in adult TS patients. Know the warning signs: chest pain, back pain, cardiovascular collapse. Women with TS who become pregnant are high-risk and need cardiology involvement. Lifelong estrogen replacement is essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary TS care incorporates personalized growth hormone protocols, individualized estrogen regimens, advanced cardiovascular imaging, fertility preservation options, psychosocial interventions, and ongoing research on genetic mechanisms and novel therapies.',
      explanation: `## Growth Hormone Optimization

**Individualized Dosing:**
- IGF-1-guided therapy
- Pharmacogenomic considerations
- Dose adjustments based on response
- Combination with oxandrolone in some cases

**Predictors of Response:**
- Age at start
- Mid-parental height
- GH dose
- IGF-1 levels
- Presence of Y chromosome

**Controversies:**
- Optimal timing to start
- Duration of therapy
- Dose optimization
- Long-term safety

**Long-Term Outcomes:**
- Improved final height
- Improved body composition
- Better lipid profile
- Possible cardiovascular benefits
- Quality of life improvements

## Estrogen Replacement Individualization

**Formulation Options:**
- Oral estradiol: First-line
- Transdermal patch: Avoid first-pass metabolism
- Vaginal ring: Local effect
- Implants: Less common

**Dosing Strategies:**
- Ultra-low dose induction
- Gradual escalation
- Age-appropriate regimens
- Consider bone age, not just chronologic age

**Monitoring:**
- Estradiol levels
- FSH, LH suppression
- Bone age progression
- Uterine development (ultrasound)
- Symptom response

## Novel Fertility Options

**Ovarian Tissue Cryopreservation:**
- Experimental in TS
- May preserve follicles
- Timing before follicle depletion
- Autotransplantation later
- Ethical considerations

**In Vitro Maturation:**
- Immature oocyte retrieval
- Laboratory maturation
- Fertilization attempts
- Very experimental in TS

**Uterine Factors:**
- Estrogen needed for adequate size
- Progesterone support in pregnancy
- Monitor uterine blood flow

## Cardiovascular Imaging Advances

**CMR (Cardiac MRI):**
- Superior to echo for aortic dimensions
- No radiation
- Tissue characterization
- Flow quantification

**4D Flow MRI:**
- Advanced flow assessment
- Wall shear stress
- Dissection risk stratification

**CT Angiography:**
- Alternative when MRI unavailable
- Faster acquisition
- Radiation exposure

**Biomarkers:**
- NT-proBNP
- Troponin
- Inflammatory markers
- Genetic markers

## Psychopharmacology Considerations

**ADHD Treatment:**
- Increased prevalence in TS
- Stimulants effective
- Monitor for cardiovascular effects
- Consider nonstimulants

**Anxiety/Depression:**
- SSRIs first-line
- Consider hormonal influences
- Psychotherapy combination
- Monitor for suicidality

## Transition Medicine Models

- Multidisciplinary transition clinics
- Shared medical appointments
- Telemedicine options
- Patient navigation
- Peer support integration

## Quality of Life Research

- Patient-reported outcomes
- Treatment satisfaction
- Body image assessment
- Social participation measures
- Educational/vocational attainment

## Future Directions

**Gene Expression Studies:**
- X chromosome escape genes
- Haploinsufficiency effects
- Potential gene therapy targets

**Biomarker Discovery:**
- Predict growth response
- Identify cardiovascular risk
- Detect ovarian follicle presence
- Personalize estrogen dosing

**Novel Therapeutics:**
- IGF-1 as alternative or adjunct
- Selective estrogen modulators
- Anabolic agents for bone
- Neuroprotective strategies

**Registries and Research:**
- International TS registries
- Natural history studies
- Clinical trial networks
- Patient-powered research`,
      keyTerms: [
        { term: 'haploinsufficiency', definition: 'Phenomenon where having only one functional copy of a gene is insufficient for normal function' },
        { term: 'CMR', definition: 'Cardiac magnetic resonance; advanced imaging for cardiovascular assessment' },
      ],
      clinicalNotes: 'Growth hormone therapy has become standard of care and should be started early. Individualize dosing based on IGF-1 levels and response. Estrogen replacement timing is nuanced—consider bone age, psychosocial factors, and ongoing growth. Aortic dissection risk requires lifelong vigilance.',
    },
  },

  media: [],
  citations: [
    { id: 'turner-consensus', type: 'article', title: 'Consensus Statement on the Care of Girls and Women with Turner Syndrome', source: 'Journal of Clinical Endocrinology and Metabolism' },
    { id: 'ts-guidelines', type: 'website', title: 'Turner Syndrome Clinical Practice Guidelines', source: 'Endocrine Society' },
  ],
  crossReferences: [
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'condition-coarctation', targetType: 'condition', relationship: 'related', label: 'Coarctation of Aorta' },
  ],
  tags: {
    systems: ['endocrine', 'genetic', 'cardiovascular'],
    topics: ['genetics', 'endocrinology', 'reproductive health'],
    keywords: ['Turner syndrome', '45,X', 'short stature', 'ovarian failure', 'bicuspid aortic valve', 'growth hormone', 'estrogen'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'endocrinology'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default turnerSyndrome;
