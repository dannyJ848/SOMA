/**
 * Dental Checkups - Comprehensive Educational Content
 *
 * Covers routine dental examinations, professional cleanings,
 * radiographic assessments, and preventive care during regular
 * dental visits.
 */

import { EducationalContent } from '../types';

export const dentalCheckups: EducationalContent = {
  id: 'topic-dental-checkups',
  type: 'topic',
  name: 'Dental Checkups',
  nameEs: 'Revisiones Dentales',
  alternateNames: [
    'Dental Examinations',
    'Routine Dental Visits',
    'Dental Recall',
    'Preventive Dental Care',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Dental checkups are regular visits to the dentist to check the health of your teeth and gums. Most people should visit every six months for an exam and cleaning. These visits help prevent problems and catch issues early.',
      explanation: `**What Happens at a Dental Checkup?**

A dental checkup usually includes several parts:

**1. The Examination**
- The dentist looks at your teeth
- Checks for cavities, cracks, or damage
- Looks at your gums for signs of disease
- Checks how your teeth fit together (your bite)
- May check your head, neck, and mouth

**2. The Cleaning**
- A dental hygienist cleans your teeth
- Removes plaque and tartar you can\'t remove at home
- Polishes your teeth to remove stains
- Flosses between your teeth
- May apply fluoride

**3. X-Rays**
- Pictures of your teeth and jawbone
- Help find problems you can\'t see
- Usually taken once a year
- Show cavities between teeth, bone loss, and other issues

**4. Education**
- The hygienist shows you how to brush and floss better
- Answers your questions about your mouth
- May recommend products to help

**How Often Should You Go?**

Most people should visit every 6 months, but:
- Some people need to go more often (every 3-4 months)
- People with gum disease
- People with lots of cavities
- People with diabetes or other health problems
- Pregnant women

**Why Are Checkups Important?**
- Find problems early (easier to fix)
- Prevent problems from starting
- Keep teeth and gums healthy
- Save money (treating small problems costs less)
- Check for oral cancer
- Clean what you can\'t reach at home

**Don't Wait Until It Hurts!**
Many dental problems don\'t hurt until they\'re serious. Regular checkups catch problems when they\'re small and easy to fix.`,
      keyTerms: [
        { term: 'dental checkup', definition: 'A visit to the dentist to check the health of your teeth and gums' },
        { term: 'cleaning', definition: 'Professional removal of plaque and tartar from teeth' },
        { term: 'x-rays', definition: 'Pictures of your teeth and jaw that show problems not visible to the eye' },
        { term: 'plaque', definition: 'A sticky film of bacteria that forms on teeth' },
        { term: 'tartar', definition: 'Hardened plaque that can only be removed by a dentist' },
      ],
      analogies: [
        'Dental checkups are like oil changes for your car - regular maintenance prevents big problems.',
        'Tartar is like cement on a sidewalk - once it hardens, only a professional can remove it.',
      ],
      examples: [
        'A small cavity found at a checkup can be filled quickly. If you wait until it hurts, you might need a root canal.',
        'Professional cleaning removes tartar below the gumline where you can\'t reach with brushing.',
      ],
      patientCounselingPoints: [
        'Most dental plans cover two checkups per year - use them!',
        'The dentist can spot signs of health problems in your mouth that you might not notice',
        'If you\'re anxious about dental visits, let the office know - they can help make you more comfortable',
      ],
    },
    2: {
      level: 2,
      summary: 'Routine dental visits include comprehensive examination, professional prophylaxis, radiographic assessment, and preventive care. Recall intervals are individualized based on caries risk, periodontal status, and medical history.',
      explanation: `## Components of a Dental Checkup

**Comprehensive Oral Examination:**

*Extraoral Examination:*
- Head and neck palpation
- Lymph node assessment
- TMJ evaluation (opening, clicking, pain)
- Temporalis and masseter muscles
- Lip and perioral tissues

*Intraoral Soft Tissue Examination:*
- Oral mucosa (buccal, labial, vestibule)
- Tongue (dorsal, ventral, lateral borders)
- Floor of mouth
- Hard and soft palate
- Oropharynx
- Tonsillar pillars

*Periodontal Examination:*
- Visual assessment of gingiva
- Bleeding on probing (BOP)
- Probing depths (PD)
- Clinical attachment levels (CAL)
- Mobility assessment
- Furcation involvement (if applicable)

*Hard Tissue Examination:*
- Visual inspection for caries
- Exploration of suspicious areas
- Assessment of existing restorations
- Evaluation of prosthetic appliances
- Occlusal analysis

**Professional Prophylaxis (Cleaning):**

*Procedure:*
1. Gross calculus removal with ultrasonic scaler
2. Hand scaling for remaining deposits
3. Rubber cup polishing with prophylaxis paste
4. Flossing
5. Fluoride application (optional, based on risk)
6. Oral hygiene instruction

*Contraindications:*
- Active periodontal disease (requires periodontal therapy)
- Uncontrolled medical conditions
- Certain cardiac conditions (premedication)

**Radiographic Examination:**

*Bitewing Radiographs:*
- Primary caries detection
- Interproximal caries
- Bone level assessment
- Frequency: Every 12-24 months based on risk

*Periapical Radiographs:*
- Full tooth visualization
- Periapical pathology
- Root canal assessment
- Indicated for symptomatic teeth

*Panoramic Radiograph:*
- Overview of entire dentition
- Impacted teeth
- Jaw pathology
- TMJ assessment
- Sinus evaluation
- Not for detailed caries detection

*Full Mouth Series:*
- Combination of periapicals and bitewings
- Comprehensive evaluation
- New patient baseline
- Every 3-5 years for most patients

*Digital vs. Film:*
- Digital: Lower radiation, instant images, enhancement
- Film: Traditional, higher radiation

**Oral Cancer Screening:**

*Visual and Palpation:*
- Lips and perioral skin
- Labial and buccal mucosa
- Tongue (all surfaces)
- Floor of mouth
- Hard palate
- Oropharynx and tonsils
- Neck lymph nodes

*Adjunctive Screening:*
- VELscope: Tissue fluorescence
- ViziLite: Chemiluminescent enhancement
- OralCDx: Brush biopsy

**Preventive Therapies:**

*Fluoride Varnish:*
- 5% NaF varnish (22,600 ppm)
- High-risk patients
- Every 3-6 months
- No eating/drinking for 30 minutes

*Prophy Paste:*
- Coarse, medium, fine grits
- Removes extrinsic stain
- Contains fluoride
- Avoid on exposed root surfaces

*Sealants:*
- Pit and fissure protection
- Indicated for high-risk caries patients
- First and second molars primarily
- Can be placed on adults at risk`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Professional cleaning procedure to remove plaque and calculus', pronunciation: 'pro-fi-LAK-sis' },
        { term: 'bitewing', definition: 'X-ray showing crowns of upper and lower teeth for caries detection' },
        { term: 'probing depth', definition: 'Measurement from gingival margin to base of sulcus/pocket' },
        { term: 'clinical attachment level', definition: 'Measurement from CEJ to base of pocket; irreversible measure of periodontitis' },
        { term: 'furcation', definition: 'Area where roots divide on multi-rooted teeth' },
      ],
      analogies: [
        'The radiographic interval is like security camera footage - higher risk areas need more frequent checking.',
      ],
      clinicalNotes: 'Bleeding on probing is the earliest sign of gingival inflammation. Periodontal probing is the primary diagnostic tool for periodontal disease. Bitewings detect ~60% of proximal caries. PA radiographs necessary for endodontic diagnosis.',
      patientCounselingPoints: [
        'Dental X-rays have very low radiation - less than a day of natural background radiation',
        'The dentist can find signs of diabetes, vitamin deficiencies, and even some cancers during an oral exam',
        'Sealants can reduce cavities on back teeth by up to 80%',
      ],
    },
    3: {
      level: 3,
      summary: 'Dental examinations integrate clinical, radiographic, and sometimes adjunctive diagnostic methods. Recall intervals are individualized based on risk assessment including caries activity, periodontal status, medical conditions, and patient-specific factors.',
      explanation: `## Examination Protocols

**Comprehensive vs. Periodic Examinations:**

*Comprehensive Examination (New Patient/Extended Interval):*
- Extraoral and intraoral soft tissue exam
- Hard tissue examination
- Periodontal charting (full mouth, 6 sites/tooth)
- Occlusal analysis
- Radiographic survey
- TMJ and masticatory muscles
- Oral cancer screening
- Risk assessment
- Treatment planning discussion

*Periodic Examination (Recall):*
- Update health history
- Soft tissue examination
- Periodontal assessment (screening or spot-check)
- Hard tissue examination
- Selected radiographs
- Review home care
- Reinforce prevention

**Diagnostic Aids and Technologies:**

*Digital Radiography:*
- Sensors: Faster, lower radiation than film
- Phosphor plates: Flexible, cordless
- Cone beam CT: 3D imaging
- Subtraction radiography: Lesion progression
- Caries detection software: Assistive

*Intraoral Cameras:*
- Patient education
- Documentation
- Lesion monitoring
- Insurance documentation
- Detection limits: Cannot substitute radiographs

*Digital Scanning:*
- Intraoral scanners for digital impressions
- CAD/CAM restorations
- Monitoring tooth wear
- Orthodontic tracking

*Caries Detection Devices:*
- DIAGNOdent: Laser fluorescence
- Cariview: Light-induced fluorescence
- Canary: Resonance frequency
- Adjuncts to visual/tactile examination
- Limited sensitivity and specificity

**Periodontal Assessment:**

*Probing:*
- Full mouth charting: 6 sites per tooth
- Probe type: Marquis (color-coded) or UNC
- Force: 0.25N (standardized)
- Reliability: ±1mm between examiners

*Measurements:*
- PD (Probing Depth): Gingival margin to base of pocket
- CAL (Clinical Attachment Level): CEJ to base of pocket
- Recession: CEJ to gingival margin
- BOP (Bleeding on Probing): Inflammation indicator
- Suppuration: Pus from pocket

*Mobility Grading:*
- Grade 0: No mobility
- Grade I: <1mm horizontal
- Grade II: 1-2mm horizontal
- Grade III: >2mm horizontal or vertical

*Furcation Involvement:*
- Class I: Horizontal penetration <1/3
- Class II: Horizontal penetration >1/3 but not through
- Class III: Through-and-through

**Risk Assessment Tools:**

*Caries Risk Assessment (CAMBRA):*
| Factor | High Risk | Low Risk |
|--------|-----------|----------|
| Disease | Active lesions | No lesions |
| Bacteria | High S. mutans | Low counts |
| Diet | Frequent sugar | Infrequent |
| Saliva | Low flow | Normal |
| Fluoride | Inadequate | Adequate |
| Age | <6, >65 | 6-65 |

*Periodontal Risk Assessment:*
- Previous periodontal disease
- Smoking status
- Diabetes control
- Stress
- Genetics
- Previous attachment loss

## Recall Intervals

**Evidence-Based Recall:**

*Low Risk:*
- Caries: 12-18 month recall
- Periodontal: 12 month recall
- Radiographs: 24-36 month interval

*Moderate Risk:*
- Caries: 6-12 month recall
- Periodontal: 6 month recall
- Radiographs: 12-18 month interval

*High Risk:*
- Caries: 3-6 month recall
- Periodontal: 3 month recall
- Radiographs: 6-12 month interval

**Special Populations:**

*Pregnancy:*
- More frequent cleanings (hormone-mediated gingivitis)
- Safe period for treatment: Second trimester
- Emergency care any time
- Avoid radiographs unless urgent (lead apron, thyroid collar)

*Head/Neck Radiation:*
- 3 month recall minimum
- Aggressive caries prevention
- Daily fluoride protocols
- Saliva substitutes

*Immunocompromised:*
- More frequent monitoring
- Antibiotic prophylaxis if indicated
- Treatment during neutrophil nadir avoided

*Elderly:*
- Root caries focus
- Dry mouth management
- Denture evaluation
- Cognitive status considerations

## Diagnostic Accuracy

**Sensitivity and Specificity:**

| Test | Sensitivity | Specificity | Notes |
|------|-------------|-------------|-------|
| Visual exam (caries) | 0.4-0.6 | 0.8-0.9 | Better for advanced lesions |
| Bitewing | 0.6-0.8 | 0.9+ | Limited for very early lesions |
| Fiberoptic transillumination | 0.7-0.9 | 0.7-0.8 | Adjunct, not replacement |
| DIAGNOdent | 0.8-0.9 | 0.6-0.8 | False positives common |

**Clinical Implications:**
- No perfect test
- Combine multiple modalities
- Visual + radiographic = best current approach
- When in doubt: Monitor vs. intervene based on risk`,
      keyTerms: [
        { term: 'CAMBRA', definition: 'Caries Management by Risk Assessment; systematic caries risk evaluation' },
        { term: 'sensitivity', definition: 'Ability of a test to correctly identify those with the disease (true positive rate)' },
        { term: 'specificity', definition: 'Ability of a test to correctly identify those without disease (true negative rate)' },
        { term: 'CBCT', definition: 'Cone beam computed tomography; 3D imaging for dentistry' },
        { term: 'CAL', definition: 'Clinical attachment level; distance from CEJ to base of pocket' },
      ],
      clinicalNotes: 'Periodontal charting is the gold standard for periodontal diagnosis. Caries risk assessment should be performed at each recall visit. Bitewings are the primary radiographs for caries detection. PAs are needed for endodontic and periapical pathology.',
      patientCounselingPoints: [
        'Your recall interval is based on your individual risk - low risk patients can go longer between visits',
        'Periodontal maintenance is essential after gum disease treatment to prevent recurrence',
        'Early detection saves money and preserves tooth structure',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern dental diagnostics incorporate digital imaging, AI-assisted analysis, molecular biomarkers, and teledentistry. Risk-based recall intervals optimize resource allocation while individualizing preventive care.',
      explanation: `## Advanced Diagnostic Technologies

**Digital Imaging Advances:**

*Cone Beam Computed Tomography (CBCT):*
- 3D volumetric imaging
- Indications: Implants, impacted teeth, pathology, orthodontics, endodontics
- Fields of view: Limited, medium, full
- Radiation dose: Higher than 2D but lower than medical CT
- Artifact considerations: Beam hardening, metal scatter

*Subtraction Radiography:*
- Digital subtraction of serial images
- Detects <5% mineral change
- Useful for monitoring lesion progression
- Precise alignment required

*Tuned Aperture Computed Tomography (TACT):*
- 3D reconstruction from 2D images
- Lower radiation than CBCT
- Limited clinical availability

**Carles Detection Technology:**

*Near-Infrared (NIR) Transillumination:*
- Detects proximal and occlusal lesions
- Light scatters differently in demineralized enamel
- No ionizing radiation
- Complementary to radiographs

*Quantitative Light-Induced Fluorescence (QLF):*
- Measures fluorescence loss
- Quantifies lesion volume
- Longitudinal monitoring
- Research to clinical pipeline

*Optical Coherence Tomography (OCT:*
- Cross-sectional imaging
- Detects lesion depth
- No radiation
- High cost limits adoption

*Digital Imaging Fiber-Optic Transillumination (DIFOTI):*
- Detects lesions in dentin
- May detect lesions before radiographic
- Limited specificity

**Biomarker-Based Diagnostics:**

*Salivary Diagnostics:*
- Pathogen testing (S. mutans, lactobacilli)
- Periodontal pathogens (P. gingivalis, T. forsythia, T. denticola)
- Genetic susceptibility (IL-1, DEFB1)
- Disease activity markers (MMP-8, IL-1β)

*Chairside Tests:*
- Rapid DNA probes (minutes)
- ELISA-based protein detection
- pH monitoring
- Buffer capacity testing

*Future Directions:*
- Proteomic profiles
- Metabolomic signatures
- Exosomal biomarkers
- Multi-analyte panels

## Teledentistry

**Models:**

*Synchronous (Real-time):*
- Video consultation
- Live assessment
- Emergency triage
- Specialist consultation

*Asynchronous (Store-and-Forward):*
- Patient submits photos/videos
- Clinician reviews later
- Screening and triage
- Follow-up monitoring

*Remote Monitoring:*
- Connected health devices
- Smartphone imaging
- Wearable sensors
- AI-powered symptom tracking

**Applications:**
- Rural/underserved populations
- Specialist consultation
- Pre-appointment screening
- Post-operative monitoring
- Public health screening
- Nursing home/assisted living

**Limitations:**
- Cannot fully replace in-person examination
- Imaging quality variable
- Regulatory and reimbursement challenges
- Technology access disparities
- Liability considerations

## AI in Dental Diagnostics

**Current Applications:**

*Caries Detection:*
- Deep learning analyzes radiographs
- Identifies lesions missed by humans
- Quantifies lesion progression
- Improves sensitivity

*Periodontal Assessment:*
- Automated bone level measurement
- Pocket depth estimation from images
- Inflammatory pattern recognition
- Disease progression prediction

*Oral Cancer Screening:*
- Lesion detection from images
- Malignancy risk assessment
- Dermoscopic analysis
- Patient image triage

*Orthodontic Analysis:*
- Automated landmark detection
- Treatment planning assistance
- Progress monitoring
- Outcome prediction

**Future Directions:**
- Integrated risk assessment
- Treatment outcome prediction
- Automated charting
- Billing assistance
- Patient communication

## Quality Assurance in Diagnostic Practice

**Radiographic Quality Control:**
- Equipment calibration
- Image evaluation standards
- Repeat/re-take criteria
- Radiation dose monitoring
- ALARA principle (As Low As Reasonably Achievable)

**Diagnostic Accuracy Monitoring:**
- Histologic confirmation
- Treatment outcome correlation
- Peer review processes
- Continuing education requirements

**Standardization:**
- Calibration exercises
- Inter-examiner reliability
- Intra-examiner reliability
- Diagnostic criteria consistency`,
      keyTerms: [
        { term: 'CBCT', definition: 'Cone beam computed tomography; 3D dental imaging' },
        { term: 'teledentistry', definition: 'Use of telecommunication technology for dental care delivery' },
        { term: 'ALARA', definition: 'As Low As Reasonably Achievable; radiation protection principle' },
        { term: 'deep learning', definition: 'AI approach using neural networks with multiple layers' },
      ],
      clinicalNotes: 'CBCT should be used only when 3D information changes treatment planning. AI tools are decision support, not replacement for clinical judgment. Teledentistry expands access but has limitations for complete care.',
    },
    5: {
      level: 5,
      summary: 'The future of dental diagnostics integrates precision medicine, multi-omics approaches, and artificial intelligence. Point-of-care molecular testing, smart imaging with automated analysis, and predictive analytics will transform preventive and interceptive care.',
      explanation: `## Precision Dentistry in Diagnostics

**Multi-Omics Risk Profiling:**

*Genomic:*
- Polygenic risk scores for caries
- Periodontal susceptibility genes
- Drug metabolism (pharmacogenomics)
- Genetic ancestry implications

*Microbiome Analysis:*
- 16S rRNA sequencing
- Metagenomic functional potential
- Metatranscriptomic activity
- Microbial community dynamics
- Precision antimicrobial selection

*Metabolomics:*
- Salivary metabolite fingerprints
- Bacterial metabolic output
- Host response markers
- Disease activity indicators

*Proteomics:*
- Protein biomarker panels
- Inflammatory signatures
- Tissue degradation markers
- Healing capacity assessment

## Point-of-Care Revolution

**Chairside Molecular Testing:**

*Real-Time Pathogen Detection:*
- DNA/RNA amplification
- Quantitative results
- Multiple pathogen panels
- Same-visit treatment decisions

*Biomarker Quantification:*
- Prognostic markers
- Treatment response prediction
- Disease activity monitoring
- Personalized recall intervals

*Genetic Screening:*
- Single nucleotide polymorphisms
- Pharmacogenomics
- Disease predisposition
- Family risk assessment

**Liquid Biopsy Applications:**
- Circulating tumor DNA
- Exosomal markers
- Oral cancer screening
- Treatment monitoring

## AI-Driven Diagnostics

**Machine Learning Applications:**

*Predictive Analytics:*
- Disease risk modeling
- Progression prediction
- Treatment outcome forecasting
- Resource allocation

*Automated Diagnosis:*
- Image recognition
- Pattern identification
- Quantitative measurements
- Decision support

*Natural Language Processing:*
- Automated charting
- Treatment planning notes
- Patient communication
- Insurance documentation

**Integration Challenges:**
- Data privacy and security
- Algorithm bias and fairness
- Clinical workflow integration
- Regulatory approval pathways
- Liability and accountability
- Cost-effectiveness

## Smart Imaging

**Next-Generation Imaging:**

*Functional Imaging:*
- Metabolic activity mapping
- Blood flow assessment
- Neural activity mapping
- Inflammatory visualization

*Molecular Imaging:*
- Targeted contrast agents
- Pathogen-specific probes
- Receptor mapping
- Theranostics (therapy + diagnosis)

*Portable Imaging:*
- Handheld devices
- Smartphone-based
- Point-of-care use
- Resource-limited settings

**Automated Analysis:**
- Instant lesion detection
- Automated measurements
- Comparison with prior images
- Progression quantification
- Normal vs. abnormal flagging

## Preventive and Interceptive Diagnostics

**Pre-Disease Detection:**
- Identify dysbiosis before disease
- Microbiome shift monitoring
- Environmental risk assessment
- Behavioral risk prediction

**Early Intervention Triggers:**
- Biomarker thresholds
- Microbial load indicators
- pH monitoring alerts
- Wearable sensor data

**Longitudinal Monitoring:**
- Home-based testing kits
- Smartphone imaging
- Saliva collection devices
- Connected health platforms

## Clinical Practice Transformation

**Integration of Diagnostics and Treatment:**
- Simultaneous assessment and treatment planning
- Just-in-time information delivery
- Adaptive treatment protocols
- Outcome-based modifications

**Data-Driven Decision Making:**
- Evidence-based protocols
- Personalized recommendations
- Cost-effectiveness analysis
- Patient-specific risk/benefit

**Collaborative Care:**
- Medical-dental data sharing
- Multi-specialty collaboration
- Referral optimization
- Continuity of care

**Ethical Considerations:**
- Genetic test disclosure
- Incidental findings
- Data ownership
- Access disparities
- Informed consent for emerging technologies

**Research Priorities:**
- Validation of novel biomarkers
- AI algorithm training datasets
- Clinical utility demonstration
- Cost-effectiveness research
- Implementation science`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Calculation of genetic risk based on multiple genetic variants' },
        { term: 'theranostics', definition: 'Combined therapeutic and diagnostic approach' },
        { term: 'incidental findings', definition: 'Unintended discovery of abnormalities during testing' },
      ],
      clinicalNotes: `Future clinical practice:
1. Salivary diagnostics will provide point-of-care risk assessment
2. AI will assist with radiographic interpretation and lesion detection
3. Teledentistry will expand access to preventive care
4. Genomic testing will guide personalized prevention
5. Smart imaging will provide instant quantitative analysis
6. Wearable sensors will enable continuous health monitoring`,
    },
  },

  media: [
    {
      id: 'dental-examination',
      type: 'diagram',
      filename: 'comprehensive-dental-examination.svg',
      title: 'Components of Dental Examination',
      description: 'All components of a comprehensive dental checkup',
    },
    {
      id: 'bitewing-radiograph',
      type: 'image',
      filename: 'bitewing-radiograph-example.jpg',
      title: 'Bitewing Radiograph',
      description: 'Example of bitewing radiograph showing interproximal areas',
    },
  ],

  citations: [
    {
      id: 'ada-dental-exam',
      type: 'website',
      title: 'American Dental Association - Dental Examination',
      source: 'American Dental Association',
      url: 'https://www.ada.org/en/member-center/oral-health-topics/dental-examinations',
    },
    {
      id: 'caries-guidelines',
      type: 'article',
      title: 'Caries Diagnosis and Risk Assessment',
      authors: ['Fontana, M.', 'Zero, D.T.'],
      source: 'Journal of Dental Research',
      chapter: '2022',
    },
  ],

  crossReferences: [
    { targetId: 'topic-oral-hygiene', targetType: 'topic', relationship: 'related', label: 'Oral Hygiene' },
    { targetId: 'procedure-professional-cleanings', targetType: 'topic', relationship: 'related', label: 'Professional Cleanings' },
    { targetId: 'condition-oral-cancer-screening', targetType: 'condition', relationship: 'related', label: 'Oral Cancer Screening' },
  ],

  tags: {
    systems: ['dental'],
    structures: [],
    topics: ['prevention', 'diagnostics', 'patient-education'],
    keywords: ['dental checkup', 'examination', 'recall', 'prophylaxis', 'radiographs', 'prevention'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dentalCheckups;
