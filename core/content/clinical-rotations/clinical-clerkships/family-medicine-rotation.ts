/**
 * Family Medicine Clerkship - Clinical Rotations
 *
 * Educational content for the family medicine clinical clerkship,
 * covering comprehensive primary care, continuity, and whole-person care.
 */

import { EducationalContent } from '../../types';

export const familyMedicineClerkship: EducationalContent = {
  id: 'clerkship-family-medicine',
  type: 'concept',
  name: 'Family Medicine Clerkship',
  alternateNames: ['Family Practice Rotation', 'Primary Care Clerkship', 'FM Clerkship'],

  levels: {
    1: {
      level: 1,
      summary: 'The family medicine clerkship teaches medical students about primary care - caring for patients of all ages with all types of health problems, often building long-term relationships.',
      explanation: `## What Is Family Medicine?

Family medicine doctors are primary care doctors who take care of people of all ages - from babies to grandparents. They treat many different health problems and get to know their patients over time.

## Where You Will Work

**Outpatient Clinic:**
- Same-day appointments for sick visits
- Scheduled check-ups
- Chronic disease visits
- Preventive care

**Inpatient (some practices):**
- Hospital care for patients
- Nursing home visits
- Home visits (sometimes)

## What You Will Do

**Daily Activities:**
- See patients with different health concerns
- Help prevent disease through screenings
- Manage ongoing health problems
- Coordinate care with specialists
- Build relationships with patients and families

**Types of Visits:**
- Check-ups for healthy people
- Sick visits for colds, infections
- Follow-up for chronic problems
- Annual physicals
- Well-child visits

## Common Problems You\'ll See

**Acute Issues:**
- Colds and flu
- Ear infections
- Rashes
- Minor injuries
- Stomach problems

**Chronic Conditions:**
- Diabetes
- High blood pressure
- High cholesterol
- Asthma
- Depression

**Preventive Care:**
- Vaccinations
- Cancer screenings
- Lifestyle counseling
- Health risk assessment

## What Makes Family Medicine Special

- You see the whole family - parents, kids, grandparents
- You build long-term relationships
- You focus on keeping people healthy, not just treating sickness
- You coordinate care with specialists
- You treat the whole person, not just one disease

## The Family Medicine Team

**Doctors:**
- Family medicine physicians
- Residents (doctors in training)

**Other Team Members:**
- Nurses
- Medical assistants
- Pharmacists
- Social workers
- Care coordinators

## Tips for Doing Well

- Get to know your patients as people
- Listen carefully to their concerns
- Think about the whole person and their life
- Stay organized across many different problems
- Learn when to treat and when to refer
- Be comfortable with uncertainty
- Focus on prevention`,
      keyTerms: [
        { term: 'family medicine', definition: 'Medical specialty providing comprehensive care for people of all ages and genders' },
        { term: 'primary care', definition: 'First point of contact for health care, focusing on prevention and overall health' },
        { term: 'continuity of care', definition: 'Ongoing relationship between patient and doctor over time' },
        { term: 'preventive care', definition: 'Services to prevent disease or detect it early' },
      ],
      analogies: [
        'A family doctor is like a family friend who happens to be a health expert - they know your history and care about your whole life.',
        'Primary care is like home base in a game - you can go many places, but you always return for coordination and support.',
      ],
      examples: [
        'You might see a grandparent for diabetes check, then their grandchild for a school physical, understanding the family\'s health history.',
        'You could help a patient quit smoking by discussing their readiness and connecting them with resources.',
      ],
      patientCounselingPoints: [
        'Having a regular primary care doctor helps catch health problems early and keeps you healthier overall.',
        'Prevention is just as important as treatment - screenings and healthy habits prevent serious illness.',
      ],
    },
    2: {
      level: 2,
      summary: 'The family medicine clerkship develops comprehensive primary care skills across the lifespan, emphasizing prevention, chronic disease management, and coordination of care in outpatient and community settings.',
      explanation: `## Clerkship Overview

**Duration:** 4-6 weeks
**Settings:**
| Setting | Duration | Focus |
|---------|----------|-------|
| Outpatient clinic | 3-5 weeks | Primary care delivery |
| Inpatient (if applicable) | 1 week | Hospital care |
| Community (optional) | Variable | Public health, home visits |

## Patient Population

**Age Distribution:**
- Newborns to elderly
- Average panel: 2,000-3,000 patients
- Multiple generations of families

**Visit Types:**
| Type | Frequency | Examples |
|------|-----------|----------|
| Acute | 30-40% | URI, UTI, injuries |
| Chronic | 30-40% | Diabetes, HTN, depression |
| Preventive | 20-30% | Physicals, screenings |
| Procedures | 5-10% | Lesion removal, joint injections |

## Clinical Approach

**Patient-Centered Care:**
- Whole-person focus
- Life context integration
- Shared decision-making
- Health partnership

**Biopsychosocial Model:**
| Domain | Assessment |
|--------|------------|
| Biological | Disease, physiology |
| Psychological | Mental health, coping |
| Social | Family, work, community |

**Comprehensive Evaluation:**
- Age and gender-specific assessment
- Risk factor identification
- Lifestyle evaluation
- Family history integration

## Common Presentations

**Acute Care:**
| Presentation | Management |
|--------------|------------|
| Upper respiratory infection | Symptomatic care, red flag screening |
| Urinary tract infection | Antibiotics, prevention |
| Back pain | Conservative management, red flags |
| Skin complaints | Examination, common treatments |
| GI complaints | History, initial workup |

**Chronic Disease:**
| Condition | Key Management |
|-----------|----------------|
| Hypertension | Lifestyle, medication titration |
| Type 2 diabetes | Glycemic control, complications |
| Hyperlipidemia | Risk assessment, statins |
| Depression/anxiety | Screening, therapy, medications |
| Asthma | Control assessment, action plans |
| COPD | Symptom management, exacerbation |

**Women\'s Health:**
- Contraception counseling
- Prenatal care (some practices)
- Menopause management
- Cervical cancer screening
- Breast health

**Men\'s Health:**
- Prostate cancer screening (shared decision)
- Testicular examination
- Cardiovascular risk
- Erectile dysfunction

**Pediatrics:**
- Well-child visits
- Developmental surveillance
- Immunizations
- Common illnesses
- School and behavioral issues

## Preventive Services

**USPTF Recommendations:**
| Service | Population | Frequency |
|---------|------------|-----------|
| Blood pressure | Adults >18 | Annual |
| Lipid screening | Adults 40-75 | Periodic |
| Diabetes screening | Adults 35-70 with obesity | Every 3 years |
| Colonoscopy | Adults 45-75 | Every 10 years |
| Mammography | Women 50-74 | Every 2 years |
| Cervical cancer | Women 21-65 | Every 3-5 years |
| Lung cancer | Adults 50-80 with smoking | Annual CT |

**Immunizations:**
- Childhood series
- Adult updates (Tdap, shingles, pneumococcal)
- Travel vaccines
- Influenza annually

## Office Procedures

**Common Procedures:**
| Procedure | Indications |
|-----------|-------------|
| Skin biopsy | Suspicious lesions |
| Cryotherapy | Warts, precancerous lesions |
| Joint injection | Arthritis, bursitis |
| IUD placement | Contraception |
| Endometrial biopsy | Abnormal bleeding |
| Lesion excision | Skin lesions |
| Trigger point injection | Myofascial pain |
| Toenail procedures | Ingrown nails |

## Care Coordination

**Referral Management:**
| Specialty | Common Referrals |
|-----------|------------------|
| Cardiology | Chest pain, arrhythmia |
| GI | Colonoscopy, liver disease |
| Orthopedics | Fractures, joint replacement |
| Neurology | Headaches, seizures |
| Psychiatry | Complex mental health |

**Care Transitions:**
- Hospital follow-up
- Specialist integration
- Community resources
- Home care coordination

## Study Priorities

**High-Yield Topics:**
- USPSTF preventive guidelines
- Chronic disease management
- Acute complaint algorithms
- Office procedures
- Care coordination

**Resources:**
- AAFP resources
- UWorld Step 2 CK
- Case Files Family Medicine
- USPSTF guidelines`,
      keyTerms: [
        { term: 'patient-centered medical home', definition: 'Care delivery model emphasizing comprehensive, coordinated, accessible primary care' },
        { term: 'biopsychosocial model', definition: 'Approach considering biological, psychological, and social factors in health' },
        { term: 'continuity visit', definition: 'Follow-up appointment with a patient you have seen before' },
        { term: 'risk stratification', definition: 'Categorizing patients by disease risk to guide screening and treatment' },
      ],
      analogies: [
        'Family medicine is like being a conductor of an orchestra - you coordinate many different players for the best outcome.',
        'Preventive care is like car maintenance - regular check-ups prevent breakdowns.',
      ],
      examples: [
        'You manage a patient with diabetes, hypertension, and depression, coordinating medications and addressing lifestyle factors.',
        'You evaluate a patient with chest pain, determining they can be managed outpatient versus needing emergency department referral.',
      ],
      patientCounselingPoints: [
        'Building a relationship with a primary care doctor leads to better health outcomes and more personalized care.',
        'Lifestyle changes are often as effective as medications for preventing chronic disease.',
      ],
    },
    3: {
      level: 3,
      summary: 'Family medicine clerkship mastery requires expertise in undifferentiated symptoms, evidence-based preventive care, management of multiple chronic conditions, and leadership in team-based primary care delivery.',
      explanation: `## Diagnostic Approach

**Undifferentiated Symptoms:**
| Symptom | Differential Framework |
|---------|----------------------|
| Fatigue | Physical, psychological, lifestyle |
| Dizziness | Vestibular, cardiovascular, neurologic |
| Headache | Primary, secondary, red flags |
| Chest pain | Cardiac, pulmonary, GI, MSK |
| Abdominal pain | Anatomic, pathophysiologic |

**Diagnostic Reasoning:**
- Probability-based approach
- Threshold theory (test-treat)
- Watchful waiting
- Safety netting

**Red Flag Recognition:**
| Presentation | Red Flags | Action |
|--------------|-----------|--------|
| Headache | Thunderclap, neuro deficits | Emergency referral |
| Back pain | Saddle anesthesia, incontinence | Emergency imaging |
| Chest pain | EKG changes, elevated troponin | Emergency department |
| Abdominal pain | Peritoneal signs, hemodynamic | Surgical consult |

## Chronic Disease Management

**Hypertension:**
| Stage | BP Range | Management |
|-------|----------|------------|
| Elevated | 120-129/<80 | Lifestyle |
| Stage 1 | 130-139/80-89 | Lifestyle +/- meds |
| Stage 2 | >140/90 | Lifestyle + meds |

**Diabetes Management:**
- Glycemic targets (A1c <7% for most)
- Medication selection
- Complication screening
- Self-management education

**Cardiovascular Risk:**
- ASCVD risk calculator
- Statin therapy decisions
- Aspirin primary prevention (selective)
- Lifestyle modification

**Mental Health Integration:**
| Condition | Screening | Management |
|-----------|-----------|------------|
| Depression | PHQ-2/9 | Therapy, SSRI |
| Anxiety | GAD-7 | Therapy, SSRI/SNRI |
| ADHD | Vanderbilt | Stimulants, therapy |
| Substance use | SBIRT | Brief intervention, referral |

## Complex Patients

**Multimorbidity:**
| Challenge | Strategy |
|-----------|----------|
| Polypharmacy | Deprescribing, medication review |
| Conflicting guidelines | Patient-centered prioritization |
| Quality of life | Goals of care discussion |
| Care fragmentation | Care coordination |

**Geriatric Care:**
- Functional assessment
- Cognitive screening
- Fall risk
- Frailty
- Advance care planning

**Pediatric Complexity:**
- Developmental concerns
- Behavioral issues
- School problems
- Family dynamics

## Population Health

**Panel Management:**
| Strategy | Implementation |
|----------|----------------|
| Registry | Identify care gaps |
| Outreach | Recall for overdue services |
| Team-based | Staff roles for efficiency |
| Quality metrics | Track performance |

**Health Disparities:**
| Factor | Impact |
|--------|--------|
| Insurance | Access to care |
| Language | Health literacy |
| Culture | Health beliefs |
| Geography | Specialist access |

**Social Determinants:**
| Domain | Screening | Intervention |
|--------|-----------|--------------|
| Food insecurity | Hunger Vital Sign | Food pantry referral |
| Housing | Direct question | Social work |
| Transportation | Direct question | Community resources |
| Utilities | Direct question | Assistance programs |

## Team-Based Care

**Team Roles:**
| Role | Responsibilities |
|------|------------------|
| Physician | Complex diagnosis, procedures |
| NP/PA | Independent visits, follow-up |
| Nurse | Triage, education, screenings |
| MA | Rooming, vitals, vaccines |
| Pharmacist | Medication management |
| Social worker | Psychosocial needs |
| Care manager | Complex care coordination |

**Efficiency Strategies:**
- Standing orders
- Protocols for common conditions
- Group visits
- Telehealth
- EHR optimization

## Office-Based Research

**Quality Improvement:**
| Project Type | Example |
|--------------|---------|
| Process | Improving vaccination rates |
| Outcome | Reducing A1c in diabetes |
| Patient experience | Access improvement |

**Clinical Inquiry:**
- Case reports
- Chart reviews
- Community needs assessment`,
      keyTerms: [
        { term: 'undifferentiated symptoms', definition: 'Common symptoms that could represent many different diagnoses' },
        { term: 'safety netting', definition: 'Providing patients with instructions on when and how to seek further care' },
        { term: 'deprescribing', definition: 'Systematic process of reducing or stopping medications' },
        { term: 'panel management', definition: 'Proactive approach to managing care for an entire patient population' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced family medicine clerkship performance integrates sophisticated diagnostic reasoning, population health management, quality improvement leadership, and strategic preparation for primary care careers.',
      explanation: `## Advanced Clinical Reasoning

**Diagnostic Uncertainty:**
| Strategy | Application |
|----------|-------------|
| Watchful waiting | Appropriate for self-limited conditions |
| Therapeutic trial | Diagnosis by response to treatment |
| Serial testing | Re-evaluation over time |
| Referral | When diagnosis unclear |

**Cognitive Errors:**
| Error | Example | Mitigation |
|-------|---------|------------|
| Premature closure | Assuming URI when pneumonia | Reconsider if not improving |
| Attribution error | Blaming symptoms on known condition | Independent evaluation |
| Availability bias | Recent memorable case influence | Systematic approach |

**Clinical Prediction Rules:**
| Rule | Application |
|------|-------------|
| Wells DVT/PE | Pre-test probability |
| HEART score | Chest pain risk |
| Ottawa ankle/knee | X-ray indications |
| Centor/McIsaac | Strep likelihood |

## Advanced Chronic Disease

**Diabetes Complications:**
| Complication | Screening | Management |
|--------------|-----------|------------|
| Retinopathy | Annual eye exam | Ophthalmology |
| Nephropathy | Annual urine albumin | ACEi/ARB |
| Neuropathy | Monofilament exam | Gabapentin, duloxetine |
| Cardiovascular | Risk factor control | Statin, BP control |

**Heart Failure:**
- GDMT optimization
- Volume status assessment
- Medication titration
- End-stage planning

**COPD:**
- Spirometry interpretation
- GOLD staging
- Exacerbation management
- Oxygen qualification

**Mental Health Integration:**
- Collaborative care model
- Measurement-based care
- Psychiatric consultation
- Addiction medicine

## Population Health Management

**Risk Stratification:**
| Level | Characteristics | Intervention |
|-------|-----------------|--------------|
| Low risk | Healthy, few risk factors | Maintenance |
| Moderate risk | Chronic conditions | Disease management |
| High risk | Complex, frequent utilizers | Care management |
| Rising risk | Recently hospitalized | Transitional care |

**Quality Metrics:**
| Domain | Measures |
|--------|----------|
| Clinical | HEDIS measures |
| Patient experience | CAHPS |
| Cost | Total cost of care |
| Utilization | ED visits, hospitalizations |

**Value-Based Care:**
| Model | Incentives |
|-------|------------|
| PCMH | Care coordination payments |
| ACO | Shared savings |
| CPC+ | Comprehensive payments |

## Procedures and Skills

**Advanced Office Procedures:**
| Procedure | Training Level |
|-----------|----------------|
| Colposcopy | Fellowship or advanced training |
| Colonoscopy | Fellowship |
| Endoscopy | Fellowship |
| Skin flaps/grafts | Additional training |
| Ultrasound | CME training |

**Point-of-Care Testing:**
- Rapid strep
- Urinalysis
- HbA1c
- Lipid panel
- Influenza/COVID
- Pregnancy

## Practice Management

**Business of Medicine:**
| Area | Concepts |
|------|----------|
| Coding | E/M levels, procedures |
| Billing | Documentation requirements |
| RVUs | Productivity measurement |
| Contracts | Payer negotiations |

**Workflow Optimization:**
| Strategy | Implementation |
|----------|----------------|
| Team huddles | Daily planning |
| Pre-visit planning | Chart review |
| Rooming protocols | MA standardization |
| Inbox management | Triage protocols |

## Career Development

**Family Medicine Residency:**
- 3 years
- Broad training
- Procedure exposure
- Community emphasis

**Fellowships:**
| Fellowship | Focus |
|------------|-------|
| Sports medicine | MSK, exercise |
| Obstetrics | High-risk pregnancy |
| Geriatrics | Elder care |
| Hospice/palliative | End-of-life care |
| Academic | Teaching, research |
| Global health | International |

**Practice Models:**
| Model | Characteristics |
|-------|---------------|
| Solo practice | Independent |
| Group practice | Shared resources |
| FQHC | Underserved focus |
| Hospital-owned | Employed |
| Direct primary care | Membership model |

**Advanced Training:**
- CAQ (Certificate of Added Qualifications)
- Procedure workshops
- Leadership development
- Quality improvement`,
      keyTerms: [
        { term: 'HEDIS', definition: 'Healthcare Effectiveness Data and Information Set - quality measures for health plans' },
        { term: 'RVU', definition: 'Relative Value Unit - measure of physician work for billing' },
        { term: 'FQHC', definition: 'Federally Qualified Health Center - community health center serving underserved' },
        { term: 'collaborative care model', definition: 'Integrated behavioral health approach with psychiatric consultation' },
      ],
      clinicalNotes: `Clinical Pearl: Family medicine is uniquely positioned to provide whole-person, continuous care. The clerkship develops skills applicable to any specialty - the ability to evaluate undifferentiated symptoms, coordinate complex care, and build therapeutic relationships. Even specialists benefit from understanding the primary care perspective.

Expert Tip: Master the art of appropriate uncertainty. Primary care often involves managing patients without definitive diagnoses. Knowing when to watch and wait versus when to aggressively pursue diagnosis is a key skill. This requires understanding disease natural history, patient risk factors, and appropriate safety netting.`,
    },
    5: {
      level: 5,
      summary: 'Professional mastery of the family medicine clerkship encompasses primary care scholarship, leadership in healthcare transformation, advocacy for health equity, and contribution to advancing the discipline of family medicine.',
      explanation: `## Clinical Expertise

**Master Diagnostic Reasoning:**
| Expertise Level | Characteristics |
|-----------------|-----------------|
| Pattern recognition | Rapid identification of common presentations |
| Probabilistic | Accurate pre-test probability |
| Contextual | Integration of patient factors |
| Adaptive | Flexibility with atypical presentations |

**Complex Decision-Making:**
- Multiple comorbidities
- Competing priorities
- Limited evidence
- Patient preference integration

**Procedural Mastery:**
| Procedure | Expertise |
|-----------|-----------|
| Derm procedures | Complex closures, flaps |
| MSK injections | Advanced joint and soft tissue |
| Women\'s health | Complex contraception, procedures |
| Office ultrasound | Diagnostic applications |

## Primary Care Scholarship

**Education Research:**
| Area | Questions |
|------|-----------|
| Training | Competency development |
| Assessment | Workplace-based evaluation |
| Curriculum | Integration of new content |
| Pipeline | Recruitment strategies |

**Clinical Research:**
- Comparative effectiveness
- Implementation science
- Health services research
- Community-based participatory

**Health Policy:**
| Topic | Focus |
|-------|-------|
| Payment reform | Primary care investment |
| Workforce | Distribution, numbers |
| Scope of practice | Team-based care |
| Health equity | Access, disparities |

## Healthcare Transformation

**Advanced Primary Care:**
| Innovation | Application |
|------------|-------------|
| Medical neighborhoods | Care integration |
| Telehealth | Access expansion |
| Group visits | Efficiency, peer support |
| E-health | Patient engagement |

**Payment Models:**
| Model | Mechanism |
|-------|-----------|
| Global payment | Budget responsibility |
| Pay for performance | Quality incentives |
| Capitation | Population payment |
| Bundled payments | Episode-based |

**Digital Health:**
- Remote monitoring
- AI decision support
- Predictive analytics
- Patient portals
- Mobile health apps

## Health Equity Leadership

**Advocacy:**
| Level | Activities |
|-------|------------|
| Individual | Patient navigation |
| Practice | Access initiatives |
| Community | Partnership development |
| Policy | Legislative engagement |

**Social Mission:**
- Underserved practice
- Health disparities research
- Community health improvement
- Global health engagement

**Cultural Humility:**
| Element | Practice |
|---------|----------|
| Self-reflection | Recognize biases |
| Lifelong learning | Cultural knowledge |
| Patient as teacher | Individual context |
| Institutional | Systemic change |

## Professional Formation

**Identity as Family Physician:**
| Domain | Development |
|--------|-------------|
| Clinical | Breadth with depth |
| Relational | Long-term connections |
| Community | Social accountability |
| Leadership | System improvement |

**Wellness and Sustainability:**
| Challenge | Strategy |
|-----------|----------|
| Administrative burden | Team delegation |
| Panel size | Right-sizing |
| Complexity | Time allocation |
| Moral injury | Community, advocacy |

## Advancing the Field

**Academic Leadership:**
| Role | Contributions |
|------|---------------|
| Department chair | Vision, resources |
| Residency director | Training excellence |
| Research director | Scholarship |
| Clerkship director | Medical education |

**Professional Organizations:**
- AAFP (American Academy of Family Physicians)
- State chapters
- Special interest groups
- Global organizations

**Legacy:**
- Mentorship
- Research impact
- Policy change
- Community health improvement
- Trainee education`,
      keyTerms: [
        { term: 'medical neighborhood', definition: 'Coordinated network of specialists and services around a medical home' },
        { term: 'community-based participatory research', definition: 'Research conducted with community members as partners' },
        { term: 'social accountability', definition: 'Responsibility of medical schools and practices to meet community health needs' },
        { term: 'implementation science', definition: 'Study of methods to promote systematic uptake of evidence into practice' },
      ],
      clinicalNotes: `Expert Perspective: Family medicine is the foundation of healthcare systems worldwide. Expert family physicians demonstrate:

1. Breadth of knowledge across all ages and conditions
2. Depth in longitudinal relationship-based care
3. Diagnostic acumen for undifferentiated symptoms
4. Leadership in team-based, patient-centered care
5. Commitment to health equity and social accountability
6. Advocacy for patients and communities
7. Innovation in practice transformation
8. Wellness and sustainable practice

The family medicine clerkship offers a unique opportunity to understand healthcare from the patient\'s perspective - as a continuous journey rather than a series of episodes. This perspective serves all physicians, regardless of specialty, in understanding the whole patient and the context of their health.`,
    },
  },

  media: [
    {
      id: 'primary-care-team',
      type: 'diagram',
      filename: 'primary-care-team.svg',
      title: 'Patient-Centered Medical Home Team',
      description: 'Structure of team-based primary care',
    },
    {
      id: 'preventive-care-timeline',
      type: 'diagram',
      filename: 'preventive-care-timeline.svg',
      title: 'Preventive Care Timeline',
      description: 'Recommended preventive services by age',
    },
  ],

  citations: [
    {
      id: 'aafp-resources',
      type: 'website',
      title: 'Family Medicine Clerkship Curriculum',
      source: 'American Academy of Family Physicians',
      url: 'https://www.aafp.org',
      accessedDate: '2025-01-28',
    },
    {
      id: 'uspstf',
      type: 'website',
      title: 'U.S. Preventive Services Task Force Recommendations',
      source: 'USPSTF',
      url: 'https://www.uspreventiveservicestaskforce.org',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'clerkship-internal-medicine', targetType: 'concept', relationship: 'sibling', label: 'Internal Medicine Clerkship' },
    { targetId: 'clerkship-pediatrics', targetType: 'concept', relationship: 'sibling', label: 'Pediatrics Clerkship' },
    { targetId: 'guide-pre-rounding', targetType: 'concept', relationship: 'related', label: 'Pre-Rounding Guide' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-clerkships', 'family-medicine', 'primary-care'],
    keywords: ['family medicine', 'primary care', 'prevention', 'chronic disease', 'continuity'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default familyMedicineClerkship;
