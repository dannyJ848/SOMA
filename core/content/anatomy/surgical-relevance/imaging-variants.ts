/**
 * Imaging Variants - Surgical Relevance
 *
 * Anatomical variations that are identified through medical imaging
 * and their interpretation for surgical planning and diagnosis.
 */

import { EducationalContent } from '../../types';

export const IMAGING_VARIANTS: EducationalContent = {
  id: 'anatomy-surgical-imaging-variants',
  type: 'topic',
  name: 'Imaging Variants',
  alternateNames: ['Radiological Variants', 'Imaging Findings Variants', 'Radiographic Anomalies'],

  levels: {
    1: {
      level: 1,
      summary: 'Imaging variants are normal differences in body structure that show up on X-rays, CT scans, MRIs, and other medical tests but are not diseases or problems.',
      explanation: `**What Are Imaging Variants?**

When doctors take pictures of the inside of your body using X-rays, CT scans, MRIs, or other imaging tests, they sometimes see things that look different from what they expect. These differences are called imaging variants.

**Important Points:**

- They are normal variations, not diseases
- They don't usually cause symptoms or health problems
- Everyone's body is a little different inside
- Doctors learn to recognize these normal differences

**Why Do They Matter?**

Imaging variants are important because:

- Doctors need to know they're normal so they don't worry unnecessarily
- They shouldn't be confused with actual diseases or problems
- They might be important to know about before surgery
- They help doctors understand your unique anatomy

**Common Examples of Imaging Variants:**

**Bones:**
- Extra small bones that not everyone has
- Bones that are naturally fused together
- Slightly different shapes or sizes
- Extra ribs

**Organs:**
- Organs in slightly different positions
- Different shapes of organs
- Extra pieces of organs
- Some organs that are larger or smaller than average

**Blood Vessels:**
- Blood vessels that take different paths
- Extra branches coming off arteries
- Veins in different positions than usual

**Brain:**
- Slightly different shapes of brain structures
- Extra fluid spaces that are normal
- Different patterns of blood vessels

**How Do Radiologists Tell the Difference?**

Radiologists (doctors who specialize in reading imaging) can tell imaging variants from actual problems by:

- **Appearance**: Variants have smooth, regular edges
- **Location**: They appear in predictable places
- **Bilateral**: Often affect both sides similarly
- **Stability**: Don't change over time
- **Context**: Fit with other normal findings`,

      keyTerms: [
        { term: 'imaging variant', definition: 'A normal difference seen on medical imaging that is not a disease' },
        { term: 'radiologist', definition: 'A doctor who specializes in reading and interpreting medical images' },
        { term: 'incidental finding', definition: 'Something found by accident while looking for something else' },
        { term: 'bilateral', definition: 'Affecting both sides of the body' },
      ],

      analogies: [
        'Imaging variants are like different architectural styles in houses - they all work but look different.',
        'Think of imaging variants like different handwriting styles - unique but still perfectly readable.',
      ],

      examples: [
        'A small extra bone in the wrist that many people have.',
        'A liver that extends further down than usual.',
        'A slight curve in the spine that\'s normal for that person.',
      ],

      patientCounselingPoints: [
        'If your radiologist mentions a variant, it\'s usually just noting your unique anatomy.',
        'Variants are documented so future doctors know they\'re normal for you.',
        'Very few variants need any treatment or special follow-up.',
      ],
    },

    2: {
      level: 2,
      summary: 'Imaging variants are anatomical variations detected on radiological studies that represent normal anatomical diversity but must be distinguished from pathological findings to avoid misdiagnosis and unnecessary intervention.',
      explanation: `**Definition and Significance**

Imaging variants are normal anatomical variations identified on medical imaging. Their recognition is crucial because they:
- Can mimic pathological conditions
- May cause unnecessary additional testing
- Should be documented for future reference
- Sometimes become clinically relevant

**Pitfalls in Imaging Interpretation:**

| Variant | Can Be Mistaken For | Distinguishing Features |
|---------|---------------------|------------------------|
| Wormian bones | Skull fractures | Regular margins, symmetric |
| Bipartite patella | Fracture | Smooth margins, typical location |
| Os acromiale | Fracture | Correlate with plain films |
| Accessory navicular | Fracture | Cortical continuity |
| Epidural fat vs. epidural hematoma | Hematoma | Fat density, follow-up |

**Imaging Modalities and Variant Detection:**

**Radiography:**
- Skeletal variants most common
- Limited soft tissue characterization
- Comparison views helpful
- Incidental findings frequent

**Computed Tomography (CT):**
- Excellent anatomical detail
- Vascular variants well seen
- Multiplanar reconstruction
- Contrast enhances vascular anatomy

**Magnetic Resonance (MRI):**
- Soft tissue characterization
- Neural variants
- Ligament and tendon variants
- No radiation

**Ultrasound:**
- Real-time assessment
- Vascular flow patterns
- Pediatric imaging (no radiation)
- Operator dependent

**Common System-Specific Variants:**

**Musculoskeletal:**

| Variant | Imaging | Clinical |
|---------|---------|----------|
| Accessory ossicles | X-ray/CT | May become symptomatic |
| Bipartite patella | X-ray | Don't confuse with fracture |
| Os trigonum | X-ray/CT | Posterior impingement |
| Cervical rib | X-ray/CT | Thoracic outlet |
| Sesamoid variants | X-ray | Usually incidental |

**Cardiothoracic:**

| Variant | Imaging | Clinical |
|---------|---------|----------|
| Azygos lobe | CXR/CT | Usually asymptomatic |
| Cardiac bronchus | CT | Usually asymptomatic |
| Vascular variants | CTA | Surgical planning |
| Coronary anomalies | CTA | Some malignant |
| Aortic arch variants | CTA | Usually asymptomatic |`,

      keyTerms: [
        { term: 'pitfall', definition: 'Mistake or error in interpretation, especially confusing normal for abnormal' },
        { term: 'epidural', definition: 'Space outside the dura mater in the spinal canal' },
        { term: 'cortical continuity', definition: 'Unbroken cortex; normal bone surface continues across variant' },
        { term: 'CTA', definition: 'CT angiography; CT imaging with contrast to visualize blood vessels' },
        { term: 'CXR', definition: 'Chest X-ray' },
      ],

      analogies: [
        'Imaging pitfalls are like optical illusions - what you see at first might not be what\'s actually there.',
        'The azygos lobe is like a separate apartment in an apartment building - different unit but same building.',
      ],

      clinicalNotes: 'Comparison with prior imaging is essential to document stability. Incidental findings should be reported with recommendation for clinical correlation rather than additional imaging in most cases. Clear communication of variant vs. pathology helps avoid unnecessary workup.',
    },

    3: {
      level: 3,
      summary: 'Imaging variants encompass the spectrum of normal anatomical variation visualized across different imaging modalities, requiring systematic recognition, characterization, and appropriate reporting to prevent misdiagnosis and unnecessary intervention.',
      explanation: `**Systematic Approach to Imaging Variants:**

*Recognition Patterns:*

**Location-Specific Variants:**
- **Expected locations**: Variants occur in predictable sites
- **Bilateral symmetry**: Often affect both sides
- **Smooth margins**: Unlike pathological processes
- **Cortical continuity**: Maintained in skeletal variants
- **Fat/signal characteristics**: Match expected tissue type

**Modality-Specific Findings:**

*CT Characteristics:*
- **Attenuation values**: Match tissue type
- **Enhancement patterns**: Similar to normal tissue
- **No mass effect**: Don't displace structures
- **No inflammation**: No surrounding stranding

*MRI Characteristics:*
- **Signal characteristics**: Match expected tissue
- **No diffusion restriction**: Unlike abscess/tumor
- **No enhancement**: Unless normally enhancing
- **Anatomical continuity**: Connects to normal structures

**Detailed System-Specific Variants:**

*Neurological Imaging:*

**Normal CSF Spaces:**
- **Virchow-Robin spaces**: Perivascular spaces
  - Location: Basal ganglia, midbrain
  - Appearance: CSF density/signal
  - Distinguish from: Lacunar infarcts

- **Pineal cysts**: Common incidental
  - Size: Usually <1 cm
  - Characteristics: CSF-like signal
  - Follow-up: If >1 cm or symptomatic

- **Arachnoid cyst**: CSF-filled sac
  - Location: Temporal fossa common
  - Distinguish from: Epidermoid
  - Treatment: Usually none needed

**Vascular Imaging:**

*Normal Variants:*
- **Developmental venous anomaly (DVA)**:
  - Caput medusae appearance
  - Drains into normal vein
  - Don't disturb (surgery)

- **Cavernous malformation**:
  - Popcorn appearance
  - No flow voids (unlike AVM)
  - May bleed (unlike DVA)

- **Vertebral artery dominance**:
  - One side larger
  - Common variant
  - Surgical relevance

**Abdominal Imaging:**

*Hepatic Variants:*
- **Focal fatty sparing**: In fatty liver
  - Location: Adjacent to gallbladder
  - Appearance: Normal liver attenuation
  - Distinguish from: Mass

- **Perfusion variations**:
  - Temporary differences on arterial phase
  - Uniform on portal venous phase

- **Replaced hepatic artery**: CTA
  - Identify before surgery
  - Affects surgical planning

**Renal Variants:**
- **Renal column hypertrophy**:
  - Normal renal tissue
  - Mimics mass
  - Same enhancement as kidney

- **Dromedary hump**: Left kidney
  - Focal bulge laterally
  - Normal parenchyma
  - Don't confuse with tumor

- **Horseshoe kidney**:
  - Isthmus across midline
  - Malrotation
  - Increased stone risk

**Musculoskeletal Imaging:**

**Skeletal Variants:**
- **Unfused ossification centers**:
  - Apophyses in children
  - Don't confuse with fracture
  - Correlate with age

- **Accessory ossicles**:
  - Multiple locations
  - Smooth cortical margins
  - Bilateral in many cases

- **Sesamoid bones**:
  - Normal in specific locations
  - Bipartite (two pieces) common
  - Symptomatic if enlarged`,
      keyTerms: [
        { term: 'Virchow-Robin spaces', definition: 'Perivascular spaces that follow penetrating vessels in brain' },
        { term: 'lacunar infarct', definition: 'Small deep brain infarct; can be confused with VR spaces' },
        { term: 'DVA', definition: 'Developmental venous anomaly; abnormal vein arrangement' },
        { term: 'caput medusae', definition: 'Medusa head appearance; describes DVA venous pattern' },
        { term: 'apophysis', definition: 'Growth center in bone that doesn\'t contribute to length' },
      ],

      analogies: [
        'A DVA is like a cluster of small streams feeding into a larger river - unusual looking but still drains properly.',
        'Perfusion variants are like traffic patterns that temporarily look different but still flow normally.',
      ],

      clinicalNotes: 'DVA should never be surgically disturbed as they provide venous drainage for normal brain tissue. Arachnoid cysts only require treatment if symptomatic or causing mass effect. Focal fatty sparing can be confirmed with fat-suppressed sequences.',
    },

    4: {
      level: 4,
      summary: 'Imaging variants require systematic recognition using modality-specific criteria, understanding of anatomical embryology, and correlation with clinical context to prevent misdiagnosis and inappropriate management.',
      explanation: `**Advanced Imaging Interpretation:**

*Standardized Reporting:*

**Structured Terminology:**
- **Clearly identify**: State "variant" not "incidental finding"
- **Describe appearance**: Distinguishing features
- **Recommend**: Follow-up vs. reassurance
- **Document**: For future reference

**Reporting Categories:**
1. **No action needed**: Document as normal variant
2. **Clinical correlation**: May be relevant
3. **Follow-up suggested**: Document stability
4. **Further evaluation**: Rare for true variants

**Imaging Protocols for Variant Recognition:**

*CT Angiography Protocols:*

**Timing Considerations:**
- **Arterial phase**: Best for arterial variants
- **Portal venous**: Best for venous variants
- **Delayed phase**: Some vascular anomalies

**3D Reconstruction:**
- **Volume rendering**: Spatial relationships
- **MIP (Maximum intensity projection)**: Vascular detail
- **Multiplanar**: All planes evaluated

*MRI Protocols:*

**Sequences for Variant Characterization:**
- **T1**: Anatomical detail
- **T2**: Fluid characterization
- **DWI**: Distinguish tumor vs. variant
- **Fat suppression**: Confirm fat content
- **Contrast**: Enhancement patterns

**Special Situations:**

**Oncologic Imaging:**

*Treatment Response:*
- **Baseline**: Document variants before treatment
- **Follow-up**: Don't confuse variant with progression
- **Stability**: Key distinguishing feature

**Variants vs. Metastases:**
| Feature | Variant | Metastasis |
|---------|---------|------------|
| Growth | None | Progressive |
| Enhancement | Pattern matches tissue | Different |
| FDG uptake | Usually absent | Present |
| Symptoms | Absent | May be present |

**Trauma Imaging:**

**Acute vs. Chronic:**
- **Fracture vs. accessory bone**:
  - Fracture: Irregular margins, soft tissue swelling
  - Accessory: Smooth, chronic appearance

- **Hemorrhage vs. variant**:
  - Hemorrhage: Acute symptoms, evolves over time
  - Variant: Stable, asymptomatic

**Post-Surgical Changes:**

**Expected Findings:**
- **Surgical clips**: Cause artifact
- **Anatomical distortion**: From retraction
- **Fluid collections**: Expected for weeks
- **Scarring**: Evolves over months

**Don't Confuse:**
- **Recurrent disease vs. post-op change**
- **Granulation tissue vs. residual tumor**
- **Fluid collection vs. lymphocele vs. urinoma

**Emerging Techniques:**

**Dual-Energy CT:**
- **Material decomposition**: Distinguish tissue types
- **Virtual non-contrast**: Characterize enhancement
- **Kidney stone characterization**: Composition
- **Gout**: Urate crystal identification

**Functional MRI:**
- **Perfusion**: Distinguish tumor types
- **Diffusion**: Cellularity assessment
- **Spectroscopy**: Chemical composition

**Artificial Intelligence:**

**Variant Recognition:**
- **Machine learning**: Pattern recognition
- **Automated detection**: Consistent interpretation
- **Reduced variability**: Standardized reporting
- **Training**: Large annotated datasets

**Decision Support:**
- **Differential diagnosis**: Suggest possibilities
- **Follow-up recommendations**: Evidence-based
- **Risk stratification**: Clinical correlation`,
      keyTerms: [
        { term: 'MIP', definition: 'Maximum intensity projection; displays highest voxel values' },
        { term: 'FDG', definition: 'Fluorodeoxyglucose; radiotracer used in PET imaging' },
        { term: 'dual-energy CT', definition: 'CT using two different X-ray energies for material characterization' },
        { term: 'material decomposition', definition: 'Separating materials based on energy-dependent attenuation' },
        { term: 'spectroscopy', definition: 'Analysis of chemical composition using MRI signals' },
      ],

      analogies: [
        'Dual-energy CT is like having two different cameras that see different colors - together they tell you what things are made of.',
        'MIP is like looking through fog and only seeing the brightest streetlights - it shows the most intense signals.',
      ],

      clinicalNotes: 'Standardized reporting using clear terminology reduces confusion. Comparison with prior imaging is essential for documenting stability. AI is increasingly used for variant detection but human oversight remains critical.',
    },

    5: {
      level: 5,
      summary: 'Imaging variants represent the intersection of anatomical diversity and radiological interpretation, requiring systematic approaches, advanced imaging techniques, and artificial intelligence to optimize diagnostic accuracy and clinical management.',
      explanation: `**Future Directions in Imaging Variants:**

*Artificial Intelligence Applications:*

**Deep Learning for Variant Recognition:**
- **Convolutional neural networks**: Image analysis
- **Training datasets**: Large annotated collections
- **Validation**: Multi-institutional studies
- **Implementation**: Integration into PACS workflow

**Automated Reporting:**
- **Structured reports**: Consistent terminology
- **Standardized recommendations**: Evidence-based
- **Quality assurance**: Peer comparison
- **Outcomes tracking**: Patient-centered

**Advanced Imaging Technologies:**

**Photon-Counting CT:**
- **Energy resolution**: Material discrimination
- **Reduced noise**: Better low-contrast detection
- **Higher resolution**: Small detail visualization
- **Spectral imaging**: Routine material separation

**7T MRI:**
- **Improved resolution**: Microscopic detail
- **Better SNR**: Signal-to-noise ratio
- **Advanced sequences**: Novel applications
- **Research phase**: Clinical translation ongoing

**Multimodal Integration:**

**PET/MRI:**
- **Metabolic + anatomic**: Combined information
- **Soft tissue + function**: Comprehensive assessment
- **Radiation reduction**: Compared to PET/CT
- **Oncologic applications**: Staging and response

**PET/CT Improvements:**
- **Time-of-flight**: Better localization
- **Resolution**: Improved detector technology
- **Quantification**: Standardized uptake values
- **Artificial intelligence**: Image reconstruction

**Database and Knowledge Sharing:**

**Variant Registries:**
- **Population data**: Prevalence by demographic
- **Clinical correlation**: Symptom association
- **Outcome tracking**: Long-term follow-up
- **Research resource**: Multi-institutional

**Standardized Terminology:**
- **RadLex**: Radiology lexicon
- **DICOM**: Imaging standards
- **RSNA**: Radiology Society efforts
- **Integration**: EHR compatibility

**Clinical Decision Support:**

**Appropriateness Criteria:**
- **Variant documentation**: Avoid repeat imaging
- **Follow-up recommendations**: Evidence-based
- **Incidental findings**: Consensus guidelines
- **Cost-effectiveness**: Resource utilization

**Patient Communication:**

**Report Wording:**
- **Clear language**: Patient-understandable
- **Avoid anxiety**: Reassure when variant
- **Action items**: Clear next steps
- **Resources**: Educational materials

**Challenges and Solutions:**

**Overdiagnosis:**
- **Problem**: Finding variants leads to more testing
- **Solution**: Clear communication of benign nature
- **Education**: Primary physician understanding
- **Guidelines**: Consensus recommendations

**Variability:**
- **Problem**: Different radiologist interpretations
- **Solution**: AI assistance, standardized reporting
- **Quality improvement**: Peer review, feedback
- **Training**: Continuing medical education

**Liability Concerns:**
- **Problem**: Missed diagnosis vs. overcalling variants
- **Solution**: Clear documentation, clinical correlation
- **Support**: Expert consultation when uncertain
- **Documentation**: Decision-making process

**Global Health Perspectives:**

**Resource-Limited Settings:**
- **Challenge**: Limited advanced imaging
- **Solution**: Focus on common variants
- **Training**: Basic variant recognition
- **Referral**: Complex cases to centers

**Telemedicine:**
- **Remote interpretation**: Expert availability
- **Teleradiology**: Global coverage
- **Quality**: Maintain standards
- **Education**: Knowledge transfer`,

      keyTerms: [
        { term: 'PACS', definition: 'Picture Archiving and Communication System; medical imaging storage and display' },
        { term: 'convolutional neural network', definition: 'Deep learning architecture for image analysis' },
        { term: 'photon-counting CT', definition: 'CT detector technology counting individual X-ray photons' },
        { term: 'RadLex', definition: 'Standardized lexicon for radiology terminology' },
        { term: 'appropriateness criteria', definition: 'Evidence-based guidelines for imaging test selection' },
      ],

      clinicalNotes: 'AI is transforming radiology but requires careful validation and human oversight. Standardized reporting reduces variability and improves communication. Global teleradiology requires understanding of regional variations in both anatomy and imaging practices. Patient-centered communication about incidental findings is essential to avoid anxiety and unnecessary follow-up.',
    },
  },

  media: [
    {
      id: 'imaging-variants-1',
      type: 'diagram',
      filename: 'common-imaging-variants.svg',
      title: 'Common Imaging Variants',
      description: 'Frequently encountered normal variants across imaging modalities',
    },
    {
      id: 'imaging-variants-2',
      type: 'diagram',
      filename: 'dva-vs-cavernoma.svg',
      title: 'Vascular Variants vs. Malformations',
      description: 'Comparison of DVA, cavernoma, and AVM imaging characteristics',
    },
  ],

  citations: [
    {
      id: 'brant-imaging',
      type: 'textbook',
      title: 'Fundamentals of Diagnostic Radiology',
      source: 'Brant & Helms, Fundamentals of Diagnostic Radiology, 5th Edition',
      license: 'Copyrighted',
    },
    {
      id: 'webb-variants',
      type: 'textbook',
      title: 'Normal Variants and Pitfalls',
      source: 'Thoracic Imaging, Webb, 3rd Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-anomalies-normal-variation', targetType: 'topic', relationship: 'related', label: 'Normal Variation' },
    { targetId: 'radiology-ct', targetType: 'topic', relationship: 'related', label: 'CT Imaging' },
    { targetId: 'radiology-mri', targetType: 'topic', relationship: 'related', label: 'MRI' },
  ],

  tags: {
    systems: ['all'],
    structures: [],
    topics: ['radiology', 'imaging', 'anatomical variants', 'diagnosis'],
    keywords: ['imaging variants', 'radiological findings', 'incidental findings', 'CT', 'MRI', 'radiography'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['radiology'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
