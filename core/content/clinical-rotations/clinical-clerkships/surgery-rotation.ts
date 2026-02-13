/**
 * Surgery Clerkship - Clinical Rotations
 *
 * Educational content for the surgery clinical clerkship,
 * covering OR experience, perioperative care, and surgical skills.
 */

import { EducationalContent } from '../../types';

export const surgeryClerkship: EducationalContent = {
  id: 'clerkship-surgery',
  type: 'concept',
  name: 'Surgery Clerkship',
  alternateNames: ['Surgical Rotation', 'General Surgery Clerkship', 'Surgical Core'],

  levels: {
    1: {
      level: 1,
      summary: 'The surgery clerkship teaches medical students about surgical care, including operations, preparing patients for surgery, and caring for them after surgery.',
      explanation: `## What Is Surgery?

Surgery is a medical specialty where doctors operate to treat diseases, injuries, and other conditions. Surgeons use special tools and techniques to fix problems inside the body.

## Where You Will Work

**In the Hospital:**
- Operating rooms (where surgeries happen)
- Surgical wards (where patients stay after surgery)
- Emergency department (trauma cases)
- Recovery areas

**In the Clinic:**
- Pre-operative clinics (before surgery)
- Post-operative clinics (after surgery)

## What You Will Do

**Daily Activities:**
- See patients before surgery to check their health
- Watch and help with operations
- Check on patients after surgery
- Change bandages and check wounds
- Write notes about patient progress

**Things You Will Learn:**
- How to prepare patients for surgery
- Basic surgical skills like tying knots and suturing
- How to recognize surgical problems
- How to write surgical notes
- Operating room rules and safety

## Common Surgeries You\'ll See

- Appendectomy (removing appendix)
- Gallbladder removal
- Hernia repair
- Breast surgery
- Colon surgery
- Trauma surgery

## Why This Rotation Matters

Even if you don\'t want to be a surgeon, this rotation is important because:
- Many patients need surgery during their lives
- You\'ll work with surgeons in almost every specialty
- Understanding surgery helps you care for surgical patients
- It teaches you to think and act quickly

## Operating Room Rules

**Before Entering:**
- Wear special clean clothes (scrubs)
- Wash hands thoroughly
- Put on mask, cap, and special shoes

**In the Operating Room:**
- Stay in assigned areas
- Don\'t touch anything that\'s sterile (super clean)
- Follow the surgeon\'s instructions
- Stay focused and attentive

## Tips for Doing Well

- Read about each surgery before watching it
- Know your patients\' history and why they need surgery
- Practice knot tying and suturing when you can
- Be helpful and enthusiastic
- Ask questions at appropriate times
- Learn the names of surgical instruments`,
      keyTerms: [
        { term: 'surgeon', definition: 'A doctor who performs operations to treat diseases and injuries' },
        { term: 'operating room', definition: 'A special room in the hospital where surgeries are performed' },
        { term: 'suture', definition: 'Stitches used to close a wound or surgical incision' },
        { term: 'sterile', definition: 'Completely free of germs and bacteria, necessary for surgery' },
      ],
      analogies: [
        'The operating room is like a special kitchen - everyone has a specific job and cleanliness is extremely important.',
        'Learning surgery is like learning a craft - it takes practice, patience, and learning from experts.',
      ],
      examples: [
        'You might watch a surgeon remove a gallbladder using small cameras and instruments through tiny incisions.',
        'You could help check on a patient who just had appendix surgery, making sure they are recovering well.',
      ],
      patientCounselingPoints: [
        'Medical students may be present during surgery to learn, but experienced doctors perform all procedures.',
        'Before surgery, patients should ask questions about what to expect during recovery.',
      ],
    },
    2: {
      level: 2,
      summary: 'The surgery clerkship provides exposure to operative and perioperative care, developing skills in patient evaluation, sterile technique, and understanding of surgical disease management across general surgery and subspecialties.',
      explanation: `## Clerkship Overview

**Duration:** 6-8 weeks
**Components:**
| Component | Duration | Focus |
|-----------|----------|-------|
| General surgery | 4-6 weeks | Core surgical principles |
| Subspecialty | 1-2 weeks | Specialty exposure |
| Emergency/Trauma | 1-2 weeks | Acute surgical care |

## Daily Workflow

**Pre-Operative:**
| Task | Description |
|------|-------------|
| History and physical | Surgical H&P with focus on operative risk |
| Informed consent | Procedure, risks, benefits, alternatives |
| Pre-op orders | NPO status, antibiotics, VTE prophylaxis |
| Patient preparation | Marking site, skin prep, positioning |

**Operating Room:**
- Scrubbing and gowning
- Instrument familiarity
- Assist as directed
- Maintain sterile field

**Post-Operative:**
- Recovery monitoring
- Pain management
- Wound care
- Discharge planning

## Core Surgical Skills

**Basic Skills:**
- Hand tying and instrument tying
- Simple suturing (interrupted, running)
- Wound dressing
- Staple placement and removal
- Drain care

**Advanced Exposure:**
- Laparoscopic camera holding
- Retraction
- Tissue handling
- Electrocautery use

## Common Surgical Procedures

**General Surgery:**
| Procedure | Indication |
|-----------|------------|
| Appendectomy | Appendicitis |
| Cholecystectomy | Gallstones, cholecystitis |
| Herniorrhaphy | Inguinal, ventral, umbilical hernias |
| Colectomy | Colon cancer, diverticulitis, IBD |
| Mastectomy/Lumpectomy | Breast cancer |
| Thyroidectomy | Thyroid nodules, cancer |

**Emergency Surgery:**
- Trauma laparotomy
- Exploratory surgery
- Damage control surgery
- Emergency airway management

## Pre-Operative Assessment

**Risk Assessment:**
| System | Key Considerations |
|--------|-------------------|
| Cardiac | Functional capacity, risk indices |
| Pulmonary | COPD, smoking, OSA |
| Renal | Creatinine, hydration |
| Hepatic | Child-Pugh classification |
| Hematologic | Coagulation, anticoagulation |

**ASA Classification:**
- I: Healthy patient
- II: Mild systemic disease
- III: Severe systemic disease
- IV: Severe systemic disease constant threat to life
- V: Moribund patient
- VI: Brain dead organ donor

## Post-Operative Care

**Immediate Post-Op:**
- Airway, breathing, circulation
- Pain control
- Nausea management
- Early mobilization

**Daily Assessment:**
- Vital signs trends
- Pain scores
- Wound inspection
- I/O and electrolytes
- Bowel function
- Complication screening

**Common Complications:**
| Complication | Signs | Management |
|--------------|-------|------------|
| Infection | Fever, erythema, drainage | Antibiotics, drainage |
| Ileus | Nausea, distension, no flatus | NPO, NG tube, time |
| DVT/PE | Leg pain, swelling, dyspnea | Anticoagulation |
| Bleeding | Drop in H/H, tachycardia | Transfusion, reoperation |

## Study Priorities

**High-Yield Topics:**
- Pre-operative evaluation
- Common post-op complications
- Fluid and electrolyte management
- Surgical infections
- Trauma basics
- Acute abdomen

**Resources:**
- Surgical Recall
- NMS Surgery
- UWorld Step 2 CK
- Online videos of common procedures`,
      keyTerms: [
        { term: 'perioperative', definition: 'The period before, during, and after surgery' },
        { term: 'NPO', definition: 'Nothing by mouth (nil per os) - required before anesthesia' },
        { term: 'VTE prophylaxis', definition: 'Measures to prevent blood clots (venous thromboembolism)' },
        { term: 'acute abdomen', definition: 'Sudden severe abdominal pain requiring urgent surgical evaluation' },
      ],
      analogies: [
        'The OR team is like a pit crew at a race - everyone has a specific role and timing is critical.',
        'Surgical training is like martial arts - you progress through levels of skill and responsibility.',
      ],
      examples: [
        'You perform a pre-operative evaluation on a patient scheduled for gallbladder surgery, assessing cardiac risk.',
        'During a trauma case, you help hold retractors while the surgeon explores the abdomen for injuries.',
      ],
      patientCounselingPoints: [
        'Patients should understand why they need surgery, the risks, and what recovery will involve.',
        'Pain after surgery is normal and can be managed with medications - patients should communicate their pain level.',
      ],
    },
    3: {
      level: 3,
      summary: 'Surgery clerkship mastery requires understanding of surgical decision-making, operative techniques, perioperative physiology, and the principles of surgical disease management including trauma and critical care.',
      explanation: `## Surgical Decision-Making

**Indications for Surgery:**
| Category | Examples |
|----------|----------|
| Emergency | Trauma, perforated viscus, strangulated hernia |
| Urgent | Appendicitis, cholecystitis, abscess |
| Elective | Hernia repair, cancer surgery |
| Prophylactic | Mastectomy for BRCA carriers |

**Risk-Benefit Analysis:**
- Patient goals and preferences
- Operative risk stratification
- Non-operative alternatives
- Expected outcomes and quality of life

## Surgical Techniques

**Open Surgery:**
- Incision planning
- Tissue handling principles
- Hemostasis techniques
- Wound closure

**Minimally Invasive Surgery:**
| Approach | Applications |
|----------|--------------|
| Laparoscopic | Gallbladder, appendix, hernia, colon |
| Robotic | Prostate, gynecologic, cardiac |
| Endoscopic | GI procedures, ENT |

**Surgical Anatomy:**
- Vascular territories
- Nerve preservation
- Planes of dissection
- Critical structures identification

## Perioperative Physiology

**Stress Response:**
- Catecholamine surge
- Hypermetabolism
- Immunosuppression
- Fluid shifts

**Fluid Management:**
| Fluid Type | Indications |
|------------|-------------|
| Crystalloid | Maintenance, resuscitation |
| Colloid | Volume expansion |
| Blood products | Hemorrhage, coagulopathy |

**Electrolyte Abnormalities:**
- Common in surgical patients
- NPO status effects
- GI losses
- Third spacing

## Trauma Surgery

**Primary Survey (ABCDE):**
| Step | Assessment | Intervention |
|------|------------|--------------|
| A - Airway | Patent, protected | Intubation if needed |
| B - Breathing | Breath sounds, O2 sat | Tube thoracostomy |
| C - Circulation | Pulses, BP, bleeding | Hemorrhage control |
| D - Disability | GCS, pupils | Neuroprotection |
| E - Exposure | Complete exam | Prevent hypothermia |

**Secondary Survey:**
- Head-to-toe examination
- AMPLE history
- Imaging as indicated
- Re-evaluation

**Damage Control Surgery:**
- Initial control of bleeding/contamination
- Temporary closure
- ICU resuscitation
- Definitive repair later

## Surgical Infections

**Wound Classification:**
| Class | Description | Infection Risk |
|-------|-------------|----------------|
| Clean | No GI/respiratory entry | <2% |
| Clean-contaminated | Controlled entry | 2-5% |
| Contaminated | Spillage, open wounds | 5-15% |
| Dirty | Pus, perforated viscus | >15% |

**Surgical Site Infection Prevention:**
- Pre-op antibiotics (within 60 minutes)
- Hair clipping (not shaving)
- Glycemic control
- Normothermia
- Oxygenation

## Surgical Oncology

**Cancer Surgery Principles:**
- Complete tumor removal
- Adequate margins
- Lymph node evaluation
- Preservation of function

**Multidisciplinary Care:**
| Specialist | Role |
|------------|------|
| Medical oncologist | Chemotherapy |
| Radiation oncologist | Radiation therapy |
| Surgical oncologist | Tumor resection |
| Pathologist | Diagnosis, margins |
| Radiologist | Staging |

## Documentation

**Operative Note:**
- Pre-op diagnosis
- Post-op diagnosis
- Procedure performed
- Surgeons and assistants
- Anesthesia type
- Findings
- Procedure description
- Specimens
- Estimated blood loss
- Complications
- Condition at end

**Post-Op Orders:**
- Activity level
- Diet progression
- Pain management
- Antibiotics
- DVT prophylaxis
- Monitoring parameters`,
      keyTerms: [
        { term: 'damage control surgery', definition: 'Abbreviated laparotomy to control bleeding and contamination, with definitive repair after resuscitation' },
        { term: 'AMPLE history', definition: 'Allergies, Medications, Past illness, Last meal, Events of injury' },
        { term: 'third spacing', definition: 'Fluid shift from intravascular to interstitial spaces, causing edema and hypovolemia' },
        { term: 'surgical margins', definition: 'Tissue surrounding tumor removed during cancer surgery' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced surgery clerkship performance integrates sophisticated understanding of surgical physiology, evidence-based operative decision-making, quality improvement, and strategic preparation for surgical careers or surgical collaboration in other specialties.',
      explanation: `## Advanced Surgical Physiology

**Metabolic Response to Surgery:**
| Phase | Duration | Characteristics |
|-------|----------|-----------------|
| Ebb | 0-24 hours | Hypometabolism, decreased CO |
| Flow | 2-5 days | Hypermetabolism, catabolism |
| Anabolic | Days-weeks | Recovery, tissue repair |

**Nutritional Support:**
| Indicator | Enteral | Parenteral |
|-----------|---------|------------|
| Timeline | Within 24-48 hours | When EN contraindicated |
| Benefits | Gut function, immunity | Caloric provision |
| Contraindications | Bowel obstruction, ileus | None absolute |

**Enhanced Recovery After Surgery (ERAS):**
- Pre-op optimization
- Minimal fasting
- Multimodal analgesia
- Early mobilization
- Early feeding

## Evidence-Based Surgery

**Surgical Trials:**
| Landmark Trial | Finding |
|----------------|---------|
| CROSS | Neoadjuvant chemoradiation for esophageal cancer |
| CRASH-2 | TXA reduces mortality in trauma |
| ACOSOG Z0011 | Selective lymph node dissection in breast cancer |

**Outcomes Research:**
- NSQIP data
- Comparing operative approaches
- Quality metrics
- Cost-effectiveness

**Surgical Innovation:**
- IDEAL framework for device evaluation
- Minimally invasive adoption
- Robotic surgery outcomes

## Surgical Critical Care

**Sepsis in Surgical Patients:**
- Source identification
- Source control (drainage, debridement)
- Antibiotic therapy
- Supportive care

**Abdominal Compartment Syndrome:**
| Finding | Significance |
|---------|--------------|
| Bladder pressure >20 mmHg | Diagnosis |
| Organ dysfunction | Indication for decompression |
| Decompressive laparotomy | Treatment |

**Nutrition in Critical Illness:**
- Early enteral nutrition
- Immunonutrition
- Refeeding syndrome prevention
- Metabolic monitoring

## Surgical Quality and Safety

**Quality Improvement:**
| Initiative | Focus |
|------------|-------|
| SCIP | Surgical care improvement |
| NSQIP | Outcomes measurement |
| Time-out | Wrong site prevention |
| Surgical safety checklist | Team communication |

**Morbidity and Mortality Conference:**
- Case review
- Error analysis
- Systems improvement
- Education

**Disclosure and Professionalism:**
- Error disclosure to patients
- Peer review processes
- Maintenance of certification

## Subspecialty Exposure

**Surgical Specialties:**
| Specialty | Key Clerkship Experiences |
|-----------|---------------------------|
| Cardiothoracic | CABG, valve surgery, lung resection |
| Vascular | Aneurysm repair, bypass grafting |
| Transplant | Kidney, liver procurement and implant |
| Pediatric | Congenital anomalies, neonatal surgery |
| Plastic | Reconstruction, wound care |
| Orthopedic | Fractures, joint replacement |
| Neurosurgery | Brain tumors, spine surgery |
| Urology | Prostatectomy, nephrectomy |

## Career Development

**Surgical Residency:**
- General surgery: 5 years
- Subspecialty fellowship: 1-3 years
- Research years (optional)

**Competitive Factors:**
| Factor | Importance |
|--------|------------|
| Step scores | High |
| Clinical grades | Critical |
| Letters | Essential |
| Research | Valuable |
| Away rotations | Important |

**Non-Operative Surgical Careers:**
- Academic surgery
- Surgical research
- Global surgery
- Surgical administration
- Surgical education`,
      keyTerms: [
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - multimodal perioperative care protocol' },
        { term: 'source control', definition: 'Physical intervention to eliminate infection source (drainage, debridement)' },
        { term: 'multimodal analgesia', definition: 'Using multiple analgesic agents and techniques to improve pain control' },
        { term: 'IDEAL framework', definition: 'Structured approach to evaluating and reporting surgical innovations' },
      ],
      clinicalNotes: `Clinical Pearl: Surgery requires both technical skill and clinical judgment. The clerkship is where you begin to develop both. Focus on understanding WHY operations are performed, not just HOW. Understanding surgical indications and contraindications is valuable regardless of your eventual specialty.

Expert Tip: Learn to be a valuable assistant before you learn to operate. Anticipating the surgeon\'s needs, understanding anatomy, and maintaining a sterile field are foundational skills. The best surgeons first learned to be the best assistants.`,
    },
    5: {
      level: 5,
      summary: 'Professional mastery of the surgery clerkship encompasses surgical education scholarship, advanced technical skill development, systems leadership in surgical care, and contribution to surgical science and patient safety.',
      explanation: `## Surgical Expertise Development

**Technical Skill Acquisition:**
| Stage | Characteristics | Timeline |
|-------|-----------------|----------|
| Novice | Rule-based, conscious | Early training |
| Advanced beginner | Situational elements | 1-2 years |
| Competent | Goal-directed, prioritization | 2-3 years |
| Proficient | Holistic understanding | 3-5 years |
| Expert | Intuitive, automatic | 5+ years |
| Master | Transcends rules | 10+ years |

**Deliberate Practice in Surgery:**
- Simulation training
- Cadaveric dissection
- Mentored cases
- Video review
- Self-assessment

**Surgical Coaching:**
- Expert observation
- Specific feedback
- Repeated practice
- Progress tracking

## Surgical Education Scholarship

**Curriculum Development:**
| Innovation | Application |
|------------|-------------|
| Simulation | Technical skills, crisis management |
| Competency-based | Milestone assessment |
| Team training | Communication, safety |
| Remote learning | Didactics, access |

**Assessment Science:**
- OSATS for technical skills
- 360-degree evaluations
- Portfolio development
- EPA-based progression

**Education Research:**
- Simulation effectiveness
- Curriculum outcomes
- Learning analytics
- Retention studies

## Systems and Leadership

**Operating Room Management:**
- Scheduling optimization
- Resource utilization
- Turnover efficiency
- Cost containment

**Surgical Quality Science:**
| Domain | Application |
|--------|-------------|
| Process measures | Compliance with protocols |
| Outcome measures | Complications, mortality |
| Patient experience | Satisfaction, communication |
| Value | Outcome per cost |

**Global Surgery:**
- Access to surgical care
- Workforce development
- Infrastructure building
- Research collaboration

## Innovation in Surgery

**Technological Advances:**
| Technology | Application |
|------------|-------------|
| Artificial intelligence | Decision support, imaging |
| Robotics | Precision, ergonomics |
| 3D printing | Custom implants, models |
| Augmented reality | Navigation, training |
| Nanotechnology | Drug delivery, imaging |

**Translational Research:**
- Basic science to clinical application
- Device development
- Clinical trials
- Implementation science

**Personalized Surgery:**
- Genomic profiling
- Risk stratification
- Customized approaches
- Predictive modeling

## Surgical Ethics and Professionalism

**Complex Decisions:**
| Scenario | Ethical Considerations |
|----------|----------------------|
| High-risk surgery | Beneficence vs. non-maleficence |
| Futile surgery | Resource allocation |
| Informed refusal | Patient autonomy |
| Conflict of interest | Disclosure, management |

**Surgeon Wellness:**
| Challenge | Strategy |
|-----------|----------|
| Burnout | Systemic and personal interventions |
| Physical strain | Ergonomics, technique modification |
| Second victim | Support after adverse events |
| Moral injury | Peer support, ethics consultation |

## Contributing to the Field

**Academic Surgery Pathways:**
| Track | Focus |
|-------|-------|
| Clinician-scientist | Research and practice |
| Clinician-educator | Teaching and curriculum |
| Clinician-administrator | Leadership and systems |
| Private practice | Community service |

**Professional Organizations:**
- American College of Surgeons
- Specialty societies
- Research consortia
- Global surgery initiatives

**Legacy Building:**
- Mentorship
- Innovation
- Research contributions
- Educational impact`,
      keyTerms: [
        { term: 'OSATS', definition: 'Objective Structured Assessment of Technical Skill - standardized surgical skills evaluation' },
        { term: 'EPA', definition: 'Entrustable Professional Activity - unit of professional practice that can be entrusted to trainees' },
        { term: 'second victim', definition: 'Healthcare provider harmed by involvement in an unanticipated adverse patient event' },
        { term: 'moral injury', definition: 'Psychological harm from actions that violate moral beliefs' },
      ],
      clinicalNotes: `Expert Perspective: Surgery is a unique blend of technical precision, clinical judgment, and human connection. Expert surgeons demonstrate:

1. Mastery of technical skills combined with sound decision-making
2. Deep understanding of surgical disease and patient physiology
3. Effective communication with patients and teams
4. Commitment to continuous improvement and safety
5. Resilience and wellness maintenance
6. Contribution to advancing the field

The transition from medical student to surgical resident requires not just knowledge and skills, but the right temperament - the ability to make decisions under pressure, accept responsibility for outcomes, and maintain composure in crisis. These qualities are cultivated throughout the clerkship and beyond.`,
    },
  },

  media: [
    {
      id: 'or-setup-diagram',
      type: 'diagram',
      filename: 'or-setup-diagram.svg',
      title: 'Operating Room Setup',
      description: 'Typical operating room layout and sterile zones',
    },
    {
      id: 'surgical-knots-guide',
      type: 'diagram',
      filename: 'surgical-knots-guide.svg',
      title: 'Basic Surgical Knots',
      description: 'Illustration of common surgical knots and suturing techniques',
    },
  ],

  citations: [
    {
      id: 'surgical-recall',
      type: 'textbook',
      title: 'Surgical Recall',
      authors: ['Blackbourne LH'],
      source: 'Lippincott Williams & Wilkins',
    },
    {
      id: 'acs-resources',
      type: 'website',
      title: 'Medical Student Resources',
      source: 'American College of Surgeons',
      url: 'https://www.facs.org',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'clerkship-internal-medicine', targetType: 'concept', relationship: 'sibling', label: 'Internal Medicine Clerkship' },
    { targetId: 'clerkship-pediatrics', targetType: 'concept', relationship: 'sibling', label: 'Pediatrics Clerkship' },
    { targetId: 'guide-calling-consults', targetType: 'concept', relationship: 'related', label: 'Calling Consults' },
  ],

  tags: {
    systems: ['medical-education'],
    topics: ['clinical-clerkships', 'surgery'],
    keywords: ['surgery', 'operating room', 'perioperative care', 'technical skills'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default surgeryClerkship;
