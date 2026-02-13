/**
 * Teratogens - Educational Content
 * Agents that cause congenital malformations
 */

import { LegacyEducationalContent } from '../../types';

export const teratogensContent: LegacyEducationalContent = {
  id: 'teratogens',
  title: 'Teratogens',
  category: 'embryology',
  subcategory: 'congenital-anomalies',
  description: 'Comprehensive guide to teratogenic agents, their mechanisms, timing effects, and clinical implications for prenatal counseling',
  levels: {
    1: {
      title: 'Introduction to Teratogens',
      description: 'Learn the fundamental concepts of teratogens and basic principles of prenatal exposure',
      content: `# Introduction to Teratogens

## What Are Teratogens?

A **teratogen** is any agent that can cause a congenital malformation or increase the incidence of a malformation in a fetus. The term comes from the Greek word "teratos" meaning monster.

## Key Principles

### Wilson's Principles of Teratology

1. **Susceptibility to teratogenesis depends on the genotype of the conceptus**
   - Genetic variation influences individual susceptibility
   - Identical exposures may affect fetuses differently

2. **Susceptibility to teratogenesis depends on the developmental stage at exposure**
   - Critical windows exist for organ systems
   - Timing determines the type and severity of effects

3. **Teratogenic agents act in specific ways on developing cells and tissues**
   - Different agents affect different developmental processes
   - Mechanisms vary by agent type

4. **The access of teratogens to developing tissues depends on the nature of the agent**
   - Some agents cross the placenta easily
   - Others are partially or completely blocked

5. **Manifestations of abnormal development are death, malformation, growth retardation, or functional disorder**
   - The four main possible outcomes of exposure

## Categories of Teratogens

### 1. Infectious Agents
- **Rubella virus**: Congenital rubella syndrome
- **Cytomegalovirus (CMV)**: Hearing loss, intellectual disability
- **Toxoplasma gondii**: Chorioretinitis, hydrocephalus
- **Treponema pallidum** (Syphilis): Multiple congenital anomalies

### 2. Physical Agents
- **Ionizing radiation**: Microcephaly, growth restriction
- **Hyperthermia**: Neural tube defects
- **Mechanical factors**: Oligohydramnios sequence

### 3. Chemical Agents
- **Alcohol**: Fetal alcohol spectrum disorders
- **Cigarette smoke**: Growth restriction, behavioral issues
- **Illicit drugs**: Various specific effects

### 4. Medications
- **Isotretinoin**: Severe craniofacial and CNS defects
- **Thalidomide**: Limb reduction defects
- **Warfarin**: Warfarin embryopathy
- **Anticonvulsants**: Neural tube defects, facial dysmorphism

### 5. Maternal Conditions
- **Diabetes**: Caudal regression, cardiac defects
- **Phenylketonuria (PKU)**: Intellectual disability, microcephaly
- **Hyperthyroidism**: Fetal tachycardia, growth issues

## Critical Periods

### All-or-None Period (Weeks 1-2)
- Exposure: Either causes loss of pregnancy or no effect
- Embryo either recovers completely or is lost

### Embryonic Period (Weeks 3-8)
- **Most critical period for structural malformations**
- Organogenesis occurring
- Greatest susceptibility to major birth defects

### Fetal Period (Week 9-Birth)
- Structural defects less common
- **Functional disturbances** more likely
- Growth restriction possible
- Neurodevelopmental effects

## Clinical Applications

### Preconception Counseling
- Review all medications
- Update immunizations
- Screen for chronic conditions
- Discuss lifestyle factors

### Prenatal Assessment
- Detailed exposure history
- Timing and dose of exposure
- Ultrasound surveillance
- Possible specialized testing

### Prevention Strategies
- Avoid known teratogens when possible
- Use safer medication alternatives
- Optimize maternal health before conception
- Early prenatal care`,
      flashcards: [
        {
          id: 'teratogen-definition',
          front: 'What is a teratogen?',
          back: 'Any agent that can cause a congenital malformation or increase the incidence of a malformation in a fetus'
        },
        {
          id: 'wilson-1',
          front: 'What is Wilson\'s first principle of teratology?',
          back: 'Susceptibility to teratogenesis depends on the genotype of the conceptus - genetic variation influences individual susceptibility'
        },
        {
          id: 'wilson-2',
          front: 'What is Wilson\'s second principle of teratology?',
          back: 'Susceptibility to teratogenesis depends on the developmental stage at exposure - critical windows exist for organ systems'
        },
        {
          id: 'critical-period-embryonic',
          front: 'Which period of pregnancy is most critical for structural malformations?',
          back: 'The embryonic period (weeks 3-8) when organogenesis is occurring'
        },
        {
          id: 'all-or-none',
          front: 'What happens during the all-or-none period (weeks 1-2) if teratogen exposure occurs?',
          back: 'Either causes loss of pregnancy or has no effect - the embryo either recovers completely or is lost'
        }
      ],
      quiz: [
        {
          id: 'critical-period-structural',
          question: 'During which period of pregnancy are structural malformations most likely to occur from teratogen exposure?',
          options: [
            'Weeks 1-2 (all-or-none period)',
            'Weeks 3-8 (embryonic period)',
            'Weeks 9-16 (early fetal period)',
            'Weeks 20-40 (late fetal period)'
          ],
          correctAnswer: 1,
          explanation: 'The embryonic period (weeks 3-8) is when organogenesis occurs, making it the most critical time for structural malformations. This is when the major organ systems are forming.'
        },
        {
          id: 'fetal-period-effects',
          question: 'What types of defects are most likely to occur from teratogen exposure during the fetal period (week 9 onwards)?',
          options: [
            'Major structural malformations',
            'Limb reduction defects',
            'Functional disturbances and growth restriction',
            'Neural tube defects'
          ],
          correctAnswer: 2,
          explanation: 'During the fetal period, structural defects are less common. Functional disturbances, growth restriction, and neurodevelopmental effects are more likely from teratogen exposure.'
        },
        {
          id: 'alcohol-effects',
          question: 'Which of the following is NOT a characteristic of Fetal Alcohol Spectrum Disorders (FASD)?',
          options: [
            'Facial dysmorphism (smooth philtrum, thin vermillion)',
            'Growth restriction',
            'Intellectual disability',
            'Limb reduction defects'
          ],
          correctAnswer: 3,
          explanation: 'Limb reduction defects are not typical of FASD. The classic features include facial dysmorphism (smooth philtrum, thin upper lip), growth deficiency, and central nervous system dysfunction.'
        },
        {
          id: 'isotretinoin-timing',
          question: 'A pregnant woman unintentionally took isotretinoin (Accutane) for 2 weeks before realizing she was pregnant at 6 weeks gestation. What is the most appropriate counseling?',
          options: [
            'There is no risk because exposure was brief',
            'The risk is high and detailed anomaly scan is recommended',
            'Termination of pregnancy is the only option',
            'Wait until birth to assess for abnormalities'
          ],
          correctAnswer: 1,
          explanation: 'Isotretinoin is highly teratogenic with significant risk of craniofacial, CNS, and cardiac defects. Detailed ultrasound assessment and counseling about the risks are essential. Exposure during weeks 3-8 (organogenesis) carries the highest risk for structural malformations.'
        },
        {
          id: 'teratogen-mechanism',
          question: 'According to Wilson\'s principles, why do teratogens affect different fetuses differently?',
          options: [
            'The dose always varies between exposures',
            'Genetic susceptibility varies between individuals',
            'Only certain medications cause birth defects',
            'The timing of exposure is always different'
          ],
          correctAnswer: 1,
          explanation: 'Wilson\'s first principle states that susceptibility to teratogenesis depends on the genotype of the conceptus. Genetic variation means that identical exposures can affect fetuses differently due to differences in metabolism, DNA repair, and developmental pathways.'
        }
      ]
    },
    intermediate: {
      title: 'Mechanisms of Teratogenicity',
      description: 'Understand how teratogens disrupt development and specific mechanisms of major teratogens',
      content: `# Mechanisms of Teratogenicity

## Cellular Mechanisms

### 1. Cell Death Mechanisms
- **Apoptosis dysregulation**: Excessive or insufficient programmed cell death
- **Necrosis**: Unplanned cell death from toxicity
- **Disruption of survival pathways**: Growth factor signaling interference

### 2. Cell Proliferation
- **Inhibited cell division**: Cell cycle arrest
- **Altered cell cycle timing**: Disrupted developmental synchrony
- **Growth factor disruption**: Interference with mitogenic signals

### 3. Cell Migration
- **Neural crest disruption**: Failure of proper migration
- **Germ cell migration defects**: Gonadal abnormalities
- **Delayed or premature migration**: Timing errors

### 4. Cell-Cell Interactions
- **Disrupted cell signaling**: Morphogen pathway interference
- **Cell adhesion defects**: Failed tissue organization
- **Extracellular matrix alterations**: Structural scaffolding issues

### 5. Gene Expression
- **Transcription factor disruption**: Altered developmental programs
- **Epigenetic modifications**: DNA methylation, histone changes
- **mRNA processing defects**: Translation errors

## Molecular Pathways Affected

### Folate Pathway
- **Methotrexate**: Dihydrofolate reductase inhibition
- **Anticonvulsants**: Folate antagonism
- **Result**: Neural tube defects, orofacial clefts

### Retinoic Acid Signaling
- **Isotretinoin**: Excess RA signaling
- **Disrupted patterning**: Hox gene dysregulation
- **Result**: Craniofacial, CNS, cardiac defects

### Vascular Development
- **Warfarin**: Vitamin K antagonism
- **ACE inhibitors**: Angiotensin II blockade
- **Result**: Hypoperfusion-related defects

### Neural Crest Migration
- **Alcohol**: Disrupted neural crest migration
- **Retinoids**: Altered crest cell specification
- **Result**: Facial dysmorphogenesis, conotruncal heart defects

## Specific Teratogens

### Alcohol

**Fetal Alcohol Spectrum Disorders (FASD)**
- FAS (most severe): Full syndrome
- pFAS (partial FAS): Some features
- ARND (alcohol-related neurodevelopmental disorder): Neurobehavioral effects

**Mechanisms:**
- Apoptosis induction in neural populations
- Disrupted neural crest migration
- Oxidative stress and free radical damage
- Interference with cell adhesion molecules
- Growth factor signaling disruption
- Glutamate excitotoxicity

**Dose-Response:**
- No safe threshold established
- Binge drinking particularly harmful
- Pattern and timing matter

**Clinical Features:**
- Facial: Smooth philtrum, thin vermillion, short palpebral fissures
- Growth: Prenatal and postnatal restriction
- CNS: Microcephaly, intellectual disability, behavioral problems
- Other: Cardiac defects, skeletal anomalies

### Isotretinoin (13-cis-retinoic Acid)

**Mechanism:**
- Excess retinoic acid signaling
- Hox gene dysregulation
- Disrupted cranial neural crest
- Altered hindbrain patterning

**Risk:**
- Approximately 20% risk of major malformation
- Critical period: First trimester
- Pregnancy prevention program mandatory

**Malformations:**
- CNS: Hydrocephalus, microcephaly, structural brain anomalies
- Craniofacial: Microtia/anotia, facial asymmetry, cleft palate
- Cardiac: Conotruncal defects (TOF, TGA)
- Thymic: Aplasia/hypoplasia

### Anticonvulsants

**Valproic Acid:**
- Folate antagonism
- Histone deacetylase inhibition
- Oxidative stress

**Effects:**
- NTDs (1-2% risk)
- Facial dysmorphism
- Cognitive impairment
- Autism spectrum disorder (increased risk)

**Carbamazepine:**
- NTDs (0.5-1% risk)
- Minor craniofacial features
- Developmental delay

**Phenytoin:**
- Fetal hydantoin syndrome
- Hypoplastic nails/distal phalanges
- Facial features
- Growth deficiency

**Lamotrigine:**
- Relatively safe
- Isolated oral cleft reports

**Levetiracetam:**
- Favorable safety profile
- First-line in pregnancy

### Thalidomide

**Mechanism:**
- Antiangiogenic (VEGF, FGF inhibition)
- Cereblon protein binding
- Oxidative stress
- Limb bud vasculature disruption

**Critical Period:**
- Days 20-36 post-conception
- Narrow window of susceptibility

**Defects:**
- Limb: Phocomelia, amelia
- Ear: Anotia/microtia
- Eye: Anophthalmia/microphthalmia
- Cardiac: Septal defects
- Renal: Agenesis/dysgenesis

### ACE Inhibitors

**Mechanism:**
- Angiotensin II blockade
- Renal hypoperfusion
- Oligohydramnios
- Pulmonary hypoplasia

**Fetal Effects:**
- Renal tubular dysplasia
- Oligohydramnios sequence
- Pulmonary hypoplasia
- Calvarial hypoplasia
- Growth restriction
- Contraindicated in pregnancy

### Warfarin

**Mechanism:**
- Vitamin K antagonism
- Cartilage and bone hemorrhage
- Protein C/S disruption

**Warfarin Embryopathy:**
- Nasal hypoplasia
- Stippled epiphyses
- Limb shortening
- Optic atrophy
- Developmental delay

### Antithyroid Drugs

**Methimazole/Carbimazole:**
- Embryopathy specific to these agents
- Choanal atresia
- Scalp defects (aplasia cutis)
- Facial dysmorphism
- Intellectual disability

**PTU (Propylthiouracil):**
- Preferred in pregnancy
- Lower risk of embryopathy
- Hepatotoxicity risk (mother)

## Infectious Teratogens

### Rubella

**Mechanism:**
- Direct cytopathic effect
- Vasculitis
- Chronic infection

**Congenital Rubella Syndrome:**
- Sensorineural hearing loss
- Cataracts/glaucoma/retinopathy
- Congenital heart disease (PDA, pulmonary stenosis)
- Microcephaly, intellectual disability
- Hepatosplenomegaly, thrombocytopenia
- Diabetes mellitus (later onset)

### Cytomegalovirus (CMV)

**Most common congenital infection**
- Sensorineural hearing loss (most common sequela)
- Chorioretinitis
- Microcephaly
- Periventricular calcifications
- Hepatosplenomegaly
- Thrombocytopenia

### Toxoplasmosis

**Triad:**
- Chorioretinitis
- Intracranial calcifications
- Hydrocephalus

### Varicella

**Maternal infection (rare in pregnancy)**
- Congenital varicella syndrome if first trimester
- Cicatricial skin scarring
- Limb hypoplasia
- Microphthalmia
- CNS abnormalities

### Zika Virus

**Microcephaly**
- Severe brain malformations
- Ventriculomegaly
- Intracranial calcifications
- Arthrogryposis
- Ocular abnormalities

## Maternal Conditions

### Diabetes Mellitus

**Hyperglycemia effects:**
- Oxidative stress
- Altered signaling pathways
- Free radical damage

**Malformations:**
- Caudal regression (sacral agenesis)
- Cardiac defects (VSD, TGA, coarctation)
- NTDs
- Renal anomalies
- Situs inversus

### Phenylketonuria (PKU)

**Elevated phenylalanine:**
- Neurotoxicity
- Disrupted protein synthesis
- Microcephaly
- Congenital heart disease
- Intellectual disability
- Growth restriction

**Importance of dietary control**

### Obesity

**Mechanisms:**
- Inflammation
- Insulin resistance
- Altered hormone levels

**Increased risks:**
- NTDs
- Cardiac defects
- Orofacial clefts
- Limb reduction defects
- Macrosomia-related complications`,
      flashcards: [
        {
          id: 'alcohol-mechanism',
          front: 'What are the primary mechanisms of alcohol teratogenicity?',
          back: 'Apoptosis induction in neural populations, disrupted neural crest migration, oxidative stress and free radical damage, interference with cell adhesion molecules, growth factor signaling disruption, and glutamate excitotoxicity'
        },
        {
          id: 'isotretinoin-risk',
          front: 'What is the approximate risk of major malformation with isotretinoin exposure during pregnancy?',
          back: 'Approximately 20% risk of major malformation, with critical period being the first trimester'
        },
        {
          id: 'thalidomide-window',
          front: 'What is the critical period for thalidomide teratogenicity?',
          back: 'Days 20-36 post-conception, which is a very narrow window of susceptibility'
        },
        {
          id: 'valproate-ntd-risk',
          front: 'What is the risk of neural tube defects with valproic acid exposure?',
          back: '1-2% risk of neural tube defects, along with facial dysmorphism, cognitive impairment, and increased risk of autism spectrum disorder'
        },
        {
          id: 'ace-inhibitor-effects',
          front: 'What are the characteristic fetal effects of ACE inhibitor exposure?',
          back: 'Renal tubular dysplasia, oligohydramnios sequence, pulmonary hypoplasia, calvarial hypoplasia, and growth restriction'
        }
      ],
      quiz: [
        {
          id: 'thalidomide-mechanism',
          question: 'What is the primary mechanism of thalidomide teratogenicity?',
          options: [
            'Neural crest disruption',
            'Antiangiogenic effects through VEGF and FGF inhibition',
            'Folate pathway antagonism',
            'Retinoic acid signaling disruption'
          ],
          correctAnswer: 1,
          explanation: 'Thalidomide\'s primary teratogenic mechanism is antiangiogenesis through inhibition of VEGF and FGF signaling, which disrupts limb bud vasculature and leads to limb reduction defects.'
        },
        {
          id: 'warfarin-embryopathy',
          question: 'Which of the following is NOT a feature of warfarin embryopathy?',
          options: [
            'Nasal hypoplasia',
            'Stippled epiphyses',
            'Neural tube defects',
            'Limb shortening'
          ],
          correctAnswer: 2,
          explanation: 'Neural tube defects are not typical of warfarin embryopathy. The classic features include nasal hypoplasia, stippled epiphyses, limb shortening, optic atrophy, and developmental delay caused by vitamin K antagonism and hemorrhage into cartilage and bone.'
        },
        {
          id: 'methimazole-vs-ptu',
          question: 'Why is propylthiouracil (PTU) generally preferred over methimazole during pregnancy?',
          options: [
            'PTU is more effective at controlling hyperthyroidism',
            'Methimazole causes maternal liver toxicity',
            'Methimazole is associated with a specific embryopathy (choanal atresia, aplasia cutis)',
            'PTU has no side effects'
          ],
          correctAnswer: 2,
          explanation: 'Methimazole and carbimazole are associated with a specific embryopathy including choanal atresia, scalp defects (aplasia cutis), facial dysmorphism, and intellectual disability. PTU has a lower risk of embryopathy, though it carries risk of maternal hepatotoxicity.'
        },
        {
          id: 'diabetes-caudal-regression',
          question: 'Which congenital malformation is most characteristic of poorly controlled maternal diabetes?',
          options: [
            'Neural tube defects',
            'Caudal regression syndrome (sacral agenesis)',
            'Orofacial clefts',
            'Limb reduction defects'
          ],
          correctAnswer: 1,
          explanation: 'Caudal regression syndrome (sacral agenesis) is the most characteristic malformation of diabetic embryopathy, though cardiac defects, NTDs, and renal anomalies are also increased.'
        },
        {
          id: 'cmv-most-common',
          question: 'Which is the most common sequela of congenital cytomegalovirus infection?',
          options: [
            'Chorioretinitis',
            'Microcephaly',
            'Sensorineural hearing loss',
            'Intellectual disability'
          ],
          correctAnswer: 2,
          explanation: 'Sensorineural hearing loss is the most common sequela of congenital CMV infection, affecting approximately 10-15% of symptomatic infants and a smaller percentage of asymptomatic infants. It may be present at birth or develop later.'
        }
      ]
    },
    advanced: {
      title: 'Clinical Assessment and Counseling',
      description: 'Learn how to assess teratogenic risk, perform counseling, and manage exposed pregnancies',
      content: `# Clinical Assessment and Counseling

## Risk Assessment Framework

### Step 1: Obtain Comprehensive Exposure History

**Medications:**
- Current and recent medications
- Prescription, OTC, and herbal supplements
- Dose, duration, and timing of use
- Indication for use

**Occupational/Environmental:**
- Workplace chemical exposures
- Radiation exposure
- Heavy metals
- Solvents and pesticides

**Lifestyle:**
- Alcohol, tobacco, illicit drugs
- Dietary supplements
- Herbal preparations

**Infectious:**
- Travel history
- Sick contacts
- Immunization status
- Previous infections

**Maternal Health:**
- Chronic medical conditions
- Acute illnesses during pregnancy
- Fever episodes
- Laboratory abnormalities

### Step 2: Determine Timing and Dose

**Critical Questions:**
- What was the gestational age at exposure?
- What was the dose/duration/frequency?
- Was it a single exposure or chronic?
- Are there multiple exposures?

**Gestational Age Assessment:**
- Last menstrual period (LMP)
- Early ultrasound (most accurate)
- Confirm dating before counseling

### Step 3: Assess Risk Level

**Known Human Teratogen:**
- Clear evidence of human risk
- Quantified risk available
- Specific syndrome/pattern described

**Potential Human Teratogen:**
- Animal evidence
- Limited human data
- Concern but not proven

**Unlikely Teratogen:**
- No consistent evidence
- Reassuring human data
- No biologically plausible mechanism

## Counseling Principles

### General Approach

**1. Establish accurate information:**
- Verify exposure details
- Confirm gestational age
- Review reliable resources

**2. Provide balanced information:**
- Avoid overstating risk
- Acknowledge uncertainty
- Use absolute risks (not relative)

**3. Support decision-making:**
- Non-directive approach
- Present all options
- Respect patient values

**4. Document thoroughly:**
- Exposure details
- Information provided
- Patient understanding
- Decisions made

### Risk Communication Strategies

**Use Absolute Risk:**
- "The baseline risk of major malformations is 3-4%"
- "This medication increases risk to approximately 5%"
- NOT: "Increases risk by 50%" (relative risk)

**Put Risk in Perspective:**
- Compare to everyday risks
- Use visual aids when helpful
- Provide context

**Acknowledge Uncertainty:**
- Not all exposures are fully studied
- Animal data doesn't always translate
- Individual variation exists

**Avoid Teratophobia:**
- Many medications are safe in pregnancy
- Untreated conditions can also be harmful
- Risk-benefit assessment essential

## Specific Counseling Scenarios

### Medication Exposure in Early Pregnancy

**Common Scenario:**
- Patient on medication for chronic condition
- Just discovered pregnancy (6-8 weeks)
- Concerned about fetal effects

**Approach:**
1. Identify the medication and dose
2. Confirm gestational age
3. Review safety data
4. Discuss options:
   - Continue medication if benefits outweigh risks
   - Switch to safer alternative
   - Discontinue if possible and safe
5. Increased monitoring if indicated

### Unplanned Pregnancy on Contraindicated Medication

**Examples:**
- Isotretinoin
- ACE inhibitors/ARBs
- Warfarin
- Methotrexate
- Thalidomide

**Approach:**
1. Confirm pregnancy and gestational age
2. Immediate discontinuation of teratogen
3. Detailed discussion of specific risks
4. Offer specialized testing:
   - Detailed anatomy ultrasound (18-20 weeks)
   - Fetal echocardiogram if indicated
   - Consider invasive testing if appropriate
5. Support patient's decision-making

### Occupational Exposures

**Common Concerns:**
- Chemicals in workplace
- Radiation exposure
- Standing/physical demands
- Stress

**Approach:**
1. Obtain specific exposure details
2. Review available data
3. Consider dose and duration
4. Discuss workplace accommodations
5. When uncertain, take precautionary approach

### Infection Exposure

**Scenario-Based:**
- Rubella non-immune, exposed
- Chickenpox non-immune, exposed
- Travel to Zika area
- Cat ownership (toxoplasmosis)

**Approach:**
1. Confirm immune status if possible
2. Consider post-exposure prophylaxis when available
3. Serial monitoring as indicated
4. Specialized ultrasound assessment

## Testing and Surveillance

### First Trimester

**Chorionic Villus Sampling (CVS):**
- 10-13 weeks gestation
- Chromosomal analysis
- Specific molecular testing when indicated
- Small risk of pregnancy loss

**Consider for:**
- Known/suspected chromosomal syndrome
- Single gene disorder with family history
- Maternal anxiety about specific condition

### Second Trimester

**Detailed Anatomy Ultrasound (18-20 weeks):**
- Standard of care for exposed pregnancies
- Assess structural anomalies
- Growth assessment
- Evaluate specific organ systems

**Fetal Echocardiogram:**
- 18-22 weeks
- Cardiac structural assessment
- Indicated for:
  - Retinoid exposure
  - Diabetes
  - Anticonvulsant exposure
  - Family history of congenital heart disease

**Amniocentesis:**
- 15-18 weeks (or later)
- Chromosomal/microarray analysis
- Specific biochemical testing
- Small risk of pregnancy loss

**Maternal Serum Screening:**
- Integrated screening
- Cell-free DNA (NIPT)
- May detect anomalies related to exposure

### Third Trimester

**Growth Surveillance:**
- Serial ultrasounds
- Monitor for growth restriction
- Assess amniotic fluid

**Functional Assessment:**
- Biophysical profile
- Doppler studies if indicated
- Antenatal testing

## Specialized Resources

### Teratogen Information Services

**Organization of Teratology Information Specialists (OTIS):**
- MotherToBaby network
- Evidence-based counseling
- Pregnancy exposure registries

**Resources:**
- REPRODUCTOX: Database of reproductive risks
- TERIS: Teratogen Information System
- Shepard's Catalog of Teratogenic Agents

### Pregnancy Exposure Registries

**Purpose:**
- Collect data on medication safety
- Prospective follow-up
- Outcome assessment

**Available for:**
- Anticonvulsants
- Antidepressants
- Biologics
- New medications

### Online Resources

**Reliable Sources:**
- MotherToBaby (mothertobaby.org)
- CDC (cdc.gov/pregnancy)
- ACOG Practice Bulletins
- LactMed (for breastfeeding)

## Documentation

### Essential Elements

**Exposure Details:**
- Agent name
- Dose and frequency
- Timing of exposure
- Indication for use
- Duration of use

**Counseling Provided:**
- Information sources used
- Risks discussed (quantified)
- Alternatives presented
- Uncertainties acknowledged

**Patient Response:**
- Understanding demonstrated
- Questions asked
- Decisions made
- Follow-up planned

**Follow-up:**
- Additional testing arranged
- Referrals made
- Subsequent appointments scheduled

## Medication Selection in Pregnancy

### Principles

**1. Use medications only when clearly indicated**
- Benefit should outweigh potential risk
- Consider non-pharmacologic alternatives

**2. Choose medications with known safety profiles**
- Prefer medications used extensively in pregnancy
- Avoid new medications when alternatives exist

**3. Use lowest effective dose**
- Minimize fetal exposure
- Titrate to effect

**4. Avoid polypharmacy when possible**
- Each medication adds risk
- Drug-drug interactions

**5. Consider breastfeeding implications**
- Some safe in pregnancy, not breastfeeding
- Others vice versa

### FDA Pregnancy Categories (Historical)

**A:** Adequate studies, no risk
**B:** Animal studies reassuring, no human studies
**C:** Risk cannot be ruled out
**D:** Positive evidence of risk
**X:** Contraindicated in pregnancy

**Note:** Being replaced by narrative labeling

### Pregnancy and Lactation Labeling Rule (PLLR)

**New Format:**
- Pregnancy summary
- Clinical considerations
- Data (human and animal)
- Lactation summary

## Prevention Strategies

### Preconception Counseling

**For All Women:**
- Review medications
- Update immunizations
- Optimize chronic conditions
- Discuss lifestyle factors
- Folic acid supplementation

**High-Risk Women:**
- Genetics referral
- Preconception specialist consultation
- Medication optimization
- Discuss pregnancy risks

### Medication Review

**Before Pregnancy:**
- Discontinue non-essential medications
- Switch to safer alternatives
- Optimize doses
- Establish baseline function

**During Pregnancy:**
- Minimize new medications
- Choose safest options
- Use lowest effective dose
- Monitor for effects

### Patient Education

**Key Messages:**
- Not all medications are harmful
- Consult healthcare provider before stopping
- Unplanned pregnancies are common
- Plan ahead when possible
- Reliable resources available`,
      flashcards: [
        {
          id: 'risk-communication',
          front: 'What is the best way to communicate teratogenic risk to patients?',
          back: 'Use absolute risk (not relative), put risk in perspective, acknowledge uncertainty, and avoid overstating risk to prevent teratophobia'
        },
        {
          id: 'counseling-principles',
          front: 'What are the key principles of teratogen counseling?',
          back: 'Establish accurate information, provide balanced information, support decision-making with non-directive approach, and document thoroughly'
        },
        {
          id: 'isotretinoin-counseling',
          front: 'A patient discovers she is 6 weeks pregnant and has been taking isotretinoin. What is the appropriate management?',
          back: 'Immediate discontinuation of isotretinoin, detailed discussion of approximately 20% risk of major malformations, offer detailed anatomy ultrasound at 18-20 weeks including fetal echocardiogram, and support patient\'s decision-making'
        },
        {
          id: 'exposure-history-elements',
          front: 'What key elements should be included in a teratogen exposure history?',
          back: 'Medications (prescription, OTC, herbal), occupational/environmental exposures, lifestyle factors (alcohol, tobacco, drugs), infectious exposures, maternal health conditions, and timing/dose of exposures'
        },
        {
          id: 'otis-resource',
          front: 'What is OTIS and what service does it provide?',
          back: 'Organization of Teratology Information Specialists, operating the MotherToBaby network, providing evidence-based counseling on teratogen exposures during pregnancy and breastfeeding'
        }
      ],
      quiz: [
        {
          id: 'risk-communication-absolute',
          question: 'A patient taking valproic acid asks about the risk of neural tube defects. Which statement is most appropriate?',
          options: [
            'The risk of neural tube defects is increased by 20-fold',
            'The baseline risk of neural tube defects is 0.1%, and with valproic acid it increases to 1-2%',
            'Your baby has a high chance of having neural tube defects',
            'The risk is approximately 1 in 1000'
          ],
          correctAnswer: 1,
          explanation: 'The most appropriate response uses absolute risk (baseline plus medication-specific increase) rather than relative risk or vague terms. This provides clear, contextualized information that allows for informed decision-making.'
        },
        {
          id: 'medication-continuation',
          question: 'A patient with bipolar disorder discovers she is pregnant at 8 weeks gestation. She has been taking valproic acid. What is the most appropriate management?',
          options: [
            'Immediately stop valproic acid due to teratogenic risk',
            'Continue valproic acid because untreated bipolar disorder also carries risks',
            'Switch to lithium immediately',
            'Stop valproic acid and start risperidone'
          ],
          correctAnswer: 1,
          explanation: 'The decision to continue or change medication during pregnancy requires balancing the risks of the medication against the risks of untreated maternal illness. This is a shared decision-making process involving the patient, psychiatrist, and obstetrician. The risk to the fetus should be weighed against the risk of relapse.'
        },
        {
          id: 'first-trimester-exposure',
          question: 'A patient took an ACE inhibitor for 2 weeks before realizing she was pregnant at 6 weeks gestation. The medication is stopped. What is the most appropriate next step?',
          options: [
            'Recommend termination due to high risk of severe anomalies',
            'Perform immediate amniocentesis to assess fetal renal function',
            'Reassure that risk is low and schedule routine prenatal care',
            'Schedule detailed anatomy ultrasound and fetal renal assessment at 18-20 weeks'
          ],
          correctAnswer: 3,
          explanation: 'When exposure has occurred, the medication should be stopped and appropriate surveillance arranged. For ACE inhibitors, detailed ultrasound assessment of fetal anatomy including kidneys, amniotic fluid volume, and growth is appropriate. Termination recommendation is inappropriate without comprehensive evaluation.'
        },
        {
          id: 'acne-medication-counseling',
          question: 'A woman planning pregnancy asks about acne treatments. Which statement is correct?',
          options: [
            'Topical retinoids are safe in pregnancy',
            'Oral isotretinoin can be used if pregnancy test is negative',
            'Topical benzoyl peroxide is considered safe in pregnancy',
            'Oral tetracyclines are preferred in pregnancy'
          ],
          correctAnswer: 2,
          explanation: 'Topical benzoyl peroxide is considered low-risk in pregnancy due to minimal systemic absorption. Topical retinoids should be avoided, oral isotretinoin is absolutely contraindicated, and tetracyclines are contraindicated (affects bone/teeth).'
        },
        {
          id: 'depression-medication-selection',
          question: 'A patient with severe depression becomes pregnant. She has been responding well to sertraline. What is the most appropriate recommendation?',
          options: [
            'All antidepressants must be stopped in pregnancy',
            'Continue sertraline if benefits outweigh the small increased risk',
            'Switch to an SSRI with less pregnancy data',
            'Switch to an antipsychotic which are safer in pregnancy'
          ],
          correctAnswer: 1,
          explanation: 'Untreated depression in pregnancy carries risks for both mother and baby. SSRIs like sertraline have extensive pregnancy data and are generally considered compatible with pregnancy. The decision should be individualized, considering the severity of maternal illness and the small potential risks to the fetus.'
        }
      ]
    },
    expert: {
      title: 'Molecular Mechanisms and Emerging Teratogens',
      description: 'Deep dive into molecular teratology and emerging concerns in the field',
      content: `# Molecular Mechanisms and Emerging Teratogens

## Molecular Pathways in Teratogenesis

### Epigenetic Mechanisms

**DNA Methylation:**
- Transgenerational epigenetic inheritance
- Hypomethylation from alcohol exposure
- Hypermethylation from folate antagonists
- Imprinted gene susceptibility

**Histone Modifications:**
- Valproic acid as HDAC inhibitor
- Disrupted chromatin remodeling
- Gene expression dysregulation
- Persistent epigenetic changes

**Non-coding RNAs:**
- miRNA dysregulation by teratogens
- miR-9 and miR-124 in neural development
- Placental miRNA alterations
- Biomarker potential

### Signaling Pathways

**SHH (Sonic Hedgehog) Pathway:**
- Holoprosencephaly pathway
- Cyclopamine inhibition
- Cholesterol modification essential
- Craniofacial development

**Wnt/β-Catenin Pathway:**
- Limb development regulation
- Caudal regression mechanisms
- Planar cell polarity
- Conotruncal heart defects

**FGF (Fibroblast Growth Factor) Pathway:**
- Limb bud induction
- Thalidomide antiangiogenesis
- Branching morphogenesis
- Cranial suture development

**BMP (Bone Morphogenetic Protein) Pathway:**
- Neural crest specification
- Osteochondral development
- NTD prevention
- Valve formation

**Retinoic Acid Pathway:**
- Hox gene patterning
- RA receptor isoforms (RARα, β, γ)
- CYP26 metabolism enzymes
- Hindbrain segmentation

### Oxidative Stress Mechanisms

**Reactive Oxygen Species (ROS):**
- Mitochondrial dysfunction
- Antioxidant depletion
- Lipid peroxidation
- DNA damage

**Antioxidant Defense Systems:**
- Glutathione depletion by alcohol
- Superoxide dismutase alterations
- Catalase activity changes
- Nrf2 pathway disruption

**Inflammatory Pathways:**
- NF-κB activation
- Cytokine dysregulation
- Prostaglandin alterations
- Maternal-fetal interface disruption

### Apoptosis Pathways

**Intrinsic Pathway:**
- Mitochondrial cytochrome c release
- Caspase-9 activation
- Bax/Bak pro-apoptotic
- Bcl-2 anti-apoptotic

**Extrinsic Pathway:**
- Death receptor activation
- Caspase-8 activation
- Fas/FasL signaling
- TNF-α effects

**p53-Mediated Apoptosis:**
- DNA damage response
- Cell cycle arrest
- Developmental apoptosis disruption
- Tissue-specific effects

## Genetic Susceptibility

### Pharmacogenetics

**Drug Metabolism:**
- CYP polymorphisms
- Phase I/II enzyme variations
- Placental transporters (P-gp, BCRP)
- Individual susceptibility

**Folate Pathway:**
- MTHFR polymorphisms
- MTRR variants
- NTD risk interaction
- Gene-environment interactions

**Detoxification Pathways:**
- GST family polymorphisms
- NAT2 acetylation status
- Alcohol metabolism variants
- Oxidative stress susceptibility

### Epigenetic Susceptibility

**Imprinted Genes:**
- Parent-of-origin effects
- IGF2/H19 region
- Prader-Willi/Angelman regions
- Teratogen sensitivity

**Sex-Specific Effects:**
- Male vs female susceptibility
- X-linked protective factors
- Hormonal influences
- Sex chromosome complement

## Placental Mechanisms

### Placental Transport

**Passive Diffusion:**
- Lipophilic substances
- Small molecules
- Concentration gradient dependent
- Alcohol, some drugs

**Active Transport:**
- Amino acid transporters
- Folate receptor
- Iron transport
- Nutrient competition

**Efflux Transporters:**
- P-glycoprotein (ABCB1)
- Breast cancer resistance protein
- Placental protection
- Polymorphism effects

### Placental Metabolism

**Phase I Enzymes:**
- CYP enzymes in placenta
- Variable expression
- Local metabolism
- Fetal protection

**Phase II Enzymes:**
- Conjugation reactions
- GST, UGT, SULT
- Elimination enhancement
- Protection mechanisms

### Placental Barrier Function

**Syncytiotrophoblast Layer:**
- Primary barrier
- Transport regulation
- Hormone production
- Barrier compromise

**Placental Insufficiency:**
- Altered transport
- Oxidative stress
- Inflammatory mediators
- Teratogen potentiation

## Emerging Teratogens

### Environmental Chemicals

**Endocrine Disruptors:**
- BPA (bisphenol A)
- Phthalates
- Pesticides
- Flame retardants

**Mechanisms:**
- Nuclear receptor agonism/antagonism
- Thyroid hormone disruption
- Steroidogenesis interference
- Epigenetic modifications

**Health Effects:**
- Reproductive tract abnormalities
- Neurodevelopmental effects
- Metabolic programming
- Transgenerational effects

**Heavy Metals:**
- Lead (neurodevelopmental toxicity)
- Mercury (Minamata disease)
- Cadmium (skeletal effects)
- Arsenic (cancer, NTDs)

### Air Pollution

**Particulate Matter (PM2.5):**
- Preterm birth association
- Low birth weight
- Placental inflammation
- Oxidative stress mechanisms

**Polycyclic Aromatic Hydrocarbons:**
- DNA adduct formation
- Aryl hydrocarbon receptor
- Developmental toxicity
- Neurodevelopmental effects

### Pesticides

**Organophosphates:**
- Cholinesterase inhibition
- Neurodevelopmental effects
- Cognitive deficits
- Autism spectrum association

**Organochlorines:**
- Persistent organic pollutants
- Endocrine disruption
- Bioaccumulation
- Transgenerational effects

### Nanoparticles

**Unique Properties:**
- Small size (<100 nm)
- Large surface area
- Tissue penetration
- Placental transfer

**Concerns:**
- Titanium dioxide
- Silver nanoparticles
- Carbon nanotubes
- Unknown long-term effects

### Electromagnetic Fields

**Non-Ionizing Radiation:**
- Cell phones
- Power lines
- WiFi
- Inconclusive evidence

**Research Findings:**
- Mixed results
- Potential thermal effects
- Behavioral studies ongoing
- Precautionary principle

## Psychotropic Medications

### SSRIs/SNRIs

**Persistent Pulmonary Hypertension (PPHN):**
- Controversial association
- Absolute risk remains low
- Late gestation exposure
- Potential mechanism

**Neurodevelopmental Outcomes:**
- Autism spectrum studies
- ADHD associations
- Confounding by indication
- Ongoing research

**Withdrawal Syndromes:**
- Neonatal adaptation syndrome
- Respiratory distress
- Feeding difficulties
- Self-limited

### Atypical Antipsychotics

**Metabolic Effects:**
- Gestational diabetes risk
- Weight gain
- Large for gestational age
- Long-term metabolic programming

**Specific Agents:**
- Olanzapine: Higher metabolic risk
- Risperidone: Less data
- Quetiapine: Growing evidence
- Aripiprazole: Limited data

### Benzodiazepines

**Controversies:**
- Cleft palate association (debated)
- Neonatal withdrawal
- Floppy infant syndrome
- Developmental effects

## Anticancer Therapies

### Chemotherapy

**First Trimester:**
- High risk period
- Consider treatment delay
- Organogenesis vulnerability
- Termination discussions

**Second/Third Trimester:**
- Generally safer
- Specific drug risks
- Preterm delivery risk
- Growth restriction

**Long-term Effects:**
- Cardiotoxicity (anthracyclines)
- Gonadal dysfunction
- Secondary malignancies
- Neurocognitive effects

### Targeted Therapies

**Tyrosine Kinase Inhibitors:**
- Limited data
- Theoretical concerns
- Antiangiogenic effects
- Case reports only

**Immunotherapies:**
- Checkpoint inhibitors
- Minimal placental transfer
- Limited experience
- Unknown effects

## Maternal Diet and Nutrition

### Nutritional Excess

**Obesity and Hypernutrition:**
- Metabolic programming
- Inflammation
- Insulin resistance
- Long-term health effects

**High-Fat Diet:**
- Epigenetic changes
- Hypothalamic programming
- Appetite regulation
- Metabolic syndrome risk

### Nutritional Deficiency

**Folate Deficiency:**
- NTD risk increase
- DNA synthesis impairment
- Methylation disturbances
- Public health impact

**Iron Deficiency:**
- Cognitive effects
- Behavioral changes
- Hippocampal effects
- Long-term deficit

**Iodine Deficiency:**
- Cretinism risk
- Neurodevelopmental impairment
- Thyroid hormone disruption
- Global health issue

**Choline Deficiency:**
- Neural tube effects
- Hippocampal development
- Cognitive outcomes
- Interaction with folate

## Assisted Reproductive Technology

### ART as Potential Teratogen

**Epidemiology:**
- Slightly increased malformation risk
- Confounding by infertility
- Multiple gestation
- Epigenetic concerns

**Imprinting Disorders:**
- Beckwith-Wiedemann increase
- Angelman syndrome increase
- Small absolute risk
- ART techniques implicated

**Epigenetic Alterations:**
- Imprinted gene expression
- In vitro culture effects
- Superovulation effects
- Transgenerational concerns

## Novel Therapeutic Agents

### Gene Therapies

**Vector Considerations:**
- Viral vectors
- Integration potential
- Germline modification risk
- Long-term effects unknown

**CRISPR/Cas9:**
- Off-target effects
- Mosaicism
- Germline editing concerns
- Ethical considerations

### RNA Therapeutics

**mRNA Vaccines:**
- COVID-19 experience
- Reassuring data so far
- No DNA integration
- Ongoing surveillance

**siRNA Therapeutics:**
- Limited data
- Placental transfer unknown
- Long-term effects unknown
- Case-by-case assessment

## Cannabis

**Cannabinoid Receptors:**
- CB1/CB2 in developing brain
- Endocannabinoid system role
- Synaptic development
- Neuronal migration

**Epidemiology:**
- Increasing use
- Variable potency
- Polysubstance use common
- Confounding factors

**Concerns:**
- Cognitive effects
- Behavioral issues
- Academic performance
- Mental health

## Opioids

**Opioid Epidemic Impact:**
- Neonatal abstinence syndrome
- Preterm birth
- Growth restriction
- Neurodevelopmental concerns

**NAS Characteristics:**
- CNS hyperirritability
- Autonomic instability
- Gastrointestinal symptoms
- Tone abnormalities

**Long-term Outcomes:**
- Mixed evidence
- Confounded by environment
- Some subtle deficits noted
- Ongoing research`,
      flashcards: [
        {
          id: 'epigenetic-teratogens',
          front: 'What epigenetic mechanisms are involved in teratogenesis?',
          back: 'DNA methylation changes, histone modifications, non-coding RNA (miRNA) dysregulation, and alterations in chromatin remodeling that can lead to persistent gene expression changes'
        },
        {
          id: 'shh-pathway',
          front: 'What is the role of the Sonic Hedgehog (SHH) pathway in teratogenesis?',
          back: 'SHH pathway disruption can cause holoprosencephaly and craniofacial defects. Cyclopamine inhibits SHH, and cholesterol modification is essential for proper signaling'
        },
        {
          id: 'placental-transporters',
          front: 'What are the key placental transporters that provide fetal protection against teratogens?',
          back: 'P-glycoprotein (ABCB1), breast cancer resistance protein (BCRP), and other efflux transporters that pump substances back to maternal circulation. Polymorphisms can affect individual susceptibility'
        },
        {
          id: 'endocrine-disruptors',
          front: 'What are endocrine disruptors and what are their mechanisms of teratogenicity?',
          back: 'Chemicals like BPA, phthalates, and pesticides that act through nuclear receptor agonism/antagonism, thyroid hormone disruption, steroidogenesis interference, and epigenetic modifications'
        },
        {
          id: 'art-imprinting',
          front: 'What imprinting disorders are associated with assisted reproductive technology (ART)?',
          back: 'Beckwith-Wiedemann syndrome and Angelman syndrome show increased incidence with ART, possibly due to epigenetic alterations from in vitro culture, superovulation, or other ART techniques'
        }
      ],
      quiz: [
        {
          id: 'valproate-hdac',
          question: 'Valproic acid exerts its teratogenic effects through which primary molecular mechanism?',
          options: [
            'Folate receptor antagonism',
            'Histone deacetylase (HDAC) inhibition',
            'Neural tube closure interference',
            'Oxidative stress generation'
          ],
          correctAnswer: 1,
          explanation: 'Valproic acid is a histone deacetylase (HDAC) inhibitor that alters chromatin structure and gene expression during critical developmental periods. This epigenetic mechanism contributes to its teratogenic effects including neural tube defects, facial dysmorphism, and neurodevelopmental disorders.'
        },
        {
          id: 'mthfr-interaction',
          question: 'How does the MTHFR C677T polymorphism interact with teratogen exposure?',
          options: [
            'Increases placental transfer of teratogens',
            'Decreases maternal clearance of medications',
            'Reduces folate availability and increases susceptibility to NTDs',
            'Enhances teratogen metabolism'
          ],
          correctAnswer: 2,
          explanation: 'The MTHFR C677T polymorphism reduces enzyme activity, leading to decreased folate availability and increased homocysteine levels. This creates a gene-environment interaction that increases susceptibility to neural tube defects when combined with folate-antagonizing teratogens like certain anticonvulsants.'
        },
        {
          id: 'thc-neurodevelopment',
          question: 'What is the primary concern regarding cannabis exposure during pregnancy?',
          options: [
            'Major structural malformations',
            'Neurodevelopmental and cognitive effects',
            'Growth restriction',
            'Neural tube defects'
          ],
          correctAnswer: 1,
          explanation: 'The primary concerns with prenatal cannabis exposure are neurodevelopmental effects, including potential impacts on cognitive function, attention, academic performance, and mental health. The endocannabinoid system plays important roles in brain development, and THC exposure may disrupt these processes.'
        },
        {
          id: 'pm2.5-placenta',
          question: 'What is the proposed mechanism by which PM2.5 air pollution exposure affects pregnancy outcomes?',
          options: [
            'Direct fetal toxicity',
            'Placental inflammation and oxidative stress',
            'Maternal dehydration',
            'Folate antagonism'
          ],
          correctAnswer: 1,
          explanation: 'PM2.5 air pollution is thought to affect pregnancy outcomes through placental inflammation, oxidative stress, and altered placental function. These mechanisms can lead to increased risks of preterm birth, low birth weight, and potentially developmental effects.'
        },
        {
          id: 'art-imprinting-risk',
          question: 'A child conceived through IVF is found to have Beckwith-Wiedemann syndrome. What is the likely mechanism?',
          options: [
            'Chromosomal aneuploidy from IVF',
            'Point mutation from sperm manipulation',
            'Epigenetic alteration of imprinted genes during ART procedures',
            'Maternal age-related mutation'
          ],
          correctAnswer: 2,
          explanation: 'Beckwith-Wiedemann syndrome is an imprinting disorder that occurs with increased frequency in children conceived through ART. The mechanism is thought to involve epigenetic alterations of imprinted gene regions (such as 11p15.5) during in vitro culture, ovarian stimulation, or other ART procedures.'
        }
      ]
    },
    master: {
      title: 'Teratogenic Risk Assessment and Clinical Management',
      description: 'Master-level integration of teratogen knowledge for clinical practice and research',
      content: `# Teratogenic Risk Assessment and Clinical Management

## Integrated Risk Assessment Framework

### Quantitative Risk Assessment

**Absolute Risk Calculation:**
- Baseline malformation rate: 3-4%
- Agent-specific attributable risk
- Exposure timing and dose considerations
- Individual risk factors

**Risk Stratification:**
- Low: <1% absolute increase
- Moderate: 1-5% absolute increase
- High: >5% absolute increase
- Variable: Depends on dose/timing

**Confidence Levels:**
- Proven human teratogen
- Probable human teratogen
- Possible human teratogen
- Unlikely to be teratogenic

### Clinical Decision Analysis

**Benefit-Risk Assessment:**
- Maternal disease severity
- Fetal risks of exposure
- Fetal risks of untreated disease
- Alternative treatment options
- Patient values and preferences

**Decision Tree Approach:**
1. Is treatment indicated?
2. What are the options?
3. What are the risks of each?
4. What are the benefits of each?
5. Patient preferences?

## Evidence-Based Teratology

### Study Designs

**Observational Studies:**
- Case-control: Efficient for rare outcomes
- Cohort: Prospective data collection
- Case series: Hypothesis generating
- Ecological: Population-level correlations

**Pregnancy Exposure Registries:**
- Prospective enrollment
- Standardized data collection
- Comparison groups
- Long-term follow-up

**Limitations:**
- Confounding by indication
- Recall bias
- Small sample sizes
- Loss to follow-up
- Healthy user bias

### Evidence Grading

**Levels of Evidence:**
- Level A: Good evidence (RCT or cohort)
- Level B: Fair evidence (case-control)
- Level C: Limited evidence (case series)
- Level D: Expert opinion only

**Interpretation:**
- Consistency across studies
- Dose-response relationship
- Biological plausibility
- Temporal relationship
- Strength of association

## Special Populations

### Preconception Counseling

**High-Risk Groups:**
- Chronic medical conditions
- Previous affected pregnancy
- Family history of genetic disorders
- Occupational exposures
- Substance use disorders

**Optimization Strategies:**
- Medication review and adjustment
- Disease control before conception
- Genetic counseling when indicated
- Folic acid supplementation
- Lifestyle modifications

### Epilepsy and Pregnancy

**Balancing Act:**
- Seizure risk to mother/fetus
- Teratogenic risk of medications
- Individual drug selection
- Monotherapy preferred
- Lowest effective dose

**Medication Selection:**
- Lamotrigine: Generally first-line
- Levetiracetam: Good safety profile
- Valproate: Highest risk, avoid if possible
- Carbamazepine: Moderate risk

**Management:**
- Preconception optimization
- Therapeutic drug monitoring
- Folic acid (higher dose: 4-5 mg)
- Detailed ultrasound surveillance
- Vitamin K supplementation

### Mental Health in Pregnancy

**Depression Management:**
- Assess severity
- Consider psychotherapy for mild-moderate
- Medication for moderate-severe
- SSRIs generally first-line
- Avoid paroxetine (higher risk)

**Bipolar Disorder:**
- High relapse risk off medications
- Lithium: Moderate risk (Ebstein anomaly)
- Valproate: Avoid (high risk)
- Atypical antipsychotics: Growing data

**Anxiety Disorders:**
- SSRIs/SNRIs preferred
- Benzodiazepines: Use lowest dose/duration
- CBT effective for many
- Avoid abrupt discontinuation

### Chronic Hypertension

**Medication Options:**
- Labetalol: First-line
- Nifedipine: Safe and effective
- Methyldopa: Long track record
- ACE inhibitors/ARBs: Contraindicated

**Management Goals:**
- BP <140/90 mmHg
- Avoid hypotension
- Monitor for preeclampsia
- Fetal growth surveillance

### Diabetes in Pregnancy

**Pre-existing Diabetes:**
- HbA1c optimization preconception
- Insulin or oral agents
- Frequent glucose monitoring
- Target fasting <95, 2-hr postprandial <120
- Detailed cardiac scan (VSD, TGA, coarctation)
- Monitor for caudal regression

**Gestational Diabetes:**
- Usually managed without medications
- Insulin if diet fails
- Oral agents (metformin, glyburide) possible
- Less teratogenic concern (diagnosis after organogenesis)

## Management of Exposed Pregnancies

### Exposure Assessment Protocol

**Step 1: Verify Exposure Details**
- Exact agent(s)
- Timing (gestational age)
- Dose and duration
- Route of administration
- Indication for use

**Step 2: Determine Risk Category**
- Consult reliable resources
- Search available literature
- Consider timing effects
- Assess dose-response

**Step 3: Patient Counseling**
- Quantify absolute risk
- Present balanced information
- Discuss options
- Support decision-making
- Document thoroughly

### Surveillance Protocols

**First Trimester Exposure:**
- Confirm dating accuracy
- Discuss CVS if indicated
- Baseline ultrasound
- Serum screening options
- Reassurance vs risk disclosure

**Second Trimester:**
- Detailed anatomy scan (18-20 weeks)
- Fetal echocardiogram if indicated
- Growth assessment
- Amniocentesis considerations
- Anomaly-targeted assessment

**Third Trimester:**
- Growth surveillance
- Amniotic fluid assessment
- Antenatal testing if indicated
- Delivery planning
- Neonatal preparation

## Neonatal Considerations

### Teratogen-Specific Neonatal Effects

**Anticonvulsant Exposure:**
- Withdrawal symptoms possible
- Vitamin K deficiency (bleeding risk)
- Feedings difficulties
- Hypoglycemia monitoring
- Long-term neurodevelopmental follow-up

**Antidepressant Exposure:**
- Neonatal adaptation syndrome
- PPHN monitoring (controversial)
- Respiratory support if needed
- Feeding assistance
- Developmental surveillance

**Opioid Exposure:**
- NAS assessment and scoring
- Pharmacologic treatment (morphine, methadone)
- Supportive care measures
- Discharge planning
- Long-term developmental services

### Breastfeeding Considerations

**Medication Compatibility:**
- Many medications compatible
- Consider infant age/prematurity
- Drug properties: protein binding, half-life
- LactMed resource
- Relative infant dose <10% usually safe

**Contraindicated:**
- Radioactive compounds
- Some chemotherapy agents
- Certain illicit substances
- Some psychiatric medications

## Ethical Considerations

### Autonomy and Informed Consent

**Patient-Centered Counseling:**
- Present all options
- Non-directive approach
- Respect cultural values
- Support informed choice
- Avoid coercion

**Uncertainty Communication:**
- Acknowledge limits of knowledge
- Discuss probability, not certainty
- Individual risk assessment
- Evolving evidence

### Reproductive Rights

**Pregnancy Continuation Decisions:**
- Termination considerations
- Patient values and beliefs
- Legal framework
- Access to care
- Non-judgmental support

### Resource Allocation

**Surveillance Decisions:**
- Cost-effectiveness considerations
- Access to specialized testing
- Healthcare disparities
- Insurance coverage issues
- Global health perspectives

## Research Directions

### Emerging Areas

**Epigenetic Teratology:**
- Transgenerational effects
- Mechanisms of epigenetic inheritance
- Reversibility potential
- Biomarker development

**Exposome Research:**
- Total environmental exposure assessment
- Multiple exposure interactions
- Cumulative risk modeling
- Personalized risk prediction

**Pharmacogenomics:**
- Genetic susceptibility testing
- Personalized medication selection
- Dose optimization
- Adverse effect prediction

**Placental Research:**
- Placenta-on-a-chip models
- Transport mechanism studies
- Metabolic capacity assessment
- Barrier function evaluation

### Artificial Intelligence Applications

**Risk Prediction Models:**
- Machine learning algorithms
- Big data integration
- Pattern recognition
- Individual risk stratification

**Clinical Decision Support:**
- Exposure assessment tools
- Risk calculators
- Treatment recommendations
- Patient education materials

## Global Perspectives

### Healthcare Disparities

**Access to Information:**
- Teratogen information service availability
- Language and cultural barriers
- Health literacy considerations
- Digital divide issues

**Access to Care:**
- Prenatal care availability
- Specialized testing access
- Medication options
- Postnatal services

### Public Health Approaches

**Primary Prevention:**
- Preconception care programs
- Medication labeling improvements
- Healthcare provider education
- Public awareness campaigns

**Secondary Prevention:**
- Early pregnancy detection
- Rapid access to counseling
- Exposure minimization strategies
- Timely screening and diagnosis

**Tertiary Prevention:**
- Early intervention programs
- Multidisciplinary care
- Family support services
- Long-term follow-up

## Professional Resources and Guidelines

### Specialty Society Guidelines

**ACOG (American College of Obstetricians and Gynecologists):**
- Committee opinions on teratogens
- Practice bulletins
- Medication guidelines
- Patient resources

**AAP (American Academy of Pediatrics):**
- Neonatal resuscitation considerations
- Breastfeeding guidelines
- Developmental surveillance
- Long-term management

**ACMG (American College of Medical Genetics and Genomics):**
- Genetic testing considerations
- Prenatal diagnosis guidelines
- Family history assessment
- Variant interpretation

### International Resources

**ENTIS (European Network of Teratology Information Services):**
- European teratology services
- Collaborative research
- Standardized protocols
- Data sharing

**OTIS/MotherToBaby:**
- North American services
- Research collaboration
- Patient education materials
- Healthcare provider resources

## Lifelong Learning

### Staying Current

**Regular Updates:**
- New medication approvals
- Emerging evidence
- Labeling changes
- New teratogen identification

**Resources:**
- REPROTOX database
- TERIS database
- Shepard's Catalog
- Primary literature
- Professional conferences

### Quality Improvement

**Case Review:**
- Deidentified case discussions
- Multidisciplinary input
- Outcome tracking
- Process improvement

**Patient Feedback:**
- Satisfaction surveys
- Understanding assessment
- Communication improvement
- Resource development`,
      flashcards: [
        {
          id: 'risk-stratification',
          front: 'How is teratogenic risk stratified by absolute increase?',
          back: 'Low: <1% absolute increase above baseline, Moderate: 1-5% absolute increase, High: >5% absolute increase, Variable: Depends on dose/timing factors'
        },
        {
          id: 'epilepsy-pregnancy',
          front: 'What are the first-line antiseizure medications in pregnancy?',
          back: 'Lamotrigine and levetiracetam are generally first-line due to favorable safety profiles. Valproate should be avoided if possible due to high teratogenic risk including NTDs, cognitive impairment, and autism spectrum disorder risk'
        },
        {
          id: 'hypertension-pregnancy',
          front: 'Which antihypertensives are contraindicated in pregnancy?',
          back: 'ACE inhibitors and ARBs are contraindicated due to risk of renal tubular dysplasia, oligohydramnios sequence, pulmonary hypoplasia, calvarial hypoplasia, and fetal death'
        },
        {
          id: 'breastfeeding-safety',
          front: 'What is the general guideline for medication compatibility during breastfeeding?',
          back: 'Relative infant dose <10% is generally considered compatible with breastfeeding. Many medications are safe, but need to consider infant age, prematurity, drug properties (protein binding, half-life). Consult LactMed for specific information'
        },
        {
          id: 'evidence-levels',
          front: 'What are the levels of evidence in teratology?',
          back: 'Level A: Good evidence from RCT or cohort studies, Level B: Fair evidence from case-control studies, Level C: Limited evidence from case series, Level D: Expert opinion only'
        }
      ],
      quiz: [
        {
          id: 'risk-calculation-baseline',
          question: 'A patient took a medication with a 2% attributable risk of major malformations. What is the total absolute risk to the fetus?',
          options: [
            '2%',
            '3-4%',
            '5-6%',
            '7-8%'
          ],
          correctAnswer: 2,
          explanation: 'The baseline risk of major malformations in the general population is 3-4%. Adding the medication\'s attributable risk of 2% gives a total absolute risk of 5-6%. This is how teratogenic risk should be communicated to patients.'
        },
        {
          id: 'epilepsy-management',
          question: 'A woman with epilepsy planning pregnancy is on valproic acid 1000 mg daily with good seizure control. What is the most appropriate recommendation?',
          options: [
            'Continue valproate as seizure control is most important',
            'Switch to lamotrigine before pregnancy',
            'Increase folic acid to 4 mg and continue valproate',
            'Stop all antiseizure medications'
          ],
          correctAnswer: 1,
          explanation: 'Women with epilepsy should be optimized before pregnancy. Given valproate\'s high teratogenic risk, switching to a safer alternative like lamotrigine before pregnancy is appropriate, if seizure control can be maintained. This requires careful neurology consultation and may involve cross-taper.'
        },
        {
          id: 'prenatal-exposure-registry',
          question: 'What is the primary purpose of pregnancy exposure registries?',
          options: [
            'To provide legal protection for pharmaceutical companies',
            'To prospectively collect data on medication safety in pregnancy',
            'To require women to terminate exposed pregnancies',
            'To track medications for regulatory approval'
          ],
          correctAnswer: 1,
          explanation: 'Pregnancy exposure registries prospectively enroll women exposed to medications during pregnancy and follow outcomes to provide safety data. They help quantify teratogenic risks, identify rare outcomes, and fill gaps in knowledge about medication use in pregnancy.'
        },
        {
          id: 'depression-medication-selection',
          question: 'A patient with recurrent major depression becomes pregnant. She has had two relapses requiring hospitalization when off medications. She is currently responding well to sertraline. What is the most appropriate management?',
          options: [
            'Immediately discontinue sertraline due to pregnancy',
            'Continue sertraline with ongoing psychiatric care',
          'Switch to an antipsychotic which are safer',
          'Use psychotherapy alone as medications are contraindicated'
          ],
          correctAnswer: 1,
          explanation: 'For patients with severe recurrent depression, the risks of untreated maternal illness often outweigh the small potential risks of SSRI exposure. Sertraline has extensive pregnancy safety data and is generally considered compatible. The decision should involve psychiatric and obstetric collaboration.'
        },
        {
          id: 'breastfeeding-antipsychotic',
          question: 'A patient wishes to breastfeed while taking olanzapine for bipolar disorder. What is appropriate counseling?',
          options: [
            'Breastfeeding is absolutely contraindicated with all antipsychotics',
            'Olanzapine is considered compatible with breastfeeding with monitoring',
            'Only haloperidol is safe while breastfeeding',
            'She must choose between breastfeeding and her medication'
          ],
          correctAnswer: 1,
          explanation: 'Olanzapine is considered relatively compatible with breastfeeding. The relative infant dose is generally <10%, and adverse effects are uncommon. Infant monitoring for sedation, adequate weight gain, and developmental achievement is recommended. Decisions should be individualized.'
        }
      ]
    }
  }
};
