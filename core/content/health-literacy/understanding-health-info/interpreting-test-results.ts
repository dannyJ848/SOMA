import { EducationalContent } from '../../types';

export const interpretingTestResults: EducationalContent = {
  id: 'interpreting-test-results',
  type: 'concept',
  name: 'Interpreting Medical Test Results',
  alternateNames: ['Lab Results', 'Test Results', 'Understanding Lab Work', 'Medical Testing'],
  
  levels: {
    1: {
      level: 1,
      summary: 'Understanding what your medical test results mean and when to discuss them with your doctor.',
      explanation: `Medical tests help doctors check your health, find diseases, and see how well treatments work. Test results usually show numbers with a "reference range" - numbers that are normal for most healthy people. Results inside this range are usually normal. Results outside may need follow-up. Always talk to your doctor about what your results mean for you.`,
      keyTerms: [
        { term: 'reference range', definition: 'The normal values for a test based on healthy people' },
        { term: 'lab test', definition: 'A medical test done on blood, urine, or other body samples' },
        { term: 'abnormal result', definition: 'A test result outside the normal reference range' }
      ],
      analogies: [
        'Speed limit signs: Like speed limits that show a safe range for driving, reference ranges show healthy values for your body. Being slightly above or below may not mean danger, but very different values need attention'
      ],
      examples: [
        'Blood sugar test showing 95 mg/dL when normal range is 70-100 mg/dL',
        'Cholesterol test with high LDL marked in red on the report',
        'Urinalysis showing everything in normal range'
      ]
    },
    2: {
      level: 2,
      summary: 'How to read and understand common medical test results, reference ranges, and what abnormal values may indicate.',
      explanation: `Medical test results provide important information about your health status. Understanding how to read these results helps you have better conversations with your healthcare providers and take a more active role in your care.

Understanding reference ranges:
- Based on testing of healthy people (usually 95%)
- May vary slightly between laboratories
- Different ranges for different ages, sexes, and populations
- "Normal" does not always mean "healthy" for every individual
- "Abnormal" does not always mean disease

Common blood tests:

Complete Blood Count (CBC):
- White blood cells (WBC): Infection fighting
- Red blood cells (RBC): Oxygen carrying
- Hemoglobin: Oxygen transport protein
- Hematocrit: Percentage of blood that is cells
- Platelets: Blood clotting

Basic Metabolic Panel (BMP):
- Glucose: Blood sugar
- Calcium: Bone and nerve function
- Sodium, Potassium: Electrolyte balance
- BUN and Creatinine: Kidney function
- Carbon dioxide: Acid-base balance

Comprehensive Metabolic Panel (CMP):
- All BMP components plus:
- Albumin and Total Protein: Nutrition and liver
- Bilirubin: Liver function
- Liver enzymes (ALT, AST, ALP): Liver health

Lipid Panel:
- Total cholesterol
- LDL ("bad" cholesterol)
- HDL ("good" cholesterol)
- Triglycerides

Thyroid tests:
- TSH: Thyroid stimulating hormone
- T3 and T4: Thyroid hormones

Results interpretation:

Reference range indicators:
- H or High: Above normal range
- L or Low: Below normal range
- Flagged: Marked for provider attention
- Critical: Requires immediate action

Factors affecting results:
- Fasting status
- Time of day
- Medications
- Recent illness
- Stress
- Menstrual cycle
- Exercise

Common imaging results:
- X-ray: Bone fractures, lung conditions
- CT scan: Detailed cross-sectional images
- MRI: Soft tissue detail
- Ultrasound: Real-time imaging, often for organs

Follow-up actions:
- Compare to previous results
- Consider trends over time
- Discuss with healthcare provider
- Repeat testing if needed
- Additional testing based on results`,
      keyTerms: [
        { term: 'reference range', definition: 'Expected values for a healthy population, typically encompassing 95% of healthy individuals' },
        { term: 'false positive', definition: 'Test indicating abnormality when no disease is present' },
        { term: 'false negative', definition: 'Test indicating normal when disease is present' },
        { term: 'sensitivity', definition: 'Ability of a test to correctly identify those with disease' },
        { term: 'specificity', definition: 'Ability of a test to correctly identify those without disease' },
        { term: 'critical value', definition: 'Result requiring immediate clinical attention' }
      ],
      analogies: [
        'Report card: Like a report card showing grades in different subjects, lab results show numbers for different body systems. One bad grade does not mean you failed school, and one abnormal result does not mean you are seriously ill'
      ],
      examples: [
        'CBC showing WBC 12,000 (reference 4,500-11,000) may indicate infection or inflammation',
        'TSH elevated at 8.5 (reference 0.4-4.0) suggests hypothyroidism',
        'Glucose of 140 mg/dL fasting suggests diabetes, requiring follow-up testing',
        'Cholesterol panel showing LDL 160 (reference <100) indicates need for lifestyle changes or medication'
      ]
    },
    3: {
      level: 3,
      summary: 'Comprehensive guide to understanding laboratory medicine principles, test accuracy, result interpretation, and effective communication with healthcare providers about findings.',
      explanation: `Laboratory medicine provides objective data for clinical decision-making, but proper interpretation requires understanding test characteristics, biological variability, and clinical context. Effective patient engagement with test results improves care quality and patient satisfaction.

Laboratory Medicine Fundamentals:

Test characteristics:
- Analytical validity: Accuracy and precision of the test itself
- Clinical validity: How well test predicts disease
- Clinical utility: Whether testing improves outcomes
- Pre-analytical variables: Factors before testing (collection, handling)

Prevalence and predictive value:
- Positive predictive value: Probability disease is present given positive test
- Negative predictive value: Probability disease is absent given negative test
- Bayes theorem: How pre-test probability affects interpretation
- Screening vs diagnostic testing applications

Biological variation:
- Within-person variation (day-to-day fluctuations)
- Between-person variation (differences among individuals)
- Reference change values: Clinically significant differences
- Diurnal variation (changes throughout day)
- Effects of posture, diet, exercise

Reference interval establishment:
- Healthy population studies
- Parametric vs non-parametric methods
- Transference between methods and laboratories
- Partitioning by age, sex, race when appropriate
- Reference vs decision limits

Common Test Categories:

Chemistry panels:
- Liver function tests (AST, ALT, ALP, GGT, bilirubin)
- Kidney function (BUN, creatinine, eGFR, cystatin C)
- Electrolytes (sodium, potassium, chloride, CO2)
- Cardiac markers (troponin, BNP/NT-proBNP)
- Pancreatic enzymes (amylase, lipase)

Endocrine testing:
- Diabetes (glucose, HbA1c, insulin, C-peptide)
- Thyroid (TSH, free T4, free T3, antibodies)
- Adrenal (cortisol, ACTH, aldosterone)
- Reproductive hormones (testosterone, estrogen, progesterone)
- Pituitary (prolactin, growth hormone, IGF-1)

Hematology:
- Coagulation studies (PT/INR, PTT, D-dimer, fibrinogen)
- Hemoglobinopathy screening
- Flow cytometry for leukemia/lymphoma
- Special stains and morphology

Microbiology:
- Culture and sensitivity
- Rapid diagnostic tests (strep, influenza, COVID-19)
- Molecular diagnostics (PCR, NAAT)
- Serology (antibody testing)
- Antigen detection

Patient Communication:

Pre-test counseling:
- Purpose of testing
- Preparation requirements
- Potential outcomes
- Timing of results
- Cost considerations

Results delivery:
- In-person discussion for significant findings
- Patient portal access for routine results
- Phone calls for urgent abnormalities
- Written summaries with explanations
- Follow-up planning

Patient engagement strategies:
- MyChart and patient portal use
- Personal health record maintenance
- Result tracking over time
- Preparation of questions for appointments
- Understanding limitations of testing`,
      keyTerms: [
        { term: 'analytical validity', definition: 'Accuracy and reliability of a laboratory test under specified conditions' },
        { term: 'predictive value', definition: 'Probability that a test result correctly predicts presence or absence of disease' },
        { term: 'pre-test probability', definition: 'Likelihood of disease before test results are known' },
        { term: 'diagnostic odds ratio', definition: 'Measure of test effectiveness combining sensitivity and specificity' },
        { term: 'reference change value', definition: 'Minimum difference between two results that is clinically significant' },
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate - measure of kidney function' }
      ]
    },
    4: {
      level: 4,
      summary: 'Advanced analysis of diagnostic testing principles, result interpretation in complex clinical scenarios, and integration with evidence-based practice.',
      explanation: `Expert interpretation of medical test results requires understanding of diagnostic reasoning, probabilistic thinking, and the integration of multiple information sources. Advanced approaches optimize test selection, minimize diagnostic error, and improve clinical outcomes.

Diagnostic Reasoning Framework:

Hypothesis-driven testing:
- Differential diagnosis generation
- Test selection based on pre-test probability
- Likelihood ratios for probability revision
- Threshold approach to testing decisions
- Serial vs parallel testing strategies

Likelihood ratios:
- Quantify how much a test result changes disease probability
- LR+ = sensitivity / (1 - specificity)
- LR- = (1 - sensitivity) / specificity
- Values near 1 have little diagnostic impact
- Extreme values significantly change probability

Fagan nomogram:
- Graphical tool for probability revision
- Pre-test probability to post-test probability
- Visual demonstration of test utility

Testing thresholds:
- Testing threshold: Probability below which testing is not indicated
- Test-treatment threshold: Probability above which treatment without testing
- No-test threshold region: Test results would not change management

Advanced Laboratory Concepts:

Method comparison:
- Precision, accuracy, bias assessment
- Passing-Bablok regression
- Bland-Altman analysis
- Interference studies
- Matrix effects

Quality control:
- Internal quality control procedures
- External proficiency testing
- Westgard rules for QC interpretation
- Delta checks for patient-based QC
- Six sigma metrics

Point-of-care testing:
- Glucose meters
- INR testing
- Troponin testing
- Pregnancy testing
- COVID-19 rapid tests
- Quality considerations

Genetic and molecular testing:
- Pharmacogenomic testing
- Cancer biomarkers
- Infectious disease genotyping
- Prenatal screening
- Predictive testing considerations

Imaging result interpretation:
- Radiology report structure (clinical history, technique, findings, impression)
- Incidental findings management
- Appropriate use criteria
- Radiation dose considerations
- Contrast agent precautions

Clinical Decision Support:

Computerized physician order entry:
- Duplicate test alerts
- Frequency limit alerts
- Cost display
- Guideline-based suggestions
- Pre-authorization integration

Laboratory formularies:
- Restricted test policies
- Genetic counseling requirements
- High-cost test justification
- Reference laboratory routing

Critical value management:
- Defined critical result lists
- Immediate notification protocols
- Documentation requirements
- Escalation procedures
- Delta critical values

Diagnostic Error Prevention:

Cognitive biases:
- Anchoring bias
- Availability heuristic
- Confirmation bias
- Premature closure
- Affective bias

System factors:
- Communication failures
- Result follow-up processes
- Handoff gaps
- Technology interface issues
- Workflow design

Safety practices:
- Closed-loop communication
- Read-back of critical values
- Result acknowledgment tracking
- Escalation protocols
- Diagnostic timeouts`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Measure of how much a test result changes the odds of disease' },
        { term: 'Fagan nomogram', definition: 'Graphical calculator for converting pre-test to post-test probability' },
        { term: 'test threshold', definition: 'Probability below which diagnostic testing is not indicated' },
        { term: 'delta check', definition: 'Comparison of current result to previous result to detect errors' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect response to drugs' },
        { term: 'anchoring bias', definition: 'Tendency to rely too heavily on first piece of information' }
      ],
      clinicalNotes: `Clinical Pearl: Always interpret test results in clinical context. A "normal" test in a high-risk patient may be falsely reassuring; an "abnormal" test in a low-risk patient may be a false positive. Trend analysis over time is often more informative than a single value.

Documentation Best Practices:
- Note clinical reasoning for test selection
- Document informed consent for invasive testing
- Record patient notification of results
- Note follow-up plans for abnormal results
- Document critical value communication

High-Risk Situations Requiring Careful Interpretation:
- New diagnosis with serious implications
- Conflicting test results
- Results discordant with clinical picture
- Screening tests in low-prevalence populations
- Trend changes in chronic disease monitoring
- Critical or life-threatening abnormalities`
    },
    5: {
      level: 5,
      summary: 'Expert-level analysis of diagnostic medicine, laboratory stewardship, emerging technologies, and the role of testing in population health and precision medicine.',
      explanation: `Diagnostic medicine is undergoing rapid transformation with advances in technology, data science, and personalized medicine. Expert-level understanding encompasses laboratory stewardship, implementation science, and the ethical dimensions of increasingly powerful diagnostic capabilities.

Laboratory Stewardship:

Test utilization management:
- Evidence-based test ordering guidelines
- Computerized decision support
- Audit and feedback programs
- Provider education and profiling
- Financial incentive alignment

Choosing Wisely principles:
- Avoid repetitive CBC/CMP for stable patients
- Limit tumor markers in asymptomatic patients
- Reserve imaging for clear indications
- Eliminate routine preoperative testing for low-risk surgery
- Reduce unnecessary coagulation testing

Financial stewardship:
- Test cost awareness
- Send-out test management
- Reference laboratory contracts
- Formulary management
- Value-based test selection

Implementation science:
- Diffusion of laboratory innovations
- Quality improvement methodologies
- Change management strategies
- Sustainability factors
- Spread and scale considerations

Emerging Technologies:

Next-generation sequencing:
- Whole exome/genome sequencing
- Liquid biopsy for cancer
- Metagenomic infectious disease testing
- Pharmacogenomic panels
- Direct-to-consumer genetic testing concerns

Artificial intelligence in diagnostics:
- Digital pathology
- Radiology AI algorithms
- Laboratory pattern recognition
- Predictive analytics
- Clinical decision support

Wearable and remote monitoring:
- Continuous glucose monitoring
- Continuous blood pressure monitoring
- Cardiac event monitoring
- Sleep apnea detection
- Falls and activity monitoring

Microbiome testing:
- Gut microbiome analysis
- Clinical utility considerations
- Probiotic guidance
- Fecal microbiota transplantation monitoring
- Research vs clinical applications

Precision Medicine:

Biomarker-guided therapy:
- Oncotype DX for breast cancer
- PD-L1 testing for immunotherapy
- EGFR/ALK testing in lung cancer
- BRCA testing for PARP inhibitors
- MSI-high for checkpoint inhibitors

Pharmacogenomic implementation:
- CPIC guidelines
- PREDICT models
- Drug-gene pair implementation
- Clinical decision support integration
- Cost-effectiveness

Liquid biopsy applications:
- Cancer screening
- Minimal residual disease monitoring
- Treatment response assessment
- Resistance mechanism detection
- Organ transplant monitoring

Population Health and Screening:

Screening program design:
- Wilson and Jungner criteria
- Population prevalence considerations
- Test characteristics required
- Screening intervals
- Follow-up systems

Cascade screening:
- Family-based genetic testing
- Identification of at-risk relatives
- Cascade protocols
- Ethical considerations
- International variations

Health equity in testing:
- Access disparities
- Genetic ancestry reference databases
- Linguistic and cultural barriers
- Cost and insurance coverage
- Community-based testing strategies

Ethical and Legal Considerations:

Genetic testing ethics:
- Incidental findings disclosure
- Secondary variants of uncertain significance
- Family communication obligations
- Discrimination protections (GINA)
- Pediatric testing considerations

Data privacy:
- Laboratory data security
- Biobank governance
- Research use of clinical data
- Cross-border data transfer
- Patient ownership of data

Informed consent:
- Complex test counseling
- Incidental findings policies
- Return of results obligations
- Withdrawal from testing
- Research participation

Global Health and Diagnostics:

Point-of-care innovation:
- Lateral flow assays
- Smartphone-based diagnostics
- Paper-based microfluidics
- Battery-operated instruments
- Connectivity for result reporting

Access initiatives:
- WHO Essential Diagnostics List
- Diagnostics for resource-limited settings
- Sample referral networks
- Quality assurance programs
- Training and competency development

Future Directions:

Digital biomarkers:
- Voice analysis
- Gait analysis
- Smartphone sensor data
- Social media patterns
- Electronic health record data mining

Synthetic biology diagnostics:
- CRISPR-based detection
- Cell-free synthetic gene circuits
- Engineered biosensors
- Paper-based synthetic biology

Systems medicine:
- Multi-omics integration
- Systems biology modeling
- Digital twins
- Predictive health trajectories
- Preventive intervention optimization`,
      keyTerms: [
        { term: 'laboratory stewardship', definition: 'Coordinated efforts to improve appropriate use of laboratory testing' },
        { term: 'liquid biopsy', definition: 'Blood test detecting cancer DNA or cells circulating in bloodstream' },
        { term: 'pharmacogenomics', definition: 'Study of genetic factors affecting drug response' },
        { term: 'next-generation sequencing', definition: 'High-throughput DNA sequencing technologies' },
        { term: 'digital biomarker', definition: 'Objective, quantifiable physiological and behavioral data collected by digital devices' },
        { term: 'multi-omics', definition: 'Integration of data from genomics, proteomics, metabolomics, and other molecular analyses' }
      ],
      clinicalNotes: `Systems Leadership: Healthcare leaders should advance diagnostic excellence through:
- Laboratory stewardship programs with measurable outcomes
- Integration of diagnostic management teams
- Quality metrics for test utilization and diagnostic safety
- Investment in health information exchange
- Equity-focused access to advanced diagnostics
- Interprofessional education on diagnostic reasoning

Research and Quality Improvement: Opportunities for advancing diagnostic medicine:
- Participate in diagnostic error reporting and analysis
- Study test utilization patterns and outcomes
- Evaluate implementation of diagnostic innovations
- Contribute to laboratory stewardship evidence
- Examine diagnostic disparities and equity

Policy Engagement: Professional advocacy for:
- Appropriate reimbursement for cognitive diagnostic work
- Research funding for diagnostic safety
- Genetic privacy and non-discrimination protections
- Access to essential diagnostics globally
- Regulatory frameworks for AI diagnostics
- Precision medicine implementation`
    }
  },
  
  media: [],
  
  citations: [
    { id: 'plebani-2010', type: 'article', title: 'The detection and prevention of errors in laboratory medicine', authors: ['Plebani M'], source: 'Annals of Clinical Biochemistry' },
    { id: 'hickner-2014', type: 'article', title: 'Primary care physicians challenges in ordering clinical laboratory tests and interpreting results', authors: ['Hickner J'], source: 'Journal of the American Board of Family Medicine' },
    { id: 'zhi-2013', type: 'article', title: 'The landscape of inappropriate laboratory testing', authors: ['Zhi M'], source: 'Mayo Clinic Proceedings' },
    { id: 'laposata-2017', type: 'article', title: 'Patient-specific narrative interpretation of complex clinical laboratory testing', authors: ['Laposata M'], source: 'American Journal of Clinical Pathology' }
  ],
  
  crossReferences: [
    { targetId: 'reading-medication-labels', targetType: 'concept', relationship: 'related' },
    { targetId: 'ask-me-3', targetType: 'concept', relationship: 'see-also' },
    { targetId: 'teach-back-method', targetType: 'concept', relationship: 'see-also' },
    { targetId: 'shared-decision-making', targetType: 'concept', relationship: 'see-also' }
  ],
  
  tags: {
    systems: ['health-system'],
    topics: ['patient-education'],
    keywords: ['lab results', 'medical testing', 'diagnostic tests', 'reference ranges', 'laboratory medicine', 'test interpretation']
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
