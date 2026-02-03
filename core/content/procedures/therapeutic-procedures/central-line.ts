import { EducationalContent } from '../../types';

export const centralLineContent: EducationalContent = {
  id: 'central-line',
  type: 'topic',
  name: 'Central Line Placement',
  alternateNames: ['Central Venous Catheter', 'CVC', 'Central Venous Access'],
  levels: {
    1: {
      level: 1,
      summary: 'A central line, also called a central venous catheter, is a thin, flexible tube placed into a large vein near the heart that allows healthcare providers to give medications, fluids, and blood products, and to draw blood for tests.',
      explanation: `## What is a Central Line?

A central line, also called a central venous catheter, is a thin, flexible tube placed into a large vein near the heart. It allows healthcare providers to give medications, fluids, and blood products, and to draw blood for tests.

### Key Points

- Tube placed in a large vein near the heart
- Used for long-term intravenous treatments
- Allows multiple medications at once
- Avoids repeated needle sticks

### Important Terms

- **Central venous catheter**: Medical term for central line
- **Vein**: Blood vessel carrying blood to the heart
- **Intravenous (IV)**: Into the vein`,
      keyTerms: [
        { term: 'Central venous catheter', definition: 'Medical term for central line' },
        { term: 'Vein', definition: 'Blood vessel carrying blood to the heart' },
        { term: 'Intravenous (IV)', definition: 'Into the vein' }
      ],
      patientCounselingPoints: [
        'A central line can stay in place for weeks or months',
        'The insertion will be done under sterile conditions to prevent infection',
        'You may have some discomfort at the insertion site that improves with time',
        'Special care is needed to keep the central line clean and functioning'
      ]
    },
    2: {
      level: 2,
      summary: 'There are several types of central lines including PICC lines inserted in the upper arm, tunneled catheters placed in the chest, implanted ports entirely under the skin, and temporary non-tunneled catheters for short-term use.',
      explanation: `## Types of Central Lines

There are several types of central lines, each designed for different situations and durations of use.

### Key Points

- Tunneled catheters (like Hickman or Broviac)
- Peripherally inserted central catheters (PICC)
- Implanted ports (Port-a-Cath)
- Non-tunneled temporary catheters

### Central Line Types

**PICC Line**
Inserted in the upper arm and threaded to a large vein near the heart. Can stay in place for weeks to months.

**Tunneled Catheters**
Placed through a small incision in the chest. The catheter is tunneled under the skin to an exit site. Can remain for months to years.

**Implanted Ports**
Planted entirely under the skin. A small bump is felt on the chest. Accessed through the skin with a special needle. Low maintenance.

**Temporary Non-Tunneled**
Placed in the neck, groin, or upper chest for short-term use (days to weeks) in hospitalized patients.`,
      keyTerms: [
        { term: 'Tunneled', definition: 'Catheter placed under skin for stability' },
        { term: 'PICC', definition: 'Peripherally Inserted Central Catheter' },
        { term: 'Port', definition: 'Implanted device under skin for IV access' },
        { term: 'Lumen', definition: 'Channel inside catheter' }
      ],
      patientCounselingPoints: [
        'Your doctor will recommend the best type of central line for your situation',
        'PICC lines are often the simplest option for intermediate-term use',
        'Ports are very discreet but require a needle stick each time they\'re used'
      ]
    },
    3: {
      level: 3,
      summary: 'Central lines are necessary for certain medical treatments including long-term chemotherapy, total parenteral nutrition (TPN), frequent blood draws, and medications that damage small veins.',
      explanation: `## Why is a Central Line Needed?

Central lines are necessary for certain medical treatments and situations where regular IVs are inadequate.

### Key Points

- Long-term chemotherapy administration
- Total parenteral nutrition (TPN)
- Frequent blood draws
- Medications that damage small veins

### Reasons for Central Line

**Chemotherapy**
Cancer drugs can be very irritating to small veins. Central lines deliver them directly into large veins where they're quickly diluted.

**Nutritional Support**
TPN provides complete nutrition intravenously for people who cannot eat or absorb nutrients. Requires high flow through large veins.

**Medication Administration**
Certain antibiotics, heart medications, and vasopressors must be given through central veins for rapid effect and to prevent tissue damage.

**Frequent Blood Tests**
For patients with conditions requiring many blood draws, a central line eliminates repeated needle sticks.`,
      keyTerms: [
        { term: 'Chemotherapy', definition: 'Cancer treatment drugs' },
        { term: 'TPN', definition: 'Total Parenteral Nutrition - liquid nutrition' },
        { term: 'Vasopressors', definition: 'Drugs that raise blood pressure' },
        { term: 'Vesicant', definition: 'Medication that damages tissue if leaked' }
      ],
      examples: [
        'A cancer patient receiving chemotherapy for several months gets a PICC line',
        'Someone with severe bowel disease receiving TPN gets a tunneled catheter or port'
      ]
    },
    4: {
      level: 4,
      summary: 'Central line placement is performed under sterile conditions using ultrasound guidance, with the catheter threaded into a large vein and the position confirmed with X-ray before use.',
      explanation: `## The Central Line Placement Procedure

Central line placement is a sterile procedure that uses imaging guidance to ensure correct positioning.

### Key Points

- Performed under sterile conditions
- Ultrasound guidance is typically used
- Position is confirmed with X-ray
- Local anesthesia minimizes discomfort

### Procedure Details

**Preparation**
The skin is cleaned with antiseptic. Sterile drapes are used. Local anesthesia numbs the insertion area.

**Placement**
Ultrasound identifies the target vein. A needle is inserted into the vein, and a wire is threaded through it. The catheter follows the wire into position.

**Position Confirmation**
X-ray confirms the catheter tip is in the correct location near the heart. The catheter is then secured and covered with a dressing.

**Multiple Lumens**
Some central lines have multiple lumens (channels) allowing different medications to be given simultaneously without mixing.`,
      keyTerms: [
        { term: 'Sterile technique', definition: 'Infection prevention method' },
        { term: 'Ultrasound guidance', definition: 'Using ultrasound to visualize vein' },
        { term: 'Catheter tip', definition: 'End of the catheter' },
        { term: 'Confirmation x-ray', definition: 'X-ray verifying correct position' }
      ],
      clinicalNotes: 'Internal jugular is preferred over subclavian due to lower pneumothorax risk. Femoral veins have higher infection rates. Catheter-to-vein ratio affects blood flow and thrombosis risk.'
    },
    5: {
      level: 5,
      summary: 'Central line care includes regular dressing changes, flushing the line, and watching for complications including infection, blood clots, and catheter malfunction.',
      explanation: `## Central Line Care and Complications

Proper care of your central line is essential to prevent complications and ensure it functions properly.

### Key Points

- Regular dressing changes prevent infection
- Flushing maintains patency
- Watch for signs of infection
- Report any complications immediately

### Care and Complications

**Routine Care**
Dressings are changed regularly using sterile technique. The line is flushed with heparin or saline to prevent clotting. Exit site is inspected for redness or drainage.

**Infection Prevention**
Meticulous sterile technique during access and dressing changes is crucial. Antibiotic ointments may be used at the exit site. Daily site inspection is important.

**Common Complications**
Infection (most common), thrombosis (blood clot), catheter malfunction, pneumothorax (collapsed lung during placement), arterial injury.

**When to Call Your Doctor**
Fever, chills, redness or drainage at the site, swelling of the arm or neck on the side of the line, difficulty flushing the line, or shortness of breath.

**Removal**
When no longer needed, the line is removed by simply pulling it out after cutting any sutures. Pressure is applied to prevent bleeding.`,
      keyTerms: [
        { term: 'Patency', definition: 'Open and flowing state of catheter' },
        { term: 'Thrombosis', definition: 'Blood clot formation' },
        { term: 'Pneumothorax', definition: 'Collapsed lung' },
        { term: 'Sepsis', definition: 'Whole-body infection' },
        { term: 'Line infection', definition: 'Infection of the catheter' }
      ],
      clinicalNotes: 'Catheter-related bloodstream infection rate is approximately 2-7 per 1000 catheter-days. Femoral lines have highest infection rates. Chlorhexidine dressings reduce infection risk.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['central line', 'vascular access', 'IV therapy'],
    keywords: ['central line', 'CVC', 'PICC', 'port', 'vascular access']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
