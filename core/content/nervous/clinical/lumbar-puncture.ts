/**
 * Lumbar Puncture - Clinical Educational Content
 *
 * Indications, contraindications, technique, and interpretation
 * of cerebrospinal fluid analysis.
 */

import { EducationalContent } from '../../types';

export const lumbarPuncture: EducationalContent = {
  id: 'clinical-lumbar-puncture',
  type: 'concept',
  name: 'Lumbar Puncture',
  alternateNames: ['Spinal Tap', 'LP', 'CSF Analysis', 'Spinal Puncture'],

  levels: {
    1: {
      level: 1,
      summary: 'A lumbar puncture is a procedure where a doctor uses a needle to collect fluid from around the spinal cord to test for infections or other problems.',
      explanation: `A lumbar puncture is a medical test where doctors take a small sample of the fluid that surrounds your brain and spinal cord. This fluid is called cerebrospinal fluid, or CSF for short.

**Why Doctors Do This Test:**

1. **To Check for Infections**
   - Meningitis (infection around the brain)
   - Encephalitis (infection of the brain)
   - The fluid shows what germs are causing the infection

2. **To Check for Bleeding**
   - See if there is blood in the fluid
   - Help find the cause of bleeding

3. **To Check for Other Problems**
   - Multiple sclerosis
   - Guillain-Barre syndrome
   - Some types of cancer

**How the Test Works:**

1. **Position**
   - You lie on your side with knees curled up
   - Or sit bent forward
   - This opens up the space between back bones

2. **Numbing Medicine**
   - Doctor cleans your lower back
   - Gives numbing medicine so you do not feel pain

3. **Taking the Sample**
   - Uses a thin needle between lower back bones
   - Collects a small amount of fluid
   - Takes about 10-30 minutes

4. **After the Test**
   - You lie flat for a while
   - This helps prevent headache
   - Fluid regrows quickly in your body

**Is It Safe?**

Yes, it is generally safe. The needle goes into a space below where the spinal cord ends, so it will not touch the spinal cord itself. Most people feel only pressure, not sharp pain.`,
      keyTerms: [
        { term: 'lumbar puncture', definition: 'A medical procedure to collect fluid from around the spinal cord' },
        { term: 'cerebrospinal fluid', definition: 'Clear fluid that surrounds and protects the brain and spinal cord' },
        { term: 'meningitis', definition: 'Infection and swelling of the tissues around the brain and spinal cord' },
        { term: 'spinal cord', definition: 'The bundle of nerves that runs from brain down the back' },
        { term: 'vertebrae', definition: 'The bones that make up the spine or backbone' },
      ],
      analogies: [
        'The spinal fluid is like the oil in a car engine - it cushions and protects the delicate parts inside.',
        'Doing a lumbar puncture is like using a straw to take a small sample from a big drink without spilling.',
        'The needle goes into the safety zone below where the spinal cord ends, like accessing a pipe in the basement.',
      ],
      examples: [
        'When someone has a high fever and stiff neck, doctors do a lumbar puncture to check for meningitis.',
        'The CSF sample is sent to the lab to check for bacteria, viruses, or abnormal cells.',
        'After the procedure, drinking extra fluids can help prevent headaches.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lumbar puncture is a diagnostic procedure to obtain cerebrospinal fluid for analysis, with specific indications including suspected meningitis, subarachnoid hemorrhage, and demyelinating diseases.',
      explanation: `**Indications for Lumbar Puncture:**

**Infectious:**
- Suspected meningitis or encephalitis
- Subacute/chronic meningitis (TB, fungal)
- Neurosyphilis
- CNS Lyme disease

**Hemorrhagic:**
- Suspected subarachnoid hemorrhage (if CT negative)
- Differentiate true SAH from traumatic tap

**Inflammatory/Demyelinating:**
- Multiple sclerosis (oligoclonal bands)
- Acute disseminated encephalomyelitis (ADEM)
- Guillain-Barre syndrome (albuminocytologic dissociation)

**Oncologic:**
- Suspected leptomeningeal carcinomatosis
- Primary CNS lymphoma
- Evaluation for CNS involvement in systemic cancer

**Pressure Measurement:**
- Idiopathic intracranial hypertension (pseudotumor cerebri)
- Normal pressure hydrocephalus

**Contraindications:**

**Absolute:**
- Increased intracranial pressure with mass effect (risk of herniation)
- Skin infection at puncture site

**Relative:**
- Coagulopathy or anticoagulation
- Thrombocytopenia (<50,000)
- Suspected spinal cord mass lesion
- Uncal herniation signs

**Technique:**

**Positioning:**
- Lateral decubitus with knees to chest
- Or sitting position leaning forward
- Maximize interspinous space (L4-L5 or L3-L4)

**Landmarks:**
- Line connecting iliac crests = L4 spinous process
- Aim for L3-L4, L4-L5, or L5-S1 interspace
- Spinal cord ends at L1-L2 in adults (conus medullaris)

**Procedure Steps:**
1. Informed consent
2. Position patient
3. Sterile prep and drape
4. Local anesthetic infiltration
5. Introduce spinal needle with stylet
6. Remove stylet, collect CSF
7. Measure opening pressure (if indicated)
8. Replace stylet, remove needle
9. Dressing and post-procedure care

**Opening Pressure:**
- Normal: 6-20 cm H2O (lateral decubitus)
- Elevated: >20 cm H2O
- Measure with manometer attached to needle

**CSF Tube Collection:**
- Tube 1: Chemistry (glucose, protein)
- Tube 2: Microbiology (Gram stain, culture)
- Tube 3: Cell count and differential
- Tube 4: Special studies (cytology, xanthochromia, oligoclonal bands)`,
      keyTerms: [
        { term: 'subarachnoid space', definition: 'Space between arachnoid and pia mater containing CSF' },
        { term: 'herniation', definition: 'Displacement of brain tissue due to increased pressure' },
        { term: 'xanthochromia', definition: 'Yellow discoloration of CSF indicating previous bleeding' },
        { term: 'oligoclonal bands', definition: 'Immunoglobulin patterns in CSF suggestive of MS' },
        { term: 'traumatic tap', definition: 'Blood contamination of CSF sample from needle trauma' },
      ],
      analogies: [
        'The subarachnoid space is like a water jacket surrounding the brain and spinal cord.',
        'Measuring opening pressure is like checking the water pressure in a plumbing system.',
        'A traumatic tap is like accidentally getting dirt in a water sample when collecting it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lumbar puncture involves accessing the subarachnoid space for CSF analysis, with careful attention to contraindications, technique, and interpretation including differentiating bacterial from viral meningitis.',
      explanation: `**Detailed CSF Analysis:**

**Normal CSF Values:**
- Opening pressure: 6-20 cm H2O (100-250 mm H2O)
- Appearance: Clear, colorless
- RBC count: 0-5 cells/mm3
- WBC count: 0-5 cells/mm3 (lymphocytes)
- Protein: 15-45 mg/dL
- Glucose: 50-80 mg/dL or 60-70% of serum glucose
- Lactate: 1.0-2.0 mmol/L

**Xanthochromia Assessment:**
- Yellow CSF discoloration from hemoglobin breakdown
- Indicates subarachnoid hemorrhage >2-4 hours prior
- Centrifuge CSF - xanthochromia in supernatant
- Differentiates true SAH from traumatic tap

**Meningitis CSF Profiles:**

| Parameter | Bacterial | Viral | Fungal/TB |
|-----------|-----------|-------|-----------|
| Opening pressure | Elevated | Normal/elevated | Elevated |
| Appearance | Cloudy/purulent | Clear | Clear/slightly cloudy |
| WBC count | >1000/mm3 | <500/mm3 | 100-500/mm3 |
| Predominant cell | Neutrophils | Lymphocytes | Lymphocytes |
| Protein | Elevated (>100) | Normal/slight increase | Elevated |
| Glucose | Decreased | Normal | Decreased |
| Lactate | Elevated (>4) | Normal | Elevated |

**Differentiating Traumatic Tap vs SAH:**

**Traumatic Tap:**
- Blood clears between tubes (Tube 1 > Tube 4 RBC count)
- No xanthochromia
- Blood clots may form
- CSF supernatant clear after centrifugation

**True SAH:**
- Blood does not clear between tubes
- Xanthochromia present (>2-4 hours)
- No clotting (CSF anticoagulated)

**Specialized CSF Tests:**

**Bacterial Meningitis:**
- Gram stain: Rapid identification
- Culture: Definitive diagnosis
- Latex agglutination: Rapid antigen detection
- PCR (FilmArray): Rapid pathogen identification

**Viral Studies:**
- HSV PCR: Gold standard for HSV encephalitis
- Enterovirus PCR
- West Nile virus antibodies

**Oligoclonal Bands:**
- IgG bands in CSF not present in serum
- Positive in >95% of MS patients
- Also seen in neurosyphilis, SLE, subacute sclerosing panencephalitis

**14-3-3 Protein:**
- Marker for neuronal injury
- Elevated in Creutzfeldt-Jakob disease
- Also elevated in stroke, hypoxic injury

**Complications and Management:**

**Post-LP Headache:**
- Incidence: 10-30%
- Risk factors: Young age, female, low BMI
- Due to continued CSF leak
- Treatment: Bed rest, caffeine, epidural blood patch if severe

**Infection:**
- Meningitis from contaminated equipment
- Epidural abscess (rare)
- Strict sterile technique prevents

**Bleeding:**
- Subarachnoid hemorrhage (rare)
- Spinal epidural hematoma (coagulopathy)
- Spinal subdural hematoma

**Herniation:**
- Most serious complication
- Signs: Altered consciousness, pupillary changes, decorticate posturing
- Prevent with CT before LP in high-risk patients`,
      keyTerms: [
        { term: 'albuminocytologic dissociation', definition: 'Elevated protein with normal cell count; seen in Guillain-Barre' },
        { term: 'opening pressure', definition: 'CSF pressure measured at beginning of lumbar puncture' },
        { term: 'Gram stain', definition: 'Staining technique to classify bacteria by cell wall properties' },
        { term: 'PCR', definition: 'Polymerase chain reaction; detects pathogen DNA/RNA' },
        { term: 'epidural blood patch', definition: 'Treatment for post-LP headache using autologous blood injection' },
      ],
      clinicalNotes: 'Always measure opening pressure in the lateral decubitus position with legs extended. Opening pressure measured in sitting position is artificially elevated and not diagnostically useful.',
    },
    4: {
      level: 4,
      summary: 'Advanced lumbar puncture considerations include ultrasound-guided techniques, interpretation of atypical CSF findings, management of complications, and specialized testing for autoimmune and paraneoplastic disorders.',
      explanation: `**Ultrasound-Guided Lumbar Puncture:**

**Advantages:**
- Identifies optimal interspace
- Measures depth to ligamentum flavum
- Reduces procedure attempts
- Particularly useful in obesity, spinal deformity, difficult anatomy

**Technique:**
- Curvilinear or linear probe (2-5 MHz)
- Identify midline, spinous processes, ligamentum flavum
- Mark optimal entry point and angle
- Real-time vs pre-procedure marking

**CSF Cytology:**

**Cell Count Interpretation:**
- CSF WBC >5/mm3 = pleocytosis
- RBC >1000/mm3 affects protein interpretation (add 1 mg protein per 1000 RBCs)
- Eosinophils: Parasitic, fungal, shunt infection

**Malignant Cells:**
- Leptomeningeal carcinomatosis
- Primary CNS lymphoma
- CSF cytospin vs flow cytometry

**Autoimmune and Paraneoplastic Panels:**

**Autoimmune Encephalitis Markers:**
- NMDA receptor antibodies
- LGI1, CASPR2 (VGKC-complex)
- GABA-B receptor antibodies
- AMPA receptor antibodies
- Anti-Hu, Yo, Ri (paraneoplastic)

**Multiple Sclerosis Workup:**
- Oligoclonal bands (sensitivity >95%)
- IgG index: (CSF IgG/serum IgG) / (CSF albumin/serum albumin)
- Normal IgG index <0.77
- Myelin basic protein (acute demyelination)

**Neurodegenerative Disease Markers:**

**Alzheimer Disease:**
- Amyloid-beta 42: Decreased
- Total tau: Increased
- Phosphorylated tau: Increased
- A-beta 42/40 ratio

**Creutzfeldt-Jakob Disease:**
- 14-3-3 protein: Elevated (sensitivity ~85%)
- RT-QuIC: Real-time quaking-induced conversion
- Neuron-specific enolase: Elevated

**Special Populations:**

**Pediatric Considerations:**
- Spinal cord ends lower (L3 at birth, ascends to L1-L2 by age 2)
- Use L4-L5 or L5-S1
- Smaller needle gauges (22-25G)
- Sedation often required

**Pregnancy:**
- Epidural venous engorgement increases difficulty
- Opening pressure slightly elevated
- Risk of post-dural puncture headache

**Obesity:**
- Difficult surface landmarks
- Longer needles may be needed
- Ultrasound guidance recommended

**Coagulopathy Management:**

**Anticoagulation Guidelines:**
- Warfarin: INR <1.4
- Heparin: Stop 4-6 hours before, check PTT
- LMWH: Stop 12-24 hours before (prophylactic vs therapeutic)
- Aspirin: Generally safe
- Clopidogrel: Stop 5-7 days before if possible
- DOACs: Stop 24-48 hours (renal function dependent)

**Complication Management:**

**Post-Dural Puncture Headache:**
- Pathophysiology: CSF leak lowers intracranial pressure
- Symptoms: Orthostatic headache, neck stiffness, nausea
- Conservative: Hydration, caffeine, bed rest
- Invasive: Epidural blood patch (90% effective)

**Spinal Hematoma:**
- Presentation: Back pain, progressive weakness
- Diagnosis: Emergent MRI
- Treatment: Surgical decompression within 8-12 hours`,
      keyTerms: [
        { term: 'RT-QuIC', definition: 'Real-time quaking-induced conversion; highly sensitive test for CJD' },
        { term: 'IgG index', definition: 'Calculated value to assess intrathecal IgG synthesis' },
        { term: 'pleocytosis', definition: 'Increased number of cells in CSF' },
        { term: 'leptomeningeal', definition: 'Pertaining to the pia and arachnoid mater' },
        { term: 'ligamentum flavum', definition: 'Yellow elastic ligament between adjacent vertebrae' },
      ],
      clinicalNotes: 'In patients with suspected bacterial meningitis and papilledema or focal deficits, give empiric antibiotics immediately, then obtain CT, then perform LP if no mass effect. Do not delay antibiotics for LP.',
    },
    5: {
      level: 5,
      summary: 'Expert-level lumbar puncture encompasses advanced procedural techniques, cutting-edge CSF biomarkers for neurodegenerative diseases, intrathecal medication delivery, and quality improvement in procedural safety.',
      explanation: `**Advanced Procedural Techniques:**

**Fluoroscopy-Guided Lumbar Puncture:**
- Indications: Failed landmark-guided attempts, severe scoliosis, prior spinal surgery
- Real-time visualization of needle trajectory
- Contrast injection to confirm subarachnoid placement
- Radiation exposure considerations

**Cisternal Puncture:**
- Access to cisterna magna
- Indications: Complete spinal block, spinal deformity
- Higher risk: Brainstem injury, vertebral artery puncture
- Reserved for experienced operators

**Ventricular Puncture:**
- Ommaya reservoir access
- Direct ventricular CSF sampling
- Used in leptomeningeal disease monitoring
- Hydrocephalus shunt evaluation

**Emerging CSF Biomarkers:**

**Synucleinopathies:**
- Alpha-synuclein: Reduced in Parkinson disease
- Alpha-synuclein seeding assays
- Discriminates synucleinopathies from other parkinsonism

**Alzheimer Disease Advances:**
- Neurofilament light chain (NfL): General neuronal injury marker
- YKL-40: Astrocyte activation marker
- GFAP: Reactive astrocytosis
- Neurogranin: Synaptic dysfunction

**Traumatic Brain Injury:**
- GFAP, UCH-L1: Acute biomarkers
- NfL: Prognostic for long-term outcomes
- S100B: Calcium-binding protein

**Next-Generation Sequencing:**
- Metagenomic CSF analysis
- Unbiased pathogen detection
- Identifies novel infectious agents
- Case reports of unsuspected pathogens

**Intrathecal Drug Delivery:**

**Indications:**
- Chronic pain: Ziconotide, morphine, baclofen
- Spasticity: Baclofen pump management
- Chemotherapy: Methotrexate, cytarabine, thiotepa
- Antibiotics: Fungal meningitis, resistant infections

**Baclofen Pump Management:**
- Intrathecal baclofen for severe spasticity
- Pump programming and refills
- Withdrawal and overdose management
- Emergency protocols

**Research Applications:**

**CSF Dynamics:**
- CSF production: 400-600 mL/day
- Turnover rate: 3-4 times daily
- Glymphatic system discovery
- CSF flow patterns in MRI

**Biomarker Validation:**
- Pre-analytical variables
- Standardized collection protocols
- Reference interval establishment
- Clinical utility studies

**Clinical Trial Applications:**
- Pharmacokinetic studies
- Target engagement biomarkers
- Disease modification trials
- Anti-amyloid antibody monitoring

**Quality and Safety:**

**Checklist Implementation:**
- Pre-procedure verification
- Contraindication screening
- Informed consent documentation
- Timeout procedures

**Training and Credentialing:**
- Simulation-based training
- Competency assessment tools
- Maintenance of certification
- Tele-supervised procedures

**Patient Safety Initiatives:**
- Post-LP headache prevention bundles
- Ultrasound availability
- Blood patch service availability
- Complication tracking and review

**Specialized Clinical Scenarios:**

**Idiopathic Intracranial Hypertension:**
- Opening pressure >25 cm H2O
- CSF typically normal except pressure
- Therapeutic CSF removal
- Shunt series evaluation

**Normal Pressure Hydrocephalus:**
- Opening pressure 6-18 cm H2O ("normal")
- Tap test: Remove 30-50 mL CSF
- Assess gait improvement
- Predicts shunt responsiveness

**Spontaneous Intracranial Hypotension:**
- CSF leak often at spinal level
- Opening pressure may be low or normal
- Find epidural leak on myelography
- Targeted blood patch or surgery`,
      keyTerms: [
        { term: 'cisterna magna', definition: 'Large CSF-filled space between cerebellum and medulla' },
        { term: 'glymphatic system', definition: 'Waste clearance system in the CNS using CSF' },
        { term: 'neurofilament light chain', definition: 'Component of neuronal cytoskeleton; released with axonal injury' },
        { term: 'metagenomics', definition: 'Study of genetic material from environmental samples; used for pathogen detection' },
        { term: 'alpha-synuclein', definition: 'Protein that aggregates in synucleinopathies (Parkinson, Lewy body dementia)' },
      ],
      clinicalNotes: 'Expert recommendation: Always send Tube 1 for cell count if traumatic tap suspected - comparing sequential tubes helps differentiate true SAH from iatrogenic bleeding. In suspected CJD, notify lab before sending - handle with enhanced precautions and avoid standard fixation for prion disease protocols.',
    },
  },

  media: [
    {
      id: 'lp-procedure',
      type: 'video',
      filename: 'lumbar-puncture-technique.mp4',
      title: 'Lumbar Puncture Technique',
      description: 'Step-by-step demonstration of lumbar puncture procedure',
    },
  ],

  citations: [
    {
      id: 'hasbun-meningitis',
      type: 'article',
      title: 'Computed Tomography of the Head before Lumbar Puncture in Adults with Suspected Meningitis',
      authors: ['Hasbun, R.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'cfp-lp-guidelines',
      type: 'textbook',
      title: 'Lumbar Puncture: Indications, Contraindications, Technique, and Complications',
      source: 'Clinical Procedures',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'related', label: 'Neurological Examination' },
    { targetId: 'clinical-eeg-basics', targetType: 'concept', relationship: 'related', label: 'EEG Basics' },
    { targetId: 'pathology-cns-infections', targetType: 'condition', relationship: 'related', label: 'CNS Infections' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['clinical', 'procedure', 'diagnostics'],
    keywords: ['lumbar puncture', 'CSF', 'meningitis', 'spinal tap', 'cerebrospinal fluid'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lumbarPuncture;
