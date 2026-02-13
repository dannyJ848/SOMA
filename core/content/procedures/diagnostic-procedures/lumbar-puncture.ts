import { EducationalContent } from '../../types';

export const lumbarPunctureContent: EducationalContent = {
  id: 'lumbar-puncture',
  type: 'topic',
  name: 'Lumbar Puncture',
  alternateNames: ['Spinal Tap', 'LP', 'CSF Analysis'],
  levels: {
    1: {
      level: 1,
      summary: 'A lumbar puncture, commonly called a spinal tap, is a procedure where a needle is inserted into the lower back to collect cerebrospinal fluid (CSF) that surrounds and protects the brain and spinal cord.',
      explanation: `## What is a Lumbar Puncture?

A lumbar puncture, commonly called a spinal tap, is a procedure where a needle is inserted into the lower back to collect cerebrospinal fluid (CSF). This fluid surrounds and protects the brain and spinal cord.

### Key Points

- Collects fluid from around the spinal cord
- Helps diagnose brain and spinal conditions
- A thin needle is inserted in the lower back
- Usually takes 15-30 minutes

### Important Terms

- **CSF**: Cerebrospinal fluid - fluid around brain and spinal cord
- **Spinal canal**: Space containing spinal cord and nerves
- **Neurologist**: Doctor specializing in nervous system disorders`,
      keyTerms: [
        { term: 'CSF', definition: 'Cerebrospinal fluid - fluid around brain and spinal cord' },
        { term: 'Spinal canal', definition: 'Space containing spinal cord and nerves' },
        { term: 'Neurologist', definition: 'Doctor specializing in nervous system disorders' }
      ],
      patientCounselingPoints: [
        'A lumbar puncture helps diagnose serious infections and other nervous system conditions',
        'You will lie on your side or sit during the procedure',
        'The area will be numbed with medication before the needle is inserted',
        'You may have a headache afterward - lying flat can help prevent this'
      ]
    },
    2: {
      level: 2,
      summary: 'Lumbar puncture provides crucial diagnostic information about neurological conditions including meningitis, encephalitis, bleeding around the brain, multiple sclerosis, and pressure disorders.',
      explanation: `## Why is a Lumbar Puncture Done?

Lumbar puncture provides crucial diagnostic information about various neurological conditions by analyzing the CSF.

### Key Points

- Diagnose meningitis and encephalitis
- Detect bleeding around the brain
- Diagnose multiple sclerosis
- Evaluate headaches and pressure disorders

### Diagnostic Uses

**Infection Testing**
CSF analysis can identify bacterial, viral, or fungal infections of the brain and spinal cord, including meningitis and encephalitis.

**Bleeding Detection**
Subarachnoid hemorrhage (bleeding around the brain) can be diagnosed by finding blood in the CSF.

**Neurological Diseases**
Helps diagnose multiple sclerosis, Guillain-Barré syndrome, and certain cancers involving the central nervous system.

**Pressure Measurement**
Opening pressure can diagnose idiopathic intracranial hypertension (pseudotumor cerebri) or low pressure conditions.`,
      keyTerms: [
        { term: 'Meningitis', definition: 'Inflammation of brain/spinal cord membranes' },
        { term: 'Encephalitis', definition: 'Inflammation of brain tissue' },
        { term: 'Subarachnoid hemorrhage', definition: 'Bleeding into space around brain' },
        { term: 'Idiopathic intracranial hypertension', definition: 'Increased pressure without obvious cause' }
      ],
      patientCounselingPoints: [
        'Your doctor may recommend a lumbar puncture if you have severe headache, fever, or neurological symptoms',
        'The test can diagnose serious infections that need urgent treatment',
        'Results can take anywhere from hours to several days depending on the tests needed'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for lumbar puncture includes reviewing all medications, stopping blood thinners, discussing bleeding disorders, and arranging for someone to drive you home.',
      explanation: `## Preparing for a Lumbar Puncture

Proper preparation helps ensure a successful lumbar puncture and reduces complications.

### Key Points

- Tell your doctor about all medications
- You may need to stop blood thinners
- Discuss bleeding disorders with your doctor
- Arrange for someone to drive you home

### Preparation Details

**Medication Review**
Inform your doctor about blood thinners (warfarin, clopidogrel, apixaban, etc.), aspirin, NSAIDs, and any herbal supplements.

**Medical History**
Tell your doctor about bleeding disorders, previous back surgery, back problems, or allergies to anesthesia or antiseptics.

**Before the Procedure**
You may have blood tests to check clotting. You'll sign consent forms. You'll receive instructions about eating and drinking - usually light meal is okay.

**What to Wear**
Wear loose, comfortable clothing. You may need to change into a hospital gown. Remove jewelry from the area.`,
      keyTerms: [
        { term: 'Bleeding disorder', definition: 'Condition affecting blood clotting' },
        { term: 'Coagulation tests', definition: 'Blood tests measuring clotting ability' },
        { term: 'Local anesthesia', definition: 'Numbing medication at procedure site' }
      ],
      examples: [
        'A patient taking warfarin for atrial fibrillation stops it 5 days before the lumbar puncture',
        'Someone with a bleeding disorder may need special precautions or alternative testing methods'
      ]
    },
    4: {
      level: 4,
      summary: 'During lumbar puncture, you lie on your side with knees pulled to chest or sit leaning forward, the lower back is cleaned and numbed, and a thin needle is inserted between vertebrae.',
      explanation: `## The Lumbar Puncture Procedure

During a lumbar puncture, you'll lie on your side or lean forward while a needle is carefully inserted into the spinal canal.

### Key Points

- You lie on your side or sit leaning forward
- The lower back is cleaned and numbed
- A thin needle is inserted between vertebrae
- You may feel pressure but usually not pain

### Procedure Details

**Positioning**
You'll lie on your side with knees pulled to chest, or sit leaning forward on a table. This position opens the spaces between vertebrae.

**The Procedure**
The area is cleaned with antiseptic. Local anesthesia numbs the skin and deeper tissue. A needle is inserted into the spinal canal.

**Fluid Collection**
Once positioned correctly, CSF drips out or is gently withdrawn. Several tubes are collected for different tests. Opening pressure may be measured.

**After the Needle**
The needle is removed and a bandage is applied. You'll lie flat for a period. The entire procedure takes about 30 minutes.`,
      keyTerms: [
        { term: 'Vertebrae', definition: 'Bones of the spine' },
        { term: 'Intervertebral space', definition: 'Space between vertebrae' },
        { term: 'Opening pressure', definition: 'Initial CSF pressure measurement' },
        { term: 'Subarachnoid space', definition: 'Space containing CSF' }
      ],
      clinicalNotes: 'The lumbar puncture is typically performed at L3-L4 or L4-L5 interspace. In adults, the spinal cord ends at L1-L2, making lower lumbar punctures safe. Traumatic taps occur in 10-15% of procedures.'
    },
    5: {
      level: 5,
      summary: 'Lumbar puncture results include CSF analysis with cell counts, protein, glucose, and cultures, with spinal headache being the most common side effect treated with epidural blood patch if persistent.',
      explanation: `## Results and Recovery

Understanding your lumbar puncture results and proper recovery helps ensure the best outcome.

### Key Points

- Results may be available within hours to days
- Lying flat after reduces headache risk
- Headache is the most common side effect
- Serious complications are rare

### Results and Recovery

**CSF Analysis**
Tests include cell count (white and red blood cells), protein, glucose, culture (for infection), and specialized tests for specific conditions.

**Understanding Results**
Normal: clear fluid, specific cell counts, normal protein and glucose. Abnormal: high white cells (infection), high protein (various conditions), low glucose (bacterial infection), presence of blood.

**Post-Procedure Headache**
Spinal headache occurs in 10-30% of cases. Caused by low CSF pressure. Worsens when sitting/standing, improves when lying down.

**Warning Signs**
Call your doctor for severe headache that doesn't improve lying down, fever, numbness or weakness, difficulty urinating, or bleeding from the site.

**Treatment Options**
For persistent spinal headache, an epidural blood patch (injecting your blood into the epidural space) may be recommended.`,
      keyTerms: [
        { term: 'Pleocytosis', definition: 'Increased white blood cells in CSF' },
        { term: 'Epidural blood patch', definition: 'Blood injection to seal CSF leak' },
        { term: 'Spinal headache', definition: 'Headache from low CSF pressure' },
        { term: 'Culture', definition: 'Test growing organisms' },
        { term: 'CSF leak', definition: 'Cerebrospinal fluid escaping from puncture site' }
      ],
      clinicalNotes: 'Normal CSF opening pressure is 6-25 cm H2O. Elevated pressure suggests pseudotumor cerebri or mass lesion. Low pressure suggests CSF leak or dehydration. Xanthochromia (yellow tint) indicates subarachnoid hemorrhage.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['lumbar puncture', 'neurology', 'diagnosis'],
    keywords: ['lumbar puncture', 'spinal tap', 'CSF', 'meningitis']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
