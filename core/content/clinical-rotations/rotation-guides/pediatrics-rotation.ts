/**
 * Pediatrics Rotation Guide - Clinical Rotations
 *
 * Comprehensive guide for medical students on the pediatrics clerkship,
 * covering child-specific clinical skills and developmental considerations.
 */

import { EducationalContent } from '../../types';

export const pediatricsRotation: EducationalContent = {
  id: 'rotations-pediatrics',
  type: 'concept',
  name: 'Pediatrics Rotation',
  alternateNames: ['Pediatrics Clerkship', 'Peds Rotation', 'Child Health Rotation'],

  levels: {
    1: {
      level: 1,
      summary: 'The pediatrics rotation teaches medical students how to care for children from newborns to teenagers, including healthy child care and treating childhood illnesses.',
      explanation: `Pediatrics is the specialty focused on caring for infants, children, and adolescents. Children are not just small adults - they have unique needs at every age.

**What Makes Pediatrics Special:**
- Children grow and develop rapidly
- Normal findings change with age
- Children often cannot describe their symptoms
- Parents are essential partners in care
- Prevention is a major focus

**Types of Patients You Will See:**
- **Newborns:** Babies in the first month of life
- **Infants:** 1 month to 1 year
- **Toddlers:** 1-3 years
- **Preschool:** 3-5 years
- **School age:** 5-12 years
- **Adolescents:** 12-18 years

**Common Reasons Children See Doctors:**
- Well-child checkups (healthy visits)
- Ear infections
- Respiratory infections (colds, cough)
- Fever
- Rashes
- Stomach bugs
- Injuries

**What You Will Learn:**
- How to examine children of different ages
- Growth and development milestones
- Vaccinations and preventive care
- Common childhood illnesses
- How to communicate with children and parents

**Where You Will Work:**
- Outpatient clinic (well-child visits, sick visits)
- Hospital wards (admitted children)
- Newborn nursery
- Emergency department (sometimes)
- Subspecialty clinics (sometimes)

**Tips for Working With Children:**
- Get down to their eye level
- Let them handle your equipment first
- Be playful and patient
- Save uncomfortable parts of exam for last
- Explain things in simple terms
- Include the child in conversations

**What to Bring:**
- Stickers or small toys
- Colorful pen for distraction
- Picture books
- Patience and a smile

**Remember:**
- Every visit is a chance to prevent problems
- Growth charts tell an important story
- Developmental milestones are key
- Families are partners in care
- Children are resilient`,
      keyTerms: [
        { term: 'pediatrics', definition: 'The medical specialty focused on the health of infants, children, and adolescents' },
        { term: 'milestone', definition: 'A skill or behavior that most children can do by a certain age, like walking or talking' },
        { term: 'well-child visit', definition: 'A regular checkup for healthy children to track growth and development and give vaccines' },
      ],
      analogies: [
        'A child\'s development is like a plant growing - you need to check regularly to make sure everything is progressing normally.',
        'Pediatric vital signs are like different sized clothes - what fits a baby is totally different from what fits a teenager.',
      ],
      examples: [
        'At a 2-year checkup, you would check if the child can kick a ball, say 50 words, and follow simple instructions.',
        'A crying baby with a fever and pulling at their ear likely has an ear infection.',
      ],
      patientCounselingPoints: [
        'Parents know their child best - listen to their concerns.',
        'Always explain what you are doing to both the child and parent.',
        'Praise children for being brave during the exam.',
      ],
    },
    2: {
      level: 2,
      summary: 'The pediatrics clerkship covers child health maintenance, common pediatric illnesses, developmental assessment, and age-appropriate clinical examination across inpatient and outpatient settings.',
      explanation: `## Pediatrics Clerkship Structure

**Duration:** Typically 6-8 weeks
**Settings:**
| Setting | Focus |
|---------|-------|
| Outpatient clinic | Well-child care, acute visits |
| Inpatient wards | Hospitalized children |
| Newborn nursery | Healthy and transitional newborns |
| NICU (if available) | Premature/sick newborns |
| Subspecialty clinics | Various pediatric specialists |

## Age-Specific Vital Signs

| Age | Heart Rate | Respiratory Rate | BP Systolic |
|-----|------------|------------------|-------------|
| Newborn | 100-160 | 30-60 | 60-90 |
| Infant | 100-150 | 30-50 | 80-100 |
| Toddler | 90-140 | 24-40 | 90-105 |
| Preschool | 80-120 | 22-34 | 95-110 |
| School age | 70-110 | 18-30 | 100-120 |
| Adolescent | 60-100 | 12-20 | 110-135 |

## Developmental Milestones

**Key Milestones by Age:**

| Age | Gross Motor | Fine Motor | Language | Social |
|-----|-------------|------------|----------|--------|
| 2 months | Head up prone | Follows past midline | Coos | Social smile |
| 4 months | Rolls over | Reaches for objects | Laughs | Recognizes parent |
| 6 months | Sits with support | Transfers objects | Babbles | Stranger anxiety |
| 9 months | Sits alone | Pincer grasp | "Dada/mama" | Waves bye |
| 12 months | Walks | 2-finger pincer | 1-2 words | Points to show |
| 18 months | Runs | Stacks 2 blocks | 10+ words | Follows commands |
| 2 years | Kicks ball | Stacks 6 blocks | 2-word phrases | Parallel play |
| 3 years | Tricycle | Copies circle | 3-word sentences | Interactive play |
| 4 years | Hops | Copies cross | Tells stories | Imaginative play |
| 5 years | Skips | Copies square | Full sentences | Understands rules |

## Well-Child Visits

**Components:**
| Element | Purpose |
|---------|---------|
| Growth measurements | Plot on growth curves |
| Developmental screening | Identify delays |
| Physical examination | Age-appropriate assessment |
| Immunizations | Per schedule |
| Anticipatory guidance | Safety, nutrition, parenting |
| Screening tests | Vision, hearing, lead, TB |

**Growth Charts:**
- Plot weight, length/height, head circumference
- Use WHO charts <2 years, CDC 2-20 years
- Concerning: Crossing 2 major percentile lines
- BMI for age starts at 2 years

## Pediatric History Taking

**Key Elements:**

| Component | Pediatric Specifics |
|-----------|---------------------|
| HPI | Who is concerned, timeline |
| Birth history | Prenatal, delivery, NICU |
| Developmental history | Milestone achievement |
| Immunizations | Up to date? |
| Growth history | Previous measurements |
| Family history | Genetic conditions |
| Social history | Living situation, daycare, school |

**Nutritional History by Age:**
- Infant: Breast/formula, frequency, amount
- Toddler: Diet variety, self-feeding
- Child: Picky eating, food security
- Adolescent: Diet quality, eating disorders

## Pediatric Physical Exam

**Age-Specific Approaches:**

| Age | Approach |
|-----|----------|
| Infant | Start with observation, heart/lungs first |
| Toddler | Parent's lap, save ears for last |
| Preschool | Engage playfully, demonstrate on doll |
| School age | Privacy, explain procedures |
| Adolescent | Confidential time, HEADSS assessment |

**HEADSS Assessment (Adolescents):**
- **H**ome
- **E**ducation/Employment
- **A**ctivities
- **D**rugs
- **S**exuality
- **S**uicide/Safety

## Common Pediatric Conditions

**Respiratory:**
| Condition | Key Features | Management |
|-----------|--------------|------------|
| Bronchiolitis | RSV, <2 years, wheeze | Supportive, O2 if needed |
| Croup | Barking cough, stridor | Steroids, racemic epi |
| Asthma | Wheeze, response to bronchodilators | Bronchodilators, steroids |
| Pneumonia | Fever, cough, tachypnea | Antibiotics if bacterial |

**Infectious:**
| Condition | Presentation | Management |
|-----------|--------------|------------|
| Otitis media | Ear pain, fever, bulging TM | Antibiotics (age-dependent) |
| Strep pharyngitis | Sore throat, fever, exudate | Penicillin/amoxicillin |
| UTI | Fever, dysuria (older), irritability | Culture, antibiotics |
| Gastroenteritis | Vomiting, diarrhea | Rehydration |

**Other Common:**
| Condition | Features |
|-----------|----------|
| Febrile seizures | 6mo-5yr, simple vs. complex |
| Atopic dermatitis | Itchy, flexural, chronic |
| Constipation | Hard stools, withholding |
| ADHD | Inattention, hyperactivity |

## Immunization Schedule

**Key Vaccines by Age:**
| Age | Vaccines |
|-----|----------|
| Birth | HepB #1 |
| 2 months | DTaP, Hib, IPV, PCV13, RV, HepB #2 |
| 4 months | DTaP, Hib, IPV, PCV13, RV |
| 6 months | DTaP, Hib, PCV13, HepB #3, RV, Flu |
| 12-15 months | MMR, Varicella, Hib, PCV13, HepA |
| 4-6 years | DTaP, IPV, MMR, Varicella |
| 11-12 years | Tdap, HPV, MenACWY |`,
      keyTerms: [
        { term: 'bronchiolitis', definition: 'Viral lower respiratory infection in infants causing wheezing, often from RSV' },
        { term: 'HEADSS', definition: 'Adolescent psychosocial assessment: Home, Education, Activities, Drugs, Sexuality, Suicide' },
        { term: 'anticipatory guidance', definition: 'Counseling families about expected development, safety, and health at each age' },
        { term: 'percentile', definition: 'Ranking showing how a child\'s measurement compares to other children the same age' },
      ],
      analogies: [
        'Growth percentiles are like lanes on a highway - staying in your lane is more important than which lane you are in.',
        'Development is like building a house - you need the foundation (early skills) before you can add the roof (later skills).',
      ],
    },
    3: {
      level: 3,
      summary: 'Pediatrics clerkship mastery requires integration of developmental pediatrics, evidence-based management of common childhood illnesses, family-centered care approaches, and recognition of pediatric emergencies.',
      explanation: `## Advanced Developmental Assessment

**Developmental Domains:**
| Domain | Assessment Tools |
|--------|------------------|
| Gross motor | Observation, Denver II |
| Fine motor | Block stacking, drawing |
| Language | Vocabulary, syntax |
| Cognitive | Problem-solving, concepts |
| Social-emotional | Attachment, play |
| Adaptive | Self-care skills |

**Red Flags by Age:**
| Age | Concerns |
|-----|----------|
| 3 months | No social smile, poor tracking |
| 6 months | Not reaching, no babbling |
| 9 months | No sitting, no consonants |
| 12 months | No pointing, no words |
| 18 months | Not walking, <6 words |
| 2 years | No 2-word phrases, regression |
| 3 years | Not understood by family |

**Screening Tools:**
| Tool | Use | Timing |
|------|-----|--------|
| ASQ-3 | General development | 2, 9, 18, 30 mo |
| M-CHAT-R | Autism screening | 18, 24 mo |
| Edinburgh (maternal) | Postpartum depression | 1, 2, 4, 6 mo |
| PHQ-A | Adolescent depression | 12 years+ |

## Pediatric Emergencies

**Fever in Young Infants:**
| Age | Approach |
|-----|----------|
| 0-28 days | Full sepsis workup, IV antibiotics |
| 29-60 days | Risk stratification (Rochester, Boston) |
| 61-90 days | Less aggressive if well-appearing |
| >90 days | Outpatient management if low risk |

**Respiratory Distress Assessment:**
| Sign | Severity Indicator |
|------|-------------------|
| Tachypnea | Increased work |
| Retractions | Intercostal, subcostal, suprasternal |
| Nasal flaring | Moderate-severe |
| Grunting | Severe |
| Head bobbing | Severe |
| Cyanosis | Critical |

**Dehydration Assessment:**
| Severity | Signs | Fluid Deficit |
|----------|-------|---------------|
| Mild | Slightly dry mucous membranes | 3-5% |
| Moderate | Decreased tears, sunken eyes, tachycardia | 6-9% |
| Severe | Lethargic, prolonged cap refill, hypotensive | ≥10% |

**Oral Rehydration:**
- Mild-moderate: ORS 50-100 mL/kg over 4 hours
- Replace ongoing losses
- Advance diet once rehydrated
- IV only if severe or oral failure

## Pediatric Pharmacology

**Weight-Based Dosing:**
\`\`\`
Dose = Weight (kg) × Dose (mg/kg) ÷ Doses per day
\`\`\`

**Common Medications:**
| Drug | Dose | Max |
|------|------|-----|
| Acetaminophen | 15 mg/kg q4-6h | 75 mg/kg/day |
| Ibuprofen | 10 mg/kg q6-8h | 40 mg/kg/day |
| Amoxicillin | 40-90 mg/kg/day div TID | 3g/day |
| Azithromycin | 10 mg/kg day 1, then 5 mg/kg | 500 mg day 1 |

**Special Considerations:**
- Check all doses by weight
- Maximum doses often differ from adults
- Formulations (liquid, chewable, tablet)
- Palatability affects compliance
- Dosing cups/syringes for accuracy

## Newborn Assessment

**Apgar Score:**
| Component | 0 | 1 | 2 |
|-----------|---|---|---|
| Appearance | Blue/pale | Acrocyanosis | Pink |
| Pulse | Absent | <100 | ≥100 |
| Grimace | None | Grimace | Cry/cough |
| Activity | Limp | Some flexion | Active |
| Respirations | Absent | Slow/irregular | Crying |

**Newborn Physical Exam:**
| System | Key Findings |
|--------|--------------|
| Skin | Jaundice, rashes, birthmarks |
| Head | Fontanelles, sutures, molding |
| Eyes | Red reflex (Leukocoria = emergency) |
| Heart | Murmurs, femoral pulses |
| Hips | Barlow, Ortolani |
| Genitalia | Ambiguous, testes descended |

**Common Newborn Issues:**
| Issue | Approach |
|-------|----------|
| Physiologic jaundice | Bilirubin monitoring, phototherapy if high |
| Hypoglycemia | Feeding, glucose monitoring |
| Poor feeding | Assessment, lactation support |
| Sepsis risk factors | Observation or workup |

## Family-Centered Care

**Communication Principles:**
| Principle | Implementation |
|-----------|----------------|
| Include the child | Age-appropriate explanations |
| Respect parents | Partners in care |
| Cultural sensitivity | Family beliefs and practices |
| Shared decision-making | Present options, respect choices |

**Difficult Conversations:**
| Topic | Approach |
|-------|----------|
| Developmental delay | Frame as "concern," not diagnosis |
| Chronic illness | Honest, hopeful, supportive |
| Poor prognosis | Clear, compassionate |
| Child abuse concern | Non-judgmental, mandatory reporting |

## Documentation

**Pediatric Note Elements:**

*Well-Child Visit:*
| Section | Content |
|---------|---------|
| Interval history | Since last visit |
| Review of systems | Development, behavior, safety |
| Growth data | Weight, height, HC, BMI |
| Physical exam | Age-appropriate |
| Developmental assessment | Milestones, screening |
| Immunizations | Given today, next due |
| Anticipatory guidance | Safety, nutrition, development |
| Plan | Follow-up, referrals |

*Sick Visit:*
- Chief complaint with duration
- Detailed HPI with sick contacts
- Targeted exam
- Assessment with reasoning
- Management plan with return precautions`,
      keyTerms: [
        { term: 'ASQ-3', definition: 'Ages and Stages Questionnaire; parent-completed developmental screening tool' },
        { term: 'M-CHAT-R', definition: 'Modified Checklist for Autism in Toddlers; screening tool for autism risk' },
        { term: 'Ortolani/Barlow', definition: 'Hip examination maneuvers to detect developmental dysplasia of the hip' },
        { term: 'ORS', definition: 'Oral Rehydration Solution; balanced electrolyte solution for treating dehydration' },
      ],
      clinicalNotes: 'In young febrile infants (<60 days), the combination of normal WBC, negative UA, and well appearance can identify low-risk infants, but this requires careful clinical judgment. When in doubt, a complete sepsis workup is safer.',
    },
    4: {
      level: 4,
      summary: 'Advanced pediatrics clerkship performance integrates complex diagnostic reasoning for pediatric presentations, subspecialty coordination, advocacy for child health, and strategic preparation for pediatric or family medicine careers.',
      explanation: `## Complex Pediatric Presentations

**Failure to Thrive:**

*Definitions:*
| Criterion | Threshold |
|-----------|-----------|
| Weight | <5th percentile or crossing 2 major lines |
| Weight-for-length | <5th percentile |
| Weight velocity | Deceleration |

*Evaluation:*
| Category | Examples |
|----------|----------|
| Inadequate intake | Feeding problems, neglect |
| Inadequate absorption | Celiac, CF, allergies |
| Increased losses | Vomiting, diarrhea |
| Increased demand | Cardiac, pulmonary, infection |
| Defective utilization | Metabolic disorders |

*Workup:*
- Detailed feeding history
- Dietary analysis
- Basic labs (CBC, CMP, lead, TSH)
- Consider: Celiac panel, sweat chloride, stool studies

**Recurrent Fever:**

*Periodic Fever Syndromes:*
| Syndrome | Features |
|----------|----------|
| PFAPA | Periodic, pharyngitis, adenitis, aphthous ulcers |
| FMF | Mediterranean ancestry, serositis |
| HIDS | Elevated IgD, GI symptoms |
| TRAPS | TNF receptor mutation, prolonged episodes |

*Workup:*
- Fever diary
- CBC with differential during episodes
- Inflammatory markers (CRP, ESR)
- Consider genetics

**Limp/Leg Pain:**

*Age-Based Differential:*
| Age | Consider |
|-----|----------|
| Toddler | Toddler's fracture, septic joint, transient synovitis |
| School age | Transient synovitis, Legg-Calve-Perthes, infection |
| Adolescent | SCFE, Osgood-Schlatter, tumors |

*Red Flags:*
- Fever + limp = septic joint until proven otherwise
- Night pain = concerning for malignancy
- Refusal to bear weight
- Point tenderness

## Subspecialty Integration

**Common Consultations:**

| Subspecialty | Common Reasons |
|--------------|----------------|
| Cardiology | Murmur evaluation, syncope |
| Neurology | Seizures, developmental delay |
| GI | FTT, constipation, GI bleeding |
| Pulmonology | Asthma, chronic cough |
| Endocrinology | Growth concerns, diabetes |
| Heme/Onc | Cytopenias, lymphadenopathy |

**When to Refer:**
| Finding | Referral |
|---------|----------|
| Innocent murmur | Reassure, no referral |
| Pathologic murmur signs | Cardiology |
| Febrile seizure (simple) | Usually no referral |
| Afebrile seizure | Neurology |
| Growth <3rd percentile | Often endocrine |
| Crossing growth curves | Evaluate, then refer |

## Child Abuse Recognition

**Physical Abuse Indicators:**
| Finding | Concern Level |
|---------|---------------|
| Bruises in non-mobile infant | High |
| Patterned injuries | High |
| Multiple injuries of different ages | High |
| Injuries inconsistent with history | High |
| Delay in seeking care | Moderate |

**Mandatory Reporting:**
- Suspicion sufficient - do not need proof
- Report to child protective services
- Document thoroughly and objectively
- Support family appropriately

**Documentation:**
- Exact quotes when possible
- Detailed injury descriptions
- Body diagrams
- Photography if possible
- Differential diagnosis

## Advocacy and Social Determinants

**Social Determinants of Child Health:**
| Factor | Impact |
|--------|--------|
| Poverty | Nutrition, housing, healthcare access |
| Education | Health literacy, future outcomes |
| Neighborhood | Safety, environmental exposures |
| Family structure | Support, stability |
| ACEs | Long-term health outcomes |

**ACEs (Adverse Childhood Experiences):**
- Abuse (physical, emotional, sexual)
- Neglect (physical, emotional)
- Household dysfunction (divorce, incarceration, mental illness, substance abuse, domestic violence)
- Dose-response relationship with adult disease

**Advocacy Opportunities:**
| Level | Examples |
|-------|----------|
| Patient | Resource connection, care coordination |
| Community | School health, lead prevention |
| Policy | Children's health insurance, gun safety |

## Residency Preparation

**Pediatrics Match:**

| Factor | Strategy |
|--------|----------|
| Step scores | Competitive performance |
| Grades | Honors in pediatrics |
| Letters | Pediatric faculty |
| Research | Pediatric topic |
| Leadership | Child-focused activities |
| Personal statement | Genuine pediatric passion |

**Subspecialty Interest Development:**
| Subspecialty | Clerkship Exposure |
|--------------|-------------------|
| Neonatology | NICU time |
| Cardiology | Murmur clinics |
| Oncology | Inpatient service |
| Emergency | ED shifts |
| Adolescent | Teen clinic |

**Combined Residency Consideration:**
| Program | Duration | Focus |
|---------|----------|-------|
| Med-Peds | 4 years | Combined expertise |
| Peds-PM&R | 5 years | Rehabilitation |
| Peds-Psych | 5 years | Mental health |

## Advanced Skills

**Pediatric Procedures:**
| Procedure | Student Role |
|-----------|--------------|
| Venipuncture | Learn/perform |
| IV placement | Learn/perform |
| Lumbar puncture | Observe/assist |
| Suprapubic tap | Observe |
| Bladder catheterization | Learn/perform |

**Point-of-Care Testing:**
| Test | Clinical Use |
|------|--------------|
| Rapid strep | Pharyngitis |
| Rapid flu | ILI during season |
| RSV | Bronchiolitis |
| Urine dip | UTI screening |
| Glucometer | Diabetic management |`,
      keyTerms: [
        { term: 'PFAPA', definition: 'Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis; common periodic fever syndrome in children' },
        { term: 'SCFE', definition: 'Slipped Capital Femoral Epiphysis; hip disorder in adolescents requiring urgent orthopedic referral' },
        { term: 'ACEs', definition: 'Adverse Childhood Experiences; traumatic events in childhood linked to later health problems' },
        { term: 'transient synovitis', definition: 'Self-limited hip inflammation, often post-viral; must distinguish from septic joint' },
      ],
      clinicalNotes: 'Any limp with fever in a child requires urgent evaluation to exclude septic arthritis. The Kocher criteria (fever, non-weight bearing, ESR >40, WBC >12,000) help stratify risk but should not delay orthopedic consultation when suspicion is high.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pediatrics clerkship engagement encompasses child health policy, global pediatric perspectives, medical education scholarship, and leadership in advancing pediatric healthcare quality and equity.',
      explanation: `## Pediatric Health Policy

**Key Policy Issues:**
| Issue | Context |
|-------|---------|
| CHIP/Medicaid | Insurance coverage for children |
| School health | Services, requirements |
| Immunization mandates | State-level requirements |
| Gun violence prevention | Public health approach |
| Climate and child health | Environmental impacts |

**Advocacy Skills:**
| Level | Actions |
|-------|---------|
| Patient | Connect to resources, navigate systems |
| Practice | Quality improvement, access |
| Community | Coalition building, education |
| Policy | Legislative advocacy, testimony |

**Professional Organizations:**
| Organization | Focus |
|--------------|-------|
| AAP | Policy, education, advocacy |
| APA | Academic pediatrics |
| NAPNAP | Nurse practitioners |
| ABP | Board certification |

## Global Child Health

**Global Burden of Childhood Disease:**
| Cause | Global Impact |
|-------|---------------|
| Pneumonia | Leading infectious cause of death |
| Diarrhea | Second leading cause |
| Malaria | Major tropical disease burden |
| Malnutrition | Underlying factor in ~45% of deaths |
| Neonatal conditions | Major mortality contributor |

**Sustainable Development Goals:**
| Goal | Pediatric Relevance |
|------|---------------------|
| SDG 2 | Zero hunger |
| SDG 3 | Good health and well-being |
| SDG 4 | Quality education |
| SDG 6 | Clean water and sanitation |

**Global Health Competencies:**
| Domain | Knowledge/Skills |
|--------|------------------|
| Burden of disease | Major causes of child mortality |
| Health systems | Access, workforce, resources |
| Social determinants | Poverty, education, environment |
| Cultural competence | Diverse practices, beliefs |
| Sustainability | Capacity building, partnership |

## Medical Education Leadership

**Teaching Opportunities:**
| Activity | Development |
|----------|-------------|
| Peer teaching | Small groups, skills |
| Patient education | Health literacy |
| Curriculum development | Novel approaches |
| Simulation | Skills teaching |

**Education Scholarship:**
| Type | Examples |
|------|----------|
| Innovation | New curricula, methods |
| Investigation | Education research |
| Integration | Reviews, synthesis |
| Application | Implementation |

**Academic Pediatrics Pathway:**
| Stage | Focus |
|-------|-------|
| Student | Teaching, curriculum involvement |
| Resident | Chief resident, teaching awards |
| Fellow | Education track |
| Faculty | Clinician-educator career |

## Quality and Safety

**Pediatric Quality Measures:**
| Domain | Examples |
|--------|----------|
| Immunizations | Up-to-date rates |
| Preventive care | Well-child completion |
| Chronic disease | Asthma control |
| Safety | Medication errors, falls |

**High Reliability in Pediatrics:**
| Principle | Application |
|-----------|-------------|
| Sensitivity to operations | Awareness of safety issues |
| Reluctance to simplify | Complex thinking |
| Preoccupation with failure | Near-miss analysis |
| Deference to expertise | Team input valued |
| Resilience | Learning from events |

**Pediatric Safety Concerns:**
| Issue | Mitigation |
|-------|------------|
| Weight-based dosing | Automated calculations |
| Developmental level | Age-appropriate approaches |
| Communication | Family engagement |
| Handoffs | Structured tools |

## Research in Pediatrics

**Unique Considerations:**
| Issue | Approach |
|-------|----------|
| Consent/assent | Age-appropriate processes |
| Minimal risk | Careful benefit-risk |
| Incentives | Appropriate for age |
| Privacy | Adolescent considerations |
| Vulnerable population | Extra protections |

**Research Areas:**
| Field | Focus |
|-------|-------|
| Developmental | Early childhood, autism |
| Neonatal | Prematurity outcomes |
| Behavioral | ADHD, mental health |
| Implementation | Guideline translation |
| Health services | Access, quality, outcomes |

## Future Directions

**Emerging Issues:**
| Topic | Relevance |
|-------|-----------|
| Screen time | Development, obesity |
| E-cigarettes | Adolescent epidemic |
| Gender identity | Supportive care |
| COVID-19 effects | Long-term impacts |
| Climate change | Child health impacts |

**Technology in Pediatrics:**
| Technology | Application |
|------------|-------------|
| Telemedicine | Access to specialists |
| Digital health | Monitoring, education |
| AI | Diagnosis support |
| Genomics | Precision medicine |

**Workforce Considerations:**
| Challenge | Response |
|-----------|----------|
| Shortage in some areas | Training pipeline |
| Subspecialty maldistribution | Geographic incentives |
| Burnout | Wellness programs |
| Scope changes | Team-based care |

## Professionalism and Wellness

**Challenges in Pediatrics:**
| Challenge | Coping Strategy |
|-----------|----------------|
| Sick children | Process emotions, debrief |
| Family dynamics | Professional boundaries |
| End-of-life | Support systems |
| Abuse cases | Team support, self-care |

**Building Resilience:**
| Practice | Implementation |
|----------|----------------|
| Self-awareness | Recognize stress signals |
| Self-care | Exercise, sleep, nutrition |
| Connection | Peer support, mentorship |
| Meaning | Purpose in work |

**Professional Development:**
| Activity | Benefit |
|----------|---------|
| Mentorship | Guidance, sponsorship |
| Networking | Opportunities, support |
| Leadership training | Career advancement |
| Scholarship | Academic identity |`,
      keyTerms: [
        { term: 'CHIP', definition: 'Children\'s Health Insurance Program; federal-state program providing health coverage to children' },
        { term: 'SDG', definition: 'Sustainable Development Goals; UN framework including child health targets' },
        { term: 'high reliability organization', definition: 'Organization achieving consistent safety through specific cultural and operational characteristics' },
        { term: 'assent', definition: 'Agreement to participate in research from a child who cannot give legal consent' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Child health policy advocacy is a professional responsibility in pediatrics
2. Global child health perspectives inform understanding of disease burden and priorities
3. Medical education scholarship is valued in academic pediatric careers
4. Quality improvement and safety require pediatric-specific approaches
5. Pediatric research has unique ethical considerations for this vulnerable population
6. Emerging issues like screen time and climate change are becoming central to practice
7. Professional wellness is essential given the emotional demands of pediatric care`,
    },
  },

  media: [
    {
      id: 'developmental-milestones',
      type: 'diagram',
      filename: 'developmental-milestones.svg',
      title: 'Developmental Milestones by Age',
      description: 'Visual guide to key developmental achievements at each age',
    },
    {
      id: 'pediatric-vital-signs',
      type: 'diagram',
      filename: 'pediatric-vital-signs.svg',
      title: 'Pediatric Vital Signs by Age',
      description: 'Normal ranges for vital signs across pediatric ages',
    },
  ],

  citations: [
    {
      id: 'aap-bright-futures',
      type: 'website',
      title: 'Bright Futures: Guidelines for Health Supervision',
      source: 'American Academy of Pediatrics',
      url: 'https://brightfutures.aap.org/',
    },
    {
      id: 'nelson-pediatrics',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'rotations-surgery', targetType: 'concept', relationship: 'sibling', label: 'Surgery Rotation' },
    { targetId: 'rotations-internal-medicine', targetType: 'concept', relationship: 'sibling', label: 'Internal Medicine Rotation' },
    { targetId: 'child-development', targetType: 'concept', relationship: 'related', label: 'Child Development' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-rotations', 'medical-education', 'pediatrics'],
    keywords: ['pediatrics clerkship', 'child health', 'development', 'well-child care'],
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
  contributors: ['Biological Self Content Team'],
};

export default pediatricsRotation;
