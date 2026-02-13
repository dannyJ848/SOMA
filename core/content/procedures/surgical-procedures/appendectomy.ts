import { EducationalContent } from '../../types';

export const appendectomyContent: EducationalContent = {
  id: 'appendectomy',
  type: 'topic',
  name: 'Appendectomy',
  alternateNames: ['Appendicectomy', 'Appendix Removal'],
  levels: {
    1: {
      level: 1,
      summary: 'An appendectomy is surgery to remove the appendix, a small tube-like organ attached to the large intestine, usually done as an emergency to treat appendicitis.',
      explanation: `## What is an Appendectomy?

An appendectomy is surgery to remove the appendix, a small tube-like organ attached to the large intestine. This surgery is most often done as an emergency to treat appendicitis - inflammation of the appendix.

### Key Points

- Surgery to remove the appendix
- Emergency treatment for appendicitis
- Can be done laparoscopically or open
- Recovery typically takes 1-2 weeks

### Important Terms

- **Appendix**: Small tube attached to large intestine
- **Appendicitis**: Inflammation of the appendix
- **Laparoscopic**: Minimally invasive surgery using small incisions`,
      keyTerms: [
        { term: 'Appendix', definition: 'Small tube attached to large intestine' },
        { term: 'Appendicitis', definition: 'Inflammation of the appendix' },
        { term: 'Laparoscopic', definition: 'Minimally invasive surgery using small incisions' }
      ],
      patientCounselingPoints: [
        'Appendectomy is the only effective treatment for appendicitis',
        'Most people go home the same day or next day after surgery',
        'You will be able to return to normal activities within 1-2 weeks',
        'The surgery is very common and generally very safe'
      ]
    },
    2: {
      level: 2,
      summary: 'Appendicitis occurs when the appendix becomes blocked and inflamed, causing symptoms like abdominal pain, nausea, and fever that require prompt treatment to prevent rupture.',
      explanation: `## Understanding Appendicitis

Appendicitis occurs when the appendix becomes blocked and inflamed. Without treatment, it can rupture and cause serious infection.

### Key Points

- Caused by blockage of the appendix
- Symptoms include abdominal pain, nausea, fever
- Rupture can lead to life-threatening infection
- Prompt treatment is essential

### Appendicitis Details

**Causes**
Blockage can be caused by fecalith (hardened stool), enlarged lymph tissue, parasites, or rarely, tumors. The blockage leads to bacterial overgrowth and inflammation.

**Symptoms**
Pain often starts near the navel and moves to the right lower abdomen. Nausea, vomiting, loss of appetite, low-grade fever, and tenderness are common.

**Diagnosis**
Physical exam, blood tests (showing elevated white blood cells), and imaging (CT scan or ultrasound) help confirm the diagnosis.

**Complications**
Ruptured appendix can cause peritonitis (infection of abdominal lining) or abscess (pocket of pus). These complications require urgent treatment.`,
      keyTerms: [
        { term: 'Fecalith', definition: 'Hardened piece of stool' },
        { term: 'Peritonitis', definition: 'Infection of abdominal lining' },
        { term: 'Abscess', definition: 'Collection of pus' },
        { term: 'Right lower quadrant', definition: 'Area where appendix pain typically occurs' }
      ],
      patientCounselingPoints: [
        'Seek immediate medical attention if you suspect appendicitis',
        'Do not eat or drink if you think you have appendicitis - you may need surgery',
        'The pain often starts around the navel and moves to the right lower abdomen'
      ]
    },
    3: {
      level: 3,
      summary: 'There are two main surgical approaches for appendectomy: laparoscopic surgery using small incisions (preferred) and open surgery using one larger incision for complex cases.',
      explanation: `## Types of Appendectomy

There are two main surgical approaches to removing the appendix, each with different advantages.

### Key Points

- Laparoscopic surgery uses small incisions
- Open surgery uses one larger incision
- Laparoscopic is preferred when possible
- Open may be needed for ruptured appendix

### Surgical Approaches

**Laparoscopic Appendectomy**
Three or four small incisions (0.5-1 cm) are made. A camera and instruments are inserted through these ports. The appendix is removed through one of the small incisions, often in a bag.

**Open Appendectomy**
One larger incision (2-4 inches) is made in the right lower abdomen. The surgeon directly sees and removes the appendix. May be needed for ruptured appendix or prior abdominal surgery.

**Comparing Approaches**
Laparoscopic: less pain, smaller scars, shorter recovery, faster return to normal activities. Open: may be necessary for complex cases or if laparoscopic isn't available.

**Single-Incision Approach**
Some surgeons use SILS (Single Incision Laparoscopic Surgery), making all incisions through the navel for even better cosmetic results.`,
      keyTerms: [
        { term: 'SILS', definition: 'Single Incision Laparoscopic Surgery' },
        { term: 'Port', definition: 'Tube inserted through incision' },
        { term: 'Specimen bag', definition: 'Container to remove appendix' },
        { term: 'Conversion', definition: 'Switching from laparoscopic to open surgery' }
      ],
      examples: [
        'A patient with uncomplicated appendicitis has laparoscopic appendectomy with three small incisions',
        'Someone with a ruptured appendix may require open surgery to thoroughly clean the abdomen'
      ]
    },
    4: {
      level: 4,
      summary: 'An appendectomy is performed under general anesthesia, taking 30-60 minutes, with the appendix removed through small incisions using laparoscopic technique in most cases.',
      explanation: `## The Appendectomy Procedure

An appendectomy is performed under general anesthesia, meaning you'll be completely asleep during the procedure.

### Key Points

- Performed under general anesthesia
- Procedure takes 30-60 minutes
- You may have a drain if appendix ruptured
- You'll stay in the hospital for monitoring

### Procedure Details

**Anesthesia and Preparation**
General anesthesia is administered through an IV. Antibiotics are given to prevent infection. The abdomen is cleaned and prepped.

**Laparoscopic Technique**
The abdomen is inflated with carbon dioxide. The camera and instruments are inserted. The appendix is identified, separated from surrounding tissue, and removed. Its attachment to the colon is stapled or tied off.

**If Appendix Has Ruptured**
The abdomen is washed out thoroughly to remove infection. A drain may be placed to allow fluid to exit postoperatively. Antibiotics are continued longer.

**After Surgery**
You'll wake up in the recovery room. Pain medication is available. You'll be encouraged to walk soon after to prevent complications.`,
      keyTerms: [
        { term: 'General anesthesia', definition: 'Being completely asleep during surgery' },
        { term: 'Carbon dioxide', definition: 'Gas used to inflate abdomen' },
        { term: 'Stapler', definition: 'Device sealing and cutting tissue' },
        { term: 'Surgical drain', definition: 'Tube removing fluid from surgical site' }
      ],
      clinicalNotes: 'Laparoscopic appendectomy has become the standard of care. Antibiotic prophylaxis reduces surgical site infections. For perforated appendicitis, antibiotics may be continued for 3-5 days postoperatively.'
    },
    5: {
      level: 5,
      summary: 'Recovery from appendectomy takes 1-2 weeks for laparoscopic and 2-4 weeks for open surgery, with no long-term effects from appendix removal and patients living completely normal lives afterward.',
      explanation: `## Recovery and After-Care

Recovery from appendectomy is usually straightforward, but it's important to follow postoperative instructions carefully.

### Key Points

- Laparoscopic: 1-2 week recovery
- Open surgery: 2-4 week recovery
- Ruptured appendix: longer recovery
- Watch for signs of complications

### Recovery Details

**Immediate Recovery**
Hospital stay: 0-2 days for uncomplicated cases. Eat light foods initially and advance to normal as tolerated. Pain is managed with medication.

**Activity Restrictions**
No heavy lifting (10+ pounds) for 2-4 weeks. Walk regularly to prevent blood clots. Driving allowed when off narcotic pain meds and can move freely. Return to work in 1-4 weeks depending on job and surgery type.

**Incision Care**
Keep incisions clean and dry. Small strips (Steri-Strips) may be present - let them fall off naturally. Watch for redness, drainage, or fever.

**Warning Signs**
Call your doctor for fever above 101°F, worsening abdominal pain, vomiting, inability to pass gas or have a bowel movement, or redness/pus at incision sites.

**Long-Term Outlook**
No dietary restrictions after recovery. No long-term effects from appendix removal. You can live a completely normal life without your appendix.`,
      keyTerms: [
        { term: 'Steri-Strips', definition: 'Small adhesive strips closing incision' },
        { term: 'Narcotic', definition: 'Strong pain medication' },
        { term: 'Obstipation', definition: 'Inability to pass stool or gas' },
        { term: 'Dehiscence', definition: 'Wound opening' },
        { term: 'Normal diet', definition: 'Regular eating without restrictions' }
      ],
      clinicalNotes: 'Postoperative ileus is common and resolves with ambulation. stump appendicitis is a rare complication occurring when a portion of appendix remains. Fecaliths may cause abscess formation if not completely removed.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['appendectomy', 'surgery', 'appendicitis'],
    keywords: ['appendectomy', 'appendix', 'appendicitis', 'laparoscopic']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
