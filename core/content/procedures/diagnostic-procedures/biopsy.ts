import { EducationalContent } from '../../types';

export const biopsyContent: EducationalContent = {
  id: 'biopsy',
  type: 'topic',
  name: 'Biopsy',
  alternateNames: ['Tissue Biopsy', 'Needle Biopsy', 'Surgical Biopsy'],
  levels: {
    1: {
      level: 1,
      summary: 'A biopsy is a medical procedure where a small sample of tissue is removed from your body for examination under a microscope to help diagnose diseases, especially cancer.',
      explanation: `## What is a Biopsy?

A biopsy is a medical procedure where a small sample of tissue is removed from your body for examination under a microscope. This test helps doctors diagnose various conditions, especially cancer.

### Key Points

- Biopsies help diagnose cancer and other diseases
- A small tissue sample is removed for testing
- The procedure is usually quick and minimally invasive
- Results help determine the best treatment plan

### Important Terms

- **Biopsy**: Removal and examination of tissue for diagnosis
- **Pathology**: Study of disease causes and effects
- **Lesion**: Abnormal tissue or damage`,
      keyTerms: [
        { term: 'Biopsy', definition: 'Removal and examination of tissue for diagnosis' },
        { term: 'Pathology', definition: 'Study of disease causes and effects' },
        { term: 'Lesion', definition: 'Abnormal tissue or damage' }
      ],
      patientCounselingPoints: [
        'The biopsy helps your doctor understand what is causing your symptoms',
        'Most biopsies are done with local anesthesia to minimize discomfort',
        'Results usually take a few days to a week to come back',
        'Bring someone with you to your appointment for support'
      ]
    },
    2: {
      level: 2,
      summary: 'Different types of biopsies are used depending on the location and nature of the suspicious area, including needle biopsies, surgical biopsies, and endoscopic biopsies.',
      explanation: `## Types of Biopsies

Different types of biopsies are used depending on the location and nature of the suspicious area. Your doctor will choose the most appropriate method for your situation.

### Key Points

- Needle biopsy uses a hollow needle to extract tissue
- Surgical biopsy may be excisional (removing entire lesion) or incisional (removing part)
- Skin biopsy is done for suspicious moles or rashes
- Bone marrow biopsy examines blood cell production

### Types of Biopsies

**Needle Biopsy**
A thin needle is inserted through the skin to reach the suspicious area. Can be fine-needle aspiration (FNA) or core needle biopsy.

**Surgical Biopsy**
A surgeon makes an incision to remove all or part of a lump. May require local or general anesthesia.

**Endoscopic Biopsy**
Performed using an endoscope - a flexible tube with a camera and tools to reach internal organs.`,
      keyTerms: [
        { term: 'Fine-needle aspiration', definition: 'Thin needle biopsy using suction' },
        { term: 'Core needle', definition: 'Larger needle removing tissue cylinder' },
        { term: 'Excisional biopsy', definition: 'Removal of entire suspicious area' },
        { term: 'Incisional biopsy', definition: 'Removal of part of suspicious area' }
      ],
      patientCounselingPoints: [
        'Your doctor will explain which biopsy type is best for your situation',
        'Some biopsies can be done in the office, others require a hospital visit',
        'You may need to stop blood thinners before certain biopsy types'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for a biopsy includes medication adjustments, fasting when required, and arranging transportation to ensure accurate results and reduce complications.',
      explanation: `## Preparing for Your Biopsy

Proper preparation helps ensure accurate results and reduces complications. Follow your doctor's instructions carefully.

### Key Points

- Tell your doctor about all medications including blood thinners
- Some biopsies require fasting beforehand
- Arrange for someone to drive you home if sedation is used
- Stop smoking before the procedure to promote healing

### Preparation Details

**Medication Adjustments**
You may need to stop blood thinners like aspirin, warfarin, or clopidogrel 5-7 days before. NSAIDs may also need to be paused.

**Before the Procedure**
You'll meet with your healthcare provider to discuss the procedure, risks, and benefits. Bring a list of your medications and medical history.

**What to Bring**
Insurance information, ID, list of medications, comfortable clothing, and a driver if receiving sedation.`,
      keyTerms: [
        { term: 'Sedation', definition: 'Calming medication given before procedure' },
        { term: 'Local anesthesia', definition: 'Numbing specific area' },
        { term: 'General anesthesia', definition: 'Being put to sleep' }
      ],
      examples: [
        'A patient taking warfarin for atrial fibrillation stops it 5 days before a liver biopsy',
        'Someone scheduled for a bone marrow biopsy arranges for a ride home due to sedation'
      ]
    },
    4: {
      level: 4,
      summary: 'During a biopsy, the area is cleaned and numbed, tissue is removed with imaging guidance, and aftercare involves monitoring for bleeding and infection while waiting for pathology results.',
      explanation: `## During and After the Biopsy

Understanding what happens during and after your biopsy can help reduce anxiety and ensure proper recovery.

### Key Points

- Most biopsies take 15-45 minutes
- You may feel pressure or brief discomfort
- Apply ice to reduce swelling and bruising
- Results typically available within 3-7 days

### Procedure Details

**During the Procedure**
The area is cleaned and numbed with local anesthesia. The biopsy needle or instrument is positioned, often with imaging guidance like ultrasound or CT.

**Immediate Aftercare**
Pressure is applied to stop bleeding. A bandage or dressing is applied. You may have mild soreness for a few days.

**Activity Restrictions**
Avoid strenuous activity for 24-48 hours. Keep the area clean and dry. Watch for signs of infection like increased redness, warmth, or fever.`,
      keyTerms: [
        { term: 'Imaging guidance', definition: 'Using ultrasound/CT to guide biopsy' },
        { term: 'Hematoma', definition: 'Collection of blood outside vessels' },
        { term: 'Pathology report', definition: 'Official results of tissue analysis' }
      ],
      clinicalNotes: 'Core needle biopsy provides larger tissue samples than FNA, allowing for histologic architecture and immunohistochemical studies. Ultrasound guidance increases accuracy for palpable masses.'
    },
    5: {
      level: 5,
      summary: 'Biopsy results include benign or malignant diagnoses, tumor grading, and molecular markers that guide treatment decisions, prognosis, and the need for additional testing or staging.',
      explanation: `## Understanding Your Results

Your biopsy results will provide crucial information about your diagnosis and help guide treatment decisions.

### Key Points

- Benign results indicate non-cancerous tissue
- Malignant results indicate cancer presence
- Results include tumor type, grade, and characteristics
- Additional tests may be needed for complete information

### Result Interpretation

**Possible Result Types**
Results may be negative (no cancer), positive (cancer found), or inconclusive (unable to determine, requiring repeat biopsy).

**Tumor Grading**
Pathologists grade tumors based on how abnormal cells appear. Grade 1 (well-differentiated) to Grade 4 (poorly differentiated).

**Additional Testing**
Special stains, molecular testing, or genetic analysis may be performed to guide targeted therapies and prognosis.

**Next Steps**
Discuss results with your healthcare team. If cancer is diagnosed, you'll be referred to specialists and may need staging scans.`,
      keyTerms: [
        { term: 'Benign', definition: 'Not cancerous; not spreading' },
        { term: 'Malignant', definition: 'Cancerous; can invade and spread' },
        { term: 'Differentiation', definition: 'How mature cells appear under microscope' },
        { term: 'Staging', definition: 'Determining cancer extent in body' },
        { term: 'Molecular markers', definition: 'Genetic characteristics of tumor cells' }
      ],
      clinicalNotes: 'Molecular profiling of tumor tissue can identify targetable mutations (e.g., EGFR, ALK, HER2) and guide personalized therapy. Sentinel lymph node biopsy helps stage melanoma and breast cancer with less morbidity.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['biopsy', 'diagnosis', 'pathology'],
    keywords: ['biopsy', 'tissue sampling', 'cancer diagnosis', 'needle biopsy']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
