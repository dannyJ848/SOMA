import type { EducationalContent } from '../../../types';

export const lymphomaStaging: EducationalContent = {
  id: 'lymphoma-staging',
  type: 'concept',
  name: 'Lymphoma Staging',
  alternateNames: ['Lymphoma Staging Systems', 'Ann Arbor Staging', 'Lugano Classification'],
  levels: {
    1: {
      level: 1,
        summary: 'Lymphoma staging is a way doctors describe how much cancer is in the body and where it is located, helping them plan the best treatment.',
      explanation: `When someone is diagnosed with lymphoma, doctors need to know how far the cancer has spread in the body. This is called staging. Staging helps doctors choose the right treatment and predict how well treatment will work.

The most common staging system for lymphoma uses numbers I through IV. Stage I means the lymphoma is in only one area, like one lymph node group. Stage II means it is in two areas on the same side of the body. Stage III means it is on both sides of the body. Stage IV means it has spread to organs outside the lymph system, like the liver or bones.

Doctors also note if the patient has certain symptoms called B symptoms. These include fevers, drenching night sweats, and losing weight without trying. Having B symptoms usually means the lymphoma is more active.

To determine the stage, doctors use physical exams, imaging tests like CT or PET scans, and sometimes bone marrow tests. Knowing the exact stage helps the medical team create a personalized treatment plan for each patient.`,
      keyTerms: [
        { term: 'staging', definition: 'The process of finding out how much cancer is in the body and where it is located' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that are part of the immune system and filter lymph fluid' },
        { term: 'B symptoms', definition: 'Specific symptoms including fever, night sweats, and weight loss that affect lymphoma staging' }
      ],
      analogies: [
        'Staging is like mapping out how far a fire has spread through a building before planning how to put it out',
        'It is similar to finding out how many rooms in a house have water damage before starting repairs'
      ],
      examples: [
        'A patient with lymphoma only in their neck lymph nodes would be Stage I',
        'A patient with lymphoma in the neck, armpits, and groin would be Stage III'
      ]
    },
    2: {
      level: 2,
      summary: 'Lymphoma staging uses the Ann Arbor system with Cotswolds modifications and the Lugano classification, incorporating imaging and clinical factors to guide treatment and prognosis.',
      explanation: `Accurate staging is essential for treatment planning and prognosis in lymphoma. The staging system has evolved from clinical assessment alone to incorporate modern imaging and response criteria.

Ann Arbor Staging System (1971):

Stage I: Involvement of a single lymph node region (I) or a single extralymphatic organ or site (IE)

Stage II: Involvement of two or more lymph node regions on the same side of the diaphragm (II) or localized involvement of an extralymphatic site and one or more lymph node regions on the same side of the diaphragm (IIE)

Stage III: Involvement of lymph node regions on both sides of the diaphragm (III), which may be accompanied by localized involvement of extralymphatic site (IIIE) or spleen (IIIS) or both (IIISE)

Stage IV: Diffuse or disseminated involvement of one or more extralymphatic organs with or without associated lymph node involvement

Cotswolds Modifications (1989):
- Added X for bulky disease: Greater than 10 cm nodal mass or greater than 1/3 mediastinal widening
- Clarified that liver or bone marrow involvement is always Stage IV
- Allowed for unconfirmed/uncertain complete response (CRu)
- Subclassification of Stage II into II1 (<5 cm between nodal masses) and II2 (>5 cm)

A vs B Symptoms:
A: Asymptomatic
B: Presence of at least one of:
- Unexplained weight loss >10% in 6 months
- Drenching night sweats
- Fevers >38C without other cause

Additional symptoms (not affecting A/B designation):
- Generalized pruritus
- Alcohol-induced pain at nodal site (rare but specific for HL)
- Fatigue

Lugano Classification (2014):
- Updated for modern imaging and response assessment
- Maintains Ann Arbor stages I-IV
- Incorporates FDG-PET for response
- Bulky disease defined differently for HL vs NHL
- Eliminates A/B for most NHL staging

Determining Stage:

Clinical staging (CS):
Based on physical examination, imaging, laboratory tests, and limited biopsies (lymph node, bone marrow)

Pathologic staging (PS):
Based on additional surgical procedures like staging laparotomy (rarely performed now due to PET/CT accuracy)

Staging procedures:
- Complete physical examination with documentation of all nodal sites
- Laboratory: CBC, ESR, LDH, liver/renal function
- Imaging: CT chest/abdomen/pelvis with contrast, FDG-PET/CT
- Bone marrow biopsy (selected cases)
- Cardiac and pulmonary function if therapy planned

Bulky Disease:
- HL: Mediastinal mass ratio >0.33 or nodal mass >10 cm
- NHL: Nodal mass >10 cm (mediastinal bulk less standardized)
- Associated with poorer prognosis and may require different treatment approaches`,
      keyTerms: [
        { term: 'Ann Arbor staging', definition: 'The standard staging system for lymphomas based on anatomic distribution of disease' },
        { term: 'Lugano classification', definition: 'Updated staging and response criteria incorporating PET imaging' },
        { term: 'FDG-PET', definition: 'Fluorodeoxyglucose positron emission tomography; imaging that shows metabolically active areas' },
        { term: 'bulky disease', definition: 'Large tumor mass generally greater than 10 cm or occupying significant chest space' },
        { term: 'extranodal', definition: 'Involvement of sites outside the lymph nodes (liver, bone marrow, lung, etc.)' }
      ],
      analogies: [
        'The diaphragm acts like the equator on a map - disease on one side vs both sides changes the stage',
        'Staging is like a GPS system for cancer - it tells you exactly where the disease is located in the body'
      ],
      examples: [
        'Stage IIE Hodgkin lymphoma: Disease in cervical nodes and adjacent tonsil (same side of diaphragm)',
        'Stage IIIS: Disease in cervical and mediastinal nodes with spleen involvement'
      ]
    },
    3: {
      level: 3,
      summary: 'Modern lymphoma staging integrates FDG-PET/CT imaging, bone marrow evaluation, and risk stratification systems to guide treatment intensity and predict outcomes.',
      explanation: `Contemporary lymphoma staging has been transformed by functional imaging with FDG-PET/CT, enabling more accurate assessment of disease extent and metabolic activity. The integration of imaging with clinical and molecular factors provides comprehensive risk assessment.

PET/CT in Lymphoma Staging:

Principles:
- FDG is a glucose analog taken up by metabolically active cells
- Most lymphomas are FDG-avid (exceptions: CLL/SLL, marginal zone, some T-cell)
- Combines metabolic (PET) and anatomic (CT) information
- SUV (standardized uptake value) quantifies metabolic activity

Advantages over CT alone:
- Detects disease in normal-sized nodes (30% of involved nodes <1 cm)
- Identifies extranodal sites not appreciated on CT
- More accurate bone marrow assessment (focal vs diffuse)
- Baseline PET enables response assessment by comparison

Limitations:
- False positives: Infection, inflammation, thymic rebound, brown fat
- False negatives: Indolent lymphomas, necrotic tumors, hyperglycemia
- Physiologic uptake: Brain, heart, kidneys, urinary tract
- Cost and radiation exposure

Bone Marrow Assessment:

Traditional bone marrow biopsy:
- Unilateral or bilateral posterior iliac crest aspiration and biopsy
- Morphology, flow cytometry, immunohistochemistry
- Staging: Any marrow involvement is Stage IV in HL; for NHL, depends on histology

PET/CT vs bone marrow biopsy:
- PET can detect focal marrow involvement missed by blind biopsy
- Discordance in 10-20% of cases
- Current guidelines: PET can replace routine BMB if positive for marrow
- BMB still needed if PET-negative and cytopenias present, or for specific histologies

Risk Stratification:

International Prognostic Index (IPI) for aggressive NHL:
- Age >60 years
- LDH >upper limit of normal
- ECOG performance status >=2
- Stage III-IV
- Extranodal involvement >1 site
- Score 0-5 predicts 5-year survival (73% for 0-1 vs 26% for 4-5)

Follicular Lymphoma International Prognostic Index (FLIPI):
- Age >60
- Ann Arbor Stage III-IV
- Hemoglobin <12 g/dL
- LDH elevated
- Nodal sites >4
- Score 0-1 low risk, 2 intermediate, 3-5 high risk

Mantle Cell Lymphoma IPI (MIPI):
- Age, ECOG, LDH, WBC
- Calculates risk score and separates into low, intermediate, high risk

International Prognostic Score (IPS) for Advanced HL:
- Serum albumin <4 g/dL
- Hemoglobin <10.5 g/dL
- Male sex
- Age >=45 years
- Stage IV disease
- Leukocytosis >=15,000
- Lymphocytopenia <600 or <8% of WBC
- 7 factors predict freedom from progression

Prognostic Significance of Stage:

Early-stage (I-II) favorable features:
- No B symptoms
- No bulky disease
- Limited nodal sites
- Normal LDH
- Good performance status

Advanced-stage (III-IV) considerations:
- Not automatically poor prognosis in indolent lymphomas
- More important for aggressive lymphomas
- Bulky disease may indicate need for combined modality therapy
- Extranodal sites have varying significance by histology

Special Staging Considerations:

Primary CNS lymphoma:
- Separate staging system (involvement of eye, CSF, brain parenchyma)
- Slit-lamp exam for ocular involvement
- CSF cytology

Primary effusion lymphoma:
- Serous cavity involvement without mass lesion
- Unique staging considerations

Testicular lymphoma:
- Contralateral testis involvement considered stage II, not IV
- CNS prophylaxis often indicated regardless of stage

Pediatric lymphoma:
- St. Jude (Murphy) staging for NHL
- Simplifies Ann Arbor for pediatric presentation patterns`,
      keyTerms: [
        { term: 'SUV', definition: 'Standardized uptake value; quantitative measure of FDG uptake on PET scan' },
        { term: 'IPI', definition: 'International Prognostic Index; clinical tool for predicting outcome in aggressive NHL' },
        { term: 'performance status', definition: 'Measure of patient functional capacity; ECOG or Karnofsky scales' },
        { term: 'focal bone marrow involvement', definition: 'Discrete areas of lymphoma in marrow vs diffuse infiltration' },
        { term: 'combined modality therapy', definition: 'Use of chemotherapy plus radiation therapy together' }
      ]
    },
    4: {
      level: 4,
      summary: 'Response assessment in lymphoma uses the Lugano criteria with Deauville scoring for PET interpretation, distinguishing complete metabolic response, partial response, stable disease, and progressive disease.',
      explanation: `Standardized response criteria are essential for clinical trials and patient management. The Lugano 2014 classification provides uniform definitions for response assessment incorporating PET/CT and CT imaging.

Deauville Criteria for PET Interpretation:

5-point scale comparing lesion uptake to reference organs:
1: No uptake
2: Uptake less than or equal to mediastinum
3: Uptake greater than mediastinum but less than or equal to liver
4: Moderately increased uptake compared to liver
5: Markedly increased uptake compared to liver and/or new lesions
X: New areas of uptake unlikely related to lymphoma

Interpretation:
- Score 1-3: Considered negative (complete metabolic response)
- Score 4-5: Considered positive (residual disease)
- Score X: Requires clinical correlation (may be infection, inflammation, second malignancy)

Note: Minimal residual uptake (previously used) is no longer recommended; use Deauville 1-5 scale

Response Definitions:

Complete Response (CR):
- CT: All nodes and masses regressed to normal size (less than 1.5 cm long axis, less than 1.0 cm short axis)
- PET: Deauville 1-3 (with no residual mass)
- Bone marrow: Clear on repeat biopsy (if previously involved and PET negative)

Partial Response (PR):
- CT: Greater than or equal to 50% decrease in SPD (sum of product of diameters) of up to 6 target nodes/masses
- PET: Deauville 4-5 with reduced uptake compared to baseline, no new lesions

Stable Disease (SD):
- Failure to achieve CR or PR
- No progression

Progressive Disease (PD):
- CT: Greater than or equal to 50% increase from nadir in SPD, or new/recurrent nodes >1.5 cm, or any new extranodal site
- PET: Deauville 4-5 with increased uptake, or new FDG-avid foci consistent with lymphoma

Complete Metabolic Response (CMR):
- Used when residual mass present but PET negative (Deauville 1-3)
- Common in HL and aggressive NHL
- Represents fibrous residual tissue, not active tumor
- Does not require additional therapy

No Metabolic Response (NMR):
- PET remains positive (Deauville 4-5) without significant change
- May indicate resistant disease

Interim PET (iPET):
- PET performed during treatment, typically after 2 cycles
- Strong prognostic indicator in HL and DLBCL
- Negative iPET associated with excellent outcomes
- Positive iPET may indicate need for treatment intensification

End-of-Treatment Assessment:
- PET/CT 6-12 weeks after completing therapy
- Timing important: Too early may show inflammatory response; too late delays detection of relapse
- Deauville score guides post-treatment surveillance intensity

Surveillance After CR:
- No routine surveillance PET recommended (high false positive rate)
- CT or clinical follow-up preferred
- PET only for suspected relapse based on symptoms or CT findings

Special Response Considerations:

Indolent lymphomas:
- Response criteria similar but less standardized
- PR acceptable endpoint for incurable disease
- Clinical benefit may occur without radiographic response

Immunotherapy responses:
- Pseudoprogression: Initial increase in size/activity due to immune cell infiltration
- Delayed response: May take months to manifest
- Modified criteria (iRECIST, Lugano immunotherapy modifications)

CAR-T cell therapy:
- CRS and neurotoxicity may confound early assessment
- Response typically assessed 1 month post-infusion
- Some patients show delayed responses at 3-6 months

Pitfalls in Response Assessment:

False positives:
- Thymic rebound (especially in young patients after chemotherapy)
- Brown fat activation (cold exposure, shivering)
- Sarcoid-like reactions (mediastinal/hilar uptake)
- Infection (opportunistic during immunosuppression)
- Radiation pneumonitis/esophagitis

False negatives:
- Necrotic tumors (no viable cells to take up FDG)
- Hyperglycemia competing with FDG uptake
- Indolent lymphoma subtypes
- Small lesions below PET resolution

Clinical Correlation:
- Discordance between imaging and clinical status requires biopsy
- Rising LDH or new symptoms with negative imaging warrants repeat evaluation
- Progressive disease requires biopsy to rule out transformation (indolent lymphomas)`,
      keyTerms: [
        { term: 'Deauville score', definition: '5-point scale for standardized interpretation of PET scans in lymphoma' },
        { term: 'SPD', definition: 'Sum of the product of diameters; measurement of tumor burden' },
        { term: 'interim PET', definition: 'PET scan performed during treatment to assess early response' },
        { term: 'pseudoprogression', definition: 'Apparent tumor growth on imaging due to immune cell infiltration rather than true progression' },
        { term: 'complete metabolic response', definition: 'Disappearance of FDG uptake in all lesions despite possible residual mass' }
      ],
      clinicalNotes: `Clinical pearls for lymphoma staging and response:

Staging priorities:
1. Complete physical exam with all nodal sites documented
2. FDG-PET/CT for all FDG-avid lymphomas
3. Bone marrow biopsy if cytopenias or specific histologies
4. CNS evaluation for high-risk presentations

Timing of assessments:
- Baseline PET before any treatment
- Interim PET after 2 cycles for HL and DLBCL
- End-of-treatment PET 6-12 weeks post-therapy
- Surveillance: Clinical assessment > routine imaging

Deauville scoring tips:
- Always compare to mediastinal blood pool and liver
- Be aware of physiologic uptake patterns
- Score 3 at interim in HL is good prognosis; at end of treatment may warrant observation
- Score 4-5 at interim warrants consideration of intensification

Response pitfalls:
- Do not chase PET findings alone - clinical context essential
- Biopsy suspicious new lesions before declaring progression
- Recognize thymic rebound in young patients
- Consider steroid effect on PET interpretation

Special situations:
- Primary mediastinal LBCL: Residual masses common; PET more reliable than CT
- CNS lymphoma: Response assessed by MRI, not PET (brain has high background uptake)
- Testicular lymphoma: Contralateral testis relapse not uncommon; surveillance exams important

Clinical trials:
- MRD negativity becoming endpoint in some trials
- ctDNA monitoring may replace imaging for response assessment
- Standardized criteria essential for comparison across studies`
    },
    5: {
      level: 5,
      summary: 'Advanced staging concepts include quantitative PET parameters (D max, MTV, TLG), radiomics, liquid biopsy for MRD detection, artificial intelligence applications, and adaptive therapy based on functional imaging.',
      explanation: `Contemporary lymphoma staging and response assessment incorporates quantitative imaging biomarkers, artificial intelligence, and molecular techniques to enhance precision beyond qualitative interpretation.

Quantitative PET Parameters:

Deauville 5-point scale limitations:
- Qualitative assessment with inter-observer variability
- Does not capture metabolic tumor burden
- Binary (positive/negative) may miss clinically relevant information

Quantitative measures:

SUV metrics:
- SUVmax: Maximum uptake in hottest lesion
- SUVpeak: Average uptake in 1 cm3 spherical ROI
- SUVmean: Mean uptake in defined region
- Limitations: Affected by glucose levels, uptake time, body composition

Metabolic Tumor Volume (MTV):
- Volume of tumor with SUV above threshold (typically 41% of SUVmax or fixed threshold)
- Represents total metabolically active tumor burden
- Prognostic in DLBCL, HL, aggressive NHL
- Baseline MTV predicts outcome independent of IPI
- Reduction in MTV during treatment may be predictive

Total Lesion Glycolysis (TLG):
- MTV x SUVmean
- Combines metabolic activity and volume
- May better represent total tumor burden than SUVmax alone

Delta-SUV:
- Percentage reduction in SUVmax from baseline to interim
- Greater than or equal to 66% reduction in DLBCL associated with good prognosis
- Greater than or equal to 70% reduction threshold in some studies

Dmax (Deauville maximum):
- Quantitative version of Deauville score
- SUVmax lesion/SUVmax liver
- Dmax <1.5 considered negative
- Reduces inter-observer variability

Radiomics:
- High-throughput extraction of imaging features
- Shape, texture, intensity features from PET and CT
- Machine learning classification of radiomic signatures
- Potential to predict molecular subtype, treatment response, prognosis
- Challenges: Standardization, validation, clinical implementation

Liquid Biopsy and ctDNA:

Circulating tumor DNA:
- Cell-free DNA from tumor detected in plasma
- Lymphoma-specific: Ig gene rearrangements, somatic mutations
- Can detect disease before radiographic progression
- Potential for MRD monitoring

Applications:
- Baseline ctDNA level correlates with tumor burden
- Early ctDNA clearance predicts response
- Rising ctDNA may predict relapse before imaging
- Molecular profiling from plasma when tissue unavailable

Clonotype tracking:
- Patient-specific Ig rearrangements tracked by NGS
- Highly sensitive MRD detection
- Clinical utility being evaluated in trials

Artificial Intelligence:

Machine learning applications:
- Automated lesion detection and segmentation
- Prediction of molecular subtypes from imaging
- Response prediction models
- Risk stratification integrating multiple data sources
- Quality control and standardization

Deep learning:
- Convolutional neural networks for image analysis
- End-to-end prediction without feature engineering
- Challenges: Interpretability, generalizability, regulatory approval

Adaptive Therapy Based on Imaging:

PET-guided treatment:
- RATHL trial: Omitted bleomycin in PET-negative HL patients
- ESCALON trial: Omitted radiation in PET-negative early HL
- PET-adapted BEACOPP in advanced HL

Risk-adapted approaches:
- Intensification for PET-positive interim assessment
- De-escalation for PET-negative to reduce toxicity
- Maintenance therapy based on residual metabolic activity

Limitations and challenges:
- False positives requiring biopsy confirmation
- Access to timely PET imaging
- Cost considerations
- Inter-observer agreement on borderline cases (Deauville 3-4)

Future Directions:

Total metabolic response:
- Complete disappearance of MTV and TLG
- May be stricter endpoint than Deauville 1-3

Immuno-PET:
- Radiolabeled antibodies or fragments
- More specific than FDG
- CD20, CD30 targeted agents in development

Novel tracers:
- FLT (proliferation marker)
- FMISO (hypoxia)
- FET (amino acid metabolism)
- May provide complementary information to FDG

Integration with genomics:
- Radiogenomic correlation
- Imaging surrogates for molecular subtypes
- Non-invasive molecular profiling

Standardization efforts:
- Harmonization of SUV across PET scanners
- Quantitative imaging biomarkers alliance (QIBA)
- EARL accreditation for PET/CT standardization`,
      keyTerms: [
        { term: 'MTV', definition: 'Metabolic tumor volume; volume of metabolically active tumor on PET' },
        { term: 'TLG', definition: 'Total lesion glycolysis; MTV x SUVmean; measure of total tumor metabolic burden' },
        { term: 'radiomics', definition: 'High-throughput extraction of quantitative features from medical images' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; cell-free DNA in blood derived from tumor' },
        { term: 'clonotype', definition: 'Patient-specific immunoglobulin or TCR rearrangement unique to lymphoma clone' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Quantitative PET interpretation:
- MTV and TLG require specialized software and standardization
- Threshold methods vary between institutions
- Baseline MTV prognostic independent of IPI in multiple studies
- Early MTV reduction may guide therapy changes

ctDNA clinical utility:
- Emerging role in DLBCL MRD monitoring
- May identify patients who need additional therapy
- Interventional trials testing ctDNA-guided therapy
- Commercial assays available but not yet standard of care

AI implementation:
- Automated contouring may reduce inter-observer variability
- AI-assisted detection of subtle lesions
- Workflow integration challenges
- Regulatory pathways for AI diagnostic tools

Research applications:
- Quantitative PET as surrogate endpoint in clinical trials
- Imaging biomarkers for novel agent development
- Basket trials based on imaging phenotype
- Adaptive trial designs using interim imaging

Clinical trial design:
- MRD endpoints (imaging and molecular) increasingly used
- Time to next treatment (TTNT) as endpoint for indolent lymphomas
- Patient-reported outcomes alongside objective response
- Cost-effectiveness of advanced imaging techniques`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapter 97: Lymphoma Staging and Response Assessment' },
    { id: '2', type: 'article', title: 'Recommendations for initial evaluation, staging, and response assessment of Hodgkin and non-Hodgkin lymphoma', authors: ['Cheson BD', 'Fisher RI', 'Barrington SF'], source: 'Journal of Clinical Oncology', chapter: '2014' }
  ],
  crossReferences: [
    { targetId: 'hodgkin-lymphoma', targetType: 'condition', relationship: 'related' },
    { targetId: 'nhl-types', targetType: 'concept', relationship: 'related' },
    { targetId: 'pet-ct-imaging', targetType: 'concept', relationship: 'see-also' }
  ],
  tags: {
    systems: ['hematology', 'oncology', 'radiology'],
    topics: ['lymphoma', 'cancer staging', 'imaging', 'response assessment'],
    keywords: ['lymphoma staging', 'Ann Arbor', 'Lugano', 'PET scan', 'Deauville score', 'response criteria'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
