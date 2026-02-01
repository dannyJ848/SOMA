import { EducationalContent } from '../../types';

export const highAlertMedicationsContent: EducationalContent = {
  id: 'high-alert-medications',
  type: 'concept',
  name: 'High-Alert Medications',
  nameEs: 'Medicamentos de Alto Riesgo',
  alternateNames: ['High-Risk Medications', 'Dangerous Drugs', 'Critical Medications'],
  levels: {
    1: {
      level: 1,
      summary: 'High-alert medications are drugs that can cause serious harm if given incorrectly. Extra safety steps are used when giving these medicines.',
      explanation: `## Medicines That Need Extra Care

High-alert medications are drugs that can cause serious harm if given incorrectly. Extra safety steps are used when giving these medicines.

### Common High-Alert Medicines

- Insulin (for diabetes)
- Blood thinners
- Heart medicines
- Chemotherapy
- Strong pain medicines

### Why They Are Risky

- Small dose changes matter
- Can cause serious bleeding
- Can drop blood sugar too low
- Can slow breathing
- Can affect heart rhythm

### Safety Steps

- Double-checking doses
- Special storage
- Extra labeling
- Extra training for staff
- Patient education

### What You Can Do

- Know if you take high-alert meds
- Ask questions about changes
- Watch for side effects
- Carry a list of your medicines
- Use the same pharmacy

### If Something Seems Wrong

- Ask before taking
- Question dose changes
- Report side effects
- Keep follow-up appointments`,
      keyTerms: [
        { term: 'High-alert medication', definition: 'Drug with high risk of causing harm' },
        { term: 'Double-check', definition: 'Two people verify before giving' },
        { term: 'Blood thinner', definition: 'Medicine to prevent blood clots' },
        { term: 'Side effect', definition: 'Unwanted effect of medicine' }
      ],
      analogies: [
        'High-alert medications are like driving on a mountain road - extra caution needed'
      ],
      examples: [
        'A pharmacist calls the doctor to confirm an unusually high insulin dose',
        'Two nurses check a chemotherapy dose before it is given'
      ]
    },
    2: {
      level: 2,
      summary: 'High-alert medications are drugs that bear a heightened risk of causing significant patient harm when used in error. Special safeguards including independent double-checks, standardized protocols, and enhanced monitoring are required for their safe use.',
      explanation: `## Understanding High-Alert Medications

High-alert medications are drugs that bear a heightened risk of causing significant patient harm when used in error. Special safeguards including independent double-checks, standardized protocols, and enhanced monitoring are required for their safe use.

### ISMP High-Alert Medication Classes

**Classes:**
- Anticoagulants (blood thinners)
- Opioids
- Insulins
- Chemotherapy
- Neuromuscular blocking agents
- Adrenergic agonists
- Adrenergic antagonists
- Anesthetic agents
- Concentrated electrolytes
- Liposomal formulations
- Moderate sedation agents
- Parental nutrition

**Specific High-Alert Drugs:**
- Methotrexate
- Magnesium sulfate
- Potassium chloride
- Heparin
- Warfarin
- Morphine

### Why Errors Are Serious

**Characteristics:**
- Narrow therapeutic index
- Serious consequences
- Easy to confuse
- Dose calculation errors
- Patient-specific dosing

**Consequences of Errors:**
- Death
- Permanent harm
- Extended hospitalization
- Life-threatening events

### Safety Strategies

**Storage:**
- Separate from other medications
- Special labeling
- Restricted access
- Tall man lettering

**Ordering:**
- Standardized protocols
- Dose limits
- Clinical decision support
- Indication required

**Dispensing:**
- Independent double-checks
- Automated alerts
- Clinical pharmacist review
- Limit quantities

**Administration:**
- Two-person verification
- Barcode scanning
- Vital sign monitoring
- Antidotes available

### Patient Education

**Key Points:**
- Purpose of medication
- Signs of toxicity
- Monitoring requirements
- When to seek help
- Adherence importance`,
      keyTerms: [
        { term: 'ISMP', definition: 'Institute for Safe Medication Practices' },
        { term: 'Therapeutic index', definition: 'Range between effective and toxic dose' },
        { term: 'Double-check', definition: 'Independent verification by second person' },
        { term: 'Tall man lettering', definition: 'Mixed case to highlight differences' }
      ],
      analogies: [
        'High-alert medications are like handling explosives - special training and procedures required'
      ],
      examples: [
        'Heparin and insulin stored separately in pharmacy due to look-alike vials',
        'Two nurses independently calculate pediatric chemotherapy dose before administration'
      ]
    },
    3: {
      level: 3,
      summary: 'High-alert medication errors have resulted in serious patient harm and deaths, driving development of specific safety protocols. Institutional safeguards include standardized concentrations, smart pump drug libraries, anticoagulation management services, and medication error reporting to ISMP.',
      explanation: `## Specific High-Alert Drug Safety

High-alert medication errors have resulted in serious patient harm and deaths, driving development of specific safety protocols. Institutional safeguards include standardized concentrations, smart pump drug libraries, anticoagulation management services, and medication error reporting to ISMP.

### Anticoagulants

**High-Risk Drugs:**
- Heparin (unfractionated and LMWH)
- Warfarin
- Direct oral anticoagulants (DOACs)

**Safety Measures:**
- Weight-based dosing
- Protocol-driven ordering
- Laboratory monitoring
- Reversal agents available
- Bleeding precautions
- Drug interaction checks

**VTE Prophylaxis vs Treatment:**
- Different dosing
- Clear indication
- Renal function consideration
- Dose verification

### Insulin

**Error-Prone Aspects:**
- U-100 vs U-500
- Rapid vs long-acting
- Look-alike names
- Dose confusion

**Safety Strategies:**
- U-500 special protocols
- Separate storage
- "U" not used alone
- Second nurse verification
- Hypoglycemia protocols
- Point-of-care glucose

**Patient Self-Management:**
- Education requirements
- Visual impairment aids
- Cognitive assessment
- Sharps disposal

### Opioids

**Safety Concerns:**
- Respiratory depression
- Overdose risk
- Addiction potential
- Drug interactions

**Safety Measures:**
- Dose limits
- Respiratory monitoring
- Naloxone availability
- PCA safety
- Transition protocols
- Prescription drug monitoring

### Chemotherapy

**High-Risk Factors:**
- Narrow therapeutic index
- Dose calculation errors
- Preparation errors
- Vesicant extravasation
- Organ toxicity

**Safety Requirements:**
- Specialized training
- Verification processes
- Independent double-checks
- Preparation in controlled environment
- Administration protocols
- Extravasation management

### Concentrated Electrolytes

**Dangerous Concentrations:**
- Potassium chloride >2 mEq/mL
- Magnesium sulfate
- Sodium chloride >0.9%
- Calcium chloride

**Safety Requirements:**
- Remove from patient care units
- Pharmacy-only storage
- Dilution protocols
- Special labeling
- Double-check requirements`,
      keyTerms: [
        { term: 'Anticoagulant', definition: 'Medication that prevents blood clots' },
        { term: 'Extravasation', definition: 'Leakage of drug from vein into tissue' },
        { term: 'PCA', definition: 'Patient-controlled analgesia' },
        { term: 'Vesicant', definition: 'Drug that causes tissue damage if leaked' }
      ]
    },
    4: {
      level: 4,
      summary: 'High-alert medication management requires organizational commitment, comprehensive protocols, and continuous monitoring. Anticoagulation clinics, insulin management protocols, and chemotherapy verification systems represent specialized programs developed to reduce errors with these dangerous medications.',
      explanation: `## Organizational Management of High-Alert Drugs

High-alert medication management requires organizational commitment, comprehensive protocols, and continuous monitoring. Anticoagulation clinics, insulin management protocols, and chemotherapy verification systems represent specialized programs developed to reduce errors with these dangerous medications.

### Anticoagulation Management

**Anticoagulation Clinics:**
- Dose management
- INR monitoring
- Patient education
- Drug interaction review
- Outcomes tracking

**Protocol Elements:**
- Indication documentation
- Baseline labs
- Contraindication screening
- Dose algorithms
- Bridging protocols
- Reversal procedures

**Direct Oral Anticoagulants:**
- Renal dosing
- Drug interaction management
- Reversal agents
- Adherence monitoring
- Cost considerations

### Insulin Management

**Standardization:**
- Concentration limits
- Protocol restrictions
- Sliding scale limitations
- Basal-bolus preferred
- Correction scale separate

**Hypoglycemia Management:**
- Recognition protocols
- Treatment algorithms
- Prevention strategies
- Documentation requirements
- Quality metrics

**Transition of Care:**
- Inpatient to outpatient
- NPO management
- IV to subcutaneous
- Discharge planning
- Patient education

### Chemotherapy Programs

**Oncology Pharmacists:**
- Specialized training
- Order verification
- Preparation oversight
- Clinical consultation
- Research coordination

**Verification Systems:**
- Independent double-checks
- Body surface area calculation
- Dose limit checking
- Drug interaction screening
- Allergy verification

**Safety Committees:**
- Error review
- Protocol development
- Staff education
- Quality improvement
- Regulatory compliance

### Smart Pump Management

**Drug Libraries:**
- Institution-specific
- Dose error reduction
- Soft and hard limits
- Clinical advisories
- Regular updates

**Override Monitoring:**
- Tracking and analysis
- Feedback to units
- Education needs
- Library updates
- Policy changes

### Error Analysis

**Root Cause Analysis:**
- Mandatory for high-alert errors
- System focus
- Action plan development
- Implementation
- Effectiveness monitoring

**External Reporting:**
- ISMP MERP
- FDA MedWatch
- State reporting
- Learning from others
- Best practice adoption`,
      keyTerms: [
        { term: 'INR', definition: 'Blood test for warfarin monitoring' },
        { term: 'Basal-bolus', definition: 'Insulin regimen mimicking natural secretion' },
        { term: 'Body surface area', definition: 'Measurement used for chemotherapy dosing' },
        { term: 'Drug library', definition: 'Smart pump database of medications' }
      ],
      clinicalNotes: 'U-500 insulin requires distinct protocols - never draw up in standard syringe. Anticoagulation clinics reduce adverse events by 50% compared to usual care. Chemotherapy verification should be independent - two people not working together. Smart pump overrides require monitoring - rates above 10% suggest library or workflow issues.'
    },
    5: {
      level: 5,
      summary: 'High-alert medication safety continues to evolve with new drugs, technologies, and care models. Biosimilars, personalized dosing based on pharmacogenomics, closed-loop insulin delivery, and ambulatory anticoagulation monitoring represent advances while posing new safety challenges.',
      explanation: `## Advanced High-Alert Medication Safety

High-alert medication safety continues to evolve with new drugs, technologies, and care models. Biosimilars, personalized dosing based on pharmacogenomics, closed-loop insulin delivery, and ambulatory anticoagulation monitoring represent advances while posing new safety challenges.

### Emerging Drug Classes

**Biosimilars:**
- Similar but not identical to reference
- Naming conventions
- Pharmacovigilance
- Switching studies
- Immunogenicity concerns

**CAR-T Therapy:**
- Cytokine release syndrome
- Neurotoxicity
- Specialized centers
- Risk evaluation strategies
- Long-term monitoring

**Gene Therapy:**
- Ultra-high cost
- Complex administration
- Limited distribution
- Monitoring requirements
- Lifetime follow-up

### Technology Innovations

**Closed-Loop Insulin:**
- Continuous glucose monitoring
- Automated insulin delivery
- Hybrid systems
- Safety mechanisms
- Patient selection

**Computerized Decision Support:**
- Dose optimization
- Drug interaction alerts
- Renal dosing
- Pharmacogenomic guidance
- Machine learning

**Remote Monitoring:**
- INR home monitoring
- Adherence tracking
- Telehealth integration
- Patient apps
- Alert systems

### Ambulatory Safety

**Transitions of Care:**
- Medication reconciliation
- Patient education
- Follow-up appointments
- Access to antidotes
- Emergency protocols

**Community Pharmacy:**
- High-alert dispensing alerts
- Counseling requirements
- Drug interaction screening
- Immunization records
- Overdose prevention

**Patient Self-Management:**
- Education programs
- Self-monitoring
- Mobile apps
- Support groups
- Emergency plans

### Health Equity

**Access Disparities:**
- Cost barriers
- Geographic access
- Insurance coverage
- Health literacy
- Cultural factors

**Safety Disparities:**
- Monitoring differences
- Adherence challenges
- Communication barriers
- Trust issues
- Biased algorithms

**Interventions:**
- 340B program
- Patient assistance
- Culturally adapted education
- Community health workers
- Telehealth expansion

### Quality Measurement

**Outcome Metrics:**
- Adverse event rates
- Hospitalization rates
- Mortality
- Cost outcomes
- Patient-reported outcomes

**Process Measures:**
- Protocol compliance
- Double-check rates
- Monitoring frequency
- Education completion
- Follow-up rates

**Balancing Measures:**
- Access limitations
- Time burden
- Cost
- Patient satisfaction

### Future Directions

**Precision Dosing:**
- Pharmacogenomics
- Therapeutic drug monitoring
- Physiologic modeling
- AI-guided dosing
- Real-time adjustments

**Risk Prediction:**
- Machine learning
- Risk stratification
- Targeted monitoring
- Preventive interventions
- Population health

**Global Safety:**
- Essential medicines
- Resource-limited settings
- Simplified protocols
- Training programs
- WHO initiatives`,
      keyTerms: [
        { term: 'Biosimilar', definition: 'Biologic drug similar to reference product' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy' },
        { term: 'Pharmacogenomics', definition: 'Genetic influence on drug response' },
        { term: 'Closed-loop', definition: 'Automated system with feedback control' }
      ],
      clinicalNotes: 'Closed-loop insulin systems reduce hypoglycemia but require patient engagement and backup plans. Biosimilar naming continues to evolve - careful attention needed to avoid inadvertent switching. Pharmacogenomic-guided warfarin dosing shows mixed results - other genes may be more predictive. High-alert medication safety in ambulatory settings increasingly important as care shifts from hospitals.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['patient-safety', 'medication-safety'],
    keywords: ['high-alert medications', 'high-risk drugs', 'medication safety', 'insulin', 'anticoagulants']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
