import { LegacyEducationalContent } from '../../types';

export const fetalDevelopmentContent: LegacyEducationalContent = {
  id: 'fetal-development',
  title: 'Fetal Development',
  category: 'Embryology',
  subcategory: 'General Embryology',
  description: 'The growth and maturation of the fetus from week 9 until birth',
  levels: {
    1: {
      title: 'Introduction to Fetal Development',
      description: 'Learn about the amazing growth of the fetus from 9 weeks to birth',
      content: `
# Introduction to Fetal Development

## What is the Fetal Period?

The fetal period begins at **week 9** of development (after the embryonic period) and continues until birth. While the embryonic period (weeks 3-8) is when all major organs are formed, the fetal period is characterized by **growth and maturation** of those organs.

## Key Difference: Embryo vs Fetus

| Feature | Embryo | Fetus |
|---------|--------|-------|
| Time period | Week 3-8 | Week 9-birth |
| Main activity | Organ formation | Growth and maturation |
| Size | ~3 cm | ~50 cm at birth |
| Weight | ~1 gram | ~3,000+ grams at birth |
| Appearance | Clearly not human | Human features visible |

## Fetal Development by Trimester

### First Trimester (Weeks 9-12)

Week 9:
- Baby is now called a **fetus**
- Basic physiology established
- Fingers and toes distinct and separated
- External genitalia beginning to form (but not yet visible)

Weeks 10-12:
- Face becomes recognizably human
- Eyelids fuse (will remain closed until week ~27)
- Reflexes appear (grasping, sucking)
- Kidneys begin producing urine
- Red blood cell production begins
- By week 12: ~6 cm long, ~14 grams

**At 12 weeks, the risk of miscarriage drops significantly!**

### Second Trimester (Weeks 13-26)

Weeks 13-16:
- Fetal movements felt by mother (~16-20 weeks) = **quickening**
- Skin appears thin and transparent
- Lanugo (fine hair) covers body
- Fingernails begin to form
- Sex determinable by ultrasound

Weeks 17-20:
- Eyebrows and eyelashes appear
- Brown fat begins to form (for temperature regulation)
- Hearing begins to develop
- By week 20: ~20 cm, ~300-400 grams

Weeks 21-26:
- Skin becomes wrinkled (floating in amniotic fluid)
- Eyelashes present
- Responds to sounds
- Lungs begin producing surfactant (for breathing after birth)
- By week 24: Viability! ~23% survival with intensive care
- By week 26: ~35 cm, ~1,000 grams

### Third Trimester (Weeks 27-40)

Weeks 27-32:
- Eyelids open
- Rapid brain development
- Subcutaneous fat begins to accumulate
- Iron stores being built up
- By week 28: Viability >90% with good care
- By week 32: ~40 cm, ~1,700 grams

Weeks 33-36:
- Weight gain continues (~200-300g/week)
- Subcutaneous fat increases
- Vernix caseosa (cheesy coating) thickens
- Positioning for birth (usually head down)

Weeks 37-40 (Term):
- Full term reached at 37 weeks
- ~50 cm long, ~3,000-4,000 grams
- Ready for birth
- Due date: 40 weeks from last menstrual period

## Major Milestones

| Milestone | When It Happens |
|-----------|-----------------|
| Quickening (first movements felt) | Week 16-20 |
| Gender visible on ultrasound | Week 14-20 |
| Viability (potential to survive outside womb) | Week 24 |
| Eyelids open | Week 27 |
| Full term | Week 37 |
| Post-term | After week 42 |

## Fetal Structures

### Placenta
- Organ of exchange between mother and fetus
- Delivers oxygen and nutrients
- Removes waste products
- Produces hormones (hCG, progesterone, estrogen)

### Umbilical Cord
- Contains 2 arteries and 1 vein
- Connects fetus to placenta
- ~50-60 cm long at birth
- Transports blood between fetus and placenta

### Amniotic Fluid
- Cushions and protects fetus
- Allows movement for development
- Maintains temperature
- Produced by fetus (urine) and membranes
- ~800-1,000 mL at term

## Key Terms

- **Gestation**: Pregnancy
- **Gestational age**: Age from last menstrual period
- **Quickening**: First fetal movements felt by mother
- **Viability**: Ability to survive outside the uterus
- **Term**: Full-term pregnancy (37-42 weeks)
- **Premature**: Birth before 37 weeks
- **Post-term**: Pregnancy beyond 42 weeks

## Summary

The fetal period is primarily about:
1. **Growth**: From ~3 grams to ~3,000+ grams
2. **Maturation**: Organs become functional
3. **Differentiation**: Tissues and organs refine their structure
4. **Preparation**: Getting ready for life outside the womb

By the end of the fetal period, a fully developed baby is ready for birth and life outside the womb!
      `,
      flashcards: [
        {
          id: 'fd1',
          front: 'When does the fetal period begin?',
          back: 'The fetal period begins at week 9 of development and continues until birth.'
        },
        {
          id: 'fd2',
          front: 'What is the main difference between the embryonic and fetal periods?',
          back: 'The embryonic period (weeks 3-8) is when organs are formed. The fetal period (week 9-birth) is when organs grow and mature.'
        },
        {
          id: 'fd3',
          front: 'What is quickening?',
          back: 'Quickening is when the mother first feels fetal movements, typically between weeks 16-20.'
        },
        {
          id: 'fd4',
          front: 'What is fetal viability?',
          back: 'Fetal viability is the point at which the fetus could potentially survive outside the uterus, typically around week 24.'
        },
        {
          id: 'fd5',
          front: 'What does the umbilical cord contain?',
          back: 'The umbilical cord contains 2 arteries and 1 vein, carrying blood between the fetus and placenta.'
        }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'When does the fetal period officially begin?',
          options: ['Week 4', 'Week 8', 'Week 9', 'Week 12'],
          correctAnswer: 2,
          explanation: 'The fetal period begins at week 9 of development, after the embryonic period (weeks 3-8).'
        },
        {
          id: 'q2',
          question: 'What is the term for when a pregnant woman first feels the baby move?',
          options: ['Lightening', 'Quickening', 'Engagement', 'Effacement'],
          correctAnswer: 1,
          explanation: 'Quickening is the term for when the mother first feels fetal movements, typically between 16-20 weeks.'
        },
        {
          id: 'q3',
          question: 'At approximately how many weeks does a fetus become viable (able to survive outside the womb)?',
          options: ['12 weeks', '20 weeks', '24 weeks', '30 weeks'],
          correctAnswer: 2,
          explanation: 'Viability begins around 24 weeks, though survival chances increase dramatically with each subsequent week.'
        },
        {
          id: 'q4',
          question: 'What is the typical length of pregnancy at term?',
          options: ['36 weeks', '37-42 weeks', '40-44 weeks', '34-38 weeks'],
          correctAnswer: 1,
          explanation: 'Term pregnancy is defined as 37-42 weeks, with 40 weeks being the estimated due date.'
        },
        {
          id: 'q5',
          question: 'How many arteries and veins does a normal umbilical cord contain?',
          options: ['1 artery, 2 veins', '2 arteries, 1 vein', '2 arteries, 2 veins', '1 artery, 1 vein'],
          correctAnswer: 1,
          explanation: 'A normal umbilical cord contains 2 arteries and 1 vein (the vein carries oxygenated blood to the fetus).'
        }
      ]
    },
    intermediate: {
      title: 'Fetal Growth and Organ Maturation',
      description: 'Understand the physiological changes and organ development during the fetal period',
      content: `
# Fetal Growth and Organ Maturation

## Fetal Growth Patterns

### Growth Velocity by Trimester

| Trimester | Growth Rate | Weight Gain |
|-----------|-------------|-------------|
| First (9-12w) | ~1-2g/day | ~10g total |
| Second (13-26w) | ~10-15g/day | ~800g total |
| Third (27-40w) | ~25-35g/day | ~2,000g total |

### Growth Curves

#### Linear Growth
- Crown-rump length (CRL) in first trimester
- Crown-heel length (CHL) in second/third trimester
- Predictable growth with biological variation

#### Weight Gain Patterns
\`\`\`
Week 9-20: Exponential growth
Week 20-32: Linear growth (~200g/week)
Week 32-40: Decelerating growth (~150g/week)
\`\`\`

### Intrauterine Growth Restriction (IUGR)
- **Definition**: Weight <10th percentile for gestational age
- **Types**: Symmetric (early onset) vs asymmetric (late onset)
- **Causes**: Placental insufficiency, maternal hypertension, smoking
- **Monitoring**: Ultrasound, Doppler studies, biophysical profile

## Organ System Maturation

### Nervous System

#### Brain Development
- **Neuronal proliferation**: Primarily completed by week 18
- **Neuronal migration**: Completed by week 24
- **Organization**: Synaptogenesis continues through childhood
- **Myelination**: Begins at ~20 weeks, continues postnatally

#### Reflex Development
| Reflex | When Appears | Significance |
|--------|--------------|--------------|
| Sucking | Week 14-16 | Feeding readiness |
| Swallowing | Week 16-17 | Amniotic fluid handling |
| Breathing movements | Week 24 | Lung development |
| Grasping | Week 16-20 | Neuromuscular maturation |
| Startle (Moro) | Week 28-32 | Neurological assessment |

### Respiratory System

#### Lung Development Stages

**Embryonic (4-7 weeks):** Lung bud formation
**Pseudoglandular (5-16 weeks):** Branching morphogenesis
**Canalicular (16-26 weeks):** Airway differentiation
**Saccular (24-36 weeks):** Sac formation, type II pneumocyte differentiation
**Alveolar (36 weeks - childhood):** Alveolar multiplication

#### Surfactant Production
- **Type II pneumocytes**: Begin producing surfactant at ~24 weeks
- **Components**: Phospholipids (DPPC) and proteins (SP-A, B, C, D)
- **Function**: Reduces alveolar surface tension, prevents collapse
- **Maturation**: Accelerated by cortisol, thyroid hormone

#### Respiratory Distress Syndrome (RDS)
- **Risk**: Greatest <28 weeks gestation
- **Prevention**: Antenatal corticosteroids (betamethasone)
- **Treatment**: Exogenous surfactant, CPAP

### Cardiovascular System

#### Fetal Circulation Pattern
\`\`\`
Placenta (oxygenated)
    ↓
Umbilical vein
    ↓
Liver (via ductus venosus, bypasses liver)
    ↓
Inferior vena cava → Right atrium
    ↓
Foramen ovale → Left atrium (bypasses lungs)
    ↓
Left ventricle → Aorta → Body
    ↓
Some blood → Pulmonary artery → Ductus arteriosus → Aorta
\`\`\`

#### Fetal Shunts (will close after birth)
| Shunt | Location | Function | Closure Time |
|-------|----------|----------|--------------|
| Ductus venosus | Liver | Bypass liver | Days-weeks |
| Foramen ovale | Heart | Bypass lungs | Hours-days |
| Ductus arteriosus | Great vessels | Bypass lungs | Days-weeks |

#### Heart Rate Monitoring
- **Normal fetal heart rate**: 110-160 BPM
- **Variability**: Normal indicates healthy autonomic function
- **Decelerations**: May indicate cord compression or placental insufficiency
- **Accelerations**: Reassuring sign of fetal well-being

### Gastrointestinal System

#### Digestive Development
- **Swallowing**: Begins week 16-17
- **Meconium production**: Begins ~week 20
- **Meconium composition**: Vernix, lanugo, bile, intestinal secretions
- **Gut motility**: Migrating motor complex develops late gestation

#### Meconium Aspiration
- **Risk factor**: Post-term pregnancy, fetal distress
- **Pathology**: Aspiration before/during birth
- **Consequences**: Chemical pneumonitis, airway obstruction
- **Prevention**: Avoid post-term delivery

### Renal System

#### Kidney Function
- **Urine production**: Begins week 10-12
- **Amniotic fluid**: Fetal urine major component (>90% late gestation)
- **Oligohydramnios**: Indicates renal dysfunction or rupture
- **Polyhydramnios**: May indicate swallowing problems

#### Fetal Renal Function Markers
- **Creatinine**: Reflects maternal levels (fetal kidneys immature)
- **Urine output**: ~1 mL/kg/hour near term
- **Electrolyte balance**: Maternal homeostasis maintains

### Hematologic System

#### Hematopoiesis Timeline
| Site | Gestational Age |
|------|-----------------|
| Yolk sac | 3-8 weeks |
| Liver | 6-22 weeks |
| Spleen | 12-28 weeks |
| Bone marrow | 18 weeks-term |
| Bone marrow (exclusive) | 28 weeks-birth |

#### Hemoglobin Switching
- **Embryonic Hb**: Gower 1, Gower 2, Portland (weeks 3-8)
- **Fetal Hb (HbF)**: α2γ2 (weeks 8-birth, ~70% of total)
- **Adult Hb (HbA)**: α2β2 (appears ~week 32, ~30% at birth)

#### Fetal Iron Metabolism
- **Iron transfer**: Active transport across placenta
- **Storage**: Third trimester accumulation
- **Total iron**: ~270 mg at birth (term infant)
- **Preterm deficiency**: Inadequate iron stores

### Endocrine System

#### Fetal Hormone Production

**Growth**
- **Insulin-like growth factors (IGF-1, IGF-2)**: Primary growth regulators
- **Insulin**: Fetal pancreas produces from week 12
- **Growth hormone**: Limited role in fetal growth (postnatal role)

**Thyroid**
- **Maternal T4**: Crosses placenta (important early)
- **Fetal thyroid**: Functional ~week 12
- **TSH production**: Detectable week 18-20
- **Critical period**: Week 12-27 for brain development

**Adrenal**
- **Cortex**: Three zones develop (fetal zone regresses after birth)
- **DHEA-S**: Precursor for placental estrogen synthesis
- **Cortisol**: Surges at 34-36 weeks, promotes maturation

### Immune System

#### Immunologic Development

**Humoral immunity**
- **IgG**: Maternal transfer (peaks at term)
- **IgM**: Fetal production from ~week 20 ( responds to infection)
- **IgA**: Minimal fetal production

**Cellular immunity**
- **T-cells**: Thymic development 8-20 weeks
- **B-cells**: Liver then bone marrow
- **NK cells**: Present from week 14

**Immunologic protection**
- **Maternal antibodies**: IgG transfer FcRn receptor (weeks 16-22 onward)
- **Passive immunity**: Lasts 4-6 months postpartum
- **Breast milk**: IgA, immune cells, antimicrobial factors

## Fetal Surveillance

### Ultrasound Assessment

#### Biometric Measurements
- **Biparietal diameter (BPD)**: Head width
- **Head circumference (HC)**: Brain growth
- **Abdominal circumference (AC)**: Nutritional status
- **Femur length (FL)**: Long bone growth

#### Doppler Studies
- **Umbilical artery**: Placental resistance
- **Middle cerebral artery**: Fetal adaptation
- **Ductus venosus**: Cardiac function

### Antenatal Testing

#### Non-Stress Test (NST)
- **Purpose**: Assess fetal well-being
- **Method**: Monitor fetal heart rate response to movements
- **Reassuring**: 2+ accelerations in 20 minutes
- **Indications**: Decreased movements, post-term, maternal conditions

#### Biophysical Profile (BPP)
| Parameter | Score | Description |
|-----------|-------|-------------|
| NST | 0-2 | Heart rate reactivity |
| Breathing movements | 0-2 | ≥30 sec in 30 min |
| Gross body movement | 0-2 | ≥3 movements in 30 min |
| Tone | 0-2 | Extension/flexion |
| Amniotic fluid volume | 0-2 | MVP >2 cm |

Score 8-10: Normal; Score 6: Equivocal; Score ≤4: Abnormal

## Clinical Correlations

### Preterm Birth
- **Definition**: Delivery <37 weeks
- **Categories**: Extreme (<28w), Very (28-32w), Moderate (32-37w)
- **Complications**: RDS, IVH, NEC, sepsis
- **Prevention**: Progesterone, cervical cerclage, tocolytics

### Post-term Pregnancy
- **Definition**: >42 weeks gestation
- **Risks**: Macrosomia, oligohydramnios, stillbirth
- **Management**: Induction at 41-42 weeks
- **Monitoring**: NST, BPP, amniotic fluid index

### Multiple Gestation
- **Growth**: Slower than singletons after 30 weeks
- **Complications**: Preterm birth, TTTS, growth discordance
- **Monitoring**: More frequent ultrasounds, cervical length
      `,
      flashcards: [
        {
          id: 'fd1-int',
          front: 'What are the three fetal shunts and their functions?',
          back: 'Ductus venosus (bypasses liver), Foramen ovale (bypasses right ventricle/lungs), Ductus arteriosus (bypasses lungs).'
        },
        {
          id: 'fd2-int',
          front: 'When does surfactant production begin?',
          back: 'Type II pneumocytes begin producing surfactant at approximately 24 weeks gestation, with production accelerating toward term.'
        },
        {
          id: 'fd3-int',
          front: 'What is the difference between embryonic, fetal, and adult hemoglobin?',
          back: 'Embryonic (Gower 1, 2, Portland) weeks 3-8; Fetal (α2γ2, HbF) dominant 70% at birth; Adult (α2β2, HbA) 30% at birth, increases postpartum.'
        },
        {
          id: 'fd4-int',
          front: 'What is intrauterine growth restriction (IUGR)?',
          back: 'IUGR is defined as fetal weight <10th percentile for gestational age. Can be symmetric (early, proportional) or asymmetric (late, head sparing).'
        },
        {
          id: 'fd5-int',
          front: 'What is the Biophysical Profile (BPP) and what are its 5 components?',
          back: 'BPP assesses fetal well-being with 5 components: NST, breathing movements, gross body movements, tone, and amniotic fluid. Score 8-10 is normal.'
        },
        {
          id: 'fd6-int',
          front: 'What is the normal fetal heart rate range?',
          back: 'Normal fetal heart rate is 110-160 beats per minute, with variability indicating healthy autonomic function.'
        }
      ],
      quiz: [
        {
          id: 'q1-int',
          question: 'What is the primary fetal shunt that bypasses the pulmonary circulation?',
          options: ['Foramen ovale', 'Ductus venosus', 'Ductus arteriosus', 'Coronary sinus'],
          correctAnswer: 2,
          explanation: 'The ductus arteriosus connects the pulmonary artery to the aorta, bypassing the lungs. It closes shortly after birth.'
        },
        {
          id: 'q2-int',
          question: 'When does surfactant production begin in the fetal lung?',
          options: ['16 weeks', '20 weeks', '24 weeks', '28 weeks'],
          correctAnswer: 2,
          explanation: 'Surfactant production by type II pneumocytes begins at approximately 24 weeks gestation, explaining the high risk of RDS in premature infants.'
        },
        {
          id: 'q3-int',
          question: 'Which immunoglobulin is actively transported from mother to fetus?',
          options: ['IgA', 'IgD', 'IgG', 'IgM'],
          correctAnswer: 2,
          explanation: 'IgG is actively transported across the placenta via the FcRn receptor, especially from weeks 16-22 onward, providing passive immunity.'
        },
        {
          id: 'q4-int',
          question: 'What is the primary site of hematopoiesis from 18 weeks to birth?',
          options: ['Liver', 'Spleen', 'Bone marrow', 'Yolk sac'],
          correctAnswer: 2,
          explanation: 'Bone marrow becomes the primary site of blood cell production from 18 weeks gestation through the remainder of life.'
        },
        {
          id: 'q5-int',
          question: 'What is a non-stress test (NST) used for?',
          options: ['Assess fetal lung maturity', 'Assess fetal well-being', 'Determine fetal sex', 'Measure amniotic fluid volume'],
          correctAnswer: 1,
          explanation: 'NST monitors fetal heart rate response to movements, assessing fetal well-being. Two accelerations in 20 minutes is reassuring.'
        }
      ]
    },
    advanced: {
      title: 'Advanced Fetal Physiology',
      description: 'Deep dive into fetal physiology, adaptation, and transition to extrauterine life',
      content: `
# Advanced Fetal Physiology

## Fetal Circulation and Transition at Birth

### Detailed Fetal Circulatory Pattern

#### Oxygenated Blood Pathway (High O2)
\`\`\`
Placenta (pO2 ~50-55 mmHg)
    ↓
Umbilical vein (O2 saturation ~80%)
    ↓
Intrahepatic portion → Portal circulation (some)
    │
    └→ Ductus venosus (50% of flow) → Inferior vena cava
        ↓
    Right atrium
        ↓
    Crista dividens → Foramen ovale → Left atrium (65%)
        ↓
    Left ventricle → Ascending aorta
        ↓
    Coronary arteries + Carotid arteries (brain, heart)
\`\`\`

#### Less Oxygenated Blood Pathway (Lower O2)
\`\`\`
Superior vena cava → Right atrium
    ↓
Right ventricle (35%)
    ↓
Main pulmonary artery
    ↓
Ductus arteriosus → Descending aorta
    ↓
Umbilical arteries → Placenta
\`\`\`

### Transition at Birth

#### Cardiovascular Changes

**Increased Pulmonary Blood Flow**
1. **Lung expansion**: Removes vascular compression
2. **Oxygen**: Vasodilates pulmonary vessels
3. **Decreased PVR**: Pulmonary vascular resistance drops
4. **Increased blood flow**: Pulmonary blood flow increases 10-fold

**Closure of Shunts**
| Structure | Mechanism | Timing | Failure Consequence |
|-----------|-----------|--------|---------------------|
| Foramen ovale | ↑LA pressure → flap closure | Minutes-hours | Atrial septal defect |
| Ductus arteriosus | O2-induced smooth muscle constriction | Hours-days | PDA |
| Ductus venosus | Passive closure with flow cessation | Days-weeks | Portosystemic shunt |

**Prostaglandin E2 (PGE2)**
- Maintains ductus arteriosus patency in utero
- Produced by placenta and ductus itself
- Rapidly cleared after birth
- NSAIDs (indomethacin) can pharmacologically close PDA

#### Hemodynamic Changes
- **Right ventricular output**: Decreases from 2/3 to 1/2 of cardiac output
- **Left ventricular output**: Increases from 1/3 to 1/2 of cardiac output
- **Systemic vascular resistance**: Increases (placental circulation removed)
- **Blood pressure**: Increases dramatically

## Fetal Respiratory Physiology

### Lung Liquid Dynamics

#### Production and Clearance
- **Production**: Cl- and fluid secretion by pulmonary epithelium
- **Volume**: ~20-30 mL/kg at term
- **Composition**: High Cl-, low protein, surfactant
- **Clearance**: Na+ reabsorption via ENaC channels at birth
- **Role**: Maintains lung expansion for growth

#### Amniotic Fluid Dynamics
- **Fetal breathing movements**: Begin ~20 weeks, irregular
- **Cycle rate**: ~10% of time in active breathing
- **Function**: Lung development, diaphragm exercise
- **Absence**: Indicates neurological dysfunction or paralysis

### Surfactant Metabolism

#### Synthesis and Secretion
\`\`\`
Type II pneumocyte
    ↓
Lamellar bodies (surfactant storage)
    ↓
Exocytosis (stimulated by β-adrenergic, stretch)
    ↓
Air-liquid interface
    ↓
Surface tension reduction
\`\`\`

#### Composition and Function
| Component | Function | Deficiency Consequence |
|-----------|----------|----------------------|
| DPPC (phospholipid) | Surface tension reduction | RDS |
| SP-B, SP-C | Surface spreading, stability | RDS |
| SP-A | Innate immunity, homeostasis | Infection susceptibility |
| SP-D | Host defense, surfactant recycling | Infection susceptibility |

#### Regulation
- **Glucocorticoids**: Increase surfactant synthesis (basis for antenatal steroids)
- **Thyroid hormone**: Synergistic with glucocorticoids
- **Estrogen**: Stimulates synthesis
- **Insulin**: Inhibits synthesis (diabetic mother infants at risk)

## Fetal Renal Physiology

### Glomerular Function

#### Nephrogenesis
- **Timeline**: Weeks 9-36 (new nephrons form until ~36 weeks)
- **Total nephrons**: ~1 million at term (varies 200,000-2+ million)
- **SREBP**: Low birth weight → fewer nephrons → adult hypertension risk
- **No postnatal nephrogenesis**: All nephrons formed prenatally

#### GFR and Filtration
- **Fetal GFR**: Very low (~0.2 mL/min at term)
- **Surface area**: Limited glomerular surface area
- **Perfusion**: Low renal blood flow relative to adult
- **Maturation**: Rapid increase after birth

### Tubular Function

#### Sodium Handling
- **Reabsorption**: Limited in fetus (immature Na+/K+ ATPase)
- **Excretion**: Sodium lost in urine (intentional)
- **Role**: Maintains amniotic fluid volume
- **Postnatal adaptation**: Rapid maturation of reabsorptive capacity

#### Concentration Ability
- **Limited**: Medullary concentrating gradient underdeveloped
- **Maximum urine osmolality**: ~500 mOsm/kg (vs. ~1200 in adult)
- **ADH receptors**: Present but less responsive
- **Clinical**: Prone to dehydration, requires adequate fluid intake

### Amniotic Fluid Homeostasis

#### Fluid Dynamics
\`\`\`
Fetal urine production (900-1200 mL/day near term)
    +
Fetal lung liquid (300-400 mL/day)
    ↓
Amniotic fluid volume (~800-1000 mL at term)
    ↓
Fetal swallowing (500-700 mL/day)
    ↓
Intramembranous absorption (membranes/uterine surface)
\`\`\`

#### Clinical Significance
- **Oligohydramnios** (<500 mL or AFI <5): Renal agenesis, rupture, placental insufficiency
- **Polyhydramnios** (>2000 mL or AFI >24): Esophageal atresia, diabetes, anemia
- **Assessment**: Amniotic Fluid Index (AFI), single deepest pocket (SDP)

## Fetal Endocrine Physiology

### Placental Hormone Production

#### Steroid Hormones
- **Progesterone**: Maintains uterine quiescence, immunosuppression
- **Estriol**: Fetal adrenal precursor → placenta → estriol
- **Fetal zone of adrenal cortex**: Produces DHEA-S (estriol precursor)
- **Cortisol**: Late gestation surge promotes organ maturation

#### Peptide Hormones
| Hormone | Source | Function |
|---------|--------|----------|
| hCG | Syncytiotrophoblast | Maintains corpus luteum |
| hPL | Syncytiotrophoblast | Maternal insulin resistance, lipolysis |
| CRH | Placenta | Parturition trigger, fetal HPA activation |
| Prolactin | Decidua | Osmoregulation (fluid balance) |

### Fetal Growth Regulation

#### Growth Factors
- **IGF-1**: Primary fetal growth regulator, nutrition-dependent
- **IGF-2**: Important early growth, less nutrition-responsive
- **IGF-binding proteins**: Modulate IGF bioavailability
- **Growth hormone**: Limited fetal role (important postnatally)
- **Insulin**: Major fetal growth factor (infant of diabetic mother)

#### Growth Pathophysiology
| Condition | Hormonal Profile | Phenotype |
|-----------|-----------------|-----------|
| Normal growth | Normal IGF-1, IGFBP-3 | Appropriate for gestational age (AGA) |
| IUGR | Low IGF-1, high IGFBP-1 | Small for gestational age (SGA) |
| Macrosomia | High insulin, IGF-1 | Large for gestational age (LGA) |
| Leprechaunism | Insulin resistance | Severe growth restriction |

## Fetal Neurophysiology

### Cerebral Blood Flow

#### Regulation
- **High flow**: Cerebral blood flow is proportionally higher than adult
- **Autoregulation**: Limited but present
- **Oxygen delivery**: Maintained by high cardiac output and hemoglobin O2 affinity
- **Gray vs white matter**: Gray matter receives higher flow

#### Oxygen-Hemoglobin Dissociation
- **P50**: Fetal hemoglobin has lower P50 (~19 mmHg vs ~27 mmHg adult)
- **Left-shift**: Higher O2 affinity, facilitates placental transfer
- **Bohr effect**: Facilitates O2 unloading in tissues

### Sleep-Wake Cycles

#### Behavioral States
| State | Heart Rate | Movement | Eye Movement | Breathing |
|-------|------------|-----------|--------------|-----------|
| 1F (quiet sleep) | Stable | Absent | No | Regular |
| 2F (active sleep) | Variable | Generalized | Rapid | Irregular |
| 3F (quiet awake) | Stable | Minimal | No | Regular |
| 4F (active awake) | Variable | Vigorous | No | Variable |

- **Development**: Cycles emerge ~28-32 weeks
- **Duration**: 20-40 minutes per cycle near term
- **Clinical basis**: Fetal heart rate tracing patterns

## Fetal Metabolism

### Energy Metabolism

#### Glucose Homeostasis
- **Glucose transfer**: Facilitated diffusion (GLUT1, GLUT3, GLUT4)
- **Fetal glucose**: ~70-80% of maternal glucose
- **Insulin sensitivity**: Higher than adult
- **Gluconeogenesis**: Limited fetal capacity
- **Glycogen stores**: Accumulated in third trimester (liver, heart, muscle)

#### Lipid Metabolism
- **Transfer**: Free fatty acids cross placenta
- **Brown adipose**: Development begins at ~26 weeks
- **Function**: Non-shivering thermogenesis (UCP1)
- **White adipose**: Accumulates late third trimester

### Acid-Base Balance

#### Normal Fetal Values
| Parameter | Fetal | Maternal |
|------------|-------|----------|
| pH | 7.32-7.38 | 7.40-7.45 |
| pO2 | 20-25 mmHg | 90-100 mmHg |
| pCO2 | 40-45 mmHg | 35-40 mmHg |
| HCO3- | 19-21 mEq/L | 22-26 mEq/L |

#### Buffer Systems
- **Hemoglobin**: Primary buffer (high fetal concentration)
- **Plasma proteins**: Secondary buffer
- **Respiratory compensation**: Limited due to placental interface
- **Renal compensation**: Limited fetal capacity

## Clinical Applications

### Fetal Therapy

#### Interventions
- **Intrauterine transfusion**: Hemolytic disease (Rh, parvovirus)
- **Shunt placement**: Bladder outlet obstruction, pleural effusion
- **Radiofrequency ablation**: TRAP sequence (twin reversed arterial perfusion)
- **Laser surgery**: TTTS (twin-twin transfusion syndrome)
- **Open fetal surgery**: Myelomeningocele repair

#### Pharmacotherapy
- **Maternal administration**: Most common route
- **Transplacental transfer**: Depends on molecular properties
- **Fetal intramuscular**: Certain procedures (e.g., needle punctures)
- **Future**: Gene therapy, stem cell transplantation

### Delivery Planning

#### Gestational Age Considerations
| GA | Resuscitation Considerations | Survival |
|----|------------------------------|----------|
| <23w | Comfort care | Minimal |
| 23-24w | Discuss goals | 20-40% |
| 25-26w | Full intervention | 60-80% |
| 27-34w | Anticipated respiratory support | >90% |
| ≥35w | Routine newborn care | >99% |

#### Mode of Delivery
- **Breech presentation**: External cephalic version or cesarean
- **Multiple gestation**: Individualized
- **Fetal compromise**: Cesarean for acute events
- **Preterm labor**: Balancing risks, maternal vs fetal
      `,
      flashcards: [
        {
          id: 'fd1-adv',
          front: 'What mediates closure of the ductus arteriosus at birth?',
          back: 'Increased oxygen tension causes smooth muscle constriction, while prostaglandin clearance from the placenta removes the patency factor. PGE2 maintains patency in utero.'
        },
        {
          id: 'fd2-adv',
          front: 'What is the role of brown adipose tissue in the fetus?',
          back: 'Brown adipose develops at ~26 weeks and provides non-shivering thermogenesis after birth via UCP1 (uncoupling protein 1).'
        },
        {
          id: 'fd3-adv',
          front: 'Why does fetal hemoglobin have a lower P50 than adult hemoglobin?',
          back: 'Lower P50 (~19 vs ~27 mmHg) means higher oxygen affinity, facilitating oxygen transfer from maternal to fetal circulation across the placenta.'
        },
        {
          id: 'fd4-adv',
          front: 'What is the basis for using antenatal corticosteroids?',
          back: 'Glucocorticoids increase surfactant synthesis by type II pneumocytes, reducing risk and severity of respiratory distress syndrome in preterm infants.'
        },
        {
          id: 'fd5-adv',
          front: 'What are the 4 fetal behavioral states and when do they emerge?',
          back: '1F (quiet sleep), 2F (active sleep), 3F (quiet awake), 4F (active awake). Sleep-wake cycles emerge at 28-32 weeks gestation.'
        },
        {
          id: 'fd6-adv',
          front: 'What happens to nephrons after 36 weeks gestation?',
          back: 'Nephrogenesis is complete by ~36 weeks. No new nephrons form after birth. Low birth weight is associated with fewer nephrons and adult hypertension risk.'
        }
      ],
      quiz: [
        {
          id: 'q1-adv',
          question: 'What is the primary mechanism for closure of the ductus arteriosus after birth?',
          options: ['Increased blood pressure', 'Oxygen-induced smooth muscle constriction', 'Decreased pulmonary blood flow', 'Increased prostaglandin'],
          correctAnswer: 1,
          explanation: 'Increased oxygen tension causes smooth muscle constriction of the ductus arteriosus. Prostaglandin E2 (which maintains patency) is cleared after birth.'
        },
        {
          id: 'q2-adv',
          question: 'What is the primary stimulus for surfactant synthesis?',
          options: ['Estrogen', 'Cortisol', 'Insulin', 'Thyroid hormone'],
          correctAnswer: 1,
          explanation: 'Cortisol (and other glucocorticoids) is the primary stimulus for surfactant synthesis, which is why antenatal corticosteroids are given before preterm birth.'
        },
        {
          id: 'q3-adv',
          question: 'What is the basis for the leftward shift of the fetal oxygen-hemoglobin dissociation curve?',
          back: 'Fetal hemoglobin has a lower P50 (~19 mmHg vs ~27 mmHg), meaning higher oxygen affinity facilitates placental oxygen transfer.',
          options: ['Higher pH', 'Lower temperature', 'Structural difference in HbF', 'Lower 2,3-BPG'],
          correctAnswer: 2,
          explanation: 'Fetal hemoglobin (α2γ2) has structural differences from adult hemoglobin (α2β2) that give it higher oxygen affinity (lower P50).'
        },
        {
          id: 'q4-adv',
          question: 'When do sleep-wake cycles emerge in the fetus?',
          options: ['20-24 weeks', '24-28 weeks', '28-32 weeks', '32-36 weeks'],
          correctAnswer: 2,
          explanation: 'Fetal sleep-wake cycles emerge at 28-32 weeks gestation. These cycles form the basis for fetal heart rate tracing patterns.'
        },
        {
          id: 'q5-adv',
          question: 'What is the consequence of low birth weight on renal development?',
          options: ['Increased nephron number', 'Decreased nephron number → adult hypertension risk', 'No effect on nephrons', 'Delayed nephron maturation'],
          correctAnswer: 1,
          explanation: 'Low birth weight is associated with fewer nephrons, which is linked to increased risk of hypertension and chronic kidney disease in adulthood.'
        }
      ]
    },
    expert: {
      title: 'Expert-Level Fetal Development',
      description: 'Molecular mechanisms, research frontiers, and complex clinical scenarios',
      content: `
# Expert-Level Fetal Development

## Epigenetic Programming During Fetal Development

### Developmental Origins of Health and Disease (DOHaD)

### Critical Windows of Programming

#### First Trimester (Weeks 1-12)
- **Epigenetic reprogramming**: DNA methylation patterns established
- **Stem cell differentiation**: Lineage commitment decisions
- **Organogenesis**: Structural formation sensitive to disruption
- **Programming targets**: Metabolism, stress response, growth

#### Second Trimester (Weeks 13-27)
- **Rapid growth**: Hyperplasia dominates
- **Neuronal migration**: Brain architecture
- **Sensory development**: Hearing, vision pathways
- **Programming targets**: Neurodevelopment, sensory processing

#### Third Trimester (Weeks 28-40)
- **Growth and maturation**: Hypertrophy increasingly important
- **Synaptogenesis**: Brain connectivity
- **Adiposity**: Fat accumulation and appetite set-points
- **Programming targets**: Body composition, energy balance

### Molecular Mechanisms of Programming

#### DNA Methylation
- **Nutrient-sensitive**: Folate, B12, choline, methionine
- **One-carbon metabolism**: SAM (S-adenosylmethionine) as methyl donor
- **Imprinted genes**: Particularly vulnerable (IGF2, H19, GR)
- **Tissue-specific**: Different patterns in different organs

#### Histone Modifications
- **Acetylation**: Generally associated with active transcription
- **Methylation**: Context-dependent (H3K4me3 active, H3K27me3 repressive)
- **Chromatin remodeling**: ATP-dependent complexes (SWI/SNF)
- **Environmental responsiveness**: Nutrition, stress, toxins

#### Non-coding RNAs
- **miRNAs**: Post-transcriptional regulation
- **lncRNAs**: Chromatin organization, transcriptional regulation
- **Placental miRNAs**: Communicate maternal-fetal information
- **Exosomal transfer**: miRNAs in exosomes cross placental barrier

### Programming by Specific Exposures

#### Maternal Nutrition
| Exposure | Epigenetic Effect | Health Outcome |
|----------|------------------|----------------|
| Undernutrition (Dutch Hunger Winter) | Hypomethylation at IGF2 | Metabolic syndrome |
| Overnutrition/obesity | Altered methylation | Offspring obesity |
| High-fat diet | Histone modifications | Altered hypothalamic circuits |
| Protein restriction | Global hypomethylation | Hypertension |

#### Endocrine Disruptors
- **BPA**: DNA methylation changes, especially imprinted genes
- **Phthalates**: Histone modification changes
- **PCBs**: Epigenetic effects on neurodevelopment
- **Mechanism**: Nuclear receptor interaction, epigenetic enzyme disruption

#### Psychological Stress
- **Glucocorticoid exposure**: Alters HPA axis methylation
- **NR3C1 (glucocorticoid receptor)**: Hypermethylation in exposed offspring
- **FKBP5**: Stress response modulation
- **Transgenerational potential**: Some effects persist across generations

## Placental Biology and Function

### Placental Development

### Trophoblast Lineage
\`\`\`
Cytotrophoblast (proliferative)
    ↓
Synctiotrophoblast (hormone production, exchange)
    ↓
Extravillous trophoblast (invasion, anchoring)
    ↓
Spiral artery remodeling
\`\`\`

### Imprinted Genes in Placenta
- **Paternally expressed**: IGF2 (growth promotion), PHLDA2
- **Maternally expressed**: H19, GRB10 (growth restriction)
- **Balance**: Critical for normal placental growth
- **Disorders**: Beckwith-Wiedemann, Angelman, Prader-Willi

### Placental Transport Mechanisms

#### Nutrient Transport
| Nutrient | Transport Mechanism | Regulation |
|----------|--------------------|------------|
| Glucose | Facilitated diffusion (GLUT1,3,4) | Insulin, hypoxia |
| Amino acids | Active transport (SNAT, LAT) | mTOR signaling |
| Fatty acids | Facilitated + passive | LPL, FATP |
| Iron | Active transfer (TfR1, DMT1) | Hepcidin, iron status |

#### Adaptive Responses
- **Maternal malnutrition**: Upregulates specific transporters
- **Hypoxia**: Alters amino acid transporter expression
- **Inflammation**: Downregulates many transporters
- **Sex-specific**: Male and female placentas respond differently

## Fetal Brain Development

### Neurogenesis and Migration

#### Cerebral Cortex Development
- **Neural progenitors**: Radial glia in ventricular zone
- **Neurogenesis**: Peaks at ~3-4 months gestation
- **Migration**: Radial migration along glial fibers
- **Organization**: Inside-out pattern (deep layers first)

#### Critical Periods
| Process | Peak Timing | Vulnerability |
|---------|-------------|---------------|
| Neuronal proliferation | 8-16 weeks | Radiation, alcohol, viruses |
| Neuronal migration | 12-24 weeks | Alcohol, cocaine, infections |
| Organization | 20 weeks-2 years | Nutrition, toxins, stimulation |
| Myelination | 20 weeks-adolescence | Nutrition, thyroid hormone |

### Synaptic Development

#### Synaptogenesis Timeline
- **Cortex**: Spans from mid-gestation through childhood
- **Synaptic density**: Peaks at ~2-3 years, then prunes
- **Experience-dependent**: Activity shapes connections
- **Critical periods**: Windows of heightened plasticity

#### Neurotransmitter System Development
| System | Development Timeline | Function |
|---------|---------------------|----------|
| Dopamine | Mid-gestation onward | Reward, executive function |
| Serotonin | Mid-gestation onward | Mood, emotion regulation |
| GABA | Early gestation | Initially excitatory, later inhibitory |
| Glutamate | Throughout development | Excitatory neurotransmission |

## Fetal Origins of Adult Disease

### Specific Disease Pathways

### Metabolic Syndrome
- **Thrifty phenotype hypothesis**: Fetal malnutrition → metabolic thriftiness → obesity with abundance
- **Epigenetic changes**: Altered methylation of metabolic genes
- **Pancreatic β-cell mass**: Reduced in IUGR
- **Adipocyte biology**: Altered number and distribution

### Cardiovascular Disease
- **Nephron number**: Low birth weight → fewer nephrons → hypertension
- **Vascular structure**: Altered arterial compliance
- **RAAS programming**: Renin-angiotensin-aldosterone system
- **Endothelial function**: Early-life programming of NO production

### Neurodevelopmental and Mental Health
- **Cognitive function**: Birth weight correlates with IQ
- **Schizophrenia**: Fetal famine association
- **ADHD**: Prenatal stress, smoking associations
- **Autism**: Multiple prenatal risk factors

## Clinical Assessment: Advanced Monitoring

### Fetal Echocardiography

#### Indications
- **Abnormal screening**: Abnormal four-chamber view
- **Maternal diabetes**: Septal hypertrophy risk
- **Arrhythmias**: Heart rate abnormalities
- **Family history**: Congenital heart disease

#### Assessment
- **Structural**: Chambers, valves, great vessels
- **Functional**: Contractility, output
- **Rhythm**: Sinus rhythm, arrhythmias
- **Hemodynamics**: Doppler flow patterns

### Fetal MRI

#### Indications
- **CNS anomalies**: Ventriculomegaly, callosal abnormalities
- **Complex masses**: Better tissue characterization
- **Placental assessment**: Invasive placentation
- **Research**: Normal brain development, diffusion tensor imaging

#### Advantages
- **Soft tissue contrast**: Superior to ultrasound
- **Large field of view**: Whole fetus assessment
- **No radiation**: Safe for repeated studies
- **Functional techniques**: DTI, fMRI (research)

## Therapeutic Interventions

### In Utero Stem Cell Transplantation

#### Principles
- **Fetal immunologic tolerance**: Early gestation acceptance
- **Donor cells**: Maternal, paternal, unrelated stem cells
- **Engraftment**: Requires donor cell homing to target organ
- **Timing**: Earlier transplant = better engraftment

#### Applications
- **Immunodeficiencies**: SCID, chronic granulomatous disease
- **Metabolic disorders**: Osteopetrosis, lysosomal storage diseases
- **Hemoglobinopathies**: Sickle cell, thalassemia
- **Challenges**: Engraftment efficiency, donor availability

### Fetal Gene Therapy

#### Viral Vectors
- **AAV (Adeno-associated virus)**: Low immunogenicity, limited capacity
- **Lentivirus**: Integrating, larger capacity, insertional mutagenesis risk
- **Gutless adenovirus**: Large capacity, transient expression

#### Targets
- **Monogenic disorders**: Hemophilia, muscular dystrophy, metabolic diseases
- **Advantages of in utero**: Small size, immune tolerance, stem cell access
- **Challenges**: Safety, delivery efficiency, off-target effects

### Open Fetal Surgery

#### Myelomeningocele Repair
- **Timing**: 19-26 weeks gestation
- **MOMS trial results**: Reduced need for shunting, improved motor function
- **Technique**: Hysterotomy, neurosurgical repair, uterine closure
- **Maternal risks**: Uterine rupture in future pregnancies

#### Other Procedures
- **Congenital diaphragmatic hernia**: FETO (fetoscopic tracheal occlusion)
- **Lower urinary tract obstruction**: Vesicoamniotic shunting
- **Sacrococcygeal teratoma**: Resection if high-output cardiac failure

## Research Frontiers

### Artificial Womb Technology

#### Current Status
- **EXTEND (Extrauterine Environment for Newborn Development)**
- **Animal studies**: Preterm lambs maintained for weeks
- **Biobag**: Fluid-filled container with gas exchange
- **Applications**: Extreme prematurity (22-28 weeks)

#### Challenges
- **Circuit design**: Oxygenation, hemodynamics
- **Infection risk**: Sterile maintenance
- **Long-term outcomes**: Unknown
- **Ethical considerations**: Redefining viability

### Single-Cell Atlas of Fetal Development

#### Human Cell Atlas - Fetal Tissue
- **Comprehensive mapping**: All cell types across gestation
- **Spatial transcriptomics**: Location-specific expression
- **Lineage tracing**: Developmental trajectories
- **Applications**: Understanding disease, tissue engineering

### Placenta-on-a-Chip
- **Microfluidic devices**: Mimic placental barrier
- **Transport studies**: Drug, nutrient transfer
- **Disease modeling**: Preeclampsia, infection
- **Toxicology**: Drug safety testing

## Ethical Considerations

### Fetal Therapy Ethics
- **Maternal-fetal conflict**: Balancing interests
- **Risk-benefit assessment**: Maternal risk for fetal benefit
- **Informed consent**: Complex decision-making
- **Resource allocation**: High-cost, low-volume interventions

### Viability and Moral Status
- **Technological advances**: Pushing viability limits earlier
- **Moral status debate**: When does moral status begin?
- **Abortion politics**: Impact on fetal therapy
- **International variation**: Different legal frameworks

## Synthesis

Expert-level understanding of fetal development requires integration of:
- **Basic science**: Molecular and cellular mechanisms
- **Clinical medicine**: Diagnosis and therapy
- **Public health**: Population-level impacts
- **Ethics**: Moral reasoning and policy
- **Research**: Frontiers and limitations
- **Lifespan perspective**: Fetal origins of adult health

The fetus is not merely a developing human but a programming organism whose experiences have lifelong and potentially transgenerational consequences. Understanding this complexity is essential for clinicians, researchers, and policymakers alike.
      `,
      flashcards: [
        {
          id: 'fd1-exp',
          front: 'What is DOHaD?',
          back: 'Developmental Origins of Health and Disease - the concept that environmental exposures during critical fetal developmental windows program long-term health outcomes.'
        },
        {
          id: 'fd2-exp',
          front: 'What is the "thrifty phenotype" hypothesis?',
          back: 'The hypothesis that fetal malnutrition triggers metabolic adaptations ("thriftiness") that become maladaptive in nutrient-rich postnatal environments, leading to metabolic syndrome.'
        },
        {
          id: 'fd3-exp',
          front: 'What epigenetic changes occur in response to prenatal stress?',
          back: 'Prenatal stress/glucocorticoid exposure causes hypermethylation of the NR3C1 glucocorticoid receptor gene, altering HPA axis stress responses.'
        },
        {
          id: 'fd4-exp',
          front: 'What is the MOMS trial?',
          back: 'Management of Myelomeningocele Study - demonstrated that in utero surgical repair of spina bifida reduces need for shunting and improves motor outcomes compared to postnatal repair.'
        },
        {
          id: 'fd5-exp',
          front: 'What is the role of placenta-specific imprinted genes?',
          back: 'Imprinted genes like IGF2 (paternal, growth-promoting) and H19/GRB10 (maternal, growth-restricting) balance placental and fetal growth. Disruption causes overgrowth (Beckwith-Wiedemann) or growth restriction disorders.'
        }
      ],
      quiz: [
        {
          id: 'q1-exp',
          question: 'What is the "thrifty phenotype" hypothesis?',
          options: ['Fetal overnutrition leads to thrifty genes', 'Fetal malnutrition programs metabolic thriftiness for later abundance', 'Thrifty genes are inherited from father', 'Thrifty phenotype is genetic'],
          correctAnswer: 1,
          explanation: 'The thrifty phenotype hypothesis proposes that fetal malnutrition triggers metabolic adaptations that become maladaptive in nutrient-rich environments, leading to metabolic syndrome.'
        },
        {
          id: 'q2-exp',
          question: 'What epigenetic change is associated with prenatal stress exposure?',
          options: ['Hypomethylation of NR3C1', 'Hypermethylation of NR3C1', 'Histone acetylation of NR3C1', 'No change in NR3C1'],
          correctAnswer: 1,
          explanation: 'Prenatal stress and glucocorticoid exposure cause hypermethylation of the NR3C1 glucocorticoid receptor promoter, reducing expression and altering HPA axis function.'
        },
        {
          id: 'q3-exp',
          question: 'What did the MOMS (Management of Myelomeningocele Study) trial demonstrate?',
          options: ['Postnatal repair is superior', 'In utero repair reduces shunting and improves motor function', 'No difference between approaches', 'Fetal repair increases maternal complications'],
          correctAnswer: 1,
          explanation: 'The MOMS trial showed that in utero surgical repair of myelomeningocele reduces the need for shunting and improves motor outcomes compared to postnatal repair.'
        },
        {
          id: 'q4-exp',
          question: 'What is the primary advantage of in utero stem cell transplantation?',
          options: ['Better cell engraftment', 'Fetal immunologic tolerance to foreign cells', 'Lower cost', 'No need for matching'],
          correctAnswer: 1,
          explanation: 'The fetal immune system develops tolerance to foreign cells early in gestation, allowing acceptance of allogeneic stem cells without immunosuppression.'
        },
        {
          id: 'q5-exp',
          question: 'Which placental imprinted gene is paternally expressed and promotes growth?',
          options: ['H19', 'GRB10', 'IGF2', 'CDKN1C'],
          correctAnswer: 2,
          explanation: 'IGF2 is paternally expressed and promotes fetal and placental growth. Maternally expressed genes like H19, GRB10, and CDKN1C generally restrict growth.'
        }
      ]
    },
    master: {
      title: 'Mastering Fetal Development',
      description: 'Comprehensive understanding from basic concepts to clinical practice and research frontiers',
      content: `
# Mastering Fetal Development

## The Clinical Framework

### Comprehensive Fetal Assessment

### First Trimester Assessment (11-14 weeks)

#### Ultrasound Evaluation
- **Crown-rump length (CRL)**: Dating accuracy ±5 days
- **Nuchal translucency (NT)**: >3.5 mm increased risk for aneuploidy, cardiac defects
- **Nasal bone**: Absence associated with trisomy 21
- **Ductus venosus flow**: Reversed A-wave associated with aneuploidy, cardiac defects
- **Fetal heart rate**: Normal 120-160 bpm at this gestation

#### Biochemical Screening
- **Free β-hCG**: Maternal serum marker
- **PAPP-A**: Pregnancy-associated plasma protein A
- **Combined risk**: NT + PAPP-A + β-hCG + maternal age

### Second Trimester Assessment (15-20 weeks)

#### Anatomy Survey
- **CNS**: Lateral ventricles (<10 mm), cerebellum, cisterna magna
- **Face**: Lip integrity, orbits, profile
- **Neck**: Nuchal fold, cystic hygroma
- **Chest**: Heart position, situs, four-chamber view
- **Abdomen**: Stomach, kidneys, bladder, abdominal wall
- **Extremities**: Long bones, hands, feet
- **Spine**: Three ossification centers visible

#### Maternal Serum Screening (Quad Screen)
- **AFP**: Neural tube defects, abdominal wall defects
- **hCG**: Downs (high), Edwards (low)
- **Estriol**: Downs (low)
- **Inhibin A**: Downs (high)

### Third Trimester Assessment

#### Growth Assessment
| Measurement | Normal Range |
|-------------|--------------|
| Biparietal diameter (BPD) | ~9 cm at term |
| Head circumference (HC) | ~34 cm at term |
| Abdominal circumference (AC) | ~32 cm at term |
| Femur length (FL) | ~7 cm at term |
| Estimated fetal weight (EFW) | 10th-90th percentile |

#### Doppler Surveillance
- **Umbilical artery**: S/D ratio, RI, PI
- **Middle cerebral artery**: Brain sparing in IUGR
- **Ductus venosus**: Cardiac function assessment
- **Uterine arteries**: Preeclampsia risk assessment

## High-Risk Pregnancy Management

### Preterm Labor

#### Prediction
- **Cervical length**: <25 mm transvaginal at 18-24 weeks = increased risk
- **Fetal fibronectin**: Positive (>50 ng/mL) at 22-34 weeks = increased risk
- **Combined testing**: Best predictive value

#### Prevention Strategies
- **Progesterone**: 17-OHPC (250 mg IM weekly) or vaginal progesterone
- **Cervical cerclage**: McDonald or Shirodkar technique
- **Activity restriction**: Limited evidence, still commonly recommended

#### Tocolysis
- **Indomethacin**: <32 weeks, contraindicated >32 weeks (ductus arteriosus)
- **Nifedipine**: Calcium channel blocker, first-line
- **Magnesium sulfate**: Tocolysis + neuroprotection (<32 weeks, reduces cerebral palsy)

### Hypertensive Disorders

#### Gestational Hypertension
- **Definition**: BP ≥140/90 after 20 weeks without proteinuria
- **Monitoring**: BP, labs, fetal growth
- **Delivery**: 37-38 weeks if stable

#### Preeclampsia
- **Definition**: Hypertension + proteinuria OR end-organ dysfunction
- **Severe features**: BP ≥160/110, symptoms, labs, Doppler abnormalities
- **Management**: Magnesium sulfate (seizure prophylaxis), antihypertensives, delivery

#### HELLP Syndrome
- **Hemolysis**: LDH elevated, schistocytes, haptoglobin low
- **Elevated Liver enzymes**: AST/AST >70 IU/L
- **Low Platelets**: <100,000
- **Management**: Stabilize, deliver (often >34 weeks)

### Diabetes in Pregnancy

#### Gestational Diabetes (GDM)
- **Screening**: 1-hour 50g glucose challenge at 24-28 weeks
- **diagnosis**: 3-hour 100g OGTT (2 abnormal values)
- **Management**: Diet, glucose monitoring, insulin if needed
- **Fetal risks**: Macrosomia, hypoglycemia, hyperbilirubinemia

#### Pre-gestational Diabetes
- **Risks**: Congenital anomalies (especially cardiac), growth disturbances
- **Target A1C**: <6% preconception, <6.5% during pregnancy
- **Complications**: Preeclampsia, polyhydramnios, stillbirth

### Multiple Gestation

#### Chorionicity Determination
| Sign | Dichorionic | Monochorionic |
|------|-------------|---------------|
| Placental number | 2 | 1 |
| Lambda sign | Present (twin peak) | Absent |
| Inter twin membrane | Thick | Thin |
| Gender | May be different | Always same |

#### Complications by Chorionicity
| Complication | Monochorionic | Dichorionic |
|--------------|---------------|-------------|
| TTTS | Yes | No |
| TAPS | Yes | No |
| TRAP | Yes | No |
| Unequal growth | Common | Less common |
| Cord entanglement | Yes (monoamniotic) | No |

#### TTTS (Twin-Twin Transfusion Syndrome)
- **Quintero stages**: I-V based on donor/recipient findings
- **Staging**: Bladder, Doppler, hydrops, demise
- **Treatment**: Laser ablation of communicating vessels (preferred)
- **Timing**: Before Quintero stage III or before hydrops

## Fetal Therapy: Comprehensive Review

### Indications and Outcomes

#### Neural Tube Defects
- **Meningocele**: Surgical repair after birth
- **Myelomeningocele**: In utero repair (19-26 weeks) - MOMS trial
- **Outcomes**: Reduced ventriculoperitoneal shunting, improved motor function

#### Lower Urinary Tract Obstruction
- **Etiology**: Posterior urethral valves most common
- **Indications**: Megacystis, oligohydramnios, normal renal appearance
- **Intervention**: Vesicoamniotic shunting or fetal cystoscopy
- **Outcomes**: Variable, renal preservation best if early intervention

#### Congenital Diaphragmatic Hernia
- **Assessment**: Liver position (up = worse), LHR (lung-to-head ratio)
- **Severe cases**: FETO (fetoscopic endoluminal tracheal occlusion)
- **Outcomes**: Improved survival in severe CDH (moderate benefit)

#### Arrhythmias
- **SVT**: Most common tachyarrhythmia
- **Treatment**: Maternal antiarrhythmics (digoxin, flecainide, sotalol)
- **Complete heart block**: Associated with maternal anti-Ro/La antibodies
- **Hydrops**: Poor prognosis without treatment

## Delivery Planning

### Timing of Delivery

#### Indications for Early Delivery
| Condition | Timing | Rationale |
|-----------|--------|-----------|
| Severe preeclampsia | 34+ weeks | Maternal/fetal stability |
| IUGR with absent/reversed EDF | 32-34 weeks | Fetal compromise |
| Uncontrolled diabetes | 38-39 weeks | Stillbirth risk |
| Twins | 38 weeks | Stillbirth risk |
| Triplets | 35-36 weeks | Stillbirth risk |
| Monoamniotic twins | 32-34 weeks | Cord accident risk |

#### Preterm Delivery Counseling
- **Corticosteroids**: Betamethasone 12 mg x 2 doses 24 hours apart
- **Magnesium sulfate**: Neuroprotection if <32 weeks
- **Group B Strep**: Penicillin prophylaxis if positive/unknown
- **Tocolysis**: Consider for antenatal steroid administration or transport

### Mode of Delivery

#### Indications for Cesarean
- **Malpresentation**: Breech, transverse (especially if labor imminent)
- **Placenta previa**: Complete previa (cesarean required)
- **Abruption**: acute abruption with non-reassuring tracing
- **Prior classical cesarean**: Repeat cesarean
- **Fetal indications**: Non-reassuring tracing, certain anomalies

#### Trial of Labor After Cesarean (TOLAC)
- **Candidates**: One prior low transverse incision, no contraindications
- **Success rate**: ~70-75% overall
- **Risks**: Uterine rupture (0.5-1%), need for emergent cesarean
- **VBAC benefits**: Faster recovery, fewer complications

## Neonatal Transition

### Immediate Newborn Assessment

#### Apgar Score
| Score | 0 | 1 | 2 |
|-------|---|---|---|
| Appearance (color) | Blue/pale | Body pink, blue extremities | Completely pink |
| Pulse (heart rate) | Absent | <100 | ≥100 |
| Grimace (reflex) | No response | Grimace | Vigorous cry |
| Activity (muscle tone) | Limp | Some flexion | Active movement |
| Respiration | Absent | Slow/irregular | Good, crying |

#### Stabilization Priorities
1. **Airway**: Positioning, suctioning if needed
2. **Breathing**: PPV if HR <100 or apneic
3. **Circulation**: Chest compressions if HR <60 despite PPV
4. **Drugs**: Epinephrine if HR <60 after compressions

### Complications of Preterm Birth

#### Respiratory Distress Syndrome (RDS)
- **Incidence**: Nearly universal at <28 weeks
- **Treatment**: Surfactant, CPAP, mechanical ventilation
- **Prevention**: Antenatal corticosteroids, delaying delivery if possible

#### Intraventricular Hemorrhage (IVH)
- **Incidence**: ~20% at <28 weeks, decreasing with improved care
- **Grades**: I-IV based on extent and ventricular involvement
- **Prevention**: Gentle ventilation, avoid fluctuations in BP/CO2

#### Necrotizing Enterocolitis (NEC)
- **Incidence**: ~7% in very low birth weight
- **Risk factors**: Formula feeding, immature gut, dysbiosis
- **Treatment**: NPO, antibiotics, possible surgical intervention

#### Retinopathy of Prematurity (ROP)
- **Pathophysiology**: Abnormal vascular development
- **Risk**: Extreme prematurity, oxygen exposure
- **Screening**: Starting at 30-31 weeks for <1500g or <30 weeks

## Long-Term Outcomes

### Neurodevelopmental Outcomes

#### Extreme Preterm (<28 weeks)
- **Normal**: ~50%
- **Mild impairment**: ~25%
- **Moderate-severe**: ~15%
- **Severe disability**: ~10%

#### Predictive Factors
- **Gestational age**: Most significant predictor
- **Brain injury**: IVH, PVL strongly predictive
- **Social factors**: SES, stimulation, nutrition
- **Interventions**: Early intervention improves outcomes

### Growth and Metabolism

#### Postnatal Growth Failure
- **Etiology**: Increased nutritional needs, medical complications
- **Extrauterine growth restriction**: Common in preterm infants
- **Catch-up growth**: Often incomplete, especially for extremely preterm
- **Long-term**: May contribute to metabolic syndrome risk

#### Programming Effects
- **Rapid weight gain**: Associated with later obesity
- **Breastfeeding**: Protective against obesity, improves cognition
- **Nutrient timing**: Critical windows for certain nutrients

## Ethical Considerations in Fetal Medicine

### Periviability Counseling
- **Range**: 22-25 weeks represents gray zone
- **Family values**: Respecting diverse perspectives
- **Informed decision-making**: Presenting options without bias
- **Institutional variation**: Different centers have different practices

### Multiple Pregnancy Reductions
- **Indications**: High-order multiples, complications
- **Ethical debates**: Selective reduction vs. pregnancy continuation
- **Technique**: Transabdominal or transcervical KCl injection
- **Psychological aspects**: Complex grief and decision-making

### Resource Allocation
- **Cost of extreme prematurity**: $1M+ per infant
- **Cost-effectiveness**: Prevention vs. treatment
- **Justice**: Access to care across socioeconomic strata
- **Policy**: Balancing individual and societal needs

## Conclusion: The Lifelong Impact

Fetal development is not merely about growth from a small beginning to birth size. It is a period of:
- **Programming**: Lifelong health trajectories established
- **Plasticity**: Environmental influences shape development
- **Vulnerability**: Sensitive periods for specific outcomes
- **Resilience**: Remarkable capacity for adaptation
- **Continuity**: Fetal experiences echo through the lifespan

Understanding fetal development at the master level requires integrating basic science, clinical medicine, ethics, public health, and an appreciation for the profound responsibility of caring for two patients - mother and fetus - whose interests are usually aligned but may sometimes conflict.

The art and science of fetal medicine continues to evolve, offering hope for conditions once considered hopeless while raising new ethical questions about the boundaries of intervention and the meaning of our growing capabilities.
      `,
      flashcards: [
        {
          id: 'fd1-mas',
          front: 'What are the Quintero stages for TTTS?',
          back: 'Stage I: Bladder visible in donor; II: Bladder not visible in donor; III: Critical Doppler findings; IV: Hydrops present; V: Demise of one or both twins.'
        },
        {
          id: 'fd2-mas',
          front: 'What is the first-line tocolytic for preterm labor?',
          back: 'Nifedipine (a calcium channel blocker) is first-line tocolytic therapy. Indomethacin is used <32 weeks, magnesium sulfate for both tocolysis and neuroprotection.'
        },
        {
          id: 'fd3-mas',
          front: 'What are the components of the quad screen?',
          back: 'AFP (neural tube defects), hCG (trisomy 21 high, 18 low), estriol (trisomy 21 low), and inhibin A (trisomy 21 high).'
        },
        {
          id: 'fd4-mas',
          front: 'What is the management of severe preeclampsia?',
          back: 'Magnesium sulfate for seizure prophylaxis, antihypertensive medications (labetalol, hydralazine), and delivery (definitive treatment) once maternal-fetal condition stabilized.'
        },
        {
          id: 'fd5-mas',
          front: 'What is the evidence for antenatal corticosteroids?',
          back: 'Betamethasone 12 mg IM x 2 doses 24 hours apart reduces RDS, IVH, and mortality in preterm infants <34 weeks. Benefit maximal at 24-48 hours after first dose, lasts ~7 days.'
        }
      ],
      quiz: [
        {
          id: 'q1-mas',
          question: 'What is the first-line tocolytic for management of preterm labor?',
          options: ['Indomethacin', 'Nifedipine', 'Magnesium sulfate', 'Terbutaline'],
          correctAnswer: 1,
          explanation: 'Nifedipine, a calcium channel blocker, is first-line tocolytic therapy. Indomethacin is used <32 weeks due to ductus arteriosus closure risk.'
        },
        {
          id: 'q2-mas',
          question: 'What is the primary indication for magnesium sulfate in preterm labor?',
          options: ['Tocolysis only', 'Neuroprotection', 'Seizure prophylaxis', 'Both B and C'],
          correctAnswer: 3,
          explanation: 'Magnesium sulfate serves dual roles: tocolysis and, importantly, fetal neuroprotection when given before delivery <32 weeks, reducing risk of cerebral palsy.'
        },
        {
          id: 'q3-mas',
          question: 'What maternal serum marker is elevated in neural tube defects?',
          options: ['hCG', 'Estriol', 'AFP (alpha-fetoprotein)', 'Inhibin A'],
          correctAnswer: 2,
          explanation: 'Elevated maternal serum AFP (or amniotic fluid AFP) is associated with open neural tube defects and abdominal wall defects due to leakage from fetal compartments.'
        },
        {
          id: 'q4-mas',
          question: 'What is the defining feature of Quintero Stage III TTTS?',
          options: ['Absent bladder in donor twin', 'Hydrops in recipient twin', 'Critically abnormal Dopplers', 'Single twin demise'],
          correctAnswer: 2,
          explanation: 'Quintero Stage III TTTS is defined by critically abnormal Doppler findings (absent/reversed umbilical artery, reversed ductus venosus flow) in either twin.'
        },
        {
          id: 'q5-mas',
          question: 'What is the recommended gestational age for delivery of dichorionic diamniotic twins?',
          options: ['34 weeks', '36 weeks', '38 weeks', '40 weeks'],
          correctAnswer: 2,
          explanation: 'Dichorionic diamniotic twins are typically delivered at 38 weeks due to increased stillbirth risk after this gestational age.'
        }
      ]
    }
  }
};
