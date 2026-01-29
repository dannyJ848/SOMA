/**
 * Rejection Monitoring - Comprehensive Educational Content
 *
 * Covers transplant rejection surveillance: clinical signs, laboratory monitoring,
 * biopsy interpretation, non-invasive biomarkers, and management strategies.
 */

import { EducationalContent } from '../../types';

export const rejectionMonitoring: EducationalContent = {
  id: 'topic-rejection-monitoring',
  type: 'topic',
  name: 'Rejection Monitoring',
  alternateNames: ['Transplant Rejection Surveillance', 'Graft Monitoring', 'Allograft Surveillance', 'Rejection Detection'],

  levels: {
    1: {
      level: 1,
      summary: 'Rejection monitoring means regularly checking your transplanted organ to catch any signs that your body might be attacking it, so treatment can start early.',
      explanation: `After receiving a transplant, your immune system may try to attack the new organ because it sees it as foreign. Rejection monitoring helps catch this early when treatment works best.

**Why Monitoring Matters:**

- Rejection can happen without you feeling sick
- Early detection means easier treatment
- Prevents permanent damage to your new organ
- Helps your transplant last longer

**How Your Team Monitors for Rejection:**

1. **Regular Appointments**
   - Blood pressure and weight checks
   - Physical examination
   - Discussing how you feel

2. **Blood Tests**
   - Organ function tests (kidney, liver, etc.)
   - Medication levels
   - Signs of immune activation

3. **Biopsies** (for some organs)
   - Small tissue sample from transplant
   - Examined under microscope
   - Most accurate way to detect rejection

**Warning Signs to Report Immediately:**

*For Kidney Transplant:*
- Less urine than usual
- Swelling in legs or ankles
- Pain over transplant area
- Fever

*For Liver Transplant:*
- Yellow skin or eyes (jaundice)
- Dark urine
- Itching
- Abdominal pain

*For Heart Transplant:*
- Shortness of breath
- Fatigue
- Swelling
- Rapid heart rate

**Your Important Role:**

- Take all medications exactly as prescribed
- Attend every scheduled appointment
- Report any changes or symptoms quickly
- Keep track of your daily weight and blood pressure
- Get all recommended blood tests`,
      keyTerms: [
        { term: 'rejection', definition: 'When your immune system attacks the transplanted organ' },
        { term: 'monitoring', definition: 'Regular testing and check-ups to watch for problems' },
        { term: 'biopsy', definition: 'Taking a tiny piece of tissue to examine under a microscope' },
        { term: 'graft', definition: 'Another word for the transplanted organ' },
      ],
      analogies: [
        'Rejection monitoring is like having smoke detectors in your house - you want to catch problems early before they cause serious damage.',
        'Think of blood tests as checking the oil in your car - regular checks keep things running smoothly.',
        'Your immune system is like an overzealous guard dog - it needs training (medications) to accept your new organ as friendly.',
      ],
      examples: [
        'A kidney transplant patient gets blood work every week for the first month, then less often as time goes on.',
        'A patient notices decreased urine and slight fever, calls the transplant team immediately, and early rejection is caught and treated.',
      ],
      patientCounselingPoints: [
        'Never miss your blood test appointments',
        'Call your transplant team for fever over 100.4°F (38°C)',
        'Weigh yourself daily and report sudden weight gain',
        'Keep a log of any symptoms you experience',
        'Take your anti-rejection medications at exactly the same times each day',
      ],
    },
    2: {
      level: 2,
      summary: 'Rejection monitoring combines clinical assessment, laboratory markers of organ function, immunosuppressant drug levels, and tissue biopsy to detect immune-mediated graft injury at early, treatable stages.',
      explanation: `## Types of Rejection

### By Timing
| Type | Timing | Mechanism | Treatment |
|------|--------|-----------|-----------|
| Hyperacute | Minutes to hours | Pre-formed antibodies | Prevention (crossmatch) |
| Acute | Days to months | T-cell or antibody-mediated | Steroids, ATG, plasmapheresis |
| Chronic | Months to years | Ongoing immune injury | Difficult; optimize immunosuppression |

### By Mechanism
**Acute Cellular Rejection (ACR):**
- T-cells attack the graft
- Most common type
- Usually responds to steroids

**Antibody-Mediated Rejection (AMR):**
- B-cells make antibodies against donor
- More difficult to treat
- Requires plasmapheresis, IVIG, rituximab

## Laboratory Monitoring

### Kidney Transplant
| Test | Purpose | Frequency |
|------|---------|-----------|
| Creatinine | Kidney function | Weekly → Monthly |
| BUN | Kidney function | Weekly → Monthly |
| Urinalysis | Protein, cells | Monthly |
| DSA | Donor antibodies | Periodically |

### Liver Transplant
| Test | Purpose | Frequency |
|------|---------|-----------|
| AST/ALT | Liver enzymes | Weekly → Monthly |
| Bilirubin | Liver function | Weekly → Monthly |
| GGT, Alk Phos | Biliary function | Monthly |
| DSA | Donor antibodies | Periodically |

### Heart Transplant
| Test | Purpose | Frequency |
|------|---------|-----------|
| BNP | Heart strain | Monthly |
| Troponin | Heart injury | If symptomatic |
| Echo | Heart function | Monthly initially |
| Endomyocardial biopsy | Gold standard | Per protocol |

## Tissue Biopsy

### Kidney Biopsy
- Ultrasound-guided needle biopsy
- Banff classification for grading
- Protocol biopsies at some centers
- Typically outpatient procedure

### Liver Biopsy
- Percutaneous or transjugular approach
- RAI (Rejection Activity Index) scoring
- Less routine than kidney biopsies

### Heart Biopsy
- Right ventricular endomyocardial biopsy
- Done through jugular vein
- ISHLT grading system
- Multiple biopsies in first year

## Biopsy Grading (Kidney - Banff)

| Grade | Histology | Treatment |
|-------|-----------|-----------|
| Borderline | Mild tubulitis | Optimize immunosuppression |
| IA | Tubulitis + mild interstitial inflammation | Pulse steroids |
| IB | More tubulitis | Pulse steroids |
| IIA | Mild arteritis | Steroids ± ATG |
| IIB | Severe arteritis | ATG |
| III | Transmural arteritis, necrosis | ATG, may lose graft |

## Immunosuppressant Monitoring

### Trough Levels
- Tacrolimus: 5-15 ng/mL (varies by time post-transplant)
- Cyclosporine: 100-300 ng/mL
- Sirolimus: 5-15 ng/mL

### Dose Adjustments
- Low levels → risk of rejection
- High levels → risk of toxicity
- Target ranges change over time`,
      keyTerms: [
        { term: 'acute cellular rejection', definition: 'T-cell mediated attack on transplant; most common and usually treatable' },
        { term: 'antibody-mediated rejection', definition: 'B-cell/antibody attack on transplant; harder to treat' },
        { term: 'DSA', definition: 'Donor-specific antibodies; antibodies that target the specific donor' },
        { term: 'Banff classification', definition: 'Standard grading system for kidney transplant biopsies' },
        { term: 'protocol biopsy', definition: 'Scheduled biopsy done even without symptoms to catch subclinical rejection' },
        { term: 'ATG', definition: 'Anti-thymocyte globulin; strong treatment for severe rejection' },
      ],
      analogies: [
        'DSA testing is like checking if your immune system has developed "wanted posters" for your new organ.',
        'A biopsy is like a quality inspection - taking a sample to see exactly what is happening inside.',
        'Banff grades are like a weather warning system - higher grades mean more serious storms ahead.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rejection monitoring integrates clinical surveillance, serial biomarkers, donor-specific antibody detection, protocol biopsies with standardized histopathology (Banff, ISHLT), and emerging non-invasive molecular diagnostics to guide immunosuppression and detect both cellular and humoral alloimmune responses.',
      explanation: `## Immunological Basis of Rejection Surveillance

### Allorecognition Pathways

**Direct Pathway:**
- Host T-cells recognize intact donor MHC molecules
- Dominant early post-transplant
- Associated with acute cellular rejection

**Indirect Pathway:**
- Host APCs present processed donor peptides
- More important over time
- Associated with chronic rejection and DSA formation

**Semi-Direct Pathway:**
- Transfer of donor MHC to host APCs
- Recently characterized
- Role in rejection being defined

### Effector Mechanisms

**Cellular Rejection:**
- CD8+ cytotoxic T-cells → direct graft cell killing
- CD4+ T-helper cells → coordinate immune response
- Macrophages → inflammation and tissue damage
- Histology: tubulitis, endothelialitis, interstitial infiltrates

**Antibody-Mediated Rejection:**
- DSA bind to donor endothelium
- Complement activation (C4d deposition)
- Antibody-dependent cellular cytotoxicity (ADCC)
- Histology: C4d staining, microvascular inflammation

## Biomarker Surveillance

### Traditional Markers

**Kidney:**
- Serum creatinine: Insensitive, late marker
- Rise of 20-30% may indicate rejection
- Many other causes (dehydration, obstruction, CNI toxicity)

**Liver:**
- AST/ALT: Hepatocyte injury
- Bilirubin: Cholestasis
- Can also indicate biliary complications, drug toxicity

**Heart:**
- BNP/NT-proBNP: Myocardial stress
- Troponin: Myocyte injury
- Echocardiography: Systolic/diastolic function

### Donor-Specific Antibodies (DSA)

**Detection Methods:**
- Solid-phase assays (Luminex)
- Single antigen bead (SAB) testing
- Mean fluorescence intensity (MFI) quantification

**Clinical Significance:**
- De novo DSA (dnDSA) associated with worse outcomes
- Pre-formed DSA inform transplant risk
- Class I (HLA-A, B, C) and Class II (DR, DQ, DP)

**Monitoring Protocol:**
- At transplant (baseline)
- At rejection episodes
- Periodically during maintenance (every 3-12 months)
- After immunosuppression changes

### Emerging Non-Invasive Biomarkers

**Donor-Derived Cell-Free DNA (dd-cfDNA):**
- DNA released from injured graft cells
- Measured as percentage of total cfDNA
- Elevated with rejection (especially AMR)
- Platforms: AlloSure, Prospera, others

**Gene Expression Profiling:**
- AlloMap (heart): Gene expression in peripheral blood
- Measures immune quiescence
- Can reduce biopsy frequency in low-risk patients

**Urinary Biomarkers (Kidney):**
- CXCL9, CXCL10: Chemokine markers of inflammation
- Research stage, not standard practice

## Histopathological Classification

### Kidney Transplant (Banff 2019)

**Categories:**
1. Normal
2. Antibody-mediated changes
3. Borderline changes
4. T-cell-mediated rejection
5. Interstitial fibrosis/tubular atrophy (IF/TA)
6. Other

**T-Cell Mediated Rejection (TCMR):**
| Grade | Criteria |
|-------|----------|
| IA | Interstitial inflammation >25% + tubulitis (t2) |
| IB | Interstitial inflammation >25% + tubulitis (t3) |
| IIA | Mild intimal arteritis (v1) |
| IIB | Severe intimal arteritis (v2) |
| III | Transmural arteritis and/or fibrinoid necrosis (v3) |

**Antibody-Mediated Rejection (AMR):**
- Histologic evidence: microvascular inflammation, thromboses
- C4d positivity (peritubular capillaries)
- Circulating DSA
- All three criteria needed for definitive diagnosis

### Heart Transplant (ISHLT 2004)

**Cellular Rejection:**
| Grade | Findings |
|-------|----------|
| 0R | No rejection |
| 1R | Mild: interstitial/perivascular infiltrate with up to 1 myocyte damage focus |
| 2R | Moderate: 2+ foci with myocyte damage |
| 3R | Severe: diffuse infiltrate with multifocal myocyte damage ± edema, hemorrhage, vasculitis |

**pAMR (Pathologic AMR):**
- pAMR 0: Negative for AMR
- pAMR 1 (H+): Histology positive only
- pAMR 1 (I+): Immunohistology positive only
- pAMR 2: Both histology and immunohistology positive
- pAMR 3: Severe AMR with graft dysfunction

## Protocol Biopsy Strategies

### Rationale
- Subclinical rejection common (15-30%)
- Creatinine insensitive to early injury
- Early treatment may improve outcomes

### Typical Protocols (Kidney)
- 3 months post-transplant
- 12 months post-transplant
- Some centers: 3, 6, 12, 24 months
- Controversial: risk-benefit debated

### Indications for Cause Biopsy
- Unexplained creatinine rise
- Proteinuria development
- Suspected drug toxicity
- dnDSA development`,
      keyTerms: [
        { term: 'direct allorecognition', definition: 'T-cells directly recognizing intact donor MHC on graft cells' },
        { term: 'indirect allorecognition', definition: 'T-cells recognizing processed donor peptides presented by host APCs' },
        { term: 'dd-cfDNA', definition: 'Donor-derived cell-free DNA; non-invasive marker of graft injury' },
        { term: 'C4d', definition: 'Complement split product deposited in tissue during antibody-mediated rejection' },
        { term: 'microvascular inflammation', definition: 'Inflammation of small vessels; hallmark of antibody-mediated rejection' },
        { term: 'subclinical rejection', definition: 'Rejection detected on biopsy without clinical signs or symptoms' },
      ],
      clinicalNotes: 'Rising creatinine has many causes beyond rejection (CNI toxicity, BK virus, obstruction). Biopsy remains the gold standard for diagnosis. De novo DSA development is a concerning sign that often precedes clinical rejection. Non-invasive biomarkers like dd-cfDNA may reduce biopsy burden but do not yet replace histopathology.',
    },
    4: {
      level: 4,
      summary: 'Contemporary rejection surveillance integrates multimodal monitoring including validated non-invasive biomarkers (dd-cfDNA, gene expression), standardized histopathology with molecular diagnostics, DSA kinetics, and protocol-driven approaches stratified by immunological risk to optimize early detection while minimizing unnecessary interventions.',
      explanation: `## Risk-Stratified Monitoring

### Immunological Risk Assessment

**High Risk Factors:**
- Prior sensitization (high PRA, positive crossmatch history)
- Re-transplant with prior immunologic failure
- HLA mismatch (especially DQ)
- DSA at transplant
- Young recipient age
- African American ethnicity
- Poor adherence history

**Low Risk Factors:**
- Living donor transplant
- Well-matched (especially 0 DR mismatch)
- No sensitization
- First transplant
- Good social support

### Risk-Stratified Protocols

| Risk Level | DSA Monitoring | Protocol Biopsies | Biomarkers |
|------------|----------------|-------------------|------------|
| High | Every 3 months | 3, 12, 24 months | Consider dd-cfDNA |
| Standard | Every 6-12 months | 3, 12 months | As needed |
| Low | Annual | Optional | As needed |

## Non-Invasive Monitoring Advances

### Donor-Derived Cell-Free DNA (dd-cfDNA)

**Mechanism:**
- Injured/apoptotic graft cells release DNA
- Measured in recipient blood
- Expressed as fraction or absolute quantity

**Platforms:**
- AlloSure (CareDx): SNP-based
- Prospera (Natera): SNP-based
- Multiple others in development

**Clinical Performance:**
| Setting | Sensitivity | Specificity | Notes |
|---------|-------------|-------------|-------|
| Active AMR | 80-90% | 70-80% | Best performance |
| Active TCMR | 50-70% | 70-80% | Less reliable for mild TCMR |
| Subclinical rejection | Variable | Variable | Emerging data |

**Clinical Application:**
- Rule-out test: Low dd-cfDNA makes rejection unlikely
- Surveillance: Rising dd-cfDNA prompts evaluation
- Post-treatment: Declining dd-cfDNA suggests response

**Limitations:**
- Not specific (elevated with any graft injury)
- Variable cutoffs and platforms
- Cost considerations
- Does not replace biopsy for diagnosis

### Gene Expression Profiling

**AlloMap (Heart Transplant):**
- 20-gene expression panel from peripheral blood
- Scores immune quiescence vs activation
- FDA-cleared to rule out moderate-severe ACR
- Can safely reduce biopsy frequency in low-risk patients

**AlloSure Kidney (in development):**
- Similar concept for kidney transplant
- Validation ongoing

### Urinary Biomarkers

**CXCL9/CXCL10:**
- IFN-γ induced chemokines
- Elevated in rejection
- Non-invasive and kidney-specific
- Not yet clinically available

**Research Biomarkers:**
- Perforin, granzyme B mRNA
- Multi-gene signatures
- Proteomics approaches

## Molecular Microscope

### Concept
- Gene expression profiling of biopsy tissue
- Complements conventional histology
- May improve diagnostic accuracy

### MMDx (Molecular Microscope Diagnostic System)

**Process:**
1. RNA extracted from biopsy
2. Microarray gene expression profiling
3. Algorithm-based classification
4. Report: probability of rejection types

**Advantages:**
- Objective, reproducible
- May detect subtle rejection missed by histology
- Distinguishes TCMR, AMR, mixed
- Predicts prognosis

**Current Status:**
- Available commercially
- Not yet standard of care
- Complements but does not replace pathology

## Treatment Guidance

### Response Monitoring

**Acute Cellular Rejection:**
- Creatinine should improve within 5-7 days of treatment
- Repeat biopsy if no improvement
- Consider conversion to ATG if steroid-resistant

**Antibody-Mediated Rejection:**
- DSA levels after treatment
- dd-cfDNA trending
- Repeat biopsy at 2-4 weeks
- Often requires ongoing treatment

### Inadequate Response

**Definitions:**
- Steroid-resistant: No improvement after pulse steroids
- Treatment-refractory: Persistent rejection despite standard therapy

**Options:**
- Escalate immunosuppression
- Add ATG for severe cellular
- Plasmapheresis, IVIG, rituximab for AMR
- Eculizumab for refractory AMR (limited data)
- Consider re-biopsy to confirm diagnosis

## Long-Term Surveillance

### Late Rejection Risk

**Factors:**
- Non-adherence (most common)
- Minimization of immunosuppression
- dnDSA development
- Inadequate initial treatment

### Chronic Active Antibody-Mediated Rejection

**Features:**
- Transplant glomerulopathy (kidney)
- DSA persistence
- Progressive graft dysfunction
- Often refractory to treatment

**Monitoring:**
- Serial creatinine/proteinuria
- DSA monitoring
- Consider biopsy for unexplained changes

### Approach to Late Dysfunction

1. Rule out non-immunologic causes
2. Check DSA status
3. Consider biopsy
4. Assess adherence
5. Adjust immunosuppression based on findings`,
      keyTerms: [
        { term: 'AlloMap', definition: 'Gene expression blood test for heart transplant rejection surveillance' },
        { term: 'MMDx', definition: 'Molecular Microscope Diagnostic System; gene expression analysis of biopsy tissue' },
        { term: 'transplant glomerulopathy', definition: 'Chronic antibody-mediated injury to kidney glomeruli' },
        { term: 'steroid-resistant rejection', definition: 'Rejection not responding to pulse steroid treatment' },
        { term: 'PRA', definition: 'Panel reactive antibody; measure of sensitization to HLA antigens' },
        { term: 'CXCL9/10', definition: 'Urinary chemokines elevated in kidney transplant rejection' },
      ],
      clinicalNotes: 'Non-adherence is the leading cause of late rejection - always assess medication-taking behavior when rejection occurs. dd-cfDNA is best as a rule-out test; low levels make rejection unlikely but elevated levels are non-specific. The molecular microscope adds objectivity to biopsy interpretation but is not yet standard practice. Chronic active AMR has limited treatment options and poor prognosis.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art rejection monitoring integrates validated non-invasive biomarkers, molecular biopsy diagnostics, machine learning risk prediction, and precision medicine approaches to enable individualized surveillance that balances early detection with intervention burden, while addressing emerging challenges including subclinical injury, donor-specific antibody kinetics, and tolerance monitoring.',
      explanation: `## Current Guidelines and Evidence

### KDIGO Guidelines (Kidney)

**Surveillance Recommendations:**
- Monitor serum creatinine and proteinuria
- DSA testing for unexplained dysfunction
- Protocol biopsies: No universal recommendation
- Non-invasive biomarkers: Mentioned but not mandated

### ISHLT Guidelines (Heart)

**Surveillance Recommendations:**
- Endomyocardial biopsy: Gold standard
- Gene expression profiling (AlloMap): Can reduce biopsies in low-risk
- dd-cfDNA: Emerging, not yet guideline-recommended

## Biomarker Integration

### Multi-Marker Approaches

**Combining dd-cfDNA with Other Markers:**
- dd-cfDNA + DSA: Better prediction than either alone
- dd-cfDNA + creatinine trajectory
- Multi-omic panels in development

**Optimal Testing Strategies:**
| Clinical Scenario | Suggested Approach |
|-------------------|-------------------|
| Routine surveillance (low risk) | dd-cfDNA or standard labs |
| Routine surveillance (high risk) | dd-cfDNA + DSA |
| Dysfunction | DSA + biopsy (± dd-cfDNA) |
| Post-rejection treatment | dd-cfDNA + DSA + consider biopsy |
| Suspected non-adherence | DSA + dd-cfDNA + biopsy |

### Kinetics and Trending

**dd-cfDNA Kinetics:**
- Rises acutely with rejection
- Declines with treatment
- Persistent elevation suggests ongoing injury
- Serial measurements more informative than single values

**DSA Kinetics:**
- Persistence after treatment predicts poor outcomes
- Rising MFI over time concerning
- Complete elimination rare but favorable

## Molecular Diagnostics

### Molecular Microscope System

**INTERCOMEX/INTERLEUKIN Studies:**
- Validated gene expression classifiers
- Distinguish TCMR, AMR, mixed, injury, normal
- Archetype-based diagnosis

**Clinical Utility:**
- Resolves histologic ambiguity
- Detects molecular rejection without classic histology
- Prognostic value beyond conventional pathology

### Integration with Histology

**Discordant Cases:**
- Molecular positive / Histology negative: Early or subclinical rejection
- Molecular negative / Histology positive: Non-specific inflammation
- Adjudication requires clinical judgment

## Machine Learning Applications

### Prediction Models

**Risk Calculators:**
- iBox (kidney): Integrates clinical, histologic, immunologic data
- Predicts long-term graft survival
- Guides intervention intensity

**Deep Learning:**
- Automated biopsy analysis
- Pattern recognition in complex data
- Research stage

### Personalized Monitoring

**Concept:**
- Individual risk determines surveillance intensity
- Low-risk: Minimal monitoring
- High-risk: Intensive multi-modal monitoring
- Dynamic adjustment based on trajectory

## Subclinical Rejection

### Significance

**Prevalence:**
- 15-30% on protocol biopsies
- Higher in sensitized patients
- May progress to clinical rejection

**Treatment Controversy:**
- Some centers treat all subclinical rejection
- Others treat only if moderate or antibody-mediated
- No randomized trial definitively answers question

### Monitoring-Triggered Intervention

**Strategies:**
- Biomarker surveillance to detect early injury
- Biopsy to confirm before treatment
- Targeted treatment of confirmed subclinical rejection

## Tolerance Monitoring

### Operational Tolerance

**Definition:**
- Stable graft function off all immunosuppression
- Rare (<1% of recipients)
- More common in liver than kidney/heart

**Biomarkers of Tolerance:**
- Regulatory T-cell signatures
- B-cell profiles (transitional B cells)
- Gene expression patterns
- No validated clinical test

### Minimization Monitoring

**When Considering Minimization:**
- Stable patient, low immunologic risk
- No DSA
- Protocol biopsy without rejection
- Close monitoring essential

**Monitoring During Minimization:**
- Frequent dd-cfDNA or biomarker testing
- DSA surveillance
- Low threshold for biopsy
- Readiness to reinstitute immunosuppression

## Future Directions

### Emerging Technologies

**Single-Cell Analysis:**
- Detailed immune cell characterization
- May identify tolerance-promoting cells
- Research applications

**Liquid Biopsy Advances:**
- Donor-derived cell analysis
- Immune cell profiling
- Multi-analyte platforms

### Clinical Trial Innovation

**Adaptive Monitoring Trials:**
- Biomarker-guided immunosuppression
- Individualized target levels
- Outcomes-based optimization

### Implementation Challenges

**Barriers:**
- Cost of new technologies
- Lack of head-to-head comparisons
- Variable availability
- Insurance coverage

**Strategies:**
- Value-based care models
- Standardized algorithms
- Registry data collection`,
      keyTerms: [
        { term: 'iBox', definition: 'Integrative Box; machine learning model predicting long-term kidney graft survival' },
        { term: 'operational tolerance', definition: 'Graft acceptance without immunosuppression; rare but documented' },
        { term: 'regulatory T-cell', definition: 'Treg; immune cell that suppresses immune responses and may promote tolerance' },
        { term: 'transitional B-cell', definition: 'Immature B-cell phenotype associated with tolerance in some studies' },
        { term: 'liquid biopsy', definition: 'Blood-based testing that provides information traditionally requiring tissue biopsy' },
        { term: 'archetype', definition: 'Molecular classifier grouping based on gene expression patterns' },
      ],
      clinicalNotes: `Key clinical pearls for rejection monitoring:

1. **Risk Stratification**: Tailor monitoring intensity to individual immunological risk. High-risk patients need more frequent surveillance.

2. **dd-cfDNA Utility**: Best as a rule-out test. Low levels make active rejection unlikely. Elevated levels are non-specific and require further workup.

3. **DSA Surveillance**: De novo DSA predicts poor outcomes. Check DSA status at any unexplained dysfunction and periodically in high-risk patients.

4. **Biopsy Remains Gold Standard**: Non-invasive tests complement but do not replace histopathology for definitive diagnosis.

5. **Molecular Microscope**: Adds objectivity to biopsy interpretation and may detect molecular rejection missed by conventional histology.

6. **Subclinical Rejection**: Consider treatment, especially if antibody-mediated or moderate grade. Close follow-up essential.

7. **Non-Adherence**: Always assess medication-taking behavior when late rejection occurs. It is the leading preventable cause of graft loss.

8. **Tolerance Monitoring**: No validated test exists. Immunosuppression minimization requires very close monitoring with low threshold for intervention.`,
    },
  },

  media: [
    {
      id: 'rejection-monitoring-algorithm',
      type: 'diagram',
      filename: 'rejection-monitoring-flowchart.svg',
      title: 'Rejection Monitoring Algorithm',
      description: 'Surveillance pathway integrating clinical, laboratory, and histologic assessments',
    },
    {
      id: 'banff-classification',
      type: 'diagram',
      filename: 'banff-rejection-grades.svg',
      title: 'Banff Classification',
      description: 'Kidney transplant rejection histopathology grading system',
    },
  ],

  citations: [
    {
      id: 'banff-2019',
      type: 'article',
      title: 'The Banff 2019 Kidney Meeting Report (I): Updates on and Clarification of Criteria for T Cell- and Antibody-Mediated Rejection',
      authors: ['Loupy A', 'Haas M', 'Roufosse C', 'et al.'],
      source: 'American Journal of Transplantation',
      url: 'https://doi.org/10.1111/ajt.15898',
    },
    {
      id: 'dd-cfDNA-validation',
      type: 'article',
      title: 'Donor-Derived Cell-Free DNA for Kidney Transplant Rejection Detection',
      authors: ['Bloom RD', 'Bromberg JS', 'et al.'],
      source: 'Journal of the American Society of Nephrology',
    },
    {
      id: 'allomap-utility',
      type: 'article',
      title: 'Gene Expression Profiling and Surveillance of Heart Transplant Recipients',
      authors: ['Deng MC', 'et al.'],
      source: 'American Journal of Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'topic-calcineurin-inhibitors', targetType: 'topic', relationship: 'related', label: 'Calcineurin Inhibitors' },
    { targetId: 'topic-antimetabolites', targetType: 'topic', relationship: 'related', label: 'Antimetabolites' },
    { targetId: 'topic-infection-prevention', targetType: 'topic', relationship: 'related', label: 'Infection Prevention' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'immunology', 'diagnostics'],
    keywords: ['rejection', 'monitoring', 'biopsy', 'DSA', 'dd-cfDNA', 'Banff', 'surveillance'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rejectionMonitoring;
