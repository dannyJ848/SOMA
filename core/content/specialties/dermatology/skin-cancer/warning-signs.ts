/**
 * Skin Cancer Warning Signs - Comprehensive Educational Content
 *
 * Covers recognition of warning signs for melanoma, BCC, SCC, and other skin cancers.
 */

import { EducationalContent } from '../../../types';

export const skinCancerWarningSignsContent: EducationalContent = {
  id: 'dermatology-skin-cancer-warning-signs',
  type: 'topic',
  name: 'Skin Cancer Warning Signs',
  alternateNames: ['ABCDE Criteria', 'Skin Cancer Recognition', 'Mole Warning Signs'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning the warning signs of skin cancer helps you find it early when it is most treatable.',
      explanation: `Skin cancer is the most common type of cancer, but the good news is that when found early, it is almost always curable. Learning what to look for can save your life!

**The ABCDEs of Melanoma:**
Check your moles for these warning signs:
- **A - Asymmetry**: One half does not match the other
- **B - Border**: Edges are ragged, uneven, or blurry
- **C - Color**: Different colors in the same mole (brown, black, pink, red, white, blue)
- **D - Diameter**: Larger than a pencil eraser (about 6mm)
- **E - Evolving**: The mole is changing in size, shape, or color

**The "Ugly Duckling" Sign:**
Look for a mole that looks different from all your other moles - the odd one out.

**Other Skin Cancer Warning Signs:**
- A sore that does not heal within 2-3 weeks
- A shiny, pearly bump (could be basal cell carcinoma)
- A red, scaly patch that does not go away
- A wart-like growth that crusts or bleeds
- A firm, red bump

**When to See a Doctor:**
- Any new mole that appears after age 30
- Any mole that is changing
- Any sore that will not heal
- Any spot that itches, bleeds, or hurts

**Remember:**
Check your skin once a month and see a dermatologist once a year for a professional skin check!`,
      keyTerms: [
        { term: 'mole', definition: 'A brown or black spot on your skin, also called a nevus' },
        { term: 'melanoma', definition: 'A serious type of skin cancer that starts in pigment cells' },
        { term: 'dermatologist', definition: 'A doctor who specializes in skin conditions' },
        { term: 'biopsy', definition: 'Removing a small piece of skin to check if it is cancer' },
      ],
      analogies: [
        'The ABCDE rule is like a checklist for your moles - if any boxes are checked, see a doctor.',
        'The ugly duckling sign is like finding the one person in a family photo who looks completely different.',
      ],
      examples: [
        'Maria noticed one of her moles had changed from round to irregular over the past few months - she made an appointment with her dermatologist.',
        'John had a shiny bump on his nose that would bleed when he shaved - his doctor diagnosed it as basal cell carcinoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Systematic skin examination using validated criteria (ABCDE, Glasgow, ugly duckling) enables early detection of melanoma and non-melanoma skin cancers.',
      explanation: `Early detection of skin cancer dramatically improves outcomes. Systematic approaches to skin examination help identify suspicious lesions.

## Melanoma Detection

### ABCDE Criteria
| Letter | Feature | Description |
|--------|---------|-------------|
| A | Asymmetry | Irregular shape, halves do not match |
| B | Border | Irregular, scalloped, or poorly defined |
| C | Color | Multiple colors, uneven distribution |
| D | Diameter | >6mm (though can be smaller) |
| E | Evolution | Changing in size, shape, or color |

**Sensitivity**: 90%+ for melanoma
**Specificity**: Lower, many benign lesions meet criteria

### Ugly Duckling Sign
- Identifies the outlier among a patient's nevi
- Useful when patient has many moles
- Look for the mole that differs from the person's "signature nevus pattern"
- High sensitivity when combined with ABCDE

### Glasgow 7-Point Checklist
**Major Features** (2 points each):
- Change in size
- Change in shape
- Change in color

**Minor Features** (1 point each):
- Diameter ≥7mm
- Inflammation
- Crusting or bleeding
- Sensory change (itch)

Score ≥3 suggests referral for evaluation.

## Basal Cell Carcinoma Signs
- Pearly or waxy bump
- Flat, flesh-colored or brown scar-like lesion
- Bleeding or scabbing sore that heals and returns
- Pink growth with elevated border
- Visible blood vessels (telangiectasias)

## Squamous Cell Carcinoma Signs
- Firm, red nodule
- Flat lesion with scaly, crusted surface
- New sore or raised area on old scar or ulcer
- Rough, scaly patch on lip or in mouth
- Red sore or rough patch inside mouth
- Wart-like growth

## Risk Assessment
**High-Risk Individuals** (need closer surveillance):
- Fair skin, light hair, light eyes
- History of sunburns
- Many moles (>50)
- Atypical moles (dysplastic nevi)
- Family history of melanoma
- Personal history of skin cancer
- Immunosuppression

## Self-Examination Guidelines
- Monthly full-body skin check
- Use mirrors for hard-to-see areas
- Check scalp, between toes, under nails
- Note any new or changing lesions
- Photograph concerning moles for comparison`,
      keyTerms: [
        { term: 'nevus', definition: 'Medical term for a mole - a benign melanocytic lesion', pronunciation: 'NEE-vus' },
        { term: 'dysplastic nevus', definition: 'An atypical mole with irregular features, may indicate increased melanoma risk' },
        { term: 'telangiectasia', definition: 'Small dilated blood vessels visible on skin surface', pronunciation: 'tel-AN-jee-ek-TAY-zhuh' },
        { term: 'dermoscopy', definition: 'Examination of skin with a magnifying device and polarized light' },
      ],
      analogies: [
        'The 7-point checklist is like a scoring system - more points mean more reason for concern.',
        'Self-examination is like checking your car for damage - regular inspection catches problems early.',
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical recognition of skin cancer integrates pattern recognition, dermoscopic features, and risk stratification to guide biopsy decisions and appropriate referral.',
      explanation: `## Clinical Examination Techniques

### Total Body Skin Examination (TBSE)
**Systematic Approach**:
1. Patient in gown, adequate lighting
2. Examine scalp (part hair systematically)
3. Face, ears (anterior and posterior)
4. Neck, upper chest
5. Arms including axillae, hands, interdigital spaces
6. Chest, abdomen, back
7. Legs, including feet, soles, interdigital spaces
8. Genital/perianal areas when indicated

**Documentation**:
- Body map for lesion location
- Description: Size, shape, color, border
- Photography for monitoring

### Dermoscopy Fundamentals

**Equipment**:
- Dermatoscope with 10x magnification
- Polarized vs non-polarized light
- Immersion (oil/alcohol) vs contact

**Melanocytic vs Non-Melanocytic**:
- Pigment network → melanocytic
- Keratin/milia-like cysts → seborrheic keratosis
- Arborizing vessels → BCC
- Structureless red areas → amelanotic lesion

### Melanoma Dermoscopic Features
**Network Analysis**:
- Atypical network (irregular lines, variable thickness)
- Negative network (grid pattern)
- Pseudo-network (facial melanoma)

**Pattern Analysis**:
- Multicomponent pattern (≥3 structures)
- Asymmetry of structures and colors
- Blue-white veil (indicates regression/invasion)
- Regression structures

**Global Patterns Concerning for Melanoma**:
- Multicomponent
- Irregular starburst
- Homogeneous (in changing lesion)
- Non-specific with history of change

### ABCD Dermoscopy Score (Stolz)
| Feature | Score Range | Calculation |
|---------|-------------|-------------|
| Asymmetry | 0-2 | Axes asymmetric |
| Border | 0-8 | Abrupt cutoffs (8 segments) |
| Color | 1-6 | Number of colors |
| Dermoscopic structures | 1-5 | Number of structures |

**Total Dermoscopy Score (TDS)**:
- TDS = (A × 1.3) + (B × 0.1) + (C × 0.5) + (D × 0.5)
- <4.75: Benign
- 4.75-5.45: Suspicious
- >5.45: Melanoma highly likely

### BCC Dermoscopic Features
- Arborizing (tree-like) vessels
- Large blue-gray ovoid nests
- Leaf-like areas
- Spoke-wheel structures
- Ulceration
- Absence of pigment network

### SCC Dermoscopic Features
- Scale/hyperkeratosis
- White structureless areas
- Keratin pearls/masses
- Hairpin/glomerular vessels
- Ulceration
- Targetoid hair follicles (AK/Bowen)

## Decision-Making Framework

### When to Biopsy
**Melanoma Concern**:
- Any lesion meeting ABCDE criteria
- "Ugly duckling" lesion
- New pigmented lesion after age 40
- Patient-reported change in existing nevus
- Dermoscopic features of melanoma

**BCC Concern**:
- Non-healing erosion or ulcer
- Pearly papule with telangiectasia
- Dermoscopic BCC features

**SCC Concern**:
- Indurated or ulcerated keratotic lesion
- Lesion arising in scar or chronic wound
- Rapidly growing nodule

### Biopsy Techniques
- **Excisional**: Preferred for suspected melanoma (narrow margins)
- **Shave**: Appropriate for elevated lesions, suspected BCC
- **Punch**: Useful for sampling flat lesions
- **Incisional**: Large lesions requiring sampling`,
      keyTerms: [
        { term: 'pigment network', definition: 'Honeycomb pattern seen in dermoscopy, indicates melanocytic lesion' },
        { term: 'blue-white veil', definition: 'Dermoscopic finding suggesting melanoma invasion or regression' },
        { term: 'arborizing vessels', definition: 'Tree-branch-like vessels, classic dermoscopic feature of BCC' },
        { term: 'TDS', definition: 'Total Dermoscopy Score - calculated score to assess melanoma probability' },
        { term: 'excisional biopsy', definition: 'Complete removal of a lesion for diagnosis, preferred for suspected melanoma' },
      ],
      clinicalNotes: 'Dermoscopy increases melanoma sensitivity from 70% to 90%. For suspected melanoma, excisional biopsy with narrow margins is preferred to avoid sampling error. Always include clinical history in biopsy requisition.',
    },
    4: {
      level: 4,
      summary: 'Advanced skin cancer detection incorporates pattern recognition algorithms, serial monitoring technologies, and understanding of atypical presentations to optimize early detection.',
      explanation: `## Advanced Dermoscopy

### Algorithm-Based Analysis

**2-Step Algorithm**:
1. Is it melanocytic? (network, aggregated globules, streaks, parallel pattern, homogeneous blue)
2. If melanocytic, is it suspicious? (apply pattern analysis)

**Revised Pattern Analysis (Argenziano)**:
- Multicomponent pattern
- Asymmetry of structures/colors
- Blue-white veil
- Atypical network
- Irregular dots/globules
- Irregular streaks
- Regression structures

**7-Point Checklist (Argenziano)**:
| Major Criteria (2 pts) | Minor Criteria (1 pt) |
|------------------------|----------------------|
| Atypical network | Irregular streaks |
| Blue-white veil | Irregular dots/globules |
| Atypical vascular pattern | Regression structures |

Score ≥3: Excise for histopathology

**CASH Algorithm** (Color, Architecture, Symmetry, Homogeneity):
- Designed for non-expert use
- Simplifies dermoscopic evaluation
- Good sensitivity with basic training

### Special Anatomic Sites

**Acral Lesions (Palms, Soles)**:
- Parallel furrow pattern: Benign
- Parallel ridge pattern: Melanoma
- Fibrillar pattern: Benign (pressure)
- Irregular diffuse pigmentation: Suspicious

**Facial Lesions**:
- Pseudo-network (normal)
- Annular-granular pattern: Lentigo maligna
- Asymmetric follicular pigmentation: Suspicious
- Rhomboidal structures: Lentigo maligna

**Nail Apparatus**:
- Hutchinson sign: Periungual pigmentation (melanoma)
- Micro-Hutchinson: Dermoscopic periungual pigment
- Gray background: Concerning
- Irregular lines: Suspicious

**Mucosal Melanoma**:
- Structureless pattern common
- Multicomponent suggests melanoma
- Blue-white veil concerning
- High index of suspicion needed

### Atypical and Difficult Presentations

**Amelanotic/Hypomelanotic Melanoma**:
- Up to 5% of melanomas
- Pink/red lesion with polymorphous vessels
- Milky-red areas
- Dotted and linear vessels
- High clinical suspicion needed

**Nodular Melanoma**:
- May lack radial growth phase features
- Blue-black color homogeneously
- Symmetric appearance possible
- EFG rule: Elevated, Firm, Growing

**Melanoma in Congenital Nevus**:
- Background of congenital nevus features
- Focal atypical areas
- Changes in existing congenital nevus
- Serial imaging crucial

### Digital Dermoscopy and Serial Imaging

**Sequential Digital Dermoscopy (SDD)**:
- Baseline dermoscopic images
- Follow-up at intervals (typically 3-12 months)
- Computer-aided comparison
- Detects subtle changes over time

**Benefits**:
- Detects featureless melanomas
- Identifies slow-growing tumors
- Reduces unnecessary biopsies
- Particularly useful for atypical mole syndrome

**Limitations**:
- May delay diagnosis if intervals too long
- Requires patient compliance
- Does not detect new lesions between visits

### Artificial Intelligence in Dermoscopy

**Deep Learning Applications**:
- Convolutional neural networks (CNNs)
- Training on large dermoscopic databases
- Performance approaching/exceeding experts
- FDA-cleared devices emerging

**Clinical Integration**:
- Decision support, not replacement
- Augments clinical judgment
- May improve access in underserved areas
- Requires validation in diverse populations

## Population-Based Screening

### Evidence for Screening
**Benefits**:
- Earlier detection of thinner melanomas
- Potential mortality reduction
- Education about self-examination

**Limitations**:
- No RCT evidence of mortality benefit
- Potential harms: Overdiagnosis, anxiety, unnecessary biopsies
- Resource-intensive

### Risk-Stratified Approach
**Very High Risk** (annual TBSE + SDD):
- Familial melanoma syndrome
- CDKN2A/CDK4 mutation carriers
- Multiple primary melanomas
- Atypical mole syndrome

**High Risk** (annual TBSE):
- Personal history of melanoma
- Dysplastic nevus syndrome
- Organ transplant recipients
- Multiple non-melanoma skin cancers

**Moderate Risk** (periodic TBSE):
- Fair skin with history of sunburns
- Family history of melanoma (first-degree relative)
- Many moles (>50)`,
      keyTerms: [
        { term: 'parallel ridge pattern', definition: 'Dermoscopic pattern on acral skin highly suspicious for melanoma' },
        { term: 'Hutchinson sign', definition: 'Periungual pigmentation extending to nail fold, suggests nail melanoma' },
        { term: 'amelanotic melanoma', definition: 'Melanoma lacking visible pigmentation, often delayed diagnosis' },
        { term: 'sequential digital dermoscopy', definition: 'Technique using serial dermoscopic imaging to detect subtle changes over time' },
        { term: 'EFG rule', definition: 'Elevated, Firm, Growing - clinical criteria concerning for nodular melanoma' },
      ],
      clinicalNotes: 'Amelanotic melanoma is frequently misdiagnosed - maintain high suspicion for any non-healing pink lesion. Sequential digital dermoscopy is particularly valuable in patients with many atypical nevi. AI tools are adjunctive, not diagnostic.',
    },
    5: {
      level: 5,
      summary: 'Expert-level skin cancer detection integrates clinical examination, advanced dermoscopy, molecular diagnostics, and understanding of evolving guidelines to optimize outcomes while minimizing unnecessary interventions.',
      explanation: `## Integrated Detection Strategies

### Multi-Modal Imaging

**Reflectance Confocal Microscopy (RCM)**:
- In vivo cellular-level imaging
- No biopsy needed for examination
- Identifies architectural and cytologic features
- Useful for equivocal dermoscopic cases
- Can guide biopsy site selection

**RCM Features of Melanoma**:
- Atypical roundish cells at DEJ
- Pagetoid infiltration
- Non-edged papillae
- Architectural disarray
- Melanophages and inflammation

**Optical Coherence Tomography (OCT)**:
- Cross-sectional imaging
- Better depth penetration than RCM
- Excellent for non-melanoma skin cancer
- BCC: Dark ovoid structures, clefting
- SCC: Architectural disruption, scale

**Multispectral Imaging**:
- MelaFind (FDA cleared)
- Analyzes lesions at multiple wavelengths
- Provides decision support for biopsy
- High sensitivity, moderate specificity

### Molecular Diagnostics

**Pigmented Lesion Assays (PLA)**:
- Gene expression analysis on tape strips
- LINC00518, PRAME expression
- Risk stratification for equivocal lesions
- High NPV - may reduce unnecessary biopsies

**Confirmatory Testing Post-Biopsy**:
- FISH for melanoma vs nevus
- CGH for copy number alterations
- Gene expression profiling (myPath Melanoma)
- Useful for histologically ambiguous lesions

### Biomarkers for Early Detection

**Circulating Biomarkers (Investigational)**:
- Circulating tumor DNA
- MicroRNAs
- Exosomes
- Protein biomarkers (S100B, MIA)
- Potential for screening/monitoring

**Genetic Risk Assessment**:
- MC1R variants: Red hair color variants, increased risk
- CDKN2A, CDK4, BAP1: Familial melanoma genes
- MITF, TERT: Moderate-risk variants
- Guides surveillance intensity

## Quality Improvement in Detection

### Diagnostic Performance Metrics
- Sensitivity: True positives identified
- Specificity: True negatives identified
- Number Needed to Biopsy (NNB)
- Melanoma-to-Nevus ratio
- Breslow thickness at diagnosis

**Benchmarks for Quality**:
- NNB for melanoma: Target <15 (expert level)
- In situ:invasive ratio trending toward more early detection
- Average Breslow thickness declining over time

### Addressing Disparities

**Racial/Ethnic Disparities**:
- Melanoma diagnosed at later stage in patients with darker skin
- Acral and mucosal melanoma more common
- Less typical locations may be missed
- Need for targeted education

**Geographic Disparities**:
- Rural areas: Less access to dermatologists
- Teledermatology expanding access
- AI tools may help in resource-limited settings
- Primary care training programs

### Medicolegal Considerations

**Documentation Requirements**:
- Lesion description (size, location, features)
- Clinical photographs when possible
- Dermoscopic findings
- Clinical reasoning for biopsy/monitoring decision

**Communication**:
- Patient counseling on warning signs
- Clear follow-up instructions
- Documentation of self-examination education
- Recall systems for high-risk patients

## Evolving Concepts

### Overdiagnosis in Melanoma
- Rising incidence without proportional mortality rise
- Some melanomas may be biologically indolent
- MPATH-Dx: Standardized pathologic classification
- Discussion of "watchful waiting" for certain in situ lesions

### Re-Defining Early Detection
- Shift from "find all melanomas" to "find harmful melanomas early"
- Risk stratification of detected melanomas
- Integration of molecular prognostic testing
- Balancing early detection with overdiagnosis

### Patient-Centered Approaches
- Shared decision-making for monitoring vs biopsy
- Risk communication tools
- Patient engagement in self-examination
- Digital health apps for lesion tracking

## Future Directions

### Technology Integration
- Smartphone dermoscopy
- AI-powered consumer apps (with caveats)
- Wearable UV monitoring
- Automated total body photography

### Precision Prevention
- Individualized risk assessment
- Tailored screening protocols
- Pharmacoprevention in high-risk individuals
- Behavioral interventions based on genetic risk

### Research Priorities
- RCTs of screening strategies
- Validation of AI in diverse populations
- Biomarker validation for early detection
- Comparative effectiveness of surveillance strategies`,
      keyTerms: [
        { term: 'reflectance confocal microscopy', definition: 'In vivo imaging technique providing cellular-level resolution without biopsy (RCM)' },
        { term: 'pigmented lesion assay', definition: 'Non-invasive gene expression test for melanoma risk stratification' },
        { term: 'number needed to biopsy', definition: 'Metric for diagnostic accuracy - biopsies performed per melanoma detected (NNB)' },
        { term: 'MPATH-Dx', definition: 'Melanocytic Pathology Assessment Tool - standardized classification for melanocytic neoplasms' },
        { term: 'overdiagnosis', definition: 'Detection of tumors that would not cause symptoms or death, leading to unnecessary treatment' },
      ],
      clinicalNotes: `Expert considerations:
1. RCM can reduce unnecessary biopsies in equivocal lesions - consider referral when available
2. Pigmented lesion assays have high NPV - useful for monitoring decisions
3. Quality metrics (NNB, thickness at diagnosis) should be tracked for continuous improvement
4. Racial disparities require awareness of atypical presentations and targeted education
5. Overdiagnosis is an emerging concern - risk stratification becoming important
6. AI tools are promising but require validation and should not replace clinical judgment
7. Patient engagement in self-examination remains cornerstone of early detection`,
    },
  },

  media: [
    {
      id: 'abcde-diagram',
      type: 'diagram',
      filename: 'abcde-melanoma-criteria.svg',
      title: 'ABCDE Criteria for Melanoma',
      description: 'Visual guide to asymmetry, border, color, diameter, and evolution criteria',
    },
    {
      id: 'dermoscopy-features',
      type: 'diagram',
      filename: 'dermoscopy-features.svg',
      title: 'Key Dermoscopic Features',
      description: 'Dermoscopic features of melanoma, BCC, and SCC',
    },
  ],

  citations: [
    {
      id: 'aad-screening',
      type: 'website',
      title: 'Skin Cancer Detection Guidelines',
      source: 'American Academy of Dermatology',
    },
    {
      id: 'ids-dermoscopy',
      type: 'textbook',
      title: 'Dermoscopy: An Illustrated Self-Assessment Guide',
      source: 'International Dermoscopy Society',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-melanoma', targetType: 'condition', relationship: 'related', label: 'Melanoma' },
    { targetId: 'dermatology-basal-cell-carcinoma', targetType: 'condition', relationship: 'related', label: 'Basal Cell Carcinoma' },
    { targetId: 'dermatology-squamous-cell-carcinoma', targetType: 'condition', relationship: 'related', label: 'Squamous Cell Carcinoma' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['oncology', 'dermatology', 'screening', 'prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default skinCancerWarningSignsContent;
