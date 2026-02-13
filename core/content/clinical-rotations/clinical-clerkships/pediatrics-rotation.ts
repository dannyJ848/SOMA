/**
 * Pediatrics Clerkship - Clinical Rotations
 *
 * Educational content for the pediatrics clinical clerkship,
 * covering child health, development, and pediatric clinical skills.
 */

import { EducationalContent } from '../../types';

export const pediatricsClerkship: EducationalContent = {
  id: 'clerkship-pediatrics',
  type: 'concept',
  name: 'Pediatrics Clerkship',
  alternateNames: ['Pediatric Rotation', 'Peds Clerkship', 'Child Health Rotation'],

  levels: {
    1: {
      level: 1,
      summary: 'The pediatrics clerkship teaches medical students how to care for children from birth through adolescence, focusing on healthy development and common childhood illnesses.',
      explanation: `## What Is Pediatrics?

Pediatrics is the medical specialty focused on children\'s health from birth through the teenage years. Pediatricians help children grow and develop well, prevent illness, and treat diseases.

## Where You Will Work

**In the Hospital:**
- Newborn nursery (for babies just born)
- Pediatric floors (for sick children)
- Pediatric intensive care (for very sick children)
- Emergency department

**In the Clinic:**
- Well-child visits (check-ups)
- Sick visits
- Specialty clinics

## What You Will Do

**Daily Activities:**
- See children for regular check-ups
- Examine babies and children of all ages
- Talk with parents and families
- Give vaccinations (shots that prevent disease)
- Help treat sick children
- Track growth and development

**Skills You Will Learn:**
- How to examine babies and children
- How to talk to children at different ages
- How to work with parents
- Normal growth and development
- Common childhood illnesses

## Common Things You\'ll See

**Well-Child Care:**
- Growth measurements (height, weight)
- Development checks
- Vaccinations
- Safety advice

**Common Illnesses:**
- Ear infections
- Strep throat
- Asthma
- Stomach bugs
- Rashes
- Colds and flu

## Different Ages, Different Needs

**Newborns (0-1 month):**
- Feeding and sleeping
- Jaundice (yellow skin)
- Weight gain

**Infants (1-12 months):**
- Growth and milestones
- Starting foods
- Immunizations

**Toddlers (1-3 years):**
- Developmental stages
- Safety and accidents
- Behavior

**School-age (6-12 years):**
- School performance
- Friendships
- Chronic conditions

**Teenagers (13-18 years):**
- Puberty
- Mental health
- Risk behaviors

## Why This Rotation Matters

- Children are not just small adults - they have special medical needs
- You\'ll care for children in any specialty you choose
- Preventing disease is very important in pediatrics
- Building trust with families helps children stay healthy

## Tips for Working with Children

- Get on their level (sit down)
- Use age-appropriate words
- Be gentle and move slowly
- Let them touch the stethoscope first
- Praise their cooperation
- Always involve parents`,
      keyTerms: [
        { term: 'pediatrician', definition: 'A doctor who specializes in caring for babies, children, and teenagers' },
        { term: 'well-child visit', definition: 'Regular check-up to monitor growth, development, and prevent illness' },
        { term: 'vaccination', definition: 'A shot that protects against infectious diseases' },
        { term: 'developmental milestones', definition: 'Skills that most children can do by certain ages' },
      ],
      analogies: [
        'Children are like plants - they need the right nutrients, environment, and care to grow strong.',
        'A pediatric visit is like a team meeting - the child, parents, and doctor all work together for health.',
      ],
      examples: [
        'You might do a check-up on a 6-month-old baby, measuring their growth and giving recommended vaccines.',
        'You could help examine a child with asthma, learning to listen to their lungs and discuss triggers with the family.',
      ],
      patientCounselingPoints: [
        'Parents should keep a record of their child\'s vaccines and bring it to every visit.',
        'Regular check-ups are important even when children seem healthy - they help catch problems early.',
      ],
    },
    2: {
      level: 2,
      summary: 'The pediatrics clerkship develops skills in child health assessment, developmental evaluation, family-centered care, and management of common pediatric conditions across inpatient and outpatient settings.',
      explanation: `## Clerkship Overview

**Duration:** 6-8 weeks
**Settings:**
| Setting | Duration | Focus |
|---------|----------|-------|
| Inpatient wards | 3-4 weeks | Acute illness management |
| Newborn nursery | 1-2 weeks | Neonatal care |
| Ambulatory clinic | 2-3 weeks | Well-child and acute visits |
| Specialty (optional) | 1 week | Subspecialty exposure |

## Pediatric Assessment

**History Taking:**
| Component | Special Considerations |
|-----------|----------------------|
| Chief complaint | From child and parent |
| History of present illness | Timeline, exposures |
| Birth history | Prenatal, delivery, neonatal |
| Developmental history | Milestones, school |
| Family history | Genetic conditions |
| Social history | Home, school, safety |

**Physical Examination by Age:**
| Age | Approach |
|-----|----------|
| Newborn | Head-to-toe, gestational age assessment |
| Infant | Parent-assisted, distraction |
| Toddler | Gradual approach, play |
| School-age | Cooperative, explain |
| Adolescent | Privacy, confidentiality |

**Growth Assessment:**
- Weight, length/height, head circumference
- Growth charts (WHO, CDC)
- Percentiles and trends
- BMI calculation

## Developmental Evaluation

**Key Milestones:**
| Age | Gross Motor | Fine Motor | Language | Social |
|-----|-------------|------------|----------|--------|
| 2 months | Lifts head | Grasps | Coos | Smiles |
| 6 months | Sits | Transfers | Babbles | Recognizes |
| 12 months | Walks | Pincer grasp | 1-2 words | Points |
| 2 years | Runs | Stacks | 2-word phrases | Parallel play |
| 5 years | Hops | Copies shapes | Full sentences | Cooperative |

**Developmental Screening:**
- Denver II
- ASQ (Ages and Stages Questionnaire)
- M-CHAT (autism screening at 18-24 months)

**Red Flags:**
| Domain | Concern |
|--------|---------|
| Motor | Not walking by 18 months |
| Language | No words by 15 months |
| Social | No eye contact |
| Regression | Loss of skills |

## Immunizations

**Recommended Schedule:**
| Age | Vaccines |
|-----|----------|
| Birth | Hepatitis B |
| 2 months | DTaP, IPV, Hib, PCV, RV |
| 4 months | DTaP, IPV, Hib, PCV, RV |
| 6 months | DTaP, IPV, Hib, PCV, RV, Hep B, flu |
| 12 months | MMR, Varicella, Hib, PCV |
| 15 months | DTaP |
| 4-6 years | DTaP, IPV, MMR, Varicella |
| 11-12 years | Tdap, MenACWY, HPV |

**Contraindications:**
- Severe allergic reaction to vaccine
- Immunodeficiency (live vaccines)
- Current moderate/severe illness

## Common Pediatric Conditions

**Respiratory:**
| Condition | Age Group | Key Features |
|-----------|-----------|--------------|
| Bronchiolitis | <2 years | RSV, wheezing |
| Asthma | Any | Wheezing, triggers |
| Pneumonia | Any | Fever, cough, CXR |
| Croup | 6m-3y | Barking cough, stridor |

**Infectious:**
| Condition | Presentation | Management |
|-----------|--------------|------------|
| Otitis media | Ear pain, fever | Antibiotics or observe |
| Strep pharyngitis | Sore throat, fever | Rapid test, antibiotics |
| Viral URI | Runny nose, cough | Supportive care |
| Gastroenteritis | Vomiting, diarrhea | Rehydration |

**Other Common:**
- Febrile seizures
- Constipation
- Eczema
- Attention-deficit/hyperactivity disorder

## Family-Centered Care

**Principles:**
- Family as partner in care
- Cultural sensitivity
- Information sharing
- Family choice

**Communication:**
- Address both child and parent
- Age-appropriate explanations
- Teach-back method
- Address parental concerns

## Inpatient Pediatrics

**Common Admissions:**
- Asthma exacerbation
- Dehydration
- Pneumonia
- Sepsis workup in infants
- Appendicitis

**Pediatric Dosing:**
- Weight-based calculations
- mg/kg dosing
- Fluid requirements
- Vital sign ranges by age

## Study Priorities

**High-Yield Topics:**
- Growth and development milestones
- Immunization schedule
- Common pediatric conditions
- Fluid management
- Developmental red flags
- Child abuse recognition

**Resources:**
- Nelson Essentials of Pediatrics
- Case Files Pediatrics
- UWorld Step 2 CK
- Bright Futures guidelines`,
      keyTerms: [
        { term: 'growth charts', definition: 'Standardized charts showing expected growth patterns for children by age and sex' },
        { term: 'gestational age', definition: 'The age of a fetus or newborn from conception, measured in weeks' },
        { term: 'pincer grasp', definition: 'Using thumb and forefinger to pick up small objects - milestone at 9-12 months' },
        { term: 'febrile seizure', definition: 'Seizure triggered by fever in young children, typically ages 6 months to 5 years' },
      ],
      analogies: [
        'Pediatric growth is like watching a time-lapse video of a flower - small changes daily become big differences over time.',
        'Talking to a toddler is like talking to a friend who speaks a different language - use simple words, gestures, and patience.',
      ],
      examples: [
        'You perform a 9-month well-child visit, checking milestones like sitting, babbling, and using a pincer grasp.',
        'You evaluate a 3-year-old with fever and ear pain, diagnosing acute otitis media and discussing treatment with parents.',
      ],
      patientCounselingPoints: [
        'Fever in young children is common and usually viral, but certain ages and temperatures require medical evaluation.',
        'Reading to children daily supports language development and school readiness.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pediatrics clerkship mastery requires understanding of growth and development physiology, evidence-based preventive care, management of complex pediatric conditions, and effective communication with children and families across diverse backgrounds.',
      explanation: `## Pediatric Physiology

**Age-Specific Physiology:**
| System | Infant | Child | Adolescent |
|--------|--------|-------|------------|
| Cardiac | HR-dependent CO | Developing | Adult-like |
| Pulmonary | Obligate nose breathers | Growing | Maturing |
| Renal | Immature concentrating ability | Improving | Adult function |
| Immune | Maternal antibodies waning | Developing | Robust |
| Neurologic | Rapid myelination | Pruning | Maturation |

**Pharmacokinetics:**
- Higher volume of distribution
- Different hepatic metabolism
- Renal maturation affects clearance
- Weight-based dosing essential

## Advanced Development

**Developmental Domains:**
| Domain | Assessment Tools |
|--------|-----------------|
| Gross motor | Peabody, Bayley |
| Fine motor | PDMS-2 |
| Language | PLAYS, CELF |
| Cognitive | WPPSI, WISC |
| Adaptive | Vineland |

**Behavioral Health Integration:**
- ADHD evaluation
- Autism spectrum assessment
- Anxiety and depression screening
- Behavioral interventions

**Adolescent Medicine:**
| Area | Content |
|------|---------|
| Confidentiality | Limits and exceptions |
| HEADSS assessment | Home, Education, Activities, Drugs, Sexuality, Suicide |
| Risk behaviors | Substance use, sexual health |
| Mental health | Screening, referral |

## Preventive Care

**Bright Futures Guidelines:**
| Visit | Focus |
|-------|-------|
| Newborn | Feeding, jaundice, safety |
| 2 week | Weight gain, maternal health |
| 2, 4, 6 months | Growth, development, vaccines |
| 12, 15, 18 months | Milestones, autism screen |
| 2-3 years | Language, behavior |
| Annual 4-18 | Comprehensive, risk assessment |

**Anticipatory Guidance:**
| Age | Topics |
|-----|--------|
| Infant | Safe sleep, feeding, injury prevention |
| Toddler | Discipline, toilet training, safety |
| School-age | School success, peer relationships |
| Adolescent | Puberty, mental health, future planning |

**Injury Prevention:**
- Car seats (rear-facing to 2 years)
- Safe sleep (Back to Sleep)
- Water safety
- Firearm safety counseling
- Poison prevention

## Complex Pediatric Conditions

**Chronic Disease Management:**
| Condition | Key Management |
|-----------|----------------|
| Asthma | Action plans, trigger control |
| Diabetes | Insulin, glucose monitoring |
| Epilepsy | AEDs, rescue plans |
| Cystic fibrosis | Enzymes, airway clearance |
| Sickle cell | Hydroxyurea, complications |

**Genetic and Metabolic:**
- Newborn screening follow-up
- Inborn errors of metabolism
- Chromosomal abnormalities
- Genetic counseling

**Neonatal Conditions:**
| Condition | Management |
|-----------|------------|
| Prematurity | Temperature, feeding, development |
| RDS | Surfactant, ventilation |
| Hyperbilirubinemia | Phototherapy, exchange |
| Sepsis | Antibiotics, cultures |

## Pediatric Emergency Care

**Pediatric Assessment Triangle:**
| Component | Assessment |
|-----------|------------|
| Appearance | Tone, interactiveness, gaze |
| Work of breathing | Retractions, nasal flaring |
| Circulation | Color, perfusion |

**Common Emergencies:**
| Emergency | Recognition | Management |
|-----------|-------------|------------|
| Respiratory failure | Altered mental status, fatigue | Bag-mask, intubation |
| Sepsis | Fever, tachycardia, poor perfusion | Fluids, antibiotics |
| Status epilepticus | Seizure >5 min or recurrent | Benzodiazepines |
| Dehydration | Weight loss, poor intake | Rehydration protocol |

**Child Abuse Recognition:**
- Injury patterns inconsistent with history
- Multiple injuries in various stages
- Delay in seeking care
- Behavioral indicators
- Mandatory reporting obligations

## Family Dynamics

**Family-Centered Rounds:**
- Include family in discussions
- Teach at bedside
- Address family concerns
- Discharge planning

**Cultural Competence:**
- Health beliefs and practices
- Language access
- Health literacy
- Disparities awareness

**Care Coordination:**
| Service | Coordination |
|---------|--------------|
| Early intervention | Developmental delays |
| School services | IEPs, 504 plans |
| Subspecialty | Referral management |
| Community resources | Support services |`,
      keyTerms: [
        { term: 'HEADSS assessment', definition: 'Psychosocial interview framework for adolescents: Home, Education/Employment, Activities, Drugs, Sexuality, Suicide/Depression' },
        { term: 'anticipatory guidance', definition: 'Proactive counseling about expected developmental changes and health risks' },
        { term: 'newborn screening', definition: 'Mandatory testing of all newborns for treatable genetic and metabolic conditions' },
        { term: 'status epilepticus', definition: 'Seizure lasting >5 minutes or recurrent without recovery - medical emergency' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced pediatrics clerkship performance integrates sophisticated understanding of childhood disease pathophysiology, evidence-based management of complex conditions, advocacy for child health, and preparation for pediatric or family medicine careers.',
      explanation: `## Pediatric Pathophysiology

**Disease Manifestations by Age:**
| Condition | Infant | Child | Adolescent |
|-----------|--------|-------|------------|
| Appendicitis | Nonspecific, perforation risk | Classic presentation | Similar to adult |
| UTI | Fever without source | Dysuria | Similar to adult |
| Pneumonia | Tachypnea, feeding difficulty | Cough, fever | Adult-like |
| Meningitis | Bulging fontanelle | Stiff neck | Adult-like |

**Immunology:**
- Passive immunity (maternal antibodies)
- Active immunity development
- Vaccine responses
- Immunodeficiency patterns

**Nutritional Physiology:**
| Age | Nutritional Needs |
|-----|-----------------|
| Infant | 100-120 kcal/kg, breast milk/formula |
| Toddler | Decreased appetite, food preferences |
| School-age | Balanced diet, growth needs |
| Adolescent | Increased calories, calcium, iron |

## Evidence-Based Pediatrics

**Landmark Studies:**
| Study | Finding |
|-------|---------|
| BACK to Sleep | SIDS reduction with supine sleeping |
| MMR vaccine studies | No autism association |
| Pediatric hypertension guidelines | New percentiles for BP |
| FLAVOR trial | Observation vs antibiotics for otitis |

**Clinical Practice Guidelines:**
| Topic | Source |
|-------|--------|
| ADHD | AAP guidelines |
| Asthma | NHLBI guidelines |
| Otitis media | AAP/AAFP guidelines |
| URIs | AAP antibiotic stewardship |

## Complex Care Coordination

**Medical Home:**
- Accessible care
- Family-centered
- Coordinated
- Comprehensive
- Continuous
- Compassionate
- Culturally effective

**Children with Medical Complexity:**
| Challenge | Strategy |
|-----------|----------|
| Multiple specialists | Care coordination |
| Technology dependence | Home care support |
| Care transitions | Planning, communication |
| Emergency plans | Action plans, letters |

**Palliative Care:**
- Symptom management
- Goals of care discussions
- Family support
- End-of-life care
- Bereavement

## Pediatric Subspecialties

**Exposure Goals:**
| Specialty | Key Learning |
|-----------|--------------|
| Cardiology | Murmur evaluation, CHD |
| GI | Failure to thrive, IBD |
| Nephrology | Nephrotic syndrome, HTN |
| Hematology/Oncology | Anemia, leukemia protocols |
| Neurology | Seizures, headaches |
| Endocrinology | Diabetes, growth disorders |
| Rheumatology | JIA, autoimmune |
| ID | HIV, TB, resistant organisms |

## Advocacy and Public Health

**Child Health Advocacy:**
| Level | Activities |
|-------|------------|
| Individual | Anticipatory guidance |
| Community | School health, safety |
| Policy | Immunization laws, gun safety |

**Social Determinants of Health:**
- Poverty and health outcomes
- Food insecurity
- Housing instability
- Environmental exposures
- Access to care

**Health Disparities:**
| Disparity | Impact |
|-----------|--------|
| Racial/ethnic | Asthma, obesity, SIDS |
| Economic | Preventive care access |
| Geographic | Specialist availability |
| Insurance | Care delays |

## Quality and Safety

**Pediatric-Specific Safety:**
| Issue | Prevention |
|-------|------------|
| Medication errors | Weight-based dosing, double-check |
| Falls | Bed rails, supervision |
| Identification | Two identifiers, band checks |
| Family-centered safety | Parental involvement |

**Quality Metrics:**
- Immunization rates
- Well-child visit rates
- Screening completion
- Chronic disease control

## Career Development

**Pediatric Residency:**
- 3 years categorical pediatrics
- Combined programs ( Med-Peds, Peds-PM&R)
- Subspecialty fellowship: 3 years

**Career Paths:**
| Path | Characteristics |
|------|-----------------|
| Primary care | Continuity, prevention |
| Hospitalist | Inpatient, acute care |
| Subspecialty | Expertise, research |
| Academic | Teaching, research |
| Global health | Resource-limited settings |

**Advocacy Careers:**
- Policy work
- Community health
- Public health pediatrics
- Legislative advocacy`,
      clinicalNotes: `Clinical Pearl: Children are not small adults - their physiology, disease presentations, and responses to treatment differ significantly by age. The pediatrics clerkship teaches you to think developmentally, considering not just the disease but the whole child and family context. This holistic approach benefits patients in all specialties.

Expert Tip: The pediatric history includes elements not needed in adult medicine - birth history, developmental milestones, family dynamics. Mastering these components prepares you to understand patients as products of their life experiences, not just their current symptoms.`,
      keyTerms: [
        { term: 'medical home', definition: 'Primary care model providing accessible, continuous, comprehensive, family-centered care' },
        { term: 'children with medical complexity', definition: 'Children with chronic conditions, functional limitations, and high healthcare utilization' },
        { term: 'social determinants of health', definition: 'Conditions in which people are born, grow, live, and age that affect health outcomes' },
        { term: 'failure to thrive', definition: 'Inadequate weight gain or growth in children, often multifactorial' },
      ],
    },
    5: {
      level: 5,
      summary: 'Professional mastery of the pediatrics clerkship encompasses pediatric education scholarship, leadership in child health advocacy, systems improvement for pediatric care, and contribution to advancing pediatric science and health equity.',
      explanation: `## Pediatric Expertise Development

**Clinical Reasoning in Pediatrics:**
| Challenge | Expert Approach |
|-----------|-----------------|
| Limited historian | Caregiver input, observation |
| Rapid changes | Frequent reassessment |
| Developmental variation | Age-appropriate norms |
| Family dynamics | Systems thinking |

**Procedural Skills:**
| Procedure | Competency Level |
|-----------|------------------|
| Lumbar puncture | Observe to perform |
| IV placement | Perform with supervision |
| Intubation | Observe in pediatrics |
| Circumcision | Observe |
| Fracture reduction | Assist |

## Pediatric Education Scholarship

**Teaching Pediatrics:**
| Method | Application |
|--------|-------------|
| Simulation | Neonatal resuscitation, procedures |
| Standardized patients | Parent communication |
| Case-based learning | Clinical reasoning |
| Interprofessional | Team-based care |

**Curriculum Development:**
- Milestone-based progression
- Entrustable professional activities
- Competency-based education
- Assessment science

**Education Research:**
| Area | Questions |
|------|-----------|
| Development | How do pediatric reasoning skills develop? |
| Assessment | Valid tools for pediatric competencies |
| Simulation | Effectiveness in pediatric training |
| Advocacy | Teaching advocacy skills |

## Systems and Policy

**Healthcare Delivery Science:**
| Domain | Application |
|--------|-------------|
| Access | Reducing barriers to care |
| Quality | Pediatric-specific metrics |
| Cost | High-value care for children |
| Integration | Medical and social services |

**Child Health Policy:**
- Medicaid/CHIP
- Immunization policy
- Child safety legislation
- School health policy
- Maternal-child health

**Global Child Health:**
| Challenge | Approach |
|-----------|----------|
| Under-5 mortality | Preventable causes |
| Vaccine coverage | Distribution, hesitancy |
| Malnutrition | Prevention, treatment |
| Neonatal care | Essential interventions |

## Innovation in Pediatrics

**Technology:**
| Innovation | Application |
|------------|-------------|
| Telehealth | Rural access, chronic disease |
| Mobile health | Adolescent engagement |
| Wearables | Asthma, diabetes monitoring |
| AI | Diagnostic support |

**Precision Medicine:**
- Pharmacogenomics
- Rare disease genetics
- Cancer genomics
- Risk stratification

**Digital Health:**
- Electronic health records optimization
- Patient portals for families
- Decision support
- Population health tools

## Professionalism and Ethics

**Complex Pediatric Ethics:**
| Scenario | Ethical Framework |
|----------|-------------------|
| Parental refusal | Best interest, harm principle |
| Adolescent confidentiality | Developing autonomy |
| Life-sustaining treatment | Quality of life, suffering |
| Resource allocation | Justice, equity |
| Research in children | Protection, benefit |

**Pediatrician Wellness:**
| Challenge | Strategy |
|-----------|----------|
| Emotional toll | Processing, peer support |
| Vicarious trauma | Self-awareness |
| Work-life balance | Boundaries, efficiency |
| Moral distress | Ethics consultation |

## Advancing the Field

**Research Contributions:**
| Type | Examples |
|------|----------|
| Clinical trials | Therapeutics, devices |
| Outcomes | Quality, disparities |
| Implementation | Getting evidence to practice |
| Health services | Access, delivery |

**Leadership Pathways:**
| Role | Activities |
|------|------------|
| Academic | Department leadership |
| Professional societies | Committee work |
| Advocacy organizations | Policy engagement |
| Community | Program development |

**Legacy in Pediatrics:**
- Mentorship
- Research impact
- Policy change
- Health improvement
- Trainee education`,
      keyTerms: [
        { term: 'healthcare delivery science', definition: 'Study of how healthcare is organized, delivered, and improved' },
        { term: 'precision medicine', definition: 'Tailoring medical treatment to individual characteristics based on genetics, environment, and lifestyle' },
        { term: 'vicarious trauma', definition: 'Emotional impact of witnessing trauma experienced by others' },
        { term: 'entrustable professional activities', definition: 'Units of professional practice that can be entrusted to trainees once competent' },
      ],
      clinicalNotes: `Expert Perspective: Pediatrics is the specialty of potential - every interaction shapes a developing human being. Expert pediatricians demonstrate:

1. Deep understanding of developmental physiology and its clinical implications
2. Skill in eliciting information from children and families across diverse backgrounds
3. Advocacy for children at individual and population levels
4. Comfort with uncertainty and the evolving nature of childhood conditions
5. Commitment to prevention and health promotion
6. Resilience and wellness maintenance in emotionally demanding work
7. Contribution to the field through research, education, or policy

The pediatrics clerkship is often transformative - students discover the unique privilege of caring for children and the profound impact of early intervention. Whether or not you choose pediatrics, the skills of family-centered care, developmental thinking, and health advocacy serve all patients throughout their lives.`,
    },
  },

  media: [
    {
      id: 'growth-chart-example',
      type: 'diagram',
      filename: 'growth-chart-example.svg',
      title: 'Pediatric Growth Chart',
      description: 'Example of plotting growth measurements over time',
    },
    {
      id: 'milestones-timeline',
      type: 'diagram',
      filename: 'milestones-timeline.svg',
      title: 'Developmental Milestones Timeline',
      description: 'Visual guide to key developmental milestones by age',
    },
  ],

  citations: [
    {
      id: 'bright-futures',
      type: 'website',
      title: 'Bright Futures Guidelines',
      source: 'American Academy of Pediatrics',
      url: 'https://brightfutures.aap.org',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nelson-essentials',
      type: 'textbook',
      title: 'Nelson Essentials of Pediatrics',
      authors: ['Marcdante KJ', 'Kliegman RM'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'clerkship-internal-medicine', targetType: 'concept', relationship: 'sibling', label: 'Internal Medicine Clerkship' },
    { targetId: 'clerkship-surgery', targetType: 'concept', relationship: 'sibling', label: 'Surgery Clerkship' },
    { targetId: 'clerkship-family-medicine', targetType: 'concept', relationship: 'sibling', label: 'Family Medicine Clerkship' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-clerkships', 'pediatrics', 'child-health'],
    keywords: ['pediatrics', 'child development', 'immunizations', 'growth', 'family-centered care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pediatricsClerkship;
