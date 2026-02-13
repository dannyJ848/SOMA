/**
 * Oral Cancer Screening - Comprehensive Educational Content
 *
 * Covers oral cancer risk factors, screening methods, early detection,
 * and clinical significance of oral mucosal lesions.
 */

import { EducationalContent } from '../../types';

export const oralCancerScreening: EducationalContent = {
  id: 'condition-oral-cancer-screening',
  type: 'condition',
  name: 'Oral Cancer Screening',
  nameEs: 'Deteccion de Cancer Oral',
  alternateNames: [
    'Oral Cancer Detection',
    'Mouth Cancer Screening',
    'Head and Neck Cancer Screening',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Oral cancer affects the mouth and throat, but it can often be found early through regular dental checkups. Knowing the warning signs and avoiding tobacco and heavy drinking are the best ways to protect yourself.',
      explanation: `**What Is Oral Cancer?**

Oral cancer is cancer that grows in the mouth, tongue, lips, or throat. Like other cancers, it starts when cells grow out of control.

**Why Early Detection Matters:**
- Found early: 80-90% survival rate
- Found late: Less than 50% survival rate
- Regular dental visits help catch it early!

**Risk Factors (Things That Increase Your Chance):**

**Tobacco** - Biggest risk factor!
- Cigarettes, cigars, pipes
- Chewing tobacco, snuff
- Risk is 6x higher for smokers

**Alcohol**
- Heavy drinking increases risk
- Combined with tobacco: Risk is 15x higher!

**HPV Virus**
- Human papillomavirus
- Can cause throat and tongue cancers
- Increasing cause in younger adults

**Other Factors:**
- Sun exposure (lip cancer)
- Poor diet (low fruits and vegetables)
- Weakened immune system
- Age (most cases over 55)

**Warning Signs - See a Dentist If You Notice:**

- A sore in your mouth that does not heal in 2 weeks
- White or red patches on gums, tongue, or mouth lining
- A lump or thickening in your cheek
- Numbness in your mouth or lips
- Difficulty chewing, swallowing, or moving your jaw
- Feeling like something is stuck in your throat
- Ear pain (with no ear infection)
- Unexplained weight loss

**What Happens During a Screening:**

1. Your dentist looks at your whole mouth
2. They feel your neck and under your jaw for lumps
3. They check your tongue, cheeks, roof of mouth, and throat
4. Any suspicious areas may be tested further

**Prevention:**
- Do not use tobacco products
- Limit alcohol
- Eat fruits and vegetables
- Use lip balm with SPF
- Get regular dental checkups`,
      keyTerms: [
        { term: 'oral cancer', definition: 'Cancer that grows in the mouth, tongue, lips, or throat' },
        { term: 'screening', definition: 'Checking for disease before you have symptoms' },
        { term: 'HPV', definition: 'Human papillomavirus, a virus that can cause some types of oral cancer' },
        { term: 'lesion', definition: 'An abnormal area of tissue, like a sore or patch' },
        { term: 'biopsy', definition: 'Removing a small piece of tissue to test for cancer' },
      ],
      analogies: [
        'Oral cancer screening is like a smoke detector - it helps catch problems early before they become emergencies.',
        'A suspicious mouth lesion is like a warning light - it does not always mean something is wrong, but it needs to be checked.',
      ],
      examples: [
        'A 50-year-old smoker notices a white patch on his tongue that has been there for a month. His dentist does a biopsy and catches cancer early.',
        'A young woman with no risk factors gets oral cancer from HPV - screening is important for everyone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Oral cancer screening involves systematic examination of oral and oropharyngeal tissues to detect potentially malignant disorders early. Risk assessment, visual and tactile examination, and adjunctive technologies guide clinical decision-making.',
      explanation: `## Epidemiology

**Incidence:**
- ~54,000 new cases annually in US
- 11,000+ deaths per year
- 5-year survival: 68% overall (higher if caught early)
- Incidence increasing due to HPV-related oropharyngeal cancers

**Demographics:**
- Historically: Males >50, tobacco/alcohol users
- Changing: Younger patients with HPV-related cancers
- Male:Female ratio: 2:1

## Risk Factors

| Factor | Relative Risk | Notes |
|--------|---------------|-------|
| Tobacco smoking | 6x | Dose-dependent |
| Smokeless tobacco | 4-6x | Location-specific |
| Heavy alcohol | 6x | >3 drinks/day |
| Tobacco + alcohol | 15-30x | Synergistic effect |
| HPV-16 | 14-50x | Oropharyngeal predominant |
| Betel quid | 7-15x | Common in Asia |
| Sun exposure | Increased | Lip cancer |

## Potentially Malignant Disorders

**Leukoplakia:**
- White patch that cannot be wiped off
- Cannot be characterized as any other condition
- 1-9% malignant transformation rate
- Non-homogeneous types higher risk

**Erythroplakia:**
- Red patch
- Higher malignancy risk than leukoplakia (>50%)
- Requires immediate biopsy

**Oral Submucous Fibrosis:**
- Associated with betel quid use
- Progressive fibrosis
- 7-13% transformation rate

**Oral Lichen Planus:**
- Chronic inflammatory condition
- Erosive type has malignant potential
- 1-2% transformation rate

## Screening Examination

**Visual Examination:**
1. Extraoral: Skin, lymph nodes, salivary glands
2. Lips and labial mucosa
3. Buccal mucosa and vestibule
4. Gingiva and alveolar ridge
5. Tongue (dorsal, ventral, lateral)
6. Floor of mouth
7. Hard and soft palate
8. Oropharynx and tonsillar pillars

**Palpation:**
- Neck lymph nodes (submandibular, cervical)
- Floor of mouth
- Tongue
- Any suspicious lesions

**Warning Signs:**

| Feature | Description |
|---------|-------------|
| Color | Red, white, or mixed red/white |
| Texture | Indurated (hardened), ulcerated |
| Duration | Non-healing >2-3 weeks |
| Symptoms | Pain, numbness, difficulty swallowing |
| Location | High-risk sites: tongue, floor of mouth |

## Adjunctive Technologies

**Vital Staining:**
- Toluidine blue: Stains dysplastic cells
- Sensitivity: 72-100%, Specificity: 25-67%
- Many false positives

**Autofluorescence:**
- VELscope, Identafi
- Normal tissue fluoresces green; abnormal does not
- Sensitivity: High; Specificity: Variable

**Brush Biopsy:**
- OralCDx
- Transepithelial sampling
- Computer-assisted analysis
- For non-suspicious lesions only

**Limitations:**
- No adjunct replaces clinical judgment
- Gold standard remains scalpel biopsy
- Adjuncts may guide biopsy decision

## Clinical Management

**For Suspicious Lesions:**
1. If leukoplakia: Remove causative factors, reassess in 2 weeks
2. If persists: Biopsy
3. Erythroplakia: Immediate biopsy
4. Any non-healing ulcer >2 weeks: Biopsy

**Biopsy Types:**
- Incisional: Part of lesion
- Excisional: Entire small lesion
- Punch biopsy: Specific areas

**Referral Criteria:**
- Any suspicious lesion requiring biopsy
- Neck mass
- Difficulty swallowing
- Persistent hoarseness
- Unexplained numbness

## HPV-Related Oropharyngeal Cancer

**Characteristics:**
- Younger, healthier patients
- Often non-smokers
- Better prognosis than HPV-negative
- Tonsillar and base of tongue location
- May present as neck mass

**Prevention:**
- HPV vaccination (ages 9-26, approved to 45)
- Reduces oropharyngeal cancer risk
- Both males and females`,
      keyTerms: [
        { term: 'leukoplakia', definition: 'White patch on oral mucosa that cannot be characterized as any other definable lesion' },
        { term: 'erythroplakia', definition: 'Red patch with high malignant potential requiring immediate biopsy' },
        { term: 'potentially malignant disorder', definition: 'Lesion with increased risk of cancer development' },
        { term: 'HPV-16', definition: 'High-risk human papillomavirus strain associated with oropharyngeal cancer' },
        { term: 'autofluorescence', definition: 'Screening technology using tissue fluorescence differences to identify abnormalities' },
        { term: 'oropharyngeal', definition: 'Relating to the back of the throat including tonsils and base of tongue' },
      ],
      analogies: [
        'Leukoplakia is a warning sign like a check engine light - most of the time it is not serious, but it needs investigation.',
        'The tongue and floor of mouth are high-risk zones like fault lines for earthquakes - problems are more likely there.',
      ],
    },
    3: {
      level: 3,
      summary: 'Oral cancer screening integrates risk stratification, systematic examination, histopathological correlation, and adjunctive technologies. Understanding carcinogenesis pathways and molecular markers informs clinical decision-making for potentially malignant disorders.',
      explanation: `## Carcinogenesis Pathways

**Multistep Model:**

*Genetic Alterations:*
| Stage | Common Alterations |
|-------|-------------------|
| Normal → Hyperplasia | Telomerase activation |
| Hyperplasia → Dysplasia | p16 inactivation, 9p loss |
| Dysplasia → Carcinoma in situ | p53 mutation, 17p loss |
| CIS → Invasive carcinoma | EGFR amplification, invasion genes |

*Key Molecular Events:*
- p53 mutations (50-80% of OSCC)
- p16/CDKN2A inactivation
- Cyclin D1 amplification
- EGFR overexpression

**HPV Carcinogenesis:**

*Mechanism:*
- E6 oncogene → p53 degradation
- E7 oncogene → Rb inactivation
- Cell cycle dysregulation
- Genomic instability

*Distinct Profile:*
| Feature | HPV+ | HPV- |
|---------|------|------|
| p53 | Wild-type | Mutated |
| p16 | Overexpressed | Variable |
| Location | Oropharynx | Oral cavity |
| Prognosis | Better | Worse |

## Dysplasia Grading

**WHO Classification:**

| Grade | Features | Transformation Risk |
|-------|----------|-------------------|
| Mild | Lower 1/3 epithelium | Low (<5%) |
| Moderate | Lower 2/3 epithelium | Moderate (3-15%) |
| Severe/CIS | Full thickness | High (>15%) |

**Cytologic Features:**
- Increased nuclear:cytoplasmic ratio
- Nuclear hyperchromatism
- Cellular and nuclear pleomorphism
- Increased/abnormal mitoses
- Loss of polarity
- Basilar hyperplasia

**Binary System (WHO 2017):**
- Low-grade dysplasia (mild-moderate)
- High-grade dysplasia (severe/CIS)
- Better prognostic correlation

## Examination Technique

**Systematic Protocol:**

1. **History:**
   - Tobacco/alcohol use (pack-years)
   - HPV risk factors
   - Previous oral lesions
   - Family history
   - Symptoms (pain, numbness, dysphagia)

2. **Extraoral Examination:**
   - Facial asymmetry
   - Skin lesions
   - Lymphadenopathy (cervical chain palpation)

3. **Intraoral Examination:**

| Site | Technique | Key Findings |
|------|-----------|--------------|
| Lips | Direct visualization, palpation | Ulcers, crusting, sun damage |
| Labial mucosa | Evert lips, direct visualization | White/red patches |
| Buccal mucosa | Retract, visualize to posterior | Linea alba (normal), lesions |
| Gingiva/alveolar | Full inspection | Masses, non-healing sockets |
| Tongue | Grasp with gauze, extend | Lateral border lesions |
| Floor of mouth | Bimanual palpation | Masses, induration |
| Palate | Mirror, direct visualization | Ulcers, masses |
| Oropharynx | Tongue depression, say "aah" | Tonsillar asymmetry |

**High-Risk Sites:**
- Lateral border of tongue (50% of oral cavity cancers)
- Floor of mouth
- Soft palate/tonsillar pillars
- Lower lip (sun-exposed)

## Adjunctive Technologies Evidence

**Toluidine Blue:**

*Mechanism:* Metachromatic dye binds to nuclear DNA (increased in dysplasia)

*Performance:*
- Sensitivity: 72-100%
- Specificity: 25-67%
- False positives: Inflammation, ulcers

*Clinical Use:*
- May guide biopsy site selection
- Not definitive diagnostic

**Autofluorescence (VELscope, etc.):**

*Mechanism:*
- Blue light excitation (400-460 nm)
- Normal tissue: Green fluorescence (FAD)
- Abnormal tissue: Loss of fluorescence

*Performance:*
- Sensitivity: 60-100%
- Specificity: 14-80%
- Wide variability in studies

*Limitations:*
- False positives from inflammation
- Cannot distinguish dysplasia grade
- Operator-dependent

**Salivary Diagnostics (Emerging):**

*Biomarkers Studied:*
- IL-6, IL-8 (inflammatory)
- CD44, Cyfra 21-1 (tumor markers)
- miRNA profiles
- DNA methylation markers

*Status:*
- Research phase
- Not yet clinical standard
- Potential for screening and monitoring

## Management Algorithm

**Initial Assessment:**

\`\`\`
Lesion Identified
    ↓
History + Risk Factors
    ↓
Clinically Suspicious? → YES → Immediate Biopsy/Referral
    ↓ NO
Remove causative factors → Reassess 2-3 weeks
    ↓
Persists? → YES → Biopsy
    ↓ NO
Continue monitoring
\`\`\`

**Post-Biopsy Management:**

| Diagnosis | Action |
|-----------|--------|
| Benign | Reassurance, eliminate irritants |
| Mild dysplasia | Remove risk factors, monitor 3-6 months |
| Moderate dysplasia | Close follow-up, consider excision |
| Severe dysplasia/CIS | Excision, close surveillance |
| Carcinoma | Oncology referral |

## Documentation

**Essential Elements:**
- Lesion location (use diagram)
- Size (mm)
- Color, texture, borders
- Duration
- Associated symptoms
- Risk factors
- Clinical photos (with consent)
- Follow-up plan`,
      keyTerms: [
        { term: 'dysplasia', definition: 'Abnormal epithelial cell maturation and organization that may precede cancer' },
        { term: 'carcinoma in situ', definition: 'Severe dysplasia involving full epithelial thickness; pre-invasive' },
        { term: 'OSCC', definition: 'Oral Squamous Cell Carcinoma; most common type of oral cancer' },
        { term: 'E6/E7', definition: 'HPV oncoproteins that inactivate p53 and Rb tumor suppressors' },
        { term: 'toluidine blue', definition: 'Metachromatic vital dye that preferentially stains dysplastic cells' },
        { term: 'bimanual palpation', definition: 'Examination technique using hands inside and outside mouth simultaneously' },
      ],
      clinicalNotes: 'High-risk sites (lateral tongue, floor of mouth) deserve special attention. Non-healing ulcers >2-3 weeks require biopsy regardless of clinical appearance. Adjunctive technologies do not replace clinical judgment - high false-positive rates. HPV-positive oropharyngeal cancers have better prognosis but still require aggressive treatment. Document and photograph all suspicious lesions.',
    },
    4: {
      level: 4,
      summary: 'Advanced oral cancer detection integrates molecular pathology, liquid biopsy approaches, precision risk stratification, and understanding of field cancerization to develop personalized surveillance strategies and early intervention protocols.',
      explanation: `## Molecular Pathology

**Genomic Landscape of OSCC:**

*Frequently Altered Genes:*
| Gene | Alteration | Frequency | Function |
|------|------------|-----------|----------|
| TP53 | Mutation | 60-80% | Cell cycle control |
| CDKN2A | Deletion/mutation | 50-70% | G1 checkpoint |
| PIK3CA | Mutation | 20-30% | PI3K/AKT pathway |
| NOTCH1 | Mutation | 10-15% | Differentiation |
| FAT1 | Mutation | 20-30% | Wnt pathway |
| EGFR | Amplification | 30-50% | Growth signaling |

*Pathway Alterations:*
- Cell cycle: TP53, CDKN2A, Rb pathway
- RTK/RAS/PI3K: EGFR, PIK3CA, PTEN
- Differentiation: NOTCH1, NOTCH2
- Adhesion/migration: FAT1, AJUBA

**HPV Integration:**

*Molecular Features:*
- E6-mediated p53 degradation
- E7-mediated Rb inactivation
- p16 overexpression (surrogate marker)
- Wild-type p53
- Lower mutational burden

*Testing:*
- p16 IHC (surrogate, not definitive)
- HPV DNA ISH
- HPV E6/E7 mRNA (gold standard)

## Field Cancerization

**Concept:**
- Slaughter et al. (1953)
- Entire field exposed to carcinogens
- Multiple independent clones
- Explains multifocal tumors and recurrence

**Molecular Evidence:**

*Clonal Relationships:*
- TP53 mutations in normal-appearing tissue
- LOH patterns shared across field
- Epigenetic changes precede histologic

*Clinical Implications:*
- Wide surgical margins needed
- Surveillance of entire field
- Second primary tumor risk (3-7% per year)

## Liquid Biopsy Approaches

**Salivary Biomarkers:**

| Biomarker Class | Examples | Application |
|-----------------|----------|-------------|
| DNA | ctDNA, methylation | Detection, monitoring |
| RNA | mRNA, miRNA | Diagnosis, prognosis |
| Proteins | IL-8, CD44 | Early detection |
| Metabolites | Lipid profiles | Discrimination |
| Exosomes | miRNA cargo | Emerging |

**Circulating Tumor DNA (ctDNA):**
- Detects tumor-specific mutations
- Non-invasive
- May detect recurrence early
- Research stage for oral cancer

**Circulating Tumor Cells:**
- Rare in circulation
- Technical challenges
- Prognostic value studied

## Artificial Intelligence Applications

**Image Analysis:**

*Applications:*
- Automated lesion detection
- Dysplasia grading from histopathology
- Clinical photo screening
- Surveillance monitoring

*Limitations:*
- Training data quality
- Generalizability
- Regulatory pathway
- Clinical integration

**Risk Prediction:**

*Models:*
- Integrate clinical + molecular data
- Predict malignant transformation
- Guide surveillance intensity
- Personalized screening intervals

## Precision Risk Stratification

**Multi-Level Assessment:**

| Level | Parameters | Tool |
|-------|------------|------|
| Behavioral | Tobacco, alcohol, HPV | History |
| Clinical | Lesion appearance, location | Examination |
| Histopathological | Dysplasia grade | Biopsy |
| Molecular | LOH, p53, p16 | Tissue analysis |
| Epigenetic | Methylation patterns | Emerging |

**Risk-Stratified Surveillance:**

| Risk Category | Characteristics | Protocol |
|---------------|-----------------|----------|
| Low | No lesions, no risk factors | Annual exam |
| Moderate | Risk factors, no lesions | 6-month exam |
| High | Leukoplakia, mild dysplasia | 3-6 month, consider biopsy |
| Very High | Moderate-severe dysplasia | 1-3 month, active intervention |

## Chemoprevention

**Agents Studied:**

| Agent | Mechanism | Evidence |
|-------|-----------|----------|
| Retinoids | Differentiation | Mixed results, toxicity issues |
| Vitamin E | Antioxidant | Negative in trials |
| Green tea | EGCG, multiple | Limited human data |
| NSAIDs | COX inhibition | Inconclusive |
| Metformin | AMPK activation | Emerging data |

**Current Status:**
- No approved chemoprevention
- Lifestyle modification primary approach
- Active research area

## Treatment Implications

**Surgical Margins:**

*Considerations:*
- Minimum 1 cm gross margin
- Frozen section guidance
- Close margins: Consider re-excision
- Field cancerization affects margins

**Sentinel Lymph Node Biopsy:**
- For early-stage N0 disease
- Avoids elective neck dissection
- Improving detection rates

**Molecular Profiling:**

*Emerging Applications:*
- Targeted therapy selection
- Immunotherapy biomarkers (PD-L1)
- Clinical trial eligibility
- Prognostic stratification

**De-escalation in HPV+ Disease:**

*Rationale:*
- Better prognosis
- Reduce treatment toxicity
- Quality of life considerations

*Current Status:*
- Active clinical trials
- Not yet standard of care
- Requires careful patient selection`,
      keyTerms: [
        { term: 'field cancerization', definition: 'Concept that entire mucosal field exposed to carcinogens harbors genetic alterations predisposing to multifocal tumors' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; tumor-derived DNA in blood for non-invasive detection and monitoring' },
        { term: 'p16 IHC', definition: 'Immunohistochemistry for p16; surrogate marker for HPV-related oropharyngeal cancer' },
        { term: 'LOH', definition: 'Loss of Heterozygosity; deletion of one allele in tumor suppressor regions' },
        { term: 'sentinel lymph node', definition: 'First lymph node draining a tumor; biopsy can stage neck without complete dissection' },
        { term: 'de-escalation', definition: 'Reducing treatment intensity in favorable-prognosis HPV+ cancers to minimize toxicity' },
      ],
      clinicalNotes: 'Field cancerization explains why patients with one oral cancer are at high risk for second primaries (3-7% per year) - lifelong surveillance is essential. p16 IHC is a surrogate for HPV but is not definitive - HPV DNA/RNA testing may be needed in ambiguous cases. Molecular profiling is becoming standard for treatment planning. AI-assisted screening tools are emerging but not yet validated for clinical use.',
    },
    5: {
      level: 5,
      summary: 'Contemporary oral cancer detection research encompasses liquid biopsy validation, AI-powered screening, precision risk modeling, and integration of molecular and clinical parameters for personalized surveillance and early intervention strategies.',
      explanation: `## Systems Biology of Oral Carcinogenesis

**Multi-Omics Integration:**

| Layer | Data Type | Application |
|-------|-----------|-------------|
| Genomics | Mutations, CNVs | Driver identification |
| Epigenomics | Methylation, chromatin | Early detection |
| Transcriptomics | mRNA, ncRNA | Pathway activity |
| Proteomics | Protein expression | Biomarkers |
| Metabolomics | Small molecules | Functional readout |
| Microbiomics | Oral microbiome | Risk modulation |

**Network Analysis:**

*Key Pathway Nodes:*
- EGFR-RAS-MAPK signaling
- PI3K-AKT-mTOR pathway
- Hippo-YAP signaling
- Wnt pathway aberrations
- Notch signaling dysregulation

**Single-Cell Analysis:**

*Applications:*
- Tumor heterogeneity mapping
- Immune cell profiling
- Stromal interactions
- Treatment resistance mechanisms
- Minimal residual disease detection

## Liquid Biopsy Advancement

**Salivary Diagnostics Development:**

*Current Status:*
| Biomarker | Sensitivity | Specificity | Status |
|-----------|-------------|-------------|--------|
| IL-8 | 70-80% | 70-80% | Research |
| SAT | 70% | 85% | Research |
| cfDNA | Variable | Variable | Emerging |
| miRNA panels | 75-90% | 70-85% | Promising |

**Multi-Marker Panels:**
- Combination improves performance
- Machine learning for optimization
- Validation studies ongoing
- FDA approval pathway needed

**Point-of-Care Development:**

*Goals:*
- Chairside testing
- Rapid results
- Affordable screening
- Integration with dental visit

*Technologies:*
- Electrochemical biosensors
- Lateral flow assays
- Microfluidic platforms
- Smartphone-based analysis

## Artificial Intelligence Integration

**Deep Learning for Screening:**

*Clinical Photo Analysis:*
- CNN-based lesion detection
- Smartphone-captured images
- Sensitivity >85% in studies
- Specificity variable (60-90%)

*Implementation Challenges:*
- Training data diversity
- Validation across populations
- Regulatory approval
- Clinical workflow integration

**Histopathology AI:**

*Applications:*
- Automated dysplasia grading
- Margin assessment
- Prognostic feature extraction
- Consistency improvement

*Status:*
- Research and pilot clinical use
- FDA-cleared for some applications
- Pathologist-AI collaboration model

## Precision Prevention

**Personalized Surveillance:**

*Algorithm Components:*
\`\`\`
Risk Score = Σ(Behavioral + Clinical + Histological + Molecular Factors)

Low Risk → Standard care (annual screening)
Moderate Risk → Enhanced surveillance (6-month)
High Risk → Active monitoring (3-month, adjuncts)
Very High Risk → Intensive intervention
\`\`\`

**Molecular Risk Markers:**

*Validated:*
| Marker | Association | Clinical Use |
|--------|-------------|--------------|
| p53 mutation | Transformation risk | Limited |
| p16 (CDKN2A) | Protective loss | Research |
| LOH 3p, 9p | Progression risk | Research |

*Emerging:*
- Methylation panels
- miRNA signatures
- Immune profiles
- Microbiome patterns

## Microbiome and Oral Cancer

**Dysbiosis Associations:**

*Cancer-Associated Changes:*
| Organism | Association | Mechanism |
|----------|-------------|-----------|
| F. nucleatum | Increased | Inflammatory, immune evasion |
| P. gingivalis | Increased | Gingipains, p53 degradation |
| Candida | Increased | Acetaldehyde production |
| Streptococci | Decreased | Alcohol metabolism |

**Mechanistic Links:**
- Chronic inflammation
- Carcinogen production (acetaldehyde)
- Immune modulation
- Direct cellular effects

**Therapeutic Implications:**
- Microbiome as risk modifier
- Potential for modulation
- Research stage

## Implementation Science

**Screening Program Development:**

*Key Elements:*
- Target population identification
- Screening modality selection
- Referral pathway establishment
- Quality assurance metrics
- Cost-effectiveness analysis

**Global Perspectives:**

| Region | Risk Profile | Screening Approach |
|--------|--------------|-------------------|
| South Asia | Betel quid, tobacco | Visual inspection |
| Europe/N. America | Tobacco, alcohol, HPV | Opportunistic dental |
| Africa | Limited resources | Community-based |

**Low-Resource Settings:**

*Visual Inspection:*
- Trained health workers
- Sensitivity 60-80%
- Effective for high-risk populations
- Combined with tobacco cessation

## Future Directions

**Next-Generation Approaches:**

1. **Integrated Risk Platforms:**
   - Clinical + molecular + AI
   - Continuous risk updating
   - Personalized intervals

2. **Home-Based Monitoring:**
   - Smartphone apps
   - Self-examination guidance
   - Photo tracking
   - Triage algorithms

3. **Therapeutic Prevention:**
   - Targeted agents for high-risk
   - Immunomodulation
   - Microbiome intervention

4. **Early Detection Innovations:**
   - Breath analysis
   - Optical coherence tomography
   - Raman spectroscopy
   - Molecular imaging

**Research Priorities:**

| Priority | Goal | Timeline |
|----------|------|----------|
| Salivary biomarker validation | FDA-approved test | 3-5 years |
| AI screening tool validation | Clinical implementation | 3-5 years |
| Chemoprevention trial | Effective agent | 5-10 years |
| Precision surveillance protocols | Personalized care | 5 years |`,
      keyTerms: [
        { term: 'cfDNA', definition: 'Cell-free DNA; circulating DNA fragments including tumor-derived ctDNA' },
        { term: 'CNN', definition: 'Convolutional Neural Network; deep learning architecture for image analysis' },
        { term: 'single-cell analysis', definition: 'Technologies enabling molecular profiling of individual cells to understand heterogeneity' },
        { term: 'microbiome dysbiosis', definition: 'Imbalanced microbial community associated with disease states' },
        { term: 'optical coherence tomography', definition: 'Non-invasive imaging using light to create cross-sectional tissue images' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of research findings into practice' },
      ],
      clinicalNotes: `Research translation priorities:
1. Salivary biomarker panels approaching clinical validation - watch for FDA-cleared products
2. AI-assisted photo screening may enable community-based detection in resource-limited settings
3. Multi-marker approaches outperform single biomarkers - combination panels are the future
4. Oral microbiome dysbiosis contributes to carcinogenesis - potential for preventive modulation
5. Precision surveillance based on individual risk profile optimizes resource allocation
6. HPV vaccination is prevention - advocate for broader adoption
7. Field cancerization mandates lifelong surveillance after oral cancer diagnosis
8. Low-resource settings benefit most from simple visual inspection by trained workers`,
    },
  },

  media: [
    {
      id: 'oral-exam-technique',
      type: 'diagram',
      filename: 'oral-cancer-screening-technique.svg',
      title: 'Oral Cancer Screening Examination',
      description: 'Step-by-step illustration of comprehensive oral examination technique',
    },
    {
      id: 'leukoplakia-example',
      type: 'image',
      filename: 'leukoplakia-clinical.jpg',
      title: 'Leukoplakia Clinical Appearance',
      description: 'Clinical photograph of white patch on lateral tongue',
    },
  ],

  citations: [
    {
      id: 'neville-oral-path',
      type: 'textbook',
      title: 'Oral and Maxillofacial Pathology',
      authors: ['Neville, B.W.', 'Damm, D.D.', 'Allen, C.M.'],
      source: 'Elsevier',
    },
    {
      id: 'acs-oral-cancer',
      type: 'website',
      title: 'Oral Cavity and Oropharyngeal Cancer',
      source: 'American Cancer Society',
      url: 'https://www.cancer.org',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tongue-anatomy', targetType: 'structure', relationship: 'related', label: 'Tongue Anatomy' },
    { targetId: 'structure-oral-cavity-anatomy', targetType: 'structure', relationship: 'related', label: 'Oral Cavity Anatomy' },
  ],

  tags: {
    systems: ['digestive', 'dental'],
    structures: ['oral cavity', 'tongue', 'oropharynx'],
    topics: ['pathology', 'screening', 'prevention', 'oncology'],
    keywords: ['oral cancer', 'screening', 'leukoplakia', 'HPV', 'squamous cell carcinoma'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default oralCancerScreening;
