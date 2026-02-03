/**
 * Cholecystectomy
 *
 * Surgical removal of the gallbladder, typically for gallstones or cholecystitis.
 */

import { EducationalContent } from '../../types';

export const cholecystectomyContent: EducationalContent = {
  id: 'surgical-cholecystectomy',
  type: 'topic',
  name: 'Cholecystectomy',
  alternateNames: ['Gallbladder Removal', 'Gallbladder Surgery', 'Laparoscopic Cholecystectomy'],

  levels: {
    1: {
      level: 1,
      summary: 'Cholecystectomy is surgery to remove the gallbladder, usually when you have gallstones causing pain. The gallbladder stores bile that helps digest fats, but you can live without it.',
      explanation: `## What Is the Gallbladder?

The gallbladder is a small pear-shaped organ under your liver on the right side of your belly. It stores bile - a fluid made by your liver that helps digest fats from food.

## What Are Gallstones?

Gallstones are hard deposits of digestive fluid that can form in your gallbladder. They can be as small as a grain of sand or as large as a golf ball!

**Symptoms of Gallstones:**
- Severe pain in the upper right belly
- Pain that spreads to your right shoulder
- Nausea and vomiting
- Pain after eating fatty foods

## The Surgery

**Laparoscopic (Most Common):**
- 4 tiny cuts in your belly
- Camera and tools through the cuts
- Gallbladder removed through one of the cuts
- Same-day surgery or one night in hospital

**Open Surgery:**
- Larger cut under ribs on right side
- Used if laparoscopic isn't possible
- Longer recovery, larger scar

## Recovery

- **Hospital:** Often same-day or 1 night
- **Return to normal:** 1-2 weeks
- **Diet:** Avoid very fatty foods at first
- **Long-term:** Most people have no problems without gallbladder`,

      keyTerms: [
        { term: 'Bile', definition: 'Fluid made by liver that helps digest fats' },
        { term: 'Gallstones', definition: 'Hard deposits in the gallbladder that can cause pain' },
        { term: 'Cholecystitis', definition: 'Inflammation of the gallbladder, often from gallstones' },
        { term: 'Laparoscopic', definition: 'Surgery using small cuts and a camera' },
      ],
      analogies: [
        'The gallbladder is like a storage tank for bile - the liver makes it continuously and the tank releases it when needed.',
        'Gallstones are like rocks that form in a cave - they can block the exit.',
      ],
      examples: [
        'Someone who eats a fatty meal and gets severe right-sided belly pain',
        'A woman with repeated attacks of gallbladder pain needs surgery',
        'Patient with fever and severe pain needs emergency gallbladder surgery',
      ],
    },

    2: {
      level: 2,
      summary: 'Cholecystectomy is the definitive treatment for symptomatic cholelithiasis. Laparoscopic approach is standard, with conversion to open if needed.',
      explanation: `## Indications

**Symptomatic Gallstones:**
- Biliary colic attacks
- Chronic right upper quadrant pain
- Nausea, vomiting, fatty food intolerance

**Complications:**
- Acute cholecystitis (inflammation)
- Choledocholithiasis (stones in bile duct)
- Gallstone pancreatitis
- Gallbladder polyps (>1cm)

**Contraindications:**
- Asymptomatic gallstones (usually observe)
- Medical comorbidities prohibitive for surgery

## Surgical Approaches

**Laparoscopic (Standard):**
- 4 ports (umbilical x2, epigastric, right subcostal)
- Carbon dioxide insufflation
- Critical view of safety (Calot triangle)
- Ductal anatomy must be identified
- IOC (cholangiogram) if stone suspected

**Open (Converted or Primary):**
- Right subcostal incision
- For: Cirrhosis, portal hypertension, extensive adhesions
- Cannot safely identify anatomy laparoscopically
- Previous upper abdominal surgeries

## Anatomy

**Calot Triangle (Critical View of Safety):**
- Cystic duct medially
- Common bile duct inferiorly
- Liver bed superiorly
- Must be clearly seen before clipping

**Variations:**
- Cystic artery may be single or multiple branches
- Anatomical anomalies occur in 10-15%
- Ducts can run close to cystic artery`,

      keyTerms: [
        { term: 'Cholelithiasis', definition: 'Gallstones in the gallbladder or bile ducts' },
        { term: 'Biliary colic', definition: 'Pain from gallstone temporarily blocking bile duct' },
        { term: 'Calot triangle', definition: 'Critical anatomical area between cystic duct, common bile duct, and liver' },
        { term: 'IOC', definition: 'Intraoperative Cholangiogram - X-ray dye test to check for stones' },
        { term: 'Cystic duct', definition: 'Tube connecting gallbladder to common bile duct' },
      ],
      analogies: [
        'The Calot triangle is like a dangerous intersection - you need to see all three sides before proceeding.',
        'Biliary colic is like temporary traffic jam - when the stone moves, pain resolves.',
      ],
      examples: [
        'Patient with RUQ pain after fatty meal gets laparoscopic cholecystectomy',
        'IOC shows stone in CBD during surgery, requiring exploration',
        'Patient with cirrhosis gets open cholecystectomy (laparoscopic too risky)',
      ],
      clinicalNotes: 'Preoperative ultrasound confirms diagnosis. MRCP is gold standard for evaluating choledocholithiasis. Prophylactic antibiotics (cephazolin) given 30 min before incision. Most patients go home same day.',
    },

    3: {
      level: 3,
      summary: 'Cholecystectomy has a low complication rate but requires careful dissection to avoid bile duct injury. The critical view of safety is essential to prevent common bile duct injury.',
      explanation: `## Surgical Steps

1. **Establish Pneumoperitoneum**
   - 15 mmHg CO2 pressure
   - Veress needle or Hassan technique

2. **Ports and Exposure**
   - Grasp fundus, retract liver cephalad
   - Expose Calot triangle

3. **Identify Anatomy**
   - Cystic duct
   - Cystic artery
   - Common bile duct (important!)

4. **Critical View of Safety**
   - Cystic duct and artery clipped
   - Gallbladder separated from liver bed
   - Ductal anatomy confirmed

5. **Remove Gallbladder**
   - Hook cautery dissection
   - Extract through umbilical port

6. **Inspect**
   - Confirm hemostasis
   - Check for bile leak
   - May leave drain if concerned

## Complications

**Bile Duct Injury (0.3-0.5%):**
- Most devastating complication
- Clip on wrong structure
- Transection of CBD
- Requires complex reconstruction

**Bile Leak:**
- From gallbladder bed
- From cystic duct stump
- Usually self-limited

**Bleeding:**
- Cystic artery injury
- Liver bed bleeding
- May require conversion to open

**Injury to Adjacent Organs:**
- Duodenum, colon, liver
- Bowel injury: 0.1-0.2%

**Retained Stones:**
- Missed during surgery
- May need ERCP for extraction`,

      keyTerms: [
        { term: 'Pneumoperitoneum', definition: 'Inflating the belly with gas to create working space' },
        { term: 'Cystic artery', definition: 'Artery supplying the gallbladder - usually off the right hepatic artery' },
        { term: 'Common bile duct', definition: 'Main tube carrying bile from liver to intestine' },
        { term: 'ERCP', definition: 'Endoscopic Retrograde Cholangiopancreatography - scope procedure to remove bile duct stones' },
        { term: 'Pneumoperitoneum', definition: 'Gas filling abdomen for laparoscopic surgery' },
      ],
      analogies: [
        'Bile duct injury is like damaging the main pipe - it\'s very hard to fix.',
        'Retained stones are like leaving tools behind after a job - they cause problems later.',
      ],
      examples: [
        'Cystic duct misidentified as CBD - clips placed wrong, requires reconstruction',
        'Bile leak detected post-op, drain placed, resolves spontaneously',
        'Patient with persistent pain after surgery found to have retained CBD stone on MRCP',
      ],
      clinicalNotes: 'The incidence of bile duct injury has not decreased with the rise of laparoscopic cholecystectomy. The "culture of safety" is paramount - when in doubt, convert to open or get help. IOC can reduce but not prevent injury. Never clip any structure without clear identification.',
    },

    4: {
      level: 4,
      summary: 'Laparoscopic cholecystectomy is the gold standard with excellent outcomes. Contraindications include cirrhosis with portal hypertension and portal venous system thrombosis.',
      explanation: `## Special Situations

**Cirrhosis and Portal Hypertension:**
- Significant bleeding risk
- Gallbladder varices
- Avoid laparoscopic approach
- Consider open cholecystectomy

**Pregnancy:**
- Surgery in 2nd trimester preferred
- Avoid in 1st trimester (organogenesis)
- Avoid in 3rd trimester (uterus size)

**Previous Upper Abdominal Surgery:**
- Adhesions may obscure anatomy
- Consider open approach
- Higher conversion rate

**Gangrenous Cholecystitis:**
- Severe inflammation
- Tissue friability
- Subtotal cholecystectomy
- May need drain

## Outcomes

**Relief of Symptoms:**
- 90-95% complete resolution
- Biliary colic eliminated
- Food tolerance returns

**Changes in Digestion:**
- Bile continuously drips into intestine
- 20-30% have loose stools initially
- Most adapt within weeks
- Avoid very fatty meals initially

**Quality of Life:**
- Excellent improvement in most patients
- No dietary restrictions long-term
- Can return to normal activities`,

      keyTerms: [
        { term: 'Friability', definition: 'Tissue that is fragile and easily damaged' },
        { term: 'Subtotal cholecystectomy', definition: 'Leaving part of gallbladder behind to avoid injury to vital structures' },
        { term: 'Biliary colic', definition: 'Pain from gallstone blocking cystic duct temporarily' },
      ],
      analogies: [
        'Gangrenous cholecystitis is like tissue that has been cooked - it falls apart easily.',
        'Conversion is like changing from a bicycle to a car because the road got too rough.',
      ],
      examples: [
        'Patient with cirrhosis and portal hypertension has massive bleeding during laparoscopic surgery',
        'Pregnant woman at 16 weeks gets cholecystectomy safely',
        'Emergency gallbladder surgery converted to open due to severe inflammation',
      ],
      clinicalNotes: 'Patients with porcelain gallbladder (calcified wall) have higher risk of gallbladder cancer. Incidental gallbladder cancer is found in 0.5-1% of specimens. Consider preoperative imaging to identify these high-risk cases.',
    },

    5: {
      level: 5,
      summary: 'Cholecystectomy remains the definitive treatment for symptomatic gallstone disease. Silent gallstones do not require prophylactic cholecystectomy.',
      explanation: `## Evidence-Based Practice

**Observation vs. Surgery:**
- Asymptomatic gallstones: Observe (ACG guidelines)
- Symptomatic: Surgery recommended
- Diabetes: Consider earlier surgery
- Immunosuppression: Consider earlier surgery

**Timing After Acute Cholecystitis:**
- Early (within 72 hrs): Safe, lower complication rate
- Delayed (6+ weeks): Inflammation resolves but higher conversion rate
- Severe cases: Emergency surgery

**Choledocholithiasis Management:**
- Intraoperative IOC for suspected stones
- Postoperative ERCP for retained stones
- Laparoscopic CBD exploration possible
- Surgeon expertise dependent

## Controversies

**Intraoperative Cholangiogram:**
- Routine vs. selective?
- Routine: Detects unsuspected stones (5-10%)
- Selective: Lower cost, less time
- Trending toward selective use

**Intraoperative Ultrasound:**
- Increasingly popular
- Radiation-free
- Requires training
- May replace IOC

**Routine Subtotal Cholecystectomy:**
- Leave posterior wall for safety
- Reduces risk of CBD/liver injury
- Recurrence risk low but present
- Indicated in difficult dissections

## Minimally Invasive Approaches

**Single-Incision Laparoscopy:**
- Single umbilical incision
- Less pain, better cosmesis
- Technically challenging
- Longer OR time

**Robotic Cholecystectomy:**
- Similar outcomes to laparoscopic
- 3D visualization
- Wristed instruments
- Rarely used due to cost

## Future Directions

**NOTES (Natural Orifice Transluminal Endoscopic Surgery):**
- Transvaginal cholecystectomy
- Experimental
- Potential scar-free surgery

**Fluorescence Cholangiography:**
- Indocyanine green injection
- Real-time bile duct imaging
- May replace IOC

**Cultural and Genetic Considerations:**
- Gallstone disease varies by ethnicity
- Higher risk in Native Americans, Hispanics
- Genetic factors influence stone formation`,

      keyTerms: [
        { term: 'ACG guidelines', definition: 'American College of Gastroenterology recommendations for gallbladder management' },
        { term: 'Porcelain gallbladder', definition: 'Gallbladder with calcified wall, associated with cancer risk' },
        { term: 'Incidental cancer', definition: 'Cancer found unexpectedly during surgery for different reason' },
        { term: 'Indocyanine green', definition: 'Dye that fluoresces under near-infrared light, used to visualize bile ducts' },
      ],
      analogies: [
        'Single-incision is like using one multipurpose tool instead of several specialized ones.',
        'Porcelain gallbladder is like a calcified shell - very hard and associated with cancer.',
      ],
      examples: [
        'Diabetic patient with asymptomatic stones gets elective cholecystectomy',
        'Patient with suspected CBD stone gets IOC showing normal ducts',
        'Severe cholecystitis converted to open surgery due to tissue friability',
      ],
      clinicalNotes: 'Postcholecystectomy syndrome (PCS) affects 10-15% of patients - symptoms persist despite surgery. Causes include retained stones, CBD stones, sphincter of Oddi dysfunction, or functional disorders. ERCP with sphincterotomy may help.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['surgery', 'gallbladder', 'gallstones', 'laparoscopic', 'general-surgery'],
    systems: ['digestive'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['surgery'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
