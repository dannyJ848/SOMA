/**
 * Down Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const downSyndrome: EducationalContent = {
  id: 'condition-down-syndrome',
  type: 'condition',
  name: 'Down Syndrome',
  nameEs: 'Síndrome de Down',
  alternateNames: ['DS', 'Trisomy 21', 'Down\'s Syndrome'],
  hpoId: 'HP:0001248',

  levels: {
    1: {
      level: 1,
      summary: 'Down syndrome is a genetic condition caused by having an extra copy of chromosome 21, which causes physical features, developmental delays, and an increased risk of certain medical problems.',
      explanation: `Down syndrome is a condition that a person is born with. It happens when a baby has an extra chromosome.

**What is Down syndrome:**
- Normally, babies have 46 chromosomes
- Babies with Down syndrome have 47 chromosomes
- The extra chromosome is chromosome 21
- This extra chromosome changes how the baby develops

**Physical features:**
- Eyes that slant upward
- Flat face, especially nose bridge
- Small ears
- Small hands and feet
- Single line across palm (palmar crease)
- Low muscle tone (floppy muscles)
- Short height

**Developmental effects:**
- May learn more slowly
- May take longer to walk, talk, and read
- May need extra help in school
- Each child is different

**Health concerns:**
- Heart problems (some babies)
- Hearing problems
- Vision problems
- More infections (respiratory, ear)
- Thyroid problems
- Higher risk of leukemia (rare)

**Life with Down syndrome:**
- Most people with DS are healthy
- Can go to regular schools
- Can have jobs
- Can live independently (with support)
- Life expectancy is now 60+ years

**Support and treatment:**
- Early intervention services
- Physical therapy
- Speech therapy
- Special education support
- Regular medical checkups`,
      keyTerms: [
        { term: 'chromosome', definition: 'Structures in cells that contain genes; humans normally have 46 chromosomes' },
        { term: 'trisomy', definition: 'Having three copies of a chromosome instead of the normal two' },
        { term: 'early intervention', definition: 'Services provided to young children with developmental delays' },
      ],
      analogies: [
        'Chromosomes are like instruction books for building a person. Down syndrome is like having an extra chapter in one of the books—it changes how the person is built.',
        'Think of genes like recipes. Having an extra chromosome is like getting a double dose of one recipe—too much of those ingredients changes the outcome.',
      ],
      examples: [
        'A baby diagnosed with Down syndrome at birth receives physical therapy to help with low muscle tone.',
        'A child with Down syndrome learns to read with the help of a special education teacher.',
      ],
      patientCounselingPoints: [
        'Every child with Down syndrome is unique and has their own strengths.',
        'Early intervention services (physical, speech, occupational therapy) are very important.',
        'Regular medical checkups help catch and treat problems early.',
        'Children with Down syndrome can thrive in inclusive classrooms with support.',
        'Joining support groups can help families connect with others.',
        'Focus on the child is abilities, not just challenges.',
      ],
    },
    2: {
      level: 2,
      summary: 'Down syndrome (trisomy 21) is caused by nondisjunction, mosaicism, or translocation, resulting in characteristic physical features, intellectual disability, and multiple medical complications including congenital heart defects, hypothyroidism, and increased leukemia risk.',
      explanation: `## Types of Down Syndrome

**Trisomy 21 (Nondisjunction):**
- Three separate copies of chromosome 21
- Most common type (95%)
- Usually maternal meiosis I error
- Risk increases with maternal age

**Mosaicism:**
- Some cells have 47 chromosomes, some have 46
- Occurs after fertilization
- About 1-2% of cases
- May have milder features

**Translocation:**
- Extra chromosome 21 attached to another chromosome
- About 3-4% of cases
- May be inherited from a parent
- Parent may be a balanced translocation carrier

## Clinical Features

**Facial Features:**
- Upward-slanting palpebral fissures
- Epicanthal folds
- Flat nasal bridge
- Small nose, protruding tongue
- Small ears, often overfolded helices
- Brushfield spots in iris

**Musculoskeletal:**
- Hypotonia (low muscle tone)
- Joint hypermobility
- Short stature
- Short neck, excess nuchal skin
- Single transverse palmar crease
- Clinodactyly of 5th finger
- Wide gap between 1st and 2nd toes

**Growth:**
- Prenatal growth deficiency
- Postnatal growth delay
- Failure to thrive possible
- Adult height: ~5 feet

**Development:**
- Moderate intellectual disability
- Delayed speech and language
- Delayed motor milestones
- Social skills relatively preserved
- Adaptive behavior often better than cognitive

## Medical Complications

**Congenital Heart Disease (40-50%):**
- Atrioventricular septal defect (AVSD)
- Ventricular septal defect (VSD)
- Atrial septal defect (ASD)
- Tetralogy of Fallot
- Patent ductus arteriosus

**Hematologic:**
- Transient myeloproliferative disorder (newborns)
- Acute megakaryoblastic leukemia (AMKL)
- 1% risk of leukemia
- 150-fold increased risk

**Endocrine:**
- Hypothyroidism (15-20%)
- Thyroid autoantibodies
- Diabetes mellitus
- Obesity

**Gastrointestinal:**
- Duodenal atresia/stenosis
- Hirschsprung disease
- Tracheoesophageal fistula
- Constipation
- Celiac disease (5-10%)

**Airway:**
- Obstructive sleep apnea
- Narrow upper airway
- Adenotonsillar hypertrophy
- Chronic ear infections

**Ophthalmologic:**
- Refractive errors
- Strabismus (30-50%)
- Cataracts (congenital or acquired)
- Keratoconus
- Nasolacrimal duct obstruction

**Auditory:**
- Conductive hearing loss (effusions)
- Sensorineural hearing loss
- Chronic otitis media

**Orthopedic:**
- Atlantoaxial instability (10-30%)
- Hip dysplasia
- Flat feet
- Patellar instability

## Diagnosis

**Prenatal Screening:**
- First trimester: Nuchal translucency, PAPP-A, hCG
- Second trimester: Quad screen
- Combined detection: ~95% sensitivity
- Cell-free DNA (NIPT): >99% sensitivity

**Prenatal Diagnosis:**
- Chorionic villus sampling (10-13 weeks)
- Amniocentesis (15-20 weeks)
- Karyotype or microarray
- FISH for rapid results

**Postnatal Diagnosis:**
- Physical examination
- Karyotype confirms
- FISH for rapid results
- May detect mosaicism

**Health Surveillance:**
- Echocardiogram (diagnosis and follow-up)
- Audiology: Newborn, then every 1-2 years
- Ophthalmology: By 6 months, then annually
- Thyroid: Newborn, then annually
- Celiac screening: If symptoms`,
      keyTerms: [
        { term: 'nondisjunction', definition: 'Failure of chromosomes to separate properly during cell division, resulting in an extra chromosome' },
        { term: 'AVSD', definition: 'Atrioventricular septal defect; hole between heart chambers and common AV valve' },
        { term: 'atlantoaxial instability', definition: 'Excessive movement between first two vertebrae; risk of spinal cord compression' },
      ],
      analogies: [
        'Nondisjunction is like a card game where one player accidentally gets an extra card—the cell ends up with an extra chromosome.',
      ],
      clinicalNotes: 'All children with Down syndrome should have an echocardiogram to evaluate for congenital heart disease. Screen for hypothyroidism annually. Atlantoaxial instability requires cervical spine X-rays before anesthesia or sports participation.',
    },
    3: {
      level: 3,
      summary: 'Down syndrome management requires comprehensive care including cardiac surgery for congenital defects, screening for hypothyroidism and celiac disease, management of sleep apnea, ophthalmologic and auditory surveillance, and early intervention services.',
      explanation: `## Cardiac Management

**Initial Evaluation:**
- Echocardiogram in all newborns
- ECG (may show conduction abnormalities)
- Cardiology referral

**Common Defects:**
- Complete AVSD: Most common
- VSD, ASD
- Tetralogy of Fallot
- PDA

**Surgical Timing:**
- Repair within first 4-6 months
- Earlier if heart failure
- Outcomes generally good
- Pulmonary hypertension risk if delayed

**Long-Term Follow-up:**
- Regular cardiology visits
- Monitor for residual defects
- Screen for pulmonary hypertension
- Endocarditis prophylaxis if indicated

## Endocrine Management

**Congenital Hypothyroidism:**
- Detected on newborn screening
- Levothyroxine replacement
- Monitor TSH, free T4
- Close monitoring first 3 years

**Acquired Hypothyroidism:**
- Autoimmune thyroiditis
- Annual TSH screening
- Symptoms: fatigue, weight gain, constipation
- Treat with levothyroxine

**Hyperthyroidism:**
- Less common but occurs
- Graves disease possible
- Antithyroid medications
- Consider definitive therapy

**Diabetes:**
- Screen for diabetes mellitus
- Type 1 and type 2 both occur
- May be related to obesity

## Hematologic Management

**Transient Myeloproliferative Disorder:**
- Occurs in newborns
- Resolves spontaneously in most
- Can mimic leukemia
- Monitor blood counts
- Some progress to AML

**Leukemia Surveillance:**
- Be aware of increased risk
- Unexplained symptoms: Evaluate
- PALG (AMKL) most common
- ALL also increased
- Standard chemotherapy protocols

**Megakaryoblastic Leukemia:**
- Unique to DS
- GATA1 mutations
- Good response to chemotherapy
- Reduced chemotherapy intensity

## Gastrointestinal Management

**Obstructive Lesions:**
- Duodenal atresia: Surgical repair
- Hirschsprung disease: Pull-through
- TE fistula: Surgical repair
- Present in newborn period

**Celiac Disease:**
- Screen with tissue transglutaminase IgA
- Screen if symptoms: diarrhea, failure to thrive
- Confirm with biopsy
- Gluten-free diet if confirmed

**Constipation:**
- Common problem
- Dietary fiber
- Stool softeners
- Rule out Hirschsprung if severe

## Airway and Sleep

**Sleep Apnea:**
- High prevalence (50-80%)
- Obstructive > central
- Polysomnography if symptoms
- Adenotonsillectomy if indicated
- CPAP if persistent

**Upper Airway:**
- Narrow passages
- Adenoid hypertrophy
- Chronic rhinitis
- Monitor for obstruction

## Sensory Impairment

**Vision:**
- Screening at birth, 6 months, then annually
- Refractive errors: Glasses
- Strabismus: Patching, surgery
- Cataracts: Surgical removal
- Keratoconus: Contact lenses, transplant

**Hearing:**
- Newborn hearing screen
- Repeat every 1-2 years
- Tympanostomy tubes for effusions
- Hearing aids if needed
- Monitor speech development

## Developmental and Educational Services

**Early Intervention (0-3 years):**
- Physical therapy
- Occupational therapy
- Speech therapy
- Special education
- Family support

**School Age:**
- Individualized Education Program (IEP)
- Inclusive classroom when possible
- Speech and language support
- Occupational therapy
- Special education support
- Physical education adaptation

**Cognitive Profile:**
- Moderate intellectual disability (IQ 40-70)
- Specific strengths: visual learning, social skills
- Challenges: language, executive function
- Adaptive skills often exceed IQ

## Orthopedic Concerns

**Atlantoaxial Instability:**
- Lateral cervical spine X-rays at age 3-5
- Symptoms: neck pain, change in gait, weakness
- Limit high-risk activities if present
- Surgical fusion if severe

**Hip Dysplasia:**
- Screen in infancy
- Monitor for subluxation
- Orthopedic referral if abnormal
- Surgical correction if needed

**Foot Problems:**
- Flat feet common
- Orthotics if symptomatic
- Monitor for pain`,
      keyTerms: [
        { term: 'GATA1', definition: 'Gene mutated in DS-associated megakaryoblastic leukemia' },
        { term: 'PALG', definition: 'Pediatric acute megakaryoblastic leukemia; unique to Down syndrome' },
      ],
      clinicalNotes: 'All children with DS should have echocardiogram at birth. Annual TSH screening detects hypothyroidism early. Polysomnography for sleep apnea if symptoms. Monitor for leukemia with unexplained symptoms. Celiac screening if GI symptoms present.',
    },
    4: {
      level: 4,
      summary: 'Adult Down syndrome care includes managing Alzheimer disease onset (40% by age 50, 100% by autopsy), mental health issues (depression, autism spectrum), obesity, sleep apnea, reproductive health, and transition to adult services.',
      explanation: `## Alzheimer Disease in Down Syndrome

**Pathophysiology:**
- APP gene on chromosome 21
- Amyloid precursor protein overexpression
- Early amyloid plaque deposition
- Neurofibrillary tangles develop
- Early-onset AD universal by pathology

**Clinical Course:**
- Neuropathology by age 40
- Clinical dementia: 40-50% by age 50
- 70%+ by age 60
- Seizures common
- Faster progression than typical AD

**Screening:**
- Baseline cognitive testing at age 35-40
- Annual monitoring
- Watch for functional decline
- Exclude depression, hypothyroidism

**Management:**
- Cholinesterase inhibitors (donepezil)
- Memantine (limited evidence)
- Supportive care
- Behavioral interventions
- Safety measures

**Biomarkers:**
- Amyloid PET: Positive early
- Tau PET: Correlates with symptoms
- Plasma biomarkers: Emerging
- Research use currently

## Mental Health

**Depression:**
- Increased prevalence
- May present as regression
- Vegetative symptoms prominent
- May be misattributed to dementia
- SSRI treatment effective

**Autism Spectrum:**
- 5-10% co-occurrence
- May present with regression
- Behavioral interventions
- Multidisciplinary approach

**ADHD:**
- Increased prevalence
- Stimulant medications
- Behavioral therapy
- Monitor for side effects

**Behavioral Problems:**
- Aggression, self-injury
- Wandering, elopement
- Sleep disturbances
- Triggers: pain, illness, communication difficulties

## Reproductive Health

**Fertility:**
- Males: Generally infertile
- Females: Fertile, reduced fertility
- Contraception counseling
- 50% transmission risk if pregnancy

**Pregnancy:**
- High-risk pregnancy
- Increased fetal loss
- Preterm delivery
- Preeclampsia risk
- Need genetic counseling

**Sexuality Education:**
- Appropriate to developmental level
- Abuse prevention education
- Consent and boundaries

## Adult Health Maintenance

**Obesity Management:**
- Increased prevalence
- Dietary counseling
- Exercise programs
- Monitor for complications

**Sleep Apnea:**
- Worsens with age
- Repeat polysomnography
- Weight loss
- CPAP adherence

**Hearing and Vision:**
- Annual screening
- Presbyopia: Glasses
- Cataracts: Surgical repair
- Hearing aids as needed

**Cervical Spine:**
- AAI may progress
- Repeat imaging if symptoms
- Surgical fusion if severe
- Preoperative clearance needed

## Transition to Adult Care

**Pediatric to Adult:**
- Usually at age 18-21
- Find adult primary care
- Transfer specialists
- Insurance considerations
- Guardianship discussions

**Adult Primary Care:**
- Comprehensive care needed
- May need accommodations
- Longer visit times
- Communication strategies

## Aging and End of Life

**Life Expectancy:**
- Now 60+ years average
- Continuing to improve
- Most common causes: heart disease, AD, respiratory

**Palliative Care:**
- Early integration appropriate
- Goals of care discussions
- Advance directives
- Family support`,
      keyTerms: [
        { term: 'APP', definition: 'Amyloid precursor protein; gene on chromosome 21, contributes to early Alzheimer disease in DS' },
        { term: 'AAI', definition: 'Atlantoaxial instability; excessive movement between cervical vertebrae' },
      ],
      clinicalNotes: 'Adults with DS have dramatically increased risk of early-onset Alzheimer disease. Screen for cognitive changes starting at age 35-40. Baseline neuropsychological testing helps distinguish dementia from other conditions. Depression can mimic dementia in DS.',
    },
    5: {
      level: 5,
      summary: 'Contemporary DS care incorporates prenatal screening advances, noninvasive prenatal testing (NIPT), targeted therapies for cognitive enhancement, clinical trials for Alzheimer disease prevention, and personalized medicine approaches.',
      explanation: `## Prenatal Screening Advances

**Cell-Free DNA (NIPT):**
- Sensitivity >99% for trisomy 21
- False positive rate <0.2%
- Available from 10 weeks gestation
- First-tier screening now
- Does not replace diagnostic testing

**Combined First Trimester Screening:**
- Nuchal translucency measurement
- PAPP-A and free beta-hCG
- Detection rate: 95%
- False positive rate: 5%
- Less used with NIPT available

**Diagnostic Testing Evolution:**
- CVS at 10-13 weeks
- Amniocentesis at 15+ weeks
- Microarray detects additional abnormalities
- Rapid aneuploidy detection (FISH, QF-PCR)
- Noninvasive diagnostics in development

**Counseling Considerations:**
- Discuss all options
- Non-directive approach
- Connect with DS organizations
- Parent decision-making
- Ethical considerations

## Cognitive Enhancement Research

**Pharmacologic Approaches:**
- Donepezil: Mixed results
- Memantine: Limited benefit
- Rivastigmine: Some studies positive
- No cognitive enhancer currently proven

**Targeted Therapies:**
- APP modulation: Reduce amyloid production
- GABA-A antagonists: Improve cognition
- Neuroprotective agents: Preclinical
- Antioxidants: Limited evidence

**Gene Therapy:**
- XIST gene silencing
- Inactivating extra chromosome 21
- Stem cell models
- Proof-of-concept only
- Ethical concerns

## Clinical Trial Design

**Challenges:**
- Heterogeneous population
- Variable baseline abilities
- Outcome measure selection
- Placebo effects
- Family involvement

**Outcome Measures:**
- Cognitive scales
- Adaptive behavior
- Biomarker development
- Digital phenotyping
- Caregiver ratings

**Ongoing Research:**
- Alzheimer disease prevention
- Cognitive enhancement
- Language development
- Sleep apnea treatment

## Epigenetic Considerations

**Gene Expression Regulation:**
- Not all chromosome 21 genes overexpressed
- Some genes silenced
- Individual variation
- May explain phenotype variability
- Potential therapeutic targets

**Environmental Interactions:**
- Enriched environment improves outcomes
- Early intervention critical
- Neuroplasticity preserved
- Individualized approaches

## Precision Medicine

**Pharmacogenomics:**
- Variable drug response
- CYP polymorphisms
- Individualized dosing
- Adverse effect prediction

**Biomarker Development:**
- Plasma Alzheimer biomarkers
- Inflammatory markers
- Oxidative stress measures
- Early detection of complications

## Quality of Life Research

- Self-report measures
- Community participation
- Employment success
- Independent living
- Social relationships
- Healthcare satisfaction

## Ethical Framework

- Prenatal decision-making
- Research participation
- Informed consent/assent
- Resource allocation
- Equity of access`,
      keyTerms: [
        { term: 'NIPT', definition: 'Noninvasive prenatal testing; screens fetal DNA in maternal blood' },
        { term: 'XIST', definition: 'X-inactive specific transcript; gene used to silence extra chromosome 21 in research' },
      ],
      clinicalNotes: 'NIPT has transformed prenatal screening for Down syndrome with >99% sensitivity. However, positive results require confirmatory diagnostic testing (CVS or amniocentesis). Research on cognitive enhancement and Alzheimer disease prevention in DS is ongoing but no disease-modifying therapies are currently proven.',
    },
  },

  media: [],
  citations: [
    { id: 'aap-guidelines', type: 'website', title: 'AAP Guidelines for Health Supervision for Children with Down Syndrome', source: 'Pediatrics' },
    { id: 'acmg-guidelines', type: 'website', title: 'ACMG Practice Guidelines for Down Syndrome', source: 'Genetics in Medicine' },
  ],
  crossReferences: [
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'condition-avsd', targetType: 'condition', relationship: 'related', label: 'Atrioventricular Septal Defect' },
  ],
  tags: {
    systems: ['genetic', 'neurological', 'cardiovascular'],
    topics: ['genetics', 'developmental pediatrics', 'congenital anomalies'],
    keywords: ['Down syndrome', 'trisomy 21', 'nondisjunction', 'AVSD', 'Alzheimer disease', 'developmental delay'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default downSyndrome;
