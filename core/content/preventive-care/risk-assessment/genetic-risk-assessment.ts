/**
 * Genetic Risk Assessment
 *
 * Comprehensive education on genetic risk assessment for disease prevention,
 * including family history analysis, genetic testing, and personalized prevention.
 */

import { EducationalContent } from '../../types';

export const GENETIC_RISK_ASSESSMENT: EducationalContent = {
  id: 'preventive-genetic-risk-assessment',
  type: 'concept',
  name: 'Genetic Risk Assessment for Disease Prevention',
  alternateNames: ['Genetic screening', 'Hereditary risk assessment', 'Genomic risk evaluation', 'Inherited disease risk'],

  levels: {
    1: {
      level: 1,
      summary: 'Genetic risk assessment uses family history and sometimes genetic testing to understand your chances of developing certain inherited diseases and how to prevent them.',
      explanation: `Your genes are like instructions that tell your body how to work. Sometimes these instructions can increase your chance of getting certain diseases. Genetic risk assessment helps figure out if you have higher risk.

**What is Genetic Risk?**

*Two Types of Risk:*
- Most diseases come from many small genetic factors plus lifestyle
- Some diseases come mainly from one gene change
- Understanding your risk helps with prevention

*Family History Matters:*
- Close relatives share many genes
- Diseases running in families may have genetic link
- Ask about health history of parents, siblings, grandparents
- Both sides of family matter (mom and dad)

**When to Consider Genetic Assessment:**

*Family History Red Flags:*
- Same disease in several close relatives
- Disease at younger age than usual
- Multiple cancers in one person
- Rare diseases in family
- Ashkenazi Jewish ancestry (some genetic risks)

*Common Inherited Conditions:*
- Breast and ovarian cancer (BRCA genes)
- Colon cancer (Lynch syndrome)
- High cholesterol (familial hypercholesterolemia)
- Certain heart conditions
- Sickle cell disease

**What Genetic Assessment Involves:**

*Family History:*
- Drawing a family tree (pedigree)
- Recording who had what diseases
- Ages when diagnosed
- Causes of death
- Ethnic background

*Genetic Testing:*
- Blood or saliva sample
- Looks for specific gene changes
- Not everyone needs testing
- Genetic counselor helps decide

**Benefits of Knowing Your Risk:**
- Start screening earlier if needed
- Make lifestyle changes
- Take medicines to reduce risk
- Consider preventive surgery in some cases
- Help family members understand their risk

**Limitations:**
- Cannot predict everything
- Many diseases have unknown genetic factors
- Having risk gene does not mean you will definitely get disease
- Not having risk gene does not guarantee no disease

**Getting Help:**
- Talk to your doctor about family history
- May be referred to genetic counselor
- They explain testing options and results
- Help with emotional aspects
- Insurance coverage varies`,
      keyTerms: [
        { term: 'gene', definition: 'A piece of DNA that contains instructions for how your body works' },
        { term: 'family history', definition: 'Information about health conditions that run in your family' },
        { term: 'genetic counselor', definition: 'A healthcare professional trained to help people understand genetic risks and testing' },
        { term: 'inherited', definition: 'Passed down from parents to children through genes' },
        { term: 'predisposition', definition: 'Having an increased chance of developing a condition' },
      ],
      analogies: [
        'Genes are like a recipe book for your body - sometimes there is a typo in the recipe that changes how the dish turns out.',
        'Think of genetic risk like weather forecasting - it tells you the chance of rain, but does not guarantee it will rain.',
      ],
      examples: [
        'Sarah\'s mother and aunt both had breast cancer before age 50. Genetic testing found a BRCA gene change. Sarah now has early mammograms and MRI scans to catch any cancer early.',
        'James has high cholesterol that runs in his family. Knowing it is genetic helped his doctor prescribe the right medicine to prevent heart disease.',
      ],
      patientCounselingPoints: [
        'Most diseases are not purely genetic - lifestyle matters too',
        'A genetic counselor can help you understand if testing is right for you',
        'Knowing your risk can help you take steps to stay healthy',
        'Share important family health information with your relatives',
        'Genetic test results do not change over time - you only need to be tested once',
      ],
    },
    2: {
      level: 2,
      summary: 'Genetic risk assessment combines detailed family history analysis with genetic testing when indicated to identify inherited disease risk, enabling personalized prevention strategies for conditions like hereditary cancer syndromes and cardiovascular disease.',
      explanation: `Genetic factors contribute to virtually all human diseases. Understanding genetic risk allows for targeted prevention and early detection strategies.

**Types of Genetic Contributions:**

*Monogenic (Mendelian):*
- Single gene causes disease
- Clear inheritance patterns
- High penetrance (if you have it, likely get disease)
- Examples: BRCA1/2, Lynch syndrome, FH

*Polygenic/Multifactorial:*
- Multiple genes each contribute small effect
- Environmental factors interact
- Complex inheritance patterns
- Most common diseases (diabetes, heart disease, common cancers)

*Chromosomal:*
- Large structural changes
- Affect many genes
- Examples: Down syndrome, Turner syndrome

**Family History Collection:**

*Three-Generation Pedigree:*
- Patient (proband)
- Parents, siblings, children
- Grandparents, aunts, uncles, cousins
- Both maternal and paternal sides

*Key Information:*
- Medical conditions with ages of onset
- Causes and ages of death
- Ethnic ancestry (affects carrier risk)
- Consanguinity
- Environmental exposures

*Red Flags for Hereditary Disease:*
| Feature | Implication |
|---------|-------------|
| Early age of onset | Suggests genetic predisposition |
| Multiple affected relatives | Possible inherited syndrome |
| Multiple primary cancers | Cancer predisposition syndrome |
| Bilateral disease | Recessive or dominant inheritance |
| Rare disease | May be genetic |
| Related parents | Recessive disorder risk |

**Common Hereditary Cancer Syndromes:**

*BRCA1 and BRCA2:*
- Autosomal dominant inheritance
- Breast cancer risk: 45-75% by age 70
- Ovarian cancer risk: 10-40%
- Prostate and pancreatic cancer risk
- Ashkenazi Jewish founder mutations

*Lynch Syndrome (HNPCC):*
- Mismatch repair gene mutations
- Colorectal cancer: 40-80% lifetime risk
- Endometrial cancer: 20-60%
- Ovarian, gastric, urinary tract cancers
- Amsterdam criteria and Bethesda guidelines

*Familial Adenomatous Polyposis (FAP):*
- APC gene mutation
- Hundreds to thousands of colon polyps
- 100% colon cancer risk without colectomy
- Desmoid tumors, thyroid cancer
- Attenuated FAP variant

*Other Cancer Syndromes:*
- Li-Fraumeni (TP53)
- Hereditary diffuse gastric cancer (CDH1)
- Von Hippel-Lindau
- Multiple endocrine neoplasia

**Cardiovascular Genetic Risk:**

*Familial Hypercholesterolemia (FH):*
- LDL receptor, APOB, or PCSK9 mutations
- Heterozygous: 1 in 250
- Homozygous: 1 in 160,000-300,000
- Very high LDL from birth
- Early coronary artery disease

*Cardiomyopathies:*
- Hypertrophic cardiomyopathy (sarcomere genes)
- Dilated cardiomyopathy
- Arrhythmogenic cardiomyopathy
- Channelopathies (long QT, Brugada)

**Genetic Testing Types:**

*Single Gene Testing:*
- Targeted known mutation
- Specific gene sequencing
- Appropriate when family mutation known

*Panel Testing:*
- Multiple related genes simultaneously
- Cancer panels (20+ genes)
- Cardiac panels
- Cost-effective, higher yield

*Whole Exome/Genome:*
- All protein-coding genes
- Research or complex cases
- Incidental findings management
- Variant of uncertain significance challenge

**Risk Stratification:**

*Absolute Risk:*
- Individual\'s probability over time
- Incorporates genetic and other factors
- Guides screening intensity

*Relative Risk:*
- Comparison to population average
- Does not indicate actual probability
- Less clinically useful alone

*Risk Modification:*
- Genetic risk not destiny
- Lifestyle interventions reduce risk
- Medications for high-risk
- Surveillance for early detection`,
      keyTerms: [
        { term: 'penetrance', definition: 'The proportion of people with a genetic variant who develop the associated condition' },
        { term: 'pedigree', definition: 'A diagram showing family relationships and disease occurrence across generations' },
        { term: 'variant of uncertain significance', definition: 'A genetic change whose effect on disease risk is unknown' },
        { term: 'autosomal dominant', definition: 'Inheritance pattern where one copy of mutated gene causes disease, passed from parent to child' },
        { term: 'founder mutation', definition: 'A gene variant common in a specific population due to shared ancestry' },
      ],
      analogies: [
        'Genetic testing is like having a detailed weather forecast - it gives you specific information to prepare, rather than just knowing the general climate.',
        'Think of your genetic risk like a loaded gun - the genes load the gun, but lifestyle often pulls the trigger.',
      ],
      examples: [
        'A 35-year-old woman with a BRCA1 mutation has approximately 55-65% lifetime risk of breast cancer compared to 12% in the general population.',
        'Lynch syndrome carriers need colonoscopy every 1-2 years starting at age 20-25, compared to average risk screening starting at 45.',
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical genetic risk assessment integrates family history evaluation, pre-test counseling, appropriate genetic testing selection, variant interpretation, and post-test management including cascade testing of at-risk relatives and personalized prevention strategies.',
      explanation: `**Pre-Test Counseling:**

*Components:*
- Family history verification
- Risk assessment
- Testing options and limitations
- Possible results and implications
- Insurance/employment discrimination concerns (GINA protections)
- Psychological preparedness
- Informed consent process

*Testing Considerations:*
- Who to test in family (affected vs unaffected)
- Test selection (panel vs single gene)
- Laboratory quality (CLIA, CAP certification)
- Turnaround time
- Cost and insurance coverage

**Genetic Test Results:**

*Positive (Pathogenic):*
- Known disease-causing mutation found
- Confirms hereditary syndrome
- Triggers cascade testing of relatives
- Initiates enhanced surveillance
- May guide treatment decisions

*Negative:*
- No pathogenic variant found
- Does not eliminate hereditary risk
- May miss variants not tested
- Family history still relevant

*Variant of Uncertain Significance (VUS):*
- Change in gene with unknown effect
- Cannot be used for clinical decisions
- May be reclassified over time
- Family segregation studies helpful
- Higher rate with larger panels

*True Negative:*
- Known family mutation not present
- Risk same as general population
- Can follow average-risk guidelines

**Cascade Testing:**

*Process:*
- Test first-degree relatives of positive patient
- If positive, extend to their relatives
- Cost-effective prevention strategy
- Identifies at-risk before disease

*Benefits:*
- Target high-risk individuals
- Avoid unnecessary screening in true negatives
- Family planning information
- Prevents late diagnosis

**Condition-Specific Management:**

*BRCA1/2 Management:*
| Modality | Recommendation |
|----------|----------------|
| Breast screening | Annual MRI + mammogram starting 25-30 |
| Ovarian screening | Not effective; consider RRSO age 35-40 |
| Risk-reducing surgery | BSO, mastectomy options |
| Chemoprevention | Tamoxifen consideration |

*Lynch Syndrome Management:*
- Colonoscopy: Every 1-2 years from age 20-25
- Endometrial sampling: Annually from 30-35
- Consider risk-reducing surgery
- Aspirin chemoprevention

*Familial Hypercholesterolemia:*
- High-intensity statins early
- Add ezetimibe if needed
- PCSK9 inhibitors for very high risk
- LDL apheresis for homozygous
- Family cascade screening

**Polygenic Risk Scores:**

*Methodology:*
- Genome-wide association studies (GWAS)
- Thousands to millions of variants
- Weighted by effect size
- Population-specific calibration needed

*Current Applications:*
- Coronary artery disease
- Type 2 diabetes
- Breast cancer
- Limited clinical utility currently
- Research tool primarily

*Challenges:*
- Ancestry-specific performance
- Clinical actionability
- Integration with clinical risk factors
- Education needed

**Pharmacogenomics:**

*Drug-Gene Interactions:*
- CYP2C19 and clopidogrel
- CYP2D6 and tamoxifen, codeine
- TPMT and thiopurines
- DPYD and 5-FU/capecitabine
- SLCO1B1 and simvastatin

*Clinical Implementation:*
- Preemptive panel testing
- Point-of-care testing
- Clinical decision support
- Dosing adjustments
- Alternative drug selection

**Ethical, Legal, Social Issues:**

*Genetic Discrimination:*
- GINA (2008): Protects against health insurance and employment discrimination
- Does not cover life, disability, long-term care insurance
- Military exemptions
- State law variations

*Incidental Findings:*
- ACMG 59 gene list (now 73)
- Actionable secondary findings
- Opt-out options
- Duty to recontact

*Family Communication:*
- Duty to warn relatives
- Patient autonomy vs family benefit
- Confidentiality challenges
- Genetic counseling role

**Genetic Counseling Process:**

*Indications for Referral:*
- Personal history of cancer <50
- Multiple primary cancers
- Strong family history
- Positive genetic test
- Preconception counseling
- Consanguinity

*Counselor Role:*
- Risk assessment
- Informed consent
- Result disclosure
- Psychosocial support
- Resource provision`,
      keyTerms: [
        { term: 'cascade testing', definition: 'Systematic testing of relatives after identification of hereditary mutation in family' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act; US law protecting against genetic discrimination in health insurance and employment' },
        { term: 'ACMG', definition: 'American College of Medical Genetics and Genomics; provides guidelines for genetic testing including incidental findings' },
        { term: 'segregation analysis', definition: 'Tracking whether a genetic variant travels with disease in a family to assess pathogenicity' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response and metabolism' },
      ],
      clinicalNotes: 'Obtain detailed family history at initial visits. Refer to genetic counseling for concerning patterns. Understand test limitations including VUS. Cascade test at-risk relatives when pathogenic variant found. Implement risk-appropriate surveillance. Protect patient genetic information.',
    },
    4: {
      level: 4,
      summary: 'Advanced genetic risk assessment addresses complex cases including variants of uncertain significance interpretation, whole genome analysis, prenatal and preconception genetics, while integrating new sequencing technologies and managing incidental findings in clinical practice.',
      explanation: `**Variant Classification:**

*ACMG/AMP Guidelines:*
- Pathogenic
- Likely pathogenic
- Uncertain significance (VUS)
- Likely benign
- Benign

*Evidence Types:*
- Population frequency data
- Computational predictions
- Functional studies
- Segregation data
- Allelic data
- Database curation

*VUS Management:*
- Cannot use for clinical decisions
- Periodic re-evaluation
- RNA studies
- Functional assays
- Family segregation
- Laboratory sharing for reinterpretation

**Complex Genetic Testing Scenarios:**

*Negative Test with Strong Family History:*
- Gene not tested
- Variant not detected (technical limitations)
- Phenocopies
- Chance/sporadic clustering
- Consider exome/genome sequencing

*Unexpected Findings:*
- Misattributed parentage
- Consanguinity
- Non-paternity
- Undisclosed adoption
- Prepare patients pre-test

*Somatic vs Germline:*
- Tumor testing may suggest germline
- Tumor-normal sequencing
- Confirm with blood/saliva testing
- Different implications for family

**Whole Exome and Genome Sequencing:**

*Indications:*
- Multiple affected family members, no diagnosis
- Unusual presentation
- Exhausted targeted testing
- Research participation

*Analytical Pipeline:*
1. Variant calling
2. Annotation
3. Filtering
4. Prioritization
5. Validation
6. Interpretation

*Diagnostic Yield:*
- 25-40% for suspected genetic conditions
- Higher for certain phenotypes
- Trio analysis (proband + parents) most effective
- Variability by clinical indication

*Incidental/Secondary Findings:*
- ACMG 73 gene list
- Actionable conditions
- Opt-out in some settings
- Patient preference important

**Prenatal and Preconception Genetics:**

*Carrier Screening:*
- Expanded carrier screening (ECS)
- 200+ recessive conditions
- Pan-ethnic vs ethnicity-based
- Preconception optimal timing
- Partner screening if positive

*Prenatal Testing:*
- Cell-free DNA screening (cfDNA/NIPT)
- Common aneuploidies
- Microdeletions
- Maternal malignancy/placental mosaicism limitations
- Diagnostic testing (CVS, amniocentesis)

*Preimplantation Genetic Testing:*
- PGT-A: Aneuploidy screening
- PGT-M: Monogenic conditions
- PGT-SR: Structural rearrangements
- IVF required
- Ethical considerations

**Somatic Tumor Testing:**

*Therapeutic Targets:*
- Oncogene mutations
- Tumor suppressor loss
- Predictive biomarkers
- Clinical trials matching

*Hereditary Implications:*
- 5-15% of tumor-only testing reveals germline
- BRCA1/2, Lynch genes common
- Recommend confirmatory germline testing
- Pre-test counseling important

*Limitations:*
- Need quality tissue
- Tumor heterogeneity
- Clonal hematopoiesis
- Technical failures

**Direct-to-Consumer Testing:**

*Types:*
- Ancestry testing
- Health risk reporting
- Pharmacogenomics
- Carrier screening

*Limitations:*
- Limited medical validation
- False reassurance
- Incomplete analysis
- No genetic counseling
- Data privacy concerns

*Clinical Response:*
- Do not dismiss patient concerns
- Verify variants clinically if indicated
- Do not use for clinical decisions unverified
- Reassess risk appropriately

**Technology Advances:**

*Long-Read Sequencing:*
- Pacific Biosciences, Oxford Nanopore
- Resolves complex variants
- Detects structural variants
- Methylation detection
- Improving accuracy and cost

*RNA Sequencing:*
- Functional assessment
- Splice site variants
- Allelic expression
- Complement to DNA testing

*CRISPR-Based Diagnostics:*
- Rapid testing
- Point-of-care potential
- Infectious and genetic diseases
- Research stage

**Clinical Implementation Challenges:**

*Electronic Health Records:*
- Genetic data integration
- Decision support
- Family history tools
- Risk stratification
- Privacy considerations

*Workforce:*
- Genetic counselor shortage
- Physician genetics education
- Nursing genetics competency
- Pharmacist pharmacogenomics

*Reimbursement:*
- Test coverage variable
- Prior authorization challenges
- Cost-effectiveness evidence needed
- Value-based care considerations`,
      keyTerms: [
        { term: 'trio analysis', definition: 'Genetic testing of proband plus both parents to aid variant interpretation' },
        { term: 'cell-free DNA', definition: 'cfDNA; fetal DNA in maternal blood used for prenatal screening' },
        { term: 'clonal hematopoiesis', definition: 'Age-related mutations in blood cells that can be mistaken for tumor mutations' },
        { term: 'somatic mutation', definition: 'Genetic change acquired in non-germline cells, not inherited' },
        { term: 'mosaicism', definition: 'Presence of two or more cell populations with different genetic makeup in one individual' },
      ],
      clinicalNotes: 'Use ACMG/AMP criteria for variant interpretation. Understand limitations of negative testing. Consider exome/genome for undiagnosed cases. Be cautious with direct-to-consumer results. Integrate genetic data into EHR appropriately. Address workforce gaps. Understand pharmacogenomic applications.',
    },
    5: {
      level: 5,
      summary: 'Expert genetic risk assessment practice requires integrating emerging genomic technologies, polygenic and multi-omic risk prediction, population genetic screening programs, while addressing health equity, ethical complexities, and leading implementation of precision prevention at the individual and health system levels.',
      explanation: `**Precision Prevention Frontier:**

*Multi-Omic Risk Prediction:*
- Genomics: Common variants, rare variants, structural variants
- Transcriptomics: Gene expression signatures
- Epigenomics: Methylation patterns
- Proteomics: Protein markers
- Metabolomics: Metabolic profiles
- Integration for comprehensive risk

*Deep Phenotyping:*
- Detailed clinical characterization
- Digital biomarkers
- Wearable data
- Environmental exposures
- Lifestyle factors
- Complete risk picture

**Population Genomic Screening:**

*Current Initiatives:*
- Healthy Nevada Project
- UK Biobank
- Geisinger MyCode
- Ashkenazi Jewish screening programs
- Newborn screening expansion

*Approaches:*
- Opportunistic screening in healthcare
- Population-wide recruitment
- Targeted high-risk populations
- Cascade screening programs

*Yield and Impact:*
- 1-3% actionable findings in unselected populations
- Cascade testing multiplies benefit
- Cost-effectiveness favorable for some conditions
- Implementation science needed

*Challenges:*
- Scale and sustainability
- Variant interpretation at scale
- Health equity concerns
- Healthcare system capacity
- Return of results logistics

**Polygenic Risk Score Implementation:**

*Clinical Utility Development:*
- Ancestry-specific validation
- Integration with clinical risk factors
- Risk stratification performance
- Clinical trial outcomes
- Cost-effectiveness

*Applications Under Study:*
- Breast cancer screening intervals
- Statin therapy decisions
- Colorectal screening initiation
- Prostate biopsy decisions
- Type 2 diabetes prevention

*Equity Considerations:*
- European ancestry bias
- Performance disparities
- Diversifying reference databases
- Calibration across populations
- Health equity implications

**Hereditary Disease Elimination:**

*Theoretical Framework:*
- Population carrier screening
- Preimplantation genetic testing
- Prenatal diagnosis
- Family planning decisions
- Ethical considerations

*Tay-Sachs Model:*
- Carrier screening success
- Dramatic incidence reduction
- Community engagement key
- Extended to other conditions

*Future Possibilities:*
- Expanded preconception screening
- Universal carrier screening
- Technology enabling large-scale
- Social and ethical debates

**Artificial Intelligence in Genomics:**

*Variant Interpretation:*
- Machine learning classifiers
- Predicting variant effects
- Automating ACMG criteria
- Improving VUS resolution
- Literature mining

*Risk Prediction:*
- Deep learning from genomes
- Non-coding variant effects
- Regulatory region impacts
- Integration layers

*Clinical Decision Support:*
- EHR integration
- Automated risk assessment
- Testing recommendations
- Management guidelines
- Monitoring outcomes

**Global Health Genomics:**

*Resource-Limited Settings:*
- Portable sequencing
- Minimally invasive sampling
- Local capacity building
- Sustainable models
- Tropical disease genetics

*Diversity Imperative:*
- Non-European populations underrepresented
- Missing heritability partly due to diversity gaps
- Global genomics initiatives
- Equitable research participation
- Benefit sharing

*Point-of-Care Testing:*
- CRISPR diagnostics
- Isothermal amplification
- Smartphone-based readout
- Infectious disease
- Genetic testing in field

**Ethics and Policy:**

*Emerging Issues:*
- Gene editing (somatic vs germline)
- Enhancement vs therapy
- Genetic privacy in big data era
- Life insurance discrimination
- Forensic use of genetic databases

*Governance:*
- International consensus needed
- Regulatory frameworks
- Professional guidelines
- Public engagement
- Transparent oversight

*Equity Focus:*
- Access to testing
- Variant interpretation diversity
- Research inclusion
- Benefit distribution
- Addressing disparities

**Clinical Excellence Framework:**

*Individual Level:*
- Comprehensive risk assessment
- Appropriate test selection
- Expert variant interpretation
- Personalized prevention plans
- Long-term relationship

*Family Level:*
- Cascade testing coordination
- Family communication support
- At-risk relative identification
- Generational impact

*System Level:*
- Genetic service development
- EHR integration
- Quality improvement
- Workforce development
- Research participation

*Population Level:*
- Public health genomics
- Policy advocacy
- Community engagement
- Health equity focus
- Global health contribution

**Future of Genetic Risk Assessment:**

*Vision for 2030:*
- Routine genomic information in EHR
- AI-assisted interpretation
- PRS integrated in risk assessment
- Population screening programs
- Health disparities reduced

*Research Priorities:*
1. PRS clinical validation
2. Multi-omic integration
3. Health equity in genomics
4. Population screening models
5. Variant interpretation AI
6. Somatic-germline integration
7. Global genomics diversity

*Key Challenges:*
- Data interpretation at scale
- Healthcare system integration
- Workforce capacity
- Health equity
- Ethical frameworks
- Cost and access
- Public understanding`,
      keyTerms: [
        { term: 'deep phenotyping', definition: 'Comprehensive, detailed characterization of clinical and molecular features of a patient' },
        { term: 'opportunistic screening', definition: 'Offering genetic testing to patients during routine healthcare encounters' },
        { term: 'missing heritability', definition: 'Portion of genetic disease risk not explained by known genetic variants' },
        { term: 'gene editing', definition: 'Technology to precisely modify DNA sequences, including CRISPR-Cas9' },
        { term: 'somatic gene therapy', definition: 'Treatment modifying genes in non-reproductive cells, not passed to offspring' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Lead implementation of precision prevention programs
- Address health equity in genetic risk assessment access and interpretation
- Stay current on emerging technologies including AI and multi-omics
- Navigate complex ethical issues with patients and systems
- Advocate for appropriate genetic testing policies
- Champion diversity in genomic databases
- Develop genetic services and workforce
- Integrate pharmacogenomics into practice
- Engage in research to advance field
- Balance innovation with evidence-based practice`,
    },
  },

  media: [
    {
      id: 'pedigree-example',
      type: 'diagram',
      filename: 'family-pedigree-example.svg',
      title: 'Sample Family Pedigree',
      description: 'Example of a three-generation pedigree showing family history of hereditary cancer',
    },
  ],

  citations: [
    {
      id: 'acmg-variant-2015',
      type: 'article',
      title: 'Standards and Guidelines for the Interpretation of Sequence Variants',
      authors: ['Richards S', 'Aziz N', 'Bale S', 'et al.'],
      source: 'Genetics in Medicine',
      accessedDate: '2025-01-28',
    },
    {
      id: 'nccbrca-2024',
      type: 'article',
      title: 'Genetic/Familial High-Risk Assessment: Breast, Ovarian, and Pancreatic',
      authors: ['National Comprehensive Cancer Network'],
      source: 'NCCN Clinical Practice Guidelines in Oncology',
      accessedDate: '2025-01-28',
    },
    {
      id: 'robson-2017',
      type: 'article',
      title: 'OlympiAD: Phase III Trial of Olaparib Monotherapy for Metastatic Breast Cancer',
      authors: ['Robson M', 'Im SA', 'Senkus E', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'cancer-screening-guidelines', targetType: 'concept', relationship: 'related', label: 'Cancer Screening Guidelines' },
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
  ],

  tags: {
    systems: ['preventive-care', 'genetics'],
    topics: ['genetic counseling', 'precision medicine', 'disease prevention'],
    keywords: ['genetic testing', 'hereditary cancer', 'BRCA', 'Lynch syndrome', 'polygenic risk', 'pharmacogenomics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'obstetrics'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
