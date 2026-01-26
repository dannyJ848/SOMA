/**
 * Oral Cancer Screening - Comprehensive Educational Content
 *
 * Covers oral and oropharyngeal cancer risk factors, early detection,
   clinical examination, and biopsy procedures.
 */

import { EducationalContent } from '../types';

export const oralCancerScreening: EducationalContent = {
  id: 'condition-oral-cancer-screening',
  type: 'condition',
  name: 'Oral Cancer Screening',
  alternateNames: [
    'Oral Cancer Examination',
    'Oral Cancer Detection',
    'Oral Mucosal Screening',
    'OPMD Screening',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Oral cancer screening is an examination of the mouth to look for signs of cancer or precancerous conditions. Early detection is important because oral cancer is often treatable when found early.',
      explanation: `**What is Oral Cancer Screening?**

Oral cancer screening is a simple exam where a dentist or doctor checks your mouth for signs of cancer or precancerous lesions. It's quick and painless, and can be done during regular dental visits.

**What Are They Looking For?**

- Red or white patches in the mouth
- Sores that don't heal
- Lumps or thickening of the skin
- Rough spots or crusty areas
- Bleeding that isn't normal
- Numbness or pain
- Swelling or lumps in the neck

**Risk Factors for Oral Cancer:**

**Tobacco Use (Major Risk)**
- Smoking cigarettes, pipes, cigars
- Chewing tobacco, snuff
- The more you use, the higher the risk
- Quitting reduces risk over time

**Alcohol Use**
- Heavy drinking increases risk
- Risk increases with tobacco + alcohol together

**HPV Infection**
- Human papillomavirus (HPV)
- Sexually transmitted
- Linked to oropharyngeal cancer
- HPV vaccine may prevent some cases

**Other Risk Factors:**
- Sun exposure (lip cancer)
- Age (more common over 40)
- Poor diet low in fruits and vegetables
- Weakened immune system
- Certain genetic conditions

**What Happens During Screening?**

1. **Visual Exam**
   - Dentist looks at all parts of your mouth
   - Lips, gums, tongue, cheeks, roof and floor of mouth
   - Back of throat

2. **Physical Exam**
   - Feels for lumps or bumps
   - Checks your neck for swollen lymph nodes

3. **Additional Tests** (if needed)
   - Special lights or dyes
   - Brush test to collect cells
   - Referral to specialist

**When is Biopsy Needed?**

If something suspicious is found, a biopsy (small tissue sample) may be taken to check for cancer cells. This is the only way to diagnose oral cancer for sure.

**Remember:**

- Oral cancer is often treatable when found early
- Screening is quick and painless
- Tell your dentist about any changes you notice
- Regular dental visits are important for screening`,
      keyTerms: [
        { term: 'oral cancer', definition: 'Cancer that starts in the mouth' },
        { term: 'biopsy', definition: 'Taking a small tissue sample for testing' },
        { term: 'HPV', definition: 'Human papillomavirus; virus linked to some oral cancers' },
        { term: 'lesion', definition: 'Abnormal area or sore' },
      ],
      analogies: [
        'Screening is like a security check - it looks for problems before they become serious.',
        'A biopsy is like sending a sample to the lab to find out what it is.',
      ],
      examples: [
        'A white patch that does not go away should be checked.',
        'Swollen lymph nodes in the neck could be a sign of infection or cancer.',
      ],
      patientCounselingPoints: [
        'Oral cancer screening is usually done during regular dental checkups',
        'Tell your dentist about any sores that do not heal within 2 weeks',
        'Quitting tobacco and reducing alcohol are the best ways to reduce oral cancer risk',
      ],
    },
    2: {
      level: 2,
      summary: 'Oral cancer screening involves visual and tactile examination of oral mucosa for precancerous and cancerous lesions. Early detection significantly improves outcomes. Risk stratification guides recall intervals and referral decisions.',
      explanation: `## Epidemiology

**Statistics:**
- ~54,000 new cases/year (US)
- ~11,000 deaths/year (US)
- More common in men than women (2:1)
- Average age: 62 years
- Increasing: HPV-related oropharyngeal cancer

**Anatomic Subsites:**
- Tongue (most common)
- Floor of mouth
- Lower lip
- Soft palate
- Gingiva
- Buccal mucosa
- Hard palate
- Oropharynx (tonsils, base of tongue)

## Risk Factors

**Tobacco:**
- Smoking: 2-4x increased risk
- Smokeless: 2-3x increased risk
- Dose and duration dependent
- Quitting: Risk decreases over time

**Alcohol:**
- Heavy use: 3-6x increased risk
- Synergistic with tobacco
- Beer, wine, spirits all increase risk

**HPV:**
- HPV-16, HPV-18 high-risk types
- Oropharyngeal cancer: 70% HPV+
- Increasing prevalence
- Sexually transmitted

**Other:**
- Age: Risk increases with age
- Gender: More common in men
- Sun exposure: Lip cancer
- Poor nutrition
- Weakened immune system
- Betel nut chewing (South Asia)

## Precancerous Lesions

**Leukoplakia:**
- White patch that cannot be scraped off
- Cannot be diagnosed as another condition
- Malignant transformation: 1-20%
- Common on tongue, buccal mucosa
- Biopsy indicated

**Erythroplakia:**
- Red patch with velvety texture
- Higher malignant potential than leukoplakia (up to 50%)
- Usually asymptomatic
- Biopsy mandatory

**Erythroleukoplakia:**
- Mixed red and white
- Intermediate risk
- Biopsy indicated

**Oral Submucous Fibrosis:**
- Fibrosis of oral mucosa
- Inability to open mouth
- Betel nut chewing
- High malignant potential

## Examination Technique

**Visual Examination:**
- Good lighting essential
- Dry tissues for better visualization
- Examine all oral mucosal surfaces
- Note color, texture, size

**Systematic Approach:**
1. Extraoral: Face, neck, lymph nodes
2. Lips: Vermilion border, labial mucosa
3. Buccal mucosa: Both sides
4. Tongue: Dorsal, ventral, lateral borders, base
5. Floor of mouth: Both sides
6. Palate: Hard and soft
7. Oropharynx: Tonsils, posterior pharynx
8. Gingiva: All areas

**Palpation:**
- Bimanual technique for floor of mouth
- Tongue mobility and firmness
- Lymph node examination
- Assess masses

**Lesion Assessment:**
- Size (largest dimension)
- Color
- Texture
- Mobility
- Associated findings

## Adjunctive Screening Tools

**Toluidine Blue Staining:**
- Vital stain
- Stains abnormal cells
- Not specific (many false positives)
- Used as adjunct, not replacement

**Brush Biopsy:**
- Oral CDx
- Collects cells
- Cytology sample
- Adjunct only, not definitive

**Fluorescence Visualization:**
- VELscope: Blue light
- ViziLite: Chemiluminescent light
- Loss of fluorescence suggests abnormality
- Limited specificity
- Adjunct only

**Salivary Biomarkers:**
- DNA analysis
- Protein markers
- Emerging technology
- Not yet routine

## Indications for Biopsy

**Mandatory Biopsy:**
- Erythroplakia
- Suspicious leukoplakia
- Any ulcer present >2 weeks
- Mass, swelling
- Unexplained bleeding
- Unexplained numbness

**Consider Biopsy:**
- Leukoplakia (any)
- Red and white lesions
- Lichen planus with suspicious features
- Atypical ulcers
- Pigmented lesions (excluding common racial pigmentation)

## Referral and Follow-up

**Refer to Specialist When:**
- Suspicious lesion identified
- Biopsy positive for dysplasia/carcinoma
- Unsure of diagnosis
- Patient anxiety
- Lesion not resolving

**Recall Intervals:**
- High risk: Every 3-4 months
- Moderate risk: Every 6 months
- Low risk: Every 12 months
- With lesions: As appropriate

**Documentation:**
- Photograph lesions
- Describe thoroughly
- Measure and note location
- Document management plan

## Patient Counseling

**Risk Reduction:**
- Tobacco cessation
- Alcohol moderation
- HPV vaccination
- Sun protection (lip balm with SPF)
- Healthy diet

**Self-Examination:**
- Monthly self-exam
- Report changes
- Prompt evaluation of symptoms

**Education:**
- Know the signs and symptoms
- Early detection saves lives
- Regular dental visits include screening
- Don't ignore unusual changes`,
      keyTerms: [
        { term: 'leukoplakia', definition: 'White patch that cannot be scraped off; potentially precancerous' },
        { term: 'erythroplakia', definition: 'Red velvety patch with high malignant potential' },
        { term: 'HPV', definition: 'Human papillomavirus; sexually transmitted virus linked to oropharyngeal cancer' },
        { term: 'dysplasia', definition: 'Abnormal cell growth that may progress to cancer' },
        { term: 'biopsy', definition: 'Removal of tissue sample for microscopic examination' },
      ],
      analogies: [
        'Leukoplakia is like a white flag - a warning sign that needs attention.',
        'Screening tools are like smoke detectors - they alert you to potential problems but need confirmation.',
      ],
      clinicalNotes: 'Erythroplakia has highest malignant potential (up to 50%). Any lesion present >2 weeks requires evaluation. HPV-related oropharyngeal cancer increasing. Tobacco synergistic with alcohol. Toluidine blue and adjunctive tools: Not definitive, biopsy needed for diagnosis.',
      patientCounselingPoints: [
        'If you notice a sore that doesn\'t heal within 2 weeks, see your dentist or doctor',
        'Tobacco and alcohol together greatly increase oral cancer risk',
        'HPV vaccine may prevent some oral and throat cancers',
        'Regular dental visits often include oral cancer screening',
      ],
    },
    3: {
      level: 3,
      summary: 'Oral potentially malignant disorders (OPMDs) require systematic evaluation with biopsy for definitive diagnosis. Dysplasia grading predicts malignant transformation risk. Multidisciplinary management optimizes outcomes.',
      explanation: `## Potentially Malignant Disorders

**Leukoplakia:**
- Incidence: 0.2-4.9%
- Homogeneous: Uniform white, 1-2% transformation
- Non-homogeneous: Mixed white/red, 4-25% transformation
- Speckled: Higher risk
- Nodular: High risk

**Erythroplakia:**
- Rare but concerning
- Red, velvety
- Often asymptomatic
- 50% may show invasive carcinoma or severe dysplasia
- Biopsy mandatory

**Oral Submucous Fibrosis:**
- Juvia: Betel quid chewing
- Fibrosis of lamina propria
- Decreased mouth opening
- Muscle involvement
- Malignant transformation: 7-13%

**Proliferative Verrucous Leukoplakia:**
- White, wart-like appearance
- Higher malignant potential
- Often multifocal
- HPV association in some cases
- Transformation: 3-6% (higher in some populations)

**Lichen Planus:**
- Bilateral white striae
- Often symptomatic
- Erosive lichen planus: Slightly increased risk
- Transformation: 0.5-2%
- Differentiation from lichenoid dysplasia

**Discoid Lupus Erythematosus:**
- Central red, peripheral white
- Associated with SLE
- May mimic other lesions
- Low malignant potential

## Dysplasia Classification

**WHO Classification:**
- Mild dysplasia
- Moderate dysplasia
- Severe dysplasia
- Carcinoma in situ

**Grading Criteria:**
- Architectural changes
- Cellular atypia
- Hyperkeratosis/parakeratosis
- Loss of stratification
- Increased mitotic activity
- Nuclear abnormalities

**Malignant Transformation Rates:**
- Mild: 3-5%
- Moderate: 10-15%
- Severe/CIS: 25-30%
- Varies by study

## Biopsy Techniques

**Incisional Biopsy:**
- Remove representative sample
- Include normal-appearing margin
- Include peripheral area if possible
- Suture to close
- Most common technique

**Excisional Biopsy:**
- Remove entire lesion
- Small lesions (<1cm)
- When complete removal feasible
- Allows full histologic evaluation

**Punch Biopsy:**
- 3-6 mm circular blade
- Good for mucosal lesions
- Minimal scarring
- May not be representative

**Brush Biopsy:**
- Oral CDx
- Transepithelial cells
- Not definitive
- False negatives common
- Adjunct only

**Exfoliative Cytology:**
- Scrape cells from surface
- Quick, inexpensive
- Low sensitivity
- Not for definitive diagnosis

## Histopathology

**Squamous Cell Carcinoma:**
- 90% of oral cancers
- Grading: Well, moderate, poorly differentiated
- Depth of invasion important
- Perineural invasion concerning
- Lymphovascular invasion concerning

**Verrucous Carcinoma:**
- Low-grade malignancy
- Exophytic, warty
- Local invasion
- Rare metastasis
- HPV association

**Minor Salivary Gland Tumors:**
- Mucoepidermoid carcinoma
- Adenoid cystic carcinoma
- Others: Acinic cell, etc.
- Palate, buccal mucosa common

**Melanoma:**
- Pigmented lesions
- ABCD rule
- Poor prognosis
- Early detection critical

## Staging

**TNM Staging (AJCC):**

*T (Primary Tumor):*
- Tx: Cannot be assessed
- Tis: Carcinoma in situ
- T1: ≤2cm
- T2: >2-4cm
- T3: >4cm
- T4: Deep invasion (bone, muscle, skin, etc.)

*N (Regional Nodes):*
- N0: No regional lymph node mets
- N1: Single ipsilateral ≤3cm
- N2: Single >3cm or multiple nodes
- N3: Massive lymph nodes

*M (Metastasis):*
- M0: No distant metastasis
- M1: Distant metastasis

**Oropharyngeal HPV-Positive:**
- Different staging
- Better prognosis
- TNM modified for HPV+

## Management

**Premalignant Lesions:**
- Observation (if no dysplasia)
- Excision (if dysplasia)
- Laser ablation (follow-up biopsy)
- Cryotherapy (less common)
- Medications: Retinoids, beta-carotene (limited)

**Early Carcinoma:**
- Surgery: Wide local excision
- Radiation: Definitive or adjuvant
- Observation: Selective neck dissection

**Advanced Carcinoma:**
- Surgery + Reconstruction
- Radiation + Chemotherapy
- Combined modality
- Clinical trials

**Rehabilitation:**
- Speech therapy
- Swallowing therapy
- Dental rehabilitation
- Prosthodontics
- Psychosocial support`,
      keyTerms: [
        { term: 'OPMD', definition: 'Oral potentially malignant disorder' },
        { term: 'dysplasia', definition: 'Abnormal cell growth that may progress to cancer' },
        { term: 'carcinoma in situ', definition: 'Cancer confined to epithelium, not invaded' },
        { term: 'TNM', definition: 'Tumor, Node, Metastasis staging system' },
        { term: 'squamous cell carcinoma', definition: 'Most common type of oral cancer' },
      ],
      analogies: [
        'Dysplasia is like a "pre-cancer" - abnormal cells that may become cancer if untreated.',
        'The TNM system is like a measuring stick for cancer - describes how far it has spread.',
      ],
      clinicalNotes: 'Erythroplakia: highest malignant potential. Non-homogeneous leukoplakia higher risk than homogeneous. Any lesion >2 weeks: evaluate. Excisional biopsy for small lesions. HPV+ oropharyngeal cancer has better prognosis. Depth of invasion is critical prognostic factor.',
      patientCounselingPoints: [
        'Leukoplakia (white patches) need evaluation because some can be precancerous',
        'Erythroplakia (red patches) are concerning and require biopsy',
        'Treatment success depends on early detection - don\'t delay evaluation',
        'Tobacco and alcohol are the most important modifiable risk factors',
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary oral cancer screening integrates molecular biomarkers, salivary diagnostics, and AI-assisted lesion identification. HPV-associated oropharyngeal cancer presents unique clinical and epidemiological features.',
      explanation: `## Molecular Diagnostics

**Salivary Biomarkers:**
- DNA analysis (hypermetylation)
- Protein markers
- mRNA signatures
- MicroRNA profiles
- Metabolomics
- Not yet standard of care

**Tissue Biomarkers:**
- p53 mutations
- Ki-67 (proliferation)
- EGFR expression
- COX-2 expression
- Angiogenesis markers
- Prognostic significance

**HPV Testing:**
- p16 immunohistochemistry (surrogate)
- In situ hybridization
- PCR for HPV DNA
- Important for prognosis

**AI and Imaging:**
- Automated lesion detection
- Smartphone screening
- Telemedicine applications
- Sensitivity/specificity improving

## HPV-Associated Oropharyngeal Cancer

**Epidemiology:**
- Increasing incidence
- Younger patients
- Often non-smokers/drinkers
- Better prognosis than HPV-negative
- Tonsil, base of tongue primary sites
- Sexual behavior risk factor

**Clinical Features:**
- Cystic nodal mets
- Small primary tumor
- Unknown primary common
- Good response to treatment
- Lower risk of recurrence

**Testing:**
- p16 immunohistochemistry (standard)
- HPV in situ hybridization
- Prognostic and therapeutic implications

## Screening Guidelines

**Visual Examination:**
- Annual dental exam for adults
- Annual clinical exam
- High risk: Every 6 months

**High Risk Populations:**
- Tobacco users
- Heavy alcohol use
- Previous oral cancer
- HPV-related history
- Significant sun exposure

**Adjunctive Tools:**
- Role in screening controversial
- Fluorescence visualization: Limited specificity
- Toluidine blue: Limited specificity
- Cytology: Limited sensitivity
- Visual exam remains gold standard

## Emerging Technologies

**Optical Coherence Tomography:**
- Cross-sectional imaging
- Microscopic resolution
- Depth assessment
- Limited penetration
- May help guide biopsy

**Raman Spectroscopy:**
- Molecular fingerprint
- Distinguishes normal/abnormal
- Real-time results
- Research stage

**Confocal Endomicroscopy:**
- Cellular-level imaging
- Real-time
- May reduce biopsies
- Not widely available

## Screening Effectiveness

**Sensitivity/Specificity:**
- Visual exam: Sensitivity ~60-80%
- Adjunctive tools: Variable
- No perfect screening test
- Clinical judgment essential

**Overdiagnosis:**
- Detecting lesions that wouldn't progress
- Harms: Unnecessary procedures, anxiety
- Balance needed

**Cost-Effectiveness:**
- Visual screening: Cost-effective
- Adjunctive tools: Less clear
- Targeted screening: High-risk populations

## Follow-Up Protocols

**Premalignant Lesions:**
- Low-grade dysplasia: 6 months
- High-grade dysplasia: 3 months or excision
- Complete excision: 3 months
- Incomplete excision: Re-excision

**Post-Treatment:**
- Every 1-3 months first year
- Every 2-4 months second year
- Every 6 months after 5 years
- Lifetime follow-up`,
      keyTerms: [
        { term: 'p16', definition: 'Tumor suppressor protein; surrogate marker for HPV infection' },
        { term: 'EGFR', definition: 'Epidermal growth factor receptor; prognostic marker' },
        { term: 'COX-2', definition: 'Cyclooxygenase-2; enzyme associated with inflammation and cancer' },
      ],
      clinicalNotes: 'HPV+ oropharyngeal cancer has distinct clinical features and better prognosis. Salivary biomarkers promising but not yet standard. p16 IHC standard for HPV testing. Visual exam remains screening gold standard. Adjunctive tools: Use as supplement, not replacement for clinical judgment.',
    },
    5: {
      level: 5,
      summary: 'Future oral cancer screening will incorporate molecular biomarkers, AI-assisted visualization, and personalized risk assessment. Integration with HPV vaccination and tobacco control policies will impact incidence and detection.',
      explanation: `## Future Directions

**Biomarker Discovery:**
- Multi-omic approaches
- Panels of markers
- Risk stratification
- Personalized screening

**Artificial Intelligence:**
- Deep learning image analysis
- Automated risk assessment
- Smartphone applications
- Global access

**Salivary Diagnostics:**
- Non-invasive screening
- Point-of-care testing
- Early detection
- Population screening

**Prevention Integration:**
- HPV vaccination impact
- Tobacco control policies
- Alcohol awareness
- Public health strategies`,
      keyTerms: [],
      clinicalNotes: `Future practice:
1. Salivary biomarkers may enable population screening
2. AI-assisted visual exam will standardize detection
3. HPV vaccination may reduce HPV+ cancers
4. Risk-adapted screening protocols
5. Telemedicine for underserved populations`,
    },
  },

  media: [
    {
      id: 'oral-cancer-screening',
      type: 'diagram',
      filename: 'oral-cancer-screening-exam.svg',
      title: 'Oral Cancer Screening Examination',
      description: 'Steps of oral cancer screening examination',
    },
  ],

  citations: [
    {
      id: 'ada-oral-cancer',
      type: 'article',
      title: 'Oral Cancer Detection and Prevention',
      authors: ['Rethman, M.', 'Warnakulasuriya, S.'],
      source: 'Journal of the American Dental Association',
      chapter: '2015',
    },
    {
      id: 'who-oral-cancer',
      type: 'article',
      title: 'Oral Cancer: Prevention and Control',
      authors: ['World Health Organization'],
      source: 'WHO Guidelines',
      chapter: '2022',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gum-disease', targetType: 'condition', relationship: 'related', label: 'Gum Disease' },
    { targetId: 'topic-dental-checkups', targetType: 'topic', relationship: 'related', label: 'Dental Checkups' },
  ],

  tags: {
    systems: ['dental', 'head-neck'],
    structures: ['oral-mucosa', 'tongue', 'palate', 'lymph-nodes'],
    topics: ['oncology', 'screening', 'diagnostics', 'pathology'],
    keywords: ['oral cancer', 'screening', 'leukoplakia', 'erythroplakia', 'HPV', 'biopsy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default oralCancerScreening;
