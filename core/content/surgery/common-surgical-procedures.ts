/**
 * Common Surgical Procedures
 *
 * Overview of frequently performed surgical procedures, what they involve,
 * indications, and general expectations for patients.
 */

import { EducationalContent } from '../types';

export const commonSurgicalProcedures: EducationalContent = {
  id: 'surgery-common-procedures',
  type: 'concept',
  name: 'Common Surgical Procedures',
  alternateNames: ['Surgical Operations', 'Common Operations', 'Frequently Performed Surgeries'],

  levels: {
    1: {
      level: 1,
      summary: 'There are many types of surgery, from small procedures that take minutes to major operations. Understanding common surgeries helps you know what to expect.',
      explanation: `Surgery is when doctors make cuts in your body to fix a problem. Some surgeries are small and you go home the same day. Others are bigger and you stay in the hospital.

**Common Surgeries You Might Hear About:**

**Belly (Abdominal) Surgeries:**
- **Appendectomy**: Removing the appendix when it gets infected
- **Gallbladder removal**: Taking out the gallbladder when it causes problems
- **Hernia repair**: Fixing a bulge where tissue pushes through a weak spot

**Bone and Joint Surgeries:**
- **Hip replacement**: Putting in a new hip joint when the old one is worn out
- **Knee replacement**: Same for the knee
- **Broken bone repair**: Putting bones back together with screws or plates

**Heart and Chest Surgeries:**
- **Heart bypass**: Making new paths for blood when arteries are blocked
- **Pacemaker**: Putting in a small device to help your heart beat regularly

**Other Common Surgeries:**
- **Cesarean section (C-section)**: Delivering a baby through the belly
- **Tonsillectomy**: Removing tonsils in the back of the throat
- **Cataract surgery**: Fixing cloudy lenses in the eyes

**What to Expect:**
1. You will meet the surgeon to talk about the surgery
2. Tests may be done to make sure you're healthy enough
3. You'll get instructions on preparing (like not eating before)
4. The surgery is done in an operating room
5. You recover and go home when it's safe`,
      keyTerms: [
        { term: 'surgery', definition: 'A medical procedure where doctors cut into your body to fix a problem' },
        { term: 'surgeon', definition: 'A doctor who is specially trained to do operations' },
        { term: 'operating room', definition: 'A special clean room in the hospital where surgeries are done' },
        { term: 'outpatient', definition: 'When you go home the same day as your surgery' },
      ],
      analogies: [
        'Surgery is like car repair - sometimes you need to open up the hood to fix what is broken inside.',
        'A hernia repair is like patching a weak spot in a tire so it does not bulge out.',
      ],
      examples: [
        'If your appendix gets infected and swollen (appendicitis), you need an appendectomy to remove it before it bursts.',
        'If your hip joint is worn out from arthritis, a hip replacement gives you a new joint so you can walk without pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Common surgical procedures include abdominal, orthopedic, cardiovascular, and gynecological operations, each with specific indications, techniques, and recovery expectations.',
      explanation: `## Categories of Common Surgeries

### Abdominal/Gastrointestinal Surgery

| Procedure | Indication | Approach | Recovery |
|-----------|------------|----------|----------|
| Appendectomy | Appendicitis | Laparoscopic/open | 1-3 weeks |
| Cholecystectomy | Gallstones, cholecystitis | Laparoscopic | 1-2 weeks |
| Hernia repair | Inguinal, umbilical, incisional | Open or laparoscopic | 2-6 weeks |
| Colectomy | Cancer, diverticulitis | Open or laparoscopic | 4-6 weeks |
| Bariatric surgery | Severe obesity | Laparoscopic | 4-6 weeks |

### Orthopedic Surgery

| Procedure | Indication | Notes | Recovery |
|-----------|------------|-------|----------|
| Total hip replacement | Osteoarthritis, fracture | Metal/plastic joint | 6-12 weeks |
| Total knee replacement | Osteoarthritis | Metal/plastic joint | 6-12 weeks |
| ACL reconstruction | Ligament tear | Graft from own tissue | 6-9 months |
| Spinal fusion | Instability, deformity | Hardware + bone graft | 3-6 months |
| Fracture fixation | Broken bones | Plates, screws, rods | Variable |

### Cardiovascular Surgery

| Procedure | Indication | Approach | Recovery |
|-----------|------------|----------|----------|
| CABG (bypass) | Coronary artery disease | Sternotomy | 6-12 weeks |
| Valve replacement | Stenosis, regurgitation | Open or TAVR | 6-12 weeks |
| Pacemaker/ICD | Arrhythmia | Minor incision | 1-2 weeks |
| Aneurysm repair | AAA, thoracic | Open or endovascular | 4-8 weeks |

### Gynecological/Obstetric Surgery

| Procedure | Indication | Approach | Recovery |
|-----------|------------|----------|----------|
| C-section | Obstetric complications | Abdominal | 4-6 weeks |
| Hysterectomy | Fibroids, cancer | Vaginal, lap, or open | 4-8 weeks |
| D&C | Miscarriage, bleeding | Vaginal | 1-2 days |
| Tubal ligation | Sterilization | Laparoscopic | 1 week |

### ENT/Head and Neck

| Procedure | Indication | Notes | Recovery |
|-----------|------------|-------|----------|
| Tonsillectomy | Recurrent infections | Outpatient | 1-2 weeks |
| Thyroidectomy | Nodules, cancer | Neck incision | 1-2 weeks |
| Cochlear implant | Severe hearing loss | Major | 4-6 weeks |

### Eye Surgery

| Procedure | Indication | Notes | Recovery |
|-----------|------------|-------|----------|
| Cataract removal | Cataracts | Outpatient, local | 1-2 weeks |
| LASIK | Vision correction | Laser | Days |
| Glaucoma surgery | High eye pressure | Various types | 2-4 weeks |

## Understanding Surgical Approaches

**Open Surgery:**
- Traditional large incision
- Direct visualization
- May be necessary for complex cases

**Laparoscopic (Minimally Invasive):**
- Small incisions (0.5-1 cm)
- Camera and instruments through ports
- Less pain, faster recovery
- Not suitable for all procedures

**Robotic Surgery:**
- Surgeon controls robotic arms
- Enhanced precision and visualization
- Similar recovery to laparoscopic

**Endoscopic:**
- Through natural openings
- No external incisions
- Examples: colonoscopy, hysteroscopy`,
      keyTerms: [
        { term: 'laparoscopic', definition: 'Surgery using small incisions and a camera; minimally invasive' },
        { term: 'CABG', definition: 'Coronary Artery Bypass Graft - heart bypass surgery', pronunciation: 'cabbage' },
        { term: 'sternotomy', definition: 'Incision through the breastbone to access the heart' },
        { term: 'AAA', definition: 'Abdominal Aortic Aneurysm - bulging of the main artery in the belly' },
        { term: 'endovascular', definition: 'Surgery performed inside blood vessels using catheters' },
      ],
      analogies: [
        'Laparoscopic surgery is like performing a repair through keyholes instead of opening a door.',
      ],
    },
    3: {
      level: 3,
      summary: 'Common surgical procedures are selected based on evidence-based indications, with technique choice influenced by patient factors, anatomical considerations, and surgeon expertise within established practice guidelines.',
      explanation: `## Evidence-Based Surgical Indications

### Cholecystectomy

**Indications:**
- Symptomatic cholelithiasis (biliary colic)
- Acute cholecystitis
- Gallstone pancreatitis
- Porcelain gallbladder (cancer risk)

**Approach Selection:**
- Laparoscopic: Standard of care (90%+ of cases)
- Open: Severe inflammation, unclear anatomy, intraoperative conversion

**Critical View of Safety:**
- Two structures (cystic duct, cystic artery) entering gallbladder
- Lower third of gallbladder dissected off liver bed
- Reduces bile duct injury from 0.6% to <0.1%

### Appendectomy

**Diagnosis:**
- Right lower quadrant pain (McBurney's point)
- Migration of pain, anorexia, low-grade fever
- Elevated WBC, CT findings (>6mm diameter, periappendiceal inflammation)
- Alvarado score for clinical prediction

**Approach:**
- Laparoscopic preferred (especially women, obese)
- Open acceptable, particularly for perforation

**Non-Operative Management:**
- Emerging option for uncomplicated appendicitis
- Antibiotics alone: ~70% success at 1 year
- Higher recurrence rate, but avoids surgery

### Hernia Repair

**Inguinal Hernia Classification:**
- Direct: Medial to inferior epigastric vessels (Hesselbach's triangle)
- Indirect: Lateral to inferior epigastric vessels (through internal ring)
- Femoral: Below inguinal ligament (highest strangulation risk)

**Repair Options:**
| Technique | Approach | Mesh | Best For |
|-----------|----------|------|----------|
| Lichtenstein | Open | Yes | Primary inguinal |
| TAPP | Laparoscopic | Yes | Bilateral, recurrent |
| TEP | Laparoscopic | Yes | Bilateral, recurrent |
| Shouldice | Open | No | Young, mesh concerns |

**Mesh vs. Non-Mesh:**
- Mesh reduces recurrence (1% vs. 10-15%)
- Chronic pain similar (10-12%)
- Infection risk slightly higher with mesh

### Joint Replacement

**Hip Replacement Indications:**
- Osteoarthritis with failed conservative treatment
- Femoral neck fracture
- Avascular necrosis
- Rheumatoid arthritis

**Approach Options:**
| Approach | Muscles Cut | Recovery | Dislocation Risk |
|----------|-------------|----------|------------------|
| Posterior | External rotators | Standard | Higher |
| Anterior | None (intermuscular) | Faster | Lower |
| Lateral | Abductors | Standard | Moderate |

**Bearing Surfaces:**
- Metal-on-polyethylene: Most common
- Ceramic-on-ceramic: Younger patients, lowest wear
- Metal-on-metal: Largely abandoned (metallosis)

### Cardiac Surgery

**CABG Indications:**
- Left main disease >50%
- Three-vessel disease (especially with diabetes)
- Two-vessel with proximal LAD
- Failed PCI

**Graft Selection:**
- LIMA to LAD: Gold standard (90%+ patency at 10 years)
- SVG: Secondary conduits (50-60% patency at 10 years)
- RIMA, radial artery: Arterial grafts for younger patients

**On-Pump vs. Off-Pump:**
- No clear survival benefit for off-pump
- Off-pump: Less renal injury, stroke, blood transfusion
- On-pump: More complete revascularization, better for unstable

### Bariatric Surgery

**Indications (NIH Criteria):**
- BMI ≥40
- BMI ≥35 with obesity-related comorbidity
- Failed nonsurgical weight loss

**Procedure Comparison:**
| Procedure | EWL | Diabetes Remission | Mechanism |
|-----------|-----|-------------------|-----------|
| Gastric sleeve | 60-70% | 60-70% | Restrictive |
| RYGB | 70-80% | 80-85% | Restrictive + malabsorptive |
| Duodenal switch | 75-85% | 95% | Most malabsorptive |

EWL = Excess Weight Loss`,
      keyTerms: [
        { term: 'critical view of safety', definition: 'Technique during cholecystectomy requiring clear identification of cystic structures to prevent bile duct injury' },
        { term: 'TAPP', definition: 'Transabdominal Preperitoneal hernia repair - laparoscopic approach entering the peritoneal cavity' },
        { term: 'TEP', definition: 'Totally Extraperitoneal hernia repair - laparoscopic approach staying outside peritoneum' },
        { term: 'LIMA', definition: 'Left Internal Mammary Artery - preferred conduit for bypass to LAD' },
        { term: 'RYGB', definition: 'Roux-en-Y Gastric Bypass - gold standard metabolic/bariatric surgery' },
      ],
      clinicalNotes: 'Laparoscopic cholecystectomy bile duct injury rate is 0.5-0.6% but decreases with routine Critical View of Safety documentation. Tokyo Guidelines (TG18) stratify acute cholecystitis severity for management.',
    },
    4: {
      level: 4,
      summary: 'Surgical decision-making integrates patient-specific risk assessment, procedure-specific outcomes data, and shared decision-making within multidisciplinary frameworks to optimize surgical care.',
      explanation: `## Surgical Outcomes and Quality Metrics

### Risk-Adjusted Outcomes

**ACS NSQIP Calculator:**
Predicts 30-day outcomes based on:
- Demographics
- Comorbidities
- Functional status
- Procedure-specific factors

**Outcomes Predicted:**
- Mortality
- Major complications
- Specific complications (SSI, pneumonia, VTE, etc.)
- Discharge destination
- Return to OR

### Procedure-Specific Quality Metrics

**Cholecystectomy:**
| Metric | Target |
|--------|--------|
| Bile duct injury | <0.3% |
| Conversion rate | <5% (elective) |
| Same-day discharge | >50% (uncomplicated) |
| 30-day readmission | <5% |

**Joint Replacement:**
| Metric | Target |
|--------|--------|
| 90-day mortality | <0.5% |
| Deep SSI | <1% |
| 90-day readmission | <7% |
| Revision at 5 years | <2% |
| Patient-reported outcomes | Per benchmark |

**Bariatric Surgery:**
| Metric | Target |
|--------|--------|
| 30-day mortality | <0.1% |
| Leak rate | <1% |
| 30-day readmission | <5% |
| % achieving >50% EWL | >70% |

### Complex Decision-Making Scenarios

**Cholecystectomy in Cirrhosis:**
- Child-Pugh A: Standard approach
- Child-Pugh B: Increased risk, careful selection
- Child-Pugh C: Prohibitive risk (mortality 50-80%)
- Subtotal cholecystectomy as bailout option

**Cancer Surgery Principles:**
- Margin status (R0, R1, R2)
- Lymph node harvest adequacy
- Neoadjuvant vs. adjuvant therapy
- Multidisciplinary tumor board review

**Emergency vs. Elective:**
| Factor | Emergency | Elective |
|--------|-----------|----------|
| Mortality | 2-10x higher | Baseline |
| Complications | Higher | Lower |
| LOS | Longer | Shorter |
| Optimization | Limited | Possible |

### Perioperative Optimization

**Cardiac Risk Reduction:**
Per ACC/AHA Guidelines:
- RCRI stratification
- Functional capacity assessment
- Consider stress testing only if will change management
- Beta-blocker continuation (not initiation before surgery)
- Statin continuation

**Pulmonary Risk Reduction:**
- Smoking cessation (8 weeks ideal)
- Incentive spirometry training
- Optimization of COPD/asthma
- CPAP for OSA patients

**Nutritional Optimization:**
- Albumin <3.0 g/dL: Increased risk
- Pre-operative supplementation (7-14 days)
- Immunonutrition (arginine, omega-3) for major abdominal surgery

### Surgical Safety

**WHO Surgical Safety Checklist:**
Three phases:
1. **Sign In** (before induction)
   - Patient identity
   - Site marked
   - Allergies, airway, blood loss risk

2. **Time Out** (before incision)
   - Team introductions
   - Confirm procedure, site, positioning
   - Critical steps anticipated
   - Antibiotic prophylaxis

3. **Sign Out** (before leaving OR)
   - Procedure performed confirmed
   - Instrument/sponge counts
   - Specimen labeling
   - Post-op concerns

**Impact:** 30-40% reduction in complications and mortality

### Antibiotic Prophylaxis

**Timing:** Within 60 minutes of incision (120 min for vancomycin, fluoroquinolones)

**Selection:**
| Procedure | Antibiotic | Dose |
|-----------|------------|------|
| Clean (hernia, vascular) | Cefazolin | 2g IV |
| Clean-contaminated (GI, GU) | Cefazolin | 2g IV |
| Colorectal | Cefazolin + Metronidazole | 2g + 500mg |
| Cardiac | Cefazolin or Cefuroxime | 2g |
| Orthopedic hardware | Cefazolin | 2g |

**Redosing:** Q4h (cefazolin) or after 1.5L blood loss

**Duration:** Single dose or <24 hours (cardiac: <48 hours)

### Venous Thromboembolism Prophylaxis

**Risk Stratification (Caprini Score):**
| Score | Risk Level | Prophylaxis |
|-------|------------|-------------|
| 0 | Very low | Ambulation |
| 1-2 | Low | Mechanical |
| 3-4 | Moderate | LMWH/UFH + mechanical |
| ≥5 | High | LMWH/UFH + mechanical, extended |

**Extended Prophylaxis (4 weeks):**
- Major abdominal/pelvic cancer surgery
- Major orthopedic surgery (hip/knee)
- High Caprini score`,
      keyTerms: [
        { term: 'NSQIP', definition: 'National Surgical Quality Improvement Program - risk-adjusted outcomes database and quality improvement initiative' },
        { term: 'R0 resection', definition: 'Complete resection with microscopically negative margins in cancer surgery' },
        { term: 'Caprini score', definition: 'VTE risk assessment tool incorporating multiple patient and procedural factors' },
        { term: 'immunonutrition', definition: 'Nutritional supplementation with immune-modulating nutrients (arginine, omega-3, nucleotides)' },
        { term: 'WHO Surgical Safety Checklist', definition: 'Standardized safety tool with proven reduction in surgical complications and mortality' },
      ],
      clinicalNotes: 'NSQIP participation enables risk-adjusted benchmarking against national cohorts. Surgical site infection bundle compliance (appropriate antibiotic, hair removal, normothermia, glucose control) reduces SSI by 40%.',
    },
    5: {
      level: 5,
      summary: 'Contemporary surgical practice integrates precision surgery, minimally invasive innovations, enhanced recovery protocols, and value-based care while addressing disparities and evolving toward organ-sparing approaches.',
      explanation: `## Surgical Innovation and Evidence

### Minimally Invasive Evolution

**Current Landscape (2024-2025):**
- Natural orifice surgery (NOTES): Limited adoption
- Single-incision laparoscopy (SILS): Niche applications
- Robotic surgery: Expanding but cost-effectiveness debated
- Endoluminal approaches: Growing for GI, bariatric

**Robotic Surgery Evidence:**
| Procedure | Evidence Level | Benefit |
|-----------|----------------|---------|
| Prostatectomy | Strong | Oncologic, functional |
| Colorectal | Moderate | Low conversion rate |
| Cardiac | Emerging | Limited access procedures |
| Bariatric | Limited | No clear advantage |
| General | Variable | Ergonomic benefits |

### Organ Preservation Strategies

**Rectal Cancer Watch-and-Wait:**
- After complete clinical response to neoadjuvant chemoradiation
- 30-40% achieve complete response
- 70-80% organ preservation with surveillance
- Salvage surgery for regrowth

**Active Surveillance in Thyroid Cancer:**
- Select papillary microcarcinomas (<1 cm)
- Low progression rate (2-10% at 10 years)
- Avoids surgery complications

**Focal Therapy in Prostate Cancer:**
- HIFU, cryotherapy, focal ablation
- Emerging with improved imaging (mpMRI)
- Preserves quality of life

### Enhanced Recovery Implementation

**ERAS Society Guidelines by Specialty:**
- Colorectal: Most established
- Hepatopancreatobiliary
- Gynecology
- Cardiac
- Orthopedic
- Emergency surgery

**Core ERAS Elements:**
| Phase | Key Interventions |
|-------|-------------------|
| Pre-op | Counseling, carbohydrate loading, no prolonged fasting |
| Intra-op | Goal-directed fluids, normothermia, opioid-sparing |
| Post-op | Early feeding, early mobilization, multimodal analgesia |

**Outcomes:**
- 30-50% reduction in LOS
- 30% reduction in complications
- No increase in readmissions
- Cost savings

### Precision Surgery

**Intraoperative Navigation:**
- Image-guided surgery (hepatic tumors)
- Augmented reality overlay
- Fluorescence imaging (ICG)
- Sentinel lymph node mapping

**Genomic-Guided Surgery:**
- Oncotype DX (breast): Guides need for chemotherapy
- Tumor profiling: Personalized treatment planning
- Hereditary syndromes: Prophylactic surgery decisions

**Artificial Intelligence Applications:**
- Surgical phase recognition
- Critical view of safety confirmation
- Margin assessment (ex vivo)
- Post-operative risk prediction

### Value-Based Surgical Care

**Bundled Payments:**
- Joint replacement: Most mature
- Cardiac surgery: Expanding
- Includes 90-day episode costs
- Quality metrics tied to payment

**Cost-Effectiveness Considerations:**
| Innovation | Cost | Value |
|------------|------|-------|
| Robotic surgery | High | Variable by procedure |
| ERAS protocols | Low | High (reduced LOS) |
| Laparoscopic approach | Moderate | High (faster recovery) |
| Enhanced monitoring | Moderate | Uncertain |

### Health Disparities in Surgery

**Documented Disparities:**
- Access to specialty surgery
- Minimally invasive approach utilization
- Post-operative complications
- Cancer staging at presentation
- Surgical mortality

**Contributing Factors:**
- Insurance status
- Hospital resources
- Geographic location
- Implicit bias
- Social determinants of health

**Interventions:**
- Regionalization of complex surgery
- Navigation programs
- Telemedicine consultation
- Quality improvement initiatives

### Emerging Surgical Technologies

**Robotic Platforms:**
- da Vinci X/Xi (Intuitive)
- Medtronic Hugo
- CMR Versius
- Single-port systems
- Haptic feedback development

**Augmented/Mixed Reality:**
- Pre-operative planning
- Intraoperative navigation
- Surgical training
- Remote mentoring

**3D Printing:**
- Patient-specific anatomic models
- Surgical planning
- Custom implants
- Training simulation

### Surgical Training Evolution

**Competency-Based Assessment:**
- Milestones and EPAs
- Simulation certification
- Objective assessment tools
- Reduced reliance on case numbers

**Simulation:**
- Box trainers
- Virtual reality
- Cadaveric courses
- Robotic simulation

**Work Hour Considerations:**
- Duty hour limits
- Fatigue management
- Continuity of care balance
- Optimal training duration

### Future Directions

**Short-term (1-5 years):**
- Expanded ERAS protocols
- Robotic cost reduction
- AI decision support
- Precision surgical oncology

**Medium-term (5-10 years):**
- Autonomous robotic assistance
- Personalized recovery pathways
- Remote surgical assistance
- Biomarker-guided surgery

**Long-term (>10 years):**
- Fully robotic procedures
- Regenerative medicine integration
- Nanotechnology applications
- Organ restoration vs. replacement`,
      keyTerms: [
        { term: 'watch-and-wait', definition: 'Surveillance strategy after complete clinical response avoiding immediate surgery; established for rectal cancer' },
        { term: 'ICG fluorescence', definition: 'Indocyanine green imaging for real-time tissue perfusion and lymphatic mapping' },
        { term: 'NOTES', definition: 'Natural Orifice Transluminal Endoscopic Surgery - scarless surgery through natural openings' },
        { term: 'bundled payment', definition: 'Single payment for entire episode of care including surgery, hospitalization, and recovery' },
        { term: 'EPA', definition: 'Entrustable Professional Activity - unit of competency-based surgical training assessment' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Robotic surgery has no proven survival benefit in most indications but may improve functional outcomes in prostatectomy
2. ERAS compliance >70% associated with best outcomes
3. ICG fluorescence can reduce anastomotic leak by visualizing perfusion
4. Watch-and-wait in rectal cancer requires rigorous surveillance protocol
5. Regionalization of complex surgery (pancreatic, esophageal) improves outcomes
6. Surgical disparities persist even after adjusting for patient factors`,
    },
  },

  media: [
    {
      id: 'surgical-approaches-comparison',
      type: 'diagram',
      filename: 'surgical-approaches.svg',
      title: 'Surgical Approaches Comparison',
      description: 'Open vs. laparoscopic vs. robotic surgery comparison',
    },
    {
      id: 'common-procedures-overview',
      type: 'diagram',
      filename: 'common-procedures-infographic.svg',
      title: 'Common Surgical Procedures Overview',
      description: 'Visual guide to frequently performed surgeries by body system',
    },
  ],

  citations: [
    {
      id: 'schwartz-principles',
      type: 'textbook',
      title: 'Schwartz\'s Principles of Surgery',
      authors: ['Brunicardi, F.C.', 'et al.'],
      source: '11th Edition, McGraw-Hill',
    },
    {
      id: 'acs-nsqip',
      type: 'website',
      title: 'ACS NSQIP Surgical Risk Calculator',
      source: 'American College of Surgeons',
      url: 'https://riskcalculator.facs.org/',
    },
    {
      id: 'eras-guidelines',
      type: 'website',
      title: 'ERAS Society Guidelines',
      source: 'Enhanced Recovery After Surgery Society',
      url: 'https://erassociety.org/guidelines/',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Pre-Operative Evaluation' },
    { targetId: 'surgery-minimally-invasive', targetType: 'topic', relationship: 'related', label: 'Minimally Invasive Surgery' },
    { targetId: 'surgery-post-operative-care', targetType: 'topic', relationship: 'related', label: 'Post-Operative Care' },
  ],

  tags: {
    systems: ['surgical'],
    topics: ['procedures', 'operations', 'surgery'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default commonSurgicalProcedures;
