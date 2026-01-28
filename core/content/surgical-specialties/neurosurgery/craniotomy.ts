/**
 * Craniotomy
 *
 * Neurosurgical procedure involving removal of a bone flap from the skull
 * to access the brain for tumor resection, aneurysm clipping, or other procedures.
 */

import { EducationalContent } from '../../types';

export const craniotomyContent: EducationalContent = {
  id: 'neurosurgery-craniotomy',
  type: 'topic',
  name: 'Craniotomy',
  alternateNames: ['Brain Surgery', 'Open Craniotomy', 'Skull Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'A craniotomy is surgery that opens part of the skull to reach the brain. Neurosurgeons do this to remove tumors, fix aneurysms, treat bleeding, or perform other brain operations.',
      explanation: `## What Is a Craniotomy?

Your brain is protected by your skull - a hard bone that acts like a helmet. Sometimes, doctors need to go through the skull to treat problems inside the brain.

A craniotomy is when a surgeon:
1. Cuts through the scalp
2. Removes a piece of skull bone (bone flap)
3. Opens the tough covering of the brain (dura)
4. Performs the needed surgery
5. Puts everything back in place

## Why Is It Needed?

**Brain Tumors:**
- Grow inside the brain and press on important areas
- Surgery can remove all or part of the tumor

**Brain Bleeding:**
- Blood collecting in the brain can be life-threatening
- Surgery removes the blood and stops the bleeding

**Aneurysms:**
- Weak spots in blood vessels that can burst
- Surgery places a clip to prevent rupture

**Trauma:**
- Head injuries can cause bleeding or skull fractures
- Surgery fixes the damage and relieves pressure

## Recovery

- ICU stay: 1-3 days for monitoring
- Hospital stay: 3-7 days total
- Full recovery: 6-12 weeks
- No contact sports or heavy lifting for months
- May need therapy (speech, physical, occupational)

## What About the Bone?

The bone flap is usually put back and held in place with tiny metal plates and screws. Your body heals it back in place over time. Sometimes the bone isn\'t replaced immediately (craniectomy) if the brain is very swollen.`,

      keyTerms: [
        { term: 'Craniotomy', definition: 'Surgery that removes a piece of skull to access the brain' },
        { term: 'Dura', definition: 'Tough outer covering of the brain and spinal cord' },
        { term: 'Aneurysm', definition: 'Weak, bulging area in an artery wall that can burst and cause bleeding' },
        { term: 'Craniectomy', definition: 'When the skull bone is not replaced, leaving an opening' },
      ],
      analogies: [
        'The skull is like a motorcycle helmet. A craniotomy is like temporarily removing part of the helmet to fix what\'s underneath.',
        'The dura is like the plastic wrap on a new phone - it\'s the protective layer just under the skull.',
      ],
      examples: [
        'A person with a meningioma (benign brain tumor) needs craniotomy for removal',
        'Someone with a brain bleed needs emergency craniotomy to relieve pressure',
        'A patient with a brain aneurysm gets craniotomy to place a clip',
      ],
    },

    2: {
      level: 2,
      summary: 'Craniotomy is the standard neurosurgical approach for intracranial pathology. The bone flap is replaced at surgery unless brain swelling dictates otherwise (craniectomy).',
      explanation: `## Indications

**Oncologic:**
- Primary brain tumors (glioma, meningioma, schwannoma)
- Metastatic brain tumors
- Skull base tumors

**Vascular:**
- Aneurysm clipping
- AVM resection
- Cavernous malformation removal
- Carotid endarterectomy

**Trauma:**
- Epidural hematoma evacuation
- Subdural hematoma evacuation
- Intracerebral hemorrhage evacuation
- Depressed skull fracture elevation

**Inflammatory/Infectious:**
- Brain abscess drainage
- Empyema treatment

## Craniotomy Types

**Supratentorial:**
- Frontal, temporal, parietal, occipital
- Pterional: Most common for aneurysms
- Bifrontal: Midline tumors

**Infratentorial (Posterior Fossa):**
- Suboccipital: Cerebellar and brainstem tumors
- Retromastoid: CPA tumors (acoustic neuroma)
- Midline: 4th ventricle tumors

**Skull Base:**
- Orbitozygomatic: Skull base tumors
- Transsphenoidal: Pituitary tumors (endoscopic)

## Positioning

**Supine:** Most common for supratentorial
- May use Mayfield pin fixation
- Head rotated for lateral approaches

**Prone:** For posterior fossa and posterior parietal
- Careful padding of pressure points
- Abdomen free to allow ventilation

**Lateral:** For approaches to the side of the head

## Bone Flap Management

**Craniotomy (bone replaced):**
- Most common approach
- Bone secured with titanium plates/screws
- Burr holes covered with cement

**Craniectomy (bone not replaced):**
- Brain swelling expected
- Decompression for trauma
- Autologous cranioplasty later (3-6 months)`,

      keyTerms: [
        { term: 'Pterional', definition: 'Craniotomy approach behind the eye, classic for aneurysm surgery' },
        { term: 'Posterior fossa', definition: 'Back part of the skull containing cerebellum and brainstem' },
        { term: 'Burr hole', definition: 'Small hole drilled in skull to begin cutting the bone flap' },
        { term: 'Cranioplasty', definition: 'Surgical repair of a skull defect, usually with bone or synthetic material' },
      ],
      analogies: [
        'The pterional approach is like opening a side door to the brain - great access to the areas where aneurysms live.',
        'A craniectomy is like removing the lid from a jar that\'s too full - lets the contents expand without pressure.',
      ],
      examples: [
        'A patient with a right frontal meningioma gets a frontal craniotomy',
        'Someone with a subdural hematoma gets a craniectomy due to brain swelling',
        'An acoustic neuroma is removed through a retrosigmoid craniotomy',
      ],
      clinicalNotes: 'Steroids are given preoperatively for brain tumors to reduce edema. Anticonvulsants (phenytoin, levetiracetam) are common for supratentorial craniotomies. DVT prophylaxis is essential due to high stroke risk.',
    },

    3: {
      level: 3,
      summary: 'Craniotomy requires precise anatomical knowledge and meticulous technique. Neuronavigation and intraoperative monitoring improve outcomes while reducing morbidity.',
      explanation: `## Surgical Steps

1. **Positioning & Prep**
   - Mayfield pins for rigid fixation
   - EEG electrodes for motor mapping
   - Aseptic prep and draping

2. **Incision & Exposure**
   - Scalp incision based on target location
   - Careful hemostasis (Raney clips, cautery)
   - Reflect galea and pericranium

3. **Craniotomy**
   - Create burr holes (2-5 depending on flap size)
   - Connect burr holes with craniotome
   - Elevate bone flap
   - Wax bleeding from diploe

4. **Dural Opening**
   - Incise dura under microscope
   - Tack up dural edges
   - Open arachnoid for brain relaxation

5. **Procedure**
   - Brain retraction (minimize)
   - Tumor/lesion removal
   - Hemostasis

6. **Closure**
   - Watertight dural closure
   - Bone flap replacement
   - Pericranial galea closure
   - Skin closure

## Neuronavigation

**Frameless Stereotaxy:**
- MRI/CT registration
- Real-time tracking
- Minimizes incision size
- Avoids critical structures

**Intraoperative MRI:**
- Confirms complete resection
- Guides further surgery
- Expensive but valuable

**Intraoperative CT:**
- Real-time imaging
- Less expensive than MRI
- Good for hemorrhage surgery

## Neurophysiological Monitoring

**Motor Evoked Potentials (MEP):**
- Monitor corticospinal tracts
- Warns surgeon of potential injury
- Reduces postoperative deficits

**Somatosensory Evoked Potentials (SSEP):**
- Monitor sensory pathways
- Useful for posterior fossa surgery

**Brainstem Auditory Evoked Potentials (BAEP):**
- Hearing preservation during acoustic neuroma
- Brainstem monitoring

**Cortical Mapping:**
- Awake craniotomy for eloquent cortex
- Direct electrical stimulation
- Preserves motor/speech function

## Complications

**Intracranial:**
- Brain edema: 10-20%
- Hemorrhage: 1-5%
- Infarction: 1-3%
- Seizures: 5-10%
- Infection: 1-3%

**Extracranial:**
- Wound infection: 1-3%
- CSF leak: 2-5%
- Bone flap resorption: <1%
- Cranial nerve injury: varies by location`,

      keyTerms: [
        { term: 'Mayfield pins', definition: 'Three pins screwed into the skull to hold the head completely still during surgery' },
        { term: 'Galea', definition: 'Tough connective tissue layer between scalp and skull' },
        { term: 'Watertight closure', definition: 'Dura sewn closed without any leaks to prevent CSF from escaping' },
        { term: 'Eloquent cortex', definition: 'Brain areas with important functions like speech or movement that must be protected' },
        { term: 'CSF', definition: 'Cerebrospinal fluid - the clear fluid that surrounds and protects the brain and spinal cord' },
      ],
      analogies: [
        'Neuronavigation is like a GPS for brain surgery - shows exactly where you are and what\'s ahead.',
        'Neurophysiological monitoring is like having smoke detectors - they warn you before damage occurs.',
      ],
      examples: [
        'Awake craniotomy for tumor near speech area - patient talks during surgery while surgeon maps function',
        'Intraoperative MRI shows residual tumor, allowing more complete removal',
        'MEP monitoring warns of motor tract injury during tumor resection',
      ],
      clinicalNotes: 'Mannitol (0.5-1 g/kg) is used for brain relaxation before opening dura. Hyperventilation (pCO2 30-35) also reduces brain size temporarily. Both help create working space but have limits and side effects.',
    },

    4: {
      level: 4,
      summary: 'Craniotomy outcomes depend on patient factors, lesion location, and surgical expertise. Advances in navigation, monitoring, and minimally invasive techniques have reduced morbidity.',
      explanation: `## Patient Factors Affecting Outcome

**Age:**
- Younger patients recover faster but have longer life expectancy
- Elderly: Higher complication risk, more comorbidities

**Neurological Status:**
- Poor grade (Hunt-Hess, GCS) predicts worse outcome
- Preoperative deficits may or may not improve

**Comorbidities:**
- Diabetes: Infection risk, wound healing
- Anticoagulation: Bleeding risk
- Smoking: Delayed healing

**Lesion Characteristics:**
- Size: Larger tumors have higher risk
- Location: Eloquent areas higher risk
- Pathology: Malignancy, vascularity affect outcome
- Edema: More brain swelling complicates surgery

## Postoperative Care

**ICU Monitoring:**
- Neurological checks every hour
- BP control (avoid hypertension)
- ICP monitoring if needed
- Seizure prophylaxis

**Complications to Monitor:**
- Brain edema: Peak 24-72 hours
- Hemorrhage: May require reoperation
- Hydrocephalus: May need shunt
- CSF leak: May require lumbar drain
- Meningitis: Fever, headache, stiff neck

**Rehabilitation:**
- Physical therapy for mobility
- Occupational therapy for ADLs
- Speech therapy for language/cognition
- Cognitive rehabilitation

## Special Considerations

**Brain Tumors:**
- Goals: Gross total resection vs. debulking
- Awake craniotomy for eloquent areas
- Intraoperative MRI for maximal safe resection
- Adjuvant therapy based on pathology

**Aneurysms:**
- Timing: Early (<72 hrs) for ruptured, elective for unruptured
- Clip ligation: Permanent cure
- Intraoperative rupture: Catastrophic but rare with modern techniques
- Vasospasm risk: Nimodipine for ruptured cases

**Trauma:**
- Evacuation of mass lesions
- Decompressive craniectomy if ICP elevated
- ICP monitoring
- Multisystem trauma management`,

      keyTerms: [
        { term: 'GCS', definition: 'Glasgow Coma Scale - measure of consciousness level (3-15, 15 is normal)' },
        { term: 'Hunt-Hess', definition: 'Grading system for aneurysm severity based on symptoms' },
        { term: 'ICP', definition: 'Intracranial Pressure - pressure inside the skull' },
        { term: 'Vasospasm', definition: 'Narrowing of blood vessels after subarachnoid hemorrhage, can cause stroke' },
        { term: 'Debulking', definition: 'Removing part of a tumor to reduce its size when complete removal isn\'t possible' },
      ],
      analogies: [
        'Vasospasm is like a garden hose that\'s been pinched - less water gets through.',
        'ICP monitoring is like having a pressure gauge for your skull - tells you when pressure is building up.',
      ],
      examples: [
        'Patient with poor GCS (6) after head injury gets craniectomy for decompression',
        'Someone with a ruptured aneurysm gets clipping within 24 hours of bleed',
        'Awake craniotomy for left temporal lobe tumor near speech area',
      ],
      clinicalNotes: 'Dexamethasone reduces edema around tumors but doesn\'t improve overall survival in most cases. Prophylactic anticonvulsants are controversial - used for supratentorial craniotomies but not posterior fossa.',
    },

    5: {
      level: 5,
      summary: 'Modern craniotomy incorporates advanced technologies including neuronavigation, intraoperative imaging, and neurophysiological monitoring to maximize safety and efficacy.',
      explanation: `## Advanced Techniques

**Keyhole Craniotomies:**
- Minicraniotomy (2-3 cm)
- Supraorbital "eyebrow" approach
- Retro-sigmoid keyhole
- Benefits: Less brain retraction, faster recovery
- Requires extensive experience

**Endoscopic Endonasal:**
- Through the nose to skull base
- Pituitary tumors, meningiomas, craniopharyngiomas
- No brain retraction needed
- CSF leak risk: Higher, requiring closure techniques

**Minimally Invasive Parafalcine:**
- Interhemispheric approach
- Deep lesions with cortical sparing
- Navigation-dependent

## Awake Craniotomy

**Indications:**
- Tumors in or near eloquent cortex
- Motor mapping
- Language/speech mapping
- Low threshold for deficits

**Contraindications:**
- Patient unable to cooperate
- High ICP risk
- Poor pulmonary function
- Patient preference

**Technique:**
- Asleep-awake-asleep
- Scalp block + local anesthesia
- No airway device during awake phase
- Cortical and subcortical mapping
- Resection until functional limit

## Outcome Prediction

**Grading Scales:**
- KPS (Karnofsky Performance Status)
- GOS (Glasgow Outcome Scale)
- mRS (modified Rankin Scale)
- Neuro-QOL for quality of life

**Predictive Models:**
- Age, KPS, extent of resection
- Histology, molecular markers
- Location, size, edema

## Emerging Technologies

**Fluorescence-Guided Surgery:**
- 5-ALA for gliomas (glows under UV light)
- Indocyanine green for vascular
- Improves extent of resection

**Laser Interstitial Thermal Therapy (LITT):**
- Minimally invasive
- MRI-guided thermal ablation
- For deep or hard-to-reach tumors

**High-Intensity Focused Ultrasound:**
- Non-invasive
- Thalamotomy for tremor
- Experimental for tumors`,

      keyTerms: [
        { term: '5-ALA', definition: '5-aminolevulinic acid - drug that makes tumor cells glow under UV light' },
        { term: 'Eloquent cortex', definition: 'Brain areas essential for movement, speech, vision, or other critical functions' },
        { term: 'Interhemispheric', definition: 'Approach between the two hemispheres of the brain' },
        { term: 'LITT', definition: 'Laser Interstitial Thermal Therapy - uses heat to destroy tumors through a small probe' },
      ],
      analogies: [
        '5-ALA is like putting highlighter on the tumor - it glows so the surgeon can see exactly what to remove.',
        'Awake craniotomy is like having a co-pilot during surgery - the patient helps navigate away from critical areas.',
      ],
      examples: [
        'Glioblastoma patient gets 5-ALA fluorescence-guided resection',
        'Essential tremor patient gets MRI-guided LITT instead of open surgery',
        'Low-grade glioma near motor area removed via awake craniotomy',
      ],
      clinicalNotes: 'Extent of resection (EOR) is the most important prognostic factor for high-grade gliomas. Gross total resection (>98%) improves survival. However, preserving neurological function is always paramount.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['neurosurgery', 'craniotomy', 'brain-tumor', 'aneurysm'],
    systems: ['nervous'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
