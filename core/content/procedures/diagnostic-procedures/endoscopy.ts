import { EducationalContent } from '../../types';

export const endoscopyContent: EducationalContent = {
  id: 'endoscopy',
  type: 'topic',
  name: 'Endoscopy',
  alternateNames: ['Upper Endoscopy', 'EGD', 'Gastroscopy'],
  levels: {
    1: {
      level: 1,
      summary: 'An endoscopy is a procedure that allows doctors to see inside your body using a thin, flexible tube with a camera called an endoscope to diagnose and treat various conditions.',
      explanation: `## What is an Endoscopy?

An endoscopy is a procedure that allows doctors to see inside your body using a thin, flexible tube called an endoscope. The tube has a light and camera that sends images to a screen.

### Key Points

- Endoscopy lets doctors see inside organs without major surgery
- The endoscope has a camera and light source
- Can be used for diagnosis and treatment
- Different types for different body areas

### Important Terms

- **Endoscope**: Flexible tube with camera for internal viewing
- **Gastroenterologist**: Doctor specializing in digestive system
- **Sedation**: Medication to help you relax`,
      keyTerms: [
        { term: 'Endoscope', definition: 'Flexible tube with camera for internal viewing' },
        { term: 'Gastroenterologist', definition: 'Doctor specializing in digestive system' },
        { term: 'Sedation', definition: 'Medication to help you relax' }
      ],
      patientCounselingPoints: [
        'Endoscopy allows your doctor to see inside your digestive tract without surgery',
        'You will be given medication to help you relax during the procedure',
        'The procedure usually takes less than an hour',
        'Someone will need to drive you home afterward'
      ]
    },
    2: {
      level: 2,
      summary: 'There are many types of endoscopic procedures including EGD for upper digestive tract, colonoscopy for the colon, bronchoscopy for lungs, and cystoscopy for the bladder.',
      explanation: `## Types of Endoscopy

There are many types of endoscopic procedures, each designed to examine specific areas of the body.

### Key Points

- EGD (Upper Endoscopy) examines esophagus, stomach, duodenum
- Colonoscopy views the entire colon
- Bronchoscopy examines airways in lungs
- Cystoscopy views inside the bladder

### Types of Endoscopy

**Upper Endoscopy (EGD)**
Examines the upper digestive tract including the esophagus, stomach, and first part of the small intestine (duodenum).

**Colonoscopy**
Views the entire colon and rectum using a long flexible scope. Used for cancer screening and investigating digestive issues.

**Bronchoscopy**
Examines the trachea and bronchi (airways) in the lungs. Helps diagnose lung conditions and remove foreign objects.

**Other Types**
Cystoscopy (bladder), sigmoidoscopy (lower colon), ENT endoscopy (nasal passages, throat), and arthroscopy (joints).`,
      keyTerms: [
        { term: 'EGD', definition: 'Esophagogastroduodenoscopy - upper endoscopy' },
        { term: 'Duodenum', definition: 'First part of small intestine' },
        { term: 'Bronchi', definition: 'Main air passages to lungs' },
        { term: 'Lumen', definition: 'Inside space of tubular structure' }
      ],
      patientCounselingPoints: [
        'Different types of endoscopy are used for different parts of the body',
        'Your doctor will explain which type is best for your situation',
        'Preparation varies depending on the type of endoscopy'
      ]
    },
    3: {
      level: 3,
      summary: 'Preparation for endoscopy varies by type with upper endoscopy requiring fasting 6-8 hours and colonoscopy requiring bowel prep with laxatives.',
      explanation: `## Preparing for Endoscopy

Proper preparation is essential for a successful endoscopy and accurate results. Preparation varies depending on the type of procedure.

### Key Points

- Upper endoscopy requires fasting 6-8 hours
- Colonoscopy requires bowel prep with laxatives
- Arrange transportation home (you cannot drive)
- Stop certain medications as directed

### Preparation Details

**For Upper Endoscopy**
Nothing to eat or drink for 6-8 hours before. You may be asked to stop blood thinners. Discuss medication adjustments with your doctor.

**For Colonoscopy**
Clear liquid diet 24 hours before. Drink prescribed bowel prep solution to completely clean the colon. Stay near bathroom during prep.

**Day of Procedure**
Wear comfortable clothing. Bring someone to drive you home. Remove jewelry and contact lenses. Bring insurance information and ID.

**Medication Considerations**
Inform your doctor about blood thinners, diabetes medications, iron supplements, and any herbal supplements you take.`,
      keyTerms: [
        { term: 'Bowel prep', definition: 'Laxatives to clean colon for procedure' },
        { term: 'Clear liquids', definition: 'Fluids you can see through (water, broth, clear juices)' },
        { term: 'NPO', definition: 'Nothing by mouth - no eating or drinking' }
      ],
      examples: [
        'A patient scheduled for colonoscopy drinks a bowel prep solution the day before to cleanse the colon',
        'Someone having upper endoscopy fasts for 8 hours before the procedure'
      ]
    },
    4: {
      level: 4,
      summary: 'During endoscopy, you receive IV sedation, the procedure takes 15-60 minutes, vital signs are monitored, and therapeutic treatments can be done during the exam.',
      explanation: `## The Endoscopy Procedure

During an endoscopy, you will be made comfortable while the doctor examines the targeted area. Most people remember little of the procedure.

### Key Points

- Intravenous sedation is typically given
- The procedure usually takes 15-60 minutes
- Vital signs are monitored throughout
- Therapeutic treatments can be done during the exam

### Procedure Details

**Getting Started**
An IV is placed for sedation. You'll lie on your side or back. Monitoring equipment tracks your heart rate, blood pressure, and oxygen.

**During the Exam**
The endoscope is gently inserted. Air may be inserted to improve visibility. The doctor carefully examines the lining and can take biopsies if needed.

**Therapeutic Capabilities**
Endoscopy can treat conditions: remove polyps, stop bleeding, dilate narrowed areas, remove foreign objects, and take tissue samples.

**Recovery Area**
You'll rest in a recovery area until sedation wears off (30-60 minutes). You may feel bloated or have mild throat discomfort.`,
      keyTerms: [
        { term: 'IV sedation', definition: 'Medication through vein for relaxation' },
        { term: 'Polypectomy', definition: 'Removal of polyps during endoscopy' },
        { term: 'Dilation', definition: 'Stretching narrowed area' },
        { term: 'Biopsy forceps', definition: 'Tool to take tissue samples' }
      ],
      clinicalNotes: 'Propofol is commonly used for deep sedation during endoscopy. Therapeutic interventions like hemostasis for bleeding or polypectomy can be performed during the same procedure as diagnostic examination.'
    },
    5: {
      level: 5,
      summary: 'Endoscopy results include immediate visual findings with biopsy results available within a week, guiding treatment plans including medications, polyp removal, or surgery referral.',
      explanation: `## Results and Follow-Up

Your doctor will discuss findings with you after the procedure. Some results are immediate, while biopsy results take several days.

### Key Points

- Preliminary findings discussed immediately after
- Biopsy results typically available within a week
- Treatment plan depends on findings
- Follow-up procedures may be scheduled

### Results and Follow-Up

**Common Findings**
Inflammation (gastritis, colitis), ulcers, polyps, varices, tumors, bleeding sites, or normal anatomy.

**Understanding Biopsies**
Pathology results determine if tissue is benign, malignant (cancer), precancerous, or shows infection like H. pylori.

**Treatment Based on Findings**
Medications for ulcers or inflammation, polyp removal, referral for surgery if cancer found, repeat surveillance intervals recommended.

**When to Call Your Doctor**
Severe abdominal pain, fever, vomiting blood, black/tarry stools, difficulty swallowing, or chest pain after upper endoscopy.`,
      keyTerms: [
        { term: 'Gastritis', definition: 'Inflammation of stomach lining' },
        { term: 'Varices', definition: 'Swollen veins that can bleed' },
        { term: 'Surveillance', definition: 'Regular monitoring for recurrence' },
        { term: 'H. pylori', definition: 'Bacteria causing stomach ulcers' },
        { term: 'Dysplasia', definition: 'Precancerous cellular changes' }
      ],
      clinicalNotes: 'H. pylori infection can be diagnosed via biopsy, urea breath test, or stool antigen. Barrett\'s esophagus requires surveillance endoscopy due to esophageal adenocarcinoma risk. Endoscopic mucosal resection (EMR) removes early-stage cancers.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['endoscopy', 'gastroenterology', 'diagnosis'],
    keywords: ['endoscopy', 'EGD', 'upper endoscopy', 'gastroscopy']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
