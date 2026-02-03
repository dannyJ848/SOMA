import { EducationalContent } from '../../types';

export const cholecystectomyContent: EducationalContent = {
  id: 'cholecystectomy',
  type: 'topic',
  name: 'Cholecystectomy',
  alternateNames: ['Gallbladder Removal', 'GB Surgery'],
  levels: {
    1: {
      level: 1,
      summary: 'A cholecystectomy is surgery to remove the gallbladder, a pear-shaped organ that stores bile, usually performed to treat gallstones that cause pain or other problems.',
      explanation: `## What is a Cholecystectomy?

A cholecystectomy is surgery to remove the gallbladder, a pear-shaped organ that stores bile. This is one of the most common surgeries performed, usually to treat gallstones that cause pain or other problems.

### Key Points

- Surgery to remove the gallbladder
- Commonly done for gallstones
- Almost always performed laparoscopically
- Recovery typically takes 1-2 weeks

### Important Terms

- **Gallbladder**: Organ storing bile under the liver
- **Bile**: Fluid digesting fats in the intestine
- **Gallstones**: Hard deposits in the gallbladder`,
      keyTerms: [
        { term: 'Gallbladder', definition: 'Organ storing bile under the liver' },
        { term: 'Bile', definition: 'Fluid digesting fats in the intestine' },
        { term: 'Gallstones', definition: 'Hard deposits in the gallbladder' }
      ],
      patientCounselingPoints: [
        'Cholecystectomy is very common and generally safe',
        'You can live a completely normal life without your gallbladder',
        'Most people go home the same day as surgery',
        'Recovery is usually quick with laparoscopic surgery'
      ]
    },
    2: {
      level: 2,
      summary: 'Gallbladder removal is recommended when you have symptoms from gallstones including biliary colic pain attacks, cholecystitis inflammation, or complications like pancreatitis.',
      explanation: `## Why is Cholecystectomy Needed?

Gallbladder removal is recommended when you have symptoms from gallstones or other gallbladder problems that don't respond to other treatments.

### Key Points

- Gallstones cause pain and complications
- Cholecystitis is gallbladder inflammation
- Biliary colic is gallbladder pain attacks
- Medications don't effectively treat gallstones

### Gallbladder Conditions

**Gallstones**
Hardened deposits of digestive fluid that can form in your gallbladder. Can range from grain-sized to golf ball-sized. Can block bile ducts causing pain.

**Cholecystitis**
Inflammation of the gallbladder, usually from a gallstone blocking the cystic duct. Causes severe right upper abdominal pain, fever, and nausea. Requires urgent surgery.

**Biliary Colic**
Pain attacks from temporary gallstone blockage. Typically occurs after fatty meals, lasting 1-5 hours. Pain is in the right upper abdomen or center of chest.

**Complications**
Gallstones can cause pancreatitis, cholangitis (bile duct infection), or gallbladder perforation if not treated. Surgery prevents these complications.`,
      keyTerms: [
        { term: 'Cystic duct', definition: 'Tube connecting gallbladder to bile duct' },
        { term: 'Pancreatitis', definition: 'Inflammation of the pancreas' },
        { term: 'Cholangitis', definition: 'Infection of bile ducts' },
        { term: 'Right upper quadrant', definition: 'Area where gallbladder pain occurs' }
      ],
      patientCounselingPoints: [
        'Gallbladder attacks often occur after eating fatty meals',
        'If you have gallstone symptoms, surgery is recommended to prevent complications',
        'Untreated gallstones can lead to serious complications like pancreatitis'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for cholecystectomy includes imaging tests to confirm gallstones, blood tests to evaluate liver and pancreas, fasting before surgery, and arranging transportation.',
      explanation: `## Preparing for Cholecystectomy

Proper preparation helps ensure a safe surgery and smooth recovery from gallbladder removal.

### Key Points

- You may need imaging tests before surgery
- Blood tests evaluate liver and pancreas
- Fasting is required before surgery
- Arrange for someone to drive you home

### Preparation Details

**Preoperative Testing**
Ultrasound confirms gallstones. Blood tests check liver function, white blood cell count, and pancreatic enzymes. For complicated cases, MRCP (MRI of bile ducts) may be needed.

**Medication Review**
Tell your surgeon about all medications including blood thinners, aspirin, NSAIDs, and herbal supplements. Some may need to be stopped before surgery.

**Before Surgery**
No eating or drinking after midnight before surgery. You may be instructed to shower with antibacterial soap. Arrive at the hospital/surgery center at your scheduled time.

**Questions to Ask**
Should I stop any medications? What should I bring? When can I eat after surgery? When can I return to work? What are the signs of complications?`,
      keyTerms: [
        { term: 'MRCP', definition: 'MRI of bile and pancreatic ducts' },
        { term: 'Liver function tests', definition: 'Blood tests measuring liver enzymes' },
        { term: 'Pancreatic enzymes', definition: 'Proteins digesting food' },
        { term: 'Preoperative holding', definition: 'Waiting area before surgery' }
      ],
      examples: [
        'A patient with right upper abdominal pain gets an ultrasound showing gallstones',
        'Someone with elevated liver enzymes may need MRCP to check for bile duct stones'
      ]
    },
    4: {
      level: 4,
      summary: 'Cholecystectomy is almost always performed laparoscopically using 3-4 small incisions under general anesthesia, with the surgeon carefully separating the gallbladder from liver and bile ducts.',
      explanation: `## The Cholecystectomy Procedure

Cholecystectomy is almost always performed laparoscopically, using several small incisions and specialized instruments.

### Key Points

- Laparoscopic surgery uses 3-4 small incisions
- Performed under general anesthesia
- Procedure takes 1-2 hours
- Most people go home same day

### Procedure Details

**Getting Started**
General anesthesia is administered. Antibiotics are given to prevent infection. The abdomen is cleaned and prepped. You're positioned on the operating table.

**Laparoscopic Technique**
Four small incisions are made. The abdomen is inflated with carbon dioxide. A camera provides visualization. Instruments are used to carefully separate the gallbladder from the liver and bile ducts.

**Critical View of Safety**
The surgeon identifies the cystic duct and artery clearly before clipping and cutting them. This prevents injury to the main bile duct. The gallbladder is removed through a small incision.

**If Surgery Converts to Open**
Occasionally, laparoscopic surgery is converted to open surgery with one larger incision. This may be needed for difficult anatomy, extensive inflammation, or complications.`,
      keyTerms: [
        { term: 'Critical view', definition: 'Clear identification of anatomy before cutting' },
        { term: 'Cystic artery', definition: 'Blood vessel supplying gallbladder' },
        { term: 'Common bile duct', definition: 'Main duct carrying bile to intestine' },
        { term: 'Intraoperative cholangiogram', definition: 'X-ray of bile ducts during surgery' }
      ],
      clinicalNotes: 'The critical view of safety is the standard for preventing bile duct injury. Intraoperative cholangiogram may be used to clarify anatomy or detect common bile duct stones. Conversion to open occurs in 2-5% of cases.'
    },
    5: {
      level: 5,
      summary: 'Most people recover quickly from cholecystectomy returning to normal activities in 1-2 weeks, with the liver still making bile which drips continuously into the intestine without long-term dietary restrictions.',
      explanation: `## Recovery and Life Without a Gallbladder

Most people recover quickly from cholecystectomy and can return to normal eating within weeks. You can live a completely normal life without your gallbladder.

### Key Points

- Most go home same day as surgery
- Return to normal activities in 1-2 weeks
- Digestive changes are usually temporary
- No long-term dietary restrictions

### Recovery Details

**Immediate Recovery**
Hospital stay: usually 0-1 day. You may have shoulder pain from trapped carbon dioxide - walking helps this pass. Pain is managed with medication.

**Diet After Surgery**
Start with clear liquids, advance as tolerated. Initially avoid fatty, greasy, and spicy foods. Most people return to normal diet within a few weeks. Some have looser stools initially.

**Activity After Surgery**
Walk frequently to prevent blood clots and gas pain. No heavy lifting (10+ lbs) for 2-4 weeks. Driving when off narcotics and can move freely. Work return depends on your job (1-2 weeks for desk work, 4-6 weeks for physical labor).

**Warning Signs**
Call your doctor for fever, worsening abdominal pain, vomiting, jaundice (yellowing of eyes/skin), or drainage from incisions. These could indicate bile duct injury or other complications.

**Living Without a Gallbladder**
Your liver still makes bile, which now drips continuously into the intestine rather than being stored. Most people have no long-term issues. A small percentage have more frequent bowel movements.`,
      keyTerms: [
        { term: 'Jaundice', definition: 'Yellowing from bile buildup' },
        { term: 'Post-cholecystectomy syndrome', definition: 'Continued symptoms after surgery' },
        { term: 'Bile duct injury', definition: 'Damage to bile ducts during surgery' },
        { term: 'Bile diarrhea', definition: 'Loose stools from bile reaching colon' },
        { term: 'Normal diet', definition: 'Regular eating without restrictions' }
      ],
      clinicalNotes: 'Bile duct injury occurs in 0.3-0.5% of cases. Retained common bile duct stones occur in 5-10% of patients. Post-cholecystectomy diarrhea affects 5-10% and may respond to bile acid sequestrants.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['cholecystectomy', 'gallbladder', 'gallstones'],
    keywords: ['cholecystectomy', 'gallbladder', 'gallstones', 'surgery']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
