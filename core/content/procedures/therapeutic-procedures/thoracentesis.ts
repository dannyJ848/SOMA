import { EducationalContent } from '../../types';

export const thoracentesisContent: EducationalContent = {
  id: 'thoracentesis',
  type: 'topic',
  name: 'Thoracentesis',
  alternateNames: ['Pleural Tap', 'Chest Tap', 'Pleural Fluid Drainage'],
  levels: {
    1: {
      level: 1,
      summary: 'Thoracentesis is a procedure where a needle or tube is inserted through the chest wall to remove fluid from around the lungs called pleural effusion, which can cause breathing difficulties.',
      explanation: `## What is a Thoracentesis?

Thoracentesis is a procedure where a needle or tube is inserted through the chest wall to remove fluid from around the lungs. This fluid buildup, called pleural effusion, can cause breathing difficulties.

### Key Points

- Removes fluid from around the lungs
- Helps diagnose the cause of fluid buildup
- Relieves breathing difficulty
- Uses a needle or small catheter

### Important Terms

- **Pleural space**: Space between lungs and chest wall
- **Pleural effusion**: Fluid buildup around lungs
- **Thoracentesis**: Removing fluid from pleural space`,
      keyTerms: [
        { term: 'Pleural space', definition: 'Space between lungs and chest wall' },
        { term: 'Pleural effusion', definition: 'Fluid buildup around lungs' },
        { term: 'Thoracentesis', definition: 'Removing fluid from pleural space' }
      ],
      patientCounselingPoints: [
        'Thoracentesis can relieve shortness of breath caused by fluid around the lungs',
        'The procedure takes about 15-30 minutes',
        'You will be awake during the procedure but the area will be numbed',
        'The fluid is sent to a lab to help determine the cause'
      ]
    },
    2: {
      level: 2,
      summary: 'Thoracentesis serves both diagnostic purposes to identify the cause of pleural effusion (infection, heart failure, cancer, pulmonary embolism) and therapeutic purposes to relieve pressure on the lungs and improve breathing.',
      explanation: `## Why is Thoracentesis Performed?

Thoracentesis serves both diagnostic and therapeutic purposes, helping identify the cause of fluid buildup and relieving symptoms.

### Key Points

- Diagnose the cause of pleural effusion
- Relieve pressure on the lungs
- Improve breathing and oxygen levels
- Evaluate for infection or cancer

### Reasons for Thoracentesis

**Diagnostic Purposes**
Analyzing the pleural fluid can determine if the effusion is caused by infection, heart failure, cancer, pulmonary embolism, kidney disease, liver disease, or other conditions.

**Symptom Relief**
Large pleural effusions compress the lung, causing shortness of breath. Removing fluid allows the lung to re-expand and improves breathing.

**Common Causes**
Congestive heart failure (transudative), pneumonia (empyema), cancer (malignant effusion), pulmonary embolism, liver disease, kidney disease, and autoimmune conditions.

**Fluid Classification**
Transudative (clear fluid from pressure imbalance like heart failure) vs. exudative (protein-rich fluid from inflammation/infection/cancer).`,
      keyTerms: [
        { term: 'Transudative', definition: 'Clear, low-protein fluid' },
        { term: 'Exudative', definition: 'Protein-rich, inflammatory fluid' },
        { term: 'Empyema', definition: 'Pus in pleural space' },
        { term: 'Dyspnea', definition: 'Shortness of breath' }
      ],
      patientCounselingPoints: [
        'Thoracentesis can quickly relieve breathing problems caused by fluid around the lungs',
        'The test results help your doctor determine the underlying cause and appropriate treatment',
        'Some conditions may require repeated thoracentesis if fluid re-accumulates'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for thoracentesis includes medication review, stopping blood thinners, recent chest X-ray or ultrasound, and arranging for someone to drive you home if sedation is planned.',
      explanation: `## Preparing for Thoracentesis

Proper preparation helps ensure a safe and effective thoracentesis procedure.

### Key Points

- Tell your doctor about all medications
- You may need to stop blood thinners
- Recent chest X-ray is required
- Arrange for someone to drive you home

### Preparation Details

**Medication Review**
Inform your doctor about blood thinners (warfarin, DOACs, heparin), aspirin, NSAIDs, and any herbal supplements that affect bleeding.

**Imaging Studies**
A recent chest X-ray or ultrasound shows the fluid location and amount. Ultrasound is often used during the procedure to guide needle placement.

**Before the Procedure**
You will have an opportunity to ask questions. You may need blood tests to check clotting function. You will sign a consent form.

**Day of Procedure**
Wear loose, comfortable clothing. You may need to change into a hospital gown. If sedation is planned, arrange for a ride home.`,
      keyTerms: [
        { term: 'Chest X-ray', definition: 'Imaging test showing lungs and heart' },
        { term: 'Ultrasound guidance', definition: 'Using ultrasound to direct needle' },
        { term: 'Consent form', definition: 'Document giving permission for procedure' },
        { term: 'Coagulation tests', definition: 'Blood clotting measurements' }
      ],
      examples: [
        'A patient with shortness of breath gets a chest X-ray showing pleural effusion',
        'Someone taking warfarin stops it 3 days before thoracentesis to reduce bleeding risk'
      ]
    },
    4: {
      level: 4,
      summary: 'During thoracentesis you sit upright on the edge of a bed, the area is cleaned and numbed, a needle is inserted into the pleural space with ultrasound guidance, and fluid is collected for testing.',
      explanation: `## The Thoracentesis Procedure

Thoracentesis is performed with imaging guidance to ensure safety and accuracy.

### Key Points

- Performed with ultrasound guidance
- You sit upright on edge of bed
- Local anesthesia is used
- Fluid is collected in sterile containers

### Procedure Details

**Positioning**
You sit on the edge of the bed or table, leaning forward with arms supported on a table. This position allows gravity to help drain the fluid.

**Preparation**
The skin is cleaned with antiseptic. Local anesthesia numbs the skin and deeper tissue along the needle path.

**Needle Insertion**
Using ultrasound guidance, the doctor inserts a needle between your ribs into the pleural space. You may feel pressure but should not feel sharp pain.

**Fluid Collection**
Fluid is withdrawn into syringes or collected via catheter into bottles. The amount removed depends on the volume of effusion and your symptoms.`,
      keyTerms: [
        { term: 'Ultrasound guidance', definition: 'Using ultrasound to visualize needle' },
        { term: 'Intercostal space', definition: 'Space between ribs' },
        { term: 'Pleural fluid analysis', definition: 'Lab testing of removed fluid' },
        { term: 'Vacuum bottles', definition: 'Containers collecting fluid via suction' }
      ],
      clinicalNotes: 'Ultrasound guidance reduces complication risk by 50%. Large volume removal (>1.5L) may cause re-expansion pulmonary edema. Chest X-ray after procedure checks for pneumothorax. Pleural manometry measures pressure.'
    },
    5: {
      level: 5,
      summary: 'After thoracentesis, breathing should improve immediately with fluid analysis results determining the cause (transudate vs exudate, infection markers, cytology for cancer cells), and monitoring for complications like pneumothorax.',
      explanation: `## Results and Recovery

Understanding your thoracentesis results helps determine the underlying cause and guides treatment decisions.

### Key Points

- Breathing usually improves immediately
- Fluid analysis reveals the cause
- Results often available within hours
- Monitor for complications

### Recovery Details

**Immediate Recovery**
You will be monitored for 1-2 hours after the procedure. A chest X-ray may be performed. You may have some soreness at the needle site. Breathing should improve right away.

**Fluid Analysis**
Tests include cell count, protein, glucose, pH, culture, Gram stain, cytology (for cancer cells), and specialized tests based on clinical suspicion.

**Result Interpretation**
Transudative suggests systemic causes (heart failure, cirrhosis). Exudative suggests local causes (infection, cancer, pulmonary embolism). Cell counts and cultures identify infection.

**Possible Complications**
Pneumothorax (collapsed lung), bleeding, infection, re-accumulation of fluid, or rare complications like injury to organs.

**When to Call Your Doctor**
Chest pain, worsening shortness of breath, fever over 100.4°F, coughing up blood, or new symptoms after going home.`,
      keyTerms: [
        { term: 'Pneumothorax', definition: 'Collapsed lung from air in pleural space' },
        { term: 'Re-expansion pulmonary edema', definition: 'Lung swelling from rapid re-expansion' },
        { term: 'Pleural fluid chemistry', definition: 'Lab tests on pleural fluid' },
        { term: 'Light criteria', definition: 'Rules distinguishing exudative from transudative' },
        { term: 'Malignant cytology', definition: 'Finding cancer cells in fluid' }
      ],
      clinicalNotes: 'Light criteria (pH, glucose, LDH, protein) differentiate exudate from transudate. Pleural fluid pH <7.0 suggests complicated parapneumonic effusion requiring chest tube. Malignant effusion often shows low glucose and high LDH.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['thoracentesis', 'pulmonology', 'pleural effusion'],
    keywords: ['thoracentesis', 'pleural effusion', 'chest tap', 'pleural tap']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
