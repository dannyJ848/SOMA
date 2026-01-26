import { EducationalContent } from '../../types';

export const bronchoscopyContent: EducationalContent = {
  id: 'bronchoscopy',
  type: 'topic',
  name: 'Bronchoscopy',
  alternateNames: ['Bronchoscopic Examination', 'Airway Endoscopy'],
  levels: {
    1: {
      level: 1,
      summary: 'A bronchoscopy is a medical procedure where a doctor uses a thin tube with a camera to look inside your lungs and airways to help diagnose and sometimes treat lung conditions.',
      explanation: `## What is a Bronchoscopy?

A bronchoscopy is a medical procedure where a doctor uses a thin tube with a camera (bronchoscope) to look inside your lungs and airways. It helps diagnose and sometimes treat lung conditions.

### Key Points

- Views the inside of airways and lungs
- Uses a thin tube with a light and camera
- Helps diagnose coughing, infections, and tumors
- Can remove small objects or tissue samples

### Important Terms

- **Bronchoscope**: Thin tube with camera for examining airways
- **Airways**: Tubes that carry air in and out of lungs
- **Pulmonologist**: Doctor specializing in lung conditions`,
      keyTerms: [
        { term: 'Bronchoscope', definition: 'Thin tube with camera for examining airways' },
        { term: 'Airways', definition: 'Tubes that carry air in and out of lungs' },
        { term: 'Pulmonologist', definition: 'Doctor specializing in lung conditions' }
      ],
      patientCounselingPoints: [
        'The procedure helps your doctor see inside your lungs and airways',
        'You will be given medication to help you relax and numb your throat',
        'Most people go home the same day after a short recovery',
        'Your throat may feel sore for a day or two afterward'
      ]
    },
    2: {
      level: 2,
      summary: 'Bronchoscopy helps doctors diagnose and treat various lung conditions including persistent cough, infections, tumors, and can be used to collect samples or remove foreign objects.',
      explanation: `## Why is Bronchoscopy Performed?

Bronchoscopy helps doctors diagnose and treat various lung conditions. It may be recommended when you have persistent respiratory symptoms.

### Key Points

- Diagnose persistent cough or infection
- Evaluate abnormal findings on chest imaging
- Check for tumors or foreign objects
- Collect samples for laboratory testing

### Uses of Bronchoscopy

**Diagnostic Uses**
Investigating chronic cough, coughing up blood, unexplained lung infection, suspicious spots on X-rays or CT scans, and evaluating before surgery.

**Therapeutic Uses**
Removing foreign objects or mucus plugs, placing stents to open airways, treating bleeding, removing small tumors, and draining abscesses.

**Sample Collection**
Can collect bronchial washings (fluid), brushings (cells), or biopsies (tissue) for culture, cytology, or pathology examination.`,
      keyTerms: [
        { term: 'Hemoptysis', definition: 'Coughing up blood' },
        { term: 'Pulmonary', definition: 'Related to lungs' },
        { term: 'Lesion', definition: 'Abnormal tissue or damage' },
        { term: 'Stent', definition: 'Tube to keep airway open' }
      ],
      patientCounselingPoints: [
        'Your doctor may recommend bronchoscopy if you have a persistent cough or coughing up blood',
        'The procedure can both diagnose problems and sometimes treat them during the same visit',
        'Bring your complete medication list to your appointment'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for bronchoscopy includes fasting for 6-8 hours, stopping blood thinners as directed, and arranging for someone to drive you home after the procedure.',
      explanation: `## Preparing for Bronchoscopy

Proper preparation ensures a safe and effective bronchoscopy. Follow your doctor's instructions carefully.

### Key Points

- No food or drink for 6-8 hours before
- Stop blood thinners as directed
- Arrange someone to drive you home
- Provide complete medication list

### Preparation Details

**Medication Review**
Tell your doctor about all medications including aspirin, warfarin, clopidogrel, and diabetes medications. Adjustments may be needed.

**Before the Procedure**
You'll have an opportunity to ask questions. An IV line will be placed. Your mouth and throat may be numbed with spray.

**What to Bring**
Bring list of medications, insurance card, ID, and a responsible adult to drive you home. Wear loose, comfortable clothing.

**Allergy Information**
Inform your doctor about any allergies, especially to latex (in equipment), anesthesia, or antibiotics.`,
      keyTerms: [
        { term: 'NPO', definition: 'Nothing by mouth - no eating or drinking' },
        { term: 'Anesthetic', definition: 'Medication causing loss of sensation' },
        { term: 'IV line', definition: 'Catheter in vein for medication' }
      ],
      examples: [
        'A patient taking warfarin stops it 5 days before bronchoscopy to reduce bleeding risk',
        'Someone with diabetes adjusts their medication schedule since they cannot eat before the procedure'
      ]
    },
    4: {
      level: 4,
      summary: 'During bronchoscopy, you receive sedation and local anesthesia, the bronchoscope is inserted through nose or mouth into the airways for examination and sample collection.',
      explanation: `## During the Bronchoscopy Procedure

Bronchoscopy is typically performed with sedation to keep you comfortable. The procedure usually takes 30-60 minutes.

### Key Points

- Sedation helps you relax and may cause memory of procedure
- Local anesthesia numbs the throat
- The bronchoscope passes through nose or mouth
- You may cough or gag briefly during insertion

### Procedure Details

**Getting Started**
Monitors track your heart rate, blood pressure, and oxygen. Sedation is given through IV. Your throat is numbed with spray.

**Insertion**
The bronchoscope is gently guided through your nose or mouth, down the throat, past vocal cords, and into the airways.

**During Examination**
The doctor examines the airway lining. Saline may be instilled and suctioned (bronchial washing). Tools can remove samples or objects.

**Recovery**
You'll be monitored until sedation wears off (1-2 hours). Your throat may feel sore, and you might cough up small amounts of blood.`,
      keyTerms: [
        { term: 'Conscious sedation', definition: 'Medicated relaxation but you remain awake' },
        { term: 'Bronchial washing', definition: 'Saline instillation and collection for testing' },
        { term: 'Vocal cords', definition: 'Voice box structures' },
        { term: 'Suction', definition: 'Removing fluid or secretions' }
      ],
      clinicalNotes: 'Flexible bronchoscopy is the most common approach. Rigid bronchoscopy may be needed for foreign body removal or controlling massive hemoptysis. Bronchoalveolar lavage (BAL) samples distal air spaces for opportunistic infections.'
    },
    5: {
      level: 5,
      summary: 'Bronchoscopy results include visual findings, biopsy pathology, culture results, and cytology which guide diagnosis and treatment planning with most patients resuming normal activities the next day.',
      explanation: `## Results and Recovery

Your doctor will discuss initial findings after the procedure. Some results are immediate, but biopsy and culture results take days.

### Key Points

- Preliminary results available immediately
- Biopsy results take 3-7 days
- Culture results may take 1-2 weeks
- Most people return to normal activities next day

### Results and Recovery

**Possible Findings**
Normal airways, inflammation, infection (bacteria, fungi, TB), tumors, obstruction, foreign body, or bleeding sites.

**Understanding Results**
Visual inspection shows airway appearance. Biopsy reveals tissue type and any cancer. Cultures identify specific organisms causing infection.

**After-Home Care**
Rest for the remainder of the day. No driving for 24 hours. Cough may persist. Sore throat improves with lozenges. Small amounts of blood-tinged sputum are normal.

**Warning Signs**
Call your doctor if you have fever, difficulty breathing, chest pain, or cough up more than a tablespoon of blood.`,
      keyTerms: [
        { term: 'Sputum', definition: 'Mucus coughed up from lungs' },
        { term: 'Culture', definition: 'Lab test growing bacteria/fungi' },
        { term: 'Cytology', definition: 'Study of cells under microscope' },
        { term: 'Endobronchial', definition: 'Inside the bronchial tubes' },
        { term: 'Malignancy', definition: 'Presence of cancer' }
      ],
      clinicalNotes: 'Endobronchial ultrasound (EBUS) allows real-time lymph node sampling for lung cancer staging. Navigation bronchoscopy reaches peripheral nodules beyond conventional bronchoscopy range. Autofluorescence bronchoscopy detects dysplastic lesions not visible on white light.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['bronchoscopy', 'pulmonology', 'diagnosis'],
    keywords: ['bronchoscopy', 'lung examination', 'airway', 'pulmonary']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
