/**
 * Rejection Surveillance
 *
 * Comprehensive coverage of transplant rejection surveillance strategies,
 * including recognition, diagnosis, classification, and management approaches.
 */

import { EducationalContent } from '../../types';

export const rejectionSurveillance: EducationalContent = {
  id: 'transplant-rejection-surveillance',
  type: 'concept',
  name: 'Rejection Surveillance',
  alternateNames: ['Transplant Rejection Monitoring', 'Graft Surveillance', 'Allograft Monitoring', 'Rejection Screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Rejection surveillance involves regular check-ups and tests to catch signs of organ rejection early, before serious damage occurs.',
      explanation: `**What Is Rejection Surveillance?**

Rejection surveillance means watching carefully for signs that your body is trying to attack the transplanted organ. Early detection is crucial for successful treatment.

**Why Surveillance Matters:**

- Rejection can happen without obvious symptoms
- Early treatment works better
- Prevents permanent organ damage
- Helps the transplanted organ last longer

**How Surveillance Is Done:**

1. **Blood Tests**
   - Check organ function
   - Monitor medication levels
   - Look for warning signs

2. **Physical Exams**
   - Check blood pressure
   - Feel for organ swelling
   - Look for other signs of problems

3. **Biopsies** (for some organs)
   - Small sample of tissue examined
   - Most accurate way to detect rejection
   - Usually done as outpatient procedure

**Warning Signs to Report:**

Contact your transplant team immediately if you notice:
- Decreased urine output (kidney)
- Shortness of breath (heart, lung)
- Fever over 100.4 F (38 C)
- Sudden weight gain or swelling
- Pain over the transplant site
- Extreme fatigue

**Surveillance Schedule:**

- Very frequent at first (weekly to monthly)
- Gradually spreads out over time
- Continues for the life of the transplant
- May increase if problems occur

**Your Role:**

- Take medications exactly as prescribed
- Attend all appointments
- Report symptoms promptly
- Keep track of your vital signs at home`,
      keyTerms: [
        { term: 'rejection', definition: 'When the immune system attacks the transplanted organ' },
        { term: 'surveillance', definition: 'Regular monitoring to detect problems early' },
        { term: 'biopsy', definition: 'Taking a small tissue sample for examination' },
        { term: 'graft', definition: 'Another word for the transplanted organ' },
      ],
      analogies: [
        'Rejection surveillance is like regular oil changes for your car - catching problems early prevents breakdowns.',
        'Think of your transplant team as security guards watching for intruders trying to attack your new organ.',
      ],
      examples: [
        'A kidney transplant patient has blood work every week for the first month, then monthly for the first year.',
        'A patient notices decreased urination and calls the transplant team, leading to early detection of rejection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rejection surveillance combines clinical monitoring, laboratory testing, and histologic evaluation to detect immune-mediated graft injury at early, reversible stages.',
      explanation: `**Surveillance Components:**

*Clinical Monitoring:*
- Vital signs: blood pressure, temperature, weight
- Physical examination findings
- Patient-reported symptoms
- Medication adherence assessment

*Laboratory Surveillance:*

| Organ | Key Tests | Frequency |
|-------|-----------|-----------|
| Kidney | Creatinine, BUN, eGFR | Weekly to monthly |
| Liver | AST, ALT, bilirubin, INR | Weekly to monthly |
| Heart | BNP, troponin, hemodynamics | Weekly to monthly |
| Lung | Spirometry (FEV1, FVC) | Weekly initially |
| Pancreas | Amylase, lipase, glucose | Weekly to monthly |

*Imaging Surveillance:*
- Ultrasound with Doppler (kidney, liver)
- Echocardiography (heart)
- Chest X-ray/CT (lung)
- Identifies structural changes, vascular issues

*Histologic Surveillance:*
- Protocol biopsies at scheduled intervals
- Indicated biopsies for clinical changes
- Banff classification (kidney)
- ISHLT grading (heart)
- BAT classification (liver)

**Types of Rejection:**

*T-cell Mediated Rejection (TCMR):*
- Cell-mediated immune response
- T-lymphocytes infiltrate graft
- Usually responds to steroids
- Most common type

*Antibody-Mediated Rejection (ABMR):*
- Donor-specific antibodies attack graft
- B-cells and plasma cells involved
- More difficult to treat
- Associated with worse outcomes

*Mixed Rejection:*
- Features of both TCMR and ABMR
- Requires comprehensive treatment

**Timing Categories:**

| Type | Timing | Characteristics |
|------|--------|-----------------|
| Hyperacute | Minutes to hours | Pre-existing antibodies, rare |
| Acute | Days to weeks | Most common, treatable |
| Chronic | Months to years | Progressive, scarring |

**Surveillance Protocols:**

*Kidney Transplant:*
- Early: weekly labs, monthly clinic
- 3-12 months: bi-monthly to quarterly
- After 1 year: every 3-6 months
- Protocol biopsy at 3-6 months (some centers)

*Liver Transplant:*
- Similar schedule to kidney
- Protocol biopsies less common
- Hepatitis C monitoring if applicable

*Heart Transplant:*
- Endomyocardial biopsies: weekly initially
- Gradual spacing to annual by year 2-3
- Non-invasive surveillance increasingly used`,
      keyTerms: [
        { term: 'Banff classification', definition: 'International standard for grading kidney transplant rejection' },
        { term: 'ISHLT', definition: 'International Society for Heart and Lung Transplantation grading system' },
        { term: 'TCMR', definition: 'T-cell mediated rejection (formerly cellular rejection)' },
        { term: 'ABMR', definition: 'Antibody-mediated rejection (formerly humoral rejection)' },
        { term: 'DSA', definition: 'Donor-specific antibody' },
        { term: 'protocol biopsy', definition: 'Scheduled biopsy without clinical indication' },
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate, measure of kidney function' },
      ],
      analogies: [
        'Surveillance biopsies are like routine inspections of a building foundation, catching cracks before they become collapses.',
        'DSA testing is like looking for specific fingerprints of attackers who have targeted your organ before.',
      ],
      examples: [
        'Kidney transplant protocol biopsy at 3 months shows subclinical rejection, prompting treatment before creatinine rises.',
        'Rising creatinine from 1.2 to 1.8 mg/dL triggers biopsy showing Banff 1A acute cellular rejection.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rejection surveillance relies on integration of clinical, laboratory, histologic, and serologic data. The Banff classification provides standardized histologic criteria for kidney rejection, while donor-specific antibody monitoring enables early detection of antibody-mediated injury.',
      explanation: `**Diagnostic Methods:**

*Serum Creatinine and eGFR:*
- Most common surveillance tool for kidney
- Rise >15-20% from baseline triggers evaluation
- Creatinine elevation nonspecific
- Must exclude other causes (CNI toxicity, obstruction, infection)

*Donor-Specific Antibody (DSA) Monitoring:*
- Single antigen bead (SAB) assay
- Detects HLA antibodies against donor
- Class I (HLA-A, B, C) and Class II (HLA-DR, DQ, DP)
- Mean fluorescence intensity (MFI) quantifies strength
- De novo DSA formation predicts rejection

*Non-Invasive Biomarkers:*

| Biomarker | Application | Status |
|-----------|-------------|--------|
| Donor-derived cell-free DNA (dd-cfDNA) | Graft injury detection | Commercially available |
| Gene expression profiling (AlloMap) | Heart rejection surveillance | FDA approved |
| Urinary CXCL9/CXCL10 | Kidney rejection prediction | Research |
| Exosome profiling | Various applications | Research |

**Banff Classification (Kidney):**

*Acute T-cell Mediated Rejection:*

| Grade | Histologic Features |
|-------|---------------------|
| IA | Interstitial inflammation (>25% parenchyma) + moderate tubulitis |
| IB | Severe tubulitis |
| IIA | Mild intimal arteritis |
| IIB | Severe intimal arteritis |
| III | Transmural arteritis/fibrinoid change |

*Active Antibody-Mediated Rejection:*
- Microvascular inflammation (g + ptc > 0)
- Intimal or transmural arteritis (v > 0)
- Acute thrombotic microangiopathy
- Acute tubular injury (without other cause)

*Chronic Changes:*
- Interstitial fibrosis and tubular atrophy (IFTA)
- Chronic transplant glomerulopathy (cg)
- Chronic allograft arteriopathy (vascular intimal thickening)

**Heart Transplant Surveillance:**

*Endomyocardial Biopsy:*
- Right internal jugular or femoral access
- Bioptome to right ventricular septum
- 4-6 specimens for adequate sampling
- ISHLT grading system:
  - Grade 0: no rejection
  - Grade 1R: mild (foci of mononuclear infiltrate)
  - Grade 2R: moderate (multifocal infiltrate, myocyte damage)
  - Grade 3R: severe (diffuse infiltrate with necrosis)

*Non-Invasive Alternatives:*
- Gene expression profiling (AlloMap score)
- Donor-derived cell-free DNA (AlloSure)
- Reduced biopsy frequency with stable scores
- Cost-effective and patient-preferred

**Liver Transplant Surveillance:**

*Biopsy Indications:*
- Elevated liver enzymes
- Cholestatic pattern
- Fever of unknown origin
- Protocol biopsies (variable practice)

*Histologic Patterns:*
- Acute cellular rejection: portal inflammation, bile duct injury, endothelialitis
- Chronic rejection: bile duct loss, obliterative arteriopathy
- Ductopenic rejection: progressive bile duct loss

**Lung Transplant Surveillance:**

*Spirometry:*
- FEV1 monitoring most important
- >10% decline triggers evaluation
- Bronchiolitis obliterans syndrome (BOS) diagnosis
- Protocol surveillance bronchoscopy

*Transbronchial Biopsy:*
- Acute rejection grading (A0-A4)
- Airway inflammation grading (B0-B2R)
- Minimum 5 alveolated pieces recommended

**Risk Stratification:**

*High-Risk Patients:*
- Prior sensitization (high PRA)
- De novo DSA formation
- Prior rejection episodes
- Non-adherence history
- Younger age
- African American race (kidney)

*Surveillance Intensity:*
- High-risk: more frequent biopsies, DSA monitoring
- Standard-risk: routine surveillance
- Risk-adapted protocols optimize resources`,
      keyTerms: [
        { term: 'Banff criteria', definition: 'International consensus classification for renal allograft pathology' },
        { term: 'tubulitis', definition: 'Inflammatory cells infiltrating tubules, hallmark of TCMR' },
        { term: 'intimal arteritis', definition: 'Inflammation of artery intima, more severe rejection' },
        { term: 'microvascular inflammation', definition: 'Inflammation of glomeruli and peritubular capillaries, ABMR feature' },
        { term: 'SAB assay', definition: 'Single antigen bead test for HLA antibody detection' },
        { term: 'MFI', definition: 'Mean fluorescence intensity, measure of antibody strength' },
        { term: 'dd-cfDNA', definition: 'Donor-derived cell-free DNA, marker of graft cell death' },
        { term: 'AlloMap', definition: 'Gene expression test for heart transplant rejection surveillance' },
        { term: 'bronchiolitis obliterans', definition: 'Chronic lung allograft dysfunction, small airway fibrosis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Modern rejection surveillance integrates traditional clinical and histologic assessment with molecular diagnostics. Donor-derived cell-free DNA and gene expression profiling enable reduced biopsy frequency while maintaining sensitivity. Risk-stratified protocols optimize surveillance intensity based on immunologic risk profile.',
      explanation: `**Advanced Surveillance Techniques:**

*Donor-Derived Cell-Free DNA (dd-cfDNA):*

Principle:
- Cell-free DNA released from dying graft cells
- Detected in recipient blood/urine
- Elevated with rejection, infection, injury
- Organ-specific cutoffs

Clinical application:
- Kidney: >1% suggests rejection (rule-out cutoff 0.5%)
- Heart: >0.25% associated with rejection
- Can distinguish rejection from other causes of graft dysfunction
- Allows non-invasive serial monitoring

Limitations:
- Elevated with BK nephropathy, ATN, infection
- Less specific than biopsy
- Cost considerations

*Gene Expression Profiling:*

AlloMap (heart transplant):
- 11-gene signature from peripheral blood
- Score 0-40 (higher = more likely rejection)
- Score <34: low probability of rejection
- Replaces biopsies in stable patients >6 months
- Image study validated non-inferiority

Kidney expression profiling:
- Molecular microscope (MMDx)
- Classifier for TCMR, ABMR, tolerance
- Research applications growing

**Molecular Microscope Diagnostics (MMDx):**

- Microarray-based gene expression from biopsy
- Classifies rejection types
- Identifies molecular injury signatures
- Correlates with outcomes
- Complements histology

Classifier categories:
- No rejection
- T-cell mediated rejection
- Antibody-mediated rejection
- Mixed rejection
- Borderline changes

**Risk-Stratified Surveillance Protocols:**

*Low-Risk (Standard):*
- First transplant
- No DSA
- Compliant patient
- Standard immunosuppression
- Routine surveillance schedule

*Moderate-Risk:*
- One risk factor (prior rejection, borderline non-compliance)
- More frequent labs
- Consider protocol biopsies
- DSA monitoring

*High-Risk:*
- Highly sensitized (cPRA >80%)
- Prior ABMR
- De novo DSA
- Non-adherence history
- Intensive surveillance:
  - Frequent labs (weekly initially)
  - Regular DSA monitoring
  - Frequent biopsies
  - Consider home monitoring

**Surveillance for Chronic Rejection:**

*Chronic Allograft Nephropathy (Kidney):*
- Progressive IFTA on biopsy
- Rising creatinine
- Proteinuria development
- Protocol biopsies may detect subclinical progression
- Limited treatment options

*Cardiac Allograft Vasculopathy (Heart):*
- Intravascular ultrasound (IVUS) screening
- Coronary angiography annually
- Progressive luminal narrowing
- Leading cause of late graft failure
- Everolimus/sirolimus may slow progression

*Bronchiolitis Obliterans Syndrome (Lung):*
- Declining FEV1
- Air trapping on imaging
- High-resolution CT
- Limited therapeutic options
- Azithromycin, fundoplication, retransplant

**Novel Surveillance Approaches:**

*Urinary Biomarkers:*
- CXCL9, CXCL10: T-cell chemokines
- Elevated with acute rejection
- Non-invasive, serial testing
- Clinical validation ongoing

*Exosome Analysis:*
- Extracellular vesicles from graft
- Carry donor HLA
- Reflect graft condition
- Research stage

*T-cell Immune Monitoring:*
- ELISPOT assays
- ATP production (ImmuKnow)
- Limited clinical utility to date
- May predict infection vs rejection risk

**Quality Metrics:**

*Surveillance Effectiveness:*
- Detection rate of subclinical rejection
- Time to rejection diagnosis
- False negative rate
- Patient adherence to surveillance

*Cost-Effectiveness:*
- Protocol biopsies expensive and invasive
- Non-invasive alternatives cost-effective
- Risk-stratification optimizes resource use
- Value-based care considerations`,
      keyTerms: [
        { term: 'dd-cfDNA threshold', definition: 'Cutoff value above which rejection is likely' },
        { term: 'MMDx', definition: 'Molecular microscope diagnostic system for biopsy classification' },
        { term: 'cPRA', definition: 'Calculated panel reactive antibody, measure of sensitization' },
        { term: 'CAV', definition: 'Cardiac allograft vasculopathy, chronic rejection of heart' },
        { term: 'BOS', definition: 'Bronchiolitis obliterans syndrome, chronic lung rejection' },
        { term: 'IFTA', definition: 'Interstitial fibrosis and tubular atrophy, chronic kidney injury' },
        { term: 'IVUS', definition: 'Intravascular ultrasound, imaging for cardiac allograft vasculopathy' },
        { term: 'subclinical rejection', definition: 'Histologic rejection without graft dysfunction' },
      ],
      clinicalNotes: `Modern rejection surveillance requires integration of clinical judgment, laboratory testing, and histologic/molecular assessment. High-risk patients need intensive monitoring with frequent DSA testing and protocol biopsies. The advent of dd-cfDNA testing and gene expression profiling allows reduced invasive surveillance for stable patients. Early detection of subclinical rejection through protocol biopsies may improve long-term outcomes, though this remains debated. Surveillance protocols should be individualized based on immunologic risk, time from transplant, and graft function.`,
    },
    5: {
      level: 5,
      summary: 'Precision surveillance approaches leverage multi-omics integration, artificial intelligence, and personalized risk modeling. Machine learning algorithms analyze surveillance data patterns to predict rejection before clinical manifestation. The future of surveillance lies in non-invasive, real-time monitoring with actionable biomarkers guiding preemptive therapy.',
      explanation: `**Precision Surveillance:**

*Multi-Omics Integration:*
- Genomics: HLA typing, donor-recipient matching
- Transcriptomics: gene expression signatures
- Proteomics: circulating protein markers
- Metabolomics: metabolic fingerprints
- Integration for comprehensive risk assessment

*Machine Learning Applications:*

Rejection prediction models:
- Random forest algorithms
- Neural networks
- Integrate clinical, histologic, molecular data
- Predict rejection 3-6 months before biopsy
- Validation in progress

Natural language processing:
- Electronic health record mining
- Identify rejection risk factors
- Automate surveillance alerts

**Advanced Biomarker Development:**

*MicroRNA Signatures:*
- miR-142-3p, miR-155 in rejection
- Detectable in blood, urine
- Tissue-specific patterns
- Early detection capability

*Metabolomic Profiles:*
- Nuclear magnetic resonance spectroscopy
- Mass spectrometry-based metabolomics
- Identify rejection-associated metabolites
- Potential for early detection

*Proteomic Panels:*
- Multiple protein markers
- Cytokine/chemokine profiles
- Autoantibody signatures
- Machine learning classification

**Artificial Intelligence in Surveillance:**

*Deep Learning for Histology:*
- Automated Banff classification
- Quantitative assessment of inflammation
- Reduced interobserver variability
- Faster diagnosis

*Predictive Analytics:*
- Identify patients at risk for rejection
- Optimize surveillance intervals
- Guide immunosuppression adjustments
- Resource allocation

**Personalized Surveillance Schedules:**

*Dynamic Risk Modeling:*
- Continuous risk reassessment
- Adjust surveillance based on:
  - Compliance patterns
  - Immune monitoring results
  - Prior rejection history
  - DSA status
  - Biomarker trends

*Home Monitoring:*
- Telemedicine visits
- Home lab testing
- Wearable device integration
- Patient-reported outcomes

**Tolerance Surveillance:**

*Operational Tolerance Detection:*
- Gene expression signatures (tolerance footprints)
- Regulatory T-cell assays
- Donor-specific hyporesponsiveness
- Drug minimization trials

*Tolerance Biomarkers:*
- NK cell markers
- B-cell signatures
- Microbiome associations
- Research applications

**Challenges and Future Directions:**

*Biomarker Validation:*
- Reproducibility across centers
- Standardization of assays
- Regulatory pathways
- Cost-effectiveness

*Data Integration:*
- Electronic health record interoperability
- Big data analytics
- Privacy and security
- Clinical decision support

*Theragnostic Approach:*
- Biomarkers guiding therapy selection
- Personalized immunosuppression
- Preemptive treatment of subclinical injury
- Minimizing chronic allograft damage

**Global Surveillance Considerations:**

*Resource-Limited Settings:*
- Simplified surveillance protocols
- Point-of-care testing
- Telemedicine for remote areas
- Protocol biopsy alternatives

*Equity in Surveillance:*
- Access to advanced diagnostics
- Geographic disparities
- Socioeconomic factors
- Health policy implications

**Research Frontiers:**

*Liquid Biopsy:*
- Comprehensive graft assessment from blood
- Circulating tumor DNA concepts applied
- Multi-analyte profiling
- Real-time monitoring potential

*Implantable Sensors:*
- Continuous graft monitoring
- Early rejection detection
- Experimental stage
- Ethical considerations

*Immune Engineering:*
- Treg therapy monitoring
- Chimeric antigen receptor T-cells
- Biomarker-guided cell therapy
- Tolerance induction tracking`,
      keyTerms: [
        { term: 'multi-omics', definition: 'Integration of multiple biological data types (genomics, proteomics, etc.)' },
        { term: 'machine learning', definition: 'AI algorithms that learn patterns from data to make predictions' },
        { term: 'microRNA', definition: 'Small non-coding RNA molecules regulating gene expression' },
        { term: 'metabolomics', definition: 'Study of small molecule metabolites in biological systems' },
        { term: 'liquid biopsy', definition: 'Analysis of circulating biomarkers to assess tissue condition' },
        { term: 'theragnostic', definition: 'Diagnostic test that guides therapeutic decision' },
        { term: 'deep learning', definition: 'Neural network-based AI for pattern recognition' },
        { term: 'operational tolerance', definition: 'Stable graft function without immunosuppression' },
      ],
      clinicalNotes: `The future of rejection surveillance lies in precision medicine approaches integrating multi-omics data, artificial intelligence, and personalized risk modeling. Machine learning algorithms analyzing surveillance patterns may enable prediction of rejection before clinical manifestation, allowing preemptive intervention. Non-invasive biomarker panels, including microRNA signatures and advanced proteomics, hold promise for real-time graft monitoring. As these technologies mature, surveillance will transition from reactive detection to proactive prevention, optimizing both patient outcomes and healthcare resource utilization.`,
    },
  },

  media: [
    {
      id: 'banff-classification-diagram',
      type: 'diagram',
      filename: 'banff-classification.png',
      title: 'Banff Classification Criteria',
      description: 'Histologic criteria for kidney transplant rejection grading',
    },
    {
      id: 'surveillance-timeline',
      type: 'diagram',
      filename: 'surveillance-schedule.png',
      title: 'Post-Transplant Surveillance Timeline',
      description: 'Typical surveillance frequency by time from transplant',
    },
  ],

  citations: [
    {
      id: 'banff-2022',
      type: 'article',
      title: 'Banff Classification of Renal Allograft Pathology 2022 Update',
      authors: ['Haas M', 'Loupy A', 'Lefaucheur C'],
      source: 'American Journal of Transplantation',
      accessedDate: '2026-01-28',
    },
    {
      id: 'dd-cfDNA-review',
      type: 'article',
      title: 'Donor-Derived Cell-Free DNA in Transplant Rejection Surveillance',
      authors: ['Bloom RD', 'Bromberg JS'],
      source: 'Clinical Journal of the American Society of Nephrology',
      accessedDate: '2026-01-28',
    },
    {
      id: 'allomap-validation',
      type: 'article',
      title: 'The IMAGE Trial: Gene Expression Profiling in Heart Transplant Surveillance',
      authors: ['Pham MX', 'Teuteberg JJ'],
      source: 'New England Journal of Medicine',
      accessedDate: '2026-01-28',
    },
  ],

  crossReferences: [
    {
      targetId: 'transplant-post-transplant-care',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Post-Transplant Care',
    },
    {
      targetId: 'condition-transplant-rejection',
      targetType: 'condition',
      relationship: 'related',
      label: 'Transplant Rejection',
    },
    {
      targetId: 'transplant-immunosuppression-basics',
      targetType: 'concept',
      relationship: 'related',
      label: 'Immunosuppression Basics',
    },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'surveillance', 'monitoring', 'rejection'],
    keywords: ['rejection', 'surveillance', 'biopsy', 'Banff', 'DSA', 'dd-cfDNA', 'monitoring', 'allograft'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
