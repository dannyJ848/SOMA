/**
 * Reading Lab Results - Understanding Your Test Results
 */

import { EducationalContent } from '../../types';

export const readingLabResults: EducationalContent = {
  id: 'health-literacy-reading-lab-results',
  type: 'concept',
  name: 'Reading Lab Results',
  alternateNames: ['Understanding Test Results', 'Lab Values Explained'],

  levels: {
    1: {
      level: 1,
      summary: 'Lab results show how your body is working. Learning to read them helps you understand your health.',
      explanation: `**What Are Lab Results?**

Lab results come from tests done on your blood, urine, or other samples. They help doctors see what is happening inside your body.

**Basic Parts of a Lab Report:**

- **Test Name:** What was tested
- **Your Result:** Your number or value
- **Reference Range:** The normal range (what is typical)
- **Flag:** H means High, L means Low

**Example:**
If your blood sugar result is 95 and the normal range is 70-100, your result is NORMAL!

**Tips for Reading Results:**

- Look at whether you are in the normal range
- H or L flags mean talk to your doctor
- One abnormal test does not always mean something is wrong
- Ask your doctor to explain anything confusing`,
      keyTerms: [
        { term: 'reference range', definition: 'The normal values for a test (what most healthy people have)' },
        { term: 'flag', definition: 'A marker showing your result is high (H) or low (L)' },
        { term: 'lab test', definition: 'A test done on blood, urine, or other body samples' },
      ],
      analogies: ['Reference ranges are like a thermostat - they show what is normal for the body'],
      examples: ['A glucose of 105 with a range of 70-100 would be flagged H (high)'],
      patientCounselingPoints: ['Ask your doctor to explain abnormal results', 'One abnormal test may not mean a problem'],
    },
    2: {
      level: 2,
      summary: 'Understanding common lab tests helps you participate in your healthcare decisions.',
      explanation: `## Common Lab Tests

**Complete Blood Count (CBC):**
- WBC: White blood cells (infection fighters)
- RBC: Red blood cells (carry oxygen)
- Hemoglobin: Protein that carries oxygen
- Platelets: Help blood clot

**Basic Metabolic Panel (BMP):**
- Glucose: Blood sugar
- Creatinine/BUN: Kidney function
- Electrolytes: Sodium, potassium, etc.

**Lipid Panel:**
- Total Cholesterol: Overall cholesterol
- LDL: Bad cholesterol
- HDL: Good cholesterol
- Triglycerides: Type of fat in blood

## Understanding Reference Ranges

- Ranges vary by lab, age, and sex
- Results just outside range may not be concerning
- Trends over time are often more important than single values
- Critical values require immediate attention`,
      keyTerms: [
        { term: 'CBC', definition: 'Complete blood count - tests red cells, white cells, and platelets' },
        { term: 'BMP', definition: 'Basic metabolic panel - tests blood sugar, kidney function, electrolytes' },
        { term: 'lipid panel', definition: 'Cholesterol and triglyceride tests for heart health' },
      ],
      patientCounselingPoints: ['Compare current results to previous tests', 'Ask which results matter most for your health'],
    },
    3: {
      level: 3,
      summary: 'Lab result interpretation requires understanding clinical context, reference ranges, and result significance.',
      explanation: `## Reference Range Considerations

**Factors Affecting Ranges:**
- Age and sex
- Pregnancy status
- Time of day (circadian variation)
- Fasting vs non-fasting status
- Laboratory methodology

**Statistical Basis:**
- Ranges typically represent 95% of healthy population
- 5% of normal patients will have out-of-range values
- Pre-test probability affects interpretation

## Clinical Significance

**Critical Values:**
- Results requiring immediate action
- Lab contacts ordering provider directly
- Examples: Glucose <40 or >500, K+ <2.5 or >6.5

**Delta Checks:**
- Comparison to previous values
- Significant changes flag for review
- May indicate lab error or clinical change

## Common Interpretive Errors

- Ignoring clinical context
- Over-reacting to minor abnormalities
- Missing trends over time
- Not considering medications and conditions affecting tests`,
      keyTerms: [
        { term: 'critical value', definition: 'Lab result requiring immediate clinical action' },
        { term: 'delta check', definition: 'Comparison of current result to previous values' },
        { term: 'pre-test probability', definition: 'Likelihood of disease before testing based on clinical assessment' },
      ],
      clinicalNotes: 'Explain results in context. Provide written summaries of key values.',
    },
    4: {
      level: 4,
      summary: 'Laboratory medicine involves complex interpretation considering analytical performance, clinical context, and evidence-based utilization.',
      explanation: `## Analytical Considerations

**Accuracy and Precision:**
- Accuracy: Closeness to true value
- Precision: Reproducibility of results
- Coefficient of variation defines acceptable imprecision

**Pre-Analytical Variables:**
- Specimen collection (timing, technique)
- Transport and storage conditions
- Patient preparation (fasting, medications)

## Diagnostic Performance

**Test Characteristics:**
- Sensitivity: Detecting disease when present
- Specificity: Ruling out disease when absent
- Positive/Negative predictive value
- Likelihood ratios for clinical application

## Evidence-Based Utilization

**Choosing Wisely Principles:**
- Avoid unnecessary testing
- Consider pre-test probability
- Test results should change management
- Repeat testing judiciously`,
      keyTerms: [
        { term: 'sensitivity', definition: 'Ability of test to correctly identify those with disease' },
        { term: 'specificity', definition: 'Ability of test to correctly identify those without disease' },
        { term: 'likelihood ratio', definition: 'Ratio indicating how much a test result changes disease probability' },
      ],
      clinicalNotes: 'Apply evidence-based test ordering. Consider test characteristics when interpreting results.',
    },
    5: {
      level: 5,
      summary: 'Laboratory medicine is evolving with precision diagnostics, AI interpretation, and patient-centered result delivery.',
      explanation: `## Advanced Diagnostics

**Molecular Testing:**
- Genetic testing and pharmacogenomics
- Infectious disease PCR
- Cancer molecular profiling
- Liquid biopsy applications

**Point-of-Care Testing:**
- Rapid results at bedside
- Quality assurance challenges
- Integration with EHR
- Patient self-testing considerations

## Artificial Intelligence

**AI Applications:**
- Automated result interpretation
- Pattern recognition across tests
- Predictive algorithms
- Quality assurance monitoring

## Patient-Centered Laboratory

**Direct Access Testing:**
- Consumer-initiated testing
- Counseling and interpretation challenges
- Incidental findings management

**Results Communication:**
- Patient portal release timing
- Contextualized result display
- Multimedia explanations
- Health literacy considerations

## Quality and Safety

**Laboratory Quality:**
- Accreditation (CAP, CLIA)
- Proficiency testing
- Quality indicators
- Error prevention systems`,
      keyTerms: [
        { term: 'liquid biopsy', definition: 'Blood test detecting tumor DNA or cells for cancer diagnosis' },
        { term: 'pharmacogenomics', definition: 'Genetic testing to predict drug response and dosing' },
        { term: 'CLIA', definition: 'Clinical Laboratory Improvement Amendments - federal lab quality regulations' },
      ],
      clinicalNotes: 'Stay current with emerging diagnostics. Ensure results communication is patient-centered.',
    },
  },

  media: [],
  citations: [{ id: 'labtestsonline', type: 'website', title: 'Lab Tests Online', source: 'AACC' }],
  crossReferences: [{ targetId: 'health-literacy-medical-records', targetType: 'concept', relationship: 'related', label: 'Medical Records' }],
  tags: { systems: ['understanding-health-info'], topics: ['lab results', 'diagnostics'], keywords: ['lab tests', 'blood tests', 'results'], clinicalRelevance: 'high' },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default readingLabResults;
