/**
 * Neurological Red Flags
 *
 * Warning signs indicating serious neurological conditions requiring urgent evaluation.
 */

import { EducationalContent } from '../../types';

export const neurologicalRedFlagsContent: EducationalContent = {
  id: 'neurological-red-flags',
  type: 'concept',
  name: 'Neurological Red Flags',
  alternateNames: ['Neuro Warning Signs', 'Serious Neurological Symptoms', 'Neurological Emergencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Neurological red flags are warning signs that something serious might be wrong with the brain, spine, or nerves and need emergency medical attention.',
      explanation: `Your brain and nerves control everything your body does. Some symptoms are warning signs that something serious is happening and you need help right away.

**Call 911 Immediately For:**

**Sudden Severe Headache**
If you get the "worst headache of your life" suddenly, like a thunderclap. This can mean bleeding in the brain.

**Weakness on One Side**
If your face droops on one side, or your arm or leg becomes weak or numb on one side. This can be a stroke.

**Trouble Speaking**
If you suddenly cannot talk clearly, slur your words, or cannot understand what others are saying. This is a stroke warning sign.

**Vision Changes**
Sudden vision loss in one or both eyes, or double vision. This can mean a stroke or serious brain problem.

**Sudden Confusion**
If someone becomes confused suddenly, cannot recognize people, or does not know where they are.

**Severe Neck Stiffness with Fever**
A very stiff neck along with high fever and headache can mean meningitis, a serious infection around the brain.

**Seizure**
Shaking or convulsions that the person cannot control, especially if it is their first seizure or lasts more than 5 minutes.

**Loss of Consciousness**
Passing out and not waking up, or repeated episodes of passing out.

**Remember FAST for Stroke:**
- **F**ace drooping
- **A**rm weakness
- **S**peech difficulty
- **T**ime to call 911`,
      keyTerms: [
        { term: 'stroke', definition: 'When blood flow to part of the brain is cut off, damaging brain cells' },
        { term: 'seizure', definition: 'Sudden, uncontrolled electrical activity in the brain causing shaking or convulsions' },
        { term: 'meningitis', definition: 'Serious infection of the membranes surrounding the brain and spinal cord', pronunciation: 'men-in-JY-tis' },
        { term: 'paralysis', definition: 'Loss of ability to move part of the body' },
      ],
      analogies: [
        'Neurological red flags are like warning lights on a spaceship control panel - they tell you that critical systems need immediate attention.',
        'They are like storm warnings - when you see them, you need to take shelter immediately because dangerous conditions are developing.',
      ],
      examples: [
        'A person whose face suddenly droops on one side and cannot lift their arm should call 911 immediately - these are classic stroke signs.',
        'Someone who wakes up with the worst headache of their life needs emergency evaluation - this could be a brain bleed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Neurological red flags indicate potentially life-threatening conditions affecting the brain, spinal cord, or peripheral nervous system requiring immediate emergency evaluation and intervention.',
      explanation: `Neurological emergencies can cause permanent disability or death if not promptly recognized and treated. Understanding these red flags is essential for timely intervention.

**Major Neurological Emergencies:**

**1. Stroke (Brain Attack)**
Types:
- Ischemic (85%): Blocked blood vessel
- Hemorrhagic (15%): Bleeding in brain

Red flags:
- Sudden weakness or numbness (face, arm, leg, especially unilateral)
- Sudden confusion or trouble speaking/understanding
- Sudden vision problems (one or both eyes)
- Sudden trouble walking, dizziness, loss of balance
- Sudden severe headache

**2. Subarachnoid Hemorrhage**
Bleeding around the brain, often from aneurysm rupture.
Red flags:
- "Thunderclap" headache (sudden, severe)
- "Worst headache of my life"
- Neck stiffness
- Loss of consciousness
- Seizure

**3. Meningitis/Encephalitis**
Infection/inflammation of brain coverings or brain tissue.
Red flags:
- Severe headache with fever
- Neck stiffness (meningismus)
- Photophobia (light sensitivity)
- Altered mental status
- Rash (meningococcal)

**4. Status Epilepticus**
Seizure lasting >5 minutes or recurrent seizures without recovery.
Red flags:
- Continuous seizure activity
- Prolonged post-ictal confusion
- Respiratory compromise

**5. Spinal Cord Compression**
Red flags:
- Back pain with neurological deficits
- Saddle anesthesia (numbness in perineal area)
- Urinary retention or incontinence
- Leg weakness
- Hyperreflexia

**6. Acute Glaucoma**
Red flags:
- Severe eye pain
- Blurred vision/halos
- Headache
- Nausea/vomiting
- Fixed, mid-dilated pupil

**7. Guillain-Barre Syndrome**
Red flags:
- Ascending weakness
- Areflexia
- Respiratory muscle involvement
- Recent infection (often Campylobacter)

**The FAST Assessment for Stroke:**
- **F**ace: Ask to smile - look for asymmetry
- **A**rms: Ask to raise both arms - look for drift
- **S**peech: Ask to repeat phrase - listen for slurring
- **T**ime: Note onset time, call 911 immediately

**Time-Critical Interventions:**
- Stroke thrombolysis: Within 4.5 hours (some extend to 24h)
- Stroke thrombectomy: Up to 24 hours for large vessel occlusion
- Bacterial meningitis: Antibiotics within 30 minutes
- Status epilepticus: Benzodiazepines immediately`,
      keyTerms: [
        { term: 'ischemic stroke', definition: 'Stroke caused by blockage of blood flow to the brain', pronunciation: 'is-KEE-mik' },
        { term: 'hemorrhagic stroke', definition: 'Stroke caused by bleeding in or around the brain', pronunciation: 'hem-uh-RAJ-ik' },
        { term: 'subarachnoid hemorrhage', definition: 'Bleeding into the space between the brain and the skull (SAH)' },
        { term: 'meningismus', definition: 'Signs of meningeal irritation, particularly neck stiffness', pronunciation: 'men-in-JIZ-mus' },
        { term: 'status epilepticus', definition: 'Medical emergency of prolonged or recurrent seizures without recovery', pronunciation: 'ep-ih-LEP-tih-kus' },
      ],
      analogies: [
        'A stroke is like a power outage in the brain - when blood flow stops, brain cells immediately begin to suffer damage, and the sooner power is restored, the less permanent damage occurs.',
        'Neurological red flags are like the emergency brake in a car - when they appear, you must stop everything and address the problem immediately.',
      ],
      examples: [
        'A patient with sudden left-sided weakness, facial droop, and aphasia presenting within 4 hours may be a candidate for thrombolytic therapy.',
        'Someone with thunderclap headache and meningismus requires immediate CT and lumbar puncture to rule out SAH and meningitis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Neurological red flags represent clinical features indicating acute cerebrovascular events, central nervous system infections, increased intracranial pressure, or spinal emergencies requiring immediate diagnostic evaluation and time-sensitive therapeutic intervention.',
      explanation: `## Neurological Emergency Recognition

### Stroke Recognition and Evaluation

**Ischemic Stroke Patterns:**

| Artery Territory | Clinical Features |
|------------------|-------------------|
| MCA (middle cerebral) | Face/arm > leg weakness, aphasia (dominant), neglect (non-dominant) |
| ACA (anterior cerebral) | Leg > arm weakness, abulia, urinary incontinence |
| PCA (posterior cerebral) | Visual field deficits, memory loss, alexia |
| Vertebrobasilar | Ataxia, diplopia, dysphagia, crossed signs |
| Lacunar | Pure motor, pure sensory, ataxic-hemiparesis, dysarthria-clumsy hand |

**Hemorrhagic Stroke Features:**
- Sudden onset with headache
- Decreased consciousness
- Nausea/vomiting
- Location-specific findings

**Stroke Mimics:**
- Seizure with Todd paralysis
- Hypoglycemia
- Migraine with aura
- Functional neurological disorder
- Conversion disorder

### Subarachnoid Hemorrhage

**Clinical Presentation:**
- Thunderclap headache (sudden, severe, peaks in seconds)
- Meningismus (neck stiffness)
- Photophobia
- Decreased consciousness
- Seizure (in 20%)

**Diagnostic Workup:**
1. Non-contrast head CT (sensitivity >95% within 6 hours)
2. If CT negative but high suspicion: Lumbar puncture
   - Xanthochromia (yellow CSF) indicates SAH
   - RBC count (no clearing in tube 4 vs tube 1)
3. CTA or DSA for aneurysm identification

**Hunt-Hess Classification:**
- Grade 1: Asymptomatic or mild headache
- Grade 2: Moderate-severe headache, meningismus, no deficit
- Grade 3: Drowsy/confused, mild focal deficit
- Grade 4: Stupor, moderate-severe hemiparesis
- Grade 5: Coma, decerebrate posturing

### Meningitis vs. Encephalitis

**Bacterial Meningitis:**
- Sudden onset
- High fever, severe headache
- Meningismus
- Altered mental status
- Petechial rash (meningococcus)
- CSF: Elevated WBC (neutrophils), low glucose, high protein

**Viral Meningitis:**
- Subacute onset
- Lower fever
- Less altered mental status
- CSF: Elevated WBC (lymphocytes), normal glucose

**Encephalitis:**
- Altered mental status prominent
- Focal neurological deficits
- Seizures common
- HSV: Temporal lobe involvement on MRI

**Management Priorities:**
- Blood cultures before antibiotics
- Dexamethasone before or with antibiotics
- Empiric antibiotics within 30 minutes
- Acyclovir for suspected HSV

### Increased Intracranial Pressure

**Signs and Symptoms:**
- Headache (worse with Valsalva, supine)
- Nausea/vomiting (often projectile)
- Papilledema (on fundoscopy)
- Altered mental status
- Cushing triad (late): Hypertension, bradycardia, irregular respiration

**Herniation Syndromes:**
- Uncal: Ipsilateral blown pupil, contralateral hemiparesis
- Central: Coma, small pupils, Cheyne-Stokes respiration
- Tonsillar: Cardiac/respiratory arrest

**Immediate Management:**
- Head elevation 30 degrees
- Hyperventilation (temporizing)
- Mannitol or hypertonic saline
- Neurosurgical consultation

### Spinal Cord Compression

**Red Flags for Cauda Equina Syndrome:**
- Saddle anesthesia
- Urinary retention (>500mL post-void residual)
- Overflow incontinence
- Bilateral leg weakness/pain
- Reduced anal tone

**Emergency MRI Indicated:**
- New back pain with neurological deficits
- History of cancer with back pain
- Fever with back pain (epidural abscess)

**Time-Sensitive:**
- Surgical decompression within 48 hours optimizes outcomes
- Steroids for malignant compression`,
      keyTerms: [
        { term: 'xanthochromia', definition: 'Yellow discoloration of cerebrospinal fluid indicating prior bleeding', pronunciation: 'zan-tho-KRO-mee-uh' },
        { term: 'papilledema', definition: 'Swelling of the optic disc due to increased intracranial pressure', pronunciation: 'pap-ih-lee-DEE-muh' },
        { term: 'Cushing triad', definition: 'Signs of severe increased ICP: hypertension, bradycardia, irregular respiration' },
        { term: 'cauda equina', definition: 'Bundle of nerves at the end of the spinal cord; compression causes bowel/bladder dysfunction', pronunciation: 'KAW-duh EE-kwye-nuh' },
        { term: 'herniation', definition: 'Displacement of brain tissue due to increased pressure; life-threatening', pronunciation: 'her-nee-AY-shun' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced neurological emergency management requires integration of sophisticated neuroimaging interpretation, selection of appropriate therapeutic interventions based on stroke phenotyping, and recognition of atypical presentations in special populations.',
      explanation: `## Advanced Neurological Emergency Management

### Stroke Imaging and Intervention

**CT and CTA Protocols:**

**Non-contrast CT:**
- Rules out hemorrhage
- Early ischemic signs: Hyperdense MCA sign, loss of insular ribbon
- ASPECTS score for early ischemic change

**CT Angiography:**
- Identifies large vessel occlusion (LVO)
- Guides thrombectomy decisions
- Collateral assessment

**CT Perfusion:**
- Ischemic core vs. penumbra
- Selection for extended window thrombectomy
- RAPID software analysis

**MRI in Acute Stroke:**
- DWI: Detects ischemia within minutes
- FLAIR: Estimates onset time (DWI-FLAIR mismatch)
- GRE/SWI: Microhemorrhages

**Thrombectomy Selection:**

**DAWN Trial Criteria (6-24 hours):**
- Clinical-imaging mismatch
- Small core + disabling deficit
- Age-adjusted NIHSS thresholds

**DEFUSE 3 Criteria (6-16 hours):**
- Target mismatch profile
- Core <70mL
- Penumbra/core ratio >1.8

**NIH Stroke Scale:**
- Standardized neurological assessment
- Guides treatment decisions
- Predicts outcomes
- Range 0-42 (severe >20)

### Subarachnoid Hemorrhage Management

**Initial Stabilization:**
- Blood pressure control (systolic <140-160)
- Nimodipine (prevents vasospasm)
- Seizure prophylaxis (controversial)
- Neurosurgical/neurointerventional consultation

**Definitive Treatment:**
- Endovascular coiling (preferred for many aneurysms)
- Surgical clipping
- Consider aneurysm morphology, location, patient factors

**Vasospasm Management:**
- Peak risk: Days 3-14
- Triple-H therapy (hypertension, hypervolemia, hemodilution)
- Endovascular intervention if refractory

### Status Epilepticus Protocol

**Time-Phased Treatment:**

**Phase 1 (0-5 minutes):**
- Benzodiazepines: Lorazepam 4mg IV or Midazolam 10mg IM
- Airway protection, oxygen

**Phase 2 (5-20 minutes):**
- Anti-epileptic: Levetiracetam 60mg/kg or Fosphenytoin 20mg/kg
- Alternative: Valproic acid

**Phase 3 (20-40 minutes):**
- Refractory status: Anesthetic agents
- Propofol or midazolam infusion
- ICU admission, EEG monitoring

**Phase 4 (>40 minutes):**
- Super-refractory: Pentobarbital coma
- Alternative therapies: Ketamine, immunotherapy

### Guillain-Barre Syndrome Variants

**Classic AIDP:**
- Ascending paralysis
- Areflexia
- Albuminocytologic dissociation (CSF)

**Miller Fisher Syndrome:**
- Ophthalmoplegia
- Ataxia
- Areflexia
- Anti-GQ1b antibodies

**Acute Motor Axonal Neuropathy (AMAN):**
- Pure motor
- Campylobacter association
- More severe, rapid progression

**Management:**
- IVIG (0.4g/kg x 5 days) or Plasmapheresis
- Respiratory monitoring (FVC, NIF)
- Autonomic instability precautions

### Special Populations

**Pediatric Considerations:**
- Stroke etiologies differ (cardiac, sickle cell, arteriopathy)
- Seizures more common presenting symptom
- Lower NIHSS threshold for intervention

**Pregnancy:**
- Increased stroke risk (especially postpartum)
- Consider cerebral venous thrombosis
- Imaging: MRI without gadolinium preferred

**Elderly:**
- Atypical stroke presentations common
- Higher hemorrhage risk with anticoagulation
- Baseline cognitive impairment complicates assessment`,
      keyTerms: [
        { term: 'ASPECTS', definition: 'Alberta Stroke Program Early CT Score; quantifies early ischemic changes', pronunciation: 'AS-pex' },
        { term: 'penumbra', definition: 'Ischemic but salvageable brain tissue surrounding the irreversibly damaged core', pronunciation: 'pen-UM-bruh' },
        { term: 'albuminocytologic dissociation', definition: 'Elevated CSF protein with normal cell count; characteristic of GBS' },
        { term: 'thrombectomy', definition: 'Mechanical removal of blood clot from artery' },
        { term: 'vasospasm', definition: 'Narrowing of blood vessels; complication of SAH causing delayed ischemia' },
      ],
      clinicalNotes: 'Time is brain in acute stroke. Every minute of large vessel occlusion costs approximately 2 million neurons. Systems of care should minimize door-to-needle and door-to-puncture times. Extended window thrombectomy (up to 24 hours) based on imaging selection has transformed stroke care for patients with unknown or extended onset times.',
    },
    5: {
      level: 5,
      summary: 'Expert-level neurological emergency care encompasses precision medicine approaches to stroke, advanced neurocritical care, management of rare neurological emergencies, and continuous quality improvement in systems of care.',
      explanation: `## Expert-Level Neurological Emergency Care

### Precision Stroke Medicine

**Genetic and Molecular Factors:**

**Pharmacogenomics:**
- CYP2C19 variants affecting clopidogrel metabolism
- Factor V Leiden and prothrombin mutations
- CADASIL and monogenic stroke syndromes

**Biomarkers:**
- GFAP (glial fibrillary acidic protein): Hemorrhage detection
- NT-proBNP: Cardioembolic source prediction
- Copeptin: Early stroke recognition

**Advanced Imaging Biomarkers:**
- BBB permeability imaging
- Inflammatory markers (MPO, MMPs)
- Collateral circulation assessment

### Neurocritical Care

**Multimodal Monitoring:**

**ICP Monitoring:**
- External ventricular drain (gold standard)
- Intraparenchymal monitors
- Waveform analysis

**Brain Tissue Oxygen (PbtO2):**
- Target >20 mmHg
- Guides hyperventilation, sedation, CPP management

**Cerebral Microdialysis:**
- Glucose, lactate, pyruvate, glutamate
- Detects ischemia before clinical change

**Continuous EEG:**
- Non-convulsive status epilepticus detection
- Ischemia monitoring
- Guide for titrating sedation

**Management Protocols:**

**Decompressive Craniectomy:**
- Malignant MCA infarction
- Age <60, within 48 hours
- REDUCE trial expanded criteria

**Targeted Temperature Management:**
- Post-cardiac arrest
- Target 33-36C for 24 hours
- Avoid fever

### Rare Neurological Emergencies

**Reversible Cerebral Vasoconstriction Syndrome (RCVS):**
- Thunderclap headaches
- Segmental vasoconstriction on angiography
- Triggers: Postpartum, vasoactive substances
- Treatment: Calcium channel blockers

**Posterior Reversible Encephalopathy Syndrome (PRES):**
- Headache, seizures, visual changes
- Vasogenic edema on MRI (parieto-occipital)
- Causes: Hypertension, immunosuppression, eclampsia
- Treatment: Blood pressure control

**Autoimmune Encephalitis:**
- Anti-NMDA receptor most common
- Psychiatric symptoms, seizures, dyskinesias
- CSF: Pleocytosis, oligoclonal bands
- Treatment: Immunotherapy (IVIG, steroids, rituximab)

**Acute Disseminated Encephalomyelitis (ADEM):**
- Post-infectious demyelination
- Encephalopathy plus multifocal deficits
- MRI: Large, bilateral, asymmetric lesions
- Treatment: High-dose steroids

### Stroke Systems of Care

**Triage and Transport:**

**Prehospital Scales:**
- FAST-ED (field triage to thrombectomy centers)
- RACE (Spanish scale)
- LAMS (Los Angeles Motor Scale)

**Regional Systems:**
- Primary stroke centers
- Comprehensive stroke centers
- Thrombectomy-capable centers
- Telestroke networks

**Quality Metrics:**
- Door-to-needle time <60 minutes
- Door-to-puncture time <90 minutes
- IV tPA rate for eligible patients >80%
- Thrombectomy rate for LVO

### Future Directions

**Neuroprotection:**
- Nerinetide (NA-1): Neuroprotective peptide
- Magnesium: Failed trials but ongoing research
- Hypothermia: Selective brain cooling

**Mobile Stroke Units:**
- CT-equipped ambulances
- Preh thrombolysis
- Triage directly to thrombectomy
- Time savings of 30-60 minutes

**Artificial Intelligence:**
- Automated LVO detection on CTA
- ASPECTS scoring
- Triage decision support
- Outcome prediction

**Advanced Therapies:**
- Tenecteplase vs. alteplase (EXTEND-IA TNK)
- Sonothrombolysis
- Intra-arterial neuroprotection
- Stem cell therapies (chronic phase)

### Research Frontiers

**Genomics:**
- Large vessel occlusion GWAS
- Recovery biomarkers
- Personalized rehabilitation

**Imaging:**
- 7T MRI for microstructural assessment
- PET for inflammation and amyloid
- Optical imaging (NIRS)

**Devices:**
- Next-generation thrombectomy devices
- Neuroprotection catheters
- Brain-computer interfaces for rehabilitation`,
      keyTerms: [
        { term: 'CADASIL', definition: 'Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy; genetic stroke syndrome' },
        { term: 'multimodal monitoring', definition: 'Integration of multiple physiological measurements in neurocritical care' },
        { term: 'cerebral microdialysis', definition: 'Technique for sampling brain extracellular fluid chemistry' },
        { term: 'neuroprotection', definition: 'Strategies to protect nervous system from injury and promote recovery' },
        { term: 'tenecteplase', definition: 'Modified tPA with longer half-life; emerging as alternative to alteplase', pronunciation: 'te-NEK-te-plase' },
      ],
      clinicalNotes: `Expert neurological emergency care requires:
1. Rapid, accurate diagnosis using advanced imaging
2. Time-sensitive intervention for reversible conditions
3. Neurocritical care expertise for complex cases
4. Systems-based approach to optimize care delivery
5. Continuous learning and quality improvement

The field is rapidly evolving with extended treatment windows, advanced imaging selection, and emerging neuroprotective strategies.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'aha-stroke-guidelines-2019',
      type: 'article',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke',
      authors: ['Powers WJ', 'et al.'],
      source: 'Stroke',
    },
    {
      id: 'dawn-trial',
      type: 'article',
      title: 'Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct',
      authors: ['Nogueira RG', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'neurocritical-care-guidelines',
      type: 'article',
      title: 'Guidelines for the Management of Severe Traumatic Brain Injury',
      authors: ['Carney NA', 'et al.'],
      source: 'Neurocritical Care',
    },
  ],

  crossReferences: [
    { targetId: 'chest-pain-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Chest Pain Red Flags' },
    { targetId: 'abdominal-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Abdominal Red Flags' },
    { targetId: 'pediatric-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Pediatric Red Flags' },
    { targetId: 'neurological-referrals', targetType: 'concept', relationship: 'related', label: 'Neurological Referrals' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['emergency-medicine', 'neurology', 'critical-care'],
    keywords: ['stroke', 'seizure', 'meningitis', 'neurological emergency', 'red flags'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default neurologicalRedFlagsContent;
