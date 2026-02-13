import { EducationalContent } from '../../types';

export const paracentesisContent: EducationalContent = {
  id: 'paracentesis',
  type: 'topic',
  name: 'Paracentesis',
  alternateNames: ['Abdominal Tap', 'Ascitic Fluid Tap', 'Peritoneal Tap'],
  levels: {
    1: {
      level: 1,
      summary: 'Paracentesis is a medical procedure where a needle or small tube is used to remove fluid from the abdominal cavity to diagnose the cause of fluid buildup or relieve discomfort from swelling.',
      explanation: `## What is a Paracentesis?

Paracentesis is a medical procedure where a needle or small tube is used to remove fluid from the abdominal cavity. This fluid, called ascites, can build up due to various medical conditions.

### Key Points

- Removes fluid from the abdominal cavity
- Can diagnose the cause of fluid buildup
- Relieves discomfort from abdominal swelling
- Uses a needle or small catheter

### Important Terms

- **Ascites**: Abnormal fluid buildup in abdomen
- **Peritoneal cavity**: Space between abdominal organs and lining
- **Abdomen**: Belly area between chest and pelvis`,
      keyTerms: [
        { term: 'Ascites', definition: 'Abnormal fluid buildup in abdomen' },
        { term: 'Peritoneal cavity', definition: 'Space between abdominal organs and lining' },
        { term: 'Abdomen', definition: 'Belly area between chest and pelvis' }
      ],
      patientCounselingPoints: [
        'Paracentesis can help determine why fluid is building up in your abdomen',
        'The procedure can also relieve discomfort and breathing problems caused by the fluid',
        'You will be awake during the procedure but the area will be numbed',
        'You may need to lie still during the procedure'
      ]
    },
    2: {
      level: 2,
      summary: 'Paracentesis serves both diagnostic and therapeutic purposes, helping identify the cause of ascites including infection, checking for spontaneous bacterial peritonitis, relieving pressure, and staging cancers.',
      explanation: `## Why is Paracentesis Performed?

Paracentesis serves both diagnostic and therapeutic purposes, helping identify the cause of fluid buildup and relieving symptoms.

### Key Points

- Diagnose the cause of ascites
- Check for infection (spontaneous bacterial peritonitis)
- Relieve abdominal pressure and breathing difficulty
- Stage certain cancers

### Uses of Paracentesis

**Diagnostic Purposes**
Analyzing the fluid can determine if ascites is caused by liver disease, heart failure, kidney disease, cancer, infection, or pancreatitis.

**Checking for Infection**
Spontaneous bacterial peritonitis (SBP) is a serious infection of ascitic fluid. Paracentesis can diagnose this infection to guide antibiotic treatment.

**Symptom Relief**
Large amounts of ascitic fluid cause abdominal distension, discomfort, shortness of breath, and difficulty eating. Removing fluid provides relief.

**Cancer Evaluation**
Finding cancer cells in ascitic fluid can confirm peritoneal carcinomatosis (cancer spread to the abdominal lining).`,
      keyTerms: [
        { term: 'Spontaneous bacterial peritonitis', definition: 'Infection of ascitic fluid' },
        { term: 'Cirrhosis', definition: 'Scarring of liver, common ascites cause' },
        { term: 'Peritoneal carcinomatosis', definition: 'Cancer spread to abdominal lining' },
        { term: 'Portal hypertension', definition: 'High blood pressure in liver circulation' }
      ],
      patientCounselingPoints: [
        'Your doctor may recommend paracentesis if you have unexplained abdominal swelling',
        'If you have liver disease, regular paracentesis may be needed to remove fluid',
        'The procedure helps diagnose infection that can be serious if not treated'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for paracentesis includes medication review, stopping blood thinners, having recent lab results available, and emptying your bladder before the procedure.',
      explanation: `## Preparing for Paracentesis

Proper preparation helps ensure a safe and effective paracentesis procedure.

### Key Points

- Tell your doctor about all medications
- You may need to stop blood thinners
- Have recent lab results available
- Empty your bladder before the procedure

### Preparation Details

**Medication Review**
Inform your doctor about blood thinners (warfarin, DOACs, heparin), aspirin, NSAIDs, and any supplements that affect bleeding.

**Laboratory Tests**
You may need blood tests to check platelet count, clotting ability (PT/INR), and kidney function before the procedure.

**Before the Procedure**
You'll have an ultrasound to mark the fluid location and safest needle entry site. You'll change into a hospital gown.

**Day of Procedure**
Eat light or normally unless directed otherwise. Empty your bladder right before. You'll lie on your back or slightly on one side.`,
      keyTerms: [
        { term: 'Platelet count', definition: 'Number of clotting cells in blood' },
        { term: 'PT/INR', definition: 'Blood clotting time measurement' },
        { term: 'Ultrasound guidance', definition: 'Using ultrasound to direct needle placement' },
        { term: 'Catheter', definition: 'Flexible tube for fluid drainage' }
      ],
      examples: [
        'A patient with cirrhosis has paracentesis every few weeks to remove recurrent ascites',
        'Someone on warfarin stops it 2-3 days before paracentesis to reduce bleeding risk'
      ]
    },
    4: {
      level: 4,
      summary: 'During paracentesis, you lie on your back, the site is cleaned and numbed, a small needle is inserted into the abdomen, and fluid is collected in sterile containers over 20-30 minutes.',
      explanation: `## The Paracentesis Procedure

During paracentesis, you'll lie comfortably while the doctor carefully removes the abdominal fluid using a needle or catheter.

### Key Points

- The area is cleaned and numbed
- A small needle is inserted into the abdomen
- Fluid is collected in sterile containers
- The procedure usually takes 20-30 minutes

### Procedure Details

**Getting Started**
You'll lie on your back. The site is identified by ultrasound or by physical exam. The area is cleaned with antiseptic solution.

**Anesthesia and Insertion**
Local anesthesia numbs the skin and deeper tissue. A needle or catheter is inserted through the abdominal wall into the fluid collection.

**Fluid Collection**
Small amounts are collected in sterile tubes for testing. For therapeutic paracentesis, larger volumes (liters) may be drained into bottles or bags.

**Completion**
The needle/catheter is removed. A small bandage is applied. You may need to lie on the side opposite the puncture site briefly.`,
      keyTerms: [
        { term: 'Local anesthetic', definition: 'Medication numbing specific area' },
        { term: 'Sterile', definition: 'Free from microorganisms' },
        { term: 'Abdominal wall', definition: 'Layers of tissue forming belly wall' },
        { term: 'Therapeutic paracentesis', definition: 'Removing fluid for symptom relief' }
      ],
      clinicalNotes: 'Ultrasound guidance improves safety and success rates. Large volume paracentesis (>5L) may require albumin infusion to prevent paracentesis-induced circulatory dysfunction. The Z technique (changing needle angle) reduces fluid leakage.'
    },
    5: {
      level: 5,
      summary: 'Paracentesis results are interpreted using SAAG classification which distinguishes high gradient ascites from portal hypertension versus low gradient ascites from malignancy, with monitoring for complications.',
      explanation: `## Results and After-Care

Understanding your paracentesis results helps determine the underlying cause of ascites and guide treatment decisions.

### Key Points

- Fluid analysis reveals the cause of ascites
- Results often available within hours to a day
- Serum-ascites albumin gradient classifies ascites
- Monitor for complications after the procedure

### Results and After-Care

**Fluid Analysis**
Tests include cell count (white and red blood cells), protein, albumin, culture, Gram stain, cytology (for cancer cells), and amylase.

**SAAG Classification**
Serum-Ascites Albumin Gradient (SAAG) classifies ascites: high gradient (≥1.1 g/dL) suggests portal hypertension (cirrhosis, heart failure); low gradient suggests cancer, tuberculosis, pancreatitis.

**Diagnostic Patterns**
High neutrophils (>250) indicates infection (SBP). Cancer cells suggest peritoneal carcinomatosis. High protein with low SAAG suggests malignancy or tuberculosis.

**After the Procedure**
Rest and avoid heavy lifting for 24-48 hours. Watch for fever, increasing abdominal pain, bleeding, or leakage from the site. Keep puncture site clean and dry.

**Potential Complications**
Minor complications include temporary pain, minor bleeding, or leakage. Rare serious complications include bowel perforation, infection, or significant bleeding.`,
      keyTerms: [
        { term: 'SAAG', definition: 'Serum-Ascites Albumin Gradient' },
        { term: 'Neutrophils', definition: 'Type of white blood cell fighting infection' },
        { term: 'Cytology', definition: 'Study of cells for cancer or disease' },
        { term: 'Portal hypertension', definition: 'Elevated pressure in liver blood flow' },
        { term: 'Perforation', definition: 'Accidental hole in organ or structure' }
      ],
      clinicalNotes: 'SAAG >1.1 g/dL has 97% accuracy for detecting portal hypertension. PMN count >250 cells/mm3 defines SBP requiring antibiotics. Cytology yield is highest when >50mL fluid is processed with immediate fixation.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['paracentesis', 'gastroenterology', 'ascites'],
    keywords: ['paracentesis', 'ascites', 'abdominal tap', 'cirrhosis']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
